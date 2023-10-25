import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext.jsx";
function Header() {
  const { toggle } = useContext(ToggleContext);
  return (
    <header>
      <div className={"header_head ".concat(toggle ? "" : "li-mini")}>
        <span className="header_icon">
          <p>IO</p>
        </span>
        <span className={"header_title ".concat(toggle ? "" : "hide")}>
          <p>Investigacion de Operaciones</p>
        </span>
      </div>
    </header>
  );
}

export default Header;
