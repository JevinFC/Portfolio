import "./App.css";
import { LanguageProvider } from "./components/languageContext.jsx";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import Projects from "./components/projets/projects.jsx";
import Contact from "./components/contact/contact.jsx";
import Apropos from "./components/aPropos/apropos.jsx";
import Tarifs from "./components/tarifs/tarifs.jsx";
import Faq from "./components/FAQ/faq.jsx";
function App() {
  return (
    <div>
      <LanguageProvider>
      <Header />
      <Hero />
      <Projects />
      <Tarifs />
      <Apropos/>
      <Faq />
      <Contact />
      <Footer />
      </LanguageProvider>
          </div>
  );
}

export default App;
