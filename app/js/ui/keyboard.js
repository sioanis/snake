class Keyboard {
  constructor() {
    this.keymap = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    }
    this.pressKey = null;
    this.onkeydown();
  }
  getKey() {
    return this.keymap[this.pressKey];
  }
  onkeydown() {
    document.onkeydown = (e) => {
      this.pressKey = e.which;
    }
  }
}
export default Keyboard;
