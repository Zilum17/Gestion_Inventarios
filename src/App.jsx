
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar.jsx";
import QDpage from "./pages/QD.jsx";
import EOQpage from "./pages/EOQ.jsx";
import POQpage from "./pages/POQ.jsx";
import ABCpage from "./pages/ABC.jsx";
import "./css/base.css";
import { useContext } from "react";
import { ToggleContext } from "./context/ToggleContext.jsx";
function App() {
  const {page} = useContext(ToggleContext)
  let PagePrincipal = "";
  if (page == 0) {
    PagePrincipal = <HomePage/>;
  }else if(page == 1) {
    PagePrincipal = <EOQpage/>;
  }else if(page == 2) {
    PagePrincipal = <QDpage/>;
  }else if(page == 3) {
    PagePrincipal = <POQpage/>;
  }else if(page == 4) {
    PagePrincipal = <ABCpage/>;
  }
  return (
    <>
      <Navbar />
      <div className="base-root">
        {PagePrincipal}
      </div>
    </>
  );
}

export default App;
