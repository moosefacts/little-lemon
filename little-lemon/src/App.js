
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
      <div class="nav">
        <Nav/>
      </div>
      <div class="hero">
        <Hero/>
      </div>
      <div class="highlights">
        <Highlights/>
      </div>
      <div class="testimonials">
        <Testimonials/>
      </div>
      <div class="about">
        <About/>
      </div>
      <div class="footer">
        <Footer/>
      </div>
    </main>
  );
}

export default App;
