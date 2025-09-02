import "./header.scss";
function Header() {
  return (
    <header>
      <div className="headerPortfolio">
        <h1 className="h1header">Mon Portfolio</h1>
        <nav className="navHeader">
          <a href="#projects">Mes projets</a>
          <a href="#contact">Me Contacter</a>
          <a href="/CV_Kevin_Machado.pdf" download="CV_Kevin_Machado.pdf">Téléchargez mon CV</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
