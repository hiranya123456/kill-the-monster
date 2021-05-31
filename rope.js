class Rope{
    constructor(bodyA,pointB){
        var opt={
         
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:300
        }
        this.pointB=pointB
        this.chain=Constraint .create(opt)
        
    
        World .add(world,this.chain)
        
    }
    attach(body){
   this.chain.bodyA=body

    }
    fly (){
        this.chain.bodyA=null
    }
    display(){
    if(this.chain.bodyA){
      
    var pointA=this.chain.bodyA.position
    var pointB=this.pointB
    push ();
    line (pointB.x,pointB.y,pointA.x,pointA.y)
    pop ();
    

    }    
    
    }
    
    
    }
    
    
    