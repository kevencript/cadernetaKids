import React, { Component } from "react";
import Form from "./form/index";
import "./style.css";

class formProfile extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row firstSpacementCreateChildProfile container">
          <h1 className=" mx-auto text-center titleChildProfile">
            Cadastrar novo Perfil
          </h1>
        </div>
        <div className="row">
          <h3 className="subtitleCreateChildProfile container mx-auto text-center">
            Adicione as informações necessárias para criação de um novo perfil.
          </h3>
        </div>

        {/* Button colapse */}
        <div>
          <p>
            <i
              className="fas fa-info-circle buttonColapse "
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            />
          </p>
          <div class="collapse" id="collapseExample">
            <div className="card card-body" id="textCardbord">
              É necessário adicionar o perfil de bebê para adicionar as
              primeiras medidas
            </div>
          </div>
        </div>
        <Form />
      </div>
    );
  }
}

export default formProfile;
