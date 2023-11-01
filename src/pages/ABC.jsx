import { useContext } from "react";
import ButtonResolve from "../components/ButtonResolve";
import InfoABC from "../components/InfoABC";
import TextFieldI from "../components/TextFieldI";
import "../css/abc.css";
import { ABCContext } from "../context/AbcContext";
import ResolveABC from "../components/ResolveABC";
function ABCpage() {
  const {
    setIncrement2,
    swttglABC,
    setSwttglABC,
    viewABC,
    setViewABC,
    activateABC,
    setActivateABC,
  } = useContext(ABCContext);
  function validate() {
    document.querySelectorAll(".multitextABC").forEach((e) => {
      if(e.lastChild.value == ""){
        e.firstChild.innerText = "Falta rellenar el ultimo campo";
      }else{
        e.firstChild.innerText = "";
      }
    })
  }
  const item2 = viewABC ? <ResolveABC/> : "";
  return (
    <div className="principalABC">
      <div className="naveoq">
        <TextFieldI name="Elementos" setIncrement={setIncrement2} />
        <ButtonResolve
          value={activateABC}
          setValue={setActivateABC}
          value2={swttglABC}
          setValue2={setSwttglABC}
          view={viewABC}
          setView={setViewABC}
          validate={validate}
        />
      </div>
      <div className="info">
        <InfoABC />
        {item2}
      </div>
    </div>
  );
}

export default ABCpage;
