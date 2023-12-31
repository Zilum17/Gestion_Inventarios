import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext.jsx";
import { EOQContext } from "../context/EoqContext.jsx";
import { QDContext } from "../context/QdContext.jsx";
import { POQContext } from "../context/PoqContext.jsx";
import { ABCContext } from "../context/AbcContext.jsx";
function NavButton({page, title, name, clas = " " }) {
  const { toggle, setToggle, setPage} = useContext(ToggleContext);
  const { setSwttgl, setSwttgl_1, setVisible, setViewEOQ, setActivateEOQ } =
    useContext(EOQContext);
  const {
    setIncrement1,
    setActivateQD,
    setViewQD,
    setCheckQD,
    setSwttglQD,
    setResolveQD,
    setAlertQD,
  } = useContext(QDContext);
  const {
    setViewPOQ,
    setSwttglPOQ,
    setActivatePOQ,
    setCheckPOQ,
    setResolvePOQ,
  } = useContext(POQContext);
  const {
    setSwttglABC,
    setViewABC,
    setCheckABC,
    setActivateABC,
    setIncrement2,
    setAlertABC,
  } = useContext(ABCContext);
  return (
    <li className={"nav_ul_li ".concat(toggle ? "" : "li-mini")}>
      <a
        className="nav_ul_li_link"
        onClick={() => {
          setPage(page);
          setSwttgl(false);
          setSwttgl_1(false);
          setViewEOQ(false);
          setVisible("");
          page != 2 ? setIncrement1(0) : "";
          setToggle(false);
          setActivateEOQ(false);
          setActivateQD(false);
          setViewQD(false);
          setCheckQD(false);
          setSwttglQD(false);
          setResolveQD([[], [], [], [], [], [], []]);
          setAlertQD(false);
          setViewPOQ(false);
          setSwttglPOQ(false);
          setCheckPOQ(false);
          setActivatePOQ(false);
          setResolvePOQ([]);
          setSwttglABC(false);
          setViewABC(false);
          setCheckABC(false);
          setActivateABC(false);
          page != 4 ? setIncrement2(0) : "";
          setAlertABC(false);
        }}
      >
        <span className={"title ".concat(clas)}>
          <p>{title}</p>
        </span>
        <p className={"name ".concat(toggle ? "" : "hide")}>{name}</p>
      </a>
    </li>
  );
}

export default NavButton;
