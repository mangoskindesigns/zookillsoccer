8/**
 * Create the game. Import the primary classes, and 'composit'
 * the overall Game object out of instances of the classes.
 */
import GamePiece from './GamePiece.js';
import Screen from './Screen.js';

//Screen Inheritence
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

//Info Inheritence
import Info from './Info.js';
import Text from './Text.js';
import DynamicText from './DynamicText.js';
import Score from './Score.js';
import StaticText from './StaticText.js';
import Identity from './Identity.js';
import Instructions from './Instructions.js';

//Character Inheritence
import Character from './Character.js';
import Trump from './Trump.js';
import Player from './Player';
import Animal from './Animal.js';
import Health from './Health.js';
import Lion from './Lion.js';
import Tiger from './Tiger.js';
import Bear from './Bear.js';
import Gorilla from './Gorilla.js';

//Area Inheritence
import Area from './Area.js';
import Cage from './Cage.js';
import AnimalArea from './AnimalArea.js';
import PlayerArea from './PlayerArea.js';

/**
 * Set up the game.
 */
var config = {
    name:'Forest Trump or Donald Gump rulz'
}

///////TESTBED FOR ALL OBJECTS

//Make some test game objects
var game = new GamePiece(config);
console.log(game.getName());

///////////////////TEST SCREEN/////////////////////////
var configScreen1 = {
  name: 'Opening Screen'
}

/////////////////////////Test Screen
var myScreen = new Screen(configScreen1);
console.log(myScreen.getName());

/////////////////////////Test StartScreen
var myStartScreen = new StartScreen({name:"StartScreen"});
console.log(myStartScreen.getName());

/////////////////////////Test GameScreen
var myGameScreen = new GameScreen({name:"GameScreen"});
console.log(myGameScreen.getName());

/////////////////////////Test EndScreen
var myEndScreen = new EndScreen({name:"EndScreen"});
console.log(myEndScreen.getName());

///////////////////TEST INFO/////////////////////////

/////////////////////////Test Info
var myInfo = new Info({name:"Info"});
console.log(myInfo.getName());

/////////////////////////Test Text
var myText = new Text({name:"Text"});
console.log(myText.getName());

/////////////////////////Test DynamicText
var myDynamicText = new DynamicText({name:"DynamicText"});
console.log(myDynamicText.getName());

/////////////////////////Test Score
var myScore = new Score({name:"Score"});
console.log(myScore.getName());

/////////////////////////Test StaticText
var myStaticText = new StaticText({name:"StaticText"});
console.log(myStaticText.getName());

/////////////////////////Test Identity
var myIdentity = new Identity({name:"Identity"});
console.log(myIdentity.getName());

/////////////////////////Test Instructions
var myInstructions = new Instructions({name:"Instructions"});
console.log(myInstructions.getName());

/////////////////////////TEST CHARACTER////////////////////////

/////////////////////////Test Gorilla
var myGorilla = new Gorilla ({name:"Spunky"});
console.log(myGorilla.getName());

/////////////////////////Test Bear
var myBear = new Bear ({name:"Scary"});
console.log(myBear.getName());

/////////////////////////Test Tiger
var myTiger = new Tiger ({name:"Hear me Roar"});
console.log(myTiger.getName());

/////////////////////////Test Lion
var myLion = new Lion ({name:"King of the Jungle"});
console.log(myLion.getName());

/////////////////////////Test Health
var myHealth = new Health ({name:"Health"});
console.log(myHealth.getName());

/////////////////////////Test Animal
var myAnimal = new Animal ({name:"Animal"});
console.log(myAnimal.getName());

/////////////////////////Test Player
var myPlayer = new Player ({name:"Player"});
console.log(myPlayer.getName());

/////////////////////////Test Trump
var myTrump = new Trump ({name:"Trump"});
console.log(myTrump.getName());

/////////////////////////Test Character
var myCharacter = new Character ({name:"Character"});
console.log(myCharacter.getName());

/////////////////////////TEST AREA////////////////////////

/////////////////////////Test Area
var myArea = new Area ({name:"Area"});
console.log(myArea.getName());

/////////////////////////Test Cage
var myCage = new Cage ({name:"Cage"});
console.log(myCage.getName());

/////////////////////////Test AnimalArea
var myAnimalArea = new AnimalArea ({name:"AnimalArea"});
console.log(myAnimalArea.getName());

/////////////////////////Test PlayerArea
var myPlayerArea = new PlayerArea ({name:"PlayerArea"});
console.log(myPlayerArea.getName());

//////////// no longer needed var config2 = {
//////////// no longer needed  name: 'Thud Mutton, Esq'
//////////// no longer needed };

//////////// no longer needed var something = new GamePiece(config2)
//////////// no longer needed console.log(something.getName())

//var area = new Area(config);
//console.log(area.getName());

//var character = new Character(config);
//var player = new Player(config);
