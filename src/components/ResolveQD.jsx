import { useContext } from "react";
import { QDContext } from "../context/QdContext";
import ResolveInfoViewQD from "./ResolveInfoViewQD";

function ResolveQD() {
  const nameData = [
    "Descuento",
    "costo total",
    "Cantidad optima a ordenar",
    "Cantidad optima redondeada",
    "costo de pedido anual",
    "costo de mantenimiento anual",
    "costo unitario",
  ];
  const { viewQD, resolveQD,success } = useContext(QDContext);
  return (
    <div className={"resolve-eoq ".concat(viewQD ? "resolve-eoq-visible" : "")}>
      <div className="resolve-qd_info">
        <ResolveInfoViewQD nameData={nameData} data={resolveQD} ind={success}/>
      </div>
    </div>
  );
}

export default ResolveQD;
