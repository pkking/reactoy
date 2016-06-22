import React from 'react';
import {Link} from 'react-router';

var tags_url = require('../static/tags.json');

export var Tags = React.createClass({
    getInitialState: function () {
        return {
            "tags":[],
        };
    },
    componentDidMount: function(){
		fetch(tags_url).then(response => response.json())
			.then(data => this.setState(data));
	},
    render:function () {
        var tags = [];
        if(this.state.tags){
            this.state.tags.map(function (tag, i, array) {
                tags.push(<li><Link to={"/tag/"+tag}>{tag}</Link></li>);
            })
        }
        return (
            <div>
                {this.props.children ||
                    <ul>
                        tags
                    </ul>
                }
            </div>
        );
    },
});

export var Tag = React.createClass({
    render: function () {
        console.log("in tag"+this.props.params.tag);
        return (
            <p>{this.props.params.tag? "this is tag: "+this.props.params.tag:""}</p>
        );
    }
});