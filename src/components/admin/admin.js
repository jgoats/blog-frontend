import React from "react";
import Nav from "../nav/nav.js";
import "./admin.scss";

export default class Admin extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Nav />
                <div>Admin</div>
            </div>
        )
    }
}