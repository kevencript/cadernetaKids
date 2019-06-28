import React, { useState } from "react";
import "./style.css";

const Form = () => {
  //Defining the hooks
  const [formData, setFormData] = useState({
    name: "",
    middlename: "",
    genre: "",
    date: ""
  });

  //Reciving the data from formData
  const { name, middlename, genre, date } = formData;

  //onChange function
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //onSubmit function
  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container sectionContainer">
      <form
        className="formContainer col-12 "
        method="GET"
        onSubmit={e => onSubmit(e)}
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
                name="name"
                placeholder="Digite o nome"
                value={name}
                onChange={e => onChange(e)}
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
                type="text"
                className="form-control"
                id="middlename"
                name="middlename"
                value={middlename}
                onChange={e => onChange(e)}
                placeholder="Digite o sobrenome"
              />
            </div>
          </div>
        </div>

        <div className="row text-left">
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="genre">Selecione o Gênero do seu Bebê</label>
              <select
                className="form-control"
                id="genre"
                name="genre"
                value={genre}
                onChange={e => onChange(e)}
                required
              >
                <option value="">:: SELECIONE ::</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="genre">Qual a data de nascimento do Bebê?</label>
              <input
                className="form-control"
                placeholder="Digite a data xx/xx/xxxx"
                onChange={e => onChange(e)}
                value={date}
                name="date"
                size="20"
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
};

export default Form;
