/* j.stephens 2016_07
p5.js tutorials with shiffman
2D arrays

*/
var INNER_WIDTH = window.innerWidth;
var INNER_HEIGHT = window.innerHeight;
var dirIsForward = true;
var colorCase    = 2;

var cols = 20;
var rows = 10;

function setup(){
  createCanvas(INNER_WIDTH,INNER_HEIGHT);
}

function draw(){
  background(51);
  
  for (var i = 0; i< cols;i++){
    for (var j = 0; j< rows;j++){
      var x = i * (INNER_WIDTH/cols);
      var y = j * (INNER_HEIGHT/rows);
      switch(colorCase){
        case 0: 
          stroke((j/rows)*255);
          fill(255-(i/cols)*255);
          break;
        case 1: 
          stroke(255-(j/rows)*255);
          fill((i/cols)*255);
          break;
        case 2: 
          stroke(255-(j/rows)*255);
          fill(255-(i/cols)*255);
          break;
        case 3: 
          stroke((j/rows)*255);
          fill((i/cols)*255);
          break;
        case 4: 
          stroke(random(255));
          fill(random(255));
          break;
      
        default:
        stroke(random(255));
        fill(random(255));
      }
      rect(x,y,INNER_WIDTH/cols, INNER_HEIGHT/rows);
  }  
}
}

function mousePressed(){
  cols  = floor(random(2,60));
  rows  = floor(random(2,30));
  colorCase = floor(random(10));
  /*
  for (var i = 0; i< cols;i++){
    for (var j = 0; j< rows;j++){
      var x = i * (INNER_WIDTH/cols);
      var y = j * (INNER_HEIGHT/rows);
      stroke((j/rows)*255);
      fill((i/cols)*255);
      rect(x,y,INNER_WIDTH/cols, INNER_HEIGHT/rows);
    }  
  }
  */
}