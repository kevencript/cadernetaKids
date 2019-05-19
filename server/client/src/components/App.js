import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// components imports
import Header from "./Header/index";
import Footer from "./Footer/index";
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
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
