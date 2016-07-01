import React  from 'react';
import { Link } from 'react-router';

export var Nav = React.createClass({
    render: function () {
        return (
            <div className="nav pure-menu pure-menu-horizontal">
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><Link to="/" className="pure-menu-link">首页</Link></li>
                    <li className="pure-menu-item"><Link to="/about" href="#" className="pure-menu-link">关于</Link></li>
                    <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                        <Link to="/" id="menuLink1" className="pure-menu-link">社交</Link>
                        <ul className="pure-menu-children">
                            <li className="pure-menu-item"><Link href="#" className="pure-menu-link">Email</Link></li>
                            <li className="pure-menu-item"><Link href="#" className="pure-menu-link">Twitter</Link></li>
                            <li className="pure-menu-item"><Link href="#" className="pure-menu-link">Tumblr Blog</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});