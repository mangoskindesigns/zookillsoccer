(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Animal.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Character, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Animal = function (_Character) {
  _inherits(Animal, _Character);

  function Animal(config) {
    _classCallCheck(this, Animal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));
  }

  return Animal;
}(_Character3.default);

exports.default = Animal;
;

},{"./Character.js":6,"./GamePiece.js":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *AnimalArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var AnimalArea = function (_Area) {
  _inherits(AnimalArea, _Area);

  function AnimalArea(config) {
    _classCallCheck(this, AnimalArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimalArea).call(this, config));
  }

  return AnimalArea;
}(_Area3.default);

exports.default = AnimalArea;
;

},{"./Area.js":3,"./GamePiece.js":9}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Area.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Area = function (_GamePiece) {
  _inherits(Area, _GamePiece);

  function Area(config) {
    _classCallCheck(this, Area);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, config));
  }

  return Area;
}(_GamePiece3.default);

exports.default = Area;
;

},{"./GamePiece.js":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Bear.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Animal, Character, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Bear = function (_Animal) {
  _inherits(Bear, _Animal);

  function Bear(config) {
    _classCallCheck(this, Bear);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bear).call(this, config));
  }

  return Bear;
}(_Animal3.default);

exports.default = Bear;
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Cage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;
;

},{"./Area.js":3,"./GamePiece.js":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config));
  }

  return Character;
}(_GamePiece3.default);

exports.default = Character;
;

},{"./GamePiece.js":9}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *DynamicText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Text that can be changed by user (e.g. input field), or updated by the game itself.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Text, Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var DynamicText = function (_Text) {
  _inherits(DynamicText, _Text);

  function DynamicText(config) {
    _classCallCheck(this, DynamicText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DynamicText).call(this, config));
  }

  return DynamicText;
}(_Text3.default);

exports.default = DynamicText;
;

},{"./GamePiece.js":9,"./Info.js":14,"./Text.js":23}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *EndScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Ending screen for the game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var EndScreen = function (_Screen) {
  _inherits(EndScreen, _Screen);

  function EndScreen(config) {
    _classCallCheck(this, EndScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EndScreen).call(this, config));
  }

  return EndScreen;
}(_Screen3.default);

exports.default = EndScreen;
;

},{"./GamePiece.js":9,"./Screen.js":20}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * GamePiece.js
 * Basic Game object
 *
 * To make this work, you must be running the Babel transpiler,
 * and watching for changes in this file with browserify. Two
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

var GamePiece = function () {
    function GamePiece(config) {
        _classCallCheck(this, GamePiece);

        //TODO: use super();
        this.name = config.name;
        this.uuid = this.setId();
    }

    /**
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */


    _createClass(GamePiece, [{
        key: 'setId',
        value: function setId() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }

        /**
         * Return the given name of this object.
         */

    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }

        /**
         * Return the unique id of this object.
         */

    }, {
        key: 'getId',
        value: function getId() {
            return this.uuid;
        }
    }]);

    return GamePiece;
}();

exports.default = GamePiece;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *GameScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Main game screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var GameScreen = function (_Screen) {
  _inherits(GameScreen, _Screen);

  function GameScreen(config) {
    _classCallCheck(this, GameScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameScreen).call(this, config));
  }

  return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;
;

},{"./GamePiece.js":9,"./Screen.js":20}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Gorilla.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Animal, Character, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Gorilla = function (_Animal) {
  _inherits(Gorilla, _Animal);

  function Gorilla(config) {
    _classCallCheck(this, Gorilla);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Gorilla).call(this, config));
  }

  return Gorilla;
}(_Animal3.default);

exports.default = Gorilla;
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Health.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Character, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Health = function (_Character) {
  _inherits(Health, _Character);

  function Health(config) {
    _classCallCheck(this, Health);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Health).call(this, config));
  }

  return Health;
}(_Character3.default);

exports.default = Health;
;

},{"./Character.js":6,"./GamePiece.js":9}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Identity.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits StaticText, Text, Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Identity = function (_StaticText) {
  _inherits(Identity, _StaticText);

  function Identity(config) {
    _classCallCheck(this, Identity);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Identity).call(this, config));
  }

  return Identity;
}(_StaticText3.default);

exports.default = Identity;
;

},{"./GamePiece.js":9,"./Info.js":14,"./StaticText.js":22,"./Text.js":23}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Info.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Generic information object.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Info = function (_GamePiece) {
  _inherits(Info, _GamePiece);

  function Info(config) {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Info).call(this, config));
  }

  return Info;
}(_GamePiece3.default);

exports.default = Info;
;

},{"./GamePiece.js":9}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Instructions.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits StaticText, Text, Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Instructions = function (_StaticText) {
  _inherits(Instructions, _StaticText);

  function Instructions(config) {
    _classCallCheck(this, Instructions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Instructions).call(this, config));
  }

  return Instructions;
}(_StaticText3.default);

exports.default = Instructions;
;

},{"./GamePiece.js":9,"./Info.js":14,"./StaticText.js":22,"./Text.js":23}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Lion.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Animal, Character, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Lion = function (_Animal) {
  _inherits(Lion, _Animal);

  function Lion(config) {
    _classCallCheck(this, Lion);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Lion).call(this, config));
  }

  return Lion;
}(_Animal3.default);

exports.default = Lion;
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Player.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Character, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Player = function (_Character) {
  _inherits(Player, _Character);

  function Player(config) {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, config));
  }

  return Player;
}(_Character3.default);

exports.default = Player;
;

},{"./Character.js":6,"./GamePiece.js":9}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *PlayerArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var PlayerAnimal = function (_Area) {
  _inherits(PlayerAnimal, _Area);

  function PlayerAnimal(config) {
    _classCallCheck(this, PlayerAnimal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerAnimal).call(this, config));
  }

  return PlayerAnimal;
}(_Area3.default);

exports.default = PlayerAnimal;
;

},{"./Area.js":3,"./GamePiece.js":9}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _DynamicText2 = require('./DynamicText.js');

var _DynamicText3 = _interopRequireDefault(_DynamicText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Score.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Displays user score
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits DynamicText, Text, Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Score = function (_DynamicText) {
  _inherits(Score, _DynamicText);

  function Score(config) {
    _classCallCheck(this, Score);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Score).call(this, config));
  }

  return Score;
}(_DynamicText3.default);

exports.default = Score;
;

},{"./DynamicText.js":7,"./GamePiece.js":9,"./Info.js":14,"./Text.js":23}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Screen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Generic Screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Screen = function (_GamePiece) {
  _inherits(Screen, _GamePiece);

  function Screen(config) {
    _classCallCheck(this, Screen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Screen).call(this, config)); //init 'parent' GamePiece
  }

  return Screen;
}(_GamePiece3.default);

exports.default = Screen;
;

},{"./GamePiece.js":9}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *StartScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Opening screen for game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var StartScreen = function (_Screen) {
  _inherits(StartScreen, _Screen);

  function StartScreen(config) {
    _classCallCheck(this, StartScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StartScreen).call(this, config));
  }

  return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;
;

},{"./GamePiece.js":9,"./Screen.js":20}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *StaticText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Text, Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var StaticText = function (_Text) {
  _inherits(StaticText, _Text);

  function StaticText(config) {
    _classCallCheck(this, StaticText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StaticText).call(this, config));
  }

  return StaticText;
}(_Text3.default);

exports.default = StaticText;
;

},{"./GamePiece.js":9,"./Info.js":14,"./Text.js":23}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Text.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Text = function (_Info) {
  _inherits(Text, _Info);

  function Text(config) {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, config));
  }

  return Text;
}(_Info3.default);

exports.default = Text;
;

},{"./GamePiece.js":9,"./Info.js":14}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Tiger.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Animal, Character, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Tiger = function (_Animal) {
  _inherits(Tiger, _Animal);

  function Tiger(config) {
    _classCallCheck(this, Tiger);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tiger).call(this, config));
  }

  return Tiger;
}(_Animal3.default);

exports.default = Tiger;
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Trump.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *@inherits Character, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Trump = function (_Character) {
  _inherits(Trump, _Character);

  function Trump(config) {
    _classCallCheck(this, Trump);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));
  }

  return Trump;
}(_Character3.default);

exports.default = Trump;
;

},{"./Character.js":6,"./GamePiece.js":9}],26:[function(require,module,exports){
'use strict';

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Lion = require('./Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('./Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('./Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('./Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

8; /**
   * Create the game. Import the primary classes, and 'composit'
   * the overall Game object out of instances of the classes.
   */


//Screen Inheritence


//Info Inheritence


//Character Inheritence


//Area Inheritence


/**
 * Set up the game.
 */
var config = {
  name: 'Forest Trump or Donald Gump rulz'
};

///////TESTBED FOR ALL OBJECTS

//Make some test game objects
var game = new _GamePiece2.default(config);
console.log(game.getName());

///////////////////TEST SCREEN/////////////////////////
var configScreen1 = {
  name: 'Opening Screen'
};

/////////////////////////Test Screen
var myScreen = new _Screen2.default(configScreen1);
console.log(myScreen.getName());

/////////////////////////Test StartScreen
var myStartScreen = new _StartScreen2.default({ name: "StartScreen" });
console.log(myStartScreen.getName());

/////////////////////////Test GameScreen
var myGameScreen = new _GameScreen2.default({ name: "GameScreen" });
console.log(myGameScreen.getName());

/////////////////////////Test EndScreen
var myEndScreen = new _EndScreen2.default({ name: "EndScreen" });
console.log(myEndScreen.getName());

///////////////////TEST INFO/////////////////////////

/////////////////////////Test Info
var myInfo = new _Info2.default({ name: "Info" });
console.log(myInfo.getName());

/////////////////////////Test Text
var myText = new _Text2.default({ name: "Text" });
console.log(myText.getName());

/////////////////////////Test DynamicText
var myDynamicText = new _DynamicText2.default({ name: "DynamicText" });
console.log(myDynamicText.getName());

/////////////////////////Test Score
var myScore = new _Score2.default({ name: "Score" });
console.log(myScore.getName());

/////////////////////////Test StaticText
var myStaticText = new _StaticText2.default({ name: "StaticText" });
console.log(myStaticText.getName());

/////////////////////////Test Identity
var myIdentity = new _Identity2.default({ name: "Identity" });
console.log(myIdentity.getName());

/////////////////////////Test Instructions
var myInstructions = new _Instructions2.default({ name: "Instructions" });
console.log(myInstructions.getName());

/////////////////////////TEST CHARACTER////////////////////////

/////////////////////////Test Gorilla
var myGorilla = new _Gorilla2.default({ name: "Spunky" });
console.log(myGorilla.getName());

/////////////////////////Test Bear
var myBear = new _Bear2.default({ name: "Scary" });
console.log(myBear.getName());

/////////////////////////Test Tiger
var myTiger = new _Tiger2.default({ name: "Hear me Roar" });
console.log(myTiger.getName());

/////////////////////////Test Lion
var myLion = new _Lion2.default({ name: "King of the Jungle" });
console.log(myLion.getName());

/////////////////////////Test Health
var myHealth = new _Health2.default({ name: "Health" });
console.log(myHealth.getName());

/////////////////////////Test Animal
var myAnimal = new _Animal2.default({ name: "Animal" });
console.log(myAnimal.getName());

/////////////////////////Test Player
var myPlayer = new _Player2.default({ name: "Player" });
console.log(myPlayer.getName());

/////////////////////////Test Trump
var myTrump = new _Trump2.default({ name: "Trump" });
console.log(myTrump.getName());

/////////////////////////Test Character
var myCharacter = new _Character2.default({ name: "Character" });
console.log(myCharacter.getName());

/////////////////////////TEST AREA////////////////////////

/////////////////////////Test Area
var myArea = new _Area2.default({ name: "Area" });
console.log(myArea.getName());

/////////////////////////Test Cage
var myCage = new _Cage2.default({ name: "Cage" });
console.log(myCage.getName());

/////////////////////////Test AnimalArea
var myAnimalArea = new _AnimalArea2.default({ name: "AnimalArea" });
console.log(myAnimalArea.getName());

/////////////////////////Test PlayerArea
var myPlayerArea = new _PlayerArea2.default({ name: "PlayerArea" });
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

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":4,"./Cage.js":5,"./Character.js":6,"./DynamicText.js":7,"./EndScreen.js":8,"./GamePiece.js":9,"./GameScreen.js":10,"./Gorilla.js":11,"./Health.js":12,"./Identity.js":13,"./Info.js":14,"./Instructions.js":15,"./Lion.js":16,"./Player":17,"./PlayerArea.js":18,"./Score.js":19,"./Screen.js":20,"./StartScreen.js":21,"./StaticText.js":22,"./Text.js":23,"./Tiger.js":24,"./Trump.js":25}]},{},[26])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyIsIm1vZHVsZXMvanMvRW5kU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9HYW1lUGllY2UuanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0dvcmlsbGEuanMiLCJtb2R1bGVzL2pzL0hlYWx0aC5qcyIsIm1vZHVsZXMvanMvSWRlbnRpdHkuanMiLCJtb2R1bGVzL2pzL0luZm8uanMiLCJtb2R1bGVzL2pzL0luc3RydWN0aW9ucy5qcyIsIm1vZHVsZXMvanMvTGlvbi5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljVGV4dC5qcyIsIm1vZHVsZXMvanMvVGV4dC5qcyIsIm1vZHVsZXMvanMvVGlnZXIuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ01BOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTTs7O0FBQ25CLGtCQUFhLE1BQWIsRUFBcUI7QUFBQTs7QUFBQSxxRkFDYixNQURhO0FBRXBCOzs7OztrQkFIa0IsTTtBQUlwQjs7Ozs7Ozs7O0FDUEQ7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixVOzs7QUFDbkIsc0JBQWEsTUFBYixFQUFx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T0FBWixFQUFaOzs7OztBQUtBLElBQUksU0FBUyxtQkFBVSxFQUFDLE1BQUssTUFBTixFQUFWLENBQWI7QUFDQSxRQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQVAsRUFBWjs7O0FBR0EsSUFBSSxTQUFTLG1CQUFVLEVBQUMsTUFBSyxNQUFOLEVBQVYsQ0FBYjtBQUNBLFFBQVEsR0FBUixDQUFZLE9BQU8sT0FBUCxFQUFaOzs7QUFHQSxJQUFJLGVBQWUseUJBQWdCLEVBQUMsTUFBSyxZQUFOLEVBQWhCLENBQW5CO0FBQ0EsUUFBUSxHQUFSLENBQVksYUFBYSxPQUFiLEVBQVo7OztBQUdBLElBQUksZUFBZSx5QkFBZ0IsRUFBQyxNQUFLLFlBQU4sRUFBaEIsQ0FBbkI7QUFDQSxRQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbipBbmltYWwuanNcbipDcmVhdGVzIGEgdGV4dC10eXBlIEluZm8gb2JqZWN0XG4qQGluaGVyaXRzIENoYXJhY3RlciwgR2FtZVBpZWNlXG4qL1xuXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxufTtcbiIsIi8qKlxuKkFuaW1hbEFyZWEuanNcbipcbipAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4qL1xuXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbEFyZWEgZXh0ZW5kcyBBcmVhIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cbn07XG4iLCIvKipcbipBcmVhLmpzXG4qXG4qQGluaGVyaXRzIEdhbWVQaWVjZS5qc1xuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWEgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxufTtcbiIsIi8qKlxuKkJlYXIuanNcbipcbipAaW5oZXJpdHMgQW5pbWFsLCBDaGFyYWN0ZXIsIEdhbWVQaWVjZVxuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFyIGV4dGVuZHMgQW5pbWFsIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cbn07XG4iLCIvKipcbipDYWdlLmpzXG4qXG4qQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qQ2hhcmFjdGVyLmpzXG4qXG4qQGluaGVyaXRzIEdhbWVQaWVjZS5qc1xuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qRHluYW1pY1RleHQuanNcbipUZXh0IHRoYXQgY2FuIGJlIGNoYW5nZWQgYnkgdXNlciAoZS5nLiBpbnB1dCBmaWVsZCksIG9yIHVwZGF0ZWQgYnkgdGhlIGdhbWUgaXRzZWxmLlxuKkBpbmhlcml0cyBUZXh0LCBJbmZvLCBHYW1lUGllY2VcbiovXG5cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNUZXh0IGV4dGVuZHMgVGV4dCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qRW5kU2NyZWVuLmpzXG4qRW5kaW5nIHNjcmVlbiBmb3IgdGhlIGdhbWUuXG4qQGluaGVyaXRzIEdhbWVQaWVjZSwgU2NyZWVuXG4qL1xuXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxufTtcbiIsIi8qKlxuICogR2FtZVBpZWNlLmpzXG4gKiBCYXNpYyBHYW1lIG9iamVjdFxuICpcbiAqIFRvIG1ha2UgdGhpcyB3b3JrLCB5b3UgbXVzdCBiZSBydW5uaW5nIHRoZSBCYWJlbCB0cmFuc3BpbGVyLFxuICogYW5kIHdhdGNoaW5nIGZvciBjaGFuZ2VzIGluIHRoaXMgZmlsZSB3aXRoIGJyb3dzZXJpZnkuIFR3b1xuICogVGVybWluYWwgd2luZG93cyBuZWVkIHRvIGJlIG9wZW46XG4gKiAxLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcImdydW50XCJcbiAqIDIuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwibnBtIHN0YXJ0XCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBpZWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBcdC8vVE9ETzogdXNlIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgICAgICB0aGlzLnV1aWQgPSB0aGlzLnNldElkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGdpdmVuIG5hbWUgb2YgdGhpcyBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0TmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB1bmlxdWUgaWQgb2YgdGhpcyBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0SWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbn1cbiIsIi8qKlxuKkdhbWVTY3JlZW4uanNcbipNYWluIGdhbWUgc2NyZWVuIG9iamVjdFxuKkBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qR29yaWxsYS5qc1xuKlxuKkBpbmhlcml0cyBBbmltYWwsIENoYXJhY3RlciwgR2FtZVBpZWNlXG4qL1xuXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvcmlsbGEgZXh0ZW5kcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxufTtcbiIsIi8qKlxuKkhlYWx0aC5qc1xuKkNyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcbipAaW5oZXJpdHMgQ2hhcmFjdGVyLCBHYW1lUGllY2VcbiovXG5cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWx0aCBleHRlbmRzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qSWRlbnRpdHkuanNcbipcbipAaW5oZXJpdHMgU3RhdGljVGV4dCwgVGV4dCwgSW5mbywgR2FtZVBpZWNlXG4qL1xuXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVudGl0eSBleHRlbmRzIFN0YXRpY1RleHQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxufTtcbiIsIi8qKlxuKkluZm8uanNcbipHZW5lcmljIGluZm9ybWF0aW9uIG9iamVjdC5cbipAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXG4qL1xuXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qSW5zdHJ1Y3Rpb25zLmpzXG4qXG4qQGluaGVyaXRzIFN0YXRpY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1Y3Rpb25zIGV4dGVuZHMgU3RhdGljVGV4dCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qTGlvbi5qc1xuKlxuKkBpbmhlcml0cyBBbmltYWwsIENoYXJhY3RlciwgR2FtZVBpZWNlXG4qL1xuXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpb24gZXh0ZW5kcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxufTtcbiIsIi8qKlxuKlBsYXllci5qc1xuKkNyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcbipAaW5oZXJpdHMgQ2hhcmFjdGVyLCBHYW1lUGllY2VcbiovXG5cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qUGxheWVyQXJlYS5qc1xuKlxuKkBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiovXG5cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQW5pbWFsIGV4dGVuZHMgQXJlYSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qU2NvcmUuanNcbipEaXNwbGF5cyB1c2VyIHNjb3JlXG4qQGluaGVyaXRzIER5bmFtaWNUZXh0LCBUZXh0LCBJbmZvLCBHYW1lUGllY2VcbiovXG5cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBEeW5hbWljVGV4dCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qU2NyZWVuLmpzXG4qR2VuZXJpYyBTY3JlZW4gb2JqZWN0XG4qQGluaGVyaXRzIEdhbWVQaWVjZS5qc1xuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7IC8vaW5pdCAncGFyZW50JyBHYW1lUGllY2VcbiAgfVxuXG59O1xuIiwiLyoqXG4qU3RhcnRTY3JlZW4uanNcbipPcGVuaW5nIHNjcmVlbiBmb3IgZ2FtZS5cbipAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cbiovXG5cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cbn07XG4iLCIvKipcbipTdGF0aWNUZXh0LmpzXG4qXG4qQGluaGVyaXRzIFRleHQsIEluZm8sIEdhbWVQaWVjZVxuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljVGV4dCBleHRlbmRzIFRleHQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxufTtcbiIsIi8qKlxuKlRleHQuanNcbipDcmVhdGVzIGEgdGV4dC10eXBlIEluZm8gb2JqZWN0XG4qQGluaGVyaXRzIEluZm8sIEdhbWVQaWVjZVxuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgSW5mbyB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qVGlnZXIuanNcbipcbipAaW5oZXJpdHMgQW5pbWFsLCBDaGFyYWN0ZXIsIEdhbWVQaWVjZVxuKi9cblxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciBleHRlbmRzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiLyoqXG4qVHJ1bXAuanNcbipDcmVhdGVzIGEgdGV4dC10eXBlIEluZm8gb2JqZWN0XG4qQGluaGVyaXRzIENoYXJhY3RlciwgR2FtZVBpZWNlXG4qL1xuXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcnVtcCBleHRlbmRzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59O1xuIiwiOC8qKlxuICogQ3JlYXRlIHRoZSBnYW1lLiBJbXBvcnQgdGhlIHByaW1hcnkgY2xhc3NlcywgYW5kICdjb21wb3NpdCdcbiAqIHRoZSBvdmVyYWxsIEdhbWUgb2JqZWN0IG91dCBvZiBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzZXMuXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbi8vU2NyZWVuIEluaGVyaXRlbmNlXG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBJbmhlcml0ZW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5cbi8vQ2hhcmFjdGVyIEluaGVyaXRlbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcblxuLy9BcmVhIEluaGVyaXRlbmNlXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xuXG4vKipcbiAqIFNldCB1cCB0aGUgZ2FtZS5cbiAqL1xudmFyIGNvbmZpZyA9IHtcbiAgICBuYW1lOidGb3Jlc3QgVHJ1bXAgb3IgRG9uYWxkIEd1bXAgcnVseidcbn1cblxuLy8vLy8vL1RFU1RCRUQgRk9SIEFMTCBPQkpFQ1RTXG5cbi8vTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXG52YXIgZ2FtZSA9IG5ldyBHYW1lUGllY2UoY29uZmlnKTtcbmNvbnNvbGUubG9nKGdhbWUuZ2V0TmFtZSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vL1RFU1QgU0NSRUVOLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudmFyIGNvbmZpZ1NjcmVlbjEgPSB7XG4gIG5hbWU6ICdPcGVuaW5nIFNjcmVlbidcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rlc3QgU2NyZWVuXG52YXIgbXlTY3JlZW4gPSBuZXcgU2NyZWVuKGNvbmZpZ1NjcmVlbjEpO1xuY29uc29sZS5sb2cobXlTY3JlZW4uZ2V0TmFtZSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rlc3QgU3RhcnRTY3JlZW5cbnZhciBteVN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKHtuYW1lOlwiU3RhcnRTY3JlZW5cIn0pO1xuY29uc29sZS5sb2cobXlTdGFydFNjcmVlbi5nZXROYW1lKCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBHYW1lU2NyZWVuXG52YXIgbXlHYW1lU2NyZWVuID0gbmV3IEdhbWVTY3JlZW4oe25hbWU6XCJHYW1lU2NyZWVuXCJ9KTtcbmNvbnNvbGUubG9nKG15R2FtZVNjcmVlbi5nZXROYW1lKCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBFbmRTY3JlZW5cbnZhciBteUVuZFNjcmVlbiA9IG5ldyBFbmRTY3JlZW4oe25hbWU6XCJFbmRTY3JlZW5cIn0pO1xuY29uc29sZS5sb2cobXlFbmRTY3JlZW4uZ2V0TmFtZSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vL1RFU1QgSU5GTy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rlc3QgSW5mb1xudmFyIG15SW5mbyA9IG5ldyBJbmZvKHtuYW1lOlwiSW5mb1wifSk7XG5jb25zb2xlLmxvZyhteUluZm8uZ2V0TmFtZSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rlc3QgVGV4dFxudmFyIG15VGV4dCA9IG5ldyBUZXh0KHtuYW1lOlwiVGV4dFwifSk7XG5jb25zb2xlLmxvZyhteVRleHQuZ2V0TmFtZSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rlc3QgRHluYW1pY1RleHRcbnZhciBteUR5bmFtaWNUZXh0ID0gbmV3IER5bmFtaWNUZXh0KHtuYW1lOlwiRHluYW1pY1RleHRcIn0pO1xuY29uc29sZS5sb2cobXlEeW5hbWljVGV4dC5nZXROYW1lKCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBTY29yZVxudmFyIG15U2NvcmUgPSBuZXcgU2NvcmUoe25hbWU6XCJTY29yZVwifSk7XG5jb25zb2xlLmxvZyhteVNjb3JlLmdldE5hbWUoKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9UZXN0IFN0YXRpY1RleHRcbnZhciBteVN0YXRpY1RleHQgPSBuZXcgU3RhdGljVGV4dCh7bmFtZTpcIlN0YXRpY1RleHRcIn0pO1xuY29uc29sZS5sb2cobXlTdGF0aWNUZXh0LmdldE5hbWUoKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9UZXN0IElkZW50aXR5XG52YXIgbXlJZGVudGl0eSA9IG5ldyBJZGVudGl0eSh7bmFtZTpcIklkZW50aXR5XCJ9KTtcbmNvbnNvbGUubG9nKG15SWRlbnRpdHkuZ2V0TmFtZSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rlc3QgSW5zdHJ1Y3Rpb25zXG52YXIgbXlJbnN0cnVjdGlvbnMgPSBuZXcgSW5zdHJ1Y3Rpb25zKHtuYW1lOlwiSW5zdHJ1Y3Rpb25zXCJ9KTtcbmNvbnNvbGUubG9nKG15SW5zdHJ1Y3Rpb25zLmdldE5hbWUoKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9URVNUIENIQVJBQ1RFUi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBHb3JpbGxhXG52YXIgbXlHb3JpbGxhID0gbmV3IEdvcmlsbGEgKHtuYW1lOlwiU3B1bmt5XCJ9KTtcbmNvbnNvbGUubG9nKG15R29yaWxsYS5nZXROYW1lKCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBCZWFyXG52YXIgbXlCZWFyID0gbmV3IEJlYXIgKHtuYW1lOlwiU2NhcnlcIn0pO1xuY29uc29sZS5sb2cobXlCZWFyLmdldE5hbWUoKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9UZXN0IFRpZ2VyXG52YXIgbXlUaWdlciA9IG5ldyBUaWdlciAoe25hbWU6XCJIZWFyIG1lIFJvYXJcIn0pO1xuY29uc29sZS5sb2cobXlUaWdlci5nZXROYW1lKCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBMaW9uXG52YXIgbXlMaW9uID0gbmV3IExpb24gKHtuYW1lOlwiS2luZyBvZiB0aGUgSnVuZ2xlXCJ9KTtcbmNvbnNvbGUubG9nKG15TGlvbi5nZXROYW1lKCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBIZWFsdGhcbnZhciBteUhlYWx0aCA9IG5ldyBIZWFsdGggKHtuYW1lOlwiSGVhbHRoXCJ9KTtcbmNvbnNvbGUubG9nKG15SGVhbHRoLmdldE5hbWUoKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9UZXN0IEFuaW1hbFxudmFyIG15QW5pbWFsID0gbmV3IEFuaW1hbCAoe25hbWU6XCJBbmltYWxcIn0pO1xuY29uc29sZS5sb2cobXlBbmltYWwuZ2V0TmFtZSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rlc3QgUGxheWVyXG52YXIgbXlQbGF5ZXIgPSBuZXcgUGxheWVyICh7bmFtZTpcIlBsYXllclwifSk7XG5jb25zb2xlLmxvZyhteVBsYXllci5nZXROYW1lKCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBUcnVtcFxudmFyIG15VHJ1bXAgPSBuZXcgVHJ1bXAgKHtuYW1lOlwiVHJ1bXBcIn0pO1xuY29uc29sZS5sb2cobXlUcnVtcC5nZXROYW1lKCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBDaGFyYWN0ZXJcbnZhciBteUNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIgKHtuYW1lOlwiQ2hhcmFjdGVyXCJ9KTtcbmNvbnNvbGUubG9nKG15Q2hhcmFjdGVyLmdldE5hbWUoKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9URVNUIEFSRUEvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rlc3QgQXJlYVxudmFyIG15QXJlYSA9IG5ldyBBcmVhICh7bmFtZTpcIkFyZWFcIn0pO1xuY29uc29sZS5sb2cobXlBcmVhLmdldE5hbWUoKSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9UZXN0IENhZ2VcbnZhciBteUNhZ2UgPSBuZXcgQ2FnZSAoe25hbWU6XCJDYWdlXCJ9KTtcbmNvbnNvbGUubG9nKG15Q2FnZS5nZXROYW1lKCkpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGVzdCBBbmltYWxBcmVhXG52YXIgbXlBbmltYWxBcmVhID0gbmV3IEFuaW1hbEFyZWEgKHtuYW1lOlwiQW5pbWFsQXJlYVwifSk7XG5jb25zb2xlLmxvZyhteUFuaW1hbEFyZWEuZ2V0TmFtZSgpKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rlc3QgUGxheWVyQXJlYVxudmFyIG15UGxheWVyQXJlYSA9IG5ldyBQbGF5ZXJBcmVhICh7bmFtZTpcIlBsYXllckFyZWFcIn0pO1xuY29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XG5cbi8vLy8vLy8vLy8vLyBubyBsb25nZXIgbmVlZGVkIHZhciBjb25maWcyID0ge1xuLy8vLy8vLy8vLy8vIG5vIGxvbmdlciBuZWVkZWQgIG5hbWU6ICdUaHVkIE11dHRvbiwgRXNxJ1xuLy8vLy8vLy8vLy8vIG5vIGxvbmdlciBuZWVkZWQgfTtcblxuLy8vLy8vLy8vLy8vIG5vIGxvbmdlciBuZWVkZWQgdmFyIHNvbWV0aGluZyA9IG5ldyBHYW1lUGllY2UoY29uZmlnMilcbi8vLy8vLy8vLy8vLyBubyBsb25nZXIgbmVlZGVkIGNvbnNvbGUubG9nKHNvbWV0aGluZy5nZXROYW1lKCkpXG5cbi8vdmFyIGFyZWEgPSBuZXcgQXJlYShjb25maWcpO1xuLy9jb25zb2xlLmxvZyhhcmVhLmdldE5hbWUoKSk7XG5cbi8vdmFyIGNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoY29uZmlnKTtcbi8vdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoY29uZmlnKTtcbiJdfQ==
