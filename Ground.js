class Ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
   this.x=x;
   this.y=y;
    this.width = width;
    this.height = height;
   
  }
  

  display(){
    
    rectMode(CENTER);
    fill("red");
    rect(this.x, this.y, this.width, this.height);
  }
};
