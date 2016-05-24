/**
*Player.js
*Creates a text-type Info object
*@inherits Character, GamePiece
*/

import GamePiece from './GamePiece.js';
import Character from './Character.js';

export default class Player extends Character {
  constructor (config) {
    super(config);
  }
};
