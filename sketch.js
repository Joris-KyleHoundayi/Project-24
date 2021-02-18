const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, height, 1200, 20) 
    box = new Box(700, 320, 100, 100) 
    box1 = new Box(900, 200, 100, 100) 
    hammer = new Bird(100, 200) 
    pig1 = new Pig(100, 100)  
    pig2 = new Pig(150, 150)
    pig3 = new Pig(200, 200) 
    pig4 = new Pig(250, 250)  
    pig5 = new Pig(300, 300) 
    rubber = new Rubber(50, 50)
}



function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    box.display() 
    box1.display()  
    hammer.display() 
    pig1.display() 
    pig2.display() 
    pig3.display() 
    pig4.display() 
    pig5.display()  
    rubber.display()
}