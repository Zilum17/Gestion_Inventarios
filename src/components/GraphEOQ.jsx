import CanvasJSReact from "@canvasjs/react-charts";
import { useContext } from "react";
import { EOQContext } from "../context/EoqContext.jsx";

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
function GraphEOQ() {
  const { dataEOQ, swttgl_1, viewEOQ } = useContext(EOQContext);
  let CT = [];
  let CD = [];
  let CM = [];
  let q = 0;
  let d = 0;
  if (swttgl_1 && viewEOQ) {
    q = Math.sqrt((2 * dataEOQ[0] * dataEOQ[1]) / dataEOQ[2]);
    d = (q * dataEOQ[2]) / 2 + (dataEOQ[0] * dataEOQ[1]) / q;

    for (let i = q / 2; i < q * 2; i += 2) {
      CD.push({ y: (dataEOQ[0] * dataEOQ[1]) / i, x: i });
      CM.push({ y: (i * dataEOQ[2]) / 2, x: i });
      CT.push({
        y: (i * dataEOQ[2]) / 2 + (dataEOQ[0] * dataEOQ[1]) / i,
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
        dataPoints: [{ y: d, x: q }],
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

export default GraphEOQ;
