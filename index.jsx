import  React  from 'react';
import  ReactDOM  from 'react-dom';
// components
import { Sidebar } from './src/components/sidebar.jsx';
import { Content } from './src/components/content.jsx';
import { Footer } from './src/components/footer.jsx';

//sytles
require('./src/sytles/blog.scss');

var Body = React.createClass({
  render: function() {
    return (
      <div className="pure-g">
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
