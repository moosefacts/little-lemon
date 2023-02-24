
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import './App.css';

function App() {
  return (


    <main class="container">
      <div className="Nav">
        <Nav/>
      </div>
      <div className="Hero">
        <Hero/>
      </div>
      <div className="Highlights">
        <Highlights/>
      </div>
      <div className="Testimonials">
        <Testimonials/>
      </div>
      <div className="About">
        <About/>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </main>
  );
}

export default App;
