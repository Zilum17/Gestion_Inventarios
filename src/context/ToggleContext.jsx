import { createContext, useEffect, useState } from "react";
export const ToggleContext = createContext();

export function ToggleContextProvider(props) {
  const [page, setPage] = useState(0)
  const [toggle, setToggle] = useState(() => {
    const saved = localStorage.getItem("toggle");
    return /true/.test(saved) || false;
  });
  useEffect(() => {
    localStorage.setItem("toggle", toggle);
  }, [toggle]);

  
  return (
    <ToggleContext.Provider value={{ toggle, setToggle, page, setPage }}>
      {props.children}
    </ToggleContext.Provider>
  );
}
