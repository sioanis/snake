import Keyboard from './keyboard';

class Scene {
  constructor(canvas, conf) {
    this.keyEvent  = new Keyboard();
    this.width     = canvas.width;
    this.height    = canvas.height;
    this.length    = [];
    this.food      = {};
    this.score     = 0;
    this.direction = 'right';
    this.conf      = {
      cw   : 10,
      size : 5,
      fps  : 1000
    };
    if (typeof conf == 'object') {
      for (const key in conf) {
        if (conf.hasOwnProperty(key)) {
          this.conf[key] = conf[key];
        }
      }
    }
  }
}

export default Scene;
