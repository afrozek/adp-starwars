import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// import './dashboard.scss';
import userCircleWhiteIcon from "../../assets/images/user-circle-white-icon.svg";
import arrowDownLongGreyIcon from "../../assets/images/arrow-down-long-grey-icon.svg";
// import homeGreenIcon from "../../assets/images/home-green-icon.svg";
// import fadedGreySearchIcon from "../../assets/images/search-faded-grey-icon.svg";
import arrowRightCircleIcon from "../../assets/images/arrow-right-circle-icon.svg";

import { bindActionCreators } from "redux";

import {

    Link,

    withRouter
  } from "react-router-dom";
  

import "./characters-page.scss";

class CharacterFilms extends Component {

    
  render() {
    console.log(this.props);

    return (
        <div>{this.props.children}</div>
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

export default withRouter(connect(mapStateToProps)(CharacterFilms));

// promotes to a container
// export default (connect(mapStateToProps)(CharacterFilms));
