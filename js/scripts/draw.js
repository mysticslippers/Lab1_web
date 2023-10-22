function draw(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const step = 50;

    {   //ctx config for parts
        ctx.strokeStyle = "#00BFFF";
        ctx.fillStyle = "#00BFFF";
    }

    {   //left-bottom part
        ctx.beginPath();
        ctx.moveTo(3 * step, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, 6 * step);
        ctx.lineTo(3 * step, 6 * step);
        ctx.lineTo(3 * step, canvas.height / 2);
        ctx.stroke();
        ctx.fill();
    }

    {   //right-bottom part
        ctx.beginPath();
        ctx.moveTo(6 * step, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, 5 * step);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(2 * step, canvas.height / 2);
        ctx.stroke();
        ctx.fill();
    }

    {   //right-top part
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, step, -Math.PI / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, 3 * step);
        ctx.stroke();
        ctx.fill();
    }

    {   //ctx config
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.font = "bold 16px Times New Roman";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
    }

    {   //drawing x axes
        ctx.beginPath();
        ctx.moveTo(50, canvas.height / 2);
        ctx.lineTo(canvas.width - step, canvas.height / 2);
        ctx.moveTo(canvas.width - 60, canvas.height / 2 - 5);
        ctx.lineTo(canvas.width - 40, canvas.height / 2);
        ctx.lineTo(canvas.width - 60, canvas.height / 2 + 5);
        ctx.fillText("X", canvas.width - 40, canvas.height / 2 + 20);
        ctx.stroke();
    }

    {   //drawing y axes
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, step);
        ctx.lineTo(canvas.width / 2, canvas.height - step);
        ctx.moveTo(canvas.width / 2 - 5, 60);
        ctx.lineTo(canvas.width / 2, 40);
        ctx.lineTo(canvas.width / 2 + 5, 60);
        ctx.fillText("Y", canvas.width / 2 - 20, 40);
        ctx.stroke();
    }

    {   //drawing x dashes
        ctx.beginPath();
        ctx.moveTo(2 * step, canvas.height / 2 - 5);
        ctx.lineTo(2 * step, canvas.height / 2 + 5);
        ctx.fillText("-R", 2 * step, canvas.height / 2 - 20);
        ctx.moveTo(3 * step, canvas.height / 2 - 5);
        ctx.lineTo(3 * step, canvas.height / 2 + 5);
        ctx.fillText("-R / 2", 3 * step, canvas.height / 2 - 20);
        ctx.moveTo(5 * step, canvas.height / 2 - 5);
        ctx.lineTo(5 * step, canvas.height / 2 + 5);
        ctx.fillText("R / 2", 5 * step, canvas.height / 2 - 20);
        ctx.moveTo(6 * step, canvas.height / 2 - 5);
        ctx.lineTo(6 * step, canvas.height / 2 + 5);
        ctx.fillText("R", 6 * step, canvas.height / 2 - 20);
        ctx.stroke();
    }

    {   //drawing y dashes
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 5, 2 * step);
        ctx.lineTo(canvas.width / 2 + 5, 2 * step);
        ctx.fillText("R", canvas.width / 2 - 30, 2 * step);
        ctx.moveTo(canvas.width / 2 - 5, 3 * step);
        ctx.lineTo(canvas.width / 2 + 5, 3 * step);
        ctx.fillText("R / 2", canvas.width / 2 - 30, 3 * step);
        ctx.moveTo(canvas.width / 2 - 5, 5 * step);
        ctx.lineTo(canvas.width / 2 + 5, 5 * step);
        ctx.fillText("-R / 2", canvas.width / 2 + 30, 5 * step);
        ctx.moveTo(canvas.width / 2 - 5, 6 * step);
        ctx.lineTo(canvas.width / 2 + 5, 6 * step);
        ctx.fillText("-R", canvas.width / 2 + 30, 6 * step);
        ctx.stroke();
    }
}