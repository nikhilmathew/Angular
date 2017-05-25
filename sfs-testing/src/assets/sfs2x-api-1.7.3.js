/*
SmartFoxServer 2X HTML5/JavaScript API
(c) gotoAndPlay | All rights reserved
http://www.smartfoxserver.com
*/
(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.SFS2X = f()
    }
})(function() {
    var define, module, exports;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    }({
        1: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/array/from"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/array/from": 24
        }],
        2: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/get-iterator"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/get-iterator": 25
        }],
        3: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/map"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/map": 26
        }],
        4: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/number/is-finite"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/number/is-finite": 27
        }],
        5: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/number/is-integer"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/number/is-integer": 28
        }],
        6: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/number/is-safe-integer"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/number/is-safe-integer": 29
        }],
        7: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/number/max-safe-integer"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/number/max-safe-integer": 30
        }],
        8: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/object/create"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/object/create": 31
        }],
        9: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/object/define-property"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/object/define-property": 32
        }],
        10: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/object/freeze"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/object/freeze": 33
        }],
        11: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/object/get-own-property-descriptor"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/object/get-own-property-descriptor": 34
        }],
        12: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/object/get-prototype-of"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/object/get-prototype-of": 35
        }],
        13: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/object/seal"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/object/seal": 36
        }],
        14: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/object/set-prototype-of"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/object/set-prototype-of": 37
        }],
        15: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/set"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/set": 38
        }],
        16: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/symbol"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/symbol": 39
        }],
        17: [function(_dereq_, module, exports) {
            module.exports = {
                default: _dereq_("core-js/library/fn/symbol/iterator"),
                __esModule: true
            }
        }, {
            "core-js/library/fn/symbol/iterator": 40
        }],
        18: [function(_dereq_, module, exports) {
            "use strict";
            exports.__esModule = true;
            exports.default = function(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
        }, {}],
        19: [function(_dereq_, module, exports) {
            "use strict";
            exports.__esModule = true;
            var _defineProperty = _dereq_("../core-js/object/define-property");
            var _defineProperty2 = _interopRequireDefault(_defineProperty);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            exports.default = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        (0, _defineProperty2.default)(target, descriptor.key, descriptor)
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor
                }
            }()
        }, {
            "../core-js/object/define-property": 9
        }],
        20: [function(_dereq_, module, exports) {
            "use strict";
            exports.__esModule = true;
            var _getPrototypeOf = _dereq_("../core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _getOwnPropertyDescriptor = _dereq_("../core-js/object/get-own-property-descriptor");
            var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            exports.default = function get(object, property, receiver) {
                if (object === null) object = Function.prototype;
                var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
                if (desc === undefined) {
                    var parent = (0, _getPrototypeOf2.default)(object);
                    if (parent === null) {
                        return undefined
                    } else {
                        return get(parent, property, receiver)
                    }
                } else if ("value" in desc) {
                    return desc.value
                } else {
                    var getter = desc.get;
                    if (getter === undefined) {
                        return undefined
                    }
                    return getter.call(receiver)
                }
            }
        }, {
            "../core-js/object/get-own-property-descriptor": 11,
            "../core-js/object/get-prototype-of": 12
        }],
        21: [function(_dereq_, module, exports) {
            "use strict";
            exports.__esModule = true;
            var _setPrototypeOf = _dereq_("../core-js/object/set-prototype-of");
            var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
            var _create = _dereq_("../core-js/object/create");
            var _create2 = _interopRequireDefault(_create);
            var _typeof2 = _dereq_("../helpers/typeof");
            var _typeof3 = _interopRequireDefault(_typeof2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            exports.default = function(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)))
                }
                subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass
            }
        }, {
            "../core-js/object/create": 8,
            "../core-js/object/set-prototype-of": 14,
            "../helpers/typeof": 23
        }],
        22: [function(_dereq_, module, exports) {
            "use strict";
            exports.__esModule = true;
            var _typeof2 = _dereq_("../helpers/typeof");
            var _typeof3 = _interopRequireDefault(_typeof2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            exports.default = function(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }
                return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self
            }
        }, {
            "../helpers/typeof": 23
        }],
        23: [function(_dereq_, module, exports) {
            "use strict";
            exports.__esModule = true;
            var _iterator = _dereq_("../core-js/symbol/iterator");
            var _iterator2 = _interopRequireDefault(_iterator);
            var _symbol = _dereq_("../core-js/symbol");
            var _symbol2 = _interopRequireDefault(_symbol);
            var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
                return typeof obj
            } : function(obj) {
                return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj
            };

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof(obj)
            } : function(obj) {
                return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj)
            }
        }, {
            "../core-js/symbol": 16,
            "../core-js/symbol/iterator": 17
        }],
        24: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.string.iterator");
            _dereq_("../../modules/es6.array.from");
            module.exports = _dereq_("../../modules/_core").Array.from
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.array.from": 118,
            "../../modules/es6.string.iterator": 134
        }],
        25: [function(_dereq_, module, exports) {
            _dereq_("../modules/web.dom.iterable");
            _dereq_("../modules/es6.string.iterator");
            module.exports = _dereq_("../modules/core.get-iterator")
        }, {
            "../modules/core.get-iterator": 117,
            "../modules/es6.string.iterator": 134,
            "../modules/web.dom.iterable": 140
        }],
        26: [function(_dereq_, module, exports) {
            _dereq_("../modules/es6.object.to-string");
            _dereq_("../modules/es6.string.iterator");
            _dereq_("../modules/web.dom.iterable");
            _dereq_("../modules/es6.map");
            _dereq_("../modules/es7.map.to-json");
            module.exports = _dereq_("../modules/_core").Map
        }, {
            "../modules/_core": 55,
            "../modules/es6.map": 120,
            "../modules/es6.object.to-string": 132,
            "../modules/es6.string.iterator": 134,
            "../modules/es7.map.to-json": 136,
            "../modules/web.dom.iterable": 140
        }],
        27: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.number.is-finite");
            module.exports = _dereq_("../../modules/_core").Number.isFinite
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.number.is-finite": 121
        }],
        28: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.number.is-integer");
            module.exports = _dereq_("../../modules/_core").Number.isInteger
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.number.is-integer": 122
        }],
        29: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.number.is-safe-integer");
            module.exports = _dereq_("../../modules/_core").Number.isSafeInteger
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.number.is-safe-integer": 123
        }],
        30: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.number.max-safe-integer");
            module.exports = 9007199254740991
        }, {
            "../../modules/es6.number.max-safe-integer": 124
        }],
        31: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.object.create");
            var $Object = _dereq_("../../modules/_core").Object;
            module.exports = function create(P, D) {
                return $Object.create(P, D)
            }
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.object.create": 125
        }],
        32: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.object.define-property");
            var $Object = _dereq_("../../modules/_core").Object;
            module.exports = function defineProperty(it, key, desc) {
                return $Object.defineProperty(it, key, desc)
            }
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.object.define-property": 126
        }],
        33: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.object.freeze");
            module.exports = _dereq_("../../modules/_core").Object.freeze
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.object.freeze": 127
        }],
        34: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.object.get-own-property-descriptor");
            var $Object = _dereq_("../../modules/_core").Object;
            module.exports = function getOwnPropertyDescriptor(it, key) {
                return $Object.getOwnPropertyDescriptor(it, key)
            }
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.object.get-own-property-descriptor": 128
        }],
        35: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.object.get-prototype-of");
            module.exports = _dereq_("../../modules/_core").Object.getPrototypeOf
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.object.get-prototype-of": 129
        }],
        36: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.object.seal");
            module.exports = _dereq_("../../modules/_core").Object.seal
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.object.seal": 130
        }],
        37: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.object.set-prototype-of");
            module.exports = _dereq_("../../modules/_core").Object.setPrototypeOf
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.object.set-prototype-of": 131
        }],
        38: [function(_dereq_, module, exports) {
            _dereq_("../modules/es6.object.to-string");
            _dereq_("../modules/es6.string.iterator");
            _dereq_("../modules/web.dom.iterable");
            _dereq_("../modules/es6.set");
            _dereq_("../modules/es7.set.to-json");
            module.exports = _dereq_("../modules/_core").Set
        }, {
            "../modules/_core": 55,
            "../modules/es6.object.to-string": 132,
            "../modules/es6.set": 133,
            "../modules/es6.string.iterator": 134,
            "../modules/es7.set.to-json": 137,
            "../modules/web.dom.iterable": 140
        }],
        39: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.symbol");
            _dereq_("../../modules/es6.object.to-string");
            _dereq_("../../modules/es7.symbol.async-iterator");
            _dereq_("../../modules/es7.symbol.observable");
            module.exports = _dereq_("../../modules/_core").Symbol
        }, {
            "../../modules/_core": 55,
            "../../modules/es6.object.to-string": 132,
            "../../modules/es6.symbol": 135,
            "../../modules/es7.symbol.async-iterator": 138,
            "../../modules/es7.symbol.observable": 139
        }],
        40: [function(_dereq_, module, exports) {
            _dereq_("../../modules/es6.string.iterator");
            _dereq_("../../modules/web.dom.iterable");
            module.exports = _dereq_("../../modules/_wks-ext").f("iterator")
        }, {
            "../../modules/_wks-ext": 114,
            "../../modules/es6.string.iterator": 134,
            "../../modules/web.dom.iterable": 140
        }],
        41: [function(_dereq_, module, exports) {
            module.exports = function(it) {
                if (typeof it != "function") throw TypeError(it + " is not a function!");
                return it
            }
        }, {}],
        42: [function(_dereq_, module, exports) {
            module.exports = function() {}
        }, {}],
        43: [function(_dereq_, module, exports) {
            module.exports = function(it, Constructor, name, forbiddenField) {
                if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
                    throw TypeError(name + ": incorrect invocation!")
                }
                return it
            }
        }, {}],
        44: [function(_dereq_, module, exports) {
            var isObject = _dereq_("./_is-object");
            module.exports = function(it) {
                if (!isObject(it)) throw TypeError(it + " is not an object!");
                return it
            }
        }, {
            "./_is-object": 75
        }],
        45: [function(_dereq_, module, exports) {
            var forOf = _dereq_("./_for-of");
            module.exports = function(iter, ITERATOR) {
                var result = [];
                forOf(iter, false, result.push, result, ITERATOR);
                return result
            }
        }, {
            "./_for-of": 65
        }],
        46: [function(_dereq_, module, exports) {
            var toIObject = _dereq_("./_to-iobject"),
                toLength = _dereq_("./_to-length"),
                toIndex = _dereq_("./_to-index");
            module.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIObject($this),
                        length = toLength(O.length),
                        index = toIndex(fromIndex, length),
                        value;
                    if (IS_INCLUDES && el != el)
                        while (length > index) {
                            value = O[index++];
                            if (value != value) return true
                        } else
                            for (; length > index; index++)
                                if (IS_INCLUDES || index in O) {
                                    if (O[index] === el) return IS_INCLUDES || index || 0
                                }
                    return !IS_INCLUDES && -1
                }
            }
        }, {
            "./_to-index": 106,
            "./_to-iobject": 108,
            "./_to-length": 109
        }],
        47: [function(_dereq_, module, exports) {
            var ctx = _dereq_("./_ctx"),
                IObject = _dereq_("./_iobject"),
                toObject = _dereq_("./_to-object"),
                toLength = _dereq_("./_to-length"),
                asc = _dereq_("./_array-species-create");
            module.exports = function(TYPE, $create) {
                var IS_MAP = TYPE == 1,
                    IS_FILTER = TYPE == 2,
                    IS_SOME = TYPE == 3,
                    IS_EVERY = TYPE == 4,
                    IS_FIND_INDEX = TYPE == 6,
                    NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
                    create = $create || asc;
                return function($this, callbackfn, that) {
                    var O = toObject($this),
                        self = IObject(O),
                        f = ctx(callbackfn, that, 3),
                        length = toLength(self.length),
                        index = 0,
                        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
                        val, res;
                    for (; length > index; index++)
                        if (NO_HOLES || index in self) {
                            val = self[index];
                            res = f(val, index, O);
                            if (TYPE) {
                                if (IS_MAP) result[index] = res;
                                else if (res) switch (TYPE) {
                                    case 3:
                                        return true;
                                    case 5:
                                        return val;
                                    case 6:
                                        return index;
                                    case 2:
                                        result.push(val)
                                } else if (IS_EVERY) return false
                            }
                        }
                    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result
                }
            }
        }, {
            "./_array-species-create": 49,
            "./_ctx": 57,
            "./_iobject": 71,
            "./_to-length": 109,
            "./_to-object": 110
        }],
        48: [function(_dereq_, module, exports) {
            var isObject = _dereq_("./_is-object"),
                isArray = _dereq_("./_is-array"),
                SPECIES = _dereq_("./_wks")("species");
            module.exports = function(original) {
                var C;
                if (isArray(original)) {
                    C = original.constructor;
                    if (typeof C == "function" && (C === Array || isArray(C.prototype))) C = undefined;
                    if (isObject(C)) {
                        C = C[SPECIES];
                        if (C === null) C = undefined
                    }
                }
                return C === undefined ? Array : C
            }
        }, {
            "./_is-array": 73,
            "./_is-object": 75,
            "./_wks": 115
        }],
        49: [function(_dereq_, module, exports) {
            var speciesConstructor = _dereq_("./_array-species-constructor");
            module.exports = function(original, length) {
                return new(speciesConstructor(original))(length)
            }
        }, {
            "./_array-species-constructor": 48
        }],
        50: [function(_dereq_, module, exports) {
            var cof = _dereq_("./_cof"),
                TAG = _dereq_("./_wks")("toStringTag"),
                ARG = cof(function() {
                    return arguments
                }()) == "Arguments";
            var tryGet = function(it, key) {
                try {
                    return it[key]
                } catch (e) {}
            };
            module.exports = function(it) {
                var O, T, B;
                return it === undefined ? "Undefined" : it === null ? "Null" : typeof(T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B
            }
        }, {
            "./_cof": 51,
            "./_wks": 115
        }],
        51: [function(_dereq_, module, exports) {
            var toString = {}.toString;
            module.exports = function(it) {
                return toString.call(it).slice(8, -1)
            }
        }, {}],
        52: [function(_dereq_, module, exports) {
            "use strict";
            var dP = _dereq_("./_object-dp").f,
                create = _dereq_("./_object-create"),
                redefineAll = _dereq_("./_redefine-all"),
                ctx = _dereq_("./_ctx"),
                anInstance = _dereq_("./_an-instance"),
                defined = _dereq_("./_defined"),
                forOf = _dereq_("./_for-of"),
                $iterDefine = _dereq_("./_iter-define"),
                step = _dereq_("./_iter-step"),
                setSpecies = _dereq_("./_set-species"),
                DESCRIPTORS = _dereq_("./_descriptors"),
                fastKey = _dereq_("./_meta").fastKey,
                SIZE = DESCRIPTORS ? "_s" : "size";
            var getEntry = function(that, key) {
                var index = fastKey(key),
                    entry;
                if (index !== "F") return that._i[index];
                for (entry = that._f; entry; entry = entry.n) {
                    if (entry.k == key) return entry
                }
            };
            module.exports = {
                getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function(that, iterable) {
                        anInstance(that, C, NAME, "_i");
                        that._i = create(null);
                        that._f = undefined;
                        that._l = undefined;
                        that[SIZE] = 0;
                        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that)
                    });
                    redefineAll(C.prototype, {
                        clear: function clear() {
                            for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
                                entry.r = true;
                                if (entry.p) entry.p = entry.p.n = undefined;
                                delete data[entry.i]
                            }
                            that._f = that._l = undefined;
                            that[SIZE] = 0
                        },
                        delete: function(key) {
                            var that = this,
                                entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.n,
                                    prev = entry.p;
                                delete that._i[entry.i];
                                entry.r = true;
                                if (prev) prev.n = next;
                                if (next) next.p = prev;
                                if (that._f == entry) that._f = next;
                                if (that._l == entry) that._l = prev;
                                that[SIZE]--
                            }
                            return !!entry
                        },
                        forEach: function forEach(callbackfn) {
                            anInstance(this, C, "forEach");
                            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
                                entry;
                            while (entry = entry ? entry.n : this._f) {
                                f(entry.v, entry.k, this);
                                while (entry && entry.r) entry = entry.p
                            }
                        },
                        has: function has(key) {
                            return !!getEntry(this, key)
                        }
                    });
                    if (DESCRIPTORS) dP(C.prototype, "size", {
                        get: function() {
                            return defined(this[SIZE])
                        }
                    });
                    return C
                },
                def: function(that, key, value) {
                    var entry = getEntry(that, key),
                        prev, index;
                    if (entry) {
                        entry.v = value
                    } else {
                        that._l = entry = {
                            i: index = fastKey(key, true),
                            k: key,
                            v: value,
                            p: prev = that._l,
                            n: undefined,
                            r: false
                        };
                        if (!that._f) that._f = entry;
                        if (prev) prev.n = entry;
                        that[SIZE]++;
                        if (index !== "F") that._i[index] = entry
                    }
                    return that
                },
                getEntry: getEntry,
                setStrong: function(C, NAME, IS_MAP) {
                    $iterDefine(C, NAME, function(iterated, kind) {
                        this._t = iterated;
                        this._k = kind;
                        this._l = undefined
                    }, function() {
                        var that = this,
                            kind = that._k,
                            entry = that._l;
                        while (entry && entry.r) entry = entry.p;
                        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                            that._t = undefined;
                            return step(1)
                        }
                        if (kind == "keys") return step(0, entry.k);
                        if (kind == "values") return step(0, entry.v);
                        return step(0, [entry.k, entry.v])
                    }, IS_MAP ? "entries" : "values", !IS_MAP, true);
                    setSpecies(NAME)
                }
            }
        }, {
            "./_an-instance": 43,
            "./_ctx": 57,
            "./_defined": 58,
            "./_descriptors": 59,
            "./_for-of": 65,
            "./_iter-define": 78,
            "./_iter-step": 80,
            "./_meta": 84,
            "./_object-create": 85,
            "./_object-dp": 86,
            "./_redefine-all": 98,
            "./_set-species": 101
        }],
        53: [function(_dereq_, module, exports) {
            var classof = _dereq_("./_classof"),
                from = _dereq_("./_array-from-iterable");
            module.exports = function(NAME) {
                return function toJSON() {
                    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
                    return from(this)
                }
            }
        }, {
            "./_array-from-iterable": 45,
            "./_classof": 50
        }],
        54: [function(_dereq_, module, exports) {
            "use strict";
            var global = _dereq_("./_global"),
                $export = _dereq_("./_export"),
                meta = _dereq_("./_meta"),
                fails = _dereq_("./_fails"),
                hide = _dereq_("./_hide"),
                redefineAll = _dereq_("./_redefine-all"),
                forOf = _dereq_("./_for-of"),
                anInstance = _dereq_("./_an-instance"),
                isObject = _dereq_("./_is-object"),
                setToStringTag = _dereq_("./_set-to-string-tag"),
                dP = _dereq_("./_object-dp").f,
                each = _dereq_("./_array-methods")(0),
                DESCRIPTORS = _dereq_("./_descriptors");
            module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
                var Base = global[NAME],
                    C = Base,
                    ADDER = IS_MAP ? "set" : "add",
                    proto = C && C.prototype,
                    O = {};
                if (!DESCRIPTORS || typeof C != "function" || !(IS_WEAK || proto.forEach && !fails(function() {
                        (new C).entries().next()
                    }))) {
                    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                    redefineAll(C.prototype, methods);
                    meta.NEED = true
                } else {
                    C = wrapper(function(target, iterable) {
                        anInstance(target, C, NAME, "_c");
                        target._c = new Base;
                        if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target)
                    });
                    each("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(KEY) {
                        var IS_ADDER = KEY == "add" || KEY == "set";
                        if (KEY in proto && !(IS_WEAK && KEY == "clear")) hide(C.prototype, KEY, function(a, b) {
                            anInstance(this, C, KEY);
                            if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == "get" ? undefined : false;
                            var result = this._c[KEY](a === 0 ? 0 : a, b);
                            return IS_ADDER ? this : result
                        })
                    });
                    if ("size" in proto) dP(C.prototype, "size", {
                        get: function() {
                            return this._c.size
                        }
                    })
                }
                setToStringTag(C, NAME);
                O[NAME] = C;
                $export($export.G + $export.W + $export.F, O);
                if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
                return C
            }
        }, {
            "./_an-instance": 43,
            "./_array-methods": 47,
            "./_descriptors": 59,
            "./_export": 63,
            "./_fails": 64,
            "./_for-of": 65,
            "./_global": 66,
            "./_hide": 68,
            "./_is-object": 75,
            "./_meta": 84,
            "./_object-dp": 86,
            "./_redefine-all": 98,
            "./_set-to-string-tag": 102
        }],
        55: [function(_dereq_, module, exports) {
            var core = module.exports = {
                version: "2.4.0"
            };
            if (typeof __e == "number") __e = core
        }, {}],
        56: [function(_dereq_, module, exports) {
            "use strict";
            var $defineProperty = _dereq_("./_object-dp"),
                createDesc = _dereq_("./_property-desc");
            module.exports = function(object, index, value) {
                if (index in object) $defineProperty.f(object, index, createDesc(0, value));
                else object[index] = value
            }
        }, {
            "./_object-dp": 86,
            "./_property-desc": 97
        }],
        57: [function(_dereq_, module, exports) {
            var aFunction = _dereq_("./_a-function");
            module.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch (length) {
                    case 1:
                        return function(a) {
                            return fn.call(that, a)
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b)
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c)
                        }
                }
                return function() {
                    return fn.apply(that, arguments)
                }
            }
        }, {
            "./_a-function": 41
        }],
        58: [function(_dereq_, module, exports) {
            module.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it
            }
        }, {}],
        59: [function(_dereq_, module, exports) {
            module.exports = !_dereq_("./_fails")(function() {
                return Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a != 7
            })
        }, {
            "./_fails": 64
        }],
        60: [function(_dereq_, module, exports) {
            var isObject = _dereq_("./_is-object"),
                document = _dereq_("./_global").document,
                is = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return is ? document.createElement(it) : {}
            }
        }, {
            "./_global": 66,
            "./_is-object": 75
        }],
        61: [function(_dereq_, module, exports) {
            module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }, {}],
        62: [function(_dereq_, module, exports) {
            var getKeys = _dereq_("./_object-keys"),
                gOPS = _dereq_("./_object-gops"),
                pIE = _dereq_("./_object-pie");
            module.exports = function(it) {
                var result = getKeys(it),
                    getSymbols = gOPS.f;
                if (getSymbols) {
                    var symbols = getSymbols(it),
                        isEnum = pIE.f,
                        i = 0,
                        key;
                    while (symbols.length > i)
                        if (isEnum.call(it, key = symbols[i++])) result.push(key)
                }
                return result
            }
        }, {
            "./_object-gops": 91,
            "./_object-keys": 94,
            "./_object-pie": 95
        }],
        63: [function(_dereq_, module, exports) {
            var global = _dereq_("./_global"),
                core = _dereq_("./_core"),
                ctx = _dereq_("./_ctx"),
                hide = _dereq_("./_hide"),
                PROTOTYPE = "prototype";
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F,
                    IS_GLOBAL = type & $export.G,
                    IS_STATIC = type & $export.S,
                    IS_PROTO = type & $export.P,
                    IS_BIND = type & $export.B,
                    IS_WRAP = type & $export.W,
                    exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
                    expProto = exports[PROTOTYPE],
                    target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
                    key, own, out;
                if (IS_GLOBAL) source = name;
                for (key in source) {
                    own = !IS_FORCED && target && target[key] !== undefined;
                    if (own && key in exports) continue;
                    out = own ? target[key] : source[key];
                    exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                        var F = function(a, b, c) {
                            if (this instanceof C) {
                                switch (arguments.length) {
                                    case 0:
                                        return new C;
                                    case 1:
                                        return new C(a);
                                    case 2:
                                        return new C(a, b)
                                }
                                return new C(a, b, c)
                            }
                            return C.apply(this, arguments)
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F
                    }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                    if (IS_PROTO) {
                        (exports.virtual || (exports.virtual = {}))[key] = out;
                        if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out)
                    }
                }
            };
            $export.F = 1;
            $export.G = 2;
            $export.S = 4;
            $export.P = 8;
            $export.B = 16;
            $export.W = 32;
            $export.U = 64;
            $export.R = 128;
            module.exports = $export
        }, {
            "./_core": 55,
            "./_ctx": 57,
            "./_global": 66,
            "./_hide": 68
        }],
        64: [function(_dereq_, module, exports) {
            module.exports = function(exec) {
                try {
                    return !!exec()
                } catch (e) {
                    return true
                }
            }
        }, {}],
        65: [function(_dereq_, module, exports) {
            var ctx = _dereq_("./_ctx"),
                call = _dereq_("./_iter-call"),
                isArrayIter = _dereq_("./_is-array-iter"),
                anObject = _dereq_("./_an-object"),
                toLength = _dereq_("./_to-length"),
                getIterFn = _dereq_("./core.get-iterator-method"),
                BREAK = {},
                RETURN = {};
            var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
                var iterFn = ITERATOR ? function() {
                        return iterable
                    } : getIterFn(iterable),
                    f = ctx(fn, that, entries ? 2 : 1),
                    index = 0,
                    length, step, iterator, result;
                if (typeof iterFn != "function") throw TypeError(iterable + " is not iterable!");
                if (isArrayIter(iterFn))
                    for (length = toLength(iterable.length); length > index; index++) {
                        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                        if (result === BREAK || result === RETURN) return result
                    } else
                        for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                            result = call(iterator, f, step.value, entries);
                            if (result === BREAK || result === RETURN) return result
                        }
            };
            exports.BREAK = BREAK;
            exports.RETURN = RETURN
        }, {
            "./_an-object": 44,
            "./_ctx": 57,
            "./_is-array-iter": 72,
            "./_iter-call": 76,
            "./_to-length": 109,
            "./core.get-iterator-method": 116
        }],
        66: [function(_dereq_, module, exports) {
            var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
            if (typeof __g == "number") __g = global
        }, {}],
        67: [function(_dereq_, module, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function(it, key) {
                return hasOwnProperty.call(it, key)
            }
        }, {}],
        68: [function(_dereq_, module, exports) {
            var dP = _dereq_("./_object-dp"),
                createDesc = _dereq_("./_property-desc");
            module.exports = _dereq_("./_descriptors") ? function(object, key, value) {
                return dP.f(object, key, createDesc(1, value))
            } : function(object, key, value) {
                object[key] = value;
                return object
            }
        }, {
            "./_descriptors": 59,
            "./_object-dp": 86,
            "./_property-desc": 97
        }],
        69: [function(_dereq_, module, exports) {
            module.exports = _dereq_("./_global").document && document.documentElement
        }, {
            "./_global": 66
        }],
        70: [function(_dereq_, module, exports) {
            module.exports = !_dereq_("./_descriptors") && !_dereq_("./_fails")(function() {
                return Object.defineProperty(_dereq_("./_dom-create")("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a != 7
            })
        }, {
            "./_descriptors": 59,
            "./_dom-create": 60,
            "./_fails": 64
        }],
        71: [function(_dereq_, module, exports) {
            var cof = _dereq_("./_cof");
            module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
                return cof(it) == "String" ? it.split("") : Object(it)
            }
        }, {
            "./_cof": 51
        }],
        72: [function(_dereq_, module, exports) {
            var Iterators = _dereq_("./_iterators"),
                ITERATOR = _dereq_("./_wks")("iterator"),
                ArrayProto = Array.prototype;
            module.exports = function(it) {
                return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it)
            }
        }, {
            "./_iterators": 81,
            "./_wks": 115
        }],
        73: [function(_dereq_, module, exports) {
            var cof = _dereq_("./_cof");
            module.exports = Array.isArray || function isArray(arg) {
                return cof(arg) == "Array"
            }
        }, {
            "./_cof": 51
        }],
        74: [function(_dereq_, module, exports) {
            var isObject = _dereq_("./_is-object"),
                floor = Math.floor;
            module.exports = function isInteger(it) {
                return !isObject(it) && isFinite(it) && floor(it) === it
            }
        }, {
            "./_is-object": 75
        }],
        75: [function(_dereq_, module, exports) {
            module.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function"
            }
        }, {}],
        76: [function(_dereq_, module, exports) {
            var anObject = _dereq_("./_an-object");
            module.exports = function(iterator, fn, value, entries) {
                try {
                    return entries ? fn(anObject(value)[0], value[1]) : fn(value)
                } catch (e) {
                    var ret = iterator["return"];
                    if (ret !== undefined) anObject(ret.call(iterator));
                    throw e
                }
            }
        }, {
            "./_an-object": 44
        }],
        77: [function(_dereq_, module, exports) {
            "use strict";
            var create = _dereq_("./_object-create"),
                descriptor = _dereq_("./_property-desc"),
                setToStringTag = _dereq_("./_set-to-string-tag"),
                IteratorPrototype = {};
            _dereq_("./_hide")(IteratorPrototype, _dereq_("./_wks")("iterator"), function() {
                return this
            });
            module.exports = function(Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, {
                    next: descriptor(1, next)
                });
                setToStringTag(Constructor, NAME + " Iterator")
            }
        }, {
            "./_hide": 68,
            "./_object-create": 85,
            "./_property-desc": 97,
            "./_set-to-string-tag": 102,
            "./_wks": 115
        }],
        78: [function(_dereq_, module, exports) {
            "use strict";
            var LIBRARY = _dereq_("./_library"),
                $export = _dereq_("./_export"),
                redefine = _dereq_("./_redefine"),
                hide = _dereq_("./_hide"),
                has = _dereq_("./_has"),
                Iterators = _dereq_("./_iterators"),
                $iterCreate = _dereq_("./_iter-create"),
                setToStringTag = _dereq_("./_set-to-string-tag"),
                getPrototypeOf = _dereq_("./_object-gpo"),
                ITERATOR = _dereq_("./_wks")("iterator"),
                BUGGY = !([].keys && "next" in [].keys()),
                FF_ITERATOR = "@@iterator",
                KEYS = "keys",
                VALUES = "values";
            var returnThis = function() {
                return this
            };
            module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function(kind) {
                    if (!BUGGY && kind in proto) return proto[kind];
                    switch (kind) {
                        case KEYS:
                            return function keys() {
                                return new Constructor(this, kind)
                            };
                        case VALUES:
                            return function values() {
                                return new Constructor(this, kind)
                            }
                    }
                    return function entries() {
                        return new Constructor(this, kind)
                    }
                };
                var TAG = NAME + " Iterator",
                    DEF_VALUES = DEFAULT == VALUES,
                    VALUES_BUG = false,
                    proto = Base.prototype,
                    $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
                    $default = $native || getMethod(DEFAULT),
                    $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined,
                    $anyNative = NAME == "Array" ? proto.entries || $native : $native,
                    methods, key, IteratorPrototype;
                if ($anyNative) {
                    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
                    if (IteratorPrototype !== Object.prototype) {
                        setToStringTag(IteratorPrototype, TAG, true);
                        if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis)
                    }
                }
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call(this)
                    }
                }
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                    hide(proto, ITERATOR, $default)
                }
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                    methods = {
                        values: DEF_VALUES ? $default : getMethod(VALUES),
                        keys: IS_SET ? $default : getMethod(KEYS),
                        entries: $entries
                    };
                    if (FORCED)
                        for (key in methods) {
                            if (!(key in proto)) redefine(proto, key, methods[key])
                        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods)
                }
                return methods
            }
        }, {
            "./_export": 63,
            "./_has": 67,
            "./_hide": 68,
            "./_iter-create": 77,
            "./_iterators": 81,
            "./_library": 83,
            "./_object-gpo": 92,
            "./_redefine": 99,
            "./_set-to-string-tag": 102,
            "./_wks": 115
        }],
        79: [function(_dereq_, module, exports) {
            var ITERATOR = _dereq_("./_wks")("iterator"),
                SAFE_CLOSING = false;
            try {
                var riter = [7][ITERATOR]();
                riter["return"] = function() {
                    SAFE_CLOSING = true
                };
                Array.from(riter, function() {
                    throw 2
                })
            } catch (e) {}
            module.exports = function(exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING) return false;
                var safe = false;
                try {
                    var arr = [7],
                        iter = arr[ITERATOR]();
                    iter.next = function() {
                        return {
                            done: safe = true
                        }
                    };
                    arr[ITERATOR] = function() {
                        return iter
                    };
                    exec(arr)
                } catch (e) {}
                return safe
            }
        }, {
            "./_wks": 115
        }],
        80: [function(_dereq_, module, exports) {
            module.exports = function(done, value) {
                return {
                    value: value,
                    done: !!done
                }
            }
        }, {}],
        81: [function(_dereq_, module, exports) {
            module.exports = {}
        }, {}],
        82: [function(_dereq_, module, exports) {
            var getKeys = _dereq_("./_object-keys"),
                toIObject = _dereq_("./_to-iobject");
            module.exports = function(object, el) {
                var O = toIObject(object),
                    keys = getKeys(O),
                    length = keys.length,
                    index = 0,
                    key;
                while (length > index)
                    if (O[key = keys[index++]] === el) return key
            }
        }, {
            "./_object-keys": 94,
            "./_to-iobject": 108
        }],
        83: [function(_dereq_, module, exports) {
            module.exports = true
        }, {}],
        84: [function(_dereq_, module, exports) {
            var META = _dereq_("./_uid")("meta"),
                isObject = _dereq_("./_is-object"),
                has = _dereq_("./_has"),
                setDesc = _dereq_("./_object-dp").f,
                id = 0;
            var isExtensible = Object.isExtensible || function() {
                return true
            };
            var FREEZE = !_dereq_("./_fails")(function() {
                return isExtensible(Object.preventExtensions({}))
            });
            var setMeta = function(it) {
                setDesc(it, META, {
                    value: {
                        i: "O" + ++id,
                        w: {}
                    }
                })
            };
            var fastKey = function(it, create) {
                if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
                if (!has(it, META)) {
                    if (!isExtensible(it)) return "F";
                    if (!create) return "E";
                    setMeta(it)
                }
                return it[META].i
            };
            var getWeak = function(it, create) {
                if (!has(it, META)) {
                    if (!isExtensible(it)) return true;
                    if (!create) return false;
                    setMeta(it)
                }
                return it[META].w
            };
            var onFreeze = function(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
                return it
            };
            var meta = module.exports = {
                KEY: META,
                NEED: false,
                fastKey: fastKey,
                getWeak: getWeak,
                onFreeze: onFreeze
            }
        }, {
            "./_fails": 64,
            "./_has": 67,
            "./_is-object": 75,
            "./_object-dp": 86,
            "./_uid": 112
        }],
        85: [function(_dereq_, module, exports) {
            var anObject = _dereq_("./_an-object"),
                dPs = _dereq_("./_object-dps"),
                enumBugKeys = _dereq_("./_enum-bug-keys"),
                IE_PROTO = _dereq_("./_shared-key")("IE_PROTO"),
                Empty = function() {},
                PROTOTYPE = "prototype";
            var createDict = function() {
                var iframe = _dereq_("./_dom-create")("iframe"),
                    i = enumBugKeys.length,
                    lt = "<",
                    gt = ">",
                    iframeDocument;
                iframe.style.display = "none";
                _dereq_("./_html").appendChild(iframe);
                iframe.src = "javascript:";
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict()
            };
            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty;
                    Empty[PROTOTYPE] = null;
                    result[IE_PROTO] = O
                } else result = createDict();
                return Properties === undefined ? result : dPs(result, Properties)
            }
        }, {
            "./_an-object": 44,
            "./_dom-create": 60,
            "./_enum-bug-keys": 61,
            "./_html": 69,
            "./_object-dps": 87,
            "./_shared-key": 103
        }],
        86: [function(_dereq_, module, exports) {
            var anObject = _dereq_("./_an-object"),
                IE8_DOM_DEFINE = _dereq_("./_ie8-dom-define"),
                toPrimitive = _dereq_("./_to-primitive"),
                dP = Object.defineProperty;
            exports.f = _dereq_("./_descriptors") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return dP(O, P, Attributes)
                } catch (e) {}
                if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O
            }
        }, {
            "./_an-object": 44,
            "./_descriptors": 59,
            "./_ie8-dom-define": 70,
            "./_to-primitive": 111
        }],
        87: [function(_dereq_, module, exports) {
            var dP = _dereq_("./_object-dp"),
                anObject = _dereq_("./_an-object"),
                getKeys = _dereq_("./_object-keys");
            module.exports = _dereq_("./_descriptors") ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties),
                    length = keys.length,
                    i = 0,
                    P;
                while (length > i) dP.f(O, P = keys[i++], Properties[P]);
                return O
            }
        }, {
            "./_an-object": 44,
            "./_descriptors": 59,
            "./_object-dp": 86,
            "./_object-keys": 94
        }],
        88: [function(_dereq_, module, exports) {
            var pIE = _dereq_("./_object-pie"),
                createDesc = _dereq_("./_property-desc"),
                toIObject = _dereq_("./_to-iobject"),
                toPrimitive = _dereq_("./_to-primitive"),
                has = _dereq_("./_has"),
                IE8_DOM_DEFINE = _dereq_("./_ie8-dom-define"),
                gOPD = Object.getOwnPropertyDescriptor;
            exports.f = _dereq_("./_descriptors") ? gOPD : function getOwnPropertyDescriptor(O, P) {
                O = toIObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE) try {
                    return gOPD(O, P)
                } catch (e) {}
                if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P])
            }
        }, {
            "./_descriptors": 59,
            "./_has": 67,
            "./_ie8-dom-define": 70,
            "./_object-pie": 95,
            "./_property-desc": 97,
            "./_to-iobject": 108,
            "./_to-primitive": 111
        }],
        89: [function(_dereq_, module, exports) {
            var toIObject = _dereq_("./_to-iobject"),
                gOPN = _dereq_("./_object-gopn").f,
                toString = {}.toString;
            var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            var getWindowNames = function(it) {
                try {
                    return gOPN(it)
                } catch (e) {
                    return windowNames.slice()
                }
            };
            module.exports.f = function getOwnPropertyNames(it) {
                return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it))
            }
        }, {
            "./_object-gopn": 90,
            "./_to-iobject": 108
        }],
        90: [function(_dereq_, module, exports) {
            var $keys = _dereq_("./_object-keys-internal"),
                hiddenKeys = _dereq_("./_enum-bug-keys").concat("length", "prototype");
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return $keys(O, hiddenKeys)
            }
        }, {
            "./_enum-bug-keys": 61,
            "./_object-keys-internal": 93
        }],
        91: [function(_dereq_, module, exports) {
            exports.f = Object.getOwnPropertySymbols
        }, {}],
        92: [function(_dereq_, module, exports) {
            var has = _dereq_("./_has"),
                toObject = _dereq_("./_to-object"),
                IE_PROTO = _dereq_("./_shared-key")("IE_PROTO"),
                ObjectProto = Object.prototype;
            module.exports = Object.getPrototypeOf || function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == "function" && O instanceof O.constructor) {
                    return O.constructor.prototype
                }
                return O instanceof Object ? ObjectProto : null
            }
        }, {
            "./_has": 67,
            "./_shared-key": 103,
            "./_to-object": 110
        }],
        93: [function(_dereq_, module, exports) {
            var has = _dereq_("./_has"),
                toIObject = _dereq_("./_to-iobject"),
                arrayIndexOf = _dereq_("./_array-includes")(false),
                IE_PROTO = _dereq_("./_shared-key")("IE_PROTO");
            module.exports = function(object, names) {
                var O = toIObject(object),
                    i = 0,
                    result = [],
                    key;
                for (key in O)
                    if (key != IE_PROTO) has(O, key) && result.push(key);
                while (names.length > i)
                    if (has(O, key = names[i++])) {
                        ~arrayIndexOf(result, key) || result.push(key)
                    }
                return result
            }
        }, {
            "./_array-includes": 46,
            "./_has": 67,
            "./_shared-key": 103,
            "./_to-iobject": 108
        }],
        94: [function(_dereq_, module, exports) {
            var $keys = _dereq_("./_object-keys-internal"),
                enumBugKeys = _dereq_("./_enum-bug-keys");
            module.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys)
            }
        }, {
            "./_enum-bug-keys": 61,
            "./_object-keys-internal": 93
        }],
        95: [function(_dereq_, module, exports) {
            exports.f = {}.propertyIsEnumerable
        }, {}],
        96: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export"),
                core = _dereq_("./_core"),
                fails = _dereq_("./_fails");
            module.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY],
                    exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1)
                }), "Object", exp)
            }
        }, {
            "./_core": 55,
            "./_export": 63,
            "./_fails": 64
        }],
        97: [function(_dereq_, module, exports) {
            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                }
            }
        }, {}],
        98: [function(_dereq_, module, exports) {
            var hide = _dereq_("./_hide");
            module.exports = function(target, src, safe) {
                for (var key in src) {
                    if (safe && target[key]) target[key] = src[key];
                    else hide(target, key, src[key])
                }
                return target
            }
        }, {
            "./_hide": 68
        }],
        99: [function(_dereq_, module, exports) {
            module.exports = _dereq_("./_hide")
        }, {
            "./_hide": 68
        }],
        100: [function(_dereq_, module, exports) {
            var isObject = _dereq_("./_is-object"),
                anObject = _dereq_("./_an-object");
            var check = function(O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!")
            };
            module.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(test, buggy, set) {
                    try {
                        set = _dereq_("./_ctx")(Function.call, _dereq_("./_object-gopd").f(Object.prototype, "__proto__").set, 2);
                        set(test, []);
                        buggy = !(test instanceof Array)
                    } catch (e) {
                        buggy = true
                    }
                    return function setPrototypeOf(O, proto) {
                        check(O, proto);
                        if (buggy) O.__proto__ = proto;
                        else set(O, proto);
                        return O
                    }
                }({}, false) : undefined),
                check: check
            }
        }, {
            "./_an-object": 44,
            "./_ctx": 57,
            "./_is-object": 75,
            "./_object-gopd": 88
        }],
        101: [function(_dereq_, module, exports) {
            "use strict";
            var global = _dereq_("./_global"),
                core = _dereq_("./_core"),
                dP = _dereq_("./_object-dp"),
                DESCRIPTORS = _dereq_("./_descriptors"),
                SPECIES = _dereq_("./_wks")("species");
            module.exports = function(KEY) {
                var C = typeof core[KEY] == "function" ? core[KEY] : global[KEY];
                if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                    configurable: true,
                    get: function() {
                        return this
                    }
                })
            }
        }, {
            "./_core": 55,
            "./_descriptors": 59,
            "./_global": 66,
            "./_object-dp": 86,
            "./_wks": 115
        }],
        102: [function(_dereq_, module, exports) {
            var def = _dereq_("./_object-dp").f,
                has = _dereq_("./_has"),
                TAG = _dereq_("./_wks")("toStringTag");
            module.exports = function(it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                    configurable: true,
                    value: tag
                })
            }
        }, {
            "./_has": 67,
            "./_object-dp": 86,
            "./_wks": 115
        }],
        103: [function(_dereq_, module, exports) {
            var shared = _dereq_("./_shared")("keys"),
                uid = _dereq_("./_uid");
            module.exports = function(key) {
                return shared[key] || (shared[key] = uid(key))
            }
        }, {
            "./_shared": 104,
            "./_uid": 112
        }],
        104: [function(_dereq_, module, exports) {
            var global = _dereq_("./_global"),
                SHARED = "__core-js_shared__",
                store = global[SHARED] || (global[SHARED] = {});
            module.exports = function(key) {
                return store[key] || (store[key] = {})
            }
        }, {
            "./_global": 66
        }],
        105: [function(_dereq_, module, exports) {
            var toInteger = _dereq_("./_to-integer"),
                defined = _dereq_("./_defined");
            module.exports = function(TO_STRING) {
                return function(that, pos) {
                    var s = String(defined(that)),
                        i = toInteger(pos),
                        l = s.length,
                        a, b;
                    if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
                    a = s.charCodeAt(i);
                    return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536
                }
            }
        }, {
            "./_defined": 58,
            "./_to-integer": 107
        }],
        106: [function(_dereq_, module, exports) {
            var toInteger = _dereq_("./_to-integer"),
                max = Math.max,
                min = Math.min;
            module.exports = function(index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length)
            }
        }, {
            "./_to-integer": 107
        }],
        107: [function(_dereq_, module, exports) {
            var ceil = Math.ceil,
                floor = Math.floor;
            module.exports = function(it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it)
            }
        }, {}],
        108: [function(_dereq_, module, exports) {
            var IObject = _dereq_("./_iobject"),
                defined = _dereq_("./_defined");
            module.exports = function(it) {
                return IObject(defined(it))
            }
        }, {
            "./_defined": 58,
            "./_iobject": 71
        }],
        109: [function(_dereq_, module, exports) {
            var toInteger = _dereq_("./_to-integer"),
                min = Math.min;
            module.exports = function(it) {
                return it > 0 ? min(toInteger(it), 9007199254740991) : 0
            }
        }, {
            "./_to-integer": 107
        }],
        110: [function(_dereq_, module, exports) {
            var defined = _dereq_("./_defined");
            module.exports = function(it) {
                return Object(defined(it))
            }
        }, {
            "./_defined": 58
        }],
        111: [function(_dereq_, module, exports) {
            var isObject = _dereq_("./_is-object");
            module.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof(fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                if (typeof(fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
                if (!S && typeof(fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value")
            }
        }, {
            "./_is-object": 75
        }],
        112: [function(_dereq_, module, exports) {
            var id = 0,
                px = Math.random();
            module.exports = function(key) {
                return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36))
            }
        }, {}],
        113: [function(_dereq_, module, exports) {
            var global = _dereq_("./_global"),
                core = _dereq_("./_core"),
                LIBRARY = _dereq_("./_library"),
                wksExt = _dereq_("./_wks-ext"),
                defineProperty = _dereq_("./_object-dp").f;
            module.exports = function(name) {
                var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
                if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, {
                    value: wksExt.f(name)
                })
            }
        }, {
            "./_core": 55,
            "./_global": 66,
            "./_library": 83,
            "./_object-dp": 86,
            "./_wks-ext": 114
        }],
        114: [function(_dereq_, module, exports) {
            exports.f = _dereq_("./_wks")
        }, {
            "./_wks": 115
        }],
        115: [function(_dereq_, module, exports) {
            var store = _dereq_("./_shared")("wks"),
                uid = _dereq_("./_uid"),
                Symbol = _dereq_("./_global").Symbol,
                USE_SYMBOL = typeof Symbol == "function";
            var $exports = module.exports = function(name) {
                return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
            };
            $exports.store = store
        }, {
            "./_global": 66,
            "./_shared": 104,
            "./_uid": 112
        }],
        116: [function(_dereq_, module, exports) {
            var classof = _dereq_("./_classof"),
                ITERATOR = _dereq_("./_wks")("iterator"),
                Iterators = _dereq_("./_iterators");
            module.exports = _dereq_("./_core").getIteratorMethod = function(it) {
                if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)]
            }
        }, {
            "./_classof": 50,
            "./_core": 55,
            "./_iterators": 81,
            "./_wks": 115
        }],
        117: [function(_dereq_, module, exports) {
            var anObject = _dereq_("./_an-object"),
                get = _dereq_("./core.get-iterator-method");
            module.exports = _dereq_("./_core").getIterator = function(it) {
                var iterFn = get(it);
                if (typeof iterFn != "function") throw TypeError(it + " is not iterable!");
                return anObject(iterFn.call(it))
            }
        }, {
            "./_an-object": 44,
            "./_core": 55,
            "./core.get-iterator-method": 116
        }],
        118: [function(_dereq_, module, exports) {
            "use strict";
            var ctx = _dereq_("./_ctx"),
                $export = _dereq_("./_export"),
                toObject = _dereq_("./_to-object"),
                call = _dereq_("./_iter-call"),
                isArrayIter = _dereq_("./_is-array-iter"),
                toLength = _dereq_("./_to-length"),
                createProperty = _dereq_("./_create-property"),
                getIterFn = _dereq_("./core.get-iterator-method");
            $export($export.S + $export.F * !_dereq_("./_iter-detect")(function(iter) {
                Array.from(iter)
            }), "Array", {
                from: function from(arrayLike) {
                    var O = toObject(arrayLike),
                        C = typeof this == "function" ? this : Array,
                        aLen = arguments.length,
                        mapfn = aLen > 1 ? arguments[1] : undefined,
                        mapping = mapfn !== undefined,
                        index = 0,
                        iterFn = getIterFn(O),
                        length, result, step, iterator;
                    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
                            createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value)
                        }
                    } else {
                        length = toLength(O.length);
                        for (result = new C(length); length > index; index++) {
                            createProperty(result, index, mapping ? mapfn(O[index], index) : O[index])
                        }
                    }
                    result.length = index;
                    return result
                }
            })
        }, {
            "./_create-property": 56,
            "./_ctx": 57,
            "./_export": 63,
            "./_is-array-iter": 72,
            "./_iter-call": 76,
            "./_iter-detect": 79,
            "./_to-length": 109,
            "./_to-object": 110,
            "./core.get-iterator-method": 116
        }],
        119: [function(_dereq_, module, exports) {
            "use strict";
            var addToUnscopables = _dereq_("./_add-to-unscopables"),
                step = _dereq_("./_iter-step"),
                Iterators = _dereq_("./_iterators"),
                toIObject = _dereq_("./_to-iobject");
            module.exports = _dereq_("./_iter-define")(Array, "Array", function(iterated, kind) {
                this._t = toIObject(iterated);
                this._i = 0;
                this._k = kind
            }, function() {
                var O = this._t,
                    kind = this._k,
                    index = this._i++;
                if (!O || index >= O.length) {
                    this._t = undefined;
                    return step(1)
                }
                if (kind == "keys") return step(0, index);
                if (kind == "values") return step(0, O[index]);
                return step(0, [index, O[index]])
            }, "values");
            Iterators.Arguments = Iterators.Array;
            addToUnscopables("keys");
            addToUnscopables("values");
            addToUnscopables("entries")
        }, {
            "./_add-to-unscopables": 42,
            "./_iter-define": 78,
            "./_iter-step": 80,
            "./_iterators": 81,
            "./_to-iobject": 108
        }],
        120: [function(_dereq_, module, exports) {
            "use strict";
            var strong = _dereq_("./_collection-strong");
            module.exports = _dereq_("./_collection")("Map", function(get) {
                return function Map() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined)
                }
            }, {
                get: function get(key) {
                    var entry = strong.getEntry(this, key);
                    return entry && entry.v
                },
                set: function set(key, value) {
                    return strong.def(this, key === 0 ? 0 : key, value)
                }
            }, strong, true)
        }, {
            "./_collection": 54,
            "./_collection-strong": 52
        }],
        121: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export"),
                _isFinite = _dereq_("./_global").isFinite;
            $export($export.S, "Number", {
                isFinite: function isFinite(it) {
                    return typeof it == "number" && _isFinite(it)
                }
            })
        }, {
            "./_export": 63,
            "./_global": 66
        }],
        122: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export");
            $export($export.S, "Number", {
                isInteger: _dereq_("./_is-integer")
            })
        }, {
            "./_export": 63,
            "./_is-integer": 74
        }],
        123: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export"),
                isInteger = _dereq_("./_is-integer"),
                abs = Math.abs;
            $export($export.S, "Number", {
                isSafeInteger: function isSafeInteger(number) {
                    return isInteger(number) && abs(number) <= 9007199254740991
                }
            })
        }, {
            "./_export": 63,
            "./_is-integer": 74
        }],
        124: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export");
            $export($export.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            })
        }, {
            "./_export": 63
        }],
        125: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export");
            $export($export.S, "Object", {
                create: _dereq_("./_object-create")
            })
        }, {
            "./_export": 63,
            "./_object-create": 85
        }],
        126: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export");
            $export($export.S + $export.F * !_dereq_("./_descriptors"), "Object", {
                defineProperty: _dereq_("./_object-dp").f
            })
        }, {
            "./_descriptors": 59,
            "./_export": 63,
            "./_object-dp": 86
        }],
        127: [function(_dereq_, module, exports) {
            var isObject = _dereq_("./_is-object"),
                meta = _dereq_("./_meta").onFreeze;
            _dereq_("./_object-sap")("freeze", function($freeze) {
                return function freeze(it) {
                    return $freeze && isObject(it) ? $freeze(meta(it)) : it
                }
            })
        }, {
            "./_is-object": 75,
            "./_meta": 84,
            "./_object-sap": 96
        }],
        128: [function(_dereq_, module, exports) {
            var toIObject = _dereq_("./_to-iobject"),
                $getOwnPropertyDescriptor = _dereq_("./_object-gopd").f;
            _dereq_("./_object-sap")("getOwnPropertyDescriptor", function() {
                return function getOwnPropertyDescriptor(it, key) {
                    return $getOwnPropertyDescriptor(toIObject(it), key)
                }
            })
        }, {
            "./_object-gopd": 88,
            "./_object-sap": 96,
            "./_to-iobject": 108
        }],
        129: [function(_dereq_, module, exports) {
            var toObject = _dereq_("./_to-object"),
                $getPrototypeOf = _dereq_("./_object-gpo");
            _dereq_("./_object-sap")("getPrototypeOf", function() {
                return function getPrototypeOf(it) {
                    return $getPrototypeOf(toObject(it))
                }
            })
        }, {
            "./_object-gpo": 92,
            "./_object-sap": 96,
            "./_to-object": 110
        }],
        130: [function(_dereq_, module, exports) {
            var isObject = _dereq_("./_is-object"),
                meta = _dereq_("./_meta").onFreeze;
            _dereq_("./_object-sap")("seal", function($seal) {
                return function seal(it) {
                    return $seal && isObject(it) ? $seal(meta(it)) : it
                }
            })
        }, {
            "./_is-object": 75,
            "./_meta": 84,
            "./_object-sap": 96
        }],
        131: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export");
            $export($export.S, "Object", {
                setPrototypeOf: _dereq_("./_set-proto").set
            })
        }, {
            "./_export": 63,
            "./_set-proto": 100
        }],
        132: [function(_dereq_, module, exports) {}, {}],
        133: [function(_dereq_, module, exports) {
            "use strict";
            var strong = _dereq_("./_collection-strong");
            module.exports = _dereq_("./_collection")("Set", function(get) {
                return function Set() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined)
                }
            }, {
                add: function add(value) {
                    return strong.def(this, value = value === 0 ? 0 : value, value)
                }
            }, strong)
        }, {
            "./_collection": 54,
            "./_collection-strong": 52
        }],
        134: [function(_dereq_, module, exports) {
            "use strict";
            var $at = _dereq_("./_string-at")(true);
            _dereq_("./_iter-define")(String, "String", function(iterated) {
                this._t = String(iterated);
                this._i = 0
            }, function() {
                var O = this._t,
                    index = this._i,
                    point;
                if (index >= O.length) return {
                    value: undefined,
                    done: true
                };
                point = $at(O, index);
                this._i += point.length;
                return {
                    value: point,
                    done: false
                }
            })
        }, {
            "./_iter-define": 78,
            "./_string-at": 105
        }],
        135: [function(_dereq_, module, exports) {
            "use strict";
            var global = _dereq_("./_global"),
                has = _dereq_("./_has"),
                DESCRIPTORS = _dereq_("./_descriptors"),
                $export = _dereq_("./_export"),
                redefine = _dereq_("./_redefine"),
                META = _dereq_("./_meta").KEY,
                $fails = _dereq_("./_fails"),
                shared = _dereq_("./_shared"),
                setToStringTag = _dereq_("./_set-to-string-tag"),
                uid = _dereq_("./_uid"),
                wks = _dereq_("./_wks"),
                wksExt = _dereq_("./_wks-ext"),
                wksDefine = _dereq_("./_wks-define"),
                keyOf = _dereq_("./_keyof"),
                enumKeys = _dereq_("./_enum-keys"),
                isArray = _dereq_("./_is-array"),
                anObject = _dereq_("./_an-object"),
                toIObject = _dereq_("./_to-iobject"),
                toPrimitive = _dereq_("./_to-primitive"),
                createDesc = _dereq_("./_property-desc"),
                _create = _dereq_("./_object-create"),
                gOPNExt = _dereq_("./_object-gopn-ext"),
                $GOPD = _dereq_("./_object-gopd"),
                $DP = _dereq_("./_object-dp"),
                $keys = _dereq_("./_object-keys"),
                gOPD = $GOPD.f,
                dP = $DP.f,
                gOPN = gOPNExt.f,
                $Symbol = global.Symbol,
                $JSON = global.JSON,
                _stringify = $JSON && $JSON.stringify,
                PROTOTYPE = "prototype",
                HIDDEN = wks("_hidden"),
                TO_PRIMITIVE = wks("toPrimitive"),
                isEnum = {}.propertyIsEnumerable,
                SymbolRegistry = shared("symbol-registry"),
                AllSymbols = shared("symbols"),
                OPSymbols = shared("op-symbols"),
                ObjectProto = Object[PROTOTYPE],
                USE_NATIVE = typeof $Symbol == "function",
                QObject = global.QObject;
            var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
            var setSymbolDesc = DESCRIPTORS && $fails(function() {
                return _create(dP({}, "a", {
                    get: function() {
                        return dP(this, "a", {
                            value: 7
                        }).a
                    }
                })).a != 7
            }) ? function(it, key, D) {
                var protoDesc = gOPD(ObjectProto, key);
                if (protoDesc) delete ObjectProto[key];
                dP(it, key, D);
                if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc)
            } : dP;
            var wrap = function(tag) {
                var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
                sym._k = tag;
                return sym
            };
            var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
                return typeof it == "symbol"
            } : function(it) {
                return it instanceof $Symbol
            };
            var $defineProperty = function defineProperty(it, key, D) {
                if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
                anObject(it);
                key = toPrimitive(key, true);
                anObject(D);
                if (has(AllSymbols, key)) {
                    if (!D.enumerable) {
                        if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                        it[HIDDEN][key] = true
                    } else {
                        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                        D = _create(D, {
                            enumerable: createDesc(0, false)
                        })
                    }
                    return setSymbolDesc(it, key, D)
                }
                return dP(it, key, D)
            };
            var $defineProperties = function defineProperties(it, P) {
                anObject(it);
                var keys = enumKeys(P = toIObject(P)),
                    i = 0,
                    l = keys.length,
                    key;
                while (l > i) $defineProperty(it, key = keys[i++], P[key]);
                return it
            };
            var $create = function create(it, P) {
                return P === undefined ? _create(it) : $defineProperties(_create(it), P)
            };
            var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                var E = isEnum.call(this, key = toPrimitive(key, true));
                if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
                return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true
            };
            var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                it = toIObject(it);
                key = toPrimitive(key, true);
                if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
                var D = gOPD(it, key);
                if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                return D
            };
            var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                var names = gOPN(toIObject(it)),
                    result = [],
                    i = 0,
                    key;
                while (names.length > i) {
                    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key)
                }
                return result
            };
            var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                var IS_OP = it === ObjectProto,
                    names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
                    result = [],
                    i = 0,
                    key;
                while (names.length > i) {
                    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key])
                }
                return result
            };
            if (!USE_NATIVE) {
                $Symbol = function Symbol() {
                    if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
                    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                    var $set = function(value) {
                        if (this === ObjectProto) $set.call(OPSymbols, value);
                        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                        setSymbolDesc(this, tag, createDesc(1, value))
                    };
                    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
                        configurable: true,
                        set: $set
                    });
                    return wrap(tag)
                };
                redefine($Symbol[PROTOTYPE], "toString", function toString() {
                    return this._k
                });
                $GOPD.f = $getOwnPropertyDescriptor;
                $DP.f = $defineProperty;
                _dereq_("./_object-gopn").f = gOPNExt.f = $getOwnPropertyNames;
                _dereq_("./_object-pie").f = $propertyIsEnumerable;
                _dereq_("./_object-gops").f = $getOwnPropertySymbols;
                if (DESCRIPTORS && !_dereq_("./_library")) {
                    redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true)
                }
                wksExt.f = function(name) {
                    return wrap(wks(name))
                }
            }
            $export($export.G + $export.W + $export.F * !USE_NATIVE, {
                Symbol: $Symbol
            });
            for (var symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), i = 0; symbols.length > i;) wks(symbols[i++]);
            for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) wksDefine(symbols[i++]);
            $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
                for: function(key) {
                    return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key)
                },
                keyFor: function keyFor(key) {
                    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
                    throw TypeError(key + " is not a symbol!")
                },
                useSetter: function() {
                    setter = true
                },
                useSimple: function() {
                    setter = false
                }
            });
            $export($export.S + $export.F * !USE_NATIVE, "Object", {
                create: $create,
                defineProperty: $defineProperty,
                defineProperties: $defineProperties,
                getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                getOwnPropertyNames: $getOwnPropertyNames,
                getOwnPropertySymbols: $getOwnPropertySymbols
            });
            $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
                var S = $Symbol();
                return _stringify([S]) != "[null]" || _stringify({
                    a: S
                }) != "{}" || _stringify(Object(S)) != "{}"
            })), "JSON", {
                stringify: function stringify(it) {
                    if (it === undefined || isSymbol(it)) return;
                    var args = [it],
                        i = 1,
                        replacer, $replacer;
                    while (arguments.length > i) args.push(arguments[i++]);
                    replacer = args[1];
                    if (typeof replacer == "function") $replacer = replacer;
                    if ($replacer || !isArray(replacer)) replacer = function(key, value) {
                        if ($replacer) value = $replacer.call(this, key, value);
                        if (!isSymbol(value)) return value
                    };
                    args[1] = replacer;
                    return _stringify.apply($JSON, args)
                }
            });
            $Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_("./_hide")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
            setToStringTag($Symbol, "Symbol");
            setToStringTag(Math, "Math", true);
            setToStringTag(global.JSON, "JSON", true)
        }, {
            "./_an-object": 44,
            "./_descriptors": 59,
            "./_enum-keys": 62,
            "./_export": 63,
            "./_fails": 64,
            "./_global": 66,
            "./_has": 67,
            "./_hide": 68,
            "./_is-array": 73,
            "./_keyof": 82,
            "./_library": 83,
            "./_meta": 84,
            "./_object-create": 85,
            "./_object-dp": 86,
            "./_object-gopd": 88,
            "./_object-gopn": 90,
            "./_object-gopn-ext": 89,
            "./_object-gops": 91,
            "./_object-keys": 94,
            "./_object-pie": 95,
            "./_property-desc": 97,
            "./_redefine": 99,
            "./_set-to-string-tag": 102,
            "./_shared": 104,
            "./_to-iobject": 108,
            "./_to-primitive": 111,
            "./_uid": 112,
            "./_wks": 115,
            "./_wks-define": 113,
            "./_wks-ext": 114
        }],
        136: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export");
            $export($export.P + $export.R, "Map", {
                toJSON: _dereq_("./_collection-to-json")("Map")
            })
        }, {
            "./_collection-to-json": 53,
            "./_export": 63
        }],
        137: [function(_dereq_, module, exports) {
            var $export = _dereq_("./_export");
            $export($export.P + $export.R, "Set", {
                toJSON: _dereq_("./_collection-to-json")("Set")
            })
        }, {
            "./_collection-to-json": 53,
            "./_export": 63
        }],
        138: [function(_dereq_, module, exports) {
            _dereq_("./_wks-define")("asyncIterator")
        }, {
            "./_wks-define": 113
        }],
        139: [function(_dereq_, module, exports) {
            _dereq_("./_wks-define")("observable")
        }, {
            "./_wks-define": 113
        }],
        140: [function(_dereq_, module, exports) {
            _dereq_("./es6.array.iterator");
            var global = _dereq_("./_global"),
                hide = _dereq_("./_hide"),
                Iterators = _dereq_("./_iterators"),
                TO_STRING_TAG = _dereq_("./_wks")("toStringTag");
            for (var collections = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], i = 0; i < 5; i++) {
                var NAME = collections[i],
                    Collection = global[NAME],
                    proto = Collection && Collection.prototype;
                if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = Iterators.Array
            }
        }, {
            "./_global": 66,
            "./_hide": 68,
            "./_iterators": 81,
            "./_wks": 115,
            "./es6.array.iterator": 119
        }],
        141: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SetBuddyVariablesRequest = exports.RemoveBuddyRequest = exports.InitBuddyListRequest = exports.GoOnlineRequest = exports.BuddyMessageRequest = exports.BlockBuddyRequest = exports.AddBuddyRequest = exports.SetUserPositionRequest = exports.QuickJoinGameRequest = exports.JoinRoomInvitationRequest = exports.InviteUsersRequest = exports.InvitationReplyRequest = exports.CreateSFSGameRequest = exports.BanUserRequest = exports.KickUserRequest = exports.ExtensionRequest = exports.FindUsersRequest = exports.FindRoomsRequest = exports.PlayerToSpectatorRequest = exports.SpectatorToPlayerRequest = exports.UnsubscribeRoomGroupRequest = exports.SubscribeRoomGroupRequest = exports.SetUserVariablesRequest = exports.SetRoomVariablesRequest = exports.AdminMessageRequest = exports.ModeratorMessageRequest = exports.ObjectMessageRequest = exports.PrivateMessageRequest = exports.PublicMessageRequest = exports.ChangeRoomCapacityRequest = exports.ChangeRoomPasswordStateRequest = exports.ChangeRoomNameRequest = exports.LeaveRoomRequest = exports.CreateRoomRequest = exports.JoinRoomRequest = exports.LogoutRequest = exports.LoginRequest = exports.ClientDisconnectionReason = exports.LoggerEvent = exports.LogLevel = exports.SFSErrorCodes = exports.MessageRecipientMode = exports.BanMode = exports.MapLimits = exports.RoomExtension = exports.RoomEvents = exports.RoomPermissions = exports.MMORoomSettings = exports.SFSGameSettings = exports.RoomSettings = exports.UserProperties = exports.RoomProperties = exports.StringMatch = exports.NumberMatch = exports.BoolMatch = exports.LogicOperator = exports.MatchExpression = exports.MMOItemVariable = exports.ReservedBuddyVariables = exports.SFSBuddyVariable = exports.ReservedRoomVariables = exports.SFSRoomVariable = exports.SFSUserVariable = exports.VariableType = exports.UserPrivileges = exports.InvitationReply = exports.Vec3D = exports.SFSArray = exports.SFSObject = exports.SFSDataType = exports.SFSBuddyEvent = exports.SFSEvent = exports.SmartFox = undefined;
            var _SmartFox = _dereq_("./SmartFox");
            Object.defineProperty(exports, "SmartFox", {
                enumerable: true,
                get: function get() {
                    return _SmartFox.SmartFox
                }
            });
            var _Events = _dereq_("./core/Events");
            Object.defineProperty(exports, "SFSEvent", {
                enumerable: true,
                get: function get() {
                    return _Events.SFSEvent
                }
            });
            Object.defineProperty(exports, "SFSBuddyEvent", {
                enumerable: true,
                get: function get() {
                    return _Events.SFSBuddyEvent
                }
            });
            var _Data = _dereq_("./entities/Data");
            Object.defineProperty(exports, "SFSDataType", {
                enumerable: true,
                get: function get() {
                    return _Data.SFSDataType
                }
            });
            Object.defineProperty(exports, "SFSObject", {
                enumerable: true,
                get: function get() {
                    return _Data.SFSObject
                }
            });
            Object.defineProperty(exports, "SFSArray", {
                enumerable: true,
                get: function get() {
                    return _Data.SFSArray
                }
            });
            Object.defineProperty(exports, "Vec3D", {
                enumerable: true,
                get: function get() {
                    return _Data.Vec3D
                }
            });
            var _Invitation = _dereq_("./entities/Invitation");
            Object.defineProperty(exports, "InvitationReply", {
                enumerable: true,
                get: function get() {
                    return _Invitation.InvitationReply
                }
            });
            var _User = _dereq_("./entities/objects/User");
            Object.defineProperty(exports, "UserPrivileges", {
                enumerable: true,
                get: function get() {
                    return _User.UserPrivileges
                }
            });
            var _Variable = _dereq_("./entities/variables/Variable");
            Object.defineProperty(exports, "VariableType", {
                enumerable: true,
                get: function get() {
                    return _Variable.VariableType
                }
            });
            var _UserVariable = _dereq_("./entities/variables/UserVariable");
            Object.defineProperty(exports, "SFSUserVariable", {
                enumerable: true,
                get: function get() {
                    return _UserVariable.SFSUserVariable
                }
            });
            var _RoomVariable = _dereq_("./entities/variables/RoomVariable");
            Object.defineProperty(exports, "SFSRoomVariable", {
                enumerable: true,
                get: function get() {
                    return _RoomVariable.SFSRoomVariable
                }
            });
            Object.defineProperty(exports, "ReservedRoomVariables", {
                enumerable: true,
                get: function get() {
                    return _RoomVariable.ReservedRoomVariables
                }
            });
            var _BuddyVariable = _dereq_("./entities/variables/BuddyVariable");
            Object.defineProperty(exports, "SFSBuddyVariable", {
                enumerable: true,
                get: function get() {
                    return _BuddyVariable.SFSBuddyVariable
                }
            });
            Object.defineProperty(exports, "ReservedBuddyVariables", {
                enumerable: true,
                get: function get() {
                    return _BuddyVariable.ReservedBuddyVariables
                }
            });
            var _ItemVariable = _dereq_("./entities/variables/ItemVariable");
            Object.defineProperty(exports, "MMOItemVariable", {
                enumerable: true,
                get: function get() {
                    return _ItemVariable.MMOItemVariable
                }
            });
            var _MatchExpression = _dereq_("./entities/match/MatchExpression");
            Object.defineProperty(exports, "MatchExpression", {
                enumerable: true,
                get: function get() {
                    return _MatchExpression.MatchExpression
                }
            });
            Object.defineProperty(exports, "LogicOperator", {
                enumerable: true,
                get: function get() {
                    return _MatchExpression.LogicOperator
                }
            });
            var _Conditions = _dereq_("./entities/match/Conditions");
            Object.defineProperty(exports, "BoolMatch", {
                enumerable: true,
                get: function get() {
                    return _Conditions.BoolMatch
                }
            });
            Object.defineProperty(exports, "NumberMatch", {
                enumerable: true,
                get: function get() {
                    return _Conditions.NumberMatch
                }
            });
            Object.defineProperty(exports, "StringMatch", {
                enumerable: true,
                get: function get() {
                    return _Conditions.StringMatch
                }
            });
            var _Properties = _dereq_("./entities/match/Properties");
            Object.defineProperty(exports, "RoomProperties", {
                enumerable: true,
                get: function get() {
                    return _Properties.RoomProperties
                }
            });
            Object.defineProperty(exports, "UserProperties", {
                enumerable: true,
                get: function get() {
                    return _Properties.UserProperties
                }
            });
            var _Settings = _dereq_("./requests/Settings");
            Object.defineProperty(exports, "RoomSettings", {
                enumerable: true,
                get: function get() {
                    return _Settings.RoomSettings
                }
            });
            Object.defineProperty(exports, "SFSGameSettings", {
                enumerable: true,
                get: function get() {
                    return _Settings.SFSGameSettings
                }
            });
            Object.defineProperty(exports, "MMORoomSettings", {
                enumerable: true,
                get: function get() {
                    return _Settings.MMORoomSettings
                }
            });
            Object.defineProperty(exports, "RoomPermissions", {
                enumerable: true,
                get: function get() {
                    return _Settings.RoomPermissions
                }
            });
            Object.defineProperty(exports, "RoomEvents", {
                enumerable: true,
                get: function get() {
                    return _Settings.RoomEvents
                }
            });
            Object.defineProperty(exports, "RoomExtension", {
                enumerable: true,
                get: function get() {
                    return _Settings.RoomExtension
                }
            });
            Object.defineProperty(exports, "MapLimits", {
                enumerable: true,
                get: function get() {
                    return _Settings.MapLimits
                }
            });
            Object.defineProperty(exports, "BanMode", {
                enumerable: true,
                get: function get() {
                    return _Settings.BanMode
                }
            });
            Object.defineProperty(exports, "MessageRecipientMode", {
                enumerable: true,
                get: function get() {
                    return _Settings.MessageRecipientMode
                }
            });
            var _ErrorCodes = _dereq_("./utils/ErrorCodes");
            Object.defineProperty(exports, "SFSErrorCodes", {
                enumerable: true,
                get: function get() {
                    return _ErrorCodes.SFSErrorCodes
                }
            });
            var _Logging = _dereq_("./utils/Logging");
            Object.defineProperty(exports, "LogLevel", {
                enumerable: true,
                get: function get() {
                    return _Logging.LogLevel
                }
            });
            Object.defineProperty(exports, "LoggerEvent", {
                enumerable: true,
                get: function get() {
                    return _Logging.LoggerEvent
                }
            });
            var _Miscellanea = _dereq_("./utils/Miscellanea");
            Object.defineProperty(exports, "ClientDisconnectionReason", {
                enumerable: true,
                get: function get() {
                    return _Miscellanea.ClientDisconnectionReason
                }
            });
            var _Login = _dereq_("./requests/system/Login");
            Object.defineProperty(exports, "LoginRequest", {
                enumerable: true,
                get: function get() {
                    return _Login.LoginRequest
                }
            });
            var _Logout = _dereq_("./requests/system/Logout");
            Object.defineProperty(exports, "LogoutRequest", {
                enumerable: true,
                get: function get() {
                    return _Logout.LogoutRequest
                }
            });
            var _JoinRoom = _dereq_("./requests/system/JoinRoom");
            Object.defineProperty(exports, "JoinRoomRequest", {
                enumerable: true,
                get: function get() {
                    return _JoinRoom.JoinRoomRequest
                }
            });
            var _CreateRoom = _dereq_("./requests/system/CreateRoom");
            Object.defineProperty(exports, "CreateRoomRequest", {
                enumerable: true,
                get: function get() {
                    return _CreateRoom.CreateRoomRequest
                }
            });
            var _LeaveRoom = _dereq_("./requests/system/LeaveRoom");
            Object.defineProperty(exports, "LeaveRoomRequest", {
                enumerable: true,
                get: function get() {
                    return _LeaveRoom.LeaveRoomRequest
                }
            });
            var _ChangeRoomName = _dereq_("./requests/system/ChangeRoomName");
            Object.defineProperty(exports, "ChangeRoomNameRequest", {
                enumerable: true,
                get: function get() {
                    return _ChangeRoomName.ChangeRoomNameRequest
                }
            });
            var _ChangeRoomPasswordState = _dereq_("./requests/system/ChangeRoomPasswordState");
            Object.defineProperty(exports, "ChangeRoomPasswordStateRequest", {
                enumerable: true,
                get: function get() {
                    return _ChangeRoomPasswordState.ChangeRoomPasswordStateRequest
                }
            });
            var _ChangeRoomCapacity = _dereq_("./requests/system/ChangeRoomCapacity");
            Object.defineProperty(exports, "ChangeRoomCapacityRequest", {
                enumerable: true,
                get: function get() {
                    return _ChangeRoomCapacity.ChangeRoomCapacityRequest
                }
            });
            var _Message = _dereq_("./requests/system/Message");
            Object.defineProperty(exports, "PublicMessageRequest", {
                enumerable: true,
                get: function get() {
                    return _Message.PublicMessageRequest
                }
            });
            Object.defineProperty(exports, "PrivateMessageRequest", {
                enumerable: true,
                get: function get() {
                    return _Message.PrivateMessageRequest
                }
            });
            Object.defineProperty(exports, "ObjectMessageRequest", {
                enumerable: true,
                get: function get() {
                    return _Message.ObjectMessageRequest
                }
            });
            Object.defineProperty(exports, "ModeratorMessageRequest", {
                enumerable: true,
                get: function get() {
                    return _Message.ModeratorMessageRequest
                }
            });
            Object.defineProperty(exports, "AdminMessageRequest", {
                enumerable: true,
                get: function get() {
                    return _Message.AdminMessageRequest
                }
            });
            var _SetRoomVariables = _dereq_("./requests/system/SetRoomVariables");
            Object.defineProperty(exports, "SetRoomVariablesRequest", {
                enumerable: true,
                get: function get() {
                    return _SetRoomVariables.SetRoomVariablesRequest
                }
            });
            var _SetUserVariables = _dereq_("./requests/system/SetUserVariables");
            Object.defineProperty(exports, "SetUserVariablesRequest", {
                enumerable: true,
                get: function get() {
                    return _SetUserVariables.SetUserVariablesRequest
                }
            });
            var _SubscribeRoomGroup = _dereq_("./requests/system/SubscribeRoomGroup");
            Object.defineProperty(exports, "SubscribeRoomGroupRequest", {
                enumerable: true,
                get: function get() {
                    return _SubscribeRoomGroup.SubscribeRoomGroupRequest
                }
            });
            var _UnsubscribeRoomGroup = _dereq_("./requests/system/UnsubscribeRoomGroup");
            Object.defineProperty(exports, "UnsubscribeRoomGroupRequest", {
                enumerable: true,
                get: function get() {
                    return _UnsubscribeRoomGroup.UnsubscribeRoomGroupRequest
                }
            });
            var _SpectatorToPlayer = _dereq_("./requests/system/SpectatorToPlayer");
            Object.defineProperty(exports, "SpectatorToPlayerRequest", {
                enumerable: true,
                get: function get() {
                    return _SpectatorToPlayer.SpectatorToPlayerRequest
                }
            });
            var _PlayerToSpectator = _dereq_("./requests/system/PlayerToSpectator");
            Object.defineProperty(exports, "PlayerToSpectatorRequest", {
                enumerable: true,
                get: function get() {
                    return _PlayerToSpectator.PlayerToSpectatorRequest
                }
            });
            var _FindRooms = _dereq_("./requests/system/FindRooms");
            Object.defineProperty(exports, "FindRoomsRequest", {
                enumerable: true,
                get: function get() {
                    return _FindRooms.FindRoomsRequest
                }
            });
            var _FindUsers = _dereq_("./requests/system/FindUsers");
            Object.defineProperty(exports, "FindUsersRequest", {
                enumerable: true,
                get: function get() {
                    return _FindUsers.FindUsersRequest
                }
            });
            var _Extension = _dereq_("./requests/system/Extension");
            Object.defineProperty(exports, "ExtensionRequest", {
                enumerable: true,
                get: function get() {
                    return _Extension.ExtensionRequest
                }
            });
            var _KickUser = _dereq_("./requests/system/KickUser");
            Object.defineProperty(exports, "KickUserRequest", {
                enumerable: true,
                get: function get() {
                    return _KickUser.KickUserRequest
                }
            });
            var _BanUser = _dereq_("./requests/system/BanUser");
            Object.defineProperty(exports, "BanUserRequest", {
                enumerable: true,
                get: function get() {
                    return _BanUser.BanUserRequest
                }
            });
            var _CreateSFSGame = _dereq_("./requests/game/CreateSFSGame");
            Object.defineProperty(exports, "CreateSFSGameRequest", {
                enumerable: true,
                get: function get() {
                    return _CreateSFSGame.CreateSFSGameRequest
                }
            });
            var _InvitationReply = _dereq_("./requests/game/InvitationReply");
            Object.defineProperty(exports, "InvitationReplyRequest", {
                enumerable: true,
                get: function get() {
                    return _InvitationReply.InvitationReplyRequest
                }
            });
            var _InviteUsers = _dereq_("./requests/game/InviteUsers");
            Object.defineProperty(exports, "InviteUsersRequest", {
                enumerable: true,
                get: function get() {
                    return _InviteUsers.InviteUsersRequest
                }
            });
            var _JoinRoomInvitation = _dereq_("./requests/game/JoinRoomInvitation");
            Object.defineProperty(exports, "JoinRoomInvitationRequest", {
                enumerable: true,
                get: function get() {
                    return _JoinRoomInvitation.JoinRoomInvitationRequest
                }
            });
            var _QuickJoinGame = _dereq_("./requests/game/QuickJoinGame");
            Object.defineProperty(exports, "QuickJoinGameRequest", {
                enumerable: true,
                get: function get() {
                    return _QuickJoinGame.QuickJoinGameRequest
                }
            });
            var _SetUserPosition = _dereq_("./requests/mmo/SetUserPosition");
            Object.defineProperty(exports, "SetUserPositionRequest", {
                enumerable: true,
                get: function get() {
                    return _SetUserPosition.SetUserPositionRequest
                }
            });
            var _AddBuddy = _dereq_("./requests/buddylist/AddBuddy");
            Object.defineProperty(exports, "AddBuddyRequest", {
                enumerable: true,
                get: function get() {
                    return _AddBuddy.AddBuddyRequest
                }
            });
            var _BlockBuddy = _dereq_("./requests/buddylist/BlockBuddy");
            Object.defineProperty(exports, "BlockBuddyRequest", {
                enumerable: true,
                get: function get() {
                    return _BlockBuddy.BlockBuddyRequest
                }
            });
            var _BuddyMessage = _dereq_("./requests/buddylist/BuddyMessage");
            Object.defineProperty(exports, "BuddyMessageRequest", {
                enumerable: true,
                get: function get() {
                    return _BuddyMessage.BuddyMessageRequest
                }
            });
            var _GoOnline = _dereq_("./requests/buddylist/GoOnline");
            Object.defineProperty(exports, "GoOnlineRequest", {
                enumerable: true,
                get: function get() {
                    return _GoOnline.GoOnlineRequest
                }
            });
            var _InitBuddyList = _dereq_("./requests/buddylist/InitBuddyList");
            Object.defineProperty(exports, "InitBuddyListRequest", {
                enumerable: true,
                get: function get() {
                    return _InitBuddyList.InitBuddyListRequest
                }
            });
            var _RemoveBuddy = _dereq_("./requests/buddylist/RemoveBuddy");
            Object.defineProperty(exports, "RemoveBuddyRequest", {
                enumerable: true,
                get: function get() {
                    return _RemoveBuddy.RemoveBuddyRequest
                }
            });
            var _SetBuddyVariables = _dereq_("./requests/buddylist/SetBuddyVariables");
            Object.defineProperty(exports, "SetBuddyVariablesRequest", {
                enumerable: true,
                get: function get() {
                    return _SetBuddyVariables.SetBuddyVariablesRequest
                }
            });
            _dereq_("./utils/Helper")
        }, {
            "./SmartFox": 142,
            "./core/Events": 146,
            "./entities/Data": 149,
            "./entities/Invitation": 150,
            "./entities/match/Conditions": 151,
            "./entities/match/MatchExpression": 152,
            "./entities/match/Properties": 153,
            "./entities/objects/User": 157,
            "./entities/variables/BuddyVariable": 158,
            "./entities/variables/ItemVariable": 159,
            "./entities/variables/RoomVariable": 160,
            "./entities/variables/UserVariable": 161,
            "./entities/variables/Variable": 162,
            "./requests/Settings": 167,
            "./requests/buddylist/AddBuddy": 168,
            "./requests/buddylist/BlockBuddy": 169,
            "./requests/buddylist/BuddyMessage": 170,
            "./requests/buddylist/GoOnline": 171,
            "./requests/buddylist/InitBuddyList": 172,
            "./requests/buddylist/RemoveBuddy": 173,
            "./requests/buddylist/SetBuddyVariables": 174,
            "./requests/game/CreateSFSGame": 175,
            "./requests/game/InvitationReply": 176,
            "./requests/game/InviteUsers": 177,
            "./requests/game/JoinRoomInvitation": 178,
            "./requests/game/QuickJoinGame": 179,
            "./requests/mmo/SetUserPosition": 181,
            "./requests/system/BanUser": 182,
            "./requests/system/ChangeRoomCapacity": 183,
            "./requests/system/ChangeRoomName": 184,
            "./requests/system/ChangeRoomPasswordState": 185,
            "./requests/system/CreateRoom": 186,
            "./requests/system/Extension": 187,
            "./requests/system/FindRooms": 188,
            "./requests/system/FindUsers": 189,
            "./requests/system/JoinRoom": 191,
            "./requests/system/KickUser": 192,
            "./requests/system/LeaveRoom": 193,
            "./requests/system/Login": 194,
            "./requests/system/Logout": 195,
            "./requests/system/Message": 196,
            "./requests/system/PlayerToSpectator": 198,
            "./requests/system/SetRoomVariables": 199,
            "./requests/system/SetUserVariables": 200,
            "./requests/system/SpectatorToPlayer": 201,
            "./requests/system/SubscribeRoomGroup": 202,
            "./requests/system/UnsubscribeRoomGroup": 203,
            "./utils/ErrorCodes": 204,
            "./utils/Helper": 205,
            "./utils/Logging": 206,
            "./utils/Miscellanea": 207
        }],
        142: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SmartFox = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _SystemController = _dereq_("./controllers/SystemController");
            var _ExtensionController = _dereq_("./controllers/ExtensionController");
            var _Events = _dereq_("./core/Events");
            var _Exceptions = _dereq_("./core/Exceptions");
            var _SocketEngine = _dereq_("./core/SocketEngine");
            var _UserManager = _dereq_("./managers/UserManager");
            var _RoomManager = _dereq_("./managers/RoomManager");
            var _BuddyManager = _dereq_("./managers/BuddyManager");
            var _Base = _dereq_("./requests/Base");
            var _Handshake = _dereq_("./requests/system/Handshake");
            var _ErrorCodes = _dereq_("./utils/ErrorCodes");
            var _Logging = _dereq_("./utils/Logging");
            var _Monitoring = _dereq_("./utils/Monitoring");
            var _Miscellanea = _dereq_("./utils/Miscellanea");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SmartFox = function(_EventDispatcher) {
                (0, _inherits3.default)(SmartFox, _EventDispatcher);

                function SmartFox() {
                    var configData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    (0, _classCallCheck3.default)(this, SmartFox);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SmartFox.__proto__ || (0, _getPrototypeOf2.default)(SmartFox)).call(this));
                    _this._majVersion = 1;
                    _this._minVersion = 7;
                    _this._subVersion = 3;
                    _this._configData = configData;
                    _this._logger = _Logging.Logger.instance;
                    _this._sessionToken = null;
                    _this._socketEngine = new _SocketEngine.SocketEngine(_this);
                    _this._socketEngine.addEventListener(_SocketEngine.SocketEvent.CONNECT, _this._onSocketConnect, _this);
                    _this._socketEngine.addEventListener(_SocketEngine.SocketEvent.DISCONNECT, _this._onSocketDisconnect, _this);
                    _this._socketEngine.addEventListener(_SocketEngine.SocketEvent.DATA, _this._onSocketData, _this);
                    _this._socketEngine.addEventListener(_SocketEngine.SocketEvent.IOERROR, _this._onSocketIOError, _this);
                    _this._controllers = {};
                    _this._controllers[0] = new _SystemController.SystemController(_this);
                    _this._controllers[1] = new _ExtensionController.ExtensionController(_this);
                    _this._reset();
                    _this._clientDetails = "JavaScript";
                    _this.debug = _this.config != null && _this.config.debug;
                    if (_this.debug) {
                        _this._logger.info("SmartFox instance ready");
                        _this._logger.info("SFS2X JavaScript API v" + _this.version)
                    }(0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SmartFox, [{
                    key: "setClientDetails",
                    value: function setClientDetails(platformId, version) {
                        if (this.isConnected) {
                            this._logger.warn("Method setClientDetails must be called before the connection is started");
                            return
                        }
                        var sep = ":";
                        platformId = platformId != null ? platformId.replace(sep, " ") : "";
                        version = version != null ? version.replace(sep, " ") : "";
                        this._clientDetails = platformId + sep + version
                    }
                }, {
                    key: "connect",
                    value: function connect() {
                        var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                        var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
                        var useSSL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                        if (this.debug) this._logger.info("Attempting connection to server");
                        if (this.isConnected) {
                            this._logger.warn("Connection attempt interrupted: already connected");
                            return
                        }
                        if (this._socketEngine.isConnecting) {
                            this._logger.warn("Connection attempt interrupted: another attempt is already in progress");
                            return
                        }
                        var hostValue = this.config != null && this.config.host != null ? this.config.host : null;
                        var portValue = this.config != null && this.config.port != null ? this.config.port : null;
                        var useSSLValue = this.config != null && this.config.useSSL;
                        if (host != null) hostValue = host;
                        if (port > -1) portValue = port;
                        if (useSSL != null) useSSLValue = useSSL;
                        if (hostValue == null || typeof hostValue !== "string" || hostValue.length === 0) {
                            this._logger.error("Invalid connection host/address");
                            return
                        }
                        if (typeof portValue !== "number" || portValue < 0 || portValue > 65535) {
                            this._logger.error("Invalid TCP connection port: " + portValue);
                            return
                        }
                        if (typeof useSSLValue !== "boolean") useSSLValue = false;
                        this._socketEngine.connect(hostValue, portValue, useSSLValue)
                    }
                }, {
                    key: "disconnect",
                    value: function disconnect() {
                        if (this.isConnected) this._handleClientDisconnection(_Miscellanea.ClientDisconnectionReason.MANUAL)
                    }
                }, {
                    key: "enableLagMonitor",
                    value: function enableLagMonitor(enabled) {
                        var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
                        var queueSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
                        if (this.mySelf == null) {
                            this._logger.warn("Lag monitoring requires that you are logged in a Zone; please retry after completing the login process");
                            return
                        }
                        if (this._lagMonitor != null) this._lagMonitor.destroy();
                        if (enabled) {
                            this._lagMonitor = new _Monitoring.LagMonitor(this, interval, queueSize);
                            this._lagMonitor.start()
                        }
                    }
                }, {
                    key: "send",
                    value: function send(request) {
                        if (!this.isConnected) {
                            this._logger.error("You are not connected. Request cannot be sent: " + _Base.Requests.getNameFromId(request.id));
                            return
                        }
                        if (request.validate == null || request.execute == null) {
                            this._logger.error("An invalid request was passed: " + request);
                            return
                        }
                        if (this.debug) this._logger.info("Sending request '" + request.constructor.name + "' to server");
                        try {
                            request.validate(this);
                            request.execute(this)
                        } catch (error) {
                            if (error instanceof _Exceptions.SFSValidationError && error.message != null) {
                                var errMsg = error.message;
                                if (error.errors != null) {
                                    errMsg += ":";
                                    for (var i = 0; i < error.errors.length; i++) {
                                        if (error.errors.length > 1) errMsg += " " + (i + 1) + ")";
                                        errMsg += " " + error.errors[i]
                                    }
                                }
                                this._logger.error("Request failed | " + errMsg)
                            } else throw error;
                            return false
                        }
                        this._socketEngine.send(request.getMessage());
                        return true
                    }
                }, {
                    key: "getRoomById",
                    value: function getRoomById(id) {
                        return this.roomManager.getRoomById(id)
                    }
                }, {
                    key: "getRoomByName",
                    value: function getRoomByName(name) {
                        return this.roomManager.getRoomByName(name)
                    }
                }, {
                    key: "getRoomList",
                    value: function getRoomList() {
                        return this.roomManager.getRoomList()
                    }
                }, {
                    key: "getRoomListFromGroup",
                    value: function getRoomListFromGroup(groupId) {
                        return this.roomManager.getRoomListFromGroup(groupId)
                    }
                }, {
                    key: "getJoinedRooms",
                    value: function getJoinedRooms() {
                        return this.roomManager.getJoinedRooms()
                    }
                }, {
                    key: "_reset",
                    value: function _reset() {
                        var isDisconnection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                        if (this._buddyManager != null) {
                            this._buddyManager._clearAll();
                            this._buddyManager._inited = false
                        }
                        this._userManager = new _UserManager.GlobalUserManager(this);
                        this._roomManager = new _RoomManager.SFSRoomManager(this);
                        this._buddyManager = new _BuddyManager.SFSBuddyManager(this);
                        if (this._lagMonitor != null) this._lagMonitor.destroy();
                        this._lagMonitor = null;
                        this._isJoining = false;
                        this._currentZone = null;
                        this._lastJoinedRoom = null;
                        this._mySelf = null;
                        if (isDisconnection) {
                            this._sessionToken = null
                        }
                    }
                }, {
                    key: "_onSocketConnect",
                    value: function _onSocketConnect(event) {
                        if (event.success) {
                            this.send(new _Handshake.HandshakeRequest(this.version, this._clientDetails))
                        } else this.dispatchEvent(_Events.SFSEvent.CONNECTION, {
                            success: false
                        })
                    }
                }, {
                    key: "_onSocketDisconnect",
                    value: function _onSocketDisconnect(event) {
                        this.dispatchEvent(_Events.SFSEvent.CONNECTION_LOST, {
                            reason: event.reason
                        });
                        this._reset(true)
                    }
                }, {
                    key: "_onSocketData",
                    value: function _onSocketData(message) {
                        var controllerId = message.targetController;
                        var commandId = message.id;
                        var params = message.content;
                        if (controllerId == null) {
                            this._logger.error("Incoming message rejected: Controller ID is missing");
                            return
                        }
                        if (commandId == null) {
                            this._logger.error("Incoming message rejected: Command ID is missing");
                            return
                        }
                        this._controllers[controllerId].handleMessage(params, commandId)
                    }
                }, {
                    key: "_onSocketIOError",
                    value: function _onSocketIOError(errorMsg) {
                        this.dispatchEvent(_Events.SFSEvent.SOCKET_ERROR, {
                            message: errorMsg
                        })
                    }
                }, {
                    key: "_handleHandShake",
                    value: function _handleHandShake(data) {
                        var errorCode = data.get(_Base.BaseRequest.KEY_ERROR_CODE);
                        if (errorCode == null) {
                            this._sessionToken = data.get(_Handshake.HandshakeRequest.KEY_SESSION_TOKEN);
                            this._socketEngine.maxMessageSize = data.get(_Handshake.HandshakeRequest.KEY_MAX_MESSAGE_SIZE);
                            this._socketEngine.compressionThreshold = data.get(_Handshake.HandshakeRequest.KEY_COMPRESSION_THRESHOLD);
                            this.dispatchEvent(_Events.SFSEvent.CONNECTION, {
                                success: true
                            })
                        } else {
                            var errorMsg = _ErrorCodes.SFSErrorCodes.getErrorMessage(errorCode, data.get(_Base.BaseRequest.KEY_ERROR_PARAMS));
                            var evt = {
                                success: false,
                                errorMessage: errorMsg,
                                errorCode: errorCode
                            };
                            this.dispatchEvent(_Events.SFSEvent.CONNECTION, evt)
                        }
                    }
                }, {
                    key: "_handleLogout",
                    value: function _handleLogout() {
                        this._reset()
                    }
                }, {
                    key: "_handleClientDisconnection",
                    value: function _handleClientDisconnection(reason) {
                        if (this.isConnected) this._socketEngine.disconnect(reason)
                    }
                }, {
                    key: "version",
                    get: function get() {
                        return this._majVersion + "." + this._minVersion + "." + this._subVersion
                    }
                }, {
                    key: "config",
                    get: function get() {
                        return this._configData
                    }
                }, {
                    key: "logger",
                    get: function get() {
                        return this._logger
                    }
                }, {
                    key: "sessionToken",
                    get: function get() {
                        return this._sessionToken
                    }
                }, {
                    key: "roomManager",
                    get: function get() {
                        return this._roomManager
                    }
                }, {
                    key: "userManager",
                    get: function get() {
                        return this._userManager
                    }
                }, {
                    key: "buddyManager",
                    get: function get() {
                        return this._buddyManager
                    }
                }, {
                    key: "mySelf",
                    get: function get() {
                        return this._mySelf
                    }
                }, {
                    key: "lastJoinedRoom",
                    get: function get() {
                        return this._lastJoinedRoom
                    }
                }, {
                    key: "isConnected",
                    get: function get() {
                        if (this._socketEngine != null) return this._socketEngine.isConnected;
                        else return false
                    }
                }, {
                    key: "maxMessageSize",
                    get: function get() {
                        if (this._socketEngine != null) return this._socketEngine.maxMessageSize;
                        else return 0
                    }
                }]);
                return SmartFox
            }(_Events.EventDispatcher);
            exports.SmartFox = SmartFox
        }, {
            "./controllers/ExtensionController": 143,
            "./controllers/SystemController": 144,
            "./core/Events": 146,
            "./core/Exceptions": 147,
            "./core/SocketEngine": 148,
            "./managers/BuddyManager": 163,
            "./managers/RoomManager": 164,
            "./managers/UserManager": 165,
            "./requests/Base": 166,
            "./requests/system/Handshake": 190,
            "./utils/ErrorCodes": 204,
            "./utils/Logging": 206,
            "./utils/Miscellanea": 207,
            "./utils/Monitoring": 208,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        143: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ExtensionController = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _Events = _dereq_("../core/Events");
            var _Extension = _dereq_("../requests/system/Extension");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var ExtensionController = function() {
                function ExtensionController(sfs) {
                    (0, _classCallCheck3.default)(this, ExtensionController);
                    this._sfs = sfs;
                    this._logger = sfs.logger;
                    this._id = 1;
                    (0, _freeze2.default)(this)
                }(0, _createClass3.default)(ExtensionController, [{
                    key: "handleMessage",
                    value: function handleMessage(data, messageId) {
                        if (this._sfs.debug) this._logger.info("Handling Extension response");
                        var evtParams = {};
                        evtParams.cmd = data.get(_Extension.ExtensionRequest.KEY_CMD);
                        evtParams.params = data.get(_Extension.ExtensionRequest.KEY_PARAMS);
                        var roomId = data.get(_Extension.ExtensionRequest.KEY_ROOM);
                        if (roomId != null) evtParams.room = this._sfs.roomManager.getRoomById(roomId);
                        this._sfs.dispatchEvent(_Events.SFSEvent.EXTENSION_RESPONSE, evtParams)
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }]);
                return ExtensionController
            }();
            exports.ExtensionController = ExtensionController
        }, {
            "../core/Events": 146,
            "../requests/system/Extension": 187,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        144: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SystemController = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _set = _dereq_("babel-runtime/core-js/set");
            var _set2 = _interopRequireDefault(_set);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _map = _dereq_("babel-runtime/core-js/map");
            var _map2 = _interopRequireDefault(_map);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _Base = _dereq_("../requests/Base");
            var _Events = _dereq_("../core/Events");
            var _ErrorCodes = _dereq_("../utils/ErrorCodes");
            var _Data = _dereq_("../entities/Data");
            var _Room = _dereq_("../entities/objects/Room");
            var _User = _dereq_("../entities/objects/User");
            var _Item = _dereq_("../entities/objects/Item");
            var _Buddy = _dereq_("../entities/objects/Buddy");
            var _Invitation = _dereq_("../entities/Invitation");
            var _UserVariable = _dereq_("../entities/variables/UserVariable");
            var _RoomVariable = _dereq_("../entities/variables/RoomVariable");
            var _ItemVariable = _dereq_("../entities/variables/ItemVariable");
            var _BuddyVariable = _dereq_("../entities/variables/BuddyVariable");
            var _Miscellanea = _dereq_("../utils/Miscellanea");
            var _Login = _dereq_("../requests/system/Login");
            var _Logout = _dereq_("../requests/system/Logout");
            var _JoinRoom = _dereq_("../requests/system/JoinRoom");
            var _CreateRoom = _dereq_("../requests/system/CreateRoom");
            var _ChangeRoomName = _dereq_("../requests/system/ChangeRoomName");
            var _ChangeRoomPasswordState = _dereq_("../requests/system/ChangeRoomPasswordState");
            var _ChangeRoomCapacity = _dereq_("../requests/system/ChangeRoomCapacity");
            var _Message = _dereq_("../requests/system/Message");
            var _SetRoomVariables = _dereq_("../requests/system/SetRoomVariables");
            var _SetUserVariables = _dereq_("../requests/system/SetUserVariables");
            var _SubscribeRoomGroup = _dereq_("../requests/system/SubscribeRoomGroup");
            var _UnsubscribeRoomGroup = _dereq_("../requests/system/UnsubscribeRoomGroup");
            var _SpectatorToPlayer = _dereq_("../requests/system/SpectatorToPlayer");
            var _PlayerToSpectator = _dereq_("../requests/system/PlayerToSpectator");
            var _FindRooms = _dereq_("../requests/system/FindRooms");
            var _FindUsers = _dereq_("../requests/system/FindUsers");
            var _InviteUsers = _dereq_("../requests/game/InviteUsers");
            var _SetMMOItemVariables = _dereq_("../requests/mmo/SetMMOItemVariables");
            var _SetUserPosition = _dereq_("../requests/mmo/SetUserPosition");
            var _InitBuddyList = _dereq_("../requests/buddylist/InitBuddyList");
            var _AddBuddy = _dereq_("../requests/buddylist/AddBuddy");
            var _RemoveBuddy = _dereq_("../requests/buddylist/RemoveBuddy");
            var _BlockBuddy = _dereq_("../requests/buddylist/BlockBuddy");
            var _GoOnline = _dereq_("../requests/buddylist/GoOnline");
            var _SetBuddyVariables = _dereq_("../requests/buddylist/SetBuddyVariables");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SystemController = function() {
                (0, _createClass3.default)(SystemController, null, [{
                    key: "KEY_ERROR_CODE",
                    get: function get() {
                        return "ec"
                    }
                }, {
                    key: "KEY_ERROR_PARAMS",
                    get: function get() {
                        return "ep"
                    }
                }, {
                    key: "ROOM_PARAM",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "USER_PARAM",
                    get: function get() {
                        return "u"
                    }
                }, {
                    key: "USER_COUNT_PARAM",
                    get: function get() {
                        return "uc"
                    }
                }, {
                    key: "SPECT_COUNT_PARAM",
                    get: function get() {
                        return "sc"
                    }
                }, {
                    key: "DISCONNECTION_REASON_PARAM",
                    get: function get() {
                        return "dr"
                    }
                }]);

                function SystemController(sfs) {
                    (0, _classCallCheck3.default)(this, SystemController);
                    this._sfs = sfs;
                    this._logger = sfs.logger;
                    this._id = 0;
                    this._messageHandlers = new _map2.default;
                    this._initMessageHandlers();
                    (0, _freeze2.default)(this)
                }(0, _createClass3.default)(SystemController, [{
                    key: "handleMessage",
                    value: function handleMessage(data, messageId) {
                        var handlerObj = this._messageHandlers.get(messageId);
                        if (handlerObj != null) {
                            if (this._sfs.debug) this._logger.info("Handling server event: " + handlerObj.name + " (" + messageId + ")");
                            handlerObj.handler.call(this, data)
                        } else this._logger.warn("Unknown server event received; id: " + messageId)
                    }
                }, {
                    key: "_initMessageHandlers",
                    value: function _initMessageHandlers() {
                        this._setHandler(_Base.Requests.Handshake, this._fnHandshake);
                        this._setHandler(_Base.Requests.Login, this._fnLogin);
                        this._setHandler(_Base.Requests.Logout, this._fnLogout);
                        this._setHandler(_Base.Requests.JoinRoom, this._fnJoinRoom);
                        this._setHandler(_Base.Requests.CreateRoom, this._fnCreateRoom);
                        this._setHandler(_Base.Requests.ChangeRoomName, this._fnChangeRoomName);
                        this._setHandler(_Base.Requests.ChangeRoomPassword, this._fnChangeRoomPassword);
                        this._setHandler(_Base.Requests.ChangeRoomCapacity, this._fnChangeRoomCapacity);
                        this._setHandler(_Base.Requests.GenericMessage, this._fnGenericMessage);
                        this._setHandler(_Base.Requests.SetRoomVariables, this._fnSetRoomVariables);
                        this._setHandler(_Base.Requests.SetUserVariables, this._fnSetUserVariables);
                        this._setHandler(_Base.Requests.SubscribeRoomGroup, this._fnSubscribeRoomGroup);
                        this._setHandler(_Base.Requests.UnsubscribeRoomGroup, this._fnUnsubscribeRoomGroup);
                        this._setHandler(_Base.Requests.SpectatorToPlayer, this._fnSpectatorToPlayer);
                        this._setHandler(_Base.Requests.PlayerToSpectator, this._fnPlayerToSpectator);
                        this._setHandler(_Base.Requests.FindRooms, this._fnFindRooms);
                        this._setHandler(_Base.Requests.FindUsers, this._fnFindUsers);
                        this._setHandler(_Base.Requests.PingPong, this._fnPingPong);
                        this._setHandler(_Base.Requests.InitBuddyList, this._fnInitBuddyList);
                        this._setHandler(_Base.Requests.AddBuddy, this._fnAddBuddy);
                        this._setHandler(_Base.Requests.RemoveBuddy, this._fnRemoveBuddy);
                        this._setHandler(_Base.Requests.BlockBuddy, this._fnBlockBuddy);
                        this._setHandler(_Base.Requests.GoOnline, this._fnGoOnline);
                        this._setHandler(_Base.Requests.SetBuddyVariables, this._fnSetBuddyVariables);
                        this._setHandler(_Base.Requests.QuickJoinGame, this._fnQuickJoinGame);
                        this._setHandler(_Base.Requests.InviteUsers, this._fnInviteUsers);
                        this._setHandler(_Base.Requests.InvitationReply, this._fnInvitationReply);
                        this._setHandler(_Base.Requests.SetUserPosition, this._fnSetUserPosition);
                        this._setHandler(1e3, this._fnUserEnterRoom, "UserEnterRoom");
                        this._setHandler(1001, this._fnUserCountChange, "UserCountChange");
                        this._setHandler(1002, this._fnUserLost, "UserLost");
                        this._setHandler(1003, this._fnRoomLost, "RoomLost");
                        this._setHandler(1004, this._fnUserExitRoom, "UserExitRoom");
                        this._setHandler(1005, this._fnClientDisconnection, "ClientDisconnection");
                        this._setHandler(1007, this._fnSetMMOItemVariables, "SetMMOItemVariables")
                    }
                }, {
                    key: "_setHandler",
                    value: function _setHandler(id, handler) {
                        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                        if (name == null) name = _Base.Requests.getNameFromId(id);
                        this._messageHandlers.set(id, {
                            name: name,
                            handler: handler
                        })
                    }
                }, {
                    key: "_fnHandshake",
                    value: function _fnHandshake(data) {
                        this._sfs._handleHandShake(data)
                    }
                }, {
                    key: "_fnLogin",
                    value: function _fnLogin(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            this._populateRoomList(data.get(_Login.LoginRequest.KEY_ROOMLIST));
                            this._sfs._mySelf = new _User.SFSUser(data.get(_Login.LoginRequest.KEY_ID), data.get(_Login.LoginRequest.KEY_USER_NAME), true);
                            this._sfs.mySelf._setUserManager(this._sfs.userManager);
                            this._sfs.mySelf._privilegeId = data.get(_Login.LoginRequest.KEY_PRIVILEGE_ID);
                            this._sfs.userManager._addUser(this._sfs.mySelf);
                            var evtParams = {};
                            evtParams.zone = data.get(_Login.LoginRequest.KEY_ZONE_NAME);
                            evtParams.user = this._sfs.mySelf;
                            evtParams.data = data.get(_Login.LoginRequest.KEY_PARAMS);
                            this._sfs.dispatchEvent(_Events.SFSEvent.LOGIN, evtParams)
                        } else this._dispatchError(_Events.SFSEvent.LOGIN_ERROR, data)
                    }
                }, {
                    key: "_fnLogout",
                    value: function _fnLogout(data) {
                        this._sfs._handleLogout();
                        var evtParams = {};
                        evtParams.zone = data.get(_Logout.LogoutRequest.KEY_ZONE_NAME);
                        this._sfs.dispatchEvent(_Events.SFSEvent.LOGOUT, evtParams)
                    }
                }, {
                    key: "_fnJoinRoom",
                    value: function _fnJoinRoom(data) {
                        this._sfs._isJoining = false;
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var roomObj = data.get(_JoinRoom.JoinRoomRequest.KEY_ROOM);
                            var userList = data.get(_JoinRoom.JoinRoomRequest.KEY_USER_LIST);
                            var roomManager = this._sfs.roomManager;
                            var room = _Room.SFSRoom.fromSFSArray(roomObj);
                            room = roomManager._replaceRoom(room, roomManager.containsGroup(room.groupId));
                            for (var u = 0; u < userList.size(); u++) {
                                var userArray = userList.get(u);
                                var user = this._getOrCreateUser(userArray, true, room);
                                room._addUser(user)
                            }
                            room._isJoined = true;
                            this._sfs._lastJoinedRoom = room;
                            var evtParams = {};
                            evtParams.room = room;
                            this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_JOIN, evtParams)
                        } else this._dispatchError(_Events.SFSEvent.ROOM_JOIN_ERROR, data)
                    }
                }, {
                    key: "_fnCreateRoom",
                    value: function _fnCreateRoom(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var newRoom = _Room.SFSRoom.fromSFSArray(data.get(_CreateRoom.CreateRoomRequest.KEY_ROOM));
                            this._sfs.roomManager._addRoom(newRoom);
                            var evtParams = {};
                            evtParams.room = newRoom;
                            this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_ADD, evtParams)
                        } else this._dispatchError(_Events.SFSEvent.ROOM_CREATION_ERROR, data)
                    }
                }, {
                    key: "_fnChangeRoomName",
                    value: function _fnChangeRoomName(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var roomId = data.get(_ChangeRoomName.ChangeRoomNameRequest.KEY_ROOM);
                            var targetRoom = this._sfs.roomManager.getRoomById(roomId);
                            if (targetRoom != null) {
                                var oldName = targetRoom.name;
                                this._sfs.roomManager._changeRoomName(targetRoom, data.get(_ChangeRoomName.ChangeRoomNameRequest.KEY_NAME));
                                var evtParams = {};
                                evtParams.oldName = oldName;
                                evtParams.room = targetRoom;
                                this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_NAME_CHANGE, evtParams)
                            } else this._logger.warn("Unexpected RoomNameChange event error; unknown Room id: " + roomId)
                        } else this._dispatchError(_Events.SFSEvent.ROOM_NAME_CHANGE_ERROR, data)
                    }
                }, {
                    key: "_fnChangeRoomPassword",
                    value: function _fnChangeRoomPassword(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var roomId = data.get(_ChangeRoomPasswordState.ChangeRoomPasswordStateRequest.KEY_ROOM);
                            var targetRoom = this._sfs.roomManager.getRoomById(roomId);
                            if (targetRoom != null) {
                                this._sfs.roomManager._changeRoomPasswordState(targetRoom, data.get(_ChangeRoomPasswordState.ChangeRoomPasswordStateRequest.KEY_PASS));
                                var evtParams = {};
                                evtParams.room = targetRoom;
                                this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_PASSWORD_STATE_CHANGE, evtParams)
                            } else this._logger.warn("Unexpected RoomPasswordChange event error; unknown Room id: " + roomId)
                        } else this._dispatchError(_Events.SFSEvent.ROOM_PASSWORD_STATE_CHANGE_ERROR, data)
                    }
                }, {
                    key: "_fnChangeRoomCapacity",
                    value: function _fnChangeRoomCapacity(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var roomId = data.get(_ChangeRoomCapacity.ChangeRoomCapacityRequest.KEY_ROOM);
                            var targetRoom = this._sfs.roomManager.getRoomById(roomId);
                            if (targetRoom != null) {
                                this._sfs.roomManager._changeRoomCapacity(targetRoom, data.get(_ChangeRoomCapacity.ChangeRoomCapacityRequest.KEY_USER_SIZE), data.get(_ChangeRoomCapacity.ChangeRoomCapacityRequest.KEY_SPEC_SIZE));
                                var evtParams = {};
                                evtParams.room = targetRoom;
                                this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_CAPACITY_CHANGE, evtParams)
                            } else this._logger.warn("Unexpected RoomCapacityChange event error; unknown Room id: " + roomId)
                        } else this._dispatchError(_Events.SFSEvent.ROOM_CAPACITY_CHANGE_ERROR, data)
                    }
                }, {
                    key: "_fnGenericMessage",
                    value: function _fnGenericMessage(data) {
                        var msgType = data.get(_Message.GenericMessageRequest.KEY_MESSAGE_TYPE);
                        switch (msgType) {
                            case _Message.GenericMessageType.PUBLIC_MSG:
                                this._handlePublicMessage(data);
                                break;
                            case _Message.GenericMessageType.PRIVATE_MSG:
                                this._handlePrivateMessage(data);
                                break;
                            case _Message.GenericMessageType.BUDDY_MSG:
                                this._handleBuddyMessage(data);
                                break;
                            case _Message.GenericMessageType.MODERATOR_MSG:
                                this._handleModMessage(data);
                                break;
                            case _Message.GenericMessageType.ADMING_MSG:
                                this._handleAdminMessage(data);
                                break;
                            case _Message.GenericMessageType.OBJECT_MSG:
                                this._handleObjectMessage(data);
                                break
                        }
                    }
                }, {
                    key: "_handlePublicMessage",
                    value: function _handlePublicMessage(data) {
                        var roomId = data.get(_Message.GenericMessageRequest.KEY_ROOM_ID);
                        var room = this._sfs.roomManager.getRoomById(roomId);
                        if (room != null) {
                            var evtParams = {};
                            evtParams.room = room;
                            evtParams.sender = this._sfs.userManager.getUserById(data.get(_Message.GenericMessageRequest.KEY_USER_ID));
                            evtParams.message = data.get(_Message.GenericMessageRequest.KEY_MESSAGE);
                            evtParams.data = data.get(_Message.GenericMessageRequest.KEY_XTRA_PARAMS);
                            this._sfs.dispatchEvent(_Events.SFSEvent.PUBLIC_MESSAGE, evtParams)
                        } else this._logger.warn("Unexpected PublicMessage event error; unknown Room id: " + roomId)
                    }
                }, {
                    key: "_handlePrivateMessage",
                    value: function _handlePrivateMessage(data) {
                        var senderId = data.get(_Message.GenericMessageRequest.KEY_USER_ID);
                        var sender = this._sfs.userManager.getUserById(senderId);
                        if (sender == null) {
                            if (data.get(_Message.GenericMessageRequest.KEY_SENDER_DATA) == null) {
                                this._logger.warn("Unexpected PublicMessage event error; missing sender details");
                                return
                            }
                            sender = _User.SFSUser.fromSFSArray(data.get(_Message.GenericMessageRequest.KEY_SENDER_DATA))
                        }
                        var evtParams = {};
                        evtParams.sender = sender;
                        evtParams.message = data.get(_Message.GenericMessageRequest.KEY_MESSAGE);
                        evtParams.data = data.get(_Message.GenericMessageRequest.KEY_XTRA_PARAMS);
                        this._sfs.dispatchEvent(_Events.SFSEvent.PRIVATE_MESSAGE, evtParams)
                    }
                }, {
                    key: "_handleBuddyMessage",
                    value: function _handleBuddyMessage(data) {
                        var senderId = data.get(_Message.GenericMessageRequest.KEY_USER_ID);
                        var senderBuddy = this._sfs.buddyManager.getBuddyById(senderId);
                        var evtParams = {};
                        evtParams.isItMe = this._sfs.mySelf.id === senderId;
                        evtParams.buddy = senderBuddy;
                        evtParams.message = data.get(_Message.GenericMessageRequest.KEY_MESSAGE);
                        evtParams.data = data.get(_Message.GenericMessageRequest.KEY_XTRA_PARAMS);
                        this._sfs.dispatchEvent(_Events.SFSBuddyEvent.BUDDY_MESSAGE, evtParams)
                    }
                }, {
                    key: "_handleObjectMessage",
                    value: function _handleObjectMessage(data) {
                        var evtParams = {};
                        evtParams.sender = this._sfs.userManager.getUserById(data.get(_Message.GenericMessageRequest.KEY_USER_ID));
                        evtParams.message = data.get(_Message.GenericMessageRequest.KEY_XTRA_PARAMS);
                        this._sfs.dispatchEvent(_Events.SFSEvent.OBJECT_MESSAGE, evtParams)
                    }
                }, {
                    key: "_handleModMessage",
                    value: function _handleModMessage(data) {
                        var evtParams = {};
                        evtParams.sender = _User.SFSUser.fromSFSArray(data.get(_Message.GenericMessageRequest.KEY_SENDER_DATA));
                        evtParams.message = data.get(_Message.GenericMessageRequest.KEY_MESSAGE);
                        evtParams.data = data.get(_Message.GenericMessageRequest.KEY_XTRA_PARAMS);
                        this._sfs.dispatchEvent(_Events.SFSEvent.MODERATOR_MESSAGE, evtParams)
                    }
                }, {
                    key: "_handleAdminMessage",
                    value: function _handleAdminMessage(data) {
                        var evtParams = {};
                        evtParams.sender = _User.SFSUser.fromSFSArray(data.get(_Message.GenericMessageRequest.KEY_SENDER_DATA));
                        evtParams.message = data.get(_Message.GenericMessageRequest.KEY_MESSAGE);
                        evtParams.data = data.get(_Message.GenericMessageRequest.KEY_XTRA_PARAMS);
                        this._sfs.dispatchEvent(_Events.SFSEvent.ADMIN_MESSAGE, evtParams)
                    }
                }, {
                    key: "_fnSetRoomVariables",
                    value: function _fnSetRoomVariables(data) {
                        var roomId = data.get(_SetRoomVariables.SetRoomVariablesRequest.KEY_VAR_ROOM);
                        var varListData = data.get(_SetRoomVariables.SetRoomVariablesRequest.KEY_VAR_LIST);
                        var targetRoom = this._sfs.roomManager.getRoomById(roomId);
                        var changedVarNames = new _set2.default;
                        if (targetRoom != null) {
                            for (var j = 0; j < varListData.size(); j++) {
                                var roomVar = _RoomVariable.SFSRoomVariable.fromSFSArray(varListData.get(j));
                                targetRoom._setVariable(roomVar);
                                changedVarNames.add(roomVar.name)
                            }
                            var evtParams = {};
                            evtParams.changedVars = (0, _from2.default)(changedVarNames);
                            evtParams.room = targetRoom;
                            this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_VARIABLES_UPDATE, evtParams)
                        } else this._logger.warn("Unexpected RoomVariablesUpdate event error; unknown Room id: " + roomId)
                    }
                }, {
                    key: "_fnSetUserVariables",
                    value: function _fnSetUserVariables(data) {
                        var userId = data.get(_SetUserVariables.SetUserVariablesRequest.KEY_USER);
                        var varListData = data.get(_SetUserVariables.SetUserVariablesRequest.KEY_VAR_LIST);
                        var user = this._sfs.userManager.getUserById(userId);
                        var changedVarNames = new _set2.default;
                        if (user != null) {
                            for (var j = 0; j < varListData.size(); j++) {
                                var userVar = _UserVariable.SFSUserVariable.fromSFSArray(varListData.get(j));
                                user._setVariable(userVar);
                                changedVarNames.add(userVar.name)
                            }
                            var evtParams = {};
                            evtParams.changedVars = (0, _from2.default)(changedVarNames);
                            evtParams.user = user;
                            this._sfs.dispatchEvent(_Events.SFSEvent.USER_VARIABLES_UPDATE, evtParams)
                        } else this._logger.warn("Unexpected UserVariablesUpdate event error; unknown User id: " + userId)
                    }
                }, {
                    key: "_fnSubscribeRoomGroup",
                    value: function _fnSubscribeRoomGroup(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var groupId = data.get(_SubscribeRoomGroup.SubscribeRoomGroupRequest.KEY_GROUP_ID);
                            var roomListData = data.get(_SubscribeRoomGroup.SubscribeRoomGroupRequest.KEY_ROOM_LIST);
                            if (this._sfs.roomManager.containsGroup(groupId)) this._logger.warn("Unexpected SubscribeRoomGroup event error; group already subscribed: " + groupId);
                            this._populateRoomList(roomListData);
                            var evtParams = {};
                            evtParams.groupId = groupId;
                            evtParams.newRooms = this._sfs.roomManager.getRoomListFromGroup(groupId);
                            this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_GROUP_SUBSCRIBE, evtParams)
                        } else this._dispatchError(_Events.SFSEvent.ROOM_GROUP_SUBSCRIBE_ERROR, data)
                    }
                }, {
                    key: "_fnUnsubscribeRoomGroup",
                    value: function _fnUnsubscribeRoomGroup(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var groupId = data.get(_UnsubscribeRoomGroup.UnsubscribeRoomGroupRequest.KEY_GROUP_ID);
                            if (!this._sfs.roomManager.containsGroup(groupId)) this._logger.warn("Unexpected UnsubscribeRoomGroup event error; group not found: " + groupId + " (maybe never subscribed, or the Room Manager doesn't contain Rooms belonging to that Group)");
                            this._sfs.roomManager._removeGroup(groupId);
                            var evtParams = {};
                            evtParams.groupId = groupId;
                            this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_GROUP_UNSUBSCRIBE, evtParams)
                        } else this._dispatchError(_Events.SFSEvent.ROOM_GROUP_UNSUBSCRIBE_ERROR, data)
                    }
                }, {
                    key: "_fnSpectatorToPlayer",
                    value: function _fnSpectatorToPlayer(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var roomId = data.get(_SpectatorToPlayer.SpectatorToPlayerRequest.KEY_ROOM_ID);
                            var userId = data.get(_SpectatorToPlayer.SpectatorToPlayerRequest.KEY_USER_ID);
                            var playerId = data.get(_SpectatorToPlayer.SpectatorToPlayerRequest.KEY_PLAYER_ID);
                            var user = this._sfs.userManager.getUserById(userId);
                            var targetRoom = this._sfs.roomManager.getRoomById(roomId);
                            if (targetRoom != null) {
                                if (user != null) {
                                    if (user.isJoinedInRoom(targetRoom)) {
                                        user._setPlayerId(playerId, targetRoom);
                                        var evtParams = {};
                                        evtParams.room = targetRoom;
                                        evtParams.user = user;
                                        evtParams.playerId = playerId;
                                        this._sfs.dispatchEvent(_Events.SFSEvent.SPECTATOR_TO_PLAYER, evtParams)
                                    } else this._logger.warn("Unexpected SpectatorToPlayer event error; User " + user + " not in Room " + targetRoom)
                                } else this._logger.warn("Unexpected SpectatorToPlayer event error; unknown User id: " + userId)
                            } else this._logger.warn("Unexpected SpectatorToPlayer event error; unknown Room id: " + roomId)
                        } else this._dispatchError(_Events.SFSEvent.SPECTATOR_TO_PLAYER_ERROR, data)
                    }
                }, {
                    key: "_fnPlayerToSpectator",
                    value: function _fnPlayerToSpectator(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var roomId = data.get(_PlayerToSpectator.PlayerToSpectatorRequest.KEY_ROOM_ID);
                            var userId = data.get(_PlayerToSpectator.PlayerToSpectatorRequest.KEY_USER_ID);
                            var user = this._sfs.userManager.getUserById(userId);
                            var targetRoom = this._sfs.roomManager.getRoomById(roomId);
                            if (targetRoom != null) {
                                if (user != null) {
                                    if (user.isJoinedInRoom(targetRoom)) {
                                        user._setPlayerId(-1, targetRoom);
                                        var evtParams = {};
                                        evtParams.room = targetRoom;
                                        evtParams.user = user;
                                        this._sfs.dispatchEvent(_Events.SFSEvent.PLAYER_TO_SPECTATOR, evtParams)
                                    } else this._logger.warn("Unexpected PlayerToSpectator event error; User " + user + " not in Room " + targetRoom)
                                } else this._logger.warn("Unexpected SpectatorToPlayer event error; unknown User id: " + userId)
                            } else this._logger.warn("Unexpected SpectatorToPlayer event error; unknown Room id: " + roomId)
                        } else this._dispatchError(_Events.SFSEvent.PLAYER_TO_SPECTATOR_ERROR, data)
                    }
                }, {
                    key: "_fnPingPong",
                    value: function _fnPingPong(data) {
                        var evtParams = {};
                        evtParams.lagValue = this._sfs._lagMonitor._onPingPong();
                        this._sfs.dispatchEvent(_Events.SFSEvent.PING_PONG, evtParams)
                    }
                }, {
                    key: "_fnFindRooms",
                    value: function _fnFindRooms(data) {
                        var roomListData = data.get(_FindRooms.FindRoomsRequest.KEY_FILTERED_ROOMS);
                        var roomList = [];
                        for (var i = 0; i < roomListData.size(); i++) {
                            var roomData = roomListData.get(i);
                            var theRoom = _Room.SFSRoom.fromSFSArray(roomData);
                            var localRoom = this._sfs.roomManager.getRoomById(theRoom.id);
                            if (localRoom != null) theRoom._isJoined = localRoom._isJoined;
                            roomList.push(theRoom)
                        }
                        var evtParams = {};
                        evtParams.rooms = roomList;
                        this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_FIND_RESULT, evtParams)
                    }
                }, {
                    key: "_fnFindUsers",
                    value: function _fnFindUsers(data) {
                        var userListData = data.get(_FindUsers.FindUsersRequest.KEY_FILTERED_USERS);
                        var userList = [];
                        var mySelf = this._sfs.mySelf;
                        for (var i = 0; i < userListData.size(); i++) {
                            var userData = userListData.get(i);
                            var user = _User.SFSUser.fromSFSArray(userData);
                            if (user.id === mySelf.id) user = mySelf;
                            userList.push(user)
                        }
                        var evtParams = {};
                        evtParams.users = userList;
                        this._sfs.dispatchEvent(_Events.SFSEvent.USER_FIND_RESULT, evtParams)
                    }
                }, {
                    key: "_fnQuickJoinGame",
                    value: function _fnQuickJoinGame(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) != null) this._dispatchError(_Events.SFSEvent.ROOM_JOIN_ERROR, data)
                    }
                }, {
                    key: "_fnInviteUsers",
                    value: function _fnInviteUsers(data) {
                        var inviter = null;
                        if (data.get(_InviteUsers.InviteUsersRequest.KEY_USER_ID) != null) inviter = this._sfs.userManager.getUserById(data.get(_InviteUsers.InviteUsersRequest.KEY_USER_ID));
                        else inviter = _User.SFSUser.fromSFSArray(data.get(_InviteUsers.InviteUsersRequest.KEY_USER));
                        var expiryTime = data.get(_InviteUsers.InviteUsersRequest.KEY_TIME);
                        var invitationId = data.get(_InviteUsers.InviteUsersRequest.KEY_INVITATION_ID);
                        var invParams = data.get(_InviteUsers.InviteUsersRequest.KEY_PARAMS);
                        var invitation = new _Invitation.SFSInvitation(inviter, this._sfs.mySelf, expiryTime, invParams);
                        invitation._id = invitationId;
                        var evtParams = {};
                        evtParams.invitation = invitation;
                        this._sfs.dispatchEvent(_Events.SFSEvent.INVITATION, evtParams)
                    }
                }, {
                    key: "_fnInvitationReply",
                    value: function _fnInvitationReply(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var invitee = null;
                            if (data.get(_InviteUsers.InviteUsersRequest.KEY_USER_ID) != null) invitee = this._sfs.userManager.getUserById(data.get(_InviteUsers.InviteUsersRequest.KEY_USER_ID));
                            else invitee = _User.SFSUser.fromSFSArray(data.get(_InviteUsers.InviteUsersRequest.KEY_USER));
                            var reply = data.get(_InviteUsers.InviteUsersRequest.KEY_REPLY_ID);
                            var params = data.get(_InviteUsers.InviteUsersRequest.KEY_PARAMS);
                            var evtParams = {};
                            evtParams.invitee = invitee;
                            evtParams.reply = reply;
                            evtParams.data = params;
                            this._sfs.dispatchEvent(_Events.SFSEvent.INVITATION_REPLY, evtParams)
                        } else this._dispatchError(_Events.SFSEvent.INVITATION_REPLY_ERROR, data)
                    }
                }, {
                    key: "_fnSetUserPosition",
                    value: function _fnSetUserPosition(data) {
                        var roomId = data.get(_SetUserPosition.SetUserPositionRequest.KEY_ROOM);
                        var theRoom = this._sfs.roomManager.getRoomById(roomId);
                        var minusUserList = data.get(_SetUserPosition.SetUserPositionRequest.KEY_MINUS_USER_LIST);
                        var plusUserList = data.get(_SetUserPosition.SetUserPositionRequest.KEY_PLUS_USER_LIST);
                        var minusItemList = data.get(_SetUserPosition.SetUserPositionRequest.KEY_MINUS_ITEM_LIST);
                        var plusItemList = data.get(_SetUserPosition.SetUserPositionRequest.KEY_PLUS_ITEM_LIST);
                        var addedUsers = [];
                        var removedUsers = [];
                        var addedItems = [];
                        var removedItems = [];
                        if (minusUserList != null) {
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
                            try {
                                for (var _iterator = (0, _getIterator3.default)(minusUserList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var userId = _step.value;
                                    var removedUser = theRoom.getUserById(userId);
                                    if (removedUser != null) {
                                        theRoom._removeUser(removedUser);
                                        removedUsers.push(removedUser)
                                    }
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return()
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError
                                    }
                                }
                            }
                        }
                        if (plusUserList != null) {
                            for (var i = 0; i < plusUserList.size(); i++) {
                                var encodedUser = plusUserList.get(i);
                                var newUser = this._getOrCreateUser(encodedUser, true, theRoom);
                                addedUsers.push(newUser);
                                theRoom._addUser(newUser);
                                var userEntryPos = encodedUser.get(5);
                                if (userEntryPos != null) newUser._aoiEntryPoint = _Data.Vec3D.fromArray(userEntryPos)
                            }
                        }
                        if (minusItemList != null) {
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;
                            try {
                                for (var _iterator2 = (0, _getIterator3.default)(minusItemList), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var itemId = _step2.value;
                                    var removedItem = theRoom.getMMOItem(itemId);
                                    if (removedItem != null) {
                                        theRoom._removeItem(removedItem);
                                        removedItems.push(removedItem)
                                    }
                                }
                            } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return()
                                    }
                                } finally {
                                    if (_didIteratorError2) {
                                        throw _iteratorError2
                                    }
                                }
                            }
                        }
                        if (plusItemList != null) {
                            for (var _i = 0; _i < plusItemList.size(); _i++) {
                                var encodedItem = plusItemList.get(_i);
                                var newItem = _Item.MMOItem.fromSFSArray(encodedItem);
                                addedItems.push(newItem);
                                theRoom._addMMOItem(newItem);
                                var itemEntryPos = encodedItem.get(2);
                                if (itemEntryPos != null) newItem._aoiEntryPoint = _Data.Vec3D.fromArray(itemEntryPos)
                            }
                        }
                        var evtParams = {};
                        evtParams.addedItems = addedItems;
                        evtParams.removedItems = removedItems;
                        evtParams.removedUsers = removedUsers;
                        evtParams.addedUsers = addedUsers;
                        evtParams.room = theRoom;
                        this._sfs.dispatchEvent(_Events.SFSEvent.PROXIMITY_LIST_UPDATE, evtParams)
                    }
                }, {
                    key: "_fnInitBuddyList",
                    value: function _fnInitBuddyList(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var bListData = data.get(_InitBuddyList.InitBuddyListRequest.KEY_BLIST);
                            var myVarsData = data.get(_InitBuddyList.InitBuddyListRequest.KEY_MY_VARS);
                            var buddyStates = data.get(_InitBuddyList.InitBuddyListRequest.KEY_BUDDY_STATES);
                            this._sfs.buddyManager._clearAll();
                            for (var i = 0; i < bListData.size(); i++) {
                                var b = _Buddy.SFSBuddy.fromSFSArray(bListData.get(i));
                                this._sfs.buddyManager._addBuddy(b)
                            }
                            if (buddyStates != null) this._sfs.buddyManager._setBuddyStates(buddyStates);
                            var myBuddyVariables = [];
                            for (var _i2 = 0; _i2 < myVarsData.size(); _i2++) {
                                var bv = _BuddyVariable.SFSBuddyVariable.fromSFSArray(myVarsData.get(_i2));
                                myBuddyVariables.push(bv)
                            }
                            this._sfs.buddyManager._setMyVariables(myBuddyVariables);
                            this._sfs.buddyManager._setInited();
                            var evtParams = {};
                            evtParams.buddyList = this._sfs.buddyManager.getBuddyList();
                            evtParams.myVariables = this._sfs.buddyManager.getMyVariables();
                            this._sfs.dispatchEvent(_Events.SFSBuddyEvent.BUDDY_LIST_INIT, evtParams)
                        } else this._dispatchError(_Events.SFSBuddyEvent.BUDDY_ERROR, data)
                    }
                }, {
                    key: "_fnAddBuddy",
                    value: function _fnAddBuddy(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var buddy = _Buddy.SFSBuddy.fromSFSArray(data.get(_AddBuddy.AddBuddyRequest.KEY_BUDDY_NAME));
                            this._sfs.buddyManager._addBuddy(buddy);
                            var evtParams = {};
                            evtParams.buddy = buddy;
                            this._sfs.dispatchEvent(_Events.SFSBuddyEvent.BUDDY_ADD, evtParams)
                        } else this._dispatchError(_Events.SFSBuddyEvent.BUDDY_ERROR, data)
                    }
                }, {
                    key: "_fnRemoveBuddy",
                    value: function _fnRemoveBuddy(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var buddyName = data.get(_RemoveBuddy.RemoveBuddyRequest.KEY_BUDDY_NAME);
                            var buddy = this._sfs.buddyManager._removeBuddyByName(buddyName);
                            if (buddy != null) {
                                var evtParams = {};
                                evtParams.buddy = buddy;
                                this._sfs.dispatchEvent(_Events.SFSBuddyEvent.BUDDY_REMOVE, evtParams)
                            } else this._logger.warn("Unexpected RemoveBuddy event error; can't find " + buddyName + " in local buddy list")
                        } else this._dispatchError(_Events.SFSBuddyEvent.BUDDY_ERROR, data)
                    }
                }, {
                    key: "_fnBlockBuddy",
                    value: function _fnBlockBuddy(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var buddyName = data.get(_BlockBuddy.BlockBuddyRequest.KEY_BUDDY_NAME);
                            var buddy = this._sfs.buddyManager.getBuddyByName(buddyName);
                            if (data.get(_BlockBuddy.BlockBuddyRequest.KEY_BUDDY) != null) {
                                buddy = _Buddy.SFSBuddy.fromSFSArray(data.get(_BlockBuddy.BlockBuddyRequest.KEY_BUDDY));
                                this._sfs.buddyManager._addBuddy(buddy)
                            } else if (buddy != null) {
                                buddy._isBlocked = data.get(_BlockBuddy.BlockBuddyRequest.KEY_BUDDY_BLOCK_STATE)
                            } else this._logger.warn("Unexpected BlockBuddy event error; can't find " + buddyName + " in local buddy list");
                            var evtParams = {};
                            evtParams.buddy = buddy;
                            this._sfs.dispatchEvent(_Events.SFSBuddyEvent.BUDDY_BLOCK, evtParams)
                        } else this._dispatchError(_Events.SFSBuddyEvent.BUDDY_ERROR, data)
                    }
                }, {
                    key: "_fnGoOnline",
                    value: function _fnGoOnline(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var buddyName = data.get(_GoOnline.GoOnlineRequest.KEY_BUDDY_NAME);
                            var buddy = this._sfs.buddyManager.getBuddyByName(buddyName);
                            var isItMe = buddyName === this._sfs.mySelf.name;
                            var onlineValue = data.get(_GoOnline.GoOnlineRequest.KEY_ONLINE);
                            var onlineState = onlineValue === _Buddy.BuddyOnlineState.ONLINE;
                            var fireEvent = true;
                            if (isItMe) {
                                if (this._sfs.buddyManager.getMyOnlineState() != onlineState) {
                                    this._logger.warn("Unexpected GoOnline event error; current user's online state is not in synch with the server; resynching to: " + onlineState);
                                    this._sfs.buddyManager._setMyOnlineState(onlineState)
                                }
                            } else if (buddy != null) {
                                buddy._id = data.get(_GoOnline.GoOnlineRequest.KEY_BUDDY_ID);
                                buddy._setVariable(new _BuddyVariable.SFSBuddyVariable(_BuddyVariable.ReservedBuddyVariables.BV_ONLINE, onlineState));
                                if (onlineValue === _Buddy.BuddyOnlineState.LEFT_THE_SERVER) buddy._clearVolatileVariables();
                                fireEvent = this._sfs.buddyManager.getMyOnlineState()
                            } else {
                                this._logger.warn("Unexpected GoOnline event error; can't find " + buddyName + " in local buddy list");
                                return
                            }
                            if (fireEvent) {
                                var evtParams = {};
                                evtParams.buddy = buddy;
                                evtParams.isItMe = isItMe;
                                this._sfs.dispatchEvent(_Events.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, evtParams)
                            }
                        } else this._dispatchError(_Events.SFSBuddyEvent.BUDDY_ERROR, data)
                    }
                }, {
                    key: "_fnSetBuddyVariables",
                    value: function _fnSetBuddyVariables(data) {
                        if (data.get(SystemController.KEY_ERROR_CODE) == null) {
                            var buddyName = data.get(_SetBuddyVariables.SetBuddyVariablesRequest.KEY_BUDDY_NAME);
                            var buddyVarsData = data.get(_SetBuddyVariables.SetBuddyVariablesRequest.KEY_BUDDY_VARS);
                            var buddy = this._sfs.buddyManager.getBuddyByName(buddyName);
                            var isItMe = buddyName === this._sfs.mySelf.name;
                            var changedVarNames = [];
                            var variables = [];
                            var fireEvent = true;
                            for (var j = 0; j < buddyVarsData.size(); j++) {
                                var buddyVar = _BuddyVariable.SFSBuddyVariable.fromSFSArray(buddyVarsData.get(j));
                                variables.push(buddyVar);
                                changedVarNames.push(buddyVar.name)
                            }
                            if (isItMe) this._sfs.buddyManager._setMyVariables(variables);
                            else if (buddy != null) {
                                buddy._setVariables(variables);
                                fireEvent = this._sfs.buddyManager.getMyOnlineState()
                            } else {
                                this._logger.warn("Unexpected SetBuddyVariables event error; can't find " + buddyName + " in local buddy list");
                                return
                            }
                            if (fireEvent) {
                                var evtParams = {};
                                evtParams.buddy = buddy;
                                evtParams.isItMe = isItMe;
                                evtParams.changedVars = changedVarNames;
                                this._sfs.dispatchEvent(_Events.SFSBuddyEvent.BUDDY_VARIABLES_UPDATE, evtParams)
                            }
                        } else this._dispatchError(_Events.SFSBuddyEvent.BUDDY_ERROR, data)
                    }
                }, {
                    key: "_fnUserEnterRoom",
                    value: function _fnUserEnterRoom(data) {
                        var room = this._sfs.roomManager.getRoomById(data.get(SystemController.ROOM_PARAM));
                        if (room != null) {
                            var userArray = data.get(SystemController.USER_PARAM);
                            var user = this._getOrCreateUser(userArray, true, room);
                            room._addUser(user);
                            var evtParams = {};
                            evtParams.user = user;
                            evtParams.room = room;
                            this._sfs.dispatchEvent(_Events.SFSEvent.USER_ENTER_ROOM, evtParams)
                        }
                    }
                }, {
                    key: "_fnUserCountChange",
                    value: function _fnUserCountChange(data) {
                        var room = this._sfs.roomManager.getRoomById(data.get(SystemController.ROOM_PARAM));
                        if (room != null) {
                            var uCount = data.get(SystemController.USER_COUNT_PARAM);
                            var sCount = data.get(SystemController.SPECT_COUNT_PARAM) != null ? data.get(SystemController.SPECT_COUNT_PARAM) : 0;
                            room._userCount = uCount;
                            room._specCount = sCount;
                            var evtParams = {};
                            evtParams.room = room;
                            evtParams.uCount = uCount;
                            evtParams.sCount = sCount;
                            this._sfs.dispatchEvent(_Events.SFSEvent.USER_COUNT_CHANGE, evtParams)
                        }
                    }
                }, {
                    key: "_fnUserLost",
                    value: function _fnUserLost(data) {
                        var user = this._sfs.userManager.getUserById(data.get(SystemController.USER_PARAM));
                        if (user != null) {
                            var joinedRooms = this._sfs.roomManager.getUserRooms(user);
                            this._sfs.roomManager._removeUser(user);
                            this._sfs.userManager._removeUserReference(user, true);
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;
                            try {
                                for (var _iterator3 = (0, _getIterator3.default)(joinedRooms), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var room = _step3.value;
                                    var evtParams = {};
                                    evtParams.user = user;
                                    evtParams.room = room;
                                    this._sfs.dispatchEvent(_Events.SFSEvent.USER_EXIT_ROOM, evtParams)
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return()
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "_fnRoomLost",
                    value: function _fnRoomLost(data) {
                        var room = this._sfs.roomManager.getRoomById(data.get(SystemController.ROOM_PARAM));
                        if (room != null) {
                            this._sfs.roomManager._removeRoom(room);
                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;
                            try {
                                for (var _iterator4 = (0, _getIterator3.default)(room.getUserList()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var user = _step4.value;
                                    this._sfs.userManager._removeUser(user)
                                }
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                        _iterator4.return()
                                    }
                                } finally {
                                    if (_didIteratorError4) {
                                        throw _iteratorError4
                                    }
                                }
                            }
                            var evtParams = {};
                            evtParams.room = room;
                            this._sfs.dispatchEvent(_Events.SFSEvent.ROOM_REMOVE, evtParams)
                        }
                    }
                }, {
                    key: "_fnUserExitRoom",
                    value: function _fnUserExitRoom(data) {
                        var room = this._sfs.roomManager.getRoomById(data.get(SystemController.ROOM_PARAM));
                        var user = this._sfs.userManager.getUserById(data.get(SystemController.USER_PARAM));
                        if (room != null && user != null) {
                            room._removeUser(user);
                            this._sfs.userManager._removeUser(user);
                            if (user.isItMe && room.isJoined) {
                                room._isJoined = false;
                                if (this._sfs.roomManager.getJoinedRooms().length === 0 || this._sfs._lastJoinedRoom === room) this._sfs._lastJoinedRoom = null;
                                if (!room._isManaged) this._sfs.roomManager._removeRoom(room)
                            }
                            var evtParams = {};
                            evtParams.user = user;
                            evtParams.room = room;
                            this._sfs.dispatchEvent(_Events.SFSEvent.USER_EXIT_ROOM, evtParams)
                        } else this._logger.debug("Failed to handle UserExit event; Room: " + room + ", User: " + user)
                    }
                }, {
                    key: "_fnClientDisconnection",
                    value: function _fnClientDisconnection(data) {
                        var reasonId = data.get(SystemController.DISCONNECTION_REASON_PARAM);
                        this._sfs._handleClientDisconnection(_Miscellanea.ClientDisconnectionReason.getReason(reasonId))
                    }
                }, {
                    key: "_fnSetMMOItemVariables",
                    value: function _fnSetMMOItemVariables(data) {
                        var roomId = data.get(_SetMMOItemVariables.SetMMOItemVariables.KEY_ROOM_ID);
                        var mmoItemId = data.get(_SetMMOItemVariables.SetMMOItemVariables.KEY_ITEM_ID);
                        var varListData = data.get(_SetMMOItemVariables.SetMMOItemVariables.KEY_VAR_LIST);
                        var mmoRoom = this._sfs.roomManager.getRoomById(roomId);
                        var changedVarNames = new _set2.default;
                        if (mmoRoom != null) {
                            var mmoItem = mmoRoom.getMMOItem(mmoItemId);
                            if (mmoItem != null) {
                                for (var j = 0; j < varListData.size(); j++) {
                                    var itemVar = _ItemVariable.MMOItemVariable.fromSFSArray(varListData.get(j));
                                    mmoItem._setVariable(itemVar);
                                    changedVarNames.add(itemVar.name)
                                }
                                var evtParams = {};
                                evtParams.changedVars = (0, _from2.default)(changedVarNames);
                                evtParams.mmoItem = mmoItem;
                                evtParams.room = mmoRoom;
                                this._sfs.dispatchEvent(_Events.SFSEvent.MMOITEM_VARIABLES_UPDATE, evtParams)
                            } else this._logger.warn("Unexpected MMOItemVariablesUpdate event error; unknown MMOItem id: " + mmoItemId)
                        } else this._logger.warn("Unexpected MMOItemVariablesUpdate event error; unknown MMORoom id: " + roomId)
                    }
                }, {
                    key: "_dispatchError",
                    value: function _dispatchError(evtType, data) {
                        var evtParams = {};
                        evtParams.errorCode = data.get(SystemController.KEY_ERROR_CODE);
                        evtParams.errorMessage = _ErrorCodes.SFSErrorCodes.getErrorMessage(evtParams.errorCode, data.get(SystemController.KEY_ERROR_PARAMS));
                        this._sfs.dispatchEvent(evtType, evtParams)
                    }
                }, {
                    key: "_populateRoomList",
                    value: function _populateRoomList(roomList) {
                        for (var j = 0; j < roomList.size(); j++) {
                            var newRoom = _Room.SFSRoom.fromSFSArray(roomList.get(j));
                            this._sfs.roomManager._replaceRoom(newRoom)
                        }
                    }
                }, {
                    key: "_getOrCreateUser",
                    value: function _getOrCreateUser(userArray, addToGlobalManager, room) {
                        var uId = userArray.get(0);
                        var user = this._sfs.userManager.getUserById(uId);
                        if (user == null) {
                            user = _User.SFSUser.fromSFSArray(userArray, room);
                            user._setUserManager(this._sfs.userManager)
                        } else {
                            user._setPlayerId(userArray.get(3), room);
                            var uVars = userArray.get(4);
                            if (uVars != null)
                                for (var v = 0; v < uVars.size(); v++) {
                                    user._setVariable(_UserVariable.SFSUserVariable.fromSFSArray(uVars.get(v)))
                                }
                        }
                        if (addToGlobalManager) this._sfs.userManager._addUser(user);
                        return user
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }]);
                return SystemController
            }();
            exports.SystemController = SystemController
        }, {
            "../core/Events": 146,
            "../entities/Data": 149,
            "../entities/Invitation": 150,
            "../entities/objects/Buddy": 154,
            "../entities/objects/Item": 155,
            "../entities/objects/Room": 156,
            "../entities/objects/User": 157,
            "../entities/variables/BuddyVariable": 158,
            "../entities/variables/ItemVariable": 159,
            "../entities/variables/RoomVariable": 160,
            "../entities/variables/UserVariable": 161,
            "../requests/Base": 166,
            "../requests/buddylist/AddBuddy": 168,
            "../requests/buddylist/BlockBuddy": 169,
            "../requests/buddylist/GoOnline": 171,
            "../requests/buddylist/InitBuddyList": 172,
            "../requests/buddylist/RemoveBuddy": 173,
            "../requests/buddylist/SetBuddyVariables": 174,
            "../requests/game/InviteUsers": 177,
            "../requests/mmo/SetMMOItemVariables": 180,
            "../requests/mmo/SetUserPosition": 181,
            "../requests/system/ChangeRoomCapacity": 183,
            "../requests/system/ChangeRoomName": 184,
            "../requests/system/ChangeRoomPasswordState": 185,
            "../requests/system/CreateRoom": 186,
            "../requests/system/FindRooms": 188,
            "../requests/system/FindUsers": 189,
            "../requests/system/JoinRoom": 191,
            "../requests/system/Login": 194,
            "../requests/system/Logout": 195,
            "../requests/system/Message": 196,
            "../requests/system/PlayerToSpectator": 198,
            "../requests/system/SetRoomVariables": 199,
            "../requests/system/SetUserVariables": 200,
            "../requests/system/SpectatorToPlayer": 201,
            "../requests/system/SubscribeRoomGroup": 202,
            "../requests/system/UnsubscribeRoomGroup": 203,
            "../utils/ErrorCodes": 204,
            "../utils/Miscellanea": 207,
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/map": 3,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/set": 15,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        145: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SFSDataSerializer = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _symbol = _dereq_("babel-runtime/core-js/symbol");
            var _symbol2 = _interopRequireDefault(_symbol);
            var _Data = _dereq_("../entities/Data");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var singleton = (0, _symbol2.default)();
            var singletonEnforcer = (0, _symbol2.default)();
            var SFSDataSerializer = function() {
                function SFSDataSerializer(enforcer) {
                    (0, _classCallCheck3.default)(this, SFSDataSerializer);
                    if (enforcer !== singletonEnforcer) throw "SFSDataSerializer is a singleton class; you can't instantiate it"
                }(0, _createClass3.default)(SFSDataSerializer, [{
                    key: "object2binary",
                    value: function object2binary(sfso) {
                        var stream = new DataStream(new ArrayBuffer, 0, DataStream.BIG_ENDIAN);
                        stream.writeInt8(_Data.SFSDataType.SFS_OBJECT);
                        stream.writeInt16(sfso.size());
                        this.obj2bin(sfso, stream);
                        return new Uint8Array(stream.buffer)
                    }
                }, {
                    key: "obj2bin",
                    value: function obj2bin(sfso, stream) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0,
                                    _getIterator3.default)(sfso.keys()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var key = _step.value;
                                var wrappedObject = sfso.getWrappedItem(key);
                                this.encodeSFSObjectKey(stream, key);
                                this.encodeObject(stream, wrappedObject)
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                    }
                }, {
                    key: "array2binary",
                    value: function array2binary(sfsa) {
                        var stream = new DataStream(new ArrayBuffer, 0, DataStream.BIG_ENDIAN);
                        stream.writeInt8(_Data.SFSDataType.SFS_ARRAY);
                        stream.writeInt16(sfsa.size());
                        this.arr2bin(sfsa, stream);
                        return new Uint8Array(stream.buffer)
                    }
                }, {
                    key: "arr2bin",
                    value: function arr2bin(sfsa, stream) {
                        for (var j = 0; j < sfsa.size(); j++) {
                            var wrappedObject = sfsa.getWrappedItem(j);
                            this.encodeObject(stream, wrappedObject)
                        }
                    }
                }, {
                    key: "encodeSFSObjectKey",
                    value: function encodeSFSObjectKey(stream, key) {
                        stream.writeInt16(key.length);
                        stream.writeUint8Array(new TextEncoder("utf-8").encode(key))
                    }
                }, {
                    key: "encodeObject",
                    value: function encodeObject(stream, wrappedObject) {
                        var typeId = wrappedObject.type;
                        if (typeId === _Data.SFSDataType.NULL) this.binEncode_NULL(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.BOOL) this.binEncode_BOOL(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.BOOL_ARRAY) this.binEncode_BOOL_ARRAY(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.BYTE) this.binEncode_BYTE(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.BYTE_ARRAY) this.binEncode_BYTE_ARRAY(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.SHORT) this.binEncode_SHORT(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.SHORT_ARRAY) this.binEncode_SHORT_ARRAY(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.INT) this.binEncode_INT(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.INT_ARRAY) this.binEncode_INT_ARRAY(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.LONG) this.binEncode_LONG(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.LONG_ARRAY) this.binEncode_LONG_ARRAY(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.FLOAT) this.binEncode_FLOAT(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.FLOAT_ARRAY) this.binEncode_FLOAT_ARRAY(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.DOUBLE) this.binEncode_DOUBLE(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.DOUBLE_ARRAY) this.binEncode_DOUBLE_ARRAY(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.UTF_STRING) this.binEncode_UTF_STRING(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.TEXT) this.binEncode_TEXT(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.UTF_STRING_ARRAY) this.binEncode_UTF_STRING_ARRAY(stream, wrappedObject);
                        else if (typeId === _Data.SFSDataType.SFS_ARRAY) {
                            stream.writeUint8Array(this.array2binary(wrappedObject.value))
                        } else if (typeId === _Data.SFSDataType.SFS_OBJECT) {
                            stream.writeUint8Array(this.object2binary(wrappedObject.value))
                        } else throw "Unknow SFSDataType ID: " + typeId;
                        return stream
                    }
                }, {
                    key: "binEncode_NULL",
                    value: function binEncode_NULL(stream, wrappedObject) {
                        stream.writeUint8(wrappedObject.type)
                    }
                }, {
                    key: "binEncode_BOOL",
                    value: function binEncode_BOOL(stream, wrappedObject) {
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint8(wrappedObject.value ? 1 : 0)
                    }
                }, {
                    key: "binEncode_BOOL_ARRAY",
                    value: function binEncode_BOOL_ARRAY(stream, wrappedObject) {
                        var array = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint16(array.length);
                        for (var i = 0; i < array.length; i++) {
                            stream.writeUint8(array[i] ? 1 : 0)
                        }
                    }
                }, {
                    key: "binEncode_BYTE",
                    value: function binEncode_BYTE(stream, wrappedObject) {
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint8(wrappedObject.value)
                    }
                }, {
                    key: "binEncode_BYTE_ARRAY",
                    value: function binEncode_BYTE_ARRAY(stream, wrappedObject) {
                        var array = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint32(array.length);
                        stream.writeUint8Array(new Uint8Array(wrappedObject.value))
                    }
                }, {
                    key: "binEncode_SHORT",
                    value: function binEncode_SHORT(stream, wrappedObject) {
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint16(wrappedObject.value)
                    }
                }, {
                    key: "binEncode_SHORT_ARRAY",
                    value: function binEncode_SHORT_ARRAY(stream, wrappedObject) {
                        var array = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint16(array.length);
                        for (var i = 0; i < array.length; i++) {
                            stream.writeUint16(array[i])
                        }
                    }
                }, {
                    key: "binEncode_INT",
                    value: function binEncode_INT(stream, wrappedObject) {
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint32(wrappedObject.value)
                    }
                }, {
                    key: "binEncode_INT_ARRAY",
                    value: function binEncode_INT_ARRAY(stream, wrappedObject) {
                        var array = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint16(array.length);
                        for (var i = 0; i < array.length; i++) {
                            stream.writeUint32(array[i])
                        }
                    }
                }, {
                    key: "binEncode_LONG",
                    value: function binEncode_LONG(stream, wrappedObject) {
                        var longVal = wrappedObject.value;
                        var hiByte = Math.floor(longVal / Math.pow(2, 32));
                        var loByte = longVal % Math.pow(2, 32);
                        stream.writeUint8(wrappedObject.type);
                        stream.writeInt32(hiByte);
                        stream.writeInt32(loByte)
                    }
                }, {
                    key: "binEncode_LONG_ARRAY",
                    value: function binEncode_LONG_ARRAY(stream, wrappedObject) {
                        var array = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint16(array.length);
                        for (var i = 0; i < array.length; i++) {
                            var longVal = array[i];
                            var hiByte = Math.floor(longVal / Math.pow(2, 32));
                            var loByte = longVal % Math.pow(2, 32);
                            stream.writeInt32(hiByte);
                            stream.writeInt32(loByte)
                        }
                    }
                }, {
                    key: "binEncode_FLOAT",
                    value: function binEncode_FLOAT(stream, wrappedObject) {
                        stream.writeUint8(wrappedObject.type);
                        stream.writeFloat32(wrappedObject.value)
                    }
                }, {
                    key: "binEncode_FLOAT_ARRAY",
                    value: function binEncode_FLOAT_ARRAY(stream, wrappedObject) {
                        var array = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint16(array.length);
                        for (var i = 0; i < array.length; i++) {
                            stream.writeFloat32(array[i])
                        }
                    }
                }, {
                    key: "binEncode_DOUBLE",
                    value: function binEncode_DOUBLE(stream, wrappedObject) {
                        stream.writeUint8(wrappedObject.type);
                        stream.writeFloat64(wrappedObject.value)
                    }
                }, {
                    key: "binEncode_DOUBLE_ARRAY",
                    value: function binEncode_DOUBLE_ARRAY(stream, wrappedObject) {
                        var array = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint16(array.length);
                        for (var i = 0; i < array.length; i++) {
                            stream.writeFloat64(array[i])
                        }
                    }
                }, {
                    key: "binEncode_UTF_STRING",
                    value: function binEncode_UTF_STRING(stream, wrappedObject) {
                        var str = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint16(str.length);
                        stream.writeUint8Array(new TextEncoder("utf-8").encode(str))
                    }
                }, {
                    key: "binEncode_TEXT",
                    value: function binEncode_TEXT(stream, wrappedObject) {
                        var str = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint32(str.length);
                        stream.writeUint8Array(new TextEncoder("utf-8").encode(str))
                    }
                }, {
                    key: "binEncode_UTF_STRING_ARRAY",
                    value: function binEncode_UTF_STRING_ARRAY(stream, wrappedObject) {
                        var array = wrappedObject.value;
                        stream.writeUint8(wrappedObject.type);
                        stream.writeUint16(array.length);
                        for (var i = 0; i < array.length; i++) {
                            var encoded = new TextEncoder("utf-8").encode(array[i]);
                            stream.writeUint16(encoded.byteLength);
                            stream.writeUint8Array(encoded)
                        }
                    }
                }, {
                    key: "binary2object",
                    value: function binary2object(arrayBuffer) {
                        if (arrayBuffer.byteLength < 3) throw "Can't decode an SFSObject. Byte data is insufficient. Size: " + arrayBuffer.byteLength + " bytes";
                        return this.decodeSFSObject(new DataStream(arrayBuffer, 0, DataStream.BIG_ENDIAN))
                    }
                }, {
                    key: "binary2array",
                    value: function binary2array(arrayBuffer) {
                        if (arrayBuffer.byteLength < 3) throw "Can't decode an SFSArray. Byte data is insufficient. Size: " + arrayBuffer.byteLength + " bytes";
                        return this.decodeSFSArray(new DataStream(arrayBuffer, 0, DataStream.BIG_ENDIAN))
                    }
                }, {
                    key: "decodeSFSObject",
                    value: function decodeSFSObject(stream) {
                        var sfso = new _Data.SFSObject;
                        var typeId = stream.readUint8();
                        if (typeId !== _Data.SFSDataType.SFS_OBJECT) throw "Invalid SFSDataType. Expected: " + _Data.SFSDataType.SFS_OBJECT + ", found: " + typeId;
                        var size = stream.readUint16();
                        if (size < 0) throw "Can't decode SFSObject. Size is negative: " + size;
                        try {
                            for (var i = 0; i < size; i++) {
                                var keySize = stream.readUint16();
                                if (keySize < 0 || keySize > 255) throw "Invalid SFSObject key length. Found: " + keySize;
                                var keyData = stream.readUint8Array(keySize);
                                var key = String.fromCharCode.apply(String, keyData);
                                var wrappedObject = this.decodeObject(stream);
                                if (wrappedObject != null) sfso.put(key, wrappedObject.value, wrappedObject.type);
                                else throw "Could not decode value for key: " + key
                            }
                        } catch (ex) {
                            throw ex
                        }
                        return sfso
                    }
                }, {
                    key: "decodeSFSArray",
                    value: function decodeSFSArray(stream) {
                        var sfsa = new _Data.SFSArray;
                        var typeId = stream.readUint8();
                        if (typeId !== _Data.SFSDataType.SFS_ARRAY) throw "Invalid SFSDataType. Expected: " + _Data.SFSDataType.SFS_ARRAY + ", found: " + typeId;
                        var size = stream.readInt16();
                        if (size < 0) throw "Can't decode SFSArray. Size is negative: " + size;
                        try {
                            for (var i = 0; i < size; i++) {
                                var wrappedObject = this.decodeObject(stream);
                                if (wrappedObject != null) sfsa.add(wrappedObject.value, wrappedObject.type);
                                else throw "Could not decode value for index: " + i
                            }
                        } catch (ex) {
                            throw ex
                        }
                        return sfsa
                    }
                }, {
                    key: "decodeObject",
                    value: function decodeObject(stream) {
                        var wrappedObject = null;
                        var typeId = stream.readUint8();
                        if (typeId === _Data.SFSDataType.NULL) wrappedObject = this.binDecode_NULL(stream);
                        else if (typeId === _Data.SFSDataType.BOOL) wrappedObject = this.binDecode_BOOL(stream);
                        else if (typeId === _Data.SFSDataType.BOOL_ARRAY) wrappedObject = this.binDecode_BOOL_ARRAY(stream);
                        else if (typeId === _Data.SFSDataType.BYTE) wrappedObject = this.binDecode_BYTE(stream);
                        else if (typeId === _Data.SFSDataType.BYTE_ARRAY) wrappedObject = this.binDecode_BYTE_ARRAY(stream);
                        else if (typeId === _Data.SFSDataType.SHORT) wrappedObject = this.binDecode_SHORT(stream);
                        else if (typeId === _Data.SFSDataType.SHORT_ARRAY) wrappedObject = this.binDecode_SHORT_ARRAY(stream);
                        else if (typeId === _Data.SFSDataType.INT) wrappedObject = this.binDecode_INT(stream);
                        else if (typeId === _Data.SFSDataType.INT_ARRAY) wrappedObject = this.binDecode_INT_ARRAY(stream);
                        else if (typeId === _Data.SFSDataType.LONG) wrappedObject = this.binDecode_LONG(stream);
                        else if (typeId === _Data.SFSDataType.LONG_ARRAY) wrappedObject = this.binDecode_LONG_ARRAY(stream);
                        else if (typeId === _Data.SFSDataType.FLOAT) wrappedObject = this.binDecode_FLOAT(stream);
                        else if (typeId === _Data.SFSDataType.FLOAT_ARRAY) wrappedObject = this.binDecode_FLOAT_ARRAY(stream);
                        else if (typeId === _Data.SFSDataType.DOUBLE) wrappedObject = this.binDecode_DOUBLE(stream);
                        else if (typeId === _Data.SFSDataType.DOUBLE_ARRAY) wrappedObject = this.binDecode_DOUBLE_ARRAY(stream);
                        else if (typeId === _Data.SFSDataType.UTF_STRING) wrappedObject = this.binDecode_UTF_STRING(stream);
                        else if (typeId === _Data.SFSDataType.TEXT) wrappedObject = this.binDecode_TEXT(stream);
                        else if (typeId === _Data.SFSDataType.UTF_STRING_ARRAY) wrappedObject = this.binDecode_UTF_STRING_ARRAY(stream);
                        else if (typeId === _Data.SFSDataType.SFS_ARRAY) {
                            stream.seek(stream.position - 1);
                            var sfsArr = this.decodeSFSArray(stream);
                            wrappedObject = new _Data.SFSDataWrapper(typeId, sfsArr)
                        } else if (typeId === _Data.SFSDataType.SFS_OBJECT) {
                            stream.seek(stream.position - 1);
                            var sfsObj = this.decodeSFSObject(stream);
                            wrappedObject = new _Data.SFSDataWrapper(typeId, sfsObj)
                        } else throw "Unknow SFSDataType ID: " + typeId;
                        return wrappedObject
                    }
                }, {
                    key: "binDecode_NULL",
                    value: function binDecode_NULL(stream) {
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.NULL, null)
                    }
                }, {
                    key: "binDecode_BOOL",
                    value: function binDecode_BOOL(stream) {
                        var boolByte = stream.readUint8();
                        var boolVal = null;
                        if (boolByte === 0) boolVal = false;
                        else if (boolByte === 1) boolVal = true;
                        else throw "Error decoding Bool type. Illegal value: " + boolByte;
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.BOOL, boolVal)
                    }
                }, {
                    key: "binDecode_BOOL_ARRAY",
                    value: function binDecode_BOOL_ARRAY(stream) {
                        var arraySize = this.getTypedArraySize(stream);
                        var array = [];
                        for (var j = 0; j < arraySize; j++) {
                            var boolByte = stream.readUint8();
                            var boolVal = null;
                            if (boolByte === 0) boolVal = false;
                            else if (boolByte === 1) boolVal = true;
                            else throw "Error decoding Bool type. Illegal value: " + boolByte;
                            array.push(boolVal)
                        }
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.BOOL_ARRAY, array)
                    }
                }, {
                    key: "binDecode_BYTE",
                    value: function binDecode_BYTE(stream) {
                        var byteVal = stream.readUint8();
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.BYTE, byteVal)
                    }
                }, {
                    key: "binDecode_BYTE_ARRAY",
                    value: function binDecode_BYTE_ARRAY(stream) {
                        var arraySize = stream.readInt32();
                        if (arraySize < 0) throw "Error decoding typed array size. Negative size: " + arraySize;
                        var array = [];
                        for (var j = 0; j < arraySize; j++) {
                            array.push(stream.readUint8())
                        }
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.BYTE_ARRAY, array)
                    }
                }, {
                    key: "binDecode_SHORT",
                    value: function binDecode_SHORT(stream) {
                        var shortVal = stream.readInt16();
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.SHORT, shortVal)
                    }
                }, {
                    key: "binDecode_SHORT_ARRAY",
                    value: function binDecode_SHORT_ARRAY(stream) {
                        var arraySize = this.getTypedArraySize(stream);
                        var array = [];
                        for (var j = 0; j < arraySize; j++) {
                            array.push(stream.readInt16())
                        }
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.SHORT_ARRAY, array)
                    }
                }, {
                    key: "binDecode_INT",
                    value: function binDecode_INT(stream) {
                        var intVal = stream.readInt32();
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.INT, intVal)
                    }
                }, {
                    key: "binDecode_INT_ARRAY",
                    value: function binDecode_INT_ARRAY(stream) {
                        var arraySize = this.getTypedArraySize(stream);
                        var array = [];
                        for (var j = 0; j < arraySize; j++) {
                            array.push(stream.readInt32())
                        }
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.INT_ARRAY, array)
                    }
                }, {
                    key: "binDecode_LONG",
                    value: function binDecode_LONG(stream) {
                        var hiByte = stream.readInt32();
                        var loByte = stream.readUint32();
                        var longVal = hiByte * Math.pow(2, 32) + loByte;
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.LONG, longVal)
                    }
                }, {
                    key: "binDecode_LONG_ARRAY",
                    value: function binDecode_LONG_ARRAY(stream) {
                        var arraySize = this.getTypedArraySize(stream);
                        var array = [];
                        for (var j = 0; j < arraySize; j++) {
                            var hiByte = stream.readInt32();
                            var loByte = stream.readUint32();
                            var longVal = hiByte * Math.pow(2, 32) + loByte;
                            array.push(longVal)
                        }
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.LONG_ARRAY, array)
                    }
                }, {
                    key: "binDecode_FLOAT",
                    value: function binDecode_FLOAT(stream) {
                        var floatVal = stream.readFloat32();
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.FLOAT, floatVal)
                    }
                }, {
                    key: "binDecode_FLOAT_ARRAY",
                    value: function binDecode_FLOAT_ARRAY(stream) {
                        var arraySize = this.getTypedArraySize(stream);
                        var array = [];
                        for (var j = 0; j < arraySize; j++) {
                            array.push(stream.readFloat32())
                        }
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.FLOAT_ARRAY, array)
                    }
                }, {
                    key: "binDecode_DOUBLE",
                    value: function binDecode_DOUBLE(stream) {
                        var doubleVal = stream.readFloat64();
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.DOUBLE, doubleVal)
                    }
                }, {
                    key: "binDecode_DOUBLE_ARRAY",
                    value: function binDecode_DOUBLE_ARRAY(stream) {
                        var arraySize = this.getTypedArraySize(stream);
                        var array = [];
                        for (var j = 0; j < arraySize; j++) {
                            array.push(stream.readFloat64())
                        }
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.DOUBLE_ARRAY, array)
                    }
                }, {
                    key: "binDecode_UTF_STRING",
                    value: function binDecode_UTF_STRING(stream) {
                        var strLen = stream.readInt16();
                        if (strLen < 0) throw "Error decoding UTF_STRING. Negative size: " + strLen;
                        var strData = stream.readUint8Array(strLen);
                        var strVal = new TextDecoder("utf-8").decode(strData);
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.UTF_STRING, strVal)
                    }
                }, {
                    key: "binDecode_UTF_STRING_ARRAY",
                    value: function binDecode_UTF_STRING_ARRAY(stream) {
                        var arraySize = this.getTypedArraySize(stream);
                        var array = [];
                        for (var j = 0; j < arraySize; j++) {
                            var strLen = stream.readInt16();
                            if (strLen < 0) throw "Error decoding UTF_STRING. Negative size: " + strLen;
                            var strData = stream.readUint8Array(strLen);
                            var strVal = new TextDecoder("utf-8").decode(strData);
                            array.push(strVal)
                        }
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.UTF_STRING_ARRAY, array)
                    }
                }, {
                    key: "binDecode_TEXT",
                    value: function binDecode_TEXT(stream) {
                        var strLen = stream.readInt32();
                        if (strLen < 0) throw "Error decoding TEXT. Negative size: " + strLen;
                        var strData = stream.readUint8Array(strLen);
                        var strVal = new TextDecoder("utf-8").decode(strData);
                        return new _Data.SFSDataWrapper(_Data.SFSDataType.TEXT, strVal)
                    }
                }, {
                    key: "getTypedArraySize",
                    value: function getTypedArraySize(stream) {
                        var arraySize = stream.readUint16();
                        if (arraySize < 0) throw "Error decoding typed array size. Negative size: " + arraySize;
                        return arraySize
                    }
                }], [{
                    key: "instance",
                    get: function get() {
                        if (!this[singleton]) {
                            this[singleton] = new SFSDataSerializer(singletonEnforcer)
                        }
                        return (0, _seal2.default)(this[singleton])
                    }
                }]);
                return SFSDataSerializer
            }();
            exports.SFSDataSerializer = SFSDataSerializer
        }, {
            "../entities/Data": 149,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/core-js/symbol": 16,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        146: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SFSBuddyEvent = exports.SFSEvent = exports.EventDispatcher = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var EventDispatcher = function() {
                function EventDispatcher() {
                    (0, _classCallCheck3.default)(this, EventDispatcher);
                    this._listenersByEvent = {}
                }(0, _createClass3.default)(EventDispatcher, [{
                    key: "addEventListener",
                    value: function addEventListener(evtType, callback, scope) {
                        if (!this._listenersByEvent[evtType]) this._listenersByEvent[evtType] = [];
                        this._listenersByEvent[evtType].push({
                            callback: callback,
                            scope: scope
                        })
                    }
                }, {
                    key: "removeEventListener",
                    value: function removeEventListener(evtType, callback) {
                        var listeners = this._listenersByEvent[evtType];
                        if (listeners) {
                            for (var i = 0; i < listeners.length; i++) {
                                if (listeners[i].callback === callback) {
                                    listeners.splice(i, 1);
                                    break
                                }
                            }
                        }
                    }
                }, {
                    key: "dispatchEvent",
                    value: function dispatchEvent(evtType, evtObj) {
                        var listeners = this._listenersByEvent[evtType];
                        if (listeners) {
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
                            try {
                                for (var _iterator = (0, _getIterator3.default)(listeners), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var listener = _step.value;
                                    listener.callback.call(listener.scope, evtObj)
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return()
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError
                                    }
                                }
                            }
                        }
                    }
                }]);
                return EventDispatcher
            }();
            var SFSEvent = (0, _freeze2.default)({
                HANDSHAKE: "handshake",
                CONNECTION: "connection",
                CONNECTION_LOST: "connectionLost",
                LOGIN: "login",
                LOGIN_ERROR: "loginError",
                LOGOUT: "logout",
                ROOM_ADD: "roomAdd",
                ROOM_CREATION_ERROR: "roomCreationError",
                ROOM_REMOVE: "roomRemove",
                ROOM_JOIN: "roomJoin",
                ROOM_JOIN_ERROR: "roomJoinError",
                USER_ENTER_ROOM: "userEnterRoom",
                USER_EXIT_ROOM: "userExitRoom",
                USER_COUNT_CHANGE: "userCountChange",
                PROXIMITY_LIST_UPDATE: "proximityListUpdate",
                PLAYER_TO_SPECTATOR: "playerToSpectator",
                PLAYER_TO_SPECTATOR_ERROR: "playerToSpectatorError",
                SPECTATOR_TO_PLAYER: "spectatorToPlayer",
                SPECTATOR_TO_PLAYER_ERROR: "spectatorToPlayerError",
                ROOM_NAME_CHANGE: "roomNameChange",
                ROOM_NAME_CHANGE_ERROR: "roomNameChangeError",
                ROOM_PASSWORD_STATE_CHANGE: "roomPasswordStateChange",
                ROOM_PASSWORD_STATE_CHANGE_ERROR: "roomPasswordStateChangeError",
                ROOM_CAPACITY_CHANGE: "roomCapacityChange",
                ROOM_CAPACITY_CHANGE_ERROR: "roomCapacityChangeError",
                PUBLIC_MESSAGE: "publicMessage",
                PRIVATE_MESSAGE: "privateMessage",
                OBJECT_MESSAGE: "objectMessage",
                MODERATOR_MESSAGE: "moderatorMessage",
                ADMIN_MESSAGE: "adminMessage",
                EXTENSION_RESPONSE: "extensionResponse",
                ROOM_VARIABLES_UPDATE: "roomVariablesUpdate",
                USER_VARIABLES_UPDATE: "userVariablesUpdate",
                MMOITEM_VARIABLES_UPDATE: "mmoItemVariablesUpdate",
                ROOM_GROUP_SUBSCRIBE: "roomGroupSubscribe",
                ROOM_GROUP_SUBSCRIBE_ERROR: "roomGroupSubscribeError",
                ROOM_GROUP_UNSUBSCRIBE: "roomGroupUnsubscribe",
                ROOM_GROUP_UNSUBSCRIBE_ERROR: "roomGroupUnsubscribeError",
                ROOM_FIND_RESULT: "roomFindResult",
                USER_FIND_RESULT: "userFindResult",
                INVITATION: "invitation",
                INVITATION_REPLY: "invitationReply",
                INVITATION_REPLY_ERROR: "invitationReplyError",
                PING_PONG: "pingPong",
                SOCKET_ERROR: "socketError"
            });
            var SFSBuddyEvent = (0, _freeze2.default)({
                BUDDY_LIST_INIT: "buddyListInit",
                BUDDY_ADD: "buddyAdd",
                BUDDY_REMOVE: "buddyRemove",
                BUDDY_BLOCK: "buddyBlock",
                BUDDY_ERROR: "buddyError",
                BUDDY_ONLINE_STATE_CHANGE: "buddyOnlineStateChange",
                BUDDY_VARIABLES_UPDATE: "buddyVariablesUpdate",
                BUDDY_MESSAGE: "buddyMessage"
            });
            exports.EventDispatcher = EventDispatcher;
            exports.SFSEvent = SFSEvent;
            exports.SFSBuddyEvent = SFSBuddyEvent
        }, {
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        147: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SFSTypeError = exports.SFSValidationError = exports.SFSError = undefined;
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSError = function(_Error) {
                (0, _inherits3.default)(SFSError, _Error);

                function SFSError(message) {
                    (0, _classCallCheck3.default)(this, SFSError);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SFSError.__proto__ || (0, _getPrototypeOf2.default)(SFSError)).call(this, message));
                    _this.name = "SFSError";
                    return _this
                }
                return SFSError
            }(Error);
            var SFSValidationError = function(_SFSError) {
                (0, _inherits3.default)(SFSValidationError, _SFSError);

                function SFSValidationError(message) {
                    var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                    (0, _classCallCheck3.default)(this, SFSValidationError);
                    var _this2 = (0, _possibleConstructorReturn3.default)(this, (SFSValidationError.__proto__ || (0, _getPrototypeOf2.default)(SFSValidationError)).call(this, message));
                    _this2.name = "SFSValidationError";
                    _this2._errors = errors;
                    return _this2
                }(0, _createClass3.default)(SFSValidationError, [{
                    key: "errors",
                    get: function get() {
                        return this._errors
                    }
                }]);
                return SFSValidationError
            }(SFSError);
            var SFSTypeError = function(_SFSError2) {
                (0, _inherits3.default)(SFSTypeError, _SFSError2);

                function SFSTypeError(message) {
                    (0, _classCallCheck3.default)(this, SFSTypeError);
                    var _this3 = (0, _possibleConstructorReturn3.default)(this, (SFSTypeError.__proto__ || (0, _getPrototypeOf2.default)(SFSTypeError)).call(this, message));
                    _this3.name = "SFSTypeError";
                    return _this3
                }
                return SFSTypeError
            }(SFSError);
            exports.SFSError = SFSError;
            exports.SFSValidationError = SFSValidationError;
            exports.SFSTypeError = SFSTypeError
        }, {
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        148: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SocketEngine = exports.SocketEvent = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _Events = _dereq_("./Events");
            var _Data = _dereq_("../entities/Data");
            var _Base = _dereq_("../requests/Base");
            var _Logging = _dereq_("../utils/Logging");
            var _Miscellanea = _dereq_("../utils/Miscellanea");
            var _Exceptions = _dereq_("./Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SocketEvent = (0, _freeze2.default)({
                CONNECT: "socketConnect",
                DISCONNECT: "socketDisconnect",
                DATA: "socketData",
                IOERROR: "socketIOError"
            });
            var SocketEngine = function(_EventDispatcher) {
                (0, _inherits3.default)(SocketEngine, _EventDispatcher);

                function SocketEngine(sfs) {
                    (0, _classCallCheck3.default)(this, SocketEngine);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SocketEngine.__proto__ || (0, _getPrototypeOf2.default)(SocketEngine)).call(this));
                    _this._sfs = sfs;
                    _this._logger = _Logging.Logger.instance;
                    _this._isConnected = false;
                    _this._isConnecting = false;
                    _this._socket = null;
                    _this._protocolCodec = new SFSProtocolCodec(sfs);
                    _this._disconnectionReason = _Miscellanea.ClientDisconnectionReason.UNKNOWN;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SocketEngine, [{
                    key: "connect",
                    value: function connect(host, port, useSSL) {
                        this._isConnecting = true;
                        var protocol = "ws" + (useSSL ? "s" : "");
                        this._socket = new WebSocket(protocol + "://" + host + ":" + port + "/BlueBox/websocket");
                        this._socket.binaryType = "arraybuffer";
                        this._socket._scope = this;
                        this._socket.onopen = this._onSocketConnect;
                        this._socket.onclose = this._onSocketDisconnect;
                        this._socket.onmessage = this._onSocketData;
                        this._socket.onerror = this._onSocketError
                    }
                }, {
                    key: "disconnect",
                    value: function disconnect(reason) {
                        this._disconnectionReason = reason;
                        this._socket.close()
                    }
                }, {
                    key: "addController",
                    value: function addController(id, controllerObj) {
                        if (this._controllers[id] == null) this._controllers[id] = controllerObj
                    }
                }, {
                    key: "removeController",
                    value: function removeController(id) {
                        delete this._controllers[id]
                    }
                }, {
                    key: "send",
                    value: function send(message) {
                        if (this._sfs.debug) this._logger.debug("OUTGOING MESSAGE: " + message.dump());
                        var bytes = this._protocolCodec.onPacketWrite(message);
                        this._socket.send(bytes)
                    }
                }, {
                    key: "_onSocketConnect",
                    value: function _onSocketConnect() {
                        if (this._scope._sfs.debug) this._scope._logger.debug("Socket connection established");
                        this._scope._isConnected = true;
                        this._scope._isConnecting = false;
                        this._scope.dispatchEvent(SocketEvent.CONNECT, {
                            success: true
                        })
                    }
                }, {
                    key: "_onSocketDisconnect",
                    value: function _onSocketDisconnect() {
                        this._scope._isConnected = false;
                        if (this._scope.isConnecting) {
                            if (this._scope._sfs.debug) this._scope._logger.debug("Can't establish socket connection");
                            this._scope._isConnecting = false;
                            this._scope.dispatchEvent(SocketEvent.CONNECT, {
                                success: false
                            })
                        } else {
                            if (this._scope._sfs.debug) this._scope._logger.debug("Socket disconnection occurred");
                            this._scope.dispatchEvent(SocketEvent.DISCONNECT, {
                                reason: this._scope._disconnectionReason
                            });
                            this._scope._disconnectionReason = _Miscellanea.ClientDisconnectionReason.UNKNOWN
                        }
                    }
                }, {
                    key: "_onSocketData",
                    value: function _onSocketData(event) {
                        var message = this._scope._protocolCodec.onPacketRead(event.data);
                        if (this._scope._sfs.debug) this._scope._logger.debug("INCOMING MESSAGE: " + message.dump());
                        this._scope.dispatchEvent(SocketEvent.DATA, message)
                    }
                }, {
                    key: "_onSocketError",
                    value: function _onSocketError(event) {
                        this._scope.dispatchEvent(SocketEvent.IOERROR, event.data)
                    }
                }, {
                    key: "isConnected",
                    get: function get() {
                        return this._isConnected
                    }
                }, {
                    key: "isConnecting",
                    get: function get() {
                        return this._isConnecting
                    }
                }, {
                    key: "maxMessageSize",
                    get: function get() {
                        return this._protocolCodec.maxMessageSize
                    },
                    set: function set(value) {
                        this._protocolCodec.maxMessageSize = value
                    }
                }, {
                    key: "compressionThreshold",
                    get: function get() {
                        return this._protocolCodec.compressionThreshold
                    },
                    set: function set(value) {
                        this._protocolCodec.compressionThreshold = value
                    }
                }]);
                return SocketEngine
            }(_Events.EventDispatcher);
            var SFSProtocolCodec = function() {
                function SFSProtocolCodec(sfs) {
                    (0, _classCallCheck3.default)(this, SFSProtocolCodec);
                    this.CONTROLLER_ID = "c";
                    this.ACTION_ID = "a";
                    this.PARAM_ID = "p";
                    this._maxMessageSize = 1e4;
                    this._compressionThreshold = 1024;
                    this._sfs = sfs;
                    this._logger = _Logging.Logger.instance;
                    (0, _seal2.default)(this)
                }(0, _createClass3.default)(SFSProtocolCodec, [{
                    key: "onPacketRead",
                    value: function onPacketRead(packet) {
                        if (packet.byteLength === 0) {
                            this._logger.error("Unexpected empty packet data: no readable bytes available!");
                            return
                        }
                        var stream = new DataStream(packet, 0, DataStream.BIG_ENDIAN);
                        var headerByte = stream.readUint8();
                        var isCompressed = (headerByte & 32) > 0;
                        var isBigSize = (headerByte & 8) > 0;
                        var packetSize = isBigSize ? stream.readUint32() : stream.readUint16();
                        var binData = stream.readUint8Array(packetSize);
                        if (isCompressed) binData = this.decompress(binData);
                        if (this._sfs.debug) {
                            if (packet.byteLength > 1024) this._logger.debug("DATA READ - Binary size > 1024; dump omitted");
                            else this._logger.debug("DATA READ - " + _Miscellanea.DumpFormatter.hexDump(binData))
                        }
                        var sfsObj = _Data.SFSObject.newFromBinaryData(binData);
                        return new _Base.Message(sfsObj.get(this.ACTION_ID), sfsObj.get(this.CONTROLLER_ID), sfsObj.get(this.PARAM_ID))
                    }
                }, {
                    key: "onPacketWrite",
                    value: function onPacketWrite(message) {
                        var sfsObj = new _Data.SFSObject;
                        sfsObj.put(this.CONTROLLER_ID, message.targetController, _Data.SFSDataType.BYTE);
                        sfsObj.put(this.ACTION_ID, message.id, _Data.SFSDataType.SHORT);
                        sfsObj.put(this.PARAM_ID, message.content, _Data.SFSDataType.SFS_OBJECT);
                        var binData = sfsObj.toBinary();
                        var size = binData.byteLength;
                        var packet = new DataStream(new ArrayBuffer, 0, DataStream.BIG_ENDIAN);
                        var isCompressed = size > this.compressionThreshold;
                        var headerByte = 128;
                        if (isCompressed) {
                            headerByte += 32;
                            binData = this.compress(binData);
                            size = binData.byteLength
                        }
                        var isBigSize = size > 65335;
                        if (isBigSize) headerByte += 8;
                        packet.writeUint8(headerByte);
                        if (isBigSize) packet.writeUint32(size);
                        else packet.writeUint16(size);
                        packet.writeUint8Array(binData);
                        var finalPacket = new Uint8Array(packet.buffer);
                        if (finalPacket.byteLength > this.maxMessageSize) {
                            throw new _Exceptions.SFSError("Message size is too big: " + finalPacket.byteLength + "; the server limit is: " + this.maxMessageSize)
                        }
                        if (this._sfs.debug) this._logger.debug("DATA WRITTEN - " + _Miscellanea.DumpFormatter.hexDump(finalPacket));
                        return finalPacket
                    }
                }, {
                    key: "decompress",
                    value: function decompress(byteBuff) {
                        var inflate = new Zlib.Inflate(byteBuff);
                        return inflate.decompress()
                    }
                }, {
                    key: "compress",
                    value: function compress(byteBuff) {
                        var deflate = new Zlib.Deflate(byteBuff);
                        return deflate.compress()
                    }
                }, {
                    key: "maxMessageSize",
                    get: function get() {
                        return this._maxMessageSize
                    },
                    set: function set(value) {
                        this._maxMessageSize = value
                    }
                }, {
                    key: "compressionThreshold",
                    get: function get() {
                        return this._compressionThreshold
                    },
                    set: function set(value) {
                        this._compressionThreshold = value
                    }
                }]);
                return SFSProtocolCodec
            }();
            exports.SocketEvent = SocketEvent;
            exports.SocketEngine = SocketEngine
        }, {
            "../entities/Data": 149,
            "../requests/Base": 166,
            "../utils/Logging": 206,
            "../utils/Miscellanea": 207,
            "./Events": 146,
            "./Exceptions": 147,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        149: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Vec3D = exports.SFSArray = exports.SFSObject = exports.SFSDataWrapper = exports.SFSDataType = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _map = _dereq_("babel-runtime/core-js/map");
            var _map2 = _interopRequireDefault(_map);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _isSafeInteger = _dereq_("babel-runtime/core-js/number/is-safe-integer");
            var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _DataSerializer = _dereq_("../core/DataSerializer");
            var _Miscellanea = _dereq_("../utils/Miscellanea");
            var _Logging = _dereq_("../utils/Logging");
            var _Exceptions = _dereq_("../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSDataType = (0, _freeze2.default)({
                NULL: 0,
                BOOL: 1,
                BYTE: 2,
                SHORT: 3,
                INT: 4,
                LONG: 5,
                FLOAT: 6,
                DOUBLE: 7,
                UTF_STRING: 8,
                BOOL_ARRAY: 9,
                BYTE_ARRAY: 10,
                SHORT_ARRAY: 11,
                INT_ARRAY: 12,
                LONG_ARRAY: 13,
                FLOAT_ARRAY: 14,
                DOUBLE_ARRAY: 15,
                UTF_STRING_ARRAY: 16,
                SFS_ARRAY: 17,
                SFS_OBJECT: 18,
                TEXT: 20,
                fromId: function fromId(id) {
                    if (typeof id != "number") return null;
                    for (var key in this) {
                        if (this.hasOwnProperty(key) && this[key] === id) return key
                    }
                },
                validate: function validate(id, value) {
                    if (this.fromId(id) == null) throw new _Exceptions.SFSTypeError("Invalid type passed; use one of the SFSDataType constants");
                    var typeError = null;
                    if (id === this.NULL && value != null) typeError = "a null value";
                    if (id !== this.NULL && value == null) typeError = "a non-null value";
                    if (id === this.BOOL && !this.isBoolType(value)) typeError = "a boolean value";
                    if (id === this.BYTE && !this.isByteType(value)) typeError = "an integer number in this range: 0 <= value < 256";
                    if (id === this.SHORT && !this.isShortType(value)) typeError = "an integer number in this range: -32.768 <= value < +32.768";
                    if (id === this.INT && !this.isIntType(value)) typeError = "an integer number in this range: -2^31 <= value < +2^31";
                    if (id === this.LONG && !this.isLongType(value)) typeError = "an integer number in this range: -(2^53 - 1) <= value <= +(2^53 - 1)";
                    if (id === this.FLOAT && !this.isFloatType(value)) typeError = "a number in this range: -3.4028234663852886e+38 <= value <= 3.4028234663852886e+38";
                    if (id === this.DOUBLE && !this.isDoubleType(value)) typeError = "a finite number";
                    if ((id === this.UTF_STRING || id === this.TEXT) && !this.isStringType(value)) typeError = "a string value";
                    if (id === this.BOOL_ARRAY && !this.isArrayType(value, this.isBoolType)) typeError = "an array of boolean values";
                    if (id === this.BYTE_ARRAY && !this.isArrayType(value, this.isByteType)) typeError = "an array of integer numbers in this range: 0 <= value < 256";
                    if (id === this.SHORT_ARRAY && !this.isArrayType(value, this.isShortType)) typeError = "an array of integer numbers in this range: -32.768 <= value < +32.768";
                    if (id === this.INT_ARRAY && !this.isArrayType(value, this.isIntType)) typeError = "an array of integer numbers in this range: -2^31 <= value < +2^31";
                    if (id === this.LONG_ARRAY && !this.isArrayType(value, this.isLongType)) typeError = "an array of integer numbers in this range: -(2^53 - 1) <= value <= +(2^53 - 1)";
                    if (id === this.FLOAT_ARRAY && !this.isArrayType(value, this.isFloatType)) typeError = "an array of numbers in this range: -3.4028234663852886e+38 <= value <= 3.4028234663852886e+38";
                    if (id === this.DOUBLE_ARRAY && !this.isArrayType(value, this.isDoubleType)) typeError = "an array of finite numbers";
                    if (id === this.UTF_STRING_ARRAY && !this.isArrayType(value, this.isStringType)) typeError = "an array of string values";
                    if (id === this.SFS_OBJECT && !(value instanceof SFSObject)) typeError = "a SFSObject instance";
                    if (id === this.SFS_ARRAY && !(value instanceof SFSArray)) typeError = "a SFSArray instance";
                    if (typeError != null) throw new _Exceptions.SFSTypeError("Invalid value passed; type SFSDataType." + this.fromId(id) + " requires " + typeError)
                },
                isBoolType: function isBoolType(value) {
                    return typeof value === "boolean"
                },
                isByteType: function isByteType(value) {
                    return typeof value === "number" && Math.floor(value) === value && value >= 0 && value < 256
                },
                isShortType: function isShortType(value) {
                    return typeof value === "number" && Math.floor(value) === value && value >= -32768 && value < 32768
                },
                isIntType: function isIntType(value) {
                    return typeof value === "number" && Math.floor(value) === value && value >= -2147483648 && value < 2147483648
                },
                isLongType: function isLongType(value) {
                    return typeof value === "number" && Math.floor(value) === value && (0, _isSafeInteger2.default)(value)
                },
                isFloatType: function isFloatType(value) {
                    return typeof value === "number" && value >= -3.4028234663852886e38 && value <= 3.4028234663852886e38
                },
                isDoubleType: function isDoubleType(value) {
                    return typeof value === "number" && isFinite(value)
                },
                isStringType: function isStringType(value) {
                    return typeof value === "string"
                },
                isArrayType: function isArrayType(value, itemCheck) {
                    return value instanceof Array && (value.length > 0 ? itemCheck(value[0]) : true)
                }
            });
            var SFSDataWrapper = function SFSDataWrapper(typeId, obj) {
                (0, _classCallCheck3.default)(this, SFSDataWrapper);
                this.type = typeId;
                this.value = obj;
                (0, _freeze2.default)(this)
            };
            var SFSObject = function() {
                function SFSObject() {
                    (0, _classCallCheck3.default)(this, SFSObject);
                    this._dataHolder = new _map2.default;
                    this._serializer = _DataSerializer.SFSDataSerializer.instance;
                    (0, _freeze2.default)(this)
                }(0, _createClass3.default)(SFSObject, [{
                    key: "toBinary",
                    value: function toBinary() {
                        return this._serializer.object2binary(this)
                    }
                }, {
                    key: "keys",
                    value: function keys() {
                        return this._dataHolder.keys()
                    }
                }, {
                    key: "getWrappedItem",
                    value: function getWrappedItem(key) {
                        return this._dataHolder.get(key)
                    }
                }, {
                    key: "getKeysArray",
                    value: function getKeysArray() {
                        return (0, _from2.default)(this.keys())
                    }
                }, {
                    key: "size",
                    value: function size() {
                        return this._dataHolder.size
                    }
                }, {
                    key: "get",
                    value: function get(key) {
                        var typeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        var wrappedItem = this.getWrappedItem(key);
                        if (wrappedItem != null && typeId != null && wrappedItem.type != typeId) throw new _Exceptions.SFSTypeError("Requested value is not of type SFSDataType." + SFSDataType.fromId(typeId));
                        else return wrappedItem != null ? wrappedItem.value : null
                    }
                }, {
                    key: "getBool",
                    value: function getBool(key) {
                        return this.get(key, SFSDataType.BOOL)
                    }
                }, {
                    key: "getByte",
                    value: function getByte(key) {
                        return this.get(key, SFSDataType.BYTE)
                    }
                }, {
                    key: "getShort",
                    value: function getShort(key) {
                        return this.get(key, SFSDataType.SHORT)
                    }
                }, {
                    key: "getInt",
                    value: function getInt(key) {
                        return this.get(key, SFSDataType.INT)
                    }
                }, {
                    key: "getLong",
                    value: function getLong(key) {
                        var value = this.get(key, SFSDataType.LONG);
                        if (!(0, _isSafeInteger2.default)(value)) _Logging.Logger.instance.warn("Long value contained in SFSObject is not safe");
                        return value
                    }
                }, {
                    key: "getFloat",
                    value: function getFloat(key) {
                        return this.get(key, SFSDataType.FLOAT)
                    }
                }, {
                    key: "getDouble",
                    value: function getDouble(key) {
                        return this.get(key, SFSDataType.DOUBLE)
                    }
                }, {
                    key: "getUtfString",
                    value: function getUtfString(key) {
                        return this.get(key, SFSDataType.UTF_STRING)
                    }
                }, {
                    key: "getText",
                    value: function getText(key) {
                        return this.get(key, SFSDataType.TEXT)
                    }
                }, {
                    key: "getBoolArray",
                    value: function getBoolArray(key) {
                        return this.get(key, SFSDataType.BOOL_ARRAY)
                    }
                }, {
                    key: "getByteArray",
                    value: function getByteArray(key) {
                        return this.get(key, SFSDataType.BYTE_ARRAY)
                    }
                }, {
                    key: "getShortArray",
                    value: function getShortArray(key) {
                        return this.get(key, SFSDataType.SHORT_ARRAY)
                    }
                }, {
                    key: "getIntArray",
                    value: function getIntArray(key) {
                        return this.get(key, SFSDataType.INT_ARRAY)
                    }
                }, {
                    key: "getLongArray",
                    value: function getLongArray(key) {
                        return this.get(key, SFSDataType.LONG_ARRAY)
                    }
                }, {
                    key: "getFloatArray",
                    value: function getFloatArray(key) {
                        return this.get(key, SFSDataType.FLOAT_ARRAY)
                    }
                }, {
                    key: "getDoubleArray",
                    value: function getDoubleArray(key) {
                        return this.get(key, SFSDataType.DOUBLE_ARRAY)
                    }
                }, {
                    key: "getUtfStringArray",
                    value: function getUtfStringArray(key) {
                        return this.get(key, SFSDataType.UTF_STRING_ARRAY)
                    }
                }, {
                    key: "getSFSObject",
                    value: function getSFSObject(key) {
                        return this.get(key, SFSDataType.SFS_OBJECT)
                    }
                }, {
                    key: "getSFSArray",
                    value: function getSFSArray(key) {
                        return this.get(key, SFSDataType.SFS_ARRAY)
                    }
                }, {
                    key: "put",
                    value: function put(key, value, typeId) {
                        if (typeof key !== "string") throw "Invalid key passed; must be of type string";
                        SFSDataType.validate(typeId, value);
                        this._dataHolder.set(key, new SFSDataWrapper(typeId, value))
                    }
                }, {
                    key: "putNull",
                    value: function putNull(key) {
                        this.put(key, null, SFSDataType.NULL)
                    }
                }, {
                    key: "putBool",
                    value: function putBool(key, value) {
                        this.put(key, value, SFSDataType.BOOL)
                    }
                }, {
                    key: "putByte",
                    value: function putByte(key, value) {
                        this.put(key, value, SFSDataType.BYTE)
                    }
                }, {
                    key: "putShort",
                    value: function putShort(key, value) {
                        this.put(key, value, SFSDataType.SHORT)
                    }
                }, {
                    key: "putInt",
                    value: function putInt(key, value) {
                        this.put(key, value, SFSDataType.INT)
                    }
                }, {
                    key: "putLong",
                    value: function putLong(key, value) {
                        this.put(key, value, SFSDataType.LONG)
                    }
                }, {
                    key: "putFloat",
                    value: function putFloat(key, value) {
                        this.put(key, value, SFSDataType.FLOAT)
                    }
                }, {
                    key: "putDouble",
                    value: function putDouble(key, value) {
                        this.put(key, value, SFSDataType.DOUBLE)
                    }
                }, {
                    key: "putUtfString",
                    value: function putUtfString(key, value) {
                        this.put(key, value, SFSDataType.UTF_STRING)
                    }
                }, {
                    key: "putText",
                    value: function putText(key, value) {
                        this.put(key, value, SFSDataType.TEXT)
                    }
                }, {
                    key: "putBoolArray",
                    value: function putBoolArray(key, array) {
                        this.put(key, array, SFSDataType.BOOL_ARRAY)
                    }
                }, {
                    key: "putByteArray",
                    value: function putByteArray(key, array) {
                        this.put(key, array, SFSDataType.BYTE_ARRAY)
                    }
                }, {
                    key: "putShortArray",
                    value: function putShortArray(key, array) {
                        this.put(key, array, SFSDataType.SHORT_ARRAY)
                    }
                }, {
                    key: "putIntArray",
                    value: function putIntArray(key, array) {
                        this.put(key, array, SFSDataType.INT_ARRAY)
                    }
                }, {
                    key: "putLongArray",
                    value: function putLongArray(key, array) {
                        this.put(key, array, SFSDataType.LONG_ARRAY)
                    }
                }, {
                    key: "putFloatArray",
                    value: function putFloatArray(key, array) {
                        this.put(key, array, SFSDataType.FLOAT_ARRAY)
                    }
                }, {
                    key: "putDoubleArray",
                    value: function putDoubleArray(key, array) {
                        this.put(key, array, SFSDataType.DOUBLE_ARRAY)
                    }
                }, {
                    key: "putUtfStringArray",
                    value: function putUtfStringArray(key, array) {
                        this.put(key, array, SFSDataType.UTF_STRING_ARRAY)
                    }
                }, {
                    key: "putSFSArray",
                    value: function putSFSArray(key, value) {
                        this.put(key, value, SFSDataType.SFS_ARRAY)
                    }
                }, {
                    key: "putSFSObject",
                    value: function putSFSObject(key, value) {
                        this.put(key, value, SFSDataType.SFS_OBJECT)
                    }
                }, {
                    key: "getDump",
                    value: function getDump() {
                        var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                        if (this.size() === 0) return "[ Empty SFSObject ]";
                        if (!format) return this._dump();
                        return _Miscellanea.DumpFormatter.prettyPrintDump(this._dump())
                    }
                }, {
                    key: "getHexDump",
                    value: function getHexDump() {
                        return _Miscellanea.DumpFormatter.hexDump(this.toBinary())
                    }
                }, {
                    key: "_dump",
                    value: function _dump() {
                        var buf = _Miscellanea.DumpFormatter.TOKEN_INDENT_OPEN;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(this.keys()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var key = _step.value;
                                var item = this.getWrappedItem(key);
                                var typeStr = SFSDataType.fromId(item.type);
                                buf += "(" + typeStr.toLowerCase() + ") " + key + ": ";
                                if (item.type === SFSDataType.SFS_OBJECT || item.type === SFSDataType.SFS_ARRAY) buf += item.value.getDump(false);
                                else if (item.type === SFSDataType.BYTE_ARRAY) buf += _Miscellanea.DumpFormatter.prettyPrintByteArray(item.value);
                                else buf += item.value;
                                buf += _Miscellanea.DumpFormatter.TOKEN_DIVIDER
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                        buf += _Miscellanea.DumpFormatter.TOKEN_INDENT_CLOSE;
                        return buf
                    }
                }], [{
                    key: "newFromBinaryData",
                    value: function newFromBinaryData(binData) {
                        return _DataSerializer.SFSDataSerializer.instance.binary2object(binData)
                    }
                }]);
                return SFSObject
            }();
            var SFSArray = function() {
                function SFSArray() {
                    (0, _classCallCheck3.default)(this, SFSArray);
                    this._dataHolder = [];
                    this._serializer = _DataSerializer.SFSDataSerializer.instance;
                    (0, _freeze2.default)(this)
                }(0, _createClass3.default)(SFSArray, [{
                    key: "toBinary",
                    value: function toBinary() {
                        return this._serializer.array2binary(this)
                    }
                }, {
                    key: "getWrappedItem",
                    value: function getWrappedItem(index) {
                        if (typeof index !== "number" || index >= this._dataHolder.length) return null;
                        return this._dataHolder[index]
                    }
                }, {
                    key: "size",
                    value: function size() {
                        return this._dataHolder.length
                    }
                }, {
                    key: "get",
                    value: function get(index) {
                        var typeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        if (typeof index !== "number" || index >= this._dataHolder.length) return null;
                        var wrappedItem = this.getWrappedItem(index);
                        if (wrappedItem != null && typeId != null && wrappedItem.type != typeId) throw new _Exceptions.SFSTypeError("Requested value is not of type SFSDataType." + SFSDataType.fromId(typeId));
                        else return wrappedItem != null ? wrappedItem.value : null
                    }
                }, {
                    key: "getBool",
                    value: function getBool(index) {
                        return this.get(index, SFSDataType.BOOL)
                    }
                }, {
                    key: "getByte",
                    value: function getByte(index) {
                        return this.get(index, SFSDataType.BYTE)
                    }
                }, {
                    key: "getShort",
                    value: function getShort(index) {
                        return this.get(index, SFSDataType.SHORT)
                    }
                }, {
                    key: "getInt",
                    value: function getInt(index) {
                        return this.get(index, SFSDataType.INT)
                    }
                }, {
                    key: "getLong",
                    value: function getLong(index) {
                        var value = this.get(index, SFSDataType.LONG);
                        if (!(0, _isSafeInteger2.default)(value)) _Logging.Logger.instance.warn("Long value contained in SFSObject is not safe");
                        return value
                    }
                }, {
                    key: "getFloat",
                    value: function getFloat(index) {
                        return this.get(index, SFSDataType.FLOAT)
                    }
                }, {
                    key: "getDouble",
                    value: function getDouble(index) {
                        return this.get(index, SFSDataType.DOUBLE)
                    }
                }, {
                    key: "getUtfString",
                    value: function getUtfString(index) {
                        return this.get(index, SFSDataType.UTF_STRING)
                    }
                }, {
                    key: "getText",
                    value: function getText(index) {
                        return this.get(index, SFSDataType.TEXT)
                    }
                }, {
                    key: "getBoolArray",
                    value: function getBoolArray(index) {
                        return this.get(index, SFSDataType.BOOL_ARRAY)
                    }
                }, {
                    key: "getByteArray",
                    value: function getByteArray(index) {
                        return this.get(index, SFSDataType.BYTE_ARRAY)
                    }
                }, {
                    key: "getShortArray",
                    value: function getShortArray(index) {
                        return this.get(index, SFSDataType.SHORT_ARRAY)
                    }
                }, {
                    key: "getIntArray",
                    value: function getIntArray(index) {
                        return this.get(index, SFSDataType.INT_ARRAY)
                    }
                }, {
                    key: "getLongArray",
                    value: function getLongArray(index) {
                        return this.get(index, SFSDataType.LONG_ARRAY)
                    }
                }, {
                    key: "getFloatArray",
                    value: function getFloatArray(index) {
                        return this.get(index, SFSDataType.FLOAT_ARRAY)
                    }
                }, {
                    key: "getDoubleArray",
                    value: function getDoubleArray(index) {
                        return this.get(index, SFSDataType.DOUBLE_ARRAY)
                    }
                }, {
                    key: "getUtfStringArray",
                    value: function getUtfStringArray(index) {
                        return this.get(index, SFSDataType.UTF_STRING_ARRAY)
                    }
                }, {
                    key: "getSFSObject",
                    value: function getSFSObject(index) {
                        return this.get(index, SFSDataType.SFS_OBJECT)
                    }
                }, {
                    key: "getSFSArray",
                    value: function getSFSArray(index) {
                        return this.get(index, SFSDataType.SFS_ARRAY)
                    }
                }, {
                    key: "add",
                    value: function add(value, typeId) {
                        SFSDataType.validate(typeId, value);
                        this._dataHolder.push(new SFSDataWrapper(typeId, value))
                    }
                }, {
                    key: "addNull",
                    value: function addNull() {
                        this.add(null, SFSDataType.NULL)
                    }
                }, {
                    key: "addBool",
                    value: function addBool(value) {
                        this.add(value, SFSDataType.BOOL)
                    }
                }, {
                    key: "addByte",
                    value: function addByte(value) {
                        this.add(value, SFSDataType.BYTE)
                    }
                }, {
                    key: "addShort",
                    value: function addShort(value) {
                        this.add(value, SFSDataType.SHORT)
                    }
                }, {
                    key: "addInt",
                    value: function addInt(value) {
                        this.add(value, SFSDataType.INT)
                    }
                }, {
                    key: "addLong",
                    value: function addLong(value) {
                        this.add(value, SFSDataType.LONG)
                    }
                }, {
                    key: "addFloat",
                    value: function addFloat(value) {
                        this.add(value, SFSDataType.FLOAT)
                    }
                }, {
                    key: "addDouble",
                    value: function addDouble(value) {
                        this.add(value, SFSDataType.DOUBLE)
                    }
                }, {
                    key: "addUtfString",
                    value: function addUtfString(value) {
                        this.add(value, SFSDataType.UTF_STRING)
                    }
                }, {
                    key: "addText",
                    value: function addText(value) {
                        this.add(value, SFSDataType.TEXT)
                    }
                }, {
                    key: "addBoolArray",
                    value: function addBoolArray(array) {
                        this.add(array, SFSDataType.BOOL_ARRAY)
                    }
                }, {
                    key: "addByteArray",
                    value: function addByteArray(array) {
                        this.add(array, SFSDataType.BYTE_ARRAY)
                    }
                }, {
                    key: "addShortArray",
                    value: function addShortArray(array) {
                        this.add(array, SFSDataType.SHORT_ARRAY)
                    }
                }, {
                    key: "addIntArray",
                    value: function addIntArray(array) {
                        this.add(array, SFSDataType.INT_ARRAY)
                    }
                }, {
                    key: "addLongArray",
                    value: function addLongArray(array) {
                        this.add(array, SFSDataType.LONG_ARRAY)
                    }
                }, {
                    key: "addFloatArray",
                    value: function addFloatArray(array) {
                        this.add(array, SFSDataType.FLOAT_ARRAY)
                    }
                }, {
                    key: "addDoubleArray",
                    value: function addDoubleArray(array) {
                        this.add(array, SFSDataType.DOUBLE_ARRAY)
                    }
                }, {
                    key: "addUtfStringArray",
                    value: function addUtfStringArray(array) {
                        this.add(array, SFSDataType.UTF_STRING_ARRAY)
                    }
                }, {
                    key: "addSFSArray",
                    value: function addSFSArray(value) {
                        this.add(value, SFSDataType.SFS_ARRAY)
                    }
                }, {
                    key: "addSFSObject",
                    value: function addSFSObject(value) {
                        this.add(value, SFSDataType.SFS_OBJECT)
                    }
                }, {
                    key: "getDump",
                    value: function getDump() {
                        var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                        if (this.size() === 0) return "[ Empty SFSArray ]";
                        if (!format) return this._dump();
                        return _Miscellanea.DumpFormatter.prettyPrintDump(this._dump())
                    }
                }, {
                    key: "getHexDump",
                    value: function getHexDump() {
                        return _Miscellanea.DumpFormatter.hexDump(this.toBinary())
                    }
                }, {
                    key: "_dump",
                    value: function _dump() {
                        var buf = _Miscellanea.DumpFormatter.TOKEN_INDENT_OPEN;
                        for (var index = 0; index < this.size(); index++) {
                            var item = this.getWrappedItem(index);
                            var typeStr = SFSDataType.fromId(item.type);
                            buf += "(" + typeStr.toLowerCase() + ") " + index + ": ";
                            if (item.type === SFSDataType.SFS_OBJECT || item.type === SFSDataType.SFS_ARRAY) buf += item.value.getDump(false);
                            else if (item.type === SFSDataType.BYTE_ARRAY) buf += _Miscellanea.DumpFormatter.prettyPrintByteArray(item.value);
                            else buf += item.value;
                            buf += _Miscellanea.DumpFormatter.TOKEN_DIVIDER
                        }
                        buf += _Miscellanea.DumpFormatter.TOKEN_INDENT_CLOSE;
                        return buf
                    }
                }], [{
                    key: "newFromBinaryData",
                    value: function newFromBinaryData(binData) {
                        return _DataSerializer.SFSDataSerializer.instance.binary2array(binData)
                    }
                }]);
                return SFSArray
            }();
            var Vec3D = function() {
                function Vec3D(px, py) {
                    var pz = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    var useFloats = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                    (0, _classCallCheck3.default)(this, Vec3D);
                    this.px = px;
                    this.py = py;
                    this.pz = pz;
                    this._useFloatCoordinates = useFloats
                }(0, _createClass3.default)(Vec3D, [{
                    key: "toString",
                    value: function toString() {
                        return "(" + this.px + "," + this.py + "," + this.pz + ")"
                    }
                }, {
                    key: "toArray",
                    value: function toArray() {
                        return [this.px, this.py, this.pz]
                    }
                }, {
                    key: "isFloat",
                    get: function get() {
                        return this._useFloatCoordinates
                    }
                }], [{
                    key: "fromArray",
                    value: function fromArray(arr) {
                        return new Vec3D(arr[0], arr[1], arr[2])
                    }
                }]);
                return Vec3D
            }();
            exports.SFSDataType = SFSDataType;
            exports.SFSDataWrapper = SFSDataWrapper;
            exports.SFSObject = SFSObject;
            exports.SFSArray = SFSArray;
            exports.Vec3D = Vec3D
        }, {
            "../core/DataSerializer": 145,
            "../core/Exceptions": 147,
            "../utils/Logging": 206,
            "../utils/Miscellanea": 207,
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/map": 3,
            "babel-runtime/core-js/number/is-safe-integer": 6,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        150: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.InvitationReply = exports.SFSInvitation = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSInvitation = function() {
                function SFSInvitation(inviter, invitee) {
                    var secondsForAnswer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;
                    var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                    (0, _classCallCheck3.default)(this, SFSInvitation);
                    this._id = -1;
                    this._inviter = inviter;
                    this._invitee = invitee;
                    this._secondsForAnswer = secondsForAnswer;
                    this._params = params;
                    (0, _seal2.default)(this)
                }(0, _createClass3.default)(SFSInvitation, [{
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }, {
                    key: "inviter",
                    get: function get() {
                        return this._inviter
                    }
                }, {
                    key: "invitee",
                    get: function get() {
                        return this._invitee
                    }
                }, {
                    key: "secondsForAnswer",
                    get: function get() {
                        return this._secondsForAnswer
                    }
                }, {
                    key: "params",
                    get: function get() {
                        return this._params
                    }
                }]);
                return SFSInvitation
            }();
            var InvitationReply = (0, _freeze2.default)({
                ACCEPT: 0,
                REFUSE: 1,
                EXPIRED: 255
            });
            exports.SFSInvitation = SFSInvitation;
            exports.InvitationReply = InvitationReply
        }, {
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        151: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.StringMatch = exports.NumberMatch = exports.BoolMatch = undefined;
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var Matcher = function() {
                function Matcher(type, symbol) {
                    (0, _classCallCheck3.default)(this, Matcher);
                    this._type = type;
                    this._symbol = symbol;
                    (0, _freeze2.default)(this)
                }(0, _createClass3.default)(Matcher, [{
                    key: "type",
                    get: function get() {
                        return this._type
                    }
                }, {
                    key: "symbol",
                    get: function get() {
                        return this._symbol
                    }
                }]);
                return Matcher
            }();
            var BoolMatch = function(_Matcher) {
                (0, _inherits3.default)(BoolMatch, _Matcher);

                function BoolMatch(symbol) {
                    (0, _classCallCheck3.default)(this, BoolMatch);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (BoolMatch.__proto__ || (0, _getPrototypeOf2.default)(BoolMatch)).call(this, 0, symbol));
                    (0, _freeze2.default)(_this);
                    return _this
                }(0, _createClass3.default)(BoolMatch, null, [{
                    key: "EQUALS",
                    get: function get() {
                        return new BoolMatch("==")
                    }
                }, {
                    key: "NOT_EQUALS",
                    get: function get() {
                        return new BoolMatch("!=")
                    }
                }]);
                return BoolMatch
            }(Matcher);
            var NumberMatch = function(_Matcher2) {
                (0, _inherits3.default)(NumberMatch, _Matcher2);

                function NumberMatch(symbol) {
                    (0, _classCallCheck3.default)(this, NumberMatch);
                    var _this2 = (0, _possibleConstructorReturn3.default)(this, (NumberMatch.__proto__ || (0, _getPrototypeOf2.default)(NumberMatch)).call(this, 1, symbol));
                    (0, _freeze2.default)(_this2);
                    return _this2
                }(0, _createClass3.default)(NumberMatch, null, [{
                    key: "EQUALS",
                    get: function get() {
                        return new NumberMatch("==")
                    }
                }, {
                    key: "NOT_EQUALS",
                    get: function get() {
                        return new NumberMatch("!=")
                    }
                }, {
                    key: "GREATER_THAN",
                    get: function get() {
                        return new NumberMatch(">")
                    }
                }, {
                    key: "GREATER_THAN_OR_EQUAL_TO",
                    get: function get() {
                        return new NumberMatch(">=")
                    }
                }, {
                    key: "LESS_THAN",
                    get: function get() {
                        return new NumberMatch("<")
                    }
                }, {
                    key: "LESS_THAN_OR_EQUAL_TO",
                    get: function get() {
                        return new NumberMatch("<=")
                    }
                }]);
                return NumberMatch
            }(Matcher);
            var StringMatch = function(_Matcher3) {
                (0, _inherits3.default)(StringMatch, _Matcher3);

                function StringMatch(symbol) {
                    (0, _classCallCheck3.default)(this, StringMatch);
                    var _this3 = (0, _possibleConstructorReturn3.default)(this, (StringMatch.__proto__ || (0, _getPrototypeOf2.default)(StringMatch)).call(this, 2, symbol));
                    (0, _freeze2.default)(_this3);
                    return _this3
                }(0, _createClass3.default)(StringMatch, null, [{
                    key: "EQUALS",
                    get: function get() {
                        return new StringMatch("==")
                    }
                }, {
                    key: "NOT_EQUALS",
                    get: function get() {
                        return new StringMatch("!=")
                    }
                }, {
                    key: "CONTAINS",
                    get: function get() {
                        return new StringMatch("contains")
                    }
                }, {
                    key: "STARTS_WITH",
                    get: function get() {
                        return new StringMatch("startsWith")
                    }
                }, {
                    key: "ENDS_WITH",
                    get: function get() {
                        return new StringMatch("endsWith")
                    }
                }]);
                return StringMatch
            }(Matcher);
            exports.BoolMatch = BoolMatch;
            exports.NumberMatch = NumberMatch;
            exports.StringMatch = StringMatch
        }, {
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        152: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.LogicOperator = exports.MatchExpression = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _Data = _dereq_("../Data");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var MatchExpression = function() {
                function MatchExpression(varName, condition, value) {
                    (0, _classCallCheck3.default)(this, MatchExpression);
                    this._varName = varName;
                    this._condition = condition;
                    this._value = value;
                    this._logicOp = null;
                    this._next = null;
                    this._parent = null;
                    (0, _seal2.default)(this)
                }(0, _createClass3.default)(MatchExpression, [{
                    key: "and",
                    value: function and(varName, condition, value) {
                        this._next = MatchExpression.chainedMatchExpression(varName, condition, value, LogicOperator.AND, this);
                        return this._next
                    }
                }, {
                    key: "or",
                    value: function or(varName, condition, value) {
                        this._next = MatchExpression.chainedMatchExpression(varName, condition, value, LogicOperator.OR, this);
                        return this._next
                    }
                }, {
                    key: "hasNext",
                    value: function hasNext() {
                        return this._next != null
                    }
                }, {
                    key: "rewind",
                    value: function rewind() {
                        var currNode = this;
                        while (currNode._parent != null) {
                            currNode = currNode._parent
                        }
                        return currNode
                    }
                }, {
                    key: "toString",
                    value: function toString() {
                        var expr = this.rewind();
                        var sb = expr.asString();
                        while (expr.hasNext()) {
                            expr = expr.next;
                            sb += expr.asString()
                        }
                        return sb
                    }
                }, {
                    key: "asString",
                    value: function asString() {
                        var sb = "";
                        if (this._logicOp != null) sb += " " + this._logicOp.id + " ";
                        var value = typeof this._value === "string" ? "' " + this._value + " '" : this._value;
                        sb += "(" + this._varName + " " + this._condition.symbol + " " + value + ")";
                        return sb
                    }
                }, {
                    key: "toSFSArray",
                    value: function toSFSArray() {
                        var expr = this.rewind();
                        var sfsa = new _Data.SFSArray;
                        sfsa.addSFSArray(expr.expressionAsSFSArray());
                        while (expr.hasNext()) {
                            expr = expr.next;
                            sfsa.addSFSArray(expr.expressionAsSFSArray())
                        }
                        return sfsa
                    }
                }, {
                    key: "expressionAsSFSArray",
                    value: function expressionAsSFSArray() {
                        var expr = new _Data.SFSArray;
                        if (this._logicOp != null) expr.addUtfString(this._logicOp.id);
                        else expr.addNull();
                        expr.addUtfString(this._varName);
                        expr.addByte(this._condition.type);
                        expr.addUtfString(this._condition.symbol);
                        if (this._condition.type === 0) expr.addBool(this._value);
                        else if (this._condition.type === 1) expr.addDouble(this._value);
                        else expr.addUtfString(this._value);
                        return expr
                    }
                }, {
                    key: "varName",
                    get: function get() {
                        return this._varName
                    }
                }, {
                    key: "condition",
                    get: function get() {
                        return this._condition
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this._value
                    }
                }, {
                    key: "logicOp",
                    get: function get() {
                        return this._logicOp
                    }
                }, {
                    key: "next",
                    get: function get() {
                        return this._next
                    }
                }], [{
                    key: "chainedMatchExpression",
                    value: function chainedMatchExpression(varName, condition, value, logicOp, parent) {
                        var matchingExpression = new MatchExpression(varName, condition, value);
                        matchingExpression._logicOp = logicOp;
                        matchingExpression._parent = parent;
                        return matchingExpression
                    }
                }]);
                return MatchExpression
            }();
            var LogicOperator = function() {
                function LogicOperator(id) {
                    (0, _classCallCheck3.default)(this, LogicOperator);
                    this._id = id;
                    (0, _freeze2.default)(this)
                }(0, _createClass3.default)(LogicOperator, [{
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }], [{
                    key: "AND",
                    get: function get() {
                        return new LogicOperator("AND")
                    }
                }, {
                    key: "OR",
                    get: function get() {
                        return new LogicOperator("OR")
                    }
                }]);
                return LogicOperator
            }();
            exports.MatchExpression = MatchExpression;
            exports.LogicOperator = LogicOperator
        }, {
            "../Data": 149,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        153: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.UserProperties = exports.RoomProperties = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var RoomProperties = (0, _freeze2.default)({
                NAME: "${N}",
                GROUP_ID: "${G}",
                MAX_USERS: "${MXU}",
                MAX_SPECTATORS: "${MXS}",
                USER_COUNT: "${UC}",
                SPECTATOR_COUNT: "${SC}",
                IS_GAME: "${ISG}",
                IS_PRIVATE: "${ISP}",
                HAS_FREE_PLAYER_SLOTS: "${HFP}",
                IS_TYPE_SFSGAME: "${IST}"
            });
            var UserProperties = (0, _freeze2.default)({
                NAME: "${N}",
                IS_PLAYER: "${ISP}",
                IS_SPECTATOR: "${ISS}",
                IS_NPC: "${ISN}",
                PRIVILEGE_ID: "${PRID}",
                IS_IN_ANY_ROOM: "${IAR}"
            });
            exports.RoomProperties = RoomProperties;
            exports.UserProperties = UserProperties
        }, {
            "babel-runtime/core-js/object/freeze": 10
        }],
        154: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.BuddyOnlineState = exports.SFSBuddy = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _map = _dereq_("babel-runtime/core-js/map");
            var _map2 = _interopRequireDefault(_map);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _BuddyVariable = _dereq_("../variables/BuddyVariable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSBuddy = function() {
                function SFSBuddy(id, name) {
                    var isBlocked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    var isTemp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                    (0, _classCallCheck3.default)(this, SFSBuddy);
                    this._id = id;
                    this._name = name;
                    this._isBlocked = isBlocked;
                    this._isTemp = isTemp;
                    this._variables = new _map2.default;
                    (0, _seal2.default)(this)
                }(0, _createClass3.default)(SFSBuddy, [{
                    key: "toString",
                    value: function toString() {
                        return "[Buddy: " + this.name + ", Id: " + this.id + "]"
                    }
                }, {
                    key: "getVariable",
                    value: function getVariable(varName) {
                        return this._variables.get(varName)
                    }
                }, {
                    key: "containsVariable",
                    value: function containsVariable(varName) {
                        return this._variables.has(varName)
                    }
                }, {
                    key: "getVariables",
                    value: function getVariables() {
                        return (0, _from2.default)(this._variables.values())
                    }
                }, {
                    key: "getOfflineVariables",
                    value: function getOfflineVariables() {
                        return this.getVariables().filter(function(buddyVar) {
                            return buddyVar.name.charAt(0) === _BuddyVariable.SFSBuddyVariable.OFFLINE_PREFIX
                        })
                    }
                }, {
                    key: "getOnlineVariables",
                    value: function getOnlineVariables() {
                        return this.getVariables().filter(function(buddyVar) {
                            return buddyVar.name.charAt(0) !== _BuddyVariable.SFSBuddyVariable.OFFLINE_PREFIX
                        })
                    }
                }, {
                    key: "_setVariables",
                    value: function _setVariables(buddyVariables) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(buddyVariables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var buddyVar = _step.value;
                                this._setVariable(buddyVar)
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                    }
                }, {
                    key: "_setVariable",
                    value: function _setVariable(buddyVariable) {
                        if (buddyVariable.isNull) this._variables.delete(buddyVariable.name);
                        else this._variables.set(buddyVariable.name, buddyVariable)
                    }
                }, {
                    key: "_removeVariable",
                    value: function _removeVariable(varName) {
                        this._variables.delete(varName)
                    }
                }, {
                    key: "_clearVolatileVariables",
                    value: function _clearVolatileVariables() {
                        for (var buddyVar in this.getOnlineVariables()) {
                            this._removeVariable(buddyVar.name)
                        }
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }, {
                    key: "name",
                    get: function get() {
                        return this._name
                    }
                }, {
                    key: "isBlocked",
                    get: function get() {
                        return this._isBlocked
                    }
                }, {
                    key: "isTemp",
                    get: function get() {
                        return this._isTemp
                    }
                }, {
                    key: "isOnline",
                    get: function get() {
                        var onlineStateVar = true;
                        if (this.containsVariable(_BuddyVariable.ReservedBuddyVariables.BV_ONLINE)) onlineStateVar = this.getVariable(_BuddyVariable.ReservedBuddyVariables.BV_ONLINE).value;
                        return onlineStateVar && this._id > -1
                    }
                }, {
                    key: "state",
                    get: function get() {
                        if (this.containsVariable(_BuddyVariable.ReservedBuddyVariables.BV_STATE)) return this.getVariable(_BuddyVariable.ReservedBuddyVariables.BV_STATE).value;
                        else return null
                    }
                }, {
                    key: "nickName",
                    get: function get() {
                        if (this.containsVariable(_BuddyVariable.ReservedBuddyVariables.BV_NICKNAME)) return this.getVariable(_BuddyVariable.ReservedBuddyVariables.BV_NICKNAME).value;
                        else return null
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function fromSFSArray(buddyArray) {
                        var newBuddy = new SFSBuddy(buddyArray.get(0), buddyArray.get(1), buddyArray.get(2), buddyArray.size() > 3 ? buddyArray.get(4) : false);
                        var vars = buddyArray.get(3);
                        if (vars != null)
                            for (var j = 0; j < vars.size(); j++) {
                                newBuddy._setVariable(_BuddyVariable.SFSBuddyVariable.fromSFSArray(vars.get(j)))
                            }
                        return newBuddy
                    }
                }]);
                return SFSBuddy
            }();
            var BuddyOnlineState = (0, _freeze2.default)({
                ONLINE: 0,
                OFFLINE: 1,
                LEFT_THE_SERVER: 2
            });
            exports.SFSBuddy = SFSBuddy;
            exports.BuddyOnlineState = BuddyOnlineState
        }, {
            "../variables/BuddyVariable": 158,
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/map": 3,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        155: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.MMOItem = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _map = _dereq_("babel-runtime/core-js/map");
            var _map2 = _interopRequireDefault(_map);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _ItemVariable = _dereq_("../variables/ItemVariable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var MMOItem = function() {
                function MMOItem(id) {
                    (0, _classCallCheck3.default)(this, MMOItem);
                    this._id = id;
                    this._aoiEntryPoint = null;
                    this._variables = new _map2.default;
                    (0, _seal2.default)(this)
                }(0, _createClass3.default)(MMOItem, [{
                    key: "toString",
                    value: function toString() {
                        return "[Item: " + this.id + "]"
                    }
                }, {
                    key: "getVariable",
                    value: function getVariable(varName) {
                        return this._variables.get(varName)
                    }
                }, {
                    key: "containsVariable",
                    value: function containsVariable(varName) {
                        return this._variables.has(varName)
                    }
                }, {
                    key: "getVariables",
                    value: function getVariables() {
                        return (0, _from2.default)(this._variables.values())
                    }
                }, {
                    key: "_setVariables",
                    value: function _setVariables(itemVariables) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(itemVariables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var itemVar = _step.value;
                                this._setVariable(itemVar)
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                    }
                }, {
                    key: "_setVariable",
                    value: function _setVariable(itemVariable) {
                        if (itemVariable.isNull) this._variables.delete(itemVariable.name);
                        else this._variables.set(itemVariable.name, itemVariable)
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }, {
                    key: "aoiEntryPoint",
                    get: function get() {
                        return this._aoiEntryPoint
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function fromSFSArray(itemArray) {
                        var newItem = new MMOItem(itemArray.get(0));
                        var vars = itemArray.get(1);
                        if (vars != null)
                            for (var j = 0; j < vars.size(); j++) {
                                newItem._setVariable(_ItemVariable.MMOItemVariable.fromSFSArray(vars.get(j)))
                            }
                        return newItem
                    }
                }]);
                return MMOItem
            }();
            exports.MMOItem = MMOItem
        }, {
            "../variables/ItemVariable": 159,
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/map": 3,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        156: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.MMORoom = exports.SFSRoom = undefined;
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _map = _dereq_("babel-runtime/core-js/map");
            var _map2 = _interopRequireDefault(_map);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _Data = _dereq_("../Data");
            var _RoomVariable = _dereq_("../variables/RoomVariable");
            var _UserManager = _dereq_("../../managers/UserManager");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSRoom = function() {
                function SFSRoom(id, name) {
                    var groupId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "default";
                    var seal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                    (0, _classCallCheck3.default)(this, SFSRoom);
                    this._id = id;
                    this._name = name;
                    this._groupId = groupId;
                    this._isGame = false;
                    this._isHidden = false;
                    this._isJoined = false;
                    this._isPasswordProtected = false;
                    this._maxUsers = 0;
                    this._maxSpectators = 0;
                    this._userCount = 0;
                    this._specCount = 0;
                    this._isManaged = true;
                    this._variables = new _map2.default;
                    this._userManager = new _UserManager.SFSUserManager;
                    this._roomManager = null;
                    this.properties = {};
                    if (seal)(0, _seal2.default)(this)
                }(0, _createClass3.default)(SFSRoom, [{
                    key: "toString",
                    value: function toString() {
                        return "[Room: " + this.name + ", Id: " + this.id + ", Group Id: " + this.groupId + "]"
                    }
                }, {
                    key: "getUserByName",
                    value: function getUserByName(name) {
                        return this._userManager.getUserByName(name)
                    }
                }, {
                    key: "getUserById",
                    value: function getUserById(id) {
                        return this._userManager.getUserById(id)
                    }
                }, {
                    key: "containsUser",
                    value: function containsUser(user) {
                        return this._userManager.containsUser(user)
                    }
                }, {
                    key: "getUserList",
                    value: function getUserList() {
                        return this._userManager.getUserList()
                    }
                }, {
                    key: "getPlayerList",
                    value: function getPlayerList() {
                        var _this = this;
                        return this._userManager.getUserList().filter(function(user) {
                            return user.isPlayerInRoom(_this)
                        })
                    }
                }, {
                    key: "getSpectatorList",
                    value: function getSpectatorList() {
                        var _this2 = this;
                        return this._userManager.getUserList().filter(function(user) {
                            return user.isSpectatorInRoom(_this2)
                        })
                    }
                }, {
                    key: "getVariable",
                    value: function getVariable(varName) {
                        return this._variables.get(varName)
                    }
                }, {
                    key: "containsVariable",
                    value: function containsVariable(varName) {
                        return this._variables.has(varName)
                    }
                }, {
                    key: "getVariables",
                    value: function getVariables() {
                        return (0, _from2.default)(this._variables.values())
                    }
                }, {
                    key: "getRoomManager",
                    value: function getRoomManager() {
                        return this._roomManager
                    }
                }, {
                    key: "_addUser",
                    value: function _addUser(user) {
                        this._userManager._addUser(user)
                    }
                }, {
                    key: "_removeUser",
                    value: function _removeUser(user) {
                        this._userManager._removeUser(user)
                    }
                }, {
                    key: "_setVariables",
                    value: function _setVariables(roomVariables) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(roomVariables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var roomVar = _step.value;
                                this._setVariable(roomVar)
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                    }
                }, {
                    key: "_setVariable",
                    value: function _setVariable(roomVariable) {
                        if (roomVariable.isNull) this._variables.delete(roomVariable.name);
                        else this._variables.set(roomVariable.name, roomVariable)
                    }
                }, {
                    key: "_setRoomManager",
                    value: function _setRoomManager(roomManager) {
                        if (this._roomManager != null) throw new _Exceptions.SFSError("Room Manager already assigned to " + this.toString());
                        this._roomManager = roomManager
                    }
                }, {
                    key: "_merge",
                    value: function _merge(otherRoom) {
                        this._variables.clear();
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;
                        try {
                            for (var _iterator2 = (0, _getIterator3.default)(otherRoom._variables.values()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var roomVar = _step2.value;
                                this._setVariable(roomVar)
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return()
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2
                                }
                            }
                        }
                        this._userManager._clearAll();
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;
                        try {
                            for (var _iterator3 = (0, _getIterator3.default)(otherRoom.getUserList()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var user = _step3.value;
                                this._addUser(user)
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return()
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3
                                }
                            }
                        }
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }, {
                    key: "name",
                    get: function get() {
                        return this._name
                    }
                }, {
                    key: "groupId",
                    get: function get() {
                        return this._groupId
                    }
                }, {
                    key: "isGame",
                    get: function get() {
                        return this._isGame
                    }
                }, {
                    key: "isHidden",
                    get: function get() {
                        return this._isHidden
                    }
                }, {
                    key: "isJoined",
                    get: function get() {
                        return this._isJoined
                    }
                }, {
                    key: "isPasswordProtected",
                    get: function get() {
                        return this._isPasswordProtected
                    }
                }, {
                    key: "maxUsers",
                    get: function get() {
                        return this._maxUsers
                    }
                }, {
                    key: "maxSpectators",
                    get: function get() {
                        return this._maxSpectators
                    }
                }, {
                    key: "userCount",
                    get: function get() {
                        if (!this.isJoined) return this._userCount;
                        else {
                            if (this.isGame) return this.getPlayerList().length;
                            else return this._userManager.getUserCount()
                        }
                    }
                }, {
                    key: "spectatorCount",
                    get: function get() {
                        if (!this.isGame) return 0;
                        if (this.isJoined) return this.getSpectatorList().length;
                        else return this._specCount
                    }
                }, {
                    key: "capacity",
                    get: function get() {
                        return this.maxUsers + this.maxSpectators
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function fromSFSArray(roomArray) {
                        var isMMORoom = roomArray.size() === 14;
                        var newRoom = void 0;
                        if (isMMORoom) newRoom = new MMORoom(roomArray.get(0), roomArray.get(1), roomArray.get(2));
                        else newRoom = new SFSRoom(roomArray.get(0), roomArray.get(1), roomArray.get(2));
                        newRoom._isGame = roomArray.get(3);
                        newRoom._isHidden = roomArray.get(4);
                        newRoom._isPasswordProtected = roomArray.get(5);
                        newRoom._userCount = roomArray.get(6);
                        newRoom._maxUsers = roomArray.get(7);
                        var vars = roomArray.get(8);
                        if (vars != null)
                            for (var j = 0; j < vars.size(); j++) {
                                var rVar = _RoomVariable.SFSRoomVariable.fromSFSArray(vars.get(j));
                                newRoom._setVariable(rVar)
                            }
                        if (newRoom._isGame) {
                            newRoom._specCount = roomArray.get(9);
                            newRoom._maxSpectators = roomArray.get(10)
                        }
                        if (isMMORoom) {
                            newRoom._defaultAOI = _Data.Vec3D.fromArray(roomArray.get(11));
                            if (roomArray.get(13) != null) {
                                newRoom._lowerMapLimit = _Data.Vec3D.fromArray(roomArray.get(12));
                                newRoom._higherMapLimit = _Data.Vec3D.fromArray(roomArray.get(13))
                            }
                        }
                        return newRoom
                    }
                }]);
                return SFSRoom
            }();
            var MMORoom = function(_SFSRoom) {
                (0, _inherits3.default)(MMORoom, _SFSRoom);

                function MMORoom(id, name) {
                    var groupId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "default";
                    (0, _classCallCheck3.default)(this, MMORoom);
                    var _this3 = (0, _possibleConstructorReturn3.default)(this, (MMORoom.__proto__ || (0, _getPrototypeOf2.default)(MMORoom)).call(this, id, name, groupId, false));
                    _this3._defaultAOI = null;
                    _this3._lowerMapLimit = null;
                    _this3._higherMapLimit = null;
                    _this3._itemsById = new _map2.default;
                    (0, _seal2.default)(_this3);
                    return _this3
                }(0, _createClass3.default)(MMORoom, [{
                    key: "getMMOItem",
                    value: function getMMOItem(id) {
                        return this._itemsById.get(id)
                    }
                }, {
                    key: "getMMOItems",
                    value: function getMMOItems() {
                        return (0, _from2.default)(this._itemsById.values())
                    }
                }, {
                    key: "_addMMOItem",
                    value: function _addMMOItem(item) {
                        this._itemsById.set(item.id, item)
                    }
                }, {
                    key: "_removeItem",
                    value: function _removeItem(id) {
                        this._itemsById.delete(id)
                    }
                }, {
                    key: "defaultAOI",
                    get: function get() {
                        return this._defaultAOI
                    }
                }, {
                    key: "lowerMapLimit",
                    get: function get() {
                        return this._lowerMapLimit
                    }
                }, {
                    key: "higherMapLimit",
                    get: function get() {
                        return this._higherMapLimit
                    }
                }]);
                return MMORoom
            }(SFSRoom);
            exports.SFSRoom = SFSRoom;
            exports.MMORoom = MMORoom
        }, {
            "../../core/Exceptions": 147,
            "../../managers/UserManager": 165,
            "../Data": 149,
            "../variables/RoomVariable": 160,
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/map": 3,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        157: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.UserPrivileges = exports.SFSUser = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _map = _dereq_("babel-runtime/core-js/map");
            var _map2 = _interopRequireDefault(_map);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _UserVariable = _dereq_("../variables/UserVariable");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSUser = function() {
                function SFSUser(id, name) {
                    var isItMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    (0, _classCallCheck3.default)(this, SFSUser);
                    this._id = id;
                    this._name = name;
                    this._isItMe = isItMe;
                    this._privilegeId = 0;
                    this._aoiEntryPoint = null;
                    this._variables = new _map2.default;
                    this._playerIdByRoomId = new _map2.default;
                    this._userManager = null;
                    this.properties = {};
                    (0, _seal2.default)(this)
                }(0, _createClass3.default)(SFSUser, [{
                    key: "toString",
                    value: function toString() {
                        return "[User: " + this.name + ", Id: " + this.id + ", Is me: " + this.isItMe + "]"
                    }
                }, {
                    key: "isJoinedInRoom",
                    value: function isJoinedInRoom(room) {
                        return room.containsUser(this)
                    }
                }, {
                    key: "getPlayerId",
                    value: function getPlayerId(room) {
                        var pId = this._playerIdByRoomId.get(room.id);
                        return pId != null ? pId : 0
                    }
                }, {
                    key: "isPlayerInRoom",
                    value: function isPlayerInRoom(room) {
                        if (room.isGame) return this.getPlayerId(room) > 0;
                        else return false
                    }
                }, {
                    key: "isSpectatorInRoom",
                    value: function isSpectatorInRoom(room) {
                        if (room.isGame) return this.getPlayerId(room) < 0;
                        else return false
                    }
                }, {
                    key: "getVariable",
                    value: function getVariable(varName) {
                        return this._variables.get(varName)
                    }
                }, {
                    key: "containsVariable",
                    value: function containsVariable(varName) {
                        return this._variables.has(varName)
                    }
                }, {
                    key: "getVariables",
                    value: function getVariables() {
                        return (0, _from2.default)(this._variables.values())
                    }
                }, {
                    key: "getUserManager",
                    value: function getUserManager() {
                        return this._userManager
                    }
                }, {
                    key: "_setPlayerId",
                    value: function _setPlayerId(id, room) {
                        this._playerIdByRoomId.set(room.id, id)
                    }
                }, {
                    key: "_removePlayerId",
                    value: function _removePlayerId(room) {
                        this._playerIdByRoomId.delete(room.id)
                    }
                }, {
                    key: "_setVariables",
                    value: function _setVariables(userVariables) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(userVariables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var userVar = _step.value;
                                this._setVariable(userVar)
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                    }
                }, {
                    key: "_setVariable",
                    value: function _setVariable(userVariable) {
                        if (userVariable.isNull) this._variables.delete(userVariable.name);
                        else this._variables.set(userVariable.name, userVariable)
                    }
                }, {
                    key: "_setUserManager",
                    value: function _setUserManager(userManager) {
                        if (this._userManager != null) throw new _Exceptions.SFSError("User Manager already assigned to user " + this.toString());
                        this._userManager = userManager
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }, {
                    key: "name",
                    get: function get() {
                        return this._name
                    }
                }, {
                    key: "isItMe",
                    get: function get() {
                        return this._isItMe
                    }
                }, {
                    key: "privilegeId",
                    get: function get() {
                        return this._privilegeId
                    }
                }, {
                    key: "aoiEntryPoint",
                    get: function get() {
                        return this._aoiEntryPoint
                    }
                }, {
                    key: "isGuest",
                    get: function get() {
                        return this._privilegeId === UserPrivileges.GUEST
                    }
                }, {
                    key: "isStandardUser",
                    get: function get() {
                        return this._privilegeId === UserPrivileges.STANDARD
                    }
                }, {
                    key: "isModerator",
                    get: function get() {
                        return this._privilegeId === UserPrivileges.MODERATOR
                    }
                }, {
                    key: "isAdmin",
                    get: function get() {
                        return this.privilegeId === UserPrivileges.ADMINISTRATOR
                    }
                }, {
                    key: "isPlayer",
                    get: function get() {
                        return this.isPlayerInRoom(this._userManager._sfs.lastJoinedRoom)
                    }
                }, {
                    key: "isSpectator",
                    get: function get() {
                        return this.isSpectatorInRoom(this._userManager._sfs.lastJoinedRoom)
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function fromSFSArray(userArray) {
                        var room = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        var newUser = new SFSUser(userArray.get(0), userArray.get(1));
                        newUser._privilegeId = userArray.get(2);
                        if (room != null) newUser._setPlayerId(userArray.get(3), room);
                        var vars = userArray.get(4);
                        if (vars != null)
                            for (var j = 0; j < vars.size(); j++) {
                                newUser._setVariable(_UserVariable.SFSUserVariable.fromSFSArray(vars.get(j)))
                            }
                        return newUser
                    }
                }]);
                return SFSUser
            }();
            var UserPrivileges = (0, _freeze2.default)({
                GUEST: 0,
                STANDARD: 1,
                MODERATOR: 2,
                ADMINISTRATOR: 3
            });
            exports.SFSUser = SFSUser;
            exports.UserPrivileges = UserPrivileges
        }, {
            "../../core/Exceptions": 147,
            "../variables/UserVariable": 161,
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/map": 3,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        158: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SFSBuddyVariable = exports.ReservedBuddyVariables = undefined;
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _Variable = _dereq_("./Variable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var ReservedBuddyVariables = (0, _freeze2.default)({
                BV_ONLINE: "$__BV_ONLINE__",
                BV_STATE: "$__BV_STATE__",
                BV_NICKNAME: "$__BV_NICKNAME__"
            });
            var SFSBuddyVariable = function(_BaseVariable) {
                (0, _inherits3.default)(SFSBuddyVariable, _BaseVariable);
                (0, _createClass3.default)(SFSBuddyVariable, null, [{
                    key: "OFFLINE_PREFIX",
                    get: function get() {
                        return "$"
                    }
                }]);

                function SFSBuddyVariable(name, value) {
                    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
                    (0, _classCallCheck3.default)(this, SFSBuddyVariable);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SFSBuddyVariable.__proto__ || (0, _getPrototypeOf2.default)(SFSBuddyVariable)).call(this, name, value, type));
                    (0, _freeze2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SFSBuddyVariable, [{
                    key: "toString",
                    value: function toString() {
                        return "[BuddyVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + "]"
                    }
                }, {
                    key: "isOffline",
                    get: function get() {
                        return this._name.charAt(0) === SFSBuddyVariable.OFFLINE_PREFIX
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function fromSFSArray(varArray) {
                        return new SFSBuddyVariable(varArray.get(0), varArray.get(2), varArray.get(1))
                    }
                }]);
                return SFSBuddyVariable
            }(_Variable.BaseVariable);
            exports.ReservedBuddyVariables = ReservedBuddyVariables;
            exports.SFSBuddyVariable = SFSBuddyVariable
        }, {
            "./Variable": 162,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        159: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.MMOItemVariable = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Variable = _dereq_("./Variable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var MMOItemVariable = function(_BaseVariable) {
                (0, _inherits3.default)(MMOItemVariable, _BaseVariable);

                function MMOItemVariable(name, value) {
                    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
                    (0, _classCallCheck3.default)(this, MMOItemVariable);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (MMOItemVariable.__proto__ || (0, _getPrototypeOf2.default)(MMOItemVariable)).call(this, name, value, type));
                    (0, _freeze2.default)(_this);
                    return _this
                }(0, _createClass3.default)(MMOItemVariable, [{
                    key: "toString",
                    value: function toString() {
                        return "[ItemVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + "]"
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function fromSFSArray(varArray) {
                        return new MMOItemVariable(varArray.get(0), varArray.get(2), varArray.get(1))
                    }
                }]);
                return MMOItemVariable
            }(_Variable.BaseVariable);
            exports.MMOItemVariable = MMOItemVariable
        }, {
            "./Variable": 162,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        160: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SFSRoomVariable = exports.ReservedRoomVariables = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _get2 = _dereq_("babel-runtime/helpers/get");
            var _get3 = _interopRequireDefault(_get2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _Variable = _dereq_("./Variable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var ReservedRoomVariables = (0, _freeze2.default)({
                RV_GAME_STARTED: "$GS"
            });
            var SFSRoomVariable = function(_BaseVariable) {
                (0, _inherits3.default)(SFSRoomVariable, _BaseVariable);

                function SFSRoomVariable(name, value) {
                    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
                    (0, _classCallCheck3.default)(this, SFSRoomVariable);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SFSRoomVariable.__proto__ || (0, _getPrototypeOf2.default)(SFSRoomVariable)).call(this, name, value, type));
                    _this.isPrivate = false;
                    _this.isPersistent = false;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SFSRoomVariable, [{
                    key: "toString",
                    value: function toString() {
                        return "[RoomVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + ", Private: " + this.isPrivate + "]"
                    }
                }, {
                    key: "toSFSArray",
                    value: function toSFSArray() {
                        var array = (0, _get3.default)(SFSRoomVariable.prototype.__proto__ || (0, _getPrototypeOf2.default)(SFSRoomVariable.prototype), "toSFSArray", this).call(this);
                        array.addBool(this.isPrivate);
                        array.addBool(this.isPersistent);
                        return array
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function fromSFSArray(varArray) {
                        var roomVar = new SFSRoomVariable(varArray.get(0), varArray.get(2), varArray.get(1));
                        roomVar.isPrivate = varArray.get(3);
                        roomVar.isPersistent = varArray.get(4);
                        return roomVar
                    }
                }]);
                return SFSRoomVariable
            }(_Variable.BaseVariable);
            exports.ReservedRoomVariables = ReservedRoomVariables;
            exports.SFSRoomVariable = SFSRoomVariable
        }, {
            "./Variable": 162,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/get": 20,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        161: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SFSUserVariable = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _get2 = _dereq_("babel-runtime/helpers/get");
            var _get3 = _interopRequireDefault(_get2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Variable = _dereq_("./Variable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSUserVariable = function(_BaseVariable) {
                (0, _inherits3.default)(SFSUserVariable, _BaseVariable);

                function SFSUserVariable(name, value) {
                    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
                    (0, _classCallCheck3.default)(this, SFSUserVariable);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SFSUserVariable.__proto__ || (0, _getPrototypeOf2.default)(SFSUserVariable)).call(this, name, value, type));
                    _this.isPrivate = false;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SFSUserVariable, [{
                    key: "toString",
                    value: function toString() {
                        return "[UserVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + ", Private: " + this.isPrivate + "]"
                    }
                }, {
                    key: "toSFSArray",
                    value: function toSFSArray() {
                        var array = (0, _get3.default)(SFSUserVariable.prototype.__proto__ || (0, _getPrototypeOf2.default)(SFSUserVariable.prototype), "toSFSArray", this).call(this);
                        array.addBool(this.isPrivate);
                        return array
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function fromSFSArray(varArray) {
                        var userVar = new SFSUserVariable(varArray.get(0), varArray.get(2), varArray.get(1));
                        if (varArray.size() > 3) userVar.isPrivate = varArray.get(3);
                        return userVar
                    }
                }]);
                return SFSUserVariable
            }(_Variable.BaseVariable);
            exports.SFSUserVariable = SFSUserVariable
        }, {
            "./Variable": 162,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/get": 20,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        162: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.BaseVariable = exports.VariableType = undefined;
            var _typeof2 = _dereq_("babel-runtime/helpers/typeof");
            var _typeof3 = _interopRequireDefault(_typeof2);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _Data = _dereq_("../Data");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var VariableType = (0, _freeze2.default)({
                NULL: 0,
                BOOLEAN: 1,
                INT: 2,
                DOUBLE: 3,
                STRING: 4,
                SFSOBJECT: 5,
                SFSARRAY: 6,
                getTypeName: function getTypeName(id) {
                    var typeStrings = ["null", "boolean", "int", "double", "string", "SFSObject", "SFSArray"];
                    return typeStrings[id]
                }
            });
            var BaseVariable = function() {
                function BaseVariable(name, value) {
                    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
                    (0, _classCallCheck3.default)(this, BaseVariable);
                    this._name = name;
                    this._value = value;
                    this._type = type > -1 ? type : this._evalType()
                }(0, _createClass3.default)(BaseVariable, [{
                    key: "toSFSArray",
                    value: function toSFSArray() {
                        var sfsa = new _Data.SFSArray;
                        sfsa.addUtfString(this.name);
                        sfsa.addByte(this._type);
                        this._populateArrayWithValue(sfsa);
                        return sfsa
                    }
                }, {
                    key: "_populateArrayWithValue",
                    value: function _populateArrayWithValue(arr) {
                        switch (this._type) {
                            case VariableType.NULL:
                                arr.addNull();
                                break;
                            case VariableType.BOOLEAN:
                                arr.addBool(this.value);
                                break;
                            case VariableType.INT:
                                arr.addInt(this.value);
                                break;
                            case VariableType.DOUBLE:
                                arr.addDouble(this.value);
                                break;
                            case VariableType.STRING:
                                arr.addUtfString(this.value);
                                break;
                            case VariableType.SFSOBJECT:
                                arr.addSFSObject(this.value);
                                break;
                            case VariableType.SFSARRAY:
                                arr.addSFSArray(this.value);
                                break
                        }
                    }
                }, {
                    key: "_evalType",
                    value: function _evalType() {
                        if (this._value == null) return VariableType.NULL;
                        else {
                            var typeName = (0, _typeof3.default)(this._value);
                            if (typeName === "boolean") return VariableType.BOOLEAN;
                            else if (typeName === "number") {
                                var n = this._value;
                                if (n === +n && n === (n | 0)) return VariableType.INT;
                                else return VariableType.DOUBLE
                            } else if (typeName === "string") return VariableType.STRING;
                            else if (typeName === "object") {
                                if (this._value instanceof _Data.SFSArray) return VariableType.SFSARRAY;
                                else return VariableType.SFSOBJECT
                            }
                        }
                    }
                }, {
                    key: "name",
                    get: function get() {
                        return this._name
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this._value
                    }
                }, {
                    key: "type",
                    get: function get() {
                        return VariableType.getTypeName(this._type)
                    }
                }, {
                    key: "isNull",
                    get: function get() {
                        return this._type === VariableType.NULL
                    }
                }]);
                return BaseVariable
            }();
            exports.VariableType = VariableType;
            exports.BaseVariable = BaseVariable
        }, {
            "../Data": 149,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/typeof": 23
        }],
        163: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SFSBuddyManager = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _set = _dereq_("babel-runtime/core-js/set");
            var _set2 = _interopRequireDefault(_set);
            var _map = _dereq_("babel-runtime/core-js/map");
            var _map2 = _interopRequireDefault(_map);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _BuddyVariable = _dereq_("../entities/variables/BuddyVariable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSBuddyManager = function() {
                function SFSBuddyManager(sfs) {
                    (0, _classCallCheck3.default)(this, SFSBuddyManager);
                    this._sfs = sfs;
                    this._buddiesByName = new _map2.default;
                    this._myVariables = new _map2.default;
                    this._inited = false;
                    this._buddyStates = new _set2.default;
                    (0, _seal2.default)(this)
                }(0, _createClass3.default)(SFSBuddyManager, [{
                    key: "containsBuddy",
                    value: function containsBuddy(name) {
                        return this._buddiesByName.has(name)
                    }
                }, {
                    key: "getBuddyById",
                    value: function getBuddyById(id) {
                        return this.getBuddyList().find(function(buddy) {
                            return buddy.id === id
                        })
                    }
                }, {
                    key: "getBuddyByName",
                    value: function getBuddyByName(name) {
                        return this._buddiesByName.get(name)
                    }
                }, {
                    key: "getBuddyByNickName",
                    value: function getBuddyByNickName(nickName) {
                        return this.getBuddyList().find(function(buddy) {
                            return buddy.nickName === nickName
                        })
                    }
                }, {
                    key: "getOfflineBuddies",
                    value: function getOfflineBuddies() {
                        return this.getBuddyList().filter(function(buddy) {
                            return !buddy.isOnline
                        })
                    }
                }, {
                    key: "getOnlineBuddies",
                    value: function getOnlineBuddies() {
                        return this.getBuddyList().filter(function(buddy) {
                            return buddy.isOnline
                        })
                    }
                }, {
                    key: "getBuddyList",
                    value: function getBuddyList() {
                        return (0, _from2.default)(this._buddiesByName.values())
                    }
                }, {
                    key: "getMyVariable",
                    value: function getMyVariable(varName) {
                        return this._myVariables.get(varName)
                    }
                }, {
                    key: "getMyVariables",
                    value: function getMyVariables() {
                        return (0, _from2.default)(this._myVariables.values())
                    }
                }, {
                    key: "getMyOnlineState",
                    value: function getMyOnlineState() {
                        if (!this._inited) return false;
                        var onlineVar = this.getMyVariable(_BuddyVariable.ReservedBuddyVariables.BV_ONLINE);
                        return onlineVar != null ? onlineVar.value : true
                    }
                }, {
                    key: "getMyNickName",
                    value: function getMyNickName() {
                        var nickNameVar = this.getMyVariable(_BuddyVariable.ReservedBuddyVariables.BV_NICKNAME);
                        return nickNameVar != null ? nickNameVar.value : null
                    }
                }, {
                    key: "getMyState",
                    value: function getMyState() {
                        var stateVar = this.getMyVariable(_BuddyVariable.ReservedBuddyVariables.BV_STATE);
                        return stateVar != null ? stateVar.value : null
                    }
                }, {
                    key: "getBuddyStates",
                    value: function getBuddyStates() {
                        return (0, _from2.default)(this._buddyStates.values())
                    }
                }, {
                    key: "_setInited",
                    value: function _setInited() {
                        this._inited = true
                    }
                }, {
                    key: "_addBuddy",
                    value: function _addBuddy(buddy) {
                        this._buddiesByName.set(buddy.name, buddy)
                    }
                }, {
                    key: "_clearAll",
                    value: function _clearAll() {
                        this._buddiesByName.clear()
                    }
                }, {
                    key: "_removeBuddyById",
                    value: function _removeBuddyById(id) {
                        var buddy = this.getBuddyById(id);
                        if (buddy != null) this._buddiesByName.delete(buddy.name);
                        return buddy
                    }
                }, {
                    key: "_removeBuddyByName",
                    value: function _removeBuddyByName(name) {
                        var buddy = this.getBuddyByName(name);
                        if (buddy != null) this._buddiesByName.delete(name);
                        return buddy
                    }
                }, {
                    key: "_setMyVariables",
                    value: function _setMyVariables(variables) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(variables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var variable = _step.value;
                                this._setMyVariable(variable)
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                    }
                }, {
                    key: "_setMyVariable",
                    value: function _setMyVariable(variable) {
                        if (variable.isNull) this._myVariables.delete(variable.name);
                        else this._myVariables.set(variable.name, variable)
                    }
                }, {
                    key: "_setMyOnlineState",
                    value: function _setMyOnlineState(isOnline) {
                        this._setMyVariable(new _BuddyVariable.SFSBuddyVariable(_BuddyVariable.ReservedBuddyVariables.BV_ONLINE, isOnline))
                    }
                }, {
                    key: "_setMyNickName",
                    value: function _setMyNickName(nickName) {
                        this._setMyVariable(new _BuddyVariable.SFSBuddyVariable(_BuddyVariable.ReservedBuddyVariables.BV_NICKNAME, nickName))
                    }
                }, {
                    key: "_setMyState",
                    value: function _setMyState(state) {
                        this._setMyVariable(new _BuddyVariable.SFSBuddyVariable(_BuddyVariable.ReservedBuddyVariables.BV_STATE, state))
                    }
                }, {
                    key: "_setBuddyStates",
                    value: function _setBuddyStates(states) {
                        this._buddyStates = new _set2.default(states)
                    }
                }, {
                    key: "isInited",
                    get: function get() {
                        return this._inited
                    }
                }]);
                return SFSBuddyManager
            }();
            exports.SFSBuddyManager = SFSBuddyManager
        }, {
            "../entities/variables/BuddyVariable": 158,
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/map": 3,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/core-js/set": 15,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        164: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SFSRoomManager = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _map = _dereq_("babel-runtime/core-js/map");
            var _map2 = _interopRequireDefault(_map);
            var _set = _dereq_("babel-runtime/core-js/set");
            var _set2 = _interopRequireDefault(_set);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSRoomManager = function() {
                function SFSRoomManager(sfs) {
                    (0, _classCallCheck3.default)(this, SFSRoomManager);
                    this._sfs = sfs;
                    this._groups = new _set2.default;
                    this._roomsById = new _map2.default;
                    this._roomsByName = new _map2.default;
                    (0, _seal2.default)(this)
                }(0, _createClass3.default)(SFSRoomManager, [{
                    key: "getRoomGroups",
                    value: function getRoomGroups() {
                        return (0, _from2.default)(this._groups)
                    }
                }, {
                    key: "containsGroup",
                    value: function containsGroup(groupId) {
                        return this._groups.has(groupId)
                    }
                }, {
                    key: "containsRoom",
                    value: function containsRoom(idOrName) {
                        if (typeof idOrName === "number") return this._roomsById.has(idOrName);
                        else return this._roomsByName.has(idOrName)
                    }
                }, {
                    key: "containsRoomInGroup",
                    value: function containsRoomInGroup(idOrName, groupId) {
                        var roomsInGroup = this.getRoomListFromGroup(groupId);
                        if (typeof idOrName === "number") return roomsInGroup.some(function(room) {
                            return room.id === idOrName
                        });
                        else return roomsInGroup.some(function(room) {
                            return room.name === idOrName
                        })
                    }
                }, {
                    key: "getRoomById",
                    value: function getRoomById(id) {
                        return this._roomsById.get(id)
                    }
                }, {
                    key: "getRoomByName",
                    value: function getRoomByName(name) {
                        return this._roomsByName.get(name)
                    }
                }, {
                    key: "getRoomList",
                    value: function getRoomList() {
                        return (0, _from2.default)(this._roomsById.values())
                    }
                }, {
                    key: "getRoomCount",
                    value: function getRoomCount() {
                        return this._roomsById.size
                    }
                }, {
                    key: "getRoomListFromGroup",
                    value: function getRoomListFromGroup(groupId) {
                        return this.getRoomList().filter(function(room) {
                            return room.groupId === groupId
                        })
                    }
                }, {
                    key: "getJoinedRooms",
                    value: function getJoinedRooms() {
                        return this.getRoomList().filter(function(room) {
                            return room.isJoined
                        })
                    }
                }, {
                    key: "getUserRooms",
                    value: function getUserRooms(user) {
                        return this.getRoomList().filter(function(room) {
                            return room.containsUser(user)
                        })
                    }
                }, {
                    key: "_addRoom",
                    value: function _addRoom(room) {
                        var addGroupIfMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                        this._roomsById.set(room.id, room);
                        this._roomsByName.set(room.name, room);
                        room._setRoomManager(this);
                        if (addGroupIfMissing) {
                            if (!this.containsGroup(room.groupId)) this._addGroup(room.groupId)
                        } else room._isManaged = false
                    }
                }, {
                    key: "_replaceRoom",
                    value: function _replaceRoom(room) {
                        var addGroupIfMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                        var oldRoom = this.getRoomById(room.id);
                        if (oldRoom != null) {
                            oldRoom._merge(room);
                            return oldRoom
                        } else {
                            this._addRoom(room, addGroupIfMissing);
                            return room
                        }
                    }
                }, {
                    key: "_removeRoom",
                    value: function _removeRoom(room) {
                        this._roomsById.delete(room.id);
                        this._roomsByName.delete(room.name)
                    }
                }, {
                    key: "_removeRoomById",
                    value: function _removeRoomById(id) {
                        var room = this.getRoomById(id);
                        if (room != null) this._removeRoom(room)
                    }
                }, {
                    key: "_removeRoomByName",
                    value: function _removeRoomByName(name) {
                        var room = this.getRoomByName(name);
                        if (room != null) this._removeRoom(room)
                    }
                }, {
                    key: "_changeRoomName",
                    value: function _changeRoomName(room, newName) {
                        var oldName = room.name;
                        room._name = newName;
                        this._roomsByName.set(newName, room);
                        this._roomsByName.delete(oldName)
                    }
                }, {
                    key: "_changeRoomPasswordState",
                    value: function _changeRoomPasswordState(room, isPassProtected) {
                        room._isPasswordProtected = isPassProtected
                    }
                }, {
                    key: "_changeRoomCapacity",
                    value: function _changeRoomCapacity(room, maxUsers, maxSpect) {
                        room._maxUsers = maxUsers;
                        room._maxSpectators = maxSpect
                    }
                }, {
                    key: "_addGroup",
                    value: function _addGroup(groupId) {
                        this._groups.add(groupId)
                    }
                }, {
                    key: "_removeGroup",
                    value: function _removeGroup(groupId) {
                        this._groups.delete(groupId);
                        var roomsInGroup = this.getRoomListFromGroup(groupId);
                        for (var room in roomsInGroup) {
                            if (!room.isJoined) this._removeRoom(room);
                            else room._isManaged = false
                        }
                    }
                }, {
                    key: "_removeUser",
                    value: function _removeUser(user) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(this.getUserRooms(user)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var room = _step.value;
                                room._removeUser(user)
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                    }
                }]);
                return SFSRoomManager
            }();
            exports.SFSRoomManager = SFSRoomManager
        }, {
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/map": 3,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/core-js/set": 15,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        165: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.GlobalUserManager = exports.SFSUserManager = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _get2 = _dereq_("babel-runtime/helpers/get");
            var _get3 = _interopRequireDefault(_get2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _map = _dereq_("babel-runtime/core-js/map");
            var _map2 = _interopRequireDefault(_map);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSUserManager = function() {
                function SFSUserManager(sfs) {
                    (0, _classCallCheck3.default)(this, SFSUserManager);
                    this._sfs = sfs;
                    this._usersById = new _map2.default;
                    this._usersByName = new _map2.default
                }(0, _createClass3.default)(SFSUserManager, [{
                    key: "containsUserName",
                    value: function containsUserName(name) {
                        return this._usersByName.has(name)
                    }
                }, {
                    key: "containsUserId",
                    value: function containsUserId(id) {
                        return this._usersById.has(id)
                    }
                }, {
                    key: "containsUser",
                    value: function containsUser(user) {
                        return this._usersById.has(user.id)
                    }
                }, {
                    key: "getUserById",
                    value: function getUserById(id) {
                        return this._usersById.get(id)
                    }
                }, {
                    key: "getUserByName",
                    value: function getUserByName(name) {
                        return this._usersByName.get(name)
                    }
                }, {
                    key: "getUserCount",
                    value: function getUserCount() {
                        return this._usersById.size
                    }
                }, {
                    key: "getUserList",
                    value: function getUserList() {
                        return (0, _from2.default)(this._usersById.values())
                    }
                }, {
                    key: "_addUser",
                    value: function _addUser(user) {
                        if (this._usersById.has(user.id) && this._sfs.debug) this._sfs.logger.warn("Unexpected, duplicate user in UserManager: " + user.toString());
                        this.__addUser(user)
                    }
                }, {
                    key: "__addUser",
                    value: function __addUser(user) {
                        this._usersByName.set(user.name, user);
                        this._usersById.set(user.id, user)
                    }
                }, {
                    key: "_removeUser",
                    value: function _removeUser(user) {
                        this._usersById.delete(user.id);
                        this._usersByName.delete(user.name)
                    }
                }, {
                    key: "_clearAll",
                    value: function _clearAll() {
                        this._usersById.clear();
                        this._usersByName.clear()
                    }
                }]);
                return SFSUserManager
            }();
            var GlobalUserManager = function(_SFSUserManager) {
                (0, _inherits3.default)(GlobalUserManager, _SFSUserManager);

                function GlobalUserManager(sfs) {
                    (0, _classCallCheck3.default)(this, GlobalUserManager);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (GlobalUserManager.__proto__ || (0, _getPrototypeOf2.default)(GlobalUserManager)).call(this, sfs));
                    _this._roomRefCount = new _map2.default;
                    (0, _freeze2.default)(_this);
                    return _this
                }(0, _createClass3.default)(GlobalUserManager, [{
                    key: "_addUser",
                    value: function _addUser(user) {
                        if (!this._roomRefCount.has(user)) this._roomRefCount.set(user, 1);
                        else this._roomRefCount.set(user, this._roomRefCount.get(user) + 1);
                        this.__addUser(user)
                    }
                }, {
                    key: "_removeUser",
                    value: function _removeUser(user) {
                        this._removeUserReference(user, false)
                    }
                }, {
                    key: "_removeUserReference",
                    value: function _removeUserReference(user, disconnected) {
                        var count = this._roomRefCount.get(user);
                        if (count < 1) {
                            this._sfs.logger.warn("GlobalUserManager RefCount is already at zero. User: " + user);
                            return
                        }
                        this._roomRefCount.set(user, this._roomRefCount.get(user) - 1);
                        if (count === 0 || disconnected) {
                            (0, _get3.default)(GlobalUserManager.prototype.__proto__ || (0, _getPrototypeOf2.default)(GlobalUserManager.prototype), "_removeUser", this).call(this, user);
                            this._roomRefCount.delete(user)
                        }
                    }
                }]);
                return GlobalUserManager
            }(SFSUserManager);
            exports.SFSUserManager = SFSUserManager;
            exports.GlobalUserManager = GlobalUserManager
        }, {
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/map": 3,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/get": 20,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        166: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Message = exports.Requests = exports.BaseRequest = undefined;
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _Data = _dereq_("../entities/Data");
            var _Logging = _dereq_("../utils/Logging");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var BaseRequest = function() {
                (0, _createClass3.default)(BaseRequest, null, [{
                    key: "KEY_ERROR_CODE",
                    get: function get() {
                        return "ec"
                    }
                }, {
                    key: "KEY_ERROR_PARAMS",
                    get: function get() {
                        return "ep"
                    }
                }]);

                function BaseRequest(id) {
                    (0, _classCallCheck3.default)(this, BaseRequest);
                    this._reqObj = new _Data.SFSObject;
                    this._id = id;
                    this._targetController = 0;
                    this._logger = _Logging.Logger.instance
                }(0, _createClass3.default)(BaseRequest, [{
                    key: "getMessage",
                    value: function getMessage() {
                        return new Message(this._id, this._targetController, this._reqObj)
                    }
                }, {
                    key: "validate",
                    value: function validate() {
                        this._logger.error("BaseRequest.validate = no child-class implementation found!")
                    }
                }, {
                    key: "execute",
                    value: function execute() {
                        this._logger.error("BaseRequest.execute = no child-class implementation found!")
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }]);
                return BaseRequest
            }();
            var Message = function() {
                function Message(id, targetController, content) {
                    (0, _classCallCheck3.default)(this, Message);
                    this._id = id;
                    this._targetController = targetController;
                    this._content = content;
                    (0, _freeze2.default)(this)
                }(0, _createClass3.default)(Message, [{
                    key: "dump",
                    value: function dump() {
                        var name = Requests.getNameFromId(this.id) + " (" + this.id + ")";
                        return name.trim() + "\n" + this.content.getDump()
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id
                    }
                }, {
                    key: "targetController",
                    get: function get() {
                        return this._targetController
                    }
                }, {
                    key: "content",
                    get: function get() {
                        return this._content
                    }
                }]);
                return Message
            }();
            var Requests = (0, _freeze2.default)({
                Handshake: 0,
                Login: 1,
                Logout: 2,
                JoinRoom: 4,
                CreateRoom: 6,
                GenericMessage: 7,
                ChangeRoomName: 8,
                ChangeRoomPassword: 9,
                SetRoomVariables: 11,
                SetUserVariables: 12,
                CallExtension: 13,
                LeaveRoom: 14,
                SubscribeRoomGroup: 15,
                UnsubscribeRoomGroup: 16,
                SpectatorToPlayer: 17,
                PlayerToSpectator: 18,
                ChangeRoomCapacity: 19,
                KickUser: 24,
                BanUser: 25,
                FindRooms: 27,
                FindUsers: 28,
                PingPong: 29,
                SetUserPosition: 30,
                InitBuddyList: 200,
                AddBuddy: 201,
                BlockBuddy: 202,
                RemoveBuddy: 203,
                SetBuddyVariables: 204,
                GoOnline: 205,
                InviteUsers: 300,
                InvitationReply: 301,
                CreateSFSGame: 302,
                QuickJoinGame: 303,
                JoinRoomInvite: 304,
                getNameFromId: function getNameFromId(reqId) {
                    for (var key in this) {
                        if (this.hasOwnProperty(key) && this[key] === reqId) return key
                    }
                    return ""
                }
            });
            exports.BaseRequest = BaseRequest;
            exports.Requests = Requests;
            exports.Message = Message
        }, {
            "../entities/Data": 149,
            "../utils/Logging": 206,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        167: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.MessageRecipientMode = exports.BanMode = exports.MapLimits = exports.RoomExtension = exports.RoomEvents = exports.RoomPermissions = exports.MMORoomSettings = exports.SFSGameSettings = exports.RoomSettings = undefined;
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _Exceptions = _dereq_("../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var RoomSettings = function RoomSettings(name) {
                (0, _classCallCheck3.default)(this, RoomSettings);
                this.name = name;
                this.password = "";
                this.groupId = "default";
                this.isGame = false;
                this.maxUsers = 10;
                this.maxSpectators = 0;
                this.maxVariables = 5;
                this.variables = [];
                this.permissions = null;
                this.events = null;
                this.extension = null;
                this.allowOwnerOnlyInvitation = true
            };
            var SFSGameSettings = function(_RoomSettings) {
                (0, _inherits3.default)(SFSGameSettings, _RoomSettings);

                function SFSGameSettings(name) {
                    (0, _classCallCheck3.default)(this, SFSGameSettings);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SFSGameSettings.__proto__ || (0, _getPrototypeOf2.default)(SFSGameSettings)).call(this, name));
                    _this.isPublic = true;
                    _this.minPlayersToStartGame = 2;
                    _this.invitedPlayers = null;
                    _this.searchableRooms = null;
                    _this.invitationExpiryTime = 15;
                    _this.leaveLastJoinedRoom = true;
                    _this.notifyGameStarted = false;
                    _this.playerMatchExpression = null;
                    _this.spectatorMatchExpression = null;
                    _this.invitationParams = null;
                    (0, _seal2.default)(_this);
                    return _this
                }
                return SFSGameSettings
            }(RoomSettings);
            var MMORoomSettings = function(_RoomSettings2) {
                (0, _inherits3.default)(MMORoomSettings, _RoomSettings2);

                function MMORoomSettings(name, defaultAOI) {
                    (0, _classCallCheck3.default)(this, MMORoomSettings);
                    var _this2 = (0, _possibleConstructorReturn3.default)(this, (MMORoomSettings.__proto__ || (0, _getPrototypeOf2.default)(MMORoomSettings)).call(this, name));
                    _this2.defaultAOI = defaultAOI;
                    _this2.mapLimits = null;
                    _this2.userMaxLimboSeconds = 50;
                    _this2.proximityListUpdateMillis = 250;
                    _this2.sendAOIEntryPoint = true;
                    (0, _seal2.default)(_this2);
                    return _this2
                }
                return MMORoomSettings
            }(RoomSettings);
            var RoomPermissions = function RoomPermissions() {
                (0, _classCallCheck3.default)(this, RoomPermissions);
                this.allowNameChange = false;
                this.allowPasswordStateChange = false;
                this.allowPublicMessages = true;
                this.allowResizing = false;
                (0, _seal2.default)(this)
            };
            var RoomEvents = function RoomEvents() {
                (0, _classCallCheck3.default)(this, RoomEvents);
                this.allowUserCountChange = false;
                this.allowUserEnter = false;
                this.allowUserExit = false;
                this.allowUserVariablesUpdate = false;
                (0, _seal2.default)(this)
            };
            var RoomExtension = function RoomExtension(id, className) {
                (0, _classCallCheck3.default)(this, RoomExtension);
                this.id = id;
                this.className = className;
                this.propertiesFile = "";
                (0, _seal2.default)(this)
            };
            var MapLimits = function MapLimits(lowerLimit, higherLimit) {
                (0, _classCallCheck3.default)(this, MapLimits);
                if (lowerLimit == null || higherLimit == null) throw new _Exceptions.SFSError("Map limits arguments must be both non null!");
                this.lowerLimit = lowerLimit;
                this.higherLimit = higherLimit;
                (0, _seal2.default)(this)
            };
            var BanMode = (0, _freeze2.default)({
                BY_ADDRESS: 0,
                BY_NAME: 1
            });
            var MessageRecipientMode = function() {
                (0, _createClass3.default)(MessageRecipientMode, null, [{
                    key: "TO_USER",
                    get: function get() {
                        return 0
                    }
                }, {
                    key: "TO_ROOM",
                    get: function get() {
                        return 1
                    }
                }, {
                    key: "TO_GROUP",
                    get: function get() {
                        return 2
                    }
                }, {
                    key: "TO_ZONE",
                    get: function get() {
                        return 3
                    }
                }]);

                function MessageRecipientMode(mode, target) {
                    (0, _classCallCheck3.default)(this, MessageRecipientMode);
                    if (mode < MessageRecipientMode.TO_USER || mode > MessageRecipientMode.TO_ZONE) throw new _Exceptions.SFSError("Illegal recipient mode: " + mode);
                    this._mode = mode;
                    this._target = target;
                    (0, _freeze2.default)(this)
                }(0, _createClass3.default)(MessageRecipientMode, [{
                    key: "mode",
                    get: function get() {
                        return this._mode
                    }
                }, {
                    key: "target",
                    get: function get() {
                        return this._target
                    }
                }]);
                return MessageRecipientMode
            }();
            exports.RoomSettings = RoomSettings;
            exports.SFSGameSettings = SFSGameSettings;
            exports.MMORoomSettings = MMORoomSettings;
            exports.RoomPermissions = RoomPermissions;
            exports.RoomEvents = RoomEvents;
            exports.RoomExtension = RoomExtension;
            exports.MapLimits = MapLimits;
            exports.BanMode = BanMode;
            exports.MessageRecipientMode = MessageRecipientMode
        }, {
            "../core/Exceptions": 147,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        168: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.AddBuddyRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var AddBuddyRequest = function(_BaseRequest) {
                (0, _inherits3.default)(AddBuddyRequest, _BaseRequest);
                (0, _createClass3.default)(AddBuddyRequest, null, [{
                    key: "KEY_BUDDY_NAME",
                    get: function get() {
                        return "bn"
                    }
                }]);

                function AddBuddyRequest(buddyName) {
                    (0, _classCallCheck3.default)(this, AddBuddyRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (AddBuddyRequest.__proto__ || (0, _getPrototypeOf2.default)(AddBuddyRequest)).call(this, _Base.Requests.AddBuddy));
                    _this._name = buddyName;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(AddBuddyRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (!sfs.buddyManager.isInited) errors.push("Buddy List not yet initialized; please send an InitBuddyRequest first");
                        if (this._name == null || this._name.length < 1) errors.push("Invalid buddy name (null or empty string)");
                        if (sfs.buddyManager.getMyOnlineState() === false) errors.push("Can't add a buddy while you are offline in the Buddy List system");
                        var buddy = sfs.buddyManager.getBuddyByName(this._name);
                        if (buddy != null && !buddy.isTemp) errors.push("Can't add buddy '" + this._name + "' because it is already in your list");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("AddBuddyRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putUtfString(AddBuddyRequest.KEY_BUDDY_NAME, this._name)
                    }
                }]);
                return AddBuddyRequest
            }(_Base.BaseRequest);
            exports.AddBuddyRequest = AddBuddyRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        169: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.BlockBuddyRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var BlockBuddyRequest = function(_BaseRequest) {
                (0, _inherits3.default)(BlockBuddyRequest, _BaseRequest);
                (0, _createClass3.default)(BlockBuddyRequest, null, [{
                    key: "KEY_BUDDY_NAME",
                    get: function get() {
                        return "bn"
                    }
                }, {
                    key: "KEY_BUDDY_BLOCK_STATE",
                    get: function get() {
                        return "bs"
                    }
                }, {
                    key: "KEY_BUDDY",
                    get: function get() {
                        return "bd"
                    }
                }]);

                function BlockBuddyRequest(buddyName, blocked) {
                    (0, _classCallCheck3.default)(this, BlockBuddyRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (BlockBuddyRequest.__proto__ || (0, _getPrototypeOf2.default)(BlockBuddyRequest)).call(this, _Base.Requests.BlockBuddy));
                    _this._name = buddyName;
                    _this._blocked = blocked;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(BlockBuddyRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (!sfs.buddyManager.isInited) errors.push("Buddy List not yet initialized; please send an InitBuddyRequest first");
                        if (sfs.buddyManager.getMyOnlineState() === false) errors.push("Can't block a buddy while you are offline in the Buddy List system");
                        if (this._name == null || this._name.length < 1) errors.push("Invalid buddy name (null or empty string)");
                        else {
                            var buddy = sfs.buddyManager.getBuddyByName(this._name);
                            if (buddy == null) errors.push("Can't block buddy '" + this._name + "' because it isn't in your list");
                            else if (buddy.isBlocked == this._blocked) errors.push("Block flag is already in the requested '" + this._blocked + "' state for buddy '" + this._name + "'")
                        }
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("BlockBuddyRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putUtfString(BlockBuddyRequest.KEY_BUDDY_NAME, this._name);
                        this._reqObj.putBool(BlockBuddyRequest.KEY_BUDDY_BLOCK_STATE, this._blocked)
                    }
                }]);
                return BlockBuddyRequest
            }(_Base.BaseRequest);
            exports.BlockBuddyRequest = BlockBuddyRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        170: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.BuddyMessageRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Message = _dereq_("../system/Message");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Buddy = _dereq_("../../entities/objects/Buddy");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var BuddyMessageRequest = function(_GenericMessageReques) {
                (0, _inherits3.default)(BuddyMessageRequest, _GenericMessageReques);

                function BuddyMessageRequest(message, targetBuddy) {
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, BuddyMessageRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (BuddyMessageRequest.__proto__ || (0, _getPrototypeOf2.default)(BuddyMessageRequest)).call(this));
                    if (targetBuddy != null && !(targetBuddy instanceof _Buddy.SFSBuddy)) throw new _Exceptions.SFSError("Target buddy must be an instance of SFSBuddy class");
                    _this._type = _Message.GenericMessageType.BUDDY_MSG;
                    _this._message = message;
                    _this._recipient = targetBuddy != null ? targetBuddy.id : -1;
                    _this._params = params;
                    (0, _seal2.default)(_this);
                    return _this
                }
                return BuddyMessageRequest
            }(_Message.GenericMessageRequest);
            exports.BuddyMessageRequest = BuddyMessageRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/objects/Buddy": 154,
            "../system/Message": 196,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        171: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.GoOnlineRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var GoOnlineRequest = function(_BaseRequest) {
                (0, _inherits3.default)(GoOnlineRequest, _BaseRequest);
                (0, _createClass3.default)(GoOnlineRequest, null, [{
                    key: "KEY_ONLINE",
                    get: function get() {
                        return "o"
                    }
                }, {
                    key: "KEY_BUDDY_NAME",
                    get: function get() {
                        return "bn"
                    }
                }, {
                    key: "KEY_BUDDY_ID",
                    get: function get() {
                        return "bi"
                    }
                }]);

                function GoOnlineRequest(online) {
                    (0, _classCallCheck3.default)(this, GoOnlineRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (GoOnlineRequest.__proto__ || (0, _getPrototypeOf2.default)(GoOnlineRequest)).call(this, _Base.Requests.GoOnline));
                    _this._online = online;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(GoOnlineRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (!sfs.buddyManager.isInited) errors.push("Buddy List not yet initialized; please send an InitBuddyRequest first");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("GoOnlineRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        sfs.buddyManager._setMyOnlineState(this._online);
                        this._reqObj.putBool(GoOnlineRequest.KEY_ONLINE, this._online)
                    }
                }]);
                return GoOnlineRequest
            }(_Base.BaseRequest);
            exports.GoOnlineRequest = GoOnlineRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        172: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.InitBuddyListRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var InitBuddyListRequest = function(_BaseRequest) {
                (0, _inherits3.default)(InitBuddyListRequest, _BaseRequest);
                (0, _createClass3.default)(InitBuddyListRequest, null, [{
                    key: "KEY_BLIST",
                    get: function get() {
                        return "bl"
                    }
                }, {
                    key: "KEY_BUDDY_STATES",
                    get: function get() {
                        return "bs"
                    }
                }, {
                    key: "KEY_MY_VARS",
                    get: function get() {
                        return "mv"
                    }
                }]);

                function InitBuddyListRequest() {
                    (0, _classCallCheck3.default)(this, InitBuddyListRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (InitBuddyListRequest.__proto__ || (0, _getPrototypeOf2.default)(InitBuddyListRequest)).call(this, _Base.Requests.InitBuddyList));
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(InitBuddyListRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (sfs.buddyManager.isInited) errors.push("Buddy List is already initialized");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("InitBuddyListRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {}
                }]);
                return InitBuddyListRequest
            }(_Base.BaseRequest);
            exports.InitBuddyListRequest = InitBuddyListRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        173: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.RemoveBuddyRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var RemoveBuddyRequest = function(_BaseRequest) {
                (0, _inherits3.default)(RemoveBuddyRequest, _BaseRequest);
                (0, _createClass3.default)(RemoveBuddyRequest, null, [{
                    key: "KEY_BUDDY_NAME",
                    get: function get() {
                        return "bn"
                    }
                }]);

                function RemoveBuddyRequest(buddyName) {
                    (0, _classCallCheck3.default)(this, RemoveBuddyRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (RemoveBuddyRequest.__proto__ || (0, _getPrototypeOf2.default)(RemoveBuddyRequest)).call(this, _Base.Requests.RemoveBuddy));
                    _this._name = buddyName;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(RemoveBuddyRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (!sfs.buddyManager.isInited) errors.push("Buddy List not yet initialized; please send an InitBuddyRequest first");
                        if (sfs.buddyManager.getMyOnlineState() === false) errors.push("Can't remove a buddy while you are offline in the Buddy List system");
                        if (this._name == null || this._name.length < 1) errors.push("Invalid buddy name (null or empty string)");
                        else if (!sfs.buddyManager.containsBuddy(this._name)) errors.push("Can't remove buddy '" + this._name + "' because it isn't in your list");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("RemoveBuddyRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putUtfString(RemoveBuddyRequest.KEY_BUDDY_NAME, this._name)
                    }
                }]);
                return RemoveBuddyRequest
            }(_Base.BaseRequest);
            exports.RemoveBuddyRequest = RemoveBuddyRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        174: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SetBuddyVariablesRequest = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Data = _dereq_("../../entities/Data");
            var _BuddyVariable = _dereq_("../../entities/variables/BuddyVariable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SetBuddyVariablesRequest = function(_BaseRequest) {
                (0, _inherits3.default)(SetBuddyVariablesRequest, _BaseRequest);
                (0, _createClass3.default)(SetBuddyVariablesRequest, null, [{
                    key: "KEY_BUDDY_NAME",
                    get: function get() {
                        return "bn"
                    }
                }, {
                    key: "KEY_BUDDY_VARS",
                    get: function get() {
                        return "bv"
                    }
                }]);

                function SetBuddyVariablesRequest(buddyVariables) {
                    (0, _classCallCheck3.default)(this, SetBuddyVariablesRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SetBuddyVariablesRequest.__proto__ || (0, _getPrototypeOf2.default)(SetBuddyVariablesRequest)).call(this, _Base.Requests.SetBuddyVariables));
                    _this._buddyVariables = buddyVariables;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SetBuddyVariablesRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (!sfs.buddyManager.isInited) errors.push("Buddy List not yet initialized; please send an InitBuddyRequest first");
                        if (sfs.buddyManager.getMyOnlineState() === false) errors.push("Can't set Buddy Variables while you are offline in the Buddy List system");
                        if (this._buddyVariables == null) errors.push("No Buddy Variables specified");
                        else {
                            if (!(this._buddyVariables instanceof Array)) errors.push("Buddy Variables must be passed in an array");
                            else {
                                if (this._buddyVariables.length === 0) errors.push("No Buddy Variables specified");
                                else {
                                    if (!this._buddyVariables.every(function(item) {
                                            return item instanceof _BuddyVariable.SFSBuddyVariable
                                        })) errors.push("Buddy Variables must be passed as instances of SFSBuddyVariable class")
                                }
                            }
                        }
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("SetBuddyVariablesRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        var varList = new _Data.SFSArray;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(this._buddyVariables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var buddyVar = _step.value;
                                varList.addSFSArray(buddyVar.toSFSArray())
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                        this._reqObj.putSFSArray(SetBuddyVariablesRequest.KEY_BUDDY_VARS, varList)
                    }
                }]);
                return SetBuddyVariablesRequest
            }(_Base.BaseRequest);
            exports.SetBuddyVariablesRequest = SetBuddyVariablesRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/variables/BuddyVariable": 158,
            "../Base": 166,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        175: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CreateSFSGameRequest = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Settings = _dereq_("../Settings");
            var _CreateRoom = _dereq_("../system/CreateRoom");
            var _InviteUsers = _dereq_("./InviteUsers");
            var _User = _dereq_("../../entities/objects/User");
            var _Buddy = _dereq_("../../entities/objects/Buddy");
            var _Data = _dereq_("../../entities/Data");
            var _MatchExpression = _dereq_("../../entities/match/MatchExpression");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var CreateSFSGameRequest = function(_BaseRequest) {
                (0, _inherits3.default)(CreateSFSGameRequest, _BaseRequest);
                (0, _createClass3.default)(CreateSFSGameRequest, null, [{
                    key: "KEY_IS_PUBLIC",
                    get: function get() {
                        return "gip"
                    }
                }, {
                    key: "KEY_MIN_PLAYERS",
                    get: function get() {
                        return "gmp"
                    }
                }, {
                    key: "KEY_INVITED_PLAYERS",
                    get: function get() {
                        return "ginp"
                    }
                }, {
                    key: "KEY_SEARCHABLE_ROOMS",
                    get: function get() {
                        return "gsr"
                    }
                }, {
                    key: "KEY_PLAYER_MATCH_EXP",
                    get: function get() {
                        return "gpme"
                    }
                }, {
                    key: "KEY_SPECTATOR_MATCH_EXP",
                    get: function get() {
                        return "gsme"
                    }
                }, {
                    key: "KEY_INVITATION_EXPIRY",
                    get: function get() {
                        return "gie"
                    }
                }, {
                    key: "KEY_LEAVE_ROOM",
                    get: function get() {
                        return "glr"
                    }
                }, {
                    key: "KEY_NOTIFY_GAME_STARTED",
                    get: function get() {
                        return "gns"
                    }
                }, {
                    key: "KEY_INVITATION_PARAMS",
                    get: function get() {
                        return "ip"
                    }
                }]);

                function CreateSFSGameRequest(settings) {
                    (0, _classCallCheck3.default)(this, CreateSFSGameRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (CreateSFSGameRequest.__proto__ || (0, _getPrototypeOf2.default)(CreateSFSGameRequest)).call(this, _Base.Requests.CreateSFSGame));
                    _this._settings = settings;
                    _this._createRoomRequest = new _CreateRoom.CreateRoomRequest(settings, false, null);
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(CreateSFSGameRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        if (!(this._settings instanceof _Settings.SFSGameSettings)) throw new _Exceptions.SFSValidationError("CreateSFSGameRequest Error", ["Room configuration must be an instance of SFSGameSettings class"]);
                        var errors = [];
                        try {
                            this._createRoomRequest.validate(sfs)
                        } catch (e) {
                            errors = e.getErrors()
                        }
                        if (this._settings.minPlayersToStartGame > this._settings.maxUsers) errors.push("Minimum number of players to start the game can't be greater than the Room's maximum number of users");
                        if (this._settings.invitationExpiryTime < _InviteUsers.InviteUsersRequest.MIN_EXPIRY_TIME || this._settings.invitationExpiryTime > _InviteUsers.InviteUsersRequest.MAX_EXPIRY_TIME) errors.push("Invitation expiration time value is out of range (min: " + _InviteUsers.InviteUsersRequest.MIN_EXPIRY_TIME + "; max: " + _InviteUsers.InviteUsersRequest.MAX_EXPIRY_TIME + ")");
                        if (this._settings.invitedPlayers != null) {
                            if (!(this._settings.invitedPlayers instanceof Array)) errors.push("Invited players must be passed in an array");
                            else {
                                if (this._settings.invitedPlayers.length > _InviteUsers.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE) errors.push("Can't invite more than " + _InviteUsers.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE + " players from client side");
                                if (!this._settings.invitedPlayers.every(function(item) {
                                        return item instanceof _User.SFSUser || item instanceof _Buddy.SFSBuddy
                                    })) errors.push("Each invited player must be an instance of SFSUser or SFSBuddy classes")
                            }
                        }
                        if (this._settings.playerMatchExpression != null && !(this._settings.playerMatchExpression instanceof _MatchExpression.MatchExpression)) errors.push("Player match expression must be an instance of MatchExpression class");
                        if (this._settings.spectatorMatchExpression != null && !(this._settings.spectatorMatchExpression instanceof _MatchExpression.MatchExpression)) errors.push("Spectator match expression must be an instance of MatchExpression class");
                        if (this._settings.invitationParams != null && !(this._settings.invitationParams instanceof _Data.SFSObject)) errors.push("Custom invitation parameters must be set in a SFSObject class instance");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("CreateSFSGameRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._createRoomRequest.execute(sfs);
                        this._reqObj = this._createRoomRequest._reqObj;
                        this._reqObj.putBool(CreateSFSGameRequest.KEY_IS_PUBLIC, this._settings.isPublic);
                        this._reqObj.putShort(CreateSFSGameRequest.KEY_MIN_PLAYERS, this._settings.minPlayersToStartGame);
                        this._reqObj.putShort(CreateSFSGameRequest.KEY_INVITATION_EXPIRY, this._settings.invitationExpiryTime);
                        this._reqObj.putBool(CreateSFSGameRequest.KEY_LEAVE_ROOM, this._settings.leaveLastJoinedRoom);
                        this._reqObj.putBool(CreateSFSGameRequest.KEY_NOTIFY_GAME_STARTED, this._settings.notifyGameStarted);
                        if (this._settings.playerMatchExpression != null) this._reqObj.putSFSArray(CreateSFSGameRequest.KEY_PLAYER_MATCH_EXP, this._settings.playerMatchExpression.toSFSArray());
                        if (this._settings.spectatorMatchExpression != null) this._reqObj.putSFSArray(CreateSFSGameRequest.KEY_SPECTATOR_MATCH_EXP, this._settings.spectatorMatchExpression.toSFSArray());
                        if (this._settings.invitedPlayers != null) {
                            var invitedPlayerIds = [];
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
                            try {
                                for (var _iterator = (0, _getIterator3.default)(this._settings.invitedPlayers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var player = _step.value;
                                    invitedPlayerIds.push(player.id)
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return()
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError
                                    }
                                }
                            }
                            this._reqObj.putIntArray(CreateSFSGameRequest.KEY_INVITED_PLAYERS, invitedPlayerIds)
                        }
                        if (this._settings.searchableRooms != null) this._reqObj.putUtfStringArray(CreateSFSGameRequest.KEY_SEARCHABLE_ROOMS, this._settings.searchableRooms);
                        if (this._settings.invitationParams != null) this._reqObj.putSFSObject(CreateSFSGameRequest.KEY_INVITATION_PARAMS, this._settings.invitationParams)
                    }
                }]);
                return CreateSFSGameRequest
            }(_Base.BaseRequest);
            exports.CreateSFSGameRequest = CreateSFSGameRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/match/MatchExpression": 152,
            "../../entities/objects/Buddy": 154,
            "../../entities/objects/User": 157,
            "../Base": 166,
            "../Settings": 167,
            "../system/CreateRoom": 186,
            "./InviteUsers": 177,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        176: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.InvitationReplyRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Data = _dereq_("../../entities/Data");
            var _Invitation = _dereq_("../../entities/Invitation");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var InvitationReplyRequest = function(_BaseRequest) {
                (0, _inherits3.default)(InvitationReplyRequest, _BaseRequest);
                (0, _createClass3.default)(InvitationReplyRequest, null, [{
                    key: "KEY_INVITATION_ID",
                    get: function get() {
                        return "i"
                    }
                }, {
                    key: "KEY_INVITATION_REPLY",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_INVITATION_PARAMS",
                    get: function get() {
                        return "p"
                    }
                }]);

                function InvitationReplyRequest(invitation, invitationReply) {
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, InvitationReplyRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (InvitationReplyRequest.__proto__ || (0, _getPrototypeOf2.default)(InvitationReplyRequest)).call(this, _Base.Requests.InvitationReply));
                    _this._invitation = invitation;
                    _this._reply = invitationReply;
                    _this._params = params;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(InvitationReplyRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._invitation == null) errors.push("Missing invitation object");
                        else {
                            if (!(this._invitation instanceof _Invitation.SFSInvitation)) errors.push("Invitation object must be an instance of Invitation class")
                        }
                        if (this._params != null && !(this._params instanceof _Data.SFSObject)) errors.push("Custom invitation parameters must be set in a SFSObject class instance");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("InvitationReplyRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putInt(InvitationReplyRequest.KEY_INVITATION_ID, this._invitation.id);
                        this._reqObj.putByte(InvitationReplyRequest.KEY_INVITATION_REPLY, this._reply);
                        if (this._params != null) this._reqObj.putSFSObject(InvitationReplyRequest.KEY_INVITATION_PARAMS, this._params)
                    }
                }]);
                return InvitationReplyRequest
            }(_Base.BaseRequest);
            exports.InvitationReplyRequest = InvitationReplyRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/Invitation": 150,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        177: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.InviteUsersRequest = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _User = _dereq_("../../entities/objects/User");
            var _Buddy = _dereq_("../../entities/objects/Buddy");
            var _Data = _dereq_("../../entities/Data");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var InviteUsersRequest = function(_BaseRequest) {
                (0, _inherits3.default)(InviteUsersRequest, _BaseRequest);
                (0, _createClass3.default)(InviteUsersRequest, null, [{
                    key: "KEY_USER",
                    get: function get() {
                        return "u"
                    }
                }, {
                    key: "KEY_USER_ID",
                    get: function get() {
                        return "ui"
                    }
                }, {
                    key: "KEY_INVITATION_ID",
                    get: function get() {
                        return "ii"
                    }
                }, {
                    key: "KEY_TIME",
                    get: function get() {
                        return "t"
                    }
                }, {
                    key: "KEY_PARAMS",
                    get: function get() {
                        return "p"
                    }
                }, {
                    key: "KEY_INVITEE_ID",
                    get: function get() {
                        return "ee"
                    }
                }, {
                    key: "KEY_INVITED_USERS",
                    get: function get() {
                        return "iu"
                    }
                }, {
                    key: "KEY_REPLY_ID",
                    get: function get() {
                        return "ri"
                    }
                }, {
                    key: "MAX_INVITATIONS_FROM_CLIENT_SIDE",
                    get: function get() {
                        return 8
                    }
                }, {
                    key: "MIN_EXPIRY_TIME",
                    get: function get() {
                        return 5
                    }
                }, {
                    key: "MAX_EXPIRY_TIME",
                    get: function get() {
                        return 300
                    }
                }]);

                function InviteUsersRequest(invitedUsers, secondsForAnswer) {
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, InviteUsersRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (InviteUsersRequest.__proto__ || (0, _getPrototypeOf2.default)(InviteUsersRequest)).call(this, _Base.Requests.InviteUsers));
                    _this._invitedUsers = invitedUsers;
                    _this._secondsForAnswer = secondsForAnswer;
                    _this._params = params;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(InviteUsersRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._invitedUsers == null) errors.push("No invited users");
                        else {
                            if (!(this._invitedUsers instanceof Array)) errors.push("Invited users must be passed in an array");
                            else {
                                if (this._invitedUsers.length < 1) errors.push("No invited users");
                                if (this._invitedUsers.length > InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE) errors.push("Too many invitations; " + InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE + " max are allowed from client side");
                                if (!this._invitedUsers.every(function(item) {
                                        return item instanceof _User.SFSUser || item instanceof _Buddy.SFSBuddy
                                    })) errors.push("Each invited user must be an instance of SFSUser or SFSBuddy class")
                            }
                        }
                        if (this._secondsForAnswer < InviteUsersRequest.MIN_EXPIRY_TIME || this._secondsForAnswer > InviteUsersRequest.MAX_EXPIRY_TIME) errors.push("secondsForAnswer value is out of range (min: " + InviteUsersRequest.MIN_EXPIRY_TIME + "; max: " + InviteUsersRequest.MAX_EXPIRY_TIME + ")");
                        if (this._params != null && !(this._params instanceof _Data.SFSObject)) errors.push("Custom invitation parameters must be set in a SFSObject class instance");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("InviteUsersRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        var invitedUserIds = [];
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(this._invitedUsers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var item = _step.value;
                                if (item instanceof _User.SFSUser || item instanceof _Buddy.SFSBuddy) {
                                    if (item === sfs.mySelf) continue;
                                    invitedUserIds.push(item.id)
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                        this._reqObj.putIntArray(InviteUsersRequest.KEY_INVITED_USERS, invitedUserIds);
                        this._reqObj.putShort(InviteUsersRequest.KEY_TIME, this._secondsForAnswer);
                        if (this._params != null) this._reqObj.putSFSObject(InviteUsersRequest.KEY_PARAMS, this._params)
                    }
                }]);
                return InviteUsersRequest
            }(_Base.BaseRequest);
            exports.InviteUsersRequest = InviteUsersRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/objects/Buddy": 154,
            "../../entities/objects/User": 157,
            "../Base": 166,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        178: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.JoinRoomInvitationRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");
            var _Data = _dereq_("../../entities/Data");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var JoinRoomInvitationRequest = function(_BaseRequest) {
                (0, _inherits3.default)(JoinRoomInvitationRequest, _BaseRequest);
                (0, _createClass3.default)(JoinRoomInvitationRequest, null, [{
                    key: "KEY_ROOM_ID",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_EXPIRY_SECONDS",
                    get: function get() {
                        return "es"
                    }
                }, {
                    key: "KEY_INVITED_NAMES",
                    get: function get() {
                        return "in"
                    }
                }, {
                    key: "KEY_AS_SPECT",
                    get: function get() {
                        return "as"
                    }
                }, {
                    key: "KEY_OPTIONAL_PARAMS",
                    get: function get() {
                        return "op"
                    }
                }]);

                function JoinRoomInvitationRequest(targetRoom, invitedUserNames) {
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    var expirySeconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
                    var asSpectator = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                    (0, _classCallCheck3.default)(this, JoinRoomInvitationRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (JoinRoomInvitationRequest.__proto__ || (0, _getPrototypeOf2.default)(JoinRoomInvitationRequest)).call(this, _Base.Requests.JoinRoomInvite));
                    _this._targetRoom = targetRoom;
                    _this._invitedUserNames = invitedUserNames;
                    _this._params = params;
                    _this._expirySeconds = expirySeconds;
                    _this._asSpectator = asSpectator;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(JoinRoomInvitationRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._targetRoom == null) errors.push("Missing target room");
                        if (this._targetRoom != null && !(this._targetRoom instanceof _Room.SFSRoom)) errors.push("Target room must be an instance of SFSRoom class");
                        if (this._invitedUserNames == null) errors.push("No invitees provided");
                        else {
                            if (!(this._invitedUserNames instanceof Array)) errors.push("Invited user names must be passed in an array");
                            else {
                                if (this._invitedUserNames.length < 1) errors.push("No invitees provided")
                            }
                        }
                        if (this._params != null && !(this._params instanceof _Data.SFSObject)) errors.push("Custom invitation parameters must be set in a SFSObject class instance");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("JoinRoomInvitationRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putInt(JoinRoomInvitationRequest.KEY_ROOM_ID, this._targetRoom.id);
                        this._reqObj.putUtfStringArray(JoinRoomInvitationRequest.KEY_INVITED_NAMES, this._invitedUserNames);
                        this._reqObj.putInt(JoinRoomInvitationRequest.KEY_EXPIRY_SECONDS, this._expirySeconds);
                        this._reqObj.putBool(JoinRoomInvitationRequest.KEY_AS_SPECT, this._asSpectator);
                        if (this._params != null) this._reqObj.putSFSObject(JoinRoomInvitationRequest.KEY_OPTIONAL_PARAMS, this._params)
                    }
                }]);
                return JoinRoomInvitationRequest
            }(_Base.BaseRequest);
            exports.JoinRoomInvitationRequest = JoinRoomInvitationRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        179: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.QuickJoinGameRequest = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");
            var _MatchExpression = _dereq_("../../entities/match/MatchExpression");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var QuickJoinGameRequest = function(_BaseRequest) {
                (0, _inherits3.default)(QuickJoinGameRequest, _BaseRequest);
                (0, _createClass3.default)(QuickJoinGameRequest, null, [{
                    key: "KEY_ROOM_LIST",
                    get: function get() {
                        return "rl"
                    }
                }, {
                    key: "KEY_GROUP_LIST",
                    get: function get() {
                        return "gl"
                    }
                }, {
                    key: "KEY_ROOM_TO_LEAVE",
                    get: function get() {
                        return "tl"
                    }
                }, {
                    key: "KEY_MATCH_EXPRESSION",
                    get: function get() {
                        return "me"
                    }
                }, {
                    key: "MAX_ROOMS",
                    get: function get() {
                        return 32
                    }
                }]);

                function QuickJoinGameRequest(matchExpression, whereToSearch) {
                    var roomToLeave = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, QuickJoinGameRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (QuickJoinGameRequest.__proto__ || (0, _getPrototypeOf2.default)(QuickJoinGameRequest)).call(this, _Base.Requests.QuickJoinGame));
                    _this._matchExpression = matchExpression;
                    _this._whereToSearch = whereToSearch;
                    _this._roomToLeave = roomToLeave;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(QuickJoinGameRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._matchExpression != null && !(this._matchExpression instanceof _MatchExpression.MatchExpression)) errors.push("Match expression must be an instance of MatchExpression class");
                        if (this._whereToSearch == null || this._whereToSearch.length < 1) errors.push("Missing list of Rooms or Group names where to search the game to join");
                        else if (this._whereToSearch.length > QuickJoinGameRequest.MAX_ROOMS) errors.push("Too many Rooms specified in list where to search the game to join; client limit is: " + QuickJoinGameRequest.MAX_ROOMS);
                        if (this._roomToLeave != null && !(this._roomToLeave instanceof _Room.SFSRoom)) errors.push("Room to leave must be an instance of SFSRoom class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("CreateSFSGameRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        if (typeof this._whereToSearch[0] === "string") {
                            this._reqObj.putUtfStringArray(QuickJoinGameRequest.KEY_GROUP_LIST, this._whereToSearch)
                        } else if (this._whereToSearch[0] instanceof _Room.SFSRoom) {
                            var roomIds = [];
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
                            try {
                                for (var _iterator = (0, _getIterator3.default)(this._whereToSearch), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var item = _step.value;
                                    if (item instanceof _Room.SFSRoom) roomIds.push(item.id)
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return()
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError
                                    }
                                }
                            }
                            this._reqObj.putIntArray(QuickJoinGameRequest.KEY_ROOM_LIST, roomIds)
                        } else throw new _Exceptions.SFSError("Invalid type in whereToSearch parameter");
                        if (this._roomToLeave != null) this._reqObj.putInt(QuickJoinGameRequest.KEY_ROOM_TO_LEAVE, this._roomToLeave.id);
                        if (this._matchExpression != null) this._reqObj.putSFSArray(QuickJoinGameRequest.KEY_MATCH_EXPRESSION, this._matchExpression.toSFSArray())
                    }
                }]);
                return QuickJoinGameRequest
            }(_Base.BaseRequest);
            exports.QuickJoinGameRequest = QuickJoinGameRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/match/MatchExpression": 152,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        180: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SetMMOItemVariables = undefined;
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SetMMOItemVariables = function() {
                function SetMMOItemVariables() {
                    (0, _classCallCheck3.default)(this, SetMMOItemVariables)
                }(0, _createClass3.default)(SetMMOItemVariables, null, [{
                    key: "KEY_ROOM_ID",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_ITEM_ID",
                    get: function get() {
                        return "i"
                    }
                }, {
                    key: "KEY_VAR_LIST",
                    get: function get() {
                        return "v"
                    }
                }]);
                return SetMMOItemVariables
            }();
            exports.SetMMOItemVariables = SetMMOItemVariables
        }, {
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        181: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SetUserPositionRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Data = _dereq_("../../entities/Data");
            var _Room = _dereq_("../../entities/objects/Room");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SetUserPositionRequest = function(_BaseRequest) {
                (0, _inherits3.default)(SetUserPositionRequest, _BaseRequest);
                (0, _createClass3.default)(SetUserPositionRequest, null, [{
                    key: "KEY_ROOM",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_VEC3D",
                    get: function get() {
                        return "v"
                    }
                }, {
                    key: "KEY_PLUS_USER_LIST",
                    get: function get() {
                        return "p"
                    }
                }, {
                    key: "KEY_MINUS_USER_LIST",
                    get: function get() {
                        return "m"
                    }
                }, {
                    key: "KEY_PLUS_ITEM_LIST",
                    get: function get() {
                        return "q"
                    }
                }, {
                    key: "KEY_MINUS_ITEM_LIST",
                    get: function get() {
                        return "n"
                    }
                }]);

                function SetUserPositionRequest(pos) {
                    var targetRoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    (0, _classCallCheck3.default)(this, SetUserPositionRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SetUserPositionRequest.__proto__ || (0, _getPrototypeOf2.default)(SetUserPositionRequest)).call(this, _Base.Requests.SetUserPosition));
                    _this._pos = pos;
                    _this._room = targetRoom;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SetUserPositionRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._pos == null || !(this._pos instanceof _Data.Vec3D)) errors.push("Position must be an instance of Vec3D class");
                        if (this._room == null) this._room = sfs.lastJoinedRoom;
                        if (this._room == null) errors.push("You are not joined in any room");
                        if (!(this._room instanceof _Room.MMORoom)) errors.push("Target room must be an instance of MMORoom class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("SetUserPosition Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putInt(SetUserPositionRequest.KEY_ROOM, this._room.id);
                        if (this._pos.isFloat) this._reqObj.putFloatArray(SetUserPositionRequest.KEY_VEC3D, this._pos.toArray());
                        else this._reqObj.putIntArray(SetUserPositionRequest.KEY_VEC3D, this._pos.toArray())
                    }
                }]);
                return SetUserPositionRequest
            }(_Base.BaseRequest);
            exports.SetUserPositionRequest = SetUserPositionRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        182: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.BanUserRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var BanUserRequest = function(_BaseRequest) {
                (0, _inherits3.default)(BanUserRequest, _BaseRequest);
                (0, _createClass3.default)(BanUserRequest, null, [{
                    key: "KEY_USER_ID",
                    get: function get() {
                        return "u"
                    }
                }, {
                    key: "KEY_MESSAGE",
                    get: function get() {
                        return "m"
                    }
                }, {
                    key: "KEY_DELAY",
                    get: function get() {
                        return "d"
                    }
                }, {
                    key: "KEY_BAN_MODE",
                    get: function get() {
                        return "b"
                    }
                }, {
                    key: "KEY_BAN_DURATION_HOURS",
                    get: function get() {
                        return "dh"
                    }
                }]);

                function BanUserRequest(userId) {
                    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var banMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                    var delaySeconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
                    var durationHours = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 24;
                    (0, _classCallCheck3.default)(this, BanUserRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (BanUserRequest.__proto__ || (0, _getPrototypeOf2.default)(BanUserRequest)).call(this, _Base.Requests.BanUser));
                    _this._userId = userId;
                    _this._message = message;
                    _this._banMode = banMode;
                    _this._delay = delaySeconds;
                    _this._durationHours = durationHours;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(BanUserRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("BanUserRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putInt(BanUserRequest.KEY_USER_ID, this._userId);
                        this._reqObj.putInt(BanUserRequest.KEY_DELAY, this._delay);
                        this._reqObj.putInt(BanUserRequest.KEY_BAN_MODE, this._banMode);
                        this._reqObj.putInt(BanUserRequest.KEY_BAN_DURATION_HOURS, this._durationHours);
                        if (this._message != null && this._message.length > 0) this._reqObj.putUtfString(BanUserRequest.KEY_MESSAGE, this._message)
                    }
                }]);
                return BanUserRequest
            }(_Base.BaseRequest);
            exports.BanUserRequest = BanUserRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        183: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ChangeRoomCapacityRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var ChangeRoomCapacityRequest = function(_BaseRequest) {
                (0, _inherits3.default)(ChangeRoomCapacityRequest, _BaseRequest);
                (0, _createClass3.default)(ChangeRoomCapacityRequest, null, [{
                    key: "KEY_ROOM",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_USER_SIZE",
                    get: function get() {
                        return "u"
                    }
                }, {
                    key: "KEY_SPEC_SIZE",
                    get: function get() {
                        return "s"
                    }
                }]);

                function ChangeRoomCapacityRequest(room, newMaxUsers, newMaxSpect) {
                    (0, _classCallCheck3.default)(this, ChangeRoomCapacityRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (ChangeRoomCapacityRequest.__proto__ || (0, _getPrototypeOf2.default)(ChangeRoomCapacityRequest)).call(this, _Base.Requests.ChangeRoomCapacity));
                    _this._room = room;
                    _this._newMaxUsers = newMaxUsers;
                    _this._newMaxSpect = newMaxSpect;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(ChangeRoomCapacityRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (!(this._room instanceof _Room.SFSRoom)) errors.push("Room must be an instance of SFSRoom class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("ChangeRoomCapacityRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putInt(ChangeRoomCapacityRequest.KEY_ROOM, this._room.id);
                        this._reqObj.putInt(ChangeRoomCapacityRequest.KEY_USER_SIZE, this._newMaxUsers);
                        this._reqObj.putInt(ChangeRoomCapacityRequest.KEY_SPEC_SIZE, this._newMaxSpect)
                    }
                }]);
                return ChangeRoomCapacityRequest
            }(_Base.BaseRequest);
            exports.ChangeRoomCapacityRequest = ChangeRoomCapacityRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        184: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ChangeRoomNameRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var ChangeRoomNameRequest = function(_BaseRequest) {
                (0, _inherits3.default)(ChangeRoomNameRequest, _BaseRequest);
                (0, _createClass3.default)(ChangeRoomNameRequest, null, [{
                    key: "KEY_ROOM",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_NAME",
                    get: function get() {
                        return "n"
                    }
                }]);

                function ChangeRoomNameRequest(room, newName) {
                    (0, _classCallCheck3.default)(this, ChangeRoomNameRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (ChangeRoomNameRequest.__proto__ || (0, _getPrototypeOf2.default)(ChangeRoomNameRequest)).call(this, _Base.Requests.ChangeRoomName));
                    _this._room = room;
                    _this._newName = newName;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(ChangeRoomNameRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (!(this._room instanceof _Room.SFSRoom)) errors.push("Room must be an instance of SFSRoom class");
                        if (this._newName == null || this._newName.length === 0) errors.push("New room name must be a non-null and non-empty string");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("ChangeRoomNameRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putInt(ChangeRoomNameRequest.KEY_ROOM, this._room.id);
                        this._reqObj.putUtfString(ChangeRoomNameRequest.KEY_NAME, this._newName)
                    }
                }]);
                return ChangeRoomNameRequest
            }(_Base.BaseRequest);
            exports.ChangeRoomNameRequest = ChangeRoomNameRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        185: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ChangeRoomPasswordStateRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var ChangeRoomPasswordStateRequest = function(_BaseRequest) {
                (0, _inherits3.default)(ChangeRoomPasswordStateRequest, _BaseRequest);
                (0, _createClass3.default)(ChangeRoomPasswordStateRequest, null, [{
                    key: "KEY_ROOM",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_PASS",
                    get: function get() {
                        return "p"
                    }
                }]);

                function ChangeRoomPasswordStateRequest(room, newPass) {
                    (0, _classCallCheck3.default)(this, ChangeRoomPasswordStateRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (ChangeRoomPasswordStateRequest.__proto__ || (0, _getPrototypeOf2.default)(ChangeRoomPasswordStateRequest)).call(this, _Base.Requests.ChangeRoomPassword));
                    _this._room = room;
                    _this._newPass = newPass;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(ChangeRoomPasswordStateRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (!(this._room instanceof _Room.SFSRoom)) errors.push("Room must be an instance of SFSRoom class");
                        if (this._newPass == null) errors.push("New room password must be a non-null string (empty string to remove the password)");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("ChangeRoomPasswordStateRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putInt(ChangeRoomPasswordStateRequest.KEY_ROOM, this._room.id);
                        this._reqObj.putUtfString(ChangeRoomPasswordStateRequest.KEY_PASS, this._newPass)
                    }
                }]);
                return ChangeRoomPasswordStateRequest
            }(_Base.BaseRequest);
            exports.ChangeRoomPasswordStateRequest = ChangeRoomPasswordStateRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        186: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CreateRoomRequest = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Settings = _dereq_("../Settings");
            var _Data = _dereq_("../../entities/Data");
            var _Room = _dereq_("../../entities/objects/Room");
            var _RoomVariable = _dereq_("../../entities/variables/RoomVariable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var CreateRoomRequest = function(_BaseRequest) {
                (0, _inherits3.default)(CreateRoomRequest, _BaseRequest);
                (0, _createClass3.default)(CreateRoomRequest, null, [{
                    key: "KEY_ROOM",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_NAME",
                    get: function get() {
                        return "n"
                    }
                }, {
                    key: "KEY_PASSWORD",
                    get: function get() {
                        return "p"
                    }
                }, {
                    key: "KEY_GROUP_ID",
                    get: function get() {
                        return "g"
                    }
                }, {
                    key: "KEY_ISGAME",
                    get: function get() {
                        return "ig"
                    }
                }, {
                    key: "KEY_MAXUSERS",
                    get: function get() {
                        return "mu"
                    }
                }, {
                    key: "KEY_MAXSPECTATORS",
                    get: function get() {
                        return "ms"
                    }
                }, {
                    key: "KEY_MAXVARS",
                    get: function get() {
                        return "mv"
                    }
                }, {
                    key: "KEY_ROOMVARS",
                    get: function get() {
                        return "rv"
                    }
                }, {
                    key: "KEY_PERMISSIONS",
                    get: function get() {
                        return "pm"
                    }
                }, {
                    key: "KEY_EVENTS",
                    get: function get() {
                        return "ev"
                    }
                }, {
                    key: "KEY_EXTID",
                    get: function get() {
                        return "xn"
                    }
                }, {
                    key: "KEY_EXTCLASS",
                    get: function get() {
                        return "xc"
                    }
                }, {
                    key: "KEY_EXTPROP",
                    get: function get() {
                        return "xp"
                    }
                }, {
                    key: "KEY_AUTOJOIN",
                    get: function get() {
                        return "aj"
                    }
                }, {
                    key: "KEY_ROOM_TO_LEAVE",
                    get: function get() {
                        return "rl"
                    }
                }, {
                    key: "KEY_ALLOW_JOIN_INVITATION_BY_OWNER",
                    get: function get() {
                        return "aji"
                    }
                }, {
                    key: "KEY_MMO_DEFAULT_AOI",
                    get: function get() {
                        return "maoi"
                    }
                }, {
                    key: "KEY_MMO_MAP_LOW_LIMIT",
                    get: function get() {
                        return "mllm"
                    }
                }, {
                    key: "KEY_MMO_MAP_HIGH_LIMIT",
                    get: function get() {
                        return "mlhm"
                    }
                }, {
                    key: "KEY_MMO_USER_MAX_LIMBO_SECONDS",
                    get: function get() {
                        return "muls"
                    }
                }, {
                    key: "KEY_MMO_PROXIMITY_UPDATE_MILLIS",
                    get: function get() {
                        return "mpum"
                    }
                }, {
                    key: "KEY_MMO_SEND_ENTRY_POINT",
                    get: function get() {
                        return "msep"
                    }
                }]);

                function CreateRoomRequest(settings) {
                    var autoJoin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var roomToLeave = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, CreateRoomRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (CreateRoomRequest.__proto__ || (0, _getPrototypeOf2.default)(CreateRoomRequest)).call(this, _Base.Requests.CreateRoom));
                    _this._settings = settings;
                    _this._autoJoin = autoJoin;
                    _this._roomToLeave = roomToLeave;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(CreateRoomRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        if (!(this._settings instanceof _Settings.RoomSettings)) throw new _Exceptions.SFSValidationError("CreateRoomRequest Error", ["Room configuration must be an instance of RoomSettings class"]);
                        var errors = [];
                        if (this._settings.name == null || this._settings.name.length === 0) errors.push("Missing Room name");
                        if (this._settings.maxUsers <= 0) errors.push("Max number of users must be > 0");
                        if (this._settings.maxSpectators < 0) errors.push("Max number of spectators must be >= 0");
                        if (this._settings.maxVariables < 0) errors.push("Max number of Room Variables must be >= 0");
                        if (this._settings.variables != null) {
                            if (!(this._settings.variables instanceof Array)) errors.push("Room Variables must be passed in an array");
                            else {
                                if (!this._settings.variables.every(function(item) {
                                        return item instanceof _RoomVariable.SFSRoomVariable
                                    })) errors.push("Each Room Variable must be an instance of SFSRoomVariable class")
                            }
                        }
                        if (this._settings.permissions != null && !(this._settings.permissions instanceof _Settings.RoomPermissions)) errors.push("Allowed room permissions must be an instance of RoomPermissions class");
                        if (this._settings.events != null && !(this._settings.events instanceof _Settings.RoomEvents)) errors.push("Allowed room events must be an instance of RoomEvents class");
                        if (this._settings.extension != null) {
                            if (!(this._settings.extension instanceof _Settings.RoomExtension)) errors.push("Room Extension settings must be an instance of RoomExtension class");
                            else {
                                if (this._settings.extension.className == null || this._settings.extension.className.length === 0) errors.push("Missing Room Extension class name");
                                if (this._settings.extension.id == null || this._settings.extension.id.length === 0) errors.push("Missing Room Extension id")
                            }
                        }
                        if (this._settings instanceof _Settings.MMORoomSettings) {
                            if (this._settings.defaultAOI == null) errors.push("Missing MMORoom's default AoI (Area of Interest)");
                            if (!(this._settings.defaultAOI instanceof _Data.Vec3D)) errors.push("MMORoom's AoI (Area of Interest) must be an instance of Vec3D class");
                            if (this._settings.mapLimits != null) {
                                if (!(this._settings.mapLimits instanceof _Settings.MapLimits)) errors.push("MMORoom's map limits must be set in an instance of MapLimits class");
                                else {
                                    if (this._settings.mapLimits.lowerLimit == null || this._settings.mapLimits.higherLimit == null) errors.push("MMORoom's lower and higher map limits must be both set");
                                    if (!(this._settings.mapLimits.lowerLimit instanceof _Data.Vec3D) || !(this._settings.mapLimits.higherLimit instanceof _Data.Vec3D)) errors.push("MMORoom's lower and higher map limits must be both instances of Vec3D class")
                                }
                            }
                        }
                        if (this._roomToLeave != null && !(this._roomToLeave instanceof _Room.SFSRoom)) errors.push("Room to leave must be an instance of SFSRoom class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("CreateRoomRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putUtfString(CreateRoomRequest.KEY_NAME, this._settings.name);
                        this._reqObj.putUtfString(CreateRoomRequest.KEY_GROUP_ID, this._settings.groupId);
                        this._reqObj.putUtfString(CreateRoomRequest.KEY_PASSWORD, this._settings.password);
                        this._reqObj.putBool(CreateRoomRequest.KEY_ISGAME, this._settings.isGame);
                        this._reqObj.putShort(CreateRoomRequest.KEY_MAXUSERS, this._settings.maxUsers);
                        this._reqObj.putShort(CreateRoomRequest.KEY_MAXSPECTATORS, this._settings.maxSpectators);
                        this._reqObj.putShort(CreateRoomRequest.KEY_MAXVARS, this._settings.maxVariables);
                        this._reqObj.putBool(CreateRoomRequest.KEY_ALLOW_JOIN_INVITATION_BY_OWNER, this._settings.allowOwnerOnlyInvitation);
                        if (this._settings.variables != null && this._settings.variables.length > 0) {
                            var roomVars = new _Data.SFSArray;
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
                            try {
                                for (var _iterator = (0, _getIterator3.default)(this._settings.variables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var roomVar = _step.value;
                                    roomVars.addSFSArray(roomVar.toSFSArray())
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return()
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError
                                    }
                                }
                            }
                            this._reqObj.putSFSArray(CreateRoomRequest.KEY_ROOMVARS, roomVars)
                        }
                        if (this._settings.permissions != null) {
                            var sfsPermissions = [];
                            sfsPermissions.push(this._settings.permissions.allowNameChange);
                            sfsPermissions.push(this._settings.permissions.allowPasswordStateChange);
                            sfsPermissions.push(this._settings.permissions.allowPublicMessages);
                            sfsPermissions.push(this._settings.permissions.allowResizing);
                            this._reqObj.putBoolArray(CreateRoomRequest.KEY_PERMISSIONS, sfsPermissions)
                        }
                        if (this._settings.events != null) {
                            var sfsEvents = [];
                            sfsEvents.push(this._settings.events.allowUserEnter);
                            sfsEvents.push(this._settings.events.allowUserExit);
                            sfsEvents.push(this._settings.events.allowUserCountChange);
                            sfsEvents.push(this._settings.events.allowUserVariablesUpdate);
                            this._reqObj.putBoolArray(CreateRoomRequest.KEY_EVENTS, sfsEvents)
                        }
                        if (this._settings.extension != null) {
                            this._reqObj.putUtfString(CreateRoomRequest.KEY_EXTID, this._settings.extension.id);
                            this._reqObj.putUtfString(CreateRoomRequest.KEY_EXTCLASS, this._settings.extension.className);
                            if (this._settings.extension.propertiesFile != null && this._settings.extension.propertiesFile.length > 0) this._reqObj.putUtfString(CreateRoomRequest.KEY_EXTPROP, this._settings.extension.propertiesFile)
                        }
                        if (this._settings instanceof _Settings.MMORoomSettings) {
                            if (this._settings.defaultAOI.isFloat) {
                                this._reqObj.putFloatArray(CreateRoomRequest.KEY_MMO_DEFAULT_AOI, this._settings.defaultAOI.toArray());
                                if (this._settings.mapLimits != null) {
                                    this._reqObj.putFloatArray(CreateRoomRequest.KEY_MMO_MAP_LOW_LIMIT, this._settings.mapLimits.lowerLimit.toArray());
                                    this._reqObj.putFloatArray(CreateRoomRequest.KEY_MMO_MAP_HIGH_LIMIT, this._settings.mapLimits.higherLimit.toArray())
                                }
                            } else {
                                this._reqObj.putIntArray(CreateRoomRequest.KEY_MMO_DEFAULT_AOI, this._settings.defaultAOI.toArray());
                                if (this._settings.mapLimits != null) {
                                    this._reqObj.putIntArray(CreateRoomRequest.KEY_MMO_MAP_LOW_LIMIT, this._settings.mapLimits.lowerLimit.toArray());
                                    this._reqObj.putIntArray(CreateRoomRequest.KEY_MMO_MAP_HIGH_LIMIT, this._settings.mapLimits.higherLimit.toArray())
                                }
                            }
                            this._reqObj.putShort(CreateRoomRequest.KEY_MMO_USER_MAX_LIMBO_SECONDS, this._settings.userMaxLimboSeconds);
                            this._reqObj.putShort(CreateRoomRequest.KEY_MMO_PROXIMITY_UPDATE_MILLIS, this._settings.proximityListUpdateMillis);
                            this._reqObj.putBool(CreateRoomRequest.KEY_MMO_SEND_ENTRY_POINT, this._settings.sendAOIEntryPoint);
                        }
                        this._reqObj.putBool(CreateRoomRequest.KEY_AUTOJOIN, this._autoJoin);
                        if (this._roomToLeave != null) this._reqObj.putInt(CreateRoomRequest.KEY_ROOM_TO_LEAVE, this._roomToLeave.id)
                    }
                }]);
                return CreateRoomRequest
            }(_Base.BaseRequest);
            exports.CreateRoomRequest = CreateRoomRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/objects/Room": 156,
            "../../entities/variables/RoomVariable": 160,
            "../Base": 166,
            "../Settings": 167,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        187: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ExtensionRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Data = _dereq_("../../entities/Data");
            var _Room = _dereq_("../../entities/objects/Room");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var ExtensionRequest = function(_BaseRequest) {
                (0, _inherits3.default)(ExtensionRequest, _BaseRequest);
                (0, _createClass3.default)(ExtensionRequest, null, [{
                    key: "KEY_CMD",
                    get: function get() {
                        return "c"
                    }
                }, {
                    key: "KEY_PARAMS",
                    get: function get() {
                        return "p"
                    }
                }, {
                    key: "KEY_ROOM",
                    get: function get() {
                        return "r"
                    }
                }]);

                function ExtensionRequest(extCmd) {
                    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var room = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, ExtensionRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (ExtensionRequest.__proto__ || (0, _getPrototypeOf2.default)(ExtensionRequest)).call(this, _Base.Requests.CallExtension));
                    _this._targetController = 1;
                    _this._extCmd = extCmd;
                    _this._params = params;
                    _this._room = room;
                    if (_this._params == null) _this._params = new _Data.SFSObject;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(ExtensionRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._extCmd == null || this._extCmd.length === 0) errors.push("Missing extension command");
                        if (this._params != null && !(this._params instanceof _Data.SFSObject)) errors.push("Custom parameters must be set in a SFSObject class instance");
                        if (this._room != null && !(this._room instanceof _Room.SFSRoom)) errors.push("Room must be an instance of SFSRoom class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("ExtensionRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putUtfString(ExtensionRequest.KEY_CMD, this._extCmd);
                        this._reqObj.putInt(ExtensionRequest.KEY_ROOM, this._room == null ? -1 : this._room.id);
                        this._reqObj.putSFSObject(ExtensionRequest.KEY_PARAMS, this._params)
                    }
                }]);
                return ExtensionRequest
            }(_Base.BaseRequest);
            exports.ExtensionRequest = ExtensionRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        188: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.FindRoomsRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _MatchExpression = _dereq_("../../entities/match/MatchExpression");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var FindRoomsRequest = function(_BaseRequest) {
                (0, _inherits3.default)(FindRoomsRequest, _BaseRequest);
                (0, _createClass3.default)(FindRoomsRequest, null, [{
                    key: "KEY_EXPRESSION",
                    get: function get() {
                        return "e"
                    }
                }, {
                    key: "KEY_GROUP",
                    get: function get() {
                        return "g"
                    }
                }, {
                    key: "KEY_LIMIT",
                    get: function get() {
                        return "l"
                    }
                }, {
                    key: "KEY_FILTERED_ROOMS",
                    get: function get() {
                        return "fr"
                    }
                }]);

                function FindRoomsRequest(expression) {
                    var groupId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    (0, _classCallCheck3.default)(this, FindRoomsRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (FindRoomsRequest.__proto__ || (0, _getPrototypeOf2.default)(FindRoomsRequest)).call(this, _Base.Requests.FindRooms));
                    _this._matchExpr = expression;
                    _this._groupId = groupId;
                    _this._limit = limit;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(FindRoomsRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._matchExpr == null) errors.push("Missing match expression");
                        if (this._matchExpr != null && !(this._matchExpr instanceof _MatchExpression.MatchExpression)) errors.push("Match expression must be passed as an instance of MatchExpression class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("FindRoomsRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putSFSArray(FindRoomsRequest.KEY_EXPRESSION, this._matchExpr.toSFSArray());
                        if (this._groupId != null) this._reqObj.putUtfString(FindRoomsRequest.KEY_GROUP, this._groupId);
                        if (this._limit > 0) this._reqObj.putShort(FindRoomsRequest.KEY_LIMIT, this._limit)
                    }
                }]);
                return FindRoomsRequest
            }(_Base.BaseRequest);
            exports.FindRoomsRequest = FindRoomsRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/match/MatchExpression": 152,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        189: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.FindUsersRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");
            var _MatchExpression = _dereq_("../../entities/match/MatchExpression");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var FindUsersRequest = function(_BaseRequest) {
                (0, _inherits3.default)(FindUsersRequest, _BaseRequest);
                (0, _createClass3.default)(FindUsersRequest, null, [{
                    key: "KEY_EXPRESSION",
                    get: function get() {
                        return "e"
                    }
                }, {
                    key: "KEY_GROUP",
                    get: function get() {
                        return "g"
                    }
                }, {
                    key: "KEY_ROOM",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_LIMIT",
                    get: function get() {
                        return "l"
                    }
                }, {
                    key: "KEY_FILTERED_USERS",
                    get: function get() {
                        return "fu"
                    }
                }]);

                function FindUsersRequest(expression) {
                    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    (0, _classCallCheck3.default)(this, FindUsersRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (FindUsersRequest.__proto__ || (0, _getPrototypeOf2.default)(FindUsersRequest)).call(this, _Base.Requests.FindUsers));
                    _this._matchExpr = expression;
                    _this._target = target;
                    _this._limit = limit;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(FindUsersRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._matchExpr == null) errors.push("Missing match expression");
                        if (this._matchExpr != null && !(this._matchExpr instanceof _MatchExpression.MatchExpression)) errors.push("Match expression must be passed as an instance of MatchExpression class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("FindUsersRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putSFSArray(FindUsersRequest.KEY_EXPRESSION, this._matchExpr.toSFSArray());
                        if (this._target != null) {
                            if (this._target instanceof _Room.SFSRoom) this._reqObj.putInt(FindUsersRequest.KEY_ROOM, this._target.id);
                            else if (typeof this._target === "string") this._reqObj.putUtfString(FindUsersRequest.KEY_GROUP, this._target);
                            else this._logger.warn("Unsupported target type for FindUsersRequest: " + this._target)
                        }
                        if (this._limit > 0) this._reqObj.putShort(FindUsersRequest.KEY_LIMIT, this._limit)
                    }
                }]);
                return FindUsersRequest
            }(_Base.BaseRequest);
            exports.FindUsersRequest = FindUsersRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/match/MatchExpression": 152,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        190: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.HandshakeRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var HandshakeRequest = function(_BaseRequest) {
                (0, _inherits3.default)(HandshakeRequest, _BaseRequest);
                (0, _createClass3.default)(HandshakeRequest, null, [{
                    key: "KEY_SESSION_TOKEN",
                    get: function get() {
                        return "tk"
                    }
                }, {
                    key: "KEY_API",
                    get: function get() {
                        return "api"
                    }
                }, {
                    key: "KEY_COMPRESSION_THRESHOLD",
                    get: function get() {
                        return "ct"
                    }
                }, {
                    key: "KEY_CLIENT_TYPE",
                    get: function get() {
                        return "cl"
                    }
                }, {
                    key: "KEY_MAX_MESSAGE_SIZE",
                    get: function get() {
                        return "ms"
                    }
                }]);

                function HandshakeRequest(apiVersion, clientDetails) {
                    (0, _classCallCheck3.default)(this, HandshakeRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (HandshakeRequest.__proto__ || (0, _getPrototypeOf2.default)(HandshakeRequest)).call(this, _Base.Requests.Handshake));
                    _this._apiVersion = apiVersion;
                    _this._clientDetails = clientDetails;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(HandshakeRequest, [{
                    key: "validate",
                    value: function validate(sfs) {}
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putUtfString(HandshakeRequest.KEY_API, this._apiVersion);
                        this._reqObj.putUtfString(HandshakeRequest.KEY_CLIENT_TYPE, this._clientDetails)
                    }
                }]);
                return HandshakeRequest
            }(_Base.BaseRequest);
            exports.HandshakeRequest = HandshakeRequest
        }, {
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        191: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.JoinRoomRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var JoinRoomRequest = function(_BaseRequest) {
                (0, _inherits3.default)(JoinRoomRequest, _BaseRequest);
                (0, _createClass3.default)(JoinRoomRequest, null, [{
                    key: "KEY_ROOM",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_USER_LIST",
                    get: function get() {
                        return "ul"
                    }
                }, {
                    key: "KEY_ROOM_NAME",
                    get: function get() {
                        return "n"
                    }
                }, {
                    key: "KEY_ROOM_ID",
                    get: function get() {
                        return "i"
                    }
                }, {
                    key: "KEY_PASS",
                    get: function get() {
                        return "p"
                    }
                }, {
                    key: "KEY_ROOM_TO_LEAVE",
                    get: function get() {
                        return "rl"
                    }
                }, {
                    key: "KEY_AS_SPECTATOR",
                    get: function get() {
                        return "sp"
                    }
                }]);

                function JoinRoomRequest(room) {
                    var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var roomIdToLeave = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    var asSpectator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                    (0, _classCallCheck3.default)(this, JoinRoomRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (JoinRoomRequest.__proto__ || (0, _getPrototypeOf2.default)(JoinRoomRequest)).call(this, _Base.Requests.JoinRoom));
                    if (typeof room === "string") _this._rName = room;
                    else if (typeof room === "number") _this._rId = room;
                    else if (room instanceof _Room.SFSRoom) {
                        _this._rId = room.id;
                        _this._rName = room.name
                    }
                    _this._password = password;
                    _this._roomIdToLeave = roomIdToLeave;
                    _this._asSpectator = asSpectator;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(JoinRoomRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        if (this._rId == null && this._rName == null) throw new _Exceptions.SFSValidationError("JoinRoomRequest Error", ["Missing Room id or name, please provide one of the two or an existing SFSRoom object"])
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        sfs._isJoining = true;
                        if (this._rId >= 0) this._reqObj.putInt(JoinRoomRequest.KEY_ROOM_ID, this._rId);
                        else if (this._rName != null) this._reqObj.putUtfString(JoinRoomRequest.KEY_ROOM_NAME, this._rName);
                        if (this._password != null) this._reqObj.putUtfString(JoinRoomRequest.KEY_PASS, this._password);
                        if (this._roomIdToLeave != null) this._reqObj.putInt(JoinRoomRequest.KEY_ROOM_TO_LEAVE, this._roomIdToLeave);
                        if (this._asSpectator) this._reqObj.putBool(JoinRoomRequest.KEY_AS_SPECTATOR, this._asSpectator)
                    }
                }]);
                return JoinRoomRequest
            }(_Base.BaseRequest);
            exports.JoinRoomRequest = JoinRoomRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        192: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.KickUserRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var KickUserRequest = function(_BaseRequest) {
                (0, _inherits3.default)(KickUserRequest, _BaseRequest);
                (0, _createClass3.default)(KickUserRequest, null, [{
                    key: "KEY_USER_ID",
                    get: function get() {
                        return "u"
                    }
                }, {
                    key: "KEY_MESSAGE",
                    get: function get() {
                        return "m"
                    }
                }, {
                    key: "KEY_DELAY",
                    get: function get() {
                        return "d"
                    }
                }]);

                function KickUserRequest(userId) {
                    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var delaySeconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
                    (0, _classCallCheck3.default)(this, KickUserRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (KickUserRequest.__proto__ || (0, _getPrototypeOf2.default)(KickUserRequest)).call(this, _Base.Requests.KickUser));
                    if (delaySeconds < 0) delaySeconds = 0;
                    _this._userId = userId;
                    _this._message = message;
                    _this._delay = delaySeconds;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(KickUserRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("KickUserRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putInt(KickUserRequest.KEY_USER_ID, this._userId);
                        this._reqObj.putInt(KickUserRequest.KEY_DELAY, this._delay);
                        if (this._message != null && this._message.length > 0) this._reqObj.putUtfString(KickUserRequest.KEY_MESSAGE, this._message)
                    }
                }]);
                return KickUserRequest
            }(_Base.BaseRequest);
            exports.KickUserRequest = KickUserRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        193: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.LeaveRoomRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var LeaveRoomRequest = function(_BaseRequest) {
                (0, _inherits3.default)(LeaveRoomRequest, _BaseRequest);
                (0, _createClass3.default)(LeaveRoomRequest, null, [{
                    key: "KEY_ROOM_ID",
                    get: function get() {
                        return "r"
                    }
                }]);

                function LeaveRoomRequest() {
                    var room = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    (0, _classCallCheck3.default)(this, LeaveRoomRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (LeaveRoomRequest.__proto__ || (0, _getPrototypeOf2.default)(LeaveRoomRequest)).call(this, _Base.Requests.LeaveRoom));
                    _this._room = room;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(LeaveRoomRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (sfs.getJoinedRooms().length < 1) errors.push("You are not joined in any Room");
                        if (this._room != null && !(this._room instanceof _Room.SFSRoom)) errors.push("Room must be an instance of SFSRoom class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("LeaveRoomRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        if (this._room != null) this._reqObj.putInt(LeaveRoomRequest.KEY_ROOM_ID, this._room.id)
                    }
                }]);
                return LeaveRoomRequest
            }(_Base.BaseRequest);
            exports.LeaveRoomRequest = LeaveRoomRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        194: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.LoginRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Data = _dereq_("../../entities/Data");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var LoginRequest = function(_BaseRequest) {
                (0, _inherits3.default)(LoginRequest, _BaseRequest);
                (0, _createClass3.default)(LoginRequest, null, [{
                    key: "KEY_ZONE_NAME",
                    get: function get() {
                        return "zn"
                    }
                }, {
                    key: "KEY_USER_NAME",
                    get: function get() {
                        return "un"
                    }
                }, {
                    key: "KEY_PASSWORD",
                    get: function get() {
                        return "pw"
                    }
                }, {
                    key: "KEY_PARAMS",
                    get: function get() {
                        return "p"
                    }
                }, {
                    key: "KEY_PRIVILEGE_ID",
                    get: function get() {
                        return "pi"
                    }
                }, {
                    key: "KEY_ID",
                    get: function get() {
                        return "id"
                    }
                }, {
                    key: "KEY_ROOMLIST",
                    get: function get() {
                        return "rl"
                    }
                }, {
                    key: "KEY_RECONNECTION_SECONDS",
                    get: function get() {
                        return "rs"
                    }
                }]);

                function LoginRequest() {
                    var userName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    var zoneName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                    (0, _classCallCheck3.default)(this, LoginRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (LoginRequest.__proto__ || (0, _getPrototypeOf2.default)(LoginRequest)).call(this, _Base.Requests.Login));
                    _this._userName = userName;
                    _this._password = password;
                    _this._params = params;
                    _this._zoneName = zoneName;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(LoginRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        if (sfs.mySelf != null) throw new _Exceptions.SFSValidationError("LoginRequest error", ["You are already logged in; logout before attempting a new login"]);
                        var errors = [];
                        var zone = sfs.config != null && sfs.config.zone != null ? sfs.config.zone : null;
                        if (this._zoneName != null) zone = this._zoneName;
                        if (zone == null || zone.length === 0) errors.push("Missing Zone name");
                        else this._zoneName = zone;
                        if (this._params != null && !(this._params instanceof _Data.SFSObject)) errors.push("Custom parameters must be passed in a SFSObject");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("LoginRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        if (this._userName == null) this._userName = "";
                        if (this._password == null) this._password = "";
                        this._reqObj.putUtfString(LoginRequest.KEY_ZONE_NAME, this._zoneName);
                        this._reqObj.putUtfString(LoginRequest.KEY_USER_NAME, this._userName);
                        this._reqObj.putUtfString(LoginRequest.KEY_PASSWORD, this._password.length > 0 ? (new MD5).hex_md5(sfs.sessionToken + this._password) : "");
                        if (this._params != null) this._reqObj.putSFSObject(LoginRequest.KEY_PARAMS, this._params)
                    }
                }]);
                return LoginRequest
            }(_Base.BaseRequest);
            exports.LoginRequest = LoginRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        195: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.LogoutRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var LogoutRequest = function(_BaseRequest) {
                (0, _inherits3.default)(LogoutRequest, _BaseRequest);
                (0, _createClass3.default)(LogoutRequest, null, [{
                    key: "KEY_ZONE_NAME",
                    get: function get() {
                        return "zn"
                    }
                }]);

                function LogoutRequest() {
                    (0, _classCallCheck3.default)(this, LogoutRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (LogoutRequest.__proto__ || (0, _getPrototypeOf2.default)(LogoutRequest)).call(this, _Base.Requests.Logout));
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(LogoutRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        if (sfs.mySelf == null) throw new _Exceptions.SFSValidationError("LogoutRequest error", ["You are not logged in"])
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {}
                }]);
                return LogoutRequest
            }(_Base.BaseRequest);
            exports.LogoutRequest = LogoutRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        196: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.AdminMessageRequest = exports.ModeratorMessageRequest = exports.ObjectMessageRequest = exports.PrivateMessageRequest = exports.PublicMessageRequest = exports.GenericMessageRequest = exports.GenericMessageType = undefined;
            var _from = _dereq_("babel-runtime/core-js/array/from");
            var _from2 = _interopRequireDefault(_from);
            var _set = _dereq_("babel-runtime/core-js/set");
            var _set2 = _interopRequireDefault(_set);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Settings = _dereq_("../Settings");
            var _Data = _dereq_("../../entities/Data");
            var _Room = _dereq_("../../entities/objects/Room");
            var _User = _dereq_("../../entities/objects/User");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var GenericMessageType = (0, _freeze2.default)({
                PUBLIC_MSG: 0,
                PRIVATE_MSG: 1,
                MODERATOR_MSG: 2,
                ADMING_MSG: 3,
                OBJECT_MSG: 4,
                BUDDY_MSG: 5
            });
            var GenericMessageRequest = function(_BaseRequest) {
                (0, _inherits3.default)(GenericMessageRequest, _BaseRequest);
                (0, _createClass3.default)(GenericMessageRequest, null, [{
                    key: "KEY_ROOM_ID",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_USER_ID",
                    get: function get() {
                        return "u"
                    }
                }, {
                    key: "KEY_MESSAGE",
                    get: function get() {
                        return "m"
                    }
                }, {
                    key: "KEY_MESSAGE_TYPE",
                    get: function get() {
                        return "t"
                    }
                }, {
                    key: "KEY_RECIPIENT",
                    get: function get() {
                        return "rc"
                    }
                }, {
                    key: "KEY_RECIPIENT_MODE",
                    get: function get() {
                        return "rm"
                    }
                }, {
                    key: "KEY_XTRA_PARAMS",
                    get: function get() {
                        return "p"
                    }
                }, {
                    key: "KEY_SENDER_DATA",
                    get: function get() {
                        return "sd"
                    }
                }]);

                function GenericMessageRequest() {
                    (0, _classCallCheck3.default)(this, GenericMessageRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (GenericMessageRequest.__proto__ || (0, _getPrototypeOf2.default)(GenericMessageRequest)).call(this, _Base.Requests.GenericMessage));
                    _this._type = -1;
                    _this._room = null;
                    _this._user = null;
                    _this._message = null;
                    _this._params = null;
                    _this._recipient = null;
                    _this._sendMode = -1;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(GenericMessageRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        if (this._type < 0) throw new _Exceptions.SFSValidationError("GenericMessageRequest Error", ["Unsupported message type: " + this._type]);
                        var errors = [];
                        switch (this._type) {
                            case GenericMessageType.PUBLIC_MSG:
                                this._validatePublicMessage(sfs, errors);
                                break;
                            case GenericMessageType.PRIVATE_MSG:
                                this._validatePrivateMessage(sfs, errors);
                                break;
                            case GenericMessageType.OBJECT_MSG:
                                this._validateObjectMessage(sfs, errors);
                                break;
                            case GenericMessageType.BUDDY_MSG:
                                this._validateBuddyMessage(sfs, errors);
                                break;
                            default:
                                this._validateSuperUserMessage(sfs, errors)
                        }
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("GenericMessageRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putByte(GenericMessageRequest.KEY_MESSAGE_TYPE, this._type);
                        switch (this._type) {
                            case GenericMessageType.PUBLIC_MSG:
                                this._executePublicMessage(sfs);
                                break;
                            case GenericMessageType.PRIVATE_MSG:
                                this._executePrivateMessage(sfs);
                                break;
                            case GenericMessageType.OBJECT_MSG:
                                this._executeObjectMessage(sfs);
                                break;
                            case GenericMessageType.BUDDY_MSG:
                                this._executeBuddyMessage(sfs);
                                break;
                            default:
                                this._executeSuperUserMessage(sfs)
                        }
                    }
                }, {
                    key: "_validatePublicMessage",
                    value: function _validatePublicMessage(sfs, errors) {
                        if (this._message == null || this._message.length === 0) errors.push("Public message is empty");
                        if (this._room == null) this._room = sfs.lastJoinedRoom;
                        if (this._room == null) errors.push("You must be joined in a Room to send a message");
                        else {
                            if (!(this._room instanceof _Room.SFSRoom)) errors.push("Target Room must be an instance of SFSRoom class");
                            else {
                                if (sfs.getJoinedRooms().indexOf(this._room) < 0) errors.push("You are not joined in the target Room: " + this._room)
                            }
                        }
                        if (this._params != null && !(this._params instanceof _Data.SFSObject)) errors.push("Message parameters must be set in a SFSObject class instance")
                    }
                }, {
                    key: "_validatePrivateMessage",
                    value: function _validatePrivateMessage(sfs, errors) {
                        if (this._message == null || this._message.length === 0) errors.push("Private message is empty");
                        if (this._recipient < 0) errors.push("Invalid recipient id: " + this._recipient);
                        if (this._params != null && !(this._params instanceof _Data.SFSObject)) errors.push("Message parameters must be set in a SFSObject class instance")
                    }
                }, {
                    key: "_validateObjectMessage",
                    value: function _validateObjectMessage(sfs, errors) {
                        if (this._params == null) errors.push("Object message is null");
                        else {
                            if (!(this._params instanceof _Data.SFSObject)) errors.push("Message object must be an instance of SFSObject class")
                        }
                        if (this._room == null) this._room = sfs.lastJoinedRoom;
                        if (this._room == null) errors.push("You must be joined in a Room to send a message");
                        else {
                            if (!(this._room instanceof _Room.SFSRoom)) errors.push("Target Room must be an instance of SFSRoom class");
                            else {
                                if (sfs.getJoinedRooms().indexOf(this._room) < 0) errors.push("You are not joined in the target Room: " + this._room)
                            }
                        }
                        if (this._recipient != null) {
                            if (!(this._recipient instanceof Array)) errors.push("Message recipients must be passed in an array");
                            else {
                                if (!this._recipient.every(function(item) {
                                        return item instanceof _User.SFSUser
                                    })) errors.push("Each message recipient must be an instance of SFSUser class")
                            }
                            if (this._recipient.length > this._room.capacity) errors.push("The number of recipients is bigger than the target Room capacity: " + this._recipient.length)
                        }
                    }
                }, {
                    key: "_validateBuddyMessage",
                    value: function _validateBuddyMessage(sfs, errors) {
                        if (!sfs.buddyManager.isInited) errors.push("Buddy List not yet initialized; please send an InitBuddyRequest first");
                        if (sfs.buddyManager.myOnlineState === false) errors.push("Can't send messages while you are offline in the Buddy List system");
                        if (this._message == null || this._message.length === 0) errors.push("Buddy message is empty");
                        if (this._recipient < 0) errors.push("Recipient is offline or not in your Buddy List");
                        if (this._params != null && !(this._params instanceof _Data.SFSObject)) errors.push("Message parameters must be set in a SFSObject class instance")
                    }
                }, {
                    key: "_validateSuperUserMessage",
                    value: function _validateSuperUserMessage(sfs, errors) {
                        if (this._message == null || this._message.length === 0) errors.push("Moderator message is empty");
                        if (this._params != null && !(this._params instanceof _Data.SFSObject)) errors.push("Message parameters must be set in a SFSObject class instance");
                        switch (this._sendMode) {
                            case _Settings.MessageRecipientMode.TO_USER:
                                if (!(this._recipient instanceof _User.SFSUser)) errors.push("Recipient must be an instance of SFSUser class");
                                break;
                            case _Settings.MessageRecipientMode.TO_ROOM:
                                if (!(this._recipient instanceof _Room.SFSRoom)) errors.push("Recipient must be an instance of SFSRoom class");
                                break;
                            case _Settings.MessageRecipientMode.TO_GROUP:
                                if (!(typeof this._recipient === "string")) errors.push("Recipient must be a string (the groupId)");
                                break
                        }
                    }
                }, {
                    key: "_executePublicMessage",
                    value: function _executePublicMessage(sfs) {
                        this._reqObj.putInt(GenericMessageRequest.KEY_ROOM_ID, this._room.id);
                        this._reqObj.putInt(GenericMessageRequest.KEY_USER_ID, sfs.mySelf.id);
                        this._reqObj.putUtfString(GenericMessageRequest.KEY_MESSAGE, this._message);
                        if (this._params != null) this._reqObj.putSFSObject(GenericMessageRequest.KEY_XTRA_PARAMS, this._params)
                    }
                }, {
                    key: "_executePrivateMessage",
                    value: function _executePrivateMessage(sfs) {
                        this._reqObj.putInt(GenericMessageRequest.KEY_RECIPIENT, this._recipient);
                        this._reqObj.putUtfString(GenericMessageRequest.KEY_MESSAGE, this._message);
                        if (this._params != null) this._reqObj.putSFSObject(GenericMessageRequest.KEY_XTRA_PARAMS, this._params)
                    }
                }, {
                    key: "_executeBuddyMessage",
                    value: function _executeBuddyMessage(sfs) {
                        this._reqObj.putInt(GenericMessageRequest.KEY_RECIPIENT, this._recipient);
                        this._reqObj.putUtfString(GenericMessageRequest.KEY_MESSAGE, this._message);
                        if (this._params != null) this._reqObj.putSFSObject(GenericMessageRequest.KEY_XTRA_PARAMS, this._params)
                    }
                }, {
                    key: "_executeSuperUserMessage",
                    value: function _executeSuperUserMessage(sfs) {
                        this._reqObj.putUtfString(GenericMessageRequest.KEY_MESSAGE, this._message);
                        if (this._params != null) this._reqObj.putSFSObject(GenericMessageRequest.KEY_XTRA_PARAMS, this._params);
                        this._reqObj.putInt(GenericMessageRequest.KEY_RECIPIENT_MODE, this._sendMode);
                        switch (this._sendMode) {
                            case _Settings.MessageRecipientMode.TO_USER:
                                this._reqObj.putInt(GenericMessageRequest.KEY_RECIPIENT, this._recipient.id);
                                break;
                            case _Settings.MessageRecipientMode.TO_ROOM:
                                this._reqObj.putInt(GenericMessageRequest.KEY_RECIPIENT, this._recipient.id);
                                break;
                            case _Settings.MessageRecipientMode.TO_GROUP:
                                this._reqObj.putUtfString(GenericMessageRequest.KEY_RECIPIENT, this._recipient);
                                break
                        }
                    }
                }, {
                    key: "_executeObjectMessage",
                    value: function _executeObjectMessage(sfs) {
                        this._reqObj.putInt(GenericMessageRequest.KEY_ROOM_ID, this._room.id);
                        this._reqObj.putSFSObject(GenericMessageRequest.KEY_XTRA_PARAMS, this._params);
                        var recipients = new _set2.default;
                        if (this._recipient != null) {
                            for (var user in this._recipient) {
                                recipients.add(user.id)
                            }
                        }
                        if (recipients.size > 0) this._reqObj.putIntArray(GenericMessageRequest.KEY_RECIPIENT, (0, _from2.default)(recipients))
                    }
                }]);
                return GenericMessageRequest
            }(_Base.BaseRequest);
            var ObjectMessageRequest = function(_GenericMessageReques) {
                (0, _inherits3.default)(ObjectMessageRequest, _GenericMessageReques);

                function ObjectMessageRequest(object) {
                    var targetRoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var recipients = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, ObjectMessageRequest);
                    var _this2 = (0, _possibleConstructorReturn3.default)(this, (ObjectMessageRequest.__proto__ || (0, _getPrototypeOf2.default)(ObjectMessageRequest)).call(this));
                    _this2._type = GenericMessageType.OBJECT_MSG;
                    _this2._params = object;
                    _this2._room = targetRoom;
                    _this2._recipient = recipients;
                    (0, _seal2.default)(_this2);
                    return _this2
                }
                return ObjectMessageRequest
            }(GenericMessageRequest);
            var PublicMessageRequest = function(_GenericMessageReques2) {
                (0, _inherits3.default)(PublicMessageRequest, _GenericMessageReques2);

                function PublicMessageRequest(message) {
                    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var targetRoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, PublicMessageRequest);
                    var _this3 = (0, _possibleConstructorReturn3.default)(this, (PublicMessageRequest.__proto__ || (0, _getPrototypeOf2.default)(PublicMessageRequest)).call(this));
                    _this3._type = GenericMessageType.PUBLIC_MSG;
                    _this3._message = message;
                    _this3._room = targetRoom;
                    _this3._params = params;
                    (0, _seal2.default)(_this3);
                    return _this3
                }
                return PublicMessageRequest
            }(GenericMessageRequest);
            var PrivateMessageRequest = function(_GenericMessageReques3) {
                (0, _inherits3.default)(PrivateMessageRequest, _GenericMessageReques3);

                function PrivateMessageRequest(message, recipientId) {
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, PrivateMessageRequest);
                    var _this4 = (0, _possibleConstructorReturn3.default)(this, (PrivateMessageRequest.__proto__ || (0, _getPrototypeOf2.default)(PrivateMessageRequest)).call(this));
                    _this4._type = GenericMessageType.PRIVATE_MSG;
                    _this4._message = message;
                    _this4._recipient = recipientId;
                    _this4._params = params;
                    (0, _seal2.default)(_this4);
                    return _this4
                }
                return PrivateMessageRequest
            }(GenericMessageRequest);
            var ModeratorMessageRequest = function(_GenericMessageReques4) {
                (0, _inherits3.default)(ModeratorMessageRequest, _GenericMessageReques4);

                function ModeratorMessageRequest(message, recipientMode) {
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, ModeratorMessageRequest);
                    var _this5 = (0, _possibleConstructorReturn3.default)(this, (ModeratorMessageRequest.__proto__ || (0, _getPrototypeOf2.default)(ModeratorMessageRequest)).call(this));
                    if (recipientMode == null) throw new _Exceptions.SFSError("Recipient mode cannot be null");
                    if (!(recipientMode instanceof _Settings.MessageRecipientMode)) throw new _Exceptions.SFSError("Recipient mode must be an instance of MessageRecipientMode class");
                    _this5._type = GenericMessageType.MODERATOR_MSG;
                    _this5._message = message;
                    _this5._params = params;
                    _this5._recipient = recipientMode.target;
                    _this5._sendMode = recipientMode.mode;
                    (0, _seal2.default)(_this5);
                    return _this5
                }
                return ModeratorMessageRequest
            }(GenericMessageRequest);
            var AdminMessageRequest = function(_GenericMessageReques5) {
                (0, _inherits3.default)(AdminMessageRequest, _GenericMessageReques5);

                function AdminMessageRequest(message, recipientMode) {
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    (0, _classCallCheck3.default)(this, AdminMessageRequest);
                    var _this6 = (0, _possibleConstructorReturn3.default)(this, (AdminMessageRequest.__proto__ || (0, _getPrototypeOf2.default)(AdminMessageRequest)).call(this));
                    if (recipientMode == null) throw new _Exceptions.SFSError("Recipient mode cannot be null");
                    if (!(recipientMode instanceof _Settings.MessageRecipientMode)) throw new _Exceptions.SFSError("Recipient mode must an instance of MessageRecipientMode class");
                    _this6._type = GenericMessageType.ADMING_MSG;
                    _this6._message = message;
                    _this6._params = params;
                    _this6._recipient = recipientMode.target;
                    _this6._sendMode = recipientMode.mode;
                    (0, _seal2.default)(_this6);
                    return _this6
                }
                return AdminMessageRequest
            }(GenericMessageRequest);
            exports.GenericMessageType = GenericMessageType;
            exports.GenericMessageRequest = GenericMessageRequest;
            exports.PublicMessageRequest = PublicMessageRequest;
            exports.PrivateMessageRequest = PrivateMessageRequest;
            exports.ObjectMessageRequest = ObjectMessageRequest;
            exports.ModeratorMessageRequest = ModeratorMessageRequest;
            exports.AdminMessageRequest = AdminMessageRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/objects/Room": 156,
            "../../entities/objects/User": 157,
            "../Base": 166,
            "../Settings": 167,
            "babel-runtime/core-js/array/from": 1,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/core-js/set": 15,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        197: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.PingPongRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var PingPongRequest = function(_BaseRequest) {
                (0, _inherits3.default)(PingPongRequest, _BaseRequest);

                function PingPongRequest() {
                    (0, _classCallCheck3.default)(this, PingPongRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (PingPongRequest.__proto__ || (0, _getPrototypeOf2.default)(PingPongRequest)).call(this, _Base.Requests.PingPong));
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(PingPongRequest, [{
                    key: "validate",
                    value: function validate(sfs) {}
                }, {
                    key: "execute",
                    value: function execute(sfs) {}
                }]);
                return PingPongRequest
            }(_Base.BaseRequest);
            exports.PingPongRequest = PingPongRequest
        }, {
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        198: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.PlayerToSpectatorRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var PlayerToSpectatorRequest = function(_BaseRequest) {
                (0, _inherits3.default)(PlayerToSpectatorRequest, _BaseRequest);
                (0, _createClass3.default)(PlayerToSpectatorRequest, null, [{
                    key: "KEY_ROOM_ID",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_USER_ID",
                    get: function get() {
                        return "u"
                    }
                }]);

                function PlayerToSpectatorRequest() {
                    var targetRoom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    (0, _classCallCheck3.default)(this, PlayerToSpectatorRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (PlayerToSpectatorRequest.__proto__ || (0, _getPrototypeOf2.default)(PlayerToSpectatorRequest)).call(this, _Base.Requests.PlayerToSpectator));
                    _this._room = targetRoom;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(PlayerToSpectatorRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (sfs.getJoinedRooms().length < 1) errors.push("You are not joined in any Room");
                        if (this._room != null && !(this._room instanceof _Room.SFSRoom)) errors.push("Target Room must be an instance of SFSRoom class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("PlayerToSpectatorRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        if (this._room == null) this._room = sfs.lastJoinedRoom;
                        this._reqObj.putInt(PlayerToSpectatorRequest.KEY_ROOM_ID, this._room.id)
                    }
                }]);
                return PlayerToSpectatorRequest
            }(_Base.BaseRequest);
            exports.PlayerToSpectatorRequest = PlayerToSpectatorRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        199: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SetRoomVariablesRequest = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Data = _dereq_("../../entities/Data");
            var _Room = _dereq_("../../entities/objects/Room");
            var _RoomVariable = _dereq_("../../entities/variables/RoomVariable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SetRoomVariablesRequest = function(_BaseRequest) {
                (0, _inherits3.default)(SetRoomVariablesRequest, _BaseRequest);
                (0, _createClass3.default)(SetRoomVariablesRequest, null, [{
                    key: "KEY_VAR_ROOM",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_VAR_LIST",
                    get: function get() {
                        return "vl"
                    }
                }]);

                function SetRoomVariablesRequest(roomVariables) {
                    var room = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    (0, _classCallCheck3.default)(this, SetRoomVariablesRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SetRoomVariablesRequest.__proto__ || (0, _getPrototypeOf2.default)(SetRoomVariablesRequest)).call(this, _Base.Requests.SetRoomVariables));
                    _this._roomVariables = roomVariables;
                    _this._room = room;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SetRoomVariablesRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._room == null) this._room = sfs.lastJoinedRoom;
                        if (this._room == null) errors.push("You must be joined in a Room to send a message");
                        else {
                            if (!(this._room instanceof _Room.SFSRoom)) errors.push("Target Room must be an instance of SFSRoom class");
                            else {
                                if (sfs.getJoinedRooms().indexOf(this._room) < 0) errors.push("You are not joined in the target Room: " + this._room)
                            }
                        }
                        if (this._roomVariables == null) errors.push("No Room Variables specified");
                        else {
                            if (!(this._roomVariables instanceof Array)) errors.push("Room Variables must be passed in an array");
                            else {
                                if (this._roomVariables.length === 0) errors.push("No Room Variables specified");
                                else {
                                    if (!this._roomVariables.every(function(item) {
                                            return item instanceof _RoomVariable.SFSRoomVariable
                                        })) errors.push("Room Variables must be passed as instances of SFSRoomVariable class")
                                }
                            }
                        }
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("SetRoomVariablesRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        var varList = new _Data.SFSArray;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(this._roomVariables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var roomVar = _step.value;
                                varList.addSFSArray(roomVar.toSFSArray())
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                        this._reqObj.putSFSArray(SetRoomVariablesRequest.KEY_VAR_LIST, varList);
                        this._reqObj.putInt(SetRoomVariablesRequest.KEY_VAR_ROOM, this._room.id)
                    }
                }]);
                return SetRoomVariablesRequest
            }(_Base.BaseRequest);
            exports.SetRoomVariablesRequest = SetRoomVariablesRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/objects/Room": 156,
            "../../entities/variables/RoomVariable": 160,
            "../Base": 166,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        200: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SetUserVariablesRequest = undefined;
            var _getIterator2 = _dereq_("babel-runtime/core-js/get-iterator");
            var _getIterator3 = _interopRequireDefault(_getIterator2);
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Data = _dereq_("../../entities/Data");
            var _UserVariable = _dereq_("../../entities/variables/UserVariable");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SetUserVariablesRequest = function(_BaseRequest) {
                (0, _inherits3.default)(SetUserVariablesRequest, _BaseRequest);
                (0, _createClass3.default)(SetUserVariablesRequest, null, [{
                    key: "KEY_USER",
                    get: function get() {
                        return "u"
                    }
                }, {
                    key: "KEY_VAR_LIST",
                    get: function get() {
                        return "vl"
                    }
                }]);

                function SetUserVariablesRequest(userVariables) {
                    (0, _classCallCheck3.default)(this, SetUserVariablesRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SetUserVariablesRequest.__proto__ || (0, _getPrototypeOf2.default)(SetUserVariablesRequest)).call(this, _Base.Requests.SetUserVariables));
                    _this._userVariables = userVariables;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SetUserVariablesRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._userVariables == null) errors.push("No User Variables specified");
                        else {
                            if (!(this._userVariables instanceof Array)) errors.push("User Variables must be passed in an array");
                            else {
                                if (this._userVariables.length === 0) errors.push("No User Variables specified");
                                else {
                                    if (!this._userVariables.every(function(item) {
                                            return item instanceof _UserVariable.SFSUserVariable
                                        })) errors.push("User Variables must be passed as instances of SFSUserVariable class")
                                }
                            }
                        }
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("SetUserVariablesRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        var varList = new _Data.SFSArray;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = (0, _getIterator3.default)(this._userVariables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var userVar = _step.value;
                                varList.addSFSArray(userVar.toSFSArray())
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                        this._reqObj.putSFSArray(SetUserVariablesRequest.KEY_VAR_LIST, varList)
                    }
                }]);
                return SetUserVariablesRequest
            }(_Base.BaseRequest);
            exports.SetUserVariablesRequest = SetUserVariablesRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/Data": 149,
            "../../entities/variables/UserVariable": 161,
            "../Base": 166,
            "babel-runtime/core-js/get-iterator": 2,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        201: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SpectatorToPlayerRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");
            var _Room = _dereq_("../../entities/objects/Room");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SpectatorToPlayerRequest = function(_BaseRequest) {
                (0, _inherits3.default)(SpectatorToPlayerRequest, _BaseRequest);
                (0, _createClass3.default)(SpectatorToPlayerRequest, null, [{
                    key: "KEY_ROOM_ID",
                    get: function get() {
                        return "r"
                    }
                }, {
                    key: "KEY_USER_ID",
                    get: function get() {
                        return "u"
                    }
                }, {
                    key: "KEY_PLAYER_ID",
                    get: function get() {
                        return "p"
                    }
                }]);

                function SpectatorToPlayerRequest() {
                    var targetRoom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    (0, _classCallCheck3.default)(this, SpectatorToPlayerRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SpectatorToPlayerRequest.__proto__ || (0, _getPrototypeOf2.default)(SpectatorToPlayerRequest)).call(this, _Base.Requests.SpectatorToPlayer));
                    _this._room = targetRoom;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SpectatorToPlayerRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (sfs.getJoinedRooms().length < 1) errors.push("You are not joined in any Room");
                        if (this._room != null && !(this._room instanceof _Room.SFSRoom)) errors.push("Target Room must be an instance of SFSRoom class");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("SpectatorToPlayerRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        if (this._room == null) this._room = sfs.lastJoinedRoom;
                        this._reqObj.putInt(SpectatorToPlayerRequest.KEY_ROOM_ID, this._room.id)
                    }
                }]);
                return SpectatorToPlayerRequest
            }(_Base.BaseRequest);
            exports.SpectatorToPlayerRequest = SpectatorToPlayerRequest
        }, {
            "../../core/Exceptions": 147,
            "../../entities/objects/Room": 156,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        202: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SubscribeRoomGroupRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SubscribeRoomGroupRequest = function(_BaseRequest) {
                (0, _inherits3.default)(SubscribeRoomGroupRequest, _BaseRequest);
                (0, _createClass3.default)(SubscribeRoomGroupRequest, null, [{
                    key: "KEY_GROUP_ID",
                    get: function get() {
                        return "g"
                    }
                }, {
                    key: "KEY_ROOM_LIST",
                    get: function get() {
                        return "rl"
                    }
                }]);

                function SubscribeRoomGroupRequest(groupId) {
                    (0, _classCallCheck3.default)(this, SubscribeRoomGroupRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (SubscribeRoomGroupRequest.__proto__ || (0, _getPrototypeOf2.default)(SubscribeRoomGroupRequest)).call(this, _Base.Requests.SubscribeRoomGroup));
                    _this._groupId = groupId;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(SubscribeRoomGroupRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._groupId == null || this._groupId.length === 0) errors.push("Invalid group id passed; must be a string with at least one character");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("SubscribeGroupRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putUtfString(SubscribeRoomGroupRequest.KEY_GROUP_ID, this._groupId)
                    }
                }]);
                return SubscribeRoomGroupRequest
            }(_Base.BaseRequest);
            exports.SubscribeRoomGroupRequest = SubscribeRoomGroupRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        203: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.UnsubscribeRoomGroupRequest = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _Base = _dereq_("../Base");
            var _Exceptions = _dereq_("../../core/Exceptions");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var UnsubscribeRoomGroupRequest = function(_BaseRequest) {
                (0, _inherits3.default)(UnsubscribeRoomGroupRequest, _BaseRequest);
                (0, _createClass3.default)(UnsubscribeRoomGroupRequest, null, [{
                    key: "KEY_GROUP_ID",
                    get: function get() {
                        return "g"
                    }
                }]);

                function UnsubscribeRoomGroupRequest(groupId) {
                    (0, _classCallCheck3.default)(this, UnsubscribeRoomGroupRequest);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (UnsubscribeRoomGroupRequest.__proto__ || (0, _getPrototypeOf2.default)(UnsubscribeRoomGroupRequest)).call(this, _Base.Requests.UnsubscribeRoomGroup));
                    _this._groupId = groupId;
                    (0, _seal2.default)(_this);
                    return _this
                }(0, _createClass3.default)(UnsubscribeRoomGroupRequest, [{
                    key: "validate",
                    value: function validate(sfs) {
                        var errors = [];
                        if (this._groupId == null || this._groupId.length === 0) errors.push("Invalid group id passed; must be a string with at least one character");
                        if (errors.length > 0) throw new _Exceptions.SFSValidationError("UnsubscribeGroupRequest Error", errors)
                    }
                }, {
                    key: "execute",
                    value: function execute(sfs) {
                        this._reqObj.putUtfString(UnsubscribeRoomGroupRequest.KEY_GROUP_ID, this._groupId)
                    }
                }]);
                return UnsubscribeRoomGroupRequest
            }(_Base.BaseRequest);
            exports.UnsubscribeRoomGroupRequest = UnsubscribeRoomGroupRequest
        }, {
            "../../core/Exceptions": 147,
            "../Base": 166,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        204: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SFSErrorCodes = undefined;
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var SFSErrorCodes = function() {
                function SFSErrorCodes() {
                    (0, _classCallCheck3.default)(this, SFSErrorCodes);
                    throw "Class SFSErrorCodes cannot be instantiated. Please check the documentation for more details on its usage"
                }(0, _createClass3.default)(SFSErrorCodes, null, [{
                    key: "setErrorMessage",
                    value: function setErrorMessage(code, message) {
                        this._errorsByCode[code] = message
                    }
                }, {
                    key: "getErrorMessage",
                    value: function getErrorMessage(code, params) {
                        return this.stringFormat(this._errorsByCode[code], params)
                    }
                }, {
                    key: "stringFormat",
                    value: function stringFormat(ss, params) {
                        if (ss == null) return "";
                        if (params != null) {
                            for (var j = 0; j < params.length; j++) {
                                var src = "{" + j + "}";
                                ss = ss.replace(src, params[j])
                            }
                        }
                        return ss
                    }
                }, {
                    key: "_errorsByCode",
                    get: function get() {
                        return ["Client API version is obsolete: {0}; required version: {1}", "Requested Zone {0} does not exist", "User name {0} is not recognized", "Wrong password for user {0}", "User {0} is banned", "Zone {0} is full", "User {0} is already logged in Zone {1}", "The server is full", "Zone {0} is currently inactive", "User name {0} contains bad words; filtered: {1}", "Guest users not allowed in Zone {0}", "IP address {0} is banned", "A Room with the same name already exists: {0}", "Requested Group is not available - Room: {0}; Group: {1}", "Bad Room name length -  Min: {0}; max: {1}; passed name length: {2}", "Room name contains bad words: {0}", "Zone is full; can't add Rooms anymore", "You have exceeded the number of Rooms that you can create per session: {0}", "Room creation failed, wrong parameter: {0}", "User {0} already joined in Room", "Room {0} is full", "Wrong password for Room {0}", "Requested Room does not exist", "Room {0} is locked", "Group {0} is already subscribed", "Group {0} does not exist", "Group {0} is not subscribed", "Group {0} does not exist", "{0}", "Room permission error; Room {0} cannot be renamed", "Room permission error; Room {0} cannot change password state", "Room permission error; Room {0} cannot change capacity", "Switch user error; no player slots available in Room {0}", "Switch user error; no spectator slots available in Room {0}", "Switch user error; Room {0} is not a Game Room", "Switch user error; you are not joined in Room {0}", "Buddy Manager initialization error, could not load buddy list: {0}", "Buddy Manager error, your buddy list is full; size is {0}", "Buddy Manager error, was not able to block buddy {0} because offline", "Buddy Manager error, you are attempting to set too many Buddy Variables; limit is {0}", "Game {0} access denied, user does not match access criteria", "QuickJoinGame action failed: no matching Rooms were found", "Your previous invitation reply was invalid or arrived too late"]
                    }
                }]);
                return SFSErrorCodes
            }();
            exports.SFSErrorCodes = SFSErrorCodes
        }, {
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        205: [function(_dereq_, module, exports) {
            "use strict";
            var _isFinite = _dereq_("babel-runtime/core-js/number/is-finite");
            var _isFinite2 = _interopRequireDefault(_isFinite);
            var _isSafeInteger = _dereq_("babel-runtime/core-js/number/is-safe-integer");
            var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);
            var _isInteger = _dereq_("babel-runtime/core-js/number/is-integer");
            var _isInteger2 = _interopRequireDefault(_isInteger);
            var _maxSafeInteger = _dereq_("babel-runtime/core-js/number/max-safe-integer");
            var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            if (!_maxSafeInteger2.default) Number.MAX_SAFE_INTEGER = 9007199254740991;
            Number.isInteger = _isInteger2.default || function(value) {
                return typeof value === "number" && isFinite(value) && Math.floor(value) === value
            };
            Number.isSafeInteger = _isSafeInteger2.default || function(value) {
                return (0, _isInteger2.default)(value) && Math.abs(value) <= _maxSafeInteger2.default
            };
            Number.isFinite = _isFinite2.default || function(value) {
                return typeof value === "number" && isFinite(value)
            };
            if (!Array.prototype.find) {
                Object.defineProperty(Array.prototype, "find", {
                    value: function value(predicate) {
                        "use strict";
                        if (this == null) {
                            throw new TypeError("Array.prototype.find called on null or undefined")
                        }
                        if (typeof predicate !== "function") {
                            throw new TypeError("predicate must be a function")
                        }
                        var list = Object(this);
                        var length = list.length >>> 0;
                        var thisArg = arguments[1];
                        for (var i = 0; i !== length; i++) {
                            if (predicate.call(thisArg, this[i], i, list)) {
                                return this[i]
                            }
                        }
                        return undefined
                    }
                })
            }
        }, {
            "babel-runtime/core-js/number/is-finite": 4,
            "babel-runtime/core-js/number/is-integer": 5,
            "babel-runtime/core-js/number/is-safe-integer": 6,
            "babel-runtime/core-js/number/max-safe-integer": 7
        }],
        206: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.LoggerEvent = exports.Logger = exports.LogLevel = undefined;
            var _seal = _dereq_("babel-runtime/core-js/object/seal");
            var _seal2 = _interopRequireDefault(_seal);
            var _isInteger = _dereq_("babel-runtime/core-js/number/is-integer");
            var _isInteger2 = _interopRequireDefault(_isInteger);
            var _getPrototypeOf = _dereq_("babel-runtime/core-js/object/get-prototype-of");
            var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _possibleConstructorReturn2 = _dereq_("babel-runtime/helpers/possibleConstructorReturn");
            var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
            var _inherits2 = _dereq_("babel-runtime/helpers/inherits");
            var _inherits3 = _interopRequireDefault(_inherits2);
            var _symbol = _dereq_("babel-runtime/core-js/symbol");
            var _symbol2 = _interopRequireDefault(_symbol);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);
            var _Events = _dereq_("../core/Events");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var LogLevel = (0, _freeze2.default)({
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                toString: function toString(level) {
                    if (level === this.DEBUG) return "DEBUG";
                    else if (level === this.INFO) return "INFO";
                    else if (level === this.WARN) return "WARN";
                    else if (level === this.ERROR) return "ERROR"
                }
            });
            var LoggerEvent = (0, _freeze2.default)({
                DEBUG: "debug",
                INFO: "info",
                WARNING: "warn",
                ERROR: "error"
            });
            var singleton = (0, _symbol2.default)();
            var singletonEnforcer = (0, _symbol2.default)();
            var Logger = function(_EventDispatcher) {
                (0, _inherits3.default)(Logger, _EventDispatcher);

                function Logger(enforcer) {
                    (0, _classCallCheck3.default)(this, Logger);
                    var _this = (0, _possibleConstructorReturn3.default)(this, (Logger.__proto__ || (0, _getPrototypeOf2.default)(Logger)).call(this));
                    if (enforcer !== singletonEnforcer) throw "Logger is a singleton class; you can't instantiate it";
                    _this._enableConsoleOutput = console !== undefined;
                    _this._enableEventDispatching = false;
                    _this._level = LogLevel.INFO;
                    _this._useBasicLog = true;
                    if (console !== undefined) _this._useBasicLog = typeof console.debug !== "function" || typeof console.info !== "function" || typeof console.warn !== "function" || typeof console.error !== "function";
                    return _this
                }(0, _createClass3.default)(Logger, [{
                    key: "log",
                    value: function log(level) {
                        var _this2 = this;
                        for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            message[_key - 1] = arguments[_key]
                        }
                        if (this.isValidLevel(level) && level >= this._level) {
                            if (this._enableConsoleOutput) {
                                (function() {
                                    var PREFIX = "SFS2X";
                                    var printLog = function printLog(lv, fn) {
                                        if (_this2._useBasicLog) fn = function fn(msg) {
                                            console.log(msg)
                                        };
                                        fn("[ " + PREFIX + " | " + lv + " ] " + message.join(" "))
                                    };
                                    switch (level) {
                                        case LogLevel.DEBUG:
                                            printLog("DEBUG", function(msg) {
                                                console.debug(msg)
                                            });
                                            break;
                                        case LogLevel.INFO:
                                            printLog("INFO", function(msg) {
                                                console.info(msg)
                                            });
                                            break;
                                        case LogLevel.WARN:
                                            printLog("WARN", function(msg) {
                                                console.warn(msg)
                                            });
                                            break;
                                        case LogLevel.ERROR:
                                            printLog("ERROR", function(msg) {
                                                console.error(msg)
                                            });
                                            break
                                    }
                                })()
                            }
                            if (this._enableEventDispatching) {
                                this.dispatchEvent(LogLevel.toString(level).toLowerCase(), {
                                    message: message.join(" ")
                                })
                            }
                        }
                    }
                }, {
                    key: "debug",
                    value: function debug() {
                        for (var _len2 = arguments.length, message = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                            message[_key2] = arguments[_key2]
                        }
                        this.log(LogLevel.DEBUG, message)
                    }
                }, {
                    key: "info",
                    value: function info() {
                        for (var _len3 = arguments.length, message = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                            message[_key3] = arguments[_key3]
                        }
                        this.log(LogLevel.INFO, message)
                    }
                }, {
                    key: "warn",
                    value: function warn() {
                        for (var _len4 = arguments.length, message = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                            message[_key4] = arguments[_key4]
                        }
                        this.log(LogLevel.WARN, message)
                    }
                }, {
                    key: "error",
                    value: function error() {
                        for (var _len5 = arguments.length, message = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                            message[_key5] = arguments[_key5]
                        }
                        this.log(LogLevel.ERROR, message)
                    }
                }, {
                    key: "isValidLevel",
                    value: function isValidLevel(level) {
                        if (!(0, _isInteger2.default)(level) || level < LogLevel.DEBUG || level > LogLevel.ERROR) throw "Logging level must be set to a valid value (see LogLevel class)";
                        return true
                    }
                }, {
                    key: "level",
                    set: function set(value) {
                        if (this.isValidLevel(value)) this._level = value
                    },
                    get: function get() {
                        return this._level
                    }
                }, {
                    key: "enableConsoleOutput",
                    set: function set(value) {
                        if (console !== undefined) this._enableConsoleOutput = value
                    },
                    get: function get() {
                        return this._enableConsoleOutput
                    }
                }, {
                    key: "enableEventDispatching",
                    set: function set(value) {
                        this._enableEventDispatching = value
                    },
                    get: function get() {
                        return this._enableEventDispatching
                    }
                }], [{
                    key: "instance",
                    get: function get() {
                        if (!this[singleton]) {
                            this[singleton] = new Logger(singletonEnforcer)
                        }
                        return (0, _seal2.default)(this[singleton])
                    }
                }]);
                return Logger
            }(_Events.EventDispatcher);
            exports.LogLevel = LogLevel;
            exports.Logger = Logger;
            exports.LoggerEvent = LoggerEvent
        }, {
            "../core/Events": 146,
            "babel-runtime/core-js/number/is-integer": 5,
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/core-js/object/get-prototype-of": 12,
            "babel-runtime/core-js/object/seal": 13,
            "babel-runtime/core-js/symbol": 16,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19,
            "babel-runtime/helpers/inherits": 21,
            "babel-runtime/helpers/possibleConstructorReturn": 22
        }],
        207: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DumpFormatter = exports.ClientDisconnectionReason = undefined;
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _freeze = _dereq_("babel-runtime/core-js/object/freeze");
            var _freeze2 = _interopRequireDefault(_freeze);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var ClientDisconnectionReason = (0, _freeze2.default)({
                IDLE: "idle",
                KICK: "kick",
                BAN: "ban",
                MANUAL: "manual",
                UNKNOWN: "unknown",
                getReason: function getReason(reasonId) {
                    switch (reasonId) {
                        case 0:
                            return this.IDLE;
                        case 1:
                            return this.KICK;
                        case 2:
                            return this.BAN;
                        case 3:
                            return this.MANUAL;
                        case 4:
                            return this.UNKNOWN
                    }
                }
            });
            var DumpFormatter = function() {
                function DumpFormatter() {
                    (0, _classCallCheck3.default)(this, DumpFormatter)
                }(0, _createClass3.default)(DumpFormatter, null, [{
                    key: "prettyPrintByteArray",
                    value: function prettyPrintByteArray(ba) {
                        if (ba == null) return "Null";
                        else if (ba.length < 32) return ba.toString();
                        else return "Byte[" + ba.length + "]"
                    }
                }, {
                    key: "prettyPrintDump",
                    value: function prettyPrintDump(rawDump) {
                        var strBuf = "";
                        var indentPos = 0;
                        for (var i = 0; i < rawDump.length; i++) {
                            var ch = rawDump.charAt(i);
                            if (ch == this.TOKEN_INDENT_OPEN) {
                                indentPos++;
                                strBuf += this.NEW_LINE + this.getFormatTabs(indentPos)
                            } else if (ch == this.TOKEN_INDENT_CLOSE) {
                                indentPos--;
                                if (indentPos < 0) throw "DumpFormatter: the indentPos is negative. TOKENS ARE NOT BALANCED!";
                                strBuf += this.NEW_LINE + this.getFormatTabs(indentPos)
                            } else if (ch == this.TOKEN_DIVIDER) {
                                strBuf += this.NEW_LINE + this.getFormatTabs(indentPos)
                            } else {
                                strBuf += ch
                            }
                        }
                        if (indentPos != 0) throw "DumpFormatter: the indentPos is not === 0 (" + indentPos + "). TOKENS ARE NOT BALANCED!";
                        return strBuf
                    }
                }, {
                    key: "getFormatTabs",
                    value: function getFormatTabs(howMany) {
                        return this.strFill(this.TAB, howMany)
                    }
                }, {
                    key: "strFill",
                    value: function strFill(ch, howMany) {
                        var strBuf = "";
                        for (var i = 0; i < howMany; i++) {
                            strBuf += ch
                        }
                        return strBuf
                    }
                }, {
                    key: "hexDump",
                    value: function hexDump(ba) {
                        var bytesPerLine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
                        if (bytesPerLine === -1) bytesPerLine = this.HEX_BYTES_PER_LINE;
                        var sb = "Binary size: " + ba.byteLength + this.NEW_LINE;
                        var hexLine = "";
                        var chrLine = "";
                        var index = 0;
                        var count = 0;
                        var currChar = null;
                        var currByte = null;
                        do {
                            currByte = ba[index];
                            var hexByte = currByte.toString(16).toUpperCase();
                            if (hexByte.length === 1) hexByte = "0" + hexByte;
                            hexLine += hexByte + " ";
                            if (currByte >= 33 && currByte <= 126) currChar = String.fromCharCode(currByte);
                            else currChar = this.DOT;
                            chrLine += currChar;
                            if (++count === bytesPerLine) {
                                count = 0;
                                sb += hexLine + this.TAB + chrLine + this.NEW_LINE;
                                hexLine = "";
                                chrLine = ""
                            }
                        } while (++index < ba.length);
                        if (count !== 0) {
                            for (var j = bytesPerLine - count; j > 0; --j) {
                                hexLine += "   ";
                                chrLine += " "
                            }
                            sb += hexLine + this.TAB + chrLine + this.NEW_LINE
                        }
                        return sb
                    }
                }, {
                    key: "TOKEN_INDENT_OPEN",
                    get: function get() {
                        return "{"
                    }
                }, {
                    key: "TOKEN_INDENT_CLOSE",
                    get: function get() {
                        return "}"
                    }
                }, {
                    key: "TOKEN_DIVIDER",
                    get: function get() {
                        return ";"
                    }
                }, {
                    key: "NEW_LINE",
                    get: function get() {
                        return "\n"
                    }
                }, {
                    key: "TAB",
                    get: function get() {
                        return "\t"
                    }
                }, {
                    key: "DOT",
                    get: function get() {
                        return "."
                    }
                }, {
                    key: "HEX_BYTES_PER_LINE",
                    get: function get() {
                        return 16
                    }
                }]);
                return DumpFormatter
            }();
            exports.ClientDisconnectionReason = ClientDisconnectionReason;
            exports.DumpFormatter = DumpFormatter
        }, {
            "babel-runtime/core-js/object/freeze": 10,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }],
        208: [function(_dereq_, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.LagMonitor = undefined;
            var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
            var _createClass2 = _dereq_("babel-runtime/helpers/createClass");
            var _createClass3 = _interopRequireDefault(_createClass2);
            var _PingPong = _dereq_("../requests/system/PingPong");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var LagMonitor = function() {
                function LagMonitor(sfs) {
                    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
                    var queueSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
                    (0, _classCallCheck3.default)(this, LagMonitor);
                    this._sfs = sfs;
                    this._valueQueue = [];
                    this._interval = interval;
                    this._queueSize = queueSize;
                    this._thread = null;
                    this._lastReqTime = -1
                }(0, _createClass3.default)(LagMonitor, [{
                    key: "start",
                    value: function start() {
                        if (!this.isRunning && this._sfs != null) this._thread = setInterval(this._threadRunner, this._interval * 1e3, this)
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        if (this.isRunning) {
                            clearInterval(this._thread);
                            this._thread = null;
                            this._valueQueue = []
                        }
                    }
                }, {
                    key: "destroy",
                    value: function destroy() {
                        this.stop();
                        this._sfs = null
                    }
                }, {
                    key: "getLastPingTime",
                    value: function getLastPingTime() {
                        if (this._valueQueue.length > 0) return this._valueQueue[this._valueQueue.length - 1];
                        else return 0
                    }
                }, {
                    key: "_threadRunner",
                    value: function _threadRunner(scope) {
                        scope._lastReqTime = (new Date).getTime();
                        scope._sfs.send(new _PingPong.PingPongRequest)
                    }
                }, {
                    key: "_onPingPong",
                    value: function _onPingPong() {
                        var lagValue = (new Date).getTime() - this._lastReqTime;
                        if (this._valueQueue.length >= this._queueSize) this._valueQueue.shift();
                        this._valueQueue.push(lagValue);
                        return this._getAveragePingTime()
                    }
                }, {
                    key: "_getAveragePingTime",
                    value: function _getAveragePingTime() {
                        if (this._valueQueue.length == 0) return 0;
                        var lagAverage = 0;
                        for (var i = 0; i < this._valueQueue.length; i++) {
                            lagAverage += this._valueQueue[i]
                        }
                        return lagAverage / this._valueQueue.length
                    }
                }, {
                    key: "isRunning",
                    get: function get() {
                        return this._thread != null
                    }
                }]);
                return LagMonitor
            }();
            exports.LagMonitor = LagMonitor
        }, {
            "../requests/system/PingPong": 197,
            "babel-runtime/helpers/classCallCheck": 18,
            "babel-runtime/helpers/createClass": 19
        }]
    }, {}, [141])(141)
});
DataStream = function(arrayBuffer, byteOffset, endianness) {
    this._byteOffset = byteOffset || 0;
    if (arrayBuffer instanceof ArrayBuffer) {
        this.buffer = arrayBuffer
    } else if (typeof arrayBuffer == "object") {
        this.dataView = arrayBuffer;
        if (byteOffset) {
            this._byteOffset += byteOffset
        }
    } else {
        this.buffer = new ArrayBuffer(arrayBuffer || 1)
    }
    this.position = 0;
    this.endianness = endianness == null ? DataStream.LITTLE_ENDIAN : endianness
};
DataStream.prototype = {};
if (Uint8Array.prototype.BYTES_PER_ELEMENT === undefined) {
    Uint8Array.prototype.BYTES_PER_ELEMENT = Uint8Array.BYTES_PER_ELEMENT;
    Int8Array.prototype.BYTES_PER_ELEMENT = Int8Array.BYTES_PER_ELEMENT;
    Uint8ClampedArray.prototype.BYTES_PER_ELEMENT = Uint8ClampedArray.BYTES_PER_ELEMENT;
    Uint16Array.prototype.BYTES_PER_ELEMENT = Uint16Array.BYTES_PER_ELEMENT;
    Int16Array.prototype.BYTES_PER_ELEMENT = Int16Array.BYTES_PER_ELEMENT;
    Uint32Array.prototype.BYTES_PER_ELEMENT = Uint32Array.BYTES_PER_ELEMENT;
    Int32Array.prototype.BYTES_PER_ELEMENT = Int32Array.BYTES_PER_ELEMENT;
    Float64Array.prototype.BYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT
}
DataStream.prototype.save = function(filename) {
    var blob = new Blob(this.buffer);
    var URL = window.webkitURL || window.URL;
    if (URL && URL.createObjectURL) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.setAttribute("href", url);
        a.setAttribute("download", filename);
        a.click();
        URL.revokeObjectURL(url)
    } else {
        throw "DataStream.save: Can't create object URL."
    }
};
DataStream.BIG_ENDIAN = false;
DataStream.LITTLE_ENDIAN = true;
DataStream.prototype._dynamicSize = true;
Object.defineProperty(DataStream.prototype, "dynamicSize", {
    get: function() {
        return this._dynamicSize
    },
    set: function(v) {
        if (!v) {
            this._trimAlloc()
        }
        this._dynamicSize = v
    }
});
DataStream.prototype._byteLength = 0;
Object.defineProperty(DataStream.prototype, "byteLength", {
    get: function() {
        return this._byteLength - this._byteOffset
    }
});
Object.defineProperty(DataStream.prototype, "buffer", {
    get: function() {
        this._trimAlloc();
        return this._buffer
    },
    set: function(v) {
        this._buffer = v;
        this._dataView = new DataView(this._buffer, this._byteOffset);
        this._byteLength = this._buffer.byteLength
    }
});
Object.defineProperty(DataStream.prototype, "byteOffset", {
    get: function() {
        return this._byteOffset
    },
    set: function(v) {
        this._byteOffset = v;
        this._dataView = new DataView(this._buffer, this._byteOffset);
        this._byteLength = this._buffer.byteLength
    }
});
Object.defineProperty(DataStream.prototype, "dataView", {
    get: function() {
        return this._dataView
    },
    set: function(v) {
        this._byteOffset = v.byteOffset;
        this._buffer = v.buffer;
        this._dataView = new DataView(this._buffer, this._byteOffset);
        this._byteLength = this._byteOffset + v.byteLength
    }
});
DataStream.prototype._realloc = function(extra) {
    if (!this._dynamicSize) {
        return
    }
    var req = this._byteOffset + this.position + extra;
    var blen = this._buffer.byteLength;
    if (req <= blen) {
        if (req > this._byteLength) {
            this._byteLength = req
        }
        return
    }
    if (blen < 1) {
        blen = 1
    }
    while (req > blen) {
        blen *= 2
    }
    var buf = new ArrayBuffer(blen);
    var src = new Uint8Array(this._buffer);
    var dst = new Uint8Array(buf, 0, src.length);
    dst.set(src);
    this.buffer = buf;
    this._byteLength = req
};
DataStream.prototype._trimAlloc = function() {
    if (this._byteLength == this._buffer.byteLength) {
        return
    }
    var buf = new ArrayBuffer(this._byteLength);
    var dst = new Uint8Array(buf);
    var src = new Uint8Array(this._buffer, 0, dst.length);
    dst.set(src);
    this.buffer = buf
};
DataStream.prototype.seek = function(pos) {
    var npos = Math.max(0, Math.min(this.byteLength, pos));
    this.position = isNaN(npos) || !isFinite(npos) ? 0 : npos
};
DataStream.prototype.isEof = function() {
    return this.position >= this.byteLength
};
DataStream.prototype.mapInt32Array = function(length, e) {
    this._realloc(length * 4);
    var arr = new Int32Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 4;
    return arr
};
DataStream.prototype.mapInt16Array = function(length, e) {
    this._realloc(length * 2);
    var arr = new Int16Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 2;
    return arr
};
DataStream.prototype.mapInt8Array = function(length) {
    this._realloc(length * 1);
    var arr = new Int8Array(this._buffer, this.byteOffset + this.position, length);
    this.position += length * 1;
    return arr
};
DataStream.prototype.mapUint32Array = function(length, e) {
    this._realloc(length * 4);
    var arr = new Uint32Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 4;
    return arr
};
DataStream.prototype.mapUint16Array = function(length, e) {
    this._realloc(length * 2);
    var arr = new Uint16Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 2;
    return arr
};
DataStream.prototype.mapUint8Array = function(length) {
    this._realloc(length * 1);
    var arr = new Uint8Array(this._buffer, this.byteOffset + this.position, length);
    this.position += length * 1;
    return arr
};
DataStream.prototype.mapFloat64Array = function(length, e) {
    this._realloc(length * 8);
    var arr = new Float64Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 8;
    return arr
};
DataStream.prototype.mapFloat32Array = function(length, e) {
    this._realloc(length * 4);
    var arr = new Float32Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 4;
    return arr
};
DataStream.prototype.readInt32Array = function(length, e) {
    length = length == null ? this.byteLength - this.position / 4 : length;
    var arr = new Int32Array(length);
    DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr
};
DataStream.prototype.readInt16Array = function(length, e) {
    length = length == null ? this.byteLength - this.position / 2 : length;
    var arr = new Int16Array(length);
    DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr
};
DataStream.prototype.readInt8Array = function(length) {
    length = length == null ? this.byteLength - this.position : length;
    var arr = new Int8Array(length);
    DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
    this.position += arr.byteLength;
    return arr
};
DataStream.prototype.readUint32Array = function(length, e) {
    length = length == null ? this.byteLength - this.position / 4 : length;
    var arr = new Uint32Array(length);
    DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr
};
DataStream.prototype.readUint16Array = function(length, e) {
    length = length == null ? this.byteLength - this.position / 2 : length;
    var arr = new Uint16Array(length);
    DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr
};
DataStream.prototype.readUint8Array = function(length) {
    length = length == null ? this.byteLength - this.position : length;
    var arr = new Uint8Array(length);
    DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
    this.position += arr.byteLength;
    return arr
};
DataStream.prototype.readFloat64Array = function(length, e) {
    length = length == null ? this.byteLength - this.position / 8 : length;
    var arr = new Float64Array(length);
    DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr
};
DataStream.prototype.readFloat32Array = function(length, e) {
    length = length == null ? this.byteLength - this.position / 4 : length;
    var arr = new Float32Array(length);
    DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr
};
DataStream.prototype.writeInt32Array = function(arr, e) {
    this._realloc(arr.length * 4);
    if (arr instanceof Int32Array && (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, arr.byteOffset, arr.byteLength);
        this.mapInt32Array(arr.length, e)
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeInt32(arr[i], e)
        }
    }
};
DataStream.prototype.writeInt16Array = function(arr, e) {
    this._realloc(arr.length * 2);
    if (arr instanceof Int16Array && (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, arr.byteOffset, arr.byteLength);
        this.mapInt16Array(arr.length, e)
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeInt16(arr[i], e)
        }
    }
};
DataStream.prototype.writeInt8Array = function(arr) {
    this._realloc(arr.length * 1);
    if (arr instanceof Int8Array && (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, arr.byteOffset, arr.byteLength);
        this.mapInt8Array(arr.length)
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeInt8(arr[i])
        }
    }
};
DataStream.prototype.writeUint32Array = function(arr, e) {
    this._realloc(arr.length * 4);
    if (arr instanceof Uint32Array && (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, arr.byteOffset, arr.byteLength);
        this.mapUint32Array(arr.length, e)
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeUint32(arr[i], e)
        }
    }
};
DataStream.prototype.writeUint16Array = function(arr, e) {
    this._realloc(arr.length * 2);
    if (arr instanceof Uint16Array && (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, arr.byteOffset, arr.byteLength);
        this.mapUint16Array(arr.length, e)
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeUint16(arr[i], e)
        }
    }
};
DataStream.prototype.writeUint8Array = function(arr) {
    this._realloc(arr.length * 1);
    if (arr instanceof Uint8Array && (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, arr.byteOffset, arr.byteLength);
        this.mapUint8Array(arr.length)
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeUint8(arr[i])
        }
    }
};
DataStream.prototype.writeFloat64Array = function(arr, e) {
    this._realloc(arr.length * 8);
    if (arr instanceof Float64Array && (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, arr.byteOffset, arr.byteLength);
        this.mapFloat64Array(arr.length, e)
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeFloat64(arr[i], e)
        }
    }
};
DataStream.prototype.writeFloat32Array = function(arr, e) {
    this._realloc(arr.length * 4);
    if (arr instanceof Float32Array && (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, arr.byteOffset, arr.byteLength);
        this.mapFloat32Array(arr.length, e)
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeFloat32(arr[i], e)
        }
    }
};
DataStream.prototype.readInt32 = function(e) {
    var v = this._dataView.getInt32(this.position, e == null ? this.endianness : e);
    this.position += 4;
    return v
};
DataStream.prototype.readInt16 = function(e) {
    var v = this._dataView.getInt16(this.position, e == null ? this.endianness : e);
    this.position += 2;
    return v
};
DataStream.prototype.readInt8 = function() {
    var v = this._dataView.getInt8(this.position);
    this.position += 1;
    return v
};
DataStream.prototype.readUint32 = function(e) {
    var v = this._dataView.getUint32(this.position, e == null ? this.endianness : e);
    this.position += 4;
    return v
};
DataStream.prototype.readUint16 = function(e) {
    var v = this._dataView.getUint16(this.position, e == null ? this.endianness : e);
    this.position += 2;
    return v
};
DataStream.prototype.readUint8 = function() {
    var v = this._dataView.getUint8(this.position);
    this.position += 1;
    return v
};
DataStream.prototype.readFloat32 = function(e) {
    var v = this._dataView.getFloat32(this.position, e == null ? this.endianness : e);
    this.position += 4;
    return v
};
DataStream.prototype.readFloat64 = function(e) {
    var v = this._dataView.getFloat64(this.position, e == null ? this.endianness : e);
    this.position += 8;
    return v
};
DataStream.prototype.writeInt32 = function(v, e) {
    this._realloc(4);
    this._dataView.setInt32(this.position, v, e == null ? this.endianness : e);
    this.position += 4
};
DataStream.prototype.writeInt16 = function(v, e) {
    this._realloc(2);
    this._dataView.setInt16(this.position, v, e == null ? this.endianness : e);
    this.position += 2
};
DataStream.prototype.writeInt8 = function(v) {
    this._realloc(1);
    this._dataView.setInt8(this.position, v);
    this.position += 1
};
DataStream.prototype.writeUint32 = function(v, e) {
    this._realloc(4);
    this._dataView.setUint32(this.position, v, e == null ? this.endianness : e);
    this.position += 4
};
DataStream.prototype.writeUint16 = function(v, e) {
    this._realloc(2);
    this._dataView.setUint16(this.position, v, e == null ? this.endianness : e);
    this.position += 2
};
DataStream.prototype.writeUint8 = function(v) {
    this._realloc(1);
    this._dataView.setUint8(this.position, v);
    this.position += 1
};
DataStream.prototype.writeFloat32 = function(v, e) {
    this._realloc(4);
    this._dataView.setFloat32(this.position, v, e == null ? this.endianness : e);
    this.position += 4
};
DataStream.prototype.writeFloat64 = function(v, e) {
    this._realloc(8);
    this._dataView.setFloat64(this.position, v, e == null ? this.endianness : e);
    this.position += 8
};
DataStream.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0;
DataStream.memcpy = function(dst, dstOffset, src, srcOffset, byteLength) {
    var dstU8 = new Uint8Array(dst, dstOffset, byteLength);
    var srcU8 = new Uint8Array(src, srcOffset, byteLength);
    dstU8.set(srcU8)
};
DataStream.arrayToNative = function(array, arrayIsLittleEndian) {
    if (arrayIsLittleEndian == this.endianness) {
        return array
    } else {
        return this.flipArrayEndianness(array)
    }
};
DataStream.nativeToEndian = function(array, littleEndian) {
    if (this.endianness == littleEndian) {
        return array
    } else {
        return this.flipArrayEndianness(array)
    }
};
DataStream.flipArrayEndianness = function(array) {
    var u8 = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
    for (var i = 0; i < array.byteLength; i += array.BYTES_PER_ELEMENT) {
        for (var j = i + array.BYTES_PER_ELEMENT - 1, k = i; j > k; j--, k++) {
            var tmp = u8[k];
            u8[k] = u8[j];
            u8[j] = tmp
        }
    }
    return array
};
DataStream.createStringFromArray = function(array) {
    var chunk_size = 32768;
    var chunks = [];
    for (var i = 0; i < array.length; i += chunk_size) {
        chunks.push(String.fromCharCode.apply(null, array.subarray(i, i + chunk_size)))
    }
    return chunks.join("")
};
DataStream.prototype.failurePosition = 0;
DataStream.prototype.readStruct = function(structDefinition) {
    var struct = {},
        t, v, n;
    var p = this.position;
    for (var i = 0; i < structDefinition.length; i += 2) {
        t = structDefinition[i + 1];
        v = this.readType(t, struct);
        if (v == null) {
            if (this.failurePosition == 0) {
                this.failurePosition = this.position
            }
            this.position = p;
            return null
        }
        struct[structDefinition[i]] = v
    }
    return struct
};
DataStream.prototype.readUCS2String = function(length, endianness) {
    return DataStream.createStringFromArray(this.readUint16Array(length, endianness))
};
DataStream.prototype.writeUCS2String = function(str, endianness, lengthOverride) {
    if (lengthOverride == null) {
        lengthOverride = str.length
    }
    for (var i = 0; i < str.length && i < lengthOverride; i++) {
        this.writeUint16(str.charCodeAt(i), endianness)
    }
    for (; i < lengthOverride; i++) {
        this.writeUint16(0)
    }
};
DataStream.prototype.readString = function(length, encoding) {
    if (encoding == null || encoding == "ASCII") {
        return DataStream.createStringFromArray(this.mapUint8Array(length == null ? this.byteLength - this.position : length))
    } else {
        return new TextDecoder(encoding).decode(this.mapUint8Array(length))
    }
};
DataStream.prototype.writeString = function(s, encoding, length) {
    if (encoding == null || encoding == "ASCII") {
        if (length != null) {
            var i = 0;
            var len = Math.min(s.length, length);
            for (i = 0; i < len; i++) {
                this.writeUint8(s.charCodeAt(i))
            }
            for (; i < length; i++) {
                this.writeUint8(0)
            }
        } else {
            for (var i = 0; i < s.length; i++) {
                this.writeUint8(s.charCodeAt(i))
            }
        }
    } else {
        this.writeUint8Array(new TextEncoder(encoding).encode(s.substring(0, length)))
    }
};
DataStream.prototype.readCString = function(length) {
    var blen = this.byteLength - this.position;
    var u8 = new Uint8Array(this._buffer, this._byteOffset + this.position);
    var len = blen;
    if (length != null) {
        len = Math.min(length, blen)
    }
    for (var i = 0; i < len && u8[i] != 0; i++);
    var s = DataStream.createStringFromArray(this.mapUint8Array(i));
    if (length != null) {
        this.position += len - i
    } else if (i != blen) {
        this.position += 1
    }
    return s
};
DataStream.prototype.writeCString = function(s, length) {
    if (length != null) {
        var i = 0;
        var len = Math.min(s.length, length);
        for (i = 0; i < len; i++) {
            this.writeUint8(s.charCodeAt(i))
        }
        for (; i < length; i++) {
            this.writeUint8(0)
        }
    } else {
        for (var i = 0; i < s.length; i++) {
            this.writeUint8(s.charCodeAt(i))
        }
        this.writeUint8(0)
    }
};
DataStream.prototype.readType = function(t, struct) {
    if (typeof t == "function") {
        return t(this, struct)
    } else if (typeof t == "object" && !(t instanceof Array)) {
        return t.get(this, struct)
    } else if (t instanceof Array && t.length != 3) {
        return this.readStruct(t, struct)
    }
    var v = null;
    var lengthOverride = null;
    var charset = "ASCII";
    var pos = this.position;
    var len;
    if (typeof t == "string" && /:/.test(t)) {
        var tp = t.split(":");
        t = tp[0];
        len = tp[1];
        if (struct[len] != null) {
            lengthOverride = parseInt(struct[len])
        } else {
            lengthOverride = parseInt(tp[1])
        }
    }
    if (typeof t == "string" && /,/.test(t)) {
        var tp = t.split(",");
        t = tp[0];
        charset = parseInt(tp[1])
    }
    switch (t) {
        case "uint8":
            v = this.readUint8();
            break;
        case "int8":
            v = this.readInt8();
            break;
        case "uint16":
            v = this.readUint16(this.endianness);
            break;
        case "int16":
            v = this.readInt16(this.endianness);
            break;
        case "uint32":
            v = this.readUint32(this.endianness);
            break;
        case "int32":
            v = this.readInt32(this.endianness);
            break;
        case "float32":
            v = this.readFloat32(this.endianness);
            break;
        case "float64":
            v = this.readFloat64(this.endianness);
            break;
        case "uint16be":
            v = this.readUint16(DataStream.BIG_ENDIAN);
            break;
        case "int16be":
            v = this.readInt16(DataStream.BIG_ENDIAN);
            break;
        case "uint32be":
            v = this.readUint32(DataStream.BIG_ENDIAN);
            break;
        case "int32be":
            v = this.readInt32(DataStream.BIG_ENDIAN);
            break;
        case "float32be":
            v = this.readFloat32(DataStream.BIG_ENDIAN);
            break;
        case "float64be":
            v = this.readFloat64(DataStream.BIG_ENDIAN);
            break;
        case "uint16le":
            v = this.readUint16(DataStream.LITTLE_ENDIAN);
            break;
        case "int16le":
            v = this.readInt16(DataStream.LITTLE_ENDIAN);
            break;
        case "uint32le":
            v = this.readUint32(DataStream.LITTLE_ENDIAN);
            break;
        case "int32le":
            v = this.readInt32(DataStream.LITTLE_ENDIAN);
            break;
        case "float32le":
            v = this.readFloat32(DataStream.LITTLE_ENDIAN);
            break;
        case "float64le":
            v = this.readFloat64(DataStream.LITTLE_ENDIAN);
            break;
        case "cstring":
            v = this.readCString(lengthOverride);
            break;
        case "string":
            v = this.readString(lengthOverride, charset);
            break;
        case "u16string":
            v = this.readUCS2String(lengthOverride, this.endianness);
            break;
        case "u16stringle":
            v = this.readUCS2String(lengthOverride, DataStream.LITTLE_ENDIAN);
            break;
        case "u16stringbe":
            v = this.readUCS2String(lengthOverride, DataStream.BIG_ENDIAN);
            break;
        default:
            if (t.length == 3) {
                var ta = t[1];
                var len = t[2];
                var length = 0;
                if (typeof len == "function") {
                    length = len(struct, this, t)
                } else if (typeof len == "string" && struct[len] != null) {
                    length = parseInt(struct[len])
                } else {
                    length = parseInt(len)
                }
                if (typeof ta == "string") {
                    var tap = ta.replace(/(le|be)$/, "");
                    var endianness = null;
                    if (/le$/.test(ta)) {
                        endianness = DataStream.LITTLE_ENDIAN
                    } else if (/be$/.test(ta)) {
                        endianness = DataStream.BIG_ENDIAN
                    }
                    if (len == "*") {
                        length = null
                    }
                    switch (tap) {
                        case "uint8":
                            v = this.readUint8Array(length);
                            break;
                        case "uint16":
                            v = this.readUint16Array(length, endianness);
                            break;
                        case "uint32":
                            v = this.readUint32Array(length, endianness);
                            break;
                        case "int8":
                            v = this.readInt8Array(length);
                            break;
                        case "int16":
                            v = this.readInt16Array(length, endianness);
                            break;
                        case "int32":
                            v = this.readInt32Array(length, endianness);
                            break;
                        case "float32":
                            v = this.readFloat32Array(length, endianness);
                            break;
                        case "float64":
                            v = this.readFloat64Array(length, endianness);
                            break;
                        case "cstring":
                        case "utf16string":
                        case "string":
                            if (length == null) {
                                v = [];
                                while (!this.isEof()) {
                                    var u = this.readType(ta, struct);
                                    if (u == null) break;
                                    v.push(u)
                                }
                            } else {
                                v = new Array(length);
                                for (var i = 0; i < length; i++) {
                                    v[i] = this.readType(ta, struct)
                                }
                            }
                            break
                    }
                } else {
                    if (len == "*") {
                        v = [];
                        this.buffer;
                        while (true) {
                            var p = this.position;
                            try {
                                var o = this.readType(ta, struct);
                                if (o == null) {
                                    this.position = p;
                                    break
                                }
                                v.push(o)
                            } catch (e) {
                                this.position = p;
                                break
                            }
                        }
                    } else {
                        v = new Array(length);
                        for (var i = 0; i < length; i++) {
                            var u = this.readType(ta, struct);
                            if (u == null) return null;
                            v[i] = u
                        }
                    }
                }
                break
            }
    }
    if (lengthOverride != null) {
        this.position = pos + lengthOverride
    }
    return v
};
DataStream.prototype.writeStruct = function(structDefinition, struct) {
    for (var i = 0; i < structDefinition.length; i += 2) {
        var t = structDefinition[i + 1];
        this.writeType(t, struct[structDefinition[i]], struct)
    }
};
DataStream.prototype.writeType = function(t, v, struct) {
    if (typeof t == "function") {
        return t(this, v)
    } else if (typeof t == "object" && !(t instanceof Array)) {
        return t.set(this, v, struct)
    }
    var lengthOverride = null;
    var charset = "ASCII";
    var pos = this.position;
    if (typeof t == "string" && /:/.test(t)) {
        var tp = t.split(":");
        t = tp[0];
        lengthOverride = parseInt(tp[1])
    }
    if (typeof t == "string" && /,/.test(t)) {
        var tp = t.split(",");
        t = tp[0];
        charset = parseInt(tp[1])
    }
    switch (t) {
        case "uint8":
            this.writeUint8(v);
            break;
        case "int8":
            this.writeInt8(v);
            break;
        case "uint16":
            this.writeUint16(v, this.endianness);
            break;
        case "int16":
            this.writeInt16(v, this.endianness);
            break;
        case "uint32":
            this.writeUint32(v, this.endianness);
            break;
        case "int32":
            this.writeInt32(v, this.endianness);
            break;
        case "float32":
            this.writeFloat32(v, this.endianness);
            break;
        case "float64":
            this.writeFloat64(v, this.endianness);
            break;
        case "uint16be":
            this.writeUint16(v, DataStream.BIG_ENDIAN);
            break;
        case "int16be":
            this.writeInt16(v, DataStream.BIG_ENDIAN);
            break;
        case "uint32be":
            this.writeUint32(v, DataStream.BIG_ENDIAN);
            break;
        case "int32be":
            this.writeInt32(v, DataStream.BIG_ENDIAN);
            break;
        case "float32be":
            this.writeFloat32(v, DataStream.BIG_ENDIAN);
            break;
        case "float64be":
            this.writeFloat64(v, DataStream.BIG_ENDIAN);
            break;
        case "uint16le":
            this.writeUint16(v, DataStream.LITTLE_ENDIAN);
            break;
        case "int16le":
            this.writeInt16(v, DataStream.LITTLE_ENDIAN);
            break;
        case "uint32le":
            this.writeUint32(v, DataStream.LITTLE_ENDIAN);
            break;
        case "int32le":
            this.writeInt32(v, DataStream.LITTLE_ENDIAN);
            break;
        case "float32le":
            this.writeFloat32(v, DataStream.LITTLE_ENDIAN);
            break;
        case "float64le":
            this.writeFloat64(v, DataStream.LITTLE_ENDIAN);
            break;
        case "cstring":
            this.writeCString(v, lengthOverride);
            break;
        case "string":
            this.writeString(v, charset, lengthOverride);
            break;
        case "u16string":
            this.writeUCS2String(v, this.endianness, lengthOverride);
            break;
        case "u16stringle":
            this.writeUCS2String(v, DataStream.LITTLE_ENDIAN, lengthOverride);
            break;
        case "u16stringbe":
            this.writeUCS2String(v, DataStream.BIG_ENDIAN, lengthOverride);
            break;
        default:
            if (t.length == 3) {
                var ta = t[1];
                for (var i = 0; i < v.length; i++) {
                    this.writeType(ta, v[i])
                }
                break
            } else {
                this.writeStruct(t, v);
                break
            }
    }
    if (lengthOverride != null) {
        this.position = pos;
        this._realloc(lengthOverride);
        this.position = pos + lengthOverride
    }
};
if (typeof define === "function" && define.amd) {
    define("DataStream", [], function() {
        return DataStream
    })
}
if (typeof module === "object" && module && module.exports) {
    module.exports = DataStream
}(function(global) {
    "use strict";

    function inRange(a, min, max) {
        return min <= a && a <= max
    }

    function div(n, d) {
        return Math.floor(n / d)
    }
    var EOF_byte = -1;
    var EOF_code_point = -1;

    function ByteInputStream(bytes) {
        var pos = 0;
        this.get = function() {
            return pos >= bytes.length ? EOF_byte : Number(bytes[pos])
        };
        this.offset = function(n) {
            pos += n;
            if (pos < 0) {
                throw new Error("Seeking past start of the buffer")
            }
            if (pos > bytes.length) {
                throw new Error("Seeking past EOF")
            }
        };
        this.match = function(test) {
            if (test.length > pos + bytes.length) {
                return false
            }
            var i;
            for (i = 0; i < test.length; i += 1) {
                if (Number(bytes[pos + i]) !== test[i]) {
                    return false
                }
            }
            return true
        }
    }

    function ByteOutputStream(bytes) {
        var pos = 0;
        this.emit = function(var_args) {
            var last = EOF_byte;
            var i;
            for (i = 0; i < arguments.length; ++i) {
                last = Number(arguments[i]);
                bytes[pos++] = last
            }
            return last
        }
    }

    function CodePointInputStream(string) {
        var pos = 0;
        var cps = function() {
            var cps = [];
            var i = 0,
                n = string.length;
            while (i < string.length) {
                var c = string.charCodeAt(i);
                if (!inRange(c, 55296, 57343)) {
                    cps.push(c)
                } else if (inRange(c, 56320, 57343)) {
                    cps.push(65533)
                } else {
                    if (i === n - 1) {
                        cps.push(65533)
                    } else {
                        var d = string.charCodeAt(i + 1);
                        if (inRange(d, 56320, 57343)) {
                            var a = c & 1023;
                            var b = d & 1023;
                            i += 1;
                            cps.push(65536 + (a << 10) + b)
                        } else {
                            cps.push(65533)
                        }
                    }
                }
                i += 1
            }
            return cps
        }();
        this.offset = function(n) {
            pos += n;
            if (pos < 0) {
                throw new Error("Seeking past start of the buffer")
            }
            if (pos > cps.length) {
                throw new Error("Seeking past EOF")
            }
        };
        this.get = function() {
            if (pos >= cps.length) {
                return EOF_code_point
            }
            return cps[pos]
        }
    }

    function CodePointOutputStream() {
        var string = "";
        this.string = function() {
            return string
        };
        this.emit = function(c) {
            if (c <= 65535) {
                string += String.fromCharCode(c)
            } else {
                c -= 65536;
                string += String.fromCharCode(55296 + (c >> 10 & 1023));
                string += String.fromCharCode(56320 + (c & 1023))
            }
        }
    }

    function decoderError(fatal, opt_code_point) {
        if (fatal) {
            throw new Error("EncodingError")
        }
        return opt_code_point || 65533
    }

    function encoderError(code_point) {
        throw new Error("EncodingError")
    }

    function getEncoding(label) {
        label = String(label).trim().toLowerCase();
        if (Object.prototype.hasOwnProperty.call(label_to_encoding, label)) {
            return label_to_encoding[label]
        }
        throw new Error("EncodingError: Unknown encoding: " + label)
    }
    var encodings = [{
        encodings: [{
            labels: ["unicode-1-1-utf-8", "utf-8", "utf8"],
            name: "utf-8"
        }],
        heading: "The Encoding"
    }, {
        encodings: [{
            labels: ["cp864", "ibm864"],
            name: "ibm864"
        }, {
            labels: ["cp866", "ibm866"],
            name: "ibm866"
        }, {
            labels: ["csisolatin2", "iso-8859-2", "iso-ir-101", "iso8859-2", "iso_8859-2", "l2", "latin2"],
            name: "iso-8859-2"
        }, {
            labels: ["csisolatin3", "iso-8859-3", "iso_8859-3", "iso-ir-109", "l3", "latin3"],
            name: "iso-8859-3"
        }, {
            labels: ["csisolatin4", "iso-8859-4", "iso_8859-4", "iso-ir-110", "l4", "latin4"],
            name: "iso-8859-4"
        }, {
            labels: ["csisolatincyrillic", "cyrillic", "iso-8859-5", "iso_8859-5", "iso-ir-144"],
            name: "iso-8859-5"
        }, {
            labels: ["arabic", "csisolatinarabic", "ecma-114", "iso-8859-6", "iso_8859-6", "iso-ir-127"],
            name: "iso-8859-6"
        }, {
            labels: ["csisolatingreek", "ecma-118", "elot_928", "greek", "greek8", "iso-8859-7", "iso_8859-7", "iso-ir-126"],
            name: "iso-8859-7"
        }, {
            labels: ["csisolatinhebrew", "hebrew", "iso-8859-8", "iso-8859-8-i", "iso-ir-138", "iso_8859-8", "visual"],
            name: "iso-8859-8"
        }, {
            labels: ["csisolatin6", "iso-8859-10", "iso-ir-157", "iso8859-10", "l6", "latin6"],
            name: "iso-8859-10"
        }, {
            labels: ["iso-8859-13"],
            name: "iso-8859-13"
        }, {
            labels: ["iso-8859-14", "iso8859-14"],
            name: "iso-8859-14"
        }, {
            labels: ["iso-8859-15", "iso_8859-15"],
            name: "iso-8859-15"
        }, {
            labels: ["iso-8859-16"],
            name: "iso-8859-16"
        }, {
            labels: ["koi8-r", "koi8_r"],
            name: "koi8-r"
        }, {
            labels: ["koi8-u"],
            name: "koi8-u"
        }, {
            labels: ["csmacintosh", "mac", "macintosh", "x-mac-roman"],
            name: "macintosh"
        }, {
            labels: ["iso-8859-11", "tis-620", "windows-874"],
            name: "windows-874"
        }, {
            labels: ["windows-1250", "x-cp1250"],
            name: "windows-1250"
        }, {
            labels: ["windows-1251", "x-cp1251"],
            name: "windows-1251"
        }, {
            labels: ["ascii", "ansi_x3.4-1968", "csisolatin1", "iso-8859-1", "iso8859-1", "iso_8859-1", "l1", "latin1", "us-ascii", "windows-1252"],
            name: "windows-1252"
        }, {
            labels: ["cp1253", "windows-1253"],
            name: "windows-1253"
        }, {
            labels: ["csisolatin5", "iso-8859-9", "iso-ir-148", "l5", "latin5", "windows-1254"],
            name: "windows-1254"
        }, {
            labels: ["cp1255", "windows-1255"],
            name: "windows-1255"
        }, {
            labels: ["cp1256", "windows-1256"],
            name: "windows-1256"
        }, {
            labels: ["windows-1257"],
            name: "windows-1257"
        }, {
            labels: ["cp1258", "windows-1258"],
            name: "windows-1258"
        }, {
            labels: ["x-mac-cyrillic", "x-mac-ukrainian"],
            name: "x-mac-cyrillic"
        }],
        heading: "Legacy single-byte encodings"
    }, {
        encodings: [{
            labels: ["chinese", "csgb2312", "csiso58gb231280", "gb2312", "gbk", "gb_2312", "gb_2312-80", "iso-ir-58", "x-gbk"],
            name: "gbk"
        }, {
            labels: ["gb18030"],
            name: "gb18030"
        }, {
            labels: ["hz-gb-2312"],
            name: "hz-gb-2312"
        }],
        heading: "Legacy multi-byte Chinese (simplified) encodings"
    }, {
        encodings: [{
            labels: ["big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5"],
            name: "big5"
        }],
        heading: "Legacy multi-byte Chinese (traditional) encodings"
    }, {
        encodings: [{
            labels: ["cseucpkdfmtjapanese", "euc-jp", "x-euc-jp"],
            name: "euc-jp"
        }, {
            labels: ["csiso2022jp", "iso-2022-jp"],
            name: "iso-2022-jp"
        }, {
            labels: ["csshiftjis", "ms_kanji", "shift-jis", "shift_jis", "sjis", "windows-31j", "x-sjis"],
            name: "shift_jis"
        }],
        heading: "Legacy multi-byte Japanese encodings"
    }, {
        encodings: [{
            labels: ["cseuckr", "csksc56011987", "euc-kr", "iso-ir-149", "korean", "ks_c_5601-1987", "ks_c_5601-1989", "ksc5601", "ksc_5601", "windows-949"],
            name: "euc-kr"
        }, {
            labels: ["csiso2022kr", "iso-2022-kr"],
            name: "iso-2022-kr"
        }],
        heading: "Legacy multi-byte Korean encodings"
    }, {
        encodings: [{
            labels: ["utf-16", "utf-16le"],
            name: "utf-16"
        }, {
            labels: ["utf-16be"],
            name: "utf-16be"
        }],
        heading: "Legacy utf-16 encodings"
    }];
    var name_to_encoding = {};
    var label_to_encoding = {};
    encodings.forEach(function(category) {
        category.encodings.forEach(function(encoding) {
            name_to_encoding[encoding.name] = encoding;
            encoding.labels.forEach(function(label) {
                label_to_encoding[label] = encoding
            })
        })
    });

    function indexCodePointFor(pointer, index) {
        return (index || [])[pointer] || null
    }

    function indexPointerFor(code_point, index) {
        var pointer = index.indexOf(code_point);
        return pointer === -1 ? null : pointer
    }
    var indexes = global["encoding-indexes"] || {};

    function indexGB18030CodePointFor(pointer) {
        if (pointer > 39419 && pointer < 189e3 || pointer > 1237575) {
            return null
        }
        var offset = 0,
            code_point_offset = 0,
            index = indexes["gb18030"];
        var i;
        for (i = 0; i < index.length; ++i) {
            var entry = index[i];
            if (entry[0] <= pointer) {
                offset = entry[0];
                code_point_offset = entry[1]
            } else {
                break
            }
        }
        return code_point_offset + pointer - offset
    }

    function indexGB18030PointerFor(code_point) {
        var offset = 0,
            pointer_offset = 0,
            index = indexes["gb18030"];
        var i;
        for (i = 0; i < index.length; ++i) {
            var entry = index[i];
            if (entry[1] <= code_point) {
                offset = entry[1];
                pointer_offset = entry[0]
            } else {
                break
            }
        }
        return pointer_offset + code_point - offset
    }

    function UTF8Decoder(options) {
        var fatal = options.fatal;
        var utf8_code_point = 0,
            utf8_bytes_needed = 0,
            utf8_bytes_seen = 0,
            utf8_lower_boundary = 0;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite === EOF_byte) {
                if (utf8_bytes_needed !== 0) {
                    return decoderError(fatal)
                }
                return EOF_code_point
            }
            byte_pointer.offset(1);
            if (utf8_bytes_needed === 0) {
                if (inRange(bite, 0, 127)) {
                    return bite
                }
                if (inRange(bite, 194, 223)) {
                    utf8_bytes_needed = 1;
                    utf8_lower_boundary = 128;
                    utf8_code_point = bite - 192
                } else if (inRange(bite, 224, 239)) {
                    utf8_bytes_needed = 2;
                    utf8_lower_boundary = 2048;
                    utf8_code_point = bite - 224
                } else if (inRange(bite, 240, 244)) {
                    utf8_bytes_needed = 3;
                    utf8_lower_boundary = 65536;
                    utf8_code_point = bite - 240
                } else {
                    return decoderError(fatal)
                }
                utf8_code_point = utf8_code_point * Math.pow(64, utf8_bytes_needed);
                return null
            }
            if (!inRange(bite, 128, 191)) {
                utf8_code_point = 0;
                utf8_bytes_needed = 0;
                utf8_bytes_seen = 0;
                utf8_lower_boundary = 0;
                byte_pointer.offset(-1);
                return decoderError(fatal)
            }
            utf8_bytes_seen += 1;
            utf8_code_point = utf8_code_point + (bite - 128) * Math.pow(64, utf8_bytes_needed - utf8_bytes_seen);
            if (utf8_bytes_seen !== utf8_bytes_needed) {
                return null
            }
            var code_point = utf8_code_point;
            var lower_boundary = utf8_lower_boundary;
            utf8_code_point = 0;
            utf8_bytes_needed = 0;
            utf8_bytes_seen = 0;
            utf8_lower_boundary = 0;
            if (inRange(code_point, lower_boundary, 1114111) && !inRange(code_point, 55296, 57343)) {
                return code_point
            }
            return decoderError(fatal)
        }
    }

    function UTF8Encoder(options) {
        var fatal = options.fatal;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 55296, 57343)) {
                return encoderError(code_point)
            }
            if (inRange(code_point, 0, 127)) {
                return output_byte_stream.emit(code_point)
            }
            var count, offset;
            if (inRange(code_point, 128, 2047)) {
                count = 1;
                offset = 192
            } else if (inRange(code_point, 2048, 65535)) {
                count = 2;
                offset = 224
            } else if (inRange(code_point, 65536, 1114111)) {
                count = 3;
                offset = 240
            }
            var result = output_byte_stream.emit(div(code_point, Math.pow(64, count)) + offset);
            while (count > 0) {
                var temp = div(code_point, Math.pow(64, count - 1));
                result = output_byte_stream.emit(128 + temp % 64);
                count -= 1
            }
            return result
        }
    }
    name_to_encoding["utf-8"].getEncoder = function(options) {
        return new UTF8Encoder(options)
    };
    name_to_encoding["utf-8"].getDecoder = function(options) {
        return new UTF8Decoder(options)
    };

    function SingleByteDecoder(index, options) {
        var fatal = options.fatal;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite === EOF_byte) {
                return EOF_code_point
            }
            byte_pointer.offset(1);
            if (inRange(bite, 0, 127)) {
                return bite
            }
            var code_point = index[bite - 128];
            if (code_point === null) {
                return decoderError(fatal)
            }
            return code_point
        }
    }

    function SingleByteEncoder(index, options) {
        var fatal = options.fatal;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 0, 127)) {
                return output_byte_stream.emit(code_point)
            }
            var pointer = indexPointerFor(code_point, index);
            if (pointer === null) {
                encoderError(code_point)
            }
            return output_byte_stream.emit(pointer + 128)
        }
    }(function() {
        ["ibm864", "ibm866", "iso-8859-2", "iso-8859-3", "iso-8859-4", "iso-8859-5", "iso-8859-6", "iso-8859-7", "iso-8859-8", "iso-8859-10", "iso-8859-13", "iso-8859-14", "iso-8859-15", "iso-8859-16", "koi8-r", "koi8-u", "macintosh", "windows-874", "windows-1250", "windows-1251", "windows-1252", "windows-1253", "windows-1254", "windows-1255", "windows-1256", "windows-1257", "windows-1258", "x-mac-cyrillic"].forEach(function(name) {
            var encoding = name_to_encoding[name];
            var index = indexes[name];
            encoding.getDecoder = function(options) {
                return new SingleByteDecoder(index, options)
            };
            encoding.getEncoder = function(options) {
                return new SingleByteEncoder(index, options)
            }
        })
    })();

    function GBKDecoder(gb18030, options) {
        var fatal = options.fatal;
        var gbk_first = 0,
            gbk_second = 0,
            gbk_third = 0;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite === EOF_byte && gbk_first === 0 && gbk_second === 0 && gbk_third === 0) {
                return EOF_code_point
            }
            if (bite === EOF_byte && (gbk_first !== 0 || gbk_second !== 0 || gbk_third !== 0)) {
                gbk_first = 0;
                gbk_second = 0;
                gbk_third = 0;
                decoderError(fatal)
            }
            byte_pointer.offset(1);
            var code_point;
            if (gbk_third !== 0) {
                code_point = null;
                if (inRange(bite, 48, 57)) {
                    code_point = indexGB18030CodePointFor((((gbk_first - 129) * 10 + (gbk_second - 48)) * 126 + (gbk_third - 129)) * 10 + bite - 48)
                }
                gbk_first = 0;
                gbk_second = 0;
                gbk_third = 0;
                if (code_point === null) {
                    byte_pointer.offset(-3);
                    return decoderError(fatal)
                }
                return code_point
            }
            if (gbk_second !== 0) {
                if (inRange(bite, 129, 254)) {
                    gbk_third = bite;
                    return null
                }
                byte_pointer.offset(-2);
                gbk_first = 0;
                gbk_second = 0;
                return decoderError(fatal)
            }
            if (gbk_first !== 0) {
                if (inRange(bite, 48, 57) && gb18030) {
                    gbk_second = bite;
                    return null
                }
                var lead = gbk_first;
                var pointer = null;
                gbk_first = 0;
                var offset = bite < 127 ? 64 : 65;
                if (inRange(bite, 64, 126) || inRange(bite, 128, 254)) {
                    pointer = (lead - 129) * 190 + (bite - offset)
                }
                code_point = pointer === null ? null : indexCodePointFor(pointer, indexes["gbk"]);
                if (pointer === null) {
                    byte_pointer.offset(-1)
                }
                if (code_point === null) {
                    return decoderError(fatal)
                }
                return code_point
            }
            if (inRange(bite, 0, 127)) {
                return bite
            }
            if (bite === 128) {
                return 8364
            }
            if (inRange(bite, 129, 254)) {
                gbk_first = bite;
                return null
            }
            return decoderError(fatal)
        }
    }

    function GBKEncoder(gb18030, options) {
        var fatal = options.fatal;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 0, 127)) {
                return output_byte_stream.emit(code_point)
            }
            var pointer = indexPointerFor(code_point, indexes["gbk"]);
            if (pointer !== null) {
                var lead = div(pointer, 190) + 129;
                var trail = pointer % 190;
                var offset = trail < 63 ? 64 : 65;
                return output_byte_stream.emit(lead, trail + offset)
            }
            if (pointer === null && !gb18030) {
                return encoderError(code_point)
            }
            pointer = indexGB18030PointerFor(code_point);
            var byte1 = div(div(div(pointer, 10), 126), 10);
            pointer = pointer - byte1 * 10 * 126 * 10;
            var byte2 = div(div(pointer, 10), 126);
            pointer = pointer - byte2 * 10 * 126;
            var byte3 = div(pointer, 10);
            var byte4 = pointer - byte3 * 10;
            return output_byte_stream.emit(byte1 + 129, byte2 + 48, byte3 + 129, byte4 + 48)
        }
    }
    name_to_encoding["gbk"].getEncoder = function(options) {
        return new GBKEncoder(false, options)
    };
    name_to_encoding["gbk"].getDecoder = function(options) {
        return new GBKDecoder(false, options)
    };
    name_to_encoding["gb18030"].getEncoder = function(options) {
        return new GBKEncoder(true, options)
    };
    name_to_encoding["gb18030"].getDecoder = function(options) {
        return new GBKDecoder(true, options)
    };

    function HZGB2312Decoder(options) {
        var fatal = options.fatal;
        var hzgb2312 = false,
            hzgb2312_lead = 0;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite === EOF_byte && hzgb2312_lead === 0) {
                return EOF_code_point
            }
            if (bite === EOF_byte && hzgb2312_lead !== 0) {
                hzgb2312_lead = 0;
                return decoderError(fatal)
            }
            byte_pointer.offset(1);
            if (hzgb2312_lead === 126) {
                hzgb2312_lead = 0;
                if (bite === 123) {
                    hzgb2312 = true;
                    return null
                }
                if (bite === 125) {
                    hzgb2312 = false;
                    return null
                }
                if (bite === 126) {
                    return 126
                }
                if (bite === 10) {
                    return null
                }
                byte_pointer.offset(-1);
                return decoderError(fatal)
            }
            if (hzgb2312_lead !== 0) {
                var lead = hzgb2312_lead;
                hzgb2312_lead = 0;
                var code_point = null;
                if (inRange(bite, 33, 126)) {
                    code_point = indexCodePointFor((lead - 1) * 190 + (bite + 63), indexes["gbk"])
                }
                if (bite === 10) {
                    hzgb2312 = false
                }
                if (code_point === null) {
                    return decoderError(fatal)
                }
                return code_point
            }
            if (bite === 126) {
                hzgb2312_lead = 126;
                return null
            }
            if (hzgb2312) {
                if (inRange(bite, 32, 127)) {
                    hzgb2312_lead = bite;
                    return null
                }
                if (bite === 10) {
                    hzgb2312 = false
                }
                return decoderError(fatal)
            }
            if (inRange(bite, 0, 127)) {
                return bite
            }
            return decoderError(fatal)
        }
    }

    function HZGB2312Encoder(options) {
        var fatal = options.fatal;
        var hzgb2312 = false;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 0, 127) && hzgb2312) {
                code_point_pointer.offset(-1);
                hzgb2312 = false;
                return output_byte_stream.emit(126, 125)
            }
            if (code_point === 126) {
                return output_byte_stream.emit(126, 126)
            }
            if (inRange(code_point, 0, 127)) {
                return output_byte_stream.emit(code_point)
            }
            if (!hzgb2312) {
                code_point_pointer.offset(-1);
                hzgb2312 = true;
                return output_byte_stream.emit(126, 123)
            }
            var pointer = indexPointerFor(code_point, indexes["gbk"]);
            if (pointer === null) {
                return encoderError(code_point)
            }
            var lead = div(pointer, 190) + 1;
            var trail = pointer % 190 - 63;
            if (!inRange(lead, 33, 126) || !inRange(trail, 33, 126)) {
                return encoderError(code_point)
            }
            return output_byte_stream.emit(lead, trail)
        }
    }
    name_to_encoding["hz-gb-2312"].getEncoder = function(options) {
        return new HZGB2312Encoder(options)
    };
    name_to_encoding["hz-gb-2312"].getDecoder = function(options) {
        return new HZGB2312Decoder(options)
    };

    function Big5Decoder(options) {
        var fatal = options.fatal;
        var big5_lead = 0,
            big5_pending = null;
        this.decode = function(byte_pointer) {
            if (big5_pending !== null) {
                var pending = big5_pending;
                big5_pending = null;
                return pending
            }
            var bite = byte_pointer.get();
            if (bite === EOF_byte && big5_lead === 0) {
                return EOF_code_point
            }
            if (bite === EOF_byte && big5_lead !== 0) {
                big5_lead = 0;
                return decoderError(fatal)
            }
            byte_pointer.offset(1);
            if (big5_lead !== 0) {
                var lead = big5_lead;
                var pointer = null;
                big5_lead = 0;
                var offset = bite < 127 ? 64 : 98;
                if (inRange(bite, 64, 126) || inRange(bite, 161, 254)) {
                    pointer = (lead - 129) * 157 + (bite - offset)
                }
                if (pointer === 1133) {
                    big5_pending = 772;
                    return 202
                }
                if (pointer === 1135) {
                    big5_pending = 780;
                    return 202
                }
                if (pointer === 1164) {
                    big5_pending = 772;
                    return 234
                }
                if (pointer === 1166) {
                    big5_pending = 780;
                    return 234
                }
                var code_point = pointer === null ? null : indexCodePointFor(pointer, indexes["big5"]);
                if (pointer === null) {
                    byte_pointer.offset(-1)
                }
                if (code_point === null) {
                    return decoderError(fatal)
                }
                return code_point
            }
            if (inRange(bite, 0, 127)) {
                return bite
            }
            if (inRange(bite, 129, 254)) {
                big5_lead = bite;
                return null
            }
            return decoderError(fatal)
        }
    }

    function Big5Encoder(options) {
        var fatal = options.fatal;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 0, 127)) {
                return output_byte_stream.emit(code_point)
            }
            var pointer = indexPointerFor(code_point, indexes["big5"]);
            if (pointer === null) {
                return encoderError(code_point)
            }
            var lead = div(pointer, 157) + 129;
            var trail = pointer % 157;
            var offset = trail < 63 ? 64 : 98;
            return output_byte_stream.emit(lead, trail + offset)
        }
    }
    name_to_encoding["big5"].getEncoder = function(options) {
        return new Big5Encoder(options)
    };
    name_to_encoding["big5"].getDecoder = function(options) {
        return new Big5Decoder(options)
    };

    function EUCJPDecoder(options) {
        var fatal = options.fatal;
        var eucjp_first = 0,
            eucjp_second = 0;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite === EOF_byte) {
                if (eucjp_first === 0 && eucjp_second === 0) {
                    return EOF_code_point
                }
                eucjp_first = 0;
                eucjp_second = 0;
                return decoderError(fatal)
            }
            byte_pointer.offset(1);
            var lead, code_point;
            if (eucjp_second !== 0) {
                lead = eucjp_second;
                eucjp_second = 0;
                code_point = null;
                if (inRange(lead, 161, 254) && inRange(bite, 161, 254)) {
                    code_point = indexCodePointFor((lead - 161) * 94 + bite - 161, indexes["jis0212"])
                }
                if (!inRange(bite, 161, 254)) {
                    byte_pointer.offset(-1)
                }
                if (code_point === null) {
                    return decoderError(fatal)
                }
                return code_point
            }
            if (eucjp_first === 142 && inRange(bite, 161, 223)) {
                eucjp_first = 0;
                return 65377 + bite - 161
            }
            if (eucjp_first === 143 && inRange(bite, 161, 254)) {
                eucjp_first = 0;
                eucjp_second = bite;
                return null
            }
            if (eucjp_first !== 0) {
                lead = eucjp_first;
                eucjp_first = 0;
                code_point = null;
                if (inRange(lead, 161, 254) && inRange(bite, 161, 254)) {
                    code_point = indexCodePointFor((lead - 161) * 94 + bite - 161, indexes["jis0208"])
                }
                if (!inRange(bite, 161, 254)) {
                    byte_pointer.offset(-1)
                }
                if (code_point === null) {
                    return decoderError(fatal)
                }
                return code_point
            }
            if (inRange(bite, 0, 127)) {
                return bite
            }
            if (bite === 142 || bite === 143 || inRange(bite, 161, 254)) {
                eucjp_first = bite;
                return null
            }
            return decoderError(fatal)
        }
    }

    function EUCJPEncoder(options) {
        var fatal = options.fatal;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 0, 127)) {
                return output_byte_stream.emit(code_point)
            }
            if (code_point === 165) {
                return output_byte_stream.emit(92)
            }
            if (code_point === 8254) {
                return output_byte_stream.emit(126)
            }
            if (inRange(code_point, 65377, 65439)) {
                return output_byte_stream.emit(142, code_point - 65377 + 161)
            }
            var pointer = indexPointerFor(code_point, indexes["jis0208"]);
            if (pointer === null) {
                return encoderError(code_point)
            }
            var lead = div(pointer, 94) + 161;
            var trail = pointer % 94 + 161;
            return output_byte_stream.emit(lead, trail)
        }
    }
    name_to_encoding["euc-jp"].getEncoder = function(options) {
        return new EUCJPEncoder(options)
    };
    name_to_encoding["euc-jp"].getDecoder = function(options) {
        return new EUCJPDecoder(options)
    };

    function ISO2022JPDecoder(options) {
        var fatal = options.fatal;
        var state = {
            ASCII: 0,
            escape_start: 1,
            escape_middle: 2,
            escape_final: 3,
            lead: 4,
            trail: 5,
            Katakana: 6
        };
        var iso2022jp_state = state.ASCII,
            iso2022jp_jis0212 = false,
            iso2022jp_lead = 0;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite !== EOF_byte) {
                byte_pointer.offset(1)
            }
            switch (iso2022jp_state) {
                default:
                    case state.ASCII:
                    if (bite === 27) {
                    iso2022jp_state = state.escape_start;
                    return null
                }if (inRange(bite, 0, 127)) {
                    return bite
                }
                if (bite === EOF_byte) {
                    return EOF_code_point
                }
                return decoderError(fatal);
                case state.escape_start:
                        if (bite === 36 || bite === 40) {
                        iso2022jp_lead = bite;
                        iso2022jp_state = state.escape_middle;
                        return null
                    }if (bite !== EOF_byte) {
                        byte_pointer.offset(-1)
                    }
                    iso2022jp_state = state.ASCII;
                    return decoderError(fatal);
                case state.escape_middle:
                        var lead = iso2022jp_lead;iso2022jp_lead = 0;
                    if (lead === 36 && (bite === 64 || bite === 66)) {
                        iso2022jp_jis0212 = false;
                        iso2022jp_state = state.lead;
                        return null
                    }
                    if (lead === 36 && bite === 40) {
                        iso2022jp_state = state.escape_final;
                        return null
                    }
                    if (lead === 40 && (bite === 66 || bite === 74)) {
                        iso2022jp_state = state.ASCII;
                        return null
                    }
                    if (lead === 40 && bite === 73) {
                        iso2022jp_state = state.Katakana;
                        return null
                    }
                    if (bite === EOF_byte) {
                        byte_pointer.offset(-1)
                    } else {
                        byte_pointer.offset(-2)
                    }
                    iso2022jp_state = state.ASCII;
                    return decoderError(fatal);
                case state.escape_final:
                        if (bite === 68) {
                        iso2022jp_jis0212 = true;
                        iso2022jp_state = state.lead;
                        return null
                    }if (bite === EOF_byte) {
                        byte_pointer.offset(-2)
                    } else {
                        byte_pointer.offset(-3)
                    }
                    iso2022jp_state = state.ASCII;
                    return decoderError(fatal);
                case state.lead:
                        if (bite === 10) {
                        iso2022jp_state = state.ASCII;
                        return decoderError(fatal, 10)
                    }if (bite === 27) {
                        iso2022jp_state = state.escape_start;
                        return null
                    }
                    if (bite === EOF_byte) {
                        return EOF_code_point
                    }
                    iso2022jp_lead = bite;iso2022jp_state = state.trail;
                    return null;
                case state.trail:
                        iso2022jp_state = state.lead;
                    if (bite === EOF_byte) {
                        return decoderError(fatal)
                    }
                    var code_point = null;
                    var pointer = (iso2022jp_lead - 33) * 94 + bite - 33;
                    if (inRange(iso2022jp_lead, 33, 126) && inRange(bite, 33, 126)) {
                        code_point = iso2022jp_jis0212 === false ? indexCodePointFor(pointer, indexes["jis0208"]) : indexCodePointFor(pointer, indexes["jis0212"])
                    }
                    if (code_point === null) {
                        return decoderError(fatal)
                    }
                    return code_point;
                case state.Katakana:
                        if (bite === 27) {
                        iso2022jp_state = state.escape_start;
                        return null
                    }if (inRange(bite, 33, 95)) {
                        return 65377 + bite - 33
                    }
                    if (bite === EOF_byte) {
                        return EOF_code_point
                    }
                    return decoderError(fatal)
            }
        }
    }

    function ISO2022JPEncoder(options) {
        var fatal = options.fatal;
        var state = {
            ASCII: 0,
            lead: 1,
            Katakana: 2
        };
        var iso2022jp_state = state.ASCII;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if ((inRange(code_point, 0, 127) || code_point === 165 || code_point === 8254) && iso2022jp_state !== state.ASCII) {
                code_point_pointer.offset(-1);
                iso2022jp_state = state.ASCII;
                return output_byte_stream.emit(27, 40, 66)
            }
            if (inRange(code_point, 0, 127)) {
                return output_byte_stream.emit(code_point)
            }
            if (code_point === 165) {
                return output_byte_stream.emit(92)
            }
            if (code_point === 8254) {
                return output_byte_stream.emit(126)
            }
            if (inRange(code_point, 65377, 65439) && iso2022jp_state !== state.Katakana) {
                code_point_pointer.offset(-1);
                iso2022jp_state = state.Katakana;
                return output_byte_stream.emit(27, 40, 73)
            }
            if (inRange(code_point, 65377, 65439)) {
                return output_byte_stream.emit(code_point - 65377 - 33)
            }
            if (iso2022jp_state !== state.lead) {
                code_point_pointer.offset(-1);
                iso2022jp_state = state.lead;
                return output_byte_stream.emit(27, 36, 66)
            }
            var pointer = indexPointerFor(code_point, indexes["jis0208"]);
            if (pointer === null) {
                return encoderError(code_point)
            }
            var lead = div(pointer, 94) + 33;
            var trail = pointer % 94 + 33;
            return output_byte_stream.emit(lead, trail)
        }
    }
    name_to_encoding["iso-2022-jp"].getEncoder = function(options) {
        return new ISO2022JPEncoder(options)
    };
    name_to_encoding["iso-2022-jp"].getDecoder = function(options) {
        return new ISO2022JPDecoder(options)
    };

    function ShiftJISDecoder(options) {
        var fatal = options.fatal;
        var shiftjis_lead = 0;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite === EOF_byte && shiftjis_lead === 0) {
                return EOF_code_point
            }
            if (bite === EOF_byte && shiftjis_lead !== 0) {
                shiftjis_lead = 0;
                return decoderError(fatal)
            }
            byte_pointer.offset(1);
            if (shiftjis_lead !== 0) {
                var lead = shiftjis_lead;
                shiftjis_lead = 0;
                if (inRange(bite, 64, 126) || inRange(bite, 128, 252)) {
                    var offset = bite < 127 ? 64 : 65;
                    var lead_offset = lead < 160 ? 129 : 193;
                    var code_point = indexCodePointFor((lead - lead_offset) * 188 + bite - offset, indexes["jis0208"]);
                    if (code_point === null) {
                        return decoderError(fatal)
                    }
                    return code_point
                }
                byte_pointer.offset(-1);
                return decoderError(fatal)
            }
            if (inRange(bite, 0, 128)) {
                return bite
            }
            if (inRange(bite, 161, 223)) {
                return 65377 + bite - 161
            }
            if (inRange(bite, 129, 159) || inRange(bite, 224, 252)) {
                shiftjis_lead = bite;
                return null
            }
            return decoderError(fatal)
        }
    }

    function ShiftJISEncoder(options) {
        var fatal = options.fatal;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 0, 128)) {
                return output_byte_stream.emit(code_point)
            }
            if (code_point === 165) {
                return output_byte_stream.emit(92)
            }
            if (code_point === 8254) {
                return output_byte_stream.emit(126)
            }
            if (inRange(code_point, 65377, 65439)) {
                return output_byte_stream.emit(code_point - 65377 + 161)
            }
            var pointer = indexPointerFor(code_point, indexes["jis0208"]);
            if (pointer === null) {
                return encoderError(code_point)
            }
            var lead = div(pointer, 188);
            var lead_offset = lead < 31 ? 129 : 193;
            var trail = pointer % 188;
            var offset = trail < 63 ? 64 : 65;
            return output_byte_stream.emit(lead + lead_offset, trail + offset)
        }
    }
    name_to_encoding["shift_jis"].getEncoder = function(options) {
        return new ShiftJISEncoder(options)
    };
    name_to_encoding["shift_jis"].getDecoder = function(options) {
        return new ShiftJISDecoder(options)
    };

    function EUCKRDecoder(options) {
        var fatal = options.fatal;
        var euckr_lead = 0;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite === EOF_byte && euckr_lead === 0) {
                return EOF_code_point
            }
            if (bite === EOF_byte && euckr_lead !== 0) {
                euckr_lead = 0;
                return decoderError(fatal)
            }
            byte_pointer.offset(1);
            if (euckr_lead !== 0) {
                var lead = euckr_lead;
                var pointer = null;
                euckr_lead = 0;
                if (inRange(lead, 129, 198)) {
                    var temp = (26 + 26 + 126) * (lead - 129);
                    if (inRange(bite, 65, 90)) {
                        pointer = temp + bite - 65
                    } else if (inRange(bite, 97, 122)) {
                        pointer = temp + 26 + bite - 97
                    } else if (inRange(bite, 129, 254)) {
                        pointer = temp + 26 + 26 + bite - 129
                    }
                }
                if (inRange(lead, 199, 253) && inRange(bite, 161, 254)) {
                    pointer = (26 + 26 + 126) * (199 - 129) + (lead - 199) * 94 + (bite - 161)
                }
                var code_point = pointer === null ? null : indexCodePointFor(pointer, indexes["euc-kr"]);
                if (pointer === null) {
                    byte_pointer.offset(-1)
                }
                if (code_point === null) {
                    return decoderError(fatal)
                }
                return code_point
            }
            if (inRange(bite, 0, 127)) {
                return bite
            }
            if (inRange(bite, 129, 253)) {
                euckr_lead = bite;
                return null
            }
            return decoderError(fatal)
        }
    }

    function EUCKREncoder(options) {
        var fatal = options.fatal;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 0, 127)) {
                return output_byte_stream.emit(code_point)
            }
            var pointer = indexPointerFor(code_point, indexes["euc-kr"]);
            if (pointer === null) {
                return encoderError(code_point)
            }
            var lead, trail;
            if (pointer < (26 + 26 + 126) * (199 - 129)) {
                lead = div(pointer, 26 + 26 + 126) + 129;
                trail = pointer % (26 + 26 + 126);
                var offset = trail < 26 ? 65 : trail < 26 + 26 ? 71 : 77;
                return output_byte_stream.emit(lead, trail + offset)
            }
            pointer = pointer - (26 + 26 + 126) * (199 - 129);
            lead = div(pointer, 94) + 199;
            trail = pointer % 94 + 161;
            return output_byte_stream.emit(lead, trail)
        }
    }
    name_to_encoding["euc-kr"].getEncoder = function(options) {
        return new EUCKREncoder(options)
    };
    name_to_encoding["euc-kr"].getDecoder = function(options) {
        return new EUCKRDecoder(options)
    };

    function ISO2022KRDecoder(options) {
        var fatal = options.fatal;
        var state = {
            ASCII: 0,
            escape_start: 1,
            escape_middle: 2,
            escape_end: 3,
            lead: 4,
            trail: 5
        };
        var iso2022kr_state = state.ASCII,
            iso2022kr_lead = 0;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite !== EOF_byte) {
                byte_pointer.offset(1)
            }
            switch (iso2022kr_state) {
                default:
                    case state.ASCII:
                    if (bite === 14) {
                    iso2022kr_state = state.lead;
                    return null
                }if (bite === 15) {
                    return null
                }
                if (bite === 27) {
                    iso2022kr_state = state.escape_start;
                    return null
                }
                if (inRange(bite, 0, 127)) {
                    return bite
                }
                if (bite === EOF_byte) {
                    return EOF_code_point
                }
                return decoderError(fatal);
                case state.escape_start:
                        if (bite === 36) {
                        iso2022kr_state = state.escape_middle;
                        return null
                    }if (bite !== EOF_byte) {
                        byte_pointer.offset(-1)
                    }
                    iso2022kr_state = state.ASCII;
                    return decoderError(fatal);
                case state.escape_middle:
                        if (bite === 41) {
                        iso2022kr_state = state.escape_end;
                        return null
                    }if (bite === EOF_byte) {
                        byte_pointer.offset(-1)
                    } else {
                        byte_pointer.offset(-2)
                    }
                    iso2022kr_state = state.ASCII;
                    return decoderError(fatal);
                case state.escape_end:
                        if (bite === 67) {
                        iso2022kr_state = state.ASCII;
                        return null
                    }if (bite === EOF_byte) {
                        byte_pointer.offset(-2)
                    } else {
                        byte_pointer.offset(-3)
                    }
                    iso2022kr_state = state.ASCII;
                    return decoderError(fatal);
                case state.lead:
                        if (bite === 10) {
                        iso2022kr_state = state.ASCII;
                        return decoderError(fatal, 10)
                    }if (bite === 14) {
                        return null
                    }
                    if (bite === 15) {
                        iso2022kr_state = state.ASCII;
                        return null
                    }
                    if (bite === EOF_byte) {
                        return EOF_code_point
                    }
                    iso2022kr_lead = bite;iso2022kr_state = state.trail;
                    return null;
                case state.trail:
                        iso2022kr_state = state.lead;
                    if (bite === EOF_byte) {
                        return decoderError(fatal)
                    }
                    var code_point = null;
                    if (inRange(iso2022kr_lead, 33, 70) && inRange(bite, 33, 126)) {
                        code_point = indexCodePointFor((26 + 26 + 126) * (iso2022kr_lead - 1) + 26 + 26 + bite - 1, indexes["euc-kr"])
                    } else if (inRange(iso2022kr_lead, 71, 126) && inRange(bite, 33, 126)) {
                        code_point = indexCodePointFor((26 + 26 + 126) * (199 - 129) + (iso2022kr_lead - 71) * 94 + (bite - 33), indexes["euc-kr"])
                    }
                    if (code_point !== null) {
                        return code_point
                    }
                    return decoderError(fatal)
            }
        }
    }

    function ISO2022KREncoder(options) {
        var fatal = options.fatal;
        var state = {
            ASCII: 0,
            lead: 1
        };
        var iso2022kr_initialization = false,
            iso2022kr_state = state.ASCII;
        this.encode = function(output_byte_stream, code_point_pointer) {
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            if (!iso2022kr_initialization) {
                iso2022kr_initialization = true;
                output_byte_stream.emit(27, 36, 41, 67)
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 0, 127) && iso2022kr_state !== state.ASCII) {
                code_point_pointer.offset(-1);
                iso2022kr_state = state.ASCII;
                return output_byte_stream.emit(15)
            }
            if (inRange(code_point, 0, 127)) {
                return output_byte_stream.emit(code_point)
            }
            if (iso2022kr_state !== state.lead) {
                code_point_pointer.offset(-1);
                iso2022kr_state = state.lead;
                return output_byte_stream.emit(14)
            }
            var pointer = indexPointerFor(code_point, indexes["euc-kr"]);
            if (pointer === null) {
                return encoderError(code_point)
            }
            var lead, trail;
            if (pointer < (26 + 26 + 126) * (199 - 129)) {
                lead = div(pointer, 26 + 26 + 126) + 1;
                trail = pointer % (26 + 26 + 126) - 26 - 26 + 1;
                if (!inRange(lead, 33, 70) || !inRange(trail, 33, 126)) {
                    return encoderError(code_point)
                }
                return output_byte_stream.emit(lead, trail)
            }
            pointer = pointer - (26 + 26 + 126) * (199 - 129);
            lead = div(pointer, 94) + 71;
            trail = pointer % 94 + 33;
            if (!inRange(lead, 71, 126) || !inRange(trail, 33, 126)) {
                return encoderError(code_point)
            }
            return output_byte_stream.emit(lead, trail)
        }
    }
    name_to_encoding["iso-2022-kr"].getEncoder = function(options) {
        return new ISO2022KREncoder(options)
    };
    name_to_encoding["iso-2022-kr"].getDecoder = function(options) {
        return new ISO2022KRDecoder(options)
    };

    function UTF16Decoder(utf16_be, options) {
        var fatal = options.fatal;
        var utf16_lead_byte = null,
            utf16_lead_surrogate = null;
        this.decode = function(byte_pointer) {
            var bite = byte_pointer.get();
            if (bite === EOF_byte && utf16_lead_byte === null && utf16_lead_surrogate === null) {
                return EOF_code_point
            }
            if (bite === EOF_byte && (utf16_lead_byte !== null || utf16_lead_surrogate !== null)) {
                return decoderError(fatal)
            }
            byte_pointer.offset(1);
            if (utf16_lead_byte === null) {
                utf16_lead_byte = bite;
                return null
            }
            var code_point;
            if (utf16_be) {
                code_point = (utf16_lead_byte << 8) + bite
            } else {
                code_point = (bite << 8) + utf16_lead_byte
            }
            utf16_lead_byte = null;
            if (utf16_lead_surrogate !== null) {
                var lead_surrogate = utf16_lead_surrogate;
                utf16_lead_surrogate = null;
                if (inRange(code_point, 56320, 57343)) {
                    return 65536 + (lead_surrogate - 55296) * 1024 + (code_point - 56320)
                }
                byte_pointer.offset(-2);
                return decoderError(fatal)
            }
            if (inRange(code_point, 55296, 56319)) {
                utf16_lead_surrogate = code_point;
                return null
            }
            if (inRange(code_point, 56320, 57343)) {
                return decoderError(fatal)
            }
            return code_point
        }
    }

    function UTF16Encoder(utf16_be, options) {
        var fatal = options.fatal;
        this.encode = function(output_byte_stream, code_point_pointer) {
            function convert_to_bytes(code_unit) {
                var byte1 = code_unit >> 8;
                var byte2 = code_unit & 255;
                if (utf16_be) {
                    return output_byte_stream.emit(byte1, byte2)
                }
                return output_byte_stream.emit(byte2, byte1)
            }
            var code_point = code_point_pointer.get();
            if (code_point === EOF_code_point) {
                return EOF_byte
            }
            code_point_pointer.offset(1);
            if (inRange(code_point, 55296, 57343)) {
                encoderError(code_point)
            }
            if (code_point <= 65535) {
                return convert_to_bytes(code_point)
            }
            var lead = div(code_point - 65536, 1024) + 55296;
            var trail = (code_point - 65536) % 1024 + 56320;
            convert_to_bytes(lead);
            return convert_to_bytes(trail)
        }
    }
    name_to_encoding["utf-16"].getEncoder = function(options) {
        return new UTF16Encoder(false, options)
    };
    name_to_encoding["utf-16"].getDecoder = function(options) {
        return new UTF16Decoder(false, options)
    };
    name_to_encoding["utf-16be"].getEncoder = function(options) {
        return new UTF16Encoder(true, options)
    };
    name_to_encoding["utf-16be"].getDecoder = function(options) {
        return new UTF16Decoder(true, options)
    };

    function detectEncoding(label, input_stream) {
        if (input_stream.match([255, 254])) {
            input_stream.offset(2);
            return "utf-16"
        }
        if (input_stream.match([254, 255])) {
            input_stream.offset(2);
            return "utf-16be"
        }
        if (input_stream.match([239, 187, 191])) {
            input_stream.offset(3);
            return "utf-8"
        }
        return label
    }
    var DEFAULT_ENCODING = "utf-8";

    function TextEncoder(opt_encoding, options) {
        if (!this || this === global) {
            return new TextEncoder(opt_encoding, options)
        }
        opt_encoding = opt_encoding ? String(opt_encoding) : DEFAULT_ENCODING;
        options = Object(options);
        this._encoding = getEncoding(opt_encoding);
        this._streaming = false;
        this._encoder = null;
        this._options = {
            fatal: Boolean(options.fatal)
        };
        if (Object.defineProperty) {
            Object.defineProperty(this, "encoding", {
                get: function() {
                    return this._encoding.name
                }
            })
        } else {
            this.encoding = this._encoding.name
        }
        return this
    }
    TextEncoder.prototype = {
        encode: function encode(opt_string, options) {
            opt_string = opt_string ? String(opt_string) : "";
            options = Object(options);
            if (!this._streaming) {
                this._encoder = this._encoding.getEncoder(this._options)
            }
            this._streaming = Boolean(options.stream);
            var bytes = [];
            var output_stream = new ByteOutputStream(bytes);
            var input_stream = new CodePointInputStream(opt_string);
            while (input_stream.get() !== EOF_code_point) {
                this._encoder.encode(output_stream, input_stream)
            }
            if (!this._streaming) {
                var last_byte;
                do {
                    last_byte = this._encoder.encode(output_stream, input_stream)
                } while (last_byte !== EOF_byte);
                this._encoder = null
            }
            return new Uint8Array(bytes)
        }
    };

    function TextDecoder(opt_encoding, options) {
        if (!this || this === global) {
            return new TextDecoder(opt_encoding, options)
        }
        opt_encoding = opt_encoding ? String(opt_encoding) : DEFAULT_ENCODING;
        options = Object(options);
        this._encoding = getEncoding(opt_encoding);
        this._streaming = false;
        this._decoder = null;
        this._options = {
            fatal: Boolean(options.fatal)
        };
        if (Object.defineProperty) {
            Object.defineProperty(this, "encoding", {
                get: function() {
                    return this._encoding.name
                }
            })
        } else {
            this.encoding = this._encoding.name
        }
        return this
    }
    TextDecoder.prototype = {
        decode: function decode(opt_view, options) {
            if (opt_view && !("buffer" in opt_view && "byteOffset" in opt_view && "byteLength" in opt_view)) {
                throw new TypeError("Expected ArrayBufferView")
            } else if (!opt_view) {
                opt_view = new Uint8Array(0)
            }
            options = Object(options);
            if (!this._streaming) {
                this._decoder = this._encoding.getDecoder(this._options)
            }
            this._streaming = Boolean(options.stream);
            var bytes = new Uint8Array(opt_view.buffer, opt_view.byteOffset, opt_view.byteLength);
            var input_stream = new ByteInputStream(bytes);
            var detected = detectEncoding(this._encoding.name, input_stream);
            if (getEncoding(detected) !== this._encoding) {
                throw new Error("BOM mismatch")
            }
            var output_stream = new CodePointOutputStream,
                code_point;
            while (input_stream.get() !== EOF_byte) {
                code_point = this._decoder.decode(input_stream);
                if (code_point !== null && code_point !== EOF_code_point) {
                    output_stream.emit(code_point)
                }
            }
            if (!this._streaming) {
                do {
                    code_point = this._decoder.decode(input_stream);
                    if (code_point !== null && code_point !== EOF_code_point) {
                        output_stream.emit(code_point)
                    }
                } while (code_point !== EOF_code_point);
                this._decoder = null
            }
            return output_stream.string()
        }
    };
    global["TextEncoder"] = global["TextEncoder"] || TextEncoder;
    global["TextDecoder"] = global["TextDecoder"] || TextDecoder
})(this);
var MD5 = function() {
    this.hexcase = 0;
    this.b64pad = ""
};
MD5.prototype = {};
MD5.prototype.hex_md5 = function(s) {
    return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s)))
};
MD5.prototype.b64_md5 = function(s) {
    return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s)))
};
MD5.prototype.any_md5 = function(s, e) {
    return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e)
};
MD5.prototype.hex_hmac_md5 = function(k, d) {
    return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)))
};
MD5.prototype.b64_hmac_md5 = function(k, d) {
    return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)))
};
MD5.prototype.any_hmac_md5 = function(k, d, e) {
    return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e)
};
MD5.prototype.md5_vm_test = function() {
    return this.hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72"
};
MD5.prototype.rstr_md5 = function(s) {
    return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8))
};
MD5.prototype.rstr_hmac_md5 = function(key, data) {
    var bkey = this.rstr2binl(key);
    if (bkey.length > 16) bkey = this.binl_md5(bkey, key.length * 8);
    var ipad = Array(16),
        opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 909522486;
        opad[i] = bkey[i] ^ 1549556828
    }
    var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
    return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128))
};
MD5.prototype.rstr2hex = function(input) {
    try {
        this.hexcase
    } catch (e) {
        this.hexcase = 0
    }
    var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var output = "";
    var x;
    for (var i = 0; i < input.length; i++) {
        x = input.charCodeAt(i);
        output += hex_tab.charAt(x >>> 4 & 15) + hex_tab.charAt(x & 15)
    }
    return output
};
MD5.prototype.rstr2b64 = function(input) {
    try {
        this.b64pad
    } catch (e) {
        this.b64pad = ""
    }
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var output = "";
    var len = input.length;
    for (var i = 0; i < len; i += 3) {
        var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > input.length * 8) output += this.b64pad;
            else output += tab.charAt(triplet >>> 6 * (3 - j) & 63)
        }
    }
    return output
};
MD5.prototype.rstr2any = function(input, encoding) {
    var divisor = encoding.length;
    var i, j, q, x, quotient;
    var dividend = Array(Math.ceil(input.length / 2));
    for (i = 0; i < dividend.length; i++) {
        dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1)
    }
    var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
    var remainders = Array(full_length);
    for (j = 0; j < full_length; j++) {
        quotient = Array();
        x = 0;
        for (i = 0; i < dividend.length; i++) {
            x = (x << 16) + dividend[i];
            q = Math.floor(x / divisor);
            x -= q * divisor;
            if (quotient.length > 0 || q > 0) quotient[quotient.length] = q
        }
        remainders[j] = x;
        dividend = quotient
    }
    var output = "";
    for (i = remainders.length - 1; i >= 0; i--) output += encoding.charAt(remainders[i]);
    return output
};
MD5.prototype.str2rstr_utf8 = function(input) {
    var output = "";
    var i = -1;
    var x, y;
    while (++i < input.length) {
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (55296 <= x && x <= 56319 && 56320 <= y && y <= 57343) {
            x = 65536 + ((x & 1023) << 10) + (y & 1023);
            i++
        }
        if (x <= 127) output += String.fromCharCode(x);
        else if (x <= 2047) output += String.fromCharCode(192 | x >>> 6 & 31, 128 | x & 63);
        else if (x <= 65535) output += String.fromCharCode(224 | x >>> 12 & 15, 128 | x >>> 6 & 63, 128 | x & 63);
        else if (x <= 2097151) output += String.fromCharCode(240 | x >>> 18 & 7, 128 | x >>> 12 & 63, 128 | x >>> 6 & 63, 128 | x & 63)
    }
    return output
};
MD5.prototype.str2rstr_utf16le = function(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) output += String.fromCharCode(input.charCodeAt(i) & 255, input.charCodeAt(i) >>> 8 & 255);
    return output
};
MD5.prototype.str2rstr_utf16be = function(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 255, input.charCodeAt(i) & 255);
    return output
};
MD5.prototype.rstr2binl = function(input) {
    var output = Array(input.length >> 2);
    for (var i = 0; i < output.length; i++) output[i] = 0;
    for (var i = 0; i < input.length * 8; i += 8) output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
    return output
};
MD5.prototype.binl2rstr = function(input) {
    var output = "";
    for (var i = 0; i < input.length * 32; i += 8) output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
    return output
};
MD5.prototype.binl_md5 = function(x, len) {
    x[len >> 5] |= 128 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = this.safe_add(a, olda);
        b = this.safe_add(b, oldb);
        c = this.safe_add(c, oldc);
        d = this.safe_add(d, oldd)
    }
    return Array(a, b, c, d)
};
MD5.prototype.md5_cmn = function(q, a, b, x, s, t) {
    return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b)
};
MD5.prototype.md5_ff = function(a, b, c, d, x, s, t) {
    return this.md5_cmn(b & c | ~b & d, a, b, x, s, t)
};
MD5.prototype.md5_gg = function(a, b, c, d, x, s, t) {
    return this.md5_cmn(b & d | c & ~d, a, b, x, s, t)
};
MD5.prototype.md5_hh = function(a, b, c, d, x, s, t) {
    return this.md5_cmn(b ^ c ^ d, a, b, x, s, t)
};
MD5.prototype.md5_ii = function(a, b, c, d, x, s, t) {
    return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t)
};
MD5.prototype.safe_add = function(x, y) {
    var lsw = (x & 65535) + (y & 65535);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535
};
MD5.prototype.bit_rol = function(num, cnt) {
    return num << cnt | num >>> 32 - cnt
};
(function() {
    "use strict";

    function l(d) {
        throw d
    }
    var v = void 0,
        x = !0,
        aa = this;

    function D(d, a) {
        var c = d.split("."),
            e = aa;
        !(c[0] in e) && e.execScript && e.execScript("var " + c[0]);
        for (var b; c.length && (b = c.shift());) !c.length && a !== v ? e[b] = a : e = e[b] ? e[b] : e[b] = {}
    }
    var F = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array && "undefined" !== typeof DataView;

    function H(d, a) {
        this.index = "number" === typeof a ? a : 0;
        this.i = 0;
        this.buffer = d instanceof(F ? Uint8Array : Array) ? d : new(F ? Uint8Array : Array)(32768);
        2 * this.buffer.length <= this.index && l(Error("invalid index"));
        this.buffer.length <= this.index && this.f()
    }
    H.prototype.f = function() {
        var d = this.buffer,
            a, c = d.length,
            e = new(F ? Uint8Array : Array)(c << 1);
        if (F) e.set(d);
        else
            for (a = 0; a < c; ++a) e[a] = d[a];
        return this.buffer = e
    };
    H.prototype.d = function(d, a, c) {
        var e = this.buffer,
            b = this.index,
            f = this.i,
            g = e[b],
            h;
        c && 1 < a && (d = 8 < a ? (N[d & 255] << 24 | N[d >>> 8 & 255] << 16 | N[d >>> 16 & 255] << 8 | N[d >>> 24 & 255]) >> 32 - a : N[d] >> 8 - a);
        if (8 > a + f) g = g << a | d, f += a;
        else
            for (h = 0; h < a; ++h) g = g << 1 | d >> a - h - 1 & 1, 8 === ++f && (f = 0, e[b++] = N[g], g = 0, b === e.length && (e = this.f()));
        e[b] = g;
        this.buffer = e;
        this.i = f;
        this.index = b
    };
    H.prototype.finish = function() {
        var d = this.buffer,
            a = this.index,
            c;
        0 < this.i && (d[a] <<= 8 - this.i, d[a] = N[d[a]], a++);
        F ? c = d.subarray(0, a) : (d.length = a, c = d);
        return c
    };
    var fa = new(F ? Uint8Array : Array)(256),
        O;
    for (O = 0; 256 > O; ++O) {
        for (var P = O, Q = P, ga = 7, P = P >>> 1; P; P >>>= 1) Q <<= 1, Q |= P & 1, --ga;
        fa[O] = (Q << ga & 255) >>> 0
    }
    var N = fa;

    function ha(d) {
        this.buffer = new(F ? Uint16Array : Array)(2 * d);
        this.length = 0
    }
    ha.prototype.getParent = function(d) {
        return 2 * ((d - 2) / 4 | 0)
    };
    ha.prototype.push = function(d, a) {
        var c, e, b = this.buffer,
            f;
        c = this.length;
        b[this.length++] = a;
        for (b[this.length++] = d; 0 < c;)
            if (e = this.getParent(c), b[c] > b[e]) f = b[c], b[c] = b[e], b[e] = f, f = b[c + 1], b[c + 1] = b[e + 1], b[e + 1] = f, c = e;
            else break;
        return this.length
    };
    ha.prototype.pop = function() {
        var d, a, c = this.buffer,
            e, b, f;
        a = c[0];
        d = c[1];
        this.length -= 2;
        c[0] = c[this.length];
        c[1] = c[this.length + 1];
        for (f = 0;;) {
            b = 2 * f + 2;
            if (b >= this.length) break;
            b + 2 < this.length && c[b + 2] > c[b] && (b += 2);
            if (c[b] > c[f]) e = c[f], c[f] = c[b], c[b] = e, e = c[f + 1], c[f + 1] = c[b + 1], c[b + 1] = e;
            else break;
            f = b
        }
        return {
            index: d,
            value: a,
            length: this.length
        }
    };

    function R(d) {
        var a = d.length,
            c = 0,
            e = Number.POSITIVE_INFINITY,
            b, f, g, h, k, n, q, r, p, m;
        for (r = 0; r < a; ++r) d[r] > c && (c = d[r]), d[r] < e && (e = d[r]);
        b = 1 << c;
        f = new(F ? Uint32Array : Array)(b);
        g = 1;
        h = 0;
        for (k = 2; g <= c;) {
            for (r = 0; r < a; ++r)
                if (d[r] === g) {
                    n = 0;
                    q = h;
                    for (p = 0; p < g; ++p) n = n << 1 | q & 1, q >>= 1;
                    m = g << 16 | r;
                    for (p = n; p < b; p += k) f[p] = m;
                    ++h
                }++g;
            h <<= 1;
            k <<= 1
        }
        return [f, c, e]
    }

    function ia(d, a) {
        this.h = ma;
        this.w = 0;
        this.input = F && d instanceof Array ? new Uint8Array(d) : d;
        this.b = 0;
        a && (a.lazy && (this.w = a.lazy), "number" === typeof a.compressionType && (this.h = a.compressionType), a.outputBuffer && (this.a = F && a.outputBuffer instanceof Array ? new Uint8Array(a.outputBuffer) : a.outputBuffer), "number" === typeof a.outputIndex && (this.b = a.outputIndex));
        this.a || (this.a = new(F ? Uint8Array : Array)(32768))
    }
    var ma = 2,
        na = {
            NONE: 0,
            r: 1,
            k: ma,
            O: 3
        },
        oa = [],
        S;
    for (S = 0; 288 > S; S++) switch (x) {
        case 143 >= S:
            oa.push([S + 48, 8]);
            break;
        case 255 >= S:
            oa.push([S - 144 + 400, 9]);
            break;
        case 279 >= S:
            oa.push([S - 256 + 0, 7]);
            break;
        case 287 >= S:
            oa.push([S - 280 + 192, 8]);
            break;
        default:
            l("invalid literal: " + S)
    }
    ia.prototype.j = function() {
        var d, a, c, e, b = this.input;
        switch (this.h) {
            case 0:
                c = 0;
                for (e = b.length; c < e;) {
                    a = F ? b.subarray(c, c + 65535) : b.slice(c, c + 65535);
                    c += a.length;
                    var f = a,
                        g = c === e,
                        h = v,
                        k = v,
                        n = v,
                        q = v,
                        r = v,
                        p = this.a,
                        m = this.b;
                    if (F) {
                        for (p = new Uint8Array(this.a.buffer); p.length <= m + f.length + 5;) p = new Uint8Array(p.length << 1);
                        p.set(this.a)
                    }
                    h = g ? 1 : 0;
                    p[m++] = h | 0;
                    k = f.length;
                    n = ~k + 65536 & 65535;
                    p[m++] = k & 255;
                    p[m++] = k >>> 8 & 255;
                    p[m++] = n & 255;
                    p[m++] = n >>> 8 & 255;
                    if (F) p.set(f, m), m += f.length, p = p.subarray(0, m);
                    else {
                        q = 0;
                        for (r = f.length; q < r; ++q) p[m++] = f[q];
                        p.length = m
                    }
                    this.b = m;
                    this.a = p
                }
                break;
            case 1:
                var s = new H(F ? new Uint8Array(this.a.buffer) : this.a, this.b);
                s.d(1, 1, x);
                s.d(1, 2, x);
                var w = pa(this, b),
                    y, ja, A;
                y = 0;
                for (ja = w.length; y < ja; y++)
                    if (A = w[y], H.prototype.d.apply(s, oa[A]), 256 < A) s.d(w[++y], w[++y], x), s.d(w[++y], 5), s.d(w[++y], w[++y], x);
                    else if (256 === A) break;
                this.a = s.finish();
                this.b = this.a.length;
                break;
            case ma:
                var C = new H(F ? new Uint8Array(this.a.buffer) : this.a, this.b),
                    Ea, M, U, V, W, gb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    ba, Fa, ca, Ga, ka, ra = Array(19),
                    Ha, X, la, z, Ia;
                Ea = ma;
                C.d(1, 1, x);
                C.d(Ea, 2, x);
                M = pa(this, b);
                ba = qa(this.M, 15);
                Fa = sa(ba);
                ca = qa(this.L, 7);
                Ga = sa(ca);
                for (U = 286; 257 < U && 0 === ba[U - 1]; U--);
                for (V = 30; 1 < V && 0 === ca[V - 1]; V--);
                var Ja = U,
                    Ka = V,
                    I = new(F ? Uint32Array : Array)(Ja + Ka),
                    t, J, u, da, G = new(F ? Uint32Array : Array)(316),
                    E, B, K = new(F ? Uint8Array : Array)(19);
                for (t = J = 0; t < Ja; t++) I[J++] = ba[t];
                for (t = 0; t < Ka; t++) I[J++] = ca[t];
                if (!F) {
                    t = 0;
                    for (da = K.length; t < da; ++t) K[t] = 0
                }
                t = E = 0;
                for (da = I.length; t < da; t += J) {
                    for (J = 1; t + J < da && I[t + J] === I[t]; ++J);
                    u = J;
                    if (0 === I[t])
                        if (3 > u)
                            for (; 0 < u--;) G[E++] = 0, K[0]++;
                        else
                            for (; 0 < u;) B = 138 > u ? u : 138, B > u - 3 && B < u && (B = u - 3), 10 >= B ? (G[E++] = 17, G[E++] = B - 3, K[17]++) : (G[E++] = 18, G[E++] = B - 11, K[18]++), u -= B;
                    else if (G[E++] = I[t], K[I[t]]++, u--, 3 > u)
                        for (; 0 < u--;) G[E++] = I[t], K[I[t]]++;
                    else
                        for (; 0 < u;) B = 6 > u ? u : 6, B > u - 3 && B < u && (B = u - 3), G[E++] = 16, G[E++] = B - 3, K[16]++, u -= B
                }
                d = F ? G.subarray(0, E) : G.slice(0, E);
                ka = qa(K, 7);
                for (z = 0; 19 > z; z++) ra[z] = ka[gb[z]];
                for (W = 19; 4 < W && 0 === ra[W - 1]; W--);
                Ha = sa(ka);
                C.d(U - 257, 5, x);
                C.d(V - 1, 5, x);
                C.d(W - 4, 4, x);
                for (z = 0; z < W; z++) C.d(ra[z], 3, x);
                z = 0;
                for (Ia = d.length; z < Ia; z++)
                    if (X = d[z], C.d(Ha[X], ka[X], x), 16 <= X) {
                        z++;
                        switch (X) {
                            case 16:
                                la = 2;
                                break;
                            case 17:
                                la = 3;
                                break;
                            case 18:
                                la = 7;
                                break;
                            default:
                                l("invalid code: " + X)
                        }
                        C.d(d[z], la, x)
                    }
                var La = [Fa, ba],
                    Ma = [Ga, ca],
                    L, Na, ea, ua, Oa, Pa, Qa, Ra;
                Oa = La[0];
                Pa = La[1];
                Qa = Ma[0];
                Ra = Ma[1];
                L = 0;
                for (Na = M.length; L < Na; ++L)
                    if (ea = M[L], C.d(Oa[ea], Pa[ea], x), 256 < ea) C.d(M[++L], M[++L], x), ua = M[++L], C.d(Qa[ua], Ra[ua], x), C.d(M[++L], M[++L], x);
                    else if (256 === ea) break;
                this.a = C.finish();
                this.b = this.a.length;
                break;
            default:
                l("invalid compression type")
        }
        return this.a
    };

    function ta(d, a) {
        this.length = d;
        this.H = a
    }
    var va = function() {
            function d(b) {
                switch (x) {
                    case 3 === b:
                        return [257, b - 3, 0];
                    case 4 === b:
                        return [258, b - 4, 0];
                    case 5 === b:
                        return [259, b - 5, 0];
                    case 6 === b:
                        return [260, b - 6, 0];
                    case 7 === b:
                        return [261, b - 7, 0];
                    case 8 === b:
                        return [262, b - 8, 0];
                    case 9 === b:
                        return [263, b - 9, 0];
                    case 10 === b:
                        return [264, b - 10, 0];
                    case 12 >= b:
                        return [265, b - 11, 1];
                    case 14 >= b:
                        return [266, b - 13, 1];
                    case 16 >= b:
                        return [267, b - 15, 1];
                    case 18 >= b:
                        return [268, b - 17, 1];
                    case 22 >= b:
                        return [269, b - 19, 2];
                    case 26 >= b:
                        return [270, b - 23, 2];
                    case 30 >= b:
                        return [271, b - 27, 2];
                    case 34 >= b:
                        return [272, b - 31, 2];
                    case 42 >= b:
                        return [273, b - 35, 3];
                    case 50 >= b:
                        return [274, b - 43, 3];
                    case 58 >= b:
                        return [275, b - 51, 3];
                    case 66 >= b:
                        return [276, b - 59, 3];
                    case 82 >= b:
                        return [277, b - 67, 4];
                    case 98 >= b:
                        return [278, b - 83, 4];
                    case 114 >= b:
                        return [279, b - 99, 4];
                    case 130 >= b:
                        return [280, b - 115, 4];
                    case 162 >= b:
                        return [281, b - 131, 5];
                    case 194 >= b:
                        return [282, b - 163, 5];
                    case 226 >= b:
                        return [283, b - 195, 5];
                    case 257 >= b:
                        return [284, b - 227, 5];
                    case 258 === b:
                        return [285, b - 258, 0];
                    default:
                        l("invalid length: " + b)
                }
            }
            var a = [],
                c, e;
            for (c = 3; 258 >= c; c++) e = d(c), a[c] = e[2] << 24 | e[1] << 16 | e[0];
            return a
        }(),
        wa = F ? new Uint32Array(va) : va;

    function pa(d, a) {
        function c(b, c) {
            var a = b.H,
                d = [],
                e = 0,
                f;
            f = wa[b.length];
            d[e++] = f & 65535;
            d[e++] = f >> 16 & 255;
            d[e++] = f >> 24;
            var g;
            switch (x) {
                case 1 === a:
                    g = [0, a - 1, 0];
                    break;
                case 2 === a:
                    g = [1, a - 2, 0];
                    break;
                case 3 === a:
                    g = [2, a - 3, 0];
                    break;
                case 4 === a:
                    g = [3, a - 4, 0];
                    break;
                case 6 >= a:
                    g = [4, a - 5, 1];
                    break;
                case 8 >= a:
                    g = [5, a - 7, 1];
                    break;
                case 12 >= a:
                    g = [6, a - 9, 2];
                    break;
                case 16 >= a:
                    g = [7, a - 13, 2];
                    break;
                case 24 >= a:
                    g = [8, a - 17, 3];
                    break;
                case 32 >= a:
                    g = [9, a - 25, 3];
                    break;
                case 48 >= a:
                    g = [10, a - 33, 4];
                    break;
                case 64 >= a:
                    g = [11, a - 49, 4];
                    break;
                case 96 >= a:
                    g = [12, a - 65, 5];
                    break;
                case 128 >= a:
                    g = [13, a - 97, 5];
                    break;
                case 192 >= a:
                    g = [14, a - 129, 6];
                    break;
                case 256 >= a:
                    g = [15, a - 193, 6];
                    break;
                case 384 >= a:
                    g = [16, a - 257, 7];
                    break;
                case 512 >= a:
                    g = [17, a - 385, 7];
                    break;
                case 768 >= a:
                    g = [18, a - 513, 8];
                    break;
                case 1024 >= a:
                    g = [19, a - 769, 8];
                    break;
                case 1536 >= a:
                    g = [20, a - 1025, 9];
                    break;
                case 2048 >= a:
                    g = [21, a - 1537, 9];
                    break;
                case 3072 >= a:
                    g = [22, a - 2049, 10];
                    break;
                case 4096 >= a:
                    g = [23, a - 3073, 10];
                    break;
                case 6144 >= a:
                    g = [24, a - 4097, 11];
                    break;
                case 8192 >= a:
                    g = [25, a - 6145, 11];
                    break;
                case 12288 >= a:
                    g = [26, a - 8193, 12];
                    break;
                case 16384 >= a:
                    g = [27, a - 12289, 12];
                    break;
                case 24576 >= a:
                    g = [28, a - 16385, 13];
                    break;
                case 32768 >= a:
                    g = [29, a - 24577, 13];
                    break;
                default:
                    l("invalid distance")
            }
            f = g;
            d[e++] = f[0];
            d[e++] = f[1];
            d[e++] = f[2];
            var h, k;
            h = 0;
            for (k = d.length; h < k; ++h) p[m++] = d[h];
            w[d[0]]++;
            y[d[3]]++;
            s = b.length + c - 1;
            r = null
        }
        var e, b, f, g, h, k = {},
            n, q, r, p = F ? new Uint16Array(2 * a.length) : [],
            m = 0,
            s = 0,
            w = new(F ? Uint32Array : Array)(286),
            y = new(F ? Uint32Array : Array)(30),
            ja = d.w,
            A;
        if (!F) {
            for (f = 0; 285 >= f;) w[f++] = 0;
            for (f = 0; 29 >= f;) y[f++] = 0
        }
        w[256] = 1;
        e = 0;
        for (b = a.length; e < b; ++e) {
            f = h = 0;
            for (g = 3; f < g && e + f !== b; ++f) h = h << 8 | a[e + f];
            k[h] === v && (k[h] = []);
            n = k[h];
            if (!(0 < s--)) {
                for (; 0 < n.length && 32768 < e - n[0];) n.shift();
                if (e + 3 >= b) {
                    r && c(r, -1);
                    f = 0;
                    for (g = b - e; f < g; ++f) A = a[e + f], p[m++] = A, ++w[A];
                    break
                }
                0 < n.length ? (q = xa(a, e, n), r ? r.length < q.length ? (A = a[e - 1], p[m++] = A, ++w[A], c(q, 0)) : c(r, -1) : q.length < ja ? r = q : c(q, 0)) : r ? c(r, -1) : (A = a[e], p[m++] = A, ++w[A])
            }
            n.push(e)
        }
        p[m++] = 256;
        w[256]++;
        d.M = w;
        d.L = y;
        return F ? p.subarray(0, m) : p
    }

    function xa(d, a, c) {
        var e, b, f = 0,
            g, h, k, n, q = d.length;
        h = 0;
        n = c.length;
        a: for (; h < n; h++) {
            e = c[n - h - 1];
            g = 3;
            if (3 < f) {
                for (k = f; 3 < k; k--)
                    if (d[e + k - 1] !== d[a + k - 1]) continue a;
                g = f
            }
            for (; 258 > g && a + g < q && d[e + g] === d[a + g];) ++g;
            g > f && (b = e, f = g);
            if (258 === g) break
        }
        return new ta(f, a - b)
    }

    function qa(d, a) {
        var c = d.length,
            e = new ha(572),
            b = new(F ? Uint8Array : Array)(c),
            f, g, h, k, n;
        if (!F)
            for (k = 0; k < c; k++) b[k] = 0;
        for (k = 0; k < c; ++k) 0 < d[k] && e.push(k, d[k]);
        f = Array(e.length / 2);
        g = new(F ? Uint32Array : Array)(e.length / 2);
        if (1 === f.length) return b[e.pop().index] = 1, b;
        k = 0;
        for (n = e.length / 2; k < n; ++k) f[k] = e.pop(), g[k] = f[k].value;
        h = ya(g, g.length, a);
        k = 0;
        for (n = f.length; k < n; ++k) b[f[k].index] = h[k];
        return b
    }

    function ya(d, a, c) {
        function e(b) {
            var c = k[b][n[b]];
            c === a ? (e(b + 1), e(b + 1)) : --g[c];
            ++n[b]
        }
        var b = new(F ? Uint16Array : Array)(c),
            f = new(F ? Uint8Array : Array)(c),
            g = new(F ? Uint8Array : Array)(a),
            h = Array(c),
            k = Array(c),
            n = Array(c),
            q = (1 << c) - a,
            r = 1 << c - 1,
            p, m, s, w, y;
        b[c - 1] = a;
        for (m = 0; m < c; ++m) q < r ? f[m] = 0 : (f[m] = 1, q -= r), q <<= 1, b[c - 2 - m] = (b[c - 1 - m] / 2 | 0) + a;
        b[0] = f[0];
        h[0] = Array(b[0]);
        k[0] = Array(b[0]);
        for (m = 1; m < c; ++m) b[m] > 2 * b[m - 1] + f[m] && (b[m] = 2 * b[m - 1] + f[m]), h[m] = Array(b[m]), k[m] = Array(b[m]);
        for (p = 0; p < a; ++p) g[p] = c;
        for (s = 0; s < b[c - 1]; ++s) h[c - 1][s] = d[s], k[c - 1][s] = s;
        for (p = 0; p < c; ++p) n[p] = 0;
        1 === f[c - 1] && (--g[0], ++n[c - 1]);
        for (m = c - 2; 0 <= m; --m) {
            w = p = 0;
            y = n[m + 1];
            for (s = 0; s < b[m]; s++) w = h[m + 1][y] + h[m + 1][y + 1], w > d[p] ? (h[m][s] = w, k[m][s] = a, y += 2) : (h[m][s] = d[p], k[m][s] = p, ++p);
            n[m] = 0;
            1 === f[m] && e(m)
        }
        return g
    }

    function sa(d) {
        var a = new(F ? Uint16Array : Array)(d.length),
            c = [],
            e = [],
            b = 0,
            f, g, h, k;
        f = 0;
        for (g = d.length; f < g; f++) c[d[f]] = (c[d[f]] | 0) + 1;
        f = 1;
        for (g = 16; f <= g; f++) e[f] = b, b += c[f] | 0, b <<= 1;
        f = 0;
        for (g = d.length; f < g; f++) {
            b = e[d[f]];
            e[d[f]] += 1;
            h = a[f] = 0;
            for (k = d[f]; h < k; h++) a[f] = a[f] << 1 | b & 1, b >>>= 1
        }
        return a
    }

    function T(d, a) {
        this.l = [];
        this.m = 32768;
        this.e = this.g = this.c = this.q = 0;
        this.input = F ? new Uint8Array(d) : d;
        this.s = !1;
        this.n = za;
        this.C = !1;
        if (a || !(a = {})) a.index && (this.c = a.index), a.bufferSize && (this.m = a.bufferSize), a.bufferType && (this.n = a.bufferType), a.resize && (this.C = a.resize);
        switch (this.n) {
            case Aa:
                this.b = 32768;
                this.a = new(F ? Uint8Array : Array)(32768 + this.m + 258);
                break;
            case za:
                this.b = 0;
                this.a = new(F ? Uint8Array : Array)(this.m);
                this.f = this.K;
                this.t = this.I;
                this.o = this.J;
                break;
            default:
                l(Error("invalid inflate mode"))
        }
    }
    var Aa = 0,
        za = 1,
        Ba = {
            F: Aa,
            D: za
        };
    T.prototype.p = function() {
        for (; !this.s;) {
            var d = Y(this, 3);
            d & 1 && (this.s = x);
            d >>>= 1;
            switch (d) {
                case 0:
                    var a = this.input,
                        c = this.c,
                        e = this.a,
                        b = this.b,
                        f = a.length,
                        g = v,
                        h = v,
                        k = e.length,
                        n = v;
                    this.e = this.g = 0;
                    c + 1 >= f && l(Error("invalid uncompressed block header: LEN"));
                    g = a[c++] | a[c++] << 8;
                    c + 1 >= f && l(Error("invalid uncompressed block header: NLEN"));
                    h = a[c++] | a[c++] << 8;
                    g === ~h && l(Error("invalid uncompressed block header: length verify"));
                    c + g > a.length && l(Error("input buffer is broken"));
                    switch (this.n) {
                        case Aa:
                            for (; b + g > e.length;) {
                                n = k - b;
                                g -= n;
                                if (F) e.set(a.subarray(c, c + n), b), b += n, c += n;
                                else
                                    for (; n--;) e[b++] = a[c++];
                                this.b = b;
                                e = this.f();
                                b = this.b
                            }
                            break;
                        case za:
                            for (; b + g > e.length;) e = this.f({
                                v: 2
                            });
                            break;
                        default:
                            l(Error("invalid inflate mode"))
                    }
                    if (F) e.set(a.subarray(c, c + g), b), b += g, c += g;
                    else
                        for (; g--;) e[b++] = a[c++];
                    this.c = c;
                    this.b = b;
                    this.a = e;
                    break;
                case 1:
                    this.o(Ca, Da);
                    break;
                case 2:
                    Sa(this);
                    break;
                default:
                    l(Error("unknown BTYPE: " + d))
            }
        }
        return this.t()
    };
    var Ta = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        Ua = F ? new Uint16Array(Ta) : Ta,
        Va = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
        Wa = F ? new Uint16Array(Va) : Va,
        Xa = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
        Ya = F ? new Uint8Array(Xa) : Xa,
        Za = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
        $a = F ? new Uint16Array(Za) : Za,
        ab = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        bb = F ? new Uint8Array(ab) : ab,
        cb = new(F ? Uint8Array : Array)(288),
        Z, db;
    Z = 0;
    for (db = cb.length; Z < db; ++Z) cb[Z] = 143 >= Z ? 8 : 255 >= Z ? 9 : 279 >= Z ? 7 : 8;
    var Ca = R(cb),
        eb = new(F ? Uint8Array : Array)(30),
        fb, hb;
    fb = 0;
    for (hb = eb.length; fb < hb; ++fb) eb[fb] = 5;
    var Da = R(eb);

    function Y(d, a) {
        for (var c = d.g, e = d.e, b = d.input, f = d.c, g = b.length, h; e < a;) f >= g && l(Error("input buffer is broken")), c |= b[f++] << e, e += 8;
        h = c & (1 << a) - 1;
        d.g = c >>> a;
        d.e = e - a;
        d.c = f;
        return h
    }

    function ib(d, a) {
        for (var c = d.g, e = d.e, b = d.input, f = d.c, g = b.length, h = a[0], k = a[1], n, q; e < k && !(f >= g);) c |= b[f++] << e, e += 8;
        n = h[c & (1 << k) - 1];
        q = n >>> 16;
        d.g = c >> q;
        d.e = e - q;
        d.c = f;
        return n & 65535
    }

    function Sa(d) {
        function a(a, b, c) {
            var d, e = this.z,
                f, g;
            for (g = 0; g < a;) switch (d = ib(this, b), d) {
                case 16:
                    for (f = 3 + Y(this, 2); f--;) c[g++] = e;
                    break;
                case 17:
                    for (f = 3 + Y(this, 3); f--;) c[g++] = 0;
                    e = 0;
                    break;
                case 18:
                    for (f = 11 + Y(this, 7); f--;) c[g++] = 0;
                    e = 0;
                    break;
                default:
                    e = c[g++] = d
            }
            this.z = e;
            return c
        }
        var c = Y(d, 5) + 257,
            e = Y(d, 5) + 1,
            b = Y(d, 4) + 4,
            f = new(F ? Uint8Array : Array)(Ua.length),
            g, h, k, n;
        for (n = 0; n < b; ++n) f[Ua[n]] = Y(d, 3);
        if (!F) {
            n = b;
            for (b = f.length; n < b; ++n) f[Ua[n]] = 0
        }
        g = R(f);
        h = new(F ? Uint8Array : Array)(c);
        k = new(F ? Uint8Array : Array)(e);
        d.z = 0;
        d.o(R(a.call(d, c, g, h)), R(a.call(d, e, g, k)))
    }
    T.prototype.o = function(d, a) {
        var c = this.a,
            e = this.b;
        this.u = d;
        for (var b = c.length - 258, f, g, h, k; 256 !== (f = ib(this, d));)
            if (256 > f) e >= b && (this.b = e, c = this.f(), e = this.b), c[e++] = f;
            else {
                g = f - 257;
                k = Wa[g];
                0 < Ya[g] && (k += Y(this, Ya[g]));
                f = ib(this, a);
                h = $a[f];
                0 < bb[f] && (h += Y(this, bb[f]));
                e >= b && (this.b = e, c = this.f(), e = this.b);
                for (; k--;) c[e] = c[e++ - h]
            }
        for (; 8 <= this.e;) this.e -= 8, this.c--;
        this.b = e
    };
    T.prototype.J = function(d, a) {
        var c = this.a,
            e = this.b;
        this.u = d;
        for (var b = c.length, f, g, h, k; 256 !== (f = ib(this, d));)
            if (256 > f) e >= b && (c = this.f(), b = c.length), c[e++] = f;
            else {
                g = f - 257;
                k = Wa[g];
                0 < Ya[g] && (k += Y(this, Ya[g]));
                f = ib(this, a);
                h = $a[f];
                0 < bb[f] && (h += Y(this, bb[f]));
                e + k > b && (c = this.f(), b = c.length);
                for (; k--;) c[e] = c[e++ - h]
            }
        for (; 8 <= this.e;) this.e -= 8, this.c--;
        this.b = e
    };
    T.prototype.f = function() {
        var d = new(F ? Uint8Array : Array)(this.b - 32768),
            a = this.b - 32768,
            c, e, b = this.a;
        if (F) d.set(b.subarray(32768, d.length));
        else {
            c = 0;
            for (e = d.length; c < e; ++c) d[c] = b[c + 32768]
        }
        this.l.push(d);
        this.q += d.length;
        if (F) b.set(b.subarray(a, a + 32768));
        else
            for (c = 0; 32768 > c; ++c) b[c] = b[a + c];
        this.b = 32768;
        return b
    };
    T.prototype.K = function(d) {
        var a, c = this.input.length / this.c + 1 | 0,
            e, b, f, g = this.input,
            h = this.a;
        d && ("number" === typeof d.v && (c = d.v), "number" === typeof d.G && (c += d.G));
        2 > c ? (e = (g.length - this.c) / this.u[2], f = 258 * (e / 2) | 0, b = f < h.length ? h.length + f : h.length << 1) : b = h.length * c;
        F ? (a = new Uint8Array(b), a.set(h)) : a = h;
        return this.a = a
    };
    T.prototype.t = function() {
        var d = 0,
            a = this.a,
            c = this.l,
            e, b = new(F ? Uint8Array : Array)(this.q + (this.b - 32768)),
            f, g, h, k;
        if (0 === c.length) return F ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
        f = 0;
        for (g = c.length; f < g; ++f) {
            e = c[f];
            h = 0;
            for (k = e.length; h < k; ++h) b[d++] = e[h]
        }
        f = 32768;
        for (g = this.b; f < g; ++f) b[d++] = a[f];
        this.l = [];
        return this.buffer = b
    };
    T.prototype.I = function() {
        var d, a = this.b;
        F ? this.C ? (d = new Uint8Array(a), d.set(this.a.subarray(0, a))) : d = this.a.subarray(0, a) : (this.a.length > a && (this.a.length = a), d = this.a);
        return this.buffer = d
    };

    function jb(d) {
        if ("string" === typeof d) {
            var a = d.split(""),
                c, e;
            c = 0;
            for (e = a.length; c < e; c++) a[c] = (a[c].charCodeAt(0) & 255) >>> 0;
            d = a
        }
        for (var b = 1, f = 0, g = d.length, h, k = 0; 0 < g;) {
            h = 1024 < g ? 1024 : g;
            g -= h;
            do b += d[k++], f += b; while (--h);
            b %= 65521;
            f %= 65521
        }
        return (f << 16 | b) >>> 0
    }

    function kb(d, a) {
        var c, e;
        this.input = d;
        this.c = 0;
        if (a || !(a = {})) a.index && (this.c = a.index), a.verify && (this.N = a.verify);
        c = d[this.c++];
        e = d[this.c++];
        switch (c & 15) {
            case lb:
                this.method = lb;
                break;
            default:
                l(Error("unsupported compression method"))
        }
        0 !== ((c << 8) + e) % 31 && l(Error("invalid fcheck flag:" + ((c << 8) + e) % 31));
        e & 32 && l(Error("fdict flag is not supported"));
        this.B = new T(d, {
            index: this.c,
            bufferSize: a.bufferSize,
            bufferType: a.bufferType,
            resize: a.resize
        })
    }
    kb.prototype.p = function() {
        var d = this.input,
            a, c;
        a = this.B.p();
        this.c = this.B.c;
        this.N && (c = (d[this.c++] << 24 | d[this.c++] << 16 | d[this.c++] << 8 | d[this.c++]) >>> 0, c !== jb(a) && l(Error("invalid adler-32 checksum")));
        return a
    };
    var lb = 8;

    function mb(d, a) {
        this.input = d;
        this.a = new(F ? Uint8Array : Array)(32768);
        this.h = $.k;
        var c = {},
            e;
        if ((a || !(a = {})) && "number" === typeof a.compressionType) this.h = a.compressionType;
        for (e in a) c[e] = a[e];
        c.outputBuffer = this.a;
        this.A = new ia(this.input, c)
    }
    var $ = na;
    mb.prototype.j = function() {
        var d, a, c, e, b, f, g, h = 0;
        g = this.a;
        d = lb;
        switch (d) {
            case lb:
                a = Math.LOG2E * Math.log(32768) - 8;
                break;
            default:
                l(Error("invalid compression method"))
        }
        c = a << 4 | d;
        g[h++] = c;
        switch (d) {
            case lb:
                switch (this.h) {
                    case $.NONE:
                        b = 0;
                        break;
                    case $.r:
                        b = 1;
                        break;
                    case $.k:
                        b = 2;
                        break;
                    default:
                        l(Error("unsupported compression type"))
                }
                break;
            default:
                l(Error("invalid compression method"))
        }
        e = b << 6 | 0;
        g[h++] = e | 31 - (256 * c + e) % 31;
        f = jb(this.input);
        this.A.b = h;
        g = this.A.j();
        h = g.length;
        F && (g = new Uint8Array(g.buffer), g.length <= h + 4 && (this.a = new Uint8Array(g.length + 4), this.a.set(g), g = this.a), g = g.subarray(0, h + 4));
        g[h++] = f >> 24 & 255;
        g[h++] = f >> 16 & 255;
        g[h++] = f >> 8 & 255;
        g[h++] = f & 255;
        return g
    };

    function nb(d, a) {
        var c, e, b, f;
        if (Object.keys) c = Object.keys(a);
        else
            for (e in c = [], b = 0, a) c[b++] = e;
        b = 0;
        for (f = c.length; b < f; ++b) e = c[b], D(d + "." + e, a[e])
    }
    D("Zlib.Inflate", kb);
    D("Zlib.Inflate.prototype.decompress", kb.prototype.p);
    nb("Zlib.Inflate.BufferType", {
        ADAPTIVE: Ba.D,
        BLOCK: Ba.F
    });
    D("Zlib.Deflate", mb);
    D("Zlib.Deflate.compress", function(d, a) {
        return new mb(d, a).j()
    });
    D("Zlib.Deflate.prototype.compress", mb.prototype.j);
    nb("Zlib.Deflate.CompressionType", {
        NONE: $.NONE,
        FIXED: $.r,
        DYNAMIC: $.k
    })
}).call(this);