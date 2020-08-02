console.log('app worked');

import Game, {GameSavingData, loadGame, saveGame} from './game.js';

const game = new Game();
game.start();
