import './CSS/style.css'

// Imports Components
import Header from './Component/header'
import AboutMe from './Component/aboutMe'
import Projects from './Component/projects'
import Footer from './Component/footer'

function App() {
  return (
    <div>
      <div className="top">
        <Header />
        <div className="line"></div>
        <AboutMe />
      </div>
      <Projects/>

      <Footer />
    </div>


  );
}

export default App;
