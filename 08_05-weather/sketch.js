/*

New York:
http://api.openweathermap.org/data/2.5/weather?q=New-York,us&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0

Manhattan: {"_id":4274994,"name":"Manhattan","country":"US","coord":{"lon":-96.571671,"lat":39.183609}}
http://api.openweathermap.org/data/2.5/weather?q=Manhattan,us&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0

Milpitas:  {"_id":5373327,"name":"Milpitas","country":"US","coord":{"lon":-121.906616,"lat":37.428268}}
http://api.openweathermap.org/data/2.5/weather?q=Milpitas,us&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0

El Cerrito: {"_id":5345624,"name":"El Cerrito","country":"US","coord":{"lon":-117.522827,"lat":33.840569}}
http://api.openweathermap.org/data/2.5/weather?q=El-Cerrito,us&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0

Poteau: {"_id":4548363,"name":"Poteau","country":"US","coord":{"lon":-94.623558,"lat":35.053711}}
http://api.openweathermap.org/data/2.5/weather?q=Poteau,us&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0
*/

var URL_elCerrito = "http://api.openweathermap.org/data/2.5/weather?q=El-Cerrito,us&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0";
var elCerritoWeather;
var windScalar;

// vars for the rotating windSock
var r;
// Angle and angular velocity, accleration
var theta;
var theta_vel;
var theta_acc;


function setup() {
  createCanvas(1000,600);
  loadJSON(URL_elCerrito, gotData);
  
  // Initialize all values
  r         = 0;
  theta     = 0;
  theta_vel = 0;
  theta_acc = 0.0001;
  
  windScalar = 25;
  
  println("Data from http://api.openweathermap.org/data/2.5/weather?q=El-Cerrito,us&units=imperial");

}

function gotData(data){
  //println(data);
  elCerritoWeather = data;
  //println(elCerritoWeather);
}

function draw() {
  background(255);
  //loadJSON(URL_elCerrito, gotData);
  
  if (elCerritoWeather){
    //draw temp
    fill(0);
    textSize(35);
    text("Temp in El Cerrito = " + elCerritoWeather.main.temp + " f", width*.1, height*.1);
    //draw windspeed
    
    textSize(14);
    noStroke();
    text("Wind Speed = " + elCerritoWeather.wind.speed + " knots", width*.13, height*.17);
    text("Wind Direction = " + elCerritoWeather.wind.deg + " degrees", width*.13, height*.2);
    
    
    //draw wind direction
    push();
    // translate to the center of the windsock
    translate(width*.3,height*.35);
    
    
    // create the DISTANCE from the central marker as a function of wind velocity
    r = (elCerritoWeather.wind.speed) * windScalar;
    // Convert polar to cartesian
    theta = radians(elCerritoWeather.wind.deg-90); // subtract 90degrees to align compass with radians
    var x = r * cos(theta);
    var y = r * sin(theta);
    
    //draw wind vector between central point and windsock
    stroke(0);
    line(0,0,x,y);
    //draw the windsock
    ellipse(0,0,50,50);
    
    // draw wind direction with ellipse of wind relative to center circle
    fill(0,255,0,100);
    ellipse(x,y,30,30);
    triangle(x,y,x,y-10,x-10,y);
    
    //draw windspeed
    fill(0);
    noStroke();
    textSize(13);
    text("Wind Speed = " + elCerritoWeather.wind.speed + " knots", x+22, y-25);
    text("Wind Direction = " + elCerritoWeather.wind.deg + " degrees", x+22, y-10);
    
    pop();
    
    /*
    println("Radians = " + theta);
    println("Radius = " + r);
    println("X = " + x);
    println("Y = " + y);
    */
  }
}