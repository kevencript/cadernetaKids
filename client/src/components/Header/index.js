import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navbarStatus: "hidden"
    };
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 50) {
      this.setState({
        navbarStatus: "show"
      });
    } else {
      this.setState({
        navbarStatus: "hidden"
      });
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }

  renderContent() {
    switch (this.props.auth) {
      case null: // while we don't have an response of api
        return (
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        );
      case false: // user not logged-in
        return (
          <li className="nav-item active">
            <a className="nav-link" href="/auth/google">
              Login com Google <i className="fas fa-sign-in-alt" />
            </a>
          </li>
        );

      default:
        // user logged
        return (
          <div>
            <li className="nav-item active">
              <a className="nav-link" href="/api/logout" aria-disabled="true">
                Sair <i className="fas fa-door-open" />
              </a>
            </li>
          </div>
        );
    }
  }

  // JSX stuff
  render() {
    return (
      <nav
        className="navbar puta fixed-top navbar-expand-lg"
        id={this.state.navbarStatus}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            CadernetaKids+
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-dark" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item menu-item">
                <Link
                  className="nav-link"
                  to={this.props.auth ? "/surveys" : "/"}
                >
                  Início
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">{this.renderContent()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
