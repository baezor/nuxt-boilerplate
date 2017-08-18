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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/***/ (function(module, exports) {

module.exports = require("formidable");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require babel-register and set Babel presets options to es2015
__webpack_require__(5)({
  presets: ['es2015']
});

__webpack_require__(6);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _nuxt = __webpack_require__(7);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(8);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// MongoDb
var mongodbhost = process.env.MONGO_URL || 'mongodb://localhost/portfolio';
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(mongodbhost);

// Body-parser settings
app.use(_bodyParser2.default.json()); // to support JSON-encoded bodies
app.use(_bodyParser2.default.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

// Import API Router
app.use('/api', _routes2.default);

// Import and Set Nuxt.js options
var config = __webpack_require__(14);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new _nuxt.Nuxt(config);

// Build only in dev mode
if (config.dev) {
  var builder = new _nuxt.Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _case = __webpack_require__(10);

var _case2 = _interopRequireDefault(_case);

var _openSource = __webpack_require__(12);

var _openSource2 = _interopRequireDefault(_openSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

// Add Cases Routes
router.use(_case2.default);

// Add OpenSource Routes
router.use(_openSource2.default);

exports.default = router;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _case = __webpack_require__(11);

var _case2 = _interopRequireDefault(_case);

var _formidable = __webpack_require__(2);

var _formidable2 = _interopRequireDefault(_formidable);

var _fs = __webpack_require__(3);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

/* GET all cases */
router.get('/cases', function (req, res) {
  _case2.default.find({}, function (err, cases) {
    if (err) res.send(err);
    res.json(cases);
  });
});

/* GET one case by slug */
router.get('/cases/:slug', function (req, res) {
  _case2.default.findOne({ slug: req.params.slug }, function (err, oneCase) {
    if (err) res.send(err);
    res.json(oneCase);
  });
});

/* POST create new case */
router.post('/case', function (req, res) {
  var form = new _formidable2.default.IncomingForm();
  var uploadDir = 'static/storage';
  form.multiples = true;
  form.keepExtensions = true;
  form.onPart = function (part) {
    form.handlePart(part);
  };
  form.parse(req, function (err, fields, files) {
    if (!_fs2.default.existsSync(uploadDir + '/' + fields.title)) {
      _fs2.default.mkdirSync(uploadDir + '/' + fields.title);
    }
    form.uploadDir = uploadDir + '/' + fields.title;
    var images = [];
    if (typeof files['uploads[]'] !== 'undefined') {
      if (typeof files['uploads[]'][0] !== 'undefined') {
        files['uploads[]'].forEach(function (file) {
          _fs2.default.rename(file.path, form.uploadDir + "/" + file.name);
          images.push('/storage/' + fields.title + '/' + file.name);
        });
      } else {
        _fs2.default.rename(files['uploads[]'].path, form.uploadDir + "/" + files['uploads[]'].name);
        images.push('/storage/' + fields.title + '/' + files['uploads[]'].name);
      }
      fields.images = images;
    }
    var new_case = new _case2.default(fields);
    new_case.save(function (err, caseData) {
      if (err) res.send(err);
      res.json(caseData);
    });
  });
});

exports.default = router;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var CaseSchema = new Schema({
  title: {
    type: String,
    Required: 'Kindly enter the title of case'
  },
  slug: {
    type: String,
    Required: 'Slug is required'
  },
  category: {
    type: String
  },
  desc: {
    type: String
  },
  year: {
    type: Number
  },
  link: {
    type: String
  },
  images: {
    type: Array
  }
});

module.exports = mongoose.model('Case', CaseSchema);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _openSource = __webpack_require__(13);

var _openSource2 = _interopRequireDefault(_openSource);

var _formidable = __webpack_require__(2);

var _formidable2 = _interopRequireDefault(_formidable);

var _fs = __webpack_require__(3);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

/* GET all open source projects */
router.get('/open-source', function (req, res) {
  _openSource2.default.find({}, function (err, openSources) {
    if (err) res.send(err);
    res.json(openSources);
  });
});

/* GET one open source project by slug */
router.get('/open-source/:slug', function (req, res) {
  _openSource2.default.findOne({ slug: req.params.slug }, function (err, openSource) {
    if (err) res.send(err);
    res.json(openSource);
  });
});

/* POST create new open source project */
router.post('/open-source', function (req, res) {
  var form = new _formidable2.default.IncomingForm();
  var uploadDir = 'static/storage';
  form.multiples = true;
  form.keepExtensions = true;
  form.onPart = function (part) {
    form.handlePart(part);
  };
  form.parse(req, function (err, fields, files) {
    if (!_fs2.default.existsSync(uploadDir + '/' + fields.title)) {
      _fs2.default.mkdirSync(uploadDir + '/' + fields.title);
    }
    form.uploadDir = uploadDir + '/' + fields.title;
    var images = [];
    if (typeof files['uploads[]'] !== 'undefined') {
      if (typeof files['uploads[]'][0] !== 'undefined') {
        files['uploads[]'].forEach(function (file) {
          _fs2.default.rename(file.path, form.uploadDir + "/" + file.name);
          images.push('/storage/' + fields.title + '/' + file.name);
        });
      } else {
        _fs2.default.rename(files['uploads[]'].path, form.uploadDir + "/" + files['uploads[]'].name);
        images.push('/storage/' + fields.title + '/' + files['uploads[]'].name);
      }
      fields.images = images;
    }
  });
  var new_case = new _openSource2.default(req.body);
  new_case.save(function (err, openSource) {
    if (err) res.send(err);
    res.json(openSource);
  });
});

exports.default = router;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var OpenSourceSchema = new Schema({
  title: {
    type: String,
    Required: 'Kindly enter the title of case'
  },
  slug: {
    type: String,
    Required: 'Slug is required'
  },
  category: {
    type: String
  },
  desc: {
    type: String
  },
  year: {
    type: Number
  },
  link: {
    type: String
  }
});

module.exports = mongoose.model('OpenSource', OpenSourceSchema);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bitter End',
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
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map