import  React  from 'react';

export var Logo = React.createClass({
    render : function(){
      return(
        <img className="pure-img" src={this.props.url} />
      );
    },
});