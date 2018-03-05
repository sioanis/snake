import '../css/style.css';
import Game from './ui/game';

window.onload = () => {
  const snake = new Game('stage', {fps: 100, size: 4});
};
