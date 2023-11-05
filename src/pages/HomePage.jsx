import "../css/home.css";

function HomePage() {
  let canvas;
  let canvasContext;
  let increment = 0,
    increment2 = 0,
    increment3 = 0;
  let speed = 2,
    speed2 = 0.07;
  function draw() {
    canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext("2d");
    setInterval(drawEverything, 10);
  }
  function drawEverything() {
    canvasContext.fillStyle = "#2b2d42";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    if (increment > 180) {
      canvasContext.fillStyle = `rgba(93,96,112, ${increment3})`;
      canvasContext.fillRect(565, 50, 40, 182);
      if (increment3 <= 1) {
        increment3 += speed2;
      }
    }
    canvasContext.fillStyle = "#edf2f4";
    canvasContext.fillRect(565, 50, 3, increment);
    canvasContext.fillStyle = "#edf2f4";
    canvasContext.fillRect(605, 232 - increment, 3, increment);
    canvasContext.fillStyle = "#edf2f4";
    canvasContext.fillRect(565, 50, increment2, 3);
    canvasContext.fillStyle = "#edf2f4";
    canvasContext.fillRect(608 - increment2, 229, increment2, 3);
    canvasContext.beginPath();
    canvasContext.lineWidth = 6;
    canvasContext.arc(765, 149, 100, 0, (increment / 90) * Math.PI);
    canvasContext.strokeStyle = "#edf2f4";
    canvasContext.fillStyle ="#2b2d42"
    if (increment > 180) {
      canvasContext.fillStyle = `rgba(93,96,112, ${increment3})`;
      if (increment3 <= 1) {
        increment3 += speed2;
      }
    }
    canvasContext.stroke();
    canvasContext.fill();
    canvasContext.beginPath();
    canvasContext.lineWidth = 3;
    canvasContext.arc(765, 149, 60, (increment / -90) * Math.PI, 0);
    canvasContext.strokeStyle = "#edf2f4";
    canvasContext.fillStyle ="#2b2d42"
    canvasContext.fill();
    canvasContext.stroke();
    if (increment2 < 40) {
      increment2 += speed / 4;
    }

    if (increment < 182) {
      increment += speed;
    }
  }
  window.requestAnimationFrame(draw);
  return (
    <section className="sign">
      <canvas id="canvas" width="1400" height="1000"></canvas>
      <span className="prompt">Investigación de operaciones</span>
    </section>
  );
}

export default HomePage;
