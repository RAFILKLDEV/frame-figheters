export function PlayerSlot(props) {
  return (
    <div className="PlayerSlot">
      <div className="Player-Combo"></div>
      <div className="Player-Avatar">
        <img src={props.image} alt="" />
      </div>
      <div className="Player-Title">Player 1</div>
    </div>
  );
}
