import Scene from './scene';

class Snake {
  constructor(canvas, conf) {
    this.stage = new Scene(canvas, conf);
    this.initSnake();
    this.initFood();
  }
  initSnake() {
    for (let i = 0; i < this.stage.conf.size; i++) {
      this.stage.length.push({x: i, y:0});
    }
  }
  initFood() {
    this.stage.food = {
      x: Math.round(Math.random() * (this.stage.width - this.stage.conf.cw) / this.stage.conf.cw),
      y: Math.round(Math.random() * (this.stage.height - this.stage.conf.cw) / this.stage.conf.cw),
    };
  }
  restart() {
    this.stage.length            = [];
    this.stage.food              = {};
    this.stage.score             = 0;
    this.stage.direction         = 'right';
    this.stage.keyEvent.pressKey = null;
    this.initSnake();
    this.initFood();
  }
}

export default Snake;
