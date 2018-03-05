class Draw {
  constructor(context, snake) {
    this.cells = [];
    this.snake = snake;
    this.context = context;
  }
  drawCell(x, y) {
    const {snake, context} = this;
    context.fillStyle = 'rgb(0,206,209)';
    context.beginPath();
    context.arc((x * snake.stage.conf.cw + 6), (y * snake.stage.conf.cw + 6), 4, 0, 2*Math.PI, false);
    context.fill();
  }
  collision(nx, ny) {
    const {snake, context} = this;
    const stageWidth = snake.stage.width / snake.stage.conf.cw;
    const stageHeight = snake.stage.height / snake.stage.conf.cw;
    if (nx == -1 || nx == stageWidth || ny == -1 || ny == stageHeight) {
      return true;
    }
    for (let i = 0; i<this.cells.length; i++) {
      return this.cells[i].x == nx && this.cells[i].y == ny;
    }
    return false;
  }
  drawStage() {
    const {snake, context} = this;
    const keyPress = snake.stage.keyEvent.getKey();
    if (typeof(keyPress) != 'undefined') {
      snake.stage.direction = keyPress;
    }
    context.fillStyle = "white";
    context.fillRect(0, 0, snake.stage.width, snake.stage.height);
    let nx = snake.stage.length[0].x;
    let ny = snake.stage.length[0].y;
    switch (snake.stage.direction) {
      case 'right':
        nx++;
        break;
      case 'left':
        nx--;
        break;
      case 'up':
        ny--;
        break;
      case 'down':
        ny++;
        break;
    }
    if (this.collision(nx, ny) == true) {
      snake.restart();
      return;
    }
    if (nx == snake.stage.food.x && ny == snake.stage.food.y) {
      var tail = {x: nx, y: ny};
      snake.stage.score++;
      snake.initFood();
    } else {
      var tail = snake.stage.length.pop();
      tail.x   = nx;
      tail.y   = ny;
    }
    snake.stage.length.unshift(tail);
    this.cells = [];
    for (let i = 0; i < snake.stage.length.length; i++) {
      const cell = snake.stage.length[i];
      if (i > 0) {
        this.cells.push(cell);
      }
      this.drawCell(cell.x, cell.y);
    }
    this.drawCell(snake.stage.food.x, snake.stage.food.y);
    context.fillText('Score: ' + snake.stage.score, 5, (snake.stage.height - 5));
  }
}

export default Draw;
