import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// components
import { Sidebar } from './src/components/sidebar.jsx';
import { Content } from './src/components/content.jsx';
import { About } from './src/components/about.jsx';
import { Post } from './src/components/post.jsx';
import {Footer} from './src/components/footer.jsx';

//sytles
require('./dist/assets/blog.css');
var url = require('./src/static/profile.png');
var links_url = require('./src/static/links.json');
var posts_url = require('./src/static/posts.json');

var Body = React.createClass({
  render: function () {
    return (
      <div className="pure-g">
        <Sidebar logo={url} socials={links_url}  />
        <content className="content pure-u-1-1 pure-u-md-3-4">
          {this.props.children ||<Content posts={posts_url}/>}
          <Footer />
        </content>
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Body}>
      <Route path="about" component={About}/>
      <Route path="/post/:id" component={Post}/>
      <Route path="*" component={Body}/>
    </Route>
  </Router>
), document.getElementById('wrapper'));
