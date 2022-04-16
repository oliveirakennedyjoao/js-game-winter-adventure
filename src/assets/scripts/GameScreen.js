export default class GameScreen {

    constructor() {
        this.canvas = document.getElementById('gameScreen');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.screenWidth = 1280;
        this.canvas.height = this.screenHeight = 720;
    }

    render(element, type) {
        
        /**
         * Draw Big Tree:
         *  offsetX, offsetY, width on original image, height on original image, 
         *  position X on canvas, position X on canvas, width on canvas, height on canvas
         */

        if(type === 1) {
            this.context.drawImage(element, 384, 144, 338, 382, 25, 0, 48 * 3, 48 * 5);
            this.context.drawImage(element, 384, 144, 338, 382, 175, 50, 48 * 3, 48 * 5);
            this.context.drawImage(element, 384, 144, 338, 382, 325, 0, 48 * 3, 48 * 5);
            this.context.drawImage(element, 384, 144, 338, 382, 475, 50, 48 * 3, 48 * 5);
            this.context.drawImage(element, 384, 144, 338, 382, 625, 0, 48 * 3, 48 * 5);
            this.context.drawImage(element, 384, 144, 338, 382, 775, 50, 48 * 3, 48 * 5);
            this.context.drawImage(element, 384, 144, 338, 382, 925, 0, 48 * 3, 48 * 5);
            this.context.drawImage(element, 384, 144, 338, 382, 1075, 50, 48 * 3, 48 * 5);
            this.context.drawImage(element, 384, 144, 338, 382, 1265, 50, 48 * 3, 48 * 5);
        }

        if(type === 2) {
            this.context.drawImage(
                element.spriteSheet, 
                element.frame.sx, 
                element.frame.sy, 
                element.frame.sw, 
                element.frame.sh, 
                element.physics.position.x, 
                element.physics.position.y, 
                element.frame.w, 
                element.frame.h
            )
        }

        if(type === 3) {
            this.context.drawImage(element, 479, 0, 98, 145, 0, 575, 48 * 2, 48 * 3);
        }

        // if(type === 4) {
        //     this.context.drawImage(element, 2, 112, 46, 31, 450, 500, 46 * 1.5, 31 * 1.5);
        // }
    }

    fillBackground(){
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, this.screenWidth, this.screenHeight);
    }

    clearScreen () {        
        this.context.clearRect(0, 0, this.screenWidth, this.screenHeight);
    }
}