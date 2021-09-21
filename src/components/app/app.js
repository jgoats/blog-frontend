import React from "react";
import { Route, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminLogin from "../adminlogin/adminlogin";
import Dashboard from "../dashboard/dashboard";
import LandingPage from "../landingpage/landingpage";
import Videos from "../videos/videos.js";
import Articles from "../articles/articles.js";

function App(props) {

    return (
        <>
            <Route path="/videos" render={props => <Videos />} />
            <Route path="/articles" render={props => <Articles />} />
            <Route path="/admin" render={props => <AdminLogin />} />
            <Route path="/dashboard" render={props => <Dashboard />} />
            <Route path="/" exact render={props => <LandingPage />} />
        </>
    )
}

export default withRouter(App);