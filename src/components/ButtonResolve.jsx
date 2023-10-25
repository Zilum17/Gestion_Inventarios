function ButtonResolve({ value, setValue,value2,setValue2, view, setView, validate}) {
  const Resolve = (e) => {
    e.preventDefault();
    value ? setValue(false) : setValue(true);
    validate();
    view ? setView(false) : "";
    value2 ? setValue2(false) : "";
  };
  return (
    <div className="info_action">
      <button className="info_action_button" onClick={Resolve}>
        <span></span>
        <p>{view ? "Regresar" : "Resolver"}</p>
      </button>
    </div>
  );
}

export default ButtonResolve;
