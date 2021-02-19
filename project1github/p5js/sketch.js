
/* Project 1 p5js Code
Altered by: Rebecca Sader
IO&E2 (DESN37900)
Winter 2021
*/

//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/Baka_f0r_l1f3/feeds/servo';
let slider;
let fontsize = 40;

var data = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  slider = createSlider(0, 180);
  slider.position(windowWidth * 1/2, windowHeight * 1/2);
    slider.value(spin);
    slider.value(off);
  
}

function draw() {
  background(255, 255, 204);
    textAlign(CENTER);
  drawWords(width * 0.5);
    let data = slider.value();
}

function spin(){
    data = 180;
  console.log(data);
  sendData(data);
}

function off(){
    data = 0;
  console.log(data);
  sendData(data);
}

    /* Source code for the if statement https://p5js.org/examples/control-conditionals-1.html */
    /* Used to try to apply conditionals to the data to get the Servo to activate, caused code to break instead */
    /*
for (let val == 180){
        if (val ==180){data = 1;
  console.log(data);
  sendData(data); 
}else{
    data = 0;
  console.log(data);
  sendData(data);
}
}
}
*/
    
/* Source Code for the text https://p5js.org/examples/typography-words.html */
/* Used to add words within the canvas */
function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  text('HUNGRY?', x, windowHeight * 1/3);

function sendData(turnOn){
  let postData ={
    "value": turnOn,
    "X-AIO-Key": "aio_YIjr01TXRsKqLftAuwRS85AA0x12"
  };
  httpPost(url, 'json', postData, function(result){
    console.log(result);
  });
}