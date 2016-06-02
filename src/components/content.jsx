import  React  from 'react';
import { grids, buttons } from 'pure-css';

export var Content = React.createClass({
	render: function(){
		return (
			<div styleName="pure-g">
				<content className="pure-u-1-1 pure-m-3-4">
					hello world
				</content>
			</div>
		);
	},
});
