class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){
    
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    var options={
    bodyA: bodyA,
    bodyB: bodyB,
    pointB:{x:this.offsetX,y:this.offsetY},
    //length: 150,
    //stiffness: 0.5
    }
    
    this.rope = Constraint.create (options);
    World.add(world, this.rope);
    }
    
    display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    strokeWeight(2);
    fill("Black");

    var A1x = pointA.x
    var A1y = pointA.y

    var A2x = pointB.x+this.offsetX
    var A2y = pointB.y+this.offsetY

    line(A1x,A1y,A2x,A2y);

    }
}
