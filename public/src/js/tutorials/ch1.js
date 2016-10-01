
//import $ from 'jquery';//error detect
export default function(canvas, context){
  context.font = '38pt Arial';
  context.fillStyle = 'cornflowerblue';
  context.strokeStyle = 'red';

  context.fillText("Hello Canvas", canvas.width/4 - 150,
                                   canvas.height/4 + 15);

  context.strokeText("Hello Canvas", canvas.width/2 - 150,
                                     canvas.height/2 + 15 );
}
