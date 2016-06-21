import React from 'react';
import {Footer} from './footer.jsx';

export var About = React.createClass({
	render: function () {
		return (
			<div className="content pure-u-1-1 pure-u-md-3-4">
				<p> this is about </p>
				<Footer />
			</div>
		);
	}
});
