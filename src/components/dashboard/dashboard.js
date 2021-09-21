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
            content: "",
            photos: [],
            result: null,
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.submit = this.submit.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
    }
    uploadHandler(e) {
        const data = new FormData();
        data.append('file', e.target.files[0]);

        axios.post('http://localhost:4000/upload', data)
            .then((res) => {
                this.setState({
                    content: this.state.content + "" + `<img style='width : 600px; display : block; margin-left : auto; margin-right : auto; margin-top : 20px; margin-bottom : 20px;' src="http://localhost:4000/images/${res.data.filename}" />`
                })
            });
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
            this.setState({
                result: result
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    updateTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    updateDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    updateContent(e) {
        this.setState({
            content: e.target.value
        })
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
                <form className="dashboard-form-container">
                    <div className="dashboard-form-item"><label className="dashboard-form-label">Title</label><input onChange={(e) => this.updateTitle(e)} className="dashboard-form-input" value={this.state.title} type="text" /></div>
                    <div className="dashboard-form-item"><label className="dashboard-form-label">Description</label><textarea onChange={(e) => this.updateDescription(e)} className="dashboard-form-input" value={this.state.description} type="text" /></div>
                    <div className="dashboard-form-item"><label className="dashboard-form-label">Content</label><textarea id="content" onChange={(e) => this.updateContent(e)} className="dashboard-form-input" value={this.state.content} type="text" /></div>
                    <button className="dashboard-form-item" onClick={(e) => this.submit(e)} className="dashboard-submit">Submit</button>
                </form>
                <div className="import-image-container">
                    <span className="import-image-prompt">Click To Upload</span>
                    <input className="import-image" type="file" name="file" onChange={(e) => this.uploadHandler(e)} />
                </div>

            </div>
        )
    }

}

export default withRouter(Dashboard);
