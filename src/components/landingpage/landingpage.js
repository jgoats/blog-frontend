import React from "react";
import "./landingpage.scss";
import Nav from "../nav/nav";
import axios from "axios";

export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            blogs: [],
            content: []
        }
    }
    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:4000/getblogs",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((result) => {
            let copy = [...this.state.blogs];
            let concated = copy.concat(result.data.blogs);
            this.setState({
                blogs: concated
            })
            for (let i = 0; i < result.data.blogs.length; i++) {
                document.getElementById("content").innerHTML += result.data.blogs[i].content;
            }

        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <Nav />
                {this.state.blogs.map((item) =>
                    <div className="blog-card" key={item._id}>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                        <div id="content"></div>
                        <div>{new Date(item.time).toLocaleDateString()}</div>
                    </div>
                )}
                <div className="index-background">
                    <h1 className="section-heading">Why I Made This Blog</h1>
                    <h1 className="section-heading">Recent Posts</h1>
                    <div className="blogcard-container">

                    </div>
                </div>
            </div>
        );
    }
}