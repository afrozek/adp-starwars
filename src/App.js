import React, { Component } from "react";

import { connect, Provider } from "react-redux";

import { bindActionCreators } from "redux";

import Main from "./components/main/main.component";
import About from "./components/about.component";
import CharactersPage from "./components/characters/characters-page.component";
import CharactersHome from "./components/characters/characters-home.component";
import CharacterDetail from "./components/characters/character-detail.component";
import CharacterFilms from "./components/characters/character-films.component";

import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
  render
} from "react-router-dom";



class Contact extends React.Component {
  render() {
    return <div>afrozek95@gmail.com </div>;
  }
}

// class CharactersFilmsHome extends React.Component {
//   render() { return <div>Characters Films Home</div> }
// }

// class CharactersHome extends React.Component {
//   render() { return <div>Characters Home</div> }
// }

// class CharactersDetail extends React.Component {
//   render() { return <div>Characters Detail</div> }
// }

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/characters" />
          </Route>
          <Route path="/">
            <Main>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/characters">
                <CharactersPage>
                  <Route exact path="/characters" component={CharactersHome} />
                  <Route  path="/characters/:id/detail" component={CharacterDetail}/>                    
                </CharactersPage>
              </Route>
            </Main>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
