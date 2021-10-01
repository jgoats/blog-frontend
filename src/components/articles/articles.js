import React, { Component } from 'react';
import "./articles.scss";
import { withRouter } from "react-router-dom";
import "react-router-dom";
import axios from "axios";
import Nav from "../nav/nav.js";
axios.defaults.withCredentials = true;
import SingleArticle from '../singlearticle/singlearticle';
import Spinner from "../../images/spinner.svg";

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            singlePage: null,
            spinner: "",
            defaultSpinner: "default-spinner"
        }
        this.handleSinglePage = this.handleSinglePage.bind(this);
        this.clearBlog = this.clearBlog.bind(this);
        this.handleSpinner = this.handleSpinner.bind(this);
    }
    handleSpinner(turnOn) {
        if (turnOn) {
            this.setState({
                spinner: Spinner,
                defaultSpinner: "animate-spinner"
            })
        }
        else {
            this.setState({
                spinner: "",
                defaultSpinner: "default-spinner"
            })
        }
    }
    handleSinglePage(content) {
        this.setState({
            singlePage: content
        })
    }
    clearBlog() {
        this.setState({
            singlePage: null
        })
    }
    componentDidMount() {
        this.handleSpinner(true);
        axios({
            method: "get",
            url: "https://blog-backend426.herokuapp.com/getblogs",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((result) => {
            this.handleSpinner(false);
            let copy = [...this.state.articles];
            let concated = copy.concat(result.data.blogs);
            this.setState({
                articles: concated
            })
        }).catch((err) => {
            this.handleSpinner(false);
            console.log(err);
        })
    }
    render() {
        if (!this.state.singlePage) {
            return (
                <div>
                    <Nav />
                    <div className="articles-container">
                        <img class={this.state.defaultSpinner} src={this.state.spinner} />
                        {this.state.articles.map((item) =>
                            <div onClick={() => this.handleSinglePage({
                                title: item.title,
                                description: item.description,
                                content: item.content,
                                time: item.time,
                                id: item._id,
                                screenshot: item.screenshot
                            })} className="blog-card" key={item._id}>
                                <div className="screenshot">
                                    <img className="blog-image" src={item.screenshot} /></div>
                                <div className="blog-title">{item.title}</div>
                                <div className="blog-description">{item.description}</div>
                                <div className="blog-timestamp">{new Date(item.time).toLocaleDateString()}</div>
                            </div>
                        )}
                    </div>
                </div>
            )
        }
        else {
            return (
                <SingleArticle clearBlog={this.clearBlog} article={this.state.singlePage} />
            )
        }

    }
}

export default withRouter(Articles);
