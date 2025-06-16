import "./App.css";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
// import Competences from "./components/competences/competences.jsx";
import Hero from "./components/hero/hero.jsx";
import Projects from "./components/projets/projects.jsx";
import Contact from "./components/contact/contact.jsx";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Competences /> */}
      <Projects />
      <Contact />
      <Footer />
          </div>
  );
}

export default App;
