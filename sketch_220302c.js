let x=400;
let y=200;
let spx =5;
let spy =5;

let sp = 10.0;

let score =0;
let life =3;

let alive =true;


function setup() {
  createCanvas(800, 400);
   
}


function keyPressed() {

  x=400;
  y =200;

  let theta = random(-60, 60)*PI/180.0 ;
  spx =(sp * cos(theta));
  spy =(sp* sin(theta));
  alive=true;
}



function draw() {
  background(0,255,0);
  
  stroke(255);
  strokeWeight(10);
  line( 400,0, 400,400);
  
  noStroke(0);
  
  
  fill(255, 0, 0);
  circle(x, y, 20);
  fill(0, 0, 255);
  rect(width -40, mouseY-50, 20, 100);
  rect(20, y -50, 20, 100);
  x=x+spx;
  y=y+spy;
  if ( x > width -40 && y > mouseY-50 && y < mouseY+50)
  {
    spx=-spx;
    if ( alive)
    {
    score =score + 10;
    }
  }
  if (  x> 800) {
    spx=0;
    spy=0;
    if ( alive) {

      life =life-1;
      alive =false;
    }
  }
  if ( x<40 )
  {
    spx=-spx;
  }
  if ( y<0 || y> 400)
  {
    spy=-spy;
  }

  textSize(18);
  fill(255,0,255);
  text("Score:"+score+ " Life:"+life, 360, 50);
  
  if ( life <=0){
    textSize(50);
    fill(255,0,0);
    text("Game Over",300, 200);  
  }
  
  
}
