import React  from 'react';
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
		//const posts = this.state.posts ? this.state.posts : [];
		//console.log(this.state.posts);
		return (			
			<Posts posts={this.state.posts} links={this.props.links} />
		);
	},
});