// Configuração do Confete
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

// Cria partículas de confete
class ConfettiParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 7 + 5; // Tamanhos maiores
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
        this.speedY = Math.random() * -2 - 2; // Velocidade vertical mais lenta
        this.speedX = (Math.random() - 0.5) * 2; // Velocidade horizontal mais suave
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.speedY += 0.1; // Gravidade leve

        // Reinicia confetes que saem da tela
        if (this.y > canvas.height) {
            this.y = Math.random() * canvas.height * -1;
            this.x = Math.random() * canvas.width;
            this.speedY = Math.random() * -2 - 2;
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

// Inicializa confetes
for (let i = 0; i < 150; i++) { // Menos confetes para não ficar sobrecarregado
    confetti.push(
        new ConfettiParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
        )
    );
}

// Atualiza e desenha os confetes
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

animate();
