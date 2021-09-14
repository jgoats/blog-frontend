import React, { Component } from 'react'
import "./singlearticle.scss";
import Previous from "../../images/previous.svg";

class SingleArticle extends Component {
    componentDidMount() {
        document.getElementsByClassName("article-content")[0].innerHTML = this.props.article.content
    }
    render() {
        const { title, time } = this.props.article
        return (
            <div className="article-main-container">
                <div className="back-btn" onClick={this.props.clearBlog}><img src={Previous} /></div>
                <div className="article-content-container">
                    <div className="article-title">{title}</div>
                    <div className="article-timestamp">Created: {new Date(time).toLocaleDateString()}</div>
                    <div className="article-content"></div>
                </div>
            </div>
        )
    }
}

export default SingleArticle;
