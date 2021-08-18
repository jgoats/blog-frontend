import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="main-navigation-container">
                <ul className="nav-container">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/admin">Admin</Link></li>
                    <li className="nav-item"><Link to="/topics">Topics</Link></li>
                </ul>
            </div>
        )
    }
}