let time;
let frameCountBuffer = 0;
let fps = 0;

const CANVAS_W = 960;
const CANVAS_H = 1360;

const BUTTON_W = CANVAS_W/4;
const BUTTON_H = BUTTON_W/2;
const BUTTON_Y = CANVAS_H*1/3;

let gui;
let upButton, downButton, leftButton, rightButton;
let player;
const PLAYER_SIZE = 48;

const DEBUG_VIEW_X = 40;
const DEBUG_VIEW_Y = 20;
const DEBUG_VIEW_H = 20;

function preload() {
}
function setup() {
	createCanvas(CANVAS_W, CANVAS_H);
	time = millis();

	rectMode(CENTER);
	player = {};
	player.pos = {};
	player.pos.x = 200;
	player.pos.y = 200;

	gui = createGui();
	gui.loadStyle("Seafoam");
	gui.setTextSize(40);
	upButton = buttonInit('↑', BUTTON_W, BUTTON_H, (CANVAS_W-BUTTON_W)/2, BUTTON_Y);
	downButton = buttonInit('↓', BUTTON_W, BUTTON_H, (CANVAS_W-BUTTON_W)/2, BUTTON_Y+BUTTON_H*2);
	leftButton = buttonInit('←', BUTTON_W, BUTTON_H, (CANVAS_W-BUTTON_W*3)/2, BUTTON_Y+BUTTON_H);
	rightButton = buttonInit('→', BUTTON_W, BUTTON_H, (CANVAS_W+BUTTON_W)/2, BUTTON_Y+BUTTON_H);
}
function buttonInit(text, w, h, x, y) {
	let button = createButton(text, x, y, w, h);
	return button;
}
function draw() {
	background('blue');
	let current = millis();
	if ( (current-time)>=1000 ){
		time += 1000;
		fps = frameCount - frameCountBuffer;
		frameCountBuffer = frameCount;
	}
	if (upButton.isPressed){
		player.pos.y -= 5;
	}
	if (downButton.isPressed){
		player.pos.y += 5;
	}
	stroke(255);
	strokeWeight(3);
	rect(player.pos.x, player.pos.y, PLAYER_SIZE);
	drawGui();
	fill(255);
	stroke(255);
	textSize(16);
	strokeWeight(1);
	let debugY = DEBUG_VIEW_Y;
	text('fps:'+fps, DEBUG_VIEW_X, debugY);
	debugY += DEBUG_VIEW_H;
}
function touchMoved() {
	return false;
}