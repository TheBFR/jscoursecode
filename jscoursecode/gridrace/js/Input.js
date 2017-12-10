const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_TurnRight = false;

var mouseX;
var mouseY;

function setupInput() {
    canvas.addEventListener('mousemove', updateMousePos);
    
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    
}

function updateMousePos(evt){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	
	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
	
	//cheat / hack to test car in any position
	/*carX = mouseX;
	carY = mouseY;
	carSpeedX = 4;
	carSpeedY = -4;*/
}

function keyPressed(evt) {
   //console.log("Key pressed: "+evt.keyCode);
   if(evt.keyCode == KEY_LEFT_ARROW) {
       keyHeld_TurnLeft = true;
   }
   if(evt.keyCode == KEY_RIGHT_ARROW) {
    keyHeld_TurnRight = true;
   }
   if(evt.keyCode == KEY_UP_ARROW) {
    keyHeld_Gas = true;
   }
   if(evt.keyCode == KEY_DOWN_ARROW) {
    keyHeld_Reverse = true;
   }
   //This was supposed to stop scrolling which I did not have issues with
   //instead it broke F5 refresh from working so it has been removed
   //evt.preventDefault();
}

function keyReleased(evt) {
   if(evt.keyCode == KEY_LEFT_ARROW) {
       keyHeld_TurnLeft = false;
   }
   if(evt.keyCode == KEY_RIGHT_ARROW) {
    keyHeld_TurnRight = false;
   }
   if(evt.keyCode == KEY_UP_ARROW) {
    keyHeld_Gas = false;
   }
   if(evt.keyCode == KEY_DOWN_ARROW) {
    keyHeld_Reverse = false;
   }
}