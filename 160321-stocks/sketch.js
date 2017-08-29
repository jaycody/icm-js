var INNER_WIDTH   = window.innerWidth;
var INNER_HEIGHT  = window.innerHeight;
var canvas;
var pageTitle = "hci-code_challenge-20160321-stock_market_wizard";
var pressedIndex = 0;
var widthScale;
var heightScale;

var stocksList = [];

function setup() {
  canvas = createCanvas(INNER_WIDTH, INNER_HEIGHT);  
  background(0);
  textSize(15);
  declareCompanies();
  widthScale = INNER_WIDTH/100;//
  //listStockPrices();
  
  
}

function draw() {
  //background(127);
  
  
}

function listStockPrices (){
  background(0);
  var lowest        = 10000000;
  var lowestIndex   = 0;
  var highest       = 0;
  var highestIndex  = 0;
  var x;
  var y;

  for (var i = 0; i < stocksList[pressedIndex].length; i ++){
    // determine grid
    //var lengthCurrent = stocksList[pressedIndex].length;
    x = floor(i % widthScale);
    y = floor(i/widthScale);
    
    // determine highest and lowest and use to set the map function
    if (stocksList[pressedIndex][i] > highest){
      highest = stocksList[pressedIndex][i];
      highestIndex = i;
    }
    
    if (stocksList[pressedIndex][i] < lowest){
      lowest = stocksList[pressedIndex][i];
      lowestIndex = i;
    } 
  }

  //for the current list of stock prices, iterate through the prices
  // if the total number of listed prices exceeds space on the screen, then metaphor breaks down, use alternative method.
  for (var i = 0; i < stocksList[pressedIndex].length; i ++){
    // determine grid
    //var lengthCurrent = stocksList[pressedIndex].length;
    x = floor(i % widthScale);
    y = floor(i/widthScale);
    
    /*// determine highest and lowest and use to set the map function
    if (stocksList[pressedIndex][i] > highest){
      highest = stocksList[pressedIndex][i];
      highestIndex = i;
    }
    
    if (stocksList[pressedIndex][i] < lowest){
      lowest = stocksList[pressedIndex][i];
      lowestIndex = i;
    } 
    */
    // map the fill color between lowest and highest price
    var fillMap = map(stocksList[pressedIndex][i],stocksList[pressedIndex][lowestIndex],stocksList[pressedIndex][highestIndex],75,255);
    fill(fillMap);
    strokeWeight(1);
    stroke(0);
    rect(x*100, y*100, 100,100);
    
    fill(0);
    strokeWeight(1);
    stroke(0);
    text(Number(stocksList[pressedIndex][i]).toFixed(2), (x*100)+6, (y*100)+25);  
  }
  //write the high and low to the console
  print("lowest of the day = " + stocksList[pressedIndex][lowestIndex]);
  print("highest of the day = " + stocksList[pressedIndex][highestIndex]);

  //highlight the lowest
  x = floor(lowestIndex%widthScale);
  y = floor(lowestIndex/widthScale);
  fill(0,0);
  strokeWeight(3);
  stroke(0,255,0);
  rect(x*100, y*100, 100, 100);

  //highlight the highest
  x = floor(highestIndex%widthScale);
  y = floor(highestIndex/widthScale);
  fill(0,0);
  stroke(255,0,0);
  rect(x*100, y*100, 100, 100);
}

function mousePressed() {
  background(0);
  listStockPrices();
  // increment through each list at mousepress
  if (pressedIndex < stocksList.length-1) {
    pressedIndex += 1;
  }
  else {
    pressedIndex = 0;
  }
}

function declareCompanies () {
  stocksList[0] = [1.00, 2.00, 3.00, 4.00, 5.00];//[1.00, 5.00]
  stocksList[1] = [2.00, 3.00, 1.00, 4.00, 5.00];//[1.00, 5.00]],
  stocksList[2] = [2.00, 3.00, 4.00, 1.00, 5.00];//[2.00, 5.00]],
  stocksList[3] = [1.00, 5.00, 2.00, 4.00, 3.00];//[1.00, 4.00]],
  stocksList[4] = [5.00, 1.00, 2.00, 3.00, 4.00];//[1.00, 4.00]],

  stocksList[5] = [19.35, 19.30, 18.88, 18.93, 18.95, 19.03, 19.00, 18.97, 18.97, 18.98]; //[18.88, 19.03]
  
  stocksList[6] = [9.20, 8.03, 10.02, 8.08, 8.14, 8.10, 8.31, 8.28, 8.35, 8.34, 8.39, 8.45, 8.38, 8.38, 8.32, 8.36, 8.28, 8.28, 8.38, 8.48, 8.49, 8.54, 8.73, 8.72, 8.76, 8.74, 8.87, 8.82, 8.81, 8.82, 8.85, 8.85, 8.86, 8.63, 8.70, 8.68, 8.72, 8.77, 8.69, 8.65, 8.70, 8.98, 8.98, 8.87, 8.71, 9.17, 9.34, 9.28, 8.98, 9.02, 9.16, 9.15, 9.07, 9.14, 9.13, 9.10, 9.16, 9.06, 9.10, 9.15, 9.11, 8.72, 8.86, 8.83, 8.70, 8.69, 8.73, 8.73, 8.67, 8.70, 8.69, 8.81, 8.82, 8.83, 8.91, 8.80, 8.97, 8.86, 8.81, 8.87, 8.82, 8.78, 8.82, 8.77, 8.54, 8.32, 8.33, 8.32, 8.51, 8.53, 8.52, 8.41, 8.55, 8.31, 8.38, 8.34, 8.34, 8.19, 8.17, 8.16]; 
  //[8.03, 9.34]
  
  stocksList[7] = [11.00, 12.00, 13.00, 4.00, 5.00, 6.00];
  //[11.00, 13.00] OR [4.00, 6.00]

  stocksList[8] = [31.01, 31.03, 31.63, 31.44, 31.47, 25.55, 25.56, 25.55, 25.53, 25.50, 25.66, 19.35, 19.30, 18.88, 18.93, 18.95, 19.03, 19.00, 18.97, 18.97, 18.98];


  //println(stocksList);  
}