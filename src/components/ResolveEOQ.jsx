import { useContext } from "react";
import { EOQContext } from "../context/EoqContext.jsx";
import ResolveInfoViewEOQ from "./ResolveInfoViewEOQ.jsx";
function ResolveEOQ() {
  const { viewEOQ, resolveEOQ } = useContext(EOQContext);
  const nameData = [
    [
      "costo total",
      "Cantidad óptima a ordenar",
      "inventario promedio",
      "órdenes por periodo",
      "costo de pedido anual",
      "costo de mantenimiento anual",
      "costo total de inventario",
      "costo unitario",
      "demanda diaria",
      "punto de reorden",
    ],
  ];
  return (
    <div
      className={"resolve-eoq ".concat(viewEOQ ? "resolve-eoq-visible" : "")}
    >
      <div className="resolve-eoq_info">
        <ResolveInfoViewEOQ nameData={nameData} data={resolveEOQ} />
      </div>
    </div>
  );
}

export default ResolveEOQ;
