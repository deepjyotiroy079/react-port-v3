import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import parse from 'html-react-parser';

export const SingleBlog = () => {
	let { slug } = useParams();
	let [blog, setBlog] = useState({ post: {}});

	const fetchBlogBySlug = async (slug) => {
		await fetch(`http://localhost:1337/api/blogs/${slug}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setBlog({
					post: data,
				});
			});
	};

	useEffect(() => {
		fetchBlogBySlug(slug);
	}, [slug]);

	return (
		<div>
			<h1>{blog.post.title}</h1>
            <h4>{blog.post.description}</h4>
            <p>{blog.post.createdOn}</p>
            <p>{ parse(`${blog.post.sanitizedHtml}`) }</p>
            <Link to="/">←Go back</Link>
		</div>
	);
};
