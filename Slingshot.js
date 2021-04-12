class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    attach(){
        this.sling.bodyA =polygon;
    }
   
    display(){
        if(this.sling.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(48,22,8);
            line(pointA.x,pointA.y,pointB.x,pointB.y); 
            
        }
        

    
    }   }  