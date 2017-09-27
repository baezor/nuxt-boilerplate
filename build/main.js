require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require babel-register and set Babel presets options to es2015
__webpack_require__(3)({
  presets: ['es2015']
});

__webpack_require__(4);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _nuxt = __webpack_require__(5);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(6);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// MongoDb
var mongodbhost = process.env.MONGO_URL || 'mongodb://localhost/nuxtboilerplate';
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(mongodbhost);

// Body-parser settings
app.use(_bodyParser2.default.json()); // to support JSON-encoded bodies
app.use(_bodyParser2.default.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

// Import and Set Nuxt.js options
var config = __webpack_require__(10);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new _nuxt.Nuxt(config);

// Build only in dev mode
if (config.dev) {
  var builder = new _nuxt.Builder(nuxt);
  builder.build();
}

// Import API Router
app.use(config.env.apiRoot, _routes2.default);

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _item = __webpack_require__(8);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

// Add Items Routes
router.use(_item2.default);

exports.default = router;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _Item = __webpack_require__(9);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var model = _Item2.default;

router.route('/item')
// index -> GET items
.get(function (req, res) {
  model.find({}, function (err, item) {
    if (err) res.status(500).send(err);
    res.json(item);
  });
})
// create -> POST create new item
.post(function (req, res) {
  new model(req.body).save(function (err, data) {
    if (err) res.status(500).send(err);
    res.json(data);
  });
})
// update -> PUT update existing item
.put(function (req, res) {
  model.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, function (err, data) {
    if (err) res.status(500).send(err);
    res.json(data);
  });
})
// destroy -> DELETE delete existing item
.delete(function (req, res) {
  var _id = req.query.id;
  model.remove({ _id: _id }, function (err, data) {
    if (err) res.status(404).send(err);
    res.json(data);
  });
});

router.route('/item/:id')
// show -> GET single item
.get(function (req, res) {
  model.findById(req.params.id, function (err, item) {
    if (err) res.status(404).send(err);
    res.json(item);
  });
});

exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  title: {
    type: String,
    Required: 'Kindly enter the title of item'
  }
});

module.exports = mongoose.model('Item', ItemSchema);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt + MongoDB boilerplate',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  /*
  ** Plugins
  */
  plugins: ['~/plugins/global.js'],
  /*
  ** Environment variables
  */
  env: {
    apiRoot: '/api'
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map