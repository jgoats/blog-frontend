import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "react-router-dom";
import "./dashboard.scss";
import axios from "axios";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            content: ""
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        e.preventDefault();
        axios({
            method: "Post",
            url: "http://localhost:4000/addblog",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                title: this.state.title,
                description: this.state.description,
                content: this.state.content
            }
        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        })
    }
    updateTitle(e) {
        this.setState({
            title: e.target.value
        })
        console.log(e.target.value)
    }
    updateDescription(e) {
        this.setState({
            description: e.target.value
        })
        console.log(e.target.value)
    }
    updateContent(e) {
        this.setState({
            content: e.target.value
        })
        console.log(e.target.value)
    }
    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:4000/dashboard",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                user: "Justin Goats"
            }
        }).then((result) => {
            if (!result.data.signedIn) {
                this.props.history.push("/");
            }
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard-form-container">
                    <form>
                        <label className="dashboard-form-label">title</label><input onChange={(e) => this.updateTitle(e)} className="dashboard-form-input" value={this.state.title} type="text" />
                        <label className="dashboard-form-label">description</label><textarea onChange={(e) => this.updateDescription(e)} className="dashboard-form-input" value={this.state.description} type="text" />
                        <label className="dashboard-form-label">content</label><textarea onChange={(e) => this.updateContent(e)} className="dashboard-form-input" value={this.state.content} type="text" />
                    </form>
                    <button onClick={(e) => this.submit(e)} className="dashboard-submit">Submit</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard);
