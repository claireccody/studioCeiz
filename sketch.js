var rez = 20;
var gray = 10;

 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25,12,93);
  for (var x = 0; x<width; x+=rez){
    gray++;
    for (var y = 0; y<height; y+=rez){
      noFill();
      strokeWeight(0.2);
      stroke(gray+y/rez);
      square(x/*+rez/2*/, y/*+rez/2*/, rez-4);
      square(x, y, rez-8);
      square(x, y, rez-12);}}
        
        frameRate(15);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(25, 12, 93);
  grid(0);
  grid(1);
  grid(2);
}


function draw() {
  if (frameCount > 3 && frameCount%100 > 3){
      noStroke();
  fill(25,12, 93, 3);
  rect(0, 0, width, height);
  }
  else{
  grid(frameCount%100);}
}

function grid(it){
  it++;
    gray=0;  
    for(var x = 0; x<width; x+=rez){
    gray++;
    for (var y = 0; y<height; y+=rez){
      fill(255-gray-rez, 30);
      strokeWeight(0.2);
      stroke(gray+y/rez);
      square(x/*+rez/2*/, y/*+rez/2*/, rez-(it*4));
}}
}