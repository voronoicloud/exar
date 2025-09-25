const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
}
window.addEventListener("resize", resize);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const blockSize = 3;     // Pixelblock-Größe
  const border = 100;      // Höhe des Streubereichs
  const randomness = 0.8;  // Unregelmäßigkeit

  for (let y = 0; y < canvas.height; y += blockSize) {
    for (let x = 0; x < canvas.width; x += blockSize) {
      const dist = canvas.height - y; // Abstand vom unteren Rand
      const chance = Math.max(0, 1 - dist / border);

      if (Math.random() < chance * (0.5 + Math.random() * randomness)) {
        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, blockSize, blockSize);
      }
    }
  }
}

resize();

// alle 3 Sekunden neu zeichnen
setInterval(draw, 1000);
