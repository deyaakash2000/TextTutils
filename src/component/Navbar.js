import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.navMode} bg-${props.navMode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.navMode === 'light'?'dark':'light'}`}>
         <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.enable}</label>
       </div>
          </div>
        </div>
        

      </nav>
    </div>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "banti",
  about: "hii",
};
