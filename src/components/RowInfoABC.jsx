

function RowInfoABC({ keys, setData, data }) {
  const updateC = (datas, i) => {
    data[i][keys - 1] = parseFloat(datas);
    setData(data);
  };
  const updateCEx = (datas, i) => {
    data[i][keys - 1] = datas ;
    setData(data);
  };
  return (
    <div className="multitextABC">
      <p className="alert"></p>
      <input
        className="multitextABC_input"
        type="text"
        placeholder={keys}
        onChange={(e) => {
          updateCEx(e.target.value, 0); // add validate
        }}
        required
      />
      <input
        className="multitextABC_input"
        type="number"
        min="0"
        placeholder="1"
        step="0.01"
        onChange={(e) => {
          updateC(e.target.value || 0, 1); // add validate
        }}
        required
      />
      <input
        className="multitextABC_input"
        type="number"
        placeholder="$"
        step="0.01"
        onChange={(e) => {
          updateC(e.target.value || 0, 2); // add validate
        }}
        required
      />
    </div>
  );
}

export default RowInfoABC;
