import React from 'react';

export var Social = React.createClass({
	render: function () {
		var list = [];
		for (var i = 0; i < this.props.links.length; i++) {
			var i_name = '';
			switch (this.props.links[i].name) {
				case 'weibo':
					i_name = 'fa fa-weibo';
					break;
				case 'github':
					i_name = 'fa fa-github';
					break;
				default:
					i_name = '';
					break;
			}
			list.push(<li key={i} className="Socalink"><a href={this.props.links[i].url} className={this.props.links[i].name}><i className={i_name}></i></a></li>);
		};
		return (
			<ul  className="Socal">
				{list}
			</ul>
		);
	},
});
