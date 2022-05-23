import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const index = () => {
  const [produtosDados, setProdutosDados] = React.useState(null);

  React.useState(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((dados) => dados.json())
      .then((json) => setProdutosDados(json));
  }, []);

  return (
    <section className="produtos animeLeft">
      {produtosDados !== null ? (
        produtosDados.map((produto) => {
          return (
            <Link
              to={`produto/${produto.id}`}
              className="produto"
              key={produto.id}
            >
              <img src={produto.fotos[0].src} alt="imagem produto" />
              <h2>{produto.nome}</h2>
            </Link>
          );
        })
      ) : (
        <></>
      )}
    </section>
  );
};

export default index;
