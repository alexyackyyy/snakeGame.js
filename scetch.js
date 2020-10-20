"use strict"

const box = 16;
const fps = 30;
let personalFPS = 0;
let score = 0;
let hightScore = 0;

const food = new Food();
const snake = new Snake();


function setup() {
	createCanvas(Math.floor(windowWidth / box)*box,Math.floor(windowHeight / box)*box);
	frameRate(fps);

	food.randX();
	food.randY();

	if(localStorage.getItem('hightScore')!=null) {
		hightScore = localStorage.getItem('hightScore');
	}
}

function windowResized() {
  resizeCanvas(Math.floor(windowWidth / box)*box,Math.floor(windowHeight / box)*box);
  food.randX();
	food.randY();
}

function draw() {
	background(30);	
	// show fps
	fill(255);
	text(personalFPS,10,20);
	text("HI: "+hightScore, width-120, 20);
	text("Score: "+score, width-70, 20);

	if( score > hightScore ) {
		localStorage.setItem("hightScore", score);
	}

	// summon snake;
	stroke(30);
	strokeWeight(2);
	fill(snake.color);
	rect(snake.posX, snake.posY, box, box);

	snake.moveControl();
	snake.tailControl();

	for(let i=0;i<snake.tail.length;i++) {
		rect( snake.tail[i].posX, snake.tail[i].posY, box, box)
	}

	for(let i=0;i<snake.tail.length;i++) {
		if( snake.posX == snake.tail[i].posX && snake.posY == snake.tail[i].posY ) {
			snake.death();
		}
	}

	snake.tailPopControl();

	noStroke();
	// summon food 
	fill(food.color);
	rect(food.posX, food.posY, box, box);

}

setInterval(function() {
	personalFPS = frameCount;
	frameCount = 0;
},1000)
	

function keyPressed(e) {
	if( e.keyCode == 38 && snake.direction != "down") snake.direction = "up"; 
	else
	if( e.keyCode == 40 && snake.direction != "up") snake.direction = "down";
	else
	if( e.keyCode == 37 && snake.direction != "right") snake.direction = "left";
	else
	if( e.keyCode == 39 && snake.direction != "left") snake.direction = "right";
}