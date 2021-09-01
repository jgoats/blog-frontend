import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./nav.scss";

export default class Nav extends Component {
    render() {
        return (
            <ul className="navigation-container">
                <li className="nav-item"><Link className="link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="link" to="#">Articles</Link></li>
                <li className="nav-item"><Link className="link" to="#">Videos</Link></li>
                <li className="nav-item"><Link className="link" to="/admin">Admin Login</Link></li>
            </ul>
        )
    }
}
