import React from 'react';
import './style.scss';

const index = () => {
  return (
    <section className="contato animeLeft">
      <img
        src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/camera.jpg"
        alt="imagem camera (não achei a original)"
      />
      <div className="contato-info">
        <h1>Entre em contato.</h1>
        <ul>
          <li>andre@origamid.com</li>
          <li>999999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default index;
