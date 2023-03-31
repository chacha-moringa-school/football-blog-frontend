import { NavLink } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <footer className="text-center">
      <nav className="navbar navbar-expand-lg navbar-dark text-center  bg-dark" style={{height: "5rem"}}>
          <div className="container-fluid text-center">
              <div className="collapse navbar-collapse text-center">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0  text-center">

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
