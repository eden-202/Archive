import {
  Component,
  FirebaseError,
  LogLevel,
  Logger,
  SDK_VERSION,
  _getProvider,
  _registerComponent,
  _removeServiceInstance,
  createMockUserToken,
  deepEqual,
  getApp,
  getDefaultEmulatorHostnameAndPort,
  getModularInstance,
  getUA,
  isIndexedDBAvailable,
  isSafari,
  registerVersion
} from "./chunk-CCE7STJL.js";
import {
  __async,
  __superGet
} from "./chunk-5K356HEJ.js";

// node_modules/@firebase/webchannel-wrapper/dist/esm/index.esm2017.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var esm = {};
var k;
var goog = goog || {};
var l = commonjsGlobal || self;
function aa(a) {
  var b2 = typeof a;
  b2 = "object" != b2 ? b2 : a ? Array.isArray(a) ? "array" : b2 : "null";
  return "array" == b2 || "object" == b2 && "number" == typeof a.length;
}
function p(a) {
  var b2 = typeof a;
  return "object" == b2 && null != a || "function" == b2;
}
function ba(a) {
  return Object.prototype.hasOwnProperty.call(a, ca) && a[ca] || (a[ca] = ++da);
}
var ca = "closure_uid_" + (1e9 * Math.random() >>> 0);
var da = 0;
function ea(a, b2, c) {
  return a.call.apply(a.bind, arguments);
}
function fa(a, b2, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b2, e);
    };
  }
  return function() {
    return a.apply(b2, arguments);
  };
}
function q(a, b2, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = ea : q = fa;
  return q.apply(null, arguments);
}
function ha(a, b2) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function r(a, b2) {
  function c() {
  }
  c.prototype = b2.prototype;
  a.$ = b2.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.ac = function(d, e, f) {
    for (var h = Array(arguments.length - 2), n = 2; n < arguments.length; n++) h[n - 2] = arguments[n];
    return b2.prototype[e].apply(d, h);
  };
}
function v() {
  this.s = this.s;
  this.o = this.o;
}
var ia = 0;
v.prototype.s = false;
v.prototype.sa = function() {
  if (!this.s && (this.s = true, this.N(), 0 != ia)) {
    ba(this);
  }
};
v.prototype.N = function() {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
var ka = Array.prototype.indexOf ? function(a, b2) {
  return Array.prototype.indexOf.call(a, b2, void 0);
} : function(a, b2) {
  if ("string" === typeof a) return "string" !== typeof b2 || 1 != b2.length ? -1 : a.indexOf(b2, 0);
  for (let c = 0; c < a.length; c++) if (c in a && a[c] === b2) return c;
  return -1;
};
function ma(a) {
  const b2 = a.length;
  if (0 < b2) {
    const c = Array(b2);
    for (let d = 0; d < b2; d++) c[d] = a[d];
    return c;
  }
  return [];
}
function na(a, b2) {
  for (let c = 1; c < arguments.length; c++) {
    const d = arguments[c];
    if (aa(d)) {
      const e = a.length || 0, f = d.length || 0;
      a.length = e + f;
      for (let h = 0; h < f; h++) a[e + h] = d[h];
    } else a.push(d);
  }
}
function w(a, b2) {
  this.type = a;
  this.g = this.target = b2;
  this.defaultPrevented = false;
}
w.prototype.h = function() {
  this.defaultPrevented = true;
};
var oa = function() {
  if (!l.addEventListener || !Object.defineProperty) return false;
  var a = false, b2 = Object.defineProperty({}, "passive", {
    get: function() {
      a = true;
    }
  });
  try {
    l.addEventListener("test", () => {
    }, b2), l.removeEventListener("test", () => {
    }, b2);
  } catch (c) {
  }
  return a;
}();
function x(a) {
  return /^[\s\xa0]*$/.test(a);
}
function pa() {
  var a = l.navigator;
  return a && (a = a.userAgent) ? a : "";
}
function y(a) {
  return -1 != pa().indexOf(a);
}
function qa(a) {
  qa[" "](a);
  return a;
}
qa[" "] = function() {
};
function ra(a, b2) {
  var c = sa;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b2(a);
}
var ta = y("Opera");
var z = y("Trident") || y("MSIE");
var ua = y("Edge");
var va = ua || z;
var wa = y("Gecko") && !(-1 != pa().toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge");
var xa = -1 != pa().toLowerCase().indexOf("webkit") && !y("Edge");
function ya() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var za;
a: {
  Aa2 = "", Ba2 = function() {
    var a = pa();
    if (wa) return /rv:([^\);]+)(\)|;)/.exec(a);
    if (ua) return /Edge\/([\d\.]+)/.exec(a);
    if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (xa) return /WebKit\/(\S+)/.exec(a);
    if (ta) return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Ba2 && (Aa2 = Ba2 ? Ba2[1] : "");
  if (z) {
    Ca2 = ya();
    if (null != Ca2 && Ca2 > parseFloat(Aa2)) {
      za = String(Ca2);
      break a;
    }
  }
  za = Aa2;
}
var Aa2;
var Ba2;
var Ca2;
var Da;
if (l.document && z) {
  Ea2 = ya();
  Da = Ea2 ? Ea2 : parseInt(za, 10) || void 0;
} else Da = void 0;
var Ea2;
var Fa = Da;
function A(a, b2) {
  w.call(this, a ? a.type : "");
  this.relatedTarget = this.g = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.i = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b2;
    if (b2 = a.relatedTarget) {
      if (wa) {
        a: {
          try {
            qa(b2.nodeName);
            var e = true;
            break a;
          } catch (f) {
          }
          e = false;
        }
        e || (b2 = null);
      }
    } else "mouseover" == c ? b2 = a.fromElement : "mouseout" == c && (b2 = a.toElement);
    this.relatedTarget = b2;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ga[a.pointerType] || "";
    this.state = a.state;
    this.i = a;
    a.defaultPrevented && A.$.h.call(this);
  }
}
r(A, w);
var Ga = {
  2: "touch",
  3: "pen",
  4: "mouse"
};
A.prototype.h = function() {
  A.$.h.call(this);
  var a = this.i;
  a.preventDefault ? a.preventDefault() : a.returnValue = false;
};
var Ha = "closure_listenable_" + (1e6 * Math.random() | 0);
var Ia = 0;
function Ja(a, b2, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b2;
  this.type = c;
  this.capture = !!d;
  this.la = e;
  this.key = ++Ia;
  this.fa = this.ia = false;
}
function Ka(a) {
  a.fa = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.la = null;
}
function Na(a, b2, c) {
  for (const d in a) b2.call(c, a[d], d, a);
}
function Oa(a, b2) {
  for (const c in a) b2.call(void 0, a[c], c, a);
}
function Pa(a) {
  const b2 = {};
  for (const c in a) b2[c] = a[c];
  return b2;
}
var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ra(a, b2) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (let f = 0; f < Qa.length; f++) c = Qa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Sa(a) {
  this.src = a;
  this.g = {};
  this.h = 0;
}
Sa.prototype.add = function(a, b2, c, d, e) {
  var f = a.toString();
  a = this.g[f];
  a || (a = this.g[f] = [], this.h++);
  var h = Ta(a, b2, d, e);
  -1 < h ? (b2 = a[h], c || (b2.ia = false)) : (b2 = new Ja(b2, this.src, f, !!d, e), b2.ia = c, a.push(b2));
  return b2;
};
function Ua(a, b2) {
  var c = b2.type;
  if (c in a.g) {
    var d = a.g[c], e = ka(d, b2), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (Ka(b2), 0 == a.g[c].length && (delete a.g[c], a.h--));
  }
}
function Ta(a, b2, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.fa && f.listener == b2 && f.capture == !!c && f.la == d) return e;
  }
  return -1;
}
var Va = "closure_lm_" + (1e6 * Math.random() | 0);
var Wa = {};
function Ya(a, b2, c, d, e) {
  if (d && d.once) return Za(a, b2, c, d, e);
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++) Ya(a, b2[f], c, d, e);
    return null;
  }
  c = $a(c);
  return a && a[Ha] ? a.O(b2, c, p(d) ? !!d.capture : !!d, e) : ab(a, b2, c, false, d, e);
}
function ab(a, b2, c, d, e, f) {
  if (!b2) throw Error("Invalid event type");
  var h = p(e) ? !!e.capture : !!e, n = bb(a);
  n || (a[Va] = n = new Sa(a));
  c = n.add(b2, c, d, h, f);
  if (c.proxy) return c;
  d = cb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) oa || (e = h), void 0 === e && (e = false), a.addEventListener(b2.toString(), d, e);
  else if (a.attachEvent) a.attachEvent(db(b2.toString()), d);
  else if (a.addListener && a.removeListener) a.addListener(d);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function cb() {
  function a(c) {
    return b2.call(a.src, a.listener, c);
  }
  const b2 = eb;
  return a;
}
function Za(a, b2, c, d, e) {
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++) Za(a, b2[f], c, d, e);
    return null;
  }
  c = $a(c);
  return a && a[Ha] ? a.P(b2, c, p(d) ? !!d.capture : !!d, e) : ab(a, b2, c, true, d, e);
}
function fb(a, b2, c, d, e) {
  if (Array.isArray(b2)) for (var f = 0; f < b2.length; f++) fb(a, b2[f], c, d, e);
  else (d = p(d) ? !!d.capture : !!d, c = $a(c), a && a[Ha]) ? (a = a.i, b2 = String(b2).toString(), b2 in a.g && (f = a.g[b2], c = Ta(f, c, d, e), -1 < c && (Ka(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b2], a.h--)))) : a && (a = bb(a)) && (b2 = a.g[b2.toString()], a = -1, b2 && (a = Ta(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && gb(c));
}
function gb(a) {
  if ("number" !== typeof a && a && !a.fa) {
    var b2 = a.src;
    if (b2 && b2[Ha]) Ua(b2.i, a);
    else {
      var c = a.type, d = a.proxy;
      b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(db(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
      (c = bb(b2)) ? (Ua(c, a), 0 == c.h && (c.src = null, b2[Va] = null)) : Ka(a);
    }
  }
}
function db(a) {
  return a in Wa ? Wa[a] : Wa[a] = "on" + a;
}
function eb(a, b2) {
  if (a.fa) a = true;
  else {
    b2 = new A(b2, this);
    var c = a.listener, d = a.la || a.src;
    a.ia && gb(a);
    a = c.call(d, b2);
  }
  return a;
}
function bb(a) {
  a = a[Va];
  return a instanceof Sa ? a : null;
}
var hb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function $a(a) {
  if ("function" === typeof a) return a;
  a[hb] || (a[hb] = function(b2) {
    return a.handleEvent(b2);
  });
  return a[hb];
}
function B() {
  v.call(this);
  this.i = new Sa(this);
  this.S = this;
  this.J = null;
}
r(B, v);
B.prototype[Ha] = true;
B.prototype.removeEventListener = function(a, b2, c, d) {
  fb(this, a, b2, c, d);
};
function C(a, b2) {
  var c, d = a.J;
  if (d) for (c = []; d; d = d.J) c.push(d);
  a = a.S;
  d = b2.type || b2;
  if ("string" === typeof b2) b2 = new w(b2, a);
  else if (b2 instanceof w) b2.target = b2.target || a;
  else {
    var e = b2;
    b2 = new w(d, a);
    Ra(b2, e);
  }
  e = true;
  if (c) for (var f = c.length - 1; 0 <= f; f--) {
    var h = b2.g = c[f];
    e = ib(h, d, true, b2) && e;
  }
  h = b2.g = a;
  e = ib(h, d, true, b2) && e;
  e = ib(h, d, false, b2) && e;
  if (c) for (f = 0; f < c.length; f++) h = b2.g = c[f], e = ib(h, d, false, b2) && e;
}
B.prototype.N = function() {
  B.$.N.call(this);
  if (this.i) {
    var a = this.i, c;
    for (c in a.g) {
      for (var d = a.g[c], e = 0; e < d.length; e++) Ka(d[e]);
      delete a.g[c];
      a.h--;
    }
  }
  this.J = null;
};
B.prototype.O = function(a, b2, c, d) {
  return this.i.add(String(a), b2, false, c, d);
};
B.prototype.P = function(a, b2, c, d) {
  return this.i.add(String(a), b2, true, c, d);
};
function ib(a, b2, c, d) {
  b2 = a.i.g[String(b2)];
  if (!b2) return true;
  b2 = b2.concat();
  for (var e = true, f = 0; f < b2.length; ++f) {
    var h = b2[f];
    if (h && !h.fa && h.capture == c) {
      var n = h.listener, t = h.la || h.src;
      h.ia && Ua(a.i, h);
      e = false !== n.call(t, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
var jb = l.JSON.stringify;
var kb = class {
  constructor(a, b2) {
    this.i = a;
    this.j = b2;
    this.h = 0;
    this.g = null;
  }
  get() {
    let a;
    0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
    return a;
  }
};
function lb() {
  var a = mb;
  let b2 = null;
  a.g && (b2 = a.g, a.g = a.g.next, a.g || (a.h = null), b2.next = null);
  return b2;
}
var nb = class {
  constructor() {
    this.h = this.g = null;
  }
  add(a, b2) {
    const c = ob.get();
    c.set(a, b2);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  }
};
var ob = new kb(() => new pb(), (a) => a.reset());
var pb = class {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(a, b2) {
    this.h = a;
    this.g = b2;
    this.next = null;
  }
  reset() {
    this.next = this.g = this.h = null;
  }
};
function qb(a) {
  var b2 = 1;
  a = a.split(":");
  const c = [];
  for (; 0 < b2 && a.length; ) c.push(a.shift()), b2--;
  a.length && c.push(a.join(":"));
  return c;
}
function rb(a) {
  l.setTimeout(() => {
    throw a;
  }, 0);
}
var sb;
var tb = false;
var mb = new nb();
var vb = () => {
  const a = l.Promise.resolve(void 0);
  sb = () => {
    a.then(ub);
  };
};
var ub = () => {
  for (var a; a = lb(); ) {
    try {
      a.h.call(a.g);
    } catch (c) {
      rb(c);
    }
    var b2 = ob;
    b2.j(a);
    100 > b2.h && (b2.h++, a.next = b2.g, b2.g = a);
  }
  tb = false;
};
function wb(a, b2) {
  B.call(this);
  this.h = a || 1;
  this.g = b2 || l;
  this.j = q(this.qb, this);
  this.l = Date.now();
}
r(wb, B);
k = wb.prototype;
k.ga = false;
k.T = null;
k.qb = function() {
  if (this.ga) {
    var a = Date.now() - this.l;
    0 < a && a < 0.8 * this.h ? this.T = this.g.setTimeout(this.j, this.h - a) : (this.T && (this.g.clearTimeout(this.T), this.T = null), C(this, "tick"), this.ga && (xb(this), this.start()));
  }
};
k.start = function() {
  this.ga = true;
  this.T || (this.T = this.g.setTimeout(this.j, this.h), this.l = Date.now());
};
function xb(a) {
  a.ga = false;
  a.T && (a.g.clearTimeout(a.T), a.T = null);
}
k.N = function() {
  wb.$.N.call(this);
  xb(this);
  delete this.g;
};
function yb(a, b2, c) {
  if ("function" === typeof a) c && (a = q(a, c));
  else if (a && "function" == typeof a.handleEvent) a = q(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(b2) ? -1 : l.setTimeout(a, b2 || 0);
}
function zb(a) {
  a.g = yb(() => {
    a.g = null;
    a.i && (a.i = false, zb(a));
  }, a.j);
  const b2 = a.h;
  a.h = null;
  a.m.apply(null, b2);
}
var Ab = class extends v {
  constructor(a, b2) {
    super();
    this.m = a;
    this.j = b2;
    this.h = null;
    this.i = false;
    this.g = null;
  }
  l(a) {
    this.h = arguments;
    this.g ? this.i = true : zb(this);
  }
  N() {
    super.N();
    this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
  }
};
function Bb(a) {
  v.call(this);
  this.h = a;
  this.g = {};
}
r(Bb, v);
var Cb = [];
function Db(a, b2, c, d) {
  Array.isArray(c) || (c && (Cb[0] = c.toString()), c = Cb);
  for (var e = 0; e < c.length; e++) {
    var f = Ya(b2, c[e], d || a.handleEvent, false, a.h || a);
    if (!f) break;
    a.g[f.key] = f;
  }
}
function Fb(a) {
  Na(a.g, function(b2, c) {
    this.g.hasOwnProperty(c) && gb(b2);
  }, a);
  a.g = {};
}
Bb.prototype.N = function() {
  Bb.$.N.call(this);
  Fb(this);
};
Bb.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Gb() {
  this.g = true;
}
Gb.prototype.Ea = function() {
  this.g = false;
};
function Hb(a, b2, c, d, e, f) {
  a.info(function() {
    if (a.g) {
      if (f) {
        var h = "";
        for (var n = f.split("&"), t = 0; t < n.length; t++) {
          var m = n[t].split("=");
          if (1 < m.length) {
            var u = m[0];
            m = m[1];
            var L2 = u.split("_");
            h = 2 <= L2.length && "type" == L2[1] ? h + (u + "=" + m + "&") : h + (u + "=redacted&");
          }
        }
      } else h = null;
    } else h = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + h;
  });
}
function Ib(a, b2, c, d, e, f, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f + " " + h;
  });
}
function D(a, b2, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b2 + "): " + Jb(a, c) + (d ? " " + d : "");
  });
}
function Kb(a, b2) {
  a.info(function() {
    return "TIMEOUT: " + b2;
  });
}
Gb.prototype.info = function() {
};
function Jb(a, b2) {
  if (!a.g) return b2;
  if (!b2) return null;
  try {
    var c = JSON.parse(b2);
    if (c) {
      for (a = 0; a < c.length; a++) if (Array.isArray(c[a])) {
        var d = c[a];
        if (!(2 > d.length)) {
          var e = d[1];
          if (Array.isArray(e) && !(1 > e.length)) {
            var f = e[0];
            if ("noop" != f && "stop" != f && "close" != f) for (var h = 1; h < e.length; h++) e[h] = "";
          }
        }
      }
    }
    return jb(c);
  } catch (n) {
    return b2;
  }
}
var E = {};
var Lb = null;
function Mb() {
  return Lb = Lb || new B();
}
E.Ta = "serverreachability";
function Nb(a) {
  w.call(this, E.Ta, a);
}
r(Nb, w);
function Ob(a) {
  const b2 = Mb();
  C(b2, new Nb(b2));
}
E.STAT_EVENT = "statevent";
function Pb(a, b2) {
  w.call(this, E.STAT_EVENT, a);
  this.stat = b2;
}
r(Pb, w);
function F(a) {
  const b2 = Mb();
  C(b2, new Pb(b2, a));
}
E.Ua = "timingevent";
function Qb(a, b2) {
  w.call(this, E.Ua, a);
  this.size = b2;
}
r(Qb, w);
function Rb(a, b2) {
  if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
  return l.setTimeout(function() {
    a();
  }, b2);
}
var Sb = {
  NO_ERROR: 0,
  rb: 1,
  Eb: 2,
  Db: 3,
  yb: 4,
  Cb: 5,
  Fb: 6,
  Qa: 7,
  TIMEOUT: 8,
  Ib: 9
};
var Tb = {
  wb: "complete",
  Sb: "success",
  Ra: "error",
  Qa: "abort",
  Kb: "ready",
  Lb: "readystatechange",
  TIMEOUT: "timeout",
  Gb: "incrementaldata",
  Jb: "progress",
  zb: "downloadprogress",
  $b: "uploadprogress"
};
function Ub() {
}
Ub.prototype.h = null;
function Vb(a) {
  return a.h || (a.h = a.i());
}
function Wb() {
}
var Xb = {
  OPEN: "a",
  vb: "b",
  Ra: "c",
  Hb: "d"
};
function Yb() {
  w.call(this, "d");
}
r(Yb, w);
function Zb() {
  w.call(this, "c");
}
r(Zb, w);
var $b;
function ac() {
}
r(ac, Ub);
ac.prototype.g = function() {
  return new XMLHttpRequest();
};
ac.prototype.i = function() {
  return {};
};
$b = new ac();
function bc(a, b2, c, d) {
  this.l = a;
  this.j = b2;
  this.m = c;
  this.W = d || 1;
  this.U = new Bb(this);
  this.P = cc;
  a = va ? 125 : void 0;
  this.V = new wb(a);
  this.I = null;
  this.i = false;
  this.s = this.A = this.v = this.L = this.G = this.Y = this.B = null;
  this.F = [];
  this.g = null;
  this.C = 0;
  this.o = this.u = null;
  this.ca = -1;
  this.J = false;
  this.O = 0;
  this.M = null;
  this.ba = this.K = this.aa = this.S = false;
  this.h = new dc();
}
function dc() {
  this.i = null;
  this.g = "";
  this.h = false;
}
var cc = 45e3;
var ec = {};
var fc = {};
k = bc.prototype;
k.setTimeout = function(a) {
  this.P = a;
};
function gc(a, b2, c) {
  a.L = 1;
  a.v = hc(G(b2));
  a.s = c;
  a.S = true;
  ic(a, null);
}
function ic(a, b2) {
  a.G = Date.now();
  jc(a);
  a.A = G(a.v);
  var c = a.A, d = a.W;
  Array.isArray(d) || (d = [String(d)]);
  kc(c.i, "t", d);
  a.C = 0;
  c = a.l.J;
  a.h = new dc();
  a.g = lc(a.l, c ? b2 : null, !a.s);
  0 < a.O && (a.M = new Ab(q(a.Pa, a, a.g), a.O));
  Db(a.U, a.g, "readystatechange", a.nb);
  b2 = a.I ? Pa(a.I) : {};
  a.s ? (a.u || (a.u = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.g.ha(a.A, a.u, a.s, b2)) : (a.u = "GET", a.g.ha(a.A, a.u, null, b2));
  Ob();
  Hb(a.j, a.u, a.A, a.m, a.W, a.s);
}
k.nb = function(a) {
  a = a.target;
  const b2 = this.M;
  b2 && 3 == H(a) ? b2.l() : this.Pa(a);
};
k.Pa = function(a) {
  try {
    if (a == this.g) a: {
      const u = H(this.g);
      var b2 = this.g.Ia();
      const L2 = this.g.da();
      if (!(3 > u) && (3 != u || va || this.g && (this.h.h || this.g.ja() || mc(this.g)))) {
        this.J || 4 != u || 7 == b2 || (8 == b2 || 0 >= L2 ? Ob(3) : Ob(2));
        nc(this);
        var c = this.g.da();
        this.ca = c;
        b: if (oc(this)) {
          var d = mc(this.g);
          a = "";
          var e = d.length, f = 4 == H(this.g);
          if (!this.h.i) {
            if ("undefined" === typeof TextDecoder) {
              I(this);
              pc(this);
              var h = "";
              break b;
            }
            this.h.i = new l.TextDecoder();
          }
          for (b2 = 0; b2 < e; b2++) this.h.h = true, a += this.h.i.decode(d[b2], {
            stream: f && b2 == e - 1
          });
          d.splice(0, e);
          this.h.g += a;
          this.C = 0;
          h = this.h.g;
        } else h = this.g.ja();
        this.i = 200 == c;
        Ib(this.j, this.u, this.A, this.m, this.W, u, c);
        if (this.i) {
          if (this.aa && !this.K) {
            b: {
              if (this.g) {
                var n, t = this.g;
                if ((n = t.g ? t.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !x(n)) {
                  var m = n;
                  break b;
                }
              }
              m = null;
            }
            if (c = m) D(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.K = true, qc(this, c);
            else {
              this.i = false;
              this.o = 3;
              F(12);
              I(this);
              pc(this);
              break a;
            }
          }
          this.S ? (rc(this, u, h), va && this.i && 3 == u && (Db(this.U, this.V, "tick", this.mb), this.V.start())) : (D(this.j, this.m, h, null), qc(this, h));
          4 == u && I(this);
          this.i && !this.J && (4 == u ? sc(this.l, this) : (this.i = false, jc(this)));
        } else tc(this.g), 400 == c && 0 < h.indexOf("Unknown SID") ? (this.o = 3, F(12)) : (this.o = 0, F(13)), I(this), pc(this);
      }
    }
  } catch (u) {
  } finally {
  }
};
function oc(a) {
  return a.g ? "GET" == a.u && 2 != a.L && a.l.Ha : false;
}
function rc(a, b2, c) {
  let d = true, e;
  for (; !a.J && a.C < c.length; ) if (e = uc(a, c), e == fc) {
    4 == b2 && (a.o = 4, F(14), d = false);
    D(a.j, a.m, null, "[Incomplete Response]");
    break;
  } else if (e == ec) {
    a.o = 4;
    F(15);
    D(a.j, a.m, c, "[Invalid Chunk]");
    d = false;
    break;
  } else D(a.j, a.m, e, null), qc(a, e);
  oc(a) && e != fc && e != ec && (a.h.g = "", a.C = 0);
  4 != b2 || 0 != c.length || a.h.h || (a.o = 1, F(16), d = false);
  a.i = a.i && d;
  d ? 0 < c.length && !a.ba && (a.ba = true, b2 = a.l, b2.g == a && b2.ca && !b2.M && (b2.l.info("Great, no buffering proxy detected. Bytes received: " + c.length), vc(b2), b2.M = true, F(11))) : (D(a.j, a.m, c, "[Invalid Chunked Response]"), I(a), pc(a));
}
k.mb = function() {
  if (this.g) {
    var a = H(this.g), b2 = this.g.ja();
    this.C < b2.length && (nc(this), rc(this, a, b2), this.i && 4 != a && jc(this));
  }
};
function uc(a, b2) {
  var c = a.C, d = b2.indexOf("\n", c);
  if (-1 == d) return fc;
  c = Number(b2.substring(c, d));
  if (isNaN(c)) return ec;
  d += 1;
  if (d + c > b2.length) return fc;
  b2 = b2.slice(d, d + c);
  a.C = d + c;
  return b2;
}
k.cancel = function() {
  this.J = true;
  I(this);
};
function jc(a) {
  a.Y = Date.now() + a.P;
  wc(a, a.P);
}
function wc(a, b2) {
  if (null != a.B) throw Error("WatchDog timer not null");
  a.B = Rb(q(a.lb, a), b2);
}
function nc(a) {
  a.B && (l.clearTimeout(a.B), a.B = null);
}
k.lb = function() {
  this.B = null;
  const a = Date.now();
  0 <= a - this.Y ? (Kb(this.j, this.A), 2 != this.L && (Ob(), F(17)), I(this), this.o = 2, pc(this)) : wc(this, this.Y - a);
};
function pc(a) {
  0 == a.l.H || a.J || sc(a.l, a);
}
function I(a) {
  nc(a);
  var b2 = a.M;
  b2 && "function" == typeof b2.sa && b2.sa();
  a.M = null;
  xb(a.V);
  Fb(a.U);
  a.g && (b2 = a.g, a.g = null, b2.abort(), b2.sa());
}
function qc(a, b2) {
  try {
    var c = a.l;
    if (0 != c.H && (c.g == a || xc(c.i, a))) {
      if (!a.K && xc(c.i, a) && 3 == c.H) {
        try {
          var d = c.Ja.g.parse(b2);
        } catch (m) {
          d = null;
        }
        if (Array.isArray(d) && 3 == d.length) {
          var e = d;
          if (0 == e[0]) a: {
            if (!c.u) {
              if (c.g) if (c.g.G + 3e3 < a.G) yc(c), zc(c);
              else break a;
              Ac(c);
              F(18);
            }
          }
          else c.Fa = e[1], 0 < c.Fa - c.V && 37500 > e[2] && c.G && 0 == c.A && !c.v && (c.v = Rb(q(c.ib, c), 6e3));
          if (1 >= Bc(c.i) && c.oa) {
            try {
              c.oa();
            } catch (m) {
            }
            c.oa = void 0;
          }
        } else J(c, 11);
      } else if ((a.K || c.g == a) && yc(c), !x(b2)) for (e = c.Ja.g.parse(b2), b2 = 0; b2 < e.length; b2++) {
        let m = e[b2];
        c.V = m[0];
        m = m[1];
        if (2 == c.H) {
          if ("c" == m[0]) {
            c.K = m[1];
            c.pa = m[2];
            const u = m[3];
            null != u && (c.ra = u, c.l.info("VER=" + c.ra));
            const L2 = m[4];
            null != L2 && (c.Ga = L2, c.l.info("SVER=" + c.Ga));
            const La2 = m[5];
            null != La2 && "number" === typeof La2 && 0 < La2 && (d = 1.5 * La2, c.L = d, c.l.info("backChannelRequestTimeoutMs_=" + d));
            d = c;
            const la2 = a.g;
            if (la2) {
              const Ma2 = la2.g ? la2.g.getResponseHeader("X-Client-Wire-Protocol") : null;
              if (Ma2) {
                var f = d.i;
                f.g || -1 == Ma2.indexOf("spdy") && -1 == Ma2.indexOf("quic") && -1 == Ma2.indexOf("h2") || (f.j = f.l, f.g = /* @__PURE__ */ new Set(), f.h && (Cc(f, f.h), f.h = null));
              }
              if (d.F) {
                const Eb = la2.g ? la2.g.getResponseHeader("X-HTTP-Session-Id") : null;
                Eb && (d.Da = Eb, K(d.I, d.F, Eb));
              }
            }
            c.H = 3;
            c.h && c.h.Ba();
            c.ca && (c.S = Date.now() - a.G, c.l.info("Handshake RTT: " + c.S + "ms"));
            d = c;
            var h = a;
            d.wa = Dc(d, d.J ? d.pa : null, d.Y);
            if (h.K) {
              Ec(d.i, h);
              var n = h, t = d.L;
              t && n.setTimeout(t);
              n.B && (nc(n), jc(n));
              d.g = h;
            } else Fc(d);
            0 < c.j.length && Gc(c);
          } else "stop" != m[0] && "close" != m[0] || J(c, 7);
        } else 3 == c.H && ("stop" == m[0] || "close" == m[0] ? "stop" == m[0] ? J(c, 7) : Hc(c) : "noop" != m[0] && c.h && c.h.Aa(m), c.A = 0);
      }
    }
    Ob(4);
  } catch (m) {
  }
}
function Ic(a) {
  if (a.Z && "function" == typeof a.Z) return a.Z();
  if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
  if ("string" === typeof a) return a.split("");
  if (aa(a)) {
    for (var b2 = [], c = a.length, d = 0; d < c; d++) b2.push(a[d]);
    return b2;
  }
  b2 = [];
  c = 0;
  for (d in a) b2[c++] = a[d];
  return b2;
}
function Jc(a) {
  if (a.ta && "function" == typeof a.ta) return a.ta();
  if (!a.Z || "function" != typeof a.Z) {
    if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
    if (!("undefined" !== typeof Set && a instanceof Set)) {
      if (aa(a) || "string" === typeof a) {
        var b2 = [];
        a = a.length;
        for (var c = 0; c < a; c++) b2.push(c);
        return b2;
      }
      b2 = [];
      c = 0;
      for (const d in a) b2[c++] = d;
      return b2;
    }
  }
}
function Kc(a, b2) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b2, void 0);
  else if (aa(a) || "string" === typeof a) Array.prototype.forEach.call(a, b2, void 0);
  else for (var c = Jc(a), d = Ic(a), e = d.length, f = 0; f < e; f++) b2.call(void 0, d[f], c && c[f], a);
}
var Lc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function Mc(a, b2) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else f = a[c];
      b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function M(a) {
  this.g = this.s = this.j = "";
  this.m = null;
  this.o = this.l = "";
  this.h = false;
  if (a instanceof M) {
    this.h = a.h;
    Nc(this, a.j);
    this.s = a.s;
    this.g = a.g;
    Oc(this, a.m);
    this.l = a.l;
    var b2 = a.i;
    var c = new Pc();
    c.i = b2.i;
    b2.g && (c.g = new Map(b2.g), c.h = b2.h);
    Qc(this, c);
    this.o = a.o;
  } else a && (b2 = String(a).match(Lc)) ? (this.h = false, Nc(this, b2[1] || "", true), this.s = Rc(b2[2] || ""), this.g = Rc(b2[3] || "", true), Oc(this, b2[4]), this.l = Rc(b2[5] || "", true), Qc(this, b2[6] || "", true), this.o = Rc(b2[7] || "")) : (this.h = false, this.i = new Pc(null, this.h));
}
M.prototype.toString = function() {
  var a = [], b2 = this.j;
  b2 && a.push(Sc(b2, Tc, true), ":");
  var c = this.g;
  if (c || "file" == b2) a.push("//"), (b2 = this.s) && a.push(Sc(b2, Tc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
  if (c = this.l) this.g && "/" != c.charAt(0) && a.push("/"), a.push(Sc(c, "/" == c.charAt(0) ? Uc : Vc, true));
  (c = this.i.toString()) && a.push("?", c);
  (c = this.o) && a.push("#", Sc(c, Wc));
  return a.join("");
};
function G(a) {
  return new M(a);
}
function Nc(a, b2, c) {
  a.j = c ? Rc(b2, true) : b2;
  a.j && (a.j = a.j.replace(/:$/, ""));
}
function Oc(a, b2) {
  if (b2) {
    b2 = Number(b2);
    if (isNaN(b2) || 0 > b2) throw Error("Bad port number " + b2);
    a.m = b2;
  } else a.m = null;
}
function Qc(a, b2, c) {
  b2 instanceof Pc ? (a.i = b2, Xc(a.i, a.h)) : (c || (b2 = Sc(b2, Yc)), a.i = new Pc(b2, a.h));
}
function K(a, b2, c) {
  a.i.set(b2, c);
}
function hc(a) {
  K(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
  return a;
}
function Rc(a, b2) {
  return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Sc(a, b2, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b2, Zc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function Zc(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Tc = /[#\/\?@]/g;
var Vc = /[#\?:]/g;
var Uc = /[#\?]/g;
var Yc = /[#\?@]/g;
var Wc = /#/g;
function Pc(a, b2) {
  this.h = this.g = null;
  this.i = a || null;
  this.j = !!b2;
}
function N(a) {
  a.g || (a.g = /* @__PURE__ */ new Map(), a.h = 0, a.i && Mc(a.i, function(b2, c) {
    a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
  }));
}
k = Pc.prototype;
k.add = function(a, b2) {
  N(this);
  this.i = null;
  a = O(this, a);
  var c = this.g.get(a);
  c || this.g.set(a, c = []);
  c.push(b2);
  this.h += 1;
  return this;
};
function $c(a, b2) {
  N(a);
  b2 = O(a, b2);
  a.g.has(b2) && (a.i = null, a.h -= a.g.get(b2).length, a.g.delete(b2));
}
function ad(a, b2) {
  N(a);
  b2 = O(a, b2);
  return a.g.has(b2);
}
k.forEach = function(a, b2) {
  N(this);
  this.g.forEach(function(c, d) {
    c.forEach(function(e) {
      a.call(b2, e, d, this);
    }, this);
  }, this);
};
k.ta = function() {
  N(this);
  const a = Array.from(this.g.values()), b2 = Array.from(this.g.keys()), c = [];
  for (let d = 0; d < b2.length; d++) {
    const e = a[d];
    for (let f = 0; f < e.length; f++) c.push(b2[d]);
  }
  return c;
};
k.Z = function(a) {
  N(this);
  let b2 = [];
  if ("string" === typeof a) ad(this, a) && (b2 = b2.concat(this.g.get(O(this, a))));
  else {
    a = Array.from(this.g.values());
    for (let c = 0; c < a.length; c++) b2 = b2.concat(a[c]);
  }
  return b2;
};
k.set = function(a, b2) {
  N(this);
  this.i = null;
  a = O(this, a);
  ad(this, a) && (this.h -= this.g.get(a).length);
  this.g.set(a, [b2]);
  this.h += 1;
  return this;
};
k.get = function(a, b2) {
  if (!a) return b2;
  a = this.Z(a);
  return 0 < a.length ? String(a[0]) : b2;
};
function kc(a, b2, c) {
  $c(a, b2);
  0 < c.length && (a.i = null, a.g.set(O(a, b2), ma(c)), a.h += c.length);
}
k.toString = function() {
  if (this.i) return this.i;
  if (!this.g) return "";
  const a = [], b2 = Array.from(this.g.keys());
  for (var c = 0; c < b2.length; c++) {
    var d = b2[c];
    const f = encodeURIComponent(String(d)), h = this.Z(d);
    for (d = 0; d < h.length; d++) {
      var e = f;
      "" !== h[d] && (e += "=" + encodeURIComponent(String(h[d])));
      a.push(e);
    }
  }
  return this.i = a.join("&");
};
function O(a, b2) {
  b2 = String(b2);
  a.j && (b2 = b2.toLowerCase());
  return b2;
}
function Xc(a, b2) {
  b2 && !a.j && (N(a), a.i = null, a.g.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && ($c(this, d), kc(this, e, c));
  }, a));
  a.j = b2;
}
var bd = class {
  constructor(a, b2) {
    this.g = a;
    this.map = b2;
  }
};
function cd(a) {
  this.l = a || dd;
  l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(l.g && l.g.Ka && l.g.Ka() && l.g.Ka().ec);
  this.j = a ? this.l : 1;
  this.g = null;
  1 < this.j && (this.g = /* @__PURE__ */ new Set());
  this.h = null;
  this.i = [];
}
var dd = 10;
function ed(a) {
  return a.h ? true : a.g ? a.g.size >= a.j : false;
}
function Bc(a) {
  return a.h ? 1 : a.g ? a.g.size : 0;
}
function xc(a, b2) {
  return a.h ? a.h == b2 : a.g ? a.g.has(b2) : false;
}
function Cc(a, b2) {
  a.g ? a.g.add(b2) : a.h = b2;
}
function Ec(a, b2) {
  a.h && a.h == b2 ? a.h = null : a.g && a.g.has(b2) && a.g.delete(b2);
}
cd.prototype.cancel = function() {
  this.i = fd(this);
  if (this.h) this.h.cancel(), this.h = null;
  else if (this.g && 0 !== this.g.size) {
    for (const a of this.g.values()) a.cancel();
    this.g.clear();
  }
};
function fd(a) {
  if (null != a.h) return a.i.concat(a.h.F);
  if (null != a.g && 0 !== a.g.size) {
    let b2 = a.i;
    for (const c of a.g.values()) b2 = b2.concat(c.F);
    return b2;
  }
  return ma(a.i);
}
var gd = class {
  stringify(a) {
    return l.JSON.stringify(a, void 0);
  }
  parse(a) {
    return l.JSON.parse(a, void 0);
  }
};
function hd() {
  this.g = new gd();
}
function id(a, b2, c) {
  const d = c || "";
  try {
    Kc(a, function(e, f) {
      let h = e;
      p(e) && (h = jb(e));
      b2.push(d + f + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function jd(a, b2) {
  const c = new Gb();
  if (l.Image) {
    const d = new Image();
    d.onload = ha(kd, c, d, "TestLoadImage: loaded", true, b2);
    d.onerror = ha(kd, c, d, "TestLoadImage: error", false, b2);
    d.onabort = ha(kd, c, d, "TestLoadImage: abort", false, b2);
    d.ontimeout = ha(kd, c, d, "TestLoadImage: timeout", false, b2);
    l.setTimeout(function() {
      if (d.ontimeout) d.ontimeout();
    }, 1e4);
    d.src = a;
  } else b2(false);
}
function kd(a, b2, c, d, e) {
  try {
    b2.onload = null, b2.onerror = null, b2.onabort = null, b2.ontimeout = null, e(d);
  } catch (f) {
  }
}
function ld(a) {
  this.l = a.fc || null;
  this.j = a.ob || false;
}
r(ld, Ub);
ld.prototype.g = function() {
  return new md(this.l, this.j);
};
ld.prototype.i = /* @__PURE__ */ function(a) {
  return function() {
    return a;
  };
}({});
function md(a, b2) {
  B.call(this);
  this.F = a;
  this.u = b2;
  this.m = void 0;
  this.readyState = nd;
  this.status = 0;
  this.responseType = this.responseText = this.response = this.statusText = "";
  this.onreadystatechange = null;
  this.v = new Headers();
  this.h = null;
  this.C = "GET";
  this.B = "";
  this.g = false;
  this.A = this.j = this.l = null;
}
r(md, B);
var nd = 0;
k = md.prototype;
k.open = function(a, b2) {
  if (this.readyState != nd) throw this.abort(), Error("Error reopening a connection");
  this.C = a;
  this.B = b2;
  this.readyState = 1;
  od(this);
};
k.send = function(a) {
  if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
  this.g = true;
  const b2 = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0
  };
  a && (b2.body = a);
  (this.F || l).fetch(new Request(this.B, b2)).then(this.$a.bind(this), this.ka.bind(this));
};
k.abort = function() {
  this.response = this.responseText = "";
  this.v = new Headers();
  this.status = 0;
  this.j && this.j.cancel("Request was aborted.").catch(() => {
  });
  1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, pd(this));
  this.readyState = nd;
};
k.$a = function(a) {
  if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, od(this)), this.g && (this.readyState = 3, od(this), this.g))) if ("arraybuffer" === this.responseType) a.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
  else if ("undefined" !== typeof l.ReadableStream && "body" in a) {
    this.j = a.body.getReader();
    if (this.u) {
      if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
      this.response = [];
    } else this.response = this.responseText = "", this.A = new TextDecoder();
    qd(this);
  } else a.text().then(this.Za.bind(this), this.ka.bind(this));
};
function qd(a) {
  a.j.read().then(a.Xa.bind(a)).catch(a.ka.bind(a));
}
k.Xa = function(a) {
  if (this.g) {
    if (this.u && a.value) this.response.push(a.value);
    else if (!this.u) {
      var b2 = a.value ? a.value : new Uint8Array(0);
      if (b2 = this.A.decode(b2, {
        stream: !a.done
      })) this.response = this.responseText += b2;
    }
    a.done ? pd(this) : od(this);
    3 == this.readyState && qd(this);
  }
};
k.Za = function(a) {
  this.g && (this.response = this.responseText = a, pd(this));
};
k.Ya = function(a) {
  this.g && (this.response = a, pd(this));
};
k.ka = function() {
  this.g && pd(this);
};
function pd(a) {
  a.readyState = 4;
  a.l = null;
  a.j = null;
  a.A = null;
  od(a);
}
k.setRequestHeader = function(a, b2) {
  this.v.append(a, b2);
};
k.getResponseHeader = function(a) {
  return this.h ? this.h.get(a.toLowerCase()) || "" : "";
};
k.getAllResponseHeaders = function() {
  if (!this.h) return "";
  const a = [], b2 = this.h.entries();
  for (var c = b2.next(); !c.done; ) c = c.value, a.push(c[0] + ": " + c[1]), c = b2.next();
  return a.join("\r\n");
};
function od(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(md.prototype, "withCredentials", {
  get: function() {
    return "include" === this.m;
  },
  set: function(a) {
    this.m = a ? "include" : "same-origin";
  }
});
var rd = l.JSON.parse;
function P(a) {
  B.call(this);
  this.headers = /* @__PURE__ */ new Map();
  this.u = a || null;
  this.h = false;
  this.C = this.g = null;
  this.I = "";
  this.m = 0;
  this.j = "";
  this.l = this.G = this.v = this.F = false;
  this.B = 0;
  this.A = null;
  this.K = sd;
  this.L = this.M = false;
}
r(P, B);
var sd = "";
var td = /^https?$/i;
var ud = ["POST", "PUT"];
k = P.prototype;
k.Oa = function(a) {
  this.M = a;
};
k.ha = function(a, b2, c, d) {
  if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.I + "; newUri=" + a);
  b2 = b2 ? b2.toUpperCase() : "GET";
  this.I = a;
  this.j = "";
  this.m = 0;
  this.F = false;
  this.h = true;
  this.g = this.u ? this.u.g() : $b.g();
  this.C = this.u ? Vb(this.u) : Vb($b);
  this.g.onreadystatechange = q(this.La, this);
  try {
    this.G = true, this.g.open(b2, String(a), true), this.G = false;
  } catch (f) {
    vd(this, f);
    return;
  }
  a = c || "";
  c = new Map(this.headers);
  if (d) if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
  else if ("function" === typeof d.keys && "function" === typeof d.get) for (const f of d.keys()) c.set(f, d.get(f));
  else throw Error("Unknown input type for opt_headers: " + String(d));
  d = Array.from(c.keys()).find((f) => "content-type" == f.toLowerCase());
  e = l.FormData && a instanceof l.FormData;
  !(0 <= ka(ud, b2)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [f, h] of c) this.g.setRequestHeader(f, h);
  this.K && (this.g.responseType = this.K);
  "withCredentials" in this.g && this.g.withCredentials !== this.M && (this.g.withCredentials = this.M);
  try {
    wd(this), 0 < this.B && ((this.L = xd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q(this.ua, this)) : this.A = yb(this.ua, this.B, this)), this.v = true, this.g.send(a), this.v = false;
  } catch (f) {
    vd(this, f);
  }
};
function xd(a) {
  return z && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
k.ua = function() {
  "undefined" != typeof goog && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, C(this, "timeout"), this.abort(8));
};
function vd(a, b2) {
  a.h = false;
  a.g && (a.l = true, a.g.abort(), a.l = false);
  a.j = b2;
  a.m = 5;
  yd(a);
  zd(a);
}
function yd(a) {
  a.F || (a.F = true, C(a, "complete"), C(a, "error"));
}
k.abort = function(a) {
  this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a || 7, C(this, "complete"), C(this, "abort"), zd(this));
};
k.N = function() {
  this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), zd(this, true));
  P.$.N.call(this);
};
k.La = function() {
  this.s || (this.G || this.v || this.l ? Ad(this) : this.kb());
};
k.kb = function() {
  Ad(this);
};
function Ad(a) {
  if (a.h && "undefined" != typeof goog && (!a.C[1] || 4 != H(a) || 2 != a.da())) {
    if (a.v && 4 == H(a)) yb(a.La, 0, a);
    else if (C(a, "readystatechange"), 4 == H(a)) {
      a.h = false;
      try {
        const h = a.da();
        a: switch (h) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var b2 = true;
            break a;
          default:
            b2 = false;
        }
        var c;
        if (!(c = b2)) {
          var d;
          if (d = 0 === h) {
            var e = String(a.I).match(Lc)[1] || null;
            !e && l.self && l.self.location && (e = l.self.location.protocol.slice(0, -1));
            d = !td.test(e ? e.toLowerCase() : "");
          }
          c = d;
        }
        if (c) C(a, "complete"), C(a, "success");
        else {
          a.m = 6;
          try {
            var f = 2 < H(a) ? a.g.statusText : "";
          } catch (n) {
            f = "";
          }
          a.j = f + " [" + a.da() + "]";
          yd(a);
        }
      } finally {
        zd(a);
      }
    }
  }
}
function zd(a, b2) {
  if (a.g) {
    wd(a);
    const c = a.g, d = a.C[0] ? () => {
    } : null;
    a.g = null;
    a.C = null;
    b2 || C(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function wd(a) {
  a.g && a.L && (a.g.ontimeout = null);
  a.A && (l.clearTimeout(a.A), a.A = null);
}
k.isActive = function() {
  return !!this.g;
};
function H(a) {
  return a.g ? a.g.readyState : 0;
}
k.da = function() {
  try {
    return 2 < H(this) ? this.g.status : -1;
  } catch (a) {
    return -1;
  }
};
k.ja = function() {
  try {
    return this.g ? this.g.responseText : "";
  } catch (a) {
    return "";
  }
};
k.Wa = function(a) {
  if (this.g) {
    var b2 = this.g.responseText;
    a && 0 == b2.indexOf(a) && (b2 = b2.substring(a.length));
    return rd(b2);
  }
};
function mc(a) {
  try {
    if (!a.g) return null;
    if ("response" in a.g) return a.g.response;
    switch (a.K) {
      case sd:
      case "text":
        return a.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in a.g) return a.g.mozResponseArrayBuffer;
    }
    return null;
  } catch (b2) {
    return null;
  }
}
function tc(a) {
  const b2 = {};
  a = (a.g && 2 <= H(a) ? a.g.getAllResponseHeaders() || "" : "").split("\r\n");
  for (let d = 0; d < a.length; d++) {
    if (x(a[d])) continue;
    var c = qb(a[d]);
    const e = c[0];
    c = c[1];
    if ("string" !== typeof c) continue;
    c = c.trim();
    const f = b2[e] || [];
    b2[e] = f;
    f.push(c);
  }
  Oa(b2, function(d) {
    return d.join(", ");
  });
}
k.Ia = function() {
  return this.m;
};
k.Sa = function() {
  return "string" === typeof this.j ? this.j : String(this.j);
};
function Bd(a) {
  let b2 = "";
  Na(a, function(c, d) {
    b2 += d;
    b2 += ":";
    b2 += c;
    b2 += "\r\n";
  });
  return b2;
}
function Cd(a, b2, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = Bd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : K(a, b2, c));
}
function Dd(a, b2, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
}
function Ed(a) {
  this.Ga = 0;
  this.j = [];
  this.l = new Gb();
  this.pa = this.wa = this.I = this.Y = this.g = this.Da = this.F = this.na = this.o = this.U = this.s = null;
  this.fb = this.W = 0;
  this.cb = Dd("failFast", false, a);
  this.G = this.v = this.u = this.m = this.h = null;
  this.aa = true;
  this.Fa = this.V = -1;
  this.ba = this.A = this.C = 0;
  this.ab = Dd("baseRetryDelayMs", 5e3, a);
  this.hb = Dd("retryDelaySeedMs", 1e4, a);
  this.eb = Dd("forwardChannelMaxRetries", 2, a);
  this.xa = Dd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.va = a && a.xmlHttpFactory || void 0;
  this.Ha = a && a.dc || false;
  this.L = void 0;
  this.J = a && a.supportsCrossDomainXhr || false;
  this.K = "";
  this.i = new cd(a && a.concurrentRequestLimit);
  this.Ja = new hd();
  this.P = a && a.fastHandshake || false;
  this.O = a && a.encodeInitMessageHeaders || false;
  this.P && this.O && (this.O = false);
  this.bb = a && a.bc || false;
  a && a.Ea && this.l.Ea();
  a && a.forceLongPolling && (this.aa = false);
  this.ca = !this.P && this.aa && a && a.detectBufferingProxy || false;
  this.qa = void 0;
  a && a.longPollingTimeout && 0 < a.longPollingTimeout && (this.qa = a.longPollingTimeout);
  this.oa = void 0;
  this.S = 0;
  this.M = false;
  this.ma = this.B = null;
}
k = Ed.prototype;
k.ra = 8;
k.H = 1;
function Hc(a) {
  Fd(a);
  if (3 == a.H) {
    var b2 = a.W++, c = G(a.I);
    K(c, "SID", a.K);
    K(c, "RID", b2);
    K(c, "TYPE", "terminate");
    Gd(a, c);
    b2 = new bc(a, a.l, b2);
    b2.L = 2;
    b2.v = hc(G(c));
    c = false;
    if (l.navigator && l.navigator.sendBeacon) try {
      c = l.navigator.sendBeacon(b2.v.toString(), "");
    } catch (d) {
    }
    !c && l.Image && (new Image().src = b2.v, c = true);
    c || (b2.g = lc(b2.l, null), b2.g.ha(b2.v));
    b2.G = Date.now();
    jc(b2);
  }
  Hd(a);
}
function zc(a) {
  a.g && (vc(a), a.g.cancel(), a.g = null);
}
function Fd(a) {
  zc(a);
  a.u && (l.clearTimeout(a.u), a.u = null);
  yc(a);
  a.i.cancel();
  a.m && ("number" === typeof a.m && l.clearTimeout(a.m), a.m = null);
}
function Gc(a) {
  if (!ed(a.i) && !a.m) {
    a.m = true;
    var b2 = a.Na;
    sb || vb();
    tb || (sb(), tb = true);
    mb.add(b2, a);
    a.C = 0;
  }
}
function Id(a, b2) {
  if (Bc(a.i) >= a.i.j - (a.m ? 1 : 0)) return false;
  if (a.m) return a.j = b2.F.concat(a.j), true;
  if (1 == a.H || 2 == a.H || a.C >= (a.cb ? 0 : a.eb)) return false;
  a.m = Rb(q(a.Na, a, b2), Jd(a, a.C));
  a.C++;
  return true;
}
k.Na = function(a) {
  if (this.m) if (this.m = null, 1 == this.H) {
    if (!a) {
      this.W = Math.floor(1e5 * Math.random());
      a = this.W++;
      const e = new bc(this, this.l, a);
      let f = this.s;
      this.U && (f ? (f = Pa(f), Ra(f, this.U)) : f = this.U);
      null !== this.o || this.O || (e.I = f, f = null);
      if (this.P) a: {
        var b2 = 0;
        for (var c = 0; c < this.j.length; c++) {
          b: {
            var d = this.j[c];
            if ("__data__" in d.map && (d = d.map.__data__, "string" === typeof d)) {
              d = d.length;
              break b;
            }
            d = void 0;
          }
          if (void 0 === d) break;
          b2 += d;
          if (4096 < b2) {
            b2 = c;
            break a;
          }
          if (4096 === b2 || c === this.j.length - 1) {
            b2 = c + 1;
            break a;
          }
        }
        b2 = 1e3;
      }
      else b2 = 1e3;
      b2 = Kd(this, e, b2);
      c = G(this.I);
      K(c, "RID", a);
      K(c, "CVER", 22);
      this.F && K(c, "X-HTTP-Session-Id", this.F);
      Gd(this, c);
      f && (this.O ? b2 = "headers=" + encodeURIComponent(String(Bd(f))) + "&" + b2 : this.o && Cd(c, this.o, f));
      Cc(this.i, e);
      this.bb && K(c, "TYPE", "init");
      this.P ? (K(c, "$req", b2), K(c, "SID", "null"), e.aa = true, gc(e, c, null)) : gc(e, c, b2);
      this.H = 2;
    }
  } else 3 == this.H && (a ? Ld(this, a) : 0 == this.j.length || ed(this.i) || Ld(this));
};
function Ld(a, b2) {
  var c;
  b2 ? c = b2.m : c = a.W++;
  const d = G(a.I);
  K(d, "SID", a.K);
  K(d, "RID", c);
  K(d, "AID", a.V);
  Gd(a, d);
  a.o && a.s && Cd(d, a.o, a.s);
  c = new bc(a, a.l, c, a.C + 1);
  null === a.o && (c.I = a.s);
  b2 && (a.j = b2.F.concat(a.j));
  b2 = Kd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.xa) + Math.round(0.5 * a.xa * Math.random()));
  Cc(a.i, c);
  gc(c, d, b2);
}
function Gd(a, b2) {
  a.na && Na(a.na, function(c, d) {
    K(b2, d, c);
  });
  a.h && Kc({}, function(c, d) {
    K(b2, d, c);
  });
}
function Kd(a, b2, c) {
  c = Math.min(a.j.length, c);
  var d = a.h ? q(a.h.Va, a.h, a) : null;
  a: {
    var e = a.j;
    let f = -1;
    for (; ; ) {
      const h = ["count=" + c];
      -1 == f ? 0 < c ? (f = e[0].g, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
      let n = true;
      for (let t = 0; t < c; t++) {
        let m = e[t].g;
        const u = e[t].map;
        m -= f;
        if (0 > m) f = Math.max(0, e[t].g - 100), n = false;
        else try {
          id(u, h, "req" + m + "_");
        } catch (L2) {
          d && d(u);
        }
      }
      if (n) {
        d = h.join("&");
        break a;
      }
    }
  }
  a = a.j.splice(0, c);
  b2.F = a;
  return d;
}
function Fc(a) {
  if (!a.g && !a.u) {
    a.ba = 1;
    var b2 = a.Ma;
    sb || vb();
    tb || (sb(), tb = true);
    mb.add(b2, a);
    a.A = 0;
  }
}
function Ac(a) {
  if (a.g || a.u || 3 <= a.A) return false;
  a.ba++;
  a.u = Rb(q(a.Ma, a), Jd(a, a.A));
  a.A++;
  return true;
}
k.Ma = function() {
  this.u = null;
  Md(this);
  if (this.ca && !(this.M || null == this.g || 0 >= this.S)) {
    var a = 2 * this.S;
    this.l.info("BP detection timer enabled: " + a);
    this.B = Rb(q(this.jb, this), a);
  }
};
k.jb = function() {
  this.B && (this.B = null, this.l.info("BP detection timeout reached."), this.l.info("Buffering proxy detected and switch to long-polling!"), this.G = false, this.M = true, F(10), zc(this), Md(this));
};
function vc(a) {
  null != a.B && (l.clearTimeout(a.B), a.B = null);
}
function Md(a) {
  a.g = new bc(a, a.l, "rpc", a.ba);
  null === a.o && (a.g.I = a.s);
  a.g.O = 0;
  var b2 = G(a.wa);
  K(b2, "RID", "rpc");
  K(b2, "SID", a.K);
  K(b2, "AID", a.V);
  K(b2, "CI", a.G ? "0" : "1");
  !a.G && a.qa && K(b2, "TO", a.qa);
  K(b2, "TYPE", "xmlhttp");
  Gd(a, b2);
  a.o && a.s && Cd(b2, a.o, a.s);
  a.L && a.g.setTimeout(a.L);
  var c = a.g;
  a = a.pa;
  c.L = 1;
  c.v = hc(G(b2));
  c.s = null;
  c.S = true;
  ic(c, a);
}
k.ib = function() {
  null != this.v && (this.v = null, zc(this), Ac(this), F(19));
};
function yc(a) {
  null != a.v && (l.clearTimeout(a.v), a.v = null);
}
function sc(a, b2) {
  var c = null;
  if (a.g == b2) {
    yc(a);
    vc(a);
    a.g = null;
    var d = 2;
  } else if (xc(a.i, b2)) c = b2.F, Ec(a.i, b2), d = 1;
  else return;
  if (0 != a.H) {
    if (b2.i) {
      if (1 == d) {
        c = b2.s ? b2.s.length : 0;
        b2 = Date.now() - b2.G;
        var e = a.C;
        d = Mb();
        C(d, new Qb(d, c));
        Gc(a);
      } else Fc(a);
    } else if (e = b2.o, 3 == e || 0 == e && 0 < b2.ca || !(1 == d && Id(a, b2) || 2 == d && Ac(a))) switch (c && 0 < c.length && (b2 = a.i, b2.i = b2.i.concat(c)), e) {
      case 1:
        J(a, 5);
        break;
      case 4:
        J(a, 10);
        break;
      case 3:
        J(a, 6);
        break;
      default:
        J(a, 2);
    }
  }
}
function Jd(a, b2) {
  let c = a.ab + Math.floor(Math.random() * a.hb);
  a.isActive() || (c *= 2);
  return c * b2;
}
function J(a, b2) {
  a.l.info("Error code " + b2);
  if (2 == b2) {
    var c = null;
    a.h && (c = null);
    var d = q(a.pb, a);
    c || (c = new M("//www.google.com/images/cleardot.gif"), l.location && "http" == l.location.protocol || Nc(c, "https"), hc(c));
    jd(c.toString(), d);
  } else F(2);
  a.H = 0;
  a.h && a.h.za(b2);
  Hd(a);
  Fd(a);
}
k.pb = function(a) {
  a ? (this.l.info("Successfully pinged google.com"), F(2)) : (this.l.info("Failed to ping google.com"), F(1));
};
function Hd(a) {
  a.H = 0;
  a.ma = [];
  if (a.h) {
    const b2 = fd(a.i);
    if (0 != b2.length || 0 != a.j.length) na(a.ma, b2), na(a.ma, a.j), a.i.i.length = 0, ma(a.j), a.j.length = 0;
    a.h.ya();
  }
}
function Dc(a, b2, c) {
  var d = c instanceof M ? G(c) : new M(c);
  if ("" != d.g) b2 && (d.g = b2 + "." + d.g), Oc(d, d.m);
  else {
    var e = l.location;
    d = e.protocol;
    b2 = b2 ? b2 + "." + e.hostname : e.hostname;
    e = +e.port;
    var f = new M(null);
    d && Nc(f, d);
    b2 && (f.g = b2);
    e && Oc(f, e);
    c && (f.l = c);
    d = f;
  }
  c = a.F;
  b2 = a.Da;
  c && b2 && K(d, c, b2);
  K(d, "VER", a.ra);
  Gd(a, d);
  return d;
}
function lc(a, b2, c) {
  if (b2 && !a.J) throw Error("Can't create secondary domain capable XhrIo object.");
  b2 = c && a.Ha && !a.va ? new P(new ld({
    ob: true
  })) : new P(a.va);
  b2.Oa(a.J);
  return b2;
}
k.isActive = function() {
  return !!this.h && this.h.isActive(this);
};
function Nd() {
}
k = Nd.prototype;
k.Ba = function() {
};
k.Aa = function() {
};
k.za = function() {
};
k.ya = function() {
};
k.isActive = function() {
  return true;
};
k.Va = function() {
};
function Od() {
  if (z && !(10 <= Number(Fa))) throw Error("Environmental error: no available transport.");
}
Od.prototype.g = function(a, b2) {
  return new Q(a, b2);
};
function Q(a, b2) {
  B.call(this);
  this.g = new Ed(b2);
  this.l = a;
  this.h = b2 && b2.messageUrlParams || null;
  a = b2 && b2.messageHeaders || null;
  b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
    "X-Client-Protocol": "webchannel"
  });
  this.g.s = a;
  a = b2 && b2.initMessageHeaders || null;
  b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = {
    "X-WebChannel-Content-Type": b2.messageContentType
  });
  b2 && b2.Ca && (a ? a["X-WebChannel-Client-Profile"] = b2.Ca : a = {
    "X-WebChannel-Client-Profile": b2.Ca
  });
  this.g.U = a;
  (a = b2 && b2.cc) && !x(a) && (this.g.o = a);
  this.A = b2 && b2.supportsCrossDomainXhr || false;
  this.v = b2 && b2.sendRawJson || false;
  (b2 = b2 && b2.httpSessionIdParam) && !x(b2) && (this.g.F = b2, a = this.h, null !== a && b2 in a && (a = this.h, b2 in a && delete a[b2]));
  this.j = new R(this);
}
r(Q, B);
Q.prototype.m = function() {
  this.g.h = this.j;
  this.A && (this.g.J = true);
  var a = this.g, b2 = this.l, c = this.h || void 0;
  F(0);
  a.Y = b2;
  a.na = c || {};
  a.G = a.aa;
  a.I = Dc(a, null, a.Y);
  Gc(a);
};
Q.prototype.close = function() {
  Hc(this.g);
};
Q.prototype.u = function(a) {
  var b2 = this.g;
  if ("string" === typeof a) {
    var c = {};
    c.__data__ = a;
    a = c;
  } else this.v && (c = {}, c.__data__ = jb(a), a = c);
  b2.j.push(new bd(b2.fb++, a));
  3 == b2.H && Gc(b2);
};
Q.prototype.N = function() {
  this.g.h = null;
  delete this.j;
  Hc(this.g);
  delete this.g;
  Q.$.N.call(this);
};
function Pd(a) {
  Yb.call(this);
  a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
  var b2 = a.__sm__;
  if (b2) {
    a: {
      for (const c in b2) {
        a = c;
        break a;
      }
      a = void 0;
    }
    if (this.i = a) a = this.i, b2 = null !== b2 && a in b2 ? b2[a] : void 0;
    this.data = b2;
  } else this.data = a;
}
r(Pd, Yb);
function Qd() {
  Zb.call(this);
  this.status = 1;
}
r(Qd, Zb);
function R(a) {
  this.g = a;
}
r(R, Nd);
R.prototype.Ba = function() {
  C(this.g, "a");
};
R.prototype.Aa = function(a) {
  C(this.g, new Pd(a));
};
R.prototype.za = function(a) {
  C(this.g, new Qd());
};
R.prototype.ya = function() {
  C(this.g, "b");
};
function Rd() {
  this.blockSize = -1;
}
function S() {
  this.blockSize = -1;
  this.blockSize = 64;
  this.g = Array(4);
  this.m = Array(this.blockSize);
  this.i = this.h = 0;
  this.reset();
}
r(S, Rd);
S.prototype.reset = function() {
  this.g[0] = 1732584193;
  this.g[1] = 4023233417;
  this.g[2] = 2562383102;
  this.g[3] = 271733878;
  this.i = this.h = 0;
};
function Sd(a, b2, c) {
  c || (c = 0);
  var d = Array(16);
  if ("string" === typeof b2) for (var e = 0; 16 > e; ++e) d[e] = b2.charCodeAt(c++) | b2.charCodeAt(c++) << 8 | b2.charCodeAt(c++) << 16 | b2.charCodeAt(c++) << 24;
  else for (e = 0; 16 > e; ++e) d[e] = b2[c++] | b2[c++] << 8 | b2[c++] << 16 | b2[c++] << 24;
  b2 = a.g[0];
  c = a.g[1];
  e = a.g[2];
  var f = a.g[3];
  var h = b2 + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
  b2 = c + (h << 7 & 4294967295 | h >>> 25);
  h = f + (e ^ b2 & (c ^ e)) + d[1] + 3905402710 & 4294967295;
  f = b2 + (h << 12 & 4294967295 | h >>> 20);
  h = e + (c ^ f & (b2 ^ c)) + d[2] + 606105819 & 4294967295;
  e = f + (h << 17 & 4294967295 | h >>> 15);
  h = c + (b2 ^ e & (f ^ b2)) + d[3] + 3250441966 & 4294967295;
  c = e + (h << 22 & 4294967295 | h >>> 10);
  h = b2 + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
  b2 = c + (h << 7 & 4294967295 | h >>> 25);
  h = f + (e ^ b2 & (c ^ e)) + d[5] + 1200080426 & 4294967295;
  f = b2 + (h << 12 & 4294967295 | h >>> 20);
  h = e + (c ^ f & (b2 ^ c)) + d[6] + 2821735955 & 4294967295;
  e = f + (h << 17 & 4294967295 | h >>> 15);
  h = c + (b2 ^ e & (f ^ b2)) + d[7] + 4249261313 & 4294967295;
  c = e + (h << 22 & 4294967295 | h >>> 10);
  h = b2 + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
  b2 = c + (h << 7 & 4294967295 | h >>> 25);
  h = f + (e ^ b2 & (c ^ e)) + d[9] + 2336552879 & 4294967295;
  f = b2 + (h << 12 & 4294967295 | h >>> 20);
  h = e + (c ^ f & (b2 ^ c)) + d[10] + 4294925233 & 4294967295;
  e = f + (h << 17 & 4294967295 | h >>> 15);
  h = c + (b2 ^ e & (f ^ b2)) + d[11] + 2304563134 & 4294967295;
  c = e + (h << 22 & 4294967295 | h >>> 10);
  h = b2 + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
  b2 = c + (h << 7 & 4294967295 | h >>> 25);
  h = f + (e ^ b2 & (c ^ e)) + d[13] + 4254626195 & 4294967295;
  f = b2 + (h << 12 & 4294967295 | h >>> 20);
  h = e + (c ^ f & (b2 ^ c)) + d[14] + 2792965006 & 4294967295;
  e = f + (h << 17 & 4294967295 | h >>> 15);
  h = c + (b2 ^ e & (f ^ b2)) + d[15] + 1236535329 & 4294967295;
  c = e + (h << 22 & 4294967295 | h >>> 10);
  h = b2 + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
  b2 = c + (h << 5 & 4294967295 | h >>> 27);
  h = f + (c ^ e & (b2 ^ c)) + d[6] + 3225465664 & 4294967295;
  f = b2 + (h << 9 & 4294967295 | h >>> 23);
  h = e + (b2 ^ c & (f ^ b2)) + d[11] + 643717713 & 4294967295;
  e = f + (h << 14 & 4294967295 | h >>> 18);
  h = c + (f ^ b2 & (e ^ f)) + d[0] + 3921069994 & 4294967295;
  c = e + (h << 20 & 4294967295 | h >>> 12);
  h = b2 + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
  b2 = c + (h << 5 & 4294967295 | h >>> 27);
  h = f + (c ^ e & (b2 ^ c)) + d[10] + 38016083 & 4294967295;
  f = b2 + (h << 9 & 4294967295 | h >>> 23);
  h = e + (b2 ^ c & (f ^ b2)) + d[15] + 3634488961 & 4294967295;
  e = f + (h << 14 & 4294967295 | h >>> 18);
  h = c + (f ^ b2 & (e ^ f)) + d[4] + 3889429448 & 4294967295;
  c = e + (h << 20 & 4294967295 | h >>> 12);
  h = b2 + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
  b2 = c + (h << 5 & 4294967295 | h >>> 27);
  h = f + (c ^ e & (b2 ^ c)) + d[14] + 3275163606 & 4294967295;
  f = b2 + (h << 9 & 4294967295 | h >>> 23);
  h = e + (b2 ^ c & (f ^ b2)) + d[3] + 4107603335 & 4294967295;
  e = f + (h << 14 & 4294967295 | h >>> 18);
  h = c + (f ^ b2 & (e ^ f)) + d[8] + 1163531501 & 4294967295;
  c = e + (h << 20 & 4294967295 | h >>> 12);
  h = b2 + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
  b2 = c + (h << 5 & 4294967295 | h >>> 27);
  h = f + (c ^ e & (b2 ^ c)) + d[2] + 4243563512 & 4294967295;
  f = b2 + (h << 9 & 4294967295 | h >>> 23);
  h = e + (b2 ^ c & (f ^ b2)) + d[7] + 1735328473 & 4294967295;
  e = f + (h << 14 & 4294967295 | h >>> 18);
  h = c + (f ^ b2 & (e ^ f)) + d[12] + 2368359562 & 4294967295;
  c = e + (h << 20 & 4294967295 | h >>> 12);
  h = b2 + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
  b2 = c + (h << 4 & 4294967295 | h >>> 28);
  h = f + (b2 ^ c ^ e) + d[8] + 2272392833 & 4294967295;
  f = b2 + (h << 11 & 4294967295 | h >>> 21);
  h = e + (f ^ b2 ^ c) + d[11] + 1839030562 & 4294967295;
  e = f + (h << 16 & 4294967295 | h >>> 16);
  h = c + (e ^ f ^ b2) + d[14] + 4259657740 & 4294967295;
  c = e + (h << 23 & 4294967295 | h >>> 9);
  h = b2 + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
  b2 = c + (h << 4 & 4294967295 | h >>> 28);
  h = f + (b2 ^ c ^ e) + d[4] + 1272893353 & 4294967295;
  f = b2 + (h << 11 & 4294967295 | h >>> 21);
  h = e + (f ^ b2 ^ c) + d[7] + 4139469664 & 4294967295;
  e = f + (h << 16 & 4294967295 | h >>> 16);
  h = c + (e ^ f ^ b2) + d[10] + 3200236656 & 4294967295;
  c = e + (h << 23 & 4294967295 | h >>> 9);
  h = b2 + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
  b2 = c + (h << 4 & 4294967295 | h >>> 28);
  h = f + (b2 ^ c ^ e) + d[0] + 3936430074 & 4294967295;
  f = b2 + (h << 11 & 4294967295 | h >>> 21);
  h = e + (f ^ b2 ^ c) + d[3] + 3572445317 & 4294967295;
  e = f + (h << 16 & 4294967295 | h >>> 16);
  h = c + (e ^ f ^ b2) + d[6] + 76029189 & 4294967295;
  c = e + (h << 23 & 4294967295 | h >>> 9);
  h = b2 + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
  b2 = c + (h << 4 & 4294967295 | h >>> 28);
  h = f + (b2 ^ c ^ e) + d[12] + 3873151461 & 4294967295;
  f = b2 + (h << 11 & 4294967295 | h >>> 21);
  h = e + (f ^ b2 ^ c) + d[15] + 530742520 & 4294967295;
  e = f + (h << 16 & 4294967295 | h >>> 16);
  h = c + (e ^ f ^ b2) + d[2] + 3299628645 & 4294967295;
  c = e + (h << 23 & 4294967295 | h >>> 9);
  h = b2 + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
  b2 = c + (h << 6 & 4294967295 | h >>> 26);
  h = f + (c ^ (b2 | ~e)) + d[7] + 1126891415 & 4294967295;
  f = b2 + (h << 10 & 4294967295 | h >>> 22);
  h = e + (b2 ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
  e = f + (h << 15 & 4294967295 | h >>> 17);
  h = c + (f ^ (e | ~b2)) + d[5] + 4237533241 & 4294967295;
  c = e + (h << 21 & 4294967295 | h >>> 11);
  h = b2 + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
  b2 = c + (h << 6 & 4294967295 | h >>> 26);
  h = f + (c ^ (b2 | ~e)) + d[3] + 2399980690 & 4294967295;
  f = b2 + (h << 10 & 4294967295 | h >>> 22);
  h = e + (b2 ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
  e = f + (h << 15 & 4294967295 | h >>> 17);
  h = c + (f ^ (e | ~b2)) + d[1] + 2240044497 & 4294967295;
  c = e + (h << 21 & 4294967295 | h >>> 11);
  h = b2 + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
  b2 = c + (h << 6 & 4294967295 | h >>> 26);
  h = f + (c ^ (b2 | ~e)) + d[15] + 4264355552 & 4294967295;
  f = b2 + (h << 10 & 4294967295 | h >>> 22);
  h = e + (b2 ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
  e = f + (h << 15 & 4294967295 | h >>> 17);
  h = c + (f ^ (e | ~b2)) + d[13] + 1309151649 & 4294967295;
  c = e + (h << 21 & 4294967295 | h >>> 11);
  h = b2 + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
  b2 = c + (h << 6 & 4294967295 | h >>> 26);
  h = f + (c ^ (b2 | ~e)) + d[11] + 3174756917 & 4294967295;
  f = b2 + (h << 10 & 4294967295 | h >>> 22);
  h = e + (b2 ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
  e = f + (h << 15 & 4294967295 | h >>> 17);
  h = c + (f ^ (e | ~b2)) + d[9] + 3951481745 & 4294967295;
  a.g[0] = a.g[0] + b2 & 4294967295;
  a.g[1] = a.g[1] + (e + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
  a.g[2] = a.g[2] + e & 4294967295;
  a.g[3] = a.g[3] + f & 4294967295;
}
S.prototype.j = function(a, b2) {
  void 0 === b2 && (b2 = a.length);
  for (var c = b2 - this.blockSize, d = this.m, e = this.h, f = 0; f < b2; ) {
    if (0 == e) for (; f <= c; ) Sd(this, a, f), f += this.blockSize;
    if ("string" === typeof a) for (; f < b2; ) {
      if (d[e++] = a.charCodeAt(f++), e == this.blockSize) {
        Sd(this, d);
        e = 0;
        break;
      }
    }
    else for (; f < b2; ) if (d[e++] = a[f++], e == this.blockSize) {
      Sd(this, d);
      e = 0;
      break;
    }
  }
  this.h = e;
  this.i += b2;
};
S.prototype.l = function() {
  var a = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
  a[0] = 128;
  for (var b2 = 1; b2 < a.length - 8; ++b2) a[b2] = 0;
  var c = 8 * this.i;
  for (b2 = a.length - 8; b2 < a.length; ++b2) a[b2] = c & 255, c /= 256;
  this.j(a);
  a = Array(16);
  for (b2 = c = 0; 4 > b2; ++b2) for (var d = 0; 32 > d; d += 8) a[c++] = this.g[b2] >>> d & 255;
  return a;
};
function T(a, b2) {
  this.h = b2;
  for (var c = [], d = true, e = a.length - 1; 0 <= e; e--) {
    var f = a[e] | 0;
    d && f == b2 || (c[e] = f, d = false);
  }
  this.g = c;
}
var sa = {};
function Td(a) {
  return -128 <= a && 128 > a ? ra(a, function(b2) {
    return new T([b2 | 0], 0 > b2 ? -1 : 0);
  }) : new T([a | 0], 0 > a ? -1 : 0);
}
function U(a) {
  if (isNaN(a) || !isFinite(a)) return V;
  if (0 > a) return W(U(-a));
  for (var b2 = [], c = 1, d = 0; a >= c; d++) b2[d] = a / c | 0, c *= Ud;
  return new T(b2, 0);
}
function Vd(a, b2) {
  if (0 == a.length) throw Error("number format error: empty string");
  b2 = b2 || 10;
  if (2 > b2 || 36 < b2) throw Error("radix out of range: " + b2);
  if ("-" == a.charAt(0)) return W(Vd(a.substring(1), b2));
  if (0 <= a.indexOf("-")) throw Error('number format error: interior "-" character');
  for (var c = U(Math.pow(b2, 8)), d = V, e = 0; e < a.length; e += 8) {
    var f = Math.min(8, a.length - e), h = parseInt(a.substring(e, e + f), b2);
    8 > f ? (f = U(Math.pow(b2, f)), d = d.R(f).add(U(h))) : (d = d.R(c), d = d.add(U(h)));
  }
  return d;
}
var Ud = 4294967296;
var V = Td(0);
var Wd = Td(1);
var Xd = Td(16777216);
k = T.prototype;
k.ea = function() {
  if (X(this)) return -W(this).ea();
  for (var a = 0, b2 = 1, c = 0; c < this.g.length; c++) {
    var d = this.D(c);
    a += (0 <= d ? d : Ud + d) * b2;
    b2 *= Ud;
  }
  return a;
};
k.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) throw Error("radix out of range: " + a);
  if (Y(this)) return "0";
  if (X(this)) return "-" + W(this).toString(a);
  for (var b2 = U(Math.pow(a, 6)), c = this, d = ""; ; ) {
    var e = Yd(c, b2).g;
    c = Zd(c, e.R(b2));
    var f = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(a);
    c = e;
    if (Y(c)) return f + d;
    for (; 6 > f.length; ) f = "0" + f;
    d = f + d;
  }
};
k.D = function(a) {
  return 0 > a ? 0 : a < this.g.length ? this.g[a] : this.h;
};
function Y(a) {
  if (0 != a.h) return false;
  for (var b2 = 0; b2 < a.g.length; b2++) if (0 != a.g[b2]) return false;
  return true;
}
function X(a) {
  return -1 == a.h;
}
k.X = function(a) {
  a = Zd(this, a);
  return X(a) ? -1 : Y(a) ? 0 : 1;
};
function W(a) {
  for (var b2 = a.g.length, c = [], d = 0; d < b2; d++) c[d] = ~a.g[d];
  return new T(c, ~a.h).add(Wd);
}
k.abs = function() {
  return X(this) ? W(this) : this;
};
k.add = function(a) {
  for (var b2 = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b2; e++) {
    var f = d + (this.D(e) & 65535) + (a.D(e) & 65535), h = (f >>> 16) + (this.D(e) >>> 16) + (a.D(e) >>> 16);
    d = h >>> 16;
    f &= 65535;
    h &= 65535;
    c[e] = h << 16 | f;
  }
  return new T(c, c[c.length - 1] & -2147483648 ? -1 : 0);
};
function Zd(a, b2) {
  return a.add(W(b2));
}
k.R = function(a) {
  if (Y(this) || Y(a)) return V;
  if (X(this)) return X(a) ? W(this).R(W(a)) : W(W(this).R(a));
  if (X(a)) return W(this.R(W(a)));
  if (0 > this.X(Xd) && 0 > a.X(Xd)) return U(this.ea() * a.ea());
  for (var b2 = this.g.length + a.g.length, c = [], d = 0; d < 2 * b2; d++) c[d] = 0;
  for (d = 0; d < this.g.length; d++) for (var e = 0; e < a.g.length; e++) {
    var f = this.D(d) >>> 16, h = this.D(d) & 65535, n = a.D(e) >>> 16, t = a.D(e) & 65535;
    c[2 * d + 2 * e] += h * t;
    $d(c, 2 * d + 2 * e);
    c[2 * d + 2 * e + 1] += f * t;
    $d(c, 2 * d + 2 * e + 1);
    c[2 * d + 2 * e + 1] += h * n;
    $d(c, 2 * d + 2 * e + 1);
    c[2 * d + 2 * e + 2] += f * n;
    $d(c, 2 * d + 2 * e + 2);
  }
  for (d = 0; d < b2; d++) c[d] = c[2 * d + 1] << 16 | c[2 * d];
  for (d = b2; d < 2 * b2; d++) c[d] = 0;
  return new T(c, 0);
};
function $d(a, b2) {
  for (; (a[b2] & 65535) != a[b2]; ) a[b2 + 1] += a[b2] >>> 16, a[b2] &= 65535, b2++;
}
function ae(a, b2) {
  this.g = a;
  this.h = b2;
}
function Yd(a, b2) {
  if (Y(b2)) throw Error("division by zero");
  if (Y(a)) return new ae(V, V);
  if (X(a)) return b2 = Yd(W(a), b2), new ae(W(b2.g), W(b2.h));
  if (X(b2)) return b2 = Yd(a, W(b2)), new ae(W(b2.g), b2.h);
  if (30 < a.g.length) {
    if (X(a) || X(b2)) throw Error("slowDivide_ only works with positive integers.");
    for (var c = Wd, d = b2; 0 >= d.X(a); ) c = be(c), d = be(d);
    var e = Z(c, 1), f = Z(d, 1);
    d = Z(d, 2);
    for (c = Z(c, 2); !Y(d); ) {
      var h = f.add(d);
      0 >= h.X(a) && (e = e.add(c), f = h);
      d = Z(d, 1);
      c = Z(c, 1);
    }
    b2 = Zd(a, e.R(b2));
    return new ae(e, b2);
  }
  for (e = V; 0 <= a.X(b2); ) {
    c = Math.max(1, Math.floor(a.ea() / b2.ea()));
    d = Math.ceil(Math.log(c) / Math.LN2);
    d = 48 >= d ? 1 : Math.pow(2, d - 48);
    f = U(c);
    for (h = f.R(b2); X(h) || 0 < h.X(a); ) c -= d, f = U(c), h = f.R(b2);
    Y(f) && (f = Wd);
    e = e.add(f);
    a = Zd(a, h);
  }
  return new ae(e, a);
}
k.gb = function(a) {
  return Yd(this, a).h;
};
k.and = function(a) {
  for (var b2 = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b2; d++) c[d] = this.D(d) & a.D(d);
  return new T(c, this.h & a.h);
};
k.or = function(a) {
  for (var b2 = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b2; d++) c[d] = this.D(d) | a.D(d);
  return new T(c, this.h | a.h);
};
k.xor = function(a) {
  for (var b2 = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b2; d++) c[d] = this.D(d) ^ a.D(d);
  return new T(c, this.h ^ a.h);
};
function be(a) {
  for (var b2 = a.g.length + 1, c = [], d = 0; d < b2; d++) c[d] = a.D(d) << 1 | a.D(d - 1) >>> 31;
  return new T(c, a.h);
}
function Z(a, b2) {
  var c = b2 >> 5;
  b2 %= 32;
  for (var d = a.g.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b2 ? a.D(f + c) >>> b2 | a.D(f + c + 1) << 32 - b2 : a.D(f + c);
  return new T(e, a.h);
}
Od.prototype.createWebChannel = Od.prototype.g;
Q.prototype.send = Q.prototype.u;
Q.prototype.open = Q.prototype.m;
Q.prototype.close = Q.prototype.close;
Sb.NO_ERROR = 0;
Sb.TIMEOUT = 8;
Sb.HTTP_ERROR = 6;
Tb.COMPLETE = "complete";
Wb.EventType = Xb;
Xb.OPEN = "a";
Xb.CLOSE = "b";
Xb.ERROR = "c";
Xb.MESSAGE = "d";
B.prototype.listen = B.prototype.O;
P.prototype.listenOnce = P.prototype.P;
P.prototype.getLastError = P.prototype.Sa;
P.prototype.getLastErrorCode = P.prototype.Ia;
P.prototype.getStatus = P.prototype.da;
P.prototype.getResponseJson = P.prototype.Wa;
P.prototype.getResponseText = P.prototype.ja;
P.prototype.send = P.prototype.ha;
P.prototype.setWithCredentials = P.prototype.Oa;
S.prototype.digest = S.prototype.l;
S.prototype.reset = S.prototype.reset;
S.prototype.update = S.prototype.j;
T.prototype.add = T.prototype.add;
T.prototype.multiply = T.prototype.R;
T.prototype.modulo = T.prototype.gb;
T.prototype.compare = T.prototype.X;
T.prototype.toNumber = T.prototype.ea;
T.prototype.toString = T.prototype.toString;
T.prototype.getBits = T.prototype.D;
T.fromNumber = U;
T.fromString = Vd;
var createWebChannelTransport = esm.createWebChannelTransport = function() {
  return new Od();
};
var getStatEventTarget = esm.getStatEventTarget = function() {
  return Mb();
};
var ErrorCode = esm.ErrorCode = Sb;
var EventType = esm.EventType = Tb;
var Event = esm.Event = E;
var Stat = esm.Stat = {
  xb: 0,
  Ab: 1,
  Bb: 2,
  Ub: 3,
  Zb: 4,
  Wb: 5,
  Xb: 6,
  Vb: 7,
  Tb: 8,
  Yb: 9,
  PROXY: 10,
  NOPROXY: 11,
  Rb: 12,
  Nb: 13,
  Ob: 14,
  Mb: 15,
  Pb: 16,
  Qb: 17,
  tb: 18,
  sb: 19,
  ub: 20
};
var FetchXmlHttpFactory = esm.FetchXmlHttpFactory = ld;
var WebChannel = esm.WebChannel = Wb;
var XhrIo = esm.XhrIo = P;
var Md5 = esm.Md5 = S;
var Integer = esm.Integer = T;

// node_modules/@firebase/firestore/dist/index.esm2017.js
var b = "@firebase/firestore";
var V2 = class {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
};
V2.UNAUTHENTICATED = new V2(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
V2.GOOGLE_CREDENTIALS = new V2("google-credentials-uid"), V2.FIRST_PARTY = new V2("first-party-uid"), V2.MOCK_USER = new V2("mock-user");
var S2 = "9.23.0";
var D2 = new Logger("@firebase/firestore");
function C2() {
  return D2.logLevel;
}
function x2(t) {
  D2.setLogLevel(t);
}
function N2(t, ...e) {
  if (D2.logLevel <= LogLevel.DEBUG) {
    const n = e.map($);
    D2.debug(`Firestore (${S2}): ${t}`, ...n);
  }
}
function k2(t, ...e) {
  if (D2.logLevel <= LogLevel.ERROR) {
    const n = e.map($);
    D2.error(`Firestore (${S2}): ${t}`, ...n);
  }
}
function M2(t, ...e) {
  if (D2.logLevel <= LogLevel.WARN) {
    const n = e.map($);
    D2.warn(`Firestore (${S2}): ${t}`, ...n);
  }
}
function $(t) {
  if ("string" == typeof t) return t;
  try {
    return e = t, JSON.stringify(e);
  } catch (e2) {
    return t;
  }
  var e;
}
function O2(t = "Unexpected state") {
  const e = `FIRESTORE (${S2}) INTERNAL ASSERTION FAILED: ` + t;
  throw k2(e), new Error(e);
}
function F2(t, e) {
  t || O2();
}
function B2(t, e) {
  t || O2();
}
function L(t, e) {
  return t;
}
var q2 = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller can not be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
var U2 = class extends FirebaseError {
  /** @hideconstructor */
  constructor(t, e) {
    super(t, e), this.code = t, this.message = e, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var K2 = class {
  constructor() {
    this.promise = new Promise((t, e) => {
      this.resolve = t, this.reject = e;
    });
  }
};
var G2 = class {
  constructor(t, e) {
    this.user = e, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t}`);
  }
};
var Q2 = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t, e) {
    t.enqueueRetryable(() => e(V2.UNAUTHENTICATED));
  }
  shutdown() {
  }
};
var j = class {
  constructor(t) {
    this.token = t, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(t, e) {
    this.changeListener = e, // Fire with initial user.
    t.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
};
var z2 = class {
  constructor(t) {
    this.t = t, /** Tracks the current User. */
    this.currentUser = V2.UNAUTHENTICATED, /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(t, e) {
    let n = this.i;
    const s = (t2) => this.i !== n ? (n = this.i, e(t2)) : Promise.resolve();
    let i = new K2();
    this.o = () => {
      this.i++, this.currentUser = this.u(), i.resolve(), i = new K2(), t.enqueueRetryable(() => s(this.currentUser));
    };
    const r2 = () => {
      const e2 = i;
      t.enqueueRetryable(() => __async(this, null, function* () {
        yield e2.promise, yield s(this.currentUser);
      }));
    }, o = (t2) => {
      N2("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t2, this.auth.addAuthTokenListener(this.o), r2();
    };
    this.t.onInit((t2) => o(t2)), // Our users can initialize Auth right after Firestore, so we give it
    // a chance to register itself with the component framework before we
    // determine whether to start up in unauthenticated mode.
    setTimeout(() => {
      if (!this.auth) {
        const t2 = this.t.getImmediate({
          optional: true
        });
        t2 ? o(t2) : (
          // If auth is still not available, proceed with `null` user
          (N2("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new K2())
        );
      }
    }, 0), r2();
  }
  getToken() {
    const t = this.i, e = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(e).then((e2) => (
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      this.i !== t ? (N2("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e2 ? (F2("string" == typeof e2.accessToken), new G2(e2.accessToken, this.currentUser)) : null
    )) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  u() {
    const t = this.auth && this.auth.getUid();
    return F2(null === t || "string" == typeof t), new V2(t);
  }
};
var W2 = class {
  constructor(t, e, n) {
    this.h = t, this.l = e, this.m = n, this.type = "FirstParty", this.user = V2.FIRST_PARTY, this.g = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  p() {
    return this.m ? this.m() : null;
  }
  get headers() {
    this.g.set("X-Goog-AuthUser", this.h);
    const t = this.p();
    return t && this.g.set("Authorization", t), this.l && this.g.set("X-Goog-Iam-Authorization-Token", this.l), this.g;
  }
};
var H2 = class {
  constructor(t, e, n) {
    this.h = t, this.l = e, this.m = n;
  }
  getToken() {
    return Promise.resolve(new W2(this.h, this.l, this.m));
  }
  start(t, e) {
    t.enqueueRetryable(() => e(V2.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
};
var J2 = class {
  constructor(t) {
    this.value = t, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
};
var Y2 = class {
  constructor(t) {
    this.I = t, this.forceRefresh = false, this.appCheck = null, this.T = null;
  }
  start(t, e) {
    const n = (t2) => {
      null != t2.error && N2("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t2.error.message}`);
      const n2 = t2.token !== this.T;
      return this.T = t2.token, N2("FirebaseAppCheckTokenProvider", `Received ${n2 ? "new" : "existing"} token.`), n2 ? e(t2.token) : Promise.resolve();
    };
    this.o = (e2) => {
      t.enqueueRetryable(() => n(e2));
    };
    const s = (t2) => {
      N2("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t2, this.appCheck.addTokenListener(this.o);
    };
    this.I.onInit((t2) => s(t2)), // Our users can initialize AppCheck after Firestore, so we give it
    // a chance to register itself with the component framework.
    setTimeout(() => {
      if (!this.appCheck) {
        const t2 = this.I.getImmediate({
          optional: true
        });
        t2 ? s(t2) : (
          // If AppCheck is still not available, proceed without it.
          N2("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
        );
      }
    }, 0);
  }
  getToken() {
    const t = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(t).then((t2) => t2 ? (F2("string" == typeof t2.token), this.T = t2.token, new J2(t2.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
};
var X2 = class {
  getToken() {
    return Promise.resolve(new J2(""));
  }
  invalidateToken() {
  }
  start(t, e) {
  }
  shutdown() {
  }
};
function Z2(t) {
  const e = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto)
  ), n = new Uint8Array(t);
  if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);
  else
    for (let e2 = 0; e2 < t; e2++) n[e2] = Math.floor(256 * Math.random());
  return n;
}
var tt = class {
  static A() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
    let n = "";
    for (; n.length < 20; ) {
      const s = Z2(40);
      for (let i = 0; i < s.length; ++i)
        n.length < 20 && s[i] < e && (n += t.charAt(s[i] % t.length));
    }
    return n;
  }
};
function et(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function nt(t, e, n) {
  return t.length === e.length && t.every((t2, s) => n(t2, e[s]));
}
function st(t) {
  return t + "\0";
}
var it = class _it {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(t, e) {
    if (this.seconds = t, this.nanoseconds = e, e < 0) throw new U2(q2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9) throw new U2(q2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t < -62135596800) throw new U2(q2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800) throw new U2(q2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return _it.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(t) {
    return _it.fromMillis(t.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(t) {
    const e = Math.floor(t / 1e3), n = Math.floor(1e6 * (t - 1e3 * e));
    return new _it(e, n);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds ? et(this.nanoseconds, t.nanoseconds) : et(this.seconds, t.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const t = this.seconds - -62135596800;
    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
};
var rt = class _rt {
  constructor(t) {
    this.timestamp = t;
  }
  static fromTimestamp(t) {
    return new _rt(t);
  }
  static min() {
    return new _rt(new it(0, 0));
  }
  static max() {
    return new _rt(new it(253402300799, 999999999));
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var ot = class _ot {
  constructor(t, e, n) {
    void 0 === e ? e = 0 : e > t.length && O2(), void 0 === n ? n = t.length - e : n > t.length - e && O2(), this.segments = t, this.offset = e, this.len = n;
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return 0 === _ot.comparator(this, t);
  }
  child(t) {
    const e = this.segments.slice(this.offset, this.limit());
    return t instanceof _ot ? t.forEach((t2) => {
      e.push(t2);
    }) : e.push(t), this.construct(e);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return false;
    for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return false;
    return true;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return false;
    for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return false;
    return true;
  }
  forEach(t) {
    for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, e) {
    const n = Math.min(t.length, e.length);
    for (let s = 0; s < n; s++) {
      const n2 = t.get(s), i = e.get(s);
      if (n2 < i) return -1;
      if (n2 > i) return 1;
    }
    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
  }
};
var ut = class _ut extends ot {
  construct(t, e, n) {
    return new _ut(t, e, n);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...t) {
    const e = [];
    for (const n of t) {
      if (n.indexOf("//") >= 0) throw new U2(q2.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
      e.push(...n.split("/").filter((t2) => t2.length > 0));
    }
    return new _ut(e);
  }
  static emptyPath() {
    return new _ut([]);
  }
};
var ct = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var at = class _at extends ot {
  construct(t, e, n) {
    return new _at(t, e, n);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(t) {
    return ct.test(t);
  }
  canonicalString() {
    return this.toArray().map((t) => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), _at.isValidIdentifier(t) || (t = "`" + t + "`"), t)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return 1 === this.length && "__name__" === this.get(0);
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new _at(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(t) {
    const e = [];
    let n = "", s = 0;
    const i = () => {
      if (0 === n.length) throw new U2(q2.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      e.push(n), n = "";
    };
    let r2 = false;
    for (; s < t.length; ) {
      const e2 = t[s];
      if ("\\" === e2) {
        if (s + 1 === t.length) throw new U2(q2.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
        const e3 = t[s + 1];
        if ("\\" !== e3 && "." !== e3 && "`" !== e3) throw new U2(q2.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
        n += e3, s += 2;
      } else "`" === e2 ? (r2 = !r2, s++) : "." !== e2 || r2 ? (n += e2, s++) : (i(), s++);
    }
    if (i(), r2) throw new U2(q2.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new _at(e);
  }
  static emptyPath() {
    return new _at([]);
  }
};
var ht = class _ht {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new _ht(ut.fromString(t));
  }
  static fromName(t) {
    return new _ht(ut.fromString(t).popFirst(5));
  }
  static empty() {
    return new _ht(ut.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return null !== t && 0 === ut.comparator(this.path, t.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, e) {
    return ut.comparator(t.path, e.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(t) {
    return new _ht(new ut(t.slice()));
  }
};
var lt = class {
  constructor(t, e, n, s) {
    this.indexId = t, this.collectionGroup = e, this.fields = n, this.indexState = s;
  }
};
function ft(t) {
  return t.fields.find((t2) => 2 === t2.kind);
}
function dt(t) {
  return t.fields.filter((t2) => 2 !== t2.kind);
}
function wt(t, e) {
  let n = et(t.collectionGroup, e.collectionGroup);
  if (0 !== n) return n;
  for (let s = 0; s < Math.min(t.fields.length, e.fields.length); ++s) if (n = mt(t.fields[s], e.fields[s]), 0 !== n) return n;
  return et(t.fields.length, e.fields.length);
}
lt.UNKNOWN_ID = -1;
var _t = class {
  constructor(t, e) {
    this.fieldPath = t, this.kind = e;
  }
};
function mt(t, e) {
  const n = at.comparator(t.fieldPath, e.fieldPath);
  return 0 !== n ? n : et(t.kind, e.kind);
}
var gt = class _gt {
  constructor(t, e) {
    this.sequenceNumber = t, this.offset = e;
  }
  /** The state of an index that has not yet been backfilled. */
  static empty() {
    return new _gt(0, It.min());
  }
};
function yt(t, e) {
  const n = t.toTimestamp().seconds, s = t.toTimestamp().nanoseconds + 1, i = rt.fromTimestamp(1e9 === s ? new it(n + 1, 0) : new it(n, s));
  return new It(i, ht.empty(), e);
}
function pt(t) {
  return new It(t.readTime, t.key, -1);
}
var It = class _It {
  constructor(t, e, n) {
    this.readTime = t, this.documentKey = e, this.largestBatchId = n;
  }
  /** Returns an offset that sorts before all regular offsets. */
  static min() {
    return new _It(rt.min(), ht.empty(), -1);
  }
  /** Returns an offset that sorts after all regular offsets. */
  static max() {
    return new _It(rt.max(), ht.empty(), -1);
  }
};
function Tt(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return 0 !== n ? n : (n = ht.comparator(t.documentKey, e.documentKey), 0 !== n ? n : et(t.largestBatchId, e.largestBatchId));
}
var Et = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
var At = class {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t) {
    this.onCommittedListeners.push(t);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t) => t());
  }
};
function vt(t) {
  return __async(this, null, function* () {
    if (t.code !== q2.FAILED_PRECONDITION || t.message !== Et) throw t;
    N2("LocalStore", "Unexpectedly lost primary lease");
  });
}
var Rt = class _Rt {
  constructor(t) {
    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = false, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = false, t((t2) => {
      this.isDone = true, this.result = t2, this.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      this.nextCallback(t2);
    }, (t2) => {
      this.isDone = true, this.error = t2, this.catchCallback && this.catchCallback(t2);
    });
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, e) {
    return this.callbackAttached && O2(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t, this.result) : new _Rt((n, s) => {
      this.nextCallback = (e2) => {
        this.wrapSuccess(t, e2).next(n, s);
      }, this.catchCallback = (t2) => {
        this.wrapFailure(e, t2).next(n, s);
      };
    });
  }
  toPromise() {
    return new Promise((t, e) => {
      this.next(t, e);
    });
  }
  wrapUserFunction(t) {
    try {
      const e = t();
      return e instanceof _Rt ? e : _Rt.resolve(e);
    } catch (t2) {
      return _Rt.reject(t2);
    }
  }
  wrapSuccess(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : _Rt.resolve(e);
  }
  wrapFailure(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : _Rt.reject(e);
  }
  static resolve(t) {
    return new _Rt((e, n) => {
      e(t);
    });
  }
  static reject(t) {
    return new _Rt((e, n) => {
      n(t);
    });
  }
  static waitFor(t) {
    return new _Rt((e, n) => {
      let s = 0, i = 0, r2 = false;
      t.forEach((t2) => {
        ++s, t2.next(() => {
          ++i, r2 && i === s && e();
        }, (t3) => n(t3));
      }), r2 = true, i === s && e();
    });
  }
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  static or(t) {
    let e = _Rt.resolve(false);
    for (const n of t) e = e.next((t2) => t2 ? _Rt.resolve(t2) : n());
    return e;
  }
  static forEach(t, e) {
    const n = [];
    return t.forEach((t2, s) => {
      n.push(e.call(this, t2, s));
    }), this.waitFor(n);
  }
  /**
   * Concurrently map all array elements through asynchronous function.
   */
  static mapArray(t, e) {
    return new _Rt((n, s) => {
      const i = t.length, r2 = new Array(i);
      let o = 0;
      for (let u = 0; u < i; u++) {
        const c = u;
        e(t[c]).next((t2) => {
          r2[c] = t2, ++o, o === i && n(r2);
        }, (t2) => s(t2));
      }
    });
  }
  /**
   * An alternative to recursive PersistencePromise calls, that avoids
   * potential memory problems from unbounded chains of promises.
   *
   * The `action` will be called repeatedly while `condition` is true.
   */
  static doWhile(t, e) {
    return new _Rt((n, s) => {
      const i = () => {
        true === t() ? e().next(() => {
          i();
        }, s) : n();
      };
      i();
    });
  }
};
var Pt = class _Pt {
  constructor(t, e) {
    this.action = t, this.transaction = e, this.aborted = false, /**
     * A `Promise` that resolves with the result of the IndexedDb transaction.
     */
    this.v = new K2(), this.transaction.oncomplete = () => {
      this.v.resolve();
    }, this.transaction.onabort = () => {
      e.error ? this.v.reject(new St(t, e.error)) : this.v.resolve();
    }, this.transaction.onerror = (e2) => {
      const n = kt(e2.target.error);
      this.v.reject(new St(t, n));
    };
  }
  static open(t, e, n, s) {
    try {
      return new _Pt(e, t.transaction(s, n));
    } catch (t2) {
      throw new St(e, t2);
    }
  }
  get R() {
    return this.v.promise;
  }
  abort(t) {
    t && this.v.reject(t), this.aborted || (N2("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
  }
  P() {
    const t = this.transaction;
    this.aborted || "function" != typeof t.commit || t.commit();
  }
  /**
   * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
   * operations performed on the SimpleDbStore happen within the context of this
   * transaction and it cannot be used anymore once the transaction is
   * completed.
   *
   * Note that we can't actually enforce that the KeyType and ValueType are
   * correct, but they allow type safety through the rest of the consuming code.
   */
  store(t) {
    const e = this.transaction.objectStore(t);
    return new Ct(e);
  }
};
var bt = class _bt {
  /*
   * Creates a new SimpleDb wrapper for IndexedDb database `name`.
   *
   * Note that `version` must not be a downgrade. IndexedDB does not support
   * downgrading the schema version. We currently do not support any way to do
   * versioning outside of IndexedDB's versioning mechanism, as only
   * version-upgrade transactions are allowed to do things like create
   * objectstores.
   */
  constructor(t, e, n) {
    this.name = t, this.version = e, this.V = n;
    12.2 === _bt.S(getUA()) && k2("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  /** Deletes the specified database. */
  static delete(t) {
    return N2("SimpleDb", "Removing database:", t), xt(window.indexedDB.deleteDatabase(t)).toPromise();
  }
  /** Returns true if IndexedDB is available in the current environment. */
  static D() {
    if (!isIndexedDBAvailable()) return false;
    if (_bt.C()) return true;
    const t = getUA(), e = _bt.S(t), n = 0 < e && e < 10, s = _bt.N(t), i = 0 < s && s < 4.5;
    return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || n || i);
  }
  /**
   * Returns true if the backing IndexedDB store is the Node IndexedDBShim
   * (see https://github.com/axemclion/IndexedDBShim).
   */
  static C() {
    var t;
    return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.k);
  }
  /** Helper to get a typed SimpleDbStore from a transaction. */
  static M(t, e) {
    return t.store(e);
  }
  // visible for testing
  /** Parse User Agent to determine iOS version. Returns -1 if not found. */
  static S(t) {
    const e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  // visible for testing
  /** Parse User Agent to determine Android version. Returns -1 if not found. */
  static N(t) {
    const e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  /**
   * Opens the specified database, creating or upgrading it if necessary.
   */
  $(t) {
    return __async(this, null, function* () {
      return this.db || (N2("SimpleDb", "Opening database:", this.name), this.db = yield new Promise((e, n) => {
        const s = indexedDB.open(this.name, this.version);
        s.onsuccess = (t2) => {
          const n2 = t2.target.result;
          e(n2);
        }, s.onblocked = () => {
          n(new St(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
        }, s.onerror = (e2) => {
          const s2 = e2.target.error;
          "VersionError" === s2.name ? n(new U2(q2.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === s2.name ? n(new U2(q2.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + s2)) : n(new St(t, s2));
        }, s.onupgradeneeded = (t2) => {
          N2("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', t2.oldVersion);
          const e2 = t2.target.result;
          this.V.O(e2, s.transaction, t2.oldVersion, this.version).next(() => {
            N2("SimpleDb", "Database upgrade to version " + this.version + " complete");
          });
        };
      })), this.F && (this.db.onversionchange = (t2) => this.F(t2)), this.db;
    });
  }
  B(t) {
    this.F = t, this.db && (this.db.onversionchange = (e) => t(e));
  }
  runTransaction(t, e, n, s) {
    return __async(this, null, function* () {
      const i = "readonly" === e;
      let r2 = 0;
      for (; ; ) {
        ++r2;
        try {
          this.db = yield this.$(t);
          const e2 = Pt.open(this.db, t, i ? "readonly" : "readwrite", n), r3 = s(e2).next((t2) => (e2.P(), t2)).catch((t2) => (
            // Abort the transaction if there was an error.
            (e2.abort(t2), Rt.reject(t2))
          )).toPromise();
          return r3.catch(() => {
          }), // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
          // fire), but still return the original transactionFnResult back to the
          // caller.
          yield e2.R, r3;
        } catch (t2) {
          const e2 = t2, n2 = "FirebaseError" !== e2.name && r2 < 3;
          if (N2("SimpleDb", "Transaction failed with error:", e2.message, "Retrying:", n2), this.close(), !n2) return Promise.reject(e2);
        }
      }
    });
  }
  close() {
    this.db && this.db.close(), this.db = void 0;
  }
};
var Vt = class {
  constructor(t) {
    this.L = t, this.q = false, this.U = null;
  }
  get isDone() {
    return this.q;
  }
  get K() {
    return this.U;
  }
  set cursor(t) {
    this.L = t;
  }
  /**
   * This function can be called to stop iteration at any point.
   */
  done() {
    this.q = true;
  }
  /**
   * This function can be called to skip to that next key, which could be
   * an index or a primary key.
   */
  G(t) {
    this.U = t;
  }
  /**
   * Delete the current cursor value from the object store.
   *
   * NOTE: You CANNOT do this with a keysOnly query.
   */
  delete() {
    return xt(this.L.delete());
  }
};
var St = class extends U2 {
  constructor(t, e) {
    super(q2.UNAVAILABLE, `IndexedDB transaction '${t}' failed: ${e}`), this.name = "IndexedDbTransactionError";
  }
};
function Dt(t) {
  return "IndexedDbTransactionError" === t.name;
}
var Ct = class {
  constructor(t) {
    this.store = t;
  }
  put(t, e) {
    let n;
    return void 0 !== e ? (N2("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (N2("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), xt(n);
  }
  /**
   * Adds a new value into an Object Store and returns the new key. Similar to
   * IndexedDb's `add()`, this method will fail on primary key collisions.
   *
   * @param value - The object to write.
   * @returns The key of the value to add.
   */
  add(t) {
    N2("SimpleDb", "ADD", this.store.name, t, t);
    return xt(this.store.add(t));
  }
  /**
   * Gets the object with the specified key from the specified store, or null
   * if no object exists with the specified key.
   *
   * @key The key of the object to get.
   * @returns The object with the specified key or null if no object exists.
   */
  get(t) {
    return xt(this.store.get(t)).next((e) => (
      // Normalize nonexistence to null.
      (void 0 === e && (e = null), N2("SimpleDb", "GET", this.store.name, t, e), e)
    ));
  }
  delete(t) {
    N2("SimpleDb", "DELETE", this.store.name, t);
    return xt(this.store.delete(t));
  }
  /**
   * If we ever need more of the count variants, we can add overloads. For now,
   * all we need is to count everything in a store.
   *
   * Returns the number of rows in the store.
   */
  count() {
    N2("SimpleDb", "COUNT", this.store.name);
    return xt(this.store.count());
  }
  j(t, e) {
    const n = this.options(t, e);
    if (n.index || "function" != typeof this.store.getAll) {
      const t2 = this.cursor(n), e2 = [];
      return this.W(t2, (t3, n2) => {
        e2.push(n2);
      }).next(() => e2);
    }
    {
      const t2 = this.store.getAll(n.range);
      return new Rt((e2, n2) => {
        t2.onerror = (t3) => {
          n2(t3.target.error);
        }, t2.onsuccess = (t3) => {
          e2(t3.target.result);
        };
      });
    }
  }
  /**
   * Loads the first `count` elements from the provided index range. Loads all
   * elements if no limit is provided.
   */
  H(t, e) {
    const n = this.store.getAll(t, null === e ? void 0 : e);
    return new Rt((t2, e2) => {
      n.onerror = (t3) => {
        e2(t3.target.error);
      }, n.onsuccess = (e3) => {
        t2(e3.target.result);
      };
    });
  }
  J(t, e) {
    N2("SimpleDb", "DELETE ALL", this.store.name);
    const n = this.options(t, e);
    n.Y = false;
    const s = this.cursor(n);
    return this.W(s, (t2, e2, n2) => n2.delete());
  }
  X(t, e) {
    let n;
    e ? n = t : (n = {}, e = t);
    const s = this.cursor(n);
    return this.W(s, e);
  }
  /**
   * Iterates over a store, but waits for the given callback to complete for
   * each entry before iterating the next entry. This allows the callback to do
   * asynchronous work to determine if this iteration should continue.
   *
   * The provided callback should return `true` to continue iteration, and
   * `false` otherwise.
   */
  Z(t) {
    const e = this.cursor({});
    return new Rt((n, s) => {
      e.onerror = (t2) => {
        const e2 = kt(t2.target.error);
        s(e2);
      }, e.onsuccess = (e2) => {
        const s2 = e2.target.result;
        s2 ? t(s2.primaryKey, s2.value).next((t2) => {
          t2 ? s2.continue() : n();
        }) : n();
      };
    });
  }
  W(t, e) {
    const n = [];
    return new Rt((s, i) => {
      t.onerror = (t2) => {
        i(t2.target.error);
      }, t.onsuccess = (t2) => {
        const i2 = t2.target.result;
        if (!i2) return void s();
        const r2 = new Vt(i2), o = e(i2.primaryKey, i2.value, r2);
        if (o instanceof Rt) {
          const t3 = o.catch((t4) => (r2.done(), Rt.reject(t4)));
          n.push(t3);
        }
        r2.isDone ? s() : null === r2.K ? i2.continue() : i2.continue(r2.K);
      };
    }).next(() => Rt.waitFor(n));
  }
  options(t, e) {
    let n;
    return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
      index: n,
      range: e
    };
  }
  cursor(t) {
    let e = "next";
    if (t.reverse && (e = "prev"), t.index) {
      const n = this.store.index(t.index);
      return t.Y ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
    }
    return this.store.openCursor(t.range, e);
  }
};
function xt(t) {
  return new Rt((e, n) => {
    t.onsuccess = (t2) => {
      const n2 = t2.target.result;
      e(n2);
    }, t.onerror = (t2) => {
      const e2 = kt(t2.target.error);
      n(e2);
    };
  });
}
var Nt = false;
function kt(t) {
  const e = bt.S(getUA());
  if (e >= 12.2 && e < 13) {
    const e2 = "An internal error was encountered in the Indexed Database server";
    if (t.message.indexOf(e2) >= 0) {
      const t2 = new U2("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e2}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
      return Nt || (Nt = true, // Throw a global exception outside of this promise chain, for the user to
      // potentially catch.
      setTimeout(() => {
        throw t2;
      }, 0)), t2;
    }
  }
  return t;
}
var Mt = class {
  constructor(t, e) {
    this.asyncQueue = t, this.tt = e, this.task = null;
  }
  start() {
    this.et(15e3);
  }
  stop() {
    this.task && (this.task.cancel(), this.task = null);
  }
  get started() {
    return null !== this.task;
  }
  et(t) {
    N2("IndexBackiller", `Scheduled in ${t}ms`), this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", t, () => __async(this, null, function* () {
      this.task = null;
      try {
        N2("IndexBackiller", `Documents written: ${yield this.tt.nt()}`);
      } catch (t2) {
        Dt(t2) ? N2("IndexBackiller", "Ignoring IndexedDB error during index backfill: ", t2) : yield vt(t2);
      }
      yield this.et(6e4);
    }));
  }
};
var $t = class {
  constructor(t, e) {
    this.localStore = t, this.persistence = e;
  }
  nt(t = 50) {
    return __async(this, null, function* () {
      return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", (e) => this.st(e, t));
    });
  }
  /** Writes index entries until the cap is reached. Returns the number of documents processed. */
  st(t, e) {
    const n = /* @__PURE__ */ new Set();
    let s = e, i = true;
    return Rt.doWhile(() => true === i && s > 0, () => this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((e2) => {
      if (null !== e2 && !n.has(e2)) return N2("IndexBackiller", `Processing collection: ${e2}`), this.it(t, e2, s).next((t2) => {
        s -= t2, n.add(e2);
      });
      i = false;
    })).next(() => e - s);
  }
  /**
   * Writes entries for the provided collection group. Returns the number of documents processed.
   */
  it(t, e, n) {
    return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t, e).next((s) => this.localStore.localDocuments.getNextDocuments(t, e, s, n).next((n2) => {
      const i = n2.changes;
      return this.localStore.indexManager.updateIndexEntries(t, i).next(() => this.rt(s, n2)).next((n3) => (N2("IndexBackiller", `Updating offset: ${n3}`), this.localStore.indexManager.updateCollectionGroup(t, e, n3))).next(() => i.size);
    }));
  }
  /** Returns the next offset based on the provided documents. */
  rt(t, e) {
    let n = t;
    return e.changes.forEach((t2, e2) => {
      const s = pt(e2);
      Tt(s, n) > 0 && (n = s);
    }), new It(n.readTime, n.documentKey, Math.max(e.batchId, t.largestBatchId));
  }
};
var Ot = class {
  constructor(t, e) {
    this.previousValue = t, e && (e.sequenceNumberHandler = (t2) => this.ot(t2), this.ut = (t2) => e.writeSequenceNumber(t2));
  }
  ot(t) {
    return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
  }
  next() {
    const t = ++this.previousValue;
    return this.ut && this.ut(t), t;
  }
};
Ot.ct = -1;
function Ft(t) {
  return null == t;
}
function Bt(t) {
  return 0 === t && 1 / t == -1 / 0;
}
function Lt(t) {
  return "number" == typeof t && Number.isInteger(t) && !Bt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}
function qt(t) {
  let e = "";
  for (let n = 0; n < t.length; n++) e.length > 0 && (e = Kt(e)), e = Ut(t.get(n), e);
  return Kt(e);
}
function Ut(t, e) {
  let n = e;
  const s = t.length;
  for (let e2 = 0; e2 < s; e2++) {
    const s2 = t.charAt(e2);
    switch (s2) {
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += s2;
    }
  }
  return n;
}
function Kt(t) {
  return t + "";
}
function Gt(t) {
  const e = t.length;
  if (F2(e >= 2), 2 === e) return F2("" === t.charAt(0) && "" === t.charAt(1)), ut.emptyPath();
  const __PRIVATE_lastReasonableEscapeIndex = e - 2, n = [];
  let s = "";
  for (let i = 0; i < e; ) {
    const e2 = t.indexOf("", i);
    (e2 < 0 || e2 > __PRIVATE_lastReasonableEscapeIndex) && O2();
    switch (t.charAt(e2 + 1)) {
      case "":
        const r2 = t.substring(i, e2);
        let o;
        0 === s.length ? (
          // Avoid copying for the common case of a segment that excludes \0
          // and \001
          o = r2
        ) : (s += r2, o = s, s = ""), n.push(o);
        break;
      case "":
        s += t.substring(i, e2), s += "\0";
        break;
      case "":
        s += t.substring(i, e2 + 1);
        break;
      default:
        O2();
    }
    i = e2 + 2;
  }
  return new ut(n);
}
var Qt = ["userId", "batchId"];
function jt(t, e) {
  return [t, qt(e)];
}
function zt(t, e, n) {
  return [t, qt(e), n];
}
var Wt = {};
var Ht = ["prefixPath", "collectionGroup", "readTime", "documentId"];
var Jt = ["prefixPath", "collectionGroup", "documentId"];
var Yt = ["collectionGroup", "readTime", "prefixPath", "documentId"];
var Xt = ["canonicalId", "targetId"];
var Zt = ["targetId", "path"];
var te = ["path", "targetId"];
var ee = ["collectionId", "parent"];
var ne = ["indexId", "uid"];
var se = ["uid", "sequenceNumber"];
var ie = ["indexId", "uid", "arrayValue", "directionalValue", "orderedDocumentKey", "documentKey"];
var re = ["indexId", "uid", "orderedDocumentKey"];
var oe = ["userId", "collectionPath", "documentId"];
var ue = ["userId", "collectionPath", "largestBatchId"];
var ce = ["userId", "collectionGroup", "largestBatchId"];
var ae2 = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"];
var he = [...ae2, "documentOverlays"];
var le = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"];
var fe = le;
var de = [...fe, "indexConfiguration", "indexState", "indexEntries"];
var we = class extends At {
  constructor(t, e) {
    super(), this.ht = t, this.currentSequenceNumber = e;
  }
};
function _e(t, e) {
  const n = L(t);
  return bt.M(n.ht, e);
}
function me(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function ge(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function ye(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return false;
  return true;
}
var pe = class _pe {
  constructor(t, e) {
    this.comparator = t, this.root = e || Te.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(t, e) {
    return new _pe(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, Te.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(t) {
    return new _pe(this.comparator, this.root.remove(t, this.comparator).copy(null, null, Te.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(t) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const n = this.comparator(t, e.key);
      if (0 === n) return e.value;
      n < 0 ? e = e.left : n > 0 && (e = e.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(t) {
    let e = 0, n = this.root;
    for (; !n.isEmpty(); ) {
      const s = this.comparator(t, n.key);
      if (0 === s) return e + n.left.size;
      s < 0 ? n = n.left : (
        // Count all nodes left of the node plus the node itself
        (e += n.left.size + 1, n = n.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((e, n) => (t(e, n), false));
  }
  toString() {
    const t = [];
    return this.inorderTraversal((e, n) => (t.push(`${e}:${n}`), false)), `{${t.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new Ie(this.root, null, this.comparator, false);
  }
  getIteratorFrom(t) {
    return new Ie(this.root, t, this.comparator, false);
  }
  getReverseIterator() {
    return new Ie(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(t) {
    return new Ie(this.root, t, this.comparator, true);
  }
};
var Ie = class {
  constructor(t, e, n, s) {
    this.isReverse = s, this.nodeStack = [];
    let i = 1;
    for (; !t.isEmpty(); ) if (i = e ? n(t.key, e) : 1, // flip the comparison if we're going in reverse
    e && s && (i *= -1), i < 0)
      t = this.isReverse ? t.left : t.right;
    else {
      if (0 === i) {
        this.nodeStack.push(t);
        break;
      }
      this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
    }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const e = {
      key: t.key,
      value: t.value
    };
    if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right;
    else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), t = t.left;
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length) return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t.key,
      value: t.value
    };
  }
};
var Te = class _Te {
  constructor(t, e, n, s, i) {
    this.key = t, this.value = e, this.color = null != n ? n : _Te.RED, this.left = null != s ? s : _Te.EMPTY, this.right = null != i ? i : _Te.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(t, e, n, s, i) {
    return new _Te(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t) {
    return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t) {
    return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(t, e, n) {
    let s = this;
    const i = n(t, s.key);
    return s = i < 0 ? s.copy(null, null, null, s.left.insert(t, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t, e, n)), s.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty()) return _Te.EMPTY;
    let t = this;
    return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), t.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(t, e) {
    let n, s = this;
    if (e(t, s.key) < 0) s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), s = s.copy(null, null, null, s.left.remove(t, e), null);
    else {
      if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), 0 === e(t, s.key)) {
        if (s.right.isEmpty()) return _Te.EMPTY;
        n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.removeMin());
      }
      s = s.copy(null, null, null, null, s.right.remove(t, e));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let t = this;
    return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), t = t.rotateLeft(), t = t.colorFlip()), t;
  }
  moveRedRight() {
    let t = this.colorFlip();
    return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t;
  }
  rotateLeft() {
    const t = this.copy(null, null, _Te.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, _Te.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, e);
  }
  // For testing.
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed()) throw O2();
    if (this.right.isRed()) throw O2();
    const t = this.left.check();
    if (t !== this.right.check()) throw O2();
    return t + (this.isRed() ? 0 : 1);
  }
};
Te.EMPTY = null, Te.RED = true, Te.BLACK = false;
Te.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw O2();
  }
  get value() {
    throw O2();
  }
  get color() {
    throw O2();
  }
  get left() {
    throw O2();
  }
  get right() {
    throw O2();
  }
  // Returns a copy of the current node.
  copy(t, e, n, s, i) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(t, e, n) {
    return new Te(t, e);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(t) {
    return false;
  }
  reverseTraversal(t) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  // For testing.
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
var Ee = class _Ee {
  constructor(t) {
    this.comparator = t, this.data = new pe(this.comparator);
  }
  has(t) {
    return null !== this.data.get(t);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(t) {
    this.data.inorderTraversal((e, n) => (t(e), false));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(t, e) {
    const n = this.data.getIteratorFrom(t[0]);
    for (; n.hasNext(); ) {
      const s = n.getNext();
      if (this.comparator(s.key, t[1]) >= 0) return;
      e(s.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(t, e) {
    let n;
    for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
      if (!t(n.getNext().key)) return;
    }
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(t) {
    const e = this.data.getIteratorFrom(t);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new Ae(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new Ae(this.data.getIteratorFrom(t));
  }
  /** Inserts or updates an element */
  add(t) {
    return this.copy(this.data.remove(t).insert(t, true));
  }
  /** Deletes an element */
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let e = this;
    return e.size < t.size && (e = t, t = this), t.forEach((t2) => {
      e = e.add(t2);
    }), e;
  }
  isEqual(t) {
    if (!(t instanceof _Ee)) return false;
    if (this.size !== t.size) return false;
    const e = this.data.getIterator(), n = t.data.getIterator();
    for (; e.hasNext(); ) {
      const t2 = e.getNext().key, s = n.getNext().key;
      if (0 !== this.comparator(t2, s)) return false;
    }
    return true;
  }
  toArray() {
    const t = [];
    return this.forEach((e) => {
      t.push(e);
    }), t;
  }
  toString() {
    const t = [];
    return this.forEach((e) => t.push(e)), "SortedSet(" + t.toString() + ")";
  }
  copy(t) {
    const e = new _Ee(this.comparator);
    return e.data = t, e;
  }
};
var Ae = class {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
function ve(t) {
  return t.hasNext() ? t.getNext() : void 0;
}
var Re = class _Re {
  constructor(t) {
    this.fields = t, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    t.sort(at.comparator);
  }
  static empty() {
    return new _Re([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(t) {
    let e = new Ee(at.comparator);
    for (const t2 of this.fields) e = e.add(t2);
    for (const n of t) e = e.add(n);
    return new _Re(e.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(t) {
    for (const e of this.fields) if (e.isPrefixOf(t)) return true;
    return false;
  }
  isEqual(t) {
    return nt(this.fields, t.fields, (t2, e) => t2.isEqual(e));
  }
};
var Pe = class extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
};
function be2() {
  return "undefined" != typeof atob;
}
var Ve = class _Ve {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const e = function(t2) {
      try {
        return atob(t2);
      } catch (t3) {
        throw "undefined" != typeof DOMException && t3 instanceof DOMException ? new Pe("Invalid base64 string: " + t3) : t3;
      }
    }(t);
    return new _Ve(e);
  }
  static fromUint8Array(t) {
    const e = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function(t2) {
        let e2 = "";
        for (let n = 0; n < t2.length; ++n) e2 += String.fromCharCode(t2[n]);
        return e2;
      }(t)
    );
    return new _Ve(e);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () => t < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(t++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return t = this.binaryString, btoa(t);
    var t;
  }
  toUint8Array() {
    return function(t) {
      const e = new Uint8Array(t.length);
      for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
      return e;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return et(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
};
Ve.EMPTY_BYTE_STRING = new Ve("");
var Se = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function De(t) {
  if (F2(!!t), "string" == typeof t) {
    let e = 0;
    const n = Se.exec(t);
    if (F2(!!n), n[1]) {
      let t2 = n[1];
      t2 = (t2 + "000000000").substr(0, 9), e = Number(t2);
    }
    const s = new Date(t);
    return {
      seconds: Math.floor(s.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: Ce(t.seconds),
    nanos: Ce(t.nanos)
  };
}
function Ce(t) {
  return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}
function xe(t) {
  return "string" == typeof t ? Ve.fromBase64String(t) : Ve.fromUint8Array(t);
}
function Ne(t) {
  var e, n;
  return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
function ke(t) {
  const e = t.mapValue.fields.__previous_value__;
  return Ne(e) ? ke(e) : e;
}
function Me(t) {
  const e = De(t.mapValue.fields.__local_write_time__.timestampValue);
  return new it(e.seconds, e.nanos);
}
var $e = class {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param longPollingOptions Options that configure long-polling.
   * @param useFetchStreams Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(t, e, n, s, i, r2, o, u, c) {
    this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, this.forceLongPolling = r2, this.autoDetectLongPolling = o, this.longPollingOptions = u, this.useFetchStreams = c;
  }
};
var Oe = class _Oe {
  constructor(t, e) {
    this.projectId = t, this.database = e || "(default)";
  }
  static empty() {
    return new _Oe("", "");
  }
  get isDefaultDatabase() {
    return "(default)" === this.database;
  }
  isEqual(t) {
    return t instanceof _Oe && t.projectId === this.projectId && t.database === this.database;
  }
};
var Fe = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
};
var Be = {
  nullValue: "NULL_VALUE"
};
function Le(t) {
  return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? Ne(t) ? 4 : en(t) ? 9007199254740991 : 10 : O2();
}
function qe(t, e) {
  if (t === e) return true;
  const n = Le(t);
  if (n !== Le(e)) return false;
  switch (n) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Me(t).isEqual(Me(e));
    case 3:
      return function(t2, e2) {
        if ("string" == typeof t2.timestampValue && "string" == typeof e2.timestampValue && t2.timestampValue.length === e2.timestampValue.length)
          return t2.timestampValue === e2.timestampValue;
        const n2 = De(t2.timestampValue), s = De(e2.timestampValue);
        return n2.seconds === s.seconds && n2.nanos === s.nanos;
      }(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return function(t2, e2) {
        return xe(t2.bytesValue).isEqual(xe(e2.bytesValue));
      }(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return function(t2, e2) {
        return Ce(t2.geoPointValue.latitude) === Ce(e2.geoPointValue.latitude) && Ce(t2.geoPointValue.longitude) === Ce(e2.geoPointValue.longitude);
      }(t, e);
    case 2:
      return function(t2, e2) {
        if ("integerValue" in t2 && "integerValue" in e2) return Ce(t2.integerValue) === Ce(e2.integerValue);
        if ("doubleValue" in t2 && "doubleValue" in e2) {
          const n2 = Ce(t2.doubleValue), s = Ce(e2.doubleValue);
          return n2 === s ? Bt(n2) === Bt(s) : isNaN(n2) && isNaN(s);
        }
        return false;
      }(t, e);
    case 9:
      return nt(t.arrayValue.values || [], e.arrayValue.values || [], qe);
    case 10:
      return function(t2, e2) {
        const n2 = t2.mapValue.fields || {}, s = e2.mapValue.fields || {};
        if (me(n2) !== me(s)) return false;
        for (const t3 in n2) if (n2.hasOwnProperty(t3) && (void 0 === s[t3] || !qe(n2[t3], s[t3]))) return false;
        return true;
      }(t, e);
    default:
      return O2();
  }
}
function Ue(t, e) {
  return void 0 !== (t.values || []).find((t2) => qe(t2, e));
}
function Ke(t, e) {
  if (t === e) return 0;
  const n = Le(t), s = Le(e);
  if (n !== s) return et(n, s);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return et(t.booleanValue, e.booleanValue);
    case 2:
      return function(t2, e2) {
        const n2 = Ce(t2.integerValue || t2.doubleValue), s2 = Ce(e2.integerValue || e2.doubleValue);
        return n2 < s2 ? -1 : n2 > s2 ? 1 : n2 === s2 ? 0 : (
          // one or both are NaN.
          isNaN(n2) ? isNaN(s2) ? 0 : -1 : 1
        );
      }(t, e);
    case 3:
      return Ge(t.timestampValue, e.timestampValue);
    case 4:
      return Ge(Me(t), Me(e));
    case 5:
      return et(t.stringValue, e.stringValue);
    case 6:
      return function(t2, e2) {
        const n2 = xe(t2), s2 = xe(e2);
        return n2.compareTo(s2);
      }(t.bytesValue, e.bytesValue);
    case 7:
      return function(t2, e2) {
        const n2 = t2.split("/"), s2 = e2.split("/");
        for (let t3 = 0; t3 < n2.length && t3 < s2.length; t3++) {
          const e3 = et(n2[t3], s2[t3]);
          if (0 !== e3) return e3;
        }
        return et(n2.length, s2.length);
      }(t.referenceValue, e.referenceValue);
    case 8:
      return function(t2, e2) {
        const n2 = et(Ce(t2.latitude), Ce(e2.latitude));
        if (0 !== n2) return n2;
        return et(Ce(t2.longitude), Ce(e2.longitude));
      }(t.geoPointValue, e.geoPointValue);
    case 9:
      return function(t2, e2) {
        const n2 = t2.values || [], s2 = e2.values || [];
        for (let t3 = 0; t3 < n2.length && t3 < s2.length; ++t3) {
          const e3 = Ke(n2[t3], s2[t3]);
          if (e3) return e3;
        }
        return et(n2.length, s2.length);
      }(t.arrayValue, e.arrayValue);
    case 10:
      return function(t2, e2) {
        if (t2 === Fe.mapValue && e2 === Fe.mapValue) return 0;
        if (t2 === Fe.mapValue) return 1;
        if (e2 === Fe.mapValue) return -1;
        const n2 = t2.fields || {}, s2 = Object.keys(n2), i = e2.fields || {}, r2 = Object.keys(i);
        s2.sort(), r2.sort();
        for (let t3 = 0; t3 < s2.length && t3 < r2.length; ++t3) {
          const e3 = et(s2[t3], r2[t3]);
          if (0 !== e3) return e3;
          const o = Ke(n2[s2[t3]], i[r2[t3]]);
          if (0 !== o) return o;
        }
        return et(s2.length, r2.length);
      }(t.mapValue, e.mapValue);
    default:
      throw O2();
  }
}
function Ge(t, e) {
  if ("string" == typeof t && "string" == typeof e && t.length === e.length) return et(t, e);
  const n = De(t), s = De(e), i = et(n.seconds, s.seconds);
  return 0 !== i ? i : et(n.nanos, s.nanos);
}
function Qe(t) {
  return je(t);
}
function je(t) {
  return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t2) {
    const e2 = De(t2);
    return `time(${e2.seconds},${e2.nanos})`;
  }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? xe(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, ht.fromName(n).toString()) : "geoPointValue" in t ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t ? function(t2) {
    let e2 = "[", n2 = true;
    for (const s of t2.values || []) n2 ? n2 = false : e2 += ",", e2 += je(s);
    return e2 + "]";
  }(t.arrayValue) : "mapValue" in t ? function(t2) {
    const e2 = Object.keys(t2.fields || {}).sort();
    let n2 = "{", s = true;
    for (const i of e2) s ? s = false : n2 += ",", n2 += `${i}:${je(t2.fields[i])}`;
    return n2 + "}";
  }(t.mapValue) : O2();
  var e, n;
}
function ze(t) {
  switch (Le(t)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const e = ke(t);
      return e ? 16 + ze(e) : 16;
    case 5:
      return 2 * t.stringValue.length;
    case 6:
      return xe(t.bytesValue).approximateByteSize();
    case 7:
      return t.referenceValue.length;
    case 9:
      return (t.arrayValue.values || []).reduce((t2, e2) => t2 + ze(e2), 0);
    case 10:
      return function(t2) {
        let e2 = 0;
        return ge(t2.fields, (t3, n) => {
          e2 += t3.length + ze(n);
        }), e2;
      }(t.mapValue);
    default:
      throw O2();
  }
}
function We(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
  };
}
function He(t) {
  return !!t && "integerValue" in t;
}
function Je(t) {
  return !!t && "arrayValue" in t;
}
function Ye(t) {
  return !!t && "nullValue" in t;
}
function Xe(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function Ze(t) {
  return !!t && "mapValue" in t;
}
function tn(t) {
  if (t.geoPointValue) return {
    geoPointValue: Object.assign({}, t.geoPointValue)
  };
  if (t.timestampValue && "object" == typeof t.timestampValue) return {
    timestampValue: Object.assign({}, t.timestampValue)
  };
  if (t.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return ge(t.mapValue.fields, (t2, n) => e.mapValue.fields[t2] = tn(n)), e;
  }
  if (t.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n) e.arrayValue.values[n] = tn(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function en(t) {
  return "__max__" === (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
function nn(t) {
  return "nullValue" in t ? Be : "booleanValue" in t ? {
    booleanValue: false
  } : "integerValue" in t || "doubleValue" in t ? {
    doubleValue: NaN
  } : "timestampValue" in t ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "stringValue" in t ? {
    stringValue: ""
  } : "bytesValue" in t ? {
    bytesValue: ""
  } : "referenceValue" in t ? We(Oe.empty(), ht.empty()) : "geoPointValue" in t ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "arrayValue" in t ? {
    arrayValue: {}
  } : "mapValue" in t ? {
    mapValue: {}
  } : O2();
}
function sn(t) {
  return "nullValue" in t ? {
    booleanValue: false
  } : "booleanValue" in t ? {
    doubleValue: NaN
  } : "integerValue" in t || "doubleValue" in t ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "timestampValue" in t ? {
    stringValue: ""
  } : "stringValue" in t ? {
    bytesValue: ""
  } : "bytesValue" in t ? We(Oe.empty(), ht.empty()) : "referenceValue" in t ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "geoPointValue" in t ? {
    arrayValue: {}
  } : "arrayValue" in t ? {
    mapValue: {}
  } : "mapValue" in t ? Fe : O2();
}
function rn(t, e) {
  const n = Ke(t.value, e.value);
  return 0 !== n ? n : t.inclusive && !e.inclusive ? -1 : !t.inclusive && e.inclusive ? 1 : 0;
}
function on(t, e) {
  const n = Ke(t.value, e.value);
  return 0 !== n ? n : t.inclusive && !e.inclusive ? 1 : !t.inclusive && e.inclusive ? -1 : 0;
}
var un = class _un {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new _un({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let e = this.value;
      for (let n = 0; n < t.length - 1; ++n) if (e = (e.mapValue.fields || {})[t.get(n)], !Ze(e)) return null;
      return e = (e.mapValue.fields || {})[t.lastSegment()], e || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(t, e) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = tn(e);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(t) {
    let e = at.emptyPath(), n = {}, s = [];
    t.forEach((t2, i2) => {
      if (!e.isImmediateParentOf(i2)) {
        const t3 = this.getFieldsMap(e);
        this.applyChanges(t3, n, s), n = {}, s = [], e = i2.popLast();
      }
      t2 ? n[i2.lastSegment()] = tn(t2) : s.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(e);
    this.applyChanges(i, n, s);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(t) {
    const e = this.field(t.popLast());
    Ze(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return qe(this.value, t.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(t) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = {
      fields: {}
    });
    for (let n = 0; n < t.length; ++n) {
      let s = e.mapValue.fields[t.get(n)];
      Ze(s) && s.mapValue.fields || (s = {
        mapValue: {
          fields: {}
        }
      }, e.mapValue.fields[t.get(n)] = s), e = s;
    }
    return e.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(t, e, n) {
    ge(e, (e2, n2) => t[e2] = n2);
    for (const e2 of n) delete t[e2];
  }
  clone() {
    return new _un(tn(this.value));
  }
};
function cn(t) {
  const e = [];
  return ge(t.fields, (t2, n) => {
    const s = new at([t2]);
    if (Ze(n)) {
      const t3 = cn(n.mapValue).fields;
      if (0 === t3.length)
        e.push(s);
      else
        for (const n2 of t3) e.push(s.child(n2));
    } else
      e.push(s);
  }), new Re(e);
}
var an = class _an {
  constructor(t, e, n, s, i, r2, o) {
    this.key = t, this.documentType = e, this.version = n, this.readTime = s, this.createTime = i, this.data = r2, this.documentState = o;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(t) {
    return new _an(
      t,
      0,
      /* version */
      rt.min(),
      /* readTime */
      rt.min(),
      /* createTime */
      rt.min(),
      un.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(t, e, n, s) {
    return new _an(
      t,
      1,
      /* version */
      e,
      /* readTime */
      rt.min(),
      /* createTime */
      n,
      s,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(t, e) {
    return new _an(
      t,
      2,
      /* version */
      e,
      /* readTime */
      rt.min(),
      /* createTime */
      rt.min(),
      un.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(t, e) {
    return new _an(
      t,
      3,
      /* version */
      e,
      /* readTime */
      rt.min(),
      /* createTime */
      rt.min(),
      un.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(t, e) {
    return !this.createTime.isEqual(rt.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = t), this.version = t, this.documentType = 1, this.data = e, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(t) {
    return this.version = t, this.documentType = 2, this.data = un.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(t) {
    return this.version = t, this.documentType = 3, this.data = un.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = rt.min(), this;
  }
  setReadTime(t) {
    return this.readTime = t, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(t) {
    return t instanceof _an && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
  }
  mutableCopy() {
    return new _an(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
};
var hn = class {
  constructor(t, e) {
    this.position = t, this.inclusive = e;
  }
};
function ln(t, e, n) {
  let s = 0;
  for (let i = 0; i < t.position.length; i++) {
    const r2 = e[i], o = t.position[i];
    if (r2.field.isKeyField()) s = ht.comparator(ht.fromName(o.referenceValue), n.key);
    else {
      s = Ke(o, n.data.field(r2.field));
    }
    if ("desc" === r2.dir && (s *= -1), 0 !== s) break;
  }
  return s;
}
function fn(t, e) {
  if (null === t) return null === e;
  if (null === e) return false;
  if (t.inclusive !== e.inclusive || t.position.length !== e.position.length) return false;
  for (let n = 0; n < t.position.length; n++) {
    if (!qe(t.position[n], e.position[n])) return false;
  }
  return true;
}
var dn = class {
  constructor(t, e = "asc") {
    this.field = t, this.dir = e;
  }
};
function wn(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
var _n = class {
};
var mn = class _mn extends _n {
  constructor(t, e, n) {
    super(), this.field = t, this.op = e, this.value = n;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t, e, n) {
    return t.isKeyField() ? "in" === e || "not-in" === e ? this.createKeyFieldInFilter(t, e, n) : new Pn(t, e, n) : "array-contains" === e ? new Dn(t, n) : "in" === e ? new Cn(t, n) : "not-in" === e ? new xn(t, n) : "array-contains-any" === e ? new Nn(t, n) : new _mn(t, e, n);
  }
  static createKeyFieldInFilter(t, e, n) {
    return "in" === e ? new bn(t, n) : new Vn(t, n);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return "!=" === this.op ? null !== e && this.matchesComparison(Ke(e, this.value)) : null !== e && Le(this.value) === Le(e) && this.matchesComparison(Ke(e, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return 0 === t;
      case "!=":
        return 0 !== t;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return O2();
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
  getFirstInequalityField() {
    return this.isInequality() ? this.field : null;
  }
};
var gn = class _gn extends _n {
  constructor(t, e) {
    super(), this.filters = t, this.op = e, this.lt = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t, e) {
    return new _gn(t, e);
  }
  matches(t) {
    return yn(this) ? void 0 === this.filters.find((e) => !e.matches(t)) : void 0 !== this.filters.find((e) => e.matches(t));
  }
  getFlattenedFilters() {
    return null !== this.lt || (this.lt = this.filters.reduce((t, e) => t.concat(e.getFlattenedFilters()), [])), this.lt;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
  getFirstInequalityField() {
    const t = this.ft((t2) => t2.isInequality());
    return null !== t ? t.field : null;
  }
  // Performs a depth-first search to find and return the first FieldFilter in the composite filter
  // that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
  // predicate.
  ft(t) {
    for (const e of this.getFlattenedFilters()) if (t(e)) return e;
    return null;
  }
};
function yn(t) {
  return "and" === t.op;
}
function pn(t) {
  return "or" === t.op;
}
function In(t) {
  return Tn(t) && yn(t);
}
function Tn(t) {
  for (const e of t.filters) if (e instanceof gn) return false;
  return true;
}
function En(t) {
  if (t instanceof mn)
    return t.field.canonicalString() + t.op.toString() + Qe(t.value);
  if (In(t))
    return t.filters.map((t2) => En(t2)).join(",");
  {
    const e = t.filters.map((t2) => En(t2)).join(",");
    return `${t.op}(${e})`;
  }
}
function An(t, e) {
  return t instanceof mn ? function(t2, e2) {
    return e2 instanceof mn && t2.op === e2.op && t2.field.isEqual(e2.field) && qe(t2.value, e2.value);
  }(t, e) : t instanceof gn ? function(t2, e2) {
    if (e2 instanceof gn && t2.op === e2.op && t2.filters.length === e2.filters.length) {
      return t2.filters.reduce((t3, n, s) => t3 && An(n, e2.filters[s]), true);
    }
    return false;
  }(t, e) : void O2();
}
function vn(t, e) {
  const n = t.filters.concat(e);
  return gn.create(n, t.op);
}
function Rn(t) {
  return t instanceof mn ? function(t2) {
    return `${t2.field.canonicalString()} ${t2.op} ${Qe(t2.value)}`;
  }(t) : t instanceof gn ? function(t2) {
    return t2.op.toString() + " {" + t2.getFilters().map(Rn).join(" ,") + "}";
  }(t) : "Filter";
}
var Pn = class extends mn {
  constructor(t, e, n) {
    super(t, e, n), this.key = ht.fromName(n.referenceValue);
  }
  matches(t) {
    const e = ht.comparator(t.key, this.key);
    return this.matchesComparison(e);
  }
};
var bn = class extends mn {
  constructor(t, e) {
    super(t, "in", e), this.keys = Sn("in", e);
  }
  matches(t) {
    return this.keys.some((e) => e.isEqual(t.key));
  }
};
var Vn = class extends mn {
  constructor(t, e) {
    super(t, "not-in", e), this.keys = Sn("not-in", e);
  }
  matches(t) {
    return !this.keys.some((e) => e.isEqual(t.key));
  }
};
function Sn(t, e) {
  var n;
  return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t2) => ht.fromName(t2.referenceValue));
}
var Dn = class extends mn {
  constructor(t, e) {
    super(t, "array-contains", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return Je(e) && Ue(e.arrayValue, this.value);
  }
};
var Cn = class extends mn {
  constructor(t, e) {
    super(t, "in", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return null !== e && Ue(this.value.arrayValue, e);
  }
};
var xn = class extends mn {
  constructor(t, e) {
    super(t, "not-in", e);
  }
  matches(t) {
    if (Ue(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    })) return false;
    const e = t.data.field(this.field);
    return null !== e && !Ue(this.value.arrayValue, e);
  }
};
var Nn = class extends mn {
  constructor(t, e) {
    super(t, "array-contains-any", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return !(!Je(e) || !e.arrayValue.values) && e.arrayValue.values.some((t2) => Ue(this.value.arrayValue, t2));
  }
};
var kn = class {
  constructor(t, e = null, n = [], s = [], i = null, r2 = null, o = null) {
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, this.startAt = r2, this.endAt = o, this.dt = null;
  }
};
function Mn(t, e = null, n = [], s = [], i = null, r2 = null, o = null) {
  return new kn(t, e, n, s, i, r2, o);
}
function $n(t) {
  const e = L(t);
  if (null === e.dt) {
    let t2 = e.path.canonicalString();
    null !== e.collectionGroup && (t2 += "|cg:" + e.collectionGroup), t2 += "|f:", t2 += e.filters.map((t3) => En(t3)).join(","), t2 += "|ob:", t2 += e.orderBy.map((t3) => function(t4) {
      return t4.field.canonicalString() + t4.dir;
    }(t3)).join(","), Ft(e.limit) || (t2 += "|l:", t2 += e.limit), e.startAt && (t2 += "|lb:", t2 += e.startAt.inclusive ? "b:" : "a:", t2 += e.startAt.position.map((t3) => Qe(t3)).join(",")), e.endAt && (t2 += "|ub:", t2 += e.endAt.inclusive ? "a:" : "b:", t2 += e.endAt.position.map((t3) => Qe(t3)).join(",")), e.dt = t2;
  }
  return e.dt;
}
function On(t, e) {
  if (t.limit !== e.limit) return false;
  if (t.orderBy.length !== e.orderBy.length) return false;
  for (let n = 0; n < t.orderBy.length; n++) if (!wn(t.orderBy[n], e.orderBy[n])) return false;
  if (t.filters.length !== e.filters.length) return false;
  for (let n = 0; n < t.filters.length; n++) if (!An(t.filters[n], e.filters[n])) return false;
  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!fn(t.startAt, e.startAt) && fn(t.endAt, e.endAt);
}
function Fn(t) {
  return ht.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}
function Bn(t, e) {
  return t.filters.filter((t2) => t2 instanceof mn && t2.field.isEqual(e));
}
function Ln(t, e, n) {
  let s = Be, i = true;
  for (const n2 of Bn(t, e)) {
    let t2 = Be, e2 = true;
    switch (n2.op) {
      case "<":
      case "<=":
        t2 = nn(n2.value);
        break;
      case "==":
      case "in":
      case ">=":
        t2 = n2.value;
        break;
      case ">":
        t2 = n2.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t2 = Be;
    }
    rn({
      value: s,
      inclusive: i
    }, {
      value: t2,
      inclusive: e2
    }) < 0 && (s = t2, i = e2);
  }
  if (null !== n) for (let r2 = 0; r2 < t.orderBy.length; ++r2) {
    if (t.orderBy[r2].field.isEqual(e)) {
      const t2 = n.position[r2];
      rn({
        value: s,
        inclusive: i
      }, {
        value: t2,
        inclusive: n.inclusive
      }) < 0 && (s = t2, i = n.inclusive);
      break;
    }
  }
  return {
    value: s,
    inclusive: i
  };
}
function qn(t, e, n) {
  let s = Fe, i = true;
  for (const n2 of Bn(t, e)) {
    let t2 = Fe, e2 = true;
    switch (n2.op) {
      case ">=":
      case ">":
        t2 = sn(n2.value), e2 = false;
        break;
      case "==":
      case "in":
      case "<=":
        t2 = n2.value;
        break;
      case "<":
        t2 = n2.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t2 = Fe;
    }
    on({
      value: s,
      inclusive: i
    }, {
      value: t2,
      inclusive: e2
    }) > 0 && (s = t2, i = e2);
  }
  if (null !== n) for (let r2 = 0; r2 < t.orderBy.length; ++r2) {
    if (t.orderBy[r2].field.isEqual(e)) {
      const t2 = n.position[r2];
      on({
        value: s,
        inclusive: i
      }, {
        value: t2,
        inclusive: n.inclusive
      }) > 0 && (s = t2, i = n.inclusive);
      break;
    }
  }
  return {
    value: s,
    inclusive: i
  };
}
var Un = class {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(t, e = null, n = [], s = [], i = null, r2 = "F", o = null, u = null) {
    this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = s, this.limit = i, this.limitType = r2, this.startAt = o, this.endAt = u, this.wt = null, // The corresponding `Target` of this `Query` instance.
    this._t = null, this.startAt, this.endAt;
  }
};
function Kn(t, e, n, s, i, r2, o, u) {
  return new Un(t, e, n, s, i, r2, o, u);
}
function Gn(t) {
  return new Un(t);
}
function Qn(t) {
  return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.explicitOrderBy.length || 1 === t.explicitOrderBy.length && t.explicitOrderBy[0].field.isKeyField());
}
function jn(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function zn(t) {
  for (const e of t.filters) {
    const t2 = e.getFirstInequalityField();
    if (null !== t2) return t2;
  }
  return null;
}
function Wn(t) {
  return null !== t.collectionGroup;
}
function Hn(t) {
  const e = L(t);
  if (null === e.wt) {
    e.wt = [];
    const t2 = zn(e), n = jn(e);
    if (null !== t2 && null === n)
      t2.isKeyField() || e.wt.push(new dn(t2)), e.wt.push(new dn(
        at.keyField(),
        "asc"
        /* Direction.ASCENDING */
      ));
    else {
      let t3 = false;
      for (const n2 of e.explicitOrderBy) e.wt.push(n2), n2.field.isKeyField() && (t3 = true);
      if (!t3) {
        const t4 = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
        e.wt.push(new dn(at.keyField(), t4));
      }
    }
  }
  return e.wt;
}
function Jn(t) {
  const e = L(t);
  if (!e._t) if ("F" === e.limitType) e._t = Mn(e.path, e.collectionGroup, Hn(e), e.filters, e.limit, e.startAt, e.endAt);
  else {
    const t2 = [];
    for (const n2 of Hn(e)) {
      const e2 = "desc" === n2.dir ? "asc" : "desc";
      t2.push(new dn(n2.field, e2));
    }
    const n = e.endAt ? new hn(e.endAt.position, e.endAt.inclusive) : null, s = e.startAt ? new hn(e.startAt.position, e.startAt.inclusive) : null;
    e._t = Mn(e.path, e.collectionGroup, t2, e.filters, e.limit, n, s);
  }
  return e._t;
}
function Yn(t, e) {
  e.getFirstInequalityField(), zn(t);
  const n = t.filters.concat([e]);
  return new Un(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
}
function Xn(t, e, n) {
  return new Un(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}
function Zn(t, e) {
  return On(Jn(t), Jn(e)) && t.limitType === e.limitType;
}
function ts(t) {
  return `${$n(Jn(t))}|lt:${t.limitType}`;
}
function es(t) {
  return `Query(target=${function(t2) {
    let e = t2.path.canonicalString();
    return null !== t2.collectionGroup && (e += " collectionGroup=" + t2.collectionGroup), t2.filters.length > 0 && (e += `, filters: [${t2.filters.map((t3) => Rn(t3)).join(", ")}]`), Ft(t2.limit) || (e += ", limit: " + t2.limit), t2.orderBy.length > 0 && (e += `, orderBy: [${t2.orderBy.map((t3) => function(t4) {
      return `${t4.field.canonicalString()} (${t4.dir})`;
    }(t3)).join(", ")}]`), t2.startAt && (e += ", startAt: ", e += t2.startAt.inclusive ? "b:" : "a:", e += t2.startAt.position.map((t3) => Qe(t3)).join(",")), t2.endAt && (e += ", endAt: ", e += t2.endAt.inclusive ? "a:" : "b:", e += t2.endAt.position.map((t3) => Qe(t3)).join(",")), `Target(${e})`;
  }(Jn(t))}; limitType=${t.limitType})`;
}
function ns(t, e) {
  return e.isFoundDocument() && function(t2, e2) {
    const n = e2.key.path;
    return null !== t2.collectionGroup ? e2.key.hasCollectionId(t2.collectionGroup) && t2.path.isPrefixOf(n) : ht.isDocumentKey(t2.path) ? t2.path.isEqual(n) : t2.path.isImmediateParentOf(n);
  }(t, e) && function(t2, e2) {
    for (const n of Hn(t2))
      if (!n.field.isKeyField() && null === e2.data.field(n.field)) return false;
    return true;
  }(t, e) && function(t2, e2) {
    for (const n of t2.filters) if (!n.matches(e2)) return false;
    return true;
  }(t, e) && function(t2, e2) {
    if (t2.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    function(t3, e3, n) {
      const s = ln(t3, e3, n);
      return t3.inclusive ? s <= 0 : s < 0;
    }(t2.startAt, Hn(t2), e2)) return false;
    if (t2.endAt && !function(t3, e3, n) {
      const s = ln(t3, e3, n);
      return t3.inclusive ? s >= 0 : s > 0;
    }(t2.endAt, Hn(t2), e2)) return false;
    return true;
  }(t, e);
}
function ss(t) {
  return t.collectionGroup || (t.path.length % 2 == 1 ? t.path.lastSegment() : t.path.get(t.path.length - 2));
}
function is(t) {
  return (e, n) => {
    let s = false;
    for (const i of Hn(t)) {
      const t2 = rs(i, e, n);
      if (0 !== t2) return t2;
      s = s || i.field.isKeyField();
    }
    return 0;
  };
}
function rs(t, e, n) {
  const s = t.field.isKeyField() ? ht.comparator(e.key, n.key) : function(t2, e2, n2) {
    const s2 = e2.data.field(t2), i = n2.data.field(t2);
    return null !== s2 && null !== i ? Ke(s2, i) : O2();
  }(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return s;
    case "desc":
      return -1 * s;
    default:
      return O2();
  }
}
var os = class {
  constructor(t, e) {
    this.mapKeyFn = t, this.equalsFn = e, /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    this.inner = {}, /** The number of entries stored in the map */
    this.innerSize = 0;
  }
  /** Get a value for this key, or undefined if it does not exist. */
  get(t) {
    const e = this.mapKeyFn(t), n = this.inner[e];
    if (void 0 !== n) {
      for (const [e2, s] of n) if (this.equalsFn(e2, t)) return s;
    }
  }
  has(t) {
    return void 0 !== this.get(t);
  }
  /** Put this key and value in the map. */
  set(t, e) {
    const n = this.mapKeyFn(t), s = this.inner[n];
    if (void 0 === s) return this.inner[n] = [[t, e]], void this.innerSize++;
    for (let n2 = 0; n2 < s.length; n2++) if (this.equalsFn(s[n2][0], t))
      return void (s[n2] = [t, e]);
    s.push([t, e]), this.innerSize++;
  }
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  delete(t) {
    const e = this.mapKeyFn(t), n = this.inner[e];
    if (void 0 === n) return false;
    for (let s = 0; s < n.length; s++) if (this.equalsFn(n[s][0], t)) return 1 === n.length ? delete this.inner[e] : n.splice(s, 1), this.innerSize--, true;
    return false;
  }
  forEach(t) {
    ge(this.inner, (e, n) => {
      for (const [e2, s] of n) t(e2, s);
    });
  }
  isEmpty() {
    return ye(this.inner);
  }
  size() {
    return this.innerSize;
  }
};
var us = new pe(ht.comparator);
function cs() {
  return us;
}
var as = new pe(ht.comparator);
function hs(...t) {
  let e = as;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function ls(t) {
  let e = as;
  return t.forEach((t2, n) => e = e.insert(t2, n.overlayedDocument)), e;
}
function fs() {
  return ws();
}
function ds() {
  return ws();
}
function ws() {
  return new os((t) => t.toString(), (t, e) => t.isEqual(e));
}
var _s = new pe(ht.comparator);
var ms = new Ee(ht.comparator);
function gs(...t) {
  let e = ms;
  for (const n of t) e = e.add(n);
  return e;
}
var ys = new Ee(et);
function ps() {
  return ys;
}
function Is(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return {
      doubleValue: "NaN"
    };
    if (e === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (e === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }
  return {
    doubleValue: Bt(e) ? "-0" : e
  };
}
function Ts(t) {
  return {
    integerValue: "" + t
  };
}
function Es(t, e) {
  return Lt(e) ? Ts(e) : Is(t, e);
}
var As = class {
  constructor() {
    this._ = void 0;
  }
};
function vs(t, e, n) {
  return t instanceof bs ? function(t2, e2) {
    const n2 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t2.seconds,
            nanos: t2.nanoseconds
          }
        }
      }
    };
    return e2 && Ne(e2) && (e2 = ke(e2)), e2 && (n2.fields.__previous_value__ = e2), {
      mapValue: n2
    };
  }(n, e) : t instanceof Vs ? Ss(t, e) : t instanceof Ds ? Cs(t, e) : function(t2, e2) {
    const n2 = Ps(t2, e2), s = Ns(n2) + Ns(t2.gt);
    return He(n2) && He(t2.gt) ? Ts(s) : Is(t2.serializer, s);
  }(t, e);
}
function Rs(t, e, n) {
  return t instanceof Vs ? Ss(t, e) : t instanceof Ds ? Cs(t, e) : n;
}
function Ps(t, e) {
  return t instanceof xs ? He(n = e) || function(t2) {
    return !!t2 && "doubleValue" in t2;
  }(n) ? e : {
    integerValue: 0
  } : null;
  var n;
}
var bs = class extends As {
};
var Vs = class extends As {
  constructor(t) {
    super(), this.elements = t;
  }
};
function Ss(t, e) {
  const n = ks(e);
  for (const e2 of t.elements) n.some((t2) => qe(t2, e2)) || n.push(e2);
  return {
    arrayValue: {
      values: n
    }
  };
}
var Ds = class extends As {
  constructor(t) {
    super(), this.elements = t;
  }
};
function Cs(t, e) {
  let n = ks(e);
  for (const e2 of t.elements) n = n.filter((t2) => !qe(t2, e2));
  return {
    arrayValue: {
      values: n
    }
  };
}
var xs = class extends As {
  constructor(t, e) {
    super(), this.serializer = t, this.gt = e;
  }
};
function Ns(t) {
  return Ce(t.integerValue || t.doubleValue);
}
function ks(t) {
  return Je(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
var Ms = class {
  constructor(t, e) {
    this.field = t, this.transform = e;
  }
};
function $s(t, e) {
  return t.field.isEqual(e.field) && function(t2, e2) {
    return t2 instanceof Vs && e2 instanceof Vs || t2 instanceof Ds && e2 instanceof Ds ? nt(t2.elements, e2.elements, qe) : t2 instanceof xs && e2 instanceof xs ? qe(t2.gt, e2.gt) : t2 instanceof bs && e2 instanceof bs;
  }(t.transform, e.transform);
}
var Os = class {
  constructor(t, e) {
    this.version = t, this.transformResults = e;
  }
};
var Fs = class _Fs {
  constructor(t, e) {
    this.updateTime = t, this.exists = e;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new _Fs();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(t) {
    return new _Fs(void 0, t);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(t) {
    return new _Fs(t);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(t) {
    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
  }
};
function Bs(t, e) {
  return void 0 !== t.updateTime ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e.isFoundDocument();
}
var Ls = class {
};
function qs(t, e) {
  if (!t.hasLocalMutations || e && 0 === e.fields.length) return null;
  if (null === e) return t.isNoDocument() ? new Ys(t.key, Fs.none()) : new js(t.key, t.data, Fs.none());
  {
    const n = t.data, s = un.empty();
    let i = new Ee(at.comparator);
    for (let t2 of e.fields) if (!i.has(t2)) {
      let e2 = n.field(t2);
      null === e2 && t2.length > 1 && (t2 = t2.popLast(), e2 = n.field(t2)), null === e2 ? s.delete(t2) : s.set(t2, e2), i = i.add(t2);
    }
    return new zs(t.key, s, new Re(i.toArray()), Fs.none());
  }
}
function Us(t, e, n) {
  t instanceof js ? function(t2, e2, n2) {
    const s = t2.value.clone(), i = Hs(t2.fieldTransforms, e2, n2.transformResults);
    s.setAll(i), e2.convertToFoundDocument(n2.version, s).setHasCommittedMutations();
  }(t, e, n) : t instanceof zs ? function(t2, e2, n2) {
    if (!Bs(t2.precondition, e2))
      return void e2.convertToUnknownDocument(n2.version);
    const s = Hs(t2.fieldTransforms, e2, n2.transformResults), i = e2.data;
    i.setAll(Ws(t2)), i.setAll(s), e2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
  }(t, e, n) : function(t2, e2, n2) {
    e2.convertToNoDocument(n2.version).setHasCommittedMutations();
  }(0, e, n);
}
function Ks(t, e, n, s) {
  return t instanceof js ? function(t2, e2, n2, s2) {
    if (!Bs(t2.precondition, e2))
      return n2;
    const i = t2.value.clone(), r2 = Js(t2.fieldTransforms, s2, e2);
    return i.setAll(r2), e2.convertToFoundDocument(e2.version, i).setHasLocalMutations(), null;
  }(t, e, n, s) : t instanceof zs ? function(t2, e2, n2, s2) {
    if (!Bs(t2.precondition, e2)) return n2;
    const i = Js(t2.fieldTransforms, s2, e2), r2 = e2.data;
    if (r2.setAll(Ws(t2)), r2.setAll(i), e2.convertToFoundDocument(e2.version, r2).setHasLocalMutations(), null === n2) return null;
    return n2.unionWith(t2.fieldMask.fields).unionWith(t2.fieldTransforms.map((t3) => t3.field));
  }(t, e, n, s) : function(t2, e2, n2) {
    if (Bs(t2.precondition, e2)) return e2.convertToNoDocument(e2.version).setHasLocalMutations(), null;
    return n2;
  }(t, e, n);
}
function Gs(t, e) {
  let n = null;
  for (const s of t.fieldTransforms) {
    const t2 = e.data.field(s.field), i = Ps(s.transform, t2 || null);
    null != i && (null === n && (n = un.empty()), n.set(s.field, i));
  }
  return n || null;
}
function Qs(t, e) {
  return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && !!function(t2, e2) {
    return void 0 === t2 && void 0 === e2 || !(!t2 || !e2) && nt(t2, e2, (t3, e3) => $s(t3, e3));
  }(t.fieldTransforms, e.fieldTransforms) && (0 === t.type ? t.value.isEqual(e.value) : 1 !== t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask));
}
var js = class extends Ls {
  constructor(t, e, n, s = []) {
    super(), this.key = t, this.value = e, this.precondition = n, this.fieldTransforms = s, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
};
var zs = class extends Ls {
  constructor(t, e, n, s, i = []) {
    super(), this.key = t, this.data = e, this.fieldMask = n, this.precondition = s, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
function Ws(t) {
  const e = /* @__PURE__ */ new Map();
  return t.fieldMask.fields.forEach((n) => {
    if (!n.isEmpty()) {
      const s = t.data.field(n);
      e.set(n, s);
    }
  }), e;
}
function Hs(t, e, n) {
  const s = /* @__PURE__ */ new Map();
  F2(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const r2 = t[i], o = r2.transform, u = e.data.field(r2.field);
    s.set(r2.field, Rs(o, u, n[i]));
  }
  return s;
}
function Js(t, e, n) {
  const s = /* @__PURE__ */ new Map();
  for (const i of t) {
    const t2 = i.transform, r2 = n.data.field(i.field);
    s.set(i.field, vs(t2, r2, e));
  }
  return s;
}
var Ys = class extends Ls {
  constructor(t, e) {
    super(), this.key = t, this.precondition = e, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var Xs = class extends Ls {
  constructor(t, e) {
    super(), this.key = t, this.precondition = e, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var Zs = class {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  constructor(t, e, n, s) {
    this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = s;
  }
  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to compute the state of the remote document
   *
   * @param document - The document to apply mutations to.
   * @param batchResult - The result of applying the MutationBatch to the
   * backend.
   */
  applyToRemoteDocument(t, e) {
    const n = e.mutationResults;
    for (let e2 = 0; e2 < this.mutations.length; e2++) {
      const s = this.mutations[e2];
      if (s.key.isEqual(t.key)) {
        Us(s, t, n[e2]);
      }
    }
  }
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param document - The document to apply mutations to.
   * @param mutatedFields - Fields that have been updated before applying this mutation batch.
   * @returns A `FieldMask` representing all the fields that are mutated.
   */
  applyToLocalView(t, e) {
    for (const n of this.baseMutations) n.key.isEqual(t.key) && (e = Ks(n, t, e, this.localWriteTime));
    for (const n of this.mutations) n.key.isEqual(t.key) && (e = Ks(n, t, e, this.localWriteTime));
    return e;
  }
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
   * replace all the mutation applications.
   */
  applyToLocalDocumentSet(t, e) {
    const n = ds();
    return this.mutations.forEach((s) => {
      const i = t.get(s.key), r2 = i.overlayedDocument;
      let o = this.applyToLocalView(r2, i.mutatedFields);
      o = e.has(s.key) ? null : o;
      const u = qs(r2, o);
      null !== u && n.set(s.key, u), r2.isValidDocument() || r2.convertToNoDocument(rt.min());
    }), n;
  }
  keys() {
    return this.mutations.reduce((t, e) => t.add(e.key), gs());
  }
  isEqual(t) {
    return this.batchId === t.batchId && nt(this.mutations, t.mutations, (t2, e) => Qs(t2, e)) && nt(this.baseMutations, t.baseMutations, (t2, e) => Qs(t2, e));
  }
};
var ti = class _ti {
  constructor(t, e, n, s) {
    this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = s;
  }
  /**
   * Creates a new MutationBatchResult for the given batch and results. There
   * must be one result for each mutation in the batch. This static factory
   * caches a document=&gt;version mapping (docVersions).
   */
  static from(t, e, n) {
    F2(t.mutations.length === n.length);
    let s = _s;
    const i = t.mutations;
    for (let t2 = 0; t2 < i.length; t2++) s = s.insert(i[t2].key, n[t2].version);
    return new _ti(t, e, n, s);
  }
};
var ei = class {
  constructor(t, e) {
    this.largestBatchId = t, this.mutation = e;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t) {
    return null !== t && this.mutation === t.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
};
var ni = class {
  constructor(t, e, n) {
    this.alias = t, this.yt = e, this.fieldPath = n;
  }
};
var si = class {
  constructor(t, e) {
    this.count = t, this.unchangedNames = e;
  }
};
var ii;
var ri;
function oi(t) {
  switch (t) {
    default:
      return O2();
    case q2.CANCELLED:
    case q2.UNKNOWN:
    case q2.DEADLINE_EXCEEDED:
    case q2.RESOURCE_EXHAUSTED:
    case q2.INTERNAL:
    case q2.UNAVAILABLE:
    case q2.UNAUTHENTICATED:
      return false;
    case q2.INVALID_ARGUMENT:
    case q2.NOT_FOUND:
    case q2.ALREADY_EXISTS:
    case q2.PERMISSION_DENIED:
    case q2.FAILED_PRECONDITION:
    case q2.ABORTED:
    case q2.OUT_OF_RANGE:
    case q2.UNIMPLEMENTED:
    case q2.DATA_LOSS:
      return true;
  }
}
function ui(t) {
  if (void 0 === t)
    return k2("GRPC error has no .code"), q2.UNKNOWN;
  switch (t) {
    case ii.OK:
      return q2.OK;
    case ii.CANCELLED:
      return q2.CANCELLED;
    case ii.UNKNOWN:
      return q2.UNKNOWN;
    case ii.DEADLINE_EXCEEDED:
      return q2.DEADLINE_EXCEEDED;
    case ii.RESOURCE_EXHAUSTED:
      return q2.RESOURCE_EXHAUSTED;
    case ii.INTERNAL:
      return q2.INTERNAL;
    case ii.UNAVAILABLE:
      return q2.UNAVAILABLE;
    case ii.UNAUTHENTICATED:
      return q2.UNAUTHENTICATED;
    case ii.INVALID_ARGUMENT:
      return q2.INVALID_ARGUMENT;
    case ii.NOT_FOUND:
      return q2.NOT_FOUND;
    case ii.ALREADY_EXISTS:
      return q2.ALREADY_EXISTS;
    case ii.PERMISSION_DENIED:
      return q2.PERMISSION_DENIED;
    case ii.FAILED_PRECONDITION:
      return q2.FAILED_PRECONDITION;
    case ii.ABORTED:
      return q2.ABORTED;
    case ii.OUT_OF_RANGE:
      return q2.OUT_OF_RANGE;
    case ii.UNIMPLEMENTED:
      return q2.UNIMPLEMENTED;
    case ii.DATA_LOSS:
      return q2.DATA_LOSS;
    default:
      return O2();
  }
}
(ri = ii || (ii = {}))[ri.OK = 0] = "OK", ri[ri.CANCELLED = 1] = "CANCELLED", ri[ri.UNKNOWN = 2] = "UNKNOWN", ri[ri.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ri[ri.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ri[ri.NOT_FOUND = 5] = "NOT_FOUND", ri[ri.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ri[ri.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ri[ri.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ri[ri.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ri[ri.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ri[ri.ABORTED = 10] = "ABORTED", ri[ri.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ri[ri.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ri[ri.INTERNAL = 13] = "INTERNAL", ri[ri.UNAVAILABLE = 14] = "UNAVAILABLE", ri[ri.DATA_LOSS = 15] = "DATA_LOSS";
var ci = class _ci {
  constructor() {
    this.onExistenceFilterMismatchCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * Returns the singleton instance of this class, or null if it has not been
   * initialized.
   */
  static get instance() {
    return ai;
  }
  /**
   * Returns the singleton instance of this class, creating it if is has never
   * been created before.
   */
  static getOrCreateInstance() {
    return null === ai && (ai = new _ci()), ai;
  }
  /**
   * Registers a callback to be notified when an existence filter mismatch
   * occurs in the Watch listen stream.
   *
   * The relative order in which callbacks are notified is unspecified; do not
   * rely on any particular ordering. If a given callback is registered multiple
   * times then it will be notified multiple times, once per registration.
   *
   * @param callback the callback to invoke upon existence filter mismatch.
   *
   * @return a function that, when called, unregisters the given callback; only
   * the first invocation of the returned function does anything; all subsequent
   * invocations do nothing.
   */
  onExistenceFilterMismatch(t) {
    const e = Symbol();
    return this.onExistenceFilterMismatchCallbacks.set(e, t), () => this.onExistenceFilterMismatchCallbacks.delete(e);
  }
  /**
   * Invokes all currently-registered `onExistenceFilterMismatch` callbacks.
   * @param info Information about the existence filter mismatch.
   */
  notifyOnExistenceFilterMismatch(t) {
    this.onExistenceFilterMismatchCallbacks.forEach((e) => e(t));
  }
};
var ai = null;
function hi() {
  return new TextEncoder();
}
var li = new Integer([4294967295, 4294967295], 0);
function fi(t) {
  const e = hi().encode(t), n = new Md5();
  return n.update(e), new Uint8Array(n.digest());
}
function di(t) {
  const e = new DataView(t.buffer), n = e.getUint32(
    0,
    /* littleEndian= */
    true
  ), s = e.getUint32(
    4,
    /* littleEndian= */
    true
  ), i = e.getUint32(
    8,
    /* littleEndian= */
    true
  ), r2 = e.getUint32(
    12,
    /* littleEndian= */
    true
  );
  return [new Integer([n, s], 0), new Integer([i, r2], 0)];
}
var wi = class _wi {
  constructor(t, e, n) {
    if (this.bitmap = t, this.padding = e, this.hashCount = n, e < 0 || e >= 8) throw new _i(`Invalid padding: ${e}`);
    if (n < 0) throw new _i(`Invalid hash count: ${n}`);
    if (t.length > 0 && 0 === this.hashCount)
      throw new _i(`Invalid hash count: ${n}`);
    if (0 === t.length && 0 !== e)
      throw new _i(`Invalid padding when bitmap length is 0: ${e}`);
    this.It = 8 * t.length - e, // Set the bit count in Integer to avoid repetition in mightContain().
    this.Tt = Integer.fromNumber(this.It);
  }
  // Calculate the ith hash value based on the hashed 64bit integers,
  // and calculate its corresponding bit index in the bitmap to be checked.
  Et(t, e, n) {
    let s = t.add(e.multiply(Integer.fromNumber(n)));
    return 1 === s.compare(li) && (s = new Integer([s.getBits(0), s.getBits(1)], 0)), s.modulo(this.Tt).toNumber();
  }
  // Return whether the bit on the given index in the bitmap is set to 1.
  At(t) {
    return 0 != (this.bitmap[Math.floor(t / 8)] & 1 << t % 8);
  }
  vt(t) {
    if (0 === this.It) return false;
    const e = fi(t), [n, s] = di(e);
    for (let t2 = 0; t2 < this.hashCount; t2++) {
      const e2 = this.Et(n, s, t2);
      if (!this.At(e2)) return false;
    }
    return true;
  }
  /** Create bloom filter for testing purposes only. */
  static create(t, e, n) {
    const s = t % 8 == 0 ? 0 : 8 - t % 8, i = new Uint8Array(Math.ceil(t / 8)), r2 = new _wi(i, s, e);
    return n.forEach((t2) => r2.insert(t2)), r2;
  }
  insert(t) {
    if (0 === this.It) return;
    const e = fi(t), [n, s] = di(e);
    for (let t2 = 0; t2 < this.hashCount; t2++) {
      const e2 = this.Et(n, s, t2);
      this.Rt(e2);
    }
  }
  Rt(t) {
    const e = Math.floor(t / 8), n = t % 8;
    this.bitmap[e] |= 1 << n;
  }
};
var _i = class extends Error {
  constructor() {
    super(...arguments), this.name = "BloomFilterError";
  }
};
var mi = class _mi {
  constructor(t, e, n, s, i) {
    this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = s, this.resolvedLimboDocuments = i;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only
  static createSynthesizedRemoteEventForCurrentChange(t, e, n) {
    const s = /* @__PURE__ */ new Map();
    return s.set(t, gi.createSynthesizedTargetChangeForCurrentChange(t, e, n)), new _mi(rt.min(), s, new pe(et), cs(), gs());
  }
};
var gi = class _gi {
  constructor(t, e, n, s, i) {
    this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = s, this.removedDocuments = i;
  }
  /**
   * This method is used to create a synthesized TargetChanges that can be used to
   * apply a CURRENT status change to a View (for queries executed in a different
   * tab) or for new queries (to raise snapshots with correct CURRENT status).
   */
  static createSynthesizedTargetChangeForCurrentChange(t, e, n) {
    return new _gi(n, e, gs(), gs(), gs());
  }
};
var yi = class {
  constructor(t, e, n, s) {
    this.Pt = t, this.removedTargetIds = e, this.key = n, this.bt = s;
  }
};
var pi = class {
  constructor(t, e) {
    this.targetId = t, this.Vt = e;
  }
};
var Ii = class {
  constructor(t, e, n = Ve.EMPTY_BYTE_STRING, s = null) {
    this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = s;
  }
};
var Ti = class {
  constructor() {
    this.St = 0, /**
     * Keeps track of the document changes since the last raised snapshot.
     *
     * These changes are continuously updated as we receive document updates and
     * always reflect the current set of changes against the last issued snapshot.
     */
    this.Dt = vi(), /** See public getters for explanations of these fields. */
    this.Ct = Ve.EMPTY_BYTE_STRING, this.xt = false, /**
     * Whether this target state should be included in the next snapshot. We
     * initialize to true so that newly-added targets are included in the next
     * RemoteEvent.
     */
    this.Nt = true;
  }
  /**
   * Whether this target has been marked 'current'.
   *
   * 'Current' has special meaning in the RPC protocol: It implies that the
   * Watch backend has sent us all changes up to the point at which the target
   * was added and that the target is consistent with the rest of the watch
   * stream.
   */
  get current() {
    return this.xt;
  }
  /** The last resume token sent to us for this target. */
  get resumeToken() {
    return this.Ct;
  }
  /** Whether this target has pending target adds or target removes. */
  get kt() {
    return 0 !== this.St;
  }
  /** Whether we have modified any state that should trigger a snapshot. */
  get Mt() {
    return this.Nt;
  }
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  $t(t) {
    t.approximateByteSize() > 0 && (this.Nt = true, this.Ct = t);
  }
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  Ot() {
    let t = gs(), e = gs(), n = gs();
    return this.Dt.forEach((s, i) => {
      switch (i) {
        case 0:
          t = t.add(s);
          break;
        case 2:
          e = e.add(s);
          break;
        case 1:
          n = n.add(s);
          break;
        default:
          O2();
      }
    }), new gi(this.Ct, this.xt, t, e, n);
  }
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  Ft() {
    this.Nt = false, this.Dt = vi();
  }
  Bt(t, e) {
    this.Nt = true, this.Dt = this.Dt.insert(t, e);
  }
  Lt(t) {
    this.Nt = true, this.Dt = this.Dt.remove(t);
  }
  qt() {
    this.St += 1;
  }
  Ut() {
    this.St -= 1;
  }
  Kt() {
    this.Nt = true, this.xt = true;
  }
};
var Ei = class {
  constructor(t) {
    this.Gt = t, /** The internal state of all tracked targets. */
    this.Qt = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
    this.jt = cs(), /** A mapping of document keys to their set of target IDs. */
    this.zt = Ai(), /**
     * A map of targets with existence filter mismatches. These targets are
     * known to be inconsistent and their listens needs to be re-established by
     * RemoteStore.
     */
    this.Wt = new pe(et);
  }
  /**
   * Processes and adds the DocumentWatchChange to the current set of changes.
   */
  Ht(t) {
    for (const e of t.Pt) t.bt && t.bt.isFoundDocument() ? this.Jt(e, t.bt) : this.Yt(e, t.key, t.bt);
    for (const e of t.removedTargetIds) this.Yt(e, t.key, t.bt);
  }
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  Xt(t) {
    this.forEachTarget(t, (e) => {
      const n = this.Zt(e);
      switch (t.state) {
        case 0:
          this.te(e) && n.$t(t.resumeToken);
          break;
        case 1:
          n.Ut(), n.kt || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          n.Ft(), n.$t(t.resumeToken);
          break;
        case 2:
          n.Ut(), n.kt || this.removeTarget(e);
          break;
        case 3:
          this.te(e) && (n.Kt(), n.$t(t.resumeToken));
          break;
        case 4:
          this.te(e) && // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          (this.ee(e), n.$t(t.resumeToken));
          break;
        default:
          O2();
      }
    });
  }
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  forEachTarget(t, e) {
    t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Qt.forEach((t2, n) => {
      this.te(n) && e(n);
    });
  }
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  ne(t) {
    var e;
    const n = t.targetId, s = t.Vt.count, i = this.se(n);
    if (i) {
      const r2 = i.target;
      if (Fn(r2)) {
        if (0 === s) {
          const t2 = new ht(r2.path);
          this.Yt(n, t2, an.newNoDocument(t2, rt.min()));
        } else F2(1 === s);
      } else {
        const i2 = this.ie(n);
        if (i2 !== s) {
          const s2 = this.re(t, i2);
          if (0 !== s2) {
            this.ee(n);
            const t2 = 2 === s2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
            this.Wt = this.Wt.insert(n, t2);
          }
          null === (e = ci.instance) || void 0 === e || e.notifyOnExistenceFilterMismatch(function(t2, e2, n2) {
            var s3, i3, r3, o, u, c;
            const a = {
              localCacheCount: e2,
              existenceFilterCount: n2.count
            }, h = n2.unchangedNames;
            h && (a.bloomFilter = {
              applied: 0 === t2,
              hashCount: null !== (s3 = null == h ? void 0 : h.hashCount) && void 0 !== s3 ? s3 : 0,
              bitmapLength: null !== (o = null === (r3 = null === (i3 = null == h ? void 0 : h.bits) || void 0 === i3 ? void 0 : i3.bitmap) || void 0 === r3 ? void 0 : r3.length) && void 0 !== o ? o : 0,
              padding: null !== (c = null === (u = null == h ? void 0 : h.bits) || void 0 === u ? void 0 : u.padding) && void 0 !== c ? c : 0
            });
            return a;
          }(s2, i2, t.Vt));
        }
      }
    }
  }
  /**
   * Apply bloom filter to remove the deleted documents, and return the
   * application status.
   */
  re(t, e) {
    const {
      unchangedNames: n,
      count: s
    } = t.Vt;
    if (!n || !n.bits) return 1;
    const {
      bits: {
        bitmap: i = "",
        padding: r2 = 0
      },
      hashCount: o = 0
    } = n;
    let u, c;
    try {
      u = xe(i).toUint8Array();
    } catch (t2) {
      if (t2 instanceof Pe) return M2("Decoding the base64 bloom filter in existence filter failed (" + t2.message + "); ignoring the bloom filter and falling back to full re-query."), 1;
      throw t2;
    }
    try {
      c = new wi(u, r2, o);
    } catch (t2) {
      return M2(t2 instanceof _i ? "BloomFilter error: " : "Applying bloom filter failed: ", t2), 1;
    }
    if (0 === c.It) return 1;
    return s !== e - this.oe(t.targetId, c) ? 2 : 0;
  }
  /**
   * Filter out removed documents based on bloom filter membership result and
   * return number of documents removed.
   */
  oe(t, e) {
    const n = this.Gt.getRemoteKeysForTarget(t);
    let s = 0;
    return n.forEach((n2) => {
      const i = this.Gt.ue(), r2 = `projects/${i.projectId}/databases/${i.database}/documents/${n2.path.canonicalString()}`;
      e.vt(r2) || (this.Yt(
        t,
        n2,
        /*updatedDocument=*/
        null
      ), s++);
    }), s;
  }
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  ce(t) {
    const e = /* @__PURE__ */ new Map();
    this.Qt.forEach((n2, s2) => {
      const i = this.se(s2);
      if (i) {
        if (n2.current && Fn(i.target)) {
          const e2 = new ht(i.target.path);
          null !== this.jt.get(e2) || this.ae(s2, e2) || this.Yt(s2, e2, an.newNoDocument(e2, t));
        }
        n2.Mt && (e.set(s2, n2.Ot()), n2.Ft());
      }
    });
    let n = gs();
    this.zt.forEach((t2, e2) => {
      let s2 = true;
      e2.forEachWhile((t3) => {
        const e3 = this.se(t3);
        return !e3 || "TargetPurposeLimboResolution" === e3.purpose || (s2 = false, false);
      }), s2 && (n = n.add(t2));
    }), this.jt.forEach((e2, n2) => n2.setReadTime(t));
    const s = new mi(t, e, this.Wt, this.jt, n);
    return this.jt = cs(), this.zt = Ai(), this.Wt = new pe(et), s;
  }
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  Jt(t, e) {
    if (!this.te(t)) return;
    const n = this.ae(t, e.key) ? 2 : 0;
    this.Zt(t).Bt(e.key, n), this.jt = this.jt.insert(e.key, e), this.zt = this.zt.insert(e.key, this.he(e.key).add(t));
  }
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  Yt(t, e, n) {
    if (!this.te(t)) return;
    const s = this.Zt(t);
    this.ae(t, e) ? s.Bt(
      e,
      1
      /* ChangeType.Removed */
    ) : (
      // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      s.Lt(e)
    ), this.zt = this.zt.insert(e, this.he(e).delete(t)), n && (this.jt = this.jt.insert(e, n));
  }
  removeTarget(t) {
    this.Qt.delete(t);
  }
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  ie(t) {
    const e = this.Zt(t).Ot();
    return this.Gt.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
  }
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  qt(t) {
    this.Zt(t).qt();
  }
  Zt(t) {
    let e = this.Qt.get(t);
    return e || (e = new Ti(), this.Qt.set(t, e)), e;
  }
  he(t) {
    let e = this.zt.get(t);
    return e || (e = new Ee(et), this.zt = this.zt.insert(t, e)), e;
  }
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  te(t) {
    const e = null !== this.se(t);
    return e || N2("WatchChangeAggregator", "Detected inactive target", t), e;
  }
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  se(t) {
    const e = this.Qt.get(t);
    return e && e.kt ? null : this.Gt.le(t);
  }
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  ee(t) {
    this.Qt.set(t, new Ti());
    this.Gt.getRemoteKeysForTarget(t).forEach((e) => {
      this.Yt(
        t,
        e,
        /*updatedDocument=*/
        null
      );
    });
  }
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  ae(t, e) {
    return this.Gt.getRemoteKeysForTarget(t).has(e);
  }
};
function Ai() {
  return new pe(ht.comparator);
}
function vi() {
  return new pe(ht.comparator);
}
var Ri = /* @__PURE__ */ (() => {
  const t = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return t;
})();
var Pi = /* @__PURE__ */ (() => {
  const t = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return t;
})();
var bi = /* @__PURE__ */ (() => {
  const t = {
    and: "AND",
    or: "OR"
  };
  return t;
})();
var Vi = class {
  constructor(t, e) {
    this.databaseId = t, this.useProto3Json = e;
  }
};
function Si(t, e) {
  return t.useProto3Json || Ft(e) ? e : {
    value: e
  };
}
function Di(t, e) {
  if (t.useProto3Json) {
    return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Ci(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function xi(t, e) {
  return Di(t, e.toTimestamp());
}
function Ni(t) {
  return F2(!!t), rt.fromTimestamp(function(t2) {
    const e = De(t2);
    return new it(e.seconds, e.nanos);
  }(t));
}
function ki(t, e) {
  return function(t2) {
    return new ut(["projects", t2.projectId, "databases", t2.database]);
  }(t).child("documents").child(e).canonicalString();
}
function Mi(t) {
  const e = ut.fromString(t);
  return F2(ur(e)), e;
}
function $i(t, e) {
  return ki(t.databaseId, e.path);
}
function Oi(t, e) {
  const n = Mi(e);
  if (n.get(1) !== t.databaseId.projectId) throw new U2(q2.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
  if (n.get(3) !== t.databaseId.database) throw new U2(q2.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
  return new ht(qi(n));
}
function Fi(t, e) {
  return ki(t.databaseId, e);
}
function Bi(t) {
  const e = Mi(t);
  return 4 === e.length ? ut.emptyPath() : qi(e);
}
function Li(t) {
  return new ut(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString();
}
function qi(t) {
  return F2(t.length > 4 && "documents" === t.get(4)), t.popFirst(5);
}
function Ui(t, e, n) {
  return {
    name: $i(t, e),
    fields: n.value.mapValue.fields
  };
}
function Ki(t, e, n) {
  const s = Oi(t, e.name), i = Ni(e.updateTime), r2 = e.createTime ? Ni(e.createTime) : rt.min(), o = new un({
    mapValue: {
      fields: e.fields
    }
  }), u = an.newFoundDocument(s, i, r2, o);
  return n && u.setHasCommittedMutations(), n ? u.setHasCommittedMutations() : u;
}
function Gi(t, e) {
  return "found" in e ? function(t2, e2) {
    F2(!!e2.found), e2.found.name, e2.found.updateTime;
    const n = Oi(t2, e2.found.name), s = Ni(e2.found.updateTime), i = e2.found.createTime ? Ni(e2.found.createTime) : rt.min(), r2 = new un({
      mapValue: {
        fields: e2.found.fields
      }
    });
    return an.newFoundDocument(n, s, i, r2);
  }(t, e) : "missing" in e ? function(t2, e2) {
    F2(!!e2.missing), F2(!!e2.readTime);
    const n = Oi(t2, e2.missing), s = Ni(e2.readTime);
    return an.newNoDocument(n, s);
  }(t, e) : O2();
}
function Qi(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const s = function(t2) {
      return "NO_CHANGE" === t2 ? 0 : "ADD" === t2 ? 1 : "REMOVE" === t2 ? 2 : "CURRENT" === t2 ? 3 : "RESET" === t2 ? 4 : O2();
    }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r2 = function(t2, e2) {
      return t2.useProto3Json ? (F2(void 0 === e2 || "string" == typeof e2), Ve.fromBase64String(e2 || "")) : (F2(void 0 === e2 || e2 instanceof Uint8Array), Ve.fromUint8Array(e2 || new Uint8Array()));
    }(t, e.targetChange.resumeToken), o = e.targetChange.cause, u = o && function(t2) {
      const e2 = void 0 === t2.code ? q2.UNKNOWN : ui(t2.code);
      return new U2(e2, t2.message || "");
    }(o);
    n = new Ii(s, i, r2, u || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const s = e.documentChange;
    s.document, s.document.name, s.document.updateTime;
    const i = Oi(t, s.document.name), r2 = Ni(s.document.updateTime), o = s.document.createTime ? Ni(s.document.createTime) : rt.min(), u = new un({
      mapValue: {
        fields: s.document.fields
      }
    }), c = an.newFoundDocument(i, r2, o, u), a = s.targetIds || [], h = s.removedTargetIds || [];
    n = new yi(a, h, c.key, c);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const s = e.documentDelete;
    s.document;
    const i = Oi(t, s.document), r2 = s.readTime ? Ni(s.readTime) : rt.min(), o = an.newNoDocument(i, r2), u = s.removedTargetIds || [];
    n = new yi([], u, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const s = e.documentRemove;
    s.document;
    const i = Oi(t, s.document), r2 = s.removedTargetIds || [];
    n = new yi([], r2, i, null);
  } else {
    if (!("filter" in e)) return O2();
    {
      e.filter;
      const t2 = e.filter;
      t2.targetId;
      const {
        count: s = 0,
        unchangedNames: i
      } = t2, r2 = new si(s, i), o = t2.targetId;
      n = new pi(o, r2);
    }
  }
  return n;
}
function ji(t, e) {
  let n;
  if (e instanceof js) n = {
    update: Ui(t, e.key, e.value)
  };
  else if (e instanceof Ys) n = {
    delete: $i(t, e.key)
  };
  else if (e instanceof zs) n = {
    update: Ui(t, e.key, e.data),
    updateMask: or(e.fieldMask)
  };
  else {
    if (!(e instanceof Xs)) return O2();
    n = {
      verify: $i(t, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t2) => function(t3, e2) {
    const n2 = e2.transform;
    if (n2 instanceof bs) return {
      fieldPath: e2.field.canonicalString(),
      setToServerValue: "REQUEST_TIME"
    };
    if (n2 instanceof Vs) return {
      fieldPath: e2.field.canonicalString(),
      appendMissingElements: {
        values: n2.elements
      }
    };
    if (n2 instanceof Ds) return {
      fieldPath: e2.field.canonicalString(),
      removeAllFromArray: {
        values: n2.elements
      }
    };
    if (n2 instanceof xs) return {
      fieldPath: e2.field.canonicalString(),
      increment: n2.gt
    };
    throw O2();
  }(0, t2))), e.precondition.isNone || (n.currentDocument = function(t2, e2) {
    return void 0 !== e2.updateTime ? {
      updateTime: xi(t2, e2.updateTime)
    } : void 0 !== e2.exists ? {
      exists: e2.exists
    } : O2();
  }(t, e.precondition)), n;
}
function zi(t, e) {
  const n = e.currentDocument ? function(t2) {
    return void 0 !== t2.updateTime ? Fs.updateTime(Ni(t2.updateTime)) : void 0 !== t2.exists ? Fs.exists(t2.exists) : Fs.none();
  }(e.currentDocument) : Fs.none(), s = e.updateTransforms ? e.updateTransforms.map((e2) => function(t2, e3) {
    let n2 = null;
    if ("setToServerValue" in e3) F2("REQUEST_TIME" === e3.setToServerValue), n2 = new bs();
    else if ("appendMissingElements" in e3) {
      const t3 = e3.appendMissingElements.values || [];
      n2 = new Vs(t3);
    } else if ("removeAllFromArray" in e3) {
      const t3 = e3.removeAllFromArray.values || [];
      n2 = new Ds(t3);
    } else "increment" in e3 ? n2 = new xs(t2, e3.increment) : O2();
    const s2 = at.fromServerFormat(e3.fieldPath);
    return new Ms(s2, n2);
  }(t, e2)) : [];
  if (e.update) {
    e.update.name;
    const i = Oi(t, e.update.name), r2 = new un({
      mapValue: {
        fields: e.update.fields
      }
    });
    if (e.updateMask) {
      const t2 = function(t3) {
        const e2 = t3.fieldPaths || [];
        return new Re(e2.map((t4) => at.fromServerFormat(t4)));
      }(e.updateMask);
      return new zs(i, r2, t2, n, s);
    }
    return new js(i, r2, n, s);
  }
  if (e.delete) {
    const s2 = Oi(t, e.delete);
    return new Ys(s2, n);
  }
  if (e.verify) {
    const s2 = Oi(t, e.verify);
    return new Xs(s2, n);
  }
  return O2();
}
function Wi(t, e) {
  return t && t.length > 0 ? (F2(void 0 !== e), t.map((t2) => function(t3, e2) {
    let n = t3.updateTime ? Ni(t3.updateTime) : Ni(e2);
    return n.isEqual(rt.min()) && // The Firestore Emulator currently returns an update time of 0 for
    // deletes of non-existing documents (rather than null). This breaks the
    // test "get deleted doc while offline with source=cache" as NoDocuments
    // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
    // TODO(#2149): Remove this when Emulator is fixed
    (n = Ni(e2)), new Os(n, t3.transformResults || []);
  }(t2, e))) : [];
}
function Hi(t, e) {
  return {
    documents: [Fi(t, e.path)]
  };
}
function Ji(t, e) {
  const n = {
    structuredQuery: {}
  }, s = e.path;
  null !== e.collectionGroup ? (n.parent = Fi(t, s), n.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n.parent = Fi(t, s.popLast()), n.structuredQuery.from = [{
    collectionId: s.lastSegment()
  }]);
  const i = function(t2) {
    if (0 === t2.length) return;
    return rr(gn.create(
      t2,
      "and"
      /* CompositeOperator.AND */
    ));
  }(e.filters);
  i && (n.structuredQuery.where = i);
  const r2 = function(t2) {
    if (0 === t2.length) return;
    return t2.map((t3) => (
      // visible for testing
      function(t4) {
        return {
          field: sr(t4.field),
          direction: tr(t4.dir)
        };
      }(t3)
    ));
  }(e.orderBy);
  r2 && (n.structuredQuery.orderBy = r2);
  const o = Si(t, e.limit);
  var u;
  return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = {
    before: (u = e.startAt).inclusive,
    values: u.position
  }), e.endAt && (n.structuredQuery.endAt = function(t2) {
    return {
      before: !t2.inclusive,
      values: t2.position
    };
  }(e.endAt)), n;
}
function Yi(t) {
  let e = Bi(t.parent);
  const n = t.structuredQuery, s = n.from ? n.from.length : 0;
  let i = null;
  if (s > 0) {
    F2(1 === s);
    const t2 = n.from[0];
    t2.allDescendants ? i = t2.collectionId : e = e.child(t2.collectionId);
  }
  let r2 = [];
  n.where && (r2 = function(t2) {
    const e2 = Zi(t2);
    if (e2 instanceof gn && In(e2)) return e2.getFilters();
    return [e2];
  }(n.where));
  let o = [];
  n.orderBy && (o = n.orderBy.map((t2) => function(t3) {
    return new dn(
      ir(t3.field),
      // visible for testing
      function(t4) {
        switch (t4) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t3.direction)
    );
  }(t2)));
  let u = null;
  n.limit && (u = function(t2) {
    let e2;
    return e2 = "object" == typeof t2 ? t2.value : t2, Ft(e2) ? null : e2;
  }(n.limit));
  let c = null;
  n.startAt && (c = function(t2) {
    const e2 = !!t2.before, n2 = t2.values || [];
    return new hn(n2, e2);
  }(n.startAt));
  let a = null;
  return n.endAt && (a = function(t2) {
    const e2 = !t2.before, n2 = t2.values || [];
    return new hn(n2, e2);
  }(n.endAt)), Kn(e, i, o, r2, u, "F", c, a);
}
function Xi(t, e) {
  const n = function(t2) {
    switch (t2) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return O2();
    }
  }(e.purpose);
  return null == n ? null : {
    "goog-listen-tags": n
  };
}
function Zi(t) {
  return void 0 !== t.unaryFilter ? function(t2) {
    switch (t2.unaryFilter.op) {
      case "IS_NAN":
        const e = ir(t2.unaryFilter.field);
        return mn.create(e, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const n = ir(t2.unaryFilter.field);
        return mn.create(n, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const s = ir(t2.unaryFilter.field);
        return mn.create(s, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const i = ir(t2.unaryFilter.field);
        return mn.create(i, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return O2();
    }
  }(t) : void 0 !== t.fieldFilter ? function(t2) {
    return mn.create(ir(t2.fieldFilter.field), function(t3) {
      switch (t3) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return O2();
      }
    }(t2.fieldFilter.op), t2.fieldFilter.value);
  }(t) : void 0 !== t.compositeFilter ? function(t2) {
    return gn.create(t2.compositeFilter.filters.map((t3) => Zi(t3)), function(t3) {
      switch (t3) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return O2();
      }
    }(t2.compositeFilter.op));
  }(t) : O2();
}
function tr(t) {
  return Ri[t];
}
function er(t) {
  return Pi[t];
}
function nr(t) {
  return bi[t];
}
function sr(t) {
  return {
    fieldPath: t.canonicalString()
  };
}
function ir(t) {
  return at.fromServerFormat(t.fieldPath);
}
function rr(t) {
  return t instanceof mn ? function(t2) {
    if ("==" === t2.op) {
      if (Xe(t2.value)) return {
        unaryFilter: {
          field: sr(t2.field),
          op: "IS_NAN"
        }
      };
      if (Ye(t2.value)) return {
        unaryFilter: {
          field: sr(t2.field),
          op: "IS_NULL"
        }
      };
    } else if ("!=" === t2.op) {
      if (Xe(t2.value)) return {
        unaryFilter: {
          field: sr(t2.field),
          op: "IS_NOT_NAN"
        }
      };
      if (Ye(t2.value)) return {
        unaryFilter: {
          field: sr(t2.field),
          op: "IS_NOT_NULL"
        }
      };
    }
    return {
      fieldFilter: {
        field: sr(t2.field),
        op: er(t2.op),
        value: t2.value
      }
    };
  }(t) : t instanceof gn ? function(t2) {
    const e = t2.getFilters().map((t3) => rr(t3));
    if (1 === e.length) return e[0];
    return {
      compositeFilter: {
        op: nr(t2.op),
        filters: e
      }
    };
  }(t) : O2();
}
function or(t) {
  const e = [];
  return t.fields.forEach((t2) => e.push(t2.canonicalString())), {
    fieldPaths: e
  };
}
function ur(t) {
  return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}
var cr = class _cr {
  constructor(t, e, n, s, i = rt.min(), r2 = rt.min(), o = Ve.EMPTY_BYTE_STRING, u = null) {
    this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = s, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = r2, this.resumeToken = o, this.expectedCount = u;
  }
  /** Creates a new target data instance with an updated sequence number. */
  withSequenceNumber(t) {
    return new _cr(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
  }
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  withResumeToken(t, e) {
    return new _cr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      e,
      this.lastLimboFreeSnapshotVersion,
      t,
      /* expectedCount= */
      null
    );
  }
  /**
   * Creates a new target data instance with an updated expected count.
   */
  withExpectedCount(t) {
    return new _cr(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, t);
  }
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  withLastLimboFreeSnapshotVersion(t) {
    return new _cr(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken, this.expectedCount);
  }
};
var ar = class {
  constructor(t) {
    this.fe = t;
  }
};
function hr(t, e) {
  let n;
  if (e.document) n = Ki(t.fe, e.document, !!e.hasCommittedMutations);
  else if (e.noDocument) {
    const t2 = ht.fromSegments(e.noDocument.path), s = wr(e.noDocument.readTime);
    n = an.newNoDocument(t2, s), e.hasCommittedMutations && n.setHasCommittedMutations();
  } else {
    if (!e.unknownDocument) return O2();
    {
      const t2 = ht.fromSegments(e.unknownDocument.path), s = wr(e.unknownDocument.version);
      n = an.newUnknownDocument(t2, s);
    }
  }
  return e.readTime && n.setReadTime(function(t2) {
    const e2 = new it(t2[0], t2[1]);
    return rt.fromTimestamp(e2);
  }(e.readTime)), n;
}
function lr(t, e) {
  const n = e.key, s = {
    prefixPath: n.getCollectionPath().popLast().toArray(),
    collectionGroup: n.collectionGroup,
    documentId: n.path.lastSegment(),
    readTime: fr(e.readTime),
    hasCommittedMutations: e.hasCommittedMutations
  };
  if (e.isFoundDocument()) s.document = function(t2, e2) {
    return {
      name: $i(t2, e2.key),
      fields: e2.data.value.mapValue.fields,
      updateTime: Di(t2, e2.version.toTimestamp()),
      createTime: Di(t2, e2.createTime.toTimestamp())
    };
  }(t.fe, e);
  else if (e.isNoDocument()) s.noDocument = {
    path: n.path.toArray(),
    readTime: dr(e.version)
  };
  else {
    if (!e.isUnknownDocument()) return O2();
    s.unknownDocument = {
      path: n.path.toArray(),
      version: dr(e.version)
    };
  }
  return s;
}
function fr(t) {
  const e = t.toTimestamp();
  return [e.seconds, e.nanoseconds];
}
function dr(t) {
  const e = t.toTimestamp();
  return {
    seconds: e.seconds,
    nanoseconds: e.nanoseconds
  };
}
function wr(t) {
  const e = new it(t.seconds, t.nanoseconds);
  return rt.fromTimestamp(e);
}
function _r(t, e) {
  const n = (e.baseMutations || []).map((e2) => zi(t.fe, e2));
  for (let t2 = 0; t2 < e.mutations.length - 1; ++t2) {
    const n2 = e.mutations[t2];
    if (t2 + 1 < e.mutations.length && void 0 !== e.mutations[t2 + 1].transform) {
      const s2 = e.mutations[t2 + 1];
      n2.updateTransforms = s2.transform.fieldTransforms, e.mutations.splice(t2 + 1, 1), ++t2;
    }
  }
  const s = e.mutations.map((e2) => zi(t.fe, e2)), i = it.fromMillis(e.localWriteTimeMs);
  return new Zs(e.batchId, i, n, s);
}
function mr(t) {
  const e = wr(t.readTime), n = void 0 !== t.lastLimboFreeSnapshotVersion ? wr(t.lastLimboFreeSnapshotVersion) : rt.min();
  let s;
  var i;
  return void 0 !== t.query.documents ? (F2(1 === (i = t.query).documents.length), s = Jn(Gn(Bi(i.documents[0])))) : s = function(t2) {
    return Jn(Yi(t2));
  }(t.query), new cr(s, t.targetId, "TargetPurposeListen", t.lastListenSequenceNumber, e, n, Ve.fromBase64String(t.resumeToken));
}
function gr(t, e) {
  const n = dr(e.snapshotVersion), s = dr(e.lastLimboFreeSnapshotVersion);
  let i;
  i = Fn(e.target) ? Hi(t.fe, e.target) : Ji(t.fe, e.target);
  const r2 = e.resumeToken.toBase64();
  return {
    targetId: e.targetId,
    canonicalId: $n(e.target),
    readTime: n,
    resumeToken: r2,
    lastListenSequenceNumber: e.sequenceNumber,
    lastLimboFreeSnapshotVersion: s,
    query: i
  };
}
function yr(t) {
  const e = Yi({
    parent: t.parent,
    structuredQuery: t.structuredQuery
  });
  return "LAST" === t.limitType ? Xn(
    e,
    e.limit,
    "L"
    /* LimitType.Last */
  ) : e;
}
function pr(t, e) {
  return new ei(e.largestBatchId, zi(t.fe, e.overlayMutation));
}
function Ir(t, e) {
  const n = e.path.lastSegment();
  return [t, qt(e.path.popLast()), n];
}
function Tr(t, e, n, s) {
  return {
    indexId: t,
    uid: e.uid || "",
    sequenceNumber: n,
    readTime: dr(s.readTime),
    documentKey: qt(s.documentKey.path),
    largestBatchId: s.largestBatchId
  };
}
var Er = class {
  getBundleMetadata(t, e) {
    return Ar(t).get(e).next((t2) => {
      if (t2) return {
        id: (e2 = t2).bundleId,
        createTime: wr(e2.createTime),
        version: e2.version
      };
      var e2;
    });
  }
  saveBundleMetadata(t, e) {
    return Ar(t).put({
      bundleId: (n = e).id,
      createTime: dr(Ni(n.createTime)),
      version: n.version
    });
    var n;
  }
  getNamedQuery(t, e) {
    return vr(t).get(e).next((t2) => {
      if (t2) return {
        name: (e2 = t2).name,
        query: yr(e2.bundledQuery),
        readTime: wr(e2.readTime)
      };
      var e2;
    });
  }
  saveNamedQuery(t, e) {
    return vr(t).put(function(t2) {
      return {
        name: t2.name,
        readTime: dr(Ni(t2.readTime)),
        bundledQuery: t2.bundledQuery
      };
    }(e));
  }
};
function Ar(t) {
  return _e(t, "bundles");
}
function vr(t) {
  return _e(t, "namedQueries");
}
var Rr = class _Rr {
  /**
   * @param serializer - The document serializer.
   * @param userId - The userId for which we are accessing overlays.
   */
  constructor(t, e) {
    this.serializer = t, this.userId = e;
  }
  static de(t, e) {
    const n = e.uid || "";
    return new _Rr(t, n);
  }
  getOverlay(t, e) {
    return Pr(t).get(Ir(this.userId, e)).next((t2) => t2 ? pr(this.serializer, t2) : null);
  }
  getOverlays(t, e) {
    const n = fs();
    return Rt.forEach(e, (e2) => this.getOverlay(t, e2).next((t2) => {
      null !== t2 && n.set(e2, t2);
    })).next(() => n);
  }
  saveOverlays(t, e, n) {
    const s = [];
    return n.forEach((n2, i) => {
      const r2 = new ei(e, i);
      s.push(this.we(t, r2));
    }), Rt.waitFor(s);
  }
  removeOverlaysForBatchId(t, e, n) {
    const s = /* @__PURE__ */ new Set();
    e.forEach((t2) => s.add(qt(t2.getCollectionPath())));
    const i = [];
    return s.forEach((e2) => {
      const s2 = IDBKeyRange.bound(
        [this.userId, e2, n],
        [this.userId, e2, n + 1],
        /*lowerOpen=*/
        false,
        /*upperOpen=*/
        true
      );
      i.push(Pr(t).J("collectionPathOverlayIndex", s2));
    }), Rt.waitFor(i);
  }
  getOverlaysForCollection(t, e, n) {
    const s = fs(), i = qt(e), r2 = IDBKeyRange.bound(
      [this.userId, i, n],
      [this.userId, i, Number.POSITIVE_INFINITY],
      /*lowerOpen=*/
      true
    );
    return Pr(t).j("collectionPathOverlayIndex", r2).next((t2) => {
      for (const e2 of t2) {
        const t3 = pr(this.serializer, e2);
        s.set(t3.getKey(), t3);
      }
      return s;
    });
  }
  getOverlaysForCollectionGroup(t, e, n, s) {
    const i = fs();
    let r2;
    const o = IDBKeyRange.bound(
      [this.userId, e, n],
      [this.userId, e, Number.POSITIVE_INFINITY],
      /*lowerOpen=*/
      true
    );
    return Pr(t).X({
      index: "collectionGroupOverlayIndex",
      range: o
    }, (t2, e2, n2) => {
      const o2 = pr(this.serializer, e2);
      i.size() < s || o2.largestBatchId === r2 ? (i.set(o2.getKey(), o2), r2 = o2.largestBatchId) : n2.done();
    }).next(() => i);
  }
  we(t, e) {
    return Pr(t).put(function(t2, e2, n) {
      const [s, i, r2] = Ir(e2, n.mutation.key);
      return {
        userId: e2,
        collectionPath: i,
        documentId: r2,
        collectionGroup: n.mutation.key.getCollectionGroup(),
        largestBatchId: n.largestBatchId,
        overlayMutation: ji(t2.fe, n.mutation)
      };
    }(this.serializer, this.userId, e));
  }
};
function Pr(t) {
  return _e(t, "documentOverlays");
}
var br = class {
  constructor() {
  }
  // The write methods below short-circuit writing terminators for values
  // containing a (terminating) truncated value.
  // As an example, consider the resulting encoding for:
  // ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
  // ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
  // ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
  /** Writes an index value.  */
  _e(t, e) {
    this.me(t, e), // Write separator to split index values
    // (see go/firestore-storage-format#encodings).
    e.ge();
  }
  me(t, e) {
    if ("nullValue" in t) this.ye(e, 5);
    else if ("booleanValue" in t) this.ye(e, 10), e.pe(t.booleanValue ? 1 : 0);
    else if ("integerValue" in t) this.ye(e, 15), e.pe(Ce(t.integerValue));
    else if ("doubleValue" in t) {
      const n = Ce(t.doubleValue);
      isNaN(n) ? this.ye(e, 13) : (this.ye(e, 15), Bt(n) ? (
        // -0.0, 0 and 0.0 are all considered the same
        e.pe(0)
      ) : e.pe(n));
    } else if ("timestampValue" in t) {
      const n = t.timestampValue;
      this.ye(e, 20), "string" == typeof n ? e.Ie(n) : (e.Ie(`${n.seconds || ""}`), e.pe(n.nanos || 0));
    } else if ("stringValue" in t) this.Te(t.stringValue, e), this.Ee(e);
    else if ("bytesValue" in t) this.ye(e, 30), e.Ae(xe(t.bytesValue)), this.Ee(e);
    else if ("referenceValue" in t) this.ve(t.referenceValue, e);
    else if ("geoPointValue" in t) {
      const n = t.geoPointValue;
      this.ye(e, 45), e.pe(n.latitude || 0), e.pe(n.longitude || 0);
    } else "mapValue" in t ? en(t) ? this.ye(e, Number.MAX_SAFE_INTEGER) : (this.Re(t.mapValue, e), this.Ee(e)) : "arrayValue" in t ? (this.Pe(t.arrayValue, e), this.Ee(e)) : O2();
  }
  Te(t, e) {
    this.ye(e, 25), this.be(t, e);
  }
  be(t, e) {
    e.Ie(t);
  }
  Re(t, e) {
    const n = t.fields || {};
    this.ye(e, 55);
    for (const t2 of Object.keys(n)) this.Te(t2, e), this.me(n[t2], e);
  }
  Pe(t, e) {
    const n = t.values || [];
    this.ye(e, 50);
    for (const t2 of n) this.me(t2, e);
  }
  ve(t, e) {
    this.ye(e, 37);
    ht.fromName(t).path.forEach((t2) => {
      this.ye(e, 60), this.be(t2, e);
    });
  }
  ye(t, e) {
    t.pe(e);
  }
  Ee(t) {
    t.pe(2);
  }
};
br.Ve = new br();
function Vr(t) {
  if (0 === t) return 8;
  let e = 0;
  return t >> 4 == 0 && // Test if the first four bits are zero.
  (e += 4, t <<= 4), t >> 6 == 0 && // Test if the first two (or next two) bits are zero.
  (e += 2, t <<= 2), t >> 7 == 0 && // Test if the remaining bit is zero.
  (e += 1), e;
}
function Sr(t) {
  const e = 64 - function(t2) {
    let e2 = 0;
    for (let n = 0; n < 8; ++n) {
      const s = Vr(255 & t2[n]);
      if (e2 += s, 8 !== s) break;
    }
    return e2;
  }(t);
  return Math.ceil(e / 8);
}
var Dr = class {
  constructor() {
    this.buffer = new Uint8Array(1024), this.position = 0;
  }
  Se(t) {
    const e = t[Symbol.iterator]();
    let n = e.next();
    for (; !n.done; ) this.De(n.value), n = e.next();
    this.Ce();
  }
  xe(t) {
    const e = t[Symbol.iterator]();
    let n = e.next();
    for (; !n.done; ) this.Ne(n.value), n = e.next();
    this.ke();
  }
  /** Writes utf8 bytes into this byte sequence, ascending. */
  Me(t) {
    for (const e of t) {
      const t2 = e.charCodeAt(0);
      if (t2 < 128) this.De(t2);
      else if (t2 < 2048) this.De(960 | t2 >>> 6), this.De(128 | 63 & t2);
      else if (e < "\uD800" || "\uDBFF" < e) this.De(480 | t2 >>> 12), this.De(128 | 63 & t2 >>> 6), this.De(128 | 63 & t2);
      else {
        const t3 = e.codePointAt(0);
        this.De(240 | t3 >>> 18), this.De(128 | 63 & t3 >>> 12), this.De(128 | 63 & t3 >>> 6), this.De(128 | 63 & t3);
      }
    }
    this.Ce();
  }
  /** Writes utf8 bytes into this byte sequence, descending */
  $e(t) {
    for (const e of t) {
      const t2 = e.charCodeAt(0);
      if (t2 < 128) this.Ne(t2);
      else if (t2 < 2048) this.Ne(960 | t2 >>> 6), this.Ne(128 | 63 & t2);
      else if (e < "\uD800" || "\uDBFF" < e) this.Ne(480 | t2 >>> 12), this.Ne(128 | 63 & t2 >>> 6), this.Ne(128 | 63 & t2);
      else {
        const t3 = e.codePointAt(0);
        this.Ne(240 | t3 >>> 18), this.Ne(128 | 63 & t3 >>> 12), this.Ne(128 | 63 & t3 >>> 6), this.Ne(128 | 63 & t3);
      }
    }
    this.ke();
  }
  Oe(t) {
    const e = this.Fe(t), n = Sr(e);
    this.Be(1 + n), this.buffer[this.position++] = 255 & n;
    for (let t2 = e.length - n; t2 < e.length; ++t2) this.buffer[this.position++] = 255 & e[t2];
  }
  Le(t) {
    const e = this.Fe(t), n = Sr(e);
    this.Be(1 + n), this.buffer[this.position++] = ~(255 & n);
    for (let t2 = e.length - n; t2 < e.length; ++t2) this.buffer[this.position++] = ~(255 & e[t2]);
  }
  /**
   * Writes the "infinity" byte sequence that sorts after all other byte
   * sequences written in ascending order.
   */
  qe() {
    this.Ue(255), this.Ue(255);
  }
  /**
   * Writes the "infinity" byte sequence that sorts before all other byte
   * sequences written in descending order.
   */
  Ke() {
    this.Ge(255), this.Ge(255);
  }
  /**
   * Resets the buffer such that it is the same as when it was newly
   * constructed.
   */
  reset() {
    this.position = 0;
  }
  seed(t) {
    this.Be(t.length), this.buffer.set(t, this.position), this.position += t.length;
  }
  /** Makes a copy of the encoded bytes in this buffer.  */
  Qe() {
    return this.buffer.slice(0, this.position);
  }
  /**
   * Encodes `val` into an encoding so that the order matches the IEEE 754
   * floating-point comparison results with the following exceptions:
   *   -0.0 < 0.0
   *   all non-NaN < NaN
   *   NaN = NaN
   */
  Fe(t) {
    const e = (
      /** Converts a JavaScript number to a byte array (using big endian encoding). */
      function(t2) {
        const e2 = new DataView(new ArrayBuffer(8));
        return e2.setFloat64(
          0,
          t2,
          /* littleEndian= */
          false
        ), new Uint8Array(e2.buffer);
      }(t)
    ), n = 0 != (128 & e[0]);
    e[0] ^= n ? 255 : 128;
    for (let t2 = 1; t2 < e.length; ++t2) e[t2] ^= n ? 255 : 0;
    return e;
  }
  /** Writes a single byte ascending to the buffer. */
  De(t) {
    const e = 255 & t;
    0 === e ? (this.Ue(0), this.Ue(255)) : 255 === e ? (this.Ue(255), this.Ue(0)) : this.Ue(e);
  }
  /** Writes a single byte descending to the buffer.  */
  Ne(t) {
    const e = 255 & t;
    0 === e ? (this.Ge(0), this.Ge(255)) : 255 === e ? (this.Ge(255), this.Ge(0)) : this.Ge(t);
  }
  Ce() {
    this.Ue(0), this.Ue(1);
  }
  ke() {
    this.Ge(0), this.Ge(1);
  }
  Ue(t) {
    this.Be(1), this.buffer[this.position++] = t;
  }
  Ge(t) {
    this.Be(1), this.buffer[this.position++] = ~t;
  }
  Be(t) {
    const e = t + this.position;
    if (e <= this.buffer.length) return;
    let n = 2 * this.buffer.length;
    n < e && (n = e);
    const s = new Uint8Array(n);
    s.set(this.buffer), // copy old data
    this.buffer = s;
  }
};
var Cr = class {
  constructor(t) {
    this.je = t;
  }
  Ae(t) {
    this.je.Se(t);
  }
  Ie(t) {
    this.je.Me(t);
  }
  pe(t) {
    this.je.Oe(t);
  }
  ge() {
    this.je.qe();
  }
};
var xr = class {
  constructor(t) {
    this.je = t;
  }
  Ae(t) {
    this.je.xe(t);
  }
  Ie(t) {
    this.je.$e(t);
  }
  pe(t) {
    this.je.Le(t);
  }
  ge() {
    this.je.Ke();
  }
};
var Nr = class {
  constructor() {
    this.je = new Dr(), this.ze = new Cr(this.je), this.We = new xr(this.je);
  }
  seed(t) {
    this.je.seed(t);
  }
  He(t) {
    return 0 === t ? this.ze : this.We;
  }
  Qe() {
    return this.je.Qe();
  }
  reset() {
    this.je.reset();
  }
};
var kr = class _kr {
  constructor(t, e, n, s) {
    this.indexId = t, this.documentKey = e, this.arrayValue = n, this.directionalValue = s;
  }
  /**
   * Returns an IndexEntry entry that sorts immediately after the current
   * directional value.
   */
  Je() {
    const t = this.directionalValue.length, e = 0 === t || 255 === this.directionalValue[t - 1] ? t + 1 : t, n = new Uint8Array(e);
    return n.set(this.directionalValue, 0), e !== t ? n.set([0], this.directionalValue.length) : ++n[n.length - 1], new _kr(this.indexId, this.documentKey, this.arrayValue, n);
  }
};
function Mr(t, e) {
  let n = t.indexId - e.indexId;
  return 0 !== n ? n : (n = $r(t.arrayValue, e.arrayValue), 0 !== n ? n : (n = $r(t.directionalValue, e.directionalValue), 0 !== n ? n : ht.comparator(t.documentKey, e.documentKey)));
}
function $r(t, e) {
  for (let n = 0; n < t.length && n < e.length; ++n) {
    const s = t[n] - e[n];
    if (0 !== s) return s;
  }
  return t.length - e.length;
}
var Or = class {
  constructor(t) {
    this.collectionId = null != t.collectionGroup ? t.collectionGroup : t.path.lastSegment(), this.Ye = t.orderBy, this.Xe = [];
    for (const e of t.filters) {
      const t2 = e;
      t2.isInequality() ? this.Ze = t2 : this.Xe.push(t2);
    }
  }
  /**
   * Returns whether the index can be used to serve the TargetIndexMatcher's
   * target.
   *
   * An index is considered capable of serving the target when:
   * - The target uses all index segments for its filters and orderBy clauses.
   *   The target can have additional filter and orderBy clauses, but not
   *   fewer.
   * - If an ArrayContains/ArrayContainsAnyfilter is used, the index must also
   *   have a corresponding `CONTAINS` segment.
   * - All directional index segments can be mapped to the target as a series of
   *   equality filters, a single inequality filter and a series of orderBy
   *   clauses.
   * - The segments that represent the equality filters may appear out of order.
   * - The optional segment for the inequality filter must appear after all
   *   equality segments.
   * - The segments that represent that orderBy clause of the target must appear
   *   in order after all equality and inequality segments. Single orderBy
   *   clauses cannot be skipped, but a continuous orderBy suffix may be
   *   omitted.
   */
  tn(t) {
    F2(t.collectionGroup === this.collectionId);
    const e = ft(t);
    if (void 0 !== e && !this.en(e)) return false;
    const n = dt(t);
    let s = /* @__PURE__ */ new Set(), i = 0, r2 = 0;
    for (; i < n.length && this.en(n[i]); ++i) s = s.add(n[i].fieldPath.canonicalString());
    if (i === n.length) return true;
    if (void 0 !== this.Ze) {
      if (!s.has(this.Ze.field.canonicalString())) {
        const t2 = n[i];
        if (!this.nn(this.Ze, t2) || !this.sn(this.Ye[r2++], t2)) return false;
      }
      ++i;
    }
    for (; i < n.length; ++i) {
      const t2 = n[i];
      if (r2 >= this.Ye.length || !this.sn(this.Ye[r2++], t2)) return false;
    }
    return true;
  }
  en(t) {
    for (const e of this.Xe) if (this.nn(e, t)) return true;
    return false;
  }
  nn(t, e) {
    if (void 0 === t || !t.field.isEqual(e.fieldPath)) return false;
    const n = "array-contains" === t.op || "array-contains-any" === t.op;
    return 2 === e.kind === n;
  }
  sn(t, e) {
    return !!t.field.isEqual(e.fieldPath) && (0 === e.kind && "asc" === t.dir || 1 === e.kind && "desc" === t.dir);
  }
};
function Fr(t) {
  var e, n;
  if (F2(t instanceof mn || t instanceof gn), t instanceof mn) {
    if (t instanceof Cn) {
      const s2 = (null === (n = null === (e = t.value.arrayValue) || void 0 === e ? void 0 : e.values) || void 0 === n ? void 0 : n.map((e2) => mn.create(t.field, "==", e2))) || [];
      return gn.create(
        s2,
        "or"
        /* CompositeOperator.OR */
      );
    }
    return t;
  }
  const s = t.filters.map((t2) => Fr(t2));
  return gn.create(s, t.op);
}
function Br(t) {
  if (0 === t.getFilters().length) return [];
  const e = Kr(Fr(t));
  return F2(Ur(e)), Lr(e) || qr(e) ? [e] : e.getFilters();
}
function Lr(t) {
  return t instanceof mn;
}
function qr(t) {
  return t instanceof gn && In(t);
}
function Ur(t) {
  return Lr(t) || qr(t) || /**
  * Returns true if the given filter is the disjunction of one or more "flat conjunctions" and
  * field filters. e.g. (a == 10) || (b==20 && c==30)
  */
  function(t2) {
    if (t2 instanceof gn && pn(t2)) {
      for (const e of t2.getFilters()) if (!Lr(e) && !qr(e)) return false;
      return true;
    }
    return false;
  }(t);
}
function Kr(t) {
  if (F2(t instanceof mn || t instanceof gn), t instanceof mn) return t;
  if (1 === t.filters.length) return Kr(t.filters[0]);
  const e = t.filters.map((t2) => Kr(t2));
  let n = gn.create(e, t.op);
  return n = jr(n), Ur(n) ? n : (F2(n instanceof gn), F2(yn(n)), F2(n.filters.length > 1), n.filters.reduce((t2, e2) => Gr(t2, e2)));
}
function Gr(t, e) {
  let n;
  return F2(t instanceof mn || t instanceof gn), F2(e instanceof mn || e instanceof gn), // FieldFilter FieldFilter
  n = t instanceof mn ? e instanceof mn ? function(t2, e2) {
    return gn.create(
      [t2, e2],
      "and"
      /* CompositeOperator.AND */
    );
  }(t, e) : Qr(t, e) : e instanceof mn ? Qr(e, t) : function(t2, e2) {
    if (F2(t2.filters.length > 0 && e2.filters.length > 0), yn(t2) && yn(e2)) return vn(t2, e2.getFilters());
    const n2 = pn(t2) ? t2 : e2, s = pn(t2) ? e2 : t2, i = n2.filters.map((t3) => Gr(t3, s));
    return gn.create(
      i,
      "or"
      /* CompositeOperator.OR */
    );
  }(t, e), jr(n);
}
function Qr(t, e) {
  if (yn(e))
    return vn(e, t.getFilters());
  {
    const n = e.filters.map((e2) => Gr(t, e2));
    return gn.create(
      n,
      "or"
      /* CompositeOperator.OR */
    );
  }
}
function jr(t) {
  if (F2(t instanceof mn || t instanceof gn), t instanceof mn) return t;
  const e = t.getFilters();
  if (1 === e.length) return jr(e[0]);
  if (Tn(t)) return t;
  const n = e.map((t2) => jr(t2)), s = [];
  return n.forEach((e2) => {
    e2 instanceof mn ? s.push(e2) : e2 instanceof gn && (e2.op === t.op ? (
      // compositeFilter: (A | (B | C))
      // compositeSubfilter: (B | C)
      // Result: (A | B | C)
      s.push(...e2.filters)
    ) : (
      // compositeFilter: (A | (B & C))
      // compositeSubfilter: (B & C)
      // Result: (A | (B & C))
      s.push(e2)
    ));
  }), 1 === s.length ? s[0] : gn.create(s, t.op);
}
var zr = class {
  constructor() {
    this.rn = new Wr();
  }
  addToCollectionParentIndex(t, e) {
    return this.rn.add(e), Rt.resolve();
  }
  getCollectionParents(t, e) {
    return Rt.resolve(this.rn.getEntries(e));
  }
  addFieldIndex(t, e) {
    return Rt.resolve();
  }
  deleteFieldIndex(t, e) {
    return Rt.resolve();
  }
  getDocumentsMatchingTarget(t, e) {
    return Rt.resolve(null);
  }
  getIndexType(t, e) {
    return Rt.resolve(
      0
      /* IndexType.NONE */
    );
  }
  getFieldIndexes(t, e) {
    return Rt.resolve([]);
  }
  getNextCollectionGroupToUpdate(t) {
    return Rt.resolve(null);
  }
  getMinOffset(t, e) {
    return Rt.resolve(It.min());
  }
  getMinOffsetFromCollectionGroup(t, e) {
    return Rt.resolve(It.min());
  }
  updateCollectionGroup(t, e, n) {
    return Rt.resolve();
  }
  updateIndexEntries(t, e) {
    return Rt.resolve();
  }
};
var Wr = class {
  constructor() {
    this.index = {};
  }
  // Returns false if the entry already existed.
  add(t) {
    const e = t.lastSegment(), n = t.popLast(), s = this.index[e] || new Ee(ut.comparator), i = !s.has(n);
    return this.index[e] = s.add(n), i;
  }
  has(t) {
    const e = t.lastSegment(), n = t.popLast(), s = this.index[e];
    return s && s.has(n);
  }
  getEntries(t) {
    return (this.index[t] || new Ee(ut.comparator)).toArray();
  }
};
var Hr = new Uint8Array(0);
var Jr = class {
  constructor(t, e) {
    this.user = t, this.databaseId = e, /**
     * An in-memory copy of the index entries we've already written since the SDK
     * launched. Used to avoid re-writing the same entry repeatedly.
     *
     * This is *NOT* a complete cache of what's in persistence and so can never be
     * used to satisfy reads.
     */
    this.on = new Wr(), /**
     * Maps from a target to its equivalent list of sub-targets. Each sub-target
     * contains only one term from the target's disjunctive normal form (DNF).
     */
    this.un = new os((t2) => $n(t2), (t2, e2) => On(t2, e2)), this.uid = t.uid || "";
  }
  /**
   * Adds a new entry to the collection parent index.
   *
   * Repeated calls for the same collectionPath should be avoided within a
   * transaction as IndexedDbIndexManager only caches writes once a transaction
   * has been committed.
   */
  addToCollectionParentIndex(t, e) {
    if (!this.on.has(e)) {
      const n = e.lastSegment(), s = e.popLast();
      t.addOnCommittedListener(() => {
        this.on.add(e);
      });
      const i = {
        collectionId: n,
        parent: qt(s)
      };
      return Yr(t).put(i);
    }
    return Rt.resolve();
  }
  getCollectionParents(t, e) {
    const n = [], s = IDBKeyRange.bound(
      [e, ""],
      [st(e), ""],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    );
    return Yr(t).j(s).next((t2) => {
      for (const s2 of t2) {
        if (s2.collectionId !== e) break;
        n.push(Gt(s2.parent));
      }
      return n;
    });
  }
  addFieldIndex(t, e) {
    const n = Zr(t), s = function(t2) {
      return {
        indexId: t2.indexId,
        collectionGroup: t2.collectionGroup,
        fields: t2.fields.map((t3) => [t3.fieldPath.canonicalString(), t3.kind])
      };
    }(e);
    delete s.indexId;
    const i = n.add(s);
    if (e.indexState) {
      const n2 = to(t);
      return i.next((t2) => {
        n2.put(Tr(t2, this.user, e.indexState.sequenceNumber, e.indexState.offset));
      });
    }
    return i.next();
  }
  deleteFieldIndex(t, e) {
    const n = Zr(t), s = to(t), i = Xr(t);
    return n.delete(e.indexId).next(() => s.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    ))).next(() => i.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    )));
  }
  getDocumentsMatchingTarget(t, e) {
    const n = Xr(t);
    let s = true;
    const i = /* @__PURE__ */ new Map();
    return Rt.forEach(this.cn(e), (e2) => this.an(t, e2).next((t2) => {
      s && (s = !!t2), i.set(e2, t2);
    })).next(() => {
      if (s) {
        let t2 = gs();
        const s2 = [];
        return Rt.forEach(i, (i2, r2) => {
          var o;
          N2("IndexedDbIndexManager", `Using index ${o = i2, `id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t3) => `${t3.fieldPath}:${t3.kind}`).join(",")}`} to execute ${$n(e)}`);
          const u = function(t3, e2) {
            const n2 = ft(e2);
            if (void 0 === n2) return null;
            for (const e3 of Bn(t3, n2.fieldPath)) switch (e3.op) {
              case "array-contains-any":
                return e3.value.arrayValue.values || [];
              case "array-contains":
                return [e3.value];
            }
            return null;
          }(r2, i2), c = function(t3, e2) {
            const n2 = /* @__PURE__ */ new Map();
            for (const s3 of dt(e2)) for (const e3 of Bn(t3, s3.fieldPath)) switch (e3.op) {
              case "==":
              case "in":
                n2.set(s3.fieldPath.canonicalString(), e3.value);
                break;
              case "not-in":
              case "!=":
                return n2.set(s3.fieldPath.canonicalString(), e3.value), Array.from(n2.values());
            }
            return null;
          }(r2, i2), a = function(t3, e2) {
            const n2 = [];
            let s3 = true;
            for (const i3 of dt(e2)) {
              const e3 = 0 === i3.kind ? Ln(t3, i3.fieldPath, t3.startAt) : qn(t3, i3.fieldPath, t3.startAt);
              n2.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new hn(n2, s3);
          }(r2, i2), h = function(t3, e2) {
            const n2 = [];
            let s3 = true;
            for (const i3 of dt(e2)) {
              const e3 = 0 === i3.kind ? qn(t3, i3.fieldPath, t3.endAt) : Ln(t3, i3.fieldPath, t3.endAt);
              n2.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new hn(n2, s3);
          }(r2, i2), l2 = this.hn(i2, r2, a), f = this.hn(i2, r2, h), d = this.ln(i2, r2, c), w2 = this.fn(i2.indexId, u, l2, a.inclusive, f, h.inclusive, d);
          return Rt.forEach(w2, (i3) => n.H(i3, e.limit).next((e2) => {
            e2.forEach((e3) => {
              const n2 = ht.fromSegments(e3.documentKey);
              t2.has(n2) || (t2 = t2.add(n2), s2.push(n2));
            });
          }));
        }).next(() => s2);
      }
      return Rt.resolve(null);
    });
  }
  cn(t) {
    let e = this.un.get(t);
    if (e) return e;
    if (0 === t.filters.length) e = [t];
    else {
      e = Br(gn.create(
        t.filters,
        "and"
        /* CompositeOperator.AND */
      )).map((e2) => Mn(t.path, t.collectionGroup, t.orderBy, e2.getFilters(), t.limit, t.startAt, t.endAt));
    }
    return this.un.set(t, e), e;
  }
  /**
   * Constructs a key range query on `DbIndexEntryStore` that unions all
   * bounds.
   */
  fn(t, e, n, s, i, r2, o) {
    const u = (null != e ? e.length : 1) * Math.max(n.length, i.length), c = u / (null != e ? e.length : 1), a = [];
    for (let h = 0; h < u; ++h) {
      const u2 = e ? this.dn(e[h / c]) : Hr, l2 = this.wn(t, u2, n[h % c], s), f = this._n(t, u2, i[h % c], r2), d = o.map((e2) => this.wn(
        t,
        u2,
        e2,
        /* inclusive= */
        true
      ));
      a.push(...this.createRange(l2, f, d));
    }
    return a;
  }
  /** Generates the lower bound for `arrayValue` and `directionalValue`. */
  wn(t, e, n, s) {
    const i = new kr(t, ht.empty(), e, n);
    return s ? i : i.Je();
  }
  /** Generates the upper bound for `arrayValue` and `directionalValue`. */
  _n(t, e, n, s) {
    const i = new kr(t, ht.empty(), e, n);
    return s ? i.Je() : i;
  }
  an(t, e) {
    const n = new Or(e), s = null != e.collectionGroup ? e.collectionGroup : e.path.lastSegment();
    return this.getFieldIndexes(t, s).next((t2) => {
      let e2 = null;
      for (const s2 of t2) {
        n.tn(s2) && (!e2 || s2.fields.length > e2.fields.length) && (e2 = s2);
      }
      return e2;
    });
  }
  getIndexType(t, e) {
    let n = 2;
    const s = this.cn(e);
    return Rt.forEach(s, (e2) => this.an(t, e2).next((t2) => {
      t2 ? 0 !== n && t2.fields.length < function(t3) {
        let e3 = new Ee(at.comparator), n2 = false;
        for (const s2 of t3.filters) for (const t4 of s2.getFlattenedFilters())
          t4.field.isKeyField() || // ARRAY_CONTAINS or ARRAY_CONTAINS_ANY filters must be counted separately.
          // For instance, it is possible to have an index for "a ARRAY a ASC". Even
          // though these are on the same field, they should be counted as two
          // separate segments in an index.
          ("array-contains" === t4.op || "array-contains-any" === t4.op ? n2 = true : e3 = e3.add(t4.field));
        for (const n3 of t3.orderBy)
          n3.field.isKeyField() || (e3 = e3.add(n3.field));
        return e3.size + (n2 ? 1 : 0);
      }(e2) && (n = 1) : n = 0;
    })).next(() => (
      // OR queries have more than one sub-target (one sub-target per DNF term). We currently consider
      // OR queries that have a `limit` to have a partial index. For such queries we perform sorting
      // and apply the limit in memory as a post-processing step.
      function(t2) {
        return null !== t2.limit;
      }(e) && s.length > 1 && 2 === n ? 1 : n
    ));
  }
  /**
   * Returns the byte encoded form of the directional values in the field index.
   * Returns `null` if the document does not have all fields specified in the
   * index.
   */
  mn(t, e) {
    const n = new Nr();
    for (const s of dt(t)) {
      const t2 = e.data.field(s.fieldPath);
      if (null == t2) return null;
      const i = n.He(s.kind);
      br.Ve._e(t2, i);
    }
    return n.Qe();
  }
  /** Encodes a single value to the ascending index format. */
  dn(t) {
    const e = new Nr();
    return br.Ve._e(t, e.He(
      0
      /* IndexKind.ASCENDING */
    )), e.Qe();
  }
  /**
   * Returns an encoded form of the document key that sorts based on the key
   * ordering of the field index.
   */
  gn(t, e) {
    const n = new Nr();
    return br.Ve._e(We(this.databaseId, e), n.He(function(t2) {
      const e2 = dt(t2);
      return 0 === e2.length ? 0 : e2[e2.length - 1].kind;
    }(t))), n.Qe();
  }
  /**
   * Encodes the given field values according to the specification in `target`.
   * For IN queries, a list of possible values is returned.
   */
  ln(t, e, n) {
    if (null === n) return [];
    let s = [];
    s.push(new Nr());
    let i = 0;
    for (const r2 of dt(t)) {
      const t2 = n[i++];
      for (const n2 of s) if (this.yn(e, r2.fieldPath) && Je(t2)) s = this.pn(s, r2, t2);
      else {
        const e2 = n2.He(r2.kind);
        br.Ve._e(t2, e2);
      }
    }
    return this.In(s);
  }
  /**
   * Encodes the given bounds according to the specification in `target`. For IN
   * queries, a list of possible values is returned.
   */
  hn(t, e, n) {
    return this.ln(t, e, n.position);
  }
  /** Returns the byte representation for the provided encoders. */
  In(t) {
    const e = [];
    for (let n = 0; n < t.length; ++n) e[n] = t[n].Qe();
    return e;
  }
  /**
   * Creates a separate encoder for each element of an array.
   *
   * The method appends each value to all existing encoders (e.g. filter("a",
   * "==", "a1").filter("b", "in", ["b1", "b2"]) becomes ["a1,b1", "a1,b2"]). A
   * list of new encoders is returned.
   */
  pn(t, e, n) {
    const s = [...t], i = [];
    for (const t2 of n.arrayValue.values || []) for (const n2 of s) {
      const s2 = new Nr();
      s2.seed(n2.Qe()), br.Ve._e(t2, s2.He(e.kind)), i.push(s2);
    }
    return i;
  }
  yn(t, e) {
    return !!t.filters.find((t2) => t2 instanceof mn && t2.field.isEqual(e) && ("in" === t2.op || "not-in" === t2.op));
  }
  getFieldIndexes(t, e) {
    const n = Zr(t), s = to(t);
    return (e ? n.j("collectionGroupIndex", IDBKeyRange.bound(e, e)) : n.j()).next((t2) => {
      const e2 = [];
      return Rt.forEach(t2, (t3) => s.get([t3.indexId, this.uid]).next((n2) => {
        e2.push(function(t4, e3) {
          const n3 = e3 ? new gt(e3.sequenceNumber, new It(wr(e3.readTime), new ht(Gt(e3.documentKey)), e3.largestBatchId)) : gt.empty(), s2 = t4.fields.map(([t5, e4]) => new _t(at.fromServerFormat(t5), e4));
          return new lt(t4.indexId, t4.collectionGroup, s2, n3);
        }(t3, n2));
      })).next(() => e2);
    });
  }
  getNextCollectionGroupToUpdate(t) {
    return this.getFieldIndexes(t).next((t2) => 0 === t2.length ? null : (t2.sort((t3, e) => {
      const n = t3.indexState.sequenceNumber - e.indexState.sequenceNumber;
      return 0 !== n ? n : et(t3.collectionGroup, e.collectionGroup);
    }), t2[0].collectionGroup));
  }
  updateCollectionGroup(t, e, n) {
    const s = Zr(t), i = to(t);
    return this.Tn(t).next((t2) => s.j("collectionGroupIndex", IDBKeyRange.bound(e, e)).next((e2) => Rt.forEach(e2, (e3) => i.put(Tr(e3.indexId, this.user, t2, n)))));
  }
  updateIndexEntries(t, e) {
    const n = /* @__PURE__ */ new Map();
    return Rt.forEach(e, (e2, s) => {
      const i = n.get(e2.collectionGroup);
      return (i ? Rt.resolve(i) : this.getFieldIndexes(t, e2.collectionGroup)).next((i2) => (n.set(e2.collectionGroup, i2), Rt.forEach(i2, (n2) => this.En(t, e2, n2).next((e3) => {
        const i3 = this.An(s, n2);
        return e3.isEqual(i3) ? Rt.resolve() : this.vn(t, s, n2, e3, i3);
      }))));
    });
  }
  Rn(t, e, n, s) {
    return Xr(t).put({
      indexId: s.indexId,
      uid: this.uid,
      arrayValue: s.arrayValue,
      directionalValue: s.directionalValue,
      orderedDocumentKey: this.gn(n, e.key),
      documentKey: e.key.path.toArray()
    });
  }
  Pn(t, e, n, s) {
    return Xr(t).delete([s.indexId, this.uid, s.arrayValue, s.directionalValue, this.gn(n, e.key), e.key.path.toArray()]);
  }
  En(t, e, n) {
    const s = Xr(t);
    let i = new Ee(Mr);
    return s.X({
      index: "documentKeyIndex",
      range: IDBKeyRange.only([n.indexId, this.uid, this.gn(n, e)])
    }, (t2, s2) => {
      i = i.add(new kr(n.indexId, e, s2.arrayValue, s2.directionalValue));
    }).next(() => i);
  }
  /** Creates the index entries for the given document. */
  An(t, e) {
    let n = new Ee(Mr);
    const s = this.mn(e, t);
    if (null == s) return n;
    const i = ft(e);
    if (null != i) {
      const r2 = t.data.field(i.fieldPath);
      if (Je(r2)) for (const i2 of r2.arrayValue.values || []) n = n.add(new kr(e.indexId, t.key, this.dn(i2), s));
    } else n = n.add(new kr(e.indexId, t.key, Hr, s));
    return n;
  }
  /**
   * Updates the index entries for the provided document by deleting entries
   * that are no longer referenced in `newEntries` and adding all newly added
   * entries.
   */
  vn(t, e, n, s, i) {
    N2("IndexedDbIndexManager", "Updating index entries for document '%s'", e.key);
    const r2 = [];
    return function(t2, e2, n2, s2, i2) {
      const r3 = t2.getIterator(), o = e2.getIterator();
      let u = ve(r3), c = ve(o);
      for (; u || c; ) {
        let t3 = false, e3 = false;
        if (u && c) {
          const s3 = n2(u, c);
          s3 < 0 ? (
            // The element was removed if the next element in our ordered
            // walkthrough is only in `before`.
            e3 = true
          ) : s3 > 0 && // The element was added if the next element in our ordered walkthrough
          // is only in `after`.
          (t3 = true);
        } else null != u ? e3 = true : t3 = true;
        t3 ? (s2(c), c = ve(o)) : e3 ? (i2(u), u = ve(r3)) : (u = ve(r3), c = ve(o));
      }
    }(
      s,
      i,
      Mr,
      /* onAdd= */
      (s2) => {
        r2.push(this.Rn(t, e, n, s2));
      },
      /* onRemove= */
      (s2) => {
        r2.push(this.Pn(t, e, n, s2));
      }
    ), Rt.waitFor(r2);
  }
  Tn(t) {
    let e = 1;
    return to(t).X({
      index: "sequenceNumberIndex",
      reverse: true,
      range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
    }, (t2, n, s) => {
      s.done(), e = n.sequenceNumber + 1;
    }).next(() => e);
  }
  /**
   * Returns a new set of IDB ranges that splits the existing range and excludes
   * any values that match the `notInValue` from these ranges. As an example,
   * '[foo > 2 && foo != 3]` becomes  `[foo > 2 && < 3, foo > 3]`.
   */
  createRange(t, e, n) {
    n = n.sort((t2, e2) => Mr(t2, e2)).filter((t2, e2, n2) => !e2 || 0 !== Mr(t2, n2[e2 - 1]));
    const s = [];
    s.push(t);
    for (const i2 of n) {
      const n2 = Mr(i2, t), r2 = Mr(i2, e);
      if (0 === n2)
        s[0] = t.Je();
      else if (n2 > 0 && r2 < 0)
        s.push(i2), s.push(i2.Je());
      else if (r2 > 0)
        break;
    }
    s.push(e);
    const i = [];
    for (let t2 = 0; t2 < s.length; t2 += 2) {
      if (this.bn(s[t2], s[t2 + 1])) return [];
      const e2 = [s[t2].indexId, this.uid, s[t2].arrayValue, s[t2].directionalValue, Hr, []], n2 = [s[t2 + 1].indexId, this.uid, s[t2 + 1].arrayValue, s[t2 + 1].directionalValue, Hr, []];
      i.push(IDBKeyRange.bound(e2, n2));
    }
    return i;
  }
  bn(t, e) {
    return Mr(t, e) > 0;
  }
  getMinOffsetFromCollectionGroup(t, e) {
    return this.getFieldIndexes(t, e).next(eo);
  }
  getMinOffset(t, e) {
    return Rt.mapArray(this.cn(e), (e2) => this.an(t, e2).next((t2) => t2 || O2())).next(eo);
  }
};
function Yr(t) {
  return _e(t, "collectionParents");
}
function Xr(t) {
  return _e(t, "indexEntries");
}
function Zr(t) {
  return _e(t, "indexConfiguration");
}
function to(t) {
  return _e(t, "indexState");
}
function eo(t) {
  F2(0 !== t.length);
  let e = t[0].indexState.offset, n = e.largestBatchId;
  for (let s = 1; s < t.length; s++) {
    const i = t[s].indexState.offset;
    Tt(i, e) < 0 && (e = i), n < i.largestBatchId && (n = i.largestBatchId);
  }
  return new It(e.readTime, e.documentKey, n);
}
var no = {
  didRun: false,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
};
var so = class _so {
  constructor(t, e, n) {
    this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n;
  }
  static withCacheSize(t) {
    return new _so(t, _so.DEFAULT_COLLECTION_PERCENTILE, _so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
};
function io(t, e, n) {
  const s = t.store("mutations"), i = t.store("documentMutations"), r2 = [], o = IDBKeyRange.only(n.batchId);
  let u = 0;
  const c = s.X({
    range: o
  }, (t2, e2, n2) => (u++, n2.delete()));
  r2.push(c.next(() => {
    F2(1 === u);
  }));
  const a = [];
  for (const t2 of n.mutations) {
    const s2 = zt(e, t2.key.path, n.batchId);
    r2.push(i.delete(s2)), a.push(t2.key);
  }
  return Rt.waitFor(r2).next(() => a);
}
function ro(t) {
  if (!t) return 0;
  let e;
  if (t.document) e = t.document;
  else if (t.unknownDocument) e = t.unknownDocument;
  else {
    if (!t.noDocument) throw O2();
    e = t.noDocument;
  }
  return JSON.stringify(e).length;
}
so.DEFAULT_COLLECTION_PERCENTILE = 10, so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, so.DEFAULT = new so(41943040, so.DEFAULT_COLLECTION_PERCENTILE, so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), so.DISABLED = new so(-1, 0, 0);
var oo = class _oo {
  constructor(t, e, n, s) {
    this.userId = t, this.serializer = e, this.indexManager = n, this.referenceDelegate = s, /**
     * Caches the document keys for pending mutation batches. If the mutation
     * has been removed from IndexedDb, the cached value may continue to
     * be used to retrieve the batch's document keys. To remove a cached value
     * locally, `removeCachedMutationKeys()` should be invoked either directly
     * or through `removeMutationBatches()`.
     *
     * With multi-tab, when the primary client acknowledges or rejects a mutation,
     * this cache is used by secondary clients to invalidate the local
     * view of the documents that were previously affected by the mutation.
     */
    // PORTING NOTE: Multi-tab only.
    this.Vn = {};
  }
  /**
   * Creates a new mutation queue for the given user.
   * @param user - The user for which to create a mutation queue.
   * @param serializer - The serializer to use when persisting to IndexedDb.
   */
  static de(t, e, n, s) {
    F2("" !== t.uid);
    const i = t.isAuthenticated() ? t.uid : "";
    return new _oo(i, e, n, s);
  }
  checkEmpty(t) {
    let e = true;
    const n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return co(t).X({
      index: "userMutationsIndex",
      range: n
    }, (t2, n2, s) => {
      e = false, s.done();
    }).next(() => e);
  }
  addMutationBatch(t, e, n, s) {
    const i = ao(t), r2 = co(t);
    return r2.add({}).next((o) => {
      F2("number" == typeof o);
      const u = new Zs(o, e, n, s), c = function(t2, e2, n2) {
        const s2 = n2.baseMutations.map((e3) => ji(t2.fe, e3)), i2 = n2.mutations.map((e3) => ji(t2.fe, e3));
        return {
          userId: e2,
          batchId: n2.batchId,
          localWriteTimeMs: n2.localWriteTime.toMillis(),
          baseMutations: s2,
          mutations: i2
        };
      }(this.serializer, this.userId, u), a = [];
      let h = new Ee((t2, e2) => et(t2.canonicalString(), e2.canonicalString()));
      for (const t2 of s) {
        const e2 = zt(this.userId, t2.key.path, o);
        h = h.add(t2.key.path.popLast()), a.push(r2.put(c)), a.push(i.put(e2, Wt));
      }
      return h.forEach((e2) => {
        a.push(this.indexManager.addToCollectionParentIndex(t, e2));
      }), t.addOnCommittedListener(() => {
        this.Vn[o] = u.keys();
      }), Rt.waitFor(a).next(() => u);
    });
  }
  lookupMutationBatch(t, e) {
    return co(t).get(e).next((t2) => t2 ? (F2(t2.userId === this.userId), _r(this.serializer, t2)) : null);
  }
  /**
   * Returns the document keys for the mutation batch with the given batchId.
   * For primary clients, this method returns `null` after
   * `removeMutationBatches()` has been called. Secondary clients return a
   * cached result until `removeCachedMutationKeys()` is invoked.
   */
  // PORTING NOTE: Multi-tab only.
  Sn(t, e) {
    return this.Vn[e] ? Rt.resolve(this.Vn[e]) : this.lookupMutationBatch(t, e).next((t2) => {
      if (t2) {
        const n = t2.keys();
        return this.Vn[e] = n, n;
      }
      return null;
    });
  }
  getNextMutationBatchAfterBatchId(t, e) {
    const n = e + 1, s = IDBKeyRange.lowerBound([this.userId, n]);
    let i = null;
    return co(t).X({
      index: "userMutationsIndex",
      range: s
    }, (t2, e2, s2) => {
      e2.userId === this.userId && (F2(e2.batchId >= n), i = _r(this.serializer, e2)), s2.done();
    }).next(() => i);
  }
  getHighestUnacknowledgedBatchId(t) {
    const e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]);
    let n = -1;
    return co(t).X({
      index: "userMutationsIndex",
      range: e,
      reverse: true
    }, (t2, e2, s) => {
      n = e2.batchId, s.done();
    }).next(() => n);
  }
  getAllMutationBatches(t) {
    const e = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return co(t).j("userMutationsIndex", e).next((t2) => t2.map((t3) => _r(this.serializer, t3)));
  }
  getAllMutationBatchesAffectingDocumentKey(t, e) {
    const n = jt(this.userId, e.path), s = IDBKeyRange.lowerBound(n), i = [];
    return ao(t).X({
      range: s
    }, (n2, s2, r2) => {
      const [o, u, c] = n2, a = Gt(u);
      if (o === this.userId && e.path.isEqual(a))
        return co(t).get(c).next((t2) => {
          if (!t2) throw O2();
          F2(t2.userId === this.userId), i.push(_r(this.serializer, t2));
        });
      r2.done();
    }).next(() => i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t, e) {
    let n = new Ee(et);
    const s = [];
    return e.forEach((e2) => {
      const i = jt(this.userId, e2.path), r2 = IDBKeyRange.lowerBound(i), o = ao(t).X({
        range: r2
      }, (t2, s2, i2) => {
        const [r3, o2, u] = t2, c = Gt(o2);
        r3 === this.userId && e2.path.isEqual(c) ? n = n.add(u) : i2.done();
      });
      s.push(o);
    }), Rt.waitFor(s).next(() => this.Dn(t, n));
  }
  getAllMutationBatchesAffectingQuery(t, e) {
    const n = e.path, s = n.length + 1, i = jt(this.userId, n), r2 = IDBKeyRange.lowerBound(i);
    let o = new Ee(et);
    return ao(t).X({
      range: r2
    }, (t2, e2, i2) => {
      const [r3, u, c] = t2, a = Gt(u);
      r3 === this.userId && n.isPrefixOf(a) ? (
        // Rows with document keys more than one segment longer than the
        // query path can't be matches. For example, a query on 'rooms'
        // can't match the document /rooms/abc/messages/xyx.
        // TODO(mcg): we'll need a different scanner when we implement
        // ancestor queries.
        a.length === s && (o = o.add(c))
      ) : i2.done();
    }).next(() => this.Dn(t, o));
  }
  Dn(t, e) {
    const n = [], s = [];
    return e.forEach((e2) => {
      s.push(co(t).get(e2).next((t2) => {
        if (null === t2) throw O2();
        F2(t2.userId === this.userId), n.push(_r(this.serializer, t2));
      }));
    }), Rt.waitFor(s).next(() => n);
  }
  removeMutationBatch(t, e) {
    return io(t.ht, this.userId, e).next((n) => (t.addOnCommittedListener(() => {
      this.Cn(e.batchId);
    }), Rt.forEach(n, (e2) => this.referenceDelegate.markPotentiallyOrphaned(t, e2))));
  }
  /**
   * Clears the cached keys for a mutation batch. This method should be
   * called by secondary clients after they process mutation updates.
   *
   * Note that this method does not have to be called from primary clients as
   * the corresponding cache entries are cleared when an acknowledged or
   * rejected batch is removed from the mutation queue.
   */
  // PORTING NOTE: Multi-tab only
  Cn(t) {
    delete this.Vn[t];
  }
  performConsistencyCheck(t) {
    return this.checkEmpty(t).next((e) => {
      if (!e) return Rt.resolve();
      const n = IDBKeyRange.lowerBound([this.userId]);
      const s = [];
      return ao(t).X({
        range: n
      }, (t2, e2, n2) => {
        if (t2[0] === this.userId) {
          const e3 = Gt(t2[1]);
          s.push(e3);
        } else n2.done();
      }).next(() => {
        F2(0 === s.length);
      });
    });
  }
  containsKey(t, e) {
    return uo(t, this.userId, e);
  }
  // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
  /** Returns the mutation queue's metadata from IndexedDb. */
  xn(t) {
    return ho(t).get(this.userId).next((t2) => t2 || {
      userId: this.userId,
      lastAcknowledgedBatchId: -1,
      lastStreamToken: ""
    });
  }
};
function uo(t, e, n) {
  const s = jt(e, n.path), i = s[1], r2 = IDBKeyRange.lowerBound(s);
  let o = false;
  return ao(t).X({
    range: r2,
    Y: true
  }, (t2, n2, s2) => {
    const [
      r3,
      u,
      /*batchID*/
      c
    ] = t2;
    r3 === e && u === i && (o = true), s2.done();
  }).next(() => o);
}
function co(t) {
  return _e(t, "mutations");
}
function ao(t) {
  return _e(t, "documentMutations");
}
function ho(t) {
  return _e(t, "mutationQueues");
}
var lo = class _lo {
  constructor(t) {
    this.Nn = t;
  }
  next() {
    return this.Nn += 2, this.Nn;
  }
  static kn() {
    return new _lo(0);
  }
  static Mn() {
    return new _lo(-1);
  }
};
var fo = class {
  constructor(t, e) {
    this.referenceDelegate = t, this.serializer = e;
  }
  // PORTING NOTE: We don't cache global metadata for the target cache, since
  // some of it (in particular `highestTargetId`) can be modified by secondary
  // tabs. We could perhaps be more granular (and e.g. still cache
  // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
  // to IndexedDb whenever we need to read metadata. We can revisit if it turns
  // out to have a meaningful performance impact.
  allocateTargetId(t) {
    return this.$n(t).next((e) => {
      const n = new lo(e.highestTargetId);
      return e.highestTargetId = n.next(), this.On(t, e).next(() => e.highestTargetId);
    });
  }
  getLastRemoteSnapshotVersion(t) {
    return this.$n(t).next((t2) => rt.fromTimestamp(new it(t2.lastRemoteSnapshotVersion.seconds, t2.lastRemoteSnapshotVersion.nanoseconds)));
  }
  getHighestSequenceNumber(t) {
    return this.$n(t).next((t2) => t2.highestListenSequenceNumber);
  }
  setTargetsMetadata(t, e, n) {
    return this.$n(t).next((s) => (s.highestListenSequenceNumber = e, n && (s.lastRemoteSnapshotVersion = n.toTimestamp()), e > s.highestListenSequenceNumber && (s.highestListenSequenceNumber = e), this.On(t, s)));
  }
  addTargetData(t, e) {
    return this.Fn(t, e).next(() => this.$n(t).next((n) => (n.targetCount += 1, this.Bn(e, n), this.On(t, n))));
  }
  updateTargetData(t, e) {
    return this.Fn(t, e);
  }
  removeTargetData(t, e) {
    return this.removeMatchingKeysForTargetId(t, e.targetId).next(() => wo(t).delete(e.targetId)).next(() => this.$n(t)).next((e2) => (F2(e2.targetCount > 0), e2.targetCount -= 1, this.On(t, e2)));
  }
  /**
   * Drops any targets with sequence number less than or equal to the upper bound, excepting those
   * present in `activeTargetIds`. Document associations for the removed targets are also removed.
   * Returns the number of targets removed.
   */
  removeTargets(t, e, n) {
    let s = 0;
    const i = [];
    return wo(t).X((r2, o) => {
      const u = mr(o);
      u.sequenceNumber <= e && null === n.get(u.targetId) && (s++, i.push(this.removeTargetData(t, u)));
    }).next(() => Rt.waitFor(i)).next(() => s);
  }
  /**
   * Call provided function with each `TargetData` that we have cached.
   */
  forEachTarget(t, e) {
    return wo(t).X((t2, n) => {
      const s = mr(n);
      e(s);
    });
  }
  $n(t) {
    return _o(t).get("targetGlobalKey").next((t2) => (F2(null !== t2), t2));
  }
  On(t, e) {
    return _o(t).put("targetGlobalKey", e);
  }
  Fn(t, e) {
    return wo(t).put(gr(this.serializer, e));
  }
  /**
   * In-place updates the provided metadata to account for values in the given
   * TargetData. Saving is done separately. Returns true if there were any
   * changes to the metadata.
   */
  Bn(t, e) {
    let n = false;
    return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = true), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = true), n;
  }
  getTargetCount(t) {
    return this.$n(t).next((t2) => t2.targetCount);
  }
  getTargetData(t, e) {
    const n = $n(e), s = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]);
    let i = null;
    return wo(t).X({
      range: s,
      index: "queryTargetsIndex"
    }, (t2, n2, s2) => {
      const r2 = mr(n2);
      On(e, r2.target) && (i = r2, s2.done());
    }).next(() => i);
  }
  addMatchingKeys(t, e, n) {
    const s = [], i = mo(t);
    return e.forEach((e2) => {
      const r2 = qt(e2.path);
      s.push(i.put({
        targetId: n,
        path: r2
      })), s.push(this.referenceDelegate.addReference(t, n, e2));
    }), Rt.waitFor(s);
  }
  removeMatchingKeys(t, e, n) {
    const s = mo(t);
    return Rt.forEach(e, (e2) => {
      const i = qt(e2.path);
      return Rt.waitFor([s.delete([n, i]), this.referenceDelegate.removeReference(t, n, e2)]);
    });
  }
  removeMatchingKeysForTargetId(t, e) {
    const n = mo(t), s = IDBKeyRange.bound(
      [e],
      [e + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    );
    return n.delete(s);
  }
  getMatchingKeysForTargetId(t, e) {
    const n = IDBKeyRange.bound(
      [e],
      [e + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    ), s = mo(t);
    let i = gs();
    return s.X({
      range: n,
      Y: true
    }, (t2, e2, n2) => {
      const s2 = Gt(t2[1]), r2 = new ht(s2);
      i = i.add(r2);
    }).next(() => i);
  }
  containsKey(t, e) {
    const n = qt(e.path), s = IDBKeyRange.bound(
      [n],
      [st(n)],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    );
    let i = 0;
    return mo(t).X({
      index: "documentTargetsIndex",
      Y: true,
      range: s
    }, ([t2, e2], n2, s2) => {
      0 !== t2 && (i++, s2.done());
    }).next(() => i > 0);
  }
  /**
   * Looks up a TargetData entry by target ID.
   *
   * @param targetId - The target ID of the TargetData entry to look up.
   * @returns The cached TargetData entry, or null if the cache has no entry for
   * the target.
   */
  // PORTING NOTE: Multi-tab only.
  le(t, e) {
    return wo(t).get(e).next((t2) => t2 ? mr(t2) : null);
  }
};
function wo(t) {
  return _e(t, "targets");
}
function _o(t) {
  return _e(t, "targetGlobal");
}
function mo(t) {
  return _e(t, "targetDocuments");
}
function go([t, e], [n, s]) {
  const i = et(t, n);
  return 0 === i ? et(e, s) : i;
}
var yo = class {
  constructor(t) {
    this.Ln = t, this.buffer = new Ee(go), this.qn = 0;
  }
  Un() {
    return ++this.qn;
  }
  Kn(t) {
    const e = [t, this.Un()];
    if (this.buffer.size < this.Ln) this.buffer = this.buffer.add(e);
    else {
      const t2 = this.buffer.last();
      go(e, t2) < 0 && (this.buffer = this.buffer.delete(t2).add(e));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
};
var po = class {
  constructor(t, e, n) {
    this.garbageCollector = t, this.asyncQueue = e, this.localStore = n, this.Gn = null;
  }
  start() {
    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.Qn(6e4);
  }
  stop() {
    this.Gn && (this.Gn.cancel(), this.Gn = null);
  }
  get started() {
    return null !== this.Gn;
  }
  Qn(t) {
    N2("LruGarbageCollector", `Garbage collection scheduled in ${t}ms`), this.Gn = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", t, () => __async(this, null, function* () {
      this.Gn = null;
      try {
        yield this.localStore.collectGarbage(this.garbageCollector);
      } catch (t2) {
        Dt(t2) ? N2("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", t2) : yield vt(t2);
      }
      yield this.Qn(3e5);
    }));
  }
};
var Io = class {
  constructor(t, e) {
    this.jn = t, this.params = e;
  }
  calculateTargetCount(t, e) {
    return this.jn.zn(t).next((t2) => Math.floor(e / 100 * t2));
  }
  nthSequenceNumber(t, e) {
    if (0 === e) return Rt.resolve(Ot.ct);
    const n = new yo(e);
    return this.jn.forEachTarget(t, (t2) => n.Kn(t2.sequenceNumber)).next(() => this.jn.Wn(t, (t2) => n.Kn(t2))).next(() => n.maxValue);
  }
  removeTargets(t, e, n) {
    return this.jn.removeTargets(t, e, n);
  }
  removeOrphanedDocuments(t, e) {
    return this.jn.removeOrphanedDocuments(t, e);
  }
  collect(t, e) {
    return -1 === this.params.cacheSizeCollectionThreshold ? (N2("LruGarbageCollector", "Garbage collection skipped; disabled"), Rt.resolve(no)) : this.getCacheSize(t).next((n) => n < this.params.cacheSizeCollectionThreshold ? (N2("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), no) : this.Hn(t, e));
  }
  getCacheSize(t) {
    return this.jn.getCacheSize(t);
  }
  Hn(t, e) {
    let n, s, i, r2, o, c, a;
    const h = Date.now();
    return this.calculateTargetCount(t, this.params.percentileToCollect).next((e2) => (
      // Cap at the configured max
      (e2 > this.params.maximumSequenceNumbersToCollect ? (N2("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e2}`), s = this.params.maximumSequenceNumbersToCollect) : s = e2, r2 = Date.now(), this.nthSequenceNumber(t, s))
    )).next((s2) => (n = s2, o = Date.now(), this.removeTargets(t, n, e))).next((e2) => (i = e2, c = Date.now(), this.removeOrphanedDocuments(t, n))).next((t2) => {
      if (a = Date.now(), C2() <= LogLevel.DEBUG) {
        N2("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${r2 - h}ms
	Determined least recently used ${s} in ` + (o - r2) + `ms
	Removed ${i} targets in ` + (c - o) + `ms
	Removed ${t2} documents in ` + (a - c) + `ms
Total Duration: ${a - h}ms`);
      }
      return Rt.resolve({
        didRun: true,
        sequenceNumbersCollected: s,
        targetsRemoved: i,
        documentsRemoved: t2
      });
    });
  }
};
function To(t, e) {
  return new Io(t, e);
}
var Eo = class {
  constructor(t, e) {
    this.db = t, this.garbageCollector = To(this, e);
  }
  zn(t) {
    const e = this.Jn(t);
    return this.db.getTargetCache().getTargetCount(t).next((t2) => e.next((e2) => t2 + e2));
  }
  Jn(t) {
    let e = 0;
    return this.Wn(t, (t2) => {
      e++;
    }).next(() => e);
  }
  forEachTarget(t, e) {
    return this.db.getTargetCache().forEachTarget(t, e);
  }
  Wn(t, e) {
    return this.Yn(t, (t2, n) => e(n));
  }
  addReference(t, e, n) {
    return Ao(t, n);
  }
  removeReference(t, e, n) {
    return Ao(t, n);
  }
  removeTargets(t, e, n) {
    return this.db.getTargetCache().removeTargets(t, e, n);
  }
  markPotentiallyOrphaned(t, e) {
    return Ao(t, e);
  }
  /**
   * Returns true if anything would prevent this document from being garbage
   * collected, given that the document in question is not present in any
   * targets and has a sequence number less than or equal to the upper bound for
   * the collection run.
   */
  Xn(t, e) {
    return function(t2, e2) {
      let n = false;
      return ho(t2).Z((s) => uo(t2, s, e2).next((t3) => (t3 && (n = true), Rt.resolve(!t3)))).next(() => n);
    }(t, e);
  }
  removeOrphanedDocuments(t, e) {
    const n = this.db.getRemoteDocumentCache().newChangeBuffer(), s = [];
    let i = 0;
    return this.Yn(t, (r2, o) => {
      if (o <= e) {
        const e2 = this.Xn(t, r2).next((e3) => {
          if (!e3)
            return i++, n.getEntry(t, r2).next(() => (n.removeEntry(r2, rt.min()), mo(t).delete([0, qt(r2.path)])));
        });
        s.push(e2);
      }
    }).next(() => Rt.waitFor(s)).next(() => n.apply(t)).next(() => i);
  }
  removeTarget(t, e) {
    const n = e.withSequenceNumber(t.currentSequenceNumber);
    return this.db.getTargetCache().updateTargetData(t, n);
  }
  updateLimboDocument(t, e) {
    return Ao(t, e);
  }
  /**
   * Call provided function for each document in the cache that is 'orphaned'. Orphaned
   * means not a part of any target, so the only entry in the target-document index for
   * that document will be the sentinel row (targetId 0), which will also have the sequence
   * number for the last time the document was accessed.
   */
  Yn(t, e) {
    const n = mo(t);
    let s, i = Ot.ct;
    return n.X({
      index: "documentTargetsIndex"
    }, ([t2, n2], {
      path: r2,
      sequenceNumber: o
    }) => {
      0 === t2 ? (
        // if nextToReport is valid, report it, this is a new key so the
        // last one must not be a member of any targets.
        (i !== Ot.ct && e(new ht(Gt(s)), i), // set nextToReport to be this sequence number. It's the next one we
        // might report, if we don't find any targets for this document.
        // Note that the sequence number must be defined when the targetId
        // is 0.
        i = o, s = r2)
      ) : (
        // set nextToReport to be invalid, we know we don't need to report
        // this one since we found a target for it.
        i = Ot.ct
      );
    }).next(() => {
      i !== Ot.ct && e(new ht(Gt(s)), i);
    });
  }
  getCacheSize(t) {
    return this.db.getRemoteDocumentCache().getSize(t);
  }
};
function Ao(t, e) {
  return mo(t).put(
    /**
    * @returns A value suitable for writing a sentinel row in the target-document
    * store.
    */
    function(t2, e2) {
      return {
        targetId: 0,
        path: qt(t2.path),
        sequenceNumber: e2
      };
    }(e, t.currentSequenceNumber)
  );
}
var vo = class {
  constructor() {
    this.changes = new os((t) => t.toString(), (t, e) => t.isEqual(e)), this.changesApplied = false;
  }
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  addEntry(t) {
    this.assertNotApplied(), this.changes.set(t.key, t);
  }
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  removeEntry(t, e) {
    this.assertNotApplied(), this.changes.set(t, an.newInvalidDocument(t).setReadTime(e));
  }
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document or an invalid document if we have nothing
   * cached.
   */
  getEntry(t, e) {
    this.assertNotApplied();
    const n = this.changes.get(e);
    return void 0 !== n ? Rt.resolve(n) : this.getFromCache(t, e);
  }
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached documents, indexed by key. If an entry cannot be
   *     found, the corresponding key will be mapped to an invalid document.
   */
  getEntries(t, e) {
    return this.getAllFromCache(t, e);
  }
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  apply(t) {
    return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(t);
  }
  /** Helper to assert this.changes is not null  */
  assertNotApplied() {
  }
};
var Ro = class {
  constructor(t) {
    this.serializer = t;
  }
  setIndexManager(t) {
    this.indexManager = t;
  }
  /**
   * Adds the supplied entries to the cache.
   *
   * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
   */
  addEntry(t, e, n) {
    return So(t).put(n);
  }
  /**
   * Removes a document from the cache.
   *
   * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
   */
  removeEntry(t, e, n) {
    return So(t).delete(
      /**
      * Returns a key that can be used for document lookups via the primary key of
      * the DbRemoteDocument object store.
      */
      function(t2, e2) {
        const n2 = t2.path.toArray();
        return [
          /* prefix path */
          n2.slice(0, n2.length - 2),
          /* collection id */
          n2[n2.length - 2],
          fr(e2),
          /* document id */
          n2[n2.length - 1]
        ];
      }(e, n)
    );
  }
  /**
   * Updates the current cache size.
   *
   * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
   * cache's metadata.
   */
  updateMetadata(t, e) {
    return this.getMetadata(t).next((n) => (n.byteSize += e, this.Zn(t, n)));
  }
  getEntry(t, e) {
    let n = an.newInvalidDocument(e);
    return So(t).X({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(Do(e))
    }, (t2, s) => {
      n = this.ts(e, s);
    }).next(() => n);
  }
  /**
   * Looks up an entry in the cache.
   *
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document entry and its size.
   */
  es(t, e) {
    let n = {
      size: 0,
      document: an.newInvalidDocument(e)
    };
    return So(t).X({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(Do(e))
    }, (t2, s) => {
      n = {
        document: this.ts(e, s),
        size: ro(s)
      };
    }).next(() => n);
  }
  getEntries(t, e) {
    let n = cs();
    return this.ns(t, e, (t2, e2) => {
      const s = this.ts(t2, e2);
      n = n.insert(t2, s);
    }).next(() => n);
  }
  /**
   * Looks up several entries in the cache.
   *
   * @param documentKeys - The set of keys entries to look up.
   * @returns A map of documents indexed by key and a map of sizes indexed by
   *     key (zero if the document does not exist).
   */
  ss(t, e) {
    let n = cs(), s = new pe(ht.comparator);
    return this.ns(t, e, (t2, e2) => {
      const i = this.ts(t2, e2);
      n = n.insert(t2, i), s = s.insert(t2, ro(e2));
    }).next(() => ({
      documents: n,
      rs: s
    }));
  }
  ns(t, e, n) {
    if (e.isEmpty()) return Rt.resolve();
    let s = new Ee(xo);
    e.forEach((t2) => s = s.add(t2));
    const i = IDBKeyRange.bound(Do(s.first()), Do(s.last())), r2 = s.getIterator();
    let o = r2.getNext();
    return So(t).X({
      index: "documentKeyIndex",
      range: i
    }, (t2, e2, s2) => {
      const i2 = ht.fromSegments([...e2.prefixPath, e2.collectionGroup, e2.documentId]);
      for (; o && xo(o, i2) < 0; ) n(o, null), o = r2.getNext();
      o && o.isEqual(i2) && // Key found in cache.
      (n(o, e2), o = r2.hasNext() ? r2.getNext() : null), // Skip to the next key (if there is one).
      o ? s2.G(Do(o)) : s2.done();
    }).next(() => {
      for (; o; ) n(o, null), o = r2.hasNext() ? r2.getNext() : null;
    });
  }
  getDocumentsMatchingQuery(t, e, n, s) {
    const i = e.path, r2 = [i.popLast().toArray(), i.lastSegment(), fr(n.readTime), n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()], o = [i.popLast().toArray(), i.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""];
    return So(t).j(IDBKeyRange.bound(r2, o, true)).next((t2) => {
      let n2 = cs();
      for (const i2 of t2) {
        const t3 = this.ts(ht.fromSegments(i2.prefixPath.concat(i2.collectionGroup, i2.documentId)), i2);
        t3.isFoundDocument() && (ns(e, t3) || s.has(t3.key)) && // Either the document matches the given query, or it is mutated.
        (n2 = n2.insert(t3.key, t3));
      }
      return n2;
    });
  }
  getAllFromCollectionGroup(t, e, n, s) {
    let i = cs();
    const r2 = Co(e, n), o = Co(e, It.max());
    return So(t).X({
      index: "collectionGroupIndex",
      range: IDBKeyRange.bound(r2, o, true)
    }, (t2, e2, n2) => {
      const r3 = this.ts(ht.fromSegments(e2.prefixPath.concat(e2.collectionGroup, e2.documentId)), e2);
      i = i.insert(r3.key, r3), i.size === s && n2.done();
    }).next(() => i);
  }
  newChangeBuffer(t) {
    return new bo(this, !!t && t.trackRemovals);
  }
  getSize(t) {
    return this.getMetadata(t).next((t2) => t2.byteSize);
  }
  getMetadata(t) {
    return Vo(t).get("remoteDocumentGlobalKey").next((t2) => (F2(!!t2), t2));
  }
  Zn(t, e) {
    return Vo(t).put("remoteDocumentGlobalKey", e);
  }
  /**
   * Decodes `dbRemoteDoc` and returns the document (or an invalid document if
   * the document corresponds to the format used for sentinel deletes).
   */
  ts(t, e) {
    if (e) {
      const t2 = hr(this.serializer, e);
      if (!(t2.isNoDocument() && t2.version.isEqual(rt.min()))) return t2;
    }
    return an.newInvalidDocument(t);
  }
};
function Po(t) {
  return new Ro(t);
}
var bo = class extends vo {
  /**
   * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
   * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
   * `getNewDocumentChanges()`.
   */
  constructor(t, e) {
    super(), this.os = t, this.trackRemovals = e, // A map of document sizes and read times prior to applying the changes in
    // this buffer.
    this.us = new os((t2) => t2.toString(), (t2, e2) => t2.isEqual(e2));
  }
  applyChanges(t) {
    const e = [];
    let n = 0, s = new Ee((t2, e2) => et(t2.canonicalString(), e2.canonicalString()));
    return this.changes.forEach((i, r2) => {
      const o = this.us.get(i);
      if (e.push(this.os.removeEntry(t, i, o.readTime)), r2.isValidDocument()) {
        const u = lr(this.os.serializer, r2);
        s = s.add(i.path.popLast());
        const c = ro(u);
        n += c - o.size, e.push(this.os.addEntry(t, i, u));
      } else if (n -= o.size, this.trackRemovals) {
        const n2 = lr(this.os.serializer, r2.convertToNoDocument(rt.min()));
        e.push(this.os.addEntry(t, i, n2));
      }
    }), s.forEach((n2) => {
      e.push(this.os.indexManager.addToCollectionParentIndex(t, n2));
    }), e.push(this.os.updateMetadata(t, n)), Rt.waitFor(e);
  }
  getFromCache(t, e) {
    return this.os.es(t, e).next((t2) => (this.us.set(e, {
      size: t2.size,
      readTime: t2.document.readTime
    }), t2.document));
  }
  getAllFromCache(t, e) {
    return this.os.ss(t, e).next(({
      documents: t2,
      rs: e2
    }) => (
      // Note: `getAllFromCache` returns two maps instead of a single map from
      // keys to `DocumentSizeEntry`s. This is to allow returning the
      // `MutableDocumentMap` directly, without a conversion.
      (e2.forEach((e3, n) => {
        this.us.set(e3, {
          size: n,
          readTime: t2.get(e3).readTime
        });
      }), t2)
    ));
  }
};
function Vo(t) {
  return _e(t, "remoteDocumentGlobal");
}
function So(t) {
  return _e(t, "remoteDocumentsV14");
}
function Do(t) {
  const e = t.path.toArray();
  return [
    /* prefix path */
    e.slice(0, e.length - 2),
    /* collection id */
    e[e.length - 2],
    /* document id */
    e[e.length - 1]
  ];
}
function Co(t, e) {
  const n = e.documentKey.path.toArray();
  return [
    /* collection id */
    t,
    fr(e.readTime),
    /* prefix path */
    n.slice(0, n.length - 2),
    /* document id */
    n.length > 0 ? n[n.length - 1] : ""
  ];
}
function xo(t, e) {
  const n = t.path.toArray(), s = e.path.toArray();
  let i = 0;
  for (let t2 = 0; t2 < n.length - 2 && t2 < s.length - 2; ++t2) if (i = et(n[t2], s[t2]), i) return i;
  return i = et(n.length, s.length), i || (i = et(n[n.length - 2], s[s.length - 2]), i || et(n[n.length - 1], s[s.length - 1]));
}
var No = class {
  constructor(t, e) {
    this.overlayedDocument = t, this.mutatedFields = e;
  }
};
var ko = class {
  constructor(t, e, n, s) {
    this.remoteDocumentCache = t, this.mutationQueue = e, this.documentOverlayCache = n, this.indexManager = s;
  }
  /**
   * Get the local view of the document identified by `key`.
   *
   * @returns Local view of the document or null if we don't have any cached
   * state for it.
   */
  getDocument(t, e) {
    let n = null;
    return this.documentOverlayCache.getOverlay(t, e).next((s) => (n = s, this.remoteDocumentCache.getEntry(t, e))).next((t2) => (null !== n && Ks(n.mutation, t2, Re.empty(), it.now()), t2));
  }
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  getDocuments(t, e) {
    return this.remoteDocumentCache.getEntries(t, e).next((e2) => this.getLocalViewOfDocuments(t, e2, gs()).next(() => e2));
  }
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   *
   * @param transaction - The transaction this operation is scoped to.
   * @param docs - The documents to apply local mutations to get the local views.
   * @param existenceStateChanged - The set of document keys whose existence state
   *   is changed. This is useful to determine if some documents overlay needs
   *   to be recalculated.
   */
  getLocalViewOfDocuments(t, e, n = gs()) {
    const s = fs();
    return this.populateOverlays(t, s, e).next(() => this.computeViews(t, e, s, n).next((t2) => {
      let e2 = hs();
      return t2.forEach((t3, n2) => {
        e2 = e2.insert(t3, n2.overlayedDocument);
      }), e2;
    }));
  }
  /**
   * Gets the overlayed documents for the given document map, which will include
   * the local view of those documents and a `FieldMask` indicating which fields
   * are mutated locally, `null` if overlay is a Set or Delete mutation.
   */
  getOverlayedDocuments(t, e) {
    const n = fs();
    return this.populateOverlays(t, n, e).next(() => this.computeViews(t, e, n, gs()));
  }
  /**
   * Fetches the overlays for {@code docs} and adds them to provided overlay map
   * if the map does not already contain an entry for the given document key.
   */
  populateOverlays(t, e, n) {
    const s = [];
    return n.forEach((t2) => {
      e.has(t2) || s.push(t2);
    }), this.documentOverlayCache.getOverlays(t, s).next((t2) => {
      t2.forEach((t3, n2) => {
        e.set(t3, n2);
      });
    });
  }
  /**
   * Computes the local view for the given documents.
   *
   * @param docs - The documents to compute views for. It also has the base
   *   version of the documents.
   * @param overlays - The overlays that need to be applied to the given base
   *   version of the documents.
   * @param existenceStateChanged - A set of documents whose existence states
   *   might have changed. This is used to determine if we need to re-calculate
   *   overlays from mutation queues.
   * @return A map represents the local documents view.
   */
  computeViews(t, e, n, s) {
    let i = cs();
    const r2 = ws(), o = ws();
    return e.forEach((t2, e2) => {
      const o2 = n.get(e2.key);
      s.has(e2.key) && (void 0 === o2 || o2.mutation instanceof zs) ? i = i.insert(e2.key, e2) : void 0 !== o2 ? (r2.set(e2.key, o2.mutation.getFieldMask()), Ks(o2.mutation, e2, o2.mutation.getFieldMask(), it.now())) : (
        // no overlay exists
        // Using EMPTY to indicate there is no overlay for the document.
        r2.set(e2.key, Re.empty())
      );
    }), this.recalculateAndSaveOverlays(t, i).next((t2) => (t2.forEach((t3, e2) => r2.set(t3, e2)), e.forEach((t3, e2) => {
      var n2;
      return o.set(t3, new No(e2, null !== (n2 = r2.get(t3)) && void 0 !== n2 ? n2 : null));
    }), o));
  }
  recalculateAndSaveOverlays(t, e) {
    const n = ws();
    let s = new pe((t2, e2) => t2 - e2), i = gs();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t, e).next((t2) => {
      for (const i2 of t2) i2.keys().forEach((t3) => {
        const r2 = e.get(t3);
        if (null === r2) return;
        let o = n.get(t3) || Re.empty();
        o = i2.applyToLocalView(r2, o), n.set(t3, o);
        const u = (s.get(i2.batchId) || gs()).add(t3);
        s = s.insert(i2.batchId, u);
      });
    }).next(() => {
      const r2 = [], o = s.getReverseIterator();
      for (; o.hasNext(); ) {
        const s2 = o.getNext(), u = s2.key, c = s2.value, a = ds();
        c.forEach((t2) => {
          if (!i.has(t2)) {
            const s3 = qs(e.get(t2), n.get(t2));
            null !== s3 && a.set(t2, s3), i = i.add(t2);
          }
        }), r2.push(this.documentOverlayCache.saveOverlays(t, u, a));
      }
      return Rt.waitFor(r2);
    }).next(() => n);
  }
  /**
   * Recalculates overlays by reading the documents from remote document cache
   * first, and saves them after they are calculated.
   */
  recalculateAndSaveOverlaysForDocumentKeys(t, e) {
    return this.remoteDocumentCache.getEntries(t, e).next((e2) => this.recalculateAndSaveOverlays(t, e2));
  }
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param offset - Read time and key to start scanning by (exclusive).
   */
  getDocumentsMatchingQuery(t, e, n) {
    return function(t2) {
      return ht.isDocumentKey(t2.path) && null === t2.collectionGroup && 0 === t2.filters.length;
    }(e) ? this.getDocumentsMatchingDocumentQuery(t, e.path) : Wn(e) ? this.getDocumentsMatchingCollectionGroupQuery(t, e, n) : this.getDocumentsMatchingCollectionQuery(t, e, n);
  }
  /**
   * Given a collection group, returns the next documents that follow the provided offset, along
   * with an updated batch ID.
   *
   * <p>The documents returned by this method are ordered by remote version from the provided
   * offset. If there are no more remote documents after the provided offset, documents with
   * mutations in order of batch id from the offset are returned. Since all documents in a batch are
   * returned together, the total number of documents returned can exceed {@code count}.
   *
   * @param transaction
   * @param collectionGroup The collection group for the documents.
   * @param offset The offset to index into.
   * @param count The number of documents to return
   * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
   */
  getNextDocuments(t, e, n, s) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(t, e, n, s).next((i) => {
      const r2 = s - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t, e, n.largestBatchId, s - i.size) : Rt.resolve(fs());
      let o = -1, u = i;
      return r2.next((e2) => Rt.forEach(e2, (e3, n2) => (o < n2.largestBatchId && (o = n2.largestBatchId), i.get(e3) ? Rt.resolve() : this.remoteDocumentCache.getEntry(t, e3).next((t2) => {
        u = u.insert(e3, t2);
      }))).next(() => this.populateOverlays(t, e2, i)).next(() => this.computeViews(t, u, e2, gs())).next((t2) => ({
        batchId: o,
        changes: ls(t2)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(t, e) {
    return this.getDocument(t, new ht(e)).next((t2) => {
      let e2 = hs();
      return t2.isFoundDocument() && (e2 = e2.insert(t2.key, t2)), e2;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t, e, n) {
    const s = e.collectionGroup;
    let i = hs();
    return this.indexManager.getCollectionParents(t, s).next((r2) => Rt.forEach(r2, (r3) => {
      const o = function(t2, e2) {
        return new Un(
          e2,
          /*collectionGroup=*/
          null,
          t2.explicitOrderBy.slice(),
          t2.filters.slice(),
          t2.limit,
          t2.limitType,
          t2.startAt,
          t2.endAt
        );
      }(e, r3.child(s));
      return this.getDocumentsMatchingCollectionQuery(t, o, n).next((t2) => {
        t2.forEach((t3, e2) => {
          i = i.insert(t3, e2);
        });
      });
    }).next(() => i));
  }
  getDocumentsMatchingCollectionQuery(t, e, n) {
    let s;
    return this.documentOverlayCache.getOverlaysForCollection(t, e.path, n.largestBatchId).next((i) => (s = i, this.remoteDocumentCache.getDocumentsMatchingQuery(t, e, n, s))).next((t2) => {
      s.forEach((e2, n3) => {
        const s2 = n3.getKey();
        null === t2.get(s2) && (t2 = t2.insert(s2, an.newInvalidDocument(s2)));
      });
      let n2 = hs();
      return t2.forEach((t3, i) => {
        const r2 = s.get(t3);
        void 0 !== r2 && Ks(r2.mutation, i, Re.empty(), it.now()), // Finally, insert the documents that still match the query
        ns(e, i) && (n2 = n2.insert(t3, i));
      }), n2;
    });
  }
};
var Mo = class {
  constructor(t) {
    this.serializer = t, this.cs = /* @__PURE__ */ new Map(), this.hs = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(t, e) {
    return Rt.resolve(this.cs.get(e));
  }
  saveBundleMetadata(t, e) {
    var n;
    return this.cs.set(e.id, {
      id: (n = e).id,
      version: n.version,
      createTime: Ni(n.createTime)
    }), Rt.resolve();
  }
  getNamedQuery(t, e) {
    return Rt.resolve(this.hs.get(e));
  }
  saveNamedQuery(t, e) {
    return this.hs.set(e.name, function(t2) {
      return {
        name: t2.name,
        query: yr(t2.bundledQuery),
        readTime: Ni(t2.readTime)
      };
    }(e)), Rt.resolve();
  }
};
var $o = class {
  constructor() {
    this.overlays = new pe(ht.comparator), this.ls = /* @__PURE__ */ new Map();
  }
  getOverlay(t, e) {
    return Rt.resolve(this.overlays.get(e));
  }
  getOverlays(t, e) {
    const n = fs();
    return Rt.forEach(e, (e2) => this.getOverlay(t, e2).next((t2) => {
      null !== t2 && n.set(e2, t2);
    })).next(() => n);
  }
  saveOverlays(t, e, n) {
    return n.forEach((n2, s) => {
      this.we(t, e, s);
    }), Rt.resolve();
  }
  removeOverlaysForBatchId(t, e, n) {
    const s = this.ls.get(n);
    return void 0 !== s && (s.forEach((t2) => this.overlays = this.overlays.remove(t2)), this.ls.delete(n)), Rt.resolve();
  }
  getOverlaysForCollection(t, e, n) {
    const s = fs(), i = e.length + 1, r2 = new ht(e.child("")), o = this.overlays.getIteratorFrom(r2);
    for (; o.hasNext(); ) {
      const t2 = o.getNext().value, r3 = t2.getKey();
      if (!e.isPrefixOf(r3.path)) break;
      r3.path.length === i && t2.largestBatchId > n && s.set(t2.getKey(), t2);
    }
    return Rt.resolve(s);
  }
  getOverlaysForCollectionGroup(t, e, n, s) {
    let i = new pe((t2, e2) => t2 - e2);
    const r2 = this.overlays.getIterator();
    for (; r2.hasNext(); ) {
      const t2 = r2.getNext().value;
      if (t2.getKey().getCollectionGroup() === e && t2.largestBatchId > n) {
        let e2 = i.get(t2.largestBatchId);
        null === e2 && (e2 = fs(), i = i.insert(t2.largestBatchId, e2)), e2.set(t2.getKey(), t2);
      }
    }
    const o = fs(), u = i.getIterator();
    for (; u.hasNext(); ) {
      if (u.getNext().value.forEach((t2, e2) => o.set(t2, e2)), o.size() >= s) break;
    }
    return Rt.resolve(o);
  }
  we(t, e, n) {
    const s = this.overlays.get(n.key);
    if (null !== s) {
      const t2 = this.ls.get(s.largestBatchId).delete(n.key);
      this.ls.set(s.largestBatchId, t2);
    }
    this.overlays = this.overlays.insert(n.key, new ei(e, n));
    let i = this.ls.get(e);
    void 0 === i && (i = gs(), this.ls.set(e, i)), this.ls.set(e, i.add(n.key));
  }
};
var Oo = class {
  constructor() {
    this.fs = new Ee(Fo.ds), // A set of outstanding references to a document sorted by target id.
    this.ws = new Ee(Fo._s);
  }
  /** Returns true if the reference set contains no references. */
  isEmpty() {
    return this.fs.isEmpty();
  }
  /** Adds a reference to the given document key for the given ID. */
  addReference(t, e) {
    const n = new Fo(t, e);
    this.fs = this.fs.add(n), this.ws = this.ws.add(n);
  }
  /** Add references to the given document keys for the given ID. */
  gs(t, e) {
    t.forEach((t2) => this.addReference(t2, e));
  }
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  removeReference(t, e) {
    this.ys(new Fo(t, e));
  }
  ps(t, e) {
    t.forEach((t2) => this.removeReference(t2, e));
  }
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  Is(t) {
    const e = new ht(new ut([])), n = new Fo(e, t), s = new Fo(e, t + 1), i = [];
    return this.ws.forEachInRange([n, s], (t2) => {
      this.ys(t2), i.push(t2.key);
    }), i;
  }
  Ts() {
    this.fs.forEach((t) => this.ys(t));
  }
  ys(t) {
    this.fs = this.fs.delete(t), this.ws = this.ws.delete(t);
  }
  Es(t) {
    const e = new ht(new ut([])), n = new Fo(e, t), s = new Fo(e, t + 1);
    let i = gs();
    return this.ws.forEachInRange([n, s], (t2) => {
      i = i.add(t2.key);
    }), i;
  }
  containsKey(t) {
    const e = new Fo(t, 0), n = this.fs.firstAfterOrEqual(e);
    return null !== n && t.isEqual(n.key);
  }
};
var Fo = class {
  constructor(t, e) {
    this.key = t, this.As = e;
  }
  /** Compare by key then by ID */
  static ds(t, e) {
    return ht.comparator(t.key, e.key) || et(t.As, e.As);
  }
  /** Compare by ID then by key */
  static _s(t, e) {
    return et(t.As, e.As) || ht.comparator(t.key, e.key);
  }
};
var Bo = class {
  constructor(t, e) {
    this.indexManager = t, this.referenceDelegate = e, /**
     * The set of all mutations that have been sent but not yet been applied to
     * the backend.
     */
    this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.vs = 1, /** An ordered mapping between documents and the mutations batch IDs. */
    this.Rs = new Ee(Fo.ds);
  }
  checkEmpty(t) {
    return Rt.resolve(0 === this.mutationQueue.length);
  }
  addMutationBatch(t, e, n, s) {
    const i = this.vs;
    this.vs++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const r2 = new Zs(i, e, n, s);
    this.mutationQueue.push(r2);
    for (const e2 of s) this.Rs = this.Rs.add(new Fo(e2.key, i)), this.indexManager.addToCollectionParentIndex(t, e2.key.path.popLast());
    return Rt.resolve(r2);
  }
  lookupMutationBatch(t, e) {
    return Rt.resolve(this.Ps(e));
  }
  getNextMutationBatchAfterBatchId(t, e) {
    const n = e + 1, s = this.bs(n), i = s < 0 ? 0 : s;
    return Rt.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return Rt.resolve(0 === this.mutationQueue.length ? -1 : this.vs - 1);
  }
  getAllMutationBatches(t) {
    return Rt.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, e) {
    const n = new Fo(e, 0), s = new Fo(e, Number.POSITIVE_INFINITY), i = [];
    return this.Rs.forEachInRange([n, s], (t2) => {
      const e2 = this.Ps(t2.As);
      i.push(e2);
    }), Rt.resolve(i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t, e) {
    let n = new Ee(et);
    return e.forEach((t2) => {
      const e2 = new Fo(t2, 0), s = new Fo(t2, Number.POSITIVE_INFINITY);
      this.Rs.forEachInRange([e2, s], (t3) => {
        n = n.add(t3.As);
      });
    }), Rt.resolve(this.Vs(n));
  }
  getAllMutationBatchesAffectingQuery(t, e) {
    const n = e.path, s = n.length + 1;
    let i = n;
    ht.isDocumentKey(i) || (i = i.child(""));
    const r2 = new Fo(new ht(i), 0);
    let o = new Ee(et);
    return this.Rs.forEachWhile((t2) => {
      const e2 = t2.key.path;
      return !!n.isPrefixOf(e2) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (e2.length === s && (o = o.add(t2.As)), true);
    }, r2), Rt.resolve(this.Vs(o));
  }
  Vs(t) {
    const e = [];
    return t.forEach((t2) => {
      const n = this.Ps(t2);
      null !== n && e.push(n);
    }), e;
  }
  removeMutationBatch(t, e) {
    F2(0 === this.Ss(e.batchId, "removed")), this.mutationQueue.shift();
    let n = this.Rs;
    return Rt.forEach(e.mutations, (s) => {
      const i = new Fo(s.key, e.batchId);
      return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t, s.key);
    }).next(() => {
      this.Rs = n;
    });
  }
  Cn(t) {
  }
  containsKey(t, e) {
    const n = new Fo(e, 0), s = this.Rs.firstAfterOrEqual(n);
    return Rt.resolve(e.isEqual(s && s.key));
  }
  performConsistencyCheck(t) {
    return this.mutationQueue.length, Rt.resolve();
  }
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  Ss(t, e) {
    return this.bs(t);
  }
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been remvoed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  bs(t) {
    if (0 === this.mutationQueue.length)
      return 0;
    return t - this.mutationQueue[0].batchId;
  }
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficent.
   */
  Ps(t) {
    const e = this.bs(t);
    if (e < 0 || e >= this.mutationQueue.length) return null;
    return this.mutationQueue[e];
  }
};
var Lo = class {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  constructor(t) {
    this.Ds = t, /** Underlying cache of documents and their read times. */
    this.docs = new pe(ht.comparator), /** Size of all cached documents. */
    this.size = 0;
  }
  setIndexManager(t) {
    this.indexManager = t;
  }
  /**
   * Adds the supplied entry to the cache and updates the cache size as appropriate.
   *
   * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  addEntry(t, e) {
    const n = e.key, s = this.docs.get(n), i = s ? s.size : 0, r2 = this.Ds(e);
    return this.docs = this.docs.insert(n, {
      document: e.mutableCopy(),
      size: r2
    }), this.size += r2 - i, this.indexManager.addToCollectionParentIndex(t, n.path.popLast());
  }
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  removeEntry(t) {
    const e = this.docs.get(t);
    e && (this.docs = this.docs.remove(t), this.size -= e.size);
  }
  getEntry(t, e) {
    const n = this.docs.get(e);
    return Rt.resolve(n ? n.document.mutableCopy() : an.newInvalidDocument(e));
  }
  getEntries(t, e) {
    let n = cs();
    return e.forEach((t2) => {
      const e2 = this.docs.get(t2);
      n = n.insert(t2, e2 ? e2.document.mutableCopy() : an.newInvalidDocument(t2));
    }), Rt.resolve(n);
  }
  getDocumentsMatchingQuery(t, e, n, s) {
    let i = cs();
    const r2 = e.path, o = new ht(r2.child("")), u = this.docs.getIteratorFrom(o);
    for (; u.hasNext(); ) {
      const {
        key: t2,
        value: {
          document: o2
        }
      } = u.getNext();
      if (!r2.isPrefixOf(t2.path)) break;
      t2.path.length > r2.length + 1 || Tt(pt(o2), n) <= 0 || (s.has(o2.key) || ns(e, o2)) && (i = i.insert(o2.key, o2.mutableCopy()));
    }
    return Rt.resolve(i);
  }
  getAllFromCollectionGroup(t, e, n, s) {
    O2();
  }
  Cs(t, e) {
    return Rt.forEach(this.docs, (t2) => e(t2));
  }
  newChangeBuffer(t) {
    return new qo(this);
  }
  getSize(t) {
    return Rt.resolve(this.size);
  }
};
var qo = class extends vo {
  constructor(t) {
    super(), this.os = t;
  }
  applyChanges(t) {
    const e = [];
    return this.changes.forEach((n, s) => {
      s.isValidDocument() ? e.push(this.os.addEntry(t, s)) : this.os.removeEntry(n);
    }), Rt.waitFor(e);
  }
  getFromCache(t, e) {
    return this.os.getEntry(t, e);
  }
  getAllFromCache(t, e) {
    return this.os.getEntries(t, e);
  }
};
var Uo = class {
  constructor(t) {
    this.persistence = t, /**
     * Maps a target to the data about that target
     */
    this.xs = new os((t2) => $n(t2), On), /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = rt.min(), /** The highest numbered target ID encountered. */
    this.highestTargetId = 0, /** The highest sequence number encountered. */
    this.Ns = 0, /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    this.ks = new Oo(), this.targetCount = 0, this.Ms = lo.kn();
  }
  forEachTarget(t, e) {
    return this.xs.forEach((t2, n) => e(n)), Rt.resolve();
  }
  getLastRemoteSnapshotVersion(t) {
    return Rt.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return Rt.resolve(this.Ns);
  }
  allocateTargetId(t) {
    return this.highestTargetId = this.Ms.next(), Rt.resolve(this.highestTargetId);
  }
  setTargetsMetadata(t, e, n) {
    return n && (this.lastRemoteSnapshotVersion = n), e > this.Ns && (this.Ns = e), Rt.resolve();
  }
  Fn(t) {
    this.xs.set(t.target, t);
    const e = t.targetId;
    e > this.highestTargetId && (this.Ms = new lo(e), this.highestTargetId = e), t.sequenceNumber > this.Ns && (this.Ns = t.sequenceNumber);
  }
  addTargetData(t, e) {
    return this.Fn(e), this.targetCount += 1, Rt.resolve();
  }
  updateTargetData(t, e) {
    return this.Fn(e), Rt.resolve();
  }
  removeTargetData(t, e) {
    return this.xs.delete(e.target), this.ks.Is(e.targetId), this.targetCount -= 1, Rt.resolve();
  }
  removeTargets(t, e, n) {
    let s = 0;
    const i = [];
    return this.xs.forEach((r2, o) => {
      o.sequenceNumber <= e && null === n.get(o.targetId) && (this.xs.delete(r2), i.push(this.removeMatchingKeysForTargetId(t, o.targetId)), s++);
    }), Rt.waitFor(i).next(() => s);
  }
  getTargetCount(t) {
    return Rt.resolve(this.targetCount);
  }
  getTargetData(t, e) {
    const n = this.xs.get(e) || null;
    return Rt.resolve(n);
  }
  addMatchingKeys(t, e, n) {
    return this.ks.gs(e, n), Rt.resolve();
  }
  removeMatchingKeys(t, e, n) {
    this.ks.ps(e, n);
    const s = this.persistence.referenceDelegate, i = [];
    return s && e.forEach((e2) => {
      i.push(s.markPotentiallyOrphaned(t, e2));
    }), Rt.waitFor(i);
  }
  removeMatchingKeysForTargetId(t, e) {
    return this.ks.Is(e), Rt.resolve();
  }
  getMatchingKeysForTargetId(t, e) {
    const n = this.ks.Es(e);
    return Rt.resolve(n);
  }
  containsKey(t, e) {
    return Rt.resolve(this.ks.containsKey(e));
  }
};
var Ko = class {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  constructor(t, e) {
    this.$s = {}, this.overlays = {}, this.Os = new Ot(0), this.Fs = false, this.Fs = true, this.referenceDelegate = t(this), this.Bs = new Uo(this);
    this.indexManager = new zr(), this.remoteDocumentCache = function(t2) {
      return new Lo(t2);
    }((t2) => this.referenceDelegate.Ls(t2)), this.serializer = new ar(e), this.qs = new Mo(this.serializer);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.Fs = false, Promise.resolve();
  }
  get started() {
    return this.Fs;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(t) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t) {
    let e = this.overlays[t.toKey()];
    return e || (e = new $o(), this.overlays[t.toKey()] = e), e;
  }
  getMutationQueue(t, e) {
    let n = this.$s[t.toKey()];
    return n || (n = new Bo(e, this.referenceDelegate), this.$s[t.toKey()] = n), n;
  }
  getTargetCache() {
    return this.Bs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.qs;
  }
  runTransaction(t, e, n) {
    N2("MemoryPersistence", "Starting transaction:", t);
    const s = new Go(this.Os.next());
    return this.referenceDelegate.Us(), n(s).next((t2) => this.referenceDelegate.Ks(s).next(() => t2)).toPromise().then((t2) => (s.raiseOnCommittedEvent(), t2));
  }
  Gs(t, e) {
    return Rt.or(Object.values(this.$s).map((n) => () => n.containsKey(t, e)));
  }
};
var Go = class extends At {
  constructor(t) {
    super(), this.currentSequenceNumber = t;
  }
};
var Qo = class _Qo {
  constructor(t) {
    this.persistence = t, /** Tracks all documents that are active in Query views. */
    this.Qs = new Oo(), /** The list of documents that are potentially GCed after each transaction. */
    this.js = null;
  }
  static zs(t) {
    return new _Qo(t);
  }
  get Ws() {
    if (this.js) return this.js;
    throw O2();
  }
  addReference(t, e, n) {
    return this.Qs.addReference(n, e), this.Ws.delete(n.toString()), Rt.resolve();
  }
  removeReference(t, e, n) {
    return this.Qs.removeReference(n, e), this.Ws.add(n.toString()), Rt.resolve();
  }
  markPotentiallyOrphaned(t, e) {
    return this.Ws.add(e.toString()), Rt.resolve();
  }
  removeTarget(t, e) {
    this.Qs.Is(e.targetId).forEach((t2) => this.Ws.add(t2.toString()));
    const n = this.persistence.getTargetCache();
    return n.getMatchingKeysForTargetId(t, e.targetId).next((t2) => {
      t2.forEach((t3) => this.Ws.add(t3.toString()));
    }).next(() => n.removeTargetData(t, e));
  }
  Us() {
    this.js = /* @__PURE__ */ new Set();
  }
  Ks(t) {
    const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return Rt.forEach(this.Ws, (n) => {
      const s = ht.fromPath(n);
      return this.Hs(t, s).next((t2) => {
        t2 || e.removeEntry(s, rt.min());
      });
    }).next(() => (this.js = null, e.apply(t)));
  }
  updateLimboDocument(t, e) {
    return this.Hs(t, e).next((t2) => {
      t2 ? this.Ws.delete(e.toString()) : this.Ws.add(e.toString());
    });
  }
  Ls(t) {
    return 0;
  }
  Hs(t, e) {
    return Rt.or([() => Rt.resolve(this.Qs.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t, e), () => this.persistence.Gs(t, e)]);
  }
};
var jo = class _jo {
  constructor(t, e) {
    this.persistence = t, this.Js = new os((t2) => qt(t2.path), (t2, e2) => t2.isEqual(e2)), this.garbageCollector = To(this, e);
  }
  static zs(t, e) {
    return new _jo(t, e);
  }
  // No-ops, present so memory persistence doesn't have to care which delegate
  // it has.
  Us() {
  }
  Ks(t) {
    return Rt.resolve();
  }
  forEachTarget(t, e) {
    return this.persistence.getTargetCache().forEachTarget(t, e);
  }
  zn(t) {
    const e = this.Jn(t);
    return this.persistence.getTargetCache().getTargetCount(t).next((t2) => e.next((e2) => t2 + e2));
  }
  Jn(t) {
    let e = 0;
    return this.Wn(t, (t2) => {
      e++;
    }).next(() => e);
  }
  Wn(t, e) {
    return Rt.forEach(this.Js, (n, s) => this.Xn(t, n, s).next((t2) => t2 ? Rt.resolve() : e(s)));
  }
  removeTargets(t, e, n) {
    return this.persistence.getTargetCache().removeTargets(t, e, n);
  }
  removeOrphanedDocuments(t, e) {
    let n = 0;
    const s = this.persistence.getRemoteDocumentCache(), i = s.newChangeBuffer();
    return s.Cs(t, (s2) => this.Xn(t, s2, e).next((t2) => {
      t2 || (n++, i.removeEntry(s2, rt.min()));
    })).next(() => i.apply(t)).next(() => n);
  }
  markPotentiallyOrphaned(t, e) {
    return this.Js.set(e, t.currentSequenceNumber), Rt.resolve();
  }
  removeTarget(t, e) {
    const n = e.withSequenceNumber(t.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(t, n);
  }
  addReference(t, e, n) {
    return this.Js.set(n, t.currentSequenceNumber), Rt.resolve();
  }
  removeReference(t, e, n) {
    return this.Js.set(n, t.currentSequenceNumber), Rt.resolve();
  }
  updateLimboDocument(t, e) {
    return this.Js.set(e, t.currentSequenceNumber), Rt.resolve();
  }
  Ls(t) {
    let e = t.key.toString().length;
    return t.isFoundDocument() && (e += ze(t.data.value)), e;
  }
  Xn(t, e, n) {
    return Rt.or([() => this.persistence.Gs(t, e), () => this.persistence.getTargetCache().containsKey(t, e), () => {
      const t2 = this.Js.get(e);
      return Rt.resolve(void 0 !== t2 && t2 > n);
    }]);
  }
  getCacheSize(t) {
    return this.persistence.getRemoteDocumentCache().getSize(t);
  }
};
var zo = class {
  constructor(t) {
    this.serializer = t;
  }
  /**
   * Performs database creation and schema upgrades.
   *
   * Note that in production, this method is only ever used to upgrade the schema
   * to SCHEMA_VERSION. Different values of toVersion are only used for testing
   * and local feature development.
   */
  O(t, e, n, s) {
    const i = new Pt("createOrUpgrade", e);
    n < 1 && s >= 1 && (function(t2) {
      t2.createObjectStore("owner");
    }(t), function(t2) {
      t2.createObjectStore("mutationQueues", {
        keyPath: "userId"
      });
      t2.createObjectStore("mutations", {
        keyPath: "batchId",
        autoIncrement: true
      }).createIndex("userMutationsIndex", Qt, {
        unique: true
      }), t2.createObjectStore("documentMutations");
    }(t), Wo(t), function(t2) {
      t2.createObjectStore("remoteDocuments");
    }(t));
    let r2 = Rt.resolve();
    return n < 3 && s >= 3 && // Brand new clients don't need to drop and recreate--only clients that
    // potentially have corrupt data.
    (0 !== n && (!function(t2) {
      t2.deleteObjectStore("targetDocuments"), t2.deleteObjectStore("targets"), t2.deleteObjectStore("targetGlobal");
    }(t), Wo(t)), r2 = r2.next(() => (
      /**
      * Creates the target global singleton row.
      *
      * @param txn - The version upgrade transaction for indexeddb
      */
      function(t2) {
        const e2 = t2.store("targetGlobal"), n2 = {
          highestTargetId: 0,
          highestListenSequenceNumber: 0,
          lastRemoteSnapshotVersion: rt.min().toTimestamp(),
          targetCount: 0
        };
        return e2.put("targetGlobalKey", n2);
      }(i)
    ))), n < 4 && s >= 4 && (0 !== n && // Schema version 3 uses auto-generated keys to generate globally unique
    // mutation batch IDs (this was previously ensured internally by the
    // client). To migrate to the new schema, we have to read all mutations
    // and write them back out. We preserve the existing batch IDs to guarantee
    // consistency with other object stores. Any further mutation batch IDs will
    // be auto-generated.
    (r2 = r2.next(() => function(t2, e2) {
      return e2.store("mutations").j().next((n2) => {
        t2.deleteObjectStore("mutations");
        t2.createObjectStore("mutations", {
          keyPath: "batchId",
          autoIncrement: true
        }).createIndex("userMutationsIndex", Qt, {
          unique: true
        });
        const s2 = e2.store("mutations"), i2 = n2.map((t3) => s2.put(t3));
        return Rt.waitFor(i2);
      });
    }(t, i))), r2 = r2.next(() => {
      !function(t2) {
        t2.createObjectStore("clientMetadata", {
          keyPath: "clientId"
        });
      }(t);
    })), n < 5 && s >= 5 && (r2 = r2.next(() => this.Ys(i))), n < 6 && s >= 6 && (r2 = r2.next(() => (function(t2) {
      t2.createObjectStore("remoteDocumentGlobal");
    }(t), this.Xs(i)))), n < 7 && s >= 7 && (r2 = r2.next(() => this.Zs(i))), n < 8 && s >= 8 && (r2 = r2.next(() => this.ti(t, i))), n < 9 && s >= 9 && (r2 = r2.next(() => {
      !function(t2) {
        t2.objectStoreNames.contains("remoteDocumentChanges") && t2.deleteObjectStore("remoteDocumentChanges");
      }(t);
    })), n < 10 && s >= 10 && (r2 = r2.next(() => this.ei(i))), n < 11 && s >= 11 && (r2 = r2.next(() => {
      !function(t2) {
        t2.createObjectStore("bundles", {
          keyPath: "bundleId"
        });
      }(t), function(t2) {
        t2.createObjectStore("namedQueries", {
          keyPath: "name"
        });
      }(t);
    })), n < 12 && s >= 12 && (r2 = r2.next(() => {
      !function(t2) {
        const e2 = t2.createObjectStore("documentOverlays", {
          keyPath: oe
        });
        e2.createIndex("collectionPathOverlayIndex", ue, {
          unique: false
        }), e2.createIndex("collectionGroupOverlayIndex", ce, {
          unique: false
        });
      }(t);
    })), n < 13 && s >= 13 && (r2 = r2.next(() => function(t2) {
      const e2 = t2.createObjectStore("remoteDocumentsV14", {
        keyPath: Ht
      });
      e2.createIndex("documentKeyIndex", Jt), e2.createIndex("collectionGroupIndex", Yt);
    }(t)).next(() => this.ni(t, i)).next(() => t.deleteObjectStore("remoteDocuments"))), n < 14 && s >= 14 && (r2 = r2.next(() => this.si(t, i))), n < 15 && s >= 15 && (r2 = r2.next(() => function(t2) {
      t2.createObjectStore("indexConfiguration", {
        keyPath: "indexId",
        autoIncrement: true
      }).createIndex("collectionGroupIndex", "collectionGroup", {
        unique: false
      });
      t2.createObjectStore("indexState", {
        keyPath: ne
      }).createIndex("sequenceNumberIndex", se, {
        unique: false
      });
      t2.createObjectStore("indexEntries", {
        keyPath: ie
      }).createIndex("documentKeyIndex", re, {
        unique: false
      });
    }(t))), r2;
  }
  Xs(t) {
    let e = 0;
    return t.store("remoteDocuments").X((t2, n) => {
      e += ro(n);
    }).next(() => {
      const n = {
        byteSize: e
      };
      return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey", n);
    });
  }
  Ys(t) {
    const e = t.store("mutationQueues"), n = t.store("mutations");
    return e.j().next((e2) => Rt.forEach(e2, (e3) => {
      const s = IDBKeyRange.bound([e3.userId, -1], [e3.userId, e3.lastAcknowledgedBatchId]);
      return n.j("userMutationsIndex", s).next((n2) => Rt.forEach(n2, (n3) => {
        F2(n3.userId === e3.userId);
        const s2 = _r(this.serializer, n3);
        return io(t, e3.userId, s2).next(() => {
        });
      }));
    }));
  }
  /**
   * Ensures that every document in the remote document cache has a corresponding sentinel row
   * with a sequence number. Missing rows are given the most recently used sequence number.
   */
  Zs(t) {
    const e = t.store("targetDocuments"), n = t.store("remoteDocuments");
    return t.store("targetGlobal").get("targetGlobalKey").next((t2) => {
      const s = [];
      return n.X((n2, i) => {
        const r2 = new ut(n2), o = function(t3) {
          return [0, qt(t3)];
        }(r2);
        s.push(e.get(o).next((n3) => n3 ? Rt.resolve() : ((n4) => e.put({
          targetId: 0,
          path: qt(n4),
          sequenceNumber: t2.highestListenSequenceNumber
        }))(r2)));
      }).next(() => Rt.waitFor(s));
    });
  }
  ti(t, e) {
    t.createObjectStore("collectionParents", {
      keyPath: ee
    });
    const n = e.store("collectionParents"), s = new Wr(), i = (t2) => {
      if (s.add(t2)) {
        const e2 = t2.lastSegment(), s2 = t2.popLast();
        return n.put({
          collectionId: e2,
          parent: qt(s2)
        });
      }
    };
    return e.store("remoteDocuments").X({
      Y: true
    }, (t2, e2) => {
      const n2 = new ut(t2);
      return i(n2.popLast());
    }).next(() => e.store("documentMutations").X({
      Y: true
    }, ([t2, e2, n2], s2) => {
      const r2 = Gt(e2);
      return i(r2.popLast());
    }));
  }
  ei(t) {
    const e = t.store("targets");
    return e.X((t2, n) => {
      const s = mr(n), i = gr(this.serializer, s);
      return e.put(i);
    });
  }
  ni(t, e) {
    const n = e.store("remoteDocuments"), s = [];
    return n.X((t2, n2) => {
      const i = e.store("remoteDocumentsV14"), r2 = (o = n2, o.document ? new ht(ut.fromString(o.document.name).popFirst(5)) : o.noDocument ? ht.fromSegments(o.noDocument.path) : o.unknownDocument ? ht.fromSegments(o.unknownDocument.path) : O2()).path.toArray();
      var o;
      const u = {
        prefixPath: r2.slice(0, r2.length - 2),
        collectionGroup: r2[r2.length - 2],
        documentId: r2[r2.length - 1],
        readTime: n2.readTime || [0, 0],
        unknownDocument: n2.unknownDocument,
        noDocument: n2.noDocument,
        document: n2.document,
        hasCommittedMutations: !!n2.hasCommittedMutations
      };
      s.push(i.put(u));
    }).next(() => Rt.waitFor(s));
  }
  si(t, e) {
    const n = e.store("mutations"), s = Po(this.serializer), i = new Ko(Qo.zs, this.serializer.fe);
    return n.j().next((t2) => {
      const n2 = /* @__PURE__ */ new Map();
      return t2.forEach((t3) => {
        var e2;
        let s2 = null !== (e2 = n2.get(t3.userId)) && void 0 !== e2 ? e2 : gs();
        _r(this.serializer, t3).keys().forEach((t4) => s2 = s2.add(t4)), n2.set(t3.userId, s2);
      }), Rt.forEach(n2, (t3, n3) => {
        const r2 = new V2(n3), o = Rr.de(this.serializer, r2), u = i.getIndexManager(r2), c = oo.de(r2, this.serializer, u, i.referenceDelegate);
        return new ko(s, c, o, u).recalculateAndSaveOverlaysForDocumentKeys(new we(e, Ot.ct), t3).next();
      });
    });
  }
};
function Wo(t) {
  t.createObjectStore("targetDocuments", {
    keyPath: Zt
  }).createIndex("documentTargetsIndex", te, {
    unique: true
  });
  t.createObjectStore("targets", {
    keyPath: "targetId"
  }).createIndex("queryTargetsIndex", Xt, {
    unique: true
  }), t.createObjectStore("targetGlobal");
}
var Ho = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
var Jo = class _Jo {
  constructor(t, e, n, s, i, r2, o, u, c, a, h = 15) {
    if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, this.ii = i, this.window = r2, this.document = o, this.ri = c, this.oi = a, this.ui = h, this.Os = null, this.Fs = false, this.isPrimary = false, this.networkEnabled = true, /** Our window.unload handler, if registered. */
    this.ci = null, this.inForeground = false, /** Our 'visibilitychange' listener if registered. */
    this.ai = null, /** The client metadata refresh task. */
    this.hi = null, /** The last time we garbage collected the client metadata object store. */
    this.li = Number.NEGATIVE_INFINITY, /** A listener to notify on primary state changes. */
    this.fi = (t2) => Promise.resolve(), !_Jo.D()) throw new U2(q2.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.referenceDelegate = new Eo(this, s), this.di = e + "main", this.serializer = new ar(u), this.wi = new bt(this.di, this.ui, new zo(this.serializer)), this.Bs = new fo(this.referenceDelegate, this.serializer), this.remoteDocumentCache = Po(this.serializer), this.qs = new Er(), this.window && this.window.localStorage ? this._i = this.window.localStorage : (this._i = null, false === a && k2("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  /**
   * Attempt to start IndexedDb persistence.
   *
   * @returns Whether persistence was enabled.
   */
  start() {
    return this.mi().then(() => {
      if (!this.isPrimary && !this.allowTabSynchronization)
        throw new U2(q2.FAILED_PRECONDITION, Ho);
      return this.gi(), this.yi(), this.pi(), this.runTransaction("getHighestListenSequenceNumber", "readonly", (t) => this.Bs.getHighestSequenceNumber(t));
    }).then((t) => {
      this.Os = new Ot(t, this.ri);
    }).then(() => {
      this.Fs = true;
    }).catch((t) => (this.wi && this.wi.close(), Promise.reject(t)));
  }
  /**
   * Registers a listener that gets called when the primary state of the
   * instance changes. Upon registering, this listener is invoked immediately
   * with the current primary state.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  Ii(t) {
    return this.fi = (e) => __async(this, null, function* () {
      if (this.started) return t(e);
    }), t(this.isPrimary);
  }
  /**
   * Registers a listener that gets called when the database receives a
   * version change event indicating that it has deleted.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  setDatabaseDeletedListener(t) {
    this.wi.B((e) => __async(this, null, function* () {
      null === e.newVersion && (yield t());
    }));
  }
  /**
   * Adjusts the current network state in the client's metadata, potentially
   * affecting the primary lease.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  setNetworkEnabled(t) {
    this.networkEnabled !== t && (this.networkEnabled = t, // Schedule a primary lease refresh for immediate execution. The eventual
    // lease update will be propagated via `primaryStateListener`.
    this.ii.enqueueAndForget(() => __async(this, null, function* () {
      this.started && (yield this.mi());
    })));
  }
  /**
   * Updates the client metadata in IndexedDb and attempts to either obtain or
   * extend the primary lease for the local client. Asynchronously notifies the
   * primary state listener if the client either newly obtained or released its
   * primary lease.
   */
  mi() {
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (t) => Xo(t).put({
      clientId: this.clientId,
      updateTimeMs: Date.now(),
      networkEnabled: this.networkEnabled,
      inForeground: this.inForeground
    }).next(() => {
      if (this.isPrimary) return this.Ti(t).next((t2) => {
        t2 || (this.isPrimary = false, this.ii.enqueueRetryable(() => this.fi(false)));
      });
    }).next(() => this.Ei(t)).next((e) => this.isPrimary && !e ? this.Ai(t).next(() => false) : !!e && this.vi(t).next(() => true))).catch((t) => {
      if (Dt(t))
        return N2("IndexedDbPersistence", "Failed to extend owner lease: ", t), this.isPrimary;
      if (!this.allowTabSynchronization) throw t;
      return N2("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), /* isPrimary= */
      false;
    }).then((t) => {
      this.isPrimary !== t && this.ii.enqueueRetryable(() => this.fi(t)), this.isPrimary = t;
    });
  }
  Ti(t) {
    return Yo(t).get("owner").next((t2) => Rt.resolve(this.Ri(t2)));
  }
  Pi(t) {
    return Xo(t).delete(this.clientId);
  }
  /**
   * If the garbage collection threshold has passed, prunes the
   * RemoteDocumentChanges and the ClientMetadata store based on the last update
   * time of all clients.
   */
  bi() {
    return __async(this, null, function* () {
      if (this.isPrimary && !this.Vi(this.li, 18e5)) {
        this.li = Date.now();
        const t = yield this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (t2) => {
          const e = _e(t2, "clientMetadata");
          return e.j().next((t3) => {
            const n = this.Si(t3, 18e5), s = t3.filter((t4) => -1 === n.indexOf(t4));
            return Rt.forEach(s, (t4) => e.delete(t4.clientId)).next(() => s);
          });
        }).catch(() => []);
        if (this._i) for (const e of t) this._i.removeItem(this.Di(e.clientId));
      }
    });
  }
  /**
   * Schedules a recurring timer to update the client metadata and to either
   * extend or acquire the primary lease if the client is eligible.
   */
  pi() {
    this.hi = this.ii.enqueueAfterDelay("client_metadata_refresh", 4e3, () => this.mi().then(() => this.bi()).then(() => this.pi()));
  }
  /** Checks whether `client` is the local client. */
  Ri(t) {
    return !!t && t.ownerId === this.clientId;
  }
  /**
   * Evaluate the state of all active clients and determine whether the local
   * client is or can act as the holder of the primary lease. Returns whether
   * the client is eligible for the lease, but does not actually acquire it.
   * May return 'false' even if there is no active leaseholder and another
   * (foreground) client should become leaseholder instead.
   */
  Ei(t) {
    if (this.oi) return Rt.resolve(true);
    return Yo(t).get("owner").next((e) => {
      if (null !== e && this.Vi(e.leaseTimestampMs, 5e3) && !this.Ci(e.ownerId)) {
        if (this.Ri(e) && this.networkEnabled) return true;
        if (!this.Ri(e)) {
          if (!e.allowTabSynchronization)
            throw new U2(q2.FAILED_PRECONDITION, Ho);
          return false;
        }
      }
      return !(!this.networkEnabled || !this.inForeground) || Xo(t).j().next((t2) => void 0 === this.Si(t2, 5e3).find((t3) => {
        if (this.clientId !== t3.clientId) {
          const e2 = !this.networkEnabled && t3.networkEnabled, n = !this.inForeground && t3.inForeground, s = this.networkEnabled === t3.networkEnabled;
          if (e2 || n && s) return true;
        }
        return false;
      }));
    }).next((t2) => (this.isPrimary !== t2 && N2("IndexedDbPersistence", `Client ${t2 ? "is" : "is not"} eligible for a primary lease.`), t2));
  }
  shutdown() {
    return __async(this, null, function* () {
      this.Fs = false, this.xi(), this.hi && (this.hi.cancel(), this.hi = null), this.Ni(), this.ki(), // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
      // has obtained the primary lease.
      yield this.wi.runTransaction("shutdown", "readwrite", ["owner", "clientMetadata"], (t) => {
        const e = new we(t, Ot.ct);
        return this.Ai(e).next(() => this.Pi(e));
      }), this.wi.close(), // Remove the entry marking the client as zombied from LocalStorage since
      // we successfully deleted its metadata from IndexedDb.
      this.Mi();
    });
  }
  /**
   * Returns clients that are not zombied and have an updateTime within the
   * provided threshold.
   */
  Si(t, e) {
    return t.filter((t2) => this.Vi(t2.updateTimeMs, e) && !this.Ci(t2.clientId));
  }
  /**
   * Returns the IDs of the clients that are currently active. If multi-tab
   * is not supported, returns an array that only contains the local client's
   * ID.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  $i() {
    return this.runTransaction("getActiveClients", "readonly", (t) => Xo(t).j().next((t2) => this.Si(t2, 18e5).map((t3) => t3.clientId)));
  }
  get started() {
    return this.Fs;
  }
  getMutationQueue(t, e) {
    return oo.de(t, this.serializer, e, this.referenceDelegate);
  }
  getTargetCache() {
    return this.Bs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getIndexManager(t) {
    return new Jr(t, this.serializer.fe.databaseId);
  }
  getDocumentOverlayCache(t) {
    return Rr.de(this.serializer, t);
  }
  getBundleCache() {
    return this.qs;
  }
  runTransaction(t, e, n) {
    N2("IndexedDbPersistence", "Starting transaction:", t);
    const s = "readonly" === e ? "readonly" : "readwrite", i = 15 === (r2 = this.ui) ? de : 14 === r2 ? fe : 13 === r2 ? le : 12 === r2 ? he : 11 === r2 ? ae2 : void O2();
    var r2;
    let o;
    return this.wi.runTransaction(t, s, i, (s2) => (o = new we(s2, this.Os ? this.Os.next() : Ot.ct), "readwrite-primary" === e ? this.Ti(o).next((t2) => !!t2 || this.Ei(o)).next((e2) => {
      if (!e2) throw k2(`Failed to obtain primary lease for action '${t}'.`), this.isPrimary = false, this.ii.enqueueRetryable(() => this.fi(false)), new U2(q2.FAILED_PRECONDITION, Et);
      return n(o);
    }).next((t2) => this.vi(o).next(() => t2)) : this.Oi(o).next(() => n(o)))).then((t2) => (o.raiseOnCommittedEvent(), t2));
  }
  /**
   * Verifies that the current tab is the primary leaseholder or alternatively
   * that the leaseholder has opted into multi-tab synchronization.
   */
  // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
  // be turned off.
  Oi(t) {
    return Yo(t).get("owner").next((t2) => {
      if (null !== t2 && this.Vi(t2.leaseTimestampMs, 5e3) && !this.Ci(t2.ownerId) && !this.Ri(t2) && !(this.oi || this.allowTabSynchronization && t2.allowTabSynchronization)) throw new U2(q2.FAILED_PRECONDITION, Ho);
    });
  }
  /**
   * Obtains or extends the new primary lease for the local client. This
   * method does not verify that the client is eligible for this lease.
   */
  vi(t) {
    const e = {
      ownerId: this.clientId,
      allowTabSynchronization: this.allowTabSynchronization,
      leaseTimestampMs: Date.now()
    };
    return Yo(t).put("owner", e);
  }
  static D() {
    return bt.D();
  }
  /** Checks the primary lease and removes it if we are the current primary. */
  Ai(t) {
    const e = Yo(t);
    return e.get("owner").next((t2) => this.Ri(t2) ? (N2("IndexedDbPersistence", "Releasing primary lease."), e.delete("owner")) : Rt.resolve());
  }
  /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
  Vi(t, e) {
    const n = Date.now();
    return !(t < n - e) && (!(t > n) || (k2(`Detected an update time that is in the future: ${t} > ${n}`), false));
  }
  gi() {
    null !== this.document && "function" == typeof this.document.addEventListener && (this.ai = () => {
      this.ii.enqueueAndForget(() => (this.inForeground = "visible" === this.document.visibilityState, this.mi()));
    }, this.document.addEventListener("visibilitychange", this.ai), this.inForeground = "visible" === this.document.visibilityState);
  }
  Ni() {
    this.ai && (this.document.removeEventListener("visibilitychange", this.ai), this.ai = null);
  }
  /**
   * Attaches a window.unload handler that will synchronously write our
   * clientId to a "zombie client id" location in LocalStorage. This can be used
   * by tabs trying to acquire the primary lease to determine that the lease
   * is no longer valid even if the timestamp is recent. This is particularly
   * important for the refresh case (so the tab correctly re-acquires the
   * primary lease). LocalStorage is used for this rather than IndexedDb because
   * it is a synchronous API and so can be used reliably from  an unload
   * handler.
   */
  yi() {
    var t;
    "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.ci = () => {
      this.xi();
      const t2 = /(?:Version|Mobile)\/1[456]/;
      isSafari() && (navigator.appVersion.match(t2) || navigator.userAgent.match(t2)) && // On Safari 14, 15, and 16, we do not run any cleanup actions as it might
      // trigger a bug that prevents Safari from re-opening IndexedDB during
      // the next page load.
      // See https://bugs.webkit.org/show_bug.cgi?id=226547
      this.ii.enterRestrictedMode(
        /* purgeExistingTasks= */
        true
      ), this.ii.enqueueAndForget(() => this.shutdown());
    }, this.window.addEventListener("pagehide", this.ci));
  }
  ki() {
    this.ci && (this.window.removeEventListener("pagehide", this.ci), this.ci = null);
  }
  /**
   * Returns whether a client is "zombied" based on its LocalStorage entry.
   * Clients become zombied when their tab closes without running all of the
   * cleanup logic in `shutdown()`.
   */
  Ci(t) {
    var e;
    try {
      const n = null !== (null === (e = this._i) || void 0 === e ? void 0 : e.getItem(this.Di(t)));
      return N2("IndexedDbPersistence", `Client '${t}' ${n ? "is" : "is not"} zombied in LocalStorage`), n;
    } catch (t2) {
      return k2("IndexedDbPersistence", "Failed to get zombied client id.", t2), false;
    }
  }
  /**
   * Record client as zombied (a client that had its tab closed). Zombied
   * clients are ignored during primary tab selection.
   */
  xi() {
    if (this._i) try {
      this._i.setItem(this.Di(this.clientId), String(Date.now()));
    } catch (t) {
      k2("Failed to set zombie client id.", t);
    }
  }
  /** Removes the zombied client entry if it exists. */
  Mi() {
    if (this._i) try {
      this._i.removeItem(this.Di(this.clientId));
    } catch (t) {
    }
  }
  Di(t) {
    return `firestore_zombie_${this.persistenceKey}_${t}`;
  }
};
function Yo(t) {
  return _e(t, "owner");
}
function Xo(t) {
  return _e(t, "clientMetadata");
}
function Zo(t, e) {
  let n = t.projectId;
  return t.isDefaultDatabase || (n += "." + t.database), "firestore/" + e + "/" + n + "/";
}
var tu = class _tu {
  constructor(t, e, n, s) {
    this.targetId = t, this.fromCache = e, this.Fi = n, this.Bi = s;
  }
  static Li(t, e) {
    let n = gs(), s = gs();
    for (const t2 of e.docChanges) switch (t2.type) {
      case 0:
        n = n.add(t2.doc.key);
        break;
      case 1:
        s = s.add(t2.doc.key);
    }
    return new _tu(t, e.fromCache, n, s);
  }
};
var eu = class {
  constructor() {
    this.qi = false;
  }
  /** Sets the document view to query against. */
  initialize(t, e) {
    this.Ui = t, this.indexManager = e, this.qi = true;
  }
  /** Returns all local documents matching the specified query. */
  getDocumentsMatchingQuery(t, e, n, s) {
    return this.Ki(t, e).next((i) => i || this.Gi(t, e, s, n)).next((n2) => n2 || this.Qi(t, e));
  }
  /**
   * Performs an indexed query that evaluates the query based on a collection's
   * persisted index values. Returns `null` if an index is not available.
   */
  Ki(t, e) {
    if (Qn(e))
      return Rt.resolve(null);
    let n = Jn(e);
    return this.indexManager.getIndexType(t, n).next((s) => 0 === s ? null : (null !== e.limit && 1 === s && // We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    (e = Xn(
      e,
      null,
      "F"
      /* LimitType.First */
    ), n = Jn(e)), this.indexManager.getDocumentsMatchingTarget(t, n).next((s2) => {
      const i = gs(...s2);
      return this.Ui.getDocuments(t, i).next((s3) => this.indexManager.getMinOffset(t, n).next((n2) => {
        const r2 = this.ji(e, s3);
        return this.zi(e, r2, i, n2.readTime) ? this.Ki(t, Xn(
          e,
          null,
          "F"
          /* LimitType.First */
        )) : this.Wi(t, r2, e, n2);
      }));
    })));
  }
  /**
   * Performs a query based on the target's persisted query mapping. Returns
   * `null` if the mapping is not available or cannot be used.
   */
  Gi(t, e, n, s) {
    return Qn(e) || s.isEqual(rt.min()) ? this.Qi(t, e) : this.Ui.getDocuments(t, n).next((i) => {
      const r2 = this.ji(e, i);
      return this.zi(e, r2, n, s) ? this.Qi(t, e) : (C2() <= LogLevel.DEBUG && N2("QueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), es(e)), this.Wi(t, r2, e, yt(s, -1)));
    });
  }
  /** Applies the query filter and sorting to the provided documents.  */
  ji(t, e) {
    let n = new Ee(is(t));
    return e.forEach((e2, s) => {
      ns(t, s) && (n = n.add(s));
    }), n;
  }
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param query - The query.
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  zi(t, e, n, s) {
    if (null === t.limit)
      return false;
    if (n.size !== e.size)
      return true;
    const i = "F" === t.limitType ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
  }
  Qi(t, e) {
    return C2() <= LogLevel.DEBUG && N2("QueryEngine", "Using full collection scan to execute query:", es(e)), this.Ui.getDocumentsMatchingQuery(t, e, It.min());
  }
  /**
   * Combines the results from an indexed execution with the remaining documents
   * that have not yet been indexed.
   */
  Wi(t, e, n, s) {
    return this.Ui.getDocumentsMatchingQuery(t, n, s).next((t2) => (
      // Merge with existing results
      (e.forEach((e2) => {
        t2 = t2.insert(e2.key, e2);
      }), t2)
    ));
  }
};
var nu = class {
  constructor(t, e, n, s) {
    this.persistence = t, this.Hi = e, this.serializer = s, /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    this.Ji = new pe(et), /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.Yi = new os((t2) => $n(t2), On), /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    this.Xi = /* @__PURE__ */ new Map(), this.Zi = t.getRemoteDocumentCache(), this.Bs = t.getTargetCache(), this.qs = t.getBundleCache(), this.tr(n);
  }
  tr(t) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t), this.indexManager = this.persistence.getIndexManager(t), this.mutationQueue = this.persistence.getMutationQueue(t, this.indexManager), this.localDocuments = new ko(this.Zi, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Zi.setIndexManager(this.indexManager), this.Hi.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e) => t.collect(e, this.Ji));
  }
};
function su(t, e, n, s) {
  return new nu(t, e, n, s);
}
function iu(t, e) {
  return __async(this, null, function* () {
    const n = L(t);
    return yield n.persistence.runTransaction("Handle user change", "readonly", (t2) => {
      let s;
      return n.mutationQueue.getAllMutationBatches(t2).next((i) => (s = i, n.tr(e), n.mutationQueue.getAllMutationBatches(t2))).next((e2) => {
        const i = [], r2 = [];
        let o = gs();
        for (const t3 of s) {
          i.push(t3.batchId);
          for (const e3 of t3.mutations) o = o.add(e3.key);
        }
        for (const t3 of e2) {
          r2.push(t3.batchId);
          for (const e3 of t3.mutations) o = o.add(e3.key);
        }
        return n.localDocuments.getDocuments(t2, o).next((t3) => ({
          er: t3,
          removedBatchIds: i,
          addedBatchIds: r2
        }));
      });
    });
  });
}
function ru(t, e) {
  const n = L(t);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t2) => {
    const s = e.batch.keys(), i = n.Zi.newChangeBuffer({
      trackRemovals: true
    });
    return function(t3, e2, n2, s2) {
      const i2 = n2.batch, r2 = i2.keys();
      let o = Rt.resolve();
      return r2.forEach((t4) => {
        o = o.next(() => s2.getEntry(e2, t4)).next((e3) => {
          const r3 = n2.docVersions.get(t4);
          F2(null !== r3), e3.version.compareTo(r3) < 0 && (i2.applyToRemoteDocument(e3, n2), e3.isValidDocument() && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          (e3.setReadTime(n2.commitVersion), s2.addEntry(e3)));
        });
      }), o.next(() => t3.mutationQueue.removeMutationBatch(e2, i2));
    }(n, t2, e, i).next(() => i.apply(t2)).next(() => n.mutationQueue.performConsistencyCheck(t2)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(t2, s, e.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t2, function(t3) {
      let e2 = gs();
      for (let n2 = 0; n2 < t3.mutationResults.length; ++n2) {
        t3.mutationResults[n2].transformResults.length > 0 && (e2 = e2.add(t3.batch.mutations[n2].key));
      }
      return e2;
    }(e))).next(() => n.localDocuments.getDocuments(t2, s));
  });
}
function ou(t) {
  const e = L(t);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t2) => e.Bs.getLastRemoteSnapshotVersion(t2));
}
function uu(t, e) {
  const n = L(t), s = e.snapshotVersion;
  let i = n.Ji;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t2) => {
    const r2 = n.Zi.newChangeBuffer({
      trackRemovals: true
    });
    i = n.Ji;
    const o = [];
    e.targetChanges.forEach((r3, u2) => {
      const c2 = i.get(u2);
      if (!c2) return;
      o.push(n.Bs.removeMatchingKeys(t2, r3.removedDocuments, u2).next(() => n.Bs.addMatchingKeys(t2, r3.addedDocuments, u2)));
      let a = c2.withSequenceNumber(t2.currentSequenceNumber);
      null !== e.targetMismatches.get(u2) ? a = a.withResumeToken(Ve.EMPTY_BYTE_STRING, rt.min()).withLastLimboFreeSnapshotVersion(rt.min()) : r3.resumeToken.approximateByteSize() > 0 && (a = a.withResumeToken(r3.resumeToken, s)), i = i.insert(u2, a), // Update the target data if there are target changes (or if
      // sufficient time has passed since the last update).
      /**
      * Returns true if the newTargetData should be persisted during an update of
      * an active target. TargetData should always be persisted when a target is
      * being released and should not call this function.
      *
      * While the target is active, TargetData updates can be omitted when nothing
      * about the target has changed except metadata like the resume token or
      * snapshot version. Occasionally it's worth the extra write to prevent these
      * values from getting too stale after a crash, but this doesn't have to be
      * too frequent.
      */
      function(t3, e2, n2) {
        if (0 === t3.resumeToken.approximateByteSize()) return true;
        if (e2.snapshotVersion.toMicroseconds() - t3.snapshotVersion.toMicroseconds() >= 3e8) return true;
        return n2.addedDocuments.size + n2.modifiedDocuments.size + n2.removedDocuments.size > 0;
      }(c2, a, r3) && o.push(n.Bs.updateTargetData(t2, a));
    });
    let u = cs(), c = gs();
    if (e.documentUpdates.forEach((s2) => {
      e.resolvedLimboDocuments.has(s2) && o.push(n.persistence.referenceDelegate.updateLimboDocument(t2, s2));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all
    // the remote documents in advance in a single call.
    o.push(cu(t2, r2, e.documentUpdates).next((t3) => {
      u = t3.nr, c = t3.sr;
    })), !s.isEqual(rt.min())) {
      const e2 = n.Bs.getLastRemoteSnapshotVersion(t2).next((e3) => n.Bs.setTargetsMetadata(t2, t2.currentSequenceNumber, s));
      o.push(e2);
    }
    return Rt.waitFor(o).next(() => r2.apply(t2)).next(() => n.localDocuments.getLocalViewOfDocuments(t2, u, c)).next(() => u);
  }).then((t2) => (n.Ji = i, t2));
}
function cu(t, e, n) {
  let s = gs(), i = gs();
  return n.forEach((t2) => s = s.add(t2)), e.getEntries(t, s).next((t2) => {
    let s2 = cs();
    return n.forEach((n2, r2) => {
      const o = t2.get(n2);
      r2.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n2)), // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.
      r2.isNoDocument() && r2.version.isEqual(rt.min()) ? (
        // NoDocuments with SnapshotVersion.min() are used in manufactured
        // events. We remove these documents from cache since we lost
        // access.
        (e.removeEntry(n2, r2.readTime), s2 = s2.insert(n2, r2))
      ) : !o.isValidDocument() || r2.version.compareTo(o.version) > 0 || 0 === r2.version.compareTo(o.version) && o.hasPendingWrites ? (e.addEntry(r2), s2 = s2.insert(n2, r2)) : N2("LocalStore", "Ignoring outdated watch update for ", n2, ". Current version:", o.version, " Watch version:", r2.version);
    }), {
      nr: s2,
      sr: i
    };
  });
}
function au(t, e) {
  const n = L(t);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", (t2) => (void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t2, e)));
}
function hu(t, e) {
  const n = L(t);
  return n.persistence.runTransaction("Allocate target", "readwrite", (t2) => {
    let s;
    return n.Bs.getTargetData(t2, e).next((i) => i ? (
      // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      (s = i, Rt.resolve(s))
    ) : n.Bs.allocateTargetId(t2).next((i2) => (s = new cr(e, i2, "TargetPurposeListen", t2.currentSequenceNumber), n.Bs.addTargetData(t2, s).next(() => s))));
  }).then((t2) => {
    const s = n.Ji.get(t2.targetId);
    return (null === s || t2.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n.Ji = n.Ji.insert(t2.targetId, t2), n.Yi.set(e, t2.targetId)), t2;
  });
}
function lu(t, e, n) {
  return __async(this, null, function* () {
    const s = L(t), i = s.Ji.get(e), r2 = n ? "readwrite" : "readwrite-primary";
    try {
      n || (yield s.persistence.runTransaction("Release target", r2, (t2) => s.persistence.referenceDelegate.removeTarget(t2, i)));
    } catch (t2) {
      if (!Dt(t2)) throw t2;
      N2("LocalStore", `Failed to update sequence numbers for target ${e}: ${t2}`);
    }
    s.Ji = s.Ji.remove(e), s.Yi.delete(i.target);
  });
}
function fu(t, e, n) {
  const s = L(t);
  let i = rt.min(), r2 = gs();
  return s.persistence.runTransaction("Execute query", "readonly", (t2) => function(t3, e2, n2) {
    const s2 = L(t3), i2 = s2.Yi.get(n2);
    return void 0 !== i2 ? Rt.resolve(s2.Ji.get(i2)) : s2.Bs.getTargetData(e2, n2);
  }(s, t2, Jn(e)).next((e2) => {
    if (e2) return i = e2.lastLimboFreeSnapshotVersion, s.Bs.getMatchingKeysForTargetId(t2, e2.targetId).next((t3) => {
      r2 = t3;
    });
  }).next(() => s.Hi.getDocumentsMatchingQuery(t2, e, n ? i : rt.min(), n ? r2 : gs())).next((t3) => (_u(s, ss(e), t3), {
    documents: t3,
    ir: r2
  })));
}
function du(t, e) {
  const n = L(t), s = L(n.Bs), i = n.Ji.get(e);
  return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (t2) => s.le(t2, e).next((t3) => t3 ? t3.target : null));
}
function wu(t, e) {
  const n = L(t), s = n.Xi.get(e) || rt.min();
  return n.persistence.runTransaction("Get new document changes", "readonly", (t2) => n.Zi.getAllFromCollectionGroup(
    t2,
    e,
    yt(s, -1),
    /* limit= */
    Number.MAX_SAFE_INTEGER
  )).then((t2) => (_u(n, e, t2), t2));
}
function _u(t, e, n) {
  let s = t.Xi.get(e) || rt.min();
  n.forEach((t2, e2) => {
    e2.readTime.compareTo(s) > 0 && (s = e2.readTime);
  }), t.Xi.set(e, s);
}
function mu(t, e, n, s) {
  return __async(this, null, function* () {
    const i = L(t);
    let r2 = gs(), o = cs();
    for (const t2 of n) {
      const n2 = e.rr(t2.metadata.name);
      t2.document && (r2 = r2.add(n2));
      const s2 = e.ur(t2);
      s2.setReadTime(e.cr(t2.metadata.readTime)), o = o.insert(n2, s2);
    }
    const u = i.Zi.newChangeBuffer({
      trackRemovals: true
    }), c = yield hu(i, function(t2) {
      return Jn(Gn(ut.fromString(`__bundle__/docs/${t2}`)));
    }(s));
    return i.persistence.runTransaction("Apply bundle documents", "readwrite", (t2) => cu(t2, u, o).next((e2) => (u.apply(t2), e2)).next((e2) => i.Bs.removeMatchingKeysForTargetId(t2, c.targetId).next(() => i.Bs.addMatchingKeys(t2, r2, c.targetId)).next(() => i.localDocuments.getLocalViewOfDocuments(t2, e2.nr, e2.sr)).next(() => e2.nr)));
  });
}
function gu(_0, _1) {
  return __async(this, arguments, function* (t, e, n = gs()) {
    const s = yield hu(t, Jn(yr(e.bundledQuery))), i = L(t);
    return i.persistence.runTransaction("Save named query", "readwrite", (t2) => {
      const r2 = Ni(e.readTime);
      if (s.snapshotVersion.compareTo(r2) >= 0) return i.qs.saveNamedQuery(t2, e);
      const o = s.withResumeToken(Ve.EMPTY_BYTE_STRING, r2);
      return i.Ji = i.Ji.insert(o.targetId, o), i.Bs.updateTargetData(t2, o).next(() => i.Bs.removeMatchingKeysForTargetId(t2, s.targetId)).next(() => i.Bs.addMatchingKeys(t2, n, s.targetId)).next(() => i.qs.saveNamedQuery(t2, e));
    });
  });
}
function yu(t, e) {
  return `firestore_clients_${t}_${e}`;
}
function pu(t, e, n) {
  let s = `firestore_mutations_${t}_${n}`;
  return e.isAuthenticated() && (s += `_${e.uid}`), s;
}
function Iu(t, e) {
  return `firestore_targets_${t}_${e}`;
}
var Tu = class _Tu {
  constructor(t, e, n, s) {
    this.user = t, this.batchId = e, this.state = n, this.error = s;
  }
  /**
   * Parses a MutationMetadata from its JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static ar(t, e, n) {
    const s = JSON.parse(n);
    let i, r2 = "object" == typeof s && -1 !== ["pending", "acknowledged", "rejected"].indexOf(s.state) && (void 0 === s.error || "object" == typeof s.error);
    return r2 && s.error && (r2 = "string" == typeof s.error.message && "string" == typeof s.error.code, r2 && (i = new U2(s.error.code, s.error.message))), r2 ? new _Tu(t, e, s.state, i) : (k2("SharedClientState", `Failed to parse mutation state for ID '${e}': ${n}`), null);
  }
  hr() {
    const t = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t);
  }
};
var Eu = class _Eu {
  constructor(t, e, n) {
    this.targetId = t, this.state = e, this.error = n;
  }
  /**
   * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static ar(t, e) {
    const n = JSON.parse(e);
    let s, i = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error);
    return i && n.error && (i = "string" == typeof n.error.message && "string" == typeof n.error.code, i && (s = new U2(n.error.code, n.error.message))), i ? new _Eu(t, n.state, s) : (k2("SharedClientState", `Failed to parse target state for ID '${t}': ${e}`), null);
  }
  hr() {
    const t = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t);
  }
};
var Au = class _Au {
  constructor(t, e) {
    this.clientId = t, this.activeTargetIds = e;
  }
  /**
   * Parses a RemoteClientState from the JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static ar(t, e) {
    const n = JSON.parse(e);
    let s = "object" == typeof n && n.activeTargetIds instanceof Array, i = ps();
    for (let t2 = 0; s && t2 < n.activeTargetIds.length; ++t2) s = Lt(n.activeTargetIds[t2]), i = i.add(n.activeTargetIds[t2]);
    return s ? new _Au(t, i) : (k2("SharedClientState", `Failed to parse client data for instance '${t}': ${e}`), null);
  }
};
var vu = class _vu {
  constructor(t, e) {
    this.clientId = t, this.onlineState = e;
  }
  /**
   * Parses a SharedOnlineState from its JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static ar(t) {
    const e = JSON.parse(t);
    return "object" == typeof e && -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) && "string" == typeof e.clientId ? new _vu(e.clientId, e.onlineState) : (k2("SharedClientState", `Failed to parse online state: ${t}`), null);
  }
};
var Ru = class {
  constructor() {
    this.activeTargetIds = ps();
  }
  lr(t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }
  dr(t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  hr() {
    const t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t);
  }
};
var Pu = class {
  constructor(t, e, n, s, i) {
    this.window = t, this.ii = e, this.persistenceKey = n, this.wr = s, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this._r = this.mr.bind(this), this.gr = new pe(et), this.started = false, /**
     * Captures WebStorage events that occur before `start()` is called. These
     * events are replayed once `WebStorageSharedClientState` is started.
     */
    this.yr = [];
    const r2 = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.pr = yu(this.persistenceKey, this.wr), this.Ir = /** Assembles the key for the current sequence number. */
    function(t2) {
      return `firestore_sequence_number_${t2}`;
    }(this.persistenceKey), this.gr = this.gr.insert(this.wr, new Ru()), this.Tr = new RegExp(`^firestore_clients_${r2}_([^_]*)$`), this.Er = new RegExp(`^firestore_mutations_${r2}_(\\d+)(?:_(.*))?$`), this.Ar = new RegExp(`^firestore_targets_${r2}_(\\d+)$`), this.vr = /** Assembles the key for the online state of the primary tab. */
    function(t2) {
      return `firestore_online_state_${t2}`;
    }(this.persistenceKey), this.Rr = function(t2) {
      return `firestore_bundle_loaded_v2_${t2}`;
    }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
    // storage observer during initialization. This ensures that we collect
    // events before other components populate their initial state (during their
    // respective start() calls). Otherwise, we might for example miss a
    // mutation that is added after LocalStore's start() processed the existing
    // mutations but before we observe WebStorage events.
    this.window.addEventListener("storage", this._r);
  }
  /** Returns 'true' if WebStorage is available in the current environment. */
  static D(t) {
    return !(!t || !t.localStorage);
  }
  start() {
    return __async(this, null, function* () {
      const t = yield this.syncEngine.$i();
      for (const e2 of t) {
        if (e2 === this.wr) continue;
        const t2 = this.getItem(yu(this.persistenceKey, e2));
        if (t2) {
          const n = Au.ar(e2, t2);
          n && (this.gr = this.gr.insert(n.clientId, n));
        }
      }
      this.Pr();
      const e = this.storage.getItem(this.vr);
      if (e) {
        const t2 = this.br(e);
        t2 && this.Vr(t2);
      }
      for (const t2 of this.yr) this.mr(t2);
      this.yr = [], // Register a window unload hook to remove the client metadata entry from
      // WebStorage even if `shutdown()` was not called.
      this.window.addEventListener("pagehide", () => this.shutdown()), this.started = true;
    });
  }
  writeSequenceNumber(t) {
    this.setItem(this.Ir, JSON.stringify(t));
  }
  getAllActiveQueryTargets() {
    return this.Sr(this.gr);
  }
  isActiveQueryTarget(t) {
    let e = false;
    return this.gr.forEach((n, s) => {
      s.activeTargetIds.has(t) && (e = true);
    }), e;
  }
  addPendingMutation(t) {
    this.Dr(t, "pending");
  }
  updateMutationState(t, e, n) {
    this.Dr(t, e, n), // Once a final mutation result is observed by other clients, they no longer
    // access the mutation's metadata entry. Since WebStorage replays events
    // in order, it is safe to delete the entry right after updating it.
    this.Cr(t);
  }
  addLocalQueryTarget(t) {
    let e = "not-current";
    if (this.isActiveQueryTarget(t)) {
      const n = this.storage.getItem(Iu(this.persistenceKey, t));
      if (n) {
        const s = Eu.ar(t, n);
        s && (e = s.state);
      }
    }
    return this.Nr.lr(t), this.Pr(), e;
  }
  removeLocalQueryTarget(t) {
    this.Nr.dr(t), this.Pr();
  }
  isLocalQueryTarget(t) {
    return this.Nr.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    this.removeItem(Iu(this.persistenceKey, t));
  }
  updateQueryState(t, e, n) {
    this.kr(t, e, n);
  }
  handleUserChange(t, e, n) {
    e.forEach((t2) => {
      this.Cr(t2);
    }), this.currentUser = t, n.forEach((t2) => {
      this.addPendingMutation(t2);
    });
  }
  setOnlineState(t) {
    this.Mr(t);
  }
  notifyBundleLoaded(t) {
    this.$r(t);
  }
  shutdown() {
    this.started && (this.window.removeEventListener("storage", this._r), this.removeItem(this.pr), this.started = false);
  }
  getItem(t) {
    const e = this.storage.getItem(t);
    return N2("SharedClientState", "READ", t, e), e;
  }
  setItem(t, e) {
    N2("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
  }
  removeItem(t) {
    N2("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
  }
  mr(t) {
    const e = t;
    if (e.storageArea === this.storage) {
      if (N2("SharedClientState", "EVENT", e.key, e.newValue), e.key === this.pr) return void k2("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.ii.enqueueRetryable(() => __async(this, null, function* () {
        if (this.started) {
          if (null !== e.key) {
            if (this.Tr.test(e.key)) {
              if (null == e.newValue) {
                const t2 = this.Or(e.key);
                return this.Fr(t2, null);
              }
              {
                const t2 = this.Br(e.key, e.newValue);
                if (t2) return this.Fr(t2.clientId, t2);
              }
            } else if (this.Er.test(e.key)) {
              if (null !== e.newValue) {
                const t2 = this.Lr(e.key, e.newValue);
                if (t2) return this.qr(t2);
              }
            } else if (this.Ar.test(e.key)) {
              if (null !== e.newValue) {
                const t2 = this.Ur(e.key, e.newValue);
                if (t2) return this.Kr(t2);
              }
            } else if (e.key === this.vr) {
              if (null !== e.newValue) {
                const t2 = this.br(e.newValue);
                if (t2) return this.Vr(t2);
              }
            } else if (e.key === this.Ir) {
              const t2 = function(t3) {
                let e2 = Ot.ct;
                if (null != t3) try {
                  const n = JSON.parse(t3);
                  F2("number" == typeof n), e2 = n;
                } catch (t4) {
                  k2("SharedClientState", "Failed to read sequence number from WebStorage", t4);
                }
                return e2;
              }(e.newValue);
              t2 !== Ot.ct && this.sequenceNumberHandler(t2);
            } else if (e.key === this.Rr) {
              const t2 = this.Gr(e.newValue);
              yield Promise.all(t2.map((t3) => this.syncEngine.Qr(t3)));
            }
          }
        } else this.yr.push(e);
      }));
    }
  }
  get Nr() {
    return this.gr.get(this.wr);
  }
  Pr() {
    this.setItem(this.pr, this.Nr.hr());
  }
  Dr(t, e, n) {
    const s = new Tu(this.currentUser, t, e, n), i = pu(this.persistenceKey, this.currentUser, t);
    this.setItem(i, s.hr());
  }
  Cr(t) {
    const e = pu(this.persistenceKey, this.currentUser, t);
    this.removeItem(e);
  }
  Mr(t) {
    const e = {
      clientId: this.wr,
      onlineState: t
    };
    this.storage.setItem(this.vr, JSON.stringify(e));
  }
  kr(t, e, n) {
    const s = Iu(this.persistenceKey, t), i = new Eu(t, e, n);
    this.setItem(s, i.hr());
  }
  $r(t) {
    const e = JSON.stringify(Array.from(t));
    this.setItem(this.Rr, e);
  }
  /**
   * Parses a client state key in WebStorage. Returns null if the key does not
   * match the expected key format.
   */
  Or(t) {
    const e = this.Tr.exec(t);
    return e ? e[1] : null;
  }
  /**
   * Parses a client state in WebStorage. Returns 'null' if the value could not
   * be parsed.
   */
  Br(t, e) {
    const n = this.Or(t);
    return Au.ar(n, e);
  }
  /**
   * Parses a mutation batch state in WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  Lr(t, e) {
    const n = this.Er.exec(t), s = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
    return Tu.ar(new V2(i), s, e);
  }
  /**
   * Parses a query target state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  Ur(t, e) {
    const n = this.Ar.exec(t), s = Number(n[1]);
    return Eu.ar(s, e);
  }
  /**
   * Parses an online state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  br(t) {
    return vu.ar(t);
  }
  Gr(t) {
    return JSON.parse(t);
  }
  qr(t) {
    return __async(this, null, function* () {
      if (t.user.uid === this.currentUser.uid) return this.syncEngine.jr(t.batchId, t.state, t.error);
      N2("SharedClientState", `Ignoring mutation for non-active user ${t.user.uid}`);
    });
  }
  Kr(t) {
    return this.syncEngine.zr(t.targetId, t.state, t.error);
  }
  Fr(t, e) {
    const n = e ? this.gr.insert(t, e) : this.gr.remove(t), s = this.Sr(this.gr), i = this.Sr(n), r2 = [], o = [];
    return i.forEach((t2) => {
      s.has(t2) || r2.push(t2);
    }), s.forEach((t2) => {
      i.has(t2) || o.push(t2);
    }), this.syncEngine.Wr(r2, o).then(() => {
      this.gr = n;
    });
  }
  Vr(t) {
    this.gr.get(t.clientId) && this.onlineStateHandler(t.onlineState);
  }
  Sr(t) {
    let e = ps();
    return t.forEach((t2, n) => {
      e = e.unionWith(n.activeTargetIds);
    }), e;
  }
};
var bu = class {
  constructor() {
    this.Hr = new Ru(), this.Jr = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(t) {
  }
  updateMutationState(t, e, n) {
  }
  addLocalQueryTarget(t) {
    return this.Hr.lr(t), this.Jr[t] || "not-current";
  }
  updateQueryState(t, e, n) {
    this.Jr[t] = e;
  }
  removeLocalQueryTarget(t) {
    this.Hr.dr(t);
  }
  isLocalQueryTarget(t) {
    return this.Hr.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    delete this.Jr[t];
  }
  getAllActiveQueryTargets() {
    return this.Hr.activeTargetIds;
  }
  isActiveQueryTarget(t) {
    return this.Hr.activeTargetIds.has(t);
  }
  start() {
    return this.Hr = new Ru(), Promise.resolve();
  }
  handleUserChange(t, e, n) {
  }
  setOnlineState(t) {
  }
  shutdown() {
  }
  writeSequenceNumber(t) {
  }
  notifyBundleLoaded(t) {
  }
};
var Vu = class {
  Yr(t) {
  }
  shutdown() {
  }
};
var Su = class {
  constructor() {
    this.Xr = () => this.Zr(), this.eo = () => this.no(), this.so = [], this.io();
  }
  Yr(t) {
    this.so.push(t);
  }
  shutdown() {
    window.removeEventListener("online", this.Xr), window.removeEventListener("offline", this.eo);
  }
  io() {
    window.addEventListener("online", this.Xr), window.addEventListener("offline", this.eo);
  }
  Zr() {
    N2("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t of this.so) t(
      0
      /* NetworkStatus.AVAILABLE */
    );
  }
  no() {
    N2("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t of this.so) t(
      1
      /* NetworkStatus.UNAVAILABLE */
    );
  }
  // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available. */
  static D() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }
};
var Du = null;
function Cu() {
  return null === Du ? Du = 268435456 + Math.round(2147483648 * Math.random()) : Du++, "0x" + Du.toString(16);
}
var xu = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
var Nu = class {
  constructor(t) {
    this.ro = t.ro, this.oo = t.oo;
  }
  uo(t) {
    this.co = t;
  }
  ao(t) {
    this.ho = t;
  }
  onMessage(t) {
    this.lo = t;
  }
  close() {
    this.oo();
  }
  send(t) {
    this.ro(t);
  }
  fo() {
    this.co();
  }
  wo(t) {
    this.ho(t);
  }
  _o(t) {
    this.lo(t);
  }
};
var ku = "WebChannelConnection";
var Mu = class extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
  constructor(t) {
    this.databaseInfo = t, this.databaseId = t.databaseId;
    const e = t.ssl ? "https" : "http";
    this.mo = e + "://" + t.host, this.yo = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
  }
  get po() {
    return false;
  }
  Io(t, e, n, s, i) {
    const r2 = Cu(), o = this.To(t, e);
    N2("RestConnection", `Sending RPC '${t}' ${r2}:`, o, n);
    const u = {};
    return this.Eo(u, s, i), this.Ao(t, o, u, n).then((e2) => (N2("RestConnection", `Received RPC '${t}' ${r2}: `, e2), e2), (e2) => {
      throw M2("RestConnection", `RPC '${t}' ${r2} failed with error: `, e2, "url: ", o, "request:", n), e2;
    });
  }
  vo(t, e, n, s, i, r2) {
    return this.Io(t, e, n, s, i);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  Eo(t, e, n) {
    t["X-Goog-Api-Client"] = "gl-js/ fire/" + S2, // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), e && e.headers.forEach((e2, n2) => t[n2] = e2), n && n.headers.forEach((e2, n2) => t[n2] = e2);
  }
  To(t, e) {
    const n = xu[t];
    return `${this.mo}/v1/${e}:${n}`;
  }
} {
  constructor(t) {
    super(t), this.forceLongPolling = t.forceLongPolling, this.autoDetectLongPolling = t.autoDetectLongPolling, this.useFetchStreams = t.useFetchStreams, this.longPollingOptions = t.longPollingOptions;
  }
  Ao(t, e, n, s) {
    const i = Cu();
    return new Promise((r2, o) => {
      const u = new XhrIo();
      u.setWithCredentials(true), u.listenOnce(EventType.COMPLETE, () => {
        try {
          switch (u.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              const e2 = u.getResponseJson();
              N2(ku, `XHR for RPC '${t}' ${i} received:`, JSON.stringify(e2)), r2(e2);
              break;
            case ErrorCode.TIMEOUT:
              N2(ku, `RPC '${t}' ${i} timed out`), o(new U2(q2.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              const n2 = u.getStatus();
              if (N2(ku, `RPC '${t}' ${i} failed with status:`, n2, "response text:", u.getResponseText()), n2 > 0) {
                let t2 = u.getResponseJson();
                Array.isArray(t2) && (t2 = t2[0]);
                const e3 = null == t2 ? void 0 : t2.error;
                if (e3 && e3.status && e3.message) {
                  const t3 = function(t4) {
                    const e4 = t4.toLowerCase().replace(/_/g, "-");
                    return Object.values(q2).indexOf(e4) >= 0 ? e4 : q2.UNKNOWN;
                  }(e3.status);
                  o(new U2(t3, e3.message));
                } else o(new U2(q2.UNKNOWN, "Server responded with status " + u.getStatus()));
              } else
                o(new U2(q2.UNAVAILABLE, "Connection failed."));
              break;
            default:
              O2();
          }
        } finally {
          N2(ku, `RPC '${t}' ${i} completed.`);
        }
      });
      const c = JSON.stringify(s);
      N2(ku, `RPC '${t}' ${i} sending request:`, s), u.send(e, "POST", c, n, 15);
    });
  }
  Ro(t, e, n) {
    const s = Cu(), i = [this.mo, "/", "google.firestore.v1.Firestore", "/", t, "/channel"], r2 = createWebChannelTransport(), o = getStatEventTarget(), u = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    }, c = this.longPollingOptions.timeoutSeconds;
    void 0 !== c && (u.longPollingTimeout = Math.round(1e3 * c)), this.useFetchStreams && (u.xmlHttpFactory = new FetchXmlHttpFactory({})), this.Eo(u.initMessageHeaders, e, n), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the encodeInitMessageHeaders option to specify that
    // the headers should instead be encoded in the request's POST payload,
    // which is recognized by the webchannel backend.
    u.encodeInitMessageHeaders = true;
    const a = i.join("");
    N2(ku, `Creating RPC '${t}' stream ${s}: ${a}`, u);
    const h = r2.createWebChannel(a, u);
    let l2 = false, f = false;
    const d = new Nu({
      ro: (e2) => {
        f ? N2(ku, `Not sending because RPC '${t}' stream ${s} is closed:`, e2) : (l2 || (N2(ku, `Opening RPC '${t}' stream ${s} transport.`), h.open(), l2 = true), N2(ku, `RPC '${t}' stream ${s} sending:`, e2), h.send(e2));
      },
      oo: () => h.close()
    }), w2 = (t2, e2, n2) => {
      t2.listen(e2, (t3) => {
        try {
          n2(t3);
        } catch (t4) {
          setTimeout(() => {
            throw t4;
          }, 0);
        }
      });
    };
    return w2(h, WebChannel.EventType.OPEN, () => {
      f || N2(ku, `RPC '${t}' stream ${s} transport opened.`);
    }), w2(h, WebChannel.EventType.CLOSE, () => {
      f || (f = true, N2(ku, `RPC '${t}' stream ${s} transport closed`), d.wo());
    }), w2(h, WebChannel.EventType.ERROR, (e2) => {
      f || (f = true, M2(ku, `RPC '${t}' stream ${s} transport errored:`, e2), d.wo(new U2(q2.UNAVAILABLE, "The operation could not be completed")));
    }), w2(h, WebChannel.EventType.MESSAGE, (e2) => {
      var n2;
      if (!f) {
        const i2 = e2.data[0];
        F2(!!i2);
        const r3 = i2, o2 = r3.error || (null === (n2 = r3[0]) || void 0 === n2 ? void 0 : n2.error);
        if (o2) {
          N2(ku, `RPC '${t}' stream ${s} received error:`, o2);
          const e3 = o2.status;
          let n3 = (
            /**
            * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
            *
            * @returns The Code equivalent to the given status string or undefined if
            *     there is no match.
            */
            function(t2) {
              const e4 = ii[t2];
              if (void 0 !== e4) return ui(e4);
            }(e3)
          ), i3 = o2.message;
          void 0 === n3 && (n3 = q2.INTERNAL, i3 = "Unknown error status: " + e3 + " with message " + o2.message), // Mark closed so no further events are propagated
          f = true, d.wo(new U2(n3, i3)), h.close();
        } else N2(ku, `RPC '${t}' stream ${s} received:`, i2), d._o(i2);
      }
    }), w2(o, Event.STAT_EVENT, (e2) => {
      e2.stat === Stat.PROXY ? N2(ku, `RPC '${t}' stream ${s} detected buffering proxy`) : e2.stat === Stat.NOPROXY && N2(ku, `RPC '${t}' stream ${s} detected no buffering proxy`);
    }), setTimeout(() => {
      d.fo();
    }, 0), d;
  }
};
function $u() {
  return "undefined" != typeof window ? window : null;
}
function Ou() {
  return "undefined" != typeof document ? document : null;
}
function Fu(t) {
  return new Vi(
    t,
    /* useProto3Json= */
    true
  );
}
var Bu = class {
  constructor(t, e, n = 1e3, s = 1.5, i = 6e4) {
    this.ii = t, this.timerId = e, this.Po = n, this.bo = s, this.Vo = i, this.So = 0, this.Do = null, /** The last backoff attempt, as epoch milliseconds. */
    this.Co = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.So = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  xo() {
    this.So = this.Vo;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  No(t) {
    this.cancel();
    const e = Math.floor(this.So + this.ko()), n = Math.max(0, Date.now() - this.Co), s = Math.max(0, e - n);
    s > 0 && N2("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), this.Do = this.ii.enqueueAfterDelay(this.timerId, s, () => (this.Co = Date.now(), t())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.So *= this.bo, this.So < this.Po && (this.So = this.Po), this.So > this.Vo && (this.So = this.Vo);
  }
  Mo() {
    null !== this.Do && (this.Do.skipDelay(), this.Do = null);
  }
  cancel() {
    null !== this.Do && (this.Do.cancel(), this.Do = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  ko() {
    return (Math.random() - 0.5) * this.So;
  }
};
var Lu = class {
  constructor(t, e, n, s, i, r2, o, u) {
    this.ii = t, this.$o = n, this.Oo = s, this.connection = i, this.authCredentialsProvider = r2, this.appCheckCredentialsProvider = o, this.listener = u, this.state = 0, /**
     * A close count that's incremented every time the stream is closed; used by
     * getCloseGuardedDispatcher() to invalidate callbacks that happen after
     * close.
     */
    this.Fo = 0, this.Bo = null, this.Lo = null, this.stream = null, this.qo = new Bu(t, e);
  }
  /**
   * Returns true if start() has been called and no error has occurred. True
   * indicates the stream is open or in the process of opening (which
   * encompasses respecting backoff, getting auth tokens, and starting the
   * actual RPC). Use isOpen() to determine if the stream is open and ready for
   * outbound requests.
   */
  Uo() {
    return 1 === this.state || 5 === this.state || this.Ko();
  }
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  Ko() {
    return 2 === this.state || 3 === this.state;
  }
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  start() {
    4 !== this.state ? this.auth() : this.Go();
  }
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  stop() {
    return __async(this, null, function* () {
      this.Uo() && (yield this.close(
        0
        /* PersistentStreamState.Initial */
      ));
    });
  }
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  Qo() {
    this.state = 0, this.qo.reset();
  }
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  jo() {
    this.Ko() && null === this.Bo && (this.Bo = this.ii.enqueueAfterDelay(this.$o, 6e4, () => this.zo()));
  }
  /** Sends a message to the underlying stream. */
  Wo(t) {
    this.Ho(), this.stream.send(t);
  }
  /** Called by the idle timer when the stream should close due to inactivity. */
  zo() {
    return __async(this, null, function* () {
      if (this.Ko())
        return this.close(
          0
          /* PersistentStreamState.Initial */
        );
    });
  }
  /** Marks the stream as active again. */
  Ho() {
    this.Bo && (this.Bo.cancel(), this.Bo = null);
  }
  /** Cancels the health check delayed operation. */
  Jo() {
    this.Lo && (this.Lo.cancel(), this.Lo = null);
  }
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState - the intended state of the stream after closing.
   * @param error - the error the connection was closed with.
   */
  close(t, e) {
    return __async(this, null, function* () {
      this.Ho(), this.Jo(), this.qo.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
      // underlying stream), guaranteeing they won't execute.
      this.Fo++, 4 !== t ? (
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.qo.reset()
      ) : e && e.code === q2.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        (k2(e.toString()), k2("Using maximum backoff delay to prevent overloading the backend."), this.qo.xo())
      ) : e && e.code === q2.UNAUTHENTICATED && 3 !== this.state && // "unauthenticated" error means the token was rejected. This should rarely
      // happen since both Auth and AppCheck ensure a sufficient TTL when we
      // request a token. If a user manually resets their system clock this can
      // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
      // before we received the first message and we need to invalidate the token
      // to ensure that we fetch a new token.
      (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
      null !== this.stream && (this.Yo(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
      // inhibit backoff or otherwise manipulate the state in its non-started state.
      this.state = t, // Notify the listener that the stream closed.
      yield this.listener.ao(e);
    });
  }
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  Yo() {
  }
  auth() {
    this.state = 1;
    const t = this.Xo(this.Fo), e = this.Fo;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([t2, n]) => {
      this.Fo === e && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      this.Zo(t2, n);
    }, (e2) => {
      t(() => {
        const t2 = new U2(q2.UNKNOWN, "Fetching auth token failed: " + e2.message);
        return this.tu(t2);
      });
    });
  }
  Zo(t, e) {
    const n = this.Xo(this.Fo);
    this.stream = this.eu(t, e), this.stream.uo(() => {
      n(() => (this.state = 2, this.Lo = this.ii.enqueueAfterDelay(this.Oo, 1e4, () => (this.Ko() && (this.state = 3), Promise.resolve())), this.listener.uo()));
    }), this.stream.ao((t2) => {
      n(() => this.tu(t2));
    }), this.stream.onMessage((t2) => {
      n(() => this.onMessage(t2));
    });
  }
  Go() {
    this.state = 5, this.qo.No(() => __async(this, null, function* () {
      this.state = 0, this.start();
    }));
  }
  // Visible for tests
  tu(t) {
    return N2("PersistentStream", `close with error: ${t}`), this.stream = null, this.close(4, t);
  }
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  Xo(t) {
    return (e) => {
      this.ii.enqueueAndForget(() => this.Fo === t ? e() : (N2("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
};
var qu = class extends Lu {
  constructor(t, e, n, s, i, r2) {
    super(t, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, n, s, r2), this.serializer = i;
  }
  eu(t, e) {
    return this.connection.Ro("Listen", t, e);
  }
  onMessage(t) {
    this.qo.reset();
    const e = Qi(this.serializer, t), n = function(t2) {
      if (!("targetChange" in t2)) return rt.min();
      const e2 = t2.targetChange;
      return e2.targetIds && e2.targetIds.length ? rt.min() : e2.readTime ? Ni(e2.readTime) : rt.min();
    }(t);
    return this.listener.nu(e, n);
  }
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  su(t) {
    const e = {};
    e.database = Li(this.serializer), e.addTarget = function(t2, e2) {
      let n2;
      const s = e2.target;
      if (n2 = Fn(s) ? {
        documents: Hi(t2, s)
      } : {
        query: Ji(t2, s)
      }, n2.targetId = e2.targetId, e2.resumeToken.approximateByteSize() > 0) {
        n2.resumeToken = Ci(t2, e2.resumeToken);
        const s2 = Si(t2, e2.expectedCount);
        null !== s2 && (n2.expectedCount = s2);
      } else if (e2.snapshotVersion.compareTo(rt.min()) > 0) {
        n2.readTime = Di(t2, e2.snapshotVersion.toTimestamp());
        const s2 = Si(t2, e2.expectedCount);
        null !== s2 && (n2.expectedCount = s2);
      }
      return n2;
    }(this.serializer, t);
    const n = Xi(this.serializer, t);
    n && (e.labels = n), this.Wo(e);
  }
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  iu(t) {
    const e = {};
    e.database = Li(this.serializer), e.removeTarget = t, this.Wo(e);
  }
};
var Uu = class extends Lu {
  constructor(t, e, n, s, i, r2) {
    super(t, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", e, n, s, r2), this.serializer = i, this.ru = false;
  }
  /**
   * Tracks whether or not a handshake has been successfully exchanged and
   * the stream is ready to accept mutations.
   */
  get ou() {
    return this.ru;
  }
  // Override of PersistentStream.start
  start() {
    this.ru = false, this.lastStreamToken = void 0, super.start();
  }
  Yo() {
    this.ru && this.uu([]);
  }
  eu(t, e) {
    return this.connection.Ro("Write", t, e);
  }
  onMessage(t) {
    if (
      // Always capture the last stream token.
      F2(!!t.streamToken), this.lastStreamToken = t.streamToken, this.ru
    ) {
      this.qo.reset();
      const e = Wi(t.writeResults, t.commitTime), n = Ni(t.commitTime);
      return this.listener.cu(n, e);
    }
    return F2(!t.writeResults || 0 === t.writeResults.length), this.ru = true, this.listener.au();
  }
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  hu() {
    const t = {};
    t.database = Li(this.serializer), this.Wo(t);
  }
  /** Sends a group of mutations to the Firestore backend to apply. */
  uu(t) {
    const e = {
      streamToken: this.lastStreamToken,
      writes: t.map((t2) => ji(this.serializer, t2))
    };
    this.Wo(e);
  }
};
var Ku = class extends class {
} {
  constructor(t, e, n, s) {
    super(), this.authCredentials = t, this.appCheckCredentials = e, this.connection = n, this.serializer = s, this.lu = false;
  }
  fu() {
    if (this.lu) throw new U2(q2.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  Io(t, e, n) {
    return this.fu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, i]) => this.connection.Io(t, e, n, s, i)).catch((t2) => {
      throw "FirebaseError" === t2.name ? (t2.code === q2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t2) : new U2(q2.UNKNOWN, t2.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  vo(t, e, n, s) {
    return this.fu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, r2]) => this.connection.vo(t, e, n, i, r2, s)).catch((t2) => {
      throw "FirebaseError" === t2.name ? (t2.code === q2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t2) : new U2(q2.UNKNOWN, t2.toString());
    });
  }
  terminate() {
    this.lu = true;
  }
};
function Gu(t, e, n) {
  return __async(this, null, function* () {
    var s;
    const i = L(t), {
      request: r2,
      du: o
    } = function(t2, e2, n2) {
      const s2 = Ji(t2, e2), i2 = {}, r3 = [];
      let o2 = 0;
      return n2.forEach((t3) => {
        const e3 = "aggregate_" + o2++;
        i2[e3] = t3.alias, "count" === t3.yt ? r3.push({
          alias: e3,
          count: {}
        }) : "avg" === t3.yt ? r3.push({
          alias: e3,
          avg: {
            field: sr(t3.fieldPath)
          }
        }) : "sum" === t3.yt && r3.push({
          alias: e3,
          sum: {
            field: sr(t3.fieldPath)
          }
        });
      }), {
        request: {
          structuredAggregationQuery: {
            aggregations: r3,
            structuredQuery: s2.structuredQuery
          },
          parent: s2.parent
        },
        du: i2
      };
    }(i.serializer, Jn(e), n), u = r2.parent;
    i.connection.po || delete r2.parent;
    const c = (yield i.vo(
      "RunAggregationQuery",
      u,
      r2,
      /*expectedResponseCount=*/
      1
    )).filter((t2) => !!t2.result);
    F2(1 === c.length);
    const a = null === (s = c[0].result) || void 0 === s ? void 0 : s.aggregateFields;
    return Object.keys(a).reduce((t2, e2) => (t2[o[e2]] = a[e2], t2), {});
  });
}
var Qu = class {
  constructor(t, e) {
    this.asyncQueue = t, this.onlineStateHandler = e, /** The current OnlineState. */
    this.state = "Unknown", /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    this.wu = 0, /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    this._u = null, /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    this.mu = true;
  }
  /**
   * Called by RemoteStore when a watch stream is started (including on each
   * backoff attempt).
   *
   * If this is the first attempt, it sets the OnlineState to Unknown and starts
   * the onlineStateTimer.
   */
  gu() {
    0 === this.wu && (this.yu(
      "Unknown"
      /* OnlineState.Unknown */
    ), this._u = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this._u = null, this.pu("Backend didn't respond within 10 seconds."), this.yu(
      "Offline"
      /* OnlineState.Offline */
    ), Promise.resolve())));
  }
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  Iu(t) {
    "Online" === this.state ? this.yu(
      "Unknown"
      /* OnlineState.Unknown */
    ) : (this.wu++, this.wu >= 1 && (this.Tu(), this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`), this.yu(
      "Offline"
      /* OnlineState.Offline */
    )));
  }
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  set(t) {
    this.Tu(), this.wu = 0, "Online" === t && // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    (this.mu = false), this.yu(t);
  }
  yu(t) {
    t !== this.state && (this.state = t, this.onlineStateHandler(t));
  }
  pu(t) {
    const e = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.mu ? (k2(e), this.mu = false) : N2("OnlineStateTracker", e);
  }
  Tu() {
    null !== this._u && (this._u.cancel(), this._u = null);
  }
};
var ju = class {
  constructor(t, e, n, s, i) {
    this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    this.Eu = [], /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    this.Au = /* @__PURE__ */ new Map(), /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    this.vu = /* @__PURE__ */ new Set(), /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    this.Ru = [], this.Pu = i, this.Pu.Yr((t2) => {
      n.enqueueAndForget(() => __async(this, null, function* () {
        ec2(this) && (N2("RemoteStore", "Restarting streams for network reachability change."), yield function(t3) {
          return __async(this, null, function* () {
            const e2 = L(t3);
            e2.vu.add(
              4
              /* OfflineCause.ConnectivityChange */
            ), yield Wu(e2), e2.bu.set(
              "Unknown"
              /* OnlineState.Unknown */
            ), e2.vu.delete(
              4
              /* OfflineCause.ConnectivityChange */
            ), yield zu(e2);
          });
        }(this));
      }));
    }), this.bu = new Qu(n, s);
  }
};
function zu(t) {
  return __async(this, null, function* () {
    if (ec2(t)) for (const e of t.Ru) yield e(
      /* enabled= */
      true
    );
  });
}
function Wu(t) {
  return __async(this, null, function* () {
    for (const e of t.Ru) yield e(
      /* enabled= */
      false
    );
  });
}
function Hu(t, e) {
  const n = L(t);
  n.Au.has(e.targetId) || // Mark this as something the client is currently listening for.
  (n.Au.set(e.targetId, e), tc2(n) ? (
    // The listen will be sent in onWatchStreamOpen
    Zu(n)
  ) : pc2(n).Ko() && Yu(n, e));
}
function Ju(t, e) {
  const n = L(t), s = pc2(n);
  n.Au.delete(e), s.Ko() && Xu(n, e), 0 === n.Au.size && (s.Ko() ? s.jo() : ec2(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  n.bu.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function Yu(t, e) {
  if (t.Vu.qt(e.targetId), e.resumeToken.approximateByteSize() > 0 || e.snapshotVersion.compareTo(rt.min()) > 0) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(n);
  }
  pc2(t).su(e);
}
function Xu(t, e) {
  t.Vu.qt(e), pc2(t).iu(e);
}
function Zu(t) {
  t.Vu = new Ei({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    le: (e) => t.Au.get(e) || null,
    ue: () => t.datastore.serializer.databaseId
  }), pc2(t).start(), t.bu.gu();
}
function tc2(t) {
  return ec2(t) && !pc2(t).Uo() && t.Au.size > 0;
}
function ec2(t) {
  return 0 === L(t).vu.size;
}
function nc2(t) {
  t.Vu = void 0;
}
function sc2(t) {
  return __async(this, null, function* () {
    t.Au.forEach((e, n) => {
      Yu(t, e);
    });
  });
}
function ic2(t, e) {
  return __async(this, null, function* () {
    nc2(t), // If we still need the watch stream, retry the connection.
    tc2(t) ? (t.bu.Iu(e), Zu(t)) : (
      // No need to restart watch stream because there are no active targets.
      // The online state is set to unknown because there is no active attempt
      // at establishing a connection
      t.bu.set(
        "Unknown"
        /* OnlineState.Unknown */
      )
    );
  });
}
function rc2(t, e, n) {
  return __async(this, null, function* () {
    if (
      // Mark the client as online since we got a message from the server
      t.bu.set(
        "Online"
        /* OnlineState.Online */
      ), e instanceof Ii && 2 === e.state && e.cause
    )
      try {
        yield (
          /** Handles an error on a target */
          function(t2, e2) {
            return __async(this, null, function* () {
              const n2 = e2.cause;
              for (const s of e2.targetIds)
                t2.Au.has(s) && (yield t2.remoteSyncer.rejectListen(s, n2), t2.Au.delete(s), t2.Vu.removeTarget(s));
            });
          }(t, e)
        );
      } catch (n2) {
        N2("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n2), yield oc2(t, n2);
      }
    else if (e instanceof yi ? t.Vu.Ht(e) : e instanceof pi ? t.Vu.ne(e) : t.Vu.Xt(e), !n.isEqual(rt.min())) try {
      const e2 = yield ou(t.localStore);
      n.compareTo(e2) >= 0 && // We have received a target change with a global snapshot if the snapshot
      // version is not equal to SnapshotVersion.min().
      (yield (
        /**
        * Takes a batch of changes from the Datastore, repackages them as a
        * RemoteEvent, and passes that on to the listener, which is typically the
        * SyncEngine.
        */
        function(t2, e3) {
          const n2 = t2.Vu.ce(e3);
          return n2.targetChanges.forEach((n3, s) => {
            if (n3.resumeToken.approximateByteSize() > 0) {
              const i = t2.Au.get(s);
              i && t2.Au.set(s, i.withResumeToken(n3.resumeToken, e3));
            }
          }), // Re-establish listens for the targets that have been invalidated by
          // existence filter mismatches.
          n2.targetMismatches.forEach((e4, n3) => {
            const s = t2.Au.get(e4);
            if (!s)
              return;
            t2.Au.set(e4, s.withResumeToken(Ve.EMPTY_BYTE_STRING, s.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
            // deliberately don't send a resume token so that we get a full update.
            Xu(t2, e4);
            const i = new cr(s.target, e4, n3, s.sequenceNumber);
            Yu(t2, i);
          }), t2.remoteSyncer.applyRemoteEvent(n2);
        }(t, n)
      ));
    } catch (e2) {
      N2("RemoteStore", "Failed to raise snapshot:", e2), yield oc2(t, e2);
    }
  });
}
function oc2(t, e, n) {
  return __async(this, null, function* () {
    if (!Dt(e)) throw e;
    t.vu.add(
      1
      /* OfflineCause.IndexedDbFailed */
    ), // Disable network and raise offline snapshots
    yield Wu(t), t.bu.set(
      "Offline"
      /* OnlineState.Offline */
    ), n || // Use a simple read operation to determine if IndexedDB recovered.
    // Ideally, we would expose a health check directly on SimpleDb, but
    // RemoteStore only has access to persistence through LocalStore.
    (n = () => ou(t.localStore)), // Probe IndexedDB periodically and re-enable network
    t.asyncQueue.enqueueRetryable(() => __async(this, null, function* () {
      N2("RemoteStore", "Retrying IndexedDB access"), yield n(), t.vu.delete(
        1
        /* OfflineCause.IndexedDbFailed */
      ), yield zu(t);
    }));
  });
}
function uc2(t, e) {
  return e().catch((n) => oc2(t, n, e));
}
function cc2(t) {
  return __async(this, null, function* () {
    const e = L(t), n = Ic2(e);
    let s = e.Eu.length > 0 ? e.Eu[e.Eu.length - 1].batchId : -1;
    for (; ac2(e); ) try {
      const t2 = yield au(e.localStore, s);
      if (null === t2) {
        0 === e.Eu.length && n.jo();
        break;
      }
      s = t2.batchId, hc2(e, t2);
    } catch (t2) {
      yield oc2(e, t2);
    }
    lc2(e) && fc2(e);
  });
}
function ac2(t) {
  return ec2(t) && t.Eu.length < 10;
}
function hc2(t, e) {
  t.Eu.push(e);
  const n = Ic2(t);
  n.Ko() && n.ou && n.uu(e.mutations);
}
function lc2(t) {
  return ec2(t) && !Ic2(t).Uo() && t.Eu.length > 0;
}
function fc2(t) {
  Ic2(t).start();
}
function dc2(t) {
  return __async(this, null, function* () {
    Ic2(t).hu();
  });
}
function wc2(t) {
  return __async(this, null, function* () {
    const e = Ic2(t);
    for (const n of t.Eu) e.uu(n.mutations);
  });
}
function _c(t, e, n) {
  return __async(this, null, function* () {
    const s = t.Eu.shift(), i = ti.from(s, e, n);
    yield uc2(t, () => t.remoteSyncer.applySuccessfulWrite(i)), // It's possible that with the completion of this mutation another
    // slot has freed up.
    yield cc2(t);
  });
}
function mc2(t, e) {
  return __async(this, null, function* () {
    e && Ic2(t).ou && // This error affects the actual write.
    (yield function(t2, e2) {
      return __async(this, null, function* () {
        if (n = e2.code, oi(n) && n !== q2.ABORTED) {
          const n2 = t2.Eu.shift();
          Ic2(t2).Qo(), yield uc2(t2, () => t2.remoteSyncer.rejectFailedWrite(n2.batchId, e2)), // It's possible that with the completion of this mutation
          // another slot has freed up.
          yield cc2(t2);
        }
        var n;
      });
    }(t, e)), // The write stream might have been started by refilling the write
    // pipeline for failed writes
    lc2(t) && fc2(t);
  });
}
function gc2(t, e) {
  return __async(this, null, function* () {
    const n = L(t);
    n.asyncQueue.verifyOperationInProgress(), N2("RemoteStore", "RemoteStore received new credentials");
    const s = ec2(n);
    n.vu.add(
      3
      /* OfflineCause.CredentialChange */
    ), yield Wu(n), s && // Don't set the network status to Unknown if we are offline.
    n.bu.set(
      "Unknown"
      /* OnlineState.Unknown */
    ), yield n.remoteSyncer.handleCredentialChange(e), n.vu.delete(
      3
      /* OfflineCause.CredentialChange */
    ), yield zu(n);
  });
}
function yc2(t, e) {
  return __async(this, null, function* () {
    const n = L(t);
    e ? (n.vu.delete(
      2
      /* OfflineCause.IsSecondary */
    ), yield zu(n)) : e || (n.vu.add(
      2
      /* OfflineCause.IsSecondary */
    ), yield Wu(n), n.bu.set(
      "Unknown"
      /* OnlineState.Unknown */
    ));
  });
}
function pc2(t) {
  return t.Su || // Create stream (but note that it is not started yet).
  (t.Su = function(t2, e, n) {
    const s = L(t2);
    return s.fu(), new qu(e, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, n);
  }(t.datastore, t.asyncQueue, {
    uo: sc2.bind(null, t),
    ao: ic2.bind(null, t),
    nu: rc2.bind(null, t)
  }), t.Ru.push((e) => __async(this, null, function* () {
    e ? (t.Su.Qo(), tc2(t) ? Zu(t) : t.bu.set(
      "Unknown"
      /* OnlineState.Unknown */
    )) : (yield t.Su.stop(), nc2(t));
  }))), t.Su;
}
function Ic2(t) {
  return t.Du || // Create stream (but note that it is not started yet).
  (t.Du = function(t2, e, n) {
    const s = L(t2);
    return s.fu(), new Uu(e, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, n);
  }(t.datastore, t.asyncQueue, {
    uo: dc2.bind(null, t),
    ao: mc2.bind(null, t),
    au: wc2.bind(null, t),
    cu: _c.bind(null, t)
  }), t.Ru.push((e) => __async(this, null, function* () {
    e ? (t.Du.Qo(), // This will start the write stream if necessary.
    yield cc2(t)) : (yield t.Du.stop(), t.Eu.length > 0 && (N2("RemoteStore", `Stopping write stream with ${t.Eu.length} pending writes`), t.Eu = []));
  }))), t.Du;
}
var Tc2 = class _Tc {
  constructor(t, e, n, s, i) {
    this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, this.deferred = new K2(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((t2) => {
    });
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(t, e, n, s, i) {
    const r2 = Date.now() + n, o = new _Tc(t, e, r2, s, i);
    return o.start(n), o;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(t) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new U2(q2.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
};
function Ec2(t, e) {
  if (k2("AsyncQueue", `${e}: ${t}`), Dt(t)) return new U2(q2.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
var Ac2 = class _Ac {
  /** The default ordering is by key if the comparator is omitted */
  constructor(t) {
    this.comparator = t ? (e, n) => t(e, n) || ht.comparator(e.key, n.key) : (t2, e) => ht.comparator(t2.key, e.key), this.keyedMap = hs(), this.sortedSet = new pe(this.comparator);
  }
  /**
   * Returns an empty copy of the existing DocumentSet, using the same
   * comparator.
   */
  static emptySet(t) {
    return new _Ac(t.comparator);
  }
  has(t) {
    return null != this.keyedMap.get(t);
  }
  get(t) {
    return this.keyedMap.get(t);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  indexOf(t) {
    const e = this.keyedMap.get(t);
    return e ? this.sortedSet.indexOf(e) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  /** Iterates documents in order defined by "comparator" */
  forEach(t) {
    this.sortedSet.inorderTraversal((e, n) => (t(e), false));
  }
  /** Inserts or updates a document with the same key */
  add(t) {
    const e = this.delete(t.key);
    return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
  }
  /** Deletes a document with a given key */
  delete(t) {
    const e = this.get(t);
    return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
  }
  isEqual(t) {
    if (!(t instanceof _Ac)) return false;
    if (this.size !== t.size) return false;
    const e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator();
    for (; e.hasNext(); ) {
      const t2 = e.getNext().key, s = n.getNext().key;
      if (!t2.isEqual(s)) return false;
    }
    return true;
  }
  toString() {
    const t = [];
    return this.forEach((e) => {
      t.push(e.toString());
    }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
  }
  copy(t, e) {
    const n = new _Ac();
    return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n;
  }
};
var vc2 = class {
  constructor() {
    this.Cu = new pe(ht.comparator);
  }
  track(t) {
    const e = t.doc.key, n = this.Cu.get(e);
    n ? (
      // Merge the new change with the existing change.
      0 !== t.type && 3 === n.type ? this.Cu = this.Cu.insert(e, t) : 3 === t.type && 1 !== n.type ? this.Cu = this.Cu.insert(e, {
        type: n.type,
        doc: t.doc
      }) : 2 === t.type && 2 === n.type ? this.Cu = this.Cu.insert(e, {
        type: 2,
        doc: t.doc
      }) : 2 === t.type && 0 === n.type ? this.Cu = this.Cu.insert(e, {
        type: 0,
        doc: t.doc
      }) : 1 === t.type && 0 === n.type ? this.Cu = this.Cu.remove(e) : 1 === t.type && 2 === n.type ? this.Cu = this.Cu.insert(e, {
        type: 1,
        doc: n.doc
      }) : 0 === t.type && 1 === n.type ? this.Cu = this.Cu.insert(e, {
        type: 2,
        doc: t.doc
      }) : (
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        O2()
      )
    ) : this.Cu = this.Cu.insert(e, t);
  }
  xu() {
    const t = [];
    return this.Cu.inorderTraversal((e, n) => {
      t.push(n);
    }), t;
  }
};
var Rc2 = class _Rc {
  constructor(t, e, n, s, i, r2, o, u, c) {
    this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = s, this.mutatedKeys = i, this.fromCache = r2, this.syncStateChanged = o, this.excludesMetadataChanges = u, this.hasCachedResults = c;
  }
  /** Returns a view snapshot as if all documents in the snapshot were added. */
  static fromInitialDocuments(t, e, n, s, i) {
    const r2 = [];
    return e.forEach((t2) => {
      r2.push({
        type: 0,
        doc: t2
      });
    }), new _Rc(
      t,
      e,
      Ac2.emptySet(e),
      r2,
      n,
      s,
      /* syncStateChanged= */
      true,
      /* excludesMetadataChanges= */
      false,
      i
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t) {
    if (!(this.fromCache === t.fromCache && this.hasCachedResults === t.hasCachedResults && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && Zn(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return false;
    const e = this.docChanges, n = t.docChanges;
    if (e.length !== n.length) return false;
    for (let t2 = 0; t2 < e.length; t2++) if (e[t2].type !== n[t2].type || !e[t2].doc.isEqual(n[t2].doc)) return false;
    return true;
  }
};
var Pc2 = class {
  constructor() {
    this.Nu = void 0, this.listeners = [];
  }
};
var bc2 = class {
  constructor() {
    this.queries = new os((t) => ts(t), Zn), this.onlineState = "Unknown", this.ku = /* @__PURE__ */ new Set();
  }
};
function Vc2(t, e) {
  return __async(this, null, function* () {
    const n = L(t), s = e.query;
    let i = false, r2 = n.queries.get(s);
    if (r2 || (i = true, r2 = new Pc2()), i) try {
      r2.Nu = yield n.onListen(s);
    } catch (t2) {
      const n2 = Ec2(t2, `Initialization of query '${es(e.query)}' failed`);
      return void e.onError(n2);
    }
    if (n.queries.set(s, r2), r2.listeners.push(e), // Run global snapshot listeners if a consistent snapshot has been emitted.
    e.Mu(n.onlineState), r2.Nu) {
      e.$u(r2.Nu) && xc2(n);
    }
  });
}
function Sc2(t, e) {
  return __async(this, null, function* () {
    const n = L(t), s = e.query;
    let i = false;
    const r2 = n.queries.get(s);
    if (r2) {
      const t2 = r2.listeners.indexOf(e);
      t2 >= 0 && (r2.listeners.splice(t2, 1), i = 0 === r2.listeners.length);
    }
    if (i) return n.queries.delete(s), n.onUnlisten(s);
  });
}
function Dc2(t, e) {
  const n = L(t);
  let s = false;
  for (const t2 of e) {
    const e2 = t2.query, i = n.queries.get(e2);
    if (i) {
      for (const e3 of i.listeners) e3.$u(t2) && (s = true);
      i.Nu = t2;
    }
  }
  s && xc2(n);
}
function Cc2(t, e, n) {
  const s = L(t), i = s.queries.get(e);
  if (i) for (const t2 of i.listeners) t2.onError(n);
  s.queries.delete(e);
}
function xc2(t) {
  t.ku.forEach((t2) => {
    t2.next();
  });
}
var Nc2 = class {
  constructor(t, e, n) {
    this.query = t, this.Ou = e, /**
     * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
     * observer. This flag is set to true once we've actually raised an event.
     */
    this.Fu = false, this.Bu = null, this.onlineState = "Unknown", this.options = n || {};
  }
  /**
   * Applies the new ViewSnapshot to this listener, raising a user-facing event
   * if applicable (depending on what changed, whether the user has opted into
   * metadata-only changes, etc.). Returns true if a user-facing event was
   * indeed raised.
   */
  $u(t) {
    if (!this.options.includeMetadataChanges) {
      const e2 = [];
      for (const n of t.docChanges) 3 !== n.type && e2.push(n);
      t = new Rc2(
        t.query,
        t.docs,
        t.oldDocs,
        e2,
        t.mutatedKeys,
        t.fromCache,
        t.syncStateChanged,
        /* excludesMetadataChanges= */
        true,
        t.hasCachedResults
      );
    }
    let e = false;
    return this.Fu ? this.Lu(t) && (this.Ou.next(t), e = true) : this.qu(t, this.onlineState) && (this.Uu(t), e = true), this.Bu = t, e;
  }
  onError(t) {
    this.Ou.error(t);
  }
  /** Returns whether a snapshot was raised. */
  Mu(t) {
    this.onlineState = t;
    let e = false;
    return this.Bu && !this.Fu && this.qu(this.Bu, t) && (this.Uu(this.Bu), e = true), e;
  }
  qu(t, e) {
    if (!t.fromCache) return true;
    const n = "Offline" !== e;
    return (!this.options.Ku || !n) && (!t.docs.isEmpty() || t.hasCachedResults || "Offline" === e);
  }
  Lu(t) {
    if (t.docChanges.length > 0) return true;
    const e = this.Bu && this.Bu.hasPendingWrites !== t.hasPendingWrites;
    return !(!t.syncStateChanged && !e) && true === this.options.includeMetadataChanges;
  }
  Uu(t) {
    t = Rc2.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache, t.hasCachedResults), this.Fu = true, this.Ou.next(t);
  }
};
var kc2 = class {
  constructor(t, e) {
    this.Gu = t, this.byteLength = e;
  }
  Qu() {
    return "metadata" in this.Gu;
  }
};
var Mc2 = class {
  constructor(t) {
    this.serializer = t;
  }
  rr(t) {
    return Oi(this.serializer, t);
  }
  /**
   * Converts a BundleDocument to a MutableDocument.
   */
  ur(t) {
    return t.metadata.exists ? Ki(this.serializer, t.document, false) : an.newNoDocument(this.rr(t.metadata.name), this.cr(t.metadata.readTime));
  }
  cr(t) {
    return Ni(t);
  }
};
var $c2 = class {
  constructor(t, e, n) {
    this.ju = t, this.localStore = e, this.serializer = n, /** Batched queries to be saved into storage */
    this.queries = [], /** Batched documents to be saved into storage */
    this.documents = [], /** The collection groups affected by this bundle. */
    this.collectionGroups = /* @__PURE__ */ new Set(), this.progress = Oc2(t);
  }
  /**
   * Adds an element from the bundle to the loader.
   *
   * Returns a new progress if adding the element leads to a new progress,
   * otherwise returns null.
   */
  zu(t) {
    this.progress.bytesLoaded += t.byteLength;
    let e = this.progress.documentsLoaded;
    if (t.Gu.namedQuery) this.queries.push(t.Gu.namedQuery);
    else if (t.Gu.documentMetadata) {
      this.documents.push({
        metadata: t.Gu.documentMetadata
      }), t.Gu.documentMetadata.exists || ++e;
      const n = ut.fromString(t.Gu.documentMetadata.name);
      this.collectionGroups.add(n.get(n.length - 2));
    } else t.Gu.document && (this.documents[this.documents.length - 1].document = t.Gu.document, ++e);
    return e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign({}, this.progress)) : null;
  }
  Wu(t) {
    const e = /* @__PURE__ */ new Map(), n = new Mc2(this.serializer);
    for (const s of t) if (s.metadata.queries) {
      const t2 = n.rr(s.metadata.name);
      for (const n2 of s.metadata.queries) {
        const s2 = (e.get(n2) || gs()).add(t2);
        e.set(n2, s2);
      }
    }
    return e;
  }
  /**
   * Update the progress to 'Success' and return the updated progress.
   */
  complete() {
    return __async(this, null, function* () {
      const t = yield mu(this.localStore, new Mc2(this.serializer), this.documents, this.ju.id), e = this.Wu(this.documents);
      for (const t2 of this.queries) yield gu(this.localStore, t2, e.get(t2.name));
      return this.progress.taskState = "Success", {
        progress: this.progress,
        Hu: this.collectionGroups,
        Ju: t
      };
    });
  }
};
function Oc2(t) {
  return {
    taskState: "Running",
    documentsLoaded: 0,
    bytesLoaded: 0,
    totalDocuments: t.totalDocuments,
    totalBytes: t.totalBytes
  };
}
var Fc2 = class {
  constructor(t) {
    this.key = t;
  }
};
var Bc2 = class {
  constructor(t) {
    this.key = t;
  }
};
var Lc2 = class {
  constructor(t, e) {
    this.query = t, this.Yu = e, this.Xu = null, this.hasCachedResults = false, /**
     * A flag whether the view is current with the backend. A view is considered
     * current after it has seen the current flag from the backend and did not
     * lose consistency within the watch stream (e.g. because of an existence
     * filter mismatch).
     */
    this.current = false, /** Documents in the view but not in the remote target */
    this.Zu = gs(), /** Document Keys that have local changes */
    this.mutatedKeys = gs(), this.tc = is(t), this.ec = new Ac2(this.tc);
  }
  /**
   * The set of remote documents that the server has told us belongs to the target associated with
   * this view.
   */
  get nc() {
    return this.Yu;
  }
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges - The doc changes to apply to this view.
   * @param previousChanges - If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @returns a new set of docs, changes, and refill flag.
   */
  sc(t, e) {
    const n = e ? e.ic : new vc2(), s = e ? e.ec : this.ec;
    let i = e ? e.mutatedKeys : this.mutatedKeys, r2 = s, o = false;
    const u = "F" === this.query.limitType && s.size === this.query.limit ? s.last() : null, c = "L" === this.query.limitType && s.size === this.query.limit ? s.first() : null;
    if (t.inorderTraversal((t2, e2) => {
      const a = s.get(t2), h = ns(this.query, e2) ? e2 : null, l2 = !!a && this.mutatedKeys.has(a.key), f = !!h && (h.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
      let d = false;
      if (a && h) {
        a.data.isEqual(h.data) ? l2 !== f && (n.track({
          type: 3,
          doc: h
        }), d = true) : this.rc(a, h) || (n.track({
          type: 2,
          doc: h
        }), d = true, (u && this.tc(h, u) > 0 || c && this.tc(h, c) < 0) && // This doc moved from inside the limit to outside the limit.
        // That means there may be some other doc in the local cache
        // that should be included instead.
        (o = true));
      } else !a && h ? (n.track({
        type: 0,
        doc: h
      }), d = true) : a && !h && (n.track({
        type: 1,
        doc: a
      }), d = true, (u || c) && // A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      (o = true));
      d && (h ? (r2 = r2.add(h), i = f ? i.add(t2) : i.delete(t2)) : (r2 = r2.delete(t2), i = i.delete(t2)));
    }), null !== this.query.limit) for (; r2.size > this.query.limit; ) {
      const t2 = "F" === this.query.limitType ? r2.last() : r2.first();
      r2 = r2.delete(t2.key), i = i.delete(t2.key), n.track({
        type: 1,
        doc: t2
      });
    }
    return {
      ec: r2,
      ic: n,
      zi: o,
      mutatedKeys: i
    };
  }
  rc(t, e) {
    return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
  }
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges - The set of changes to make to the view's docs.
   * @param updateLimboDocuments - Whether to update limbo documents based on
   *        this change.
   * @param targetChange - A target change to apply for computing limbo docs and
   *        sync state.
   * @returns A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  applyChanges(t, e, n) {
    const s = this.ec;
    this.ec = t.ec, this.mutatedKeys = t.mutatedKeys;
    const i = t.ic.xu();
    i.sort((t2, e2) => function(t3, e3) {
      const n2 = (t4) => {
        switch (t4) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return O2();
        }
      };
      return n2(t3) - n2(e3);
    }(t2.type, e2.type) || this.tc(t2.doc, e2.doc)), this.oc(n);
    const r2 = e ? this.uc() : [], o = 0 === this.Zu.size && this.current ? 1 : 0, u = o !== this.Xu;
    if (this.Xu = o, 0 !== i.length || u) {
      return {
        snapshot: new Rc2(
          this.query,
          t.ec,
          s,
          i,
          t.mutatedKeys,
          0 === o,
          u,
          /* excludesMetadataChanges= */
          false,
          !!n && n.resumeToken.approximateByteSize() > 0
        ),
        cc: r2
      };
    }
    return {
      cc: r2
    };
  }
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  Mu(t) {
    return this.current && "Offline" === t ? (
      // If we're offline, set `current` to false and then call applyChanges()
      // to refresh our syncState and generate a ViewChange as appropriate. We
      // are guaranteed to get a new TargetChange that sets `current` back to
      // true once the client is back online.
      (this.current = false, this.applyChanges(
        {
          ec: this.ec,
          ic: new vc2(),
          mutatedKeys: this.mutatedKeys,
          zi: false
        },
        /* updateLimboDocuments= */
        false
      ))
    ) : {
      cc: []
    };
  }
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  ac(t) {
    return !this.Yu.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.ec.has(t) && !this.ec.get(t).hasLocalMutations;
  }
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  oc(t) {
    t && (t.addedDocuments.forEach((t2) => this.Yu = this.Yu.add(t2)), t.modifiedDocuments.forEach((t2) => {
    }), t.removedDocuments.forEach((t2) => this.Yu = this.Yu.delete(t2)), this.current = t.current);
  }
  uc() {
    if (!this.current) return [];
    const t = this.Zu;
    this.Zu = gs(), this.ec.forEach((t2) => {
      this.ac(t2.key) && (this.Zu = this.Zu.add(t2.key));
    });
    const e = [];
    return t.forEach((t2) => {
      this.Zu.has(t2) || e.push(new Bc2(t2));
    }), this.Zu.forEach((n) => {
      t.has(n) || e.push(new Fc2(n));
    }), e;
  }
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @returns The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  hc(t) {
    this.Yu = t.ir, this.Zu = gs();
    const e = this.sc(t.documents);
    return this.applyChanges(
      e,
      /*updateLimboDocuments=*/
      true
    );
  }
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  lc() {
    return Rc2.fromInitialDocuments(this.query, this.ec, this.mutatedKeys, 0 === this.Xu, this.hasCachedResults);
  }
};
var qc2 = class {
  constructor(t, e, n) {
    this.query = t, this.targetId = e, this.view = n;
  }
};
var Uc2 = class {
  constructor(t) {
    this.key = t, /**
     * Set to true once we've received a document. This is used in
     * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
     * decide whether it needs to manufacture a delete event for the target once
     * the target is CURRENT.
     */
    this.fc = false;
  }
};
var Kc2 = class {
  constructor(t, e, n, s, i, r2) {
    this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = s, this.currentUser = i, this.maxConcurrentLimboResolutions = r2, this.dc = {}, this.wc = new os((t2) => ts(t2), Zn), this._c = /* @__PURE__ */ new Map(), /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    this.mc = /* @__PURE__ */ new Set(), /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    this.gc = new pe(ht.comparator), /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    this.yc = /* @__PURE__ */ new Map(), this.Ic = new Oo(), /** Stores user completion handlers, indexed by User and BatchId. */
    this.Tc = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.Ec = /* @__PURE__ */ new Map(), this.Ac = lo.Mn(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.vc = void 0;
  }
  get isPrimaryClient() {
    return true === this.vc;
  }
};
function Gc2(t, e) {
  return __async(this, null, function* () {
    const n = pa2(t);
    let s, i;
    const r2 = n.wc.get(e);
    if (r2)
      s = r2.targetId, n.sharedClientState.addLocalQueryTarget(s), i = r2.view.lc();
    else {
      const t2 = yield hu(n.localStore, Jn(e)), r3 = n.sharedClientState.addLocalQueryTarget(t2.targetId);
      s = t2.targetId, i = yield Qc2(n, e, s, "current" === r3, t2.resumeToken), n.isPrimaryClient && Hu(n.remoteStore, t2);
    }
    return i;
  });
}
function Qc2(t, e, n, s, i) {
  return __async(this, null, function* () {
    t.Rc = (e2, n2, s2) => function(t2, e3, n3, s3) {
      return __async(this, null, function* () {
        let i2 = e3.view.sc(n3);
        i2.zi && // The query has a limit and some docs were removed, so we need
        // to re-run the query against the local store to make sure we
        // didn't lose any good docs that had been past the limit.
        (i2 = yield fu(
          t2.localStore,
          e3.query,
          /* usePreviousResults= */
          false
        ).then(({
          documents: t3
        }) => e3.view.sc(t3, i2)));
        const r3 = s3 && s3.targetChanges.get(e3.targetId), o2 = e3.view.applyChanges(
          i2,
          /* updateLimboDocuments= */
          t2.isPrimaryClient,
          r3
        );
        return ia2(t2, e3.targetId, o2.cc), o2.snapshot;
      });
    }(t, e2, n2, s2);
    const r2 = yield fu(
      t.localStore,
      e,
      /* usePreviousResults= */
      true
    ), o = new Lc2(e, r2.ir), u = o.sc(r2.documents), c = gi.createSynthesizedTargetChangeForCurrentChange(n, s && "Offline" !== t.onlineState, i), a = o.applyChanges(
      u,
      /* updateLimboDocuments= */
      t.isPrimaryClient,
      c
    );
    ia2(t, n, a.cc);
    const h = new qc2(e, n, o);
    return t.wc.set(e, h), t._c.has(n) ? t._c.get(n).push(e) : t._c.set(n, [e]), a.snapshot;
  });
}
function jc2(t, e) {
  return __async(this, null, function* () {
    const n = L(t), s = n.wc.get(e), i = n._c.get(s.targetId);
    if (i.length > 1) return n._c.set(s.targetId, i.filter((t2) => !Zn(t2, e))), void n.wc.delete(e);
    if (n.isPrimaryClient) {
      n.sharedClientState.removeLocalQueryTarget(s.targetId);
      n.sharedClientState.isActiveQueryTarget(s.targetId) || (yield lu(
        n.localStore,
        s.targetId,
        /*keepPersistedTargetData=*/
        false
      ).then(() => {
        n.sharedClientState.clearQueryState(s.targetId), Ju(n.remoteStore, s.targetId), na2(n, s.targetId);
      }).catch(vt));
    } else na2(n, s.targetId), yield lu(
      n.localStore,
      s.targetId,
      /*keepPersistedTargetData=*/
      true
    );
  });
}
function zc2(t, e, n) {
  return __async(this, null, function* () {
    const s = Ia2(t);
    try {
      const t2 = yield function(t3, e2) {
        const n2 = L(t3), s2 = it.now(), i = e2.reduce((t4, e3) => t4.add(e3.key), gs());
        let r2, o;
        return n2.persistence.runTransaction("Locally write mutations", "readwrite", (t4) => {
          let u = cs(), c = gs();
          return n2.Zi.getEntries(t4, i).next((t5) => {
            u = t5, u.forEach((t6, e3) => {
              e3.isValidDocument() || (c = c.add(t6));
            });
          }).next(() => n2.localDocuments.getOverlayedDocuments(t4, u)).next((i2) => {
            r2 = i2;
            const o2 = [];
            for (const t5 of e2) {
              const e3 = Gs(t5, r2.get(t5.key).overlayedDocument);
              null != e3 && // NOTE: The base state should only be applied if there's some
              // existing document to override, so use a Precondition of
              // exists=true
              o2.push(new zs(t5.key, e3, cn(e3.value.mapValue), Fs.exists(true)));
            }
            return n2.mutationQueue.addMutationBatch(t4, s2, o2, e2);
          }).next((e3) => {
            o = e3;
            const s3 = e3.applyToLocalDocumentSet(r2, c);
            return n2.documentOverlayCache.saveOverlays(t4, e3.batchId, s3);
          });
        }).then(() => ({
          batchId: o.batchId,
          changes: ls(r2)
        }));
      }(s.localStore, e);
      s.sharedClientState.addPendingMutation(t2.batchId), function(t3, e2, n2) {
        let s2 = t3.Tc[t3.currentUser.toKey()];
        s2 || (s2 = new pe(et));
        s2 = s2.insert(e2, n2), t3.Tc[t3.currentUser.toKey()] = s2;
      }(s, t2.batchId, n), yield ua2(s, t2.changes), yield cc2(s.remoteStore);
    } catch (t2) {
      const e2 = Ec2(t2, "Failed to persist write");
      n.reject(e2);
    }
  });
}
function Wc2(t, e) {
  return __async(this, null, function* () {
    const n = L(t);
    try {
      const t2 = yield uu(n.localStore, e);
      e.targetChanges.forEach((t3, e2) => {
        const s = n.yc.get(e2);
        s && // Since this is a limbo resolution lookup, it's for a single document
        // and it could be added, modified, or removed, but not a combination.
        (F2(t3.addedDocuments.size + t3.modifiedDocuments.size + t3.removedDocuments.size <= 1), t3.addedDocuments.size > 0 ? s.fc = true : t3.modifiedDocuments.size > 0 ? F2(s.fc) : t3.removedDocuments.size > 0 && (F2(s.fc), s.fc = false));
      }), yield ua2(n, t2, e);
    } catch (t2) {
      yield vt(t2);
    }
  });
}
function Hc2(t, e, n) {
  const s = L(t);
  if (s.isPrimaryClient && 0 === n || !s.isPrimaryClient && 1 === n) {
    const t2 = [];
    s.wc.forEach((n2, s2) => {
      const i = s2.view.Mu(e);
      i.snapshot && t2.push(i.snapshot);
    }), function(t3, e2) {
      const n2 = L(t3);
      n2.onlineState = e2;
      let s2 = false;
      n2.queries.forEach((t4, n3) => {
        for (const t5 of n3.listeners)
          t5.Mu(e2) && (s2 = true);
      }), s2 && xc2(n2);
    }(s.eventManager, e), t2.length && s.dc.nu(t2), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
  }
}
function Jc2(t, e, n) {
  return __async(this, null, function* () {
    const s = L(t);
    s.sharedClientState.updateQueryState(e, "rejected", n);
    const i = s.yc.get(e), r2 = i && i.key;
    if (r2) {
      let t2 = new pe(ht.comparator);
      t2 = t2.insert(r2, an.newNoDocument(r2, rt.min()));
      const n2 = gs().add(r2), i2 = new mi(
        rt.min(),
        /* targetChanges= */
        /* @__PURE__ */ new Map(),
        /* targetMismatches= */
        new pe(et),
        t2,
        n2
      );
      yield Wc2(s, i2), // Since this query failed, we won't want to manually unlisten to it.
      // We only remove it from bookkeeping after we successfully applied the
      // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
      // this query when the RemoteStore restarts the Watch stream, which should
      // re-trigger the target failure.
      s.gc = s.gc.remove(r2), s.yc.delete(e), oa2(s);
    } else yield lu(
      s.localStore,
      e,
      /* keepPersistedTargetData */
      false
    ).then(() => na2(s, e, n)).catch(vt);
  });
}
function Yc2(t, e) {
  return __async(this, null, function* () {
    const n = L(t), s = e.batch.batchId;
    try {
      const t2 = yield ru(n.localStore, e);
      ea2(
        n,
        s,
        /*error=*/
        null
      ), ta2(n, s), n.sharedClientState.updateMutationState(s, "acknowledged"), yield ua2(n, t2);
    } catch (t2) {
      yield vt(t2);
    }
  });
}
function Xc2(t, e, n) {
  return __async(this, null, function* () {
    const s = L(t);
    try {
      const t2 = yield function(t3, e2) {
        const n2 = L(t3);
        return n2.persistence.runTransaction("Reject batch", "readwrite-primary", (t4) => {
          let s2;
          return n2.mutationQueue.lookupMutationBatch(t4, e2).next((e3) => (F2(null !== e3), s2 = e3.keys(), n2.mutationQueue.removeMutationBatch(t4, e3))).next(() => n2.mutationQueue.performConsistencyCheck(t4)).next(() => n2.documentOverlayCache.removeOverlaysForBatchId(t4, s2, e2)).next(() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t4, s2)).next(() => n2.localDocuments.getDocuments(t4, s2));
        });
      }(s.localStore, e);
      ea2(s, e, n), ta2(s, e), s.sharedClientState.updateMutationState(e, "rejected", n), yield ua2(s, t2);
    } catch (n2) {
      yield vt(n2);
    }
  });
}
function Zc2(t, e) {
  return __async(this, null, function* () {
    const n = L(t);
    ec2(n.remoteStore) || N2("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
    try {
      const t2 = yield function(t3) {
        const e2 = L(t3);
        return e2.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (t4) => e2.mutationQueue.getHighestUnacknowledgedBatchId(t4));
      }(n.localStore);
      if (-1 === t2)
        return void e.resolve();
      const s = n.Ec.get(t2) || [];
      s.push(e), n.Ec.set(t2, s);
    } catch (t2) {
      const n2 = Ec2(t2, "Initialization of waitForPendingWrites() operation failed");
      e.reject(n2);
    }
  });
}
function ta2(t, e) {
  (t.Ec.get(e) || []).forEach((t2) => {
    t2.resolve();
  }), t.Ec.delete(e);
}
function ea2(t, e, n) {
  const s = L(t);
  let i = s.Tc[s.currentUser.toKey()];
  if (i) {
    const t2 = i.get(e);
    t2 && (n ? t2.reject(n) : t2.resolve(), i = i.remove(e)), s.Tc[s.currentUser.toKey()] = i;
  }
}
function na2(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const s of t._c.get(e)) t.wc.delete(s), n && t.dc.Pc(s, n);
  if (t._c.delete(e), t.isPrimaryClient) {
    t.Ic.Is(e).forEach((e2) => {
      t.Ic.containsKey(e2) || // We removed the last reference for this key
      sa2(t, e2);
    });
  }
}
function sa2(t, e) {
  t.mc.delete(e.path.canonicalString());
  const n = t.gc.get(e);
  null !== n && (Ju(t.remoteStore, n), t.gc = t.gc.remove(e), t.yc.delete(n), oa2(t));
}
function ia2(t, e, n) {
  for (const s of n) if (s instanceof Fc2) t.Ic.addReference(s.key, e), ra2(t, s);
  else if (s instanceof Bc2) {
    N2("SyncEngine", "Document no longer in limbo: " + s.key), t.Ic.removeReference(s.key, e);
    t.Ic.containsKey(s.key) || // We removed the last reference for this key
    sa2(t, s.key);
  } else O2();
}
function ra2(t, e) {
  const n = e.key, s = n.path.canonicalString();
  t.gc.get(n) || t.mc.has(s) || (N2("SyncEngine", "New document in limbo: " + n), t.mc.add(s), oa2(t));
}
function oa2(t) {
  for (; t.mc.size > 0 && t.gc.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.mc.values().next().value;
    t.mc.delete(e);
    const n = new ht(ut.fromString(e)), s = t.Ac.next();
    t.yc.set(s, new Uc2(n)), t.gc = t.gc.insert(n, s), Hu(t.remoteStore, new cr(Jn(Gn(n.path)), s, "TargetPurposeLimboResolution", Ot.ct));
  }
}
function ua2(t, e, n) {
  return __async(this, null, function* () {
    const s = L(t), i = [], r2 = [], o = [];
    s.wc.isEmpty() || (s.wc.forEach((t2, u) => {
      o.push(s.Rc(u, e, n).then((t3) => {
        if (
          // If there are changes, or we are handling a global snapshot, notify
          // secondary clients to update query state.
          (t3 || n) && s.isPrimaryClient && s.sharedClientState.updateQueryState(u.targetId, (null == t3 ? void 0 : t3.fromCache) ? "not-current" : "current"), t3
        ) {
          i.push(t3);
          const e2 = tu.Li(u.targetId, t3);
          r2.push(e2);
        }
      }));
    }), yield Promise.all(o), s.dc.nu(i), yield function(t2, e2) {
      return __async(this, null, function* () {
        const n2 = L(t2);
        try {
          yield n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t3) => Rt.forEach(e2, (e3) => Rt.forEach(e3.Fi, (s2) => n2.persistence.referenceDelegate.addReference(t3, e3.targetId, s2)).next(() => Rt.forEach(e3.Bi, (s2) => n2.persistence.referenceDelegate.removeReference(t3, e3.targetId, s2)))));
        } catch (t3) {
          if (!Dt(t3)) throw t3;
          N2("LocalStore", "Failed to update sequence numbers: " + t3);
        }
        for (const t3 of e2) {
          const e3 = t3.targetId;
          if (!t3.fromCache) {
            const t4 = n2.Ji.get(e3), s2 = t4.snapshotVersion, i2 = t4.withLastLimboFreeSnapshotVersion(s2);
            n2.Ji = n2.Ji.insert(e3, i2);
          }
        }
      });
    }(s.localStore, r2));
  });
}
function ca2(t, e) {
  return __async(this, null, function* () {
    const n = L(t);
    if (!n.currentUser.isEqual(e)) {
      N2("SyncEngine", "User change. New user:", e.toKey());
      const t2 = yield iu(n.localStore, e);
      n.currentUser = e, // Fails tasks waiting for pending writes requested by previous user.
      function(t3, e2) {
        t3.Ec.forEach((t4) => {
          t4.forEach((t5) => {
            t5.reject(new U2(q2.CANCELLED, e2));
          });
        }), t3.Ec.clear();
      }(n, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
      n.sharedClientState.handleUserChange(e, t2.removedBatchIds, t2.addedBatchIds), yield ua2(n, t2.er);
    }
  });
}
function aa2(t, e) {
  const n = L(t), s = n.yc.get(e);
  if (s && s.fc) return gs().add(s.key);
  {
    let t2 = gs();
    const s2 = n._c.get(e);
    if (!s2) return t2;
    for (const e2 of s2) {
      const s3 = n.wc.get(e2);
      t2 = t2.unionWith(s3.view.nc);
    }
    return t2;
  }
}
function ha2(t, e) {
  return __async(this, null, function* () {
    const n = L(t), s = yield fu(
      n.localStore,
      e.query,
      /* usePreviousResults= */
      true
    ), i = e.view.hc(s);
    return n.isPrimaryClient && ia2(n, e.targetId, i.cc), i;
  });
}
function la(t, e) {
  return __async(this, null, function* () {
    const n = L(t);
    return wu(n.localStore, e).then((t2) => ua2(n, t2));
  });
}
function fa2(t, e, n, s) {
  return __async(this, null, function* () {
    const i = L(t), r2 = yield function(t2, e2) {
      const n2 = L(t2), s2 = L(n2.mutationQueue);
      return n2.persistence.runTransaction("Lookup mutation documents", "readonly", (t3) => s2.Sn(t3, e2).next((e3) => e3 ? n2.localDocuments.getDocuments(t3, e3) : Rt.resolve(null)));
    }(i.localStore, e);
    null !== r2 ? ("pending" === n ? (
      // If we are the primary client, we need to send this write to the
      // backend. Secondary clients will ignore these writes since their remote
      // connection is disabled.
      yield cc2(i.remoteStore)
    ) : "acknowledged" === n || "rejected" === n ? (
      // NOTE: Both these methods are no-ops for batches that originated from
      // other clients.
      (ea2(i, e, s || null), ta2(i, e), function(t2, e2) {
        L(L(t2).mutationQueue).Cn(e2);
      }(i.localStore, e))
    ) : O2(), yield ua2(i, r2)) : (
      // A throttled tab may not have seen the mutation before it was completed
      // and removed from the mutation queue, in which case we won't have cached
      // the affected documents. In this case we can safely ignore the update
      // since that means we didn't apply the mutation locally at all (if we
      // had, we would have cached the affected documents), and so we will just
      // see any resulting document changes via normal remote document updates
      // as applicable.
      N2("SyncEngine", "Cannot apply mutation batch with id: " + e)
    );
  });
}
function da2(t, e) {
  return __async(this, null, function* () {
    const n = L(t);
    if (pa2(n), Ia2(n), true === e && true !== n.vc) {
      const t2 = n.sharedClientState.getAllActiveQueryTargets(), e2 = yield wa2(n, t2.toArray());
      n.vc = true, yield yc2(n.remoteStore, true);
      for (const t3 of e2) Hu(n.remoteStore, t3);
    } else if (false === e && false !== n.vc) {
      const t2 = [];
      let e2 = Promise.resolve();
      n._c.forEach((s, i) => {
        n.sharedClientState.isLocalQueryTarget(i) ? t2.push(i) : e2 = e2.then(() => (na2(n, i), lu(
          n.localStore,
          i,
          /*keepPersistedTargetData=*/
          true
        ))), Ju(n.remoteStore, i);
      }), yield e2, yield wa2(n, t2), // PORTING NOTE: Multi-Tab only.
      function(t3) {
        const e3 = L(t3);
        e3.yc.forEach((t4, n2) => {
          Ju(e3.remoteStore, n2);
        }), e3.Ic.Ts(), e3.yc = /* @__PURE__ */ new Map(), e3.gc = new pe(ht.comparator);
      }(n), n.vc = false, yield yc2(n.remoteStore, false);
    }
  });
}
function wa2(t, e, n) {
  return __async(this, null, function* () {
    const s = L(t), i = [], r2 = [];
    for (const t2 of e) {
      let e2;
      const n2 = s._c.get(t2);
      if (n2 && 0 !== n2.length) {
        e2 = yield hu(s.localStore, Jn(n2[0]));
        for (const t3 of n2) {
          const e3 = s.wc.get(t3), n3 = yield ha2(s, e3);
          n3.snapshot && r2.push(n3.snapshot);
        }
      } else {
        const n3 = yield du(s.localStore, t2);
        e2 = yield hu(s.localStore, n3), yield Qc2(
          s,
          _a(n3),
          t2,
          /*current=*/
          false,
          e2.resumeToken
        );
      }
      i.push(e2);
    }
    return s.dc.nu(r2), i;
  });
}
function _a(t) {
  return Kn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt);
}
function ma2(t) {
  const e = L(t);
  return L(L(e.localStore).persistence).$i();
}
function ga(t, e, n, s) {
  return __async(this, null, function* () {
    const i = L(t);
    if (i.vc)
      return void N2("SyncEngine", "Ignoring unexpected query state notification.");
    const r2 = i._c.get(e);
    if (r2 && r2.length > 0) switch (n) {
      case "current":
      case "not-current": {
        const t2 = yield wu(i.localStore, ss(r2[0])), s2 = mi.createSynthesizedRemoteEventForCurrentChange(e, "current" === n, Ve.EMPTY_BYTE_STRING);
        yield ua2(i, t2, s2);
        break;
      }
      case "rejected":
        yield lu(
          i.localStore,
          e,
          /* keepPersistedTargetData */
          true
        ), na2(i, e, s);
        break;
      default:
        O2();
    }
  });
}
function ya2(t, e, n) {
  return __async(this, null, function* () {
    const s = pa2(t);
    if (s.vc) {
      for (const t2 of e) {
        if (s._c.has(t2)) {
          N2("SyncEngine", "Adding an already active target " + t2);
          continue;
        }
        const e2 = yield du(s.localStore, t2), n2 = yield hu(s.localStore, e2);
        yield Qc2(
          s,
          _a(e2),
          n2.targetId,
          /*current=*/
          false,
          n2.resumeToken
        ), Hu(s.remoteStore, n2);
      }
      for (const t2 of n)
        s._c.has(t2) && // Release queries that are still active.
        (yield lu(
          s.localStore,
          t2,
          /* keepPersistedTargetData */
          false
        ).then(() => {
          Ju(s.remoteStore, t2), na2(s, t2);
        }).catch(vt));
    }
  });
}
function pa2(t) {
  const e = L(t);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = Wc2.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = aa2.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = Jc2.bind(null, e), e.dc.nu = Dc2.bind(null, e.eventManager), e.dc.Pc = Cc2.bind(null, e.eventManager), e;
}
function Ia2(t) {
  const e = L(t);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = Yc2.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = Xc2.bind(null, e), e;
}
function Ta2(t, e, n) {
  const s = L(t);
  /** Loads a bundle and returns the list of affected collection groups. */
  (function(t2, e2, n2) {
    return __async(this, null, function* () {
      try {
        const s2 = yield e2.getMetadata();
        if (yield function(t3, e3) {
          const n3 = L(t3), s3 = Ni(e3.createTime);
          return n3.persistence.runTransaction("hasNewerBundle", "readonly", (t4) => n3.qs.getBundleMetadata(t4, e3.id)).then((t4) => !!t4 && t4.createTime.compareTo(s3) >= 0);
        }(t2.localStore, s2)) return yield e2.close(), n2._completeWith(function(t3) {
          return {
            taskState: "Success",
            documentsLoaded: t3.totalDocuments,
            bytesLoaded: t3.totalBytes,
            totalDocuments: t3.totalDocuments,
            totalBytes: t3.totalBytes
          };
        }(s2)), Promise.resolve(/* @__PURE__ */ new Set());
        n2._updateProgress(Oc2(s2));
        const i = new $c2(s2, t2.localStore, e2.serializer);
        let r2 = yield e2.bc();
        for (; r2; ) {
          const t3 = yield i.zu(r2);
          t3 && n2._updateProgress(t3), r2 = yield e2.bc();
        }
        const o = yield i.complete();
        return yield ua2(
          t2,
          o.Ju,
          /* remoteEvent */
          void 0
        ), // Save metadata, so loading the same bundle will skip.
        yield function(t3, e3) {
          const n3 = L(t3);
          return n3.persistence.runTransaction("Save bundle", "readwrite", (t4) => n3.qs.saveBundleMetadata(t4, e3));
        }(t2.localStore, s2), n2._completeWith(o.progress), Promise.resolve(o.Hu);
      } catch (t3) {
        return M2("SyncEngine", `Loading bundle failed with ${t3}`), n2._failWith(t3), Promise.resolve(/* @__PURE__ */ new Set());
      }
    });
  })(s, e, n).then((t2) => {
    s.sharedClientState.notifyBundleLoaded(t2);
  });
}
var Ea = class {
  constructor() {
    this.synchronizeTabs = false;
  }
  initialize(t) {
    return __async(this, null, function* () {
      this.serializer = Fu(t.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(t), this.persistence = this.createPersistence(t), yield this.persistence.start(), this.localStore = this.createLocalStore(t), this.gcScheduler = this.createGarbageCollectionScheduler(t, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(t, this.localStore);
    });
  }
  createGarbageCollectionScheduler(t, e) {
    return null;
  }
  createIndexBackfillerScheduler(t, e) {
    return null;
  }
  createLocalStore(t) {
    return su(this.persistence, new eu(), t.initialUser, this.serializer);
  }
  createPersistence(t) {
    return new Ko(Qo.zs, this.serializer);
  }
  createSharedClientState(t) {
    return new bu();
  }
  terminate() {
    return __async(this, null, function* () {
      this.gcScheduler && this.gcScheduler.stop(), yield this.sharedClientState.shutdown(), yield this.persistence.shutdown();
    });
  }
};
var Aa = class extends Ea {
  constructor(t) {
    super(), this.cacheSizeBytes = t;
  }
  createGarbageCollectionScheduler(t, e) {
    F2(this.persistence.referenceDelegate instanceof jo);
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new po(n, t.asyncQueue, e);
  }
  createPersistence(t) {
    const e = void 0 !== this.cacheSizeBytes ? so.withCacheSize(this.cacheSizeBytes) : so.DEFAULT;
    return new Ko((t2) => jo.zs(t2, e), this.serializer);
  }
};
var va2 = class _va extends Ea {
  constructor(t, e, n) {
    super(), this.Vc = t, this.cacheSizeBytes = e, this.forceOwnership = n, this.synchronizeTabs = false;
  }
  initialize(t) {
    return __async(this, null, function* () {
      yield __superGet(_va.prototype, this, "initialize").call(this, t), yield this.Vc.initialize(this, t), // Enqueue writes from a previous session
      yield Ia2(this.Vc.syncEngine), yield cc2(this.Vc.remoteStore), // NOTE: This will immediately call the listener, so we make sure to
      // set it after localStore / remoteStore are started.
      yield this.persistence.Ii(() => (this.gcScheduler && !this.gcScheduler.started && this.gcScheduler.start(), this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started && this.indexBackfillerScheduler.start(), Promise.resolve()));
    });
  }
  createLocalStore(t) {
    return su(this.persistence, new eu(), t.initialUser, this.serializer);
  }
  createGarbageCollectionScheduler(t, e) {
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new po(n, t.asyncQueue, e);
  }
  createIndexBackfillerScheduler(t, e) {
    const n = new $t(e, this.persistence);
    return new Mt(t.asyncQueue, n);
  }
  createPersistence(t) {
    const e = Zo(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? so.withCacheSize(this.cacheSizeBytes) : so.DEFAULT;
    return new Jo(this.synchronizeTabs, e, t.clientId, n, t.asyncQueue, $u(), Ou(), this.serializer, this.sharedClientState, !!this.forceOwnership);
  }
  createSharedClientState(t) {
    return new bu();
  }
};
var Ra2 = class _Ra extends va2 {
  constructor(t, e) {
    super(
      t,
      e,
      /* forceOwnership= */
      false
    ), this.Vc = t, this.cacheSizeBytes = e, this.synchronizeTabs = true;
  }
  initialize(t) {
    return __async(this, null, function* () {
      yield __superGet(_Ra.prototype, this, "initialize").call(this, t);
      const e = this.Vc.syncEngine;
      this.sharedClientState instanceof Pu && (this.sharedClientState.syncEngine = {
        jr: fa2.bind(null, e),
        zr: ga.bind(null, e),
        Wr: ya2.bind(null, e),
        $i: ma2.bind(null, e),
        Qr: la.bind(null, e)
      }, yield this.sharedClientState.start()), // NOTE: This will immediately call the listener, so we make sure to
      // set it after localStore / remoteStore are started.
      yield this.persistence.Ii((t2) => __async(this, null, function* () {
        yield da2(this.Vc.syncEngine, t2), this.gcScheduler && (t2 && !this.gcScheduler.started ? this.gcScheduler.start() : t2 || this.gcScheduler.stop()), this.indexBackfillerScheduler && (t2 && !this.indexBackfillerScheduler.started ? this.indexBackfillerScheduler.start() : t2 || this.indexBackfillerScheduler.stop());
      }));
    });
  }
  createSharedClientState(t) {
    const e = $u();
    if (!Pu.D(e)) throw new U2(q2.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
    const n = Zo(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey);
    return new Pu(e, t.asyncQueue, n, t.clientId, t.initialUser);
  }
};
var Pa2 = class {
  initialize(t, e) {
    return __async(this, null, function* () {
      this.localStore || (this.localStore = t.localStore, this.sharedClientState = t.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(
        e,
        /* startAsPrimary=*/
        !t.synchronizeTabs
      ), this.sharedClientState.onlineStateHandler = (t2) => Hc2(
        this.syncEngine,
        t2,
        1
        /* OnlineStateSource.SharedClientState */
      ), this.remoteStore.remoteSyncer.handleCredentialChange = ca2.bind(null, this.syncEngine), yield yc2(this.remoteStore, this.syncEngine.isPrimaryClient));
    });
  }
  createEventManager(t) {
    return new bc2();
  }
  createDatastore(t) {
    const e = Fu(t.databaseInfo.databaseId), n = (s = t.databaseInfo, new Mu(s));
    var s;
    return function(t2, e2, n2, s2) {
      return new Ku(t2, e2, n2, s2);
    }(t.authCredentials, t.appCheckCredentials, n, e);
  }
  createRemoteStore(t) {
    return e = this.localStore, n = this.datastore, s = t.asyncQueue, i = (t2) => Hc2(
      this.syncEngine,
      t2,
      0
      /* OnlineStateSource.RemoteStore */
    ), r2 = Su.D() ? new Su() : new Vu(), new ju(e, n, s, i, r2);
    var e, n, s, i, r2;
  }
  createSyncEngine(t, e) {
    return function(t2, e2, n, s, i, r2, o) {
      const u = new Kc2(t2, e2, n, s, i, r2);
      return o && (u.vc = true), u;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e);
  }
  terminate() {
    return function(t) {
      return __async(this, null, function* () {
        const e = L(t);
        N2("RemoteStore", "RemoteStore shutting down."), e.vu.add(
          5
          /* OfflineCause.Shutdown */
        ), yield Wu(e), e.Pu.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
        // triggering spurious listener events with cached data, etc.
        e.bu.set(
          "Unknown"
          /* OnlineState.Unknown */
        );
      });
    }(this.remoteStore);
  }
};
function ba2(t, e = 10240) {
  let n = 0;
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    read() {
      return __async(this, null, function* () {
        if (n < t.byteLength) {
          const s = {
            value: t.slice(n, n + e),
            done: false
          };
          return n += e, s;
        }
        return {
          done: true
        };
      });
    },
    cancel() {
      return __async(this, null, function* () {
      });
    },
    releaseLock() {
    },
    closed: Promise.resolve()
  };
}
var Va2 = class {
  constructor(t) {
    this.observer = t, /**
     * When set to true, will not raise future events. Necessary to deal with
     * async detachment of listener.
     */
    this.muted = false;
  }
  next(t) {
    this.observer.next && this.Sc(this.observer.next, t);
  }
  error(t) {
    this.observer.error ? this.Sc(this.observer.error, t) : k2("Uncaught Error in snapshot listener:", t.toString());
  }
  Dc() {
    this.muted = true;
  }
  Sc(t, e) {
    this.muted || setTimeout(() => {
      this.muted || t(e);
    }, 0);
  }
};
var Sa2 = class {
  constructor(t, e) {
    this.Cc = t, this.serializer = e, /** Cached bundle metadata. */
    this.metadata = new K2(), /**
     * Internal buffer to hold bundle content, accumulating incomplete element
     * content.
     */
    this.buffer = new Uint8Array(), this.xc = new TextDecoder("utf-8"), // Read the metadata (which is the first element).
    this.Nc().then((t2) => {
      t2 && t2.Qu() ? this.metadata.resolve(t2.Gu.metadata) : this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null == t2 ? void 0 : t2.Gu)}`));
    }, (t2) => this.metadata.reject(t2));
  }
  close() {
    return this.Cc.cancel();
  }
  getMetadata() {
    return __async(this, null, function* () {
      return this.metadata.promise;
    });
  }
  bc() {
    return __async(this, null, function* () {
      return yield this.getMetadata(), this.Nc();
    });
  }
  /**
   * Reads from the head of internal buffer, and pulling more data from
   * underlying stream if a complete element cannot be found, until an
   * element(including the prefixed length and the JSON string) is found.
   *
   * Once a complete element is read, it is dropped from internal buffer.
   *
   * Returns either the bundled element, or null if we have reached the end of
   * the stream.
   */
  Nc() {
    return __async(this, null, function* () {
      const t = yield this.kc();
      if (null === t) return null;
      const e = this.xc.decode(t), n = Number(e);
      isNaN(n) && this.Mc(`length string (${e}) is not valid number`);
      const s = yield this.$c(n);
      return new kc2(JSON.parse(s), t.length + n);
    });
  }
  /** First index of '{' from the underlying buffer. */
  Oc() {
    return this.buffer.findIndex((t) => t === "{".charCodeAt(0));
  }
  /**
   * Reads from the beginning of the internal buffer, until the first '{', and
   * return the content.
   *
   * If reached end of the stream, returns a null.
   */
  kc() {
    return __async(this, null, function* () {
      for (; this.Oc() < 0; ) {
        if (yield this.Fc()) break;
      }
      if (0 === this.buffer.length) return null;
      const t = this.Oc();
      t < 0 && this.Mc("Reached the end of bundle when a length string is expected.");
      const e = this.buffer.slice(0, t);
      return this.buffer = this.buffer.slice(t), e;
    });
  }
  /**
   * Reads from a specified position from the internal buffer, for a specified
   * number of bytes, pulling more data from the underlying stream if needed.
   *
   * Returns a string decoded from the read bytes.
   */
  $c(t) {
    return __async(this, null, function* () {
      for (; this.buffer.length < t; ) {
        (yield this.Fc()) && this.Mc("Reached the end of bundle when more is expected.");
      }
      const e = this.xc.decode(this.buffer.slice(0, t));
      return this.buffer = this.buffer.slice(t), e;
    });
  }
  Mc(t) {
    throw this.Cc.cancel(), new Error(`Invalid bundle format: ${t}`);
  }
  /**
   * Pulls more data from underlying stream to internal buffer.
   * Returns a boolean indicating whether the stream is finished.
   */
  Fc() {
    return __async(this, null, function* () {
      const t = yield this.Cc.read();
      if (!t.done) {
        const e = new Uint8Array(this.buffer.length + t.value.length);
        e.set(this.buffer), e.set(t.value, this.buffer.length), this.buffer = e;
      }
      return t.done;
    });
  }
};
var Da2 = class {
  constructor(t) {
    this.datastore = t, // The version of each document that was read during this transaction.
    this.readVersions = /* @__PURE__ */ new Map(), this.mutations = [], this.committed = false, /**
     * A deferred usage error that occurred previously in this transaction that
     * will cause the transaction to fail once it actually commits.
     */
    this.lastWriteError = null, /**
     * Set of documents that have been written in the transaction.
     *
     * When there's more than one write to the same key in a transaction, any
     * writes after the first are handled differently.
     */
    this.writtenDocs = /* @__PURE__ */ new Set();
  }
  lookup(t) {
    return __async(this, null, function* () {
      if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new U2(q2.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
      const e = yield function(t2, e2) {
        return __async(this, null, function* () {
          const n = L(t2), s = Li(n.serializer) + "/documents", i = {
            documents: e2.map((t3) => $i(n.serializer, t3))
          }, r2 = yield n.vo("BatchGetDocuments", s, i, e2.length), o = /* @__PURE__ */ new Map();
          r2.forEach((t3) => {
            const e3 = Gi(n.serializer, t3);
            o.set(e3.key.toString(), e3);
          });
          const u = [];
          return e2.forEach((t3) => {
            const e3 = o.get(t3.toString());
            F2(!!e3), u.push(e3);
          }), u;
        });
      }(this.datastore, t);
      return e.forEach((t2) => this.recordVersion(t2)), e;
    });
  }
  set(t, e) {
    this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
  }
  update(t, e) {
    try {
      this.write(e.toMutation(t, this.preconditionForUpdate(t)));
    } catch (t2) {
      this.lastWriteError = t2;
    }
    this.writtenDocs.add(t.toString());
  }
  delete(t) {
    this.write(new Ys(t, this.precondition(t))), this.writtenDocs.add(t.toString());
  }
  commit() {
    return __async(this, null, function* () {
      if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
      const t = this.readVersions;
      this.mutations.forEach((e) => {
        t.delete(e.key.toString());
      }), // For each document that was read but not written to, we want to perform
      // a `verify` operation.
      t.forEach((t2, e) => {
        const n = ht.fromPath(e);
        this.mutations.push(new Xs(n, this.precondition(n)));
      }), yield function(t2, e) {
        return __async(this, null, function* () {
          const n = L(t2), s = Li(n.serializer) + "/documents", i = {
            writes: e.map((t3) => ji(n.serializer, t3))
          };
          yield n.Io("Commit", s, i);
        });
      }(this.datastore, this.mutations), this.committed = true;
    });
  }
  recordVersion(t) {
    let e;
    if (t.isFoundDocument()) e = t.version;
    else {
      if (!t.isNoDocument()) throw O2();
      e = rt.min();
    }
    const n = this.readVersions.get(t.key.toString());
    if (n) {
      if (!e.isEqual(n))
        throw new U2(q2.ABORTED, "Document version changed between two reads.");
    } else this.readVersions.set(t.key.toString(), e);
  }
  /**
   * Returns the version of this document when it was read in this transaction,
   * as a precondition, or no precondition if it was not read.
   */
  precondition(t) {
    const e = this.readVersions.get(t.toString());
    return !this.writtenDocs.has(t.toString()) && e ? e.isEqual(rt.min()) ? Fs.exists(false) : Fs.updateTime(e) : Fs.none();
  }
  /**
   * Returns the precondition for a document if the operation is an update.
   */
  preconditionForUpdate(t) {
    const e = this.readVersions.get(t.toString());
    if (!this.writtenDocs.has(t.toString()) && e) {
      if (e.isEqual(rt.min()))
        throw new U2(q2.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      return Fs.updateTime(e);
    }
    return Fs.exists(true);
  }
  write(t) {
    this.ensureCommitNotCalled(), this.mutations.push(t);
  }
  ensureCommitNotCalled() {
  }
};
var Ca = class {
  constructor(t, e, n, s, i) {
    this.asyncQueue = t, this.datastore = e, this.options = n, this.updateFunction = s, this.deferred = i, this.Bc = n.maxAttempts, this.qo = new Bu(
      this.asyncQueue,
      "transaction_retry"
      /* TimerId.TransactionRetry */
    );
  }
  /** Runs the transaction and sets the result on deferred. */
  run() {
    this.Bc -= 1, this.Lc();
  }
  Lc() {
    this.qo.No(() => __async(this, null, function* () {
      const t = new Da2(this.datastore), e = this.qc(t);
      e && e.then((e2) => {
        this.asyncQueue.enqueueAndForget(() => t.commit().then(() => {
          this.deferred.resolve(e2);
        }).catch((t2) => {
          this.Uc(t2);
        }));
      }).catch((t2) => {
        this.Uc(t2);
      });
    }));
  }
  qc(t) {
    try {
      const e = this.updateFunction(t);
      return !Ft(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t2) {
      return this.deferred.reject(t2), null;
    }
  }
  Uc(t) {
    this.Bc > 0 && this.Kc(t) ? (this.Bc -= 1, this.asyncQueue.enqueueAndForget(() => (this.Lc(), Promise.resolve()))) : this.deferred.reject(t);
  }
  Kc(t) {
    if ("FirebaseError" === t.name) {
      const e = t.code;
      return "aborted" === e || "failed-precondition" === e || "already-exists" === e || !oi(e);
    }
    return false;
  }
};
var xa2 = class {
  constructor(t, e, n, s) {
    this.authCredentials = t, this.appCheckCredentials = e, this.asyncQueue = n, this.databaseInfo = s, this.user = V2.UNAUTHENTICATED, this.clientId = tt.A(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, (t2) => __async(this, null, function* () {
      N2("FirestoreClient", "Received user=", t2.uid), yield this.authCredentialListener(t2), this.user = t2;
    })), this.appCheckCredentials.start(n, (t2) => (N2("FirestoreClient", "Received new app check token=", t2), this.appCheckCredentialListener(t2, this.user)));
  }
  getConfiguration() {
    return __async(this, null, function* () {
      return {
        asyncQueue: this.asyncQueue,
        databaseInfo: this.databaseInfo,
        clientId: this.clientId,
        authCredentials: this.authCredentials,
        appCheckCredentials: this.appCheckCredentials,
        initialUser: this.user,
        maxConcurrentLimboResolutions: 100
      };
    });
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  /**
   * Checks that the client has not been terminated. Ensures that other methods on //
   * this class cannot be called after the client is terminated. //
   */
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown) throw new U2(q2.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new K2();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(() => __async(this, null, function* () {
      try {
        this._onlineComponents && (yield this._onlineComponents.terminate()), this._offlineComponents && (yield this._offlineComponents.terminate()), // The credentials provider must be terminated after shutting down the
        // RemoteStore as it will prevent the RemoteStore from retrieving auth
        // tokens.
        this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t.resolve();
      } catch (e) {
        const n = Ec2(e, "Failed to shutdown persistence");
        t.reject(n);
      }
    })), t.promise;
  }
};
function Na2(t, e) {
  return __async(this, null, function* () {
    t.asyncQueue.verifyOperationInProgress(), N2("FirestoreClient", "Initializing OfflineComponentProvider");
    const n = yield t.getConfiguration();
    yield e.initialize(n);
    let s = n.initialUser;
    t.setCredentialChangeListener((t2) => __async(this, null, function* () {
      s.isEqual(t2) || (yield iu(e.localStore, t2), s = t2);
    })), // When a user calls clearPersistence() in one client, all other clients
    // need to be terminated to allow the delete to succeed.
    e.persistence.setDatabaseDeletedListener(() => t.terminate()), t._offlineComponents = e;
  });
}
function ka2(t, e) {
  return __async(this, null, function* () {
    t.asyncQueue.verifyOperationInProgress();
    const n = yield $a2(t);
    N2("FirestoreClient", "Initializing OnlineComponentProvider");
    const s = yield t.getConfiguration();
    yield e.initialize(n, s), // The CredentialChangeListener of the online component provider takes
    // precedence over the offline component provider.
    t.setCredentialChangeListener((t2) => gc2(e.remoteStore, t2)), t.setAppCheckTokenChangeListener((t2, n2) => gc2(e.remoteStore, n2)), t._onlineComponents = e;
  });
}
function Ma(t) {
  return "FirebaseError" === t.name ? t.code === q2.FAILED_PRECONDITION || t.code === q2.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
  // or an aborted error depending on whether the error happened during
  // schema migration.
  22 === t.code || 20 === t.code || // Firefox Private Browsing mode disables IndexedDb and returns
  // INVALID_STATE for any usage.
  11 === t.code;
}
function $a2(t) {
  return __async(this, null, function* () {
    if (!t._offlineComponents) if (t._uninitializedComponentsProvider) {
      N2("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        yield Na2(t, t._uninitializedComponentsProvider._offline);
      } catch (e) {
        const n = e;
        if (!Ma(n)) throw n;
        M2("Error using user provided cache. Falling back to memory cache: " + n), yield Na2(t, new Ea());
      }
    } else N2("FirestoreClient", "Using default OfflineComponentProvider"), yield Na2(t, new Ea());
    return t._offlineComponents;
  });
}
function Oa2(t) {
  return __async(this, null, function* () {
    return t._onlineComponents || (t._uninitializedComponentsProvider ? (N2("FirestoreClient", "Using user provided OnlineComponentProvider"), yield ka2(t, t._uninitializedComponentsProvider._online)) : (N2("FirestoreClient", "Using default OnlineComponentProvider"), yield ka2(t, new Pa2()))), t._onlineComponents;
  });
}
function Fa2(t) {
  return $a2(t).then((t2) => t2.persistence);
}
function Ba(t) {
  return $a2(t).then((t2) => t2.localStore);
}
function La(t) {
  return Oa2(t).then((t2) => t2.remoteStore);
}
function qa2(t) {
  return Oa2(t).then((t2) => t2.syncEngine);
}
function Ua2(t) {
  return Oa2(t).then((t2) => t2.datastore);
}
function Ka2(t) {
  return __async(this, null, function* () {
    const e = yield Oa2(t), n = e.eventManager;
    return n.onListen = Gc2.bind(null, e.syncEngine), n.onUnlisten = jc2.bind(null, e.syncEngine), n;
  });
}
function Ga2(t) {
  return t.asyncQueue.enqueue(() => __async(this, null, function* () {
    const e = yield Fa2(t), n = yield La(t);
    return e.setNetworkEnabled(true), function(t2) {
      const e2 = L(t2);
      return e2.vu.delete(
        0
        /* OfflineCause.UserDisabled */
      ), zu(e2);
    }(n);
  }));
}
function Qa2(t) {
  return t.asyncQueue.enqueue(() => __async(this, null, function* () {
    const e = yield Fa2(t), n = yield La(t);
    return e.setNetworkEnabled(false), function(t2) {
      return __async(this, null, function* () {
        const e2 = L(t2);
        e2.vu.add(
          0
          /* OfflineCause.UserDisabled */
        ), yield Wu(e2), // Set the OnlineState to Offline so get()s return from cache, etc.
        e2.bu.set(
          "Offline"
          /* OnlineState.Offline */
        );
      });
    }(n);
  }));
}
function ja(t, e) {
  const n = new K2();
  return t.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function(t2, e2, n2) {
      return __async(this, null, function* () {
        try {
          const s = yield function(t3, e3) {
            const n3 = L(t3);
            return n3.persistence.runTransaction("read document", "readonly", (t4) => n3.localDocuments.getDocument(t4, e3));
          }(t2, e2);
          s.isFoundDocument() ? n2.resolve(s) : s.isNoDocument() ? n2.resolve(null) : n2.reject(new U2(q2.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
        } catch (t3) {
          const s = Ec2(t3, `Failed to get document '${e2} from cache`);
          n2.reject(s);
        }
      });
    }(yield Ba(t), e, n);
  })), n.promise;
}
function za2(t, e, n = {}) {
  const s = new K2();
  return t.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function(t2, e2, n2, s2, i) {
      const r2 = new Va2({
        next: (r3) => {
          e2.enqueueAndForget(() => Sc2(t2, o));
          const u = r3.docs.has(n2);
          !u && r3.fromCache ? (
            // TODO(dimond): If we're online and the document doesn't
            // exist then we resolve with a doc.exists set to false. If
            // we're offline however, we reject the Promise in this
            // case. Two options: 1) Cache the negative response from
            // the server so we can deliver that even when you're
            // offline 2) Actually reject the Promise in the online case
            // if the document doesn't exist.
            i.reject(new U2(q2.UNAVAILABLE, "Failed to get document because the client is offline."))
          ) : u && r3.fromCache && s2 && "server" === s2.source ? i.reject(new U2(q2.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(r3);
        },
        error: (t3) => i.reject(t3)
      }), o = new Nc2(Gn(n2.path), r2, {
        includeMetadataChanges: true,
        Ku: true
      });
      return Vc2(t2, o);
    }(yield Ka2(t), t.asyncQueue, e, n, s);
  })), s.promise;
}
function Wa2(t, e) {
  const n = new K2();
  return t.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function(t2, e2, n2) {
      return __async(this, null, function* () {
        try {
          const s = yield fu(
            t2,
            e2,
            /* usePreviousResults= */
            true
          ), i = new Lc2(e2, s.ir), r2 = i.sc(s.documents), o = i.applyChanges(
            r2,
            /* updateLimboDocuments= */
            false
          );
          n2.resolve(o.snapshot);
        } catch (t3) {
          const s = Ec2(t3, `Failed to execute query '${e2} against cache`);
          n2.reject(s);
        }
      });
    }(yield Ba(t), e, n);
  })), n.promise;
}
function Ha2(t, e, n = {}) {
  const s = new K2();
  return t.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function(t2, e2, n2, s2, i) {
      const r2 = new Va2({
        next: (n3) => {
          e2.enqueueAndForget(() => Sc2(t2, o)), n3.fromCache && "server" === s2.source ? i.reject(new U2(q2.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n3);
        },
        error: (t3) => i.reject(t3)
      }), o = new Nc2(n2, r2, {
        includeMetadataChanges: true,
        Ku: true
      });
      return Vc2(t2, o);
    }(yield Ka2(t), t.asyncQueue, e, n, s);
  })), s.promise;
}
function Ja2(t, e) {
  const n = new Va2(e);
  return t.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function(t2, e2) {
      L(t2).ku.add(e2), // Immediately fire an initial event, indicating all existing listeners
      // are in-sync.
      e2.next();
    }(yield Ka2(t), n);
  })), () => {
    n.Dc(), t.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      return function(t2, e2) {
        L(t2).ku.delete(e2);
      }(yield Ka2(t), n);
    }));
  };
}
function Ya2(t, e, n, s) {
  const i = function(t2, e2) {
    let n2;
    n2 = "string" == typeof t2 ? hi().encode(t2) : t2;
    return function(t3, e3) {
      return new Sa2(t3, e3);
    }(function(t3, e3) {
      if (t3 instanceof Uint8Array) return ba2(t3, e3);
      if (t3 instanceof ArrayBuffer) return ba2(new Uint8Array(t3), e3);
      if (t3 instanceof ReadableStream) return t3.getReader();
      throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
    }(n2), e2);
  }(n, Fu(e));
  t.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    Ta2(yield qa2(t), i, s);
  }));
}
function Xa(t, e) {
  return t.asyncQueue.enqueue(() => __async(this, null, function* () {
    return function(t2, e2) {
      const n = L(t2);
      return n.persistence.runTransaction("Get named query", "readonly", (t3) => n.qs.getNamedQuery(t3, e2));
    }(yield Ba(t), e);
  }));
}
function Za2(t, e) {
  return t.asyncQueue.enqueue(() => __async(this, null, function* () {
    return function(t2, e2) {
      return __async(this, null, function* () {
        const n = L(t2), s = n.indexManager, i = [];
        return n.persistence.runTransaction("Configure indexes", "readwrite", (t3) => s.getFieldIndexes(t3).next((n2) => (
          /**
          * @license
          * Copyright 2017 Google LLC
          *
          * Licensed under the Apache License, Version 2.0 (the "License");
          * you may not use this file except in compliance with the License.
          * You may obtain a copy of the License at
          *
          *   http://www.apache.org/licenses/LICENSE-2.0
          *
          * Unless required by applicable law or agreed to in writing, software
          * distributed under the License is distributed on an "AS IS" BASIS,
          * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          * See the License for the specific language governing permissions and
          * limitations under the License.
          */
          /**
          * Compares two array for equality using comparator. The method computes the
          * intersection and invokes `onAdd` for every element that is in `after` but not
          * `before`. `onRemove` is invoked for every element in `before` but missing
          * from `after`.
          *
          * The method creates a copy of both `before` and `after` and runs in O(n log
          * n), where n is the size of the two lists.
          *
          * @param before - The elements that exist in the original array.
          * @param after - The elements to diff against the original array.
          * @param comparator - The comparator for the elements in before and after.
          * @param onAdd - A function to invoke for every element that is part of `
          * after` but not `before`.
          * @param onRemove - A function to invoke for every element that is part of
          * `before` but not `after`.
          */
          function(t4, e3, n3, s2, i2) {
            t4 = [...t4], e3 = [...e3], t4.sort(n3), e3.sort(n3);
            const r2 = t4.length, o = e3.length;
            let u = 0, c = 0;
            for (; u < o && c < r2; ) {
              const r3 = n3(t4[c], e3[u]);
              r3 < 0 ? (
                // The element was removed if the next element in our ordered
                // walkthrough is only in `before`.
                i2(t4[c++])
              ) : r3 > 0 ? (
                // The element was added if the next element in our ordered walkthrough
                // is only in `after`.
                s2(e3[u++])
              ) : (u++, c++);
            }
            for (; u < o; ) s2(e3[u++]);
            for (; c < r2; ) i2(t4[c++]);
          }(n2, e2, wt, (e3) => {
            i.push(s.addFieldIndex(t3, e3));
          }, (e3) => {
            i.push(s.deleteFieldIndex(t3, e3));
          })
        )).next(() => Rt.waitFor(i)));
      });
    }(yield Ba(t), e);
  }));
}
function th(t) {
  const e = {};
  return void 0 !== t.timeoutSeconds && (e.timeoutSeconds = t.timeoutSeconds), e;
}
var eh = /* @__PURE__ */ new Map();
function nh(t, e, n) {
  if (!n) throw new U2(q2.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`);
}
function sh(t, e, n, s) {
  if (true === e && true === s) throw new U2(q2.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function ih(t) {
  if (!ht.isDocumentKey(t)) throw new U2(q2.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}
function rh(t) {
  if (ht.isDocumentKey(t)) throw new U2(q2.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}
function oh(t) {
  if (void 0 === t) return "undefined";
  if (null === t) return "null";
  if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if ("number" == typeof t || "boolean" == typeof t) return "" + t;
  if ("object" == typeof t) {
    if (t instanceof Array) return "an array";
    {
      const e = (
        /** try to get the constructor name for an object. */
        function(t2) {
          if (t2.constructor) return t2.constructor.name;
          return null;
        }(t)
      );
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return "function" == typeof t ? "a function" : O2();
}
function uh(t, e) {
  if ("_delegate" in t && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t = t._delegate), !(t instanceof e)) {
    if (e.name === t.constructor.name) throw new U2(q2.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = oh(t);
      throw new U2(q2.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
    }
  }
  return t;
}
function ch(t, e) {
  if (e <= 0) throw new U2(q2.INVALID_ARGUMENT, `Function ${t}() requires a positive number, but it was: ${e}.`);
}
var ah = class {
  constructor(t) {
    var e, n;
    if (void 0 === t.host) {
      if (void 0 !== t.ssl) throw new U2(q2.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
    if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, this.cache = t.localCache, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new U2(q2.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    sh("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === t.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = th(null !== (n = t.experimentalLongPollingOptions) && void 0 !== n ? n : {}), function(t2) {
      if (void 0 !== t2.timeoutSeconds) {
        if (isNaN(t2.timeoutSeconds)) throw new U2(q2.INVALID_ARGUMENT, `invalid long polling timeout: ${t2.timeoutSeconds} (must not be NaN)`);
        if (t2.timeoutSeconds < 5) throw new U2(q2.INVALID_ARGUMENT, `invalid long polling timeout: ${t2.timeoutSeconds} (minimum allowed value is 5)`);
        if (t2.timeoutSeconds > 30) throw new U2(q2.INVALID_ARGUMENT, `invalid long polling timeout: ${t2.timeoutSeconds} (maximum allowed value is 30)`);
      }
    }(this.experimentalLongPollingOptions), this.useFetchStreams = !!t.useFetchStreams;
  }
  isEqual(t) {
    return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && (e = this.experimentalLongPollingOptions, n = t.experimentalLongPollingOptions, e.timeoutSeconds === n.timeoutSeconds) && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
    var e, n;
  }
};
var hh = class {
  /** @hideconstructor */
  constructor(t, e, n, s) {
    this._authCredentials = t, this._appCheckCredentials = e, this._databaseId = n, this._app = s, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new ah({}), this._settingsFrozen = false;
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app) throw new U2(q2.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return void 0 !== this._terminateTask;
  }
  _setSettings(t) {
    if (this._settingsFrozen) throw new U2(q2.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new ah(t), void 0 !== t.credentials && (this._authCredentials = function(t2) {
      if (!t2) return new Q2();
      switch (t2.type) {
        case "firstParty":
          return new H2(t2.sessionIndex || "0", t2.iamToken || null, t2.authTokenFactory || null);
        case "provider":
          return t2.client;
        default:
          throw new U2(q2.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function(t) {
      const e = eh.get(t);
      e && (N2("ComponentProvider", "Removing Datastore"), eh.delete(t), e.terminate());
    }(this), Promise.resolve();
  }
};
function lh(t, e, n, s = {}) {
  var i;
  const r2 = (t = uh(t, hh))._getSettings(), o = `${e}:${n}`;
  if ("firestore.googleapis.com" !== r2.host && r2.host !== o && M2("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), t._setSettings(Object.assign(Object.assign({}, r2), {
    host: o,
    ssl: false
  })), s.mockUserToken) {
    let e2, n2;
    if ("string" == typeof s.mockUserToken) e2 = s.mockUserToken, n2 = V2.MOCK_USER;
    else {
      e2 = createMockUserToken(s.mockUserToken, null === (i = t._app) || void 0 === i ? void 0 : i.options.projectId);
      const r3 = s.mockUserToken.sub || s.mockUserToken.user_id;
      if (!r3) throw new U2(q2.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      n2 = new V2(r3);
    }
    t._authCredentials = new j(new G2(e2, n2));
  }
}
var fh = class _fh {
  /** @hideconstructor */
  constructor(t, e, n) {
    this.converter = e, this._key = n, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = t;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new wh(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new _fh(this.firestore, t, this._key);
  }
};
var dh = class _dh {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(t, e, n) {
    this.converter = e, this._query = n, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = t;
  }
  withConverter(t) {
    return new _dh(this.firestore, t, this._query);
  }
};
var wh = class _wh extends dh {
  /** @hideconstructor */
  constructor(t, e, n) {
    super(t, e, Gn(n)), this._path = n, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new fh(
      this.firestore,
      /* converter= */
      null,
      new ht(t)
    );
  }
  withConverter(t) {
    return new _wh(this.firestore, t, this._path);
  }
};
function _h(t, e, ...n) {
  if (t = getModularInstance(t), nh("collection", "path", e), t instanceof hh) {
    const s = ut.fromString(e, ...n);
    return rh(s), new wh(
      t,
      /* converter= */
      null,
      s
    );
  }
  {
    if (!(t instanceof fh || t instanceof wh)) throw new U2(q2.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t._path.child(ut.fromString(e, ...n));
    return rh(s), new wh(
      t.firestore,
      /* converter= */
      null,
      s
    );
  }
}
function mh(t, e) {
  if (t = uh(t, hh), nh("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new U2(q2.INVALID_ARGUMENT, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
  return new dh(
    t,
    /* converter= */
    null,
    function(t2) {
      return new Un(ut.emptyPath(), t2);
    }(e)
  );
}
function gh(t, e, ...n) {
  if (t = getModularInstance(t), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  1 === arguments.length && (e = tt.A()), nh("doc", "path", e), t instanceof hh) {
    const s = ut.fromString(e, ...n);
    return ih(s), new fh(
      t,
      /* converter= */
      null,
      new ht(s)
    );
  }
  {
    if (!(t instanceof fh || t instanceof wh)) throw new U2(q2.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t._path.child(ut.fromString(e, ...n));
    return ih(s), new fh(t.firestore, t instanceof wh ? t.converter : null, new ht(s));
  }
}
function yh(t, e) {
  return t = getModularInstance(t), e = getModularInstance(e), (t instanceof fh || t instanceof wh) && (e instanceof fh || e instanceof wh) && t.firestore === e.firestore && t.path === e.path && t.converter === e.converter;
}
function ph(t, e) {
  return t = getModularInstance(t), e = getModularInstance(e), t instanceof dh && e instanceof dh && t.firestore === e.firestore && Zn(t._query, e._query) && t.converter === e.converter;
}
var Ih = class {
  constructor() {
    this.Gc = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.Qc = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.jc = false, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.zc = [], // visible for testing
    this.Wc = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.Hc = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.Jc = false, // List of TimerIds to fast-forward delays for.
    this.Yc = [], // Backoff timer used to schedule retries for retryable operations
    this.qo = new Bu(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.Xc = () => {
      const t2 = Ou();
      t2 && N2("AsyncQueue", "Visibility state changed to " + t2.visibilityState), this.qo.Mo();
    };
    const t = Ou();
    t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Xc);
  }
  get isShuttingDown() {
    return this.jc;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.Zc(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.ta(t);
  }
  enterRestrictedMode(t) {
    if (!this.jc) {
      this.jc = true, this.Jc = t || false;
      const e = Ou();
      e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Xc);
    }
  }
  enqueue(t) {
    if (this.Zc(), this.jc)
      return new Promise(() => {
      });
    const e = new K2();
    return this.ta(() => this.jc && this.Jc ? Promise.resolve() : (t().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.Qc.push(t), this.ea()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  ea() {
    return __async(this, null, function* () {
      if (0 !== this.Qc.length) {
        try {
          yield this.Qc[0](), this.Qc.shift(), this.qo.reset();
        } catch (t) {
          if (!Dt(t)) throw t;
          N2("AsyncQueue", "Operation failed with retryable error: " + t);
        }
        this.Qc.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
        // This is necessary to run retryable operations that failed during
        // their initial attempt since we don't know whether they are already
        // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
        // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
        // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
        // call scheduled here.
        // Since `backoffAndRun()` cancels an existing backoff and schedules a
        // new backoff on every call, there is only ever a single additional
        // operation in the queue.
        this.qo.No(() => this.ea());
      }
    });
  }
  ta(t) {
    const e = this.Gc.then(() => (this.Hc = true, t().catch((t2) => {
      this.Wc = t2, this.Hc = false;
      const e2 = (
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function(t3) {
          let e3 = t3.message || "";
          t3.stack && (e3 = t3.stack.includes(t3.message) ? t3.stack : t3.message + "\n" + t3.stack);
          return e3;
        }(t2)
      );
      throw k2("INTERNAL UNHANDLED ERROR: ", e2), t2;
    }).then((t2) => (this.Hc = false, t2))));
    return this.Gc = e, e;
  }
  enqueueAfterDelay(t, e, n) {
    this.Zc(), // Fast-forward delays for timerIds that have been overriden.
    this.Yc.indexOf(t) > -1 && (e = 0);
    const s = Tc2.createAndSchedule(this, t, e, n, (t2) => this.na(t2));
    return this.zc.push(s), s;
  }
  Zc() {
    this.Wc && O2();
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  sa() {
    return __async(this, null, function* () {
      let t;
      do {
        t = this.Gc, yield t;
      } while (t !== this.Gc);
    });
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  ia(t) {
    for (const e of this.zc) if (e.timerId === t) return true;
    return false;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  ra(t) {
    return this.sa().then(() => {
      this.zc.sort((t2, e) => t2.targetTimeMs - e.targetTimeMs);
      for (const e of this.zc) if (e.skipDelay(), "all" !== t && e.timerId === t) break;
      return this.sa();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  oa(t) {
    this.Yc.push(t);
  }
  /** Called once a DelayedOperation is run or canceled. */
  na(t) {
    const e = this.zc.indexOf(t);
    this.zc.splice(e, 1);
  }
};
function Th(t) {
  return function(t2, e) {
    if ("object" != typeof t2 || null === t2) return false;
    const n = t2;
    for (const t3 of e) if (t3 in n && "function" == typeof n[t3]) return true;
    return false;
  }(t, ["next", "error", "complete"]);
}
var Eh = class {
  constructor() {
    this._progressObserver = {}, this._taskCompletionResolver = new K2(), this._lastProgress = {
      taskState: "Running",
      totalBytes: 0,
      totalDocuments: 0,
      bytesLoaded: 0,
      documentsLoaded: 0
    };
  }
  /**
   * Registers functions to listen to bundle loading progress events.
   * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
   *   each time a Firestore document is loaded from the bundle.
   * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
   *   error, and there should be no more updates after this.
   * @param complete - Called when the loading task is complete.
   */
  onProgress(t, e, n) {
    this._progressObserver = {
      next: t,
      error: e,
      complete: n
    };
  }
  /**
   * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
   *
   * @param onRejected - Called when an error occurs during bundle loading.
   */
  catch(t) {
    return this._taskCompletionResolver.promise.catch(t);
  }
  /**
   * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
   *
   * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
   *   The update will always have its `taskState` set to `"Success"`.
   * @param onRejected - Called when an error occurs during bundle loading.
   */
  then(t, e) {
    return this._taskCompletionResolver.promise.then(t, e);
  }
  /**
   * Notifies all observers that bundle loading has completed, with a provided
   * `LoadBundleTaskProgress` object.
   *
   * @private
   */
  _completeWith(t) {
    this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(t);
  }
  /**
   * Notifies all observers that bundle loading has failed, with a provided
   * `Error` as the reason.
   *
   * @private
   */
  _failWith(t) {
    this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t);
  }
  /**
   * Notifies a progress update of loading a bundle.
   * @param progress - The new progress.
   *
   * @private
   */
  _updateProgress(t) {
    this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t);
  }
};
var Ah = -1;
var vh = class extends hh {
  /** @hideconstructor */
  constructor(t, e, n, s) {
    super(t, e, n, s), /**
     * Whether it's a {@link Firestore} or Firestore Lite instance.
     */
    this.type = "firestore", this._queue = new Ih(), this._persistenceKey = (null == s ? void 0 : s.name) || "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || // The client must be initialized to ensure that all subsequent API
    // usage throws an exception.
    Vh(this), this._firestoreClient.terminate();
  }
};
function Rh(t, e, n) {
  n || (n = "(default)");
  const s = _getProvider(t, "firestore");
  if (s.isInitialized(n)) {
    const t2 = s.getImmediate({
      identifier: n
    }), i = s.getOptions(n);
    if (deepEqual(i, e)) return t2;
    throw new U2(q2.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
  }
  if (void 0 !== e.cacheSizeBytes && void 0 !== e.localCache) throw new U2(q2.INVALID_ARGUMENT, "cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");
  if (void 0 !== e.cacheSizeBytes && -1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576) throw new U2(q2.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
  return s.initialize({
    options: e,
    instanceIdentifier: n
  });
}
function Ph(e, n) {
  const s = "object" == typeof e ? e : getApp(), i = "string" == typeof e ? e : n || "(default)", r2 = _getProvider(s, "firestore").getImmediate({
    identifier: i
  });
  if (!r2._initialized) {
    const t = getDefaultEmulatorHostnameAndPort("firestore");
    t && lh(r2, ...t);
  }
  return r2;
}
function bh(t) {
  return t._firestoreClient || Vh(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
}
function Vh(t) {
  var e, n, s;
  const i = t._freezeSettings(), r2 = function(t2, e2, n2, s2) {
    return new $e(t2, e2, n2, s2.host, s2.ssl, s2.experimentalForceLongPolling, s2.experimentalAutoDetectLongPolling, th(s2.experimentalLongPollingOptions), s2.useFetchStreams);
  }(t._databaseId, (null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) || "", t._persistenceKey, i);
  t._firestoreClient = new xa2(t._authCredentials, t._appCheckCredentials, t._queue, r2), (null === (n = i.cache) || void 0 === n ? void 0 : n._offlineComponentProvider) && (null === (s = i.cache) || void 0 === s ? void 0 : s._onlineComponentProvider) && (t._firestoreClient._uninitializedComponentsProvider = {
    _offlineKind: i.cache.kind,
    _offline: i.cache._offlineComponentProvider,
    _online: i.cache._onlineComponentProvider
  });
}
function Sh(t, e) {
  Bh(t = uh(t, vh));
  const n = bh(t);
  if (n._uninitializedComponentsProvider) throw new U2(q2.FAILED_PRECONDITION, "SDK cache is already specified.");
  M2("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
  const s = t._freezeSettings(), i = new Pa2();
  return Ch(n, i, new va2(i, s.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
}
function Dh(t) {
  Bh(t = uh(t, vh));
  const e = bh(t);
  if (e._uninitializedComponentsProvider) throw new U2(q2.FAILED_PRECONDITION, "SDK cache is already specified.");
  M2("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
  const n = t._freezeSettings(), s = new Pa2();
  return Ch(e, s, new Ra2(s, n.cacheSizeBytes));
}
function Ch(t, e, n) {
  const s = new K2();
  return t.asyncQueue.enqueue(() => __async(this, null, function* () {
    try {
      yield Na2(t, n), yield ka2(t, e), s.resolve();
    } catch (t2) {
      const e2 = t2;
      if (!Ma(e2)) throw e2;
      M2("Error enabling indexeddb cache. Falling back to memory cache: " + e2), s.reject(e2);
    }
  })).then(() => s.promise);
}
function xh(t) {
  if (t._initialized && !t._terminated) throw new U2(q2.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
  const e = new K2();
  return t._queue.enqueueAndForgetEvenWhileRestricted(() => __async(this, null, function* () {
    try {
      yield function(t2) {
        return __async(this, null, function* () {
          if (!bt.D()) return Promise.resolve();
          const e2 = t2 + "main";
          yield bt.delete(e2);
        });
      }(Zo(t._databaseId, t._persistenceKey)), e.resolve();
    } catch (t2) {
      e.reject(t2);
    }
  })), e.promise;
}
function Nh(t) {
  return function(t2) {
    const e = new K2();
    return t2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      return Zc2(yield qa2(t2), e);
    })), e.promise;
  }(bh(t = uh(t, vh)));
}
function kh(t) {
  return Ga2(bh(t = uh(t, vh)));
}
function Mh(t) {
  return Qa2(bh(t = uh(t, vh)));
}
function $h(t) {
  return _removeServiceInstance(t.app, "firestore", t._databaseId.database), t._delete();
}
function Oh(t, e) {
  const n = bh(t = uh(t, vh)), s = new Eh();
  return Ya2(n, t._databaseId, e, s), s;
}
function Fh(t, e) {
  return Xa(bh(t = uh(t, vh)), e).then((e2) => e2 ? new dh(t, null, e2.query) : null);
}
function Bh(t) {
  if (t._initialized || t._terminated) throw new U2(q2.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}
var Lh = class {
  /**
   * Create a new AggregateField<T>
   * @param _aggregateType Specifies the type of aggregation operation to perform.
   * @param _internalFieldPath Optionally specifies the field that is aggregated.
   * @internal
   */
  constructor(t = "count", e) {
    this._aggregateType = t, this._internalFieldPath = e, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateField";
  }
};
var qh = class {
  /** @hideconstructor */
  constructor(t, e, n) {
    this._userDataWriter = e, this._data = n, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateQuerySnapshot", this.query = t;
  }
  /**
   * Returns the results of the aggregations performed over the underlying
   * query.
   *
   * The keys of the returned object will be the same as those of the
   * `AggregateSpec` object specified to the aggregation method, and the values
   * will be the corresponding aggregation result.
   *
   * @returns The results of the aggregations performed over the underlying
   * query.
   */
  data() {
    return this._userDataWriter.convertObjectMap(this._data);
  }
};
var Uh = class _Uh {
  /** @hideconstructor */
  constructor(t) {
    this._byteString = t;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(t) {
    try {
      return new _Uh(Ve.fromBase64String(t));
    } catch (t2) {
      throw new U2(q2.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t2);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(t) {
    return new _Uh(Ve.fromUint8Array(t));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
};
var Kh = class {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...t) {
    for (let e = 0; e < t.length; ++e) if (0 === t[e].length) throw new U2(q2.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new at(t);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
};
function Gh() {
  return new Kh("__name__");
}
var Qh = class {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(t) {
    this._methodName = t;
  }
};
var jh = class {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(t, e) {
    if (!isFinite(t) || t < -90 || t > 90) throw new U2(q2.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
    if (!isFinite(e) || e < -180 || e > 180) throw new U2(q2.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this._lat = t, this._long = e;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  /** Returns a JSON-serializable representation of this GeoPoint. */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(t) {
    return et(this._lat, t._lat) || et(this._long, t._long);
  }
};
var zh = /^__.*__$/;
var Wh = class {
  constructor(t, e, n) {
    this.data = t, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t, e) {
    return null !== this.fieldMask ? new zs(t, this.data, this.fieldMask, e, this.fieldTransforms) : new js(t, this.data, e, this.fieldTransforms);
  }
};
var Hh = class {
  constructor(t, e, n) {
    this.data = t, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t, e) {
    return new zs(t, this.data, this.fieldMask, e, this.fieldTransforms);
  }
};
function Jh(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw O2();
  }
}
var Yh = class _Yh {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(t, e, n, s, i, r2) {
    this.settings = t, this.databaseId = e, this.serializer = n, this.ignoreUndefinedProperties = s, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    void 0 === i && this.ua(), this.fieldTransforms = i || [], this.fieldMask = r2 || [];
  }
  get path() {
    return this.settings.path;
  }
  get ca() {
    return this.settings.ca;
  }
  /** Returns a new context with the specified settings overwritten. */
  aa(t) {
    return new _Yh(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  ha(t) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.aa({
      path: n,
      la: false
    });
    return s.fa(t), s;
  }
  da(t) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.aa({
      path: n,
      la: false
    });
    return s.ua(), s;
  }
  wa(t) {
    return this.aa({
      path: void 0,
      la: true
    });
  }
  _a(t) {
    return gl(t, this.settings.methodName, this.settings.ma || false, this.path, this.settings.ga);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(t) {
    return void 0 !== this.fieldMask.find((e) => t.isPrefixOf(e)) || void 0 !== this.fieldTransforms.find((e) => t.isPrefixOf(e.field));
  }
  ua() {
    if (this.path) for (let t = 0; t < this.path.length; t++) this.fa(this.path.get(t));
  }
  fa(t) {
    if (0 === t.length) throw this._a("Document fields must not be empty");
    if (Jh(this.ca) && zh.test(t)) throw this._a('Document fields cannot begin and end with "__"');
  }
};
var Xh = class {
  constructor(t, e, n) {
    this.databaseId = t, this.ignoreUndefinedProperties = e, this.serializer = n || Fu(t);
  }
  /** Creates a new top-level parse context. */
  ya(t, e, n, s = false) {
    return new Yh({
      ca: t,
      methodName: e,
      ga: n,
      path: at.emptyPath(),
      la: false,
      ma: s
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
};
function Zh(t) {
  const e = t._freezeSettings(), n = Fu(t._databaseId);
  return new Xh(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function tl(t, e, n, s, i, r2 = {}) {
  const o = t.ya(r2.merge || r2.mergeFields ? 2 : 0, e, n, i);
  dl("Data must be an object, but it was:", o, s);
  const u = ll(s, o);
  let c, a;
  if (r2.merge) c = new Re(o.fieldMask), a = o.fieldTransforms;
  else if (r2.mergeFields) {
    const t2 = [];
    for (const s2 of r2.mergeFields) {
      const i2 = wl(e, s2, n);
      if (!o.contains(i2)) throw new U2(q2.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      yl(t2, i2) || t2.push(i2);
    }
    c = new Re(t2), a = o.fieldTransforms.filter((t3) => c.covers(t3.field));
  } else c = null, a = o.fieldTransforms;
  return new Wh(new un(u), c, a);
}
var el = class _el extends Qh {
  _toFieldTransform(t) {
    if (2 !== t.ca) throw 1 === t.ca ? t._a(`${this._methodName}() can only appear at the top level of your update data`) : t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return t.fieldMask.push(t.path), null;
  }
  isEqual(t) {
    return t instanceof _el;
  }
};
function nl(t, e, n) {
  return new Yh({
    ca: 3,
    ga: e.settings.ga,
    methodName: t._methodName,
    la: n
  }, e.databaseId, e.serializer, e.ignoreUndefinedProperties);
}
var sl = class _sl extends Qh {
  _toFieldTransform(t) {
    return new Ms(t.path, new bs());
  }
  isEqual(t) {
    return t instanceof _sl;
  }
};
var il = class extends Qh {
  constructor(t, e) {
    super(t), this.pa = e;
  }
  _toFieldTransform(t) {
    const e = nl(
      this,
      t,
      /*array=*/
      true
    ), n = this.pa.map((t2) => hl(t2, e)), s = new Vs(n);
    return new Ms(t.path, s);
  }
  isEqual(t) {
    return this === t;
  }
};
var rl = class extends Qh {
  constructor(t, e) {
    super(t), this.pa = e;
  }
  _toFieldTransform(t) {
    const e = nl(
      this,
      t,
      /*array=*/
      true
    ), n = this.pa.map((t2) => hl(t2, e)), s = new Ds(n);
    return new Ms(t.path, s);
  }
  isEqual(t) {
    return this === t;
  }
};
var ol = class extends Qh {
  constructor(t, e) {
    super(t), this.Ia = e;
  }
  _toFieldTransform(t) {
    const e = new xs(t.serializer, Es(t.serializer, this.Ia));
    return new Ms(t.path, e);
  }
  isEqual(t) {
    return this === t;
  }
};
function ul(t, e, n, s) {
  const i = t.ya(1, e, n);
  dl("Data must be an object, but it was:", i, s);
  const r2 = [], o = un.empty();
  ge(s, (t2, s2) => {
    const u2 = ml(e, t2, n);
    s2 = getModularInstance(s2);
    const c = i.da(u2);
    if (s2 instanceof el)
      r2.push(u2);
    else {
      const t3 = hl(s2, c);
      null != t3 && (r2.push(u2), o.set(u2, t3));
    }
  });
  const u = new Re(r2);
  return new Hh(o, u, i.fieldTransforms);
}
function cl(t, e, n, s, i, r2) {
  const o = t.ya(1, e, n), u = [wl(e, s, n)], c = [i];
  if (r2.length % 2 != 0) throw new U2(q2.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let t2 = 0; t2 < r2.length; t2 += 2) u.push(wl(e, r2[t2])), c.push(r2[t2 + 1]);
  const a = [], h = un.empty();
  for (let t2 = u.length - 1; t2 >= 0; --t2) if (!yl(a, u[t2])) {
    const e2 = u[t2];
    let n2 = c[t2];
    n2 = getModularInstance(n2);
    const s2 = o.da(e2);
    if (n2 instanceof el)
      a.push(e2);
    else {
      const t3 = hl(n2, s2);
      null != t3 && (a.push(e2), h.set(e2, t3));
    }
  }
  const l2 = new Re(a);
  return new Hh(h, l2, o.fieldTransforms);
}
function al(t, e, n, s = false) {
  return hl(n, t.ya(s ? 4 : 3, e));
}
function hl(t, e) {
  if (fl(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = getModularInstance(t)
  )) return dl("Unsupported field value:", e, t), ll(t, e);
  if (t instanceof Qh)
    return function(t2, e2) {
      if (!Jh(e2.ca)) throw e2._a(`${t2._methodName}() can only be used with update() and set()`);
      if (!e2.path) throw e2._a(`${t2._methodName}() is not currently supported inside arrays`);
      const n = t2._toFieldTransform(e2);
      n && e2.fieldTransforms.push(n);
    }(t, e), null;
  if (void 0 === t && e.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t instanceof Array
  ) {
    if (e.settings.la && 4 !== e.ca) throw e._a("Nested arrays are not supported");
    return function(t2, e2) {
      const n = [];
      let s = 0;
      for (const i of t2) {
        let t3 = hl(i, e2.wa(s));
        null == t3 && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (t3 = {
          nullValue: "NULL_VALUE"
        }), n.push(t3), s++;
      }
      return {
        arrayValue: {
          values: n
        }
      };
    }(t, e);
  }
  return function(t2, e2) {
    if (null === (t2 = getModularInstance(t2))) return {
      nullValue: "NULL_VALUE"
    };
    if ("number" == typeof t2) return Es(e2.serializer, t2);
    if ("boolean" == typeof t2) return {
      booleanValue: t2
    };
    if ("string" == typeof t2) return {
      stringValue: t2
    };
    if (t2 instanceof Date) {
      const n = it.fromDate(t2);
      return {
        timestampValue: Di(e2.serializer, n)
      };
    }
    if (t2 instanceof it) {
      const n = new it(t2.seconds, 1e3 * Math.floor(t2.nanoseconds / 1e3));
      return {
        timestampValue: Di(e2.serializer, n)
      };
    }
    if (t2 instanceof jh) return {
      geoPointValue: {
        latitude: t2.latitude,
        longitude: t2.longitude
      }
    };
    if (t2 instanceof Uh) return {
      bytesValue: Ci(e2.serializer, t2._byteString)
    };
    if (t2 instanceof fh) {
      const n = e2.databaseId, s = t2.firestore._databaseId;
      if (!s.isEqual(n)) throw e2._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);
      return {
        referenceValue: ki(t2.firestore._databaseId || e2.databaseId, t2._key.path)
      };
    }
    throw e2._a(`Unsupported field value: ${oh(t2)}`);
  }(t, e);
}
function ll(t, e) {
  const n = {};
  return ye(t) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path)
  ) : ge(t, (t2, s) => {
    const i = hl(s, e.ha(t2));
    null != i && (n[t2] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}
function fl(t) {
  return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof it || t instanceof jh || t instanceof Uh || t instanceof fh || t instanceof Qh);
}
function dl(t, e, n) {
  if (!fl(n) || !function(t2) {
    return "object" == typeof t2 && null !== t2 && (Object.getPrototypeOf(t2) === Object.prototype || null === Object.getPrototypeOf(t2));
  }(n)) {
    const s = oh(n);
    throw "an object" === s ? e._a(t + " a custom object") : e._a(t + " " + s);
  }
}
function wl(t, e, n) {
  if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    (e = getModularInstance(e)) instanceof Kh
  ) return e._internalPath;
  if ("string" == typeof e) return ml(t, e);
  throw gl(
    "Field path arguments must be of type string or ",
    t,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    n
  );
}
var _l = new RegExp("[~\\*/\\[\\]]");
function ml(t, e, n) {
  if (e.search(_l) >= 0) throw gl(
    `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
    t,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    n
  );
  try {
    return new Kh(...e.split("."))._internalPath;
  } catch (s) {
    throw gl(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      n
    );
  }
}
function gl(t, e, n, s, i) {
  const r2 = s && !s.isEmpty(), o = void 0 !== i;
  let u = `Function ${e}() called with invalid data`;
  n && (u += " (via `toFirestore()`)"), u += ". ";
  let c = "";
  return (r2 || o) && (c += " (found", r2 && (c += ` in field ${s}`), o && (c += ` in document ${i}`), c += ")"), new U2(q2.INVALID_ARGUMENT, u + t + c);
}
function yl(t, e) {
  return t.some((t2) => t2.isEqual(e));
}
var pl = class {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(t, e, n, s, i) {
    this._firestore = t, this._userDataWriter = e, this._key = n, this._document = s, this._converter = i;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new fh(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return null !== this._document;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new Il(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t) {
    if (this._document) {
      const e = this._document.data.field(Tl("DocumentSnapshot.get", t));
      if (null !== e) return this._userDataWriter.convertValue(e);
    }
  }
};
var Il = class extends pl {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
};
function Tl(t, e) {
  return "string" == typeof e ? ml(t, e) : e instanceof Kh ? e._internalPath : e._delegate._internalPath;
}
function El(t) {
  if ("L" === t.limitType && 0 === t.explicitOrderBy.length) throw new U2(q2.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
var Al = class {
};
var vl = class extends Al {
};
function Rl(t, e, ...n) {
  let s = [];
  e instanceof Al && s.push(e), s = s.concat(n), function(t2) {
    const e2 = t2.filter((t3) => t3 instanceof Vl).length, n2 = t2.filter((t3) => t3 instanceof Pl).length;
    if (e2 > 1 || e2 > 0 && n2 > 0) throw new U2(q2.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
  }(s);
  for (const e2 of s) t = e2._apply(t);
  return t;
}
var Pl = class _Pl extends vl {
  /**
   * @internal
   */
  constructor(t, e, n) {
    super(), this._field = t, this._op = e, this._value = n, /** The type of this query constraint */
    this.type = "where";
  }
  static _create(t, e, n) {
    return new _Pl(t, e, n);
  }
  _apply(t) {
    const e = this._parse(t);
    return Ql(t._query, e), new dh(t.firestore, t.converter, Yn(t._query, e));
  }
  _parse(t) {
    const e = Zh(t.firestore), n = function(t2, e2, n2, s, i, r2, o) {
      let u;
      if (i.isKeyField()) {
        if ("array-contains" === r2 || "array-contains-any" === r2) throw new U2(q2.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r2}' queries on documentId().`);
        if ("in" === r2 || "not-in" === r2) {
          Gl(o, r2);
          const e3 = [];
          for (const n3 of o) e3.push(Kl(s, t2, n3));
          u = {
            arrayValue: {
              values: e3
            }
          };
        } else u = Kl(s, t2, o);
      } else "in" !== r2 && "not-in" !== r2 && "array-contains-any" !== r2 || Gl(o, r2), u = al(
        n2,
        e2,
        o,
        /* allowArrays= */
        "in" === r2 || "not-in" === r2
      );
      return mn.create(i, r2, u);
    }(t._query, "where", e, t.firestore._databaseId, this._field, this._op, this._value);
    return n;
  }
};
function bl(t, e, n) {
  const s = e, i = Tl("where", t);
  return Pl._create(i, s, n);
}
var Vl = class _Vl extends Al {
  /**
   * @internal
   */
  constructor(t, e) {
    super(), this.type = t, this._queryConstraints = e;
  }
  static _create(t, e) {
    return new _Vl(t, e);
  }
  _parse(t) {
    const e = this._queryConstraints.map((e2) => e2._parse(t)).filter((t2) => t2.getFilters().length > 0);
    return 1 === e.length ? e[0] : gn.create(e, this._getOperator());
  }
  _apply(t) {
    const e = this._parse(t);
    return 0 === e.getFilters().length ? t : (function(t2, e2) {
      let n = t2;
      const s = e2.getFlattenedFilters();
      for (const t3 of s) Ql(n, t3), n = Yn(n, t3);
    }(t._query, e), new dh(t.firestore, t.converter, Yn(t._query, e)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return "and" === this.type ? "and" : "or";
  }
};
function Sl(...t) {
  return t.forEach((t2) => zl("or", t2)), Vl._create("or", t);
}
function Dl(...t) {
  return t.forEach((t2) => zl("and", t2)), Vl._create("and", t);
}
var Cl = class _Cl extends vl {
  /**
   * @internal
   */
  constructor(t, e) {
    super(), this._field = t, this._direction = e, /** The type of this query constraint */
    this.type = "orderBy";
  }
  static _create(t, e) {
    return new _Cl(t, e);
  }
  _apply(t) {
    const e = function(t2, e2, n) {
      if (null !== t2.startAt) throw new U2(q2.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== t2.endAt) throw new U2(q2.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      const s = new dn(e2, n);
      return function(t3, e3) {
        if (null === jn(t3)) {
          const n2 = zn(t3);
          null !== n2 && jl(t3, n2, e3.field);
        }
      }(t2, s), s;
    }(t._query, this._field, this._direction);
    return new dh(t.firestore, t.converter, function(t2, e2) {
      const n = t2.explicitOrderBy.concat([e2]);
      return new Un(t2.path, t2.collectionGroup, n, t2.filters.slice(), t2.limit, t2.limitType, t2.startAt, t2.endAt);
    }(t._query, e));
  }
};
function xl(t, e = "asc") {
  const n = e, s = Tl("orderBy", t);
  return Cl._create(s, n);
}
var Nl = class _Nl extends vl {
  /**
   * @internal
   */
  constructor(t, e, n) {
    super(), this.type = t, this._limit = e, this._limitType = n;
  }
  static _create(t, e, n) {
    return new _Nl(t, e, n);
  }
  _apply(t) {
    return new dh(t.firestore, t.converter, Xn(t._query, this._limit, this._limitType));
  }
};
function kl(t) {
  return ch("limit", t), Nl._create(
    "limit",
    t,
    "F"
    /* LimitType.First */
  );
}
function Ml(t) {
  return ch("limitToLast", t), Nl._create(
    "limitToLast",
    t,
    "L"
    /* LimitType.Last */
  );
}
var $l = class _$l extends vl {
  /**
   * @internal
   */
  constructor(t, e, n) {
    super(), this.type = t, this._docOrFields = e, this._inclusive = n;
  }
  static _create(t, e, n) {
    return new _$l(t, e, n);
  }
  _apply(t) {
    const e = Ul(t, this.type, this._docOrFields, this._inclusive);
    return new dh(t.firestore, t.converter, function(t2, e2) {
      return new Un(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), t2.limit, t2.limitType, e2, t2.endAt);
    }(t._query, e));
  }
};
function Ol(...t) {
  return $l._create(
    "startAt",
    t,
    /*inclusive=*/
    true
  );
}
function Fl(...t) {
  return $l._create(
    "startAfter",
    t,
    /*inclusive=*/
    false
  );
}
var Bl = class _Bl extends vl {
  /**
   * @internal
   */
  constructor(t, e, n) {
    super(), this.type = t, this._docOrFields = e, this._inclusive = n;
  }
  static _create(t, e, n) {
    return new _Bl(t, e, n);
  }
  _apply(t) {
    const e = Ul(t, this.type, this._docOrFields, this._inclusive);
    return new dh(t.firestore, t.converter, function(t2, e2) {
      return new Un(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), t2.limit, t2.limitType, t2.startAt, e2);
    }(t._query, e));
  }
};
function Ll(...t) {
  return Bl._create(
    "endBefore",
    t,
    /*inclusive=*/
    false
  );
}
function ql(...t) {
  return Bl._create(
    "endAt",
    t,
    /*inclusive=*/
    true
  );
}
function Ul(t, e, n, s) {
  if (n[0] = getModularInstance(n[0]), n[0] instanceof pl) return function(t2, e2, n2, s2, i) {
    if (!s2) throw new U2(q2.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n2}().`);
    const r2 = [];
    for (const n3 of Hn(t2)) if (n3.field.isKeyField()) r2.push(We(e2, s2.key));
    else {
      const t3 = s2.data.field(n3.field);
      if (Ne(t3)) throw new U2(q2.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n3.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
      if (null === t3) {
        const t4 = n3.field.canonicalString();
        throw new U2(q2.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${t4}' (used as the orderBy) does not exist.`);
      }
      r2.push(t3);
    }
    return new hn(r2, i);
  }(t._query, t.firestore._databaseId, e, n[0]._document, s);
  {
    const i = Zh(t.firestore);
    return function(t2, e2, n2, s2, i2, r2) {
      const o = t2.explicitOrderBy;
      if (i2.length > o.length) throw new U2(q2.INVALID_ARGUMENT, `Too many arguments provided to ${s2}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
      const u = [];
      for (let r3 = 0; r3 < i2.length; r3++) {
        const c = i2[r3];
        if (o[r3].field.isKeyField()) {
          if ("string" != typeof c) throw new U2(q2.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${s2}(), but got a ${typeof c}`);
          if (!Wn(t2) && -1 !== c.indexOf("/")) throw new U2(q2.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${s2}() must be a plain document ID, but '${c}' contains a slash.`);
          const n3 = t2.path.child(ut.fromString(c));
          if (!ht.isDocumentKey(n3)) throw new U2(q2.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${s2}() must result in a valid document path, but '${n3}' is not because it contains an odd number of segments.`);
          const i3 = new ht(n3);
          u.push(We(e2, i3));
        } else {
          const t3 = al(n2, s2, c);
          u.push(t3);
        }
      }
      return new hn(u, r2);
    }(t._query, t.firestore._databaseId, i, e, n, s);
  }
}
function Kl(t, e, n) {
  if ("string" == typeof (n = getModularInstance(n))) {
    if ("" === n) throw new U2(q2.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!Wn(e) && -1 !== n.indexOf("/")) throw new U2(q2.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const s = e.path.child(ut.fromString(n));
    if (!ht.isDocumentKey(s)) throw new U2(q2.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
    return We(t, new ht(s));
  }
  if (n instanceof fh) return We(t, n._key);
  throw new U2(q2.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`);
}
function Gl(t, e) {
  if (!Array.isArray(t) || 0 === t.length) throw new U2(q2.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
}
function Ql(t, e) {
  if (e.isInequality()) {
    const n2 = zn(t), s = e.field;
    if (null !== n2 && !n2.isEqual(s)) throw new U2(q2.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n2.toString()}' and '${s.toString()}'`);
    const i = jn(t);
    null !== i && jl(t, s, i);
  }
  const n = function(t2, e2) {
    for (const n2 of t2) for (const t3 of n2.getFlattenedFilters()) if (e2.indexOf(t3.op) >= 0) return t3.op;
    return null;
  }(t.filters, function(t2) {
    switch (t2) {
      case "!=":
        return [
          "!=",
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "array-contains-any":
      case "in":
        return [
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "not-in":
        return [
          "array-contains-any",
          "in",
          "not-in",
          "!="
          /* Operator.NOT_EQUAL */
        ];
      default:
        return [];
    }
  }(e.op));
  if (null !== n)
    throw n === e.op ? new U2(q2.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new U2(q2.INVALID_ARGUMENT, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`);
}
function jl(t, e, n) {
  if (!n.isEqual(e)) throw new U2(q2.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}
function zl(t, e) {
  if (!(e instanceof Pl || e instanceof Vl)) throw new U2(q2.INVALID_ARGUMENT, `Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`);
}
var Wl = class {
  convertValue(t, e = "none") {
    switch (Le(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return Ce(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, e);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(xe(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, e);
      case 10:
        return this.convertObject(t.mapValue, e);
      default:
        throw O2();
    }
  }
  convertObject(t, e) {
    return this.convertObjectMap(t.fields, e);
  }
  /**
   * @internal
   */
  convertObjectMap(t, e = "none") {
    const n = {};
    return ge(t, (t2, s) => {
      n[t2] = this.convertValue(s, e);
    }), n;
  }
  convertGeoPoint(t) {
    return new jh(Ce(t.latitude), Ce(t.longitude));
  }
  convertArray(t, e) {
    return (t.values || []).map((t2) => this.convertValue(t2, e));
  }
  convertServerTimestamp(t, e) {
    switch (e) {
      case "previous":
        const n = ke(t);
        return null == n ? null : this.convertValue(n, e);
      case "estimate":
        return this.convertTimestamp(Me(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    const e = De(t);
    return new it(e.seconds, e.nanos);
  }
  convertDocumentKey(t, e) {
    const n = ut.fromString(t);
    F2(ur(n));
    const s = new Oe(n.get(1), n.get(3)), i = new ht(n.popFirst(5));
    return s.isEqual(e) || // TODO(b/64130202): Somehow support foreign references.
    k2(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), i;
  }
};
function Hl(t, e, n) {
  let s;
  return s = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, s;
}
var Jl = class extends Wl {
  constructor(t) {
    super(), this.firestore = t;
  }
  convertBytes(t) {
    return new Uh(t);
  }
  convertReference(t) {
    const e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new fh(
      this.firestore,
      /* converter= */
      null,
      e
    );
  }
};
function Yl(t) {
  return new Lh("sum", wl("sum", t));
}
function Xl(t) {
  return new Lh("avg", wl("average", t));
}
function Zl() {
  return new Lh("count");
}
function tf(t, e) {
  var n, s;
  return t instanceof Lh && e instanceof Lh && t._aggregateType === e._aggregateType && (null === (n = t._internalFieldPath) || void 0 === n ? void 0 : n.canonicalString()) === (null === (s = e._internalFieldPath) || void 0 === s ? void 0 : s.canonicalString());
}
function ef(t, e) {
  return ph(t.query, e.query) && deepEqual(t.data(), e.data());
}
var nf = class {
  /** @hideconstructor */
  constructor(t, e) {
    this.hasPendingWrites = t, this.fromCache = e;
  }
  /**
   * Returns true if this `SnapshotMetadata` is equal to the provided one.
   *
   * @param other - The `SnapshotMetadata` to compare against.
   * @returns true if this `SnapshotMetadata` is equal to the provided one.
   */
  isEqual(t) {
    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
  }
};
var sf = class extends pl {
  /** @hideconstructor protected */
  constructor(t, e, n, s, i, r2) {
    super(t, e, n, s, r2), this._firestore = t, this._firestoreImpl = t, this.metadata = i;
  }
  /**
   * Returns whether or not the data exists. True if the document exists.
   */
  exists() {
    return super.exists();
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document or `undefined` if
   * the document doesn't exist.
   */
  data(t = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new rf(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(e, t);
      }
      return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * By default, a `serverTimestamp()` that has not yet been set to
   * its final value will be returned as `null`. You can override this by
   * passing an options object.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @param options - An options object to configure how the field is retrieved
   * from the snapshot (for example the desired behavior for server timestamps
   * that have not yet been set to their final value).
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t, e = {}) {
    if (this._document) {
      const n = this._document.data.field(Tl("DocumentSnapshot.get", t));
      if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
    }
  }
};
var rf = class extends sf {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @override
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document.
   */
  data(t = {}) {
    return super.data(t);
  }
};
var of = class {
  /** @hideconstructor */
  constructor(t, e, n, s) {
    this._firestore = t, this._userDataWriter = e, this._snapshot = s, this.metadata = new nf(s.hasPendingWrites, s.fromCache), this.query = n;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    const t = [];
    return this.forEach((e) => t.push(e)), t;
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this._snapshot.docs.size;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return 0 === this.size;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(t, e) {
    this._snapshot.docs.forEach((n) => {
      t.call(e, new rf(this._firestore, this._userDataWriter, n.key, n, new nf(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  /**
   * Returns an array of the documents changes since the last snapshot. If this
   * is the first snapshot, all documents will be in the list as 'added'
   * changes.
   *
   * @param options - `SnapshotListenOptions` that control whether metadata-only
   * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
   * snapshot events.
   */
  docChanges(t = {}) {
    const e = !!t.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges) throw new U2(q2.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
    function(t2, e2) {
      if (t2._snapshot.oldDocs.isEmpty()) {
        let e3 = 0;
        return t2._snapshot.docChanges.map((n) => {
          const s = new rf(t2._firestore, t2._userDataWriter, n.doc.key, n.doc, new nf(t2._snapshot.mutatedKeys.has(n.doc.key), t2._snapshot.fromCache), t2.query.converter);
          return n.doc, {
            type: "added",
            doc: s,
            oldIndex: -1,
            newIndex: e3++
          };
        });
      }
      {
        let n = t2._snapshot.oldDocs;
        return t2._snapshot.docChanges.filter((t3) => e2 || 3 !== t3.type).map((e3) => {
          const s = new rf(t2._firestore, t2._userDataWriter, e3.doc.key, e3.doc, new nf(t2._snapshot.mutatedKeys.has(e3.doc.key), t2._snapshot.fromCache), t2.query.converter);
          let i = -1, r2 = -1;
          return 0 !== e3.type && (i = n.indexOf(e3.doc.key), n = n.delete(e3.doc.key)), 1 !== e3.type && (n = n.add(e3.doc), r2 = n.indexOf(e3.doc.key)), {
            type: uf(e3.type),
            doc: s,
            oldIndex: i,
            newIndex: r2
          };
        });
      }
    }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
  }
};
function uf(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return O2();
  }
}
function cf(t, e) {
  return t instanceof sf && e instanceof sf ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof of && e instanceof of && t._firestore === e._firestore && ph(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._snapshot.isEqual(e._snapshot);
}
function af(t) {
  t = uh(t, fh);
  const e = uh(t.firestore, vh);
  return za2(bh(e), t._key).then((n) => Af(e, t, n));
}
var hf = class extends Wl {
  constructor(t) {
    super(), this.firestore = t;
  }
  convertBytes(t) {
    return new Uh(t);
  }
  convertReference(t) {
    const e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new fh(
      this.firestore,
      /* converter= */
      null,
      e
    );
  }
};
function lf(t) {
  t = uh(t, fh);
  const e = uh(t.firestore, vh), n = bh(e), s = new hf(e);
  return ja(n, t._key).then((n2) => new sf(e, s, t._key, n2, new nf(
    null !== n2 && n2.hasLocalMutations,
    /* fromCache= */
    true
  ), t.converter));
}
function ff(t) {
  t = uh(t, fh);
  const e = uh(t.firestore, vh);
  return za2(bh(e), t._key, {
    source: "server"
  }).then((n) => Af(e, t, n));
}
function df(t) {
  t = uh(t, dh);
  const e = uh(t.firestore, vh), n = bh(e), s = new hf(e);
  return El(t._query), Ha2(n, t._query).then((n2) => new of(e, s, t, n2));
}
function wf(t) {
  t = uh(t, dh);
  const e = uh(t.firestore, vh), n = bh(e), s = new hf(e);
  return Wa2(n, t._query).then((n2) => new of(e, s, t, n2));
}
function _f(t) {
  t = uh(t, dh);
  const e = uh(t.firestore, vh), n = bh(e), s = new hf(e);
  return Ha2(n, t._query, {
    source: "server"
  }).then((n2) => new of(e, s, t, n2));
}
function mf(t, e, n) {
  t = uh(t, fh);
  const s = uh(t.firestore, vh), i = Hl(t.converter, e, n);
  return Ef(s, [tl(Zh(s), "setDoc", t._key, i, null !== t.converter, n).toMutation(t._key, Fs.none())]);
}
function gf(t, e, n, ...s) {
  t = uh(t, fh);
  const i = uh(t.firestore, vh), r2 = Zh(i);
  let o;
  o = "string" == typeof // For Compat types, we have to "extract" the underlying types before
  // performing validation.
  (e = getModularInstance(e)) || e instanceof Kh ? cl(r2, "updateDoc", t._key, e, n, s) : ul(r2, "updateDoc", t._key, e);
  return Ef(i, [o.toMutation(t._key, Fs.exists(true))]);
}
function yf(t) {
  return Ef(uh(t.firestore, vh), [new Ys(t._key, Fs.none())]);
}
function pf(t, e) {
  const n = uh(t.firestore, vh), s = gh(t), i = Hl(t.converter, e);
  return Ef(n, [tl(Zh(t.firestore), "addDoc", s._key, i, null !== t.converter, {}).toMutation(s._key, Fs.exists(false))]).then(() => s);
}
function If(t, ...e) {
  var n, s, i;
  t = getModularInstance(t);
  let r2 = {
    includeMetadataChanges: false
  }, o = 0;
  "object" != typeof e[o] || Th(e[o]) || (r2 = e[o], o++);
  const u = {
    includeMetadataChanges: r2.includeMetadataChanges
  };
  if (Th(e[o])) {
    const t2 = e[o];
    e[o] = null === (n = t2.next) || void 0 === n ? void 0 : n.bind(t2), e[o + 1] = null === (s = t2.error) || void 0 === s ? void 0 : s.bind(t2), e[o + 2] = null === (i = t2.complete) || void 0 === i ? void 0 : i.bind(t2);
  }
  let c, a, h;
  if (t instanceof fh) a = uh(t.firestore, vh), h = Gn(t._key.path), c = {
    next: (n2) => {
      e[o] && e[o](Af(a, t, n2));
    },
    error: e[o + 1],
    complete: e[o + 2]
  };
  else {
    const n2 = uh(t, dh);
    a = uh(n2.firestore, vh), h = n2._query;
    const s2 = new hf(a);
    c = {
      next: (t2) => {
        e[o] && e[o](new of(a, s2, n2, t2));
      },
      error: e[o + 1],
      complete: e[o + 2]
    }, El(t._query);
  }
  return function(t2, e2, n2, s2) {
    const i2 = new Va2(s2), r3 = new Nc2(e2, i2, n2);
    return t2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      return Vc2(yield Ka2(t2), r3);
    })), () => {
      i2.Dc(), t2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
        return Sc2(yield Ka2(t2), r3);
      }));
    };
  }(bh(a), h, u, c);
}
function Tf(t, e) {
  return Ja2(bh(t = uh(t, vh)), Th(e) ? e : {
    next: e
  });
}
function Ef(t, e) {
  return function(t2, e2) {
    const n = new K2();
    return t2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      return zc2(yield qa2(t2), e2, n);
    })), n.promise;
  }(bh(t), e);
}
function Af(t, e, n) {
  const s = n.docs.get(e._key), i = new hf(t);
  return new sf(t, i, e._key, s, new nf(n.hasPendingWrites, n.fromCache), e.converter);
}
function vf(t) {
  return Rf(t, {
    count: Zl()
  });
}
function Rf(t, e) {
  const n = uh(t.firestore, vh), s = bh(n), i = function(t2, e2) {
    const n2 = [];
    for (const s2 in t2) Object.prototype.hasOwnProperty.call(t2, s2) && n2.push(e2(t2[s2], s2, t2));
    return n2;
  }(e, (t2, e2) => new ni(e2, t2._aggregateType, t2._internalFieldPath));
  return function(t2, e2, n2) {
    const s2 = new K2();
    return t2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      try {
        const i2 = yield Ua2(t2);
        s2.resolve(Gu(i2, e2, n2));
      } catch (t3) {
        s2.reject(t3);
      }
    })), s2.promise;
  }(s, t._query, i).then((e2) => (
    /**
    * Converts the core aggregration result to an `AggregateQuerySnapshot`
    * that can be returned to the consumer.
    * @param query
    * @param aggregateResult Core aggregation result
    * @internal
    */
    function(t2, e3, n2) {
      const s2 = new hf(t2);
      return new qh(e3, s2, n2);
    }(n, t, e2)
  ));
}
var Pf = class {
  constructor(t) {
    this.kind = "memory", this._onlineComponentProvider = new Pa2(), (null == t ? void 0 : t.garbageCollector) ? this._offlineComponentProvider = t.garbageCollector._offlineComponentProvider : this._offlineComponentProvider = new Ea();
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
};
var bf = class {
  constructor(t) {
    let e;
    this.kind = "persistent", (null == t ? void 0 : t.tabManager) ? (t.tabManager._initialize(t), e = t.tabManager) : (e = $f(void 0), e._initialize(t)), this._onlineComponentProvider = e._onlineComponentProvider, this._offlineComponentProvider = e._offlineComponentProvider;
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
};
var Vf = class {
  constructor() {
    this.kind = "memoryEager", this._offlineComponentProvider = new Ea();
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
};
var Sf = class {
  constructor(t) {
    this.kind = "memoryLru", this._offlineComponentProvider = new Aa(t);
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
};
function Df() {
  return new Vf();
}
function Cf(t) {
  return new Sf(null == t ? void 0 : t.cacheSizeBytes);
}
function xf(t) {
  return new Pf(t);
}
function Nf(t) {
  return new bf(t);
}
var kf = class {
  constructor(t) {
    this.forceOwnership = t, this.kind = "persistentSingleTab";
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
  /**
   * @internal
   */
  _initialize(t) {
    this._onlineComponentProvider = new Pa2(), this._offlineComponentProvider = new va2(this._onlineComponentProvider, null == t ? void 0 : t.cacheSizeBytes, this.forceOwnership);
  }
};
var Mf = class {
  constructor() {
    this.kind = "PersistentMultipleTab";
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
  /**
   * @internal
   */
  _initialize(t) {
    this._onlineComponentProvider = new Pa2(), this._offlineComponentProvider = new Ra2(this._onlineComponentProvider, null == t ? void 0 : t.cacheSizeBytes);
  }
};
function $f(t) {
  return new kf(null == t ? void 0 : t.forceOwnership);
}
function Of() {
  return new Mf();
}
var Ff = {
  maxAttempts: 5
};
var Bf = class {
  /** @hideconstructor */
  constructor(t, e) {
    this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = false, this._dataReader = Zh(t);
  }
  set(t, e, n) {
    this._verifyNotCommitted();
    const s = Lf(t, this._firestore), i = Hl(s.converter, e, n), r2 = tl(this._dataReader, "WriteBatch.set", s._key, i, null !== s.converter, n);
    return this._mutations.push(r2.toMutation(s._key, Fs.none())), this;
  }
  update(t, e, n, ...s) {
    this._verifyNotCommitted();
    const i = Lf(t, this._firestore);
    let r2;
    return r2 = "string" == typeof (e = getModularInstance(e)) || e instanceof Kh ? cl(this._dataReader, "WriteBatch.update", i._key, e, n, s) : ul(this._dataReader, "WriteBatch.update", i._key, e), this._mutations.push(r2.toMutation(i._key, Fs.exists(true))), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `WriteBatch` instance. Used for chaining method calls.
   */
  delete(t) {
    this._verifyNotCommitted();
    const e = Lf(t, this._firestore);
    return this._mutations = this._mutations.concat(new Ys(e._key, Fs.none())), this;
  }
  /**
   * Commits all of the writes in this write batch as a single atomic unit.
   *
   * The result of these writes will only be reflected in document reads that
   * occur after the returned promise resolves. If the client is offline, the
   * write fails. If you would like to see local modifications or buffer writes
   * until the client is online, use the full Firestore SDK.
   *
   * @returns A `Promise` resolved once all of the writes in the batch have been
   * successfully written to the backend as an atomic unit (note that it won't
   * resolve while you're offline).
   */
  commit() {
    return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }
  _verifyNotCommitted() {
    if (this._committed) throw new U2(q2.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }
};
function Lf(t, e) {
  if ((t = getModularInstance(t)).firestore !== e) throw new U2(q2.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t;
}
var qf = class extends class {
  /** @hideconstructor */
  constructor(t, e) {
    this._firestore = t, this._transaction = e, this._dataReader = Zh(t);
  }
  /**
   * Reads the document referenced by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be read.
   * @returns A `DocumentSnapshot` with the read data.
   */
  get(t) {
    const e = Lf(t, this._firestore), n = new Jl(this._firestore);
    return this._transaction.lookup([e._key]).then((t2) => {
      if (!t2 || 1 !== t2.length) return O2();
      const s = t2[0];
      if (s.isFoundDocument()) return new pl(this._firestore, n, s.key, s, e.converter);
      if (s.isNoDocument()) return new pl(this._firestore, n, e._key, null, e.converter);
      throw O2();
    });
  }
  set(t, e, n) {
    const s = Lf(t, this._firestore), i = Hl(s.converter, e, n), r2 = tl(this._dataReader, "Transaction.set", s._key, i, null !== s.converter, n);
    return this._transaction.set(s._key, r2), this;
  }
  update(t, e, n, ...s) {
    const i = Lf(t, this._firestore);
    let r2;
    return r2 = "string" == typeof (e = getModularInstance(e)) || e instanceof Kh ? cl(this._dataReader, "Transaction.update", i._key, e, n, s) : ul(this._dataReader, "Transaction.update", i._key, e), this._transaction.update(i._key, r2), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `Transaction` instance. Used for chaining method calls.
   */
  delete(t) {
    const e = Lf(t, this._firestore);
    return this._transaction.delete(e._key), this;
  }
} {
  // This class implements the same logic as the Transaction API in the Lite SDK
  // but is subclassed in order to return its own DocumentSnapshot types.
  /** @hideconstructor */
  constructor(t, e) {
    super(t, e), this._firestore = t;
  }
  /**
   * Reads the document referenced by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be read.
   * @returns A `DocumentSnapshot` with the read data.
   */
  get(t) {
    const e = Lf(t, this._firestore), n = new hf(this._firestore);
    return super.get(t).then((t2) => new sf(this._firestore, n, e._key, t2._document, new nf(
      /* hasPendingWrites= */
      false,
      /* fromCache= */
      false
    ), e.converter));
  }
};
function Uf(t, e, n) {
  t = uh(t, vh);
  const s = Object.assign(Object.assign({}, Ff), n);
  !function(t2) {
    if (t2.maxAttempts < 1) throw new U2(q2.INVALID_ARGUMENT, "Max attempts must be at least 1");
  }(s);
  return function(t2, e2, n2) {
    const s2 = new K2();
    return t2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      const i = yield Ua2(t2);
      new Ca(t2.asyncQueue, i, n2, e2, s2).run();
    })), s2.promise;
  }(bh(t), (n2) => e(new qf(t, n2)), s);
}
function Kf() {
  return new el("deleteField");
}
function Gf() {
  return new sl("serverTimestamp");
}
function Qf(...t) {
  return new il("arrayUnion", t);
}
function jf(...t) {
  return new rl("arrayRemove", t);
}
function zf(t) {
  return new ol("increment", t);
}
function Wf(t) {
  return bh(t = uh(t, vh)), new Bf(t, (e) => Ef(t, e));
}
function Hf(t, e) {
  var n;
  const s = bh(t = uh(t, vh));
  if (!s._uninitializedComponentsProvider || "memory" === (null === (n = s._uninitializedComponentsProvider) || void 0 === n ? void 0 : n._offlineKind))
    return M2("Cannot enable indexes when persistence is disabled"), Promise.resolve();
  const i = function(t2) {
    const e2 = "string" == typeof t2 ? function(t3) {
      try {
        return JSON.parse(t3);
      } catch (t4) {
        throw new U2(q2.INVALID_ARGUMENT, "Failed to parse JSON: " + (null == t4 ? void 0 : t4.message));
      }
    }(t2) : t2, n2 = [];
    if (Array.isArray(e2.indexes)) for (const t3 of e2.indexes) {
      const e3 = Jf(t3, "collectionGroup"), s2 = [];
      if (Array.isArray(t3.fields)) for (const e4 of t3.fields) {
        const t4 = ml("setIndexConfiguration", Jf(e4, "fieldPath"));
        "CONTAINS" === e4.arrayConfig ? s2.push(new _t(
          t4,
          2
          /* IndexKind.CONTAINS */
        )) : "ASCENDING" === e4.order ? s2.push(new _t(
          t4,
          0
          /* IndexKind.ASCENDING */
        )) : "DESCENDING" === e4.order && s2.push(new _t(
          t4,
          1
          /* IndexKind.DESCENDING */
        ));
      }
      n2.push(new lt(lt.UNKNOWN_ID, e3, s2, gt.empty()));
    }
    return n2;
  }(e);
  return Za2(s, i);
}
function Jf(t, e) {
  if ("string" != typeof t[e]) throw new U2(q2.INVALID_ARGUMENT, "Missing string value for: " + e);
  return t[e];
}
!function(t, e = true) {
  !function(t2) {
    S2 = t2;
  }(SDK_VERSION), _registerComponent(new Component("firestore", (t2, {
    instanceIdentifier: n,
    options: s
  }) => {
    const i = t2.getProvider("app").getImmediate(), r2 = new vh(new z2(t2.getProvider("auth-internal")), new Y2(t2.getProvider("app-check-internal")), function(t3, e2) {
      if (!Object.prototype.hasOwnProperty.apply(t3.options, ["projectId"])) throw new U2(q2.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new Oe(t3.options.projectId, e2);
    }(i, n), i);
    return s = Object.assign({
      useFetchStreams: e
    }, s), r2._setSettings(s), r2;
  }, "PUBLIC").setMultipleInstances(true)), registerVersion(b, "3.13.0", t), // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  registerVersion(b, "3.13.0", "esm2017");
}();

export {
  x2 as x,
  M2 as M,
  B2 as B,
  U2 as U,
  Q2 as Q,
  X2 as X,
  it,
  at,
  ht,
  be2 as be,
  Oe,
  ci,
  sh,
  uh,
  lh,
  fh,
  dh,
  wh,
  _h,
  mh,
  gh,
  yh,
  ph,
  Eh,
  Ah,
  vh,
  Rh,
  Ph,
  bh,
  Sh,
  Dh,
  xh,
  Nh,
  kh,
  Mh,
  $h,
  Oh,
  Fh,
  Lh,
  qh,
  Uh,
  Kh,
  Gh,
  Qh,
  jh,
  vl,
  Rl,
  Pl,
  bl,
  Vl,
  Sl,
  Dl,
  Cl,
  xl,
  Nl,
  kl,
  Ml,
  $l,
  Ol,
  Fl,
  Bl,
  Ll,
  ql,
  Wl,
  Yl,
  Xl,
  Zl,
  tf,
  ef,
  nf,
  sf,
  rf,
  of,
  cf,
  af,
  lf,
  ff,
  df,
  wf,
  _f,
  mf,
  gf,
  yf,
  pf,
  If,
  Tf,
  Ef,
  vf,
  Rf,
  Df,
  Cf,
  xf,
  Nf,
  $f,
  Of,
  Bf,
  qf,
  Uf,
  Kf,
  Gf,
  Qf,
  jf,
  zf,
  Wf,
  Hf
};
/*! Bundled license information:

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
  * @license
  * Copyright 2017 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
*/
//# sourceMappingURL=chunk-JTFOGKNJ.js.map
