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

var Body = React.createClass({
  render: function () {
    var socials = [{name:'weibo',url:'http://weibo.com/lcrrrr/'},{name:'github',url:'https://github.com/pkking'}];
    return (
      <div className="pure-g">
        <Sidebar url={url} socials={socials} />
        <Content posts={[{title:"first post",content:"hello world"},{title:"second post", content:"hello second"}]}/>
      </div>
    );
  }
});
/*
ReactDOM.render(
  <Body url={url} socials={[{name:'weibo',url:'http://weibo.com/lcrrrr/'},{name:'github',url:'https://github.com/pkking'}]} />,
  document.getElementById('wrapper')
);
*/
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Body}>
      <Route path="about" component={About}/>
      <Route path="*" component={Body}/>
    </Route>
  </Router>
), document.getElementById('wrapper'));
