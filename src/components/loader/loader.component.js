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

import { Link, withRouter } from "react-router-dom";

import "./loader.scss";

class Loader extends Component {
  render() {
    console.log(this.props);

    let view = () => {
      if (this.props.error) {
        return (
            <div>
              <div>Error Loading</div>
                {(()=>{
                  if(this.props.errorLoadingText){
                    console.log("error message")
                    return <div>{this.props.errorLoadingText}</div>
                  } else {
                    console.log("No error message");
                  }
                })()}           
            </div>
            )
      } else {
        return (
          <div>
            <div>
              <div class="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="loader-text">
              {this.props.loadingText || "loading"}
            </div>
          </div>
        );
      }
    };

    return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="display-block text-center">{view()}</div>
      </div>
    );
  }
} // end auth class

function mapStateToProps(state) {
  return {
    //   settings: state.settings,
    //   sidebar: state.dashboardSidebar
  };
}

export default withRouter(connect(mapStateToProps)(Loader));

// promotes to a container
// export default (connect(mapStateToProps)(Loader));
