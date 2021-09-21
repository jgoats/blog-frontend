import React, { Component } from 'react';
import "./articles.scss";
import { withRouter } from "react-router-dom";
import "react-router-dom";
import axios from "axios";
import Nav from "../nav/nav.js";
axios.defaults.withCredentials = true;
import SingleArticle from '../singlearticle/singlearticle';

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            singlePage: null,
        }
        this.handleSinglePage = this.handleSinglePage.bind(this);
        this.clearBlog = this.clearBlog.bind(this);
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
        axios({
            method: "get",
            url: "http://localhost:4000/getblogs",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((result) => {
            let copy = [...this.state.articles];
            let concated = copy.concat(result.data.blogs);
            this.setState({
                articles: concated
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        if (!this.state.singlePage) {
            return (
                <div>
                    <Nav />
                    <div className="articles-container">
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
