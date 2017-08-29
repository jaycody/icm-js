var PAGE_TITLE = "p5_gungfu-07_15_slider_object";

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

var fillColor;
var strokeColor;
var diameterX;
var diameterY;

//controls as an array
var controls      = [];
var CONTROL_COUNT = 6;
var CONTROL_NUM   = 0;  // for adding to the controls list later
var controllerNames = ['Background', 'Hue', 'Saturation', 'Brightness', 'Alpha', 'Diameter'];

function setup(){
  runBasicSetup(); 
  createControls();
}

function draw(){
  if (BGND_IS_ON){
    displayPageTitle();
  }
  getControllerValues();
    
  fill(fillColor);      //colorMode(HSB, 255); // hue saturation brightness
  stroke(strokeColor);
  strokeWeight(2);
  ellipse(width/2, height/2, diameterX, diameterY);
}

function getControllerValues(){
  //extract the slider values
  for (var i = 0; i < controls.length; i++){
    controls[i].displayName();
    BGND_COLOR  = controls[0].getValue();
    //BGND_COLOR  = controls[0].slider.value();
    var h       = controls[1].getValue();
    var s       = controls[2].getValue();
    var b       = controls[3].getValue();
    var alpha   = controls[4].getValue();
    fillColor   = color(h,s,b,alpha);
    strokeColor = color(h,s,b,255);
    diameterX   = controls[5].getValue();
    diameterY   = controls[5].getValue();
//DEBUG
    //println(controls[i].asPercentage());
    //println(controls[i].name);
    //controls[i].setValue(240);
  }
}

function createControls(){
  if (width < 1000) {
    var sliderLength = 150;
  } else {
    var sliderLength = 220;
  }
  for (var i = 0; i < CONTROL_COUNT; i++){
    if (controllerNames[i] != null){
      if (i === 0) {
        controls[i] = new Control(controllerNames[i], 0, 255, 20, i, sliderLength);
      //hue
      } else if (i === 1) {
        controls[i] = new Control(controllerNames[i], 0, 255, random(255), i, sliderLength);
      //saturation and brightness
      } else if ((i === 2) || (i === 3)) {
        controls[i] = new Control(controllerNames[i], 0, 255, 255, i, sliderLength);
      //alpha 
      } else if (i === 4) {
        controls[i] = new Control(controllerNames[i], 0, 255, 127, i, sliderLength);  //set initial alpha
      //diameterX and diameterY
      } else if (i === 5) {
        controls[i] = new Control(controllerNames[i], -width*.4, width*.4, width*.4, i, sliderLength);
      // if index is not 0-5, then create generic controller
      } else {
        controls[i] = new Control(controllerNames[i], 0, 255, random(255), i, sliderLength);
      }
    // if no more names are in the controllerNames list, then use the index number as the name
    // i+1 here so that the displayed generic name of this controller matches the number of controllers
    } else {
      controls[i] = new Control('control: ' + (i+1), 0, 255, random(255), i, sliderLength); 
    }
  }
}

function mousePressed(){
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
  strokeWeight(0);
  fill(255-BGND_COLOR);
  textSize(18);
  text(PAGE_TITLE, width*.01, 40);

  var LESSON = "\
  /*\n\
  //////CONTROLLER OBJECTS//////\n\
  in globals:\n\
    // controls as an array\n\
    int CONTROL_COUNT = 11;\n\
    Control[] controls = new Control[CONTROL_COUNT];\n\
    int CONTROL_NUM = 0;  // for adding to the controls list\n\
  in controller object:\n\
    // add me to the controls list\n\
    controls[CONTROL_NUM++] = this;\n\
    // add me to the controls map\n\
    controlMap.put(name, this);\n\
  in setup() \n\
    slider = createSlider(min, max, initial);\n\
    slider.position(x,y);\n\
    slider.style('width', '80px');\n\
  in draw() \n\
    var val = slider.value();\n\
    background(val);\n\
  style tricks http://danielstern.ca/range.css/?ref=css-tricks#/\n\
  see owen's work on rotadeva\n\
  https://github.com/VideoAlchemy/RotaDeva/blob/master/RotaDeva_v1/RotaDeva_v1.pde\n\
  https://github.com/VideoAlchemy/RotaDeva/blob/master/RotaDeva_v1/Controls.pde\n\
  */\n ";

  textSize(12);
  text(LESSON, width*.01, height*.6);
}

////END CONFIG
////////////////////////////////////////////////////






