import React from "react";
import Nav from "../nav/nav";
import "react-router-dom";
import { withRouter } from "react-router-dom";
import "./adminlogin.scss";
import axios from "axios";
axios.defaults.withCredentials = true;

class AdminLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            success: "",
            error: ""
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.deleteCookie = this.deleteCookie.bind(this);
        this.sendCookie = this.sendCookie.bind(this);
    }
    deleteCookie() {
        axios.get("https://blog-backend426.herokuapp.com/deletecookie", { withCredentials: true })
            .then((result) => {
                console.log(result.data);
            })
    }
    sendCookie() {
        axios({
            method: "get",
            url: "https://blog-backend426.herokuapp.com/dashboard",
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
            url: "https://blog-backend426.herokuapp.com/login",
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
            data: data
        }).then((user) => {
            if (user.data.signedIn) {
                this.setState({
                    success: "Successfully logged in",
                    username: "",
                    password: ""
                })
                window.setTimeout(function () {
                    this.setState({
                        success: ""
                    })
                }.bind(this), 3000)
                this.props.history.push("/dashboard");
            }
            else {
                this.setState({
                    error: "incorrect credentials",
                    username: "",
                    password: ""
                })
                window.setTimeout(function () {
                    this.setState({
                        error: ""
                    })
                }.bind(this), 3000)
            }
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    render() {
        return (
            <div className="admin-login-container">
                <Nav />
                <form method="POST" className="login-container">
                    <label className="login-label">Username</label>
                    <input onChange={(e) => this.handleUsername(e)} className="login-input" type="text" name="username"
                        id="username" value={this.state.username} />
                    <label className="login-label">Password</label>
                    <input onChange={(e) => this.handlePassword(e)} className="login-input" type="password" name="password"
                        id="password" value={this.state.password} />
                    <input onClick={(e) => this.handleLogin(e)} className="login-button" type="button" value='login' />
                    <div className="login-success">{this.state.success}</div>
                    <div className="login-error">{this.state.error}</div>
                </form>
            </div>
        );
    }
}

export default withRouter(AdminLogin);