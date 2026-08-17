import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Projeto from "./components/Projetos/Projeto";
import "./App.css";
import { useState } from "react";
function App() {
  const [projetos, setProjetos] = useState([
    {
      href: "https://google.com",
      text: "link do google",
      src: "./src/assets/google.png",
      alt: "projeto do google",
    },
    {
      href: "https://github.com",
      text: "link do github",
      src: "./src/assets/github.jpg",
      alt: "projeto do github",
    },
    {
      href: "https://youtube.com",
      text: "link do youtube",
      src: "./src/assets/youtube.jpg",
      alt: "projeto do youtube",
    },
  ]);

  return (
    <div className="background">
      <Header />
      <Content />
      <Projeto links={projetos} />
      <footer>
        <p>Feito por @WellingDev</p>
      </footer>
    </div>
  );
}
export default App;
