class Bob{
    
    constructor(x, y, radius){
    
    var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
    
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = 50;
    World.add(world, this.body);
    
    }
    
    display(){
    push();
    var pos = this.body.position;
    translate(pos.x,pos.y);
    strokeWeight(1);
    fill("Purple");
    rectMode(CENTER);
    ellipse(0,0,this.radius);
    pop();    
    }
    }
    
    