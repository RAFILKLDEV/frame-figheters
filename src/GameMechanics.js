const sleep = (m) => new Promise((r) => setTimeout(r, m));
const tGolpes = ["Cima", "Lados", "Meio", "Baixo"];

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function iniciativa(Player1, velocidadeP1, Player2, velocidadeP2) {
  let vencedor = "";

  if (velocidadeP1 > velocidadeP2) {
    vencedor = Player1;
    console.log(vencedor + " Vencedor");
  } else {
    vencedor = Player2;
    console.log(vencedor + " Vencedor");
  }

  return vencedor;
}

export async function Ataque(atacante, atacanteGolpes, defensorGolpes) {
  console.log(atacante + " esta atacando!");
  for (let index = 0; index < atacanteGolpes.length; index++) {
    await sleep(1000);
    if (atacanteGolpes[index] === defensorGolpes[index]) {
      console.log("Defendeu");
    } else {
      console.log("Tomou");
    }
  }
}

export async function gerarAtkOponente(
  golpes,
  setGolpes,
  qteGolpes,
  setQteGolpes
) {
  await setGolpes([]);
  for (let index = 0; index < 3; index++) {
    golpes.push(tGolpes[getRandomInt(0, 3)]);
    setQteGolpes(qteGolpes - 1);
    console.log("Adicionado golpe a  oponente");
  }
}
