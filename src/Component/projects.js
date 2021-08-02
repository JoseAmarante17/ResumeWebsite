import tampopo from '../Images/tampopo.png'
import github from '../Images/githubViewer.png'
import weather from '../Images/weather.png'

import music from '../Images/music.png'
import student from '../Images/student.png'
import cat from '../Images/cat.jpg'

import React from 'react';

function Projects() {

    // useState hook
    const [selectValue, setSelectValue] = React.useState(<WebDevelopment/>)
    //const [showResults, setShowResults] = React.useState("WebDevelopment")

    const onClick = () => {
        // Retrives value from Select
        var select = document.getElementById('choices');
        var value = select.options[select.selectedIndex].value;

        if (value === "WebDevelopment"){
            setSelectValue(<WebDevelopment/>); 
        } 
        else if (value === "MachineLearning"){
            setSelectValue(<MachineLearning/>);
        }
    }

    return (
        <div className="Projects">

            <div className="filterBar">
                <h2>Projects</h2>

                <form onsubmit="return false">
                    <select name="Categories" id="choices">
                        <option value="WebDevelopment" id="web">Web Development</option>
                        <option value="MachineLearning" id="machine">Machine Learning</option>
                    </select>
                    <input type="button" value="Filter" onClick={onClick} />
                </form>
                {selectValue}
            </div>
        </div>
    );
}


const WebDevelopment = () => {

    return (
        <div className="info">
            <div class="card">
                <img src={tampopo} alt="Avatar" />
                <div class="container">
                    <h4><strong>Tampopo Ramen</strong></h4>
                    <p>A Resturant Website based on a real business located in Washington Heights which is a neighborhood in Upper Manhattan</p>

                    <p>This was created with HTML,CSS,& JavaScript (<a href="https://joseamarante17.github.io/TampopoRamen/">LINK HERE</a>)</p>
                </div>
            </div>

            <div class="card">
                <img src={github} alt="Avatar" />
                <div class="container">
                    <h4><strong>Github Viewer</strong></h4>
                    <p>This page allows you to browse people's GitHub profile and view the most prevelent information about them such as Name, Total Number of Repos, etc</p>

                    <p>This was created with HTML,CSS,& AngluarJS (<a href="https://joseamarante17.github.io/AngularJS-GithubViewer/">LINK HERE</a>) </p>
                </div>
            </div>

            <div class="card">
                <img src={weather} alt="Avatar" />
                <div class="container">
                    <h4><strong>Weather App</strong></h4>
                    <p>This page gives you current weather info on any city that you input. The information is obtained using the OpenWeatherMap API</p>

                    <p>This was created with HTML,CSS,& AngluarJS (<a href="https://joseamarante17.github.io/WeatherApp/">LINK HERE</a>)</p>
                </div>

            </div>

        </div>);
}

const MachineLearning = () => {

    return (
        <div className="info">
            <div class="card">
                <img src={music} alt="Avatar" />
                <div class="container">
                    <h4><strong>Music Guesser</strong></h4>
                    <p>Uses a Decision Tree to predict what genre of music a person would like based on their Age and Gender. Accuracy of model is <strong>85%</strong>.The model was also converted
                    into a persistent model using Joblib
                    </p>

                    <p>This was created with Python using the Scikit-learning and the Pandas Library (<a href="https://github.com/JoseAmarante17/MachineLearning-MusicModel">LINK HERE</a>)</p>
                </div>
            </div>

            <div class="card">
                <img src={student} alt="Avatar" />
                <div class="container">
                    <h4><strong>Student Grade Guesser</strong></h4>
                    <p>This model uses Linear Regression in order to identify the final grade of students based on many features such as how long the students study for, how many days they go out, etc. Some data visualization is presented using Matplotlib. Accuracy of model is <strong>90%</strong></p>

                    <p>This was created with Python using the Scikit-learning and the Pandas Library (<a href="https://github.com/JoseAmarante17/StudenPassFail/tree/main">LINK HERE</a>) </p>
                </div>
            </div>

            <div class="card">
                <img src={cat} alt="Avatar" title="Cat Vs Dog" />
                <div class="container">
                    <h4><strong>Cat or Dog</strong></h4>
                    <p>Using a Neural Network, this machine learning model is trained with 12,500 pictures of cats and dogs. These pictures are labled. The model is able to distinguish a Cat from a Dog. </p>

                    <p>This was created with Keras and Tensor Flow</p>
                </div>

            </div>

        </div>
        );
}

export default Projects;