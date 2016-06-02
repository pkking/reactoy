//var React = require('react');
//var ReactDOM = require('react-dom');
//var require('pure-css');
import {React } from 'react';
import {ReactDOM} from 'react-dom';
import {buttons, grids } from 'pure-css';

var Header = React.createClass({
  render: function() {
    return (
	    <div className="header" styleName="pure-g" > 
		    hello world.
	    </div>
    );
  }
});

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('content')
);
