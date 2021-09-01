import React from "react";
import { Route, withRouter } from "react-router-dom";
import AdminLogin from "../adminlogin/adminlogin";
import LandingPage from "../landingpage/landingpage";

class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Route path="/admin" render={props => <AdminLogin />} />
                <Route path="/" exact render={props => <LandingPage />} />
            </>
        )
    }
}

export default withRouter(App);