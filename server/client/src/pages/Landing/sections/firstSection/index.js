import React, { Component } from "react";
import "./style.css";

export default class FirstSection extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container text-center textStyle">
            <div className="row">
              <div className="col-sm-12 col-md-6">
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
                <button href="/auth/google" className="buttonStart">
                  Começar Agora <i class="fas fa-grin-stars" />
                </button>
              </div>
              <div className="col-sm-12 col-md-6 complementImg">
                <img
                  src="https://www.nicepng.com/png/full/435-4356768_baby-shower-text-png-baby-toys-vector-png.png"
                  className="img_first "
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
