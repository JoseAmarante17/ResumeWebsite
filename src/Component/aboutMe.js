import React from 'react';
import logo from '../Images/PictureOfMe.jpeg'

function AboutMe() {

    return (
        <div className="aboutMe">
            <section className="leftAboutMe">
                <h2>Hello, My name is <strong>Jose Amarante</strong></h2>
                <h5>I am 21 year old computer enthusiast and a recent graduate of Monroe College with an Associates of Science in Computer Information Systems with honors(Cum Laude).</h5>
                <img sr
                c={logo} alt="Jose Amarnate" title="Jose Amarante" />
            </section>

            <section className="rightAboutMe">
                <h2> <strong>Languages</strong></h2>
                <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C#</li>
                </ul>
                <h2 className="rightAboutMeSecondHeading"><strong>Frameworks</strong></h2>
                <ul>
                    <li>React</li>
                    <li>AngularJS</li>
                </ul>
            </section>
        </div>
    );
}

export default AboutMe;