import React, { Component } from "react";
import "./style.css";

export default class SecondSection extends Component {
  render() {
    return (
      <div>
        <section className="section2">
          <div className="container text-center textStyle">
            <div className="row">
              <div className="col-md-6 willHideImage">
                <img
                  src="https://www.pinclipart.com/picdir/big/209-2098773_child-motor-skill-play-clip-art-cartoon-kids.png"
                  alt=""
                  className="img_second"
                />
              </div>
              <div className="col-sm-12 col-md-6 textSection">
                <h1 className="textTitle ">
                  <strong>
                    Acompanhe o crescimendo do seu filho, até tomando um café
                    <i class="fas fa-coffee iconCoffee" />
                  </strong>
                </h1>
                <h4 className="textBody">
                  Crie uma caderneta de anotações e tenha um maior controle do
                  crescimento do seu bebê, acompanhe o crescimento, verifique os
                  indicadores de saúde e compartilhe com os amigos.
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
