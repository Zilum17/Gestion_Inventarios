import { createContext, useEffect, useState } from "react";

export const QDContext = createContext();

export function QDContextProvider(props) {
  const [increment1, setIncrement1] = useState(0);
  const [dataMultQD, setDataMultQD] = useState([[], [], []]);
  const [dataQD, setDataQD] = useState([]);
  const [activateQD, setActivateQD] = useState(false);
  const [checkQD, setCheckQD] = useState(false);
  const [viewEQD, setViewQD] = useState(false);
  const [swttglQD, setSwttglQD] = useState(false);
  useEffect(() => {
    if (activateQD) {
      console.log(dataMultQD[0].length)
      if (dataQD[0] <= 0 || dataQD[1] <= 0 || dataQD[2] <= 0 || dataQD[3] <= 0 || dataMultQD[0].length <= 0) {
        setActivateQD(false);
        console.log(dataMultQD);
      console.log(dataQD);
      } else {
        setCheckQD(true);
      }
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activateQD]);
  return (
    <QDContext.Provider
      value={{
        increment1,
        setIncrement1,
        dataMultQD,
        setDataMultQD,
        dataQD,
        setDataQD,
        activateQD,
        setActivateQD,
        viewEQD,
        setViewQD,
        checkQD,
        setCheckQD,
        swttglQD,
        setSwttglQD,
      }}
    >
      {props.children}
    </QDContext.Provider>
  );
}
