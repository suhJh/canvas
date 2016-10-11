<<<<<<< HEAD
export default function (canvas, context) {
=======
export default function (canvas, context){
>>>>>>> origin/master
  canvas.width = 1000;
  canvas.height = 1000;

  context.beginPath();
<<<<<<< HEAD
  context.arc(canvas.width / 2, canvas.height / 2,
              40, 0, Math.PI * 2, true);
=======
  context.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2, true);
>>>>>>> origin/master
  context.stroke();

  context.fillStyle = 'green';
  context.fillRect(10, 10, 100, 100);

  context.fillStyle = 'red';
<<<<<<< HEAD
  context.fillRect (50, 50, 100, 100);

=======
  context.fillRect(50, 50, 100, 100);


  const layer = (() => {
    const w = 400;
    const h = 400;
    const posX = (canvas.width / 2) - (w / 2);
    const posY = (canvas.height / 2) - (h / 2);
    return { w, h, posX, posY };
  })();

>>>>>>> origin/master
  setInterval(() => {
    context.fillStyle = 'yellow';
    context.fillRect(Math.random() * 1000, Math.random() * 1000, Math.random() * 100, Math.random() * 200);
    context.fillStyle = 'green';
    context.fillRect(Math.random() * 1000, Math.random() * 1000, Math.random() * 100, Math.random() * 200);
<<<<<<< HEAD
    //  context.clearRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    context.fillStyle = 'red';
    context.fillRect(Math.random() * 1000, Math.random() * 1000, Math.random() * 100, Math.random() * 200);
    //  context.clearRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    context.fillStyle = 'grey';
    context.fillRect(Math.random() * 1000, Math.random() * 1000, Math.random() * 100, Math.random() * 200);
    context.clearRect(Math.random() * 1000, Math.random() * 1000, Math.random() * 100, Math.random() * 200);
=======
    //context.clearRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    context.fillStyle = 'red';
    context.fillRect(Math.random() * 1000,
     Math.random() * 1000,
     Math.random() * 100,
     Math.random() * 200);
    //context.clearRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    context.fillStyle = 'grey';
    context.fillRect(Math.random() * 1000, Math.random() * 1000, Math.random() * 100, Math.random() * 200);
    context.clearRect(Math.random() * 1000, Math.random() * 1000, Math.random() * 100, Math.random() * 200);

    context.globalCompositeOperation = 'source-over';
    context.filltext = ('HELLO CANVAS', 400, 400);
    context.font = '38pt Arial';
    context.fillStyle = 'white';
    context.fillRect(layer.posX, layer.posY, layer.w, layer.h);
>>>>>>> origin/master
  }, 15);

}
