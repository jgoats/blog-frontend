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
                document.getElementsByClassName("screenshot")[i].innerHTML += result.data.blogs[i].screenshot;
            }

        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className="landingpage-background">
                <Nav />
                <div className="articles">
                    {this.state.blogs.map((item) =>
                        <div className="blog-card" key={item._id}>
                            <div className="screenshot"></div>
                            <div className="blog-title">{item.title}</div>
                            <div className="blog-description">{item.description}</div>
                            <div className="blog-timestamp">{new Date(item.time).toLocaleDateString()}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}