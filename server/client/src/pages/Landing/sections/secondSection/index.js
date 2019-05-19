import React, { Component } from "react";
import "./style.css";

export default class SecondSection extends Component {
  render() {
    return (
      <div>
        <section className="section2">
          <div className="container text-center textStyle">
            <div className="row">
              <div className="col-sm-6 willHideImage">
                <img src="" alt="" />
              </div>
              <div className="col-sm-6 col-m6">
                <h1 className="textTitle ">
                  <strong>Mas... por que adotar esse serviço?</strong>
                </h1>
                <h4 className="textBody">
                  Você poderá acompanhar o crescimento do seu filho(a) sem se
                  preocupar em perder essas anotações!
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
