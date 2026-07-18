import "../styles/Navbar.css";
import churchLogo from "../assets/media/church-logo.svg";

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="/" aria-label="House of Miracles home">
        <img
          className="navbar__logo"
          src={churchLogo}
          alt="House of Miracles Prophetic Ministries logo"
        />
      </a>

      <nav className="navbar__navigation" aria-label="Main navigation">
        <a className="navbar__link" href="#home">
          Home
        </a>

        <a className="navbar__link" href="#about">
          About
        </a>

        <a className="navbar__link" href="#sermons">
          Sermons
        </a>

        <a className="navbar__link" href="#testimonies">
          Testimonies
        </a>

        <a className="navbar__link" href="#ministries">
          Ministries
        </a>

        <a className="navbar__link" href="#media">
          Media
        </a>

        <a className="navbar__link" href="#visit">
          Contact
        </a>
      </nav>

      <a className="navbar__booking-link" href="#one-on-one">
        Book One-on-One
      </a>
    </header>
  );
}

export default Navbar;