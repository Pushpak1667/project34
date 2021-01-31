class Block{

    constructor(x, y) {

        var options = {
            isStatic: false,
            restitution : 0.5,
            friction : 1,
            density : 0.05
        }
        this.body = Bodies.rectangle(x, y,60,60,options);
        this.width = 60;
        this.height = 60;
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(5);
        // fill("red");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}