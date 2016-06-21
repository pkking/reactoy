import React from 'react';
import { Footer } from './footer.jsx';

export var Post = React.createClass({
    render: function () {
        console.log('in post'+this.props.params);
        return (
            <div className="content pure-u-1-1 pure-u-md-3-4">
                <h1>{this.props.params.id}</h1>
				<Footer />
			</div>
        );
    }
});