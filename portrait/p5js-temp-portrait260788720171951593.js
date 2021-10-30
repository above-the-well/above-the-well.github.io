function setup() {
  createCanvas(600, 600);
}
function draw() {
   background(170,214,255);  
  ;
  fill(221,218,218);
  strokeWeight(1);
  
  //ground
  fill(44,45,45);
  rect(0,300, 610,300);//horizon line
  fill(174,186,183);
 triangle(0,300,200,300,0,600);//left side walk
 triangle(600,300,400,300,600,600);//right side walk
 fill(50,167,81);
 triangle(0,300,150,300,0,445);//left grass
 triangle(600,300,450,300,600,445);//right grass
 
 //creepy figure
 fill(36);
 triangle(70,106,115,135,70,200);
 fill(336,0,0);
 ellipse(77,140,10,10);//left eye
 ellipse(93,150,10,10)//right eye
 fill(0);
 ellipse(93,150,5,5)//pupil
 fill(255);
 triangle(78,160,92,160,78,170);//smile
 
 //tree
 fill(99,74,52)
  rect(0,150,40,200)//stump
  fill(43,88,49);
   rect(0,80,80,230);//bush
  //back hair
  fill(0,0,0);
  arc(300, 390, 340, 700, radians(180), radians(0));
 // body
 fill(255);
  ellipse(300,520,248,400);
  fill(246,226,212);
  
   //hand
   strokeWeight(1.5);
   fill(0);
 rect(79,187,2,10);//hand
 line(80,190,70,180);//topfinger
 line(80,192,68,186);//2nd
 line(80,194,68,189);//3rd
 line(80,197,69,193);//3rd
 line(80,187,76,180);//3rd
 
  //shoulder
  strokeWeight(1);
  fill(92);
  arc(229,630, 120,550,radians(180),radians(270));//left shoulder
  arc(373, 630, 120, 550,radians(270),radians(0));//right
  
  
  //neck
  fill(246,226,212);
  ellipse(300,340,50,50);
  
  //jacket
  fill(92);
  rect(220, 350, 60, 500);//left
  rect(320, 350, 60, 500);//right
  
  //pocket
   rect(335,400,35,45);//right
  
    //hoodie
  fill(92);
  triangle(220,350,280,320,280, 450);//left
  triangle(320,320,380,350,320, 450);//right
    
    //ears
    fill(246,226,212);
     ellipse(180,220,40,50);//left ear
     ellipse(420,220,40,50);//right ear
     
   //head
    fill(246,226,212);
  ellipse(300,200,235,260);
   
  
  //nose
  ellipse(298,250,40,20);
  
  //smile
  line(255,270,300,300);//left smile
  line(300,300,347,270);//right smile
  
  //glasses
  fill(255,255,255);
rect(210,182,60,50);//left eye glass
rect(325,182,60,50);//right eye glass
line(270,210,325,210);//glass bridge

 //eyes
  fill(0,0,0);
ellipse(220,221,20,20);//left eye
ellipse(335,221,20,20);//right eye

//eyebrows
fill(0);
strokeWeight(4);
line(210,156,268,150);//left eyebrow
line(320,150,373,170);//left eyebrow
  
  //bangs
  fill(0);
     triangle(370,80, 239,65, 161, 200);//Left bang
     triangle(359,68, 300,68, 435, 195);//right bang
     
}
