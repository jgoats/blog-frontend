import React from "react";
import { Route, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminLogin from "../adminlogin/adminlogin";
import Dashboard from "../dashboard/dashboard";
import LandingPage from "../landingpage/landingpage";

function App(props) {

    return (
        <>
            <Route path="/admin" render={props => <AdminLogin />} />
            <Route path="/dashboard" render={props => <Dashboard />} />
            <Route path="/" exact render={props => <LandingPage />} />
        </>
    )
}

export default withRouter(App);