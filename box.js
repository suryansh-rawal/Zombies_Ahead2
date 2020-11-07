class box{
    constructor(x,y,r){
var  options={
    restitution:1     ,friction:0.3,density:1


}

this.body=Bodies.circle(x,y,r,options);


World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle=  this.body.angle;

        

        push();
        translate(pos.x,pos.y);
        rotate(angle*57);
        rectMode(CENTER);
       
        fill("red");
        ellipse(0,0,50);


        pop();
    }
}