import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar.jsx";
import QDpage from "./pages/QD";
import EOQpage from "./pages/EOQ";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/EOQ" element={<EOQpage />} />
        <Route path="/QD" element={<QDpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
