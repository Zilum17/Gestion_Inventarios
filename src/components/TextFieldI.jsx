function TextFieldI({ setIncrement,name }) {
  const updateC = (a) => {
    
    (a <= 20 && a >= 0) ? setIncrement(a):"";
  };
  return (
    <div className="textfield">
      <p className="textfield_alert"></p>
      <input
        className="textfiel-apart"
        type="number"
        max="20"
        min="0"
        onChange={(e) => {
          updateC(e.target.value || 0); // add validate
        }}
        required
      />
      <span>{name}</span>
      <i></i>
    </div>
  );
}

export default TextFieldI;
