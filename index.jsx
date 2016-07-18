import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// components
import { Sidebar } from './src/components/sidebar.jsx';
import { Content } from './src/components/content.jsx';
import { About } from './src/components/about.jsx';
import { Post } from './src/components/post.jsx';
import { Footer } from './src/components/footer.jsx';
import { Tags, Tag } from './src/components/tags.jsx';
import { Nav} from './src/components/nav.jsx';

//sytles
require('./bower_components/pure/pure-min.css');
require('./bower_components/pure/grids-responsive-min.css');
require('./bower_components/font-awesome/css/font-awesome.min.css');
require('./dist/assets/blog.css');

var url = require('./src/static/profile.png');
var links_url = require('./src/static/links.json');
var posts_url = require('./src/static/posts.json');

var noMatch = React.createClass({
  render: function () {
    return (
      <p> no router matched </p>
    );
  }
});

var Body = React.createClass({
  getInitialState: function () {
		return {
					title:"",
					links:[],
				};
	},
	componentDidMount: function(){
		fetch(links_url).then(response => response.json())
			.then(data => this.setState(data));
	},
  render: function () {
    return (
      <div className="pure-g">
        <Sidebar logo={url} links={this.state.links} title={this.state.title} />
        <content className="content pure-u-1-1 pure-u-md-3-4">
          <Nav  links={this.state.links}/>
          {this.props.children || <Content posts={posts_url} />}
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
      <Route path="/tags" component={Tags}>
        <Route path="/tag/:tag" component={Tag}/>
      </Route>
      <Route path="*" component={noMatch}/>
    </Route>
  </Router>
), document.getElementById('wrapper'));
