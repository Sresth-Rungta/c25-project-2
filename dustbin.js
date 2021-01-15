class Dustbin{
    constructor(x,y,width,height){
      
       var options={
           isStatic:true,
           
       }
      this.body= Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      World.add(world,this.body)

      this.image = loadImage("greendustbin.png")
      

      
    }
   display(){
       
       noStroke();
       fill("green")
       imageMode(CENTER)
       image(this.image,1285,560,200,200)
   }
   }