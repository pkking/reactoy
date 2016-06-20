import React  from 'react';
import {Logo} from './logo';
import {Social} from './Social';
import {Link} from 'react-router';

export var Sidebar = React.createClass({
	getInitialState: function () {
		return {
					title:"",
					links:[],
				};
	},
	componentDidMount: function(){
		fetch(this.props.socials).then(response => response.json())
			.then(data => this.setState(data));
	},
	render: function () {
		return (
			<header className="sidebar pure-u-1-1 pure-u-md-1-4">
				<div className="sidebarContainer">
					<Logo logo={this.props.logo}/>
					<h1>
						<a href="/">{this.state.title}</a>
					</h1>
					<Social links={this.state.links}/>
					<Link to='/about'>about</Link>
				</div>
			</header>
		);
	},
});
