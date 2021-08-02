import tampopo from '../Images/tampopo.png'
import github from '../Images/githubViewer.png'
import weather from '../Images/weather.png'

function Projects() {
    return (
        <div className="Projects">

            <div className="filterBar">
                <h2>Projects</h2>

                <form >
                    <select name="" id="">
                        <option value="">Web Development</option>
                        <option value="">Machine Learning</option>
                    </select>
                    <input type="submit" value="Filter" />
                </form>



                <div className="info">
                    <div class="card">
                        <img src={tampopo} alt="Avatar" />
                        <div class="container">
                            <h4><b>Tampopo Ramen</b></h4>
                            <p>A Resturant Website based on a real business located in Washington Heights which is a neirborhood in Upper Manhattan</p>

                            <p>This was created with HTML,CSS,& JavaScript (<a href="https://joseamarante17.github.io/TampopoRamen/">LINK HERE</a>)</p>
                        </div>
                    </div>

                    <div class="card">
                        <img src={github} alt="Avatar" />
                        <div class="container">
                            <h4><b>Github Viewer</b></h4>
                            <p>This page allows you to browse people's GitHub profile and view the most prevelent information about them such as Name, Total Number of Repos, etc</p>

                            <p>This was created with HTML,CSS,& AngluarJS (<a href="https://joseamarante17.github.io/AngularJS-GithubViewer/">LINK HERE</a>) </p>
                        </div>
                    </div>

                    <div class="card">
                        <img src={weather} alt="Avatar" />
                        <div class="container">
                            <h4><b>Weather App</b></h4>
                            <p>This page gives you current weather info on any city that you input.</p>

                            <p>This was created with HTML,CSS,& AngluarJS (<a href="https://joseamarante17.github.io/WeatherApp/">LINK HERE</a>)</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Projects;