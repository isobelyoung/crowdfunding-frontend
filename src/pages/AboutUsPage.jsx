import React from 'react';
import "./LogStyling.css"
import { Link } from "react-router-dom";

function AboutUsPage() {
    return (
        <div>
        <div class="my-content">
            <div class="my-content-image">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="about-img"/>
            </div>
            <div class="my-content-copy">
                <h3>How to turn your useless trivia knowledge into useful donations that help fund education projects all over the world</h3>
                <p>Philanthrivia is an innovative web-based crowdfunding platform where
                pledges are submitted in the form of trivia facts to projects. Projects are
                established by trivia companies or hosts who may need to source facts for
                their events, paying a certain amount for each unique fact or submission
                which is then donated to a charity of their choice. The principle for
                Philanthrivia was inspired by the Forest app.</p>
                <p>The gamification of this lends itself to the target audience of millennials,
                spanning all genders and covering ages approximately 24 – 39. The target
                audience is educated and passionate about the power of education to effect
                positive change for everyone.</p>
            </div>

        </div>
        <div className="about-part-two">
            <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="new-img" />
            <p>Join the knowledge revolution, and support a cause.</p>
            <div className="button-wrapper">
                <Link to="/projects"><button className="yellow-button">Browse projects</button></Link>
            </div>
            <p></p>
        </div>
        </div>
    )

}

export default AboutUsPage;