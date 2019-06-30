import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import fingerPrintIcon from "../../assets/images/finger-print-icon.svg";
import arrowDownLongGreyIcon from "../../assets/images/arrow-down-long-grey-icon.svg";
import userCircleWhiteIcon from "../../assets/images/user-circle-white-icon.svg";
import arrowRightCircleIcon from "../../assets/images/arrow-right-circle-icon.svg";

import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';


import axios from "axios";

import "./characters-page.scss";

import Loader from '../loader/loader.component';
import * as log from "loglevel";
import CharacterFilms from './character-films.component';


class CharacterDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedDetail: false,
      characterDetail: null,
      movies: null,
      loadingText: "1 of 2: Loading Character Details",
      errorLoading: null,
      errorLoadingText: null
    };
  }

  componentDidMount() {
    const fetchCharacterDetail = () => {
      axios({
        method: "get",
        url: `https://swapi.co/api/people/${this.props.match.params.id}/`
      }).then(res => {
        log.debug("Character Detail Res.data: ", res.data);
        
        this.setState({          
          characterDetail: res.data,
          loadingText: "2 of 2 Fetching All Movie Data"
        });
        
        fetchAllMovies();


      }, err => {
        this.setState({errorLoading: true, errorLoadingText: "There was an error fetching the character details"});

      });
      //   .catch(this.loginErrorHandler);
    }; // end fetchCharacterDetail

    setTimeout(fetchCharacterDetail, 2000);

    const fetchAllMovies = () => {
      const filmsUrlArray = this.state.characterDetail.films;
      let filmsPromiseArray = [];

      for (let filmUrl of filmsUrlArray) {
        let requestConfig = axios({ method: "get", url: filmUrl });
        filmsPromiseArray.push(requestConfig);
      }

      Promise.all(filmsPromiseArray).then(
        (resArray) => {
          log.debug("Fetched all movie data res: ", resArray);

          let movies = []
            
          for(let res of resArray) {
            movies.push(res.data);
          }

          this.setState({loadedDetail: true, movies});

          log.debug("state.movies: ", this.state.movies);
          
        },
        err => {
          log.error("error fetching all movie data err: ", err);
          log.error("error fetching all movie data err.data: ", err.data);   
          this.setState({errorLoading: true, errorLoadingText: "There was an error fetching movie data"});
 
        }
      );
    };

  } // end componentDidMount

  render() {
    log.debug("characters: ", this.state.characters);

    // let Loader = () => {
    //   return (
    //     <div className="container d-flex justify-content-center align-items-center h-100">
    //       <span>loading character detail</span>
    //     </div>
    //   );
    // };

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
              <h2 className="h4">{this.state.characterDetail.name}</h2>
              <p className="sub-text">Character Selected.</p>
            </div>
          </div>
          <div className="character-detail-card">
            <div className="row">
              <div className="col-md-5">
                <ul className="character-detail-list">
                  <span>
                    <img src={userCircleWhiteIcon} alt="Character" />
                  </span>
                  <li>
                    <span className="item-heading">Name</span>
                    <span className="item-content">
                      {this.state.characterDetail.name}
                    </span>
                  </li>
                  <li>
                    <span className="item-heading">Height</span>
                    <span className="item-content">
                      {this.state.characterDetail.height}
                    </span>
                  </li>
                  <li>
                    <span className="item-heading">Mass</span>
                    <span className="item-content">
                      {this.state.characterDetail.mass}
                    </span>
                  </li>
                  <li>
                    <span className="item-heading">Hair Color</span>
                    <span className="item-content">
                      {this.state.characterDetail.hair_color}
                    </span>
                  </li>
                  <li>
                    <span className="item-heading">Skin Color</span>
                    <span className="item-content">
                      {this.state.characterDetail.skin_color}
                    </span>
                  </li>
                  <li>
                    <span className="item-heading">Birth Year</span>
                    <span className="item-content">
                      {this.state.characterDetail.birth_year}
                    </span>
                  </li>
                  <li>
                    <span className="item-heading">Gender</span>
                    <span className="item-content">
                      {this.state.characterDetail.gender}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-7">
                  {/* <CharacterFilms></CharacterFilms> */}
                  {this.props.children}
                
              </div>
            </div>
          </div>
        </div>
      );
    };

    let CharacterDetailView = () => {
      if (this.state.loadedDetail == false) return <Loader loadingText={this.state.loadingText} error={this.state.errorLoading} errorLoadingText={this.state.errorLoadingText}/>;
      else return LoadedContent();
    };

    return (
      <div className="h-100">{CharacterDetailView()}</div>
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
