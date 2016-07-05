import React  from 'react';
import { Link } from 'react-router';

export var Nav = React.createClass({
    render: function () {
        var list = [];
        for(var i = 0; i < this.props.links.length; i++){
            list.push(<li key={this.props.links[i].key} className="pure-menu-item">
                    <Link to={this.props.links[i].url} className="pure-menu-link">{this.props.links[i].name}</Link></li>);
        }
        return (
            <div className="nav pure-menu pure-menu-horizontal">
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><Link to="/" className="pure-menu-link">首页</Link></li>
                    <li className="pure-menu-item"><Link to="/about" href="#" className="pure-menu-link">关于</Link></li>
                    <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                        <Link to="/" id="menuLink1" className="pure-menu-link">社交</Link>
                        <ul className="pure-menu-children">
                            {list}
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});