import React  from 'react';
import {Footer} from './footer.jsx';
import {Posts} from './posts.jsx';

export var Content = React.createClass({
	render: function () {
		return (
			<content className="content pure-u-1-1 pure-u-md-3-4">
				<Posts posts={this.props.posts}/>
				<Footer />
			</content>
		);
	},
});
