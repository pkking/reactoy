import  React  from 'react';
import  ReactDOM  from 'react-dom';
// components
import { Sidebar } from './src/components/sidebar.jsx';
import { Content } from './src/components/content.jsx';
import { Footer } from './src/components/footer.jsx';

//sytles
require('./src/sytles/blog.scss');
var url = require('./src/static/profile.png');

var Body = React.createClass({
  render: function() {
    return (
      <div className="pure-g">
        <Sidebar url={this.props.url} />
        <Content />
        <Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <Body url={url} />,
  document.getElementById('wrapper')
);
