import React, { useEffect, useState } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import postList from '../../out/posts.json';
import ReactMarkdown from 'react-markdown';
import marked from 'marked';
import Seperator from '../seperator/Seperator';
import { Footer } from '../footer/Footer';
const DOMPurify = require('dompurify')(window);


export const SingleBlog = (props) => {
	// const slug = useParams();
	const { slug } = useParams();
	console.log(slug);
	if (!slug) {
		console.log('Slug is not present');
		<Redirect to="/404" />;
	} else {
		console.log('slug is present');
		const fetchedPost = {};
		let postExists = false;
		postList.forEach((post, i) => {
			if (slug === post.id) {
				// console.log('slug is equal to post id');
				// console.log(`post id`, post.id);
				fetchedPost.title = post.title
					? post.title
					: 'No Title Provided';
				fetchedPost.date = post.date ? post.date : 'No Date provided';
				fetchedPost.author = post.author
					? post.author
					: 'No author given';
				fetchedPost.content = post.content
					? post.content
					: 'No content given';
				// console.log(`single post : `, postExists);
				postExists = true;
			}
			// } else {
			// 	// console.log('slug is not equal');
			// 	// console.log(`slug`, slug);
			// }
			// console.log(`Inside foreach : `, postExists);
		});
		// console.log(`Outside foreach : `, postExists);
		if (postExists === false) {
			return <Redirect to="/404" />;
		}
		// console.log(`The Content : `, fetchedPost.content);
		return (
			<>
			<div className="post">
				<Link className="links" to={`/`}>
					&#8592; Back
				</Link>
				<h1>{fetchedPost.title}</h1>
				<span>
					{fetchedPost.date} 
				</span>
				<div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(fetchedPost.content))}}>
				</div>
			</div>
			<Seperator my={[4, 5]} width={['50%', '25%']} height={24} />
			<Footer />
			</>
			
		);
	}

	// console.log(slug);
};
