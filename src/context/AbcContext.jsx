import { createContext, useEffect, useState } from "react";

export const ABCContext = createContext();

export function ABCContextProvider(props) {
  const [increment2, setIncrement2] = useState(0);
  const [dataMultABC, setDataMultABC] = useState([[], [], []]);
  const [resolveABC, setResolveABC] = useState([]);
  const [activateABC, setActivateABC] = useState(false);
  const [checkABC, setCheckABC] = useState(false);
  const [viewABC, setViewABC] = useState(false);
  const [swttglABC, setSwttglABC] = useState(false);
  const [alertABC, setAlertABC] = useState(false);
  useEffect(() => {
    if (dataMultABC[2].length > increment2) {
      for (let i = 0; i < dataMultABC.length; i++) {
        dataMultABC[i].pop();
      }
      setDataMultABC(dataMultABC);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [increment2]);
  useEffect(() => {
    if (activateABC) {
      let conditionalMulti2 = false;
      for (let i = 0; i < dataMultABC[2].length; i++) {
        if (dataMultABC[2][i] <= 0) {
          conditionalMulti2 = true;
        }
      }
      setAlertABC(conditionalMulti2);
      if (conditionalMulti2 || dataMultABC[2].length <= 0) {
        setActivateABC(false);
      } else {
        setCheckABC(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activateABC]);
  useEffect(() => {
    if (checkABC) {
      for (let i = 0; i < dataMultABC[2].length; i++) {
        if (dataMultABC[0][i] == undefined || dataMultABC[0][i] == "") {
          dataMultABC[0][i] = i + 1;
        }
        if (dataMultABC[1][i] == undefined || dataMultABC[1][i] == 0) {
          dataMultABC[1][i] = 1;
        }
      }
      let resolveABCPr = [];
      let max = 0;
      for (let i = 0; i < dataMultABC[2].length; i++) {
        max += dataMultABC[2][i] * dataMultABC[1][i];
      }
      for (let i = 0; i < dataMultABC[2].length; i++) {
        resolveABCPr.push({
          name: dataMultABC[0][i],
          volume: dataMultABC[1][i] * dataMultABC[2][i],
          percent: (dataMultABC[1][i] * dataMultABC[2][i] * 100) / max,
          categoria: "",
        });
      }
      resolveABCPr.sort(function (a, b) {
        if (a.percent < b.percent) {
          return 1;
        }
        if (a.percent > b.percent) {
          return -1;
        }
        return 0;
      });
      let a = 0,
        c = 0;
      if (resolveABCPr.length > 3) {
        for (let i = 0; i < resolveABCPr.length; i++) {
          if (!(a >= 80)) {
            a += resolveABCPr[i].percent;
            if (a <= 85) {
              resolveABCPr[i].categoria = "A";
            }
          }
        }
        for (let i = resolveABCPr.length - 1; i >= 0; i--) {
          if (!(c >= 5)) {
            c += resolveABCPr[i].percent;
            if (c <= 6) {
              resolveABCPr[i].categoria = "C";
            }
          }
        }
        for (let i = 0; i < resolveABCPr.length; i++) {
          if (resolveABCPr[i].categoria == "") {
            resolveABCPr[i].categoria = "B";
          }
        }
      } else if (resolveABCPr.length == 3) {
        resolveABCPr[0].categoria = "A";
        resolveABCPr[1].categoria = "B";
        resolveABCPr[2].categoria = "C";
      }
      setResolveABC(resolveABCPr);
      setViewABC(true);
      setCheckABC(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkABC]);
  return (
    <ABCContext.Provider
      value={{
        resolveABC,
        setResolveABC,
        swttglABC,
        setSwttglABC,
        viewABC,
        setViewABC,
        checkABC,
        setCheckABC,
        activateABC,
        setActivateABC,
        increment2,
        setIncrement2,
        dataMultABC,
        setDataMultABC,
        alertABC,
        setAlertABC,
      }}
    >
      {props.children}
    </ABCContext.Provider>
  );
}
