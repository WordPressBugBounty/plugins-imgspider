(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // wp-ext:@wordpress/plugins
  var require_plugins = __commonJS({
    "wp-ext:@wordpress/plugins"(exports, module) {
      module.exports = wp.plugins;
    }
  });

  // wp-ext:lodash
  var require_lodash = __commonJS({
    "wp-ext:lodash"(exports, module) {
      module.exports = window.lodash;
    }
  });

  // wp-ext:@wordpress/data
  var require_data = __commonJS({
    "wp-ext:@wordpress/data"(exports, module) {
      module.exports = wp.data;
    }
  });

  // wp-ext:@wordpress/core-data
  var require_core_data = __commonJS({
    "wp-ext:@wordpress/core-data"(exports, module) {
      module.exports = wp.coreData;
    }
  });

  // wp-ext:@wordpress/compose
  var require_compose = __commonJS({
    "wp-ext:@wordpress/compose"(exports, module) {
      module.exports = wp.compose;
    }
  });

  // wp-ext:@wordpress/components
  var require_components = __commonJS({
    "wp-ext:@wordpress/components"(exports, module) {
      module.exports = wp.components;
    }
  });

  // src/vendor/md5.js
  var require_md5 = __commonJS({
    "src/vendor/md5.js"(exports, module) {
      !(function(n2) {
        "use strict";
        function d(n3, t3) {
          var r2 = (65535 & n3) + (65535 & t3);
          return (n3 >> 16) + (t3 >> 16) + (r2 >> 16) << 16 | 65535 & r2;
        }
        function f(n3, t3, r2, e2, o2, u2) {
          return d((u2 = d(d(t3, n3), d(e2, u2))) << o2 | u2 >>> 32 - o2, r2);
        }
        function l(n3, t3, r2, e2, o2, u2, c2) {
          return f(t3 & r2 | ~t3 & e2, n3, t3, o2, u2, c2);
        }
        function g(n3, t3, r2, e2, o2, u2, c2) {
          return f(t3 & e2 | r2 & ~e2, n3, t3, o2, u2, c2);
        }
        function v(n3, t3, r2, e2, o2, u2, c2) {
          return f(t3 ^ r2 ^ e2, n3, t3, o2, u2, c2);
        }
        function m(n3, t3, r2, e2, o2, u2, c2) {
          return f(r2 ^ (t3 | ~e2), n3, t3, o2, u2, c2);
        }
        function c(n3, t3) {
          var r2, e2, o2, u2;
          n3[t3 >> 5] |= 128 << t3 % 32, n3[14 + (t3 + 64 >>> 9 << 4)] = t3;
          for (var c2 = 1732584193, f2 = -271733879, i2 = -1732584194, a2 = 271733878, h = 0; h < n3.length; h += 16) c2 = l(r2 = c2, e2 = f2, o2 = i2, u2 = a2, n3[h], 7, -680876936), a2 = l(a2, c2, f2, i2, n3[h + 1], 12, -389564586), i2 = l(i2, a2, c2, f2, n3[h + 2], 17, 606105819), f2 = l(f2, i2, a2, c2, n3[h + 3], 22, -1044525330), c2 = l(c2, f2, i2, a2, n3[h + 4], 7, -176418897), a2 = l(a2, c2, f2, i2, n3[h + 5], 12, 1200080426), i2 = l(i2, a2, c2, f2, n3[h + 6], 17, -1473231341), f2 = l(f2, i2, a2, c2, n3[h + 7], 22, -45705983), c2 = l(c2, f2, i2, a2, n3[h + 8], 7, 1770035416), a2 = l(a2, c2, f2, i2, n3[h + 9], 12, -1958414417), i2 = l(i2, a2, c2, f2, n3[h + 10], 17, -42063), f2 = l(f2, i2, a2, c2, n3[h + 11], 22, -1990404162), c2 = l(c2, f2, i2, a2, n3[h + 12], 7, 1804603682), a2 = l(a2, c2, f2, i2, n3[h + 13], 12, -40341101), i2 = l(i2, a2, c2, f2, n3[h + 14], 17, -1502002290), c2 = g(c2, f2 = l(f2, i2, a2, c2, n3[h + 15], 22, 1236535329), i2, a2, n3[h + 1], 5, -165796510), a2 = g(a2, c2, f2, i2, n3[h + 6], 9, -1069501632), i2 = g(i2, a2, c2, f2, n3[h + 11], 14, 643717713), f2 = g(f2, i2, a2, c2, n3[h], 20, -373897302), c2 = g(c2, f2, i2, a2, n3[h + 5], 5, -701558691), a2 = g(a2, c2, f2, i2, n3[h + 10], 9, 38016083), i2 = g(i2, a2, c2, f2, n3[h + 15], 14, -660478335), f2 = g(f2, i2, a2, c2, n3[h + 4], 20, -405537848), c2 = g(c2, f2, i2, a2, n3[h + 9], 5, 568446438), a2 = g(a2, c2, f2, i2, n3[h + 14], 9, -1019803690), i2 = g(i2, a2, c2, f2, n3[h + 3], 14, -187363961), f2 = g(f2, i2, a2, c2, n3[h + 8], 20, 1163531501), c2 = g(c2, f2, i2, a2, n3[h + 13], 5, -1444681467), a2 = g(a2, c2, f2, i2, n3[h + 2], 9, -51403784), i2 = g(i2, a2, c2, f2, n3[h + 7], 14, 1735328473), c2 = v(c2, f2 = g(f2, i2, a2, c2, n3[h + 12], 20, -1926607734), i2, a2, n3[h + 5], 4, -378558), a2 = v(a2, c2, f2, i2, n3[h + 8], 11, -2022574463), i2 = v(i2, a2, c2, f2, n3[h + 11], 16, 1839030562), f2 = v(f2, i2, a2, c2, n3[h + 14], 23, -35309556), c2 = v(c2, f2, i2, a2, n3[h + 1], 4, -1530992060), a2 = v(a2, c2, f2, i2, n3[h + 4], 11, 1272893353), i2 = v(i2, a2, c2, f2, n3[h + 7], 16, -155497632), f2 = v(f2, i2, a2, c2, n3[h + 10], 23, -1094730640), c2 = v(c2, f2, i2, a2, n3[h + 13], 4, 681279174), a2 = v(a2, c2, f2, i2, n3[h], 11, -358537222), i2 = v(i2, a2, c2, f2, n3[h + 3], 16, -722521979), f2 = v(f2, i2, a2, c2, n3[h + 6], 23, 76029189), c2 = v(c2, f2, i2, a2, n3[h + 9], 4, -640364487), a2 = v(a2, c2, f2, i2, n3[h + 12], 11, -421815835), i2 = v(i2, a2, c2, f2, n3[h + 15], 16, 530742520), c2 = m(c2, f2 = v(f2, i2, a2, c2, n3[h + 2], 23, -995338651), i2, a2, n3[h], 6, -198630844), a2 = m(a2, c2, f2, i2, n3[h + 7], 10, 1126891415), i2 = m(i2, a2, c2, f2, n3[h + 14], 15, -1416354905), f2 = m(f2, i2, a2, c2, n3[h + 5], 21, -57434055), c2 = m(c2, f2, i2, a2, n3[h + 12], 6, 1700485571), a2 = m(a2, c2, f2, i2, n3[h + 3], 10, -1894986606), i2 = m(i2, a2, c2, f2, n3[h + 10], 15, -1051523), f2 = m(f2, i2, a2, c2, n3[h + 1], 21, -2054922799), c2 = m(c2, f2, i2, a2, n3[h + 8], 6, 1873313359), a2 = m(a2, c2, f2, i2, n3[h + 15], 10, -30611744), i2 = m(i2, a2, c2, f2, n3[h + 6], 15, -1560198380), f2 = m(f2, i2, a2, c2, n3[h + 13], 21, 1309151649), c2 = m(c2, f2, i2, a2, n3[h + 4], 6, -145523070), a2 = m(a2, c2, f2, i2, n3[h + 11], 10, -1120210379), i2 = m(i2, a2, c2, f2, n3[h + 2], 15, 718787259), f2 = m(f2, i2, a2, c2, n3[h + 9], 21, -343485551), c2 = d(c2, r2), f2 = d(f2, e2), i2 = d(i2, o2), a2 = d(a2, u2);
          return [c2, f2, i2, a2];
        }
        function i(n3) {
          for (var t3 = "", r2 = 32 * n3.length, e2 = 0; e2 < r2; e2 += 8) t3 += String.fromCharCode(n3[e2 >> 5] >>> e2 % 32 & 255);
          return t3;
        }
        function a(n3) {
          var t3 = [];
          for (t3[(n3.length >> 2) - 1] = void 0, e2 = 0; e2 < t3.length; e2 += 1) t3[e2] = 0;
          for (var r2 = 8 * n3.length, e2 = 0; e2 < r2; e2 += 8) t3[e2 >> 5] |= (255 & n3.charCodeAt(e2 / 8)) << e2 % 32;
          return t3;
        }
        function e(n3) {
          for (var t3, r2 = "0123456789abcdef", e2 = "", o2 = 0; o2 < n3.length; o2 += 1) t3 = n3.charCodeAt(o2), e2 += r2.charAt(t3 >>> 4 & 15) + r2.charAt(15 & t3);
          return e2;
        }
        function r(n3) {
          return unescape(encodeURIComponent(n3));
        }
        function o(n3) {
          return i(c(a(n3 = r(n3)), 8 * n3.length));
        }
        function u(n3, t3) {
          return (function(n4, t4) {
            var r2, e2 = a(n4), o2 = [], u2 = [];
            for (o2[15] = u2[15] = void 0, 16 < e2.length && (e2 = c(e2, 8 * n4.length)), r2 = 0; r2 < 16; r2 += 1) o2[r2] = 909522486 ^ e2[r2], u2[r2] = 1549556828 ^ e2[r2];
            return t4 = c(o2.concat(a(t4)), 512 + 8 * t4.length), i(c(u2.concat(t4), 640));
          })(r(n3), r(t3));
        }
        function t2(n3, t3, r2) {
          return t3 ? r2 ? u(t3, n3) : e(u(t3, n3)) : r2 ? o(n3) : e(o(n3));
        }
        "function" == typeof define && define.amd ? define(function() {
          return t2;
        }) : "object" == typeof module && module.exports ? module.exports = t2 : n2.md5 = t2;
      })(exports);
    }
  });

  // ../__options/node_modules/es-errors/type.js
  var require_type = __commonJS({
    "../__options/node_modules/es-errors/type.js"(exports, module) {
      "use strict";
      module.exports = TypeError;
    }
  });

  // (disabled):../__options/node_modules/object-inspect/util.inspect
  var require_util = __commonJS({
    "(disabled):../__options/node_modules/object-inspect/util.inspect"() {
    }
  });

  // ../__options/node_modules/object-inspect/index.js
  var require_object_inspect = __commonJS({
    "../__options/node_modules/object-inspect/index.js"(exports, module) {
      var hasMap = typeof Map === "function" && Map.prototype;
      var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
      var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
      var mapForEach = hasMap && Map.prototype.forEach;
      var hasSet = typeof Set === "function" && Set.prototype;
      var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
      var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
      var setForEach = hasSet && Set.prototype.forEach;
      var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
      var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
      var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
      var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
      var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
      var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
      var booleanValueOf = Boolean.prototype.valueOf;
      var objectToString = Object.prototype.toString;
      var functionToString = Function.prototype.toString;
      var $match = String.prototype.match;
      var $slice = String.prototype.slice;
      var $replace = String.prototype.replace;
      var $toUpperCase = String.prototype.toUpperCase;
      var $toLowerCase = String.prototype.toLowerCase;
      var $test = RegExp.prototype.test;
      var $concat = Array.prototype.concat;
      var $join = Array.prototype.join;
      var $arrSlice = Array.prototype.slice;
      var $floor = Math.floor;
      var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
      var gOPS = Object.getOwnPropertySymbols;
      var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
      var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
      var toStringTag2 = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
        return O.__proto__;
      } : null);
      function addNumericSeparator(num, str) {
        if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
          return str;
        }
        var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof num === "number") {
          var int = num < 0 ? -$floor(-num) : $floor(num);
          if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
          }
        }
        return $replace.call(str, sepRegex, "$&_");
      }
      var utilInspect = require_util();
      var inspectCustom = utilInspect.custom;
      var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
      var quotes = {
        __proto__: null,
        "double": '"',
        single: "'"
      };
      var quoteREs = {
        __proto__: null,
        "double": /(["\\])/g,
        single: /(['\\])/g
      };
      module.exports = function inspect_(obj, options, depth, seen) {
        var opts = options || {};
        if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
        }
        if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
          throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        }
        var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
        if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
          throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        }
        if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
          throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        }
        if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
          throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        }
        var numericSeparator = opts.numericSeparator;
        if (typeof obj === "undefined") {
          return "undefined";
        }
        if (obj === null) {
          return "null";
        }
        if (typeof obj === "boolean") {
          return obj ? "true" : "false";
        }
        if (typeof obj === "string") {
          return inspectString(obj, opts);
        }
        if (typeof obj === "number") {
          if (obj === 0) {
            return Infinity / obj > 0 ? "0" : "-0";
          }
          var str = String(obj);
          return numericSeparator ? addNumericSeparator(obj, str) : str;
        }
        if (typeof obj === "bigint") {
          var bigIntStr = String(obj) + "n";
          return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
        }
        var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
        if (typeof depth === "undefined") {
          depth = 0;
        }
        if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
          return isArray2(obj) ? "[Array]" : "[Object]";
        }
        var indent = getIndent(opts, depth);
        if (typeof seen === "undefined") {
          seen = [];
        } else if (indexOf(seen, obj) >= 0) {
          return "[Circular]";
        }
        function inspect(value, from, noIndent) {
          if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
          }
          if (noIndent) {
            var newOpts = {
              depth: opts.depth
            };
            if (has(opts, "quoteStyle")) {
              newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
          }
          return inspect_(value, opts, depth + 1, seen);
        }
        if (typeof obj === "function" && !isRegExp2(obj)) {
          var name = nameOf(obj);
          var keys = arrObjKeys(obj, inspect);
          return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
        }
        if (isSymbol(obj)) {
          var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
          return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
        }
        if (isElement(obj)) {
          var s2 = "<" + $toLowerCase.call(String(obj.nodeName));
          var attrs = obj.attributes || [];
          for (var i = 0; i < attrs.length; i++) {
            s2 += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
          }
          s2 += ">";
          if (obj.childNodes && obj.childNodes.length) {
            s2 += "...";
          }
          s2 += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
          return s2;
        }
        if (isArray2(obj)) {
          if (obj.length === 0) {
            return "[]";
          }
          var xs = arrObjKeys(obj, inspect);
          if (indent && !singleLineValues(xs)) {
            return "[" + indentedJoin(xs, indent) + "]";
          }
          return "[ " + $join.call(xs, ", ") + " ]";
        }
        if (isError(obj)) {
          var parts = arrObjKeys(obj, inspect);
          if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
            return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
          }
          if (parts.length === 0) {
            return "[" + String(obj) + "]";
          }
          return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
        }
        if (typeof obj === "object" && customInspect) {
          if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
          } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
            return obj.inspect();
          }
        }
        if (isMap(obj)) {
          var mapParts = [];
          if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
              mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
            });
          }
          return collectionOf("Map", mapSize.call(obj), mapParts, indent);
        }
        if (isSet2(obj)) {
          var setParts = [];
          if (setForEach) {
            setForEach.call(obj, function(value) {
              setParts.push(inspect(value, obj));
            });
          }
          return collectionOf("Set", setSize.call(obj), setParts, indent);
        }
        if (isWeakMap(obj)) {
          return weakCollectionOf("WeakMap");
        }
        if (isWeakSet(obj)) {
          return weakCollectionOf("WeakSet");
        }
        if (isWeakRef(obj)) {
          return weakCollectionOf("WeakRef");
        }
        if (isNumber2(obj)) {
          return markBoxed(inspect(Number(obj)));
        }
        if (isBigInt(obj)) {
          return markBoxed(inspect(bigIntValueOf.call(obj)));
        }
        if (isBoolean2(obj)) {
          return markBoxed(booleanValueOf.call(obj));
        }
        if (isString2(obj)) {
          return markBoxed(inspect(String(obj)));
        }
        if (typeof window !== "undefined" && obj === window) {
          return "{ [object Window] }";
        }
        if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
          return "{ [object globalThis] }";
        }
        if (!isDate2(obj) && !isRegExp2(obj)) {
          var ys = arrObjKeys(obj, inspect);
          var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
          var protoTag = obj instanceof Object ? "" : "null prototype";
          var stringTag = !isPlainObject2 && toStringTag2 && Object(obj) === obj && toStringTag2 in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
          var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
          var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
          if (ys.length === 0) {
            return tag + "{}";
          }
          if (indent) {
            return tag + "{" + indentedJoin(ys, indent) + "}";
          }
          return tag + "{ " + $join.call(ys, ", ") + " }";
        }
        return String(obj);
      };
      function wrapQuotes(s2, defaultStyle, opts) {
        var style = opts.quoteStyle || defaultStyle;
        var quoteChar = quotes[style];
        return quoteChar + s2 + quoteChar;
      }
      function quote(s2) {
        return $replace.call(String(s2), /"/g, "&quot;");
      }
      function canTrustToString(obj) {
        return !toStringTag2 || !(typeof obj === "object" && (toStringTag2 in obj || typeof obj[toStringTag2] !== "undefined"));
      }
      function isArray2(obj) {
        return toStr(obj) === "[object Array]" && canTrustToString(obj);
      }
      function isDate2(obj) {
        return toStr(obj) === "[object Date]" && canTrustToString(obj);
      }
      function isRegExp2(obj) {
        return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
      }
      function isError(obj) {
        return toStr(obj) === "[object Error]" && canTrustToString(obj);
      }
      function isString2(obj) {
        return toStr(obj) === "[object String]" && canTrustToString(obj);
      }
      function isNumber2(obj) {
        return toStr(obj) === "[object Number]" && canTrustToString(obj);
      }
      function isBoolean2(obj) {
        return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
      }
      function isSymbol(obj) {
        if (hasShammedSymbols) {
          return obj && typeof obj === "object" && obj instanceof Symbol;
        }
        if (typeof obj === "symbol") {
          return true;
        }
        if (!obj || typeof obj !== "object" || !symToString) {
          return false;
        }
        try {
          symToString.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isBigInt(obj) {
        if (!obj || typeof obj !== "object" || !bigIntValueOf) {
          return false;
        }
        try {
          bigIntValueOf.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      var hasOwn = Object.prototype.hasOwnProperty || function(key) {
        return key in this;
      };
      function has(obj, key) {
        return hasOwn.call(obj, key);
      }
      function toStr(obj) {
        return objectToString.call(obj);
      }
      function nameOf(f) {
        if (f.name) {
          return f.name;
        }
        var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
        if (m) {
          return m[1];
        }
        return null;
      }
      function indexOf(xs, x) {
        if (xs.indexOf) {
          return xs.indexOf(x);
        }
        for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x) {
            return i;
          }
        }
        return -1;
      }
      function isMap(x) {
        if (!mapSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          mapSize.call(x);
          try {
            setSize.call(x);
          } catch (s2) {
            return true;
          }
          return x instanceof Map;
        } catch (e) {
        }
        return false;
      }
      function isWeakMap(x) {
        if (!weakMapHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakMapHas.call(x, weakMapHas);
          try {
            weakSetHas.call(x, weakSetHas);
          } catch (s2) {
            return true;
          }
          return x instanceof WeakMap;
        } catch (e) {
        }
        return false;
      }
      function isWeakRef(x) {
        if (!weakRefDeref || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakRefDeref.call(x);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isSet2(x) {
        if (!setSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          setSize.call(x);
          try {
            mapSize.call(x);
          } catch (m) {
            return true;
          }
          return x instanceof Set;
        } catch (e) {
        }
        return false;
      }
      function isWeakSet(x) {
        if (!weakSetHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakSetHas.call(x, weakSetHas);
          try {
            weakMapHas.call(x, weakMapHas);
          } catch (s2) {
            return true;
          }
          return x instanceof WeakSet;
        } catch (e) {
        }
        return false;
      }
      function isElement(x) {
        if (!x || typeof x !== "object") {
          return false;
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
          return true;
        }
        return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
      }
      function inspectString(str, opts) {
        if (str.length > opts.maxStringLength) {
          var remaining = str.length - opts.maxStringLength;
          var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
          return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
        }
        var quoteRE = quoteREs[opts.quoteStyle || "single"];
        quoteRE.lastIndex = 0;
        var s2 = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
        return wrapQuotes(s2, "single", opts);
      }
      function lowbyte(c) {
        var n2 = c.charCodeAt(0);
        var x = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[n2];
        if (x) {
          return "\\" + x;
        }
        return "\\x" + (n2 < 16 ? "0" : "") + $toUpperCase.call(n2.toString(16));
      }
      function markBoxed(str) {
        return "Object(" + str + ")";
      }
      function weakCollectionOf(type) {
        return type + " { ? }";
      }
      function collectionOf(type, size, entries, indent) {
        var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
        return type + " (" + size + ") {" + joinedEntries + "}";
      }
      function singleLineValues(xs) {
        for (var i = 0; i < xs.length; i++) {
          if (indexOf(xs[i], "\n") >= 0) {
            return false;
          }
        }
        return true;
      }
      function getIndent(opts, depth) {
        var baseIndent;
        if (opts.indent === "	") {
          baseIndent = "	";
        } else if (typeof opts.indent === "number" && opts.indent > 0) {
          baseIndent = $join.call(Array(opts.indent + 1), " ");
        } else {
          return null;
        }
        return {
          base: baseIndent,
          prev: $join.call(Array(depth + 1), baseIndent)
        };
      }
      function indentedJoin(xs, indent) {
        if (xs.length === 0) {
          return "";
        }
        var lineJoiner = "\n" + indent.prev + indent.base;
        return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
      }
      function arrObjKeys(obj, inspect) {
        var isArr = isArray2(obj);
        var xs = [];
        if (isArr) {
          xs.length = obj.length;
          for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
          }
        }
        var syms = typeof gOPS === "function" ? gOPS(obj) : [];
        var symMap;
        if (hasShammedSymbols) {
          symMap = {};
          for (var k = 0; k < syms.length; k++) {
            symMap["$" + syms[k]] = syms[k];
          }
        }
        for (var key in obj) {
          if (!has(obj, key)) {
            continue;
          }
          if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
          }
          if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
            continue;
          } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
          } else {
            xs.push(key + ": " + inspect(obj[key], obj));
          }
        }
        if (typeof gOPS === "function") {
          for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
              xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
            }
          }
        }
        return xs;
      }
    }
  });

  // ../__options/node_modules/side-channel-list/index.js
  var require_side_channel_list = __commonJS({
    "../__options/node_modules/side-channel-list/index.js"(exports, module) {
      "use strict";
      var inspect = require_object_inspect();
      var $TypeError = require_type();
      var listGetNode = function(list, key, isDelete) {
        var prev = list;
        var curr;
        for (; (curr = prev.next) != null; prev = curr) {
          if (curr.key === key) {
            prev.next = curr.next;
            if (!isDelete) {
              curr.next = /** @type {NonNullable<typeof list.next>} */
              list.next;
              list.next = curr;
            }
            return curr;
          }
        }
      };
      var listGet = function(objects, key) {
        if (!objects) {
          return void 0;
        }
        var node = listGetNode(objects, key);
        return node && node.value;
      };
      var listSet = function(objects, key, value) {
        var node = listGetNode(objects, key);
        if (node) {
          node.value = value;
        } else {
          objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
          {
            // eslint-disable-line no-param-reassign, no-extra-parens
            key,
            next: objects.next,
            value
          };
        }
      };
      var listHas = function(objects, key) {
        if (!objects) {
          return false;
        }
        return !!listGetNode(objects, key);
      };
      var listDelete = function(objects, key) {
        if (objects) {
          return listGetNode(objects, key, true);
        }
      };
      module.exports = function getSideChannelList() {
        var $o;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            var deletedNode = listDelete($o, key);
            if (deletedNode && $o && !$o.next) {
              $o = void 0;
            }
            return !!deletedNode;
          },
          get: function(key) {
            return listGet($o, key);
          },
          has: function(key) {
            return listHas($o, key);
          },
          set: function(key, value) {
            if (!$o) {
              $o = {
                next: void 0
              };
            }
            listSet(
              /** @type {NonNullable<typeof $o>} */
              $o,
              key,
              value
            );
          }
        };
        return channel;
      };
    }
  });

  // ../__options/node_modules/es-object-atoms/index.js
  var require_es_object_atoms = __commonJS({
    "../__options/node_modules/es-object-atoms/index.js"(exports, module) {
      "use strict";
      module.exports = Object;
    }
  });

  // ../__options/node_modules/es-errors/index.js
  var require_es_errors = __commonJS({
    "../__options/node_modules/es-errors/index.js"(exports, module) {
      "use strict";
      module.exports = Error;
    }
  });

  // ../__options/node_modules/es-errors/eval.js
  var require_eval = __commonJS({
    "../__options/node_modules/es-errors/eval.js"(exports, module) {
      "use strict";
      module.exports = EvalError;
    }
  });

  // ../__options/node_modules/es-errors/range.js
  var require_range = __commonJS({
    "../__options/node_modules/es-errors/range.js"(exports, module) {
      "use strict";
      module.exports = RangeError;
    }
  });

  // ../__options/node_modules/es-errors/ref.js
  var require_ref = __commonJS({
    "../__options/node_modules/es-errors/ref.js"(exports, module) {
      "use strict";
      module.exports = ReferenceError;
    }
  });

  // ../__options/node_modules/es-errors/syntax.js
  var require_syntax = __commonJS({
    "../__options/node_modules/es-errors/syntax.js"(exports, module) {
      "use strict";
      module.exports = SyntaxError;
    }
  });

  // ../__options/node_modules/es-errors/uri.js
  var require_uri = __commonJS({
    "../__options/node_modules/es-errors/uri.js"(exports, module) {
      "use strict";
      module.exports = URIError;
    }
  });

  // ../__options/node_modules/math-intrinsics/abs.js
  var require_abs = __commonJS({
    "../__options/node_modules/math-intrinsics/abs.js"(exports, module) {
      "use strict";
      module.exports = Math.abs;
    }
  });

  // ../__options/node_modules/math-intrinsics/floor.js
  var require_floor = __commonJS({
    "../__options/node_modules/math-intrinsics/floor.js"(exports, module) {
      "use strict";
      module.exports = Math.floor;
    }
  });

  // ../__options/node_modules/math-intrinsics/max.js
  var require_max = __commonJS({
    "../__options/node_modules/math-intrinsics/max.js"(exports, module) {
      "use strict";
      module.exports = Math.max;
    }
  });

  // ../__options/node_modules/math-intrinsics/min.js
  var require_min = __commonJS({
    "../__options/node_modules/math-intrinsics/min.js"(exports, module) {
      "use strict";
      module.exports = Math.min;
    }
  });

  // ../__options/node_modules/math-intrinsics/pow.js
  var require_pow = __commonJS({
    "../__options/node_modules/math-intrinsics/pow.js"(exports, module) {
      "use strict";
      module.exports = Math.pow;
    }
  });

  // ../__options/node_modules/math-intrinsics/round.js
  var require_round = __commonJS({
    "../__options/node_modules/math-intrinsics/round.js"(exports, module) {
      "use strict";
      module.exports = Math.round;
    }
  });

  // ../__options/node_modules/math-intrinsics/isNaN.js
  var require_isNaN = __commonJS({
    "../__options/node_modules/math-intrinsics/isNaN.js"(exports, module) {
      "use strict";
      module.exports = Number.isNaN || function isNaN2(a) {
        return a !== a;
      };
    }
  });

  // ../__options/node_modules/math-intrinsics/sign.js
  var require_sign = __commonJS({
    "../__options/node_modules/math-intrinsics/sign.js"(exports, module) {
      "use strict";
      var $isNaN = require_isNaN();
      module.exports = function sign(number) {
        if ($isNaN(number) || number === 0) {
          return number;
        }
        return number < 0 ? -1 : 1;
      };
    }
  });

  // ../__options/node_modules/gopd/gOPD.js
  var require_gOPD = __commonJS({
    "../__options/node_modules/gopd/gOPD.js"(exports, module) {
      "use strict";
      module.exports = Object.getOwnPropertyDescriptor;
    }
  });

  // ../__options/node_modules/gopd/index.js
  var require_gopd = __commonJS({
    "../__options/node_modules/gopd/index.js"(exports, module) {
      "use strict";
      var $gOPD = require_gOPD();
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // ../__options/node_modules/es-define-property/index.js
  var require_es_define_property = __commonJS({
    "../__options/node_modules/es-define-property/index.js"(exports, module) {
      "use strict";
      var $defineProperty = Object.defineProperty || false;
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = false;
        }
      }
      module.exports = $defineProperty;
    }
  });

  // ../__options/node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "../__options/node_modules/has-symbols/shams.js"(exports, module) {
      "use strict";
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (var _ in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = (
            /** @type {PropertyDescriptor} */
            Object.getOwnPropertyDescriptor(obj, sym)
          );
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // ../__options/node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "../__options/node_modules/has-symbols/index.js"(exports, module) {
      "use strict";
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // ../__options/node_modules/get-proto/Reflect.getPrototypeOf.js
  var require_Reflect_getPrototypeOf = __commonJS({
    "../__options/node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
      "use strict";
      module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
    }
  });

  // ../__options/node_modules/get-proto/Object.getPrototypeOf.js
  var require_Object_getPrototypeOf = __commonJS({
    "../__options/node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
      "use strict";
      var $Object = require_es_object_atoms();
      module.exports = $Object.getPrototypeOf || null;
    }
  });

  // ../__options/node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "../__options/node_modules/function-bind/implementation.js"(exports, module) {
      "use strict";
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var toStr = Object.prototype.toString;
      var max = Math.max;
      var funcType = "[object Function]";
      var concatty = function concatty2(a, b) {
        var arr = [];
        for (var i = 0; i < a.length; i += 1) {
          arr[i] = a[i];
        }
        for (var j = 0; j < b.length; j += 1) {
          arr[j + a.length] = b[j];
        }
        return arr;
      };
      var slicy = function slicy2(arrLike, offset) {
        var arr = [];
        for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
          arr[j] = arrLike[i];
        }
        return arr;
      };
      var joiny = function(arr, joiner) {
        var str = "";
        for (var i = 0; i < arr.length; i += 1) {
          str += arr[i];
          if (i + 1 < arr.length) {
            str += joiner;
          }
        }
        return str;
      };
      module.exports = function bind2(that) {
        var target = this;
        if (typeof target !== "function" || toStr.apply(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slicy(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(
              this,
              concatty(args, arguments)
            );
            if (Object(result) === result) {
              return result;
            }
            return this;
          }
          return target.apply(
            that,
            concatty(args, arguments)
          );
        };
        var boundLength = max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs[i] = "$" + i;
        }
        bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // ../__options/node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "../__options/node_modules/function-bind/index.js"(exports, module) {
      "use strict";
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // ../__options/node_modules/call-bind-apply-helpers/functionCall.js
  var require_functionCall = __commonJS({
    "../__options/node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
      "use strict";
      module.exports = Function.prototype.call;
    }
  });

  // ../__options/node_modules/call-bind-apply-helpers/functionApply.js
  var require_functionApply = __commonJS({
    "../__options/node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
      "use strict";
      module.exports = Function.prototype.apply;
    }
  });

  // ../__options/node_modules/call-bind-apply-helpers/reflectApply.js
  var require_reflectApply = __commonJS({
    "../__options/node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
      "use strict";
      module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
    }
  });

  // ../__options/node_modules/call-bind-apply-helpers/actualApply.js
  var require_actualApply = __commonJS({
    "../__options/node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
      "use strict";
      var bind2 = require_function_bind();
      var $apply = require_functionApply();
      var $call = require_functionCall();
      var $reflectApply = require_reflectApply();
      module.exports = $reflectApply || bind2.call($call, $apply);
    }
  });

  // ../__options/node_modules/call-bind-apply-helpers/index.js
  var require_call_bind_apply_helpers = __commonJS({
    "../__options/node_modules/call-bind-apply-helpers/index.js"(exports, module) {
      "use strict";
      var bind2 = require_function_bind();
      var $TypeError = require_type();
      var $call = require_functionCall();
      var $actualApply = require_actualApply();
      module.exports = function callBindBasic(args) {
        if (args.length < 1 || typeof args[0] !== "function") {
          throw new $TypeError("a function is required");
        }
        return $actualApply(bind2, $call, args);
      };
    }
  });

  // ../__options/node_modules/dunder-proto/get.js
  var require_get = __commonJS({
    "../__options/node_modules/dunder-proto/get.js"(exports, module) {
      "use strict";
      var callBind = require_call_bind_apply_helpers();
      var gOPD = require_gopd();
      var hasProtoAccessor;
      try {
        hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
        [].__proto__ === Array.prototype;
      } catch (e) {
        if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
          throw e;
        }
      }
      var desc = !!hasProtoAccessor && gOPD && gOPD(
        Object.prototype,
        /** @type {keyof typeof Object.prototype} */
        "__proto__"
      );
      var $Object = Object;
      var $getPrototypeOf = $Object.getPrototypeOf;
      module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
        /** @type {import('./get')} */
        function getDunder(value) {
          return $getPrototypeOf(value == null ? value : $Object(value));
        }
      ) : false;
    }
  });

  // ../__options/node_modules/get-proto/index.js
  var require_get_proto = __commonJS({
    "../__options/node_modules/get-proto/index.js"(exports, module) {
      "use strict";
      var reflectGetProto = require_Reflect_getPrototypeOf();
      var originalGetProto = require_Object_getPrototypeOf();
      var getDunderProto = require_get();
      module.exports = reflectGetProto ? function getProto(O) {
        return reflectGetProto(O);
      } : originalGetProto ? function getProto(O) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new TypeError("getProto: not an object");
        }
        return originalGetProto(O);
      } : getDunderProto ? function getProto(O) {
        return getDunderProto(O);
      } : null;
    }
  });

  // ../__options/node_modules/hasown/index.js
  var require_hasown = __commonJS({
    "../__options/node_modules/hasown/index.js"(exports, module) {
      "use strict";
      var call = Function.prototype.call;
      var $hasOwn = Object.prototype.hasOwnProperty;
      var bind2 = require_function_bind();
      module.exports = bind2.call(call, $hasOwn);
    }
  });

  // ../__options/node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "../__options/node_modules/get-intrinsic/index.js"(exports, module) {
      "use strict";
      var undefined2;
      var $Object = require_es_object_atoms();
      var $Error = require_es_errors();
      var $EvalError = require_eval();
      var $RangeError = require_range();
      var $ReferenceError = require_ref();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var $URIError = require_uri();
      var abs = require_abs();
      var floor = require_floor();
      var max = require_max();
      var min = require_min();
      var pow = require_pow();
      var round = require_round();
      var sign = require_sign();
      var $Function = Function;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = require_gopd();
      var $defineProperty = require_es_define_property();
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? (function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      })() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var getProto = require_get_proto();
      var $ObjectGPO = require_Object_getPrototypeOf();
      var $ReflectGPO = require_Reflect_getPrototypeOf();
      var $apply = require_functionApply();
      var $call = require_functionCall();
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
      var INTRINSICS = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": $Error,
        "%eval%": eval,
        // eslint-disable-line no-eval
        "%EvalError%": $EvalError,
        "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": $Object,
        "%Object.getOwnPropertyDescriptor%": $gOPD,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": $RangeError,
        "%ReferenceError%": $ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": $URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
        "%Function.prototype.call%": $call,
        "%Function.prototype.apply%": $apply,
        "%Object.defineProperty%": $defineProperty,
        "%Object.getPrototypeOf%": $ObjectGPO,
        "%Math.abs%": abs,
        "%Math.floor%": floor,
        "%Math.max%": max,
        "%Math.min%": min,
        "%Math.pow%": pow,
        "%Math.round%": round,
        "%Math.sign%": sign,
        "%Reflect.getPrototypeOf%": $ReflectGPO
      };
      if (getProto) {
        try {
          null.error;
        } catch (e) {
          errorProto = getProto(getProto(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
      }
      var errorProto;
      var doEval = function doEval2(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn = doEval2("%AsyncGeneratorFunction%");
          if (fn) {
            value = fn.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen && getProto) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind2 = require_function_bind();
      var hasOwn = require_hasown();
      var $concat = bind2.call($call, Array.prototype.concat);
      var $spliceApply = bind2.call($apply, Array.prototype.splice);
      var $replace = bind2.call($call, String.prototype.replace);
      var $strSlice = bind2.call($call, String.prototype.slice);
      var $exec = bind2.call($call, RegExp.prototype.exec);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        if ($exec(/^%?[^%]*%?$/, name) === null) {
          throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void undefined2;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // ../__options/node_modules/call-bound/index.js
  var require_call_bound = __commonJS({
    "../__options/node_modules/call-bound/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBindBasic = require_call_bind_apply_helpers();
      var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = (
          /** @type {(this: unknown, ...args: unknown[]) => unknown} */
          GetIntrinsic(name, !!allowMissing)
        );
        if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
          return callBindBasic(
            /** @type {const} */
            [intrinsic]
          );
        }
        return intrinsic;
      };
    }
  });

  // ../__options/node_modules/side-channel-map/index.js
  var require_side_channel_map = __commonJS({
    "../__options/node_modules/side-channel-map/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBound = require_call_bound();
      var inspect = require_object_inspect();
      var $TypeError = require_type();
      var $Map = GetIntrinsic("%Map%", true);
      var $mapGet = callBound("Map.prototype.get", true);
      var $mapSet = callBound("Map.prototype.set", true);
      var $mapHas = callBound("Map.prototype.has", true);
      var $mapDelete = callBound("Map.prototype.delete", true);
      var $mapSize = callBound("Map.prototype.size", true);
      module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */
      function getSideChannelMap() {
        var $m;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            if ($m) {
              var result = $mapDelete($m, key);
              if ($mapSize($m) === 0) {
                $m = void 0;
              }
              return result;
            }
            return false;
          },
          get: function(key) {
            if ($m) {
              return $mapGet($m, key);
            }
          },
          has: function(key) {
            if ($m) {
              return $mapHas($m, key);
            }
            return false;
          },
          set: function(key, value) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          }
        };
        return channel;
      };
    }
  });

  // ../__options/node_modules/side-channel-weakmap/index.js
  var require_side_channel_weakmap = __commonJS({
    "../__options/node_modules/side-channel-weakmap/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBound = require_call_bound();
      var inspect = require_object_inspect();
      var getSideChannelMap = require_side_channel_map();
      var $TypeError = require_type();
      var $WeakMap = GetIntrinsic("%WeakMap%", true);
      var $weakMapGet = callBound("WeakMap.prototype.get", true);
      var $weakMapSet = callBound("WeakMap.prototype.set", true);
      var $weakMapHas = callBound("WeakMap.prototype.has", true);
      var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
      module.exports = $WeakMap ? (
        /** @type {Exclude<import('.'), false>} */
        function getSideChannelWeakMap() {
          var $wm;
          var $m;
          var channel = {
            assert: function(key) {
              if (!channel.has(key)) {
                throw new $TypeError("Side channel does not contain " + inspect(key));
              }
            },
            "delete": function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapDelete($wm, key);
                }
              } else if (getSideChannelMap) {
                if ($m) {
                  return $m["delete"](key);
                }
              }
              return false;
            },
            get: function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapGet($wm, key);
                }
              }
              return $m && $m.get(key);
            },
            has: function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapHas($wm, key);
                }
              }
              return !!$m && $m.has(key);
            },
            set: function(key, value) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) {
                  $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
              } else if (getSideChannelMap) {
                if (!$m) {
                  $m = getSideChannelMap();
                }
                $m.set(key, value);
              }
            }
          };
          return channel;
        }
      ) : getSideChannelMap;
    }
  });

  // ../__options/node_modules/side-channel/index.js
  var require_side_channel = __commonJS({
    "../__options/node_modules/side-channel/index.js"(exports, module) {
      "use strict";
      var $TypeError = require_type();
      var inspect = require_object_inspect();
      var getSideChannelList = require_side_channel_list();
      var getSideChannelMap = require_side_channel_map();
      var getSideChannelWeakMap = require_side_channel_weakmap();
      var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
      module.exports = function getSideChannel() {
        var $channelData;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              var keyDesc = key && Object(key) === key ? "the given object key" : inspect(key);
              throw new $TypeError("Side channel does not contain " + keyDesc);
            }
          },
          "delete": function(key) {
            return !!$channelData && $channelData["delete"](key);
          },
          get: function(key) {
            return $channelData && $channelData.get(key);
          },
          has: function(key) {
            return !!$channelData && $channelData.has(key);
          },
          set: function(key, value) {
            if (!$channelData) {
              $channelData = makeChannel();
            }
            $channelData.set(key, value);
          }
        };
        return channel;
      };
    }
  });

  // ../__options/node_modules/qs/lib/formats.js
  var require_formats = __commonJS({
    "../__options/node_modules/qs/lib/formats.js"(exports, module) {
      "use strict";
      var replace = String.prototype.replace;
      var percentTwenties = /%20/g;
      var Format = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
      };
      module.exports = {
        "default": Format.RFC3986,
        formatters: {
          RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
          },
          RFC3986: function(value) {
            return String(value);
          }
        },
        RFC1738: Format.RFC1738,
        RFC3986: Format.RFC3986
      };
    }
  });

  // ../__options/node_modules/qs/lib/utils.js
  var require_utils = __commonJS({
    "../__options/node_modules/qs/lib/utils.js"(exports, module) {
      "use strict";
      var formats = require_formats();
      var getSideChannel = require_side_channel();
      var defineProperty = require_es_define_property();
      var has = Object.prototype.hasOwnProperty;
      var isArray2 = Array.isArray;
      var overflowChannel = getSideChannel();
      var markOverflow = function markOverflow2(obj, maxIndex) {
        overflowChannel.set(obj, maxIndex);
        return obj;
      };
      var isOverflow = function isOverflow2(obj) {
        return overflowChannel.has(obj);
      };
      var getMaxIndex = function getMaxIndex2(obj) {
        return overflowChannel.get(obj);
      };
      var setMaxIndex = function setMaxIndex2(obj, maxIndex) {
        overflowChannel.set(obj, maxIndex);
      };
      var hexTable = (function() {
        var array = [];
        for (var i = 0; i < 256; ++i) {
          array[array.length] = "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
        }
        return array;
      })();
      var compactQueue = function compactQueue2(queue) {
        while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];
          if (isArray2(obj)) {
            var compacted = [];
            for (var j = 0; j < obj.length; ++j) {
              if (typeof obj[j] !== "undefined") {
                compacted[compacted.length] = obj[j];
              }
            }
            item.obj[item.prop] = compacted;
          }
        }
      };
      var arrayToObject2 = function arrayToObject3(source, options) {
        var obj = options && options.plainObjects ? { __proto__: null } : {};
        for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== "undefined") {
            obj[i] = source[i];
          }
        }
        return obj;
      };
      var setProperty = function setProperty2(obj, key, value) {
        if (key === "__proto__" && defineProperty) {
          defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        } else {
          obj[key] = value;
        }
      };
      var merge2 = function merge3(target, source, options) {
        if (!source) {
          return target;
        }
        if (typeof source !== "object" && typeof source !== "function") {
          if (isArray2(target)) {
            var nextIndex = target.length;
            if (options && typeof options.arrayLimit === "number" && nextIndex >= options.arrayLimit) {
              if (options.throwOnLimitExceeded) {
                throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
              }
              return markOverflow(arrayToObject2(target.concat(source), options), nextIndex);
            }
            target[nextIndex] = source;
          } else if (target && typeof target === "object") {
            if (isOverflow(target)) {
              var newIndex = getMaxIndex(target) + 1;
              target[newIndex] = source;
              setMaxIndex(target, newIndex);
            } else if (options && options.strictMerge) {
              return [target, source];
            } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
              target[source] = true;
            }
          } else {
            return [target, source];
          }
          return target;
        }
        if (!target || typeof target !== "object") {
          if (isOverflow(source)) {
            var sourceKeys = Object.keys(source);
            var result = options && options.plainObjects ? { __proto__: null, 0: target } : { 0: target };
            for (var m = 0; m < sourceKeys.length; m++) {
              var oldKey = parseInt(sourceKeys[m], 10);
              result[oldKey + 1] = source[sourceKeys[m]];
            }
            return markOverflow(result, getMaxIndex(source) + 1);
          }
          var combined = [target].concat(source);
          if (options && typeof options.arrayLimit === "number" && combined.length > options.arrayLimit) {
            if (options.throwOnLimitExceeded) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            return markOverflow(arrayToObject2(combined, options), combined.length - 1);
          }
          return combined;
        }
        var mergeTarget = target;
        if (isArray2(target) && !isArray2(source)) {
          mergeTarget = arrayToObject2(target, options);
        }
        if (isArray2(target) && isArray2(source)) {
          source.forEach(function(item, i) {
            if (has.call(target, i)) {
              var targetItem = target[i];
              if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
                target[i] = merge3(targetItem, item, options);
              } else {
                target[target.length] = item;
              }
            } else {
              target[i] = item;
            }
          });
          if (options && typeof options.arrayLimit === "number" && target.length > options.arrayLimit) {
            if (options.throwOnLimitExceeded) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            return markOverflow(arrayToObject2(target, options), target.length - 1);
          }
          return target;
        }
        return Object.keys(source).reduce(function(acc, key) {
          var value = source[key];
          if (has.call(acc, key)) {
            setProperty(acc, key, merge3(acc[key], value, options));
          } else {
            setProperty(acc, key, value);
          }
          if (isOverflow(source) && !isOverflow(acc)) {
            markOverflow(acc, getMaxIndex(source));
          }
          if (isOverflow(acc)) {
            var keyNum = parseInt(key, 10);
            if (String(keyNum) === key && keyNum >= 0 && keyNum > getMaxIndex(acc)) {
              setMaxIndex(acc, keyNum);
            }
          }
          return acc;
        }, mergeTarget);
      };
      var assign = function assignSingleSource(target, source) {
        return Object.keys(source).reduce(function(acc, key) {
          setProperty(acc, key, source[key]);
          return acc;
        }, target);
      };
      var decode = function(str, defaultDecoder, charset) {
        var strWithoutPlus = str.replace(/\+/g, " ");
        if (charset === "iso-8859-1") {
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        try {
          return decodeURIComponent(strWithoutPlus);
        } catch (e) {
          return strWithoutPlus;
        }
      };
      var limit = 1024;
      var encode3 = function encode4(str, defaultEncoder, charset, kind, format) {
        if (str.length === 0) {
          return str;
        }
        var string = str;
        if (typeof str === "symbol") {
          string = Symbol.prototype.toString.call(str);
        } else if (typeof str !== "string") {
          string = String(str);
        }
        if (charset === "iso-8859-1") {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
          });
        }
        var out = "";
        for (var j = 0; j < string.length; j += limit) {
          var segment = string.length >= limit ? string.slice(j, j + limit) : string;
          if (j + limit < string.length) {
            var last = segment.charCodeAt(segment.length - 1);
            if (last >= 55296 && last <= 56319) {
              segment = segment.slice(0, -1);
              j -= 1;
            }
          }
          var arr = [];
          for (var i = 0; i < segment.length; ++i) {
            var c = segment.charCodeAt(i);
            if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
              arr[arr.length] = segment.charAt(i);
              continue;
            }
            if (c < 128) {
              arr[arr.length] = hexTable[c];
              continue;
            }
            if (c < 2048) {
              arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
              continue;
            }
            if (c < 55296 || c >= 57344) {
              arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
              continue;
            }
            i += 1;
            c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
            arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
          }
          out += arr.join("");
        }
        return out;
      };
      var compact = function compact2(value) {
        var queue = [{ obj: { o: value }, prop: "o" }];
        var refs = getSideChannel();
        for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];
          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && !refs.has(val)) {
              queue[queue.length] = { obj, prop: key };
              refs.set(val, true);
            }
          }
        }
        compactQueue(queue);
        return value;
      };
      var isRegExp2 = function isRegExp3(obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
      };
      var isBuffer2 = function isBuffer3(obj) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        return !!(obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj));
      };
      var combine = function combine2(a, b, arrayLimit, plainObjects, throwOnLimitExceeded) {
        if (isOverflow(a)) {
          if (throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + arrayLimit + " element" + (arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          var bValues = isArray2(b) ? b : [b];
          var newIndex = getMaxIndex(a);
          for (var i = 0; i < bValues.length; ++i) {
            newIndex += 1;
            a[newIndex] = bValues[i];
          }
          setMaxIndex(a, newIndex);
          return a;
        }
        var result = [].concat(a, b);
        if (result.length > arrayLimit) {
          if (throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + arrayLimit + " element" + (arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          return markOverflow(arrayToObject2(result, { plainObjects }), result.length - 1);
        }
        return result;
      };
      var maybeMap = function maybeMap2(val, fn) {
        if (isArray2(val)) {
          var mapped = [];
          for (var i = 0; i < val.length; i += 1) {
            mapped[mapped.length] = fn(val[i]);
          }
          return mapped;
        }
        return fn(val);
      };
      module.exports = {
        arrayToObject: arrayToObject2,
        assign,
        combine,
        compact,
        decode,
        encode: encode3,
        isBuffer: isBuffer2,
        isOverflow,
        isRegExp: isRegExp2,
        markOverflow,
        maybeMap,
        merge: merge2
      };
    }
  });

  // ../__options/node_modules/qs/lib/stringify.js
  var require_stringify = __commonJS({
    "../__options/node_modules/qs/lib/stringify.js"(exports, module) {
      "use strict";
      var getSideChannel = require_side_channel();
      var utils = require_utils();
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var arrayPrefixGenerators = {
        brackets: function brackets(prefix) {
          return prefix + "[]";
        },
        comma: "comma",
        indices: function indices(prefix, key) {
          return prefix + "[" + key + "]";
        },
        repeat: function repeat(prefix) {
          return prefix;
        }
      };
      var isArray2 = Array.isArray;
      var push = Array.prototype.push;
      var pushToArray = function(arr, valueOrArray) {
        push.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
      };
      var toISO = Date.prototype.toISOString;
      var defaultFormat = formats["default"];
      var defaults2 = {
        addQueryPrefix: false,
        allowDots: false,
        allowEmptyArrays: false,
        arrayFormat: "indices",
        charset: "utf-8",
        charsetSentinel: false,
        commaRoundTrip: false,
        delimiter: "&",
        depth: Infinity,
        encode: true,
        encodeDotInKeys: false,
        encoder: utils.encode,
        encodeValuesOnly: false,
        filter: void 0,
        format: defaultFormat,
        formatter: formats.formatters[defaultFormat],
        // deprecated
        indices: false,
        serializeDate: function serializeDate(date) {
          return toISO.call(date);
        },
        skipNulls: false,
        strictNullHandling: false
      };
      var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
        return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
      };
      var sentinel = {};
      var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter2, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel, depth, currentDepth) {
        var obj = object;
        if (currentDepth > depth) {
          throw new RangeError("Input depth exceeded depth option of " + depth);
        }
        var tmpSc = sideChannel;
        var step = 0;
        var findFlag = false;
        while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
          var pos = tmpSc.get(object);
          step += 1;
          if (typeof pos !== "undefined") {
            if (pos === step) {
              throw new RangeError("Cyclic object value");
            } else {
              findFlag = true;
            }
          }
          if (typeof tmpSc.get(sentinel) === "undefined") {
            step = 0;
          }
        }
        obj = typeof filter2 === "function" ? filter2(prefix, obj) : obj;
        if (obj instanceof Date) {
          obj = serializeDate(obj);
        } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
          obj = utils.maybeMap(obj, function(value2) {
            if (value2 instanceof Date) {
              return serializeDate(value2);
            }
            return value2;
          });
        }
        if (obj === null) {
          if (strictNullHandling) {
            return formatter(encoder && !encodeValuesOnly ? encoder(prefix, defaults2.encoder, charset, "key", format) : prefix);
          }
          obj = "";
        }
        if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults2.encoder, charset, "key", format);
            return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults2.encoder, charset, "value", format))];
          }
          return [formatter(prefix) + "=" + formatter(String(obj))];
        }
        var values = [];
        if (typeof obj === "undefined") {
          return values;
        }
        var objKeys;
        if (generateArrayPrefix === "comma" && isArray2(obj)) {
          if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, function(v) {
              return v == null ? v : encoder(v);
            });
          }
          objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
        } else if (isArray2(filter2)) {
          objKeys = filter2;
        } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
        }
        var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
        var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
        if (allowEmptyArrays && isArray2(obj) && obj.length === 0 && Object.keys(obj).length === 0) {
          return adjustedPrefix + "[]";
        }
        for (var j = 0; j < objKeys.length; ++j) {
          var key = objKeys[j];
          var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
          if (skipNulls && value === null) {
            continue;
          }
          var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
          var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
          sideChannel.set(object, step);
          var valueSideChannel = getSideChannel();
          valueSideChannel.set(sentinel, sideChannel);
          pushToArray(values, stringify2(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            allowEmptyArrays,
            strictNullHandling,
            skipNulls,
            encodeDotInKeys,
            generateArrayPrefix === "comma" && encodeValuesOnly && isArray2(obj) ? null : encoder,
            filter2,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel,
            depth,
            currentDepth + 1
          ));
        }
        return values;
      };
      var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
        if (!opts) {
          return defaults2;
        }
        if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
          throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        }
        if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
          throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        }
        if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
          throw new TypeError("Encoder has to be a function.");
        }
        var charset = opts.charset || defaults2.charset;
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var format = formats["default"];
        if (typeof opts.format !== "undefined") {
          if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError("Unknown format option provided.");
          }
          format = opts.format;
        }
        var formatter = formats.formatters[format];
        var filter2 = defaults2.filter;
        if (typeof opts.filter === "function" || isArray2(opts.filter)) {
          filter2 = opts.filter;
        }
        var arrayFormat;
        if (opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
        } else if ("indices" in opts) {
          arrayFormat = opts.indices ? "indices" : "repeat";
        } else {
          arrayFormat = defaults2.arrayFormat;
        }
        if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
          throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        }
        var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults2.allowDots : !!opts.allowDots;
        return {
          addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults2.addQueryPrefix,
          allowDots,
          allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults2.allowEmptyArrays,
          arrayFormat,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
          commaRoundTrip: !!opts.commaRoundTrip,
          delimiter: typeof opts.delimiter === "undefined" ? defaults2.delimiter : opts.delimiter,
          depth: typeof opts.depth === "number" ? opts.depth : defaults2.depth,
          encode: typeof opts.encode === "boolean" ? opts.encode : defaults2.encode,
          encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults2.encodeDotInKeys,
          encoder: typeof opts.encoder === "function" ? opts.encoder : defaults2.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults2.encodeValuesOnly,
          filter: filter2,
          format,
          formatter,
          serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults2.serializeDate,
          skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults2.skipNulls,
          sort: typeof opts.sort === "function" ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
        };
      };
      module.exports = function(object, opts) {
        var obj = object;
        var options = normalizeStringifyOptions(opts);
        var objKeys;
        var filter2;
        if (typeof options.filter === "function") {
          filter2 = options.filter;
          obj = filter2("", obj);
        } else if (isArray2(options.filter)) {
          filter2 = options.filter;
          objKeys = filter2;
        }
        var keys = [];
        if (typeof obj !== "object" || obj === null) {
          return "";
        }
        var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
        var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
        if (!objKeys) {
          objKeys = Object.keys(obj);
        }
        if (options.sort) {
          objKeys.sort(options.sort);
        }
        var sideChannel = getSideChannel();
        for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];
          if (typeof key === "undefined" || key === null) {
            continue;
          }
          var value = obj[key];
          if (options.skipNulls && value === null) {
            continue;
          }
          var encodedKey = options.encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
          pushToArray(keys, stringify(
            value,
            encodedKey,
            generateArrayPrefix,
            commaRoundTrip,
            options.allowEmptyArrays,
            options.strictNullHandling,
            options.skipNulls,
            options.encodeDotInKeys,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel,
            options.depth,
            0
          ));
        }
        var joined = keys.join(options.delimiter);
        var prefix = options.addQueryPrefix === true ? "?" : "";
        if (options.charsetSentinel) {
          if (options.charset === "iso-8859-1") {
            prefix += "utf8=%26%2310003%3B" + options.delimiter;
          } else {
            prefix += "utf8=%E2%9C%93" + options.delimiter;
          }
        }
        return joined.length > 0 ? prefix + joined : "";
      };
    }
  });

  // ../__options/node_modules/qs/lib/parse.js
  var require_parse = __commonJS({
    "../__options/node_modules/qs/lib/parse.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var has = Object.prototype.hasOwnProperty;
      var isArray2 = Array.isArray;
      var defaults2 = {
        allowDots: false,
        allowEmptyArrays: false,
        allowPrototypes: false,
        allowSparse: false,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: false,
        comma: false,
        decodeDotInKeys: false,
        decoder: utils.decode,
        delimiter: "&",
        depth: 5,
        duplicates: "combine",
        ignoreQueryPrefix: false,
        interpretNumericEntities: false,
        parameterLimit: 1e3,
        parseArrays: true,
        plainObjects: false,
        strictDepth: false,
        strictMerge: true,
        strictNullHandling: false,
        throwOnLimitExceeded: false
      };
      var interpretNumericEntities = function(str) {
        return str.replace(/&#(\d+);/g, function($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
        });
      };
      var parseArrayValue = function(val, options, currentArrayLength) {
        if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
          if (options.throwOnLimitExceeded) {
            var commaCount = 0;
            var commaIndex = val.indexOf(",");
            while (commaIndex > -1) {
              commaCount += 1;
              if (commaCount >= options.arrayLimit) {
                throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
              }
              commaIndex = val.indexOf(",", commaIndex + 1);
            }
          }
          return val.split(",");
        }
        if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
          throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        return val;
      };
      var isoSentinel = "utf8=%26%2310003%3B";
      var charsetSentinel = "utf8=%E2%9C%93";
      var parseValues = function parseQueryStringValues(str, options) {
        var obj = { __proto__: null };
        var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
        cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
        var parts = cleanStr.split(
          options.delimiter,
          options.throwOnLimitExceeded && typeof limit !== "undefined" ? limit + 1 : limit
        );
        if (options.throwOnLimitExceeded && typeof limit !== "undefined" && parts.length > limit) {
          throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
        }
        var skipIndex = -1;
        var i;
        var charset = options.charset;
        if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf("utf8=") === 0) {
              if (parts[i] === charsetSentinel) {
                charset = "utf-8";
              } else if (parts[i] === isoSentinel) {
                charset = "iso-8859-1";
              }
              skipIndex = i;
              i = parts.length;
            }
          }
        }
        for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
            continue;
          }
          var part = parts[i];
          var bracketEqualsPos = part.indexOf("]=");
          var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
          var key;
          var val;
          if (pos === -1) {
            key = options.decoder(part, defaults2.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
          } else {
            key = options.decoder(part.slice(0, pos), defaults2.decoder, charset, "key");
            if (key !== null) {
              val = utils.maybeMap(
                parseArrayValue(
                  part.slice(pos + 1),
                  options,
                  isArray2(obj[key]) ? obj[key].length : 0
                ),
                function(encodedVal) {
                  return options.decoder(encodedVal, defaults2.decoder, charset, "value");
                }
              );
            }
          }
          if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
            val = interpretNumericEntities(String(val));
          }
          if (part.indexOf("[]=") > -1) {
            val = isArray2(val) ? [val] : val;
          }
          if (options.comma && isArray2(val) && val.length > options.arrayLimit) {
            val = utils.combine([], val, options.arrayLimit, options.plainObjects, options.throwOnLimitExceeded);
          }
          if (key !== null) {
            var existing = has.call(obj, key);
            if (existing && (options.duplicates === "combine" || part.indexOf("[]=") > -1)) {
              obj[key] = utils.combine(
                obj[key],
                val,
                options.arrayLimit,
                options.plainObjects,
                options.throwOnLimitExceeded
              );
            } else if (!existing || options.duplicates === "last") {
              obj[key] = val;
            }
          }
        }
        return obj;
      };
      var parseObject = function(chain, val, options, valuesParsed) {
        var currentArrayLength = 0;
        if (chain.length > 0 && chain[chain.length - 1] === "[]") {
          var parentKey = chain.slice(0, -1).join("");
          currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
        }
        var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
        for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];
          if (root === "[]" && options.parseArrays) {
            if (utils.isOverflow(leaf)) {
              obj = leaf;
            } else {
              obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine(
                [],
                leaf,
                options.arrayLimit,
                options.plainObjects,
                options.throwOnLimitExceeded
              );
            }
          } else {
            obj = options.plainObjects ? { __proto__: null } : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
            var index2 = parseInt(decodedRoot, 10);
            var isValidArrayIndex = !isNaN(index2) && root !== decodedRoot && String(index2) === decodedRoot && index2 >= 0 && options.parseArrays;
            if (!options.parseArrays && decodedRoot === "") {
              obj = { 0: leaf };
            } else if (isValidArrayIndex && index2 < options.arrayLimit) {
              obj = [];
              obj[index2] = leaf;
            } else if (isValidArrayIndex && options.throwOnLimitExceeded) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            } else if (isValidArrayIndex) {
              obj[index2] = leaf;
              utils.markOverflow(obj, index2);
            } else if (decodedRoot !== "__proto__") {
              obj[decodedRoot] = leaf;
            }
          }
          leaf = obj;
        }
        return leaf;
      };
      var splitKeyIntoSegments = function splitKeyIntoSegments2(originalKey, options) {
        var key = options.allowDots ? originalKey.replace(/\.([^.[]+)/g, "[$1]") : originalKey;
        if (options.depth <= 0) {
          if (!options.plainObjects && has.call(Object.prototype, key)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          return [key];
        }
        var segments = [];
        var first = key.indexOf("[");
        var parent = first >= 0 ? key.slice(0, first) : key;
        if (parent) {
          if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          segments[segments.length] = parent;
        }
        var n2 = key.length;
        var open = first;
        var collected = 0;
        while (open >= 0 && collected < options.depth) {
          var level = 1;
          var i = open + 1;
          var close = -1;
          while (i < n2 && close < 0) {
            var cu = key.charCodeAt(i);
            if (cu === 91) {
              level += 1;
            } else if (cu === 93) {
              level -= 1;
              if (level === 0) {
                close = i;
              }
            }
            i += 1;
          }
          if (close < 0) {
            segments[segments.length] = "[" + key.slice(open) + "]";
            return segments;
          }
          var seg = key.slice(open, close + 1);
          var content = seg.slice(1, -1);
          if (!options.plainObjects && has.call(Object.prototype, content) && !options.allowPrototypes) {
            return;
          }
          segments[segments.length] = seg;
          collected += 1;
          open = key.indexOf("[", close + 1);
        }
        if (open >= 0) {
          if (options.strictDepth === true) {
            throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
          }
          segments[segments.length] = "[" + key.slice(open) + "]";
        }
        return segments;
      };
      var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
        if (!givenKey) {
          return;
        }
        var keys = splitKeyIntoSegments(givenKey, options);
        if (!keys) {
          return;
        }
        return parseObject(keys, val, options, valuesParsed);
      };
      var normalizeParseOptions = function normalizeParseOptions2(opts) {
        if (!opts) {
          return defaults2;
        }
        if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
          throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        }
        if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
          throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
        }
        if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
          throw new TypeError("Decoder has to be a function.");
        }
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
          throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
        }
        var charset = typeof opts.charset === "undefined" ? defaults2.charset : opts.charset;
        var duplicates = typeof opts.duplicates === "undefined" ? defaults2.duplicates : opts.duplicates;
        if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
          throw new TypeError("The duplicates option must be either combine, first, or last");
        }
        var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults2.allowDots : !!opts.allowDots;
        return {
          allowDots,
          allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults2.allowEmptyArrays,
          allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults2.allowPrototypes,
          allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults2.allowSparse,
          arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults2.arrayLimit,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
          comma: typeof opts.comma === "boolean" ? opts.comma : defaults2.comma,
          decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults2.decodeDotInKeys,
          decoder: typeof opts.decoder === "function" ? opts.decoder : defaults2.decoder,
          delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults2.delimiter,
          // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults2.depth,
          duplicates,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults2.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults2.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults2.plainObjects,
          strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults2.strictDepth,
          strictMerge: typeof opts.strictMerge === "boolean" ? !!opts.strictMerge : defaults2.strictMerge,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling,
          throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
        };
      };
      module.exports = function(str, opts) {
        var options = normalizeParseOptions(opts);
        if (str === "" || str === null || typeof str === "undefined") {
          return options.plainObjects ? { __proto__: null } : {};
        }
        var tempObj = typeof str === "string" ? parseValues(str, options) : str;
        var obj = options.plainObjects ? { __proto__: null } : {};
        var keys = Object.keys(tempObj);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
          obj = utils.merge(obj, newObj, options);
        }
        if (options.allowSparse === true) {
          return obj;
        }
        return utils.compact(obj);
      };
    }
  });

  // ../__options/node_modules/qs/lib/index.js
  var require_lib = __commonJS({
    "../__options/node_modules/qs/lib/index.js"(exports, module) {
      "use strict";
      var stringify = require_stringify();
      var parse = require_parse();
      var formats = require_formats();
      module.exports = {
        formats,
        parse,
        stringify
      };
    }
  });

  // src/wb_block.js
  var import_plugins = __toESM(require_plugins());

  // src/common/icons.js
  var icons = {};
  icons.wbolt = /* @__PURE__ */ wp.element.createElement("svg", { className: "wb-icon wbsico-wbolt", role: "img", fill: "none", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M10.28 14.1l-3.1-1.09a.28.28 0 01-.13-.43l7.5-9.46a.28.28 0 00-.17-.44 9.83 9.83 0 00-6.2.5 9.96 9.96 0 00-5.24 5.2 9.3 9.3 0 00-.78 3.8c0 1.35.26 2.61.78 3.8a9.8 9.8 0 004.58 4.88c.15.07.33 0 .4-.15l2.53-6.24a.28.28 0 00-.17-.37zM21.01 8.32a10 10 0 00-4.58-4.84.28.28 0 00-.4.15l-2.78 6.78c-.06.13 0 .28.12.35l2.84 1.5c.15.08.2.28.08.4l-6.82 8.4c-.13.15-.05.39.15.43a9.94 9.94 0 0011.4-5.65c.51-1.17.77-2.42.77-3.76 0-1.34-.26-2.59-.78-3.76z", clipRule: "evenodd" }));
  var icons_default = icons;

  // src/scrapy-editer-plugin/index.js
  var import_lodash = __toESM(require_lodash());
  var import_data4 = __toESM(require_data());
  var import_core_data = __toESM(require_core_data());
  var import_compose = __toESM(require_compose());
  var import_components = __toESM(require_components());

  // src/scrapy-editer-plugin/IMGScrapy.js
  var import_md5 = __toESM(require_md5());

  // ../__options/node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // ../__options/node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var { iterator, toStringTag } = Symbol;
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isUnsafeObjectKey = (prop) => typeof prop === "string" && (prop === "__proto__" || prop === "constructor" || prop === "prototype");
  var isPrototypeBoundary = (obj, prototype2, source) => obj === Object.prototype || !source && prototype2 === null;
  var isSafeAndFullyMutable = (obj) => {
    if (!Object.isExtensible(obj)) {
      return false;
    }
    const props = Object.getOwnPropertyNames(obj);
    if (Object.getOwnPropertySymbols) {
      props.push(...Object.getOwnPropertySymbols(obj));
    }
    return props.every((prop) => {
      if (isUnsafeObjectKey(prop)) {
        return false;
      }
      const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      return !!descriptor && descriptor.configurable && descriptor.writable === true;
    });
  };
  var hasOwnInPrototypeChain = (thing, prop) => {
    let obj = thing;
    const seen = [];
    while (obj != null) {
      if (seen.indexOf(obj) !== -1) {
        return false;
      }
      seen.push(obj);
      const prototype2 = getPrototypeOf(obj);
      if (isPrototypeBoundary(obj, prototype2, obj === thing)) {
        return false;
      }
      if (hasOwnProperty(obj, prop)) {
        return true;
      }
      obj = prototype2;
    }
    return false;
  };
  var getSafeProp = (obj, prop) => obj != null && hasOwnInPrototypeChain(obj, prop) ? obj[prop] : void 0;
  var toSafeFlatObject = (thing) => {
    if (thing == null || typeof thing !== "object" && typeof thing !== "function") {
      return thing;
    }
    const sourcePrototype = getPrototypeOf(thing);
    if (sourcePrototype === null && isSafeAndFullyMutable(thing)) {
      return thing;
    }
    const result = /* @__PURE__ */ Object.create(null);
    const merged = /* @__PURE__ */ Object.create(null);
    const seen = [];
    let current = thing;
    while (current != null) {
      if (seen.indexOf(current) !== -1) {
        break;
      }
      seen.push(current);
      const prototype2 = current === thing ? sourcePrototype : getPrototypeOf(current);
      if (isPrototypeBoundary(current, prototype2, current === thing)) {
        break;
      }
      const props = Object.getOwnPropertyNames(current);
      if (Object.getOwnPropertySymbols) {
        props.push(...Object.getOwnPropertySymbols(current));
      }
      for (const prop of props) {
        if (isUnsafeObjectKey(prop)) {
          continue;
        }
        if (!hasOwnProperty(merged, prop)) {
          result[prop] = thing[prop];
          merged[prop] = true;
        }
      }
      current = prototype2;
    }
    return result;
  };
  var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (!isObject(val)) {
      return false;
    }
    const prototype2 = getPrototypeOf(val);
    return (prototype2 === null || prototype2 === Object.prototype || getPrototypeOf(prototype2) === null) && // Treat safe own/inherited Symbol.toStringTag or Symbol.iterator members as
    // evidence the value is tagged/iterable, while ignoring members reachable
    // only through shared or terminal prototype boundaries.
    !hasOwnInPrototypeChain(val, toStringTag) && !hasOwnInPrototypeChain(val, iterator);
  };
  var isEmptyObject = (val) => {
    if (!isObject(val) || isBuffer(val)) {
      return false;
    }
    try {
      return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
    } catch (e) {
      return false;
    }
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isReactNativeBlob = (value) => {
    return !!(value && typeof value.uri !== "undefined");
  };
  var isReactNative = (formData) => formData && typeof formData.getParts !== "undefined";
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isSet = kindOfTest("Set");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  function getGlobal() {
    if (typeof globalThis !== "undefined") return globalThis;
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    return {};
  }
  var G = getGlobal();
  var FormDataCtor = typeof G.FormData !== "undefined" ? G.FormData : void 0;
  var isFormData = (thing) => {
    if (!thing) return false;
    if (FormDataCtor && thing instanceof FormDataCtor) return true;
    const proto = getPrototypeOf(thing);
    if (!proto || proto === Object.prototype) return false;
    if (!isFunction(thing.append)) return false;
    const kind = kindOf(thing);
    return kind === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]";
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var [isReadableStream, isRequest, isResponse, isHeaders] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
  ].map(kindOfTest);
  var trim = (str) => {
    return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      if (isBuffer(obj)) {
        return;
      }
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    if (isBuffer(obj)) {
      return null;
    }
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (() => {
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge(...objs) {
    const { caseless, skipUndefined } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        return;
      }
      const targetKey = caseless && typeof key === "string" && findKey(result, key) || key;
      const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : void 0;
      if (isPlainObject(existing) && isPlainObject(val)) {
        result[targetKey] = merge(existing, val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else if (!skipUndefined || !isUndefined(val)) {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = objs.length; i < l; i++) {
      const source = objs[i];
      if (!source || isBuffer(source)) {
        continue;
      }
      forEach(source, assignValue);
      if (typeof source !== "object" || isArray(source)) {
        continue;
      }
      const symbols = Object.getOwnPropertySymbols(source);
      for (let j = 0; j < symbols.length; j++) {
        const symbol = symbols[j];
        if (propertyIsEnumerable.call(source, symbol)) {
          assignValue(source[symbol], symbol);
        }
      }
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(
      b,
      (val, key) => {
        if (thisArg && isFunction(val)) {
          Object.defineProperty(a, key, {
            // Null-proto descriptor so a polluted Object.prototype.get cannot
            // hijack defineProperty's accessor-vs-data resolution.
            __proto__: null,
            value: bind(val, thisArg),
            writable: true,
            enumerable: true,
            configurable: true
          });
        } else {
          Object.defineProperty(a, key, {
            __proto__: null,
            value: val,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      },
      { allOwnKeys }
    );
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    Object.defineProperty(constructor.prototype, "constructor", {
      __proto__: null,
      value: constructor,
      writable: true,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(constructor, "super", {
      __proto__: null,
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[iterator];
    const _iterator = generator.call(obj);
    let result;
    while ((result = _iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    });
  };
  var { propertyIsEnumerable } = Object.prototype;
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].includes(name)) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define2 = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
  }
  var toJSONObject = (obj) => {
    const visited = /* @__PURE__ */ new WeakSet();
    const visit = (source) => {
      if (isObject(source)) {
        if (visited.has(source)) {
          return;
        }
        if (isBuffer(source)) {
          return source;
        }
        if (!("toJSON" in source)) {
          visited.add(source);
          let target;
          if (isSet(source)) {
            target = [];
            for (const value of source) {
              const reducedValue = visit(value);
              !isUndefined(reducedValue) && target.push(reducedValue);
            }
          } else {
            target = isArray(source) ? [] : {};
            forEach(source, (value, key) => {
              const reducedValue = visit(value);
              !isUndefined(reducedValue) && (target[key] = reducedValue);
            });
          }
          visited.delete(source);
          return target;
        }
      }
      return source;
    };
    return visit(obj);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
    if (setImmediateSupported) {
      return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks) => {
      _global.addEventListener(
        "message",
        ({ source, data }) => {
          if (source === _global && data === token) {
            callbacks.length && callbacks.shift()();
          }
        },
        false
      );
      return (cb) => {
        callbacks.push(cb);
        _global.postMessage(token, "*");
      };
    })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
  })(typeof setImmediate === "function", isFunction(_global.postMessage));
  var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
  var isIterable = (thing) => thing != null && isFunction(thing[iterator]);
  var isSafeIterable = (thing) => thing != null && hasOwnInPrototypeChain(thing, iterator) && isIterable(thing);
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isReactNativeBlob,
    isReactNative,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    hasOwnInPrototypeChain,
    getSafeProp,
    toSafeFlatObject,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap,
    isIterable,
    isSafeIterable
  };

  // ../__options/node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      const hasKey = utils_default.hasOwnProp(parsed, key);
      if (!key || hasKey && utils_default.hasOwnProp(ignoreDuplicateOf, key)) {
        return;
      }
      if (key === "set-cookie") {
        if (hasKey) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = hasKey ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // ../__options/node_modules/axios/lib/helpers/sanitizeHeaderValue.js
  function trimSPorHTAB(str) {
    let start = 0;
    let end = str.length;
    while (start < end) {
      const code = str.charCodeAt(start);
      if (code !== 9 && code !== 32) {
        break;
      }
      start += 1;
    }
    while (end > start) {
      const code = str.charCodeAt(end - 1);
      if (code !== 9 && code !== 32) {
        break;
      }
      end -= 1;
    }
    return start === 0 && end === str.length ? str : str.slice(start, end);
  }
  var INVALID_UNICODE_HEADER_VALUE_CHARS = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g");
  var INVALID_BYTE_STRING_HEADER_VALUE_CHARS = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
  function sanitizeValue(value, invalidChars) {
    if (utils_default.isArray(value)) {
      return value.map((item) => sanitizeValue(item, invalidChars));
    }
    return trimSPorHTAB(String(value).replace(invalidChars, ""));
  }
  var sanitizeHeaderValue = (value) => sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);
  var sanitizeByteStringHeaderValue = (value) => sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);
  function toByteStringHeaderObject(headers) {
    const byteStringHeaders = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(headers.toJSON(), (value, header) => {
      byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
    });
    return byteStringHeaders;
  }

  // ../__options/node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var parameterNameRE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
  function trimOWS(value) {
    let start = 0;
    let end = value.length;
    while (start < end) {
      const code = value.charCodeAt(start);
      if (code !== 9 && code !== 32) {
        break;
      }
      start += 1;
    }
    while (end > start) {
      const code = value.charCodeAt(end - 1);
      if (code !== 9 && code !== 32) {
        break;
      }
      end -= 1;
    }
    return start === 0 && end === value.length ? value : value.slice(start, end);
  }
  function decodeQuotedString(value) {
    const last = value.length - 1;
    if (last < 1 || value.charCodeAt(0) !== 34 || value.charCodeAt(last) !== 34) {
      return value;
    }
    let decoded = "";
    for (let i = 1; i < last; i++) {
      const code = value.charCodeAt(i);
      if (code === 34) {
        return value;
      }
      if (code === 92) {
        i += 1;
        if (i >= last) {
          return value;
        }
      }
      decoded += value[i];
    }
    return decoded;
  }
  function parseParameters(value) {
    const parameters = /* @__PURE__ */ Object.create(null);
    const str = String(value);
    let start = 0;
    let quoted = false;
    let escaped = false;
    function parseParameter(end) {
      const part = trimOWS(str.slice(start, end));
      const equals = part.indexOf("=");
      if (equals < 1) {
        return;
      }
      const name = trimOWS(part.slice(0, equals));
      if (!parameterNameRE.test(name)) {
        return;
      }
      const normalizedName = name.toLowerCase();
      if (normalizedName === "__proto__" || normalizedName === "constructor" || normalizedName === "prototype") {
        return;
      }
      const parameterValue = trimOWS(part.slice(equals + 1));
      parameters[normalizedName] = decodeQuotedString(parameterValue);
    }
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (quoted) {
        if (escaped) {
          escaped = false;
        } else if (code === 92) {
          escaped = true;
        } else if (code === 34) {
          quoted = false;
        }
      } else if (code === 34) {
        quoted = true;
      } else if (code === 44 || code === 59) {
        parseParameter(i);
        start = i + 1;
      }
    }
    parseParameter(str.length);
    return parameters;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value)) return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        // Null-proto descriptor so a polluted Object.prototype.get cannot turn
        // this data descriptor into an accessor descriptor on the way in.
        __proto__: null,
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          return;
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else if (utils_default.isObject(header) && utils_default.isSafeIterable(header)) {
        let obj = /* @__PURE__ */ Object.create(null), dest, key;
        for (const entry of header) {
          if (!utils_default.isArray(entry)) {
            throw new TypeError("Object iterator must return a key-value pair");
          }
          key = entry[0];
          if (utils_default.hasOwnProp(obj, key)) {
            dest = obj[key];
            obj[key] = utils_default.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]];
          } else {
            obj[key] = entry[1];
          }
        }
        setHeaders(obj, valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    getSetCookie() {
      const value = this.get("set-cookie");
      return utils_default.isArray(value) ? value : value == null || value === false ? [] : [value];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static parseParameters(value) {
      return parseParameters(value);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype2 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype2, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
  ]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // ../__options/node_modules/axios/lib/core/AxiosError.js
  var REDACTED = "[REDACTED ****]";
  function hasOwnOrPrototypeToJSON(source) {
    if (utils_default.hasOwnProp(source, "toJSON")) {
      return true;
    }
    let prototype2 = Object.getPrototypeOf(source);
    while (prototype2 && prototype2 !== Object.prototype) {
      if (utils_default.hasOwnProp(prototype2, "toJSON")) {
        return true;
      }
      prototype2 = Object.getPrototypeOf(prototype2);
    }
    return false;
  }
  function redactConfig(config2, redactKeys) {
    const lowerKeys = new Set(redactKeys.map((k) => String(k).toLowerCase()));
    const seen = [];
    const visit = (source) => {
      if (source === null || typeof source !== "object") return source;
      if (utils_default.isBuffer(source)) return source;
      if (seen.indexOf(source) !== -1) return void 0;
      if (source instanceof AxiosHeaders_default) {
        source = source.toJSON();
      }
      seen.push(source);
      let result;
      if (utils_default.isArray(source)) {
        result = [];
        source.forEach((v, i) => {
          const reducedValue = visit(v);
          if (!utils_default.isUndefined(reducedValue)) {
            result[i] = reducedValue;
          }
        });
      } else {
        if (!utils_default.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
          seen.pop();
          return source;
        }
        result = /* @__PURE__ */ Object.create(null);
        for (const [key, value] of Object.entries(source)) {
          const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
          if (!utils_default.isUndefined(reducedValue)) {
            result[key] = reducedValue;
          }
        }
      }
      seen.pop();
      return result;
    };
    return visit(config2);
  }
  function stringifySafely(value) {
    try {
      return String(value);
    } catch (err) {
      return "";
    }
  }
  function aggregateErrorMessage(error) {
    const message = error.errors.map((entry) => {
      try {
        return entry && entry.message ? stringifySafely(entry.message) : stringifySafely(entry);
      } catch (err) {
        return "";
      }
    }).filter(Boolean).join("; ");
    return message || error.name || "AggregateError";
  }
  var AxiosError = class _AxiosError extends Error {
    static from(error, code, config2, request, response, customProps) {
      let message = error.message;
      if (!message && utils_default.isArray(error.errors) && error.errors.length) {
        message = aggregateErrorMessage(error);
      }
      const axiosError = new _AxiosError(message, code || error.code, config2, request, response);
      Object.defineProperty(axiosError, "cause", {
        __proto__: null,
        value: error,
        writable: true,
        enumerable: false,
        configurable: true
      });
      axiosError.name = error.name;
      if (error.status != null && axiosError.status == null) {
        axiosError.status = error.status;
      }
      customProps && Object.assign(axiosError, customProps);
      return axiosError;
    }
    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [config] The config.
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     *
     * @returns {Error} The created error.
     */
    constructor(message, code, config2, request, response) {
      super(message);
      Object.defineProperty(this, "message", {
        // Null-proto descriptor so a polluted Object.prototype.get cannot turn
        // this data descriptor into an accessor descriptor on the way in.
        __proto__: null,
        value: message,
        enumerable: true,
        writable: true,
        configurable: true
      });
      this.name = "AxiosError";
      this.isAxiosError = true;
      code && (this.code = code);
      config2 && (this.config = config2);
      request && (this.request = request);
      if (response) {
        this.response = response;
        this.status = response.status;
      }
    }
    toJSON() {
      const config2 = this.config;
      const redactKeys = config2 && utils_default.hasOwnProp(config2, "redact") ? config2.redact : void 0;
      const serializedConfig = utils_default.isArray(redactKeys) && redactKeys.length > 0 ? redactConfig(config2, redactKeys) : utils_default.toJSONObject(config2);
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: serializedConfig,
        code: this.code,
        status: this.status
      };
    }
  };
  AxiosError.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
  AxiosError.ERR_BAD_OPTION = "ERR_BAD_OPTION";
  AxiosError.ECONNABORTED = "ECONNABORTED";
  AxiosError.ETIMEDOUT = "ETIMEDOUT";
  AxiosError.ECONNREFUSED = "ECONNREFUSED";
  AxiosError.ERR_NETWORK = "ERR_NETWORK";
  AxiosError.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
  AxiosError.ERR_DEPRECATED = "ERR_DEPRECATED";
  AxiosError.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
  AxiosError.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
  AxiosError.ERR_CANCELED = "ERR_CANCELED";
  AxiosError.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
  AxiosError.ERR_INVALID_URL = "ERR_INVALID_URL";
  AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
  var AxiosError_default = AxiosError;

  // ../__options/node_modules/axios/lib/helpers/null.js
  var null_default = null;

  // ../__options/node_modules/axios/lib/helpers/toFormData.js
  var DEFAULT_FORM_DATA_MAX_DEPTH = 100;
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    const option = (name, fallback) => {
      const value = utils_default.getSafeProp(options, name);
      return utils_default.isUndefined(value) ? fallback : value;
    };
    const metaTokens = option("metaTokens", true);
    const visitor = option("visitor") || defaultVisitor;
    const dots = option("dots", false);
    const indexes = option("indexes", false);
    const _Blob = option("Blob") || typeof Blob !== "undefined" && Blob;
    const maxDepth = option("maxDepth", DEFAULT_FORM_DATA_MAX_DEPTH);
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    const stack = [];
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null) return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (utils_default.isBoolean(value)) {
        return value.toString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        if (useBlob && typeof _Blob === "function") {
          return new _Blob([value]);
        }
        if (null_default && null_default.isBufferAvailable()) {
          return null_default.from(value);
        }
        throw new AxiosError_default(
          "Blob is not supported. Use a Buffer instead.",
          AxiosError_default.ERR_NOT_SUPPORT
        );
      }
      return value;
    }
    function throwIfMaxDepthExceeded(depth) {
      if (depth > maxDepth) {
        throw new AxiosError_default(
          "Object is too deeply nested (" + depth + " levels). Max depth: " + maxDepth,
          AxiosError_default.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      }
    }
    function stringifyWithDepthLimit(value, depth) {
      if (maxDepth === Infinity) {
        return JSON.stringify(value);
      }
      const ancestors = [];
      return JSON.stringify(value, function limitDepth(_key, currentValue) {
        if (!utils_default.isObject(currentValue)) {
          return currentValue;
        }
        while (ancestors.length && ancestors[ancestors.length - 1] !== this) {
          ancestors.pop();
        }
        ancestors.push(currentValue);
        throwIfMaxDepthExceeded(depth + ancestors.length - 1);
        return currentValue;
      });
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (utils_default.isReactNative(formData) && utils_default.isReactNativeBlob(value)) {
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
      }
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = stringifyWithDepthLimit(value, 1);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index2) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index2, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path, depth = 0) {
      if (utils_default.isUndefined(value)) return;
      throwIfMaxDepthExceeded(depth);
      if (stack.indexOf(value) !== -1) {
        throw new Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(formData, el, utils_default.isString(key) ? key.trim() : key, path, exposedHelpers);
        if (result === true) {
          build(el, path ? path.concat(key) : [key], depth + 1);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // ../__options/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype = AxiosURLSearchParams.prototype;
  prototype.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype.toString = function toString2(encoder) {
    const _encode = encoder ? (value) => encoder.call(this, value, encode) : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // ../__options/node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    url = url || "";
    const _options = utils_default.isFunction(options) ? {
      serialize: options
    } : options;
    const _encode = utils_default.getSafeProp(_options, "encode") || encode2;
    const serializeFn = utils_default.getSafeProp(_options, "serialize");
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, _options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, _options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // ../__options/node_modules/axios/lib/core/InterceptorManager.js
  var $internals2 = Symbol("internals");
  function countHandlers(handlers) {
    return handlers ? handlers.length : 0;
  }
  function trimHandlers(handlers) {
    if (!handlers) {
      return;
    }
    while (handlers.length && handlers[handlers.length - 1] === null) {
      handlers.pop();
    }
  }
  function syncHandlerEntries(manager, internals) {
    const handlers = manager.handlers;
    const length = countHandlers(handlers);
    if (handlers !== internals.handlersRef) {
      internals.handlersRef = handlers;
      internals.handlerEntries.clear();
    } else if (length !== internals.handlersLength) {
      if (!length) {
        internals.handlerEntries.clear();
      } else {
        internals.handlerEntries.forEach(function removeStaleEntry(entry, id) {
          if (handlers[entry.index] !== entry.handler) {
            internals.handlerEntries.delete(id);
          }
        });
      }
    }
    internals.handlersLength = length;
  }
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
      this[$internals2] = {
        handlersRef: this.handlers,
        handlersLength: this.handlers.length,
        handlerEntries: /* @__PURE__ */ new Map(),
        iterationDepth: 0,
        nextId: 0
      };
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     * @param {Object} options The options for the interceptor, synchronous and runWhen
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      const handler = {
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      };
      const internals = this[$internals2];
      if (this.handlers == null) {
        this.handlers = [];
      }
      syncHandlerEntries(this, internals);
      const id = internals.nextId++;
      this.handlers.push(handler);
      internals.handlerEntries.set(id, {
        handler,
        index: this.handlers.length - 1
      });
      internals.handlersLength = this.handlers.length;
      return id;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {void}
     */
    eject(id) {
      const internals = this[$internals2];
      syncHandlerEntries(this, internals);
      const entry = internals.handlerEntries.get(id);
      if (entry) {
        internals.handlerEntries.delete(id);
        if (this.handlers[entry.index] !== entry.handler) {
          return;
        }
        this.handlers[entry.index] = null;
        if (!internals.iterationDepth) {
          trimHandlers(this.handlers);
          internals.handlersLength = this.handlers.length;
        }
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
        syncHandlerEntries(this, this[$internals2]);
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      const internals = this[$internals2];
      syncHandlerEntries(this, internals);
      internals.iterationDepth++;
      try {
        utils_default.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      } finally {
        if (!--internals.iterationDepth) {
          syncHandlerEntries(this, internals);
          trimHandlers(this.handlers);
          internals.handlersLength = countHandlers(this.handlers);
        }
      }
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // ../__options/node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
    legacyInterceptorReqResOrdering: true,
    advertiseZstdAcceptEncoding: false,
    validateStatusUndefinedResolves: true
  };

  // ../__options/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // ../__options/node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // ../__options/node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // ../__options/node_modules/axios/lib/platform/browser/index.js
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // ../__options/node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
    navigator: () => _navigator,
    origin: () => origin
  });
  var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  var _navigator = typeof navigator === "object" && navigator || void 0;
  var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
  var hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  var origin = hasBrowserEnv && window.location.href || "http://localhost";

  // ../__options/node_modules/axios/lib/platform/index.js
  var platform_default = {
    ...utils_exports,
    ...browser_default
  };

  // ../__options/node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), {
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      },
      ...options
    });
  }

  // ../__options/node_modules/axios/lib/helpers/formDataToJSON.js
  var MAX_DEPTH = DEFAULT_FORM_DATA_MAX_DEPTH;
  function throwIfDepthExceeded(index2) {
    if (index2 > MAX_DEPTH) {
      throw new AxiosError_default(
        "FormData field is too deeply nested (" + index2 + " levels). Max depth: " + MAX_DEPTH,
        AxiosError_default.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
    }
  }
  function parsePropPath(name) {
    const path = [];
    const pattern = /[^.[\]]+|\[([^.[\]]*)]/g;
    let match;
    while ((match = pattern.exec(name)) !== null) {
      throwIfDepthExceeded(path.length);
      path.push(match[0] === "[]" ? "" : match[1] || match[0]);
    }
    return path;
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index2) {
      throwIfDepthExceeded(index2);
      let name = path[index2++];
      if (name === "__proto__") return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index2 >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = utils_default.isArray(target[name]) ? target[name].concat(value) : [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!utils_default.hasOwnProp(target, name) || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index2);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // ../__options/node_modules/axios/lib/core/methodList.js
  var methodList = Object.freeze([
    "get",
    "delete",
    "head",
    "options",
    "post",
    "put",
    "patch",
    "purge",
    "link",
    "unlink",
    "query"
  ]);
  var methodList_default = methodList;

  // ../__options/node_modules/axios/lib/defaults/index.js
  var own = (obj, key) => obj != null && utils_default.hasOwnProp(obj, key) ? obj[key] : void 0;
  function stringifySafely2(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function transformRequest(data, headers) {
        const contentType = headers.getContentType() || "";
        const hasJSONContentType = contentType.indexOf("application/json") > -1;
        const isObjectPayload = utils_default.isObject(data);
        if (isObjectPayload && utils_default.isHTMLForm(data)) {
          data = new FormData(data);
        }
        const isFormData2 = utils_default.isFormData(data);
        if (isFormData2) {
          return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
        }
        if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
          return data;
        }
        if (utils_default.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils_default.isURLSearchParams(data)) {
          headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
          return data.toString();
        }
        let isFileList2;
        if (isObjectPayload) {
          const formSerializer = own(this, "formSerializer");
          if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
            return toURLEncodedForm(data, formSerializer).toString();
          }
          if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
            const env = own(this, "env");
            const _FormData = env && env.FormData;
            return toFormData_default(
              isFileList2 ? { "files[]": data } : data,
              _FormData && new _FormData(),
              formSerializer
            );
          }
        }
        if (isObjectPayload || hasJSONContentType) {
          headers.setContentType("application/json", false);
          return stringifySafely2(data);
        }
        return data;
      }
    ],
    transformResponse: [
      function transformResponse(data) {
        const transitional2 = own(this, "transitional") || defaults.transitional;
        const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
        const responseType = own(this, "responseType");
        const JSONRequested = responseType === "json";
        if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
          return data;
        }
        if (data && utils_default.isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
          const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
          const strictJSONParsing = !silentJSONParsing && JSONRequested;
          try {
            return JSON.parse(data, own(this, "parseReviver"));
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, own(this, "response"));
              }
              throw e;
            }
          }
        }
        return data;
      }
    ],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform_default.classes.FormData,
      Blob: platform_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(methodList_default, (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // ../__options/node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config2 = this || defaults_default;
    const context = response || config2;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config2, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // ../__options/node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // ../__options/node_modules/axios/lib/cancel/CanceledError.js
  var CanceledError = class extends AxiosError_default {
    /**
     * A `CanceledError` is an object that is thrown when an operation is canceled.
     *
     * @param {string=} message The message.
     * @param {Object=} config The config.
     * @param {Object=} request The request.
     *
     * @returns {CanceledError} The created error.
     */
    constructor(message, config2, request) {
      super(message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config2, request);
      this.name = "CanceledError";
      this.__CANCEL__ = true;
    }
  };
  var CanceledError_default = CanceledError;

  // ../__options/node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        response.status >= 400 && response.status < 500 ? AxiosError_default.ERR_BAD_REQUEST : AxiosError_default.ERR_BAD_RESPONSE,
        response.config,
        response.request,
        response
      ));
    }
  }

  // ../__options/node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
  var urlParserControlCharacters = /[\t\n\r]/g;
  function normalizeURLForProtocolCheck(url) {
    if (typeof url !== "string") {
      return url;
    }
    let start = 0;
    while (start < url.length && url.charCodeAt(start) <= 32) {
      start++;
    }
    return url.slice(start).replace(urlParserControlCharacters, "");
  }

  // ../__options/node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
    return match && match[1] || "";
  }

  // ../__options/node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // ../__options/node_modules/axios/lib/helpers/throttle.js
  function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1e3 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now()) => {
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn(...args);
    };
    const throttled = (...args) => {
      const now = Date.now();
      const passed = now - timestamp;
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    const flush = () => lastArgs && invoke(lastArgs);
    const flushWith = (...args) => invoke(args);
    return [throttled, flush, flushWith];
  }
  var throttle_default = throttle;

  // ../__options/node_modules/axios/lib/helpers/progressEventReducer.js
  var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return throttle_default((e) => {
      if (!e || !utils_default.isNumber(e.loaded)) {
        return;
      }
      const rawLoaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const loaded = Math.max(0, total != null ? Math.min(rawLoaded, total) : rawLoaded);
      const progressBytes = Math.max(0, loaded - bytesNotified);
      const rate = _speedometer(progressBytes);
      bytesNotified = Math.max(bytesNotified, loaded);
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total ? (total - loaded) / rate : void 0,
        event: e,
        lengthComputable: total != null,
        [isDownloadStream ? "download" : "upload"]: true
      };
      listener(data);
    }, freq);
  };
  var progressEventDecorator = (total, throttled) => {
    const lengthComputable = total != null;
    return [
      (loaded) => throttled[0]({
        lengthComputable,
        total,
        loaded
      }),
      throttled[1]
    ];
  };
  var asyncDecorator = (fn, scheduler = utils_default.asap) => (...args) => scheduler(() => fn(...args));

  // ../__options/node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
    url = new URL(url, platform_default.origin);
    return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
  })(
    new URL(platform_default.origin),
    platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
  ) : () => true;

  // ../__options/node_modules/axios/lib/helpers/cookies.js
  var cookies_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure, sameSite) {
        if (typeof document === "undefined") return;
        const cookie = [`${name}=${encodeURIComponent(value)}`];
        if (utils_default.isNumber(expires)) {
          cookie.push(`expires=${new Date(expires).toUTCString()}`);
        }
        if (utils_default.isString(path)) {
          cookie.push(`path=${path}`);
        }
        if (utils_default.isString(domain)) {
          cookie.push(`domain=${domain}`);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        if (utils_default.isString(sameSite)) {
          cookie.push(`SameSite=${sameSite}`);
        }
        document.cookie = cookie.join("; ");
      },
      read(name) {
        if (typeof document === "undefined") return null;
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].replace(/^\s+/, "");
          const eq = cookie.indexOf("=");
          if (eq !== -1 && cookie.slice(0, eq) === name) {
            try {
              return decodeURIComponent(cookie.slice(eq + 1));
            } catch (e) {
              return cookie.slice(eq + 1);
            }
          }
        }
        return null;
      },
      remove(name) {
        this.write(name, "", Date.now() - 864e5, "/");
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );

  // ../__options/node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    if (typeof url !== "string") {
      return false;
    }
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // ../__options/node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    if (!relativeURL) {
      return baseURL;
    }
    let end = baseURL.length;
    while (end > 0 && baseURL.charCodeAt(end - 1) === 47) {
      end--;
    }
    return baseURL.slice(0, end) + "/" + relativeURL.replace(/^\/+/, "");
  }

  // ../__options/node_modules/axios/lib/core/buildFullPath.js
  var malformedHttpProtocol = /^https?:(?!\/\/)/i;
  function redactFragment(fragment) {
    if (!fragment) {
      return fragment;
    }
    return fragment.replace(/(^|&)([^=&]*=)?[^&]+/g, (match, separator, parameterName = "") => {
      return `${separator}${parameterName}${REDACTED}`;
    });
  }
  function redactSensitiveURLParts(url) {
    const redactedURL = url.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${REDACTED}@`);
    const fragmentIndex = redactedURL.indexOf("#");
    const urlWithoutFragment = fragmentIndex === -1 ? redactedURL : redactedURL.slice(0, fragmentIndex);
    const redactedURLWithoutFragment = urlWithoutFragment.replace(
      /([?&][^=&#]*=)[^&#]*/g,
      `$1${REDACTED}`
    );
    if (fragmentIndex === -1) {
      return redactedURLWithoutFragment;
    }
    return `${redactedURLWithoutFragment}#${redactFragment(redactedURL.slice(fragmentIndex + 1))}`;
  }
  function assertValidHttpProtocolURL(url, config2) {
    if (typeof url === "string") {
      const normalizedURL = normalizeURLForProtocolCheck(url);
      if (malformedHttpProtocol.test(normalizedURL)) {
        throw new AxiosError_default(
          `Invalid URL ${JSON.stringify(redactSensitiveURLParts(normalizedURL))}: missing "//" after protocol`,
          AxiosError_default.ERR_INVALID_URL,
          config2
        );
      }
    }
  }
  function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls, config2) {
    assertValidHttpProtocolURL(requestedURL, config2);
    let isRelativeUrl = !isAbsoluteURL(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
      assertValidHttpProtocolURL(baseURL, config2);
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // ../__options/node_modules/axios/lib/core/mergeConfig.js
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
  var ownEnumerableKeys = (thing) => {
    if (Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor) {
      return Object.keys(thing).concat(
        Object.getOwnPropertySymbols(thing).filter(
          (symbol) => Object.getOwnPropertyDescriptor(thing, symbol).enumerable
        )
      );
    }
    return Object.keys(thing);
  };
  function mergeConfig(config1, config2) {
    config1 = config1 || {};
    config2 = config2 || {};
    const config3 = /* @__PURE__ */ Object.create(null);
    Object.defineProperty(config3, "hasOwnProperty", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: Object.prototype.hasOwnProperty,
      enumerable: false,
      writable: true,
      configurable: true
    });
    function getMergedValue(target, source, prop, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, prop, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, prop, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function getMergedTransitionalOption(prop) {
      const transitional2 = utils_default.hasOwnProp(config2, "transitional") ? config2.transitional : void 0;
      if (!utils_default.isUndefined(transitional2)) {
        if (utils_default.isPlainObject(transitional2)) {
          if (utils_default.hasOwnProp(transitional2, prop)) {
            return transitional2[prop];
          }
        } else {
          return void 0;
        }
      }
      const transitional1 = utils_default.hasOwnProp(config1, "transitional") ? config1.transitional : void 0;
      if (utils_default.isPlainObject(transitional1) && utils_default.hasOwnProp(transitional1, prop)) {
        return transitional1[prop];
      }
      return void 0;
    }
    function mergeDirectKeys(a, b, prop) {
      if (utils_default.hasOwnProp(config2, prop)) {
        return getMergedValue(a, b);
      } else if (utils_default.hasOwnProp(config1, prop)) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutErrorMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      allowedSocketPaths: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    utils_default.forEach(ownEnumerableKeys({ ...config1, ...config2 }), function computeConfigValue(prop) {
      if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
      const merge2 = utils_default.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
      const a = utils_default.hasOwnProp(config1, prop) ? config1[prop] : void 0;
      const b = utils_default.hasOwnProp(config2, prop) ? config2[prop] : void 0;
      const configValue = merge2(a, b, prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
    });
    if (utils_default.hasOwnProp(config2, "validateStatus") && utils_default.isUndefined(config2.validateStatus) && getMergedTransitionalOption("validateStatusUndefinedResolves") === false) {
      if (utils_default.hasOwnProp(config1, "validateStatus")) {
        config3.validateStatus = getMergedValue(void 0, config1.validateStatus);
      } else {
        delete config3.validateStatus;
      }
    }
    return config3;
  }

  // ../__options/node_modules/axios/lib/core/setFormDataHeaders.js
  var FORM_DATA_CONTENT_HEADERS = ["content-type", "content-length"];
  function setFormDataHeaders(headers, formHeaders, policy) {
    if (policy !== "content-only") {
      headers.set(formHeaders);
      return;
    }
    Object.entries(formHeaders || {}).forEach(([key, val]) => {
      if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) {
        headers.set(key, val);
      }
    });
  }

  // ../__options/node_modules/axios/lib/helpers/resolveConfig.js
  var encodeUTF8 = (str) => encodeURIComponent(str).replace(
    /%([0-9A-F]{2})/gi,
    (_, hex) => String.fromCharCode(parseInt(hex, 16))
  );
  function resolveConfig(config2) {
    const newConfig = mergeConfig({}, config2);
    const own2 = (key) => utils_default.hasOwnProp(newConfig, key) ? newConfig[key] : void 0;
    const data = own2("data");
    let withXSRFToken = own2("withXSRFToken");
    const xsrfHeaderName = own2("xsrfHeaderName");
    const xsrfCookieName = own2("xsrfCookieName");
    let headers = own2("headers");
    const auth = own2("auth");
    const baseURL = own2("baseURL");
    const allowAbsoluteUrls = own2("allowAbsoluteUrls");
    const url = own2("url");
    newConfig.headers = headers = AxiosHeaders_default.from(headers);
    newConfig.url = buildURL(
      buildFullPath(baseURL, url, allowAbsoluteUrls, newConfig),
      own2("params"),
      own2("paramsSerializer")
    );
    if (auth) {
      const username = utils_default.getSafeProp(auth, "username") || "";
      const password = utils_default.getSafeProp(auth, "password") || "";
      try {
        headers.set(
          "Authorization",
          "Basic " + btoa(username + ":" + (password ? encodeUTF8(password) : ""))
        );
      } catch (e) {
        throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_OPTION_VALUE, config2);
      }
    }
    if (utils_default.isFormData(data)) {
      const getHeaders = utils_default.getSafeProp(data, "getHeaders");
      if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv || utils_default.isReactNative(data)) {
        headers.setContentType(void 0);
      } else if (utils_default.isFunction(getHeaders)) {
        setFormDataHeaders(headers, getHeaders.call(data), own2("formDataHeaderPolicy"));
      }
    }
    if (platform_default.hasStandardBrowserEnv) {
      if (utils_default.isFunction(withXSRFToken)) {
        withXSRFToken = withXSRFToken(newConfig);
      }
      const shouldSendXSRF = withXSRFToken === true || withXSRFToken == null && isURLSameOrigin_default(newConfig.url);
      if (shouldSendXSRF) {
        const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  }
  var resolveConfig_default = resolveConfig;

  // ../__options/node_modules/axios/lib/adapters/xhr.js
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config2) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig_default(config2);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload, flushDownloadWithEvent;
      function done() {
        flushUpload && flushUpload();
        flushDownload && flushDownload();
        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
        _config.signal && _config.signal.removeEventListener("abort", onCanceled);
      }
      let request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);
      request.timeout = _config.timeout;
      function onloadend(event) {
        if (!request) {
          return;
        }
        if (request.status === 0 && (parseProtocol(normalizeURLForProtocolCheck(_config.url)) || parseProtocol(platform_default.origin)) !== "file" && !(request.responseURL && request.responseURL.startsWith("file:"))) {
          reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config2, request));
          done();
          request = null;
          return;
        }
        try {
          if (event) {
            flushDownloadWithEvent && flushDownloadWithEvent(event);
          } else {
            flushDownload && flushDownload();
          }
        } catch (err) {
          setTimeout(() => {
            throw err;
          });
        }
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config2,
          request
        };
        settle(
          function _resolve(value) {
            resolve(value);
            done();
          },
          function _reject(err) {
            reject(err);
            done();
          },
          response
        );
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.startsWith("file:"))) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config2, request));
        done();
        request = null;
      };
      request.onerror = function handleError(event) {
        const msg = event && event.message ? event.message : "Network Error";
        const err = new AxiosError_default(msg, AxiosError_default.ERR_NETWORK, config2, request);
        err.event = event || null;
        reject(err);
        done();
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = _config.transitional || transitional_default;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(
          new AxiosError_default(
            timeoutErrorMessage,
            transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
            config2,
            request
          )
        );
        done();
        request = null;
      };
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(toByteStringHeaderObject(requestHeaders), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = _config.responseType;
      }
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload, flushDownloadWithEvent] = progressEventReducer(
          onDownloadProgress,
          true
        );
        request.addEventListener("progress", downloadThrottled);
      }
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
        request.upload.addEventListener("progress", uploadThrottled);
        request.upload.addEventListener("loadend", flushUpload);
      }
      if (_config.cancelToken || _config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config2, request) : cancel);
          request.abort();
          done();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(_config.url);
      if (protocol && !platform_default.protocols.includes(protocol)) {
        reject(
          new AxiosError_default(
            "Unsupported protocol " + protocol + ":",
            AxiosError_default.ERR_BAD_REQUEST,
            config2
          )
        );
        done();
        return;
      }
      request.send(requestData || null);
    });
  };

  // ../__options/node_modules/axios/lib/helpers/composeSignals.js
  var composeSignals = (signals, timeout) => {
    signals = signals ? signals.filter(Boolean) : [];
    if (!timeout && !signals.length) {
      return;
    }
    const controller = new AbortController();
    let aborted = false;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(
          err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err)
        );
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError_default(`timeout of ${timeout}ms exceeded`, AxiosError_default.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (!signals) {
        return;
      }
      timer && clearTimeout(timer);
      timer = null;
      signals.forEach((signal2) => {
        signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
      });
      signals = null;
    };
    signals.forEach((signal2) => {
      if (aborted) {
        return;
      }
      if (signal2.aborted) {
        onabort.call(signal2);
        return;
      }
      signal2.addEventListener("abort", onabort, { once: true });
    });
    const { signal } = controller;
    signal.unsubscribe = () => utils_default.asap(unsubscribe);
    return signal;
  };
  var composeSignals_default = composeSignals;

  // ../__options/node_modules/axios/lib/helpers/trackStream.js
  var streamChunk = function* (chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
      yield chunk;
      return;
    }
    let pos = 0;
    let end;
    while (pos < len) {
      end = pos + chunkSize;
      yield chunk.slice(pos, end);
      pos = end;
    }
  };
  var readBytes = async function* (iterable, chunkSize) {
    for await (const chunk of readStream(iterable)) {
      yield* streamChunk(chunk, chunkSize);
    }
  };
  var readStream = async function* (stream) {
    if (stream[Symbol.asyncIterator]) {
      yield* stream;
      return;
    }
    const reader = stream.getReader();
    try {
      for (; ; ) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        yield value;
      }
    } finally {
      await reader.cancel();
    }
  };
  var trackStream = (stream, chunkSize, onProgress, onFinish) => {
    const iterator2 = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e) => {
      if (!done) {
        done = true;
        onFinish && onFinish(e);
      }
    };
    return new ReadableStream(
      {
        async pull(controller) {
          try {
            const { done: done2, value } = await iterator2.next();
            if (done2) {
              _onFinish();
              controller.close();
              return;
            }
            let len = value.byteLength;
            if (onProgress) {
              let loadedBytes = bytes += len;
              onProgress(loadedBytes);
            }
            controller.enqueue(new Uint8Array(value));
          } catch (err) {
            _onFinish(err);
            throw err;
          }
        },
        cancel(reason) {
          _onFinish(reason);
          return iterator2.return();
        }
      },
      {
        highWaterMark: 2
      }
    );
  };

  // ../__options/node_modules/axios/lib/helpers/estimateDataURLDecodedBytes.js
  var isHexDigit = (charCode) => charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 70 || charCode >= 97 && charCode <= 102;
  var isPercentEncodedByte = (str, i, len) => i + 2 < len && isHexDigit(str.charCodeAt(i + 1)) && isHexDigit(str.charCodeAt(i + 2));
  var hexValue = (charCode) => charCode <= 57 ? charCode - 48 : (charCode & 223) - 55;
  var isBase64Char = (charCode) => charCode >= 65 && charCode <= 90 || // A-Z
  charCode >= 97 && charCode <= 122 || // a-z
  charCode >= 48 && charCode <= 57 || // 0-9
  charCode === 43 || // +
  charCode === 47 || // /
  charCode === 45 || // - (base64url)
  charCode === 95;
  var isBase64Whitespace = (charCode) => charCode === 9 || charCode === 10 || charCode === 12 || charCode === 13 || charCode === 32;
  var base64Bytes = (significant) => {
    const groups = Math.floor(significant / 4);
    const remainder = significant % 4;
    return groups * 3 + (remainder === 2 ? 1 : remainder === 3 ? 2 : 0);
  };
  var estimateBase64BufferAllocation = (body) => {
    const len = body.length;
    let padding = 0;
    if (len > 0 && body.charCodeAt(len - 1) === 61) {
      padding++;
      if (len > 1 && body.charCodeAt(len - 2) === 61) {
        padding++;
      }
    }
    return Math.floor((len - padding) * 3 / 4);
  };
  var estimatePercentDecodedBase64Bytes = (body) => {
    const len = body.length;
    let significant = 0;
    let padding = 0;
    let invalid = false;
    for (let i = 0; i < len; i++) {
      let code = body.charCodeAt(i);
      if (code === 37 && isPercentEncodedByte(body, i, len)) {
        code = hexValue(body.charCodeAt(i + 1)) * 16 + hexValue(body.charCodeAt(i + 2));
        i += 2;
      }
      if (isBase64Whitespace(code)) {
        continue;
      }
      if (code === 61) {
        padding++;
        continue;
      }
      if (!isBase64Char(code) || padding > 0) {
        invalid = true;
        continue;
      }
      significant++;
    }
    if (invalid || padding > 2 || padding > 0 && (significant + padding) % 4 !== 0 || significant % 4 === 1) {
      return estimateBase64BufferAllocation(body);
    }
    return base64Bytes(significant);
  };
  var estimateDataURLBytes = (url, estimateBase64) => {
    if (!url || typeof url !== "string") return 0;
    if (!url.startsWith("data:")) return 0;
    const comma = url.indexOf(",");
    if (comma < 0) return 0;
    const meta = url.slice(5, comma);
    const body = url.slice(comma + 1);
    const isBase64 = /;base64/i.test(meta);
    if (isBase64) {
      return estimateBase64(body);
    }
    let bytes = 0;
    for (let i = 0, len = body.length; i < len; i++) {
      const c = body.charCodeAt(i);
      if (c === 37 && isPercentEncodedByte(body, i, len)) {
        bytes += 1;
        i += 2;
      } else if (c < 128) {
        bytes += 1;
      } else if (c < 2048) {
        bytes += 2;
      } else if (c >= 55296 && c <= 56319 && i + 1 < len) {
        const next = body.charCodeAt(i + 1);
        if (next >= 56320 && next <= 57343) {
          bytes += 4;
          i++;
        } else {
          bytes += 3;
        }
      } else {
        bytes += 3;
      }
    }
    return bytes;
  };
  function estimateDataURLDecodedBytes(url) {
    const fragmentIndex = typeof url === "string" ? url.indexOf("#") : -1;
    return estimateDataURLBytes(
      fragmentIndex === -1 ? url : url.slice(0, fragmentIndex),
      estimatePercentDecodedBase64Bytes
    );
  }

  // ../__options/node_modules/axios/lib/env/data.js
  var VERSION = "1.20.0";

  // ../__options/node_modules/axios/lib/adapters/fetch.js
  var DEFAULT_CHUNK_SIZE = 64 * 1024;
  var DEFAULT_REQUEST_OPTIONS = {
    cache: "default",
    redirect: "follow",
    referrer: "about:client",
    referrerPolicy: "",
    mode: "cors",
    integrity: "",
    keepalive: false,
    priority: "auto",
    window: null
  };
  var { isFunction: isFunction2 } = utils_default;
  var encodeUTF82 = (str) => encodeURIComponent(str).replace(
    /%([0-9A-F]{2})/gi,
    (_, hex) => String.fromCharCode(parseInt(hex, 16))
  );
  var decodeURIComponentSafe = (value) => {
    if (!utils_default.isString(value)) {
      return value;
    }
    try {
      return decodeURIComponent(value);
    } catch (error) {
      return value;
    }
  };
  var test = (fn, ...args) => {
    try {
      return !!fn(...args);
    } catch (e) {
      return false;
    }
  };
  var maybeWithAuthCredentials = (url) => {
    const protocolIndex = url.indexOf("://");
    let urlToCheck = url;
    if (protocolIndex !== -1) {
      urlToCheck = urlToCheck.slice(protocolIndex + 3);
    }
    return urlToCheck.includes("@") || urlToCheck.includes(":");
  };
  var factory = (env) => {
    const globalObject = utils_default.global !== void 0 && utils_default.global !== null ? utils_default.global : globalThis;
    const { ReadableStream: ReadableStream2, TextEncoder } = globalObject;
    env = utils_default.merge.call(
      {
        skipUndefined: true
      },
      {
        Request: globalObject.Request,
        Response: globalObject.Response
      },
      env
    );
    const { fetch: envFetch, Request, Response } = env;
    const isFetchSupported = envFetch ? isFunction2(envFetch) : typeof fetch === "function";
    const isRequestSupported = isFunction2(Request);
    const isResponseSupported = isFunction2(Response);
    if (!isFetchSupported) {
      return false;
    }
    const isReadableStreamSupported = isFetchSupported && isFunction2(ReadableStream2);
    const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
    const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
      let duplexAccessed = false;
      const request = new Request(platform_default.origin, {
        body: new ReadableStream2(),
        method: "POST",
        get duplex() {
          duplexAccessed = true;
          return "half";
        }
      });
      const hasContentType = request.headers.has("Content-Type");
      if (request.body != null) {
        request.body.cancel();
      }
      return duplexAccessed && !hasContentType;
    });
    const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
    const resolvers = {
      stream: supportsResponseStream && ((res) => res.body)
    };
    isFetchSupported && (() => {
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
        !resolvers[type] && (resolvers[type] = (res, config2) => {
          let method = res && res[type];
          if (method) {
            return method.call(res);
          }
          throw new AxiosError_default(
            `Response type '${type}' is not supported`,
            AxiosError_default.ERR_NOT_SUPPORT,
            config2
          );
        });
      });
    })();
    const getBodyLength = async (body) => {
      if (body == null) {
        return 0;
      }
      if (utils_default.isBlob(body)) {
        return body.size;
      }
      if (utils_default.isSpecCompliantForm(body)) {
        const _request = new Request(platform_default.origin, {
          method: "POST",
          body
        });
        return (await _request.arrayBuffer()).byteLength;
      }
      if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
        return body.byteLength;
      }
      if (utils_default.isURLSearchParams(body)) {
        body = body + "";
      }
      if (utils_default.isString(body)) {
        return (await encodeText(body)).byteLength;
      }
    };
    const resolveBodyLength = async (headers, body) => {
      const length = utils_default.toFiniteNumber(headers.getContentLength());
      return length == null ? getBodyLength(body) : length;
    };
    return async (config2) => {
      let {
        url,
        method,
        data,
        signal,
        cancelToken,
        timeout,
        onDownloadProgress,
        onUploadProgress,
        responseType,
        headers,
        withCredentials = "same-origin",
        fetchOptions,
        maxContentLength,
        maxBodyLength,
        maxRedirects
      } = resolveConfig_default(config2);
      const hasMaxContentLength = utils_default.isNumber(maxContentLength) && maxContentLength > -1;
      const hasMaxBodyLength = utils_default.isNumber(maxBodyLength) && maxBodyLength > -1;
      const own2 = (key) => utils_default.hasOwnProp(config2, key) ? config2[key] : void 0;
      let _fetch = envFetch || fetch;
      responseType = responseType ? (responseType + "").toLowerCase() : "text";
      let composedSignal = composeSignals_default(
        [signal, cancelToken && cancelToken.toAbortSignal()],
        timeout
      );
      let request = null;
      const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
        composedSignal.unsubscribe();
      });
      let requestContentLength;
      let pendingBodyError = null;
      const maxBodyLengthError = () => new AxiosError_default(
        "Request body larger than maxBodyLength limit",
        AxiosError_default.ERR_BAD_REQUEST,
        config2,
        request
      );
      try {
        let auth = void 0;
        const configAuth = own2("auth");
        if (configAuth) {
          const username = utils_default.getSafeProp(configAuth, "username") || "";
          const password = utils_default.getSafeProp(configAuth, "password") || "";
          auth = {
            username,
            password
          };
        }
        if (maybeWithAuthCredentials(url)) {
          const parsedURL = new URL(url, platform_default.origin);
          if (!auth && (parsedURL.username || parsedURL.password)) {
            const urlUsername = decodeURIComponentSafe(parsedURL.username);
            const urlPassword = decodeURIComponentSafe(parsedURL.password);
            auth = {
              username: urlUsername,
              password: urlPassword
            };
          }
          if (parsedURL.username || parsedURL.password) {
            parsedURL.username = "";
            parsedURL.password = "";
            url = parsedURL.href;
          }
        }
        if (auth) {
          headers.delete("authorization");
          headers.set(
            "Authorization",
            "Basic " + btoa(encodeUTF82((auth.username || "") + ":" + (auth.password || "")))
          );
        }
        if (hasMaxContentLength && typeof url === "string" && url.startsWith("data:")) {
          const estimated = estimateDataURLDecodedBytes(url);
          if (estimated > maxContentLength) {
            throw new AxiosError_default(
              "maxContentLength size of " + maxContentLength + " exceeded",
              AxiosError_default.ERR_BAD_RESPONSE,
              config2,
              request
            );
          }
        }
        if (hasMaxBodyLength && method !== "get" && method !== "head") {
          const outboundLength = await getBodyLength(data);
          if (typeof outboundLength === "number" && isFinite(outboundLength)) {
            requestContentLength = outboundLength;
            if (outboundLength > maxBodyLength) {
              throw maxBodyLengthError();
            }
          }
        }
        const mustEnforceStreamBody = hasMaxBodyLength && (utils_default.isReadableStream(data) || utils_default.isStream(data));
        const trackRequestStream = (stream, onProgress, flush) => trackStream(
          stream,
          DEFAULT_CHUNK_SIZE,
          (loadedBytes) => {
            if (hasMaxBodyLength && loadedBytes > maxBodyLength) {
              throw pendingBodyError = maxBodyLengthError();
            }
            onProgress && onProgress(loadedBytes);
          },
          flush
        );
        if (supportsRequestStream && method !== "get" && method !== "head" && (onUploadProgress || mustEnforceStreamBody)) {
          requestContentLength = requestContentLength == null ? await resolveBodyLength(headers, data) : requestContentLength;
          if (requestContentLength !== 0 || mustEnforceStreamBody) {
            let _request = new Request(url, {
              method: "POST",
              body: data,
              duplex: "half"
            });
            let contentTypeHeader;
            if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
              headers.setContentType(contentTypeHeader);
            }
            if (_request.body) {
              const [onProgress, flush] = onUploadProgress && progressEventDecorator(
                requestContentLength,
                progressEventReducer(asyncDecorator(onUploadProgress))
              ) || [];
              data = trackRequestStream(_request.body, onProgress, flush);
            }
          }
        } else if (mustEnforceStreamBody && !isRequestSupported && isReadableStreamSupported && method !== "get" && method !== "head") {
          data = trackRequestStream(data);
        } else if (mustEnforceStreamBody && isRequestSupported && !supportsRequestStream && method !== "get" && method !== "head") {
          throw new AxiosError_default(
            "Stream request bodies are not supported by the current fetch implementation",
            AxiosError_default.ERR_NOT_SUPPORT,
            config2,
            request
          );
        }
        if (!utils_default.isString(withCredentials)) {
          withCredentials = withCredentials ? "include" : "omit";
        }
        const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
        if (utils_default.isFormData(data)) {
          const contentType = headers.getContentType();
          if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) {
            headers.delete("content-type");
          }
        }
        headers.set("User-Agent", "axios/" + VERSION, false);
        const safeFetchOptions = fetchOptions == null ? fetchOptions : Object.assign(/* @__PURE__ */ Object.create(null), fetchOptions);
        if (safeFetchOptions) {
          delete safeFetchOptions.body;
          delete safeFetchOptions.headers;
          delete safeFetchOptions.method;
          delete safeFetchOptions.signal;
          delete safeFetchOptions.duplex;
          delete safeFetchOptions.credentials;
        }
        const resolvedOptions = Object.assign(/* @__PURE__ */ Object.create(null), safeFetchOptions, {
          signal: composedSignal,
          method: method.toUpperCase(),
          headers: toByteStringHeaderObject(headers.normalize()),
          body: data,
          duplex: "half",
          credentials: isCredentialsSupported ? withCredentials : void 0
        });
        if (isRequestSupported) {
          utils_default.forEach(DEFAULT_REQUEST_OPTIONS, (value, key) => {
            if (resolvedOptions[key] === void 0) {
              resolvedOptions[key] = value;
            }
          });
          if (resolvedOptions.signal === void 0) {
            resolvedOptions.signal = null;
          }
          if (resolvedOptions.body === void 0) {
            resolvedOptions.body = null;
          }
        }
        if (maxRedirects === 0) {
          resolvedOptions.redirect = "manual";
          if (safeFetchOptions) {
            safeFetchOptions.redirect = "manual";
          }
        }
        request = isRequestSupported && new Request(url, resolvedOptions);
        let response = await (isRequestSupported ? _fetch(request, safeFetchOptions) : _fetch(url, resolvedOptions));
        const responseHeaders = AxiosHeaders_default.from(response.headers);
        if (hasMaxContentLength) {
          const declaredLength = utils_default.toFiniteNumber(responseHeaders.getContentLength());
          if (declaredLength != null && declaredLength > maxContentLength) {
            throw new AxiosError_default(
              "maxContentLength size of " + maxContentLength + " exceeded",
              AxiosError_default.ERR_BAD_RESPONSE,
              config2,
              request
            );
          }
        }
        const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
        if (supportsResponseStream && response.body && (onDownloadProgress || hasMaxContentLength || isStreamResponse && unsubscribe)) {
          const options = {};
          ["status", "statusText", "headers"].forEach((prop) => {
            options[prop] = response[prop];
          });
          const responseContentLength = utils_default.toFiniteNumber(responseHeaders.getContentLength());
          const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
            responseContentLength,
            progressEventReducer(asyncDecorator(onDownloadProgress), true)
          ) || [];
          let bytesRead = 0;
          const onChunkProgress = (loadedBytes) => {
            if (hasMaxContentLength) {
              bytesRead = loadedBytes;
              if (bytesRead > maxContentLength) {
                throw new AxiosError_default(
                  "maxContentLength size of " + maxContentLength + " exceeded",
                  AxiosError_default.ERR_BAD_RESPONSE,
                  config2,
                  request
                );
              }
            }
            onProgress && onProgress(loadedBytes);
          };
          response = new Response(
            trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
              flush && flush();
              unsubscribe && unsubscribe();
            }),
            options
          );
        }
        responseType = responseType || "text";
        let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](
          response,
          config2
        );
        if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
          let materializedSize;
          if (responseData != null) {
            if (typeof responseData.byteLength === "number") {
              materializedSize = responseData.byteLength;
            } else if (typeof responseData.size === "number") {
              materializedSize = responseData.size;
            } else if (typeof responseData === "string") {
              materializedSize = typeof TextEncoder === "function" ? new TextEncoder().encode(responseData).byteLength : responseData.length;
            }
          }
          if (typeof materializedSize === "number" && materializedSize > maxContentLength) {
            throw new AxiosError_default(
              "maxContentLength size of " + maxContentLength + " exceeded",
              AxiosError_default.ERR_BAD_RESPONSE,
              config2,
              request
            );
          }
        }
        !isStreamResponse && unsubscribe && unsubscribe();
        return await new Promise((resolve, reject) => {
          settle(resolve, reject, {
            data: responseData,
            headers: AxiosHeaders_default.from(response.headers),
            status: response.status,
            statusText: response.statusText,
            config: config2,
            request
          });
        });
      } catch (err) {
        unsubscribe && unsubscribe();
        if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError_default) {
          const canceledError = composedSignal.reason;
          canceledError.config = config2;
          request && (canceledError.request = request);
          if (err !== canceledError) {
            Object.defineProperty(canceledError, "cause", {
              __proto__: null,
              value: err,
              writable: true,
              enumerable: false,
              configurable: true
            });
          }
          throw canceledError;
        }
        if (pendingBodyError) {
          request && !pendingBodyError.request && (pendingBodyError.request = request);
          throw pendingBodyError;
        }
        if (err instanceof AxiosError_default) {
          request && !err.request && (err.request = request);
          throw err;
        }
        if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
          const networkError = new AxiosError_default(
            "Network Error",
            AxiosError_default.ERR_NETWORK,
            config2,
            request,
            err && err.response
          );
          Object.defineProperty(networkError, "cause", {
            __proto__: null,
            value: err.cause || err,
            writable: true,
            enumerable: false,
            configurable: true
          });
          throw networkError;
        }
        throw AxiosError_default.from(err, err && err.code, config2, request, err && err.response);
      }
    };
  };
  var seedCache = /* @__PURE__ */ new Map();
  var getFetch = (config2) => {
    let env = config2 && config2.env || {};
    const { fetch: fetch2, Request, Response } = env;
    const seeds = [Request, Response, fetch2];
    let len = seeds.length, i = len, seed, target, map = seedCache;
    while (i--) {
      seed = seeds[i];
      target = map.get(seed);
      target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
      map = target;
    }
    return target;
  };
  var adapter = getFetch();

  // ../__options/node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default,
    fetch: {
      get: getFetch
    }
  };
  utils_default.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { __proto__: null, value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { __proto__: null, value });
    }
  });
  var renderReason = (reason) => `- ${reason}`;
  var isResolvedHandle = (adapter2) => utils_default.isFunction(adapter2) || adapter2 === null || adapter2 === false;
  function getAdapter(adapters, config2) {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter2;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter2 = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter2 = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter2 === void 0) {
          throw new AxiosError_default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter2 && (utils_default.isFunction(adapter2) || (adapter2 = adapter2.get(config2)))) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter2;
    }
    if (!adapter2) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s2 = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(
        `There is no suitable adapter to dispatch the request ` + s2,
        AxiosError_default.ERR_NOT_SUPPORT
      );
    }
    return adapter2;
  }
  var adapters_default = {
    /**
     * Resolve an adapter from a list of adapter names or functions.
     * @type {Function}
     */
    getAdapter,
    /**
     * Exposes all known adapters
     * @type {Object<string, Function|Object>}
     */
    adapters: knownAdapters
  };

  // ../__options/node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config2) {
    if (config2.cancelToken) {
      config2.cancelToken.throwIfRequested();
    }
    if (config2.signal && config2.signal.aborted) {
      throw new CanceledError_default(null, config2);
    }
  }
  function dispatchRequest(_config) {
    const config2 = utils_default.toSafeFlatObject(_config);
    throwIfCancellationRequested(config2);
    config2.headers = AxiosHeaders_default.from(utils_default.getSafeProp(config2, "headers"));
    config2.data = transformData.call(config2, config2.transformRequest);
    if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
      config2.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter2 = adapters_default.getAdapter(config2.adapter || defaults_default.adapter, config2);
    return adapter2(config2).then(
      function onAdapterResolution(response) {
        throwIfCancellationRequested(config2);
        config2.response = response;
        try {
          response.data = transformData.call(config2, config2.transformResponse, response);
        } finally {
          delete config2.response;
        }
        response.headers = AxiosHeaders_default.from(response.headers);
        return response;
      },
      function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config2);
          if (reason && reason.response) {
            config2.response = reason.response;
            try {
              reason.response.data = transformData.call(
                config2,
                config2.transformResponse,
                reason.response
              );
            } finally {
              delete config2.response;
            }
            reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
          }
        }
        return Promise.reject(reason);
      }
    );
  }

  // ../__options/node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  validators.spelling = function spelling(correctSpelling) {
    return (value, opt) => {
      console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
      return true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object" || options === null) {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : void 0;
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default(
            "option " + opt + " must be " + result,
            AxiosError_default.ERR_BAD_OPTION_VALUE
          );
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // ../__options/node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig || {};
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(configOrUrl, config2) {
      try {
        return await this._request(configOrUrl, config2);
      } catch (err) {
        if (err instanceof Error) {
          try {
            let dummy = {};
            Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
            const dummyStack = dummy.stack;
            let stack = "";
            if (typeof dummyStack === "string") {
              const firstNewlineIndex = dummyStack.indexOf("\n");
              stack = firstNewlineIndex === -1 ? "" : dummyStack.slice(firstNewlineIndex + 1);
            }
            if (!err.stack) {
              err.stack = stack;
            } else if (stack) {
              const firstNewlineIndex = stack.indexOf("\n");
              const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf("\n", firstNewlineIndex + 1);
              const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? "" : stack.slice(secondNewlineIndex + 1);
              if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
                err.stack += "\n" + stack;
              }
            }
          } catch (e) {
          }
        }
        throw err;
      }
    }
    _request(configOrUrl, config2) {
      if (typeof configOrUrl === "string") {
        config2 = config2 || {};
        config2.url = configOrUrl;
      } else {
        config2 = configOrUrl || {};
      }
      config2 = mergeConfig(this.defaults, config2);
      const { transitional: transitional2, paramsSerializer, headers } = config2;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(
          transitional2,
          {
            silentJSONParsing: validators2.transitional(validators2.boolean),
            forcedJSONParsing: validators2.transitional(validators2.boolean),
            clarifyTimeoutError: validators2.transitional(validators2.boolean),
            legacyInterceptorReqResOrdering: validators2.transitional(validators2.boolean),
            advertiseZstdAcceptEncoding: validators2.transitional(validators2.boolean),
            validateStatusUndefinedResolves: validators2.transitional(validators2.boolean)
          },
          false
        );
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config2.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(
            paramsSerializer,
            {
              encode: validators2.function,
              serialize: validators2.function
            },
            true
          );
        }
      }
      if (config2.allowAbsoluteUrls !== void 0) {
      } else if (this.defaults.allowAbsoluteUrls !== void 0) {
        config2.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
      } else {
        config2.allowAbsoluteUrls = true;
      }
      validator_default.assertOptions(
        config2,
        {
          baseUrl: validators2.spelling("baseURL"),
          withXsrfToken: validators2.spelling("withXSRFToken")
        },
        true
      );
      config2.method = (utils_default.getSafeProp(config2, "method") || utils_default.getSafeProp(this.defaults, "method") || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(headers.common, headers[config2.method]);
      headers && utils_default.forEach(methodList_default.concat("common"), (method) => {
        delete headers[method];
      });
      config2.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        const transitional3 = config2.transitional || transitional_default;
        const legacyInterceptorReqResOrdering = transitional3 && transitional3.legacyInterceptorReqResOrdering;
        if (legacyInterceptorReqResOrdering) {
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        } else {
          requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        }
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift(...requestInterceptorChain);
        chain.push(...responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config2);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config2;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled ? onFulfilled(newConfig) : newConfig;
        } catch (error) {
          if (!onRejected) {
            promise = Promise.reject(error);
            break;
          }
          try {
            const rejectedResult = onRejected.call(this, error);
            if (utils_default.isThenable(rejectedResult)) {
              promise = Promise.resolve(rejectedResult).then(
                () => dispatchRequest.call(this, newConfig)
              );
            }
          } catch (rejectedError) {
            promise = Promise.reject(rejectedError);
          }
          break;
        }
      }
      if (!promise) {
        try {
          promise = dispatchRequest.call(this, newConfig);
        } catch (error) {
          promise = Promise.reject(error);
        }
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config2) {
      config2 = mergeConfig(this.defaults, config2);
      const fullPath = buildFullPath(config2.baseURL, config2.url, config2.allowAbsoluteUrls, config2);
      return buildURL(fullPath, config2.params, config2.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config2) {
      return this.request(
        mergeConfig(config2 || {}, {
          method,
          url,
          data: config2 && utils_default.hasOwnProp(config2, "data") ? config2.data : void 0
        })
      );
    };
  });
  utils_default.forEach(["post", "put", "patch", "query"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config2) {
        return this.request(
          mergeConfig(config2 || {}, {
            method,
            headers: isForm ? {
              "Content-Type": "multipart/form-data"
            } : {},
            url,
            data
          })
        );
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    if (method !== "query") {
      Axios.prototype[method + "Form"] = generateHTTPMethod(true);
    }
  });
  var Axios_default = Axios;

  // ../__options/node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners) return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config2, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config2, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index2 = this._listeners.indexOf(listener);
      if (index2 !== -1) {
        this._listeners.splice(index2, 1);
      }
    }
    toAbortSignal() {
      const controller = new AbortController();
      const abort = (err) => {
        controller.abort(err);
      };
      this.subscribe(abort);
      controller.signal.unsubscribe = () => this.unsubscribe(abort);
      return controller.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // ../__options/node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // ../__options/node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // ../__options/node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    /**
     * @deprecated Use `ContentTooLarge` instead.
     */
    PayloadTooLarge: 413,
    ContentTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    /**
     * @deprecated Use `UnprocessableContent` instead.
     */
    UnprocessableEntity: 422,
    UnprocessableContent: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerReturnsAnUnknownError: 520,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    if (HttpStatusCode[value] === void 0) {
      HttpStatusCode[value] = key;
    }
  });
  var HttpStatusCode_default = HttpStatusCode;

  // ../__options/node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create2(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // ../__options/node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter: getAdapter2,
    mergeConfig: mergeConfig2,
    create
  } = axios_default;

  // src/scrapy-editer-plugin/IMGScrapy.js
  var import_qs = __toESM(require_lib());

  // ../__options/node_modules/wb-theme-base/common/wbui.js
  var doc = document;
  var query = "querySelectorAll";
  var claname = "getElementsByClassName";
  var S = function(s2) {
    return doc[query](s2);
  };
  var lang = {
    ok: "OK",
    cancel: "Cancel"
  };
  var typeClassName = [
    "dialog",
    "toast",
    "loading",
    "iframe"
  ];
  var config = {
    type: 0,
    mask: true,
    maskClose: true,
    closebtn: true,
    whenBtnClickClose: true,
    fixed: true,
    anim: "def"
    //默认动画类型
  };
  var ready = {
    extend: function(obj, cnf) {
      var newobj = typeof cnf === "object" ? JSON.parse(JSON.stringify(cnf)) : JSON.parse(JSON.stringify(config));
      for (var i in obj) {
        newobj[i] = obj[i];
      }
      return newobj;
    },
    timer: {},
    end: {}
  };
  ready.touch = function(elem, fn) {
    elem.addEventListener("click", function(e) {
      fn.call(this, e);
    }, false);
  };
  var index = 0;
  var classs = ["wbui"];
  var WBUI = function(options) {
    var that = this;
    that.config = ready.extend(options);
    that.view();
  };
  WBUI.prototype.view = function() {
    var that = this, config2 = that.config, wbuibox = doc.createElement("div"), content = config2.content, conType = typeof content === "object", customClassName = typeof config2.type === "string" ? config2.type : classs[0] + "-" + typeClassName[config2.type || 0];
    that.id = wbuibox.id = classs[0] + index;
    wbuibox.setAttribute("class", classs[0] + " " + customClassName);
    wbuibox.setAttribute("index", index);
    var title = (function() {
      var titype = typeof config2.title === "object";
      return config2.title ? '<h3 class="wbui-title' + (titype ? " " + config2.title[1] : "") + '">' + (titype ? config2.title[0] : config2.title) + "</h3>" : "";
    })();
    var closebtn = (function() {
      var closetype = typeof config2.closebtn === "object";
      return config2.closebtn ? '<a class="wbui-close' + (closetype ? " " + config2.closetype[1] : "") + '"><i></i></a>' : "";
    })();
    var button = (function() {
      typeof config2.btn === "string" && (config2.btn = [config2.btn]);
      var btns = (config2.btn || []).length, btndom;
      if (btns === 0 || !config2.btn) {
        return "";
      }
      btndom = '<span yes type="1">' + config2.btn[0] + "</span>";
      if (btns === 2) {
        btndom = '<span no type="0">' + config2.btn[1] + "</span>" + btndom;
      }
      return '<div class="wbui-btn">' + btndom + "</div>";
    })();
    if (!config2.fixed) {
      config2.top = config2.hasOwnProperty("top") ? config2.top : 100;
      config2.style = config2.style || "";
      config2.style += " top:" + (doc.body.scrollTop + config2.top) + "px";
    }
    if (config2.type === 2) {
      config2.content = '<i></i><i class="wbui-load"></i><i></i><p>' + (config2.content || "") + "</p>";
    }
    if (config2.type === 3) {
      var content = config2.content = conType ? config2.content : [config2.content || "", "auto"];
      config2.content = '<iframe scrolling="' + (config2.content[1] || "auto") + '" allowtransparency="true" id="' + typeClassName[3] + index + '" name="' + typeClassName[3] + index + `" onload="this.className='';" class="wbui-load" frameborder="0" src="` + config2.content[0] + '"></iframe>';
    }
    if (config2.skin) config2.anim = "fade";
    if (config2.skin === "msg") {
      config2.mask = config2.closebtn = false;
      config2.time = 2;
    }
    wbuibox.innerHTML = (config2.mask ? "<div " + (typeof config2.mask === "string" ? 'style="' + config2.mask + '"' : "") + ' class="wbui-mask"></div>' : "") + '<div class="wbui-main" ' + (!config2.fixed ? 'style="position:static;"' : "") + '><div class="wbui-section"><div class="wbui-child ' + (config2.skin ? "wbui-" + config2.skin + " " : "") + (config2.className ? config2.className : "") + " " + (config2.anim ? "wbui-anim-" + config2.anim : "") + '" ' + (config2.style ? 'style="' + config2.style + '"' : "") + ">" + title + '<div class="wbui-cont">' + config2.content + "</div>" + button + (config2.closebtn ? closebtn : "") + "</div></div></div>";
    if (!config2.type || config2.type === 2) {
      var dialogs = doc[claname](classs[0] + typeClassName[config2.type]), dialen = dialogs.length;
      if (dialen >= 1) {
        wbui.close(dialogs[0].getAttribute("index"));
      }
    }
    document.body.appendChild(wbuibox);
    var elem = that.elem = S("#" + that.id)[0];
    config2.success && config2.success(elem);
    that.index = index++;
    that.action(config2, elem);
  };
  WBUI.prototype.action = function(config2, elem) {
    var that = this;
    if (config2.time) {
      ready.timer[that.index] = setTimeout(function() {
        wbui.close(that.index);
      }, config2.time * 1e3);
    }
    var btn = function() {
      var type = this.getAttribute("type");
      if (type == 0) {
        config2.no && config2.no();
        wbui.close(that.index);
      } else {
        if (config2.yes) config2.yes(that.index);
        config2.whenBtnClickClose && wbui.close(that.index);
      }
    };
    if (config2.btn) {
      var btns = elem[claname]("wbui-btn")[0].children, btnlen = btns.length;
      for (var ii = 0; ii < btnlen; ii++) {
        ready.touch(btns[ii], btn);
      }
    }
    if (config2.mask && config2.maskClose) {
      var mask = elem[claname]("wbui-mask")[0];
      ready.touch(mask, function() {
        wbui.close(that.index, config2.end);
      });
    }
    if (config2.closebtn) {
      var closebtn = elem[claname]("wbui-close")[0];
      ready.touch(closebtn, function() {
        wbui.close(that.index, config2.end);
      });
    }
    config2.end && (ready.end[that.index] = config2.end);
  };
  var wbui = {
    v: "1.0.5",
    index,
    //核心方法
    open: function(options) {
      var o = new WBUI(options || {});
      return o.index;
    },
    //各种快捷引用
    alert: function(content, options) {
      var type = typeof options === "function";
      var opt = ready.extend({
        content,
        btn: lang.ok
      });
      if (type) {
        opt = ready.extend({
          yes: options
        }, opt);
      } else {
        opt = ready.extend(options, opt);
      }
      return wbui.open(opt);
    },
    confirm: function(content, options, yes, no) {
      var type = typeof options === "function";
      var opt = ready.extend({
        content,
        btn: [lang.ok, lang.cancel]
      });
      if (type) {
        opt = ready.extend({
          yes: options,
          no: yes
        }, opt);
      } else {
        opt = ready.extend(options, opt);
      }
      return wbui.open(opt);
    },
    toast: function(content, options) {
      var type = typeof options === "function";
      var opt = ready.extend({
        type: 1,
        content,
        mask: 0,
        closebtn: 0,
        time: 2
      });
      if (type) {
        opt = ready.extend({
          end: options
        }, opt);
      } else {
        opt = ready.extend(options, opt);
      }
      return wbui.open(opt);
    },
    loading: function(options) {
      var type = typeof options === "function";
      var opt = ready.extend({
        type: 2,
        content: 0,
        mask: 0,
        maskClose: 0,
        closebtn: 0
      });
      if (type) {
        opt = ready.extend({
          end: options
        }, opt);
      } else {
        opt = ready.extend(options, opt);
      }
      return wbui.open(opt);
    },
    iframe: function(content, options, yes, no) {
      var type = typeof options === "function";
      var opt = ready.extend({
        type: 3,
        content,
        mask: 0
      });
      if (type) {
        opt = ready.extend({
          yes: options,
          no: yes
        }, opt);
      } else {
        opt = ready.extend(options, opt);
      }
      return wbui.open(opt);
    },
    close: function(index2) {
      var ibox = S("#" + classs[0] + index2)[0];
      if (!ibox) return;
      ibox.innerHTML = "";
      doc.body.removeChild(ibox);
      clearTimeout(ready.timer[index2]);
      delete ready.timer[index2];
      typeof ready.end[index2] === "function" && ready.end[index2]();
      delete ready.end[index2];
    },
    //关闭所有layer层
    closeAll: function() {
      var boxs = doc[claname](classs[0]);
      for (var i = 0, len = boxs.length; i < len; i++) {
        wbui.close(boxs[0].getAttribute("index") | 0);
      }
    }
  };

  // src/scrapy-editer-plugin/IMGScrapy.js
  var IMGScrapy_default = {
    spy_dialog_active: 0,
    get_cont_to: null,
    get_cont_to_2: null,
    post_content: "",
    featured_image_id: 0,
    continue_run: 0,
    scrapy_cnf: {
      thumbnail_id: 0,
      wb_switch: 0,
      proxy_type: 0,
      proxy: "",
      all_done: true
    },
    max_img_idx: 0,
    running: 0,
    req_num: 0,
    is_extension: 0,
    post_param: {},
    extension_param: {},
    img4idx: {},
    next_img_idx: -1,
    placeholder_html: '<div style="position:relative; width:100%; max-width: 800px; height: 300px; background-color: #eee; border-bottom:2px solid #0059b3"><span class="wbspy-placeholder-tip" style="position: absolute; top:50%;left:0;width:100%;text-align: center;line-height: 20px;font-size: 16px;margin-top: -10px;">imgSpider \u91C7\u96C6\u4E2D...</span></div>',
    placeholder_err_html: '<div style="position:relative; width:100%; max-width: 800px; height: 300px; background-color: #eee; border-bottom:2px solid #d33"><span class="wbspy-placeholder-tip" style="position: absolute; top:50%;left:0;width:100%;text-align: center;line-height: 20px;font-size: 16px;margin-top: -10px; color: #d33;">\u91C7\u96C6\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u5904\u7406</span></div>',
    /**
     * 采集弹窗
     */
    go(opt, cb) {
      const vm = this;
      const { editedContent, featuredImage } = opt;
      if (opt.type && opt.type == "ext") {
        const ext_ready = vm.check_ext();
        if (!ext_ready) {
          return false;
        }
      }
      const match_result = vm.match_images(editedContent);
      if (!match_result || match_result[0].length < 1) {
        wbui.toast("\u6CA1\u6709\u627E\u5230\u9700\u8981\u4E0B\u8F7D\u7684\u8FDC\u7A0B\u56FE\u7247");
        return;
      }
      vm.post_content = editedContent;
      vm.img_list = match_result[0];
      vm.img_html = match_result[1];
      vm.img_md5 = match_result[2];
      vm.featured_image_id = featuredImage;
      vm.spy_dialog_active = 1;
      let items_html = "";
      vm.img_list.map((item, i) => {
        items_html += `<li><div class="item-inner">
                                    <input class="wbs-input" type="input" id="scrapy_img_${i}" value="${item}">
                                    <span class="wb-icon def"></span>
                                </div>
                            </li>`;
      });
      const tpl_html = `<div class="scrapy-list-inner">
                            <ul class="item-list">${items_html}</ul>
                            <div class="wbd-ft">
                                <input type="button" class="wb-btn wb-btn-primary button" value="\u5F00\u59CB\u91C7\u96C6" id="start_scrapy">
                            </div>
                        </div>`;
      wbui.open({
        content: tpl_html,
        title: "\u4FDD\u5B58\u7AD9\u5916\u56FE\u7247",
        className: "wbui-imgspy",
        maskClose: false,
        success() {
          document.querySelector("#start_scrapy").onclick = () => {
            vm.pick_handle(opt);
            document.querySelector(".wbui-imgspy .wbd-ft").innerHTML = '<div class="msg">\u91C7\u96C6\u4E2D...</div>';
          };
        },
        end() {
          vm.continue_run = 0;
          vm.active_spy_dialog = 0;
          cb && cb(vm.post_content, vm.featured_image_id);
        }
      });
    },
    /*init (mce, url) {
            const vm = this;
    
            vm.get_cont_to = setTimeout(function () {
                vm.init_ifm(mce);
                clearTimeout(get_cont_to);
            }, 60);
    
    
            /!**
             * 监听粘贴事件
             *!/
            mce.on('paste', function (event) {
                vm.pasteHandle(event, function (results) {
                    console.log('results', results);
                    if(typeof results === "object"){
                        vm.paste_screenshot(mce, results);
                    }else{
    
                        /!**
                         * 自动采集模式下才执行
                         *!/
                        if(imgspy_cnf.mode == 1) return;
    
                        get_cont_to_2 = setTimeout(function () {
                            console.log('imgspy_cnf.mode',imgspy_cnf.mode);
                            const content = vm.getContent();
                            const match_result = vm.match_images(content);
                            if(!match_result || match_result[0].length<1){
                                //wbui.toast('没有找到需要下载的远程图片');
                                return;
                            }
                            vm.post_content = content;
                            vm.img_list = match_result[0]
                            vm.img_html = match_result[1];
                            vm.img_md5 = match_result[2];
    
                            vm.pick_handle(function () {
                                wbui.toast('imgSpider自动采图已启动...')
                            });
    
                            clearTimeout(get_cont_to_2);
    
                        }, 100);
    
                    }
                })
            })
        },*/
    handelMessage(e) {
      const vm = this;
      try {
        if (e.data && e.data.cmd && e.data.image) {
          vm.req_response(e.data);
        } else {
        }
      } catch (e2) {
      }
    },
    handelResult(event) {
      const vm = this;
      try {
        let e = event.detail;
        if (e.data && e.data.cmd && e.data.image) {
          vm.req_response(e.data);
        } else {
        }
      } catch (e) {
      }
    },
    init_ifm() {
      const vm = this;
    },
    /**
     * 检测扩展
     * @returns {boolean}
     * imgspider_ver 相当于is_pro
     */
    check_ext() {
      if (window.imgspider_ver) {
        const is_extension = document.querySelector("#wb-wbsm-btn-spy-ext").getAttribute("chrome-ex");
        if (!is_extension) {
          wbui.confirm("\u672A\u68C0\u6D4B\u5230\u95EA\u7535\u535A\u52A9\u624B\u6269\u5C55\uFF0C\u8BF7\u5B89\u88C5\u6216\u542F\u7528\u3002", {
            btn: ["\u53BB\u4E0B\u8F7D", "\u53D6\u6D88"],
            yes: function() {
              window.open(window.imgspider_pro_url);
            }
          });
          return false;
        }
        return true;
      } else {
        wbui.confirm("\u8BE5\u529F\u80FD\u4E3APro\u7248\u672C\u4E13\u5C5E\u3002", {
          btn: ["\u4E86\u89E3\u8BE6\u60C5", "\u53D6\u6D88"],
          yes: function() {
            window.open(
              window.imgspider_pro_url.replace("extension", "about-pro")
            );
            return false;
          }
        });
        return false;
      }
    },
    /**
     * 自定设置特色图
     * @param featured_image_id
     */
    set_thumbnail(featured_image_id) {
      const vm = this;
      if (!(imgspy_cnf.thumbnail == 1)) {
        return;
      }
      if (vm.featured_image_id > 0) {
        return;
      }
      vm.featured_image_id = featured_image_id;
    },
    /**
     * 提交服务器端采集，并响应结果
     */
    req_remote(img_idx) {
      const vm = this;
      if (!vm.continue_run) {
        return;
      }
      const ipt = document.querySelector("#scrapy_img_" + img_idx);
      ipt.nextElementSibling.setAttribute("class", "wb-icon loading");
      const ajax_parm = JSON.parse(JSON.stringify(vm.post_param));
      ajax_parm.idx = img_idx;
      ajax_parm.image = vm.img_list[img_idx];
      axios_default.post(wb_ajaxurl, import_qs.default.stringify(ajax_parm)).then((response) => {
        const ret = response.data;
        if (ret && ret.length) {
          const ret_obj = ret[0];
          const md5_url = (0, import_md5.default)(ajax_parm.image);
          for (let i = 0; i < vm.img_md5.length; i++) {
            if (md5_url == vm.img_md5[i]) {
              const replace_html = vm.img_html[i].replace(
                /src=[^\s]+/,
                'src="' + ret_obj.url + '"'
              );
              vm.post_content = vm.post_content.replace(
                vm.img_html[i],
                replace_html
              );
              vm.set_thumbnail(ret_obj.id);
            }
          }
          if (vm.spy_dialog_active) {
            ipt.nextElementSibling.setAttribute("class", "wb-icon ok");
            ipt.value = ret_obj.url;
          }
        } else {
          if (vm.spy_dialog_active) {
            ipt.nextElementSibling.setAttribute("class", "wb-icon error");
          } else {
            let err_replace = vm.img_html[img_idx] + vm.placeholder_err_html + '<a style="margin-top:10px;" href="' + vm.img_list[img_idx] + '" target="_blank">' + vm.img_list[img_idx] + "</a>";
            vm.post_content = vm.post_content.replace(
              vm.img_html[img_idx],
              err_replace
            );
          }
          vm.scrapy_cnf.all_done = false;
        }
        vm.req_finnish(1);
      });
      setTimeout(function() {
        vm.send_req();
      }, 100);
    },
    /**
     * 插件采集触发
     * @param img_idx
     */
    ext_req(img_idx) {
      const vm = this;
      const $ext_btn = document.querySelector("#wb-wbsm-btn-spy-ext");
      if (!vm.continue_run) {
        return;
      }
      vm.post_param.idx = img_idx;
      vm.post_param.image = vm.img_list[img_idx];
      vm.post_param.gtb = 1;
      $ext_btn.innerText = JSON.stringify({
        ajaxurl: wb_ajaxurl + (wb_ajaxurl.indexOf("?") > -1 ? "&" : "?") + "_ajax_nonce=" + vm.post_param._ajax_nonce,
        param: vm.post_param
      });
      vm.triggerClick($ext_btn);
      setTimeout(function() {
        vm.send_ext();
      }, 100);
    },
    /**
     * 浏览器插件处理
     */
    send_ext() {
      const vm = this;
      if (!vm.continue_run) {
        return;
      }
      if (vm.img_count < 1) {
        return;
      }
      if (vm.req_num > 4) {
        setTimeout(function() {
          vm.send_ext();
        }, 1250);
        return;
      }
      vm.img_count = vm.img_count - 1;
      vm.next_img_idx = vm.next_img_idx + 1;
      vm.ext_req(vm.next_img_idx);
    },
    /**
     * 处理完成
     * @param i
     */
    req_finnish(i) {
      const vm = this;
      vm.req_count++;
      vm.req_num--;
      if (vm.req_count > vm.max_img_idx) {
        if (!vm.spy_dialog_active) {
          wbui.toast("\u56FE\u7247\u91C7\u96C6\u5B8C\u6210");
          vm.continue_run = 0;
        } else {
          const _msg = vm.scrapy_cnf.all_done ? '<i class="wb-icon done"></i><span>\u606D\u559C\u4F60\uFF0C\u91C7\u96C6\u5B8C\u6210\uFF01</span>' : '<input type="button" class="wb-btn wb-btn-primary button" value="\u5931\u8D25\u91CD\u8BD5" id="retry_scrapy">';
          document.querySelector(".wbui-imgspy .wbd-ft").innerHTML = '<div class="msg">' + _msg + "</div>";
          vm.continue_run = 0;
          const $retryBtn = document.querySelector("#retry_scrapy");
          $retryBtn && $retryBtn.addEventListener("click", () => {
            vm.retry();
          });
        }
      }
    },
    /**
     * 分发处理
     */
    send_req() {
      const vm = this;
      if (!vm.continue_run) {
        return;
      }
      if (vm.img_count < 1) {
        return;
      }
      if (vm.req_num > 4) {
        setTimeout(function() {
          vm.send_req();
        }, 1250);
        return;
      }
      vm.img_count = vm.img_count - 1;
      vm.next_img_idx = vm.next_img_idx + 1;
      vm.req_remote(vm.next_img_idx);
    },
    /**
     * 过滤内容图片url
     * @param content
     * @returns {*[]}
     */
    match_images(content) {
      const filter2 = imgspy_cnf.filter || {};
      let img_ext = [];
      let ext_patten = null;
      if (filter2.type) {
        for (let ext in filter2.type) {
          if (filter2.type[ext] == "1") {
            img_ext.push(ext);
          }
        }
        if (img_ext.length > 0) {
          ext_patten = new RegExp("(." + img_ext.join("|.") + ")");
        }
      }
      let exclude_idx = [];
      if (filter2.except_index && filter2.except_index.length > 0) {
        exclude_idx = filter2.except_index.split(",");
        if (filter2.except_index.indexOf("z") > -1) {
          var img_match = content.match(/<img[^>]+>/gi);
          if (img_match && img_match.length > 0) {
            exclude_idx.push(img_match.length);
          }
        }
      }
      let min_width = 0;
      if (filter2.min_width && /^\d+$/.test(filter2.min_width)) {
        min_width = parseInt(filter2.min_width);
      }
      const patten = new RegExp("<img[^>]+>", "gi");
      const re = /https?:\/\/[^\/]+/g;
      const home_url = window.location.href.match(re)[0];
      let img_list = [];
      let img_html = [];
      let img_md5 = [];
      let idx = 0;
      let match_src = null;
      let img_url = null;
      let result;
      while ((result = patten.exec(content)) != null) {
        try {
          idx++;
          if (exclude_idx.length > 0 && exclude_idx.indexOf(idx) > -1) {
            continue;
          }
          if (/data-src=[^\s]+/.test(result[0])) {
            match_src = result[0].match(/data-src=([^\s]+)/i);
          } else if (/src=[^\s]+/.test(result[0])) {
            match_src = result[0].match(/src=([^\s]+)/i);
          } else {
            continue;
          }
          if (!match_src) {
            continue;
          }
          img_url = match_src[1].replace(/\/?>$/, "").replace(/^["']/, "").replace(/["']$/, "");
          if (!img_url) {
            continue;
          }
          if (img_url.indexOf(home_url) > -1) {
            continue;
          }
          if (!/^https?:\/\//.test(img_url)) {
            continue;
          }
          if (ext_patten && ext_patten.test(img_url)) {
            continue;
          }
          if (filter2.domain && filter2.domain.length > 0) {
            let find_it = false;
            for (let i = 0; i < filter2.domain.length; i++) {
              if (img_url.indexOf(filter2.domain[i]) > -1) {
                find_it = true;
                break;
              }
            }
            if (find_it) {
              continue;
            }
          }
          if (min_width > 0 && /width=[^\s]+/i.test(result[0])) {
            let size = result[0].match(/width=([^\s]+)/i)[1].replace(/("|')/g, "");
            size = parseInt(size);
            if (size < min_width) {
              continue;
            }
          }
          img_url = img_url.replace(/&amp;/g, "&");
          let md5_url = (0, import_md5.default)(img_url);
          if (img_md5.indexOf(md5_url) < 0) {
            img_list.push(img_url);
          }
          img_md5.push(md5_url);
          img_html.push(result[0]);
        } catch (e) {
          console.log(e);
        }
      }
      const skipUrl = (u) => {
        if (!u || !/^https?:\/\//i.test(u)) {
          return true;
        }
        if (u.indexOf(home_url) > -1) {
          return true;
        }
        if (ext_patten && ext_patten.test(u)) {
          return true;
        }
        if (filter2.domain && filter2.domain.length > 0) {
          for (let i = 0; i < filter2.domain.length; i++) {
            if (filter2.domain[i] && u.indexOf(filter2.domain[i]) > -1) {
              return true;
            }
          }
        }
        return false;
      };
      const pushUrl = (u) => {
        u = u.replace(/&amp;/g, "&");
        const md5_url = (0, import_md5.default)(u);
        if (img_md5.indexOf(md5_url) < 0) {
          img_list.push(u);
        }
        img_md5.push(md5_url);
        img_html.push(u);
      };
      const srcsetRe = /(?:srcset|data-srcset)=(['"])([^'"]+)\1/gi;
      let sm;
      while ((sm = srcsetRe.exec(content)) != null) {
        const parts = sm[2].split(",");
        for (let i = 0; i < parts.length; i++) {
          const um = parts[i].trim().match(/https?:\/\/\S+/i);
          if (!um) {
            continue;
          }
          const u = um[0].replace(/,$/, "");
          if (skipUrl(u)) {
            continue;
          }
          pushUrl(u);
        }
      }
      const bgRe = /background-image\s*:\s*url\((["']?)(https?:\/\/[^)'"]+)\1\)/gi;
      let bm;
      while ((bm = bgRe.exec(content)) != null) {
        if (skipUrl(bm[2])) {
          continue;
        }
        pushUrl(bm[2]);
      }
      return [img_list, img_html, img_md5];
    },
    /**
     * 重试模式
     * @return {boolean}
     */
    retry() {
      const vm = this;
      const match_result = vm.match_images(vm.post_content);
      if (!match_result || match_result[0].length < 1) {
        const el = document.querySelector("#retry_scrapy");
        el.parentNode.removeChild(el);
        wbui.toast("\u6CA1\u6709\u627E\u5230\u9700\u8981\u4E0B\u8F7D\u7684\u8FDC\u7A0B\u56FE\u7247");
        return false;
      }
      vm.img_list = match_result[0];
      vm.img_html = match_result[1];
      vm.img_md5 = match_result[2];
      vm.pick_handle();
      document.querySelector(".wbui-imgspy .wbd-ft").innerHTML = '<div class="msg">\u91C7\u96C6\u4E2D...</div>';
      return false;
    },
    /**
     * 浏览器插件处理结果响应
     * @param ret
     */
    req_response(ret) {
      console.log("extension response data ");
      const vm = this;
      let md5_url = "";
      if (ret.image) {
        md5_url = (0, import_md5.default)(ret.image);
      }
      if (!md5_url) {
        console.log("dl fail");
        vm.scrapy_cnf.all_done = false;
        vm.req_finnish(0);
        return;
      }
      if (ret && ret.data && ret.data.length) {
        console.log("dl success");
        const ret_img = ret.data[0].match(/src="([^\s]+)"/);
        const ret_id = ret.data[0].match(/wp-image-([0-9]+)/i);
        for (let i = 0; i < vm.img_md5.length; i++) {
          if (md5_url == vm.img_md5[i]) {
            const replace_html = vm.img_html[i].replace(/src=[^\s]+/, ret_img[0]);
            vm.post_content = vm.post_content.replace(
              vm.img_html[i],
              replace_html
            );
            ret_id[1] && vm.set_thumbnail(ret_id[1]);
            if (vm.spy_dialog_active) {
              const ipt = document.querySelector("#scrapy_img_" + i);
              ipt.nextElementSibling.setAttribute("class", "wb-icon ok");
              ipt.value = ret_img[1];
            }
          }
        }
        vm.req_finnish(1);
      } else {
        for (let img_idx = 0; img_idx < vm.img_md5.length; img_idx++) {
          if (vm.spy_dialog_active) {
            const ipt = document.querySelector("#scrapy_img_" + img_idx);
            ipt.nextElementSibling.setAttribute("class", "wb-icon error");
          } else {
            let err_replace = vm.img_html[img_idx] + vm.placeholder_err_html + '<a style="margin-top:10px;" href="' + vm.img_list[img_idx] + '" target="_blank">' + vm.img_list[img_idx] + "</a>";
            vm.post_content = vm.post_content.replace(
              vm.img_html[img_idx],
              err_replace
            );
          }
        }
        vm.scrapy_cnf.all_done = false;
        vm.req_finnish(0);
      }
    },
    /**
     * 采集方式分配
     * @param opt
     */
    pick_handle(opt) {
      const vm = this;
      let pick_type = 0;
      if (!vm.img_list || vm.img_list.length < 1) {
        return;
      }
      vm.req_count = 0;
      vm.img_count = vm.img_list.length;
      vm.continue_run = 1;
      vm.max_img_idx = vm.img_list.length - 1;
      vm.next_img_idx = -1;
      if (opt) {
        const { postTitle, postId, type } = opt;
        vm.post_param = {
          _ajax_nonce: _wb_imgspider_ajax_nonce || "",
          action: "wb_scrapy_image",
          op: "scrapy",
          title: postTitle,
          post_id: postId,
          gtb: 1,
          idx: 0,
          image: "",
          proxy: ""
        };
        pick_type = type;
      }
      if (typeof pick_type === "object") {
        vm.post_param.proxy = pick_type;
      }
      vm.is_extension = document.querySelector("#wb-wbsm-btn-spy-ext").getAttribute("chrome-ex");
      const is_def_ext = !vm.active_spy_dialog && imgspy_cnf.df_mode == "ext";
      if (window.imgspider_ver && vm.is_extension && (is_def_ext || pick_type === "ext")) {
        vm.send_ext();
        vm.get_cont_to = setTimeout(function() {
          vm.init_ifm();
          clearTimeout(vm.get_cont_to);
        }, 60);
        return;
      }
      vm.send_req();
      return false;
    },
    triggerClick(node) {
      if (document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        node.dispatchEvent(evt);
      } else if (document.createEventObject) {
        node.fireEvent("onclick");
      } else if (typeof node.onclick == "function") {
        node.onclick();
      }
    }
  };

  // src/verify/aes.js
  var CryptoJS = CryptoJS || (function(u, p) {
    var d = {}, l = d.lib = {}, s2 = function() {
    }, t2 = l.Base = { extend: function(a) {
      s2.prototype = this;
      var c = new s2();
      a && c.mixIn(a);
      c.hasOwnProperty("init") || (c.init = function() {
        c.$super.init.apply(this, arguments);
      });
      c.init.prototype = c;
      c.$super = this;
      return c;
    }, create: function() {
      var a = this.extend();
      a.init.apply(a, arguments);
      return a;
    }, init: function() {
    }, mixIn: function(a) {
      for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
      a.hasOwnProperty("toString") && (this.toString = a.toString);
    }, clone: function() {
      return this.init.prototype.extend(this);
    } }, r = l.WordArray = t2.extend({ init: function(a, c) {
      a = this.words = a || [];
      this.sigBytes = c != p ? c : 4 * a.length;
    }, toString: function(a) {
      return (a || v).stringify(this);
    }, concat: function(a) {
      var c = this.words, e = a.words, j = this.sigBytes;
      a = a.sigBytes;
      this.clamp();
      if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
      else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
      else c.push.apply(c, e);
      this.sigBytes += a;
      return this;
    }, clamp: function() {
      var a = this.words, c = this.sigBytes;
      a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
      a.length = u.ceil(c / 4);
    }, clone: function() {
      var a = t2.clone.call(this);
      a.words = this.words.slice(0);
      return a;
    }, random: function(a) {
      for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
      return new r.init(c, a);
    } }), w = d.enc = {}, v = w.Hex = { stringify: function(a) {
      var c = a.words;
      a = a.sigBytes;
      for (var e = [], j = 0; j < a; j++) {
        var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
        e.push((k >>> 4).toString(16));
        e.push((k & 15).toString(16));
      }
      return e.join("");
    }, parse: function(a) {
      for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(
        j,
        2
      ), 16) << 24 - 4 * (j % 8);
      return new r.init(e, c / 2);
    } }, b = w.Latin1 = { stringify: function(a) {
      var c = a.words;
      a = a.sigBytes;
      for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
      return e.join("");
    }, parse: function(a) {
      for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
      return new r.init(e, c);
    } }, x = w.Utf8 = { stringify: function(a) {
      try {
        return decodeURIComponent(escape(b.stringify(a)));
      } catch (c) {
        throw Error("Malformed UTF-8 data");
      }
    }, parse: function(a) {
      return b.parse(unescape(encodeURIComponent(a)));
    } }, q = l.BufferedBlockAlgorithm = t2.extend({ reset: function() {
      this._data = new r.init();
      this._nDataBytes = 0;
    }, _append: function(a) {
      "string" == typeof a && (a = x.parse(a));
      this._data.concat(a);
      this._nDataBytes += a.sigBytes;
    }, _process: function(a) {
      var c = this._data, e = c.words, j = c.sigBytes, k = this.blockSize, b2 = j / (4 * k), b2 = a ? u.ceil(b2) : u.max((b2 | 0) - this._minBufferSize, 0);
      a = b2 * k;
      j = u.min(4 * a, j);
      if (a) {
        for (var q2 = 0; q2 < a; q2 += k) this._doProcessBlock(e, q2);
        q2 = e.splice(0, a);
        c.sigBytes -= j;
      }
      return new r.init(q2, j);
    }, clone: function() {
      var a = t2.clone.call(this);
      a._data = this._data.clone();
      return a;
    }, _minBufferSize: 0 });
    l.Hasher = q.extend({ cfg: t2.extend(), init: function(a) {
      this.cfg = this.cfg.extend(a);
      this.reset();
    }, reset: function() {
      q.reset.call(this);
      this._doReset();
    }, update: function(a) {
      this._append(a);
      this._process();
      return this;
    }, finalize: function(a) {
      a && this._append(a);
      return this._doFinalize();
    }, blockSize: 16, _createHelper: function(a) {
      return function(b2, e) {
        return new a.init(e).finalize(b2);
      };
    }, _createHmacHelper: function(a) {
      return function(b2, e) {
        return new n2.HMAC.init(
          a,
          e
        ).finalize(b2);
      };
    } });
    var n2 = d.algo = {};
    return d;
  })(Math);
  (function() {
    var u = CryptoJS, p = u.lib.WordArray;
    u.enc.Base64 = { stringify: function(d) {
      var l = d.words, p2 = d.sigBytes, t2 = this._map;
      d.clamp();
      d = [];
      for (var r = 0; r < p2; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p2; v++) d.push(t2.charAt(w >>> 6 * (3 - v) & 63));
      if (l = t2.charAt(64)) for (; d.length % 4; ) d.push(l);
      return d.join("");
    }, parse: function(d) {
      var l = d.length, s2 = this._map, t2 = s2.charAt(64);
      t2 && (t2 = d.indexOf(t2), -1 != t2 && (l = t2));
      for (var t2 = [], r = 0, w = 0; w < l; w++) if (w % 4) {
        var v = s2.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s2.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
        t2[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
        r++;
      }
      return p.create(t2, r);
    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
  })();
  (function(u) {
    function p(b2, n2, a, c, e, j, k) {
      b2 = b2 + (n2 & a | ~n2 & c) + e + k;
      return (b2 << j | b2 >>> 32 - j) + n2;
    }
    function d(b2, n2, a, c, e, j, k) {
      b2 = b2 + (n2 & c | a & ~c) + e + k;
      return (b2 << j | b2 >>> 32 - j) + n2;
    }
    function l(b2, n2, a, c, e, j, k) {
      b2 = b2 + (n2 ^ a ^ c) + e + k;
      return (b2 << j | b2 >>> 32 - j) + n2;
    }
    function s2(b2, n2, a, c, e, j, k) {
      b2 = b2 + (a ^ (n2 | ~c)) + e + k;
      return (b2 << j | b2 >>> 32 - j) + n2;
    }
    for (var t2 = CryptoJS, r = t2.lib, w = r.WordArray, v = r.Hasher, r = t2.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
      _doReset: function() {
        this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]);
      },
      _doProcessBlock: function(q, n2) {
        for (var a = 0; 16 > a; a++) {
          var c = n2 + a, e = q[c];
          q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
        }
        var a = this._hash.words, c = q[n2 + 0], e = q[n2 + 1], j = q[n2 + 2], k = q[n2 + 3], z = q[n2 + 4], r2 = q[n2 + 5], t3 = q[n2 + 6], w2 = q[n2 + 7], v2 = q[n2 + 8], A = q[n2 + 9], B = q[n2 + 10], C = q[n2 + 11], u2 = q[n2 + 12], D = q[n2 + 13], E = q[n2 + 14], x2 = q[n2 + 15], f = a[0], m = a[1], g = a[2], h = a[3], f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]), m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r2, 12, b[5]), g = p(g, h, f, m, t3, 17, b[6]), m = p(m, g, h, f, w2, 22, b[7]), f = p(f, m, g, h, v2, 7, b[8]), h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]), f = p(f, m, g, h, u2, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]), m = p(m, g, h, f, x2, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t3, 9, b[17]), g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r2, 5, b[20]), h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x2, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]), f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]), m = d(m, g, h, f, v2, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(
          h,
          f,
          m,
          g,
          j,
          9,
          b[29]
        ), g = d(g, h, f, m, w2, 14, b[30]), m = d(m, g, h, f, u2, 20, b[31]), f = l(f, m, g, h, r2, 4, b[32]), h = l(h, f, m, g, v2, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]), f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w2, 16, b[38]), m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]), g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t3, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]), h = l(h, f, m, g, u2, 11, b[45]), g = l(g, h, f, m, x2, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]), f = s2(f, m, g, h, c, 6, b[48]), h = s2(h, f, m, g, w2, 10, b[49]), g = s2(
          g,
          h,
          f,
          m,
          E,
          15,
          b[50]
        ), m = s2(m, g, h, f, r2, 21, b[51]), f = s2(f, m, g, h, u2, 6, b[52]), h = s2(h, f, m, g, k, 10, b[53]), g = s2(g, h, f, m, B, 15, b[54]), m = s2(m, g, h, f, e, 21, b[55]), f = s2(f, m, g, h, v2, 6, b[56]), h = s2(h, f, m, g, x2, 10, b[57]), g = s2(g, h, f, m, t3, 15, b[58]), m = s2(m, g, h, f, D, 21, b[59]), f = s2(f, m, g, h, z, 6, b[60]), h = s2(h, f, m, g, C, 10, b[61]), g = s2(g, h, f, m, j, 15, b[62]), m = s2(m, g, h, f, A, 21, b[63]);
        a[0] = a[0] + f | 0;
        a[1] = a[1] + m | 0;
        a[2] = a[2] + g | 0;
        a[3] = a[3] + h | 0;
      },
      _doFinalize: function() {
        var b2 = this._data, n2 = b2.words, a = 8 * this._nDataBytes, c = 8 * b2.sigBytes;
        n2[c >>> 5] |= 128 << 24 - c % 32;
        var e = u.floor(a / 4294967296);
        n2[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
        n2[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
        b2.sigBytes = 4 * (n2.length + 1);
        this._process();
        b2 = this._hash;
        n2 = b2.words;
        for (a = 0; 4 > a; a++) c = n2[a], n2[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
        return b2;
      },
      clone: function() {
        var b2 = v.clone.call(this);
        b2._hash = this._hash.clone();
        return b2;
      }
    });
    t2.MD5 = v._createHelper(r);
    t2.HmacMD5 = v._createHmacHelper(r);
  })(Math);
  (function() {
    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s2 = p.EvpKDF = d.extend({ cfg: d.extend({ keySize: 4, hasher: p.MD5, iterations: 1 }), init: function(d2) {
      this.cfg = this.cfg.extend(d2);
    }, compute: function(d2, r) {
      for (var p2 = this.cfg, s3 = p2.hasher.create(), b = l.create(), u2 = b.words, q = p2.keySize, p2 = p2.iterations; u2.length < q; ) {
        n2 && s3.update(n2);
        var n2 = s3.update(d2).finalize(r);
        s3.reset();
        for (var a = 1; a < p2; a++) n2 = s3.finalize(n2), s3.reset();
        b.concat(n2);
      }
      b.sigBytes = 4 * q;
      return b;
    } });
    u.EvpKDF = function(d2, l2, p2) {
      return s2.create(p2).compute(
        d2,
        l2
      );
    };
  })();
  CryptoJS.lib.Cipher || (function(u) {
    var p = CryptoJS, d = p.lib, l = d.Base, s2 = d.WordArray, t2 = d.BufferedBlockAlgorithm, r = p.enc.Base64, w = p.algo.EvpKDF, v = d.Cipher = t2.extend({
      cfg: l.extend(),
      createEncryptor: function(e, a2) {
        return this.create(this._ENC_XFORM_MODE, e, a2);
      },
      createDecryptor: function(e, a2) {
        return this.create(this._DEC_XFORM_MODE, e, a2);
      },
      init: function(e, a2, b2) {
        this.cfg = this.cfg.extend(b2);
        this._xformMode = e;
        this._key = a2;
        this.reset();
      },
      reset: function() {
        t2.reset.call(this);
        this._doReset();
      },
      process: function(e) {
        this._append(e);
        return this._process();
      },
      finalize: function(e) {
        e && this._append(e);
        return this._doFinalize();
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: function(e) {
        return { encrypt: function(b2, k, d2) {
          return ("string" == typeof k ? c : a).encrypt(e, b2, k, d2);
        }, decrypt: function(b2, k, d2) {
          return ("string" == typeof k ? c : a).decrypt(e, b2, k, d2);
        } };
      }
    });
    d.StreamCipher = v.extend({ _doFinalize: function() {
      return this._process(true);
    }, blockSize: 1 });
    var b = p.mode = {}, x = function(e, a2, b2) {
      var c2 = this._iv;
      c2 ? this._iv = u : c2 = this._prevBlock;
      for (var d2 = 0; d2 < b2; d2++) e[a2 + d2] ^= c2[d2];
    }, q = (d.BlockCipherMode = l.extend({ createEncryptor: function(e, a2) {
      return this.Encryptor.create(e, a2);
    }, createDecryptor: function(e, a2) {
      return this.Decryptor.create(e, a2);
    }, init: function(e, a2) {
      this._cipher = e;
      this._iv = a2;
    } })).extend();
    q.Encryptor = q.extend({ processBlock: function(e, a2) {
      var b2 = this._cipher, c2 = b2.blockSize;
      x.call(this, e, a2, c2);
      b2.encryptBlock(e, a2);
      this._prevBlock = e.slice(a2, a2 + c2);
    } });
    q.Decryptor = q.extend({ processBlock: function(e, a2) {
      var b2 = this._cipher, c2 = b2.blockSize, d2 = e.slice(a2, a2 + c2);
      b2.decryptBlock(e, a2);
      x.call(
        this,
        e,
        a2,
        c2
      );
      this._prevBlock = d2;
    } });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = { pad: function(a2, b2) {
      for (var c2 = 4 * b2, c2 = c2 - a2.sigBytes % c2, d2 = c2 << 24 | c2 << 16 | c2 << 8 | c2, l2 = [], n3 = 0; n3 < c2; n3 += 4) l2.push(d2);
      c2 = s2.create(l2, c2);
      a2.concat(c2);
    }, unpad: function(a2) {
      a2.sigBytes -= a2.words[a2.sigBytes - 1 >>> 2] & 255;
    } };
    d.BlockCipher = v.extend({ cfg: v.cfg.extend({ mode: b, padding: q }), reset: function() {
      v.reset.call(this);
      var a2 = this.cfg, b2 = a2.iv, a2 = a2.mode;
      if (this._xformMode == this._ENC_XFORM_MODE) var c2 = a2.createEncryptor;
      else c2 = a2.createDecryptor, this._minBufferSize = 1;
      this._mode = c2.call(
        a2,
        this,
        b2 && b2.words
      );
    }, _doProcessBlock: function(a2, b2) {
      this._mode.processBlock(a2, b2);
    }, _doFinalize: function() {
      var a2 = this.cfg.padding;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        a2.pad(this._data, this.blockSize);
        var b2 = this._process(true);
      } else b2 = this._process(true), a2.unpad(b2);
      return b2;
    }, blockSize: 4 });
    var n2 = d.CipherParams = l.extend({ init: function(a2) {
      this.mixIn(a2);
    }, toString: function(a2) {
      return (a2 || this.formatter).stringify(this);
    } }), b = (p.format = {}).OpenSSL = { stringify: function(a2) {
      var b2 = a2.ciphertext;
      a2 = a2.salt;
      return (a2 ? s2.create([
        1398893684,
        1701076831
      ]).concat(a2).concat(b2) : b2).toString(r);
    }, parse: function(a2) {
      a2 = r.parse(a2);
      var b2 = a2.words;
      if (1398893684 == b2[0] && 1701076831 == b2[1]) {
        var c2 = s2.create(b2.slice(2, 4));
        b2.splice(0, 4);
        a2.sigBytes -= 16;
      }
      return n2.create({ ciphertext: a2, salt: c2 });
    } }, a = d.SerializableCipher = l.extend({
      cfg: l.extend({ format: b }),
      encrypt: function(a2, b2, c2, d2) {
        d2 = this.cfg.extend(d2);
        var l2 = a2.createEncryptor(c2, d2);
        b2 = l2.finalize(b2);
        l2 = l2.cfg;
        return n2.create({ ciphertext: b2, key: c2, iv: l2.iv, algorithm: a2, mode: l2.mode, padding: l2.padding, blockSize: a2.blockSize, formatter: d2.format });
      },
      decrypt: function(a2, b2, c2, d2) {
        d2 = this.cfg.extend(d2);
        b2 = this._parse(b2, d2.format);
        return a2.createDecryptor(c2, d2).finalize(b2.ciphertext);
      },
      _parse: function(a2, b2) {
        return "string" == typeof a2 ? b2.parse(a2, this) : a2;
      }
    }), p = (p.kdf = {}).OpenSSL = { execute: function(a2, b2, c2, d2) {
      d2 || (d2 = s2.random(8));
      a2 = w.create({ keySize: b2 + c2 }).compute(a2, d2);
      c2 = s2.create(a2.words.slice(b2), 4 * c2);
      a2.sigBytes = 4 * b2;
      return n2.create({ key: a2, iv: c2, salt: d2 });
    } }, c = d.PasswordBasedCipher = a.extend({ cfg: a.cfg.extend({ kdf: p }), encrypt: function(b2, c2, d2, l2) {
      l2 = this.cfg.extend(l2);
      d2 = l2.kdf.execute(
        d2,
        b2.keySize,
        b2.ivSize
      );
      l2.iv = d2.iv;
      b2 = a.encrypt.call(this, b2, c2, d2.key, l2);
      b2.mixIn(d2);
      return b2;
    }, decrypt: function(b2, c2, d2, l2) {
      l2 = this.cfg.extend(l2);
      c2 = this._parse(c2, l2.format);
      d2 = l2.kdf.execute(d2, b2.keySize, b2.ivSize, c2.salt);
      l2.iv = d2.iv;
      return a.decrypt.call(this, b2, c2, d2.key, l2);
    } });
  })();
  (function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s2 = [], t2 = [], r = [], w = [], v = [], b = [], x = [], q = [], n2 = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
      var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
      l[e] = k;
      s2[k] = e;
      var z = a[e], F = a[z], G2 = a[F], y = 257 * a[k] ^ 16843008 * k;
      t2[e] = y << 24 | y >>> 8;
      r[e] = y << 16 | y >>> 16;
      w[e] = y << 8 | y >>> 24;
      v[e] = y;
      y = 16843009 * G2 ^ 65537 * F ^ 257 * z ^ 16843008 * e;
      b[k] = y << 24 | y >>> 8;
      x[k] = y << 16 | y >>> 16;
      q[k] = y << 8 | y >>> 24;
      n2[k] = y;
      e ? (e = z ^ a[a[a[G2 ^ z]]], j ^= a[a[j]]) : e = j = 1;
    }
    var H = [
      0,
      1,
      2,
      4,
      8,
      16,
      32,
      64,
      128,
      27,
      54
    ], d = d.AES = p.extend({ _doReset: function() {
      for (var a2 = this._key, c2 = a2.words, d2 = a2.sigBytes / 4, a2 = 4 * ((this._nRounds = d2 + 6) + 1), e2 = this._keySchedule = [], j2 = 0; j2 < a2; j2++) if (j2 < d2) e2[j2] = c2[j2];
      else {
        var k2 = e2[j2 - 1];
        j2 % d2 ? 6 < d2 && 4 == j2 % d2 && (k2 = l[k2 >>> 24] << 24 | l[k2 >>> 16 & 255] << 16 | l[k2 >>> 8 & 255] << 8 | l[k2 & 255]) : (k2 = k2 << 8 | k2 >>> 24, k2 = l[k2 >>> 24] << 24 | l[k2 >>> 16 & 255] << 16 | l[k2 >>> 8 & 255] << 8 | l[k2 & 255], k2 ^= H[j2 / d2 | 0] << 24);
        e2[j2] = e2[j2 - d2] ^ k2;
      }
      c2 = this._invKeySchedule = [];
      for (d2 = 0; d2 < a2; d2++) j2 = a2 - d2, k2 = d2 % 4 ? e2[j2] : e2[j2 - 4], c2[d2] = 4 > d2 || 4 >= j2 ? k2 : b[l[k2 >>> 24]] ^ x[l[k2 >>> 16 & 255]] ^ q[l[k2 >>> 8 & 255]] ^ n2[l[k2 & 255]];
    }, encryptBlock: function(a2, b2) {
      this._doCryptBlock(a2, b2, this._keySchedule, t2, r, w, v, l);
    }, decryptBlock: function(a2, c2) {
      var d2 = a2[c2 + 1];
      a2[c2 + 1] = a2[c2 + 3];
      a2[c2 + 3] = d2;
      this._doCryptBlock(a2, c2, this._invKeySchedule, b, x, q, n2, s2);
      d2 = a2[c2 + 1];
      a2[c2 + 1] = a2[c2 + 3];
      a2[c2 + 3] = d2;
    }, _doCryptBlock: function(a2, b2, c2, d2, e2, j2, l2, f) {
      for (var m = this._nRounds, g = a2[b2] ^ c2[0], h = a2[b2 + 1] ^ c2[1], k2 = a2[b2 + 2] ^ c2[2], n3 = a2[b2 + 3] ^ c2[3], p2 = 4, r2 = 1; r2 < m; r2++) var q2 = d2[g >>> 24] ^ e2[h >>> 16 & 255] ^ j2[k2 >>> 8 & 255] ^ l2[n3 & 255] ^ c2[p2++], s3 = d2[h >>> 24] ^ e2[k2 >>> 16 & 255] ^ j2[n3 >>> 8 & 255] ^ l2[g & 255] ^ c2[p2++], t3 = d2[k2 >>> 24] ^ e2[n3 >>> 16 & 255] ^ j2[g >>> 8 & 255] ^ l2[h & 255] ^ c2[p2++], n3 = d2[n3 >>> 24] ^ e2[g >>> 16 & 255] ^ j2[h >>> 8 & 255] ^ l2[k2 & 255] ^ c2[p2++], g = q2, h = s3, k2 = t3;
      q2 = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k2 >>> 8 & 255] << 8 | f[n3 & 255]) ^ c2[p2++];
      s3 = (f[h >>> 24] << 24 | f[k2 >>> 16 & 255] << 16 | f[n3 >>> 8 & 255] << 8 | f[g & 255]) ^ c2[p2++];
      t3 = (f[k2 >>> 24] << 24 | f[n3 >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c2[p2++];
      n3 = (f[n3 >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k2 & 255]) ^ c2[p2++];
      a2[b2] = q2;
      a2[b2 + 1] = s3;
      a2[b2 + 2] = t3;
      a2[b2 + 3] = n3;
    }, keySize: 8 });
    u.AES = p._createHelper(d);
  })();
  (function() {
    var h = CryptoJS, j = h.lib.WordArray;
    h.enc.Base64 = { stringify: function(b) {
      var e = b.words, f = b.sigBytes, c = this._map;
      b.clamp();
      b = [];
      for (var a = 0; a < f; a += 3) for (var d = (e[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | e[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, g = 0; 4 > g && a + 0.75 * g < f; g++) b.push(c.charAt(d >>> 6 * (3 - g) & 63));
      if (e = c.charAt(64)) for (; b.length % 4; ) b.push(e);
      return b.join("");
    }, parse: function(b) {
      var e = b.length, f = this._map, c = f.charAt(64);
      c && (c = b.indexOf(c), -1 != c && (e = c));
      for (var c = [], a = 0, d = 0; d < e; d++) if (d % 4) {
        var g = f.indexOf(b.charAt(d - 1)) << 2 * (d % 4), h2 = f.indexOf(b.charAt(d)) >>> 6 - 2 * (d % 4);
        c[a >>> 2] |= (g | h2) << 24 - 8 * (a % 4);
        a++;
      }
      return j.create(c, a);
    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
  })();

  // src/verify/verify.js
  var s = CryptoJS;
  var t = {
    stringify: function(e) {
      var t2 = {
        ct: e.ciphertext.toString(s.enc.Base64)
      };
      return e.iv && (t2.iv = e.iv.toString()), e.salt && (t2.s = e.salt.toString()), JSON.stringify(t2).replace(/\s/g, "");
    },
    parse: function(e) {
      var t2 = JSON.parse(e), n2 = s.lib.CipherParams.create({
        ciphertext: s.enc.Base64.parse(t2.ct)
      });
      return t2.iv && (n2.iv = s.enc.Hex.parse(t2.iv)), t2.s && (n2.salt = s.enc.Hex.parse(t2.s)), n2;
    }
  };
  var n = function(e) {
    var run = 0;
    try {
      var b = "", i = ["Qn5Hla2", "split", "baseURL", "substr", "btoa", "$21iztb", "length", "enc", '{"ct":"', '","iv":"', '","s":"', '"}', "decrypt", "AES", "parse", "main", "do"], p = e[i[1]](i[0]), f = window.location.href.toString().replace(/^(.*\/\/[^\/?#]*).*$/, "$1").replace(/^(http:\/\/|https:\/\/|\/\/)/i, ""), d = window[i[4]](f), v = p[0][i[1]](i[5]), h = v[1], m = p[1][i[3]](-6, 6), y = p[2][i[3]](-20, 20), g = window[i[4]](m + y + h)[i[3]](2, 10);
      p[0] = v[0], p[1] = p[1][i[3]](0, p[1][i[6]] - 6), p[2] = p[2][i[3]](0, p[2][i[6]] - 20);
      var _ = s[i[13]][i[12]](i[8] + p[1] + i[9] + p[2] + i[10] + p[0] + i[11], d + g, {
        format: t
      }).toString(s[i[7]].Utf8);
      if (_.length > 0) b = JSON[i[14]](JSON[i[14]](_));
      if (b && b[i[16] + i[15]] == f) {
        run = 1;
        if (b.extension) {
          b.extension = b.extension + "?host=" + f;
          if (b.wb_ver && b.wb_ver.ver) {
            b.extension = b.extension + "&ver=" + b.wb_ver.ver;
          }
        }
        window.imgspider = b;
      }
    } catch (e2) {
      console.log(e2);
    }
    wb_imgspider(run);
  };
  var nn = function() {
    wb_imgspider(0);
  };
  var wb_imgspider = function(v) {
    if (!v) {
      window.imgspider_ver = v;
    }
  };
  function verify() {
    const r = ajaxurl;
    let a = ["_decode", ""];
    window[a[0]] = a[1];
    var s2 = ["o", "then", "post", "image", "replace", "_", "id", "attr", "json", "ajax", "-panel", "wb_scrapy", "_nonce", "options"];
    axios_default({
      method: s2[2],
      url: r,
      data: "op=" + s2[13] + "&_ajax_nonce=" + _wb_imgspider_ajax_nonce + "&action=" + (s2[11] + s2[10])[s2[4]](/-/i, s2[5])[s2[4]](/panel/i, s2[3]),
      dataType: s2[8]
    })[s2[1]](function(response) {
      const res = response["data"];
      if (res[s2[0]]) {
        n(res[s2[0]]);
      } else {
        nn();
      }
    });
  }

  // src/scrapy-editer-plugin/index.js
  function IMGSPYBlock({
    editedContent,
    onUpdateContent,
    postTitle,
    postId,
    postType
  }) {
    const imgspyCnf = window.imgspy_cnf || {};
    const proxyItems = imgspyCnf.proxy_manual || [];
    const [featuredImage, setFeaturedImage] = (0, import_core_data.useEntityProp)(
      "postType",
      postType,
      "featured_media",
      postId
    );
    const replaceImageLink = (content) => {
      try {
        if (!imgspyCnf.del_src_url) {
          return content;
        }
        let patten = new RegExp("(<a[^>]+>)\\s*(<img[^>]+>)\\s*</a>", "gi");
        let result, a_href;
        let match_href = null;
        let is_update = 0;
        while ((result = patten.exec(content)) != null) {
          match_href = null;
          if (/href=[^\s]+/.test(result[1])) {
            match_href = result[1].match(/href=([^\s]+)/i);
          } else {
            continue;
          }
          if (!match_href) {
            continue;
          }
          content = content.replace(result[0], result[2]);
        }
      } catch (e) {
      }
      return content;
    };
    const activeSpyDialog = (type) => {
      const spyOpt = {
        editedContent,
        postTitle,
        postId,
        featuredImage
      };
      spyOpt.type = type;
      IMGScrapy_default.go(spyOpt, (newContent, featuredImageID) => {
        newContent = replaceImageLink(newContent);
        onUpdateContent(newContent);
        if (imgspyCnf.thumbnail == 1 && featuredImageID) {
          setFeaturedImage(featuredImageID);
        }
      });
    };
    const extBtn = document.querySelector("#wb-wbsm-btn-spy-ext");
    if (extBtn) {
      if (!extBtn.getAttribute("evi")) {
        extBtn.addEventListener("WBExtImgResult", (e) => {
          IMGScrapy_default.handelResult(e);
        });
        extBtn.setAttribute("evi", "1");
        window.addEventListener(
          "message",
          (e) => {
            IMGScrapy_default.handelMessage(e);
          },
          false
        );
        verify();
      }
    }
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "wb-spyimg-item" }, /* @__PURE__ */ wp.element.createElement(import_components.Button, { size: "small", variant: "secondary", onClick: () => activeSpyDialog() }, "\u670D\u52A1\u5668\u91C7\u96C6")), /* @__PURE__ */ wp.element.createElement("div", { className: "wb-spyimg-item" }, /* @__PURE__ */ wp.element.createElement(import_components.Button, { size: "small", variant: "secondary", onClick: () => activeSpyDialog("ext") }, "\u6D4F\u89C8\u5668\u91C7\u96C6 ", /* @__PURE__ */ wp.element.createElement("span", { className: "tag-pro" }, "Pro"))), proxyItems.map((item, index2) => {
      return /* @__PURE__ */ wp.element.createElement("div", { className: "wb-spyimg-item", key: "item" + index2 }, /* @__PURE__ */ wp.element.createElement(import_components.Button, { size: "small", variant: "secondary", onClick: () => activeSpyDialog(item) }, "\u4EE3\u7406[", item.name, "]\u91C7\u96C6"));
    }));
  }
  var scrapy_editer_plugin_default = (0, import_compose.compose)([
    (0, import_data4.withSelect)((select) => {
      const { getCurrentPost } = select("core/editor");
      return {
        blocks: select("core/block-editor").getBlocks(),
        editedContent: select("core/editor").getEditedPostContent(),
        postTitle: (0, import_lodash.get)(getCurrentPost(), "title"),
        postId: (0, import_lodash.get)(getCurrentPost(), "id"),
        postType: (0, import_lodash.get)(getCurrentPost(), "type")
      };
    }),
    (0, import_data4.withDispatch)((dispatch) => {
      return {
        onUpdateContent(editedContent) {
          dispatch("core/editor").resetBlocks(wp.blocks.parse(editedContent));
        }
      };
    })
  ])(IMGSPYBlock);

  // src/wb_block.js
  var PluginDocumentSettingPanel = window.wp && window.wp.editor && window.wp.editor.PluginDocumentSettingPanel || window.wp && window.wp.editPost && window.wp.editPost.PluginDocumentSettingPanel;
  var Component = function() {
    if (!PluginDocumentSettingPanel) {
      return null;
    }
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
      PluginDocumentSettingPanel,
      {
        name: "wb-sidebar-panel",
        title: "IMGspider",
        className: "wb-sidebar-panel"
      },
      /* @__PURE__ */ wp.element.createElement(scrapy_editer_plugin_default, null)
    ));
  };
  (0, import_plugins.registerPlugin)("wb-plugin-imgscrapy", {
    icon: icons_default.wbolt,
    render: Component
  });
})();
/*! Bundled license information:

wb-theme-base/common/wbui.js:
  (*!
  WBUI 1.0.5, basic layer mobile v2.0
  *)
*/
