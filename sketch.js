function setup() {
  createCanvas(800,600);
  background(255);
}

function draw() {
  colorMode(RGB)
  
  //neck
  stroke(100);
  strokeWeight(3);
  line(width/2,380,width/2,250);
  line(width/2+12,380,width/2+12,250);
  line(width/2+24,380,width/2+24,250);
  
  //antenne
  stroke(100);
  line(width/2-25,190,width/2+12,250);
  line(width/2+60,120,width/2+12,250);
  line(width/2+100,270,width/2+12,250);
  
  //body
  noStroke();
  fill(110);
  ellipse(width/2,510,80,80);
  fill(60);
  rectMode(CENTER);
  rect(width/2,440,100,150);
  fill(100,1,0);
  rect(width/2,390,100,8);
  
  //face
  fill(200);
  ellipse(width/2+12,250,100,100);
  fill(255);
  ellipse(width/2+27,245,33,33);
  fill(100,1,0);
  ellipse(width/2+27,245,6,6);
  fill(100);
  ellipse(width/2+38,220,8,8);
  ellipse(width/2+45,266,6,6);
  ellipse(width/2-1,235,10,10);
}  