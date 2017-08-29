/*5p.js gongfu
  - load JSON from file
  - list archeytpes
  - USE CORPORA to grab archetypes for characters.json
  - loadJSON
  - create a preload function
  https://github.com/dariusk/corpora/tree/master/data
*/
  
var data;
var characterArchetypes;

function preload() {
  data = loadJSON("character.json");  
}

function setup() {
  createCanvas(1200,680);
  background(0);
}

function draw() {
  background(0);
  
  //draw square at mouseX mouseY
  fill(0,70,150);
  rect(mouseX, mouseY, 23, 23);
  
  //draw clean area to overright rect
  fill(0);
  rect((width*.02)-10,35,550,50 );
  
  //draw heading
  fill(0,255,250);
  textSize(22);
  text("Character Archetypes:", width*.02, 50);
  
  //draw the list of character types
  fill(255);
  textSize(15);
  if (data){
    for (i = 0; i<data.characters.length; i++){
      characterArchetypes = data.characters[i].name;
      text(characterArchetypes, /*random(width)*/ width*.3, height/data.characters.length+(i*(height/data.characters.length)));
      text(characterArchetypes, random(width), height/data.characters.length+(i*(height/data.characters.length)));
     }
   }
  
  
  
  
  
}