import CanvasJSReact from "@canvasjs/react-charts";
import { useContext } from "react";
import { QDContext } from "../context/QdContext.jsx";
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
function GraphQD() {
  const { viewQD, swttglQD, bestQDX, bestQDY, dataQD, dataMultQD } =
    useContext(QDContext);
  let CT = [];
  let maxIteration = 0;
  if (swttglQD && viewQD) {
    for (let i = 0; i < dataMultQD[0].length; i++) {
      maxIteration =
        bestQDY * 2 > dataMultQD[1][i] ? dataMultQD[1][i] : bestQDY * 2;
      if (dataQD[3] <= 0) {
        for (let j = dataMultQD[0][i]; j < maxIteration; j+=1/2) {
          console.log(dataQD[3])
          CT.push({
            y:
              ((j / 2)*dataQD[2]) + ((dataQD[0] * dataQD[1]) / j) + (dataQD[0] * dataMultQD[2][i]),
            x: j,
          });
        }
      }else{
        for (let j = dataMultQD[0][i]; j < maxIteration; j+=1/2) {
          console.log(dataQD[3])
          CT.push({
            y:
              ((j / 2)*(dataMultQD[2][i] * dataQD[3])) + ((dataQD[0] * dataQD[1]) / j) + (dataQD[0] * dataMultQD[2][i]),
            x: j,
          });
        }
      }
      
    }
  }
  CanvasJS.addColorSet("colors", [
    "#ef233c",
    "#8d99ae",
    "#edf2f4",
    "#d80032",
    "#2b2d42",
  ]);
  const options = {
    zoomEnabled: true,
    height: 500,
    theme: "dark1",
    colorSet: "colors",
    backgroundColor: "#2b2d42",
    dataPointMaxWidth: 10,
    title: {
      text: "",
    },
    axisY: {
      title: "Costo",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
      gridColor: "#2b2d42",
    },
    axisX: {
      title: "Cantidad Optima",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    toolTip: {
      shared: true,
      backgroundColor: "#2b2d42",
      borderThickness: 2,
    },
    toolbar: {
      itemBackgroundColor: "#edf2f4",
      itemBackgroundColorOnHover: "#2b2d42",
      buttonBorderThickness: 2,
      buttonBorderColor: "#ef233c",
      fontColor: "#2b2d42",
      fontColorOnHover: "#edf2f4",
    },
    data: [
      {
        type: "spline",
        name: "Costo Total",
        showInLegend: true,
        dataPoints: CT,
        markerSize: 0,
        lineThickness: 3,
      },
      {
        type: "spline",
        name: "punto",
        showInLegend: true,
        dataPoints: [{ y: bestQDX, x: bestQDY }],
        markerSize: 12,
      },
    ],
  };
  return (
    <>
      <CanvasJSChart options={options} /* onRef={ref => this.chart = ref} */ />
    </>
  );
}

export default GraphQD;
