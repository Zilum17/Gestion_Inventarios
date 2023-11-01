import { useContext } from "react";
import { ABCContext } from "../context/AbcContext";
import RowInfoABC from "./RowInfoABC";

function InfoABC() {
  const { increment2, dataMultABC, setDataMultABC,alertABC } = useContext(ABCContext);
  let items = [];
  const create = () => {
    items = [];
    for (let i = 1; i <= increment2; i++) {
      items.push(
        <RowInfoABC
          key={i}
          keys={i}
          data={dataMultABC}
          setData={setDataMultABC}
        />
      );
    }
  };
  create();
  const alert =
    increment2 < 1 ? <p className="alert_">No hay descuentos</p> : "";
  const alert2 = alertABC ? <p className="alert_">Datos mal ingresados</p> : "";
  return (
    <form className="section-abc">
      <div className="section-abc_info">
        <div className="abc_info-absolute">
          <div className="abc_info-absolute_title">
            <p>Nombre</p>
            <p>Demanda</p>
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

export default InfoABC;
