import React, { Component } from "react";
import Header from "./Header/index";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// components imports
import Landing from "../pages/Landing/index";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Landing} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
