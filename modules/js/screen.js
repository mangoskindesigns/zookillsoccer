/**
 * Screen.js
 * Generic Screen object
 * @inherits GamePiece.js
 */
 import GamePiece from './GamePiece.js';

 export default class Screen extends GamePiece {

 	constructor (config) {
 		super(config); //init 'parent' GamePiece

    this.game = config.game;
    this.screenId = config.id; // id of HTML <div> to use.
    window.config = config; //TEMPORARY DEBUG
    this.loadScreen(); //grab the <div> with the config.id
 	}

  loadScreen () {
    console.log('loading div id:' + this.screenId);
    this.dom = document.getElementById(this.screenId);
  }

  showScreen () {
    this.dom.style.display = 'block';
  }

  hideScreen () {
    this.dom.style.display = 'none';
  }

  showHeader () {
    this.dom.querySelector('.header').style.display = 'block';
  }

  showFooter () {
    this.dom.querySelector('.footer').style.display = 'block';
  }

  hideHeader () {
    this.dom.querySelector('.header').style.display = 'none';
  }

  hideFooter () {
    this.dom.querySelector('.footer').style.display = 'none';
  }

  addWarning () {
    this.dom.querySelector('.footer').innerHTML = this.game.warning;
  }

}; //end of class.
