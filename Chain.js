class Chain{
constructor(bodyA,bodyB){
    var chain_options={//1.add options
        bodyA:bodyA,
        bodyB:bodyB,
        length:40,
        stiffness:0.05
    }
    this.chain=Constraint.create(chain_options) ;//2. creating the constraint;
World.add(world,this.chain);//3.add to world 
}
display(){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
    strokeWeight(4)
    line (pointA.x,pointA.y,pointB.x,pointB.y)
}
}