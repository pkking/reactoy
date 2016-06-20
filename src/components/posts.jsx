import React  from 'react';

export var Posts = React.createClass({
	render: function () {
		var list = [];
		if (this.props.posts.length <= 0) {
			list.push(<p key="noPosts"> No Posts existed </p>);
		}
		else {
			for (var i = 0; i < this.props.posts.length; i++) {
				//console.log(this.props.posts[i].key);
				list.push(<div key={this.props.posts[i].key} class='post'><h2 >{this.props.posts[i].title}</h2>
					<p>{this.props.posts[i].content}</p></div>);
			}
		}
		return (
			<div class='posts'>
				{list}
			</div>
		);
	}
});
