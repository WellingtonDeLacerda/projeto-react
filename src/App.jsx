import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Projeto from "./components/Projetos/Projeto";
import "./App.css";
function App() {
  return (
    <div className="background">
      <Header />
      <Content />
      <Projeto />
      <footer>
        <p>Feito por @WellingDev</p>
      </footer>
    </div>
  );
}
export default App;
