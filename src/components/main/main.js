import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./main.scss";
import LandingPage from "../landingpage/landingpage.js";
import Topics from "../topics/topics.js";
import Admin from "../admin/admin.js";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Route path="/topics" render={props => <Topics />} />
                <Route path="/admin" render={props => <Admin />} />
                <Route exact path="/" render={props => <LandingPage />} />
            </div>
        )
    }
}

export default withRouter(Main);