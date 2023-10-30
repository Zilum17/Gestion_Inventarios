import "../css/eoq.css";
import { useContext, useEffect } from "react";
import { EOQContext } from "../context/EoqContext.jsx";
import SwitchBtn from "../components/SwitchBtn.jsx";
import InfoEOQ from "../components/InfoEOQ.jsx";
import ResolveEOQ from "../components/ResolveEOQ.jsx";
import ButtonResolve from "../components/ButtonResolve.jsx";
import GraphEOQ from "../components/GraphEOQ.jsx";

function EOQpage() {
  const {
    swttgl,
    setSwttgl,
    swttgl_1,
    setSwttgl_1,
    setDataEOQ,
    dataEOQ,
    activateEOQ,
    setActivateEOQ,
    viewEOQ,
    setViewEOQ,
  } = useContext(EOQContext);
  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      dataEOQ[i] = 0;
    }
    setDataEOQ(dataEOQ);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    for (let i = 4; i < 8; i++) {
      dataEOQ[i] = 0;
    }
    resetP();
    setDataEOQ(dataEOQ);
    cleanAlert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swttgl]);
  function resetP() {
    document.querySelectorAll(".inputEOQ").forEach((input, i) => {
      i >= 4 ? (input.value = "") : "";
    });
  }
  function validate() {
    if (swttgl) {
      document.querySelectorAll(".inputEOQ").forEach((input) => {
        if (input.value == "") {
          input.parentElement.firstChild.innerText =
            "Falta rellenar este campo";
        } else {
          input.parentElement.firstChild.innerText = "";
        }
      });
    } else {
      document.querySelectorAll(".inputEOQ").forEach((input, i) => {
        if (input.value == "" && i < 4) {
          input.parentElement.firstChild.innerText =
            "Falta rellenar este campo";
        } else {
          input.parentElement.firstChild.innerText = "";
        }
      });
    }
  }
  function cleanAlert() {
    document.querySelectorAll(".inputEOQ").forEach((input) => {
      input.parentElement.firstChild.innerText = "";
    });
  }
  const item = viewEOQ ? <ResolveEOQ /> : "";
  const graph = swttgl_1 ? (
    <div className="graph">
      <GraphEOQ />
    </div>
  ) : (
    ""
  );
  return (
    <div className="principalEOQ">
      <div className="naveoq">
        <SwitchBtn
          use={viewEOQ}
          name="Punto de Reorden"
          value={swttgl}
          setValue={setSwttgl}
        />
        <SwitchBtn
          use={!viewEOQ}
          name="Gráfico"
          value={swttgl_1}
          setValue={setSwttgl_1}
        />
        <ButtonResolve
          value={activateEOQ}
          setValue={setActivateEOQ}
          value2={swttgl_1}
          setValue2={setSwttgl_1}
          view={viewEOQ}
          setView={setViewEOQ}
          validate={validate}
        />
      </div>
      <div className="info">
        <InfoEOQ />
        {item}
        {graph}
      </div>
    </div>
  );
}

export default EOQpage;
