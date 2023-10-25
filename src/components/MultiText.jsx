function MultiText({keys, setData, data}) {
  const updateC = (datas, i) => {
    data[i][keys - 1] = parseInt(datas);
    setData(data);
  };
  return (
    <div className="multitext">
      <p className="alert"></p>
      <span>{keys}</span>
      <input
        className="multitext_input"
        type="number"
        placeholder="0"
        min="0"
        onChange={(e) => {
          updateC(e.target.value || 0, 0); // add validate
        }}
        required
      />
      <input
        className="multitext_input"
        type="number"
        placeholder="999"
        min="0"
        onChange={(e) => {
          updateC(e.target.value || 0, 1); // add validate
        }}
        required
      />
      <input
        className="multitext_input"
        type="number"
        placeholder="$"
        onChange={(e) => {
          updateC(e.target.value || 0, 2); // add validate
        }}
        required
      />
    </div>
  );
}

export default MultiText;
