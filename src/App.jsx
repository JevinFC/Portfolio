import "./App.css";
import { LanguageProvider } from "./components/languageContext.jsx";
import "./assets/fonts/CabinetGrotesk_Complete/Fonts/WEB/css/cabinet-grotesk.css"
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import Projects from "./components/projets/projects.jsx";
import Contact from "./components/contact/contact.jsx";
import Apropos from "./components/aPropos/apropos.jsx";
function App() {
  return (
    <div>
      <LanguageProvider>
      <Header />
      <Hero />
      <Apropos/>
      <Projects />
      <Contact />
      <Footer />
      </LanguageProvider>
          </div>
  );
}

export default App;
