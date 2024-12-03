const { createCanvas } = require('canvas');

function generateCaptcha() {
    const text = Math.random().toString(36).substring(2, 8);
    const width = 300;
    const height = 150;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, width, height);

    const letters = text.split('');
    const startX = 20;
    const maxFontSize = 50;
    const minFontSize = 30;
    let currentX = startX;

    letters.forEach((char) => {
        const fontSize = Math.floor(Math.random() * (maxFontSize - minFontSize)) + minFontSize;
        ctx.font = `bold ${fontSize}px Arial`;

        // 글자 크기 측정
        const textWidth = ctx.measureText(char).width;
        if (currentX + textWidth > width - 20) {
            return;
        }

        ctx.fillStyle = `rgb(${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)})`;

        const angle = (Math.random() - 0.5) * 0.4;
        const scaleX = 1 + (Math.random() - 0.5) * 0.3;
        const scaleY = 1 + (Math.random() - 0.5) * 0.3;

        ctx.save();
        ctx.translate(currentX, height / 2);
        ctx.rotate(angle);
        ctx.scale(scaleX, scaleY);
        ctx.textBaseline = 'middle';
        ctx.fillText(char, 0, 0);
        ctx.restore();

        currentX += textWidth + Math.random() * 10 + 10;
    });

    for (let i = 0; i < 400; i++) {
        ctx.beginPath();
        ctx.arc(
            Math.random() * width,
            Math.random() * height,
            Math.random() * 3 + 1,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`;
        ctx.fill();
    }

    for (let i = 0; i < 15; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * width, Math.random() * height);
        ctx.lineTo(Math.random() * width, Math.random() * height);
        ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`;
        ctx.lineWidth = Math.random() * 3 + 1;
        ctx.stroke();
    }

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * width, Math.random() * height);
        ctx.bezierCurveTo(
            Math.random() * width, Math.random() * height,
            Math.random() * width, Math.random() * height,
            Math.random() * width, Math.random() * height
        );
        ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.4)`;
        ctx.lineWidth = Math.random() * 2 + 1;
        ctx.stroke();
    }

    return { image: canvas.toBuffer(), text };
}

module.exports = { generateCaptcha }