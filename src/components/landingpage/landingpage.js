import React from "react";
import Nav from "../nav/nav.js";
import "./landingpage.scss";

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
                <div>Home</div>
            </div>
        )
    }
}