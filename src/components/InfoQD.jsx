import { useContext, useEffect } from "react";
import RowInfo from "./RowInfo";
import { QDContext } from "../context/QdContext";
import MultiText from "./MultiText";

function InfoQD() {
  const { increment1, dataMultQD, setDataMultQD, dataQD,alertQD, setDataQD } =
    useContext(QDContext);
  let items = [];
  const create = () => {
    items = [];
    for (let i = 1; i <= increment1; i++) {
      items.push(
        <MultiText key={i} keys={i} data={dataMultQD} setData={setDataMultQD} />
      );
    }
  };
  useEffect(() => {
    if (alertQD) {
      const elementScroll = document.querySelector(".qd_info-absolute")
    elementScroll.scrollTop = elementScroll.scrollHeight - elementScroll.clientHeight;
    }
  }, [alertQD])

  create();
  
  const alert =
    increment1 < 1 ? <p className="alert_">No hay descuentos</p> : "";
    const alert2 =
    alertQD ? <p className="alert_">Datos mal ingresados</p> : "";
  return (
    <form className="section-qd">
      <div className="section-qd_info">
        <RowInfo
          keys="1"
          name="DEMANDA (D)"
          data={dataQD}
          setdata={setDataQD}
        />
        <RowInfo
          keys="2"
          name="COSTO POR PEDIDO (S)"
          data={dataQD}
          setdata={setDataQD}
          step="0.01"
        />
        <RowInfo
          keys="3"
          name="COSTO POR MANTENER (H)"
          data={dataQD}
          setdata={setDataQD}
          step="0.01"
        />
        <RowInfo
          keys="4"
          name="PORCENTAJE DEL COSTO (I)"
          data={dataQD}
          setdata={setDataQD}
          step="0.01"
        />
      </div>
      <div className="section-qd_info qd_info">
        <div className="qd_info-absolute">
          <div className="qd_info-absolute_title">
            <p>Item</p>
            <p>Min</p>
            <p>Max</p>
            <p>Precio</p>
          </div>
          {alert}
          {alert2}
          {items}
          
        </div>
      </div>
    </form>
  );
}

export default InfoQD;
