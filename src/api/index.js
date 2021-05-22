
export const createPost = (blog) => {
    fetch('http://localhost:1337/api/blogs', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
    })
}