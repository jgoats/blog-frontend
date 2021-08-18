import React from "react";
import Nav from "../nav/nav.js";

export default class Topics extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Nav />
                <div>Topics</div>
            </div>
        )
    }
}