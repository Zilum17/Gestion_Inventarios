import { createContext, useEffect, useState } from "react";
export const EOQContext = createContext();

export function EOQContextProvider(props) {
  const [swttgl, setSwttgl] = useState(false);
  const [visible, setVisible] = useState("");
  const [swttgl_1, setSwttgl_1] = useState(false);
  const [dataEOQ, setDataEOQ] = useState([]);
  const [resolveEOQ, setResolveEOQ] = useState([]);
  const [activateEOQ, setActivateEOQ] = useState(false);
  const [checkEOQ, setCheckEOQ] = useState(false);
  const [viewEOQ, setViewEOQ] = useState(false);
  useEffect(() => {
    if (activateEOQ) {
      
      if (!swttgl) {
        if (dataEOQ[0] <= 0 || dataEOQ[1] <= 0 || dataEOQ[2] <= 0) {
          setActivateEOQ(false);
        } else {
          setCheckEOQ(true);
        }
      } else {
        if (
          dataEOQ[0] <= 0 ||
          dataEOQ[1] <= 0 ||
          dataEOQ[2] <= 0 ||
          (dataEOQ[4] <= 0 && dataEOQ[5] <= 0) ||
          dataEOQ[6] <= 0
        ) {
          setActivateEOQ(false);
        } else {
          setCheckEOQ(true);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activateEOQ]);
  useEffect(() => {
    if (checkEOQ) {
      resolveEOQ[0] = Math.ceil(
        Math.sqrt((2 * dataEOQ[0] * dataEOQ[1]) / dataEOQ[2])
      );
      resolveEOQ[1] = resolveEOQ[0] / 2;
      resolveEOQ[2] = Math.ceil(dataEOQ[0] / resolveEOQ[0]);
      resolveEOQ[3] = resolveEOQ[2] * dataEOQ[1];
      resolveEOQ[4] = resolveEOQ[1] * dataEOQ[2];
      resolveEOQ[5] = resolveEOQ[3] + resolveEOQ[4];
      resolveEOQ[6] = dataEOQ[0] * dataEOQ[3];
      resolveEOQ[7] = resolveEOQ[3] + resolveEOQ[4] + resolveEOQ[6];
      if (dataEOQ[4] != 0) {
        resolveEOQ[8] = dataEOQ[0] / dataEOQ[4];
        resolveEOQ[9] = resolveEOQ[8] * dataEOQ[6];
      } else if (dataEOQ[5] != 0) {
        resolveEOQ[8] = dataEOQ[0] / dataEOQ[5];
        resolveEOQ[9] = (dataEOQ[0] / resolveEOQ[8]) * dataEOQ[6];
      } else {
        resolveEOQ[8] = dataEOQ[5];
        resolveEOQ[9] = resolveEOQ[8] * dataEOQ[6];
      }
      setResolveEOQ(resolveEOQ);
      setViewEOQ(true);
      setCheckEOQ(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkEOQ]);
  useEffect(() => {
    setTimeout(() => {
      setVisible("info-desactive-visibility ");
    }, 300);
  }, [swttgl]);
  return (
    <EOQContext.Provider
      value={{
        swttgl,
        setSwttgl,
        swttgl_1,
        setSwttgl_1,
        visible,
        setVisible,
        dataEOQ,
        setDataEOQ,
        activateEOQ,
        setActivateEOQ,
        viewEOQ,
        setViewEOQ,
        resolveEOQ,
      }}
    >
      {props.children}
    </EOQContext.Provider>
  );
}
