import { createContext, useEffect, useState } from "react";
export const POQContext = createContext();

export function POQContextProvider(props) {
  const [swttglPOQ, setSwttglPOQ] = useState(false);
  const [bestQDX, setBestQDX] = useState(0);
  const [bestQDY, setBestQDY] = useState(0);
  const [viewPOQ, setViewPOQ] = useState(false);
  const [activatePOQ, setActivatePOQ] = useState(false);
  const [checkPOQ, setCheckPOQ] = useState(false);
  const [dataPOQ, setDataPOQ] = useState([]);
  const [resolvePOQ, setResolvePOQ] = useState([]);

  useEffect(() => {
    if (activatePOQ) {
      if (
        dataPOQ[0] <= 0 ||
        dataPOQ[1] <= 0 ||
        dataPOQ[2] <= 0 ||
        dataPOQ[4] <= 0 ||
        dataPOQ[6] <= 0
      ) {
        setActivatePOQ(false);
      } else {
        setCheckPOQ(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activatePOQ]);
  useEffect(() => {
    if (checkPOQ) {
      if (dataPOQ[6] <= 0) {
        resolvePOQ[0] = Math.ceil(
          Math.sqrt(
            (2 * dataPOQ[0] * dataPOQ[1]) /
              (dataPOQ[2] * (1 - dataPOQ[0] / dataPOQ[5] / dataPOQ[4]))
          )
        );
        resolvePOQ[1] =
          resolvePOQ[0] * (1 - (dataPOQ[0] / dataPOQ[5]) / dataPOQ[4]);
      } else {
        resolvePOQ[0] = Math.ceil(
          Math.sqrt(
            (2 * dataPOQ[0] * dataPOQ[1]) /
              (dataPOQ[2] * (1 - (dataPOQ[6] / dataPOQ[4])))
          )
        );
        resolvePOQ[1] = resolvePOQ[0] * (1 - (dataPOQ[6] / dataPOQ[4]));
      }
      resolvePOQ[2] = resolvePOQ[1] / 2;
      resolvePOQ[3] = Math.ceil(dataPOQ[0] / resolvePOQ[0]);
      resolvePOQ[4] = resolvePOQ[2] * dataPOQ[2];
      resolvePOQ[5] = (dataPOQ[0] / resolvePOQ[0]) * dataPOQ[1];
      resolvePOQ[6] = resolvePOQ[4] + resolvePOQ[5];
      resolvePOQ[7] = dataPOQ[0] * dataPOQ[3];
      resolvePOQ[8] = resolvePOQ[7] + resolvePOQ[6];
      resolvePOQ[9] = Math.floor(resolvePOQ[0] / dataPOQ[6]);
      for (let i = 0; i < resolvePOQ.length; i++) {
        resolvePOQ[i] = resolvePOQ[i].toFixed(1);
      }
      setBestQDX(resolvePOQ[0])
      setBestQDY(resolvePOQ[6])
      setResolvePOQ(resolvePOQ);
      setViewPOQ(true);
      setCheckPOQ(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkPOQ]);
  return (
    <POQContext.Provider
      value={{
        viewPOQ,
        setViewPOQ,
        swttglPOQ,
        setSwttglPOQ,
        dataPOQ,
        setDataPOQ,
        setActivatePOQ,
        activatePOQ,
        resolvePOQ,
        bestQDX,
        bestQDY
      }}
    >
      {props.children}
    </POQContext.Provider>
  );
}
