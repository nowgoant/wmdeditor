function bind_nav_active() {
    var t = document.location.href;
    t = t.substring(t.indexOf(document.location.host) + document.location.host.length), $("#sidebar .nav-sidebar li a").each(function () {
        $(this).attr("href") == t && $(this).parent().addClass("active")
    })
}
function toggle_sidebar(t, e) {
    var n = 250, i = !0;
    $("div#main-wrap").is(":animated") || (parseInt($("div#main-wrap").css("marginLeft"), 10) < n ? ($(this).removeClass("close").html(""), margin = "+=" + n, i = !1) : ($(this).addClass("close").html(""), margin = "-=" + n), 0 == t ? $("#main-wrap").css("marginLeft", margin) : $("div#main-wrap").animate({ marginLeft: margin }, { duration: "slow", easing: "easeOutQuint" }), i ? $("#bottom-settings").hide() : $("#bottom-settings").delay(400).slideDown("show"), void 0 != e && e())
}
function toggle_full_page_note() {
    var t = !1;
    "0px" == $("#main").css("marginLeft") && (t = !0), $("#main").toggleClass("full-page-note")
}
!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = t.length, n = re.type(t);
        return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function i(t, e, n) {
        if (re.isFunction(e))
            return re.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return re.grep(t, function (t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (fe.test(e))
                return re.filter(e, t, n);
            e = re.filter(e, t)
        }
        return re.grep(t, function (t) {
            return re.inArray(t, e) >= 0 !== n
        })
    }
    function r(t, e) {
        do
            t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = we[t] = {};
        return re.each(t.match(be) || [], function (t, n) {
            e[n] = !0
        }), e
    }
    function a() {
        pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (pe.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
    }
    function s() {
        (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (a(), re.ready())
    }
    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(_e, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? re.parseJSON(n) : n
                } catch (r) {
                }
                re.data(t, e, n)
            } else
                n = void 0
        }
        return n
    }
    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, n, i) {
        if (re.acceptData(t)) {
            var r, o, a = re.expando, s = t.nodeType, l = s ? re.cache : t, u = s ? t[a] : t[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)
                return u || (u = s ? t[a] = G.pop() || re.guid++ : a), l[u] || (l[u] = s ? {} : { toJSON: re.noop }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = re.extend(l[u], e) : l[u].data = re.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[re.camelCase(e)])) : r = o, r
        }
    }
    function d(t, e, n) {
        if (re.acceptData(t)) {
            var i, r, o = t.nodeType, a = o ? re.cache : t, s = o ? t[re.expando] : re.expando;
            if (a[s]) {
                if (e && (i = n ? a[s] : a[s].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;)
                        delete i[e[r]];
                    if (n ? !u(i) : !re.isEmptyObject(i))
                        return
                }
                (n || (delete a[s].data, u(a[s]))) && (o ? re.cleanData([t], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    function f() {
        return !0
    }
    function h() {
        return !1
    }
    function p() {
        try {
            return pe.activeElement
        } catch (t) {
        }
    }
    function m(t) {
        var e = He.split("|"), n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;)
                n.createElement(e.pop());
        return n
    }
    function g(t, e) {
        var n, i, r = 0, o = typeof t.getElementsByTagName !== ke ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== ke ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]) ; r++)
                !e || re.nodeName(i, e) ? o.push(i) : re.merge(o, g(i, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], o) : o
    }
    function v(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }
    function y(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function b(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }
    function w(t) {
        var e = Qe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function x(t, e) {
        for (var n, i = 0; null != (n = t[i]) ; i++)
            re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
    }
    function C(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var n, i, r, o = re._data(t), a = re._data(e, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++)
                        re.event.add(e, n, s[n][i])
            }
            a.data && (a.data = re.extend({}, a.data))
        }
    }
    function k(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[re.expando]) {
                r = re._data(e);
                for (i in r.events)
                    re.removeEvent(e, i, r.handle);
                e.removeAttribute(re.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    function E(e, n) {
        var i, r = re(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(), o
    }
    function _(t) {
        var e = pe, n = Ye[t];
        return n || (n = E(t, e), "none" !== n && n || (Je = (Je || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument).document, e.write(), e.close(), n = E(t, e), Je.detach()), Ye[t] = n), n
    }
    function T(t, e) {
        return {
            get: function () {
                var n = t();
                return null != n ? n ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
            }
        }
    }
    function S(t, e) {
        if (e in t)
            return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = hn.length; r--;)
            if (e = hn[r] + n, e in t)
                return e;
        return i
    }
    function $(t, e) {
        for (var n, i, r, o = [], a = 0, s = t.length; s > a; a++)
            i = t[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (o[a] = re._data(i, "olddisplay", _(i.nodeName)))) : (r = $e(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (a = 0; s > a; a++)
            i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
        return t
    }
    function N(t, e, n) {
        var i = un.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function A(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += re.css(t, n + Se[o], !0, r)), i ? ("content" === n && (a -= re.css(t, "padding" + Se[o], !0, r)), "margin" !== n && (a -= re.css(t, "border" + Se[o] + "Width", !0, r))) : (a += re.css(t, "padding" + Se[o], !0, r), "padding" !== n && (a += re.css(t, "border" + Se[o] + "Width", !0, r)));
        return a
    }
    function D(t, e, n) {
        var i = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = tn(t), a = ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = en(t, e, o), (0 > r || null == r) && (r = t.style[e]), rn.test(r))
                return r;
            i = a && (ne.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + A(t, e, n || (a ? "border" : "content"), i, o) + "px"
    }
    function j(t, e, n, i, r) {
        return new j.prototype.init(t, e, n, i, r)
    }
    function L() {
        return setTimeout(function () {
            pn = void 0
        }), pn = re.now()
    }
    function P(t, e) {
        var n, i = { height: t }, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)
            n = Se[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }
    function F(t, e, n) {
        for (var i, r = (wn[e] || []).concat(wn["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, e, t))
                return i
    }
    function H(t, e, n) {
        var i, r, o, a, s, l, u, c, d = this, f = {}, h = t.style, p = t.nodeType && $e(t), m = re._data(t, "fxshow");
        n.queue || (s = re._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, re.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = re.css(t, "display"), c = "none" === u ? re._data(t, "olddisplay") || _(t.nodeName) : u, "inline" === c && "none" === re.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== _(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], gn.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i])
                        continue;
                    p = !0
                }
                f[i] = m && m[i] || re.style(t, i)
            } else
                u = void 0;
        if (re.isEmptyObject(f))
            "inline" === ("none" === u ? _(t.nodeName) : u) && (h.display = u);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = re._data(t, "fxshow", {}), o && (m.hidden = !p), p ? re(t).show() : d.done(function () {
                re(t).hide()
            }), d.done(function () {
                var e;
                re._removeData(t, "fxshow");
                for (e in f)
                    re.style(t, e, f[e])
            });
            for (i in f)
                a = F(p ? m[i] : 0, i, d), i in m || (m[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function M(t, e) {
        var n, i, r, o, a;
        for (n in t)
            if (i = re.camelCase(n), r = e[i], o = t[n], re.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = re.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete t[i];
                for (n in o)
                    n in t || (t[n] = o[n], e[n] = r)
            } else
                e[i] = r
    }
    function O(t, e, n) {
        var i, r, o = 0, a = bn.length, s = re.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)
                return !1;
            for (var e = pn || L(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++)
                u.tweens[a].run(o);
            return s.notifyWith(t, [u, o, n]), 1 > o && l ? n : (s.resolveWith(t, [u]), !1)
        }, u = s.promise({
            elem: t, props: re.extend({}, e), opts: re.extend(!0, { specialEasing: {} }, n), originalProperties: e, originalOptions: n, startTime: pn || L(), duration: n.duration, tweens: [], createTween: function (e, n) {
                var i = re.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i), i
            }, stop: function (e) {
                var n = 0, i = e ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    u.tweens[n].run(1);
                return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (M(c, u.opts.specialEasing) ; a > o; o++)
            if (i = bn[o].call(u, t, c, u.opts))
                return i;
        return re.map(c, F, u), re.isFunction(u.opts.start) && u.opts.start.call(t, u), re.fx.timer(re.extend(l, { elem: t, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function I(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, o = e.toLowerCase().match(be) || [];
            if (re.isFunction(n))
                for (; i = o[r++];)
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function R(t, e, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, re.each(t[s] || [], function (t, s) {
                var u = s(e, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {}, a = t === zn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }
    function q(t, e) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && re.extend(!0, t, n), t
    }
    function W(t, e, n) {
        for (var i, r, o, a, s = t.contents, l = t.dataTypes; "*" === l[0];)
            l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n)
            o = l[0];
        else {
            for (a in n) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }
    function B(t, e, n, i) {
        var r, o, a, s, l, u = {}, c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters)
                u[a.toLowerCase()] = t.converters[a];
        for (o = c.shift() ; o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (a = u[l + " " + o] || u["* " + o], !a)
                        for (r in u)
                            if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && t["throws"])
                            e = a(e);
                        else
                            try {
                                e = a(e)
                            } catch (d) {
                                return { state: "parsererror", error: a ? d : "No conversion from " + l + " to " + o }
                            }
                }
        return { state: "success", data: e }
    }
    function z(t, e, n, i) {
        var r;
        if (re.isArray(e))
            re.each(e, function (e, r) {
                n || Gn.test(t) ? i(t, r) : z(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== re.type(e))
            i(t, e);
        else
            for (r in e)
                z(t + "[" + r + "]", e[r], n, i)
    }
    function X() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }
    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }
    function Q(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var G = [], V = G.slice, K = G.concat, Z = G.push, J = G.indexOf, Y = {}, te = Y.toString, ee = Y.hasOwnProperty, ne = {}, ie = "1.11.1", re = function (t, e) {
        return new re.fn.init(t, e)
    }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, se = /-([\da-z])/gi, le = function (t, e) {
        return e.toUpperCase()
    };
    re.fn = re.prototype = {
        jquery: ie, constructor: re, selector: "", length: 0, toArray: function () {
            return V.call(this)
        }, get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : V.call(this)
        }, pushStack: function (t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t, e) {
            return re.each(this, t, e)
        }, map: function (t) {
            return this.pushStack(re.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return this.pushStack(V.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Z, sort: G.sort, splice: G.splice
    }, re.extend = re.fn.extend = function () {
        var t, e, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--) ; l > s; s++)
            if (null != (r = arguments[s]))
                for (i in r)
                    t = a[i], n = r[i], a !== n && (u && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, o = t && re.isArray(t) ? t : []) : o = t && re.isPlainObject(t) ? t : {}, a[i] = re.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === re.type(t)
        }, isArray: Array.isArray || function (t) {
            return "array" === re.type(t)
        }, isWindow: function (t) {
            return null != t && t == t.window
        }, isNumeric: function (t) {
            return !re.isArray(t) && t - parseFloat(t) >= 0
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)
                return !1;
            return !0
        }, isPlainObject: function (t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (e in t)
                    return ee.call(t, e);
            for (e in t)
                ;
            return void 0 === e || ee.call(t, e)
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[te.call(t)] || "object" : typeof t
        }, globalEval: function (e) {
            e && re.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        }, camelCase: function (t) {
            return t.replace(ae, "ms-").replace(se, le)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e, i) {
            var r, o = 0, a = t.length, s = n(t);
            if (i) {
                if (s)
                    for (; a > o && (r = e.apply(t[o], i), r !== !1) ; o++)
                        ;
                else
                    for (o in t)
                        if (r = e.apply(t[o], i), r === !1)
                            break
            } else if (s)
                for (; a > o && (r = e.call(t[o], o, t[o]), r !== !1) ; o++)
                    ;
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1)
                        break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(oe, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : Z.call(i, t)), i
        }, inArray: function (t, e, n) {
            var i;
            if (e) {
                if (J)
                    return J.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        }, merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i;)
                t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];)
                    t[r++] = e[i++];
            return t.length = r, t
        }, grep: function (t, e, n) {
            for (var i, r = [], o = 0, a = t.length, s = !n; a > o; o++)
                i = !e(t[o], o), i !== s && r.push(t[o]);
            return r
        }, map: function (t, e, i) {
            var r, o = 0, a = t.length, s = n(t), l = [];
            if (s)
                for (; a > o; o++)
                    r = e(t[o], o, i), null != r && l.push(r);
            else
                for (o in t)
                    r = e(t[o], o, i), null != r && l.push(r);
            return K.apply([], l)
        }, guid: 1, proxy: function (t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), re.isFunction(t) ? (n = V.call(arguments, 2), i = function () {
                return t.apply(e || this, n.concat(V.call(arguments)))
            }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
        }, now: function () {
            return +new Date
        }, support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        Y["[object " + e + "]"] = e.toLowerCase()
    });
    var ue = function (t) {
        function e(t, e, n, i) {
            var r, o, a, s, l, u, d, h, p, m;
            if ((e ? e.ownerDocument || e : R) !== j && D(e), e = e || j, n = n || [], !t || "string" != typeof t)
                return n;
            if (1 !== (s = e.nodeType) && 9 !== s)
                return [];
            if (P && !i) {
                if (r = ye.exec(t))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = e.getElementById(a), !o || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && O(e, o) && o.id === a)
                            return n.push(o), n
                    } else {
                        if (r[2])
                            return Y.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = r[3]) && x.getElementsByClassName && e.getElementsByClassName)
                            return Y.apply(n, e.getElementsByClassName(a)), n
                    }
                if (x.qsa && (!F || !F.test(t))) {
                    if (h = d = I, p = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                        for (u = _(t), (d = e.getAttribute("id")) ? h = d.replace(we, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;)
                            u[l] = h + f(u[l]);
                        p = be.test(t) && c(e.parentNode) || e, m = u.join(",")
                    }
                    if (m)
                        try {
                            return Y.apply(n, p.querySelectorAll(m)), n
                        } catch (g) {
                        } finally {
                            d || e.removeAttribute("id")
                        }
                }
            }
            return S(t.replace(le, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[I] = !0, t
        }
        function r(t) {
            var e = j.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;)
                C.attrHandle[n[i]] = e
        }
        function a(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function s(t) {
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
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var r, o = t([], n.length, e), a = o.length; a--;)
                        n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(t) {
            return t && typeof t.getElementsByTagName !== Q && t
        }
        function d() {
        }
        function f(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function h(t, e, n) {
            var i = e.dir, r = n && "parentNode" === i, o = W++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r)
                        return t(e, n, o)
            } : function (e, n, a) {
                var s, l, u = [q, o];
                if (a) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, a))
                            return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (l = e[I] || (e[I] = {}), (s = l[i]) && s[0] === q && s[1] === o)
                                return u[2] = s[2];
                            if (l[i] = u, u[2] = t(e, n, a))
                                return !0
                        }
            }
        }
        function p(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i))
                        return !1;
                return !0
            } : t[0]
        }
        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                e(t, n[r], i);
            return i
        }
        function g(t, e, n, i, r) {
            for (var o, a = [], s = 0, l = t.length, u = null != e; l > s; s++)
                (o = t[s]) && (!n || n(o, i, r)) && (a.push(o), u && e.push(s));
            return a
        }
        function v(t, e, n, r, o, a) {
            return r && !r[I] && (r = v(r)), o && !o[I] && (o = v(o, a)), i(function (i, a, s, l) {
                var u, c, d, f = [], h = [], p = a.length, v = i || m(e || "*", s.nodeType ? [s] : s, []), y = !t || !i && e ? v : g(v, f, t, s, l), b = n ? o || (i ? t : p || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)
                    for (u = g(b, h), r(u, [], s, l), c = u.length; c--;)
                        (d = u[c]) && (b[h[c]] = !(y[h[c]] = d));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--;)
                                (d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)
                            (d = b[c]) && (u = o ? ee.call(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else
                    b = g(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, l) : Y.apply(a, b)
            })
        }
        function y(t) {
            for (var e, n, i, r = t.length, o = C.relative[t[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = h(function (t) {
                return t === e
            }, a, !0), u = h(function (t) {
                return ee.call(e, t) > -1
            }, a, !0), c = [function (t, n, i) {
                    return !o && (i || n !== $) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
            }]; r > s; s++)
                if (n = C.relative[t[s].type])
                    c = [h(p(c), n)];
                else {
                    if (n = C.filter[t[s].type].apply(null, t[s].matches), n[I]) {
                        for (i = ++s; r > i && !C.relative[t[i].type]; i++)
                            ;
                        return v(s > 1 && p(c), s > 1 && f(t.slice(0, s - 1).concat({ value: " " === t[s - 2].type ? "*" : "" })).replace(le, "$1"), n, i > s && y(t.slice(s, i)), r > i && y(t = t.slice(i)), r > i && f(t))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function b(t, n) {
            var r = n.length > 0, o = t.length > 0, a = function (i, a, s, l, u) {
                var c, d, f, h = 0, p = "0", m = i && [], v = [], y = $, b = i || o && C.find.TAG("*", u), w = q += null == y ? 1 : Math.random() || .1, x = b.length;
                for (u && ($ = a !== j && a) ; p !== x && null != (c = b[p]) ; p++) {
                    if (o && c) {
                        for (d = 0; f = t[d++];)
                            if (f(c, a, s)) {
                                l.push(c);
                                break
                            }
                        u && (q = w)
                    }
                    r && ((c = !f && c) && h--, i && m.push(c))
                }
                if (h += p, r && p !== h) {
                    for (d = 0; f = n[d++];)
                        f(m, v, a, s);
                    if (i) {
                        if (h > 0)
                            for (; p--;)
                                m[p] || v[p] || (v[p] = Z.call(l));
                        v = g(v)
                    }
                    Y.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                }
                return u && (q = w, $ = y), m
            };
            return r ? i(a) : a
        }
        var w, x, C, k, E, _, T, S, $, N, A, D, j, L, P, F, H, M, O, I = "sizzle" + -new Date, R = t.document, q = 0, W = 0, B = n(), z = n(), X = n(), U = function (t, e) {
            return t === e && (A = !0), 0
        }, Q = "undefined", G = 1 << 31, V = {}.hasOwnProperty, K = [], Z = K.pop, J = K.push, Y = K.push, te = K.slice, ee = K.indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] === t)
                    return e;
            return -1
        }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"), ae = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]", se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), ue = new RegExp("^" + ie + "*," + ie + "*"), ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), fe = new RegExp(se), he = new RegExp("^" + oe + "$"), pe = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + ae), PSEUDO: new RegExp("^" + se), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"), bool: new RegExp("^(?:" + ne + ")$", "i"), needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i") }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), Ce = function (t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        };
        try {
            Y.apply(K = te.call(R.childNodes), R.childNodes), K[R.childNodes.length].nodeType
        } catch (ke) {
            Y = {
                apply: K.length ? function (t, e) {
                    J.apply(t, te.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];)
                        ;
                    t.length = n - 1
                }
            }
        }
        x = e.support = {}, E = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, D = e.setDocument = function (t) {
            var e, n = t ? t.ownerDocument || t : R, i = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, L = n.documentElement, P = !E(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                D()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                D()
            })), x.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function (t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), x.getById = r(function (t) {
                return L.appendChild(t).id = I, !n.getElementsByName || !n.getElementsByName(I).length
            }), x.getById ? (C.find.ID = function (t, e) {
                if (typeof e.getElementById !== Q && P) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function (t) {
                var e = t.replace(xe, Ce);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function (t) {
                var e = t.replace(xe, Ce);
                return function (t) {
                    var n = typeof t.getAttributeNode !== Q && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), C.find.TAG = x.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== Q ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];)
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = x.getElementsByClassName && function (t, e) {
                return typeof e.getElementsByClassName !== Q && P ? e.getElementsByClassName(t) : void 0
            }, H = [], F = [], (x.qsa = ve.test(n.querySelectorAll)) && (r(function (t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || F.push(":checked")
            }), r(function (t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
            })), (x.matchesSelector = ve.test(M = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (t) {
                x.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), H.push("!=", se)
            }), F = F.length && new RegExp(F.join("|")), H = H.length && new RegExp(H.join("|")), e = ve.test(L.compareDocumentPosition), O = e || ve.test(L.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t)
                            return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e)
                    return A = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === R && O(R, t) ? -1 : e === n || e.ownerDocument === R && O(R, e) ? 1 : N ? ee.call(N, t) - ee.call(N, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e)
                    return A = !0, 0;
                var i, r = 0, o = t.parentNode, s = e.parentNode, l = [t], u = [e];
                if (!o || !s)
                    return t === n ? -1 : e === n ? 1 : o ? -1 : s ? 1 : N ? ee.call(N, t) - ee.call(N, e) : 0;
                if (o === s)
                    return a(t, e);
                for (i = t; i = i.parentNode;)
                    l.unshift(i);
                for (i = e; i = i.parentNode;)
                    u.unshift(i);
                for (; l[r] === u[r];)
                    r++;
                return r ? a(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
            }, n) : j
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== j && D(t), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !P || H && H.test(n) || F && F.test(n)))
                try {
                    var i = M.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (r) {
                }
            return e(n, j, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== j && D(t), O(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== j && D(t);
            var n = C.attrHandle[e.toLowerCase()], i = n && V.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
            return void 0 !== i ? i : x.attributes || !P ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [], i = 0, r = 0;
            if (A = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort(U), A) {
                for (; e = t[r++];)
                    e === t[r] && (i = n.push(r));
                for (; i--;)
                    t.splice(n[i], 1)
            }
            return N = null, t
        }, k = e.getText = function (t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += k(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++];)
                    n += k(e);
            return n
        }, C = e.selectors = {
            cacheLength: 50, createPseudo: i, match: pe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(xe, Ce), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, Ce), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return pe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && fe.test(n) && (e = _(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            }, filter: {
                TAG: function (t) {
                    var e = t.replace(xe, Ce).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && B(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Q && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, n, i) {
                    return function (r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                }, CHILD: function (t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling", g = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = e; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[I] || (g[I] = {}), u = c[t] || [], h = u[0] === q && u[1], f = u[0] === q && u[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop() ;)
                                    if (1 === d.nodeType && ++f && d === e) {
                                        c[t] = [q, h, f];
                                        break
                                    }
                            } else if (y && (u = (e[I] || (e[I] = {}))[t]) && u[0] === q)
                                f = u[1];
                            else
                                for (; (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[t] = [q, f]), d !== e)) ;)
                                    ;
                            return f -= r, f === i || f % i === 0 && f / i >= 0
                        }
                    }
                }, PSEUDO: function (t, n) {
                    var r, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[I] ? o(n) : o.length > 1 ? (r = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, r = o(t, n), a = r.length; a--;)
                            i = ee.call(t, r[a]), t[i] = !(e[i] = r[a])
                    }) : function (t) {
                        return o(t, 0, r)
                    }) : o
                }
            }, pseudos: {
                not: i(function (t) {
                    var e = [], n = [], r = T(t.replace(le, "$1"));
                    return r[I] ? i(function (t, e, n, i) {
                        for (var o, a = r(t, null, i, []), s = t.length; s--;)
                            (o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function (t, i, o) {
                        return e[0] = t, r(e, null, o, n), !n.pop()
                    }
                }), has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }), contains: i(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                    }
                }), lang: i(function (t) {
                    return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, Ce).toLowerCase(), function (e) {
                        var n;
                        do
                            if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                }, root: function (t) {
                    return t === L
                }, focus: function (t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: function (t) {
                    return t.disabled === !1
                }, disabled: function (t) {
                    return t.disabled === !0
                }, checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                }, parent: function (t) {
                    return !C.pseudos.empty(t)
                }, header: function (t) {
                    return ge.test(t.nodeName)
                }, input: function (t) {
                    return me.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (t, e) {
                    return [e - 1]
                }), eq: u(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }), even: u(function (t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }), odd: u(function (t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }), lt: u(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;)
                        t.push(i);
                    return t
                }), gt: u(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;)
                        t.push(i);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            C.pseudos[w] = s(w);
        for (w in { submit: !0, reset: !0 })
            C.pseudos[w] = l(w);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, _ = e.tokenize = function (t, n) {
            var i, r, o, a, s, l, u, c = z[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = t, l = [], u = C.preFilter; s;) {
                (!i || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(le, " ") }), s = s.slice(i.length));
                for (a in C.filter)
                    !(r = pe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({ value: i, type: a, matches: r }), s = s.slice(i.length));
                if (!i)
                    break
            }
            return n ? s.length : s ? e.error(t) : z(t, l).slice(0)
        }, T = e.compile = function (t, e) {
            var n, i = [], r = [], o = X[t + " "];
            if (!o) {
                for (e || (e = _(t)), n = e.length; n--;)
                    o = y(e[n]), o[I] ? i.push(o) : r.push(o);
                o = X(t, b(r, i)), o.selector = t
            }
            return o
        }, S = e.select = function (t, e, n, i) {
            var r, o, a, s, l, u = "function" == typeof t && t, d = !i && _(t = u.selector || t);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === e.nodeType && P && C.relative[o[1].type]) {
                    if (e = (C.find.ID(a.matches[0].replace(xe, Ce), e) || [])[0], !e)
                        return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]) ;)
                    if ((l = C.find[s]) && (i = l(a.matches[0].replace(xe, Ce), be.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && f(o), !t)
                            return Y.apply(n, i), n;
                        break
                    }
            }
            return (u || T(t, d))(i, e, !P, n, be.test(t) && c(e.parentNode) || e), n
        }, x.sortStable = I.split("").sort(U).join("") === I, x.detectDuplicates = !!A, D(), x.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(j.createElement("div"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(ne, function (t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var ce = re.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fe = /^.[^:#\[\.,]*$/;
    re.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({
        find: function (t) {
            var e, n = [], i = this, r = i.length;
            if ("string" != typeof t)
                return this.pushStack(re(t).filter(function () {
                    for (e = 0; r > e; e++)
                        if (re.contains(i[e], this))
                            return !0
                }));
            for (e = 0; r > e; e++)
                re.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        }, filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(i(this, t || [], !0))
        }, is: function (t) {
            return !!i(this, "string" == typeof t && ce.test(t) ? re(t) : t || [], !1).length
        }
    });
    var he, pe = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = re.fn.init = function (t, e) {
        var n, i;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e)
                return !e || e.jquery ? (e || he).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : pe, !0)), de.test(n[1]) && re.isPlainObject(e))
                    for (n in e)
                        re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if (i = pe.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2])
                    return he.find(t);
                this.length = 1, this[0] = i
            }
            return this.context = pe, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof he.ready ? he.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
    };
    ge.prototype = re.fn, he = re(pe);
    var ve = /^(?:parents|prev(?:Until|All))/, ye = { children: !0, contents: !0, next: !0, prev: !0 };
    re.extend({
        dir: function (t, e, n) {
            for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n)) ;)
                1 === r.nodeType && i.push(r), r = r[e];
            return i
        }, sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), re.fn.extend({
        has: function (t) {
            var e, n = re(t, this), i = n.length;
            return this.filter(function () {
                for (e = 0; i > e; e++)
                    if (re.contains(this, n[e]))
                        return !0
            })
        }, closest: function (t, e) {
            for (var n, i = 0, r = this.length, o = [], a = ce.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? re.unique(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return re.dir(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return re.dir(t, "parentNode", n)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return re.dir(t, "nextSibling")
        }, prevAll: function (t) {
            return re.dir(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return re.dir(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return re.dir(t, "previousSibling", n)
        }, siblings: function (t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return re.sibling(t.firstChild)
        }, contents: function (t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function (t, e) {
        re.fn[t] = function (n, i) {
            var r = re.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[t] || (r = re.unique(r)), ve.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var be = /\S+/g, we = {};
    re.Callbacks = function (t) {
        t = "string" == typeof t ? we[t] || o(t) : re.extend({}, t);
        var e, n, i, r, a, s, l = [], u = !t.once && [], c = function (o) {
            for (n = t.memory && o, i = !0, a = s || 0, s = 0, r = l.length, e = !0; l && r > a; a++)
                if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
            e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
        }, d = {
            add: function () {
                if (l) {
                    var i = l.length;
                    !function o(e) {
                        re.each(e, function (e, n) {
                            var i = re.type(n);
                            "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    }(arguments), e ? r = l.length : n && (s = i, c(n))
                }
                return this
            }, remove: function () {
                return l && re.each(arguments, function (t, n) {
                    for (var i; (i = re.inArray(n, l, i)) > -1;)
                        l.splice(i, 1), e && (r >= i && r--, a >= i && a--)
                }), this
            }, has: function (t) {
                return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], r = 0, this
            }, disable: function () {
                return l = u = n = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = void 0, n || d.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (t, n) {
                return !l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return d
    }, re.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]], n = "pending", i = {
                state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return re.Deferred(function (n) {
                        re.each(e, function (e, o) {
                            var a = re.isFunction(t[e]) && t[e];
                            r[o[1]](function () {
                                var t = a && a.apply(this, arguments);
                                t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? re.extend(t, i) : i
                }
            }, r = {};
            return i.pipe = i.then, re.each(e, function (t, o) {
                var a = o[2], s = o[3];
                i[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), t && t.call(r, r), r
        }, when: function (t) {
            var e, n, i, r = 0, o = V.call(arguments), a = o.length, s = 1 !== a || t && re.isFunction(t.promise) ? a : 0, l = 1 === s ? t : re.Deferred(), u = function (t, n, i) {
                return function (r) {
                    n[t] = this, i[t] = arguments.length > 1 ? V.call(arguments) : r, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), i = new Array(a) ; a > r; r++)
                    o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var xe;
    re.fn.ready = function (t) {
        return re.ready.promise().done(t), this
    }, re.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? re.readyWait++ : re.ready(!0)
        }, ready: function (t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!pe.body)
                    return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (xe.resolveWith(pe, [re]), re.fn.triggerHandler && (re(pe).triggerHandler("ready"), re(pe).off("ready")))
            }
        }
    }), re.ready.promise = function (e) {
        if (!xe)
            if (xe = re.Deferred(), "complete" === pe.readyState)
                setTimeout(re.ready);
            else if (pe.addEventListener)
                pe.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1);
            else {
                pe.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == t.frameElement && pe.documentElement
                } catch (i) {
                }
                n && n.doScroll && !function r() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(r, 50)
                        }
                        a(), re.ready()
                    }
                }()
            }
        return xe.promise(e)
    };
    var Ce, ke = "undefined";
    for (Ce in re(ne))
        break;
    ne.ownLast = "0" !== Ce, ne.inlineBlockNeedsLayout = !1, re(function () {
        var t, e, n, i;
        n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }), function () {
        var t = pe.createElement("div");
        if (null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ne.deleteExpando = !1
            }
        }
        t = null
    }(), re.acceptData = function (t) {
        var e = re.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, _e = /([A-Z])/g;
    re.extend({
        cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !u(t)
        }, data: function (t, e, n) {
            return c(t, e, n)
        }, removeData: function (t, e) {
            return d(t, e)
        }, _data: function (t, e, n) {
            return c(t, e, n, !0)
        }, _removeData: function (t, e) {
            return d(t, e, !0)
        }
    }), re.fn.extend({
        data: function (t, e) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;)
                        a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                    re._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                re.data(this, t, e)
            }) : o ? l(o, t, re.data(o, t)) : void 0
        }, removeData: function (t) {
            return this.each(function () {
                re.removeData(this, t)
            })
        }
    }), re.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = re.queue(t, e), i = n.length, r = n.shift(), o = re._queueHooks(t, e), a = function () {
                re.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return re._data(t, n) || re._data(t, n, {
                empty: re.Callbacks("once memory").add(function () {
                    re._removeData(t, e + "queue"), re._removeData(t, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                re.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, i = 1, r = re.Deferred(), o = this, a = this.length, s = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)
                n = re._data(o[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(e)
        }
    });
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Se = ["Top", "Right", "Bottom", "Left"], $e = function (t, e) {
        return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
    }, Ne = re.access = function (t, e, n, i, r, o, a) {
        var s = 0, l = t.length, u = null == n;
        if ("object" === re.type(n)) {
            r = !0;
            for (s in n)
                re.access(t, e, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
            return u.call(re(t), n)
        })), e))
            for (; l > s; s++)
                e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
    }, Ae = /^(?:checkbox|radio)$/i;
    !function () {
        var t = pe.createElement("input"), e = pe.createElement("div"), n = pe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
            ne.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(), function () {
        var e, n, i = pe.createElement("div");
        for (e in { submit: !0, change: !0, focusin: !0 })
            n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var De = /^(?:input|select|textarea)$/i, je = /^key/, Le = /^(?:mouse|pointer|contextmenu)|click/, Pe = /^(?:focusinfocus|focusoutblur)$/, Fe = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {}, add: function (t, e, n, i, r) {
            var o, a, s, l, u, c, d, f, h, p, m, g = re._data(t);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function (t) {
                    return typeof re === ke || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                }, c.elem = t), e = (e || "").match(be) || [""], s = e.length; s--;)
                    o = Fe.exec(e[s]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h && (u = re.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = re.event.special[h] || {}, d = re.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && re.expr.match.needsContext.test(r), namespace: p.join(".") }, l), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(h, c, !1) : t.attachEvent && t.attachEvent("on" + h, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), re.event.global[h] = !0);
                t = null
            }
        }, remove: function (t, e, n, i, r) {
            var o, a, s, l, u, c, d, f, h, p, m, g = re.hasData(t) && re._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(be) || [""], u = e.length; u--;)
                    if (s = Fe.exec(e[u]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = re.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;)
                            a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(t, a));
                        l && !f.length && (d.teardown && d.teardown.call(t, p, g.handle) !== !1 || re.removeEvent(t, h, g.handle), delete c[h])
                    } else
                        for (h in c)
                            re.event.remove(t, h + e[u], n, i, !0);
                re.isEmptyObject(c) && (delete g.handle, re._removeData(t, "events"))
            }
        }, trigger: function (e, n, i, r) {
            var o, a, s, l, u, c, d, f = [i || pe], h = ee.call(e, "type") ? e.type : e, p = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = i = i || pe, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, e = e[re.expando] ? e : new re.Event(h, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), u = re.event.special[h] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !re.isWindow(i)) {
                    for (l = u.delegateType || h, Pe.test(l + h) || (s = s.parentNode) ; s; s = s.parentNode)
                        f.push(s), c = s;
                    c === (i.ownerDocument || pe) && f.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0; (s = f[d++]) && !e.isPropagationStopped() ;)
                    e.type = d > 1 ? l : u.bindType || h, o = (re._data(s, "events") || {})[e.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (e.result = o.apply(s, n), e.result === !1 && e.preventDefault());
                if (e.type = h, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && re.acceptData(i) && a && i[h] && !re.isWindow(i)) {
                    c = i[a], c && (i[a] = null), re.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {
                    }
                    re.event.triggered = void 0, c && (i[a] = c)
                }
                return e.result
            }
        }, dispatch: function (t) {
            t = re.event.fix(t);
            var e, n, i, r, o, a = [], s = V.call(arguments), l = (re._data(this, "events") || {})[t.type] || [], u = re.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (a = re.event.handlers.call(this, t, l), e = 0; (r = a[e++]) && !t.isPropagationStopped() ;)
                    for (t.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !t.isImmediatePropagationStopped() ;)
                        (!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        }, handlers: function (t, e) {
            var n, i, r, o, a = [], s = e.delegateCount, l = t.target;
            if (s && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], o = 0; s > o; o++)
                            i = e[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({ elem: l, handlers: r })
                    }
            return s < e.length && a.push({ elem: this, handlers: e.slice(s) }), a
        }, fix: function (t) {
            if (t[re.expando])
                return t;
            var e, n, i, r = t.type, o = t, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Le.test(r) ? this.mouseHooks : je.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new re.Event(o), e = i.length; e--;)
                n = i[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || pe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        }, mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (t, e) {
                var n, i, r, o = e.button, a = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || pe, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        }, special: {
            load: { noBubble: !0 }, focus: {
                trigger: function () {
                    if (this !== p() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return re.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }, simulate: function (t, e, n, i) {
            var r = re.extend(new re.Event, n, { type: t, isSimulated: !0, originalEvent: {} });
            i ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = pe.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === ke && (t[i] = null), t.detachEvent(i, n))
    }, re.Event = function (t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : h) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void (this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {
        isDefaultPrevented: h, isPropagationStopped: h, isImmediatePropagationStopped: h, preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = f, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        }, stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = f, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
        re.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, i = this, r = t.relatedTarget, o = t.handleObj;
                return (!r || r !== i && !re.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ne.submitBubbles || (re.event.special.submit = {
        setup: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target, n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        }, postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        }, teardown: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (re.event.special.change = {
        setup: function () {
            return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                De.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        }, handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return re.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), ne.focusinBubbles || re.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var n = function (t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this, r = re._data(i, e);
                r || i.addEventListener(t, n, !0), re._data(i, e, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = re._data(i, e) - 1;
                r ? re._data(i, e, r) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
            }
        }
    }), re.fn.extend({
        on: function (t, e, n, i, r) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t)
                    this.on(o, e, n, t[o], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)
                i = h;
            else if (!i)
                return this;
            return 1 === r && (a = i, i = function (t) {
                return re().off(t), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function () {
                re.event.add(this, t, i, n, e)
            })
        }, one: function (t, e, n, i) {
            return this.on(t, e, n, i, 1)
        }, off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = h), this.each(function () {
                re.event.remove(this, t, n, e)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                re.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            return n ? re.event.trigger(t, e, n, !0) : void 0
        }
    });
    var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Me = / jQuery\d+="(?:null|\d+)"/g, Oe = new RegExp("<(?:" + He + ")[\\s/>]", "i"), Ie = /^\s+/, Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, qe = /<([\w:]+)/, We = /<tbody/i, Be = /<|&#?\w+;/, ze = /<(?:script|style|link)/i, Xe = /checked\s*(?:[^=]|=\s*.checked.)/i, Ue = /^$|\/(?:java|ecma)script/i, Qe = /^true\/(.*)/, Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ve = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, Ke = m(pe), Ze = Ke.appendChild(pe.createElement("div"));
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, re.extend({
        clone: function (t, e, n) {
            var i, r, o, a, s, l = re.contains(t.ownerDocument, t);
            if (ne.html5Clone || re.isXMLDoc(t) || !Oe.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Ze.innerHTML = t.outerHTML, Ze.removeChild(o = Ze.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (i = g(o), s = g(t), a = 0; null != (r = s[a]) ; ++a)
                    i[a] && k(r, i[a]);
            if (e)
                if (n)
                    for (s = s || g(t), i = i || g(o), a = 0; null != (r = s[a]) ; a++)
                        C(r, i[a]);
                else
                    C(t, o);
            return i = g(o, "script"), i.length > 0 && x(i, !l && g(t, "script")), i = s = r = null, o
        }, buildFragment: function (t, e, n, i) {
            for (var r, o, a, s, l, u, c, d = t.length, f = m(e), h = [], p = 0; d > p; p++)
                if (o = t[p], o || 0 === o)
                    if ("object" === re.type(o))
                        re.merge(h, o.nodeType ? [o] : o);
                    else if (Be.test(o)) {
                        for (s = s || f.appendChild(e.createElement("div")), l = (qe.exec(o) || ["", ""])[1].toLowerCase(), c = Ve[l] || Ve._default, s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], r = c[0]; r--;)
                            s = s.lastChild;
                        if (!ne.leadingWhitespace && Ie.test(o) && h.push(e.createTextNode(Ie.exec(o)[0])), !ne.tbody)
                            for (o = "table" !== l || We.test(o) ? "<table>" !== c[1] || We.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;)
                                re.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                        for (re.merge(h, s.childNodes), s.textContent = ""; s.firstChild;)
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        h.push(e.createTextNode(o));
            for (s && f.removeChild(s), ne.appendChecked || re.grep(g(h, "input"), v), p = 0; o = h[p++];)
                if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && x(s), n))
                    for (r = 0; o = s[r++];)
                        Ue.test(o.type || "") && n.push(o);
            return s = null, f
        }, cleanData: function (t, e) {
            for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (n = t[a]) ; a++)
                if ((e || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events)
                            c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== ke ? n.removeAttribute(s) : n[s] = null, G.push(r))
                }
        }
    }), re.fn.extend({
        text: function (t) {
            return Ne(this, function (t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(t))
            }, null, t, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, remove: function (t, e) {
            for (var n, i = t ? re.filter(t, this) : this, r = 0; null != (n = i[r]) ; r++)
                e || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]) ; e++) {
                for (1 === t.nodeType && re.cleanData(g(t, !1)) ; t.firstChild;)
                    t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        }, clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return re.clone(this, t, e)
            })
        }, html: function (t) {
            return Ne(this, function (t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(Me, "") : void 0;
                if (!("string" != typeof t || ze.test(t) || !ne.htmlSerialize && Oe.test(t) || !ne.leadingWhitespace && Ie.test(t) || Ve[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Re, "<$1></$2>");
                    try {
                        for (; i > n; n++)
                            e = this[n] || {}, 1 === e.nodeType && (re.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, re.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        }, detach: function (t) {
            return this.remove(t, !0)
        }, domManip: function (t, e) {
            t = K.apply([], t);
            var n, i, r, o, a, s, l = 0, u = this.length, c = this, d = u - 1, f = t[0], h = re.isFunction(f);
            if (h || u > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f))
                return this.each(function (n) {
                    var i = c.eq(n);
                    h && (t[0] = f.call(this, n, i.html())), i.domManip(t, e)
                });
            if (u && (s = re.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = re.map(g(s, "script"), b), r = o.length; u > l; l++)
                    i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), e.call(this[l], i, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, re.map(o, w), l = 0; r > l; l++)
                        i = o[l], Ue.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ge, "")));
                s = n = null
            }
            return this
        }
    }), re.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
        re.fn[t] = function (t) {
            for (var n, i = 0, r = [], o = re(t), a = o.length - 1; a >= i; i++)
                n = i === a ? this : this.clone(!0), re(o[i])[e](n), Z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Je, Ye = {};
    !function () {
        var t;
        ne.shrinkWrapBlocks = function () {
            if (null != t)
                return t;
            t = !1;
            var e, n, i;
            return n = pe.getElementsByTagName("body")[0], n && n.style ? (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var tn, en, nn = /^margin/, rn = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"), on = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (tn = function (t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, en = function (t, e, n) {
        var i, r, o, a, s = t.style;
        return n = n || tn(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || re.contains(t.ownerDocument, t) || (a = re.style(t, e)), rn.test(a) && nn.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : pe.documentElement.currentStyle && (tn = function (t) {
        return t.currentStyle
    }, en = function (t, e, n) {
        var i, r, o, a, s = t.style;
        return n = n || tn(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), rn.test(a) && !on.test(e) && (i = s.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    }), !function () {
        function e() {
            var e, n, i, r;
            n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || { width: "4px" }).width, r = e.appendChild(pe.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
        }
        var n, i, r, o, a, s, l;
        n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
            reliableHiddenOffsets: function () {
                return null == s && e(), s
            }, boxSizingReliable: function () {
                return null == a && e(), a
            }, pixelPosition: function () {
                return null == o && e(), o
            }, reliableMarginRight: function () {
                return null == l && e(), l
            }
        }))
    }(), re.swap = function (t, e, n, i) {
        var r, o, a = {};
        for (o in e)
            a[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e)
            t.style[o] = a[o];
        return r
    };
    var an = /alpha\([^)]*\)/i, sn = /opacity\s*=\s*([^)]*)/, ln = /^(none|table(?!-c[ea]).+)/, un = new RegExp("^(" + Te + ")(.*)$", "i"), cn = new RegExp("^([+-])=(" + Te + ")", "i"), dn = { position: "absolute", visibility: "hidden", display: "block" }, fn = { letterSpacing: "0", fontWeight: "400" }, hn = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = en(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": ne.cssFloat ? "cssFloat" : "styleFloat" }, style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, a, s = re.camelCase(e), l = t.style;
                if (e = re.cssProps[s] || (re.cssProps[s] = S(l, s)), a = re.cssHooks[e] || re.cssHooks[s], void 0 === n)
                    return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e];
                if (o = typeof n, "string" === o && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i)))))
                    try {
                        l[e] = n
                    } catch (u) {
                    }
            }
        }, css: function (t, e, n, i) {
            var r, o, a, s = re.camelCase(e);
            return e = re.cssProps[s] || (re.cssProps[s] = S(t.style, s)), a = re.cssHooks[e] || re.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = en(t, e, i)), "normal" === o && e in fn && (o = fn[e]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
        }
    }), re.each(["height", "width"], function (t, e) {
        re.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? ln.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, dn, function () {
                    return D(t, e, i)
                }) : D(t, e, i) : void 0
            }, set: function (t, n, i) {
                var r = i && tn(t);
                return N(t, n, i ? A(t, e, i, ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ne.opacity || (re.cssHooks.opacity = {
        get: function (t, e) {
            return sn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        }, set: function (t, e) {
            var n = t.style, i = t.currentStyle, r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
        }
    }), re.cssHooks.marginRight = T(ne.reliableMarginRight, function (t, e) {
        return e ? re.swap(t, { display: "inline-block" }, en, [t, "marginRight"]) : void 0
    }), re.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        re.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[t + Se[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, nn.test(t) || (re.cssHooks[t + e].set = N)
    }), re.fn.extend({
        css: function (t, e) {
            return Ne(this, function (t, e, n) {
                var i, r, o = {}, a = 0;
                if (re.isArray(e)) {
                    for (i = tn(t), r = e.length; r > a; a++)
                        o[e[a]] = re.css(t, e[a], !1, i);
                    return o
                }
                return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return $(this, !0)
        }, hide: function () {
            return $(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                $e(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = j, j.prototype = {
        constructor: j, init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = j.propHooks[this.prop];
            return t && t.get ? t.get(this) : j.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = j.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function (t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.fx = j.prototype.init, re.fx.step = {};
    var pn, mn, gn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"), yn = /queueHooks$/, bn = [H], wn = {
        "*": [function (t, e) {
            var n = this.createTween(t, e), i = n.cur(), r = vn.exec(e), o = r && r[3] || (re.cssNumber[t] ? "" : "px"), a = (re.cssNumber[t] || "px" !== o && +i) && vn.exec(re.css(n.elem, t)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], r = r || [], a = +i || 1;
                do
                    s = s || ".5", a /= s, re.style(n.elem, t, a + o);
                while (s !== (s = n.cur() / i) && 1 !== s && --l)
            }
            return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
        }]
    };
    re.Animation = re.extend(O, {
        tweener: function (t, e) {
            re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; r > i; i++)
                n = t[i], wn[n] = wn[n] || [], wn[n].unshift(e)
        }, prefilter: function (t, e) {
            e ? bn.unshift(t) : bn.push(t)
        }
    }), re.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? re.extend({}, t) : { complete: n || !n && e || re.isFunction(t) && t, duration: t, easing: n && e || e && !re.isFunction(e) && e };
        return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
        }, i
    }, re.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter($e).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i)
        }, animate: function (t, e, n, i) {
            var r = re.isEmptyObject(t), o = re.speed(e, n, i), a = function () {
                var e = O(this, re.extend({}, t), o);
                (r || re._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, r = null != t && t + "queueHooks", o = re.timers, a = re._data(this);
                if (r)
                    a[r] && a[r].stop && i(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && yn.test(r) && i(a[r]);
                for (r = o.length; r--;)
                    o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                (e || !n) && re.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = re._data(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = re.timers, a = i ? i.length : 0;
                for (n.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; a > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), re.each(["toggle", "show", "hide"], function (t, e) {
        var n = re.fn[e];
        re.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(P(e, !0), t, i, r)
        }
    }), re.each({ slideDown: P("show"), slideUp: P("hide"), slideToggle: P("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
        re.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), re.timers = [], re.fx.tick = function () {
        var t, e = re.timers, n = 0;
        for (pn = re.now() ; n < e.length; n++)
            t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || re.fx.stop(), pn = void 0
    }, re.fx.timer = function (t) {
        re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
    }, re.fx.interval = 13, re.fx.start = function () {
        mn || (mn = setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function () {
        clearInterval(mn), mn = null
    }, re.fx.speeds = { slow: 600, fast: 200, _default: 400 }, re.fn.delay = function (t, e) {
        return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var t, e, n, i, r;
        e = pe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = pe.createElement("select"), r = n.appendChild(pe.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = r.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, t = pe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
    }();
    var xn = /\r/g;
    re.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = re.isFunction(t), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.trim(re.text(t))
                }
            }, select: {
                get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (e = re(n).val(), o)
                                return e;
                            a.push(e)
                        }
                    return a
                }, set: function (t, e) {
                    for (var n, i, r = t.options, o = re.makeArray(e), a = r.length; a--;)
                        if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0)
                            try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {
            set: function (t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        }, ne.checkOn || (re.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Cn, kn, En = re.expr.attrHandle, _n = /^(?:checked|selected)$/i, Tn = ne.getSetAttribute, Sn = ne.input;
    re.fn.extend({
        attr: function (t, e) {
            return Ne(this, re.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                re.removeAttr(this, t)
            })
        }
    }), re.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === ke ? re.prop(t, e, n) : (1 === o && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? kn : Cn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void re.removeAttr(t, e)) : void 0
        }, removeAttr: function (t, e) {
            var n, i, r = 0, o = e && e.match(be);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];)
                    i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Sn && Tn || !_n.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(Tn ? n : i)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ne.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), kn = {
        set: function (t, e, n) {
            return e === !1 ? re.removeAttr(t, n) : Sn && Tn || !_n.test(n) ? t.setAttribute(!Tn && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = En[e] || re.find.attr;
        En[e] = Sn && Tn || !_n.test(e) ? function (t, e, i) {
            var r, o;
            return i || (o = En[e], En[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, En[e] = o), r
        } : function (t, e, n) {
            return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Sn && Tn || (re.attrHooks.value = {
        set: function (t, e, n) {
            return re.nodeName(t, "input") ? void (t.defaultValue = e) : Cn && Cn.set(t, e, n)
        }
    }), Tn || (Cn = {
        set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, En.id = En.name = En.coords = function (t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function (t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        }, set: Cn.set
    }, re.attrHooks.contenteditable = {
        set: function (t, e, n) {
            Cn.set(t, "" === e ? !1 : e, n)
        }
    }, re.each(["width", "height"], function (t, e) {
        re.attrHooks[e] = {
            set: function (t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ne.style || (re.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        }, set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var $n = /^(?:input|select|textarea|button|object)$/i, Nn = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function (t, e) {
            return Ne(this, re.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return t = re.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {
                }
            })
        }
    }), re.extend({
        propFix: { "for": "htmlFor", "class": "className" }, prop: function (t, e, n) {
            var i, r, o, a = t.nodeType;
            return t && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !re.isXMLDoc(t), o && (e = re.propFix[e] || e, r = re.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : $n.test(t.nodeName) || Nn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || re.each(["href", "src"], function (t, e) {
        re.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, a, s = 0, l = this.length, u = "string" == typeof t && t;
            if (re.isFunction(t))
                return this.each(function (e) {
                    re(this).addClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (o = 0; r = e[o++];)
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = re.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        }, removeClass: function (t) {
            var e, n, i, r, o, a, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t))
                return this.each(function (e) {
                    re(this).removeClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;)
                                i = i.replace(" " + r + " ", " ");
                        a = t ? re.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function (n) {
                re(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function () {
                if ("string" === n)
                    for (var e, i = 0, r = re(this), o = t.match(be) || []; e = o[i++];)
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    (n === ke || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        }, hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        re.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Dn = re.now(), jn = /\?/, Ln = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n, i = null, r = re.trim(e + "");
        return r && !re.trim(r.replace(Ln, function (t, e, r, o) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function (e) {
        var n, i;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), n
    };
    var Pn, Fn, Hn = /#.*$/, Mn = /([?&])_=[^&]*/, On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, In = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rn = /^(?:GET|HEAD)$/, qn = /^\/\//, Wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Bn = {}, zn = {}, Xn = "*/".concat("*");
    try {
        Fn = location.href
    } catch (Un) {
        Fn = pe.createElement("a"), Fn.href = "", Fn = Fn.href
    }
    Pn = Wn.exec(Fn.toLowerCase()) || [], re.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Fn, type: "GET", isLocal: In.test(Pn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Xn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": re.parseJSON, "text xml": re.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (t, e) {
            return e ? q(q(t, re.ajaxSettings), e) : q(re.ajaxSettings, t)
        }, ajaxPrefilter: I(Bn), ajaxTransport: I(zn), ajax: function (t, e) {
            function n(t, e, n, i) {
                var r, c, v, y, w, C = e;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = W(d, x, n)), y = B(d, y, x, r), r ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (re.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (re.etag[o] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, r = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || C) + "", r ? p.resolveWith(f, [c, C, x]) : p.rejectWith(f, [x, C, v]), x.statusCode(g), g = void 0, l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? c : v]), m.fireWith(f, [x, C]), l && (h.trigger("ajaxComplete", [x, d]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, a, s, l, u, c, d = re.ajaxSetup({}, e), f = d.context || d, h = d.context && (f.nodeType || f.jquery) ? re(f) : re.event, p = re.Deferred(), m = re.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
                readyState: 0, getResponseHeader: function (t) {
                    var e;
                    if (2 === b) {
                        if (!c)
                            for (c = {}; e = On.exec(a) ;)
                                c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null : e
                }, getAllResponseHeaders: function () {
                    return 2 === b ? a : null
                }, setRequestHeader: function (t, e) {
                    var n = t.toLowerCase();
                    return b || (t = y[n] = y[n] || t, v[t] = e), this
                }, overrideMimeType: function (t) {
                    return b || (d.mimeType = t), this
                }, statusCode: function (t) {
                    var e;
                    if (t)
                        if (2 > b)
                            for (e in t)
                                g[e] = [g[e], t[e]];
                        else
                            x.always(t[x.status]);
                    return this
                }, abort: function (t) {
                    var e = t || w;
                    return u && u.abort(e), n(0, e), this
                }
            };
            if (p.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Fn) + "").replace(Hn, "").replace(qn, Pn[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Wn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Pn[1] && i[2] === Pn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pn[3] || ("http:" === Pn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), R(Bn, d, e, x), 2 === b)
                return x;
            l = d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (jn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mn.test(o) ? o.replace(Mn, "$1_=" + Dn++) : o + (jn.test(o) ? "&" : "?") + "_=" + Dn++)), d.ifModified && (re.lastModified[o] && x.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && x.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers)
                x.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b))
                return x.abort();
            w = "abort";
            for (r in { success: 1, error: 1, complete: 1 })
                x[r](d[r]);
            if (u = R(zn, d, e, x)) {
                x.readyState = 1, l && h.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (C) {
                    if (!(2 > b))
                        throw C;
                    n(-1, C)
                }
            } else
                n(-1, "No Transport");
            return x
        }, getJSON: function (t, e, n) {
            return re.get(t, e, n, "json")
        }, getScript: function (t, e) {
            return re.get(t, void 0, e, "script")
        }
    }), re.each(["get", "post"], function (t, e) {
        re[e] = function (t, n, i, r) {
            return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({ url: t, type: e, dataType: r, data: n, success: i })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        re.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), re._evalUrl = function (t) {
        return re.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 })
    }, re.fn.extend({
        wrapAll: function (t) {
            if (re.isFunction(t))
                return this.each(function (e) {
                    re(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        }, wrapInner: function (t) {
            return this.each(re.isFunction(t) ? function (e) {
                re(this).wrapInner(t.call(this, e))
            } : function () {
                var e = re(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = re.isFunction(t);
            return this.each(function (n) {
                re(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function (t) {
        return !re.expr.filters.hidden(t)
    };
    var Qn = /%20/g, Gn = /\[\]$/, Vn = /\r?\n/g, Kn = /^(?:submit|button|image|reset|file)$/i, Zn = /^(?:input|select|textarea|keygen)/i;
    re.param = function (t, e) {
        var n, i = [], r = function (t, e) {
            e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t))
            re.each(t, function () {
                r(this.name, this.value)
            });
        else
            for (n in t)
                z(n, t[n], e, r);
        return i.join("&").replace(Qn, "+")
    }, re.fn.extend({
        serialize: function () {
            return re.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Zn.test(this.nodeName) && !Kn.test(t) && (this.checked || !Ae.test(t))
            }).map(function (t, e) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function (t) {
                    return { name: e.name, value: t.replace(Vn, "\r\n") }
                }) : { name: e.name, value: n.replace(Vn, "\r\n") }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Jn = 0, Yn = {}, ti = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function () {
        for (var t in Yn)
            Yn[t](void 0, !0)
    }), ne.cors = !!ti && "withCredentials" in ti, ti = ne.ajax = !!ti, ti && re.ajaxTransport(function (t) {
        if (!t.crossDomain || ne.cors) {
            var e;
            return {
                send: function (n, i) {
                    var r, o = t.xhr(), a = ++Jn;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields)
                            o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(t.hasContent && t.data || null), e = function (n, r) {
                        var s, l, u;
                        if (e && (r || 4 === o.readyState))
                            if (delete Yn[a], e = void 0, o.onreadystatechange = re.noop, r)
                                4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && i(s, l, u, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Yn[a] = e : e()
                }, abort: function () {
                    e && e(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: {
            "text script": function (t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n = pe.head || re("head")[0] || pe.documentElement;
            return {
                send: function (i, r) {
                    e = pe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                }, abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [], ni = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = ei.pop() || re.expando + "_" + Dn++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, o, a, s = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ni, "$1" + r) : e.jsonp !== !1 && (e.url += (jn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return a || re.error(r + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            a = arguments
        }, i.always(function () {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, ei.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), re.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || pe;
        var i = de.exec(t), r = !n && [];
        return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var ii = re.fn.load;
    re.fn.load = function (t, e, n) {
        if ("string" != typeof t && ii)
            return ii.apply(this, arguments);
        var i, r, o, a = this, s = t.indexOf(" ");
        return s >= 0 && (i = re.trim(t.slice(s, t.length)), t = t.slice(0, s)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && re.ajax({ url: t, type: o, dataType: "html", data: e }).done(function (t) {
            r = arguments, a.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
        }).complete(n && function (t, e) {
            a.each(n, r || [t.responseText, e, t])
        }), this
    }, re.expr.filters.animated = function (t) {
        return re.grep(re.timers, function (e) {
            return t === e.elem
        }).length
    };
    var ri = t.document.documentElement;
    re.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, a, s, l, u, c = re.css(t, "position"), d = re(t), f = {};
            "static" === c && (t.style.position = "relative"), s = d.offset(), o = re.css(t, "top"), l = re.css(t, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, l]) > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + r), "using" in e ? e.using.call(t, f) : d.css(f)
        }
    }, re.fn.extend({
        offset: function (t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function (e) {
                    re.offset.setOffset(this, t, e)
                });
            var e, n, i = { top: 0, left: 0 }, r = this[0], o = r && r.ownerDocument;
            return o ? (e = o.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = Q(o), { top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) }) : i) : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, n = { top: 0, left: 0 }, i = this[0];
                return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), { top: e.top - n.top - re.css(i, "marginTop", !0), left: e.left - n.left - re.css(i, "marginLeft", !0) }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position") ;)
                    t = t.offsetParent;
                return t || ri
            })
        }
    }), re.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
        var n = /Y/.test(e);
        re.fn[t] = function (i) {
            return Ne(this, function (t, i, r) {
                var o = Q(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void (o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : t[i] = r)
            }, t, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function (t, e) {
        re.cssHooks[e] = T(ne.pixelPosition, function (t, n) {
            return n ? (n = en(t, e), rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
        })
    }), re.each({ Height: "height", Width: "width" }, function (t, e) {
        re.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
            re.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Ne(this, function (e, n, i) {
                    var r;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? re.css(e, n, a) : re.style(e, n, i, a)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), re.fn.size = function () {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    });
    var oi = t.jQuery, ai = t.$;
    return re.noConflict = function (e) {
        return t.$ === re && (t.$ = ai), e && t.jQuery === re && (t.jQuery = oi), re
    }, typeof e === ke && (t.jQuery = t.$ = re), re
}), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]", buttonClickSelector: "button[data-remote], button[data-confirm]", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])", disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input[type=file]", linkDisableSelector: "a[data-disable-with], a[data-disable]", buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]", CSRFProtection: function (e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        }, refreshCSRFTokens: function () {
            var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        }, fire: function (e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        }, confirm: function (t) {
            return confirm(t)
        }, ajax: function (e) {
            return t.ajax(e)
        }, href: function (t) {
            return t.attr("href")
        }, handleRemote: function (i) {
            var r, o, a, s, l, u, c, d;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("cross-domain"), l = s === e ? null : s, u = i.data("with-credentials") || null, c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                    var f = i.data("ujs:submit-button");
                    f && (a.push(f), i.data("ujs:submit-button", null))
                } else
                    i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                return d = {
                    type: r || "GET", data: a, dataType: c, beforeSend: function (t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? void i.trigger("ajax:send", t) : !1
                    }, success: function (t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    }, complete: function (t, e) {
                        i.trigger("ajax:complete", [t, e])
                    }, error: function (t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    }, crossDomain: l
                }, u && (d.xhrFields = { withCredentials: u }), o && (d.url = o), n.ajax(d)
            }
            return !1
        }, handleMethod: function (i) {
            var r = n.href(i), o = i.data("method"), a = i.attr("target"), s = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), u = t('<form method="post" action="' + r + '"></form>'), c = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== e && s !== e && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
        }, formElements: function (e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        }, disableFormElements: function (e) {
            n.formElements(e, n.disableSelector).each(function () {
                n.disableFormElement(t(this))
            })
        }, disableFormElement: function (t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
        }, enableFormElements: function (e) {
            n.formElements(e, n.enableSelector).each(function () {
                n.enableFormElement(t(this))
            })
        }, enableFormElement: function (t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        }, allowAction: function (t) {
            var e, i = t.data("confirm"), r = !1;
            return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
        }, blankInputs: function (e, n, i) {
            var r, o, a = t(), s = n || "input,textarea", l = e.find(s);
            return l.each(function () {
                if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)
                        return !0;
                    a = a.add(r)
                }
            }), a.length ? a : !1
        }, nonBlankInputs: function (t, e) {
            return n.blankInputs(t, e, !0)
        }, stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        }, disableElement: function (t) {
            var i = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function (t) {
                return n.stopEverything(t)
            })
        }, enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
        n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
        var r = t(this), o = r.data("method"), a = r.data("params"), s = i.metaKey || i.ctrlKey;
        if (!n.allowAction(r))
            return n.stopEverything(i);
        if (!s && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
            if (s && (!o || "GET" === o) && !a)
                return !0;
            var l = n.handleRemote(r);
            return l === !1 ? n.enableElement(r) : l.error(function () {
                n.enableElement(r)
            }), !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i))
            return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.error(function () {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function (e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
        var r, o, a = t(this), s = a.data("remote") !== e;
        if (!n.allowAction(a))
            return n.stopEverything(i);
        if (a.attr("novalidate") == e && (r = n.blankInputs(a, n.requiredInputSelector), r && n.fire(a, "ajax:aborted:required", [r])))
            return n.stopEverything(i);
        if (s) {
            if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(a)
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [o]);
                return l || setTimeout(function () {
                    n.enableFormElements(a)
                }, 13), l
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function () {
            n.disableFormElements(a)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i))
            return n.stopEverything(e);
        var r = i.attr("name"), o = r ? { name: r, value: i.val() } : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function (e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    function e(e, i) {
        var r, o, a, s = e.nodeName.toLowerCase();
        return "area" === s ? (r = e.parentNode, o = r.name, e.href && o && "map" === r.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']")[0], !!a && n(a)) : !1) : (/input|select|textarea|button|object/.test(s) ? !e.disabled : "a" === s ? e.href || i : i) && n(e)
    }
    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    t.ui = t.ui || {}, t.extend(t.ui, { version: "1.11.1", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), t.fn.extend({
        scrollParent: function (e) {
            var n = this.css("position"), i = "absolute" === n, r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function () {
                var e = t(this);
                return i && "static" === e.css("position") ? !1 : r.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
            return "fixed" !== n && o.length ? o : t(this[0].ownerDocument || document)
        }, uniqueId: function () {
            var t = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (n) {
                return !!t.data(n, e)
            }
        }) : function (e, n, i) {
            return !!t.data(e, i[3])
        }, focusable: function (n) {
            return e(n, !isNaN(t.attr(n, "tabindex")))
        }, tabbable: function (n) {
            var i = t.attr(n, "tabindex"), r = isNaN(i);
            return (r || i >= 0) && e(n, !r)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (e, n) {
        function i(e, n, i, o) {
            return t.each(r, function () {
                n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), n
        }
        var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], o = n.toLowerCase(), a = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
        t.fn["inner" + n] = function (e) {
            return void 0 === e ? a["inner" + n].call(this) : this.each(function () {
                t(this).css(o, i(this, e) + "px")
            })
        }, t.fn["outer" + n] = function (e, r) {
            return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function () {
                t(this).css(o, i(this, e, !0, r) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
        return function (n) {
            return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
        focus: function (e) {
            return function (n, i) {
                return "number" == typeof n ? this.each(function () {
                    var e = this;
                    setTimeout(function () {
                        t(e).focus(), i && i.call(e)
                    }, n)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus), disableSelection: function () {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(t + ".ui-disableSelection", function (t) {
                    t.preventDefault()
                })
            }
        }(), enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (e) {
            if (void 0 !== e)
                return this.css("zIndex", e);
            if (this.length)
                for (var n, i, r = t(this[0]) ; r.length && r[0] !== document;) {
                    if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), !isNaN(i) && 0 !== i))
                        return i;
                    r = r.parent()
                }
            return 0
        }
    }), t.ui.plugin = {
        add: function (e, n, i) {
            var r, o = t.ui[e].prototype;
            for (r in i)
                o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
        }, call: function (t, e, n, i) {
            var r, o = t.plugins[e];
            if (o && (i || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (r = 0; r < o.length; r++)
                    t.options[o[r][0]] && o[r][1].apply(t.element, n)
        }
    }
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    var e = 0, n = Array.prototype.slice;
    return t.cleanData = function (e) {
        return function (n) {
            var i, r, o;
            for (o = 0; null != (r = n[o]) ; o++)
                try {
                    i = t._data(r, "events"), i && i.remove && t(r).triggerHandler("remove")
                } catch (a) {
                }
            e(n)
        }
    }(t.cleanData), t.widget = function (e, n, i) {
        var r, o, a, s, l = {}, u = e.split(".")[0];
        return e = e.split(".")[1], r = u + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][r.toLowerCase()] = function (e) {
            return !!t.data(e, r)
        }, t[u] = t[u] || {}, o = t[u][e], a = t[u][e] = function (t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new a(t, e)
        }, t.extend(a, o, { version: i.version, _proto: t.extend({}, i), _childConstructors: [] }), s = new n, s.options = t.widget.extend({}, s.options), t.each(i, function (e, i) {
            return t.isFunction(i) ? void (l[e] = function () {
                var t = function () {
                    return n.prototype[e].apply(this, arguments)
                }, r = function (t) {
                    return n.prototype[e].apply(this, t)
                };
                return function () {
                    var e, n = this._super, o = this._superApply;
                    return this._super = t, this._superApply = r, e = i.apply(this, arguments), this._super = n, this._superApply = o, e
                }
            }()) : void (l[e] = i)
        }), a.prototype = t.widget.extend(s, { widgetEventPrefix: o ? s.widgetEventPrefix || e : e }, l, { constructor: a, namespace: u, widgetName: e, widgetFullName: r }), o ? (t.each(o._childConstructors, function (e, n) {
            var i = n.prototype;
            t.widget(i.namespace + "." + i.widgetName, a, n._proto)
        }), delete o._childConstructors) : n._childConstructors.push(a), t.widget.bridge(e, a), a
    }, t.widget.extend = function (e) {
        for (var i, r, o = n.call(arguments, 1), a = 0, s = o.length; s > a; a++)
            for (i in o[a])
                r = o[a][i], o[a].hasOwnProperty(i) && void 0 !== r && (e[i] = t.isPlainObject(r) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], r) : t.widget.extend({}, r) : r);
        return e
    }, t.widget.bridge = function (e, i) {
        var r = i.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
            var a = "string" == typeof o, s = n.call(arguments, 1), l = this;
            return o = !a && s.length ? t.widget.extend.apply(null, [o].concat(s)) : o, this.each(a ? function () {
                var n, i = t.data(this, r);
                return "instance" === o ? (l = i, !1) : i ? t.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, s), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
            } : function () {
                var e = t.data(this, r);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, r, new i(o, this))
            }), l
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (n, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), n), this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        }, _getCreateOptions: t.noop, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        }, _destroy: t.noop, widget: function () {
            return this.element
        }, option: function (e, n) {
            var i, r, o, a = e;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, i = e.split("."), e = i.shift(), i.length) {
                    for (r = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < i.length - 1; o++)
                        r[i[o]] = r[i[o]] || {}, r = r[i[o]];
                    if (e = i.pop(), 1 === arguments.length)
                        return void 0 === r[e] ? null : r[e];
                    r[e] = n
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = n
                }
            return this._setOptions(a), this
        }, _setOptions: function (t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        }, _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        }, enable: function () {
            return this._setOptions({ disabled: !1 })
        }, disable: function () {
            return this._setOptions({ disabled: !0 })
        }, _on: function (e, n, i) {
            var r, o = this;
            "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = r = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), t.each(i, function (i, a) {
                function s() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || t.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/), u = l[1] + o.eventNamespace, c = l[2];
                c ? r.delegate(c, u, s) : n.bind(u, s)
            })
        }, _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        }, _delay: function (t, e) {
            function n() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, e || 0)
        }, _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        }, _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                }, focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        }, _trigger: function (e, n, i) {
            var r, o, a = this.options[e];
            if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                for (r in o)
                    r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(t.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, n) {
        t.Widget.prototype["_" + e] = function (i, r, o) {
            "string" == typeof r && (r = { effect: r });
            var a, s = r ? r === !0 || "number" == typeof r ? n : r.effect || n : e;
            r = r || {}, "number" == typeof r && (r = { duration: r }), a = !t.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), a && t.effects && t.effects.effect[s] ? i[e](r) : s !== e && i[s] ? i[s](r.duration, r.easing, o) : i.queue(function (n) {
                t(this)[e](), o && o.call(i[0]), n()
            })
        }
    }), t.widget
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position", "./menu"], t) : t(jQuery)
}(function (t) {
    return t.widget("ui.autocomplete", {
        version: "1.11.1", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function () {
            var e, n, i, r = this.element[0].nodeName.toLowerCase(), o = "textarea" === r, a = "input" === r;
            this.isMultiLine = o ? !0 : a ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (r) {
                    if (this.element.prop("readOnly"))
                        return e = !0, i = !0, void (n = !0);
                    e = !1, i = !1, n = !1;
                    var o = t.ui.keyCode;
                    switch (r.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", r);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", r);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", r);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", r);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0, r.preventDefault(), this.menu.select(r));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(r);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(r), r.preventDefault());
                            break;
                        default:
                            n = !0, this._searchTimeout(r)
                    }
                }, keypress: function (i) {
                    if (e)
                        return e = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && i.preventDefault());
                    if (!n) {
                        var r = t.ui.keyCode;
                        switch (i.keyCode) {
                            case r.PAGE_UP:
                                this._move("previousPage", i);
                                break;
                            case r.PAGE_DOWN:
                                this._move("nextPage", i);
                                break;
                            case r.UP:
                                this._keyEvent("previous", i);
                                break;
                            case r.DOWN:
                                this._keyEvent("next", i)
                        }
                    }
                }, input: function (t) {
                    return i ? (i = !1, void t.preventDefault()) : void this._searchTimeout(t)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function (e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var n = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                        var e = this;
                        this.document.one("mousedown", function (i) {
                            i.target === e.element[0] || i.target === n || t.contains(n, i.target) || e.close()
                        })
                    })
                }, menufocus: function (e, n) {
                    var i, r;
                    return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
                        t(e.target).trigger(e.originalEvent)
                    })) : (r = n.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: r }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(r.value), i = n.item.attr("aria-label") || r.value, void (i && t.trim(i).length && (this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))))
                }, menuselect: function (t, e) {
                    var n = e.item.data("ui-autocomplete-item"), i = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, this._delay(function () {
                        this.previous = i, this.selectedItem = n
                    })), !1 !== this._trigger("select", t, { item: n }) && this._value(n.value), this.term = this._value(), this.close(t), this.selectedItem = n
                }
            }), this.liveRegion = t("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        }, _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        }, _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        }, _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        }, _initSource: function () {
            var e, n, i = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (n, i) {
                i(t.ui.autocomplete.filter(e, n.term))
            }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function (e, r) {
                i.xhr && i.xhr.abort(), i.xhr = t.ajax({
                    url: n, data: e, dataType: "json", success: function (t) {
                        r(t)
                    }, error: function () {
                        r([])
                    }
                })
            }) : this.source = this.options.source
        }, _searchTimeout: function (t) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var e = this.term === this._value(), n = this.menu.element.is(":visible"), i = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !n && !i) && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        }, search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        }, _search: function (t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response())
        }, _response: function () {
            var e = ++this.requestIndex;
            return t.proxy(function (t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        }, __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        }, close: function (t) {
            this.cancelSearch = !0, this._close(t)
        }, _close: function (t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        }, _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem })
        }, _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label })
            })
        }, _suggest: function (e) {
            var n = this.menu.element.empty();
            this._renderMenu(n, e), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), n.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next()
        }, _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        }, _renderMenu: function (e, n) {
            var i = this;
            t.each(n, function (t, n) {
                i._renderItemData(e, n)
            })
        }, _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        }, _renderItem: function (e, n) {
            return t("<li>").text(n.label).appendTo(e)
        }, _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        }, widget: function () {
            return this.menu.element
        }, _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        }, _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (e, n) {
            var i = new RegExp(t.ui.autocomplete.escapeRegex(n), "i");
            return t.grep(e, function (t) {
                return i.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.", results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (e) {
            var n;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (n = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))
        }
    }), t.ui.autocomplete
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position"], t) : t(jQuery)
}(function (t) {
    return t.widget("ui.menu", {
        version: "1.11.1", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item": function (t) {
                    t.preventDefault()
                }, "click .ui-menu-item": function (e) {
                    var n = t(e.target);
                    !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), n.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (e) {
                    var n = t(e.currentTarget);
                    n.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(e, n)
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                    var n = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, n)
                }, blur: function (e) {
                    this._delay(function () {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        }, _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        }, _keydown: function (e) {
            function n(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var i, r, o, a, s, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, r = this.previousFilter || "", o = String.fromCharCode(e.keyCode), a = !1, clearTimeout(this.filterTimer), o === r ? a = !0 : o = r + o, s = new RegExp("^" + n(o), "i"), i = this.activeMenu.find(this.options.items).filter(function () {
                        return s.test(t(this).text())
                    }), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (o = String.fromCharCode(e.keyCode), s = new RegExp("^" + n(o), "i"), i = this.activeMenu.find(this.options.items).filter(function () {
                        return s.test(t(this).text())
                    })), i.length ? (this.focus(e, i), i.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        }, _activate: function (t) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
        }, refresh: function () {
            var e, n, i = this, r = this.options.icons.submenu, o = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), o.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () {
                var e = t(this), n = e.parent(), i = t("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
                n.attr("aria-haspopup", "true").prepend(i), e.attr("aria-labelledby", n.attr("id"))
            }), e = o.add(this.element), n = e.find(this.options.items), n.not(".ui-menu-item").each(function () {
                var e = t(this);
                i._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
            }), n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), n.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        }, _itemRole: function () {
            return { menu: "menuitem", listbox: "option" }[this.options.role]
        }, _setOption: function (t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
        }, focus: function (t, e) {
            var n, i;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), i = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), n = e.children(".ui-menu"), n.length && t && /^mouse/.test(t.type) && this._startOpening(n), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e })
        }, _scrollIntoView: function (e) {
            var n, i, r, o, a, s;
            this._hasScroll() && (n = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, r = e.offset().top - this.activeMenu.offset().top - n - i, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), s = e.outerHeight(), 0 > r ? this.activeMenu.scrollTop(o + r) : r + s > a && this.activeMenu.scrollTop(o + r - a + s))
        }, blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, { item: this.active }))
        }, _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        }, _open: function (e) {
            var n = t.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
        }, collapseAll: function (e, n) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var i = n ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                i.length || (i = this.element), this._close(i), this.blur(e), this.activeMenu = i
            }, this.delay)
        }, _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        }, _closeOnDocumentClick: function (e) {
            return !t(e.target).closest(".ui-menu").length
        }, _isDivider: function (t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        }, collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        }, expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        }, next: function (t) {
            this._move("next", "first", t)
        }, previous: function (t) {
            this._move("prev", "last", t)
        }, isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        }, isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        }, _move: function (t, e, n) {
            var i;
            this.active && (i = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[e]()), this.focus(n, i)
        }, nextPage: function (e) {
            var n, i, r;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return n = t(this), n.offset().top - i - r < 0
            }), this.focus(e, n)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
        }, previousPage: function (e) {
            var n, i, r;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return n = t(this), n.offset().top - i + r > 0
            }), this.focus(e, n)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
        }, _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        }, select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var n = { item: this.active };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, n)
        }
    })
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    return function () {
        function e(t, e, n) {
            return [parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? n / 100 : 1)]
        }
        function n(e, n) {
            return parseInt(t.css(e, n), 10) || 0
        }
        function i(e) {
            var n = e[0];
            return 9 === n.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(n) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : n.preventDefault ? { width: 0, height: 0, offset: { top: n.pageY, left: n.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() }
        }
        t.ui = t.ui || {};
        var r, o, a = Math.max, s = Math.abs, l = Math.round, u = /left|center|right/, c = /top|center|bottom/, d = /[\+\-]\d+(\.[\d]+)?%?/, f = /^\w+/, h = /%$/, p = t.fn.position;
        t.position = {
            scrollbarWidth: function () {
                if (void 0 !== r)
                    return r;
                var e, n, i = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = i.children()[0];
                return t("body").append(i), e = o.offsetWidth, i.css("overflow", "scroll"), n = o.offsetWidth, e === n && (n = i[0].clientWidth), i.remove(), r = e - n
            }, getScrollInfo: function (e) {
                var n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), r = "scroll" === n || "auto" === n && e.width < e.element[0].scrollWidth, o = "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight;
                return { width: o ? t.position.scrollbarWidth() : 0, height: r ? t.position.scrollbarWidth() : 0 }
            }, getWithinInfo: function (e) {
                var n = t(e || window), i = t.isWindow(n[0]), r = !!n[0] && 9 === n[0].nodeType;
                return { element: n, isWindow: i, isDocument: r, offset: n.offset() || { left: 0, top: 0 }, scrollLeft: n.scrollLeft(), scrollTop: n.scrollTop(), width: i || r ? n.width() : n.outerWidth(), height: i || r ? n.height() : n.outerHeight() }
            }
        }, t.fn.position = function (r) {
            if (!r || !r.of)
                return p.apply(this, arguments);
            r = t.extend({}, r);
            var h, m, g, v, y, b, w = t(r.of), x = t.position.getWithinInfo(r.within), C = t.position.getScrollInfo(x), k = (r.collision || "flip").split(" "), E = {};
            return b = i(w), w[0].preventDefault && (r.at = "left top"), m = b.width, g = b.height, v = b.offset, y = t.extend({}, v), t.each(["my", "at"], function () {
                var t, e, n = (r[this] || "").split(" ");
                1 === n.length && (n = u.test(n[0]) ? n.concat(["center"]) : c.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = u.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", t = d.exec(n[0]), e = d.exec(n[1]), E[this] = [t ? t[0] : 0, e ? e[0] : 0], r[this] = [f.exec(n[0])[0], f.exec(n[1])[0]]
            }), 1 === k.length && (k[1] = k[0]), "right" === r.at[0] ? y.left += m : "center" === r.at[0] && (y.left += m / 2), "bottom" === r.at[1] ? y.top += g : "center" === r.at[1] && (y.top += g / 2), h = e(E.at, m, g), y.left += h[0], y.top += h[1], this.each(function () {
                var i, u, c = t(this), d = c.outerWidth(), f = c.outerHeight(), p = n(this, "marginLeft"), b = n(this, "marginTop"), _ = d + p + n(this, "marginRight") + C.width, T = f + b + n(this, "marginBottom") + C.height, S = t.extend({}, y), $ = e(E.my, c.outerWidth(), c.outerHeight());
                "right" === r.my[0] ? S.left -= d : "center" === r.my[0] && (S.left -= d / 2), "bottom" === r.my[1] ? S.top -= f : "center" === r.my[1] && (S.top -= f / 2), S.left += $[0], S.top += $[1], o || (S.left = l(S.left), S.top = l(S.top)), i = { marginLeft: p, marginTop: b }, t.each(["left", "top"], function (e, n) {
                    t.ui.position[k[e]] && t.ui.position[k[e]][n](S, { targetWidth: m, targetHeight: g, elemWidth: d, elemHeight: f, collisionPosition: i, collisionWidth: _, collisionHeight: T, offset: [h[0] + $[0], h[1] + $[1]], my: r.my, at: r.at, within: x, elem: c })
                }), r.using && (u = function (t) {
                    var e = v.left - S.left, n = e + m - d, i = v.top - S.top, o = i + g - f, l = { target: { element: w, left: v.left, top: v.top, width: m, height: g }, element: { element: c, left: S.left, top: S.top, width: d, height: f }, horizontal: 0 > n ? "left" : e > 0 ? "right" : "center", vertical: 0 > o ? "top" : i > 0 ? "bottom" : "middle" };
                    d > m && s(e + n) < m && (l.horizontal = "center"), f > g && s(i + o) < g && (l.vertical = "middle"), l.important = a(s(e), s(n)) > a(s(i), s(o)) ? "horizontal" : "vertical", r.using.call(this, t, l)
                }), c.offset(t.extend(S, { using: u }))
            })
        }, t.ui.position = {
            fit: {
                left: function (t, e) {
                    var n, i = e.within, r = i.isWindow ? i.scrollLeft : i.offset.left, o = i.width, s = t.left - e.collisionPosition.marginLeft, l = r - s, u = s + e.collisionWidth - o - r;
                    e.collisionWidth > o ? l > 0 && 0 >= u ? (n = t.left + l + e.collisionWidth - o - r, t.left += l - n) : t.left = u > 0 && 0 >= l ? r : l > u ? r + o - e.collisionWidth : r : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = a(t.left - s, t.left)
                }, top: function (t, e) {
                    var n, i = e.within, r = i.isWindow ? i.scrollTop : i.offset.top, o = e.within.height, s = t.top - e.collisionPosition.marginTop, l = r - s, u = s + e.collisionHeight - o - r;
                    e.collisionHeight > o ? l > 0 && 0 >= u ? (n = t.top + l + e.collisionHeight - o - r, t.top += l - n) : t.top = u > 0 && 0 >= l ? r : l > u ? r + o - e.collisionHeight : r : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = a(t.top - s, t.top)
                }
            }, flip: {
                left: function (t, e) {
                    var n, i, r = e.within, o = r.offset.left + r.scrollLeft, a = r.width, l = r.isWindow ? r.scrollLeft : r.offset.left, u = t.left - e.collisionPosition.marginLeft, c = u - l, d = u + e.collisionWidth - a - l, f = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, h = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, p = -2 * e.offset[0];
                    0 > c ? (n = t.left + f + h + p + e.collisionWidth - a - o, (0 > n || n < s(c)) && (t.left += f + h + p)) : d > 0 && (i = t.left - e.collisionPosition.marginLeft + f + h + p - l, (i > 0 || s(i) < d) && (t.left += f + h + p))
                }, top: function (t, e) {
                    var n, i, r = e.within, o = r.offset.top + r.scrollTop, a = r.height, l = r.isWindow ? r.scrollTop : r.offset.top, u = t.top - e.collisionPosition.marginTop, c = u - l, d = u + e.collisionHeight - a - l, f = "top" === e.my[1], h = f ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, m = -2 * e.offset[1];
                    0 > c ? (i = t.top + h + p + m + e.collisionHeight - a - o, t.top + h + p + m > c && (0 > i || i < s(c)) && (t.top += h + p + m)) : d > 0 && (n = t.top - e.collisionPosition.marginTop + h + p + m - l, t.top + h + p + m > d && (n > 0 || s(n) < d) && (t.top += h + p + m))
                }
            }, flipfit: {
                left: function () {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, function () {
            var e, n, i, r, a, s = document.getElementsByTagName("body")[0], l = document.createElement("div");
            e = document.createElement(s ? "div" : "body"), i = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, s && t.extend(i, { position: "absolute", left: "-1000px", top: "-1000px" });
            for (a in i)
                e.style[a] = i[a];
            e.appendChild(l), n = s || document.documentElement, n.insertBefore(e, n.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", r = t(l).offset().left, o = r > 10 && 11 > r, e.innerHTML = "", n.removeChild(e)
        }()
    }(), t.ui.position
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (t, e, n, i, r) {
        return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
    }, easeInQuad: function (t, e, n, i, r) {
        return i * (e /= r) * e + n
    }, easeOutQuad: function (t, e, n, i, r) {
        return -i * (e /= r) * (e - 2) + n
    }, easeInOutQuad: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
    }, easeInCubic: function (t, e, n, i, r) {
        return i * (e /= r) * e * e + n
    }, easeOutCubic: function (t, e, n, i, r) {
        return i * ((e = e / r - 1) * e * e + 1) + n
    }, easeInOutCubic: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
    }, easeInQuart: function (t, e, n, i, r) {
        return i * (e /= r) * e * e * e + n
    }, easeOutQuart: function (t, e, n, i, r) {
        return -i * ((e = e / r - 1) * e * e * e - 1) + n
    }, easeInOutQuart: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
    }, easeInQuint: function (t, e, n, i, r) {
        return i * (e /= r) * e * e * e * e + n
    }, easeOutQuint: function (t, e, n, i, r) {
        return i * ((e = e / r - 1) * e * e * e * e + 1) + n
    }, easeInOutQuint: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
    }, easeInSine: function (t, e, n, i, r) {
        return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
    }, easeOutSine: function (t, e, n, i, r) {
        return i * Math.sin(e / r * (Math.PI / 2)) + n
    }, easeInOutSine: function (t, e, n, i, r) {
        return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
    }, easeInExpo: function (t, e, n, i, r) {
        return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
    }, easeOutExpo: function (t, e, n, i, r) {
        return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
    }, easeInOutExpo: function (t, e, n, i, r) {
        return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
    }, easeInCirc: function (t, e, n, i, r) {
        return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
    }, easeOutCirc: function (t, e, n, i, r) {
        return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
    }, easeInOutCirc: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
    }, easeInElastic: function (t, e, n, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == e)
            return n;
        if (1 == (e /= r))
            return n + i;
        if (a || (a = .3 * r), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else
            var o = a / (2 * Math.PI) * Math.asin(i / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a)) + n
    }, easeOutElastic: function (t, e, n, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == e)
            return n;
        if (1 == (e /= r))
            return n + i;
        if (a || (a = .3 * r), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else
            var o = a / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - o) * Math.PI / a) + i + n
    }, easeInOutElastic: function (t, e, n, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == e)
            return n;
        if (2 == (e /= r / 2))
            return n + i;
        if (a || (a = .3 * r * 1.5), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else
            var o = a / (2 * Math.PI) * Math.asin(i / s);
        return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a) + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a) * .5 + i + n
    }, easeInBack: function (t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * (e /= r) * e * ((o + 1) * e - o) + n
    }, easeOutBack: function (t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
    }, easeInOutBack: function (t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * e * e * (((o *= 1.525) + 1) * e - o) + n : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
    }, easeInBounce: function (t, e, n, i, r) {
        return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
    }, easeOutBounce: function (t, e, n, i, r) {
        return (e /= r) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
    }, easeInOutBounce: function (t, e, n, i, r) {
        return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
    }
}), +function (t) {
    "use strict";
    var e = function (n, i) {
        this.options = t.extend({}, e.DEFAULTS, i), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = { offset: 0 }, e.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$window.scrollTop(), n = this.$element.offset();
        return this.pinnedOffset = n.top - t
    }, e.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var n = t(document).height(), i = this.$window.scrollTop(), r = this.$element.offset(), o = this.options.offset, a = o.top, s = o.bottom;
            "object" != typeof o && (s = a = o), "function" == typeof a && (a = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= r.top ? !1 : null != s && r.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""), c = t.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({ top: r.top }))
            }
        }
    };
    var n = t.fn.affix;
    t.fn.affix = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.affix"), o = "object" == typeof n && n;
            r || i.data("bs.affix", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var e = t(this), n = e.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n)
        })
    })
}(jQuery), +function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]', n = function (n) {
        t(n).on("click", e, this.close)
    };
    n.prototype.close = function (e) {
        function n() {
            o.trigger("closed.bs.alert").remove()
        }
        var i = t(this), r = i.attr("data-target");
        r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(r);
        e && e.preventDefault(), o.length || (o = i.hasClass("alert") ? i : i.parent()), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one(t.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    var e = function (n, i) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.isLoading = !1
    };
    e.DEFAULTS = { loadingText: "loading..." }, e.prototype.setState = function (e) {
        var n = "disabled", i = this.$element, r = i.is("input") ? "val" : "html", o = i.data();
        e += "Text", o.resetText || i.data("resetText", i[r]()), i[r](o[e] || this.options[e]), setTimeout(t.proxy(function () {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, e.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.button"), o = "object" == typeof n && n;
            r || i.data("bs.button", r = new e(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n)
        })
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (e) {
        var n = t(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), e.preventDefault()
    })
}(jQuery), +function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }, e.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(".item"), this.$items.index(this.$active)
    }, e.prototype.to = function (e) {
        var n = this, i = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, e.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function (e, n) {
        var i = this.$element.find(".item.active"), r = n || i[e](), o = this.interval, a = "next" == e ? "left" : "right", s = "next" == e ? "first" : "last", l = this;
        if (!r.length) {
            if (!this.options.wrap)
                return;
            r = this.$element.find(".item")[s]()
        }
        if (r.hasClass("active"))
            return this.sliding = !1;
        var u = t.Event("slide.bs.carousel", { relatedTarget: r[0], direction: a });
        return this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (this.sliding = !0, o && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
            var e = t(l.$indicators.children()[l.getActiveIndex()]);
            e && e.addClass("active")
        })), t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, i.addClass(a), r.addClass(a), i.one(t.support.transition.end, function () {
            r.removeClass([e, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                l.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), o && this.cycle(), this)
    };
    var n = t.fn.carousel;
    t.fn.carousel = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.carousel"), o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n), a = "string" == typeof n ? n : o.slide;
            r || i.data("bs.carousel", r = new e(this, o)), "number" == typeof n ? r.to(n) : a ? r[a]() : o.interval && r.pause().cycle()
        })
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
        var n, i = t(this), r = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), o = t.extend({}, r.data(), i.data()), a = i.attr("data-slide-to");
        a && (o.interval = !1), r.carousel(o), (a = i.attr("data-slide-to")) && r.data("bs.carousel").to(a), e.preventDefault()
    }), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var e = t(this);
            e.carousel(e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    var e = function (n, i) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.DEFAULTS = { toggle: !0 }, e.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, e.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = t.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var i = n.data("bs.collapse");
                    if (i && i.transitioning)
                        return;
                    n.collapse("hide"), i || n.data("bs.collapse", null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var o = function (e) {
                    return e && e.target != this.$element[0] ? void this.$element.one(t.support.transition.end, t.proxy(o, this)) : (this.$element.removeClass("collapsing").addClass("collapse in")[r]("auto"), this.transitioning = 0, void this.$element.trigger("shown.bs.collapse"))
                };
                if (!t.support.transition)
                    return o.call(this);
                var a = t.camelCase(["scroll", r].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[r](this.$element[0][a])
            }
        }
    }, e.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function (e) {
                    return e && e.target != this.$element[0] ? void this.$element.one(t.support.transition.end, t.proxy(i, this)) : (this.transitioning = 0, void this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse"))
                };
                return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, e.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = t.fn.collapse;
    t.fn.collapse = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.collapse"), o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
            !r && o.toggle && "show" == n && (n = !n), r || i.data("bs.collapse", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
        var n, i = t(this), r = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), o = t(r), a = o.data("bs.collapse"), s = a ? "toggle" : i.data(), l = i.attr("data-parent"), u = l && t(l);
        a && a.transitioning || (u && u.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(s)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        t(i).remove(), t(r).each(function () {
            var i = n(t(this)), r = { relatedTarget: this };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", r))
        })
    }
    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }
    var i = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', o = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    o.prototype.toggle = function (i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = n(r), a = o.hasClass("open");
            if (e(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var s = { relatedTarget: this };
                if (o.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented())
                    return;
                r.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, o.prototype.keydown = function (e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i), a = o.hasClass("open");
                if (!a || a && 27 == e.keyCode)
                    return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
                var s = " li:not(.divider):visible a", l = o.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var n = t(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
        })
    }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    var e = function (e) {
        this.element = t(e)
    };
    e.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a")[0], o = t.Event("show.bs.tab", { relatedTarget: r });
            if (e.trigger(o), !o.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.parent("li"), n), this.activate(a, a.parent(), function () {
                    e.trigger({ type: "shown.bs.tab", relatedTarget: r })
                })
            }
        }
    }, e.prototype.activate = function (e, n, i) {
        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }
        var o = n.find("> .active"), a = i && t.support.transition && o.hasClass("fade");
        a ? o.one(t.support.transition.end, r).emulateTransitionEnd(150) : r(), o.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.tab");
            r || i.data("bs.tab", r = new e(this)), "string" == typeof n && r[n]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault(), t(this).tab("show")
    })
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var n in e)
            if (void 0 !== t.style[n])
                return { end: e[n] };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one(t.support.transition.end, function () {
            n = !0
        });
        var r = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function () {
        t.support.transition = e()
    })
}(jQuery), +function (t) {
    "use strict";
    function e(n, i) {
        var r, o = t.proxy(this.process, this);
        this.$element = t(t(n).is("body") ? window : n), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scrollspy", o), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || (r = t(n).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
    }
    e.DEFAULTS = { offset: 10 }, e.prototype.refresh = function () {
        var e = this.$element[0] == window ? "offset" : "position";
        this.offsets = t([]), this.targets = t([]);
        var n = this;
        this.$body.find(this.selector).map(function () {
            var i = t(this), r = i.data("target") || i.attr("href"), o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [[o[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), r]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight), i = n - this.$scrollElement.height(), r = this.offsets, o = this.targets, a = this.activeTarget;
        if (e >= i)
            return a != (t = o.last()[0]) && this.activate(t);
        if (a && e <= r[0])
            return a != (t = o[0]) && this.activate(t);
        for (t = r.length; t--;)
            a != o[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.scrollspy"), o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    var e = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, e.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function (e) {
        var n = this, i = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var r = t.Event("shown.bs.modal", { relatedTarget: e });
            i ? n.$element.find(".modal-dialog").one(t.support.transition.end, function () {
                n.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(r)
        }))
    }, e.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function (e) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                return;
            i ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    }, e.prototype.checkScrollbar = function () {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, e.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, e.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = function (n, i) {
        return this.each(function () {
            var r = t(this), o = r.data("bs.modal"), a = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
            o || r.data("bs.modal", o = new e(this, a)), "string" == typeof n ? o[n](i) : a.show && o.show(i)
        })
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
        var n = t(this), i = n.attr("href"), r = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), o = r.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(i) && i }, r.data(), n.data());
        n.is("a") && e.preventDefault(), r.modal(o, this).one("hide", function () {
            n.is(":visible") && n.trigger("focus")
        })
    })
}(jQuery), +function (t) {
    "use strict";
    var e = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, e.prototype.init = function (e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var a = r[o];
            if ("click" == a)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
    }, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e
    }, e.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, e.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, e.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, e.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented())
                return;
            var n = this, i = this.tip();
            this.setContent(), this.options.animation && i.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement, o = /\s?auto?\s?/i, a = o.test(r);
            a && (r = r.replace(o, "") || "top"), i.detach().css({ top: 0, left: 0, display: "block" }).addClass(r), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var s = this.getPosition(), l = i[0].offsetWidth, u = i[0].offsetHeight;
            if (a) {
                var c = r, d = this.$element.parent(), f = this.getPosition(d);
                r = "bottom" == r && s.top + s.height + u - f.scroll > f.height ? "top" : "top" == r && s.top - f.scroll - u < 0 ? "bottom" : "right" == r && s.right + l > f.width ? "left" : "left" == r && s.left - l < f.left ? "right" : r, i.removeClass(c).addClass(r)
            }
            var h = this.getCalculatedOffset(r, s, l, u);
            this.applyPlacement(h, r), this.hoverState = null;
            var p = function () {
                n.$element.trigger("shown.bs." + n.type)
            };
            t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, p).emulateTransitionEnd(150) : p()
        }
    }, e.prototype.applyPlacement = function (e, n) {
        var i = this.tip(), r = i[0].offsetWidth, o = i[0].offsetHeight, a = parseInt(i.css("margin-top"), 10), s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({ top: Math.round(t.top), left: Math.round(t.left) })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth, u = i[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var d = c.left ? 2 * c.left - r + l : 2 * c.top - o + u, f = c.left ? "left" : "top", h = c.left ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][h], f)
    }, e.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function () {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this, i = this.tip(), r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function () {
        return this.getTitle()
    }, e.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], i = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(), width: i ? t(window).width() : e.outerWidth(), height: i ? t(window).height() : e.outerHeight() }, i ? { top: 0, left: 0 } : e.offset())
    }, e.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 } : "top" == t ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 } : "left" == t ? { top: e.top + e.height / 2 - i / 2, left: e.left - n } : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width }
    }, e.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var r = { top: 0, left: 0 };
        if (!this.$viewport)
            return r;
        var o = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll, l = e.top + o - a.scroll + i;
            s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l)
        } else {
            var u = e.left - o, c = e.left + o + n;
            u < a.left ? r.left = a.left - u : c > a.width && (r.left = a.left + a.width - c)
        }
        return r
    }, e.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, e.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function () {
        this.enabled = !0
    }, e.prototype.disable = function () {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function (e) {
        var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, e.prototype.destroy = function () {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.tooltip"), o = "object" == typeof n && n;
            (r || "destroy" != n) && (r || i.data("bs.tooltip", r = new e(this, o)), "string" == typeof n && r[n]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(jQuery), +function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, e.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var n = t.fn.popover;
    t.fn.popover = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.popover"), o = "object" == typeof n && n;
            (r || "destroy" != n) && (r || i.data("bs.popover", r = new e(this, o)), "string" == typeof n && r[n]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(jQuery), function () {
    var t, e, n, i, r, o, a, s, l, u, c, d, f, h, p, m, g, v, y, b, w, x, C, k, E, _, T, S, $, N, A, D, j, L, P, F, H, M, O, I, R, q, W, B, z, X, U, Q, G, V = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++)
            if (e in this && this[e] === t)
                return e;
        return -1
    }, K = {}.hasOwnProperty, Z = function (t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            K.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, J = [].slice;
    $ = {}, d = 10, B = !1, m = null, S = null, P = null, p = null, Q = null, b = function (t) {
        var e;
        return t = new n(t), I(), c(), F(t), B && (e = z(t.absolute)) ? (w(e), x(t)) : x(t, W)
    }, z = function (t) {
        var e;
        return e = $[t], e && !e.transitionCacheDisabled ? e : void 0
    }, g = function (t) {
        return null == t && (t = !0), B = t
    }, x = function (t, e) {
        return null == e && (e = function () {
            return function () {
            }
        }(this)), X("page:fetch", { url: t.absolute }), null != Q && Q.abort(), Q = new XMLHttpRequest, Q.open("GET", t.withoutHashForIE10compatibility(), !0), Q.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), Q.setRequestHeader("X-XHR-Referer", P), Q.onload = function () {
            var n;
            return X("page:receive"), (n = j()) ? (f.apply(null, y(n)), H(), e(), X("page:load")) : document.location.href = t.absolute
        }, Q.onloadend = function () {
            return Q = null
        }, Q.onerror = function () {
            return document.location.href = t.absolute
        }, Q.send()
    }, w = function (t) {
        return null != Q && Q.abort(), f(t.title, t.body), L(t), X("page:restore")
    }, c = function () {
        var t;
        return t = new n(m.url), $[t.absolute] = { url: t.relative, body: document.body, title: document.title, positionY: window.pageYOffset, positionX: window.pageXOffset, cachedAt: (new Date).getTime(), transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]") }, h(d)
    }, A = function (t) {
        return null == t && (t = d), /^[\d]+$/.test(t) ? d = parseInt(t) : void 0
    }, h = function (t) {
        var e, n, i, r, o, a;
        for (i = Object.keys($), e = i.map(function (t) {
            return $[t].cachedAt
        }).sort(function (t, e) {
            return e - t
        }), a = [], r = 0, o = i.length; o > r; r++)
            n = i[r], $[n].cachedAt <= e[t] && (X("page:expire", $[n]), a.push(delete $[n]));
        return a
    }, f = function (e, n, i, r) {
        return document.title = e, document.documentElement.replaceChild(n, document.body), null != i && t.update(i), r && v(), m = window.history.state, X("page:change"), X("page:update")
    }, v = function () {
        var t, e, n, i, r, o, a, s, l, u, c, d;
        for (o = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), a = 0, l = o.length; l > a; a++)
            if (r = o[a], "" === (c = r.type) || "text/javascript" === c) {
                for (e = document.createElement("script"), d = r.attributes, s = 0, u = d.length; u > s; s++)
                    t = d[s], e.setAttribute(t.name, t.value);
                e.appendChild(document.createTextNode(r.innerHTML)), i = r.parentNode, n = r.nextSibling, i.removeChild(r), i.insertBefore(e, n)
            }
    }, R = function (t) {
        return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
    }, F = function (t) {
        return (t = new n(t)).absolute !== P ? window.history.pushState({ turbolinks: !0, url: t.absolute }, "", t.absolute) : void 0
    }, H = function () {
        var t, e;
        return (t = Q.getResponseHeader("X-XHR-Redirected-To")) ? (t = new n(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(m, "", t.href + e)) : void 0
    }, I = function () {
        return P = document.location.href
    }, O = function () {
        return window.history.replaceState({ turbolinks: !0, url: document.location.href }, "", document.location.href)
    }, M = function () {
        return m = window.history.state
    }, L = function (t) {
        return window.scrollTo(t.positionX, t.positionY)
    }, W = function () {
        return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
    }, D = function (t) {
        var e, n;
        return e = (null != (n = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? n[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", e
    }, X = function (t, e) {
        var n;
        return n = document.createEvent("Events"), e && (n.data = e), n.initEvent(t, !0, !0), document.dispatchEvent(n)
    }, N = function () {
        return !X("page:before-change")
    }, j = function () {
        var t, e, n, i, r, o;
        return e = function () {
            var t;
            return 400 <= (t = Q.status) && 600 > t
        }, o = function () {
            return Q.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
        }, i = function (t) {
            var e, n, i, r, o;
            for (r = t.head.childNodes, o = [], n = 0, i = r.length; i > n; n++)
                e = r[n], null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && o.push(e.getAttribute("src") || e.getAttribute("href"));
            return o
        }, t = function (t) {
            var e;
            return S || (S = i(document)), e = i(t), e.length !== S.length || r(e, S).length !== S.length
        }, r = function (t, e) {
            var n, i, r, o, a;
            for (t.length > e.length && (o = [e, t], t = o[0], e = o[1]), a = [], i = 0, r = t.length; r > i; i++)
                n = t[i], V.call(e, n) >= 0 && a.push(n);
            return a
        }, !e() && o() && (n = p(Q.responseText), n && !t(n)) ? n : void 0
    }, y = function (e) {
        var n;
        return n = e.querySelector("title"), [null != n ? n.textContent : void 0, R(e.body), t.get(e).token, "runScripts"]
    }, t = {
        get: function (t) {
            var e;
            return null == t && (t = document), { node: e = t.querySelector('meta[name="csrf-token"]'), token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0 }
        }, update: function (t) {
            var e;
            return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
        }
    }, r = function () {
        var t, e, n, i, r, o;
        e = function (t) {
            return (new DOMParser).parseFromString(t, "text/html")
        }, t = function (t) {
            var e;
            return e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, e
        }, n = function (t) {
            var e;
            return e = document.implementation.createHTMLDocument(""), e.open("replace"), e.write(t), e.close(), e
        };
        try {
            if (window.DOMParser)
                return r = e("<html><body><p>test"), e
        } catch (a) {
            return i = a, r = t("<html><body><p>test"), t
        } finally {
            if (1 !== (null != r && null != (o = r.body) ? o.childNodes.length : void 0))
                return n
        }
    }, n = function () {
        function t(e) {
            return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
        }
        return t.prototype.withoutHash = function () {
            return this.href.replace(this.hash, "")
        }, t.prototype.withoutHashForIE10compatibility = function () {
            return this.withoutHash()
        }, t.prototype.hasNoHash = function () {
            return 0 === this.hash.length
        }, t.prototype._parse = function () {
            var t;
            return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
        }, t
    }(), i = function (t) {
        function e(t) {
            return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, void e.__super__.constructor.apply(this, arguments))
        }
        return Z(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function () {
            var t, n, i, r;
            for (n = 1 <= arguments.length ? J.call(arguments, 0) : [], i = 0, r = n.length; r > i; i++)
                t = n[i], e.HTML_EXTENSIONS.push(t);
            return e.HTML_EXTENSIONS
        }, e.prototype.shouldIgnore = function () {
            return this._crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
        }, e.prototype._crossOrigin = function () {
            return this.origin !== (new n).origin
        }, e.prototype._anchored = function () {
            var t;
            return (this.hash && this.withoutHash()) === (t = new n).withoutHash() || this.href === t.href + "#"
        }, e.prototype._nonHtml = function () {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
        }, e.prototype._optOut = function () {
            var t, e;
            for (e = this.link; !t && e !== document;)
                t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
            return t
        }, e.prototype._target = function () {
            return 0 !== this.link.target.length
        }, e
    }(n), e = function () {
        function t(t) {
            this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (N() || U(this.link.href), this.event.preventDefault()))
        }
        return t.installHandlerLast = function (e) {
            return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
        }, t.handle = function (e) {
            return new t(e)
        }, t.prototype._extractLink = function () {
            var t;
            for (t = this.event.target; t.parentNode && "A" !== t.nodeName;)
                t = t.parentNode;
            return "A" === t.nodeName && 0 !== t.href.length ? this.link = new i(t) : void 0
        }, t.prototype._validForTurbolinks = function () {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
        }, t.prototype._nonStandardClick = function () {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
        }, t
    }(), u = function (t) {
        return setTimeout(t, 500)
    }, E = function () {
        return document.addEventListener("DOMContentLoaded", function () {
            return X("page:change"), X("page:update")
        }, !0)
    }, T = function () {
        return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function (t, e) {
            return jQuery.trim(e.responseText) ? X("page:update") : void 0
        }) : void 0
    }, _ = function (t) {
        var e, i;
        return (null != (i = t.state) ? i.turbolinks : void 0) ? (e = $[new n(t.state.url).absolute]) ? (c(), w(e)) : U(t.target.location.href) : void 0
    }, k = function () {
        return O(), M(), p = r(), document.addEventListener("click", e.installHandlerLast, !0), u(function () {
            return window.addEventListener("popstate", _, !1)
        })
    }, C = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), s = window.history && window.history.pushState && window.history.replaceState && C, o = !navigator.userAgent.match(/CriOS\//), q = "GET" === (G = D("request_method")) || "" === G, l = s && o && q, a = document.addEventListener && document.createEvent, a && (E(), T()), l ? (U = b, k()) : U = function (t) {
        return document.location.href = t
    }, this.Turbolinks = { visit: U, pagesCached: A, enableTransitionCache: g, allowLinkExtensions: i.allowExtensions, supported: l }
}.call(this), $(function () {
}), function () {
    var t, e, n, i, r, o, a, s, l, u, c, d, f, h, p, m, g, v, y, b, w, x, C, k, E, _, T, S, $, N, A, D, j, L, P, F, H, M, O, I, R, q, W, B, z, X, U, Q, G = [].slice, V = {}.hasOwnProperty, K = function (t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            V.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, Z = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++)
            if (e in this && this[e] === t)
                return e;
        return -1
    };
    for (b = { catchupTime: 500, initialRate: .03, minTime: 500, ghostTime: 500, maxProgressPerFrame: 10, easeFactor: 1.25, startOnPageLoad: !0, restartOnPushState: !0, restartOnRequestAfter: 500, target: "body", elements: { checkInterval: 100, selectors: ["body"] }, eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 }, ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] } }, S = function () {
        var t;
        return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
    }, N = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, y = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == N && (N = function (t) {
        return setTimeout(t, 50)
    }, y = function (t) {
        return clearTimeout(t)
    }), D = function (t) {
        var e, n;
        return e = S(), (n = function () {
            var i;
            return i = S() - e, i >= 33 ? (e = S(), t(i, function () {
                return N(n)
    })) : setTimeout(n, 33 - i)
    })()
    }, A = function () {
        var t, e, n;
        return n = arguments[0], e = arguments[1], t = 3 <= arguments.length ? G.call(arguments, 2) : [], "function" == typeof n[e] ? n[e].apply(n, t) : n[e]
    }, w = function () {
        var t, e, n, i, r, o, a;
        for (e = arguments[0], i = 2 <= arguments.length ? G.call(arguments, 1) : [], o = 0, a = i.length; a > o; o++)
            if (n = i[o])
                for (t in n)
                    V.call(n, t) && (r = n[t], null != e[t] && "object" == typeof e[t] && null != r && "object" == typeof r ? w(e[t], r) : e[t] = r);
        return e
    }, m = function (t) {
        var e, n, i, r, o;
        for (n = e = 0, r = 0, o = t.length; o > r; r++)
            i = t[r], n += Math.abs(i), e++;
        return n / e
    }, C = function (t, e) {
        var n, i, r;
        if (null == t && (t = "options"), null == e && (e = !0), r = document.querySelector("[data-pace-" + t + "]")) {
            if (n = r.getAttribute("data-pace-" + t), !e)
                return n;
            try {
                return JSON.parse(n)
    } catch (o) {
                return i = o, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", i) : void 0
    }
    }
    }, a = function () {
        function t() {
    }
        return t.prototype.on = function (t, e, n, i) {
            var r;
            return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (r = this.bindings)[t] && (r[t] = []), this.bindings[t].push({ handler: e, ctx: n, once: i })
    }, t.prototype.once = function (t, e, n) {
            return this.on(t, e, n, !0)
    }, t.prototype.off = function (t, e) {
            var n, i, r;
            if (null != (null != (i = this.bindings) ? i[t] : void 0)) {
                if (null == e)
                    return delete this.bindings[t];
                for (n = 0, r = []; n < this.bindings[t].length;)
                    r.push(this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : n++);
                return r
    }
    }, t.prototype.trigger = function () {
            var t, e, n, i, r, o, a, s, l;
            if (n = arguments[0], t = 2 <= arguments.length ? G.call(arguments, 1) : [], null != (a = this.bindings) ? a[n] : void 0) {
                for (r = 0, l = []; r < this.bindings[n].length;)
                    s = this.bindings[n][r], i = s.handler, e = s.ctx, o = s.once, i.apply(null != e ? e : this, t), l.push(o ? this.bindings[n].splice(r, 1) : r++);
                return l
    }
    }, t
    }(), null == window.Pace && (window.Pace = {}), w(Pace, a.prototype), $ = Pace.options = w({}, b, window.paceOptions, C()), X = ["ajax", "document", "eventLag", "elements"], q = 0, B = X.length; B > q; q++)
        F = X[q], $[F] === !0 && ($[F] = b[F]);
    l = function (t) {
        function e() {
            return U = e.__super__.constructor.apply(this, arguments)
        }
        return K(e, t), e
    }(Error), e = function () {
        function t() {
            this.progress = 0
        }
        return t.prototype.getElement = function () {
            var t;
            if (null == this.el) {
                if (t = document.querySelector($.target), !t)
                    throw new l;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
            }
            return this.el
        }, t.prototype.finish = function () {
            var t;
            return t = this.getElement(), t.className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, t.prototype.update = function (t) {
            return this.progress = t, this.render()
        }, t.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (t) {
                l = t
            }
            return this.el = void 0
        }, t.prototype.render = function () {
            var t, e;
            return null == document.querySelector($.target) ? !1 : (t = this.getElement(), t.children[0].style.width = "" + this.progress + "%", (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? e = "99" : (e = this.progress < 10 ? "0" : "", e += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + e)), this.lastRenderedProgress = this.progress)
        }, t.prototype.done = function () {
            return this.progress >= 100
        }, t
    }(), s = function () {
        function t() {
            this.bindings = {}
        }
        return t.prototype.trigger = function (t, e) {
            var n, i, r, o, a;
            if (null != this.bindings[t]) {
                for (o = this.bindings[t], a = [], i = 0, r = o.length; r > i; i++)
                    n = o[i], a.push(n.call(this, e));
                return a
            }
        }, t.prototype.on = function (t, e) {
            var n;
            return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e)
        }, t
    }(), R = window.XMLHttpRequest, I = window.XDomainRequest, O = window.WebSocket, x = function (t, e) {
        var n, i, r, o;
        o = [];
        for (i in e.prototype)
            try {
                r = e.prototype[i], o.push(null == t[i] && "function" != typeof r ? t[i] = r : void 0)
            } catch (a) {
                n = a
            }
        return o
    }, _ = [], Pace.ignore = function () {
        var t, e, n;
        return e = arguments[0], t = 2 <= arguments.length ? G.call(arguments, 1) : [], _.unshift("ignore"), n = e.apply(null, t), _.shift(), n
    }, Pace.track = function () {
        var t, e, n;
        return e = arguments[0], t = 2 <= arguments.length ? G.call(arguments, 1) : [], _.unshift("track"), n = e.apply(null, t), _.shift(), n
    }, P = function (t) {
        var e;
        if (null == t && (t = "GET"), "track" === _[0])
            return "force";
        if (!_.length && $.ajax) {
            if ("socket" === t && $.ajax.trackWebSockets)
                return !0;
            if (e = t.toUpperCase(), Z.call($.ajax.trackMethods, e) >= 0)
                return !0
        }
        return !1
    }, u = function (t) {
        function e() {
            var t, n = this;
            e.__super__.constructor.apply(this, arguments), t = function (t) {
                var e;
                return e = t.open, t.open = function (i, r) {
                    return P(i) && n.trigger("request", { type: i, url: r, request: t }), e.apply(t, arguments)
                }
            }, window.XMLHttpRequest = function (e) {
                var n;
                return n = new R(e), t(n), n
            }, x(window.XMLHttpRequest, R), null != I && (window.XDomainRequest = function () {
                var e;
                return e = new I, t(e), e
            }, x(window.XDomainRequest, I)), null != O && $.ajax.trackWebSockets && (window.WebSocket = function (t, e) {
                var i;
                return i = null != e ? new O(t, e) : new O(t), P("socket") && n.trigger("request", { type: "socket", url: t, protocols: e, request: i }), i
            }, x(window.WebSocket, O))
        }
        return K(e, t), e
    }(s), W = null, k = function () {
        return null == W && (W = new u), W
    }, L = function (t) {
        var e, n, i, r;
        for (r = $.ajax.ignoreURLs, n = 0, i = r.length; i > n; n++)
            if (e = r[n], "string" == typeof e) {
                if (-1 !== t.indexOf(e))
                    return !0
            } else if (e.test(t))
                return !0;
        return !1
    }, k().on("request", function (e) {
        var n, i, r, o, a;
        return o = e.type, r = e.request, a = e.url, L(a) ? void 0 : Pace.running || $.restartOnRequestAfter === !1 && "force" !== P(o) ? void 0 : (i = arguments, n = $.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function () {
            var e, n, a, s, l, u;
            if (e = "socket" === o ? r.readyState < 2 : 0 < (s = r.readyState) && 4 > s) {
                for (Pace.restart(), l = Pace.sources, u = [], n = 0, a = l.length; a > n; n++) {
                    if (F = l[n], F instanceof t) {
                        F.watch.apply(F, i);
                        break
                    }
                    u.push(void 0)
                }
                return u
            }
        }, n))
    }), t = function () {
        function t() {
            var t = this;
            this.elements = [], k().on("request", function () {
                return t.watch.apply(t, arguments)
            })
        }
        return t.prototype.watch = function (t) {
            var e, n, i, r;
            return i = t.type, e = t.request, r = t.url, L(r) ? void 0 : (n = "socket" === i ? new f(e) : new h(e), this.elements.push(n))
        }, t
    }(), h = function () {
        function t(t) {
            var e, n, i, r, o, a, s = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (n = null, t.addEventListener("progress", function (t) {
                    return s.progress = t.lengthComputable ? 100 * t.loaded / t.total : s.progress + (100 - s.progress) / 2
                }), a = ["load", "abort", "timeout", "error"], i = 0, r = a.length; r > i; i++)
                    e = a[i], t.addEventListener(e, function () {
                        return s.progress = 100
                    });
            else
                o = t.onreadystatechange, t.onreadystatechange = function () {
                    var e;
                    return 0 === (e = t.readyState) || 4 === e ? s.progress = 100 : 3 === t.readyState && (s.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
                }
        }
        return t
    }(), f = function () {
        function t(t) {
            var e, n, i, r, o = this;
            for (this.progress = 0, r = ["error", "open"], n = 0, i = r.length; i > n; n++)
                e = r[n], t.addEventListener(e, function () {
                    return o.progress = 100
                })
        }
        return t
    }(), i = function () {
        function t(t) {
            var e, n, i, o;
            for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), o = t.selectors, n = 0, i = o.length; i > n; n++)
                e = o[n], this.elements.push(new r(e))
        }
        return t
    }(), r = function () {
        function t(t) {
            this.selector = t, this.progress = 0, this.check()
        }
        return t.prototype.check = function () {
            var t = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return t.check()
            }, $.elements.checkInterval)
        }, t.prototype.done = function () {
            return this.progress = 100
        }, t
    }(), n = function () {
        function t() {
            var t, e, n = this;
            this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
                return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
            }
        }
        return t.prototype.states = { loading: 0, interactive: 50, complete: 100 }, t
    }(), o = function () {
        function t() {
            var t, e, n, i, r, o = this;
            this.progress = 0, t = 0, r = [], i = 0, n = S(), e = setInterval(function () {
                var a;
                return a = S() - n - 50, n = S(), r.push(a), r.length > $.eventLag.sampleCount && r.shift(), t = m(r), ++i >= $.eventLag.minSamples && t < $.eventLag.lagThreshold ? (o.progress = 100, clearInterval(e)) : o.progress = 100 * (3 / (t + 3))
            }, 50)
        }
        return t
    }(), d = function () {
        function t(t) {
            this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = $.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = A(this.source, "progress"))
        }
        return t.prototype.tick = function (t, e) {
            var n;
            return null == e && (e = A(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / $.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), n = 1 - Math.pow(this.progress / 100, $.easeFactor), this.progress += n * this.rate * t, this.progress = Math.min(this.lastProgress + $.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, t
    }(), H = null, j = null, g = null, M = null, p = null, v = null, Pace.running = !1, E = function () {
        return $.restartOnPushState ? Pace.restart() : void 0
    }, null != window.history.pushState && (z = window.history.pushState, window.history.pushState = function () {
        return E(), z.apply(window.history, arguments)
    }), null != window.history.replaceState && (Q = window.history.replaceState, window.history.replaceState = function () {
        return E(), Q.apply(window.history, arguments)
    }), c = { ajax: t, elements: i, document: n, eventLag: o }, (T = function () {
        var t, n, i, r, o, a, s, l;
        for (Pace.sources = H = [], a = ["ajax", "elements", "document", "eventLag"], n = 0, r = a.length; r > n; n++)
            t = a[n], $[t] !== !1 && H.push(new c[t]($[t]));
        for (l = null != (s = $.extraSources) ? s : [], i = 0, o = l.length; o > i; i++)
            F = l[i], H.push(new F($));
        return Pace.bar = g = new e, j = [], M = new d
    })(), Pace.stop = function () {
        return Pace.trigger("stop"), Pace.running = !1, g.destroy(), v = !0, null != p && ("function" == typeof y && y(p), p = null), T()
    }, Pace.restart = function () {
        return Pace.trigger("restart"), Pace.stop(), Pace.start()
    }, Pace.go = function () {
        var t;
        return Pace.running = !0, g.render(), t = S(), v = !1, p = D(function (e, n) {
            var i, r, o, a, s, l, u, c, f, h, p, m, y, b, w, x;
            for (c = 100 - g.progress, r = p = 0, o = !0, l = m = 0, b = H.length; b > m; l = ++m)
                for (F = H[l], h = null != j[l] ? j[l] : j[l] = [], s = null != (x = F.elements) ? x : [F], u = y = 0, w = s.length; w > y; u = ++y)
                    a = s[u], f = null != h[u] ? h[u] : h[u] = new d(a), o &= f.done, f.done || (r++, p += f.tick(e));
            return i = p / r, g.update(M.tick(e, i)), g.done() || o || v ? (g.update(100), Pace.trigger("done"), setTimeout(function () {
                return g.finish(), Pace.running = !1, Pace.trigger("hide")
            }, Math.max($.ghostTime, Math.max($.minTime - (S() - t), 0)))) : n()
        })
    }, Pace.start = function (t) {
        w($, t), Pace.running = !0;
        try {
            g.render()
        } catch (e) {
            l = e
        }
        return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50)
    }, "function" == typeof define && define.amd ? define(function () {
        return Pace
    }) : "object" == typeof exports ? module.exports = Pace : $.startOnPageLoad && Pace.start()
}.call(this), !function (t, e) {
    "use strict";
    var n, i = t.document;
    n = function () {
        var n, r, o, a, s, l, u, c, d, f, h, p, m, g = {}, v = {}, y = !1, b = { ENTER: 13, ESC: 27, SPACE: 32 }, w = [];
        return v = { buttons: { holder: '<nav class="alertify-buttons">{{buttons}}</nav>', submit: '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>', ok: '<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>', cancel: '<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>' }, input: '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>', message: '<p class="alertify-message">{{message}}</p>', log: '<article class="alertify-log{{class}}">{{message}}</article>' }, m = function () {
            var t, n, r = !1, o = i.createElement("fakeelement"), a = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" };
            for (t in a)
                if (o.style[t] !== e) {
                    n = a[t], r = !0;
                    break
                }
            return { type: n, supported: r }
        }, n = function (t) {
            return i.getElementById(t)
        }, g = {
            labels: { ok: "OK", cancel: "Cancel" }, delay: 5e3, buttonReverse: !1, buttonFocus: "ok", transition: e, addListeners: function (t) {
                var e, n, l, u, c, d = "undefined" != typeof o, f = "undefined" != typeof r, h = "undefined" != typeof p, m = "", g = this;
                e = function (e) {
                    return "undefined" != typeof e.preventDefault && e.preventDefault(), l(e), "undefined" != typeof p && (m = p.value), "function" == typeof t && ("undefined" != typeof p ? t(!0, m) : t(!0)), !1
                }, n = function (e) {
                    return "undefined" != typeof e.preventDefault && e.preventDefault(), l(e), "function" == typeof t && t(!1), !1
                }, l = function () {
                    g.hide(), g.unbind(i.body, "keyup", u), g.unbind(a, "focus", c), d && g.unbind(o, "click", e), f && g.unbind(r, "click", n)
                }, u = function (t) {
                    var i = t.keyCode;
                    (i === b.SPACE && !h || h && i === b.ENTER) && e(t), i === b.ESC && f && n(t)
                }, c = function () {
                    h ? p.focus() : !f || g.buttonReverse ? o.focus() : r.focus()
                }, this.bind(a, "focus", c), this.bind(s, "focus", c), d && this.bind(o, "click", e), f && this.bind(r, "click", n), this.bind(i.body, "keyup", u), this.transition.supported || this.setFocus()
            }, bind: function (t, e, n) {
                "function" == typeof t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, n)
            }, handleErrors: function () {
                if ("undefined" != typeof t.onerror) {
                    var e = this;
                    return t.onerror = function (t, n, i) {
                        e.error("[" + t + " on line " + i + " of " + n + "]", 0)
                    }, !0
                }
                return !1
            }, appendButtons: function (t, e) {
                return this.buttonReverse ? e + t : t + e
            }, build: function (t) {
                var e = "", n = t.type, i = t.message, r = t.cssClass || "";
                switch (e += '<div class="alertify-dialog">', e += '<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>', "none" === g.buttonFocus && (e += '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'), "prompt" === n && (e += '<div id="alertify-form">'), e += '<article class="alertify-inner">', e += v.message.replace("{{message}}", i), "prompt" === n && (e += v.input), e += v.buttons.holder, e += "</article>", "prompt" === n && (e += "</div>"), e += '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>', e += "</div>", n) {
                    case "confirm":
                        e = e.replace("{{buttons}}", this.appendButtons(v.buttons.cancel, v.buttons.ok)), e = e.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case "prompt":
                        e = e.replace("{{buttons}}", this.appendButtons(v.buttons.cancel, v.buttons.submit)), e = e.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case "alert":
                        e = e.replace("{{buttons}}", v.buttons.ok), e = e.replace("{{ok}}", this.labels.ok)
                }
                return d.className = "alertify alertify-" + n + " " + r, c.className = "alertify-cover", e
            }, close: function (t, e) {
                var n, i, r = e && !isNaN(e) ? +e : this.delay, o = this;
                this.bind(t, "click", function () {
                    n(t)
                }), i = function (t) {
                    t.stopPropagation(), o.unbind(this, o.transition.type, i), f.removeChild(this), f.hasChildNodes() || (f.className += " alertify-logs-hidden")
                }, n = function (t) {
                    "undefined" != typeof t && t.parentNode === f && (o.transition.supported ? (o.bind(t, o.transition.type, i), t.className += " alertify-log-hide") : (f.removeChild(t), f.hasChildNodes() || (f.className += " alertify-logs-hidden")))
                }, 0 !== e && setTimeout(function () {
                    n(t)
                }, r)
            }, dialog: function (t, e, n, r, o) {
                u = i.activeElement;
                var a = function () {
                    f && null !== f.scrollTop && c && null !== c.scrollTop || a()
                };
                if ("string" != typeof t)
                    throw new Error("message must be a string");
                if ("string" != typeof e)
                    throw new Error("type must be a string");
                if ("undefined" != typeof n && "function" != typeof n)
                    throw new Error("fn must be a function");
                return this.init(), a(), w.push({ type: e, message: t, callback: n, placeholder: r, cssClass: o }), y || this.setup(), this
            }, extend: function (t) {
                if ("string" != typeof t)
                    throw new Error("extend method must have exactly one paramter");
                return function (e, n) {
                    return this.log(e, t, n), this
                }
            }, hide: function () {
                var t, e = this;
                w.splice(0, 1), w.length > 0 ? this.setup(!0) : (y = !1, t = function (n) {
                    n.stopPropagation(), e.unbind(d, e.transition.type, t)
                }, this.transition.supported ? (this.bind(d, this.transition.type, t), d.className = "alertify alertify-hide alertify-hidden") : d.className = "alertify alertify-hide alertify-hidden alertify-isHidden", c.className = "alertify-cover alertify-cover-hidden", u.focus())
            }, init: function () {
                i.createElement("nav"), i.createElement("article"), i.createElement("section"), null == n("alertify-cover") && (c = i.createElement("div"), c.setAttribute("id", "alertify-cover"), c.className = "alertify-cover alertify-cover-hidden", i.body.appendChild(c)), null == n("alertify") && (y = !1, w = [], d = i.createElement("section"), d.setAttribute("id", "alertify"), d.className = "alertify alertify-hidden", i.body.appendChild(d)), null == n("alertify-logs") && (f = i.createElement("section"), f.setAttribute("id", "alertify-logs"), f.className = "alertify-logs alertify-logs-hidden", i.body.appendChild(f)), i.body.setAttribute("tabindex", "0"), this.transition = m()
            }, log: function (t, e, n) {
                var i = function () {
                    f && null !== f.scrollTop || i()
                };
                return this.init(), i(), f.className = "alertify-logs", this.notify(t, e, n), this
            }, notify: function (t, e, n) {
                var r = i.createElement("article");
                r.className = "alertify-log" + ("string" == typeof e && "" !== e ? " alertify-log-" + e : ""), r.innerHTML = t, f.appendChild(r), setTimeout(function () {
                    r.className = r.className + " alertify-log-show"
                }, 50), this.close(r, n)
            }, set: function (t) {
                var e;
                if ("object" != typeof t && t instanceof Array)
                    throw new Error("args must be an object");
                for (e in t)
                    t.hasOwnProperty(e) && (this[e] = t[e])
            }, setFocus: function () {
                p ? (p.focus(), p.select()) : l.focus()
            }, setup: function (t) {
                var i, u = w[0], c = this;
                y = !0, i = function (t) {
                    t.stopPropagation(), c.setFocus(), c.unbind(d, c.transition.type, i)
                }, this.transition.supported && !t && this.bind(d, this.transition.type, i), d.innerHTML = this.build(u), a = n("alertify-resetFocus"), s = n("alertify-resetFocusBack"), o = n("alertify-ok") || e, r = n("alertify-cancel") || e, l = "cancel" === g.buttonFocus ? r : "none" === g.buttonFocus ? n("alertify-noneFocus") : o, p = n("alertify-text") || e, h = n("alertify-form") || e, "string" == typeof u.placeholder && "" !== u.placeholder && (p.value = u.placeholder), t && this.setFocus(), this.addListeners(u.callback)
            }, unbind: function (t, e, n) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && t.detachEvent("on" + e, n)
            }
        }, {
            alert: function (t, e, n) {
                return g.dialog(t, "alert", e, "", n), this
            }, confirm: function (t, e, n) {
                return g.dialog(t, "confirm", e, "", n), this
            }, extend: g.extend, init: g.init, log: function (t, e, n) {
                return g.log(t, e, n), this
            }, prompt: function (t, e, n, i) {
                return g.dialog(t, "prompt", e, n, i), this
            }, success: function (t, e) {
                return g.log(t, "success", e), this
            }, error: function (t, e) {
                return g.log(t, "error", e), this
            }, set: function (t) {
                g.set(t)
            }, labels: g.labels, debug: g.handleErrors
        }
    }, "function" == typeof define ? define([], function () {
        return new n
    }) : "undefined" == typeof t.alertify && (t.alertify = new n)
}(this), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t, e) {
    var n = 0, i = Array.prototype.slice, r = t.cleanData;
    t.cleanData = function (e) {
        for (var n, i = 0; null != (n = e[i]) ; i++)
            try {
                t(n).triggerHandler("remove")
            } catch (o) {
            }
        r(e)
    }, t.widget = function (e, n, i) {
        var r, o, a, s, l = {}, u = e.split(".")[0];
        e = e.split(".")[1], r = u + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][r.toLowerCase()] = function (e) {
            return !!t.data(e, r)
        }, t[u] = t[u] || {}, o = t[u][e], a = t[u][e] = function (t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new a(t, e)
        }, t.extend(a, o, { version: i.version, _proto: t.extend({}, i), _childConstructors: [] }), s = new n, s.options = t.widget.extend({}, s.options), t.each(i, function (e, i) {
            return t.isFunction(i) ? void (l[e] = function () {
                var t = function () {
                    return n.prototype[e].apply(this, arguments)
                }, r = function (t) {
                    return n.prototype[e].apply(this, t)
                };
                return function () {
                    var e, n = this._super, o = this._superApply;
                    return this._super = t, this._superApply = r, e = i.apply(this, arguments), this._super = n, this._superApply = o, e
                }
            }()) : void (l[e] = i)
        }), a.prototype = t.widget.extend(s, { widgetEventPrefix: o ? s.widgetEventPrefix : e }, l, { constructor: a, namespace: u, widgetName: e, widgetFullName: r }), o ? (t.each(o._childConstructors, function (e, n) {
            var i = n.prototype;
            t.widget(i.namespace + "." + i.widgetName, a, n._proto)
        }), delete o._childConstructors) : n._childConstructors.push(a), t.widget.bridge(e, a)
    }, t.widget.extend = function (n) {
        for (var r, o, a = i.call(arguments, 1), s = 0, l = a.length; l > s; s++)
            for (r in a[s])
                o = a[s][r], a[s].hasOwnProperty(r) && o !== e && (n[r] = t.isPlainObject(o) ? t.isPlainObject(n[r]) ? t.widget.extend({}, n[r], o) : t.widget.extend({}, o) : o);
        return n
    }, t.widget.bridge = function (n, r) {
        var o = r.prototype.widgetFullName || n;
        t.fn[n] = function (a) {
            var s = "string" == typeof a, l = i.call(arguments, 1), u = this;
            return a = !s && l.length ? t.widget.extend.apply(null, [a].concat(l)) : a, this.each(s ? function () {
                var i, r = t.data(this, o);
                return r ? t.isFunction(r[a]) && "_" !== a.charAt(0) ? (i = r[a].apply(r, l), i !== r && i !== e ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + a + "' for " + n + " widget instance") : t.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + a + "'")
            } : function () {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new r(a, this))
            }), u
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        }, _getCreateOptions: t.noop, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        }, _destroy: t.noop, widget: function () {
            return this.element
        }, option: function (n, i) {
            var r, o, a, s = n;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof n)
                if (s = {}, r = n.split("."), n = r.shift(), r.length) {
                    for (o = s[n] = t.widget.extend({}, this.options[n]), a = 0; a < r.length - 1; a++)
                        o[r[a]] = o[r[a]] || {}, o = o[r[a]];
                    if (n = r.pop(), i === e)
                        return o[n] === e ? null : o[n];
                    o[n] = i
                } else {
                    if (i === e)
                        return this.options[n] === e ? null : this.options[n];
                    s[n] = i
                }
            return this._setOptions(s), this
        }, _setOptions: function (t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        }, _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        }, enable: function () {
            return this._setOption("disabled", !1)
        }, disable: function () {
            return this._setOption("disabled", !0)
        }, _on: function (e, n, i) {
            var r, o = this;
            "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = r = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), t.each(i, function (i, a) {
                function s() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || t.guid++);
                var l = i.match(/^(\w+)\s*(.*)$/), u = l[1] + o.eventNamespace, c = l[2];
                c ? r.delegate(c, u, s) : n.bind(u, s)
            })
        }, _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        }, _delay: function (t, e) {
            function n() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, e || 0)
        }, _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        }, _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                }, focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        }, _trigger: function (e, n, i) {
            var r, o, a = this.options[e];
            if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                for (r in o)
                    r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(t.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, n) {
        t.Widget.prototype["_" + e] = function (i, r, o) {
            "string" == typeof r && (r = { effect: r });
            var a, s = r ? r === !0 || "number" == typeof r ? n : r.effect || n : e;
            r = r || {}, "number" == typeof r && (r = { duration: r }), a = !t.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), a && t.effects && t.effects.effect[s] ? i[e](r) : s !== e && i[s] ? i[s](r.duration, r.easing, o) : i.queue(function (n) {
                t(this)[e](), o && o.call(i[0]), n()
            })
        }
    })
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(window.jQuery)
}(function (t) {
    "use strict";
    var e = 0;
    t.ajaxTransport("iframe", function (n) {
        if (n.async) {
            var i, r, o;
            return {
                send: function (a, s) {
                    i = t('<form style="display:none;"></form>'), i.attr("accept-charset", n.formAcceptCharset), o = /\?/.test(n.url) ? "&" : "?", "DELETE" === n.type ? (n.url = n.url + o + "_method=DELETE", n.type = "POST") : "PUT" === n.type ? (n.url = n.url + o + "_method=PUT", n.type = "POST") : "PATCH" === n.type && (n.url = n.url + o + "_method=PATCH", n.type = "POST"), r = t('<iframe src="javascript:false;" name="iframe-transport-' + (e += 1) + '"></iframe>').bind("load", function () {
                        var e, o = t.isArray(n.paramName) ? n.paramName : [n.paramName];
                        r.unbind("load").bind("load", function () {
                            var e;
                            try {
                                if (e = r.contents(), !e.length || !e[0].firstChild)
                                    throw new Error
                            } catch (n) {
                                e = void 0
                            }
                            s(200, "success", { iframe: e }), t('<iframe src="javascript:false;"></iframe>').appendTo(i), i.remove()
                        }), i.prop("target", r.prop("name")).prop("action", n.url).prop("method", n.type), n.formData && t.each(n.formData, function (e, n) {
                            t('<input type="hidden"/>').prop("name", n.name).val(n.value).appendTo(i)
                        }), n.fileInput && n.fileInput.length && "POST" === n.type && (e = n.fileInput.clone(), n.fileInput.after(function (t) {
                            return e[t]
                        }), n.paramName && n.fileInput.each(function (e) {
                            t(this).prop("name", o[e] || n.paramName)
                        }), i.append(n.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")), i.submit(), e && e.length && n.fileInput.each(function (n, i) {
                            var r = t(e[n]);
                            t(i).prop("name", r.prop("name")), r.replaceWith(i)
                        })
                    }), i.append(r).appendTo(document.body)
                }, abort: function () {
                    r && r.unbind("load").prop("src", "javascript".concat(":false;")), i && i.remove()
                }
            }
        }
    }), t.ajaxSetup({
        converters: {
            "iframe text": function (e) {
                return e && t(e[0].body).text()
            }, "iframe json": function (e) {
                return e && t.parseJSON(t(e[0].body).text())
            }, "iframe html": function (e) {
                return e && t(e[0].body).html()
            }, "iframe script": function (e) {
                return e && t.globalEval(t(e[0].body).text())
            }
        }
    })
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], t) : t(window.jQuery)
}(function (t) {
    "use strict";
    t.support.xhrFileUpload = !(!window.XMLHttpRequestUpload || !window.FileReader), t.support.xhrFormDataFileUpload = !!window.FormData, t.propHooks.elements = {
        get: function (e) {
            return t.nodeName(e, "form") ? t.grep(e.elements, function (e) {
                return !t.nodeName(e, "input") || "file" !== e.type
            }) : null
        }
    }, t.widget("blueimp.fileupload", {
        options: {
            dropZone: t(document), pasteZone: t(document), fileInput: void 0, replaceFileInput: !0, paramName: void 0, singleFileUploads: !0, limitMultiFileUploads: void 0, sequentialUploads: !1, limitConcurrentUploads: void 0, forceIframeTransport: !1, redirect: void 0, redirectParamName: void 0, postMessage: void 0, multipart: !0, maxChunkSize: void 0, uploadedBytes: void 0, recalculateProgress: !0, progressInterval: 100, bitrateInterval: 500, formData: function (t) {
                return t.serializeArray()
            }, add: function (t, e) {
                e.submit()
            }, processData: !1, contentType: !1, cache: !1
        }, _refreshOptionsList: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"], _BitrateTimer: function () {
            this.timestamp = +new Date, this.loaded = 0, this.bitrate = 0, this.getBitrate = function (t, e, n) {
                var i = t - this.timestamp;
                return (!this.bitrate || !n || i > n) && (this.bitrate = (e - this.loaded) * (1e3 / i) * 8, this.loaded = e, this.timestamp = t), this.bitrate
            }
        }, _isXHRUpload: function (e) {
            return !e.forceIframeTransport && (!e.multipart && t.support.xhrFileUpload || t.support.xhrFormDataFileUpload)
        }, _getFormData: function (e) {
            var n;
            return "function" == typeof e.formData ? e.formData(e.form) : t.isArray(e.formData) ? e.formData : e.formData ? (n = [], t.each(e.formData, function (t, e) {
                n.push({ name: t, value: e })
            }), n) : []
        }, _getTotal: function (e) {
            var n = 0;
            return t.each(e, function (t, e) {
                n += e.size || 1
            }), n
        }, _onProgress: function (t, e) {
            if (t.lengthComputable) {
                var n, i, r = +new Date;
                if (e._time && e.progressInterval && r - e._time < e.progressInterval && t.loaded !== t.total)
                    return;
                e._time = r, n = e.total || this._getTotal(e.files), i = parseInt(t.loaded / t.total * (e.chunkSize || n), 10) + (e.uploadedBytes || 0), this._loaded += i - (e.loaded || e.uploadedBytes || 0), e.lengthComputable = !0, e.loaded = i, e.total = n, e.bitrate = e._bitrateTimer.getBitrate(r, i, e.bitrateInterval), this._trigger("progress", t, e), this._trigger("progressall", t, { lengthComputable: !0, loaded: this._loaded, total: this._total, bitrate: this._bitrateTimer.getBitrate(r, this._loaded, e.bitrateInterval) })
            }
        }, _initProgressListener: function (e) {
            var n = this, i = e.xhr ? e.xhr() : t.ajaxSettings.xhr();
            i.upload && (t(i.upload).bind("progress", function (t) {
                var i = t.originalEvent;
                t.lengthComputable = i.lengthComputable, t.loaded = i.loaded, t.total = i.total, n._onProgress(t, e)
            }), e.xhr = function () {
                return i
            })
        }, _initXHRData: function (e) {
            var n, i = e.files[0], r = e.multipart || !t.support.xhrFileUpload, o = e.paramName[0];
            e.headers = e.headers || {}, e.contentRange && (e.headers["Content-Range"] = e.contentRange), r ? t.support.xhrFormDataFileUpload && (e.postMessage ? (n = this._getFormData(e), e.blob ? n.push({ name: o, value: e.blob }) : t.each(e.files, function (t, i) {
                n.push({ name: e.paramName[t] || o, value: i })
            })) : (e.formData instanceof FormData ? n = e.formData : (n = new FormData, t.each(this._getFormData(e), function (t, e) {
                n.append(e.name, e.value)
            })), e.blob ? (e.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(i.name) + '"', n.append(o, e.blob, i.name)) : t.each(e.files, function (t, i) {
                (window.Blob && i instanceof Blob || window.File && i instanceof File) && n.append(e.paramName[t] || o, i, i.name)
            })), e.data = n) : (e.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(i.name) + '"', e.contentType = i.type, e.data = e.blob || i), e.blob = null
        }, _initIframeSettings: function (e) {
            e.dataType = "iframe " + (e.dataType || ""), e.formData = this._getFormData(e), e.redirect && t("<a></a>").prop("href", e.url).prop("host") !== location.host && e.formData.push({ name: e.redirectParamName || "redirect", value: e.redirect })
        }, _initDataSettings: function (t) {
            this._isXHRUpload(t) ? (this._chunkedUpload(t, !0) || (t.data || this._initXHRData(t), this._initProgressListener(t)), t.postMessage && (t.dataType = "postmessage " + (t.dataType || ""))) : this._initIframeSettings(t, "iframe")
        }, _getParamName: function (e) {
            var n = t(e.fileInput), i = e.paramName;
            return i ? t.isArray(i) || (i = [i]) : (i = [], n.each(function () {
                for (var e = t(this), n = e.prop("name") || "files[]", r = (e.prop("files") || [1]).length; r;)
                    i.push(n), r -= 1
            }), i.length || (i = [n.prop("name") || "files[]"])), i
        }, _initFormSettings: function (e) {
            e.form && e.form.length || (e.form = t(e.fileInput.prop("form")), e.form.length || (e.form = t(this.options.fileInput.prop("form")))), e.paramName = this._getParamName(e), e.url || (e.url = e.form.prop("action") || location.href), e.type = (e.type || e.form.prop("method") || "").toUpperCase(), "POST" !== e.type && "PUT" !== e.type && "PATCH" !== e.type && (e.type = "POST"), e.formAcceptCharset || (e.formAcceptCharset = e.form.attr("accept-charset"))
        }, _getAJAXSettings: function (e) {
            var n = t.extend({}, this.options, e);
            return this._initFormSettings(n), this._initDataSettings(n), n
        }, _enhancePromise: function (t) {
            return t.success = t.done, t.error = t.fail, t.complete = t.always, t
        }, _getXHRPromise: function (e, n, i) {
            var r = t.Deferred(), o = r.promise();
            return n = n || this.options.context || o, e === !0 ? r.resolveWith(n, i) : e === !1 && r.rejectWith(n, i), o.abort = r.promise, this._enhancePromise(o)
        }, _getUploadedBytes: function (t) {
            var e = t.getResponseHeader("Range"), n = e && e.split("-"), i = n && n.length > 1 && parseInt(n[1], 10);
            return i && i + 1
        }, _chunkedUpload: function (e, n) {
            var i, r, o = this, a = e.files[0], s = a.size, l = e.uploadedBytes = e.uploadedBytes || 0, u = e.maxChunkSize || s, c = a.slice || a.webkitSlice || a.mozSlice, d = t.Deferred(), f = d.promise();
            return this._isXHRUpload(e) && c && (l || s > u) && !e.data ? n ? !0 : l >= s ? (a.error = "Uploaded bytes exceed file size", this._getXHRPromise(!1, e.context, [null, "error", a.error])) : (r = function () {
                var n = t.extend({}, e);
                n.blob = c.call(a, l, l + u, a.type), n.chunkSize = n.blob.size, n.contentRange = "bytes " + l + "-" + (l + n.chunkSize - 1) + "/" + s, o._initXHRData(n), o._initProgressListener(n), i = (o._trigger("chunksend", null, n) !== !1 && t.ajax(n) || o._getXHRPromise(!1, n.context)).done(function (i, a, u) {
                    l = o._getUploadedBytes(u) || l + n.chunkSize, (!n.loaded || n.loaded < n.total) && o._onProgress(t.Event("progress", { lengthComputable: !0, loaded: l - n.uploadedBytes, total: l - n.uploadedBytes }), n), e.uploadedBytes = n.uploadedBytes = l, n.result = i, n.textStatus = a, n.jqXHR = u, o._trigger("chunkdone", null, n), o._trigger("chunkalways", null, n), s > l ? r() : d.resolveWith(n.context, [i, a, u])
                }).fail(function (t, e, i) {
                    n.jqXHR = t, n.textStatus = e, n.errorThrown = i, o._trigger("chunkfail", null, n), o._trigger("chunkalways", null, n), d.rejectWith(n.context, [t, e, i])
                })
            }, this._enhancePromise(f), f.abort = function () {
                return i.abort()
            }, r(), f) : !1
        }, _beforeSend: function (t, e) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer), this._active += 1, this._loaded += e.uploadedBytes || 0, this._total += this._getTotal(e.files)
        }, _onDone: function (e, n, i, r) {
            if (!this._isXHRUpload(r) || !r.loaded || r.loaded < r.total) {
                var o = this._getTotal(r.files) || 1;
                this._onProgress(t.Event("progress", { lengthComputable: !0, loaded: o, total: o }), r)
            }
            r.result = e, r.textStatus = n, r.jqXHR = i, this._trigger("done", null, r)
        }, _onFail: function (t, e, n, i) {
            i.jqXHR = t, i.textStatus = e, i.errorThrown = n, this._trigger("fail", null, i), i.recalculateProgress && (this._loaded -= i.loaded || i.uploadedBytes || 0, this._total -= i.total || this._getTotal(i.files))
        }, _onAlways: function (t, e, n, i) {
            this._active -= 1, this._trigger("always", null, i), 0 === this._active && (this._trigger("stop"), this._loaded = this._total = 0, this._bitrateTimer = null)
        }, _onSend: function (e, n) {
            var i, r, o, a, s = this, l = s._getAJAXSettings(n), u = function () {
                return s._sending += 1, l._bitrateTimer = new s._BitrateTimer, i = i || ((r || s._trigger("send", e, l) === !1) && s._getXHRPromise(!1, l.context, r) || s._chunkedUpload(l) || t.ajax(l)).done(function (t, e, n) {
                    s._onDone(t, e, n, l)
                }).fail(function (t, e, n) {
                    s._onFail(t, e, n, l)
                }).always(function (t, e, n) {
                    if (s._sending -= 1, s._onAlways(t, e, n, l), l.limitConcurrentUploads && l.limitConcurrentUploads > s._sending)
                        for (var i, r = s._slots.shift() ; r;) {
                            if (i = r.state ? "pending" === r.state() : !r.isRejected()) {
                                r.resolve();
                                break
                            }
                            r = s._slots.shift()
                        }
                })
            };
            return this._beforeSend(e, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (o = t.Deferred(), this._slots.push(o), a = o.pipe(u)) : a = this._sequence = this._sequence.pipe(u, u), a.abort = function () {
                return r = [void 0, "abort", "abort"], i ? i.abort() : (o && o.rejectWith(l.context, r), u())
            }, this._enhancePromise(a)) : u()
        }, _onAdd: function (e, n) {
            var i, r, o, a, s = this, l = !0, u = t.extend({}, this.options, n), c = u.limitMultiFileUploads, d = this._getParamName(u);
            if ((u.singleFileUploads || c) && this._isXHRUpload(u))
                if (!u.singleFileUploads && c)
                    for (o = [], i = [], a = 0; a < n.files.length; a += c)
                        o.push(n.files.slice(a, a + c)), r = d.slice(a, a + c), r.length || (r = d), i.push(r);
                else
                    i = d;
            else
                o = [n.files], i = [d];
            return n.originalFiles = n.files, t.each(o || n.files, function (r, a) {
                var u = t.extend({}, n);
                return u.files = o ? a : [a], u.paramName = i[r], u.submit = function () {
                    return u.jqXHR = this.jqXHR = s._trigger("submit", e, this) !== !1 && s._onSend(e, this), this.jqXHR
                }, l = s._trigger("add", e, u)
            }), l
        }, _replaceFileInput: function (e) {
            var n = e.clone(!0);
            t("<form></form>").append(n)[0].reset(), e.after(n).detach(), t.cleanData(e.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function (t, i) {
                return i === e[0] ? n[0] : i
            }), e[0] === this.element[0] && (this.element = n)
        }, _handleFileTreeEntry: function (e, n) {
            var i, r = this, o = t.Deferred(), a = function (t) {
                t && !t.entry && (t.entry = e), o.resolve([t])
            };
            return n = n || "", e.isFile ? e._file ? (e._file.relativePath = n, o.resolve(e._file)) : e.file(function (t) {
                t.relativePath = n, o.resolve(t)
            }, a) : e.isDirectory ? (i = e.createReader(), i.readEntries(function (t) {
                r._handleFileTreeEntries(t, n + e.name + "/").done(function (t) {
                    o.resolve(t)
                }).fail(a)
            }, a)) : o.resolve([]), o.promise()
        }, _handleFileTreeEntries: function (e, n) {
            var i = this;
            return t.when.apply(t, t.map(e, function (t) {
                return i._handleFileTreeEntry(t, n)
            })).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            })
        }, _getDroppedFiles: function (e) {
            e = e || {};
            var n = e.items;
            return n && n.length && (n[0].webkitGetAsEntry || n[0].getAsEntry) ? this._handleFileTreeEntries(t.map(n, function (t) {
                var e;
                return t.webkitGetAsEntry ? (e = t.webkitGetAsEntry(), e && (e._file = t.getAsFile()), e) : t.getAsEntry()
            })) : t.Deferred().resolve(t.makeArray(e.files)).promise()
        }, _getSingleFileInputFiles: function (e) {
            e = t(e);
            var n, i, r = e.prop("webkitEntries") || e.prop("entries");
            if (r && r.length)
                return this._handleFileTreeEntries(r);
            if (n = t.makeArray(e.prop("files")), n.length)
                void 0 === n[0].name && n[0].fileName && t.each(n, function (t, e) {
                    e.name = e.fileName, e.size = e.fileSize
                });
            else {
                if (i = e.prop("value"), !i)
                    return t.Deferred().resolve([]).promise();
                n = [{ name: i.replace(/^.*\\/, "") }]
            }
            return t.Deferred().resolve(n).promise()
        }, _getFileInputFiles: function (e) {
            return e instanceof t && 1 !== e.length ? t.when.apply(t, t.map(e, this._getSingleFileInputFiles)).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(e)
        }, _onChange: function (e) {
            var n = this, i = { fileInput: t(e.target), form: t(e.target.form) };
            this._getFileInputFiles(i.fileInput).always(function (t) {
                i.files = t, n.options.replaceFileInput && n._replaceFileInput(i.fileInput), n._trigger("change", e, i) !== !1 && n._onAdd(e, i)
            })
        }, _onPaste: function (e) {
            var n = e.originalEvent.clipboardData, i = n && n.items || [], r = { files: [] };
            return t.each(i, function (t, e) {
                var n = e.getAsFile && e.getAsFile();
                n && r.files.push(n)
            }), this._trigger("paste", e, r) === !1 || this._onAdd(e, r) === !1 ? !1 : void 0
        }, _onDrop: function (t) {
            var e = this, n = t.dataTransfer = t.originalEvent.dataTransfer, i = {};
            n && n.files && n.files.length && t.preventDefault(), this._getDroppedFiles(n).always(function (n) {
                i.files = n, e._trigger("drop", t, i) !== !1 && e._onAdd(t, i)
            })
        }, _onDragOver: function (e) {
            var n = e.dataTransfer = e.originalEvent.dataTransfer;
            return this._trigger("dragover", e) === !1 ? !1 : void (n && -1 !== t.inArray("Files", n.types) && (n.dropEffect = "copy", e.preventDefault()))
        }, _initEventHandlers: function () {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, { dragover: this._onDragOver, drop: this._onDrop }), this._on(this.options.pasteZone, { paste: this._onPaste })), this._on(this.options.fileInput, { change: this._onChange })
        }, _destroyEventHandlers: function () {
            this._off(this.options.dropZone, "dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
        }, _setOption: function (e, n) {
            var i = -1 !== t.inArray(e, this._refreshOptionsList);
            i && this._destroyEventHandlers(), this._super(e, n), i && (this._initSpecialOptions(), this._initEventHandlers())
        }, _initSpecialOptions: function () {
            var e = this.options;
            void 0 === e.fileInput ? e.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : e.fileInput instanceof t || (e.fileInput = t(e.fileInput)), e.dropZone instanceof t || (e.dropZone = t(e.dropZone)), e.pasteZone instanceof t || (e.pasteZone = t(e.pasteZone))
        }, _create: function () {
            var e = this.options;
            t.extend(e, t(this.element[0].cloneNode(!1)).data()), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = this._loaded = this._total = 0, this._initEventHandlers()
        }, _destroy: function () {
            this._destroyEventHandlers()
        }, add: function (e) {
            var n = this;
            e && !this.options.disabled && (e.fileInput && !e.files ? this._getFileInputFiles(e.fileInput).always(function (t) {
                e.files = t, n._onAdd(null, e)
            }) : (e.files = t.makeArray(e.files), this._onAdd(null, e)))
        }, send: function (e) {
            if (e && !this.options.disabled) {
                if (e.fileInput && !e.files) {
                    var n, i, r = this, o = t.Deferred(), a = o.promise();
                    return a.abort = function () {
                        return i = !0, n ? n.abort() : (o.reject(null, "abort", "abort"), a)
                    }, this._getFileInputFiles(e.fileInput).always(function (t) {
                        i || (e.files = t, n = r._onSend(null, e).then(function (t, e, n) {
                            o.resolve(t, e, n)
                        }, function (t, e, n) {
                            o.reject(t, e, n)
                        }))
                    }), this._enhancePromise(a)
                }
                if (e.files = t.makeArray(e.files), e.files.length)
                    return this._onSend(null, e)
            }
            return this._getXHRPromise(!1, e && e.context)
        }
    })
}), function () {
    var t = this, e = t._, n = Array.prototype, i = Object.prototype, r = Function.prototype, o = n.push, a = n.slice, s = n.concat, l = i.toString, u = i.hasOwnProperty, c = Array.isArray, d = Object.keys, f = r.bind, h = function (t) {
        return t instanceof h ? t : this instanceof h ? void (this._wrapped = t) : new h(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : t._ = h, h.VERSION = "1.7.0";
    var p = function (t, e, n) {
        if (void 0 === e)
            return t;
        switch (null == n ? 3 : n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return t.call(e, n, i, r)
                };
            case 4:
                return function (n, i, r, o) {
                    return t.call(e, n, i, r, o)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    };
    h.iteratee = function (t, e, n) {
        return null == t ? h.identity : h.isFunction(t) ? p(t, e, n) : h.isObject(t) ? h.matches(t) : h.property(t)
    }, h.each = h.forEach = function (t, e, n) {
        if (null == t)
            return t;
        e = p(e, n);
        var i, r = t.length;
        if (r === +r)
            for (i = 0; r > i; i++)
                e(t[i], i, t);
        else {
            var o = h.keys(t);
            for (i = 0, r = o.length; r > i; i++)
                e(t[o[i]], o[i], t)
        }
        return t
    }, h.map = h.collect = function (t, e, n) {
        if (null == t)
            return [];
        e = h.iteratee(e, n);
        for (var i, r = t.length !== +t.length && h.keys(t), o = (r || t).length, a = Array(o), s = 0; o > s; s++)
            i = r ? r[s] : s, a[s] = e(t[i], i, t);
        return a
    };
    var m = "Reduce of empty array with no initial value";
    h.reduce = h.foldl = h.inject = function (t, e, n, i) {
        null == t && (t = []), e = p(e, i, 4);
        var r, o = t.length !== +t.length && h.keys(t), a = (o || t).length, s = 0;
        if (arguments.length < 3) {
            if (!a)
                throw new TypeError(m);
            n = t[o ? o[s++] : s++]
        }
        for (; a > s; s++)
            r = o ? o[s] : s, n = e(n, t[r], r, t);
        return n
    }, h.reduceRight = h.foldr = function (t, e, n, i) {
        null == t && (t = []), e = p(e, i, 4);
        var r, o = t.length !== +t.length && h.keys(t), a = (o || t).length;
        if (arguments.length < 3) {
            if (!a)
                throw new TypeError(m);
            n = t[o ? o[--a] : --a]
        }
        for (; a--;)
            r = o ? o[a] : a, n = e(n, t[r], r, t);
        return n
    }, h.find = h.detect = function (t, e, n) {
        var i;
        return e = h.iteratee(e, n), h.some(t, function (t, n, r) {
            return e(t, n, r) ? (i = t, !0) : void 0
        }), i
    }, h.filter = h.select = function (t, e, n) {
        var i = [];
        return null == t ? i : (e = h.iteratee(e, n), h.each(t, function (t, n, r) {
            e(t, n, r) && i.push(t)
        }), i)
    }, h.reject = function (t, e, n) {
        return h.filter(t, h.negate(h.iteratee(e)), n)
    }, h.every = h.all = function (t, e, n) {
        if (null == t)
            return !0;
        e = h.iteratee(e, n);
        var i, r, o = t.length !== +t.length && h.keys(t), a = (o || t).length;
        for (i = 0; a > i; i++)
            if (r = o ? o[i] : i, !e(t[r], r, t))
                return !1;
        return !0
    }, h.some = h.any = function (t, e, n) {
        if (null == t)
            return !1;
        e = h.iteratee(e, n);
        var i, r, o = t.length !== +t.length && h.keys(t), a = (o || t).length;
        for (i = 0; a > i; i++)
            if (r = o ? o[i] : i, e(t[r], r, t))
                return !0;
        return !1
    }, h.contains = h.include = function (t, e) {
        return null == t ? !1 : (t.length !== +t.length && (t = h.values(t)), h.indexOf(t, e) >= 0)
    }, h.invoke = function (t, e) {
        var n = a.call(arguments, 2), i = h.isFunction(e);
        return h.map(t, function (t) {
            return (i ? e : t[e]).apply(t, n)
        })
    }, h.pluck = function (t, e) {
        return h.map(t, h.property(e))
    }, h.where = function (t, e) {
        return h.filter(t, h.matches(e))
    }, h.findWhere = function (t, e) {
        return h.find(t, h.matches(e))
    }, h.max = function (t, e, n) {
        var i, r, o = -1 / 0, a = -1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : h.values(t);
            for (var s = 0, l = t.length; l > s; s++)
                i = t[s], i > o && (o = i)
        } else
            e = h.iteratee(e, n), h.each(t, function (t, n, i) {
                r = e(t, n, i), (r > a || r === -1 / 0 && o === -1 / 0) && (o = t, a = r)
            });
        return o
    }, h.min = function (t, e, n) {
        var i, r, o = 1 / 0, a = 1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : h.values(t);
            for (var s = 0, l = t.length; l > s; s++)
                i = t[s], o > i && (o = i)
        } else
            e = h.iteratee(e, n), h.each(t, function (t, n, i) {
                r = e(t, n, i), (a > r || 1 / 0 === r && 1 / 0 === o) && (o = t, a = r)
            });
        return o
    }, h.shuffle = function (t) {
        for (var e, n = t && t.length === +t.length ? t : h.values(t), i = n.length, r = Array(i), o = 0; i > o; o++)
            e = h.random(0, o), e !== o && (r[o] = r[e]), r[e] = n[o];
        return r
    }, h.sample = function (t, e, n) {
        return null == e || n ? (t.length !== +t.length && (t = h.values(t)), t[h.random(t.length - 1)]) : h.shuffle(t).slice(0, Math.max(0, e))
    }, h.sortBy = function (t, e, n) {
        return e = h.iteratee(e, n), h.pluck(h.map(t, function (t, n, i) {
            return { value: t, index: n, criteria: e(t, n, i) }
        }).sort(function (t, e) {
            var n = t.criteria, i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n)
                    return 1;
                if (i > n || void 0 === i)
                    return -1
            }
            return t.index - e.index
        }), "value")
    };
    var g = function (t) {
        return function (e, n, i) {
            var r = {};
            return n = h.iteratee(n, i), h.each(e, function (i, o) {
                var a = n(i, o, e);
                t(r, i, a)
            }), r
        }
    };
    h.groupBy = g(function (t, e, n) {
        h.has(t, n) ? t[n].push(e) : t[n] = [e]
    }), h.indexBy = g(function (t, e, n) {
        t[n] = e
    }), h.countBy = g(function (t, e, n) {
        h.has(t, n) ? t[n]++ : t[n] = 1
    }), h.sortedIndex = function (t, e, n, i) {
        n = h.iteratee(n, i, 1);
        for (var r = n(e), o = 0, a = t.length; a > o;) {
            var s = o + a >>> 1;
            n(t[s]) < r ? o = s + 1 : a = s
        }
        return o
    }, h.toArray = function (t) {
        return t ? h.isArray(t) ? a.call(t) : t.length === +t.length ? h.map(t, h.identity) : h.values(t) : []
    }, h.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : h.keys(t).length
    }, h.partition = function (t, e, n) {
        e = h.iteratee(e, n);
        var i = [], r = [];
        return h.each(t, function (t, n, o) {
            (e(t, n, o) ? i : r).push(t)
        }), [i, r]
    }, h.first = h.head = h.take = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : a.call(t, 0, e)
    }, h.initial = function (t, e, n) {
        return a.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    }, h.last = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, h.rest = h.tail = h.drop = function (t, e, n) {
        return a.call(t, null == e || n ? 1 : e)
    }, h.compact = function (t) {
        return h.filter(t, h.identity)
    };
    var v = function (t, e, n, i) {
        if (e && h.every(t, h.isArray))
            return s.apply(i, t);
        for (var r = 0, a = t.length; a > r; r++) {
            var l = t[r];
            h.isArray(l) || h.isArguments(l) ? e ? o.apply(i, l) : v(l, e, n, i) : n || i.push(l)
        }
        return i
    };
    h.flatten = function (t, e) {
        return v(t, e, !1, [])
    }, h.without = function (t) {
        return h.difference(t, a.call(arguments, 1))
    }, h.uniq = h.unique = function (t, e, n, i) {
        if (null == t)
            return [];
        h.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = h.iteratee(n, i));
        for (var r = [], o = [], a = 0, s = t.length; s > a; a++) {
            var l = t[a];
            if (e)
                a && o === l || r.push(l), o = l;
            else if (n) {
                var u = n(l, a, t);
                h.indexOf(o, u) < 0 && (o.push(u), r.push(l))
            } else
                h.indexOf(r, l) < 0 && r.push(l)
        }
        return r
    }, h.union = function () {
        return h.uniq(v(arguments, !0, !0, []))
    }, h.intersection = function (t) {
        if (null == t)
            return [];
        for (var e = [], n = arguments.length, i = 0, r = t.length; r > i; i++) {
            var o = t[i];
            if (!h.contains(e, o)) {
                for (var a = 1; n > a && h.contains(arguments[a], o) ; a++)
                    ;
                a === n && e.push(o)
            }
        }
        return e
    }, h.difference = function (t) {
        var e = v(a.call(arguments, 1), !0, !0, []);
        return h.filter(t, function (t) {
            return !h.contains(e, t)
        })
    }, h.zip = function (t) {
        if (null == t)
            return [];
        for (var e = h.max(arguments, "length").length, n = Array(e), i = 0; e > i; i++)
            n[i] = h.pluck(arguments, i);
        return n
    }, h.object = function (t, e) {
        if (null == t)
            return {};
        for (var n = {}, i = 0, r = t.length; r > i; i++)
            e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    }, h.indexOf = function (t, e, n) {
        if (null == t)
            return -1;
        var i = 0, r = t.length;
        if (n) {
            if ("number" != typeof n)
                return i = h.sortedIndex(t, e), t[i] === e ? i : -1;
            i = 0 > n ? Math.max(0, r + n) : n
        }
        for (; r > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }, h.lastIndexOf = function (t, e, n) {
        if (null == t)
            return -1;
        var i = t.length;
        for ("number" == typeof n && (i = 0 > n ? i + n + 1 : Math.min(i, n + 1)) ; --i >= 0;)
            if (t[i] === e)
                return i;
        return -1
    }, h.range = function (t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; i > o; o++, t += n)
            r[o] = t;
        return r
    };
    var y = function () {
    };
    h.bind = function (t, e) {
        var n, i;
        if (f && t.bind === f)
            return f.apply(t, a.call(arguments, 1));
        if (!h.isFunction(t))
            throw new TypeError("Bind must be called on a function");
        return n = a.call(arguments, 2), i = function () {
            if (!(this instanceof i))
                return t.apply(e, n.concat(a.call(arguments)));
            y.prototype = t.prototype;
            var r = new y;
            y.prototype = null;
            var o = t.apply(r, n.concat(a.call(arguments)));
            return h.isObject(o) ? o : r
        }
    }, h.partial = function (t) {
        var e = a.call(arguments, 1);
        return function () {
            for (var n = 0, i = e.slice(), r = 0, o = i.length; o > r; r++)
                i[r] === h && (i[r] = arguments[n++]);
            for (; n < arguments.length;)
                i.push(arguments[n++]);
            return t.apply(this, i)
        }
    }, h.bindAll = function (t) {
        var e, n, i = arguments.length;
        if (1 >= i)
            throw new Error("bindAll must be passed function names");
        for (e = 1; i > e; e++)
            n = arguments[e], t[n] = h.bind(t[n], t);
        return t
    }, h.memoize = function (t, e) {
        var n = function (i) {
            var r = n.cache, o = e ? e.apply(this, arguments) : i;
            return h.has(r, o) || (r[o] = t.apply(this, arguments)), r[o]
        };
        return n.cache = {}, n
    }, h.delay = function (t, e) {
        var n = a.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, n)
        }, e)
    }, h.defer = function (t) {
        return h.delay.apply(h, [t, 1].concat(a.call(arguments, 1)))
    }, h.throttle = function (t, e, n) {
        var i, r, o, a = null, s = 0;
        n || (n = {});
        var l = function () {
            s = n.leading === !1 ? 0 : h.now(), a = null, o = t.apply(i, r), a || (i = r = null)
        };
        return function () {
            var u = h.now();
            s || n.leading !== !1 || (s = u);
            var c = e - (u - s);
            return i = this, r = arguments, 0 >= c || c > e ? (clearTimeout(a), a = null, s = u, o = t.apply(i, r), a || (i = r = null)) : a || n.trailing === !1 || (a = setTimeout(l, c)), o
        }
    }, h.debounce = function (t, e, n) {
        var i, r, o, a, s, l = function () {
            var u = h.now() - a;
            e > u && u > 0 ? i = setTimeout(l, e - u) : (i = null, n || (s = t.apply(o, r), i || (o = r = null)))
        };
        return function () {
            o = this, r = arguments, a = h.now();
            var u = n && !i;
            return i || (i = setTimeout(l, e)), u && (s = t.apply(o, r), o = r = null), s
        }
    }, h.wrap = function (t, e) {
        return h.partial(e, t)
    }, h.negate = function (t) {
        return function () {
            return !t.apply(this, arguments)
        }
    }, h.compose = function () {
        var t = arguments, e = t.length - 1;
        return function () {
            for (var n = e, i = t[e].apply(this, arguments) ; n--;)
                i = t[n].call(this, i);
            return i
        }
    }, h.after = function (t, e) {
        return function () {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, h.before = function (t, e) {
        var n;
        return function () {
            return --t > 0 ? n = e.apply(this, arguments) : e = null, n
        }
    }, h.once = h.partial(h.before, 2), h.keys = function (t) {
        if (!h.isObject(t))
            return [];
        if (d)
            return d(t);
        var e = [];
        for (var n in t)
            h.has(t, n) && e.push(n);
        return e
    }, h.values = function (t) {
        for (var e = h.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++)
            i[r] = t[e[r]];
        return i
    }, h.pairs = function (t) {
        for (var e = h.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++)
            i[r] = [e[r], t[e[r]]];
        return i
    }, h.invert = function (t) {
        for (var e = {}, n = h.keys(t), i = 0, r = n.length; r > i; i++)
            e[t[n[i]]] = n[i];
        return e
    }, h.functions = h.methods = function (t) {
        var e = [];
        for (var n in t)
            h.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, h.extend = function (t) {
        if (!h.isObject(t))
            return t;
        for (var e, n, i = 1, r = arguments.length; r > i; i++) {
            e = arguments[i];
            for (n in e)
                u.call(e, n) && (t[n] = e[n])
        }
        return t
    }, h.pick = function (t, e, n) {
        var i, r = {};
        if (null == t)
            return r;
        if (h.isFunction(e)) {
            e = p(e, n);
            for (i in t) {
                var o = t[i];
                e(o, i, t) && (r[i] = o)
            }
        } else {
            var l = s.apply([], a.call(arguments, 1));
            t = new Object(t);
            for (var u = 0, c = l.length; c > u; u++)
                i = l[u], i in t && (r[i] = t[i])
        }
        return r
    }, h.omit = function (t, e, n) {
        if (h.isFunction(e))
            e = h.negate(e);
        else {
            var i = h.map(s.apply([], a.call(arguments, 1)), String);
            e = function (t, e) {
                return !h.contains(i, e)
            }
        }
        return h.pick(t, e, n)
    }, h.defaults = function (t) {
        if (!h.isObject(t))
            return t;
        for (var e = 1, n = arguments.length; n > e; e++) {
            var i = arguments[e];
            for (var r in i)
                void 0 === t[r] && (t[r] = i[r])
        }
        return t
    }, h.clone = function (t) {
        return h.isObject(t) ? h.isArray(t) ? t.slice() : h.extend({}, t) : t
    }, h.tap = function (t, e) {
        return e(t), t
    };
    var b = function (t, e, n, i) {
        if (t === e)
            return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e)
            return t === e;
        t instanceof h && (t = t._wrapped), e instanceof h && (e = e._wrapped);
        var r = l.call(t);
        if (r !== l.call(e))
            return !1;
        switch (r) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
        }
        if ("object" != typeof t || "object" != typeof e)
            return !1;
        for (var o = n.length; o--;)
            if (n[o] === t)
                return i[o] === e;
        var a = t.constructor, s = e.constructor;
        if (a !== s && "constructor" in t && "constructor" in e && !(h.isFunction(a) && a instanceof a && h.isFunction(s) && s instanceof s))
            return !1;
        n.push(t), i.push(e);
        var u, c;
        if ("[object Array]" === r) {
            if (u = t.length, c = u === e.length)
                for (; u-- && (c = b(t[u], e[u], n, i)) ;)
                    ;
        } else {
            var d, f = h.keys(t);
            if (u = f.length, c = h.keys(e).length === u)
                for (; u-- && (d = f[u], c = h.has(e, d) && b(t[d], e[d], n, i)) ;)
                    ;
        }
        return n.pop(), i.pop(), c
    };
    h.isEqual = function (t, e) {
        return b(t, e, [], [])
    }, h.isEmpty = function (t) {
        if (null == t)
            return !0;
        if (h.isArray(t) || h.isString(t) || h.isArguments(t))
            return 0 === t.length;
        for (var e in t)
            if (h.has(t, e))
                return !1;
        return !0
    }, h.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
    }, h.isArray = c || function (t) {
        return "[object Array]" === l.call(t)
    }, h.isObject = function (t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        h["is" + t] = function (e) {
            return l.call(e) === "[object " + t + "]"
        }
    }), h.isArguments(arguments) || (h.isArguments = function (t) {
        return h.has(t, "callee")
    }), "function" != typeof /./ && (h.isFunction = function (t) {
        return "function" == typeof t || !1
    }), h.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, h.isNaN = function (t) {
        return h.isNumber(t) && t !== +t
    }, h.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" === l.call(t)
    }, h.isNull = function (t) {
        return null === t
    }, h.isUndefined = function (t) {
        return void 0 === t
    }, h.has = function (t, e) {
        return null != t && u.call(t, e)
    }, h.noConflict = function () {
        return t._ = e, this
    }, h.identity = function (t) {
        return t
    }, h.constant = function (t) {
        return function () {
            return t
        }
    }, h.noop = function () {
    }, h.property = function (t) {
        return function (e) {
            return e[t]
        }
    }, h.matches = function (t) {
        var e = h.pairs(t), n = e.length;
        return function (t) {
            if (null == t)
                return !n;
            t = new Object(t);
            for (var i = 0; n > i; i++) {
                var r = e[i], o = r[0];
                if (r[1] !== t[o] || !(o in t))
                    return !1
            }
            return !0
        }
    }, h.times = function (t, e, n) {
        var i = Array(Math.max(0, t));
        e = p(e, n, 1);
        for (var r = 0; t > r; r++)
            i[r] = e(r);
        return i
    }, h.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, h.now = Date.now || function () {
        return (new Date).getTime()
    };
    var w = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, x = h.invert(w), C = function (t) {
        var e = function (e) {
            return t[e]
        }, n = "(?:" + h.keys(t).join("|") + ")", i = RegExp(n), r = RegExp(n, "g");
        return function (t) {
            return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
        }
    };
    h.escape = C(w), h.unescape = C(x), h.result = function (t, e) {
        if (null == t)
            return void 0;
        var n = t[e];
        return h.isFunction(n) ? t[e]() : n
    };
    var k = 0;
    h.uniqueId = function (t) {
        var e = ++k + "";
        return t ? t + e : e
    }, h.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
    var E = /(.)^/, _ = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, T = /\\|'|\r|\n|\u2028|\u2029/g, S = function (t) {
        return "\\" + _[t]
    };
    h.template = function (t, e, n) {
        !e && n && (e = n), e = h.defaults({}, e, h.templateSettings);
        var i = RegExp([(e.escape || E).source, (e.interpolate || E).source, (e.evaluate || E).source].join("|") + "|$", "g"), r = 0, o = "__p+='";
        t.replace(i, function (e, n, i, a, s) {
            return o += t.slice(r, s).replace(T, S), r = s + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), e
        }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var a = new Function(e.variable || "obj", "_", o)
        } catch (s) {
            throw s.source = o, s
        }
        var l = function (t) {
            return a.call(this, t, h)
        }, u = e.variable || "obj";
        return l.source = "function(" + u + "){\n" + o + "}", l
    }, h.chain = function (t) {
        var e = h(t);
        return e._chain = !0, e
    };
    var $ = function (t) {
        return this._chain ? h(t).chain() : t
    };
    h.mixin = function (t) {
        h.each(h.functions(t), function (e) {
            var n = h[e] = t[e];
            h.prototype[e] = function () {
                var t = [this._wrapped];
                return o.apply(t, arguments), $.call(this, n.apply(h, t))
            }
        })
    }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = n[t];
        h.prototype[t] = function () {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], $.call(this, n)
        }
    }), h.each(["concat", "join", "slice"], function (t) {
        var e = n[t];
        h.prototype[t] = function () {
            return $.call(this, e.apply(this._wrapped, arguments))
        }
    }), h.prototype.value = function () {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return h
    })
}.call(this);
var Markdown;
Markdown = "object" == typeof exports && "function" == typeof require ? exports : {}, function () {
    function t(t) {
        return t
    }
    function e() {
        return !1
    }
    function n() {
    }
    function i() {
    }
    n.prototype = {
        chain: function (e, n) {
            var i = this[e];
            if (!i)
                throw new Error("unknown hook " + e);
            this[e] = i === t ? n : function () {
                var t = Array.prototype.slice.call(arguments, 0);
                return t[0] = i.apply(null, t), n.apply(null, t)
            }
        }, set: function (t, e) {
            if (!this[t])
                throw new Error("unknown hook " + t);
            this[t] = e
        }, addNoop: function (e) {
            this[e] = t
        }, addFalse: function (t) {
            this[t] = e
        }
    }, Markdown.HookCollection = n, i.prototype = {
        set: function (t, e) {
            this["s_" + t] = e
        }, get: function (t) {
            return this["s_" + t]
        }
    }, Markdown.Converter = function () {
        function t(t) {
            return t = t.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm, function (t, e, n, i, r, o) {
                return e = e.toLowerCase(), F.set(e, k(n)), r ? i : (o && H.set(e, o.replace(/"/g, "&quot;")), "")
            })
        }
        function e(t) {
            return t = t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, r), t = t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, r), t = t.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, r), t = t.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g, r), t = t.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, r)
        }
        function r(t, e) {
            var n = e;
            return n = n.replace(/^\n+/, ""), n = n.replace(/\n+$/g, ""), n = "\n\n~K" + (M.push(n) - 1) + "K\n\n"
        }
        function o(t, n) {
            t = P.preBlockGamut(t, I), t = h(t);
            var i = "<hr />\n";
            return t = t.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, i), t = t.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm, i), t = t.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, i), t = p(t), t = g(t), t = x(t), t = P.postBlockGamut(t, I), t = e(t), t = C(t, n)
        }
        function a(t) {
            return t = P.preSpanGamut(t), t = y(t), t = s(t), t = E(t), t = c(t), t = l(t), t = T(t), t = t.replace(/~P/g, "://"), t = k(t), t = L._DoItalicsAndBold ? L._DoItalicsAndBold(t) : w(t), t = t.replace(/  +\n/g, " <br>\n"), t = P.postSpanGamut(t)
        }
        function s(t) {
            var e = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;
            return t = t.replace(e, function (t) {
                var e = t.replace(/(.)<\/?code>(?=.)/g, "$1`");
                return e = D(e, "!" == t.charAt(1) ? "\\`*_/" : "\\`*_")
            })
        }
        function l(t) {
            return t = t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, u), t = t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, u), t = t.replace(/(\[([^\[\]]+)\])()()()()()/g, u)
        }
        function u(t, e, n, i, r, o, a, s) {
            void 0 == s && (s = "");
            var l = e, u = n.replace(/:\/\//g, "~P"), c = i.toLowerCase(), f = r, h = s;
            if ("" == f)
                if ("" == c && (c = u.toLowerCase().replace(/ ?\n/g, " ")), f = "#" + c, void 0 != F.get(c))
                    f = F.get(c), void 0 != H.get(c) && (h = H.get(c));
                else {
                    if (!(l.search(/\(\s*\)$/m) > -1))
                        return l;
                    f = ""
                }
            f = A(f), f = D(f, "*_");
            var p = '<a href="' + f + '"';
            return "" != h && (h = d(h), h = D(h, "*_"), p += ' title="' + h + '"'), p += ">" + u + "</a>"
        }
        function c(t) {
            return t = t.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, f), t = t.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, f)
        }
        function d(t) {
            return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
        }
        function f(t, e, n, i, r, o, a, s) {
            var l = e, u = n, c = i.toLowerCase(), f = r, h = s;
            if (h || (h = ""), "" == f) {
                if ("" == c && (c = u.toLowerCase().replace(/ ?\n/g, " ")), f = "#" + c, void 0 == F.get(c))
                    return l;
                f = F.get(c), void 0 != H.get(c) && (h = H.get(c))
            }
            u = D(d(u), "*_[]()"), f = D(f, "*_");
            var p = '<img src="' + f + '" alt="' + u + '"';
            return h = d(h), h = D(h, "*_"), p += ' title="' + h + '"', p += " />"
        }
        function h(t) {
            return t = t.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function (t, e) {
                return "<h1>" + a(e) + "</h1>\n\n"
            }), t = t.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function (t, e) {
                return "<h2>" + a(e) + "</h2>\n\n"
            }), t = t.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function (t, e, n) {
                var i = e.length;
                return "<h" + i + ">" + a(n) + "</h" + i + ">\n\n"
            })
        }
        function p(t, e) {
            t += "~0";
            var n = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
            return O ? t = t.replace(n, function (t, n, i) {
                var r = n, o = i.search(/[*+-]/g) > -1 ? "ul" : "ol", a = m(r, o, e);
                return a = a.replace(/\s+$/, ""), a = "<" + o + ">" + a + "</" + o + ">\n"
            }) : (n = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, t = t.replace(n, function (t, e, n, i) {
                var r = e, o = n, a = i.search(/[*+-]/g) > -1 ? "ul" : "ol", s = m(o, a);
                return s = r + "<" + a + ">\n" + s + "</" + a + ">\n"
            })), t = t.replace(/~0/, "")
        }
        function m(t, e, n) {
            O++, t = t.replace(/\n{2,}$/, "\n"), t += "~0";
            var i = R[e], r = new RegExp("(^[ \\t]*)(" + i + ")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1(" + i + ")[ \\t]+))", "gm"), s = !1;
            return t = t.replace(r, function (t, e, i, r) {
                var l = r, u = /\n\n$/.test(l), c = u || l.search(/\n{2,}/) > -1;
                return c || s ? l = o($(l), !0) : (l = p($(l), !0), l = l.replace(/\n$/, ""), n || (l = a(l))), s = u, "<li>" + l + "</li>\n"
            }), t = t.replace(/~0/g, ""), O--, t
        }
        function g(t) {
            return t += "~0", t = t.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function (t, e, n) {
                var i = e, r = n;
                return i = b($(i)), i = N(i), i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, ""), i = "<pre><code>" + i + "\n</code></pre>", "\n\n" + i + "\n\n" + r
            }), t = t.replace(/~0/, "")
        }
        function v(t) {
            return t = t.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (M.push(t) - 1) + "K\n\n"
        }
        function y(t) {
            return t = t.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (t, e, n, i) {
                var r = i;
                return r = r.replace(/^([ \t]*)/g, ""), r = r.replace(/[ \t]*$/g, ""), r = b(r), r = r.replace(/:\/\//g, "~P"), e + "<code>" + r + "</code>"
            })
        }
        function b(t) {
            return t = t.replace(/&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t = t.replace(/>/g, "&gt;"), t = D(t, "*_{}[]\\", !1)
        }
        function w(t) {
            return t = t.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g, "$1<strong>$3</strong>$4"), t = t.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g, "$1<em>$3</em>$4")
        }
        function x(t) {
            return t = t.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (t, e) {
                var n = e;
                return n = n.replace(/^[ \t]*>[ \t]?/gm, "~0"), n = n.replace(/~0/g, ""), n = n.replace(/^[ \t]+$/gm, ""), n = o(n), n = n.replace(/(^|\n)/g, "$1  "), n = n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (t, e) {
                    var n = e;
                    return n = n.replace(/^  /gm, "~0"), n = n.replace(/~0/g, "")
                }), v("<blockquote>\n" + n + "\n</blockquote>")
            })
        }
        function C(t, e) {
            t = t.replace(/^\n+/g, ""), t = t.replace(/\n+$/g, "");
            for (var n = t.split(/\n{2,}/g), i = [], r = /~K(\d+)K/, o = n.length, s = 0; o > s; s++) {
                var l = n[s];
                r.test(l) ? i.push(l) : /\S/.test(l) && (l = a(l), l = l.replace(/^([ \t]*)/g, "<p>"), l += "</p>", i.push(l))
            }
            if (!e) {
                o = i.length;
                for (var s = 0; o > s; s++)
                    for (var u = !0; u;)
                        u = !1, i[s] = i[s].replace(/~K(\d+)K/g, function (t, e) {
                            return u = !0, M[e]
                        })
            }
            return i.join("\n\n")
        }
        function k(t) {
            return t = t.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), t = t.replace(/<(?![a-z\/?!]|~D)/gi, "&lt;")
        }
        function E(t) {
            return t = t.replace(/\\(\\)/g, j), t = t.replace(/\\([`*_{}\[\]()>#+-.!])/g, j)
        }
        function _(t, e, n, i) {
            if (e)
                return t;
            if (")" !== i.charAt(i.length - 1))
                return "<" + n + i + ">";
            for (var r = i.match(/[()]/g), o = 0, a = 0; a < r.length; a++)
                "(" === r[a] ? 0 >= o ? o = 1 : o++ : o--;
            var s = "";
            if (0 > o) {
                var l = new RegExp("\\){1," + -o + "}$");
                i = i.replace(l, function (t) {
                    return s = t, ""
                })
            }
            if (s) {
                var u = i.charAt(i.length - 1);
                z.test(u) || (s = u + s, i = i.substr(0, i.length - 1))
            }
            return "<" + n + i + ">" + s
        }
        function T(t) {
            t = t.replace(B, _);
            var e = function (t, e) {
                return '<a href="' + e + '">' + P.plainLinkText(e) + "</a>"
            };
            return t = t.replace(/<((https?|ftp):[^'">\s]+)>/gi, e)
        }
        function S(t) {
            return t = t.replace(/~E(\d+)E/g, function (t, e) {
                var n = parseInt(e);
                return String.fromCharCode(n)
            })
        }
        function $(t) {
            return t = t.replace(/^(\t|[ ]{1,4})/gm, "~0"), t = t.replace(/~0/g, "")
        }
        function N(t) {
            if (!/\t/.test(t))
                return t;
            var e, n = ["    ", "   ", "  ", " "], i = 0;
            return t.replace(/[\n\t]/g, function (t, r) {
                return "\n" === t ? (i = r + 1, t) : (e = (r - i) % 4, i = r + 1, n[e])
            })
        }
        function A(t) {
            if (!t)
                return "";
            t.length;
            return t.replace(X, function (t) {
                return "~D" == t ? "%24" : ":" == t ? ":" : "%" + t.charCodeAt(0).toString(16)
            })
        }
        function D(t, e, n) {
            var i = "([" + e.replace(/([\[\]\\])/g, "\\$1") + "])";
            n && (i = "\\\\" + i);
            var r = new RegExp(i, "g");
            return t = t.replace(r, j)
        }
        function j(t, e) {
            var n = e.charCodeAt(0);
            return "~E" + n + "E"
        }
        var L = {};
        this.setOptions = function (t) {
            L = t
        };
        var P = this.hooks = new n;
        P.addNoop("plainLinkText"), P.addNoop("preConversion"), P.addNoop("postNormalization"), P.addNoop("preBlockGamut"), P.addNoop("postBlockGamut"), P.addNoop("preSpanGamut"), P.addNoop("postSpanGamut"), P.addNoop("postConversion");
        var F, H, M, O;
        this.makeHtml = function (n) {
            if (F)
                throw new Error("Recursive call to converter.makeHtml");
            return F = new i, H = new i, M = [], O = 0, n = P.preConversion(n), n = n.replace(/~/g, "~T"), n = n.replace(/\$/g, "~D"), n = n.replace(/\r\n/g, "\n"), n = n.replace(/\r/g, "\n"), n = "\n\n" + n + "\n\n", n = N(n), n = n.replace(/^[ \t]+$/gm, ""), n = P.postNormalization(n), n = e(n), n = t(n), n = o(n), n = S(n), n = n.replace(/~D/g, "$$"), n = n.replace(/~T/g, "~"), n = P.postConversion(n), M = H = F = null, n
        };
        var I = function (t) {
            return o(t)
        }, R = { ol: "\\d+[.]", ul: "[*+-]" }, q = "[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]", W = "[-A-Z0-9+&@#/%=~_|[\\])]", B = new RegExp('(="|<)?\\b(https?|ftp)(://' + q + "*" + W + ")(?=$|\\W)", "gi"), z = new RegExp(W, "i"), X = /(?:["'*()[\]:]|~D)/g
    }
}(), function () {
    function t(t) {
        return t.replace(/<[^>]*>?/gi, e)
    }
    function e(t) {
        return t.match(o) || t.match(a) || t.match(s) ? t : ""
    }
    function n(t) {
        if ("" == t)
            return "";
        var e = /<\/?\w+[^>]*(\s|$|>)/g, n = t.toLowerCase().match(e), i = (n || []).length;
        if (0 == i)
            return t;
        for (var r, o, a, s = "<p><img><br><li><hr>", l = [], u = [], c = !1, d = 0; i > d; d++)
            if (r = n[d].replace(/<\/?(\w+).*/, "$1"), !(l[d] || s.search("<" + r + ">") > -1)) {
                if (o = n[d], a = -1, !/^<\//.test(o))
                    for (var f = d + 1; i > f; f++)
                        if (!l[f] && n[f] == "</" + r + ">") {
                            a = f;
                            break
                        }
                -1 == a ? c = u[d] = !0 : l[a] = !0
            }
        if (!c)
            return t;
        var d = 0;
        return t = t.replace(e, function (t) {
            var e = u[d] ? "" : t;
            return d++, e
        })
    }
    var i, r;
    "object" == typeof exports && "function" == typeof require ? (i = exports, r = require("./Markdown.Converter").Converter) : (i = window.Markdown, r = i.Converter), i.getSanitizingConverter = function () {
        var e = new r;
        return e.hooks.chain("postConversion", t), e.hooks.chain("postConversion", n), e
    };
    var o = /^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i, a = /^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i, s = /^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i
}(), function () {
    function t(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
    function e(t) {
        return t.replace(/\s+$/g, "")
    }
    function n(t) {
        return t.replace(new RegExp("^(\\t|[ ]{1,4})", "gm"), "")
    }
    function i(t, e) {
        return -1 != t.indexOf(e)
    }
    function r(t, e) {
        return t.replace(/<[^>]*>?/gi, function (t) {
            return t.match(e) ? t : ""
        })
    }
    function o(t, e) {
        for (var n = {}, i = 0; i < t.length; i++)
            n[t[i]] = t[i];
        for (i = 0; i < e.length; i++)
            n[e[i]] = e[i];
        var r = [];
        for (var o in n)
            n.hasOwnProperty(o) && r.push(n[o]);
        return r
    }
    function a(t) {
        return "" != t.charAt(0) && (t = "" + t), "" != t.charAt(t.length - 1) && (t += ""), t
    }
    function s(t) {
        return "" == t.charAt(0) && (t = t.substr(1)), "" == t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), t
    }
    function l(t, e) {
        return r(u(t, e), m)
    }
    function u(t, e) {
        var n = e.blockGamutHookCallback(t);
        return n = f(n), n = n.replace(/~D/g, "$$").replace(/~T/g, "~"), n = e.previousPostConversion(n)
    }
    function c(t) {
        return t.replace(/\\\|/g, "~I").replace(/\\:/g, "~i")
    }
    function d(t) {
        return t.replace(/~I/g, "|").replace(/~i/g, ":")
    }
    function f(t) {
        return t = t.replace(/~E(\d+)E/g, function (t, e) {
            var n = parseInt(e);
            return String.fromCharCode(n)
        })
    }
    function h(t) {
        return t.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    }
    function p(t, e) {
        var n = e;
        return n = n.replace(/&\#8220;/g, '"'), n = n.replace(/&\#8221;/g, '"'), n = n.replace(/&\#8216;/g, "'"), n = n.replace(/&\#8217;/g, "'"), n = n.replace(/&\#8212;/g, "---"), n = n.replace(/&\#8211;/g, "--"), n = n.replace(/&\#8230;/g, "...")
    }
    var m = new RegExp(["^(<\\/?(a|abbr|acronym|applet|area|b|basefont|", "bdo|big|button|cite|code|del|dfn|em|figcaption|", "font|i|iframe|img|input|ins|kbd|label|map|", "mark|meter|object|param|progress|q|ruby|rp|rt|s|", "samp|script|select|small|span|strike|strong|", "sub|sup|textarea|time|tt|u|var|wbr)[^>]*>|", "<(br)\\s?\\/?>)$"].join(""), "i");
    Array.indexOf || (Array.prototype.indexOf = function (t) {
        for (var e = 0; e < this.length; e++)
            if (this[e] == t)
                return e;
        return -1
    }),
    Markdown.Extra = function () {
        this.converter = null, this.hashBlocks = [], this.footnotes = {}, this.usedFootnotes = [], this.attributeBlocks = !1, this.googleCodePrettify = !1, this.highlightJs = !1, this.tableClass = "", this.tabWidth = 4
    }, Markdown.Extra.init = function (t, e) {
        var n = new Markdown.Extra, r = [], o = [], a = [], s = ["unHashExtraBlocks"];
        return e = e || {}, e.extensions = e.extensions || ["all"],
            i(e.extensions, "all") && (e.extensions = ["tables", "fenced_code_gfm", "def_list", "attr_list", "footnotes", "smartypants", "strikethrough", "newlines"]),
            o.push("wrapHeaders"), i(e.extensions, "attr_list") && (r.push("hashFcbAttributeBlocks"),
            o.push("hashHeaderAttributeBlocks"), s.push("applyAttributeBlocks"), n.attributeBlocks = !0),
            i(e.extensions, "fenced_code_gfm") && (o.push("fencedCodeBlocks"), r.push("fencedCodeBlocks")),
            i(e.extensions, "tables") && o.push("tables"),
            i(e.extensions, "def_list") && o.push("definitionLists"),
            i(e.extensions, "footnotes") && (r.push("stripFootnoteDefinitions"),
            o.push("doFootnotes"), s.push("printFootnotes")),
            i(e.extensions, "smartypants") && s.push("runSmartyPants"),
            i(e.extensions, "strikethrough") && a.push("strikethrough"), i(e.extensions, "newlines") && a.push("newlines"),
            t.hooks.chain("postNormalization", function (t) {
            return n.doTransform(r, t) + "\n"
        }), t.hooks.chain("preBlockGamut", function (t, e) {
            return n.blockGamutHookCallback = e, t = c(t), t = n.doTransform(o, t) + "\n", t = d(t)
        }), t.hooks.chain("postSpanGamut", function (t) {
            return n.doTransform(a, t)
        }), n.previousPostConversion = t.hooks.postConversion, t.hooks.chain("postConversion", function (t) {
            return t = n.doTransform(s, t), n.hashBlocks = [], n.footnotes = {}, n.usedFootnotes = [], t
        }), "highlighter" in e && (n.googleCodePrettify = "prettify" === e.highlighter, n.highlightJs = "highlight" === e.highlighter), "table_class" in e && (n.tableClass = e.table_class), n.converter = t, n
    }, Markdown.Extra.prototype.doTransform = function (t, e) {
        for (var n = 0; n < t.length; n++)
            e = this[t[n]](e);
        return e
    }, Markdown.Extra.prototype.hashExtraBlock = function (t) {
        return "\n<p>~X" + (this.hashBlocks.push(t) - 1) + "X</p>\n"
    }, Markdown.Extra.prototype.hashExtraInline = function (t) {
        return "~X" + (this.hashBlocks.push(t) - 1) + "X"
    }, Markdown.Extra.prototype.unHashExtraBlocks = function (t) {
        function e() {
            var i = !1;
            t = t.replace(/(?:<p>)?~X(\d+)X(?:<\/p>)?/g, function (t, e) {
                i = !0;
                var r = parseInt(e, 10);
                return n.hashBlocks[r]
            }), i === !0 && e()
        }
        var n = this;
        return e(), t
    }, Markdown.Extra.prototype.wrapHeaders = function (t) {
        function e(t) {
            return "\n" + t + "\n"
        }
        return t = t.replace(/^.+[ \t]*\n=+[ \t]*\n+/gm, e), t = t.replace(/^.+[ \t]*\n-+[ \t]*\n+/gm, e), t = t.replace(/^\#{1,6}[ \t]*.+?[ \t]*\#*\n+/gm, e)
    };
    var g = "\\{[ \\t]*((?:[#.][-_:a-zA-Z0-9]+[ \\t]*)+)\\}", v = new RegExp("^(#{1,6}.*#{0,6})[ \\t]+" + g + "[ \\t]*(?:\\n|0x03)", "gm"), y = new RegExp("^(.*)[ \\t]+" + g + "[ \\t]*\\n(?=[\\-|=]+\\s*(?:\\n|0x03))", "gm"), b = new RegExp("^(```[ \\t]*[^{\\s]*)[ \\t]+" + g + "[ \\t]*\\n(?=([\\s\\S]*?)\\n```[ \\t]*(\\n|0x03))", "gm");
    Markdown.Extra.prototype.hashHeaderAttributeBlocks = function (t) {
        function e(t, e, i) {
            return "<p>~XX" + (n.hashBlocks.push(i) - 1) + "XX</p>\n" + e + "\n"
        }
        var n = this;
        return t = t.replace(v, e), t = t.replace(y, e)
    }, Markdown.Extra.prototype.hashFcbAttributeBlocks = function (t) {
        function e(t, e, i) {
            return "<p>~XX" + (n.hashBlocks.push(i) - 1) + "XX</p>\n" + e + "\n"
        }
        var n = this;
        return t.replace(b, e)
    }, Markdown.Extra.prototype.applyAttributeBlocks = function (t) {
        var e = this, n = new RegExp('<p>~XX(\\d+)XX</p>[\\s]*(?:<(h[1-6]|pre)(?: +class="(\\S+)")?(>[\\s\\S]*?</\\2>))', "gm");
        return t = t.replace(n, function (t, n, i, r, a) {
            if (!i)
                return "";
            for (var s = parseInt(n, 10), l = e.hashBlocks[s], u = l.match(/#[^\s#.]+/g) || [], c = u[0] ? ' id="' + u[0].substr(1, u[0].length - 1) + '"' : "", d = l.match(/\.[^\s#.]+/g) || [], f = 0; f < d.length; f++)
                d[f] = d[f].substr(1, d[f].length - 1);
            var h = "";
            return r && (d = o(d, [r])), d.length > 0 && (h = ' class="' + d.join(" ") + '"'), "<" + i + c + h + a
        })
    }, Markdown.Extra.prototype.tables = function (e) {
        function n(e, n, r, o) {
            n = n.replace(/^ *[|]/m, ""), r = r.replace(/^ *[|]/m, ""), o = o.replace(/^ *[|]/gm, ""), n = n.replace(/[|] *$/m, ""), r = r.replace(/[|] *$/m, ""), o = o.replace(/[|] *$/gm, ""), alignspecs = r.split(/ *[|] */), align = [];
            for (var a = 0; a < alignspecs.length; a++) {
                var s = alignspecs[a];
                align[a] = s.match(/^ *-+: *$/m) ? ' style="text-align:right;"' : s.match(/^ *:-+: *$/m) ? ' style="text-align:center;"' : s.match(/^ *:-+ *$/m) ? ' style="text-align:left;"' : ""
            }
            var u = n.split(/ *[|] */), c = u.length, d = i.tableClass ? ' class="' + i.tableClass + '"' : "", f = ["<table", d, ">\n", "<thead>\n", "<tr>\n"].join("");
            for (a = 0; c > a; a++) {
                var h = l(t(u[a]), i);
                f += ["  <th", align[a], ">", h, "</th>\n"].join("")
            }
            f += "</tr>\n</thead>\n";
            var p = o.split("\n");
            for (a = 0; a < p.length; a++)
                if (!p[a].match(/^\s*$/)) {
                    for (var m = p[a].split(/ *[|] */), g = c - m.length, v = 0; g > v; v++)
                        m.push("");
                    for (f += "<tr>\n", v = 0; c > v; v++) {
                        var y = l(t(m[v]), i);
                        f += ["  <td", align[v], ">", y, "</td>\n"].join("")
                    }
                    f += "</tr>\n"
                }
            return f += "</table>\n", i.hashExtraBlock(f)
        }
        var i = this, r = new RegExp(["^", "[ ]{0,3}", "[|]", "(.+)\\n", "[ ]{0,3}", "[|]([ ]*[-:]+[-| :]*)\\n", "(", "(?:[ ]*[|].*\\n?)*", ")", "(?:\\n|$)"].join(""), "gm"), o = new RegExp(["^", "[ ]{0,3}", "(\\S.*[|].*)\\n", "[ ]{0,3}", "([-:]+[ ]*[|][-| :]*)\\n", "(", "(?:.*[|].*\\n?)*", ")", "(?:\\n|$)"].join(""), "gm");
        return e = e.replace(r, n), e = e.replace(o, n)
    }, Markdown.Extra.prototype.stripFootnoteDefinitions = function (t) {
        var e = this;
        return t = t.replace(/\n[ ]{0,3}\[\^(.+?)\]\:[ \t]*\n?([\s\S]*?)\n{1,2}((?=\n[ ]{0,3}\S)|$)/g, function (t, n, i) {
            return n = h(n), i += "\n", i = i.replace(/^[ ]{0,3}/g, ""), e.footnotes[n] = i, "\n"
        })
    }, Markdown.Extra.prototype.doFootnotes = function (t) {
        var e = this;
        if (e.isConvertingFootnote === !0)
            return t;
        var n = 0;
        return t = t.replace(/\[\^(.+?)\]/g, function (t, i) {
            var r = h(i), o = e.footnotes[r];
            if (void 0 === o)
                return t;
            n++, e.usedFootnotes.push(r);
            var a = '<a href="#fn:' + r + '" id="fnref:' + r + '" title="See footnote" class="footnote">' + n + "</a>";
            return e.hashExtraInline(a)
        })
    }, Markdown.Extra.prototype.printFootnotes = function (t) {
        var e = this;
        if (0 === e.usedFootnotes.length)
            return t;
        t += '\n\n<div class="footnotes">\n<hr>\n<ol>\n\n';
        for (var n = 0; n < e.usedFootnotes.length; n++) {
            var i = e.usedFootnotes[n], r = e.footnotes[i];
            e.isConvertingFootnote = !0;
            var o = l(r, e);
            delete e.isConvertingFootnote, t += '<li id="fn:' + i + '">' + o + ' <a href="#fnref:' + i + '" title="Return to article" class="reversefootnote">&#8617;</a></li>\n\n'
        }
        return t += "</ol>\n</div>"
    }, Markdown.Extra.prototype.fencedCodeBlocks = function (t) {
        function e(t) {
            return t = t.replace(/&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t = t.replace(/>/g, "&gt;"), t = t.replace(/~D/g, "$$"), t = t.replace(/~T/g, "~")
        }
        var n = this;
        return t = t.replace(/(?:^|\n)```[ \t]*(\S*)[ \t]*\n([\s\S]*?)\n```[ \t]*(?=\n)/g, function (t, i, r) {
            var o = i, a = r, s = n.googleCodePrettify ? ' class="prettyprint"' : "", l = "";
            o && (l = n.googleCodePrettify || n.highlightJs ? ' class="language-' + o + '"' : ' class="' + o + '"');
            var u = ["<pre", s, "><code", l, ">", e(a), "</code></pre>"].join("");
            return n.hashExtraBlock(u)
        })
    }, Markdown.Extra.prototype.educatePants = function (t) {
        var e = this, n = "", i = 0;
        t.replace(/(?:<!--[\s\S]*?-->)|(<)([a-zA-Z1-6]+)([^\n]*?>)([\s\S]*?)(<\/\2>)/g, function (r, o, a, s, l, u, c) {
            var d = t.substring(i, c);
            return n += e.applyPants(d), e.smartyPantsLastChar = n.substring(n.length - 1), i = c + r.length, o ? (/code|kbd|pre|script|noscript|iframe|math|ins|del|pre/i.test(a) ? e.smartyPantsLastChar = l.substring(l.length - 1) : l = e.educatePants(l), void (n += o + a + s + l + u)) : void (n += r)
        });
        var r = t.substring(i);
        return n += e.applyPants(r), e.smartyPantsLastChar = n.substring(n.length - 1), n
    }, Markdown.Extra.prototype.applyPants = function (t) {
        return t = t.replace(/---/g, "&#8212;").replace(/--/g, "&#8211;"), t = t.replace(/\.\.\./g, "&#8230;").replace(/\.\s\.\s\./g, "&#8230;"), t = t.replace(/``/g, "&#8220;").replace(/''/g, "&#8221;"), /^'$/.test(t) ? /\S/.test(this.smartyPantsLastChar) ? "&#8217;" : "&#8216;" : /^"$/.test(t) ? /\S/.test(this.smartyPantsLastChar) ? "&#8221;" : "&#8220;" : (t = t.replace(/^'(?=[!"#\$\%'()*+,\-.\/:;<=>?\@\[\\]\^_`{|}~]\B)/, "&#8217;"), t = t.replace(/^"(?=[!"#\$\%'()*+,\-.\/:;<=>?\@\[\\]\^_`{|}~]\B)/, "&#8221;"), t = t.replace(/"'(?=\w)/g, "&#8220;&#8216;"), t = t.replace(/'"(?=\w)/g, "&#8216;&#8220;"), t = t.replace(/'(?=\d{2}s)/g, "&#8217;"), t = t.replace(/(\s|&nbsp;|--|&[mn]dash;|&\#8211;|&\#8212;|&\#x201[34];)'(?=\w)/g, "$1&#8216;"), t = t.replace(/([^\s\[\{\(\-])'/g, "$1&#8217;"), t = t.replace(/'(?=\s|s\b)/g, "&#8217;"), t = t.replace(/'/g, "&#8216;"), t = t.replace(/(\s|&nbsp;|--|&[mn]dash;|&\#8211;|&\#8212;|&\#x201[34];)"(?=\w)/g, "$1&#8220;"), t = t.replace(/([^\s\[\{\(\-])"/g, "$1&#8221;"), t = t.replace(/"(?=\s)/g, "&#8221;"), t = t.replace(/"/gi, "&#8220;"))
    }, Markdown.Extra.prototype.runSmartyPants = function (t) {
        return this.smartyPantsLastChar = "", t = this.educatePants(t), t = t.replace(/(<([a-zA-Z1-6]+)\b([^\n>]*?)(\/)?>)/g, p)
    }, Markdown.Extra.prototype.definitionLists = function (e) {
        var n = new RegExp(["(\\x02\\n?|\\n\\n)", "(?:", "(", "(", "[ ]{0,3}", "((?:[ \\t]*\\S.*\\n)+)", "\\n?", "[ ]{0,3}:[ ]+", ")", "([\\s\\S]+?)", "(", "(?=\\0x03)", "|", "(?=", "\\n{2,}", "(?=\\S)", "(?!", "[ ]{0,3}", "(?:\\S.*\\n)+?", "\\n?", "[ ]{0,3}:[ ]+", ")", "(?!", "[ ]{0,3}:[ ]+", ")", ")", ")", ")", ")"].join(""), "gm"), i = this;
        return e = a(e), e = e.replace(n, function (e, n, r) {
            var o = t(i.processDefListItems(r));
            return o = "<dl>\n" + o + "\n</dl>", n + i.hashExtraBlock(o) + "\n\n"
        }), s(e)
    }, Markdown.Extra.prototype.processDefListItems = function (i) {
        var r = this, o = new RegExp(["(\\x02\\n?|\\n\\n+)", "(", "[ ]{0,3}", "(?![:][ ]|[ ])", "(?:\\S.*\\n)+?", ")", "(?=\\n?[ ]{0,3}:[ ])"].join(""), "gm"), c = new RegExp(["\\n(\\n+)?", "(", "[ ]{0,3}", "[:][ ]+", ")", "([\\s\\S]+?)", "(?=\\n*", "(?:", "\\n[ ]{0,3}[:][ ]|", "<dt>|\\x03", ")", ")"].join(""), "gm");
        return i = a(i), i = i.replace(/\n{2,}(?=\\x03)/, "\n"), i = i.replace(o, function (e, n, i) {
            for (var o = t(i).split("\n"), a = "", s = 0; s < o.length; s++) {
                var u = o[s];
                u = l(t(u), r), a += "\n<dt>" + u + "</dt>"
            }
            return a + "\n"
        }), i = i.replace(c, function (t, i, o, a) {
            return i || a.match(/\n{2,}/) ? (a = Array(o.length + 1).join(" ") + a, a = n(a) + "\n\n", a = "\n" + u(a, r) + "\n") : (a = e(a), a = l(n(a), r)), "\n<dd>" + a + "</dd>\n"
        }), s(i)
    }, Markdown.Extra.prototype.strikethrough = function (t) {
        return t.replace(/([\W_]|^)~T~T(?=\S)([^\r]*?\S[\*_]*)~T~T([\W_]|$)/g, "$1<del>$2</del>$3")
    }, Markdown.Extra.prototype.newlines = function (t) {
        return t.replace(/(<(?:br|\/li)>)?\n/g, function (t, e) {
            return e ? t : " <br>\n"
        })
    }
}(), function (t) {
    var e = {};
    t.fn.toc = function (e) {
        var n, i = this, r = t.extend({}, jQuery.fn.toc.defaults, e), o = t(r.container), a = t(r.selectors, o), s = [], l = r.activeClass, u = function (e, n) {
            if (r.smoothScrolling && "function" == typeof r.smoothScrolling) {
                e.preventDefault();
                var o = t(e.target).attr("href");
                r.smoothScrolling(o, r, n)
            }
            t("li", i).removeClass(l), t(e.target).parent().addClass(l)
        }, c = function () {
            n && clearTimeout(n), n = setTimeout(function () {
                for (var e, n = t(window).scrollTop(), o = Number.MAX_VALUE, a = 0, u = 0, c = s.length; c > u; u++) {
                    var d = Math.abs(s[u] - n);
                    o > d && (a = u, o = d)
                }
                t("li", i).removeClass(l), e = t("li:eq(" + a + ")", i).addClass(l), r.onHighlight(e)
            }, 50)
        };
        return r.highlightOnScroll && (t(window).bind("scroll", c), c()), this.each(function () {
            var e = t(this), n = t(r.listType);
            a.each(function (i, o) {
                var a = t(o);
                s.push(a.offset().top - r.highlightOffset);
                var l = r.anchorName(i, o, r.prefix);
                if (o.id !== l) {
                    t("<span/>").attr("id", l).insertBefore(a)
                }
                var d = t("<a/>").text(r.headerText(i, o, a)).attr("href", "#" + l).bind("click", function (n) {
                    t(window).unbind("scroll", c), u(n, function () {
                        t(window).bind("scroll", c)
                    }), e.trigger("selected", t(this).attr("href"))
                }), f = t("<li/>").addClass(r.itemClass(i, o, a, r.prefix)).append(d);
                n.append(f)
            }), e.html(n)
        })
    }, jQuery.fn.toc.defaults = {
        container: "body", listType: "<ul/>", selectors: "h1,h2,h3", smoothScrolling: function (e, n, i) {
            t(e).smoothScroller({ offset: n.scrollToOffset }).on("smoothScrollerComplete", function () {
                i()
            })
        }, scrollToOffset: 0, prefix: "toc", activeClass: "toc-active", onHighlight: function () {
        }, highlightOnScroll: !0, highlightOffset: 100, anchorName: function (n, i, r) {
            if (i.id.length)
                return i.id;
            var o = t(i).text().replace(/[^a-z0-9]/gi, " ").replace(/\s+/g, "-").toLowerCase();
            if (e[o]) {
                for (var a = 2; e[o + a];)
                    a++;
                o = o + "-" + a
            }
            return e[o] = !0, r + "-" + o
        }, headerText: function (t, e, n) {
            return n.data("toc-title") || n.text()
        }, itemClass: function (t, e, n, i) {
            return i + "-" + n[0].tagName.toLowerCase()
        }
    }
}(jQuery), function (t) {
    var e, n = t();
    t.fn.sortable = function (i) {
        var r = String(i);
        return i = t.extend({ connectWith: !1 }, i), this.each(function () {
            if (/^enable|disable|destroy$/.test(r)) {
                var o = t(this).children(t(this).data("items")).attr("draggable", "enable" == r);
                return void ("destroy" == r && o.add(this).removeData("connectWith items").off("dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s"))
            }
            var a, s, o = t(this).children(i.items), l = t("<" + (/^ul|ol$/i.test(this.tagName) ? "li" : "div") + ' class="sortable-placeholder">');
            o.find(i.handle).mousedown(function () {
                a = !0
            }).mouseup(function () {
                a = !1
            }), t(this).data("items", i.items), n = n.add(l), i.connectWith && t(i.connectWith).add(this).data("connectWith", i.connectWith), o.attr("draggable", "true").on("dragstart.h5s", function (n) {
                if (i.handle && !a)
                    return !1;
                a = !1;
                var r = n.originalEvent.dataTransfer;
                r.effectAllowed = "move", r.setData("Text", "dummy"), s = (e = t(this)).addClass("sortable-dragging").index()
            }).on("dragend.h5s", function () {
                e && (e.removeClass("sortable-dragging").show(), n.detach(), s != e.index() && e.parent().trigger("sortupdate", { item: e }), e = null)
            }).not("a[href], img").on("selectstart.h5s", function () {
                return this.dragDrop && this.dragDrop(), !1
            }).end().add([this, l]).on("dragover.h5s dragenter.h5s drop.h5s", function (r) {
                return o.is(e) || i.connectWith === t(e).parent().data("connectWith") ? "drop" == r.type ? (r.stopPropagation(), n.filter(":visible").after(e), e.trigger("dragend.h5s"), !1) : (r.preventDefault(), r.originalEvent.dataTransfer.dropEffect = "move", o.is(this) ? (i.forcePlaceholderSize && l.height(e.outerHeight()), e.hide(), t(this)[l.index() < t(this).index() ? "after" : "before"](l), n.not(l).detach()) : n.is(this) || t(this).children(i.items).length || (n.detach(), t(this).append(l)), !1) : !0
            })
        })
    }
}(jQuery), function (t) {
    var e = {};
    t.fn.railsAutocomplete = function () {
        var n = function () {
            this.railsAutoCompleter || (this.railsAutoCompleter = new t.railsAutocomplete(this))
        };
        return e[this.selector.replace("#", "")] = arguments[0], void 0 !== t.fn.on ? $(document).on("focus", this.selector, n) : this.live("focus", n)
    }, t.railsAutocomplete = function (t) {
        _e = t, this.init(_e)
    }, t.railsAutocomplete.fn = t.railsAutocomplete.prototype = { railsAutocomplete: "0.0.1" }, t.railsAutocomplete.fn.extend = t.railsAutocomplete.extend = t.extend, t.railsAutocomplete.fn.extend({
        init: function (n) {
            function i(t) {
                return t.split(n.delimiter)
            }
            function r(t) {
                return i(t).pop().replace(/^\s+/, "")
            }
            n.delimiter = t(n).attr("data-delimiter") || null, t(n).autocomplete($.extend({
                source: function (e, i) {
                    t.getJSON(t(n).attr("data-autocomplete"), { term: r(e.term) }, function () {
                        0 == arguments[0].length && (arguments[0] = [], arguments[0][0] = { id: "", label: "no existing match" }), t(arguments[0]).each(function (e, i) {
                            var r = {};
                            r[i.id] = i, t(n).data(r)
                        }), i.apply(null, arguments)
                    })
                }, change: function (e, n) {
                    if ("" != t(t(this).attr("data-id-element")).val()) {
                        t(t(this).attr("data-id-element")).val(n.item ? n.item.id : "");
                        var i = t.parseJSON(t(this).attr("data-update-elements")), r = n.item ? t(this).data(n.item.id.toString()) : {};
                        if (!i || "" != t(i.id).val())
                            for (var o in i)
                                t(i[o]).val(n.item ? r[o] : "")
                    }
                }, search: function () {
                    var t = r(this.value);
                    return t.length < 2 ? !1 : void 0
                }, focus: function () {
                    return !1
                }, select: function (e, r) {
                    var o = i(this.value);
                    if (o.pop(), o.push(r.item.value), null != n.delimiter)
                        o.push(""), this.value = o.join(n.delimiter);
                    else if (this.value = o.join(""), t(this).attr("data-id-element") && t(t(this).attr("data-id-element")).val(r.item.id), t(this).attr("data-update-elements")) {
                        var a = t(this).data(r.item.id.toString()), s = t.parseJSON(t(this).attr("data-update-elements"));
                        for (var l in s)
                            t(s[l]).val(a[l])
                    }
                    var u = this.value;
                    return t(this).bind("keyup.clearId", function () {
                        t(this).val().trim() != u.trim() && (t(t(this).attr("data-id-element")).val(""), t(this).unbind("keyup.clearId"))
                    }), t(n).trigger("railsAutocomplete.select", r), !1
                }
            }, e[n.id]))
        }
    }), t(document).ready(function () {
        t("input[data-autocomplete]").railsAutocomplete()
    })
}(jQuery);
var Note = {
    highlight_code: !1, init: function () {
        $("pre").each(function () {
            $(this).addClass("prettyprint"), $(this).find("code").length <= 0 && $(this).html("<code>" + $(this).html() + "</code>")
        }), $("pre br").remove(), Note.highlight_code && $("pre code").each(function (t, e) {
            hljs.highlightBlock(e)
        }), $("#toc").toc({ selectors: "h1,h2,h3", container: ".content", highlightOffset: 100, smoothScrolling: !0 }), 0 == $("#toc ul li").length && $("#toc").empty().html("<p>\u672c\u6587\u65e0\u76ee\u5f55</p>"), $("#font-small").bind("click", function () {
            $(".note .content").removeClass("font-medium").removeClass("font-large").addClass("font-small"), $(".article-fonts a").removeClass("active"), $("#font-small").addClass("active")
        }), $("#font-medium").bind("click", function () {
            $(".note .content").removeClass("font-small").removeClass("font-large").addClass("font-medium"), $(".article-fonts a").removeClass("active"), $("#font-medium").addClass("active")
        }), $("#font-large").bind("click", function () {
            $(".note .content").removeClass("font-medium").removeClass("font-small").addClass("font-large"), $(".article-fonts a").removeClass("active"), $("#font-large").addClass("active")
        })
    }, markdown_render: function () {
        $(".wmd-output").each(function () {
            var t = Markdown.getSanitizingConverter();
            Markdown.Extra.init(t, { highlighter: "prettify" }), t.hooks.chain("preBlockGamut", function (t, e) {
                return t.replace(/^ {0,3}""" *\n((?:.*?\n)+?) {0,3}""" *$/gm, function (t, n) {
                    return "<blockquote>" + e(n) + "</blockquote>\n"
                })
            });
            var e = $(this).text();
            $(this).html(t.makeHtml(e))
        })
    }
};