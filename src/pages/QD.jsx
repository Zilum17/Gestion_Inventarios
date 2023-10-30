import "../css/qd.css";
import SwitchBtn from "../components/SwitchBtn";
import ButtonResolve from "../components/ButtonResolve";
import InfoQD from "../components/InfoQD.jsx";
import TextFieldI from "../components/TextFieldI.jsx";
import { useContext, useEffect } from "react";
import { QDContext } from "../context/QdContext.jsx";
import ResolveQD from "../components/ResolveQD.jsx";
import GraphQD from "../components/GraphQD.jsx";
function QDpage() {
  const {
    setIncrement1,
    activateQD,
    setActivateQD,
    viewQD,
    setViewQD,
    swttglQD,
    setSwttglQD,
    dataQD,
    setDataQD,
  } = useContext(QDContext);
  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      dataQD[i] = 0;
    }
    setDataQD(dataQD);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const item2 = viewQD ? <ResolveQD /> : "";
  function validate() {
    document.querySelectorAll(".inputEOQ").forEach((input) => {
      if (input.value == "") {
        input.parentElement.firstChild.innerText = "Falta rellenar este campo";
      } else {
        input.parentElement.firstChild.innerText = "";
      }
    });
    if (document.querySelector(".qd_info-absolute").childNodes.length > 1) {
      document.querySelectorAll(".multitext_input").forEach((input) => {
        if (input.value == "") {
          input.parentElement.firstChild.innerText = "Falta rellenar un campo";
        } else {
          input.parentElement.firstChild.innerText = "";
        }
      });
    }
  }


  const graph = swttglQD ? (
    <div className="graph">
      <GraphQD />
    </div>
  ) : (
    ""
  );
  return (
      <div className="principalQD">
        <div className="naveoq">
          <SwitchBtn
            name="Gráfico"
            value={swttglQD}
            setValue={setSwttglQD}
            use={!viewQD}
          />
          <TextFieldI
            name="Cantidad de Descuentos"
            setIncrement={setIncrement1}
          />
          <ButtonResolve
            value={activateQD}
            setValue={setActivateQD}
            value2={swttglQD}
            setValue2={setSwttglQD}
            view={viewQD}
            setView={setViewQD}
            validate={validate}
          />
        </div>
        <div className="info">
          <InfoQD />
          {item2}
          {graph}
        </div>
      </div>
  );
}

export default QDpage;
