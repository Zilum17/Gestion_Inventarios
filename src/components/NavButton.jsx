import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleContext } from "../context/ToggleContext.jsx";
import { EOQContext } from "../context/EoqContext.jsx";
import { QDContext } from "../context/QdContext.jsx";
function NavButton({ linkTo, title, name, clas = " " }) {
  const { toggle, setToggle } = useContext(ToggleContext);
  const { setSwttgl, setSwttgl_1, setVisible, setViewEOQ, setActivateEOQ } =
    useContext(EOQContext);
  const { setIncrement1, setDataMultQD } = useContext(QDContext);
  const navigate = useNavigate();
  return (
    <li className={"nav_ul_li ".concat(toggle ? "" : "li-mini")}>
      <a
        className="nav_ul_li_link"
        onClick={() => {
          navigate(linkTo, { replace: true });
          setSwttgl(false);
          setSwttgl_1(false);
          setViewEOQ(false);
          setVisible("");
          setIncrement1(0);
          setToggle(false);
          setActivateEOQ(false);
          setDataMultQD([[], [], []])
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
