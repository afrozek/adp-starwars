import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// import './dashboard.scss';
// import mainLogo from "../../assets/images/adp-starwars-logo.svg";
// import homeGreenIcon from "../../assets/images/home-green-icon.svg";
// import fadedGreySearchIcon from "../../assets/images/search-faded-grey-icon.svg";

import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import './characters-page.scss';


class CharactersPage extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>characters page</h2>
            {this.props.children}
          </div>
        </div>
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

export default withRouter(connect(mapStateToProps)(CharactersPage));

// promotes to a container
// export default (connect(mapStateToProps)(CharactersPage));
