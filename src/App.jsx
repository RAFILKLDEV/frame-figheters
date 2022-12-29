import { useRef, useState } from "react";
import "./App.css";
import { PlayerSlot } from "./components/PlayerSlot/PlayerSlot";

function App() {
  const modal = useRef();
  const tGolpes = ["Cima", "Lados", "Meio", "Baixo"];
  const sprite = [
    "https://toppng.com/public/uploads/thumbnail/tww-master-sword-espada-destructora-del-mal-11563253029fc7leb3naq.png",
    "https://emojipedia-us.s3.amazonaws.com/source/skype/289/drop-of-blood_1fa78.png",
    "https://i.seadn.io/gae/Rg3wJJ6hy-XV1CaJP1lFaFvpBIm2m5li0IlvKI03Tc9C7y0rvZUF_gEfI__fqDNZSp8jtkZyKGxrErThhwN3jSxauMZVFt5DDah9jSU?auto=format&w=1000",
  ];
  const [golpe, setGolpe] = useState([]);
  const [golpe2, setGolpe2] = useState([
    "Cima",
    "Cima",
    "Cima",
    "Cima",
    "Cima",
  ]);
  const [nGolpe, setNGolpe] = useState(3);
  const [nGolpe2, setNGolpe2] = useState(3);
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function golpeButton(nome) {
    if (nGolpe < 1) {
      return null;
    } else {
      golpe.push(nome);
      setNGolpe(nGolpe - 1);
      console.log("Adicionado a " + nome);
    }
  }

  return (
    <div className="App">
      <div className="Modal" ref={modal}>
        <div className="List">
          {" "}
          {golpe.map((e, i) => (
            <div key={e + i}>{e}</div>
          ))}
        </div>
        <div className="ModalButton">
          <div></div>
          <button onClick={() => golpeButton("Cima")} className="Button-Cima">
            CIMA
          </button>
          <div></div>
          <button
            onClick={() => golpeButton("Lados")}
            className="Button-Esquerda"
          >
            Lados
          </button>
          <button onClick={() => golpeButton("Meio")} className="Button-Meio">
            Meio
          </button>
          <button
            onClick={() => golpeButton("Lados")}
            className="Button-Direta"
          >
            Lados
          </button>
          <div></div>
          <button onClick={() => golpeButton("Baixo")} className="Button-Baixo">
            Baixo
          </button>
          <div></div>
        </div>
      </div>
      <div className="Arena">
        <PlayerSlot combo={golpe} image={image} />
        <PlayerSlot combo={golpe2} image={image2} />
      </div>
      <button
        onClick={() => {
          if (modal.current.style.display === "block") {
            modal.current.style.display = "none";
          } else modal.current.style.display = "block";
        }}
      >
        TESTE
      </button>
      <button
        onClick={async () => {
          const sleep = (m) => new Promise((r) => setTimeout(r, m));
          console.log("de novo")

          for (let index = 0; index < 3; index++) {
            golpe2.push(tGolpes[getRandomInt(0, 3)]);
            setNGolpe2(nGolpe2 - 1);
            console.log("Adicionado golpe a  oponente");
          }
          for (let index = 0; index < golpe.length; index++) {
            await sleep(1000);
            if (golpe[index] === golpe2[index]) {
              setImage2(sprite[2]);
              setImage(sprite[0]);
              console.log("Defendeu");
            } else {
              setImage2(sprite[1]);
              console.log("Tomou");
            }
          }
        }}
      >
        Combate
      </button>
    </div>
  );
}

export default App;
