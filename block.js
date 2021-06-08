class Block {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            friction: 0.3,
            density: 0.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("wood2.png");
        this.x = this.body.position.x;
        this.y = this.body.position.y;
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
    }

    display() {
        if (this.body.speed < 3) {
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, this.x, this.y, this.width, this.height);
            pop();
        }
        else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
    }
}