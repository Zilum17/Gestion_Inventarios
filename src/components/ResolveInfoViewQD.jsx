function ResolveInfoViewQD({ data,nameData,ind }) {
  
  const listItems = data.map((e,i) => {
    return <div key={i} className="content-data"><p className="name-dataqd">{nameData[i]}</p>{e.map((e2,j)=> {
      return <div key={j} className={"data-complete-qd ".concat(ind == j ?"selected":"")}
      style={{ animationDelay: 0.05 + "s" }}>
      <p className="dataqd">{e2}</p></div>
    })}</div>
  })
  return <>{listItems}</>;
}

export default ResolveInfoViewQD;
