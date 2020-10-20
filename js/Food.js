class Food {
	posX;
	posY;
	color = [255,0,0];
	foodSize = box;

	randX() {
		this.posX = (~~(random(width/this.foodSize)))*this.foodSize;
	}
	randY() {
		this.posY = (~~(random(height/this.foodSize)))*this.foodSize;
	}

}