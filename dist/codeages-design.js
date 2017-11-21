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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.btn = exports.alert = exports.table = exports.upload = exports.loading = exports.confirm = exports.radio = undefined;

var _radio = __webpack_require__(3);

var _radio2 = _interopRequireDefault(_radio);

var _confirm = __webpack_require__(4);

var _confirm2 = _interopRequireDefault(_confirm);

var _loading = __webpack_require__(5);

var _loading2 = _interopRequireDefault(_loading);

var _upload = __webpack_require__(6);

var _upload2 = _interopRequireDefault(_upload);

var _table = __webpack_require__(7);

var _table2 = _interopRequireDefault(_table);

var _alert = __webpack_require__(8);

var _alert2 = _interopRequireDefault(_alert);

var _btn = __webpack_require__(9);

var _btn2 = _interopRequireDefault(_btn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.radio = _radio2.default;
exports.confirm = _confirm2.default;
exports.loading = _loading2.default;
exports.upload = _upload2.default;
exports.table = _table2.default;
exports.alert = _alert2.default;
exports.btn = _btn2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radio = function () {
  function Radio(props) {
    _classCallCheck(this, Radio);

    Object.assign(this, {
      parent: document
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
    }
  }, {
    key: 'cb',
    value: function cb() {}
  }]);

  return Radio;
}();

function radio(props) {
  return new Radio(props);
}

// DATA-API
$(document).on('click.cd.radio.data-api', '[data-toggle="cd-radio"]', function (event) {
  event.stopPropagation();
  var $this = $(event.currentTarget);

  $this.parent().addClass('checked').siblings().removeClass('checked');
});

exports.default = radio;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      confirmClass: 'cd-btn cd-btn-link-danger cd-btn-lg',
      cancelClass: 'cd-btn cd-btn-link-default cd-btn-lg',
      dialogClass: 'cd-modal-dialog-sm'
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
      this.$modal.on('click', '[data-toggle="cd-confirm-confirm"]', function (event) {
        return _this2.confirmEvent(event, _this2.$modal);
      });
    }
  }, {
    key: 'cancelEvent',
    value: function cancelEvent(event) {
      this.rmConfirm(event);
      this.cancel(event);
    }
  }, {
    key: 'confirmEvent',
    value: function confirmEvent(event, $confirm) {
      this.rmConfirm(event);
      this.confirm(event, $confirm);
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
    key: 'confirm',
    value: function confirm(event, $confirm) {}
  }, {
    key: 'template',
    value: function template() {
      var modalHeader = this.title ? '\n      <div class="modal-header">\n        <h4 class="modal-title">' + this.title + '</h4>\n      </div>\n    ' : '';

      var modalBody = '\n      <div class="modal-body">\n        <div class="cd-pb24 cd-text-gray-dark">\n          ' + this.content + '\n        </div>\n      </div>\n    ';

      var modalFooter = '\n      <div class="modal-footer">\n        <button class="' + this.cancelClass + '" type="button" data-toggle="cd-confirm-cancel">\n          ' + this.cancelText + '\n        </button>\n        <button class="' + this.confirmClass + '" type="button" data-toggle="cd-confirm-confirm" data-url="' + this.confirmUrl + '">\n          ' + this.confirmText + '\n        </button>\n      </div>\n    ';

      return '\n      <div class="cd-modal cd-fade" style="display:block">\n        <div class="modal-dialog cd-modal-dialog ' + this.dialogClass + '">\n          <div class="modal-content">\n            ' + modalHeader + '\n            ' + modalBody + '\n            ' + modalFooter + '\n          </div>\n        </div>\n      </div>\n    ';
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

      this.$backdrop = $(document.createElement('dev')).addClass('cd-modal-backdrop cd-fade').appendTo(this.$body);

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

exports.default = confirm;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loading = function loading() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isFixed: false },
      isFixed = _ref.isFixed;

  return '<div class="cd-loading ' + (isFixed ? 'cd-loading-fixed' : '') + '">\n            <div class="loading-content">\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>';
};

exports.default = loading;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = upload;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = table;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      $parent.addClass('cd-alert-hide');

      setTimeout(function () {
        $parent.remove();
      }, 300);

      this.close();
    }
  }, {
    key: 'close',
    value: function close(cb) {
      cb & cb();
      return this;
    }
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
  $parent.addClass('cd-alert-hide');

  setTimeout(function () {
    $parent.remove();
  }, 300);
});

exports.default = alert;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = btn;

/***/ })
/******/ ]);
});