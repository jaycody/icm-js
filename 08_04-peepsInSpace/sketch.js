/*5p.js gongfu
  - load JSON data from URL
  - asynchronous callbacks
  - count people in space
  - give it the URL and give it the callback function
  - !!!! use "jsonp" if the loadJSON doesn't work !!!!
  - use a boolean TEST as a way to wait for the DATA to be fetched
*/

var URL = "http://api.open-notify.org/astros.json";
var URL_isisLocation = "http://api.open-notify.org/iss-now.json";
var spaceData;
var spaceLocation;
var peepsInSpace;
var randomSeedNum;
var ellipseVelocityX;
var ellipseVelocityY;
var ellipseWidth;
var ellipseX;
var ellipseAccelerationX;
var noiseScale;
var noiseVal;

function setup() {
  createCanvas(1200,600);
  loadJSON(URL, gotData, "jsonp");
  loadJSON(URL_isisLocation, isisLocation, "jsonp");
  
  randomSeedNum = random(width);

  ellipseVelocityX      = 0;
  ellipseAccelerationX  = .03;
  ellipseWidth          = 16;

  println("Astronaut Data from " + URL);
  println("ISS Location Data from " + URL_isisLocation);
}

function isisLocation(location){
  //println(location);
  spaceLocation = location;
}

function gotData(data) {
  //println(data);
  //println("Data from " + URL);
  spaceData = data;
}

function draw() {
  loadJSON(URL_isisLocation, isisLocation, "jsonp");
  background(0);
  
  fill(255,200,250);
  textSize(22);
  text("Number of People on the International Space Station:", width*.01, 50);
  
  if (spaceLocation){
    fill(255);
    textSize(18);
    text("ISS latitude    = " + spaceLocation.iss_position.latitude, width*.1, height*.2);
    text("ISS longitude = " + spaceLocation.iss_position.longitude, width*.1, height*.24);
    textSize(14);
    text("timestamp: " + spaceLocation.timestamp, width*.4, height*.8);
    
  }
  
  if (spaceData){
    fill(255);
    textSize(90);
    text(spaceData.number, width*.5, height*.15);
    
    
    
    // loop through total number of peeps in space
    randomSeed(randomSeedNum);
    for (var i = 0; i < spaceData.number; i++) {
      // set the positions
      var nameYScalar = 25;
      var nameYAdjuster = .6;
      
      // calc ellipseX
      var ellipseX      = random(width*.02,width*.1);
      var ellipseXNew   = ellipseX + ellipseVelocityX;
      ellipseVelocityX  += ellipseAccelerationX;
      
      // create boundaries como ASTEROIDS
      if (ellipseXNew > width*.9) {
        ellipseVelocityX = -ellipseX;
        //print("noiseVal = " + noiseVal);
        //print("ellipseVelocityX = " + ellipseVelocityX);
      }
      //print("ellipseVelocityX = " + ellipseVelocityX);
      
      
      
      
      var ellipseY  = random(height*.3,height*.35);
      
      var nameX     = width*.03 +(i * 120);
      
      //calc nameY
      // First 3 names decending, then remaining names ascending on y axis
      if (i < spaceData.people.length/2){
        var nameY     = (height*nameYAdjuster + (i * nameYScalar));
      } else if (i >= spaceData.people.length/2){
        var nameY     = (height*.5 + ((spaceData.people.length-i)*nameYScalar));
      }
      //println (nameY);
      
      
      // draw each astronaut as a circle
      fill(255);
      stroke(0);
      ellipse(ellipseXNew, ellipseY, ellipseWidth, 16);
      
      
      //write each astronaut's name
      textSize(15);
      text(spaceData.people[i].name, nameX, nameY);
      //text(spaceData.people[i].name, ellipseXNew+nameX, nameY);
      
      //println(spaceData.people[i].name.length);
      //draw line between Astro's name and Astro's circle
      stroke(0,255,0);
      
      line (ellipseXNew, ellipseY, nameX+((spaceData.people[i].name.length)/2)*6.5, nameY-20);
      
      
      //line (ellipseXNew, ellipseY, nameX+((spaceData.people[i].name.length)/2)*6.5+ellipseXNew, nameY-20);
      noStroke();
    }
  }
}
