import { createContext, useEffect, useState } from "react";
export const ToggleContext = createContext();

export function ToggleContextProvider(props) {
  const [toggle, setToggle] = useState(() => {
    const saved = localStorage.getItem("toggle");
    return /true/.test(saved) || false;
  });
  useEffect(() => {
    localStorage.setItem("toggle", toggle);
  }, [toggle]);

  
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {props.children}
    </ToggleContext.Provider>
  );
}
