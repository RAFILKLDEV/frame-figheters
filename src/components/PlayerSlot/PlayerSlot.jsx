export function PlayerSlot(props) {
  function StatBar(props) {
    return (
      <div className="StatBar">
        <div className="StatBar-Content">
          {Array(props.number)
            .fill("")
            .map((e, i) => (
              <div key={e + i} className="StatBar-Verde"></div>
            ))}
        </div>
        <div>{props.name}</div>
        <div>{props.number * 5}%</div>
      </div>
    );
  }

  return (
    <div className="PlayerSlot">
      <div className="Player-Combo">
        {props.combo?.map((e, i) => (
          <div key={e + i}>{e}</div>
        ))}
      </div>
      <div className="Player-Avatar">
        <img src={props.image} alt="" height={"100%"} />
      </div>
      <div className="Player-Stats">
        <StatBar number={props.player.stats.bloqueio} name="Bloqueio" />
        <StatBar number={props.player.stats.velocidade} name="Velocidade" />
      </div>
      <div className="Player-Title">{props.player.nome}</div>
    </div>
  );
}
