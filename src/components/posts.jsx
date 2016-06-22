import React  from 'react';
import {Link} from 'react-router';

var PostItem = React.createClass({
	render: function () {
		var  tags = [];
		if(this.props.post.tags){
			this.props.post.tags.map(function (tag, i){
				if(i != 0){
					tags.push(", ")
				}
				tags.push(<Link key={tag} className="tag" to={"/tag/"+tag}>{tag}</Link>);
				
			})
		}
		return (
		<article>
			<header>
				<h2><Link to={"/post/"+this.props.post.key}>{this.props.post.title}</Link></h2>
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
			list.push(<p key="noPost"> No Posts existed </p>);
		}
		else {
			for (var i = 0; i < this.props.posts.length; i++) {
				if(i != 0)
					list.push(<hr key={this.props.posts[i].key+"hr"}/>);
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
