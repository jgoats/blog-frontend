import React, { Component } from 'react'
import "./singlearticle.scss";
import Previous from "../../images/previous.svg";

class SingleArticle extends Component {
    componentDidMount() {
        document.getElementsByClassName("article-content")[0].innerHTML = this.props.article.content
    }
    render() {
        const { title, description, content, timestamp } = this.props.article
        return (
            <div>
                <div onClick={this.props.clearBlog}><img src={Previous} /></div>
                <div>{title}</div>
                <div>{description}</div>
                <div className="article-content"></div>
                <div>{timestamp}</div>
            </div>
        )
    }
}

export default SingleArticle;
