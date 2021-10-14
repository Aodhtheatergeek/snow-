 class snow1{
constructor(x,y,w,h){

    var options = {
        'restitution':0.6,

    }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.image = loadImage("snow4.webp")
    World.add(world,this.body)
}
display(){
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)

}

 }