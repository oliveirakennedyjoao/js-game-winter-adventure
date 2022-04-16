import GameScreen from "./GameScreen.js";
import Player from "./Player.js";
import Input from "./Input.js";

export default class Engine {    

    constructor() {
        this.gameScreen = new GameScreen();

        this.background = new Image();
        this.background.src = './assets/sprites/trees.png'

        this.forestSound = new Audio();
        this.forestSound.src = './assets/sounds/forest.wav';
        this.forestSound.loop = true;
        this.forestSound.volume = 0.1;
        this.forestSound.play();

        this.forestSound = new Audio();
        this.forestSound.src = './assets/sounds/bg_ost.mp3';
        this.forestSound.loop = true;
        this.forestSound.volume = 0.1;
        this.forestSound.play();

        this.wolf = new Image();
        this.wolf.src = './assets/sprites/wolf.png';

        this.hero = new Player();

        this.playerInput = new Input(87, 83, 68, 65);

        this.frameCount = 0;
        this.currentFrame = 0;
    }

    update() {

        this.frameCount += 1;

        if(this.frameCount % 10 === 0) {
            this.hero.currentAnimationFrame = 1;
            this.frameCount = 0;
        }

        this.hero.update(this.playerInput.keysPressed)
    }

    render() {        
        this.gameScreen.clearScreen();
        this.gameScreen.render(this.background, 1);
        this.gameScreen.render(this.hero, 2);
        this.gameScreen.render(this.background, 3);
        this.gameScreen.render(this.wolf, 4)
    }
}