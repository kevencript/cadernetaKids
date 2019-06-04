import React, { Component } from "react";
import "./style.css";
import MaskedInput from "react-maskedinput";

class Form extends Component {
  state = {
    date: ""
  };

  _onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container sectionContainer">
        <form
          className="formContainer col-12 "
          method="POST"
          action="/api/profile/new"
        >
          <i className="fas fa-baby " id="babyCarriegeForm" />

          <div className="row text-left">
            {/* Name Section */}
            <div className="col-sm-12 col-md-5">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                  Qual o nome do seu filho(a)?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Digite o nome"
                  required
                />
              </div>
            </div>
            {/* Middlename Section */}
            <div className="col-sm-12 col-md-7">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                  Qual o sobrenome do seu filho(a)?
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Digite o sobrenome"
                />
              </div>
            </div>
          </div>

          <div className="row text-left">
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <label htmlFor="genre">Selecione o Gênero do seu Bebê</label>
                <select className="form-control" id="genre" required>
                  <option value="">:: SELECIONE ::</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <label htmlFor="genre">
                  Qual a data de nascimento do Bebê?
                </label>
                <MaskedInput
                  className="form-control "
                  mask="11/11/1111"
                  placeholder="Digite a data xx/xx/xxxx"
                  name="date"
                  size="20"
                  onChange={this._onChange}
                />
              </div>
            </div>

            <div className="col-sm-12">
              <button
                type="submit"
                id="buttonFormChildProfile"
                className="btn col-sm-12"
              >
                Cadastrar Perfil
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
