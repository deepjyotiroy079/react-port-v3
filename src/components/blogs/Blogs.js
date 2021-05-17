import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SingleBlog } from './SingleBlog';

export const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	const fetchBlogs = async () => {
		await fetch('http://localhost:1337/api/blogs/')
			.then((response) => response.json())
			.then((data) => setBlogs(data.blogs));
	};

	useEffect(() => {
		fetchBlogs();
	}, []);
	return (
		<div>
			{blogs &&
				blogs.map((blog) => (
					<Switch>
						<Route exact path="/">
							<Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
						</Route>
						<Router exact path={`/blog/:${blog.slug}`} component={SingleBlog} />
					</Switch>
				))}
		</div>
	);
};