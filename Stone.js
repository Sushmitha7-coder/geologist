class Stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options = {
		'density':12,
		'friction': 0.8,
		'restitution':0.9
	  };

        this.body=Bodies.rectangle(this.x, this.y, 60,60, options)
        this.width = 100;
        this.height = 80;
		World.add(world, this.body);

	}
	display()
	{
            var pos=this.body.position;	
            var angle = this.body.angle;	
			push()
            translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("white");
			rect(0, 0, this.width, this.height);
			pop()
	}

}