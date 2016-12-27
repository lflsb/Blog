function $$CookieReader(t) {
    function e(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return t
        }
    }
    var n = t[0],
        r = {},
        i = "";
    return function () {
        var t, o, s, a, l;
        if (n.cookie !== i)
            for (i = n.cookie, t = i.split("; "), r = {}, s = 0; s < t.length; s++) o = t[s], a = o.indexOf("="), a > 0 && (l = e(o.substring(0, a)), void 0 === r[l] && (r[l] = e(o.substring(a + 1))));
        return r
    }
}

function $$CookieWriter(t, e, n) {
    function r(t, n, r) {
        var o, s;
        r = r || {}, s = r.expires, o = angular.isDefined(r.path) ? r.path : i, void 0 === n && (s = "Thu, 01 Jan 1970 00:00:00 GMT", n = ""), angular.isString(s) && (s = new Date(s));
        var a = encodeURIComponent(t) + "=" + encodeURIComponent(n);
        a += o ? ";path=" + o : "", a += r.domain ? ";domain=" + r.domain : "", a += s ? ";expires=" + s.toUTCString() : "", a += r.secure ? ";secure" : "";
        var l = a.length + 1;
        return l > 4096 && e.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + l + " > 4096 bytes)!"), a
    }
    var i = n.baseHref(),
        o = t[0];
    return function (t, e, n) {
        o.cookie = r(t, e, n)
    }
}

function _logType(t, e) {
    var n = Array.prototype.slice.call(e);
    t ? n.unshift(t.toUpperCase() + ":") : t = "log", vjs.log.history.push(n), n.unshift("VIDEOJS:"), _console[t].apply ? _console[t].apply(_console, n) : _console[t](n.join(" "))
}

function initFirstPlay(t) {
    var e = {
            type: "firstplay",
            target: this.el_
        },
        n = vjs.trigger(this.el_, e);
    n || (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation())
}

function createMethod(t) {
    return function () {
        throw new Error('The "' + t + "\" method is not available on the playback technology's API")
    }
}

function QR8bitByte(t) {
    this.mode = QRMode.MODE_8BIT_BYTE, this.data = t
}

function QRCode(t, e) {
    this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array
}

function QRPolynomial(t, e) {
    if (void 0 == t.length) throw new Error(t.length + "/" + e);
    for (var n = 0; n < t.length && 0 == t[n];) n++;
    this.num = new Array(t.length - n + e);
    for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n]
}

function QRRSBlock(t, e) {
    this.totalCount = t, this.dataCount = e
}

function QRBitBuffer() {
    this.buffer = new Array, this.length = 0
}! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = t.length,
            n = it.type(t);
        return "function" !== n && !it.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    function r(t, e, n) {
        if (it.isFunction(e)) return it.grep(t, function (t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType) return it.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (pt.test(e)) return it.filter(e, t, n);
            e = it.filter(e, t)
        }
        return it.grep(t, function (t) {
            return it.inArray(t, e) >= 0 !== n
        })
    }

    function i(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = jt[t] = {};
        return it.each(t.match(bt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ft.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (s(), it.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var r = "data-" + e.replace(Ct, "-$1").toLowerCase();
            if (n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Tt.test(n) ? it.parseJSON(n) : n)
                } catch (i) {}
                it.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !it.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, n, r) {
        if (it.acceptData(t)) {
            var i, o, s = it.expando,
                a = t.nodeType,
                l = a ? it.cache : t,
                u = a ? t[s] : t[s] && s;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = a ? t[s] = X.pop() || it.guid++ : s), l[u] || (l[u] = a ? {} : {
                toJSON: it.noop
            }), "object" != typeof e && "function" != typeof e || (r ? l[u] = it.extend(l[u], e) : l[u].data = it.extend(l[u].data, e)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[it.camelCase(e)] = n), "string" == typeof e ? (i = o[e], null == i && (i = o[it.camelCase(e)])) : i = o, i
        }
    }

    function h(t, e, n) {
        if (it.acceptData(t)) {
            var r, i, o = t.nodeType,
                s = o ? it.cache : t,
                a = o ? t[it.expando] : it.expando;
            if (s[a]) {
                if (e && (r = n ? s[a] : s[a].data)) {
                    it.isArray(e) ? e = e.concat(it.map(e, it.camelCase)) : e in r ? e = [e] : (e = it.camelCase(e), e = e in r ? [e] : e.split(" ")), i = e.length;
                    for (; i--;) delete r[e[i]];
                    if (n ? !u(r) : !it.isEmptyObject(r)) return
                }(n || (delete s[a].data, u(s[a]))) && (o ? it.cleanData([t], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function d() {
        return !1
    }

    function f() {
        try {
            return ft.activeElement
        } catch (t) {}
    }

    function v(t) {
        var e = Ot.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function m(t, e) {
        var n, r, i = 0,
            o = typeof t.getElementsByTagName !== wt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== wt ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (r = n[i]); i++) !e || it.nodeName(r, e) ? o.push(r) : it.merge(o, m(r, e));
        return void 0 === e || e && it.nodeName(t, e) ? it.merge([t], o) : o
    }

    function g(t) {
        Mt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return it.nodeName(t, "table") && it.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== it.find.attr(t, "type")) + "/" + t.type, t
    }

    function j(t) {
        var e = Wt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function $(t, e) {
        for (var n, r = 0; null != (n = t[r]); r++) it._data(n, "globalEval", !e || it._data(e[r], "globalEval"))
    }

    function x(t, e) {
        if (1 === e.nodeType && it.hasData(t)) {
            var n, r, i, o = it._data(t),
                s = it._data(e, o),
                a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (r = 0, i = a[n].length; r < i; r++) it.event.add(e, n, a[n][r])
            }
            s.data && (s.data = it.extend({}, s.data))
        }
    }

    function w(t, e) {
        var n, r, i;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[it.expando]) {
                i = it._data(e);
                for (r in i.events) it.removeEvent(e, r, i.handle);
                e.removeAttribute(it.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, j(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !it.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Mt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }

    function T(e, n) {
        var r, i = it(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
        return i.detach(), o
    }

    function C(t) {
        var e = ft,
            n = Zt[t];
        return n || (n = T(t, e), "none" !== n && n || (Jt = (Jt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), n = T(t, e), Jt.detach()), Zt[t] = n), n
    }

    function E(t, e) {
        return {
            get: function () {
                var n = t();
                if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function k(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), r = e, i = pe.length; i--;)
            if (e = pe[i] + n, e in t) return e;
        return r
    }

    function _(t, e) {
        for (var n, r, i, o = [], s = 0, a = t.length; s < a; s++) r = t[s], r.style && (o[s] = it._data(r, "olddisplay"), n = r.style.display, e ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && _t(r) && (o[s] = it._data(r, "olddisplay", C(r.nodeName)))) : (i = _t(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
        for (s = 0; s < a; s++) r = t[s], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function S(t, e, n) {
        var r = le.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }

    function M(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += it.css(t, n + kt[o], !0, i)), r ? ("content" === n && (s -= it.css(t, "padding" + kt[o], !0, i)), "margin" !== n && (s -= it.css(t, "border" + kt[o] + "Width", !0, i))) : (s += it.css(t, "padding" + kt[o], !0, i), "padding" !== n && (s += it.css(t, "border" + kt[o] + "Width", !0, i)));
        return s
    }

    function P(t, e, n) {
        var r = !0,
            i = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = te(t),
            s = nt.boxSizing && "border-box" === it.css(t, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = ee(t, e, o), (i < 0 || null == i) && (i = t.style[e]), re.test(i)) return i;
            r = s && (nt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + M(t, e, n || (s ? "border" : "content"), r, o) + "px"
    }

    function A(t, e, n, r, i) {
        return new A.prototype.init(t, e, n, r, i)
    }

    function N() {
        return setTimeout(function () {
            de = void 0
        }), de = it.now()
    }

    function D(t, e) {
        var n, r = {
                height: t
            },
            i = 0;
        for (e = e ? 1 : 0; i < 4; i += 2 - e) n = kt[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function R(t, e, n) {
        for (var r, i = (be[e] || []).concat(be["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, e, t)) return r
    }

    function O(t, e, n) {
        var r, i, o, s, a, l, u, c, h = this,
            p = {},
            d = t.style,
            f = t.nodeType && _t(t),
            v = it._data(t, "fxshow");
        n.queue || (a = it._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, h.always(function () {
            h.always(function () {
                a.unqueued--, it.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = it.css(t, "display"), c = "none" === u ? it._data(t, "olddisplay") || C(t.nodeName) : u, "inline" === c && "none" === it.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", nt.shrinkWrapBlocks() || h.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r], ve.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    f = !0
                }
                p[r] = v && v[r] || it.style(t, r)
            } else u = void 0;
        if (it.isEmptyObject(p)) "inline" === ("none" === u ? C(t.nodeName) : u) && (d.display = u);
        else {
            v ? "hidden" in v && (f = v.hidden) : v = it._data(t, "fxshow", {}), o && (v.hidden = !f), f ? it(t).show() : h.done(function () {
                it(t).hide()
            }), h.done(function () {
                var e;
                it._removeData(t, "fxshow");
                for (e in p) it.style(t, e, p[e])
            });
            for (r in p) s = R(f ? v[r] : 0, r, h), r in v || (v[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function L(t, e) {
        var n, r, i, o, s;
        for (n in t)
            if (r = it.camelCase(n), i = e[r], o = t[n], it.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), s = it.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete t[r];
                for (n in o) n in t || (t[n] = o[n], e[n] = i)
            } else e[r] = i
    }

    function I(t, e, n) {
        var r, i, o = 0,
            s = ye.length,
            a = it.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var e = de || N(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(o);
                return a.notifyWith(t, [u, o, n]), o < 1 && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: it.extend({}, e),
                opts: it.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: de || N(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var r = it.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (e) {
                    var n = 0,
                        r = e ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (L(c, u.opts.specialEasing); o < s; o++)
            if (r = ye[o].call(u, t, c, u.opts)) return r;
        return it.map(c, R, u), it.isFunction(u.opts.start) && u.opts.start.call(t, u), it.fx.timer(it.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function H(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0,
                o = e.toLowerCase().match(bt) || [];
            if (it.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function F(t, e, n, r) {
        function i(a) {
            var l;
            return o[a] = !0, it.each(t[a] || [], function (t, a) {
                var u = a(e, n, r);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            s = t === Ue;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }

    function B(t, e) {
        var n, r, i = it.ajaxSettings.flatOptions || {};
        for (r in e) void 0 !== e[r] && ((i[r] ? t : n || (n = {}))[r] = e[r]);
        return n && it.extend(!0, t, n), t
    }

    function q(t, e, n) {
        for (var r, i, o, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                r || (r = s)
            }
            o = o || r
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function U(t, e, n, r) {
        var i, o, s, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (i in u)
                    if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[i] : u[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function V(t, e, n, r) {
        var i;
        if (it.isArray(e)) it.each(e, function (e, i) {
            n || We.test(t) ? r(t, i) : V(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
        });
        else if (n || "object" !== it.type(e)) r(t, e);
        else
            for (i in e) V(t + "[" + i + "]", e[i], n, r)
    }

    function Q() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function z() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function W(t) {
        return it.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var X = [],
        Y = X.slice,
        G = X.concat,
        K = X.push,
        J = X.indexOf,
        Z = {},
        tt = Z.toString,
        et = Z.hasOwnProperty,
        nt = {},
        rt = "1.11.1",
        it = function (t, e) {
            return new it.fn.init(t, e)
        },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        st = /^-ms-/,
        at = /-([\da-z])/gi,
        lt = function (t, e) {
            return e.toUpperCase()
        };
    it.fn = it.prototype = {
        jquery: rt,
        constructor: it,
        selector: "",
        length: 0,
        toArray: function () {
            return Y.call(this)
        },
        get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : Y.call(this)
        },
        pushStack: function (t) {
            var e = it.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t, e) {
            return it.each(this, t, e)
        },
        map: function (t) {
            return this.pushStack(it.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: X.sort,
        splice: X.splice
    }, it.extend = it.fn.extend = function () {
        var t, e, n, r, i, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || it.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (i = arguments[a]))
                for (r in i) t = s[r], n = i[r], s !== n && (u && n && (it.isPlainObject(n) || (e = it.isArray(n))) ? (e ? (e = !1, o = t && it.isArray(t) ? t : []) : o = t && it.isPlainObject(t) ? t : {}, s[r] = it.extend(u, o, n)) : void 0 !== n && (s[r] = n));
        return s
    }, it.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === it.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === it.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            return !it.isArray(t) && t - parseFloat(t) >= 0
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function (t) {
            var e;
            if (!t || "object" !== it.type(t) || t.nodeType || it.isWindow(t)) return !1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
        },
        globalEval: function (e) {
            e && it.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(st, "ms-").replace(at, lt)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e, r) {
            var i, o = 0,
                s = t.length,
                a = n(t);
            if (r) {
                if (a)
                    for (; o < s && (i = e.apply(t[o], r), i !== !1); o++);
                else
                    for (o in t)
                        if (i = e.apply(t[o], r), i === !1) break
            } else if (a)
                for (; o < s && (i = e.call(t[o], o, t[o]), i !== !1); o++);
            else
                for (o in t)
                    if (i = e.call(t[o], o, t[o]), i === !1) break; return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(ot, "")
        },
        makeArray: function (t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? it.merge(r, "string" == typeof t ? [t] : t) : K.call(r, t)), r
        },
        inArray: function (t, e, n) {
            var r;
            if (e) {
                if (J) return J.call(e, t, n);
                for (r = e.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function (t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n;) t[i++] = e[r++];
            if (n !== n)
                for (; void 0 !== e[r];) t[i++] = e[r++];
            return t.length = i, t
        },
        grep: function (t, e, n) {
            for (var r, i = [], o = 0, s = t.length, a = !n; o < s; o++) r = !e(t[o], o), r !== a && i.push(t[o]);
            return i
        },
        map: function (t, e, r) {
            var i, o = 0,
                s = t.length,
                a = n(t),
                l = [];
            if (a)
                for (; o < s; o++) i = e(t[o], o, r), null != i && l.push(i);
            else
                for (o in t) i = e(t[o], o, r), null != i && l.push(i);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, r, i;
            if ("string" == typeof e && (i = t[e], e = t, t = i), it.isFunction(t)) return n = Y.call(arguments, 2), r = function () {
                return t.apply(e || this, n.concat(Y.call(arguments)))
            }, r.guid = t.guid = t.guid || it.guid++, r
        },
        now: function () {
            return +new Date
        },
        support: nt
    }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ut = function (t) {
        function e(t, e, n, r) {
            var i, o, s, a, l, u, h, d, f, v;
            if ((e ? e.ownerDocument || e : F) !== A && P(e), e = e || A, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (D && !r) {
                if (i = yt.exec(t))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && I(e, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = i[3]) && $.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(s)), n
                    }
                if ($.qsa && (!R || !R.test(t))) {
                    if (d = h = H, f = e, v = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = C(t), (h = e.getAttribute("id")) ? d = h.replace(jt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
                        f = bt.test(t) && c(e.parentNode) || e, v = u.join(",")
                    }
                    if (v) try {
                        return Z.apply(n, f.querySelectorAll(v)), n
                    } catch (m) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return k(t.replace(lt, "$1"), e, n, r)
        }

        function n() {
            function t(n, r) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
            var e = [];
            return t
        }

        function r(t) {
            return t[H] = !0, t
        }

        function i(t) {
            var e = A.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), r = t.length; r--;) x.attrHandle[n[r]] = e
        }

        function s(t, e) {
            var n = e && t,
                r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return r(function (e) {
                return e = +e, r(function (n, r) {
                    for (var i, o = t([], n.length, e), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== W && t
        }

        function h() {}

        function p(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
            return r
        }

        function d(t, e, n) {
            var r = e.dir,
                i = n && "parentNode" === r,
                o = q++;
            return e.first ? function (e, n, o) {
                for (; e = e[r];)
                    if (1 === e.nodeType || i) return t(e, n, o)
            } : function (e, n, s) {
                var a, l, u = [B, o];
                if (s) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || i) && t(e, n, s)) return !0
                } else
                    for (; e = e[r];)
                        if (1 === e.nodeType || i) {
                            if (l = e[H] || (e[H] = {}), (a = l[r]) && a[0] === B && a[1] === o) return u[2] = a[2];
                            if (l[r] = u, u[2] = t(e, n, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function (e, n, r) {
                for (var i = t.length; i--;)
                    if (!t[i](e, n, r)) return !1;
                return !0
            } : t[0]
        }

        function v(t, n, r) {
            for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
            return r
        }

        function m(t, e, n, r, i) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, r, i) || (s.push(o), u && e.push(a)));
            return s
        }

        function g(t, e, n, i, o, s) {
            return i && !i[H] && (i = g(i)), o && !o[H] && (o = g(o, s)), r(function (r, s, a, l) {
                var u, c, h, p = [],
                    d = [],
                    f = s.length,
                    g = r || v(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !r && e ? g : m(g, p, t, a, l),
                    b = n ? o || (r ? t : f || i) ? [] : s : y;
                if (n && n(y, b, a, l), i)
                    for (u = m(b, d), i(u, [], a, l), c = u.length; c--;)(h = u[c]) && (b[d[c]] = !(y[d[c]] = h));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(h = b[c]) && u.push(y[c] = h);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(h = b[c]) && (u = o ? et.call(r, h) : p[c]) > -1 && (r[u] = !(s[u] = h))
                    }
                } else b = m(b === s ? b.splice(f, b.length) : b), o ? o(null, s, b, l) : Z.apply(s, b)
            })
        }

        function y(t) {
            for (var e, n, r, i = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = d(function (t) {
                    return t === e
                }, s, !0), u = d(function (t) {
                    return et.call(e, t) > -1
                }, s, !0), c = [function (t, n, r) {
                    return !o && (r || n !== _) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r))
                }]; a < i; a++)
                if (n = x.relative[t[a].type]) c = [d(f(c), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches), n[H]) {
                        for (r = ++a; r < i && !x.relative[t[r].type]; r++);
                        return g(a > 1 && f(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, a < r && y(t.slice(a, r)), r < i && y(t = t.slice(r)), r < i && p(t))
                    }
                    c.push(n)
                }
            return f(c)
        }

        function b(t, n) {
            var i = n.length > 0,
                o = t.length > 0,
                s = function (r, s, a, l, u) {
                    var c, h, p, d = 0,
                        f = "0",
                        v = r && [],
                        g = [],
                        y = _,
                        b = r || o && x.find.TAG("*", u),
                        j = B += null == y ? 1 : Math.random() || .1,
                        $ = b.length;
                    for (u && (_ = s !== A && s); f !== $ && null != (c = b[f]); f++) {
                        if (o && c) {
                            for (h = 0; p = t[h++];)
                                if (p(c, s, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (B = j)
                        }
                        i && ((c = !p && c) && d--, r && v.push(c))
                    }
                    if (d += f, i && f !== d) {
                        for (h = 0; p = n[h++];) p(v, g, s, a);
                        if (r) {
                            if (d > 0)
                                for (; f--;) v[f] || g[f] || (g[f] = K.call(l));
                            g = m(g)
                        }
                        Z.apply(l, g), u && !r && g.length > 0 && d + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (B = j, _ = y), v
                };
            return i ? r(s) : s
        }
        var j, $, x, w, T, C, E, k, _, S, M, P, A, N, D, R, O, L, I, H = "sizzle" + -new Date,
            F = t.document,
            B = 0,
            q = 0,
            U = n(),
            V = n(),
            Q = n(),
            z = function (t, e) {
                return t === e && (M = !0), 0
            },
            W = "undefined",
            X = 1 << 31,
            Y = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            J = G.push,
            Z = G.push,
            tt = G.slice,
            et = G.indexOf || function (t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (this[e] === t) return e;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = it.replace("w", "w#"),
            st = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]",
            at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            lt = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            ut = new RegExp("^" + rt + "*," + rt + "*"),
            ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            ht = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
            pt = new RegExp(at),
            dt = new RegExp("^" + ot + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            },
            vt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            jt = /'|\\/g,
            $t = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            xt = function (t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(G = tt.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (wt) {
            Z = {
                apply: G.length ? function (t, e) {
                    J.apply(t, tt.call(e))
                } : function (t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        $ = e.support = {}, T = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, P = e.setDocument = function (t) {
            var e, n = t ? t.ownerDocument || t : F,
                r = n.defaultView;
            return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, N = n.documentElement, D = !T(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                P()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                P()
            })), $.attributes = i(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), $.getElementsByTagName = i(function (t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), $.getElementsByClassName = gt.test(n.getElementsByClassName) && i(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), $.getById = i(function (t) {
                return N.appendChild(t).id = H, !n.getElementsByName || !n.getElementsByName(H).length
            }), $.getById ? (x.find.ID = function (t, e) {
                if (typeof e.getElementById !== W && D) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function (t) {
                var e = t.replace($t, xt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function (t) {
                var e = t.replace($t, xt);
                return function (t) {
                    var n = typeof t.getAttributeNode !== W && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = $.getElementsByTagName ? function (t, e) {
                if (typeof e.getElementsByTagName !== W) return e.getElementsByTagName(t)
            } : function (t, e) {
                var n, r = [],
                    i = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, x.find.CLASS = $.getElementsByClassName && function (t, e) {
                if (typeof e.getElementsByClassName !== W && D) return e.getElementsByClassName(t)
            }, O = [], R = [], ($.qsa = gt.test(n.querySelectorAll)) && (i(function (t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && R.push("[*^$]=" + rt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + rt + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || R.push(":checked")
            }), i(function (t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + rt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
            })), ($.matchesSelector = gt.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function (t) {
                $.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), O.push("!=", at)
            }), R = R.length && new RegExp(R.join("|")), O = O.length && new RegExp(O.join("|")), e = gt.test(N.compareDocumentPosition), I = e || gt.test(N.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, z = e ? function (t, e) {
                if (t === e) return M = !0, 0;
                var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return r ? r : (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & r || !$.sortDetached && e.compareDocumentPosition(t) === r ? t === n || t.ownerDocument === F && I(F, t) ? -1 : e === n || e.ownerDocument === F && I(F, e) ? 1 : S ? et.call(S, t) - et.call(S, e) : 0 : 4 & r ? -1 : 1)
            } : function (t, e) {
                if (t === e) return M = !0, 0;
                var r, i = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    u = [e];
                if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : S ? et.call(S, t) - et.call(S, e) : 0;
                if (o === a) return s(t, e);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (; l[i] === u[i];) i++;
                return i ? s(l[i], u[i]) : l[i] === F ? -1 : u[i] === F ? 1 : 0
            }, n) : A
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== A && P(t), n = n.replace(ht, "='$1']"), $.matchesSelector && D && (!O || !O.test(n)) && (!R || !R.test(n))) try {
                var r = L.call(t, n);
                if (r || $.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch (i) {}
            return e(n, A, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== A && P(t), I(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== A && P(t);
            var n = x.attrHandle[e.toLowerCase()],
                r = n && Y.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !D) : void 0;
            return void 0 !== r ? r : $.attributes || !D ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [],
                r = 0,
                i = 0;
            if (M = !$.detectDuplicates, S = !$.sortStable && t.slice(0), t.sort(z), M) {
                for (; e = t[i++];) e === t[i] && (r = n.push(i));
                for (; r--;) t.splice(n[r], 1)
            }
            return S = null, t
        }, w = e.getText = function (t) {
            var e, n = "",
                r = 0,
                i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += w(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else
                for (; e = t[r++];) n += w(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ft,
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
                ATTR: function (t) {
                    return t[1] = t[1].replace($t, xt), t[3] = (t[3] || t[4] || t[5] || "").replace($t, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace($t, xt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = U[t + " "];
                    return e || (e = new RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) && U(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== W && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, r) {
                    return function (i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === r && 0 === i ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, h, p, d, f, v = o !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            g = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (m) {
                            if (o) {
                                for (; v;) {
                                    for (h = e; h = h[v];)
                                        if (a ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                    f = v = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[H] || (m[H] = {}), u = c[t] || [], d = u[0] === B && u[1], p = u[0] === B && u[2], h = d && m.childNodes[d]; h = ++d && h && h[v] || (p = d = 0) || f.pop();)
                                    if (1 === h.nodeType && ++p && h === e) {
                                        c[t] = [B, d, p];
                                        break
                                    }
                            } else if (y && (u = (e[H] || (e[H] = {}))[t]) && u[0] === B) p = u[1];
                            else
                                for (;
                                    (h = ++d && h && h[v] || (p = d = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++p || (y && ((h[H] || (h[H] = {}))[t] = [B, p]), h !== e)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var i, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[H] ? o(n) : o.length > 1 ? (i = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
                        for (var r, i = o(t, n), s = i.length; s--;) r = et.call(t, i[s]), t[r] = !(e[r] = i[s])
                    }) : function (t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (t) {
                    var e = [],
                        n = [],
                        i = E(t.replace(lt, "$1"));
                    return i[H] ? r(function (t, e, n, r) {
                        for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, r, o) {
                        return e[0] = t, i(e, null, o, n), !n.pop()
                    }
                }),
                has: r(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                    }
                }),
                lang: r(function (t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace($t, xt).toLowerCase(),
                        function (e) {
                            var n;
                            do
                                if (n = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === N
                },
                focus: function (t) {
                    return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !x.pseudos.empty(t)
                },
                header: function (t) {
                    return mt.test(t.nodeName)
                },
                input: function (t) {
                    return vt.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (t, e) {
                    return [e - 1]
                }),
                eq: u(function (t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: u(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: u(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: u(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n; --r >= 0;) t.push(r);
                    return t
                }),
                gt: u(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (j in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[j] = a(j);
        for (j in {
                submit: !0,
                reset: !0
            }) x.pseudos[j] = l(j);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h, C = e.tokenize = function (t, n) {
            var r, i, o, s, a, l, u, c = V[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, l = [], u = x.preFilter; a;) {
                r && !(i = ut.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r = !1, (i = ct.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(lt, " ")
                }), a = a.slice(r.length));
                for (s in x.filter) !(i = ft[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? e.error(t) : V(t, l).slice(0)
        }, E = e.compile = function (t, e) {
            var n, r = [],
                i = [],
                o = Q[t + " "];
            if (!o) {
                for (e || (e = C(t)), n = e.length; n--;) o = y(e[n]), o[H] ? r.push(o) : i.push(o);
                o = Q(t, b(i, r)), o.selector = t
            }
            return o
        }, k = e.select = function (t, e, n, r) {
            var i, o, s, a, l, u = "function" == typeof t && t,
                h = !r && C(t = u.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && $.getById && 9 === e.nodeType && D && x.relative[o[1].type]) {
                    if (e = (x.find.ID(s.matches[0].replace($t, xt), e) || [])[0], !e) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (i = ft.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (r = l(s.matches[0].replace($t, xt), bt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(i, 1), t = r.length && p(o), !t) return Z.apply(n, r), n;
                        break
                    }
            }
            return (u || E(t, h))(r, e, !D, n, bt.test(t) && c(e.parentNode) || e), n
        }, $.sortStable = H.split("").sort(z).join("") === H, $.detectDuplicates = !!M, P(), $.sortDetached = i(function (t) {
            return 1 & t.compareDocumentPosition(A.createElement("div"))
        }), i(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), $.attributes && i(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), i(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(nt, function (t, e, n) {
            var r;
            if (!n) return t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    it.find = ut, it.expr = ut.selectors, it.expr[":"] = it.expr.pseudos, it.unique = ut.uniqueSort, it.text = ut.getText, it.isXMLDoc = ut.isXML, it.contains = ut.contains;
    var ct = it.expr.match.needsContext,
        ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^.[^:#\[\.,]*$/;
    it.filter = function (t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? it.find.matchesSelector(r, t) ? [r] : [] : it.find.matches(t, it.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, it.fn.extend({
        find: function (t) {
            var e, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof t) return this.pushStack(it(t).filter(function () {
                for (e = 0; e < i; e++)
                    if (it.contains(r[e], this)) return !0
            }));
            for (e = 0; e < i; e++) it.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function (t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function (t) {
            return !!r(this, "string" == typeof t && ct.test(t) ? it(t) : t || [], !1).length
        }
    });
    var dt, ft = t.document,
        vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = it.fn.init = function (t, e) {
            var n, r;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : vt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || dt).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof it ? e[0] : e, it.merge(this, it.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), ht.test(n[1]) && it.isPlainObject(e))
                        for (n in e) it.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (r = ft.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return dt.find(t);
                    this.length = 1, this[0] = r
                }
                return this.context = ft, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : it.isFunction(t) ? "undefined" != typeof dt.ready ? dt.ready(t) : t(it) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), it.makeArray(t, this))
        };
    mt.prototype = it.fn, dt = it(ft);
    var gt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    it.extend({
        dir: function (t, e, n) {
            for (var r = [], i = t[e]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && r.push(i), i = i[e];
            return r
        },
        sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), it.fn.extend({
        has: function (t) {
            var e, n = it(t, this),
                r = n.length;
            return this.filter(function () {
                for (e = 0; e < r; e++)
                    if (it.contains(this, n[e])) return !0
            })
        },
        closest: function (t, e) {
            for (var n, r = 0, i = this.length, o = [], s = ct.test(t) || "string" != typeof t ? it(t, e || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? it.unique(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? it.inArray(this[0], it(t)) : it.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(it.unique(it.merge(this.get(), it(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), it.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return it.dir(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return it.dir(t, "parentNode", n)
        },
        next: function (t) {
            return i(t, "nextSibling")
        },
        prev: function (t) {
            return i(t, "previousSibling")
        },
        nextAll: function (t) {
            return it.dir(t, "nextSibling")
        },
        prevAll: function (t) {
            return it.dir(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return it.dir(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return it.dir(t, "previousSibling", n)
        },
        siblings: function (t) {
            return it.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return it.sibling(t.firstChild)
        },
        contents: function (t) {
            return it.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : it.merge([], t.childNodes)
        }
    }, function (t, e) {
        it.fn[t] = function (n, r) {
            var i = it.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (yt[t] || (i = it.unique(i)), gt.test(t) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var bt = /\S+/g,
        jt = {};
    it.Callbacks = function (t) {
        t = "string" == typeof t ? jt[t] || o(t) : it.extend({}, t);
        var e, n, r, i, s, a, l = [],
            u = !t.once && [],
            c = function (o) {
                for (n = t.memory && o, r = !0, s = a || 0, a = 0, i = l.length, e = !0; l && s < i; s++)
                    if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : h.disable())
            },
            h = {
                add: function () {
                    if (l) {
                        var r = l.length;
                        ! function o(e) {
                            it.each(e, function (e, n) {
                                var r = it.type(n);
                                "function" === r ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), e ? i = l.length : n && (a = r, c(n))
                    }
                    return this
                },
                remove: function () {
                    return l && it.each(arguments, function (t, n) {
                        for (var r;
                            (r = it.inArray(n, l, r)) > -1;) l.splice(r, 1), e && (r <= i && i--, r <= s && s--)
                    }), this
                },
                has: function (t) {
                    return t ? it.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], i = 0, this
                },
                disable: function () {
                    return l = u = n = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = void 0, n || h.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (t, n) {
                    return !l || r && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return h
    }, it.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", it.Callbacks("once memory"), "resolved"], ["reject", "fail", it.Callbacks("once memory"), "rejected"], ["notify", "progress", it.Callbacks("memory")]],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return it.Deferred(function (n) {
                            it.each(e, function (e, o) {
                                var s = it.isFunction(t[e]) && t[e];
                                i[o[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && it.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? it.extend(t, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, it.each(e, function (t, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), t && t.call(i, i), i
        },
        when: function (t) {
            var e, n, r, i = 0,
                o = Y.call(arguments),
                s = o.length,
                a = 1 !== s || t && it.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : it.Deferred(),
                u = function (t, n, r) {
                    return function (i) {
                        n[t] = this, r[t] = arguments.length > 1 ? Y.call(arguments) : i, r === e ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, e)) : --a;
            return a || l.resolveWith(r, o), l.promise()
        }
    });
    var $t;
    it.fn.ready = function (t) {
        return it.ready.promise().done(t), this
    }, it.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? it.readyWait++ : it.ready(!0)
        },
        ready: function (t) {
            if (t === !0 ? !--it.readyWait : !it.isReady) {
                if (!ft.body) return setTimeout(it.ready);
                it.isReady = !0, t !== !0 && --it.readyWait > 0 || ($t.resolveWith(ft, [it]), it.fn.triggerHandler && (it(ft).triggerHandler("ready"), it(ft).off("ready")))
            }
        }
    }), it.ready.promise = function (e) {
        if (!$t)
            if ($t = it.Deferred(), "complete" === ft.readyState) setTimeout(it.ready);
            else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            ft.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && ft.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!it.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(i, 50)
                    }
                    s(), it.ready()
                }
            }()
        }
        return $t.promise(e)
    };
    var xt, wt = "undefined";
    for (xt in it(nt)) break;
    nt.ownLast = "0" !== xt, nt.inlineBlockNeedsLayout = !1, it(function () {
            var t, e, n, r;
            n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), r = ft.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), typeof e.style.zoom !== wt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function () {
            var t = ft.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    nt.deleteExpando = !1
                }
            }
            t = null
        }(), it.acceptData = function (t) {
            var e = it.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
        };
    var Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ct = /([A-Z])/g;
    it.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (t) {
            return t = t.nodeType ? it.cache[t[it.expando]] : t[it.expando], !!t && !u(t)
        },
        data: function (t, e, n) {
            return c(t, e, n)
        },
        removeData: function (t, e) {
            return h(t, e)
        },
        _data: function (t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function (t, e) {
            return h(t, e, !0)
        }
    }), it.fn.extend({
        data: function (t, e) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = it.data(o), 1 === o.nodeType && !it._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), l(o, r, i[r])));
                    it._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function () {
                it.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                it.data(this, t, e)
            }) : o ? l(o, t, it.data(o, t)) : void 0
        },
        removeData: function (t) {
            return this.each(function () {
                it.removeData(this, t)
            })
        }
    }), it.extend({
        queue: function (t, e, n) {
            var r;
            if (t) return e = (e || "fx") + "queue", r = it._data(t, e), n && (!r || it.isArray(n) ? r = it._data(t, e, it.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = it.queue(t, e),
                r = n.length,
                i = n.shift(),
                o = it._queueHooks(t, e),
                s = function () {
                    it.dequeue(t, e)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return it._data(t, n) || it._data(t, n, {
                empty: it.Callbacks("once memory").add(function () {
                    it._removeData(t, e + "queue"), it._removeData(t, n)
                })
            })
        }
    }), it.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? it.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = it.queue(this, t, e);
                it._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && it.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                it.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, r = 1,
                i = it.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = it._data(o[s], t + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(e)
        }
    });
    var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kt = ["Top", "Right", "Bottom", "Left"],
        _t = function (t, e) {
            return t = e || t, "none" === it.css(t, "display") || !it.contains(t.ownerDocument, t)
        },
        St = it.access = function (t, e, n, r, i, o, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === it.type(n)) {
                i = !0;
                for (a in n) it.access(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0, it.isFunction(r) || (s = !0), u && (s ? (e.call(t, r), e = null) : (u = e, e = function (t, e, n) {
                    return u.call(it(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
            return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        Mt = /^(?:checkbox|radio)$/i;
    ! function () {
        var t = ft.createElement("input"),
            e = ft.createElement("div"),
            n = ft.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                nt.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (r) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function () {
        var e, n, r = ft.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (r.setAttribute(n, "t"), nt[e + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Pt = /^(?:input|select|textarea)$/i,
        At = /^key/,
        Nt = /^(?:mouse|pointer|contextmenu)|click/,
        Dt = /^(?:focusinfocus|focusoutblur)$/,
        Rt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, s, a, l, u, c, h, p, d, f, v, m = it._data(t);
            if (m) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = it.guid++), (s = m.events) || (s = m.events = {}), (c = m.handle) || (c = m.handle = function (t) {
                        return typeof it === wt || t && it.event.triggered === t.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) o = Rt.exec(e[a]) || [], d = v = o[1], f = (o[2] || "").split(".").sort(), d && (u = it.event.special[d] || {}, d = (i ? u.delegateType : u.bindType) || d, u = it.event.special[d] || {}, h = it.extend({
                    type: d,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && it.expr.match.needsContext.test(i),
                    namespace: f.join(".")
                }, l), (p = s[d]) || (p = s[d] = [], p.delegateCount = 0, u.setup && u.setup.call(t, r, f, c) !== !1 || (t.addEventListener ? t.addEventListener(d, c, !1) : t.attachEvent && t.attachEvent("on" + d, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, h) : p.push(h), it.event.global[d] = !0);
                t = null
            }
        },
        remove: function (t, e, n, r, i) {
            var o, s, a, l, u, c, h, p, d, f, v, m = it.hasData(t) && it._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(bt) || [""], u = e.length; u--;)
                    if (a = Rt.exec(e[u]) || [], d = v = a[1], f = (a[2] || "").split(".").sort(), d) {
                        for (h = it.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, p = c[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) s = p[o], !i && v !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (p.splice(o, 1), s.selector && p.delegateCount--, h.remove && h.remove.call(t, s));
                        l && !p.length && (h.teardown && h.teardown.call(t, f, m.handle) !== !1 || it.removeEvent(t, d, m.handle), delete c[d])
                    } else
                        for (d in c) it.event.remove(t, d + e[u], n, r, !0);
                it.isEmptyObject(c) && (delete m.handle, it._removeData(t, "events"))
            }
        },
        trigger: function (e, n, r, i) {
            var o, s, a, l, u, c, h, p = [r || ft],
                d = et.call(e, "type") ? e.type : e,
                f = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = r = r || ft, 3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(d + it.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), s = d.indexOf(":") < 0 && "on" + d, e = e[it.expando] ? e : new it.Event(d, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : it.makeArray(n, [e]), u = it.event.special[d] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !it.isWindow(r)) {
                    for (l = u.delegateType || d, Dt.test(l + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), c = a;
                    c === (r.ownerDocument || ft) && p.push(c.defaultView || c.parentWindow || t)
                }
                for (h = 0;
                    (a = p[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || d, o = (it._data(a, "events") || {})[e.type] && it._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && it.acceptData(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = d, !i && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && it.acceptData(r) && s && r[d] && !it.isWindow(r)) {
                    c = r[s], c && (r[s] = null), it.event.triggered = d;
                    try {
                        r[d]()
                    } catch (v) {}
                    it.event.triggered = void 0, c && (r[s] = c)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = it.event.fix(t);
            var e, n, r, i, o, s = [],
                a = Y.call(arguments),
                l = (it._data(this, "events") || {})[t.type] || [],
                u = it.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = it.event.handlers.call(this, t, l), e = 0;
                    (i = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, r, i, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], o = 0; o < a; o++) r = e[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(l) >= 0 : it.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function (t) {
            if (t[it.expando]) return t;
            var e, n, r, i = t.type,
                o = t,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Nt.test(i) ? this.mouseHooks : At.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, t = new it.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, r, i, o = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || ft, i = r.documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === f() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (it.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function (t) {
                    return it.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n, r) {
            var i = it.extend(new it.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? it.event.trigger(i, null, e) : it.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, it.removeEvent = ft.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var r = "on" + e;
        t.detachEvent && (typeof t[r] === wt && (t[r] = null), t.detachEvent(r, n))
    }, it.Event = function (t, e) {
        return this instanceof it.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : d) : this.type = t, e && it.extend(this, e), this.timeStamp = t && t.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(t, e)
    }, it.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = p, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        it.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, r = this,
                    i = t.relatedTarget,
                    o = t.handleObj;
                return i && (i === r || it.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), nt.submitBubbles || (it.event.special.submit = {
        setup: function () {
            return !it.nodeName(this, "form") && void it.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target,
                    n = it.nodeName(e, "input") || it.nodeName(e, "button") ? e.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), it._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && it.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function () {
            return !it.nodeName(this, "form") && void it.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (it.event.special.change = {
        setup: function () {
            return Pt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (it.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), it.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, t, !0)
            })), !1) : void it.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Pt.test(e.nodeName) && !it._data(e, "changeBubbles") && (it.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || it.event.simulate("change", this.parentNode, t, !0)
                }), it._data(e, "changeBubbles", !0))
            })
        },
        handle: function (t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return it.event.remove(this, "._change"), !Pt.test(this.nodeName)
        }
    }), nt.focusinBubbles || it.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            it.event.simulate(e, t.target, it.event.fix(t), !0)
        };
        it.event.special[e] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = it._data(r, e);
                i || r.addEventListener(t, n, !0), it._data(r, e, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = it._data(r, e) - 1;
                i ? it._data(r, e, i) : (r.removeEventListener(t, n, !0), it._removeData(r, e))
            }
        }
    }), it.fn.extend({
        on: function (t, e, n, r, i) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t) this.on(o, e, n, t[o], i);
                return this
            }
            if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = d;
            else if (!r) return this;
            return 1 === i && (s = r, r = function (t) {
                return it().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = it.guid++)), this.each(function () {
                it.event.add(this, t, r, n, e)
            })
        },
        one: function (t, e, n, r) {
            return this.on(t, e, n, r, 1)
        },
        off: function (t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, it(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = d), this.each(function () {
                it.event.remove(this, t, n, e)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                it.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return it.event.trigger(t, e, n, !0)
        }
    });
    var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Lt = / jQuery\d+="(?:null|\d+)"/g,
        It = new RegExp("<(?:" + Ot + ")[\\s/>]", "i"),
        Ht = /^\s+/,
        Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Bt = /<([\w:]+)/,
        qt = /<tbody/i,
        Ut = /<|&#?\w+;/,
        Vt = /<(?:script|style|link)/i,
        Qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        zt = /^$|\/(?:java|ecma)script/i,
        Wt = /^true\/(.*)/,
        Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Gt = v(ft),
        Kt = Gt.appendChild(ft.createElement("div"));
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, it.extend({
        clone: function (t, e, n) {
            var r, i, o, s, a, l = it.contains(t.ownerDocument, t);
            if (nt.html5Clone || it.isXMLDoc(t) || !It.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Kt.innerHTML = t.outerHTML, Kt.removeChild(o = Kt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || it.isXMLDoc(t)))
                for (r = m(o), a = m(t), s = 0; null != (i = a[s]); ++s) r[s] && w(i, r[s]);
            if (e)
                if (n)
                    for (a = a || m(t), r = r || m(o), s = 0; null != (i = a[s]); s++) x(i, r[s]);
                else x(t, o);
            return r = m(o, "script"), r.length > 0 && $(r, !l && m(t, "script")), r = a = i = null, o
        },
        buildFragment: function (t, e, n, r) {
            for (var i, o, s, a, l, u, c, h = t.length, p = v(e), d = [], f = 0; f < h; f++)
                if (o = t[f], o || 0 === o)
                    if ("object" === it.type(o)) it.merge(d, o.nodeType ? [o] : o);
                    else if (Ut.test(o)) {
                for (a = a || p.appendChild(e.createElement("div")), l = (Bt.exec(o) || ["", ""])[1].toLowerCase(), c = Yt[l] || Yt._default, a.innerHTML = c[1] + o.replace(Ft, "<$1></$2>") + c[2], i = c[0]; i--;) a = a.lastChild;
                if (!nt.leadingWhitespace && Ht.test(o) && d.push(e.createTextNode(Ht.exec(o)[0])), !nt.tbody)
                    for (o = "table" !== l || qt.test(o) ? "<table>" !== c[1] || qt.test(o) ? 0 : a : a.firstChild, i = o && o.childNodes.length; i--;) it.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (it.merge(d, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = p.lastChild
            } else d.push(e.createTextNode(o));
            for (a && p.removeChild(a), nt.appendChecked || it.grep(m(d, "input"), g), f = 0; o = d[f++];)
                if ((!r || it.inArray(o, r) === -1) && (s = it.contains(o.ownerDocument, o), a = m(p.appendChild(o), "script"), s && $(a), n))
                    for (i = 0; o = a[i++];) zt.test(o.type || "") && n.push(o);
            return a = null, p
        },
        cleanData: function (t, e) {
            for (var n, r, i, o, s = 0, a = it.expando, l = it.cache, u = nt.deleteExpando, c = it.event.special; null != (n = t[s]); s++)
                if ((e || it.acceptData(n)) && (i = n[a], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[a] : typeof n.removeAttribute !== wt ? n.removeAttribute(a) : n[a] = null, X.push(i))
                }
        }
    }), it.fn.extend({
        text: function (t) {
            return St(this, function (t) {
                return void 0 === t ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function (t, e) {
            for (var n, r = t ? it.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || it.cleanData(m(n)), n.parentNode && (e && it.contains(n.ownerDocument, n) && $(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && it.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && it.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return it.clone(this, t, e)
            })
        },
        html: function (t) {
            return St(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Lt, "") : void 0;
                if ("string" == typeof t && !Vt.test(t) && (nt.htmlSerialize || !It.test(t)) && (nt.leadingWhitespace || !Ht.test(t)) && !Yt[(Bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ft, "<$1></$2>");
                    try {
                        for (; n < r; n++) e = this[n] || {}, 1 === e.nodeType && (it.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (i) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, it.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function (t) {
            return this.remove(t, !0)
        },
        domManip: function (t, e) {
            t = G.apply([], t);
            var n, r, i, o, s, a, l = 0,
                u = this.length,
                c = this,
                h = u - 1,
                p = t[0],
                d = it.isFunction(p);
            if (d || u > 1 && "string" == typeof p && !nt.checkClone && Qt.test(p)) return this.each(function (n) {
                var r = c.eq(n);
                d && (t[0] = p.call(this, n, r.html())), r.domManip(t, e)
            });
            if (u && (a = it.buildFragment(t, this[0].ownerDocument, !1, this),
                    n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = it.map(m(a, "script"), b), i = o.length; l < u; l++) r = a, l !== h && (r = it.clone(r, !0, !0), i && it.merge(o, m(r, "script"))), e.call(this[l], r, l);
                if (i)
                    for (s = o[o.length - 1].ownerDocument, it.map(o, j), l = 0; l < i; l++) r = o[l], zt.test(r.type || "") && !it._data(r, "globalEval") && it.contains(s, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Xt, "")));
                a = n = null
            }
            return this
        }
    }), it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        it.fn[t] = function (t) {
            for (var n, r = 0, i = [], o = it(t), s = o.length - 1; r <= s; r++) n = r === s ? this : this.clone(!0), it(o[r])[e](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Jt, Zt = {};
    ! function () {
        var t;
        nt.shrinkWrapBlocks = function () {
            if (null != t) return t;
            t = !1;
            var e, n, r;
            return n = ft.getElementsByTagName("body")[0], n && n.style ? (e = ft.createElement("div"), r = ft.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), typeof e.style.zoom !== wt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(r), t) : void 0
        }
    }();
    var te, ee, ne = /^margin/,
        re = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
        ie = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (te = function (t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, ee = function (t, e, n) {
            var r, i, o, s, a = t.style;
            return n = n || te(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || it.contains(t.ownerDocument, t) || (s = it.style(t, e)), re.test(s) && ne.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 === s ? s : s + ""
        }) : ft.documentElement.currentStyle && (te = function (t) {
            return t.currentStyle
        }, ee = function (t, e, n) {
            var r, i, o, s, a = t.style;
            return n = n || te(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), re.test(s) && !ie.test(e) && (r = a.left, i = t.runtimeStyle, o = i && i.left, o && (i.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = r, o && (i.left = o)), void 0 === s ? s : s + "" || "auto"
        }),
        function () {
            function e() {
                var e, n, r, i;
                n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), r = ft.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, i = e.appendChild(ft.createElement("div")), i.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = e.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === i[0].offsetHeight, a && (i[0].style.display = "", i[1].style.display = "none", a = 0 === i[0].offsetHeight), n.removeChild(r))
            }
            var n, r, i, o, s, a, l;
            n = ft.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {
                reliableHiddenOffsets: function () {
                    return null == a && e(), a
                },
                boxSizingReliable: function () {
                    return null == s && e(), s
                },
                pixelPosition: function () {
                    return null == o && e(), o
                },
                reliableMarginRight: function () {
                    return null == l && e(), l
                }
            }))
        }(), it.swap = function (t, e, n, r) {
            var i, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            i = n.apply(t, r || []);
            for (o in e) t.style[o] = s[o];
            return i
        };
    var oe = /alpha\([^)]*\)/i,
        se = /opacity\s*=\s*([^)]*)/,
        ae = /^(none|table(?!-c[ea]).+)/,
        le = new RegExp("^(" + Et + ")(.*)$", "i"),
        ue = new RegExp("^([+-])=(" + Et + ")", "i"),
        ce = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        he = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pe = ["Webkit", "O", "Moz", "ms"];
    it.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = ee(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
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
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = it.camelCase(e),
                    l = t.style;
                if (e = it.cssProps[a] || (it.cssProps[a] = k(l, a)), s = it.cssHooks[e] || it.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : l[e];
                if (o = typeof n, "string" === o && (i = ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || it.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, r))))) try {
                    l[e] = n
                } catch (u) {}
            }
        },
        css: function (t, e, n, r) {
            var i, o, s, a = it.camelCase(e);
            return e = it.cssProps[a] || (it.cssProps[a] = k(t.style, a)), s = it.cssHooks[e] || it.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = ee(t, e, r)), "normal" === o && e in he && (o = he[e]), "" === n || n ? (i = parseFloat(o), n === !0 || it.isNumeric(i) ? i || 0 : o) : o
        }
    }), it.each(["height", "width"], function (t, e) {
        it.cssHooks[e] = {
            get: function (t, n, r) {
                if (n) return ae.test(it.css(t, "display")) && 0 === t.offsetWidth ? it.swap(t, ce, function () {
                    return P(t, e, r)
                }) : P(t, e, r)
            },
            set: function (t, n, r) {
                var i = r && te(t);
                return S(t, n, r ? M(t, e, r, nt.boxSizing && "border-box" === it.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), nt.opacity || (it.cssHooks.opacity = {
        get: function (t, e) {
            return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var n = t.style,
                r = t.currentStyle,
                i = it.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === it.trim(o.replace(oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = oe.test(o) ? o.replace(oe, i) : o + " " + i)
        }
    }), it.cssHooks.marginRight = E(nt.reliableMarginRight, function (t, e) {
        if (e) return it.swap(t, {
            display: "inline-block"
        }, ee, [t, "marginRight"])
    }), it.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        it.cssHooks[t + e] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + kt[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, ne.test(t) || (it.cssHooks[t + e].set = S)
    }), it.fn.extend({
        css: function (t, e) {
            return St(this, function (t, e, n) {
                var r, i, o = {},
                    s = 0;
                if (it.isArray(e)) {
                    for (r = te(t), i = e.length; s < i; s++) o[e[s]] = it.css(t, e[s], !1, r);
                    return o
                }
                return void 0 !== n ? it.style(t, e, n) : it.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return _(this, !0)
        },
        hide: function () {
            return _(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                _t(this) ? it(this).show() : it(this).hide()
            })
        }
    }), it.Tween = A, A.prototype = {
        constructor: A,
        init: function (t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = A.propHooks[this.prop];
            return t && t.get ? t.get(this) : A.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = e = it.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = it.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function (t) {
                it.fx.step[t.prop] ? it.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[it.cssProps[t.prop]] || it.cssHooks[t.prop]) ? it.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, it.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, it.fx = A.prototype.init, it.fx.step = {};
    var de, fe, ve = /^(?:toggle|show|hide)$/,
        me = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
        ge = /queueHooks$/,
        ye = [O],
        be = {
            "*": [function (t, e) {
                var n = this.createTween(t, e),
                    r = n.cur(),
                    i = me.exec(e),
                    o = i && i[3] || (it.cssNumber[t] ? "" : "px"),
                    s = (it.cssNumber[t] || "px" !== o && +r) && me.exec(it.css(n.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, it.style(n.elem, t, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --l)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    it.Animation = it.extend(I, {
            tweener: function (t, e) {
                it.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, r = 0, i = t.length; r < i; r++) n = t[r], be[n] = be[n] || [], be[n].unshift(e)
            },
            prefilter: function (t, e) {
                e ? ye.unshift(t) : ye.push(t)
            }
        }), it.speed = function (t, e, n) {
            var r = t && "object" == typeof t ? it.extend({}, t) : {
                complete: n || !n && e || it.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !it.isFunction(e) && e
            };
            return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue)
            }, r
        }, it.fn.extend({
            fadeTo: function (t, e, n, r) {
                return this.filter(_t).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, r)
            },
            animate: function (t, e, n, r) {
                var i = it.isEmptyObject(t),
                    o = it.speed(e, n, r),
                    s = function () {
                        var e = I(this, it.extend({}, t), o);
                        (i || it._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (t, e, n) {
                var r = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        i = null != t && t + "queueHooks",
                        o = it.timers,
                        s = it._data(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && ge.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                    !e && n || it.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = it._data(this),
                        r = n[t + "queue"],
                        i = n[t + "queueHooks"],
                        o = it.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, it.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                })
            }
        }), it.each(["toggle", "show", "hide"], function (t, e) {
            var n = it.fn[e];
            it.fn[e] = function (t, r, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(D(e, !0), t, r, i)
            }
        }), it.each({
            slideDown: D("show"),
            slideUp: D("hide"),
            slideToggle: D("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            it.fn[t] = function (t, n, r) {
                return this.animate(e, t, n, r)
            }
        }), it.timers = [], it.fx.tick = function () {
            var t, e = it.timers,
                n = 0;
            for (de = it.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || it.fx.stop(), de = void 0
        }, it.fx.timer = function (t) {
            it.timers.push(t), t() ? it.fx.start() : it.timers.pop()
        }, it.fx.interval = 13, it.fx.start = function () {
            fe || (fe = setInterval(it.fx.tick, it.fx.interval))
        }, it.fx.stop = function () {
            clearInterval(fe), fe = null
        }, it.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, it.fn.delay = function (t, e) {
            return t = it.fx ? it.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var r = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        function () {
            var t, e, n, r, i;
            e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = e.getElementsByTagName("a")[0], n = ft.createElement("select"), i = n.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = i.selected, nt.enctype = !!ft.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
        }();
    var je = /\r/g;
    it.fn.extend({
        val: function (t) {
            var e, n, r, i = this[0]; {
                if (arguments.length) return r = it.isFunction(t), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? t.call(this, n, it(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function (t) {
                        return null == t ? "" : t + ""
                    })), e = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                });
                if (i) return e = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(je, "") : null == n ? "" : n)
            }
        }
    }), it.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = it.find.attr(t, "value");
                    return null != e ? e : it.trim(it.text(t))
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, l = i < 0 ? a : o ? i : 0; l < a; l++)
                        if (n = r[l], (n.selected || l === i) && (nt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !it.nodeName(n.parentNode, "optgroup"))) {
                            if (e = it(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function (t, e) {
                    for (var n, r, i = t.options, o = it.makeArray(e), s = i.length; s--;)
                        if (r = i[s], it.inArray(it.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (a) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (t.selectedIndex = -1), i
                }
            }
        }
    }), it.each(["radio", "checkbox"], function () {
        it.valHooks[this] = {
            set: function (t, e) {
                if (it.isArray(e)) return t.checked = it.inArray(it(t).val(), e) >= 0
            }
        }, nt.checkOn || (it.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var $e, xe, we = it.expr.attrHandle,
        Te = /^(?:checked|selected)$/i,
        Ce = nt.getSetAttribute,
        Ee = nt.input;
    it.fn.extend({
        attr: function (t, e) {
            return St(this, it.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                it.removeAttr(this, t)
            })
        }
    }), it.extend({
        attr: function (t, e, n) {
            var r, i, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === wt ? it.prop(t, e, n) : (1 === o && it.isXMLDoc(t) || (e = e.toLowerCase(), r = it.attrHooks[e] || (it.expr.match.bool.test(e) ? xe : $e)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = it.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void it.removeAttr(t, e))
        },
        removeAttr: function (t, e) {
            var n, r, i = 0,
                o = e && e.match(bt);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) r = it.propFix[n] || n, it.expr.match.bool.test(n) ? Ee && Ce || !Te.test(n) ? t[r] = !1 : t[it.camelCase("default-" + n)] = t[r] = !1 : it.attr(t, n, ""), t.removeAttribute(Ce ? n : r)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!nt.radioValue && "radio" === e && it.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), xe = {
        set: function (t, e, n) {
            return e === !1 ? it.removeAttr(t, n) : Ee && Ce || !Te.test(n) ? t.setAttribute(!Ce && it.propFix[n] || n, n) : t[it.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, it.each(it.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = we[e] || it.find.attr;
        we[e] = Ee && Ce || !Te.test(e) ? function (t, e, r) {
            var i, o;
            return r || (o = we[e], we[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, we[e] = o), i
        } : function (t, e, n) {
            if (!n) return t[it.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ee && Ce || (it.attrHooks.value = {
        set: function (t, e, n) {
            return it.nodeName(t, "input") ? void(t.defaultValue = e) : $e && $e.set(t, e, n)
        }
    }), Ce || ($e = {
        set: function (t, e, n) {
            var r = t.getAttributeNode(n);
            if (r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = e += "", "value" === n || e === t.getAttribute(n)) return e
        }
    }, we.id = we.name = we.coords = function (t, e, n) {
        var r;
        if (!n) return (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
    }, it.valHooks.button = {
        get: function (t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified) return n.value
        },
        set: $e.set
    }, it.attrHooks.contenteditable = {
        set: function (t, e, n) {
            $e.set(t, "" !== e && e, n)
        }
    }, it.each(["width", "height"], function (t, e) {
        it.attrHooks[e] = {
            set: function (t, n) {
                if ("" === n) return t.setAttribute(e, "auto"), n
            }
        }
    })), nt.style || (it.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var ke = /^(?:input|select|textarea|button|object)$/i,
        _e = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function (t, e) {
            return St(this, it.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = it.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), it.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (t, e, n) {
            var r, i, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !it.isXMLDoc(t), o && (e = it.propFix[e] || e, i = it.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = it.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ke.test(t.nodeName) || _e.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || it.each(["href", "src"], function (t, e) {
        it.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), nt.optSelected || (it.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        it.propFix[this.toLowerCase()] = this
    }), nt.enctype || (it.propFix.enctype = "encoding");
    var Se = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, s, a = 0,
                l = this.length,
                u = "string" == typeof t && t;
            if (it.isFunction(t)) return this.each(function (e) {
                it(this).addClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(bt) || []; a < l; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Se, " ") : " ")) {
                        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = it.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, r, i, o, s, a = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (it.isFunction(t)) return this.each(function (e) {
                it(this).removeClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(bt) || []; a < l; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Se, " ") : "")) {
                        for (o = 0; i = e[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = t ? it.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : it.isFunction(t) ? this.each(function (n) {
                it(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function () {
                if ("string" === n)
                    for (var e, r = 0, i = it(this), o = t.match(bt) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else n !== wt && "boolean" !== n || (this.className && it._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : it._data(this, "__className__") || "")
            })
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Se, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        it.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), it.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Me = it.now(),
        Pe = /\?/,
        Ae = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, r = null,
            i = it.trim(e + "");
        return i && !it.trim(i.replace(Ae, function (t, e, i, o) {
            return n && e && (r = 0), 0 === r ? t : (n = i || e, r += !o - !i, "")
        })) ? Function("return " + i)() : it.error("Invalid JSON: " + e)
    }, it.parseXML = function (e) {
        var n, r;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (r = new DOMParser, n = r.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + e), n
    };
    var Ne, De, Re = /#.*$/,
        Oe = /([?&])_=[^&]*/,
        Le = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        He = /^(?:GET|HEAD)$/,
        Fe = /^\/\//,
        Be = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qe = {},
        Ue = {},
        Ve = "*/".concat("*");
    try {
        De = location.href
    } catch (Qe) {
        De = ft.createElement("a"), De.href = "", De = De.href
    }
    Ne = Be.exec(De.toLowerCase()) || [], it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: De,
            type: "GET",
            isLocal: Ie.test(Ne[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ve,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": it.parseJSON,
                "text xml": it.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? B(B(t, it.ajaxSettings), e) : B(it.ajaxSettings, t)
        },
        ajaxPrefilter: H(qe),
        ajaxTransport: H(Ue),
        ajax: function (t, e) {
            function n(t, e, n, r) {
                var i, c, g, y, j, x = e;
                2 !== b && (b = 2, a && clearTimeout(a), u = void 0, s = r || "", $.readyState = t > 0 ? 4 : 0, i = t >= 200 && t < 300 || 304 === t, n && (y = q(h, $, n)), y = U(h, y, $, i), i ? (h.ifModified && (j = $.getResponseHeader("Last-Modified"), j && (it.lastModified[o] = j), j = $.getResponseHeader("etag"), j && (it.etag[o] = j)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, c = y.data, g = y.error, i = !g)) : (g = x, !t && x || (x = "error", t < 0 && (t = 0))), $.status = t, $.statusText = (e || x) + "", i ? f.resolveWith(p, [c, x, $]) : f.rejectWith(p, [$, x, g]), $.statusCode(m), m = void 0, l && d.trigger(i ? "ajaxSuccess" : "ajaxError", [$, h, i ? c : g]), v.fireWith(p, [$, x]), l && (d.trigger("ajaxComplete", [$, h]), --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var r, i, o, s, a, l, u, c, h = it.ajaxSetup({}, e),
                p = h.context || h,
                d = h.context && (p.nodeType || p.jquery) ? it(p) : it.event,
                f = it.Deferred(),
                v = it.Callbacks("once memory"),
                m = h.statusCode || {},
                g = {},
                y = {},
                b = 0,
                j = "canceled",
                $ = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = Le.exec(s);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, g[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (h.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (b < 2)
                                for (e in t) m[e] = [m[e], t[e]];
                            else $.always(t[$.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || j;
                        return u && u.abort(e), n(0, e), this
                    }
                };
            if (f.promise($).complete = v.add, $.success = $.done, $.error = $.fail, h.url = ((t || h.url || De) + "").replace(Re, "").replace(Fe, Ne[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = it.trim(h.dataType || "*").toLowerCase().match(bt) || [""], null == h.crossDomain && (r = Be.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === Ne[1] && r[2] === Ne[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ne[3] || ("http:" === Ne[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = it.param(h.data, h.traditional)), F(qe, h, e, $), 2 === b) return $;
            l = h.global, l && 0 === it.active++ && it.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !He.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Pe.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Oe.test(o) ? o.replace(Oe, "$1_=" + Me++) : o + (Pe.test(o) ? "&" : "?") + "_=" + Me++)), h.ifModified && (it.lastModified[o] && $.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && $.setRequestHeader("If-None-Match", it.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && $.setRequestHeader("Content-Type", h.contentType), $.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ve + "; q=0.01" : "") : h.accepts["*"]);
            for (i in h.headers) $.setRequestHeader(i, h.headers[i]);
            if (h.beforeSend && (h.beforeSend.call(p, $, h) === !1 || 2 === b)) return $.abort();
            j = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) $[i](h[i]);
            if (u = F(Ue, h, e, $)) {
                $.readyState = 1, l && d.trigger("ajaxSend", [$, h]), h.async && h.timeout > 0 && (a = setTimeout(function () {
                    $.abort("timeout")
                }, h.timeout));
                try {
                    b = 1, u.send(g, n)
                } catch (x) {
                    if (!(b < 2)) throw x;
                    n(-1, x)
                }
            } else n(-1, "No Transport");
            return $
        },
        getJSON: function (t, e, n) {
            return it.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return it.get(t, void 0, e, "script")
        }
    }), it.each(["get", "post"], function (t, e) {
        it[e] = function (t, n, r, i) {
            return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        it.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), it._evalUrl = function (t) {
        return it.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, it.fn.extend({
        wrapAll: function (t) {
            if (it.isFunction(t)) return this.each(function (e) {
                it(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = it(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return it.isFunction(t) ? this.each(function (e) {
                it(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = it(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = it.isFunction(t);
            return this.each(function (n) {
                it(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }
    }), it.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || it.css(t, "display"))
    }, it.expr.filters.visible = function (t) {
        return !it.expr.filters.hidden(t)
    };
    var ze = /%20/g,
        We = /\[\]$/,
        Xe = /\r?\n/g,
        Ye = /^(?:submit|button|image|reset|file)$/i,
        Ge = /^(?:input|select|textarea|keygen)/i;
    it.param = function (t, e) {
        var n, r = [],
            i = function (t, e) {
                e = it.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(t) || t.jquery && !it.isPlainObject(t)) it.each(t, function () {
            i(this.name, this.value)
        });
        else
            for (n in t) V(n, t[n], e, i);
        return r.join("&").replace(ze, "+")
    }, it.fn.extend({
        serialize: function () {
            return it.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = it.prop(this, "elements");
                return t ? it.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !it(this).is(":disabled") && Ge.test(this.nodeName) && !Ye.test(t) && (this.checked || !Mt.test(t))
            }).map(function (t, e) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Xe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Xe, "\r\n")
                }
            }).get()
        }
    }), it.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || z()
    } : Q;
    var Ke = 0,
        Je = {},
        Ze = it.ajaxSettings.xhr();
    t.ActiveXObject && it(t).on("unload", function () {
        for (var t in Je) Je[t](void 0, !0)
    }), nt.cors = !!Ze && "withCredentials" in Ze, Ze = nt.ajax = !!Ze, Ze && it.ajaxTransport(function (t) {
        if (!t.crossDomain || nt.cors) {
            var e;
            return {
                send: function (n, r) {
                    var i, o = t.xhr(),
                        s = ++Ke;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (i in t.xhrFields) o[i] = t.xhrFields[i];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(t.hasContent && t.data || null), e = function (n, i) {
                        var a, l, u;
                        if (e && (i || 4 === o.readyState))
                            if (delete Je[s], e = void 0, o.onreadystatechange = it.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                        u && r(a, l, u, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Je[s] = e : e()
                },
                abort: function () {
                    e && e(void 0, !0)
                }
            }
        }
    }), it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (t) {
                return it.globalEval(t), t
            }
        }
    }), it.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), it.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n = ft.head || it("head")[0] || ft.documentElement;
            return {
                send: function (r, i) {
                    e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
        en = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = tn.pop() || it.expando + "_" + Me++;
            return this[t] = !0, t
        }
    }), it.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i, o, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = it.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + i) : e.jsonp !== !1 && (e.url += (Pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return s || it.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
            s = arguments
        }, r.always(function () {
            t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, tn.push(i)), s && it.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), it.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || ft;
        var r = ht.exec(t),
            i = !n && [];
        return r ? [e.createElement(r[1])] : (r = it.buildFragment([t], e, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
    };
    var nn = it.fn.load;
    it.fn.load = function (t, e, n) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var r, i, o, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (r = it.trim(t.slice(a, t.length)), t = t.slice(0, a)), it.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && it.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function (t) {
            i = arguments, s.html(r ? it("<div>").append(it.parseHTML(t)).find(r) : t)
        }).complete(n && function (t, e) {
            s.each(n, i || [t.responseText, e, t])
        }), this
    }, it.expr.filters.animated = function (t) {
        return it.grep(it.timers, function (e) {
            return t === e.elem
        }).length
    };
    var rn = t.document.documentElement;
    it.offset = {
        setOffset: function (t, e, n) {
            var r, i, o, s, a, l, u, c = it.css(t, "position"),
                h = it(t),
                p = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = it.css(t, "top"), l = it.css(t, "left"), u = ("absolute" === c || "fixed" === c) && it.inArray("auto", [o, l]) > -1, u ? (r = h.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), it.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + i), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, it.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                it.offset.setOffset(this, t, e)
            });
            var e, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return e = o.documentElement, it.contains(e, i) ? (typeof i.getBoundingClientRect !== wt && (r = i.getBoundingClientRect()), n = W(o), {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r
        },
        position: function () {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === it.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), it.nodeName(t[0], "html") || (n = t.offset()), n.top += it.css(t[0], "borderTopWidth", !0), n.left += it.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - it.css(r, "marginTop", !0),
                    left: e.left - n.left - it.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || rn; t && !it.nodeName(t, "html") && "static" === it.css(t, "position");) t = t.offsetParent;
                return t || rn
            })
        }
    }), it.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = /Y/.test(e);
        it.fn[t] = function (r) {
            return St(this, function (t, r, i) {
                var o = W(t);
                return void 0 === i ? o ? e in o ? o[e] : o.document.documentElement[r] : t[r] : void(o ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop()) : t[r] = i)
            }, t, r, arguments.length, null)
        }
    }), it.each(["top", "left"], function (t, e) {
        it.cssHooks[e] = E(nt.pixelPosition, function (t, n) {
            if (n) return n = ee(t, e), re.test(n) ? it(t).position()[e] + "px" : n
        })
    }), it.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        it.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, r) {
            it.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return St(this, function (e, n, r) {
                    var i;
                    return it.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? it.css(e, n, s) : it.style(e, n, r, s)
                }, e, o ? r : void 0, o, null)
            }
        })
    }), it.fn.size = function () {
        return this.length
    }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return it
    });
    var on = t.jQuery,
        sn = t.$;
    return it.noConflict = function (e) {
        return t.$ === it && (t.$ = sn), e && t.jQuery === it && (t.jQuery = on), it
    }, typeof e === wt && (t.jQuery = t.$ = it), it
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function (t) {
    function e(e) {
        var s = e || window.event,
            a = l.call(arguments, 1),
            u = 0,
            h = 0,
            p = 0,
            d = 0,
            f = 0,
            v = 0;
        if (e = t.event.fix(s), e.type = "mousewheel", "detail" in s && (p = s.detail * -1), "wheelDelta" in s && (p = s.wheelDelta), "wheelDeltaY" in s && (p = s.wheelDeltaY), "wheelDeltaX" in s && (h = s.wheelDeltaX * -1), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (h = p * -1, p = 0), u = 0 === p ? h : p, "deltaY" in s && (p = s.deltaY * -1, u = p), "deltaX" in s && (h = s.deltaX, 0 === p && (u = h * -1)), 0 !== p || 0 !== h) {
            if (1 === s.deltaMode) {
                var m = t.data(this, "mousewheel-line-height");
                u *= m, p *= m, h *= m
            } else if (2 === s.deltaMode) {
                var g = t.data(this, "mousewheel-page-height");
                u *= g, p *= g, h *= g
            }
            if (d = Math.max(Math.abs(p), Math.abs(h)), (!o || d < o) && (o = d, r(s, d) && (o /= 40)), r(s, d) && (u /= 40, h /= 40, p /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), p = Math[p >= 1 ? "floor" : "ceil"](p / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                f = e.clientX - y.left, v = e.clientY - y.top
            }
            return e.deltaX = h, e.deltaY = p, e.deltaFactor = o, e.offsetX = f, e.offsetY = v, e.deltaMode = 0, a.unshift(e, u, h, p), i && clearTimeout(i), i = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }

    function n() {
        o = null
    }

    function r(t, e) {
        return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
    }
    var i, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var u = s.length; u;) t.event.fixHooks[s[--u]] = t.event.mouseHooks;
    var c = t.event.special.mousewheel = {
        version: "3.1.11",
        setup: function () {
            if (this.addEventListener)
                for (var n = a.length; n;) this.addEventListener(a[--n], e, !1);
            else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (e) {
            var n = t(e)["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10)
        },
        getPageHeight: function (e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function (t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function (t) {
            return this.unbind("mousewheel", t)
        }
    })
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    var e = [],
        n = t(document),
        r = navigator.userAgent.toLowerCase(),
        i = t(window),
        o = [],
        s = {
            ieQuirks: null,
            msie: /msie/.test(r) && !/opera/.test(r),
            opera: /opera/.test(r)
        };
    s.ie6 = s.msie && /msie 6./.test(r) && "object" != typeof window.XMLHttpRequest, s.ie7 = s.msie && /msie 7.0/.test(r), t.modal = function (e, n) {
        return t.modal.impl.init(e, n)
    }, t.modal.close = function () {
        t.modal.impl.close()
    }, t.modal.focus = function (e) {
        t.modal.impl.focus(e)
    }, t.modal.setContainerDimensions = function () {
        t.modal.impl.setContainerDimensions()
    }, t.modal.setPosition = function () {
        t.modal.impl.setPosition()
    }, t.modal.update = function (e, n) {
        t.modal.impl.update(e, n)
    }, t.fn.modal = function (e) {
        return t.modal.impl.init(this, e)
    }, t.modal.defaults = {
        appendTo: "body",
        focus: !0,
        opacity: 61.8,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: !1,
        autoPosition: !0,
        zIndex: 1e3,
        close: !0,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: !0,
        overlayClose: !1,
        fixed: !0,
        position: null,
        persist: !1,
        modal: !0,
        onOpen: null,
        onShow: null,
        onClose: null,
        afterClose: null
    }, t.modal.impl = {
        d: {},
        init: function (e, n) {
            var r = this;
            if (r.d.data) return !1;
            if (s.ieQuirks = s.msie && !t.support.boxModel, r.o = t.extend({}, t.modal.defaults, n), r.zIndex = r.o.zIndex, r.occb = !1, "object" == typeof e) e = e instanceof t ? e : t(e), r.d.placeholder = !1, e.parent().parent().size() > 0 && (e.before(t("<span></span>").attr("id", "simplemodal-placeholder").css({
                display: "none"
            })), r.d.placeholder = !0, r.display = e.css("display"), r.o.persist || (r.d.orig = e.clone(!0)));
            else {
                if ("string" != typeof e && "number" != typeof e) return alert("SimpleModal Error: Unsupported data type: " + typeof e), r;
                e = t("<div></div>").html(e)
            }
            return r.create(e), e = null, r.open(), t.isFunction(r.o.onShow) && r.o.onShow.apply(r, [r.d]), r
        },
        create: function (n) {
            var r = this;
            r.getDimensions(), r.d.overlay = t("<div></div>").attr("id", r.o.overlayId).addClass("simplemodal-overlay").css(t.extend(r.o.overlayCss, {
                display: "none",
                opacity: r.o.opacity / 100,
                height: r.o.modal ? e[0] : 0,
                width: r.o.modal ? e[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: r.o.zIndex + 1
            })).appendTo(r.o.appendTo), r.d.container = t("<div></div>").attr("id", r.o.containerId).addClass("simplemodal-container").css(t.extend({
                position: r.o.fixed ? "fixed" : "absolute"
            }, r.o.containerCss, {
                display: "none",
                zIndex: r.o.zIndex + 2
            })).append(r.o.close && r.o.closeHTML ? t(r.o.closeHTML).addClass(r.o.closeClass) : "").appendTo(r.o.appendTo), r.d.wrap = t("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "645px",
                outline: 0,
                width: "100%"
            }).appendTo(r.d.container), r.d.data = n.attr("id", n.attr("id") || r.o.dataId).addClass("simplemodal-data").css(t.extend(r.o.dataCss, {
                display: "none"
            })).appendTo("body"), n = null, r.setContainerDimensions(), r.d.data.appendTo(r.d.wrap)
        },
        bindEvents: function () {
            var r = this;
            t("." + r.o.closeClass).bind("click.simplemodal", function (t) {
                t.preventDefault(), r.close()
            }), r.o.modal && r.o.close && r.o.overlayClose && r.d.overlay.bind("click.simplemodal", function (t) {
                t.preventDefault(), r.close()
            }), n.bind("keydown.simplemodal", function (t) {
                r.o.modal && 9 === t.keyCode ? r.watchTab(t) : r.o.close && r.o.escClose && 27 === t.keyCode && (t.preventDefault(), r.close())
            }), i.bind("resize.simplemodal orientationchange.simplemodal", function () {
                r.getDimensions(), r.o.autoResize ? r.setContainerDimensions() : r.o.autoPosition && r.setPosition(), r.o.modal && (r.d.iframe && r.d.iframe.css({
                    height: o[0],
                    width: o[1]
                }), r.d.overlay.css({
                    height: e[0],
                    width: e[1]
                }))
            })
        },
        unbindEvents: function () {
            t("." + this.o.closeClass).unbind("click.simplemodal"), n.unbind("keydown.simplemodal"), i.unbind(".simplemodal"), this.d.overlay.unbind("click.simplemodal")
        },
        focus: function (e) {
            var n = this,
                r = e && t.inArray(e, ["first", "last"]) !== -1 ? e : "first",
                i = t(":input:enabled:visible:" + r, n.d.wrap);
            setTimeout(function () {
                i.length > 0 ? i.focus() : n.d.wrap.focus()
            }, 10)
        },
        getDimensions: function () {
            var t = "undefined" == typeof window.innerHeight ? i.height() : window.innerHeight;
            e = [n.height(), n.width()], o = [t, i.width()]
        },
        getVal: function (t, e) {
            return t ? "number" == typeof t ? t : "auto" === t ? 0 : t.indexOf("%") > 0 ? parseInt(t.replace(/%/, "")) / 100 * ("h" === e ? o[0] : o[1]) : parseInt(t.replace(/px/, "")) : null
        },
        update: function (t, e) {
            var n = this;
            return !!n.d.data && (n.d.origHeight = n.getVal(t, "h"), n.d.origWidth = n.getVal(e, "w"), n.d.data.hide(), t && n.d.container.css("height", t), e && n.d.container.css("width", e), n.setContainerDimensions(), n.d.data.show(), n.o.focus && n.focus(), n.unbindEvents(), void n.bindEvents())
        },
        setContainerDimensions: function () {
            var t = this,
                e = s.ie6 || s.ie7,
                n = t.d.origHeight ? t.d.origHeight : s.opera ? t.d.container.height() : t.getVal(e ? t.d.container[0].currentStyle.height : t.d.container.css("height"), "h"),
                r = t.d.origWidth ? t.d.origWidth : s.opera ? t.d.container.width() : t.getVal(e ? t.d.container[0].currentStyle.width : t.d.container.css("width"), "w"),
                i = t.d.data.outerHeight(!0),
                a = t.d.data.outerWidth(!0);
            t.d.origHeight = t.d.origHeight || n, t.d.origWidth = t.d.origWidth || r;
            var l = t.o.maxHeight ? t.getVal(t.o.maxHeight, "h") : null,
                u = t.o.maxWidth ? t.getVal(t.o.maxWidth, "w") : null,
                c = l && l < o[0] ? l : o[0],
                h = u && u < o[1] ? u : o[1],
                p = t.o.minHeight ? t.getVal(t.o.minHeight, "h") : "auto";
            n = n ? t.o.autoResize && n > c ? c : n < p ? p : n : i ? i > c ? c : t.o.minHeight && "auto" !== p && i < p ? p : i : p;
            var d = t.o.minWidth ? t.getVal(t.o.minWidth, "w") : "auto";
            r = r ? t.o.autoResize && r > h ? h : r < d ? d : r : a ? a > h ? h : t.o.minWidth && "auto" !== d && a < d ? d : a : d, t.d.container.css({
                height: n,
                width: r
            }), t.d.wrap.css({
                overflow: i > n || a > r ? "hidden" : "visible"
            }), t.o.autoPosition && t.setPosition()
        },
        setPosition: function () {
            var t, e, n = this,
                r = o[0] / 2 - n.d.container.outerHeight(!0) / 2,
                s = o[1] / 2 - n.d.container.outerWidth(!0) / 2,
                a = "fixed" !== n.d.container.css("position") ? i.scrollTop() : 0;
            n.o.position && "[object Array]" === Object.prototype.toString.call(n.o.position) ? (t = a + (n.o.position[0] || r), e = n.o.position[1] || s) : (t = a + r, e = s), n.d.container.css({
                left: e,
                top: t
            })
        },
        watchTab: function (e) {
            var n = this;
            if (t(e.target).parents(".simplemodal-container").length > 0) {
                if (n.inputs = t(":input:enabled:visible:first, :input:enabled:visible:last", n.d.data[0]), !e.shiftKey && e.target === n.inputs[n.inputs.length - 1] || e.shiftKey && e.target === n.inputs[0] || 0 === n.inputs.length) {
                    e.preventDefault();
                    var r = e.shiftKey ? "last" : "first";
                    n.focus(r)
                }
            } else e.preventDefault(), n.focus()
        },
        open: function () {
            var e = this;
            e.d.iframe && e.d.iframe.show(), t("body").addClass("lucky-overflow"), t.isFunction(e.o.onOpen) ? e.o.onOpen.apply(e, [e.d]) : (e.d.overlay.show(), e.d.container.show(), e.d.data.show()), e.o.focus && e.focus(), e.bindEvents()
        },
        close: function () {
            var e = this;
            if (!e.d.data) return !1;
            if (t("body").removeClass("lucky-overflow"), e.unbindEvents(), t.isFunction(e.o.onClose) && !e.occb) e.occb = !0, e.o.onClose.apply(e, [e.d]);
            else {
                if (e.d.placeholder) {
                    var n = t("#simplemodal-placeholder");
                    e.o.persist ? n.replaceWith(e.d.data.removeClass("simplemodal-data").css("display", e.display)) : (e.d.data.fadeOut("slow").remove(), n.replaceWith(e.d.orig))
                } else e.d.data.hide().remove();
                e.d.container.hide().remove(), e.d.overlay.hide(), e.d.iframe && e.d.iframe.hide().remove(), e.d.overlay.remove(), t.isFunction(e.o.afterClose) && e.o.afterClose.apply(e, [e.d]), e.d = {}
            }
        }
    }
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (t, e, n, r, i) {
            return jQuery.easing[jQuery.easing.def](t, e, n, r, i)
        },
        easeInQuad: function (t, e, n, r, i) {
            return r * (e /= i) * e + n
        },
        easeOutQuad: function (t, e, n, r, i) {
            return -r * (e /= i) * (e - 2) + n
        },
        easeInOutQuad: function (t, e, n, r, i) {
            return (e /= i / 2) < 1 ? r / 2 * e * e + n : -r / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function (t, e, n, r, i) {
            return r * (e /= i) * e * e + n
        },
        easeOutCubic: function (t, e, n, r, i) {
            return r * ((e = e / i - 1) * e * e + 1) + n
        },
        easeInOutCubic: function (t, e, n, r, i) {
            return (e /= i / 2) < 1 ? r / 2 * e * e * e + n : r / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function (t, e, n, r, i) {
            return r * (e /= i) * e * e * e + n
        },
        easeOutQuart: function (t, e, n, r, i) {
            return -r * ((e = e / i - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function (t, e, n, r, i) {
            return (e /= i / 2) < 1 ? r / 2 * e * e * e * e + n : -r / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function (t, e, n, r, i) {
            return r * (e /= i) * e * e * e * e + n
        },
        easeOutQuint: function (t, e, n, r, i) {
            return r * ((e = e / i - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function (t, e, n, r, i) {
            return (e /= i / 2) < 1 ? r / 2 * e * e * e * e * e + n : r / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function (t, e, n, r, i) {
            return -r * Math.cos(e / i * (Math.PI / 2)) + r + n
        },
        easeOutSine: function (t, e, n, r, i) {
            return r * Math.sin(e / i * (Math.PI / 2)) + n
        },
        easeInOutSine: function (t, e, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * e / i) - 1) + n
        },
        easeInExpo: function (t, e, n, r, i) {
            return 0 == e ? n : r * Math.pow(2, 10 * (e / i - 1)) + n
        },
        easeOutExpo: function (t, e, n, r, i) {
            return e == i ? n + r : r * (-Math.pow(2, -10 * e / i) + 1) + n
        },
        easeInOutExpo: function (t, e, n, r, i) {
            return 0 == e ? n : e == i ? n + r : (e /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + n : r / 2 * (-Math.pow(2, -10 * --e) + 2) + n
        },
        easeInCirc: function (t, e, n, r, i) {
            return -r * (Math.sqrt(1 - (e /= i) * e) - 1) + n
        },
        easeOutCirc: function (t, e, n, r, i) {
            return r * Math.sqrt(1 - (e = e / i - 1) * e) + n
        },
        easeInOutCirc: function (t, e, n, r, i) {
            return (e /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + n : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function (t, e, n, r, i) {
            var o = 1.70158,
                s = 0,
                a = r;
            if (0 == e) return n;
            if (1 == (e /= i)) return n + r;
            if (s || (s = .3 * i), a < Math.abs(r)) {
                a = r;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(r / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - o) * (2 * Math.PI) / s)) + n
        },
        easeOutElastic: function (t, e, n, r, i) {
            var o = 1.70158,
                s = 0,
                a = r;
            if (0 == e) return n;
            if (1 == (e /= i)) return n + r;
            if (s || (s = .3 * i), a < Math.abs(r)) {
                a = r;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(r / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * i - o) * (2 * Math.PI) / s) + r + n
        },
        easeInOutElastic: function (t, e, n, r, i) {
            var o = 1.70158,
                s = 0,
                a = r;
            if (0 == e) return n;
            if (2 == (e /= i / 2)) return n + r;
            if (s || (s = i * (.3 * 1.5)), a < Math.abs(r)) {
                a = r;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(r / a);
            return e < 1 ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - o) * (2 * Math.PI) / s)) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * i - o) * (2 * Math.PI) / s) * .5 + r + n
        },
        easeInBack: function (t, e, n, r, i, o) {
            return void 0 == o && (o = 1.70158), r * (e /= i) * e * ((o + 1) * e - o) + n
        },
        easeOutBack: function (t, e, n, r, i, o) {
            return void 0 == o && (o = 1.70158), r * ((e = e / i - 1) * e * ((o + 1) * e + o) + 1) + n
        },
        easeInOutBack: function (t, e, n, r, i, o) {
            return void 0 == o && (o = 1.70158), (e /= i / 2) < 1 ? r / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + n : r / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
        },
        easeInBounce: function (t, e, n, r, i) {
            return r - jQuery.easing.easeOutBounce(t, i - e, 0, r, i) + n
        },
        easeOutBounce: function (t, e, n, r, i) {
            return (e /= i) < 1 / 2.75 ? r * (7.5625 * e * e) + n : e < 2 / 2.75 ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function (t, e, n, r, i) {
            return e < i / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, r, i) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - i, 0, r, i) + .5 * r + n
        }
    }),
    function (t, e, n) {
        e.smartisan = {}, e.smartisan.isMobile = function () {
            var n = t.devicePixelRatio || 1;
            return e(t).width() <= 736 && (screen.width <= 736 || n >= 2)
        };
        var r = t.location.pathname.match(/\/(jp|en|cn)\//i);
        ! function () {
            if (r) e.smartisan.lang = r[1];
            else if (location.hash.indexOf("lang=") != -1) {
                var t = location.hash.split("lang=");
                e.smartisan.lang = t[1]
            } else e.smartisan.lang = "cn"
        }()
    }(window, jQuery),
    function (t, e, n) {
        "use strict";

        function r(t) {
            return function () {
                var e, n, r = arguments[0],
                    i = "[" + (t ? t + ":" : "") + r + "] ",
                    o = arguments[1],
                    s = arguments,
                    a = function (t) {
                        return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? JSON.stringify(t) : t
                    };
                for (e = i + o.replace(/\{\d+\}/g, function (t) {
                        var e, n = +t.slice(1, -1);
                        return n + 2 < s.length ? (e = s[n + 2], "function" == typeof e ? e.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? q(e) : e) : t
                    }), e = e + "\nhttp://errors.angularjs.org/1.2.20/" + (t ? t + "/" : "") + r, n = 2; n < arguments.length; n++) e = e + (2 == n ? "?" : "&") + "p" + (n - 2) + "=" + encodeURIComponent(a(arguments[n]));
                return new Error(e)
            }
        }

        function i(t) {
            if (null == t || C(t)) return !1;
            var e = t.length;
            return !(1 !== t.nodeType || !e) || (j(t) || Sn(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function o(t, e, n) {
            var r;
            if (t)
                if (w(t))
                    for (r in t) "prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r);
                else if (t.forEach && t.forEach !== o) t.forEach(e, n);
            else if (i(t))
                for (r = 0; r < t.length; r++) e.call(n, t[r], r);
            else
                for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r);
            return t
        }

        function s(t) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(n);
            return e.sort()
        }

        function a(t, e, n) {
            for (var r = s(t), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
            return r
        }

        function l(t) {
            return function (e, n) {
                t(n, e)
            }
        }

        function u() {
            for (var t, e = _n.length; e;) {
                if (e--, t = _n[e].charCodeAt(0), 57 == t) return _n[e] = "A", _n.join("");
                if (90 != t) return _n[e] = String.fromCharCode(t + 1), _n.join("");
                _n[e] = "0"
            }
            return _n.unshift("0"), _n.join("")
        }

        function c(t, e) {
            e ? t.$$hashKey = e : delete t.$$hashKey
        }

        function h(t) {
            var e = t.$$hashKey;
            return o(arguments, function (e) {
                e !== t && o(e, function (e, n) {
                    t[n] = e
                })
            }), c(t, e), t
        }

        function p(t) {
            return parseInt(t, 10)
        }

        function d(t, e) {
            return h(new(h(function () {}, {
                prototype: t
            })), e)
        }

        function f() {}

        function v(t) {
            return t
        }

        function m(t) {
            return function () {
                return t
            }
        }

        function g(t) {
            return "undefined" == typeof t
        }

        function y(t) {
            return "undefined" != typeof t
        }

        function b(t) {
            return null != t && "object" == typeof t
        }

        function j(t) {
            return "string" == typeof t
        }

        function $(t) {
            return "number" == typeof t
        }

        function x(t) {
            return "[object Date]" === Cn.call(t)
        }

        function w(t) {
            return "function" == typeof t
        }

        function T(t) {
            return "[object RegExp]" === Cn.call(t)
        }

        function C(t) {
            return t && t.document && t.location && t.alert && t.setInterval
        }

        function E(t) {
            return t && t.$evalAsync && t.$watch
        }

        function k(t) {
            return "[object File]" === Cn.call(t)
        }

        function _(t) {
            return "[object Blob]" === Cn.call(t)
        }

        function S(t) {
            return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
        }

        function M(t, e, n) {
            var r = [];
            return o(t, function (t, i, o) {
                r.push(e.call(n, t, i, o))
            }), r
        }

        function P(t, e) {
            return A(t, e) != -1
        }

        function A(t, e) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0; n < t.length; n++)
                if (e === t[n]) return n;
            return -1
        }

        function N(t, e) {
            var n = A(t, e);
            return n >= 0 && t.splice(n, 1), e
        }

        function D(t, e, n, r) {
            if (C(t) || E(t)) throw En("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            if (e) {
                if (t === e) throw En("cpi", "Can't copy! Source and destination are identical.");
                if (n = n || [], r = r || [], b(t)) {
                    var i = A(n, t);
                    if (i !== -1) return r[i];
                    n.push(t), r.push(e)
                }
                var s;
                if (Sn(t)) {
                    e.length = 0;
                    for (var a = 0; a < t.length; a++) s = D(t[a], null, n, r), b(t[a]) && (n.push(t[a]), r.push(s)), e.push(s)
                } else {
                    var l = e.$$hashKey;
                    o(e, function (t, n) {
                        delete e[n]
                    });
                    for (var u in t) s = D(t[u], null, n, r), b(t[u]) && (n.push(t[u]), r.push(s)), e[u] = s;
                    c(e, l)
                }
            } else e = t, t && (Sn(t) ? e = D(t, [], n, r) : x(t) ? e = new Date(t.getTime()) : T(t) ? e = new RegExp(t.source) : b(t) && (e = D(t, {}, n, r)));
            return e
        }

        function R(t, e) {
            if (Sn(t)) {
                e = e || [];
                for (var n = 0; n < t.length; n++) e[n] = t[n]
            } else if (b(t)) {
                e = e || {};
                for (var r in t) !fn.call(t, r) || "$" === r.charAt(0) && "$" === r.charAt(1) || (e[r] = t[r])
            }
            return e || t
        }

        function O(t, e) {
            if (t === e) return !0;
            if (null === t || null === e) return !1;
            if (t !== t && e !== e) return !0;
            var r, i, o, s = typeof t,
                a = typeof e;
            if (s == a && "object" == s) {
                if (!Sn(t)) {
                    if (x(t)) return x(e) && t.getTime() == e.getTime();
                    if (T(t) && T(e)) return t.toString() == e.toString();
                    if (E(t) || E(e) || C(t) || C(e) || Sn(e)) return !1;
                    o = {};
                    for (i in t)
                        if ("$" !== i.charAt(0) && !w(t[i])) {
                            if (!O(t[i], e[i])) return !1;
                            o[i] = !0
                        }
                    for (i in e)
                        if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !w(e[i])) return !1;
                    return !0
                }
                if (!Sn(e)) return !1;
                if ((r = t.length) == e.length) {
                    for (i = 0; i < r; i++)
                        if (!O(t[i], e[i])) return !1;
                    return !0
                }
            }
            return !1
        }

        function L() {
            return e.securityPolicy && e.securityPolicy.isActive || e.querySelector && !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"))
        }

        function I(t, e, n) {
            return t.concat(wn.call(e, n))
        }

        function H(t, e) {
            return wn.call(t, e || 0)
        }

        function F(t, e) {
            var n = arguments.length > 2 ? H(arguments, 2) : [];
            return !w(e) || e instanceof RegExp ? e : n.length ? function () {
                return arguments.length ? e.apply(t, n.concat(wn.call(arguments, 0))) : e.apply(t, n)
            } : function () {
                return arguments.length ? e.apply(t, arguments) : e.call(t)
            }
        }

        function B(t, r) {
            var i = r;
            return "string" == typeof t && "$" === t.charAt(0) ? i = n : C(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : E(r) && (i = "$SCOPE"), i
        }

        function q(t, e) {
            return "undefined" == typeof t ? n : JSON.stringify(t, B, e ? "  " : null)
        }

        function U(t) {
            return j(t) ? JSON.parse(t) : t
        }

        function V(t) {
            if ("function" == typeof t) t = !0;
            else if (t && 0 !== t.length) {
                var e = dn("" + t);
                t = !("f" == e || "0" == e || "false" == e || "no" == e || "n" == e || "[]" == e)
            } else t = !1;
            return t
        }

        function Q(t) {
            t = bn(t).clone();
            try {
                t.empty()
            } catch (e) {}
            var n = 3,
                r = bn("<div>").append(t).html();
            try {
                return t[0].nodeType === n ? dn(r) : r.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
                    return "<" + dn(e)
                })
            } catch (e) {
                return dn(r)
            }
        }

        function z(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {}
        }

        function W(t) {
            var e, n, r = {};
            return o((t || "").split("&"), function (t) {
                if (t && (e = t.split("="), n = z(e[0]), y(n))) {
                    var i = !y(e[1]) || z(e[1]);
                    fn.call(r, n) ? Sn(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
                }
            }), r
        }

        function X(t) {
            var e = [];
            return o(t, function (t, n) {
                Sn(t) ? o(t, function (t) {
                    e.push(G(n, !0) + (t === !0 ? "" : "=" + G(t, !0)))
                }) : e.push(G(n, !0) + (t === !0 ? "" : "=" + G(t, !0)))
            }), e.length ? e.join("&") : ""
        }

        function Y(t) {
            return G(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function G(t, e) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
        }

        function K(t, n) {
            function r(t) {
                t && a.push(t)
            }
            var i, s, a = [t],
                l = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                u = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            o(l, function (n) {
                l[n] = !0, r(e.getElementById(n)), n = n.replace(":", "\\:"), t.querySelectorAll && (o(t.querySelectorAll("." + n), r), o(t.querySelectorAll("." + n + "\\:"), r), o(t.querySelectorAll("[" + n + "]"), r))
            }), o(a, function (t) {
                if (!i) {
                    var e = " " + t.className + " ",
                        n = u.exec(e);
                    n ? (i = t, s = (n[2] || "").replace(/\s+/g, ",")) : o(t.attributes, function (e) {
                        !i && l[e.name] && (i = t, s = e.value)
                    })
                }
            }), i && n(i, s ? [s] : [])
        }

        function J(n, r) {
            var i = function () {
                    if (n = bn(n), n.injector()) {
                        var t = n[0] === e ? "document" : Q(n);
                        throw En("btstrpd", "App Already Bootstrapped with this Element '{0}'", t)
                    }
                    r = r || [], r.unshift(["$provide", function (t) {
                        t.value("$rootElement", n)
                    }]), r.unshift("ng");
                    var i = Nt(r);
                    return i.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (t, e, n, r, i) {
                        t.$apply(function () {
                            e.data("$injector", r), n(e)(t)
                        })
                    }]), i
                },
                s = /^NG_DEFER_BOOTSTRAP!/;
            return t && !s.test(t.name) ? i() : (t.name = t.name.replace(s, ""), void(kn.resumeBootstrap = function (t) {
                o(t, function (t) {
                    r.push(t)
                }), i()
            }))
        }

        function Z(t, e) {
            return e = e || "_", t.replace(Pn, function (t, n) {
                return (n ? e : "") + t.toLowerCase()
            })
        }

        function tt() {
            jn = t.jQuery, jn && jn.fn.on ? (bn = jn, h(jn.fn, {
                scope: Qn.scope,
                isolateScope: Qn.isolateScope,
                controller: Qn.controller,
                injector: Qn.injector,
                inheritedData: Qn.inheritedData
            }), ct("remove", !0, !0, !1), ct("empty", !1, !1, !1), ct("html", !1, !1, !0)) : bn = ft, kn.element = bn
        }

        function et(t, e, n) {
            if (!t) throw En("areq", "Argument '{0}' is {1}", e || "?", n || "required");
            return t
        }

        function nt(t, e, n) {
            return n && Sn(t) && (t = t[t.length - 1]), et(w(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
        }

        function rt(t, e) {
            if ("hasOwnProperty" === t) throw En("badname", "hasOwnProperty is not a valid {0} name", e)
        }

        function it(t, e, n) {
            if (!e) return t;
            for (var r, i = e.split("."), o = t, s = i.length, a = 0; a < s; a++) r = i[a], t && (t = (o = t)[r]);
            return !n && w(t) ? F(o, t) : t
        }

        function ot(t) {
            var e = t[0],
                n = t[t.length - 1];
            if (e === n) return bn(e);
            var r = e,
                i = [r];
            do {
                if (r = r.nextSibling, !r) break;
                i.push(r)
            } while (r !== n);
            return bn(i)
        }

        function st(t) {
            function e(t, e, n) {
                return t[e] || (t[e] = n())
            }
            var n = r("$injector"),
                i = r("ng"),
                o = e(t, "angular", Object);
            return o.$$minErr = o.$$minErr || r, e(o, "module", function () {
                var t = {};
                return function (r, o, s) {
                    var a = function (t, e) {
                        if ("hasOwnProperty" === t) throw i("badname", "hasOwnProperty is not a valid {0} name", e)
                    };
                    return a(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function () {
                        function t(t, n, r) {
                            return function () {
                                return e[r || "push"]([t, n, arguments]), l
                            }
                        }
                        if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                        var e = [],
                            i = [],
                            a = t("$injector", "invoke"),
                            l = {
                                _invokeQueue: e,
                                _runBlocks: i,
                                requires: o,
                                name: r,
                                provider: t("$provide", "provider"),
                                factory: t("$provide", "factory"),
                                service: t("$provide", "service"),
                                value: t("$provide", "value"),
                                constant: t("$provide", "constant", "unshift"),
                                animation: t("$animateProvider", "register"),
                                filter: t("$filterProvider", "register"),
                                controller: t("$controllerProvider", "register"),
                                directive: t("$compileProvider", "directive"),
                                config: a,
                                run: function (t) {
                                    return i.push(t), this
                                }
                            };
                        return s && a(s), l
                    })
                }
            })
        }

        function at(e) {
            h(e, {
                bootstrap: J,
                copy: D,
                extend: h,
                equals: O,
                element: bn,
                forEach: o,
                injector: Nt,
                noop: f,
                bind: F,
                toJson: q,
                fromJson: U,
                identity: v,
                isUndefined: g,
                isDefined: y,
                isString: j,
                isFunction: w,
                isObject: b,
                isNumber: $,
                isElement: S,
                isArray: Sn,
                version: An,
                isDate: x,
                lowercase: dn,
                uppercase: vn,
                callbacks: {
                    counter: 0
                },
                $$minErr: r,
                $$csp: L
            }), $n = st(t);
            try {
                $n("ngLocale")
            } catch (n) {
                $n("ngLocale", []).provider("$locale", ne)
            }
            $n("ng", ["ngLocale"], ["$provide", function (t) {
                t.provider({
                    $$sanitizeUri: _e
                }), t.provider("$compile", Ft).directive({
                    a: _r,
                    input: Hr,
                    textarea: Hr,
                    form: Ar,
                    script: ji,
                    select: wi,
                    style: Ci,
                    option: Ti,
                    ngBind: Kr,
                    ngBindHtml: Zr,
                    ngBindTemplate: Jr,
                    ngClass: ti,
                    ngClassEven: ni,
                    ngClassOdd: ei,
                    ngCloak: ri,
                    ngController: ii,
                    ngForm: Nr,
                    ngHide: fi,
                    ngIf: si,
                    ngInclude: ai,
                    ngInit: ui,
                    ngNonBindable: ci,
                    ngPluralize: hi,
                    ngRepeat: pi,
                    ngShow: di,
                    ngStyle: vi,
                    ngSwitch: mi,
                    ngSwitchWhen: gi,
                    ngSwitchDefault: yi,
                    ngOptions: xi,
                    ngTransclude: bi,
                    ngModel: Qr,
                    ngList: Xr,
                    ngChange: zr,
                    required: Wr,
                    ngRequired: Wr,
                    ngValue: Gr
                }).directive({
                    ngInclude: li
                }).directive(Sr).directive(oi), t.provider({
                    $anchorScroll: Dt,
                    $animate: tr,
                    $browser: Lt,
                    $cacheFactory: It,
                    $controller: Ut,
                    $document: Vt,
                    $exceptionHandler: Qt,
                    $filter: He,
                    $interpolate: te,
                    $interval: ee,
                    $http: Gt,
                    $httpBackend: Jt,
                    $location: ve,
                    $log: me,
                    $parse: we,
                    $rootScope: ke,
                    $q: Te,
                    $sce: Ne,
                    $sceDelegate: Ae,
                    $sniffer: De,
                    $templateCache: Ht,
                    $timeout: Re,
                    $window: Ie,
                    $$rAF: Ee,
                    $$asyncCallback: Rt
                })
            }])
        }

        function lt() {
            return ++Dn
        }

        function ut(t) {
            return t.replace(Ln, function (t, e, n, r) {
                return r ? n.toUpperCase() : n
            }).replace(In, "Moz$1")
        }

        function ct(t, e, n, r) {
            function i(t) {
                var i, s, a, l, u, c, h, p = n && t ? [this.filter(t)] : [this],
                    d = e;
                if (!r || null != t)
                    for (; p.length;)
                        for (i = p.shift(), s = 0, a = i.length; s < a; s++)
                            for (l = bn(i[s]), d ? l.triggerHandler("$destroy") : d = !d, u = 0, c = (h = l.children()).length; u < c; u++) p.push(jn(h[u]));
                return o.apply(this, arguments)
            }
            var o = jn.fn[t];
            o = o.$original || o, i.$original = o, jn.fn[t] = i
        }

        function ht(t) {
            return !Bn.test(t)
        }

        function pt(t, e) {
            var n, r, i, o, s, a, l = e.createDocumentFragment(),
                u = [];
            if (ht(t)) u.push(e.createTextNode(t));
            else {
                for (n = l.appendChild(e.createElement("div")), r = (qn.exec(t) || ["", ""])[1].toLowerCase(), i = Vn[r] || Vn._default, n.innerHTML = "<div>&#160;</div>" + i[1] + t.replace(Un, "<$1></$2>") + i[2], n.removeChild(n.firstChild), o = i[0]; o--;) n = n.lastChild;
                for (s = 0, a = n.childNodes.length; s < a; ++s) u.push(n.childNodes[s]);
                n = l.firstChild, n.textContent = ""
            }
            return l.textContent = "", l.innerHTML = "", u
        }

        function dt(t, n) {
            n = n || e;
            var r;
            return (r = Fn.exec(t)) ? [n.createElement(r[1])] : pt(t, n)
        }

        function ft(t) {
            if (t instanceof ft) return t;
            if (j(t) && (t = Mn(t)), !(this instanceof ft)) {
                if (j(t) && "<" != t.charAt(0)) throw Hn("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new ft(t)
            }
            if (j(t)) {
                Tt(this, dt(t));
                var n = bn(e.createDocumentFragment());
                n.append(this)
            } else Tt(this, t)
        }

        function vt(t) {
            return t.cloneNode(!0)
        }

        function mt(t) {
            yt(t);
            for (var e = 0, n = t.childNodes || []; e < n.length; e++) mt(n[e])
        }

        function gt(t, e, n, r) {
            if (y(r)) throw Hn("offargs", "jqLite#off() does not support the `selector` argument");
            var i = bt(t, "events"),
                s = bt(t, "handle");
            s && (g(e) ? o(i, function (e, n) {
                On(t, n, e), delete i[n]
            }) : o(e.split(" "), function (e) {
                g(n) ? (On(t, e, i[e]), delete i[e]) : N(i[e] || [], n)
            }))
        }

        function yt(t, e) {
            var r = t.ng339,
                i = Nn[r];
            if (i) {
                if (e) return void delete Nn[r].data[e];
                i.handle && (i.events.$destroy && i.handle({}, "$destroy"), gt(t)), delete Nn[r], t.ng339 = n
            }
        }

        function bt(t, e, n) {
            var r = t.ng339,
                i = Nn[r || -1];
            return y(n) ? (i || (t.ng339 = r = lt(), i = Nn[r] = {}), void(i[e] = n)) : i && i[e]
        }

        function jt(t, e, n) {
            var r = bt(t, "data"),
                i = y(n),
                o = !i && y(e),
                s = o && !b(e);
            if (r || s || bt(t, "data", r = {}), i) r[e] = n;
            else {
                if (!o) return r;
                if (s) return r && r[e];
                h(r, e)
            }
        }

        function $t(t, e) {
            return !!t.getAttribute && (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1
        }

        function xt(t, e) {
            e && t.setAttribute && o(e.split(" "), function (e) {
                t.setAttribute("class", Mn((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Mn(e) + " ", " ")))
            })
        }

        function wt(t, e) {
            if (e && t.setAttribute) {
                var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                o(e.split(" "), function (t) {
                    t = Mn(t), n.indexOf(" " + t + " ") === -1 && (n += t + " ")
                }), t.setAttribute("class", Mn(n))
            }
        }

        function Tt(t, e) {
            if (e) {
                e = e.nodeName || !y(e.length) || C(e) ? [e] : e;
                for (var n = 0; n < e.length; n++) t.push(e[n])
            }
        }

        function Ct(t, e) {
            return Et(t, "$" + (e || "ngController") + "Controller")
        }

        function Et(t, e, r) {
            t = bn(t), 9 == t[0].nodeType && (t = t.find("html"));
            for (var i = Sn(e) ? e : [e]; t.length;) {
                for (var o = t[0], s = 0, a = i.length; s < a; s++)
                    if ((r = t.data(i[s])) !== n) return r;
                t = bn(o.parentNode || 11 === o.nodeType && o.host)
            }
        }

        function kt(t) {
            for (var e = 0, n = t.childNodes; e < n.length; e++) mt(n[e]);
            for (; t.firstChild;) t.removeChild(t.firstChild)
        }

        function _t(t, e) {
            var n = zn[e.toLowerCase()];
            return n && Wn[t.nodeName] && n
        }

        function St(t, n) {
            var r = function (r, i) {
                if (r.preventDefault || (r.preventDefault = function () {
                        r.returnValue = !1
                    }), r.stopPropagation || (r.stopPropagation = function () {
                        r.cancelBubble = !0
                    }), r.target || (r.target = r.srcElement || e), g(r.defaultPrevented)) {
                    var s = r.preventDefault;
                    r.preventDefault = function () {
                        r.defaultPrevented = !0, s.call(r)
                    }, r.defaultPrevented = !1
                }
                r.isDefaultPrevented = function () {
                    return r.defaultPrevented || r.returnValue === !1
                };
                var a = R(n[i || r.type] || []);
                o(a, function (e) {
                    e.call(t, r)
                }), yn <= 8 ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
            };
            return r.elem = t, r
        }

        function Mt(t, e) {
            var r, i = typeof t;
            return "function" == i || "object" == i && null !== t ? "function" == typeof (r = t.$$hashKey) ? r = t.$$hashKey() : r === n && (r = t.$$hashKey = (e || u)()) : r = t, i + ":" + r
        }

        function Pt(t, e) {
            if (e) {
                var n = 0;
                this.nextUid = function () {
                    return ++n
                }
            }
            o(t, this.put, this)
        }

        function At(t) {
            var e, n, r, i;
            return "function" == typeof t ? (e = t.$inject) || (e = [], t.length && (n = t.toString().replace(Kn, ""), r = n.match(Xn), o(r[1].split(Yn), function (t) {
                t.replace(Gn, function (t, n, r) {
                    e.push(r)
                })
            })), t.$inject = e) : Sn(t) ? (i = t.length - 1, nt(t[i], "fn"), e = t.slice(0, i)) : nt(t, "fn", !0), e
        }

        function Nt(t) {
            function e(t) {
                return function (e, n) {
                    return b(e) ? void o(e, l(t)) : t(e, n)
                }
            }

            function n(t, e) {
                if (rt(t, "service"), (w(e) || Sn(e)) && (e = $.instantiate(e)), !e.$get) throw Jn("pget", "Provider '{0}' must define $get factory method.", t);
                return y[t + d] = e
            }

            function r(t, e) {
                return n(t, {
                    $get: e
                })
            }

            function i(t, e) {
                return r(t, ["$injector", function (t) {
                    return t.instantiate(e)
                }])
            }

            function s(t, e) {
                return r(t, m(e))
            }

            function a(t, e) {
                rt(t, "constant"), y[t] = e, x[t] = e
            }

            function u(t, e) {
                var n = $.get(t + d),
                    r = n.$get;
                n.$get = function () {
                    var t = T.invoke(r, n);
                    return T.invoke(e, null, {
                        $delegate: t
                    })
                }
            }

            function c(t) {
                var e, n, r, i, s = [];
                return o(t, function (t) {
                    if (!g.get(t)) {
                        g.put(t, !0);
                        try {
                            if (j(t))
                                for (e = $n(t), s = s.concat(c(e.requires)).concat(e._runBlocks), n = e._invokeQueue, r = 0, i = n.length; r < i; r++) {
                                    var o = n[r],
                                        a = $.get(o[0]);
                                    a[o[1]].apply(a, o[2])
                                } else w(t) ? s.push($.invoke(t)) : Sn(t) ? s.push($.invoke(t)) : nt(t, "module")
                        } catch (l) {
                            throw Sn(t) && (t = t[t.length - 1]), l.message && l.stack && l.stack.indexOf(l.message) == -1 && (l = l.message + "\n" + l.stack), Jn("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, l.stack || l.message || l)
                        }
                    }
                }), s
            }

            function h(t, e) {
                function n(n) {
                    if (t.hasOwnProperty(n)) {
                        if (t[n] === p) throw Jn("cdep", "Circular dependency found: {0}", n + " <- " + v.join(" <- "));
                        return t[n]
                    }
                    try {
                        return v.unshift(n), t[n] = p, t[n] = e(n)
                    } catch (r) {
                        throw t[n] === p && delete t[n], r
                    } finally {
                        v.shift()
                    }
                }

                function r(t, e, r) {
                    var i, o, s, a = [],
                        l = At(t);
                    for (o = 0, i = l.length; o < i; o++) {
                        if (s = l[o], "string" != typeof s) throw Jn("itkn", "Incorrect injection token! Expected service name as string, got {0}", s);
                        a.push(r && r.hasOwnProperty(s) ? r[s] : n(s))
                    }
                    return Sn(t) && (t = t[i]), t.apply(e, a)
                }

                function i(t, e) {
                    var n, i, o = function () {};
                    return o.prototype = (Sn(t) ? t[t.length - 1] : t).prototype, n = new o, i = r(t, n, e), b(i) || w(i) ? i : n
                }
                return {
                    invoke: r,
                    instantiate: i,
                    get: n,
                    annotate: At,
                    has: function (e) {
                        return y.hasOwnProperty(e + d) || t.hasOwnProperty(e)
                    }
                }
            }
            var p = {},
                d = "Provider",
                v = [],
                g = new Pt([], (!0)),
                y = {
                    $provide: {
                        provider: e(n),
                        factory: e(r),
                        service: e(i),
                        value: e(s),
                        constant: e(a),
                        decorator: u
                    }
                },
                $ = y.$injector = h(y, function () {
                    throw Jn("unpr", "Unknown provider: {0}", v.join(" <- "))
                }),
                x = {},
                T = x.$injector = h(x, function (t) {
                    var e = $.get(t + d);
                    return T.invoke(e.$get, e)
                });
            return o(c(t), function (t) {
                T.invoke(t || f)
            }), T
        }

        function Dt() {
            var t = !0;
            this.disableAutoScrolling = function () {
                t = !1
            }, this.$get = ["$window", "$location", "$rootScope", function (e, n, r) {
                function i(t) {
                    var e = null;
                    return o(t, function (t) {
                        e || "a" !== dn(t.nodeName) || (e = t)
                    }), e
                }

                function s() {
                    var t, r = n.hash();
                    r ? (t = a.getElementById(r)) ? t.scrollIntoView() : (t = i(a.getElementsByName(r))) ? t.scrollIntoView() : "top" === r && e.scrollTo(0, 0) : e.scrollTo(0, 0)
                }
                var a = e.document;
                return t && r.$watch(function () {
                    return n.hash()
                }, function () {
                    r.$evalAsync(s)
                }), s
            }]
        }

        function Rt() {
            this.$get = ["$$rAF", "$timeout", function (t, e) {
                return t.supported ? function (e) {
                    return t(e)
                } : function (t) {
                    return e(t, 0, !1)
                }
            }]
        }

        function Ot(t, e, r, i) {
            function s(t) {
                try {
                    t.apply(null, H(arguments, 1))
                } finally {
                    if (y--, 0 === y)
                        for (; b.length;) try {
                            b.pop()()
                        } catch (e) {
                            r.error(e)
                        }
                }
            }

            function a(t, e) {
                ! function n() {
                    o(x, function (t) {
                        t()
                    }), $ = e(n, t)
                }()
            }

            function l() {
                C = null, w != u.url() && (w = u.url(), o(E, function (t) {
                    t(u.url())
                }))
            }
            var u = this,
                c = e[0],
                h = t.location,
                p = t.history,
                d = t.setTimeout,
                v = t.clearTimeout,
                m = {};
            u.isMock = !1;
            var y = 0,
                b = [];
            u.$$completeOutstandingRequest = s, u.$$incOutstandingRequestCount = function () {
                y++
            }, u.notifyWhenNoOutstandingRequests = function (t) {
                o(x, function (t) {
                    t()
                }), 0 === y ? t() : b.push(t)
            };
            var $, x = [];
            u.addPollFn = function (t) {
                return g($) && a(100, d), x.push(t), t
            };
            var w = h.href,
                T = e.find("base"),
                C = null;
            u.url = function (e, n) {
                if (h !== t.location && (h = t.location), p !== t.history && (p = t.history), e) {
                    if (w == e) return;
                    return w = e, i.history ? n ? p.replaceState(null, "", e) : (p.pushState(null, "", e), T.attr("href", T.attr("href"))) : (C = e, n ? h.replace(e) : h.href = e), u
                }
                return C || h.href.replace(/%27/g, "'")
            };
            var E = [],
                k = !1;
            u.onUrlChange = function (e) {
                return k || (i.history && bn(t).on("popstate", l), i.hashchange ? bn(t).on("hashchange", l) : u.addPollFn(l), k = !0), E.push(e), e
            }, u.baseHref = function () {
                var t = T.attr("href");
                return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            };
            var _ = {},
                S = "",
                M = u.baseHref();
            u.cookies = function (t, e) {
                var i, o, s, a, l;
                if (!t) {
                    if (c.cookie !== S)
                        for (S = c.cookie, o = S.split("; "), _ = {}, a = 0; a < o.length; a++) s = o[a], l = s.indexOf("="), l > 0 && (t = unescape(s.substring(0, l)), _[t] === n && (_[t] = unescape(s.substring(l + 1))));
                    return _
                }
                e === n ? c.cookie = escape(t) + "=;path=" + M + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : j(e) && (i = (c.cookie = escape(t) + "=" + escape(e) + ";path=" + M).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
            }, u.defer = function (t, e) {
                var n;
                return y++, n = d(function () {
                    delete m[n], s(t)
                }, e || 0), m[n] = !0, n
            }, u.defer.cancel = function (t) {
                return !!m[t] && (delete m[t], v(t), s(f), !0)
            }
        }

        function Lt() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, r) {
                return new Ot(t, r, e, n)
            }]
        }

        function It() {
            this.$get = function () {
                function t(t, n) {
                    function i(t) {
                        t != p && (d ? d == t && (d = t.n) : d = t, o(t.n, t.p), o(t, p), p = t, p.n = null)
                    }

                    function o(t, e) {
                        t != e && (t && (t.p = e), e && (e.n = t))
                    }
                    if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                    var s = 0,
                        a = h({}, n, {
                            id: t
                        }),
                        l = {},
                        u = n && n.capacity || Number.MAX_VALUE,
                        c = {},
                        p = null,
                        d = null;
                    return e[t] = {
                        put: function (t, e) {
                            if (u < Number.MAX_VALUE) {
                                var n = c[t] || (c[t] = {
                                    key: t
                                });
                                i(n)
                            }
                            if (!g(e)) return t in l || s++, l[t] = e, s > u && this.remove(d.key), e
                        },
                        get: function (t) {
                            if (u < Number.MAX_VALUE) {
                                var e = c[t];
                                if (!e) return;
                                i(e)
                            }
                            return l[t]
                        },
                        remove: function (t) {
                            if (u < Number.MAX_VALUE) {
                                var e = c[t];
                                if (!e) return;
                                e == p && (p = e.p), e == d && (d = e.n), o(e.n, e.p), delete c[t]
                            }
                            delete l[t], s--
                        },
                        removeAll: function () {
                            l = {}, s = 0, c = {}, p = d = null
                        },
                        destroy: function () {
                            l = null, a = null, c = null, delete e[t]
                        },
                        info: function () {
                            return h({}, a, {
                                size: s
                            })
                        }
                    }
                }
                var e = {};
                return t.info = function () {
                    var t = {};
                    return o(e, function (e, n) {
                        t[n] = e.info()
                    }), t
                }, t.get = function (t) {
                    return e[t]
                }, t
            }
        }

        function Ht() {
            this.$get = ["$cacheFactory", function (t) {
                return t("templates")
            }]
        }

        function Ft(t, r) {
            var i = {},
                s = "Directive",
                a = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
                u = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
                c = /^(on[a-z]+|formaction)$/;
            this.directive = function p(e, n) {
                return rt(e, "directive"), j(e) ? (et(n, "directiveFactory"), i.hasOwnProperty(e) || (i[e] = [], t.factory(e + s, ["$injector", "$exceptionHandler", function (t, n) {
                    var r = [];
                    return o(i[e], function (i, o) {
                        try {
                            var s = t.invoke(i);
                            w(s) ? s = {
                                compile: m(s)
                            } : !s.compile && s.link && (s.compile = m(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "A", r.push(s)
                        } catch (a) {
                            n(a)
                        }
                    }), r
                }])), i[e].push(n)) : o(e, l(p)), this
            }, this.aHrefSanitizationWhitelist = function (t) {
                return y(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function (t) {
                return y(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (t, r, l, p, f, m, g, y, $, x, T, C) {
                function E(t, e, n, r, i) {
                    t instanceof bn || (t = bn(t)), o(t, function (e, n) {
                        3 == e.nodeType && e.nodeValue.match(/\S+/) && (t[n] = e = bn(e).wrap("<span></span>").parent()[0])
                    });
                    var s = _(t, e, t, n, r, i);
                    return k(t, "ng-scope"),
                        function (e, n, r, i) {
                            et(e, "scope");
                            var a = n ? Qn.clone.call(t) : t;
                            o(r, function (t, e) {
                                a.data("$" + e + "Controller", t)
                            });
                            for (var l = 0, u = a.length; l < u; l++) {
                                var c = a[l],
                                    h = c.nodeType;
                                1 !== h && 9 !== h || a.eq(l).data("$scope", e)
                            }
                            return n && n(a, e), s && s(e, a, a, i), a
                        }
                }

                function k(t, e) {
                    try {
                        t.addClass(e)
                    } catch (n) {}
                }

                function _(t, e, r, i, o, s) {
                    function a(t, r, i, o) {
                        var s, a, l, u, c, h, p, d, v, m = r.length,
                            g = new Array(m);
                        for (h = 0; h < m; h++) g[h] = r[h];
                        for (h = 0, d = 0, p = f.length; h < p; d++) l = g[d], s = f[h++], a = f[h++], u = bn(l), s ? (s.scope ? (c = t.$new(), u.data("$scope", c)) : c = t, v = s.transcludeOnThisElement ? S(t, s.transclude, o) : !s.templateOnThisElement && o ? o : !o && e ? S(t, e) : null, s(a, c, l, i, v)) : a && a(t, l.childNodes, n, o)
                    }
                    for (var l, u, c, h, p, d, f = [], v = 0; v < t.length; v++) l = new Y, u = M(t[v], [], l, 0 === v ? i : n, o), c = u.length ? N(u, t[v], l, e, r, null, [], [], s) : null, c && c.scope && k(bn(t[v]), "ng-scope"), p = c && c.terminal || !(h = t[v].childNodes) || !h.length ? null : _(h, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : e), f.push(c, p), d = d || c || p, s = null;
                    return d ? a : null
                }

                function S(t, e, n) {
                    var r = function (r, i, o) {
                        var s = !1;
                        r || (r = t.$new(), r.$$transcluded = !0, s = !0);
                        var a = e(r, i, o, n);
                        return s && a.on("$destroy", function () {
                            r.$destroy()
                        }), a
                    };
                    return r
                }

                function M(t, e, n, r, i) {
                    var o, s, l = t.nodeType,
                        c = n.$attr;
                    switch (l) {
                        case 1:
                            L(e, Bt(xn(t).toLowerCase()), "E", r, i);
                            for (var h, p, d, f, v, m, g = t.attributes, y = 0, b = g && g.length; y < b; y++) {
                                var $ = !1,
                                    x = !1;
                                if (h = g[y], !yn || yn >= 8 || h.specified) {
                                    p = h.name, v = Mn(h.value), f = Bt(p), (m = tt.test(f)) && (p = Z(f.substr(6), "-"));
                                    var w = f.replace(/(Start|End)$/, "");
                                    f === w + "Start" && ($ = p, x = p.substr(0, p.length - 5) + "end", p = p.substr(0, p.length - 6)), d = Bt(p.toLowerCase()), c[d] = p, !m && n.hasOwnProperty(d) || (n[d] = v, _t(t, d) && (n[d] = !0)), z(t, e, v, d), L(e, d, "A", r, i, $, x)
                                }
                            }
                            if (s = t.className, j(s) && "" !== s)
                                for (; o = u.exec(s);) d = Bt(o[2]), L(e, d, "C", r, i) && (n[d] = Mn(o[3])), s = s.substr(o.index + o[0].length);
                            break;
                        case 3:
                            U(e, t.nodeValue);
                            break;
                        case 8:
                            try {
                                o = a.exec(t.nodeValue), o && (d = Bt(o[1]), L(e, d, "M", r, i) && (n[d] = Mn(o[2])))
                            } catch (T) {}
                    }
                    return e.sort(B), e
                }

                function P(t, e, n) {
                    var r = [],
                        i = 0;
                    if (e && t.hasAttribute && t.hasAttribute(e)) {
                        do {
                            if (!t) throw er("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                            1 == t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                        } while (i > 0)
                    } else r.push(t);
                    return bn(r)
                }

                function A(t, e, n) {
                    return function (r, i, o, s, a) {
                        return i = P(i[0], e, n), t(r, i, o, s, a)
                    }
                }

                function N(t, i, s, a, u, c, h, p, d) {
                    function f(t, e, n, r) {
                        t && (n && (t = A(t, n, r)), t.require = x.require, t.directiveName = T, (B === x || x.$$isolateScope) && (t = X(t, {
                            isolateScope: !0
                        })), h.push(t)), e && (n && (e = A(e, n, r)), e.require = x.require, e.directiveName = T, (B === x || x.$$isolateScope) && (e = X(e, {
                            isolateScope: !0
                        })), p.push(e))
                    }

                    function v(t, e, n, r) {
                        var i, s = "data",
                            a = !1;
                        if (j(e)) {
                            for (;
                                "^" == (i = e.charAt(0)) || "?" == i;) e = e.substr(1), "^" == i && (s = "inheritedData"), a = a || "?" == i;
                            if (i = null, r && "data" === s && (i = r[e]), i = i || n[s]("$" + e + "Controller"), !i && !a) throw er("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
                            return i
                        }
                        return Sn(e) && (i = [], o(e, function (e) {
                            i.push(v(t, e, n, r))
                        })), i
                    }

                    function y(t, e, a, u, c) {
                        function d(t, e) {
                            var r;
                            return arguments.length < 2 && (e = t, t = n), K && (r = C), c(t, e, r)
                        }
                        var f, y, b, j, $, x, w, T, C = {};
                        if (f = i === a ? s : R(s, new Y(bn(a), s.$attr)), y = f.$$element, B) {
                            var E = /^\s*([@=&])(\??)\s*(\w*)\s*$/,
                                _ = bn(a);
                            w = e.$new(!0), !U || U !== B && U !== B.$$originalDirective ? _.data("$isolateScopeNoTemplate", w) : _.data("$isolateScope", w), k(_, "ng-isolate-scope"), o(B.scope, function (t, n) {
                                var i, o, s, a, l = t.match(E) || [],
                                    u = l[3] || n,
                                    c = "?" == l[2],
                                    h = l[1];
                                switch (w.$$isolateBindings[n] = h + u, h) {
                                    case "@":
                                        f.$observe(u, function (t) {
                                            w[n] = t
                                        }), f.$$observers[u].$$scope = e, f[u] && (w[n] = r(f[u])(e));
                                        break;
                                    case "=":
                                        if (c && !f[u]) return;
                                        o = m(f[u]), a = o.literal ? O : function (t, e) {
                                            return t === e
                                        }, s = o.assign || function () {
                                            throw i = w[n] = o(e), er("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", f[u], B.name)
                                        }, i = w[n] = o(e), w.$watch(function () {
                                            var t = o(e);
                                            return a(t, w[n]) || (a(t, i) ? s(e, t = w[n]) : w[n] = t), i = t
                                        }, null, o.literal);
                                        break;
                                    case "&":
                                        o = m(f[u]), w[n] = function (t) {
                                            return o(e, t)
                                        };
                                        break;
                                    default:
                                        throw er("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", B.name, n, t)
                                }
                            })
                        }
                        for (T = c && d, L && o(L, function (t) {
                                var n, r = {
                                    $scope: t === B || t.$$isolateScope ? w : e,
                                    $element: y,
                                    $attrs: f,
                                    $transclude: T
                                };
                                x = t.controller, "@" == x && (x = f[t.name]), n = g(x, r), C[t.name] = n, K || y.data("$" + t.name + "Controller", n), t.controllerAs && (r.$scope[t.controllerAs] = n)
                            }), b = 0, j = h.length; b < j; b++) try {
                            $ = h[b], $($.isolateScope ? w : e, y, f, $.require && v($.directiveName, $.require, y, C), T)
                        } catch (S) {
                            l(S, Q(y))
                        }
                        var M = e;
                        for (B && (B.template || null === B.templateUrl) && (M = w), t && t(M, a.childNodes, n, c), b = p.length - 1; b >= 0; b--) try {
                            $ = p[b], $($.isolateScope ? w : e, y, f, $.require && v($.directiveName, $.require, y, C), T)
                        } catch (S) {
                            l(S, Q(y))
                        }
                    }
                    d = d || {};
                    for (var $, x, T, C, _, S, N = -Number.MAX_VALUE, L = d.controllerDirectives, B = d.newIsolateScopeDirective, U = d.templateDirective, V = d.nonTlbTranscludeDirective, z = !1, G = !1, K = d.hasElementTranscludeDirective, Z = s.$$element = bn(i), tt = c, et = a, nt = 0, rt = t.length; nt < rt; nt++) {
                        x = t[nt];
                        var it = x.$$start,
                            ot = x.$$end;
                        if (it && (Z = P(i, it, ot)), C = n, N > x.priority) break;
                        if ((S = x.scope) && ($ = $ || x, x.templateUrl || (q("new/isolated scope", B, x, Z), b(S) && (B = x))), T = x.name, !x.templateUrl && x.controller && (S = x.controller, L = L || {}, q("'" + T + "' controller", L[T], x, Z), L[T] = x), (S = x.transclude) && (z = !0, x.$$tlb || (q("transclusion", V, x, Z), V = x), "element" == S ? (K = !0, N = x.priority, C = P(i, it, ot), Z = s.$$element = bn(e.createComment(" " + T + ": " + s[T] + " ")), i = Z[0], W(u, bn(H(C)), i), et = E(C, a, N, tt && tt.name, {
                                nonTlbTranscludeDirective: V
                            })) : (C = bn(vt(i)).contents(), Z.empty(), et = E(C, a))), x.template)
                            if (G = !0, q("template", U, x, Z), U = x, S = w(x.template) ? x.template(Z, s) : x.template, S = J(S), x.replace) {
                                if (tt = x, C = ht(S) ? [] : bn(Mn(S)), i = C[0], 1 != C.length || 1 !== i.nodeType) throw er("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", T, "");
                                W(u, Z, i);
                                var st = {
                                        $attr: {}
                                    },
                                    at = M(i, [], st),
                                    lt = t.splice(nt + 1, t.length - (nt + 1));
                                B && D(at), t = t.concat(at).concat(lt), I(s, st), rt = t.length
                            } else Z.html(S);
                        if (x.templateUrl) G = !0, q("template", U, x, Z), U = x, x.replace && (tt = x), y = F(t.splice(nt, t.length - nt), Z, s, u, z && et, h, p, {
                            controllerDirectives: L,
                            newIsolateScopeDirective: B,
                            templateDirective: U,
                            nonTlbTranscludeDirective: V
                        }), rt = t.length;
                        else if (x.compile) try {
                            _ = x.compile(Z, s, et), w(_) ? f(null, _, it, ot) : _ && f(_.pre, _.post, it, ot)
                        } catch (ut) {
                            l(ut, Q(Z))
                        }
                        x.terminal && (y.terminal = !0, N = Math.max(N, x.priority))
                    }
                    return y.scope = $ && $.scope === !0, y.transcludeOnThisElement = z, y.templateOnThisElement = G, y.transclude = et, d.hasElementTranscludeDirective = K, y
                }

                function D(t) {
                    for (var e = 0, n = t.length; e < n; e++) t[e] = d(t[e], {
                        $$isolateScope: !0
                    })
                }

                function L(e, r, o, a, u, c, h) {
                    if (r === u) return null;
                    var p = null;
                    if (i.hasOwnProperty(r))
                        for (var f, v = t.get(r + s), m = 0, g = v.length; m < g; m++) try {
                            f = v[m], (a === n || a > f.priority) && f.restrict.indexOf(o) != -1 && (c && (f = d(f, {
                                $$start: c,
                                $$end: h
                            })), e.push(f), p = f)
                        } catch (y) {
                            l(y)
                        }
                    return p
                }

                function I(t, e) {
                    var n = e.$attr,
                        r = t.$attr,
                        i = t.$$element;
                    o(t, function (r, i) {
                        "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
                    }), o(e, function (e, o) {
                        "class" == o ? (k(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
                    })
                }

                function F(t, e, n, r, i, s, a, l) {
                    var u, c, d = [],
                        v = e[0],
                        m = t.shift(),
                        g = h({}, m, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: m
                        }),
                        y = w(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl;
                    return e.empty(), p.get(x.getTrustedResourceUrl(y), {
                            cache: f
                        }).success(function (h) {
                            var p, f, j, $;
                            if (h = J(h), m.replace) {
                                if (j = ht(h) ? [] : bn(Mn(h)), p = j[0], 1 != j.length || 1 !== p.nodeType) throw er("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m.name, y);
                                f = {
                                    $attr: {}
                                }, W(r, e, p);
                                var x = M(p, [], f);
                                b(m.scope) && D(x), t = x.concat(t), I(n, f)
                            } else p = v, e.html(h);
                            for (t.unshift(g), u = N(t, p, n, i, e, m, s, a, l), o(r, function (t, n) {
                                    t == p && (r[n] = e[0])
                                }), c = _(e[0].childNodes, i); d.length;) {
                                var w = d.shift(),
                                    T = d.shift(),
                                    C = d.shift(),
                                    E = d.shift(),
                                    P = e[0];
                                if (T !== v) {
                                    var A = T.className;
                                    l.hasElementTranscludeDirective && m.replace || (P = vt(p)), W(C, bn(T), P), k(bn(P), A)
                                }
                                $ = u.transcludeOnThisElement ? S(w, u.transclude, E) : E, u(c, w, P, r, $)
                            }
                            d = null
                        }).error(function (t, e, n, r) {
                            throw er("tpload", "Failed to load template: {0}", r.url)
                        }),
                        function (t, e, n, r, i) {
                            var o = i;
                            d ? (d.push(e), d.push(n), d.push(r), d.push(o)) : (u.transcludeOnThisElement && (o = S(e, u.transclude, i)), u(c, e, n, r, o))
                        }
                }

                function B(t, e) {
                    var n = e.priority - t.priority;
                    return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
                }

                function q(t, e, n, r) {
                    if (e) throw er("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, Q(r))
                }

                function U(t, e) {
                    var n = r(e, !0);
                    n && t.push({
                        priority: 0,
                        compile: function (t) {
                            var e = t.parent(),
                                r = e.length;
                            return r && k(t.parent(), "ng-binding"),
                                function (t, e) {
                                    var i = e.parent(),
                                        o = i.data("$binding") || [];
                                    o.push(n), i.data("$binding", o), r || k(i, "ng-binding"), t.$watch(n, function (t) {
                                        e[0].nodeValue = t
                                    })
                                }
                        }
                    })
                }

                function V(t, e) {
                    if ("srcdoc" == e) return x.HTML;
                    var n = xn(t);
                    return "xlinkHref" == e || "FORM" == n && "action" == e || "IMG" != n && ("src" == e || "ngSrc" == e) ? x.RESOURCE_URL : void 0
                }

                function z(t, e, n, i) {
                    var o = r(n, !0);
                    if (o) {
                        if ("multiple" === i && "SELECT" === xn(t)) throw er("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Q(t));
                        e.push({
                            priority: 100,
                            compile: function () {
                                return {
                                    pre: function (e, n, s) {
                                        var a = s.$$observers || (s.$$observers = {});
                                        if (c.test(i)) throw er("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        o = r(s[i], !0, V(t, i)), o && (s[i] = o(e), (a[i] || (a[i] = [])).$$inter = !0, (s.$$observers && s.$$observers[i].$$scope || e).$watch(o, function (t, e) {
                                            "class" === i && t != e ? s.$updateClass(t, e) : s.$set(i, t)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function W(t, n, r) {
                    var i, o, s = n[0],
                        a = n.length,
                        l = s.parentNode;
                    if (t)
                        for (i = 0, o = t.length; i < o; i++)
                            if (t[i] == s) {
                                t[i++] = r;
                                for (var u = i, c = u + a - 1, h = t.length; u < h; u++, c++) c < h ? t[u] = t[c] : delete t[u];
                                t.length -= a - 1;
                                break
                            }
                    l && l.replaceChild(r, s);
                    var p = e.createDocumentFragment();
                    p.appendChild(s), r[bn.expando] = s[bn.expando];
                    for (var d = 1, f = n.length; d < f; d++) {
                        var v = n[d];
                        bn(v).remove(), p.appendChild(v), delete n[d]
                    }
                    n[0] = r, n.length = 1
                }

                function X(t, e) {
                    return h(function () {
                        return t.apply(null, arguments)
                    }, t, e)
                }
                var Y = function (t, e) {
                    this.$$element = t, this.$attr = e || {}
                };
                Y.prototype = {
                    $normalize: Bt,
                    $addClass: function (t) {
                        t && t.length > 0 && T.addClass(this.$$element, t)
                    },
                    $removeClass: function (t) {
                        t && t.length > 0 && T.removeClass(this.$$element, t)
                    },
                    $updateClass: function (t, e) {
                        var n = qt(t, e),
                            r = qt(e, t);
                        0 === n.length ? T.removeClass(this.$$element, r) : 0 === r.length ? T.addClass(this.$$element, n) : T.setClass(this.$$element, n, r)
                    },
                    $set: function (t, e, r, i) {
                        var s, a = _t(this.$$element[0], t);
                        a && (this.$$element.prop(t, e), i = a), this[t] = e, i ? this.$attr[t] = i : (i = this.$attr[t], i || (this.$attr[t] = i = Z(t, "-"))), s = xn(this.$$element), ("A" === s && "href" === t || "IMG" === s && "src" === t) && (this[t] = e = C(e, "src" === t)), r !== !1 && (null === e || e === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, e));
                        var u = this.$$observers;
                        u && o(u[t], function (t) {
                            try {
                                t(e)
                            } catch (n) {
                                l(n)
                            }
                        })
                    },
                    $observe: function (t, e) {
                        var n = this,
                            r = n.$$observers || (n.$$observers = {}),
                            i = r[t] || (r[t] = []);
                        return i.push(e), y.$evalAsync(function () {
                            i.$$inter || e(n[t])
                        }), e
                    }
                };
                var G = r.startSymbol(),
                    K = r.endSymbol(),
                    J = "{{" == G || "}}" == K ? v : function (t) {
                        return t.replace(/\{\{/g, G).replace(/}}/g, K)
                    },
                    tt = /^ngAttr[A-Z]/;
                return E
            }]
        }

        function Bt(t) {
            return ut(t.replace(nr, ""))
        }

        function qt(t, e) {
            var n = "",
                r = t.split(/\s+/),
                i = e.split(/\s+/);
            t: for (var o = 0; o < r.length; o++) {
                for (var s = r[o], a = 0; a < i.length; a++)
                    if (s == i[a]) continue t;
                n += (n.length > 0 ? " " : "") + s
            }
            return n
        }

        function Ut() {
            var t = {},
                e = /^(\S+)(\s+as\s+(\w+))?$/;
            this.register = function (e, n) {
                rt(e, "controller"), b(e) ? h(t, e) : t[e] = n
            }, this.$get = ["$injector", "$window", function (n, i) {
                return function (o, s) {
                    var a, l, u, c;
                    if (j(o) && (l = o.match(e), u = l[1], c = l[3], o = t.hasOwnProperty(u) ? t[u] : it(s.$scope, u, !0) || it(i, u, !0), nt(o, u, !0)), a = n.instantiate(o, s), c) {
                        if (!s || "object" != typeof s.$scope) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", u || o.name, c);
                        s.$scope[c] = a
                    }
                    return a
                }
            }]
        }

        function Vt() {
            this.$get = ["$window", function (t) {
                return bn(t.document)
            }]
        }

        function Qt() {
            this.$get = ["$log", function (t) {
                return function (e, n) {
                    t.error.apply(t, arguments)
                }
            }]
        }

        function zt(t) {
            var e, n, r, i = {};
            return t ? (o(t.split("\n"), function (t) {
                r = t.indexOf(":"), e = dn(Mn(t.substr(0, r))), n = Mn(t.substr(r + 1)), e && (i[e] ? i[e] += ", " + n : i[e] = n)
            }), i) : i
        }

        function Wt(t) {
            var e = b(t) ? t : n;
            return function (n) {
                return e || (e = zt(t)), n ? e[dn(n)] || null : e
            }
        }

        function Xt(t, e, n) {
            return w(n) ? n(t, e) : (o(n, function (n) {
                t = n(t, e)
            }), t)
        }

        function Yt(t) {
            return 200 <= t && t < 300
        }

        function Gt() {
            var t = /^\s*(\[|\{[^\{])/,
                e = /[\}\]]\s*$/,
                r = /^\)\]\}',?\n/,
                i = {
                    "Content-Type": "application/json;charset=utf-8"
                },
                s = this.defaults = {
                    transformResponse: [function (n) {
                        return j(n) && (n = n.replace(r, ""), t.test(n) && e.test(n) && (n = U(n))), n
                    }],
                    transformRequest: [function (t) {
                        return !b(t) || k(t) || _(t) ? t : q(t)
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        post: R(i),
                        put: R(i),
                        patch: R(i)
                    },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN"
                },
                l = this.interceptors = [],
                u = this.responseInterceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (t, e, r, i, c, p) {
                function d(t) {
                    function e(t) {
                        var e = h({}, t, {
                            data: Xt(t.data, t.headers, i.transformResponse)
                        });
                        return Yt(t.status) ? e : c.reject(e)
                    }

                    function r(t) {
                        function e(t) {
                            var e;
                            o(t, function (n, r) {
                                w(n) && (e = n(), null != e ? t[r] = e : delete t[r])
                            })
                        }
                        var n, r, i, a = s.headers,
                            l = h({}, t.headers);
                        a = h({}, a.common, a[dn(t.method)]);
                        t: for (n in a) {
                            r = dn(n);
                            for (i in l)
                                if (dn(i) === r) continue t;
                            l[n] = a[n]
                        }
                        return e(l), l
                    }
                    var i = {
                            method: "get",
                            transformRequest: s.transformRequest,
                            transformResponse: s.transformResponse
                        },
                        a = r(t);
                    h(i, t), i.headers = a, i.method = vn(i.method);
                    var l = function (t) {
                            a = t.headers;
                            var n = Xt(t.data, Wt(a), t.transformRequest);
                            return g(n) && o(a, function (t, e) {
                                "content-type" === dn(e) && delete a[e]
                            }), g(t.withCredentials) && !g(s.withCredentials) && (t.withCredentials = s.withCredentials), m(t, n, a).then(e, e)
                        },
                        u = [l, n],
                        p = c.when(i);
                    for (o(T, function (t) {
                            (t.request || t.requestError) && u.unshift(t.request, t.requestError), (t.response || t.responseError) && u.push(t.response, t.responseError)
                        }); u.length;) {
                        var d = u.shift(),
                            f = u.shift();
                        p = p.then(d, f)
                    }
                    return p.success = function (t) {
                        return p.then(function (e) {
                            t(e.data, e.status, e.headers, i)
                        }), p
                    }, p.error = function (t) {
                        return p.then(null, function (e) {
                            t(e.data, e.status, e.headers, i)
                        }), p
                    }, p
                }

                function f(t) {
                    o(arguments, function (t) {
                        d[t] = function (e, n) {
                            return d(h(n || {}, {
                                method: t,
                                url: e
                            }))
                        }
                    })
                }

                function v(t) {
                    o(arguments, function (t) {
                        d[t] = function (e, n, r) {
                            return d(h(r || {}, {
                                method: t,
                                url: e,
                                data: n
                            }))
                        }
                    })
                }

                function m(r, o, a) {
                    function l(t, e, n, r) {
                        p && (Yt(t) ? p.put(j, [t, e, zt(n), r]) : p.remove(j)), u(e, t, n, r), i.$$phase || i.$apply()
                    }

                    function u(t, e, n, i) {
                        e = Math.max(e, 0), (Yt(e) ? v.resolve : v.reject)({
                            data: t,
                            status: e,
                            headers: Wt(n),
                            config: r,
                            statusText: i
                        })
                    }

                    function h() {
                        var t = A(d.pendingRequests, r);
                        t !== -1 && d.pendingRequests.splice(t, 1)
                    }
                    var p, f, v = c.defer(),
                        m = v.promise,
                        j = $(r.url, r.params);
                    if (d.pendingRequests.push(r), m.then(h, h), (r.cache || s.cache) && r.cache !== !1 && "GET" == r.method && (p = b(r.cache) ? r.cache : b(s.cache) ? s.cache : x), p)
                        if (f = p.get(j), y(f)) {
                            if (f.then) return f.then(h, h), f;
                            Sn(f) ? u(f[1], f[0], R(f[2]), f[3]) : u(f, 200, {}, "OK")
                        } else p.put(j, m);
                    if (g(f)) {
                        var w = Le(r.url) ? e.cookies()[r.xsrfCookieName || s.xsrfCookieName] : n;
                        w && (a[r.xsrfHeaderName || s.xsrfHeaderName] = w), t(r.method, j, o, l, a, r.timeout, r.withCredentials, r.responseType)
                    }
                    return m
                }

                function $(t, e) {
                    if (!e) return t;
                    var n = [];
                    return a(e, function (t, e) {
                        null === t || g(t) || (Sn(t) || (t = [t]), o(t, function (t) {
                            b(t) && (t = q(t)), n.push(G(e) + "=" + G(t))
                        }))
                    }), n.length > 0 && (t += (t.indexOf("?") == -1 ? "?" : "&") + n.join("&")), t
                }
                var x = r("$http"),
                    T = [];
                return o(l, function (t) {
                    T.unshift(j(t) ? p.get(t) : p.invoke(t))
                }), o(u, function (t, e) {
                    var n = j(t) ? p.get(t) : p.invoke(t);
                    T.splice(e, 0, {
                        response: function (t) {
                            return n(c.when(t))
                        },
                        responseError: function (t) {
                            return n(c.reject(t))
                        }
                    })
                }), d.pendingRequests = [], f("get", "delete", "head", "jsonp"), v("post", "put"), d.defaults = s, d
            }]
        }

        function Kt(e) {
            if (yn <= 8 && (!e.match(/^(get|post|head|put|delete|options)$/i) || !t.XMLHttpRequest)) return new t.ActiveXObject("Microsoft.XMLHTTP");
            if (t.XMLHttpRequest) return new t.XMLHttpRequest;
            throw r("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
        }

        function Jt() {
            this.$get = ["$browser", "$window", "$document", function (t, e, n) {
                return Zt(t, Kt, t.defer, e.angular.callbacks, n[0])
            }]
        }

        function Zt(t, e, n, r, i) {
            function s(t, e, n) {
                var o = i.createElement("script"),
                    s = null;
                return o.type = "text/javascript", o.src = t, o.async = !0, s = function (t) {
                    On(o, "load", s), On(o, "error", s), i.body.removeChild(o), o = null;
                    var a = -1,
                        l = "unknown";
                    t && ("load" !== t.type || r[e].called || (t = {
                        type: "error"
                    }), l = t.type, a = "error" === t.type ? 404 : 200), n && n(a, l)
                }, Rn(o, "load", s), Rn(o, "error", s), yn <= 8 && (o.onreadystatechange = function () {
                    j(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, s({
                        type: "load"
                    }))
                }), i.body.appendChild(o), s
            }
            var a = -1;
            return function (i, l, u, c, h, p, d, v) {
                function m() {
                    b = a, $ && $(), x && x.abort()
                }

                function g(e, r, i, o, s) {
                    T && n.cancel(T), $ = x = null, 0 === r && (r = i ? 200 : "file" == Oe(l).protocol ? 404 : 0), r = 1223 === r ? 204 : r, s = s || "", e(r, i, o, s), t.$$completeOutstandingRequest(f)
                }
                var b;
                if (t.$$incOutstandingRequestCount(), l = l || t.url(), "jsonp" == dn(i)) {
                    var j = "_" + (r.counter++).toString(36);
                    r[j] = function (t) {
                        r[j].data = t, r[j].called = !0
                    };
                    var $ = s(l.replace("JSON_CALLBACK", "angular.callbacks." + j), j, function (t, e) {
                        g(c, t, r[j].data, "", e), r[j] = f
                    })
                } else {
                    var x = e(i);
                    if (x.open(i, l, !0), o(h, function (t, e) {
                            y(t) && x.setRequestHeader(e, t)
                        }), x.onreadystatechange = function () {
                            if (x && 4 == x.readyState) {
                                var t = null,
                                    e = null,
                                    n = "";
                                b !== a && (t = x.getAllResponseHeaders(), e = "response" in x ? x.response : x.responseText), b === a && yn < 10 || (n = x.statusText), g(c, b || x.status, e, t, n)
                            }
                        }, d && (x.withCredentials = !0), v) try {
                        x.responseType = v
                    } catch (w) {
                        if ("json" !== v) throw w
                    }
                    x.send(u || null)
                }
                if (p > 0) var T = n(m, p);
                else p && p.then && p.then(m)
            }
        }

        function te() {
            var t = "{{",
                e = "}}";
            this.startSymbol = function (e) {
                return e ? (t = e, this) : t
            }, this.endSymbol = function (t) {
                return t ? (e = t, this) : e
            }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
                function o(o, l, u) {
                    for (var c, h, p, d, f = 0, v = [], m = o.length, g = !1, y = []; f < m;)(c = o.indexOf(t, f)) != -1 && (h = o.indexOf(e, c + s)) != -1 ? (f != c && v.push(o.substring(f, c)), v.push(p = n(d = o.substring(c + s, h))), p.exp = d, f = h + a, g = !0) : (f != m && v.push(o.substring(f)), f = m);
                    if ((m = v.length) || (v.push(""), m = 1), u && v.length > 1) throw rr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                    if (!l || g) return y.length = m, p = function (t) {
                        try {
                            for (var e, n = 0, s = m; n < s; n++) {
                                if ("function" == typeof (e = v[n]))
                                    if (e = e(t), e = u ? i.getTrusted(u, e) : i.valueOf(e), null == e) e = "";
                                    else switch (typeof e) {
                                        case "string":
                                            break;
                                        case "number":
                                            e = "" + e;
                                            break;
                                        default:
                                            e = q(e)
                                    }
                                    y[n] = e
                            }
                            return y.join("")
                        } catch (a) {
                            var l = rr("interr", "Can't interpolate: {0}\n{1}", o, a.toString());
                            r(l)
                        }
                    }, p.exp = o, p.parts = v, p
                }
                var s = t.length,
                    a = e.length;
                return o.startSymbol = function () {
                    return t
                }, o.endSymbol = function () {
                    return e
                }, o
            }]
        }

        function ee() {
            this.$get = ["$rootScope", "$window", "$q", function (t, e, n) {
                function r(r, o, s, a) {
                    var l = e.setInterval,
                        u = e.clearInterval,
                        c = n.defer(),
                        h = c.promise,
                        p = 0,
                        d = y(a) && !a;
                    return s = y(s) ? s : 0, h.then(null, null, r), h.$$intervalId = l(function () {
                        c.notify(p++), s > 0 && p >= s && (c.resolve(p), u(h.$$intervalId), delete i[h.$$intervalId]), d || t.$apply()
                    }, o), i[h.$$intervalId] = c, h
                }
                var i = {};
                return r.cancel = function (t) {
                    return !!(t && t.$$intervalId in i) && (i[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete i[t.$$intervalId], !0)
                }, r
            }]
        }

        function ne() {
            this.$get = function () {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "¤",
                            posSuf: "",
                            negPre: "(¤",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                        SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                        DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                        SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a"
                    },
                    pluralCat: function (t) {
                        return 1 === t ? "one" : "other"
                    }
                }
            }
        }

        function re(t) {
            for (var e = t.split("/"), n = e.length; n--;) e[n] = Y(e[n]);
            return e.join("/")
        }

        function ie(t, e, n) {
            var r = Oe(t, n);
            e.$$protocol = r.protocol, e.$$host = r.hostname, e.$$port = p(r.port) || or[r.protocol] || null
        }

        function oe(t, e, n) {
            var r = "/" !== t.charAt(0);
            r && (t = "/" + t);
            var i = Oe(t, n);
            e.$$path = decodeURIComponent(r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), e.$$search = W(i.search), e.$$hash = decodeURIComponent(i.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
        }

        function se(t, e) {
            if (0 === e.indexOf(t)) return e.substr(t.length)
        }

        function ae(t) {
            var e = t.indexOf("#");
            return e == -1 ? t : t.substr(0, e)
        }

        function le(t) {
            return t.substr(0, ae(t).lastIndexOf("/") + 1)
        }

        function ue(t) {
            return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
        }

        function ce(t, e) {
            this.$$html5 = !0, e = e || "";
            var r = le(t);
            ie(t, this, t), this.$$parse = function (e) {
                var n = se(r, e);
                if (!j(n)) throw sr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, r);
                oe(n, this, t), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function () {
                var t = X(this.$$search),
                    e = this.$$hash ? "#" + Y(this.$$hash) : "";
                this.$$url = re(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = r + this.$$url.substr(1)
            }, this.$$rewrite = function (i) {
                var o, s;
                return (o = se(t, i)) !== n ? (s = o, (o = se(e, o)) !== n ? r + (se("/", o) || o) : t + s) : (o = se(r, i)) !== n ? r + o : r == i + "/" ? r : void 0
            }
        }

        function he(t, e) {
            var n = le(t);
            ie(t, this, t), this.$$parse = function (r) {
                function i(t, e, n) {
                    var r, i = /^\/[A-Z]:(\/.*)/;
                    return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
                }
                var o = se(t, r) || se(n, r),
                    s = "#" == o.charAt(0) ? se(e, o) : this.$$html5 ? o : "";
                if (!j(s)) throw sr("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', r, e);
                oe(s, this, t), this.$$path = i(this.$$path, s, t), this.$$compose()
            }, this.$$compose = function () {
                var n = X(this.$$search),
                    r = this.$$hash ? "#" + Y(this.$$hash) : "";
                this.$$url = re(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
            }, this.$$rewrite = function (e) {
                if (ae(t) == ae(e)) return e
            }
        }

        function pe(t, e) {
            this.$$html5 = !0, he.apply(this, arguments);
            var n = le(t);
            this.$$rewrite = function (r) {
                var i;
                return t == ae(r) ? r : (i = se(n, r)) ? t + e + i : n === r + "/" ? n : void 0
            }, this.$$compose = function () {
                var n = X(this.$$search),
                    r = this.$$hash ? "#" + Y(this.$$hash) : "";
                this.$$url = re(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + e + this.$$url
            }
        }

        function de(t) {
            return function () {
                return this[t]
            }
        }

        function fe(t, e) {
            return function (n) {
                return g(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
            }
        }

        function ve() {
            var e = "",
                n = !1;
            this.hashPrefix = function (t) {
                return y(t) ? (e = t, this) : e
            }, this.html5Mode = function (t) {
                return y(t) ? (n = t, this) : n
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (r, i, o, s) {
                function a(t) {
                    r.$broadcast("$locationChangeSuccess", l.absUrl(), t)
                }
                var l, u, c, h = i.baseHref(),
                    p = i.url();
                n ? (c = ue(p) + (h || "/"), u = o.history ? ce : pe) : (c = ae(p), u = he), l = new u(c, "#" + e), l.$$parse(l.$$rewrite(p)), s.on("click", function (n) {
                    if (!n.ctrlKey && !n.metaKey && 2 != n.which) {
                        for (var o = bn(n.target);
                            "a" !== dn(o[0].nodeName);)
                            if (o[0] === s[0] || !(o = o.parent())[0]) return;
                        var a = o.prop("href");
                        if (b(a) && "[object SVGAnimatedString]" === a.toString() && (a = Oe(a.animVal).href), u === pe) {
                            var h = o.attr("href") || o.attr("xlink:href");
                            if (h.indexOf("://") < 0) {
                                var p = "#" + e;
                                if ("/" == h[0]) a = c + p + h;
                                else if ("#" == h[0]) a = c + p + (l.path() || "/") + h;
                                else {
                                    for (var d = l.path().split("/"), f = h.split("/"), v = 0; v < f.length; v++) "." != f[v] && (".." == f[v] ? d.pop() : f[v].length && d.push(f[v]));
                                    a = c + p + d.join("/")
                                }
                            }
                        }
                        var m = l.$$rewrite(a);
                        a && !o.attr("target") && m && !n.isDefaultPrevented() && (n.preventDefault(), m != i.url() && (l.$$parse(m), r.$apply(), t.angular["ff-684208-preventDefault"] = !0))
                    }
                }), l.absUrl() != p && i.url(l.absUrl(), !0), i.onUrlChange(function (t) {
                    l.absUrl() != t && (r.$evalAsync(function () {
                        var e = l.absUrl();
                        l.$$parse(t), r.$broadcast("$locationChangeStart", t, e).defaultPrevented ? (l.$$parse(e), i.url(e)) : a(e)
                    }), r.$$phase || r.$digest())
                });
                var d = 0;
                return r.$watch(function () {
                    var t = i.url(),
                        e = l.$$replace;
                    return d && t == l.absUrl() || (d++, r.$evalAsync(function () {
                        r.$broadcast("$locationChangeStart", l.absUrl(), t).defaultPrevented ? l.$$parse(t) : (i.url(l.absUrl(), e), a(t))
                    })), l.$$replace = !1, d
                }), l
            }]
        }

        function me() {
            var t = !0,
                e = this;
            this.debugEnabled = function (e) {
                return y(e) ? (t = e, this) : t
            }, this.$get = ["$window", function (n) {
                function r(t) {
                    return t instanceof Error && (t.stack ? t = t.message && t.stack.indexOf(t.message) === -1 ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
                }

                function i(t) {
                    var e = n.console || {},
                        i = e[t] || e.log || f,
                        s = !1;
                    try {
                        s = !!i.apply
                    } catch (a) {}
                    return s ? function () {
                        var t = [];
                        return o(arguments, function (e) {
                            t.push(r(e))
                        }), i.apply(e, t)
                    } : function (t, e) {
                        i(t, null == e ? "" : e)
                    }
                }
                return {
                    log: i("log"),
                    info: i("info"),
                    warn: i("warn"),
                    error: i("error"),
                    debug: function () {
                        var n = i("debug");
                        return function () {
                            t && n.apply(e, arguments)
                        }
                    }()
                }
            }]
        }

        function ge(t, e) {
            if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw lr("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
            return t
        }

        function ye(t, e) {
            if (t) {
                if (t.constructor === t) throw lr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
                if (t.document && t.location && t.alert && t.setInterval) throw lr("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
                if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw lr("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
                if (t === Object) throw lr("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
            }
            return t
        }

        function be(t, e) {
            if (t) {
                if (t.constructor === t) throw lr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
                if (t === cr || t === hr || pr && t === pr) throw lr("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
            }
        }

        function je(t, e, r, i, o) {
            o = o || {};
            for (var s, a = e.split("."), l = 0; a.length > 1; l++) {
                s = ge(a.shift(), i);
                var u = t[s];
                u || (u = {}, t[s] = u), t = u, t.then && o.unwrapPromises && (ar(i),
                    "$$v" in t || ! function (t) {
                        t.then(function (e) {
                            t.$$v = e
                        })
                    }(t), t.$$v === n && (t.$$v = {}), t = t.$$v)
            }
            return s = ge(a.shift(), i), ye(t, i), ye(t[s], i), t[s] = r, r
        }

        function $e(t, e, r, i, o, s, a) {
            return ge(t, s), ge(e, s), ge(r, s), ge(i, s), ge(o, s), a.unwrapPromises ? function (a, l) {
                var u, c = l && l.hasOwnProperty(t) ? l : a;
                return null == c ? c : (c = c[t], c && c.then && (ar(s), "$$v" in c || (u = c, u.$$v = n, u.then(function (t) {
                    u.$$v = t
                })), c = c.$$v), e ? null == c ? n : (c = c[e], c && c.then && (ar(s), "$$v" in c || (u = c, u.$$v = n, u.then(function (t) {
                    u.$$v = t
                })), c = c.$$v), r ? null == c ? n : (c = c[r], c && c.then && (ar(s), "$$v" in c || (u = c, u.$$v = n, u.then(function (t) {
                    u.$$v = t
                })), c = c.$$v), i ? null == c ? n : (c = c[i], c && c.then && (ar(s), "$$v" in c || (u = c, u.$$v = n, u.then(function (t) {
                    u.$$v = t
                })), c = c.$$v), o ? null == c ? n : (c = c[o], c && c.then && (ar(s), "$$v" in c || (u = c, u.$$v = n, u.then(function (t) {
                    u.$$v = t
                })), c = c.$$v), c) : c) : c) : c) : c)
            } : function (s, a) {
                var l = a && a.hasOwnProperty(t) ? a : s;
                return null == l ? l : (l = l[t], e ? null == l ? n : (l = l[e], r ? null == l ? n : (l = l[r], i ? null == l ? n : (l = l[i], o ? null == l ? n : l = l[o] : l) : l) : l) : l)
            }
        }

        function xe(t, e, r) {
            if (gr.hasOwnProperty(t)) return gr[t];
            var i, s = t.split("."),
                a = s.length;
            if (e.csp) i = a < 6 ? $e(s[0], s[1], s[2], s[3], s[4], r, e) : function (t, i) {
                var o, l = 0;
                do o = $e(s[l++], s[l++], s[l++], s[l++], s[l++], r, e)(t, i), i = n, t = o; while (l < a);
                return o
            };
            else {
                var l = "var p;\n";
                o(s, function (t, n) {
                    ge(t, r), l += "if(s == null) return undefined;\ns=" + (n ? "s" : '((k&&k.hasOwnProperty("' + t + '"))?k:s)') + '["' + t + '"];\n' + (e.unwrapPromises ? 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
                }), l += "return s;";
                var u = new Function("s", "k", "pw", l);
                u.toString = m(l), i = e.unwrapPromises ? function (t, e) {
                    return u(t, e, ar)
                } : u
            }
            return "hasOwnProperty" !== t && (gr[t] = i), i
        }

        function we() {
            var t = {},
                e = {
                    csp: !1,
                    unwrapPromises: !1,
                    logPromiseWarnings: !0
                };
            this.unwrapPromises = function (t) {
                return y(t) ? (e.unwrapPromises = !!t, this) : e.unwrapPromises
            }, this.logPromiseWarnings = function (t) {
                return y(t) ? (e.logPromiseWarnings = t, this) : e.logPromiseWarnings
            }, this.$get = ["$filter", "$sniffer", "$log", function (n, r, i) {
                return e.csp = r.csp, ar = function (t) {
                        e.logPromiseWarnings && !ur.hasOwnProperty(t) && (ur[t] = !0, i.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                    },
                    function (r) {
                        var i;
                        switch (typeof r) {
                            case "string":
                                if (t.hasOwnProperty(r)) return t[r];
                                var o = new vr(e),
                                    s = new mr(o, n, e);
                                return i = s.parse(r), "hasOwnProperty" !== r && (t[r] = i), i;
                            case "function":
                                return r;
                            default:
                                return f
                        }
                    }
            }]
        }

        function Te() {
            this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
                return Ce(function (e) {
                    t.$evalAsync(e)
                }, e)
            }]
        }

        function Ce(t, e) {
            function r(t) {
                return t
            }

            function i(t) {
                return u(t)
            }

            function s(t) {
                var e = a(),
                    n = 0,
                    r = Sn(t) ? [] : {};
                return o(t, function (t, i) {
                    n++, l(t).then(function (t) {
                        r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
                    }, function (t) {
                        r.hasOwnProperty(i) || e.reject(t)
                    })
                }), 0 === n && e.resolve(r), e.promise
            }
            var a = function () {
                    var o, s, u = [];
                    return s = {
                        resolve: function (e) {
                            if (u) {
                                var r = u;
                                u = n, o = l(e), r.length && t(function () {
                                    for (var t, e = 0, n = r.length; e < n; e++) t = r[e], o.then(t[0], t[1], t[2])
                                })
                            }
                        },
                        reject: function (t) {
                            s.resolve(c(t))
                        },
                        notify: function (e) {
                            if (u) {
                                var n = u;
                                u.length && t(function () {
                                    for (var t, r = 0, i = n.length; r < i; r++) t = n[r], t[2](e)
                                })
                            }
                        },
                        promise: {
                            then: function (t, n, s) {
                                var l = a(),
                                    c = function (n) {
                                        try {
                                            l.resolve((w(t) ? t : r)(n))
                                        } catch (i) {
                                            l.reject(i), e(i)
                                        }
                                    },
                                    h = function (t) {
                                        try {
                                            l.resolve((w(n) ? n : i)(t))
                                        } catch (r) {
                                            l.reject(r), e(r)
                                        }
                                    },
                                    p = function (t) {
                                        try {
                                            l.notify((w(s) ? s : r)(t))
                                        } catch (n) {
                                            e(n)
                                        }
                                    };
                                return u ? u.push([c, h, p]) : o.then(c, h, p), l.promise
                            },
                            "catch": function (t) {
                                return this.then(null, t)
                            },
                            "finally": function (t) {
                                function e(t, e) {
                                    var n = a();
                                    return e ? n.resolve(t) : n.reject(t), n.promise
                                }

                                function n(n, i) {
                                    var o = null;
                                    try {
                                        o = (t || r)()
                                    } catch (s) {
                                        return e(s, !1)
                                    }
                                    return o && w(o.then) ? o.then(function () {
                                        return e(n, i)
                                    }, function (t) {
                                        return e(t, !1)
                                    }) : e(n, i)
                                }
                                return this.then(function (t) {
                                    return n(t, !0)
                                }, function (t) {
                                    return n(t, !1)
                                })
                            }
                        }
                    }
                },
                l = function (e) {
                    return e && w(e.then) ? e : {
                        then: function (n) {
                            var r = a();
                            return t(function () {
                                r.resolve(n(e))
                            }), r.promise
                        }
                    }
                },
                u = function (t) {
                    var e = a();
                    return e.reject(t), e.promise
                },
                c = function (n) {
                    return {
                        then: function (r, o) {
                            var s = a();
                            return t(function () {
                                try {
                                    s.resolve((w(o) ? o : i)(n))
                                } catch (t) {
                                    s.reject(t), e(t)
                                }
                            }), s.promise
                        }
                    }
                },
                h = function (n, o, s, c) {
                    var h, p = a(),
                        d = function (t) {
                            try {
                                return (w(o) ? o : r)(t)
                            } catch (n) {
                                return e(n), u(n)
                            }
                        },
                        f = function (t) {
                            try {
                                return (w(s) ? s : i)(t)
                            } catch (n) {
                                return e(n), u(n)
                            }
                        },
                        v = function (t) {
                            try {
                                return (w(c) ? c : r)(t)
                            } catch (n) {
                                e(n)
                            }
                        };
                    return t(function () {
                        l(n).then(function (t) {
                            h || (h = !0, p.resolve(l(t).then(d, f, v)))
                        }, function (t) {
                            h || (h = !0, p.resolve(f(t)))
                        }, function (t) {
                            h || p.notify(v(t))
                        })
                    }), p.promise
                };
            return {
                defer: a,
                reject: u,
                when: h,
                all: s
            }
        }

        function Ee() {
            this.$get = ["$window", "$timeout", function (t, e) {
                var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame,
                    r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                    i = !!n,
                    o = i ? function (t) {
                        var e = n(t);
                        return function () {
                            r(e)
                        }
                    } : function (t) {
                        var n = e(t, 16.66, !1);
                        return function () {
                            e.cancel(n)
                        }
                    };
                return o.supported = i, o
            }]
        }

        function ke() {
            var t = 10,
                e = r("$rootScope"),
                n = null;
            this.digestTtl = function (e) {
                return arguments.length && (t = e), t
            }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, s, a, l) {
                function c() {
                    this.$id = u(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
                }

                function h(t) {
                    if (g.$$phase) throw e("inprog", "{0} already in progress", g.$$phase);
                    g.$$phase = t
                }

                function p() {
                    g.$$phase = null
                }

                function d(t, e) {
                    var n = a(t);
                    return nt(n, e), n
                }

                function v(t, e, n) {
                    do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
                }

                function m() {}
                c.prototype = {
                    constructor: c,
                    $new: function (t) {
                        var e;
                        return t ? (e = new c, e.$root = this.$root, e.$$asyncQueue = this.$$asyncQueue, e.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = u(), this.$$childScopeClass = null
                        }, this.$$childScopeClass.prototype = this), e = new this.$$childScopeClass), e["this"] = e, e.$parent = this, e.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = e, this.$$childTail = e) : this.$$childHead = this.$$childTail = e, e
                    },
                    $watch: function (t, e, r) {
                        var i = this,
                            o = d(t, "watch"),
                            s = i.$$watchers,
                            a = {
                                fn: e,
                                last: m,
                                get: o,
                                exp: t,
                                eq: !!r
                            };
                        if (n = null, !w(e)) {
                            var l = d(e || f, "listener");
                            a.fn = function (t, e, n) {
                                l(n)
                            }
                        }
                        if ("string" == typeof t && o.constant) {
                            var u = a.fn;
                            a.fn = function (t, e, n) {
                                u.call(this, t, e, n), N(s, a)
                            }
                        }
                        return s || (s = i.$$watchers = []), s.unshift(a),
                            function () {
                                N(s, a), n = null
                            }
                    },
                    $watchCollection: function (t, e) {
                        function n() {
                            o = p(u);
                            var t, e;
                            if (b(o))
                                if (i(o)) {
                                    s !== d && (s = d, m = s.length = 0, h++), t = o.length, m !== t && (h++, s.length = m = t);
                                    for (var n = 0; n < t; n++) {
                                        var r = s[n] !== s[n] && o[n] !== o[n];
                                        r || s[n] === o[n] || (h++, s[n] = o[n])
                                    }
                                } else {
                                    s !== f && (s = f = {}, m = 0, h++), t = 0;
                                    for (e in o) o.hasOwnProperty(e) && (t++, s.hasOwnProperty(e) ? s[e] !== o[e] && (h++, s[e] = o[e]) : (m++, s[e] = o[e], h++));
                                    if (m > t) {
                                        h++;
                                        for (e in s) s.hasOwnProperty(e) && !o.hasOwnProperty(e) && (m--, delete s[e])
                                    }
                                }
                            else s !== o && (s = o, h++);
                            return h
                        }

                        function r() {
                            if (v ? (v = !1, e(o, o, u)) : e(o, l, u), c)
                                if (b(o))
                                    if (i(o)) {
                                        l = new Array(o.length);
                                        for (var t = 0; t < o.length; t++) l[t] = o[t]
                                    } else {
                                        l = {};
                                        for (var n in o) fn.call(o, n) && (l[n] = o[n])
                                    }
                            else l = o
                        }
                        var o, s, l, u = this,
                            c = e.length > 1,
                            h = 0,
                            p = a(t),
                            d = [],
                            f = {},
                            v = !0,
                            m = 0;
                        return this.$watch(n, r)
                    },
                    $digest: function () {
                        var r, i, o, a, l, u, c, d, f, v, g, y = this.$$asyncQueue,
                            b = this.$$postDigestQueue,
                            j = t,
                            $ = this,
                            x = [];
                        h("$digest"), n = null;
                        do {
                            for (u = !1, d = $; y.length;) {
                                try {
                                    g = y.shift(), g.scope.$eval(g.expression)
                                } catch (T) {
                                    p(), s(T)
                                }
                                n = null
                            }
                            t: do {
                                if (a = d.$$watchers)
                                    for (l = a.length; l--;) try {
                                        if (r = a[l])
                                            if ((i = r.get(d)) === (o = r.last) || (r.eq ? O(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
                                                if (r === n) {
                                                    u = !1;
                                                    break t
                                                }
                                            } else u = !0, n = r, r.last = r.eq ? D(i, null) : i, r.fn(i, o === m ? i : o, d), j < 5 && (f = 4 - j, x[f] || (x[f] = []), v = w(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, v += "; newVal: " + q(i) + "; oldVal: " + q(o), x[f].push(v))
                                    } catch (T) {
                                        p(), s(T)
                                    }
                                if (!(c = d.$$childHead || d !== $ && d.$$nextSibling))
                                    for (; d !== $ && !(c = d.$$nextSibling);) d = d.$parent
                            } while (d = c);
                            if ((u || y.length) && !j--) throw p(), e("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, q(x))
                        } while (u || y.length);
                        for (p(); b.length;) try {
                            b.shift()()
                        } catch (T) {
                            s(T)
                        }
                    },
                    $destroy: function () {
                        if (!this.$$destroyed) {
                            var t = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this !== g && (o(this.$$listenerCount, F(null, v, this)), t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = f, this.$on = this.$watch = function () {
                                return f
                            })
                        }
                    },
                    $eval: function (t, e) {
                        return a(t)(this, e)
                    },
                    $evalAsync: function (t) {
                        g.$$phase || g.$$asyncQueue.length || l.defer(function () {
                            g.$$asyncQueue.length && g.$digest()
                        }), this.$$asyncQueue.push({
                            scope: this,
                            expression: t
                        })
                    },
                    $$postDigest: function (t) {
                        this.$$postDigestQueue.push(t)
                    },
                    $apply: function (t) {
                        try {
                            return h("$apply"), this.$eval(t)
                        } catch (e) {
                            s(e)
                        } finally {
                            p();
                            try {
                                g.$digest()
                            } catch (e) {
                                throw s(e), e
                            }
                        }
                    },
                    $on: function (t, e) {
                        var n = this.$$listeners[t];
                        n || (this.$$listeners[t] = n = []), n.push(e);
                        var r = this;
                        do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
                        var i = this;
                        return function () {
                            n[A(n, e)] = null, v(i, 1, t)
                        }
                    },
                    $emit: function (t, e) {
                        var n, r, i, o = [],
                            a = this,
                            l = !1,
                            u = {
                                name: t,
                                targetScope: a,
                                stopPropagation: function () {
                                    l = !0
                                },
                                preventDefault: function () {
                                    u.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            c = I([u], arguments, 1);
                        do {
                            for (n = a.$$listeners[t] || o, u.currentScope = a, r = 0, i = n.length; r < i; r++)
                                if (n[r]) try {
                                    n[r].apply(null, c)
                                } catch (h) {
                                    s(h)
                                } else n.splice(r, 1), r--, i--;
                            if (l) return u;
                            a = a.$parent
                        } while (a);
                        return u
                    },
                    $broadcast: function (t, e) {
                        for (var n, r, i, o = this, a = o, l = o, u = {
                                name: t,
                                targetScope: o,
                                preventDefault: function () {
                                    u.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, c = I([u], arguments, 1); a = l;) {
                            for (u.currentScope = a, n = a.$$listeners[t] || [], r = 0, i = n.length; r < i; r++)
                                if (n[r]) try {
                                    n[r].apply(null, c)
                                } catch (h) {
                                    s(h)
                                } else n.splice(r, 1), r--, i--;
                            if (!(l = a.$$listenerCount[t] && a.$$childHead || a !== o && a.$$nextSibling))
                                for (; a !== o && !(l = a.$$nextSibling);) a = a.$parent
                        }
                        return u
                    }
                };
                var g = new c;
                return g
            }]
        }

        function _e() {
            var t = /^\s*(https?|ftp|mailto|tel|file):/,
                e = /^\s*(https?|ftp|file):|data:image\//;
            this.aHrefSanitizationWhitelist = function (e) {
                return y(e) ? (t = e, this) : t
            }, this.imgSrcSanitizationWhitelist = function (t) {
                return y(t) ? (e = t, this) : e
            }, this.$get = function () {
                return function (n, r) {
                    var i, o = r ? e : t;
                    return yn && !(yn >= 8) || (i = Oe(n).href, "" === i || i.match(o)) ? n : "unsafe:" + i
                }
            }
        }

        function Se(t) {
            return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }

        function Me(t) {
            if ("self" === t) return t;
            if (j(t)) {
                if (t.indexOf("***") > -1) throw yr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
                return t = Se(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
            }
            if (T(t)) return new RegExp("^" + t.source + "$");
            throw yr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
        }

        function Pe(t) {
            var e = [];
            return y(t) && o(t, function (t) {
                e.push(Me(t))
            }), e
        }

        function Ae() {
            this.SCE_CONTEXTS = br;
            var t = ["self"],
                e = [];
            this.resourceUrlWhitelist = function (e) {
                return arguments.length && (t = Pe(e)), t
            }, this.resourceUrlBlacklist = function (t) {
                return arguments.length && (e = Pe(t)), e
            }, this.$get = ["$injector", function (r) {
                function i(t, e) {
                    return "self" === t ? Le(e) : !!t.exec(e.href)
                }

                function o(n) {
                    var r, o, s = Oe(n.toString()),
                        a = !1;
                    for (r = 0, o = t.length; r < o; r++)
                        if (i(t[r], s)) {
                            a = !0;
                            break
                        }
                    if (a)
                        for (r = 0, o = e.length; r < o; r++)
                            if (i(e[r], s)) {
                                a = !1;
                                break
                            }
                    return a
                }

                function s(t) {
                    var e = function (t) {
                        this.$$unwrapTrustedValue = function () {
                            return t
                        }
                    };
                    return t && (e.prototype = new t), e.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    }, e.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    }, e
                }

                function a(t, e) {
                    var r = p.hasOwnProperty(t) ? p[t] : null;
                    if (!r) throw yr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
                    if (null === e || e === n || "" === e) return e;
                    if ("string" != typeof e) throw yr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
                    return new r(e)
                }

                function l(t) {
                    return t instanceof h ? t.$$unwrapTrustedValue() : t
                }

                function u(t, e) {
                    if (null === e || e === n || "" === e) return e;
                    var r = p.hasOwnProperty(t) ? p[t] : null;
                    if (r && e instanceof r) return e.$$unwrapTrustedValue();
                    if (t === br.RESOURCE_URL) {
                        if (o(e)) return e;
                        throw yr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
                    }
                    if (t === br.HTML) return c(e);
                    throw yr("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var c = function (t) {
                    throw yr("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                r.has("$sanitize") && (c = r.get("$sanitize"));
                var h = s(),
                    p = {};
                return p[br.HTML] = s(h), p[br.CSS] = s(h), p[br.URL] = s(h), p[br.JS] = s(h), p[br.RESOURCE_URL] = s(p[br.URL]), {
                    trustAs: a,
                    getTrusted: u,
                    valueOf: l
                }
            }]
        }

        function Ne() {
            var t = !0;
            this.enabled = function (e) {
                return arguments.length && (t = !!e), t
            }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function (e, n, r) {
                if (t && n.msie && n.msieDocumentMode < 8) throw yr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var i = R(br);
                i.isEnabled = function () {
                    return t
                }, i.trustAs = r.trustAs, i.getTrusted = r.getTrusted, i.valueOf = r.valueOf, t || (i.trustAs = i.getTrusted = function (t, e) {
                    return e
                }, i.valueOf = v), i.parseAs = function (t, n) {
                    var r = e(n);
                    return r.literal && r.constant ? r : function (e, n) {
                        return i.getTrusted(t, r(e, n))
                    }
                };
                var s = i.parseAs,
                    a = i.getTrusted,
                    l = i.trustAs;
                return o(br, function (t, e) {
                    var n = dn(e);
                    i[ut("parse_as_" + n)] = function (e) {
                        return s(t, e)
                    }, i[ut("get_trusted_" + n)] = function (e) {
                        return a(t, e)
                    }, i[ut("trust_as_" + n)] = function (e) {
                        return l(t, e)
                    }
                }), i
            }]
        }

        function De() {
            this.$get = ["$window", "$document", function (t, e) {
                var n, r, i = {},
                    o = p((/android (\d+)/.exec(dn((t.navigator || {}).userAgent)) || [])[1]),
                    s = /Boxee/i.test((t.navigator || {}).userAgent),
                    a = e[0] || {},
                    l = a.documentMode,
                    u = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                    c = a.body && a.body.style,
                    h = !1,
                    d = !1;
                if (c) {
                    for (var f in c)
                        if (r = u.exec(f)) {
                            n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                            break
                        }
                    n || (n = "WebkitOpacity" in c && "webkit"), h = !!("transition" in c || n + "Transition" in c), d = !!("animation" in c || n + "Animation" in c), !o || h && d || (h = j(a.body.style.webkitTransition), d = j(a.body.style.webkitAnimation))
                }
                return {
                    history: !(!t.history || !t.history.pushState || o < 4 || s),
                    hashchange: "onhashchange" in t && (!l || l > 7),
                    hasEvent: function (t) {
                        if ("input" == t && 9 == yn) return !1;
                        if (g(i[t])) {
                            var e = a.createElement("div");
                            i[t] = "on" + t in e
                        }
                        return i[t]
                    },
                    csp: L(),
                    vendorPrefix: n,
                    transitions: h,
                    animations: d,
                    android: o,
                    msie: yn,
                    msieDocumentMode: l
                }
            }]
        }

        function Re() {
            this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (t, e, n, r) {
                function i(i, s, a) {
                    var l, u = n.defer(),
                        c = u.promise,
                        h = y(a) && !a;
                    return l = e.defer(function () {
                        try {
                            u.resolve(i())
                        } catch (e) {
                            u.reject(e), r(e)
                        } finally {
                            delete o[c.$$timeoutId]
                        }
                        h || t.$apply()
                    }, s), c.$$timeoutId = l, o[l] = u, c
                }
                var o = {};
                return i.cancel = function (t) {
                    return !!(t && t.$$timeoutId in o) && (o[t.$$timeoutId].reject("canceled"), delete o[t.$$timeoutId], e.defer.cancel(t.$$timeoutId))
                }, i
            }]
        }

        function Oe(t, e) {
            var n = t;
            return yn && (jr.setAttribute("href", n), n = jr.href), jr.setAttribute("href", n), {
                href: jr.href,
                protocol: jr.protocol ? jr.protocol.replace(/:$/, "") : "",
                host: jr.host,
                search: jr.search ? jr.search.replace(/^\?/, "") : "",
                hash: jr.hash ? jr.hash.replace(/^#/, "") : "",
                hostname: jr.hostname,
                port: jr.port,
                pathname: "/" === jr.pathname.charAt(0) ? jr.pathname : "/" + jr.pathname
            }
        }

        function Le(t) {
            var e = j(t) ? Oe(t) : t;
            return e.protocol === $r.protocol && e.host === $r.host
        }

        function Ie() {
            this.$get = m(t)
        }

        function He(t) {
            function e(r, i) {
                if (b(r)) {
                    var s = {};
                    return o(r, function (t, n) {
                        s[n] = e(n, t)
                    }), s
                }
                return t.factory(r + n, i)
            }
            var n = "Filter";
            this.register = e, this.$get = ["$injector", function (t) {
                return function (e) {
                    return t.get(e + n)
                }
            }], e("currency", Be), e("date", Ye), e("filter", Fe), e("json", Ge), e("limitTo", Ke), e("lowercase", Er), e("number", qe), e("orderBy", Je), e("uppercase", kr)
        }

        function Fe() {
            return function (t, e, n) {
                if (!Sn(t)) return t;
                var r = typeof n,
                    i = [];
                i.check = function (t) {
                    for (var e = 0; e < i.length; e++)
                        if (!i[e](t)) return !1;
                    return !0
                }, "function" !== r && (n = "boolean" === r && n ? function (t, e) {
                    return kn.equals(t, e)
                } : function (t, e) {
                    if (t && e && "object" == typeof t && "object" == typeof e) {
                        for (var r in t)
                            if ("$" !== r.charAt(0) && fn.call(t, r) && n(t[r], e[r])) return !0;
                        return !1
                    }
                    return e = ("" + e).toLowerCase(), ("" + t).toLowerCase().indexOf(e) > -1
                });
                var o = function (t, e) {
                    if ("string" == typeof e && "!" === e.charAt(0)) return !o(t, e.substr(1));
                    switch (typeof t) {
                        case "boolean":
                        case "number":
                        case "string":
                            return n(t, e);
                        case "object":
                            switch (typeof e) {
                                case "object":
                                    return n(t, e);
                                default:
                                    for (var r in t)
                                        if ("$" !== r.charAt(0) && o(t[r], e)) return !0
                            }
                            return !1;
                        case "array":
                            for (var i = 0; i < t.length; i++)
                                if (o(t[i], e)) return !0;
                            return !1;
                        default:
                            return !1
                    }
                };
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "string":
                        e = {
                            $: e
                        };
                    case "object":
                        for (var s in e) ! function (t) {
                            "undefined" != typeof e[t] && i.push(function (n) {
                                return o("$" == t ? n : n && n[t], e[t])
                            })
                        }(s);
                        break;
                    case "function":
                        i.push(e);
                        break;
                    default:
                        return t
                }
                for (var a = [], l = 0; l < t.length; l++) {
                    var u = t[l];
                    i.check(u) && a.push(u)
                }
                return a
            }
        }

        function Be(t) {
            var e = t.NUMBER_FORMATS;
            return function (t, n) {
                return g(n) && (n = e.CURRENCY_SYM), Ue(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
            }
        }

        function qe(t) {
            var e = t.NUMBER_FORMATS;
            return function (t, n) {
                return Ue(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
            }
        }

        function Ue(t, e, n, r, i) {
            if (null == t || !isFinite(t) || b(t)) return "";
            var o = t < 0;
            t = Math.abs(t);
            var s = t + "",
                a = "",
                l = [],
                u = !1;
            if (s.indexOf("e") !== -1) {
                var c = s.match(/([\d\.]+)e(-?)(\d+)/);
                c && "-" == c[2] && c[3] > i + 1 ? (s = "0", t = 0) : (a = s, u = !0)
            }
            if (u) i > 0 && t > -1 && t < 1 && (a = t.toFixed(i));
            else {
                var h = (s.split(xr)[1] || "").length;
                g(i) && (i = Math.min(Math.max(e.minFrac, h), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
                var p = ("" + t).split(xr),
                    d = p[0];
                p = p[1] || "";
                var f, v = 0,
                    m = e.lgSize,
                    y = e.gSize;
                if (d.length >= m + y)
                    for (v = d.length - m, f = 0; f < v; f++)(v - f) % y === 0 && 0 !== f && (a += n), a += d.charAt(f);
                for (f = v; f < d.length; f++)(d.length - f) % m === 0 && 0 !== f && (a += n), a += d.charAt(f);
                for (; p.length < i;) p += "0";
                i && "0" !== i && (a += r + p.substr(0, i))
            }
            return l.push(o ? e.negPre : e.posPre), l.push(a), l.push(o ? e.negSuf : e.posSuf), l.join("")
        }

        function Ve(t, e, n) {
            var r = "";
            for (t < 0 && (r = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
            return n && (t = t.substr(t.length - e)), r + t
        }

        function Qe(t, e, n, r) {
            return n = n || 0,
                function (i) {
                    var o = i["get" + t]();
                    return (n > 0 || o > -n) && (o += n), 0 === o && n == -12 && (o = 12), Ve(o, e, r)
                }
        }

        function ze(t, e) {
            return function (n, r) {
                var i = n["get" + t](),
                    o = vn(e ? "SHORT" + t : t);
                return r[o][i]
            }
        }

        function We(t) {
            var e = -1 * t.getTimezoneOffset(),
                n = e >= 0 ? "+" : "";
            return n += Ve(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + Ve(Math.abs(e % 60), 2)
        }

        function Xe(t, e) {
            return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
        }

        function Ye(t) {
            function e(t) {
                var e;
                if (e = t.match(n)) {
                    var r = new Date(0),
                        i = 0,
                        o = 0,
                        s = e[8] ? r.setUTCFullYear : r.setFullYear,
                        a = e[8] ? r.setUTCHours : r.setHours;
                    e[9] && (i = p(e[9] + e[10]), o = p(e[9] + e[11])), s.call(r, p(e[1]), p(e[2]) - 1, p(e[3]));
                    var l = p(e[4] || 0) - i,
                        u = p(e[5] || 0) - o,
                        c = p(e[6] || 0),
                        h = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                    return a.call(r, l, u, c, h), r
                }
                return t
            }
            var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function (n, r) {
                var i, s, a = "",
                    l = [];
                if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, j(n) && (n = Cr.test(n) ? p(n) : e(n)), $(n) && (n = new Date(n)), !x(n)) return n;
                for (; r;) s = Tr.exec(r), s ? (l = I(l, s, 1), r = l.pop()) : (l.push(r), r = null);
                return o(l, function (e) {
                    i = wr[e], a += i ? i(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), a
            }
        }

        function Ge() {
            return function (t) {
                return q(t, !0)
            }
        }

        function Ke() {
            return function (t, e) {
                if (!Sn(t) && !j(t)) return t;
                if (e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : p(e), j(t)) return e ? e >= 0 ? t.slice(0, e) : t.slice(e, t.length) : "";
                var n, r, i = [];
                for (e > t.length ? e = t.length : e < -t.length && (e = -t.length), e > 0 ? (n = 0, r = e) : (n = t.length + e, r = t.length); n < r; n++) i.push(t[n]);
                return i
            }
        }

        function Je(t) {
            return function (e, n, r) {
                function i(t, e) {
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r](t, e);
                        if (0 !== i) return i
                    }
                    return 0
                }

                function o(t, e) {
                    return V(e) ? function (e, n) {
                        return t(n, e)
                    } : t
                }

                function s(t, e) {
                    var n = typeof t,
                        r = typeof e;
                    return n == r ? ("string" == n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : t < e ? -1 : 1) : n < r ? -1 : 1
                }
                if (!Sn(e)) return e;
                if (!n) return e;
                n = Sn(n) ? n : [n], n = M(n, function (e) {
                    var n = !1,
                        r = e || v;
                    if (j(e) && ("+" != e.charAt(0) && "-" != e.charAt(0) || (n = "-" == e.charAt(0), e = e.substring(1)), r = t(e), r.constant)) {
                        var i = r();
                        return o(function (t, e) {
                            return s(t[i], e[i])
                        }, n)
                    }
                    return o(function (t, e) {
                        return s(r(t), r(e))
                    }, n)
                });
                for (var a = [], l = 0; l < e.length; l++) a.push(e[l]);
                return a.sort(o(i, r))
            }
        }

        function Ze(t) {
            return w(t) && (t = {
                link: t
            }), t.restrict = t.restrict || "AC", m(t)
        }

        function tn(t, e, n, r) {
            function i(e, n) {
                n = n ? "-" + Z(n, "-") : "", r.removeClass(t, (e ? Br : Fr) + n), r.addClass(t, (e ? Fr : Br) + n)
            }
            var s = this,
                a = t.parent().controller("form") || Mr,
                l = 0,
                u = s.$error = {},
                c = [];
            s.$name = e.name || e.ngForm, s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, a.$addControl(s), t.addClass(qr), i(!0), s.$addControl = function (t) {
                rt(t.$name, "input"), c.push(t), t.$name && (s[t.$name] = t)
            }, s.$removeControl = function (t) {
                t.$name && s[t.$name] === t && delete s[t.$name], o(u, function (e, n) {
                    s.$setValidity(n, !0, t)
                }), N(c, t)
            }, s.$setValidity = function (t, e, n) {
                var r = u[t];
                if (e) r && (N(r, n), r.length || (l--, l || (i(e), s.$valid = !0, s.$invalid = !1), u[t] = !1, i(!0, t), a.$setValidity(t, !0, s)));
                else {
                    if (l || i(e), r) {
                        if (P(r, n)) return
                    } else u[t] = r = [], l++, i(!1, t), a.$setValidity(t, !1, s);
                    r.push(n), s.$valid = !1, s.$invalid = !0
                }
            }, s.$setDirty = function () {
                r.removeClass(t, qr), r.addClass(t, Ur), s.$dirty = !0, s.$pristine = !1, a.$setDirty()
            }, s.$setPristine = function () {
                r.removeClass(t, Ur), r.addClass(t, qr), s.$dirty = !1, s.$pristine = !0, o(c, function (t) {
                    t.$setPristine()
                })
            }
        }

        function en(t, e, r, i) {
            return t.$setValidity(e, r), r ? i : n
        }

        function nn(t, e) {
            var n, r;
            if (e)
                for (n = 0; n < e.length; ++n)
                    if (r = e[n], t[r]) return !0;
            return !1
        }

        function rn(t, e, n, r, i) {
            if (b(i)) {
                t.$$hasNativeValidators = !0;
                var o = function (o) {
                    return t.$error[e] || nn(i, r) || !nn(i, n) ? o : void t.$setValidity(e, !1)
                };
                t.$parsers.push(o)
            }
        }

        function on(t, e, n, i, o, s) {
            var a = e.prop(pn),
                l = e[0].placeholder,
                u = {};
            if (i.$$validityState = a, !o.android) {
                var c = !1;
                e.on("compositionstart", function (t) {
                    c = !0
                }), e.on("compositionend", function () {
                    c = !1, h()
                })
            }
            var h = function (r) {
                if (!c) {
                    var o = e.val();
                    if (yn && "input" === (r || u).type && e[0].placeholder !== l) return void(l = e[0].placeholder);
                    V(n.ngTrim || "T") && (o = Mn(o));
                    var s = a && i.$$hasNativeValidators;
                    (i.$viewValue !== o || "" === o && s) && (t.$$phase ? i.$setViewValue(o) : t.$apply(function () {
                        i.$setViewValue(o)
                    }))
                }
            };
            if (o.hasEvent("input")) e.on("input", h);
            else {
                var d, f = function () {
                    d || (d = s.defer(function () {
                        h(), d = null
                    }))
                };
                e.on("keydown", function (t) {
                    var e = t.keyCode;
                    91 === e || 15 < e && e < 19 || 37 <= e && e <= 40 || f()
                }), o.hasEvent("paste") && e.on("paste cut", f)
            }
            e.on("change", h), i.$render = function () {
                e.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue)
            };
            var v, m, g = n.ngPattern;
            if (g) {
                var y = function (t, e) {
                    return en(i, "pattern", i.$isEmpty(e) || t.test(e), e)
                };
                m = g.match(/^\/(.*)\/([gim]*)$/), m ? (g = new RegExp(m[1], m[2]), v = function (t) {
                    return y(g, t)
                }) : v = function (n) {
                    var i = t.$eval(g);
                    if (!i || !i.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", g, i, Q(e));
                    return y(i, n)
                }, i.$formatters.push(v), i.$parsers.push(v)
            }
            if (n.ngMinlength) {
                var b = p(n.ngMinlength),
                    j = function (t) {
                        return en(i, "minlength", i.$isEmpty(t) || t.length >= b, t)
                    };
                i.$parsers.push(j), i.$formatters.push(j)
            }
            if (n.ngMaxlength) {
                var $ = p(n.ngMaxlength),
                    x = function (t) {
                        return en(i, "maxlength", i.$isEmpty(t) || t.length <= $, t)
                    };
                i.$parsers.push(x), i.$formatters.push(x)
            }
        }

        function sn(t, e, r, i, o, s) {
            if (on(t, e, r, i, o, s), i.$parsers.push(function (t) {
                    var e = i.$isEmpty(t);
                    return e || Or.test(t) ? (i.$setValidity("number", !0), "" === t ? null : e ? t : parseFloat(t)) : (i.$setValidity("number", !1), n)
                }), rn(i, "number", Ir, null, i.$$validityState), i.$formatters.push(function (t) {
                    return i.$isEmpty(t) ? "" : "" + t
                }), r.min) {
                var a = function (t) {
                    var e = parseFloat(r.min);
                    return en(i, "min", i.$isEmpty(t) || t >= e, t)
                };
                i.$parsers.push(a), i.$formatters.push(a)
            }
            if (r.max) {
                var l = function (t) {
                    var e = parseFloat(r.max);
                    return en(i, "max", i.$isEmpty(t) || t <= e, t)
                };
                i.$parsers.push(l), i.$formatters.push(l)
            }
            i.$formatters.push(function (t) {
                return en(i, "number", i.$isEmpty(t) || $(t), t)
            })
        }

        function an(t, e, n, r, i, o) {
            on(t, e, n, r, i, o);
            var s = function (t) {
                return en(r, "url", r.$isEmpty(t) || Dr.test(t), t)
            };
            r.$formatters.push(s), r.$parsers.push(s)
        }

        function ln(t, e, n, r, i, o) {
            on(t, e, n, r, i, o);
            var s = function (t) {
                return en(r, "email", r.$isEmpty(t) || Rr.test(t), t)
            };
            r.$formatters.push(s), r.$parsers.push(s)
        }

        function un(t, e, n, r) {
            g(n.name) && e.attr("name", u()), e.on("click", function () {
                e[0].checked && t.$apply(function () {
                    r.$setViewValue(n.value)
                })
            }), r.$render = function () {
                var t = n.value;
                e[0].checked = t == r.$viewValue
            }, n.$observe("value", r.$render)
        }

        function cn(t, e, n, r) {
            var i = n.ngTrueValue,
                o = n.ngFalseValue;
            j(i) || (i = !0), j(o) || (o = !1), e.on("click", function () {
                t.$apply(function () {
                    r.$setViewValue(e[0].checked)
                })
            }), r.$render = function () {
                e[0].checked = r.$viewValue
            }, r.$isEmpty = function (t) {
                return t !== i
            }, r.$formatters.push(function (t) {
                return t === i
            }), r.$parsers.push(function (t) {
                return t ? i : o
            })
        }

        function hn(t, e) {
            return t = "ngClass" + t, ["$animate", function (n) {
                function r(t, e) {
                    var n = [];
                    t: for (var r = 0; r < t.length; r++) {
                        for (var i = t[r], o = 0; o < e.length; o++)
                            if (i == e[o]) continue t;
                        n.push(i)
                    }
                    return n
                }

                function i(t) {
                    if (Sn(t)) return t;
                    if (j(t)) return t.split(" ");
                    if (b(t)) {
                        var e = [];
                        return o(t, function (t, n) {
                            t && (e = e.concat(n.split(" ")))
                        }), e
                    }
                    return t
                }
                return {
                    restrict: "AC",
                    link: function (s, a, l) {
                        function u(t) {
                            var e = h(t, 1);
                            l.$addClass(e)
                        }

                        function c(t) {
                            var e = h(t, -1);
                            l.$removeClass(e)
                        }

                        function h(t, e) {
                            var n = a.data("$classCounts") || {},
                                r = [];
                            return o(t, function (t) {
                                (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
                            }), a.data("$classCounts", n), r.join(" ")
                        }

                        function p(t, e) {
                            var i = r(e, t),
                                o = r(t, e);
                            o = h(o, -1), i = h(i, 1), 0 === i.length ? n.removeClass(a, o) : 0 === o.length ? n.addClass(a, i) : n.setClass(a, i, o)
                        }

                        function d(t) {
                            if (e === !0 || s.$index % 2 === e) {
                                var n = i(t || []);
                                if (f) {
                                    if (!O(t, f)) {
                                        var r = i(f);
                                        p(r, n)
                                    }
                                } else u(n)
                            }
                            f = R(t)
                        }
                        var f;
                        s.$watch(l[t], d, !0), l.$observe("class", function (e) {
                            d(s.$eval(l[t]))
                        }), "ngClass" !== t && s.$watch("$index", function (n, r) {
                            var o = 1 & n;
                            if (o !== (1 & r)) {
                                var a = i(s.$eval(l[t]));
                                o === e ? u(a) : c(a)
                            }
                        })
                    }
                }
            }]
        }
        var pn = "validity",
            dn = function (t) {
                return j(t) ? t.toLowerCase() : t
            },
            fn = Object.prototype.hasOwnProperty,
            vn = function (t) {
                return j(t) ? t.toUpperCase() : t
            },
            mn = function (t) {
                return j(t) ? t.replace(/[A-Z]/g, function (t) {
                    return String.fromCharCode(32 | t.charCodeAt(0))
                }) : t
            },
            gn = function (t) {
                return j(t) ? t.replace(/[a-z]/g, function (t) {
                    return String.fromCharCode(t.charCodeAt(0) & -33)
                }) : t
            };
        "i" !== "I".toLowerCase() && (dn = mn, vn = gn);
        var yn, bn, jn, $n, xn, wn = [].slice,
            Tn = [].push,
            Cn = Object.prototype.toString,
            En = r("ng"),
            kn = t.angular || (t.angular = {}),
            _n = ["0", "0", "0"];
        yn = p((/msie (\d+)/.exec(dn(navigator.userAgent)) || [])[1]), isNaN(yn) && (yn = p((/trident\/.*; rv:(\d+)/.exec(dn(navigator.userAgent)) || [])[1])), f.$inject = [], v.$inject = [];
        var Sn = function () {
                return w(Array.isArray) ? Array.isArray : function (t) {
                    return "[object Array]" === Cn.call(t)
                }
            }(),
            Mn = function () {
                return String.prototype.trim ? function (t) {
                    return j(t) ? t.trim() : t
                } : function (t) {
                    return j(t) ? t.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : t
                }
            }();
        xn = yn < 9 ? function (t) {
            return t = t.nodeName ? t : t[0], t.scopeName && "HTML" != t.scopeName ? vn(t.scopeName + ":" + t.nodeName) : t.nodeName
        } : function (t) {
            return t.nodeName ? t.nodeName : t[0].nodeName
        };
        var Pn = /[A-Z]/g,
            An = {
                full: "1.2.20",
                major: 1,
                minor: 2,
                dot: 20,
                codeName: "accidental-beautification"
            };
        ft.expando = "ng339";
        var Nn = ft.cache = {},
            Dn = 1,
            Rn = t.document.addEventListener ? function (t, e, n) {
                t.addEventListener(e, n, !1)
            } : function (t, e, n) {
                t.attachEvent("on" + e, n)
            },
            On = t.document.removeEventListener ? function (t, e, n) {
                t.removeEventListener(e, n, !1)
            } : function (t, e, n) {
                t.detachEvent("on" + e, n)
            },
            Ln = (ft._data = function (t) {
                return this.cache[t[this.expando]] || {}
            }, /([\:\-\_]+(.))/g),
            In = /^moz([A-Z])/,
            Hn = r("jqLite"),
            Fn = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Bn = /<|&#?\w+;/,
            qn = /<([\w:]+)/,
            Un = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Vn = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Vn.optgroup = Vn.option, Vn.tbody = Vn.tfoot = Vn.colgroup = Vn.caption = Vn.thead, Vn.th = Vn.td;
        var Qn = ft.prototype = {
                ready: function (n) {
                    function r() {
                        i || (i = !0, n())
                    }
                    var i = !1;
                    "complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), ft(t).on("load", r))
                },
                toString: function () {
                    var t = [];
                    return o(this, function (e) {
                        t.push("" + e)
                    }), "[" + t.join(", ") + "]"
                },
                eq: function (t) {
                    return bn(t >= 0 ? this[t] : this[this.length + t])
                },
                length: 0,
                push: Tn,
                sort: [].sort,
                splice: [].splice
            },
            zn = {};
        o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (t) {
            zn[dn(t)] = t
        });
        var Wn = {};
        o("input,select,option,textarea,button,form,details".split(","), function (t) {
            Wn[vn(t)] = !0
        }), o({
            data: jt,
            inheritedData: Et,
            scope: function (t) {
                return bn(t).data("$scope") || Et(t.parentNode || t, ["$isolateScope", "$scope"])
            },
            isolateScope: function (t) {
                return bn(t).data("$isolateScope") || bn(t).data("$isolateScopeNoTemplate")
            },
            controller: Ct,
            injector: function (t) {
                return Et(t, "$injector")
            },
            removeAttr: function (t, e) {
                t.removeAttribute(e)
            },
            hasClass: $t,
            css: function (t, e, r) {
                if (e = ut(e), !y(r)) {
                    var i;
                    return yn <= 8 && (i = t.currentStyle && t.currentStyle[e], "" === i && (i = "auto")), i = i || t.style[e], yn <= 8 && (i = "" === i ? n : i), i
                }
                t.style[e] = r
            },
            attr: function (t, e, r) {
                var i = dn(e);
                if (zn[i]) {
                    if (!y(r)) return t[e] || (t.attributes.getNamedItem(e) || f).specified ? i : n;
                    r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i))
                } else if (y(r)) t.setAttribute(e, r);
                else if (t.getAttribute) {
                    var o = t.getAttribute(e, 2);
                    return null === o ? n : o
                }
            },
            prop: function (t, e, n) {
                return y(n) ? void(t[e] = n) : t[e]
            },
            text: function () {
                function t(t, n) {
                    var r = e[t.nodeType];
                    return g(n) ? r ? t[r] : "" : void(t[r] = n)
                }
                var e = [];
                return yn < 9 ? (e[1] = "innerText", e[3] = "nodeValue") : e[1] = e[3] = "textContent", t.$dv = "", t
            }(),
            val: function (t, e) {
                if (g(e)) {
                    if ("SELECT" === xn(t) && t.multiple) {
                        var n = [];
                        return o(t.options, function (t) {
                            t.selected && n.push(t.value || t.text)
                        }), 0 === n.length ? null : n
                    }
                    return t.value
                }
                t.value = e
            },
            html: function (t, e) {
                if (g(e)) return t.innerHTML;
                for (var n = 0, r = t.childNodes; n < r.length; n++) mt(r[n]);
                t.innerHTML = e
            },
            empty: kt
        }, function (t, e) {
            ft.prototype[e] = function (e, r) {
                var i, o, s = this.length;
                if (t !== kt && (2 == t.length && t !== $t && t !== Ct ? e : r) === n) {
                    if (b(e)) {
                        for (i = 0; i < s; i++)
                            if (t === jt) t(this[i], e);
                            else
                                for (o in e) t(this[i], o, e[o]);
                        return this
                    }
                    for (var a = t.$dv, l = a === n ? Math.min(s, 1) : s, u = 0; u < l; u++) {
                        var c = t(this[u], e, r);
                        a = a ? a + c : c
                    }
                    return a
                }
                for (i = 0; i < s; i++) t(this[i], e, r);
                return this
            }
        }), o({
            removeData: yt,
            dealoc: mt,
            on: function Ei(t, n, r, i) {
                if (y(i)) throw Hn("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                var s = bt(t, "events"),
                    a = bt(t, "handle");
                s || bt(t, "events", s = {}), a || bt(t, "handle", a = St(t, s)), o(n.split(" "), function (n) {
                    var i = s[n];
                    if (!i) {
                        if ("mouseenter" == n || "mouseleave" == n) {
                            var o = e.body.contains || e.body.compareDocumentPosition ? function (t, e) {
                                var n = 9 === t.nodeType ? t.documentElement : t,
                                    r = e && e.parentNode;
                                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                            } : function (t, e) {
                                if (e)
                                    for (; e = e.parentNode;)
                                        if (e === t) return !0;
                                return !1
                            };
                            s[n] = [];
                            var l = {
                                mouseleave: "mouseout",
                                mouseenter: "mouseover"
                            };
                            Ei(t, l[n], function (t) {
                                var e = this,
                                    r = t.relatedTarget;
                                r && (r === e || o(e, r)) || a(t, n)
                            })
                        } else Rn(t, n, a), s[n] = [];
                        i = s[n]
                    }
                    i.push(r)
                })
            },
            off: gt,
            one: function (t, e, n) {
                t = bn(t), t.on(e, function r() {
                    t.off(e, n), t.off(e, r)
                }), t.on(e, n)
            },
            replaceWith: function (t, e) {
                var n, r = t.parentNode;
                mt(t), o(new ft(e), function (e) {
                    n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
                })
            },
            children: function (t) {
                var e = [];
                return o(t.childNodes, function (t) {
                    1 === t.nodeType && e.push(t)
                }), e
            },
            contents: function (t) {
                return t.contentDocument || t.childNodes || [];
            },
            append: function (t, e) {
                o(new ft(e), function (e) {
                    1 !== t.nodeType && 11 !== t.nodeType || t.appendChild(e)
                })
            },
            prepend: function (t, e) {
                if (1 === t.nodeType) {
                    var n = t.firstChild;
                    o(new ft(e), function (e) {
                        t.insertBefore(e, n)
                    })
                }
            },
            wrap: function (t, e) {
                e = bn(e)[0];
                var n = t.parentNode;
                n && n.replaceChild(e, t), e.appendChild(t)
            },
            remove: function (t) {
                mt(t);
                var e = t.parentNode;
                e && e.removeChild(t)
            },
            after: function (t, e) {
                var n = t,
                    r = t.parentNode;
                o(new ft(e), function (t) {
                    r.insertBefore(t, n.nextSibling), n = t
                })
            },
            addClass: wt,
            removeClass: xt,
            toggleClass: function (t, e, n) {
                e && o(e.split(" "), function (e) {
                    var r = n;
                    g(r) && (r = !$t(t, e)), (r ? wt : xt)(t, e)
                })
            },
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            next: function (t) {
                if (t.nextElementSibling) return t.nextElementSibling;
                for (var e = t.nextSibling; null != e && 1 !== e.nodeType;) e = e.nextSibling;
                return e
            },
            find: function (t, e) {
                return t.getElementsByTagName ? t.getElementsByTagName(e) : []
            },
            clone: vt,
            triggerHandler: function (t, e, n) {
                var r = (bt(t, "events") || {})[e];
                n = n || [];
                var i = [{
                    preventDefault: f,
                    stopPropagation: f
                }];
                o(r, function (e) {
                    e.apply(t, i.concat(n))
                })
            }
        }, function (t, e) {
            ft.prototype[e] = function (e, n, r) {
                for (var i, o = 0; o < this.length; o++) g(i) ? (i = t(this[o], e, n, r), y(i) && (i = bn(i))) : Tt(i, t(this[o], e, n, r));
                return y(i) ? i : this
            }, ft.prototype.bind = ft.prototype.on, ft.prototype.unbind = ft.prototype.off
        }), Pt.prototype = {
            put: function (t, e) {
                this[Mt(t, this.nextUid)] = e
            },
            get: function (t) {
                return this[Mt(t, this.nextUid)]
            },
            remove: function (t) {
                var e = this[t = Mt(t, this.nextUid)];
                return delete this[t], e
            }
        };
        var Xn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            Yn = /,/,
            Gn = /^\s*(_?)(\S+?)\1\s*$/,
            Kn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            Jn = r("$injector"),
            Zn = r("$animate"),
            tr = ["$provide", function (t) {
                this.$$selectors = {}, this.register = function (e, n) {
                    var r = e + "-animation";
                    if (e && "." != e.charAt(0)) throw Zn("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
                    this.$$selectors[e.substr(1)] = r, t.factory(r, n)
                }, this.classNameFilter = function (t) {
                    return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
                }, this.$get = ["$timeout", "$$asyncCallback", function (t, e) {
                    function n(t) {
                        t && e(t)
                    }
                    return {
                        enter: function (t, e, r, i) {
                            r ? r.after(t) : (e && e[0] || (e = r.parent()), e.append(t)), n(i)
                        },
                        leave: function (t, e) {
                            t.remove(), n(e)
                        },
                        move: function (t, e, n, r) {
                            this.enter(t, e, n, r)
                        },
                        addClass: function (t, e, r) {
                            e = j(e) ? e : Sn(e) ? e.join(" ") : "", o(t, function (t) {
                                wt(t, e)
                            }), n(r)
                        },
                        removeClass: function (t, e, r) {
                            e = j(e) ? e : Sn(e) ? e.join(" ") : "", o(t, function (t) {
                                xt(t, e)
                            }), n(r)
                        },
                        setClass: function (t, e, r, i) {
                            o(t, function (t) {
                                wt(t, e), xt(t, r)
                            }), n(i)
                        },
                        enabled: f
                    }
                }]
            }],
            er = r("$compile");
        Ft.$inject = ["$provide", "$$sanitizeUriProvider"];
        var nr = /^(x[\:\-_]|data[\:\-_])/i,
            rr = r("$interpolate"),
            ir = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
            or = {
                http: 80,
                https: 443,
                ftp: 21
            },
            sr = r("$location");
        pe.prototype = he.prototype = ce.prototype = {
            $$html5: !1,
            $$replace: !1,
            absUrl: de("$$absUrl"),
            url: function (t, e) {
                if (g(t)) return this.$$url;
                var n = ir.exec(t);
                return n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) && this.search(n[3] || ""), this.hash(n[5] || "", e), this
            },
            protocol: de("$$protocol"),
            host: de("$$host"),
            port: de("$$port"),
            path: fe("$$path", function (t) {
                return "/" == t.charAt(0) ? t : "/" + t
            }),
            search: function (t, e) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (j(t)) this.$$search = W(t);
                        else {
                            if (!b(t)) throw sr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            o(t, function (e, n) {
                                null == e && delete t[n]
                            }), this.$$search = t
                        }
                        break;
                    default:
                        g(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
                }
                return this.$$compose(), this
            },
            hash: fe("$$hash", v),
            replace: function () {
                return this.$$replace = !0, this
            }
        };
        var ar, lr = r("$parse"),
            ur = {},
            cr = Function.prototype.call,
            hr = Function.prototype.apply,
            pr = Function.prototype.bind,
            dr = {
                "null": function () {
                    return null
                },
                "true": function () {
                    return !0
                },
                "false": function () {
                    return !1
                },
                undefined: f,
                "+": function (t, e, r, i) {
                    return r = r(t, e), i = i(t, e), y(r) ? y(i) ? r + i : r : y(i) ? i : n
                },
                "-": function (t, e, n, r) {
                    return n = n(t, e), r = r(t, e), (y(n) ? n : 0) - (y(r) ? r : 0)
                },
                "*": function (t, e, n, r) {
                    return n(t, e) * r(t, e)
                },
                "/": function (t, e, n, r) {
                    return n(t, e) / r(t, e)
                },
                "%": function (t, e, n, r) {
                    return n(t, e) % r(t, e)
                },
                "^": function (t, e, n, r) {
                    return n(t, e) ^ r(t, e)
                },
                "=": f,
                "===": function (t, e, n, r) {
                    return n(t, e) === r(t, e)
                },
                "!==": function (t, e, n, r) {
                    return n(t, e) !== r(t, e)
                },
                "==": function (t, e, n, r) {
                    return n(t, e) == r(t, e)
                },
                "!=": function (t, e, n, r) {
                    return n(t, e) != r(t, e)
                },
                "<": function (t, e, n, r) {
                    return n(t, e) < r(t, e)
                },
                ">": function (t, e, n, r) {
                    return n(t, e) > r(t, e)
                },
                "<=": function (t, e, n, r) {
                    return n(t, e) <= r(t, e)
                },
                ">=": function (t, e, n, r) {
                    return n(t, e) >= r(t, e)
                },
                "&&": function (t, e, n, r) {
                    return n(t, e) && r(t, e)
                },
                "||": function (t, e, n, r) {
                    return n(t, e) || r(t, e)
                },
                "&": function (t, e, n, r) {
                    return n(t, e) & r(t, e)
                },
                "|": function (t, e, n, r) {
                    return r(t, e)(t, e, n(t, e))
                },
                "!": function (t, e, n) {
                    return !n(t, e)
                }
            },
            fr = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "\t",
                v: "\x0B",
                "'": "'",
                '"': '"'
            },
            vr = function (t) {
                this.options = t
            };
        vr.prototype = {
            constructor: vr,
            lex: function (t) {
                for (this.text = t, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                    if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                    else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdent(this.ch)) this.readIdent();
                    else if (this.is("(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: this.ch
                    }), this.index++;
                    else {
                        if (this.isWhitespace(this.ch)) {
                            this.index++;
                            continue
                        }
                        var e = this.ch + this.peek(),
                            r = e + this.peek(2),
                            i = dr[this.ch],
                            o = dr[e],
                            s = dr[r];
                        s ? (this.tokens.push({
                            index: this.index,
                            text: r,
                            fn: s
                        }), this.index += 3) : o ? (this.tokens.push({
                            index: this.index,
                            text: e,
                            fn: o
                        }), this.index += 2) : i ? (this.tokens.push({
                            index: this.index,
                            text: this.ch,
                            fn: i
                        }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                    this.lastCh = this.ch
                }
                return this.tokens
            },
            is: function (t) {
                return t.indexOf(this.ch) !== -1
            },
            was: function (t) {
                return t.indexOf(this.lastCh) !== -1
            },
            peek: function (t) {
                var e = t || 1;
                return this.index + e < this.text.length && this.text.charAt(this.index + e)
            },
            isNumber: function (t) {
                return "0" <= t && t <= "9"
            },
            isWhitespace: function (t) {
                return " " === t || "\r" === t || "\t" === t || "\n" === t || "\x0B" === t || " " === t
            },
            isIdent: function (t) {
                return "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "_" === t || "$" === t
            },
            isExpOperator: function (t) {
                return "-" === t || "+" === t || this.isNumber(t)
            },
            throwError: function (t, e, n) {
                n = n || this.index;
                var r = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
                throw lr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
            },
            readNumber: function () {
                for (var t = "", e = this.index; this.index < this.text.length;) {
                    var n = dn(this.text.charAt(this.index));
                    if ("." == n || this.isNumber(n)) t += n;
                    else {
                        var r = this.peek();
                        if ("e" == n && this.isExpOperator(r)) t += n;
                        else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1)) t += n;
                        else {
                            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1)) break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                t = 1 * t, this.tokens.push({
                    index: e,
                    text: t,
                    literal: !0,
                    constant: !0,
                    fn: function () {
                        return t
                    }
                })
            },
            readIdent: function () {
                for (var t, e, n, r, i = this, o = "", s = this.index; this.index < this.text.length && (r = this.text.charAt(this.index), "." === r || this.isIdent(r) || this.isNumber(r));) "." === r && (t = this.index), o += r, this.index++;
                if (t)
                    for (e = this.index; e < this.text.length;) {
                        if (r = this.text.charAt(e), "(" === r) {
                            n = o.substr(t - s + 1), o = o.substr(0, t - s), this.index = e;
                            break
                        }
                        if (!this.isWhitespace(r)) break;
                        e++
                    }
                var a = {
                    index: s,
                    text: o
                };
                if (dr.hasOwnProperty(o)) a.fn = dr[o], a.literal = !0, a.constant = !0;
                else {
                    var l = xe(o, this.options, this.text);
                    a.fn = h(function (t, e) {
                        return l(t, e)
                    }, {
                        assign: function (t, e) {
                            return je(t, o, e, i.text, i.options)
                        }
                    })
                }
                this.tokens.push(a), n && (this.tokens.push({
                    index: t,
                    text: "."
                }), this.tokens.push({
                    index: t + 1,
                    text: n
                }))
            },
            readString: function (t) {
                var e = this.index;
                this.index++;
                for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                    var o = this.text.charAt(this.index);
                    if (r += o, i) {
                        if ("u" === o) {
                            var s = this.text.substring(this.index + 1, this.index + 5);
                            s.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + s + "]"), this.index += 4, n += String.fromCharCode(parseInt(s, 16))
                        } else {
                            var a = fr[o];
                            n += a ? a : o
                        }
                        i = !1
                    } else if ("\\" === o) i = !0;
                    else {
                        if (o === t) return this.index++, void this.tokens.push({
                            index: e,
                            text: r,
                            string: n,
                            literal: !0,
                            constant: !0,
                            fn: function () {
                                return n
                            }
                        });
                        n += o
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", e)
            }
        };
        var mr = function (t, e, n) {
            this.lexer = t, this.$filter = e, this.options = n
        };
        mr.ZERO = h(function () {
            return 0
        }, {
            constant: !0
        }), mr.prototype = {
            constructor: mr,
            parse: function (t) {
                this.text = t, this.tokens = this.lexer.lex(t);
                var e = this.statements();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
            },
            primary: function () {
                var t;
                if (this.expect("(")) t = this.filterChain(), this.consume(")");
                else if (this.expect("[")) t = this.arrayDeclaration();
                else if (this.expect("{")) t = this.object();
                else {
                    var e = this.expect();
                    t = e.fn, t || this.throwError("not a primary expression", e), t.literal = !!e.literal, t.constant = !!e.constant
                }
                for (var n, r; n = this.expect("(", "[", ".");) "(" === n.text ? (t = this.functionCall(t, r), r = null) : "[" === n.text ? (r = t, t = this.objectIndex(t)) : "." === n.text ? (r = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
                return t
            },
            throwError: function (t, e) {
                throw lr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
            },
            peekToken: function () {
                if (0 === this.tokens.length) throw lr("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function (t, e, n, r) {
                if (this.tokens.length > 0) {
                    var i = this.tokens[0],
                        o = i.text;
                    if (o === t || o === e || o === n || o === r || !t && !e && !n && !r) return i
                }
                return !1
            },
            expect: function (t, e, n, r) {
                var i = this.peek(t, e, n, r);
                return !!i && (this.tokens.shift(), i)
            },
            consume: function (t) {
                this.expect(t) || this.throwError("is unexpected, expecting [" + t + "]", this.peek())
            },
            unaryFn: function (t, e) {
                return h(function (n, r) {
                    return t(n, r, e)
                }, {
                    constant: e.constant
                })
            },
            ternaryFn: function (t, e, n) {
                return h(function (r, i) {
                    return t(r, i) ? e(r, i) : n(r, i)
                }, {
                    constant: t.constant && e.constant && n.constant
                })
            },
            binaryFn: function (t, e, n) {
                return h(function (r, i) {
                    return e(r, i, t, n)
                }, {
                    constant: t.constant && n.constant
                })
            },
            statements: function () {
                for (var t = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";")) return 1 === t.length ? t[0] : function (e, n) {
                        for (var r, i = 0; i < t.length; i++) {
                            var o = t[i];
                            o && (r = o(e, n))
                        }
                        return r
                    }
            },
            filterChain: function () {
                for (var t, e = this.expression();;) {
                    if (!(t = this.expect("|"))) return e;
                    e = this.binaryFn(e, t.fn, this.filter())
                }
            },
            filter: function () {
                for (var t = this.expect(), e = this.$filter(t.text), n = [];;) {
                    if (!(t = this.expect(":"))) {
                        var r = function (t, r, i) {
                            for (var o = [i], s = 0; s < n.length; s++) o.push(n[s](t, r));
                            return e.apply(t, o)
                        };
                        return function () {
                            return r
                        }
                    }
                    n.push(this.expression())
                }
            },
            expression: function () {
                return this.assignment()
            },
            assignment: function () {
                var t, e, n = this.ternary();
                return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), function (e, r) {
                    return n.assign(e, t(e, r), r)
                }) : n
            },
            ternary: function () {
                var t, e, n = this.logicalOR();
                return (e = this.expect("?")) ? (t = this.ternary(), (e = this.expect(":")) ? this.ternaryFn(n, t, this.ternary()) : void this.throwError("expected :", e)) : n
            },
            logicalOR: function () {
                for (var t, e = this.logicalAND();;) {
                    if (!(t = this.expect("||"))) return e;
                    e = this.binaryFn(e, t.fn, this.logicalAND())
                }
            },
            logicalAND: function () {
                var t, e = this.equality();
                return (t = this.expect("&&")) && (e = this.binaryFn(e, t.fn, this.logicalAND())), e
            },
            equality: function () {
                var t, e = this.relational();
                return (t = this.expect("==", "!=", "===", "!==")) && (e = this.binaryFn(e, t.fn, this.equality())), e
            },
            relational: function () {
                var t, e = this.additive();
                return (t = this.expect("<", ">", "<=", ">=")) && (e = this.binaryFn(e, t.fn, this.relational())), e
            },
            additive: function () {
                for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = this.binaryFn(e, t.fn, this.multiplicative());
                return e
            },
            multiplicative: function () {
                for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = this.binaryFn(e, t.fn, this.unary());
                return e
            },
            unary: function () {
                var t;
                return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(mr.ZERO, t.fn, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.fn, this.unary()) : this.primary()
            },
            fieldAccess: function (t) {
                var e = this,
                    n = this.expect().text,
                    r = xe(n, this.options, this.text);
                return h(function (e, n, i) {
                    return r(i || t(e, n))
                }, {
                    assign: function (r, i, o) {
                        return je(t(r, o), n, i, e.text, e.options)
                    }
                })
            },
            objectIndex: function (t) {
                var e = this,
                    r = this.expression();
                return this.consume("]"), h(function (i, o) {
                    var s, a, l = t(i, o),
                        u = r(i, o);
                    return ge(u, e.text), l ? (s = ye(l[u], e.text), s && s.then && e.options.unwrapPromises && (a = s, "$$v" in s || (a.$$v = n, a.then(function (t) {
                        a.$$v = t
                    })), s = s.$$v), s) : n
                }, {
                    assign: function (n, i, o) {
                        var s = r(n, o),
                            a = ye(t(n, o), e.text);
                        return a[s] = i
                    }
                })
            },
            functionCall: function (t, e) {
                var n = [];
                if (")" !== this.peekToken().text)
                    do n.push(this.expression()); while (this.expect(","));
                this.consume(")");
                var r = this;
                return function (i, o) {
                    for (var s = [], a = e ? e(i, o) : i, l = 0; l < n.length; l++) s.push(n[l](i, o));
                    var u = t(i, o, a) || f;
                    ye(a, r.text), be(u, r.text);
                    var c = u.apply ? u.apply(a, s) : u(s[0], s[1], s[2], s[3], s[4]);
                    return ye(c, r.text)
                }
            },
            arrayDeclaration: function () {
                var t = [],
                    e = !0;
                if ("]" !== this.peekToken().text)
                    do {
                        if (this.peek("]")) break;
                        var n = this.expression();
                        t.push(n), n.constant || (e = !1)
                    } while (this.expect(","));
                return this.consume("]"), h(function (e, n) {
                    for (var r = [], i = 0; i < t.length; i++) r.push(t[i](e, n));
                    return r
                }, {
                    literal: !0,
                    constant: e
                })
            },
            object: function () {
                var t = [],
                    e = !0;
                if ("}" !== this.peekToken().text)
                    do {
                        if (this.peek("}")) break;
                        var n = this.expect(),
                            r = n.string || n.text;
                        this.consume(":");
                        var i = this.expression();
                        t.push({
                            key: r,
                            value: i
                        }), i.constant || (e = !1)
                    } while (this.expect(","));
                return this.consume("}"), h(function (e, n) {
                    for (var r = {}, i = 0; i < t.length; i++) {
                        var o = t[i];
                        r[o.key] = o.value(e, n)
                    }
                    return r
                }, {
                    literal: !0,
                    constant: e
                })
            }
        };
        var gr = {},
            yr = r("$sce"),
            br = {
                HTML: "html",
                CSS: "css",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            },
            jr = e.createElement("a"),
            $r = Oe(t.location.href, !0);
        He.$inject = ["$provide"], Be.$inject = ["$locale"], qe.$inject = ["$locale"];
        var xr = ".",
            wr = {
                yyyy: Qe("FullYear", 4),
                yy: Qe("FullYear", 2, 0, !0),
                y: Qe("FullYear", 1),
                MMMM: ze("Month"),
                MMM: ze("Month", !0),
                MM: Qe("Month", 2, 1),
                M: Qe("Month", 1, 1),
                dd: Qe("Date", 2),
                d: Qe("Date", 1),
                HH: Qe("Hours", 2),
                H: Qe("Hours", 1),
                hh: Qe("Hours", 2, -12),
                h: Qe("Hours", 1, -12),
                mm: Qe("Minutes", 2),
                m: Qe("Minutes", 1),
                ss: Qe("Seconds", 2),
                s: Qe("Seconds", 1),
                sss: Qe("Milliseconds", 3),
                EEEE: ze("Day"),
                EEE: ze("Day", !0),
                a: Xe,
                Z: We
            },
            Tr = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
            Cr = /^\-?\d+$/;
        Ye.$inject = ["$locale"];
        var Er = m(dn),
            kr = m(vn);
        Je.$inject = ["$parse"];
        var _r = m({
                restrict: "E",
                compile: function (t, n) {
                    if (yn <= 8 && (n.href || n.name || n.$set("href", ""), t.append(e.createComment("IE fix"))), !n.href && !n.xlinkHref && !n.name) return function (t, e) {
                        var n = "[object SVGAnimatedString]" === Cn.call(e.prop("href")) ? "xlink:href" : "href";
                        e.on("click", function (t) {
                            e.attr(n) || t.preventDefault()
                        })
                    }
                }
            }),
            Sr = {};
        o(zn, function (t, e) {
            if ("multiple" != t) {
                var n = Bt("ng-" + e);
                Sr[n] = function () {
                    return {
                        priority: 100,
                        link: function (t, r, i) {
                            t.$watch(i[n], function (t) {
                                i.$set(e, !!t)
                            })
                        }
                    }
                }
            }
        }), o(["onload", "src", "srcset", "href"], function (t) {
            var e = Bt("ng-" + t);
            Sr[e] = function () {
                return {
                    priority: 99,
                    link: function (n, r, i) {
                        var o = t,
                            s = t;
                        "href" === t && "[object SVGAnimatedString]" === Cn.call(r.prop("href")) && (s = "xlinkHref", i.$attr[s] = "xlink:href", o = null), i.$observe(e, function (t) {
                            t && (i.$set(s, t), yn && o && r.prop(o, i[s]))
                        })
                    }
                }
            }
        });
        var Mr = {
            $addControl: f,
            $removeControl: f,
            $setValidity: f,
            $setDirty: f,
            $setPristine: f
        };
        tn.$inject = ["$element", "$attrs", "$scope", "$animate"];
        var Pr = function (t) {
                return ["$timeout", function (e) {
                    var r = {
                        name: "form",
                        restrict: t ? "EAC" : "E",
                        controller: tn,
                        compile: function () {
                            return {
                                pre: function (t, r, i, o) {
                                    if (!i.action) {
                                        var s = function (t) {
                                            t.preventDefault ? t.preventDefault() : t.returnValue = !1
                                        };
                                        Rn(r[0], "submit", s), r.on("$destroy", function () {
                                            e(function () {
                                                On(r[0], "submit", s)
                                            }, 0, !1)
                                        })
                                    }
                                    var a = r.parent().controller("form"),
                                        l = i.name || i.ngForm;
                                    l && je(t, l, o, l), a && r.on("$destroy", function () {
                                        a.$removeControl(o), l && je(t, l, n, l), h(o, Mr)
                                    })
                                }
                            }
                        }
                    };
                    return r
                }]
            },
            Ar = Pr(),
            Nr = Pr(!0),
            Dr = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            Rr = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            Or = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            Lr = {
                text: on,
                number: sn,
                url: an,
                email: ln,
                radio: un,
                checkbox: cn,
                hidden: f,
                button: f,
                submit: f,
                reset: f,
                file: f
            },
            Ir = ["badInput"],
            Hr = ["$browser", "$sniffer", function (t, e) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function (n, r, i, o) {
                        o && (Lr[dn(i.type)] || Lr.text)(n, r, i, o, e, t)
                    }
                }
            }],
            Fr = "ng-valid",
            Br = "ng-invalid",
            qr = "ng-pristine",
            Ur = "ng-dirty",
            Vr = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (t, e, n, i, s, a) {
                function l(t, e) {
                    e = e ? "-" + Z(e, "-") : "", a.removeClass(i, (t ? Br : Fr) + e), a.addClass(i, (t ? Fr : Br) + e)
                }
                this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
                var u = s(n.ngModel),
                    c = u.assign;
                if (!c) throw r("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", n.ngModel, Q(i));
                this.$render = f, this.$isEmpty = function (t) {
                    return g(t) || "" === t || null === t || t !== t
                };
                var h = i.inheritedData("$formController") || Mr,
                    p = 0,
                    d = this.$error = {};
                i.addClass(qr), l(!0), this.$setValidity = function (t, e) {
                    d[t] !== !e && (e ? (d[t] && p--, p || (l(!0), this.$valid = !0, this.$invalid = !1)) : (l(!1), this.$invalid = !0, this.$valid = !1, p++), d[t] = !e, l(e, t), h.$setValidity(t, e, this))
                }, this.$setPristine = function () {
                    this.$dirty = !1, this.$pristine = !0, a.removeClass(i, Ur), a.addClass(i, qr)
                }, this.$setViewValue = function (n) {
                    this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, a.removeClass(i, qr), a.addClass(i, Ur), h.$setDirty()), o(this.$parsers, function (t) {
                        n = t(n)
                    }), this.$modelValue !== n && (this.$modelValue = n, c(t, n), o(this.$viewChangeListeners, function (t) {
                        try {
                            t()
                        } catch (n) {
                            e(n)
                        }
                    }))
                };
                var v = this;
                t.$watch(function () {
                    var e = u(t);
                    if (v.$modelValue !== e) {
                        var n = v.$formatters,
                            r = n.length;
                        for (v.$modelValue = e; r--;) e = n[r](e);
                        v.$viewValue !== e && (v.$viewValue = e, v.$render())
                    }
                    return e
                })
            }],
            Qr = function () {
                return {
                    require: ["ngModel", "^?form"],
                    controller: Vr,
                    link: function (t, e, n, r) {
                        var i = r[0],
                            o = r[1] || Mr;
                        o.$addControl(i), t.$on("$destroy", function () {
                            o.$removeControl(i)
                        })
                    }
                }
            },
            zr = m({
                require: "ngModel",
                link: function (t, e, n, r) {
                    r.$viewChangeListeners.push(function () {
                        t.$eval(n.ngChange)
                    })
                }
            }),
            Wr = function () {
                return {
                    require: "?ngModel",
                    link: function (t, e, n, r) {
                        if (r) {
                            n.required = !0;
                            var i = function (t) {
                                return n.required && r.$isEmpty(t) ? void r.$setValidity("required", !1) : (r.$setValidity("required", !0), t)
                            };
                            r.$formatters.push(i), r.$parsers.unshift(i), n.$observe("required", function () {
                                i(r.$viewValue)
                            })
                        }
                    }
                }
            },
            Xr = function () {
                return {
                    require: "ngModel",
                    link: function (t, e, r, i) {
                        var s = /\/(.*)\//.exec(r.ngList),
                            a = s && new RegExp(s[1]) || r.ngList || ",",
                            l = function (t) {
                                if (!g(t)) {
                                    var e = [];
                                    return t && o(t.split(a), function (t) {
                                        t && e.push(Mn(t))
                                    }), e
                                }
                            };
                        i.$parsers.push(l), i.$formatters.push(function (t) {
                            return Sn(t) ? t.join(", ") : n
                        }), i.$isEmpty = function (t) {
                            return !t || !t.length
                        }
                    }
                }
            },
            Yr = /^(true|false|\d+)$/,
            Gr = function () {
                return {
                    priority: 100,
                    compile: function (t, e) {
                        return Yr.test(e.ngValue) ? function (t, e, n) {
                            n.$set("value", t.$eval(n.ngValue))
                        } : function (t, e, n) {
                            t.$watch(n.ngValue, function (t) {
                                n.$set("value", t)
                            })
                        }
                    }
                }
            },
            Kr = Ze({
                compile: function (t) {
                    return t.addClass("ng-binding"),
                        function (t, e, r) {
                            e.data("$binding", r.ngBind), t.$watch(r.ngBind, function (t) {
                                e.text(t == n ? "" : t)
                            })
                        }
                }
            }),
            Jr = ["$interpolate", function (t) {
                return function (e, n, r) {
                    var i = t(n.attr(r.$attr.ngBindTemplate));
                    n.addClass("ng-binding").data("$binding", i), r.$observe("ngBindTemplate", function (t) {
                        n.text(t)
                    })
                }
            }],
            Zr = ["$sce", "$parse", function (t, e) {
                return function (n, r, i) {
                    function o() {
                        return (s(n) || "").toString()
                    }
                    r.addClass("ng-binding").data("$binding", i.ngBindHtml);
                    var s = e(i.ngBindHtml);
                    n.$watch(o, function (e) {
                        r.html(t.getTrustedHtml(s(n)) || "")
                    })
                }
            }],
            ti = hn("", !0),
            ei = hn("Odd", 0),
            ni = hn("Even", 1),
            ri = Ze({
                compile: function (t, e) {
                    e.$set("ngCloak", n), t.removeClass("ng-cloak")
                }
            }),
            ii = [function () {
                return {
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }],
            oi = {};
        o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
            var e = Bt("ng-" + t);
            oi[e] = ["$parse", function (n) {
                return {
                    compile: function (r, i) {
                        var o = n(i[e]);
                        return function (e, n) {
                            n.on(dn(t), function (t) {
                                e.$apply(function () {
                                    o(e, {
                                        $event: t
                                    })
                                })
                            })
                        }
                    }
                }
            }]
        });
        var si = ["$animate", function (t) {
                return {
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function (n, r, i, o, s) {
                        var a, l, u;
                        n.$watch(i.ngIf, function (o) {
                            V(o) ? l || (l = n.$new(), s(l, function (n) {
                                n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), a = {
                                    clone: n
                                }, t.enter(n, r.parent(), r)
                            })) : (u && (u.remove(), u = null), l && (l.$destroy(), l = null), a && (u = ot(a.clone), t.leave(u, function () {
                                u = null
                            }), a = null))
                        })
                    }
                }
            }],
            ai = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (t, e, n, r, i) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: kn.noop,
                    compile: function (o, s) {
                        var a = s.ngInclude || s.src,
                            l = s.onload || "",
                            u = s.autoscroll;
                        return function (o, s, c, h, p) {
                            var d, f, v, m = 0,
                                g = function () {
                                    f && (f.remove(), f = null), d && (d.$destroy(), d = null), v && (r.leave(v, function () {
                                        f = null
                                    }), f = v, v = null)
                                };
                            o.$watch(i.parseAsResourceUrl(a), function (i) {
                                var a = function () {
                                        !y(u) || u && !o.$eval(u) || n()
                                    },
                                    c = ++m;
                                i ? (t.get(i, {
                                    cache: e
                                }).success(function (t) {
                                    if (c === m) {
                                        var e = o.$new();
                                        h.template = t;
                                        var n = p(e, function (t) {
                                            g(), r.enter(t, null, s, a)
                                        });
                                        d = e, v = n, d.$emit("$includeContentLoaded"), o.$eval(l)
                                    }
                                }).error(function () {
                                    c === m && g()
                                }), o.$emit("$includeContentRequested")) : (g(), h.template = null)
                            })
                        }
                    }
                }
            }],
            li = ["$compile", function (t) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function (e, n, r, i) {
                        n.html(i.template), t(n.contents())(e)
                    }
                }
            }],
            ui = Ze({
                priority: 450,
                compile: function () {
                    return {
                        pre: function (t, e, n) {
                            t.$eval(n.ngInit)
                        }
                    }
                }
            }),
            ci = Ze({
                terminal: !0,
                priority: 1e3
            }),
            hi = ["$locale", "$interpolate", function (t, e) {
                var n = /{}/g;
                return {
                    restrict: "EA",
                    link: function (r, i, s) {
                        var a = s.count,
                            l = s.$attr.when && i.attr(s.$attr.when),
                            u = s.offset || 0,
                            c = r.$eval(l) || {},
                            h = {},
                            p = e.startSymbol(),
                            d = e.endSymbol(),
                            f = /^when(Minus)?(.+)$/;
                        o(s, function (t, e) {
                            f.test(e) && (c[dn(e.replace("when", "").replace("Minus", "-"))] = i.attr(s.$attr[e]))
                        }), o(c, function (t, r) {
                            h[r] = e(t.replace(n, p + a + "-" + u + d))
                        }), r.$watch(function () {
                            var e = parseFloat(r.$eval(a));
                            return isNaN(e) ? "" : (e in c || (e = t.pluralCat(e - u)), h[e](r, i, !0))
                        }, function (t) {
                            i.text(t)
                        })
                    }
                }
            }],
            pi = ["$parse", "$animate", function (t, n) {
                function s(t) {
                    return t.clone[0]
                }

                function a(t) {
                    return t.clone[t.clone.length - 1]
                }
                var l = "$$NG_REMOVED",
                    u = r("ngRepeat");
                return {
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    link: function (r, c, h, p, d) {
                        var f, v, m, g, y, b, j, $, x, w = h.ngRepeat,
                            T = w.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                            C = {
                                $id: Mt
                            };
                        if (!T) throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", w);
                        if (b = T[1], j = T[2], f = T[3], f ? (v = t(f), m = function (t, e, n) {
                                return x && (C[x] = t), C[$] = e, C.$index = n, v(r, C)
                            }) : (g = function (t, e) {
                                return Mt(e)
                            }, y = function (t) {
                                return t
                            }), T = b.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !T) throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", b);
                        $ = T[3] || T[1], x = T[2];
                        var E = {};
                        r.$watchCollection(j, function (t) {
                            var h, p, f, v, b, j, T, C, k, _, S, M, P = c[0],
                                A = {},
                                N = [];
                            if (i(t)) _ = t, k = m || g;
                            else {
                                k = m || y, _ = [];
                                for (j in t) t.hasOwnProperty(j) && "$" != j.charAt(0) && _.push(j);
                                _.sort()
                            }
                            for (v = _.length, p = N.length = _.length, h = 0; h < p; h++)
                                if (j = t === _ ? h : _[h], T = t[j], C = k(j, T, h), rt(C, "`track by` id"), E.hasOwnProperty(C)) S = E[C], delete E[C], A[C] = S, N[h] = S;
                                else {
                                    if (A.hasOwnProperty(C)) throw o(N, function (t) {
                                        t && t.scope && (E[t.id] = t)
                                    }), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", w, C);
                                    N[h] = {
                                        id: C
                                    }, A[C] = !1
                                }
                            for (j in E) E.hasOwnProperty(j) && (S = E[j], M = ot(S.clone), n.leave(M), o(M, function (t) {
                                t[l] = !0
                            }), S.scope.$destroy());
                            for (h = 0, p = _.length; h < p; h++) {
                                if (j = t === _ ? h : _[h], T = t[j], S = N[h], N[h - 1] && (P = a(N[h - 1])), S.scope) {
                                    b = S.scope, f = P;
                                    do f = f.nextSibling; while (f && f[l]);
                                    s(S) != f && n.move(ot(S.clone), null, bn(P)), P = a(S)
                                } else b = r.$new();
                                b[$] = T, x && (b[x] = j), b.$index = h, b.$first = 0 === h, b.$last = h === v - 1, b.$middle = !(b.$first || b.$last), b.$odd = !(b.$even = 0 === (1 & h)), S.scope || d(b, function (t) {
                                    t[t.length++] = e.createComment(" end ngRepeat: " + w + " "), n.enter(t, null, bn(P)), P = t, S.scope = b, S.clone = t, A[S.id] = S
                                })
                            }
                            E = A
                        })
                    }
                }
            }],
            di = ["$animate", function (t) {
                return function (e, n, r) {
                    e.$watch(r.ngShow, function (e) {
                        t[V(e) ? "removeClass" : "addClass"](n, "ng-hide")
                    })
                }
            }],
            fi = ["$animate", function (t) {
                return function (e, n, r) {
                    e.$watch(r.ngHide, function (e) {
                        t[V(e) ? "addClass" : "removeClass"](n, "ng-hide")
                    })
                }
            }],
            vi = Ze(function (t, e, n) {
                t.$watch(n.ngStyle, function (t, n) {
                    n && t !== n && o(n, function (t, n) {
                        e.css(n, "")
                    }), t && e.css(t)
                }, !0)
            }),
            mi = ["$animate", function (t) {
                return {
                    restrict: "EA",
                    require: "ngSwitch",
                    controller: ["$scope", function () {
                        this.cases = {}
                    }],
                    link: function (e, n, r, i) {
                        var s = r.ngSwitch || r.on,
                            a = [],
                            l = [],
                            u = [],
                            c = [];
                        e.$watch(s, function (n) {
                            var s, h;
                            for (s = 0, h = u.length; s < h; ++s) u[s].remove();
                            for (u.length = 0, s = 0, h = c.length; s < h; ++s) {
                                var p = l[s];
                                c[s].$destroy(), u[s] = p, t.leave(p, function () {
                                    u.splice(s, 1)
                                })
                            }
                            l.length = 0, c.length = 0, (a = i.cases["!" + n] || i.cases["?"]) && (e.$eval(r.change), o(a, function (n) {
                                var r = e.$new();
                                c.push(r), n.transclude(r, function (e) {
                                    var r = n.element;
                                    l.push(e), t.enter(e, r.parent(), r)
                                })
                            }))
                        })
                    }
                }
            }],
            gi = Ze({
                transclude: "element",
                priority: 800,
                require: "^ngSwitch",
                link: function (t, e, n, r, i) {
                    r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                        transclude: i,
                        element: e
                    })
                }
            }),
            yi = Ze({
                transclude: "element",
                priority: 800,
                require: "^ngSwitch",
                link: function (t, e, n, r, i) {
                    r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                        transclude: i,
                        element: e
                    })
                }
            }),
            bi = Ze({
                link: function (t, e, n, i, o) {
                    if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Q(e));
                    o(function (t) {
                        e.empty(), e.append(t)
                    })
                }
            }),
            ji = ["$templateCache", function (t) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function (e, n) {
                        if ("text/ng-template" == n.type) {
                            var r = n.id,
                                i = e[0].text;
                            t.put(r, i)
                        }
                    }
                }
            }],
            $i = r("ngOptions"),
            xi = m({
                terminal: !0
            }),
            wi = ["$compile", "$parse", function (t, r) {
                var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                    a = {
                        $setViewValue: f
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs", function (t, e, n) {
                        var r, i, o = this,
                            s = {},
                            l = a;
                        o.databound = n.ngModel, o.init = function (t, e, n) {
                            l = t, r = e, i = n
                        }, o.addOption = function (e) {
                            rt(e, '"option value"'), s[e] = !0, l.$viewValue == e && (t.val(e), i.parent() && i.remove())
                        }, o.removeOption = function (t) {
                            this.hasOption(t) && (delete s[t], l.$viewValue == t && this.renderUnknownOption(t))
                        }, o.renderUnknownOption = function (e) {
                            var n = "? " + Mt(e) + " ?";
                            i.val(n), t.prepend(i), t.val(n), i.prop("selected", !0)
                        }, o.hasOption = function (t) {
                            return s.hasOwnProperty(t)
                        }, e.$on("$destroy", function () {
                            o.renderUnknownOption = f
                        })
                    }],
                    link: function (a, l, u, c) {
                        function h(t, e, n, r) {
                            n.$render = function () {
                                var t = n.$viewValue;
                                r.hasOption(t) ? (T.parent() && T.remove(), e.val(t), "" === t && f.prop("selected", !0)) : g(t) && f ? e.val("") : r.renderUnknownOption(t)
                            }, e.on("change", function () {
                                t.$apply(function () {
                                    T.parent() && T.remove(), n.$setViewValue(e.val())
                                })
                            })
                        }

                        function p(t, e, n) {
                            var r;
                            n.$render = function () {
                                var t = new Pt(n.$viewValue);
                                o(e.find("option"), function (e) {
                                    e.selected = y(t.get(e.value))
                                })
                            }, t.$watch(function () {
                                O(r, n.$viewValue) || (r = R(n.$viewValue), n.$render())
                            }), e.on("change", function () {
                                t.$apply(function () {
                                    var t = [];
                                    o(e.find("option"), function (e) {
                                        e.selected && t.push(e.value)
                                    }), n.$setViewValue(t)
                                })
                            })
                        }

                        function d(e, o, a) {
                            function l() {
                                var t, n, r, i, l, u, m, j, C, E, k, _, S, M, P, A = {
                                        "": []
                                    },
                                    N = [""],
                                    D = a.$modelValue,
                                    R = v(e) || [],
                                    O = p ? s(R) : R,
                                    L = {},
                                    I = !1;
                                if (b)
                                    if (g && Sn(D)) {
                                        I = new Pt([]);
                                        for (var H = 0; H < D.length; H++) L[h] = D[H], I.put(g(e, L), D[H])
                                    } else I = new Pt(D);
                                for (k = 0; C = O.length, k < C; k++) {
                                    if (m = k, p) {
                                        if (m = O[k], "$" === m.charAt(0)) continue;
                                        L[p] = m
                                    }
                                    if (L[h] = R[m], t = d(e, L) || "", (n = A[t]) || (n = A[t] = [], N.push(t)), b) _ = y(I.remove(g ? g(e, L) : f(e, L)));
                                    else {
                                        if (g) {
                                            var F = {};
                                            F[h] = D, _ = g(e, F) === g(e, L)
                                        } else _ = D === f(e, L);
                                        I = I || _
                                    }
                                    P = c(e, L), P = y(P) ? P : "", n.push({
                                        id: g ? g(e, L) : p ? O[k] : k,
                                        label: P,
                                        selected: _
                                    })
                                }
                                for (b || ($ || null === D ? A[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !I
                                    }) : I || A[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), E = 0, j = N.length; E < j; E++) {
                                    for (t = N[E], n = A[t], T.length <= E ? (i = {
                                            element: w.clone().attr("label", t),
                                            label: n.label
                                        }, l = [i], T.push(l), o.append(i.element)) : (l = T[E], i = l[0], i.label != t && i.element.attr("label", i.label = t)), S = null, k = 0, C = n.length; k < C; k++) r = n[k], (u = l[k + 1]) ? (S = u.element, u.label !== r.label && S.text(u.label = r.label), u.id !== r.id && S.val(u.id = r.id), u.selected !== r.selected && S.prop("selected", u.selected = r.selected)) : ("" === r.id && $ ? M = $ : (M = x.clone()).val(r.id).prop("selected", r.selected).text(r.label), l.push(u = {
                                        element: M,
                                        label: r.label,
                                        id: r.id,
                                        selected: r.selected
                                    }), S ? S.after(M) : i.element.append(M), S = M);
                                    for (k++; l.length > k;) l.pop().element.remove()
                                }
                                for (; T.length > E;) T.pop()[0].element.remove()
                            }
                            var u;
                            if (!(u = j.match(i))) throw $i("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", j, Q(o));
                            var c = r(u[2] || u[1]),
                                h = u[4] || u[6],
                                p = u[5],
                                d = r(u[3] || ""),
                                f = r(u[2] ? u[1] : h),
                                v = r(u[7]),
                                m = u[8],
                                g = m ? r(u[8]) : null,
                                T = [[{
                                    element: o,
                                    label: ""
                                }]];
                            $ && (t($)(e), $.removeClass("ng-scope"), $.remove()), o.empty(), o.on("change", function () {
                                e.$apply(function () {
                                    var t, r, i, s, l, u, c, d, m, y = v(e) || [],
                                        j = {};
                                    if (b) {
                                        for (i = [], u = 0, d = T.length; u < d; u++)
                                            for (t = T[u], l = 1, c = t.length; l < c; l++)
                                                if ((s = t[l].element)[0].selected) {
                                                    if (r = s.val(), p && (j[p] = r), g)
                                                        for (m = 0; m < y.length && (j[h] = y[m], g(e, j) != r); m++);
                                                    else j[h] = y[r];
                                                    i.push(f(e, j))
                                                }
                                    } else {
                                        if (r = o.val(), "?" == r) i = n;
                                        else if ("" === r) i = null;
                                        else if (g) {
                                            for (m = 0; m < y.length; m++)
                                                if (j[h] = y[m], g(e, j) == r) {
                                                    i = f(e, j);
                                                    break
                                                }
                                        } else j[h] = y[r], p && (j[p] = r), i = f(e, j);
                                        T[0].length > 1 && T[0][1].id !== r && (T[0][1].selected = !1)
                                    }
                                    a.$setViewValue(i)
                                })
                            }), a.$render = l, e.$watch(l)
                        }
                        if (c[1]) {
                            for (var f, v = c[0], m = c[1], b = u.multiple, j = u.ngOptions, $ = !1, x = bn(e.createElement("option")), w = bn(e.createElement("optgroup")), T = x.clone(), C = 0, E = l.children(), k = E.length; C < k; C++)
                                if ("" === E[C].value) {
                                    f = $ = E.eq(C);
                                    break
                                }
                            v.init(m, $, T), b && (m.$isEmpty = function (t) {
                                return !t || 0 === t.length
                            }), j ? d(a, l, m) : b ? p(a, l, m) : h(a, l, m, v)
                        }
                    }
                }
            }],
            Ti = ["$interpolate", function (t) {
                var e = {
                    addOption: f,
                    removeOption: f
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function (n, r) {
                        if (g(r.value)) {
                            var i = t(n.text(), !0);
                            i || r.$set("value", n.text())
                        }
                        return function (t, n, r) {
                            var o = "$selectController",
                                s = n.parent(),
                                a = s.data(o) || s.parent().data(o);
                            a && a.databound ? n.prop("selected", !1) : a = e, i ? t.$watch(i, function (t, e) {
                                r.$set("value", t), t !== e && a.removeOption(e), a.addOption(t)
                            }) : a.addOption(r.value), n.on("$destroy", function () {
                                a.removeOption(r.value)
                            })
                        }
                    }
                }
            }],
            Ci = m({
                restrict: "E",
                terminal: !0
            });
        return t.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (tt(), at(kn), void bn(e).ready(function () {
            K(e, J)
        }))
    }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'),
    function (t, e, n) {
        "use strict";

        function r() {
            function t(t, n) {
                return e.extend(new(e.extend(function () {}, {
                    prototype: t
                })), n)
            }

            function n(t, e) {
                var n = e.caseInsensitiveMatch,
                    r = {
                        originalPath: t,
                        regexp: t
                    },
                    i = r.keys = [];
                return t = t.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (t, e, n, r) {
                    var o = "?" === r ? r : null,
                        s = "*" === r ? r : null;
                    return i.push({
                        name: n,
                        optional: !!o
                    }), e = e || "", "" + (o ? "" : e) + "(?:" + (o ? e : "") + (s && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "")
                }).replace(/([\/$\*])/g, "\\$1"), r.regexp = new RegExp("^" + t + "$", n ? "i" : ""), r
            }
            var r = {};
            this.when = function (t, i) {
                if (r[t] = e.extend({
                        reloadOnSearch: !0
                    }, i, t && n(t, i)), t) {
                    var o = "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t + "/";
                    r[o] = e.extend({
                        redirectTo: t
                    }, n(o, i))
                }
                return this
            }, this.otherwise = function (t) {
                return this.when(null, t), this
            }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function (n, i, o, s, a, l, u, c) {
                function h(t, e) {
                    var n = e.keys,
                        r = {};
                    if (!e.regexp) return null;
                    var i = e.regexp.exec(t);
                    if (!i) return null;
                    for (var o = 1, s = i.length; o < s; ++o) {
                        var a = n[o - 1],
                            l = "string" == typeof i[o] ? decodeURIComponent(i[o]) : i[o];
                        a && l && (r[a.name] = l)
                    }
                    return r
                }

                function p() {
                    var t = d(),
                        r = m.current;
                    t && r && t.$$route === r.$$route && e.equals(t.pathParams, r.pathParams) && !t.reloadOnSearch && !v ? (r.params = t.params, e.copy(r.params, o), n.$broadcast("$routeUpdate", r)) : (t || r) && (v = !1, n.$broadcast("$routeChangeStart", t, r), m.current = t, t && t.redirectTo && (e.isString(t.redirectTo) ? i.path(f(t.redirectTo, t.params)).search(t.params).replace() : i.url(t.redirectTo(t.pathParams, i.path(), i.search())).replace()), s.when(t).then(function () {
                        if (t) {
                            var n, r, i = e.extend({}, t.resolve);
                            return e.forEach(i, function (t, n) {
                                i[n] = e.isString(t) ? a.get(t) : a.invoke(t)
                            }), e.isDefined(n = t.template) ? e.isFunction(n) && (n = n(t.params)) : e.isDefined(r = t.templateUrl) && (e.isFunction(r) && (r = r(t.params)), r = c.getTrustedResourceUrl(r), e.isDefined(r) && (t.loadedTemplateUrl = r, n = l.get(r, {
                                cache: u
                            }).then(function (t) {
                                return t.data
                            }))), e.isDefined(n) && (i.$template = n), s.all(i)
                        }
                    }).then(function (i) {
                        t == m.current && (t && (t.locals = i, e.copy(t.params, o)), n.$broadcast("$routeChangeSuccess", t, r))
                    }, function (e) {
                        t == m.current && n.$broadcast("$routeChangeError", t, r, e)
                    }))
                }

                function d() {
                    var n, o;
                    return e.forEach(r, function (r, s) {
                        !o && (n = h(i.path(), r)) && (o = t(r, {
                            params: e.extend({}, i.search(), n),
                            pathParams: n
                        }), o.$$route = r)
                    }), o || r[null] && t(r[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function f(t, n) {
                    var r = [];
                    return e.forEach((t || "").split(":"), function (t, e) {
                        if (0 === e) r.push(t);
                        else {
                            var i = t.match(/(\w+)(.*)/),
                                o = i[1];
                            r.push(n[o]), r.push(i[2] || ""), delete n[o]
                        }
                    }), r.join("")
                }
                var v = !1,
                    m = {
                        routes: r,
                        reload: function () {
                            v = !0, n.$evalAsync(p)
                        }
                    };
                return n.$on("$locationChangeSuccess", p), m
            }]
        }

        function i() {
            this.$get = function () {
                return {}
            }
        }

        function o(t, n, r) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                link: function (i, o, s, a, l) {
                    function u() {
                        d && (d.remove(), d = null), h && (h.$destroy(), h = null), p && (r.leave(p, function () {
                            d = null
                        }), d = p, p = null)
                    }

                    function c() {
                        var s = t.current && t.current.locals,
                            a = s && s.$template;
                        if (e.isDefined(a)) {
                            var c = i.$new(),
                                d = t.current,
                                m = l(c, function (t) {
                                    r.enter(t, null, p || o, function () {
                                        !e.isDefined(f) || f && !i.$eval(f) || n()
                                    }), u()
                                });
                            p = m, h = d.scope = c, h.$emit("$viewContentLoaded"), h.$eval(v)
                        } else u()
                    }
                    var h, p, d, f = s.autoscroll,
                        v = s.onload || "";
                    i.$on("$routeChangeSuccess", c), c()
                }
            }
        }

        function s(t, e, n) {
            return {
                restrict: "ECA",
                priority: -400,
                link: function (r, i) {
                    var o = n.current,
                        s = o.locals;
                    i.html(s.$template);
                    var a = t(i.contents());
                    if (o.controller) {
                        s.$scope = r;
                        var l = e(o.controller, s);
                        o.controllerAs && (r[o.controllerAs] = l), i.data("$ngControllerController", l), i.children().data("$ngControllerController", l)
                    }
                    a(r)
                }
            }
        }
        var a = e.module("ngRoute", ["ng"]).provider("$route", r);
        a.provider("$routeParams", i), a.directive("ngView", o), a.directive("ngView", s), o.$inject = ["$route", "$anchorScroll", "$animate"], s.$inject = ["$compile", "$controller", "$route"]
    }(window, window.angular),
    function (t) {
        t.module("me-lazyload", []).directive("lazySrc", ["$window", "$document", function (e, n) {
            function r(t) {
                var e = t.data("__uid");
                return e || t.data("__uid", e = "" + ++d), e
            }

            function i() {
                var t, e = "number" == typeof h.pageXOffset ? h.pageXOffset : (((t = u.documentElement) || (t = c.parentNode)) && "number" == typeof t.scrollLeft ? t : c).scrollLeft,
                    n = "number" == typeof h.pageYOffset ? h.pageYOffset : (((t = u.documentElement) || (t = c.parentNode)) && "number" == typeof t.scrollTop ? t : c).scrollTop;
                return {
                    offsetX: e,
                    offsetY: n
                }
            }

            function o(t) {
                var e, n, r = t[0],
                    o = r.getBoundingClientRect(),
                    s = i(),
                    a = s.offsetX,
                    l = s.offsetY,
                    c = o.width || r.width,
                    p = o.height || r.height,
                    d = o.left + a,
                    f = o.top + l,
                    v = Math.max(u.documentElement.clientWidth, h.innerWidth || 0),
                    m = Math.max(u.documentElement.clientHeight, h.innerHeight || 0);
                return f <= l ? f + p >= l && (n = !0) : f >= l && f <= l + m && (n = !0), d <= a ? d + c >= a && (e = !0) : d >= a && d <= a + v && (e = !0), e && n
            }

            function s() {
                t.forEach(f, function (t, e) {
                    var n = t.iElement,
                        r = t.$scope;
                    o(n) && n.attr("src", r.lazySrc)
                })
            }

            function a() {
                var e = t.element(this),
                    n = r(e);
                e.css("opacity", 1), f.hasOwnProperty(n) && delete f[n]
            }

            function l() {
                var e = t.element(this),
                    n = r(e);
                e.unbind("load"), f.hasOwnProperty(n) && delete f[n]
            }
            var u = n[0],
                c = u.body,
                h = e,
                p = t.element(h),
                d = 0,
                f = {};
            return p.bind("scroll", s), p.bind("resize", s), {
                restrict: "A",
                scope: {
                    lazySrc: "@",
                    animateVisible: "@",
                    animateSpeed: "@"
                },
                link: function (t, e) {
                    e.bind("load", a), e.bind("error", l), t.$watch("lazySrc", function () {
                        var n = "0.5s";
                        if (null != t.animateSpeed && (n = t.animateSpeed), o(e)) t.animateVisible && e.css({
                            opacity: 0,
                            "-webkit-transition": "opacity " + n,
                            transition: "opacity " + n
                        }), e.attr("src", t.lazySrc);
                        else {
                            var i = r(e);
                            e.css({
                                opacity: 0,
                                "-webkit-transition": "opacity " + n,
                                transition: "opacity " + n
                            }), f[i] = {
                                iElement: e,
                                $scope: t
                            }
                        }
                    }), t.$on("$destroy", function () {
                        e.unbind("load");
                        var t = r(e);
                        f.hasOwnProperty(t) && delete f[t]
                    })
                }
            }
        }])
    }(angular), angular.module("ngCookies", ["ng"]).provider("$cookies", [function () {
        function t(t) {
            return t ? angular.extend({}, e, t) : e
        }
        var e = this.defaults = {};
        this.$get = ["$$cookieReader", "$$cookieWriter", function (e, n) {
            return {
                get: function (t) {
                    return e()[t]
                },
                getObject: function (t) {
                    var e = this.get(t);
                    return e ? angular.fromJson(e) : e
                },
                getAll: function () {
                    return e()
                },
                put: function (e, r, i) {
                    n(e, r, t(i))
                },
                putObject: function (t, e, n) {
                    this.put(t, angular.toJson(e), n)
                },
                remove: function (e, r) {
                    n(e, void 0, t(r))
                }
            }
        }]
    }]), $$CookieReader.$inject = ["$document"], angular.module("ngCookies").provider("$$cookieReader", function () {
        this.$get = $$CookieReader
    }), $$CookieWriter.$inject = ["$document", "$log", "$browser"], angular.module("ngCookies").provider("$$cookieWriter", function () {
        this.$get = $$CookieWriter
    }),
    function (t, e, n) {
        "use strict";

        function r(t, e, n) {
            o.directive(t, ["$parse", "$swipe", function (r, i) {
                var o = 75,
                    s = .3,
                    a = 30;
                return function (l, u, c) {
                    function h(t) {
                        if (!p) return !1;
                        var n = Math.abs(t.y - p.y),
                            r = (t.x - p.x) * e;
                        return d && n < o && r > 0 && r > a && n / r < s
                    }
                    var p, d, f = r(c[t]);
                    i.bind(u, {
                        start: function (t, e) {
                            p = t, d = !0
                        },
                        cancel: function (t) {
                            d = !1
                        },
                        end: function (t, e) {
                            h(t) && l.$apply(function () {
                                u.triggerHandler(n), f(l, {
                                    $event: e
                                })
                            })
                        }
                    })
                }
            }])
        }

        function i(t, e, n) {
            o.directive(t, ["$parse", "$swipe", function (r, i) {
                var o = 75,
                    s = .3,
                    a = 30;
                return function (l, u, c) {
                    function h(t) {
                        if (!p) return !1;
                        var n = Math.abs(t.x - p.x),
                            r = (t.y - p.y) * e;
                        return d && n < o && r > 0 && r > a && n / r < s
                    }
                    var p, d, f = r(c[t]);
                    i.bind(u, {
                        start: function (t, e) {
                            p = t, d = !0
                        },
                        cancel: function (t) {
                            d = !1
                        },
                        end: function (t, e) {
                            h(t) && l.$apply(function () {
                                u.triggerHandler(n), f(l, {
                                    $event: e
                                })
                            })
                        }
                    })
                }
            }])
        }
        var o = e.module("ngTouch", []);
        o.factory("$swipe", [function () {
            function t(t) {
                var e = t.touches && t.touches.length ? t.touches : [t],
                    n = t.changedTouches && t.changedTouches[0] || t.originalEvent && t.originalEvent.changedTouches && t.originalEvent.changedTouches[0] || e[0].originalEvent || e[0];
                return {
                    x: n.clientX,
                    y: n.clientY
                }
            }
            var e = 10;
            return {
                bind: function (n, r) {
                    var i, o, s, a, l = !1;
                    n.on("touchstart mousedown", function (e) {
                        s = t(e), l = !0, i = 0, o = 0, a = s, r.start && r.start(s, e)
                    }), n.on("touchcancel", function (t) {
                        l = !1, r.cancel && r.cancel(t)
                    }), n.on("touchmove mousemove", function (n) {
                        if (l && s) {
                            var u = t(n);
                            i += Math.abs(u.x - a.x), o += Math.abs(u.y - a.y), a = u, i < e && o < e || (i > o && n.preventDefault(), r.move && r.move(u, n))
                        }
                    }), n.on("touchend mouseup", function (e) {
                        l && (l = !1, r.end && r.end(t(e), e))
                    })
                }
            }
        }]), o.config(["$provide", function (t) {
            t.decorator("ngClickDirective", ["$delegate", function (t) {
                return t.shift(), t
            }])
        }]), o.directive("ngClick", ["$parse", "$timeout", "$rootElement", function (t, n, r) {
            function i(t, e, n, r) {
                return Math.abs(t - n) < v && Math.abs(e - r) < v
            }

            function o(t, e, n) {
                for (var r = 0; r < t.length; r += 2)
                    if (i(t[r], t[r + 1], e, n)) return t.splice(r, r + 2), !0;
                return !1
            }

            function s(t) {
                if (!(Date.now() - u > f)) {
                    var e = t.touches && t.touches.length ? t.touches : [t],
                        n = e[0].clientX,
                        r = e[0].clientY;
                    n < 1 && r < 1 || h && h[0] === n && h[1] === r || (h && (h = null), "label" === t.target.tagName.toLowerCase() && (h = [n, r]), o(c, n, r) || (t.stopPropagation(), t.preventDefault(), t.target && t.target.blur()))
                }
            }

            function a(t) {
                var e = t.touches && t.touches.length ? t.touches : [t],
                    r = e[0].clientX,
                    i = e[0].clientY;
                c.push(r, i), n(function () {
                    for (var t = 0; t < c.length; t += 2)
                        if (c[t] == r && c[t + 1] == i) return void c.splice(t, t + 2)
                }, f, !1)
            }

            function l(t, e) {
                c || (r[0].addEventListener("click", s, !0), r[0].addEventListener("touchstart", a, !0), c = []), u = Date.now(), o(c, t, e)
            }
            var u, c, h, p = 750,
                d = 12,
                f = 2500,
                v = 25,
                m = "ng-click-active";
            return function (n, r, i) {
                function o() {
                    f = !1, r.removeClass(m)
                }
                var s, a, u, c, h = t(i.ngClick),
                    f = !1;
                r.on("touchstart", function (t) {
                    f = !0, s = t.target ? t.target : t.srcElement, 3 == s.nodeType && (s = s.parentNode), r.addClass(m), a = Date.now();
                    var e = t.touches && t.touches.length ? t.touches : [t],
                        n = e[0].originalEvent || e[0];
                    u = n.clientX, c = n.clientY
                }), r.on("touchmove", function (t) {
                    o()
                }), r.on("touchcancel", function (t) {
                    o()
                }), r.on("touchend", function (t) {
                    var n = Date.now() - a,
                        h = t.changedTouches && t.changedTouches.length ? t.changedTouches : t.touches && t.touches.length ? t.touches : [t],
                        v = h[0].originalEvent || h[0],
                        m = v.clientX,
                        g = v.clientY,
                        y = Math.sqrt(Math.pow(m - u, 2) + Math.pow(g - c, 2));
                    f && n < p && y < d && (l(m, g), s && s.blur(), e.isDefined(i.disabled) && i.disabled !== !1 || r.triggerHandler("click", [t])), o()
                }), r.onclick = function (t) {}, r.on("click", function (t, e) {
                    n.$apply(function () {
                        h(n, {
                            $event: e || t
                        })
                    })
                }), r.on("mousedown", function (t) {
                    r.addClass(m)
                }), r.on("mousemove mouseup", function (t) {
                    r.removeClass(m)
                })
            }
        }]), r("ngSwipeLeft", -1, "swipeleft"), r("ngSwipeRight", 1, "swiperight"), i("ngSwipeUp", -1, "swipeup"), i("ngSwipeDown", 1, "swipedown")
    }(window, window.angular),
    function (t, e, n) {
        "use strict";

        function r(t, e) {
            return t.indexOf(e, t.length - e.length) !== -1
        }

        function i(t, e) {
            return !t.indexOf(e)
        }

        function o(t) {
            return {
                restrict: "A",
                compile: function (t, e, n) {
                    var r = e[this.name].replace(/\s/g, "").match(/^([^(]+?)\s*(\((.*)\))?$/),
                        i = /[)]$/.test(e[this.name]) ? {
                            file: ": '" + r[1] + "'",
                            key: r[3]
                        } : {
                            file: "",
                            key: r[1]
                        };
                    return t.text("{{ " + i.key + " | translate" + i.file + " }}"),
                        function (t, e, n) {}
                }
            }
        }

        function s() {
            var t, e, n, o, s, a;
            this.langsFiles = function (e) {
                return t = e, this
            }, this.addLangFile = function (e) {
                return t = t ? p(t, e) : e, this
            }, this.langsValues = function (t) {
                return e = t, this
            }, this.setFilesSuffix = function (t) {
                return n = t, this
            }, this.setBaseUrl = function (t) {
                return o = new RegExp(/\/$/).test(t) ? t.substring(0, t.length - 1) : t, this
            }, this.fallbackLanguage = function (t) {
                return s = t, this
            }, this.setDirectory = this.setBaseUrl, this.$get = ["$q", "$injector", "staticFilesLoader", function (l, c, d) {
                function f(t) {
                    return !!u(t) && (a = t)
                }

                function v() {
                    return x[a] || x[s]
                }

                function m(t) {
                    return x[t] || x[Object.keys(x)[0]]
                }

                function g() {
                    return x
                }

                function y(t) {
                    h(t, function (t, e) {
                        p(x, t)
                    })
                }

                function b() {
                    var e = [];
                    return h(t, function (t, o) {
                        e.push(d.get({
                            baseUrl: w.baseUrl,
                            suffix: n,
                            value: i(t, "/") || r(w.baseUrl, "/") ? t : "/" + t,
                            key: o
                        }))
                    }), l.all(e)
                }

                function j() {
                    return h(e || [], function (t) {
                        var e = {};
                        e[t] = c.get(t), p(x, e)
                    })
                }

                function $() {
                    return j() && b().then(y)
                }
                var x = {},
                    w = {
                        baseUrl: o || "",
                        suffix: n,
                        langsFiles: t,
                        langsValues: e,
                        fallbackLanguage: s,
                        usedLanguage: a
                    };
                return {
                    configuration: w,
                    get: m,
                    getAll: g,
                    getUsed: v,
                    init: $,
                    use: f
                }
            }]
        }

        function a(t, e) {
            function n(t, e) {
                var n = {};
                return n[e] = t, n
            }

            function r(r) {
                var i = e.defer();
                return t({
                    url: [r.baseUrl, r.value, r.suffix].join(""),
                    method: "GET",
                    params: ""
                }).success(function (t) {
                    i.resolve(n(t, r.key))
                }).error(function (t) {
                    i.reject(r.key)
                }), i.promise
            }
            return {
                get: r
            }
        }
        var l = e.isUndefined,
            u = e.isString,
            c = e.isObject,
            h = e.forEach,
            p = e.extend;
        e.module("ng-translation", ["ng-translation.filter", "ng-translation.provider", "ng-translation.directive"]).run(["ngTranslation", function (t) {
            t.init()
        }]), e.module("ng-translation.directive", ["ng-translation.provider"]).directive("ngTranslate", ["$parse", o]), e.module("ng-translation.filter", ["ng-translation.provider"]).filter("translate", ["$parse", "$interpolate", "ngTranslation", "$sce", function (t, e, n, r) {
            var i = function (i) {
                var o = Array.prototype.slice.call(arguments, 1),
                    s = u(o[0]) ? "get" : "getUsed",
                    a = t(i)(n[s](o[0]));
                return !o.length || l(a) ? r.trustAsHtml(a || "") : c(o[0]) ? e(a)(o[0] || {}) : c(o[1]) ? e(a)(o[1] || {}) : a
            };
            return i.$stateful = !0, i
        }]), e.module("ng-translation.provider", ["ng-translation.files-loader"]).provider("ngTranslation", s), e.module("ng-translation.files-loader", []).factory("staticFilesLoader", ["$http", "$q", a])
    }(window, window.angular),
    function (t, e, n) {
        function r(n, r) {
            this.wrapper = "string" == typeof n ? e.querySelector(n) : n, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                disablePointer: !o.hasPointer,
                disableTouch: o.hasPointer || !o.hasTouch,
                disableMouse: o.hasPointer || o.hasTouch,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0,
                bindToWrapper: "undefined" == typeof t.onmousedown
            };
            for (var i in r) this.options[i] = r[i];
            this.translateZ = this.options.HWCompositing && o.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = o.hasTransition && this.options.useTransition, this.options.useTransform = o.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? o.ease[this.options.bounceEasing] || o.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }
        var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                t.setTimeout(e, 1e3 / 60)
            },
            o = function () {
                function r(t) {
                    return s !== !1 && ("" === s ? t : s + t.charAt(0).toUpperCase() + t.substr(1))
                }
                var i = {},
                    o = e.createElement("div").style,
                    s = function () {
                        for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, r = e.length; n < r; n++)
                            if (t = e[n] + "ransform", t in o) return e[n].substr(0, e[n].length - 1);
                        return !1
                    }();
                i.getTime = Date.now || function () {
                    return (new Date).getTime()
                }, i.extend = function (t, e) {
                    for (var n in e) t[n] = e[n]
                }, i.addEvent = function (t, e, n, r) {
                    t.addEventListener(e, n, !!r)
                }, i.removeEvent = function (t, e, n, r) {
                    t.removeEventListener(e, n, !!r)
                }, i.prefixPointerEvent = function (e) {
                    return t.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
                }, i.momentum = function (t, e, r, i, o, s) {
                    var a, l, u = t - e,
                        c = n.abs(u) / r;
                    return s = void 0 === s ? 6e-4 : s, a = t + c * c / (2 * s) * (u < 0 ? -1 : 1), l = c / s, a < i ? (a = o ? i - o / 2.5 * (c / 8) : i, u = n.abs(a - t), l = u / c) : a > 0 && (a = o ? o / 2.5 * (c / 8) : 0, u = n.abs(t) + a, l = u / c), {
                        destination: n.round(a),
                        duration: l
                    }
                };
                var a = r("transform");
                return i.extend(i, {
                    hasTransform: a !== !1,
                    hasPerspective: r("perspective") in o,
                    hasTouch: "ontouchstart" in t,
                    hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
                    hasTransition: r("transition") in o
                }), i.isBadAndroid = function () {
                    var e = t.navigator.appVersion;
                    if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                        var n = e.match(/Safari\/(\d+.\d)/);
                        return !(n && "object" == typeof n && n.length >= 2) || parseFloat(n[1]) < 535.19
                    }
                    return !1
                }(), i.extend(i.style = {}, {
                    transform: a,
                    transitionTimingFunction: r("transitionTimingFunction"),
                    transitionDuration: r("transitionDuration"),
                    transitionDelay: r("transitionDelay"),
                    transformOrigin: r("transformOrigin")
                }), i.hasClass = function (t, e) {
                    var n = new RegExp("(^|\\s)" + e + "(\\s|$)");
                    return n.test(t.className)
                }, i.addClass = function (t, e) {
                    if (!i.hasClass(t, e)) {
                        var n = t.className.split(" ");
                        n.push(e), t.className = n.join(" ")
                    }
                }, i.removeClass = function (t, e) {
                    if (i.hasClass(t, e)) {
                        var n = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                        t.className = t.className.replace(n, " ")
                    }
                }, i.offset = function (t) {
                    for (var e = -t.offsetLeft, n = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, n -= t.offsetTop;
                    return {
                        left: e,
                        top: n
                    }
                }, i.preventDefaultException = function (t, e) {
                    for (var n in e)
                        if (e[n].test(t[n])) return !0;
                    return !1
                }, i.extend(i.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }), i.extend(i.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function (t) {
                            return t * (2 - t)
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function (t) {
                            return n.sqrt(1 - --t * t)
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function (t) {
                            var e = 4;
                            return (t -= 1) * t * ((e + 1) * t + e) + 1
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function (t) {
                            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function (t) {
                            var e = .22,
                                r = .4;
                            return 0 === t ? 0 : 1 == t ? 1 : r * n.pow(2, -10 * t) * n.sin((t - e / 4) * (2 * n.PI) / e) + 1
                        }
                    }
                }), i.tap = function (t, n) {
                    var r = e.createEvent("Event");
                    r.initEvent(n, !0, !0), r.pageX = t.pageX, r.pageY = t.pageY, t.target.dispatchEvent(r)
                }, i.click = function (n) {
                    var r, i = n.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (r = e.createEvent(t.MouseEvent ? "MouseEvents" : "Event"), r.initEvent("click", !0, !0), r.view = n.view || t, r.detail = 1, r.screenX = i.screenX || 0, r.screenY = i.screenY || 0, r.clientX = i.clientX || 0, r.clientY = i.clientY || 0, r.ctrlKey = !!n.ctrlKey, r.altKey = !!n.altKey, r.shiftKey = !!n.shiftKey, r.metaKey = !!n.metaKey, r.button = 0, r.relatedTarget = null, r._constructed = !0, i.dispatchEvent(r))
                }, i
            }();
        r.prototype = {
            version: "5.2.0",
            _init: function () {
                this._initEvents()
            },
            destroy: function () {
                this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
            },
            _transitionEnd: function (t) {
                t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
            },
            _start: function (t) {
                if (1 != o.eventType[t.type]) {
                    var e;
                    if (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== e) return
                }
                if (this.enabled && (!this.initiated || o.eventType[t.type] === this.initiated)) {
                    !this.options.preventDefault || o.isBadAndroid || o.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                    var r, i = t.touches ? t.touches[0] : t;
                    this.initiated = o.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = o.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, r = this.getComputedPosition(), this._translate(n.round(r.x), n.round(r.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("beforeScrollStart")
                }
            },
            _move: function (t) {
                if (this.enabled && o.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault();
                    var e, r, i, s, a = t.touches ? t.touches[0] : t,
                        l = a.pageX - this.pointX,
                        u = a.pageY - this.pointY,
                        c = o.getTime();
                    if (this.pointX = a.pageX, this.pointY = a.pageY, this.distX += l, this.distY += u, i = n.abs(this.distX), s = n.abs(this.distY), !(c - this.endTime > 300 && i < 10 && s < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (i > s + this.options.directionLockThreshold ? this.directionLocked = "h" : s >= i + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            u = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            l = 0
                        }
                        l = this.hasHorizontalScroll ? l : 0, u = this.hasVerticalScroll ? u : 0, e = this.x + l, r = this.y + u, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + l / 3 : e > 0 ? 0 : this.maxScrollX), (r > 0 || r < this.maxScrollY) && (r = this.options.bounce ? this.y + u / 3 : r > 0 ? 0 : this.maxScrollY), this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0, this.directionY = u > 0 ? -1 : u < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, r), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                    }
                }
            },
            _end: function (t) {
                if (this.enabled && o.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && !o.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                    var e, r, i = (t.changedTouches ? t.changedTouches[0] : t, o.getTime() - this.startTime),
                        s = n.round(this.x),
                        a = n.round(this.y),
                        l = n.abs(s - this.startX),
                        u = n.abs(a - this.startY),
                        c = 0,
                        h = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = o.getTime(), !this.resetPosition(this.options.bounceTime)) return this.scrollTo(s, a), this.moved ? this._events.flick && i < 200 && l < 100 && u < 100 ? void this._execEvent("flick") : (this.options.momentum && i < 300 && (e = this.hasHorizontalScroll ? o.momentum(this.x, this.startX, i, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: s,
                        duration: 0
                    }, r = this.hasVerticalScroll ? o.momentum(this.y, this.startY, i, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: a,
                        duration: 0
                    }, s = e.destination, a = r.destination, c = n.max(e.duration, r.duration), this.isInTransition = 1), s != this.x || a != this.y ? ((s > 0 || s < this.maxScrollX || a > 0 || a < this.maxScrollY) && (h = o.ease.quadratic), void this.scrollTo(s, a, c, h)) : void this._execEvent("scrollEnd")) : (this.options.tap && o.tap(t, this.options.tap), this.options.click && o.click(t), void this._execEvent("scrollCancel"))
                }
            },
            _resize: function () {
                var t = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
                    t.refresh()
                }, this.options.resizePolling)
            },
            resetPosition: function (t) {
                var e = this.x,
                    n = this.y;
                return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY), (e != this.x || n != this.y) && (this.scrollTo(e, n, t, this.options.bounceEasing), !0)
            },
            disable: function () {
                this.enabled = !1
            },
            enable: function () {
                this.enabled = !0
            },
            refresh: function () {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = o.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
            },
            on: function (t, e) {
                this._events[t] || (this._events[t] = []), this._events[t].push(e)
            },
            off: function (t, e) {
                if (this._events[t]) {
                    var n = this._events[t].indexOf(e);
                    n > -1 && this._events[t].splice(n, 1)
                }
            },
            _execEvent: function (t) {
                if (this._events[t]) {
                    var e = 0,
                        n = this._events[t].length;
                    if (n)
                        for (; e < n; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
                }
            },
            scrollBy: function (t, e, n, r) {
                t = this.x + t, e = this.y + e, n = n || 0, this.scrollTo(t, e, n, r)
            },
            scrollTo: function (t, e, n, r) {
                r = r || o.ease.circular, this.isInTransition = this.options.useTransition && n > 0;
                var i = this.options.useTransition && r.style;
                !n || i ? (i && (this._transitionTimingFunction(r.style), this._transitionTime(n)), this._translate(t, e)) : this._animate(t, e, n, r.fn)
            },
            scrollToElement: function (t, e, r, i, s) {
                if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                    var a = o.offset(t);
                    a.left -= this.wrapperOffset.left, a.top -= this.wrapperOffset.top, r === !0 && (r = n.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), i === !0 && (i = n.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), a.left -= r || 0, a.top -= i || 0, a.left = a.left > 0 ? 0 : a.left < this.maxScrollX ? this.maxScrollX : a.left, a.top = a.top > 0 ? 0 : a.top < this.maxScrollY ? this.maxScrollY : a.top, e = void 0 === e || null === e || "auto" === e ? n.max(n.abs(this.x - a.left), n.abs(this.y - a.top)) : e, this.scrollTo(a.left, a.top, e, s)
                }
            },
            _transitionTime: function (t) {
                if (this.options.useTransition) {
                    t = t || 0;
                    var e = o.style.transitionDuration;
                    if (e && (this.scrollerStyle[e] = t + "ms", !t && o.isBadAndroid)) {
                        this.scrollerStyle[e] = "0.0001ms";
                        var n = this;
                        i(function () {
                            "0.0001ms" === n.scrollerStyle[e] && (n.scrollerStyle[e] = "0s")
                        })
                    }
                }
            },
            _transitionTimingFunction: function (t) {
                this.scrollerStyle[o.style.transitionTimingFunction] = t
            },
            _translate: function (t, e) {
                this.options.useTransform ? this.scrollerStyle[o.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = n.round(t), e = n.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e
            },
            _initEvents: function (e) {
                var n = e ? o.removeEvent : o.addEvent,
                    r = this.options.bindToWrapper ? this.wrapper : t;
                n(t, "orientationchange", this), n(t, "resize", this), this.options.click && n(this.wrapper, "click", this, !0), this.options.disableMouse || (n(this.wrapper, "mousedown", this), n(r, "mousemove", this), n(r, "mousecancel", this), n(r, "mouseup", this)), o.hasPointer && !this.options.disablePointer && (n(this.wrapper, o.prefixPointerEvent("pointerdown"), this), n(r, o.prefixPointerEvent("pointermove"), this), n(r, o.prefixPointerEvent("pointercancel"), this), n(r, o.prefixPointerEvent("pointerup"), this)), o.hasTouch && !this.options.disableTouch && (n(this.wrapper, "touchstart", this), n(r, "touchmove", this), n(r, "touchcancel", this), n(r, "touchend", this)), n(this.scroller, "transitionend", this), n(this.scroller, "webkitTransitionEnd", this), n(this.scroller, "oTransitionEnd", this), n(this.scroller, "MSTransitionEnd", this)
            },
            getComputedPosition: function () {
                var e, n, r = t.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (r = r[o.style.transform].split(")")[0].split(", "), e = +(r[12] || r[4]), n = +(r[13] || r[5])) : (e = +r.left.replace(/[^-\d.]/g, ""), n = +r.top.replace(/[^-\d.]/g, "")), {
                    x: e,
                    y: n
                }
            },
            _animate: function (t, e, n, r) {
                function s() {
                    var p, d, f, v = o.getTime();
                    return v >= h ? (a.isAnimating = !1, a._translate(t, e), void(a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd"))) : (v = (v - c) / n, f = r(v), p = (t - l) * f + l, d = (e - u) * f + u, a._translate(p, d), void(a.isAnimating && i(s)))
                }
                var a = this,
                    l = this.x,
                    u = this.y,
                    c = o.getTime(),
                    h = c + n;
                this.isAnimating = !0, s()
            },
            handleEvent: function (t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(t);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(t);
                        break;
                    case "keydown":
                        this._key(t);
                        break;
                    case "click":
                        this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
                }
            }
        }, r.utils = o, "undefined" != typeof module && module.exports ? module.exports = r : "function" == typeof define && define.amd ? define(function () {
            return r
        }) : t.IScroll = r
    }(window, document, Math), document.createElement("video"), document.createElement("audio"), document.createElement("track");
var vjs = function (t, e, n) {
        var r;
        if ("string" == typeof t) {
            if (0 === t.indexOf("#") && (t = t.slice(1)), vjs.players[t]) return vjs.players[t];
            r = vjs.el(t)
        } else r = t;
        if (!r || !r.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return r.player || new vjs.Player(r, e, n)
    },
    videojs = vjs;
window.videojs = window.vjs = vjs, vjs.CDN_VERSION = "4.6", vjs.ACCESS_PROTOCOL = "https:" == document.location.protocol ? "https://" : "http://", vjs.options = {
    techOrder: ["html5", "flash"],
    html5: {},
    flash: {},
    width: 300,
    height: 150,
    defaultVolume: 0,
    playbackRates: [],
    children: {
        mediaLoader: {},
        posterImage: {},
        textTrackDisplay: {},
        loadingSpinner: {},
        bigPlayButton: {},
        controlBar: {},
        errorDisplay: {}
    },
    notSupportedMessage: '您的计算机未安装最新版本的 Flash Player，请到<a href="http://get.adobe.com/cn/flashplayer/" target="_blank" class="error-flash"> Adobe 官网</a>下载安装。'
}, "GENERATED_CDN_VSN" !== vjs.CDN_VERSION && (videojs.options.flash.swf = vjs.ACCESS_PROTOCOL + "vjs.zencdn.net/" + vjs.CDN_VERSION + "/video-js.swf"), vjs.players = {}, "function" == typeof define && define.amd ? define([], function () {
    return videojs
}) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs), vjs.CoreObject = vjs.CoreObject = function () {}, vjs.CoreObject.extend = function (t) {
    var e, n;
    t = t || {}, e = t.init || t.init || this.prototype.init || this.prototype.init || function () {}, n = function () {
        e.apply(this, arguments)
    }, n.prototype = vjs.obj.create(this.prototype), n.prototype.constructor = n, n.extend = vjs.CoreObject.extend, n.create = vjs.CoreObject.create;
    for (var r in t) t.hasOwnProperty(r) && (n.prototype[r] = t[r]);
    return n
}, vjs.CoreObject.create = function () {
    var t = vjs.obj.create(this.prototype);
    return this.apply(t, arguments), t
}, vjs.on = function (t, e, n) {
    var r = vjs.getData(t);
    r.handlers || (r.handlers = {}), r.handlers[e] || (r.handlers[e] = []), n.guid || (n.guid = vjs.guid++), r.handlers[e].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function (e) {
        if (!r.disabled) {
            e = vjs.fixEvent(e);
            var n = r.handlers[e.type];
            if (n)
                for (var i = n.slice(0), o = 0, s = i.length; o < s && !e.isImmediatePropagationStopped(); o++) i[o].call(t, e)
        }
    }), 1 == r.handlers[e].length && (document.addEventListener ? t.addEventListener(e, r.dispatcher, !1) : document.attachEvent && t.attachEvent("on" + e, r.dispatcher))
}, vjs.off = function (t, e, n) {
    if (vjs.hasData(t)) {
        var r = vjs.getData(t);
        if (r.handlers) {
            var i = function (e) {
                r.handlers[e] = [], vjs.cleanUpEvents(t, e)
            };
            if (e) {
                var o = r.handlers[e];
                if (o) {
                    if (!n) return void i(e);
                    if (n.guid)
                        for (var s = 0; s < o.length; s++) o[s].guid === n.guid && o.splice(s--, 1);
                    vjs.cleanUpEvents(t, e)
                }
            } else
                for (var a in r.handlers) i(a)
        }
    }
}, vjs.cleanUpEvents = function (t, e) {
    var n = vjs.getData(t);
    0 === n.handlers[e].length && (delete n.handlers[e], document.removeEventListener ? t.removeEventListener(e, n.dispatcher, !1) : document.detachEvent && t.detachEvent("on" + e, n.dispatcher)), vjs.isEmpty(n.handlers) && (delete n.handlers, delete n.dispatcher, delete n.disabled), vjs.isEmpty(n) && vjs.removeData(t)
}, vjs.fixEvent = function (t) {
    function e() {
        return !0
    }

    function n() {
        return !1
    }
    if (!t || !t.isPropagationStopped) {
        var r = t || window.event;
        t = {};
        for (var i in r) "layerX" !== i && "layerY" !== i && "keyboardEvent.keyLocation" !== i && ("returnValue" == i && r.preventDefault || (t[i] = r[i]));
        if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function () {
                r.preventDefault && r.preventDefault(), t.returnValue = !1, t.isDefaultPrevented = e, t.defaultPrevented = !0
            }, t.isDefaultPrevented = n, t.defaultPrevented = !1, t.stopPropagation = function () {
                r.stopPropagation && r.stopPropagation(), t.cancelBubble = !0, t.isPropagationStopped = e
            }, t.isPropagationStopped = n, t.stopImmediatePropagation = function () {
                r.stopImmediatePropagation && r.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
            }, t.isImmediatePropagationStopped = n, null != t.clientX) {
            var o = document.documentElement,
                s = document.body;
            t.pageX = t.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
        }
        t.which = t.charCode || t.keyCode, null != t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
    }
    return t
}, vjs.trigger = function (t, e) {
    var n = vjs.hasData(t) ? vjs.getData(t) : {},
        r = t.parentNode || t.ownerDocument;
    if ("string" == typeof e && (e = {
            type: e,
            target: t
        }), e = vjs.fixEvent(e), n.dispatcher && n.dispatcher.call(t, e), r && !e.isPropagationStopped() && e.bubbles !== !1) vjs.trigger(r, e);
    else if (!r && !e.defaultPrevented) {
        var i = vjs.getData(e.target);
        e.target[e.type] && (i.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), i.disabled = !1)
    }
    return !e.defaultPrevented
}, vjs.one = function (t, e, n) {
    var r = function () {
        vjs.off(t, e, r), n.apply(this, arguments)
    };
    r.guid = n.guid = n.guid || vjs.guid++, vjs.on(t, e, r)
};
var hasOwnProp = Object.prototype.hasOwnProperty;
vjs.createEl = function (t, e) {
    var n, r;
    n = document.createElement(t || "div");
    for (r in e) hasOwnProp.call(e, r) && (r.indexOf("aria-") !== -1 || "role" == r ? n.setAttribute(r, e[r]) : n[r] = e[r]);
    return n
}, vjs.capitalize = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
}, vjs.obj = {}, vjs.obj.create = Object.create || function (t) {
    function e() {}
    return e.prototype = t, new e
}, vjs.obj.each = function (t, e, n) {
    for (var r in t) hasOwnProp.call(t, r) && e.call(n || this, r, t[r])
}, vjs.obj.merge = function (t, e) {
    if (!e) return t;
    for (var n in e) hasOwnProp.call(e, n) && (t[n] = e[n]);
    return t
}, vjs.obj.deepMerge = function (t, e) {
    var n, r, i;
    t = vjs.obj.copy(t);
    for (n in e) hasOwnProp.call(e, n) && (r = t[n], i = e[n], vjs.obj.isPlain(r) && vjs.obj.isPlain(i) ? t[n] = vjs.obj.deepMerge(r, i) : t[n] = e[n]);
    return t
}, vjs.obj.copy = function (t) {
    return vjs.obj.merge({}, t)
}, vjs.obj.isPlain = function (t) {
    return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
}, vjs.bind = function (t, e, n) {
    e.guid || (e.guid = vjs.guid++);
    var r = function () {
        return e.apply(t, arguments)
    };
    return r.guid = n ? n + "_" + e.guid : e.guid, r
}, vjs.cache = {}, vjs.guid = 1, vjs.expando = "vdata" + (new Date).getTime(), vjs.getData = function (t) {
    var e = t[vjs.expando];
    return e || (e = t[vjs.expando] = vjs.guid++, vjs.cache[e] = {}), vjs.cache[e]
}, vjs.hasData = function (t) {
    var e = t[vjs.expando];
    return !(!e || vjs.isEmpty(vjs.cache[e]))
}, vjs.removeData = function (t) {
    var e = t[vjs.expando];
    if (e) {
        delete vjs.cache[e];
        try {
            delete t[vjs.expando]
        } catch (n) {
            t.removeAttribute ? t.removeAttribute(vjs.expando) : t[vjs.expando] = null
        }
    }
}, vjs.isEmpty = function (t) {
    for (var e in t)
        if (null !== t[e]) return !1;
    return !0
}, vjs.addClass = function (t, e) {
    (" " + t.className + " ").indexOf(" " + e + " ") == -1 && (t.className = "" === t.className ? e : t.className + " " + e)
}, vjs.removeClass = function (t, e) {
    var n, r;
    if (t.className.indexOf(e) != -1) {
        for (n = t.className.split(" "), r = n.length - 1; r >= 0; r--) n[r] === e && n.splice(r, 1);
        t.className = n.join(" ")
    }
}, vjs.TEST_VID = vjs.createEl("video"), vjs.USER_AGENT = navigator.userAgent, vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT), vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT), vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT), vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD, vjs.IOS_VERSION = function () {
    var t = vjs.USER_AGENT.match(/OS (\d+)_/i);
    if (t && t[1]) return t[1]
}(), vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT), vjs.ANDROID_VERSION = function () {
    var t, e, n = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
    return n ? (t = n[1] && parseFloat(n[1]), e = n[2] && parseFloat(n[2]), t && e ? parseFloat(n[1] + "." + n[2]) : t ? t : null) : null
}(), vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && /webkit/i.test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3, vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT), vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT), vjs.TOUCH_ENABLED = !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), vjs.getAttributeValues = function (t) {
    var e, n, r, i, o;
    if (e = {}, n = ",autoplay,controls,loop,muted,default,", t && t.attributes && t.attributes.length > 0) {
        r = t.attributes;
        for (var s = r.length - 1; s >= 0; s--) i = r[s].name, o = r[s].value, "boolean" != typeof t[i] && n.indexOf("," + i + ",") === -1 || (o = null !== o), e[i] = o
    }
    return e
}, vjs.getComputedDimension = function (t, e) {
    var n = "";
    return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (n = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"), n
}, vjs.insertFirst = function (t, e) {
    e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
}, vjs.browser = {}, vjs.el = function (t) {
    return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
}, vjs.formatTime = function (t, e) {
    e = e || t;
    var n = Math.floor(t % 60),
        r = Math.floor(t / 60 % 60),
        i = Math.floor(t / 3600),
        o = Math.floor(e / 60 % 60),
        s = Math.floor(e / 3600);
    return (isNaN(t) || t === 1 / 0) && (i = r = n = "-"), i = i > 0 || s > 0 ? i + ":" : "", r = ((i || o >= 10) && r < 10 ? "0" + r : r) + ":", n = n < 10 ? "0" + n : n, i + r + n
}, vjs.blockTextSelection = function () {
    document.body.focus(), document.onselectstart = function () {
        return !1
    }
}, vjs.unblockTextSelection = function () {
    document.onselectstart = function () {
        return !0
    }
}, vjs.trim = function (t) {
    return (t + "").replace(/^\s+|\s+$/g, "")
}, vjs.round = function (t, e) {
    return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
}, vjs.createTimeRange = function (t, e) {
    return {
        length: 1,
        start: function () {
            return t
        },
        end: function () {
            return e
        }
    }
}, vjs.get = function (t, e, n, r) {
    var i, o, s, a, l;
    n = n || function () {}, "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function () {
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (t) {}
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (e) {}
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP")
        } catch (n) {}
        throw new Error("This browser does not support XMLHttpRequest.")
    }), o = new XMLHttpRequest, s = vjs.parseUrl(t), a = window.location, l = s.protocol + s.host !== a.protocol + a.host, !l || !window.XDomainRequest || "withCredentials" in o ? (i = "file:" == s.protocol || "file:" == a.protocol, o.onreadystatechange = function () {
        4 === o.readyState && (200 === o.status || i && 0 === o.status ? e(o.responseText) : n(o.responseText))
    }) : (o = new window.XDomainRequest, o.onload = function () {
        e(o.responseText)
    }, o.onerror = n, o.onprogress = function () {}, o.ontimeout = n);
    try {
        o.open("GET", t, !0), r && (o.withCredentials = !0)
    } catch (u) {
        return void n(u)
    }
    try {
        o.send()
    } catch (u) {
        n(u)
    }
}, vjs.setLocalStorage = function (t, e) {
    try {
        var n = window.localStorage || !1;
        if (!n) return;
        n[t] = e
    } catch (r) {
        22 == r.code || 1014 == r.code ? vjs.log("LocalStorage Full (VideoJS)", r) : 18 == r.code ? vjs.log("LocalStorage not allowed (VideoJS)", r) : vjs.log("LocalStorage Error (VideoJS)", r)
    }
}, vjs.getAbsoluteURL = function (t) {
    return t.match(/^https?:\/\//) || (t = vjs.createEl("div", {
        innerHTML: '<a href="' + t + '">x</a>'
    }).firstChild.href), t
}, vjs.parseUrl = function (t) {
    var e, n, r, i, o;
    i = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], n = vjs.createEl("a", {
        href: t
    }), r = "" === n.host && "file:" !== n.protocol, r && (e = vjs.createEl("div"), e.innerHTML = '<a href="' + t + '"></a>', n = e.firstChild, e.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(e)), o = {};
    for (var s = 0; s < i.length; s++) o[i[s]] = n[i[s]];
    return r && document.body.removeChild(e), o
};
var _noop = function () {},
    _console = window.console || {
        log: _noop,
        warn: _noop,
        error: _noop
    };
vjs.log = function () {
    _logType(null, arguments)
}, vjs.log.history = [], vjs.log.error = function () {
    _logType("error", arguments)
}, vjs.log.warn = function () {
    _logType("warn", arguments)
}, vjs.findPosition = function (t) {
    var e, n, r, i, o, s, a, l, u;
    return t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), e ? (n = document.documentElement, r = document.body, i = n.clientLeft || r.clientLeft || 0, o = window.pageXOffset || r.scrollLeft, s = e.left + o - i, a = n.clientTop || r.clientTop || 0, l = window.pageYOffset || r.scrollTop, u = e.top + l - a, {
        left: vjs.round(s),
        top: vjs.round(u)
    }) : {
        left: 0,
        top: 0
    }
}, vjs.util = {}, vjs.util.mergeOptions = function (t, e) {
    var n, r, i;
    t = vjs.obj.copy(t);
    for (n in e) e.hasOwnProperty(n) && (r = t[n], i = e[n], vjs.obj.isPlain(r) && vjs.obj.isPlain(i) ? t[n] = vjs.util.mergeOptions(r, i) : t[n] = e[n]);
    return t
}, vjs.Component = vjs.CoreObject.extend({
    init: function (t, e, n) {
        this.player_ = t, this.options_ = vjs.obj.copy(this.options_), e = this.options(e), this.id_ = e.id || (e.el && e.el.id ? e.el.id : t.id() + "_component_" + vjs.guid++), this.name_ = e.name || null, this.el_ = e.el || this.createEl(), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.initChildren(), this.ready(n), e.reportTouchActivity !== !1 && this.enableTouchActivity()
    }
}), vjs.Component.prototype.dispose = function () {
    if (this.trigger({
            type: "dispose",
            bubbles: !1
        }), this.children_)
        for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
    this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), vjs.removeData(this.el_), this.el_ = null
}, vjs.Component.prototype.player_ = !0, vjs.Component.prototype.player = function () {
    return this.player_
}, vjs.Component.prototype.options_, vjs.Component.prototype.options = function (t) {
    return void 0 === t ? this.options_ : this.options_ = vjs.util.mergeOptions(this.options_, t)
}, vjs.Component.prototype.el_, vjs.Component.prototype.createEl = function (t, e) {
    return vjs.createEl(t, e)
}, vjs.Component.prototype.el = function () {
    return this.el_
}, vjs.Component.prototype.contentEl_, vjs.Component.prototype.contentEl = function () {
    return this.contentEl_ || this.el_
}, vjs.Component.prototype.id_, vjs.Component.prototype.id = function () {
    return this.id_
}, vjs.Component.prototype.name_, vjs.Component.prototype.name = function () {
    return this.name_
}, vjs.Component.prototype.children_, vjs.Component.prototype.children = function () {
    return this.children_
}, vjs.Component.prototype.childIndex_, vjs.Component.prototype.getChildById = function (t) {
    return this.childIndex_[t]
}, vjs.Component.prototype.childNameIndex_, vjs.Component.prototype.getChild = function (t) {
    return this.childNameIndex_[t]
}, vjs.Component.prototype.addChild = function (t, e) {
    var n, r, i;
    return "string" == typeof t ? (i = t, e = e || {}, r = e.componentClass || vjs.capitalize(i), e.name = i, n = new window.videojs[r](this.player_ || this, e)) : n = t, this.children_.push(n), "function" == typeof n.id && (this.childIndex_[n.id()] = n), i = i || n.name && n.name(), i && (this.childNameIndex_[i] = n), "function" == typeof n.el && n.el() && this.contentEl().appendChild(n.el()), n
}, vjs.Component.prototype.removeChild = function (t) {
    if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
        for (var e = !1, n = this.children_.length - 1; n >= 0; n--)
            if (this.children_[n] === t) {
                e = !0, this.children_.splice(n, 1);
                break
            }
        if (e) {
            this.childIndex_[t.id] = null, this.childNameIndex_[t.name] = null;
            var r = t.el();
            r && r.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
        }
    }
}, vjs.Component.prototype.initChildren = function () {
    var t, e, n, r, i;
    if (t = this, e = this.options().children)
        if (e instanceof Array)
            for (var o = 0; o < e.length; o++) n = e[o], "string" == typeof n ? (r = n, i = {}) : (r = n.name, i = n), t[r] = t.addChild(r, i);
        else vjs.obj.each(e, function (e, n) {
            n !== !1 && (t[e] = t.addChild(e, n))
        })
}, vjs.Component.prototype.buildCSSClass = function () {
    return ""
}, vjs.Component.prototype.on = function (t, e) {
    return vjs.on(this.el_, t, vjs.bind(this, e)), this
}, vjs.Component.prototype.off = function (t, e) {
    return vjs.off(this.el_, t, e), this
}, vjs.Component.prototype.one = function (t, e) {
    return vjs.one(this.el_, t, vjs.bind(this, e)), this
}, vjs.Component.prototype.trigger = function (t, e) {
    return vjs.trigger(this.el_, t, e), this
}, vjs.Component.prototype.isReady_, vjs.Component.prototype.isReadyOnInitFinish_ = !0, vjs.Component.prototype.readyQueue_, vjs.Component.prototype.ready = function (t) {
    return t && (this.isReady_ ? t.call(this) : (void 0 === this.readyQueue_ && (this.readyQueue_ = []), this.readyQueue_.push(t))), this
}, vjs.Component.prototype.triggerReady = function () {
    this.isReady_ = !0;
    var t = this.readyQueue_;
    if (t && t.length > 0) {
        for (var e = 0, n = t.length; e < n; e++) t[e].call(this);
        this.readyQueue_ = [], this.trigger("ready")
    }
}, vjs.Component.prototype.addClass = function (t) {
    return vjs.addClass(this.el_, t), this
}, vjs.Component.prototype.removeClass = function (t) {
    return vjs.removeClass(this.el_, t), this
}, vjs.Component.prototype.show = function () {
    return this.el_.style.display = "block", this
}, vjs.Component.prototype.hide = function () {
    return this.el_.style.display = "none", this
}, vjs.Component.prototype.lockShowing = function () {
    return this.addClass("vjs-lock-showing"), this
}, vjs.Component.prototype.unlockShowing = function () {
    return this.removeClass("vjs-lock-showing"), this
}, vjs.Component.prototype.disable = function () {
    this.hide(), this.show = function () {}
}, vjs.Component.prototype.width = function (t, e) {
    return this.dimension("width", t, e)
}, vjs.Component.prototype.height = function (t, e) {
    return this.dimension("height", t, e)
}, vjs.Component.prototype.dimensions = function (t, e) {
    return this.width(t, !0).height(e)
}, vjs.Component.prototype.dimension = function (t, e, n) {
    if (void 0 !== e) return ("" + e).indexOf("%") !== -1 || ("" + e).indexOf("px") !== -1 ? this.el_.style[t] = e : "auto" === e ? this.el_.style[t] = "" : this.el_.style[t] = e + "px", n || this.trigger("resize"), this;
    if (!this.el_) return 0;
    var r = this.el_.style[t],
        i = r.indexOf("px");
    return i !== -1 ? parseInt(r.slice(0, i), 10) : parseInt(this.el_["offset" + vjs.capitalize(t)], 10)
}, vjs.Component.prototype.onResize, vjs.Component.prototype.emitTapEvents = function () {
    var t, e, n, r, i, o, s, a, l;
    t = 0, e = null, l = 22, this.on("touchstart", function (n) {
        1 === n.touches.length && (e = n.touches[0], t = (new Date).getTime(), r = !0)
    }), this.on("touchmove", function (t) {
        t.touches.length > 1 ? r = !1 : e && (o = t.touches[0].pageX - e.pageX, s = t.touches[0].pageY - e.pageY, a = Math.sqrt(o * o + s * s), a > l && (r = !1))
    }), i = function () {
        r = !1
    }, this.on("touchleave", i), this.on("touchcancel", i), this.on("touchend", function (i) {
        e = null, r === !0 && (n = (new Date).getTime() - t, n < 250 && (i.preventDefault(), this.trigger("tap")))
    })
}, vjs.Component.prototype.enableTouchActivity = function () {
    var t, e, n;
    t = vjs.bind(this.player(), this.player().reportUserActivity), this.on("touchstart", function () {
        t(), clearInterval(e), e = setInterval(t, 250)
    }), n = function (n) {
        t(), clearInterval(e)
    }, this.on("touchmove", t), this.on("touchend", n), this.on("touchcancel", n)
}, vjs.Button = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e), this.emitTapEvents(), this.on("tap", this.onClick), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur)
    }
}), vjs.Button.prototype.createEl = function (t, e) {
    var n;
    return e = vjs.obj.merge({
        className: this.buildCSSClass(),
        role: "button",
        "aria-live": "polite",
        tabIndex: 0
    }, e), n = vjs.Component.prototype.createEl.call(this, t, e), e.innerHTML || (this.contentEl_ = vjs.createEl("div", {
        className: "vjs-control-content"
    }), this.controlText_ = vjs.createEl("span", {
        className: "vjs-control-text",
        innerHTML: this.buttonText || "Need Text"
    }), this.contentEl_.appendChild(this.controlText_), n.appendChild(this.contentEl_)), n
}, vjs.Button.prototype.buildCSSClass = function () {
    return "vjs-control " + vjs.Component.prototype.buildCSSClass.call(this)
}, vjs.Button.prototype.onClick = function () {}, vjs.Button.prototype.onFocus = function () {
    vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress))
}, vjs.Button.prototype.onKeyPress = function (t) {
    32 != t.which && 13 != t.which || (t.preventDefault(), this.onClick())
}, vjs.Button.prototype.onBlur = function () {
    vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress))
}, vjs.Slider = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e), this.bar = this.getChild(this.options_.barName), this.handle = this.getChild(this.options_.handleName), this.on("mousedown", this.onMouseDown), this.on("touchstart", this.onMouseDown), this.on("focus", this.onFocus), this.on("blur", this.onBlur), this.on("click", this.onClick), this.player_.on("controlsvisible", vjs.bind(this, this.update)), t.on(this.playerEvent, vjs.bind(this, this.update)), t.on("fullscreenchange", vjs.bind(this, this.update)), this.boundEvents = {}
    }
}), vjs.Slider.prototype.createEl = function (t, e) {
    return e = e || {}, e.className = e.className + " vjs-slider", e = vjs.obj.merge({
        role: "slider",
        "aria-valuenow": 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        tabIndex: 0
    }, e), vjs.Component.prototype.createEl.call(this, t, e)
}, vjs.Slider.prototype.onMouseDown = function (t) {
    t.preventDefault(), vjs.blockTextSelection(), this.boundEvents.move = vjs.bind(this, this.onMouseMove), this.boundEvents.end = vjs.bind(this, this.onMouseUp), vjs.on(document, "mousemove", this.boundEvents.move), vjs.on(document, "mouseup", this.boundEvents.end), vjs.on(document, "touchmove", this.boundEvents.move), vjs.on(document, "touchend", this.boundEvents.end), this.onMouseMove(t)
}, vjs.Slider.prototype.onMouseUp = function () {
    vjs.unblockTextSelection(), vjs.off(document, "mousemove", this.boundEvents.move, !1), vjs.off(document, "mouseup", this.boundEvents.end, !1), vjs.off(document, "touchmove", this.boundEvents.move, !1), vjs.off(document, "touchend", this.boundEvents.end, !1), this.update()
}, vjs.Slider.prototype.update = function () {
    if (this.el_) {
        var t, e = this.getPercent(),
            n = this.handle,
            r = this.bar;
        if (isNaN(e) && (e = 0), t = e, n) {
            var i = this.el_,
                o = i.offsetWidth,
                s = n.el().offsetWidth,
                a = s ? s / o : 0,
                l = 1 - a,
                u = e * l;
            t = u + a / 2, n.el().style.left = vjs.round(100 * u, 2) + "%"
        }
        r.el().style.width = vjs.round(100 * t, 2) + "%"
    }
}, vjs.Slider.prototype.calculateDistance = function (t) {
    var e, n, r, i, o, s, a, l, u;
    if (e = this.el_, n = vjs.findPosition(e), o = s = e.offsetWidth, a = this.handle, this.options_.vertical) {
        if (i = n.top, u = t.changedTouches ? t.changedTouches[0].pageY : t.pageY, a) {
            var c = a.el().offsetHeight;
            i += c / 2, s -= c
        }
        return Math.max(0, Math.min(1, (i - u + s) / s))
    }
    if (r = n.left, l = t.changedTouches ? t.changedTouches[0].pageX : t.pageX, a) {
        var h = a.el().offsetWidth;
        r += h / 2, o -= h
    }
    return Math.max(0, Math.min(1, (l - r) / o))
}, vjs.Slider.prototype.onFocus = function () {
    vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress))
}, vjs.Slider.prototype.onKeyPress = function (t) {
    37 == t.which ? (t.preventDefault(), this.stepBack()) : 39 == t.which && (t.preventDefault(), this.stepForward())
}, vjs.Slider.prototype.onBlur = function () {
    vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress))
}, vjs.Slider.prototype.onClick = function (t) {
    t.stopImmediatePropagation(), t.preventDefault()
}, vjs.SliderHandle = vjs.Component.extend(), vjs.SliderHandle.prototype.defaultValue = 0, vjs.SliderHandle.prototype.createEl = function (t, e) {
    return e = e || {}, e.className = e.className + " vjs-slider-handle", e = vjs.obj.merge({
        innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
    }, e), vjs.Component.prototype.createEl.call(this, "div", e)
}, vjs.Menu = vjs.Component.extend(), vjs.Menu.prototype.addItem = function (t) {
    this.addChild(t), t.on("click", vjs.bind(this, function () {
        this.unlockShowing()
    }))
}, vjs.Menu.prototype.createEl = function () {
    var t = this.options().contentElType || "ul";
    this.contentEl_ = vjs.createEl(t, {
        className: "vjs-menu-content"
    });
    var e = vjs.Component.prototype.createEl.call(this, "div", {
        append: this.contentEl_,
        className: "vjs-menu"
    });
    return e.appendChild(this.contentEl_), vjs.on(e, "click", function (t) {
        t.preventDefault(), t.stopImmediatePropagation()
    }), e
}, vjs.MenuItem = vjs.Button.extend({
    init: function (t, e) {
        vjs.Button.call(this, t, e), this.selected(e.selected)
    }
}), vjs.MenuItem.prototype.createEl = function (t, e) {
    return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
        className: "vjs-menu-item",
        innerHTML: this.options_.label
    }, e))
}, vjs.MenuItem.prototype.onClick = function () {
    this.selected(!0)
}, vjs.MenuItem.prototype.selected = function (t) {
    t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-selected", !0)) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-selected", !1))
}, vjs.MenuButton = vjs.Button.extend({
    init: function (t, e) {
        vjs.Button.call(this, t, e), this.menu = this.createMenu(), this.addChild(this.menu), this.items && 0 === this.items.length && this.hide(), this.on("keyup", this.onKeyPress), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "button")
    }
}), vjs.MenuButton.prototype.buttonPressed_ = !1, vjs.MenuButton.prototype.createMenu = function () {
    var t = new vjs.Menu(this.player_);
    if (this.options().title && t.contentEl().appendChild(vjs.createEl("li", {
            className: "vjs-menu-title",
            innerHTML: vjs.capitalize(this.options().title),
            tabindex: -1
        })), this.items = this.createItems(), this.items)
        for (var e = 0; e < this.items.length; e++) t.addItem(this.items[e]);
    return t
}, vjs.MenuButton.prototype.createItems = function () {}, vjs.MenuButton.prototype.buildCSSClass = function () {
    return this.className + " vjs-menu-button " + vjs.Button.prototype.buildCSSClass.call(this)
}, vjs.MenuButton.prototype.onFocus = function () {}, vjs.MenuButton.prototype.onBlur = function () {}, vjs.MenuButton.prototype.onClick = function () {
    this.one("mouseout", vjs.bind(this, function () {
        this.menu.unlockShowing(), this.el_.blur()
    })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
}, vjs.MenuButton.prototype.onKeyPress = function (t) {
    t.preventDefault(), 32 == t.which || 13 == t.which ? this.buttonPressed_ ? this.unpressButton() : this.pressButton() : 27 == t.which && this.buttonPressed_ && this.unpressButton()
}, vjs.MenuButton.prototype.pressButton = function () {
    this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-pressed", !0), this.items && this.items.length > 0 && this.items[0].el().focus()
}, vjs.MenuButton.prototype.unpressButton = function () {
    this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-pressed", !1)
}, vjs.MediaError = function (t) {
    "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : "object" == typeof t && vjs.obj.merge(this, t), this.message || (this.message = vjs.MediaError.defaultMessages[this.code] || "")
}, vjs.MediaError.prototype.code = 0, vjs.MediaError.prototype.message = "", vjs.MediaError.prototype.status = null, vjs.MediaError.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], vjs.MediaError.defaultMessages = {
    1: "You aborted the video playback",
    2: "A network error caused the video download to fail part-way.",
    3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
    4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
    5: "The video is encrypted and we do not have the keys to decrypt it."
};
for (var errNum = 0; errNum < vjs.MediaError.errorTypes.length; errNum++) vjs.MediaError[vjs.MediaError.errorTypes[errNum]] = errNum, vjs.MediaError.prototype[vjs.MediaError.errorTypes[errNum]] = errNum;
! function () {
    var t, e, n, r;
    for (vjs.browser.fullscreenAPI, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], e = t[0], r = 0; r < t.length; r++)
        if (t[r][1] in document) {
            n = t[r];
            break
        }
    if (n)
        for (vjs.browser.fullscreenAPI = {}, r = 0; r < n.length; r++) vjs.browser.fullscreenAPI[e[r]] = n[r]
}(), vjs.Player = vjs.Component.extend({
    init: function (t, e, n) {
        this.tag = t, t.id = t.id || "vjs_video_" + vjs.guid++, e = vjs.obj.merge(this.getTagSettings(t), e), this.cache_ = {}, this.poster_ = e.poster, this.controls_ = e.controls, t.controls = !1, e.reportTouchActivity = !1, this.ready(function () {
            this.on("loadstart", this.onLoadStart), this.on("ended", this.onEnded), this.on("play", this.onPlay), this.on("firstplay", this.onFirstPlay), this.on("pause", this.onPause), this.on("progress", this.onProgress), this.on("durationchange", this.onDurationChange), this.on("fullscreenchange", this.onFullscreenChange)
        }), vjs.Component.call(this, this, e, n), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), vjs.players[this.id_] = this, e.plugins && vjs.obj.each(e.plugins, function (t, e) {
            this[t](e)
        }, this), this.listenForUserActivity()
    }
}), vjs.Player.prototype.options_ = vjs.options, vjs.Player.prototype.dispose = function () {
    this.trigger("dispose"), this.off("dispose"), vjs.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.stopTrackingProgress(), this.stopTrackingCurrentTime(), this.tech && this.tech.dispose(), vjs.Component.prototype.dispose.call(this)
}, vjs.Player.prototype.getTagSettings = function (t) {
    var e = {
        sources: [],
        tracks: []
    };
    if (vjs.obj.merge(e, vjs.getAttributeValues(t)), t.hasChildNodes()) {
        var n, r, i, o, s;
        for (n = t.childNodes, o = 0, s = n.length; o < s; o++) r = n[o], i = r.nodeName.toLowerCase(), "source" === i ? e.sources.push(vjs.getAttributeValues(r)) : "track" === i && e.tracks.push(vjs.getAttributeValues(r))
    }
    return e
}, vjs.Player.prototype.createEl = function () {
    var t = this.el_ = vjs.Component.prototype.createEl.call(this, "div"),
        e = this.tag;
    if (e.removeAttribute("width"), e.removeAttribute("height"), e.hasChildNodes()) {
        var n, r, i, o, s, a;
        for (n = e.childNodes, r = n.length, a = []; r--;) o = n[r], s = o.nodeName.toLowerCase(), "track" === s && a.push(o);
        for (i = 0; i < a.length; i++) e.removeChild(a[i])
    }
    return t.id = e.id, t.className = e.className, e.id += "_html5_api", e.className = "vjs-tech", e.player = t.player = this, this.addClass("vjs-paused"), this.width(this.options_.width, !0), this.height(this.options_.height, !0), e.parentNode && e.parentNode.insertBefore(t, e), vjs.insertFirst(e, t), t
}, vjs.Player.prototype.loadTech = function (t, e) {
    this.tech && this.unloadTech(), "Html5" !== t && this.tag && (vjs.Html5.disposeMediaElement(this.tag), this.tag = null), this.techName = t, this.isReady_ = !1;
    var n = function () {
            this.player_.triggerReady(), this.features.progressEvents || this.player_.manualProgressOn(), this.features.timeupdateEvents || this.player_.manualTimeUpdatesOn()
        },
        r = vjs.obj.merge({
            source: e,
            parentEl: this.el_
        }, this.options_[t.toLowerCase()]);
    e && (e.src == this.cache_.src && this.cache_.currentTime > 0 && (r.startTime = this.cache_.currentTime), this.cache_.src = e.src), this.tech = new window.videojs[t](this, r), this.tech.ready(n)
}, vjs.Player.prototype.unloadTech = function () {
    this.isReady_ = !1, this.tech.dispose(), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), this.tech = !1
}, vjs.Player.prototype.manualProgressOn = function () {
    this.manualProgress = !0, this.trackProgress(), this.tech && this.tech.one("progress", function () {
        this.features.progressEvents = !0, this.player_.manualProgressOff()
    })
}, vjs.Player.prototype.manualProgressOff = function () {
    this.manualProgress = !1, this.stopTrackingProgress()
}, vjs.Player.prototype.trackProgress = function () {
    this.progressInterval = setInterval(vjs.bind(this, function () {
        this.cache_.bufferEnd < this.buffered().end(0) ? this.trigger("progress") : 1 == this.bufferedPercent() && (this.stopTrackingProgress(), this.trigger("progress"))
    }), 500)
}, vjs.Player.prototype.stopTrackingProgress = function () {
    clearInterval(this.progressInterval)
}, vjs.Player.prototype.manualTimeUpdatesOn = function () {
    this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime), this.tech && this.tech.one("timeupdate", function () {
        this.features.timeupdateEvents = !0, this.player_.manualTimeUpdatesOff()
    })
}, vjs.Player.prototype.manualTimeUpdatesOff = function () {
    this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
}, vjs.Player.prototype.trackCurrentTime = function () {
    this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = setInterval(vjs.bind(this, function () {
        this.trigger("timeupdate")
    }), 250)
}, vjs.Player.prototype.stopTrackingCurrentTime = function () {
    clearInterval(this.currentTimeInterval), this.trigger("timeupdate")
}, vjs.Player.prototype.onLoadStart = function () {
    this.off("play", initFirstPlay), this.one("play", initFirstPlay), this.error() && this.error(null), vjs.removeClass(this.el_, "vjs-has-started")
}, vjs.Player.prototype.onLoadedMetaData, vjs.Player.prototype.onLoadedData, vjs.Player.prototype.onLoadedAllData, vjs.Player.prototype.onPlay = function () {
    vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing")
}, vjs.Player.prototype.onFirstPlay = function () {
    this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started")
}, vjs.Player.prototype.onPause = function () {
    vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused")
}, vjs.Player.prototype.onTimeUpdate, vjs.Player.prototype.onProgress = function () {
    1 == this.bufferedPercent() && this.trigger("loadedalldata")
}, vjs.Player.prototype.onEnded = function () {
    this.options_.loop && (this.currentTime(0), this.play())
}, vjs.Player.prototype.onDurationChange = function () {
    var t = this.techGet("duration");
    t && (t < 0 && (t = 1 / 0), this.duration(t), t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"))
}, vjs.Player.prototype.onVolumeChange, vjs.Player.prototype.onFullscreenChange = function () {
    this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
}, vjs.Player.prototype.cache_, vjs.Player.prototype.getCache = function () {
    return this.cache_
}, vjs.Player.prototype.techCall = function (t, e) {
    if (this.tech && !this.tech.isReady_) this.tech.ready(function () {
        this[t](e)
    });
    else try {
        this.tech[t](e)
    } catch (n) {
        throw vjs.log(n), n
    }
}, vjs.Player.prototype.techGet = function (t) {
    if (this.tech && this.tech.isReady_) try {
        return this.tech[t]()
    } catch (e) {
        throw void 0 === this.tech[t] ? vjs.log("Video.js: " + t + " method not defined for " + this.techName + " playback technology.", e) : "TypeError" == e.name ? (vjs.log("Video.js: " + t + " unavailable on " + this.techName + " playback technology element.", e), this.tech.isReady_ = !1) : vjs.log(e), e
    }
}, vjs.Player.prototype.play = function () {
    return this.techCall("play"), this
}, vjs.Player.prototype.pause = function () {
    return this.techCall("pause"), this
}, vjs.Player.prototype.paused = function () {
    return this.techGet("paused") !== !1
}, vjs.Player.prototype.currentTime = function (t) {
    return void 0 !== t ? (this.techCall("setCurrentTime", t), this.manualTimeUpdates && this.trigger("timeupdate"), this) : this.cache_.currentTime = this.techGet("currentTime") || 0
}, vjs.Player.prototype.duration = function (t) {
    return void 0 !== t ? (this.cache_.duration = parseFloat(t), this) : (void 0 === this.cache_.duration && this.onDurationChange(), this.cache_.duration || 0)
}, vjs.Player.prototype.remainingTime = function () {
    return this.duration() - this.currentTime()
}, vjs.Player.prototype.buffered = function () {
    var t = this.techGet("buffered"),
        e = 0,
        n = t.length - 1,
        r = this.cache_.bufferEnd = this.cache_.bufferEnd || 0;
    return t && n >= 0 && t.end(n) !== r && (r = t.end(n), this.cache_.bufferEnd = r), vjs.createTimeRange(e, r)
}, vjs.Player.prototype.bufferedPercent = function () {
    return this.duration() ? this.buffered().end(0) / this.duration() : 0
}, vjs.Player.prototype.volume = function (t) {
    var e;
    return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall("setVolume", e), vjs.setLocalStorage("volume", e), this) : (e = parseFloat(this.techGet("volume")), isNaN(e) ? 1 : e)
}, vjs.Player.prototype.muted = function (t) {
    return void 0 !== t ? (this.techCall("setMuted", t), this) : this.techGet("muted") || !1
}, vjs.Player.prototype.supportsFullScreen = function () {
    return this.techGet("supportsFullScreen") || !1
}, vjs.Player.prototype.isFullscreen_ = !1, vjs.Player.prototype.isFullscreen = function (t) {
    return void 0 !== t ? (this.isFullscreen_ = !!t, this) : this.isFullscreen_
}, vjs.Player.prototype.isFullScreen = function (t) {
    return vjs.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'), this.isFullscreen(t)
}, vjs.Player.prototype.requestFullscreen = function () {
    var t = vjs.browser.fullscreenAPI;
    return this.isFullscreen(!0), t ? (vjs.on(document, t.fullscreenchange, vjs.bind(this, function (e) {
        this.isFullscreen(document[t.fullscreenElement]), this.isFullscreen() === !1 && vjs.off(document, t.fullscreenchange, arguments.callee), this.trigger("fullscreenchange")
    })), this.el_[t.requestFullscreen]()) : this.tech.supportsFullScreen() ? this.techCall("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
}, vjs.Player.prototype.requestFullScreen = function () {
    return vjs.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'), this.requestFullscreen()
}, vjs.Player.prototype.exitFullscreen = function () {
    var t = vjs.browser.fullscreenAPI;
    return this.isFullscreen(!1), t ? document[t.exitFullscreen]() : this.tech.supportsFullScreen() ? this.techCall("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
}, vjs.Player.prototype.cancelFullScreen = function () {
    return vjs.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
}, vjs.Player.prototype.enterFullWindow = function () {
    this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)), document.documentElement.style.overflow = "hidden", vjs.addClass(document.body, "vjs-full-window"), this.trigger("enterFullWindow")
}, vjs.Player.prototype.fullWindowOnEscKey = function (t) {
    27 === t.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow())
}, vjs.Player.prototype.exitFullWindow = function () {
    this.isFullWindow = !1, vjs.off(document, "keydown", this.fullWindowOnEscKey), document.documentElement.style.overflow = this.docOrigOverflow, vjs.removeClass(document.body, "vjs-full-window"), this.trigger("exitFullWindow")
}, vjs.Player.prototype.selectSource = function (t) {
    for (var e = 0, n = this.options_.techOrder; e < n.length; e++) {
        var r = vjs.capitalize(n[e]),
            i = window.videojs[r];
        if (i) {
            if (i.isSupported())
                for (var o = 0, s = t; o < s.length; o++) {
                    var a = s[o];
                    if (i.canPlaySource(a)) return {
                        source: a,
                        tech: r
                    }
                }
        } else vjs.log.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
    }
    return !1
}, vjs.Player.prototype.src = function (t) {
    if (void 0 === t) return this.techGet("src");
    if (t instanceof Array) {
        var e, n = this.selectSource(t);
        n ? (t = n.source, e = n.tech, e == this.techName ? this.src(t) : this.loadTech(e, t)) : (this.error({
            code: 4,
            message: this.options().notSupportedMessage
        }), this.triggerReady())
    } else t instanceof Object ? window.videojs[this.techName].canPlaySource(t) ? this.src(t.src) : this.src([t]) : (this.cache_.src = t, this.isReady_ ? (this.techCall("src", t), "auto" == this.options_.preload && this.load(), this.options_.autoplay && this.play()) : this.ready(function () {
        this.src(t)
    }));
    return this
}, vjs.Player.prototype.load = function () {
    return this.techCall("load"), this
}, vjs.Player.prototype.currentSrc = function () {
    return this.techGet("currentSrc") || this.cache_.src || ""
}, vjs.Player.prototype.preload = function (t) {
    return void 0 !== t ? (this.techCall("setPreload", t), this.options_.preload = t, this) : this.techGet("preload")
}, vjs.Player.prototype.autoplay = function (t) {
    return void 0 !== t ? (this.techCall("setAutoplay", t), this.options_.autoplay = t, this) : this.techGet("autoplay", t)
}, vjs.Player.prototype.loop = function (t) {
    return void 0 !== t ? (this.techCall("setLoop", t), this.options_.loop = t, this) : this.techGet("loop")
}, vjs.Player.prototype.poster_, vjs.Player.prototype.poster = function (t) {
    return void 0 === t ? this.poster_ : (this.poster_ = t, this.techCall("setPoster", t), void this.trigger("posterchange"))
}, vjs.Player.prototype.controls_, vjs.Player.prototype.controls = function (t) {
    return void 0 !== t ? (t = !!t, this.controls_ !== t && (this.controls_ = t, t ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled")) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"))), this) : this.controls_
}, vjs.Player.prototype.usingNativeControls_, vjs.Player.prototype.usingNativeControls = function (t) {
    return void 0 !== t ? (t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, t ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : this.usingNativeControls_
}, vjs.Player.prototype.error_ = null, vjs.Player.prototype.error = function (t) {
    return void 0 === t ? this.error_ : null === t ? (this.error_ = t, this.removeClass("vjs-error"), this) : (t instanceof vjs.MediaError ? this.error_ = t : this.error_ = new vjs.MediaError(t), this.trigger("error"), this.addClass("vjs-error"), vjs.log.error("(CODE:" + this.error_.code + " " + vjs.MediaError.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this)
}, vjs.Player.prototype.ended = function () {
    return this.techGet("ended")
}, vjs.Player.prototype.seeking = function () {
    return this.techGet("seeking")
}, vjs.Player.prototype.userActivity_ = !0, vjs.Player.prototype.reportUserActivity = function (t) {
    this.userActivity_ = !0
}, vjs.Player.prototype.userActive_ = !0, vjs.Player.prototype.userActive = function (t) {
    return void 0 !== t ? (t = !!t, t !== this.userActive_ && (this.userActive_ = t, t ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech && this.tech.one("mousemove", function (t) {
        t.stopPropagation(), t.preventDefault()
    }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
}, vjs.Player.prototype.listenForUserActivity = function () {
    var t, e, n, r, i, o, s, a, l;
    t = vjs.bind(this, this.reportUserActivity), e = function (e) {
        e.screenX == a && e.screenY == l || (a = e.screenX, l = e.screenY, t())
    }, n = function () {
        t(), clearInterval(r), r = setInterval(t, 250)
    }, i = function (e) {
        t(), clearInterval(r)
    }, this.on("mousedown", n), this.on("mousemove", e), this.on("mouseup", i), this.on("keydown", t), this.on("keyup", t), o = setInterval(vjs.bind(this, function () {
        this.userActivity_ && (this.userActivity_ = !1, this.userActive(!0), clearTimeout(s), s = setTimeout(vjs.bind(this, function () {
            this.userActivity_ || this.userActive(!1)
        }), 2e3))
    }), 250), this.on("dispose", function () {
        clearInterval(o), clearTimeout(s)
    })
}, vjs.Player.prototype.playbackRate = function (t) {
    return void 0 !== t ? (this.techCall("setPlaybackRate", t), this) : this.tech && this.tech.features && this.tech.features.playbackRate ? this.techGet("playbackRate") : 1
}, vjs.ControlBar = vjs.Component.extend(), vjs.ControlBar.prototype.options_ = {
    loadEvent: "play",
    children: {
        playToggle: {},
        currentTimeDisplay: {},
        timeDivider: {},
        durationDisplay: {},
        remainingTimeDisplay: {},
        liveDisplay: {},
        progressControl: {},
        fullscreenToggle: {},
        volumeControl: {},
        muteToggle: {},
        playbackRateMenuButton: {}
    }
}, vjs.ControlBar.prototype.createEl = function () {
    return vjs.createEl("div", {
        className: "vjs-control-bar"
    })
}, vjs.LiveDisplay = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e)
    }
}), vjs.LiveDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-live-controls vjs-control"
    });
    return this.contentEl_ = vjs.createEl("div", {
        className: "vjs-live-display",
        innerHTML: '<span class="vjs-control-text">Stream Type </span>LIVE',
        "aria-live": "off"
    }), t.appendChild(this.contentEl_), t
}, vjs.PlayToggle = vjs.Button.extend({
    init: function (t, e) {
        vjs.Button.call(this, t, e), t.on("play", vjs.bind(this, this.onPlay)), t.on("pause", vjs.bind(this, this.onPause))
    }
}), vjs.PlayToggle.prototype.buttonText = "Play", vjs.PlayToggle.prototype.buildCSSClass = function () {
    return "vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this)
}, vjs.PlayToggle.prototype.onClick = function () {
    this.player_.paused() ? this.player_.play() : this.player_.pause()
}, vjs.PlayToggle.prototype.onPlay = function () {
    vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing"), this.el_.children[0].children[0].innerHTML = "Pause"
}, vjs.PlayToggle.prototype.onPause = function () {
    vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused"), this.el_.children[0].children[0].innerHTML = "Play"
}, vjs.CurrentTimeDisplay = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e), t.on("timeupdate", vjs.bind(this, this.updateContent))
    }
}), vjs.CurrentTimeDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-current-time vjs-time-controls vjs-control"
    });
    return this.contentEl_ = vjs.createEl("div", {
        className: "vjs-current-time-display",
        innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
        "aria-live": "off"
    }), t.appendChild(this.contentEl_), t
}, vjs.CurrentTimeDisplay.prototype.updateContent = function () {
    var t = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.contentEl_.innerHTML = '<span class="vjs-control-text">Current Time </span>' + vjs.formatTime(t, this.player_.duration())
}, vjs.DurationDisplay = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e), t.on("timeupdate", vjs.bind(this, this.updateContent))
    }
}), vjs.DurationDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-duration vjs-time-controls vjs-control"
    });
    return this.contentEl_ = vjs.createEl("div", {
        className: "vjs-duration-display",
        innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
        "aria-live": "off"
    }), t.appendChild(this.contentEl_), t
}, vjs.DurationDisplay.prototype.updateContent = function () {
    var t = this.player_.duration();
    t && (this.contentEl_.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + vjs.formatTime(t))
}, vjs.TimeDivider = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e)
    }
}), vjs.TimeDivider.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-time-divider",
        innerHTML: "<div><span>/</span></div>"
    })
}, vjs.RemainingTimeDisplay = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e), t.on("timeupdate", vjs.bind(this, this.updateContent))
    }
}), vjs.RemainingTimeDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-remaining-time vjs-time-controls vjs-control"
    });
    return this.contentEl_ = vjs.createEl("div", {
        className: "vjs-remaining-time-display",
        innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
        "aria-live": "off"
    }), t.appendChild(this.contentEl_), t
}, vjs.RemainingTimeDisplay.prototype.updateContent = function () {
    this.player_.duration() && (this.contentEl_.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + vjs.formatTime(this.player_.remainingTime()))
}, vjs.FullscreenToggle = vjs.Button.extend({
    init: function (t, e) {
        vjs.Button.call(this, t, e)
    }
}), vjs.FullscreenToggle.prototype.buttonText = "Fullscreen", vjs.FullscreenToggle.prototype.buildCSSClass = function () {
    return "vjs-fullscreen-control " + vjs.Button.prototype.buildCSSClass.call(this)
}, vjs.FullscreenToggle.prototype.onClick = function () {
    this.player_.isFullscreen() ? (this.player_.exitFullscreen(), this.controlText_.innerHTML = "Fullscreen") : (this.player_.requestFullscreen(), this.controlText_.innerHTML = "Non-Fullscreen")
}, vjs.ProgressControl = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e)
    }
}), vjs.ProgressControl.prototype.options_ = {
    children: {
        seekBar: {}
    }
}, vjs.ProgressControl.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-progress-control vjs-control"
    })
}, vjs.SeekBar = vjs.Slider.extend({
    init: function (t, e) {
        vjs.Slider.call(this, t, e), t.on("timeupdate", vjs.bind(this, this.updateARIAAttributes)), t.ready(vjs.bind(this, this.updateARIAAttributes))
    }
}), vjs.SeekBar.prototype.options_ = {
    children: {
        loadProgressBar: {},
        playProgressBar: {},
        seekHandle: {}
    },
    barName: "playProgressBar",
    handleName: "seekHandle"
}, vjs.SeekBar.prototype.playerEvent = "timeupdate", vjs.SeekBar.prototype.createEl = function () {
    return vjs.Slider.prototype.createEl.call(this, "div", {
        className: "vjs-progress-holder",
        "aria-label": "video progress bar"
    })
}, vjs.SeekBar.prototype.updateARIAAttributes = function () {
    var t = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.getPercent(), 2)), this.el_.setAttribute("aria-valuetext", vjs.formatTime(t, this.player_.duration()))
}, vjs.SeekBar.prototype.getPercent = function () {
    return this.player_.currentTime() / this.player_.duration()
}, vjs.SeekBar.prototype.onMouseDown = function (t) {
    vjs.Slider.prototype.onMouseDown.call(this, t), this.player_.scrubbing = !0, this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
}, vjs.SeekBar.prototype.onMouseMove = function (t) {
    var e = this.calculateDistance(t) * this.player_.duration();
    e == this.player_.duration() && (e -= .1), this.player_.currentTime(e)
}, vjs.SeekBar.prototype.onMouseUp = function (t) {
    vjs.Slider.prototype.onMouseUp.call(this, t), this.player_.scrubbing = !1, this.videoWasPlaying && this.player_.play()
}, vjs.SeekBar.prototype.stepForward = function () {
    this.player_.currentTime(this.player_.currentTime() + 5)
}, vjs.SeekBar.prototype.stepBack = function () {
    this.player_.currentTime(this.player_.currentTime() - 5)
}, vjs.LoadProgressBar = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e), t.on("progress", vjs.bind(this, this.update))
    }
}), vjs.LoadProgressBar.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-load-progress",
        innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
    })
}, vjs.LoadProgressBar.prototype.update = function () {
    this.el_.style && (this.el_.style.width = vjs.round(100 * this.player_.bufferedPercent(), 2) + "%")
}, vjs.PlayProgressBar = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e)
    }
}), vjs.PlayProgressBar.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-play-progress",
        innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
    })
}, vjs.SeekHandle = vjs.SliderHandle.extend({
    init: function (t, e) {
        vjs.SliderHandle.call(this, t, e), t.on("timeupdate", vjs.bind(this, this.updateContent))
    }
}), vjs.SeekHandle.prototype.defaultValue = "00:00", vjs.SeekHandle.prototype.createEl = function () {
    return vjs.SliderHandle.prototype.createEl.call(this, "div", {
        className: "vjs-seek-handle",
        "aria-live": "off"
    })
}, vjs.SeekHandle.prototype.updateContent = function () {
    var t = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.el_.innerHTML = '<span class="vjs-control-text">' + vjs.formatTime(t, this.player_.duration()) + "</span>"
}, vjs.VolumeControl = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e), t.tech && t.tech.features && t.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), t.on("loadstart", vjs.bind(this, function () {
            t.tech.features && t.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
        }))
    }
}), vjs.VolumeControl.prototype.options_ = {
    children: {
        volumeBar: {}
    }
}, vjs.VolumeControl.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-volume-control vjs-control"
    })
}, vjs.VolumeBar = vjs.Slider.extend({
    init: function (t, e) {
        vjs.Slider.call(this, t, e), t.on("volumechange", vjs.bind(this, this.updateARIAAttributes)), t.ready(vjs.bind(this, this.updateARIAAttributes))
    }
}), vjs.VolumeBar.prototype.updateARIAAttributes = function () {
    this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.player_.volume(), 2)), this.el_.setAttribute("aria-valuetext", vjs.round(100 * this.player_.volume(), 2) + "%")
}, vjs.VolumeBar.prototype.options_ = {
    children: {
        volumeLevel: {},
        volumeHandle: {}
    },
    barName: "volumeLevel",
    handleName: "volumeHandle"
}, vjs.VolumeBar.prototype.playerEvent = "volumechange", vjs.VolumeBar.prototype.createEl = function () {
    return vjs.Slider.prototype.createEl.call(this, "div", {
        className: "vjs-volume-bar",
        "aria-label": "volume level"
    })
}, vjs.VolumeBar.prototype.onMouseMove = function (t) {
    this.player_.muted() && this.player_.muted(!1), this.player_.volume(this.calculateDistance(t))
}, vjs.VolumeBar.prototype.getPercent = function () {
    return this.player_.muted() ? 0 : this.player_.volume()
}, vjs.VolumeBar.prototype.stepForward = function () {
    this.player_.volume(this.player_.volume() + .1)
}, vjs.VolumeBar.prototype.stepBack = function () {
    this.player_.volume(this.player_.volume() - .1)
}, vjs.VolumeLevel = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e)
    }
}), vjs.VolumeLevel.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-volume-level",
        innerHTML: '<span class="vjs-control-text"></span>'
    })
}, vjs.VolumeHandle = vjs.SliderHandle.extend(), vjs.VolumeHandle.prototype.defaultValue = "00:00", vjs.VolumeHandle.prototype.createEl = function () {
    return vjs.SliderHandle.prototype.createEl.call(this, "div", {
        className: "vjs-volume-handle"
    })
}, vjs.MuteToggle = vjs.Button.extend({
    init: function (t, e) {
        vjs.Button.call(this, t, e), t.on("volumechange", vjs.bind(this, this.update)), t.tech && t.tech.features && t.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), t.on("loadstart", vjs.bind(this, function () {
            t.tech.features && t.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
        }))
    }
}), vjs.MuteToggle.prototype.createEl = function () {
    return vjs.Button.prototype.createEl.call(this, "div", {
        className: "vjs-mute-control vjs-control",
        innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
    })
}, vjs.MuteToggle.prototype.onClick = function () {
    this.player_.muted(!this.player_.muted())
}, vjs.MuteToggle.prototype.update = function () {
    var t = this.player_.volume(),
        e = 3;
    0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2), this.player_.muted() ? "Unmute" != this.el_.children[0].children[0].innerHTML && (this.el_.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.el_.children[0].children[0].innerHTML && (this.el_.children[0].children[0].innerHTML = "Mute");
    for (var n = 0; n < 4; n++) vjs.removeClass(this.el_, "vjs-vol-" + n);
    vjs.addClass(this.el_, "vjs-vol-" + e)
}, vjs.VolumeMenuButton = vjs.MenuButton.extend({
    init: function (t, e) {
        vjs.MenuButton.call(this, t, e), t.on("volumechange", vjs.bind(this, this.update)), t.tech && t.tech.features && t.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), t.on("loadstart", vjs.bind(this, function () {
            t.tech.features && t.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
        })), this.addClass("vjs-menu-button")
    }
}), vjs.VolumeMenuButton.prototype.createMenu = function () {
    var t = new vjs.Menu(this.player_, {
            contentElType: "div"
        }),
        e = new vjs.VolumeBar(this.player_, vjs.obj.merge({
            vertical: !0
        }, this.options_.volumeBar));
    return t.addChild(e), t
}, vjs.VolumeMenuButton.prototype.onClick = function () {
    vjs.MuteToggle.prototype.onClick.call(this), vjs.MenuButton.prototype.onClick.call(this)
}, vjs.VolumeMenuButton.prototype.createEl = function () {
    return vjs.Button.prototype.createEl.call(this, "div", {
        className: "vjs-volume-menu-button vjs-menu-button vjs-control",
        innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
    })
}, vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update, vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({
    init: function (t, e) {
        vjs.MenuButton.call(this, t, e), this.updateVisibility(), this.updateLabel(), t.on("loadstart", vjs.bind(this, this.updateVisibility)), t.on("ratechange", vjs.bind(this, this.updateLabel))
    }
}), vjs.PlaybackRateMenuButton.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-playback-rate vjs-menu-button vjs-control",
        innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">Playback Rate</span></div>'
    });
    return this.labelEl_ = vjs.createEl("div", {
        className: "vjs-playback-rate-value",
        innerHTML: 1
    }), t.appendChild(this.labelEl_), t
}, vjs.PlaybackRateMenuButton.prototype.createMenu = function () {
    var t = new vjs.Menu(this.player()),
        e = this.player().options().playbackRates;
    if (e)
        for (var n = e.length - 1; n >= 0; n--) t.addChild(new vjs.PlaybackRateMenuItem(this.player(), {
            rate: e[n] + "x"
        }));
    return t
}, vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function () {
    this.el().setAttribute("aria-valuenow", this.player().playbackRate())
}, vjs.PlaybackRateMenuButton.prototype.onClick = function () {
    for (var t = this.player().playbackRate(), e = this.player().options().playbackRates, n = e[0], r = 0; r < e.length; r++)
        if (e[r] > t) {
            n = e[r];
            break
        }
    this.player().playbackRate(n)
}, vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function () {
    return this.player().tech && this.player().tech.features.playbackRate && this.player().options().playbackRates && this.player().options().playbackRates.length > 0
}, vjs.PlaybackRateMenuButton.prototype.updateVisibility = function () {
    this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
}, vjs.PlaybackRateMenuButton.prototype.updateLabel = function () {
    this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
}, vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
    contentElType: "button",
    init: function (t, e) {
        var n = this.label = e.rate,
            r = this.rate = parseFloat(n, 10);
        e.label = n, e.selected = 1 === r, vjs.MenuItem.call(this, t, e), this.player().on("ratechange", vjs.bind(this, this.update))
    }
}), vjs.PlaybackRateMenuItem.prototype.onClick = function () {
    vjs.MenuItem.prototype.onClick.call(this), this.player().playbackRate(this.rate)
}, vjs.PlaybackRateMenuItem.prototype.update = function () {
    this.selected(this.player().playbackRate() == this.rate)
}, vjs.PosterImage = vjs.Button.extend({
    init: function (t, e) {
        vjs.Button.call(this, t, e), t.poster() && this.src(t.poster()), t.poster() && t.controls() || this.hide(), t.on("posterchange", vjs.bind(this, function () {
            this.src(t.poster())
        })), t.on("play", vjs.bind(this, this.hide)), t.on("ended", vjs.bind(this, this.show))
    }
});
var _backgroundSizeSupported = "backgroundSize" in vjs.TEST_VID.style;
vjs.PosterImage.prototype.createEl = function () {
    var t = vjs.createEl("div", {
        className: "vjs-poster",
        tabIndex: -1
    });
    return _backgroundSizeSupported || t.appendChild(vjs.createEl("img")), t
}, vjs.PosterImage.prototype.src = function (t) {
    var e = this.el();
    void 0 !== t && (_backgroundSizeSupported ? e.style.backgroundImage = 'url("' + t + '")' : e.firstChild.src = t)
}, vjs.PosterImage.prototype.onClick = function () {
    this.player().controls() && this.player_.play()
}, vjs.LoadingSpinner = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e), t.on("canplay", vjs.bind(this, this.hide)), t.on("canplaythrough", vjs.bind(this, this.hide)), t.on("playing", vjs.bind(this, this.hide)), t.on("seeking", vjs.bind(this, this.show)), t.on("seeked", vjs.bind(this, this.hide)), t.on("ended", vjs.bind(this, this.hide)), t.on("waiting", vjs.bind(this, this.show))
    }
}), vjs.LoadingSpinner.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-loading-spinner"
    })
}, vjs.BigPlayButton = vjs.Button.extend(), vjs.BigPlayButton.prototype.createEl = function () {
    return vjs.Button.prototype.createEl.call(this, "div", {
        className: "vjs-big-play-button",
        innerHTML: '<span aria-hidden="true"></span>',
        "aria-label": "play video"
    })
}, vjs.BigPlayButton.prototype.onClick = function () {
    this.player_.play()
}, vjs.ErrorDisplay = vjs.Component.extend({
    init: function (t, e) {
        vjs.Component.call(this, t, e), this.update(), t.on("error", vjs.bind(this, this.update))
    }
}), vjs.ErrorDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-error-display"
    });
    return this.contentEl_ = vjs.createEl("div"), t.appendChild(this.contentEl_), t
}, vjs.ErrorDisplay.prototype.update = function () {
    this.player().error() && (this.contentEl_.innerHTML = this.player().error().message)
}, vjs.MediaTechController = vjs.Component.extend({
    init: function (t, e, n) {
        e = e || {}, e.reportTouchActivity = !1, vjs.Component.call(this, t, e, n), this.initControlsListeners()
    }
}), vjs.MediaTechController.prototype.initControlsListeners = function () {
    var t, e, n, r;
    e = this, t = this.player();
    var n = function () {
        t.controls() && !t.usingNativeControls() && e.addControlsListeners()
    };
    r = vjs.bind(e, e.removeControlsListeners), this.ready(n), t.on("controlsenabled", n), t.on("controlsdisabled", r)
}, vjs.MediaTechController.prototype.addControlsListeners = function () {
    var t;
    this.on("mousedown", this.onClick), this.on("touchstart", function (e) {
        e.preventDefault(), t = this.player_.userActive()
    }), this.on("touchmove", function (e) {
        t && this.player().reportUserActivity()
    }), this.emitTapEvents(), this.on("tap", this.onTap)
}, vjs.MediaTechController.prototype.removeControlsListeners = function () {
    this.off("tap"), this.off("touchstart"), this.off("touchmove"), this.off("touchleave"), this.off("touchcancel"), this.off("touchend"), this.off("click"), this.off("mousedown")
}, vjs.MediaTechController.prototype.onClick = function (t) {
    0 === t.button && this.player().controls() && (this.player().paused() ? this.player().play() : this.player().pause())
}, vjs.MediaTechController.prototype.onTap = function () {
    this.player().userActive(!this.player().userActive())
}, vjs.MediaTechController.prototype.setPoster = function () {}, vjs.MediaTechController.prototype.features = {
    volumeControl: !0,
    fullscreenResize: !1,
    playbackRate: !1,
    progressEvents: !1,
    timeupdateEvents: !1
}, vjs.media = {}, vjs.media.ApiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
for (var i = vjs.media.ApiMethods.length - 1; i >= 0; i--) {
    var methodName = vjs.media.ApiMethods[i];
    vjs.MediaTechController.prototype[vjs.media.ApiMethods[i]] = createMethod(methodName)
}
vjs.Html5 = vjs.MediaTechController.extend({
        init: function (t, e, n) {
            this.features.volumeControl = vjs.Html5.canControlVolume(), this.features.playbackRate = vjs.Html5.canControlPlaybackRate(), this.features.movingMediaElementInDOM = !vjs.IS_IOS, this.features.fullscreenResize = !0, vjs.MediaTechController.call(this, t, e, n), this.setupTriggers();
            var r = e.source;
            r && this.el_.currentSrc === r.src && this.el_.networkState > 0 ? t.ready(function () {
                t.trigger("loadstart")
            }) : r && (this.el_.src = r.src), vjs.TOUCH_ENABLED && t.options().nativeControlsForTouch !== !1 && this.useNativeControls(), t.ready(function () {
                this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
            }), this.triggerReady()
        }
    }), vjs.Html5.prototype.dispose = function () {
        vjs.MediaTechController.prototype.dispose.call(this)
    }, vjs.Html5.prototype.createEl = function () {
        var t, e = this.player_,
            n = e.tag;
        n && this.features.movingMediaElementInDOM !== !1 || (n ? (t = n.cloneNode(!1), vjs.Html5.disposeMediaElement(n), n = t, e.tag = null) : n = vjs.createEl("video", {
            id: e.id() + "_html5_api",
            className: "vjs-tech"
        }), n.player = e, vjs.insertFirst(n, e.el()));
        for (var r = ["autoplay", "preload", "loop", "muted"], i = r.length - 1; i >= 0; i--) {
            var o = r[i];
            null !== e.options_[o] && (n[o] = e.options_[o])
        }
        return n
    }, vjs.Html5.prototype.setupTriggers = function () {
        for (var t = vjs.Html5.Events.length - 1; t >= 0; t--) vjs.on(this.el_, vjs.Html5.Events[t], vjs.bind(this, this.eventHandler))
    }, vjs.Html5.prototype.eventHandler = function (t) {
        "error" == t.type ? this.player().error(this.error().code) : (t.bubbles = !1, this.player().trigger(t))
    }, vjs.Html5.prototype.useNativeControls = function () {
        var t, e, n, r, i;
        t = this, e = this.player(), t.setControls(e.controls()), n = function () {
            t.setControls(!0)
        }, r = function () {
            t.setControls(!1)
        }, e.on("controlsenabled", n), e.on("controlsdisabled", r), i = function () {
            e.off("controlsenabled", n), e.off("controlsdisabled", r)
        }, t.on("dispose", i), e.on("usingcustomcontrols", i), e.usingNativeControls(!0)
    }, vjs.Html5.prototype.play = function () {
        this.el_.play()
    }, vjs.Html5.prototype.pause = function () {
        this.el_.pause()
    }, vjs.Html5.prototype.paused = function () {
        return this.el_.paused
    }, vjs.Html5.prototype.currentTime = function () {
        return this.el_.currentTime
    }, vjs.Html5.prototype.setCurrentTime = function (t) {
        try {
            this.el_.currentTime = t
        } catch (e) {
            vjs.log(e, "Video is not ready. (Video.js)")
        }
    }, vjs.Html5.prototype.duration = function () {
        return this.el_.duration || 0
    }, vjs.Html5.prototype.buffered = function () {
        return this.el_.buffered
    }, vjs.Html5.prototype.volume = function () {
        return this.el_.volume
    }, vjs.Html5.prototype.setVolume = function (t) {
        this.el_.volume = t
    }, vjs.Html5.prototype.muted = function () {
        return this.el_.muted
    }, vjs.Html5.prototype.setMuted = function (t) {
        this.el_.muted = t
    }, vjs.Html5.prototype.width = function () {
        return this.el_.offsetWidth
    }, vjs.Html5.prototype.height = function () {
        return this.el_.offsetHeight
    }, vjs.Html5.prototype.supportsFullScreen = function () {
        return !("function" != typeof this.el_.webkitEnterFullScreen || !/Android/.test(vjs.USER_AGENT) && /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT))
    }, vjs.Html5.prototype.enterFullScreen = function () {
        var t = this.el_;
        t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), setTimeout(function () {
            t.pause(), t.webkitEnterFullScreen()
        }, 0)) : t.webkitEnterFullScreen()
    }, vjs.Html5.prototype.exitFullScreen = function () {
        this.el_.webkitExitFullScreen()
    }, vjs.Html5.prototype.src = function (t) {
        this.el_.src = t
    }, vjs.Html5.prototype.load = function () {
        this.el_.load()
    }, vjs.Html5.prototype.currentSrc = function () {
        return this.el_.currentSrc
    }, vjs.Html5.prototype.poster = function () {
        return this.el_.poster
    }, vjs.Html5.prototype.setPoster = function (t) {
        this.el_.poster = t
    }, vjs.Html5.prototype.preload = function () {
        return this.el_.preload
    }, vjs.Html5.prototype.setPreload = function (t) {
        this.el_.preload = t
    }, vjs.Html5.prototype.autoplay = function () {
        return this.el_.autoplay
    }, vjs.Html5.prototype.setAutoplay = function (t) {
        this.el_.autoplay = t
    }, vjs.Html5.prototype.controls = function () {
        return this.el_.controls
    }, vjs.Html5.prototype.setControls = function (t) {
        this.el_.controls = !!t
    }, vjs.Html5.prototype.loop = function () {
        return this.el_.loop
    }, vjs.Html5.prototype.setLoop = function (t) {
        this.el_.loop = t
    }, vjs.Html5.prototype.error = function () {
        return this.el_.error
    }, vjs.Html5.prototype.seeking = function () {
        return this.el_.seeking
    }, vjs.Html5.prototype.ended = function () {
        return this.el_.ended
    }, vjs.Html5.prototype.defaultMuted = function () {
        return this.el_.defaultMuted
    }, vjs.Html5.prototype.playbackRate = function () {
        return this.el_.playbackRate
    }, vjs.Html5.prototype.setPlaybackRate = function (t) {
        this.el_.playbackRate = t
    }, vjs.Html5.isSupported = function () {
        try {
            vjs.TEST_VID.volume = .5
        } catch (t) {
            return !1
        }
        return !!vjs.TEST_VID.canPlayType
    }, vjs.Html5.canPlaySource = function (t) {
        try {
            return !!vjs.TEST_VID.canPlayType(t.type)
        } catch (e) {
            return ""
        }
    }, vjs.Html5.canControlVolume = function () {
        var t = vjs.TEST_VID.volume;
        return vjs.TEST_VID.volume = t / 2 + .1, t !== vjs.TEST_VID.volume
    }, vjs.Html5.canControlPlaybackRate = function () {
        var t = vjs.TEST_VID.playbackRate;
        return vjs.TEST_VID.playbackRate = t / 2 + .1, t !== vjs.TEST_VID.playbackRate
    },
    function () {
        var t, e = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
            n = /^video\/mp4/i;
        vjs.Html5.patchCanPlayType = function () {
            vjs.ANDROID_VERSION >= 4 && (t || (t = vjs.TEST_VID.constructor.prototype.canPlayType), vjs.TEST_VID.constructor.prototype.canPlayType = function (n) {
                return n && e.test(n) ? "maybe" : t.call(this, n)
            }), vjs.IS_OLD_ANDROID && (t || (t = vjs.TEST_VID.constructor.prototype.canPlayType), vjs.TEST_VID.constructor.prototype.canPlayType = function (e) {
                return e && n.test(e) ? "maybe" : t.call(this, e)
            })
        }, vjs.Html5.unpatchCanPlayType = function () {
            var e = vjs.TEST_VID.constructor.prototype.canPlayType;
            return vjs.TEST_VID.constructor.prototype.canPlayType = t, t = null, e
        }, vjs.Html5.patchCanPlayType()
    }(), vjs.Html5.Events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), vjs.Html5.disposeMediaElement = function (t) {
        if (t) {
            for (t.player = null, t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
            t.removeAttribute("src"), "function" == typeof t.load && ! function () {
                try {
                    t.load()
                } catch (e) {}
            }()
        }
    }, vjs.Flash = vjs.MediaTechController.extend({
        init: function (t, e, n) {
            vjs.MediaTechController.call(this, t, e, n);
            var r, i = e.source,
                o = e.parentEl,
                s = this.el_ = vjs.createEl("div", {
                    id: t.id() + "_temp_flash"
                }),
                a = t.id() + "_flash_api",
                l = t.options_,
                u = vjs.obj.merge({
                    readyFunction: "videojs.Flash.onReady",
                    eventProxyFunction: "videojs.Flash.onEvent",
                    errorEventProxyFunction: "videojs.Flash.onError",
                    autoplay: l.autoplay,
                    preload: l.preload,
                    loop: l.loop,
                    muted: l.muted
                }, e.flashVars),
                c = vjs.obj.merge({
                    wmode: "opaque",
                    bgcolor: "#000000"
                }, e.params),
                h = vjs.obj.merge({
                    id: a,
                    name: a,
                    "class": "vjs-tech"
                }, e.attributes);
            if (i)
                if (i.type && vjs.Flash.isStreamingType(i.type)) {
                    var p = vjs.Flash.streamToParts(i.src);
                    u.rtmpConnection = encodeURIComponent(p.connection), u.rtmpStream = encodeURIComponent(p.stream)
                } else u.src = encodeURIComponent(vjs.getAbsoluteURL(i.src));
            if (this.setCurrentTime = function (t) {
                    r = t, this.el_.vjs_setProperty("currentTime", t)
                }, this.currentTime = function (t) {
                    return this.seeking() ? r : this.el_.vjs_getProperty("currentTime")
                }, vjs.insertFirst(s, o), e.startTime && this.ready(function () {
                    this.load(), this.play(), this.currentTime(e.startTime)
                }), vjs.IS_FIREFOX && this.ready(function () {
                    vjs.on(this.el(), "mousemove", vjs.bind(this, function () {
                        this.player().trigger({
                            type: "mousemove",
                            bubbles: !1
                        })
                    }))
                }), e.iFrameMode !== !0 || vjs.IS_FIREFOX) vjs.Flash.embed(e.swf, s, u, c, h);
            else {
                var d = vjs.createEl("iframe", {
                    id: a + "_iframe",
                    name: a + "_iframe",
                    className: "vjs-tech",
                    scrolling: "no",
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });
                u.readyFunction = "ready", u.eventProxyFunction = "events", u.errorEventProxyFunction = "errors", vjs.on(d, "load", vjs.bind(this, function () {
                    var t, n = d.contentWindow;
                    t = d.contentDocument ? d.contentDocument : d.contentWindow.document, t.write(vjs.Flash.getEmbedCode(e.swf, u, c, h)), n.player = this.player_, n.ready = vjs.bind(this.player_, function (e) {
                        var n = t.getElementById(e),
                            r = this,
                            i = r.tech;
                        i.el_ = n, vjs.Flash.checkReady(i)
                    }), n.events = vjs.bind(this.player_, function (t, e) {
                        var n = this;
                        n && "flash" === n.techName && n.trigger(e)
                    }), n.errors = vjs.bind(this.player_, function (t, e) {
                        vjs.log("Flash Error", e)
                    })
                })), s.parentNode.replaceChild(d, s)
            }
        }
    }), vjs.Flash.prototype.dispose = function () {
        vjs.MediaTechController.prototype.dispose.call(this)
    }, vjs.Flash.prototype.play = function () {
        this.el_.vjs_play()
    }, vjs.Flash.prototype.pause = function () {
        this.el_.vjs_pause()
    }, vjs.Flash.prototype.src = function (t) {
        if (void 0 === t) return this.currentSrc();
        if (vjs.Flash.isStreamingSrc(t) ? (t = vjs.Flash.streamToParts(t), this.setRtmpConnection(t.connection), this.setRtmpStream(t.stream)) : (t = vjs.getAbsoluteURL(t), this.el_.vjs_src(t)), this.player_.autoplay()) {
            var e = this;
            setTimeout(function () {
                e.play()
            }, 0)
        }
    }, vjs.Flash.prototype.currentSrc = function () {
        var t = this.el_.vjs_getProperty("currentSrc");
        if (null == t) {
            var e = this.rtmpConnection(),
                n = this.rtmpStream();
            e && n && (t = vjs.Flash.streamFromParts(e, n))
        }
        return t
    }, vjs.Flash.prototype.load = function () {
        this.el_.vjs_load()
    }, vjs.Flash.prototype.poster = function () {
        this.el_.vjs_getProperty("poster")
    }, vjs.Flash.prototype.setPoster = function () {}, vjs.Flash.prototype.buffered = function () {
        return vjs.createTimeRange(0, this.el_.vjs_getProperty("buffered"));
    }, vjs.Flash.prototype.supportsFullScreen = function () {
        return !1
    }, vjs.Flash.prototype.enterFullScreen = function () {
        return !1
    };
var api = vjs.Flash.prototype,
    readWrite = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
    readOnly = "error,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","),
    createSetter = function (t) {
        var e = t.charAt(0).toUpperCase() + t.slice(1);
        api["set" + e] = function (e) {
            return this.el_.vjs_setProperty(t, e)
        }
    },
    createGetter = function (t) {
        api[t] = function () {
            return this.el_.vjs_getProperty(t)
        }
    };
if (function () {
        var t;
        for (t = 0; t < readWrite.length; t++) createGetter(readWrite[t]), createSetter(readWrite[t]);
        for (t = 0; t < readOnly.length; t++) createGetter(readOnly[t])
    }(), vjs.Flash.isSupported = function () {
        return vjs.Flash.version()[0] >= 10
    }, vjs.Flash.canPlaySource = function (t) {
        var e;
        return t.type ? (e = t.type.replace(/;.*/, "").toLowerCase(), e in vjs.Flash.formats || e in vjs.Flash.streamingFormats ? "maybe" : void 0) : ""
    }, vjs.Flash.formats = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    }, vjs.Flash.streamingFormats = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    }, vjs.Flash.onReady = function (t) {
        var e = vjs.el(t),
            n = e.player || e.parentNode.player,
            r = n.tech;
        e.player = n, r.el_ = e, vjs.Flash.checkReady(r)
    }, vjs.Flash.checkReady = function (t) {
        t.el().vjs_getProperty ? t.triggerReady() : setTimeout(function () {
            vjs.Flash.checkReady(t)
        }, 50)
    }, vjs.Flash.onEvent = function (t, e) {
        var n = vjs.el(t).player;
        n.trigger(e)
    }, vjs.Flash.onError = function (t, e) {
        var n = vjs.el(t).player,
            r = "FLASH: " + e;
        "srcnotfound" == e ? n.error({
            code: 4,
            message: r
        }) : n.error(r)
    }, vjs.Flash.version = function () {
        var t = "0,0,0";
        try {
            t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (e) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (n) {}
        }
        return t.split(",")
    }, vjs.Flash.embed = function (t, e, n, r, i) {
        var o = vjs.Flash.getEmbedCode(t, n, r, i),
            s = vjs.createEl("div", {
                innerHTML: o
            }).childNodes[0],
            a = e.parentNode;
        e.parentNode.replaceChild(s, e);
        var l = a.childNodes[0];
        return setTimeout(function () {
            l.style.display = "block"
        }, 1e3), s
    }, vjs.Flash.getEmbedCode = function (t, e, n, r) {
        var i = '<object type="application/x-shockwave-flash"',
            o = "",
            s = "",
            a = "";
        return e && vjs.obj.each(e, function (t, e) {
            o += t + "=" + e + "&amp;"
        }), n = vjs.obj.merge({
            movie: t,
            flashvars: o,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, n), vjs.obj.each(n, function (t, e) {
            s += '<param name="' + t + '" value="' + e + '" />'
        }), r = vjs.obj.merge({
            data: t,
            width: "100%",
            height: "100%"
        }, r), vjs.obj.each(r, function (t, e) {
            a += t + '="' + e + '" '
        }), i + a + ">" + s + "</object>"
    }, vjs.Flash.streamFromParts = function (t, e) {
        return t + "&" + e
    }, vjs.Flash.streamToParts = function (t) {
        var e = {
            connection: "",
            stream: ""
        };
        if (!t) return e;
        var n, r = t.indexOf("&");
        return r !== -1 ? n = r + 1 : (r = n = t.lastIndexOf("/") + 1, 0 === r && (r = n = t.length)), e.connection = t.substring(0, r), e.stream = t.substring(n, t.length), e
    }, vjs.Flash.isStreamingType = function (t) {
        return t in vjs.Flash.streamingFormats
    }, vjs.Flash.RTMP_RE = /^rtmp[set]?:\/\//i, vjs.Flash.isStreamingSrc = function (t) {
        return vjs.Flash.RTMP_RE.test(t)
    }, vjs.MediaLoader = vjs.Component.extend({
        init: function (t, e, n) {
            if (vjs.Component.call(this, t, e, n), t.options_.sources && 0 !== t.options_.sources.length) t.src(t.options_.sources);
            else
                for (var r = 0, i = t.options_.techOrder; r < i.length; r++) {
                    var o = vjs.capitalize(i[r]),
                        s = window.videojs[o];
                    if (s && s.isSupported()) {
                        t.loadTech(o);
                        break
                    }
                }
        }
    }), vjs.Player.prototype.textTracks_, vjs.Player.prototype.textTracks = function () {
        return this.textTracks_ = this.textTracks_ || [], this.textTracks_
    }, vjs.Player.prototype.addTextTrack = function (t, e, n, r) {
        var i = this.textTracks_ = this.textTracks_ || [];
        r = r || {}, r.kind = t, r.label = e, r.language = n;
        var o = vjs.capitalize(t || "subtitles"),
            s = new window.videojs[o + "Track"](this, r);
        return i.push(s), s.dflt() && this.ready(function () {
            setTimeout(function () {
                s.show()
            }, 0)
        }), s
    }, vjs.Player.prototype.addTextTracks = function (t) {
        for (var e, n = 0; n < t.length; n++) e = t[n], this.addTextTrack(e.kind, e.label, e.language, e);
        return this
    }, vjs.Player.prototype.showTextTrack = function (t, e) {
        for (var n, r, i, o = this.textTracks_, s = 0, a = o.length; s < a; s++) n = o[s], n.id() === t ? (n.show(), r = n) : e && n.kind() == e && n.mode() > 0 && n.disable();
        return i = r ? r.kind() : !!e && e, i && this.trigger(i + "trackchange"), this
    }, vjs.TextTrack = vjs.Component.extend({
        init: function (t, e) {
            vjs.Component.call(this, t, e), this.id_ = e.id || "vjs_" + e.kind + "_" + e.language + "_" + vjs.guid++, this.src_ = e.src, this.dflt_ = e["default"] || e.dflt, this.title_ = e.title, this.language_ = e.srclang, this.label_ = e.label, this.cues_ = [], this.activeCues_ = [], this.readyState_ = 0, this.mode_ = 0, this.player_.on("fullscreenchange", vjs.bind(this, this.adjustFontSize))
        }
    }), vjs.TextTrack.prototype.kind_, vjs.TextTrack.prototype.kind = function () {
        return this.kind_
    }, vjs.TextTrack.prototype.src_, vjs.TextTrack.prototype.src = function () {
        return this.src_
    }, vjs.TextTrack.prototype.dflt_, vjs.TextTrack.prototype.dflt = function () {
        return this.dflt_
    }, vjs.TextTrack.prototype.title_, vjs.TextTrack.prototype.title = function () {
        return this.title_
    }, vjs.TextTrack.prototype.language_, vjs.TextTrack.prototype.language = function () {
        return this.language_
    }, vjs.TextTrack.prototype.label_, vjs.TextTrack.prototype.label = function () {
        return this.label_
    }, vjs.TextTrack.prototype.cues_, vjs.TextTrack.prototype.cues = function () {
        return this.cues_
    }, vjs.TextTrack.prototype.activeCues_, vjs.TextTrack.prototype.activeCues = function () {
        return this.activeCues_
    }, vjs.TextTrack.prototype.readyState_, vjs.TextTrack.prototype.readyState = function () {
        return this.readyState_
    }, vjs.TextTrack.prototype.mode_, vjs.TextTrack.prototype.mode = function () {
        return this.mode_
    }, vjs.TextTrack.prototype.adjustFontSize = function () {
        this.player_.isFullScreen() ? this.el_.style.fontSize = screen.width / this.player_.width() * 1.4 * 100 + "%" : this.el_.style.fontSize = ""
    }, vjs.TextTrack.prototype.createEl = function () {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-" + this.kind_ + " vjs-text-track"
        })
    }, vjs.TextTrack.prototype.show = function () {
        this.activate(), this.mode_ = 2, vjs.Component.prototype.show.call(this)
    }, vjs.TextTrack.prototype.hide = function () {
        this.activate(), this.mode_ = 1, vjs.Component.prototype.hide.call(this)
    }, vjs.TextTrack.prototype.disable = function () {
        2 == this.mode_ && this.hide(), this.deactivate(), this.mode_ = 0
    }, vjs.TextTrack.prototype.activate = function () {
        0 === this.readyState_ && this.load(), 0 === this.mode_ && (this.player_.on("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.on("ended", vjs.bind(this, this.reset, this.id_)), "captions" !== this.kind_ && "subtitles" !== this.kind_ || this.player_.getChild("textTrackDisplay").addChild(this))
    }, vjs.TextTrack.prototype.deactivate = function () {
        this.player_.off("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.off("ended", vjs.bind(this, this.reset, this.id_)), this.reset(), this.player_.getChild("textTrackDisplay").removeChild(this)
    }, vjs.TextTrack.prototype.load = function () {
        0 === this.readyState_ && (this.readyState_ = 1, vjs.get(this.src_, vjs.bind(this, this.parseCues), vjs.bind(this, this.onError)))
    }, vjs.TextTrack.prototype.onError = function (t) {
        this.error = t, this.readyState_ = 3, this.trigger("error")
    }, vjs.TextTrack.prototype.parseCues = function (t) {
        for (var e, n, r, i, o = t.split("\n"), s = "", a = 1, l = o.length; a < l; a++)
            if (s = vjs.trim(o[a])) {
                for (s.indexOf("-->") == -1 ? (i = s, s = vjs.trim(o[++a])) : i = this.cues_.length, e = {
                        id: i,
                        index: this.cues_.length
                    }, n = s.split(" --> "), e.startTime = this.parseCueTime(n[0]), e.endTime = this.parseCueTime(n[1]), r = []; o[++a] && (s = vjs.trim(o[a]));) r.push(s);
                e.text = r.join("<br/>"), this.cues_.push(e)
            }
        this.readyState_ = 2, this.trigger("loaded")
    }, vjs.TextTrack.prototype.parseCueTime = function (t) {
        var e, n, r, i, o, s = t.split(":"),
            a = 0;
        return 3 == s.length ? (e = s[0], n = s[1], r = s[2]) : (e = 0, n = s[0], r = s[1]), r = r.split(/\s+/), i = r.splice(0, 1)[0], i = i.split(/\.|,/), o = parseFloat(i[1]), i = i[0], a += 3600 * parseFloat(e), a += 60 * parseFloat(n), a += parseFloat(i), o && (a += o / 1e3), a
    }, vjs.TextTrack.prototype.update = function () {
        if (this.cues_.length > 0) {
            var t = this.player_.options().trackTimeOffset || 0,
                e = this.player_.currentTime() + t;
            if (void 0 === this.prevChange || e < this.prevChange || this.nextChange <= e) {
                var n, r, i, o, s = this.cues_,
                    a = this.player_.duration(),
                    l = 0,
                    u = !1,
                    c = [];
                for (e >= this.nextChange || void 0 === this.nextChange ? o = void 0 !== this.firstActiveIndex ? this.firstActiveIndex : 0 : (u = !0, o = void 0 !== this.lastActiveIndex ? this.lastActiveIndex : s.length - 1);;) {
                    if (i = s[o], i.endTime <= e) l = Math.max(l, i.endTime), i.active && (i.active = !1);
                    else if (e < i.startTime) {
                        if (a = Math.min(a, i.startTime), i.active && (i.active = !1), !u) break
                    } else u ? (c.splice(0, 0, i), void 0 === r && (r = o), n = o) : (c.push(i), void 0 === n && (n = o), r = o), a = Math.min(a, i.endTime), l = Math.max(l, i.startTime), i.active = !0;
                    if (u) {
                        if (0 === o) break;
                        o--
                    } else {
                        if (o === s.length - 1) break;
                        o++
                    }
                }
                this.activeCues_ = c, this.nextChange = a, this.prevChange = l, this.firstActiveIndex = n, this.lastActiveIndex = r, this.updateDisplay(), this.trigger("cuechange")
            }
        }
    }, vjs.TextTrack.prototype.updateDisplay = function () {
        for (var t = this.activeCues_, e = "", n = 0, r = t.length; n < r; n++) e += '<span class="vjs-tt-cue">' + t[n].text + "</span>";
        this.el_.innerHTML = e
    }, vjs.TextTrack.prototype.reset = function () {
        this.nextChange = 0, this.prevChange = this.player_.duration(), this.firstActiveIndex = 0, this.lastActiveIndex = 0
    }, vjs.CaptionsTrack = vjs.TextTrack.extend(), vjs.CaptionsTrack.prototype.kind_ = "captions", vjs.SubtitlesTrack = vjs.TextTrack.extend(), vjs.SubtitlesTrack.prototype.kind_ = "subtitles", vjs.ChaptersTrack = vjs.TextTrack.extend(), vjs.ChaptersTrack.prototype.kind_ = "chapters", vjs.TextTrackDisplay = vjs.Component.extend({
        init: function (t, e, n) {
            vjs.Component.call(this, t, e, n), t.options_.tracks && t.options_.tracks.length > 0 && this.player_.addTextTracks(t.options_.tracks)
        }
    }), vjs.TextTrackDisplay.prototype.createEl = function () {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-text-track-display"
        })
    }, vjs.TextTrackMenuItem = vjs.MenuItem.extend({
        init: function (t, e) {
            var n = this.track = e.track;
            e.label = n.label(), e.selected = n.dflt(), vjs.MenuItem.call(this, t, e), this.player_.on(n.kind() + "trackchange", vjs.bind(this, this.update))
        }
    }), vjs.TextTrackMenuItem.prototype.onClick = function () {
        vjs.MenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind())
    }, vjs.TextTrackMenuItem.prototype.update = function () {
        this.selected(2 == this.track.mode())
    }, vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
        init: function (t, e) {
            e.track = {
                kind: function () {
                    return e.kind
                },
                player: t,
                label: function () {
                    return e.kind + " off"
                },
                dflt: function () {
                    return !1
                },
                mode: function () {
                    return !1
                }
            }, vjs.TextTrackMenuItem.call(this, t, e), this.selected(!0)
        }
    }), vjs.OffTextTrackMenuItem.prototype.onClick = function () {
        vjs.TextTrackMenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind())
    }, vjs.OffTextTrackMenuItem.prototype.update = function () {
        for (var t, e = this.player_.textTracks(), n = 0, r = e.length, i = !0; n < r; n++) t = e[n], t.kind() == this.track.kind() && 2 == t.mode() && (i = !1);
        this.selected(i)
    }, vjs.TextTrackButton = vjs.MenuButton.extend({
        init: function (t, e) {
            vjs.MenuButton.call(this, t, e), this.items.length <= 1 && this.hide()
        }
    }), vjs.TextTrackButton.prototype.createItems = function () {
        var t, e = [];
        e.push(new vjs.OffTextTrackMenuItem(this.player_, {
            kind: this.kind_
        }));
        for (var n = 0; n < this.player_.textTracks().length; n++) t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {
            track: t
        }));
        return e
    }, vjs.CaptionsButton = vjs.TextTrackButton.extend({
        init: function (t, e, n) {
            vjs.TextTrackButton.call(this, t, e, n), this.el_.setAttribute("aria-label", "Captions Menu")
        }
    }), vjs.CaptionsButton.prototype.kind_ = "captions", vjs.CaptionsButton.prototype.buttonText = "Captions", vjs.CaptionsButton.prototype.className = "vjs-captions-button", vjs.SubtitlesButton = vjs.TextTrackButton.extend({
        init: function (t, e, n) {
            vjs.TextTrackButton.call(this, t, e, n), this.el_.setAttribute("aria-label", "Subtitles Menu")
        }
    }), vjs.SubtitlesButton.prototype.kind_ = "subtitles", vjs.SubtitlesButton.prototype.buttonText = "Subtitles", vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button", vjs.ChaptersButton = vjs.TextTrackButton.extend({
        init: function (t, e, n) {
            vjs.TextTrackButton.call(this, t, e, n), this.el_.setAttribute("aria-label", "Chapters Menu")
        }
    }), vjs.ChaptersButton.prototype.kind_ = "chapters", vjs.ChaptersButton.prototype.buttonText = "Chapters", vjs.ChaptersButton.prototype.className = "vjs-chapters-button", vjs.ChaptersButton.prototype.createItems = function () {
        for (var t, e = [], n = 0; n < this.player_.textTracks().length; n++) t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {
            track: t
        }));
        return e
    }, vjs.ChaptersButton.prototype.createMenu = function () {
        for (var t, e, n = this.player_.textTracks(), r = 0, i = n.length, o = this.items = []; r < i; r++)
            if (t = n[r], t.kind() == this.kind_ && t.dflt()) {
                if (t.readyState() < 2) return this.chaptersTrack = t, void t.on("loaded", vjs.bind(this, this.createMenu));
                e = t;
                break
            }
        var s = this.menu = new vjs.Menu(this.player_);
        if (s.contentEl().appendChild(vjs.createEl("li", {
                className: "vjs-menu-title",
                innerHTML: vjs.capitalize(this.kind_),
                tabindex: -1
            })), e) {
            var a, l, u = e.cues_;
            for (r = 0, i = u.length; r < i; r++) a = u[r], l = new vjs.ChaptersTrackMenuItem(this.player_, {
                track: e,
                cue: a
            }), o.push(l), s.addChild(l)
        }
        return this.items.length > 0 && this.show(), s
    }, vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
        init: function (t, e) {
            var n = this.track = e.track,
                r = this.cue = e.cue,
                i = t.currentTime();
            e.label = r.text, e.selected = r.startTime <= i && i < r.endTime, vjs.MenuItem.call(this, t, e), n.on("cuechange", vjs.bind(this, this.update))
        }
    }), vjs.ChaptersTrackMenuItem.prototype.onClick = function () {
        vjs.MenuItem.prototype.onClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
    }, vjs.ChaptersTrackMenuItem.prototype.update = function () {
        var t = this.cue,
            e = this.player_.currentTime();
        this.selected(t.startTime <= e && e < t.endTime)
    }, vjs.obj.merge(vjs.ControlBar.prototype.options_.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    }), vjs.JSON, "undefined" != typeof window.JSON && "function" === window.JSON.parse) vjs.JSON = window.JSON;
else {
    vjs.JSON = {};
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    vjs.JSON.parse = function (text, reviver) {
        function walk(t, e) {
            var n, r, i = t[e];
            if (i && "object" == typeof i)
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
            return reviver.call(t, e, i)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
    }
}
vjs.autoSetup = function () {
        var t, e, n, r = document.getElementsByTagName("video");
        if (r && r.length > 0)
            for (var i = 0, o = r.length; i < o; i++) {
                if (e = r[i], !e || !e.getAttribute) {
                    vjs.autoSetupTimeout(1);
                    break
                }
                void 0 === e.player && (t = e.getAttribute("data-setup"), null !== t && (t = vjs.JSON.parse(t || "{}"), n = videojs(e, t)))
            } else vjs.windowLoaded || vjs.autoSetupTimeout(1)
    }, vjs.autoSetupTimeout = function (t) {
        setTimeout(vjs.autoSetup, t)
    }, "complete" === document.readyState ? vjs.windowLoaded = !0 : vjs.one(window, "load", function () {
        vjs.windowLoaded = !0
    }), vjs.autoSetupTimeout(1), vjs.plugin = function (t, e) {
        vjs.Player.prototype[t] = e
    },
    function (t) {
        t.fn.qrcode = function (e) {
            "string" == typeof e && (e = {
                text: e
            }), e = t.extend({}, {
                render: "canvas",
                width: 256,
                height: 256,
                typeNumber: -1,
                correctLevel: QRErrorCorrectLevel.H,
                background: "#ffffff",
                foreground: "#000000"
            }, e);
            var n = function () {
                    var t = new QRCode(e.typeNumber, e.correctLevel);
                    t.addData(e.text), t.make();
                    var n = document.createElement("canvas");
                    n.width = e.width, n.height = e.height;
                    for (var r = n.getContext("2d"), i = e.width / t.getModuleCount(), o = e.height / t.getModuleCount(), s = 0; s < t.getModuleCount(); s++)
                        for (var a = 0; a < t.getModuleCount(); a++) {
                            r.fillStyle = t.isDark(s, a) ? e.foreground : e.background;
                            var l = Math.ceil((a + 1) * i) - Math.floor(a * i),
                                u = Math.ceil((s + 1) * i) - Math.floor(s * i);
                            r.fillRect(Math.round(a * i), Math.round(s * o), l, u)
                        }
                    return n
                },
                r = function () {
                    var n = new QRCode(e.typeNumber, e.correctLevel);
                    n.addData(e.text), n.make();
                    for (var r = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background), i = e.width / n.getModuleCount(), o = e.height / n.getModuleCount(), s = 0; s < n.getModuleCount(); s++)
                        for (var a = t("<tr></tr>").css("height", o + "px").appendTo(r), l = 0; l < n.getModuleCount(); l++) t("<td></td>").css("width", i + "px").css("background-color", n.isDark(s, l) ? e.foreground : e.background).appendTo(a);
                    return r
                };
            return this.each(function () {
                var i = "canvas" == e.render ? n() : r();
                t(i).appendTo(this)
            })
        }
    }(jQuery), QR8bitByte.prototype = {
        getLength: function (t) {
            return this.data.length
        },
        write: function (t) {
            for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
        }
    }, QRCode.prototype = {
        addData: function (t) {
            var e = new QR8bitByte(t);
            this.dataList.push(e), this.dataCache = null
        },
        isDark: function (t, e) {
            if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
            return this.modules[t][e]
        },
        getModuleCount: function () {
            return this.moduleCount
        },
        make: function () {
            if (this.typeNumber < 1) {
                var t = 1;
                for (t = 1; t < 40; t++) {
                    for (var e = QRRSBlock.getRSBlocks(t, this.errorCorrectLevel), n = new QRBitBuffer, r = 0, i = 0; i < e.length; i++) r += e[i].dataCount;
                    for (var i = 0; i < this.dataList.length; i++) {
                        var o = this.dataList[i];
                        n.put(o.mode, 4), n.put(o.getLength(), QRUtil.getLengthInBits(o.mode, t)), o.write(n)
                    }
                    if (n.getLengthInBits() <= 8 * r) break
                }
                this.typeNumber = t
            }
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function (t, e) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++) {
                this.modules[n] = new Array(this.moduleCount);
                for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
        },
        setupPositionProbePattern: function (t, e) {
            for (var n = -1; n <= 7; n++)
                if (!(t + n <= -1 || this.moduleCount <= t + n))
                    for (var r = -1; r <= 7; r++) e + r <= -1 || this.moduleCount <= e + r || (0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4 ? this.modules[t + n][e + r] = !0 : this.modules[t + n][e + r] = !1)
        },
        getBestMaskPattern: function () {
            for (var t = 0, e = 0, n = 0; n < 8; n++) {
                this.makeImpl(!0, n);
                var r = QRUtil.getLostPoint(this);
                (0 == n || t > r) && (t = r, e = n)
            }
            return e
        },
        createMovieClip: function (t, e, n) {
            var r = t.createEmptyMovieClip(e, n),
                i = 1;
            this.make();
            for (var o = 0; o < this.modules.length; o++)
                for (var s = o * i, a = 0; a < this.modules[o].length; a++) {
                    var l = a * i,
                        u = this.modules[o][a];
                    u && (r.beginFill(0, 100), r.moveTo(l, s), r.lineTo(l + i, s), r.lineTo(l + i, s + i), r.lineTo(l, s + i), r.endFill())
                }
            return r
        },
        setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
        },
        setupPositionAdjustPattern: function () {
            for (var t = QRUtil.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                for (var n = 0; n < t.length; n++) {
                    var r = t[e],
                        i = t[n];
                    if (null == this.modules[r][i])
                        for (var o = -2; o <= 2; o++)
                            for (var s = -2; s <= 2; s++) o == -2 || 2 == o || s == -2 || 2 == s || 0 == o && 0 == s ? this.modules[r + o][i + s] = !0 : this.modules[r + o][i + s] = !1
                }
        },
        setupTypeNumber: function (t) {
            for (var e = QRUtil.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                var r = !t && 1 == (e >> n & 1);
                this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
            }
            for (var n = 0; n < 18; n++) {
                var r = !t && 1 == (e >> n & 1);
                this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
            }
        },
        setupTypeInfo: function (t, e) {
            for (var n = this.errorCorrectLevel << 3 | e, r = QRUtil.getBCHTypeInfo(n), i = 0; i < 15; i++) {
                var o = !t && 1 == (r >> i & 1);
                i < 6 ? this.modules[i][8] = o : i < 8 ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
            }
            for (var i = 0; i < 15; i++) {
                var o = !t && 1 == (r >> i & 1);
                i < 8 ? this.modules[8][this.moduleCount - i - 1] = o : i < 9 ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o
            }
            this.modules[this.moduleCount - 8][8] = !t
        },
        mapData: function (t, e) {
            for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, s = this.moduleCount - 1; s > 0; s -= 2)
                for (6 == s && s--;;) {
                    for (var a = 0; a < 2; a++)
                        if (null == this.modules[r][s - a]) {
                            var l = !1;
                            o < t.length && (l = 1 == (t[o] >>> i & 1));
                            var u = QRUtil.getMask(e, r, s - a);
                            u && (l = !l), this.modules[r][s - a] = l, i--, i == -1 && (o++, i = 7)
                        }
                    if (r += n, r < 0 || this.moduleCount <= r) {
                        r -= n, n = -n;
                        break
                    }
                }
        }
    }, QRCode.PAD0 = 236, QRCode.PAD1 = 17, QRCode.createData = function (t, e, n) {
        for (var r = QRRSBlock.getRSBlocks(t, e), i = new QRBitBuffer, o = 0; o < n.length; o++) {
            var s = n[o];
            i.put(s.mode, 4), i.put(s.getLength(), QRUtil.getLengthInBits(s.mode, t)), s.write(i)
        }
        for (var a = 0, o = 0; o < r.length; o++) a += r[o].dataCount;
        if (i.getLengthInBits() > 8 * a) throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * a + ")");
        for (i.getLengthInBits() + 4 <= 8 * a && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(!1);
        for (;;) {
            if (i.getLengthInBits() >= 8 * a) break;
            if (i.put(QRCode.PAD0, 8), i.getLengthInBits() >= 8 * a) break;
            i.put(QRCode.PAD1, 8)
        }
        return QRCode.createBytes(i, r)
    }, QRCode.createBytes = function (t, e) {
        for (var n = 0, r = 0, i = 0, o = new Array(e.length), s = new Array(e.length), a = 0; a < e.length; a++) {
            var l = e[a].dataCount,
                u = e[a].totalCount - l;
            r = Math.max(r, l), i = Math.max(i, u), o[a] = new Array(l);
            for (var c = 0; c < o[a].length; c++) o[a][c] = 255 & t.buffer[c + n];
            n += l;
            var h = QRUtil.getErrorCorrectPolynomial(u),
                p = new QRPolynomial(o[a], h.getLength() - 1),
                d = p.mod(h);
            s[a] = new Array(h.getLength() - 1);
            for (var c = 0; c < s[a].length; c++) {
                var f = c + d.getLength() - s[a].length;
                s[a][c] = f >= 0 ? d.get(f) : 0
            }
        }
        for (var v = 0, c = 0; c < e.length; c++) v += e[c].totalCount;
        for (var m = new Array(v), g = 0, c = 0; c < r; c++)
            for (var a = 0; a < e.length; a++) c < o[a].length && (m[g++] = o[a][c]);
        for (var c = 0; c < i; c++)
            for (var a = 0; a < e.length; a++) c < s[a].length && (m[g++] = s[a][c]);
        return m
    };
for (var QRMode = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    }, QRErrorCorrectLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    }, QRUtil = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (t) {
            for (var e = t << 10; QRUtil.getBCHDigit(e) - QRUtil.getBCHDigit(QRUtil.G15) >= 0;) e ^= QRUtil.G15 << QRUtil.getBCHDigit(e) - QRUtil.getBCHDigit(QRUtil.G15);
            return (t << 10 | e) ^ QRUtil.G15_MASK
        },
        getBCHTypeNumber: function (t) {
            for (var e = t << 12; QRUtil.getBCHDigit(e) - QRUtil.getBCHDigit(QRUtil.G18) >= 0;) e ^= QRUtil.G18 << QRUtil.getBCHDigit(e) - QRUtil.getBCHDigit(QRUtil.G18);
            return t << 12 | e
        },
        getBCHDigit: function (t) {
            for (var e = 0; 0 != t;) e++, t >>>= 1;
            return e
        },
        getPatternPosition: function (t) {
            return QRUtil.PATTERN_POSITION_TABLE[t - 1]
        },
        getMask: function (t, e, n) {
            switch (t) {
                case QRMaskPattern.PATTERN000:
                    return (e + n) % 2 == 0;
                case QRMaskPattern.PATTERN001:
                    return e % 2 == 0;
                case QRMaskPattern.PATTERN010:
                    return n % 3 == 0;
                case QRMaskPattern.PATTERN011:
                    return (e + n) % 3 == 0;
                case QRMaskPattern.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                case QRMaskPattern.PATTERN101:
                    return e * n % 2 + e * n % 3 == 0;
                case QRMaskPattern.PATTERN110:
                    return (e * n % 2 + e * n % 3) % 2 == 0;
                case QRMaskPattern.PATTERN111:
                    return (e * n % 3 + (e + n) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t)
            }
        },
        getErrorCorrectPolynomial: function (t) {
            for (var e = new QRPolynomial([1], 0), n = 0; n < t; n++) e = e.multiply(new QRPolynomial([1, QRMath.gexp(n)], 0));
            return e
        },
        getLengthInBits: function (t, e) {
            if (1 <= e && e < 10) switch (t) {
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                    return 8;
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + t)
            } else if (e < 27) switch (t) {
                case QRMode.MODE_NUMBER:
                    return 12;
                case QRMode.MODE_ALPHA_NUM:
                    return 11;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + t)
            } else {
                if (!(e < 41)) throw new Error("type:" + e);
                switch (t) {
                    case QRMode.MODE_NUMBER:
                        return 14;
                    case QRMode.MODE_ALPHA_NUM:
                        return 13;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + t)
                }
            }
        },
        getLostPoint: function (t) {
            for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
                for (var i = 0; i < e; i++) {
                    for (var o = 0, s = t.isDark(r, i), a = -1; a <= 1; a++)
                        if (!(r + a < 0 || e <= r + a))
                            for (var l = -1; l <= 1; l++) i + l < 0 || e <= i + l || 0 == a && 0 == l || s == t.isDark(r + a, i + l) && o++;
                    o > 5 && (n += 3 + o - 5)
                }
            for (var r = 0; r < e - 1; r++)
                for (var i = 0; i < e - 1; i++) {
                    var u = 0;
                    t.isDark(r, i) && u++, t.isDark(r + 1, i) && u++, t.isDark(r, i + 1) && u++, t.isDark(r + 1, i + 1) && u++, 0 != u && 4 != u || (n += 3)
                }
            for (var r = 0; r < e; r++)
                for (var i = 0; i < e - 6; i++) t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (n += 40);
            for (var i = 0; i < e; i++)
                for (var r = 0; r < e - 6; r++) t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (n += 40);
            for (var c = 0, i = 0; i < e; i++)
                for (var r = 0; r < e; r++) t.isDark(r, i) && c++;
            var h = Math.abs(100 * c / e / e - 50) / 5;
            return n += 10 * h
        }
    }, QRMath = {
        glog: function (t) {
            if (t < 1) throw new Error("glog(" + t + ")");
            return QRMath.LOG_TABLE[t]
        },
        gexp: function (t) {
            for (; t < 0;) t += 255;
            for (; t >= 256;) t -= 255;
            return QRMath.EXP_TABLE[t]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    }, i = 0; i < 8; i++) QRMath.EXP_TABLE[i] = 1 << i;
for (var i = 8; i < 256; i++) QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
for (var i = 0; i < 255; i++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
QRPolynomial.prototype = {
    get: function (t) {
        return this.num[t]
    },
    getLength: function () {
        return this.num.length
    },
    multiply: function (t) {
        for (var e = new Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++)
            for (var r = 0; r < t.getLength(); r++) e[n + r] ^= QRMath.gexp(QRMath.glog(this.get(n)) + QRMath.glog(t.get(r)));
        return new QRPolynomial(e, 0)
    },
    mod: function (t) {
        if (this.getLength() - t.getLength() < 0) return this;
        for (var e = QRMath.glog(this.get(0)) - QRMath.glog(t.get(0)), n = new Array(this.getLength()), r = 0; r < this.getLength(); r++) n[r] = this.get(r);
        for (var r = 0; r < t.getLength(); r++) n[r] ^= QRMath.gexp(QRMath.glog(t.get(r)) + e);
        return new QRPolynomial(n, 0).mod(t)
    }
}, QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], QRRSBlock.getRSBlocks = function (t, e) {
    var n = QRRSBlock.getRsBlockTable(t, e);
    if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
    for (var r = n.length / 3, i = new Array, o = 0; o < r; o++)
        for (var s = n[3 * o + 0], a = n[3 * o + 1], l = n[3 * o + 2], u = 0; u < s; u++) i.push(new QRRSBlock(a, l));
    return i
}, QRRSBlock.getRsBlockTable = function (t, e) {
    switch (e) {
        case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (t - 1) + 0];
        case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (t - 1) + 1];
        case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (t - 1) + 2];
        case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (t - 1) + 3];
        default:
            return
    }
}, QRBitBuffer.prototype = {
    get: function (t) {
        var e = Math.floor(t / 8);
        return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
    },
    put: function (t, e) {
        for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
    },
    getLengthInBits: function () {
        return this.length
    },
    putBit: function (t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
    }
};