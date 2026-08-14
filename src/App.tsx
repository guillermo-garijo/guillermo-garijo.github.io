import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Pasapalabra from './components/projects/Pasapalabra';
import SinsOfTheForgotten from './components/projects/SinsOfTheForgotten.tsx';

function App() {
  return (
<Router>
  <div className="flex flex-col min-h-screen">
    <Header />

    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects/pasapalabra" element={<Pasapalabra />}/>
        <Route path="/projects/sins" element={<SinsOfTheForgotten />}/>

      </Routes>
      </div>

    <Footer />
  </div>
  </Router>
  );
}

export default App;
