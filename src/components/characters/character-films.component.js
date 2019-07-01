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
import * as log from "loglevel";

class CharacterFilms extends Component {
  constructor(props) {
    super(props);
    console.log("super props: ", props);

    this.state = {
      currentView: "list",
      selectedMovie: null
    };

    this.movieSelectedHandler = this.movieSelectedHandler.bind(this);
  }

  movieSelectedHandler(movie) {
    log.debug("movieSelectedHandler: ", movie);
    this.setState({ currentView: "detail", selectedMovie: movie });
  }

  render() {
    // console.log(this.props);

    const movieDetailView = () => {
      return (
        <div>
             <h3>
             {this.state.selectedMovie.title} 
             </h3>
            <div>
            <span onClick={()=> this.setState({selectedMovie: null})}>Back to Films List</span>

            </div>
            <ul>
                <li>
                    Title: {this.state.selectedMovie.title}
                </li>
                {/* <li>
                    Sypnosis: {this.state.selectedMovie.opening_crawl}
                </li> */}
                <li>
                    Director: {this.state.selectedMovie.director}
                </li>
                <li>
                    Producer: {this.state.selectedMovie.producer}
                </li>
                <li>
                    Release Date: {this.state.selectedMovie.release_date}
                </li>
            </ul>
        </div>
      );
    };

    const filmListView = () => {
      return (
        <ul className="film-list">
          <span>
            <img src={playCircleWhiteIcon} alt="Films" />
          </span>
          <h3 className="list-heading">Films</h3>
          {/* <div>{this.props.movieDetail.title}</div> */}
          {/* <p>{JSON.stringify(this.props)}</p> */}
          {/* <p>{this.props.movies}</p> */}
          {/* <p>{this.state.movies}</p> */}

          {this.props.movies.map(movie => {
            return (
              <li key={movie.title}>
                <a onClick={() => this.movieSelectedHandler(movie)}>
                  {movie.title}
                  <img src={arrowRightCircleIcon} alt="" className="" />
                </a>
              </li>
            );
          })}
        </ul>
      );
    };

    if (!this.props.movies) {
      return <div>No Movie Data</div>;
    }

    if (this.state.selectedMovie) return movieDetailView();
    else return filmListView();
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
