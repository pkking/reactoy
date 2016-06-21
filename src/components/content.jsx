import React  from 'react';
import {Footer} from './footer.jsx';
import {Posts} from './posts.jsx';

export var Content = React.createClass({
	getInitialState: function () {
		return { posts: [] };
	},
	componentDidMount: function () {
		fetch(this.props.posts).then(response => response.json())
			.then(data => this.setState(data));
	},
	render: function () {
		const posts = this.state.posts ? this.state.posts : [];
		return (
			<content className="content pure-u-1-1 pure-u-md-3-4">
				<Posts posts={posts}/>
				<Footer />
			</content>
		);
	},
});