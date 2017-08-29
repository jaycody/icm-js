/* j.stephens 2016_07
p5.js tutorials with shiffman
2D lookup table

*/
var INNER_WIDTH = window.innerWidth;
var INNER_HEIGHT = window.innerHeight;
var dirIsForward = true;
var colorCase    = 2;

var cols = 20;
var rows = 10;
var colorLookup = [];

function setup(){
  createCanvas(INNER_WIDTH,INNER_HEIGHT);
  //build an initial lookup table
  createLookupTable();
}

function draw(){
  background(51);
  
  for (var i = 0; i< cols;i++){
    for (var j = 0; j< rows;j++){
      var x = i * (INNER_WIDTH/cols);
      var y = j * (INNER_HEIGHT/rows);
    
      stroke(colorLookup[i][j].x);
      fill(colorLookup[i][j].y);
      
      rect(x,y,INNER_WIDTH/cols, INNER_HEIGHT/rows);
    }  
  }
}

function mousePressed(){
  cols  = floor(random(2,60));
  rows  = floor(random(2,30));
  //rebuild a newlookup table using the update globals for cols and rows
  createLookupTable();
}

function createLookupTable(){  
  var whichLookup = floor(random(6));
  //console.log(whichLookup);
  for (var i = 0; i< cols;i++){
    colorLookup[i]=[];
    for (var j = 0; j< rows;j++){
      switch (whichLookup) {
        case 0:
          var lookupVector  = new p5.Vector((j/rows)*255,(i/cols)*255);
          colorLookup[i][j] = lookupVector;
          break;
        case 1:
          var lookupVector  = new p5.Vector(255-(j/rows)*255,255-(i/cols)*255);
          colorLookup[i][j] = lookupVector;
          break;
        case 2:
          var lookupVector  = new p5.Vector(255-(j/rows)*255,(i/cols)*255);
          colorLookup[i][j] = lookupVector;
          break;
        case 3:
          var lookupVector  = new p5.Vector((j/rows)*255,255-(i/cols)*255);
          colorLookup[i][j] = lookupVector;
          break;
        default:
          var lookupVector  = new p5.Vector(random(255),random(255));
          colorLookup[i][j] = lookupVector;
            
      }
    }
  }
}
/*
stroke((j/rows)*255);
fill(255-(i/cols)*255);

stroke(255-(j/rows)*255);
fill((i/cols)*255);

stroke(255-(j/rows)*255);
fill(255-(i/cols)*255);

stroke((j/rows)*255);
fill((i/cols)*255);
*/