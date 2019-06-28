import React, { Component } from "react";

import { connect, Provider } from "react-redux";

import { bindActionCreators } from "redux";

import Main from './components/main/main.component';

import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


class About extends React.Component {
  render() { return <div> ADP Project </div>}
}

class Contact extends React.Component {
  render() { return <div>afrozek95@gmail.com </div> }
}

class Characters extends React.Component {
  render() { return <div>Characters<div>{this.props.children}</div></div> }
}

class CharactersHome extends React.Component {
  render() { return <div>Characters Home</div> }
}

class CharactersDetail extends React.Component {
  render() { return <div>Characters Detail</div> }
}

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
          <Route path="/">
            <Main>
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/characters">
                    <Characters>
                      <Route path="/characters" component={CharactersHome} />
                      <Route path="/characters/detail" component={CharactersDetail} />
                    </Characters>
                  </Route>
            </Main>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
