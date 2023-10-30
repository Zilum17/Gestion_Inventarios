import NavButton from "./NavButton.jsx";
import Header from "./Header";
import "../css/navbar.css";
import { RiArrowLeftSLine, RiHome6Line } from "react-icons/ri";
import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext.jsx";
function Navbar() {
  const { toggle, setToggle } = useContext(ToggleContext);
  let item;
  item = toggle ? <div className="coverer"></div> : ""
  return (
    <>
      <i
        className={"nav_toggle ".concat(toggle ? "" : "move-i")}
        onClick={() => {
          toggle ? setToggle(false) : setToggle(true);
        }}
      >
        <span className={toggle ? "" : "rotate-span"}>
          <RiArrowLeftSLine />
        </span>
      </i>
      <nav className={"nav ".concat(toggle ? "" : "nav-mini")}>
        <Header />

        <ul className="nav_ul">
          <NavButton linkTo = {'/'} title={<RiHome6Line />} name={"Home"} clas="big" />
          <NavButton linkTo = {'/EOQ'} title={"EOQ"} name={"Economic Order Quantity"} />
          <NavButton linkTo = {'/QD'} title={"QD"} name={"Quantity Discount"} />
          <NavButton linkTo = {'/POQ'} title={"POQ"} name={"Production Order Quantity"} />
          <NavButton title={"ABC"} name={"ABC Analisys"} />
        </ul>
      </nav>
      {item}
    </>
  );
}

export default Navbar;
