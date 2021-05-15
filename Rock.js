class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: true}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("images/rock1.png")
      this.width = width;
      this.height = height;
    }
    show()
    {
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.width, this.height);
    }
  
  
  }