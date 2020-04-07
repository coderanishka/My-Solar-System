var sun,mercury,venus,mars;
var sun_img, mercury_img, venus_img, mars_img;
var angleSpeed = 0.2;
var angle = 0;
var sun_radius;
var bg;

function preload(){
venus_img = loadImage("planet4.png");
mercury_img = loadImage("planet1.png");
sun_img = loadImage("planet2.png");
mars_img = loadImage("planet3.png");

}

function setup() {
  createCanvas(1400,1400);

  sun = createSprite(480,400,50,50);
  sun.addImage("sun",sun_img);
  sun.scale = 0.4;
  sun.setCollider("circle",0,0,200);
 // sun.debug=true;

  mercury = createSprite(270,120,10,10);
  mercury.addImage("mercury",mercury_img);
  mercury.scale = 0.2;
  mercury.setCollider("circle",0,0,200);
 // mercury.debug=true;


  venus = createSprite(20,50,15,15);
  venus.addImage("venus",venus_img);
  venus.scale = 0.2;
  venus.setCollider("circle",0,0,500);
 // venus.debug=true;

  mars = createSprite(380,220,20,20);
  mars.addImage("mars",mars_img);
  mars.scale = 0.2;
  mars.setCollider("circle",0,0,300);
  //mars.debug=true;

  mercury.rotateToDirection=true;
  sun.rotateToDirection=true;
  mars.rotateToDirection=true;

}

function draw() {
  
 background(20,5,25); 
 mercury.rotation = mercury.rotation + 0.2;
 sun.rotation = mercury.rotation + 5;
 mars.rotation = mercury.rotation + 2;

 
 angleMode(DEGREES);
 translate(width/2,height/2);
 rotate(angle);
 angle = angle+angleSpeed;
 
 if(frameCount%1===0){
   venus.scale=venus.scale+0.001;
 }

 if (venus.collide(mercury)){
   mercury.destroy();
 }

 if (venus.collide(mars)){
  mars.destroy();
}

if (venus.collide(sun)){
  sun.destroy();
}
 drawSprites();

}

