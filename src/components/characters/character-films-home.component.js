import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// import './dashboard.scss';
import userCircleWhiteIcon from "../../assets/images/user-circle-white-icon.svg";
import arrowDownLongGreyIcon from "../../assets/images/arrow-down-long-grey-icon.svg";
// import homeGreenIcon from "../../assets/images/home-green-icon.svg";
// import fadedGreySearchIcon from "../../assets/images/search-faded-grey-icon.svg";
import arrowRightCircleIcon from "../../assets/images/arrow-right-circle-icon.svg";
import playCircleWhiteIcon from "../../assets/images/play-circle-white-icon.svg";


import { bindActionCreators } from "redux";

import { Link, withRouter } from "react-router-dom";

import "./characters-page.scss";

class CharacterFilmsHome extends Component {
  render() {
    console.log(this.props);

    return (
      <ul className="film-list">
        <span>
          <img src={playCircleWhiteIcon} alt="Films" />
        </span>
        <h3 className="list-heading">Films</h3>
        {/* {this.props.movies.map(movie => {
          return (
            <li>
              <a href="">
                {movie.title}
                <img src={arrowRightCircleIcon} alt="" className="" />
              </a>
            </li>
          );
        })} */}
      </ul>
    );
  }
} // end auth class

function mapStateToProps(state) {
  return {
    //   settings: state.settings,
    //   sidebar: state.dashboardSidebar
  };
}

export default withRouter(connect(mapStateToProps)(CharacterFilmsHome));

// promotes to a container
// export default (connect(mapStateToProps)(CharacterFilmsHome));
