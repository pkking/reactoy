import  React  from 'react';
import {Logo} from './logo';

export var Sidebar = React.createClass({
	render: function(){
		return (
			<header className="sidebar pure-u-1-1 pure-u-md-1-4">
				<Logo url={this.props.url}/>
			</header>
		);
	},
});
