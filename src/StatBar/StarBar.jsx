export function StatBar(props) {
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
