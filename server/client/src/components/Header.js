import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          MaillyApp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a
                class="nav-link disabled"
                tabindex="-1"
                href="/"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <a
            class="nav-link"
            href="/auth/google"
            tabindex="-1"
            aria-disabled="true"
          >
            Login with Google
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
