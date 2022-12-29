export function PlayerSlot(props) {
  function StatBar(props) {
    return (
      <div className="StatBar">
        <div className="StatBar-Content">
          {Array(props.number)
            .fill("")
            .map(() => (
              <div className="StatBar-Verde"></div>
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
          <div key={e + Math.random()}>{e}</div>
        ))}
      </div>
      <div className="Player-Avatar">
        <img src={props.image} alt="" height={"100%"} />
      </div>
      <div className="Player-Stats">
        <StatBar number={5} name="Bloqueio" />
        <StatBar number={3} name="Resistencia" />
        <StatBar number={5} name="Esquiva" />
        <StatBar number={7} name="Acerto" />
        <StatBar number={20} name="Dano" />
      </div>
      <div className="Player-Title">Player 1</div>
    </div>
  );
}
