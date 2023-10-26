function RowInfo({ keys, name, setdata, data, step }) {
  const updateC = (a) => {
    data[keys - 1] = parseFloat(a);
    setdata(data);
  };

  return (
    <div className="section-eoq_info_field">
      <p className="alert"></p>
      <input
        className="inputEOQ"
        type="number"
        step={step}
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

export default RowInfo;
