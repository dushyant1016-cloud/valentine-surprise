const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = [];

function heartShape(t) {
  return {
    x: 16 * Math.pow(Math.sin(t), 3),
    y: -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
  };
}

function firework(x, y) {
  for (let i = 0; i < 120; i++) {
    const t = Math.random() * Math.PI * 2;
    const p = heartShape(t);
    particles.push({
      x,
      y,
      vx: p.x * 0.35,
      vy: p.y * 0.35,
      life: 80,
      color: `hsl(${Math.random() * 360},100%,70%)`
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
function heartBurst(x, y) {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = x + (Math.random() * 60 - 30) + "px";
    heart.style.top = y + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

document.addEventListener("click", e => {
  heartBurst(e.clientX, e.clientY);
});

document.addEventListener("touchstart", e => {
  const t = e.touches[0];
  heartBurst(t.clientX, t.clientY);
});
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 10;
    ctx.fill();

    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}
animate();

window.addEventListener("click", e => {
  firework(e.clientX, e.clientY);
});

window.addEventListener("touchstart", e => {
  e.preventDefault();
  const t = e.touches[0];
  firework(t.clientX, t.clientY);
}, { passive: false });
