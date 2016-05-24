/**
*Bear.js
*
*@inherits Animal, Character, GamePiece
*/

import GamePiece from './GamePiece.js';
import Character from './Character.js';
import Animal from './Animal.js';

export default class Bear extends Animal {
  constructor (config) {
    super(config);
  }
};
