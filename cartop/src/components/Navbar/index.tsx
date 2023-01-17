import "./style.css";
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary navbar navbar-dark navbar-expand-md main-nav">
      
      <div className="container-fluid">
        
        <Link to="/" className="navLogo">
          <h4>Carros Top</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="menuItens collapse navbar-collapse" id="carrostop-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink exact to="/" activeClassName="active">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/catalogo" activeClassName="active">CATÁLOGO</NavLink>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
