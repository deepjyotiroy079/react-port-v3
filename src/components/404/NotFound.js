import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<Link className="links" to={`/`}>
				&#8592; Back
			</Link>
			<p>Wow so empty!</p>
		</div>
	);
};

export default NotFound;
