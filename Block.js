class Block {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
   this.x=x;
   this.y=y;
    this.width = width;
    this.height = height;
   this.body=Block;
    this.image=loadImage("block.png");
    
  }
  

  display(){
    
    rectMode(CENTER);
    fill("cyan");
    rect(this.x, this.y, this.width, this.height);
    if(this.body.speed>3){
      World.remove(world,this.body)
      this.visibility-=5
      push()
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
  }
}
};