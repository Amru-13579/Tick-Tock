var hr;
var mn ;
var sc ;


function setup() {
  createCanvas(800,800);
  // createSprite(400,200,50,50);

  angleMode(DEGREES);
}


function draw() {
  background("black");  
  translate(400,400);
  rotate(-90);
  // drawSprites();

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  stroke("red");
  strokeWeight(7);
  noFill();
  arc(0,0,240,240,0,scAngle);

  mnAngle = map(mn,0,60,0,360);
  stroke("blue");
  strokeWeight(7);
  noFill();
  arc(0,0,220,220,0,mnAngle);

  hrAngle = map(hr % 12 ,0,12,0,360);
  stroke("lightgreen");
  strokeWeight(7);
  noFill();
  arc(0,0,200,200,0,hrAngle);


  // var end = (sc, 0, 60, 0, 360);
  // arc(0,0,200,200,scAngle);


  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("lightgreen");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  point(0,0);
}