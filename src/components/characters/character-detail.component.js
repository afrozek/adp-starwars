import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import fingerPrintIcon from "../../assets/images/finger-print-icon.svg";
import arrowDownLongGreyIcon from "../../assets/images/arrow-down-long-grey-icon.svg";
import userCircleWhiteIcon from "../../assets/images/user-circle-white-icon.svg";
import arrowRightCircleIcon from "../../assets/images/arrow-right-circle-icon.svg";
import playCircleWhiteIcon from "../../assets/images/play-circle-white-icon.svg";

import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import axios from 'axios';


import "./characters-page.scss";

// import CharacterCardList from './character-card-list.component';
import * as log from "loglevel";

class CharacterDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedDetail: false
    };
  }

  componentDidMount() {

    

    const fetchCharacterDetail = () => {
    
        axios({
          method: 'get',
          url: `https://swapi.co/api/people/${this.props.match.params.id}/`
        })
          .then(res => {
              log.debug("Character Detail Res: ", res);
            this.setState({ loadedDetail: true })
          })
        //   .catch(this.loginErrorHandler);
      } // end fetchCharacterDetail

      setTimeout(fetchCharacterDetail, 2000);

  } // end componentDidMount



  render() {
    log.debug("characters: ", this.state.characters);

    let Loader = <div>loading character detail</div>;

    let LoadedContent = () => {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                className="d-inline-block mb-3"
                src={fingerPrintIcon}
                alt="Finger Print"
              />
              <h2 className="h4">
                Luke Skywalker {this.props.match.params.id}
              </h2>
              <p className="sub-text">Character Selected.</p>
            </div>
          </div>
          <div className="character-detail-card">
            <div className="row">
              <div className="col-md-5">
                <ul class="character-detail-list">
                  <span>
                    <img src={userCircleWhiteIcon} alt="Character" />
                  </span>
                  <li>
                    <span className="item-heading">Name</span>
                    <span className="item-content">Luke Skywalker</span>
                  </li>
                  <li>
                    <span className="item-heading">Height</span>
                    <span className="item-content">172 cm</span>
                  </li>
                  <li>
                    <span className="item-heading">Mass</span>
                    <span className="item-content">132 kg</span>
                  </li>
                  <li>
                    <span className="item-heading">Hair Color</span>
                    <span className="item-content">Blonde</span>
                  </li>
                  <li>
                    <span className="item-heading">Skin Color</span>
                    <span className="item-content">Fair</span>
                  </li>
                  <li>
                    <span className="item-heading">Birth Year</span>
                    <span className="item-content">1999 yb</span>
                  </li>
                  <li>
                    <span className="item-heading">Gender</span>
                    <span className="item-content">Male</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-7">
                <ul class="film-list">
                  <span>
                    <img src={playCircleWhiteIcon} alt="Films" />
                  </span>
                  <h3 class="list-heading">Films</h3>
                  <li>
                    <a href="">
                      The Empire Strikes Back
                      <img src={arrowRightCircleIcon} alt="" className="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      The Reveng of the Sith and the empire
                      <img src={arrowRightCircleIcon} alt="" className="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      The Empire Strikes Back
                      <img src={arrowRightCircleIcon} alt="" className="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      The Empire Strikes Back
                      <img src={arrowRightCircleIcon} alt="" className="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    };

    let CharacterDetailView = () => {
      if (this.state.loadedDetail == false) return Loader;
      else return LoadedContent();
    };

    return (
      <div>{CharacterDetailView()}</div>
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

export default withRouter(connect(mapStateToProps)(CharacterDetail));

// promotes to a container
// export default (connect(mapStateToProps)(CharacterDetail));
