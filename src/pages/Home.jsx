import React from "react";
import Header from "../components/header/Header";
import './Home.css';

const Home = () => {
  return(
    <React.Fragment>
      <Header />
      <section className="container-dores">
        <img src="/assets/img/dores.png" alt="" />
        <div className="info-dores">
          <h2>A sobrecarga de afazeres está causando a perda de clientes?</h2>
          <p>Isso tira o seu sono? Te atrapalha durante o dia?</p>
          <ul className="container-list">
            <li>São tantos e tantos clientes para responder pelo WhatsApp</li>
            <li>Perda de tempo com coisas tão básicas</li>
            <li>Uma agenda desorganizada?</li>
            <li>Erros e mais erros?</li>
            <li>Conflitos entre clientes e funcionários?</li>
            <li>Perda de clientes? Perda de vendas? Crescimento limitado?</li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home;