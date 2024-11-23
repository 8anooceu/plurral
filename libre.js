// Fundo que muda com o movimento do mouse
const body = document.body;

document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const color1 = `rgb(${Math.floor(x * 255)}, ${Math.floor(y * 255)}, 150)`;
    const color2 = `rgb(${Math.floor(y * 255)}, 150, ${Math.floor(x * 255)})`;
    body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
});

// Configuração do Confete
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

class ConfettiParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 7 + 5;
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
        this.speedY = Math.random() * -2 - 1;
        this.speedX = (Math.random() - 0.5) * 2;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.speedY += 0.1;

        if (this.y > canvas.height) {
            this.y = Math.random() * canvas.height * -1;
            this.x = Math.random() * canvas.width;
            this.speedY = Math.random() * -2 - 1;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

for (let i = 0; i < 150; i++) {
    confetti.push(
        new ConfettiParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
        )
    );
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

animate();
