import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// import './dashboard.scss';
import fingerPrintIcon from "../../assets/images/finger-print-icon.svg";
import arrowDownLongGreyIcon from "../../assets/images/arrow-down-long-grey-icon.svg";
// import homeGreenIcon from "../../assets/images/home-green-icon.svg";
// import fadedGreySearchIcon from "../../assets/images/search-faded-grey-icon.svg";

import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import './characters-page.scss';

import CharacterCard from './character-card.component';
import * as log from 'loglevel';




class CharactersCardList extends Component {
  render() {
    log.debug("characters", this.props.characters);

    let characterListMapped = this.props.characters.map(item => {
        log.debug("single character", item.name);
        return (
                 <CharacterCard key={item.name} character={item}  />  
            )
    })

    return (
        <div className="row">
            {characterListMapped}
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

export default withRouter(connect(mapStateToProps)(CharactersCardList));

// promotes to a container
// export default (connect(mapStateToProps)(CharactersCardList));
