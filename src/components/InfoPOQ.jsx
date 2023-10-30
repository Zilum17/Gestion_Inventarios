import { useContext } from "react";
import "../css/poq.css";
import RowInfo from "./RowInfo";
import { POQContext } from "../context/PoqContext";
function InfoPOQ() {
  const { dataPOQ, setDataPOQ } = useContext(POQContext);
  return (
    <form className="section-poq">
      <div className="section-poq_info">
        <RowInfo
          keys="1"
          name="DEMANDA (D)"
          setdata={setDataPOQ}
          data={dataPOQ}
        />
        <RowInfo
          keys="2"
          name="COSTO POR PEDIDO (S)"
          setdata={setDataPOQ}
          data={dataPOQ}
          step="0.01"
        />
        <RowInfo
          keys="3"
          name="COSTO POR MANTENER (H)"
          setdata={setDataPOQ}
          data={dataPOQ}
          step="0.01"
        />
        <RowInfo
          keys="4"
          name="COSTO UNITARIO (C)"
          setdata={setDataPOQ}
          data={dataPOQ}
          step="0.01"
        />
      </div>
      <div className="section-poq_info">
        <RowInfo
          keys="5"
          name="TASA DE PRODUCCIÓN (P)"
          setdata={setDataPOQ}
          data={dataPOQ}
        />
        <RowInfo
          keys="6"
          name="DIAS POR AÑO"
          setdata={setDataPOQ}
          data={dataPOQ}
        />
        <RowInfo
          keys="7"
          name="TASA DE DEMANDA(d)"
          setdata={setDataPOQ}
          data={dataPOQ}
        />
      </div>
    </form>
  );
}

export default InfoPOQ;
