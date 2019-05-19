import React, { Component } from "react";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="page-footer font-small blue pt-1">
          <div class="footer-copyright text-center py-3">
            CadernetaKids © 2019 |
            <a
              className="socialIcons"
              target="_blank"
              href="https://www.linkedin.com/in/gabriel-bragavera/"
            >
              <i
                rel="tooltip"
                data-placement="top"
                title="Linkedin do Desenvolvedor Web"
                className="fab fa-linkedin"
              />
            </a>
            <a
              className="socialIcons"
              target="_blank"
              href="https://www.linkedin.com/in/gabriel-bragavera/"
            >
              <i
                rel="tooltip"
                data-placement="top"
                title="GitHub do Desenvolvedor Web"
                class="fab fa-github"
              />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
