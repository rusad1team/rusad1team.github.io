"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (e, t) {
  "use strict";

  function n(e, t, n) {
    var i,
        o = (t = t || re).createElement("script");
    if (o.text = e, n) for (i in we) {
      n[i] && (o[i] = n[i]);
    }
    t.head.appendChild(o).parentNode.removeChild(o);
  }

  function i(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? ue[pe.call(e)] || "object" : _typeof(e);
  }

  function o(e) {
    var t = !!e && "length" in e && e.length,
        n = i(e);
    return !ve(e) && !ye(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  function r(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  function s(e, t, n) {
    return ve(t) ? be.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? be.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? be.grep(e, function (e) {
      return de.call(t, e) > -1 !== n;
    }) : be.filter(t, e, n);
  }

  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {
      ;
    }

    return e;
  }

  function l(e) {
    var t = {};
    return be.each(e.match(Pe) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  function c(e) {
    return e;
  }

  function d(e) {
    throw e;
  }

  function u(e, t, n, i) {
    var o;

    try {
      e && ve(o = e.promise) ? o.call(e).done(t).fail(n) : e && ve(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  function p() {
    re.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), be.ready();
  }

  function f(e, t) {
    return t.toUpperCase();
  }

  function h(e) {
    return e.replace(Ie, "ms-").replace(Ne, f);
  }

  function g() {
    this.expando = be.expando + g.uid++;
  }

  function m(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : We.test(e) ? JSON.parse(e) : e);
  }

  function v(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Be, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = m(n);
      } catch (e) {}

      ze.set(e, t, n);
    } else n = void 0;
    return n;
  }

  function y(e, t, n, i) {
    var o,
        r,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return be.css(e, t, "");
    },
        l = a(),
        c = n && n[3] || (be.cssNumber[t] ? "" : "px"),
        d = (be.cssNumber[t] || "px" !== c && +l) && _e.exec(be.css(e, t));

    if (d && d[3] !== c) {
      for (l /= 2, c = c || d[3], d = +l || 1; s--;) {
        be.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), d /= r;
      }

      d *= 2, be.style(e, t, d + c), n = n || [];
    }

    return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o;
  }

  function w(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        o = Ye[i];
    return o || (t = n.body.appendChild(n.createElement(i)), o = be.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ye[i] = o, o);
  }

  function b(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++) {
      (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = qe.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Ue(i) && (o[r] = w(i))) : "none" !== n && (o[r] = "none", qe.set(i, "display", n)));
    }

    for (r = 0; r < s; r++) {
      null != o[r] && (e[r].style.display = o[r]);
    }

    return e;
  }

  function x(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? be.merge([e], n) : n;
  }

  function k(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"));
    }
  }

  function T(e, t, n, o, r) {
    for (var s, a, l, c, d, u, p = t.createDocumentFragment(), f = [], h = 0, g = e.length; h < g; h++) {
      if ((s = e[h]) || 0 === s) if ("object" === i(s)) be.merge(f, s.nodeType ? [s] : s);else if (Ze.test(s)) {
        for (a = a || p.appendChild(t.createElement("div")), l = (Ge.exec(s) || ["", ""])[1].toLowerCase(), c = Qe[l] || Qe._default, a.innerHTML = c[1] + be.htmlPrefilter(s) + c[2], u = c[0]; u--;) {
          a = a.lastChild;
        }

        be.merge(f, a.childNodes), (a = p.firstChild).textContent = "";
      } else f.push(t.createTextNode(s));
    }

    for (p.textContent = "", h = 0; s = f[h++];) {
      if (o && be.inArray(s, o) > -1) r && r.push(s);else if (d = be.contains(s.ownerDocument, s), a = x(p.appendChild(s), "script"), d && k(a), n) for (u = 0; s = a[u++];) {
        Ke.test(s.type || "") && n.push(s);
      }
    }

    return p;
  }

  function C() {
    return !0;
  }

  function S() {
    return !1;
  }

  function $() {
    try {
      return re.activeElement;
    } catch (e) {}
  }

  function A(e, t, n, i, o, r) {
    var s, a;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (i = i || n, n = void 0);

      for (a in t) {
        A(e, a, n, i, t[a], r);
      }

      return e;
    }

    if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = S;else if (!o) return e;
    return 1 === r && (s = o, (o = function o(e) {
      return be().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = be.guid++)), e.each(function () {
      be.event.add(this, t, o, i, n);
    });
  }

  function E(e, t) {
    return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? be(e).children("tbody")[0] || e : e;
  }

  function j(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function O(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function P(e, t) {
    var n, i, o, r, s, a, l, c;

    if (1 === t.nodeType) {
      if (qe.hasData(e) && (r = qe.access(e), s = qe.set(t, r), c = r.events)) {
        delete s.handle, s.events = {};

        for (o in c) {
          for (n = 0, i = c[o].length; n < i; n++) {
            be.event.add(t, o, c[o][n]);
          }
        }
      }

      ze.hasData(e) && (a = ze.access(e), l = be.extend({}, a), ze.set(t, l));
    }
  }

  function D(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function H(e, t, i, o) {
    t = le.apply([], t);
    var r,
        s,
        a,
        l,
        c,
        d,
        u = 0,
        p = e.length,
        f = p - 1,
        h = t[0],
        g = ve(h);
    if (g || p > 1 && "string" == typeof h && !me.checkClone && rt.test(h)) return e.each(function (n) {
      var r = e.eq(n);
      g && (t[0] = h.call(this, n, r.html())), H(r, t, i, o);
    });

    if (p && (r = T(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
      for (l = (a = be.map(x(r, "script"), j)).length; u < p; u++) {
        c = r, u !== f && (c = be.clone(c, !0, !0), l && be.merge(a, x(c, "script"))), i.call(e[u], c, u);
      }

      if (l) for (d = a[a.length - 1].ownerDocument, be.map(a, O), u = 0; u < l; u++) {
        c = a[u], Ke.test(c.type || "") && !qe.access(c, "globalEval") && be.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? be._evalUrl && be._evalUrl(c.src) : n(c.textContent.replace(st, ""), d, c));
      }
    }

    return e;
  }

  function L(e, t, n) {
    for (var i, o = t ? be.filter(t, e) : e, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || be.cleanData(x(i)), i.parentNode && (n && be.contains(i.ownerDocument, i) && k(x(i, "script")), i.parentNode.removeChild(i));
    }

    return e;
  }

  function I(e, t, n) {
    var i,
        o,
        r,
        s,
        a = e.style;
    return (n = n || lt(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || be.contains(e.ownerDocument, e) || (s = be.style(e, t)), !me.pixelBoxStyles() && at.test(s) && ct.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
  }

  function N(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  function M(e) {
    if (e in gt) return e;

    for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--;) {
      if ((e = ht[n] + t) in gt) return e;
    }
  }

  function q(e) {
    var t = be.cssProps[e];
    return t || (t = be.cssProps[e] = M(e) || e), t;
  }

  function z(e, t, n) {
    var i = _e.exec(t);

    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }

  function W(e, t, n, i, o, r) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;
    if (n === (i ? "border" : "content")) return 0;

    for (; s < 4; s += 2) {
      "margin" === n && (l += be.css(e, n + Re[s], !0, o)), i ? ("content" === n && (l -= be.css(e, "padding" + Re[s], !0, o)), "margin" !== n && (l -= be.css(e, "border" + Re[s] + "Width", !0, o))) : (l += be.css(e, "padding" + Re[s], !0, o), "padding" !== n ? l += be.css(e, "border" + Re[s] + "Width", !0, o) : a += be.css(e, "border" + Re[s] + "Width", !0, o));
    }

    return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l;
  }

  function B(e, t, n) {
    var i = lt(e),
        o = I(e, t, i),
        r = "border-box" === be.css(e, "boxSizing", !1, i),
        s = r;

    if (at.test(o)) {
      if (!n) return o;
      o = "auto";
    }

    return s = s && (me.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === be.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + W(e, t, n || (r ? "border" : "content"), s, i, o) + "px";
  }

  function F(e, t, n, i, o) {
    return new F.prototype.init(e, t, n, i, o);
  }

  function _() {
    vt && (!1 === re.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(_) : e.setTimeout(_, be.fx.interval), be.fx.tick());
  }

  function R() {
    return e.setTimeout(function () {
      mt = void 0;
    }), mt = Date.now();
  }

  function U(e, t) {
    var n,
        i = 0,
        o = {
      height: e
    };

    for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      o["margin" + (n = Re[i])] = o["padding" + n] = e;
    }

    return t && (o.opacity = o.width = e), o;
  }

  function X(e, t, n) {
    for (var i, o = (V.tweeners[t] || []).concat(V.tweeners["*"]), r = 0, s = o.length; r < s; r++) {
      if (i = o[r].call(n, t, e)) return i;
    }
  }

  function Y(e, t) {
    var n, i, o, r, s;

    for (n in e) {
      if (i = h(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = be.cssHooks[i]) && "expand" in s) {
        r = s.expand(r), delete e[i];

        for (n in r) {
          n in e || (e[n] = r[n], t[n] = o);
        }
      } else t[i] = o;
    }
  }

  function V(e, t, n) {
    var i,
        o,
        r = 0,
        s = V.prefilters.length,
        a = be.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (o) return !1;

      for (var t = mt || R(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) {
        c.tweens[r].run(i);
      }

      return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
    },
        c = a.promise({
      elem: e,
      props: be.extend({}, t),
      opts: be.extend(!0, {
        specialEasing: {},
        easing: be.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: mt || R(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var i = be.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(i), i;
      },
      stop: function stop(t) {
        var n = 0,
            i = t ? c.tweens.length : 0;
        if (o) return this;

        for (o = !0; n < i; n++) {
          c.tweens[n].run(1);
        }

        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      }
    }),
        d = c.props;

    for (Y(d, c.opts.specialEasing); r < s; r++) {
      if (i = V.prefilters[r].call(c, e, d, c.opts)) return ve(i.stop) && (be._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    }

    return be.map(d, X, c), ve(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), be.fx.timer(be.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c;
  }

  function G(e) {
    return (e.match(Pe) || []).join(" ");
  }

  function K(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function Q(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(Pe) || [] : [];
  }

  function Z(e, t, n, o) {
    var r;
    if (Array.isArray(t)) be.each(t, function (t, i) {
      n || Ot.test(e) ? o(e, i) : Z(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, o);
    });else if (n || "object" !== i(t)) o(e, t);else for (r in t) {
      Z(e + "[" + r + "]", t[r], n, o);
    }
  }

  function J(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i,
          o = 0,
          r = t.toLowerCase().match(Pe) || [];
      if (ve(n)) for (; i = r[o++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }

  function ee(e, t, n, i) {
    function o(a) {
      var l;
      return r[a] = !0, be.each(e[a] || [], function (e, a) {
        var c = a(t, n, i);
        return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1);
      }), l;
    }

    var r = {},
        s = e === Ft;
    return o(t.dataTypes[0]) || !r["*"] && o("*");
  }

  function te(e, t) {
    var n,
        i,
        o = be.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    }

    return i && be.extend(!0, e, i), e;
  }

  function ne(e, t, n) {
    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
      l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (i) for (o in a) {
      if (a[o] && a[o].test(i)) {
        l.unshift(o);
        break;
      }
    }
    if (l[0] in n) r = l[0];else {
      for (o in n) {
        if (!l[0] || e.converters[o + " " + l[0]]) {
          r = o;
          break;
        }

        s || (s = o);
      }

      r = r || s;
    }
    if (r) return r !== l[0] && l.unshift(r), n[r];
  }

  function ie(e, t, n, i) {
    var o,
        r,
        s,
        a,
        l,
        c = {},
        d = e.dataTypes.slice();
    if (d[1]) for (s in e.converters) {
      c[s.toLowerCase()] = e.converters[s];
    }

    for (r = d.shift(); r;) {
      if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
        if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) {
          if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
            break;
          }
        }
        if (!0 !== s) if (s && e["throws"]) t = s(t);else try {
          t = s(t);
        } catch (e) {
          return {
            state: "parsererror",
            error: s ? e : "No conversion from " + l + " to " + r
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  var oe = [],
      re = e.document,
      se = Object.getPrototypeOf,
      ae = oe.slice,
      le = oe.concat,
      ce = oe.push,
      de = oe.indexOf,
      ue = {},
      pe = ue.toString,
      fe = ue.hasOwnProperty,
      he = fe.toString,
      ge = he.call(Object),
      me = {},
      ve = function ve(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      ye = function ye(e) {
    return null != e && e === e.window;
  },
      we = {
    type: !0,
    src: !0,
    noModule: !0
  },
      be = function be(e, t) {
    return new be.fn.init(e, t);
  },
      xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  be.fn = be.prototype = {
    jquery: "3.3.1",
    constructor: be,
    length: 0,
    toArray: function toArray() {
      return ae.call(this);
    },
    get: function get(e) {
      return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = be.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return be.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(be.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(ae.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: ce,
    sort: oe.sort,
    splice: oe.splice
  }, be.extend = be.fn.extend = function () {
    var e,
        t,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;

    for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || ve(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], s !== (i = e[t]) && (c && i && (be.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && be.isPlainObject(n) ? n : {}, s[t] = be.extend(c, r, i)) : void 0 !== i && (s[t] = i));
      }
    }

    return s;
  }, be.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== pe.call(e) || (t = se(e)) && ("function" != typeof (n = fe.call(t, "constructor") && t.constructor) || he.call(n) !== ge));
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e) {
      n(e);
    },
    each: function each(e, t) {
      var n,
          i = 0;
      if (o(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {
        ;
      } else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }
      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(xe, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (o(Object(e)) ? be.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : de.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) {
        e[o++] = t[i];
      }

      return e.length = o, e;
    },
    grep: function grep(e, t, n) {
      for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) {
        !t(e[o], o) !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var i,
          r,
          s = 0,
          a = [];
      if (o(e)) for (i = e.length; s < i; s++) {
        null != (r = t(e[s], s, n)) && a.push(r);
      } else for (s in e) {
        null != (r = t(e[s], s, n)) && a.push(r);
      }
      return le.apply([], a);
    },
    guid: 1,
    support: me
  }), "function" == typeof Symbol && (be.fn[Symbol.iterator] = oe[Symbol.iterator]), be.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    ue["[object " + t + "]"] = t.toLowerCase();
  });

  var ke = function (e) {
    function t(e, t, n, i) {
      var o,
          r,
          s,
          a,
          l,
          d,
          p,
          f = t && t.ownerDocument,
          h = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;

      if (!i && ((t ? t.ownerDocument || t : z) !== P && O(t), t = t || P, H)) {
        if (11 !== h && (l = ge.exec(e))) if (o = l[1]) {
          if (9 === h) {
            if (!(s = t.getElementById(o))) return n;
            if (s.id === o) return n.push(s), n;
          } else if (f && (s = f.getElementById(o)) && M(t, s) && s.id === o) return n.push(s), n;
        } else {
          if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
          if ((o = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n;
        }

        if (b.qsa && !R[e + " "] && (!L || !L.test(e))) {
          if (1 !== h) f = t, p = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(we, be) : t.setAttribute("id", a = q), r = (d = C(e)).length; r--;) {
              d[r] = "#" + a + " " + u(d[r]);
            }

            p = d.join(","), f = me.test(e) && c(t.parentNode) || t;
          }
          if (p) try {
            return K.apply(n, f.querySelectorAll(p)), n;
          } catch (e) {} finally {
            a === q && t.removeAttribute("id");
          }
        }
      }

      return $(e.replace(re, "$1"), t, n, i);
    }

    function n() {
      function e(n, i) {
        return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i;
      }

      var t = [];
      return e;
    }

    function i(e) {
      return e[q] = !0, e;
    }

    function o(e) {
      var t = P.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function r(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) {
        x.attrHandle[n[i]] = t;
      }
    }

    function s(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function a(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function l(e) {
      return i(function (t) {
        return t = +t, i(function (n, i) {
          for (var o, r = e([], n.length, t), s = r.length; s--;) {
            n[o = r[s]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }

    function c(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }

    function d() {}

    function u(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }

      return i;
    }

    function p(e, t, n) {
      var i = t.dir,
          o = t.next,
          r = o || i,
          s = n && "parentNode" === r,
          a = B++;
      return t.first ? function (t, n, o) {
        for (; t = t[i];) {
          if (1 === t.nodeType || s) return e(t, n, o);
        }

        return !1;
      } : function (t, n, l) {
        var c,
            d,
            u,
            p = [W, a];

        if (l) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || s) if (u = t[q] || (t[q] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((c = d[r]) && c[0] === W && c[1] === a) return p[2] = c[2];
            if (d[r] = p, p[2] = e(t, n, l)) return !0;
          }
        }

        return !1;
      };
    }

    function f(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var o = e.length; o--;) {
          if (!e[o](t, n, i)) return !1;
        }

        return !0;
      } : e[0];
    }

    function h(e, n, i) {
      for (var o = 0, r = n.length; o < r; o++) {
        t(e, n[o], i);
      }

      return i;
    }

    function g(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
        (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
      }

      return s;
    }

    function m(e, t, n, o, r, s) {
      return o && !o[q] && (o = m(o)), r && !r[q] && (r = m(r, s)), i(function (i, s, a, l) {
        var c,
            d,
            u,
            p = [],
            f = [],
            m = s.length,
            v = i || h(t || "*", a.nodeType ? [a] : a, []),
            y = !e || !i && t ? v : g(v, p, e, a, l),
            w = n ? r || (i ? e : m || o) ? [] : s : y;
        if (n && n(y, w, a, l), o) for (c = g(w, f), o(c, [], a, l), d = c.length; d--;) {
          (u = c[d]) && (w[f[d]] = !(y[f[d]] = u));
        }

        if (i) {
          if (r || e) {
            if (r) {
              for (c = [], d = w.length; d--;) {
                (u = w[d]) && c.push(y[d] = u);
              }

              r(null, w = [], c, l);
            }

            for (d = w.length; d--;) {
              (u = w[d]) && (c = r ? Z(i, u) : p[d]) > -1 && (i[c] = !(s[c] = u));
            }
          }
        } else w = g(w === s ? w.splice(m, w.length) : w), r ? r(null, s, w, l) : K.apply(s, w);
      });
    }

    function v(e) {
      for (var t, n, i, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = p(function (e) {
        return e === t;
      }, s, !0), c = p(function (e) {
        return Z(t, e) > -1;
      }, s, !0), d = [function (e, n, i) {
        var o = !r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
        return t = null, o;
      }]; a < o; a++) {
        if (n = x.relative[e[a].type]) d = [p(f(d), n)];else {
          if ((n = x.filter[e[a].type].apply(null, e[a].matches))[q]) {
            for (i = ++a; i < o && !x.relative[e[i].type]; i++) {
              ;
            }

            return m(a > 1 && f(d), a > 1 && u(e.slice(0, a - 1).concat({
              value: " " === e[a - 2].type ? "*" : ""
            })).replace(re, "$1"), n, a < i && v(e.slice(a, i)), i < o && v(e = e.slice(i)), i < o && u(e));
          }

          d.push(n);
        }
      }

      return f(d);
    }

    function y(e, n) {
      var o = n.length > 0,
          r = e.length > 0,
          s = function s(i, _s, a, l, c) {
        var d,
            u,
            p,
            f = 0,
            h = "0",
            m = i && [],
            v = [],
            y = A,
            w = i || r && x.find.TAG("*", c),
            b = W += null == y ? 1 : Math.random() || .1,
            k = w.length;

        for (c && (A = _s === P || _s || c); h !== k && null != (d = w[h]); h++) {
          if (r && d) {
            for (u = 0, _s || d.ownerDocument === P || (O(d), a = !H); p = e[u++];) {
              if (p(d, _s || P, a)) {
                l.push(d);
                break;
              }
            }

            c && (W = b);
          }

          o && ((d = !p && d) && f--, i && m.push(d));
        }

        if (f += h, o && h !== f) {
          for (u = 0; p = n[u++];) {
            p(m, v, _s, a);
          }

          if (i) {
            if (f > 0) for (; h--;) {
              m[h] || v[h] || (v[h] = V.call(l));
            }
            v = g(v);
          }

          K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
        }

        return c && (W = b, A = y), m;
      };

      return o ? i(s) : s;
    }

    var w,
        b,
        x,
        k,
        T,
        C,
        S,
        $,
        A,
        E,
        j,
        O,
        P,
        D,
        H,
        L,
        I,
        N,
        M,
        q = "sizzle" + 1 * new Date(),
        z = e.document,
        W = 0,
        B = 0,
        F = n(),
        _ = n(),
        R = n(),
        U = function U(e, t) {
      return e === t && (j = !0), 0;
    },
        X = {}.hasOwnProperty,
        Y = [],
        V = Y.pop,
        G = Y.push,
        K = Y.push,
        Q = Y.slice,
        Z = function Z(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        oe = new RegExp(ee + "+", "g"),
        re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        se = new RegExp("^" + ee + "*," + ee + "*"),
        ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        ce = new RegExp(ie),
        de = new RegExp("^" + te + "$"),
        ue = {
      ID: new RegExp("^#(" + te + ")"),
      CLASS: new RegExp("^\\.(" + te + ")"),
      TAG: new RegExp("^(" + te + "|[*])"),
      ATTR: new RegExp("^" + ne),
      PSEUDO: new RegExp("^" + ie),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + J + ")$", "i"),
      needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
    },
        pe = /^(?:input|select|textarea|button)$/i,
        fe = /^h\d$/i,
        he = /^[^{]+\{\s*\[native \w/,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        me = /[+~]/,
        ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        ye = function ye(e, t, n) {
      var i = "0x" + t - 65536;
      return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        be = function be(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        xe = function xe() {
      O();
    },
        ke = p(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      K.apply(Y = Q.call(z.childNodes), z.childNodes), Y[z.childNodes.length].nodeType;
    } catch (e) {
      K = {
        apply: Y.length ? function (e, t) {
          G.apply(e, Q.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    b = t.support = {}, T = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, O = t.setDocument = function (e) {
      var t,
          n,
          i = e ? e.ownerDocument || e : z;
      return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, D = P.documentElement, H = !T(P), z !== P && (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), b.attributes = o(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), b.getElementsByTagName = o(function (e) {
        return e.appendChild(P.createComment("")), !e.getElementsByTagName("*").length;
      }), b.getElementsByClassName = he.test(P.getElementsByClassName), b.getById = o(function (e) {
        return D.appendChild(e).id = q, !P.getElementsByName || !P.getElementsByName(q).length;
      }), b.getById ? (x.filter.ID = function (e) {
        var t = e.replace(ve, ye);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, x.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && H) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (x.filter.ID = function (e) {
        var t = e.replace(ve, ye);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, x.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && H) {
          var n,
              i,
              o,
              r = t.getElementById(e);

          if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];

            for (o = t.getElementsByName(e), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            }
          }

          return [];
        }
      }), x.find.TAG = b.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            o = 0,
            r = t.getElementsByTagName(e);

        if ("*" === e) {
          for (; n = r[o++];) {
            1 === n.nodeType && i.push(n);
          }

          return i;
        }

        return r;
      }, x.find.CLASS = b.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e);
      }, I = [], L = [], (b.qsa = he.test(P.querySelectorAll)) && (o(function (e) {
        D.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + q + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || L.push(".#.+[+~]");
      }), o(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = P.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:");
      })), (b.matchesSelector = he.test(N = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (e) {
        b.disconnectedMatch = N.call(e, "*"), N.call(e, "[s!='']:x"), I.push("!=", ie);
      }), L = L.length && new RegExp(L.join("|")), I = I.length && new RegExp(I.join("|")), t = he.test(D.compareDocumentPosition), M = t || he.test(D.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }
        return !1;
      }, U = t ? function (e, t) {
        if (e === t) return j = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === z && M(z, e) ? -1 : t === P || t.ownerDocument === z && M(z, t) ? 1 : E ? Z(E, e) - Z(E, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return j = !0, 0;
        var n,
            i = 0,
            o = e.parentNode,
            r = t.parentNode,
            a = [e],
            l = [t];
        if (!o || !r) return e === P ? -1 : t === P ? 1 : o ? -1 : r ? 1 : E ? Z(E, e) - Z(E, t) : 0;
        if (o === r) return s(e, t);

        for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }

        for (n = t; n = n.parentNode;) {
          l.unshift(n);
        }

        for (; a[i] === l[i];) {
          i++;
        }

        return i ? s(a[i], l[i]) : a[i] === z ? -1 : l[i] === z ? 1 : 0;
      }, P) : P;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== P && O(e), n = n.replace(le, "='$1']"), b.matchesSelector && H && !R[n + " "] && (!I || !I.test(n)) && (!L || !L.test(n))) try {
        var i = N.call(e, n);
        if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}
      return t(n, P, null, [e]).length > 0;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== P && O(e), M(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== P && O(e);
      var n = x.attrHandle[t.toLowerCase()],
          i = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
      return void 0 !== i ? i : b.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }, t.escape = function (e) {
      return (e + "").replace(we, be);
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          o = 0;

      if (j = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(U), j) {
        for (; t = e[o++];) {
          t === e[o] && (i = n.push(o));
        }

        for (; i--;) {
          e.splice(n[i], 1);
        }
      }

      return E = null, e;
    }, k = t.getText = function (e) {
      var t,
          n = "",
          i = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += k(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += k(t);
      }

      return n;
    }, (x = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: ue,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(ve, ye).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = F[e + " "];
          return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, n, i) {
          return function (o) {
            var r = t.attr(o, e);
            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
          return 1 === i && 0 === o ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var c,
                d,
                u,
                p,
                f,
                h,
                g = r !== s ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                w = !1;

            if (m) {
              if (r) {
                for (; g;) {
                  for (p = t; p = p[g];) {
                    if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [s ? m.firstChild : m.lastChild], s && y) {
                for (w = (f = (c = (d = (u = (p = m)[q] || (p[q] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === W && c[1]) && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (w = f = 0) || h.pop();) {
                  if (1 === p.nodeType && ++w && p === t) {
                    d[e] = [W, f, w];
                    break;
                  }
                }
              } else if (y && (w = f = (c = (d = (u = (p = t)[q] || (p[q] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === W && c[1]), !1 === w) for (; (p = ++f && p && p[g] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && ((d = (u = p[q] || (p[q] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [W, w]), p !== t));) {
                ;
              }

              return (w -= o) === i || w % i == 0 && w / i >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, n) {
          var o,
              r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return r[q] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
            for (var i, o = r(e, n), s = o.length; s--;) {
              e[i = Z(e, o[s])] = !(t[i] = o[s]);
            }
          }) : function (e) {
            return r(e, 0, o);
          }) : r;
        }
      },
      pseudos: {
        not: i(function (e) {
          var t = [],
              n = [],
              o = S(e.replace(re, "$1"));
          return o[q] ? i(function (e, t, n, i) {
            for (var r, s = o(e, null, i, []), a = e.length; a--;) {
              (r = s[a]) && (e[a] = !(t[a] = r));
            }
          }) : function (e, i, r) {
            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop();
          };
        }),
        has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }),
        contains: i(function (e) {
          return e = e.replace(ve, ye), function (t) {
            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1;
          };
        }),
        lang: i(function (e) {
          return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
            var n;

            do {
              if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === D;
        },
        focus: function focus(e) {
          return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: a(!1),
        disabled: a(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !x.pseudos.empty(e);
        },
        header: function header(e) {
          return fe.test(e.nodeName);
        },
        input: function input(e) {
          return pe.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: l(function () {
          return [0];
        }),
        last: l(function (e, t) {
          return [t - 1];
        }),
        eq: l(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: l(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: l(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: l(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }

          return e;
        }),
        gt: l(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }

          return e;
        })
      }
    }).pseudos.nth = x.pseudos.eq;

    for (w in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      x.pseudos[w] = function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }(w);
    }

    for (w in {
      submit: !0,
      reset: !0
    }) {
      x.pseudos[w] = function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }(w);
    }

    return d.prototype = x.filters = x.pseudos, x.setFilters = new d(), C = t.tokenize = function (e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          d = _[e + " "];
      if (d) return n ? 0 : d.slice(0);

      for (a = e, l = [], c = x.preFilter; a;) {
        i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ae.exec(a)) && (i = o.shift(), r.push({
          value: i,
          type: o[0].replace(re, " ")
        }), a = a.slice(i.length));

        for (s in x.filter) {
          !(o = ue[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
            value: i,
            type: s,
            matches: o
          }), a = a.slice(i.length));
        }

        if (!i) break;
      }

      return n ? a.length : a ? t.error(e) : _(e, l).slice(0);
    }, S = t.compile = function (e, t) {
      var n,
          i = [],
          o = [],
          r = R[e + " "];

      if (!r) {
        for (t || (t = C(e)), n = t.length; n--;) {
          (r = v(t[n]))[q] ? i.push(r) : o.push(r);
        }

        (r = R(e, y(o, i))).selector = e;
      }

      return r;
    }, $ = t.select = function (e, t, n, i) {
      var o,
          r,
          s,
          a,
          l,
          d = "function" == typeof e && e,
          p = !i && C(e = d.selector || e);

      if (n = n || [], 1 === p.length) {
        if ((r = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && H && x.relative[r[1].type]) {
          if (!(t = (x.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
          d && (t = t.parentNode), e = e.slice(r.shift().value.length);
        }

        for (o = ue.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);) {
          if ((l = x.find[a]) && (i = l(s.matches[0].replace(ve, ye), me.test(r[0].type) && c(t.parentNode) || t))) {
            if (r.splice(o, 1), !(e = i.length && u(r))) return K.apply(n, i), n;
            break;
          }
        }
      }

      return (d || S(e, p))(i, t, !H, n, !t || me.test(e) && c(t.parentNode) || t), n;
    }, b.sortStable = q.split("").sort(U).join("") === q, b.detectDuplicates = !!j, O(), b.sortDetached = o(function (e) {
      return 1 & e.compareDocumentPosition(P.createElement("fieldset"));
    }), o(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || r("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), b.attributes && o(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || r("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), o(function (e) {
      return null == e.getAttribute("disabled");
    }) || r(J, function (e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), t;
  }(e);

  be.find = ke, be.expr = ke.selectors, be.expr[":"] = be.expr.pseudos, be.uniqueSort = be.unique = ke.uniqueSort, be.text = ke.getText, be.isXMLDoc = ke.isXML, be.contains = ke.contains, be.escapeSelector = ke.escape;

  var Te = function Te(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (o && be(e).is(n)) break;
        i.push(e);
      }
    }

    return i;
  },
      Ce = function Ce(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      Se = be.expr.match.needsContext,
      $e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  be.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? be.find.matchesSelector(i, e) ? [i] : [] : be.find.matches(e, be.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, be.fn.extend({
    find: function find(e) {
      var t,
          n,
          i = this.length,
          o = this;
      if ("string" != typeof e) return this.pushStack(be(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (be.contains(o[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < i; t++) {
        be.find(e, o[t], n);
      }

      return i > 1 ? be.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(s(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(s(this, e || [], !0));
    },
    is: function is(e) {
      return !!s(this, "string" == typeof e && Se.test(e) ? be(e) : e || [], !1).length;
    }
  });
  var Ae,
      Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (be.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;

    if (n = n || Ae, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (t = t instanceof be ? t[0] : t, be.merge(this, be.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), $e.test(i[1]) && be.isPlainObject(t)) for (i in t) {
          ve(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }
        return this;
      }

      return (o = re.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : ve(e) ? void 0 !== n.ready ? n.ready(e) : e(be) : be.makeArray(e, this);
  }).prototype = be.fn, Ae = be(re);
  var je = /^(?:parents|prev(?:Until|All))/,
      Oe = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  be.fn.extend({
    has: function has(e) {
      var t = be(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (be.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof e && be(e);
      if (!Se.test(e)) for (; i < o; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && be.find.matchesSelector(n, e))) {
            r.push(n);
            break;
          }
        }
      }
      return this.pushStack(r.length > 1 ? be.uniqueSort(r) : r);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? de.call(be(e), this[0]) : de.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(be.uniqueSort(be.merge(this.get(), be(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), be.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return Te(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return Te(e, "parentNode", n);
    },
    next: function next(e) {
      return a(e, "nextSibling");
    },
    prev: function prev(e) {
      return a(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return Te(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return Te(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return Te(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return Te(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return Ce((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return Ce(e.firstChild);
    },
    contents: function contents(e) {
      return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), be.merge([], e.childNodes));
    }
  }, function (e, t) {
    be.fn[e] = function (n, i) {
      var o = be.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = be.filter(i, o)), this.length > 1 && (Oe[e] || be.uniqueSort(o), je.test(e) && o.reverse()), this.pushStack(o);
    };
  });
  var Pe = /[^\x20\t\r\n\f]+/g;
  be.Callbacks = function (e) {
    e = "string" == typeof e ? l(e) : be.extend({}, e);

    var t,
        n,
        o,
        r,
        s = [],
        a = [],
        c = -1,
        d = function d() {
      for (r = r || e.once, o = t = !0; a.length; c = -1) {
        for (n = a.shift(); ++c < s.length;) {
          !1 === s[c].apply(n[0], n[1]) && e.stopOnFalse && (c = s.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, r && (s = n ? [] : "");
    },
        u = {
      add: function add() {
        return s && (n && !t && (c = s.length - 1, a.push(n)), function t(n) {
          be.each(n, function (n, o) {
            ve(o) ? e.unique && u.has(o) || s.push(o) : o && o.length && "string" !== i(o) && t(o);
          });
        }(arguments), n && !t && d()), this;
      },
      remove: function remove() {
        return be.each(arguments, function (e, t) {
          for (var n; (n = be.inArray(t, s, n)) > -1;) {
            s.splice(n, 1), n <= c && c--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? be.inArray(e, s) > -1 : s.length > 0;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return r = a = [], s = n = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return r = a = [], n || t || (s = n = ""), this;
      },
      locked: function locked() {
        return !!r;
      },
      fireWith: function fireWith(e, n) {
        return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || d()), this;
      },
      fire: function fire() {
        return u.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return u;
  }, be.extend({
    Deferred: function Deferred(t) {
      var n = [["notify", "progress", be.Callbacks("memory"), be.Callbacks("memory"), 2], ["resolve", "done", be.Callbacks("once memory"), be.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", be.Callbacks("once memory"), be.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          o = {
        state: function state() {
          return i;
        },
        always: function always() {
          return r.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return o.then(null, e);
        },
        pipe: function pipe() {
          var e = arguments;
          return be.Deferred(function (t) {
            be.each(n, function (n, i) {
              var o = ve(e[i[4]]) && e[i[4]];
              r[i[1]](function () {
                var e = o && o.apply(this, arguments);
                e && ve(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function then(t, i, o) {
          function r(t, n, i, o) {
            return function () {
              var a = this,
                  l = arguments,
                  u = function u() {
                var e, u;

                if (!(t < s)) {
                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  u = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, ve(u) ? o ? u.call(e, r(s, n, c, o), r(s, n, d, o)) : (s++, u.call(e, r(s, n, c, o), r(s, n, d, o), r(s, n, c, n.notifyWith))) : (i !== c && (a = void 0, l = [e]), (o || n.resolveWith)(a, l));
                }
              },
                  p = o ? u : function () {
                try {
                  u();
                } catch (e) {
                  be.Deferred.exceptionHook && be.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== d && (a = void 0, l = [e]), n.rejectWith(a, l));
                }
              };

              t ? p() : (be.Deferred.getStackHook && (p.stackTrace = be.Deferred.getStackHook()), e.setTimeout(p));
            };
          }

          var s = 0;
          return be.Deferred(function (e) {
            n[0][3].add(r(0, e, ve(o) ? o : c, e.notifyWith)), n[1][3].add(r(0, e, ve(t) ? t : c)), n[2][3].add(r(0, e, ve(i) ? i : d));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? be.extend(e, o) : o;
        }
      },
          r = {};
      return be.each(n, function (e, t) {
        var s = t[2],
            a = t[5];
        o[t[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), r[t[0]] = function () {
          return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
        }, r[t[0] + "With"] = s.fireWith;
      }), o.promise(r), t && t.call(r, r), r;
    },
    when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          o = ae.call(arguments),
          r = be.Deferred(),
          s = function s(e) {
        return function (n) {
          i[e] = this, o[e] = arguments.length > 1 ? ae.call(arguments) : n, --t || r.resolveWith(i, o);
        };
      };

      if (t <= 1 && (u(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || ve(o[n] && o[n].then))) return r.then();

      for (; n--;) {
        u(o[n], s(n), r.reject);
      }

      return r.promise();
    }
  });
  var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  be.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, be.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var He = be.Deferred();
  be.fn.ready = function (e) {
    return He.then(e)["catch"](function (e) {
      be.readyException(e);
    }), this;
  }, be.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --be.readyWait : be.isReady) || (be.isReady = !0, !0 !== e && --be.readyWait > 0 || He.resolveWith(re, [be]));
    }
  }), be.ready.then = He.then, "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll ? e.setTimeout(be.ready) : (re.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));

  var Le = function Le(e, t, n, o, r, s, a) {
    var l = 0,
        c = e.length,
        d = null == n;

    if ("object" === i(n)) {
      r = !0;

      for (l in n) {
        Le(e, t, l, n[l], !0, s, a);
      }
    } else if (void 0 !== o && (r = !0, ve(o) || (a = !0), d && (a ? (t.call(e, o), t = null) : (d = t, t = function t(e, _t2, n) {
      return d.call(be(e), n);
    })), t)) for (; l < c; l++) {
      t(e[l], n, a ? o : o.call(e[l], l, t(e[l], n)));
    }

    return r ? e : d ? t.call(e) : c ? t(e[0], n) : s;
  },
      Ie = /^-ms-/,
      Ne = /-([a-z])/g,
      Me = function Me(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  g.uid = 1, g.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, Me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var i,
          o = this.cache(e);
      if ("string" == typeof t) o[h(t)] = n;else for (i in t) {
        o[h(i)] = t[i];
      }
      return o;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          i = e[this.expando];

      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(h) : (t = h(t)) in i ? [t] : t.match(Pe) || []).length;

          for (; n--;) {
            delete i[t[n]];
          }
        }

        (void 0 === t || be.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !be.isEmptyObject(t);
    }
  };
  var qe = new g(),
      ze = new g(),
      We = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Be = /[A-Z]/g;
  be.extend({
    hasData: function hasData(e) {
      return ze.hasData(e) || qe.hasData(e);
    },
    data: function data(e, t, n) {
      return ze.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      ze.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return qe.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      qe.remove(e, t);
    }
  }), be.fn.extend({
    data: function data(e, t) {
      var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;

      if (void 0 === e) {
        if (this.length && (o = ze.get(r), 1 === r.nodeType && !qe.get(r, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = h(i.slice(5)), v(r, i, o[i]));
          }

          qe.set(r, "hasDataAttrs", !0);
        }

        return o;
      }

      return "object" == _typeof(e) ? this.each(function () {
        ze.set(this, e);
      }) : Le(this, function (t) {
        var n;

        if (r && void 0 === t) {
          if (void 0 !== (n = ze.get(r, e))) return n;
          if (void 0 !== (n = v(r, e))) return n;
        } else this.each(function () {
          ze.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        ze.remove(this, e);
      });
    }
  }), be.extend({
    queue: function queue(e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = qe.get(e, t), n && (!i || Array.isArray(n) ? i = qe.access(e, t, be.makeArray(n)) : i.push(n)), i || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = be.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = be._queueHooks(e, t);

      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
        be.dequeue(e, t);
      }, r)), !i && r && r.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return qe.get(e, n) || qe.access(e, n, {
        empty: be.Callbacks("once memory").add(function () {
          qe.remove(e, [t + "queue", n]);
        })
      });
    }
  }), be.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? be.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = be.queue(this, e, t);
        be._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && be.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        be.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          i = 1,
          o = be.Deferred(),
          r = this,
          s = this.length,
          a = function a() {
        --i || o.resolveWith(r, [r]);
      };

      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = qe.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }

      return a(), o.promise(t);
    }
  });

  var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      _e = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
      Re = ["Top", "Right", "Bottom", "Left"],
      Ue = function Ue(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && be.contains(e.ownerDocument, e) && "none" === be.css(e, "display");
  },
      Xe = function Xe(e, t, n, i) {
    var o,
        r,
        s = {};

    for (r in t) {
      s[r] = e.style[r], e.style[r] = t[r];
    }

    o = n.apply(e, i || []);

    for (r in t) {
      e.style[r] = s[r];
    }

    return o;
  },
      Ye = {};

  be.fn.extend({
    show: function show() {
      return b(this, !0);
    },
    hide: function hide() {
      return b(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Ue(this) ? be(this).show() : be(this).hide();
      });
    }
  });
  var Ve = /^(?:checkbox|radio)$/i,
      Ge = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Ke = /^$|^module$|\/(?:java|ecma)script/i,
      Qe = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
  var Ze = /<|&#?\w+;/;
  !function () {
    var e = re.createDocumentFragment().appendChild(re.createElement("div")),
        t = re.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var Je = re.documentElement,
      et = /^key/,
      tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      nt = /^([^.]*)(?:\.(.+)|)/;
  be.event = {
    global: {},
    add: function add(e, t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h,
          g,
          m = qe.get(e);
      if (m) for (n.handler && (n = (r = n).handler, o = r.selector), o && be.find.matchesSelector(Je, o), n.guid || (n.guid = be.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
        return void 0 !== be && be.event.triggered !== t.type ? be.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(Pe) || [""]).length; c--;) {
        f = g = (a = nt.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = be.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = be.event.special[f] || {}, d = be.extend({
          type: f,
          origType: g,
          data: i,
          handler: n,
          guid: n.guid,
          selector: o,
          needsContext: o && be.expr.match.needsContext.test(o),
          namespace: h.join(".")
        }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), be.event.global[f] = !0);
      }
    },
    remove: function remove(e, t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h,
          g,
          m = qe.hasData(e) && qe.get(e);

      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(Pe) || [""]).length; c--;) {
          if (a = nt.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
            for (u = be.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) {
              d = p[r], !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
            }

            s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, m.handle) || be.removeEvent(e, f, m.handle), delete l[f]);
          } else for (f in l) {
            be.event.remove(e, f + t[c], n, i, !0);
          }
        }

        be.isEmptyObject(l) && qe.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a = be.event.fix(e),
          l = new Array(arguments.length),
          c = (qe.get(this, "events") || {})[a.type] || [],
          d = be.event.special[a.type] || {};

      for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }

      if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
        for (s = be.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((be.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return d.postDispatch && d.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          i,
          o,
          r,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
          for (r = [], s = {}, n = 0; n < l; n++) {
            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? be(o, this).index(c) > -1 : be.find(o, this, null, [c]).length), s[o] && r.push(i);
          }

          r.length && a.push({
            elem: c,
            handlers: r
          });
        }
      }
      return c = this, l < t.length && a.push({
        elem: c,
        handlers: t.slice(l)
      }), a;
    },
    addProp: function addProp(e, t) {
      Object.defineProperty(be.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: ve(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function set(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function fix(e) {
      return e[be.expando] ? e : new be.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== $() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === $() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1;
        },
        _default: function _default(e) {
          return r(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, be.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, be.Event = function (e, t) {
    if (!(this instanceof be.Event)) return new be.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? C : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && be.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[be.expando] = !0;
  }, be.Event.prototype = {
    constructor: be.Event,
    isDefaultPrevented: S,
    isPropagationStopped: S,
    isImmediatePropagationStopped: S,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, be.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && et.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && tt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, be.event.addProp), be.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    be.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            i = this,
            o = e.relatedTarget,
            r = e.handleObj;
        return o && (o === i || be.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), be.fn.extend({
    on: function on(e, t, n, i) {
      return A(this, e, t, n, i);
    },
    one: function one(e, t, n, i) {
      return A(this, e, t, n, i, 1);
    },
    off: function off(e, t, n) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, be(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

      if ("object" == _typeof(e)) {
        for (o in e) {
          this.off(o, t, e[o]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = S), this.each(function () {
        be.event.remove(this, e, n, t);
      });
    }
  });
  var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      ot = /<script|<style|<link/i,
      rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  be.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(it, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var i,
          o,
          r,
          s,
          a = e.cloneNode(!0),
          l = be.contains(e.ownerDocument, e);
      if (!(me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || be.isXMLDoc(e))) for (s = x(a), i = 0, o = (r = x(e)).length; i < o; i++) {
        D(r[i], s[i]);
      }
      if (t) if (n) for (r = r || x(e), s = s || x(a), i = 0, o = r.length; i < o; i++) {
        P(r[i], s[i]);
      } else P(e, a);
      return (s = x(a, "script")).length > 0 && k(s, !l && x(e, "script")), a;
    },
    cleanData: function cleanData(e) {
      for (var t, n, i, o = be.event.special, r = 0; void 0 !== (n = e[r]); r++) {
        if (Me(n)) {
          if (t = n[qe.expando]) {
            if (t.events) for (i in t.events) {
              o[i] ? be.event.remove(n, i) : be.removeEvent(n, i, t.handle);
            }
            n[qe.expando] = void 0;
          }

          n[ze.expando] && (n[ze.expando] = void 0);
        }
      }
    }
  }), be.fn.extend({
    detach: function detach(e) {
      return L(this, e, !0);
    },
    remove: function remove(e) {
      return L(this, e);
    },
    text: function text(e) {
      return Le(this, function (e) {
        return void 0 === e ? be.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return H(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return H(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = E(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return H(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return H(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (be.cleanData(x(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return be.clone(this, e, t);
      });
    },
    html: function html(e) {
      return Le(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !ot.test(e) && !Qe[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = be.htmlPrefilter(e);

          try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (be.cleanData(x(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return H(this, arguments, function (t) {
        var n = this.parentNode;
        be.inArray(this, e) < 0 && (be.cleanData(x(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), be.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    be.fn[e] = function (e) {
      for (var n, i = [], o = be(e), r = o.length - 1, s = 0; s <= r; s++) {
        n = s === r ? this : this.clone(!0), be(o[s])[t](n), ce.apply(i, n.get());
      }

      return this.pushStack(i);
    };
  });

  var at = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
      lt = function lt(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      ct = new RegExp(Re.join("|"), "i");

  !function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Je.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, a = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", r = 36 === c.offsetWidth || "absolute", Je.removeChild(l), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var i,
        o,
        r,
        s,
        a,
        l = re.createElement("div"),
        c = re.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === c.style.backgroundClip, be.extend(me, {
      boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      },
      pixelPosition: function pixelPosition() {
        return t(), i;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return t(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return t(), r;
      }
    }));
  }();
  var dt = /^(none|table(?!-c[ea]).+)/,
      ut = /^--/,
      pt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      ft = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      ht = ["Webkit", "Moz", "ms"],
      gt = re.createElement("div").style;
  be.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = I(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            r,
            s,
            a = h(t),
            l = ut.test(t),
            c = e.style;
        if (l || (t = q(a)), s = be.cssHooks[t] || be.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
        "string" == (r = _typeof(n)) && (o = _e.exec(n)) && o[1] && (n = y(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (be.cssNumber[a] ? "" : "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
      }
    },
    css: function css(e, t, n, i) {
      var o,
          r,
          s,
          a = h(t);
      return ut.test(t) || (t = q(a)), (s = be.cssHooks[t] || be.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = I(e, t, i)), "normal" === o && t in ft && (o = ft[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    }
  }), be.each(["height", "width"], function (e, t) {
    be.cssHooks[t] = {
      get: function get(e, n, i) {
        if (n) return !dt.test(be.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? B(e, t, i) : Xe(e, pt, function () {
          return B(e, t, i);
        });
      },
      set: function set(e, n, i) {
        var o,
            r = lt(e),
            s = "border-box" === be.css(e, "boxSizing", !1, r),
            a = i && W(e, t, i, s, r);
        return s && me.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - W(e, t, "border", !1, r) - .5)), a && (o = _e.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = be.css(e, t)), z(0, n, a);
      }
    };
  }), be.cssHooks.marginLeft = N(me.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(I(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), be.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    be.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          o[e + Re[i] + t] = r[i] || r[i - 2] || r[0];
        }

        return o;
      }
    }, "margin" !== e && (be.cssHooks[e + t].set = z);
  }), be.fn.extend({
    css: function css(e, t) {
      return Le(this, function (e, t, n) {
        var i,
            o,
            r = {},
            s = 0;

        if (Array.isArray(t)) {
          for (i = lt(e), o = t.length; s < o; s++) {
            r[t[s]] = be.css(e, t[s], !1, i);
          }

          return r;
        }

        return void 0 !== n ? be.style(e, t, n) : be.css(e, t);
      }, e, t, arguments.length > 1);
    }
  }), be.Tween = F, F.prototype = {
    constructor: F,
    init: function init(e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || be.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (be.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = F.propHooks[this.prop];
      return e && e.get ? e.get(this) : F.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = F.propHooks[this.prop];
      return this.options.duration ? this.pos = t = be.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this;
    }
  }, F.prototype.init.prototype = F.prototype, F.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = be.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        be.fx.step[e.prop] ? be.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[be.cssProps[e.prop]] && !be.cssHooks[e.prop] ? e.elem[e.prop] = e.now : be.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, be.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, be.fx = F.prototype.init, be.fx.step = {};
  var mt,
      vt,
      yt = /^(?:toggle|show|hide)$/,
      wt = /queueHooks$/;
  be.Animation = be.extend(V, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return y(n.elem, e, _e.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      ve(e) ? (t = e, e = ["*"]) : e = e.match(Pe);

      for (var n, i = 0, o = e.length; i < o; i++) {
        n = e[i], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          d,
          u = "width" in t || "height" in t,
          p = this,
          f = {},
          h = e.style,
          g = e.nodeType && Ue(e),
          m = qe.get(e, "fxshow");
      n.queue || (null == (s = be._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, p.always(function () {
        p.always(function () {
          s.unqueued--, be.queue(e, "fx").length || s.empty.fire();
        });
      }));

      for (i in t) {
        if (o = t[i], yt.test(o)) {
          if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
            if ("show" !== o || !m || void 0 === m[i]) continue;
            g = !0;
          }

          f[i] = m && m[i] || be.style(e, i);
        }
      }

      if ((l = !be.isEmptyObject(t)) || !be.isEmptyObject(f)) {
        u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = qe.get(e, "display")), "none" === (d = be.css(e, "display")) && (c ? d = c : (b([e], !0), c = e.style.display || c, d = be.css(e, "display"), b([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === be.css(e, "float") && (l || (p.done(function () {
          h.display = c;
        }), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), l = !1;

        for (i in f) {
          l || (m ? "hidden" in m && (g = m.hidden) : m = qe.access(e, "fxshow", {
            display: c
          }), r && (m.hidden = !g), g && b([e], !0), p.done(function () {
            g || b([e]), qe.remove(e, "fxshow");

            for (i in f) {
              be.style(e, i, f[i]);
            }
          })), l = X(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0));
        }
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? V.prefilters.unshift(e) : V.prefilters.push(e);
    }
  }), be.speed = function (e, t, n) {
    var i = e && "object" == _typeof(e) ? be.extend({}, e) : {
      complete: n || !n && t || ve(e) && e,
      duration: e,
      easing: n && t || t && !ve(t) && t
    };
    return be.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in be.fx.speeds ? i.duration = be.fx.speeds[i.duration] : i.duration = be.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      ve(i.old) && i.old.call(this), i.queue && be.dequeue(this, i.queue);
    }, i;
  }, be.fn.extend({
    fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(Ue).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i);
    },
    animate: function animate(e, t, n, i) {
      var o = be.isEmptyObject(e),
          r = be.speed(t, n, i),
          s = function s() {
        var t = V(this, be.extend({}, e), r);
        (o || qe.get(this, "finish")) && t.stop(!0);
      };

      return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
    },
    stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            o = null != e && e + "queueHooks",
            r = be.timers,
            s = qe.get(this);
        if (o) s[o] && s[o].stop && i(s[o]);else for (o in s) {
          s[o] && s[o].stop && wt.test(o) && i(s[o]);
        }

        for (o = r.length; o--;) {
          r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
        }

        !t && n || be.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = qe.get(this),
            i = n[e + "queue"],
            o = n[e + "queueHooks"],
            r = be.timers,
            s = i ? i.length : 0;

        for (n.finish = !0, be.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) {
          r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        }

        for (t = 0; t < s; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), be.each(["toggle", "show", "hide"], function (e, t) {
    var n = be.fn[t];

    be.fn[t] = function (e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, i, o);
    };
  }), be.each({
    slideDown: U("show"),
    slideUp: U("hide"),
    slideToggle: U("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    be.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), be.timers = [], be.fx.tick = function () {
    var e,
        t = 0,
        n = be.timers;

    for (mt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || be.fx.stop(), mt = void 0;
  }, be.fx.timer = function (e) {
    be.timers.push(e), be.fx.start();
  }, be.fx.interval = 13, be.fx.start = function () {
    vt || (vt = !0, _());
  }, be.fx.stop = function () {
    vt = null;
  }, be.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, be.fn.delay = function (t, n) {
    return t = be.fx ? be.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
      var o = e.setTimeout(n, t);

      i.stop = function () {
        e.clearTimeout(o);
      };
    });
  }, function () {
    var e = re.createElement("input"),
        t = re.createElement("select").appendChild(re.createElement("option"));
    e.type = "checkbox", me.checkOn = "" !== e.value, me.optSelected = t.selected, (e = re.createElement("input")).value = "t", e.type = "radio", me.radioValue = "t" === e.value;
  }();
  var bt,
      xt = be.expr.attrHandle;
  be.fn.extend({
    attr: function attr(e, t) {
      return Le(this, be.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        be.removeAttr(this, e);
      });
    }
  }), be.extend({
    attr: function attr(e, t, n) {
      var i,
          o,
          r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? be.prop(e, t, n) : (1 === r && be.isXMLDoc(e) || (o = be.attrHooks[t.toLowerCase()] || (be.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void be.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = be.find.attr(e, t)) ? void 0 : i);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!me.radioValue && "radio" === t && r(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          o = t && t.match(Pe);
      if (o && 1 === e.nodeType) for (; n = o[i++];) {
        e.removeAttribute(n);
      }
    }
  }), bt = {
    set: function set(e, t, n) {
      return !1 === t ? be.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, be.each(be.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = xt[t] || be.find.attr;

    xt[t] = function (e, t, i) {
      var o,
          r,
          s = t.toLowerCase();
      return i || (r = xt[s], xt[s] = o, o = null != n(e, t, i) ? s : null, xt[s] = r), o;
    };
  });
  var kt = /^(?:input|select|textarea|button)$/i,
      Tt = /^(?:a|area)$/i;
  be.fn.extend({
    prop: function prop(e, t) {
      return Le(this, be.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[be.propFix[e] || e];
      });
    }
  }), be.extend({
    prop: function prop(e, t, n) {
      var i,
          o,
          r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return 1 === r && be.isXMLDoc(e) || (t = be.propFix[t] || t, o = be.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = be.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : kt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), me.optSelected || (be.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), be.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    be.propFix[this.toLowerCase()] = this;
  }), be.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
      if (ve(e)) return this.each(function (t) {
        be(this).addClass(e.call(this, t, K(this)));
      });
      if ((t = Q(e)).length) for (; n = this[l++];) {
        if (o = K(n), i = 1 === n.nodeType && " " + G(o) + " ") {
          for (s = 0; r = t[s++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }

          o !== (a = G(i)) && n.setAttribute("class", a);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
      if (ve(e)) return this.each(function (t) {
        be(this).removeClass(e.call(this, t, K(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = Q(e)).length) for (; n = this[l++];) {
        if (o = K(n), i = 1 === n.nodeType && " " + G(o) + " ") {
          for (s = 0; r = t[s++];) {
            for (; i.indexOf(" " + r + " ") > -1;) {
              i = i.replace(" " + r + " ", " ");
            }
          }

          o !== (a = G(i)) && n.setAttribute("class", a);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          i = "string" === n || Array.isArray(e);

      return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : ve(e) ? this.each(function (n) {
        be(this).toggleClass(e.call(this, n, K(this), t), t);
      }) : this.each(function () {
        var t, o, r, s;
        if (i) for (o = 0, r = be(this), s = Q(e); t = s[o++];) {
          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = K(this)) && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : qe.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;

      for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + G(K(n)) + " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var Ct = /\r/g;
  be.fn.extend({
    val: function val(e) {
      var t,
          n,
          i,
          o = this[0];
      return arguments.length ? (i = ve(e), this.each(function (n) {
        var o;
        1 === this.nodeType && (null == (o = i ? e.call(this, n, be(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = be.map(o, function (e) {
          return null == e ? "" : e + "";
        })), (t = be.valHooks[this.type] || be.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
      })) : o ? (t = be.valHooks[o.type] || be.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0;
    }
  }), be.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = be.find.attr(e, "value");
          return null != t ? t : G(be.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              i,
              o = e.options,
              s = e.selectedIndex,
              a = "select-one" === e.type,
              l = a ? null : [],
              c = a ? s + 1 : o.length;

          for (i = s < 0 ? c : a ? s : 0; i < c; i++) {
            if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
              if (t = be(n).val(), a) return t;
              l.push(t);
            }
          }

          return l;
        },
        set: function set(e, t) {
          for (var n, i, o = e.options, r = be.makeArray(t), s = o.length; s--;) {
            ((i = o[s]).selected = be.inArray(be.valHooks.option.get(i), r) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), r;
        }
      }
    }
  }), be.each(["radio", "checkbox"], function () {
    be.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = be.inArray(be(e).val(), t) > -1;
      }
    }, me.checkOn || (be.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), me.focusin = "onfocusin" in e;

  var St = /^(?:focusinfocus|focusoutblur)$/,
      $t = function $t(e) {
    e.stopPropagation();
  };

  be.extend(be.event, {
    trigger: function trigger(t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f = [i || re],
          h = fe.call(t, "type") ? t.type : t,
          g = fe.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = p = a = i = i || re, 3 !== i.nodeType && 8 !== i.nodeType && !St.test(h + be.event.triggered) && (h.indexOf(".") > -1 && (h = (g = h.split(".")).shift(), g.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[be.expando] ? t : new be.Event(h, "object" == _typeof(t) && t), t.isTrigger = o ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : be.makeArray(n, [t]), u = be.event.special[h] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
        if (!o && !u.noBubble && !ye(i)) {
          for (l = u.delegateType || h, St.test(l + h) || (s = s.parentNode); s; s = s.parentNode) {
            f.push(s), a = s;
          }

          a === (i.ownerDocument || re) && f.push(a.defaultView || a.parentWindow || e);
        }

        for (r = 0; (s = f[r++]) && !t.isPropagationStopped();) {
          p = s, t.type = r > 1 ? l : u.bindType || h, (d = (qe.get(s, "events") || {})[t.type] && qe.get(s, "handle")) && d.apply(s, n), (d = c && s[c]) && d.apply && Me(s) && (t.result = d.apply(s, n), !1 === t.result && t.preventDefault());
        }

        return t.type = h, o || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), n) || !Me(i) || c && ve(i[h]) && !ye(i) && ((a = i[c]) && (i[c] = null), be.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, $t), i[h](), t.isPropagationStopped() && p.removeEventListener(h, $t), be.event.triggered = void 0, a && (i[c] = a)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var i = be.extend(new be.Event(), n, {
        type: e,
        isSimulated: !0
      });
      be.event.trigger(i, null, t);
    }
  }), be.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        be.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return be.event.trigger(e, t, n, !0);
    }
  }), me.focusin || be.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      be.event.simulate(t, e.target, be.event.fix(e));
    };

    be.event.special[t] = {
      setup: function setup() {
        var i = this.ownerDocument || this,
            o = qe.access(i, t);
        o || i.addEventListener(e, n, !0), qe.access(i, t, (o || 0) + 1);
      },
      teardown: function teardown() {
        var i = this.ownerDocument || this,
            o = qe.access(i, t) - 1;
        o ? qe.access(i, t, o) : (i.removeEventListener(e, n, !0), qe.remove(i, t));
      }
    };
  });
  var At = e.location,
      Et = Date.now(),
      jt = /\?/;

  be.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || be.error("Invalid XML: " + t), n;
  };

  var Ot = /\[\]$/,
      Pt = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      Ht = /^(?:input|select|textarea|keygen)/i;
  be.param = function (e, t) {
    var n,
        i = [],
        o = function o(e, t) {
      var n = ve(t) ? t() : t;
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(e) || e.jquery && !be.isPlainObject(e)) be.each(e, function () {
      o(this.name, this.value);
    });else for (n in e) {
      Z(n, e[n], t, o);
    }
    return i.join("&");
  }, be.fn.extend({
    serialize: function serialize() {
      return be.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = be.prop(this, "elements");
        return e ? be.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !be(this).is(":disabled") && Ht.test(this.nodeName) && !Dt.test(e) && (this.checked || !Ve.test(e));
      }).map(function (e, t) {
        var n = be(this).val();
        return null == n ? null : Array.isArray(n) ? be.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Pt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Pt, "\r\n")
        };
      }).get();
    }
  });

  var Lt = /%20/g,
      It = /#.*$/,
      Nt = /([?&])_=[^&]*/,
      Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      zt = /^(?:GET|HEAD)$/,
      Wt = /^\/\//,
      Bt = {},
      Ft = {},
      _t = "*/".concat("*"),
      Rt = re.createElement("a");

  Rt.href = At.href, be.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: At.href,
      type: "GET",
      isLocal: qt.test(At.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": _t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": be.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? te(te(e, be.ajaxSettings), t) : te(be.ajaxSettings, e);
    },
    ajaxPrefilter: J(Bt),
    ajaxTransport: J(Ft),
    ajax: function ajax(t, n) {
      function i(t, n, i, a) {
        var c,
            p,
            f,
            b,
            x,
            k = n;
        d || (d = !0, l && e.clearTimeout(l), o = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = ne(h, T, i)), b = ie(h, b, T, c), c ? (h.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (be.lastModified[r] = x), (x = T.getResponseHeader("etag")) && (be.etag[r] = x)), 204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, p = b.data, c = !(f = b.error))) : (f = k, !t && k || (k = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || k) + "", c ? v.resolveWith(g, [p, k, T]) : v.rejectWith(g, [T, k, f]), T.statusCode(w), w = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : f]), y.fireWith(g, [T, k]), u && (m.trigger("ajaxComplete", [T, h]), --be.active || be.event.trigger("ajaxStop")));
      }

      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var o,
          r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h = be.ajaxSetup({}, n),
          g = h.context || h,
          m = h.context && (g.nodeType || g.jquery) ? be(g) : be.event,
          v = be.Deferred(),
          y = be.Callbacks("once memory"),
          w = h.statusCode || {},
          b = {},
          x = {},
          k = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (d) {
            if (!a) for (a = {}; t = Mt.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }
            t = a[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return d ? s : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == d && (h.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (d) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || k;
          return o && o.abort(t), i(0, t), this;
        }
      };

      if (v.promise(T), h.url = ((t || h.url || At.href) + "").replace(Wt, At.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Pe) || [""], null == h.crossDomain) {
        c = re.createElement("a");

        try {
          c.href = h.url, c.href = c.href, h.crossDomain = Rt.protocol + "//" + Rt.host != c.protocol + "//" + c.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = be.param(h.data, h.traditional)), ee(Bt, h, n, T), d) return T;
      (u = be.event && h.global) && 0 == be.active++ && be.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !zt.test(h.type), r = h.url.replace(It, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (f = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += (jt.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Nt, "$1"), f = (jt.test(r) ? "&" : "?") + "_=" + Et++ + f), h.url = r + f), h.ifModified && (be.lastModified[r] && T.setRequestHeader("If-Modified-Since", be.lastModified[r]), be.etag[r] && T.setRequestHeader("If-None-Match", be.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : h.accepts["*"]);

      for (p in h.headers) {
        T.setRequestHeader(p, h.headers[p]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || d)) return T.abort();

      if (k = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), o = ee(Ft, h, n, T)) {
        if (T.readyState = 1, u && m.trigger("ajaxSend", [T, h]), d) return T;
        h.async && h.timeout > 0 && (l = e.setTimeout(function () {
          T.abort("timeout");
        }, h.timeout));

        try {
          d = !1, o.send(b, i);
        } catch (e) {
          if (d) throw e;
          i(-1, e);
        }
      } else i(-1, "No Transport");

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return be.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return be.get(e, void 0, t, "script");
    }
  }), be.each(["get", "post"], function (e, t) {
    be[t] = function (e, n, i, o) {
      return ve(n) && (o = o || i, i = n, n = void 0), be.ajax(be.extend({
        url: e,
        type: t,
        dataType: o,
        data: n,
        success: i
      }, be.isPlainObject(e) && e));
    };
  }), be._evalUrl = function (e) {
    return be.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, be.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (ve(e) && (e = e.call(this[0])), t = be(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(e) {
      return ve(e) ? this.each(function (t) {
        be(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = be(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = ve(e);
      return this.each(function (n) {
        be(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        be(this).replaceWith(this.childNodes);
      }), this;
    }
  }), be.expr.pseudos.hidden = function (e) {
    return !be.expr.pseudos.visible(e);
  }, be.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, be.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = be.ajaxSettings.xhr();
  me.cors = !!Xt && "withCredentials" in Xt, me.ajax = Xt = !!Xt, be.ajaxTransport(function (t) {
    var _n, i;

    if (me.cors || Xt && !t.crossDomain) return {
      send: function send(o, r) {
        var s,
            a = t.xhr();
        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }
        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");

        for (s in o) {
          a.setRequestHeader(s, o[s]);
        }

        _n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
              binary: a.response
            } : {
              text: a.responseText
            }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = a.ontimeout = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");

        try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    };
  }), be.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), be.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return be.globalEval(e), e;
      }
    }
  }), be.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), be.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;

      return {
        send: function send(i, o) {
          t = be("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), re.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n2 && _n2();
        }
      };
    }
  });
  var Yt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  be.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || be.expando + "_" + Et++;
      return this[e] = !0, e;
    }
  }), be.ajaxPrefilter("json jsonp", function (t, n, i) {
    var o,
        r,
        s,
        a = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
    if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = ve(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Vt, "$1" + o) : !1 !== t.jsonp && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return s || be.error(o + " was not called"), s[0];
    }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === r ? be(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Yt.push(o)), s && ve(r) && r(s[0]), s = r = void 0;
    }), "script";
  }), me.createHTMLDocument = function () {
    var e = re.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), be.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, r;
    return t || (me.createHTMLDocument ? ((i = (t = re.implementation.createHTMLDocument("")).createElement("base")).href = re.location.href, t.head.appendChild(i)) : t = re), o = $e.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = T([e], t, r), r && r.length && be(r).remove(), be.merge([], o.childNodes));
  }, be.fn.load = function (e, t, n) {
    var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");
    return a > -1 && (i = G(e.slice(a)), e = e.slice(0, a)), ve(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (o = "POST"), s.length > 0 && be.ajax({
      url: e,
      type: o || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      r = arguments, s.html(i ? be("<div>").append(be.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, r || [e.responseText, t, e]);
      });
    }), this;
  }, be.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    be.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), be.expr.pseudos.animated = function (e) {
    return be.grep(be.timers, function (t) {
      return e === t.elem;
    }).length;
  }, be.offset = {
    setOffset: function setOffset(e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c = be.css(e, "position"),
          d = be(e),
          u = {};
      "static" === c && (e.style.position = "relative"), a = d.offset(), r = be.css(e, "top"), l = be.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = d.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ve(t) && (t = t.call(e, n, be.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u);
    }
  }, be.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        be.offset.setOffset(this, e, t);
      });
      var t,
          n,
          i = this[0];
      return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            i = this[0],
            o = {
          top: 0,
          left: 0
        };
        if ("fixed" === be.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === be.css(e, "position");) {
            e = e.parentNode;
          }

          e && e !== i && 1 === e.nodeType && ((o = be(e).offset()).top += be.css(e, "borderTopWidth", !0), o.left += be.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - o.top - be.css(i, "marginTop", !0),
          left: t.left - o.left - be.css(i, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === be.css(e, "position");) {
          e = e.offsetParent;
        }

        return e || Je;
      });
    }
  }), be.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    be.fn[e] = function (i) {
      return Le(this, function (e, i, o) {
        var r;
        if (ye(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
        r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
      }, e, i, arguments.length);
    };
  }), be.each(["top", "left"], function (e, t) {
    be.cssHooks[t] = N(me.pixelPosition, function (e, n) {
      if (n) return n = I(e, t), at.test(n) ? be(e).position()[t] + "px" : n;
    });
  }), be.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    be.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, i) {
      be.fn[i] = function (o, r) {
        var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === r ? "margin" : "border");
        return Le(this, function (t, n, o) {
          var r;
          return ye(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? be.css(t, n, a) : be.style(t, n, o, a);
        }, t, s ? o : void 0, s);
      };
    });
  }), be.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    be.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), be.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), be.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), be.proxy = function (e, t) {
    var n, i, o;
    if ("string" == typeof t && (n = e[t], t = e, e = n), ve(e)) return i = ae.call(arguments, 2), o = function o() {
      return e.apply(t || this, i.concat(ae.call(arguments)));
    }, o.guid = e.guid = e.guid || be.guid++, o;
  }, be.holdReady = function (e) {
    e ? be.readyWait++ : be.ready(!0);
  }, be.isArray = Array.isArray, be.parseJSON = JSON.parse, be.nodeName = r, be.isFunction = ve, be.isWindow = ye, be.camelCase = h, be.type = i, be.now = Date.now, be.isNumeric = function (e) {
    var t = be.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return be;
  });
  var Gt = e.jQuery,
      Kt = e.$;
  return be.noConflict = function (t) {
    return e.$ === be && (e.$ = Kt), t && e.jQuery === be && (e.jQuery = Gt), be;
  }, t || (e.jQuery = e.$ = be), be;
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (e) {
  var t,
      n,
      i,
      o,
      r,
      s,
      a = "Close",
      l = "BeforeClose",
      c = "MarkupParse",
      d = "Open",
      u = "Change",
      p = "mfp",
      f = "." + p,
      h = "mfp-ready",
      g = "mfp-removing",
      m = "mfp-prevent-close",
      v = function v() {},
      y = !!window.jQuery,
      w = e(window),
      b = function b(e, n) {
    t.ev.on(p + e + f, n);
  },
      x = function x(t, n, i, o) {
    var r = document.createElement("div");
    return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r;
  },
      k = function k(n, i) {
    t.ev.triggerHandler(p + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
  },
      T = function T(n) {
    return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn;
  },
      C = function C() {
    e.magnificPopup.instance || ((t = new v()).init(), e.magnificPopup.instance = t);
  },
      S = function S() {
    var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== e.transition) return !0;

    for (; t.length;) {
      if (t.pop() + "Transition" in e) return !0;
    }

    return !1;
  };

  v.prototype = {
    constructor: v,
    init: function init() {
      var n = navigator.appVersion;
      t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {};
    },
    open: function open(n) {
      var o;

      if (!1 === n.isObj) {
        t.items = n.items.toArray(), t.index = 0;
        var s,
            a = n.items;

        for (o = 0; o < a.length; o++) {
          if ((s = a[o]).parsed && (s = s.el[0]), s === n.el[0]) {
            t.index = o;
            break;
          }
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;

      {
        if (!t.isOpen) {
          t.types = [], r = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x("bg").on("click" + f, function () {
            t.close();
          }), t.wrap = x("wrap").attr("tabindex", -1).on("click" + f, function (e) {
            t._checkIfClose(e.target) && t.close();
          }), t.container = x("container", t.wrap)), t.contentContainer = x("content"), t.st.preloader && (t.preloader = x("preloader", t.container, t.st.tLoading));
          var l = e.magnificPopup.modules;

          for (o = 0; o < l.length; o++) {
            var u = l[o];
            u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t);
          }

          k("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (b(c, function (e, t, n, i) {
            n.close_replaceWith = T(i.type);
          }), r += " mfp-close-btn-in") : t.wrap.append(T())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
            overflow: t.st.overflowY,
            overflowX: "hidden",
            overflowY: t.st.overflowY
          }) : t.wrap.css({
            top: w.scrollTop(),
            position: "absolute"
          }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
            height: i.height(),
            position: "absolute"
          }), t.st.enableEscapeKey && i.on("keyup" + f, function (e) {
            27 === e.keyCode && t.close();
          }), w.on("resize" + f, function () {
            t.updateSize();
          }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
          var p = t.wH = w.height(),
              g = {};

          if (t.fixedContentPos && t._hasScrollBar(p)) {
            var m = t._getScrollbarSize();

            m && (g.marginRight = m);
          }

          t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden");
          var v = t.st.mainClass;
          return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), k("BuildControls"), e("html").css(g), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
            t.content ? (t._addClassToMFP(h), t._setFocus()) : t.bgOverlay.addClass(h), i.on("focusin" + f, t._onFocusIn);
          }, 16), t.isOpen = !0, t.updateSize(p), k(d), n;
        }

        t.updateItemHTML();
      }
    },
    close: function close() {
      t.isOpen && (k(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    },
    _close: function _close() {
      k(a);
      var n = g + " " + h + " ";

      if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var o = {
          marginRight: ""
        };
        t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o);
      }

      i.off("keyup.mfp focusin" + f), t.ev.off(f), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, k("AfterClose");
    },
    updateSize: function updateSize(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;
        t.wrap.css("height", i), t.wH = i;
      } else t.wH = e || w.height();

      t.fixedContentPos || t.wrap.css("height", t.wH), k("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var n = t.items[t.index];
      t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
      var i = n.type;

      if (k("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var r = !!t.st[i] && t.st[i].markup;
        k("FirstMarkupParse", r), t.currTemplate[i] = !r || e(r);
      }

      o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
      var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
      t.appendContent(s, i), n.preloaded = !0, k(u, n), o = n.type, t.container.prepend(t.contentContainer), k("AfterChange");
    },
    appendContent: function appendContent(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(T()) : t.content = e : t.content = "", k("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    },
    parseEl: function parseEl(n) {
      var i,
          o = t.items[n];

      if (o.tagName ? o = {
        el: e(o)
      } : (i = o.type, o = {
        data: o,
        src: o.src
      }), o.el) {
        for (var r = t.types, s = 0; s < r.length; s++) {
          if (o.el.hasClass("mfp-" + r[s])) {
            i = r[s];
            break;
          }
        }

        o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"));
      }

      return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, k("ElementParse", o), t.items[n];
    },
    addGroup: function addGroup(e, n) {
      var i = function i(_i) {
        _i.mfpEl = this, t._openClick(_i, e, n);
      };

      n || (n = {});
      var o = "click.magnificPopup";
      n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)));
    },
    _openClick: function _openClick(n, i, o) {
      if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
        var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
        if (r) if (e.isFunction(r)) {
          if (!r.call(t)) return !0;
        } else if (w.width() < r) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o);
      }
    },
    updateStatus: function updateStatus(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
        var o = {
          status: e,
          text: i
        };
        k("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    },
    _checkIfClose: function _checkIfClose(n) {
      if (!e(n).hasClass(m)) {
        var i = t.st.closeOnContentClick,
            o = t.st.closeOnBgClick;
        if (i && o) return !0;
        if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;

        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;

        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function _removeClassFromMFP(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function _hasScrollBar(e) {
      return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || w.height());
    },
    _setFocus: function _setFocus() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1);
    },
    _parseMarkup: function _parseMarkup(t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)), k(c, [t, n, i]), e.each(n, function (n, i) {
        if (void 0 === i || !1 === i) return !0;

        if ((o = n.split("_")).length > 1) {
          var r = t.find(f + "-" + o[0]);

          if (r.length > 0) {
            var s = o[1];
            "replaceWith" === s ? r[0] !== i[0] && r.replaceWith(i) : "img" === s ? r.is("img") ? r.attr("src", i) : r.replaceWith(e("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i);
          }
        } else t.find(f + "-" + n).html(i);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }

      return t.scrollbarSize;
    }
  }, e.magnificPopup = {
    instance: null,
    proto: v.prototype,
    modules: [],
    open: function open(t, n) {
      return C(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t);
    },
    close: function close() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    },
    registerModule: function registerModule(t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, e.fn.magnificPopup = function (n) {
    C();
    var i = e(this);
    if ("string" == typeof n) {
      if ("open" === n) {
        var o,
            r = y ? i.data("magnificPopup") : i[0].magnificPopup,
            s = parseInt(arguments[1], 10) || 0;
        r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({
          mfpEl: o
        }, i, r);
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    } else n = e.extend(!0, {}, n), y ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
    return i;
  };

  var $,
      A,
      E,
      j = "inline",
      O = function O() {
    E && (A.after(E.addClass($)).detach(), E = null);
  };

  e.magnificPopup.registerModule(j, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        t.types.push(j), b(a + "." + j, function () {
          O();
        });
      },
      getInline: function getInline(n, i) {
        if (O(), n.src) {
          var o = t.st.inline,
              r = e(n.src);

          if (r.length) {
            var s = r[0].parentNode;
            s && s.tagName && (A || ($ = o.hiddenClass, A = x($), $ = "mfp-" + $), E = r.after(A).detach().removeClass($)), t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), r = e("<div>");

          return n.inlineElement = r, r;
        }

        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      }
    }
  });

  var P,
      D = "ajax",
      H = function H() {
    P && e(document.body).removeClass(P);
  },
      L = function L() {
    H(), t.req && t.req.abort();
  };

  e.magnificPopup.registerModule(D, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        t.types.push(D), P = t.st.ajax.cursor, b(a + "." + D, L), b("BeforeChange." + D, L);
      },
      getAjax: function getAjax(n) {
        P && e(document.body).addClass(P), t.updateStatus("loading");
        var i = e.extend({
          url: n.src,
          success: function success(i, o, r) {
            var s = {
              data: i,
              xhr: r
            };
            k("ParseAjax", s), t.appendContent(e(s.data), D), n.finished = !0, H(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass(h);
            }, 16), t.updateStatus("ready"), k("AjaxContentAdded");
          },
          error: function error() {
            H(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          }
        }, t.st.ajax.settings);
        return t.req = e.ajax(i), "";
      }
    }
  });

  var I,
      N = function N(n) {
    if (n.data && void 0 !== n.data.title) return n.data.title;
    var i = t.st.image.titleSrc;

    if (i) {
      if (e.isFunction(i)) return i.call(t, n);
      if (n.el) return n.el.attr(i) || "";
    }

    return "";
  };

  e.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var n = t.st.image,
            i = ".image";
        t.types.push("image"), b(d + i, function () {
          "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor);
        }), b(a + i, function () {
          n.cursor && e(document.body).removeClass(n.cursor), w.off("resize" + f);
        }), b("Resize" + i, t.resizeImage), t.isLowIE && b("AfterChange", t.resizeImage);
      },
      resizeImage: function resizeImage() {
        var e = t.currItem;

        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
        }
      },
      _onImageHasSize: function _onImageHasSize(e) {
        e.img && (e.hasSize = !0, I && clearInterval(I), e.isCheckingImgSize = !1, k("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      },
      findImageSize: function findImageSize(e) {
        var n = 0,
            i = e.img[0],
            o = function o(r) {
          I && clearInterval(I), I = setInterval(function () {
            return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(I), void (3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)));
          }, r);
        };

        o(1);
      },
      getImage: function getImage(n, i) {
        var o = 0,
            r = function r() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, k("ImageLoadComplete")) : 200 > ++o ? setTimeout(r, 100) : s());
        },
            s = function s() {
          n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            a = t.st.image,
            l = i.find(".mfp-img");

        if (l.length) {
          var c = document.createElement("img");
          c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }

        return t._parseMarkup(i, {
          title: N(n),
          img_replaceWith: n.img
        }, n), t.resizeImage(), n.hasSize ? (I && clearInterval(I), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      }
    }
  });

  var M,
      q = function q() {
    return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M;
  };

  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var e,
            n = t.st.zoom,
            i = ".zoom";

        if (n.enabled && t.supportsTransition) {
          var o,
              r,
              s = n.duration,
              c = function c(e) {
            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            },
                r = "transition";
            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t;
          },
              d = function d() {
            t.content.css("visibility", "visible");
          };

          b("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void d();
              (r = c(e)).css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                r.css(t._getOffset(!0)), o = setTimeout(function () {
                  d(), setTimeout(function () {
                    r.remove(), e = r = null, k("ZoomAnimationEnded");
                  }, 16);
                }, s);
              }, 16);
            }
          }), b(l + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = s, !e) {
                if (!(e = t._getItemToZoom())) return;
                r = c(e);
              }

              r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                r.css(t._getOffset());
              }, 16);
            }
          }), b(a + i, function () {
            t._allowZoom() && (d(), r && r.remove(), e = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return !!t.currItem.hasSize && t.currItem.img;
      },
      _getOffset: function _getOffset(n) {
        var i,
            o = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            r = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var a = {
          width: i.width(),
          height: (y ? i.innerHeight() : i[0].offsetHeight) - s - r
        };
        return q() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a;
      }
    }
  });

  var z = "iframe",
      W = function W(e) {
    if (t.currTemplate[z]) {
      var n = t.currTemplate[z].find("iframe");
      n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };

  e.magnificPopup.registerModule(z, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        t.types.push(z), b("BeforeChange", function (e, t, n) {
          t !== n && (t === z ? W() : n === z && W(!0));
        }), b(a + "." + z, function () {
          W();
        });
      },
      getIframe: function getIframe(n, i) {
        var o = n.src,
            r = t.st.iframe;
        e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0;
        });
        var s = {};
        return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(i, s, n), t.updateStatus("ready"), i;
      }
    }
  });

  var B = function B(e) {
    var n = t.items.length;
    return e > n - 1 ? e - n : 0 > e ? n + e : e;
  },
      F = function F(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  };

  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var n = t.st.gallery,
            o = ".mfp-gallery";
        return t.direction = !0, !(!n || !n.enabled) && (r += " mfp-gallery", b(d + o, function () {
          n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function () {
            return t.items.length > 1 ? (t.next(), !1) : void 0;
          }), i.on("keydown" + o, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), b("UpdateStatus" + o, function (e, n) {
          n.text && (n.text = F(n.text, t.currItem.index, t.items.length));
        }), b(c + o, function (e, i, o, r) {
          var s = t.items.length;
          o.counter = s > 1 ? F(n.tCounter, r.index, s) : "";
        }), b("BuildControls" + o, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
                o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(m),
                r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(m);
            o.click(function () {
              t.prev();
            }), r.click(function () {
              t.next();
            }), t.container.append(o.add(r));
          }
        }), b(u + o, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), void b(a + o, function () {
          i.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null;
        }));
      },
      next: function next() {
        t.direction = !0, t.index = B(t.index + 1), t.updateItemHTML();
      },
      prev: function prev() {
        t.direction = !1, t.index = B(t.index - 1), t.updateItemHTML();
      },
      goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            o = Math.min(n[1], t.items.length);

        for (e = 1; e <= (t.direction ? o : i); e++) {
          t._preloadItem(t.index + e);
        }

        for (e = 1; e <= (t.direction ? i : o); e++) {
          t._preloadItem(t.index - e);
        }
      },
      _preloadItem: function _preloadItem(n) {
        if (n = B(n), !t.items[n].preloaded) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)), k("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, k("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      }
    }
  });
  var _ = "retina";
  e.magnificPopup.registerModule(_, {
    options: {
      replaceSrc: function replaceSrc(e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
              n = e.ratio;
          (n = isNaN(n) ? n() : n) > 1 && (b("ImageHasSize." + _, function (e, t) {
            t.img.css({
              "max-width": t.img[0].naturalWidth / n,
              width: "100%"
            });
          }), b("ElementParse." + _, function (t, i) {
            i.src = e.replaceSrc(i, n);
          }));
        }
      }
    }
  }), C();
}), function (e) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";

  var t = window.Slick || {};
  (t = function () {
    var t = 0;
    return function (n, i) {
      var o,
          r = this;
      r.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: e(n),
        appendDots: e(n),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(t, n) {
          return e('<button type="button" />').text(n + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, r.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
    var o = this;
    if ("boolean" == typeof n) i = n, n = null;else if (n < 0 || n >= o.slideCount) return !1;
    o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
      e(n).attr("data-slick-index", t);
    }), o.$slidesCache = o.$slides, o.reinit();
  }, t.prototype.animateHeight = function () {
    var e = this;

    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.animate({
        height: t
      }, e.options.speed);
    }
  }, t.prototype.animateSlide = function (t, n) {
    var i = {},
        o = this;
    o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
      left: t
    }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
      top: t
    }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
      animStart: o.currentLeft
    }).animate({
      animStart: t
    }, {
      duration: o.options.speed,
      easing: o.options.easing,
      step: function step(e) {
        e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i));
      },
      complete: function complete() {
        n && n.call();
      }
    })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
      o.disableTransition(), n.call();
    }, o.options.speed));
  }, t.prototype.getNavTarget = function () {
    var t = this,
        n = t.options.asNavFor;
    return n && null !== n && (n = e(n).not(t.$slider)), n;
  }, t.prototype.asNavFor = function (t) {
    var n = this.getNavTarget();
    null !== n && "object" == _typeof(n) && n.each(function () {
      var n = e(this).slick("getSlick");
      n.unslicked || n.slideHandler(t, !0);
    });
  }, t.prototype.applyTransition = function (e) {
    var t = this,
        n = {};
    !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
  }, t.prototype.autoPlay = function () {
    var e = this;
    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
  }, t.prototype.autoPlayClear = function () {
    var e = this;
    e.autoPlayTimer && clearInterval(e.autoPlayTimer);
  }, t.prototype.autoPlayIterator = function () {
    var e = this,
        t = e.currentSlide + e.options.slidesToScroll;
    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
  }, t.prototype.buildArrows = function () {
    var t = this;
    !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, t.prototype.buildDots = function () {
    var t,
        n,
        i = this;

    if (!0 === i.options.dots) {
      for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) {
        n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
      }

      i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active");
    }
  }, t.prototype.buildOut = function () {
    var t = this;
    t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
      e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "");
    }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable");
  }, t.prototype.buildRows = function () {
    var e,
        t,
        n,
        i,
        o,
        r,
        s,
        a = this;

    if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
      for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
        var l = document.createElement("div");

        for (t = 0; t < a.options.rows; t++) {
          var c = document.createElement("div");

          for (n = 0; n < a.options.slidesPerRow; n++) {
            var d = e * s + (t * a.options.slidesPerRow + n);
            r.get(d) && c.appendChild(r.get(d));
          }

          l.appendChild(c);
        }

        i.appendChild(l);
      }

      a.$slider.empty().append(i), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, t.prototype.checkResponsive = function (t, n) {
    var i,
        o,
        r,
        s = this,
        a = !1,
        l = s.$slider.width(),
        c = window.innerWidth || e(window).width();

    if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
      o = null;

      for (i in s.breakpoints) {
        s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
      }

      null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
    }
  }, t.prototype.changeSlide = function (t, n) {
    var i,
        o,
        r,
        s = this,
        a = e(t.currentTarget);

    switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
      case "previous":
        o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
        break;

      case "next":
        o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
        break;

      case "index":
        var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
        s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
        break;

      default:
        return;
    }
  }, t.prototype.checkNavigable = function (e) {
    var t, n;
    if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];else for (var i in t) {
      if (e < t[i]) {
        e = n;
        break;
      }

      n = t[i];
    }
    return e;
  }, t.prototype.cleanUpEvents = function () {
    var t = this;
    t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
  }, t.prototype.cleanUpSlideEvents = function () {
    var t = this;
    t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
  }, t.prototype.cleanUpRows = function () {
    var e,
        t = this;
    t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
  }, t.prototype.clickHandler = function (e) {
    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
  }, t.prototype.destroy = function (t) {
    var n = this;
    n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      e(this).attr("style", e(this).data("originalStyling"));
    }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n]);
  }, t.prototype.disableTransition = function (e) {
    var t = this,
        n = {};
    n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
  }, t.prototype.fadeSlide = function (e, t) {
    var n = this;
    !1 === n.cssTransitions ? (n.$slides.eq(e).css({
      zIndex: n.options.zIndex
    }), n.$slides.eq(e).animate({
      opacity: 1
    }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
      opacity: 1,
      zIndex: n.options.zIndex
    }), t && setTimeout(function () {
      n.disableTransition(e), t.call();
    }, n.options.speed));
  }, t.prototype.fadeSlideOut = function (e) {
    var t = this;
    !1 === t.cssTransitions ? t.$slides.eq(e).animate({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }));
  }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
    var t = this;
    null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
  }, t.prototype.focusHandler = function () {
    var t = this;
    t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
      n.stopImmediatePropagation();
      var i = e(this);
      setTimeout(function () {
        t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay());
      }, 0);
    });
  }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, t.prototype.getDotCount = function () {
    var e = this,
        t = 0,
        n = 0,
        i = 0;
    if (!0 === e.options.infinite) {
      if (e.slideCount <= e.options.slidesToShow) ++i;else for (; t < e.slideCount;) {
        ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      }
    } else if (!0 === e.options.centerMode) i = e.slideCount;else if (e.options.asNavFor) for (; t < e.slideCount;) {
      ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    } else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
    return i - 1;
  }, t.prototype.getLeft = function (e) {
    var t,
        n,
        i,
        o,
        r = this,
        s = 0;
    return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t;
  }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
    return this.options[e];
  }, t.prototype.getNavigableIndexes = function () {
    var e,
        t = this,
        n = 0,
        i = 0,
        o = [];

    for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) {
      o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    }

    return o;
  }, t.prototype.getSlick = function () {
    return this;
  }, t.prototype.getSlideCount = function () {
    var t,
        n,
        i = this;
    return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
      if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1;
    }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll;
  }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(e)
      }
    }, t);
  }, t.prototype.init = function (t) {
    var n = this;
    e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay());
  }, t.prototype.initADA = function () {
    var t = this,
        n = Math.ceil(t.slideCount / t.options.slidesToShow),
        i = t.getNavigableIndexes().filter(function (e) {
      return e >= 0 && e < t.slideCount;
    });
    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
      var o = i.indexOf(n);
      e(this).attr({
        role: "tabpanel",
        id: "slick-slide" + t.instanceUid + n,
        tabindex: -1
      }), -1 !== o && e(this).attr({
        "aria-describedby": "slick-slide-control" + t.instanceUid + o
      });
    }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
      var r = i[o];
      e(this).attr({
        role: "presentation"
      }), e(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + t.instanceUid + o,
        "aria-controls": "slick-slide" + t.instanceUid + r,
        "aria-label": o + 1 + " of " + n,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(t.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) {
      t.$slides.eq(o).attr("tabindex", 0);
    }

    t.activateADA();
  }, t.prototype.initArrowEvents = function () {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
  }, t.prototype.initDotEvents = function () {
    var t = this;
    !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
      message: "index"
    }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
  }, t.prototype.initSlideEvents = function () {
    var t = this;
    t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
  }, t.prototype.initializeEvents = function () {
    var t = this;
    t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition);
  }, t.prototype.initUI = function () {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
  }, t.prototype.keyHandler = function (e) {
    var t = this;
    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
      data: {
        message: !0 === t.options.rtl ? "next" : "previous"
      }
    }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
      data: {
        message: !0 === t.options.rtl ? "previous" : "next"
      }
    }));
  }, t.prototype.lazyLoad = function () {
    function t(t) {
      e("img[data-lazy]", t).each(function () {
        var t = e(this),
            n = e(this).attr("data-lazy"),
            i = e(this).attr("data-srcset"),
            o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            s = document.createElement("img");
        s.onload = function () {
          t.animate({
            opacity: 0
          }, 100, function () {
            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({
              opacity: 1
            }, 200, function () {
              t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), r.$slider.trigger("lazyLoaded", [r, t, n]);
          });
        }, s.onerror = function () {
          t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]);
        }, s.src = n;
      });
    }

    var n,
        i,
        o,
        r = this;
    if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)), n = r.$slider.find(".slick-slide").slice(i, o), "anticipated" === r.options.lazyLoad) for (var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) {
      s < 0 && (s = r.slideCount - 1), n = (n = n.add(l.eq(s))).add(l.eq(a)), s--, a++;
    }
    t(n), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow));
  }, t.prototype.loadSlider = function () {
    var e = this;
    e.setPosition(), e.$slideTrack.css({
      opacity: 1
    }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
  }, t.prototype.next = t.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, t.prototype.orientationChange = function () {
    var e = this;
    e.checkResponsive(), e.setPosition();
  }, t.prototype.pause = t.prototype.slickPause = function () {
    var e = this;
    e.autoPlayClear(), e.paused = !0;
  }, t.prototype.play = t.prototype.slickPlay = function () {
    var e = this;
    e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
  }, t.prototype.postSlide = function (t) {
    var n = this;
    n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
  }, t.prototype.prev = t.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, t.prototype.preventDefault = function (e) {
    e.preventDefault();
  }, t.prototype.progressiveLazyLoad = function (t) {
    t = t || 1;
    var n,
        i,
        o,
        r,
        s,
        a = this,
        l = e("img[data-lazy]", a.$slider);
    l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
      o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad();
    }, s.onerror = function () {
      t < 3 ? setTimeout(function () {
        a.progressiveLazyLoad(t + 1);
      }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
    }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a]);
  }, t.prototype.refresh = function (t) {
    var n,
        i,
        o = this;
    i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
      currentSlide: n
    }), o.init(), t || o.changeSlide({
      data: {
        message: "index",
        index: n
      }
    }, !1);
  }, t.prototype.registerBreakpoints = function () {
    var t,
        n,
        i,
        o = this,
        r = o.options.responsive || null;

    if ("array" === e.type(r) && r.length) {
      o.respondTo = o.options.respondTo || "window";

      for (t in r) {
        if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
          for (n = r[t].breakpoint; i >= 0;) {
            o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
          }

          o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings;
        }
      }

      o.breakpoints.sort(function (e, t) {
        return o.options.mobileFirst ? e - t : t - e;
      });
    }
  }, t.prototype.reinit = function () {
    var t = this;
    t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t]);
  }, t.prototype.resize = function () {
    var t = this;
    e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
      t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
    }, 50));
  }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
    var i = this;
    if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
    i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit();
  }, t.prototype.setCSS = function (e) {
    var t,
        n,
        i = this,
        o = {};
    !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)));
  }, t.prototype.setDimensions = function () {
    var e = this;
    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
      padding: "0px " + e.options.centerPadding
    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
      padding: e.options.centerPadding + " 0px"
    })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
  }, t.prototype.setFade = function () {
    var t,
        n = this;
    n.$slides.each(function (i, o) {
      t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
        position: "relative",
        right: t,
        top: 0,
        zIndex: n.options.zIndex - 2,
        opacity: 0
      }) : e(o).css({
        position: "relative",
        left: t,
        top: 0,
        zIndex: n.options.zIndex - 2,
        opacity: 0
      });
    }), n.$slides.eq(n.currentSlide).css({
      zIndex: n.options.zIndex - 1,
      opacity: 1
    });
  }, t.prototype.setHeight = function () {
    var e = this;

    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.css("height", t);
    }
  }, t.prototype.setOption = t.prototype.slickSetOption = function () {
    var t,
        n,
        i,
        o,
        r,
        s = this,
        a = !1;
    if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;else if ("multiple" === r) e.each(i, function (e, t) {
      s.options[e] = t;
    });else if ("responsive" === r) for (n in o) {
      if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];else {
        for (t = s.options.responsive.length - 1; t >= 0;) {
          s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
        }

        s.options.responsive.push(o[n]);
      }
    }
    a && (s.unload(), s.reinit());
  }, t.prototype.setPosition = function () {
    var e = this;
    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
  }, t.prototype.setProps = function () {
    var e = this,
        t = document.body.style;
    e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
  }, t.prototype.setSlideClasses = function (e) {
    var t,
        n,
        i,
        o,
        r = this;

    if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
      var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
      t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center");
    } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad();
  }, t.prototype.setupInfinite = function () {
    var t,
        n,
        i,
        o = this;

    if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
      for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) {
        n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
      }

      for (t = 0; t < i + o.slideCount; t += 1) {
        n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
      }

      o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        e(this).attr("id", "");
      });
    }
  }, t.prototype.interrupt = function (e) {
    var t = this;
    e || t.autoPlay(), t.interrupted = e;
  }, t.prototype.selectHandler = function (t) {
    var n = this,
        i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
        o = parseInt(i.attr("data-slick-index"));
    o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
  }, t.prototype.slideHandler = function (e, t, n) {
    var i,
        o,
        r,
        s,
        a,
        l = null,
        c = this;
    if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
      c.postSlide(i);
    }) : c.postSlide(i));else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
      c.postSlide(i);
    }) : c.postSlide(i));else {
      if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
        c.postSlide(o);
      })) : c.postSlide(o), void c.animateHeight();
      !0 !== n ? c.animateSlide(l, function () {
        c.postSlide(o);
      }) : c.postSlide(o);
    }
  }, t.prototype.startLoad = function () {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading");
  }, t.prototype.swipeDirection = function () {
    var e,
        t,
        n,
        i,
        o = this;
    return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical";
  }, t.prototype.swipeEnd = function (e) {
    var t,
        n,
        i = this;
    if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
    if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;

    if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
      switch (n = i.swipeDirection()) {
        case "left":
        case "down":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
          break;

        case "right":
        case "up":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1;
      }

      "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]));
    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
  }, t.prototype.swipeHandler = function (e) {
    var t = this;
    if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
      case "start":
        t.swipeStart(e);
        break;

      case "move":
        t.swipeMove(e);
        break;

      case "end":
        t.swipeEnd(e);
    }
  }, t.prototype.swipeMove = function (e) {
    var t,
        n,
        i,
        o,
        r,
        s,
        a = this;
    return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))));
  }, t.prototype.swipeStart = function (e) {
    var t,
        n = this;
    if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
    void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0;
  }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
    var e = this;
    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
  }, t.prototype.unload = function () {
    var t = this;
    e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, t.prototype.unslick = function (e) {
    var t = this;
    t.$slider.trigger("unslick", [t, e]), t.destroy();
  }, t.prototype.updateArrows = function () {
    var e = this;
    Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, t.prototype.updateDots = function () {
    var e = this;
    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"));
  }, t.prototype.visibility = function () {
    var e = this;
    e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
  }, e.fn.slick = function () {
    var e,
        n,
        i = this,
        o = arguments[0],
        r = Array.prototype.slice.call(arguments, 1),
        s = i.length;

    for (e = 0; e < s; e++) {
      if ("object" == _typeof(o) || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
    }

    return i;
  };
});