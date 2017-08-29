var PAGE_TITLE = "p5_gungfu-07_15_slider";

/**jstephens 2016_03 - from Nature of Code examples - shiffman**
TODO:

*/
////////////
//SET GLOBALS
var INNER_WIDTH   = window.innerWidth;
var INNER_HEIGHT  = window.innerHeight;
var CANVAS;
var BGND_COLOR    = 127;
var BGND_IS_ON    = true;

var sliders       = [];
var TOTAL_SLIDERS = 6;

var fillColor;
var strokeColor;
var diameterX;
var diameterY;


function setup(){
  runBasicSetup(); 
  setSliders();
}

function draw(){
  if (BGND_IS_ON){
    displayPageTitle();
  }
  //extract the slider values
  for (var i = 0; i < sliders.length; i++){
      BGND_COLOR  = sliders[0].value();
      var h       = sliders[1].value();
      var s       = sliders[2].value();
      var b       = sliders[3].value();
      var alpha   = sliders[4].value();
      fillColor   = color(h,s,b,alpha);
      strokeColor = color(h,s,b,255);
      diameterX   = sliders[5].value();
      diameterY   = sliders[5].value();
  }
  //colorMode(HSB, 255); // hue saturation brightness
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(2);
  ellipse(width/2, height/2, diameterX, diameterY);
  
  //sliders[5].value(map(mouseX,0,width,-width*.5, width*.5));
}

function setSliders(){
  for (var i = 0; i < TOTAL_SLIDERS; i++){
    if (i === 0) {
      sliders[i] = createSlider(0, 255, 20);
      sliders[i].position(width * .83, (height *.1)*(i+1));
      //sliders[i].style('width', '150px');
    //hue
    } else if (i === 1) {
      sliders[i] = createSlider(0, 255, random(255));
      sliders[i].position(width * .83, (height *.1)*(i+1));
    //saturation and brightness
    } else if ((i === 2) || (i === 3)) {
      sliders[i] = createSlider(0, 255, 255);
      sliders[i].position(width * .83, (height *.1)*(i+1));
    //alpha 
    } else if (i === 4) {
      sliders[i] = createSlider(0, 255, 127);  //set initial alpha
      sliders[i].position(width * .83, (height *.1)*(i+1));
    //diameterX and diameterY
    } else if (i === 5) {
      sliders[i] = createSlider(-width*.4, width*.4, 200);  //set initial alpha
      sliders[i].position(width * .83, (height *.1)*(i+1));  
    } else {
      sliders[i] = createSlider(0, 255, random(255));
      //sliders[i].style('width', '80px');
      //sliders[i].size(90);
      sliders[i].position(width * .83, (height *.1)*(i+1));
    }
  }
}

function mousePressed(){
  //reset the sliders 
  //updateSliders();
  
}

////////////////////////////////////////////////////
////SETUP and CONFIG
////////////////////////////////////////////////////
function runBasicSetup() {
  CANVAS = createCanvas(INNER_WIDTH, INNER_HEIGHT);
  CANVAS.position(0, 0);
  colorMode(HSB, 255);
  smooth();
  displayPageTitle();
}

function displayPageTitle(){
  background(BGND_COLOR);      //clear CANVAS before draw
  //display PAGE_TITLE in CANVAS
  strokeWeight(0);
  fill(255-BGND_COLOR);
  textSize(18);
  text(PAGE_TITLE, width*.01, 40);

  
  var LESSON = "\
  /*\n\
  //////SLIDERS//////\n\
  in setup() \n\
    slider = createSlider(min, max, initial);\n\
    slider.position(x,y);\n\
    slider.style('width', '80px');\n\
  in draw() \n\
    var val = slider.value();\n\
    background(val);\n\
  style tricks http://danielstern.ca/range.css/?ref=css-tricks#/\n\
  */\n ";

  textSize(14);
  text(LESSON, width*.01, height*.6);
}

function updateSliders(){
  for (var i = 0; i < TOTAL_SLIDERS; i++){
    if (i === 0) {
      sliders[i].value(20);
    } else {
      sliders[i].value(random(255));
    }
  }
}
////END CONFIG
////////////////////////////////////////////////////






