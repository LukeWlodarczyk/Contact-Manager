import React from 'react';

export default ({ location }) => (
	<div>
		<h1 className="display-4 text-center">
			<span className="danger">404</span> Page Not Found
		</h1>
		<p className="lead text-center">
			Sorry,{' '}
			{location.state
				? `contact with id ---> ${location.state.id}`
				: 'this page'}{' '}
			does not exist...
		</p>
	</div>
);
