import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import parse from 'html-react-parser';
import moment from 'moment';

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
		<div style={{ width: `100%`, margin: `50px` }}>
			<h1>{blog.post.title}</h1>
            <h4>{blog.post.description}</h4>
            <p>{ moment(blog.post.createdOn).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <div>{ parse(`${blog.post.sanitizedHtml}`) }</div>
            <Link to="/">←Go back</Link>
		</div>
	);
};
