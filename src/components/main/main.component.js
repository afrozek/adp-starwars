import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// import './dashboard.scss';
// import logoBuckets from "../../assets/images/logoBuckets.svg";
// import homeGreenIcon from "../../assets/images/home-green-icon.svg";
// import fadedGreySearchIcon from "../../assets/images/search-faded-grey-icon.svg";


import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';







class Main extends Component {


  render() {
    console.log(this.props);

    return (
      <div id="main-page" className="container-fluid d-flex" >
          <div className="row">
                <div className="col-md-12">
                    <h1>home</h1>
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
  }
}

export default withRouter(connect(mapStateToProps)(Main))

// promotes to a container
// export default (connect(mapStateToProps)(Main));
