import { useState } from "react";

function Article({ titulo, data, dataFormatada, autor, conteudo, tipo, fraquezas }) {

  const [isEstatistica, setIsEstatistica] = useState(false);

  
  const imagemBase = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png";
  const imagemEstatistica = "estatisticas_Alakazan.png";

  const descricaoBase = "Alakazam forma base";
  const descricaoEstatistica =  "/estatisticas_Alakazan.png";

  function alternarImagem() {
    setIsEstatistica(!isEstatistica);
  }

  return (
    <article>
      <h2>{titulo}</h2>
      <time dateTime={data}>{dataFormatada}</time>
      <figure>
        <img
          src={isEstatistica ? imagemEstatistica : imagemBase}
          alt={isEstatistica ? descricaoEstatistica : descricaoBase}
          style={{ width: "80%", cursor: "pointer" }}
          onClick={alternarImagem}
        />
        <figcaption>{isEstatistica ? descricaoEstatistica : descricaoBase}</figcaption>
      </figure>

      <div className="conteudo">
        <p className="principal">{conteudo}</p>

        <p className="tipo">
          <strong>Tipo:</strong> <span className="tipo_tipo">{tipo}</span>
        </p>

        <p className="fraquezas">
          <strong>Fraquezas:</strong>{" "}
          {fraquezas.map((f, i) => (
            <span key={i} className={f.toLowerCase()}>{f}</span>
          ))}
        </p>
      </div>
    </article>
  );
}

export default Article;
