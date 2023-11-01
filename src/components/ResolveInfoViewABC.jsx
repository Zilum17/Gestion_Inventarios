
function ResolveInfoViewABC({ data }) {
    const listItems = data.map((e,i) => {
        return <div key={i} className="content-dataABC">
            <p>{e.name}</p>
            <p>{Math.floor(e.volume * 100)/100}</p>
            <p>{Math.floor(e.percent * 100)/100}</p>
            <p>{e.categoria}</p>
        </div>
      })
  return (
    <>
      {listItems}
    </>
  )
}

export default ResolveInfoViewABC
