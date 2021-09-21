import React from "react";
import { Route } from "react-router-dom";
import AdminLogin from "../adminlogin/adminlogin";
import Dashboard from "../dashboard/dashboard";
import LandingPage from "../landingpage/landingpage";
import Videos from "../videos/videos.js";
import Articles from "../articles/articles.js";
import { HashRouter as Router } from "react-router-dom";

function App(props) {

    return (
        <Router>
            <Route path="/videos" render={props => <Videos />} />
            <Route path="/articles" render={props => <Articles />} />
            <Route path="/admin" render={props => <AdminLogin />} />
            <Route path="/dashboard" render={props => <Dashboard />} />
            <Route path="/" exact render={props => <LandingPage />} />
        </Router>
    )
}

export default App;