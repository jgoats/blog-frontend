import React, { Component } from 'react'
import "./videos.scss";
import Nav from "../nav/nav.js";

export default class Videos extends Component {
    render() {
        return (
            <div className="video-container">
                <Nav />
                <div className="video-message">Coming Soon . . . </div>
            </div>
        )
    }
}
