import React, { Component } from "react";
import "./style.css";

export default class FirstSection extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container text-center textStyle">
            <div className="row">
              <div className="col-sm-6 col-m6">
                <h1 className="textTitle ">
                  <strong>
                    Que tal ter mais controle e segurança para as medidas do seu
                    filho?
                  </strong>
                </h1>
                <h4 className="textBody ">
                  Tenha um melhor controle das medidas do seu Bebê de forma
                  segura, prática e digital!
                </h4>
                <button className="buttonStart">
                  Começar Agora <i class="fas fa-grin-stars" />
                </button>
              </div>
              <div className="col-sm-6 complementImg">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
