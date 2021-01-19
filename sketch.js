const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle=[];
var plinkos=[];
var division=[];
var divisionHeight=300;
var engine,world

 function setup() {
  createCanvas(800,800);
 // createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;

}

function draw() {
  background(0); 
  for(var k=0;k<=0;k=k+20){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=40;j<=width;j=j+40){
    plinkos.push(new pinko(j,75,10))
  }
  for(var j=40;j<=width-10;j=j+50){
    plinkos.push(new pinko(j,175,10))
  }

  
  for(var j=0;j<particle.length;j++){
    particle[j].display();
  }
  for(var k=0;k<division.length;k++){
    division[k].display();
  }
  
  drawSprites();
}