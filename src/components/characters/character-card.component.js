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
import { withRouter } from "react-router-dom";

import "./characters-page.scss";

class CharacterCard extends Component {
  render() {
    console.log(this.props);

    return (
    <div className="col-md-3">
        <a href="#" className="cardAnchor">
        <div className="card-container">
            <div className="card">
                <img className="cardImg" src={this.props.character.cardImgPath} alt="Character"/>
                <img src={userCircleWhiteIcon} alt="Profile"/>
                <span className="card-label mt-1">
                    Name
                </span>
                <h3 className="card-heading">
                    {this.props.character.name}
                </h3>
                <span className="select-btn">
               Select <img className="d-inline-block" src={arrowRightCircleIcon} alt="Arrow Right"/>
            </span>
            </div>
        </div>
        </a>
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

export default withRouter(connect(mapStateToProps)(CharacterCard));

// promotes to a container
// export default (connect(mapStateToProps)(CharacterCard));
