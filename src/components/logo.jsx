import React  from 'react';
import {Link} from 'react-router'

export var Logo = React.createClass({
  render: function () {
    return (
      <Link to="/">
        <img className="pure-img-responsive logo-side" src={this.props.logo} />
      </Link>
    );
  },
});
