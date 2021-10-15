const path = require("path")
const fs = require("fs")
const slugify = require('slugify');
const dirPath = path.join(__dirname, "../posts/")

let postlist = [];

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            // printing the file list
            console.log(file);
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
        
                // const date = new Date(metadata.date)
                // const timestamp = date.getTime() / 1000;
                const slug = slugify(metadata.title, { strict: true, lower: true });
                post = {
                    id: slug,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author given",
                    date: metadata.date ? metadata.date : "No date given",
                    content: content ? content : "No content given",
                }
                postlist.push(post)
                
                // sending this to the db.

                // console.log(postlist);
                

                if (i === files.length - 1) {
                    const sortedList = postlist.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    // delete existing posts.json file to create new one
                    fs.unlink(path.join(__dirname, '../out/posts.json'), (err) => {
                        if (err) throw err;
                        // console.log('posts.json deleted!');
                    });

                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync(path.join(__dirname, '../out/posts.json'), data)
                    // console.log('Data : ' + data);
                }
                
            })
        })
    })
    return 
}

getPosts();