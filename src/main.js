import Engine from './assets/scripts/engine.js'

window.onload = function () {
    const engine = new Engine();   
    const eng2 = new Engine();

    function gameStart(){
        engine.update();
        engine.render();

        window.requestAnimationFrame(gameStart);
    }

    gameStart();
}