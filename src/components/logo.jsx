import React  from 'react';

export var Logo = React.createClass({
  render: function () {
    return (
      <a href="/">
        <img className="pure-img-responsive" src={this.props.url} />
      </a>
    );
  },
});
