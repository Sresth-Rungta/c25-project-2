class Paper{
    constructor(x,y){
      
       var options={
           //isStatic:false,
           restitution:0.1,
           friction:0.5,
           density:0.3
       }
      this.body= Bodies.circle(x,y,50,options)
      this.image = loadImage("paper.png")
      this.radius = 50
      World.add(world,this.body)
    }
   display(){
       fill("red")
       imageMode(RADIUS)
       image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
   }
   }