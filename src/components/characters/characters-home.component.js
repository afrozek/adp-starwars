import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import fingerPrintIcon from "../../assets/images/finger-print-icon.svg";
import arrowDownLongGreyIcon from "../../assets/images/arrow-down-long-grey-icon.svg";



import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import './characters-page.scss';

import CharacterCardList from './character-card-list.component';
import * as log from 'loglevel';



class CharactersHome extends Component {

   constructor(props) {
      super(props);

      this.state = {
         loadedCharacters: false
      }
   }

   componentDidMount() {

      setTimeout(()=> {
         this.setState({
            loadedCharacters: true,
            characters: [
               {
                 "name": "Luke Skywalker",
                 "url": "https://swapi.co/api/people/1/",
                 "cardImgPath": "/images/luke-skywalker-card-render.svg",
               },
               {
                 "name": "Darth Vader",
                 "url": "https://swapi.co/api/people/4/",
                 "cardImgPath": "/images/darth-vader-card-render.svg"
               },
               {
                 "name": "Obi-wan Kenobi",
                 "url": "https://swapi.co/api/people/unknown/",
                 "cardImgPath": "/images/obi-wan-kenobi-card-render.svg"
               }, 
               {
                 "name": "R2-D2",
                 "url": "https://swapi.co/api/people/3/",
                 "cardImgPath": "/images/r2-d2-card-render.svg"
               }
             ]
         })
      }, 2000)
   }


  render() {
    log.debug("characters: ", this.state.characters)

    let CharacterListView = () => {
         if(this.state.loadedCharacters == false)
            return <div>loading characters</div>
         else
            return <CharacterCardList characters={this.state.characters}></CharacterCardList>

         
    }
    

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img className="d-inline-block mb-3" src={fingerPrintIcon} alt="Finger Print"/>
            <h2 className="h4">Select a Character</h2>
            <p className="sub-text">View your favorite Star Wars character info<br/>such as their traits, movies and more.</p>
            
            <img className="d-inline-block" src={arrowDownLongGreyIcon} alt="Down Arrow"/>
          </div>
        </div>
        {CharacterListView()}
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

export default withRouter(connect(mapStateToProps)(CharactersHome));

// promotes to a container
// export default (connect(mapStateToProps)(CharactersHome));
