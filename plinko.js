class Plinko{
    constructor(x,y){
    var options={
        restitution:1.0,
        isStatic:true
    }
    this.radius= 10
    this.body=Bodies.circle(x,y,this.radius,options)
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}