import React from "react";
import "./landingpage.scss";
import Nav from "../nav/nav";
import SlideShow from "../slideshow/slideshow";

export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="index-background">
                    <SlideShow />
                    <h1 className="section-heading">Why I Made This Blog</h1>
                    <div className="introduction">
                        Learning JavaScript is hard. Sure, the basics are very easy to understand if you are persistent
                        or if you have learned other programming languages. But once you get past the basics the language
                        quickly becomes
                        very confusing to a lot of people. JavaScript does a lot of things in the background that can trip up
                        even senior developers.
                        During equality checks, JavaScript will attempt to change the data type of one operand to match the
                        second if they are different,
                        Classes in JavaScript aren't really classes at all, they are actually constructor functions behind
                        the
                        scenes.
                        Almost everything in JavaScript is classified as an object, this includes functions , arrays , and
                        heck
                        the type of "null" is even equal to
                        "Object" under the hood despite being a primitive type. Confused yet? I was for a long time while
                        learning JavaScript. There are a
                        lot
                        of resources out there to learn JavaScript
                        but I quickly found that most of that information was not explaining how JavaScript really behaves
                        under
                        the hood. It's hard to truely master somthing
                        when you dont even know how it works behind the scenes. Well i'm here to attempt to break down
                        JavaScript
                        at a deep level so that we all walk away as better JavaScript
                        developers.
                    </div>
                    <h1 className="section-heading">Recent Posts</h1>
                    <div className="blogcard-container">

                    </div>
                </div>
            </div>
        );
    }
}