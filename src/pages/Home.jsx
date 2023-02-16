import React from "react";
import Header from "../components/header/Header";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

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
            <li> <span className="icon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span> São tantos e tantos clientes para responder pelo WhatsApp</li>
            <li> <span className="icon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span> Perda de tempo com coisas tão básicas</li>
            <li> <span className="icon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span> Uma agenda desorganizada?</li>
            <li> <span className="icon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span> Erros e mais erros?</li>
            <li> <span className="icon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span> Conflitos entre clientes e funcionários?</li>
            <li> <span className="icon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span> Perda de clientes? Perda de vendas? Crescimento limitado?</li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home;