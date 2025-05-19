import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/guillermo-garijo.github.io/" element={<Hero />}/>
        <Route path="/guillermo-garijo.github.io/about" element={<About />}/>
        <Route path="/guillermo-garijo.github.io/projects" element={<Projects />}/>
        <Route path="/guillermo-garijo.github.io/contact" element={<Contact />}/>
        <Route path="/guillermo-garijo.github.io/projects/pasapalabra" element={<Contact />}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
