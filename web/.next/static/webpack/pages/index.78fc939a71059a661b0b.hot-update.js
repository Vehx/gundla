webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");



var _this = undefined,
    _jsxFileName = "/mnt/c/Users/Veh/Documents/GitHub/gundla/web/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Index = function Index(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? "Missing title" : _props$title,
      _props$name = props.name,
      name = _props$name === void 0 ? "Missing name" : _props$name;
  return __jsx("article", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, title), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "By ", name));
};

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var _context$query$slug, slug;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // It's important to default the slug so that it doesn't return "undefined"
            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? "" : _context$query$slug;
            _context.next = 3;
            return _client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch("\n    *[_type == \"post\" && slug.current == $slug][0]{title, \"name\": author->name}\n  ", {
              slug: slug
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZXh4YXJzL2V2ZW50c291cmNlLXBvbHlmaWxsL3NyYy9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9hc3NldHMvYXNzZXRzQ2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2F1dGgvYXV0aENsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvZGF0YS9kYXRhTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9kYXRhL2VuY29kZVF1ZXJ5U3RyaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2RhdGEvbGlzdGVuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2RhdGEvcGF0Y2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvZGF0YS90cmFuc2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9kYXRhc2V0cy9kYXRhc2V0c0NsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9odHRwL2Jyb3dzZXJNaWRkbGV3YXJlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2h0dHAvZXJyb3JzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2h0dHAvcXVlcnlTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvaHR0cC9yZXF1ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2h0dHAvcmVxdWVzdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvcHJvamVjdHMvcHJvamVjdHNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvc2FuaXR5Q2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3VzZXJzL3VzZXJzQ2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3V0aWwvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvdXRpbC9nZXRTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvdXRpbC9vbmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3V0aWwvcGljay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi92YWxpZGF0b3JzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ldmVudHNvdXJjZS9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9nZW5lcmF0ZS1oZWxwLXVybC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvb2JzZXJ2YWJsZS9saWIvU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L29ic2VydmFibGUvbWluaW1hbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvZmlsdGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9tYXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RlZXAtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvbWlkZGxld2FyZS9kZWZhdWx0T3B0aW9uc1Byb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvbWlkZGxld2FyZS9kZWZhdWx0T3B0aW9uc1ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvbWlkZGxld2FyZS9qc29uUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvbWlkZGxld2FyZS9qc29uUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvbWlkZGxld2FyZS9wcm9ncmVzcy9icm93c2VyLXByb2dyZXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9taWRkbGV3YXJlL3Byb2dyZXNzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9yZXF1ZXN0L2Jyb3dzZXItcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvcmVxdWVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvdXRpbC9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL3V0aWwvbWlkZGxld2FyZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pcy1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pc29iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21ha2UtZXJyb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uYW5vLXB1YnN1Yi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25hdGl2ZS11cmwvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmdpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZXF1aXJlcy1wb3J0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9kZWZhdWx0SWZFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL21hcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3NjYW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy90YWtlTGFzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc3ltYm9sL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9yeFN1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9jYW5SZXBvcnRFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9ob3N0UmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzT2JqZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3BpcGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvdG9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc2FtZS1vcmlnaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91cmwtcGFyc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJJbmRleCIsInByb3BzIiwidGl0bGUiLCJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Iiwic2x1ZyIsImNsaWVudCIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZUEsb0hBQVksQ0FBQztBQUN4QkMsV0FBUyxFQUFFLFVBRGE7QUFDRDtBQUN2QkMsU0FBTyxFQUFFLFlBRmU7QUFFRDtBQUN2QkMsUUFBTSxFQUFFLElBSGdCLENBR1Y7O0FBSFUsQ0FBRCxDQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsTUFBTSxJQUEwQztBQUNoRDtBQUNBLElBQUksaUNBQU8sRUFBRSxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQ3ZCLEdBQUcsTUFBTSxzQkFXTjtBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHFDQUFxQyxpQ0FBaUM7QUFDdEU7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsYUFBYTtBQUNuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2xOYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0Es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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkM7Ozs7Ozs7Ozs7OztBQ3pCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLGVBQWUsbUJBQU8sQ0FBQyxrREFBVTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRWE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDcEJBLFdBQVcsbUJBQU8sQ0FBQyw0REFBYSw2RUFBNkUsY0FBYyw2QkFBNkIsc0JBQXNCLDRGQUE0Riw2S0FBNkssNkJBQTZCLGlMQUFpTCx5R0FBeUcsUUFBUSxzREFBc0QsdUdBQXVHLGdCQUFnQixnQ0FBZ0MsNEJBQTRCLGdCQUFnQiw4S0FBOEssaUJBQWlCLGdHQUFnRyx3RkFBd0Ysa09BQWtPLGNBQWMsMkZBQTJGLDBFQUEwRSxJQUFJLDZEQUE2RCxJQUFJLGFBQWEsa0JBQWtCLHdGQUF3Riw0QkFBNEIsNkZBQTZGLDREQUE0RCx3S0FBd0ssMkZBQTJGLElBQUksYUFBYSxTQUFTLHlFQUF5RSxJQUFJLGVBQWUsU0FBUyxnQ0FBZ0MscU5BQXFOLG1CQUFtQixvS0FBb0ssdUNBQXVDLG9EQUFvRCx5QkFBeUIsRUFBRSxvQkFBb0IsSUFBSSx1REFBdUQscUJBQXFCLHVFQUF1RSxXQUFXLFNBQVMsVUFBVSxFQUFFLHFiQUFxYixvREFBb0QsMENBQTBDLGlDQUFpQyxJQUFJLHVGQUF1RixpQkFBaUI7QUFDMzNIOzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7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QTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdlUCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OGZjOTM5YTcxMDU5YTY2MWIwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiQHNhbml0eS9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgICBwcm9qZWN0SWQ6IFwiYWFyNW0xNW9cIiwgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cbiAgICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIiwgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICAgIHVzZUNkbjogdHJ1ZSwgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxufSk7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCIvKlxuICogRXZlbnRTb3VyY2UgcG9seWZpbGxcbiAqIE9yaWdpbmFsbHkgcHVibGlzaGVkIGJ5IHNjIEFtdlRlayBzcmwgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbXZ0ZWsvRXZlbnRTb3VyY2UpIC0gZGV2ZWxAYW12dGVrLmNvbVxuICogRm9ya2VkIGJ5IEVzcGVuIEhvdmxhbmRzZGFsIHRvIGZpeCBhIGZldyBpc3N1ZXMgKyBwdWJsaXNoIGxhdGVzdCB2ZXJzaW9uXG4gKi9cblxuOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAvKiBnbG9iYWwgZGVmaW5lICovXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICBpZiAoZ2xvYmFsLkV2ZW50U291cmNlICYmICFnbG9iYWwuX2V2ZW50U291cmNlSW1wb3J0UHJlZml4KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgZXZzSW1wb3J0TmFtZSA9IChyb290Ll9ldmVudFNvdXJjZUltcG9ydFByZWZpeCB8fCAnJykgKyAnRXZlbnRTb3VyY2UnXG4gICAgcm9vdFtldnNJbXBvcnROYW1lXSA9IGZhY3RvcnkoKVxuICB9XG59KSh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzIDogc2VsZiwgZnVuY3Rpb24gKCkge1xuICB2YXIgRXZlbnRTb3VyY2UgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKCF1cmwgfHwgdHlwZW9mIHVybCAhPSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpXG4gICAgfVxuXG4gICAgdGhpcy5VUkwgPSB1cmxcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucylcbiAgICB2YXIgZXZzID0gdGhpc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZXZzLnBvbGwoKVxuICAgIH0sIDApXG4gIH1cblxuICBFdmVudFNvdXJjZS5wcm90b3R5cGUgPSB7XG4gICAgQ09OTkVDVElORzogMCxcblxuICAgIE9QRU46IDEsXG5cbiAgICBDTE9TRUQ6IDIsXG5cbiAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgbG9nZ2luZ0VuYWJsZWQ6IGZhbHNlLFxuXG4gICAgICBsb2dnaW5nUHJlZml4OiAnZXZlbnRzb3VyY2UnLFxuXG4gICAgICBpbnRlcnZhbDogNTAwLCAvLyBtaWxsaXNlY29uZHNcblxuICAgICAgYnVmZmVyU2l6ZUxpbWl0OiAyNTYgKiAxMDI0LCAvLyBieXRlc1xuXG4gICAgICBzaWxlbnRUaW1lb3V0OiAzMDAwMDAsIC8vIG1pbGxpc2Vjb25kc1xuXG4gICAgICBnZXRBcmdzOiB7XG4gICAgICAgIGV2c19idWZmZXJfc2l6ZV9saW1pdDogMjU2ICogMTAyNCxcbiAgICAgIH0sXG5cbiAgICAgIHhockhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAndGV4dC9ldmVudC1zdHJlYW0nLFxuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRPcHRpb25zXG4gICAgICB2YXIgb3B0aW9uXG5cbiAgICAgIC8vIHNldCBhbGwgZGVmYXVsdCBvcHRpb25zLi4uXG4gICAgICBmb3IgKG9wdGlvbiBpbiBkZWZhdWx0cykge1xuICAgICAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgICAgIHRoaXNbb3B0aW9uXSA9IGRlZmF1bHRzW29wdGlvbl1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBvdmVycmlkZSB3aXRoIHdoYXQgaXMgaW4gb3B0aW9uc1xuICAgICAgZm9yIChvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9uIGluIGRlZmF1bHRzICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgICAgIHRoaXNbb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGdldEFyZ3Mgb3B0aW9uIGlzIGVuYWJsZWRcbiAgICAgIC8vIGVuc3VyZSBldnNfYnVmZmVyX3NpemVfbGltaXQgY29ycmVzcG9uZHMgdG8gYnVmZmVyU2l6ZUxpbWl0XG4gICAgICBpZiAodGhpcy5nZXRBcmdzICYmIHRoaXMuYnVmZmVyU2l6ZUxpbWl0KSB7XG4gICAgICAgIHRoaXMuZ2V0QXJncy5ldnNfYnVmZmVyX3NpemVfbGltaXQgPSB0aGlzLmJ1ZmZlclNpemVMaW1pdFxuICAgICAgfVxuXG4gICAgICAvLyBpZiBjb25zb2xlIGlzIG5vdCBhdmFpbGFibGUsIGZvcmNlIGxvZ2dpbmdFbmFibGVkIHRvIGZhbHNlXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgY29uc29sZS5sb2cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubG9nZ2luZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2c6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sb2dnaW5nRW5hYmxlZCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZygnWycgKyB0aGlzLmxvZ2dpbmdQcmVmaXggKyAnXTonICsgbWVzc2FnZSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcG9sbDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSB0aGlzLkNMT1NFRCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhbnVwKClcbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdGhpcy5DT05ORUNUSU5HXG4gICAgICAgIHRoaXMuY3Vyc29yID0gMFxuICAgICAgICB0aGlzLmNhY2hlID0gJydcbiAgICAgICAgdGhpcy5feGhyID0gbmV3IHRoaXMuWEhSKHRoaXMpXG4gICAgICAgIHRoaXMucmVzZXROb0FjdGl2aXR5VGltZXIoKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGluIGFuIGF0dGVtcHQgdG8gc2lsZW5jZSB0aGUgZXJyb3JzXG4gICAgICAgIHRoaXMubG9nKCdUaGVyZSB3ZXJlIGVycm9ycyBpbnNpZGUgdGhlIHBvb2wgdHJ5LWNhdGNoJylcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdlcnJvcicsIHt0eXBlOiAnZXJyb3InLCBkYXRhOiBlcnIubWVzc2FnZX0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIHBvbGxBZ2FpbjogZnVuY3Rpb24gKGludGVydmFsKSB7XG4gICAgICAvLyBzY2hlZHVsZSBwb2xsIHRvIGJlIGNhbGxlZCBhZnRlciBpbnRlcnZhbCBtaWxsaXNlY29uZHNcbiAgICAgIHZhciBldnMgPSB0aGlzXG4gICAgICBldnMucmVhZHlTdGF0ZSA9IGV2cy5DT05ORUNUSU5HXG4gICAgICBldnMuZGlzcGF0Y2hFdmVudCgnZXJyb3InLCB7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIGRhdGE6ICdSZWNvbm5lY3RpbmcgJyxcbiAgICAgIH0pXG4gICAgICB0aGlzLl9wb2xsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZzLnBvbGwoKVxuICAgICAgfSwgaW50ZXJ2YWwgfHwgMClcbiAgICB9LFxuXG4gICAgY2xlYW51cDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5sb2coJ2V2cyBjbGVhbmluZyB1cCcpXG5cbiAgICAgIGlmICh0aGlzLl9wb2xsVGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9wb2xsVGltZXIpXG4gICAgICAgIHRoaXMuX3BvbGxUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX25vQWN0aXZpdHlUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX25vQWN0aXZpdHlUaW1lcilcbiAgICAgICAgdGhpcy5fbm9BY3Rpdml0eVRpbWVyID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5feGhyKSB7XG4gICAgICAgIHRoaXMuX3hoci5hYm9ydCgpXG4gICAgICAgIHRoaXMuX3hociA9IG51bGxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzZXROb0FjdGl2aXR5VGltZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnNpbGVudFRpbWVvdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX25vQWN0aXZpdHlUaW1lcikge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fbm9BY3Rpdml0eVRpbWVyKVxuICAgICAgICB9XG4gICAgICAgIHZhciBldnMgPSB0aGlzXG4gICAgICAgIHRoaXMuX25vQWN0aXZpdHlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGV2cy5sb2coJ1RpbWVvdXQhIHNpbGVudFRJbWVvdXQ6JyArIGV2cy5zaWxlbnRUaW1lb3V0KVxuICAgICAgICAgIGV2cy5wb2xsQWdhaW4oKVxuICAgICAgICB9LCB0aGlzLnNpbGVudFRpbWVvdXQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0aGlzLkNMT1NFRFxuICAgICAgdGhpcy5sb2coJ0Nsb3NpbmcgY29ubmVjdGlvbi4gcmVhZHlTdGF0ZTogJyArIHRoaXMucmVhZHlTdGF0ZSlcbiAgICAgIHRoaXMuY2xlYW51cCgpXG4gICAgfSxcblxuICAgIF9vbnhocmRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5feGhyXG5cbiAgICAgIGlmIChyZXF1ZXN0LmlzUmVhZHkoKSAmJiAhcmVxdWVzdC5oYXNFcnJvcigpKSB7XG4gICAgICAgIC8vIHJlc2V0IHRoZSB0aW1lciwgYXMgd2UgaGF2ZSBhY3Rpdml0eVxuICAgICAgICB0aGlzLnJlc2V0Tm9BY3Rpdml0eVRpbWVyKClcblxuICAgICAgICAvLyBtb3ZlIHRoaXMgRXZlbnRTb3VyY2UgdG8gT1BFTiBzdGF0ZS4uLlxuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IHRoaXMuQ09OTkVDVElORykge1xuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHRoaXMuT1BFTlxuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb3BlbicsIHt0eXBlOiAnb3Blbid9KVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJ1ZmZlciA9IHJlcXVlc3QuZ2V0QnVmZmVyKClcblxuICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCA+IHRoaXMuYnVmZmVyU2l6ZUxpbWl0KSB7XG4gICAgICAgICAgdGhpcy5sb2coJ2J1ZmZlci5sZW5ndGggPiB0aGlzLmJ1ZmZlclNpemVMaW1pdCcpXG4gICAgICAgICAgdGhpcy5wb2xsQWdhaW4oKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3Vyc29yID09IDAgJiYgYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBza2lwIGJ5dGUgb3JkZXIgbWFyayBcXHVGRUZGIGNoYXJhY3RlciBpZiBpdCBzdGFydHMgdGhlIHN0cmVhbVxuICAgICAgICAgIGlmIChidWZmZXIuc3Vic3RyaW5nKDAsIDEpID09ICdcXHVGRUZGJykge1xuICAgICAgICAgICAgdGhpcy5jdXJzb3IgPSAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhc3RNZXNzYWdlSW5kZXggPSB0aGlzLmxhc3RNZXNzYWdlSW5kZXgoYnVmZmVyKVxuICAgICAgICBpZiAobGFzdE1lc3NhZ2VJbmRleFswXSA+PSB0aGlzLmN1cnNvcikge1xuICAgICAgICAgIHZhciBuZXdjdXJzb3IgPSBsYXN0TWVzc2FnZUluZGV4WzFdXG4gICAgICAgICAgdmFyIHRvcGFyc2UgPSBidWZmZXIuc3Vic3RyaW5nKHRoaXMuY3Vyc29yLCBuZXdjdXJzb3IpXG4gICAgICAgICAgdGhpcy5wYXJzZVN0cmVhbSh0b3BhcnNlKVxuICAgICAgICAgIHRoaXMuY3Vyc29yID0gbmV3Y3Vyc29yXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiByZXF1ZXN0IGlzIGZpbmlzaGVkLCByZW9wZW4gdGhlIGNvbm5lY3Rpb25cbiAgICAgICAgaWYgKHJlcXVlc3QuaXNEb25lKCkpIHtcbiAgICAgICAgICB0aGlzLmxvZygncmVxdWVzdC5pc0RvbmUoKS4gcmVvcGVuaW5nIHRoZSBjb25uZWN0aW9uJylcbiAgICAgICAgICB0aGlzLnBvbGxBZ2Fpbih0aGlzLmludGVydmFsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gdGhpcy5DTE9TRUQpIHtcbiAgICAgICAgdGhpcy5sb2coJ3RoaXMucmVhZHlTdGF0ZSAhPT0gdGhpcy5DTE9TRUQnKVxuICAgICAgICB0aGlzLnBvbGxBZ2Fpbih0aGlzLmludGVydmFsKVxuXG4gICAgICAgIC8vTVY6IFVuc3VyZSB3aHkgYW4gZXJyb3Igd2FzIHByZXZpb3VzbHkgZGlzcGF0Y2hlZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwYXJzZVN0cmVhbTogZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAvLyBub3JtYWxpemUgbGluZSBzZXBhcmF0b3JzIChcXHJcXG4sXFxyLFxcbikgdG8gXFxuXG4gICAgICAvLyByZW1vdmUgd2hpdGUgc3BhY2VzIHRoYXQgbWF5IHByZWNlZGUgXFxuXG4gICAgICBjaHVuayA9IHRoaXMuY2FjaGUgKyB0aGlzLm5vcm1hbGl6ZVRvTEYoY2h1bmspXG5cbiAgICAgIHZhciBldmVudHMgPSBjaHVuay5zcGxpdCgnXFxuXFxuJylcblxuICAgICAgdmFyIGksIGosIGV2ZW50VHlwZSwgZGF0YXMsIGxpbmUsIHJldHJ5XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGV2ZW50VHlwZSA9ICdtZXNzYWdlJ1xuICAgICAgICBkYXRhcyA9IFtdXG4gICAgICAgIHZhciBwYXJ0cyA9IGV2ZW50c1tpXS5zcGxpdCgnXFxuJylcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsaW5lID0gdGhpcy50cmltV2hpdGVTcGFjZShwYXJ0c1tqXSlcblxuICAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJ2V2ZW50JykgPT0gMCkge1xuICAgICAgICAgICAgZXZlbnRUeXBlID0gbGluZS5yZXBsYWNlKC9ldmVudDo/XFxzKi8sICcnKVxuICAgICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCdyZXRyeScpID09IDApIHtcbiAgICAgICAgICAgIHJldHJ5ID0gcGFyc2VJbnQobGluZS5yZXBsYWNlKC9yZXRyeTo/XFxzKi8sICcnKSwgMTApXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHJldHJ5KSkge1xuICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gcmV0cnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignZGF0YScpID09IDApIHtcbiAgICAgICAgICAgIGRhdGFzLnB1c2gobGluZS5yZXBsYWNlKC9kYXRhOj9cXHMqLywgJycpKVxuICAgICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCdpZDonKSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RFdmVudElkID0gbGluZS5yZXBsYWNlKC9pZDo/XFxzKi8sICcnKVxuICAgICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCdpZCcpID09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMgcmVzZXRzIHRoZSBpZFxuXG4gICAgICAgICAgICB0aGlzLmxhc3RFdmVudElkID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhcy5sZW5ndGggJiYgdGhpcy5yZWFkeVN0YXRlICE9IHRoaXMuQ0xPU0VEKSB7XG4gICAgICAgICAgLy8gZGlzcGF0Y2ggYSBuZXcgZXZlbnRcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICAgICAgZGF0YXMuam9pbignXFxuJyksXG4gICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmxvY2F0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgdGhpcy5sYXN0RXZlbnRJZFxuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnRUeXBlLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhY2hlID0gZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVxuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbiAodHlwZSwgZXZlbnQpIHtcbiAgICAgIHZhciBoYW5kbGVycyA9IHRoaXNbJ18nICsgdHlwZSArICdIYW5kbGVycyddXG5cbiAgICAgIGlmIChoYW5kbGVycykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaGFuZGxlcnNbaV0uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpc1snb24nICsgdHlwZV0pIHtcbiAgICAgICAgdGhpc1snb24nICsgdHlwZV0uY2FsbCh0aGlzLCBldmVudClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpc1snXycgKyB0eXBlICsgJ0hhbmRsZXJzJ10pIHtcbiAgICAgICAgdGhpc1snXycgKyB0eXBlICsgJ0hhbmRsZXJzJ10gPSBbXVxuICAgICAgfVxuXG4gICAgICB0aGlzWydfJyArIHR5cGUgKyAnSGFuZGxlcnMnXS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBoYW5kbGVyKSB7XG4gICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzWydfJyArIHR5cGUgKyAnSGFuZGxlcnMnXVxuICAgICAgaWYgKCFoYW5kbGVycykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBpZiAoaGFuZGxlcnNbaV0gPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9wb2xsVGltZXI6IG51bGwsXG5cbiAgICBfbm9hY3Rpdml0eVRpbWVyOiBudWxsLFxuXG4gICAgX3hocjogbnVsbCxcblxuICAgIGxhc3RFdmVudElkOiBudWxsLFxuXG4gICAgY2FjaGU6ICcnLFxuXG4gICAgY3Vyc29yOiAwLFxuXG4gICAgb25lcnJvcjogbnVsbCxcblxuICAgIG9ubWVzc2FnZTogbnVsbCxcblxuICAgIG9ub3BlbjogbnVsbCxcblxuICAgIHJlYWR5U3RhdGU6IDAsXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gaGVscGVycyBmdW5jdGlvbnNcbiAgICAvLyB0aG9zZSBhcmUgYXR0YWNoZWQgdG8gcHJvdG90eXBlIHRvIGVhc2UgcmV1c2UgYW5kIHRlc3RpbmcuLi5cblxuICAgIHVybFdpdGhQYXJhbXM6IGZ1bmN0aW9uIChiYXNlVVJMLCBwYXJhbXMpIHtcbiAgICAgIHZhciBlbmNvZGVkQXJncyA9IFtdXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgdmFyIGtleSwgdXJsYXJnXG4gICAgICAgIHZhciB1cmxpemUgPSBlbmNvZGVVUklDb21wb25lbnRcblxuICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHVybGFyZyA9IHVybGl6ZShrZXkpICsgJz0nICsgdXJsaXplKHBhcmFtc1trZXldKVxuICAgICAgICAgICAgZW5jb2RlZEFyZ3MucHVzaCh1cmxhcmcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmNvZGVkQXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChiYXNlVVJMLmluZGV4T2YoJz8nKSA9PSAtMSkgcmV0dXJuIGJhc2VVUkwgKyAnPycgKyBlbmNvZGVkQXJncy5qb2luKCcmJylcbiAgICAgICAgcmV0dXJuIGJhc2VVUkwgKyAnJicgKyBlbmNvZGVkQXJncy5qb2luKCcmJylcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlVVJMXG4gICAgfSxcblxuICAgIGxhc3RNZXNzYWdlSW5kZXg6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICB2YXIgbG4yID0gdGV4dC5sYXN0SW5kZXhPZignXFxuXFxuJylcbiAgICAgIHZhciBscjIgPSB0ZXh0Lmxhc3RJbmRleE9mKCdcXHJcXHInKVxuICAgICAgdmFyIGxybG4yID0gdGV4dC5sYXN0SW5kZXhPZignXFxyXFxuXFxyXFxuJylcblxuICAgICAgaWYgKGxybG4yID4gTWF0aC5tYXgobG4yLCBscjIpKSB7XG4gICAgICAgIHJldHVybiBbbHJsbjIsIGxybG4yICsgNF1cbiAgICAgIH1cbiAgICAgIHJldHVybiBbTWF0aC5tYXgobG4yLCBscjIpLCBNYXRoLm1heChsbjIsIGxyMikgKyAyXVxuICAgIH0sXG5cbiAgICB0cmltV2hpdGVTcGFjZTogZnVuY3Rpb24gKHN0cikge1xuICAgICAgLy8gdG8gcmVtb3ZlIHdoaXRlc3BhY2VzIGxlZnQgYW5kIHJpZ2h0IG9mIHN0cmluZ1xuXG4gICAgICB2YXIgcmVUcmltID0gL14oXFxzfFxcdTAwQTApK3woXFxzfFxcdTAwQTApKyQvZ1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlVHJpbSwgJycpXG4gICAgfSxcblxuICAgIG5vcm1hbGl6ZVRvTEY6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIC8vIHJlcGxhY2UgXFxyIGFuZCBcXHJcXG4gd2l0aCBcXG5cbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxyXFxufFxcci9nLCAnXFxuJylcbiAgICB9LFxuICB9XG5cbiAgaWYgKGlzT2xkSUUoKSkge1xuICAgIEV2ZW50U291cmNlLmlzUG9seWZpbGwgPSAnSUVfOC05J1xuXG4gICAgLy8gcGF0Y2ggRXZlbnRTb3VyY2UgZGVmYXVsdE9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdHMgPSBFdmVudFNvdXJjZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnNcbiAgICBkZWZhdWx0cy54aHJIZWFkZXJzID0gbnVsbCAvLyBubyBoZWFkZXJzIHdpbGwgYmUgc2VudFxuICAgIGRlZmF1bHRzLmdldEFyZ3MuZXZzX3ByZWFtYmxlID0gMjA0OCArIDhcblxuICAgIC8vIEV2ZW50U291cmNlIHdpbGwgc2VuZCByZXF1ZXN0IHVzaW5nIEludGVybmV0IEV4cGxvcmVyIFhEb21haW5SZXF1ZXN0XG4gICAgRXZlbnRTb3VyY2UucHJvdG90eXBlLlhIUiA9IGZ1bmN0aW9uIChldnMpIHtcbiAgICAgIC8qIGdsb2JhbCBYRG9tYWluUmVxdWVzdCAqL1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWERvbWFpblJlcXVlc3QoKVxuICAgICAgdGhpcy5fcmVxdWVzdCA9IHJlcXVlc3RcblxuICAgICAgLy8gc2V0IGhhbmRsZXJzXG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcXVlc3QuX3JlYWR5ID0gdHJ1ZVxuICAgICAgICBldnMuX29ueGhyZGF0YSgpXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlXG4gICAgICAgIGV2cy5fb254aHJkYXRhKClcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9mYWlsZWQgPSB0cnVlXG4gICAgICAgIGV2cy5yZWFkeVN0YXRlID0gZXZzLkNMT1NFRFxuICAgICAgICBldnMuZGlzcGF0Y2hFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICBkYXRhOiAnWERvbWFpblJlcXVlc3QgZXJyb3InLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZmFpbGVkID0gdHJ1ZVxuICAgICAgICBldnMucmVhZHlTdGF0ZSA9IGV2cy5DTE9TRURcbiAgICAgICAgZXZzLmRpc3BhdGNoRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgZGF0YTogJ1hEb21haW5SZXF1ZXN0IHRpbWVkIG91dCcsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFhEb21haW5SZXF1ZXN0IGRvZXMgbm90IGFsbG93IHNldHRpbmcgY3VzdG9tIGhlYWRlcnNcbiAgICAgIC8vIElmIEV2ZW50U291cmNlIGhhcyBlbmFibGVkIHRoZSB1c2Ugb2YgR0VUIGFyZ3VtZW50c1xuICAgICAgLy8gd2UgYWRkIHBhcmFtZXRlcnMgdG8gVVJMIHNvIHRoYXQgc2VydmVyIGNhbiBhZGFwdCB0aGUgc3RyZWFtLi4uXG4gICAgICB2YXIgcmVxR2V0QXJncyA9IHt9XG4gICAgICBpZiAoZXZzLmdldEFyZ3MpIHtcbiAgICAgICAgLy8gY29weSBldnMuZ2V0QXJncyBpbiByZXFHZXRBcmdzXG4gICAgICAgIHZhciBkZWZhdWx0QXJncyA9IGV2cy5nZXRBcmdzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0QXJncykge1xuICAgICAgICAgIGlmIChkZWZhdWx0QXJncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXFHZXRBcmdzW2tleV0gPSBkZWZhdWx0QXJnc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChldnMubGFzdEV2ZW50SWQpIHtcbiAgICAgICAgICByZXFHZXRBcmdzLmV2c19sYXN0X2V2ZW50X2lkID0gZXZzLmxhc3RFdmVudElkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHNlbmQgdGhlIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBldnMudXJsV2l0aFBhcmFtcyhldnMuVVJMLCByZXFHZXRBcmdzKSlcbiAgICAgIHJlcXVlc3Quc2VuZCgpXG4gICAgfVxuXG4gICAgRXZlbnRTb3VyY2UucHJvdG90eXBlLlhIUi5wcm90b3R5cGUgPSB7XG4gICAgICB1c2VYRG9tYWluUmVxdWVzdDogdHJ1ZSxcblxuICAgICAgX3JlcXVlc3Q6IG51bGwsXG5cbiAgICAgIF9yZWFkeTogZmFsc2UsIC8vIHRydWUgd2hlbiBwcm9ncmVzcyBldmVudHMgYXJlIGRpc3BhdGNoZWRcblxuICAgICAgX2xvYWRlZDogZmFsc2UsIC8vIHRydWUgd2hlbiByZXF1ZXN0IGhhcyBiZWVuIGxvYWRlZFxuXG4gICAgICBfZmFpbGVkOiBmYWxzZSwgLy8gdHJ1ZSBpZiB3aGVuIHJlcXVlc3QgaXMgaW4gZXJyb3JcblxuICAgICAgaXNSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5fcmVhZHlcbiAgICAgIH0sXG5cbiAgICAgIGlzRG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5fbG9hZGVkXG4gICAgICB9LFxuXG4gICAgICBoYXNFcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5fZmFpbGVkXG4gICAgICB9LFxuXG4gICAgICBnZXRCdWZmZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJ2ID0gJydcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBydiA9IHRoaXMuX3JlcXVlc3QucmVzcG9uc2VUZXh0IHx8ICcnXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIGludGVudGlvbmFsIG5vb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnZcbiAgICAgIH0sXG5cbiAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0KSB7XG4gICAgICAgICAgdGhpcy5fcmVxdWVzdC5hYm9ydCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIEV2ZW50U291cmNlLmlzUG9seWZpbGwgPSAnWEhSJ1xuXG4gICAgLy8gRXZlbnRTb3VyY2Ugd2lsbCBzZW5kIHJlcXVlc3QgdXNpbmcgWE1MSHR0cFJlcXVlc3RcbiAgICBFdmVudFNvdXJjZS5wcm90b3R5cGUuWEhSID0gZnVuY3Rpb24gKGV2cykge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgdGhpcy5fcmVxdWVzdCA9IHJlcXVlc3RcbiAgICAgIGV2cy5feGhyID0gdGhpc1xuXG4gICAgICAvLyBzZXQgaGFuZGxlcnNcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID4gMSAmJiBldnMucmVhZHlTdGF0ZSAhPSBldnMuQ0xPU0VEKSB7XG4gICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwMCB8fCAocmVxdWVzdC5zdGF0dXMgPj0gMzAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSkge1xuICAgICAgICAgICAgZXZzLl9vbnhocmRhdGEoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0Ll9mYWlsZWQgPSB0cnVlXG4gICAgICAgICAgICBldnMucmVhZHlTdGF0ZSA9IGV2cy5DTE9TRURcbiAgICAgICAgICAgIGV2cy5kaXNwYXRjaEV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgZGF0YTogJ1RoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggJyArIHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGV2cy5jbG9zZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaW50ZW50aW9uYWwgbm9vcFxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGV2cy51cmxXaXRoUGFyYW1zKGV2cy5VUkwsIGV2cy5nZXRBcmdzKSwgdHJ1ZSlcblxuICAgICAgdmFyIGhlYWRlcnMgPSBldnMueGhySGVhZGVycyAvLyBtYXliZSBudWxsXG4gICAgICBmb3IgKHZhciBoZWFkZXIgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShoZWFkZXIpKSB7XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgaGVhZGVyc1toZWFkZXJdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZzLmxhc3RFdmVudElkKSB7XG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignTGFzdC1FdmVudC1JZCcsIGV2cy5sYXN0RXZlbnRJZClcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5zZW5kKClcbiAgICB9XG5cbiAgICBFdmVudFNvdXJjZS5wcm90b3R5cGUuWEhSLnByb3RvdHlwZSA9IHtcbiAgICAgIHVzZVhEb21haW5SZXF1ZXN0OiBmYWxzZSxcblxuICAgICAgX3JlcXVlc3Q6IG51bGwsXG5cbiAgICAgIF9mYWlsZWQ6IGZhbHNlLCAvLyB0cnVlIGlmIHdlIGhhdmUgaGFkIGVycm9ycy4uLlxuXG4gICAgICBpc1JlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0LnJlYWR5U3RhdGUgPj0gMlxuICAgICAgfSxcblxuICAgICAgaXNEb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNFxuICAgICAgfSxcblxuICAgICAgaGFzRXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZhaWxlZCB8fCB0aGlzLl9yZXF1ZXN0LnN0YXR1cyA+PSA0MDBcbiAgICAgIH0sXG5cbiAgICAgIGdldEJ1ZmZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcnYgPSAnJ1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJ2ID0gdGhpcy5fcmVxdWVzdC5yZXNwb25zZVRleHQgfHwgJydcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gaW50ZW50aW9uYWwgbm9vcFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydlxuICAgICAgfSxcblxuICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlcXVlc3QpIHtcbiAgICAgICAgICB0aGlzLl9yZXF1ZXN0LmFib3J0KClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBNZXNzYWdlRXZlbnQodHlwZSwgZGF0YSwgb3JpZ2luLCBsYXN0RXZlbnRJZCkge1xuICAgIHRoaXMuYnViYmxlcyA9IGZhbHNlXG4gICAgdGhpcy5jYW5jZWxCdWJibGUgPSBmYWxzZVxuICAgIHRoaXMuY2FuY2VsYWJsZSA9IGZhbHNlXG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCBudWxsXG4gICAgdGhpcy5vcmlnaW4gPSBvcmlnaW4gfHwgJydcbiAgICB0aGlzLmxhc3RFdmVudElkID0gbGFzdEV2ZW50SWQgfHwgJydcbiAgICB0aGlzLnR5cGUgPSB0eXBlIHx8ICdtZXNzYWdlJ1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgICAvL3JldHVybiB0cnVlIGlmIHdlIGFyZSBpbiBJRTggb3IgSUU5XG4gICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiZcbiAgICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0ICYmXG4gICAgICAgIG5ldyBYTUxIdHRwUmVxdWVzdCgpLnJlc3BvbnNlVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIEV2ZW50U291cmNlXG59KVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvbWFwJyksXG4gICAgbWFwID0gX3JlcXVpcmUubWFwO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9maWx0ZXInKSxcbiAgICBmaWx0ZXIgPSBfcmVxdWlyZTIuZmlsdGVyO1xuXG52YXIgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuLi9odHRwL3F1ZXJ5U3RyaW5nJyk7XG5cbnZhciB2YWxpZGF0b3JzID0gcmVxdWlyZSgnLi4vdmFsaWRhdG9ycycpO1xuXG5mdW5jdGlvbiBBc3NldHNDbGllbnQoY2xpZW50KSB7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5mdW5jdGlvbiB0b0RvY3VtZW50KGJvZHkpIHtcbiAgLy8gdG9kbzogcmV3cml0ZSB0byBqdXN0IHJldHVybiBib2R5LmRvY3VtZW50IGluIGEgd2hpbGVcbiAgdmFyIGRvY3VtZW50ID0gYm9keS5kb2N1bWVudDtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LCAnZG9jdW1lbnQnLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKCdUaGUgcHJvbWlzZSByZXR1cm5lZCBmcm9tIGNsaWVudC5hc3NldC51cGxvYWQoLi4uKSBub3cgcmVzb2x2ZXMgd2l0aCB0aGUgYXNzZXQgZG9jdW1lbnQnKTtcbiAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbnNGcm9tRmlsZShvcHRzLCBmaWxlKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhKGZpbGUgaW5zdGFuY2VvZiB3aW5kb3cuRmlsZSkpIHtcbiAgICByZXR1cm4gb3B0cztcbiAgfVxuXG4gIHJldHVybiBhc3NpZ24oe1xuICAgIGZpbGVuYW1lOiBvcHRzLnByZXNlcnZlRmlsZW5hbWUgPT09IGZhbHNlID8gdW5kZWZpbmVkIDogZmlsZS5uYW1lLFxuICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGVcbiAgfSwgb3B0cyk7XG59XG5cbmFzc2lnbihBc3NldHNDbGllbnQucHJvdG90eXBlLCB7XG4gIC8qKlxuICAgKiBVcGxvYWQgYW4gYXNzZXRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhc3NldFR5cGUgYGltYWdlYCBvciBgZmlsZWBcbiAgICogQHBhcmFtICB7RmlsZXxCbG9ifEJ1ZmZlcnxSZWFkYWJsZVN0cmVhbX0gYm9keSBGaWxlIHRvIHVwbG9hZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvcHRzIE9wdGlvbnMgZm9yIHRoZSB1cGxvYWRcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gb3B0cy5wcmVzZXJ2ZUZpbGVuYW1lIFdoZXRoZXIgb3Igbm90IHRvIHByZXNlcnZlIHRoZSBvcmlnaW5hbCBmaWxlbmFtZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy5maWxlbmFtZSBGaWxlbmFtZSBmb3IgdGhpcyBmaWxlIChvcHRpb25hbClcbiAgICogQHBhcmFtICB7TnVtYmVyfSAgb3B0cy50aW1lb3V0ICBNaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgdGltaW5nIHRoZSByZXF1ZXN0IG91dCAoZGVmYXVsdDogMClcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy5jb250ZW50VHlwZSBNaW1lIHR5cGUgb2YgdGhlIGZpbGVcbiAgICogQHBhcmFtICB7QXJyYXl9ICAgb3B0cy5leHRyYWN0IEFycmF5IG9mIG1ldGFkYXRhIHBhcnRzIHRvIGV4dHJhY3QgZnJvbSBpbWFnZS5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3NzaWJsZSB2YWx1ZXM6IGBsb2NhdGlvbmAsIGBleGlmYCwgYGltYWdlYCwgYHBhbGV0dGVgXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMubGFiZWwgTGFiZWxcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy50aXRsZSBUaXRsZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLmRlc2NyaXB0aW9uIERlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuY3JlZGl0TGluZSBUaGUgY3JlZGl0IHRvIHBlcnNvbihzKSBhbmQvb3Igb3JnYW5pemF0aW9uKHMpIHJlcXVpcmVkIGJ5IHRoZSBzdXBwbGllciBvZiB0aGUgaW1hZ2UgdG8gYmUgdXNlZCB3aGVuIHB1Ymxpc2hlZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvcHRzLnNvdXJjZSBTb3VyY2UgZGF0YSAod2hlbiB0aGUgYXNzZXQgaXMgZnJvbSBhbiBleHRlcm5hbCBzZXJ2aWNlKVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLnNvdXJjZS5pZCBUaGUgKHUpaWQgb2YgdGhlIGFzc2V0IHdpdGhpbiB0aGUgc291cmNlLCBpLmUuICdpLWYzMjNyMUUnXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVpcmVkIGlmIHNvdXJjZSBpcyBkZWZpbmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuc291cmNlLm5hbWUgVGhlIG5hbWUgb2YgdGhlIHNvdXJjZSwgaS5lLiAndW5zcGxhc2gnXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVpcmVkIGlmIHNvdXJjZSBpcyBkZWZpbmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuc291cmNlLnVybCBBIHVybCB0byB3aGVyZSB0byBmaW5kIHRoZSBhc3NldCwgb3IgZ2V0IG1vcmUgaW5mbyBhYm91dCBpdCBpbiB0aGUgc291cmNlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIHdpdGggdGhlIGNyZWF0ZWQgYXNzZXQgZG9jdW1lbnRcbiAgICovXG4gIHVwbG9hZDogZnVuY3Rpb24gdXBsb2FkKGFzc2V0VHlwZSwgYm9keSkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YWxpZGF0b3JzLnZhbGlkYXRlQXNzZXRUeXBlKGFzc2V0VHlwZSk7IC8vIElmIGFuIGVtcHR5IGFycmF5IGlzIGdpdmVuLCBleHBsaWNpdGx5IHNldCBgbm9uZWAgdG8gb3ZlcnJpZGUgQVBJIGRlZmF1bHRzXG5cbiAgICB2YXIgbWV0YSA9IG9wdHMuZXh0cmFjdCB8fCB1bmRlZmluZWQ7XG5cbiAgICBpZiAobWV0YSAmJiAhbWV0YS5sZW5ndGgpIHtcbiAgICAgIG1ldGEgPSBbJ25vbmUnXTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YXNldCA9IHZhbGlkYXRvcnMuaGFzRGF0YXNldCh0aGlzLmNsaWVudC5jbGllbnRDb25maWcpO1xuICAgIHZhciBhc3NldEVuZHBvaW50ID0gYXNzZXRUeXBlID09PSAnaW1hZ2UnID8gJ2ltYWdlcycgOiAnZmlsZXMnO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0Zyb21GaWxlKG9wdHMsIGJvZHkpO1xuICAgIHZhciBsYWJlbCA9IG9wdGlvbnMubGFiZWwsXG4gICAgICAgIHRpdGxlID0gb3B0aW9ucy50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgICBjcmVkaXRMaW5lID0gb3B0aW9ucy5jcmVkaXRMaW5lLFxuICAgICAgICBmaWxlbmFtZSA9IG9wdGlvbnMuZmlsZW5hbWUsXG4gICAgICAgIHNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICAgIHZhciBxdWVyeSA9IHtcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGZpbGVuYW1lOiBmaWxlbmFtZSxcbiAgICAgIG1ldGE6IG1ldGEsXG4gICAgICBjcmVkaXRMaW5lOiBjcmVkaXRMaW5lXG4gICAgfTtcblxuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIHF1ZXJ5LnNvdXJjZUlkID0gc291cmNlLmlkO1xuICAgICAgcXVlcnkuc291cmNlTmFtZSA9IHNvdXJjZS5uYW1lO1xuICAgICAgcXVlcnkuc291cmNlVXJsID0gc291cmNlLnVybDtcbiAgICB9XG5cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuY2xpZW50Ll9yZXF1ZXN0T2JzZXJ2YWJsZSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHRpbWVvdXQ6IG9wdGlvbnMudGltZW91dCB8fCAwLFxuICAgICAgdXJpOiBcIi9hc3NldHMvXCIuY29uY2F0KGFzc2V0RW5kcG9pbnQsIFwiL1wiKS5jb25jYXQoZGF0YXNldCksXG4gICAgICBoZWFkZXJzOiBvcHRpb25zLmNvbnRlbnRUeXBlID8ge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogb3B0aW9ucy5jb250ZW50VHlwZVxuICAgICAgfSA6IHt9LFxuICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgYm9keTogYm9keVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmlzUHJvbWlzZUFQSSgpID8gb2JzZXJ2YWJsZS5waXBlKGZpbHRlcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmVudC50eXBlID09PSAncmVzcG9uc2UnO1xuICAgIH0pLCBtYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gdG9Eb2N1bWVudChldmVudC5ib2R5KTtcbiAgICB9KSkudG9Qcm9taXNlKCkgOiBvYnNlcnZhYmxlO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUodHlwZSwgaWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybignY2xpZW50LmFzc2V0cy5kZWxldGUoKSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGNsaWVudC5kZWxldGUoPGRvY3VtZW50LWlkPiknKTtcbiAgICB2YXIgZG9jSWQgPSBpZCB8fCAnJztcblxuICAgIGlmICghL14oaW1hZ2V8ZmlsZSktLy50ZXN0KGRvY0lkKSkge1xuICAgICAgZG9jSWQgPSBcIlwiLmNvbmNhdCh0eXBlLCBcIi1cIikuY29uY2F0KGRvY0lkKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuX2lkKSB7XG4gICAgICAvLyBXZSBjb3VsZCBiZSBwYXNzaW5nIGFuIGVudGlyZSBhc3NldCBkb2N1bWVudCBpbnN0ZWFkIG9mIGFuIElEXG4gICAgICBkb2NJZCA9IHR5cGUuX2lkO1xuICAgIH1cblxuICAgIHZhbGlkYXRvcnMuaGFzRGF0YXNldCh0aGlzLmNsaWVudC5jbGllbnRDb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5kZWxldGUoZG9jSWQpO1xuICB9LFxuICBnZXRJbWFnZVVybDogZnVuY3Rpb24gZ2V0SW1hZ2VVcmwocmVmLCBxdWVyeSkge1xuICAgIHZhciBpZCA9IHJlZi5fcmVmIHx8IHJlZjtcblxuICAgIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldEltYWdlVXJsKCkgbmVlZHMgZWl0aGVyIGFuIG9iamVjdCB3aXRoIGEgX3JlZiwgb3IgYSBzdHJpbmcgd2l0aCBhbiBhc3NldCBkb2N1bWVudCBJRCcpO1xuICAgIH1cblxuICAgIGlmICghL15pbWFnZS1bQS1aYS16MC05X10rLVxcZCt4XFxkKy1bYS16XXsxLDV9JC8udGVzdChpZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFzc2V0IElEIFxcXCJcIi5jb25jYXQoaWQsIFwiXFxcIi4gVVJMIGdlbmVyYXRpb24gb25seSB3b3JrcyBmb3IgYXV0by1nZW5lcmF0ZWQgSURzLlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIF9pZCRzcGxpdCA9IGlkLnNwbGl0KCctJyksXG4gICAgICAgIF9pZCRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfaWQkc3BsaXQsIDQpLFxuICAgICAgICBhc3NldElkID0gX2lkJHNwbGl0MlsxXSxcbiAgICAgICAgc2l6ZSA9IF9pZCRzcGxpdDJbMl0sXG4gICAgICAgIGZvcm1hdCA9IF9pZCRzcGxpdDJbM107XG5cbiAgICB2YWxpZGF0b3JzLmhhc0RhdGFzZXQodGhpcy5jbGllbnQuY2xpZW50Q29uZmlnKTtcbiAgICB2YXIgX3RoaXMkY2xpZW50JGNsaWVudENvID0gdGhpcy5jbGllbnQuY2xpZW50Q29uZmlnLFxuICAgICAgICBwcm9qZWN0SWQgPSBfdGhpcyRjbGllbnQkY2xpZW50Q28ucHJvamVjdElkLFxuICAgICAgICBkYXRhc2V0ID0gX3RoaXMkY2xpZW50JGNsaWVudENvLmRhdGFzZXQ7XG4gICAgdmFyIHFzID0gcXVlcnkgPyBxdWVyeVN0cmluZyhxdWVyeSkgOiAnJztcbiAgICByZXR1cm4gXCJodHRwczovL2Nkbi5zYW5pdHkuaW8vaW1hZ2VzL1wiLmNvbmNhdChwcm9qZWN0SWQsIFwiL1wiKS5jb25jYXQoZGF0YXNldCwgXCIvXCIpLmNvbmNhdChhc3NldElkLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLlwiKS5jb25jYXQoZm9ybWF0KS5jb25jYXQocXMpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQXNzZXRzQ2xpZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG5mdW5jdGlvbiBBdXRoQ2xpZW50KGNsaWVudCkge1xuICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbn1cblxuYXNzaWduKEF1dGhDbGllbnQucHJvdG90eXBlLCB7XG4gIGdldExvZ2luUHJvdmlkZXJzOiBmdW5jdGlvbiBnZXRMb2dpblByb3ZpZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmk6ICcvYXV0aC9wcm92aWRlcnMnXG4gICAgfSk7XG4gIH0sXG4gIGxvZ291dDogZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVyaTogJy9hdXRoL2xvZ291dCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQXV0aENsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGdlbmVyYXRlSGVscFVybCA9IHJlcXVpcmUoJ0BzYW5pdHkvZ2VuZXJhdGUtaGVscC11cmwnKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi92YWxpZGF0b3JzJyk7XG5cbnZhciBvbmNlID0gcmVxdWlyZSgnLi91dGlsL29uY2UnKTtcblxudmFyIGRlZmF1bHRDZG5Ib3N0ID0gJ2FwaWNkbi5zYW5pdHkuaW8nO1xudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGFwaUhvc3Q6ICdodHRwczovL2FwaS5zYW5pdHkuaW8nLFxuICB1c2VQcm9qZWN0SG9zdG5hbWU6IHRydWUsXG4gIGdyYWRpZW50TW9kZTogZmFsc2UsXG4gIGlzUHJvbWlzZUFQSTogdHJ1ZVxufTtcbnZhciBMT0NBTEhPU1RTID0gWydsb2NhbGhvc3QnLCAnMTI3LjAuMC4xJywgJzAuMC4wLjAnXTtcblxudmFyIGlzTG9jYWwgPSBmdW5jdGlvbiBpc0xvY2FsKGhvc3QpIHtcbiAgcmV0dXJuIExPQ0FMSE9TVFMuaW5kZXhPZihob3N0KSAhPT0gLTE7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG5cbnZhciBjcmVhdGVXYXJuaW5nUHJpbnRlciA9IGZ1bmN0aW9uIGNyZWF0ZVdhcm5pbmdQcmludGVyKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb25zb2xlLndhcm4obWVzc2FnZS5qb2luKCcgJykpO1xuICB9KTtcbn07XG5cbnZhciBwcmludENkbldhcm5pbmcgPSBjcmVhdGVXYXJuaW5nUHJpbnRlcihbJ1lvdSBhcmUgbm90IHVzaW5nIHRoZSBTYW5pdHkgQ0ROLiBUaGF0IG1lYW5zIHlvdXIgZGF0YSBpcyBhbHdheXMgZnJlc2gsIGJ1dCB0aGUgQ0ROIGlzIGZhc3RlciBhbmQnLCBcImNoZWFwZXIuIFRoaW5rIGFib3V0IGl0ISBGb3IgbW9yZSBpbmZvLCBzZWUgXCIuY29uY2F0KGdlbmVyYXRlSGVscFVybCgnanMtY2xpZW50LWNkbi1jb25maWd1cmF0aW9uJyksIFwiLlwiKSwgJ1RvIGhpZGUgdGhpcyB3YXJuaW5nLCBwbGVhc2Ugc2V0IHRoZSBgdXNlQ2RuYCBvcHRpb24gdG8gZWl0aGVyIGB0cnVlYCBvciBgZmFsc2VgIHdoZW4gY3JlYXRpbmcnLCAndGhlIGNsaWVudC4nXSk7XG52YXIgcHJpbnRCcm93c2VyVG9rZW5XYXJuaW5nID0gY3JlYXRlV2FybmluZ1ByaW50ZXIoWydZb3UgaGF2ZSBjb25maWd1cmVkIFNhbml0eSBjbGllbnQgdG8gdXNlIGEgdG9rZW4gaW4gdGhlIGJyb3dzZXIuIFRoaXMgbWF5IGNhdXNlIHVuaW50ZW50aW9uYWwgc2VjdXJpdHkgaXNzdWVzLicsIFwiU2VlIFwiLmNvbmNhdChnZW5lcmF0ZUhlbHBVcmwoJ2pzLWNsaWVudC1icm93c2VyLXRva2VuJyksIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uIGFuZCBob3cgdG8gaGlkZSB0aGlzIHdhcm5pbmcuXCIpXSk7XG52YXIgcHJpbnRDZG5Ub2tlbldhcm5pbmcgPSBjcmVhdGVXYXJuaW5nUHJpbnRlcihbJ1lvdSBoYXZlIHNldCBgdXNlQ2RuYCB0byBgdHJ1ZWAgd2hpbGUgYWxzbyBzcGVjaWZ5aW5nIGEgdG9rZW4uIFRoaXMgaXMgdXN1YWxseSBub3Qgd2hhdCB5b3UnLCAnd2FudC4gVGhlIENETiBjYW5ub3QgYmUgdXNlZCB3aXRoIGFuIGF1dGhvcml6YXRpb24gdG9rZW4sIHNpbmNlIHByaXZhdGUgZGF0YSBjYW5ub3QgYmUgY2FjaGVkLicsIFwiU2VlIFwiLmNvbmNhdChnZW5lcmF0ZUhlbHBVcmwoJ2pzLWNsaWVudC11c2VjZG4tdG9rZW4nKSwgXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpXSk7XG5leHBvcnRzLmRlZmF1bHRDb25maWcgPSBkZWZhdWx0Q29uZmlnO1xuXG5leHBvcnRzLmluaXRDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnLCBwcmV2Q29uZmlnKSB7XG4gIHZhciBuZXdDb25maWcgPSBhc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIHByZXZDb25maWcsIGNvbmZpZyk7XG4gIHZhciBncmFkaWVudE1vZGUgPSBuZXdDb25maWcuZ3JhZGllbnRNb2RlO1xuICB2YXIgcHJvamVjdEJhc2VkID0gIWdyYWRpZW50TW9kZSAmJiBuZXdDb25maWcudXNlUHJvamVjdEhvc3RuYW1lO1xuXG4gIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgaGVscFVybCA9IGdlbmVyYXRlSGVscFVybCgnanMtY2xpZW50LXByb21pc2UtcG9seWZpbGwnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBuYXRpdmUgUHJvbWlzZS1pbXBsZW1lbnRhdGlvbiBmb3VuZCwgcG9seWZpbGwgbmVlZGVkIC0gc2VlIFwiLmNvbmNhdChoZWxwVXJsKSk7XG4gIH1cblxuICBpZiAoZ3JhZGllbnRNb2RlICYmICFuZXdDb25maWcubmFtZXNwYWNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25maWd1cmF0aW9uIG11c3QgY29udGFpbiBgbmFtZXNwYWNlYCB3aGVuIHJ1bm5pbmcgaW4gZ3JhZGllbnQgbW9kZScpO1xuICB9XG5cbiAgaWYgKHByb2plY3RCYXNlZCAmJiAhbmV3Q29uZmlnLnByb2plY3RJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJhdGlvbiBtdXN0IGNvbnRhaW4gYHByb2plY3RJZGAnKTtcbiAgfVxuXG4gIHZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuICB2YXIgaXNMb2NhbGhvc3QgPSBpc0Jyb3dzZXIgJiYgaXNMb2NhbCh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpO1xuXG4gIGlmIChpc0Jyb3dzZXIgJiYgaXNMb2NhbGhvc3QgJiYgbmV3Q29uZmlnLnRva2VuICYmIG5ld0NvbmZpZy5pZ25vcmVCcm93c2VyVG9rZW5XYXJuaW5nICE9PSB0cnVlKSB7XG4gICAgcHJpbnRCcm93c2VyVG9rZW5XYXJuaW5nKCk7XG4gIH0gZWxzZSBpZiAoKCFpc0Jyb3dzZXIgfHwgaXNMb2NhbGhvc3QpICYmIG5ld0NvbmZpZy51c2VDZG4gJiYgbmV3Q29uZmlnLnRva2VuKSB7XG4gICAgcHJpbnRDZG5Ub2tlbldhcm5pbmcoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbmV3Q29uZmlnLnVzZUNkbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmludENkbldhcm5pbmcoKTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0QmFzZWQpIHtcbiAgICB2YWxpZGF0ZS5wcm9qZWN0SWQobmV3Q29uZmlnLnByb2plY3RJZCk7XG4gIH1cblxuICBpZiAoIWdyYWRpZW50TW9kZSAmJiBuZXdDb25maWcuZGF0YXNldCkge1xuICAgIHZhbGlkYXRlLmRhdGFzZXQobmV3Q29uZmlnLmRhdGFzZXQsIG5ld0NvbmZpZy5ncmFkaWVudE1vZGUpO1xuICB9XG5cbiAgbmV3Q29uZmlnLmlzRGVmYXVsdEFwaSA9IG5ld0NvbmZpZy5hcGlIb3N0ID09PSBkZWZhdWx0Q29uZmlnLmFwaUhvc3Q7XG4gIG5ld0NvbmZpZy51c2VDZG4gPSBCb29sZWFuKG5ld0NvbmZpZy51c2VDZG4pICYmICFuZXdDb25maWcudG9rZW4gJiYgIW5ld0NvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG5cbiAgaWYgKG5ld0NvbmZpZy5ncmFkaWVudE1vZGUpIHtcbiAgICBuZXdDb25maWcudXJsID0gbmV3Q29uZmlnLmFwaUhvc3Q7XG4gICAgbmV3Q29uZmlnLmNkblVybCA9IG5ld0NvbmZpZy5hcGlIb3N0O1xuICB9IGVsc2Uge1xuICAgIHZhciBob3N0UGFydHMgPSBuZXdDb25maWcuYXBpSG9zdC5zcGxpdCgnOi8vJywgMik7XG4gICAgdmFyIHByb3RvY29sID0gaG9zdFBhcnRzWzBdO1xuICAgIHZhciBob3N0ID0gaG9zdFBhcnRzWzFdO1xuICAgIHZhciBjZG5Ib3N0ID0gbmV3Q29uZmlnLmlzRGVmYXVsdEFwaSA/IGRlZmF1bHRDZG5Ib3N0IDogaG9zdDtcblxuICAgIGlmIChuZXdDb25maWcudXNlUHJvamVjdEhvc3RuYW1lKSB7XG4gICAgICBuZXdDb25maWcudXJsID0gXCJcIi5jb25jYXQocHJvdG9jb2wsIFwiOi8vXCIpLmNvbmNhdChuZXdDb25maWcucHJvamVjdElkLCBcIi5cIikuY29uY2F0KGhvc3QsIFwiL3YxXCIpO1xuICAgICAgbmV3Q29uZmlnLmNkblVybCA9IFwiXCIuY29uY2F0KHByb3RvY29sLCBcIjovL1wiKS5jb25jYXQobmV3Q29uZmlnLnByb2plY3RJZCwgXCIuXCIpLmNvbmNhdChjZG5Ib3N0LCBcIi92MVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29uZmlnLnVybCA9IFwiXCIuY29uY2F0KG5ld0NvbmZpZy5hcGlIb3N0LCBcIi92MVwiKTtcbiAgICAgIG5ld0NvbmZpZy5jZG5VcmwgPSBuZXdDb25maWcudXJsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdDb25maWc7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL2ZpbHRlcicpLFxuICAgIGZpbHRlciA9IF9yZXF1aXJlLmZpbHRlcjtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvbWFwJyksXG4gICAgbWFwID0gX3JlcXVpcmUyLm1hcDtcblxudmFyIHZhbGlkYXRvcnMgPSByZXF1aXJlKCcuLi92YWxpZGF0b3JzJyk7XG5cbnZhciBnZXRTZWxlY3Rpb24gPSByZXF1aXJlKCcuLi91dGlsL2dldFNlbGVjdGlvbicpO1xuXG52YXIgZW5jb2RlUXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuL2VuY29kZVF1ZXJ5U3RyaW5nJyk7XG5cbnZhciBUcmFuc2FjdGlvbiA9IHJlcXVpcmUoJy4vdHJhbnNhY3Rpb24nKTtcblxudmFyIFBhdGNoID0gcmVxdWlyZSgnLi9wYXRjaCcpO1xuXG52YXIgbGlzdGVuID0gcmVxdWlyZSgnLi9saXN0ZW4nKTtcblxudmFyIGV4Y2x1ZGVGYWxzZXkgPSBmdW5jdGlvbiBleGNsdWRlRmFsc2V5KHBhcmFtLCBkZWZWYWx1ZSkge1xuICB2YXIgdmFsdWUgPSB0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnID8gZGVmVmFsdWUgOiBwYXJhbTtcbiAgcmV0dXJuIHBhcmFtID09PSBmYWxzZSA/IHVuZGVmaW5lZCA6IHZhbHVlO1xufTtcblxudmFyIGdldE11dGF0aW9uUXVlcnkgPSBmdW5jdGlvbiBnZXRNdXRhdGlvblF1ZXJ5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHJldHVybiB7XG4gICAgcmV0dXJuSWRzOiB0cnVlLFxuICAgIHJldHVybkRvY3VtZW50czogZXhjbHVkZUZhbHNleShvcHRpb25zLnJldHVybkRvY3VtZW50cywgdHJ1ZSksXG4gICAgdmlzaWJpbGl0eTogb3B0aW9ucy52aXNpYmlsaXR5IHx8ICdzeW5jJ1xuICB9O1xufTtcblxudmFyIGlzUmVzcG9uc2UgPSBmdW5jdGlvbiBpc1Jlc3BvbnNlKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC50eXBlID09PSAncmVzcG9uc2UnO1xufTtcblxudmFyIGdldEJvZHkgPSBmdW5jdGlvbiBnZXRCb2R5KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5ib2R5O1xufTtcblxudmFyIGluZGV4QnkgPSBmdW5jdGlvbiBpbmRleEJ5KGRvY3MsIGF0dHIpIHtcbiAgcmV0dXJuIGRvY3MucmVkdWNlKGZ1bmN0aW9uIChpbmRleGVkLCBkb2MpIHtcbiAgICBpbmRleGVkW2F0dHIoZG9jKV0gPSBkb2M7XG4gICAgcmV0dXJuIGluZGV4ZWQ7XG4gIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufTtcblxudmFyIHRvUHJvbWlzZSA9IGZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLnRvUHJvbWlzZSgpO1xufTtcblxudmFyIGdldFF1ZXJ5U2l6ZUxpbWl0ID0gMTEyNjQ7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGlzdGVuOiBsaXN0ZW4sXG4gIGdldERhdGFVcmw6IGZ1bmN0aW9uIGdldERhdGFVcmwob3BlcmF0aW9uLCBwYXRoKSB7XG4gICAgdmFyIGNvbmZpZyA9IHRoaXMuY2xpZW50Q29uZmlnO1xuICAgIHZhciBjYXRhbG9nID0gY29uZmlnLmdyYWRpZW50TW9kZSA/IGNvbmZpZy5uYW1lc3BhY2UgOiB2YWxpZGF0b3JzLmhhc0RhdGFzZXQoY29uZmlnKTtcbiAgICB2YXIgYmFzZVVyaSA9IFwiL1wiLmNvbmNhdChvcGVyYXRpb24sIFwiL1wiKS5jb25jYXQoY2F0YWxvZyk7XG4gICAgdmFyIHVyaSA9IHBhdGggPyBcIlwiLmNvbmNhdChiYXNlVXJpLCBcIi9cIikuY29uY2F0KHBhdGgpIDogYmFzZVVyaTtcbiAgICByZXR1cm4gKHRoaXMuY2xpZW50Q29uZmlnLmdyYWRpZW50TW9kZSA/IHVyaSA6IFwiL2RhdGFcIi5jb25jYXQodXJpKSkucmVwbGFjZSgvXFwvKCR8XFw/KS8sICckMScpO1xuICB9LFxuICBmZXRjaDogZnVuY3Rpb24gZmV0Y2gocXVlcnksIHBhcmFtcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgbWFwUmVzcG9uc2UgPSBvcHRpb25zLmZpbHRlclJlc3BvbnNlID09PSBmYWxzZSA/IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSA6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiByZXMucmVzdWx0O1xuICAgIH07XG5cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX2RhdGFSZXF1ZXN0KCdxdWVyeScsIHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfSwgb3B0aW9ucykucGlwZShtYXAobWFwUmVzcG9uc2UpKTtcblxuICAgIHJldHVybiB0aGlzLmlzUHJvbWlzZUFQSSgpID8gdG9Qcm9taXNlKG9ic2VydmFibGUpIDogb2JzZXJ2YWJsZTtcbiAgfSxcbiAgZ2V0RG9jdW1lbnQ6IGZ1bmN0aW9uIGdldERvY3VtZW50KGlkKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICB1cmk6IHRoaXMuZ2V0RGF0YVVybCgnZG9jJywgaWQpLFxuICAgICAganNvbjogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX3JlcXVlc3RPYnNlcnZhYmxlKG9wdGlvbnMpLnBpcGUoZmlsdGVyKGlzUmVzcG9uc2UpLCBtYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuYm9keS5kb2N1bWVudHMgJiYgZXZlbnQuYm9keS5kb2N1bWVudHNbMF07XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNQcm9taXNlQVBJKCkgPyB0b1Byb21pc2Uob2JzZXJ2YWJsZSkgOiBvYnNlcnZhYmxlO1xuICB9LFxuICBnZXREb2N1bWVudHM6IGZ1bmN0aW9uIGdldERvY3VtZW50cyhpZHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHVyaTogdGhpcy5nZXREYXRhVXJsKCdkb2MnLCBpZHMuam9pbignLCcpKSxcbiAgICAgIGpzb246IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLl9yZXF1ZXN0T2JzZXJ2YWJsZShvcHRpb25zKS5waXBlKGZpbHRlcihpc1Jlc3BvbnNlKSwgbWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGluZGV4ZWQgPSBpbmRleEJ5KGV2ZW50LmJvZHkuZG9jdW1lbnRzIHx8IFtdLCBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIHJldHVybiBkb2MuX2lkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaWRzLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ZWRbaWRdIHx8IG51bGw7XG4gICAgICB9KTtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcy5pc1Byb21pc2VBUEkoKSA/IHRvUHJvbWlzZShvYnNlcnZhYmxlKSA6IG9ic2VydmFibGU7XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKGRvYywgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGUoZG9jLCAnY3JlYXRlJywgb3B0aW9ucyk7XG4gIH0sXG4gIGNyZWF0ZUlmTm90RXhpc3RzOiBmdW5jdGlvbiBjcmVhdGVJZk5vdEV4aXN0cyhkb2MsIG9wdGlvbnMpIHtcbiAgICB2YWxpZGF0b3JzLnJlcXVpcmVEb2N1bWVudElkKCdjcmVhdGVJZk5vdEV4aXN0cycsIGRvYyk7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZShkb2MsICdjcmVhdGVJZk5vdEV4aXN0cycsIG9wdGlvbnMpO1xuICB9LFxuICBjcmVhdGVPclJlcGxhY2U6IGZ1bmN0aW9uIGNyZWF0ZU9yUmVwbGFjZShkb2MsIG9wdGlvbnMpIHtcbiAgICB2YWxpZGF0b3JzLnJlcXVpcmVEb2N1bWVudElkKCdjcmVhdGVPclJlcGxhY2UnLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGUoZG9jLCAnY3JlYXRlT3JSZXBsYWNlJywgb3B0aW9ucyk7XG4gIH0sXG4gIHBhdGNoOiBmdW5jdGlvbiBwYXRjaChzZWxlY3Rvciwgb3BlcmF0aW9ucykge1xuICAgIHJldHVybiBuZXcgUGF0Y2goc2VsZWN0b3IsIG9wZXJhdGlvbnMsIHRoaXMpO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUoc2VsZWN0aW9uLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVJlcXVlc3QoJ211dGF0ZScsIHtcbiAgICAgIG11dGF0aW9uczogW3tcbiAgICAgICAgZGVsZXRlOiBnZXRTZWxlY3Rpb24oc2VsZWN0aW9uKVxuICAgICAgfV1cbiAgICB9LCBvcHRpb25zKTtcbiAgfSxcbiAgbXV0YXRlOiBmdW5jdGlvbiBtdXRhdGUobXV0YXRpb25zLCBvcHRpb25zKSB7XG4gICAgdmFyIG11dCA9IG11dGF0aW9ucyBpbnN0YW5jZW9mIFBhdGNoIHx8IG11dGF0aW9ucyBpbnN0YW5jZW9mIFRyYW5zYWN0aW9uID8gbXV0YXRpb25zLnNlcmlhbGl6ZSgpIDogbXV0YXRpb25zO1xuICAgIHZhciBtdXRzID0gQXJyYXkuaXNBcnJheShtdXQpID8gbXV0IDogW211dF07XG4gICAgdmFyIHRyYW5zYWN0aW9uSWQgPSBvcHRpb25zICYmIG9wdGlvbnMudHJhbnNhY3Rpb25JZDtcbiAgICByZXR1cm4gdGhpcy5kYXRhUmVxdWVzdCgnbXV0YXRlJywge1xuICAgICAgbXV0YXRpb25zOiBtdXRzLFxuICAgICAgdHJhbnNhY3Rpb25JZDogdHJhbnNhY3Rpb25JZFxuICAgIH0sIG9wdGlvbnMpO1xuICB9LFxuICB0cmFuc2FjdGlvbjogZnVuY3Rpb24gdHJhbnNhY3Rpb24ob3BlcmF0aW9ucykge1xuICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb24ob3BlcmF0aW9ucywgdGhpcyk7XG4gIH0sXG4gIGRhdGFSZXF1ZXN0OiBmdW5jdGlvbiBkYXRhUmVxdWVzdChlbmRwb2ludCwgYm9keSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIHZhciByZXF1ZXN0ID0gdGhpcy5fZGF0YVJlcXVlc3QoZW5kcG9pbnQsIGJvZHksIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNQcm9taXNlQVBJKCkgPyB0b1Byb21pc2UocmVxdWVzdCkgOiByZXF1ZXN0O1xuICB9LFxuICBfZGF0YVJlcXVlc3Q6IGZ1bmN0aW9uIF9kYXRhUmVxdWVzdChlbmRwb2ludCwgYm9keSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgaXNNdXRhdGlvbiA9IGVuZHBvaW50ID09PSAnbXV0YXRlJzsgLy8gQ2hlY2sgaWYgdGhlIHF1ZXJ5IHN0cmluZyBpcyB3aXRoaW4gYSBjb25maWd1cmVkIHRocmVzaG9sZCxcbiAgICAvLyBpbiB3aGljaCBjYXNlIHdlIGNhbiB1c2UgR0VULiBPdGhlcndpc2UsIHVzZSBQT1NULlxuXG4gICAgdmFyIHN0clF1ZXJ5ID0gIWlzTXV0YXRpb24gJiYgZW5jb2RlUXVlcnlTdHJpbmcoYm9keSk7XG4gICAgdmFyIHVzZUdldCA9ICFpc011dGF0aW9uICYmIHN0clF1ZXJ5Lmxlbmd0aCA8IGdldFF1ZXJ5U2l6ZUxpbWl0O1xuICAgIHZhciBzdHJpbmdRdWVyeSA9IHVzZUdldCA/IHN0clF1ZXJ5IDogJyc7XG4gICAgdmFyIHJldHVybkZpcnN0ID0gb3B0aW9ucy5yZXR1cm5GaXJzdDtcbiAgICB2YXIgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCxcbiAgICAgICAgdG9rZW4gPSBvcHRpb25zLnRva2VuO1xuICAgIHZhciB1cmkgPSB0aGlzLmdldERhdGFVcmwoZW5kcG9pbnQsIHN0cmluZ1F1ZXJ5KTtcbiAgICB2YXIgcmVxT3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogdXNlR2V0ID8gJ0dFVCcgOiAnUE9TVCcsXG4gICAgICB1cmk6IHVyaSxcbiAgICAgIGpzb246IHRydWUsXG4gICAgICBib2R5OiB1c2VHZXQgPyB1bmRlZmluZWQgOiBib2R5LFxuICAgICAgcXVlcnk6IGlzTXV0YXRpb24gJiYgZ2V0TXV0YXRpb25RdWVyeShvcHRpb25zKSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgICB0b2tlbjogdG9rZW5cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0T2JzZXJ2YWJsZShyZXFPcHRpb25zKS5waXBlKGZpbHRlcihpc1Jlc3BvbnNlKSwgbWFwKGdldEJvZHkpLCBtYXAoZnVuY3Rpb24gKHJlcykge1xuICAgICAgaWYgKCFpc011dGF0aW9uKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9IC8vIFNob3VsZCB3ZSByZXR1cm4gZG9jdW1lbnRzP1xuXG5cbiAgICAgIHZhciByZXN1bHRzID0gcmVzLnJlc3VsdHMgfHwgW107XG5cbiAgICAgIGlmIChvcHRpb25zLnJldHVybkRvY3VtZW50cykge1xuICAgICAgICByZXR1cm4gcmV0dXJuRmlyc3QgPyByZXN1bHRzWzBdICYmIHJlc3VsdHNbMF0uZG9jdW1lbnQgOiByZXN1bHRzLm1hcChmdW5jdGlvbiAobXV0KSB7XG4gICAgICAgICAgcmV0dXJuIG11dC5kb2N1bWVudDtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFJldHVybiBhIHJlZHVjZWQgc3Vic2V0XG5cblxuICAgICAgdmFyIGtleSA9IHJldHVybkZpcnN0ID8gJ2RvY3VtZW50SWQnIDogJ2RvY3VtZW50SWRzJztcbiAgICAgIHZhciBpZHMgPSByZXR1cm5GaXJzdCA/IHJlc3VsdHNbMF0gJiYgcmVzdWx0c1swXS5pZCA6IHJlc3VsdHMubWFwKGZ1bmN0aW9uIChtdXQpIHtcbiAgICAgICAgcmV0dXJuIG11dC5pZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgIHRyYW5zYWN0aW9uSWQ6IHJlcy50cmFuc2FjdGlvbklkLFxuICAgICAgICByZXN1bHRzOiByZXN1bHRzXG4gICAgICB9LCBrZXksIGlkcyk7XG4gICAgfSkpO1xuICB9LFxuICBfY3JlYXRlOiBmdW5jdGlvbiBfY3JlYXRlKGRvYywgb3ApIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICB2YXIgbXV0YXRpb24gPSBfZGVmaW5lUHJvcGVydHkoe30sIG9wLCBkb2MpO1xuXG4gICAgdmFyIG9wdHMgPSBhc3NpZ24oe1xuICAgICAgcmV0dXJuRmlyc3Q6IHRydWUsXG4gICAgICByZXR1cm5Eb2N1bWVudHM6IHRydWVcbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhUmVxdWVzdCgnbXV0YXRlJywge1xuICAgICAgbXV0YXRpb25zOiBbbXV0YXRpb25dXG4gICAgfSwgb3B0cyk7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbmMgPSBlbmNvZGVVUklDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHF1ZXJ5ID0gX3JlZi5xdWVyeSxcbiAgICAgIF9yZWYkcGFyYW1zID0gX3JlZi5wYXJhbXMsXG4gICAgICBwYXJhbXMgPSBfcmVmJHBhcmFtcyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJHBhcmFtcyxcbiAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRvcHRpb25zO1xuICB2YXIgYmFzZSA9IFwiP3F1ZXJ5PVwiLmNvbmNhdChlbmMocXVlcnkpKTtcbiAgdmFyIHFTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZShmdW5jdGlvbiAocXMsIHBhcmFtKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHFzLCBcIiZcIikuY29uY2F0KGVuYyhcIiRcIi5jb25jYXQocGFyYW0pKSwgXCI9XCIpLmNvbmNhdChlbmMoSlNPTi5zdHJpbmdpZnkocGFyYW1zW3BhcmFtXSkpKTtcbiAgfSwgYmFzZSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKHFzLCBvcHRpb24pIHtcbiAgICAvLyBPbmx5IGluY2x1ZGUgdGhlIG9wdGlvbiBpZiBpdCBpcyB0cnV0aHlcbiAgICByZXR1cm4gb3B0aW9uc1tvcHRpb25dID8gXCJcIi5jb25jYXQocXMsIFwiJlwiKS5jb25jYXQoZW5jKG9wdGlvbiksIFwiPVwiKS5jb25jYXQoZW5jKG9wdGlvbnNbb3B0aW9uXSkpIDogcXM7XG4gIH0sIHFTdHJpbmcpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIE9ic2VydmFibGUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvbWluaW1hbCcpO1xuXG52YXIgcG9seWZpbGxlZEV2ZW50U291cmNlID0gcmVxdWlyZSgnQHNhbml0eS9ldmVudHNvdXJjZScpO1xuXG52YXIgcGljayA9IHJlcXVpcmUoJy4uL3V0aWwvcGljaycpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi91dGlsL2RlZmF1bHRzJyk7XG5cbnZhciBlbmNvZGVRdWVyeVN0cmluZyA9IHJlcXVpcmUoJy4vZW5jb2RlUXVlcnlTdHJpbmcnKTtcblxudmFyIGdlbmVyYXRlSGVscFVybCA9IHJlcXVpcmUoJ0BzYW5pdHkvZ2VuZXJhdGUtaGVscC11cmwnKTtcblxudmFyIG9uY2UgPSByZXF1aXJlKCcuLi91dGlsL29uY2UnKTtcblxudmFyIHRva2VuV2FybmluZyA9IFsnVXNpbmcgdG9rZW4gd2l0aCBsaXN0ZW5lcnMgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2Vycy4gJywgXCJGb3IgbW9yZSBpbmZvLCBzZWUgXCIuY29uY2F0KGdlbmVyYXRlSGVscFVybCgnanMtY2xpZW50LWxpc3RlbmVyLXRva2Vucy1icm93c2VyJyksIFwiLlwiKV07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbnZhciBwcmludFRva2VuV2FybmluZyA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY29uc29sZS53YXJuKHRva2VuV2FybmluZy5qb2luKCcgJykpO1xufSk7XG52YXIgaXNXaW5kb3dFdmVudFNvdXJjZSA9IEJvb2xlYW4odHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkV2ZW50U291cmNlKTtcbnZhciBFdmVudFNvdXJjZSA9IGlzV2luZG93RXZlbnRTb3VyY2UgPyB3aW5kb3cuRXZlbnRTb3VyY2UgLy8gTmF0aXZlIGJyb3dzZXIgRXZlbnRTb3VyY2VcbjogcG9seWZpbGxlZEV2ZW50U291cmNlOyAvLyBOb2RlLmpzLCBJRSBldGNcblxudmFyIHBvc3NpYmxlT3B0aW9ucyA9IFsnaW5jbHVkZVByZXZpb3VzUmV2aXNpb24nLCAnaW5jbHVkZVJlc3VsdCcsICd2aXNpYmlsaXR5JywgJ2VmZmVjdEZvcm1hdCddO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBpbmNsdWRlUmVzdWx0OiB0cnVlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RlbihxdWVyeSwgcGFyYW1zKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIG9wdGlvbnMgPSBkZWZhdWx0cyhvcHRzLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHZhciBsaXN0ZW5PcHRzID0gcGljayhvcHRpb25zLCBwb3NzaWJsZU9wdGlvbnMpO1xuICB2YXIgcXMgPSBlbmNvZGVRdWVyeVN0cmluZyh7XG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIHBhcmFtczogcGFyYW1zLFxuICAgIG9wdGlvbnM6IGxpc3Rlbk9wdHNcbiAgfSk7XG4gIHZhciBfdGhpcyRjbGllbnRDb25maWcgPSB0aGlzLmNsaWVudENvbmZpZyxcbiAgICAgIHVybCA9IF90aGlzJGNsaWVudENvbmZpZy51cmwsXG4gICAgICB0b2tlbiA9IF90aGlzJGNsaWVudENvbmZpZy50b2tlbixcbiAgICAgIHdpdGhDcmVkZW50aWFscyA9IF90aGlzJGNsaWVudENvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gIHZhciB1cmkgPSBcIlwiLmNvbmNhdCh1cmwpLmNvbmNhdCh0aGlzLmdldERhdGFVcmwoJ2xpc3RlbicsIHFzKSk7XG4gIHZhciBsaXN0ZW5Gb3IgPSBvcHRpb25zLmV2ZW50cyA/IG9wdGlvbnMuZXZlbnRzIDogWydtdXRhdGlvbiddO1xuICB2YXIgc2hvdWxkRW1pdFJlY29ubmVjdCA9IGxpc3RlbkZvci5pbmRleE9mKCdyZWNvbm5lY3QnKSAhPT0gLTE7XG5cbiAgaWYgKHRva2VuICYmIGlzV2luZG93RXZlbnRTb3VyY2UpIHtcbiAgICBwcmludFRva2VuV2FybmluZygpO1xuICB9XG5cbiAgdmFyIGVzT3B0aW9ucyA9IHt9O1xuXG4gIGlmICh0b2tlbiB8fCB3aXRoQ3JlZGVudGlhbHMpIHtcbiAgICBlc09wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0b2tlbikge1xuICAgIGVzT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgdmFyIGVzID0gZ2V0RXZlbnRTb3VyY2UoKTtcbiAgICB2YXIgcmVjb25uZWN0VGltZXI7XG4gICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgICBpZiAoc3RvcHBlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVtaXRSZWNvbm5lY3QoKTsgLy8gQWxsb3cgZXZlbnQgaGFuZGxlcnMgb2YgYGVtaXRSZWNvbm5lY3RgIHRvIGNhbmNlbC9jbG9zZSB0aGUgcmVjb25uZWN0IGF0dGVtcHRcblxuICAgICAgaWYgKHN0b3BwZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBVbmxlc3Mgd2UndmUgZXhwbGljaXRseSBzdG9wcGVkIHRoZSBFUyAoaW4gd2hpY2ggY2FzZSBgc3RvcHBlZGAgc2hvdWxkIGJlIHRydWUpLFxuICAgICAgLy8gd2Ugc2hvdWxkIG5ldmVyIGJlIGluIGEgZGlzY29ubmVjdGVkIHN0YXRlLiBCeSBkZWZhdWx0LCBFdmVudFNvdXJjZSB3aWxsIHJlY29ubmVjdFxuICAgICAgLy8gYXV0b21hdGljYWxseSwgaW4gd2hpY2ggY2FzZSBpdCBzZXRzIHJlYWR5U3RhdGUgdG8gYENPTk5FQ1RJTkdgLCBidXQgaW4gc29tZSBjYXNlc1xuICAgICAgLy8gKGxpa2Ugd2hlbiBhIGxhcHRvcCBsaWQgaXMgY2xvc2VkKSwgaXQgY2xvc2VzIHRoZSBjb25uZWN0aW9uLiBJbiB0aGVzZSBjYXNlcyB3ZSBuZWVkXG4gICAgICAvLyB0byBleHBsaWNpdGx5IHJlY29ubmVjdC5cblxuXG4gICAgICBpZiAoZXMucmVhZHlTdGF0ZSA9PT0gRXZlbnRTb3VyY2UuQ0xPU0VEKSB7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGNsZWFyVGltZW91dChyZWNvbm5lY3RUaW1lcik7XG4gICAgICAgIHJlY29ubmVjdFRpbWVyID0gc2V0VGltZW91dChvcGVuLCAxMDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2hhbm5lbEVycm9yKGVycikge1xuICAgICAgb2JzZXJ2ZXIuZXJyb3IoY29vZXJjZUVycm9yKGVycikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWVzc2FnZShldnQpIHtcbiAgICAgIHZhciBldmVudCA9IHBhcnNlRXZlbnQoZXZ0KTtcbiAgICAgIHJldHVybiBldmVudCBpbnN0YW5jZW9mIEVycm9yID8gb2JzZXJ2ZXIuZXJyb3IoZXZlbnQpIDogb2JzZXJ2ZXIubmV4dChldmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EaXNjb25uZWN0KGV2dCkge1xuICAgICAgc3RvcHBlZCA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvciwgZmFsc2UpO1xuICAgICAgZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbm5lbEVycm9yJywgb25DaGFubmVsRXJyb3IsIGZhbHNlKTtcbiAgICAgIGVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QsIGZhbHNlKTtcbiAgICAgIGxpc3RlbkZvci5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiBlcy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIG9uTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICBlcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRSZWNvbm5lY3QoKSB7XG4gICAgICBpZiAoc2hvdWxkRW1pdFJlY29ubmVjdCkge1xuICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICB0eXBlOiAncmVjb25uZWN0J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZSgpIHtcbiAgICAgIHZhciBldnMgPSBuZXcgRXZlbnRTb3VyY2UodXJpLCBlc09wdGlvbnMpO1xuICAgICAgZXZzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvciwgZmFsc2UpO1xuICAgICAgZXZzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5uZWxFcnJvcicsIG9uQ2hhbm5lbEVycm9yLCBmYWxzZSk7XG4gICAgICBldnMuYWRkRXZlbnRMaXN0ZW5lcignZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdCwgZmFsc2UpO1xuICAgICAgbGlzdGVuRm9yLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGV2cy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIG9uTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZXZzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICBlcyA9IGdldEV2ZW50U291cmNlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcDtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBwYXJzZUV2ZW50KGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgdmFyIGRhdGEgPSBldmVudC5kYXRhICYmIEpTT04ucGFyc2UoZXZlbnQuZGF0YSkgfHwge307XG4gICAgcmV0dXJuIGFzc2lnbih7XG4gICAgICB0eXBlOiBldmVudC50eXBlXG4gICAgfSwgZGF0YSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29vZXJjZUVycm9yKGVycikge1xuICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG5cbiAgdmFyIGV2dCA9IHBhcnNlRXZlbnQoZXJyKTtcbiAgcmV0dXJuIGV2dCBpbnN0YW5jZW9mIEVycm9yID8gZXZ0IDogbmV3IEVycm9yKGV4dHJhY3RFcnJvck1lc3NhZ2UoZXZ0KSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RFcnJvck1lc3NhZ2UoZXJyKSB7XG4gIGlmICghZXJyLmVycm9yKSB7XG4gICAgcmV0dXJuIGVyci5tZXNzYWdlIHx8ICdVbmtub3duIGxpc3RlbmVyIGVycm9yJztcbiAgfVxuXG4gIGlmIChlcnIuZXJyb3IuZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gZXJyLmVycm9yLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBlcnIuZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyLmVycm9yIDogSlNPTi5zdHJpbmdpZnkoZXJyLmVycm9yLCBudWxsLCAyKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGRlZXBBc3NpZ24gPSByZXF1aXJlKCdkZWVwLWFzc2lnbicpO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgZ2V0U2VsZWN0aW9uID0gcmVxdWlyZSgnLi4vdXRpbC9nZXRTZWxlY3Rpb24nKTtcblxudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi4vdmFsaWRhdG9ycycpO1xuXG52YXIgdmFsaWRhdGVPYmplY3QgPSB2YWxpZGF0ZS52YWxpZGF0ZU9iamVjdDtcbnZhciB2YWxpZGF0ZUluc2VydCA9IHZhbGlkYXRlLnZhbGlkYXRlSW5zZXJ0O1xuXG5mdW5jdGlvbiBQYXRjaChzZWxlY3Rpb24pIHtcbiAgdmFyIG9wZXJhdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgY2xpZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgdGhpcy5vcGVyYXRpb25zID0gYXNzaWduKHt9LCBvcGVyYXRpb25zKTtcbiAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG59XG5cbmFzc2lnbihQYXRjaC5wcm90b3R5cGUsIHtcbiAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUGF0Y2godGhpcy5zZWxlY3Rpb24sIGFzc2lnbih7fSwgdGhpcy5vcGVyYXRpb25zKSwgdGhpcy5jbGllbnQpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UocHJvcHMpIHtcbiAgICB2YWxpZGF0ZU9iamVjdCgnbWVyZ2UnLCBwcm9wcyk7XG4gICAgdmFyIHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2sudG9TdHJpbmcoKS5zcGxpdCgnXFxuJykuZmlsdGVyKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpO1xuICAgIH0pLnNsaWNlKDIpO1xuICAgIGNvbnNvbGUud2FybihcIlRoZSBcXFwibWVyZ2VcXFwiIHBhdGNoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlXFxuXCIuY29uY2F0KHN0YWNrLmpvaW4oJ1xcbicpKSk7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignbWVyZ2UnLCBkZWVwQXNzaWduKHRoaXMub3BlcmF0aW9ucy5tZXJnZSB8fCB7fSwgcHJvcHMpKTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzaWduKCdzZXQnLCBwcm9wcyk7XG4gIH0sXG4gIGRpZmZNYXRjaFBhdGNoOiBmdW5jdGlvbiBkaWZmTWF0Y2hQYXRjaChwcm9wcykge1xuICAgIHZhbGlkYXRlT2JqZWN0KCdkaWZmTWF0Y2hQYXRjaCcsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcy5fYXNzaWduKCdkaWZmTWF0Y2hQYXRjaCcsIHByb3BzKTtcbiAgfSxcbiAgdW5zZXQ6IGZ1bmN0aW9uIHVuc2V0KGF0dHJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnNldChhdHRycykgdGFrZXMgYW4gYXJyYXkgb2YgYXR0cmlidXRlcyB0byB1bnNldCwgbm9uLWFycmF5IGdpdmVuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vcGVyYXRpb25zID0gYXNzaWduKHt9LCB0aGlzLm9wZXJhdGlvbnMsIHtcbiAgICAgIHVuc2V0OiBhdHRyc1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzZXRJZk1pc3Npbmc6IGZ1bmN0aW9uIHNldElmTWlzc2luZyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24oJ3NldElmTWlzc2luZycsIHByb3BzKTtcbiAgfSxcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwcm9wcykge1xuICAgIHZhbGlkYXRlT2JqZWN0KCdyZXBsYWNlJywgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzLl9zZXQoJ3NldCcsIHtcbiAgICAgICQ6IHByb3BzXG4gICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaWQtbGVuZ3RoXG4gIH0sXG4gIGluYzogZnVuY3Rpb24gaW5jKHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignaW5jJywgcHJvcHMpO1xuICB9LFxuICBkZWM6IGZ1bmN0aW9uIGRlYyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24oJ2RlYycsIHByb3BzKTtcbiAgfSxcbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQoYXQsIHNlbGVjdG9yLCBpdGVtcykge1xuICAgIHZhciBfdGhpcyRfYXNzaWduO1xuXG4gICAgdmFsaWRhdGVJbnNlcnQoYXQsIHNlbGVjdG9yLCBpdGVtcyk7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignaW5zZXJ0JywgKF90aGlzJF9hc3NpZ24gPSB7fSwgX2RlZmluZVByb3BlcnR5KF90aGlzJF9hc3NpZ24sIGF0LCBzZWxlY3RvciksIF9kZWZpbmVQcm9wZXJ0eShfdGhpcyRfYXNzaWduLCBcIml0ZW1zXCIsIGl0ZW1zKSwgX3RoaXMkX2Fzc2lnbikpO1xuICB9LFxuICBhcHBlbmQ6IGZ1bmN0aW9uIGFwcGVuZChzZWxlY3RvciwgaXRlbXMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnQoJ2FmdGVyJywgXCJcIi5jb25jYXQoc2VsZWN0b3IsIFwiWy0xXVwiKSwgaXRlbXMpO1xuICB9LFxuICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKHNlbGVjdG9yLCBpdGVtcykge1xuICAgIHJldHVybiB0aGlzLmluc2VydCgnYmVmb3JlJywgXCJcIi5jb25jYXQoc2VsZWN0b3IsIFwiWzBdXCIpLCBpdGVtcyk7XG4gIH0sXG4gIHNwbGljZTogZnVuY3Rpb24gc3BsaWNlKHNlbGVjdG9yLCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zKSB7XG4gICAgLy8gTmVnYXRpdmUgaW5kZXhlcyBkb2Vzbid0IG1lYW4gdGhlIHNhbWUgaW4gU2FuaXR5IGFzIHRoZXkgZG8gaW4gSlM7XG4gICAgLy8gLTEgbWVhbnMgXCJhY3R1YWxseSBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheVwiLCB3aGljaCBhbGxvd3MgaW5zZXJ0aW5nXG4gICAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkgd2l0aG91dCBrbm93aW5nIGl0cyBsZW5ndGguIFdlIHRoZXJlZm9yZSBoYXZlXG4gICAgLy8gdG8gc3Vic3RyYWN0IG5lZ2F0aXZlIGluZGV4ZXMgYnkgb25lIHRvIG1hdGNoIEpTLiBJZiB5b3Ugd2FudCBTYW5pdHktXG4gICAgLy8gYmVoYXZpb3VyLCBqdXN0IHVzZSBgaW5zZXJ0KCdyZXBsYWNlJywgc2VsZWN0b3IsIGl0ZW1zKWAgZGlyZWN0bHlcbiAgICB2YXIgZGVsQWxsID0gdHlwZW9mIGRlbGV0ZUNvdW50ID09PSAndW5kZWZpbmVkJyB8fCBkZWxldGVDb3VudCA9PT0gLTE7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSBzdGFydCA8IDAgPyBzdGFydCAtIDEgOiBzdGFydDtcbiAgICB2YXIgZGVsQ291bnQgPSBkZWxBbGwgPyAtMSA6IE1hdGgubWF4KDAsIHN0YXJ0ICsgZGVsZXRlQ291bnQpO1xuICAgIHZhciBkZWxSYW5nZSA9IHN0YXJ0SW5kZXggPCAwICYmIGRlbENvdW50ID49IDAgPyAnJyA6IGRlbENvdW50O1xuICAgIHZhciByYW5nZVNlbGVjdG9yID0gXCJcIi5jb25jYXQoc2VsZWN0b3IsIFwiW1wiKS5jb25jYXQoc3RhcnRJbmRleCwgXCI6XCIpLmNvbmNhdChkZWxSYW5nZSwgXCJdXCIpO1xuICAgIHJldHVybiB0aGlzLmluc2VydCgncmVwbGFjZScsIHJhbmdlU2VsZWN0b3IsIGl0ZW1zIHx8IFtdKTtcbiAgfSxcbiAgaWZSZXZpc2lvbklkOiBmdW5jdGlvbiBpZlJldmlzaW9uSWQocmV2KSB7XG4gICAgdGhpcy5vcGVyYXRpb25zLmlmUmV2aXNpb25JRCA9IHJldjtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgc2VyaWFsaXplOiBmdW5jdGlvbiBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIGFzc2lnbihnZXRTZWxlY3Rpb24odGhpcy5zZWxlY3Rpb24pLCB0aGlzLm9wZXJhdGlvbnMpO1xuICB9LFxuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJpYWxpemUoKTtcbiAgfSxcbiAgY29tbWl0OiBmdW5jdGlvbiBjb21taXQoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKCF0aGlzLmNsaWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBgY2xpZW50YCBwYXNzZWQgdG8gcGF0Y2gsIGVpdGhlciBwcm92aWRlIG9uZSBvciBwYXNzIHRoZSAnICsgJ3BhdGNoIHRvIGEgY2xpZW50cyBgbXV0YXRlKClgIG1ldGhvZCcpO1xuICAgIH1cblxuICAgIHZhciByZXR1cm5GaXJzdCA9IHR5cGVvZiB0aGlzLnNlbGVjdGlvbiA9PT0gJ3N0cmluZyc7XG4gICAgdmFyIG9wdHMgPSBhc3NpZ24oe1xuICAgICAgcmV0dXJuRmlyc3Q6IHJldHVybkZpcnN0LFxuICAgICAgcmV0dXJuRG9jdW1lbnRzOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Lm11dGF0ZSh7XG4gICAgICBwYXRjaDogdGhpcy5zZXJpYWxpemUoKVxuICAgIH0sIG9wdHMpO1xuICB9LFxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5vcGVyYXRpb25zID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIF9zZXQ6IGZ1bmN0aW9uIF9zZXQob3AsIHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbihvcCwgcHJvcHMsIGZhbHNlKTtcbiAgfSxcbiAgX2Fzc2lnbjogZnVuY3Rpb24gX2Fzc2lnbihvcCwgcHJvcHMpIHtcbiAgICB2YXIgbWVyZ2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG4gICAgdmFsaWRhdGVPYmplY3Qob3AsIHByb3BzKTtcbiAgICB0aGlzLm9wZXJhdGlvbnMgPSBhc3NpZ24oe30sIHRoaXMub3BlcmF0aW9ucywgX2RlZmluZVByb3BlcnR5KHt9LCBvcCwgYXNzaWduKHt9LCBtZXJnZSAmJiB0aGlzLm9wZXJhdGlvbnNbb3BdIHx8IHt9LCBwcm9wcykpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFBhdGNoOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgdmFsaWRhdG9ycyA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMnKTtcblxudmFyIFBhdGNoID0gcmVxdWlyZSgnLi9wYXRjaCcpO1xuXG52YXIgZGVmYXVsdE11dGF0ZU9wdGlvbnMgPSB7XG4gIHJldHVybkRvY3VtZW50czogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIFRyYW5zYWN0aW9uKCkge1xuICB2YXIgb3BlcmF0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHZhciBjbGllbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIHRyYW5zYWN0aW9uSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdGhpcy50cnhJZCA9IHRyYW5zYWN0aW9uSWQ7XG4gIHRoaXMub3BlcmF0aW9ucyA9IG9wZXJhdGlvbnM7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5hc3NpZ24oVHJhbnNhY3Rpb24ucHJvdG90eXBlLCB7XG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zYWN0aW9uKHRoaXMub3BlcmF0aW9ucy5zbGljZSgwKSwgdGhpcy5jbGllbnQsIHRoaXMudHJ4SWQpO1xuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShkb2MpIHtcbiAgICB2YWxpZGF0b3JzLnZhbGlkYXRlT2JqZWN0KCdjcmVhdGUnLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9hZGQoe1xuICAgICAgY3JlYXRlOiBkb2NcbiAgICB9KTtcbiAgfSxcbiAgY3JlYXRlSWZOb3RFeGlzdHM6IGZ1bmN0aW9uIGNyZWF0ZUlmTm90RXhpc3RzKGRvYykge1xuICAgIHZhciBvcCA9ICdjcmVhdGVJZk5vdEV4aXN0cyc7XG4gICAgdmFsaWRhdG9ycy52YWxpZGF0ZU9iamVjdChvcCwgZG9jKTtcbiAgICB2YWxpZGF0b3JzLnJlcXVpcmVEb2N1bWVudElkKG9wLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9hZGQoX2RlZmluZVByb3BlcnR5KHt9LCBvcCwgZG9jKSk7XG4gIH0sXG4gIGNyZWF0ZU9yUmVwbGFjZTogZnVuY3Rpb24gY3JlYXRlT3JSZXBsYWNlKGRvYykge1xuICAgIHZhciBvcCA9ICdjcmVhdGVPclJlcGxhY2UnO1xuICAgIHZhbGlkYXRvcnMudmFsaWRhdGVPYmplY3Qob3AsIGRvYyk7XG4gICAgdmFsaWRhdG9ycy5yZXF1aXJlRG9jdW1lbnRJZChvcCwgZG9jKTtcbiAgICByZXR1cm4gdGhpcy5fYWRkKF9kZWZpbmVQcm9wZXJ0eSh7fSwgb3AsIGRvYykpO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUoZG9jdW1lbnRJZCkge1xuICAgIHZhbGlkYXRvcnMudmFsaWRhdGVEb2N1bWVudElkKCdkZWxldGUnLCBkb2N1bWVudElkKTtcbiAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgIGRlbGV0ZToge1xuICAgICAgICBpZDogZG9jdW1lbnRJZFxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBwYXRjaDogZnVuY3Rpb24gcGF0Y2goZG9jdW1lbnRJZCwgcGF0Y2hPcHMpIHtcbiAgICB2YXIgaXNCdWlsZGVyID0gdHlwZW9mIHBhdGNoT3BzID09PSAnZnVuY3Rpb24nO1xuICAgIHZhciBpc1BhdGNoID0gZG9jdW1lbnRJZCBpbnN0YW5jZW9mIFBhdGNoOyAvLyB0cmFuc2FjdGlvbi5wYXRjaChjbGllbnQucGF0Y2goJ2RvY3VtZW50SWQnKS5pbmMoe3Zpc2l0czogMX0pKVxuXG4gICAgaWYgKGlzUGF0Y2gpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hZGQoe1xuICAgICAgICBwYXRjaDogZG9jdW1lbnRJZC5zZXJpYWxpemUoKVxuICAgICAgfSk7XG4gICAgfSAvLyBwYXRjaCA9PiBwYXRjaC5pbmMoe3Zpc2l0czogMX0pLnNldCh7Zm9vOiAnYmFyJ30pXG5cblxuICAgIGlmIChpc0J1aWxkZXIpIHtcbiAgICAgIHZhciBwYXRjaCA9IHBhdGNoT3BzKG5ldyBQYXRjaChkb2N1bWVudElkLCB7fSwgdGhpcy5jbGllbnQpKTtcblxuICAgICAgaWYgKCEocGF0Y2ggaW5zdGFuY2VvZiBQYXRjaCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jdGlvbiBwYXNzZWQgdG8gYHBhdGNoKClgIG11c3QgcmV0dXJuIHRoZSBwYXRjaCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgICAgcGF0Y2g6IHBhdGNoLnNlcmlhbGl6ZSgpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgIHBhdGNoOiBhc3NpZ24oe1xuICAgICAgICBpZDogZG9jdW1lbnRJZFxuICAgICAgfSwgcGF0Y2hPcHMpXG4gICAgfSk7XG4gIH0sXG4gIHRyYW5zYWN0aW9uSWQ6IGZ1bmN0aW9uIHRyYW5zYWN0aW9uSWQoaWQpIHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gdGhpcy50cnhJZDtcbiAgICB9XG5cbiAgICB0aGlzLnRyeElkID0gaWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHNlcmlhbGl6ZTogZnVuY3Rpb24gc2VyaWFsaXplKCkge1xuICAgIHJldHVybiB0aGlzLm9wZXJhdGlvbnMuc2xpY2UoKTtcbiAgfSxcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplKCk7XG4gIH0sXG4gIGNvbW1pdDogZnVuY3Rpb24gY29tbWl0KG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuY2xpZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGBjbGllbnRgIHBhc3NlZCB0byB0cmFuc2FjdGlvbiwgZWl0aGVyIHByb3ZpZGUgb25lIG9yIHBhc3MgdGhlICcgKyAndHJhbnNhY3Rpb24gdG8gYSBjbGllbnRzIGBtdXRhdGUoKWAgbWV0aG9kJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Lm11dGF0ZSh0aGlzLnNlcmlhbGl6ZSgpLCBhc3NpZ24oe1xuICAgICAgdHJhbnNhY3Rpb25JZDogdGhpcy50cnhJZFxuICAgIH0sIGRlZmF1bHRNdXRhdGVPcHRpb25zLCBvcHRpb25zIHx8IHt9KSk7XG4gIH0sXG4gIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLm9wZXJhdGlvbnMgPSBbXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgX2FkZDogZnVuY3Rpb24gX2FkZChtdXQpIHtcbiAgICB0aGlzLm9wZXJhdGlvbnMucHVzaChtdXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gVHJhbnNhY3Rpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMnKTtcblxuZnVuY3Rpb24gRGF0YXNldHNDbGllbnQoY2xpZW50KSB7XG4gIHRoaXMucmVxdWVzdCA9IGNsaWVudC5yZXF1ZXN0LmJpbmQoY2xpZW50KTtcbn1cblxuYXNzaWduKERhdGFzZXRzQ2xpZW50LnByb3RvdHlwZSwge1xuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShuYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmeSgnUFVUJywgbmFtZSwgb3B0aW9ucyk7XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQobmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9tb2RpZnkoJ1BBVENIJywgbmFtZSwgb3B0aW9ucyk7XG4gIH0sXG4gIGRlbGV0ZTogZnVuY3Rpb24gX2RlbGV0ZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmeSgnREVMRVRFJywgbmFtZSk7XG4gIH0sXG4gIGxpc3Q6IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICB1cmk6ICcvZGF0YXNldHMnXG4gICAgfSk7XG4gIH0sXG4gIF9tb2RpZnk6IGZ1bmN0aW9uIF9tb2RpZnkobWV0aG9kLCBuYW1lLCBib2R5KSB7XG4gICAgdmFsaWRhdGUuZGF0YXNldChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJpOiBcIi9kYXRhc2V0cy9cIi5jb25jYXQobmFtZSksXG4gICAgICBib2R5OiBib2R5XG4gICAgfSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBEYXRhc2V0c0NsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBbXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1ha2VFcnJvciA9IHJlcXVpcmUoJ21ha2UtZXJyb3InKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gQ2xpZW50RXJyb3IocmVzKSB7XG4gIHZhciBwcm9wcyA9IGV4dHJhY3RFcnJvclByb3BzKHJlcyk7XG4gIENsaWVudEVycm9yLnN1cGVyLmNhbGwodGhpcywgcHJvcHMubWVzc2FnZSk7XG4gIGFzc2lnbih0aGlzLCBwcm9wcyk7XG59XG5cbmZ1bmN0aW9uIFNlcnZlckVycm9yKHJlcykge1xuICB2YXIgcHJvcHMgPSBleHRyYWN0RXJyb3JQcm9wcyhyZXMpO1xuICBTZXJ2ZXJFcnJvci5zdXBlci5jYWxsKHRoaXMsIHByb3BzLm1lc3NhZ2UpO1xuICBhc3NpZ24odGhpcywgcHJvcHMpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0RXJyb3JQcm9wcyhyZXMpIHtcbiAgdmFyIGJvZHkgPSByZXMuYm9keTtcbiAgdmFyIHByb3BzID0ge1xuICAgIHJlc3BvbnNlOiByZXMsXG4gICAgc3RhdHVzQ29kZTogcmVzLnN0YXR1c0NvZGUsXG4gICAgcmVzcG9uc2VCb2R5OiBzdHJpbmdpZnlCb2R5KGJvZHksIHJlcylcbiAgfTsgLy8gQVBJL0Jvb20gc3R5bGUgZXJyb3JzICh7c3RhdHVzQ29kZSwgZXJyb3IsIG1lc3NhZ2V9KVxuXG4gIGlmIChib2R5LmVycm9yICYmIGJvZHkubWVzc2FnZSkge1xuICAgIHByb3BzLm1lc3NhZ2UgPSBcIlwiLmNvbmNhdChib2R5LmVycm9yLCBcIiAtIFwiKS5jb25jYXQoYm9keS5tZXNzYWdlKTtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH0gLy8gUXVlcnkvZGF0YWJhc2UgZXJyb3JzICh7ZXJyb3I6IHtkZXNjcmlwdGlvbiwgb3RoZXIsIGFyYiwgcHJvcHN9fSlcblxuXG4gIGlmIChib2R5LmVycm9yICYmIGJvZHkuZXJyb3IuZGVzY3JpcHRpb24pIHtcbiAgICBwcm9wcy5tZXNzYWdlID0gYm9keS5lcnJvci5kZXNjcmlwdGlvbjtcbiAgICBwcm9wcy5kZXRhaWxzID0gYm9keS5lcnJvcjtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH0gLy8gT3RoZXIsIG1vcmUgYXJiaXRyYXJ5IGVycm9yc1xuXG5cbiAgcHJvcHMubWVzc2FnZSA9IGJvZHkuZXJyb3IgfHwgYm9keS5tZXNzYWdlIHx8IGh0dHBFcnJvck1lc3NhZ2UocmVzKTtcbiAgcmV0dXJuIHByb3BzO1xufVxuXG5mdW5jdGlvbiBodHRwRXJyb3JNZXNzYWdlKHJlcykge1xuICB2YXIgc3RhdHVzTWVzc2FnZSA9IHJlcy5zdGF0dXNNZXNzYWdlID8gXCIgXCIuY29uY2F0KHJlcy5zdGF0dXNNZXNzYWdlKSA6ICcnO1xuICByZXR1cm4gXCJcIi5jb25jYXQocmVzLm1ldGhvZCwgXCItcmVxdWVzdCB0byBcIikuY29uY2F0KHJlcy51cmwsIFwiIHJlc3VsdGVkIGluIEhUVFAgXCIpLmNvbmNhdChyZXMuc3RhdHVzQ29kZSkuY29uY2F0KHN0YXR1c01lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlCb2R5KGJvZHksIHJlcykge1xuICB2YXIgY29udGVudFR5cGUgPSAocmVzLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgaXNKc29uID0gY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMTtcbiAgcmV0dXJuIGlzSnNvbiA/IEpTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpIDogYm9keTtcbn1cblxubWFrZUVycm9yKENsaWVudEVycm9yKTtcbm1ha2VFcnJvcihTZXJ2ZXJFcnJvcik7XG5leHBvcnRzLkNsaWVudEVycm9yID0gQ2xpZW50RXJyb3I7XG5leHBvcnRzLlNlcnZlckVycm9yID0gU2VydmVyRXJyb3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB2YXIgcXMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBxcy5wdXNoKFwiXCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChrZXkpLCBcIj1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXMubGVuZ3RoID4gMCA/IFwiP1wiLmNvbmNhdChxcy5qb2luKCcmJykpIDogJyc7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eS1mdW5jdGlvbiwgbm8tcHJvY2Vzcy1lbnYgKi9cbnZhciBnZXRJdCA9IHJlcXVpcmUoJ2dldC1pdCcpO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJ2dldC1pdC9saWIvbWlkZGxld2FyZS9vYnNlcnZhYmxlJyk7XG5cbnZhciBqc29uUmVxdWVzdCA9IHJlcXVpcmUoJ2dldC1pdC9saWIvbWlkZGxld2FyZS9qc29uUmVxdWVzdCcpO1xuXG52YXIganNvblJlc3BvbnNlID0gcmVxdWlyZSgnZ2V0LWl0L2xpYi9taWRkbGV3YXJlL2pzb25SZXNwb25zZScpO1xuXG52YXIgcHJvZ3Jlc3MgPSByZXF1aXJlKCdnZXQtaXQvbGliL21pZGRsZXdhcmUvcHJvZ3Jlc3MnKTtcblxudmFyIE9ic2VydmFibGUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvbWluaW1hbCcpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2Vycm9ycycpLFxuICAgIENsaWVudEVycm9yID0gX3JlcXVpcmUuQ2xpZW50RXJyb3IsXG4gICAgU2VydmVyRXJyb3IgPSBfcmVxdWlyZS5TZXJ2ZXJFcnJvcjtcblxudmFyIGh0dHBFcnJvciA9IHtcbiAgb25SZXNwb25zZTogZnVuY3Rpb24gb25SZXNwb25zZShyZXMpIHtcbiAgICBpZiAocmVzLnN0YXR1c0NvZGUgPj0gNTAwKSB7XG4gICAgICB0aHJvdyBuZXcgU2VydmVyRXJyb3IocmVzKTtcbiAgICB9IGVsc2UgaWYgKHJlcy5zdGF0dXNDb2RlID49IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IENsaWVudEVycm9yKHJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTsgLy8gRW52aXJvbm1lbnQtc3BlY2lmaWMgbWlkZGxld2FyZS5cblxudmFyIGVudlNwZWNpZmljID0gcmVxdWlyZSgnLi9ub2RlTWlkZGxld2FyZScpO1xuXG52YXIgbWlkZGxld2FyZSA9IGVudlNwZWNpZmljLmNvbmNhdChbanNvblJlcXVlc3QoKSwganNvblJlc3BvbnNlKCksIHByb2dyZXNzKCksIGh0dHBFcnJvciwgb2JzZXJ2YWJsZSh7XG4gIGltcGxlbWVudGF0aW9uOiBPYnNlcnZhYmxlXG59KV0pO1xudmFyIHJlcXVlc3QgPSBnZXRJdChtaWRkbGV3YXJlKTtcblxuZnVuY3Rpb24gaHR0cFJlcXVlc3Qob3B0aW9ucykge1xuICB2YXIgcmVxdWVzdGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiByZXF1ZXN0O1xuICByZXR1cm4gcmVxdWVzdGVyKGFzc2lnbih7XG4gICAgbWF4UmVkaXJlY3RzOiAwXG4gIH0sIG9wdGlvbnMpKTtcbn1cblxuaHR0cFJlcXVlc3QuZGVmYXVsdFJlcXVlc3RlciA9IHJlcXVlc3Q7XG5odHRwUmVxdWVzdC5DbGllbnRFcnJvciA9IENsaWVudEVycm9yO1xuaHR0cFJlcXVlc3QuU2VydmVyRXJyb3IgPSBTZXJ2ZXJFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gaHR0cFJlcXVlc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBwcm9qZWN0SGVhZGVyID0gJ1gtU2FuaXR5LVByb2plY3QtSUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIG92ZXJyaWRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBoZWFkZXJzID0ge307XG4gIHZhciB0b2tlbiA9IG92ZXJyaWRlcy50b2tlbiB8fCBjb25maWcudG9rZW47XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuKTtcbiAgfVxuXG4gIGlmICghb3ZlcnJpZGVzLnVzZUdsb2JhbEFwaSAmJiAhY29uZmlnLnVzZVByb2plY3RIb3N0bmFtZSAmJiBjb25maWcucHJvamVjdElkKSB7XG4gICAgaGVhZGVyc1twcm9qZWN0SGVhZGVyXSA9IGNvbmZpZy5wcm9qZWN0SWQ7XG4gIH1cblxuICB2YXIgd2l0aENyZWRlbnRpYWxzID0gQm9vbGVhbih0eXBlb2Ygb3ZlcnJpZGVzLndpdGhDcmVkZW50aWFscyA9PT0gJ3VuZGVmaW5lZCcgPyBjb25maWcudG9rZW4gfHwgY29uZmlnLndpdGhDcmVkZW50aWFscyA6IG92ZXJyaWRlcy53aXRoQ3JlZGVudGlhbHMpO1xuICB2YXIgdGltZW91dCA9IHR5cGVvZiBvdmVycmlkZXMudGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgPyBjb25maWcudGltZW91dCA6IG92ZXJyaWRlcy50aW1lb3V0O1xuICByZXR1cm4gYXNzaWduKHt9LCBvdmVycmlkZXMsIHtcbiAgICBoZWFkZXJzOiBhc3NpZ24oe30sIGhlYWRlcnMsIG92ZXJyaWRlcy5oZWFkZXJzIHx8IHt9KSxcbiAgICB0aW1lb3V0OiB0eXBlb2YgdGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgPyA1ICogNjAgKiAxMDAwIDogdGltZW91dCxcbiAgICBqc29uOiB0cnVlLFxuICAgIHdpdGhDcmVkZW50aWFsczogd2l0aENyZWRlbnRpYWxzXG4gIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gUHJvamVjdHNDbGllbnQoY2xpZW50KSB7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5hc3NpZ24oUHJvamVjdHNDbGllbnQucHJvdG90eXBlLCB7XG4gIGxpc3Q6IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJpOiAnL3Byb2plY3RzJ1xuICAgIH0pO1xuICB9LFxuICBnZXRCeUlkOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJpOiBcIi9wcm9qZWN0cy9cIi5jb25jYXQoaWQpXG4gICAgfSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0c0NsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9maWx0ZXInKSxcbiAgICBmaWx0ZXIgPSBfcmVxdWlyZS5maWx0ZXI7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL21hcCcpLFxuICAgIG1hcCA9IF9yZXF1aXJlMi5tYXA7XG5cbnZhciBQYXRjaCA9IHJlcXVpcmUoJy4vZGF0YS9wYXRjaCcpO1xuXG52YXIgVHJhbnNhY3Rpb24gPSByZXF1aXJlKCcuL2RhdGEvdHJhbnNhY3Rpb24nKTtcblxudmFyIGRhdGFNZXRob2RzID0gcmVxdWlyZSgnLi9kYXRhL2RhdGFNZXRob2RzJyk7XG5cbnZhciBEYXRhc2V0c0NsaWVudCA9IHJlcXVpcmUoJy4vZGF0YXNldHMvZGF0YXNldHNDbGllbnQnKTtcblxudmFyIFByb2plY3RzQ2xpZW50ID0gcmVxdWlyZSgnLi9wcm9qZWN0cy9wcm9qZWN0c0NsaWVudCcpO1xuXG52YXIgQXNzZXRzQ2xpZW50ID0gcmVxdWlyZSgnLi9hc3NldHMvYXNzZXRzQ2xpZW50Jyk7XG5cbnZhciBVc2Vyc0NsaWVudCA9IHJlcXVpcmUoJy4vdXNlcnMvdXNlcnNDbGllbnQnKTtcblxudmFyIEF1dGhDbGllbnQgPSByZXF1aXJlKCcuL2F1dGgvYXV0aENsaWVudCcpO1xuXG52YXIgaHR0cFJlcXVlc3QgPSByZXF1aXJlKCcuL2h0dHAvcmVxdWVzdCcpO1xuXG52YXIgZ2V0UmVxdWVzdE9wdGlvbnMgPSByZXF1aXJlKCcuL2h0dHAvcmVxdWVzdE9wdGlvbnMnKTtcblxudmFyIF9yZXF1aXJlMyA9IHJlcXVpcmUoJy4vY29uZmlnJyksXG4gICAgZGVmYXVsdENvbmZpZyA9IF9yZXF1aXJlMy5kZWZhdWx0Q29uZmlnLFxuICAgIGluaXRDb25maWcgPSBfcmVxdWlyZTMuaW5pdENvbmZpZztcblxudmFyIHRvUHJvbWlzZSA9IGZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLnRvUHJvbWlzZSgpO1xufTtcblxuZnVuY3Rpb24gU2FuaXR5Q2xpZW50KCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkZWZhdWx0Q29uZmlnO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTYW5pdHlDbGllbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBTYW5pdHlDbGllbnQoY29uZmlnKTtcbiAgfVxuXG4gIHRoaXMuY29uZmlnKGNvbmZpZyk7XG4gIHRoaXMuYXNzZXRzID0gbmV3IEFzc2V0c0NsaWVudCh0aGlzKTtcbiAgdGhpcy5kYXRhc2V0cyA9IG5ldyBEYXRhc2V0c0NsaWVudCh0aGlzKTtcbiAgdGhpcy5wcm9qZWN0cyA9IG5ldyBQcm9qZWN0c0NsaWVudCh0aGlzKTtcbiAgdGhpcy51c2VycyA9IG5ldyBVc2Vyc0NsaWVudCh0aGlzKTtcbiAgdGhpcy5hdXRoID0gbmV3IEF1dGhDbGllbnQodGhpcyk7XG5cbiAgaWYgKHRoaXMuY2xpZW50Q29uZmlnLmlzUHJvbWlzZUFQSSkge1xuICAgIHZhciBvYnNlcnZhYmxlQ29uZmlnID0gYXNzaWduKHt9LCB0aGlzLmNsaWVudENvbmZpZywge1xuICAgICAgaXNQcm9taXNlQVBJOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBTYW5pdHlDbGllbnQob2JzZXJ2YWJsZUNvbmZpZyk7XG4gIH1cbn1cblxuYXNzaWduKFNhbml0eUNsaWVudC5wcm90b3R5cGUsIGRhdGFNZXRob2RzKTtcbmFzc2lnbihTYW5pdHlDbGllbnQucHJvdG90eXBlLCB7XG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFNhbml0eUNsaWVudCh0aGlzLmNvbmZpZygpKTtcbiAgfSxcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcobmV3Q29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdDb25maWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gYXNzaWduKHt9LCB0aGlzLmNsaWVudENvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2JzZXJ2YWJsZSkge1xuICAgICAgdmFyIG9ic2VydmFibGVDb25maWcgPSBhc3NpZ24oe30sIG5ld0NvbmZpZywge1xuICAgICAgICBpc1Byb21pc2VBUEk6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMub2JzZXJ2YWJsZS5jb25maWcob2JzZXJ2YWJsZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGllbnRDb25maWcgPSBpbml0Q29uZmlnKG5ld0NvbmZpZywgdGhpcy5jbGllbnRDb25maWcgfHwge30pO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBnZXRVcmw6IGZ1bmN0aW9uIGdldFVybCh1cmkpIHtcbiAgICB2YXIgY2FuVXNlQ2RuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICB2YXIgYmFzZSA9IGNhblVzZUNkbiA/IHRoaXMuY2xpZW50Q29uZmlnLmNkblVybCA6IHRoaXMuY2xpZW50Q29uZmlnLnVybDtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZSwgXCIvXCIpLmNvbmNhdCh1cmkucmVwbGFjZSgvXlxcLy8sICcnKSk7XG4gIH0sXG4gIGlzUHJvbWlzZUFQSTogZnVuY3Rpb24gaXNQcm9taXNlQVBJKCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudENvbmZpZy5pc1Byb21pc2VBUEk7XG4gIH0sXG4gIF9yZXF1ZXN0T2JzZXJ2YWJsZTogZnVuY3Rpb24gX3JlcXVlc3RPYnNlcnZhYmxlKG9wdGlvbnMpIHtcbiAgICB2YXIgdXJpID0gb3B0aW9ucy51cmwgfHwgb3B0aW9ucy51cmk7XG4gICAgdmFyIGNhblVzZUNkbiA9IHRoaXMuY2xpZW50Q29uZmlnLnVzZUNkbiAmJiBbJ0dFVCcsICdIRUFEJ10uaW5kZXhPZihvcHRpb25zLm1ldGhvZCB8fCAnR0VUJykgPj0gMCAmJiB1cmkuaW5kZXhPZignL2RhdGEvJykgPT09IDA7XG4gICAgdmFyIHJlcU9wdGlvbnMgPSBnZXRSZXF1ZXN0T3B0aW9ucyh0aGlzLmNsaWVudENvbmZpZywgYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICB1cmw6IHRoaXMuZ2V0VXJsKHVyaSwgY2FuVXNlQ2RuKVxuICAgIH0pKTtcbiAgICByZXR1cm4gaHR0cFJlcXVlc3QocmVxT3B0aW9ucywgdGhpcy5jbGllbnRDb25maWcucmVxdWVzdGVyKTtcbiAgfSxcbiAgcmVxdWVzdDogZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLl9yZXF1ZXN0T2JzZXJ2YWJsZShvcHRpb25zKS5waXBlKGZpbHRlcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmVudC50eXBlID09PSAncmVzcG9uc2UnO1xuICAgIH0pLCBtYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuYm9keTtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcy5pc1Byb21pc2VBUEkoKSA/IHRvUHJvbWlzZShvYnNlcnZhYmxlKSA6IG9ic2VydmFibGU7XG4gIH1cbn0pO1xuU2FuaXR5Q2xpZW50LlBhdGNoID0gUGF0Y2g7XG5TYW5pdHlDbGllbnQuVHJhbnNhY3Rpb24gPSBUcmFuc2FjdGlvbjtcblNhbml0eUNsaWVudC5DbGllbnRFcnJvciA9IGh0dHBSZXF1ZXN0LkNsaWVudEVycm9yO1xuU2FuaXR5Q2xpZW50LlNlcnZlckVycm9yID0gaHR0cFJlcXVlc3QuU2VydmVyRXJyb3I7XG5TYW5pdHlDbGllbnQucmVxdWVzdGVyID0gaHR0cFJlcXVlc3QuZGVmYXVsdFJlcXVlc3Rlcjtcbm1vZHVsZS5leHBvcnRzID0gU2FuaXR5Q2xpZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG5mdW5jdGlvbiBVc2Vyc0NsaWVudChjbGllbnQpIHtcbiAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG59XG5cbmFzc2lnbihVc2Vyc0NsaWVudC5wcm90b3R5cGUsIHtcbiAgZ2V0QnlJZDogZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVyaTogXCIvdXNlcnMvXCIuY29uY2F0KGlkKVxuICAgIH0pO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gVXNlcnNDbGllbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgZGVmYXVsdHMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5jb25jYXQoT2JqZWN0LmtleXMob2JqKSkucmVkdWNlKGZ1bmN0aW9uICh0YXJnZXQsIHByb3ApIHtcbiAgICB0YXJnZXRbcHJvcF0gPSB0eXBlb2Ygb2JqW3Byb3BdID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzW3Byb3BdIDogb2JqW3Byb3BdO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sIHt9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKHNlbCkge1xuICBpZiAodHlwZW9mIHNlbCA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShzZWwpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBzZWxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHNlbCAmJiBzZWwucXVlcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6IHNlbC5xdWVyeVxuICAgIH07XG4gIH1cblxuICB2YXIgc2VsZWN0aW9uT3B0cyA9IFsnKiBEb2N1bWVudCBJRCAoPGRvY0lkPiknLCAnKiBBcnJheSBvZiBkb2N1bWVudCBJRHMnLCAnKiBPYmplY3QgY29udGFpbmluZyBgcXVlcnlgJ10uam9pbignXFxuJyk7XG4gIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gc2VsZWN0aW9uIC0gbXVzdCBiZSBvbmUgb2Y6XFxuXFxuXCIuY29uY2F0KHNlbGVjdGlvbk9wdHMpKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBkaWRDYWxsID0gZmFsc2U7XG4gIHZhciByZXR1cm5WYWx1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGlkQ2FsbCkge1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cblxuICAgIHJldHVyblZhbHVlID0gZm4uYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIGRpZENhbGwgPSB0cnVlO1xuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgcHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZShmdW5jdGlvbiAoc2VsZWN0aW9uLCBwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIHNlbGVjdGlvbltwcm9wXSA9IG9ialtwcm9wXTtcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xuICB9LCB7fSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciBWQUxJRF9BU1NFVF9UWVBFUyA9IFsnaW1hZ2UnLCAnZmlsZSddO1xudmFyIFZBTElEX0lOU0VSVF9MT0NBVElPTlMgPSBbJ2JlZm9yZScsICdhZnRlcicsICdyZXBsYWNlJ107XG5cbmV4cG9ydHMuZGF0YXNldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghL15bLVxcd117MSwxMjh9JC8udGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGF0YXNldHMgY2FuIG9ubHkgY29udGFpbiBsb3dlcmNhc2UgY2hhcmFjdGVycywgbnVtYmVycywgdW5kZXJzY29yZXMgYW5kIGRhc2hlcycpO1xuICB9XG59O1xuXG5leHBvcnRzLnByb2plY3RJZCA9IGZ1bmN0aW9uIChpZCkge1xuICBpZiAoIS9eWy1hLXowLTldKyQvaS50ZXN0KGlkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYHByb2plY3RJZGAgY2FuIG9ubHkgY29udGFpbiBvbmx5IGEteiwgMC05IGFuZCBkYXNoZXMnKTtcbiAgfVxufTtcblxuZXhwb3J0cy52YWxpZGF0ZUFzc2V0VHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmIChWQUxJRF9BU1NFVF9UWVBFUy5pbmRleE9mKHR5cGUpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXNzZXQgdHlwZTogXCIuY29uY2F0KHR5cGUsIFwiLiBNdXN0IGJlIG9uZSBvZiBcIikuY29uY2F0KFZBTElEX0FTU0VUX1RZUEVTLmpvaW4oJywgJykpKTtcbiAgfVxufTtcblxuZXhwb3J0cy52YWxpZGF0ZU9iamVjdCA9IGZ1bmN0aW9uIChvcCwgdmFsKSB7XG4gIGlmICh2YWwgPT09IG51bGwgfHwgX3R5cGVvZih2YWwpICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQob3AsIFwiKCkgdGFrZXMgYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcIikpO1xuICB9XG59O1xuXG5leHBvcnRzLnJlcXVpcmVEb2N1bWVudElkID0gZnVuY3Rpb24gKG9wLCBkb2MpIHtcbiAgaWYgKCFkb2MuX2lkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG9wLCBcIigpIHJlcXVpcmVzIHRoYXQgdGhlIGRvY3VtZW50IGNvbnRhaW5zIGFuIElEIChcXFwiX2lkXFxcIiBwcm9wZXJ0eSlcIikpO1xuICB9XG5cbiAgZXhwb3J0cy52YWxpZGF0ZURvY3VtZW50SWQob3AsIGRvYy5faWQpO1xufTtcblxuZXhwb3J0cy52YWxpZGF0ZURvY3VtZW50SWQgPSBmdW5jdGlvbiAob3AsIGlkKSB7XG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8ICEvXlthLXowLTlfLi1dKyQvaS50ZXN0KGlkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChvcCwgXCIoKTogXFxcIlwiKS5jb25jYXQoaWQsIFwiXFxcIiBpcyBub3QgYSB2YWxpZCBkb2N1bWVudCBJRFwiKSk7XG4gIH1cbn07XG5cbmV4cG9ydHMudmFsaWRhdGVJbnNlcnQgPSBmdW5jdGlvbiAoYXQsIHNlbGVjdG9yLCBpdGVtcykge1xuICB2YXIgc2lnbmF0dXJlID0gJ2luc2VydChhdCwgc2VsZWN0b3IsIGl0ZW1zKSc7XG5cbiAgaWYgKFZBTElEX0lOU0VSVF9MT0NBVElPTlMuaW5kZXhPZihhdCkgPT09IC0xKSB7XG4gICAgdmFyIHZhbGlkID0gVkFMSURfSU5TRVJUX0xPQ0FUSU9OUy5tYXAoZnVuY3Rpb24gKGxvYykge1xuICAgICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdChsb2MsIFwiXFxcIlwiKTtcbiAgICB9KS5qb2luKCcsICcpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChzaWduYXR1cmUsIFwiIHRha2VzIGFuIFxcXCJhdFxcXCItYXJndW1lbnQgd2hpY2ggaXMgb25lIG9mOiBcIikuY29uY2F0KHZhbGlkKSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChzaWduYXR1cmUsIFwiIHRha2VzIGEgXFxcInNlbGVjdG9yXFxcIi1hcmd1bWVudCB3aGljaCBtdXN0IGJlIGEgc3RyaW5nXCIpKTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoc2lnbmF0dXJlLCBcIiB0YWtlcyBhbiBcXFwiaXRlbXNcXFwiLWFyZ3VtZW50IHdoaWNoIG11c3QgYmUgYW4gYXJyYXlcIikpO1xuICB9XG59O1xuXG5leHBvcnRzLmhhc0RhdGFzZXQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmICghY29uZmlnLmdyYWRpZW50TW9kZSAmJiAhY29uZmlnLmRhdGFzZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BkYXRhc2V0YCBtdXN0IGJlIHByb3ZpZGVkIHRvIHBlcmZvcm0gcXVlcmllcycpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5kYXRhc2V0IHx8ICcnO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbnZhciBldnMgPSByZXF1aXJlKCdAcmV4eGFycy9ldmVudHNvdXJjZS1wb2x5ZmlsbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkV2ZW50U291cmNlIHx8IGV2cy5FdmVudFNvdXJjZVxuIiwidmFyIGJhc2VVcmwgPSAnaHR0cHM6Ly9kb2NzLnNhbml0eS5pby9oZWxwLydcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZW5lcmF0ZUhlbHBVcmwoc2x1Zykge1xuICByZXR1cm4gYmFzZVVybCArIHNsdWdcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdyeGpzL2ludGVybmFsL09ic2VydmFibGUnKSxcbiAgICBPYnNlcnZhYmxlID0gX3JlcXVpcmUuT2JzZXJ2YWJsZTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJy4uL29wZXJhdG9ycy9tYXAnKSxcbiAgICBtYXAgPSBfcmVxdWlyZTIubWFwO1xuXG52YXIgX3JlcXVpcmUzID0gcmVxdWlyZSgnLi4vb3BlcmF0b3JzL2ZpbHRlcicpLFxuICAgIGZpbHRlciA9IF9yZXF1aXJlMy5maWx0ZXI7XG5cbnZhciBfcmVxdWlyZTQgPSByZXF1aXJlKCcuLi9vcGVyYXRvcnMvcmVkdWNlJyksXG4gICAgcmVkdWNlID0gX3JlcXVpcmU0LnJlZHVjZTtcbi8qXG4gQSBtaW5pbWFsIHJ4anMgYmFzZWQgb2JzZXJ2YWJsZSB0aGF0IGFsaWduIGFzIGNsb3NlbHkgYXMgcG9zc2libGUgd2l0aCB0aGUgY3VycmVudCBlcy1vYnNlcnZhYmxlIHNwZWMsXG4gd2l0aG91dCB0aGUgc3RhdGljIGZhY3RvcnkgbWV0aG9kc1xuICovXG5cblxuZnVuY3Rpb24gU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwoKSB7XG4gIE9ic2VydmFibGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbn1cblxuU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShhc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgT2JzZXJ2YWJsZS5wcm90b3R5cGUpKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTYW5pdHlPYnNlcnZhYmxlTWluaW1hbC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIHtcbiAgdmFsdWU6IFNhbml0eU9ic2VydmFibGVNaW5pbWFsLFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cblNhbml0eU9ic2VydmFibGVNaW5pbWFsLnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gbGlmdChvcGVyYXRvcikge1xuICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBTYW5pdHlPYnNlcnZhYmxlTWluaW1hbCgpO1xuICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgcmV0dXJuIG9ic2VydmFibGU7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEZXByZWNhdGVkTWVtYmVyT3AobmFtZSwgb3ApIHtcbiAgdmFyIGhhc1dhcm5lZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gZGVwcmVjYXRlZE9wZXJhdG9yKCkge1xuICAgIGlmICghaGFzV2FybmVkKSB7XG4gICAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcihcIkNhbGxpbmcgb2JzZXJ2YWJsZS5cIi5jb25jYXQobmFtZSwgXCIoLi4uKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG9ic2VydmFibGUucGlwZShcIikuY29uY2F0KG5hbWUsIFwiKC4uLikpIGluc3RlYWRcIikpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5waXBlKG9wLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5TYW5pdHlPYnNlcnZhYmxlTWluaW1hbC5wcm90b3R5cGUubWFwID0gY3JlYXRlRGVwcmVjYXRlZE1lbWJlck9wKCdtYXAnLCBtYXApO1xuU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwucHJvdG90eXBlLmZpbHRlciA9IGNyZWF0ZURlcHJlY2F0ZWRNZW1iZXJPcCgnZmlsdGVyJywgZmlsdGVyKTtcblNhbml0eU9ic2VydmFibGVNaW5pbWFsLnByb3RvdHlwZS5yZWR1Y2UgPSBjcmVhdGVEZXByZWNhdGVkTWVtYmVyT3AoJ2ZpbHRlcicsIHJlZHVjZSk7XG5tb2R1bGUuZXhwb3J0cyA9IFNhbml0eU9ic2VydmFibGVNaW5pbWFsOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwnKVxuIiwiZXhwb3J0cy5maWx0ZXIgPSByZXF1aXJlKCdyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXInKS5maWx0ZXJcbiIsImV4cG9ydHMubWFwID0gcmVxdWlyZSgncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwJykubWFwXG4iLCJleHBvcnRzLnJlZHVjZSA9IHJlcXVpcmUoJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3JlZHVjZScpLnJlZHVjZVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqID0gcmVxdWlyZSgnaXMtb2JqJyk7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1NvdXJjZXMgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbktleSh0bywgZnJvbSwga2V5KSB7XG5cdHZhciB2YWwgPSBmcm9tW2tleV07XG5cblx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHRvLCBrZXkpKSB7XG5cdFx0aWYgKHRvW2tleV0gPT09IHVuZGVmaW5lZCB8fCB0b1trZXldID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QgKCcgKyBrZXkgKyAnKScpO1xuXHRcdH1cblx0fVxuXG5cdGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0bywga2V5KSB8fCAhaXNPYmoodmFsKSkge1xuXHRcdHRvW2tleV0gPSB2YWw7XG5cdH0gZWxzZSB7XG5cdFx0dG9ba2V5XSA9IGFzc2lnbihPYmplY3QodG9ba2V5XSksIGZyb21ba2V5XSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXNzaWduKHRvLCBmcm9tKSB7XG5cdGlmICh0byA9PT0gZnJvbSkge1xuXHRcdHJldHVybiB0bztcblx0fVxuXG5cdGZyb20gPSBPYmplY3QoZnJvbSk7XG5cblx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRhc3NpZ25LZXkodG8sIGZyb20sIGtleSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHR2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0YXNzaWduS2V5KHRvLCBmcm9tLCBzeW1ib2xzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVlcEFzc2lnbih0YXJnZXQpIHtcblx0dGFyZ2V0ID0gdG9PYmplY3QodGFyZ2V0KTtcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGFzc2lnbih0YXJnZXQsIGFyZ3VtZW50c1tzXSk7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWItbm9kZScpXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWJzdWIgPSByZXF1aXJlKCduYW5vLXB1YnN1YicpO1xudmFyIG1pZGRsZXdhcmVSZWR1Y2VyID0gcmVxdWlyZSgnLi91dGlsL21pZGRsZXdhcmVSZWR1Y2VyJyk7XG52YXIgcHJvY2Vzc09wdGlvbnMgPSByZXF1aXJlKCcuL21pZGRsZXdhcmUvZGVmYXVsdE9wdGlvbnNQcm9jZXNzb3InKTtcbnZhciB2YWxpZGF0ZU9wdGlvbnMgPSByZXF1aXJlKCcuL21pZGRsZXdhcmUvZGVmYXVsdE9wdGlvbnNWYWxpZGF0b3InKTtcbnZhciBodHRwUmVxdWVzdCA9IHJlcXVpcmUoJy4vcmVxdWVzdCcpOyAvLyBub2RlLXJlcXVlc3QgaW4gbm9kZSwgYnJvd3Nlci1yZXF1ZXN0IGluIGJyb3dzZXJzXG5cbnZhciBjaGFubmVsTmFtZXMgPSBbJ3JlcXVlc3QnLCAncmVzcG9uc2UnLCAncHJvZ3Jlc3MnLCAnZXJyb3InLCAnYWJvcnQnXTtcbnZhciBtaWRkbGVob29rcyA9IFsncHJvY2Vzc09wdGlvbnMnLCAndmFsaWRhdGVPcHRpb25zJywgJ2ludGVyY2VwdFJlcXVlc3QnLCAnZmluYWxpemVPcHRpb25zJywgJ29uUmVxdWVzdCcsICdvblJlc3BvbnNlJywgJ29uRXJyb3InLCAnb25SZXR1cm4nLCAnb25IZWFkZXJzJ107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUmVxdWVzdGVyKCkge1xuICB2YXIgaW5pdE1pZGRsZXdhcmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuXG4gIHZhciBsb2FkZWRNaWRkbGV3YXJlID0gW107XG4gIHZhciBtaWRkbGV3YXJlID0gbWlkZGxlaG9va3MucmVkdWNlKGZ1bmN0aW9uICh3YXJlLCBuYW1lKSB7XG4gICAgd2FyZVtuYW1lXSA9IHdhcmVbbmFtZV0gfHwgW107XG4gICAgcmV0dXJuIHdhcmU7XG4gIH0sIHtcbiAgICBwcm9jZXNzT3B0aW9uczogW3Byb2Nlc3NPcHRpb25zXSxcbiAgICB2YWxpZGF0ZU9wdGlvbnM6IFt2YWxpZGF0ZU9wdGlvbnNdXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlcXVlc3Qob3B0cykge1xuICAgIHZhciBjaGFubmVscyA9IGNoYW5uZWxOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gcHVic3ViKCk7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sIHt9KTtcblxuICAgIC8vIFByZXBhcmUgYSBtaWRkbGV3YXJlIHJlZHVjZXIgdGhhdCBjYW4gYmUgcmV1c2VkIHRocm91Z2hvdXQgdGhlIGxpZmVjeWNsZVxuICAgIHZhciBhcHBseU1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlUmVkdWNlcihtaWRkbGV3YXJlKTtcblxuICAgIC8vIFBhcnNlIHRoZSBwYXNzZWQgb3B0aW9uc1xuICAgIHZhciBvcHRpb25zID0gYXBwbHlNaWRkbGV3YXJlKCdwcm9jZXNzT3B0aW9ucycsIG9wdHMpO1xuXG4gICAgLy8gVmFsaWRhdGUgdGhlIG9wdGlvbnNcbiAgICBhcHBseU1pZGRsZXdhcmUoJ3ZhbGlkYXRlT3B0aW9ucycsIG9wdGlvbnMpO1xuXG4gICAgLy8gQnVpbGQgYSBjb250ZXh0IG9iamVjdCB3ZSBjYW4gcGFzcyB0byBjaGlsZCBoYW5kbGVyc1xuICAgIHZhciBjb250ZXh0ID0geyBvcHRpb25zOiBvcHRpb25zLCBjaGFubmVsczogY2hhbm5lbHMsIGFwcGx5TWlkZGxld2FyZTogYXBwbHlNaWRkbGV3YXJlXG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gaG9sZCBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCwgb25nb2luZyByZXF1ZXN0LFxuICAgICAgLy8gaW4gb3JkZXIgdG8gYWxsb3cgY2FuY2VsbGF0aW9uLiBJbiB0aGUgY2FzZSBvZiB0aGUgcmV0cnkgbWlkZGxld2FyZSxcbiAgICAgIC8vIGEgbmV3IHJlcXVlc3QgbWlnaHQgYmUgdHJpZ2dlcmVkXG4gICAgfTt2YXIgb25nb2luZ1JlcXVlc3QgPSBudWxsO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IGNoYW5uZWxzLnJlcXVlc3Quc3Vic2NyaWJlKGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgIC8vIExldCByZXF1ZXN0IGFkYXB0ZXJzIChub2RlL2Jyb3dzZXIpIHBlcmZvcm0gdGhlIGFjdHVhbCByZXF1ZXN0XG4gICAgICBvbmdvaW5nUmVxdWVzdCA9IGh0dHBSZXF1ZXN0KGN0eCwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgIHJldHVybiBvblJlc3BvbnNlKGVyciwgcmVzLCBjdHgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB3ZSBhYm9ydCB0aGUgcmVxdWVzdCwgcHJldmVudCBmdXJ0aGVyIHJlcXVlc3RzIGZyb20gaGFwcGVuaW5nLFxuICAgIC8vIGFuZCBiZSBzdXJlIHRvIGNhbmNlbCBhbnkgb25nb2luZyByZXF1ZXN0IChvYnZpb3VzbHkpXG4gICAgY2hhbm5lbHMuYWJvcnQuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAob25nb2luZ1JlcXVlc3QpIHtcbiAgICAgICAgb25nb2luZ1JlcXVlc3QuYWJvcnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNlZSBpZiBhbnkgbWlkZGxld2FyZSB3YW50cyB0byBtb2RpZnkgdGhlIHJldHVybiB2YWx1ZSAtIGZvciBpbnN0YW5jZVxuICAgIC8vIHRoZSBwcm9taXNlIG9yIG9ic2VydmFibGUgbWlkZGxld2FyZXNcbiAgICB2YXIgcmV0dXJuVmFsdWUgPSBhcHBseU1pZGRsZXdhcmUoJ29uUmV0dXJuJywgY2hhbm5lbHMsIGNvbnRleHQpO1xuXG4gICAgLy8gSWYgcmV0dXJuIHZhbHVlIGhhcyBiZWVuIG1vZGlmaWVkIGJ5IGEgbWlkZGxld2FyZSwgd2UgZXhwZWN0IHRoZSBtaWRkbGV3YXJlXG4gICAgLy8gdG8gcHVibGlzaCBvbiB0aGUgJ3JlcXVlc3QnIGNoYW5uZWwuIElmIGl0IGhhc24ndCBiZWVuIG1vZGlmaWVkLCB3ZSB3YW50IHRvXG4gICAgLy8gdHJpZ2dlciBpdCByaWdodCBhd2F5XG4gICAgaWYgKHJldHVyblZhbHVlID09PSBjaGFubmVscykge1xuICAgICAgY2hhbm5lbHMucmVxdWVzdC5wdWJsaXNoKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcblxuICAgIGZ1bmN0aW9uIG9uUmVzcG9uc2UocmVxRXJyLCByZXMsIGN0eCkge1xuICAgICAgdmFyIGVycm9yID0gcmVxRXJyO1xuICAgICAgdmFyIHJlc3BvbnNlID0gcmVzO1xuXG4gICAgICAvLyBXZSdyZSBwcm9jZXNzaW5nIG5vbi1lcnJvcnMgZmlyc3QsIGluIGNhc2UgYSBtaWRkbGV3YXJlIGNvbnZlcnRzIHRoZVxuICAgICAgLy8gcmVzcG9uc2UgaW50byBhbiBlcnJvciAoZm9yIGluc3RhbmNlLCBzdGF0dXMgPj0gNDAwID09IEh0dHBFcnJvcilcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNwb25zZSA9IGFwcGx5TWlkZGxld2FyZSgnb25SZXNwb25zZScsIHJlcywgY3R4KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBudWxsO1xuICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGVycm9yIG1pZGRsZXdhcmUgLSBpZiBtaWRkbGV3YXJlIHJldHVybiB0aGUgc2FtZSAob3IgYSBkaWZmZXJlbnQpIGVycm9yLFxuICAgICAgLy8gcHVibGlzaCBhcyBhbiBlcnJvciBldmVudC4gSWYgd2UgKmRvbid0KiByZXR1cm4gYW4gZXJyb3IsIGFzc3VtZSBpdCBoYXMgYmVlbiBoYW5kbGVkXG4gICAgICBlcnJvciA9IGVycm9yICYmIGFwcGx5TWlkZGxld2FyZSgnb25FcnJvcicsIGVycm9yLCBjdHgpO1xuXG4gICAgICAvLyBGaWd1cmUgb3V0IGlmIHdlIHNob3VsZCBwdWJsaXNoIG9uIGVycm9yL3Jlc3BvbnNlIGNoYW5uZWxzXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2hhbm5lbHMuZXJyb3IucHVibGlzaChlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIGNoYW5uZWxzLnJlc3BvbnNlLnB1Ymxpc2gocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3QudXNlID0gZnVuY3Rpb24gdXNlKG5ld01pZGRsZXdhcmUpIHtcbiAgICBpZiAoIW5ld01pZGRsZXdhcmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gYWRkIG1pZGRsZXdhcmUgdGhhdCByZXNvbHZlZCB0byBmYWxzZXkgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5ld01pZGRsZXdhcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gYWRkIG1pZGRsZXdhcmUgdGhhdCB3YXMgYSBmdW5jdGlvbi4gSXQgcHJvYmFibHkgZXhwZWN0cyB5b3UgdG8gcGFzcyBvcHRpb25zIHRvIGl0LicpO1xuICAgIH1cblxuICAgIGlmIChuZXdNaWRkbGV3YXJlLm9uUmV0dXJuICYmIG1pZGRsZXdhcmUub25SZXR1cm4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmllZCB0byBhZGQgbmV3IG1pZGRsZXdhcmUgd2l0aCBgb25SZXR1cm5gIGhhbmRsZXIsIGJ1dCBhbm90aGVyIGhhbmRsZXIgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIGZvciB0aGlzIGV2ZW50Jyk7XG4gICAgfVxuXG4gICAgbWlkZGxlaG9va3MuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAobmV3TWlkZGxld2FyZVtrZXldKSB7XG4gICAgICAgIG1pZGRsZXdhcmVba2V5XS5wdXNoKG5ld01pZGRsZXdhcmVba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsb2FkZWRNaWRkbGV3YXJlLnB1c2gobmV3TWlkZGxld2FyZSk7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH07XG5cbiAgcmVxdWVzdC5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBjcmVhdGVSZXF1ZXN0ZXIobG9hZGVkTWlkZGxld2FyZSk7XG4gIH07XG5cbiAgaW5pdE1pZGRsZXdhcmUuZm9yRWFjaChyZXF1ZXN0LnVzZSk7XG5cbiAgcmV0dXJuIHJlcXVlc3Q7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIHVybFBhcnNlID0gcmVxdWlyZSgndXJsLXBhcnNlJyk7XG5cbnZhciBpc1JlYWN0TmF0aXZlID0gdHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHsgdGltZW91dDogaXNSZWFjdE5hdGl2ZSA/IDYwMDAwIDogMTIwMDAwIH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycgPyBvYmplY3RBc3NpZ24oeyB1cmw6IG9wdHMgfSwgZGVmYXVsdE9wdGlvbnMpIDogb2JqZWN0QXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG5cbiAgLy8gUGFyc2UgVVJMIGludG8gcGFydHNcbiAgdmFyIHVybCA9IHVybFBhcnNlKG9wdGlvbnMudXJsLCB7fSwgLy8gRG9uJ3QgdXNlIGN1cnJlbnQgYnJvd3NlciBsb2NhdGlvblxuICB0cnVlIC8vIFBhcnNlIHF1ZXJ5IHN0cmluZ3NcbiAgKTtcblxuICAvLyBOb3JtYWxpemUgdGltZW91dHNcbiAgb3B0aW9ucy50aW1lb3V0ID0gbm9ybWFsaXplVGltZW91dChvcHRpb25zLnRpbWVvdXQpO1xuXG4gIC8vIFNoYWxsb3ctbWVyZ2UgKG92ZXJyaWRlKSBleGlzdGluZyBxdWVyeSBwYXJhbXNcbiAgaWYgKG9wdGlvbnMucXVlcnkpIHtcbiAgICB1cmwucXVlcnkgPSBvYmplY3RBc3NpZ24oe30sIHVybC5xdWVyeSwgcmVtb3ZlVW5kZWZpbmVkKG9wdGlvbnMucXVlcnkpKTtcbiAgfVxuXG4gIC8vIEltcGxpY2l0IFBPU1QgaWYgd2UgaGF2ZSBub3Qgc3BlY2lmaWVkIGEgbWV0aG9kIGJ1dCBoYXZlIGEgYm9keVxuICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMuYm9keSAmJiAhb3B0aW9ucy5tZXRob2QgPyAnUE9TVCcgOiAob3B0aW9ucy5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG5cbiAgLy8gU3RyaW5naWZ5IFVSTFxuICBvcHRpb25zLnVybCA9IHVybC50b1N0cmluZyhzdHJpbmdpZnlRdWVyeVN0cmluZyk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeVN0cmluZyhvYmopIHtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICBwdXNoKGtleSwgb2JqW2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWlycy5sZW5ndGggPyBwYWlycy5qb2luKCcmJykgOiAnJztcblxuICBmdW5jdGlvbiBwdXNoKGtleSwgdmFsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFsLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHB1c2goa2V5LCBpdGVtKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbF0ubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignPScpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVGltZW91dCh0aW1lKSB7XG4gIGlmICh0aW1lID09PSBmYWxzZSB8fCB0aW1lID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRpbWUuY29ubmVjdCB8fCB0aW1lLnNvY2tldCkge1xuICAgIHJldHVybiB0aW1lO1xuICB9XG5cbiAgdmFyIGRlbGF5ID0gTnVtYmVyKHRpbWUpO1xuICBpZiAoaXNOYU4oZGVsYXkpKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVRpbWVvdXQoZGVmYXVsdE9wdGlvbnMudGltZW91dCk7XG4gIH1cblxuICByZXR1cm4geyBjb25uZWN0OiBkZWxheSwgc29ja2V0OiBkZWxheSB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVVbmRlZmluZWQob2JqKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChvYmpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdE9wdGlvbnNQcm9jZXNzb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2YWxpZFVybCA9IC9eaHR0cHM/OlxcL1xcLy9pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmICghdmFsaWRVcmwudGVzdChvcHRpb25zLnVybCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXFwiXCIgKyBvcHRpb25zLnVybCArIFwiXFxcIiBpcyBub3QgYSB2YWxpZCBVUkxcIik7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0T3B0aW9uc1ZhbGlkYXRvci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnaXMtcGxhaW4tb2JqZWN0Jyk7XG5cbnZhciBzZXJpYWxpemVUeXBlcyA9IFsnYm9vbGVhbicsICdzdHJpbmcnLCAnbnVtYmVyJ107XG52YXIgaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9jZXNzT3B0aW9uczogZnVuY3Rpb24gcHJvY2Vzc09wdGlvbnMob3B0aW9ucykge1xuICAgICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc1N0cmVhbSA9IHR5cGVvZiBib2R5LnBpcGUgPT09ICdmdW5jdGlvbic7XG4gICAgICB2YXIgc2hvdWxkU2VyaWFsaXplID0gIWlzU3RyZWFtICYmICFpc0J1ZmZlcihib2R5KSAmJiAoc2VyaWFsaXplVHlwZXMuaW5kZXhPZih0eXBlb2YgYm9keSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYm9keSkpICE9PSAtMSB8fCBBcnJheS5pc0FycmF5KGJvZHkpIHx8IGlzUGxhaW5PYmplY3QoYm9keSkpO1xuXG4gICAgICBpZiAoIXNob3VsZFNlcmlhbGl6ZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iamVjdEFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zLmJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBvYmplY3RBc3NpZ24oe30sIG9wdGlvbnMuaGVhZGVycywge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc29uUmVxdWVzdC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgcmV0dXJuIHtcbiAgICBvblJlc3BvbnNlOiBmdW5jdGlvbiBvblJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzWydjb250ZW50LXR5cGUnXSB8fCAnJztcbiAgICAgIHZhciBzaG91bGREZWNvZGUgPSBvcHRzICYmIG9wdHMuZm9yY2UgfHwgY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMTtcbiAgICAgIGlmICghcmVzcG9uc2UuYm9keSB8fCAhY29udGVudFR5cGUgfHwgIXNob3VsZERlY29kZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmplY3RBc3NpZ24oe30sIHJlc3BvbnNlLCB7IGJvZHk6IHRyeVBhcnNlKHJlc3BvbnNlLmJvZHkpIH0pO1xuICAgIH0sXG5cbiAgICBwcm9jZXNzT3B0aW9uczogZnVuY3Rpb24gcHJvY2Vzc09wdGlvbnMob3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9iamVjdEFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBoZWFkZXJzOiBvYmplY3RBc3NpZ24oeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCBvcHRpb25zLmhlYWRlcnMpXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiB0cnlQYXJzZShib2R5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoYm9keSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVyci5tZXNzYWdlID0gJ0ZhaWxlZCB0byBwYXJzZWQgcmVzcG9uc2UgYm9keSBhcyBKU09OOiAnICsgZXJyLm1lc3NhZ2U7XG4gICAgdGhyb3cgZXJyO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc29uUmVzcG9uc2UuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vdXRpbC9nbG9iYWwnKTtcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIE9ic2VydmFibGUgPSBvcHRzLmltcGxlbWVudGF0aW9uIHx8IGdsb2JhbC5PYnNlcnZhYmxlO1xuICBpZiAoIU9ic2VydmFibGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BPYnNlcnZhYmxlYCBpcyBub3QgYXZhaWxhYmxlIGluIGdsb2JhbCBzY29wZSwgYW5kIG5vIGltcGxlbWVudGF0aW9uIHdhcyBwYXNzZWQnKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25SZXR1cm46IGZ1bmN0aW9uIG9uUmV0dXJuKGNoYW5uZWxzLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIGNoYW5uZWxzLmVycm9yLnN1YnNjcmliZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGFubmVscy5wcm9ncmVzcy5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQob2JqZWN0QXNzaWduKHsgdHlwZTogJ3Byb2dyZXNzJyB9LCBldmVudCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hhbm5lbHMucmVzcG9uc2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQob2JqZWN0QXNzaWduKHsgdHlwZTogJ3Jlc3BvbnNlJyB9LCByZXNwb25zZSkpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoYW5uZWxzLnJlcXVlc3QucHVibGlzaChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY2hhbm5lbHMuYWJvcnQucHVibGlzaCgpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBvblJlcXVlc3Q6IGZ1bmN0aW9uIG9uUmVxdWVzdChldnQpIHtcbiAgICAgIGlmIChldnQuYWRhcHRlciAhPT0gJ3hocicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgeGhyID0gZXZ0LnJlcXVlc3Q7XG4gICAgICB2YXIgY29udGV4dCA9IGV2dC5jb250ZXh0O1xuXG4gICAgICBpZiAoJ3VwbG9hZCcgaW4geGhyICYmICdvbnByb2dyZXNzJyBpbiB4aHIudXBsb2FkKSB7XG4gICAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzKCd1cGxvYWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdvbnByb2dyZXNzJyBpbiB4aHIpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcygnZG93bmxvYWQnKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3Moc3RhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHZhciBwZXJjZW50ID0gZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSA/IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICogMTAwIDogLTE7XG4gICAgICAgICAgY29udGV4dC5jaGFubmVscy5wcm9ncmVzcy5wdWJsaXNoKHtcbiAgICAgICAgICAgIHN0YWdlOiBzdGFnZSxcbiAgICAgICAgICAgIHBlcmNlbnQ6IHBlcmNlbnQsXG4gICAgICAgICAgICB0b3RhbDogZXZlbnQudG90YWwsXG4gICAgICAgICAgICBsb2FkZWQ6IGV2ZW50LmxvYWRlZCxcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IGV2ZW50Lmxlbmd0aENvbXB1dGFibGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wcm9ncmVzcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLXByb2dyZXNzJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBtYXgtZGVwdGg6IFtcImVycm9yXCIsIDRdICovXG52YXIgc2FtZU9yaWdpbiA9IHJlcXVpcmUoJ3NhbWUtb3JpZ2luJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgncGFyc2UtaGVhZGVycycpO1xudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge1xuICAvKiBpbnRlbnRpb25hbCBub29wICovXG59O1xuXG52YXIgd2luID0gd2luZG93O1xudmFyIFhtbEh0dHBSZXF1ZXN0ID0gd2luLlhNTEh0dHBSZXF1ZXN0IHx8IG5vb3A7XG52YXIgaGFzWGhyMiA9ICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYbWxIdHRwUmVxdWVzdCgpO1xudmFyIFhEb21haW5SZXF1ZXN0ID0gaGFzWGhyMiA/IFhtbEh0dHBSZXF1ZXN0IDogd2luLlhEb21haW5SZXF1ZXN0O1xudmFyIGFkYXB0ZXIgPSAneGhyJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgdmFyIG9wdHMgPSBjb250ZXh0Lm9wdGlvbnM7XG4gIHZhciBvcHRpb25zID0gY29udGV4dC5hcHBseU1pZGRsZXdhcmUoJ2ZpbmFsaXplT3B0aW9ucycsIG9wdHMpO1xuICB2YXIgdGltZXJzID0ge307XG5cbiAgLy8gRGVlcC1jaGVja2luZyB3aW5kb3cubG9jYXRpb24gYmVjYXVzZSBvZiByZWFjdCBuYXRpdmUsIHdoZXJlIGBsb2NhdGlvbmAgZG9lc24ndCBleGlzdFxuICB2YXIgY29ycyA9IHdpbiAmJiB3aW4ubG9jYXRpb24gJiYgIXNhbWVPcmlnaW4od2luLmxvY2F0aW9uLmhyZWYsIG9wdGlvbnMudXJsKTtcblxuICAvLyBBbGxvdyBtaWRkbGV3YXJlIHRvIGluamVjdCBhIHJlc3BvbnNlLCBmb3IgaW5zdGFuY2UgaW4gdGhlIGNhc2Ugb2YgY2FjaGluZyBvciBtb2NraW5nXG4gIHZhciBpbmplY3RlZFJlc3BvbnNlID0gY29udGV4dC5hcHBseU1pZGRsZXdhcmUoJ2ludGVyY2VwdFJlcXVlc3QnLCB1bmRlZmluZWQsIHtcbiAgICBhZGFwdGVyOiBhZGFwdGVyLFxuICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgfSk7XG5cbiAgLy8gSWYgbWlkZGxld2FyZSBpbmplY3RlZCBhIHJlc3BvbnNlLCB0cmVhdCBpdCBhcyB3ZSBub3JtYWxseSB3b3VsZCBhbmQgcmV0dXJuIGl0XG4gIC8vIERvIG5vdGUgdGhhdCB0aGUgaW5qZWN0ZWQgcmVzcG9uc2UgaGFzIHRvIGJlIHJlZHVjZWQgdG8gYSBjcm9zcy1lbnZpcm9ubWVudCBmcmllbmRseSByZXNwb25zZVxuICBpZiAoaW5qZWN0ZWRSZXNwb25zZSkge1xuICAgIHZhciBjYlRpbWVyID0gc2V0VGltZW91dChjYWxsYmFjaywgMCwgbnVsbCwgaW5qZWN0ZWRSZXNwb25zZSk7XG4gICAgdmFyIGNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoY2JUaW1lcik7XG4gICAgfTtcbiAgICByZXR1cm4geyBhYm9ydDogY2FuY2VsIH07XG4gIH1cblxuICAvLyBXZSdsbCB3YW50IHRvIG51bGwgb3V0IHRoZSByZXF1ZXN0IG9uIHN1Y2Nlc3MvZmFpbHVyZVxuICB2YXIgeGhyID0gY29ycyA/IG5ldyBYRG9tYWluUmVxdWVzdCgpIDogbmV3IFhtbEh0dHBSZXF1ZXN0KCk7XG5cbiAgdmFyIGlzWGRyID0gd2luLlhEb21haW5SZXF1ZXN0ICYmIHhociBpbnN0YW5jZW9mIHdpbi5YRG9tYWluUmVxdWVzdDtcbiAgdmFyIGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG5cbiAgLy8gUmVxdWVzdCBzdGF0ZVxuICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIHZhciB0aW1lZE91dCA9IGZhbHNlO1xuXG4gIC8vIEFwcGx5IGV2ZW50IGhhbmRsZXJzXG4gIHhoci5vbmVycm9yID0gb25FcnJvcjtcbiAgeGhyLm9udGltZW91dCA9IG9uRXJyb3I7XG4gIHhoci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgIGFib3J0ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8vIElFOSBtdXN0IGhhdmUgb25wcm9ncmVzcyBiZSBzZXQgdG8gYSB1bmlxdWUgZnVuY3Rpb25cbiAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyogaW50ZW50aW9uYWwgbm9vcCAqL1xuICB9O1xuXG4gIHZhciBsb2FkRXZlbnQgPSBpc1hkciA/ICdvbmxvYWQnIDogJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gIHhocltsb2FkRXZlbnRdID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByZXZlbnQgcmVxdWVzdCBmcm9tIHRpbWluZyBvdXRcbiAgICByZXNldFRpbWVycygpO1xuXG4gICAgaWYgKGFib3J0ZWQgfHwgeGhyLnJlYWR5U3RhdGUgIT09IDQgJiYgIWlzWGRyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2lsbCBiZSBoYW5kbGVkIGJ5IG9uRXJyb3JcbiAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uTG9hZCgpO1xuICB9O1xuXG4gIC8vIEB0b2RvIHR3byBsYXN0IG9wdGlvbnMgdG8gb3BlbigpIGlzIHVzZXJuYW1lL3Bhc3N3b3JkXG4gIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSAvLyBBbHdheXMgYXN5bmNcbiAgKTtcblxuICAvLyBTb21lIG9wdGlvbnMgbmVlZCB0byBiZSBhcHBsaWVkIGFmdGVyIG9wZW5cbiAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG5cbiAgLy8gU2V0IGhlYWRlcnNcbiAgaWYgKGhlYWRlcnMgJiYgeGhyLnNldFJlcXVlc3RIZWFkZXIpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gaGVhZGVycykge1xuICAgICAgaWYgKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGhlYWRlcnMgJiYgaXNYZHIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlYWRlcnMgY2Fubm90IGJlIHNldCBvbiBhbiBYRG9tYWluUmVxdWVzdCBvYmplY3QnKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJhd0JvZHkpIHtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgfVxuXG4gIC8vIExldCBtaWRkbGV3YXJlIGtub3cgd2UncmUgYWJvdXQgdG8gZG8gYSByZXF1ZXN0XG4gIGNvbnRleHQuYXBwbHlNaWRkbGV3YXJlKCdvblJlcXVlc3QnLCB7IG9wdGlvbnM6IG9wdGlvbnMsIGFkYXB0ZXI6IGFkYXB0ZXIsIHJlcXVlc3Q6IHhociwgY29udGV4dDogY29udGV4dCB9KTtcblxuICB4aHIuc2VuZChvcHRpb25zLmJvZHkgfHwgbnVsbCk7XG5cbiAgLy8gRmlndXJlIG91dCB3aGljaCB0aW1lb3V0cyB0byB1c2UgKGlmIGFueSlcbiAgdmFyIGRlbGF5cyA9IG9wdGlvbnMudGltZW91dDtcbiAgaWYgKGRlbGF5cykge1xuICAgIHRpbWVycy5jb25uZWN0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGltZW91dFJlcXVlc3QoJ0VUSU1FRE9VVCcpO1xuICAgIH0sIGRlbGF5cy5jb25uZWN0KTtcbiAgfVxuXG4gIHJldHVybiB7IGFib3J0OiBhYm9ydCB9O1xuXG4gIGZ1bmN0aW9uIGFib3J0KCkge1xuICAgIGFib3J0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHhocikge1xuICAgICAgeGhyLmFib3J0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGltZW91dFJlcXVlc3QoY29kZSkge1xuICAgIHRpbWVkT3V0ID0gdHJ1ZTtcbiAgICB4aHIuYWJvcnQoKTtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoY29kZSA9PT0gJ0VTT0NLRVRUSU1FRE9VVCcgPyAnU29ja2V0IHRpbWVkIG91dCBvbiByZXF1ZXN0IHRvICcgKyBvcHRpb25zLnVybCA6ICdDb25uZWN0aW9uIHRpbWVkIG91dCBvbiByZXF1ZXN0IHRvICcgKyBvcHRpb25zLnVybCk7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gICAgY29udGV4dC5jaGFubmVscy5lcnJvci5wdWJsaXNoKGVycm9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VGltZXJzKCkge1xuICAgIGlmICghZGVsYXlzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RvcFRpbWVycygpO1xuICAgIHRpbWVycy5zb2NrZXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aW1lb3V0UmVxdWVzdCgnRVNPQ0tFVFRJTUVET1VUJyk7XG4gICAgfSwgZGVsYXlzLnNvY2tldCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wVGltZXJzKCkge1xuICAgIC8vIE9ubHkgY2xlYXIgdGhlIGNvbm5lY3QgdGltZW91dCBpZiB3ZSd2ZSBnb3QgYSBjb25uZWN0aW9uXG4gICAgaWYgKGFib3J0ZWQgfHwgeGhyLnJlYWR5U3RhdGUgPj0gMiAmJiB0aW1lcnMuY29ubmVjdCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVycy5jb25uZWN0KTtcbiAgICB9XG5cbiAgICBpZiAodGltZXJzLnNvY2tldCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVycy5zb2NrZXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgaWYgKGxvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwXG4gICAgc3RvcFRpbWVycygpO1xuICAgIGxvYWRlZCA9IHRydWU7XG4gICAgeGhyID0gbnVsbDtcblxuICAgIC8vIEFubm95aW5nbHksIGRldGFpbHMgYXJlIGV4dHJlbWVseSBzY2FyY2UgYW5kIGhpZGRlbiBmcm9tIHVzLlxuICAgIC8vIFdlIG9ubHkgcmVhbGx5IGtub3cgdGhhdCBpdCBpcyBhIG5ldHdvcmsgZXJyb3JcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdOZXR3b3JrIGVycm9yIHdoaWxlIGF0dGVtcHRpbmcgdG8gcmVhY2ggJyArIG9wdGlvbnMudXJsKTtcbiAgICBlcnIuaXNOZXR3b3JrRXJyb3IgPSB0cnVlO1xuICAgIGVyci5yZXF1ZXN0ID0gb3B0aW9ucztcbiAgICBjYWxsYmFjayhlcnIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlUmVzcG9uc2UoKSB7XG4gICAgdmFyIHN0YXR1c0NvZGUgPSB4aHIuc3RhdHVzO1xuICAgIHZhciBzdGF0dXNNZXNzYWdlID0geGhyLnN0YXR1c1RleHQ7XG5cbiAgICBpZiAoaXNYZHIgJiYgc3RhdHVzQ29kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgIHN0YXR1c0NvZGUgPSAyMDA7XG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID4gMTIwMDAgJiYgc3RhdHVzQ29kZSA8IDEyMTU2KSB7XG4gICAgICAvLyBZZXQgYW5vdGhlciBJRSBxdWlyayB3aGVyZSBpdCBlbWl0cyB3ZWlyZCBzdGF0dXMgY29kZXMgb24gbmV0d29yayBlcnJvcnNcbiAgICAgIC8vIGh0dHBzOi8vc3VwcG9ydC5taWNyb3NvZnQuY29tL2VuLXVzL2tiLzE5MzYyNVxuICAgICAgcmV0dXJuIG9uRXJyb3IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQW5vdGhlciBJRSBidWcgd2hlcmUgSFRUUCAyMDQgc29tZWhvdyBlbmRzIHVwIGFzIDEyMjNcbiAgICAgIHN0YXR1c0NvZGUgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcbiAgICAgIHN0YXR1c01lc3NhZ2UgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogc3RhdHVzTWVzc2FnZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogeGhyLnJlc3BvbnNlIHx8IHhoci5yZXNwb25zZVRleHQsXG4gICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IGlzWGRyID8ge30gOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSxcbiAgICAgIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUsXG4gICAgICBzdGF0dXNNZXNzYWdlOiBzdGF0dXNNZXNzYWdlXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICBpZiAoYWJvcnRlZCB8fCBsb2FkZWQgfHwgdGltZWRPdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMCkge1xuICAgICAgb25FcnJvcihuZXcgRXJyb3IoJ1Vua25vd24gWEhSIGVycm9yJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgc3RvcFRpbWVycygpO1xuICAgIGxvYWRlZCA9IHRydWU7XG4gICAgY2FsbGJhY2sobnVsbCwgcmVkdWNlUmVzcG9uc2UoKSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXJlcXVlc3QuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS1yZXF1ZXN0Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lZ2F0ZWQtY29uZGl0aW9uICovXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBzZWxmO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7fTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgdmFyIGFwcGx5TWlkZGxld2FyZSA9IGZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZShob29rLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBiYWlsRWFybHkgPSBob29rID09PSAnb25FcnJvcic7XG5cbiAgICB2YXIgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaWRkbGV3YXJlW2hvb2tdLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG1pZGRsZXdhcmVbaG9va11baV07XG4gICAgICB2YWx1ZSA9IGhhbmRsZXIuYXBwbHkodW5kZWZpbmVkLCBbdmFsdWVdLmNvbmNhdChhcmdzKSk7XG5cbiAgICAgIGlmIChiYWlsRWFybHkgJiYgIXZhbHVlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pZGRsZXdhcmVSZWR1Y2VyLmpzLm1hcCIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHgpIHtcblx0dmFyIHR5cGUgPSB0eXBlb2YgeDtcblx0cmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufTtcbiIsIi8qIVxuICogaXMtcGxhaW4tb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXNvYmplY3QnKTtcblxuZnVuY3Rpb24gaXNPYmplY3RPYmplY3Qobykge1xuICByZXR1cm4gaXNPYmplY3QobykgPT09IHRydWVcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICB2YXIgY3Rvcixwcm90O1xuXG4gIGlmIChpc09iamVjdE9iamVjdChvKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgY29uc3RydWN0b3JcbiAgY3RvciA9IG8uY29uc3RydWN0b3I7XG4gIGlmICh0eXBlb2YgY3RvciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBwcm90b3R5cGVcbiAgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuICBpZiAoaXNPYmplY3RPYmplY3QocHJvdCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSBhbiBPYmplY3Qtc3BlY2lmaWMgbWV0aG9kXG4gIGlmIChwcm90Lmhhc093blByb3BlcnR5KCdpc1Byb3RvdHlwZU9mJykgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gTW9zdCBsaWtlbHkgYSBwbGFpbiBPYmplY3RcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLyohXG4gKiBpc29iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXNvYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkodmFsKSA9PT0gZmFsc2U7XG59O1xuIiwiLy8gSVNDIEAgSnVsaWVuIEZvbnRhbmV0XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjb25zdHJ1Y3QgPSB0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiA/IFJlZmxlY3QuY29uc3RydWN0IDogdW5kZWZpbmVkO1xudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBjYXB0dXJlU3RhY2tUcmFjZSA9IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlO1xuaWYgKGNhcHR1cmVTdGFja1RyYWNlID09PSB1bmRlZmluZWQpIHtcbiAgY2FwdHVyZVN0YWNrVHJhY2UgPSBmdW5jdGlvbiBjYXB0dXJlU3RhY2tUcmFjZShlcnJvcikge1xuICAgIHZhciBjb250YWluZXIgPSBuZXcgRXJyb3IoKTtcblxuICAgIGRlZmluZVByb3BlcnR5KGVycm9yLCBcInN0YWNrXCIsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0U3RhY2soKSB7XG4gICAgICAgIHZhciBzdGFjayA9IGNvbnRhaW5lci5zdGFjaztcblxuICAgICAgICAvLyBSZXBsYWNlIHByb3BlcnR5IHdpdGggdmFsdWUgZm9yIGZhc3RlciBmdXR1cmUgYWNjZXNzZXMuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhY2tcIiwge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogc3RhY2ssXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdGFjaztcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldFN0YWNrKHN0YWNrKSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KGVycm9yLCBcInN0YWNrXCIsIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHN0YWNrLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gQmFzZUVycm9yKG1lc3NhZ2UpIHtcbiAgaWYgKG1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwibWVzc2FnZVwiLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogbWVzc2FnZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGNuYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAoY25hbWUgIT09IHVuZGVmaW5lZCAmJiBjbmFtZSAhPT0gdGhpcy5uYW1lKSB7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBjbmFtZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG59XG5cbkJhc2VFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSwge1xuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Kc0NvbW11bml0eS9tYWtlLWVycm9yL2lzc3Vlcy80XG4gIGNvbnN0cnVjdG9yOiB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBCYXNlRXJyb3IsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gIH0sXG59KTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTZXRzIHRoZSBuYW1lIG9mIGEgZnVuY3Rpb24gaWYgcG9zc2libGUgKGRlcGVuZHMgb2YgdGhlIEpTIGVuZ2luZSkuXG52YXIgc2V0RnVuY3Rpb25OYW1lID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzZXRGdW5jdGlvbk5hbWUoZm4sIG5hbWUpIHtcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZm4sIFwibmFtZVwiLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogbmFtZSxcbiAgICB9KTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBmID0gZnVuY3Rpb24oKSB7fTtcbiAgICBzZXRGdW5jdGlvbk5hbWUoZiwgXCJmb29cIik7XG4gICAgaWYgKGYubmFtZSA9PT0gXCJmb29cIikge1xuICAgICAgcmV0dXJuIHNldEZ1bmN0aW9uTmFtZTtcbiAgICB9XG4gIH0gY2F0Y2ggKF8pIHt9XG59KSgpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIG1ha2VFcnJvcihjb25zdHJ1Y3Rvciwgc3VwZXJfKSB7XG4gIGlmIChzdXBlcl8gPT0gbnVsbCB8fCBzdXBlcl8gPT09IEVycm9yKSB7XG4gICAgc3VwZXJfID0gQmFzZUVycm9yO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzdXBlcl8gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJzdXBlcl8gc2hvdWxkIGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICB2YXIgbmFtZTtcbiAgaWYgKHR5cGVvZiBjb25zdHJ1Y3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgIG5hbWUgPSBjb25zdHJ1Y3RvcjtcbiAgICBjb25zdHJ1Y3RvciA9XG4gICAgICBjb25zdHJ1Y3QgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdChzdXBlcl8sIGFyZ3VtZW50cywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3VwZXJfLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcblxuICAgIC8vIElmIHRoZSBuYW1lIGNhbiBiZSBzZXQsIGRvIGl0IG9uY2UgYW5kIGZvciBhbGwuXG4gICAgaWYgKHNldEZ1bmN0aW9uTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRGdW5jdGlvbk5hbWUoY29uc3RydWN0b3IsIG5hbWUpO1xuICAgICAgbmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY29uc3RydWN0b3Igc2hvdWxkIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgLy8gQWxzbyByZWdpc3RlciB0aGUgc3VwZXIgY29uc3RydWN0b3IgYWxzbyBhcyBgY29uc3RydWN0b3Iuc3VwZXJfYCBqdXN0XG4gIC8vIGxpa2UgTm9kZSdzIGB1dGlsLmluaGVyaXRzKClgLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXG4gIGNvbnN0cnVjdG9yLnN1cGVyXyA9IGNvbnN0cnVjdG9yW1wic3VwZXJcIl0gPSBzdXBlcl87XG5cbiAgdmFyIHByb3BlcnRpZXMgPSB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBjb25zdHJ1Y3RvcixcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gSWYgdGhlIG5hbWUgY291bGQgbm90IGJlIHNldCBvbiB0aGUgY29uc3RydWN0b3IsIHNldCBpdCBvbiB0aGVcbiAgLy8gcHJvdG90eXBlLlxuICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcGVydGllcy5uYW1lID0ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG5hbWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJfLnByb3RvdHlwZSwgcHJvcGVydGllcyk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbWFrZUVycm9yO1xuZXhwb3J0cy5CYXNlRXJyb3IgPSBCYXNlRXJyb3I7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFB1YnN1YigpIHtcbiAgdmFyIHN1YnNjcmliZXJzID0gW11cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBwdWJsaXNoOiBwdWJsaXNoXG4gIH1cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICBzdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIGlkeCA9IHN1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlcilcbiAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaWR4LCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN1YnNjcmliZXJzW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cbn0iLCJ2YXIgdCxlPSh0PXJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKSkmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcImRlZmF1bHRcImluIHQ/dC5kZWZhdWx0OnQsbz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gcih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZCh0KSk7dmFyIHI9ZnVuY3Rpb24odCxlLG8pe3ZhciByPXQuYXV0aCxhPXQuaG9zdG5hbWUscz10LnByb3RvY29sfHxcIlwiLHA9dC5wYXRobmFtZXx8XCJcIixuPXQuaGFzaHx8XCJcIixjPXQucXVlcnl8fFwiXCIsaD0hMTtyPXI/ZW5jb2RlVVJJQ29tcG9uZW50KHIpLnJlcGxhY2UoLyUzQS9pLFwiOlwiKStcIkBcIjpcIlwiLHQuaG9zdD9oPXIrdC5ob3N0OmEmJihoPXIrKH5hLmluZGV4T2YoXCI6XCIpP1wiW1wiK2ErXCJdXCI6YSksdC5wb3J0JiYoaCs9XCI6XCIrdC5wb3J0KSksYyYmXCJvYmplY3RcIj09dHlwZW9mIGMmJihjPWUuZW5jb2RlKGMpKTt2YXIgbD10LnNlYXJjaHx8YyYmXCI/XCIrY3x8XCJcIjtyZXR1cm4gcyYmXCI6XCIhPT1zLnN1YnN0cigtMSkmJihzKz1cIjpcIiksdC5zbGFzaGVzfHwoIXN8fG8udGVzdChzKSkmJiExIT09aD8oaD1cIi8vXCIrKGh8fFwiXCIpLHAmJlwiL1wiIT09cFswXSYmKHA9XCIvXCIrcCkpOmh8fChoPVwiXCIpLG4mJlwiI1wiIT09blswXSYmKG49XCIjXCIrbiksbCYmXCI/XCIhPT1sWzBdJiYobD1cIj9cIitsKSx7cHJvdG9jb2w6cyxob3N0OmgscGF0aG5hbWU6cD1wLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpLHNlYXJjaDpsPWwucmVwbGFjZShcIiNcIixcIiUyM1wiKSxoYXNoOm59fSh0LGUsbyk7cmV0dXJuXCJcIityLnByb3RvY29sK3IuaG9zdCtyLnBhdGhuYW1lK3Iuc2VhcmNoK3IuaGFzaH12YXIgYT1cImh0dHA6Ly9cIixzPVwidy53XCIscD1hK3Msbj0vXihbYS16MC05ListXSo6XFwvXFwvXFwvKShbYS16MC05ListXTpcXC8qKT8vaSxjPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBoKHQsZSl7dmFyIG89XCJzdHJpbmdcIj09dHlwZW9mIHQ/ZCh0KTp0O3Q9XCJvYmplY3RcIj09dHlwZW9mIHQ/cih0KTp0O3ZhciBzPWQoZSksaD1cIlwiO28ucHJvdG9jb2wmJiFvLnNsYXNoZXMmJihoPW8ucHJvdG9jb2wsdD10LnJlcGxhY2Uoby5wcm90b2NvbCxcIlwiKSxoKz1cIi9cIj09PWVbMF18fFwiL1wiPT09dFswXT9cIi9cIjpcIlwiKSxoJiZzLnByb3RvY29sJiYoaD1cIlwiLHMuc2xhc2hlc3x8KGg9cy5wcm90b2NvbCxlPWUucmVwbGFjZShzLnByb3RvY29sLFwiXCIpKSk7dmFyIGw9dC5tYXRjaChuKTtsJiYhcy5wcm90b2NvbCYmKHQ9dC5zdWJzdHIoKGg9bFsxXSsobFsyXXx8XCJcIikpLmxlbmd0aCksL15cXC9cXC9bXi9dLy50ZXN0KGUpJiYoaD1oLnNsaWNlKDAsLTEpKSk7dmFyIGk9bmV3IFVSTCh0LHArXCIvXCIpLHU9bmV3IFVSTChlLGkpLnRvU3RyaW5nKCkucmVwbGFjZShwLFwiXCIpLGY9cy5wcm90b2NvbHx8by5wcm90b2NvbDtyZXR1cm4gZis9by5zbGFzaGVzfHxzLnNsYXNoZXM/XCIvL1wiOlwiXCIsIWgmJmY/dT11LnJlcGxhY2UoYSxmKTpoJiYodT11LnJlcGxhY2UoYSxcIlwiKSksYy50ZXN0KHUpfHx+ZS5pbmRleE9mKFwiLlwiKXx8XCIvXCI9PT10LnNsaWNlKC0xKXx8XCIvXCI9PT1lLnNsaWNlKC0xKXx8XCIvXCIhPT11LnNsaWNlKC0xKXx8KHU9dS5zbGljZSgwLC0xKSksaCYmKHU9aCsoXCIvXCI9PT11WzBdP3Uuc3Vic3RyKDEpOnUpKSx1fWZ1bmN0aW9uIGwoKXt9bC5wcm90b3R5cGUucGFyc2U9ZCxsLnByb3RvdHlwZS5mb3JtYXQ9cixsLnByb3RvdHlwZS5yZXNvbHZlPWgsbC5wcm90b3R5cGUucmVzb2x2ZU9iamVjdD1oO3ZhciBpPS9eaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS8sdT0vXiguKj8pKFsjP10uKikvLGY9L14oW2EtejAtOS4rLV0qOikoXFwvezAsM30pKC4qKS9pLG09L14oW2EtejAtOS4rLV0qOik/XFwvXFwvXFwvKi9pLHY9L14oW2EtejAtOS4rLV0qOikoXFwvezAsMn0pXFxbKC4qKVxcXSQvaTtmdW5jdGlvbiBkKHQsbyxhKXtpZih2b2lkIDA9PT1vJiYobz0hMSksdm9pZCAwPT09YSYmKGE9ITEpLHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0IGluc3RhbmNlb2YgbClyZXR1cm4gdDt2YXIgbj0odD10LnRyaW0oKSkubWF0Y2godSk7dD1uP25bMV0ucmVwbGFjZSgvXFxcXC9nLFwiL1wiKStuWzJdOnQucmVwbGFjZSgvXFxcXC9nLFwiL1wiKSx2LnRlc3QodCkmJlwiL1wiIT09dC5zbGljZSgtMSkmJih0Kz1cIi9cIik7dmFyIGM9IS8oXmphdmFzY3JpcHQpLy50ZXN0KHQpJiZ0Lm1hdGNoKGYpLGg9bS50ZXN0KHQpLGQ9XCJcIjtjJiYoaS50ZXN0KGNbMV0pfHwoZD1jWzFdLnRvTG93ZXJDYXNlKCksdD1cIlwiK2NbMl0rY1szXSksY1syXXx8KGg9ITEsaS50ZXN0KGNbMV0pPyhkPWNbMV0sdD1cIlwiK2NbM10pOnQ9XCIvL1wiK2NbM10pLDMhPT1jWzJdLmxlbmd0aCYmMSE9PWNbMl0ubGVuZ3RofHwoZD1jWzFdLHQ9XCIvXCIrY1szXSkpO3ZhciBnLHk9KG4/blsxXTp0KS5tYXRjaCgvXmh0dHBzPzpcXC9cXC9bXi9dKyg6WzAtOV0rKSg/PVxcL3wkKS8pLGI9eSYmeVsxXSxDPW5ldyBsLFU9XCJcIixqPVwiXCI7dHJ5e2c9bmV3IFVSTCh0KX1jYXRjaChlKXtVPWUsZHx8YXx8IS9eXFwvXFwvLy50ZXN0KHQpfHwvXlxcL1xcLy4rW0AuXS8udGVzdCh0KXx8KGo9XCIvXCIsdD10LnN1YnN0cigxKSk7dHJ5e2c9bmV3IFVSTCh0LHApfWNhdGNoKHQpe3JldHVybiBDLnByb3RvY29sPWQsQy5ocmVmPWQsQ319Qy5zbGFzaGVzPWgmJiFqLEMuaG9zdD1nLmhvc3Q9PT1zP1wiXCI6Zy5ob3N0LEMuaG9zdG5hbWU9Zy5ob3N0bmFtZT09PXM/XCJcIjpnLmhvc3RuYW1lLnJlcGxhY2UoLyhcXFt8XFxdKS9nLFwiXCIpLEMucHJvdG9jb2w9VT9kfHxudWxsOmcucHJvdG9jb2wsQy5zZWFyY2g9Zy5zZWFyY2gucmVwbGFjZSgvXFxcXC9nLFwiJTVDXCIpLEMuaGFzaD1nLmhhc2gucmVwbGFjZSgvXFxcXC9nLFwiJTVDXCIpO3ZhciB3PXQuc3BsaXQoXCIjXCIpOyFDLnNlYXJjaCYmfndbMF0uaW5kZXhPZihcIj9cIikmJihDLnNlYXJjaD1cIj9cIiksQy5oYXNofHxcIlwiIT09d1sxXXx8KEMuaGFzaD1cIiNcIiksQy5xdWVyeT1vP2UuZGVjb2RlKGcuc2VhcmNoLnN1YnN0cigxKSk6Qy5zZWFyY2guc3Vic3RyKDEpLEMucGF0aG5hbWU9aisoYz9mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9bJ158YF0vZyxmdW5jdGlvbih0KXtyZXR1cm5cIiVcIit0LmNoYXJDb2RlQXQoKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX0pLnJlcGxhY2UoLygoPzolWzAtOUEtRl17Mn0pKykvZyxmdW5jdGlvbih0LGUpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGUpLnNwbGl0KFwiXCIpLm1hcChmdW5jdGlvbih0KXt2YXIgZT10LmNoYXJDb2RlQXQoKTtyZXR1cm4gZT4yNTZ8fC9eW2EtejAtOV0kL2kudGVzdCh0KT90OlwiJVwiK2UudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9KS5qb2luKFwiXCIpfWNhdGNoKHQpe3JldHVybiBlfX0pfShnLnBhdGhuYW1lKTpnLnBhdGhuYW1lKSxcImFib3V0OlwiPT09Qy5wcm90b2NvbCYmXCJibGFua1wiPT09Qy5wYXRobmFtZSYmKEMucHJvdG9jb2w9XCJcIixDLnBhdGhuYW1lPVwiXCIpLFUmJlwiL1wiIT09dFswXSYmKEMucGF0aG5hbWU9Qy5wYXRobmFtZS5zdWJzdHIoMSkpLGQmJiFpLnRlc3QoZCkmJlwiL1wiIT09dC5zbGljZSgtMSkmJlwiL1wiPT09Qy5wYXRobmFtZSYmKEMucGF0aG5hbWU9XCJcIiksQy5wYXRoPUMucGF0aG5hbWUrQy5zZWFyY2gsQy5hdXRoPVtnLnVzZXJuYW1lLGcucGFzc3dvcmRdLm1hcChkZWNvZGVVUklDb21wb25lbnQpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiOlwiKSxDLnBvcnQ9Zy5wb3J0LGImJiFDLmhvc3QuZW5kc1dpdGgoYikmJihDLmhvc3QrPWIsQy5wb3J0PWIuc2xpY2UoMSkpLEMuaHJlZj1qP1wiXCIrQy5wYXRobmFtZStDLnNlYXJjaCtDLmhhc2g6cihDKTt2YXIgeD0vXihmaWxlKS8udGVzdChDLmhyZWYpP1tcImhvc3RcIixcImhvc3RuYW1lXCJdOltdO3JldHVybiBPYmplY3Qua2V5cyhDKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe354LmluZGV4T2YodCl8fChDW3RdPUNbdF18fG51bGwpfSksQ31leHBvcnRzLnBhcnNlPWQsZXhwb3J0cy5mb3JtYXQ9cixleHBvcnRzLnJlc29sdmU9aCxleHBvcnRzLnJlc29sdmVPYmplY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZChoKHQsZSkpfSxleHBvcnRzLlVybD1sO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJ2YXIgdHJpbSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn1cbiAgLCBpc0FycmF5ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gIGlmICghaGVhZGVycylcbiAgICByZXR1cm4ge31cblxuICB2YXIgcmVzdWx0ID0ge31cblxuICB2YXIgaGVhZGVyc0FyciA9IHRyaW0oaGVhZGVycykuc3BsaXQoJ1xcbicpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkZXJzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IGhlYWRlcnNBcnJbaV1cbiAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgLCBrZXkgPSB0cmltKHJvdy5zbGljZSgwLCBpbmRleCkpLnRvTG93ZXJDYXNlKClcbiAgICAsIHZhbHVlID0gdHJpbShyb3cuc2xpY2UoaW5kZXggKyAxKSlcblxuICAgIGlmICh0eXBlb2YocmVzdWx0W2tleV0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbWFwKG9iamVjdEtleXMob2JqKSwgZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG1hcChvYmpba10sIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbmZ1bmN0aW9uIG1hcCAoeHMsIGYpIHtcbiAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzLnB1c2goZih4c1tpXSwgaSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgcmVzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHVuZGVmO1xuXG4vKipcbiAqIERlY29kZSBhIFVSSSBlbmNvZGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFVSSSBlbmNvZGVkIHN0cmluZy5cbiAqIEByZXR1cm5zIHtTdHJpbmd8TnVsbH0gVGhlIGRlY29kZWQgc3RyaW5nLlxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBlbmNvZGUgYSBnaXZlbiBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIGVuY29kZWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfE51bGx9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogU2ltcGxlIHF1ZXJ5IHN0cmluZyBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IFRoZSBxdWVyeSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBwYXJzZWQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcXVlcnlzdHJpbmcocXVlcnkpIHtcbiAgdmFyIHBhcnNlciA9IC8oW149PyMmXSspPT8oW14mXSopL2dcbiAgICAsIHJlc3VsdCA9IHt9XG4gICAgLCBwYXJ0O1xuXG4gIHdoaWxlIChwYXJ0ID0gcGFyc2VyLmV4ZWMocXVlcnkpKSB7XG4gICAgdmFyIGtleSA9IGRlY29kZShwYXJ0WzFdKVxuICAgICAgLCB2YWx1ZSA9IGRlY29kZShwYXJ0WzJdKTtcblxuICAgIC8vXG4gICAgLy8gUHJldmVudCBvdmVycmlkaW5nIG9mIGV4aXN0aW5nIHByb3BlcnRpZXMuIFRoaXMgZW5zdXJlcyB0aGF0IGJ1aWxkLWluXG4gICAgLy8gbWV0aG9kcyBsaWtlIGB0b1N0cmluZ2Agb3IgX19wcm90b19fIGFyZSBub3Qgb3ZlcnJpZGVuIGJ5IG1hbGljaW91c1xuICAgIC8vIHF1ZXJ5c3RyaW5ncy5cbiAgICAvL1xuICAgIC8vIEluIHRoZSBjYXNlIGlmIGZhaWxlZCBkZWNvZGluZywgd2Ugd2FudCB0byBvbWl0IHRoZSBrZXkvdmFsdWUgcGFpcnNcbiAgICAvLyBmcm9tIHRoZSByZXN1bHQuXG4gICAgLy9cbiAgICBpZiAoa2V5ID09PSBudWxsIHx8IHZhbHVlID09PSBudWxsIHx8IGtleSBpbiByZXN1bHQpIGNvbnRpbnVlO1xuICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhIHF1ZXJ5IHN0cmluZyB0byBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3QgdGhhdCBzaG91bGQgYmUgdHJhbnNmb3JtZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJlZml4IE9wdGlvbmFsIHByZWZpeC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBxdWVyeXN0cmluZ2lmeShvYmosIHByZWZpeCkge1xuICBwcmVmaXggPSBwcmVmaXggfHwgJyc7XG5cbiAgdmFyIHBhaXJzID0gW11cbiAgICAsIHZhbHVlXG4gICAgLCBrZXk7XG5cbiAgLy9cbiAgLy8gT3B0aW9uYWxseSBwcmVmaXggd2l0aCBhICc/JyBpZiBuZWVkZWRcbiAgLy9cbiAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgcHJlZml4KSBwcmVmaXggPSAnPyc7XG5cbiAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgLy9cbiAgICAgIC8vIEVkZ2UgY2FzZXMgd2hlcmUgd2UgYWN0dWFsbHkgd2FudCB0byBlbmNvZGUgdGhlIHZhbHVlIHRvIGFuIGVtcHR5XG4gICAgICAvLyBzdHJpbmcgaW5zdGVhZCBvZiB0aGUgc3RyaW5naWZpZWQgdmFsdWUuXG4gICAgICAvL1xuICAgICAgaWYgKCF2YWx1ZSAmJiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmIHx8IGlzTmFOKHZhbHVlKSkpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cblxuICAgICAga2V5ID0gZW5jb2RlKGtleSk7XG4gICAgICB2YWx1ZSA9IGVuY29kZSh2YWx1ZSk7XG5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB3ZSBmYWlsZWQgdG8gZW5jb2RlIHRoZSBzdHJpbmdzLCB3ZSBzaG91bGQgYmFpbCBvdXQgYXMgd2UgZG9uJ3RcbiAgICAgIC8vIHdhbnQgdG8gYWRkIGludmFsaWQgc3RyaW5ncyB0byB0aGUgcXVlcnkuXG4gICAgICAvL1xuICAgICAgaWYgKGtleSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBwYWlycy5wdXNoKGtleSArJz0nKyB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhaXJzLmxlbmd0aCA/IHByZWZpeCArIHBhaXJzLmpvaW4oJyYnKSA6ICcnO1xufVxuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuZXhwb3J0cy5zdHJpbmdpZnkgPSBxdWVyeXN0cmluZ2lmeTtcbmV4cG9ydHMucGFyc2UgPSBxdWVyeXN0cmluZztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayBpZiB3ZSdyZSByZXF1aXJlZCB0byBhZGQgYSBwb3J0IG51bWJlci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jZGVmYXVsdC1wb3J0XG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHBvcnQgUG9ydCBudW1iZXIgd2UgbmVlZCB0byBjaGVja1xuICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sIFByb3RvY29sIHdlIG5lZWQgdG8gY2hlY2sgYWdhaW5zdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJcyBpdCBhIGRlZmF1bHQgcG9ydCBmb3IgdGhlIGdpdmVuIHByb3RvY29sXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXF1aXJlZChwb3J0LCBwcm90b2NvbCkge1xuICBwcm90b2NvbCA9IHByb3RvY29sLnNwbGl0KCc6JylbMF07XG4gIHBvcnQgPSArcG9ydDtcblxuICBpZiAoIXBvcnQpIHJldHVybiBmYWxzZTtcblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSAnaHR0cCc6XG4gICAgY2FzZSAnd3MnOlxuICAgIHJldHVybiBwb3J0ICE9PSA4MDtcblxuICAgIGNhc2UgJ2h0dHBzJzpcbiAgICBjYXNlICd3c3MnOlxuICAgIHJldHVybiBwb3J0ICE9PSA0NDM7XG5cbiAgICBjYXNlICdmdHAnOlxuICAgIHJldHVybiBwb3J0ICE9PSAyMTtcblxuICAgIGNhc2UgJ2dvcGhlcic6XG4gICAgcmV0dXJuIHBvcnQgIT09IDcwO1xuXG4gICAgY2FzZSAnZmlsZSc6XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQgIT09IDA7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FuUmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvY2FuUmVwb3J0RXJyb3JcIik7XG52YXIgdG9TdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi91dGlsL3RvU3Vic2NyaWJlclwiKTtcbnZhciBvYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbnZhciBwaXBlXzEgPSByZXF1aXJlKFwiLi91dGlsL3BpcGVcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5faXNTY2FsYXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgb3BlcmF0b3IgPSB0aGlzLm9wZXJhdG9yO1xuICAgICAgICB2YXIgc2luayA9IHRvU3Vic2NyaWJlcl8xLnRvU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgaWYgKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICBzaW5rLmFkZChvcGVyYXRvci5jYWxsKHNpbmssIHRoaXMuc291cmNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaW5rLmFkZCh0aGlzLnNvdXJjZSB8fCAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgJiYgIXNpbmsuc3luY0Vycm9yVGhyb3dhYmxlKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlKHNpbmspIDpcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlTdWJzY3JpYmUoc2luaykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgaWYgKHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgc2luay5zeW5jRXJyb3JWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpbms7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpbmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuUmVwb3J0RXJyb3JfMS5jYW5SZXBvcnRFcnJvcihzaW5rKSkge1xuICAgICAgICAgICAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVqZWN0LCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICByZXR1cm4gc291cmNlICYmIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BlcmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlXzEucGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHZhbHVlID0geDsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnRzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuZnVuY3Rpb24gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpIHtcbiAgICBpZiAoIXByb21pc2VDdG9yKSB7XG4gICAgICAgIHByb21pc2VDdG9yID0gY29uZmlnXzEuY29uZmlnLlByb21pc2UgfHwgUHJvbWlzZTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIFByb21pc2UgaW1wbCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZUN0b3I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIGhvc3RSZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9ob3N0UmVwb3J0RXJyb3JcIik7XG5leHBvcnRzLmVtcHR5ID0ge1xuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNGdW5jdGlvblwiKTtcbnZhciBPYnNlcnZlcl8xID0gcmVxdWlyZShcIi4vT2JzZXJ2ZXJcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpcHRpb25cIik7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJuYWwvc3ltYm9sL3J4U3Vic2NyaWJlclwiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciBob3N0UmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaG9zdFJlcG9ydEVycm9yXCIpO1xudmFyIFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YnNjcmliZXIoZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93biA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoIWRlc3RpbmF0aW9uT3JOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25Pck5leHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk9yTmV4dCBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IGRlc3RpbmF0aW9uT3JOZXh0LnN5bmNFcnJvclRocm93YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25Pck5leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk9yTmV4dC5hZGQoX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKF90aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKF90aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YnNjcmliZXIucHJvdG90eXBlW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgIFN1YnNjcmliZXIuY3JlYXRlID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgc3Vic2NyaWJlciA9IG5ldyBTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIHN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmVBbmRSZWN5Y2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3BhcmVudE9yUGFyZW50cyA9IHRoaXMuX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBfcGFyZW50T3JQYXJlbnRzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpYmVyO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuU3Vic2NyaWJlciA9IFN1YnNjcmliZXI7XG52YXIgU2FmZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTYWZlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTYWZlU3Vic2NyaWJlcihfcGFyZW50U3Vic2NyaWJlciwgb2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcGFyZW50U3Vic2NyaWJlciA9IF9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICB2YXIgbmV4dDtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBfdGhpcztcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQubmV4dDtcbiAgICAgICAgICAgIGVycm9yID0gb2JzZXJ2ZXJPck5leHQuZXJyb3I7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyT3JOZXh0ICE9PSBPYnNlcnZlcl8xLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihjb250ZXh0LnVuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGQoY29udGV4dC51bnN1YnNjcmliZS5iaW5kKGNvbnRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGV4dC51bnN1YnNjcmliZSA9IF90aGlzLnVuc3Vic2NyaWJlLmJpbmQoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgX3RoaXMuX25leHQgPSBuZXh0O1xuICAgICAgICBfdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgX3RoaXMuX2NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCAmJiB0aGlzLl9uZXh0KSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fbmV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHRoaXMuX25leHQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgdmFyIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgPSBjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZztcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikge1xuICAgICAgICAgICAgICAgIGlmICghdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX2Vycm9yLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgdGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fY29tcGxldGUuY2FsbChfdGhpcy5fY29udGV4dCk7IH07XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB3cmFwcGVkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX190cnlPclVuc3ViID0gZnVuY3Rpb24gKGZuLCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLl9jb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yU2V0RXJyb3IgPSBmdW5jdGlvbiAocGFyZW50LCBmbiwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgY2FsbCcpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGFyZW50U3Vic2NyaWJlciA9IG51bGw7XG4gICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2FmZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydHMuU2FmZVN1YnNjcmliZXIgPSBTYWZlU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZShcIi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIGlzT2JqZWN0XzEgPSByZXF1aXJlKFwiLi91dGlsL2lzT2JqZWN0XCIpO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNGdW5jdGlvblwiKTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3JcIik7XG52YXIgU3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdWJzY3JpcHRpb24odW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fY3RvclVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9ycztcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgX3BhcmVudE9yUGFyZW50cyA9IF9hLl9wYXJlbnRPclBhcmVudHMsIF9jdG9yVW5zdWJzY3JpYmUgPSBfYS5fY3RvclVuc3Vic2NyaWJlLCBfdW5zdWJzY3JpYmUgPSBfYS5fdW5zdWJzY3JpYmUsIF9zdWJzY3JpcHRpb25zID0gX2EuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgICAgIGlmIChfcGFyZW50T3JQYXJlbnRzIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBfcGFyZW50T3JQYXJlbnRzLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgX3BhcmVudE9yUGFyZW50cy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50XzEgPSBfcGFyZW50T3JQYXJlbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBwYXJlbnRfMS5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKF91bnN1YnNjcmliZSkpIHtcbiAgICAgICAgICAgIGlmIChfY3RvclVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF91bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IgPyBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZS5lcnJvcnMpIDogW2VdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5XzEuaXNBcnJheShfc3Vic2NyaXB0aW9ucykpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgdmFyIGxlbiA9IF9zdWJzY3JpcHRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IF9zdWJzY3JpcHRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3RfMS5pc09iamVjdChzdWIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGUuZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRlYXJkb3duO1xuICAgICAgICBpZiAoIXRlYXJkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHRlYXJkb3duKSB7XG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbih0ZWFyZG93bik7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24gPT09IHRoaXMgfHwgc3Vic2NyaXB0aW9uLmNsb3NlZCB8fCB0eXBlb2Ygc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghKHN1YnNjcmlwdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uX3N1YnNjcmlwdGlvbnMgPSBbdG1wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgdGVhcmRvd24gJyArIHRlYXJkb3duICsgJyBhZGRlZCB0byBTdWJzY3JpcHRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cyA9IFtfcGFyZW50T3JQYXJlbnRzLCB0aGlzXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICAgICAgICBfcGFyZW50T3JQYXJlbnRzLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbc3Vic2NyaXB0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbkluZGV4ID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKGVtcHR5KSB7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KG5ldyBTdWJzY3JpcHRpb24oKSkpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0cy5TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb247XG5mdW5jdGlvbiBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKGVycnMsIGVycikgeyByZXR1cm4gZXJycy5jb25jYXQoKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKSA/IGVyci5lcnJvcnMgOiBlcnIpOyB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzID0gZmFsc2U7XG5leHBvcnRzLmNvbmZpZyA9IHtcbiAgICBQcm9taXNlOiB1bmRlZmluZWQsXG4gICAgc2V0IHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignREVQUkVDQVRFRCEgUnhKUyB3YXMgc2V0IHRvIHVzZSBkZXByZWNhdGVkIHN5bmNocm9ub3VzIGVycm9yIGhhbmRsaW5nIGJlaGF2aW9yIGJ5IGNvZGUgYXQ6IFxcbicgKyBlcnJvci5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUnhKUzogQmFjayB0byBhIGJldHRlciBlcnJvciBiZWhhdmlvci4gVGhhbmsgeW91LiA8MycpO1xuICAgICAgICB9XG4gICAgICAgIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncyA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcoKSB7XG4gICAgICAgIHJldHVybiBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3M7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG5leHBvcnRzLkVNUFRZID0gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pO1xuZnVuY3Rpb24gZW1wdHkoc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIHNjaGVkdWxlciA/IGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcikgOiBleHBvcnRzLkVNUFRZO1xufVxuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZnVuY3Rpb24gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gZGVmYXVsdElmRW1wdHkoZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSA9PT0gdm9pZCAwKSB7IGRlZmF1bHRWYWx1ZSA9IG51bGw7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmxpZnQobmV3IERlZmF1bHRJZkVtcHR5T3BlcmF0b3IoZGVmYXVsdFZhbHVlKSk7IH07XG59XG5leHBvcnRzLmRlZmF1bHRJZkVtcHR5ID0gZGVmYXVsdElmRW1wdHk7XG52YXIgRGVmYXVsdElmRW1wdHlPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVmYXVsdElmRW1wdHlPcGVyYXRvcihkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIERlZmF1bHRJZkVtcHR5T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBEZWZhdWx0SWZFbXB0eVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kZWZhdWx0VmFsdWUpKTtcbiAgICB9O1xuICAgIHJldHVybiBEZWZhdWx0SWZFbXB0eU9wZXJhdG9yO1xufSgpKTtcbnZhciBEZWZhdWx0SWZFbXB0eVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZWZhdWx0SWZFbXB0eVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGVmYXVsdElmRW1wdHlTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgX3RoaXMuaXNFbXB0eSA9IHRydWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRGVmYXVsdElmRW1wdHlTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodGhpcy5kZWZhdWx0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBEZWZhdWx0SWZFbXB0eVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0SWZFbXB0eS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZpbHRlck9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgRmlsdGVyT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzQXJnKSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xudmFyIEZpbHRlck9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGaWx0ZXJPcGVyYXRvcihwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gICAgICAgIHRoaXMudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgfVxuICAgIEZpbHRlck9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgRmlsdGVyU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnByZWRpY2F0ZSwgdGhpcy50aGlzQXJnKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmlsdGVyT3BlcmF0b3I7XG59KCkpO1xudmFyIEZpbHRlclN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGaWx0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZpbHRlclN1YnNjcmliZXIoZGVzdGluYXRpb24sIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgICAgICBfdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICAgICAgX3RoaXMuY291bnQgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEZpbHRlclN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnByZWRpY2F0ZS5jYWxsKHRoaXMudGhpc0FyZywgdmFsdWUsIHRoaXMuY291bnQrKyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBGaWx0ZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsdGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIG1hcChwcm9qZWN0LCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1hcE9wZXJhdGlvbihzb3VyY2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9qZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBpcyBub3QgYSBmdW5jdGlvbi4gQXJlIHlvdSBsb29raW5nIGZvciBgbWFwVG8oKWA/Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBNYXBPcGVyYXRvcihwcm9qZWN0LCB0aGlzQXJnKSk7XG4gICAgfTtcbn1cbmV4cG9ydHMubWFwID0gbWFwO1xudmFyIE1hcE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBPcGVyYXRvcihwcm9qZWN0LCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgfVxuICAgIE1hcE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgTWFwU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnByb2plY3QsIHRoaXMudGhpc0FyZykpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcE9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydHMuTWFwT3BlcmF0b3IgPSBNYXBPcGVyYXRvcjtcbnZhciBNYXBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFwU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNYXBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcm9qZWN0LCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgX3RoaXMuY291bnQgPSAwO1xuICAgICAgICBfdGhpcy50aGlzQXJnID0gdGhpc0FyZyB8fCBfdGhpcztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcm9qZWN0LmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzY2FuXzEgPSByZXF1aXJlKFwiLi9zY2FuXCIpO1xudmFyIHRha2VMYXN0XzEgPSByZXF1aXJlKFwiLi90YWtlTGFzdFwiKTtcbnZhciBkZWZhdWx0SWZFbXB0eV8xID0gcmVxdWlyZShcIi4vZGVmYXVsdElmRW1wdHlcIik7XG52YXIgcGlwZV8xID0gcmVxdWlyZShcIi4uL3V0aWwvcGlwZVwiKTtcbmZ1bmN0aW9uIHJlZHVjZShhY2N1bXVsYXRvciwgc2VlZCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlZHVjZU9wZXJhdG9yRnVuY3Rpb25XaXRoU2VlZChzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwaXBlXzEucGlwZShzY2FuXzEuc2NhbihhY2N1bXVsYXRvciwgc2VlZCksIHRha2VMYXN0XzEudGFrZUxhc3QoMSksIGRlZmF1bHRJZkVtcHR5XzEuZGVmYXVsdElmRW1wdHkoc2VlZCkpKHNvdXJjZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiByZWR1Y2VPcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gcGlwZV8xLnBpcGUoc2Nhbl8xLnNjYW4oZnVuY3Rpb24gKGFjYywgdmFsdWUsIGluZGV4KSB7IHJldHVybiBhY2N1bXVsYXRvcihhY2MsIHZhbHVlLCBpbmRleCArIDEpOyB9KSwgdGFrZUxhc3RfMS50YWtlTGFzdCgxKSkoc291cmNlKTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWR1Y2UgPSByZWR1Y2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWR1Y2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gc2NhbihhY2N1bXVsYXRvciwgc2VlZCkge1xuICAgIHZhciBoYXNTZWVkID0gZmFsc2U7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICBoYXNTZWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNjYW5PcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IFNjYW5PcGVyYXRvcihhY2N1bXVsYXRvciwgc2VlZCwgaGFzU2VlZCkpO1xuICAgIH07XG59XG5leHBvcnRzLnNjYW4gPSBzY2FuO1xudmFyIFNjYW5PcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2Nhbk9wZXJhdG9yKGFjY3VtdWxhdG9yLCBzZWVkLCBoYXNTZWVkKSB7XG4gICAgICAgIGlmIChoYXNTZWVkID09PSB2b2lkIDApIHsgaGFzU2VlZCA9IGZhbHNlOyB9XG4gICAgICAgIHRoaXMuYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvcjtcbiAgICAgICAgdGhpcy5zZWVkID0gc2VlZDtcbiAgICAgICAgdGhpcy5oYXNTZWVkID0gaGFzU2VlZDtcbiAgICB9XG4gICAgU2Nhbk9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgU2NhblN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5hY2N1bXVsYXRvciwgdGhpcy5zZWVkLCB0aGlzLmhhc1NlZWQpKTtcbiAgICB9O1xuICAgIHJldHVybiBTY2FuT3BlcmF0b3I7XG59KCkpO1xudmFyIFNjYW5TdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2NhblN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2NhblN1YnNjcmliZXIoZGVzdGluYXRpb24sIGFjY3VtdWxhdG9yLCBfc2VlZCwgaGFzU2VlZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvcjtcbiAgICAgICAgX3RoaXMuX3NlZWQgPSBfc2VlZDtcbiAgICAgICAgX3RoaXMuaGFzU2VlZCA9IGhhc1NlZWQ7XG4gICAgICAgIF90aGlzLmluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NhblN1YnNjcmliZXIucHJvdG90eXBlLCBcInNlZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWVkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5oYXNTZWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3NlZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2NhblN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNTZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJ5TmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNjYW5TdWJzY3JpYmVyLnByb3RvdHlwZS5fdHJ5TmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4Kys7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFjY3VtdWxhdG9yKHRoaXMuc2VlZCwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWVkID0gcmVzdWx0O1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiBTY2FuU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjYW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9Bcmd1bWVudE91dE9mUmFuZ2VFcnJvclwiKTtcbnZhciBlbXB0eV8xID0gcmVxdWlyZShcIi4uL29ic2VydmFibGUvZW1wdHlcIik7XG5mdW5jdGlvbiB0YWtlTGFzdChjb3VudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiB0YWtlTGFzdE9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGVtcHR5XzEuZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgVGFrZUxhc3RPcGVyYXRvcihjb3VudCkpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMudGFrZUxhc3QgPSB0YWtlTGFzdDtcbnZhciBUYWtlTGFzdE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYWtlTGFzdE9wZXJhdG9yKHRvdGFsKSB7XG4gICAgICAgIHRoaXMudG90YWwgPSB0b3RhbDtcbiAgICAgICAgaWYgKHRoaXMudG90YWwgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JfMS5Bcmd1bWVudE91dE9mUmFuZ2VFcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUYWtlTGFzdE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgVGFrZUxhc3RTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMudG90YWwpKTtcbiAgICB9O1xuICAgIHJldHVybiBUYWtlTGFzdE9wZXJhdG9yO1xufSgpKTtcbnZhciBUYWtlTGFzdFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWtlTGFzdFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGFrZUxhc3RTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCB0b3RhbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudG90YWwgPSB0b3RhbDtcbiAgICAgICAgX3RoaXMucmluZyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVGFrZUxhc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmluZyA9IHRoaXMucmluZztcbiAgICAgICAgdmFyIHRvdGFsID0gdGhpcy50b3RhbDtcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5jb3VudCsrO1xuICAgICAgICBpZiAocmluZy5sZW5ndGggPCB0b3RhbCkge1xuICAgICAgICAgICAgcmluZy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNvdW50ICUgdG90YWw7XG4gICAgICAgICAgICByaW5nW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUYWtlTGFzdFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5jb3VudDtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgdmFyIHRvdGFsID0gdGhpcy5jb3VudCA+PSB0aGlzLnRvdGFsID8gdGhpcy50b3RhbCA6IHRoaXMuY291bnQ7XG4gICAgICAgICAgICB2YXIgcmluZyA9IHRoaXMucmluZztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSAoY291bnQrKykgJSB0b3RhbDtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KHJpbmdbaWR4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBUYWtlTGFzdFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YWtlTGFzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7IHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnOyB9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucnhTdWJzY3JpYmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IFN5bWJvbCgncnhTdWJzY3JpYmVyJylcbiAgICAgICAgOiAnQEByeFN1YnNjcmliZXJfJyArIE1hdGgucmFuZG9tKCk7XG59KSgpO1xuZXhwb3J0cy4kJHJ4U3Vic2NyaWJlciA9IGV4cG9ydHMucnhTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnhTdWJzY3JpYmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsKCkge1xuICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnYXJndW1lbnQgb3V0IG9mIHJhbmdlJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnRzLkFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yID0gQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJndW1lbnRPdXRPZlJhbmdlRXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVW5zdWJzY3JpcHRpb25FcnJvckltcGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsKGVycm9ycykge1xuICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnMgP1xuICAgICAgICAgICAgZXJyb3JzLmxlbmd0aCArIFwiIGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XFxuXCIgKyBlcnJvcnMubWFwKGZ1bmN0aW9uIChlcnIsIGkpIHsgcmV0dXJuIGkgKyAxICsgXCIpIFwiICsgZXJyLnRvU3RyaW5nKCk7IH0pLmpvaW4oJ1xcbiAgJykgOiAnJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gVW5zdWJzY3JpcHRpb25FcnJvckltcGw7XG59KSgpO1xuZXhwb3J0cy5VbnN1YnNjcmlwdGlvbkVycm9yID0gVW5zdWJzY3JpcHRpb25FcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VbnN1YnNjcmlwdGlvbkVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gY2FuUmVwb3J0RXJyb3Iob2JzZXJ2ZXIpIHtcbiAgICB3aGlsZSAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF9hID0gb2JzZXJ2ZXIsIGNsb3NlZF8xID0gX2EuY2xvc2VkLCBkZXN0aW5hdGlvbiA9IF9hLmRlc3RpbmF0aW9uLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQ7XG4gICAgICAgIGlmIChjbG9zZWRfMSB8fCBpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IGRlc3RpbmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5jYW5SZXBvcnRFcnJvciA9IGNhblJlcG9ydEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FuUmVwb3J0RXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBob3N0UmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHRocm93IGVycjsgfSwgMCk7XG59XG5leHBvcnRzLmhvc3RSZXBvcnRFcnJvciA9IGhvc3RSZXBvcnRFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvc3RSZXBvcnRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgICByZXR1cm4geDtcbn1cbmV4cG9ydHMuaWRlbnRpdHkgPSBpZGVudGl0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlkZW50aXR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkgfHwgKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcic7IH0pOyB9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNBcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0Z1bmN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jztcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzT2JqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlkZW50aXR5XzEgPSByZXF1aXJlKFwiLi9pZGVudGl0eVwiKTtcbmZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0cy5waXBlID0gcGlwZTtcbmZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5XzEuaWRlbnRpdHk7XG4gICAgfVxuICAgIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmbnNbMF07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBwaXBlZChpbnB1dCkge1xuICAgICAgICByZXR1cm4gZm5zLnJlZHVjZShmdW5jdGlvbiAocHJldiwgZm4pIHsgcmV0dXJuIGZuKHByZXYpOyB9LCBpbnB1dCk7XG4gICAgfTtcbn1cbmV4cG9ydHMucGlwZUZyb21BcnJheSA9IHBpcGVGcm9tQXJyYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIHJ4U3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9yeFN1YnNjcmliZXJcIik7XG52YXIgT2JzZXJ2ZXJfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZlclwiKTtcbmZ1bmN0aW9uIHRvU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgaWYgKG5leHRPck9ic2VydmVyKSB7XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlciBpbnN0YW5jZW9mIFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFuZXh0T3JPYnNlcnZlciAmJiAhZXJyb3IgJiYgIWNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIoT2JzZXJ2ZXJfMS5lbXB0eSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XG59XG5leHBvcnRzLnRvU3Vic2NyaWJlciA9IHRvU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvU3Vic2NyaWJlci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmkxLCB1cmkyLCBpZU1vZGUpIHtcbiAgICBpZiAodXJpMSA9PT0gdXJpMikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgdXJsMSA9IHVybC5wYXJzZSh1cmkxLCBmYWxzZSwgdHJ1ZSk7XG4gICAgdmFyIHVybDIgPSB1cmwucGFyc2UodXJpMiwgZmFsc2UsIHRydWUpO1xuXG4gICAgdmFyIHVybDFQb3J0ID0gdXJsMS5wb3J0fDAgfHwgKHVybDEucHJvdG9jb2wgPT09ICdodHRwcycgPyA0NDMgOiA4MCk7XG4gICAgdmFyIHVybDJQb3J0ID0gdXJsMi5wb3J0fDAgfHwgKHVybDIucHJvdG9jb2wgPT09ICdodHRwcycgPyA0NDMgOiA4MCk7XG5cbiAgICB2YXIgbWF0Y2ggPSB7XG4gICAgICAgIHByb3RvOiB1cmwxLnByb3RvY29sID09PSB1cmwyLnByb3RvY29sLFxuICAgICAgICBob3N0bmFtZTogdXJsMS5ob3N0bmFtZSA9PT0gdXJsMi5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsMVBvcnQgPT09IHVybDJQb3J0XG4gICAgfTtcblxuICAgIHJldHVybiAoKG1hdGNoLnByb3RvICYmIG1hdGNoLmhvc3RuYW1lKSAmJiAobWF0Y2gucG9ydCB8fCBpZU1vZGUpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVxdWlyZWQgPSByZXF1aXJlKCdyZXF1aXJlcy1wb3J0JylcbiAgLCBxcyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5naWZ5JylcbiAgLCBzbGFzaGVzID0gL15bQS1aYS16XVtBLVphLXowLTkrLS5dKjpcXC9cXC8vXG4gICwgcHJvdG9jb2xyZSA9IC9eKFthLXpdW2EtejAtOS4rLV0qOik/KFxcL1xcLyk/KFtcXFNcXHNdKikvaVxuICAsIHdoaXRlc3BhY2UgPSAnW1xcXFx4MDlcXFxceDBBXFxcXHgwQlxcXFx4MENcXFxceDBEXFxcXHgyMFxcXFx4QTBcXFxcdTE2ODBcXFxcdTE4MEVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMEFcXFxcdTIwMkZcXFxcdTIwNUZcXFxcdTMwMDBcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdUZFRkZdJ1xuICAsIGxlZnQgPSBuZXcgUmVnRXhwKCdeJysgd2hpdGVzcGFjZSArJysnKTtcblxuLyoqXG4gKiBUcmltIGEgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgU3RyaW5nIHRvIHRyaW0uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRyaW1MZWZ0KHN0cikge1xuICByZXR1cm4gKHN0ciA/IHN0ciA6ICcnKS50b1N0cmluZygpLnJlcGxhY2UobGVmdCwgJycpO1xufVxuXG4vKipcbiAqIFRoZXNlIGFyZSB0aGUgcGFyc2UgcnVsZXMgZm9yIHRoZSBVUkwgcGFyc2VyLCBpdCBpbmZvcm1zIHRoZSBwYXJzZXJcbiAqIGFib3V0OlxuICpcbiAqIDAuIFRoZSBjaGFyIGl0IE5lZWRzIHRvIHBhcnNlLCBpZiBpdCdzIGEgc3RyaW5nIGl0IHNob3VsZCBiZSBkb25lIHVzaW5nXG4gKiAgICBpbmRleE9mLCBSZWdFeHAgdXNpbmcgZXhlYyBhbmQgTmFOIG1lYW5zIHNldCBhcyBjdXJyZW50IHZhbHVlLlxuICogMS4gVGhlIHByb3BlcnR5IHdlIHNob3VsZCBzZXQgd2hlbiBwYXJzaW5nIHRoaXMgdmFsdWUuXG4gKiAyLiBJbmRpY2F0aW9uIGlmIGl0J3MgYmFja3dhcmRzIG9yIGZvcndhcmQgcGFyc2luZywgd2hlbiBzZXQgYXMgbnVtYmVyIGl0J3NcbiAqICAgIHRoZSB2YWx1ZSBvZiBleHRyYSBjaGFycyB0aGF0IHNob3VsZCBiZSBzcGxpdCBvZmYuXG4gKiAzLiBJbmhlcml0IGZyb20gbG9jYXRpb24gaWYgbm9uIGV4aXN0aW5nIGluIHRoZSBwYXJzZXIuXG4gKiA0LiBgdG9Mb3dlckNhc2VgIHRoZSByZXN1bHRpbmcgdmFsdWUuXG4gKi9cbnZhciBydWxlcyA9IFtcbiAgWycjJywgJ2hhc2gnXSwgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXG4gIFsnPycsICdxdWVyeSddLCAgICAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBmdW5jdGlvbiBzYW5pdGl6ZShhZGRyZXNzKSB7ICAgICAgICAgIC8vIFNhbml0aXplIHdoYXQgaXMgbGVmdCBvZiB0aGUgYWRkcmVzc1xuICAgIHJldHVybiBhZGRyZXNzLnJlcGxhY2UoJ1xcXFwnLCAnLycpO1xuICB9LFxuICBbJy8nLCAncGF0aG5hbWUnXSwgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgYmFjay5cbiAgWydAJywgJ2F1dGgnLCAxXSwgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGZyb250LlxuICBbTmFOLCAnaG9zdCcsIHVuZGVmaW5lZCwgMSwgMV0sICAgICAgIC8vIFNldCBsZWZ0IG92ZXIgdmFsdWUuXG4gIFsvOihcXGQrKSQvLCAncG9ydCcsIHVuZGVmaW5lZCwgMV0sICAgIC8vIFJlZ0V4cCB0aGUgYmFjay5cbiAgW05hTiwgJ2hvc3RuYW1lJywgdW5kZWZpbmVkLCAxLCAxXSAgICAvLyBTZXQgbGVmdCBvdmVyLlxuXTtcblxuLyoqXG4gKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBub3QgYmUgY29waWVkIG9yIGluaGVyaXRlZCBmcm9tLiBUaGlzIGlzIG9ubHkgbmVlZGVkXG4gKiBmb3IgYWxsIG5vbiBibG9iIFVSTCdzIGFzIGEgYmxvYiBVUkwgZG9lcyBub3QgaW5jbHVkZSBhIGhhc2gsIG9ubHkgdGhlXG4gKiBvcmlnaW4uXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBpZ25vcmUgPSB7IGhhc2g6IDEsIHF1ZXJ5OiAxIH07XG5cbi8qKlxuICogVGhlIGxvY2F0aW9uIG9iamVjdCBkaWZmZXJzIHdoZW4geW91ciBjb2RlIGlzIGxvYWRlZCB0aHJvdWdoIGEgbm9ybWFsIHBhZ2UsXG4gKiBXb3JrZXIgb3IgdGhyb3VnaCBhIHdvcmtlciB1c2luZyBhIGJsb2IuIEFuZCB3aXRoIHRoZSBibG9iYmxlIGJlZ2lucyB0aGVcbiAqIHRyb3VibGUgYXMgdGhlIGxvY2F0aW9uIG9iamVjdCB3aWxsIGNvbnRhaW4gdGhlIFVSTCBvZiB0aGUgYmxvYiwgbm90IHRoZVxuICogbG9jYXRpb24gb2YgdGhlIHBhZ2Ugd2hlcmUgb3VyIGNvZGUgaXMgbG9hZGVkIGluLiBUaGUgYWN0dWFsIG9yaWdpbiBpc1xuICogZW5jb2RlZCBpbiB0aGUgYHBhdGhuYW1lYCBzbyB3ZSBjYW4gdGhhbmtmdWxseSBnZW5lcmF0ZSBhIGdvb2QgXCJkZWZhdWx0XCJcbiAqIGxvY2F0aW9uIGZyb20gaXQgc28gd2UgY2FuIGdlbmVyYXRlIHByb3BlciByZWxhdGl2ZSBVUkwncyBhZ2Fpbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGxvYyBPcHRpb25hbCBkZWZhdWx0IGxvY2F0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGxvbGNhdGlvbiBvYmplY3QuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGxvbGNhdGlvbihsb2MpIHtcbiAgdmFyIGdsb2JhbFZhcjtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIGdsb2JhbFZhciA9IHdpbmRvdztcbiAgZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIGdsb2JhbFZhciA9IGdsb2JhbDtcbiAgZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSBnbG9iYWxWYXIgPSBzZWxmO1xuICBlbHNlIGdsb2JhbFZhciA9IHt9O1xuXG4gIHZhciBsb2NhdGlvbiA9IGdsb2JhbFZhci5sb2NhdGlvbiB8fCB7fTtcbiAgbG9jID0gbG9jIHx8IGxvY2F0aW9uO1xuXG4gIHZhciBmaW5hbGRlc3RpbmF0aW9uID0ge31cbiAgICAsIHR5cGUgPSB0eXBlb2YgbG9jXG4gICAgLCBrZXk7XG5cbiAgaWYgKCdibG9iOicgPT09IGxvYy5wcm90b2NvbCkge1xuICAgIGZpbmFsZGVzdGluYXRpb24gPSBuZXcgVXJsKHVuZXNjYXBlKGxvYy5wYXRobmFtZSksIHt9KTtcbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PT0gdHlwZSkge1xuICAgIGZpbmFsZGVzdGluYXRpb24gPSBuZXcgVXJsKGxvYywge30pO1xuICAgIGZvciAoa2V5IGluIGlnbm9yZSkgZGVsZXRlIGZpbmFsZGVzdGluYXRpb25ba2V5XTtcbiAgfSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZSkge1xuICAgIGZvciAoa2V5IGluIGxvYykge1xuICAgICAgaWYgKGtleSBpbiBpZ25vcmUpIGNvbnRpbnVlO1xuICAgICAgZmluYWxkZXN0aW5hdGlvbltrZXldID0gbG9jW2tleV07XG4gICAgfVxuXG4gICAgaWYgKGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmaW5hbGRlc3RpbmF0aW9uLnNsYXNoZXMgPSBzbGFzaGVzLnRlc3QobG9jLmhyZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaW5hbGRlc3RpbmF0aW9uO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIFByb3RvY29sRXh0cmFjdFxuICogQHR5cGUgT2JqZWN0XG4gKiBAcHJvcGVydHkge1N0cmluZ30gcHJvdG9jb2wgUHJvdG9jb2wgbWF0Y2hlZCBpbiB0aGUgVVJMLCBpbiBsb3dlcmNhc2UuXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHNsYXNoZXMgYHRydWVgIGlmIHByb3RvY29sIGlzIGZvbGxvd2VkIGJ5IFwiLy9cIiwgZWxzZSBgZmFsc2VgLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IHJlc3QgUmVzdCBvZiB0aGUgVVJMIHRoYXQgaXMgbm90IHBhcnQgb2YgdGhlIHByb3RvY29sLlxuICovXG5cbi8qKlxuICogRXh0cmFjdCBwcm90b2NvbCBpbmZvcm1hdGlvbiBmcm9tIGEgVVJMIHdpdGgvd2l0aG91dCBkb3VibGUgc2xhc2ggKFwiLy9cIikuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3MgVVJMIHdlIHdhbnQgdG8gZXh0cmFjdCBmcm9tLlxuICogQHJldHVybiB7UHJvdG9jb2xFeHRyYWN0fSBFeHRyYWN0ZWQgaW5mb3JtYXRpb24uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRyYWN0UHJvdG9jb2woYWRkcmVzcykge1xuICBhZGRyZXNzID0gdHJpbUxlZnQoYWRkcmVzcyk7XG4gIHZhciBtYXRjaCA9IHByb3RvY29scmUuZXhlYyhhZGRyZXNzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3RvY29sOiBtYXRjaFsxXSA/IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCkgOiAnJyxcbiAgICBzbGFzaGVzOiAhIW1hdGNoWzJdLFxuICAgIHJlc3Q6IG1hdGNoWzNdXG4gIH07XG59XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlbGF0aXZlIFVSTCBwYXRobmFtZSBhZ2FpbnN0IGEgYmFzZSBVUkwgcGF0aG5hbWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJlbGF0aXZlIFBhdGhuYW1lIG9mIHRoZSByZWxhdGl2ZSBVUkwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYmFzZSBQYXRobmFtZSBvZiB0aGUgYmFzZSBVUkwuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlc29sdmVkIHBhdGhuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZShyZWxhdGl2ZSwgYmFzZSkge1xuICBpZiAocmVsYXRpdmUgPT09ICcnKSByZXR1cm4gYmFzZTtcblxuICB2YXIgcGF0aCA9IChiYXNlIHx8ICcvJykuc3BsaXQoJy8nKS5zbGljZSgwLCAtMSkuY29uY2F0KHJlbGF0aXZlLnNwbGl0KCcvJykpXG4gICAgLCBpID0gcGF0aC5sZW5ndGhcbiAgICAsIGxhc3QgPSBwYXRoW2kgLSAxXVxuICAgICwgdW5zaGlmdCA9IGZhbHNlXG4gICAgLCB1cCA9IDA7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChwYXRoW2ldID09PSAnLicpIHtcbiAgICAgIHBhdGguc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAocGF0aFtpXSA9PT0gJy4uJykge1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIGlmIChpID09PSAwKSB1bnNoaWZ0ID0gdHJ1ZTtcbiAgICAgIHBhdGguc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAodW5zaGlmdCkgcGF0aC51bnNoaWZ0KCcnKTtcbiAgaWYgKGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nKSBwYXRoLnB1c2goJycpO1xuXG4gIHJldHVybiBwYXRoLmpvaW4oJy8nKTtcbn1cblxuLyoqXG4gKiBUaGUgYWN0dWFsIFVSTCBpbnN0YW5jZS4gSW5zdGVhZCBvZiByZXR1cm5pbmcgYW4gb2JqZWN0IHdlJ3ZlIG9wdGVkLWluIHRvXG4gKiBjcmVhdGUgYW4gYWN0dWFsIGNvbnN0cnVjdG9yIGFzIGl0J3MgbXVjaCBtb3JlIG1lbW9yeSBlZmZpY2llbnQgYW5kXG4gKiBmYXN0ZXIgYW5kIGl0IHBsZWFzZXMgbXkgT0NELlxuICpcbiAqIEl0IGlzIHdvcnRoIG5vdGluZyB0aGF0IHdlIHNob3VsZCBub3QgdXNlIGBVUkxgIGFzIGNsYXNzIG5hbWUgdG8gcHJldmVudFxuICogY2xhc2hlcyB3aXRoIHRoZSBnbG9iYWwgVVJMIGluc3RhbmNlIHRoYXQgZ290IGludHJvZHVjZWQgaW4gYnJvd3NlcnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyBVUkwgd2Ugd2FudCB0byBwYXJzZS5cbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gW2xvY2F0aW9uXSBMb2NhdGlvbiBkZWZhdWx0cyBmb3IgcmVsYXRpdmUgcGF0aHMuXG4gKiBAcGFyYW0ge0Jvb2xlYW58RnVuY3Rpb259IFtwYXJzZXJdIFBhcnNlciBmb3IgdGhlIHF1ZXJ5IHN0cmluZy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIFVybChhZGRyZXNzLCBsb2NhdGlvbiwgcGFyc2VyKSB7XG4gIGFkZHJlc3MgPSB0cmltTGVmdChhZGRyZXNzKTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVXJsKSkge1xuICAgIHJldHVybiBuZXcgVXJsKGFkZHJlc3MsIGxvY2F0aW9uLCBwYXJzZXIpO1xuICB9XG5cbiAgdmFyIHJlbGF0aXZlLCBleHRyYWN0ZWQsIHBhcnNlLCBpbnN0cnVjdGlvbiwgaW5kZXgsIGtleVxuICAgICwgaW5zdHJ1Y3Rpb25zID0gcnVsZXMuc2xpY2UoKVxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NhdGlvblxuICAgICwgdXJsID0gdGhpc1xuICAgICwgaSA9IDA7XG5cbiAgLy9cbiAgLy8gVGhlIGZvbGxvd2luZyBpZiBzdGF0ZW1lbnRzIGFsbG93cyB0aGlzIG1vZHVsZSB0d28gaGF2ZSBjb21wYXRpYmlsaXR5IHdpdGhcbiAgLy8gMiBkaWZmZXJlbnQgQVBJOlxuICAvL1xuICAvLyAxLiBOb2RlLmpzJ3MgYHVybC5wYXJzZWAgYXBpIHdoaWNoIGFjY2VwdHMgYSBVUkwsIGJvb2xlYW4gYXMgYXJndW1lbnRzXG4gIC8vICAgIHdoZXJlIHRoZSBib29sZWFuIGluZGljYXRlcyB0aGF0IHRoZSBxdWVyeSBzdHJpbmcgc2hvdWxkIGFsc28gYmUgcGFyc2VkLlxuICAvL1xuICAvLyAyLiBUaGUgYFVSTGAgaW50ZXJmYWNlIG9mIHRoZSBicm93c2VyIHdoaWNoIGFjY2VwdHMgYSBVUkwsIG9iamVjdCBhc1xuICAvLyAgICBhcmd1bWVudHMuIFRoZSBzdXBwbGllZCBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIGRlZmF1bHQgdmFsdWVzIC8gZmFsbC1iYWNrXG4gIC8vICAgIGZvciByZWxhdGl2ZSBwYXRocy5cbiAgLy9cbiAgaWYgKCdvYmplY3QnICE9PSB0eXBlICYmICdzdHJpbmcnICE9PSB0eXBlKSB7XG4gICAgcGFyc2VyID0gbG9jYXRpb247XG4gICAgbG9jYXRpb24gPSBudWxsO1xuICB9XG5cbiAgaWYgKHBhcnNlciAmJiAnZnVuY3Rpb24nICE9PSB0eXBlb2YgcGFyc2VyKSBwYXJzZXIgPSBxcy5wYXJzZTtcblxuICBsb2NhdGlvbiA9IGxvbGNhdGlvbihsb2NhdGlvbik7XG5cbiAgLy9cbiAgLy8gRXh0cmFjdCBwcm90b2NvbCBpbmZvcm1hdGlvbiBiZWZvcmUgcnVubmluZyB0aGUgaW5zdHJ1Y3Rpb25zLlxuICAvL1xuICBleHRyYWN0ZWQgPSBleHRyYWN0UHJvdG9jb2woYWRkcmVzcyB8fCAnJyk7XG4gIHJlbGF0aXZlID0gIWV4dHJhY3RlZC5wcm90b2NvbCAmJiAhZXh0cmFjdGVkLnNsYXNoZXM7XG4gIHVybC5zbGFzaGVzID0gZXh0cmFjdGVkLnNsYXNoZXMgfHwgcmVsYXRpdmUgJiYgbG9jYXRpb24uc2xhc2hlcztcbiAgdXJsLnByb3RvY29sID0gZXh0cmFjdGVkLnByb3RvY29sIHx8IGxvY2F0aW9uLnByb3RvY29sIHx8ICcnO1xuICBhZGRyZXNzID0gZXh0cmFjdGVkLnJlc3Q7XG5cbiAgLy9cbiAgLy8gV2hlbiB0aGUgYXV0aG9yaXR5IGNvbXBvbmVudCBpcyBhYnNlbnQgdGhlIFVSTCBzdGFydHMgd2l0aCBhIHBhdGhcbiAgLy8gY29tcG9uZW50LlxuICAvL1xuICBpZiAoIWV4dHJhY3RlZC5zbGFzaGVzKSBpbnN0cnVjdGlvbnNbM10gPSBbLyguKikvLCAncGF0aG5hbWUnXTtcblxuICBmb3IgKDsgaSA8IGluc3RydWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb25zW2ldO1xuXG4gICAgaWYgKHR5cGVvZiBpbnN0cnVjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWRkcmVzcyA9IGluc3RydWN0aW9uKGFkZHJlc3MpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcGFyc2UgPSBpbnN0cnVjdGlvblswXTtcbiAgICBrZXkgPSBpbnN0cnVjdGlvblsxXTtcblxuICAgIGlmIChwYXJzZSAhPT0gcGFyc2UpIHtcbiAgICAgIHVybFtrZXldID0gYWRkcmVzcztcbiAgICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgcGFyc2UpIHtcbiAgICAgIGlmICh+KGluZGV4ID0gYWRkcmVzcy5pbmRleE9mKHBhcnNlKSkpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YgaW5zdHJ1Y3Rpb25bMl0pIHtcbiAgICAgICAgICB1cmxba2V5XSA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnNsaWNlKGluZGV4ICsgaW5zdHJ1Y3Rpb25bMl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVybFtrZXldID0gYWRkcmVzcy5zbGljZShpbmRleCk7XG4gICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoaW5kZXggPSBwYXJzZS5leGVjKGFkZHJlc3MpKSkge1xuICAgICAgdXJsW2tleV0gPSBpbmRleFsxXTtcbiAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnNsaWNlKDAsIGluZGV4LmluZGV4KTtcbiAgICB9XG5cbiAgICB1cmxba2V5XSA9IHVybFtrZXldIHx8IChcbiAgICAgIHJlbGF0aXZlICYmIGluc3RydWN0aW9uWzNdID8gbG9jYXRpb25ba2V5XSB8fCAnJyA6ICcnXG4gICAgKTtcblxuICAgIC8vXG4gICAgLy8gSG9zdG5hbWUsIGhvc3QgYW5kIHByb3RvY29sIHNob3VsZCBiZSBsb3dlcmNhc2VkIHNvIHRoZXkgY2FuIGJlIHVzZWQgdG9cbiAgICAvLyBjcmVhdGUgYSBwcm9wZXIgYG9yaWdpbmAuXG4gICAgLy9cbiAgICBpZiAoaW5zdHJ1Y3Rpb25bNF0pIHVybFtrZXldID0gdXJsW2tleV0udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIC8vXG4gIC8vIEFsc28gcGFyc2UgdGhlIHN1cHBsaWVkIHF1ZXJ5IHN0cmluZyBpbiB0byBhbiBvYmplY3QuIElmIHdlJ3JlIHN1cHBsaWVkXG4gIC8vIHdpdGggYSBjdXN0b20gcGFyc2VyIGFzIGZ1bmN0aW9uIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgYnVpbGQtaW5cbiAgLy8gcGFyc2VyLlxuICAvL1xuICBpZiAocGFyc2VyKSB1cmwucXVlcnkgPSBwYXJzZXIodXJsLnF1ZXJ5KTtcblxuICAvL1xuICAvLyBJZiB0aGUgVVJMIGlzIHJlbGF0aXZlLCByZXNvbHZlIHRoZSBwYXRobmFtZSBhZ2FpbnN0IHRoZSBiYXNlIFVSTC5cbiAgLy9cbiAgaWYgKFxuICAgICAgcmVsYXRpdmVcbiAgICAmJiBsb2NhdGlvbi5zbGFzaGVzXG4gICAgJiYgdXJsLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nXG4gICAgJiYgKHVybC5wYXRobmFtZSAhPT0gJycgfHwgbG9jYXRpb24ucGF0aG5hbWUgIT09ICcnKVxuICApIHtcbiAgICB1cmwucGF0aG5hbWUgPSByZXNvbHZlKHVybC5wYXRobmFtZSwgbG9jYXRpb24ucGF0aG5hbWUpO1xuICB9XG5cbiAgLy9cbiAgLy8gV2Ugc2hvdWxkIG5vdCBhZGQgcG9ydCBudW1iZXJzIGlmIHRoZXkgYXJlIGFscmVhZHkgdGhlIGRlZmF1bHQgcG9ydCBudW1iZXJcbiAgLy8gZm9yIGEgZ2l2ZW4gcHJvdG9jb2wuIEFzIHRoZSBob3N0IGFsc28gY29udGFpbnMgdGhlIHBvcnQgbnVtYmVyIHdlJ3JlIGdvaW5nXG4gIC8vIG92ZXJyaWRlIGl0IHdpdGggdGhlIGhvc3RuYW1lIHdoaWNoIGNvbnRhaW5zIG5vIHBvcnQgbnVtYmVyLlxuICAvL1xuICBpZiAoIXJlcXVpcmVkKHVybC5wb3J0LCB1cmwucHJvdG9jb2wpKSB7XG4gICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWU7XG4gICAgdXJsLnBvcnQgPSAnJztcbiAgfVxuXG4gIC8vXG4gIC8vIFBhcnNlIGRvd24gdGhlIGBhdXRoYCBmb3IgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZC5cbiAgLy9cbiAgdXJsLnVzZXJuYW1lID0gdXJsLnBhc3N3b3JkID0gJyc7XG4gIGlmICh1cmwuYXV0aCkge1xuICAgIGluc3RydWN0aW9uID0gdXJsLmF1dGguc3BsaXQoJzonKTtcbiAgICB1cmwudXNlcm5hbWUgPSBpbnN0cnVjdGlvblswXSB8fCAnJztcbiAgICB1cmwucGFzc3dvcmQgPSBpbnN0cnVjdGlvblsxXSB8fCAnJztcbiAgfVxuXG4gIHVybC5vcmlnaW4gPSB1cmwucHJvdG9jb2wgJiYgdXJsLmhvc3QgJiYgdXJsLnByb3RvY29sICE9PSAnZmlsZTonXG4gICAgPyB1cmwucHJvdG9jb2wgKycvLycrIHVybC5ob3N0XG4gICAgOiAnbnVsbCc7XG5cbiAgLy9cbiAgLy8gVGhlIGhyZWYgaXMganVzdCB0aGUgY29tcGlsZWQgcmVzdWx0LlxuICAvL1xuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgY29udmVuaWVuY2UgbWV0aG9kIGZvciBjaGFuZ2luZyBwcm9wZXJ0aWVzIGluIHRoZSBVUkwgaW5zdGFuY2UgdG9cbiAqIGluc3VyZSB0aGF0IHRoZXkgYWxsIHByb3BhZ2F0ZSBjb3JyZWN0bHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhcnQgICAgICAgICAgUHJvcGVydHkgd2UgbmVlZCB0byBhZGp1c3QuXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSAgICAgICAgICBUaGUgbmV3bHkgYXNzaWduZWQgdmFsdWUuXG4gKiBAcGFyYW0ge0Jvb2xlYW58RnVuY3Rpb259IGZuICBXaGVuIHNldHRpbmcgdGhlIHF1ZXJ5LCBpdCB3aWxsIGJlIHRoZSBmdW5jdGlvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCB0byBwYXJzZSB0aGUgcXVlcnkuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHNldHRpbmcgdGhlIHByb3RvY29sLCBkb3VibGUgc2xhc2ggd2lsbCBiZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZCBmcm9tIHRoZSBmaW5hbCB1cmwgaWYgaXQgaXMgdHJ1ZS5cbiAqIEByZXR1cm5zIHtVUkx9IFVSTCBpbnN0YW5jZSBmb3IgY2hhaW5pbmcuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHNldChwYXJ0LCB2YWx1ZSwgZm4pIHtcbiAgdmFyIHVybCA9IHRoaXM7XG5cbiAgc3dpdGNoIChwYXJ0KSB7XG4gICAgY2FzZSAncXVlcnknOlxuICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgdmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gKGZuIHx8IHFzLnBhcnNlKSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwb3J0JzpcbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuXG4gICAgICBpZiAoIXJlcXVpcmVkKHZhbHVlLCB1cmwucHJvdG9jb2wpKSB7XG4gICAgICAgIHVybC5ob3N0ID0gdXJsLmhvc3RuYW1lO1xuICAgICAgICB1cmxbcGFydF0gPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWUgKyc6JysgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaG9zdG5hbWUnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICh1cmwucG9ydCkgdmFsdWUgKz0gJzonKyB1cmwucG9ydDtcbiAgICAgIHVybC5ob3N0ID0gdmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2hvc3QnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICgvOlxcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgICAgIHVybC5wb3J0ID0gdmFsdWUucG9wKCk7XG4gICAgICAgIHVybC5ob3N0bmFtZSA9IHZhbHVlLmpvaW4oJzonKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybC5ob3N0bmFtZSA9IHZhbHVlO1xuICAgICAgICB1cmwucG9ydCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3Byb3RvY29sJzpcbiAgICAgIHVybC5wcm90b2NvbCA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICB1cmwuc2xhc2hlcyA9ICFmbjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncGF0aG5hbWUnOlxuICAgIGNhc2UgJ2hhc2gnOlxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhciBjaGFyID0gcGFydCA9PT0gJ3BhdGhuYW1lJyA/ICcvJyA6ICcjJztcbiAgICAgICAgdXJsW3BhcnRdID0gdmFsdWUuY2hhckF0KDApICE9PSBjaGFyID8gY2hhciArIHZhbHVlIDogdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnMgPSBydWxlc1tpXTtcblxuICAgIGlmIChpbnNbNF0pIHVybFtpbnNbMV1dID0gdXJsW2luc1sxXV0udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHVybC5vcmlnaW4gPSB1cmwucHJvdG9jb2wgJiYgdXJsLmhvc3QgJiYgdXJsLnByb3RvY29sICE9PSAnZmlsZTonXG4gICAgPyB1cmwucHJvdG9jb2wgKycvLycrIHVybC5ob3N0XG4gICAgOiAnbnVsbCc7XG5cbiAgdXJsLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcblxuICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgcHJvcGVydGllcyBiYWNrIGluIHRvIGEgdmFsaWQgYW5kIGZ1bGwgVVJMIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmdpZnkgT3B0aW9uYWwgcXVlcnkgc3RyaW5naWZ5IGZ1bmN0aW9uLlxuICogQHJldHVybnMge1N0cmluZ30gQ29tcGlsZWQgdmVyc2lvbiBvZiB0aGUgVVJMLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyhzdHJpbmdpZnkpIHtcbiAgaWYgKCFzdHJpbmdpZnkgfHwgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIHN0cmluZ2lmeSkgc3RyaW5naWZ5ID0gcXMuc3RyaW5naWZ5O1xuXG4gIHZhciBxdWVyeVxuICAgICwgdXJsID0gdGhpc1xuICAgICwgcHJvdG9jb2wgPSB1cmwucHJvdG9jb2w7XG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLmNoYXJBdChwcm90b2NvbC5sZW5ndGggLSAxKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOic7XG5cbiAgdmFyIHJlc3VsdCA9IHByb3RvY29sICsgKHVybC5zbGFzaGVzID8gJy8vJyA6ICcnKTtcblxuICBpZiAodXJsLnVzZXJuYW1lKSB7XG4gICAgcmVzdWx0ICs9IHVybC51c2VybmFtZTtcbiAgICBpZiAodXJsLnBhc3N3b3JkKSByZXN1bHQgKz0gJzonKyB1cmwucGFzc3dvcmQ7XG4gICAgcmVzdWx0ICs9ICdAJztcbiAgfVxuXG4gIHJlc3VsdCArPSB1cmwuaG9zdCArIHVybC5wYXRobmFtZTtcblxuICBxdWVyeSA9ICdvYmplY3QnID09PSB0eXBlb2YgdXJsLnF1ZXJ5ID8gc3RyaW5naWZ5KHVybC5xdWVyeSkgOiB1cmwucXVlcnk7XG4gIGlmIChxdWVyeSkgcmVzdWx0ICs9ICc/JyAhPT0gcXVlcnkuY2hhckF0KDApID8gJz8nKyBxdWVyeSA6IHF1ZXJ5O1xuXG4gIGlmICh1cmwuaGFzaCkgcmVzdWx0ICs9IHVybC5oYXNoO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblVybC5wcm90b3R5cGUgPSB7IHNldDogc2V0LCB0b1N0cmluZzogdG9TdHJpbmcgfTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgVVJMIHBhcnNlciBhbmQgc29tZSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdGhhdCBtaWdodCBiZSB1c2VmdWwgZm9yXG4vLyBvdGhlcnMgb3IgdGVzdGluZy5cbi8vXG5VcmwuZXh0cmFjdFByb3RvY29sID0gZXh0cmFjdFByb3RvY29sO1xuVXJsLmxvY2F0aW9uID0gbG9sY2F0aW9uO1xuVXJsLnRyaW1MZWZ0ID0gdHJpbUxlZnQ7XG5VcmwucXMgPSBxcztcblxubW9kdWxlLmV4cG9ydHMgPSBVcmw7XG4iLCJpbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsIG5hbWUgPSBcIk1pc3NpbmcgbmFtZVwiIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgICAgICBgXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde3RpdGxlLCBcIm5hbWVcIjogYXV0aG9yLT5uYW1lfVxuICBgLFxuICAgICAgICB7IHNsdWcgfVxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=