import React from 'react';

export var Social = React.createClass({
	render: function(){
			var list = [];
			this.props.socials.foreach(function(link){
				list.push(<li><a href={link.url} className={link.name}>{link.name}</a></li>)
			};
			return (
				<ul>
					{list}
				</ul>
			);
		);
	},
});
