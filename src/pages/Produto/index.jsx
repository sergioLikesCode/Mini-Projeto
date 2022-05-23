import React from 'react';
import { useParams } from 'react-router-dom';

import './style.scss';

const index = () => {
  const [produtoDados, setProdutoDados] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(produto) {
      const dados = await fetch(produto);
      const dadosJson = await dados.json();
      setProdutoDados(dadosJson);
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, []);

  return (
    <>
      {produtoDados !== null ? (
        <section className="produto-detalhes animeLeft">
          <img src={produtoDados.fotos[0].src} alt="imagem produto" />
          <div className="produto-info">
            <h1>{produtoDados.nome}</h1>
            <span>R$ {produtoDados.preco}</span>
            <p>{produtoDados.descricao}</p>
          </div>
        </section>
      ) : (
        <h1>Carregando Dados...</h1>
      )}
    </>
  );
};

export default index;
