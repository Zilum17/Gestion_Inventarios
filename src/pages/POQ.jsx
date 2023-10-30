import { useContext, useEffect } from "react";
import ButtonResolve from "../components/ButtonResolve";
import InfoPOQ from "../components/InfoPOQ";
import SwitchBtn from "../components/SwitchBtn";
import "../css/poq.css";
import { POQContext } from "../context/PoqContext";
import ResolvePOQ from "../components/ResolvePOQ";
import GraphPOQ from "../components/GraphPOQ";
function POQpage() {
  const {
    setActivatePOQ,
    activatePOQ,
    viewPOQ,
    setViewPOQ,
    swttglPOQ,
    setSwttglPOQ,
    dataPOQ,
    setDataPOQ,
  } = useContext(POQContext);
  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      dataPOQ[i] = 0;
    }
    setDataPOQ(dataPOQ);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function validate() {
    document.querySelectorAll(".inputEOQ").forEach((input, i) => {
      if (input.value == "" && i != 6) {
        input.parentElement.firstChild.innerText = "Falta rellenar este campo";
      } else {
        input.parentElement.firstChild.innerText = "";
      }
    });
  }
  const item = viewPOQ ? <ResolvePOQ /> : "";
  const graph = swttglPOQ ? (
    <div className="graph">
      <GraphPOQ />
    </div>
  ) : (
    ""
  );
  return (
    <div className="principalPOQ">
      <div className="naveoq">
        <SwitchBtn
          use={!viewPOQ}
          name="Gráfico"
          value={swttglPOQ}
          setValue={setSwttglPOQ}
        />
        <ButtonResolve
          value={activatePOQ}
          setValue={setActivatePOQ}
          value2={swttglPOQ}
          setValue2={setSwttglPOQ}
          view={viewPOQ}
          setView={setViewPOQ}
          validate={validate}
        />
      </div>
      <div className="info">
        <InfoPOQ />
        {item}
        {graph}
      </div>
    </div>
  );
}

export default POQpage;
