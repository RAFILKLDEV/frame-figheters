import { useRef } from "react";
import "./App.css";
import { PlayerSlot } from "./components/PlayerSlot/PlayerSlot";

function App() {
  const modal = useRef();
  function sequencia(nGolpes, nome) {
    modal.current.style.display = "block";
    // const golpes = []
    // for (let index = 0; index < nGolpes.length; index++) {
    //   golpes.push(nome)
    // }
  }
  return (
    <div className="App">
      <div className="Modal" ref={modal}>
        <div className="List">sequencia</div>
        <div className="ModalButton">
          <div></div>
          <button className="Button-Cima">CIMA</button>
          <div></div>
          <button className="Button-Esquerda">Lados</button>
          <button className="Button-Meio">Meio</button>
          <button className="Button-Direta">Lados</button>
          <div></div>
          <button className="Button-Baixo">Baixo</button>
          <div></div>
        </div>
      </div>
      <div className="Arena">
        <PlayerSlot />
        <PlayerSlot />
      </div>
      <button onClick={sequencia}>TESTE</button>
    </div>
  );
}

export default App;
