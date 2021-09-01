import React, { Component } from 'react';
import JS from "../../images/screenshot.png";
import "./slideshow.scss";

export default class SlideShow extends Component {
    render() {
        return (
            <>
                <div className="slideshow-container">
                    <div className="slide">
                        <p className="slide-description">Gain confidence using JavaScript for your future projects</p><img
                            className="slide-image" src={JS} />
                    </div>
                    <div className="slide">
                        <p className="slide-description">Learn the ins and outs of JavaScript at a deep level</p><img
                            className="slide-image" src={JS} />
                    </div>
                    <div className="slide">
                        <p className="slide-description">Understand How JavaScript works under the hood</p><img
                            className="slide-image" src={JS} />
                    </div>
                </div>
                <div className="slideshow-controls">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </>
        )
    }
}
