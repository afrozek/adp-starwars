import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// import './dashboard.scss';
import mainLogo from "../../assets/images/adp-starwars-logo.svg";
// import homeGreenIcon from "../../assets/images/home-green-icon.svg";
// import fadedGreySearchIcon from "../../assets/images/search-faded-grey-icon.svg";

import { bindActionCreators } from "redux";

import {
    HashRouter,
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter,
  } from "react-router-dom";

import './main-nav.scss';


class MainNav extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="container">
        <nav id="main-nav" className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
          <img
                src={mainLogo}
                alt="ADP StarWars"
              />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav  ml-md-auto ">
              <li className="nav-item active">
                <Link to="/" className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link"  target="_blank" rel="noopener noreferrer" href="https://github.com/afrozek/adp-starwars">
                  Github
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li> */}

            </ul>
          </div>
        </nav>
      </div>

      // end container
    );
  }
} // end auth class

function mapStateToProps(state) {
  return {
    //   settings: state.settings,
    //   sidebar: state.dashboardSidebar
  };
}

export default withRouter(connect(mapStateToProps)(MainNav));

// promotes to a container
// export default (connect(mapStateToProps)(MainNav));
