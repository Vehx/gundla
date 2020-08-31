_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "./node_modules/@sanity/client/lib/sanityClient.js");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: "aar5m15o",
  // you can find this in sanity.json
  dataset: "production",
  // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data

}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@rexxars/eventsource-polyfill/src/eventsource.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@rexxars/eventsource-polyfill/src/eventsource.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * EventSource polyfill
 * Originally published by sc AmvTek srl (https://github.com/amvtek/EventSource) - devel@amvtek.com
 * Forked by Espen Hovlandsdal to fix a few issues + publish latest version
 */

;(function (root, factory) {
  /* global define */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else { var evsImportName; }
})(typeof self === 'undefined' ? this : self, function () {
  var EventSource = function (url, options) {
    if (!url || typeof url != 'string') {
      throw new SyntaxError('Not enough arguments')
    }

    this.URL = url
    this.setOptions(options)
    var evs = this
    setTimeout(function () {
      evs.poll()
    }, 0)
  }

  EventSource.prototype = {
    CONNECTING: 0,

    OPEN: 1,

    CLOSED: 2,

    defaultOptions: {
      loggingEnabled: false,

      loggingPrefix: 'eventsource',

      interval: 500, // milliseconds

      bufferSizeLimit: 256 * 1024, // bytes

      silentTimeout: 300000, // milliseconds

      getArgs: {
        evs_buffer_size_limit: 256 * 1024,
      },

      xhrHeaders: {
        Accept: 'text/event-stream',
        'Cache-Control': 'no-cache',
        'X-Requested-With': 'XMLHttpRequest',
      },
    },

    setOptions: function (options) {
      var defaults = this.defaultOptions
      var option

      // set all default options...
      for (option in defaults) {
        if (defaults.hasOwnProperty(option)) {
          this[option] = defaults[option]
        }
      }

      // override with what is in options
      for (option in options) {
        if (option in defaults && options.hasOwnProperty(option)) {
          this[option] = options[option]
        }
      }

      // if getArgs option is enabled
      // ensure evs_buffer_size_limit corresponds to bufferSizeLimit
      if (this.getArgs && this.bufferSizeLimit) {
        this.getArgs.evs_buffer_size_limit = this.bufferSizeLimit
      }

      // if console is not available, force loggingEnabled to false
      // eslint-disable-next-line no-console
      if (typeof console === 'undefined' || typeof console.log === 'undefined') {
        this.loggingEnabled = false
      }
    },

    log: function (message) {
      if (this.loggingEnabled) {
        // eslint-disable-next-line no-console
        console.log('[' + this.loggingPrefix + ']:' + message)
      }
    },

    poll: function () {
      try {
        if (this.readyState == this.CLOSED) {
          return
        }

        this.cleanup()
        this.readyState = this.CONNECTING
        this.cursor = 0
        this.cache = ''
        this._xhr = new this.XHR(this)
        this.resetNoActivityTimer()
      } catch (err) {
        // in an attempt to silence the errors
        this.log('There were errors inside the pool try-catch')
        this.dispatchEvent('error', {type: 'error', data: err.message})
      }
    },

    pollAgain: function (interval) {
      // schedule poll to be called after interval milliseconds
      var evs = this
      evs.readyState = evs.CONNECTING
      evs.dispatchEvent('error', {
        type: 'error',
        data: 'Reconnecting ',
      })
      this._pollTimer = setTimeout(function () {
        evs.poll()
      }, interval || 0)
    },

    cleanup: function () {
      this.log('evs cleaning up')

      if (this._pollTimer) {
        clearInterval(this._pollTimer)
        this._pollTimer = null
      }

      if (this._noActivityTimer) {
        clearInterval(this._noActivityTimer)
        this._noActivityTimer = null
      }

      if (this._xhr) {
        this._xhr.abort()
        this._xhr = null
      }
    },

    resetNoActivityTimer: function () {
      if (this.silentTimeout) {
        if (this._noActivityTimer) {
          clearInterval(this._noActivityTimer)
        }
        var evs = this
        this._noActivityTimer = setTimeout(function () {
          evs.log('Timeout! silentTImeout:' + evs.silentTimeout)
          evs.pollAgain()
        }, this.silentTimeout)
      }
    },

    close: function () {
      this.readyState = this.CLOSED
      this.log('Closing connection. readyState: ' + this.readyState)
      this.cleanup()
    },

    _onxhrdata: function () {
      var request = this._xhr

      if (request.isReady() && !request.hasError()) {
        // reset the timer, as we have activity
        this.resetNoActivityTimer()

        // move this EventSource to OPEN state...
        if (this.readyState == this.CONNECTING) {
          this.readyState = this.OPEN
          this.dispatchEvent('open', {type: 'open'})
        }

        var buffer = request.getBuffer()

        if (buffer.length > this.bufferSizeLimit) {
          this.log('buffer.length > this.bufferSizeLimit')
          this.pollAgain()
        }

        if (this.cursor == 0 && buffer.length > 0) {
          // skip byte order mark \uFEFF character if it starts the stream
          if (buffer.substring(0, 1) == '\uFEFF') {
            this.cursor = 1
          }
        }

        var lastMessageIndex = this.lastMessageIndex(buffer)
        if (lastMessageIndex[0] >= this.cursor) {
          var newcursor = lastMessageIndex[1]
          var toparse = buffer.substring(this.cursor, newcursor)
          this.parseStream(toparse)
          this.cursor = newcursor
        }

        // if request is finished, reopen the connection
        if (request.isDone()) {
          this.log('request.isDone(). reopening the connection')
          this.pollAgain(this.interval)
        }
      } else if (this.readyState !== this.CLOSED) {
        this.log('this.readyState !== this.CLOSED')
        this.pollAgain(this.interval)

        //MV: Unsure why an error was previously dispatched
      }
    },

    parseStream: function (chunk) {
      // normalize line separators (\r\n,\r,\n) to \n
      // remove white spaces that may precede \n
      chunk = this.cache + this.normalizeToLF(chunk)

      var events = chunk.split('\n\n')

      var i, j, eventType, datas, line, retry

      for (i = 0; i < events.length - 1; i++) {
        eventType = 'message'
        datas = []
        var parts = events[i].split('\n')

        for (j = 0; j < parts.length; j++) {
          line = this.trimWhiteSpace(parts[j])

          if (line.indexOf('event') == 0) {
            eventType = line.replace(/event:?\s*/, '')
          } else if (line.indexOf('retry') == 0) {
            retry = parseInt(line.replace(/retry:?\s*/, ''), 10)
            if (!isNaN(retry)) {
              this.interval = retry
            }
          } else if (line.indexOf('data') == 0) {
            datas.push(line.replace(/data:?\s*/, ''))
          } else if (line.indexOf('id:') == 0) {
            this.lastEventId = line.replace(/id:?\s*/, '')
          } else if (line.indexOf('id') == 0) {
            // this resets the id

            this.lastEventId = null
          }
        }

        if (datas.length && this.readyState != this.CLOSED) {
          // dispatch a new event
          var event = new MessageEvent(
            eventType,
            datas.join('\n'),
            typeof window !== 'undefined' && typeof window.location !== 'undefined'
              ? window.location.origin
              : null,
            this.lastEventId
          )
          this.dispatchEvent(eventType, event)
        }
      }

      this.cache = events[events.length - 1]
    },

    dispatchEvent: function (type, event) {
      var handlers = this['_' + type + 'Handlers']

      if (handlers) {
        for (var i = 0; i < handlers.length; i++) {
          handlers[i].call(this, event)
        }
      }

      if (this['on' + type]) {
        this['on' + type].call(this, event)
      }
    },

    addEventListener: function (type, handler) {
      if (!this['_' + type + 'Handlers']) {
        this['_' + type + 'Handlers'] = []
      }

      this['_' + type + 'Handlers'].push(handler)
    },

    removeEventListener: function (type, handler) {
      var handlers = this['_' + type + 'Handlers']
      if (!handlers) {
        return
      }
      for (var i = handlers.length - 1; i >= 0; --i) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1)
          break
        }
      }
    },

    _pollTimer: null,

    _noactivityTimer: null,

    _xhr: null,

    lastEventId: null,

    cache: '',

    cursor: 0,

    onerror: null,

    onmessage: null,

    onopen: null,

    readyState: 0,

    // ===================================================================
    // helpers functions
    // those are attached to prototype to ease reuse and testing...

    urlWithParams: function (baseURL, params) {
      var encodedArgs = []

      if (params) {
        var key, urlarg
        var urlize = encodeURIComponent

        for (key in params) {
          if (params.hasOwnProperty(key)) {
            urlarg = urlize(key) + '=' + urlize(params[key])
            encodedArgs.push(urlarg)
          }
        }
      }

      if (encodedArgs.length > 0) {
        if (baseURL.indexOf('?') == -1) return baseURL + '?' + encodedArgs.join('&')
        return baseURL + '&' + encodedArgs.join('&')
      }
      return baseURL
    },

    lastMessageIndex: function (text) {
      var ln2 = text.lastIndexOf('\n\n')
      var lr2 = text.lastIndexOf('\r\r')
      var lrln2 = text.lastIndexOf('\r\n\r\n')

      if (lrln2 > Math.max(ln2, lr2)) {
        return [lrln2, lrln2 + 4]
      }
      return [Math.max(ln2, lr2), Math.max(ln2, lr2) + 2]
    },

    trimWhiteSpace: function (str) {
      // to remove whitespaces left and right of string

      var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g
      return str.replace(reTrim, '')
    },

    normalizeToLF: function (str) {
      // replace \r and \r\n with \n
      return str.replace(/\r\n|\r/g, '\n')
    },
  }

  if (isOldIE()) {
    EventSource.isPolyfill = 'IE_8-9'

    // patch EventSource defaultOptions
    var defaults = EventSource.prototype.defaultOptions
    defaults.xhrHeaders = null // no headers will be sent
    defaults.getArgs.evs_preamble = 2048 + 8

    // EventSource will send request using Internet Explorer XDomainRequest
    EventSource.prototype.XHR = function (evs) {
      /* global XDomainRequest */
      var request = new XDomainRequest()
      this._request = request

      // set handlers
      request.onprogress = function () {
        request._ready = true
        evs._onxhrdata()
      }

      request.onload = function () {
        this._loaded = true
        evs._onxhrdata()
      }

      request.onerror = function () {
        this._failed = true
        evs.readyState = evs.CLOSED
        evs.dispatchEvent('error', {
          type: 'error',
          data: 'XDomainRequest error',
        })
      }

      request.ontimeout = function () {
        this._failed = true
        evs.readyState = evs.CLOSED
        evs.dispatchEvent('error', {
          type: 'error',
          data: 'XDomainRequest timed out',
        })
      }

      // XDomainRequest does not allow setting custom headers
      // If EventSource has enabled the use of GET arguments
      // we add parameters to URL so that server can adapt the stream...
      var reqGetArgs = {}
      if (evs.getArgs) {
        // copy evs.getArgs in reqGetArgs
        var defaultArgs = evs.getArgs
        for (var key in defaultArgs) {
          if (defaultArgs.hasOwnProperty(key)) {
            reqGetArgs[key] = defaultArgs[key]
          }
        }
        if (evs.lastEventId) {
          reqGetArgs.evs_last_event_id = evs.lastEventId
        }
      }
      // send the request

      request.open('GET', evs.urlWithParams(evs.URL, reqGetArgs))
      request.send()
    }

    EventSource.prototype.XHR.prototype = {
      useXDomainRequest: true,

      _request: null,

      _ready: false, // true when progress events are dispatched

      _loaded: false, // true when request has been loaded

      _failed: false, // true if when request is in error

      isReady: function () {
        return this._request._ready
      },

      isDone: function () {
        return this._request._loaded
      },

      hasError: function () {
        return this._request._failed
      },

      getBuffer: function () {
        var rv = ''
        try {
          rv = this._request.responseText || ''
        } catch (err) {
          // intentional noop
        }
        return rv
      },

      abort: function () {
        if (this._request) {
          this._request.abort()
        }
      },
    }
  } else {
    EventSource.isPolyfill = 'XHR'

    // EventSource will send request using XMLHttpRequest
    EventSource.prototype.XHR = function (evs) {
      var request = new XMLHttpRequest()
      this._request = request
      evs._xhr = this

      // set handlers
      request.onreadystatechange = function () {
        if (request.readyState > 1 && evs.readyState != evs.CLOSED) {
          if (request.status == 200 || (request.status >= 300 && request.status < 400)) {
            evs._onxhrdata()
          } else {
            request._failed = true
            evs.readyState = evs.CLOSED
            evs.dispatchEvent('error', {
              type: 'error',
              data: 'The server responded with ' + request.status,
            })
            evs.close()
          }
        }
      }

      request.onprogress = function () {
        // intentional noop
      }

      request.open('GET', evs.urlWithParams(evs.URL, evs.getArgs), true)

      var headers = evs.xhrHeaders // maybe null
      for (var header in headers) {
        if (headers.hasOwnProperty(header)) {
          request.setRequestHeader(header, headers[header])
        }
      }
      if (evs.lastEventId) {
        request.setRequestHeader('Last-Event-Id', evs.lastEventId)
      }

      request.send()
    }

    EventSource.prototype.XHR.prototype = {
      useXDomainRequest: false,

      _request: null,

      _failed: false, // true if we have had errors...

      isReady: function () {
        return this._request.readyState >= 2
      },

      isDone: function () {
        return this._request.readyState == 4
      },

      hasError: function () {
        return this._failed || this._request.status >= 400
      },

      getBuffer: function () {
        var rv = ''
        try {
          rv = this._request.responseText || ''
        } catch (err) {
          // intentional noop
        }
        return rv
      },

      abort: function () {
        if (this._request) {
          this._request.abort()
        }
      },
    }
  }

  function MessageEvent(type, data, origin, lastEventId) {
    this.bubbles = false
    this.cancelBubble = false
    this.cancelable = false
    this.data = data || null
    this.origin = origin || ''
    this.lastEventId = lastEventId || ''
    this.type = type || 'message'
  }

  function isOldIE() {
    //return true if we are in IE8 or IE9
    return Boolean(
      typeof window !== 'undefined' &&
        window.XDomainRequest &&
        window.XMLHttpRequest &&
        new XMLHttpRequest().responseType === undefined
    )
  }

  return EventSource
})


/***/ }),

/***/ "./node_modules/@sanity/client/lib/assets/assetsClient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/assets/assetsClient.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require.map;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require2.filter;

var queryString = __webpack_require__(/*! ../http/queryString */ "./node_modules/@sanity/client/lib/http/queryString.js");

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

function AssetsClient(client) {
  this.client = client;
}

function toDocument(body) {
  // todo: rewrite to just return body.document in a while
  var document = body.document;
  Object.defineProperty(document, 'document', {
    enumerable: false,
    get: function get() {
      // eslint-disable-next-line no-console
      console.warn('The promise returned from client.asset.upload(...) now resolves with the asset document');
      return document;
    }
  });
  return document;
}

function optionsFromFile(opts, file) {
  if (typeof window === 'undefined' || !(file instanceof window.File)) {
    return opts;
  }

  return assign({
    filename: opts.preserveFilename === false ? undefined : file.name,
    contentType: file.type
  }, opts);
}

assign(AssetsClient.prototype, {
  /**
   * Upload an asset
   *
   * @param  {String} assetType `image` or `file`
   * @param  {File|Blob|Buffer|ReadableStream} body File to upload
   * @param  {Object}  opts Options for the upload
   * @param  {Boolean} opts.preserveFilename Whether or not to preserve the original filename (default: true)
   * @param  {String}  opts.filename Filename for this file (optional)
   * @param  {Number}  opts.timeout  Milliseconds to wait before timing the request out (default: 0)
   * @param  {String}  opts.contentType Mime type of the file
   * @param  {Array}   opts.extract Array of metadata parts to extract from image.
   *                                 Possible values: `location`, `exif`, `image`, `palette`
   * @param  {String}  opts.label Label
   * @param  {String}  opts.title Title
   * @param  {String}  opts.description Description
   * @param  {String}  opts.creditLine The credit to person(s) and/or organization(s) required by the supplier of the image to be used when published
   * @param  {Object}  opts.source Source data (when the asset is from an external service)
   * @param  {String}  opts.source.id The (u)id of the asset within the source, i.e. 'i-f323r1E'
   *                                  Required if source is defined
   * @param  {String}  opts.source.name The name of the source, i.e. 'unsplash'
   *                                  Required if source is defined
   * @param  {String}  opts.source.url A url to where to find the asset, or get more info about it in the source
   *                                  Optional
   * @return {Promise} Resolves with the created asset document
   */
  upload: function upload(assetType, body) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    validators.validateAssetType(assetType); // If an empty array is given, explicitly set `none` to override API defaults

    var meta = opts.extract || undefined;

    if (meta && !meta.length) {
      meta = ['none'];
    }

    var dataset = validators.hasDataset(this.client.clientConfig);
    var assetEndpoint = assetType === 'image' ? 'images' : 'files';
    var options = optionsFromFile(opts, body);
    var label = options.label,
        title = options.title,
        description = options.description,
        creditLine = options.creditLine,
        filename = options.filename,
        source = options.source;
    var query = {
      label: label,
      title: title,
      description: description,
      filename: filename,
      meta: meta,
      creditLine: creditLine
    };

    if (source) {
      query.sourceId = source.id;
      query.sourceName = source.name;
      query.sourceUrl = source.url;
    }

    var observable = this.client._requestObservable({
      method: 'POST',
      timeout: options.timeout || 0,
      uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
      headers: options.contentType ? {
        'Content-Type': options.contentType
      } : {},
      query: query,
      body: body
    });

    return this.client.isPromiseAPI() ? observable.pipe(filter(function (event) {
      return event.type === 'response';
    }), map(function (event) {
      return toDocument(event.body);
    })).toPromise() : observable;
  },
  delete: function _delete(type, id) {
    // eslint-disable-next-line no-console
    console.warn('client.assets.delete() is deprecated, please use client.delete(<document-id>)');
    var docId = id || '';

    if (!/^(image|file)-/.test(docId)) {
      docId = "".concat(type, "-").concat(docId);
    } else if (type._id) {
      // We could be passing an entire asset document instead of an ID
      docId = type._id;
    }

    validators.hasDataset(this.client.clientConfig);
    return this.client.delete(docId);
  },
  getImageUrl: function getImageUrl(ref, query) {
    var id = ref._ref || ref;

    if (typeof id !== 'string') {
      throw new Error('getImageUrl() needs either an object with a _ref, or a string with an asset document ID');
    }

    if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
      throw new Error("Unsupported asset ID \"".concat(id, "\". URL generation only works for auto-generated IDs."));
    }

    var _id$split = id.split('-'),
        _id$split2 = _slicedToArray(_id$split, 4),
        assetId = _id$split2[1],
        size = _id$split2[2],
        format = _id$split2[3];

    validators.hasDataset(this.client.clientConfig);
    var _this$client$clientCo = this.client.clientConfig,
        projectId = _this$client$clientCo.projectId,
        dataset = _this$client$clientCo.dataset;
    var qs = query ? queryString(query) : '';
    return "https://cdn.sanity.io/images/".concat(projectId, "/").concat(dataset, "/").concat(assetId, "-").concat(size, ".").concat(format).concat(qs);
  }
});
module.exports = AssetsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/auth/authClient.js":
/*!************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/auth/authClient.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function AuthClient(client) {
  this.client = client;
}

assign(AuthClient.prototype, {
  getLoginProviders: function getLoginProviders() {
    return this.client.request({
      uri: '/auth/providers'
    });
  },
  logout: function logout() {
    return this.client.request({
      uri: '/auth/logout',
      method: 'POST'
    });
  }
});
module.exports = AuthClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/config.js":
/*!***************************************************!*\
  !*** ./node_modules/@sanity/client/lib/config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/generate-help-url/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validate = __webpack_require__(/*! ./validators */ "./node_modules/@sanity/client/lib/validators.js");

var once = __webpack_require__(/*! ./util/once */ "./node_modules/@sanity/client/lib/util/once.js");

var defaultCdnHost = 'apicdn.sanity.io';
var defaultConfig = {
  apiHost: 'https://api.sanity.io',
  useProjectHostname: true,
  gradientMode: false,
  isPromiseAPI: true
};
var LOCALHOSTS = ['localhost', '127.0.0.1', '0.0.0.0'];

var isLocal = function isLocal(host) {
  return LOCALHOSTS.indexOf(host) !== -1;
}; // eslint-disable-next-line no-console


var createWarningPrinter = function createWarningPrinter(message) {
  return once(function () {
    return console.warn(message.join(' '));
  });
};

var printCdnWarning = createWarningPrinter(['You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and', "cheaper. Think about it! For more info, see ".concat(generateHelpUrl('js-client-cdn-configuration'), "."), 'To hide this warning, please set the `useCdn` option to either `true` or `false` when creating', 'the client.']);
var printBrowserTokenWarning = createWarningPrinter(['You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.', "See ".concat(generateHelpUrl('js-client-browser-token'), " for more information and how to hide this warning.")]);
var printCdnTokenWarning = createWarningPrinter(['You have set `useCdn` to `true` while also specifying a token. This is usually not what you', 'want. The CDN cannot be used with an authorization token, since private data cannot be cached.', "See ".concat(generateHelpUrl('js-client-usecdn-token'), " for more information.")]);
exports.defaultConfig = defaultConfig;

exports.initConfig = function (config, prevConfig) {
  var newConfig = assign({}, defaultConfig, prevConfig, config);
  var gradientMode = newConfig.gradientMode;
  var projectBased = !gradientMode && newConfig.useProjectHostname;

  if (typeof Promise === 'undefined') {
    var helpUrl = generateHelpUrl('js-client-promise-polyfill');
    throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
  }

  if (gradientMode && !newConfig.namespace) {
    throw new Error('Configuration must contain `namespace` when running in gradient mode');
  }

  if (projectBased && !newConfig.projectId) {
    throw new Error('Configuration must contain `projectId`');
  }

  var isBrowser = typeof window !== 'undefined' && window.location && window.location.hostname;
  var isLocalhost = isBrowser && isLocal(window.location.hostname);

  if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
    printBrowserTokenWarning();
  } else if ((!isBrowser || isLocalhost) && newConfig.useCdn && newConfig.token) {
    printCdnTokenWarning();
  } else if (typeof newConfig.useCdn === 'undefined') {
    printCdnWarning();
  }

  if (projectBased) {
    validate.projectId(newConfig.projectId);
  }

  if (!gradientMode && newConfig.dataset) {
    validate.dataset(newConfig.dataset, newConfig.gradientMode);
  }

  newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
  newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.token && !newConfig.withCredentials;

  if (newConfig.gradientMode) {
    newConfig.url = newConfig.apiHost;
    newConfig.cdnUrl = newConfig.apiHost;
  } else {
    var hostParts = newConfig.apiHost.split('://', 2);
    var protocol = hostParts[0];
    var host = hostParts[1];
    var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;

    if (newConfig.useProjectHostname) {
      newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v1");
      newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v1");
    } else {
      newConfig.url = "".concat(newConfig.apiHost, "/v1");
      newConfig.cdnUrl = newConfig.url;
    }
  }

  return newConfig;
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/dataMethods.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/dataMethods.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require.filter;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var getSelection = __webpack_require__(/*! ../util/getSelection */ "./node_modules/@sanity/client/lib/util/getSelection.js");

var encodeQueryString = __webpack_require__(/*! ./encodeQueryString */ "./node_modules/@sanity/client/lib/data/encodeQueryString.js");

var Transaction = __webpack_require__(/*! ./transaction */ "./node_modules/@sanity/client/lib/data/transaction.js");

var Patch = __webpack_require__(/*! ./patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var listen = __webpack_require__(/*! ./listen */ "./node_modules/@sanity/client/lib/data/listen.js");

var excludeFalsey = function excludeFalsey(param, defValue) {
  var value = typeof param === 'undefined' ? defValue : param;
  return param === false ? undefined : value;
};

var getMutationQuery = function getMutationQuery() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    returnIds: true,
    returnDocuments: excludeFalsey(options.returnDocuments, true),
    visibility: options.visibility || 'sync'
  };
};

var isResponse = function isResponse(event) {
  return event.type === 'response';
};

var getBody = function getBody(event) {
  return event.body;
};

var indexBy = function indexBy(docs, attr) {
  return docs.reduce(function (indexed, doc) {
    indexed[attr(doc)] = doc;
    return indexed;
  }, Object.create(null));
};

var toPromise = function toPromise(observable) {
  return observable.toPromise();
};

var getQuerySizeLimit = 11264;
module.exports = {
  listen: listen,
  getDataUrl: function getDataUrl(operation, path) {
    var config = this.clientConfig;
    var catalog = config.gradientMode ? config.namespace : validators.hasDataset(config);
    var baseUri = "/".concat(operation, "/").concat(catalog);
    var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
    return (this.clientConfig.gradientMode ? uri : "/data".concat(uri)).replace(/\/($|\?)/, '$1');
  },
  fetch: function fetch(query, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var mapResponse = options.filterResponse === false ? function (res) {
      return res;
    } : function (res) {
      return res.result;
    };

    var observable = this._dataRequest('query', {
      query: query,
      params: params
    }, options).pipe(map(mapResponse));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  getDocument: function getDocument(id) {
    var options = {
      uri: this.getDataUrl('doc', id),
      json: true
    };

    var observable = this._requestObservable(options).pipe(filter(isResponse), map(function (event) {
      return event.body.documents && event.body.documents[0];
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  getDocuments: function getDocuments(ids) {
    var options = {
      uri: this.getDataUrl('doc', ids.join(',')),
      json: true
    };

    var observable = this._requestObservable(options).pipe(filter(isResponse), map(function (event) {
      var indexed = indexBy(event.body.documents || [], function (doc) {
        return doc._id;
      });
      return ids.map(function (id) {
        return indexed[id] || null;
      });
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  create: function create(doc, options) {
    return this._create(doc, 'create', options);
  },
  createIfNotExists: function createIfNotExists(doc, options) {
    validators.requireDocumentId('createIfNotExists', doc);
    return this._create(doc, 'createIfNotExists', options);
  },
  createOrReplace: function createOrReplace(doc, options) {
    validators.requireDocumentId('createOrReplace', doc);
    return this._create(doc, 'createOrReplace', options);
  },
  patch: function patch(selector, operations) {
    return new Patch(selector, operations, this);
  },
  delete: function _delete(selection, options) {
    return this.dataRequest('mutate', {
      mutations: [{
        delete: getSelection(selection)
      }]
    }, options);
  },
  mutate: function mutate(mutations, options) {
    var mut = mutations instanceof Patch || mutations instanceof Transaction ? mutations.serialize() : mutations;
    var muts = Array.isArray(mut) ? mut : [mut];
    var transactionId = options && options.transactionId;
    return this.dataRequest('mutate', {
      mutations: muts,
      transactionId: transactionId
    }, options);
  },
  transaction: function transaction(operations) {
    return new Transaction(operations, this);
  },
  dataRequest: function dataRequest(endpoint, body) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var request = this._dataRequest(endpoint, body, options);

    return this.isPromiseAPI() ? toPromise(request) : request;
  },
  _dataRequest: function _dataRequest(endpoint, body) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var isMutation = endpoint === 'mutate'; // Check if the query string is within a configured threshold,
    // in which case we can use GET. Otherwise, use POST.

    var strQuery = !isMutation && encodeQueryString(body);
    var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
    var stringQuery = useGet ? strQuery : '';
    var returnFirst = options.returnFirst;
    var timeout = options.timeout,
        token = options.token;
    var uri = this.getDataUrl(endpoint, stringQuery);
    var reqOptions = {
      method: useGet ? 'GET' : 'POST',
      uri: uri,
      json: true,
      body: useGet ? undefined : body,
      query: isMutation && getMutationQuery(options),
      timeout: timeout,
      token: token
    };
    return this._requestObservable(reqOptions).pipe(filter(isResponse), map(getBody), map(function (res) {
      if (!isMutation) {
        return res;
      } // Should we return documents?


      var results = res.results || [];

      if (options.returnDocuments) {
        return returnFirst ? results[0] && results[0].document : results.map(function (mut) {
          return mut.document;
        });
      } // Return a reduced subset


      var key = returnFirst ? 'documentId' : 'documentIds';
      var ids = returnFirst ? results[0] && results[0].id : results.map(function (mut) {
        return mut.id;
      });
      return _defineProperty({
        transactionId: res.transactionId,
        results: results
      }, key, ids);
    }));
  },
  _create: function _create(doc, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var mutation = _defineProperty({}, op, doc);

    var opts = assign({
      returnFirst: true,
      returnDocuments: true
    }, options);
    return this.dataRequest('mutate', {
      mutations: [mutation]
    }, opts);
  }
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/encodeQueryString.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/encodeQueryString.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enc = encodeURIComponent;

module.exports = function (_ref) {
  var query = _ref.query,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  var base = "?query=".concat(enc(query));
  var qString = Object.keys(params).reduce(function (qs, param) {
    return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
  }, base);
  return Object.keys(options).reduce(function (qs, option) {
    // Only include the option if it is truthy
    return options[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options[option])) : qs;
  }, qString);
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/listen.js":
/*!********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/listen.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var Observable = __webpack_require__(/*! @sanity/observable/minimal */ "./node_modules/@sanity/observable/minimal.js");

var polyfilledEventSource = __webpack_require__(/*! @sanity/eventsource */ "./node_modules/@sanity/eventsource/browser.js");

var pick = __webpack_require__(/*! ../util/pick */ "./node_modules/@sanity/client/lib/util/pick.js");

var defaults = __webpack_require__(/*! ../util/defaults */ "./node_modules/@sanity/client/lib/util/defaults.js");

var encodeQueryString = __webpack_require__(/*! ./encodeQueryString */ "./node_modules/@sanity/client/lib/data/encodeQueryString.js");

var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/generate-help-url/index.js");

var once = __webpack_require__(/*! ../util/once */ "./node_modules/@sanity/client/lib/util/once.js");

var tokenWarning = ['Using token with listeners is not supported in browsers. ', "For more info, see ".concat(generateHelpUrl('js-client-listener-tokens-browser'), ".")]; // eslint-disable-next-line no-console

var printTokenWarning = once(function () {
  return console.warn(tokenWarning.join(' '));
});
var isWindowEventSource = Boolean(typeof window !== 'undefined' && window.EventSource);
var EventSource = isWindowEventSource ? window.EventSource // Native browser EventSource
: polyfilledEventSource; // Node.js, IE etc

var possibleOptions = ['includePreviousRevision', 'includeResult', 'visibility', 'effectFormat'];
var defaultOptions = {
  includeResult: true
};

module.exports = function listen(query, params) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = defaults(opts, defaultOptions);
  var listenOpts = pick(options, possibleOptions);
  var qs = encodeQueryString({
    query: query,
    params: params,
    options: listenOpts
  });
  var _this$clientConfig = this.clientConfig,
      url = _this$clientConfig.url,
      token = _this$clientConfig.token,
      withCredentials = _this$clientConfig.withCredentials;
  var uri = "".concat(url).concat(this.getDataUrl('listen', qs));
  var listenFor = options.events ? options.events : ['mutation'];
  var shouldEmitReconnect = listenFor.indexOf('reconnect') !== -1;

  if (token && isWindowEventSource) {
    printTokenWarning();
  }

  var esOptions = {};

  if (token || withCredentials) {
    esOptions.withCredentials = true;
  }

  if (token) {
    esOptions.headers = {
      Authorization: "Bearer ".concat(token)
    };
  }

  return new Observable(function (observer) {
    var es = getEventSource();
    var reconnectTimer;
    var stopped = false;

    function onError() {
      if (stopped) {
        return;
      }

      emitReconnect(); // Allow event handlers of `emitReconnect` to cancel/close the reconnect attempt

      if (stopped) {
        return;
      } // Unless we've explicitly stopped the ES (in which case `stopped` should be true),
      // we should never be in a disconnected state. By default, EventSource will reconnect
      // automatically, in which case it sets readyState to `CONNECTING`, but in some cases
      // (like when a laptop lid is closed), it closes the connection. In these cases we need
      // to explicitly reconnect.


      if (es.readyState === EventSource.CLOSED) {
        unsubscribe();
        clearTimeout(reconnectTimer);
        reconnectTimer = setTimeout(open, 100);
      }
    }

    function onChannelError(err) {
      observer.error(cooerceError(err));
    }

    function onMessage(evt) {
      var event = parseEvent(evt);
      return event instanceof Error ? observer.error(event) : observer.next(event);
    }

    function onDisconnect(evt) {
      stopped = true;
      unsubscribe();
      observer.complete();
    }

    function unsubscribe() {
      es.removeEventListener('error', onError, false);
      es.removeEventListener('channelError', onChannelError, false);
      es.removeEventListener('disconnect', onDisconnect, false);
      listenFor.forEach(function (type) {
        return es.removeEventListener(type, onMessage, false);
      });
      es.close();
    }

    function emitReconnect() {
      if (shouldEmitReconnect) {
        observer.next({
          type: 'reconnect'
        });
      }
    }

    function getEventSource() {
      var evs = new EventSource(uri, esOptions);
      evs.addEventListener('error', onError, false);
      evs.addEventListener('channelError', onChannelError, false);
      evs.addEventListener('disconnect', onDisconnect, false);
      listenFor.forEach(function (type) {
        return evs.addEventListener(type, onMessage, false);
      });
      return evs;
    }

    function open() {
      es = getEventSource();
    }

    function stop() {
      stopped = true;
      unsubscribe();
    }

    return stop;
  });
};

function parseEvent(event) {
  try {
    var data = event.data && JSON.parse(event.data) || {};
    return assign({
      type: event.type
    }, data);
  } catch (err) {
    return err;
  }
}

function cooerceError(err) {
  if (err instanceof Error) {
    return err;
  }

  var evt = parseEvent(err);
  return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
}

function extractErrorMessage(err) {
  if (!err.error) {
    return err.message || 'Unknown listener error';
  }

  if (err.error.description) {
    return err.error.description;
  }

  return typeof err.error === 'string' ? err.error : JSON.stringify(err.error, null, 2);
}

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/patch.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/patch.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var deepAssign = __webpack_require__(/*! deep-assign */ "./node_modules/deep-assign/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var getSelection = __webpack_require__(/*! ../util/getSelection */ "./node_modules/@sanity/client/lib/util/getSelection.js");

var validate = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var validateObject = validate.validateObject;
var validateInsert = validate.validateInsert;

function Patch(selection) {
  var operations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var client = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  this.selection = selection;
  this.operations = assign({}, operations);
  this.client = client;
}

assign(Patch.prototype, {
  clone: function clone() {
    return new Patch(this.selection, assign({}, this.operations), this.client);
  },
  merge: function merge(props) {
    validateObject('merge', props);
    var stack = new Error().stack.toString().split('\n').filter(function (str) {
      return str.trim();
    }).slice(2);
    console.warn("The \"merge\" patch has been deprecated and will be removed in the future\n".concat(stack.join('\n')));
    return this._assign('merge', deepAssign(this.operations.merge || {}, props));
  },
  set: function set(props) {
    return this._assign('set', props);
  },
  diffMatchPatch: function diffMatchPatch(props) {
    validateObject('diffMatchPatch', props);
    return this._assign('diffMatchPatch', props);
  },
  unset: function unset(attrs) {
    if (!Array.isArray(attrs)) {
      throw new Error('unset(attrs) takes an array of attributes to unset, non-array given');
    }

    this.operations = assign({}, this.operations, {
      unset: attrs
    });
    return this;
  },
  setIfMissing: function setIfMissing(props) {
    return this._assign('setIfMissing', props);
  },
  replace: function replace(props) {
    validateObject('replace', props);
    return this._set('set', {
      $: props
    }); // eslint-disable-line id-length
  },
  inc: function inc(props) {
    return this._assign('inc', props);
  },
  dec: function dec(props) {
    return this._assign('dec', props);
  },
  insert: function insert(at, selector, items) {
    var _this$_assign;

    validateInsert(at, selector, items);
    return this._assign('insert', (_this$_assign = {}, _defineProperty(_this$_assign, at, selector), _defineProperty(_this$_assign, "items", items), _this$_assign));
  },
  append: function append(selector, items) {
    return this.insert('after', "".concat(selector, "[-1]"), items);
  },
  prepend: function prepend(selector, items) {
    return this.insert('before', "".concat(selector, "[0]"), items);
  },
  splice: function splice(selector, start, deleteCount, items) {
    // Negative indexes doesn't mean the same in Sanity as they do in JS;
    // -1 means "actually at the end of the array", which allows inserting
    // at the end of the array without knowing its length. We therefore have
    // to substract negative indexes by one to match JS. If you want Sanity-
    // behaviour, just use `insert('replace', selector, items)` directly
    var delAll = typeof deleteCount === 'undefined' || deleteCount === -1;
    var startIndex = start < 0 ? start - 1 : start;
    var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
    var delRange = startIndex < 0 && delCount >= 0 ? '' : delCount;
    var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
    return this.insert('replace', rangeSelector, items || []);
  },
  ifRevisionId: function ifRevisionId(rev) {
    this.operations.ifRevisionID = rev;
    return this;
  },
  serialize: function serialize() {
    return assign(getSelection(this.selection), this.operations);
  },
  toJSON: function toJSON() {
    return this.serialize();
  },
  commit: function commit() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.client) {
      throw new Error('No `client` passed to patch, either provide one or pass the ' + 'patch to a clients `mutate()` method');
    }

    var returnFirst = typeof this.selection === 'string';
    var opts = assign({
      returnFirst: returnFirst,
      returnDocuments: true
    }, options);
    return this.client.mutate({
      patch: this.serialize()
    }, opts);
  },
  reset: function reset() {
    this.operations = {};
    return this;
  },
  _set: function _set(op, props) {
    return this._assign(op, props, false);
  },
  _assign: function _assign(op, props) {
    var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    validateObject(op, props);
    this.operations = assign({}, this.operations, _defineProperty({}, op, assign({}, merge && this.operations[op] || {}, props)));
    return this;
  }
});
module.exports = Patch;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/transaction.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/transaction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var Patch = __webpack_require__(/*! ./patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var defaultMutateOptions = {
  returnDocuments: false
};

function Transaction() {
  var operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var client = arguments.length > 1 ? arguments[1] : undefined;
  var transactionId = arguments.length > 2 ? arguments[2] : undefined;
  this.trxId = transactionId;
  this.operations = operations;
  this.client = client;
}

assign(Transaction.prototype, {
  clone: function clone() {
    return new Transaction(this.operations.slice(0), this.client, this.trxId);
  },
  create: function create(doc) {
    validators.validateObject('create', doc);
    return this._add({
      create: doc
    });
  },
  createIfNotExists: function createIfNotExists(doc) {
    var op = 'createIfNotExists';
    validators.validateObject(op, doc);
    validators.requireDocumentId(op, doc);
    return this._add(_defineProperty({}, op, doc));
  },
  createOrReplace: function createOrReplace(doc) {
    var op = 'createOrReplace';
    validators.validateObject(op, doc);
    validators.requireDocumentId(op, doc);
    return this._add(_defineProperty({}, op, doc));
  },
  delete: function _delete(documentId) {
    validators.validateDocumentId('delete', documentId);
    return this._add({
      delete: {
        id: documentId
      }
    });
  },
  patch: function patch(documentId, patchOps) {
    var isBuilder = typeof patchOps === 'function';
    var isPatch = documentId instanceof Patch; // transaction.patch(client.patch('documentId').inc({visits: 1}))

    if (isPatch) {
      return this._add({
        patch: documentId.serialize()
      });
    } // patch => patch.inc({visits: 1}).set({foo: 'bar'})


    if (isBuilder) {
      var patch = patchOps(new Patch(documentId, {}, this.client));

      if (!(patch instanceof Patch)) {
        throw new Error('function passed to `patch()` must return the patch');
      }

      return this._add({
        patch: patch.serialize()
      });
    }

    return this._add({
      patch: assign({
        id: documentId
      }, patchOps)
    });
  },
  transactionId: function transactionId(id) {
    if (!id) {
      return this.trxId;
    }

    this.trxId = id;
    return this;
  },
  serialize: function serialize() {
    return this.operations.slice();
  },
  toJSON: function toJSON() {
    return this.serialize();
  },
  commit: function commit(options) {
    if (!this.client) {
      throw new Error('No `client` passed to transaction, either provide one or pass the ' + 'transaction to a clients `mutate()` method');
    }

    return this.client.mutate(this.serialize(), assign({
      transactionId: this.trxId
    }, defaultMutateOptions, options || {}));
  },
  reset: function reset() {
    this.operations = [];
    return this;
  },
  _add: function _add(mut) {
    this.operations.push(mut);
    return this;
  }
});
module.exports = Transaction;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/datasets/datasetsClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/datasets/datasetsClient.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validate = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

function DatasetsClient(client) {
  this.request = client.request.bind(client);
}

assign(DatasetsClient.prototype, {
  create: function create(name, options) {
    return this._modify('PUT', name, options);
  },
  edit: function edit(name, options) {
    return this._modify('PATCH', name, options);
  },
  delete: function _delete(name) {
    return this._modify('DELETE', name);
  },
  list: function list() {
    return this.request({
      uri: '/datasets'
    });
  },
  _modify: function _modify(method, name, body) {
    validate.dataset(name);
    return this.request({
      method: method,
      uri: "/datasets/".concat(name),
      body: body
    });
  }
});
module.exports = DatasetsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/browserMiddleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/browserMiddleware.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [];

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/errors.js":
/*!********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/errors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var makeError = __webpack_require__(/*! make-error */ "./node_modules/make-error/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function ClientError(res) {
  var props = extractErrorProps(res);
  ClientError.super.call(this, props.message);
  assign(this, props);
}

function ServerError(res) {
  var props = extractErrorProps(res);
  ServerError.super.call(this, props.message);
  assign(this, props);
}

function extractErrorProps(res) {
  var body = res.body;
  var props = {
    response: res,
    statusCode: res.statusCode,
    responseBody: stringifyBody(body, res)
  }; // API/Boom style errors ({statusCode, error, message})

  if (body.error && body.message) {
    props.message = "".concat(body.error, " - ").concat(body.message);
    return props;
  } // Query/database errors ({error: {description, other, arb, props}})


  if (body.error && body.error.description) {
    props.message = body.error.description;
    props.details = body.error;
    return props;
  } // Other, more arbitrary errors


  props.message = body.error || body.message || httpErrorMessage(res);
  return props;
}

function httpErrorMessage(res) {
  var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : '';
  return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
}

function stringifyBody(body, res) {
  var contentType = (res.headers['content-type'] || '').toLowerCase();
  var isJson = contentType.indexOf('application/json') !== -1;
  return isJson ? JSON.stringify(body, null, 2) : body;
}

makeError(ClientError);
makeError(ServerError);
exports.ClientError = ClientError;
exports.ServerError = ServerError;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/queryString.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/queryString.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (params) {
  var qs = [];

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])));
    }
  }

  return qs.length > 0 ? "?".concat(qs.join('&')) : '';
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/request.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/request.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-empty-function, no-process-env */
var getIt = __webpack_require__(/*! get-it */ "./node_modules/get-it/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var observable = __webpack_require__(/*! get-it/lib/middleware/observable */ "./node_modules/get-it/lib/middleware/observable.js");

var jsonRequest = __webpack_require__(/*! get-it/lib/middleware/jsonRequest */ "./node_modules/get-it/lib/middleware/jsonRequest.js");

var jsonResponse = __webpack_require__(/*! get-it/lib/middleware/jsonResponse */ "./node_modules/get-it/lib/middleware/jsonResponse.js");

var progress = __webpack_require__(/*! get-it/lib/middleware/progress */ "./node_modules/get-it/lib/middleware/progress/index.js");

var Observable = __webpack_require__(/*! @sanity/observable/minimal */ "./node_modules/@sanity/observable/minimal.js");

var _require = __webpack_require__(/*! ./errors */ "./node_modules/@sanity/client/lib/http/errors.js"),
    ClientError = _require.ClientError,
    ServerError = _require.ServerError;

var httpError = {
  onResponse: function onResponse(res) {
    if (res.statusCode >= 500) {
      throw new ServerError(res);
    } else if (res.statusCode >= 400) {
      throw new ClientError(res);
    }

    return res;
  }
}; // Environment-specific middleware.

var envSpecific = __webpack_require__(/*! ./nodeMiddleware */ "./node_modules/@sanity/client/lib/http/browserMiddleware.js");

var middleware = envSpecific.concat([jsonRequest(), jsonResponse(), progress(), httpError, observable({
  implementation: Observable
})]);
var request = getIt(middleware);

function httpRequest(options) {
  var requester = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : request;
  return requester(assign({
    maxRedirects: 0
  }, options));
}

httpRequest.defaultRequester = request;
httpRequest.ClientError = ClientError;
httpRequest.ServerError = ServerError;
module.exports = httpRequest;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/requestOptions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/requestOptions.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var projectHeader = 'X-Sanity-Project-ID';

module.exports = function (config) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = {};
  var token = overrides.token || config.token;

  if (token) {
    headers.Authorization = "Bearer ".concat(token);
  }

  if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
    headers[projectHeader] = config.projectId;
  }

  var withCredentials = Boolean(typeof overrides.withCredentials === 'undefined' ? config.token || config.withCredentials : overrides.withCredentials);
  var timeout = typeof overrides.timeout === 'undefined' ? config.timeout : overrides.timeout;
  return assign({}, overrides, {
    headers: assign({}, headers, overrides.headers || {}),
    timeout: typeof timeout === 'undefined' ? 5 * 60 * 1000 : timeout,
    json: true,
    withCredentials: withCredentials
  });
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/projects/projectsClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/projects/projectsClient.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function ProjectsClient(client) {
  this.client = client;
}

assign(ProjectsClient.prototype, {
  list: function list() {
    return this.client.request({
      uri: '/projects'
    });
  },
  getById: function getById(id) {
    return this.client.request({
      uri: "/projects/".concat(id)
    });
  }
});
module.exports = ProjectsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/sanityClient.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/sanityClient.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require.filter;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var Patch = __webpack_require__(/*! ./data/patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var Transaction = __webpack_require__(/*! ./data/transaction */ "./node_modules/@sanity/client/lib/data/transaction.js");

var dataMethods = __webpack_require__(/*! ./data/dataMethods */ "./node_modules/@sanity/client/lib/data/dataMethods.js");

var DatasetsClient = __webpack_require__(/*! ./datasets/datasetsClient */ "./node_modules/@sanity/client/lib/datasets/datasetsClient.js");

var ProjectsClient = __webpack_require__(/*! ./projects/projectsClient */ "./node_modules/@sanity/client/lib/projects/projectsClient.js");

var AssetsClient = __webpack_require__(/*! ./assets/assetsClient */ "./node_modules/@sanity/client/lib/assets/assetsClient.js");

var UsersClient = __webpack_require__(/*! ./users/usersClient */ "./node_modules/@sanity/client/lib/users/usersClient.js");

var AuthClient = __webpack_require__(/*! ./auth/authClient */ "./node_modules/@sanity/client/lib/auth/authClient.js");

var httpRequest = __webpack_require__(/*! ./http/request */ "./node_modules/@sanity/client/lib/http/request.js");

var getRequestOptions = __webpack_require__(/*! ./http/requestOptions */ "./node_modules/@sanity/client/lib/http/requestOptions.js");

var _require3 = __webpack_require__(/*! ./config */ "./node_modules/@sanity/client/lib/config.js"),
    defaultConfig = _require3.defaultConfig,
    initConfig = _require3.initConfig;

var toPromise = function toPromise(observable) {
  return observable.toPromise();
};

function SanityClient() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

  if (!(this instanceof SanityClient)) {
    return new SanityClient(config);
  }

  this.config(config);
  this.assets = new AssetsClient(this);
  this.datasets = new DatasetsClient(this);
  this.projects = new ProjectsClient(this);
  this.users = new UsersClient(this);
  this.auth = new AuthClient(this);

  if (this.clientConfig.isPromiseAPI) {
    var observableConfig = assign({}, this.clientConfig, {
      isPromiseAPI: false
    });
    this.observable = new SanityClient(observableConfig);
  }
}

assign(SanityClient.prototype, dataMethods);
assign(SanityClient.prototype, {
  clone: function clone() {
    return new SanityClient(this.config());
  },
  config: function config(newConfig) {
    if (typeof newConfig === 'undefined') {
      return assign({}, this.clientConfig);
    }

    if (this.observable) {
      var observableConfig = assign({}, newConfig, {
        isPromiseAPI: false
      });
      this.observable.config(observableConfig);
    }

    this.clientConfig = initConfig(newConfig, this.clientConfig || {});
    return this;
  },
  getUrl: function getUrl(uri) {
    var canUseCdn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var base = canUseCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
    return "".concat(base, "/").concat(uri.replace(/^\//, ''));
  },
  isPromiseAPI: function isPromiseAPI() {
    return this.clientConfig.isPromiseAPI;
  },
  _requestObservable: function _requestObservable(options) {
    var uri = options.url || options.uri;
    var canUseCdn = this.clientConfig.useCdn && ['GET', 'HEAD'].indexOf(options.method || 'GET') >= 0 && uri.indexOf('/data/') === 0;
    var reqOptions = getRequestOptions(this.clientConfig, assign({}, options, {
      url: this.getUrl(uri, canUseCdn)
    }));
    return httpRequest(reqOptions, this.clientConfig.requester);
  },
  request: function request(options) {
    var observable = this._requestObservable(options).pipe(filter(function (event) {
      return event.type === 'response';
    }), map(function (event) {
      return event.body;
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  }
});
SanityClient.Patch = Patch;
SanityClient.Transaction = Transaction;
SanityClient.ClientError = httpRequest.ClientError;
SanityClient.ServerError = httpRequest.ServerError;
SanityClient.requester = httpRequest.defaultRequester;
module.exports = SanityClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/users/usersClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/users/usersClient.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function UsersClient(client) {
  this.client = client;
}

assign(UsersClient.prototype, {
  getById: function getById(id) {
    return this.client.request({
      uri: "/users/".concat(id)
    });
  }
});
module.exports = UsersClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/defaults.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/defaults.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj, defaults) {
  return Object.keys(defaults).concat(Object.keys(obj)).reduce(function (target, prop) {
    target[prop] = typeof obj[prop] === 'undefined' ? defaults[prop] : obj[prop];
    return target;
  }, {});
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/getSelection.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/getSelection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getSelection(sel) {
  if (typeof sel === 'string' || Array.isArray(sel)) {
    return {
      id: sel
    };
  }

  if (sel && sel.query) {
    return {
      query: sel.query
    };
  }

  var selectionOpts = ['* Document ID (<docId>)', '* Array of document IDs', '* Object containing `query`'].join('\n');
  throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/once.js":
/*!******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/once.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
  var didCall = false;
  var returnValue;
  return function () {
    if (didCall) {
      return returnValue;
    }

    returnValue = fn.apply(void 0, arguments);
    didCall = true;
    return returnValue;
  };
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/pick.js":
/*!******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/pick.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj, props) {
  return props.reduce(function (selection, prop) {
    if (typeof obj[prop] === 'undefined') {
      return selection;
    }

    selection[prop] = obj[prop];
    return selection;
  }, {});
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/validators.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/validators.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var VALID_ASSET_TYPES = ['image', 'file'];
var VALID_INSERT_LOCATIONS = ['before', 'after', 'replace'];

exports.dataset = function (name) {
  if (!/^[-\w]{1,128}$/.test(name)) {
    throw new Error('Datasets can only contain lowercase characters, numbers, underscores and dashes');
  }
};

exports.projectId = function (id) {
  if (!/^[-a-z0-9]+$/i.test(id)) {
    throw new Error('`projectId` can only contain only a-z, 0-9 and dashes');
  }
};

exports.validateAssetType = function (type) {
  if (VALID_ASSET_TYPES.indexOf(type) === -1) {
    throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(', ')));
  }
};

exports.validateObject = function (op, val) {
  if (val === null || _typeof(val) !== 'object' || Array.isArray(val)) {
    throw new Error("".concat(op, "() takes an object of properties"));
  }
};

exports.requireDocumentId = function (op, doc) {
  if (!doc._id) {
    throw new Error("".concat(op, "() requires that the document contains an ID (\"_id\" property)"));
  }

  exports.validateDocumentId(op, doc._id);
};

exports.validateDocumentId = function (op, id) {
  if (typeof id !== 'string' || !/^[a-z0-9_.-]+$/i.test(id)) {
    throw new Error("".concat(op, "(): \"").concat(id, "\" is not a valid document ID"));
  }
};

exports.validateInsert = function (at, selector, items) {
  var signature = 'insert(at, selector, items)';

  if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
    var valid = VALID_INSERT_LOCATIONS.map(function (loc) {
      return "\"".concat(loc, "\"");
    }).join(', ');
    throw new Error("".concat(signature, " takes an \"at\"-argument which is one of: ").concat(valid));
  }

  if (typeof selector !== 'string') {
    throw new Error("".concat(signature, " takes a \"selector\"-argument which must be a string"));
  }

  if (!Array.isArray(items)) {
    throw new Error("".concat(signature, " takes an \"items\"-argument which must be an array"));
  }
};

exports.hasDataset = function (config) {
  if (!config.gradientMode && !config.dataset) {
    throw new Error('`dataset` must be provided to perform queries');
  }

  return config.dataset || '';
};

/***/ }),

/***/ "./node_modules/@sanity/eventsource/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sanity/eventsource/browser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-var */
var evs = __webpack_require__(/*! @rexxars/eventsource-polyfill */ "./node_modules/@rexxars/eventsource-polyfill/src/eventsource.js")

module.exports = window.EventSource || evs.EventSource


/***/ }),

/***/ "./node_modules/@sanity/generate-help-url/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/generate-help-url/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var baseUrl = 'https://docs.sanity.io/help/'

module.exports = function generateHelpUrl(slug) {
  return baseUrl + slug
}


/***/ }),

/***/ "./node_modules/@sanity/observable/lib/SanityObservableMinimal.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sanity/observable/lib/SanityObservableMinimal.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js"),
    Observable = _require.Observable;

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require2 = __webpack_require__(/*! ../operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var _require3 = __webpack_require__(/*! ../operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require3.filter;

var _require4 = __webpack_require__(/*! ../operators/reduce */ "./node_modules/@sanity/observable/operators/reduce.js"),
    reduce = _require4.reduce;
/*
 A minimal rxjs based observable that align as closely as possible with the current es-observable spec,
 without the static factory methods
 */


function SanityObservableMinimal() {
  Observable.apply(this, arguments); // eslint-disable-line prefer-rest-params
}

SanityObservableMinimal.prototype = Object.create(assign(Object.create(null), Observable.prototype));
Object.defineProperty(SanityObservableMinimal.prototype, 'constructor', {
  value: SanityObservableMinimal,
  enumerable: false,
  writable: true,
  configurable: true
});

SanityObservableMinimal.prototype.lift = function lift(operator) {
  var observable = new SanityObservableMinimal();
  observable.source = this;
  observable.operator = operator;
  return observable;
};

function createDeprecatedMemberOp(name, op) {
  var hasWarned = false;
  return function deprecatedOperator() {
    if (!hasWarned) {
      hasWarned = true;
      console.warn(new Error("Calling observable.".concat(name, "(...) is deprecated. Please use observable.pipe(").concat(name, "(...)) instead")));
    }

    return this.pipe(op.apply(this, arguments));
  };
}

SanityObservableMinimal.prototype.map = createDeprecatedMemberOp('map', map);
SanityObservableMinimal.prototype.filter = createDeprecatedMemberOp('filter', filter);
SanityObservableMinimal.prototype.reduce = createDeprecatedMemberOp('filter', reduce);
module.exports = SanityObservableMinimal;

/***/ }),

/***/ "./node_modules/@sanity/observable/minimal.js":
/*!****************************************************!*\
  !*** ./node_modules/@sanity/observable/minimal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/SanityObservableMinimal */ "./node_modules/@sanity/observable/lib/SanityObservableMinimal.js")


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/filter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.filter = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js").filter


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/map.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/map.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.map = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js").map


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/reduce.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/reduce.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.reduce = __webpack_require__(/*! rxjs/internal/operators/reduce */ "./node_modules/rxjs/internal/operators/reduce.js").reduce


/***/ }),

/***/ "./node_modules/deep-assign/index.js":
/*!*******************************************!*\
  !*** ./node_modules/deep-assign/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObj = __webpack_require__(/*! is-obj */ "./node_modules/is-obj/index.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Sources cannot be null or undefined');
	}

	return Object(val);
}

function assignKey(to, from, key) {
	var val = from[key];

	if (val === undefined || val === null) {
		return;
	}

	if (hasOwnProperty.call(to, key)) {
		if (to[key] === undefined || to[key] === null) {
			throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
		}
	}

	if (!hasOwnProperty.call(to, key) || !isObj(val)) {
		to[key] = val;
	} else {
		to[key] = assign(Object(to[key]), from[key]);
	}
}

function assign(to, from) {
	if (to === from) {
		return to;
	}

	from = Object(from);

	for (var key in from) {
		if (hasOwnProperty.call(from, key)) {
			assignKey(to, from, key);
		}
	}

	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(from);

		for (var i = 0; i < symbols.length; i++) {
			if (propIsEnumerable.call(from, symbols[i])) {
				assignKey(to, from, symbols[i]);
			}
		}
	}

	return to;
}

module.exports = function deepAssign(target) {
	target = toObject(target);

	for (var s = 1; s < arguments.length; s++) {
		assign(target, arguments[s]);
	}

	return target;
};


/***/ }),

/***/ "./node_modules/get-it/index.js":
/*!**************************************!*\
  !*** ./node_modules/get-it/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib-node */ "./node_modules/get-it/lib/index.js")


/***/ }),

/***/ "./node_modules/get-it/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/get-it/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pubsub = __webpack_require__(/*! nano-pubsub */ "./node_modules/nano-pubsub/index.js");
var middlewareReducer = __webpack_require__(/*! ./util/middlewareReducer */ "./node_modules/get-it/lib/util/middlewareReducer.js");
var processOptions = __webpack_require__(/*! ./middleware/defaultOptionsProcessor */ "./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js");
var validateOptions = __webpack_require__(/*! ./middleware/defaultOptionsValidator */ "./node_modules/get-it/lib/middleware/defaultOptionsValidator.js");
var httpRequest = __webpack_require__(/*! ./request */ "./node_modules/get-it/lib/request/index.js"); // node-request in node, browser-request in browsers

var channelNames = ['request', 'response', 'progress', 'error', 'abort'];
var middlehooks = ['processOptions', 'validateOptions', 'interceptRequest', 'finalizeOptions', 'onRequest', 'onResponse', 'onError', 'onReturn', 'onHeaders'];

module.exports = function createRequester() {
  var initMiddleware = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var loadedMiddleware = [];
  var middleware = middlehooks.reduce(function (ware, name) {
    ware[name] = ware[name] || [];
    return ware;
  }, {
    processOptions: [processOptions],
    validateOptions: [validateOptions]
  });

  function request(opts) {
    var channels = channelNames.reduce(function (target, name) {
      target[name] = pubsub();
      return target;
    }, {});

    // Prepare a middleware reducer that can be reused throughout the lifecycle
    var applyMiddleware = middlewareReducer(middleware);

    // Parse the passed options
    var options = applyMiddleware('processOptions', opts);

    // Validate the options
    applyMiddleware('validateOptions', options);

    // Build a context object we can pass to child handlers
    var context = { options: options, channels: channels, applyMiddleware: applyMiddleware

      // We need to hold a reference to the current, ongoing request,
      // in order to allow cancellation. In the case of the retry middleware,
      // a new request might be triggered
    };var ongoingRequest = null;
    var unsubscribe = channels.request.subscribe(function (ctx) {
      // Let request adapters (node/browser) perform the actual request
      ongoingRequest = httpRequest(ctx, function (err, res) {
        return onResponse(err, res, ctx);
      });
    });

    // If we abort the request, prevent further requests from happening,
    // and be sure to cancel any ongoing request (obviously)
    channels.abort.subscribe(function () {
      unsubscribe();
      if (ongoingRequest) {
        ongoingRequest.abort();
      }
    });

    // See if any middleware wants to modify the return value - for instance
    // the promise or observable middlewares
    var returnValue = applyMiddleware('onReturn', channels, context);

    // If return value has been modified by a middleware, we expect the middleware
    // to publish on the 'request' channel. If it hasn't been modified, we want to
    // trigger it right away
    if (returnValue === channels) {
      channels.request.publish(context);
    }

    return returnValue;

    function onResponse(reqErr, res, ctx) {
      var error = reqErr;
      var response = res;

      // We're processing non-errors first, in case a middleware converts the
      // response into an error (for instance, status >= 400 == HttpError)
      if (!error) {
        try {
          response = applyMiddleware('onResponse', res, ctx);
        } catch (err) {
          response = null;
          error = err;
        }
      }

      // Apply error middleware - if middleware return the same (or a different) error,
      // publish as an error event. If we *don't* return an error, assume it has been handled
      error = error && applyMiddleware('onError', error, ctx);

      // Figure out if we should publish on error/response channels
      if (error) {
        channels.error.publish(error);
      } else if (response) {
        channels.response.publish(response);
      }
    }
  }

  request.use = function use(newMiddleware) {
    if (!newMiddleware) {
      throw new Error('Tried to add middleware that resolved to falsey value');
    }

    if (typeof newMiddleware === 'function') {
      throw new Error('Tried to add middleware that was a function. It probably expects you to pass options to it.');
    }

    if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
      throw new Error('Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event');
    }

    middlehooks.forEach(function (key) {
      if (newMiddleware[key]) {
        middleware[key].push(newMiddleware[key]);
      }
    });

    loadedMiddleware.push(newMiddleware);
    return request;
  };

  request.clone = function clone() {
    return createRequester(loadedMiddleware);
  };

  initMiddleware.forEach(request.use);

  return request;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var urlParse = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");

var isReactNative = typeof navigator === 'undefined' ? false : navigator.product === 'ReactNative';

var has = Object.prototype.hasOwnProperty;
var defaultOptions = { timeout: isReactNative ? 60000 : 120000 };

module.exports = function (opts) {
  var options = typeof opts === 'string' ? objectAssign({ url: opts }, defaultOptions) : objectAssign({}, defaultOptions, opts);

  // Parse URL into parts
  var url = urlParse(options.url, {}, // Don't use current browser location
  true // Parse query strings
  );

  // Normalize timeouts
  options.timeout = normalizeTimeout(options.timeout);

  // Shallow-merge (override) existing query params
  if (options.query) {
    url.query = objectAssign({}, url.query, removeUndefined(options.query));
  }

  // Implicit POST if we have not specified a method but have a body
  options.method = options.body && !options.method ? 'POST' : (options.method || 'GET').toUpperCase();

  // Stringify URL
  options.url = url.toString(stringifyQueryString);

  return options;
};

function stringifyQueryString(obj) {
  var pairs = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      push(key, obj[key]);
    }
  }

  return pairs.length ? pairs.join('&') : '';

  function push(key, val) {
    if (Array.isArray(val)) {
      val.forEach(function (item) {
        return push(key, item);
      });
    } else {
      pairs.push([key, val].map(encodeURIComponent).join('='));
    }
  }
}

function normalizeTimeout(time) {
  if (time === false || time === 0) {
    return false;
  }

  if (time.connect || time.socket) {
    return time;
  }

  var delay = Number(time);
  if (isNaN(delay)) {
    return normalizeTimeout(defaultOptions.timeout);
  }

  return { connect: delay, socket: delay };
}

function removeUndefined(obj) {
  var target = {};
  for (var key in obj) {
    if (obj[key] !== undefined) {
      target[key] = obj[key];
    }
  }
  return target;
}
//# sourceMappingURL=defaultOptionsProcessor.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsValidator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/defaultOptionsValidator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validUrl = /^https?:\/\//i;

module.exports = function (options) {
  if (!validUrl.test(options.url)) {
    throw new Error("\"" + options.url + "\" is not a valid URL");
  }
};
//# sourceMappingURL=defaultOptionsValidator.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/jsonRequest.js":
/*!***********************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/jsonRequest.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

var serializeTypes = ['boolean', 'string', 'number'];
var isBuffer = function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

module.exports = function () {
  return {
    processOptions: function processOptions(options) {
      var body = options.body;
      if (!body) {
        return options;
      }

      var isStream = typeof body.pipe === 'function';
      var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body === 'undefined' ? 'undefined' : _typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));

      if (!shouldSerialize) {
        return options;
      }

      return objectAssign({}, options, {
        body: JSON.stringify(options.body),
        headers: objectAssign({}, options.headers, {
          'Content-Type': 'application/json'
        })
      });
    }
  };
};
//# sourceMappingURL=jsonRequest.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/jsonResponse.js":
/*!************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/jsonResponse.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function (opts) {
  return {
    onResponse: function onResponse(response) {
      var contentType = response.headers['content-type'] || '';
      var shouldDecode = opts && opts.force || contentType.indexOf('application/json') !== -1;
      if (!response.body || !contentType || !shouldDecode) {
        return response;
      }

      return objectAssign({}, response, { body: tryParse(response.body) });
    },

    processOptions: function processOptions(options) {
      return objectAssign({}, options, {
        headers: objectAssign({ Accept: 'application/json' }, options.headers)
      });
    }
  };
};

function tryParse(body) {
  try {
    return JSON.parse(body);
  } catch (err) {
    err.message = 'Failed to parsed response body as JSON: ' + err.message;
    throw err;
  }
}
//# sourceMappingURL=jsonResponse.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/observable.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/observable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ../util/global */ "./node_modules/get-it/lib/util/global.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var Observable = opts.implementation || global.Observable;
  if (!Observable) {
    throw new Error('`Observable` is not available in global scope, and no implementation was passed');
  }

  return {
    onReturn: function onReturn(channels, context) {
      return new Observable(function (observer) {
        channels.error.subscribe(function (err) {
          return observer.error(err);
        });
        channels.progress.subscribe(function (event) {
          return observer.next(objectAssign({ type: 'progress' }, event));
        });
        channels.response.subscribe(function (response) {
          observer.next(objectAssign({ type: 'response' }, response));
          observer.complete();
        });

        channels.request.publish(context);
        return function () {
          return channels.abort.publish();
        };
      });
    }
  };
};
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/progress/browser-progress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/progress/browser-progress.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    onRequest: function onRequest(evt) {
      if (evt.adapter !== 'xhr') {
        return;
      }

      var xhr = evt.request;
      var context = evt.context;

      if ('upload' in xhr && 'onprogress' in xhr.upload) {
        xhr.upload.onprogress = handleProgress('upload');
      }

      if ('onprogress' in xhr) {
        xhr.onprogress = handleProgress('download');
      }

      function handleProgress(stage) {
        return function (event) {
          var percent = event.lengthComputable ? event.loaded / event.total * 100 : -1;
          context.channels.progress.publish({
            stage: stage,
            percent: percent,
            total: event.total,
            loaded: event.loaded,
            lengthComputable: event.lengthComputable
          });
        };
      }
    }
  };
};
//# sourceMappingURL=browser-progress.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/progress/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/progress/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./node-progress */ "./node_modules/get-it/lib/middleware/progress/browser-progress.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/request/browser-request.js":
/*!************************************************************!*\
  !*** ./node_modules/get-it/lib/request/browser-request.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint max-depth: ["error", 4] */
var sameOrigin = __webpack_require__(/*! same-origin */ "./node_modules/same-origin/index.js");
var parseHeaders = __webpack_require__(/*! parse-headers */ "./node_modules/parse-headers/parse-headers.js");
var noop = function noop() {
  /* intentional noop */
};

var win = window;
var XmlHttpRequest = win.XMLHttpRequest || noop;
var hasXhr2 = 'withCredentials' in new XmlHttpRequest();
var XDomainRequest = hasXhr2 ? XmlHttpRequest : win.XDomainRequest;
var adapter = 'xhr';

module.exports = function (context, callback) {
  var opts = context.options;
  var options = context.applyMiddleware('finalizeOptions', opts);
  var timers = {};

  // Deep-checking window.location because of react native, where `location` doesn't exist
  var cors = win && win.location && !sameOrigin(win.location.href, options.url);

  // Allow middleware to inject a response, for instance in the case of caching or mocking
  var injectedResponse = context.applyMiddleware('interceptRequest', undefined, {
    adapter: adapter,
    context: context
  });

  // If middleware injected a response, treat it as we normally would and return it
  // Do note that the injected response has to be reduced to a cross-environment friendly response
  if (injectedResponse) {
    var cbTimer = setTimeout(callback, 0, null, injectedResponse);
    var cancel = function cancel() {
      return clearTimeout(cbTimer);
    };
    return { abort: cancel };
  }

  // We'll want to null out the request on success/failure
  var xhr = cors ? new XDomainRequest() : new XmlHttpRequest();

  var isXdr = win.XDomainRequest && xhr instanceof win.XDomainRequest;
  var headers = options.headers;

  // Request state
  var aborted = false;
  var loaded = false;
  var timedOut = false;

  // Apply event handlers
  xhr.onerror = onError;
  xhr.ontimeout = onError;
  xhr.onabort = function () {
    aborted = true;
  };

  // IE9 must have onprogress be set to a unique function
  xhr.onprogress = function () {
    /* intentional noop */
  };

  var loadEvent = isXdr ? 'onload' : 'onreadystatechange';
  xhr[loadEvent] = function () {
    // Prevent request from timing out
    resetTimers();

    if (aborted || xhr.readyState !== 4 && !isXdr) {
      return;
    }

    // Will be handled by onError
    if (xhr.status === 0) {
      return;
    }

    onLoad();
  };

  // @todo two last options to open() is username/password
  xhr.open(options.method, options.url, true // Always async
  );

  // Some options need to be applied after open
  xhr.withCredentials = !!options.withCredentials;

  // Set headers
  if (headers && xhr.setRequestHeader) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  } else if (headers && isXdr) {
    throw new Error('Headers cannot be set on an XDomainRequest object');
  }

  if (options.rawBody) {
    xhr.responseType = 'arraybuffer';
  }

  // Let middleware know we're about to do a request
  context.applyMiddleware('onRequest', { options: options, adapter: adapter, request: xhr, context: context });

  xhr.send(options.body || null);

  // Figure out which timeouts to use (if any)
  var delays = options.timeout;
  if (delays) {
    timers.connect = setTimeout(function () {
      return timeoutRequest('ETIMEDOUT');
    }, delays.connect);
  }

  return { abort: abort };

  function abort() {
    aborted = true;

    if (xhr) {
      xhr.abort();
    }
  }

  function timeoutRequest(code) {
    timedOut = true;
    xhr.abort();
    var error = new Error(code === 'ESOCKETTIMEDOUT' ? 'Socket timed out on request to ' + options.url : 'Connection timed out on request to ' + options.url);
    error.code = code;
    context.channels.error.publish(error);
  }

  function resetTimers() {
    if (!delays) {
      return;
    }

    stopTimers();
    timers.socket = setTimeout(function () {
      return timeoutRequest('ESOCKETTIMEDOUT');
    }, delays.socket);
  }

  function stopTimers() {
    // Only clear the connect timeout if we've got a connection
    if (aborted || xhr.readyState >= 2 && timers.connect) {
      clearTimeout(timers.connect);
    }

    if (timers.socket) {
      clearTimeout(timers.socket);
    }
  }

  function onError() {
    if (loaded) {
      return;
    }

    // Clean up
    stopTimers();
    loaded = true;
    xhr = null;

    // Annoyingly, details are extremely scarce and hidden from us.
    // We only really know that it is a network error
    var err = new Error('Network error while attempting to reach ' + options.url);
    err.isNetworkError = true;
    err.request = options;
    callback(err);
  }

  function reduceResponse() {
    var statusCode = xhr.status;
    var statusMessage = xhr.statusText;

    if (isXdr && statusCode === undefined) {
      // IE8 CORS GET successful response doesn't have a status field, but body is fine
      statusCode = 200;
    } else if (statusCode > 12000 && statusCode < 12156) {
      // Yet another IE quirk where it emits weird status codes on network errors
      // https://support.microsoft.com/en-us/kb/193625
      return onError();
    } else {
      // Another IE bug where HTTP 204 somehow ends up as 1223
      statusCode = xhr.status === 1223 ? 204 : xhr.status;
      statusMessage = xhr.status === 1223 ? 'No Content' : statusMessage;
    }

    return {
      body: xhr.response || xhr.responseText,
      url: options.url,
      method: options.method,
      headers: isXdr ? {} : parseHeaders(xhr.getAllResponseHeaders()),
      statusCode: statusCode,
      statusMessage: statusMessage
    };
  }

  function onLoad() {
    if (aborted || loaded || timedOut) {
      return;
    }

    if (xhr.status === 0) {
      onError(new Error('Unknown XHR error'));
      return;
    }

    // Prevent being called twice
    stopTimers();
    loaded = true;
    callback(null, reduceResponse());
  }
};
//# sourceMappingURL=browser-request.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/request/index.js":
/*!**************************************************!*\
  !*** ./node_modules/get-it/lib/request/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./node-request */ "./node_modules/get-it/lib/request/browser-request.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/util/global.js":
/*!************************************************!*\
  !*** ./node_modules/get-it/lib/util/global.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* eslint-disable no-negated-condition */
if (typeof window !== 'undefined') {
  module.exports = window;
} else if (typeof global !== 'undefined') {
  module.exports = global;
} else if (typeof self !== 'undefined') {
  module.exports = self;
} else {
  module.exports = {};
}
//# sourceMappingURL=global.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/get-it/lib/util/middlewareReducer.js":
/*!***********************************************************!*\
  !*** ./node_modules/get-it/lib/util/middlewareReducer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (middleware) {
  var applyMiddleware = function applyMiddleware(hook, defaultValue) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var bailEarly = hook === 'onError';

    var value = defaultValue;
    for (var i = 0; i < middleware[hook].length; i++) {
      var handler = middleware[hook][i];
      value = handler.apply(undefined, [value].concat(args));

      if (bailEarly && !value) {
        break;
      }
    }

    return value;
  };

  return applyMiddleware;
};
//# sourceMappingURL=middlewareReducer.js.map

/***/ }),

/***/ "./node_modules/groq/lib/groq.js":
/*!***************************************!*\
  !*** ./node_modules/groq/lib/groq.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = function groq(strings) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  var lastIndex = strings.length - 1;
  return strings.slice(0, lastIndex).reduce(function (acc, str, i) {
    return acc + str + keys[i];
  }, '') + strings[lastIndex];
};

/***/ }),

/***/ "./node_modules/is-obj/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-obj/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/make-error/index.js":
/*!******************************************!*\
  !*** ./node_modules/make-error/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ISC @ Julien Fontanet



// ===================================================================

var construct = typeof Reflect !== "undefined" ? Reflect.construct : undefined;
var defineProperty = Object.defineProperty;

// -------------------------------------------------------------------

var captureStackTrace = Error.captureStackTrace;
if (captureStackTrace === undefined) {
  captureStackTrace = function captureStackTrace(error) {
    var container = new Error();

    defineProperty(error, "stack", {
      configurable: true,
      get: function getStack() {
        var stack = container.stack;

        // Replace property with value for faster future accesses.
        defineProperty(this, "stack", {
          configurable: true,
          value: stack,
          writable: true,
        });

        return stack;
      },
      set: function setStack(stack) {
        defineProperty(error, "stack", {
          configurable: true,
          value: stack,
          writable: true,
        });
      },
    });
  };
}

// -------------------------------------------------------------------

function BaseError(message) {
  if (message !== undefined) {
    defineProperty(this, "message", {
      configurable: true,
      value: message,
      writable: true,
    });
  }

  var cname = this.constructor.name;
  if (cname !== undefined && cname !== this.name) {
    defineProperty(this, "name", {
      configurable: true,
      value: cname,
      writable: true,
    });
  }

  captureStackTrace(this, this.constructor);
}

BaseError.prototype = Object.create(Error.prototype, {
  // See: https://github.com/JsCommunity/make-error/issues/4
  constructor: {
    configurable: true,
    value: BaseError,
    writable: true,
  },
});

// -------------------------------------------------------------------

// Sets the name of a function if possible (depends of the JS engine).
var setFunctionName = (function() {
  function setFunctionName(fn, name) {
    return defineProperty(fn, "name", {
      configurable: true,
      value: name,
    });
  }
  try {
    var f = function() {};
    setFunctionName(f, "foo");
    if (f.name === "foo") {
      return setFunctionName;
    }
  } catch (_) {}
})();

// -------------------------------------------------------------------

function makeError(constructor, super_) {
  if (super_ == null || super_ === Error) {
    super_ = BaseError;
  } else if (typeof super_ !== "function") {
    throw new TypeError("super_ should be a function");
  }

  var name;
  if (typeof constructor === "string") {
    name = constructor;
    constructor =
      construct !== undefined
        ? function() {
            return construct(super_, arguments, this.constructor);
          }
        : function() {
            super_.apply(this, arguments);
          };

    // If the name can be set, do it once and for all.
    if (setFunctionName !== undefined) {
      setFunctionName(constructor, name);
      name = undefined;
    }
  } else if (typeof constructor !== "function") {
    throw new TypeError("constructor should be either a string or a function");
  }

  // Also register the super constructor also as `constructor.super_` just
  // like Node's `util.inherits()`.
  //
  // eslint-disable-next-line dot-notation
  constructor.super_ = constructor["super"] = super_;

  var properties = {
    constructor: {
      configurable: true,
      value: constructor,
      writable: true,
    },
  };

  // If the name could not be set on the constructor, set it on the
  // prototype.
  if (name !== undefined) {
    properties.name = {
      configurable: true,
      value: name,
      writable: true,
    };
  }
  constructor.prototype = Object.create(super_.prototype, properties);

  return constructor;
}
exports = module.exports = makeError;
exports.BaseError = BaseError;


/***/ }),

/***/ "./node_modules/nano-pubsub/index.js":
/*!*******************************************!*\
  !*** ./node_modules/nano-pubsub/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function Pubsub() {
  var subscribers = []
  return {
    subscribe: subscribe,
    publish: publish
  }
  function subscribe(subscriber) {
    subscribers.push(subscriber)
    return function unsubscribe() {
      var idx = subscribers.indexOf(subscriber)
      if (idx > -1) {
        subscribers.splice(idx, 1)
      }
    }
  }
  function publish() {
    for (var i = 0; i < subscribers.length; i++) {
      subscribers[i].apply(null, arguments)
    }
  }
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var t,e=(t=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof t&&"default"in t?t.default:t,o=/https?|ftp|gopher|file/;function r(t){"string"==typeof t&&(t=d(t));var r=function(t,e,o){var r=t.auth,a=t.hostname,s=t.protocol||"",p=t.pathname||"",n=t.hash||"",c=t.query||"",h=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",t.host?h=r+t.host:a&&(h=r+(~a.indexOf(":")?"["+a+"]":a),t.port&&(h+=":"+t.port)),c&&"object"==typeof c&&(c=e.encode(c));var l=t.search||c&&"?"+c||"";return s&&":"!==s.substr(-1)&&(s+=":"),t.slashes||(!s||o.test(s))&&!1!==h?(h="//"+(h||""),p&&"/"!==p[0]&&(p="/"+p)):h||(h=""),n&&"#"!==n[0]&&(n="#"+n),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:h,pathname:p=p.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:n}}(t,e,o);return""+r.protocol+r.host+r.pathname+r.search+r.hash}var a="http://",s="w.w",p=a+s,n=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,c=/https?|ftp|gopher|file/;function h(t,e){var o="string"==typeof t?d(t):t;t="object"==typeof t?r(t):t;var s=d(e),h="";o.protocol&&!o.slashes&&(h=o.protocol,t=t.replace(o.protocol,""),h+="/"===e[0]||"/"===t[0]?"/":""),h&&s.protocol&&(h="",s.slashes||(h=s.protocol,e=e.replace(s.protocol,"")));var l=t.match(n);l&&!s.protocol&&(t=t.substr((h=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(e)&&(h=h.slice(0,-1)));var i=new URL(t,p+"/"),u=new URL(e,i).toString().replace(p,""),f=s.protocol||o.protocol;return f+=o.slashes||s.slashes?"//":"",!h&&f?u=u.replace(a,f):h&&(u=u.replace(a,"")),c.test(u)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==u.slice(-1)||(u=u.slice(0,-1)),h&&(u=h+("/"===u[0]?u.substr(1):u)),u}function l(){}l.prototype.parse=d,l.prototype.format=r,l.prototype.resolve=h,l.prototype.resolveObject=h;var i=/^https?|ftp|gopher|file/,u=/^(.*?)([#?].*)/,f=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(t,o,a){if(void 0===o&&(o=!1),void 0===a&&(a=!1),t&&"object"==typeof t&&t instanceof l)return t;var n=(t=t.trim()).match(u);t=n?n[1].replace(/\\/g,"/")+n[2]:t.replace(/\\/g,"/"),v.test(t)&&"/"!==t.slice(-1)&&(t+="/");var c=!/(^javascript)/.test(t)&&t.match(f),h=m.test(t),d="";c&&(i.test(c[1])||(d=c[1].toLowerCase(),t=""+c[2]+c[3]),c[2]||(h=!1,i.test(c[1])?(d=c[1],t=""+c[3]):t="//"+c[3]),3!==c[2].length&&1!==c[2].length||(d=c[1],t="/"+c[3]));var g,y=(n?n[1]:t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=y&&y[1],C=new l,U="",j="";try{g=new URL(t)}catch(e){U=e,d||a||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(j="/",t=t.substr(1));try{g=new URL(t,p)}catch(t){return C.protocol=d,C.href=d,C}}C.slashes=h&&!j,C.host=g.host===s?"":g.host,C.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),C.protocol=U?d||null:g.protocol,C.search=g.search.replace(/\\/g,"%5C"),C.hash=g.hash.replace(/\\/g,"%5C");var w=t.split("#");!C.search&&~w[0].indexOf("?")&&(C.search="?"),C.hash||""!==w[1]||(C.hash="#"),C.query=o?e.decode(g.search.substr(1)):C.search.substr(1),C.pathname=j+(c?function(t){return t.replace(/['^|`]/g,function(t){return"%"+t.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(t,e){try{return decodeURIComponent(e).split("").map(function(t){var e=t.charCodeAt();return e>256||/^[a-z0-9]$/i.test(t)?t:"%"+e.toString(16).toUpperCase()}).join("")}catch(t){return e}})}(g.pathname):g.pathname),"about:"===C.protocol&&"blank"===C.pathname&&(C.protocol="",C.pathname=""),U&&"/"!==t[0]&&(C.pathname=C.pathname.substr(1)),d&&!i.test(d)&&"/"!==t.slice(-1)&&"/"===C.pathname&&(C.pathname=""),C.path=C.pathname+C.search,C.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),C.port=g.port,b&&!C.host.endsWith(b)&&(C.host+=b,C.port=b.slice(1)),C.href=j?""+C.pathname+C.search+C.hash:r(C);var x=/^(file)/.test(C.href)?["host","hostname"]:[];return Object.keys(C).forEach(function(t){~x.indexOf(t)||(C[t]=C[t]||null)}),C}exports.parse=d,exports.format=r,exports.resolve=h,exports.resolveObject=function(t,e){return d(h(t,e))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fmnt%2Fc%2FUsers%2FVeh%2FDocuments%2FGitHub%2Fgundla%2Fweb%2Fpages%2Findex.js!./":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fmnt%2Fc%2FUsers%2FVeh%2FDocuments%2FGitHub%2Fgundla%2Fweb%2Fpages%2Findex.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/parse-headers/parse-headers.js":
/*!*****************************************************!*\
  !*** ./node_modules/parse-headers/parse-headers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/empty.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/defaultIfEmpty.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/defaultIfEmpty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
}
exports.defaultIfEmpty = defaultIfEmpty;
var DefaultIfEmptyOperator = (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
var DefaultIfEmptySubscriber = (function (_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/filter.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/filter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scan_1 = __webpack_require__(/*! ./scan */ "./node_modules/rxjs/internal/operators/scan.js");
var takeLast_1 = __webpack_require__(/*! ./takeLast */ "./node_modules/rxjs/internal/operators/takeLast.js");
var defaultIfEmpty_1 = __webpack_require__(/*! ./defaultIfEmpty */ "./node_modules/rxjs/internal/operators/defaultIfEmpty.js");
var pipe_1 = __webpack_require__(/*! ../util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return pipe_1.pipe(scan_1.scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast_1.takeLast(1))(source);
    };
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/scan.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/scan.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
exports.scan = scan;
var ScanOperator = (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) { hasSeed = false; }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
var ScanSubscriber = (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/takeLast.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/takeLast.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
var empty_1 = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) {
            return empty_1.empty();
        }
        else {
            return source.lift(new TakeLastOperator(count));
        }
    };
}
exports.takeLast = takeLast;
var TakeLastOperator = (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
var TakeLastSubscriber = (function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentOutOfRangeErrorImpl = (function () {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/same-origin/index.js":
/*!*******************************************!*\
  !*** ./node_modules/same-origin/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

module.exports = function(uri1, uri2, ieMode) {
    if (uri1 === uri2) {
        return true;
    }

    var url1 = url.parse(uri1, false, true);
    var url2 = url.parse(uri2, false, true);

    var url1Port = url1.port|0 || (url1.protocol === 'https' ? 443 : 80);
    var url2Port = url2.port|0 || (url2.protocol === 'https' ? 443 : 80);

    var match = {
        proto: url1.protocol === url2.protocol,
        hostname: url1.hostname === url2.hostname,
        port: url1Port === url2Port
    };

    return ((match.proto && match.hostname) && (match.port || ieMode));
};

/***/ }),

/***/ "./node_modules/url-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js")
  , qs = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js")
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);




var _this = undefined,
    _jsxFileName = "/mnt/c/Users/Veh/Documents/GitHub/gundla/web/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["*[_type == \"post\"][0]{ title }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Index = function Index(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? "Missing title" : _props$title,
      _props$name = props.name,
      name = _props$name === void 0 ? "Missing name" : _props$name;
  console.log(props);
  return __jsx("article", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, title), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "By ", name));
};

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var _context$query$slug, slug, query;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // It's important to default the slug so that it doesn't return "undefined"
            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? "" : _context$query$slug;
            query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
            _context.next = 4;
            return _client__WEBPACK_IMPORTED_MODULE_4__["default"].fetch(query, {
              slug: slug
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fmnt%2Fc%2FUsers%2FVeh%2FDocuments%2FGitHub%2Fgundla%2Fweb%2Fpages%2Findex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJleHhhcnMvZXZlbnRzb3VyY2UtcG9seWZpbGwvc3JjL2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2Fzc2V0cy9hc3NldHNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvYXV0aC9hdXRoQ2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9kYXRhL2RhdGFNZXRob2RzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2RhdGEvZW5jb2RlUXVlcnlTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvZGF0YS9saXN0ZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvZGF0YS9wYXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9kYXRhL3RyYW5zYWN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2RhdGFzZXRzL2RhdGFzZXRzQ2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2h0dHAvYnJvd3Nlck1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvaHR0cC9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvaHR0cC9xdWVyeVN0cmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9odHRwL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvaHR0cC9yZXF1ZXN0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9wcm9qZWN0cy9wcm9qZWN0c0NsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9zYW5pdHlDbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvdXNlcnMvdXNlcnNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvdXRpbC9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi91dGlsL2dldFNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi91dGlsL29uY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvdXRpbC9waWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3ZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2V2ZW50c291cmNlL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2dlbmVyYXRlLWhlbHAtdXJsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9vYnNlcnZhYmxlL2xpYi9TYW5pdHlPYnNlcnZhYmxlTWluaW1hbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvb2JzZXJ2YWJsZS9taW5pbWFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL21hcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvcmVkdWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZGVlcC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9taWRkbGV3YXJlL2RlZmF1bHRPcHRpb25zUHJvY2Vzc29yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9taWRkbGV3YXJlL2RlZmF1bHRPcHRpb25zVmFsaWRhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9taWRkbGV3YXJlL2pzb25SZXF1ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9taWRkbGV3YXJlL2pzb25SZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvbWlkZGxld2FyZS9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9taWRkbGV3YXJlL3Byb2dyZXNzL2Jyb3dzZXItcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvcHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL3JlcXVlc3QvYnJvd3Nlci1yZXF1ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi91dGlsL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvdXRpbC9taWRkbGV3YXJlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyb3EvbGliL2dyb3EuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pcy1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pc29iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21ha2UtZXJyb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uYW5vLXB1YnN1Yi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25hdGl2ZS11cmwvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVxdWlyZXMtcG9ydC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2VtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVmYXVsdElmRW1wdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9zY2FuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZUxhc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvY2FuUmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaG9zdFJlcG9ydEVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3RvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NhbWUtb3JpZ2luL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXJsLXBhcnNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJJbmRleCIsInByb3BzIiwidGl0bGUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInNsdWciLCJncm9xIiwiY2xpZW50IiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZUEsb0hBQVksQ0FBQztBQUN4QkMsV0FBUyxFQUFFLFVBRGE7QUFDRDtBQUN2QkMsU0FBTyxFQUFFLFlBRmU7QUFFRDtBQUN2QkMsUUFBTSxFQUFFLElBSGdCLENBR1Y7O0FBSFUsQ0FBRCxDQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUNWQSxpQkFBaUIsbUJBQU8sQ0FBQywwRUFBcUI7Ozs7Ozs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLE1BQU0sSUFBMEM7QUFDaEQ7QUFDQSxJQUFJLGlDQUFPLEVBQUUsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUN2QixHQUFHLE1BQU0sc0JBV047QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQ0FBcUMsaUNBQWlDO0FBQ3RFO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGFBQWE7QUFDbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMWtC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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNsTmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsNENBQTRDO0FBQzVD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OztBQUVBOzs7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWIsaUNBQWlDLG1CQUFPLENBQUMsMERBQVU7QUFDbkQscUNBQXFDLG1CQUFPLENBQUMsMERBQVU7Ozs7Ozs7Ozs7Ozs7QUNIMUM7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsZ0ZBQWU7QUFDckMscUJBQXFCLG1CQUFPLENBQUMsOEVBQTJCOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNB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QTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEseUNBQXlDOztBQUV6QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBEO0FBQzFEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIs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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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Q0FBQ00sZUFBTjtBQUFBLDhMQUF3QixpQkFBZ0JDLE9BQWhCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEI7QUFEb0Isa0NBRUVBLE9BQU8sQ0FBQ0MsS0FGVixDQUVaQyxJQUZZLEVBRVpBLElBRlksb0NBRUwsRUFGSztBQUdkRCxpQkFIYyxHQUdORSwyQ0FITTtBQUFBO0FBQUEsbUJBSVBDLCtDQUFNLENBQUNDLEtBQVAsQ0FBYUosS0FBYixFQUFvQjtBQUFFQyxrQkFBSSxFQUFKQTtBQUFGLGFBQXBCLENBSk87O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPZVQsb0VBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XG4gICAgcHJvamVjdElkOiBcImFhcjVtMTVvXCIsIC8vIHlvdSBjYW4gZmluZCB0aGlzIGluIHNhbml0eS5qc29uXG4gICAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgICB1c2VDZG46IHRydWUsIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKlxuICogRXZlbnRTb3VyY2UgcG9seWZpbGxcbiAqIE9yaWdpbmFsbHkgcHVibGlzaGVkIGJ5IHNjIEFtdlRlayBzcmwgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbXZ0ZWsvRXZlbnRTb3VyY2UpIC0gZGV2ZWxAYW12dGVrLmNvbVxuICogRm9ya2VkIGJ5IEVzcGVuIEhvdmxhbmRzZGFsIHRvIGZpeCBhIGZldyBpc3N1ZXMgKyBwdWJsaXNoIGxhdGVzdCB2ZXJzaW9uXG4gKi9cblxuOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAvKiBnbG9iYWwgZGVmaW5lICovXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICBpZiAoZ2xvYmFsLkV2ZW50U291cmNlICYmICFnbG9iYWwuX2V2ZW50U291cmNlSW1wb3J0UHJlZml4KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgZXZzSW1wb3J0TmFtZSA9IChyb290Ll9ldmVudFNvdXJjZUltcG9ydFByZWZpeCB8fCAnJykgKyAnRXZlbnRTb3VyY2UnXG4gICAgcm9vdFtldnNJbXBvcnROYW1lXSA9IGZhY3RvcnkoKVxuICB9XG59KSh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzIDogc2VsZiwgZnVuY3Rpb24gKCkge1xuICB2YXIgRXZlbnRTb3VyY2UgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKCF1cmwgfHwgdHlwZW9mIHVybCAhPSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpXG4gICAgfVxuXG4gICAgdGhpcy5VUkwgPSB1cmxcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucylcbiAgICB2YXIgZXZzID0gdGhpc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZXZzLnBvbGwoKVxuICAgIH0sIDApXG4gIH1cblxuICBFdmVudFNvdXJjZS5wcm90b3R5cGUgPSB7XG4gICAgQ09OTkVDVElORzogMCxcblxuICAgIE9QRU46IDEsXG5cbiAgICBDTE9TRUQ6IDIsXG5cbiAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgbG9nZ2luZ0VuYWJsZWQ6IGZhbHNlLFxuXG4gICAgICBsb2dnaW5nUHJlZml4OiAnZXZlbnRzb3VyY2UnLFxuXG4gICAgICBpbnRlcnZhbDogNTAwLCAvLyBtaWxsaXNlY29uZHNcblxuICAgICAgYnVmZmVyU2l6ZUxpbWl0OiAyNTYgKiAxMDI0LCAvLyBieXRlc1xuXG4gICAgICBzaWxlbnRUaW1lb3V0OiAzMDAwMDAsIC8vIG1pbGxpc2Vjb25kc1xuXG4gICAgICBnZXRBcmdzOiB7XG4gICAgICAgIGV2c19idWZmZXJfc2l6ZV9saW1pdDogMjU2ICogMTAyNCxcbiAgICAgIH0sXG5cbiAgICAgIHhockhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAndGV4dC9ldmVudC1zdHJlYW0nLFxuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRPcHRpb25zXG4gICAgICB2YXIgb3B0aW9uXG5cbiAgICAgIC8vIHNldCBhbGwgZGVmYXVsdCBvcHRpb25zLi4uXG4gICAgICBmb3IgKG9wdGlvbiBpbiBkZWZhdWx0cykge1xuICAgICAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgICAgIHRoaXNbb3B0aW9uXSA9IGRlZmF1bHRzW29wdGlvbl1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBvdmVycmlkZSB3aXRoIHdoYXQgaXMgaW4gb3B0aW9uc1xuICAgICAgZm9yIChvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9uIGluIGRlZmF1bHRzICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgICAgIHRoaXNbb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGdldEFyZ3Mgb3B0aW9uIGlzIGVuYWJsZWRcbiAgICAgIC8vIGVuc3VyZSBldnNfYnVmZmVyX3NpemVfbGltaXQgY29ycmVzcG9uZHMgdG8gYnVmZmVyU2l6ZUxpbWl0XG4gICAgICBpZiAodGhpcy5nZXRBcmdzICYmIHRoaXMuYnVmZmVyU2l6ZUxpbWl0KSB7XG4gICAgICAgIHRoaXMuZ2V0QXJncy5ldnNfYnVmZmVyX3NpemVfbGltaXQgPSB0aGlzLmJ1ZmZlclNpemVMaW1pdFxuICAgICAgfVxuXG4gICAgICAvLyBpZiBjb25zb2xlIGlzIG5vdCBhdmFpbGFibGUsIGZvcmNlIGxvZ2dpbmdFbmFibGVkIHRvIGZhbHNlXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgY29uc29sZS5sb2cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubG9nZ2luZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2c6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sb2dnaW5nRW5hYmxlZCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZygnWycgKyB0aGlzLmxvZ2dpbmdQcmVmaXggKyAnXTonICsgbWVzc2FnZSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcG9sbDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSB0aGlzLkNMT1NFRCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhbnVwKClcbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdGhpcy5DT05ORUNUSU5HXG4gICAgICAgIHRoaXMuY3Vyc29yID0gMFxuICAgICAgICB0aGlzLmNhY2hlID0gJydcbiAgICAgICAgdGhpcy5feGhyID0gbmV3IHRoaXMuWEhSKHRoaXMpXG4gICAgICAgIHRoaXMucmVzZXROb0FjdGl2aXR5VGltZXIoKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGluIGFuIGF0dGVtcHQgdG8gc2lsZW5jZSB0aGUgZXJyb3JzXG4gICAgICAgIHRoaXMubG9nKCdUaGVyZSB3ZXJlIGVycm9ycyBpbnNpZGUgdGhlIHBvb2wgdHJ5LWNhdGNoJylcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdlcnJvcicsIHt0eXBlOiAnZXJyb3InLCBkYXRhOiBlcnIubWVzc2FnZX0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIHBvbGxBZ2FpbjogZnVuY3Rpb24gKGludGVydmFsKSB7XG4gICAgICAvLyBzY2hlZHVsZSBwb2xsIHRvIGJlIGNhbGxlZCBhZnRlciBpbnRlcnZhbCBtaWxsaXNlY29uZHNcbiAgICAgIHZhciBldnMgPSB0aGlzXG4gICAgICBldnMucmVhZHlTdGF0ZSA9IGV2cy5DT05ORUNUSU5HXG4gICAgICBldnMuZGlzcGF0Y2hFdmVudCgnZXJyb3InLCB7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIGRhdGE6ICdSZWNvbm5lY3RpbmcgJyxcbiAgICAgIH0pXG4gICAgICB0aGlzLl9wb2xsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZzLnBvbGwoKVxuICAgICAgfSwgaW50ZXJ2YWwgfHwgMClcbiAgICB9LFxuXG4gICAgY2xlYW51cDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5sb2coJ2V2cyBjbGVhbmluZyB1cCcpXG5cbiAgICAgIGlmICh0aGlzLl9wb2xsVGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9wb2xsVGltZXIpXG4gICAgICAgIHRoaXMuX3BvbGxUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX25vQWN0aXZpdHlUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX25vQWN0aXZpdHlUaW1lcilcbiAgICAgICAgdGhpcy5fbm9BY3Rpdml0eVRpbWVyID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5feGhyKSB7XG4gICAgICAgIHRoaXMuX3hoci5hYm9ydCgpXG4gICAgICAgIHRoaXMuX3hociA9IG51bGxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzZXROb0FjdGl2aXR5VGltZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnNpbGVudFRpbWVvdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX25vQWN0aXZpdHlUaW1lcikge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fbm9BY3Rpdml0eVRpbWVyKVxuICAgICAgICB9XG4gICAgICAgIHZhciBldnMgPSB0aGlzXG4gICAgICAgIHRoaXMuX25vQWN0aXZpdHlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGV2cy5sb2coJ1RpbWVvdXQhIHNpbGVudFRJbWVvdXQ6JyArIGV2cy5zaWxlbnRUaW1lb3V0KVxuICAgICAgICAgIGV2cy5wb2xsQWdhaW4oKVxuICAgICAgICB9LCB0aGlzLnNpbGVudFRpbWVvdXQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0aGlzLkNMT1NFRFxuICAgICAgdGhpcy5sb2coJ0Nsb3NpbmcgY29ubmVjdGlvbi4gcmVhZHlTdGF0ZTogJyArIHRoaXMucmVhZHlTdGF0ZSlcbiAgICAgIHRoaXMuY2xlYW51cCgpXG4gICAgfSxcblxuICAgIF9vbnhocmRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5feGhyXG5cbiAgICAgIGlmIChyZXF1ZXN0LmlzUmVhZHkoKSAmJiAhcmVxdWVzdC5oYXNFcnJvcigpKSB7XG4gICAgICAgIC8vIHJlc2V0IHRoZSB0aW1lciwgYXMgd2UgaGF2ZSBhY3Rpdml0eVxuICAgICAgICB0aGlzLnJlc2V0Tm9BY3Rpdml0eVRpbWVyKClcblxuICAgICAgICAvLyBtb3ZlIHRoaXMgRXZlbnRTb3VyY2UgdG8gT1BFTiBzdGF0ZS4uLlxuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IHRoaXMuQ09OTkVDVElORykge1xuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHRoaXMuT1BFTlxuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb3BlbicsIHt0eXBlOiAnb3Blbid9KVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJ1ZmZlciA9IHJlcXVlc3QuZ2V0QnVmZmVyKClcblxuICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCA+IHRoaXMuYnVmZmVyU2l6ZUxpbWl0KSB7XG4gICAgICAgICAgdGhpcy5sb2coJ2J1ZmZlci5sZW5ndGggPiB0aGlzLmJ1ZmZlclNpemVMaW1pdCcpXG4gICAgICAgICAgdGhpcy5wb2xsQWdhaW4oKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3Vyc29yID09IDAgJiYgYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBza2lwIGJ5dGUgb3JkZXIgbWFyayBcXHVGRUZGIGNoYXJhY3RlciBpZiBpdCBzdGFydHMgdGhlIHN0cmVhbVxuICAgICAgICAgIGlmIChidWZmZXIuc3Vic3RyaW5nKDAsIDEpID09ICdcXHVGRUZGJykge1xuICAgICAgICAgICAgdGhpcy5jdXJzb3IgPSAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhc3RNZXNzYWdlSW5kZXggPSB0aGlzLmxhc3RNZXNzYWdlSW5kZXgoYnVmZmVyKVxuICAgICAgICBpZiAobGFzdE1lc3NhZ2VJbmRleFswXSA+PSB0aGlzLmN1cnNvcikge1xuICAgICAgICAgIHZhciBuZXdjdXJzb3IgPSBsYXN0TWVzc2FnZUluZGV4WzFdXG4gICAgICAgICAgdmFyIHRvcGFyc2UgPSBidWZmZXIuc3Vic3RyaW5nKHRoaXMuY3Vyc29yLCBuZXdjdXJzb3IpXG4gICAgICAgICAgdGhpcy5wYXJzZVN0cmVhbSh0b3BhcnNlKVxuICAgICAgICAgIHRoaXMuY3Vyc29yID0gbmV3Y3Vyc29yXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiByZXF1ZXN0IGlzIGZpbmlzaGVkLCByZW9wZW4gdGhlIGNvbm5lY3Rpb25cbiAgICAgICAgaWYgKHJlcXVlc3QuaXNEb25lKCkpIHtcbiAgICAgICAgICB0aGlzLmxvZygncmVxdWVzdC5pc0RvbmUoKS4gcmVvcGVuaW5nIHRoZSBjb25uZWN0aW9uJylcbiAgICAgICAgICB0aGlzLnBvbGxBZ2Fpbih0aGlzLmludGVydmFsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gdGhpcy5DTE9TRUQpIHtcbiAgICAgICAgdGhpcy5sb2coJ3RoaXMucmVhZHlTdGF0ZSAhPT0gdGhpcy5DTE9TRUQnKVxuICAgICAgICB0aGlzLnBvbGxBZ2Fpbih0aGlzLmludGVydmFsKVxuXG4gICAgICAgIC8vTVY6IFVuc3VyZSB3aHkgYW4gZXJyb3Igd2FzIHByZXZpb3VzbHkgZGlzcGF0Y2hlZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwYXJzZVN0cmVhbTogZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAvLyBub3JtYWxpemUgbGluZSBzZXBhcmF0b3JzIChcXHJcXG4sXFxyLFxcbikgdG8gXFxuXG4gICAgICAvLyByZW1vdmUgd2hpdGUgc3BhY2VzIHRoYXQgbWF5IHByZWNlZGUgXFxuXG4gICAgICBjaHVuayA9IHRoaXMuY2FjaGUgKyB0aGlzLm5vcm1hbGl6ZVRvTEYoY2h1bmspXG5cbiAgICAgIHZhciBldmVudHMgPSBjaHVuay5zcGxpdCgnXFxuXFxuJylcblxuICAgICAgdmFyIGksIGosIGV2ZW50VHlwZSwgZGF0YXMsIGxpbmUsIHJldHJ5XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGV2ZW50VHlwZSA9ICdtZXNzYWdlJ1xuICAgICAgICBkYXRhcyA9IFtdXG4gICAgICAgIHZhciBwYXJ0cyA9IGV2ZW50c1tpXS5zcGxpdCgnXFxuJylcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsaW5lID0gdGhpcy50cmltV2hpdGVTcGFjZShwYXJ0c1tqXSlcblxuICAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJ2V2ZW50JykgPT0gMCkge1xuICAgICAgICAgICAgZXZlbnRUeXBlID0gbGluZS5yZXBsYWNlKC9ldmVudDo/XFxzKi8sICcnKVxuICAgICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCdyZXRyeScpID09IDApIHtcbiAgICAgICAgICAgIHJldHJ5ID0gcGFyc2VJbnQobGluZS5yZXBsYWNlKC9yZXRyeTo/XFxzKi8sICcnKSwgMTApXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHJldHJ5KSkge1xuICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gcmV0cnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignZGF0YScpID09IDApIHtcbiAgICAgICAgICAgIGRhdGFzLnB1c2gobGluZS5yZXBsYWNlKC9kYXRhOj9cXHMqLywgJycpKVxuICAgICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCdpZDonKSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RFdmVudElkID0gbGluZS5yZXBsYWNlKC9pZDo/XFxzKi8sICcnKVxuICAgICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCdpZCcpID09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMgcmVzZXRzIHRoZSBpZFxuXG4gICAgICAgICAgICB0aGlzLmxhc3RFdmVudElkID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhcy5sZW5ndGggJiYgdGhpcy5yZWFkeVN0YXRlICE9IHRoaXMuQ0xPU0VEKSB7XG4gICAgICAgICAgLy8gZGlzcGF0Y2ggYSBuZXcgZXZlbnRcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICAgICAgZGF0YXMuam9pbignXFxuJyksXG4gICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmxvY2F0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgdGhpcy5sYXN0RXZlbnRJZFxuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnRUeXBlLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhY2hlID0gZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVxuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbiAodHlwZSwgZXZlbnQpIHtcbiAgICAgIHZhciBoYW5kbGVycyA9IHRoaXNbJ18nICsgdHlwZSArICdIYW5kbGVycyddXG5cbiAgICAgIGlmIChoYW5kbGVycykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaGFuZGxlcnNbaV0uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpc1snb24nICsgdHlwZV0pIHtcbiAgICAgICAgdGhpc1snb24nICsgdHlwZV0uY2FsbCh0aGlzLCBldmVudClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpc1snXycgKyB0eXBlICsgJ0hhbmRsZXJzJ10pIHtcbiAgICAgICAgdGhpc1snXycgKyB0eXBlICsgJ0hhbmRsZXJzJ10gPSBbXVxuICAgICAgfVxuXG4gICAgICB0aGlzWydfJyArIHR5cGUgKyAnSGFuZGxlcnMnXS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBoYW5kbGVyKSB7XG4gICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzWydfJyArIHR5cGUgKyAnSGFuZGxlcnMnXVxuICAgICAgaWYgKCFoYW5kbGVycykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBpZiAoaGFuZGxlcnNbaV0gPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9wb2xsVGltZXI6IG51bGwsXG5cbiAgICBfbm9hY3Rpdml0eVRpbWVyOiBudWxsLFxuXG4gICAgX3hocjogbnVsbCxcblxuICAgIGxhc3RFdmVudElkOiBudWxsLFxuXG4gICAgY2FjaGU6ICcnLFxuXG4gICAgY3Vyc29yOiAwLFxuXG4gICAgb25lcnJvcjogbnVsbCxcblxuICAgIG9ubWVzc2FnZTogbnVsbCxcblxuICAgIG9ub3BlbjogbnVsbCxcblxuICAgIHJlYWR5U3RhdGU6IDAsXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gaGVscGVycyBmdW5jdGlvbnNcbiAgICAvLyB0aG9zZSBhcmUgYXR0YWNoZWQgdG8gcHJvdG90eXBlIHRvIGVhc2UgcmV1c2UgYW5kIHRlc3RpbmcuLi5cblxuICAgIHVybFdpdGhQYXJhbXM6IGZ1bmN0aW9uIChiYXNlVVJMLCBwYXJhbXMpIHtcbiAgICAgIHZhciBlbmNvZGVkQXJncyA9IFtdXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgdmFyIGtleSwgdXJsYXJnXG4gICAgICAgIHZhciB1cmxpemUgPSBlbmNvZGVVUklDb21wb25lbnRcblxuICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHVybGFyZyA9IHVybGl6ZShrZXkpICsgJz0nICsgdXJsaXplKHBhcmFtc1trZXldKVxuICAgICAgICAgICAgZW5jb2RlZEFyZ3MucHVzaCh1cmxhcmcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmNvZGVkQXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChiYXNlVVJMLmluZGV4T2YoJz8nKSA9PSAtMSkgcmV0dXJuIGJhc2VVUkwgKyAnPycgKyBlbmNvZGVkQXJncy5qb2luKCcmJylcbiAgICAgICAgcmV0dXJuIGJhc2VVUkwgKyAnJicgKyBlbmNvZGVkQXJncy5qb2luKCcmJylcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlVVJMXG4gICAgfSxcblxuICAgIGxhc3RNZXNzYWdlSW5kZXg6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICB2YXIgbG4yID0gdGV4dC5sYXN0SW5kZXhPZignXFxuXFxuJylcbiAgICAgIHZhciBscjIgPSB0ZXh0Lmxhc3RJbmRleE9mKCdcXHJcXHInKVxuICAgICAgdmFyIGxybG4yID0gdGV4dC5sYXN0SW5kZXhPZignXFxyXFxuXFxyXFxuJylcblxuICAgICAgaWYgKGxybG4yID4gTWF0aC5tYXgobG4yLCBscjIpKSB7XG4gICAgICAgIHJldHVybiBbbHJsbjIsIGxybG4yICsgNF1cbiAgICAgIH1cbiAgICAgIHJldHVybiBbTWF0aC5tYXgobG4yLCBscjIpLCBNYXRoLm1heChsbjIsIGxyMikgKyAyXVxuICAgIH0sXG5cbiAgICB0cmltV2hpdGVTcGFjZTogZnVuY3Rpb24gKHN0cikge1xuICAgICAgLy8gdG8gcmVtb3ZlIHdoaXRlc3BhY2VzIGxlZnQgYW5kIHJpZ2h0IG9mIHN0cmluZ1xuXG4gICAgICB2YXIgcmVUcmltID0gL14oXFxzfFxcdTAwQTApK3woXFxzfFxcdTAwQTApKyQvZ1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlVHJpbSwgJycpXG4gICAgfSxcblxuICAgIG5vcm1hbGl6ZVRvTEY6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIC8vIHJlcGxhY2UgXFxyIGFuZCBcXHJcXG4gd2l0aCBcXG5cbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxyXFxufFxcci9nLCAnXFxuJylcbiAgICB9LFxuICB9XG5cbiAgaWYgKGlzT2xkSUUoKSkge1xuICAgIEV2ZW50U291cmNlLmlzUG9seWZpbGwgPSAnSUVfOC05J1xuXG4gICAgLy8gcGF0Y2ggRXZlbnRTb3VyY2UgZGVmYXVsdE9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdHMgPSBFdmVudFNvdXJjZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnNcbiAgICBkZWZhdWx0cy54aHJIZWFkZXJzID0gbnVsbCAvLyBubyBoZWFkZXJzIHdpbGwgYmUgc2VudFxuICAgIGRlZmF1bHRzLmdldEFyZ3MuZXZzX3ByZWFtYmxlID0gMjA0OCArIDhcblxuICAgIC8vIEV2ZW50U291cmNlIHdpbGwgc2VuZCByZXF1ZXN0IHVzaW5nIEludGVybmV0IEV4cGxvcmVyIFhEb21haW5SZXF1ZXN0XG4gICAgRXZlbnRTb3VyY2UucHJvdG90eXBlLlhIUiA9IGZ1bmN0aW9uIChldnMpIHtcbiAgICAgIC8qIGdsb2JhbCBYRG9tYWluUmVxdWVzdCAqL1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWERvbWFpblJlcXVlc3QoKVxuICAgICAgdGhpcy5fcmVxdWVzdCA9IHJlcXVlc3RcblxuICAgICAgLy8gc2V0IGhhbmRsZXJzXG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcXVlc3QuX3JlYWR5ID0gdHJ1ZVxuICAgICAgICBldnMuX29ueGhyZGF0YSgpXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlXG4gICAgICAgIGV2cy5fb254aHJkYXRhKClcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9mYWlsZWQgPSB0cnVlXG4gICAgICAgIGV2cy5yZWFkeVN0YXRlID0gZXZzLkNMT1NFRFxuICAgICAgICBldnMuZGlzcGF0Y2hFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICBkYXRhOiAnWERvbWFpblJlcXVlc3QgZXJyb3InLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZmFpbGVkID0gdHJ1ZVxuICAgICAgICBldnMucmVhZHlTdGF0ZSA9IGV2cy5DTE9TRURcbiAgICAgICAgZXZzLmRpc3BhdGNoRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgZGF0YTogJ1hEb21haW5SZXF1ZXN0IHRpbWVkIG91dCcsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFhEb21haW5SZXF1ZXN0IGRvZXMgbm90IGFsbG93IHNldHRpbmcgY3VzdG9tIGhlYWRlcnNcbiAgICAgIC8vIElmIEV2ZW50U291cmNlIGhhcyBlbmFibGVkIHRoZSB1c2Ugb2YgR0VUIGFyZ3VtZW50c1xuICAgICAgLy8gd2UgYWRkIHBhcmFtZXRlcnMgdG8gVVJMIHNvIHRoYXQgc2VydmVyIGNhbiBhZGFwdCB0aGUgc3RyZWFtLi4uXG4gICAgICB2YXIgcmVxR2V0QXJncyA9IHt9XG4gICAgICBpZiAoZXZzLmdldEFyZ3MpIHtcbiAgICAgICAgLy8gY29weSBldnMuZ2V0QXJncyBpbiByZXFHZXRBcmdzXG4gICAgICAgIHZhciBkZWZhdWx0QXJncyA9IGV2cy5nZXRBcmdzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0QXJncykge1xuICAgICAgICAgIGlmIChkZWZhdWx0QXJncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXFHZXRBcmdzW2tleV0gPSBkZWZhdWx0QXJnc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChldnMubGFzdEV2ZW50SWQpIHtcbiAgICAgICAgICByZXFHZXRBcmdzLmV2c19sYXN0X2V2ZW50X2lkID0gZXZzLmxhc3RFdmVudElkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHNlbmQgdGhlIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBldnMudXJsV2l0aFBhcmFtcyhldnMuVVJMLCByZXFHZXRBcmdzKSlcbiAgICAgIHJlcXVlc3Quc2VuZCgpXG4gICAgfVxuXG4gICAgRXZlbnRTb3VyY2UucHJvdG90eXBlLlhIUi5wcm90b3R5cGUgPSB7XG4gICAgICB1c2VYRG9tYWluUmVxdWVzdDogdHJ1ZSxcblxuICAgICAgX3JlcXVlc3Q6IG51bGwsXG5cbiAgICAgIF9yZWFkeTogZmFsc2UsIC8vIHRydWUgd2hlbiBwcm9ncmVzcyBldmVudHMgYXJlIGRpc3BhdGNoZWRcblxuICAgICAgX2xvYWRlZDogZmFsc2UsIC8vIHRydWUgd2hlbiByZXF1ZXN0IGhhcyBiZWVuIGxvYWRlZFxuXG4gICAgICBfZmFpbGVkOiBmYWxzZSwgLy8gdHJ1ZSBpZiB3aGVuIHJlcXVlc3QgaXMgaW4gZXJyb3JcblxuICAgICAgaXNSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5fcmVhZHlcbiAgICAgIH0sXG5cbiAgICAgIGlzRG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5fbG9hZGVkXG4gICAgICB9LFxuXG4gICAgICBoYXNFcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5fZmFpbGVkXG4gICAgICB9LFxuXG4gICAgICBnZXRCdWZmZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJ2ID0gJydcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBydiA9IHRoaXMuX3JlcXVlc3QucmVzcG9uc2VUZXh0IHx8ICcnXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIGludGVudGlvbmFsIG5vb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnZcbiAgICAgIH0sXG5cbiAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0KSB7XG4gICAgICAgICAgdGhpcy5fcmVxdWVzdC5hYm9ydCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIEV2ZW50U291cmNlLmlzUG9seWZpbGwgPSAnWEhSJ1xuXG4gICAgLy8gRXZlbnRTb3VyY2Ugd2lsbCBzZW5kIHJlcXVlc3QgdXNpbmcgWE1MSHR0cFJlcXVlc3RcbiAgICBFdmVudFNvdXJjZS5wcm90b3R5cGUuWEhSID0gZnVuY3Rpb24gKGV2cykge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgdGhpcy5fcmVxdWVzdCA9IHJlcXVlc3RcbiAgICAgIGV2cy5feGhyID0gdGhpc1xuXG4gICAgICAvLyBzZXQgaGFuZGxlcnNcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID4gMSAmJiBldnMucmVhZHlTdGF0ZSAhPSBldnMuQ0xPU0VEKSB7XG4gICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwMCB8fCAocmVxdWVzdC5zdGF0dXMgPj0gMzAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSkge1xuICAgICAgICAgICAgZXZzLl9vbnhocmRhdGEoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0Ll9mYWlsZWQgPSB0cnVlXG4gICAgICAgICAgICBldnMucmVhZHlTdGF0ZSA9IGV2cy5DTE9TRURcbiAgICAgICAgICAgIGV2cy5kaXNwYXRjaEV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgZGF0YTogJ1RoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggJyArIHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGV2cy5jbG9zZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaW50ZW50aW9uYWwgbm9vcFxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGV2cy51cmxXaXRoUGFyYW1zKGV2cy5VUkwsIGV2cy5nZXRBcmdzKSwgdHJ1ZSlcblxuICAgICAgdmFyIGhlYWRlcnMgPSBldnMueGhySGVhZGVycyAvLyBtYXliZSBudWxsXG4gICAgICBmb3IgKHZhciBoZWFkZXIgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShoZWFkZXIpKSB7XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgaGVhZGVyc1toZWFkZXJdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZzLmxhc3RFdmVudElkKSB7XG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignTGFzdC1FdmVudC1JZCcsIGV2cy5sYXN0RXZlbnRJZClcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5zZW5kKClcbiAgICB9XG5cbiAgICBFdmVudFNvdXJjZS5wcm90b3R5cGUuWEhSLnByb3RvdHlwZSA9IHtcbiAgICAgIHVzZVhEb21haW5SZXF1ZXN0OiBmYWxzZSxcblxuICAgICAgX3JlcXVlc3Q6IG51bGwsXG5cbiAgICAgIF9mYWlsZWQ6IGZhbHNlLCAvLyB0cnVlIGlmIHdlIGhhdmUgaGFkIGVycm9ycy4uLlxuXG4gICAgICBpc1JlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0LnJlYWR5U3RhdGUgPj0gMlxuICAgICAgfSxcblxuICAgICAgaXNEb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNFxuICAgICAgfSxcblxuICAgICAgaGFzRXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZhaWxlZCB8fCB0aGlzLl9yZXF1ZXN0LnN0YXR1cyA+PSA0MDBcbiAgICAgIH0sXG5cbiAgICAgIGdldEJ1ZmZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcnYgPSAnJ1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJ2ID0gdGhpcy5fcmVxdWVzdC5yZXNwb25zZVRleHQgfHwgJydcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gaW50ZW50aW9uYWwgbm9vcFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydlxuICAgICAgfSxcblxuICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlcXVlc3QpIHtcbiAgICAgICAgICB0aGlzLl9yZXF1ZXN0LmFib3J0KClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBNZXNzYWdlRXZlbnQodHlwZSwgZGF0YSwgb3JpZ2luLCBsYXN0RXZlbnRJZCkge1xuICAgIHRoaXMuYnViYmxlcyA9IGZhbHNlXG4gICAgdGhpcy5jYW5jZWxCdWJibGUgPSBmYWxzZVxuICAgIHRoaXMuY2FuY2VsYWJsZSA9IGZhbHNlXG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCBudWxsXG4gICAgdGhpcy5vcmlnaW4gPSBvcmlnaW4gfHwgJydcbiAgICB0aGlzLmxhc3RFdmVudElkID0gbGFzdEV2ZW50SWQgfHwgJydcbiAgICB0aGlzLnR5cGUgPSB0eXBlIHx8ICdtZXNzYWdlJ1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgICAvL3JldHVybiB0cnVlIGlmIHdlIGFyZSBpbiBJRTggb3IgSUU5XG4gICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiZcbiAgICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0ICYmXG4gICAgICAgIG5ldyBYTUxIdHRwUmVxdWVzdCgpLnJlc3BvbnNlVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIEV2ZW50U291cmNlXG59KVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvbWFwJyksXG4gICAgbWFwID0gX3JlcXVpcmUubWFwO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9maWx0ZXInKSxcbiAgICBmaWx0ZXIgPSBfcmVxdWlyZTIuZmlsdGVyO1xuXG52YXIgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuLi9odHRwL3F1ZXJ5U3RyaW5nJyk7XG5cbnZhciB2YWxpZGF0b3JzID0gcmVxdWlyZSgnLi4vdmFsaWRhdG9ycycpO1xuXG5mdW5jdGlvbiBBc3NldHNDbGllbnQoY2xpZW50KSB7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5mdW5jdGlvbiB0b0RvY3VtZW50KGJvZHkpIHtcbiAgLy8gdG9kbzogcmV3cml0ZSB0byBqdXN0IHJldHVybiBib2R5LmRvY3VtZW50IGluIGEgd2hpbGVcbiAgdmFyIGRvY3VtZW50ID0gYm9keS5kb2N1bWVudDtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LCAnZG9jdW1lbnQnLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKCdUaGUgcHJvbWlzZSByZXR1cm5lZCBmcm9tIGNsaWVudC5hc3NldC51cGxvYWQoLi4uKSBub3cgcmVzb2x2ZXMgd2l0aCB0aGUgYXNzZXQgZG9jdW1lbnQnKTtcbiAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbnNGcm9tRmlsZShvcHRzLCBmaWxlKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhKGZpbGUgaW5zdGFuY2VvZiB3aW5kb3cuRmlsZSkpIHtcbiAgICByZXR1cm4gb3B0cztcbiAgfVxuXG4gIHJldHVybiBhc3NpZ24oe1xuICAgIGZpbGVuYW1lOiBvcHRzLnByZXNlcnZlRmlsZW5hbWUgPT09IGZhbHNlID8gdW5kZWZpbmVkIDogZmlsZS5uYW1lLFxuICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGVcbiAgfSwgb3B0cyk7XG59XG5cbmFzc2lnbihBc3NldHNDbGllbnQucHJvdG90eXBlLCB7XG4gIC8qKlxuICAgKiBVcGxvYWQgYW4gYXNzZXRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhc3NldFR5cGUgYGltYWdlYCBvciBgZmlsZWBcbiAgICogQHBhcmFtICB7RmlsZXxCbG9ifEJ1ZmZlcnxSZWFkYWJsZVN0cmVhbX0gYm9keSBGaWxlIHRvIHVwbG9hZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvcHRzIE9wdGlvbnMgZm9yIHRoZSB1cGxvYWRcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gb3B0cy5wcmVzZXJ2ZUZpbGVuYW1lIFdoZXRoZXIgb3Igbm90IHRvIHByZXNlcnZlIHRoZSBvcmlnaW5hbCBmaWxlbmFtZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy5maWxlbmFtZSBGaWxlbmFtZSBmb3IgdGhpcyBmaWxlIChvcHRpb25hbClcbiAgICogQHBhcmFtICB7TnVtYmVyfSAgb3B0cy50aW1lb3V0ICBNaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgdGltaW5nIHRoZSByZXF1ZXN0IG91dCAoZGVmYXVsdDogMClcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy5jb250ZW50VHlwZSBNaW1lIHR5cGUgb2YgdGhlIGZpbGVcbiAgICogQHBhcmFtICB7QXJyYXl9ICAgb3B0cy5leHRyYWN0IEFycmF5IG9mIG1ldGFkYXRhIHBhcnRzIHRvIGV4dHJhY3QgZnJvbSBpbWFnZS5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3NzaWJsZSB2YWx1ZXM6IGBsb2NhdGlvbmAsIGBleGlmYCwgYGltYWdlYCwgYHBhbGV0dGVgXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMubGFiZWwgTGFiZWxcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy50aXRsZSBUaXRsZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLmRlc2NyaXB0aW9uIERlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuY3JlZGl0TGluZSBUaGUgY3JlZGl0IHRvIHBlcnNvbihzKSBhbmQvb3Igb3JnYW5pemF0aW9uKHMpIHJlcXVpcmVkIGJ5IHRoZSBzdXBwbGllciBvZiB0aGUgaW1hZ2UgdG8gYmUgdXNlZCB3aGVuIHB1Ymxpc2hlZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvcHRzLnNvdXJjZSBTb3VyY2UgZGF0YSAod2hlbiB0aGUgYXNzZXQgaXMgZnJvbSBhbiBleHRlcm5hbCBzZXJ2aWNlKVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLnNvdXJjZS5pZCBUaGUgKHUpaWQgb2YgdGhlIGFzc2V0IHdpdGhpbiB0aGUgc291cmNlLCBpLmUuICdpLWYzMjNyMUUnXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVpcmVkIGlmIHNvdXJjZSBpcyBkZWZpbmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuc291cmNlLm5hbWUgVGhlIG5hbWUgb2YgdGhlIHNvdXJjZSwgaS5lLiAndW5zcGxhc2gnXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVpcmVkIGlmIHNvdXJjZSBpcyBkZWZpbmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuc291cmNlLnVybCBBIHVybCB0byB3aGVyZSB0byBmaW5kIHRoZSBhc3NldCwgb3IgZ2V0IG1vcmUgaW5mbyBhYm91dCBpdCBpbiB0aGUgc291cmNlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIHdpdGggdGhlIGNyZWF0ZWQgYXNzZXQgZG9jdW1lbnRcbiAgICovXG4gIHVwbG9hZDogZnVuY3Rpb24gdXBsb2FkKGFzc2V0VHlwZSwgYm9keSkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YWxpZGF0b3JzLnZhbGlkYXRlQXNzZXRUeXBlKGFzc2V0VHlwZSk7IC8vIElmIGFuIGVtcHR5IGFycmF5IGlzIGdpdmVuLCBleHBsaWNpdGx5IHNldCBgbm9uZWAgdG8gb3ZlcnJpZGUgQVBJIGRlZmF1bHRzXG5cbiAgICB2YXIgbWV0YSA9IG9wdHMuZXh0cmFjdCB8fCB1bmRlZmluZWQ7XG5cbiAgICBpZiAobWV0YSAmJiAhbWV0YS5sZW5ndGgpIHtcbiAgICAgIG1ldGEgPSBbJ25vbmUnXTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YXNldCA9IHZhbGlkYXRvcnMuaGFzRGF0YXNldCh0aGlzLmNsaWVudC5jbGllbnRDb25maWcpO1xuICAgIHZhciBhc3NldEVuZHBvaW50ID0gYXNzZXRUeXBlID09PSAnaW1hZ2UnID8gJ2ltYWdlcycgOiAnZmlsZXMnO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0Zyb21GaWxlKG9wdHMsIGJvZHkpO1xuICAgIHZhciBsYWJlbCA9IG9wdGlvbnMubGFiZWwsXG4gICAgICAgIHRpdGxlID0gb3B0aW9ucy50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgICBjcmVkaXRMaW5lID0gb3B0aW9ucy5jcmVkaXRMaW5lLFxuICAgICAgICBmaWxlbmFtZSA9IG9wdGlvbnMuZmlsZW5hbWUsXG4gICAgICAgIHNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICAgIHZhciBxdWVyeSA9IHtcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGZpbGVuYW1lOiBmaWxlbmFtZSxcbiAgICAgIG1ldGE6IG1ldGEsXG4gICAgICBjcmVkaXRMaW5lOiBjcmVkaXRMaW5lXG4gICAgfTtcblxuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIHF1ZXJ5LnNvdXJjZUlkID0gc291cmNlLmlkO1xuICAgICAgcXVlcnkuc291cmNlTmFtZSA9IHNvdXJjZS5uYW1lO1xuICAgICAgcXVlcnkuc291cmNlVXJsID0gc291cmNlLnVybDtcbiAgICB9XG5cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuY2xpZW50Ll9yZXF1ZXN0T2JzZXJ2YWJsZSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHRpbWVvdXQ6IG9wdGlvbnMudGltZW91dCB8fCAwLFxuICAgICAgdXJpOiBcIi9hc3NldHMvXCIuY29uY2F0KGFzc2V0RW5kcG9pbnQsIFwiL1wiKS5jb25jYXQoZGF0YXNldCksXG4gICAgICBoZWFkZXJzOiBvcHRpb25zLmNvbnRlbnRUeXBlID8ge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogb3B0aW9ucy5jb250ZW50VHlwZVxuICAgICAgfSA6IHt9LFxuICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgYm9keTogYm9keVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmlzUHJvbWlzZUFQSSgpID8gb2JzZXJ2YWJsZS5waXBlKGZpbHRlcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmVudC50eXBlID09PSAncmVzcG9uc2UnO1xuICAgIH0pLCBtYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gdG9Eb2N1bWVudChldmVudC5ib2R5KTtcbiAgICB9KSkudG9Qcm9taXNlKCkgOiBvYnNlcnZhYmxlO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUodHlwZSwgaWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybignY2xpZW50LmFzc2V0cy5kZWxldGUoKSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGNsaWVudC5kZWxldGUoPGRvY3VtZW50LWlkPiknKTtcbiAgICB2YXIgZG9jSWQgPSBpZCB8fCAnJztcblxuICAgIGlmICghL14oaW1hZ2V8ZmlsZSktLy50ZXN0KGRvY0lkKSkge1xuICAgICAgZG9jSWQgPSBcIlwiLmNvbmNhdCh0eXBlLCBcIi1cIikuY29uY2F0KGRvY0lkKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuX2lkKSB7XG4gICAgICAvLyBXZSBjb3VsZCBiZSBwYXNzaW5nIGFuIGVudGlyZSBhc3NldCBkb2N1bWVudCBpbnN0ZWFkIG9mIGFuIElEXG4gICAgICBkb2NJZCA9IHR5cGUuX2lkO1xuICAgIH1cblxuICAgIHZhbGlkYXRvcnMuaGFzRGF0YXNldCh0aGlzLmNsaWVudC5jbGllbnRDb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5kZWxldGUoZG9jSWQpO1xuICB9LFxuICBnZXRJbWFnZVVybDogZnVuY3Rpb24gZ2V0SW1hZ2VVcmwocmVmLCBxdWVyeSkge1xuICAgIHZhciBpZCA9IHJlZi5fcmVmIHx8IHJlZjtcblxuICAgIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldEltYWdlVXJsKCkgbmVlZHMgZWl0aGVyIGFuIG9iamVjdCB3aXRoIGEgX3JlZiwgb3IgYSBzdHJpbmcgd2l0aCBhbiBhc3NldCBkb2N1bWVudCBJRCcpO1xuICAgIH1cblxuICAgIGlmICghL15pbWFnZS1bQS1aYS16MC05X10rLVxcZCt4XFxkKy1bYS16XXsxLDV9JC8udGVzdChpZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFzc2V0IElEIFxcXCJcIi5jb25jYXQoaWQsIFwiXFxcIi4gVVJMIGdlbmVyYXRpb24gb25seSB3b3JrcyBmb3IgYXV0by1nZW5lcmF0ZWQgSURzLlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIF9pZCRzcGxpdCA9IGlkLnNwbGl0KCctJyksXG4gICAgICAgIF9pZCRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfaWQkc3BsaXQsIDQpLFxuICAgICAgICBhc3NldElkID0gX2lkJHNwbGl0MlsxXSxcbiAgICAgICAgc2l6ZSA9IF9pZCRzcGxpdDJbMl0sXG4gICAgICAgIGZvcm1hdCA9IF9pZCRzcGxpdDJbM107XG5cbiAgICB2YWxpZGF0b3JzLmhhc0RhdGFzZXQodGhpcy5jbGllbnQuY2xpZW50Q29uZmlnKTtcbiAgICB2YXIgX3RoaXMkY2xpZW50JGNsaWVudENvID0gdGhpcy5jbGllbnQuY2xpZW50Q29uZmlnLFxuICAgICAgICBwcm9qZWN0SWQgPSBfdGhpcyRjbGllbnQkY2xpZW50Q28ucHJvamVjdElkLFxuICAgICAgICBkYXRhc2V0ID0gX3RoaXMkY2xpZW50JGNsaWVudENvLmRhdGFzZXQ7XG4gICAgdmFyIHFzID0gcXVlcnkgPyBxdWVyeVN0cmluZyhxdWVyeSkgOiAnJztcbiAgICByZXR1cm4gXCJodHRwczovL2Nkbi5zYW5pdHkuaW8vaW1hZ2VzL1wiLmNvbmNhdChwcm9qZWN0SWQsIFwiL1wiKS5jb25jYXQoZGF0YXNldCwgXCIvXCIpLmNvbmNhdChhc3NldElkLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLlwiKS5jb25jYXQoZm9ybWF0KS5jb25jYXQocXMpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQXNzZXRzQ2xpZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG5mdW5jdGlvbiBBdXRoQ2xpZW50KGNsaWVudCkge1xuICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbn1cblxuYXNzaWduKEF1dGhDbGllbnQucHJvdG90eXBlLCB7XG4gIGdldExvZ2luUHJvdmlkZXJzOiBmdW5jdGlvbiBnZXRMb2dpblByb3ZpZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmk6ICcvYXV0aC9wcm92aWRlcnMnXG4gICAgfSk7XG4gIH0sXG4gIGxvZ291dDogZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVyaTogJy9hdXRoL2xvZ291dCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQXV0aENsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGdlbmVyYXRlSGVscFVybCA9IHJlcXVpcmUoJ0BzYW5pdHkvZ2VuZXJhdGUtaGVscC11cmwnKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi92YWxpZGF0b3JzJyk7XG5cbnZhciBvbmNlID0gcmVxdWlyZSgnLi91dGlsL29uY2UnKTtcblxudmFyIGRlZmF1bHRDZG5Ib3N0ID0gJ2FwaWNkbi5zYW5pdHkuaW8nO1xudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGFwaUhvc3Q6ICdodHRwczovL2FwaS5zYW5pdHkuaW8nLFxuICB1c2VQcm9qZWN0SG9zdG5hbWU6IHRydWUsXG4gIGdyYWRpZW50TW9kZTogZmFsc2UsXG4gIGlzUHJvbWlzZUFQSTogdHJ1ZVxufTtcbnZhciBMT0NBTEhPU1RTID0gWydsb2NhbGhvc3QnLCAnMTI3LjAuMC4xJywgJzAuMC4wLjAnXTtcblxudmFyIGlzTG9jYWwgPSBmdW5jdGlvbiBpc0xvY2FsKGhvc3QpIHtcbiAgcmV0dXJuIExPQ0FMSE9TVFMuaW5kZXhPZihob3N0KSAhPT0gLTE7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG5cbnZhciBjcmVhdGVXYXJuaW5nUHJpbnRlciA9IGZ1bmN0aW9uIGNyZWF0ZVdhcm5pbmdQcmludGVyKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb25zb2xlLndhcm4obWVzc2FnZS5qb2luKCcgJykpO1xuICB9KTtcbn07XG5cbnZhciBwcmludENkbldhcm5pbmcgPSBjcmVhdGVXYXJuaW5nUHJpbnRlcihbJ1lvdSBhcmUgbm90IHVzaW5nIHRoZSBTYW5pdHkgQ0ROLiBUaGF0IG1lYW5zIHlvdXIgZGF0YSBpcyBhbHdheXMgZnJlc2gsIGJ1dCB0aGUgQ0ROIGlzIGZhc3RlciBhbmQnLCBcImNoZWFwZXIuIFRoaW5rIGFib3V0IGl0ISBGb3IgbW9yZSBpbmZvLCBzZWUgXCIuY29uY2F0KGdlbmVyYXRlSGVscFVybCgnanMtY2xpZW50LWNkbi1jb25maWd1cmF0aW9uJyksIFwiLlwiKSwgJ1RvIGhpZGUgdGhpcyB3YXJuaW5nLCBwbGVhc2Ugc2V0IHRoZSBgdXNlQ2RuYCBvcHRpb24gdG8gZWl0aGVyIGB0cnVlYCBvciBgZmFsc2VgIHdoZW4gY3JlYXRpbmcnLCAndGhlIGNsaWVudC4nXSk7XG52YXIgcHJpbnRCcm93c2VyVG9rZW5XYXJuaW5nID0gY3JlYXRlV2FybmluZ1ByaW50ZXIoWydZb3UgaGF2ZSBjb25maWd1cmVkIFNhbml0eSBjbGllbnQgdG8gdXNlIGEgdG9rZW4gaW4gdGhlIGJyb3dzZXIuIFRoaXMgbWF5IGNhdXNlIHVuaW50ZW50aW9uYWwgc2VjdXJpdHkgaXNzdWVzLicsIFwiU2VlIFwiLmNvbmNhdChnZW5lcmF0ZUhlbHBVcmwoJ2pzLWNsaWVudC1icm93c2VyLXRva2VuJyksIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uIGFuZCBob3cgdG8gaGlkZSB0aGlzIHdhcm5pbmcuXCIpXSk7XG52YXIgcHJpbnRDZG5Ub2tlbldhcm5pbmcgPSBjcmVhdGVXYXJuaW5nUHJpbnRlcihbJ1lvdSBoYXZlIHNldCBgdXNlQ2RuYCB0byBgdHJ1ZWAgd2hpbGUgYWxzbyBzcGVjaWZ5aW5nIGEgdG9rZW4uIFRoaXMgaXMgdXN1YWxseSBub3Qgd2hhdCB5b3UnLCAnd2FudC4gVGhlIENETiBjYW5ub3QgYmUgdXNlZCB3aXRoIGFuIGF1dGhvcml6YXRpb24gdG9rZW4sIHNpbmNlIHByaXZhdGUgZGF0YSBjYW5ub3QgYmUgY2FjaGVkLicsIFwiU2VlIFwiLmNvbmNhdChnZW5lcmF0ZUhlbHBVcmwoJ2pzLWNsaWVudC11c2VjZG4tdG9rZW4nKSwgXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpXSk7XG5leHBvcnRzLmRlZmF1bHRDb25maWcgPSBkZWZhdWx0Q29uZmlnO1xuXG5leHBvcnRzLmluaXRDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnLCBwcmV2Q29uZmlnKSB7XG4gIHZhciBuZXdDb25maWcgPSBhc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIHByZXZDb25maWcsIGNvbmZpZyk7XG4gIHZhciBncmFkaWVudE1vZGUgPSBuZXdDb25maWcuZ3JhZGllbnRNb2RlO1xuICB2YXIgcHJvamVjdEJhc2VkID0gIWdyYWRpZW50TW9kZSAmJiBuZXdDb25maWcudXNlUHJvamVjdEhvc3RuYW1lO1xuXG4gIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgaGVscFVybCA9IGdlbmVyYXRlSGVscFVybCgnanMtY2xpZW50LXByb21pc2UtcG9seWZpbGwnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBuYXRpdmUgUHJvbWlzZS1pbXBsZW1lbnRhdGlvbiBmb3VuZCwgcG9seWZpbGwgbmVlZGVkIC0gc2VlIFwiLmNvbmNhdChoZWxwVXJsKSk7XG4gIH1cblxuICBpZiAoZ3JhZGllbnRNb2RlICYmICFuZXdDb25maWcubmFtZXNwYWNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25maWd1cmF0aW9uIG11c3QgY29udGFpbiBgbmFtZXNwYWNlYCB3aGVuIHJ1bm5pbmcgaW4gZ3JhZGllbnQgbW9kZScpO1xuICB9XG5cbiAgaWYgKHByb2plY3RCYXNlZCAmJiAhbmV3Q29uZmlnLnByb2plY3RJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJhdGlvbiBtdXN0IGNvbnRhaW4gYHByb2plY3RJZGAnKTtcbiAgfVxuXG4gIHZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuICB2YXIgaXNMb2NhbGhvc3QgPSBpc0Jyb3dzZXIgJiYgaXNMb2NhbCh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpO1xuXG4gIGlmIChpc0Jyb3dzZXIgJiYgaXNMb2NhbGhvc3QgJiYgbmV3Q29uZmlnLnRva2VuICYmIG5ld0NvbmZpZy5pZ25vcmVCcm93c2VyVG9rZW5XYXJuaW5nICE9PSB0cnVlKSB7XG4gICAgcHJpbnRCcm93c2VyVG9rZW5XYXJuaW5nKCk7XG4gIH0gZWxzZSBpZiAoKCFpc0Jyb3dzZXIgfHwgaXNMb2NhbGhvc3QpICYmIG5ld0NvbmZpZy51c2VDZG4gJiYgbmV3Q29uZmlnLnRva2VuKSB7XG4gICAgcHJpbnRDZG5Ub2tlbldhcm5pbmcoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbmV3Q29uZmlnLnVzZUNkbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmludENkbldhcm5pbmcoKTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0QmFzZWQpIHtcbiAgICB2YWxpZGF0ZS5wcm9qZWN0SWQobmV3Q29uZmlnLnByb2plY3RJZCk7XG4gIH1cblxuICBpZiAoIWdyYWRpZW50TW9kZSAmJiBuZXdDb25maWcuZGF0YXNldCkge1xuICAgIHZhbGlkYXRlLmRhdGFzZXQobmV3Q29uZmlnLmRhdGFzZXQsIG5ld0NvbmZpZy5ncmFkaWVudE1vZGUpO1xuICB9XG5cbiAgbmV3Q29uZmlnLmlzRGVmYXVsdEFwaSA9IG5ld0NvbmZpZy5hcGlIb3N0ID09PSBkZWZhdWx0Q29uZmlnLmFwaUhvc3Q7XG4gIG5ld0NvbmZpZy51c2VDZG4gPSBCb29sZWFuKG5ld0NvbmZpZy51c2VDZG4pICYmICFuZXdDb25maWcudG9rZW4gJiYgIW5ld0NvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG5cbiAgaWYgKG5ld0NvbmZpZy5ncmFkaWVudE1vZGUpIHtcbiAgICBuZXdDb25maWcudXJsID0gbmV3Q29uZmlnLmFwaUhvc3Q7XG4gICAgbmV3Q29uZmlnLmNkblVybCA9IG5ld0NvbmZpZy5hcGlIb3N0O1xuICB9IGVsc2Uge1xuICAgIHZhciBob3N0UGFydHMgPSBuZXdDb25maWcuYXBpSG9zdC5zcGxpdCgnOi8vJywgMik7XG4gICAgdmFyIHByb3RvY29sID0gaG9zdFBhcnRzWzBdO1xuICAgIHZhciBob3N0ID0gaG9zdFBhcnRzWzFdO1xuICAgIHZhciBjZG5Ib3N0ID0gbmV3Q29uZmlnLmlzRGVmYXVsdEFwaSA/IGRlZmF1bHRDZG5Ib3N0IDogaG9zdDtcblxuICAgIGlmIChuZXdDb25maWcudXNlUHJvamVjdEhvc3RuYW1lKSB7XG4gICAgICBuZXdDb25maWcudXJsID0gXCJcIi5jb25jYXQocHJvdG9jb2wsIFwiOi8vXCIpLmNvbmNhdChuZXdDb25maWcucHJvamVjdElkLCBcIi5cIikuY29uY2F0KGhvc3QsIFwiL3YxXCIpO1xuICAgICAgbmV3Q29uZmlnLmNkblVybCA9IFwiXCIuY29uY2F0KHByb3RvY29sLCBcIjovL1wiKS5jb25jYXQobmV3Q29uZmlnLnByb2plY3RJZCwgXCIuXCIpLmNvbmNhdChjZG5Ib3N0LCBcIi92MVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29uZmlnLnVybCA9IFwiXCIuY29uY2F0KG5ld0NvbmZpZy5hcGlIb3N0LCBcIi92MVwiKTtcbiAgICAgIG5ld0NvbmZpZy5jZG5VcmwgPSBuZXdDb25maWcudXJsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdDb25maWc7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL2ZpbHRlcicpLFxuICAgIGZpbHRlciA9IF9yZXF1aXJlLmZpbHRlcjtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvbWFwJyksXG4gICAgbWFwID0gX3JlcXVpcmUyLm1hcDtcblxudmFyIHZhbGlkYXRvcnMgPSByZXF1aXJlKCcuLi92YWxpZGF0b3JzJyk7XG5cbnZhciBnZXRTZWxlY3Rpb24gPSByZXF1aXJlKCcuLi91dGlsL2dldFNlbGVjdGlvbicpO1xuXG52YXIgZW5jb2RlUXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuL2VuY29kZVF1ZXJ5U3RyaW5nJyk7XG5cbnZhciBUcmFuc2FjdGlvbiA9IHJlcXVpcmUoJy4vdHJhbnNhY3Rpb24nKTtcblxudmFyIFBhdGNoID0gcmVxdWlyZSgnLi9wYXRjaCcpO1xuXG52YXIgbGlzdGVuID0gcmVxdWlyZSgnLi9saXN0ZW4nKTtcblxudmFyIGV4Y2x1ZGVGYWxzZXkgPSBmdW5jdGlvbiBleGNsdWRlRmFsc2V5KHBhcmFtLCBkZWZWYWx1ZSkge1xuICB2YXIgdmFsdWUgPSB0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnID8gZGVmVmFsdWUgOiBwYXJhbTtcbiAgcmV0dXJuIHBhcmFtID09PSBmYWxzZSA/IHVuZGVmaW5lZCA6IHZhbHVlO1xufTtcblxudmFyIGdldE11dGF0aW9uUXVlcnkgPSBmdW5jdGlvbiBnZXRNdXRhdGlvblF1ZXJ5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHJldHVybiB7XG4gICAgcmV0dXJuSWRzOiB0cnVlLFxuICAgIHJldHVybkRvY3VtZW50czogZXhjbHVkZUZhbHNleShvcHRpb25zLnJldHVybkRvY3VtZW50cywgdHJ1ZSksXG4gICAgdmlzaWJpbGl0eTogb3B0aW9ucy52aXNpYmlsaXR5IHx8ICdzeW5jJ1xuICB9O1xufTtcblxudmFyIGlzUmVzcG9uc2UgPSBmdW5jdGlvbiBpc1Jlc3BvbnNlKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC50eXBlID09PSAncmVzcG9uc2UnO1xufTtcblxudmFyIGdldEJvZHkgPSBmdW5jdGlvbiBnZXRCb2R5KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5ib2R5O1xufTtcblxudmFyIGluZGV4QnkgPSBmdW5jdGlvbiBpbmRleEJ5KGRvY3MsIGF0dHIpIHtcbiAgcmV0dXJuIGRvY3MucmVkdWNlKGZ1bmN0aW9uIChpbmRleGVkLCBkb2MpIHtcbiAgICBpbmRleGVkW2F0dHIoZG9jKV0gPSBkb2M7XG4gICAgcmV0dXJuIGluZGV4ZWQ7XG4gIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufTtcblxudmFyIHRvUHJvbWlzZSA9IGZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLnRvUHJvbWlzZSgpO1xufTtcblxudmFyIGdldFF1ZXJ5U2l6ZUxpbWl0ID0gMTEyNjQ7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGlzdGVuOiBsaXN0ZW4sXG4gIGdldERhdGFVcmw6IGZ1bmN0aW9uIGdldERhdGFVcmwob3BlcmF0aW9uLCBwYXRoKSB7XG4gICAgdmFyIGNvbmZpZyA9IHRoaXMuY2xpZW50Q29uZmlnO1xuICAgIHZhciBjYXRhbG9nID0gY29uZmlnLmdyYWRpZW50TW9kZSA/IGNvbmZpZy5uYW1lc3BhY2UgOiB2YWxpZGF0b3JzLmhhc0RhdGFzZXQoY29uZmlnKTtcbiAgICB2YXIgYmFzZVVyaSA9IFwiL1wiLmNvbmNhdChvcGVyYXRpb24sIFwiL1wiKS5jb25jYXQoY2F0YWxvZyk7XG4gICAgdmFyIHVyaSA9IHBhdGggPyBcIlwiLmNvbmNhdChiYXNlVXJpLCBcIi9cIikuY29uY2F0KHBhdGgpIDogYmFzZVVyaTtcbiAgICByZXR1cm4gKHRoaXMuY2xpZW50Q29uZmlnLmdyYWRpZW50TW9kZSA/IHVyaSA6IFwiL2RhdGFcIi5jb25jYXQodXJpKSkucmVwbGFjZSgvXFwvKCR8XFw/KS8sICckMScpO1xuICB9LFxuICBmZXRjaDogZnVuY3Rpb24gZmV0Y2gocXVlcnksIHBhcmFtcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgbWFwUmVzcG9uc2UgPSBvcHRpb25zLmZpbHRlclJlc3BvbnNlID09PSBmYWxzZSA/IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSA6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiByZXMucmVzdWx0O1xuICAgIH07XG5cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX2RhdGFSZXF1ZXN0KCdxdWVyeScsIHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfSwgb3B0aW9ucykucGlwZShtYXAobWFwUmVzcG9uc2UpKTtcblxuICAgIHJldHVybiB0aGlzLmlzUHJvbWlzZUFQSSgpID8gdG9Qcm9taXNlKG9ic2VydmFibGUpIDogb2JzZXJ2YWJsZTtcbiAgfSxcbiAgZ2V0RG9jdW1lbnQ6IGZ1bmN0aW9uIGdldERvY3VtZW50KGlkKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICB1cmk6IHRoaXMuZ2V0RGF0YVVybCgnZG9jJywgaWQpLFxuICAgICAganNvbjogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX3JlcXVlc3RPYnNlcnZhYmxlKG9wdGlvbnMpLnBpcGUoZmlsdGVyKGlzUmVzcG9uc2UpLCBtYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuYm9keS5kb2N1bWVudHMgJiYgZXZlbnQuYm9keS5kb2N1bWVudHNbMF07XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNQcm9taXNlQVBJKCkgPyB0b1Byb21pc2Uob2JzZXJ2YWJsZSkgOiBvYnNlcnZhYmxlO1xuICB9LFxuICBnZXREb2N1bWVudHM6IGZ1bmN0aW9uIGdldERvY3VtZW50cyhpZHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHVyaTogdGhpcy5nZXREYXRhVXJsKCdkb2MnLCBpZHMuam9pbignLCcpKSxcbiAgICAgIGpzb246IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLl9yZXF1ZXN0T2JzZXJ2YWJsZShvcHRpb25zKS5waXBlKGZpbHRlcihpc1Jlc3BvbnNlKSwgbWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGluZGV4ZWQgPSBpbmRleEJ5KGV2ZW50LmJvZHkuZG9jdW1lbnRzIHx8IFtdLCBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIHJldHVybiBkb2MuX2lkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaWRzLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ZWRbaWRdIHx8IG51bGw7XG4gICAgICB9KTtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcy5pc1Byb21pc2VBUEkoKSA/IHRvUHJvbWlzZShvYnNlcnZhYmxlKSA6IG9ic2VydmFibGU7XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKGRvYywgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGUoZG9jLCAnY3JlYXRlJywgb3B0aW9ucyk7XG4gIH0sXG4gIGNyZWF0ZUlmTm90RXhpc3RzOiBmdW5jdGlvbiBjcmVhdGVJZk5vdEV4aXN0cyhkb2MsIG9wdGlvbnMpIHtcbiAgICB2YWxpZGF0b3JzLnJlcXVpcmVEb2N1bWVudElkKCdjcmVhdGVJZk5vdEV4aXN0cycsIGRvYyk7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZShkb2MsICdjcmVhdGVJZk5vdEV4aXN0cycsIG9wdGlvbnMpO1xuICB9LFxuICBjcmVhdGVPclJlcGxhY2U6IGZ1bmN0aW9uIGNyZWF0ZU9yUmVwbGFjZShkb2MsIG9wdGlvbnMpIHtcbiAgICB2YWxpZGF0b3JzLnJlcXVpcmVEb2N1bWVudElkKCdjcmVhdGVPclJlcGxhY2UnLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGUoZG9jLCAnY3JlYXRlT3JSZXBsYWNlJywgb3B0aW9ucyk7XG4gIH0sXG4gIHBhdGNoOiBmdW5jdGlvbiBwYXRjaChzZWxlY3Rvciwgb3BlcmF0aW9ucykge1xuICAgIHJldHVybiBuZXcgUGF0Y2goc2VsZWN0b3IsIG9wZXJhdGlvbnMsIHRoaXMpO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUoc2VsZWN0aW9uLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVJlcXVlc3QoJ211dGF0ZScsIHtcbiAgICAgIG11dGF0aW9uczogW3tcbiAgICAgICAgZGVsZXRlOiBnZXRTZWxlY3Rpb24oc2VsZWN0aW9uKVxuICAgICAgfV1cbiAgICB9LCBvcHRpb25zKTtcbiAgfSxcbiAgbXV0YXRlOiBmdW5jdGlvbiBtdXRhdGUobXV0YXRpb25zLCBvcHRpb25zKSB7XG4gICAgdmFyIG11dCA9IG11dGF0aW9ucyBpbnN0YW5jZW9mIFBhdGNoIHx8IG11dGF0aW9ucyBpbnN0YW5jZW9mIFRyYW5zYWN0aW9uID8gbXV0YXRpb25zLnNlcmlhbGl6ZSgpIDogbXV0YXRpb25zO1xuICAgIHZhciBtdXRzID0gQXJyYXkuaXNBcnJheShtdXQpID8gbXV0IDogW211dF07XG4gICAgdmFyIHRyYW5zYWN0aW9uSWQgPSBvcHRpb25zICYmIG9wdGlvbnMudHJhbnNhY3Rpb25JZDtcbiAgICByZXR1cm4gdGhpcy5kYXRhUmVxdWVzdCgnbXV0YXRlJywge1xuICAgICAgbXV0YXRpb25zOiBtdXRzLFxuICAgICAgdHJhbnNhY3Rpb25JZDogdHJhbnNhY3Rpb25JZFxuICAgIH0sIG9wdGlvbnMpO1xuICB9LFxuICB0cmFuc2FjdGlvbjogZnVuY3Rpb24gdHJhbnNhY3Rpb24ob3BlcmF0aW9ucykge1xuICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb24ob3BlcmF0aW9ucywgdGhpcyk7XG4gIH0sXG4gIGRhdGFSZXF1ZXN0OiBmdW5jdGlvbiBkYXRhUmVxdWVzdChlbmRwb2ludCwgYm9keSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIHZhciByZXF1ZXN0ID0gdGhpcy5fZGF0YVJlcXVlc3QoZW5kcG9pbnQsIGJvZHksIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNQcm9taXNlQVBJKCkgPyB0b1Byb21pc2UocmVxdWVzdCkgOiByZXF1ZXN0O1xuICB9LFxuICBfZGF0YVJlcXVlc3Q6IGZ1bmN0aW9uIF9kYXRhUmVxdWVzdChlbmRwb2ludCwgYm9keSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgaXNNdXRhdGlvbiA9IGVuZHBvaW50ID09PSAnbXV0YXRlJzsgLy8gQ2hlY2sgaWYgdGhlIHF1ZXJ5IHN0cmluZyBpcyB3aXRoaW4gYSBjb25maWd1cmVkIHRocmVzaG9sZCxcbiAgICAvLyBpbiB3aGljaCBjYXNlIHdlIGNhbiB1c2UgR0VULiBPdGhlcndpc2UsIHVzZSBQT1NULlxuXG4gICAgdmFyIHN0clF1ZXJ5ID0gIWlzTXV0YXRpb24gJiYgZW5jb2RlUXVlcnlTdHJpbmcoYm9keSk7XG4gICAgdmFyIHVzZUdldCA9ICFpc011dGF0aW9uICYmIHN0clF1ZXJ5Lmxlbmd0aCA8IGdldFF1ZXJ5U2l6ZUxpbWl0O1xuICAgIHZhciBzdHJpbmdRdWVyeSA9IHVzZUdldCA/IHN0clF1ZXJ5IDogJyc7XG4gICAgdmFyIHJldHVybkZpcnN0ID0gb3B0aW9ucy5yZXR1cm5GaXJzdDtcbiAgICB2YXIgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCxcbiAgICAgICAgdG9rZW4gPSBvcHRpb25zLnRva2VuO1xuICAgIHZhciB1cmkgPSB0aGlzLmdldERhdGFVcmwoZW5kcG9pbnQsIHN0cmluZ1F1ZXJ5KTtcbiAgICB2YXIgcmVxT3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogdXNlR2V0ID8gJ0dFVCcgOiAnUE9TVCcsXG4gICAgICB1cmk6IHVyaSxcbiAgICAgIGpzb246IHRydWUsXG4gICAgICBib2R5OiB1c2VHZXQgPyB1bmRlZmluZWQgOiBib2R5LFxuICAgICAgcXVlcnk6IGlzTXV0YXRpb24gJiYgZ2V0TXV0YXRpb25RdWVyeShvcHRpb25zKSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgICB0b2tlbjogdG9rZW5cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0T2JzZXJ2YWJsZShyZXFPcHRpb25zKS5waXBlKGZpbHRlcihpc1Jlc3BvbnNlKSwgbWFwKGdldEJvZHkpLCBtYXAoZnVuY3Rpb24gKHJlcykge1xuICAgICAgaWYgKCFpc011dGF0aW9uKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9IC8vIFNob3VsZCB3ZSByZXR1cm4gZG9jdW1lbnRzP1xuXG5cbiAgICAgIHZhciByZXN1bHRzID0gcmVzLnJlc3VsdHMgfHwgW107XG5cbiAgICAgIGlmIChvcHRpb25zLnJldHVybkRvY3VtZW50cykge1xuICAgICAgICByZXR1cm4gcmV0dXJuRmlyc3QgPyByZXN1bHRzWzBdICYmIHJlc3VsdHNbMF0uZG9jdW1lbnQgOiByZXN1bHRzLm1hcChmdW5jdGlvbiAobXV0KSB7XG4gICAgICAgICAgcmV0dXJuIG11dC5kb2N1bWVudDtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFJldHVybiBhIHJlZHVjZWQgc3Vic2V0XG5cblxuICAgICAgdmFyIGtleSA9IHJldHVybkZpcnN0ID8gJ2RvY3VtZW50SWQnIDogJ2RvY3VtZW50SWRzJztcbiAgICAgIHZhciBpZHMgPSByZXR1cm5GaXJzdCA/IHJlc3VsdHNbMF0gJiYgcmVzdWx0c1swXS5pZCA6IHJlc3VsdHMubWFwKGZ1bmN0aW9uIChtdXQpIHtcbiAgICAgICAgcmV0dXJuIG11dC5pZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgIHRyYW5zYWN0aW9uSWQ6IHJlcy50cmFuc2FjdGlvbklkLFxuICAgICAgICByZXN1bHRzOiByZXN1bHRzXG4gICAgICB9LCBrZXksIGlkcyk7XG4gICAgfSkpO1xuICB9LFxuICBfY3JlYXRlOiBmdW5jdGlvbiBfY3JlYXRlKGRvYywgb3ApIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICB2YXIgbXV0YXRpb24gPSBfZGVmaW5lUHJvcGVydHkoe30sIG9wLCBkb2MpO1xuXG4gICAgdmFyIG9wdHMgPSBhc3NpZ24oe1xuICAgICAgcmV0dXJuRmlyc3Q6IHRydWUsXG4gICAgICByZXR1cm5Eb2N1bWVudHM6IHRydWVcbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhUmVxdWVzdCgnbXV0YXRlJywge1xuICAgICAgbXV0YXRpb25zOiBbbXV0YXRpb25dXG4gICAgfSwgb3B0cyk7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbmMgPSBlbmNvZGVVUklDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHF1ZXJ5ID0gX3JlZi5xdWVyeSxcbiAgICAgIF9yZWYkcGFyYW1zID0gX3JlZi5wYXJhbXMsXG4gICAgICBwYXJhbXMgPSBfcmVmJHBhcmFtcyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJHBhcmFtcyxcbiAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRvcHRpb25zO1xuICB2YXIgYmFzZSA9IFwiP3F1ZXJ5PVwiLmNvbmNhdChlbmMocXVlcnkpKTtcbiAgdmFyIHFTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZShmdW5jdGlvbiAocXMsIHBhcmFtKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHFzLCBcIiZcIikuY29uY2F0KGVuYyhcIiRcIi5jb25jYXQocGFyYW0pKSwgXCI9XCIpLmNvbmNhdChlbmMoSlNPTi5zdHJpbmdpZnkocGFyYW1zW3BhcmFtXSkpKTtcbiAgfSwgYmFzZSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKHFzLCBvcHRpb24pIHtcbiAgICAvLyBPbmx5IGluY2x1ZGUgdGhlIG9wdGlvbiBpZiBpdCBpcyB0cnV0aHlcbiAgICByZXR1cm4gb3B0aW9uc1tvcHRpb25dID8gXCJcIi5jb25jYXQocXMsIFwiJlwiKS5jb25jYXQoZW5jKG9wdGlvbiksIFwiPVwiKS5jb25jYXQoZW5jKG9wdGlvbnNbb3B0aW9uXSkpIDogcXM7XG4gIH0sIHFTdHJpbmcpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIE9ic2VydmFibGUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvbWluaW1hbCcpO1xuXG52YXIgcG9seWZpbGxlZEV2ZW50U291cmNlID0gcmVxdWlyZSgnQHNhbml0eS9ldmVudHNvdXJjZScpO1xuXG52YXIgcGljayA9IHJlcXVpcmUoJy4uL3V0aWwvcGljaycpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi91dGlsL2RlZmF1bHRzJyk7XG5cbnZhciBlbmNvZGVRdWVyeVN0cmluZyA9IHJlcXVpcmUoJy4vZW5jb2RlUXVlcnlTdHJpbmcnKTtcblxudmFyIGdlbmVyYXRlSGVscFVybCA9IHJlcXVpcmUoJ0BzYW5pdHkvZ2VuZXJhdGUtaGVscC11cmwnKTtcblxudmFyIG9uY2UgPSByZXF1aXJlKCcuLi91dGlsL29uY2UnKTtcblxudmFyIHRva2VuV2FybmluZyA9IFsnVXNpbmcgdG9rZW4gd2l0aCBsaXN0ZW5lcnMgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2Vycy4gJywgXCJGb3IgbW9yZSBpbmZvLCBzZWUgXCIuY29uY2F0KGdlbmVyYXRlSGVscFVybCgnanMtY2xpZW50LWxpc3RlbmVyLXRva2Vucy1icm93c2VyJyksIFwiLlwiKV07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbnZhciBwcmludFRva2VuV2FybmluZyA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY29uc29sZS53YXJuKHRva2VuV2FybmluZy5qb2luKCcgJykpO1xufSk7XG52YXIgaXNXaW5kb3dFdmVudFNvdXJjZSA9IEJvb2xlYW4odHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkV2ZW50U291cmNlKTtcbnZhciBFdmVudFNvdXJjZSA9IGlzV2luZG93RXZlbnRTb3VyY2UgPyB3aW5kb3cuRXZlbnRTb3VyY2UgLy8gTmF0aXZlIGJyb3dzZXIgRXZlbnRTb3VyY2VcbjogcG9seWZpbGxlZEV2ZW50U291cmNlOyAvLyBOb2RlLmpzLCBJRSBldGNcblxudmFyIHBvc3NpYmxlT3B0aW9ucyA9IFsnaW5jbHVkZVByZXZpb3VzUmV2aXNpb24nLCAnaW5jbHVkZVJlc3VsdCcsICd2aXNpYmlsaXR5JywgJ2VmZmVjdEZvcm1hdCddO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBpbmNsdWRlUmVzdWx0OiB0cnVlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RlbihxdWVyeSwgcGFyYW1zKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIG9wdGlvbnMgPSBkZWZhdWx0cyhvcHRzLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHZhciBsaXN0ZW5PcHRzID0gcGljayhvcHRpb25zLCBwb3NzaWJsZU9wdGlvbnMpO1xuICB2YXIgcXMgPSBlbmNvZGVRdWVyeVN0cmluZyh7XG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIHBhcmFtczogcGFyYW1zLFxuICAgIG9wdGlvbnM6IGxpc3Rlbk9wdHNcbiAgfSk7XG4gIHZhciBfdGhpcyRjbGllbnRDb25maWcgPSB0aGlzLmNsaWVudENvbmZpZyxcbiAgICAgIHVybCA9IF90aGlzJGNsaWVudENvbmZpZy51cmwsXG4gICAgICB0b2tlbiA9IF90aGlzJGNsaWVudENvbmZpZy50b2tlbixcbiAgICAgIHdpdGhDcmVkZW50aWFscyA9IF90aGlzJGNsaWVudENvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gIHZhciB1cmkgPSBcIlwiLmNvbmNhdCh1cmwpLmNvbmNhdCh0aGlzLmdldERhdGFVcmwoJ2xpc3RlbicsIHFzKSk7XG4gIHZhciBsaXN0ZW5Gb3IgPSBvcHRpb25zLmV2ZW50cyA/IG9wdGlvbnMuZXZlbnRzIDogWydtdXRhdGlvbiddO1xuICB2YXIgc2hvdWxkRW1pdFJlY29ubmVjdCA9IGxpc3RlbkZvci5pbmRleE9mKCdyZWNvbm5lY3QnKSAhPT0gLTE7XG5cbiAgaWYgKHRva2VuICYmIGlzV2luZG93RXZlbnRTb3VyY2UpIHtcbiAgICBwcmludFRva2VuV2FybmluZygpO1xuICB9XG5cbiAgdmFyIGVzT3B0aW9ucyA9IHt9O1xuXG4gIGlmICh0b2tlbiB8fCB3aXRoQ3JlZGVudGlhbHMpIHtcbiAgICBlc09wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0b2tlbikge1xuICAgIGVzT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgdmFyIGVzID0gZ2V0RXZlbnRTb3VyY2UoKTtcbiAgICB2YXIgcmVjb25uZWN0VGltZXI7XG4gICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgICBpZiAoc3RvcHBlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVtaXRSZWNvbm5lY3QoKTsgLy8gQWxsb3cgZXZlbnQgaGFuZGxlcnMgb2YgYGVtaXRSZWNvbm5lY3RgIHRvIGNhbmNlbC9jbG9zZSB0aGUgcmVjb25uZWN0IGF0dGVtcHRcblxuICAgICAgaWYgKHN0b3BwZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBVbmxlc3Mgd2UndmUgZXhwbGljaXRseSBzdG9wcGVkIHRoZSBFUyAoaW4gd2hpY2ggY2FzZSBgc3RvcHBlZGAgc2hvdWxkIGJlIHRydWUpLFxuICAgICAgLy8gd2Ugc2hvdWxkIG5ldmVyIGJlIGluIGEgZGlzY29ubmVjdGVkIHN0YXRlLiBCeSBkZWZhdWx0LCBFdmVudFNvdXJjZSB3aWxsIHJlY29ubmVjdFxuICAgICAgLy8gYXV0b21hdGljYWxseSwgaW4gd2hpY2ggY2FzZSBpdCBzZXRzIHJlYWR5U3RhdGUgdG8gYENPTk5FQ1RJTkdgLCBidXQgaW4gc29tZSBjYXNlc1xuICAgICAgLy8gKGxpa2Ugd2hlbiBhIGxhcHRvcCBsaWQgaXMgY2xvc2VkKSwgaXQgY2xvc2VzIHRoZSBjb25uZWN0aW9uLiBJbiB0aGVzZSBjYXNlcyB3ZSBuZWVkXG4gICAgICAvLyB0byBleHBsaWNpdGx5IHJlY29ubmVjdC5cblxuXG4gICAgICBpZiAoZXMucmVhZHlTdGF0ZSA9PT0gRXZlbnRTb3VyY2UuQ0xPU0VEKSB7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGNsZWFyVGltZW91dChyZWNvbm5lY3RUaW1lcik7XG4gICAgICAgIHJlY29ubmVjdFRpbWVyID0gc2V0VGltZW91dChvcGVuLCAxMDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2hhbm5lbEVycm9yKGVycikge1xuICAgICAgb2JzZXJ2ZXIuZXJyb3IoY29vZXJjZUVycm9yKGVycikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWVzc2FnZShldnQpIHtcbiAgICAgIHZhciBldmVudCA9IHBhcnNlRXZlbnQoZXZ0KTtcbiAgICAgIHJldHVybiBldmVudCBpbnN0YW5jZW9mIEVycm9yID8gb2JzZXJ2ZXIuZXJyb3IoZXZlbnQpIDogb2JzZXJ2ZXIubmV4dChldmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EaXNjb25uZWN0KGV2dCkge1xuICAgICAgc3RvcHBlZCA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvciwgZmFsc2UpO1xuICAgICAgZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbm5lbEVycm9yJywgb25DaGFubmVsRXJyb3IsIGZhbHNlKTtcbiAgICAgIGVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QsIGZhbHNlKTtcbiAgICAgIGxpc3RlbkZvci5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiBlcy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIG9uTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICBlcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRSZWNvbm5lY3QoKSB7XG4gICAgICBpZiAoc2hvdWxkRW1pdFJlY29ubmVjdCkge1xuICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICB0eXBlOiAncmVjb25uZWN0J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZSgpIHtcbiAgICAgIHZhciBldnMgPSBuZXcgRXZlbnRTb3VyY2UodXJpLCBlc09wdGlvbnMpO1xuICAgICAgZXZzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvciwgZmFsc2UpO1xuICAgICAgZXZzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5uZWxFcnJvcicsIG9uQ2hhbm5lbEVycm9yLCBmYWxzZSk7XG4gICAgICBldnMuYWRkRXZlbnRMaXN0ZW5lcignZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdCwgZmFsc2UpO1xuICAgICAgbGlzdGVuRm9yLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGV2cy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIG9uTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZXZzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICBlcyA9IGdldEV2ZW50U291cmNlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcDtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBwYXJzZUV2ZW50KGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgdmFyIGRhdGEgPSBldmVudC5kYXRhICYmIEpTT04ucGFyc2UoZXZlbnQuZGF0YSkgfHwge307XG4gICAgcmV0dXJuIGFzc2lnbih7XG4gICAgICB0eXBlOiBldmVudC50eXBlXG4gICAgfSwgZGF0YSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29vZXJjZUVycm9yKGVycikge1xuICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG5cbiAgdmFyIGV2dCA9IHBhcnNlRXZlbnQoZXJyKTtcbiAgcmV0dXJuIGV2dCBpbnN0YW5jZW9mIEVycm9yID8gZXZ0IDogbmV3IEVycm9yKGV4dHJhY3RFcnJvck1lc3NhZ2UoZXZ0KSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RFcnJvck1lc3NhZ2UoZXJyKSB7XG4gIGlmICghZXJyLmVycm9yKSB7XG4gICAgcmV0dXJuIGVyci5tZXNzYWdlIHx8ICdVbmtub3duIGxpc3RlbmVyIGVycm9yJztcbiAgfVxuXG4gIGlmIChlcnIuZXJyb3IuZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gZXJyLmVycm9yLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBlcnIuZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyLmVycm9yIDogSlNPTi5zdHJpbmdpZnkoZXJyLmVycm9yLCBudWxsLCAyKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGRlZXBBc3NpZ24gPSByZXF1aXJlKCdkZWVwLWFzc2lnbicpO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgZ2V0U2VsZWN0aW9uID0gcmVxdWlyZSgnLi4vdXRpbC9nZXRTZWxlY3Rpb24nKTtcblxudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi4vdmFsaWRhdG9ycycpO1xuXG52YXIgdmFsaWRhdGVPYmplY3QgPSB2YWxpZGF0ZS52YWxpZGF0ZU9iamVjdDtcbnZhciB2YWxpZGF0ZUluc2VydCA9IHZhbGlkYXRlLnZhbGlkYXRlSW5zZXJ0O1xuXG5mdW5jdGlvbiBQYXRjaChzZWxlY3Rpb24pIHtcbiAgdmFyIG9wZXJhdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgY2xpZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgdGhpcy5vcGVyYXRpb25zID0gYXNzaWduKHt9LCBvcGVyYXRpb25zKTtcbiAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG59XG5cbmFzc2lnbihQYXRjaC5wcm90b3R5cGUsIHtcbiAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUGF0Y2godGhpcy5zZWxlY3Rpb24sIGFzc2lnbih7fSwgdGhpcy5vcGVyYXRpb25zKSwgdGhpcy5jbGllbnQpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UocHJvcHMpIHtcbiAgICB2YWxpZGF0ZU9iamVjdCgnbWVyZ2UnLCBwcm9wcyk7XG4gICAgdmFyIHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2sudG9TdHJpbmcoKS5zcGxpdCgnXFxuJykuZmlsdGVyKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpO1xuICAgIH0pLnNsaWNlKDIpO1xuICAgIGNvbnNvbGUud2FybihcIlRoZSBcXFwibWVyZ2VcXFwiIHBhdGNoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlXFxuXCIuY29uY2F0KHN0YWNrLmpvaW4oJ1xcbicpKSk7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignbWVyZ2UnLCBkZWVwQXNzaWduKHRoaXMub3BlcmF0aW9ucy5tZXJnZSB8fCB7fSwgcHJvcHMpKTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzaWduKCdzZXQnLCBwcm9wcyk7XG4gIH0sXG4gIGRpZmZNYXRjaFBhdGNoOiBmdW5jdGlvbiBkaWZmTWF0Y2hQYXRjaChwcm9wcykge1xuICAgIHZhbGlkYXRlT2JqZWN0KCdkaWZmTWF0Y2hQYXRjaCcsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcy5fYXNzaWduKCdkaWZmTWF0Y2hQYXRjaCcsIHByb3BzKTtcbiAgfSxcbiAgdW5zZXQ6IGZ1bmN0aW9uIHVuc2V0KGF0dHJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnNldChhdHRycykgdGFrZXMgYW4gYXJyYXkgb2YgYXR0cmlidXRlcyB0byB1bnNldCwgbm9uLWFycmF5IGdpdmVuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vcGVyYXRpb25zID0gYXNzaWduKHt9LCB0aGlzLm9wZXJhdGlvbnMsIHtcbiAgICAgIHVuc2V0OiBhdHRyc1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzZXRJZk1pc3Npbmc6IGZ1bmN0aW9uIHNldElmTWlzc2luZyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24oJ3NldElmTWlzc2luZycsIHByb3BzKTtcbiAgfSxcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwcm9wcykge1xuICAgIHZhbGlkYXRlT2JqZWN0KCdyZXBsYWNlJywgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzLl9zZXQoJ3NldCcsIHtcbiAgICAgICQ6IHByb3BzXG4gICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaWQtbGVuZ3RoXG4gIH0sXG4gIGluYzogZnVuY3Rpb24gaW5jKHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignaW5jJywgcHJvcHMpO1xuICB9LFxuICBkZWM6IGZ1bmN0aW9uIGRlYyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24oJ2RlYycsIHByb3BzKTtcbiAgfSxcbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQoYXQsIHNlbGVjdG9yLCBpdGVtcykge1xuICAgIHZhciBfdGhpcyRfYXNzaWduO1xuXG4gICAgdmFsaWRhdGVJbnNlcnQoYXQsIHNlbGVjdG9yLCBpdGVtcyk7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignaW5zZXJ0JywgKF90aGlzJF9hc3NpZ24gPSB7fSwgX2RlZmluZVByb3BlcnR5KF90aGlzJF9hc3NpZ24sIGF0LCBzZWxlY3RvciksIF9kZWZpbmVQcm9wZXJ0eShfdGhpcyRfYXNzaWduLCBcIml0ZW1zXCIsIGl0ZW1zKSwgX3RoaXMkX2Fzc2lnbikpO1xuICB9LFxuICBhcHBlbmQ6IGZ1bmN0aW9uIGFwcGVuZChzZWxlY3RvciwgaXRlbXMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnQoJ2FmdGVyJywgXCJcIi5jb25jYXQoc2VsZWN0b3IsIFwiWy0xXVwiKSwgaXRlbXMpO1xuICB9LFxuICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKHNlbGVjdG9yLCBpdGVtcykge1xuICAgIHJldHVybiB0aGlzLmluc2VydCgnYmVmb3JlJywgXCJcIi5jb25jYXQoc2VsZWN0b3IsIFwiWzBdXCIpLCBpdGVtcyk7XG4gIH0sXG4gIHNwbGljZTogZnVuY3Rpb24gc3BsaWNlKHNlbGVjdG9yLCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zKSB7XG4gICAgLy8gTmVnYXRpdmUgaW5kZXhlcyBkb2Vzbid0IG1lYW4gdGhlIHNhbWUgaW4gU2FuaXR5IGFzIHRoZXkgZG8gaW4gSlM7XG4gICAgLy8gLTEgbWVhbnMgXCJhY3R1YWxseSBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheVwiLCB3aGljaCBhbGxvd3MgaW5zZXJ0aW5nXG4gICAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkgd2l0aG91dCBrbm93aW5nIGl0cyBsZW5ndGguIFdlIHRoZXJlZm9yZSBoYXZlXG4gICAgLy8gdG8gc3Vic3RyYWN0IG5lZ2F0aXZlIGluZGV4ZXMgYnkgb25lIHRvIG1hdGNoIEpTLiBJZiB5b3Ugd2FudCBTYW5pdHktXG4gICAgLy8gYmVoYXZpb3VyLCBqdXN0IHVzZSBgaW5zZXJ0KCdyZXBsYWNlJywgc2VsZWN0b3IsIGl0ZW1zKWAgZGlyZWN0bHlcbiAgICB2YXIgZGVsQWxsID0gdHlwZW9mIGRlbGV0ZUNvdW50ID09PSAndW5kZWZpbmVkJyB8fCBkZWxldGVDb3VudCA9PT0gLTE7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSBzdGFydCA8IDAgPyBzdGFydCAtIDEgOiBzdGFydDtcbiAgICB2YXIgZGVsQ291bnQgPSBkZWxBbGwgPyAtMSA6IE1hdGgubWF4KDAsIHN0YXJ0ICsgZGVsZXRlQ291bnQpO1xuICAgIHZhciBkZWxSYW5nZSA9IHN0YXJ0SW5kZXggPCAwICYmIGRlbENvdW50ID49IDAgPyAnJyA6IGRlbENvdW50O1xuICAgIHZhciByYW5nZVNlbGVjdG9yID0gXCJcIi5jb25jYXQoc2VsZWN0b3IsIFwiW1wiKS5jb25jYXQoc3RhcnRJbmRleCwgXCI6XCIpLmNvbmNhdChkZWxSYW5nZSwgXCJdXCIpO1xuICAgIHJldHVybiB0aGlzLmluc2VydCgncmVwbGFjZScsIHJhbmdlU2VsZWN0b3IsIGl0ZW1zIHx8IFtdKTtcbiAgfSxcbiAgaWZSZXZpc2lvbklkOiBmdW5jdGlvbiBpZlJldmlzaW9uSWQocmV2KSB7XG4gICAgdGhpcy5vcGVyYXRpb25zLmlmUmV2aXNpb25JRCA9IHJldjtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgc2VyaWFsaXplOiBmdW5jdGlvbiBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIGFzc2lnbihnZXRTZWxlY3Rpb24odGhpcy5zZWxlY3Rpb24pLCB0aGlzLm9wZXJhdGlvbnMpO1xuICB9LFxuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJpYWxpemUoKTtcbiAgfSxcbiAgY29tbWl0OiBmdW5jdGlvbiBjb21taXQoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKCF0aGlzLmNsaWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBgY2xpZW50YCBwYXNzZWQgdG8gcGF0Y2gsIGVpdGhlciBwcm92aWRlIG9uZSBvciBwYXNzIHRoZSAnICsgJ3BhdGNoIHRvIGEgY2xpZW50cyBgbXV0YXRlKClgIG1ldGhvZCcpO1xuICAgIH1cblxuICAgIHZhciByZXR1cm5GaXJzdCA9IHR5cGVvZiB0aGlzLnNlbGVjdGlvbiA9PT0gJ3N0cmluZyc7XG4gICAgdmFyIG9wdHMgPSBhc3NpZ24oe1xuICAgICAgcmV0dXJuRmlyc3Q6IHJldHVybkZpcnN0LFxuICAgICAgcmV0dXJuRG9jdW1lbnRzOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Lm11dGF0ZSh7XG4gICAgICBwYXRjaDogdGhpcy5zZXJpYWxpemUoKVxuICAgIH0sIG9wdHMpO1xuICB9LFxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5vcGVyYXRpb25zID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIF9zZXQ6IGZ1bmN0aW9uIF9zZXQob3AsIHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbihvcCwgcHJvcHMsIGZhbHNlKTtcbiAgfSxcbiAgX2Fzc2lnbjogZnVuY3Rpb24gX2Fzc2lnbihvcCwgcHJvcHMpIHtcbiAgICB2YXIgbWVyZ2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG4gICAgdmFsaWRhdGVPYmplY3Qob3AsIHByb3BzKTtcbiAgICB0aGlzLm9wZXJhdGlvbnMgPSBhc3NpZ24oe30sIHRoaXMub3BlcmF0aW9ucywgX2RlZmluZVByb3BlcnR5KHt9LCBvcCwgYXNzaWduKHt9LCBtZXJnZSAmJiB0aGlzLm9wZXJhdGlvbnNbb3BdIHx8IHt9LCBwcm9wcykpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFBhdGNoOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgdmFsaWRhdG9ycyA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMnKTtcblxudmFyIFBhdGNoID0gcmVxdWlyZSgnLi9wYXRjaCcpO1xuXG52YXIgZGVmYXVsdE11dGF0ZU9wdGlvbnMgPSB7XG4gIHJldHVybkRvY3VtZW50czogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIFRyYW5zYWN0aW9uKCkge1xuICB2YXIgb3BlcmF0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHZhciBjbGllbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIHRyYW5zYWN0aW9uSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdGhpcy50cnhJZCA9IHRyYW5zYWN0aW9uSWQ7XG4gIHRoaXMub3BlcmF0aW9ucyA9IG9wZXJhdGlvbnM7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5hc3NpZ24oVHJhbnNhY3Rpb24ucHJvdG90eXBlLCB7XG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zYWN0aW9uKHRoaXMub3BlcmF0aW9ucy5zbGljZSgwKSwgdGhpcy5jbGllbnQsIHRoaXMudHJ4SWQpO1xuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShkb2MpIHtcbiAgICB2YWxpZGF0b3JzLnZhbGlkYXRlT2JqZWN0KCdjcmVhdGUnLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9hZGQoe1xuICAgICAgY3JlYXRlOiBkb2NcbiAgICB9KTtcbiAgfSxcbiAgY3JlYXRlSWZOb3RFeGlzdHM6IGZ1bmN0aW9uIGNyZWF0ZUlmTm90RXhpc3RzKGRvYykge1xuICAgIHZhciBvcCA9ICdjcmVhdGVJZk5vdEV4aXN0cyc7XG4gICAgdmFsaWRhdG9ycy52YWxpZGF0ZU9iamVjdChvcCwgZG9jKTtcbiAgICB2YWxpZGF0b3JzLnJlcXVpcmVEb2N1bWVudElkKG9wLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9hZGQoX2RlZmluZVByb3BlcnR5KHt9LCBvcCwgZG9jKSk7XG4gIH0sXG4gIGNyZWF0ZU9yUmVwbGFjZTogZnVuY3Rpb24gY3JlYXRlT3JSZXBsYWNlKGRvYykge1xuICAgIHZhciBvcCA9ICdjcmVhdGVPclJlcGxhY2UnO1xuICAgIHZhbGlkYXRvcnMudmFsaWRhdGVPYmplY3Qob3AsIGRvYyk7XG4gICAgdmFsaWRhdG9ycy5yZXF1aXJlRG9jdW1lbnRJZChvcCwgZG9jKTtcbiAgICByZXR1cm4gdGhpcy5fYWRkKF9kZWZpbmVQcm9wZXJ0eSh7fSwgb3AsIGRvYykpO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUoZG9jdW1lbnRJZCkge1xuICAgIHZhbGlkYXRvcnMudmFsaWRhdGVEb2N1bWVudElkKCdkZWxldGUnLCBkb2N1bWVudElkKTtcbiAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgIGRlbGV0ZToge1xuICAgICAgICBpZDogZG9jdW1lbnRJZFxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBwYXRjaDogZnVuY3Rpb24gcGF0Y2goZG9jdW1lbnRJZCwgcGF0Y2hPcHMpIHtcbiAgICB2YXIgaXNCdWlsZGVyID0gdHlwZW9mIHBhdGNoT3BzID09PSAnZnVuY3Rpb24nO1xuICAgIHZhciBpc1BhdGNoID0gZG9jdW1lbnRJZCBpbnN0YW5jZW9mIFBhdGNoOyAvLyB0cmFuc2FjdGlvbi5wYXRjaChjbGllbnQucGF0Y2goJ2RvY3VtZW50SWQnKS5pbmMoe3Zpc2l0czogMX0pKVxuXG4gICAgaWYgKGlzUGF0Y2gpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hZGQoe1xuICAgICAgICBwYXRjaDogZG9jdW1lbnRJZC5zZXJpYWxpemUoKVxuICAgICAgfSk7XG4gICAgfSAvLyBwYXRjaCA9PiBwYXRjaC5pbmMoe3Zpc2l0czogMX0pLnNldCh7Zm9vOiAnYmFyJ30pXG5cblxuICAgIGlmIChpc0J1aWxkZXIpIHtcbiAgICAgIHZhciBwYXRjaCA9IHBhdGNoT3BzKG5ldyBQYXRjaChkb2N1bWVudElkLCB7fSwgdGhpcy5jbGllbnQpKTtcblxuICAgICAgaWYgKCEocGF0Y2ggaW5zdGFuY2VvZiBQYXRjaCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jdGlvbiBwYXNzZWQgdG8gYHBhdGNoKClgIG11c3QgcmV0dXJuIHRoZSBwYXRjaCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgICAgcGF0Y2g6IHBhdGNoLnNlcmlhbGl6ZSgpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgIHBhdGNoOiBhc3NpZ24oe1xuICAgICAgICBpZDogZG9jdW1lbnRJZFxuICAgICAgfSwgcGF0Y2hPcHMpXG4gICAgfSk7XG4gIH0sXG4gIHRyYW5zYWN0aW9uSWQ6IGZ1bmN0aW9uIHRyYW5zYWN0aW9uSWQoaWQpIHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gdGhpcy50cnhJZDtcbiAgICB9XG5cbiAgICB0aGlzLnRyeElkID0gaWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHNlcmlhbGl6ZTogZnVuY3Rpb24gc2VyaWFsaXplKCkge1xuICAgIHJldHVybiB0aGlzLm9wZXJhdGlvbnMuc2xpY2UoKTtcbiAgfSxcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplKCk7XG4gIH0sXG4gIGNvbW1pdDogZnVuY3Rpb24gY29tbWl0KG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuY2xpZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGBjbGllbnRgIHBhc3NlZCB0byB0cmFuc2FjdGlvbiwgZWl0aGVyIHByb3ZpZGUgb25lIG9yIHBhc3MgdGhlICcgKyAndHJhbnNhY3Rpb24gdG8gYSBjbGllbnRzIGBtdXRhdGUoKWAgbWV0aG9kJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Lm11dGF0ZSh0aGlzLnNlcmlhbGl6ZSgpLCBhc3NpZ24oe1xuICAgICAgdHJhbnNhY3Rpb25JZDogdGhpcy50cnhJZFxuICAgIH0sIGRlZmF1bHRNdXRhdGVPcHRpb25zLCBvcHRpb25zIHx8IHt9KSk7XG4gIH0sXG4gIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLm9wZXJhdGlvbnMgPSBbXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgX2FkZDogZnVuY3Rpb24gX2FkZChtdXQpIHtcbiAgICB0aGlzLm9wZXJhdGlvbnMucHVzaChtdXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gVHJhbnNhY3Rpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMnKTtcblxuZnVuY3Rpb24gRGF0YXNldHNDbGllbnQoY2xpZW50KSB7XG4gIHRoaXMucmVxdWVzdCA9IGNsaWVudC5yZXF1ZXN0LmJpbmQoY2xpZW50KTtcbn1cblxuYXNzaWduKERhdGFzZXRzQ2xpZW50LnByb3RvdHlwZSwge1xuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShuYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmeSgnUFVUJywgbmFtZSwgb3B0aW9ucyk7XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQobmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9tb2RpZnkoJ1BBVENIJywgbmFtZSwgb3B0aW9ucyk7XG4gIH0sXG4gIGRlbGV0ZTogZnVuY3Rpb24gX2RlbGV0ZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmeSgnREVMRVRFJywgbmFtZSk7XG4gIH0sXG4gIGxpc3Q6IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICB1cmk6ICcvZGF0YXNldHMnXG4gICAgfSk7XG4gIH0sXG4gIF9tb2RpZnk6IGZ1bmN0aW9uIF9tb2RpZnkobWV0aG9kLCBuYW1lLCBib2R5KSB7XG4gICAgdmFsaWRhdGUuZGF0YXNldChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJpOiBcIi9kYXRhc2V0cy9cIi5jb25jYXQobmFtZSksXG4gICAgICBib2R5OiBib2R5XG4gICAgfSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBEYXRhc2V0c0NsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBbXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1ha2VFcnJvciA9IHJlcXVpcmUoJ21ha2UtZXJyb3InKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gQ2xpZW50RXJyb3IocmVzKSB7XG4gIHZhciBwcm9wcyA9IGV4dHJhY3RFcnJvclByb3BzKHJlcyk7XG4gIENsaWVudEVycm9yLnN1cGVyLmNhbGwodGhpcywgcHJvcHMubWVzc2FnZSk7XG4gIGFzc2lnbih0aGlzLCBwcm9wcyk7XG59XG5cbmZ1bmN0aW9uIFNlcnZlckVycm9yKHJlcykge1xuICB2YXIgcHJvcHMgPSBleHRyYWN0RXJyb3JQcm9wcyhyZXMpO1xuICBTZXJ2ZXJFcnJvci5zdXBlci5jYWxsKHRoaXMsIHByb3BzLm1lc3NhZ2UpO1xuICBhc3NpZ24odGhpcywgcHJvcHMpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0RXJyb3JQcm9wcyhyZXMpIHtcbiAgdmFyIGJvZHkgPSByZXMuYm9keTtcbiAgdmFyIHByb3BzID0ge1xuICAgIHJlc3BvbnNlOiByZXMsXG4gICAgc3RhdHVzQ29kZTogcmVzLnN0YXR1c0NvZGUsXG4gICAgcmVzcG9uc2VCb2R5OiBzdHJpbmdpZnlCb2R5KGJvZHksIHJlcylcbiAgfTsgLy8gQVBJL0Jvb20gc3R5bGUgZXJyb3JzICh7c3RhdHVzQ29kZSwgZXJyb3IsIG1lc3NhZ2V9KVxuXG4gIGlmIChib2R5LmVycm9yICYmIGJvZHkubWVzc2FnZSkge1xuICAgIHByb3BzLm1lc3NhZ2UgPSBcIlwiLmNvbmNhdChib2R5LmVycm9yLCBcIiAtIFwiKS5jb25jYXQoYm9keS5tZXNzYWdlKTtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH0gLy8gUXVlcnkvZGF0YWJhc2UgZXJyb3JzICh7ZXJyb3I6IHtkZXNjcmlwdGlvbiwgb3RoZXIsIGFyYiwgcHJvcHN9fSlcblxuXG4gIGlmIChib2R5LmVycm9yICYmIGJvZHkuZXJyb3IuZGVzY3JpcHRpb24pIHtcbiAgICBwcm9wcy5tZXNzYWdlID0gYm9keS5lcnJvci5kZXNjcmlwdGlvbjtcbiAgICBwcm9wcy5kZXRhaWxzID0gYm9keS5lcnJvcjtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH0gLy8gT3RoZXIsIG1vcmUgYXJiaXRyYXJ5IGVycm9yc1xuXG5cbiAgcHJvcHMubWVzc2FnZSA9IGJvZHkuZXJyb3IgfHwgYm9keS5tZXNzYWdlIHx8IGh0dHBFcnJvck1lc3NhZ2UocmVzKTtcbiAgcmV0dXJuIHByb3BzO1xufVxuXG5mdW5jdGlvbiBodHRwRXJyb3JNZXNzYWdlKHJlcykge1xuICB2YXIgc3RhdHVzTWVzc2FnZSA9IHJlcy5zdGF0dXNNZXNzYWdlID8gXCIgXCIuY29uY2F0KHJlcy5zdGF0dXNNZXNzYWdlKSA6ICcnO1xuICByZXR1cm4gXCJcIi5jb25jYXQocmVzLm1ldGhvZCwgXCItcmVxdWVzdCB0byBcIikuY29uY2F0KHJlcy51cmwsIFwiIHJlc3VsdGVkIGluIEhUVFAgXCIpLmNvbmNhdChyZXMuc3RhdHVzQ29kZSkuY29uY2F0KHN0YXR1c01lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlCb2R5KGJvZHksIHJlcykge1xuICB2YXIgY29udGVudFR5cGUgPSAocmVzLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgaXNKc29uID0gY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMTtcbiAgcmV0dXJuIGlzSnNvbiA/IEpTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpIDogYm9keTtcbn1cblxubWFrZUVycm9yKENsaWVudEVycm9yKTtcbm1ha2VFcnJvcihTZXJ2ZXJFcnJvcik7XG5leHBvcnRzLkNsaWVudEVycm9yID0gQ2xpZW50RXJyb3I7XG5leHBvcnRzLlNlcnZlckVycm9yID0gU2VydmVyRXJyb3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB2YXIgcXMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBxcy5wdXNoKFwiXCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChrZXkpLCBcIj1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXMubGVuZ3RoID4gMCA/IFwiP1wiLmNvbmNhdChxcy5qb2luKCcmJykpIDogJyc7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eS1mdW5jdGlvbiwgbm8tcHJvY2Vzcy1lbnYgKi9cbnZhciBnZXRJdCA9IHJlcXVpcmUoJ2dldC1pdCcpO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJ2dldC1pdC9saWIvbWlkZGxld2FyZS9vYnNlcnZhYmxlJyk7XG5cbnZhciBqc29uUmVxdWVzdCA9IHJlcXVpcmUoJ2dldC1pdC9saWIvbWlkZGxld2FyZS9qc29uUmVxdWVzdCcpO1xuXG52YXIganNvblJlc3BvbnNlID0gcmVxdWlyZSgnZ2V0LWl0L2xpYi9taWRkbGV3YXJlL2pzb25SZXNwb25zZScpO1xuXG52YXIgcHJvZ3Jlc3MgPSByZXF1aXJlKCdnZXQtaXQvbGliL21pZGRsZXdhcmUvcHJvZ3Jlc3MnKTtcblxudmFyIE9ic2VydmFibGUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvbWluaW1hbCcpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2Vycm9ycycpLFxuICAgIENsaWVudEVycm9yID0gX3JlcXVpcmUuQ2xpZW50RXJyb3IsXG4gICAgU2VydmVyRXJyb3IgPSBfcmVxdWlyZS5TZXJ2ZXJFcnJvcjtcblxudmFyIGh0dHBFcnJvciA9IHtcbiAgb25SZXNwb25zZTogZnVuY3Rpb24gb25SZXNwb25zZShyZXMpIHtcbiAgICBpZiAocmVzLnN0YXR1c0NvZGUgPj0gNTAwKSB7XG4gICAgICB0aHJvdyBuZXcgU2VydmVyRXJyb3IocmVzKTtcbiAgICB9IGVsc2UgaWYgKHJlcy5zdGF0dXNDb2RlID49IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IENsaWVudEVycm9yKHJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTsgLy8gRW52aXJvbm1lbnQtc3BlY2lmaWMgbWlkZGxld2FyZS5cblxudmFyIGVudlNwZWNpZmljID0gcmVxdWlyZSgnLi9ub2RlTWlkZGxld2FyZScpO1xuXG52YXIgbWlkZGxld2FyZSA9IGVudlNwZWNpZmljLmNvbmNhdChbanNvblJlcXVlc3QoKSwganNvblJlc3BvbnNlKCksIHByb2dyZXNzKCksIGh0dHBFcnJvciwgb2JzZXJ2YWJsZSh7XG4gIGltcGxlbWVudGF0aW9uOiBPYnNlcnZhYmxlXG59KV0pO1xudmFyIHJlcXVlc3QgPSBnZXRJdChtaWRkbGV3YXJlKTtcblxuZnVuY3Rpb24gaHR0cFJlcXVlc3Qob3B0aW9ucykge1xuICB2YXIgcmVxdWVzdGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiByZXF1ZXN0O1xuICByZXR1cm4gcmVxdWVzdGVyKGFzc2lnbih7XG4gICAgbWF4UmVkaXJlY3RzOiAwXG4gIH0sIG9wdGlvbnMpKTtcbn1cblxuaHR0cFJlcXVlc3QuZGVmYXVsdFJlcXVlc3RlciA9IHJlcXVlc3Q7XG5odHRwUmVxdWVzdC5DbGllbnRFcnJvciA9IENsaWVudEVycm9yO1xuaHR0cFJlcXVlc3QuU2VydmVyRXJyb3IgPSBTZXJ2ZXJFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gaHR0cFJlcXVlc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBwcm9qZWN0SGVhZGVyID0gJ1gtU2FuaXR5LVByb2plY3QtSUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIG92ZXJyaWRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBoZWFkZXJzID0ge307XG4gIHZhciB0b2tlbiA9IG92ZXJyaWRlcy50b2tlbiB8fCBjb25maWcudG9rZW47XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuKTtcbiAgfVxuXG4gIGlmICghb3ZlcnJpZGVzLnVzZUdsb2JhbEFwaSAmJiAhY29uZmlnLnVzZVByb2plY3RIb3N0bmFtZSAmJiBjb25maWcucHJvamVjdElkKSB7XG4gICAgaGVhZGVyc1twcm9qZWN0SGVhZGVyXSA9IGNvbmZpZy5wcm9qZWN0SWQ7XG4gIH1cblxuICB2YXIgd2l0aENyZWRlbnRpYWxzID0gQm9vbGVhbih0eXBlb2Ygb3ZlcnJpZGVzLndpdGhDcmVkZW50aWFscyA9PT0gJ3VuZGVmaW5lZCcgPyBjb25maWcudG9rZW4gfHwgY29uZmlnLndpdGhDcmVkZW50aWFscyA6IG92ZXJyaWRlcy53aXRoQ3JlZGVudGlhbHMpO1xuICB2YXIgdGltZW91dCA9IHR5cGVvZiBvdmVycmlkZXMudGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgPyBjb25maWcudGltZW91dCA6IG92ZXJyaWRlcy50aW1lb3V0O1xuICByZXR1cm4gYXNzaWduKHt9LCBvdmVycmlkZXMsIHtcbiAgICBoZWFkZXJzOiBhc3NpZ24oe30sIGhlYWRlcnMsIG92ZXJyaWRlcy5oZWFkZXJzIHx8IHt9KSxcbiAgICB0aW1lb3V0OiB0eXBlb2YgdGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgPyA1ICogNjAgKiAxMDAwIDogdGltZW91dCxcbiAgICBqc29uOiB0cnVlLFxuICAgIHdpdGhDcmVkZW50aWFsczogd2l0aENyZWRlbnRpYWxzXG4gIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gUHJvamVjdHNDbGllbnQoY2xpZW50KSB7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5hc3NpZ24oUHJvamVjdHNDbGllbnQucHJvdG90eXBlLCB7XG4gIGxpc3Q6IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJpOiAnL3Byb2plY3RzJ1xuICAgIH0pO1xuICB9LFxuICBnZXRCeUlkOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJpOiBcIi9wcm9qZWN0cy9cIi5jb25jYXQoaWQpXG4gICAgfSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0c0NsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9maWx0ZXInKSxcbiAgICBmaWx0ZXIgPSBfcmVxdWlyZS5maWx0ZXI7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL21hcCcpLFxuICAgIG1hcCA9IF9yZXF1aXJlMi5tYXA7XG5cbnZhciBQYXRjaCA9IHJlcXVpcmUoJy4vZGF0YS9wYXRjaCcpO1xuXG52YXIgVHJhbnNhY3Rpb24gPSByZXF1aXJlKCcuL2RhdGEvdHJhbnNhY3Rpb24nKTtcblxudmFyIGRhdGFNZXRob2RzID0gcmVxdWlyZSgnLi9kYXRhL2RhdGFNZXRob2RzJyk7XG5cbnZhciBEYXRhc2V0c0NsaWVudCA9IHJlcXVpcmUoJy4vZGF0YXNldHMvZGF0YXNldHNDbGllbnQnKTtcblxudmFyIFByb2plY3RzQ2xpZW50ID0gcmVxdWlyZSgnLi9wcm9qZWN0cy9wcm9qZWN0c0NsaWVudCcpO1xuXG52YXIgQXNzZXRzQ2xpZW50ID0gcmVxdWlyZSgnLi9hc3NldHMvYXNzZXRzQ2xpZW50Jyk7XG5cbnZhciBVc2Vyc0NsaWVudCA9IHJlcXVpcmUoJy4vdXNlcnMvdXNlcnNDbGllbnQnKTtcblxudmFyIEF1dGhDbGllbnQgPSByZXF1aXJlKCcuL2F1dGgvYXV0aENsaWVudCcpO1xuXG52YXIgaHR0cFJlcXVlc3QgPSByZXF1aXJlKCcuL2h0dHAvcmVxdWVzdCcpO1xuXG52YXIgZ2V0UmVxdWVzdE9wdGlvbnMgPSByZXF1aXJlKCcuL2h0dHAvcmVxdWVzdE9wdGlvbnMnKTtcblxudmFyIF9yZXF1aXJlMyA9IHJlcXVpcmUoJy4vY29uZmlnJyksXG4gICAgZGVmYXVsdENvbmZpZyA9IF9yZXF1aXJlMy5kZWZhdWx0Q29uZmlnLFxuICAgIGluaXRDb25maWcgPSBfcmVxdWlyZTMuaW5pdENvbmZpZztcblxudmFyIHRvUHJvbWlzZSA9IGZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLnRvUHJvbWlzZSgpO1xufTtcblxuZnVuY3Rpb24gU2FuaXR5Q2xpZW50KCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkZWZhdWx0Q29uZmlnO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTYW5pdHlDbGllbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBTYW5pdHlDbGllbnQoY29uZmlnKTtcbiAgfVxuXG4gIHRoaXMuY29uZmlnKGNvbmZpZyk7XG4gIHRoaXMuYXNzZXRzID0gbmV3IEFzc2V0c0NsaWVudCh0aGlzKTtcbiAgdGhpcy5kYXRhc2V0cyA9IG5ldyBEYXRhc2V0c0NsaWVudCh0aGlzKTtcbiAgdGhpcy5wcm9qZWN0cyA9IG5ldyBQcm9qZWN0c0NsaWVudCh0aGlzKTtcbiAgdGhpcy51c2VycyA9IG5ldyBVc2Vyc0NsaWVudCh0aGlzKTtcbiAgdGhpcy5hdXRoID0gbmV3IEF1dGhDbGllbnQodGhpcyk7XG5cbiAgaWYgKHRoaXMuY2xpZW50Q29uZmlnLmlzUHJvbWlzZUFQSSkge1xuICAgIHZhciBvYnNlcnZhYmxlQ29uZmlnID0gYXNzaWduKHt9LCB0aGlzLmNsaWVudENvbmZpZywge1xuICAgICAgaXNQcm9taXNlQVBJOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBTYW5pdHlDbGllbnQob2JzZXJ2YWJsZUNvbmZpZyk7XG4gIH1cbn1cblxuYXNzaWduKFNhbml0eUNsaWVudC5wcm90b3R5cGUsIGRhdGFNZXRob2RzKTtcbmFzc2lnbihTYW5pdHlDbGllbnQucHJvdG90eXBlLCB7XG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFNhbml0eUNsaWVudCh0aGlzLmNvbmZpZygpKTtcbiAgfSxcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcobmV3Q29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdDb25maWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gYXNzaWduKHt9LCB0aGlzLmNsaWVudENvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2JzZXJ2YWJsZSkge1xuICAgICAgdmFyIG9ic2VydmFibGVDb25maWcgPSBhc3NpZ24oe30sIG5ld0NvbmZpZywge1xuICAgICAgICBpc1Byb21pc2VBUEk6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMub2JzZXJ2YWJsZS5jb25maWcob2JzZXJ2YWJsZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGllbnRDb25maWcgPSBpbml0Q29uZmlnKG5ld0NvbmZpZywgdGhpcy5jbGllbnRDb25maWcgfHwge30pO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBnZXRVcmw6IGZ1bmN0aW9uIGdldFVybCh1cmkpIHtcbiAgICB2YXIgY2FuVXNlQ2RuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICB2YXIgYmFzZSA9IGNhblVzZUNkbiA/IHRoaXMuY2xpZW50Q29uZmlnLmNkblVybCA6IHRoaXMuY2xpZW50Q29uZmlnLnVybDtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZSwgXCIvXCIpLmNvbmNhdCh1cmkucmVwbGFjZSgvXlxcLy8sICcnKSk7XG4gIH0sXG4gIGlzUHJvbWlzZUFQSTogZnVuY3Rpb24gaXNQcm9taXNlQVBJKCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudENvbmZpZy5pc1Byb21pc2VBUEk7XG4gIH0sXG4gIF9yZXF1ZXN0T2JzZXJ2YWJsZTogZnVuY3Rpb24gX3JlcXVlc3RPYnNlcnZhYmxlKG9wdGlvbnMpIHtcbiAgICB2YXIgdXJpID0gb3B0aW9ucy51cmwgfHwgb3B0aW9ucy51cmk7XG4gICAgdmFyIGNhblVzZUNkbiA9IHRoaXMuY2xpZW50Q29uZmlnLnVzZUNkbiAmJiBbJ0dFVCcsICdIRUFEJ10uaW5kZXhPZihvcHRpb25zLm1ldGhvZCB8fCAnR0VUJykgPj0gMCAmJiB1cmkuaW5kZXhPZignL2RhdGEvJykgPT09IDA7XG4gICAgdmFyIHJlcU9wdGlvbnMgPSBnZXRSZXF1ZXN0T3B0aW9ucyh0aGlzLmNsaWVudENvbmZpZywgYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICB1cmw6IHRoaXMuZ2V0VXJsKHVyaSwgY2FuVXNlQ2RuKVxuICAgIH0pKTtcbiAgICByZXR1cm4gaHR0cFJlcXVlc3QocmVxT3B0aW9ucywgdGhpcy5jbGllbnRDb25maWcucmVxdWVzdGVyKTtcbiAgfSxcbiAgcmVxdWVzdDogZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLl9yZXF1ZXN0T2JzZXJ2YWJsZShvcHRpb25zKS5waXBlKGZpbHRlcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmVudC50eXBlID09PSAncmVzcG9uc2UnO1xuICAgIH0pLCBtYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuYm9keTtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcy5pc1Byb21pc2VBUEkoKSA/IHRvUHJvbWlzZShvYnNlcnZhYmxlKSA6IG9ic2VydmFibGU7XG4gIH1cbn0pO1xuU2FuaXR5Q2xpZW50LlBhdGNoID0gUGF0Y2g7XG5TYW5pdHlDbGllbnQuVHJhbnNhY3Rpb24gPSBUcmFuc2FjdGlvbjtcblNhbml0eUNsaWVudC5DbGllbnRFcnJvciA9IGh0dHBSZXF1ZXN0LkNsaWVudEVycm9yO1xuU2FuaXR5Q2xpZW50LlNlcnZlckVycm9yID0gaHR0cFJlcXVlc3QuU2VydmVyRXJyb3I7XG5TYW5pdHlDbGllbnQucmVxdWVzdGVyID0gaHR0cFJlcXVlc3QuZGVmYXVsdFJlcXVlc3Rlcjtcbm1vZHVsZS5leHBvcnRzID0gU2FuaXR5Q2xpZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG5mdW5jdGlvbiBVc2Vyc0NsaWVudChjbGllbnQpIHtcbiAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG59XG5cbmFzc2lnbihVc2Vyc0NsaWVudC5wcm90b3R5cGUsIHtcbiAgZ2V0QnlJZDogZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVyaTogXCIvdXNlcnMvXCIuY29uY2F0KGlkKVxuICAgIH0pO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gVXNlcnNDbGllbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgZGVmYXVsdHMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5jb25jYXQoT2JqZWN0LmtleXMob2JqKSkucmVkdWNlKGZ1bmN0aW9uICh0YXJnZXQsIHByb3ApIHtcbiAgICB0YXJnZXRbcHJvcF0gPSB0eXBlb2Ygb2JqW3Byb3BdID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzW3Byb3BdIDogb2JqW3Byb3BdO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sIHt9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKHNlbCkge1xuICBpZiAodHlwZW9mIHNlbCA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShzZWwpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBzZWxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHNlbCAmJiBzZWwucXVlcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6IHNlbC5xdWVyeVxuICAgIH07XG4gIH1cblxuICB2YXIgc2VsZWN0aW9uT3B0cyA9IFsnKiBEb2N1bWVudCBJRCAoPGRvY0lkPiknLCAnKiBBcnJheSBvZiBkb2N1bWVudCBJRHMnLCAnKiBPYmplY3QgY29udGFpbmluZyBgcXVlcnlgJ10uam9pbignXFxuJyk7XG4gIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gc2VsZWN0aW9uIC0gbXVzdCBiZSBvbmUgb2Y6XFxuXFxuXCIuY29uY2F0KHNlbGVjdGlvbk9wdHMpKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBkaWRDYWxsID0gZmFsc2U7XG4gIHZhciByZXR1cm5WYWx1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGlkQ2FsbCkge1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cblxuICAgIHJldHVyblZhbHVlID0gZm4uYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIGRpZENhbGwgPSB0cnVlO1xuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgcHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZShmdW5jdGlvbiAoc2VsZWN0aW9uLCBwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIHNlbGVjdGlvbltwcm9wXSA9IG9ialtwcm9wXTtcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xuICB9LCB7fSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciBWQUxJRF9BU1NFVF9UWVBFUyA9IFsnaW1hZ2UnLCAnZmlsZSddO1xudmFyIFZBTElEX0lOU0VSVF9MT0NBVElPTlMgPSBbJ2JlZm9yZScsICdhZnRlcicsICdyZXBsYWNlJ107XG5cbmV4cG9ydHMuZGF0YXNldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghL15bLVxcd117MSwxMjh9JC8udGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGF0YXNldHMgY2FuIG9ubHkgY29udGFpbiBsb3dlcmNhc2UgY2hhcmFjdGVycywgbnVtYmVycywgdW5kZXJzY29yZXMgYW5kIGRhc2hlcycpO1xuICB9XG59O1xuXG5leHBvcnRzLnByb2plY3RJZCA9IGZ1bmN0aW9uIChpZCkge1xuICBpZiAoIS9eWy1hLXowLTldKyQvaS50ZXN0KGlkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYHByb2plY3RJZGAgY2FuIG9ubHkgY29udGFpbiBvbmx5IGEteiwgMC05IGFuZCBkYXNoZXMnKTtcbiAgfVxufTtcblxuZXhwb3J0cy52YWxpZGF0ZUFzc2V0VHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmIChWQUxJRF9BU1NFVF9UWVBFUy5pbmRleE9mKHR5cGUpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXNzZXQgdHlwZTogXCIuY29uY2F0KHR5cGUsIFwiLiBNdXN0IGJlIG9uZSBvZiBcIikuY29uY2F0KFZBTElEX0FTU0VUX1RZUEVTLmpvaW4oJywgJykpKTtcbiAgfVxufTtcblxuZXhwb3J0cy52YWxpZGF0ZU9iamVjdCA9IGZ1bmN0aW9uIChvcCwgdmFsKSB7XG4gIGlmICh2YWwgPT09IG51bGwgfHwgX3R5cGVvZih2YWwpICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQob3AsIFwiKCkgdGFrZXMgYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcIikpO1xuICB9XG59O1xuXG5leHBvcnRzLnJlcXVpcmVEb2N1bWVudElkID0gZnVuY3Rpb24gKG9wLCBkb2MpIHtcbiAgaWYgKCFkb2MuX2lkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG9wLCBcIigpIHJlcXVpcmVzIHRoYXQgdGhlIGRvY3VtZW50IGNvbnRhaW5zIGFuIElEIChcXFwiX2lkXFxcIiBwcm9wZXJ0eSlcIikpO1xuICB9XG5cbiAgZXhwb3J0cy52YWxpZGF0ZURvY3VtZW50SWQob3AsIGRvYy5faWQpO1xufTtcblxuZXhwb3J0cy52YWxpZGF0ZURvY3VtZW50SWQgPSBmdW5jdGlvbiAob3AsIGlkKSB7XG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8ICEvXlthLXowLTlfLi1dKyQvaS50ZXN0KGlkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChvcCwgXCIoKTogXFxcIlwiKS5jb25jYXQoaWQsIFwiXFxcIiBpcyBub3QgYSB2YWxpZCBkb2N1bWVudCBJRFwiKSk7XG4gIH1cbn07XG5cbmV4cG9ydHMudmFsaWRhdGVJbnNlcnQgPSBmdW5jdGlvbiAoYXQsIHNlbGVjdG9yLCBpdGVtcykge1xuICB2YXIgc2lnbmF0dXJlID0gJ2luc2VydChhdCwgc2VsZWN0b3IsIGl0ZW1zKSc7XG5cbiAgaWYgKFZBTElEX0lOU0VSVF9MT0NBVElPTlMuaW5kZXhPZihhdCkgPT09IC0xKSB7XG4gICAgdmFyIHZhbGlkID0gVkFMSURfSU5TRVJUX0xPQ0FUSU9OUy5tYXAoZnVuY3Rpb24gKGxvYykge1xuICAgICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdChsb2MsIFwiXFxcIlwiKTtcbiAgICB9KS5qb2luKCcsICcpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChzaWduYXR1cmUsIFwiIHRha2VzIGFuIFxcXCJhdFxcXCItYXJndW1lbnQgd2hpY2ggaXMgb25lIG9mOiBcIikuY29uY2F0KHZhbGlkKSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChzaWduYXR1cmUsIFwiIHRha2VzIGEgXFxcInNlbGVjdG9yXFxcIi1hcmd1bWVudCB3aGljaCBtdXN0IGJlIGEgc3RyaW5nXCIpKTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoc2lnbmF0dXJlLCBcIiB0YWtlcyBhbiBcXFwiaXRlbXNcXFwiLWFyZ3VtZW50IHdoaWNoIG11c3QgYmUgYW4gYXJyYXlcIikpO1xuICB9XG59O1xuXG5leHBvcnRzLmhhc0RhdGFzZXQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmICghY29uZmlnLmdyYWRpZW50TW9kZSAmJiAhY29uZmlnLmRhdGFzZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BkYXRhc2V0YCBtdXN0IGJlIHByb3ZpZGVkIHRvIHBlcmZvcm0gcXVlcmllcycpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5kYXRhc2V0IHx8ICcnO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbnZhciBldnMgPSByZXF1aXJlKCdAcmV4eGFycy9ldmVudHNvdXJjZS1wb2x5ZmlsbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkV2ZW50U291cmNlIHx8IGV2cy5FdmVudFNvdXJjZVxuIiwidmFyIGJhc2VVcmwgPSAnaHR0cHM6Ly9kb2NzLnNhbml0eS5pby9oZWxwLydcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZW5lcmF0ZUhlbHBVcmwoc2x1Zykge1xuICByZXR1cm4gYmFzZVVybCArIHNsdWdcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdyeGpzL2ludGVybmFsL09ic2VydmFibGUnKSxcbiAgICBPYnNlcnZhYmxlID0gX3JlcXVpcmUuT2JzZXJ2YWJsZTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJy4uL29wZXJhdG9ycy9tYXAnKSxcbiAgICBtYXAgPSBfcmVxdWlyZTIubWFwO1xuXG52YXIgX3JlcXVpcmUzID0gcmVxdWlyZSgnLi4vb3BlcmF0b3JzL2ZpbHRlcicpLFxuICAgIGZpbHRlciA9IF9yZXF1aXJlMy5maWx0ZXI7XG5cbnZhciBfcmVxdWlyZTQgPSByZXF1aXJlKCcuLi9vcGVyYXRvcnMvcmVkdWNlJyksXG4gICAgcmVkdWNlID0gX3JlcXVpcmU0LnJlZHVjZTtcbi8qXG4gQSBtaW5pbWFsIHJ4anMgYmFzZWQgb2JzZXJ2YWJsZSB0aGF0IGFsaWduIGFzIGNsb3NlbHkgYXMgcG9zc2libGUgd2l0aCB0aGUgY3VycmVudCBlcy1vYnNlcnZhYmxlIHNwZWMsXG4gd2l0aG91dCB0aGUgc3RhdGljIGZhY3RvcnkgbWV0aG9kc1xuICovXG5cblxuZnVuY3Rpb24gU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwoKSB7XG4gIE9ic2VydmFibGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbn1cblxuU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShhc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgT2JzZXJ2YWJsZS5wcm90b3R5cGUpKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTYW5pdHlPYnNlcnZhYmxlTWluaW1hbC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIHtcbiAgdmFsdWU6IFNhbml0eU9ic2VydmFibGVNaW5pbWFsLFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cblNhbml0eU9ic2VydmFibGVNaW5pbWFsLnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gbGlmdChvcGVyYXRvcikge1xuICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBTYW5pdHlPYnNlcnZhYmxlTWluaW1hbCgpO1xuICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgcmV0dXJuIG9ic2VydmFibGU7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEZXByZWNhdGVkTWVtYmVyT3AobmFtZSwgb3ApIHtcbiAgdmFyIGhhc1dhcm5lZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gZGVwcmVjYXRlZE9wZXJhdG9yKCkge1xuICAgIGlmICghaGFzV2FybmVkKSB7XG4gICAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcihcIkNhbGxpbmcgb2JzZXJ2YWJsZS5cIi5jb25jYXQobmFtZSwgXCIoLi4uKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG9ic2VydmFibGUucGlwZShcIikuY29uY2F0KG5hbWUsIFwiKC4uLikpIGluc3RlYWRcIikpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5waXBlKG9wLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5TYW5pdHlPYnNlcnZhYmxlTWluaW1hbC5wcm90b3R5cGUubWFwID0gY3JlYXRlRGVwcmVjYXRlZE1lbWJlck9wKCdtYXAnLCBtYXApO1xuU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwucHJvdG90eXBlLmZpbHRlciA9IGNyZWF0ZURlcHJlY2F0ZWRNZW1iZXJPcCgnZmlsdGVyJywgZmlsdGVyKTtcblNhbml0eU9ic2VydmFibGVNaW5pbWFsLnByb3RvdHlwZS5yZWR1Y2UgPSBjcmVhdGVEZXByZWNhdGVkTWVtYmVyT3AoJ2ZpbHRlcicsIHJlZHVjZSk7XG5tb2R1bGUuZXhwb3J0cyA9IFNhbml0eU9ic2VydmFibGVNaW5pbWFsOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwnKVxuIiwiZXhwb3J0cy5maWx0ZXIgPSByZXF1aXJlKCdyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXInKS5maWx0ZXJcbiIsImV4cG9ydHMubWFwID0gcmVxdWlyZSgncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwJykubWFwXG4iLCJleHBvcnRzLnJlZHVjZSA9IHJlcXVpcmUoJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3JlZHVjZScpLnJlZHVjZVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqID0gcmVxdWlyZSgnaXMtb2JqJyk7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1NvdXJjZXMgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbktleSh0bywgZnJvbSwga2V5KSB7XG5cdHZhciB2YWwgPSBmcm9tW2tleV07XG5cblx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHRvLCBrZXkpKSB7XG5cdFx0aWYgKHRvW2tleV0gPT09IHVuZGVmaW5lZCB8fCB0b1trZXldID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QgKCcgKyBrZXkgKyAnKScpO1xuXHRcdH1cblx0fVxuXG5cdGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0bywga2V5KSB8fCAhaXNPYmoodmFsKSkge1xuXHRcdHRvW2tleV0gPSB2YWw7XG5cdH0gZWxzZSB7XG5cdFx0dG9ba2V5XSA9IGFzc2lnbihPYmplY3QodG9ba2V5XSksIGZyb21ba2V5XSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXNzaWduKHRvLCBmcm9tKSB7XG5cdGlmICh0byA9PT0gZnJvbSkge1xuXHRcdHJldHVybiB0bztcblx0fVxuXG5cdGZyb20gPSBPYmplY3QoZnJvbSk7XG5cblx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRhc3NpZ25LZXkodG8sIGZyb20sIGtleSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHR2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0YXNzaWduS2V5KHRvLCBmcm9tLCBzeW1ib2xzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVlcEFzc2lnbih0YXJnZXQpIHtcblx0dGFyZ2V0ID0gdG9PYmplY3QodGFyZ2V0KTtcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGFzc2lnbih0YXJnZXQsIGFyZ3VtZW50c1tzXSk7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWItbm9kZScpXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWJzdWIgPSByZXF1aXJlKCduYW5vLXB1YnN1YicpO1xudmFyIG1pZGRsZXdhcmVSZWR1Y2VyID0gcmVxdWlyZSgnLi91dGlsL21pZGRsZXdhcmVSZWR1Y2VyJyk7XG52YXIgcHJvY2Vzc09wdGlvbnMgPSByZXF1aXJlKCcuL21pZGRsZXdhcmUvZGVmYXVsdE9wdGlvbnNQcm9jZXNzb3InKTtcbnZhciB2YWxpZGF0ZU9wdGlvbnMgPSByZXF1aXJlKCcuL21pZGRsZXdhcmUvZGVmYXVsdE9wdGlvbnNWYWxpZGF0b3InKTtcbnZhciBodHRwUmVxdWVzdCA9IHJlcXVpcmUoJy4vcmVxdWVzdCcpOyAvLyBub2RlLXJlcXVlc3QgaW4gbm9kZSwgYnJvd3Nlci1yZXF1ZXN0IGluIGJyb3dzZXJzXG5cbnZhciBjaGFubmVsTmFtZXMgPSBbJ3JlcXVlc3QnLCAncmVzcG9uc2UnLCAncHJvZ3Jlc3MnLCAnZXJyb3InLCAnYWJvcnQnXTtcbnZhciBtaWRkbGVob29rcyA9IFsncHJvY2Vzc09wdGlvbnMnLCAndmFsaWRhdGVPcHRpb25zJywgJ2ludGVyY2VwdFJlcXVlc3QnLCAnZmluYWxpemVPcHRpb25zJywgJ29uUmVxdWVzdCcsICdvblJlc3BvbnNlJywgJ29uRXJyb3InLCAnb25SZXR1cm4nLCAnb25IZWFkZXJzJ107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUmVxdWVzdGVyKCkge1xuICB2YXIgaW5pdE1pZGRsZXdhcmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuXG4gIHZhciBsb2FkZWRNaWRkbGV3YXJlID0gW107XG4gIHZhciBtaWRkbGV3YXJlID0gbWlkZGxlaG9va3MucmVkdWNlKGZ1bmN0aW9uICh3YXJlLCBuYW1lKSB7XG4gICAgd2FyZVtuYW1lXSA9IHdhcmVbbmFtZV0gfHwgW107XG4gICAgcmV0dXJuIHdhcmU7XG4gIH0sIHtcbiAgICBwcm9jZXNzT3B0aW9uczogW3Byb2Nlc3NPcHRpb25zXSxcbiAgICB2YWxpZGF0ZU9wdGlvbnM6IFt2YWxpZGF0ZU9wdGlvbnNdXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlcXVlc3Qob3B0cykge1xuICAgIHZhciBjaGFubmVscyA9IGNoYW5uZWxOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gcHVic3ViKCk7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sIHt9KTtcblxuICAgIC8vIFByZXBhcmUgYSBtaWRkbGV3YXJlIHJlZHVjZXIgdGhhdCBjYW4gYmUgcmV1c2VkIHRocm91Z2hvdXQgdGhlIGxpZmVjeWNsZVxuICAgIHZhciBhcHBseU1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlUmVkdWNlcihtaWRkbGV3YXJlKTtcblxuICAgIC8vIFBhcnNlIHRoZSBwYXNzZWQgb3B0aW9uc1xuICAgIHZhciBvcHRpb25zID0gYXBwbHlNaWRkbGV3YXJlKCdwcm9jZXNzT3B0aW9ucycsIG9wdHMpO1xuXG4gICAgLy8gVmFsaWRhdGUgdGhlIG9wdGlvbnNcbiAgICBhcHBseU1pZGRsZXdhcmUoJ3ZhbGlkYXRlT3B0aW9ucycsIG9wdGlvbnMpO1xuXG4gICAgLy8gQnVpbGQgYSBjb250ZXh0IG9iamVjdCB3ZSBjYW4gcGFzcyB0byBjaGlsZCBoYW5kbGVyc1xuICAgIHZhciBjb250ZXh0ID0geyBvcHRpb25zOiBvcHRpb25zLCBjaGFubmVsczogY2hhbm5lbHMsIGFwcGx5TWlkZGxld2FyZTogYXBwbHlNaWRkbGV3YXJlXG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gaG9sZCBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCwgb25nb2luZyByZXF1ZXN0LFxuICAgICAgLy8gaW4gb3JkZXIgdG8gYWxsb3cgY2FuY2VsbGF0aW9uLiBJbiB0aGUgY2FzZSBvZiB0aGUgcmV0cnkgbWlkZGxld2FyZSxcbiAgICAgIC8vIGEgbmV3IHJlcXVlc3QgbWlnaHQgYmUgdHJpZ2dlcmVkXG4gICAgfTt2YXIgb25nb2luZ1JlcXVlc3QgPSBudWxsO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IGNoYW5uZWxzLnJlcXVlc3Quc3Vic2NyaWJlKGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgIC8vIExldCByZXF1ZXN0IGFkYXB0ZXJzIChub2RlL2Jyb3dzZXIpIHBlcmZvcm0gdGhlIGFjdHVhbCByZXF1ZXN0XG4gICAgICBvbmdvaW5nUmVxdWVzdCA9IGh0dHBSZXF1ZXN0KGN0eCwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgIHJldHVybiBvblJlc3BvbnNlKGVyciwgcmVzLCBjdHgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB3ZSBhYm9ydCB0aGUgcmVxdWVzdCwgcHJldmVudCBmdXJ0aGVyIHJlcXVlc3RzIGZyb20gaGFwcGVuaW5nLFxuICAgIC8vIGFuZCBiZSBzdXJlIHRvIGNhbmNlbCBhbnkgb25nb2luZyByZXF1ZXN0IChvYnZpb3VzbHkpXG4gICAgY2hhbm5lbHMuYWJvcnQuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAob25nb2luZ1JlcXVlc3QpIHtcbiAgICAgICAgb25nb2luZ1JlcXVlc3QuYWJvcnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNlZSBpZiBhbnkgbWlkZGxld2FyZSB3YW50cyB0byBtb2RpZnkgdGhlIHJldHVybiB2YWx1ZSAtIGZvciBpbnN0YW5jZVxuICAgIC8vIHRoZSBwcm9taXNlIG9yIG9ic2VydmFibGUgbWlkZGxld2FyZXNcbiAgICB2YXIgcmV0dXJuVmFsdWUgPSBhcHBseU1pZGRsZXdhcmUoJ29uUmV0dXJuJywgY2hhbm5lbHMsIGNvbnRleHQpO1xuXG4gICAgLy8gSWYgcmV0dXJuIHZhbHVlIGhhcyBiZWVuIG1vZGlmaWVkIGJ5IGEgbWlkZGxld2FyZSwgd2UgZXhwZWN0IHRoZSBtaWRkbGV3YXJlXG4gICAgLy8gdG8gcHVibGlzaCBvbiB0aGUgJ3JlcXVlc3QnIGNoYW5uZWwuIElmIGl0IGhhc24ndCBiZWVuIG1vZGlmaWVkLCB3ZSB3YW50IHRvXG4gICAgLy8gdHJpZ2dlciBpdCByaWdodCBhd2F5XG4gICAgaWYgKHJldHVyblZhbHVlID09PSBjaGFubmVscykge1xuICAgICAgY2hhbm5lbHMucmVxdWVzdC5wdWJsaXNoKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcblxuICAgIGZ1bmN0aW9uIG9uUmVzcG9uc2UocmVxRXJyLCByZXMsIGN0eCkge1xuICAgICAgdmFyIGVycm9yID0gcmVxRXJyO1xuICAgICAgdmFyIHJlc3BvbnNlID0gcmVzO1xuXG4gICAgICAvLyBXZSdyZSBwcm9jZXNzaW5nIG5vbi1lcnJvcnMgZmlyc3QsIGluIGNhc2UgYSBtaWRkbGV3YXJlIGNvbnZlcnRzIHRoZVxuICAgICAgLy8gcmVzcG9uc2UgaW50byBhbiBlcnJvciAoZm9yIGluc3RhbmNlLCBzdGF0dXMgPj0gNDAwID09IEh0dHBFcnJvcilcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNwb25zZSA9IGFwcGx5TWlkZGxld2FyZSgnb25SZXNwb25zZScsIHJlcywgY3R4KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBudWxsO1xuICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGVycm9yIG1pZGRsZXdhcmUgLSBpZiBtaWRkbGV3YXJlIHJldHVybiB0aGUgc2FtZSAob3IgYSBkaWZmZXJlbnQpIGVycm9yLFxuICAgICAgLy8gcHVibGlzaCBhcyBhbiBlcnJvciBldmVudC4gSWYgd2UgKmRvbid0KiByZXR1cm4gYW4gZXJyb3IsIGFzc3VtZSBpdCBoYXMgYmVlbiBoYW5kbGVkXG4gICAgICBlcnJvciA9IGVycm9yICYmIGFwcGx5TWlkZGxld2FyZSgnb25FcnJvcicsIGVycm9yLCBjdHgpO1xuXG4gICAgICAvLyBGaWd1cmUgb3V0IGlmIHdlIHNob3VsZCBwdWJsaXNoIG9uIGVycm9yL3Jlc3BvbnNlIGNoYW5uZWxzXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2hhbm5lbHMuZXJyb3IucHVibGlzaChlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIGNoYW5uZWxzLnJlc3BvbnNlLnB1Ymxpc2gocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3QudXNlID0gZnVuY3Rpb24gdXNlKG5ld01pZGRsZXdhcmUpIHtcbiAgICBpZiAoIW5ld01pZGRsZXdhcmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gYWRkIG1pZGRsZXdhcmUgdGhhdCByZXNvbHZlZCB0byBmYWxzZXkgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5ld01pZGRsZXdhcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gYWRkIG1pZGRsZXdhcmUgdGhhdCB3YXMgYSBmdW5jdGlvbi4gSXQgcHJvYmFibHkgZXhwZWN0cyB5b3UgdG8gcGFzcyBvcHRpb25zIHRvIGl0LicpO1xuICAgIH1cblxuICAgIGlmIChuZXdNaWRkbGV3YXJlLm9uUmV0dXJuICYmIG1pZGRsZXdhcmUub25SZXR1cm4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmllZCB0byBhZGQgbmV3IG1pZGRsZXdhcmUgd2l0aCBgb25SZXR1cm5gIGhhbmRsZXIsIGJ1dCBhbm90aGVyIGhhbmRsZXIgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIGZvciB0aGlzIGV2ZW50Jyk7XG4gICAgfVxuXG4gICAgbWlkZGxlaG9va3MuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAobmV3TWlkZGxld2FyZVtrZXldKSB7XG4gICAgICAgIG1pZGRsZXdhcmVba2V5XS5wdXNoKG5ld01pZGRsZXdhcmVba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsb2FkZWRNaWRkbGV3YXJlLnB1c2gobmV3TWlkZGxld2FyZSk7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH07XG5cbiAgcmVxdWVzdC5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBjcmVhdGVSZXF1ZXN0ZXIobG9hZGVkTWlkZGxld2FyZSk7XG4gIH07XG5cbiAgaW5pdE1pZGRsZXdhcmUuZm9yRWFjaChyZXF1ZXN0LnVzZSk7XG5cbiAgcmV0dXJuIHJlcXVlc3Q7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIHVybFBhcnNlID0gcmVxdWlyZSgndXJsLXBhcnNlJyk7XG5cbnZhciBpc1JlYWN0TmF0aXZlID0gdHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHsgdGltZW91dDogaXNSZWFjdE5hdGl2ZSA/IDYwMDAwIDogMTIwMDAwIH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycgPyBvYmplY3RBc3NpZ24oeyB1cmw6IG9wdHMgfSwgZGVmYXVsdE9wdGlvbnMpIDogb2JqZWN0QXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG5cbiAgLy8gUGFyc2UgVVJMIGludG8gcGFydHNcbiAgdmFyIHVybCA9IHVybFBhcnNlKG9wdGlvbnMudXJsLCB7fSwgLy8gRG9uJ3QgdXNlIGN1cnJlbnQgYnJvd3NlciBsb2NhdGlvblxuICB0cnVlIC8vIFBhcnNlIHF1ZXJ5IHN0cmluZ3NcbiAgKTtcblxuICAvLyBOb3JtYWxpemUgdGltZW91dHNcbiAgb3B0aW9ucy50aW1lb3V0ID0gbm9ybWFsaXplVGltZW91dChvcHRpb25zLnRpbWVvdXQpO1xuXG4gIC8vIFNoYWxsb3ctbWVyZ2UgKG92ZXJyaWRlKSBleGlzdGluZyBxdWVyeSBwYXJhbXNcbiAgaWYgKG9wdGlvbnMucXVlcnkpIHtcbiAgICB1cmwucXVlcnkgPSBvYmplY3RBc3NpZ24oe30sIHVybC5xdWVyeSwgcmVtb3ZlVW5kZWZpbmVkKG9wdGlvbnMucXVlcnkpKTtcbiAgfVxuXG4gIC8vIEltcGxpY2l0IFBPU1QgaWYgd2UgaGF2ZSBub3Qgc3BlY2lmaWVkIGEgbWV0aG9kIGJ1dCBoYXZlIGEgYm9keVxuICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMuYm9keSAmJiAhb3B0aW9ucy5tZXRob2QgPyAnUE9TVCcgOiAob3B0aW9ucy5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG5cbiAgLy8gU3RyaW5naWZ5IFVSTFxuICBvcHRpb25zLnVybCA9IHVybC50b1N0cmluZyhzdHJpbmdpZnlRdWVyeVN0cmluZyk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeVN0cmluZyhvYmopIHtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICBwdXNoKGtleSwgb2JqW2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWlycy5sZW5ndGggPyBwYWlycy5qb2luKCcmJykgOiAnJztcblxuICBmdW5jdGlvbiBwdXNoKGtleSwgdmFsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFsLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHB1c2goa2V5LCBpdGVtKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbF0ubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignPScpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVGltZW91dCh0aW1lKSB7XG4gIGlmICh0aW1lID09PSBmYWxzZSB8fCB0aW1lID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRpbWUuY29ubmVjdCB8fCB0aW1lLnNvY2tldCkge1xuICAgIHJldHVybiB0aW1lO1xuICB9XG5cbiAgdmFyIGRlbGF5ID0gTnVtYmVyKHRpbWUpO1xuICBpZiAoaXNOYU4oZGVsYXkpKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVRpbWVvdXQoZGVmYXVsdE9wdGlvbnMudGltZW91dCk7XG4gIH1cblxuICByZXR1cm4geyBjb25uZWN0OiBkZWxheSwgc29ja2V0OiBkZWxheSB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVVbmRlZmluZWQob2JqKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChvYmpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdE9wdGlvbnNQcm9jZXNzb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2YWxpZFVybCA9IC9eaHR0cHM/OlxcL1xcLy9pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmICghdmFsaWRVcmwudGVzdChvcHRpb25zLnVybCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXFwiXCIgKyBvcHRpb25zLnVybCArIFwiXFxcIiBpcyBub3QgYSB2YWxpZCBVUkxcIik7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0T3B0aW9uc1ZhbGlkYXRvci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnaXMtcGxhaW4tb2JqZWN0Jyk7XG5cbnZhciBzZXJpYWxpemVUeXBlcyA9IFsnYm9vbGVhbicsICdzdHJpbmcnLCAnbnVtYmVyJ107XG52YXIgaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9jZXNzT3B0aW9uczogZnVuY3Rpb24gcHJvY2Vzc09wdGlvbnMob3B0aW9ucykge1xuICAgICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc1N0cmVhbSA9IHR5cGVvZiBib2R5LnBpcGUgPT09ICdmdW5jdGlvbic7XG4gICAgICB2YXIgc2hvdWxkU2VyaWFsaXplID0gIWlzU3RyZWFtICYmICFpc0J1ZmZlcihib2R5KSAmJiAoc2VyaWFsaXplVHlwZXMuaW5kZXhPZih0eXBlb2YgYm9keSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYm9keSkpICE9PSAtMSB8fCBBcnJheS5pc0FycmF5KGJvZHkpIHx8IGlzUGxhaW5PYmplY3QoYm9keSkpO1xuXG4gICAgICBpZiAoIXNob3VsZFNlcmlhbGl6ZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iamVjdEFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zLmJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBvYmplY3RBc3NpZ24oe30sIG9wdGlvbnMuaGVhZGVycywge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc29uUmVxdWVzdC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgcmV0dXJuIHtcbiAgICBvblJlc3BvbnNlOiBmdW5jdGlvbiBvblJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzWydjb250ZW50LXR5cGUnXSB8fCAnJztcbiAgICAgIHZhciBzaG91bGREZWNvZGUgPSBvcHRzICYmIG9wdHMuZm9yY2UgfHwgY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMTtcbiAgICAgIGlmICghcmVzcG9uc2UuYm9keSB8fCAhY29udGVudFR5cGUgfHwgIXNob3VsZERlY29kZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmplY3RBc3NpZ24oe30sIHJlc3BvbnNlLCB7IGJvZHk6IHRyeVBhcnNlKHJlc3BvbnNlLmJvZHkpIH0pO1xuICAgIH0sXG5cbiAgICBwcm9jZXNzT3B0aW9uczogZnVuY3Rpb24gcHJvY2Vzc09wdGlvbnMob3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9iamVjdEFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBoZWFkZXJzOiBvYmplY3RBc3NpZ24oeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCBvcHRpb25zLmhlYWRlcnMpXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiB0cnlQYXJzZShib2R5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoYm9keSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVyci5tZXNzYWdlID0gJ0ZhaWxlZCB0byBwYXJzZWQgcmVzcG9uc2UgYm9keSBhcyBKU09OOiAnICsgZXJyLm1lc3NhZ2U7XG4gICAgdGhyb3cgZXJyO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc29uUmVzcG9uc2UuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vdXRpbC9nbG9iYWwnKTtcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIE9ic2VydmFibGUgPSBvcHRzLmltcGxlbWVudGF0aW9uIHx8IGdsb2JhbC5PYnNlcnZhYmxlO1xuICBpZiAoIU9ic2VydmFibGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BPYnNlcnZhYmxlYCBpcyBub3QgYXZhaWxhYmxlIGluIGdsb2JhbCBzY29wZSwgYW5kIG5vIGltcGxlbWVudGF0aW9uIHdhcyBwYXNzZWQnKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25SZXR1cm46IGZ1bmN0aW9uIG9uUmV0dXJuKGNoYW5uZWxzLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIGNoYW5uZWxzLmVycm9yLnN1YnNjcmliZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGFubmVscy5wcm9ncmVzcy5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQob2JqZWN0QXNzaWduKHsgdHlwZTogJ3Byb2dyZXNzJyB9LCBldmVudCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hhbm5lbHMucmVzcG9uc2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQob2JqZWN0QXNzaWduKHsgdHlwZTogJ3Jlc3BvbnNlJyB9LCByZXNwb25zZSkpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoYW5uZWxzLnJlcXVlc3QucHVibGlzaChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY2hhbm5lbHMuYWJvcnQucHVibGlzaCgpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBvblJlcXVlc3Q6IGZ1bmN0aW9uIG9uUmVxdWVzdChldnQpIHtcbiAgICAgIGlmIChldnQuYWRhcHRlciAhPT0gJ3hocicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgeGhyID0gZXZ0LnJlcXVlc3Q7XG4gICAgICB2YXIgY29udGV4dCA9IGV2dC5jb250ZXh0O1xuXG4gICAgICBpZiAoJ3VwbG9hZCcgaW4geGhyICYmICdvbnByb2dyZXNzJyBpbiB4aHIudXBsb2FkKSB7XG4gICAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzKCd1cGxvYWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdvbnByb2dyZXNzJyBpbiB4aHIpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcygnZG93bmxvYWQnKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3Moc3RhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHZhciBwZXJjZW50ID0gZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSA/IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICogMTAwIDogLTE7XG4gICAgICAgICAgY29udGV4dC5jaGFubmVscy5wcm9ncmVzcy5wdWJsaXNoKHtcbiAgICAgICAgICAgIHN0YWdlOiBzdGFnZSxcbiAgICAgICAgICAgIHBlcmNlbnQ6IHBlcmNlbnQsXG4gICAgICAgICAgICB0b3RhbDogZXZlbnQudG90YWwsXG4gICAgICAgICAgICBsb2FkZWQ6IGV2ZW50LmxvYWRlZCxcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IGV2ZW50Lmxlbmd0aENvbXB1dGFibGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wcm9ncmVzcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLXByb2dyZXNzJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBtYXgtZGVwdGg6IFtcImVycm9yXCIsIDRdICovXG52YXIgc2FtZU9yaWdpbiA9IHJlcXVpcmUoJ3NhbWUtb3JpZ2luJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgncGFyc2UtaGVhZGVycycpO1xudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge1xuICAvKiBpbnRlbnRpb25hbCBub29wICovXG59O1xuXG52YXIgd2luID0gd2luZG93O1xudmFyIFhtbEh0dHBSZXF1ZXN0ID0gd2luLlhNTEh0dHBSZXF1ZXN0IHx8IG5vb3A7XG52YXIgaGFzWGhyMiA9ICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYbWxIdHRwUmVxdWVzdCgpO1xudmFyIFhEb21haW5SZXF1ZXN0ID0gaGFzWGhyMiA/IFhtbEh0dHBSZXF1ZXN0IDogd2luLlhEb21haW5SZXF1ZXN0O1xudmFyIGFkYXB0ZXIgPSAneGhyJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgdmFyIG9wdHMgPSBjb250ZXh0Lm9wdGlvbnM7XG4gIHZhciBvcHRpb25zID0gY29udGV4dC5hcHBseU1pZGRsZXdhcmUoJ2ZpbmFsaXplT3B0aW9ucycsIG9wdHMpO1xuICB2YXIgdGltZXJzID0ge307XG5cbiAgLy8gRGVlcC1jaGVja2luZyB3aW5kb3cubG9jYXRpb24gYmVjYXVzZSBvZiByZWFjdCBuYXRpdmUsIHdoZXJlIGBsb2NhdGlvbmAgZG9lc24ndCBleGlzdFxuICB2YXIgY29ycyA9IHdpbiAmJiB3aW4ubG9jYXRpb24gJiYgIXNhbWVPcmlnaW4od2luLmxvY2F0aW9uLmhyZWYsIG9wdGlvbnMudXJsKTtcblxuICAvLyBBbGxvdyBtaWRkbGV3YXJlIHRvIGluamVjdCBhIHJlc3BvbnNlLCBmb3IgaW5zdGFuY2UgaW4gdGhlIGNhc2Ugb2YgY2FjaGluZyBvciBtb2NraW5nXG4gIHZhciBpbmplY3RlZFJlc3BvbnNlID0gY29udGV4dC5hcHBseU1pZGRsZXdhcmUoJ2ludGVyY2VwdFJlcXVlc3QnLCB1bmRlZmluZWQsIHtcbiAgICBhZGFwdGVyOiBhZGFwdGVyLFxuICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgfSk7XG5cbiAgLy8gSWYgbWlkZGxld2FyZSBpbmplY3RlZCBhIHJlc3BvbnNlLCB0cmVhdCBpdCBhcyB3ZSBub3JtYWxseSB3b3VsZCBhbmQgcmV0dXJuIGl0XG4gIC8vIERvIG5vdGUgdGhhdCB0aGUgaW5qZWN0ZWQgcmVzcG9uc2UgaGFzIHRvIGJlIHJlZHVjZWQgdG8gYSBjcm9zcy1lbnZpcm9ubWVudCBmcmllbmRseSByZXNwb25zZVxuICBpZiAoaW5qZWN0ZWRSZXNwb25zZSkge1xuICAgIHZhciBjYlRpbWVyID0gc2V0VGltZW91dChjYWxsYmFjaywgMCwgbnVsbCwgaW5qZWN0ZWRSZXNwb25zZSk7XG4gICAgdmFyIGNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoY2JUaW1lcik7XG4gICAgfTtcbiAgICByZXR1cm4geyBhYm9ydDogY2FuY2VsIH07XG4gIH1cblxuICAvLyBXZSdsbCB3YW50IHRvIG51bGwgb3V0IHRoZSByZXF1ZXN0IG9uIHN1Y2Nlc3MvZmFpbHVyZVxuICB2YXIgeGhyID0gY29ycyA/IG5ldyBYRG9tYWluUmVxdWVzdCgpIDogbmV3IFhtbEh0dHBSZXF1ZXN0KCk7XG5cbiAgdmFyIGlzWGRyID0gd2luLlhEb21haW5SZXF1ZXN0ICYmIHhociBpbnN0YW5jZW9mIHdpbi5YRG9tYWluUmVxdWVzdDtcbiAgdmFyIGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG5cbiAgLy8gUmVxdWVzdCBzdGF0ZVxuICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIHZhciB0aW1lZE91dCA9IGZhbHNlO1xuXG4gIC8vIEFwcGx5IGV2ZW50IGhhbmRsZXJzXG4gIHhoci5vbmVycm9yID0gb25FcnJvcjtcbiAgeGhyLm9udGltZW91dCA9IG9uRXJyb3I7XG4gIHhoci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgIGFib3J0ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8vIElFOSBtdXN0IGhhdmUgb25wcm9ncmVzcyBiZSBzZXQgdG8gYSB1bmlxdWUgZnVuY3Rpb25cbiAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyogaW50ZW50aW9uYWwgbm9vcCAqL1xuICB9O1xuXG4gIHZhciBsb2FkRXZlbnQgPSBpc1hkciA/ICdvbmxvYWQnIDogJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gIHhocltsb2FkRXZlbnRdID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByZXZlbnQgcmVxdWVzdCBmcm9tIHRpbWluZyBvdXRcbiAgICByZXNldFRpbWVycygpO1xuXG4gICAgaWYgKGFib3J0ZWQgfHwgeGhyLnJlYWR5U3RhdGUgIT09IDQgJiYgIWlzWGRyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2lsbCBiZSBoYW5kbGVkIGJ5IG9uRXJyb3JcbiAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uTG9hZCgpO1xuICB9O1xuXG4gIC8vIEB0b2RvIHR3byBsYXN0IG9wdGlvbnMgdG8gb3BlbigpIGlzIHVzZXJuYW1lL3Bhc3N3b3JkXG4gIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSAvLyBBbHdheXMgYXN5bmNcbiAgKTtcblxuICAvLyBTb21lIG9wdGlvbnMgbmVlZCB0byBiZSBhcHBsaWVkIGFmdGVyIG9wZW5cbiAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG5cbiAgLy8gU2V0IGhlYWRlcnNcbiAgaWYgKGhlYWRlcnMgJiYgeGhyLnNldFJlcXVlc3RIZWFkZXIpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gaGVhZGVycykge1xuICAgICAgaWYgKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGhlYWRlcnMgJiYgaXNYZHIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlYWRlcnMgY2Fubm90IGJlIHNldCBvbiBhbiBYRG9tYWluUmVxdWVzdCBvYmplY3QnKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJhd0JvZHkpIHtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgfVxuXG4gIC8vIExldCBtaWRkbGV3YXJlIGtub3cgd2UncmUgYWJvdXQgdG8gZG8gYSByZXF1ZXN0XG4gIGNvbnRleHQuYXBwbHlNaWRkbGV3YXJlKCdvblJlcXVlc3QnLCB7IG9wdGlvbnM6IG9wdGlvbnMsIGFkYXB0ZXI6IGFkYXB0ZXIsIHJlcXVlc3Q6IHhociwgY29udGV4dDogY29udGV4dCB9KTtcblxuICB4aHIuc2VuZChvcHRpb25zLmJvZHkgfHwgbnVsbCk7XG5cbiAgLy8gRmlndXJlIG91dCB3aGljaCB0aW1lb3V0cyB0byB1c2UgKGlmIGFueSlcbiAgdmFyIGRlbGF5cyA9IG9wdGlvbnMudGltZW91dDtcbiAgaWYgKGRlbGF5cykge1xuICAgIHRpbWVycy5jb25uZWN0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGltZW91dFJlcXVlc3QoJ0VUSU1FRE9VVCcpO1xuICAgIH0sIGRlbGF5cy5jb25uZWN0KTtcbiAgfVxuXG4gIHJldHVybiB7IGFib3J0OiBhYm9ydCB9O1xuXG4gIGZ1bmN0aW9uIGFib3J0KCkge1xuICAgIGFib3J0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHhocikge1xuICAgICAgeGhyLmFib3J0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGltZW91dFJlcXVlc3QoY29kZSkge1xuICAgIHRpbWVkT3V0ID0gdHJ1ZTtcbiAgICB4aHIuYWJvcnQoKTtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoY29kZSA9PT0gJ0VTT0NLRVRUSU1FRE9VVCcgPyAnU29ja2V0IHRpbWVkIG91dCBvbiByZXF1ZXN0IHRvICcgKyBvcHRpb25zLnVybCA6ICdDb25uZWN0aW9uIHRpbWVkIG91dCBvbiByZXF1ZXN0IHRvICcgKyBvcHRpb25zLnVybCk7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gICAgY29udGV4dC5jaGFubmVscy5lcnJvci5wdWJsaXNoKGVycm9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VGltZXJzKCkge1xuICAgIGlmICghZGVsYXlzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RvcFRpbWVycygpO1xuICAgIHRpbWVycy5zb2NrZXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aW1lb3V0UmVxdWVzdCgnRVNPQ0tFVFRJTUVET1VUJyk7XG4gICAgfSwgZGVsYXlzLnNvY2tldCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wVGltZXJzKCkge1xuICAgIC8vIE9ubHkgY2xlYXIgdGhlIGNvbm5lY3QgdGltZW91dCBpZiB3ZSd2ZSBnb3QgYSBjb25uZWN0aW9uXG4gICAgaWYgKGFib3J0ZWQgfHwgeGhyLnJlYWR5U3RhdGUgPj0gMiAmJiB0aW1lcnMuY29ubmVjdCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVycy5jb25uZWN0KTtcbiAgICB9XG5cbiAgICBpZiAodGltZXJzLnNvY2tldCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVycy5zb2NrZXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgaWYgKGxvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwXG4gICAgc3RvcFRpbWVycygpO1xuICAgIGxvYWRlZCA9IHRydWU7XG4gICAgeGhyID0gbnVsbDtcblxuICAgIC8vIEFubm95aW5nbHksIGRldGFpbHMgYXJlIGV4dHJlbWVseSBzY2FyY2UgYW5kIGhpZGRlbiBmcm9tIHVzLlxuICAgIC8vIFdlIG9ubHkgcmVhbGx5IGtub3cgdGhhdCBpdCBpcyBhIG5ldHdvcmsgZXJyb3JcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdOZXR3b3JrIGVycm9yIHdoaWxlIGF0dGVtcHRpbmcgdG8gcmVhY2ggJyArIG9wdGlvbnMudXJsKTtcbiAgICBlcnIuaXNOZXR3b3JrRXJyb3IgPSB0cnVlO1xuICAgIGVyci5yZXF1ZXN0ID0gb3B0aW9ucztcbiAgICBjYWxsYmFjayhlcnIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlUmVzcG9uc2UoKSB7XG4gICAgdmFyIHN0YXR1c0NvZGUgPSB4aHIuc3RhdHVzO1xuICAgIHZhciBzdGF0dXNNZXNzYWdlID0geGhyLnN0YXR1c1RleHQ7XG5cbiAgICBpZiAoaXNYZHIgJiYgc3RhdHVzQ29kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgIHN0YXR1c0NvZGUgPSAyMDA7XG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID4gMTIwMDAgJiYgc3RhdHVzQ29kZSA8IDEyMTU2KSB7XG4gICAgICAvLyBZZXQgYW5vdGhlciBJRSBxdWlyayB3aGVyZSBpdCBlbWl0cyB3ZWlyZCBzdGF0dXMgY29kZXMgb24gbmV0d29yayBlcnJvcnNcbiAgICAgIC8vIGh0dHBzOi8vc3VwcG9ydC5taWNyb3NvZnQuY29tL2VuLXVzL2tiLzE5MzYyNVxuICAgICAgcmV0dXJuIG9uRXJyb3IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQW5vdGhlciBJRSBidWcgd2hlcmUgSFRUUCAyMDQgc29tZWhvdyBlbmRzIHVwIGFzIDEyMjNcbiAgICAgIHN0YXR1c0NvZGUgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcbiAgICAgIHN0YXR1c01lc3NhZ2UgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogc3RhdHVzTWVzc2FnZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogeGhyLnJlc3BvbnNlIHx8IHhoci5yZXNwb25zZVRleHQsXG4gICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IGlzWGRyID8ge30gOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSxcbiAgICAgIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUsXG4gICAgICBzdGF0dXNNZXNzYWdlOiBzdGF0dXNNZXNzYWdlXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICBpZiAoYWJvcnRlZCB8fCBsb2FkZWQgfHwgdGltZWRPdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMCkge1xuICAgICAgb25FcnJvcihuZXcgRXJyb3IoJ1Vua25vd24gWEhSIGVycm9yJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgc3RvcFRpbWVycygpO1xuICAgIGxvYWRlZCA9IHRydWU7XG4gICAgY2FsbGJhY2sobnVsbCwgcmVkdWNlUmVzcG9uc2UoKSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXJlcXVlc3QuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS1yZXF1ZXN0Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lZ2F0ZWQtY29uZGl0aW9uICovXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBzZWxmO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7fTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgdmFyIGFwcGx5TWlkZGxld2FyZSA9IGZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZShob29rLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBiYWlsRWFybHkgPSBob29rID09PSAnb25FcnJvcic7XG5cbiAgICB2YXIgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaWRkbGV3YXJlW2hvb2tdLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG1pZGRsZXdhcmVbaG9va11baV07XG4gICAgICB2YWx1ZSA9IGhhbmRsZXIuYXBwbHkodW5kZWZpbmVkLCBbdmFsdWVdLmNvbmNhdChhcmdzKSk7XG5cbiAgICAgIGlmIChiYWlsRWFybHkgJiYgIXZhbHVlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pZGRsZXdhcmVSZWR1Y2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdyb3Eoc3RyaW5ncykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwga2V5cyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAga2V5c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICByZXR1cm4gc3RyaW5ncy5zbGljZSgwLCBsYXN0SW5kZXgpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHIsIGkpIHtcbiAgICByZXR1cm4gYWNjICsgc3RyICsga2V5c1tpXTtcbiAgfSwgJycpICsgc3RyaW5nc1tsYXN0SW5kZXhdO1xufTsiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4KSB7XG5cdHZhciB0eXBlID0gdHlwZW9mIHg7XG5cdHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn07XG4iLCIvKiFcbiAqIGlzLXBsYWluLW9iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0T2JqZWN0KG8pIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG8pID09PSB0cnVlXG4gICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgdmFyIGN0b3IscHJvdDtcblxuICBpZiAoaXNPYmplY3RPYmplY3QobykgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG4gIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuICBpZiAodHlwZW9mIGN0b3IgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG4gIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcbiAgaWYgKGlzT2JqZWN0T2JqZWN0KHByb3QpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGNvbnN0cnVjdG9yIGRvZXMgbm90IGhhdmUgYW4gT2JqZWN0LXNwZWNpZmljIG1ldGhvZFxuICBpZiAocHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8qIVxuICogaXNvYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHZhbCkgPT09IGZhbHNlO1xufTtcbiIsIi8vIElTQyBAIEp1bGllbiBGb250YW5ldFxuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY29uc3RydWN0ID0gdHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgPyBSZWZsZWN0LmNvbnN0cnVjdCA6IHVuZGVmaW5lZDtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZTtcbmlmIChjYXB0dXJlU3RhY2tUcmFjZSA9PT0gdW5kZWZpbmVkKSB7XG4gIGNhcHR1cmVTdGFja1RyYWNlID0gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2UoZXJyb3IpIHtcbiAgICB2YXIgY29udGFpbmVyID0gbmV3IEVycm9yKCk7XG5cbiAgICBkZWZpbmVQcm9wZXJ0eShlcnJvciwgXCJzdGFja1wiLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldFN0YWNrKCkge1xuICAgICAgICB2YXIgc3RhY2sgPSBjb250YWluZXIuc3RhY2s7XG5cbiAgICAgICAgLy8gUmVwbGFjZSBwcm9wZXJ0eSB3aXRoIHZhbHVlIGZvciBmYXN0ZXIgZnV0dXJlIGFjY2Vzc2VzLlxuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0YWNrXCIsIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHN0YWNrLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXRTdGFjayhzdGFjaykge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShlcnJvciwgXCJzdGFja1wiLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiBzdGFjayxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIEJhc2VFcnJvcihtZXNzYWdlKSB7XG4gIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1lc3NhZ2VcIiwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG1lc3NhZ2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjbmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKGNuYW1lICE9PSB1bmRlZmluZWQgJiYgY25hbWUgIT09IHRoaXMubmFtZSkge1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogY25hbWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xufVxuXG5CYXNlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUsIHtcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vSnNDb21tdW5pdHkvbWFrZS1lcnJvci9pc3N1ZXMvNFxuICBjb25zdHJ1Y3Rvcjoge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogQmFzZUVycm9yLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICB9LFxufSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU2V0cyB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIGlmIHBvc3NpYmxlIChkZXBlbmRzIG9mIHRoZSBKUyBlbmdpbmUpLlxudmFyIHNldEZ1bmN0aW9uTmFtZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2V0RnVuY3Rpb25OYW1lKGZuLCBuYW1lKSB7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZuLCBcIm5hbWVcIiwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG5hbWUsXG4gICAgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIgZiA9IGZ1bmN0aW9uKCkge307XG4gICAgc2V0RnVuY3Rpb25OYW1lKGYsIFwiZm9vXCIpO1xuICAgIGlmIChmLm5hbWUgPT09IFwiZm9vXCIpIHtcbiAgICAgIHJldHVybiBzZXRGdW5jdGlvbk5hbWU7XG4gICAgfVxuICB9IGNhdGNoIChfKSB7fVxufSkoKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBtYWtlRXJyb3IoY29uc3RydWN0b3IsIHN1cGVyXykge1xuICBpZiAoc3VwZXJfID09IG51bGwgfHwgc3VwZXJfID09PSBFcnJvcikge1xuICAgIHN1cGVyXyA9IEJhc2VFcnJvcjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3VwZXJfICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwic3VwZXJfIHNob3VsZCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgdmFyIG5hbWU7XG4gIGlmICh0eXBlb2YgY29uc3RydWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICBuYW1lID0gY29uc3RydWN0b3I7XG4gICAgY29uc3RydWN0b3IgPVxuICAgICAgY29uc3RydWN0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Qoc3VwZXJfLCBhcmd1bWVudHMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN1cGVyXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG5cbiAgICAvLyBJZiB0aGUgbmFtZSBjYW4gYmUgc2V0LCBkbyBpdCBvbmNlIGFuZCBmb3IgYWxsLlxuICAgIGlmIChzZXRGdW5jdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0RnVuY3Rpb25OYW1lKGNvbnN0cnVjdG9yLCBuYW1lKTtcbiAgICAgIG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBjb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNvbnN0cnVjdG9yIHNob3VsZCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIC8vIEFsc28gcmVnaXN0ZXIgdGhlIHN1cGVyIGNvbnN0cnVjdG9yIGFsc28gYXMgYGNvbnN0cnVjdG9yLnN1cGVyX2AganVzdFxuICAvLyBsaWtlIE5vZGUncyBgdXRpbC5pbmhlcml0cygpYC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRvdC1ub3RhdGlvblxuICBjb25zdHJ1Y3Rvci5zdXBlcl8gPSBjb25zdHJ1Y3RvcltcInN1cGVyXCJdID0gc3VwZXJfO1xuXG4gIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogY29uc3RydWN0b3IsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIC8vIElmIHRoZSBuYW1lIGNvdWxkIG5vdCBiZSBzZXQgb24gdGhlIGNvbnN0cnVjdG9yLCBzZXQgaXQgb24gdGhlXG4gIC8vIHByb3RvdHlwZS5cbiAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb3BlcnRpZXMubmFtZSA9IHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBuYW1lLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyXy5wcm90b3R5cGUsIHByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG1ha2VFcnJvcjtcbmV4cG9ydHMuQmFzZUVycm9yID0gQmFzZUVycm9yO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBQdWJzdWIoKSB7XG4gIHZhciBzdWJzY3JpYmVycyA9IFtdXG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgcHVibGlzaDogcHVibGlzaFxuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKVxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHZhciBpZHggPSBzdWJzY3JpYmVycy5pbmRleE9mKHN1YnNjcmliZXIpXG4gICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgc3Vic2NyaWJlcnMuc3BsaWNlKGlkeCwgMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdWJzY3JpYmVyc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG59IiwidmFyIHQsZT0odD1yZXF1aXJlKFwicXVlcnlzdHJpbmdcIikpJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJkZWZhdWx0XCJpbiB0P3QuZGVmYXVsdDp0LG89L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIHIodCl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWQodCkpO3ZhciByPWZ1bmN0aW9uKHQsZSxvKXt2YXIgcj10LmF1dGgsYT10Lmhvc3RuYW1lLHM9dC5wcm90b2NvbHx8XCJcIixwPXQucGF0aG5hbWV8fFwiXCIsbj10Lmhhc2h8fFwiXCIsYz10LnF1ZXJ5fHxcIlwiLGg9ITE7cj1yP2VuY29kZVVSSUNvbXBvbmVudChyKS5yZXBsYWNlKC8lM0EvaSxcIjpcIikrXCJAXCI6XCJcIix0Lmhvc3Q/aD1yK3QuaG9zdDphJiYoaD1yKyh+YS5pbmRleE9mKFwiOlwiKT9cIltcIithK1wiXVwiOmEpLHQucG9ydCYmKGgrPVwiOlwiK3QucG9ydCkpLGMmJlwib2JqZWN0XCI9PXR5cGVvZiBjJiYoYz1lLmVuY29kZShjKSk7dmFyIGw9dC5zZWFyY2h8fGMmJlwiP1wiK2N8fFwiXCI7cmV0dXJuIHMmJlwiOlwiIT09cy5zdWJzdHIoLTEpJiYocys9XCI6XCIpLHQuc2xhc2hlc3x8KCFzfHxvLnRlc3QocykpJiYhMSE9PWg/KGg9XCIvL1wiKyhofHxcIlwiKSxwJiZcIi9cIiE9PXBbMF0mJihwPVwiL1wiK3ApKTpofHwoaD1cIlwiKSxuJiZcIiNcIiE9PW5bMF0mJihuPVwiI1wiK24pLGwmJlwiP1wiIT09bFswXSYmKGw9XCI/XCIrbCkse3Byb3RvY29sOnMsaG9zdDpoLHBhdGhuYW1lOnA9cC5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KSxzZWFyY2g6bD1sLnJlcGxhY2UoXCIjXCIsXCIlMjNcIiksaGFzaDpufX0odCxlLG8pO3JldHVyblwiXCIrci5wcm90b2NvbCtyLmhvc3Qrci5wYXRobmFtZStyLnNlYXJjaCtyLmhhc2h9dmFyIGE9XCJodHRwOi8vXCIscz1cIncud1wiLHA9YStzLG49L14oW2EtejAtOS4rLV0qOlxcL1xcL1xcLykoW2EtejAtOS4rLV06XFwvKik/L2ksYz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gaCh0LGUpe3ZhciBvPVwic3RyaW5nXCI9PXR5cGVvZiB0P2QodCk6dDt0PVwib2JqZWN0XCI9PXR5cGVvZiB0P3IodCk6dDt2YXIgcz1kKGUpLGg9XCJcIjtvLnByb3RvY29sJiYhby5zbGFzaGVzJiYoaD1vLnByb3RvY29sLHQ9dC5yZXBsYWNlKG8ucHJvdG9jb2wsXCJcIiksaCs9XCIvXCI9PT1lWzBdfHxcIi9cIj09PXRbMF0/XCIvXCI6XCJcIiksaCYmcy5wcm90b2NvbCYmKGg9XCJcIixzLnNsYXNoZXN8fChoPXMucHJvdG9jb2wsZT1lLnJlcGxhY2Uocy5wcm90b2NvbCxcIlwiKSkpO3ZhciBsPXQubWF0Y2gobik7bCYmIXMucHJvdG9jb2wmJih0PXQuc3Vic3RyKChoPWxbMV0rKGxbMl18fFwiXCIpKS5sZW5ndGgpLC9eXFwvXFwvW14vXS8udGVzdChlKSYmKGg9aC5zbGljZSgwLC0xKSkpO3ZhciBpPW5ldyBVUkwodCxwK1wiL1wiKSx1PW5ldyBVUkwoZSxpKS50b1N0cmluZygpLnJlcGxhY2UocCxcIlwiKSxmPXMucHJvdG9jb2x8fG8ucHJvdG9jb2w7cmV0dXJuIGYrPW8uc2xhc2hlc3x8cy5zbGFzaGVzP1wiLy9cIjpcIlwiLCFoJiZmP3U9dS5yZXBsYWNlKGEsZik6aCYmKHU9dS5yZXBsYWNlKGEsXCJcIikpLGMudGVzdCh1KXx8fmUuaW5kZXhPZihcIi5cIil8fFwiL1wiPT09dC5zbGljZSgtMSl8fFwiL1wiPT09ZS5zbGljZSgtMSl8fFwiL1wiIT09dS5zbGljZSgtMSl8fCh1PXUuc2xpY2UoMCwtMSkpLGgmJih1PWgrKFwiL1wiPT09dVswXT91LnN1YnN0cigxKTp1KSksdX1mdW5jdGlvbiBsKCl7fWwucHJvdG90eXBlLnBhcnNlPWQsbC5wcm90b3R5cGUuZm9ybWF0PXIsbC5wcm90b3R5cGUucmVzb2x2ZT1oLGwucHJvdG90eXBlLnJlc29sdmVPYmplY3Q9aDt2YXIgaT0vXmh0dHBzP3xmdHB8Z29waGVyfGZpbGUvLHU9L14oLio/KShbIz9dLiopLyxmPS9eKFthLXowLTkuKy1dKjopKFxcL3swLDN9KSguKikvaSxtPS9eKFthLXowLTkuKy1dKjopP1xcL1xcL1xcLyovaSx2PS9eKFthLXowLTkuKy1dKjopKFxcL3swLDJ9KVxcWyguKilcXF0kL2k7ZnVuY3Rpb24gZCh0LG8sYSl7aWYodm9pZCAwPT09byYmKG89ITEpLHZvaWQgMD09PWEmJihhPSExKSx0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCBpbnN0YW5jZW9mIGwpcmV0dXJuIHQ7dmFyIG49KHQ9dC50cmltKCkpLm1hdGNoKHUpO3Q9bj9uWzFdLnJlcGxhY2UoL1xcXFwvZyxcIi9cIikrblsyXTp0LnJlcGxhY2UoL1xcXFwvZyxcIi9cIiksdi50ZXN0KHQpJiZcIi9cIiE9PXQuc2xpY2UoLTEpJiYodCs9XCIvXCIpO3ZhciBjPSEvKF5qYXZhc2NyaXB0KS8udGVzdCh0KSYmdC5tYXRjaChmKSxoPW0udGVzdCh0KSxkPVwiXCI7YyYmKGkudGVzdChjWzFdKXx8KGQ9Y1sxXS50b0xvd2VyQ2FzZSgpLHQ9XCJcIitjWzJdK2NbM10pLGNbMl18fChoPSExLGkudGVzdChjWzFdKT8oZD1jWzFdLHQ9XCJcIitjWzNdKTp0PVwiLy9cIitjWzNdKSwzIT09Y1syXS5sZW5ndGgmJjEhPT1jWzJdLmxlbmd0aHx8KGQ9Y1sxXSx0PVwiL1wiK2NbM10pKTt2YXIgZyx5PShuP25bMV06dCkubWF0Y2goL15odHRwcz86XFwvXFwvW14vXSsoOlswLTldKykoPz1cXC98JCkvKSxiPXkmJnlbMV0sQz1uZXcgbCxVPVwiXCIsaj1cIlwiO3RyeXtnPW5ldyBVUkwodCl9Y2F0Y2goZSl7VT1lLGR8fGF8fCEvXlxcL1xcLy8udGVzdCh0KXx8L15cXC9cXC8uK1tALl0vLnRlc3QodCl8fChqPVwiL1wiLHQ9dC5zdWJzdHIoMSkpO3RyeXtnPW5ldyBVUkwodCxwKX1jYXRjaCh0KXtyZXR1cm4gQy5wcm90b2NvbD1kLEMuaHJlZj1kLEN9fUMuc2xhc2hlcz1oJiYhaixDLmhvc3Q9Zy5ob3N0PT09cz9cIlwiOmcuaG9zdCxDLmhvc3RuYW1lPWcuaG9zdG5hbWU9PT1zP1wiXCI6Zy5ob3N0bmFtZS5yZXBsYWNlKC8oXFxbfFxcXSkvZyxcIlwiKSxDLnByb3RvY29sPVU/ZHx8bnVsbDpnLnByb3RvY29sLEMuc2VhcmNoPWcuc2VhcmNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKSxDLmhhc2g9Zy5oYXNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKTt2YXIgdz10LnNwbGl0KFwiI1wiKTshQy5zZWFyY2gmJn53WzBdLmluZGV4T2YoXCI/XCIpJiYoQy5zZWFyY2g9XCI/XCIpLEMuaGFzaHx8XCJcIiE9PXdbMV18fChDLmhhc2g9XCIjXCIpLEMucXVlcnk9bz9lLmRlY29kZShnLnNlYXJjaC5zdWJzdHIoMSkpOkMuc2VhcmNoLnN1YnN0cigxKSxDLnBhdGhuYW1lPWorKGM/ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvWydefGBdL2csZnVuY3Rpb24odCl7cmV0dXJuXCIlXCIrdC5jaGFyQ29kZUF0KCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9KS5yZXBsYWNlKC8oKD86JVswLTlBLUZdezJ9KSspL2csZnVuY3Rpb24odCxlKXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlKS5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24odCl7dmFyIGU9dC5jaGFyQ29kZUF0KCk7cmV0dXJuIGU+MjU2fHwvXlthLXowLTldJC9pLnRlc3QodCk/dDpcIiVcIitlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfSkuam9pbihcIlwiKX1jYXRjaCh0KXtyZXR1cm4gZX19KX0oZy5wYXRobmFtZSk6Zy5wYXRobmFtZSksXCJhYm91dDpcIj09PUMucHJvdG9jb2wmJlwiYmxhbmtcIj09PUMucGF0aG5hbWUmJihDLnByb3RvY29sPVwiXCIsQy5wYXRobmFtZT1cIlwiKSxVJiZcIi9cIiE9PXRbMF0mJihDLnBhdGhuYW1lPUMucGF0aG5hbWUuc3Vic3RyKDEpKSxkJiYhaS50ZXN0KGQpJiZcIi9cIiE9PXQuc2xpY2UoLTEpJiZcIi9cIj09PUMucGF0aG5hbWUmJihDLnBhdGhuYW1lPVwiXCIpLEMucGF0aD1DLnBhdGhuYW1lK0Muc2VhcmNoLEMuYXV0aD1bZy51c2VybmFtZSxnLnBhc3N3b3JkXS5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KS5maWx0ZXIoQm9vbGVhbikuam9pbihcIjpcIiksQy5wb3J0PWcucG9ydCxiJiYhQy5ob3N0LmVuZHNXaXRoKGIpJiYoQy5ob3N0Kz1iLEMucG9ydD1iLnNsaWNlKDEpKSxDLmhyZWY9aj9cIlwiK0MucGF0aG5hbWUrQy5zZWFyY2grQy5oYXNoOnIoQyk7dmFyIHg9L14oZmlsZSkvLnRlc3QoQy5ocmVmKT9bXCJob3N0XCIsXCJob3N0bmFtZVwiXTpbXTtyZXR1cm4gT2JqZWN0LmtleXMoQykuZm9yRWFjaChmdW5jdGlvbih0KXt+eC5pbmRleE9mKHQpfHwoQ1t0XT1DW3RdfHxudWxsKX0pLEN9ZXhwb3J0cy5wYXJzZT1kLGV4cG9ydHMuZm9ybWF0PXIsZXhwb3J0cy5yZXNvbHZlPWgsZXhwb3J0cy5yZXNvbHZlT2JqZWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGQoaCh0LGUpKX0sZXhwb3J0cy5Vcmw9bDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIvbW50L2MvVXNlcnMvVmVoL0RvY3VtZW50cy9HaXRIdWIvZ3VuZGxhL3dlYi9wYWdlcy9pbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIHRyaW0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59XG4gICwgaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICBpZiAoIWhlYWRlcnMpXG4gICAgcmV0dXJuIHt9XG5cbiAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgdmFyIGhlYWRlcnNBcnIgPSB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGVyc0Fyci5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBoZWFkZXJzQXJyW2ldXG4gICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBtYXAob2JqW2tdLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCB1bmRlZjtcblxuLyoqXG4gKiBEZWNvZGUgYSBVUkkgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBVUkkgZW5jb2RlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyB7U3RyaW5nfE51bGx9IFRoZSBkZWNvZGVkIHN0cmluZy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0LnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gZW5jb2RlIGEgZ2l2ZW4gaW5wdXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBlbmNvZGVkLlxuICogQHJldHVybnMge1N0cmluZ3xOdWxsfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFNpbXBsZSBxdWVyeSBzdHJpbmcgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBUaGUgcXVlcnkgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgcGFyc2VkLlxuICogQHJldHVybnMge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nKHF1ZXJ5KSB7XG4gIHZhciBwYXJzZXIgPSAvKFtePT8jJl0rKT0/KFteJl0qKS9nXG4gICAgLCByZXN1bHQgPSB7fVxuICAgICwgcGFydDtcblxuICB3aGlsZSAocGFydCA9IHBhcnNlci5leGVjKHF1ZXJ5KSkge1xuICAgIHZhciBrZXkgPSBkZWNvZGUocGFydFsxXSlcbiAgICAgICwgdmFsdWUgPSBkZWNvZGUocGFydFsyXSk7XG5cbiAgICAvL1xuICAgIC8vIFByZXZlbnQgb3ZlcnJpZGluZyBvZiBleGlzdGluZyBwcm9wZXJ0aWVzLiBUaGlzIGVuc3VyZXMgdGhhdCBidWlsZC1pblxuICAgIC8vIG1ldGhvZHMgbGlrZSBgdG9TdHJpbmdgIG9yIF9fcHJvdG9fXyBhcmUgbm90IG92ZXJyaWRlbiBieSBtYWxpY2lvdXNcbiAgICAvLyBxdWVyeXN0cmluZ3MuXG4gICAgLy9cbiAgICAvLyBJbiB0aGUgY2FzZSBpZiBmYWlsZWQgZGVjb2RpbmcsIHdlIHdhbnQgdG8gb21pdCB0aGUga2V5L3ZhbHVlIHBhaXJzXG4gICAgLy8gZnJvbSB0aGUgcmVzdWx0LlxuICAgIC8vXG4gICAgaWYgKGtleSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBrZXkgaW4gcmVzdWx0KSBjb250aW51ZTtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBxdWVyeSBzdHJpbmcgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogT2JqZWN0IHRoYXQgc2hvdWxkIGJlIHRyYW5zZm9ybWVkLlxuICogQHBhcmFtIHtTdHJpbmd9IHByZWZpeCBPcHRpb25hbCBwcmVmaXguXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcXVlcnlzdHJpbmdpZnkob2JqLCBwcmVmaXgpIHtcbiAgcHJlZml4ID0gcHJlZml4IHx8ICcnO1xuXG4gIHZhciBwYWlycyA9IFtdXG4gICAgLCB2YWx1ZVxuICAgICwga2V5O1xuXG4gIC8vXG4gIC8vIE9wdGlvbmFsbHkgcHJlZml4IHdpdGggYSAnPycgaWYgbmVlZGVkXG4gIC8vXG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIHByZWZpeCkgcHJlZml4ID0gJz8nO1xuXG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgIC8vXG4gICAgICAvLyBFZGdlIGNhc2VzIHdoZXJlIHdlIGFjdHVhbGx5IHdhbnQgdG8gZW5jb2RlIHRoZSB2YWx1ZSB0byBhbiBlbXB0eVxuICAgICAgLy8gc3RyaW5nIGluc3RlYWQgb2YgdGhlIHN0cmluZ2lmaWVkIHZhbHVlLlxuICAgICAgLy9cbiAgICAgIGlmICghdmFsdWUgJiYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZiB8fCBpc05hTih2YWx1ZSkpKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGtleSA9IGVuY29kZShrZXkpO1xuICAgICAgdmFsdWUgPSBlbmNvZGUodmFsdWUpO1xuXG4gICAgICAvL1xuICAgICAgLy8gSWYgd2UgZmFpbGVkIHRvIGVuY29kZSB0aGUgc3RyaW5ncywgd2Ugc2hvdWxkIGJhaWwgb3V0IGFzIHdlIGRvbid0XG4gICAgICAvLyB3YW50IHRvIGFkZCBpbnZhbGlkIHN0cmluZ3MgdG8gdGhlIHF1ZXJ5LlxuICAgICAgLy9cbiAgICAgIGlmIChrZXkgPT09IG51bGwgfHwgdmFsdWUgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgcGFpcnMucHVzaChrZXkgKyc9JysgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWlycy5sZW5ndGggPyBwcmVmaXggKyBwYWlycy5qb2luKCcmJykgOiAnJztcbn1cblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmV4cG9ydHMuc3RyaW5naWZ5ID0gcXVlcnlzdHJpbmdpZnk7XG5leHBvcnRzLnBhcnNlID0gcXVlcnlzdHJpbmc7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjEzLjEnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIGlmIHdlJ3JlIHJlcXVpcmVkIHRvIGFkZCBhIHBvcnQgbnVtYmVyLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkZWZhdWx0LXBvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gcG9ydCBQb3J0IG51bWJlciB3ZSBuZWVkIHRvIGNoZWNrXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvdG9jb2wgUHJvdG9jb2wgd2UgbmVlZCB0byBjaGVjayBhZ2FpbnN0LlxuICogQHJldHVybnMge0Jvb2xlYW59IElzIGl0IGEgZGVmYXVsdCBwb3J0IGZvciB0aGUgZ2l2ZW4gcHJvdG9jb2xcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcXVpcmVkKHBvcnQsIHByb3RvY29sKSB7XG4gIHByb3RvY29sID0gcHJvdG9jb2wuc3BsaXQoJzonKVswXTtcbiAgcG9ydCA9ICtwb3J0O1xuXG4gIGlmICghcG9ydCkgcmV0dXJuIGZhbHNlO1xuXG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlICdodHRwJzpcbiAgICBjYXNlICd3cyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDgwO1xuXG4gICAgY2FzZSAnaHR0cHMnOlxuICAgIGNhc2UgJ3dzcyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDQ0MztcblxuICAgIGNhc2UgJ2Z0cCc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDIxO1xuXG4gICAgY2FzZSAnZ29waGVyJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gNzA7XG5cbiAgICBjYXNlICdmaWxlJzpcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcG9ydCAhPT0gMDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjYW5SZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9jYW5SZXBvcnRFcnJvclwiKTtcbnZhciB0b1N1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWwvdG9TdWJzY3JpYmVyXCIpO1xudmFyIG9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xudmFyIHBpcGVfMSA9IHJlcXVpcmUoXCIuL3V0aWwvcGlwZVwiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLl9pc1NjYWxhciA9IGZhbHNlO1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3I7XG4gICAgICAgIHZhciBzaW5rID0gdG9TdWJzY3JpYmVyXzEudG9TdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBpZiAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKG9wZXJhdG9yLmNhbGwoc2luaywgdGhpcy5zb3VyY2UpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKHRoaXMuc291cmNlIHx8IChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiAhc2luay5zeW5jRXJyb3JUaHJvd2FibGUpID9cbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc2luaykgOlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyeVN1YnNjcmliZShzaW5rKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBzaW5rLnN5bmNFcnJvclZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2luaztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc2luaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5SZXBvcnRFcnJvcl8xLmNhblJlcG9ydEVycm9yKHNpbmspKSB7XG4gICAgICAgICAgICAgICAgc2luay5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAobmV4dCwgcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByZWplY3QsIHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgICAgIHJldHVybiBzb3VyY2UgJiYgc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlW29ic2VydmFibGVfMS5vYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3BlcmF0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgb3BlcmF0aW9uc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcGVyYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVfMS5waXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAoeCkgeyByZXR1cm4gdmFsdWUgPSB4OyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcikge1xuICAgIGlmICghcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBjb25maWdfMS5jb25maWcuUHJvbWlzZSB8fCBQcm9taXNlO1xuICAgIH1cbiAgICBpZiAoIXByb21pc2VDdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gUHJvbWlzZSBpbXBsIGZvdW5kJyk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlQ3Rvcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgaG9zdFJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL2hvc3RSZXBvcnRFcnJvclwiKTtcbmV4cG9ydHMuZW1wdHkgPSB7XG4gICAgY2xvc2VkOiB0cnVlLFxuICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXNGdW5jdGlvbl8xID0gcmVxdWlyZShcIi4vdXRpbC9pc0Z1bmN0aW9uXCIpO1xudmFyIE9ic2VydmVyXzEgPSByZXF1aXJlKFwiLi9PYnNlcnZlclwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmlwdGlvblwiKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyXCIpO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIGhvc3RSZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9ob3N0UmVwb3J0RXJyb3JcIik7XG52YXIgU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3Vic2NyaWJlcihkZXN0aW5hdGlvbk9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN5bmNFcnJvclZhbHVlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3duID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBPYnNlcnZlcl8xLmVtcHR5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICghZGVzdGluYXRpb25Pck5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBPYnNlcnZlcl8xLmVtcHR5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk9yTmV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uT3JOZXh0IGluc3RhbmNlb2YgU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gZGVzdGluYXRpb25Pck5leHQuc3luY0Vycm9yVGhyb3dhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbk9yTmV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uT3JOZXh0LmFkZChfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBuZXcgU2FmZVN1YnNjcmliZXIoX3RoaXMsIGRlc3RpbmF0aW9uT3JOZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBuZXcgU2FmZVN1YnNjcmliZXIoX3RoaXMsIGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGVbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG4gICAgU3Vic2NyaWJlci5jcmVhdGUgPSBmdW5jdGlvbiAobmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBzdWJzY3JpYmVyID0gbmV3IFN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgc3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZUFuZFJlY3ljbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcGFyZW50T3JQYXJlbnRzID0gdGhpcy5fcGFyZW50T3JQYXJlbnRzO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IF9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIFN1YnNjcmliZXI7XG59KFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbikpO1xuZXhwb3J0cy5TdWJzY3JpYmVyID0gU3Vic2NyaWJlcjtcbnZhciBTYWZlU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNhZmVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNhZmVTdWJzY3JpYmVyKF9wYXJlbnRTdWJzY3JpYmVyLCBvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9wYXJlbnRTdWJzY3JpYmVyID0gX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICB2YXIgY29udGV4dCA9IF90aGlzO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24ob2JzZXJ2ZXJPck5leHQpKSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2JzZXJ2ZXJPck5leHQpIHtcbiAgICAgICAgICAgIG5leHQgPSBvYnNlcnZlck9yTmV4dC5uZXh0O1xuICAgICAgICAgICAgZXJyb3IgPSBvYnNlcnZlck9yTmV4dC5lcnJvcjtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gb2JzZXJ2ZXJPck5leHQuY29tcGxldGU7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXJPck5leHQgIT09IE9ic2VydmVyXzEuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShvYnNlcnZlck9yTmV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKGNvbnRleHQudW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZChjb250ZXh0LnVuc3Vic2NyaWJlLmJpbmQoY29udGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gX3RoaXMudW5zdWJzY3JpYmUuYmluZChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBfdGhpcy5fbmV4dCA9IG5leHQ7XG4gICAgICAgIF90aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICBfdGhpcy5fY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkICYmIHRoaXMuX25leHQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih0aGlzLl9uZXh0LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgdGhpcy5fbmV4dCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICB2YXIgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyA9IGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9jb21wbGV0ZS5jYWxsKF90aGlzLl9jb250ZXh0KTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIod3JhcHBlZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yVW5zdWIgPSBmdW5jdGlvbiAoZm4sIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl9fdHJ5T3JTZXRFcnJvciA9IGZ1bmN0aW9uIChwYXJlbnQsIGZuLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBjYWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgX3BhcmVudFN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBTYWZlU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5TYWZlU3Vic2NyaWJlciA9IFNhZmVTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi91dGlsL2lzQXJyYXlcIik7XG52YXIgaXNPYmplY3RfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNPYmplY3RcIik7XG52YXIgaXNGdW5jdGlvbl8xID0gcmVxdWlyZShcIi4vdXRpbC9pc0Z1bmN0aW9uXCIpO1xudmFyIFVuc3Vic2NyaXB0aW9uRXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvclwiKTtcbnZhciBTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbih1bnN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9jdG9yVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLCBfcGFyZW50T3JQYXJlbnRzID0gX2EuX3BhcmVudE9yUGFyZW50cywgX2N0b3JVbnN1YnNjcmliZSA9IF9hLl9jdG9yVW5zdWJzY3JpYmUsIF91bnN1YnNjcmliZSA9IF9hLl91bnN1YnNjcmliZSwgX3N1YnNjcmlwdGlvbnMgPSBfYS5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIF9wYXJlbnRPclBhcmVudHMucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRPclBhcmVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBfcGFyZW50T3JQYXJlbnRzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRPclBhcmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oX3Vuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgaWYgKF9jdG9yVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgX3Vuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGVycm9ycyA9IGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvciA/IGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlLmVycm9ycykgOiBbZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlfMS5pc0FycmF5KF9zdWJzY3JpcHRpb25zKSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICAgICAgICB2YXIgbGVuID0gX3N1YnNjcmlwdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViID0gX3N1YnNjcmlwdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdF8xLmlzT2JqZWN0KHN1YikpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZS5lcnJvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGVhcmRvd247XG4gICAgICAgIGlmICghdGVhcmRvd24pIHtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdGVhcmRvd24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHRlYXJkb3duKTtcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbiA9PT0gdGhpcyB8fCBzdWJzY3JpcHRpb24uY2xvc2VkIHx8IHR5cGVvZiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCEoc3Vic2NyaXB0aW9uIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fc3Vic2NyaXB0aW9ucyA9IFt0bXBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVjb2duaXplZCB0ZWFyZG93biAnICsgdGVhcmRvd24gKyAnIGFkZGVkIHRvIFN1YnNjcmlwdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgX3BhcmVudE9yUGFyZW50cyA9IHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzO1xuICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl9wYXJlbnRPclBhcmVudHMgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRPclBhcmVudHMgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChfcGFyZW50T3JQYXJlbnRzID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzID0gW19wYXJlbnRPclBhcmVudHMsIHRoaXNdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRPclBhcmVudHMuaW5kZXhPZih0aGlzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIF9wYXJlbnRPclBhcmVudHMucHVzaCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtzdWJzY3JpcHRpb25dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uSW5kZXggPSBzdWJzY3JpcHRpb25zLmluZGV4T2Yoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25zLnNwbGljZShzdWJzY3JpcHRpb25JbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5FTVBUWSA9IChmdW5jdGlvbiAoZW1wdHkpIHtcbiAgICAgICAgZW1wdHkuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0obmV3IFN1YnNjcmlwdGlvbigpKSk7XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn0oKSk7XG5leHBvcnRzLlN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbjtcbmZ1bmN0aW9uIGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlcnJvcnMpIHtcbiAgICByZXR1cm4gZXJyb3JzLnJlZHVjZShmdW5jdGlvbiAoZXJycywgZXJyKSB7IHJldHVybiBlcnJzLmNvbmNhdCgoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IpID8gZXJyLmVycm9ycyA6IGVycik7IH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmlwdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MgPSBmYWxzZTtcbmV4cG9ydHMuY29uZmlnID0ge1xuICAgIFByb21pc2U6IHVuZGVmaW5lZCxcbiAgICBzZXQgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdERVBSRUNBVEVEISBSeEpTIHdhcyBzZXQgdG8gdXNlIGRlcHJlY2F0ZWQgc3luY2hyb25vdXMgZXJyb3IgaGFuZGxpbmcgYmVoYXZpb3IgYnkgY29kZSBhdDogXFxuJyArIGVycm9yLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSeEpTOiBCYWNrIHRvIGEgYmV0dGVyIGVycm9yIGJlaGF2aW9yLiBUaGFuayB5b3UuIDwzJyk7XG4gICAgICAgIH1cbiAgICAgICAgX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZygpIHtcbiAgICAgICAgcmV0dXJuIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncztcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbmV4cG9ydHMuRU1QVFkgPSBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7XG5mdW5jdGlvbiBlbXB0eShzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVyID8gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSA6IGV4cG9ydHMuRU1QVFk7XG59XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5mdW5jdGlvbiBlbXB0eVNjaGVkdWxlZChzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbXB0eS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBkZWZhdWx0SWZFbXB0eShkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAoZGVmYXVsdFZhbHVlID09PSB2b2lkIDApIHsgZGVmYXVsdFZhbHVlID0gbnVsbDsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UubGlmdChuZXcgRGVmYXVsdElmRW1wdHlPcGVyYXRvcihkZWZhdWx0VmFsdWUpKTsgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdElmRW1wdHkgPSBkZWZhdWx0SWZFbXB0eTtcbnZhciBEZWZhdWx0SWZFbXB0eU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWZhdWx0SWZFbXB0eU9wZXJhdG9yKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgRGVmYXVsdElmRW1wdHlPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmRlZmF1bHRWYWx1ZSkpO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmF1bHRJZkVtcHR5T3BlcmF0b3I7XG59KCkpO1xudmFyIERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEZWZhdWx0SWZFbXB0eVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICBfdGhpcy5pc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBEZWZhdWx0SWZFbXB0eVN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgRGVmYXVsdElmRW1wdHlTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh0aGlzLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRJZkVtcHR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIGZpbHRlcihwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZmlsdGVyT3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBGaWx0ZXJPcGVyYXRvcihwcmVkaWNhdGUsIHRoaXNBcmcpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG52YXIgRmlsdGVyT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICB9XG4gICAgRmlsdGVyT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBGaWx0ZXJTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJlZGljYXRlLCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBGaWx0ZXJPcGVyYXRvcjtcbn0oKSk7XG52YXIgRmlsdGVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZpbHRlclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmlsdGVyU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gICAgICAgIF90aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmlsdGVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJlZGljYXRlLmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWx0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gbWFwKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWFwT3BlcmF0aW9uKHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb2plY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IGlzIG5vdCBhIGZ1bmN0aW9uLiBBcmUgeW91IGxvb2tpbmcgZm9yIGBtYXBUbygpYD8nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IE1hcE9wZXJhdG9yKHByb2plY3QsIHRoaXNBcmcpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5tYXAgPSBtYXA7XG52YXIgTWFwT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcE9wZXJhdG9yKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICB9XG4gICAgTWFwT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBNYXBTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCwgdGhpcy50aGlzQXJnKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0cy5NYXBPcGVyYXRvciA9IE1hcE9wZXJhdG9yO1xudmFyIE1hcFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIF90aGlzLnRoaXNBcmcgPSB0aGlzQXJnIHx8IF90aGlzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnByb2plY3QuY2FsbCh0aGlzLnRoaXNBcmcsIHZhbHVlLCB0aGlzLmNvdW50KyspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNjYW5fMSA9IHJlcXVpcmUoXCIuL3NjYW5cIik7XG52YXIgdGFrZUxhc3RfMSA9IHJlcXVpcmUoXCIuL3Rha2VMYXN0XCIpO1xudmFyIGRlZmF1bHRJZkVtcHR5XzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0SWZFbXB0eVwiKTtcbnZhciBwaXBlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9waXBlXCIpO1xuZnVuY3Rpb24gcmVkdWNlKGFjY3VtdWxhdG9yLCBzZWVkKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVkdWNlT3BlcmF0b3JGdW5jdGlvbldpdGhTZWVkKHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBpcGVfMS5waXBlKHNjYW5fMS5zY2FuKGFjY3VtdWxhdG9yLCBzZWVkKSwgdGFrZUxhc3RfMS50YWtlTGFzdCgxKSwgZGVmYXVsdElmRW1wdHlfMS5kZWZhdWx0SWZFbXB0eShzZWVkKSkoc291cmNlKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlZHVjZU9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBwaXBlXzEucGlwZShzY2FuXzEuc2NhbihmdW5jdGlvbiAoYWNjLCB2YWx1ZSwgaW5kZXgpIHsgcmV0dXJuIGFjY3VtdWxhdG9yKGFjYywgdmFsdWUsIGluZGV4ICsgMSk7IH0pLCB0YWtlTGFzdF8xLnRha2VMYXN0KDEpKShzb3VyY2UpO1xuICAgIH07XG59XG5leHBvcnRzLnJlZHVjZSA9IHJlZHVjZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZHVjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBzY2FuKGFjY3VtdWxhdG9yLCBzZWVkKSB7XG4gICAgdmFyIGhhc1NlZWQgPSBmYWxzZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIGhhc1NlZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gc2Nhbk9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgU2Nhbk9wZXJhdG9yKGFjY3VtdWxhdG9yLCBzZWVkLCBoYXNTZWVkKSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuc2NhbiA9IHNjYW47XG52YXIgU2Nhbk9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2FuT3BlcmF0b3IoYWNjdW11bGF0b3IsIHNlZWQsIGhhc1NlZWQpIHtcbiAgICAgICAgaWYgKGhhc1NlZWQgPT09IHZvaWQgMCkgeyBoYXNTZWVkID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yO1xuICAgICAgICB0aGlzLnNlZWQgPSBzZWVkO1xuICAgICAgICB0aGlzLmhhc1NlZWQgPSBoYXNTZWVkO1xuICAgIH1cbiAgICBTY2FuT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBTY2FuU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmFjY3VtdWxhdG9yLCB0aGlzLnNlZWQsIHRoaXMuaGFzU2VlZCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFNjYW5PcGVyYXRvcjtcbn0oKSk7XG52YXIgU2NhblN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTY2FuU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTY2FuU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgYWNjdW11bGF0b3IsIF9zZWVkLCBoYXNTZWVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yO1xuICAgICAgICBfdGhpcy5fc2VlZCA9IF9zZWVkO1xuICAgICAgICBfdGhpcy5oYXNTZWVkID0gaGFzU2VlZDtcbiAgICAgICAgX3RoaXMuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2FuU3Vic2NyaWJlci5wcm90b3R5cGUsIFwic2VlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1NlZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc2VlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTY2FuU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1NlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VlZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cnlOZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2NhblN1YnNjcmliZXIucHJvdG90eXBlLl90cnlOZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXgrKztcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYWNjdW11bGF0b3IodGhpcy5zZWVkLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlZWQgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIFNjYW5TdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2Nhbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG52YXIgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi91dGlsL0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yXCIpO1xudmFyIGVtcHR5XzEgPSByZXF1aXJlKFwiLi4vb2JzZXJ2YWJsZS9lbXB0eVwiKTtcbmZ1bmN0aW9uIHRha2VMYXN0KGNvdW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VMYXN0T3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHlfMS5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBUYWtlTGFzdE9wZXJhdG9yKGNvdW50KSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy50YWtlTGFzdCA9IHRha2VMYXN0O1xudmFyIFRha2VMYXN0T3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRha2VMYXN0T3BlcmF0b3IodG90YWwpIHtcbiAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICBpZiAodGhpcy50b3RhbCA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBcmd1bWVudE91dE9mUmFuZ2VFcnJvcl8xLkFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRha2VMYXN0T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBUYWtlTGFzdFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy50b3RhbCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFRha2VMYXN0T3BlcmF0b3I7XG59KCkpO1xudmFyIFRha2VMYXN0U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRha2VMYXN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUYWtlTGFzdFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHRvdGFsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICBfdGhpcy5yaW5nID0gbmV3IEFycmF5KCk7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUYWtlTGFzdFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByaW5nID0gdGhpcy5yaW5nO1xuICAgICAgICB2YXIgdG90YWwgPSB0aGlzLnRvdGFsO1xuICAgICAgICB2YXIgY291bnQgPSB0aGlzLmNvdW50Kys7XG4gICAgICAgIGlmIChyaW5nLmxlbmd0aCA8IHRvdGFsKSB7XG4gICAgICAgICAgICByaW5nLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY291bnQgJSB0b3RhbDtcbiAgICAgICAgICAgIHJpbmdbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRha2VMYXN0U3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICB2YXIgY291bnQgPSB0aGlzLmNvdW50O1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSB0aGlzLmNvdW50ID49IHRoaXMudG90YWwgPyB0aGlzLnRvdGFsIDogdGhpcy5jb3VudDtcbiAgICAgICAgICAgIHZhciByaW5nID0gdGhpcy5yaW5nO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IChjb3VudCsrKSAlIHRvdGFsO1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQocmluZ1tpZHhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFRha2VMYXN0U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRha2VMYXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUgfHwgJ0BAb2JzZXJ2YWJsZSc7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yeFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gU3ltYm9sKCdyeFN1YnNjcmliZXInKVxuICAgICAgICA6ICdAQHJ4U3Vic2NyaWJlcl8nICsgTWF0aC5yYW5kb20oKTtcbn0pKCk7XG5leHBvcnRzLiQkcnhTdWJzY3JpYmVyID0gZXhwb3J0cy5yeFN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yeFN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdhcmd1bWVudCBvdXQgb2YgcmFuZ2UnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQXJndW1lbnRPdXRPZlJhbmdlRXJyb3InO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydHMuQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgPSBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bcmd1bWVudE91dE9mUmFuZ2VFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9ycyA/XG4gICAgICAgICAgICBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG5cIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gaSArIDEgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKTsgfSkuam9pbignXFxuICAnKSA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgVW5zdWJzY3JpcHRpb25FcnJvckltcGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIHJldHVybiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnRzLlVuc3Vic2NyaXB0aW9uRXJyb3IgPSBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVuc3Vic2NyaXB0aW9uRXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBjYW5SZXBvcnRFcnJvcihvYnNlcnZlcikge1xuICAgIHdoaWxlIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgX2EgPSBvYnNlcnZlciwgY2xvc2VkXzEgPSBfYS5jbG9zZWQsIGRlc3RpbmF0aW9uID0gX2EuZGVzdGluYXRpb24sIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZDtcbiAgICAgICAgaWYgKGNsb3NlZF8xIHx8IGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uIGluc3RhbmNlb2YgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gZGVzdGluYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmNhblJlcG9ydEVycm9yID0gY2FuUmVwb3J0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYW5SZXBvcnRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGhvc3RSZXBvcnRFcnJvcihlcnIpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgdGhyb3cgZXJyOyB9LCAwKTtcbn1cbmV4cG9ydHMuaG9zdFJlcG9ydEVycm9yID0gaG9zdFJlcG9ydEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9zdFJlcG9ydEVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICAgIHJldHVybiB4O1xufVxuZXhwb3J0cy5pZGVudGl0eSA9IGlkZW50aXR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWRlbnRpdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzQXJyYXkgPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJzsgfSk7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgdHlwZW9mIHggPT09ICdvYmplY3QnO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNPYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaWRlbnRpdHlfMSA9IHJlcXVpcmUoXCIuL2lkZW50aXR5XCIpO1xuZnVuY3Rpb24gcGlwZSgpIHtcbiAgICB2YXIgZm5zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgZm5zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KGZucyk7XG59XG5leHBvcnRzLnBpcGUgPSBwaXBlO1xuZnVuY3Rpb24gcGlwZUZyb21BcnJheShmbnMpIHtcbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHlfMS5pZGVudGl0eTtcbiAgICB9XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZuc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBpcGVkKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBmbnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBmbikgeyByZXR1cm4gZm4ocHJldik7IH0sIGlucHV0KTtcbiAgICB9O1xufVxuZXhwb3J0cy5waXBlRnJvbUFycmF5ID0gcGlwZUZyb21BcnJheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpcGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL3J4U3Vic2NyaWJlclwiKTtcbnZhciBPYnNlcnZlcl8xID0gcmVxdWlyZShcIi4uL09ic2VydmVyXCIpO1xuZnVuY3Rpb24gdG9TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICBpZiAobmV4dE9yT2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyIGluc3RhbmNlb2YgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXJbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5leHRPck9ic2VydmVyICYmICFlcnJvciAmJiAhY29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcihPYnNlcnZlcl8xLmVtcHR5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKTtcbn1cbmV4cG9ydHMudG9TdWJzY3JpYmVyID0gdG9TdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9TdWJzY3JpYmVyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVybCA9IHJlcXVpcmUoJ3VybCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVyaTEsIHVyaTIsIGllTW9kZSkge1xuICAgIGlmICh1cmkxID09PSB1cmkyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciB1cmwxID0gdXJsLnBhcnNlKHVyaTEsIGZhbHNlLCB0cnVlKTtcbiAgICB2YXIgdXJsMiA9IHVybC5wYXJzZSh1cmkyLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICB2YXIgdXJsMVBvcnQgPSB1cmwxLnBvcnR8MCB8fCAodXJsMS5wcm90b2NvbCA9PT0gJ2h0dHBzJyA/IDQ0MyA6IDgwKTtcbiAgICB2YXIgdXJsMlBvcnQgPSB1cmwyLnBvcnR8MCB8fCAodXJsMi5wcm90b2NvbCA9PT0gJ2h0dHBzJyA/IDQ0MyA6IDgwKTtcblxuICAgIHZhciBtYXRjaCA9IHtcbiAgICAgICAgcHJvdG86IHVybDEucHJvdG9jb2wgPT09IHVybDIucHJvdG9jb2wsXG4gICAgICAgIGhvc3RuYW1lOiB1cmwxLmhvc3RuYW1lID09PSB1cmwyLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmwxUG9ydCA9PT0gdXJsMlBvcnRcbiAgICB9O1xuXG4gICAgcmV0dXJuICgobWF0Y2gucHJvdG8gJiYgbWF0Y2guaG9zdG5hbWUpICYmIChtYXRjaC5wb3J0IHx8IGllTW9kZSkpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXF1aXJlZCA9IHJlcXVpcmUoJ3JlcXVpcmVzLXBvcnQnKVxuICAsIHFzID0gcmVxdWlyZSgncXVlcnlzdHJpbmdpZnknKVxuICAsIHNsYXNoZXMgPSAvXltBLVphLXpdW0EtWmEtejAtOSstLl0qOlxcL1xcLy9cbiAgLCBwcm90b2NvbHJlID0gL14oW2Etel1bYS16MC05ListXSo6KT8oXFwvXFwvKT8oW1xcU1xcc10qKS9pXG4gICwgd2hpdGVzcGFjZSA9ICdbXFxcXHgwOVxcXFx4MEFcXFxceDBCXFxcXHgwQ1xcXFx4MERcXFxceDIwXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwQVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMFxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1RkVGRl0nXG4gICwgbGVmdCA9IG5ldyBSZWdFeHAoJ14nKyB3aGl0ZXNwYWNlICsnKycpO1xuXG4vKipcbiAqIFRyaW0gYSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBTdHJpbmcgdG8gdHJpbS5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdHJpbUxlZnQoc3RyKSB7XG4gIHJldHVybiAoc3RyID8gc3RyIDogJycpLnRvU3RyaW5nKCkucmVwbGFjZShsZWZ0LCAnJyk7XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBwYXJzZSBydWxlcyBmb3IgdGhlIFVSTCBwYXJzZXIsIGl0IGluZm9ybXMgdGhlIHBhcnNlclxuICogYWJvdXQ6XG4gKlxuICogMC4gVGhlIGNoYXIgaXQgTmVlZHMgdG8gcGFyc2UsIGlmIGl0J3MgYSBzdHJpbmcgaXQgc2hvdWxkIGJlIGRvbmUgdXNpbmdcbiAqICAgIGluZGV4T2YsIFJlZ0V4cCB1c2luZyBleGVjIGFuZCBOYU4gbWVhbnMgc2V0IGFzIGN1cnJlbnQgdmFsdWUuXG4gKiAxLiBUaGUgcHJvcGVydHkgd2Ugc2hvdWxkIHNldCB3aGVuIHBhcnNpbmcgdGhpcyB2YWx1ZS5cbiAqIDIuIEluZGljYXRpb24gaWYgaXQncyBiYWNrd2FyZHMgb3IgZm9yd2FyZCBwYXJzaW5nLCB3aGVuIHNldCBhcyBudW1iZXIgaXQnc1xuICogICAgdGhlIHZhbHVlIG9mIGV4dHJhIGNoYXJzIHRoYXQgc2hvdWxkIGJlIHNwbGl0IG9mZi5cbiAqIDMuIEluaGVyaXQgZnJvbSBsb2NhdGlvbiBpZiBub24gZXhpc3RpbmcgaW4gdGhlIHBhcnNlci5cbiAqIDQuIGB0b0xvd2VyQ2FzZWAgdGhlIHJlc3VsdGluZyB2YWx1ZS5cbiAqL1xudmFyIHJ1bGVzID0gW1xuICBbJyMnLCAnaGFzaCddLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgYmFjay5cbiAgWyc/JywgJ3F1ZXJ5J10sICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXG4gIGZ1bmN0aW9uIHNhbml0aXplKGFkZHJlc3MpIHsgICAgICAgICAgLy8gU2FuaXRpemUgd2hhdCBpcyBsZWZ0IG9mIHRoZSBhZGRyZXNzXG4gICAgcmV0dXJuIGFkZHJlc3MucmVwbGFjZSgnXFxcXCcsICcvJyk7XG4gIH0sXG4gIFsnLycsICdwYXRobmFtZSddLCAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBbJ0AnLCAnYXV0aCcsIDFdLCAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgZnJvbnQuXG4gIFtOYU4sICdob3N0JywgdW5kZWZpbmVkLCAxLCAxXSwgICAgICAgLy8gU2V0IGxlZnQgb3ZlciB2YWx1ZS5cbiAgWy86KFxcZCspJC8sICdwb3J0JywgdW5kZWZpbmVkLCAxXSwgICAgLy8gUmVnRXhwIHRoZSBiYWNrLlxuICBbTmFOLCAnaG9zdG5hbWUnLCB1bmRlZmluZWQsIDEsIDFdICAgIC8vIFNldCBsZWZ0IG92ZXIuXG5dO1xuXG4vKipcbiAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIG5vdCBiZSBjb3BpZWQgb3IgaW5oZXJpdGVkIGZyb20uIFRoaXMgaXMgb25seSBuZWVkZWRcbiAqIGZvciBhbGwgbm9uIGJsb2IgVVJMJ3MgYXMgYSBibG9iIFVSTCBkb2VzIG5vdCBpbmNsdWRlIGEgaGFzaCwgb25seSB0aGVcbiAqIG9yaWdpbi5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIGlnbm9yZSA9IHsgaGFzaDogMSwgcXVlcnk6IDEgfTtcblxuLyoqXG4gKiBUaGUgbG9jYXRpb24gb2JqZWN0IGRpZmZlcnMgd2hlbiB5b3VyIGNvZGUgaXMgbG9hZGVkIHRocm91Z2ggYSBub3JtYWwgcGFnZSxcbiAqIFdvcmtlciBvciB0aHJvdWdoIGEgd29ya2VyIHVzaW5nIGEgYmxvYi4gQW5kIHdpdGggdGhlIGJsb2JibGUgYmVnaW5zIHRoZVxuICogdHJvdWJsZSBhcyB0aGUgbG9jYXRpb24gb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgVVJMIG9mIHRoZSBibG9iLCBub3QgdGhlXG4gKiBsb2NhdGlvbiBvZiB0aGUgcGFnZSB3aGVyZSBvdXIgY29kZSBpcyBsb2FkZWQgaW4uIFRoZSBhY3R1YWwgb3JpZ2luIGlzXG4gKiBlbmNvZGVkIGluIHRoZSBgcGF0aG5hbWVgIHNvIHdlIGNhbiB0aGFua2Z1bGx5IGdlbmVyYXRlIGEgZ29vZCBcImRlZmF1bHRcIlxuICogbG9jYXRpb24gZnJvbSBpdCBzbyB3ZSBjYW4gZ2VuZXJhdGUgcHJvcGVyIHJlbGF0aXZlIFVSTCdzIGFnYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbG9jIE9wdGlvbmFsIGRlZmF1bHQgbG9jYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gbG9sY2F0aW9uIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9sY2F0aW9uKGxvYykge1xuICB2YXIgZ2xvYmFsVmFyO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gd2luZG93O1xuICBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gZ2xvYmFsO1xuICBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIGdsb2JhbFZhciA9IHNlbGY7XG4gIGVsc2UgZ2xvYmFsVmFyID0ge307XG5cbiAgdmFyIGxvY2F0aW9uID0gZ2xvYmFsVmFyLmxvY2F0aW9uIHx8IHt9O1xuICBsb2MgPSBsb2MgfHwgbG9jYXRpb247XG5cbiAgdmFyIGZpbmFsZGVzdGluYXRpb24gPSB7fVxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NcbiAgICAsIGtleTtcblxuICBpZiAoJ2Jsb2I6JyA9PT0gbG9jLnByb3RvY29sKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwodW5lc2NhcGUobG9jLnBhdGhuYW1lKSwge30pO1xuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwobG9jLCB7fSk7XG4gICAgZm9yIChrZXkgaW4gaWdub3JlKSBkZWxldGUgZmluYWxkZXN0aW5hdGlvbltrZXldO1xuICB9IGVsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlKSB7XG4gICAgZm9yIChrZXkgaW4gbG9jKSB7XG4gICAgICBpZiAoa2V5IGluIGlnbm9yZSkgY29udGludWU7XG4gICAgICBmaW5hbGRlc3RpbmF0aW9uW2tleV0gPSBsb2Nba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZmluYWxkZXN0aW5hdGlvbi5zbGFzaGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9IHNsYXNoZXMudGVzdChsb2MuaHJlZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbmFsZGVzdGluYXRpb247XG59XG5cbi8qKlxuICogQHR5cGVkZWYgUHJvdG9jb2xFeHRyYWN0XG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwcm90b2NvbCBQcm90b2NvbCBtYXRjaGVkIGluIHRoZSBVUkwsIGluIGxvd2VyY2FzZS5cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2xhc2hlcyBgdHJ1ZWAgaWYgcHJvdG9jb2wgaXMgZm9sbG93ZWQgYnkgXCIvL1wiLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcmVzdCBSZXN0IG9mIHRoZSBVUkwgdGhhdCBpcyBub3QgcGFydCBvZiB0aGUgcHJvdG9jb2wuXG4gKi9cblxuLyoqXG4gKiBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGZyb20gYSBVUkwgd2l0aC93aXRob3V0IGRvdWJsZSBzbGFzaCAoXCIvL1wiKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyBVUkwgd2Ugd2FudCB0byBleHRyYWN0IGZyb20uXG4gKiBAcmV0dXJuIHtQcm90b2NvbEV4dHJhY3R9IEV4dHJhY3RlZCBpbmZvcm1hdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RQcm90b2NvbChhZGRyZXNzKSB7XG4gIGFkZHJlc3MgPSB0cmltTGVmdChhZGRyZXNzKTtcbiAgdmFyIG1hdGNoID0gcHJvdG9jb2xyZS5leGVjKGFkZHJlc3MpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvdG9jb2w6IG1hdGNoWzFdID8gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSA6ICcnLFxuICAgIHNsYXNoZXM6ICEhbWF0Y2hbMl0sXG4gICAgcmVzdDogbWF0Y2hbM11cbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVsYXRpdmUgVVJMIHBhdGhuYW1lIGFnYWluc3QgYSBiYXNlIFVSTCBwYXRobmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVsYXRpdmUgUGF0aG5hbWUgb2YgdGhlIHJlbGF0aXZlIFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlIFBhdGhuYW1lIG9mIHRoZSBiYXNlIFVSTC5cbiAqIEByZXR1cm4ge1N0cmluZ30gUmVzb2x2ZWQgcGF0aG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXNvbHZlKHJlbGF0aXZlLCBiYXNlKSB7XG4gIGlmIChyZWxhdGl2ZSA9PT0gJycpIHJldHVybiBiYXNlO1xuXG4gIHZhciBwYXRoID0gKGJhc2UgfHwgJy8nKS5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5jb25jYXQocmVsYXRpdmUuc3BsaXQoJy8nKSlcbiAgICAsIGkgPSBwYXRoLmxlbmd0aFxuICAgICwgbGFzdCA9IHBhdGhbaSAtIDFdXG4gICAgLCB1bnNoaWZ0ID0gZmFsc2VcbiAgICAsIHVwID0gMDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKHBhdGhbaV0gPT09ICcuJykge1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChwYXRoW2ldID09PSAnLi4nKSB7XG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgaWYgKGkgPT09IDApIHVuc2hpZnQgPSB0cnVlO1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICh1bnNoaWZ0KSBwYXRoLnVuc2hpZnQoJycpO1xuICBpZiAobGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicpIHBhdGgucHVzaCgnJyk7XG5cbiAgcmV0dXJuIHBhdGguam9pbignLycpO1xufVxuXG4vKipcbiAqIFRoZSBhY3R1YWwgVVJMIGluc3RhbmNlLiBJbnN0ZWFkIG9mIHJldHVybmluZyBhbiBvYmplY3Qgd2UndmUgb3B0ZWQtaW4gdG9cbiAqIGNyZWF0ZSBhbiBhY3R1YWwgY29uc3RydWN0b3IgYXMgaXQncyBtdWNoIG1vcmUgbWVtb3J5IGVmZmljaWVudCBhbmRcbiAqIGZhc3RlciBhbmQgaXQgcGxlYXNlcyBteSBPQ0QuXG4gKlxuICogSXQgaXMgd29ydGggbm90aW5nIHRoYXQgd2Ugc2hvdWxkIG5vdCB1c2UgYFVSTGAgYXMgY2xhc3MgbmFtZSB0byBwcmV2ZW50XG4gKiBjbGFzaGVzIHdpdGggdGhlIGdsb2JhbCBVUkwgaW5zdGFuY2UgdGhhdCBnb3QgaW50cm9kdWNlZCBpbiBicm93c2Vycy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIHBhcnNlLlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbbG9jYXRpb25dIExvY2F0aW9uIGRlZmF1bHRzIGZvciByZWxhdGl2ZSBwYXRocy5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gW3BhcnNlcl0gUGFyc2VyIGZvciB0aGUgcXVlcnkgc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gVXJsKGFkZHJlc3MsIGxvY2F0aW9uLCBwYXJzZXIpIHtcbiAgYWRkcmVzcyA9IHRyaW1MZWZ0KGFkZHJlc3MpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBVcmwpKSB7XG4gICAgcmV0dXJuIG5ldyBVcmwoYWRkcmVzcywgbG9jYXRpb24sIHBhcnNlcik7XG4gIH1cblxuICB2YXIgcmVsYXRpdmUsIGV4dHJhY3RlZCwgcGFyc2UsIGluc3RydWN0aW9uLCBpbmRleCwga2V5XG4gICAgLCBpbnN0cnVjdGlvbnMgPSBydWxlcy5zbGljZSgpXG4gICAgLCB0eXBlID0gdHlwZW9mIGxvY2F0aW9uXG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBpID0gMDtcblxuICAvL1xuICAvLyBUaGUgZm9sbG93aW5nIGlmIHN0YXRlbWVudHMgYWxsb3dzIHRoaXMgbW9kdWxlIHR3byBoYXZlIGNvbXBhdGliaWxpdHkgd2l0aFxuICAvLyAyIGRpZmZlcmVudCBBUEk6XG4gIC8vXG4gIC8vIDEuIE5vZGUuanMncyBgdXJsLnBhcnNlYCBhcGkgd2hpY2ggYWNjZXB0cyBhIFVSTCwgYm9vbGVhbiBhcyBhcmd1bWVudHNcbiAgLy8gICAgd2hlcmUgdGhlIGJvb2xlYW4gaW5kaWNhdGVzIHRoYXQgdGhlIHF1ZXJ5IHN0cmluZyBzaG91bGQgYWxzbyBiZSBwYXJzZWQuXG4gIC8vXG4gIC8vIDIuIFRoZSBgVVJMYCBpbnRlcmZhY2Ugb2YgdGhlIGJyb3dzZXIgd2hpY2ggYWNjZXB0cyBhIFVSTCwgb2JqZWN0IGFzXG4gIC8vICAgIGFyZ3VtZW50cy4gVGhlIHN1cHBsaWVkIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdCB2YWx1ZXMgLyBmYWxsLWJhY2tcbiAgLy8gICAgZm9yIHJlbGF0aXZlIHBhdGhzLlxuICAvL1xuICBpZiAoJ29iamVjdCcgIT09IHR5cGUgJiYgJ3N0cmluZycgIT09IHR5cGUpIHtcbiAgICBwYXJzZXIgPSBsb2NhdGlvbjtcbiAgICBsb2NhdGlvbiA9IG51bGw7XG4gIH1cblxuICBpZiAocGFyc2VyICYmICdmdW5jdGlvbicgIT09IHR5cGVvZiBwYXJzZXIpIHBhcnNlciA9IHFzLnBhcnNlO1xuXG4gIGxvY2F0aW9uID0gbG9sY2F0aW9uKGxvY2F0aW9uKTtcblxuICAvL1xuICAvLyBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGJlZm9yZSBydW5uaW5nIHRoZSBpbnN0cnVjdGlvbnMuXG4gIC8vXG4gIGV4dHJhY3RlZCA9IGV4dHJhY3RQcm90b2NvbChhZGRyZXNzIHx8ICcnKTtcbiAgcmVsYXRpdmUgPSAhZXh0cmFjdGVkLnByb3RvY29sICYmICFleHRyYWN0ZWQuc2xhc2hlcztcbiAgdXJsLnNsYXNoZXMgPSBleHRyYWN0ZWQuc2xhc2hlcyB8fCByZWxhdGl2ZSAmJiBsb2NhdGlvbi5zbGFzaGVzO1xuICB1cmwucHJvdG9jb2wgPSBleHRyYWN0ZWQucHJvdG9jb2wgfHwgbG9jYXRpb24ucHJvdG9jb2wgfHwgJyc7XG4gIGFkZHJlc3MgPSBleHRyYWN0ZWQucmVzdDtcblxuICAvL1xuICAvLyBXaGVuIHRoZSBhdXRob3JpdHkgY29tcG9uZW50IGlzIGFic2VudCB0aGUgVVJMIHN0YXJ0cyB3aXRoIGEgcGF0aFxuICAvLyBjb21wb25lbnQuXG4gIC8vXG4gIGlmICghZXh0cmFjdGVkLnNsYXNoZXMpIGluc3RydWN0aW9uc1szXSA9IFsvKC4qKS8sICdwYXRobmFtZSddO1xuXG4gIGZvciAoOyBpIDwgaW5zdHJ1Y3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbnNbaV07XG5cbiAgICBpZiAodHlwZW9mIGluc3RydWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhZGRyZXNzID0gaW5zdHJ1Y3Rpb24oYWRkcmVzcyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwYXJzZSA9IGluc3RydWN0aW9uWzBdO1xuICAgIGtleSA9IGluc3RydWN0aW9uWzFdO1xuXG4gICAgaWYgKHBhcnNlICE9PSBwYXJzZSkge1xuICAgICAgdXJsW2tleV0gPSBhZGRyZXNzO1xuICAgIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBwYXJzZSkge1xuICAgICAgaWYgKH4oaW5kZXggPSBhZGRyZXNzLmluZGV4T2YocGFyc2UpKSkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbnN0cnVjdGlvblsyXSkge1xuICAgICAgICAgIHVybFtrZXldID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoaW5kZXggKyBpbnN0cnVjdGlvblsyXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXJsW2tleV0gPSBhZGRyZXNzLnNsaWNlKGluZGV4KTtcbiAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChpbmRleCA9IHBhcnNlLmV4ZWMoYWRkcmVzcykpKSB7XG4gICAgICB1cmxba2V5XSA9IGluZGV4WzFdO1xuICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXguaW5kZXgpO1xuICAgIH1cblxuICAgIHVybFtrZXldID0gdXJsW2tleV0gfHwgKFxuICAgICAgcmVsYXRpdmUgJiYgaW5zdHJ1Y3Rpb25bM10gPyBsb2NhdGlvbltrZXldIHx8ICcnIDogJydcbiAgICApO1xuXG4gICAgLy9cbiAgICAvLyBIb3N0bmFtZSwgaG9zdCBhbmQgcHJvdG9jb2wgc2hvdWxkIGJlIGxvd2VyY2FzZWQgc28gdGhleSBjYW4gYmUgdXNlZCB0b1xuICAgIC8vIGNyZWF0ZSBhIHByb3BlciBgb3JpZ2luYC5cbiAgICAvL1xuICAgIGlmIChpbnN0cnVjdGlvbls0XSkgdXJsW2tleV0gPSB1cmxba2V5XS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgLy9cbiAgLy8gQWxzbyBwYXJzZSB0aGUgc3VwcGxpZWQgcXVlcnkgc3RyaW5nIGluIHRvIGFuIG9iamVjdC4gSWYgd2UncmUgc3VwcGxpZWRcbiAgLy8gd2l0aCBhIGN1c3RvbSBwYXJzZXIgYXMgZnVuY3Rpb24gdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBidWlsZC1pblxuICAvLyBwYXJzZXIuXG4gIC8vXG4gIGlmIChwYXJzZXIpIHVybC5xdWVyeSA9IHBhcnNlcih1cmwucXVlcnkpO1xuXG4gIC8vXG4gIC8vIElmIHRoZSBVUkwgaXMgcmVsYXRpdmUsIHJlc29sdmUgdGhlIHBhdGhuYW1lIGFnYWluc3QgdGhlIGJhc2UgVVJMLlxuICAvL1xuICBpZiAoXG4gICAgICByZWxhdGl2ZVxuICAgICYmIGxvY2F0aW9uLnNsYXNoZXNcbiAgICAmJiB1cmwucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLydcbiAgICAmJiAodXJsLnBhdGhuYW1lICE9PSAnJyB8fCBsb2NhdGlvbi5wYXRobmFtZSAhPT0gJycpXG4gICkge1xuICAgIHVybC5wYXRobmFtZSA9IHJlc29sdmUodXJsLnBhdGhuYW1lLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxuICAvL1xuICAvLyBXZSBzaG91bGQgbm90IGFkZCBwb3J0IG51bWJlcnMgaWYgdGhleSBhcmUgYWxyZWFkeSB0aGUgZGVmYXVsdCBwb3J0IG51bWJlclxuICAvLyBmb3IgYSBnaXZlbiBwcm90b2NvbC4gQXMgdGhlIGhvc3QgYWxzbyBjb250YWlucyB0aGUgcG9ydCBudW1iZXIgd2UncmUgZ29pbmdcbiAgLy8gb3ZlcnJpZGUgaXQgd2l0aCB0aGUgaG9zdG5hbWUgd2hpY2ggY29udGFpbnMgbm8gcG9ydCBudW1iZXIuXG4gIC8vXG4gIGlmICghcmVxdWlyZWQodXJsLnBvcnQsIHVybC5wcm90b2NvbCkpIHtcbiAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZTtcbiAgICB1cmwucG9ydCA9ICcnO1xuICB9XG5cbiAgLy9cbiAgLy8gUGFyc2UgZG93biB0aGUgYGF1dGhgIGZvciB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlxuICAvL1xuICB1cmwudXNlcm5hbWUgPSB1cmwucGFzc3dvcmQgPSAnJztcbiAgaWYgKHVybC5hdXRoKSB7XG4gICAgaW5zdHJ1Y3Rpb24gPSB1cmwuYXV0aC5zcGxpdCgnOicpO1xuICAgIHVybC51c2VybmFtZSA9IGluc3RydWN0aW9uWzBdIHx8ICcnO1xuICAgIHVybC5wYXNzd29yZCA9IGluc3RydWN0aW9uWzFdIHx8ICcnO1xuICB9XG5cbiAgdXJsLm9yaWdpbiA9IHVybC5wcm90b2NvbCAmJiB1cmwuaG9zdCAmJiB1cmwucHJvdG9jb2wgIT09ICdmaWxlOidcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICAvL1xuICAvLyBUaGUgaHJlZiBpcyBqdXN0IHRoZSBjb21waWxlZCByZXN1bHQuXG4gIC8vXG4gIHVybC5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICogVGhpcyBpcyBjb252ZW5pZW5jZSBtZXRob2QgZm9yIGNoYW5naW5nIHByb3BlcnRpZXMgaW4gdGhlIFVSTCBpbnN0YW5jZSB0b1xuICogaW5zdXJlIHRoYXQgdGhleSBhbGwgcHJvcGFnYXRlIGNvcnJlY3RseS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFydCAgICAgICAgICBQcm9wZXJ0eSB3ZSBuZWVkIHRvIGFkanVzdC5cbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlICAgICAgICAgIFRoZSBuZXdseSBhc3NpZ25lZCB2YWx1ZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gZm4gIFdoZW4gc2V0dGluZyB0aGUgcXVlcnksIGl0IHdpbGwgYmUgdGhlIGZ1bmN0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIHRvIHBhcnNlIHRoZSBxdWVyeS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gc2V0dGluZyB0aGUgcHJvdG9jb2wsIGRvdWJsZSBzbGFzaCB3aWxsIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkIGZyb20gdGhlIGZpbmFsIHVybCBpZiBpdCBpcyB0cnVlLlxuICogQHJldHVybnMge1VSTH0gVVJMIGluc3RhbmNlIGZvciBjaGFpbmluZy5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gc2V0KHBhcnQsIHZhbHVlLCBmbikge1xuICB2YXIgdXJsID0gdGhpcztcblxuICBzd2l0Y2ggKHBhcnQpIHtcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAoZm4gfHwgcXMucGFyc2UpKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvcnQnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICghcmVxdWlyZWQodmFsdWUsIHVybC5wcm90b2NvbCkpIHtcbiAgICAgICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWU7XG4gICAgICAgIHVybFtwYXJ0XSA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZSArJzonKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdob3N0bmFtZSc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKHVybC5wb3J0KSB2YWx1ZSArPSAnOicrIHVybC5wb3J0O1xuICAgICAgdXJsLmhvc3QgPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaG9zdCc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKC86XFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgdXJsLnBvcnQgPSB2YWx1ZS5wb3AoKTtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWUuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWU7XG4gICAgICAgIHVybC5wb3J0ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncHJvdG9jb2wnOlxuICAgICAgdXJsLnByb3RvY29sID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHVybC5zbGFzaGVzID0gIWZuO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXRobmFtZSc6XG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBwYXJ0ID09PSAncGF0aG5hbWUnID8gJy8nIDogJyMnO1xuICAgICAgICB1cmxbcGFydF0gPSB2YWx1ZS5jaGFyQXQoMCkgIT09IGNoYXIgPyBjaGFyICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGlucyA9IHJ1bGVzW2ldO1xuXG4gICAgaWYgKGluc1s0XSkgdXJsW2luc1sxXV0gPSB1cmxbaW5zWzFdXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdXJsLm9yaWdpbiA9IHVybC5wcm90b2NvbCAmJiB1cmwuaG9zdCAmJiB1cmwucHJvdG9jb2wgIT09ICdmaWxlOidcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBwcm9wZXJ0aWVzIGJhY2sgaW4gdG8gYSB2YWxpZCBhbmQgZnVsbCBVUkwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZ2lmeSBPcHRpb25hbCBxdWVyeSBzdHJpbmdpZnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBDb21waWxlZCB2ZXJzaW9uIG9mIHRoZSBVUkwuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHN0cmluZ2lmeSkge1xuICBpZiAoIXN0cmluZ2lmeSB8fCAnZnVuY3Rpb24nICE9PSB0eXBlb2Ygc3RyaW5naWZ5KSBzdHJpbmdpZnkgPSBxcy5zdHJpbmdpZnk7XG5cbiAgdmFyIHF1ZXJ5XG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBwcm90b2NvbCA9IHVybC5wcm90b2NvbDtcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuY2hhckF0KHByb3RvY29sLmxlbmd0aCAtIDEpICE9PSAnOicpIHByb3RvY29sICs9ICc6JztcblxuICB2YXIgcmVzdWx0ID0gcHJvdG9jb2wgKyAodXJsLnNsYXNoZXMgPyAnLy8nIDogJycpO1xuXG4gIGlmICh1cmwudXNlcm5hbWUpIHtcbiAgICByZXN1bHQgKz0gdXJsLnVzZXJuYW1lO1xuICAgIGlmICh1cmwucGFzc3dvcmQpIHJlc3VsdCArPSAnOicrIHVybC5wYXNzd29yZDtcbiAgICByZXN1bHQgKz0gJ0AnO1xuICB9XG5cbiAgcmVzdWx0ICs9IHVybC5ob3N0ICsgdXJsLnBhdGhuYW1lO1xuXG4gIHF1ZXJ5ID0gJ29iamVjdCcgPT09IHR5cGVvZiB1cmwucXVlcnkgPyBzdHJpbmdpZnkodXJsLnF1ZXJ5KSA6IHVybC5xdWVyeTtcbiAgaWYgKHF1ZXJ5KSByZXN1bHQgKz0gJz8nICE9PSBxdWVyeS5jaGFyQXQoMCkgPyAnPycrIHF1ZXJ5IDogcXVlcnk7XG5cbiAgaWYgKHVybC5oYXNoKSByZXN1bHQgKz0gdXJsLmhhc2g7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuVXJsLnByb3RvdHlwZSA9IHsgc2V0OiBzZXQsIHRvU3RyaW5nOiB0b1N0cmluZyB9O1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBVUkwgcGFyc2VyIGFuZCBzb21lIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGJlIHVzZWZ1bCBmb3Jcbi8vIG90aGVycyBvciB0ZXN0aW5nLlxuLy9cblVybC5leHRyYWN0UHJvdG9jb2wgPSBleHRyYWN0UHJvdG9jb2w7XG5VcmwubG9jYXRpb24gPSBsb2xjYXRpb247XG5VcmwudHJpbUxlZnQgPSB0cmltTGVmdDtcblVybC5xcyA9IHFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVybDtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLCBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIiB9ID0gcHJvcHM7XG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKTtcbn07XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIGNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiXVswXXsgdGl0bGUgfWA7XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9