import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
// components
import { Sidebar } from './src/components/sidebar.jsx';
import { Content } from './src/components/content.jsx';
import { About } from './src/components/about.jsx';

//sytles
require('./src/sytles/blog.scss');
var url = require('./src/static/profile.png');
var links_url = require('./src/static/links.json');
var posts_url = require('./src/static/posts.json');

var Body = React.createClass({
  render: function () {
    return (
      <div className="pure-g">
        <Sidebar logo={url} socials={links_url}  />
        {this.props.children ||<Content posts={posts_url}/>}
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Body}>
      <Route path="about" component={About}/>
      <Route path="*" component={Body}/>
    </Route>
  </Router>
), document.getElementById('wrapper'));
