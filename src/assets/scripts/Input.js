export default class Input {
    constructor(upKey, downKey, rightKey, leftKey){
        document.addEventListener('keydown', (ev) => this.keyDownHandler(ev))
        document.addEventListener('keyup', (ev) => this.keyUpHandler(ev))
        
        this.keysPressed = { up: false, down: false, right: false, left: false };

        this.upKey = upKey;
        this.downKey = downKey;
        this.rightKey = rightKey;
        this.leftKey = leftKey;
    }

    keyDownHandler(keyPressed) {        
        switch(keyPressed.keyCode){
            case this.upKey:
                this.keysPressed.up = true;
                break;
            case this.downKey:
                this.keysPressed.down = true;
                break;
            case this.rightKey:
                this.keysPressed.right = true;
                break;
            case this.leftKey:
                this.keysPressed.left = true;
                break;
        }
    }
    
    keyUpHandler (keyReleased) {
        switch(keyReleased.keyCode){
            case this.upKey:
                this.keysPressed.up = false;
                break;
            case this.downKey:
                this.keysPressed.down = false;
                break;
            case this.rightKey:
                this.keysPressed.right = false;
                break;
            case this.leftKey:
                this.keysPressed.left = false;
                break;
        }
    }
}