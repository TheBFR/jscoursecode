var canvas, canvasContext;

var blueWarrior = new warriorClass();
var greenWarrior = new warriorClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
    colorRect(0,0, canvas.width,canvas.heigth, "black");
    colorText("LOADING IMAGES", canvas.width/2,canvas.heigth/2, "white" )
    
    loadImages();
}

function imageLoadingDoneSoStartGame(){
    var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();

    loadLevel(levelOne);
}

function loadLevel(whichLevel) {
	worldGrid = whichLevel.slice();
	blueWarrior.reset(warriorPic, "Blue Devil");
}

function updateAll() {
	moveAll();
	drawAll();
}


function moveAll() {
	blueWarrior.move();
}

function drawAll() {
	drawWorlds();
	blueWarrior.draw();
}