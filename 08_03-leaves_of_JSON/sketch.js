/*5p.js gongfu
  - load JSON from file
  - list archeytpes
  - USE CORPORA to grab venues 
  - loadJSON
  - create a preload function
  https://github.com/dariusk/corpora/tree/master/data
*/
  
var data;
var venues;
var venueType;
var venueName;
var numOfCategories;
var numOfVenuesPerVenueCategory;

function preload() {
  data = loadJSON("venues.json");  
}

function setup() {
  noCanvas();
  //createCanvas(1200,680);
  //background(0);
  
  numOfCategories = data.categories.length;
  
  createElement('h1', "Leaves of JSON");
  createElement('h4', "      an homage to W.Whitman");
  
  for (i=0; i<numOfCategories; i++){
    venueType = data.categories[i].name;
    createElement('h2', venueType);
    
    if (data.categories[i].categories){
      numOfVenuesPerVenueCategory = data.categories[i].categories.length
      if (numOfVenuesPerVenueCategory > 0) {
        for (j=0; j<numOfVenuesPerVenueCategory; j++){
          venueName = data.categories[i].categories[j].name;
          createDiv(venueName);
        }
      }
  
    }
  }
}

/*
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
  text("Venue categories:" + numOfCategories + " total", width*.02, 50);
  
  //draw the list of character types
  fill(255);
  textSize(10);
  if (data){
    
    for (i = 0; i<numOfCategories; i++){
      venues = data.categories[i].name;
      textSize(10);
      text(venues, random(width), height/numOfCategories+(i*(height/numOfCategories)));
      if (mouseY > height/numOfCategories+(i*(height/numOfCategories)) && (mouseY < (height/numOfCategories+(i*(height/numOfCategories)))+(height/numOfCategories))){
        noCursor();
        textSize(30);
        text(venues, mouseX-30, height/numOfCategories+(i*(height/numOfCategories)));
      }
    }
  }
}
*/