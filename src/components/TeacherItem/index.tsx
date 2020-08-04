import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/55674918?s=460&u=03d6fee3ef8c6f7d76eadd53b48481941f67da70&v=4"
          alt="Mateus V. Farias"
        />
        <div>
          <strong>Mateus V. Farias</strong>
          <span>Empreendorismo</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de desenvolvimento e
        empreendedorismo.
        <br />
        <br />
        Apaixonado por tecnologia e ideias.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
