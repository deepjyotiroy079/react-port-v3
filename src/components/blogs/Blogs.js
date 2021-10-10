// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import postlist from '../../out/posts.json';

export const Blogs = () => {
	// const excerptList = postlist.map((post) => {
	// 	return post.content.split(' ').slice(0, 20).join(' ') + '...';
	// });
	return (
		<div>
			{postlist.length &&
				postlist.map((post, i) => {
					return (
						<div key={i} className="post-card">
							<h2>
								<Link className="links" to={`/blog/${post.id}`}>
									{post.title}
								</Link>
							</h2>
							<span>
								Published on {post.date}
							</span>
							{/* <Markdown
								children={excerptList[i]}
								escapeHtml={false}
							/> */}
							{/* <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(excerptList[i]))}}></div> */}
						</div>
					);
				})}
		</div>
	);
};
