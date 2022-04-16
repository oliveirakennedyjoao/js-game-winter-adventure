import { PLAYER_STATE, PLAYER_ANIMATIONS } from "./constants/index.js";
import Physics from "./types/Physics.js";

export default class Player {
    constructor(){
        this.state = PLAYER_STATE.IDLE;
        this.physics = new Physics();
        this.spriteSheet = new Image();
        this.spriteSheet.src = './assets/sprites/hero_moves.png';
        
        this._currentAnimationFrame = 0;

        this.stepSound = new Audio();
        this.stepSound.src = './assets/sounds/steps.wav'
    }

    update(keysPressed) {
        this.updatePosition(keysPressed);
        this.updateState(keysPressed);
    }

    updatePosition({ up, down, right, left }){

        if(right){
            this.physics.position.x += this.physics.velocity * 0.25
        }

        if(left){
            this.physics.position.x -= this.physics.velocity * 0.25
        }

        if(down){
            this.physics.position.y += this.physics.velocity * 0.25
        }

        if(up){
            this.physics.position.y -= this.physics.velocity * 0.25
        }
    }

    updateState({ up, down, right, left }) {
        
        if(up || down || right || left) {
            this.state = PLAYER_STATE.WALKING;
            
            if(this.stepSound.paused){
                this.stepSound.play();
            }
            
            return;
        }

        this.state = PLAYER_STATE.IDLE;
        this._currentAnimationFrame = 0;
        this.stepSound.pause();
        this.stepSound.currentTime = 0;
    }

    set currentAnimationFrame(_) {
        this._currentAnimationFrame < PLAYER_ANIMATIONS[this.state].numberOfFrames - 1 
            ? this._currentAnimationFrame += 1: this._currentAnimationFrame = 0;
    }

    get frame() {
        return PLAYER_ANIMATIONS[this.state].frames[this._currentAnimationFrame];
    }
}