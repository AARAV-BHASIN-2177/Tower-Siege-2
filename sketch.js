const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var platform1,ground;
var polygon,polygon_img,slingShot;
var platform2;

function preload() {
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);
    polygon=Bodies.circle(100,200,20);
    World.add(world,polygon);

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(590, 300, 250, 10);
    platform2= new Ground(950, 200, 200, 10);

    //level one
    
    block1=new Block(500,275,30,40);
    block2=new Block(530,275,30,40);
    block3=new Block(560,275,30,40);
    block4=new Block(590,275,30,40);
    block5=new Block(620,275,30,40);
    block6=new Block(650,275,30,40);
    block7=new Block(680,275,30,40);
    //level two
    block8=new Block(530,235,30,40);
    block9=new Block(560,235,30,40);
    block10=new Block(590,235,30,40);
    block11=new Block(620,235,30,40);
    block12=new Block(650,235,30,40);
    //level three
    block13=new Block(560,195,30,40);
    block14=new Block(590,195,30,40);
    block15=new Block(620,195,30,40);
    //top
    block16=new Block(590,155,30,40);

    
}
    
function draw(){ 
    background("Black");
    Engine.update(engine);
    fill("white");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",500,50)

    debug=true;
    ground.display();
    platform1.display();
    platform2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingShot.attach(this.polygon);
    }
}