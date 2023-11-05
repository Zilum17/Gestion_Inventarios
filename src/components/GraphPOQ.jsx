import CanvasJSReact from "@canvasjs/react-charts";
import { useContext } from "react";
import { POQContext } from "../context/PoqContext";

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
function GraphPOQ() {
  const { dataPOQ, swttglPOQ, viewPOQ, bestQDX, bestQDY } =
    useContext(POQContext);
  let CT = [];
  let CD = [];
  let CM = [];
  if (swttglPOQ && viewPOQ) {
    let dataEx =
      dataPOQ[6] <= 0
        ? 1 - dataPOQ[0] / dataPOQ[5] / dataPOQ[4]
        : 1 - dataPOQ[6] / dataPOQ[4];
    for (let i = bestQDX / 2; i < bestQDX * 2; i ++) {
      CD.push({ y: (dataPOQ[0] / i) * dataPOQ[1], x: i });
      CM.push({ y: (i*dataEx / 2) * dataPOQ[2], x: i });
      CT.push({
        y:i *dataPOQ[3] + ((dataPOQ[0] / i) * dataPOQ[1]) + ((i*dataEx / 2) * dataPOQ[2]),
        x: i,
      });
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
    animationEnabled: true,	
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
        name: "Costo de Pedidos Anual",
        showInLegend: true,
        dataPoints: CD,
        markerSize: 0,
        lineThickness: 3,
      },
      {
        type: "spline",
        name: "Costo de Mantenimiento Anual",
        showInLegend: true,
        dataPoints: CM,
        markerSize: 0,
        lineThickness: 3,
      },
      {
        type: "spline",
        name: "punto",
        showInLegend: true,
        dataPoints: [{ y: parseInt(bestQDY), x: parseInt(bestQDX) }],
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

export default GraphPOQ;
