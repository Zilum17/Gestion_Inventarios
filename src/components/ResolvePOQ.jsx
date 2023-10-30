import { useContext } from "react";
import { POQContext } from "../context/PoqContext";
import ResolveInfoViewPOQ from "./ResolveInfoViewPOQ";

function ResolvePOQ() {
  const { viewEOQ, resolvePOQ } = useContext(POQContext);
  const nameData = [
    [
      "cantidad óptima a producir",
      "nivel máximo de inventario",
      "inventario promedio",
      "produccion anual",
      "costo de pedido anual",
      "costo de mantenimiento anual",
      "costo total de inventario",
      "costo unitario",
      "costo total",
      "punto de reorden",
    ],
  ];
  return (
    <div
      className={"resolve-eoq ".concat(viewEOQ ? "resolve-eoq-visible" : "")}
    >
      <div className="resolve-eoq_info">
        <ResolveInfoViewPOQ nameData={nameData} data={resolvePOQ} />
      </div>
    </div>
  );
}

export default ResolvePOQ;
