var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img;
var img2;

function preload(){
  img = loadImage('happydoggo.jpg');
  img2 = loadImage('ball.png');
  img3 = loadImage('playingdogs.jpg');
  img4= loadImage('runningdoggo.jpg');
  img5= loadImage('tireddoggo.jpg');
}


function setup(){
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end of setup ===================================================

function draw(){
 background(img);
  if(gameState == "L1"){
  levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  if(gameState == "WIN"){
    youWin();
  }
    
  
  text(("Score: " + score),width/2,40);
} // end of draw ==================================================

function levelOne(){
  text("Level 1", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=5){
    gameState = "L2";
  }
    
  fill(255);
  line(ballx,bally,mouseX,mouseY);
  image(img2,ballx,bally, ballSize, ballSize);
  
} // end of level 1 ==============================================

function levelTwo(){
  background(img3);
  text("Level 2", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=10){
    gameState = "L3";
  }
    
  
  //line(ballx,bally,mouseX,mouseY);
  fill(255);
  image(img2,ballx,bally, ballSize, ballSize);
  
} // end of level 2 ==============================================

function levelThree(){
  background(img4);
  text("Level 3", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=20){
    gameState = "WIN";
  }
    
  
  //line(ballx,bally,mouseX,mouseY);
  fill(255);
   image(img2,ballx,bally, ballSize, ballSize);
  
} // end of level 3 ==============================================

function youWin(){
  background(img5);
  fill(0);
 text("You Win", width/2,height-20);
}
