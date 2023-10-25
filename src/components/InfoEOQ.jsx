import "../css/eoq.css";
import { useContext } from "react";
import { EOQContext } from "../context/EoqContext.jsx";
import RowInfo from "./RowInfo.jsx";
function InfoEOQ() {
  const { swttgl, visible, setDataEOQ, dataEOQ } = useContext(EOQContext);
  return (
    <form className="section-eoq">
      <div className="section-eoq_info">
        <RowInfo
          keys="1"
          name="DEMANDA (D)"
          setdata={setDataEOQ}
          data={dataEOQ}
        />
        <RowInfo
          keys="2"
          name="COSTO POR PEDIDO (S)"
          setdata={setDataEOQ}
          data={dataEOQ}
        />
        <RowInfo
          keys="3"
          name="COSTO POR MANTENER (H)"
          setdata={setDataEOQ}
          data={dataEOQ}
        />
        <RowInfo
          keys="4"
          name="COSTO UNITARIO (C)"
          setdata={setDataEOQ}
          data={dataEOQ}
        />
      </div>
      <div
        className={"section-eoq_info "
          .concat(visible)
          .concat(swttgl ? "info-active" : "info-desactive")}
      >
        <RowInfo
          keys="5"
          name="DIAS POR AÑO (d)"
          setdata={setDataEOQ}
          data={dataEOQ}
        />
        <RowInfo
          keys="6"
          name="DEMANDA DIARIA (N)"
          setdata={setDataEOQ}
          data={dataEOQ}
        />
        <RowInfo
          keys="7"
          name="TIEMPO DE ESPERA"
          setdata={setDataEOQ}
          data={dataEOQ}
        />
        <RowInfo
          keys="8"
          name="STOCK DE SEGURIDAD"
          setdata={setDataEOQ}
          data={dataEOQ}
        />
      </div>
    </form>
  );
}

export default InfoEOQ;
