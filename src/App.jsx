import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Home />

        <About />

        <Skills />

        <Certificates />

        <Projects />

        <Experience />

        <Education />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;