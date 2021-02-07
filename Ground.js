class Ground {

constructor () {
    var groundoption = {

        isStatic: true  
        }
      this.ground = Bodies.rectangle (600,680,1200,20,groundoption);
      
     World.add(world,this.ground); 
}
display(){
    rectMode(CENTER);
fill('brown');
    rect(this.ground.position.x,this.ground.position.y,1200,20)   
}

}