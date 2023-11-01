import { useContext } from "react";
import { ABCContext } from "../context/AbcContext";
import ResolveInfoViewABC from "./ResolveInfoViewABC";

function ResolveABC() {
  const { viewABC, resolveABC } = useContext(ABCContext);
  return (
    <div
      className={"resolve-eoq ".concat(viewABC ? "resolve-eoq-visible" : "")}
    >
      <div className="resolve-abc_info">
        <div className="resolve-abc_info-absulte">
          <div key="0" className="content-dataABC-color">
            <p>ITEM</p>
            <p>Volumen</p>
            <p>Porcentaje %</p>
            <p>Categoria</p>
          </div>
          <ResolveInfoViewABC data={resolveABC} />
        </div>
      </div>
    </div>
  );
}

export default ResolveABC;
