var React = require('react');
var ReactDOM = require('react-dom');
//import {React } from 'react';

var HelloWorld = React.createClass({
  render: function() {
    return (
	    <div className="hello"> 
		    hello world.
	    </div>
    );
  }
});

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('content')
);
