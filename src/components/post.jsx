import React from 'react';
import { Footer } from './footer.jsx';

export var Post = React.createClass({
    render: function () {
        //console.log('in post'+this.props.params);
        return (
            <div className="postDetail">
                <h1>{this.props.params.id}</h1>
			</div>
        );
    }
});