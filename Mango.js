class Mango {
  constructor(x,y){
      var options = {
          isStatic:true,
          restitution:1,
          friction:1
      }

      this.body = Bodies.circle(x,y,40,options);
      World.add(world,this.body);
      this.image = loadImage("mango.png");
      this.radius = 40;
  }

  display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,80,80);
  }
}