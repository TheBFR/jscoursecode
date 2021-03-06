const PLAYER_MOVE_SPEED = 3;

function warriorClass() {

    this.x = 75;
    this.y = 75;
    this.myWarriorPic; // which picture to use
    this.name = "Untitle Warrior";

    this.keyHeld_North = false;
    this.keyHeld_South = false;
    this.keyHeld_West = false;
    this.keyHeld_East = false;

    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;

    this.setupInput = function(upKey, rightKey, downKey, leftKey) {
        this.controlKeyUp = upKey;
        this.controlKeyRight = rightKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
    }

    this.reset = function(whichImage, warriorName) {
        this.name = warriorName;
        this.myWarriorPic = whichImage;
    
        for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
            for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if(worldGrid[arrayIndex] == WORLD_PLAYERSTART){
                    worldGrid[arrayIndex] = WORLD_ROAD; //sets a tile found to be 2 back to 0 so correct png tile is placed 
                    this.x = eachCol * WORLD_W + WORLD_W/2;
                    this.y = eachRow * WORLD_H + WORLD_H/2;
                    return;
                } //end of player start if
            } // end of col for
        } // end of row for
        console.log("NO PLAYER START FOUND!");
    } //end of warriorReset funtion

    this.move = function() {
        var nextX = this.x;
        var nextY = this.y;

        if(this.keyHeld_North) {
            nextY -= PLAYER_MOVE_SPEED;
        }
        if(this.keyHeld_East) {
            nextX += PLAYER_MOVE_SPEED;
        }
        if(this.keyHeld_South) {
            nextY += PLAYER_MOVE_SPEED;
        }
        if(this.keyHeld_West) {
            nextX -= PLAYER_MOVE_SPEED;
        }
        
        var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);
        
        if(walkIntoTileIndex == WORLD_GOAL) {
            console.log(this.name + " WINS!");
            loadLevel(levelOne);
        } else if(walkIntoTileIndex == WORLD_ROAD) {
            this.x = nextX;
            this.y = nextY;
        }
    }

    this.draw = function() {
        drawBitmapCenteredWithRotation(this.myWarriorPic, this.x, this.y);
    
    }
}