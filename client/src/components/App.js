import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions/authActions";

// components imports
import Header from "./Header/index";
import Footer from "./Footer/index";
import Landing from "../pages/Landing/index";
import formProfile from "../pages/formProfile/index";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    //this.props.fetchProfile();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile/create" component={formProfile} />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
