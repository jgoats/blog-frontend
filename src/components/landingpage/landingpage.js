import React from "react";
import "./landingpage.scss";
import Nav from "../nav/nav";
import axios from "axios";
import SingleArticle from "../singlearticle/singlearticle.js";

export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            blogs: [],
            singlePage: null
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
            url: "https://blog-backend426.herokuapp.com/getblogs",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((result) => {
            let copy = [...this.state.blogs];
            let concated = copy.concat(result.data.blogs);
            this.setState({
                blogs: concated
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
                    <div className="landingpage-background">
                        <div className="articles">
                            {this.state.blogs.map((item) =>
                                <div onClick={() => this.handleSinglePage({
                                    title: item.title,
                                    description: item.description,
                                    content: item.content,
                                    time: item.time,
                                    id: item._id,
                                    screenshot: item.screeshot
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
                </div>
            );
        }
        else {
            return (
                <SingleArticle clearBlog={this.clearBlog} article={this.state.singlePage} />
            )
        }
    } // render
} // conponent
