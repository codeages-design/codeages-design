(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cd"] = factory();
	else
		root["cd"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_btn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_radio__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_checkbox__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_switch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_loading__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_upload__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_table__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_alert__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_tag__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_confirm__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_message__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_tooltip__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "btn", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_btn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radio", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_radio__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "checkbox", function() { return __WEBPACK_IMPORTED_MODULE_2__lib_checkbox__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "onoff", function() { return __WEBPACK_IMPORTED_MODULE_3__lib_switch__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return __WEBPACK_IMPORTED_MODULE_4__lib_loading__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return __WEBPACK_IMPORTED_MODULE_5__lib_upload__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return __WEBPACK_IMPORTED_MODULE_6__lib_table__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_alert__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return __WEBPACK_IMPORTED_MODULE_8__lib_tag__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return __WEBPACK_IMPORTED_MODULE_9__lib_confirm__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "message", function() { return __WEBPACK_IMPORTED_MODULE_10__lib_message__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tooltip", function() { return __WEBPACK_IMPORTED_MODULE_11__lib_tooltip__["a"]; });















/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Btn = function () {
  function Btn(props) {
    _classCallCheck(this, Btn);

    Object.assign(this, {
      text: 'loading...'
    }, props);

    this.$el = $(this.el);
    this.oldText = this.$el.html();
    this.text = this.$el.data('loadingText') || this.text;
  }

  _createClass(Btn, [{
    key: 'loading',
    value: function loading() {
      this.$el.html(this.text).prop('disabled', true);
      return this;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.$el.html(this.oldText).prop('disabled', false);
      return this;
    }
  }]);

  return Btn;
}();

function btn(props) {
  return new Btn(props);
}

/* harmony default export */ __webpack_exports__["a"] = (btn);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radio = function () {
  function Radio(props, callback) {
    _classCallCheck(this, Radio);

    Object.assign(this, {
      parent: document,
      callback: callback
    }, props);

    this.init();
  }

  _createClass(Radio, [{
    key: 'init',
    value: function init() {
      this.events();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      $(this.parent).on('click.cd.radio', this.el, function (event) {
        return _this.clickEvent(event);
      });
    }
  }, {
    key: 'clickEvent',
    value: function clickEvent(event) {
      event.stopPropagation();
      var $this = $(event.currentTarget);

      $this.parent().addClass('checked').siblings().removeClass('checked');

      this.cb(event);
      this.callback && this.callback(event);
    }

    // @todo 废弃，请使用callback代替

  }, {
    key: 'cb',
    value: function cb() {}
  }]);

  return Radio;
}();

function radio(props, callback) {
  return new Radio(props, callback);
}

// DATA-API
$(document).on('click.cd.radio.data-api', '[data-toggle="cd-radio"]', function (event) {
  event.stopPropagation();
  var $this = $(event.currentTarget);

  $this.parent().addClass('checked').siblings().removeClass('checked');
});

/* harmony default export */ __webpack_exports__["a"] = (radio);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Checkbox = function () {
  function Checkbox(props, callback) {
    _classCallCheck(this, Checkbox);

    Object.assign(this, {
      parent: document,
      callback: callback
    }, props);

    this.init();
  }

  _createClass(Checkbox, [{
    key: 'init',
    value: function init() {
      this.events();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      $(this.parent).on('click.cd.checkbox', this.el, function (event) {
        return _this.clickEvent(event);
      });
    }
  }, {
    key: 'clickEvent',
    value: function clickEvent(event) {
      event.stopPropagation();
      var $this = $(event.currentTarget);

      if ($this.parent().hasClass('checked')) {
        $this.parent().removeClass('checked');
      } else {
        $this.parent().addClass('checked');
      }

      this.callback && this.callback(event);
    }
  }]);

  return Checkbox;
}();

function checkbox(props, callback) {
  return new Checkbox(props, callback);
}

// DATA-API
$(document).on('click.cd.checkbox.data-api', '[data-toggle="cd-checkbox"]', function (event) {
  event.stopPropagation();
  var $this = $(event.currentTarget);

  if ($this.parent().hasClass('checked')) {
    $this.parent().removeClass('checked');
  } else {
    $this.parent().addClass('checked');
  }
});

/* harmony default export */ __webpack_exports__["a"] = (checkbox);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Switch = function () {
  function Switch(props, callback) {
    _classCallCheck(this, Switch);

    Object.assign(this, {
      parent: document,
      callback: callback
    }, props);

    this.init();
  }

  _createClass(Switch, [{
    key: 'init',
    value: function init() {
      this.events();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      $(this.parent).on('click.cd.switch', this.el, function (event) {
        return _this.clickEvent(event);
      });
    }
  }, {
    key: 'clickEvent',
    value: function clickEvent(event) {
      event.stopPropagation();
      var $this = $(event.currentTarget);

      if ($this.parent().hasClass('checked')) {
        $this.parent().removeClass('checked');
      } else {
        $this.parent().addClass('checked');
      }

      this.callback && this.callback(event);
    }
  }]);

  return Switch;
}();

function onoff(props, callback) {
  return new Switch(props, callback);
}

// DATA-API
$(document).on('click.cd.switch.data-api', '[data-toggle="cd-switch"]', function (event) {
  event.stopPropagation();
  var $this = $(event.currentTarget);

  if ($this.parent().hasClass('checked')) {
    $this.parent().removeClass('checked');
  } else {
    $this.parent().addClass('checked');
  }
});

/* harmony default export */ __webpack_exports__["a"] = (onoff);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var loading = function loading() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isFixed: false },
      isFixed = _ref.isFixed;

  return '<div class="cd-loading ' + (isFixed ? 'cd-loading-fixed' : '') + '">\n            <div class="loading-content">\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>';
};

/* harmony default export */ __webpack_exports__["a"] = (loading);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Upload = function () {
  function Upload(props) {
    _classCallCheck(this, Upload);

    Object.assign(this, {
      parent: document,
      type: 'normal',
      fileTypes: ['image/bmp', 'image/jpeg', 'image/png'],
      fileSize: 2 * 1024 * 1024
    }, props);

    this.init();
  }

  _createClass(Upload, [{
    key: 'init',
    value: function init() {
      this.events();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      $(this.parent).on('change.cd.local-upload', this.el, function (event) {
        return _this.uploadEvent(event);
      });
    }
  }, {
    key: 'uploadEvent',
    value: function uploadEvent(event) {
      var target = event.currentTarget;
      var self = this;

      var fr = new FileReader();

      if (!self.catch(event)) {
        return;
      };

      fr.onload = function (e) {
        var src = e.target.result;

        try {
          self[self.type](event, src);
        } catch (e) {
          throw new Error(self.type + ' type does not exist');
        }
      };

      fr.readAsDataURL($(target)[0].files[0]);
    }
  }, {
    key: 'catch',
    value: function _catch(event) {
      // 文件大小限制
      var FILE_SIZE_LIMIT = 'FILE_SIZE_LIMIT';
      // 文件类型限制
      var FLIE_TYPE_LIMIT = 'FLIE_TYPE_LIMIT';

      var target = event.currentTarget;
      var file = $(target)[0].files[0];

      if (file.size > this.fileSize) {
        this.error(FILE_SIZE_LIMIT);
        return false;
      }

      if (!this.fileTypes.includes(file.type)) {
        this.error(FLIE_TYPE_LIMIT);
        return false;
      }

      return true;
    }
  }, {
    key: 'normal',
    value: function normal(event, src) {
      var $this = $(event.currentTarget);
      var $target = $($this.data('target'));

      if ($target) {
        $target.css('background-image', 'url(' + src + ')');
        this.success(event, $target);
      } else {
        this.success(event, src);
      }
    }
  }, {
    key: 'crop',
    value: function crop(event, src) {
      var image = new Image();
      var $this = $(event.currentTarget);
      var self = this;

      image.onload = function () {
        var width = image.width;
        var height = image.height;
        var cropWidth = $this.data('crop-width');
        var cropHeight = $this.data('crop-height');

        var scale = self.imageScale({
          naturalWidth: width,
          naturalHeight: height,
          cropWidth: cropWidth,
          cropHeight: cropHeight
        });

        var $image = $(image);

        $image.attr({
          'class': 'hidden',
          'data-natural-width': width,
          'data-natural-height': height,
          'width': scale.width,
          'height': scale.height
        });

        self.success(event, $image);
      };

      image.src = src;
    }
  }, {
    key: 'imageScale',
    value: function imageScale(_ref) {
      var naturalWidth = _ref.naturalWidth,
          naturalHeight = _ref.naturalHeight,
          cropWidth = _ref.cropWidth,
          cropHeight = _ref.cropHeight;

      var width = cropWidth;
      var height = cropHeight;

      var naturalScale = naturalWidth / naturalHeight;
      var cropScale = cropWidth / cropHeight;

      if (naturalScale > cropScale) {
        width = naturalScale * cropWidth;
      } else {
        height = cropHeight / naturalScale;
      }

      return {
        width: width,
        height: height
      };
    }
  }, {
    key: 'success',
    value: function success() {
      console.log('upload.success');
    }
  }, {
    key: 'error',
    value: function error(code) {
      console.log('upload.error', code);
    }
  }]);

  return Upload;
}();

function upload(props) {
  return new Upload(props);
}

// HOW TO USE
// cd.upload({
//   el: '',
//   type: 'normal',
//   success() {

//   },
//   error(code) {

//   }
// })

/* harmony default export */ __webpack_exports__["a"] = (upload);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = function () {
  function Table(props) {
    _classCallCheck(this, Table);

    Object.assign(this, {
      filterEl: '[data-toggle="table-filter"]',
      sortEl: '[data-toggle="table-sort"]',
      parent: document
    }, props);

    this.init();
  }

  _createClass(Table, [{
    key: 'init',
    value: function init() {
      this.events();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      $(this.parent).on('click.cd.table.filter', this.filterEl, function (event) {
        return _this.filterEvent(event);
      });
      $(this.parent).on('click.cd.table.sort', this.sortEl, function (event) {
        return _this.sortEvent(event);
      });
    }
  }, {
    key: 'filterEvent',
    value: function filterEvent(event) {
      var $this = $(event.currentTarget);

      if ($this.closest('li').hasClass('active')) {
        return;
      }

      var $target = $($this.data('target'));
      var url = $target.data('url');

      var filterStr = $this.data('filter');
      $target.data('filter', filterStr);

      if (filterStr) {
        url = url + '?' + filterStr;
      }

      var sortStr = $target.data('sort');
      if (sortStr) {
        url = url + '&' + sortStr;
      }

      this.cb($target, url);
    }
  }, {
    key: 'sortEvent',
    value: function sortEvent(event) {
      var $this = $(event.currentTarget);

      var $target = $($this.data('target'));
      var url = $target.data('url');

      var sortKey = $this.data('sort-key');
      var sortValue = 'desc';

      var $sortIcon = $this.find('.active');
      if ($sortIcon.length) {
        sortValue = $sortIcon.siblings().data('sort-value');
      }

      var sortStr = sortKey + '=' + sortValue;
      $target.data('sort', sortStr);
      url = url + '?' + sortStr;

      var filterStr = $target.data('filter');
      if (filterStr) {
        url = url + '&' + filterStr;
      }

      this.cb($target, url);
    }
  }, {
    key: 'cb',
    value: function cb() {}
  }]);

  return Table;
}();

function table(props) {
  return new Table(props);
}

/* harmony default export */ __webpack_exports__["a"] = (table);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Alert = function () {
  function Alert(props) {
    _classCallCheck(this, Alert);

    Object.assign(this, {
      parent: document
    }, props);

    this.init();
  }

  _createClass(Alert, [{
    key: 'init',
    value: function init() {
      this.events();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      $(this.parent).on('click.cd.alert.close', this.closeEl, function (event) {
        return _this.closeEvent(event);
      });
    }
  }, {
    key: 'closeEvent',
    value: function closeEvent(event) {
      var $this = $(event.currentTarget);
      var $parent = $this.parent();
      $parent.addClass('cd-hide');

      setTimeout(function () {
        $parent.remove();
      }, 300);

      this.close(event);
    }
  }, {
    key: 'close',
    value: function close(event) {}
  }]);

  return Alert;
}();

function alert(props) {
  return new Alert(props);
}

// DATA-API
$(document).on('click.cd.alert.close.data-api', '[data-toggle="cd-alert-close"]', function (event) {
  event.stopPropagation();
  var $this = $(event.currentTarget);
  var $parent = $this.parent();
  $parent.addClass('cd-hide');

  setTimeout(function () {
    $parent.remove();
  }, 300);
});

/* harmony default export */ __webpack_exports__["a"] = (alert);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tag = function () {
  function Tag(props) {
    _classCallCheck(this, Tag);

    Object.assign(this, {
      parent: document
    }, props);

    this.init();
  }

  _createClass(Tag, [{
    key: 'init',
    value: function init() {
      this.events();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      $(this.parent).on('click.cd.tag.close', this.closeEl, function (event) {
        return _this.closeEvent(event);
      });
    }
  }, {
    key: 'closeEvent',
    value: function closeEvent(event) {
      var $this = $(event.currentTarget);
      var $parent = $this.parent();
      $parent.addClass('cd-hide');

      setTimeout(function () {
        $parent.remove();
      }, 300);

      this.close(event);
    }
  }, {
    key: 'close',
    value: function close(event) {}
  }]);

  return Tag;
}();

function tag(props) {
  return new Tag(props);
}

// DATA-API
$(document).on('click.cd.tag.close.data-api', '[data-toggle="cd-tag-close"]', function (event) {
  event.stopPropagation();
  var $this = $(event.currentTarget);
  var $parent = $this.parent();
  $parent.addClass('cd-hide');

  setTimeout(function () {
    $parent.remove();
  }, 300);
});

/* harmony default export */ __webpack_exports__["a"] = (tag);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;

var Confirm = function () {
  function Confirm(props) {
    _classCallCheck(this, Confirm);

    Object.assign(this, {
      title: '',
      content: '',
      okText: 'Confirm',
      cancelText: 'Cancel',
      confirmClass: ''
    }, props);

    this.$backdrop = null;
    this.$body = $(document.body);
    this.$modal = null;

    this.init();
  }

  _createClass(Confirm, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.addDrop();

      var html = this.template();
      this.$modal = $(html);
      this.$modal.appendTo(this.$body.addClass('cd-modal-open'));

      setTimeout(function () {
        _this.$modal.addClass('cd-in');
      }, TRANSITION_DURATION);

      this.events();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this2 = this;

      this.$modal.on('click', '[data-toggle="cd-confirm-cancel"]', function (event) {
        return _this2.cancelEvent(event);
      });
      this.$modal.on('click', '[data-toggle="cd-confirm-ok"]', function (event) {
        return _this2.okEvent(event, _this2.$modal);
      });
    }
  }, {
    key: 'cancelEvent',
    value: function cancelEvent(event) {
      this.rmConfirm(event);
      this.cancel(event);
    }
  }, {
    key: 'okEvent',
    value: function okEvent(event, $confirm) {
      this.rmConfirm(event);
      this.ok(event, $confirm);
    }
  }, {
    key: 'rmConfirm',
    value: function rmConfirm(event) {
      var _this3 = this;

      this.$modal.removeClass('cd-in');

      setTimeout(function () {
        _this3.$body.removeClass('cd-modal-open');
        _this3.$modal.remove();
        _this3.rmDrop();
      }, TRANSITION_DURATION);
    }
  }, {
    key: 'cancel',
    value: function cancel(event) {}
  }, {
    key: 'ok',
    value: function ok(event, $confirm) {}
  }, {
    key: 'template',
    value: function template() {
      var modalHeader = this.title ? '\n      <div class="modal-header">\n        <h4 class="modal-title">' + this.title + '</h4>\n      </div>\n    ' : '';

      var modalBody = '\n      <div class="modal-body">\n        <div class="cd-pb24 cd-text-gray-dark">\n          ' + this.content + '\n        </div>\n      </div>\n    ';

      var modalFooter = '\n      <div class="modal-footer">\n        <button class="cd-btn cd-btn-link-default cd-btn-lg" type="button" data-toggle="cd-confirm-cancel">\n          ' + this.cancelText + '\n        </button>\n        <button class="cd-btn cd-btn-link-primary cd-btn-lg" type="button" data-toggle="cd-confirm-ok">\n          ' + this.okText + '\n        </button>\n      </div>\n    ';

      return '\n      <div class="cd-modal ' + this.confirmClass + ' cd-fade" style="display:block">\n        <div class="cd-modal-dialog cd-modal-dialog-sm">\n          <div class="modal-content">\n            ' + modalHeader + '\n            ' + modalBody + '\n            ' + modalFooter + '\n          </div>\n        </div>\n      </div>\n    ';
    }
  }, {
    key: 'rmDrop',
    value: function rmDrop() {
      this.$backdrop.remove();
      this.$backdrop = null;
    }
  }, {
    key: 'addDrop',
    value: function addDrop() {
      var _this4 = this;

      this.$backdrop = $(document.createElement('dev'));
      this.$backdrop.addClass('cd-modal-backdrop cd-fade').appendTo(this.$body);

      setTimeout(function () {
        _this4.$backdrop.addClass('cd-in');
      }, BACKDROP_TRANSITION_DURATION);
    }
  }]);

  return Confirm;
}();

function confirm(props) {
  return new Confirm(props);
}

/* harmony default export */ __webpack_exports__["a"] = (confirm);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TRANSITION_DURATION = 300;

var Message = function () {
  function Message(props) {
    _classCallCheck(this, Message);

    Object.assign(this, {
      type: '',
      message: '',
      action: {
        title: '',
        url: '',
        template: ''
      },
      delay: 3000,
      animate: {
        enter: 'cd-animated cd-fadeInDownSmall',
        exit: 'cd-animated cd-fadeOutUp'
      },
      offset: 80,
      z_index: 9999
    }, props);

    this.$message = null;
    this.$body = $(document.body);

    this.init();
  }

  _createClass(Message, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.template();
      setTimeout(function () {
        return _this.close();
      }, this.delay);
    }
  }, {
    key: 'template',
    value: function template() {
      this.$message = $(document.createElement('div')).addClass('cd-message-warp');

      var actionHtml = '';
      if (this.action.template) {
        actionHtml = '<span class="cd-message-action">' + this.action.template + '</span>';
      } else if (this.action.title) {
        actionHtml = '<span class="cd-message-action"><a href="' + this.action.url + '" target="_blank">' + this.action.title + '</a></span>';
      }

      var html = '\n      <div class="cd-message cd-message-' + this.type + '">\n        <i class="cd-icon cd-icon-' + this.type + '"></i>\n        <span>' + this.message + '</span>\n        ' + actionHtml + '\n      </div>\n    ';

      this.$message.addClass(this.animate.enter).css({
        top: this.offset + 'px',
        left: 0,
        right: 0,
        'z-index': this.z_index,
        position: 'fixed'
      });

      this.$message.html(html).appendTo(this.$body);
    }
  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      this.$message.removeClass(this.animate.enter).addClass(this.animate.exit);

      setTimeout(function () {
        _this2.$message.remove();
        _this2.$message = null;
      }, TRANSITION_DURATION);
    }
  }]);

  return Message;
}();

function message(props) {
  return new Message(props);
}

/* harmony default export */ __webpack_exports__["a"] = (message);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var TRANSITION_DURATION = 300;

var Tooltip = function () {
  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    Object.assign(this, {
      parent: document,
      container: document.body,
      viewport: document.body,
      element: '[data-toggle="cd-tooltip"]',
      placement: 'top',
      offset: 10,
      delay: 0,
      title: 'Plase add title',
      type: 'tooltip'
    }, props);

    this.init();
  }

  _createClass(Tooltip, [{
    key: 'init',
    value: function init() {
      this.events();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      $(this.parent).on('mouseenter.cd.tooltip', this.element, function (event) {
        return _this.showEvent(event);
      });
      $(this.parent).on('mouseleave.cd.tooltip', this.element, function (event) {
        return _this.closeEvent(event);
      });
    }
  }, {
    key: 'showEvent',
    value: function showEvent(event) {
      var _this2 = this;

      event.stopPropagation();
      var $this = $(event.currentTarget);

      Object.assign(this, {
        container: $this.data('container') ? $this.data('container') : this.container,
        title: $this.data('title') ? $this.data('title') : this.title,
        placement: $this.data('placement') ? $this.data('placement') : this.placement
      });

      this.$template ? this.$template.remove() : null;

      this.$template = $(document.createElement('div')).addClass('cd-tooltip').attr('id', this.getUID(this.type)).html(this.title);

      this.container ? this.$template.appendTo(this.container) : this.$template.insertAfter($this);

      var position = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getPosition */])(event.currentTarget);
      var width = this.$template[0].offsetWidth;
      var height = this.$template[0].offsetHeight;

      this.$template.css(this.setCss(this.placement, position, width, height)).addClass(this.placement);

      clearTimeout(this.timeout);

      this.timeout = setTimeout(function () {
        _this2.$template.addClass('cd-in');
      }, TRANSITION_DURATION + this.delay);
    }
  }, {
    key: 'getUID',
    value: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * 1000000);
      } while (document.getElementById(prefix));
      return prefix;
    }
  }, {
    key: 'fixPlacement',
    value: function fixPlacement(position, width, height) {
      var viewportPos = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getPosition */])(this.viewport);

      switch (this.placement) {
        case 'bottom':
          if (position.bottom + height > viewportPos.bottom) {
            return 'top';
            break;
          }
        case 'bottomLeft':
          if (position.bottom + height > viewportPos.bottom) {
            return 'topLeft';
            break;
          }
        case 'bottomRight':
          if (position.bottom + height > viewportPos.bottom) {
            return 'topRight';
            break;
          }
        case 'top':
          if (position.top - height < viewportPos.top) {
            return 'bottom';
            break;
          }
        case 'topLeft':
          if (position.top - height < viewportPos.top) {
            return 'bottomLeft';
            break;
          }
        case 'topRight':
          if (position.top - height < viewportPos.top) {
            return 'bottomRight';
            break;
          }
        case 'right':
          if (position.right + width > viewportPos.width) {
            return 'left';
            break;
          }
        case 'rightTop':
          if (position.right + width > viewportPos.width) {
            return 'leftTop';
            break;
          }
        case 'rightBottom':
          if (position.right + width > viewportPos.width) {
            return 'leftBottom';
            break;
          }
        case 'left':
          if (position.left - width < viewportPos.left) {
            return 'right';
            break;
          }
        case 'leftTop':
          if (position.left - width < viewportPos.left) {
            return 'rightBottom';
            break;
          }
        case 'leftBottom':
          if (position.left - width < viewportPos.left) {
            return 'rightBottom';
            break;
          }
      }

      return this.placement;
    }
  }, {
    key: 'setCss',
    value: function setCss(position, width, height) {
      this.placement = this.fixPlacement(position, width, height);

      var placements = {
        topLeft: {
          top: position.top - height - this.offset,
          left: position.left
        },
        top: {
          top: position.top - height - this.offset,
          left: position.left + position.width / 2 - width / 2
        },
        topRight: {
          top: position.top - height - this.offset,
          left: position.left + position.width - width
        },
        leftTop: {
          top: position.top,
          left: position.left - width - this.offset
        },
        left: {
          top: position.top + position.height / 2 - height / 2,
          left: position.left - width - this.offset
        },
        leftBottom: {
          top: position.top + position.height - height,
          left: position.left - width - this.offset
        },
        rightTop: {
          top: position.top,
          left: position.left + position.width + this.offset
        },
        right: {
          top: position.top + position.height / 2 - height / 2,
          left: position.left + position.width + this.offset
        },
        rightBottom: {
          top: position.top + position.height - height,
          left: position.left + position.width + this.offset
        },
        bottomLeft: {
          top: position.top + position.height + this.offset,
          left: position.left
        },
        bottom: {
          top: position.top + position.height + this.offset,
          left: position.left + position.width / 2 - width / 2
        },
        bottomRight: {
          top: position.top + position.height + this.offset,
          left: position.left + position.width - width
        }
      };

      return placements[this.placement];
    }
  }, {
    key: 'closeEvent',
    value: function closeEvent(event) {
      var _this3 = this;

      this.$template.removeClass('cd-in');

      clearTimeout(this.timeout);

      this.timeout = setTimeout(function () {
        _this3.$template.remove();
        _this3.$template = null;
      }, TRANSITION_DURATION);
    }
  }]);

  return Tooltip;
}();

function tooltip(props) {
  return new Tooltip(props);
}

/* harmony default export */ __webpack_exports__["a"] = (tooltip);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPosition; });
var getPosition = function getPosition(el) {
  var elRect = el.getBoundingClientRect();
  var isBody = el.tagName == 'BODY';
  var elOffset = isBody ? { top: 0, left: 0 } : $(el).offset();
  var scroll = {
    scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $(el).scrollTop()
  };
  var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

  return $.extend({}, elRect, scroll, outerDims, elOffset);
};

/***/ })
/******/ ]);
});