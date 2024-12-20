function rotateBackgroundAndText() { var t = $(".bg"),
        o = t.clone().removeClass("active").insertAfter(t);
    $(".bg").interactive_bg({ animationSpeed: "250ms" });
    $(window).resize(function() { $(".bg > .ibg-bg").css({ width: $(window).outerWidth(), height: $(window).outerHeight() }) });
    $(".rotate").textrotator({ animation: "dissolve", separator: ",", speed: 4e3 }); var n = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"],
        i = Math.floor(Math.random() * 10) % n.length,
        u = "./images/",
        f = function() { var t = i + 1; return t >= n.length && (t = 0), i = t, t },
        r = function(t) { var i = f(),
                r = u + n[i];
            $(t).children(".ibg-bg").css("background-image", "url(" + r + ")") },
        e = function() { var n, t;
            $(".bg").each(function() { $(this).hasClass("active") ? n = $(this) : t = $(this) });
            n.fadeOut(1e3, function() { n.removeClass("active").show(10, function() { r(n.get(0)) });
                t.addClass("active") }) };
    $(".bg").each(function() { r(this) });
    setInterval(e, 4e3) }

function toggleMenu() { isOpen ? classie.remove(bodyEl, "show-menu") : classie.add(bodyEl, "show-menu");
    isOpen = !isOpen }

function initMenuEvents() { content && openbtn && (openbtn.addEventListener("click", toggleMenu), closebtn && closebtn.addEventListener("click", toggleMenu), content.addEventListener("click", function(n) { var t = n.target;
        isOpen && t !== openbtn && toggleMenu() })) }! function(n, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) { if (!n.document) throw new Error("jQuery requires a window with a document"); return t(n) } : t(n) }("undefined" != typeof window ? window : this, function(n, t) {
    function ri(n) { var t = "length" in n && n.length,
            r = i.type(n); return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n }

    function ui(n, t, r) { if (i.isFunction(t)) return i.grep(n, function(n, i) { return !!t.call(n, i, n) !== r }); if (t.nodeType) return i.grep(n, function(n) { return n === t !== r }); if ("string" == typeof t) { if (ef.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n) } return i.grep(n, function(n) { return ft.call(t, n) >= 0 !== r }) }

    function ur(n, t) { while ((n = n[t]) && 1 !== n.nodeType); return n }

    function of(n) { var t = fi[n] = {}; return i.each(n.match(c) || [], function(n, i) { t[i] = !0 }), t }

    function ht() { u.removeEventListener("DOMContentLoaded", ht, !1);
        n.removeEventListener("load", ht, !1);
        i.ready() }

    function v() { Object.defineProperty(this.cache = {}, 0, { get: function() { return {} } });
        this.expando = i.expando + v.uid++ }

    function fr(n, t, r) { var u; if (void 0 === r && 1 === n.nodeType)
            if (u = "data-" + t.replace(hf, "-$1").toLowerCase(), r = n.getAttribute(u), "string" == typeof r) { try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : sf.test(r) ? i.parseJSON(r) : r } catch (f) {}
                e.set(n, t, r) } else r = void 0;
        return r }

    function lt() { return !0 }

    function k() { return !1 }

    function hr() { try { return u.activeElement } catch (n) {} }

    function vr(n, t) { return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n }

    function bf(n) { return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n }

    function kf(n) { var t = pf.exec(n.type); return t ? n.type = t[1] : n.removeAttribute("type"), n }

    function ei(n, t) { for (var i = 0, u = n.length; u > i; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval")) }

    function yr(n, t) { var u, c, f, s, h, l, a, o; if (1 === t.nodeType) { if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) { delete h.handle;
                h.events = {}; for (f in o)
                    for (u = 0, c = o[f].length; c > u; u++) i.event.add(t, f, o[f][u]) }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a)) } }

    function o(n, t) { var r = n.getElementsByTagName ? n.getElementsByTagName(t || "*") : n.querySelectorAll ? n.querySelectorAll(t || "*") : []; return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r }

    function df(n, t) { var i = t.nodeName.toLowerCase(); "input" === i && er.test(n.type) ? t.checked = n.checked : ("input" === i || "textarea" === i) && (t.defaultValue = n.defaultValue) }

    function pr(t, r) { var f, u = i(r.createElement(t)).appendTo(r.body),
            e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display"); return u.detach(), e }

    function si(n) { var r = u,
            t = oi[n]; return t || (t = pr(n, r), "none" !== t && t || (at = (at || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = at[0].contentDocument, r.write(), r.close(), t = pr(n, r), at.detach()), oi[n] = t), t }

    function it(n, t, r) { var e, o, s, u, f = n.style; return r = r || vt(n), r && (u = r.getPropertyValue(t) || r[t]), r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), hi.test(u) && wr.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 !== u ? u + "" : u }

    function br(n, t) { return { get: function() { return n() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function gr(n, t) { if (t in n) return t; for (var r = t[0].toUpperCase() + t.slice(1), u = t, i = dr.length; i--;)
            if (t = dr[i] + r, t in n) return t;
        return u }

    function nu(n, t, i) { var r = ne.exec(t); return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t }

    function tu(n, t, r, u, f) { for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + p[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f))); return o }

    function iu(n, t, r) { var o = !0,
            u = "width" === t ? n.offsetWidth : n.offsetHeight,
            e = vt(n),
            s = "border-box" === i.css(n, "boxSizing", !1, e); if (0 >= u || null == u) { if (u = it(n, t, e), (0 > u || null == u) && (u = n.style[t]), hi.test(u)) return u;
            o = s && (f.boxSizingReliable() || u === n.style[t]);
            u = parseFloat(u) || 0 } return u + tu(n, t, r || (s ? "border" : "content"), o, e) + "px" }

    function ru(n, t) { for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++) u = n[f], u.style && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || "none" !== e || (u.style.display = ""), "" === u.style.display && tt(u) && (o[f] = r.access(u, "olddisplay", si(u.nodeName)))) : (s = tt(u), "none" === e && s || r.set(u, "olddisplay", s ? e : i.css(u, "display")))); for (f = 0; h > f; f++) u = n[f], u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none")); return n }

    function s(n, t, i, r, u) { return new s.prototype.init(n, t, i, r, u) }

    function fu() { return setTimeout(function() { d = void 0 }), d = i.now() }

    function wt(n, t) { var r, u = 0,
            i = { height: n }; for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = p[u], i["margin" + r] = i["padding" + r] = n; return t && (i.opacity = i.width = n), i }

    function eu(n, t, i) { for (var u, f = (rt[t] || []).concat(rt["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n)) return u }

    function fe(n, t, u) { var f, a, p, v, o, w, h, b, l = this,
            y = {},
            s = n.style,
            c = n.nodeType && tt(n),
            e = r.get(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function() { o.unqueued || w() }), o.unqueued++, l.always(function() { l.always(function() { o.unqueued--;
                i.queue(n, "fx").length || o.empty.fire() }) }));
        1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = "none" === h ? r.get(n, "olddisplay") || si(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (s.display = "inline-block"));
        u.overflow && (s.overflow = "hidden", l.always(function() { s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2] })); for (f in t)
            if (a = t[f], re.exec(a)) { if (delete t[f], p = p || "toggle" === a, a === (c ? "hide" : "show")) { if ("show" !== a || !e || void 0 === e[f]) continue;
                    c = !0 }
                y[f] = e && e[f] || i.style(n, f) } else h = void 0;
        if (i.isEmptyObject(y)) "inline" === ("none" === h ? si(n.nodeName) : h) && (s.display = h);
        else { e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() { i(n).hide() });
            l.done(function() { var t;
                r.remove(n, "fxshow"); for (t in y) i.style(n, t, y[t]) }); for (f in y) v = eu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0)) } }

    function ee(n, t) { var r, f, e, u, o; for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) { u = o.expand(u);
                delete n[f]; for (r in u) r in n || (n[r] = u[r], t[r] = e) } else t[f] = e }

    function ou(n, t, r) { var h, e, o = 0,
            l = pt.length,
            f = i.Deferred().always(function() { delete c.elem }),
            c = function() { if (e) return !1; for (var s = d || fu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i); return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1) },
            u = f.promise({ elem: n, props: i.extend({}, t), opts: i.extend(!0, { specialEasing: {} }, r), originalProperties: t, originalOptions: r, startTime: d || fu(), duration: r.duration, tweens: [], createTween: function(t, r) { var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(f), f }, stop: function(t) { var i = 0,
                        r = t ? u.tweens.length : 0; if (e) return this; for (e = !0; r > i; i++) u.tweens[i].run(1); return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this } }),
            s = u.props; for (ee(s, u.opts.specialEasing); l > o; o++)
            if (h = pt[o].call(u, n, s, u.opts)) return h;
        return i.map(s, eu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, { elem: n, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

    function pu(n) { return function(t, r) { "string" != typeof t && (r = t, t = "*"); var u, f = 0,
                e = t.toLowerCase().match(c) || []; if (i.isFunction(r))
                while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r) } }

    function wu(n, t, r, u) {
        function e(s) { var h; return f[s] = !0, i.each(n[s] || [], function(n, i) { var s = i(t, r, u); return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1) }), h } var f = {},
            o = n === ci; return e(t.dataTypes[0]) || !f["*"] && e("*") }

    function ai(n, t) { var r, u, f = i.ajaxSettings.flatOptions || {}; for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]); return u && i.extend(!0, n, u), n }

    function ae(n, t, i) { for (var e, u, f, o, s = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type")); if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) { r.unshift(u); break }
        if (r[0] in i) f = r[0];
        else { for (u in i) { if (!r[0] || n.converters[u + " " + r[0]]) { f = u; break }
                o || (o = u) }
            f = f || o } if (f) return (f !== r[0] && r.unshift(f), i[f]) }

    function ve(n, t, i, r) { var h, u, f, s, e, o = {},
            c = n.dataTypes.slice(); if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f]; for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) { if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) { f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1])); break }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try { t = f(t) } catch (l) { return { state: "parsererror", error: f ? l : "No conversion from " + e + " to " + u } } } return { state: "success", data: t } }

    function vi(n, t, r, u) { var f; if (i.isArray(t)) i.each(t, function(t, i) { r || pe.test(n) ? u(n, i) : vi(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u) });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) vi(n + "[" + f + "]", t[f], r, u) }

    function ku(n) { return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView } var w = [],
        a = w.slice,
        bi = w.concat,
        ti = w.push,
        ft = w.indexOf,
        et = {},
        nf = et.toString,
        ii = et.hasOwnProperty,
        f = {},
        u = n.document,
        ki = "2.1.4",
        i = function(n, t) { return new i.fn.init(n, t) },
        tf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rf = /^-ms-/,
        uf = /-([\da-z])/gi,
        ff = function(n, t) { return t.toUpperCase() },
        y, ot, nr, tr, ir, rr, c, fi, st, l, b, at, oi, oe, su, g, hu, bt, cu, kt, dt, yi, ni, pi, wi, du, gu;
    i.fn = i.prototype = { jquery: ki, constructor: i, selector: "", length: 0, toArray: function() { return a.call(this) }, get: function(n) { return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this) }, pushStack: function(n) { var t = i.merge(this.constructor(), n); return t.prevObject = this, t.context = this.context, t }, each: function(n, t) { return i.each(this, n, t) }, map: function(n) { return this.pushStack(i.map(this, function(t, i) { return n.call(t, i, t) })) }, slice: function() { return this.pushStack(a.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(n) { var i = this.length,
                t = +n + (0 > n ? i : 0); return this.pushStack(t >= 0 && i > t ? [this[t]] : []) }, end: function() { return this.prevObject || this.constructor(null) }, push: ti, sort: w.sort, splice: w.splice };
    i.extend = i.fn.extend = function() { var e, f, r, t, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1; for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
            if (null != (e = arguments[u]))
                for (f in e) r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n };
    i.extend({ expando: "jQuery" + (ki + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(n) { throw new Error(n); }, noop: function() {}, isFunction: function(n) { return "function" === i.type(n) }, isArray: Array.isArray, isWindow: function(n) { return null != n && n === n.window }, isNumeric: function(n) { return !i.isArray(n) && n - parseFloat(n) + 1 >= 0 }, isPlainObject: function(n) { return "object" !== i.type(n) || n.nodeType || i.isWindow(n) ? !1 : n.constructor && !ii.call(n.constructor.prototype, "isPrototypeOf") ? !1 : !0 }, isEmptyObject: function(n) { for (var t in n) return !1; return !0 }, type: function(n) { return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? et[nf.call(n)] || "object" : typeof n }, globalEval: function(n) { var t, r = eval;
            n = i.trim(n);
            n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n)) }, camelCase: function(n) { return n.replace(rf, "ms-").replace(uf, ff) }, nodeName: function(n, t) { return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase() }, each: function(n, t, i) { var u, r = 0,
                f = n.length,
                e = ri(n); if (i) { if (e) { for (; f > r; r++)
                        if (u = t.apply(n[r], i), u === !1) break } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1) break } else if (e) { for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1) break } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1) break; return n }, trim: function(n) { return null == n ? "" : (n + "").replace(tf, "") }, makeArray: function(n, t) { var r = t || []; return null != n && (ri(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)), r }, inArray: function(n, t, i) { return null == t ? -1 : ft.call(t, n, i) }, merge: function(n, t) { for (var u = +t.length, i = 0, r = n.length; u > i; i++) n[r++] = t[i]; return n.length = r, n }, grep: function(n, t, i) { for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]); return f }, map: function(n, t, i) { var u, r = 0,
                e = n.length,
                o = ri(n),
                f = []; if (o)
                for (; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), null != u && f.push(u); return bi.apply([], f) }, guid: 1, proxy: function(n, t) { var u, f, r; return "string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n) ? (f = a.call(arguments, 2), r = function() { return n.apply(t || this, f.concat(a.call(arguments))) }, r.guid = n.guid = n.guid || i.guid++, r) : void 0 }, now: Date.now, support: f });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) { et["[object " + t + "]"] = t.toLowerCase() });
    y = function(n) {
        function r(n, t, i, r) { var p, s, a, c, w, y, d, v, nt, g; if ((t ? t.ownerDocument || t : h) !== o && k(t), t = t || o, i = i || [], c = t.nodeType, "string" != typeof n || !n || 1 !== c && 9 !== c && 11 !== c) return i; if (!r && l) { if (11 !== c && (p = hr.exec(n)))
                    if (a = p[1]) { if (9 === c) { if (s = t.getElementById(a), !s || !s.parentNode) return i; if (s.id === a) return i.push(s), i } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && et(t, s) && s.id === a) return i.push(s), i } else { if (p[2]) return b.apply(i, t.getElementsByTagName(n)), i; if ((a = p[3]) && u.getElementsByClassName) return b.apply(i, t.getElementsByClassName(a)), i }
                if (u.qsa && (!e || !e.test(n))) { if (v = d = f, nt = t, g = 1 !== c && n, 1 === c && "object" !== t.nodeName.toLowerCase()) { for (y = ft(n), (d = t.getAttribute("id")) ? v = d.replace(cr, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", w = y.length; w--;) y[w] = v + vt(y[w]);
                        nt = dt.test(n) && ti(t.parentNode) || t;
                        g = y.join(",") } if (g) try { return b.apply(i, nt.querySelectorAll(g)), i } catch (tt) {} finally { d || t.removeAttribute("id") } } } return oi(n.replace(lt, "$1"), t, i, r) }

        function gt() {
            function n(r, u) { return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u } var i = []; return n }

        function c(n) { return n[f] = !0, n }

        function v(n) { var t = o.createElement("div"); try { return !!n(t) } catch (i) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t);
                t = null } }

        function ni(n, i) { for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i }

        function wi(n, t) { var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li); if (r) return r; if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1 }

        function lr(n) { return function(t) { var i = t.nodeName.toLowerCase(); return "input" === i && t.type === n } }

        function ar(n) { return function(t) { var i = t.nodeName.toLowerCase(); return ("input" === i || "button" === i) && t.type === n } }

        function tt(n) { return c(function(t) { return t = +t, c(function(i, r) { for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u])) }) }) }

        function ti(n) { return n && "undefined" != typeof n.getElementsByTagName && n }

        function bi() {}

        function vt(n) { for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value; return i }

        function ii(n, t, i) { var r = t.dir,
                u = i && "parentNode" === r,
                e = ki++; return t.first ? function(t, i, f) { while (t = t[r])
                    if (1 === t.nodeType || u) return n(t, i, f) } : function(t, i, o) { var s, h, c = [a, e]; if (o) { while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, o)) return !0 } else
                    while (t = t[r])
                        if (1 === t.nodeType || u) { if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e) return c[2] = s[2]; if (h[r] = c, c[2] = n(t, i, o)) return !0 } } }

        function ri(n) { return n.length > 1 ? function(t, i, r) { for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0 } : n[0] }

        function vr(n, t, i) { for (var u = 0, f = t.length; f > u; u++) r(n, t[u], i); return i }

        function yt(n, t, i, r, u) { for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f)); return o }

        function ui(n, t, i, r, u, e) { return r && !r[f] && (r = ui(r)), u && !u[f] && (u = ui(u, e)), c(function(f, e, o, s) { var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    k = f || vr(t || "*", o.nodeType ? [o] : o, []),
                    v = !n || !f && t ? k : yt(k, p, n, o, s),
                    h = i ? u || (f ? n : w || r) ? [] : e : v; if (i && i(v, h, o, s), r)
                    for (l = yt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a)); if (f) { if (u || n) { if (u) { for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s) } for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a)) } } else h = yt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h) }) }

        function fi(n) { for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ii(function(n) { return n === o }, c, !0), a = ii(function(n) { return nt(o, n) > -1 }, c, !0), e = [function(n, t, i) { var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i)); return o = null, r }]; s > i; i++)
                if (u = t.relative[n[i].type]) e = [ii(ri(e), u)];
                else { if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) { for (r = ++i; s > r; r++)
                            if (t.relative[n[r].type]) break;
                        return ui(i > 1 && ri(e), i > 1 && vt(n.slice(0, i - 1).concat({ value: " " === n[i - 2].type ? "*" : "" })).replace(lt, "$1"), u, r > i && fi(n.slice(i, r)), s > r && fi(n = n.slice(r)), s > r && vt(n)) }
                    e.push(u) }
            return ri(e) }

        function yr(n, i) { var u = i.length > 0,
                f = n.length > 0,
                e = function(e, s, h, c, l) { var y, d, w, k = 0,
                        v = "0",
                        g = e && [],
                        p = [],
                        nt = ht,
                        tt = e || f && t.find.TAG("*", l),
                        it = a += null == nt ? 1 : Math.random() || .1,
                        rt = tt.length; for (l && (ht = s !== o && s); v !== rt && null != (y = tt[v]); v++) { if (f && y) { for (d = 0; w = n[d++];)
                                if (w(y, s, h)) { c.push(y); break }
                            l && (a = it) }
                        u && ((y = !w && y) && k--, e && g.push(y)) } if (k += v, u && v !== k) { for (d = 0; w = i[d++];) w(g, p, s, h); if (e) { if (k > 0)
                                while (v--) g[v] || p[v] || (p[v] = gi.call(c));
                            p = yt(p) }
                        b.apply(c, p);
                        l && !e && p.length > 0 && k + i.length > 1 && r.uniqueSort(c) } return l && (a = it, ht = nt), g }; return u ? c(e) : e } var it, u, t, st, ei, ft, pt, oi, ht, w, rt, k, o, s, l, e, d, ct, et, f = "sizzle" + 1 * new Date,
            h = n.document,
            a = 0,
            ki = 0,
            si = gt(),
            hi = gt(),
            ci = gt(),
            wt = function(n, t) { return n === t && (rt = !0), 0 },
            li = -2147483648,
            di = {}.hasOwnProperty,
            g = [],
            gi = g.pop,
            nr = g.push,
            b = g.push,
            ai = g.slice,
            nt = function(n, t) { for (var i = 0, r = n.length; r > i; i++)
                    if (n[i] === t) return i;
                return -1 },
            bt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            i = "[\\x20\\t\\r\\n\\f]",
            ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            vi = ut.replace("w", "w#"),
            yi = "\\[" + i + "*(" + ut + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + vi + "))|)" + i + "*\\]",
            kt = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + yi + ")*)|.*)\\)|)",
            tr = new RegExp(i + "+", "g"),
            lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
            ir = new RegExp("^" + i + "*," + i + "*"),
            rr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
            ur = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
            fr = new RegExp(kt),
            er = new RegExp("^" + vi + "$"),
            at = { ID: new RegExp("^#(" + ut + ")"), CLASS: new RegExp("^\\.(" + ut + ")"), TAG: new RegExp("^(" + ut.replace("w", "w*") + ")"), ATTR: new RegExp("^" + yi), PSEUDO: new RegExp("^" + kt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"), bool: new RegExp("^(?:" + bt + ")$", "i"), needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i") },
            or = /^(?:input|select|textarea|button)$/i,
            sr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            hr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            dt = /[+~]/,
            cr = /'|\\/g,
            y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
            p = function(n, t, i) { var r = "0x" + t - 65536; return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            pi = function() { k() }; try { b.apply(g = ai.call(h.childNodes), h.childNodes);
            g[h.childNodes.length].nodeType } catch (pr) { b = { apply: g.length ? function(n, t) { nr.apply(n, ai.call(t)) } : function(n, t) { for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1 } } }
        u = r.support = {};
        ei = r.isXML = function(n) { var t = n && (n.ownerDocument || n).documentElement; return t ? "HTML" !== t.nodeName : !1 };
        k = r.setDocument = function(n) { var a, c, r = n ? n.ownerDocument || n : h; return r !== o && 9 === r.nodeType && r.documentElement ? (o = r, s = r.documentElement, c = r.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", pi, !1) : c.attachEvent && c.attachEvent("onunload", pi)), l = !ei(r), u.attributes = v(function(n) { return n.className = "i", !n.getAttribute("className") }), u.getElementsByTagName = v(function(n) { return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length }), u.getElementsByClassName = ot.test(r.getElementsByClassName), u.getById = v(function(n) { return s.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length }), u.getById ? (t.find.ID = function(n, t) { if ("undefined" != typeof t.getElementById && l) { var i = t.getElementById(n); return i && i.parentNode ? [i] : [] } }, t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { return n.getAttribute("id") === t } }) : (delete t.find.ID, t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id"); return i && i.value === t } }), t.find.TAG = u.getElementsByTagName ? function(n, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(n) : void 0 } : function(n, t) { var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n); if ("*" === n) { while (i = u[f++]) 1 === i.nodeType && r.push(i); return r } return u }, t.find.CLASS = u.getElementsByClassName && function(n, t) { if (l) return t.getElementsByClassName(n) }, d = [], e = [], (u.qsa = ot.test(r.querySelectorAll)) && (v(function(n) { s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\f]' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && e.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || e.push("\\[" + i + "*(?:value|" + bt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || e.push("~=");
                n.querySelectorAll(":checked").length || e.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || e.push(".#.+[+~]") }), v(function(n) { var t = r.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && e.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                e.push(",.*:") })), (u.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && v(function(n) { u.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                d.push("!=", kt) }), e = e.length && new RegExp(e.join("|")), d = d.length && new RegExp(d.join("|")), a = ot.test(s.compareDocumentPosition), et = a || ot.test(s.contains) ? function(n, t) { var r = 9 === n.nodeType ? n.documentElement : n,
                    i = t && t.parentNode; return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i))) } : function(n, t) { if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1 }, wt = a ? function(n, t) { if (n === t) return rt = !0, 0; var i = !n.compareDocumentPosition - !t.compareDocumentPosition; return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !u.sortDetached && t.compareDocumentPosition(n) === i ? n === r || n.ownerDocument === h && et(h, n) ? -1 : t === r || t.ownerDocument === h && et(h, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & i ? -1 : 1) } : function(n, t) { if (n === t) return rt = !0, 0; var i, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t]; if (!o || !s) return n === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0; if (o === s) return wi(n, t); for (i = n; i = i.parentNode;) f.unshift(i); for (i = t; i = i.parentNode;) e.unshift(i); while (f[u] === e[u]) u++; return u ? wi(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0 }, r) : o };
        r.matches = function(n, t) { return r(n, null, null, t) };
        r.matchesSelector = function(n, t) { if ((n.ownerDocument || n) !== o && k(n), t = t.replace(ur, "='$1']"), !(!u.matchesSelector || !l || d && d.test(t) || e && e.test(t))) try { var i = ct.call(n, t); if (i || u.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i } catch (f) {}
            return r(t, o, null, [n]).length > 0 };
        r.contains = function(n, t) { return (n.ownerDocument || n) !== o && k(n), et(n, t) };
        r.attr = function(n, i) {
            (n.ownerDocument || n) !== o && k(n); var f = t.attrHandle[i.toLowerCase()],
                r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : void 0; return void 0 !== r ? r : u.attributes || !l ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null };
        r.error = function(n) { throw new Error("Syntax error, unrecognized expression: " + n); };
        r.uniqueSort = function(n) { var r, f = [],
                t = 0,
                i = 0; if (rt = !u.detectDuplicates, w = !u.sortStable && n.slice(0), n.sort(wt), rt) { while (r = n[i++]) r === n[i] && (t = f.push(i)); while (t--) n.splice(f[t], 1) } return w = null, n };
        st = r.getText = function(n) { var r, i = "",
                u = 0,
                t = n.nodeType; if (t) { if (1 === t || 9 === t || 11 === t) { if ("string" == typeof n.textContent) return n.textContent; for (n = n.firstChild; n; n = n.nextSibling) i += st(n) } else if (3 === t || 4 === t) return n.nodeValue } else
                while (r = n[u++]) i += st(r); return i };
        t = r.selectors = { cacheLength: 50, createPseudo: c, match: at, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(n) { return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4) }, CHILD: function(n) { return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]), n }, PSEUDO: function(n) { var i, t = !n[6] && n[2]; return at.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3)) } }, filter: { TAG: function(n) { var t = n.replace(y, p).toLowerCase(); return "*" === n ? function() { return !0 } : function(n) { return n.nodeName && n.nodeName.toLowerCase() === t } }, CLASS: function(n) { var t = si[n + " "]; return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) { return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "") }) }, ATTR: function(n, t, i) { return function(u) { var f = r.attr(u, n); return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0 } }, CHILD: function(n, t, i, r, u) { var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        e = "of-type" === t; return 1 === r && 0 === u ? function(n) { return !!n.parentNode } : function(t, i, h) { var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                            p = t.parentNode,
                            g = e && t.nodeName.toLowerCase(),
                            d = !h && !e; if (p) { if (s) { while (b) { for (c = t; c = c[b];)
                                        if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    w = b = "only" === n && !w && "nextSibling" } return !0 } if (w = [o ? p.firstChild : p.lastChild], o && d) { for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                    if (1 === c.nodeType && ++l && c === t) { k[n] = [a, y, l]; break } } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a) l = v[1];
                            else
                                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t)) break; return l -= u, l === r || l % r == 0 && l / r >= 0 } } }, PSEUDO: function(n, i) { var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n); return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, t) { for (var r, f = u(n, i), e = f.length; e--;) r = nt(n, f[e]), n[r] = !(t[r] = f[e]) }) : function(n) { return u(n, 0, e) }) : u } }, pseudos: { not: c(function(n) { var t = [],
                        r = [],
                        i = pt(n.replace(lt, "$1")); return i[f] ? c(function(n, t, r, u) { for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e)) }) : function(n, u, f) { return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop() } }), has: c(function(n) { return function(t) { return r(n, t).length > 0 } }), contains: c(function(n) { return n = n.replace(y, p),
                        function(t) { return (t.textContent || t.innerText || st(t)).indexOf(n) > -1 } }), lang: c(function(n) { return er.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) { var i;
                            do
                                if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1 } }), target: function(t) { var i = n.location && n.location.hash; return i && i.slice(1) === t.id }, root: function(n) { return n === s }, focus: function(n) { return n === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(n.type || n.href || ~n.tabIndex) }, enabled: function(n) { return n.disabled === !1 }, disabled: function(n) { return n.disabled === !0 }, checked: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && !!n.checked || "option" === t && !!n.selected }, selected: function(n) { return n.parentNode && n.parentNode.selectedIndex, n.selected === !0 }, empty: function(n) { for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0 }, parent: function(n) { return !t.pseudos.empty(n) }, header: function(n) { return sr.test(n.nodeName) }, input: function(n) { return or.test(n.nodeName) }, button: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && "button" === n.type || "button" === t }, text: function(n) { var t; return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase()) }, first: tt(function() { return [0] }), last: tt(function(n, t) { return [t - 1] }), eq: tt(function(n, t, i) { return [0 > i ? i + t : i] }), even: tt(function(n, t) { for (var i = 0; t > i; i += 2) n.push(i); return n }), odd: tt(function(n, t) { for (var i = 1; t > i; i += 2) n.push(i); return n }), lt: tt(function(n, t, i) { for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r); return n }), gt: tt(function(n, t, i) { for (var r = 0 > i ? i + t : i; ++r < t;) n.push(r); return n }) } };
        t.pseudos.nth = t.pseudos.eq; for (it in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[it] = lr(it); for (it in { submit: !0, reset: !0 }) t.pseudos[it] = ar(it); return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = r.tokenize = function(n, i) { var e, f, s, o, u, h, c, l = hi[n + " "]; if (l) return i ? 0 : l.slice(0); for (u = n, h = [], c = t.preFilter; u;) {
                (!e || (f = ir.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
                e = !1;
                (f = rr.exec(u)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(lt, " ") }), u = u.slice(e.length)); for (o in t.filter)(f = at[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), u = u.slice(e.length)); if (!e) break } return i ? u.length : u ? r.error(n) : hi(n, h).slice(0) }, pt = r.compile = function(n, t) { var r, u = [],
                e = [],
                i = ci[n + " "]; if (!i) { for (t || (t = ft(n)), r = t.length; r--;) i = fi(t[r]), i[f] ? u.push(i) : e.push(i);
                i = ci(n, yr(e, u));
                i.selector = n } return i }, oi = r.select = function(n, i, r, f) { var s, e, o, a, v, c = "function" == typeof n && n,
                h = !f && ft(n = c.selector || n); if (r = r || [], 1 === h.length) { if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && u.getById && 9 === i.nodeType && l && t.relative[e[1].type]) { if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], !i) return r;
                    c && (i = i.parentNode);
                    n = n.slice(e.shift().value.length) } for (s = at.needsContext.test(n) ? 0 : e.length; s--;) { if (o = e[s], t.relative[a = o.type]) break; if ((v = t.find[a]) && (f = v(o.matches[0].replace(y, p), dt.test(e[0].type) && ti(i.parentNode) || i))) { if (e.splice(s, 1), n = f.length && vt(e), !n) return b.apply(r, f), r; break } } } return (c || pt(n, h))(f, i, !l, r, dt.test(n) && ti(i.parentNode) || i), r }, u.sortStable = f.split("").sort(wt).join("") === f, u.detectDuplicates = !!rt, k(), u.sortDetached = v(function(n) { return 1 & n.compareDocumentPosition(o.createElement("div")) }), v(function(n) { return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href") }) || ni("type|href|height|width", function(n, t, i) { if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), u.attributes && v(function(n) { return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value") }) || ni("value", function(n, t, i) { if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue }), v(function(n) { return null == n.getAttribute("disabled") }) || ni(bt, function(n, t, i) { var r; if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null }), r }(n);
    i.find = y;
    i.expr = y.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = y.uniqueSort;
    i.text = y.getText;
    i.isXMLDoc = y.isXML;
    i.contains = y.contains; var di = i.expr.match.needsContext,
        gi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ef = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) { var u = t[0]; return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) { return 1 === n.nodeType })) };
    i.fn.extend({ find: function(n) { var t, u = this.length,
                r = [],
                f = this; if ("string" != typeof n) return this.pushStack(i(n).filter(function() { for (t = 0; u > t; t++)
                    if (i.contains(f[t], this)) return !0 })); for (t = 0; u > t; t++) i.find(n, f[t], r); return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r }, filter: function(n) { return this.pushStack(ui(this, n || [], !1)) }, not: function(n) { return this.pushStack(ui(this, n || [], !0)) }, is: function(n) { return !!ui(this, "string" == typeof n && di.test(n) ? i(n) : n || [], !1).length } });
    nr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    tr = i.fn.init = function(n, t) { var r, f; if (!n) return this; if ("string" == typeof n) { if (r = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : nr.exec(n), !r || !r[1] && t) return !t || t.jquery ? (t || ot).find(n) : this.constructor(t).find(n); if (r[1]) { if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), gi.test(r[1]) && i.isPlainObject(t))
                    for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return f = u.getElementById(r[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = u, this.selector = n, this } return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof ot.ready ? ot.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this)) };
    tr.prototype = i.fn;
    ot = i(u);
    ir = /^(?:parents|prev(?:Until|All))/;
    rr = { children: !0, contents: !0, next: !0, prev: !0 };
    i.extend({ dir: function(n, t, r) { for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) { if (f && i(n).is(r)) break;
                    u.push(n) }
            return u }, sibling: function(n, t) { for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n); return i } });
    i.fn.extend({ has: function(n) { var t = i(n, this),
                r = t.length; return this.filter(function() { for (var n = 0; r > n; n++)
                    if (i.contains(this, t[n])) return !0 }) }, closest: function(n, t) { for (var r, f = 0, o = this.length, u = [], e = di.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) { u.push(r); break }
            return this.pushStack(u.length > 1 ? i.unique(u) : u) }, index: function(n) { return n ? "string" == typeof n ? ft.call(i(n), this[0]) : ft.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(n, t) { return this.pushStack(i.unique(i.merge(this.get(), i(n, t)))) }, addBack: function(n) { return this.add(null == n ? this.prevObject : this.prevObject.filter(n)) } });
    i.each({ parent: function(n) { var t = n.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(n) { return i.dir(n, "parentNode") }, parentsUntil: function(n, t, r) { return i.dir(n, "parentNode", r) }, next: function(n) { return ur(n, "nextSibling") }, prev: function(n) { return ur(n, "previousSibling") }, nextAll: function(n) { return i.dir(n, "nextSibling") }, prevAll: function(n) { return i.dir(n, "previousSibling") }, nextUntil: function(n, t, r) { return i.dir(n, "nextSibling", r) }, prevUntil: function(n, t, r) { return i.dir(n, "previousSibling", r) }, siblings: function(n) { return i.sibling((n.parentNode || {}).firstChild, n) }, children: function(n) { return i.sibling(n.firstChild) }, contents: function(n) { return n.contentDocument || i.merge([], n.childNodes) } }, function(n, t) { i.fn[n] = function(r, u) { var f = i.map(this, t, r); return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (rr[n] || i.unique(f), ir.test(n) && f.reverse()), this.pushStack(f) } });
    c = /\S+/g;
    fi = {};
    i.Callbacks = function(n) { n = "string" == typeof n ? fi[n] || of(n) : i.extend({}, n); var u, h, o, c, f, e, t = [],
            r = !n.once && [],
            l = function(i) { for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
                    if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) { u = !1; break }
                o = !1;
                t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable()) },
            s = { add: function() { if (t) { var r = t.length;! function e(r) { i.each(r, function(r, u) { var f = i.type(u); "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u) }) }(arguments);
                        o ? f = t.length : u && (c = r, l(u)) } return this }, remove: function() { return t && i.each(arguments, function(n, r) { for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (f >= u && f--, e >= u && e--) }), this }, has: function(n) { return n ? i.inArray(n, t) > -1 : !(!t || !t.length) }, empty: function() { return t = [], f = 0, this }, disable: function() { return t = r = u = void 0, this }, disabled: function() { return !t }, lock: function() { return r = void 0, u || s.disable(), this }, locked: function() { return !r }, fireWith: function(n, i) { return !t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this }, fire: function() { return s.fireWith(this, arguments), this }, fired: function() { return !!h } }; return s };
    i.extend({ Deferred: function(n) { var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = { state: function() { return f }, always: function() { return t.done(arguments).fail(arguments), this }, then: function() { var n = arguments; return i.Deferred(function(f) { i.each(u, function(u, e) { var o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() { var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments) }) });
                            n = null }).promise() }, promise: function(n) { return null != n ? i.extend(n, r) : r } },
                t = {}; return r.pipe = r.then, i.each(u, function(n, i) { var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() { f = o }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() { return t[i[0] + "With"](this === t ? r : this, arguments), this };
                t[i[0] + "With"] = e.fireWith }), r.promise(t), n && n.call(t, t), t }, when: function(n) { var t = 0,
                u = a.call(arguments),
                r = u.length,
                e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                f = 1 === e ? n : i.Deferred(),
                h = function(n, t, i) { return function(r) { t[n] = this;
                        i[n] = arguments.length > 1 ? a.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i) } },
                o, c, s; if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e; return e || f.resolveWith(s, u), f.promise() } });
    i.fn.ready = function(n) { return i.ready.promise().done(n), this };
    i.extend({ isReady: !1, readyWait: 1, holdReady: function(n) { n ? i.readyWait++ : i.ready(!0) }, ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (st.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))) } });
    i.ready.promise = function(t) { return st || (st = i.Deferred(), "complete" === u.readyState ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", ht, !1), n.addEventListener("load", ht, !1))), st.promise(t) };
    i.ready.promise();
    l = i.access = function(n, t, r, u, f, e, o) { var s = 0,
            c = n.length,
            h = null == r; if ("object" === i.type(r)) { f = !0; for (s in r) i.access(n, t, s, r[s], !0, e, o) } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) { return h.call(i(n), r) })), t))
            for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r))); return f ? n : h ? t.call(n) : c ? t(n[0], r) : e };
    i.acceptData = function(n) { return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType };
    v.uid = 1;
    v.accepts = i.acceptData;
    v.prototype = { key: function(n) { if (!v.accepts(n)) return 0; var r = {},
                t = n[this.expando]; if (!t) { t = v.uid++; try { r[this.expando] = { value: t };
                    Object.defineProperties(n, r) } catch (u) { r[this.expando] = t;
                    i.extend(n, r) } } return this.cache[t] || (this.cache[t] = {}), t }, set: function(n, t, r) { var f, e = this.key(n),
                u = this.cache[e]; if ("string" == typeof t) u[t] = r;
            else if (i.isEmptyObject(u)) i.extend(this.cache[e], t);
            else
                for (f in t) u[f] = t[f]; return u }, get: function(n, t) { var i = this.cache[this.key(n)]; return void 0 === t ? i : i[t] }, access: function(n, t, r) { var u; return void 0 === t || t && "string" == typeof t && void 0 === r ? (u = this.get(n, t), void 0 !== u ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), void 0 !== r ? r : t) }, remove: function(n, t) { var u, r, f, o = this.key(n),
                e = this.cache[o]; if (void 0 === t) this.cache[o] = {};
            else
                for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (f = i.camelCase(t), (t in e) ? r = [t, f] : (r = f, r = (r in e) ? [r] : r.match(c) || [])), u = r.length; u--;) delete e[r[u]] }, hasData: function(n) { return !i.isEmptyObject(this.cache[n[this.expando]] || {}) }, discard: function(n) { n[this.expando] && delete this.cache[n[this.expando]] } }; var r = new v,
        e = new v,
        sf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        hf = /([A-Z])/g;
    i.extend({ hasData: function(n) { return e.hasData(n) || r.hasData(n) }, data: function(n, t, i) { return e.access(n, t, i) }, removeData: function(n, t) { e.remove(n, t) }, _data: function(n, t, i) { return r.access(n, t, i) }, _removeData: function(n, t) { r.remove(n, t) } });
    i.fn.extend({ data: function(n, t) { var o, f, s, u = this[0],
                h = u && u.attributes; if (void 0 === n) { if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) { for (o = h.length; o--;) h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), fr(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0) } return s } return "object" == typeof n ? this.each(function() { e.set(this, n) }) : l(this, function(t) { var r, f = i.camelCase(n); if (u && void 0 === t) { if ((r = e.get(u, n), void 0 !== r) || (r = e.get(u, f), void 0 !== r) || (r = fr(u, f, void 0), void 0 !== r)) return r } else this.each(function() { var i = e.get(this, f);
                    e.set(this, f, t); - 1 !== n.indexOf("-") && void 0 !== i && e.set(this, n, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(n) { return this.each(function() { e.remove(this, n) }) } });
    i.extend({ queue: function(n, t, u) { var f; if (n) return (t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []) }, dequeue: function(n, t) { t = t || "fx"; var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() { i.dequeue(n, t) }; "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));!e && f && f.empty.fire() }, _queueHooks: function(n, t) { var u = t + "queueHooks"; return r.get(n, u) || r.access(n, u, { empty: i.Callbacks("once memory").add(function() { r.remove(n, [t + "queue", u]) }) }) } });
    i.fn.extend({ queue: function(n, t) { var r = 2; return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() { var r = i.queue(this, n, t);
                i._queueHooks(this, n); "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n) }) }, dequeue: function(n) { return this.each(function() { i.dequeue(this, n) }) }, clearQueue: function(n) { return this.queue(n || "fx", []) }, promise: function(n, t) { var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {--e || o.resolveWith(f, [f]) }; for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h)); return h(), o.promise(t) } }); var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        p = ["Top", "Right", "Bottom", "Left"],
        tt = function(n, t) { return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n) },
        er = /^(?:checkbox|radio)$/i;! function() { var i = u.createDocumentFragment(),
            n = i.appendChild(u.createElement("div")),
            t = u.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue }();
    b = "undefined";
    f.focusinBubbles = "onfocusin" in n; var cf = /^key/,
        lf = /^(?:mouse|pointer|contextmenu)|click/,
        or = /^(?:focusinfocus|focusoutblur)$/,
        sr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = { global: {}, add: function(n, t, u, f, e) { var v, y, w, p, k, h, s, l, o, d, g, a = r.get(n); if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) { if (typeof i !== b && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments) }), t = (t || "").match(c) || [""], k = t.length; k--;) w = sr.exec(t[k]) || [], o = g = w[1], d = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({ type: o, origType: g, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: d.join(".") }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, d, y) !== !1 || n.addEventListener && n.addEventListener(o, y, !1)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, h) : l.push(h), i.event.global[o] = !0) }, remove: function(n, t, u, f, e) { var p, k, h, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n); if (y && (v = y.events)) { for (t = (t || "").match(c) || [""], w = t.length; w--;)
                    if (h = sr.exec(t[w]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), o) { for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length; p--;) s = a[p], !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                        k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o]) } else
                        for (o in v) i.event.remove(n, o + t[w], u, f, !0);
                i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events")) } }, trigger: function(t, f, e, o) { var w, s, c, b, a, v, l, p = [e || u],
                h = ii.call(t, "type") ? t.type : t,
                y = ii.call(t, "namespace") ? t.namespace.split(".") : []; if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !or.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) { if (!o && !l.noBubble && !i.isWindow(e)) { for (b = l.delegateType || h, or.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n) } for (w = 0;
                    (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && i.acceptData(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault()); return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !i.acceptData(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result } }, dispatch: function(n) { n = i.event.fix(n); var o, s, e, u, t, h = [],
                c = a.call(arguments),
                l = (r.get(this, "events") || {})[n.type] || [],
                f = i.event.special[n.type] || {}; if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) { for (h = i.event.handlers.call(this, n, l), o = 0;
                    (u = h[o++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = u.elem, s = 0;
                        (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), void 0 !== e && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation())); return f.postDispatch && f.postDispatch.call(this, n), n.result } }, handlers: function(n, t) { var e, u, f, o, h = [],
                s = t.delegateCount,
                r = n.target; if (s && r.nodeType && (!n.button || "click" !== n.type))
                for (; r !== this; r = r.parentNode || this)
                    if (r.disabled !== !0 || "click" !== n.type) { for (u = [], e = 0; s > e; e++) o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                        u.length && h.push({ elem: r, handlers: u }) }
            return s < t.length && h.push({ elem: this, handlers: t.slice(s) }), h }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(n, t) { return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(n, t) { var e, i, r, f = t.button; return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n } }, fix: function(n) { if (n[i.expando]) return n; var f, e, o, r = n.type,
                s = n,
                t = this.fixHooks[r]; for (t || (this.fixHooks[r] = t = lf.test(r) ? this.mouseHooks : cf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;) e = o[f], n[e] = s[e]; return n.target || (n.target = u), 3 === n.target.nodeType && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== hr() && this.focus) return (this.focus(), !1) }, delegateType: "focusin" }, blur: { trigger: function() { if (this === hr() && this.blur) return (this.blur(), !1) }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && i.nodeName(this, "input")) return (this.click(), !1) }, _default: function(n) { return i.nodeName(n.target, "a") } }, beforeunload: { postDispatch: function(n) { void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result) } } }, simulate: function(n, t, r, u) { var f = i.extend(new i.Event, r, { type: n, isSimulated: !0, originalEvent: {} });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault() } };
    i.removeEvent = function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i, !1) };
    i.Event = function(n, t) { return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? lt : k) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t) };
    i.Event.prototype = { isDefaultPrevented: k, isPropagationStopped: k, isImmediatePropagationStopped: k, preventDefault: function() { var n = this.originalEvent;
            this.isDefaultPrevented = lt;
            n && n.preventDefault && n.preventDefault() }, stopPropagation: function() { var n = this.originalEvent;
            this.isPropagationStopped = lt;
            n && n.stopPropagation && n.stopPropagation() }, stopImmediatePropagation: function() { var n = this.originalEvent;
            this.isImmediatePropagationStopped = lt;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation() } };
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(n, t) { i.event.special[n] = { delegateType: t, bindType: t, handle: function(n) { var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj; return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u } } });
    f.focusinBubbles || i.each({ focus: "focusin", blur: "focusout" }, function(n, t) { var u = function(n) { i.event.simulate(t, n.target, i.event.fix(n), !0) };
        i.event.special[t] = { setup: function() { var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t)) } } });
    i.fn.extend({ on: function(n, t, r, u, f) { var e, o; if ("object" == typeof n) { "string" != typeof t && (r = r || t, t = void 0); for (o in n) this.on(o, t, r, n[o], f); return this } if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1) u = k;
            else if (!u) return this; return 1 === f && (e = u, u = function(n) { return i().off(n), e.apply(this, arguments) }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() { i.event.add(this, n, u, r, t) }) }, one: function(n, t, i, r) { return this.on(n, t, i, r, 1) }, off: function(n, t, r) { var u, f; if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this; if ("object" == typeof n) { for (f in n) this.off(f, t, n[f]); return this } return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = k), this.each(function() { i.event.remove(this, n, r, t) }) }, trigger: function(n, t) { return this.each(function() { i.event.trigger(n, t, this) }) }, triggerHandler: function(n, t) { var r = this[0]; if (r) return i.event.trigger(n, t, r, !0) } }); var cr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lr = /<([\w:]+)/,
        af = /<|&#?\w+;/,
        vf = /<(?:script|style|link)/i,
        yf = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ar = /^$|\/(?:java|ecma)script/i,
        pf = /^true\/(.*)/,
        wf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        h = { option: [1, "<select multiple='multiple'>", "<\/select>"], thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""] };
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    i.extend({ clone: function(n, t, r) { var u, c, s, e, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n); if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++) df(s[u], e[u]); if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++) yr(s[u], e[u]);
                else yr(n, h);
            return e = o(h, "script"), e.length > 0 && ei(e, !l && o(n, "script")), h }, buildFragment: function(n, t, r, u) { for (var f, e, y, l, p, a, s = t.createDocumentFragment(), v = [], c = 0, w = n.length; w > c; c++)
                if (f = n[c], f || 0 === f)
                    if ("object" === i.type(f)) i.merge(v, f.nodeType ? [f] : f);
                    else if (af.test(f)) { for (e = e || s.appendChild(t.createElement("div")), y = (lr.exec(f) || ["", ""])[1].toLowerCase(), l = h[y] || h._default, e.innerHTML = l[1] + f.replace(cr, "<$1><\/$2>") + l[2], a = l[0]; a--;) e = e.lastChild;
                i.merge(v, e.childNodes);
                e = s.firstChild;
                e.textContent = "" } else v.push(t.createTextNode(f)); for (s.textContent = "", c = 0; f = v[c++];)
                if ((!u || -1 === i.inArray(f, u)) && (p = i.contains(f.ownerDocument, f), e = o(s.appendChild(f), "script"), p && ei(e), r))
                    for (a = 0; f = e[a++];) ar.test(f.type || "") && r.push(f);
            return s }, cleanData: function(n) { for (var f, t, o, u, h = i.event.special, s = 0; void 0 !== (t = n[s]); s++) { if (i.acceptData(t) && (u = t[r.expando], u && (f = r.cache[u]))) { if (f.events)
                        for (o in f.events) h[o] ? i.event.remove(t, o) : i.removeEvent(t, o, f.handle);
                    r.cache[u] && delete r.cache[u] }
                delete e.cache[t[e.expando]] } } });
    i.fn.extend({ text: function(n) { return l(this, function(n) { return void 0 === n ? i.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = n) }) }, null, n, arguments.length) }, append: function() { return this.domManip(arguments, function(n) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = vr(this, n);
                    t.appendChild(n) } }) }, prepend: function() { return this.domManip(arguments, function(n) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = vr(this, n);
                    t.insertBefore(n, t.firstChild) } }) }, before: function() { return this.domManip(arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this) }) }, after: function() { return this.domManip(arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this.nextSibling) }) }, remove: function(n, t) { for (var r, f = n ? i.filter(n, this) : this, u = 0; null != (r = f[u]); u++) t || 1 !== r.nodeType || i.cleanData(o(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && ei(o(r, "script")), r.parentNode.removeChild(r)); return this }, empty: function() { for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = ""); return this }, clone: function(n, t) { return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() { return i.clone(this, n, t) }) }, html: function(n) { return l(this, function(n) { var t = this[0] || {},
                    r = 0,
                    u = this.length; if (void 0 === n && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof n && !vf.test(n) && !h[(lr.exec(n) || ["", ""])[1].toLowerCase()]) { n = n.replace(cr, "<$1><\/$2>"); try { for (; u > r; r++) t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0 } catch (f) {} }
                t && this.empty().append(n) }, null, n, arguments.length) }, replaceWith: function() { var n = arguments[0]; return this.domManip(arguments, function(t) { n = this.parentNode;
                i.cleanData(o(this));
                n && n.replaceChild(t, this) }), n && (n.length || n.nodeType) ? this : this.remove() }, detach: function(n) { return this.remove(n, !0) }, domManip: function(n, t) { n = bi.apply([], n); var h, v, s, c, u, y, e = 0,
                l = this.length,
                w = this,
                b = l - 1,
                a = n[0],
                p = i.isFunction(a); if (p || l > 1 && "string" == typeof a && !f.checkClone && yf.test(a)) return this.each(function(i) { var r = w.eq(i);
                p && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t) }); if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), v = h.firstChild, 1 === h.childNodes.length && (h = v), v)) { for (s = i.map(o(h, "script"), bf), c = s.length; l > e; e++) u = h, e !== b && (u = i.clone(u, !0, !0), c && i.merge(s, o(u, "script"))), t.call(this[e], u, e); if (c)
                    for (y = s[s.length - 1].ownerDocument, i.map(s, kf), e = 0; c > e; e++) u = s[e], ar.test(u.type || "") && !r.access(u, "globalEval") && i.contains(y, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval(u.textContent.replace(wf, ""))) } return this } });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(n, t) { i.fn[n] = function(n) { for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get()); return this.pushStack(f) } });
    oi = {}; var wr = /^margin/,
        hi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
        vt = function(t) { return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null) };! function() { var s, o, e = u.documentElement,
            r = u.createElement("div"),
            t = u.createElement("div"); if (t.style) { t.style.backgroundClip = "content-box";
            t.cloneNode(!0).style.backgroundClip = "";
            f.clearCloneStyle = "content-box" === t.style.backgroundClip;
            r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
            r.appendChild(t);

            function h() { t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                t.innerHTML = "";
                e.appendChild(r); var i = n.getComputedStyle(t, null);
                s = "1%" !== i.top;
                o = "4px" === i.width;
                e.removeChild(r) }
            n.getComputedStyle && i.extend(f, { pixelPosition: function() { return h(), s }, boxSizingReliable: function() { return null == o && h(), o }, reliableMarginRight: function() { var f, i = t.appendChild(u.createElement("div")); return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", e.appendChild(r), f = !parseFloat(n.getComputedStyle(i, null).marginRight), e.removeChild(r), t.removeChild(i), f } }) } }();
    i.swap = function(n, t, i, r) { var f, u, e = {}; for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []); for (u in t) n.style[u] = e[u]; return f }; var gf = /^(none|table(?!-c[ea]).+)/,
        ne = new RegExp("^(" + ct + ")(.*)$", "i"),
        te = new RegExp("^([+-])=(" + ct + ")", "i"),
        ie = { position: "absolute", visibility: "hidden", display: "block" },
        kr = { letterSpacing: "0", fontWeight: "400" },
        dr = ["Webkit", "O", "Moz", "ms"];
    i.extend({ cssHooks: { opacity: { get: function(n, t) { if (t) { var i = it(n, "opacity"); return "" === i ? "1" : i } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function(n, t, r, u) { if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) { var o, h, e, s = i.camelCase(t),
                    c = n.style; return t = i.cssProps[s] || (i.cssProps[s] = gr(c, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? e && "get" in e && void 0 !== (o = e.get(n, !1, u)) ? o : c[t] : (h = typeof r, "string" === h && (o = te.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), null != r && r === r && ("number" !== h || i.cssNumber[s] || (r += "px"), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"), e && "set" in e && void 0 === (r = e.set(n, r, u)) || (c[t] = r)), void 0) } }, css: function(n, t, r, u) { var f, s, e, o = i.camelCase(t); return t = i.cssProps[o] || (i.cssProps[o] = gr(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = it(n, t, u)), "normal" === f && t in kr && (f = kr[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f } });
    i.each(["height", "width"], function(n, t) { i.cssHooks[t] = { get: function(n, r, u) { if (r) return gf.test(i.css(n, "display")) && 0 === n.offsetWidth ? i.swap(n, ie, function() { return iu(n, t, u) }) : iu(n, t, u) }, set: function(n, r, u) { var f = u && vt(n); return nu(n, r, u ? tu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, f), f) : 0) } } });
    i.cssHooks.marginRight = br(f.reliableMarginRight, function(n, t) { if (t) return i.swap(n, { display: "inline-block" }, it, [n, "marginRight"]) });
    i.each({ margin: "", padding: "", border: "Width" }, function(n, t) { i.cssHooks[n + t] = { expand: function(i) { for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0]; return f } };
        wr.test(n) || (i.cssHooks[n + t].set = nu) });
    i.fn.extend({ css: function(n, t) { return l(this, function(n, t, r) { var f, e, o = {},
                    u = 0; if (i.isArray(t)) { for (f = vt(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f); return o } return void 0 !== r ? i.style(n, t, r) : i.css(n, t) }, n, t, arguments.length > 1) }, show: function() { return ru(this, !0) }, hide: function() { return ru(this) }, toggle: function(n) { return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() { tt(this) ? i(this).show() : i(this).hide() }) } });
    i.Tween = s;
    s.prototype = { constructor: s, init: function(n, t, r, u, f, e) { this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px") }, cur: function() { var n = s.propHooks[this.prop]; return n && n.get ? n.get(this) : s.propHooks._default.get(this) }, run: function(n) { var t, r = s.propHooks[this.prop]; return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this } };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = { _default: { get: function(n) { var t; return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop] }, set: function(n) { i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now } } };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = { set: function(n) { n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now) } };
    i.easing = { linear: function(n) { return n }, swing: function(n) { return .5 - Math.cos(n * Math.PI) / 2 } };
    i.fx = s.prototype.init;
    i.fx.step = {}; var d, yt, re = /^(?:toggle|show|hide)$/,
        uu = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
        ue = /queueHooks$/,
        pt = [fe],
        rt = { "*": [function(n, t) { var f = this.createTween(n, t),
                    s = f.cur(),
                    r = uu.exec(t),
                    e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                    u = (i.cssNumber[n] || "px" !== e && +s) && uu.exec(i.css(f.elem, n)),
                    o = 1,
                    h = 20; if (u && u[3] !== e) { e = e || u[3];
                    r = r || [];
                    u = +s || 1;
                    do o = o || ".5", u /= o, i.style(f.elem, n, u + e); while (o !== (o = f.cur() / s) && 1 !== o && --h) } return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f }] };
    i.Animation = i.extend(ou, { tweener: function(n, t) { i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" "); for (var r, u = 0, f = n.length; f > u; u++) r = n[u], rt[r] = rt[r] || [], rt[r].unshift(t) }, prefilter: function(n, t) { t ? pt.unshift(n) : pt.push(n) } });
    i.speed = function(n, t, r) { var u = n && "object" == typeof n ? i.extend({}, n) : { complete: r || !r && t || i.isFunction(n) && n, duration: n, easing: r && t || t && !i.isFunction(t) && t }; return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() { i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue) }, u };
    i.fn.extend({ fadeTo: function(n, t, i, r) { return this.filter(tt).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r) }, animate: function(n, t, u, f) { var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() { var t = ou(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0) }; return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e) }, stop: function(n, t, u) { var f = function(n) { var t = n.stop;
                delete n.stop;
                t(u) }; return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() { var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this); if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && ue.test(t) && f(e[t]); for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                (s || !u) && i.dequeue(this, n) }) }, finish: function(n) { return n !== !1 && (n = n || "fx"), this.each(function() { var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0; for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1)); for (t = 0; s > t; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish }) } });
    i.each(["toggle", "show", "hide"], function(n, t) { var r = i.fn[t];
        i.fn[t] = function(n, i, u) { return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(wt(t, !0), n, i, u) } });
    i.each({ slideDown: wt("show"), slideUp: wt("hide"), slideToggle: wt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(n, t) { i.fn[n] = function(n, i, r) { return this.animate(t, n, i, r) } });
    i.timers = [];
    i.fx.tick = function() { var r, n = 0,
            t = i.timers; for (d = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        d = void 0 };
    i.fx.timer = function(n) { i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop() };
    i.fx.interval = 13;
    i.fx.start = function() { yt || (yt = setInterval(i.fx.tick, i.fx.interval)) };
    i.fx.stop = function() { clearInterval(yt);
        yt = null };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fn.delay = function(n, t) { return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) { var r = setTimeout(t, n);
                i.stop = function() { clearTimeout(r) } }) },
        function() { var n = u.createElement("input"),
                t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = "" !== n.value;
            f.optSelected = i.selected;
            t.disabled = !0;
            f.optDisabled = !i.disabled;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = "t" === n.value }();
    g = i.expr.attrHandle;
    i.fn.extend({ attr: function(n, t) { return l(this, i.attr, n, t, arguments.length > 1) }, removeAttr: function(n) { return this.each(function() { i.removeAttr(this, n) }) } });
    i.extend({ attr: function(n, t, r) { var u, f, e = n.nodeType; if (n && 3 !== e && 8 !== e && 2 !== e) return typeof n.getAttribute === b ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? su : oe)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t)) }, removeAttr: function(n, t) { var r, u, e = 0,
                f = t && t.match(c); if (f && 1 === n.nodeType)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r) }, attrHooks: { type: { set: function(n, t) { if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) { var r = n.value; return n.setAttribute("type", t), r && (n.value = r), t } } } } });
    su = { set: function(n, t, r) { return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r } };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) { var r = g[t] || i.find.attr;
        g[t] = function(n, t, i) { var u, f; return i || (f = g[t], g[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, g[t] = f), u } });
    hu = /^(?:input|select|textarea|button)$/i;
    i.fn.extend({ prop: function(n, t) { return l(this, i.prop, n, t, arguments.length > 1) }, removeProp: function(n) { return this.each(function() { delete this[i.propFix[n] || n] }) } });
    i.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(n, t, r) { var f, u, o, e = n.nodeType; if (n && 3 !== e && 8 !== e && 2 !== e) return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t] }, propHooks: { tabIndex: { get: function(n) { return n.hasAttribute("tabindex") || hu.test(n.nodeName) || n.href ? n.tabIndex : -1 } } } });
    f.optSelected || (i.propHooks.selected = { get: function(n) { var t = n.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null } });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { i.propFix[this.toLowerCase()] = this });
    bt = /[\t\r\n\f]/g;
    i.fn.extend({ addClass: function(n) { var o, t, r, u, s, f, h = "string" == typeof n && n,
                e = 0,
                l = this.length; if (i.isFunction(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, this.className)) }); if (h)
                for (o = (n || "").match(c) || []; l > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(bt, " ") : " ")) { for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f) }
            return this }, removeClass: function(n) { var o, t, r, u, s, f, h = 0 === arguments.length || "string" == typeof n && n,
                e = 0,
                l = this.length; if (i.isFunction(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, this.className)) }); if (h)
                for (o = (n || "").match(c) || []; l > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(bt, " ") : "")) { for (s = 0; u = o[s++];)
                            while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f) }
            return this }, toggleClass: function(n, t) { var u = typeof n; return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) { i(this).toggleClass(n.call(this, r, this.className, t), t) } : function() { if ("string" === u)
                    for (var t, e = 0, f = i(this), o = n.match(c) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else(u === b || "boolean" === u) && (this.className && r.set(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : r.get(this, "__className__") || "") }) }, hasClass: function(n) { for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(bt, " ").indexOf(i) >= 0) return !0;
            return !1 } });
    cu = /\r/g;
    i.fn.extend({ val: function(n) { var t, r, f, u = this[0]; return arguments.length ? (f = i.isFunction(n), this.each(function(r) { var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) { return null == n ? "" : n + "" })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u)) })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(cu, "") : null == r ? "" : r)) : void 0 } });
    i.extend({ valHooks: { option: { get: function(n) { var t = i.find.attr(n, "value"); return null != t ? t : i.trim(i.text(n)) } }, select: { get: function(n) { for (var o, t, s = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, h = u ? null : [], c = u ? r + 1 : s.length, e = 0 > r ? c : u ? r : 0; c > e; e++)
                        if (t = s[e], !(!t.selected && e !== r || (f.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) { if (o = i(t).val(), u) return o;
                            h.push(o) }
                    return h }, set: function(n, t) { for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(r.value, e) >= 0) && (u = !0); return u || (n.selectedIndex = -1), e } } } });
    i.each(["radio", "checkbox"], function() { i.valHooks[this] = { set: function(n, t) { if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0 } };
        f.checkOn || (i.valHooks[this].get = function(n) { return null === n.getAttribute("value") ? "on" : n.value }) });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) { return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t) } });
    i.fn.extend({ hover: function(n, t) { return this.mouseenter(n).mouseleave(t || n) }, bind: function(n, t, i) { return this.on(n, null, t, i) }, unbind: function(n, t) { return this.off(n, null, t) }, delegate: function(n, t, i, r) { return this.on(t, n, i, r) }, undelegate: function(n, t, i) { return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i) } });
    kt = i.now();
    dt = /\?/;
    i.parseJSON = function(n) { return JSON.parse(n + "") };
    i.parseXML = function(n) { var t, r; if (!n || "string" != typeof n) return null; try { r = new DOMParser;
            t = r.parseFromString(n, "text/xml") } catch (u) { t = void 0 } return (!t || t.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), t }; var se = /#.*$/,
        lu = /([?&])_=[^&]*/,
        he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ce = /^(?:GET|HEAD)$/,
        le = /^\/\//,
        au = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        vu = {},
        ci = {},
        yu = "*/".concat("*"),
        li = n.location.href,
        nt = au.exec(li.toLowerCase()) || [];
    i.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: li, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": yu, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(n, t) { return t ? ai(ai(n, i.ajaxSettings), t) : ai(i.ajaxSettings, n) }, ajaxPrefilter: pu(vu), ajaxTransport: pu(ci), ajax: function(n, t) {
            function p(n, t, s, h) { var v, it, tt, p, nt, c = t;
                2 !== e && (e = 2, b && clearTimeout(b), l = void 0, w = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (p = ae(r, u, s)), p = ve(r, p, u, v), v ? (r.ifModified && (nt = u.getResponseHeader("Last-Modified"), nt && (i.lastModified[f] = nt), nt = u.getResponseHeader("etag"), nt && (i.etag[f] = nt)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = p.state, it = p.data, tt = p.error, v = !tt)) : (tt = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? d.resolveWith(o, [it, c, u]) : d.rejectWith(o, [u, c, tt]), u.statusCode(y), y = void 0, a && k.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : tt]), g.fireWith(o, [u, c]), a && (k.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop"))) } "object" == typeof n && (t = n, n = void 0);
            t = t || {}; var l, f, w, v, b, s, a, h, r = i.ajaxSetup({}, t),
                o = r.context || r,
                k = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                d = i.Deferred(),
                g = i.Callbacks("once memory"),
                y = r.statusCode || {},
                tt = {},
                it = {},
                e = 0,
                rt = "canceled",
                u = { readyState: 0, getResponseHeader: function(n) { var t; if (2 === e) { if (!v)
                                for (v = {}; t = he.exec(w);) v[t[1].toLowerCase()] = t[2];
                            t = v[n.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return 2 === e ? w : null }, setRequestHeader: function(n, t) { var i = n.toLowerCase(); return e || (n = it[i] = it[i] || n, tt[n] = t), this }, overrideMimeType: function(n) { return e || (r.mimeType = n), this }, statusCode: function(n) { var t; if (n)
                            if (2 > e)
                                for (t in n) y[t] = [y[t], n[t]];
                            else u.always(n[u.status]);
                        return this }, abort: function(n) { var t = n || rt; return l && l.abort(t), p(0, t), this } }; if (d.promise(u).complete = g.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || li) + "").replace(se, "").replace(le, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(c) || [""], null == r.crossDomain && (s = au.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === nt[1] && s[2] === nt[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), wu(vu, r, t, u), 2 === e) return u;
            a = i.event && r.global;
            a && 0 == i.active++ && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !ce.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (dt.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = lu.test(f) ? f.replace(lu, "$1_=" + kt++) : f + (dt.test(f) ? "&" : "?") + "_=" + kt++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + yu + "; q=0.01" : "") : r.accepts["*"]); for (h in r.headers) u.setRequestHeader(h, r.headers[h]); if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e)) return u.abort();
            rt = "abort"; for (h in { success: 1, error: 1, complete: 1 }) u[h](r[h]); if (l = wu(ci, r, t, u)) { u.readyState = 1;
                a && k.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (b = setTimeout(function() { u.abort("timeout") }, r.timeout)); try { e = 1;
                    l.send(tt, p) } catch (ut) { if (!(2 > e)) throw ut;
                    p(-1, ut) } } else p(-1, "No Transport"); return u }, getJSON: function(n, t, r) { return i.get(n, t, r, "json") }, getScript: function(n, t) { return i.get(n, void 0, t, "script") } });
    i.each(["get", "post"], function(n, t) { i[t] = function(n, r, u, f) { return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({ url: n, type: t, dataType: f, data: r, success: u }) } });
    i._evalUrl = function(n) { return i.ajax({ url: n, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) };
    i.fn.extend({ wrapAll: function(n) { var t; return i.isFunction(n) ? this.each(function(t) { i(this).wrapAll(n.call(this, t)) }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var n = this; n.firstElementChild;) n = n.firstElementChild; return n }).append(this)), this) }, wrapInner: function(n) { return this.each(i.isFunction(n) ? function(t) { i(this).wrapInner(n.call(this, t)) } : function() { var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n) }) }, wrap: function(n) { var t = i.isFunction(n); return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) }) }, unwrap: function() { return this.parent().each(function() { i.nodeName(this, "body") || i(this).replaceWith(this.childNodes) }).end() } });
    i.expr.filters.hidden = function(n) { return n.offsetWidth <= 0 && n.offsetHeight <= 0 };
    i.expr.filters.visible = function(n) { return !i.expr.filters.hidden(n) }; var ye = /%20/g,
        pe = /\[\]$/,
        bu = /\r?\n/g,
        we = /^(?:submit|button|image|reset|file)$/i,
        be = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) { var r, u = [],
            f = function(n, t) { t = i.isFunction(t) ? t() : null == t ? "" : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t) }; if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { f(this.name, this.value) });
        else
            for (r in n) vi(r, n[r], t, f); return u.join("&").replace(ye, "+") };
    i.fn.extend({ serialize: function() { return i.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var n = i.prop(this, "elements"); return n ? i.makeArray(n) : this }).filter(function() { var n = this.type; return this.name && !i(this).is(":disabled") && be.test(this.nodeName) && !we.test(n) && (this.checked || !er.test(n)) }).map(function(n, t) { var r = i(this).val(); return null == r ? null : i.isArray(r) ? i.map(r, function(n) { return { name: t.name, value: n.replace(bu, "\r\n") } }) : { name: t.name, value: r.replace(bu, "\r\n") } }).get() } });
    i.ajaxSettings.xhr = function() { try { return new XMLHttpRequest } catch (n) {} }; var ke = 0,
        gt = {},
        de = { 0: 200, 1223: 204 },
        ut = i.ajaxSettings.xhr(); return n.attachEvent && n.attachEvent("onunload", function() { for (var n in gt) gt[n]() }), f.cors = !!ut && "withCredentials" in ut, f.ajax = ut = !!ut, i.ajaxTransport(function(n) { var t; if (f.cors || ut && !n.crossDomain) return { send: function(i, r) { var f, u = n.xhr(),
                    e = ++ke; if (u.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                    for (f in n.xhrFields) u[f] = n.xhrFields[f];
                n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType);
                n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); for (f in i) u.setRequestHeader(f, i[f]);
                t = function(n) { return function() { t && (delete gt[e], t = u.onload = u.onerror = null, "abort" === n ? u.abort() : "error" === n ? r(u.status, u.statusText) : r(de[u.status] || u.status, u.statusText, "string" == typeof u.responseText ? { text: u.responseText } : void 0, u.getAllResponseHeaders())) } };
                u.onload = t();
                u.onerror = t("error");
                t = gt[e] = t("abort"); try { u.send(n.hasContent && n.data || null) } catch (o) { if (t) throw o; } }, abort: function() { t && t() } } }), i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(n) { return i.globalEval(n), n } } }), i.ajaxPrefilter("script", function(n) { void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET") }), i.ajaxTransport("script", function(n) { if (n.crossDomain) { var r, t; return { send: function(f, e) { r = i("<script>").prop({ async: !0, charset: n.scriptCharset, src: n.url }).on("load error", t = function(n) { r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type) });
                    u.head.appendChild(r[0]) }, abort: function() { t && t() } } } }), yi = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var n = yi.pop() || i.expando + "_" + kt++; return this[n] = !0, n } }), i.ajaxPrefilter("json jsonp", function(t, r, u) { var f, o, e, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() { return e || i.error(f + " was not called"), e[0] }, t.dataTypes[0] = "json", o = n[f], n[f] = function() { e = arguments }, u.always(function() { n[f] = o;
            t[f] && (t.jsonpCallback = r.jsonpCallback, yi.push(f));
            e && i.isFunction(o) && o(e[0]);
            e = o = void 0 }), "script") }), i.parseHTML = function(n, t, r) { if (!n || "string" != typeof n) return null; "boolean" == typeof t && (r = t, t = !1);
        t = t || u; var f = gi.exec(n),
            e = !r && []; return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes)) }, pi = i.fn.load, i.fn.load = function(n, t, r) { if ("string" != typeof n && pi) return pi.apply(this, arguments); var u, o, s, f = this,
            e = n.indexOf(" "); return e >= 0 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({ url: n, type: o, dataType: "html", data: t }).done(function(n) { s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n) }).complete(r && function(n, t) { f.each(r, s || [n.responseText, t, n]) }), this }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) { i.fn[t] = function(n) { return this.on(t, n) } }), i.expr.filters.animated = function(n) { return i.grep(i.timers, function(t) { return n === t.elem }).length }, wi = n.document.documentElement, i.offset = { setOffset: function(n, t, r) { var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {}; "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o); "using" in t ? t.using.call(n, f) : a.css(f) } }, i.fn.extend({ offset: function(n) { if (arguments.length) return void 0 === n ? this : this.each(function(t) { i.offset.setOffset(this, n, t) }); var r, f, t = this[0],
                u = { top: 0, left: 0 },
                e = t && t.ownerDocument; if (e) return r = e.documentElement, i.contains(r, t) ? (typeof t.getBoundingClientRect !== b && (u = t.getBoundingClientRect()), f = ku(e), { top: u.top + f.pageYOffset - r.clientTop, left: u.left + f.pageXOffset - r.clientLeft }) : u }, position: function() { if (this[0]) { var n, r, u = this[0],
                    t = { top: 0, left: 0 }; return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), { top: r.top - t.top - i.css(u, "marginTop", !0), left: r.left - t.left - i.css(u, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var n = this.offsetParent || wi; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent; return n || wi }) } }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, r) { var u = "pageYOffset" === r;
        i.fn[t] = function(i) { return l(this, function(t, i, f) { var e = ku(t); return void 0 === f ? e ? e[r] : t[i] : void(e ? e.scrollTo(u ? n.pageXOffset : f, u ? f : n.pageYOffset) : t[i] = f) }, t, i, arguments.length, null) } }), i.each(["top", "left"], function(n, t) { i.cssHooks[t] = br(f.pixelPosition, function(n, r) { if (r) return (r = it(n, t), hi.test(r) ? i(n).position()[t] + "px" : r) }) }), i.each({ Height: "height", Width: "width" }, function(n, t) { i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function(r, u) { i.fn[u] = function(u, f) { var e = arguments.length && (r || "boolean" != typeof u),
                    o = r || (u === !0 || f === !0 ? "margin" : "border"); return l(this, function(t, r, u) { var f; return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o) }, t, e ? u : void 0, e, null) } }) }), i.fn.size = function() { return this.length }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return i }), du = n.jQuery, gu = n.$, i.noConflict = function(t) { return n.$ === i && (n.$ = gu), t && n.jQuery === i && (n.jQuery = du), i }, typeof t === b && (n.jQuery = n.$ = i), i });
! function(n) { var t = { strength: 30, scale: 1.15, animationSpeed: "250ms", contain: !0, wrapContent: !1 };
    n.fn.interactive_bg = function(i) { return this.each(function() { var r = n.extend({}, t, i),
                u = n(this),
                f = u.outerHeight(),
                e = u.outerWidth(),
                o = r.strength / f,
                s = r.strength / e,
                h = "ontouchstart" in document.documentElement; if (r.contain === !0 && u.css({ overflow: "hidden" }), r.wrapContent == !1 ? u.prepend("<div class='ibg-bg'><\/div>") : u.wrapInner("<div class='ibg-bg'><\/div>"), u.data("ibg-bg") !== undefined && u.find("> .ibg-bg").css({ background: "url('" + u.data("ibg-bg") + "') no-repeat center center", "background-size": "cover" }), u.find("> .ibg-bg").css({ width: e, height: f }), h || screen.width <= 699) {
                function c() { var i = Math.round(event.accelerationIncludingGravity.x * 10) / 10,
                        f = Math.round(event.accelerationIncludingGravity.y * 10) / 10,
                        e = -(i / 10) * r.strength,
                        o = -(f / 10) * r.strength,
                        n = -(e * 2),
                        t = -(o * 2);
                    u.find("> .ibg-bg").css({ "-webkit-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + n + "," + t + ")", "-moz-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + n + "," + t + ")", "-o-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + n + "," + t + ")", transform: "matrix(" + r.scale + ",0,0," + r.scale + "," + n + "," + t + ")" }) }
                window.addEventListener("devicemotion", c, !1) } else { u.find("> .ibg-bg").css({ "-webkit-transform": "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)", "-moz-transform": "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)", "-o-transform": "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)", transform: "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)", "-webkit-transition": "-webkit-transform " + r.animationSpeed + " linear", "-moz-transition": "-moz-transform " + r.animationSpeed + " linear", "-o-transition": "-o-transform " + r.animationSpeed + " linear", transition: "transform " + r.animationSpeed + " linear" }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() { u.removeClass("") });
                u.mousemove(function(n) { if (!u.hasClass("") && !u.hasClass("")) { var h = n.pageX || n.clientX,
                            c = n.pageY || n.clientY,
                            h = h - u.offset().left - e / 2,
                            c = c - u.offset().top - f / 2,
                            t = s * h * -1,
                            i = o * c * -1;
                        u.find("> .ibg-bg").css({ "-webkit-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + t + "," + i + ")", "-moz-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + t + "," + i + ")", "-o-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + t + "," + i + ")", transform: "matrix(" + r.scale + ",0,0," + r.scale + "," + t + "," + i + ")", "-webkit-transition": "none", "-moz-transition": "none", "-o-transition": "none", transition: "none" }) } }) } }) } }(window.jQuery);
! function(n) { var t = { animation: "dissolve", separator: ",", speed: 2e3 };
    n.fx.step.textShadowBlur = function(t) { n(t.elem).prop("textShadowBlur", t.now).css({ textShadow: "0 0 " + Math.floor(t.now) + "px black" }) };
    n.fn.textrotator = function(i) { var r = n.extend({}, t, i); return this.each(function() { var t = n(this),
                i = [],
                u;
            n.each(t.text().split(r.separator), function(n, t) { i.push(t) });
            t.text(i[0]);
            u = function() { var f, u; switch (r.animation) {
                    case "dissolve":
                        t.animate({ textShadowBlur: 20, opacity: 0 }, 500, function() { u = n.inArray(t.text(), i);
                            u + 1 == i.length && (u = -1);
                            t.text(i[u + 1]).animate({ textShadowBlur: 0, opacity: 1 }, 500) }); break;
                    case "flip":
                        t.find(".back").length > 0 && t.html(t.find(".back").html());
                        f = t.text();
                        u = n.inArray(f, i);
                        u + 1 == i.length && (u = -1);
                        t.html("");
                        n("<span class='front'>" + f + "<\/span>").appendTo(t);
                        n("<span class='back'>" + i[u + 1] + "<\/span>").appendTo(t);
                        t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({ "-webkit-transform": " rotateY(-180deg)", "-moz-transform": " rotateY(-180deg)", "-o-transform": " rotateY(-180deg)", transform: " rotateY(-180deg)" }); break;
                    case "flipUp":
                        t.find(".back").length > 0 && t.html(t.find(".back").html());
                        f = t.text();
                        u = n.inArray(f, i);
                        u + 1 == i.length && (u = -1);
                        t.html("");
                        n("<span class='front'>" + f + "<\/span>").appendTo(t);
                        n("<span class='back'>" + i[u + 1] + "<\/span>").appendTo(t);
                        t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({ "-webkit-transform": " rotateX(-180deg)", "-moz-transform": " rotateX(-180deg)", "-o-transform": " rotateX(-180deg)", transform: " rotateX(-180deg)" }); break;
                    case "flipCube":
                        t.find(".back").length > 0 && t.html(t.find(".back").html());
                        f = t.text();
                        u = n.inArray(f, i);
                        u + 1 == i.length && (u = -1);
                        t.html("");
                        n("<span class='front'>" + f + "<\/span>").appendTo(t);
                        n("<span class='back'>" + i[u + 1] + "<\/span>").appendTo(t);
                        t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({ "-webkit-transform": " rotateY(180deg)", "-moz-transform": " rotateY(180deg)", "-o-transform": " rotateY(180deg)", transform: " rotateY(180deg)" }); break;
                    case "flipCubeUp":
                        t.find(".back").length > 0 && t.html(t.find(".back").html());
                        f = t.text();
                        u = n.inArray(f, i);
                        u + 1 == i.length && (u = -1);
                        t.html("");
                        n("<span class='front'>" + f + "<\/span>").appendTo(t);
                        n("<span class='back'>" + i[u + 1] + "<\/span>").appendTo(t);
                        t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({ "-webkit-transform": " rotateX(180deg)", "-moz-transform": " rotateX(180deg)", "-o-transform": " rotateX(180deg)", transform: " rotateX(180deg)" }); break;
                    case "spin":
                        t.find(".rotating").length > 0 && t.html(t.find(".rotating").html());
                        u = n.inArray(t.text(), i);
                        u + 1 == i.length && (u = -1);
                        t.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(i[u + 1]).show().css({ "-webkit-transform": " rotate(0) scale(1)", "-moz-transform": "rotate(0) scale(1)", "-o-transform": "rotate(0) scale(1)", transform: "rotate(0) scale(1)" }); break;
                    case "fade":
                        t.fadeOut(r.speed, function() { u = n.inArray(t.text(), i);
                            u + 1 == i.length && (u = -1);
                            t.text(i[u + 1]).fadeIn(r.speed) }) } };
            setInterval(u, r.speed) }) } }(window.jQuery),
function(n) { "use strict";

    function f(n) { return new RegExp("(^|\\s+)" + n + "(\\s+|$)") }

    function e(n, u) { var f = t(n, u) ? r : i;
        f(n, u) } var t, i, r, u; "classList" in document.documentElement ? (t = function(n, t) { return n.classList.contains(t) }, i = function(n, t) { n.classList.add(t) }, r = function(n, t) { n.classList.remove(t) }) : (t = function(n, t) { return f(t).test(n.className) }, i = function(n, i) { t(n, i) || (n.className = n.className + " " + i) }, r = function(n, t) { n.className = n.className.replace(f(t), " ") });
    u = { hasClass: t, addClass: i, removeClass: r, toggleClass: e, has: t, add: i, remove: r, toggle: e };
    typeof define == "function" && define.amd ? define(u) : n.classie = u }(window);
var bodyEl = document.body,
    content = document.querySelector("#mainContent"),
    openbtn = document.getElementById("open-button"),
    closebtn = document.getElementById("close-button"),
    isOpen = !1;
initMenuEvents()