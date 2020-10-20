class Snake {

	snakeSize = box;
	color = [0,130,0];
	posX = 0;
	posY = 0;
	direction = "right";
	tail = [];
	newTail = {
		x : this.posX,
		y : this.posY
	};

	moveUp() {
		this.posY -= this.snakeSize;
		if( this.posY < 0 ) this.posY = height-this.snakeSize;
	}

	moveDown() {
		this.posY += this.snakeSize;
		if( this.posY > height-this.snakeSize ) this.posY = 0;
	}

	moveLeft() {
		this.posX -= this.snakeSize;
		if( this.posX < 0 ) this.posX = width-this.snakeSize;
	}

	moveRight() {
		this.posX += this.snakeSize;
		if( this.posX > width-this.snakeSize ) this.posX = 0;
	}

	tailControl() {

		this.tail.unshift({
			posX: this.newTail.x,
			posY: snake.newTail.y
		});

		this.newTail = {
			x : this.posX,
			y : this.posY
		}
	}

	tailPopControl() {
		if( !this.eat() ) {
			this.tail.pop();
		}
	}

	moveControl() {
		if( this.direction == "up" ) this.moveUp();
		else
		if( this.direction == "down" ) this.moveDown();
		else
		if(this.direction == "left" ) this.moveLeft();
		else
		if( this.direction == "right" ) this.moveRight();
		
	}

	eat() {
		if( this.posX == food.posX && this.posY == food.posY ) {
			food.randX();
			food.randY();
			score++;
			console.log(score);
			return true;
		}
	}

	death() {
		this.tail = [];
		if( score > hightScore ) {
			localStorage.setItem("hightScore", score);
			hightScore = score;
		}
		console.log("UUPS");
		
		score = 0;
	}	

}