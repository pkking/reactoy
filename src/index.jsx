import  React  from 'react';
import  ReactDOM  from 'react-dom';
import { grids, buttons } from 'pure-css';

// components
import { Sidebar } from './src/components/sidebar.jsx';
import { Content } from './src/components/content.jsx';
import { Footer } from './src/components/footer.jsx';

var Body = React.createClass({
  render: function() {
    return (
	<div>
		<Sidebar />
		<Content />
		<Footer />
	</div>
    );
  }
});

ReactDOM.render(
  <Body />,
  document.getElementById('wrapper')
);
