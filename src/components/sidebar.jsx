import React  from 'react';
import {Logo} from './logo';
import {Social} from './Social';
import {Link} from 'react-router';

export var Sidebar = React.createClass({
	render: function () {
		return (
			<header className="sidebar pure-u-1-1 pure-u-md-1-4">
				<div className="sidebarContainer">
					<Logo url={this.props.url}/>
					<h1>
						<a href="/">{this.props.title}</a>
					</h1>
					<Social links={this.props.socials}/>
					<Link to='/about'>about</Link>
				</div>
			</header>
		);
	},
});
