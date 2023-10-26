import { createContext, useEffect, useState } from "react";

export const QDContext = createContext();

export function QDContextProvider(props) {
  const [increment1, setIncrement1] = useState(0);
  const [success, setSuccess] = useState(0);
  const [dataMultQD, setDataMultQD] = useState([[], [], []]);
  const [dataQD, setDataQD] = useState([]);
  const [activateQD, setActivateQD] = useState(false);
  const [checkQD, setCheckQD] = useState(false);
  const [viewQD, setViewQD] = useState(false);
  const [swttglQD, setSwttglQD] = useState(false);
  const [resolveQD, setResolveQD] = useState([[], [], [], [], [], [], []]);
  useEffect(() => {
    if (dataMultQD[0].length > increment1) {
      for (let j = 0; j < 7; j++) {
        resolveQD[j].pop()
      }
      for (let i = 0; i < 3; i++) {
        dataMultQD[i].pop();

      }
      setResolveQD(resolveQD);
      setDataMultQD(dataMultQD);
    }
  }, [increment1]);
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
      if (dataQD[2] <= 0) {
        console.log(dataMultQD[0].length)
        for (let i = 0; i < dataMultQD[0].length; i++) {
          resolveQD[0][i] = i + 1;
          resolveQD[2][i] = Math.ceil(
            Math.sqrt(
              (2 * dataQD[0] * dataQD[1]) / (dataQD[3] * dataMultQD[2][i])
            )
          );
          resolveQD[3][i] =
            resolveQD[2][i] < dataMultQD[0][i]
              ? dataMultQD[0][i]
              : resolveQD[2][i];
          resolveQD[4][i] = dataQD[0] * dataMultQD[2][i];
          resolveQD[5][i] = (dataQD[0] / resolveQD[3][i]) * dataQD[1];
          resolveQD[6][i] =
            Math.ceil(
              (resolveQD[3][i] / 2) * (dataQD[3] * dataMultQD[2][i]) * 100
            ) / 100;
          resolveQD[1][i] = resolveQD[4][i] + resolveQD[5][i] + resolveQD[6][i];
        }
        setSuccess(resolveQD[1].indexOf(Math.min(...resolveQD[1])));
      } else {
        for (let i = 0; i < dataMultQD[0].length; i++) {
          resolveQD[0][i] = i + 1;
          resolveQD[2][i] = Math.ceil(
            Math.sqrt((2 * dataQD[0] * dataQD[1]) / dataQD[2])
          );
          resolveQD[3][i] =
            resolveQD[2][i] < dataMultQD[0][i]
              ? dataMultQD[0][i]
              : resolveQD[2][i];
          resolveQD[4][i] = dataQD[0] * dataMultQD[2][i];
          resolveQD[5][i] = Math.ceil(
            (dataQD[0] / resolveQD[2][i]) * dataQD[1]
          );
          resolveQD[6][i] =
            Math.ceil((resolveQD[2][i] / 2) * dataQD[2] * 100) / 100;
          resolveQD[1][i] = Math.ceil(
            resolveQD[4][i] + resolveQD[5][i] + resolveQD[6][i]
          );
        }
        setSuccess(resolveQD[1].indexOf(Math.min(...resolveQD[1])));
      }

      setViewQD(true);
      setResolveQD(resolveQD);
      setCheckQD(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        viewQD,
        setViewQD,
        checkQD,
        setCheckQD,
        swttglQD,
        setSwttglQD,
        resolveQD,
        success,
        setResolveQD
      }}
    >
      {props.children}
    </QDContext.Provider>
  );
}
