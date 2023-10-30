function ResolveInfoViewPOQ({ data, nameData }) {
  const listItems = data.map((e, i) => (
    <div
      key={i}
      className="data-complete "
      style={{ animationDelay: i * 0.05 + "s" }}
    >
      <p className="name-data">{nameData[0][i]}</p>
      <p className="data">{e}</p>
    </div>
  ));
  return <>{listItems}</>;
}

export default ResolveInfoViewPOQ;
