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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_radio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_confirm__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_loading__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_upload__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_table__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__less_codeages_design_less__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__less_codeages_design_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__less_codeages_design_less__);








let codeAgesDisign = {
  radio: __WEBPACK_IMPORTED_MODULE_0__lib_radio__["a" /* default */],
  confirm: __WEBPACK_IMPORTED_MODULE_1__lib_confirm__["a" /* default */],
  loading: __WEBPACK_IMPORTED_MODULE_2__lib_loading__["a" /* default */],
  upload: __WEBPACK_IMPORTED_MODULE_3__lib_upload__["a" /* default */],
  table: __WEBPACK_IMPORTED_MODULE_4__lib_table__["a" /* default */]
};

window.cd = codeAgesDisign;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Radio {
  constructor(props) {
    Object.assign(this, {
      parent: document
    }, props);

    this.init();
  }

  init() {
    this.event();
  }

  event() {
    $(this.parent).on('click.cd.radio', this.el, event => this.clickHandle(event));
  }

  clickHandle(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    $this.parent().addClass('checked').siblings().removeClass('checked');

    this.cb(event);
  }

  cb() {}
}

function radio(props) {
  return new Radio(props);
}

// DATA-API
$(document).on('click.cd.radio.data-api', '[data-toggle="cd-radio"]', function (event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);

  $this.parent().addClass('checked').siblings().removeClass('checked');
});

// HOW TO USE 
// cd.radio({
//   el: '[data-toggle="cd-radio"]',
//   cb() {
//     console.log('这是回调函数')
//   }
// });

/* harmony default export */ __webpack_exports__["a"] = (radio);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Confirm {
  constructor(props) {
    Object.assign(this, {
      title: '',
      content: '',
      confirmText: 'confirm',
      cancelText: 'cancel',
      confirmClass: 'btn cd-btn cd-btn-flat-danger cd-btn-lg',
      cancelClass: 'btn cd-btn cd-btn-flat-default cd-btn-lg',
      dialogClass: 'cd-modal-dialog cd-modal-dialog-sm',
      confirmType: '',
      confirmUrl: ''
    }, props);

    this.init();
  }

  init() {
    let html = this.template();
    let $modal = $(html);

    this.initEvent($modal);

    $('body').append($modal);
    $modal.modal({
      backdrop: 'static',
      keyboard: false,
      show: true
    });
  }

  initEvent($modal) {
    $modal.on('hidden.bs.modal', () => {
      $modal.remove();
    });

    $modal.on('click', '[data-toggle="cd-confirm-btn"]', event => this.confirm(event, $modal));
  }

  confirm(event, $modal) {
    let $this = $(event.currentTarget);
    let url = $this.data('url');

    if (!url) {
      return;
    }

    if (this.confirmType) {
      let promise = $.ajax({
        type: this.confirmType,
        url
      }).always(() => {
        $modal.modal('hide');
      });

      this.ajax && this.ajax(promise);
    } else {
      window.location = url;
    }
  }

  template() {
    let modalHeader = this.title ? `
      <div class="modal-header">
        <h4 class="modal-title">${this.title}</h4>
      </div>
    ` : '';

    let modalBody = `
      <div class="modal-body">
        <div class="cd-pb24 cd-text-gray-dark">
          ${this.content}
        </div>
      </div>
    `;

    let confirmBtn = `
      <button class="${this.confirmClass}" type="button" data-toggle="cd-confirm-btn" data-url="${this.confirmUrl}">
        ${this.confirmText}
      </button>
    `;

    let modalFooter = `
      <div class="modal-footer">
        <button class="${this.cancelClass}" type="button" data-dismiss="modal">
          ${this.cancelText}
        </button>
        ${confirmBtn}
      </div>
    `;

    return `
      <div class="modal fade">
        <div class="modal-dialog ${this.dialogClass}">
          <div class="modal-content">
            ${modalHeader}
            ${modalBody}
            ${modalFooter}
          </div>
        </div>
      </div>
    `;
  }
}

function confirm(props) {
  return new Confirm(props);
}

/* harmony default export */ __webpack_exports__["a"] = (confirm);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let loading = ({ loadingClass } = { loadingClass: '' }) => {
  return `<div class="cd-loading ${loadingClass}">
            <div class="loading-content">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>`;
};

/* harmony default export */ __webpack_exports__["a"] = (loading);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Upload {
  constructor(props) {
    Object.assign(this, {
      parent: document,
      type: 'normal',
      fileTypes: ['image/bmp', 'image/jpeg', 'image/png'],
      fileSize: 2 * 1024 * 1024
    }, props);

    this.init();
  }

  init() {
    this.initEvent();
  }

  initEvent() {
    $(this.parent).on('change.cd.local-upload', this.el, event => this.uploadHandle(event));
  }

  uploadHandle(event) {
    let target = event.currentTarget;
    let self = this;

    let fr = new FileReader();

    if (!self.catch(event)) {
      return;
    };

    fr.onload = function (e) {
      let src = e.target.result;

      try {
        self[self.type](event, src);
      } catch (e) {
        throw new Error(`${self.type} type does not exist`);
      }
    };

    fr.readAsDataURL($(target)[0].files[0]);
  }

  catch(event) {
    // 文件大小限制
    const FILE_SIZE_LIMIT = 'FILE_SIZE_LIMIT';
    // 文件类型限制
    const FLIE_TYPE_LIMIT = 'FLIE_TYPE_LIMIT';

    let target = event.currentTarget;
    let file = $(target)[0].files[0];

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

  normal(event, src) {
    let $this = $(event.currentTarget);
    let $target = $($this.data('target'));

    if ($target) {
      $target.css('background-image', `url(${src})`);
      this.success(event, $target);
    } else {
      this.success(event, src);
    }
  }

  crop(event, src) {
    let image = new Image();
    let $this = $(event.currentTarget);
    let self = this;

    image.onload = function () {
      let width = image.width;
      let height = image.height;
      let cropWidth = $this.data('crop-width');
      let cropHeight = $this.data('crop-height');

      let scale = self.imageScale({
        naturalWidth: width,
        naturalHeight: height,
        cropWidth,
        cropHeight
      });

      let $image = $(image);

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

  imageScale({ naturalWidth, naturalHeight, cropWidth, cropHeight }) {
    let width = cropWidth;
    let height = cropHeight;

    let naturalScale = naturalWidth / naturalHeight;
    let cropScale = cropWidth / cropHeight;

    if (naturalScale > cropScale) {
      width = naturalScale * cropWidth;
    } else {
      height = cropHeight / naturalScale;
    }

    return {
      width,
      height
    };
  }

  success() {
    console.log('upload.success');
  }

  error(code) {
    console.log('upload.error', code);
  }
}

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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Table {
  constructor(props) {
    Object.assign(this, {
      filterEl: '[data-toggle="table-filter"]',
      sortEl: '[data-toggle="table-sort"]',
      parent: document
    }, props);

    this.init();
  }

  init() {
    this.event();
  }

  event() {
    $(this.parent).on('click.cd.table.filter', this.filterEl, event => this.filterHandle(event));
    $(this.parent).on('click.cd.table.sort', this.sortEl, event => this.sortHandle(event));
  }

  filterHandle(event) {
    let $this = $(event.currentTarget);

    if ($this.closest('li').hasClass('active')) {
      return;
    }

    let $target = $($this.data('target'));
    let url = $target.data('url');

    let filterStr = $this.data('filter');
    $target.data('filter', filterStr);

    if (filterStr) {
      url = `${url}?${filterStr}`;
    }

    let sortStr = $target.data('sort');
    if (sortStr) {
      url = `${url}&${sortStr}`;
    }

    this.cb($target, url);
  }

  sortHandle(event) {
    let $this = $(event.currentTarget);

    let $target = $($this.data('target'));
    let url = $target.data('url');

    let sortKey = $this.data('sort-key');
    let sortValue = 'desc';

    let $sortIcon = $this.find('.active');
    if ($sortIcon.length) {
      sortValue = $sortIcon.siblings().data('sort-value');
    }

    let sortStr = `${sortKey}=${sortValue}`;
    $target.data('sort', sortStr);
    url = `${url}?${sortStr}`;

    let filterStr = $target.data('filter');
    if (filterStr) {
      url = `${url}&${filterStr}`;
    }

    this.cb($target, url);
  }

  cb() {}
}

function table(props) {
  return new Table(props);
}

// HOW TO USE
// cd.table({
//   cb($target, url) {
//   }
// })

/* harmony default export */ __webpack_exports__["a"] = (table);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);