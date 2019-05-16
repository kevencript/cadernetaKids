import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {}

  render() {
    const Landing = () => <h2>Landing</h2>;
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Route exact path="/landing" component={Landing} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
