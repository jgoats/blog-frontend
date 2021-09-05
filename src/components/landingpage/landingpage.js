import React from "react";
import "./landingpage.scss";
import Nav from "../nav/nav";

export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="index-background">
                    <h1 className="section-heading">Why I Made This Blog</h1>

                    <h1 className="section-heading">Recent Posts</h1>
                    <div className="blogcard-container">

                    </div>
                </div>
            </div>
        );
    }
}