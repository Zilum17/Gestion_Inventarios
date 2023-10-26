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
  const [resolveQD, setResolveQD] = useState([[], [], []]);

  useEffect(() => {
    if (activateQD) {
      if (
        dataQD[0] <= 0 ||
        dataQD[1] <= 0 ||
        (dataQD[2] <= 0 && dataQD[3] <= 0) ||
        dataMultQD[0].length <= 0 ||
        dataMultQD[1].length <= 0 ||
        dataMultQD[2].length <= 0
      ) {
        setActivateQD(false);
      } else {
        setCheckQD(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activateQD]);
  useEffect(() => {
    if (checkQD) {
      console.log(dataMultQD)
      if (dataQD[2] <= 0) {
        for (let i = 0; i < dataMultQD[0].length; i++) {
          resolveQD[0][i] = Math.ceil(Math.sqrt((2*dataQD[0]*dataQD[1])/(dataQD[3] * dataMultQD[2][i])))
        }
        console.log(resolveQD)
      }
      setResolveQD(resolveQD);
    }
  }, [checkQD]);
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
        resolveQD,
      }}
    >
      {props.children}
    </QDContext.Provider>
  );
}
