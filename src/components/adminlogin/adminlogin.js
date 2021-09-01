import React from "react";
import Nav from "../nav/nav";
import "./adminlogin.scss";
import axios from "axios";
axios.defaults.withCredentials = true;

export default class AdminLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.deleteCookie = this.deleteCookie.bind(this);
        this.sendCookie = this.sendCookie.bind(this);
    }
    deleteCookie() {
        axios.get("http://localhost:4000/deletecookie", { withCredentials: true })
            .then((result) => {
                console.log(result.data);
            })
    }
    sendCookie() {
        axios({
            method: "get",
            url: "http://localhost:4000/dashboard",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err)
        })

    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    handleLogin(e) {
        const { username, password } = this.state;
        let data = {
            username: username,
            password: password
        }
        e.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:4000/login",
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
            data: data
        }).then((user) => {
            console.log(user);
            /* if (user.data.cookie) {
                 axios({
                     method: "get",
                     url: "http://localhost:4000/dashboard",
                     headers: {
                         "Content-Type": "application/json"
                     }
                 }).then((result) => {
                     console.log(result);
                 }).catch((err) => {
                     console.log(err)
                 })
 
             }
             else {
                 console.log("incorrect data entered")
             }*/
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    render() {
        return (
            <>
                <Nav />
                <form method="POST" className="login-container">
                    <label className="login-label">Username</label>
                    <input onChange={(e) => this.handleUsername(e)} className="login-input" type="text" name="username"
                        id="username" value={this.state.username} />
                    <label className="login-label">Password</label>
                    <input onChange={(e) => this.handlePassword(e)} className="login-input" type="password" name="password"
                        id="password" value={this.state.password} />
                    <input onClick={(e) => this.handleLogin(e)} className="login-button" type="button" value='login' />
                </form>
                <button onClick={this.deleteCookie}>delete cookie</button>
                <button onClick={this.sendCookie}>Send Cookie</button>
            </>
        );
    }
}