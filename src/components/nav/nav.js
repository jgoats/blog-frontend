import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./nav.scss";

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            hamburgerClass: "hamburger-content-default"
        }
        this.handleBurgerContent = this.handleBurgerContent.bind(this);
        this.clearHamburger = this.clearHamburger.bind(this);
    }
    handleBurgerContent() {
        if (this.state.counter == 0) {
            this.setState({
                hamburgerClass: "hamburger-content-active",
                counter: this.state.counter += 1
            })
        }
        else {
            this.setState({
                hamburgerClass: "hamburger-content-default",
                counter: this.state.counter -= 1
            })
        }
    }
    clearHamburger() {
        this.setState({
            counter: 0,
            hamburgerClass: "hamburger-content-default"
        })
    }
    render() {
        return (
            <div>
                <div onClick={this.handleBurgerContent} className="hamburger-container">
                    <div className="hamburger-item"></div>
                    <div className="hamburger-item"></div>
                    <div className="hamburger-item"></div>
                </div>
                <ul className={this.state.hamburgerClass}>
                    <li onClick={this.clearHamburger} className="hamburger-nav-item"><Link className="link" to="/">Home</Link></li>
                    <li onClick={this.clearHamburger} className="hamburger-nav-item"><Link className="link" to="/articles">Articles</Link></li>
                    <li onClick={this.clearHamburger} className="hamburger-nav-item"><Link className="link" to="/videos">Videos</Link></li>
                    <li onClick={this.clearHamburger} className="hamburger-nav-item"><Link className="link" to="/admin">Admin Login</Link></li>
                </ul>
                <ul className="navigation-container">
                    <li className="nav-item"><Link className="link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="link" to="/articles">Articles</Link></li>
                    <li className="nav-item"><Link className="link" to="/videos">Videos</Link></li>
                    <li className="nav-item"><Link className="link" to="/admin">Admin Login</Link></li>
                </ul>
            </div>
        )
    }
}
