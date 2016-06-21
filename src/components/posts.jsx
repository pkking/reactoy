import React  from 'react';
import {Link} from 'react-router';

var PostItem = React.createClass({
	render: function () {
		var  tags = [];
		if(this.props.post.tags){
			this.props.post.tags.map(function (tag, i, array){
				if(i != 0){
					tags.push(", ")
				}
				tags.push(<Link className="tag" to={"/post"+array[i].key}>{tag}</Link>);
				
			})
		}
		console.log(tags);
		return (
		<article>
			<header>
				<Link to={"/post/"+this.props.post.key}><h2>{this.props.post.title}</h2></Link>
				<p className="tagHeader">
					{this.props.post.pubTime? "发布于 "+this.props.post.pubTime:""}
					{tags}
				</p>
			</header>
			<div>
				{this.props.post.content}
			</div>
		</article>
		);
	}
})

export var Posts = React.createClass({
	render: function () {
		var list = [];
		if (this.props.posts.length <= 0) {
			list.push(<p key="noPosts"> No Posts existed </p>);
		}
		else {
			for (var i = 0; i < this.props.posts.length; i++) {
				if(i != 0)
					list.push(<hr/>);
				list.push(<PostItem key={this.props.posts[i].key} post={this.props.posts[i]}/>);
			}
		}
		return (
			<div className='posts'>
				{list}
			</div>
		);
	}
});
