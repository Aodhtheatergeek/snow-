const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var  bgimage

var sprite1, sprite2, pic1,pic2,snow,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

  sprite1 =createSprite(400, 200, 50, 50);
sprite2= createSprite(300,300,50,50);

sprite1.addImage("pic1",pic1)
sprite2.addImage("pic2",pic2)


snow = new snow1 (29,67,70,70)
snow2 = new snow1 (265,48,70,70)
snow3 = new snow1 (735,99,70,70)
snow4 = new snow1 (33,78,70,70)
snow5 = new snow1 (290,46,70,70)
snow6 = new snow1 (894,39,70,70)
snow7 = new snow1 (50,199,70,70)
snow8 = new snow1 (25,99,70,70)
snow9 = new snow1 (609,298,70,70)

}

function preload(){
bgimage = loadImage ("snow1.jpg")
pic1 = loadImage("tiny.png")
pic2 =loadImage("bob.png")
}
function draw() {
  background(bgimage);  
  Engine.update(engine);




snow.display()
snow2.display()
snow3.display()
snow4.display()
snow5.display()
snow6.display()
snow7.display()
snow8.display()
snow9.display()
  drawSprites();
}