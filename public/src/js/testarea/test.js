export default function(canvas, context){


  canvas.width = 1000;
  canvas.height = 1000;




  context.beginPath();
  context.arc(canvas.width/2, canvas.height/2,
              40, 0, Math.PI*2, true);
  context.stroke();

  context.fillStyle = "green"
  context.fillRect(10,10,100,100);

  context.fillStyle = "red";
  context.fillRect (50, 50, 100, 100);


  let timer = 100;

  setInterval(()=>{
    context.fillStyle = 'yellow';
    context.fillRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    context.fillStyle = 'green';
    context.fillRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    //context.clearRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    context.fillStyle = 'red';
    context.fillRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    //context.clearRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    context.fillStyle = 'grey';
    context.fillRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
    context.clearRect(Math.random()*1000, Math.random()*1000, Math.random()*100, Math.random()*200);
  }, 15);

}
