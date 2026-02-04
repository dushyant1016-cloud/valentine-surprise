const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let particles = [];

class Particle {
  constructor(x, y, color, power = 1) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 3 + 1;
    this.color = color;
    this.velocity = {
      x: (Math.random() - 0.5) * 6 * power,
      y: (Math.random() - 0.5) * 6 * power
    };
    this.life = 60;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.life--;
    this.draw();
  }
}

function createFirework(x, y, power = 1) {
  const colors = ["#ff004f", "#ff9f1c", "#2ec4b6", "#ffffff", "#ff66cc"];
  for (let i = 0; i < 60; i++) {
    particles.push(
      new Particle(x, y, colors[Math.floor(Math.random() * colors.length)], power)
    );
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.life > 0);
  particles.forEach(p => p.update());
  requestAnimationFrame(animate);
}

animate();

// 🔥 Touch / Click pe firework (LOCK + UNLOCK dono pe kaam karega)
document.addEventListener("click", (e) => {
  createFirework(e.clientX, e.clientY, 1);
});

document.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  createFirework(touch.clientX, touch.clientY, 1);
});

// 💥 UNLOCK PE AUTO BIG BLAST
window.addEventListener("load", () => {
  setTimeout(() => {
    bigBlast();
  }, 800);
});

function bigBlast() {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        2.5
      );
    }, i * 200);
  }
}
