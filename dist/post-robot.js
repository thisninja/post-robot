!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("postRobot", [], factory) : "object" == typeof exports ? exports.postRobot = factory() : root.postRobot = factory();
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    }({
        "./node_modules/belter/src/css.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
        },
        "./node_modules/belter/src/decorators.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/belter/src/util.js");
        },
        "./node_modules/belter/src/device.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_exports__.a = function() {
                return !!(window.navigator.mockUserAgent || window.navigator.userAgent).match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i);
            };
        },
        "./node_modules/belter/src/dom.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/zalgo-promise/src/index.js"), __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), 
            __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js");
            var util = __webpack_require__("./node_modules/belter/src/util.js");
            __webpack_require__("./node_modules/belter/src/device.js");
            __webpack_exports__.b = function isLocalStorageEnabled() {
                return Object(util.e)(isLocalStorageEnabled, function() {
                    try {
                        if ("undefined" == typeof window) return !1;
                        if (window.localStorage) {
                            var value = Math.random().toString();
                            window.localStorage.setItem("__test__localStorage__", value);
                            var result = window.localStorage.getItem("__test__localStorage__");
                            window.localStorage.removeItem("__test__localStorage__");
                            if (value === result) return !0;
                        }
                    } catch (err) {}
                    return !1;
                });
            };
            __webpack_exports__.a = function(obj, event, handler) {
                obj.addEventListener(event, handler);
                return {
                    cancel: function() {
                        obj.removeEventListener(event, handler);
                    }
                };
            };
            "function" == typeof Symbol && Symbol.iterator, Object.assign;
            Object.create(Error.prototype);
        },
        "./node_modules/belter/src/experiment.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/belter/src/util.js"), __webpack_require__("./node_modules/belter/src/storage.js");
        },
        "./node_modules/belter/src/global.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/belter/src/util.js");
        },
        "./node_modules/belter/src/http.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/zalgo-promise/src/index.js"), __webpack_require__("./node_modules/cross-domain-utils/src/index.js");
        },
        "./node_modules/belter/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/belter/src/device.js");
            var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__("./node_modules/belter/src/dom.js");
            __webpack_require__.d(__webpack_exports__, "addEventListener", function() {
                return __WEBPACK_IMPORTED_MODULE_1__dom__.a;
            });
            __webpack_require__("./node_modules/belter/src/experiment.js"), __webpack_require__("./node_modules/belter/src/global.js"), 
            __webpack_require__("./node_modules/belter/src/storage.js");
            var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__("./node_modules/belter/src/util.js");
            __webpack_require__.d(__webpack_exports__, "isRegex", function() {
                return __WEBPACK_IMPORTED_MODULE_5__util__.f;
            });
            __webpack_require__.d(__webpack_exports__, "noop", function() {
                return __WEBPACK_IMPORTED_MODULE_5__util__.h;
            });
            __webpack_require__.d(__webpack_exports__, "once", function() {
                return __WEBPACK_IMPORTED_MODULE_5__util__.i;
            });
            __webpack_require__.d(__webpack_exports__, "replaceObject", function() {
                return __WEBPACK_IMPORTED_MODULE_5__util__.k;
            });
            __webpack_require__.d(__webpack_exports__, "safeInterval", function() {
                return __WEBPACK_IMPORTED_MODULE_5__util__.l;
            });
            __webpack_require__.d(__webpack_exports__, "stringifyError", function() {
                return __WEBPACK_IMPORTED_MODULE_5__util__.n;
            });
            __webpack_require__.d(__webpack_exports__, "uniqueID", function() {
                return __WEBPACK_IMPORTED_MODULE_5__util__.o;
            });
            __webpack_require__("./node_modules/belter/src/http.js");
            var __WEBPACK_IMPORTED_MODULE_7__types__ = __webpack_require__("./node_modules/belter/src/types.js");
            __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__types__), __webpack_require__("./node_modules/belter/src/decorators.js"), 
            __webpack_require__("./node_modules/belter/src/css.js");
        },
        "./node_modules/belter/src/storage.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_exports__.a = function getStorage(_ref) {
                var name = _ref.name, _ref$version = _ref.version, version = void 0 === _ref$version ? "latest" : _ref$version, _ref$lifetime = _ref.lifetime, lifetime = void 0 === _ref$lifetime ? 3e5 : _ref$lifetime;
                return Object(__WEBPACK_IMPORTED_MODULE_0__util__.e)(getStorage, function() {
                    var STORAGE_KEY = "__" + name + "_" + version + "_storage__", accessedStorage = void 0;
                    function getState(handler) {
                        var localStorageEnabled = Object(__WEBPACK_IMPORTED_MODULE_1__dom__.b)(), storage = void 0;
                        accessedStorage && (storage = accessedStorage);
                        if (!storage && localStorageEnabled) {
                            var rawStorage = window.localStorage.getItem(STORAGE_KEY);
                            rawStorage && (storage = JSON.parse(rawStorage));
                        }
                        storage || (storage = Object(__WEBPACK_IMPORTED_MODULE_0__util__.d)()[STORAGE_KEY]);
                        storage || (storage = {
                            id: Object(__WEBPACK_IMPORTED_MODULE_0__util__.o)()
                        });
                        storage.id || (storage.id = Object(__WEBPACK_IMPORTED_MODULE_0__util__.o)());
                        accessedStorage = storage;
                        var result = handler(storage);
                        localStorageEnabled ? window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage)) : Object(__WEBPACK_IMPORTED_MODULE_0__util__.d)()[STORAGE_KEY] = storage;
                        accessedStorage = null;
                        return result;
                    }
                    function getSession(handler) {
                        return getState(function(storage) {
                            var session = storage.__session__, now = Date.now();
                            session && now - session.created > lifetime && (session = null);
                            session || (session = {
                                guid: Object(__WEBPACK_IMPORTED_MODULE_0__util__.o)(),
                                created: now
                            });
                            storage.__session__ = session;
                            return handler(session);
                        });
                    }
                    return {
                        getState: getState,
                        getID: function() {
                            return getState(function(storage) {
                                return storage.id;
                            });
                        },
                        getSessionState: function(handler) {
                            return getSession(function(session) {
                                session.state = session.state || {};
                                return handler(session.state);
                            });
                        },
                        getSessionID: function() {
                            return getSession(function(session) {
                                return session.guid;
                            });
                        }
                    };
                }, [ {
                    name: name,
                    version: version,
                    lifetime: lifetime
                } ]);
            };
            var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("./node_modules/belter/src/util.js"), __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__("./node_modules/belter/src/dom.js");
        },
        "./node_modules/belter/src/types.js": function(module, exports) {},
        "./node_modules/belter/src/util.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_exports__.o = uniqueID;
            __webpack_exports__.d = function() {
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw new Error("No global found");
            };
            __webpack_exports__.g = function(method) {
                var _this = this, options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, cacheMap = new __WEBPACK_IMPORTED_MODULE_1_cross_domain_safe_weakmap_src__.a();
                function memoizedFunction() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    var cache = cacheMap.getOrSet(options.thisNamespace ? this : method, function() {
                        return {};
                    }), key = serializeArgs(args), cacheTime = options.time;
                    cache[key] && cacheTime && Date.now() - cache[key].time < cacheTime && delete cache[key];
                    if (cache[key]) return cache[key].value;
                    memoizedFunction.__calling__ = !0;
                    var time = Date.now(), value = method.apply(this, arguments);
                    memoizedFunction.__calling__ = !1;
                    cache[key] = {
                        time: time,
                        value: value
                    };
                    return cache[key].value;
                }
                memoizedFunction.reset = function() {
                    cacheMap.delete(options.thisNamespace ? _this : method);
                };
                options.name && (memoizedFunction.displayName = options.name + ":memoized");
                return memoizedFunction;
            };
            __webpack_exports__.j = function(method) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                function promisifiedFunction() {
                    return __WEBPACK_IMPORTED_MODULE_0_zalgo_promise_src__.a.try(method, this, arguments);
                }
                options.name && (promisifiedFunction.displayName = options.name + ":promisified");
                return promisifiedFunction;
            };
            __webpack_exports__.e = function(method, logic) {
                var args = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {}, key = serializeArgs(args);
                return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
            };
            __webpack_exports__.h = function() {};
            __webpack_exports__.i = function(method) {
                var called = !1;
                return function() {
                    if (!called) {
                        called = !0;
                        return method.apply(this, arguments);
                    }
                };
            };
            __webpack_exports__.n = function stringifyError(err) {
                var level = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                if (level >= 3) return "stringifyError stack overflow";
                try {
                    if (!err) return "<unknown error: " + Object.prototype.toString.call(err) + ">";
                    if ("string" == typeof err) return err;
                    if (err instanceof Error) {
                        var stack = err && err.stack, message = err && err.message;
                        if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                        if (stack) return stack;
                        if (message) return message;
                    }
                    return "function" == typeof err.toString ? err.toString() : Object.prototype.toString.call(err);
                } catch (newErr) {
                    return "Error while stringifying error: " + stringifyError(newErr, level + 1);
                }
            };
            __webpack_exports__.m = function(item) {
                return "string" == typeof item ? item : item && "function" == typeof item.toString ? item.toString() : Object.prototype.toString.call(item);
            };
            __webpack_exports__.c = function(obj, source) {
                if (!source) return obj;
                if (Object.assign) return Object.assign(obj, source);
                for (var key in source) source.hasOwnProperty(key) && (obj[key] = source[key]);
                return obj;
            };
            __webpack_exports__.l = function(method, time) {
                var timeout = void 0;
                !function loop() {
                    timeout = setTimeout(function() {
                        method();
                        loop();
                    }, time);
                }();
                return {
                    cancel: function() {
                        clearTimeout(timeout);
                    }
                };
            };
            __webpack_exports__.a = function(string) {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            };
            __webpack_exports__.k = function replaceObject(item, replacer) {
                var fullKey = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if (Array.isArray(item)) {
                    for (var _length3 = item.length, result = [], _loop = function(i) {
                        defineLazyProp(result, i, function() {
                            var itemKey = fullKey ? fullKey + "." + i : "" + i, el = item[i], child = replacer(el, i, itemKey);
                            (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                            return child;
                        });
                    }, i = 0; i < _length3; i++) _loop(i);
                    return result;
                }
                if (isPlainObject(item)) {
                    var _result = {}, _loop2 = function(key) {
                        if (!item.hasOwnProperty(key)) return "continue";
                        defineLazyProp(_result, key, function() {
                            var itemKey = fullKey ? fullKey + "." + key : "" + key, el = item[key], child = replacer(el, key, itemKey);
                            (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                            return child;
                        });
                    };
                    for (var key in item) _loop2(key);
                    return _result;
                }
                throw new Error("Pass an object or array");
            };
            __webpack_exports__.b = function(method) {
                var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, timeout = void 0;
                return function() {
                    var _this3 = this, _arguments2 = arguments;
                    clearTimeout(timeout);
                    timeout = setTimeout(function() {
                        return method.apply(_this3, _arguments2);
                    }, time);
                };
            };
            __webpack_exports__.f = function(item) {
                return "[object RegExp]" === Object.prototype.toString.call(item);
            };
            var __WEBPACK_IMPORTED_MODULE_0_zalgo_promise_src__ = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), __WEBPACK_IMPORTED_MODULE_1_cross_domain_safe_weakmap_src__ = __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js"), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function uniqueID() {
                var str, chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                }) + "_" + (str = new Date().toISOString().slice(11, 19).replace("T", "."), window.btoa(str)).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            }
            var objectIDs = void 0;
            function serializeArgs(args) {
                try {
                    return JSON.stringify(Array.prototype.slice.call(args), function(subkey, val) {
                        return "function" == typeof val ? "memoize[" + function(obj) {
                            objectIDs = objectIDs || new __WEBPACK_IMPORTED_MODULE_1_cross_domain_safe_weakmap_src__.a();
                            if (null === obj || void 0 === obj || "object" !== (void 0 === obj ? "undefined" : _typeof(obj)) && "function" != typeof obj) throw new Error("Invalid object");
                            var uid = objectIDs.get(obj);
                            if (!uid) {
                                uid = (void 0 === obj ? "undefined" : _typeof(obj)) + ":" + uniqueID();
                                objectIDs.set(obj, uid);
                            }
                            return uid;
                        }(val) + "]" : val;
                    });
                } catch (err) {
                    throw new Error("Arguments not serializable -- can not be used to memoize");
                }
            }
            function defineLazyProp(obj, key, getter) {
                if (Array.isArray(obj)) {
                    if ("number" != typeof key) throw new TypeError("Array key must be number");
                } else if ("object" === (void 0 === obj ? "undefined" : _typeof(obj)) && null !== obj && "string" != typeof key) throw new TypeError("Object key must be string");
                Object.defineProperty(obj, key, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        delete obj[key];
                        var value = getter();
                        obj[key] = value;
                        return value;
                    },
                    set: function(value) {
                        delete obj[key];
                        obj[key] = value;
                    }
                });
            }
            function isObjectObject(obj) {
                return "object" === (void 0 === (item = obj) ? "undefined" : _typeof(item)) && null !== item && "[object Object]" === Object.prototype.toString.call(obj);
                var item;
            }
            function isPlainObject(obj) {
                if (!isObjectObject(obj)) return !1;
                var constructor = obj.constructor;
                if ("function" != typeof constructor) return !1;
                var prototype = constructor.prototype;
                return !!isObjectObject(prototype) && !!prototype.hasOwnProperty("isPrototypeOf");
            }
        },
        "./node_modules/cross-domain-safe-weakmap/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d({}, "WeakMap", function() {
                return weakmap_CrossDomainSafeWeakMap;
            });
            var src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js");
            function safeIndexOf(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }
            var defineProperty = Object.defineProperty, counter = Date.now() % 1e9, weakmap_CrossDomainSafeWeakMap = function() {
                function CrossDomainSafeWeakMap() {
                    !function(instance, Constructor) {
                        if (!(instance instanceof CrossDomainSafeWeakMap)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    counter += 1;
                    this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__" + counter;
                    if (function() {
                        if ("undefined" == typeof WeakMap) return !1;
                        if (void 0 === Object.freeze) return !1;
                        try {
                            var testWeakMap = new WeakMap(), testKey = {};
                            Object.freeze(testKey);
                            testWeakMap.set(testKey, "__testvalue__");
                            return "__testvalue__" === testWeakMap.get(testKey);
                        } catch (err) {
                            return !1;
                        }
                    }()) try {
                        this.weakmap = new WeakMap();
                    } catch (err) {}
                    this.keys = [];
                    this.values = [];
                }
                CrossDomainSafeWeakMap.prototype._cleanupClosedWindows = function() {
                    for (var weakmap = this.weakmap, keys = this.keys, i = 0; i < keys.length; i++) {
                        var value = keys[i];
                        if (Object(src.isWindow)(value) && Object(src.isWindowClosed)(value)) {
                            if (weakmap) try {
                                weakmap.delete(value);
                            } catch (err) {}
                            keys.splice(i, 1);
                            this.values.splice(i, 1);
                            i -= 1;
                        }
                    }
                };
                CrossDomainSafeWeakMap.prototype.isSafeToReadWrite = function(key) {
                    if (Object(src.isWindow)(key)) return !1;
                    try {
                        key && key.self;
                        key && key[this.name];
                    } catch (err) {
                        return !1;
                    }
                    return !0;
                };
                CrossDomainSafeWeakMap.prototype.set = function(key, value) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.set(key, value);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) {
                        var name = this.name, entry = key[name];
                        entry && entry[0] === key ? entry[1] = value : defineProperty(key, name, {
                            value: [ key, value ],
                            writable: !0
                        });
                    } else {
                        this._cleanupClosedWindows();
                        var keys = this.keys, values = this.values, index = safeIndexOf(keys, key);
                        if (-1 === index) {
                            keys.push(key);
                            values.push(value);
                        } else values[index] = value;
                    }
                };
                CrossDomainSafeWeakMap.prototype.get = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return weakmap.get(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (!this.isSafeToReadWrite(key)) {
                        this._cleanupClosedWindows();
                        var index = safeIndexOf(this.keys, key);
                        if (-1 === index) return;
                        return this.values[index];
                    }
                    var entry = key[this.name];
                    if (entry && entry[0] === key) return entry[1];
                };
                CrossDomainSafeWeakMap.prototype.delete = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.delete(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) {
                        var entry = key[this.name];
                        entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                    } else {
                        this._cleanupClosedWindows();
                        var keys = this.keys, index = safeIndexOf(keys, key);
                        if (-1 !== index) {
                            keys.splice(index, 1);
                            this.values.splice(index, 1);
                        }
                    }
                };
                CrossDomainSafeWeakMap.prototype.has = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        return weakmap.has(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) {
                        var entry = key[this.name];
                        return !(!entry || entry[0] !== key);
                    }
                    this._cleanupClosedWindows();
                    return -1 !== safeIndexOf(this.keys, key);
                };
                CrossDomainSafeWeakMap.prototype.getOrSet = function(key, getter) {
                    if (this.has(key)) return this.get(key);
                    var value = getter();
                    this.set(key, value);
                    return value;
                };
                return CrossDomainSafeWeakMap;
            }();
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return weakmap_CrossDomainSafeWeakMap;
            });
        },
        "./node_modules/cross-domain-utils/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/cross-domain-utils/src/utils.js");
            __webpack_require__.d(__webpack_exports__, "getActualDomain", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.a;
            });
            __webpack_require__.d(__webpack_exports__, "getAncestor", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.b;
            });
            __webpack_require__.d(__webpack_exports__, "getDomain", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.c;
            });
            __webpack_require__.d(__webpack_exports__, "getUserAgent", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.d;
            });
            __webpack_require__.d(__webpack_exports__, "isActuallySameDomain", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.e;
            });
            __webpack_require__.d(__webpack_exports__, "isAncestor", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.f;
            });
            __webpack_require__.d(__webpack_exports__, "isIframe", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.g;
            });
            __webpack_require__.d(__webpack_exports__, "isPopup", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.h;
            });
            __webpack_require__.d(__webpack_exports__, "isWindow", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.i;
            });
            __webpack_require__.d(__webpack_exports__, "isWindowClosed", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.j;
            });
            __webpack_require__.d(__webpack_exports__, "linkFrameWindow", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.k;
            });
            __webpack_require__.d(__webpack_exports__, "matchDomain", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.l;
            });
            __webpack_require__.d(__webpack_exports__, "stringifyDomainPattern", function() {
                return __WEBPACK_IMPORTED_MODULE_0__utils__.m;
            });
            var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./node_modules/cross-domain-utils/src/types.js");
            __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__types__);
        },
        "./node_modules/cross-domain-utils/src/types.js": function(module, exports) {},
        "./node_modules/cross-domain-utils/src/utils.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            function isRegex(item) {
                return "[object RegExp]" === Object.prototype.toString.call(item);
            }
            __webpack_exports__.a = getActualDomain;
            __webpack_exports__.c = getDomain;
            __webpack_exports__.e = isActuallySameDomain;
            __webpack_exports__.j = isWindowClosed;
            __webpack_exports__.k = function(frame) {
                !function() {
                    for (var i = 0; i < iframeFrames.length; i++) if (isFrameWindowClosed(iframeFrames[i])) {
                        iframeFrames.splice(i, 1);
                        iframeWindows.splice(i, 1);
                    }
                    for (var _i8 = 0; _i8 < iframeWindows.length; _i8++) if (isWindowClosed(iframeWindows[_i8])) {
                        iframeFrames.splice(_i8, 1);
                        iframeWindows.splice(_i8, 1);
                    }
                }();
                if (frame && frame.contentWindow) try {
                    iframeWindows.push(frame.contentWindow);
                    iframeFrames.push(frame);
                } catch (err) {}
            };
            __webpack_exports__.d = function(win) {
                return (win = win || window).navigator.mockUserAgent || win.navigator.userAgent;
            };
            __webpack_exports__.b = getAncestor;
            __webpack_exports__.f = function(parent, child) {
                var actualParent = getAncestor(child);
                if (actualParent) return actualParent === parent;
                if (child === parent) return !1;
                if (function(win) {
                    if (win) {
                        try {
                            if (win.top) return win.top;
                        } catch (err) {}
                        if (getParent(win) === win) return win;
                        try {
                            if (isAncestorParent(window, win) && window.top) return window.top;
                        } catch (err) {}
                        try {
                            if (isAncestorParent(win, window) && window.top) return window.top;
                        } catch (err) {}
                        for (var _i7 = 0, _getAllChildFrames4 = function getAllChildFrames(win) {
                            for (var result = [], _i3 = 0, _getFrames2 = getFrames(win), _length2 = null == _getFrames2 ? 0 : _getFrames2.length; _i3 < _length2; _i3++) {
                                var frame = _getFrames2[_i3];
                                result.push(frame);
                                for (var _i5 = 0, _getAllChildFrames2 = getAllChildFrames(frame), _length4 = null == _getAllChildFrames2 ? 0 : _getAllChildFrames2.length; _i5 < _length4; _i5++) {
                                    var childFrame = _getAllChildFrames2[_i5];
                                    result.push(childFrame);
                                }
                            }
                            return result;
                        }(win), _length6 = null == _getAllChildFrames4 ? 0 : _getAllChildFrames4.length; _i7 < _length6; _i7++) {
                            var frame = _getAllChildFrames4[_i7];
                            try {
                                if (frame.top) return frame.top;
                            } catch (err) {}
                            if (getParent(frame) === frame) return frame;
                        }
                    }
                }(child) === child) return !1;
                for (var _i16 = 0, _getFrames8 = getFrames(parent), _length14 = null == _getFrames8 ? 0 : _getFrames8.length; _i16 < _length14; _i16++) if (_getFrames8[_i16] === child) return !0;
                return !1;
            };
            __webpack_exports__.h = function() {
                return Boolean(getOpener(window));
            };
            __webpack_exports__.g = function() {
                return Boolean(getParent(window));
            };
            __webpack_exports__.l = function matchDomain(pattern, origin) {
                if ("string" == typeof pattern) {
                    if ("string" == typeof origin) return pattern === CONSTANTS.WILDCARD || origin === pattern;
                    if (isRegex(origin)) return !1;
                    if (Array.isArray(origin)) return !1;
                }
                return isRegex(pattern) ? isRegex(origin) ? pattern.toString() === origin.toString() : !Array.isArray(origin) && Boolean(origin.match(pattern)) : !!Array.isArray(pattern) && (Array.isArray(origin) ? JSON.stringify(pattern) === JSON.stringify(origin) : !isRegex(origin) && pattern.some(function(subpattern) {
                    return matchDomain(subpattern, origin);
                }));
            };
            __webpack_exports__.m = function(pattern) {
                return Array.isArray(pattern) ? "(" + pattern.join(" | ") + ")" : isRegex(pattern) ? "RegExp(" + pattern.toString() : pattern.toString();
            };
            __webpack_exports__.i = function(obj) {
                try {
                    if (obj === window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if ("[object Window]" === Object.prototype.toString.call(obj)) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (window.Window && obj instanceof window.Window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.self === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.parent === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.top === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    obj && obj.__cross_domain_utils_window_check__;
                } catch (err) {
                    return !0;
                }
                return !1;
            };
            var CONSTANTS = {
                MOCK_PROTOCOL: "mock:",
                FILE_PROTOCOL: "file:",
                ABOUT_PROTOCOL: "about:",
                WILDCARD: "*"
            }, IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
            function isAboutProtocol() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).location.protocol === CONSTANTS.ABOUT_PROTOCOL;
            }
            function getParent(win) {
                if (win) try {
                    if (win.parent && win.parent !== win) return win.parent;
                } catch (err) {}
            }
            function getOpener(win) {
                if (win && !getParent(win)) try {
                    return win.opener;
                } catch (err) {}
            }
            function canReadFromWindow(win) {
                try {
                    win && win.location && win.location.href;
                    return !0;
                } catch (err) {}
                return !1;
            }
            function getActualDomain(win) {
                var location = (win = win || window).location;
                if (!location) throw new Error("Can not read window location");
                var protocol = location.protocol;
                if (!protocol) throw new Error("Can not read window protocol");
                if (protocol === CONSTANTS.FILE_PROTOCOL) return CONSTANTS.FILE_PROTOCOL + "//";
                if (protocol === CONSTANTS.ABOUT_PROTOCOL) {
                    var parent = getParent(win);
                    return parent && canReadFromWindow(parent) ? getActualDomain(parent) : CONSTANTS.ABOUT_PROTOCOL + "//";
                }
                var host = location.host;
                if (!host) throw new Error("Can not read window host");
                return protocol + "//" + host;
            }
            function getDomain(win) {
                var domain = getActualDomain(win = win || window);
                return domain && win.mockDomain && 0 === win.mockDomain.indexOf(CONSTANTS.MOCK_PROTOCOL) ? win.mockDomain : domain;
            }
            function isActuallySameDomain(win) {
                try {
                    if (win === window) return !0;
                } catch (err) {}
                try {
                    var desc = Object.getOwnPropertyDescriptor(win, "location");
                    if (desc && !1 === desc.enumerable) return !1;
                } catch (err) {}
                try {
                    if (isAboutProtocol(win) && canReadFromWindow(win)) return !0;
                } catch (err) {}
                try {
                    if (getActualDomain(win) === getActualDomain(window)) return !0;
                } catch (err) {}
                return !1;
            }
            function isAncestorParent(parent, child) {
                if (!parent || !child) return !1;
                var childParent = getParent(child);
                return childParent ? childParent === parent : -1 !== function(win) {
                    var result = [];
                    try {
                        for (;win.parent !== win; ) {
                            result.push(win.parent);
                            win = win.parent;
                        }
                    } catch (err) {}
                    return result;
                }(child).indexOf(parent);
            }
            function getFrames(win) {
                var result = [], frames = void 0;
                try {
                    frames = win.frames;
                } catch (err) {
                    frames = win;
                }
                var len = void 0;
                try {
                    len = frames.length;
                } catch (err) {}
                if (0 === len) return result;
                if (len) {
                    for (var i = 0; i < len; i++) {
                        var frame = void 0;
                        try {
                            frame = frames[i];
                        } catch (err) {
                            continue;
                        }
                        result.push(frame);
                    }
                    return result;
                }
                for (var _i = 0; _i < 100; _i++) {
                    var _frame = void 0;
                    try {
                        _frame = frames[_i];
                    } catch (err) {
                        return result;
                    }
                    if (!_frame) return result;
                    result.push(_frame);
                }
                return result;
            }
            function isFrameWindowClosed(frame) {
                if (!frame.contentWindow) return !0;
                if (!frame.parentNode) return !0;
                var doc = frame.ownerDocument;
                return !(!doc || !doc.documentElement || doc.documentElement.contains(frame));
            }
            var iframeWindows = [], iframeFrames = [];
            function isWindowClosed(win) {
                var allowMock = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    if (win === window) return !1;
                } catch (err) {
                    return !0;
                }
                try {
                    if (!win) return !0;
                } catch (err) {
                    return !0;
                }
                try {
                    if (win.closed) return !0;
                } catch (err) {
                    return !err || err.message !== IE_WIN_ACCESS_ERROR;
                }
                if (allowMock && function(win) {
                    if (!isActuallySameDomain(win)) return !1;
                    try {
                        if (win === window) return !0;
                        if (isAboutProtocol(win) && canReadFromWindow(win)) return !0;
                        if (getDomain(window) === getDomain(win)) return !0;
                    } catch (err) {}
                    return !1;
                }(win)) try {
                    if (win.mockclosed) return !0;
                } catch (err) {}
                try {
                    if (!win.parent || !win.top) return !0;
                } catch (err) {}
                var iframeIndex = function(collection, item) {
                    for (var i = 0; i < collection.length; i++) try {
                        if (collection[i] === item) return i;
                    } catch (err) {}
                    return -1;
                }(iframeWindows, win);
                if (-1 !== iframeIndex) {
                    var frame = iframeFrames[iframeIndex];
                    if (frame && isFrameWindowClosed(frame)) return !0;
                }
                return !1;
            }
            function getAncestor(win) {
                return getOpener(win = win || window) || getParent(win) || void 0;
            }
        },
        "./node_modules/zalgo-promise/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            function utils_isPromise(item) {
                try {
                    if (!item) return !1;
                    if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                    if ("undefined" != typeof window && window.Window && item instanceof window.Window) return !1;
                    if ("undefined" != typeof window && window.constructor && item instanceof window.constructor) return !1;
                    var _toString = {}.toString;
                    if (_toString) {
                        var name = _toString.call(item);
                        if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                    }
                    if ("function" == typeof item.then) return !0;
                } catch (err) {
                    return !1;
                }
                return !1;
            }
            function getGlobal() {
                var glob = void 0;
                if ("undefined" != typeof window) glob = window; else {
                    if ("undefined" == typeof window) throw new TypeError("Can not find global");
                    glob = window;
                }
                var zalgoGlobal = glob.__zalgopromise__ = glob.__zalgopromise__ || {};
                zalgoGlobal.flushPromises = zalgoGlobal.flushPromises || [];
                zalgoGlobal.activeCount = zalgoGlobal.activeCount || 0;
                zalgoGlobal.possiblyUnhandledPromiseHandlers = zalgoGlobal.possiblyUnhandledPromiseHandlers || [];
                zalgoGlobal.dispatchedErrors = zalgoGlobal.dispatchedErrors || [];
                return zalgoGlobal;
            }
            var promise_ZalgoPromise = function() {
                function ZalgoPromise(handler) {
                    var _this = this;
                    !function(instance, Constructor) {
                        if (!(instance instanceof ZalgoPromise)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    this.resolved = !1;
                    this.rejected = !1;
                    this.errorHandled = !1;
                    this.handlers = [];
                    if (handler) {
                        var _result = void 0, _error = void 0, resolved = !1, rejected = !1, isAsync = !1;
                        try {
                            handler(function(res) {
                                if (isAsync) _this.resolve(res); else {
                                    resolved = !0;
                                    _result = res;
                                }
                            }, function(err) {
                                if (isAsync) _this.reject(err); else {
                                    rejected = !0;
                                    _error = err;
                                }
                            });
                        } catch (err) {
                            this.reject(err);
                            return;
                        }
                        isAsync = !0;
                        resolved ? this.resolve(_result) : rejected && this.reject(_error);
                    }
                }
                ZalgoPromise.prototype.resolve = function(result) {
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                    this.resolved = !0;
                    this.value = result;
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.reject = function(error) {
                    var _this2 = this;
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                    if (!error) {
                        var _err = error && "function" == typeof error.toString ? error.toString() : Object.prototype.toString.call(error);
                        error = new Error("Expected reject to be called with Error, got " + _err);
                    }
                    this.rejected = !0;
                    this.error = error;
                    this.errorHandled || setTimeout(function() {
                        _this2.errorHandled || function(err, promise) {
                            if (-1 === getGlobal().dispatchedErrors.indexOf(err)) {
                                getGlobal().dispatchedErrors.push(err);
                                setTimeout(function() {
                                    throw err;
                                }, 1);
                                for (var j = 0; j < getGlobal().possiblyUnhandledPromiseHandlers.length; j++) getGlobal().possiblyUnhandledPromiseHandlers[j](err, promise);
                            }
                        }(error, _this2);
                    }, 1);
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.asyncReject = function(error) {
                    this.errorHandled = !0;
                    this.reject(error);
                };
                ZalgoPromise.prototype.dispatch = function() {
                    var _this3 = this, dispatching = this.dispatching, resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                    if (!dispatching && (resolved || rejected)) {
                        this.dispatching = !0;
                        getGlobal().activeCount += 1;
                        for (var _loop = function(i) {
                            var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise, result = void 0;
                            if (resolved) try {
                                result = onSuccess ? onSuccess(_this3.value) : _this3.value;
                            } catch (err) {
                                promise.reject(err);
                                return "continue";
                            } else if (rejected) {
                                if (!onError) {
                                    promise.reject(_this3.error);
                                    return "continue";
                                }
                                try {
                                    result = onError(_this3.error);
                                } catch (err) {
                                    promise.reject(err);
                                    return "continue";
                                }
                            }
                            if (result instanceof ZalgoPromise && (result.resolved || result.rejected)) {
                                result.resolved ? promise.resolve(result.value) : promise.reject(result.error);
                                result.errorHandled = !0;
                            } else utils_isPromise(result) ? result instanceof ZalgoPromise && (result.resolved || result.rejected) ? result.resolved ? promise.resolve(result.value) : promise.reject(result.error) : result.then(function(res) {
                                promise.resolve(res);
                            }, function(err) {
                                promise.reject(err);
                            }) : promise.resolve(result);
                        }, i = 0; i < handlers.length; i++) _loop(i);
                        handlers.length = 0;
                        this.dispatching = !1;
                        getGlobal().activeCount -= 1;
                        0 === getGlobal().activeCount && ZalgoPromise.flushQueue();
                    }
                };
                ZalgoPromise.prototype.then = function(onSuccess, onError) {
                    if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                    if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                    var promise = new ZalgoPromise();
                    this.handlers.push({
                        promise: promise,
                        onSuccess: onSuccess,
                        onError: onError
                    });
                    this.errorHandled = !0;
                    this.dispatch();
                    return promise;
                };
                ZalgoPromise.prototype.catch = function(onError) {
                    return this.then(void 0, onError);
                };
                ZalgoPromise.prototype.finally = function(onFinally) {
                    if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                    return this.then(function(result) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            return result;
                        });
                    }, function(err) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            throw err;
                        });
                    });
                };
                ZalgoPromise.prototype.timeout = function(time, err) {
                    var _this4 = this;
                    if (this.resolved || this.rejected) return this;
                    var timeout = setTimeout(function() {
                        _this4.resolved || _this4.rejected || _this4.reject(err || new Error("Promise timed out after " + time + "ms"));
                    }, time);
                    return this.then(function(result) {
                        clearTimeout(timeout);
                        return result;
                    });
                };
                ZalgoPromise.prototype.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this);
                };
                ZalgoPromise.resolve = function(value) {
                    return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise(function(resolve, reject) {
                        return value.then(resolve, reject);
                    }) : new ZalgoPromise().resolve(value);
                };
                ZalgoPromise.reject = function(error) {
                    return new ZalgoPromise().reject(error);
                };
                ZalgoPromise.all = function(promises) {
                    var promise = new ZalgoPromise(), count = promises.length, results = [];
                    if (!count) {
                        promise.resolve(results);
                        return promise;
                    }
                    for (var _loop2 = function(i) {
                        var prom = promises[i];
                        if (prom instanceof ZalgoPromise) {
                            if (prom.resolved) {
                                results[i] = prom.value;
                                count -= 1;
                                return "continue";
                            }
                        } else if (!utils_isPromise(prom)) {
                            results[i] = prom;
                            count -= 1;
                            return "continue";
                        }
                        ZalgoPromise.resolve(prom).then(function(result) {
                            results[i] = result;
                            0 == (count -= 1) && promise.resolve(results);
                        }, function(err) {
                            promise.reject(err);
                        });
                    }, i = 0; i < promises.length; i++) _loop2(i);
                    0 === count && promise.resolve(results);
                    return promise;
                };
                ZalgoPromise.hash = function(promises) {
                    var result = {};
                    return ZalgoPromise.all(Object.keys(promises).map(function(key) {
                        return ZalgoPromise.resolve(promises[key]).then(function(value) {
                            result[key] = value;
                        });
                    })).then(function() {
                        return result;
                    });
                };
                ZalgoPromise.map = function(items, method) {
                    return ZalgoPromise.all(items.map(method));
                };
                ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                    return function(handler) {
                        getGlobal().possiblyUnhandledPromiseHandlers.push(handler);
                        return {
                            cancel: function() {
                                getGlobal().possiblyUnhandledPromiseHandlers.splice(getGlobal().possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                            }
                        };
                    }(handler);
                };
                ZalgoPromise.try = function(method, context, args) {
                    if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                    var result = void 0;
                    try {
                        result = method.apply(context, args || []);
                    } catch (err) {
                        return ZalgoPromise.reject(err);
                    }
                    return ZalgoPromise.resolve(result);
                };
                ZalgoPromise.delay = function(_delay) {
                    return new ZalgoPromise(function(resolve) {
                        setTimeout(resolve, _delay);
                    });
                };
                ZalgoPromise.isPromise = function(value) {
                    return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
                };
                ZalgoPromise.flush = function() {
                    var promise = new ZalgoPromise();
                    getGlobal().flushPromises.push(promise);
                    0 === getGlobal().activeCount && ZalgoPromise.flushQueue();
                    return promise;
                };
                ZalgoPromise.flushQueue = function() {
                    var promisesToFlush = getGlobal().flushPromises;
                    getGlobal().flushPromises = [];
                    for (var _i2 = 0, _length2 = null == promisesToFlush ? 0 : promisesToFlush.length; _i2 < _length2; _i2++) promisesToFlush[_i2].resolve();
                };
                return ZalgoPromise;
            }();
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return promise_ZalgoPromise;
            });
        },
        "./src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var interface_namespaceObject = {};
            __webpack_require__.d(interface_namespaceObject, "markWindowKnown", function() {
                return markWindowKnown;
            });
            __webpack_require__.d(interface_namespaceObject, "cleanUpWindow", function() {
                return cleanUpWindow;
            });
            __webpack_require__.d(interface_namespaceObject, "Promise", function() {
                return zalgo_promise_src.a;
            });
            __webpack_require__.d(interface_namespaceObject, "bridge", function() {
                return bridge;
            });
            __webpack_require__.d(interface_namespaceObject, "init", function() {
                return init;
            });
            __webpack_require__.d(interface_namespaceObject, "parent", function() {
                return public_parent;
            });
            __webpack_require__.d(interface_namespaceObject, "send", function() {
                return _send;
            });
            __webpack_require__.d(interface_namespaceObject, "request", function() {
                return request;
            });
            __webpack_require__.d(interface_namespaceObject, "sendToParent", function() {
                return sendToParent;
            });
            __webpack_require__.d(interface_namespaceObject, "client", function() {
                return client;
            });
            __webpack_require__.d(interface_namespaceObject, "on", function() {
                return _on;
            });
            __webpack_require__.d(interface_namespaceObject, "listen", function() {
                return listen;
            });
            __webpack_require__.d(interface_namespaceObject, "once", function() {
                return once;
            });
            __webpack_require__.d(interface_namespaceObject, "listener", function() {
                return server_listener;
            });
            __webpack_require__.d(interface_namespaceObject, "CONFIG", function() {
                return CONFIG;
            });
            __webpack_require__.d(interface_namespaceObject, "CONSTANTS", function() {
                return constants_CONSTANTS;
            });
            __webpack_require__.d(interface_namespaceObject, "disable", function() {
                return disable;
            });
            var _ALLOWED_POST_MESSAGE, src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), constants_CONSTANTS = {
                POST_MESSAGE_TYPE: {
                    REQUEST: "postrobot_message_request",
                    RESPONSE: "postrobot_message_response",
                    ACK: "postrobot_message_ack"
                },
                POST_MESSAGE_ACK: {
                    SUCCESS: "success",
                    ERROR: "error"
                },
                POST_MESSAGE_NAMES: {
                    METHOD: "postrobot_method",
                    HELLO: "postrobot_ready",
                    OPEN_TUNNEL: "postrobot_open_tunnel"
                },
                WINDOW_TYPES: {
                    FULLPAGE: "fullpage",
                    POPUP: "popup",
                    IFRAME: "iframe"
                },
                WINDOW_PROPS: {
                    POSTROBOT: "__postRobot__"
                },
                SERIALIZATION_TYPES: {
                    METHOD: "postrobot_method",
                    ERROR: "postrobot_error",
                    PROMISE: "postrobot_promise",
                    ZALGO_PROMISE: "postrobot_zalgo_promise",
                    REGEX: "regex"
                },
                SEND_STRATEGIES: {
                    POST_MESSAGE: "postrobot_post_message",
                    BRIDGE: "postrobot_bridge",
                    GLOBAL: "postrobot_global"
                },
                MOCK_PROTOCOL: "mock:",
                FILE_PROTOCOL: "file:",
                BRIDGE_NAME_PREFIX: "__postrobot_bridge__",
                POSTROBOT_PROXY: "__postrobot_proxy__",
                WILDCARD: "*"
            }, POST_MESSAGE_NAMES = {
                METHOD: "postrobot_method",
                HELLO: "postrobot_hello",
                OPEN_TUNNEL: "postrobot_open_tunnel"
            }, CONFIG = (Object.keys(POST_MESSAGE_NAMES).map(function(key) {
                return POST_MESSAGE_NAMES[key];
            }), {
                ALLOW_POSTMESSAGE_POPUP: !("__ALLOW_POSTMESSAGE_POPUP__" in window) || window.__ALLOW_POSTMESSAGE_POPUP__,
                BRIDGE_TIMEOUT: 5e3,
                CHILD_WINDOW_TIMEOUT: 5e3,
                ACK_TIMEOUT: 2e3,
                ACK_TIMEOUT_KNOWN: 1e4,
                RES_TIMEOUT: -1,
                ALLOWED_POST_MESSAGE_METHODS: (_ALLOWED_POST_MESSAGE = {}, _ALLOWED_POST_MESSAGE[constants_CONSTANTS.SEND_STRATEGIES.POST_MESSAGE] = !0, 
                _ALLOWED_POST_MESSAGE[constants_CONSTANTS.SEND_STRATEGIES.BRIDGE] = !0, _ALLOWED_POST_MESSAGE[constants_CONSTANTS.SEND_STRATEGIES.GLOBAL] = !0, 
                _ALLOWED_POST_MESSAGE)
            });
            0 === window.location.href.indexOf(constants_CONSTANTS.FILE_PROTOCOL) && (CONFIG.ALLOW_POSTMESSAGE_POPUP = !0);
            var cross_domain_safe_weakmap_src = __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js"), zalgo_promise_src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), belter_src = __webpack_require__("./node_modules/belter/src/index.js"), global = window[constants_CONSTANTS.WINDOW_PROPS.POSTROBOT] = window[constants_CONSTANTS.WINDOW_PROPS.POSTROBOT] || {};
            global.registerSelf = function() {};
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            global.methods = global.methods || new cross_domain_safe_weakmap_src.a();
            var listenForMethods = Object(belter_src.once)(function() {
                global.on(constants_CONSTANTS.POST_MESSAGE_NAMES.METHOD, {
                    origin: constants_CONSTANTS.WILDCARD
                }, function(_ref) {
                    var source = _ref.source, origin = _ref.origin, data = _ref.data, methods = global.methods.get(source);
                    if (!methods) throw new Error("Could not find any methods this window has privileges to call");
                    var meth = methods[data.id];
                    if (!meth) throw new Error("Could not find method with id: " + data.id);
                    if (!Object(src.matchDomain)(meth.domain, origin)) throw new Error("Method domain " + meth.domain + " does not match origin " + origin);
                    return zalgo_promise_src.a.try(function() {
                        return meth.method.apply({
                            source: source,
                            origin: origin,
                            data: data
                        }, data.args);
                    }).then(function(result) {
                        return {
                            result: result,
                            id: data.id,
                            name: data.name
                        };
                    });
                });
            });
            function isSerialized(item, type) {
                return "object" === (void 0 === item ? "undefined" : _typeof(item)) && null !== item && item.__type__ === type;
            }
            function serializeMethod(destination, domain, method, name) {
                var id = Object(belter_src.uniqueID)(), methods = global.methods.get(destination);
                if (!methods) {
                    methods = {};
                    global.methods.set(destination, methods);
                }
                methods[id] = {
                    domain: domain,
                    method: method
                };
                return {
                    __type__: constants_CONSTANTS.SERIALIZATION_TYPES.METHOD,
                    __id__: id,
                    __name__: name
                };
            }
            function deserializeMethod(source, origin, obj) {
                function wrapper() {
                    var args = Array.prototype.slice.call(arguments);
                    return global.send(source, constants_CONSTANTS.POST_MESSAGE_NAMES.METHOD, {
                        id: obj.__id__,
                        name: obj.__name__,
                        args: args
                    }, {
                        domain: origin,
                        timeout: -1
                    }).then(function(_ref2) {
                        return _ref2.data.result;
                    }, function(err) {
                        throw err;
                    });
                }
                wrapper.__name__ = obj.__name__;
                wrapper.__xdomain__ = !0;
                wrapper.source = source;
                wrapper.origin = origin;
                return wrapper;
            }
            function deserializeZalgoPromise(source, origin, prom) {
                return new zalgo_promise_src.a(function(resolve, reject) {
                    return deserializeMethod(source, origin, prom.__then__)(resolve, reject);
                });
            }
            global.readyPromises = global.readyPromises || new cross_domain_safe_weakmap_src.a();
            global.knownWindows = global.knownWindows || new cross_domain_safe_weakmap_src.a();
            function sayHello(win) {
                return global.send(win, constants_CONSTANTS.POST_MESSAGE_NAMES.HELLO, {}, {
                    domain: constants_CONSTANTS.WILDCARD,
                    timeout: -1
                }).then(function(_ref2) {
                    return {
                        origin: _ref2.origin
                    };
                });
            }
            function markWindowKnown(win) {
                global.knownWindows.set(win, !0);
            }
            var SEND_MESSAGE_STRATEGIES = {};
            SEND_MESSAGE_STRATEGIES[constants_CONSTANTS.SEND_STRATEGIES.POST_MESSAGE] = function(win, serializedMessage, domain) {
                (Array.isArray(domain) ? domain : "string" == typeof domain ? [ domain ] : [ constants_CONSTANTS.WILDCARD ]).map(function(dom) {
                    if (0 === dom.indexOf(constants_CONSTANTS.MOCK_PROTOCOL)) {
                        if (window.location.protocol === constants_CONSTANTS.FILE_PROTOCOL) return constants_CONSTANTS.WILDCARD;
                        if (!Object(src.isActuallySameDomain)(win)) throw new Error("Attempting to send messsage to mock domain " + dom + ", but window is actually cross-domain");
                        return Object(src.getActualDomain)(win);
                    }
                    return 0 === dom.indexOf(constants_CONSTANTS.FILE_PROTOCOL) ? constants_CONSTANTS.WILDCARD : dom;
                }).forEach(function(dom) {
                    return win.postMessage(serializedMessage, dom);
                });
            };
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            };
            function sendMessage(win, message, domain) {
                return zalgo_promise_src.a.try(function() {
                    var _JSON$stringify;
                    message = function(win, message) {
                        var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, id = Object(belter_src.uniqueID)(), type = Object(src.isPopup)() ? constants_CONSTANTS.WINDOW_TYPES.POPUP : Object(src.isIframe)() ? constants_CONSTANTS.WINDOW_TYPES.IFRAME : constants_CONSTANTS.WINDOW_TYPES.FULLPAGE, sourceDomain = Object(src.getDomain)(window);
                        return _extends({}, message, options, {
                            sourceDomain: sourceDomain,
                            id: message.id || id,
                            windowType: type
                        });
                    }(win, message, {
                        data: function(destination, domain, obj) {
                            return Object(belter_src.replaceObject)({
                                obj: obj
                            }, function(item, key) {
                                return "function" == typeof item ? serializeMethod(destination, domain, item, key.toString()) : item instanceof Error ? (err = item, 
                                {
                                    __type__: constants_CONSTANTS.SERIALIZATION_TYPES.ERROR,
                                    __message__: Object(belter_src.stringifyError)(err),
                                    __code__: err.code
                                }) : window.Promise && item instanceof window.Promise ? function(destination, domain, promise, name) {
                                    return {
                                        __type__: constants_CONSTANTS.SERIALIZATION_TYPES.PROMISE,
                                        __then__: serializeMethod(destination, domain, function(resolve, reject) {
                                            return promise.then(resolve, reject);
                                        }, name + ".then")
                                    };
                                }(destination, domain, item, key.toString()) : zalgo_promise_src.a.isPromise(item) ? function(destination, domain, promise, name) {
                                    return {
                                        __type__: constants_CONSTANTS.SERIALIZATION_TYPES.ZALGO_PROMISE,
                                        __then__: serializeMethod(destination, domain, function(resolve, reject) {
                                            return promise.then(resolve, reject);
                                        }, name + ".then")
                                    };
                                }(destination, domain, item, key.toString()) : Object(belter_src.isRegex)(item) ? (regex = item, 
                                {
                                    __type__: constants_CONSTANTS.SERIALIZATION_TYPES.REGEX,
                                    __source__: regex.source
                                }) : item;
                                var err, regex;
                            }).obj;
                        }(win, domain, message.data),
                        domain: domain
                    });
                    if (Object(src.isWindowClosed)(win)) throw new Error("Window is closed");
                    var messages = [], serializedMessage = JSON.stringify(((_JSON$stringify = {})[constants_CONSTANTS.WINDOW_PROPS.POSTROBOT] = message, 
                    _JSON$stringify), null, 2);
                    return zalgo_promise_src.a.map(Object.keys(SEND_MESSAGE_STRATEGIES), function(strategyName) {
                        return zalgo_promise_src.a.try(function() {
                            if (!CONFIG.ALLOWED_POST_MESSAGE_METHODS[strategyName]) throw new Error("Strategy disallowed: " + strategyName);
                            return SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
                        }).then(function() {
                            messages.push(strategyName + ": success");
                            return !0;
                        }, function(err) {
                            messages.push(strategyName + ": " + Object(belter_src.stringifyError)(err) + "\n");
                            return !1;
                        });
                    }).then(function(results) {
                        var success = results.some(Boolean), status = message.type + " " + message.name + " " + (success ? "success" : "error") + ":\n  - " + messages.join("\n  - ") + "\n";
                        if (!success) throw new Error(status);
                    });
                });
            }
            global.responseListeners = global.responseListeners || {};
            global.requestListeners = global.requestListeners || {};
            global.WINDOW_WILDCARD = global.WINDOW_WILDCARD || new function() {}();
            global.erroredResponseListeners = global.erroredResponseListeners || {};
            var _RECEIVE_MESSAGE_TYPE, __DOMAIN_REGEX__ = "__domain_regex__";
            function getResponseListener(hash) {
                return global.responseListeners[hash];
            }
            function deleteResponseListener(hash) {
                delete global.responseListeners[hash];
            }
            function isResponseListenerErrored(hash) {
                return Boolean(global.erroredResponseListeners[hash]);
            }
            function getRequestListener(_ref) {
                var name = _ref.name, win = _ref.win, domain = _ref.domain;
                win === constants_CONSTANTS.WILDCARD && (win = null);
                domain === constants_CONSTANTS.WILDCARD && (domain = null);
                if (!name) throw new Error("Name required to get request listener");
                var nameListeners = global.requestListeners[name];
                if (nameListeners) for (var _i2 = 0, _ref3 = [ win, global.WINDOW_WILDCARD ], _length2 = null == _ref3 ? 0 : _ref3.length; _i2 < _length2; _i2++) {
                    var winQualifier = _ref3[_i2], winListeners = winQualifier && nameListeners.get(winQualifier);
                    if (winListeners) {
                        if (domain && "string" == typeof domain) {
                            if (winListeners[domain]) return winListeners[domain];
                            if (winListeners[__DOMAIN_REGEX__]) for (var _i4 = 0, _winListeners$__DOMAI2 = winListeners[__DOMAIN_REGEX__], _length4 = null == _winListeners$__DOMAI2 ? 0 : _winListeners$__DOMAI2.length; _i4 < _length4; _i4++) {
                                var _ref5 = _winListeners$__DOMAI2[_i4], regex = _ref5.regex, listener = _ref5.listener;
                                if (Object(src.matchDomain)(regex, domain)) return listener;
                            }
                        }
                        if (winListeners[constants_CONSTANTS.WILDCARD]) return winListeners[constants_CONSTANTS.WILDCARD];
                    }
                }
            }
            var types__extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, RECEIVE_MESSAGE_TYPES = ((_RECEIVE_MESSAGE_TYPE = {})[constants_CONSTANTS.POST_MESSAGE_TYPE.ACK] = function(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!Object(src.matchDomain)(options.domain, origin)) throw new Error("Ack origin " + origin + " does not match domain " + options.domain.toString());
                    options.ack = !0;
                }
            }, _RECEIVE_MESSAGE_TYPE[constants_CONSTANTS.POST_MESSAGE_TYPE.REQUEST] = function(source, origin, message) {
                var options = getRequestListener({
                    name: message.name,
                    win: source,
                    domain: origin
                });
                function respond(data) {
                    return message.fireAndForget || Object(src.isWindowClosed)(source) ? zalgo_promise_src.a.resolve() : sendMessage(source, types__extends({
                        target: message.originalSource,
                        hash: message.hash,
                        name: message.name
                    }, data), origin);
                }
                return zalgo_promise_src.a.all([ respond({
                    type: constants_CONSTANTS.POST_MESSAGE_TYPE.ACK
                }), zalgo_promise_src.a.try(function() {
                    if (!options) throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!Object(src.matchDomain)(options.domain, origin)) throw new Error("Request origin " + origin + " does not match domain " + options.domain.toString());
                    var data = message.data;
                    return options.handler({
                        source: source,
                        origin: origin,
                        data: data
                    });
                }).then(function(data) {
                    return respond({
                        type: constants_CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
                        ack: constants_CONSTANTS.POST_MESSAGE_ACK.SUCCESS,
                        data: data
                    });
                }, function(err) {
                    var error = Object(belter_src.stringifyError)(err).replace(/^Error: /, ""), code = err.code;
                    return respond({
                        type: constants_CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
                        ack: constants_CONSTANTS.POST_MESSAGE_ACK.ERROR,
                        error: error,
                        code: code
                    });
                }) ]).then(belter_src.noop).catch(function(err) {
                    if (options && options.handleError) return options.handleError(err);
                    throw err;
                });
            }, _RECEIVE_MESSAGE_TYPE[constants_CONSTANTS.POST_MESSAGE_TYPE.RESPONSE] = function(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!Object(src.matchDomain)(options.domain, origin)) throw new Error("Response origin " + origin + " does not match domain " + Object(src.stringifyDomainPattern)(options.domain));
                    deleteResponseListener(message.hash);
                    if (message.ack === constants_CONSTANTS.POST_MESSAGE_ACK.ERROR) {
                        var err = new Error(message.error);
                        message.code && (err.code = message.code);
                        return options.respond(err, null);
                    }
                    if (message.ack === constants_CONSTANTS.POST_MESSAGE_ACK.SUCCESS) {
                        var data = message.data || message.response;
                        return options.respond(null, {
                            source: source,
                            origin: origin,
                            data: data
                        });
                    }
                }
            }, _RECEIVE_MESSAGE_TYPE), receive__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            global.receivedMessages = global.receivedMessages || [];
            function receiveMessage(event) {
                if (!window || window.closed) throw new Error("Message recieved in closed window");
                try {
                    if (!event.source) return;
                } catch (err) {
                    return;
                }
                var source = event.source, origin = event.origin, message = function(message) {
                    var parsedMessage = void 0;
                    try {
                        parsedMessage = JSON.parse(message);
                    } catch (err) {
                        return;
                    }
                    if (parsedMessage && "object" === (void 0 === parsedMessage ? "undefined" : receive__typeof(parsedMessage)) && null !== parsedMessage && (parsedMessage = parsedMessage[constants_CONSTANTS.WINDOW_PROPS.POSTROBOT]) && "object" === (void 0 === parsedMessage ? "undefined" : receive__typeof(parsedMessage)) && null !== parsedMessage && parsedMessage.type && "string" == typeof parsedMessage.type && RECEIVE_MESSAGE_TYPES[parsedMessage.type]) return parsedMessage;
                }(event.data);
                if (message) {
                    markWindowKnown(source);
                    if (!message.sourceDomain || "string" != typeof message.sourceDomain) throw new Error("Expected message to have sourceDomain");
                    0 !== message.sourceDomain.indexOf(constants_CONSTANTS.MOCK_PROTOCOL) && 0 !== message.sourceDomain.indexOf(constants_CONSTANTS.FILE_PROTOCOL) || (origin = message.sourceDomain);
                    if (-1 === global.receivedMessages.indexOf(message.id)) {
                        global.receivedMessages.push(message.id);
                        if (!Object(src.isWindowClosed)(source) || message.fireAndForget) {
                            message.data && (message.data = function(source, origin, obj) {
                                return Object(belter_src.replaceObject)({
                                    obj: obj
                                }, function(item) {
                                    return "object" !== (void 0 === item ? "undefined" : _typeof(item)) || null === item ? item : isSerialized(item, constants_CONSTANTS.SERIALIZATION_TYPES.METHOD) ? deserializeMethod(source, origin, item) : isSerialized(item, constants_CONSTANTS.SERIALIZATION_TYPES.ERROR) ? function(source, origin, obj) {
                                        var err = new Error(obj.__message__);
                                        obj.__code__ && (err.code = obj.__code__);
                                        return err;
                                    }(0, 0, item) : isSerialized(item, constants_CONSTANTS.SERIALIZATION_TYPES.PROMISE) ? function(source, origin, prom) {
                                        return window.Promise ? new window.Promise(function(resolve, reject) {
                                            return deserializeMethod(source, origin, prom.__then__)(resolve, reject);
                                        }) : deserializeZalgoPromise(source, origin, prom);
                                    }(source, origin, item) : isSerialized(item, constants_CONSTANTS.SERIALIZATION_TYPES.ZALGO_PROMISE) ? deserializeZalgoPromise(source, origin, item) : isSerialized(item, constants_CONSTANTS.SERIALIZATION_TYPES.REGEX) ? function(source, origin, item) {
                                        return new RegExp(item.__source__);
                                    }(0, 0, item) : item;
                                }).obj;
                            }(source, origin, message.data));
                            RECEIVE_MESSAGE_TYPES[message.type](source, origin, message);
                        }
                    }
                }
            }
            function messageListener(event) {
                try {
                    Object(belter_src.noop)(event.source);
                } catch (err) {
                    return;
                }
                receiveMessage({
                    source: event.source || event.sourceElement,
                    origin: event.origin || event.originalEvent && event.originalEvent.origin,
                    data: event.data
                });
            }
            global.receiveMessage = receiveMessage;
            global.requestPromises = global.requestPromises || new cross_domain_safe_weakmap_src.a();
            function request(options) {
                return zalgo_promise_src.a.try(function() {
                    if (!options.name) throw new Error("Expected options.name");
                    var name = options.name, targetWindow = void 0, domain = void 0;
                    if ("string" == typeof options.window) {
                        var el = document.getElementById(options.window);
                        if (!el) throw new Error("Expected options.window " + Object.prototype.toString.call(options.window) + " to be a valid element id");
                        if ("iframe" !== el.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(options.window) + " to be an iframe");
                        if (!el.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        targetWindow = el.contentWindow;
                    } else if (options.window instanceof HTMLIFrameElement) {
                        if ("iframe" !== options.window.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(options.window) + " to be an iframe");
                        if (options.window && !options.window.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        options.window && options.window.contentWindow && (targetWindow = options.window.contentWindow);
                    } else targetWindow = options.window;
                    if (!targetWindow) throw new Error("Expected options.window to be a window object, iframe, or iframe element id.");
                    var win = targetWindow;
                    domain = options.domain || constants_CONSTANTS.WILDCARD;
                    var hash = options.name + "_" + Object(belter_src.uniqueID)();
                    if (Object(src.isWindowClosed)(win)) throw new Error("Target window is closed");
                    var hasResult = !1, requestPromises = global.requestPromises.get(win);
                    if (!requestPromises) {
                        requestPromises = [];
                        global.requestPromises.set(win, requestPromises);
                    }
                    var requestPromise = zalgo_promise_src.a.try(function() {
                        if (Object(src.isAncestor)(window, win)) return function(win) {
                            var timeout = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3, name = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Window", promise = global.readyPromises.get(win);
                            if (promise) return promise;
                            promise = new zalgo_promise_src.a();
                            global.readyPromises.set(win, promise);
                            -1 !== timeout && setTimeout(function() {
                                return promise.reject(new Error(name + " did not load after " + timeout + "ms"));
                            }, timeout);
                            return promise;
                        }(win, options.timeout || CONFIG.CHILD_WINDOW_TIMEOUT);
                    }).then(function() {
                        var origin = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).origin;
                        if (Object(belter_src.isRegex)(domain) && !origin) return sayHello(win);
                    }).then(function() {
                        var origin = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).origin;
                        if (Object(belter_src.isRegex)(domain)) {
                            if (!Object(src.matchDomain)(domain, origin)) throw new Error("Remote window domain " + origin + " does not match regex: " + domain.toString());
                            domain = origin;
                        }
                        if ("string" != typeof domain && !Array.isArray(domain)) throw new TypeError("Expected domain to be a string or array");
                        var actualDomain = domain;
                        return new zalgo_promise_src.a(function(resolve, reject) {
                            var responseListener = void 0;
                            options.fireAndForget || function(hash, listener) {
                                global.responseListeners[hash] = listener;
                            }(hash, responseListener = {
                                name: name,
                                window: win,
                                domain: actualDomain,
                                respond: function(err, result) {
                                    if (!err) {
                                        hasResult = !0;
                                        requestPromises.splice(requestPromises.indexOf(requestPromise, 1));
                                    }
                                    err ? reject(err) : resolve(result);
                                }
                            });
                            sendMessage(win, {
                                type: constants_CONSTANTS.POST_MESSAGE_TYPE.REQUEST,
                                hash: hash,
                                name: name,
                                data: options.data,
                                fireAndForget: options.fireAndForget
                            }, actualDomain).catch(reject);
                            if (options.fireAndForget) return resolve();
                            var totalAckTimeout = function(win) {
                                return global.knownWindows.get(win);
                            }(win) ? CONFIG.ACK_TIMEOUT_KNOWN : CONFIG.ACK_TIMEOUT, totalResTimeout = options.timeout || CONFIG.RES_TIMEOUT, ackTimeout = totalAckTimeout, resTimeout = totalResTimeout, cycleTime = 100;
                            setTimeout(function cycle() {
                                if (!hasResult) {
                                    if (Object(src.isWindowClosed)(win)) return responseListener.ack ? reject(new Error("Window closed for " + name + " before response")) : reject(new Error("Window closed for " + name + " before ack"));
                                    ackTimeout = Math.max(ackTimeout - cycleTime, 0);
                                    -1 !== resTimeout && (resTimeout = Math.max(resTimeout - cycleTime, 0));
                                    if (responseListener.ack) {
                                        if (-1 === resTimeout) return;
                                        cycleTime = Math.min(resTimeout, 2e3);
                                    } else {
                                        if (0 === ackTimeout) return reject(new Error("No ack for postMessage " + name + " in " + Object(src.getDomain)() + " in " + totalAckTimeout + "ms"));
                                        if (0 === resTimeout) return reject(new Error("No response for postMessage " + name + " in " + Object(src.getDomain)() + " in " + totalResTimeout + "ms"));
                                    }
                                    setTimeout(cycle, cycleTime);
                                }
                            }, cycleTime);
                        });
                    });
                    requestPromise.catch(function() {
                        !function(hash) {
                            global.erroredResponseListeners[hash] = !0;
                        }(hash);
                        deleteResponseListener(hash);
                    });
                    requestPromises.push(requestPromise);
                    return requestPromise;
                });
            }
            function _send(window, name, data, options) {
                (options = options || {}).window = window;
                options.name = name;
                options.data = data;
                return request(options);
            }
            function sendToParent(name, data, options) {
                var win = Object(src.getAncestor)();
                return win ? _send(win, name, data, options) : new zalgo_promise_src.a(function(resolve, reject) {
                    return reject(new Error("Window does not have a parent"));
                });
            }
            function client() {
                var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!options.window) throw new Error("Expected options.window");
                var win = options.window;
                return {
                    send: function(name, data) {
                        return _send(win, name, data, options);
                    }
                };
            }
            global.send = _send;
            var server__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function listen(options) {
                if (!options.name) throw new Error("Expected options.name");
                if (!options.handler) throw new Error("Expected options.handler");
                var name = options.name, win = options.window, domain = options.domain, listenerOptions = {
                    handler: options.handler,
                    handleError: options.errorHandler || function(err) {
                        throw err;
                    },
                    window: win,
                    domain: domain || constants_CONSTANTS.WILDCARD,
                    name: name
                }, requestListener = function addRequestListener(_ref6, listener) {
                    var name = _ref6.name, win = _ref6.win, domain = _ref6.domain;
                    if (!name || "string" != typeof name) throw new Error("Name required to add request listener");
                    if (Array.isArray(win)) {
                        for (var listenersCollection = [], _i6 = 0, _win2 = win, _length6 = null == _win2 ? 0 : _win2.length; _i6 < _length6; _i6++) {
                            var item = _win2[_i6];
                            listenersCollection.push(addRequestListener({
                                name: name,
                                domain: domain,
                                win: item
                            }, listener));
                        }
                        return {
                            cancel: function() {
                                for (var _i8 = 0, _length8 = null == listenersCollection ? 0 : listenersCollection.length; _i8 < _length8; _i8++) listenersCollection[_i8].cancel();
                            }
                        };
                    }
                    if (Array.isArray(domain)) {
                        for (var _listenersCollection = [], _i10 = 0, _domain2 = domain, _length10 = null == _domain2 ? 0 : _domain2.length; _i10 < _length10; _i10++) {
                            var _item = _domain2[_i10];
                            _listenersCollection.push(addRequestListener({
                                name: name,
                                win: win,
                                domain: _item
                            }, listener));
                        }
                        return {
                            cancel: function() {
                                for (var _i12 = 0, _length12 = null == _listenersCollection ? 0 : _listenersCollection.length; _i12 < _length12; _i12++) _listenersCollection[_i12].cancel();
                            }
                        };
                    }
                    var existingListener = getRequestListener({
                        name: name,
                        win: win,
                        domain: domain
                    });
                    win && win !== constants_CONSTANTS.WILDCARD || (win = global.WINDOW_WILDCARD);
                    domain = domain || constants_CONSTANTS.WILDCARD;
                    if (existingListener) throw win && domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString() + " for " + (win === global.WINDOW_WILDCARD ? "wildcard" : "specified") + " window") : win ? new Error("Request listener already exists for " + name + " for " + (win === global.WINDOW_WILDCARD ? "wildcard" : "specified") + " window") : domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString()) : new Error("Request listener already exists for " + name);
                    var requestListeners = global.requestListeners, nameListeners = requestListeners[name];
                    if (!nameListeners) {
                        nameListeners = new cross_domain_safe_weakmap_src.a();
                        requestListeners[name] = nameListeners;
                    }
                    var winListeners = nameListeners.get(win);
                    if (!winListeners) {
                        winListeners = {};
                        nameListeners.set(win, winListeners);
                    }
                    var strDomain = domain.toString(), regexListeners = winListeners[__DOMAIN_REGEX__], regexListener = void 0;
                    if (Object(belter_src.isRegex)(domain)) {
                        if (!regexListeners) {
                            regexListeners = [];
                            winListeners[__DOMAIN_REGEX__] = regexListeners;
                        }
                        regexListener = {
                            regex: domain,
                            listener: listener
                        };
                        regexListeners.push(regexListener);
                    } else winListeners[strDomain] = listener;
                    return {
                        cancel: function() {
                            if (winListeners) {
                                delete winListeners[strDomain];
                                win && 0 === Object.keys(winListeners).length && nameListeners.delete(win);
                                regexListener && regexListeners.splice(regexListeners.indexOf(regexListener, 1));
                            }
                        }
                    };
                }({
                    name: name,
                    win: win,
                    domain: domain
                }, listenerOptions);
                if (options.once) {
                    var _handler = listenerOptions.handler;
                    listenerOptions.handler = Object(belter_src.once)(function() {
                        requestListener.cancel();
                        return _handler.apply(this, arguments);
                    });
                }
                if (listenerOptions.window && options.errorOnClose) var interval = Object(belter_src.safeInterval)(function() {
                    if (win && "object" === (void 0 === win ? "undefined" : server__typeof(win)) && Object(src.isWindowClosed)(win)) {
                        interval.cancel();
                        listenerOptions.handleError(new Error("Post message target window is closed"));
                    }
                }, 50);
                return {
                    cancel: function() {
                        requestListener.cancel();
                    }
                };
            }
            function _on(name, options, handler) {
                if ("function" == typeof options) {
                    handler = options;
                    options = {};
                }
                (options = options || {}).name = name;
                options.handler = handler || options.handler;
                return listen(options);
            }
            function once(name) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, handler = arguments[2];
                if ("function" == typeof options) {
                    handler = options;
                    options = {};
                }
                options = options || {};
                handler = handler || options.handler;
                var errorHandler = options.errorHandler, promise = new zalgo_promise_src.a(function(resolve, reject) {
                    (options = options || {}).name = name;
                    options.once = !0;
                    options.handler = function(event) {
                        resolve(event);
                        if (handler) return handler(event);
                    };
                    options.errorHandler = function(err) {
                        reject(err);
                        if (errorHandler) return errorHandler(err);
                    };
                }), onceListener = listen(options);
                promise.cancel = onceListener.cancel;
                return promise;
            }
            function server_listener() {
                var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    on: function(name, handler) {
                        return _on(name, options, handler);
                    }
                };
            }
            global.on = _on;
            function disable() {
                delete window[constants_CONSTANTS.WINDOW_PROPS.POSTROBOT];
                window.removeEventListener("message", messageListener);
            }
            var public_parent = Object(src.getAncestor)();
            function cleanUpWindow(win) {
                var requestPromises = global.requestPromises.get(win);
                if (requestPromises) for (var _i2 = 0, _length2 = null == requestPromises ? 0 : requestPromises.length; _i2 < _length2; _i2++) requestPromises[_i2].reject(new Error("No response from window - cleaned up"));
                global.popupWindowsByWin && global.popupWindowsByWin.delete(win);
                global.remoteWindows && global.remoteWindows.delete(win);
                global.requestPromises.delete(win);
                global.methods.delete(win);
                global.readyPromises.delete(win);
            }
            var bridge = null;
            function init() {
                if (!global.initialized) {
                    Object(belter_src.addEventListener)(window, "message", messageListener);
                    !function() {
                        handler = function(_ref3) {
                            var source = _ref3.source, origin = _ref3.origin, promise = global.readyPromises.get(source) || new zalgo_promise_src.a();
                            promise.resolve({
                                origin: origin
                            });
                            global.readyPromises.set(source, promise);
                        }, global.on(constants_CONSTANTS.POST_MESSAGE_NAMES.HELLO, {
                            domain: constants_CONSTANTS.WILDCARD
                        }, function(_ref) {
                            var source = _ref.source, origin = _ref.origin;
                            return handler({
                                source: source,
                                origin: origin
                            });
                        });
                        var handler, parent = Object(src.getAncestor)();
                        parent && sayHello(parent).catch(belter_src.noop);
                    }();
                    listenForMethods({
                        on: _on,
                        send: _send
                    });
                }
                global.initialized = !0;
            }
            init();
            __webpack_require__.d(__webpack_exports__, "markWindowKnown", function() {
                return markWindowKnown;
            });
            __webpack_require__.d(__webpack_exports__, "cleanUpWindow", function() {
                return cleanUpWindow;
            });
            __webpack_require__.d(__webpack_exports__, "Promise", function() {
                return zalgo_promise_src.a;
            });
            __webpack_require__.d(__webpack_exports__, "bridge", function() {
                return bridge;
            });
            __webpack_require__.d(__webpack_exports__, "init", function() {
                return init;
            });
            __webpack_require__.d(__webpack_exports__, "parent", function() {
                return public_parent;
            });
            __webpack_require__.d(__webpack_exports__, "send", function() {
                return _send;
            });
            __webpack_require__.d(__webpack_exports__, "request", function() {
                return request;
            });
            __webpack_require__.d(__webpack_exports__, "sendToParent", function() {
                return sendToParent;
            });
            __webpack_require__.d(__webpack_exports__, "client", function() {
                return client;
            });
            __webpack_require__.d(__webpack_exports__, "on", function() {
                return _on;
            });
            __webpack_require__.d(__webpack_exports__, "listen", function() {
                return listen;
            });
            __webpack_require__.d(__webpack_exports__, "once", function() {
                return once;
            });
            __webpack_require__.d(__webpack_exports__, "listener", function() {
                return server_listener;
            });
            __webpack_require__.d(__webpack_exports__, "CONFIG", function() {
                return CONFIG;
            });
            __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() {
                return constants_CONSTANTS;
            });
            __webpack_require__.d(__webpack_exports__, "disable", function() {
                return disable;
            });
            __webpack_exports__.default = interface_namespaceObject;
        }
    });
});
//# sourceMappingURL=post-robot.js.map