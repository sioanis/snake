import Snake from './snake';
import Draw from './draw';

class Game {
  constructor(elementId, conf) {
    const canvas   = document.getElementById(elementId);
    const context  = canvas.getContext("2d");
    const snake    = new Snake(canvas, conf);
    const gameDraw = new Draw(context, snake);
    setInterval(() => {gameDraw.drawStage();}, snake.stage.conf.fps);
  }
}

export default Game;
