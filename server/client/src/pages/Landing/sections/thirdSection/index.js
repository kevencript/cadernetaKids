import React, { Component } from "react";
import "./style.css";

export default class ThirdSection extends Component {
  render() {
    return (
      <div>
        <section className="section3">
          <div className="container text-center textStyle">
            <div className="row">
              <div className="col-sm-12  col-md-4">
                <h1 className="textTitle ">
                  <i class="fab fa-google-plus-g col-12 icons googleIcon" />
                  <strong>Login com Google+</strong>
                </h1>
                <h4 className="textBody">
                  Realize o Login ou cadastre-se utilizando sua conta no Google!
                  É rápido e seguro.
                </h4>
                <div className="col-sm-6 willHideImage">
                  <img src="" alt="" />
                </div>
              </div>

              <div className="col-sm-12  col-md-4">
                <h1 className="textTitle ">
                  <i class="fas fa-baby icons col-12" />
                  <strong>Adicione Informações</strong>
                </h1>
                <h4 className="textBody">
                  Adicione as primeiras medidas do seu Bebê e com o tempo, nós
                  te dizemos o quanto ele cresceu!
                </h4>
                <div className="col-sm-6 willHideImage">
                  <img src="" alt="" />
                </div>
              </div>

              <div className="col-sm-12  col-md-4">
                <h1 className="textTitle ">
                  <i class="fas fa-users icons col-12" />
                  <strong>Compartilhe!</strong>
                </h1>
                <h4 className="textBody">
                  Compartilhe o desenvolvimento do seu filho com os seus amigos!
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
