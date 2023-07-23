import Home from "./pages/home/Home.jsx";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./pages/about/About.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Contact from "./pages/contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
const { Routes, Route } = require("react-router-dom");

function App() {
  return (
    <div className="appdiv">
      <div className="backg"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
