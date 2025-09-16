import Header from "./components/Header";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  const post = {
    titulo: "Alakazam Nº 0065",
    data: "2025-08-01",
    dataFormatada: "03 de agosto de 2025",
    autor: "Enzo",
    conteudo: `Ele possui um nível de inteligência incrivelmente alto.
    Alguns dizem que o Alakazam se lembra de tudo o que já aconteceu com ele, 
    desde o nascimento até a morte. Alakazam possui poderosos poderes psíquicos.`,
    imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png",
    descricaoImagem: "Alakazam forma base",
    tipo: "Psíquico",
    fraquezas: ["Bug", "Ghost", "Dark"]
  };

  const relacionados = ["CARTAS", "MEGA EVOLUÇÃO", "NO ANIME"];

  return (
    <>
      <Header />
      <main>
        <Sidebar posts={relacionados} />
        <Article {...post} />
      </main>
      <Footer />
    </>
  );
}

export default App;
