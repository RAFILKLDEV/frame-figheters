export function PlayerSlot(props) {
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
      <div className="Player-Title">Player 1</div>
    </div>
  );
}
