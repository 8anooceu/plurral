const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiArray = [];
const confettiColors = ["#ff6f61", "#ffb74d", "#4db6ac", "#64b5f6", "#ba68c8"];
const confettiCount = 200;

class Confetti {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 7 + 3;
        this.speedY = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function createConfetti() {
    for (let i = 0; i < confettiCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confettiArray.push(new Confetti(x, y, color));
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiArray.forEach((confetti) => {
        confetti.update();
        confetti.draw();
    });

    requestAnimationFrame(animateConfetti);
}

createConfetti();
animateConfetti();
