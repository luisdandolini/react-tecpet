import React from "react";
import Header from "../components/header/Header";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

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

      <section className="container-agendamento">
        <div className="container-about">
          <div className="about">
            <p>
            Se você quer fazer o seu <span> Banho e Tosa </span> crescer mas se sente preso ao operacional e quer ter mais tempo, vem comigo que vou te mostrar uma <span>Solução que trabalha por Você!</span> 
            </p>
          </div>
          <img src="/assets/img/agendamento.png" alt="" />
          <div className="about-tecpet">
            <p className="about-tecpet-text">
              Somos a Tecpet,  <br /> e possuímos um  <br /> propósito simples:
            </p>
            <p className="about-tecpet-solution">
              Por meio de uma solução inteligente que trabalha por você, ajudamos o seu negócio a:
            </p>
            <ul className="about-list">
              <li> <span className="icon-list"><FontAwesomeIcon icon={faCircle} /></span>  Vender mais</li>
              <li> <span className="icon-list"><FontAwesomeIcon icon={faCircle} /></span> Fidelizar Clientes</li>
              <li> <span className="icon-list"><FontAwesomeIcon icon={faCircle} /></span> Aumentar a Produtividade</li>
            </ul>
          </div>
        </div>
        <a className="button-whats" href="https://api.whatsapp.com/send?phone=99999999&text=Olá,%20tudo%20bem?">
          Quer uma demonstração ao vivo? <br /> Agende o seu horário
        </a>
      </section>

      <section className="container-messenger">
        <div className="messenger">
          <img src="/assets/img/conversa_petbot.png" alt="" />
          <div>
            <p className="messenger-text">Cansado de enviar tantas mensagens básicas?</p>
            <p className="messenger-test">FAÇA O TESTE e veja as mensagens automáticas da tecpet!</p>

            <a className="button-test" href="https://api.whatsapp.com/send?phone=99999999&text=Olá,%20tudo%20bem?">
              Faça o teste e receba as mensagens!
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home;