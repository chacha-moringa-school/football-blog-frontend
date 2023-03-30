import { NavLink } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <footer>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
          <div className="container-fluid">
              <p>Copyright © 2023</p>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                    <li className="nav-item">
                        <NavLink className="nav-link active " aria-current="page" to="/terms">Terms of Use</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active " aria-current="page" to="/privacy">Privacy Policy</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link active  ms-3" aria-current="page" to='/cookies'>Cookie Policy</NavLink>
                    </li>                    
                </ul>
              </div>
          </div>
      </nav>
    </footer>
  );
}

export default Footer;
