/*5p.js gongfu
  - load JSON from HOMEMADE JSON file
  - loadJSON
  - create a preload function
*/
  
var me;

// force data is loaded before using the data
function preload() {
  me = loadJSON("jason.json");  
}

function setup() {
  createCanvas(1200,900);
  background(0);
  
}

function draw() {
  
  fill(0,255,200);
  rect(mouseX, mouseY, 23, 23);
  
  fill(0);
  rect((width*.3)-10,65,350,200 );
  rect((width*.01)-10,10,250,300);
  
  fill(0,255,250);
  textSize(32);
  text("my json:", width*.3, 100);
  
  //list attributes
  textSize(15);
  text("name = " + me.name + ", age =" + me.age, width*.3, 150);
  
  //////////////////////
  //current lesson
  fill(255);
  textSize(15);
  text("Much learnings:", width*.01,30);
  
  textSize(12);
  text("- load JSON from file 'jason.json'", (width*.01)+10,50);
  
}