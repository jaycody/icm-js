/*5p.js gongfu
  - load JSON from file
  - list archeytpes
  - USE CORPORA to grab interjections
  - loadJSON
  - create a preload function
  https://github.com/dariusk/corpora/tree/master/data
*/
  
var data;
var interjections;
var numOfInterjections;

function preload() {
  data = loadJSON("interjections.json");  
}

function setup() {
  createCanvas(1200,680);
  background(0);
  
  numOfInterjections = data.interjections.length;
}

function draw() {
  background(0);
  
  //draw square at mouseX mouseY
  fill(0,70,150);
  rect(mouseX-30, mouseY, 123, 23);
  
  //draw clean area to overright rect
  fill(0);
  rect((width*.02)-10,35,550,50 );
  
  //draw heading
  fill(0,255,250);
  textSize(22);
  text("INTERJECTIONS!!", width*.02, 50);
  
  //draw the list of character types
  fill(255);
  textSize(10);
  if (data){
    
    for (i = 0; i<numOfInterjections; i++){
      interjections = data.interjections[i];
      textSize(10);
      text(interjections, random(width), height/numOfInterjections+(i*(height/numOfInterjections)));
      if (mouseY > height/numOfInterjections+(i*(height/numOfInterjections)) && (mouseY < (height/numOfInterjections+(i*(height/numOfInterjections)))+(height/numOfInterjections))){
        noCursor();
        textSize(50);
        text(interjections, mouseX-30, height/numOfInterjections+(i*(height/numOfInterjections)));
      }
    }
  }
}