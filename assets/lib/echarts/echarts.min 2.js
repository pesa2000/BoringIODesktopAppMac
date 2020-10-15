!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t.echarts = {}));
})(this, function (t) {
    "use strict";
    function e(t) {
        var e = {},
            n = {},
            i = t.match(/Firefox\/([\d.]+)/),
            r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
            a = t.match(/Edge\/([\d.]+)/),
            o = /micromessenger/i.test(t);
        return (
            i && ((n.firefox = !0), (n.version = i[1])),
            r && ((n.ie = !0), (n.version = r[1])),
            a && ((n.edge = !0), (n.version = a[1])),
            o && (n.weChat = !0),
            {
                browser: n,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                svgSupported: "undefined" != typeof SVGRect,
                touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
                pointerEventsSupported: "onpointerdown" in window && (n.edge || (n.ie && n.version >= 11)),
                domSupported: "undefined" != typeof document,
            }
        );
    }
    function n(t, e) {
        "createCanvas" === t && (Ef = null), (Of[t] = e);
    }
    function i(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t,
            n = Cf.call(t);
        if ("[object Array]" === n) {
            if (!z(t)) {
                e = [];
                for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r]);
            }
        } else if (If[n]) {
            if (!z(t)) {
                var o = t.constructor;
                if (t.constructor.from) e = o.from(t);
                else {
                    e = new o(t.length);
                    for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r]);
                }
            }
        } else if (!Mf[n] && !z(t) && !C(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]));
        }
        return e;
    }
    function r(t, e, n) {
        if (!S(e) || !S(t)) return n ? i(e) : t;
        for (var a in e)
            if (e.hasOwnProperty(a)) {
                var o = t[a],
                    s = e[a];
                !S(s) || !S(o) || x(s) || x(o) || C(s) || C(o) || M(s) || M(o) || z(s) || z(o) ? (!n && a in t) || (t[a] = i(e[a], !0)) : r(o, s, n);
            }
        return t;
    }
    function a(t, e) {
        for (var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);
        return n;
    }
    function o(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
    }
    function s(t, e, n) {
        for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t;
    }
    function l() {
        return Ef || (Ef = Bf().getContext("2d")), Ef;
    }
    function h(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
        }
        return -1;
    }
    function u(t, e) {
        function n() {}
        var i = t.prototype;
        (n.prototype = e.prototype), (t.prototype = new n());
        for (var r in i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
        (t.prototype.constructor = t), (t.superClass = e);
    }
    function c(t, e, n) {
        (t = "prototype" in t ? t.prototype : t), (e = "prototype" in e ? e.prototype : e), s(t, e, n);
    }
    function d(t) {
        return t ? ("string" == typeof t ? !1 : "number" == typeof t.length) : void 0;
    }
    function f(t, e, n) {
        if (t && e)
            if (t.forEach && t.forEach === Df) t.forEach(e, n);
            else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t);
            else for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t);
    }
    function p(t, e, n) {
        if (t && e) {
            if (t.map && t.map === Pf) return t.map(e, n);
            for (var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));
            return i;
        }
    }
    function g(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === Lf) return t.reduce(e, n, i);
            for (var r = 0, a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);
            return n;
        }
    }
    function v(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === Af) return t.filter(e, n);
            for (var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i;
        }
    }
    function m(t, e, n) {
        if (t && e) for (var i = 0, r = t.length; r > i; i++) if (e.call(n, t[i], i, t)) return t[i];
    }
    function y(t, e) {
        var n = kf.call(arguments, 2);
        return function () {
            return t.apply(e, n.concat(kf.call(arguments)));
        };
    }
    function _(t) {
        var e = kf.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(kf.call(arguments)));
        };
    }
    function x(t) {
        return "[object Array]" === Cf.call(t);
    }
    function w(t) {
        return "function" == typeof t;
    }
    function b(t) {
        return "[object String]" === Cf.call(t);
    }
    function S(t) {
        var e = typeof t;
        return "function" === e || (!!t && "object" === e);
    }
    function M(t) {
        return !!Mf[Cf.call(t)];
    }
    function I(t) {
        return !!If[Cf.call(t)];
    }
    function C(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument;
    }
    function T(t) {
        return t !== t;
    }
    function D() {
        for (var t = 0, e = arguments.length; e > t; t++) if (null != arguments[t]) return arguments[t];
    }
    function A(t, e) {
        return null != t ? t : e;
    }
    function k(t, e, n) {
        return null != t ? t : null != e ? e : n;
    }
    function P() {
        return Function.call.apply(kf, arguments);
    }
    function L(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
    }
    function O(t, e) {
        if (!t) throw new Error(e);
    }
    function B(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    function E(t) {
        t[zf] = !0;
    }
    function z(t) {
        return t[zf];
    }
    function R(t) {
        function e(t, e) {
            n ? i.set(t, e) : i.set(e, t);
        }
        var n = x(t);
        this.data = {};
        var i = this;
        t instanceof R ? t.each(e) : t && f(t, e);
    }
    function N(t) {
        return new R(t);
    }
    function F(t, e) {
        for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
        var r = t.length;
        for (i = 0; i < e.length; i++) n[i + r] = e[i];
        return n;
    }
    function V() {}
    function G(t, e) {
        var n = new Nf(2);
        return null == t && (t = 0), null == e && (e = 0), (n[0] = t), (n[1] = e), n;
    }
    function H(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), t;
    }
    function W(t) {
        var e = new Nf(2);
        return (e[0] = t[0]), (e[1] = t[1]), e;
    }
    function X(t, e, n) {
        return (t[0] = e), (t[1] = n), t;
    }
    function U(t, e, n) {
        return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
    }
    function Y(t, e, n, i) {
        return (t[0] = e[0] + n[0] * i), (t[1] = e[1] + n[1] * i), t;
    }
    function q(t, e, n) {
        return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
    }
    function j(t) {
        return Math.sqrt(Z(t));
    }
    function Z(t) {
        return t[0] * t[0] + t[1] * t[1];
    }
    function K(t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
    }
    function $(t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
    }
    function Q(t, e) {
        return t[0] * e[0] + t[1] * e[1];
    }
    function J(t, e, n) {
        return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
    }
    function te(t, e) {
        var n = j(e);
        return 0 === n ? ((t[0] = 0), (t[1] = 0)) : ((t[0] = e[0] / n), (t[1] = e[1] / n)), t;
    }
    function ee(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
    }
    function ne(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
    }
    function ie(t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), t;
    }
    function re(t, e, n, i) {
        return (t[0] = e[0] + i * (n[0] - e[0])), (t[1] = e[1] + i * (n[1] - e[1])), t;
    }
    function ae(t, e, n) {
        var i = e[0],
            r = e[1];
        return (t[0] = n[0] * i + n[2] * r + n[4]), (t[1] = n[1] * i + n[3] * r + n[5]), t;
    }
    function oe(t, e, n) {
        return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
    }
    function se(t, e, n) {
        return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
    }
    function le() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
    }
    function he(t, e) {
        return { target: t, topTarget: e && e.topTarget };
    }
    function ue(t, e) {
        var n = t._$eventProcessor;
        return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e;
    }
    function ce(t, e, n, i, r, a) {
        var o = t._$handlers;
        if (("function" == typeof n && ((r = i), (i = n), (n = null)), !i || !e)) return t;
        (n = ue(t, n)), o[e] || (o[e] = []);
        for (var s = 0; s < o[e].length; s++) if (o[e][s].h === i) return t;
        var l = { h: i, one: a, query: n, ctx: r || t, callAtLast: i.zrEventfulCallAtLast },
            h = o[e].length - 1,
            u = o[e][h];
        return u && u.callAtLast ? o[e].splice(h, 0, l) : o[e].push(l), t;
    }
    function de(t, e, n, i, r, a) {
        var o = i + "-" + r,
            s = t.length;
        if (a.hasOwnProperty(o)) return a[o];
        if (1 === e) {
            var l = Math.round(Math.log(((1 << s) - 1) & ~r) / Yf);
            return t[n][l];
        }
        for (var h = i | (1 << n), u = n + 1; i & (1 << u); ) u++;
        for (var c = 0, d = 0, f = 0; s > d; d++) {
            var p = 1 << d;
            p & r || ((c += (f % 2 ? -1 : 1) * t[n][d] * de(t, e - 1, u, h, r | p, a)), f++);
        }
        return (a[o] = c), c;
    }
    function fe(t, e) {
        var n = [
                [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
                [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
                [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
                [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
                [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
                [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
                [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
                [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]],
            ],
            i = {},
            r = de(n, 8, 0, 0, 0, i);
        if (0 !== r) {
            for (var a = [], o = 0; 8 > o; o++) for (var s = 0; 8 > s; s++) null == a[s] && (a[s] = 0), (a[s] += ((((o + s) % 2 ? -1 : 1) * de(n, 7, 0 === o ? 1 : 0, 1 << o, 1 << s, i)) / r) * e[o]);
            return function (t, e, n) {
                var i = e * a[6] + n * a[7] + 1;
                (t[0] = (e * a[0] + n * a[1] + a[2]) / i), (t[1] = (e * a[3] + n * a[4] + a[5]) / i);
            };
        }
    }
    function pe(t, e, n, i) {
        return (
            (n = n || {}),
            i || !Sf.canvasSupported ? ge(t, e, n) : Sf.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? ((n.zrX = e.layerX), (n.zrY = e.layerY)) : null != e.offsetX ? ((n.zrX = e.offsetX), (n.zrY = e.offsetY)) : ge(t, e, n),
            n
        );
    }
    function ge(t, e, n) {
        if (t.getBoundingClientRect && Sf.domSupported) {
            var i = e.clientX,
                r = e.clientY;
            if ("CANVAS" === t.nodeName.toUpperCase()) {
                var a = t.getBoundingClientRect();
                return (n.zrX = i - a.left), void (n.zrY = r - a.top);
            }
            var o = t[Zf] || (t[Zf] = {}),
                s = me(ve(t, o), o);
            if (s) return s(Kf, i, r), (n.zrX = Kf[0]), void (n.zrY = Kf[1]);
        }
        n.zrX = n.zrY = 0;
    }
    function ve(t, e) {
        var n = e.markers;
        if (n) return n;
        n = e.markers = [];
        for (var i = ["left", "right"], r = ["top", "bottom"], a = 0; 4 > a; a++) {
            var o = document.createElement("div"),
                s = o.style,
                l = a % 2,
                h = (a >> 1) % 2;
            (s.cssText = ["position:absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "width:0", "height:0", i[l] + ":0", r[h] + ":0", i[1 - l] + ":auto", r[1 - h] + ":auto", ""].join("!important;")),
                t.appendChild(o),
                n.push(o);
        }
        return n;
    }
    function me(t, e) {
        for (var n = e.transformer, i = e.srcCoords, r = !0, a = [], o = [], s = 0; 4 > s; s++) {
            var l = t[s].getBoundingClientRect(),
                h = 2 * s,
                u = l.left,
                c = l.top;
            a.push(u, c), (r &= i && u === i[h] && c === i[h + 1]), o.push(t[s].offsetLeft, t[s].offsetTop);
        }
        return r ? n : ((e.srcCoords = a), (e.transformer = fe(a, o)));
    }
    function ye(t, e, n) {
        if (((e = e || window.event), null != e.zrX)) return e;
        var i = e.type,
            r = i && i.indexOf("touch") >= 0;
        if (r) {
            var a = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];
            a && pe(t, a, e, n);
        } else pe(t, e, e, n), (e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3);
        var o = e.button;
        return null == e.which && void 0 !== o && jf.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
    }
    function _e(t, e, n) {
        qf ? t.addEventListener(e, n) : t.attachEvent("on" + e, n);
    }
    function xe(t, e, n) {
        qf ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n);
    }
    function we(t) {
        var e = t[1][0] - t[0][0],
            n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n);
    }
    function be(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
    }
    function Se(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which,
            stop: Me,
        };
    }
    function Me() {
        $f(this.event);
    }
    function Ie() {}
    function Ce(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i, r = t; r; ) {
                if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
                r.silent && (i = !0), (r = r.parent);
            }
            return i ? tp : !0;
        }
        return !1;
    }
    function Te() {
        var t = new ip(6);
        return De(t), t;
    }
    function De(t) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t;
    }
    function Ae(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4]), (t[5] = e[5]), t;
    }
    function ke(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1],
            r = e[1] * n[0] + e[3] * n[1],
            a = e[0] * n[2] + e[2] * n[3],
            o = e[1] * n[2] + e[3] * n[3],
            s = e[0] * n[4] + e[2] * n[5] + e[4],
            l = e[1] * n[4] + e[3] * n[5] + e[5];
        return (t[0] = i), (t[1] = r), (t[2] = a), (t[3] = o), (t[4] = s), (t[5] = l), t;
    }
    function Pe(t, e, n) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4] + n[0]), (t[5] = e[5] + n[1]), t;
    }
    function Le(t, e, n) {
        var i = e[0],
            r = e[2],
            a = e[4],
            o = e[1],
            s = e[3],
            l = e[5],
            h = Math.sin(n),
            u = Math.cos(n);
        return (t[0] = i * u + o * h), (t[1] = -i * h + o * u), (t[2] = r * u + s * h), (t[3] = -r * h + u * s), (t[4] = u * a + h * l), (t[5] = u * l - h * a), t;
    }
    function Oe(t, e, n) {
        var i = n[0],
            r = n[1];
        return (t[0] = e[0] * i), (t[1] = e[1] * r), (t[2] = e[2] * i), (t[3] = e[3] * r), (t[4] = e[4] * i), (t[5] = e[5] * r), t;
    }
    function Be(t, e) {
        var n = e[0],
            i = e[2],
            r = e[4],
            a = e[1],
            o = e[3],
            s = e[5],
            l = n * o - a * i;
        return l ? ((l = 1 / l), (t[0] = o * l), (t[1] = -a * l), (t[2] = -i * l), (t[3] = n * l), (t[4] = (i * s - o * r) * l), (t[5] = (a * r - n * s) * l), t) : null;
    }
    function Ee(t) {
        var e = Te();
        return Ae(e, t), e;
    }
    function ze(t) {
        return t > op || -op > t;
    }
    function Re(t) {
        (this._target = t.target),
            (this._life = t.life || 1e3),
            (this._delay = t.delay || 0),
            (this._initialized = !1),
            (this.loop = null == t.loop ? !1 : t.loop),
            (this.gap = t.gap || 0),
            (this.easing = t.easing || "Linear"),
            (this.onframe = t.onframe),
            (this.ondestroy = t.ondestroy),
            (this.onrestart = t.onrestart),
            (this._pausedTime = 0),
            (this._paused = !1);
    }
    function Ne(t) {
        return (t = Math.round(t)), 0 > t ? 0 : t > 255 ? 255 : t;
    }
    function Fe(t) {
        return (t = Math.round(t)), 0 > t ? 0 : t > 360 ? 360 : t;
    }
    function Ve(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t;
    }
    function Ge(t) {
        return Ne(t.length && "%" === t.charAt(t.length - 1) ? (parseFloat(t) / 100) * 255 : parseInt(t, 10));
    }
    function He(t) {
        return Ve(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
    }
    function We(t, e, n) {
        return 0 > n ? (n += 1) : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t;
    }
    function Xe(t, e, n) {
        return t + (e - t) * n;
    }
    function Ue(t, e, n, i, r) {
        return (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), t;
    }
    function Ye(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
    }
    function qe(t, e) {
        xp && Ye(xp, e), (xp = _p.put(t, xp || e.slice()));
    }
    function je(t, e) {
        if (t) {
            e = e || [];
            var n = _p.get(t);
            if (n) return Ye(e, n);
            t += "";
            var i = t.replace(/ /g, "").toLowerCase();
            if (i in yp) return Ye(e, yp[i]), qe(t, e), e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("("),
                    a = i.indexOf(")");
                if (-1 !== r && a + 1 === i.length) {
                    var o = i.substr(0, r),
                        s = i.substr(r + 1, a - (r + 1)).split(","),
                        l = 1;
                    switch (o) {
                        case "rgba":
                            if (4 !== s.length) return void Ue(e, 0, 0, 0, 1);
                            l = He(s.pop());
                        case "rgb":
                            return 3 !== s.length ? void Ue(e, 0, 0, 0, 1) : (Ue(e, Ge(s[0]), Ge(s[1]), Ge(s[2]), l), qe(t, e), e);
                        case "hsla":
                            return 4 !== s.length ? void Ue(e, 0, 0, 0, 1) : ((s[3] = He(s[3])), Ze(s, e), qe(t, e), e);
                        case "hsl":
                            return 3 !== s.length ? void Ue(e, 0, 0, 0, 1) : (Ze(s, e), qe(t, e), e);
                        default:
                            return;
                    }
                }
                Ue(e, 0, 0, 0, 1);
            } else {
                if (4 === i.length) {
                    var h = parseInt(i.substr(1), 16);
                    return h >= 0 && 4095 >= h ? (Ue(e, ((3840 & h) >> 4) | ((3840 & h) >> 8), (240 & h) | ((240 & h) >> 4), (15 & h) | ((15 & h) << 4), 1), qe(t, e), e) : void Ue(e, 0, 0, 0, 1);
                }
                if (7 === i.length) {
                    var h = parseInt(i.substr(1), 16);
                    return h >= 0 && 16777215 >= h ? (Ue(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), qe(t, e), e) : void Ue(e, 0, 0, 0, 1);
                }
            }
        }
    }
    function Ze(t, e) {
        var n = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
            i = He(t[1]),
            r = He(t[2]),
            a = 0.5 >= r ? r * (i + 1) : r + i - r * i,
            o = 2 * r - a;
        return (e = e || []), Ue(e, Ne(255 * We(o, a, n + 1 / 3)), Ne(255 * We(o, a, n)), Ne(255 * We(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e;
    }
    function Ke(t) {
        if (t) {
            var e,
                n,
                i = t[0] / 255,
                r = t[1] / 255,
                a = t[2] / 255,
                o = Math.min(i, r, a),
                s = Math.max(i, r, a),
                l = s - o,
                h = (s + o) / 2;
            if (0 === l) (e = 0), (n = 0);
            else {
                n = 0.5 > h ? l / (s + o) : l / (2 - s - o);
                var u = ((s - i) / 6 + l / 2) / l,
                    c = ((s - r) / 6 + l / 2) / l,
                    d = ((s - a) / 6 + l / 2) / l;
                i === s ? (e = d - c) : r === s ? (e = 1 / 3 + u - d) : a === s && (e = 2 / 3 + c - u), 0 > e && (e += 1), e > 1 && (e -= 1);
            }
            var f = [360 * e, n, h];
            return null != t[3] && f.push(t[3]), f;
        }
    }
    function $e(t, e) {
        var n = je(t);
        if (n) {
            for (var i = 0; 3 > i; i++) (n[i] = 0 > e ? (n[i] * (1 - e)) | 0 : ((255 - n[i]) * e + n[i]) | 0), n[i] > 255 ? (n[i] = 255) : t[i] < 0 && (n[i] = 0);
            return rn(n, 4 === n.length ? "rgba" : "rgb");
        }
    }
    function Qe(t) {
        var e = je(t);
        return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
    }
    function Je(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            n = n || [];
            var i = t * (e.length - 1),
                r = Math.floor(i),
                a = Math.ceil(i),
                o = e[r],
                s = e[a],
                l = i - r;
            return (n[0] = Ne(Xe(o[0], s[0], l))), (n[1] = Ne(Xe(o[1], s[1], l))), (n[2] = Ne(Xe(o[2], s[2], l))), (n[3] = Ve(Xe(o[3], s[3], l))), n;
        }
    }
    function tn(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            var i = t * (e.length - 1),
                r = Math.floor(i),
                a = Math.ceil(i),
                o = je(e[r]),
                s = je(e[a]),
                l = i - r,
                h = rn([Ne(Xe(o[0], s[0], l)), Ne(Xe(o[1], s[1], l)), Ne(Xe(o[2], s[2], l)), Ve(Xe(o[3], s[3], l))], "rgba");
            return n ? { color: h, leftIndex: r, rightIndex: a, value: i } : h;
        }
    }
    function en(t, e, n, i) {
        return (t = je(t)), t ? ((t = Ke(t)), null != e && (t[0] = Fe(e)), null != n && (t[1] = He(n)), null != i && (t[2] = He(i)), rn(Ze(t), "rgba")) : void 0;
    }
    function nn(t, e) {
        return (t = je(t)), t && null != e ? ((t[3] = Ve(e)), rn(t, "rgba")) : void 0;
    }
    function rn(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")";
        }
    }
    function an(t, e) {
        return t[e];
    }
    function on(t, e, n) {
        t[e] = n;
    }
    function sn(t, e, n) {
        return (e - t) * n + t;
    }
    function ln(t, e, n) {
        return n > 0.5 ? e : t;
    }
    function hn(t, e, n, i, r) {
        var a = t.length;
        if (1 === r) for (var o = 0; a > o; o++) i[o] = sn(t[o], e[o], n);
        else for (var s = a && t[0].length, o = 0; a > o; o++) for (var l = 0; s > l; l++) i[o][l] = sn(t[o][l], e[o][l], n);
    }
    function un(t, e, n) {
        var i = t.length,
            r = e.length;
        if (i !== r) {
            var a = i > r;
            if (a) t.length = r;
            else for (var o = i; r > o; o++) t.push(1 === n ? e[o] : Mp.call(e[o]));
        }
        for (var s = t[0] && t[0].length, o = 0; o < t.length; o++)
            if (1 === n) isNaN(t[o]) && (t[o] = e[o]);
            else for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l]);
    }
    function cn(t, e, n) {
        if (t === e) return !0;
        var i = t.length;
        if (i !== e.length) return !1;
        if (1 === n) {
            for (var r = 0; i > r; r++) if (t[r] !== e[r]) return !1;
        } else for (var a = t[0].length, r = 0; i > r; r++) for (var o = 0; a > o; o++) if (t[r][o] !== e[r][o]) return !1;
        return !0;
    }
    function dn(t, e, n, i, r, a, o, s, l) {
        var h = t.length;
        if (1 === l) for (var u = 0; h > u; u++) s[u] = fn(t[u], e[u], n[u], i[u], r, a, o);
        else for (var c = t[0].length, u = 0; h > u; u++) for (var d = 0; c > d; d++) s[u][d] = fn(t[u][d], e[u][d], n[u][d], i[u][d], r, a, o);
    }
    function fn(t, e, n, i, r, a, o) {
        var s = 0.5 * (n - t),
            l = 0.5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
    }
    function pn(t) {
        if (d(t)) {
            var e = t.length;
            if (d(t[0])) {
                for (var n = [], i = 0; e > i; i++) n.push(Mp.call(t[i]));
                return n;
            }
            return Mp.call(t);
        }
        return t;
    }
    function gn(t) {
        return (t[0] = Math.floor(t[0])), (t[1] = Math.floor(t[1])), (t[2] = Math.floor(t[2])), "rgba(" + t.join(",") + ")";
    }
    function vn(t) {
        var e = t[t.length - 1].value;
        return d(e && e[0]) ? 2 : 1;
    }
    function mn(t, e, n, i, r, a) {
        var o = t._getter,
            s = t._setter,
            l = "spline" === e,
            h = i.length;
        if (h) {
            var u,
                c = i[0].value,
                f = d(c),
                p = !1,
                g = !1,
                v = f ? vn(i) : 0;
            i.sort(function (t, e) {
                return t.time - e.time;
            }),
                (u = i[h - 1].time);
            for (var m = [], y = [], _ = i[0].value, x = !0, w = 0; h > w; w++) {
                m.push(i[w].time / u);
                var b = i[w].value;
                if (((f && cn(b, _, v)) || (!f && b === _) || (x = !1), (_ = b), "string" == typeof b)) {
                    var S = je(b);
                    S ? ((b = S), (p = !0)) : (g = !0);
                }
                y.push(b);
            }
            if (a || !x) {
                for (var M = y[h - 1], w = 0; h - 1 > w; w++) f ? un(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
                f && un(o(t._target, r), M, v);
                var I,
                    C,
                    T,
                    D,
                    A,
                    k,
                    P = 0,
                    L = 0;
                if (p) var O = [0, 0, 0, 0];
                var B = function (t, e) {
                        var n;
                        if (0 > e) n = 0;
                        else if (L > e) {
                            for (I = Math.min(P + 1, h - 1), n = I; n >= 0 && !(m[n] <= e); n--);
                            n = Math.min(n, h - 2);
                        } else {
                            for (n = P; h > n && !(m[n] > e); n++);
                            n = Math.min(n - 1, h - 2);
                        }
                        (P = n), (L = e);
                        var i = m[n + 1] - m[n];
                        if (0 !== i)
                            if (((C = (e - m[n]) / i), l))
                                if (((D = y[n]), (T = y[0 === n ? n : n - 1]), (A = y[n > h - 2 ? h - 1 : n + 1]), (k = y[n > h - 3 ? h - 1 : n + 2]), f)) dn(T, D, A, k, C, C * C, C * C * C, o(t, r), v);
                                else {
                                    var a;
                                    if (p) (a = dn(T, D, A, k, C, C * C, C * C * C, O, 1)), (a = gn(O));
                                    else {
                                        if (g) return ln(D, A, C);
                                        a = fn(T, D, A, k, C, C * C, C * C * C);
                                    }
                                    s(t, r, a);
                                }
                            else if (f) hn(y[n], y[n + 1], C, o(t, r), v);
                            else {
                                var a;
                                if (p) hn(y[n], y[n + 1], C, O, 1), (a = gn(O));
                                else {
                                    if (g) return ln(y[n], y[n + 1], C);
                                    a = sn(y[n], y[n + 1], C);
                                }
                                s(t, r, a);
                            }
                    },
                    E = new Re({ target: t._target, life: u, loop: t._loop, delay: t._delay, onframe: B, ondestroy: n });
                return e && "spline" !== e && (E.easing = e), E;
            }
        }
    }
    function yn(t, e, n, i, r, a, o, s) {
        function l() {
            u--, u || (a && a());
        }
        b(i) ? ((a = r), (r = i), (i = 0)) : w(r) ? ((a = r), (r = "linear"), (i = 0)) : w(i) ? ((a = i), (i = 0)) : w(n) ? ((a = n), (n = 500)) : n || (n = 500), t.stopAnimation(), _n(t, "", t, e, n, i, s);
        var h = t.animators.slice(),
            u = h.length;
        u || (a && a());
        for (var c = 0; c < h.length; c++) h[c].done(l).start(r, o);
    }
    function _n(t, e, n, i, r, a, o) {
        var s = {},
            l = 0;
        for (var h in i)
            i.hasOwnProperty(h) && (null != n[h] ? (S(i[h]) && !d(i[h]) ? _n(t, e ? e + "." + h : h, n[h], i[h], r, a, o) : (o ? ((s[h] = n[h]), xn(t, e, h, i[h])) : (s[h] = i[h]), l++)) : null == i[h] || o || xn(t, e, h, i[h]));
        l > 0 &&
            t
                .animate(e, !1)
                .when(null == r ? 500 : r, s)
                .delay(a || 0);
    }
    function xn(t, e, n, i) {
        if (e) {
            var r = {};
            (r[e] = {}), (r[e][n] = i), t.attr(r);
        } else t.attr(n, i);
    }
    function wn(t, e, n, i) {
        0 > n && ((t += n), (n = -n)), 0 > i && ((e += i), (i = -i)), (this.x = t), (this.y = e), (this.width = n), (this.height = i);
    }
    function bn(t) {
        for (var e = 0; t >= Rp; ) (e |= 1 & t), (t >>= 1);
        return t + e;
    }
    function Sn(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (; n > r && i(t[r], t[r - 1]) < 0; ) r++;
            Mn(t, e, r);
        } else for (; n > r && i(t[r], t[r - 1]) >= 0; ) r++;
        return r - e;
    }
    function Mn(t, e, n) {
        for (n--; n > e; ) {
            var i = t[e];
            (t[e++] = t[n]), (t[n--] = i);
        }
    }
    function In(t, e, n, i, r) {
        for (i === e && i++; n > i; i++) {
            for (var a, o = t[i], s = e, l = i; l > s; ) (a = (s + l) >>> 1), r(o, t[a]) < 0 ? (l = a) : (s = a + 1);
            var h = i - s;
            switch (h) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; h > 0; ) (t[s + h] = t[s + h - 1]), h--;
            }
            t[s] = o;
        }
    }
    function Cn(t, e, n, i, r, a) {
        var o = 0,
            s = 0,
            l = 1;
        if (a(t, e[n + r]) > 0) {
            for (s = i - r; s > l && a(t, e[n + r + l]) > 0; ) (o = l), (l = (l << 1) + 1), 0 >= l && (l = s);
            l > s && (l = s), (o += r), (l += r);
        } else {
            for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0; ) (o = l), (l = (l << 1) + 1), 0 >= l && (l = s);
            l > s && (l = s);
            var h = o;
            (o = r - l), (l = r - h);
        }
        for (o++; l > o; ) {
            var u = o + ((l - o) >>> 1);
            a(t, e[n + u]) > 0 ? (o = u + 1) : (l = u);
        }
        return l;
    }
    function Tn(t, e, n, i, r, a) {
        var o = 0,
            s = 0,
            l = 1;
        if (a(t, e[n + r]) < 0) {
            for (s = r + 1; s > l && a(t, e[n + r - l]) < 0; ) (o = l), (l = (l << 1) + 1), 0 >= l && (l = s);
            l > s && (l = s);
            var h = o;
            (o = r - l), (l = r - h);
        } else {
            for (s = i - r; s > l && a(t, e[n + r + l]) >= 0; ) (o = l), (l = (l << 1) + 1), 0 >= l && (l = s);
            l > s && (l = s), (o += r), (l += r);
        }
        for (o++; l > o; ) {
            var u = o + ((l - o) >>> 1);
            a(t, e[n + u]) < 0 ? (l = u) : (o = u + 1);
        }
        return l;
    }
    function Dn(t, e) {
        function n(t, e) {
            (l[c] = t), (h[c] = e), (c += 1);
        }
        function i() {
            for (; c > 1; ) {
                var t = c - 2;
                if ((t >= 1 && h[t - 1] <= h[t] + h[t + 1]) || (t >= 2 && h[t - 2] <= h[t] + h[t - 1])) h[t - 1] < h[t + 1] && t--;
                else if (h[t] > h[t + 1]) break;
                a(t);
            }
        }
        function r() {
            for (; c > 1; ) {
                var t = c - 2;
                t > 0 && h[t - 1] < h[t + 1] && t--, a(t);
            }
        }
        function a(n) {
            var i = l[n],
                r = h[n],
                a = l[n + 1],
                u = h[n + 1];
            (h[n] = r + u), n === c - 3 && ((l[n + 1] = l[n + 2]), (h[n + 1] = h[n + 2])), c--;
            var d = Tn(t[a], t, i, r, 0, e);
            (i += d), (r -= d), 0 !== r && ((u = Cn(t[i + r - 1], t, a, u, u - 1, e)), 0 !== u && (u >= r ? o(i, r, a, u) : s(i, r, a, u)));
        }
        function o(n, i, r, a) {
            var o = 0;
            for (o = 0; i > o; o++) d[o] = t[n + o];
            var s = 0,
                l = r,
                h = n;
            if (((t[h++] = t[l++]), 0 !== --a)) {
                if (1 === i) {
                    for (o = 0; a > o; o++) t[h + o] = t[l + o];
                    return void (t[h + a] = d[s]);
                }
                for (var c, f, p, g = u; ; ) {
                    (c = 0), (f = 0), (p = !1);
                    do
                        if (e(t[l], d[s]) < 0) {
                            if (((t[h++] = t[l++]), f++, (c = 0), 0 === --a)) {
                                p = !0;
                                break;
                            }
                        } else if (((t[h++] = d[s++]), c++, (f = 0), 1 === --i)) {
                            p = !0;
                            break;
                        }
                    while (g > (c | f));
                    if (p) break;
                    do {
                        if (((c = Tn(t[l], d, s, i, 0, e)), 0 !== c)) {
                            for (o = 0; c > o; o++) t[h + o] = d[s + o];
                            if (((h += c), (s += c), (i -= c), 1 >= i)) {
                                p = !0;
                                break;
                            }
                        }
                        if (((t[h++] = t[l++]), 0 === --a)) {
                            p = !0;
                            break;
                        }
                        if (((f = Cn(d[s], t, l, a, 0, e)), 0 !== f)) {
                            for (o = 0; f > o; o++) t[h + o] = t[l + o];
                            if (((h += f), (l += f), (a -= f), 0 === a)) {
                                p = !0;
                                break;
                            }
                        }
                        if (((t[h++] = d[s++]), 1 === --i)) {
                            p = !0;
                            break;
                        }
                        g--;
                    } while (c >= Np || f >= Np);
                    if (p) break;
                    0 > g && (g = 0), (g += 2);
                }
                if (((u = g), 1 > u && (u = 1), 1 === i)) {
                    for (o = 0; a > o; o++) t[h + o] = t[l + o];
                    t[h + a] = d[s];
                } else {
                    if (0 === i) throw new Error();
                    for (o = 0; i > o; o++) t[h + o] = d[s + o];
                }
            } else for (o = 0; i > o; o++) t[h + o] = d[s + o];
        }
        function s(n, i, r, a) {
            var o = 0;
            for (o = 0; a > o; o++) d[o] = t[r + o];
            var s = n + i - 1,
                l = a - 1,
                h = r + a - 1,
                c = 0,
                f = 0;
            if (((t[h--] = t[s--]), 0 !== --i)) {
                if (1 === a) {
                    for (h -= i, s -= i, f = h + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
                    return void (t[h] = d[l]);
                }
                for (var p = u; ; ) {
                    var g = 0,
                        v = 0,
                        m = !1;
                    do
                        if (e(d[l], t[s]) < 0) {
                            if (((t[h--] = t[s--]), g++, (v = 0), 0 === --i)) {
                                m = !0;
                                break;
                            }
                        } else if (((t[h--] = d[l--]), v++, (g = 0), 1 === --a)) {
                            m = !0;
                            break;
                        }
                    while (p > (g | v));
                    if (m) break;
                    do {
                        if (((g = i - Tn(d[l], t, n, i, i - 1, e)), 0 !== g)) {
                            for (h -= g, s -= g, i -= g, f = h + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];
                            if (0 === i) {
                                m = !0;
                                break;
                            }
                        }
                        if (((t[h--] = d[l--]), 1 === --a)) {
                            m = !0;
                            break;
                        }
                        if (((v = a - Cn(t[s], d, 0, a, a - 1, e)), 0 !== v)) {
                            for (h -= v, l -= v, a -= v, f = h + 1, c = l + 1, o = 0; v > o; o++) t[f + o] = d[c + o];
                            if (1 >= a) {
                                m = !0;
                                break;
                            }
                        }
                        if (((t[h--] = t[s--]), 0 === --i)) {
                            m = !0;
                            break;
                        }
                        p--;
                    } while (g >= Np || v >= Np);
                    if (m) break;
                    0 > p && (p = 0), (p += 2);
                }
                if (((u = p), 1 > u && (u = 1), 1 === a)) {
                    for (h -= i, s -= i, f = h + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
                    t[h] = d[l];
                } else {
                    if (0 === a) throw new Error();
                    for (c = h - (a - 1), o = 0; a > o; o++) t[c + o] = d[o];
                }
            } else for (c = h - (a - 1), o = 0; a > o; o++) t[c + o] = d[o];
        }
        var l,
            h,
            u = Np,
            c = 0,
            d = [];
        (l = []), (h = []), (this.mergeRuns = i), (this.forceMergeRuns = r), (this.pushRun = n);
    }
    function An(t, e, n, i) {
        n || (n = 0), i || (i = t.length);
        var r = i - n;
        if (!(2 > r)) {
            var a = 0;
            if (Rp > r) return (a = Sn(t, n, i, e)), void In(t, n, i, n + a, e);
            var o = new Dn(t, e),
                s = bn(r);
            do {
                if (((a = Sn(t, n, i, e)), s > a)) {
                    var l = r;
                    l > s && (l = s), In(t, n, n + l, n + a, e), (a = l);
                }
                o.pushRun(n, a), o.mergeRuns(), (r -= a), (n += a);
            } while (0 !== r);
            o.forceMergeRuns();
        }
    }
    function kn(t, e) {
        return t.zlevel === e.zlevel ? (t.z === e.z ? t.z2 - e.z2 : t.z - e.z) : t.zlevel - e.zlevel;
    }
    function Pn(t, e, n) {
        var i = null == e.x ? 0 : e.x,
            r = null == e.x2 ? 1 : e.x2,
            a = null == e.y ? 0 : e.y,
            o = null == e.y2 ? 0 : e.y2;
        e.global || ((i = i * n.width + n.x), (r = r * n.width + n.x), (a = a * n.height + n.y), (o = o * n.height + n.y)), (i = isNaN(i) ? 0 : i), (r = isNaN(r) ? 1 : r), (a = isNaN(a) ? 0 : a), (o = isNaN(o) ? 0 : o);
        var s = t.createLinearGradient(i, a, r, o);
        return s;
    }
    function Ln(t, e, n) {
        var i = n.width,
            r = n.height,
            a = Math.min(i, r),
            o = null == e.x ? 0.5 : e.x,
            s = null == e.y ? 0.5 : e.y,
            l = null == e.r ? 0.5 : e.r;
        e.global || ((o = o * i + n.x), (s = s * r + n.y), (l *= a));
        var h = t.createRadialGradient(o, s, 0, o, s, l);
        return h;
    }
    function On() {
        return !1;
    }
    function Bn(t, e, n) {
        var i = Bf(),
            r = e.getWidth(),
            a = e.getHeight(),
            o = i.style;
        return o && ((o.position = "absolute"), (o.left = 0), (o.top = 0), (o.width = r + "px"), (o.height = a + "px"), i.setAttribute("data-zr-dom-id", t)), (i.width = r * n), (i.height = a * n), i;
    }
    function En(t) {
        if ("string" == typeof t) {
            var e = Qp.get(t);
            return e && e.image;
        }
        return t;
    }
    function zn(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if ((e && e.__zrImageSrc === t) || !n) return e;
                var a = Qp.get(t),
                    o = { hostEl: n, cb: i, cbPayload: r };
                return a ? ((e = a.image), !Nn(e) && a.pending.push(o)) : ((e = new Image()), (e.onload = e.onerror = Rn), Qp.put(t, (e.__cachedImgObj = { image: e, pending: [o] })), (e.src = e.__zrImageSrc = t)), e;
            }
            return t;
        }
        return e;
    }
    function Rn() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e],
                i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty();
        }
        t.pending.length = 0;
    }
    function Nn(t) {
        return t && t.width && t.height;
    }
    function Fn(t, e) {
        e = e || ig;
        var n = t + ":" + e;
        if (Jp[n]) return Jp[n];
        for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max($n(i[a], e).width, r);
        return tg > eg && ((tg = 0), (Jp = {})), tg++, (Jp[n] = r), r;
    }
    function Vn(t, e, n, i, r, a, o, s) {
        return o ? Hn(t, e, n, i, r, a, o, s) : Gn(t, e, n, i, r, a, s);
    }
    function Gn(t, e, n, i, r, a, o) {
        var s = Qn(t, e, r, a, o),
            l = Fn(t, e);
        r && (l += r[1] + r[3]);
        var h = s.outerHeight,
            u = Wn(0, l, n),
            c = Xn(0, h, i),
            d = new wn(u, c, l, h);
        return (d.lineHeight = s.lineHeight), d;
    }
    function Hn(t, e, n, i, r, a, o, s) {
        var l = Jn(t, { rich: o, truncate: s, font: e, textAlign: n, textPadding: r, textLineHeight: a }),
            h = l.outerWidth,
            u = l.outerHeight,
            c = Wn(0, h, n),
            d = Xn(0, u, i);
        return new wn(c, d, h, u);
    }
    function Wn(t, e, n) {
        return "right" === n ? (t -= e) : "center" === n && (t -= e / 2), t;
    }
    function Xn(t, e, n) {
        return "middle" === n ? (t -= e / 2) : "bottom" === n && (t -= e), t;
    }
    function Un(t, e, n) {
        var i = e.textPosition,
            r = e.textDistance,
            a = n.x,
            o = n.y;
        r = r || 0;
        var s = n.height,
            l = n.width,
            h = s / 2,
            u = "left",
            c = "top";
        switch (i) {
            case "left":
                (a -= r), (o += h), (u = "right"), (c = "middle");
                break;
            case "right":
                (a += r + l), (o += h), (c = "middle");
                break;
            case "top":
                (a += l / 2), (o -= r), (u = "center"), (c = "bottom");
                break;
            case "bottom":
                (a += l / 2), (o += s + r), (u = "center");
                break;
            case "inside":
                (a += l / 2), (o += h), (u = "center"), (c = "middle");
                break;
            case "insideLeft":
                (a += r), (o += h), (c = "middle");
                break;
            case "insideRight":
                (a += l - r), (o += h), (u = "right"), (c = "middle");
                break;
            case "insideTop":
                (a += l / 2), (o += r), (u = "center");
                break;
            case "insideBottom":
                (a += l / 2), (o += s - r), (u = "center"), (c = "bottom");
                break;
            case "insideTopLeft":
                (a += r), (o += r);
                break;
            case "insideTopRight":
                (a += l - r), (o += r), (u = "right");
                break;
            case "insideBottomLeft":
                (a += r), (o += s - r), (c = "bottom");
                break;
            case "insideBottomRight":
                (a += l - r), (o += s - r), (u = "right"), (c = "bottom");
        }
        return (t = t || {}), (t.x = a), (t.y = o), (t.textAlign = u), (t.textVerticalAlign = c), t;
    }
    function Yn(t, e, n, i, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = qn(e, n, i, r);
        for (var o = 0, s = a.length; s > o; o++) a[o] = jn(a[o], r);
        return a.join("\n");
    }
    function qn(t, e, n, i) {
        (i = o({}, i)), (i.font = e);
        var n = A(n, "...");
        i.maxIterations = A(i.maxIterations, 2);
        var r = (i.minChar = A(i.minChar, 0));
        i.cnCharWidth = Fn("国", e);
        var a = (i.ascCharWidth = Fn("a", e));
        i.placeholder = A(i.placeholder, "");
        for (var s = (t = Math.max(0, t - 1)), l = 0; r > l && s >= a; l++) s -= a;
        var h = Fn(n, e);
        return h > s && ((n = ""), (h = 0)), (s = t - h), (i.ellipsis = n), (i.ellipsisWidth = h), (i.contentWidth = s), (i.containerWidth = t), i;
    }
    function jn(t, e) {
        var n = e.containerWidth,
            i = e.font,
            r = e.contentWidth;
        if (!n) return "";
        var a = Fn(t, i);
        if (n >= a) return t;
        for (var o = 0; ; o++) {
            if (r >= a || o >= e.maxIterations) {
                t += e.ellipsis;
                break;
            }
            var s = 0 === o ? Zn(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor((t.length * r) / a) : 0;
            (t = t.substr(0, s)), (a = Fn(t, i));
        }
        return "" === t && (t = e.placeholder), t;
    }
    function Zn(t, e, n, i) {
        for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
            var s = t.charCodeAt(a);
            r += s >= 0 && 127 >= s ? n : i;
        }
        return a;
    }
    function Kn(t) {
        return Fn("国", t);
    }
    function $n(t, e) {
        return rg.measureText(t, e);
    }
    function Qn(t, e, n, i, r) {
        null != t && (t += "");
        var a = A(i, Kn(e)),
            o = t ? t.split("\n") : [],
            s = o.length * a,
            l = s,
            h = !0;
        if ((n && (l += n[0] + n[2]), t && r)) {
            h = !1;
            var u = r.outerHeight,
                c = r.outerWidth;
            if (null != u && l > u) (t = ""), (o = []);
            else if (null != c) for (var d = qn(c - (n ? n[1] + n[3] : 0), e, r.ellipsis, { minChar: r.minChar, placeholder: r.placeholder }), f = 0, p = o.length; p > f; f++) o[f] = jn(o[f], d);
        }
        return { lines: o, height: s, outerHeight: l, lineHeight: a, canCacheByTextString: h };
    }
    function Jn(t, e) {
        var n = { lines: [], width: 0, height: 0 };
        if ((null != t && (t += ""), !t)) return n;
        for (var i, r = (ng.lastIndex = 0); null != (i = ng.exec(t)); ) {
            var a = i.index;
            a > r && ti(n, t.substring(r, a)), ti(n, i[2], i[1]), (r = ng.lastIndex);
        }
        r < t.length && ti(n, t.substring(r, t.length));
        var o = n.lines,
            s = 0,
            l = 0,
            h = [],
            u = e.textPadding,
            c = e.truncate,
            d = c && c.outerWidth,
            f = c && c.outerHeight;
        u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));
        for (var p = 0; p < o.length; p++) {
            for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
                var _ = g.tokens[y],
                    x = (_.styleName && e.rich[_.styleName]) || {},
                    w = (_.textPadding = x.textPadding),
                    b = (_.font = x.font || e.font),
                    S = (_.textHeight = A(x.textHeight, Kn(b)));
                if (
                    (w && (S += w[0] + w[2]),
                    (_.height = S),
                    (_.lineHeight = k(x.textLineHeight, e.textLineHeight, S)),
                    (_.textAlign = (x && x.textAlign) || e.textAlign),
                    (_.textVerticalAlign = (x && x.textVerticalAlign) || "middle"),
                    null != f && s + _.lineHeight > f)
                )
                    return { lines: [], width: 0, height: 0 };
                _.textWidth = Fn(_.text, b);
                var M = x.textWidth,
                    I = null == M || "auto" === M;
                if ("string" == typeof M && "%" === M.charAt(M.length - 1)) (_.percentWidth = M), h.push(_), (M = 0);
                else {
                    if (I) {
                        M = _.textWidth;
                        var C = x.textBackgroundColor,
                            T = C && C.image;
                        T && ((T = En(T)), Nn(T) && (M = Math.max(M, (T.width * S) / T.height)));
                    }
                    var D = w ? w[1] + w[3] : 0;
                    M += D;
                    var P = null != d ? d - m : null;
                    null != P && M > P && (!I || D > P ? ((_.text = ""), (_.textWidth = M = 0)) : ((_.text = Yn(_.text, P - D, b, c.ellipsis, { minChar: c.minChar })), (_.textWidth = Fn(_.text, b)), (M = _.textWidth + D)));
                }
                (m += _.width = M), x && (v = Math.max(v, _.lineHeight));
            }
            (g.width = m), (g.lineHeight = v), (s += v), (l = Math.max(l, m));
        }
        (n.outerWidth = n.width = A(e.textWidth, l)), (n.outerHeight = n.height = A(e.textHeight, s)), u && ((n.outerWidth += u[1] + u[3]), (n.outerHeight += u[0] + u[2]));
        for (var p = 0; p < h.length; p++) {
            var _ = h[p],
                L = _.percentWidth;
            _.width = (parseInt(L, 10) / 100) * l;
        }
        return n;
    }
    function ti(t, e, n) {
        for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o],
                l = { styleName: n, text: s, isLineHolder: !s && !i };
            if (o) a.push({ tokens: [l] });
            else {
                var h = (a[a.length - 1] || (a[0] = { tokens: [] })).tokens,
                    u = h.length;
                1 === u && h[0].isLineHolder ? (h[0] = l) : (s || !u || i) && h.push(l);
            }
        }
    }
    function ei(t) {
        var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
        return (e && B(e)) || t.textFont || t.font;
    }
    function ni(t, e) {
        var n,
            i,
            r,
            a,
            o = e.x,
            s = e.y,
            l = e.width,
            h = e.height,
            u = e.r;
        0 > l && ((o += l), (l = -l)),
            0 > h && ((s += h), (h = -h)),
            "number" == typeof u
                ? (n = i = r = a = u)
                : u instanceof Array
                ? 1 === u.length
                    ? (n = i = r = a = u[0])
                    : 2 === u.length
                    ? ((n = r = u[0]), (i = a = u[1]))
                    : 3 === u.length
                    ? ((n = u[0]), (i = a = u[1]), (r = u[2]))
                    : ((n = u[0]), (i = u[1]), (r = u[2]), (a = u[3]))
                : (n = i = r = a = 0);
        var c;
        n + i > l && ((c = n + i), (n *= l / c), (i *= l / c)),
            r + a > l && ((c = r + a), (r *= l / c), (a *= l / c)),
            i + r > h && ((c = i + r), (i *= h / c), (r *= h / c)),
            n + a > h && ((c = n + a), (n *= h / c), (a *= h / c)),
            t.moveTo(o + n, s),
            t.lineTo(o + l - i, s),
            0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0),
            t.lineTo(o + l, s + h - r),
            0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2),
            t.lineTo(o + a, s + h),
            0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI),
            t.lineTo(o, s + n),
            0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI);
    }
    function ii(t) {
        return ri(t), f(t.rich, ri), t;
    }
    function ri(t) {
        if (t) {
            t.font = ei(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), (t.textAlign = null == e || og[e] ? e : "left");
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"), (t.textVerticalAlign = null == n || sg[n] ? n : "top");
            var i = t.textPadding;
            i && (t.textPadding = L(t.textPadding));
        }
    }
    function ai(t, e, n, i, r, a) {
        i.rich ? si(t, e, n, i, r, a) : oi(t, e, n, i, r, a);
    }
    function oi(t, e, n, i, r, a) {
        var o,
            s = ci(i),
            l = !1,
            h = e.__attrCachedBy === Hp.PLAIN_TEXT;
        a !== Wp ? (a && ((o = a.style), (l = !s && h && o)), (e.__attrCachedBy = s ? Hp.NONE : Hp.PLAIN_TEXT)) : h && (e.__attrCachedBy = Hp.NONE);
        var u = i.font || ag;
        (l && u === (o.font || ag)) || (e.font = u);
        var c = t.__computedFont;
        t.__styleFont !== u && ((t.__styleFont = u), (c = t.__computedFont = e.font));
        var d = i.textPadding,
            f = i.textLineHeight,
            p = t.__textCotentBlock;
        (!p || t.__dirtyText) && (p = t.__textCotentBlock = Qn(n, c, d, f, i.truncate));
        var g = p.outerHeight,
            v = p.lines,
            m = p.lineHeight,
            y = pi(ug, t, i, r),
            _ = y.baseX,
            x = y.baseY,
            w = y.textAlign || "left",
            b = y.textVerticalAlign;
        hi(e, i, r, _, x);
        var S = Xn(x, g, b),
            M = _,
            I = S;
        if (s || d) {
            var C = Fn(n, c),
                T = C;
            d && (T += d[1] + d[3]);
            var D = Wn(_, T, w);
            s && di(t, e, i, D, S, T, g), d && ((M = _i(_, w, d)), (I += d[0]));
        }
        (e.textAlign = w), (e.textBaseline = "middle"), (e.globalAlpha = i.opacity || 1);
        for (var A = 0; A < lg.length; A++) {
            var k = lg[A],
                P = k[0],
                L = k[1],
                O = i[P];
            (l && O === o[P]) || (e[L] = Gp(e, L, O || k[2]));
        }
        I += m / 2;
        var B = i.textStrokeWidth,
            E = l ? o.textStrokeWidth : null,
            z = !l || B !== E,
            R = !l || z || i.textStroke !== o.textStroke,
            N = vi(i.textStroke, B),
            F = mi(i.textFill);
        if ((N && (z && (e.lineWidth = B), R && (e.strokeStyle = N)), F && ((l && i.textFill === o.textFill) || (e.fillStyle = F)), 1 === v.length)) N && e.strokeText(v[0], M, I), F && e.fillText(v[0], M, I);
        else for (var A = 0; A < v.length; A++) N && e.strokeText(v[A], M, I), F && e.fillText(v[A], M, I), (I += m);
    }
    function si(t, e, n, i, r, a) {
        a !== Wp && (e.__attrCachedBy = Hp.NONE);
        var o = t.__textCotentBlock;
        (!o || t.__dirtyText) && (o = t.__textCotentBlock = Jn(n, i)), li(t, e, o, i, r);
    }
    function li(t, e, n, i, r) {
        var a = n.width,
            o = n.outerWidth,
            s = n.outerHeight,
            l = i.textPadding,
            h = pi(ug, t, i, r),
            u = h.baseX,
            c = h.baseY,
            d = h.textAlign,
            f = h.textVerticalAlign;
        hi(e, i, r, u, c);
        var p = Wn(u, o, d),
            g = Xn(c, s, f),
            v = p,
            m = g;
        l && ((v += l[3]), (m += l[0]));
        var y = v + a;
        ci(i) && di(t, e, i, p, g, o, s);
        for (var _ = 0; _ < n.lines.length; _++) {
            for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, C = 0, T = v, D = y, A = S - 1; S > C && ((x = b[C]), !x.textAlign || "left" === x.textAlign); )
                ui(t, e, x, i, M, m, T, "left"), (I -= x.width), (T += x.width), C++;
            for (; A >= 0 && ((x = b[A]), "right" === x.textAlign); ) ui(t, e, x, i, M, m, D, "right"), (I -= x.width), (D -= x.width), A--;
            for (T += (a - (T - v) - (y - D) - I) / 2; A >= C; ) (x = b[C]), ui(t, e, x, i, M, m, T + x.width / 2, "center"), (T += x.width), C++;
            m += M;
        }
    }
    function hi(t, e, n, i, r) {
        if (n && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? ((i = n.width / 2 + n.x), (r = n.height / 2 + n.y)) : a && ((i = a[0] + n.x), (r = a[1] + n.y)), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);
        }
    }
    function ui(t, e, n, i, r, a, o, s) {
        var l = i.rich[n.styleName] || {};
        l.text = n.text;
        var h = n.textVerticalAlign,
            u = a + r / 2;
        "top" === h ? (u = a + n.height / 2) : "bottom" === h && (u = a + r - n.height / 2), !n.isLineHolder && ci(l) && di(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);
        var c = n.textPadding;
        c && ((o = _i(o, s, c)), (u -= n.height / 2 - c[2] - n.textHeight / 2)),
            gi(e, "shadowBlur", k(l.textShadowBlur, i.textShadowBlur, 0)),
            gi(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"),
            gi(e, "shadowOffsetX", k(l.textShadowOffsetX, i.textShadowOffsetX, 0)),
            gi(e, "shadowOffsetY", k(l.textShadowOffsetY, i.textShadowOffsetY, 0)),
            gi(e, "textAlign", s),
            gi(e, "textBaseline", "middle"),
            gi(e, "font", n.font || ag);
        var d = vi(l.textStroke || i.textStroke, p),
            f = mi(l.textFill || i.textFill),
            p = A(l.textStrokeWidth, i.textStrokeWidth);
        d && (gi(e, "lineWidth", p), gi(e, "strokeStyle", d), e.strokeText(n.text, o, u)), f && (gi(e, "fillStyle", f), e.fillText(n.text, o, u));
    }
    function ci(t) {
        return !!(t.textBackgroundColor || (t.textBorderWidth && t.textBorderColor));
    }
    function di(t, e, n, i, r, a, o) {
        var s = n.textBackgroundColor,
            l = n.textBorderWidth,
            h = n.textBorderColor,
            u = b(s);
        if (
            (gi(e, "shadowBlur", n.textBoxShadowBlur || 0),
            gi(e, "shadowColor", n.textBoxShadowColor || "transparent"),
            gi(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0),
            gi(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0),
            u || (l && h))
        ) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? ni(e, { x: i, y: r, width: a, height: o, r: c }) : e.rect(i, r, a, o), e.closePath();
        }
        if (u)
            if ((gi(e, "fillStyle", s), null != n.fillOpacity)) {
                var d = e.globalAlpha;
                (e.globalAlpha = n.fillOpacity * n.opacity), e.fill(), (e.globalAlpha = d);
            } else e.fill();
        else if (S(s)) {
            var f = s.image;
            (f = zn(f, null, t, fi, s)), f && Nn(f) && e.drawImage(f, i, r, a, o);
        }
        if (l && h)
            if ((gi(e, "lineWidth", l), gi(e, "strokeStyle", h), null != n.strokeOpacity)) {
                var d = e.globalAlpha;
                (e.globalAlpha = n.strokeOpacity * n.opacity), e.stroke(), (e.globalAlpha = d);
            } else e.stroke();
    }
    function fi(t, e) {
        e.image = t;
    }
    function pi(t, e, n, i) {
        var r = n.x || 0,
            a = n.y || 0,
            o = n.textAlign,
            s = n.textVerticalAlign;
        if (i) {
            var l = n.textPosition;
            if (l instanceof Array) (r = i.x + yi(l[0], i.width)), (a = i.y + yi(l[1], i.height));
            else {
                var h = e && e.calculateTextPosition ? e.calculateTextPosition(hg, n, i) : Un(hg, n, i);
                (r = h.x), (a = h.y), (o = o || h.textAlign), (s = s || h.textVerticalAlign);
            }
            var u = n.textOffset;
            u && ((r += u[0]), (a += u[1]));
        }
        return (t = t || {}), (t.baseX = r), (t.baseY = a), (t.textAlign = o), (t.textVerticalAlign = s), t;
    }
    function gi(t, e, n) {
        return (t[e] = Gp(t, e, n)), t[e];
    }
    function vi(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
    }
    function mi(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
    }
    function yi(t, e) {
        return "string" == typeof t ? (t.lastIndexOf("%") >= 0 ? (parseFloat(t) / 100) * e : parseFloat(t)) : t;
    }
    function _i(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
    }
    function xi(t, e) {
        return null != t && (t || e.textBackgroundColor || (e.textBorderWidth && e.textBorderColor) || e.textPadding);
    }
    function wi(t) {
        (t = t || {}), Lp.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        (this.style = new Up(t.style, this)), (this._rect = null), (this.__clipPaths = null);
    }
    function bi(t) {
        wi.call(this, t);
    }
    function Si(t) {
        return parseInt(t, 10);
    }
    function Mi(t) {
        return t ? (t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0) : !1;
    }
    function Ii(t, e, n) {
        return mg.copy(t.getBoundingRect()), t.transform && mg.applyTransform(t.transform), (yg.width = e), (yg.height = n), !mg.intersect(yg);
    }
    function Ci(t, e) {
        if (t === e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0;
        return !1;
    }
    function Ti(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);
        }
    }
    function Di(t, e) {
        var n = document.createElement("div");
        return (n.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";"), n;
    }
    function Ai(t) {
        return "mousewheel" === t && Sf.browser.firefox ? "DOMMouseScroll" : t;
    }
    function ki(t) {
        (t._touching = !0),
            clearTimeout(t._touchTimer),
            (t._touchTimer = setTimeout(function () {
                t._touching = !1;
            }, 700));
    }
    function Pi(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e;
    }
    function Li(t) {
        function e(t, e) {
            return function () {
                return e._touching ? void 0 : t.apply(e, arguments);
            };
        }
        f(Sg, function (e) {
            t._handlers[e] = y(Cg[e], t);
        }),
            f(Ig, function (e) {
                t._handlers[e] = y(Cg[e], t);
            }),
            f(bg, function (n) {
                t._handlers[n] = e(Cg[n], t);
            });
    }
    function Oi(t) {
        function e(e, n) {
            f(
                e,
                function (e) {
                    _e(t, Ai(e), n._handlers[e]);
                },
                n
            );
        }
        Uf.call(this), (this.dom = t), (this._touching = !1), this._touchTimer, (this._handlers = {}), Li(this), Sf.pointerEventsSupported ? e(Ig, this) : (Sf.touchEventsSupported && e(Sg, this), e(bg, this));
    }
    function Bi(t, e) {
        var n = new Lg(wf(), t, e);
        return (kg[n.id] = n), n;
    }
    function Ei(t) {
        if (t) t.dispose();
        else {
            for (var e in kg) kg.hasOwnProperty(e) && kg[e].dispose();
            kg = {};
        }
        return this;
    }
    function zi(t) {
        return kg[t];
    }
    function Ri(t, e) {
        Ag[t] = e;
    }
    function Ni(t) {
        delete kg[t];
    }
    function Fi(t) {
        return t instanceof Array ? t : null == t ? [] : [t];
    }
    function Vi(t, e, n) {
        if (t) {
            (t[e] = t[e] || {}), (t.emphasis = t.emphasis || {}), (t.emphasis[e] = t.emphasis[e] || {});
            for (var i = 0, r = n.length; r > i; i++) {
                var a = n[i];
                !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
            }
        }
    }
    function Gi(t) {
        return !Eg(t) || zg(t) || t instanceof Date ? t : t.value;
    }
    function Hi(t) {
        return Eg(t) && !(t instanceof Array);
    }
    function Wi(t, e) {
        e = (e || []).slice();
        var n = p(t || [], function (t) {
            return { exist: t };
        });
        return (
            Bg(e, function (t, i) {
                if (Eg(t)) {
                    for (var r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return (n[r].option = t), void (e[i] = null);
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r].exist;
                        if (!(n[r].option || (null != a.id && null != t.id) || null == t.name || Yi(t) || Yi(a) || a.name !== t.name + "")) return (n[r].option = t), void (e[i] = null);
                    }
                }
            }),
            Bg(e, function (t) {
                if (Eg(t)) {
                    for (var e = 0; e < n.length; e++) {
                        var i = n[e].exist;
                        if (!n[e].option && !Yi(i) && null == t.id) {
                            n[e].option = t;
                            break;
                        }
                    }
                    e >= n.length && n.push({ option: t });
                }
            }),
            n
        );
    }
    function Xi(t) {
        var e = N();
        Bg(t, function (t) {
            var n = t.exist;
            n && e.set(n.id, t);
        }),
            Bg(t, function (t) {
                var n = t.option;
                O(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {});
            }),
            Bg(t, function (t, n) {
                var i = t.exist,
                    r = t.option,
                    a = t.keyInfo;
                if (Eg(r)) {
                    if (((a.name = null != r.name ? r.name + "" : i ? i.name : Rg + n), i)) a.id = i.id;
                    else if (null != r.id) a.id = r.id + "";
                    else {
                        var o = 0;
                        do a.id = "\x00" + a.name + "\x00" + o++;
                        while (e.get(a.id));
                    }
                    e.set(a.id, t);
                }
            });
    }
    function Ui(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Rg));
    }
    function Yi(t) {
        return Eg(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00");
    }
    function qi(t, e) {
        return null != e.dataIndexInside
            ? e.dataIndexInside
            : null != e.dataIndex
            ? x(e.dataIndex)
                ? p(e.dataIndex, function (e) {
                      return t.indexOfRawIndex(e);
                  })
                : t.indexOfRawIndex(e.dataIndex)
            : null != e.name
            ? x(e.name)
                ? p(e.name, function (e) {
                      return t.indexOfName(e);
                  })
                : t.indexOfName(e.name)
            : void 0;
    }
    function ji() {
        var t = "__\x00ec_inner_" + Fg++ + "_" + Math.random().toFixed(5);
        return function (e) {
            return e[t] || (e[t] = {});
        };
    }
    function Zi(t, e, n) {
        if (b(e)) {
            var i = {};
            (i[e + "Index"] = 0), (e = i);
        }
        var r = n && n.defaultMainType;
        !r || Ki(e, r + "Index") || Ki(e, r + "Id") || Ki(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return (
            Bg(e, function (i, r) {
                var i = e[r];
                if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = i);
                var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
                    s = o[1],
                    l = (o[2] || "").toLowerCase();
                if (!(!s || !l || null == i || ("index" === l && "none" === i) || (n && n.includeMainTypes && h(n.includeMainTypes, s) < 0))) {
                    var u = { mainType: s };
                    ("index" !== l || "all" !== i) && (u[l] = i);
                    var c = t.queryComponents(u);
                    (a[s + "Models"] = c), (a[s + "Model"] = c[0]);
                }
            }),
            a
        );
    }
    function Ki(t, e) {
        return t && t.hasOwnProperty(e);
    }
    function $i(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : (t[e] = n);
    }
    function Qi(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e];
    }
    function Ji(t) {
        return "auto" === t ? (Sf.domSupported ? "html" : "richText") : t || "html";
    }
    function tr(t) {
        var e = { main: "", sub: "" };
        return t && ((t = t.split(Vg)), (e.main = t[0] || ""), (e.sub = t[1] || "")), e;
    }
    function er(t) {
        O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
    }
    function nr(t) {
        (t.$constructor = t),
            (t.extend = function (t) {
                var e = this,
                    n = function () {
                        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
                    };
                return o(n.prototype, t), (n.extend = this.extend), (n.superCall = rr), (n.superApply = ar), u(n, this), (n.superClass = e), n;
            });
    }
    function ir(t) {
        var e = ["__\x00is_clz", Hg++, Math.random().toFixed(3)].join("_");
        (t.prototype[e] = !0),
            (t.isInstance = function (t) {
                return !(!t || !t[e]);
            });
    }
    function rr(t, e) {
        var n = P(arguments, 2);
        return this.superClass.prototype[e].apply(t, n);
    }
    function ar(t, e, n) {
        return this.superClass.prototype[e].apply(t, n);
    }
    function or(t, e) {
        function n(t) {
            var e = i[t.main];
            return (e && e[Gg]) || ((e = i[t.main] = {}), (e[Gg] = !0)), e;
        }
        e = e || {};
        var i = {};
        if (
            ((t.registerClass = function (t, e) {
                if (e)
                    if ((er(e), (e = tr(e)), e.sub)) {
                        if (e.sub !== Gg) {
                            var r = n(e);
                            r[e.sub] = t;
                        }
                    } else i[e.main] = t;
                return t;
            }),
            (t.getClass = function (t, e, n) {
                var r = i[t];
                if ((r && r[Gg] && (r = e ? r[e] : null), n && !r)) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
                return r;
            }),
            (t.getClassesByMainType = function (t) {
                t = tr(t);
                var e = [],
                    n = i[t.main];
                return (
                    n && n[Gg]
                        ? f(n, function (t, n) {
                              n !== Gg && e.push(t);
                          })
                        : e.push(n),
                    e
                );
            }),
            (t.hasClass = function (t) {
                return (t = tr(t)), !!i[t.main];
            }),
            (t.getAllClassMainTypes = function () {
                var t = [];
                return (
                    f(i, function (e, n) {
                        t.push(n);
                    }),
                    t
                );
            }),
            (t.hasSubTypes = function (t) {
                t = tr(t);
                var e = i[t.main];
                return e && e[Gg];
            }),
            (t.parseClassType = tr),
            e.registerWhenExtend)
        ) {
            var r = t.extend;
            r &&
                (t.extend = function (e) {
                    var n = r.call(this, e);
                    return t.registerClass(n, e.type);
                });
        }
        return t;
    }
    function sr(t) {
        return t > -Kg && Kg > t;
    }
    function lr(t) {
        return t > Kg || -Kg > t;
    }
    function hr(t, e, n, i, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);
    }
    function ur(t, e, n, i, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);
    }
    function cr(t, e, n, i, r, a) {
        var o = i + 3 * (e - n) - t,
            s = 3 * (n - 2 * e + t),
            l = 3 * (e - t),
            h = t - r,
            u = s * s - 3 * o * l,
            c = s * l - 9 * o * h,
            d = l * l - 3 * s * h,
            f = 0;
        if (sr(u) && sr(c))
            if (sr(s)) a[0] = 0;
            else {
                var p = -l / s;
                p >= 0 && 1 >= p && (a[f++] = p);
            }
        else {
            var g = c * c - 4 * u * d;
            if (sr(g)) {
                var v = c / u,
                    p = -s / o + v,
                    m = -v / 2;
                p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m);
            } else if (g > 0) {
                var y = Zg(g),
                    _ = u * s + 1.5 * o * (-c + y),
                    x = u * s + 1.5 * o * (-c - y);
                (_ = 0 > _ ? -jg(-_, Jg) : jg(_, Jg)), (x = 0 > x ? -jg(-x, Jg) : jg(x, Jg));
                var p = (-s - (_ + x)) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p);
            } else {
                var w = (2 * u * s - 3 * o * c) / (2 * Zg(u * u * u)),
                    b = Math.acos(w) / 3,
                    S = Zg(u),
                    M = Math.cos(b),
                    p = (-s - 2 * S * M) / (3 * o),
                    m = (-s + S * (M + Qg * Math.sin(b))) / (3 * o),
                    I = (-s + S * (M - Qg * Math.sin(b))) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), I >= 0 && 1 >= I && (a[f++] = I);
            }
        }
        return f;
    }
    function dr(t, e, n, i, r) {
        var a = 6 * n - 12 * e + 6 * t,
            o = 9 * e + 3 * i - 3 * t - 9 * n,
            s = 3 * e - 3 * t,
            l = 0;
        if (sr(o)) {
            if (lr(a)) {
                var h = -s / a;
                h >= 0 && 1 >= h && (r[l++] = h);
            }
        } else {
            var u = a * a - 4 * o * s;
            if (sr(u)) r[0] = -a / (2 * o);
            else if (u > 0) {
                var c = Zg(u),
                    h = (-a + c) / (2 * o),
                    d = (-a - c) / (2 * o);
                h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d);
            }
        }
        return l;
    }
    function fr(t, e, n, i, r, a) {
        var o = (e - t) * r + t,
            s = (n - e) * r + e,
            l = (i - n) * r + n,
            h = (s - o) * r + o,
            u = (l - s) * r + s,
            c = (u - h) * r + h;
        (a[0] = t), (a[1] = o), (a[2] = h), (a[3] = c), (a[4] = c), (a[5] = u), (a[6] = l), (a[7] = i);
    }
    function pr(t, e, n, i, r, a, o, s, l, h, u) {
        var c,
            d,
            f,
            p,
            g,
            v = 0.005,
            m = 1 / 0;
        (tv[0] = l), (tv[1] = h);
        for (var y = 0; 1 > y; y += 0.05) (ev[0] = hr(t, n, r, o, y)), (ev[1] = hr(e, i, a, s, y)), (p = Hf(tv, ev)), m > p && ((c = y), (m = p));
        m = 1 / 0;
        for (var _ = 0; 32 > _ && !($g > v); _++)
            (d = c - v),
                (f = c + v),
                (ev[0] = hr(t, n, r, o, d)),
                (ev[1] = hr(e, i, a, s, d)),
                (p = Hf(ev, tv)),
                d >= 0 && m > p ? ((c = d), (m = p)) : ((nv[0] = hr(t, n, r, o, f)), (nv[1] = hr(e, i, a, s, f)), (g = Hf(nv, tv)), 1 >= f && m > g ? ((c = f), (m = g)) : (v *= 0.5));
        return u && ((u[0] = hr(t, n, r, o, c)), (u[1] = hr(e, i, a, s, c))), Zg(m);
    }
    function gr(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n;
    }
    function vr(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e));
    }
    function mr(t, e, n, i, r) {
        var a = t - 2 * e + n,
            o = 2 * (e - t),
            s = t - i,
            l = 0;
        if (sr(a)) {
            if (lr(o)) {
                var h = -s / o;
                h >= 0 && 1 >= h && (r[l++] = h);
            }
        } else {
            var u = o * o - 4 * a * s;
            if (sr(u)) {
                var h = -o / (2 * a);
                h >= 0 && 1 >= h && (r[l++] = h);
            } else if (u > 0) {
                var c = Zg(u),
                    h = (-o + c) / (2 * a),
                    d = (-o - c) / (2 * a);
                h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d);
            }
        }
        return l;
    }
    function yr(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? 0.5 : (t - e) / i;
    }
    function _r(t, e, n, i, r) {
        var a = (e - t) * i + t,
            o = (n - e) * i + e,
            s = (o - a) * i + a;
        (r[0] = t), (r[1] = a), (r[2] = s), (r[3] = s), (r[4] = o), (r[5] = n);
    }
    function xr(t, e, n, i, r, a, o, s, l) {
        var h,
            u = 0.005,
            c = 1 / 0;
        (tv[0] = o), (tv[1] = s);
        for (var d = 0; 1 > d; d += 0.05) {
            (ev[0] = gr(t, n, r, d)), (ev[1] = gr(e, i, a, d));
            var f = Hf(tv, ev);
            c > f && ((h = d), (c = f));
        }
        c = 1 / 0;
        for (var p = 0; 32 > p && !($g > u); p++) {
            var g = h - u,
                v = h + u;
            (ev[0] = gr(t, n, r, g)), (ev[1] = gr(e, i, a, g));
            var f = Hf(ev, tv);
            if (g >= 0 && c > f) (h = g), (c = f);
            else {
                (nv[0] = gr(t, n, r, v)), (nv[1] = gr(e, i, a, v));
                var m = Hf(nv, tv);
                1 >= v && c > m ? ((h = v), (c = m)) : (u *= 0.5);
            }
        }
        return l && ((l[0] = gr(t, n, r, h)), (l[1] = gr(e, i, a, h))), Zg(c);
    }
    function wr(t, e, n) {
        if (0 !== t.length) {
            var i,
                r = t[0],
                a = r[0],
                o = r[0],
                s = r[1],
                l = r[1];
            for (i = 1; i < t.length; i++) (r = t[i]), (a = iv(a, r[0])), (o = rv(o, r[0])), (s = iv(s, r[1])), (l = rv(l, r[1]));
            (e[0] = a), (e[1] = s), (n[0] = o), (n[1] = l);
        }
    }
    function br(t, e, n, i, r, a) {
        (r[0] = iv(t, n)), (r[1] = iv(e, i)), (a[0] = rv(t, n)), (a[1] = rv(e, i));
    }
    function Sr(t, e, n, i, r, a, o, s, l, h) {
        var u,
            c = dr,
            d = hr,
            f = c(t, n, r, o, cv);
        for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; f > u; u++) {
            var p = d(t, n, r, o, cv[u]);
            (l[0] = iv(p, l[0])), (h[0] = rv(p, h[0]));
        }
        for (f = c(e, i, a, s, dv), u = 0; f > u; u++) {
            var g = d(e, i, a, s, dv[u]);
            (l[1] = iv(g, l[1])), (h[1] = rv(g, h[1]));
        }
        (l[0] = iv(t, l[0])), (h[0] = rv(t, h[0])), (l[0] = iv(o, l[0])), (h[0] = rv(o, h[0])), (l[1] = iv(e, l[1])), (h[1] = rv(e, h[1])), (l[1] = iv(s, l[1])), (h[1] = rv(s, h[1]));
    }
    function Mr(t, e, n, i, r, a, o, s) {
        var l = yr,
            h = gr,
            u = rv(iv(l(t, n, r), 1), 0),
            c = rv(iv(l(e, i, a), 1), 0),
            d = h(t, n, r, u),
            f = h(e, i, a, c);
        (o[0] = iv(t, r, d)), (o[1] = iv(e, a, f)), (s[0] = rv(t, r, d)), (s[1] = rv(e, a, f));
    }
    function Ir(t, e, n, i, r, a, o, s, l) {
        var h = oe,
            u = se,
            c = Math.abs(r - a);
        if (1e-4 > c % sv && c > 1e-4) return (s[0] = t - n), (s[1] = e - i), (l[0] = t + n), void (l[1] = e + i);
        if (
            ((lv[0] = ov(r) * n + t),
            (lv[1] = av(r) * i + e),
            (hv[0] = ov(a) * n + t),
            (hv[1] = av(a) * i + e),
            h(s, lv, hv),
            u(l, lv, hv),
            (r %= sv),
            0 > r && (r += sv),
            (a %= sv),
            0 > a && (a += sv),
            r > a && !o ? (a += sv) : a > r && o && (r += sv),
            o)
        ) {
            var d = a;
            (a = r), (r = d);
        }
        for (var f = 0; a > f; f += Math.PI / 2) f > r && ((uv[0] = ov(f) * n + t), (uv[1] = av(f) * i + e), h(s, uv, s), u(l, uv, l));
    }
    function Cr(t, e, n, i, r, a, o) {
        if (0 === r) return !1;
        var s = r,
            l = 0,
            h = t;
        if ((o > e + s && o > i + s) || (e - s > o && i - s > o) || (a > t + s && a > n + s) || (t - s > a && n - s > a)) return !1;
        if (t === n) return Math.abs(a - t) <= s / 2;
        (l = (e - i) / (t - n)), (h = (t * i - n * e) / (t - n));
        var u = l * a - o + h,
            c = (u * u) / (l * l + 1);
        return ((s / 2) * s) / 2 >= c;
    }
    function Tr(t, e, n, i, r, a, o, s, l, h, u) {
        if (0 === l) return !1;
        var c = l;
        if ((u > e + c && u > i + c && u > a + c && u > s + c) || (e - c > u && i - c > u && a - c > u && s - c > u) || (h > t + c && h > n + c && h > r + c && h > o + c) || (t - c > h && n - c > h && r - c > h && o - c > h)) return !1;
        var d = pr(t, e, n, i, r, a, o, s, h, u, null);
        return c / 2 >= d;
    }
    function Dr(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        if ((l > e + h && l > i + h && l > a + h) || (e - h > l && i - h > l && a - h > l) || (s > t + h && s > n + h && s > r + h) || (t - h > s && n - h > s && r - h > s)) return !1;
        var u = xr(t, e, n, i, r, a, s, l, null);
        return h / 2 >= u;
    }
    function Ar(t) {
        return (t %= Cv), 0 > t && (t += Cv), t;
    }
    function kr(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        (s -= t), (l -= e);
        var u = Math.sqrt(s * s + l * l);
        if (u - h > n || n > u + h) return !1;
        if (Math.abs(i - r) % Tv < 1e-4) return !0;
        if (a) {
            var c = i;
            (i = Ar(r)), (r = Ar(c));
        } else (i = Ar(i)), (r = Ar(r));
        i > r && (r += Tv);
        var d = Math.atan2(l, s);
        return 0 > d && (d += Tv), (d >= i && r >= d) || (d + Tv >= i && r >= d + Tv);
    }
    function Pr(t, e, n, i, r, a) {
        if ((a > e && a > i) || (e > a && i > a)) return 0;
        if (i === e) return 0;
        var o = e > i ? 1 : -1,
            s = (a - e) / (i - e);
        (1 === s || 0 === s) && (o = e > i ? 0.5 : -0.5);
        var l = s * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? o : 0;
    }
    function Lr(t, e) {
        return Math.abs(t - e) < kv;
    }
    function Or() {
        var t = Lv[0];
        (Lv[0] = Lv[1]), (Lv[1] = t);
    }
    function Br(t, e, n, i, r, a, o, s, l, h) {
        if ((h > e && h > i && h > a && h > s) || (e > h && i > h && a > h && s > h)) return 0;
        var u = cr(e, i, a, s, h, Pv);
        if (0 === u) return 0;
        for (var c, d, f = 0, p = -1, g = 0; u > g; g++) {
            var v = Pv[g],
                m = 0 === v || 1 === v ? 0.5 : 1,
                y = hr(t, n, r, o, v);
            l > y ||
                (0 > p && ((p = dr(e, i, a, s, Lv)), Lv[1] < Lv[0] && p > 1 && Or(), (c = hr(e, i, a, s, Lv[0])), p > 1 && (d = hr(e, i, a, s, Lv[1]))),
                (f += 2 === p ? (v < Lv[0] ? (e > c ? m : -m) : v < Lv[1] ? (c > d ? m : -m) : d > s ? m : -m) : v < Lv[0] ? (e > c ? m : -m) : c > s ? m : -m));
        }
        return f;
    }
    function Er(t, e, n, i, r, a, o, s) {
        if ((s > e && s > i && s > a) || (e > s && i > s && a > s)) return 0;
        var l = mr(e, i, a, s, Pv);
        if (0 === l) return 0;
        var h = yr(e, i, a);
        if (h >= 0 && 1 >= h) {
            for (var u = 0, c = gr(e, i, a, h), d = 0; l > d; d++) {
                var f = 0 === Pv[d] || 1 === Pv[d] ? 0.5 : 1,
                    p = gr(t, n, r, Pv[d]);
                o > p || (u += Pv[d] < h ? (e > c ? f : -f) : c > a ? f : -f);
            }
            return u;
        }
        var f = 0 === Pv[0] || 1 === Pv[0] ? 0.5 : 1,
            p = gr(t, n, r, Pv[0]);
        return o > p ? 0 : e > a ? f : -f;
    }
    function zr(t, e, n, i, r, a, o, s) {
        if (((s -= e), s > n || -n > s)) return 0;
        var l = Math.sqrt(n * n - s * s);
        (Pv[0] = -l), (Pv[1] = l);
        var h = Math.abs(i - r);
        if (1e-4 > h) return 0;
        if (1e-4 > h % Av) {
            (i = 0), (r = Av);
            var u = a ? 1 : -1;
            return o >= Pv[0] + t && o <= Pv[1] + t ? u : 0;
        }
        if (a) {
            var l = i;
            (i = Ar(r)), (r = Ar(l));
        } else (i = Ar(i)), (r = Ar(r));
        i > r && (r += Av);
        for (var c = 0, d = 0; 2 > d; d++) {
            var f = Pv[d];
            if (f + t > o) {
                var p = Math.atan2(s, f),
                    u = a ? 1 : -1;
                0 > p && (p = Av + p), ((p >= i && r >= p) || (p + Av >= i && r >= p + Av)) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), (c += u));
            }
        }
        return c;
    }
    function Rr(t, e, n, i, r) {
        for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length; ) {
            var c = t[u++];
            switch ((c === Dv.M && u > 1 && (n || (a += Pr(o, s, l, h, i, r))), 1 === u && ((o = t[u]), (s = t[u + 1]), (l = o), (h = s)), c)) {
                case Dv.M:
                    (l = t[u++]), (h = t[u++]), (o = l), (s = h);
                    break;
                case Dv.L:
                    if (n) {
                        if (Cr(o, s, t[u], t[u + 1], e, i, r)) return !0;
                    } else a += Pr(o, s, t[u], t[u + 1], i, r) || 0;
                    (o = t[u++]), (s = t[u++]);
                    break;
                case Dv.C:
                    if (n) {
                        if (Tr(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;
                    } else a += Br(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                    (o = t[u++]), (s = t[u++]);
                    break;
                case Dv.Q:
                    if (n) {
                        if (Dr(o, s, t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;
                    } else a += Er(o, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                    (o = t[u++]), (s = t[u++]);
                    break;
                case Dv.A:
                    var d = t[u++],
                        f = t[u++],
                        p = t[u++],
                        g = t[u++],
                        v = t[u++],
                        m = t[u++];
                    u += 1;
                    var y = 1 - t[u++],
                        _ = Math.cos(v) * p + d,
                        x = Math.sin(v) * g + f;
                    u > 1 ? (a += Pr(o, s, _, x, i, r)) : ((l = _), (h = x));
                    var w = ((i - d) * g) / p + d;
                    if (n) {
                        if (kr(d, f, g, v, v + m, y, e, w, r)) return !0;
                    } else a += zr(d, f, g, v, v + m, y, w, r);
                    (o = Math.cos(v + m) * p + d), (s = Math.sin(v + m) * g + f);
                    break;
                case Dv.R:
                    (l = o = t[u++]), (h = s = t[u++]);
                    var b = t[u++],
                        S = t[u++],
                        _ = l + b,
                        x = h + S;
                    if (n) {
                        if (Cr(l, h, _, h, e, i, r) || Cr(_, h, _, x, e, i, r) || Cr(_, x, l, x, e, i, r) || Cr(l, x, l, h, e, i, r)) return !0;
                    } else (a += Pr(_, h, _, x, i, r)), (a += Pr(l, x, l, h, i, r));
                    break;
                case Dv.Z:
                    if (n) {
                        if (Cr(o, s, l, h, e, i, r)) return !0;
                    } else a += Pr(o, s, l, h, i, r);
                    (o = l), (s = h);
            }
        }
        return n || Lr(s, h) || (a += Pr(o, s, l, h, i, r) || 0), 0 !== a;
    }
    function Nr(t, e, n) {
        return Rr(t, 0, !1, e, n);
    }
    function Fr(t, e, n, i) {
        return Rr(t, e, !0, n, i);
    }
    function Vr(t) {
        wi.call(this, t), (this.path = null);
    }
    function Gr(t, e, n, i, r, a, o, s, l, h, u) {
        var c = l * (Xv / 180),
            d = (Wv(c) * (t - n)) / 2 + (Hv(c) * (e - i)) / 2,
            f = (-1 * Hv(c) * (t - n)) / 2 + (Wv(c) * (e - i)) / 2,
            p = (d * d) / (o * o) + (f * f) / (s * s);
        p > 1 && ((o *= Gv(p)), (s *= Gv(p)));
        var g = (r === a ? -1 : 1) * Gv((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
            v = (g * o * f) / s,
            m = (g * -s * d) / o,
            y = (t + n) / 2 + Wv(c) * v - Hv(c) * m,
            _ = (e + i) / 2 + Hv(c) * v + Wv(c) * m,
            x = qv([1, 0], [(d - v) / o, (f - m) / s]),
            w = [(d - v) / o, (f - m) / s],
            b = [(-1 * d - v) / o, (-1 * f - m) / s],
            S = qv(w, b);
        Yv(w, b) <= -1 && (S = Xv), Yv(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * Xv), 1 === a && 0 > S && (S += 2 * Xv), u.addData(h, y, _, o, s, x, S, c, a);
    }
    function Hr(t) {
        if (!t) return new Iv();
        for (var e, n = 0, i = 0, r = n, a = i, o = new Iv(), s = Iv.CMD, l = t.match(jv), h = 0; h < l.length; h++) {
            for (var u, c = l[h], d = c.charAt(0), f = c.match(Zv) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
            for (var v = 0; p > v; ) {
                var m,
                    y,
                    _,
                    x,
                    w,
                    b,
                    S,
                    M = n,
                    I = i;
                switch (d) {
                    case "l":
                        (n += f[v++]), (i += f[v++]), (u = s.L), o.addData(u, n, i);
                        break;
                    case "L":
                        (n = f[v++]), (i = f[v++]), (u = s.L), o.addData(u, n, i);
                        break;
                    case "m":
                        (n += f[v++]), (i += f[v++]), (u = s.M), o.addData(u, n, i), (r = n), (a = i), (d = "l");
                        break;
                    case "M":
                        (n = f[v++]), (i = f[v++]), (u = s.M), o.addData(u, n, i), (r = n), (a = i), (d = "L");
                        break;
                    case "h":
                        (n += f[v++]), (u = s.L), o.addData(u, n, i);
                        break;
                    case "H":
                        (n = f[v++]), (u = s.L), o.addData(u, n, i);
                        break;
                    case "v":
                        (i += f[v++]), (u = s.L), o.addData(u, n, i);
                        break;
                    case "V":
                        (i = f[v++]), (u = s.L), o.addData(u, n, i);
                        break;
                    case "C":
                        (u = s.C), o.addData(u, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), (n = f[v - 2]), (i = f[v - 1]);
                        break;
                    case "c":
                        (u = s.C), o.addData(u, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i), (n += f[v - 2]), (i += f[v - 1]);
                        break;
                    case "S":
                        (m = n), (y = i);
                        var C = o.len(),
                            T = o.data;
                        e === s.C && ((m += n - T[C - 4]), (y += i - T[C - 3])), (u = s.C), (M = f[v++]), (I = f[v++]), (n = f[v++]), (i = f[v++]), o.addData(u, m, y, M, I, n, i);
                        break;
                    case "s":
                        (m = n), (y = i);
                        var C = o.len(),
                            T = o.data;
                        e === s.C && ((m += n - T[C - 4]), (y += i - T[C - 3])), (u = s.C), (M = n + f[v++]), (I = i + f[v++]), (n += f[v++]), (i += f[v++]), o.addData(u, m, y, M, I, n, i);
                        break;
                    case "Q":
                        (M = f[v++]), (I = f[v++]), (n = f[v++]), (i = f[v++]), (u = s.Q), o.addData(u, M, I, n, i);
                        break;
                    case "q":
                        (M = f[v++] + n), (I = f[v++] + i), (n += f[v++]), (i += f[v++]), (u = s.Q), o.addData(u, M, I, n, i);
                        break;
                    case "T":
                        (m = n), (y = i);
                        var C = o.len(),
                            T = o.data;
                        e === s.Q && ((m += n - T[C - 4]), (y += i - T[C - 3])), (n = f[v++]), (i = f[v++]), (u = s.Q), o.addData(u, m, y, n, i);
                        break;
                    case "t":
                        (m = n), (y = i);
                        var C = o.len(),
                            T = o.data;
                        e === s.Q && ((m += n - T[C - 4]), (y += i - T[C - 3])), (n += f[v++]), (i += f[v++]), (u = s.Q), o.addData(u, m, y, n, i);
                        break;
                    case "A":
                        (_ = f[v++]), (x = f[v++]), (w = f[v++]), (b = f[v++]), (S = f[v++]), (M = n), (I = i), (n = f[v++]), (i = f[v++]), (u = s.A), Gr(M, I, n, i, b, S, _, x, w, u, o);
                        break;
                    case "a":
                        (_ = f[v++]), (x = f[v++]), (w = f[v++]), (b = f[v++]), (S = f[v++]), (M = n), (I = i), (n += f[v++]), (i += f[v++]), (u = s.A), Gr(M, I, n, i, b, S, _, x, w, u, o);
                }
            }
            ("z" === d || "Z" === d) && ((u = s.Z), o.addData(u), (n = r), (i = a)), (e = u);
        }
        return o.toStatic(), o;
    }
    function Wr(t, e) {
        var n = Hr(t);
        return (
            (e = e || {}),
            (e.buildPath = function (t) {
                if (t.setData) {
                    t.setData(n.data);
                    var e = t.getContext();
                    e && t.rebuildPath(e);
                } else {
                    var e = t;
                    n.rebuildPath(e);
                }
            }),
            (e.applyTransform = function (t) {
                Vv(n, t), this.dirty(!0);
            }),
            e
        );
    }
    function Xr(t, e) {
        return new Vr(Wr(t, e));
    }
    function Ur(t, e) {
        return Vr.extend(Wr(t, e));
    }
    function Yr(t, e) {
        for (var n = [], i = t.length, r = 0; i > r; r++) {
            var a = t[r];
            a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path);
        }
        var o = new Vr(e);
        return (
            o.createPathProxy(),
            (o.buildPath = function (t) {
                t.appendPath(n);
                var e = t.getContext();
                e && t.rebuildPath(e);
            }),
            o
        );
    }
    function qr(t, e, n, i, r, a, o) {
        var s = 0.5 * (n - t),
            l = 0.5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
    }
    function jr(t, e, n) {
        var i = e.points,
            r = e.smooth;
        if (i && i.length >= 2) {
            if (r && "spline" !== r) {
                var a = im(i, r, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var o = i.length, s = 0; (n ? o : o - 1) > s; s++) {
                    var l = a[2 * s],
                        h = a[2 * s + 1],
                        u = i[(s + 1) % o];
                    t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1]);
                }
            } else {
                "spline" === r && (i = nm(i, n)), t.moveTo(i[0][0], i[0][1]);
                for (var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1]);
            }
            n && t.closePath();
        }
    }
    function Zr(t, e, n) {
        var i = n && n.lineWidth;
        if (e && i) {
            var r = e.x1,
                a = e.x2,
                o = e.y1,
                s = e.y2;
            om(2 * r) === om(2 * a) ? (t.x1 = t.x2 = $r(r, i, !0)) : ((t.x1 = r), (t.x2 = a)), om(2 * o) === om(2 * s) ? (t.y1 = t.y2 = $r(o, i, !0)) : ((t.y1 = o), (t.y2 = s));
        }
    }
    function Kr(t, e, n) {
        var i = n && n.lineWidth;
        if (e && i) {
            var r = e.x,
                a = e.y,
                o = e.width,
                s = e.height;
            (t.x = $r(r, i, !0)), (t.y = $r(a, i, !0)), (t.width = Math.max($r(r + o, i, !1) - t.x, 0 === o ? 0 : 1)), (t.height = Math.max($r(a + s, i, !1) - t.y, 0 === s ? 0 : 1));
        }
    }
    function $r(t, e, n) {
        var i = om(2 * t);
        return (i + om(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
    }
    function Qr(t, e, n) {
        var i = t.cpx2,
            r = t.cpy2;
        return null === i || null === r ? [(n ? ur : hr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? ur : hr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? vr : gr)(t.x1, t.cpx1, t.x2, e), (n ? vr : gr)(t.y1, t.cpy1, t.y2, e)];
    }
    function Jr(t) {
        wi.call(this, t), (this._displayables = []), (this._temporaryDisplayables = []), (this._cursor = 0), (this.notClear = !0);
    }
    function ta(t) {
        return Vr.extend(t);
    }
    function ea(t, e) {
        return Ur(t, e);
    }
    function na(t, e) {
        Dm[t] = e;
    }
    function ia(t) {
        return Dm.hasOwnProperty(t) ? Dm[t] : void 0;
    }
    function ra(t, e, n, i) {
        var r = Xr(t, e);
        return n && ("center" === i && (n = oa(n, r.getBoundingRect())), sa(r, n)), r;
    }
    function aa(t, e, n) {
        var i = new bi({
            style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height },
            onload: function (t) {
                if ("center" === n) {
                    var r = { width: t.width, height: t.height };
                    i.setStyle(oa(e, r));
                }
            },
        });
        return i;
    }
    function oa(t, e) {
        var n,
            i = e.width / e.height,
            r = t.height * i;
        r <= t.width ? (n = t.height) : ((r = t.width), (n = r / i));
        var a = t.x + t.width / 2,
            o = t.y + t.height / 2;
        return { x: a - r / 2, y: o - n / 2, width: r, height: n };
    }
    function sa(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect(),
                i = n.calculateTransform(e);
            t.applyTransform(i);
        }
    }
    function la(t) {
        return Zr(t.shape, t.shape, t.style), t;
    }
    function ha(t) {
        return Kr(t.shape, t.shape, t.style), t;
    }
    function ua(t) {
        return null != t && "none" !== t;
    }
    function ca(t) {
        if ("string" != typeof t) return t;
        var e = Pm.get(t);
        return e || ((e = $e(t, -0.1)), 1e4 > Lm && (Pm.set(t, e), Lm++)), e;
    }
    function da(t) {
        if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;
            var e = t.__hoverStl;
            if (!e) return void (t.__cachedNormalStl = t.__cachedNormalZ2 = null);
            var n = (t.__cachedNormalStl = {});
            t.__cachedNormalZ2 = t.z2;
            var i = t.style;
            for (var r in e) null != e[r] && (n[r] = i[r]);
            (n.fill = i.fill), (n.stroke = i.stroke);
        }
    }
    function fa(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
            var n = t.__zr,
                i = t.useHoverLayer && n && "canvas" === n.painter.type;
            if (((t.__highlighted = i ? "layer" : "plain"), !(t.isGroup || (!n && t.useHoverLayer)))) {
                var r = t,
                    a = t.style;
                i && ((r = n.addHover(t)), (a = r.style)), za(a), i || da(r), a.extendFrom(e), pa(a, e, "fill"), pa(a, e, "stroke"), Ea(a), i || (t.dirty(!1), (t.z2 += bm));
            }
        }
    }
    function pa(t, e, n) {
        !ua(e[n]) && ua(t[n]) && (t[n] = ca(t[n]));
    }
    function ga(t) {
        var e = t.__highlighted;
        if (e && ((t.__highlighted = !1), !t.isGroup))
            if ("layer" === e) t.__zr && t.__zr.removeHover(t);
            else {
                var n = t.style,
                    i = t.__cachedNormalStl;
                i && (za(n), t.setStyle(i), Ea(n));
                var r = t.__cachedNormalZ2;
                null != r && t.z2 - r === bm && (t.z2 = r);
            }
    }
    function va(t, e, n) {
        var i,
            r = Im,
            a = Im;
        t.__highlighted && ((r = Mm), (i = !0)),
            e(t, n),
            t.__highlighted && ((a = Mm), (i = !0)),
            t.isGroup &&
                t.traverse(function (t) {
                    !t.isGroup && e(t, n);
                }),
            i && t.__highDownOnUpdate && t.__highDownOnUpdate(r, a);
    }
    function ma(t, e) {
        (e = t.__hoverStl = e !== !1 && (t.hoverStyle || e || {})), (t.__hoverStlDirty = !0), t.__highlighted && ((t.__cachedNormalStl = null), ga(t), fa(t));
    }
    function ya(t) {
        !ba(this, t) && !this.__highByOuter && va(this, fa);
    }
    function _a(t) {
        !ba(this, t) && !this.__highByOuter && va(this, ga);
    }
    function xa(t) {
        (this.__highByOuter |= 1 << (t || 0)), va(this, fa);
    }
    function wa(t) {
        !(this.__highByOuter &= ~(1 << (t || 0))) && va(this, ga);
    }
    function ba(t, e) {
        return t.__highDownSilentOnTouch && e.zrByTouch;
    }
    function Sa(t, e) {
        Ma(t, !0), va(t, ma, e);
    }
    function Ma(t, e) {
        var n = e === !1;
        if (((t.__highDownSilentOnTouch = t.highDownSilentOnTouch), (t.__highDownOnUpdate = t.highDownOnUpdate), !n || t.__highDownDispatcher)) {
            var i = n ? "off" : "on";
            t[i]("mouseover", ya)[i]("mouseout", _a), t[i]("emphasis", xa)[i]("normal", wa), (t.__highByOuter = t.__highByOuter || 0), (t.__highDownDispatcher = !n);
        }
    }
    function Ia(t) {
        return !(!t || !t.__highDownDispatcher);
    }
    function Ca(t) {
        var e = Tm[t];
        return null == e && 32 >= Cm && (e = Tm[t] = Cm++), e;
    }
    function Ta(t, e, n, i, r, a, o) {
        r = r || wm;
        var s,
            l = r.labelFetcher,
            h = r.labelDataIndex,
            u = r.labelDimIndex,
            c = n.getShallow("show"),
            d = i.getShallow("show");
        (c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = w(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
        var f = c ? s : null,
            p = d ? A(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
        (null != f || null != p) && (Aa(t, n, a, r), Aa(e, i, o, r, !0)), (t.text = f), (e.text = p);
    }
    function Da(t, e, n) {
        var i = t.style;
        e && (za(i), t.setStyle(e), Ea(i)), (i = t.__hoverStl), n && i && (za(i), o(i, n), Ea(i));
    }
    function Aa(t, e, n, i, r) {
        return Pa(t, e, i, r), n && o(t, n), t;
    }
    function ka(t, e, n) {
        var i,
            r = { isRectText: !0 };
        n === !1 ? (i = !0) : (r.autoColor = n), Pa(t, e, r, i);
    }
    function Pa(t, e, n, i) {
        if (((n = n || wm), n.isRectText)) {
            var r;
            n.getTextPosition ? (r = n.getTextPosition(e, i)) : ((r = e.getShallow("position") || (i ? null : "inside")), "outside" === r && (r = "top")), (t.textPosition = r), (t.textOffset = e.getShallow("offset"));
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180), (t.textRotation = a), (t.textDistance = A(e.getShallow("distance"), i ? null : 5));
        }
        var o,
            s = e.ecModel,
            l = s && s.option.textStyle,
            h = La(e);
        if (h) {
            o = {};
            for (var u in h)
                if (h.hasOwnProperty(u)) {
                    var c = e.getModel(["rich", u]);
                    Oa((o[u] = {}), c, l, n, i);
                }
        }
        return (t.rich = o), Oa(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t;
    }
    function La(t) {
        for (var e; t && t !== t.ecModel; ) {
            var n = (t.option || wm).rich;
            if (n) {
                e = e || {};
                for (var i in n) n.hasOwnProperty(i) && (e[i] = 1);
            }
            t = t.parentModel;
        }
        return e;
    }
    function Oa(t, e, n, i, r, a) {
        (n = (!r && n) || wm),
            (t.textFill = Ba(e.getShallow("color"), i) || n.color),
            (t.textStroke = Ba(e.getShallow("textBorderColor"), i) || n.textBorderColor),
            (t.textStrokeWidth = A(e.getShallow("textBorderWidth"), n.textBorderWidth)),
            r || (a && ((t.insideRollbackOpt = i), Ea(t)), null == t.textFill && (t.textFill = i.autoColor)),
            (t.fontStyle = e.getShallow("fontStyle") || n.fontStyle),
            (t.fontWeight = e.getShallow("fontWeight") || n.fontWeight),
            (t.fontSize = e.getShallow("fontSize") || n.fontSize),
            (t.fontFamily = e.getShallow("fontFamily") || n.fontFamily),
            (t.textAlign = e.getShallow("align")),
            (t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline")),
            (t.textLineHeight = e.getShallow("lineHeight")),
            (t.textWidth = e.getShallow("width")),
            (t.textHeight = e.getShallow("height")),
            (t.textTag = e.getShallow("tag")),
            (a && i.disableBox) ||
                ((t.textBackgroundColor = Ba(e.getShallow("backgroundColor"), i)),
                (t.textPadding = e.getShallow("padding")),
                (t.textBorderColor = Ba(e.getShallow("borderColor"), i)),
                (t.textBorderWidth = e.getShallow("borderWidth")),
                (t.textBorderRadius = e.getShallow("borderRadius")),
                (t.textBoxShadowColor = e.getShallow("shadowColor")),
                (t.textBoxShadowBlur = e.getShallow("shadowBlur")),
                (t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX")),
                (t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY"))),
            (t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor),
            (t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur),
            (t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX),
            (t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY);
    }
    function Ba(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
    }
    function Ea(t) {
        var e,
            n = t.textPosition,
            i = t.insideRollbackOpt;
        if (i && null == t.textFill) {
            var r = i.autoColor,
                a = i.isRectText,
                o = i.useInsideStyle,
                s = o !== !1 && (o === !0 || (a && n && "string" == typeof n && n.indexOf("inside") >= 0)),
                l = !s && null != r;
            (s || l) && (e = { textFill: t.textFill, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth }),
                s && ((t.textFill = "#fff"), null == t.textStroke && ((t.textStroke = r), null == t.textStrokeWidth && (t.textStrokeWidth = 2))),
                l && (t.textFill = r);
        }
        t.insideRollback = e;
    }
    function za(t) {
        var e = t.insideRollback;
        e && ((t.textFill = e.textFill), (t.textStroke = e.textStroke), (t.textStrokeWidth = e.textStrokeWidth), (t.insideRollback = null));
    }
    function Ra(t, e) {
        var n = e || e.getModel("textStyle");
        return B(
            [
                t.fontStyle || (n && n.getShallow("fontStyle")) || "",
                t.fontWeight || (n && n.getShallow("fontWeight")) || "",
                (t.fontSize || (n && n.getShallow("fontSize")) || 12) + "px",
                t.fontFamily || (n && n.getShallow("fontFamily")) || "sans-serif",
            ].join(" ")
        );
    }
    function Na(t, e, n, i, r, a) {
        "function" == typeof r && ((a = r), (r = null));
        var o = i && i.isAnimationEnabled();
        if (o) {
            var s = t ? "Update" : "",
                l = i.getShallow("animationDuration" + s),
                h = i.getShallow("animationEasing" + s),
                u = i.getShallow("animationDelay" + s);
            "function" == typeof u && (u = u(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)),
                "function" == typeof l && (l = l(r)),
                l > 0 ? e.animateTo(n, l, u || 0, h, a, !!a) : (e.stopAnimation(), e.attr(n), a && a());
        } else e.stopAnimation(), e.attr(n), a && a();
    }
    function Fa(t, e, n, i, r) {
        Na(!0, t, e, n, i, r);
    }
    function Va(t, e, n, i, r) {
        Na(!1, t, e, n, i, r);
    }
    function Ga(t, e) {
        for (var n = De([]); t && t !== e; ) ke(n, t.getLocalTransform(), n), (t = t.parent);
        return n;
    }
    function Ha(t, e, n) {
        return e && !d(e) && (e = sp.getLocalTransform(e)), n && (e = Be([], e)), ae([], t, e);
    }
    function Wa(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs((2 * e[4]) / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs((2 * e[4]) / e[2]),
            a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return (a = Ha(a, e, n)), Math.abs(a[0]) > Math.abs(a[1]) ? (a[0] > 0 ? "right" : "left") : a[1] > 0 ? "bottom" : "top";
    }
    function Xa(t, e, n) {
        function i(t) {
            var e = {};
            return (
                t.traverse(function (t) {
                    !t.isGroup && t.anid && (e[t.anid] = t);
                }),
                e
            );
        }
        function r(t) {
            var e = { position: W(t.position), rotation: t.rotation };
            return t.shape && (e.shape = o({}, t.shape)), e;
        }
        if (t && e) {
            var a = i(t);
            e.traverse(function (t) {
                if (!t.isGroup && t.anid) {
                    var e = a[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)), Fa(t, i, n, t.dataIndex);
                    }
                }
            });
        }
    }
    function Ua(t, e) {
        return p(t, function (t) {
            var n = t[0];
            (n = _m(n, e.x)), (n = xm(n, e.x + e.width));
            var i = t[1];
            return (i = _m(i, e.y)), (i = xm(i, e.y + e.height)), [n, i];
        });
    }
    function Ya(t, e) {
        var n = _m(t.x, e.x),
            i = xm(t.x + t.width, e.x + e.width),
            r = _m(t.y, e.y),
            a = xm(t.y + t.height, e.y + e.height);
        return i >= n && a >= r ? { x: n, y: r, width: i - n, height: a - r } : void 0;
    }
    function qa(t, e, n) {
        e = o({ rectHover: !0 }, e);
        var i = (e.style = { strokeNoScale: !0 });
        return (n = n || { x: -1, y: -1, width: 2, height: 2 }), t ? (0 === t.indexOf("image://") ? ((i.image = t.slice(8)), s(i, n), new bi(e)) : ra(t.replace("path://", ""), e, n, "center")) : void 0;
    }
    function ja(t, e, n, i, r) {
        for (var a = 0, o = r[r.length - 1]; a < r.length; a++) {
            var s = r[a];
            if (Za(t, e, n, i, s[0], s[1], o[0], o[1])) return !0;
            o = s;
        }
    }
    function Za(t, e, n, i, r, a, o, s) {
        var l = n - t,
            h = i - e,
            u = o - r,
            c = s - a,
            d = Ka(u, c, l, h);
        if ($a(d)) return !1;
        var f = t - r,
            p = e - a,
            g = Ka(f, p, l, h) / d;
        if (0 > g || g > 1) return !1;
        var v = Ka(f, p, u, c) / d;
        return 0 > v || v > 1 ? !1 : !0;
    }
    function Ka(t, e, n, i) {
        return t * i - n * e;
    }
    function $a(t) {
        return 1e-6 >= t && t >= -1e-6;
    }
    function Qa(t, e, n) {
        (this.parentModel = e), (this.ecModel = n), (this.option = t);
    }
    function Ja(t, e, n) {
        for (var i = 0; i < e.length && (!e[i] || ((t = t && "object" == typeof t ? t[e[i]] : null), null != t)); i++);
        return null == t && n && (t = n.get(e)), t;
    }
    function to(t, e) {
        var n = Fm(t).getParent;
        return n ? n.call(t, e) : t.parentModel;
    }
    function eo(t) {
        return [t || "", Vm++, Math.random().toFixed(5)].join("_");
    }
    function no(t) {
        var e = {};
        return (
            (t.registerSubTypeDefaulter = function (t, n) {
                (t = tr(t)), (e[t.main] = n);
            }),
            (t.determineSubType = function (n, i) {
                var r = i.type;
                if (!r) {
                    var a = tr(n).main;
                    t.hasSubTypes(n) && e[a] && (r = e[a](i));
                }
                return r;
            }),
            t
        );
    }
    function io(t, e) {
        function n(t) {
            var n = {},
                a = [];
            return (
                f(t, function (o) {
                    var s = i(n, o),
                        l = (s.originalDeps = e(o)),
                        u = r(l, t);
                    (s.entryCount = u.length),
                        0 === s.entryCount && a.push(o),
                        f(u, function (t) {
                            h(s.predecessor, t) < 0 && s.predecessor.push(t);
                            var e = i(n, t);
                            h(e.successor, t) < 0 && e.successor.push(o);
                        });
                }),
                { graph: n, noEntryList: a }
            );
        }
        function i(t, e) {
            return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
        }
        function r(t, e) {
            var n = [];
            return (
                f(t, function (t) {
                    h(e, t) >= 0 && n.push(t);
                }),
                n
            );
        }
        t.topologicalTravel = function (t, e, i, r) {
            function a(t) {
                l[t].entryCount--, 0 === l[t].entryCount && h.push(t);
            }
            function o(t) {
                (u[t] = !0), a(t);
            }
            if (t.length) {
                var s = n(e),
                    l = s.graph,
                    h = s.noEntryList,
                    u = {};
                for (
                    f(t, function (t) {
                        u[t] = !0;
                    });
                    h.length;

                ) {
                    var c = h.pop(),
                        d = l[c],
                        p = !!u[c];
                    p && (i.call(r, c, d.originalDeps.slice()), delete u[c]), f(d.successor, p ? o : a);
                }
                f(u, function () {
                    throw new Error("Circle dependency may exists");
                });
            }
        };
    }
    function ro(t) {
        return t.replace(/^\s+|\s+$/g, "");
    }
    function ao(t, e, n, i) {
        var r = e[1] - e[0],
            a = n[1] - n[0];
        if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
        if (i)
            if (r > 0) {
                if (t <= e[0]) return n[0];
                if (t >= e[1]) return n[1];
            } else {
                if (t >= e[0]) return n[0];
                if (t <= e[1]) return n[1];
            }
        else {
            if (t === e[0]) return n[0];
            if (t === e[1]) return n[1];
        }
        return ((t - e[0]) / r) * a + n[0];
    }
    function oo(t, e) {
        switch (t) {
            case "center":
            case "middle":
                t = "50%";
                break;
            case "left":
            case "top":
                t = "0%";
                break;
            case "right":
            case "bottom":
                t = "100%";
        }
        return "string" == typeof t ? (ro(t).match(/%$/) ? (parseFloat(t) / 100) * e : parseFloat(t)) : null == t ? 0 / 0 : +t;
    }
    function so(t, e, n) {
        return null == e && (e = 10), (e = Math.min(Math.max(0, e), 20)), (t = (+t).toFixed(e)), n ? t : +t;
    }
    function lo(t) {
        return (
            t.sort(function (t, e) {
                return t - e;
            }),
            t
        );
    }
    function ho(t) {
        if (((t = +t), isNaN(t))) return 0;
        for (var e = 1, n = 0; Math.round(t * e) / e !== t; ) (e *= 10), n++;
        return n;
    }
    function uo(t) {
        var e = t.toString(),
            n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return 0 > i ? -i : 0;
        }
        var r = e.indexOf(".");
        return 0 > r ? 0 : e.length - 1 - r;
    }
    function co(t, e) {
        var n = Math.log,
            i = Math.LN10,
            r = Math.floor(n(t[1] - t[0]) / i),
            a = Math.round(n(Math.abs(e[1] - e[0])) / i),
            o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20;
    }
    function fo(t, e, n) {
        if (!t[e]) return 0;
        var i = g(
            t,
            function (t, e) {
                return t + (isNaN(e) ? 0 : e);
            },
            0
        );
        if (0 === i) return 0;
        for (
            var r = Math.pow(10, n),
                a = p(t, function (t) {
                    return ((isNaN(t) ? 0 : t) / i) * r * 100;
                }),
                o = 100 * r,
                s = p(a, function (t) {
                    return Math.floor(t);
                }),
                l = g(
                    s,
                    function (t, e) {
                        return t + e;
                    },
                    0
                ),
                h = p(a, function (t, e) {
                    return t - s[e];
                });
            o > l;

        ) {
            for (var u = Number.NEGATIVE_INFINITY, c = null, d = 0, f = h.length; f > d; ++d) h[d] > u && ((u = h[d]), (c = d));
            ++s[c], (h[c] = 0), ++l;
        }
        return s[e] / r;
    }
    function po(t) {
        var e = 2 * Math.PI;
        return ((t % e) + e) % e;
    }
    function go(t) {
        return t > -Gm && Gm > t;
    }
    function vo(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = Wm.exec(t);
            if (!e) return new Date(0 / 0);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
        }
        return new Date(null == t ? 0 / 0 : Math.round(t));
    }
    function mo(t) {
        return Math.pow(10, yo(t));
    }
    function yo(t) {
        if (0 === t) return 0;
        var e = Math.floor(Math.log(t) / Math.LN10);
        return t / Math.pow(10, e) >= 10 && e++, e;
    }
    function _o(t, e) {
        var n,
            i = yo(t),
            r = Math.pow(10, i),
            a = t / r;
        return (n = e ? (1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10) : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10), (t = n * r), i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t;
    }
    function xo(t, e) {
        var n = (t.length - 1) * e + 1,
            i = Math.floor(n),
            r = +t[i - 1],
            a = n - i;
        return a ? r + a * (t[i] - r) : r;
    }
    function wo(t) {
        function e(t, n, i) {
            return t.interval[i] < n.interval[i] || (t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || (!i && e(t, n, 1))));
        }
        t.sort(function (t, n) {
            return e(t, n, 0) ? -1 : 1;
        });
        for (var n = -1 / 0, i = 1, r = 0; r < t.length; ) {
            for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= n && ((a[s] = n), (o[s] = s ? 1 : 1 - i)), (n = a[s]), (i = o[s]);
            a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++;
        }
        return t;
    }
    function bo(t) {
        return t - parseFloat(t) >= 0;
    }
    function So(t) {
        return isNaN(t) ? "-" : ((t = (t + "").split(".")), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));
    }
    function Mo(t, e) {
        return (
            (t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase();
            })),
            e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
            t
        );
    }
    function Io(t) {
        return null == t
            ? ""
            : (t + "").replace(Ym, function (t, e) {
                  return qm[e];
              });
    }
    function Co(t, e, n) {
        x(e) || (e = [e]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
            var o = jm[a];
            t = t.replace(Zm(o), Zm(o, 0));
        }
        for (var s = 0; i > s; s++)
            for (var l = 0; l < r.length; l++) {
                var h = e[s][r[l]];
                t = t.replace(Zm(jm[l], s), n ? Io(h) : h);
            }
        return t;
    }
    function To(t, e, n) {
        return (
            f(e, function (e, i) {
                t = t.replace("{" + i + "}", n ? Io(e) : e);
            }),
            t
        );
    }
    function Do(t, e) {
        t = b(t) ? { color: t, extraCssText: e } : t || {};
        var n = t.color,
            i = t.type,
            e = t.extraCssText,
            r = t.renderMode || "html",
            a = t.markerId || "X";
        return n
            ? "html" === r
                ? "subItem" === i
                    ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Io(n) + ";" + (e || "") + '"></span>'
                    : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Io(n) + ";" + (e || "") + '"></span>'
                : { renderMode: r, content: "{marker" + a + "|}  ", style: { color: n } }
            : "";
    }
    function Ao(t, e) {
        return (t += ""), "0000".substr(0, e - t.length) + t;
    }
    function ko(t, e, n) {
        ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var i = vo(e),
            r = n ? "UTC" : "",
            a = i["get" + r + "FullYear"](),
            o = i["get" + r + "Month"]() + 1,
            s = i["get" + r + "Date"](),
            l = i["get" + r + "Hours"](),
            h = i["get" + r + "Minutes"](),
            u = i["get" + r + "Seconds"](),
            c = i["get" + r + "Milliseconds"]();
        return (t = t
            .replace("MM", Ao(o, 2))
            .replace("M", o)
            .replace("yyyy", a)
            .replace("yy", a % 100)
            .replace("dd", Ao(s, 2))
            .replace("d", s)
            .replace("hh", Ao(l, 2))
            .replace("h", l)
            .replace("mm", Ao(h, 2))
            .replace("m", h)
            .replace("ss", Ao(u, 2))
            .replace("s", u)
            .replace("SSS", Ao(c, 3)));
    }
    function Po(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
    }
    function Lo(t) {
        return Vn(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate);
    }
    function Oo(t, e, n, i, r, a, o, s) {
        return Vn(t, e, n, i, r, s, a, o);
    }
    function Bo(t, e, n, i, r) {
        var a = 0,
            o = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, h) {
            var u,
                c,
                d = l.position,
                f = l.getBoundingRect(),
                p = e.childAt(h + 1),
                g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var v = f.width + (g ? -g.x + f.x : 0);
                (u = a + v), u > i || l.newline ? ((a = 0), (u = v), (o += s + n), (s = f.height)) : (s = Math.max(s, f.height));
            } else {
                var m = f.height + (g ? -g.y + f.y : 0);
                (c = o + m), c > r || l.newline ? ((a += s + n), (o = 0), (c = m), (s = f.width)) : (s = Math.max(s, f.width));
            }
            l.newline || ((d[0] = a), (d[1] = o), "horizontal" === t ? (a = u + n) : (o = c + n));
        });
    }
    function Eo(t, e, n) {
        n = Um(n || 0);
        var i = e.width,
            r = e.height,
            a = oo(t.left, i),
            o = oo(t.top, r),
            s = oo(t.right, i),
            l = oo(t.bottom, r),
            h = oo(t.width, i),
            u = oo(t.height, r),
            c = n[2] + n[0],
            d = n[1] + n[3],
            f = t.aspect;
        switch (
            (isNaN(h) && (h = i - s - d - a),
            isNaN(u) && (u = r - l - c - o),
            null != f && (isNaN(h) && isNaN(u) && (f > i / r ? (h = 0.8 * i) : (u = 0.8 * r)), isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)),
            isNaN(a) && (a = i - s - h - d),
            isNaN(o) && (o = r - l - u - c),
            t.left || t.right)
        ) {
            case "center":
                a = i / 2 - h / 2 - n[3];
                break;
            case "right":
                a = i - h - d;
        }
        switch (t.top || t.bottom) {
            case "middle":
            case "center":
                o = r / 2 - u / 2 - n[0];
                break;
            case "bottom":
                o = r - u - c;
        }
        (a = a || 0), (o = o || 0), isNaN(h) && (h = i - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
        var p = new wn(a + n[3], o + n[0], h, u);
        return (p.margin = n), p;
    }
    function zo(t, e, n) {
        function i(n, i) {
            var o = {},
                l = 0,
                h = {},
                u = 0,
                c = 2;
            if (
                (Qm(n, function (e) {
                    h[e] = t[e];
                }),
                Qm(n, function (t) {
                    r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++;
                }),
                s[i])
            )
                return a(e, n[1]) ? (h[n[2]] = null) : a(e, n[2]) && (h[n[1]] = null), h;
            if (u !== c && l) {
                if (l >= c) return o;
                for (var d = 0; d < n.length; d++) {
                    var f = n[d];
                    if (!r(o, f) && r(t, f)) {
                        o[f] = t[f];
                        break;
                    }
                }
                return o;
            }
            return h;
        }
        function r(t, e) {
            return t.hasOwnProperty(e);
        }
        function a(t, e) {
            return null != t[e] && "auto" !== t[e];
        }
        function o(t, e, n) {
            Qm(t, function (t) {
                e[t] = n[t];
            });
        }
        !S(n) && (n = {});
        var s = n.ignoreSize;
        !x(s) && (s = [s, s]);
        var l = i(ty[0], 0),
            h = i(ty[1], 1);
        o(ty[0], t, l), o(ty[1], t, h);
    }
    function Ro(t) {
        return No({}, t);
    }
    function No(t, e) {
        return (
            e &&
                t &&
                Qm(Jm, function (n) {
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
            t
        );
    }
    function Fo(t) {
        var e = [];
        return (
            f(ry.getClassesByMainType(t), function (t) {
                e = e.concat(t.prototype.dependencies || []);
            }),
            (e = p(e, function (t) {
                return tr(t).main;
            })),
            "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"),
            e
        );
    }
    function Vo(t, e) {
        for (var n = t.length, i = 0; n > i; i++) if (t[i].length > e) return t[i];
        return t[n - 1];
    }
    function Go(t) {
        var e = t.get("coordinateSystem"),
            n = { coordSysName: e, coordSysDims: [], axisMap: N(), categoryAxisMap: N() },
            i = hy[e];
        return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;
    }
    function Ho(t) {
        return "category" === t.get("type");
    }
    function Wo(t) {
        (this.fromDataset = t.fromDataset),
            (this.data = t.data || (t.sourceFormat === fy ? {} : [])),
            (this.sourceFormat = t.sourceFormat || py),
            (this.seriesLayoutBy = t.seriesLayoutBy || vy),
            (this.dimensionsDefine = t.dimensionsDefine),
            (this.encodeDefine = t.encodeDefine && N(t.encodeDefine)),
            (this.startIndex = t.startIndex || 0),
            (this.dimensionsDetectCount = t.dimensionsDetectCount);
    }
    function Xo(t) {
        var e = t.option.source,
            n = py;
        if (I(e)) n = gy;
        else if (x(e)) {
            0 === e.length && (n = cy);
            for (var i = 0, r = e.length; r > i; i++) {
                var a = e[i];
                if (null != a) {
                    if (x(a)) {
                        n = cy;
                        break;
                    }
                    if (S(a)) {
                        n = dy;
                        break;
                    }
                }
            }
        } else if (S(e)) {
            for (var o in e)
                if (e.hasOwnProperty(o) && d(e[o])) {
                    n = fy;
                    break;
                }
        } else if (null != e) throw new Error("Invalid data");
        yy(t).sourceFormat = n;
    }
    function Uo(t) {
        return yy(t).source;
    }
    function Yo(t) {
        yy(t).datasetMap = N();
    }
    function qo(t) {
        var e = t.option,
            n = e.data,
            i = I(n) ? gy : uy,
            r = !1,
            a = e.seriesLayoutBy,
            o = e.sourceHeader,
            s = e.dimensions,
            l = Jo(t);
        if (l) {
            var h = l.option;
            (n = h.source), (i = yy(l).sourceFormat), (r = !0), (a = a || h.seriesLayoutBy), null == o && (o = h.sourceHeader), (s = s || h.dimensions);
        }
        var u = jo(n, i, a, o, s),
            c = e.encode;
        !c && l && (c = Qo(t, l, n, i, a, u)),
            (yy(t).source = new Wo({ data: n, fromDataset: r, seriesLayoutBy: a, sourceFormat: i, dimensionsDefine: u.dimensionsDefine, startIndex: u.startIndex, dimensionsDetectCount: u.dimensionsDetectCount, encodeDefine: c }));
    }
    function jo(t, e, n, i, r) {
        if (!t) return { dimensionsDefine: Zo(r) };
        var a, o, s;
        if (e === cy)
            "auto" === i || null == i
                ? Ko(
                      function (t) {
                          null != t && "-" !== t && (b(t) ? null == o && (o = 1) : (o = 0));
                      },
                      n,
                      t,
                      10
                  )
                : (o = i ? 1 : 0),
                r ||
                    1 !== o ||
                    ((r = []),
                    Ko(
                        function (t, e) {
                            r[e] = null != t ? t : "";
                        },
                        n,
                        t
                    )),
                (a = r ? r.length : n === my ? t.length : t[0] ? t[0].length : null);
        else if (e === dy) r || ((r = $o(t)), (s = !0));
        else if (e === fy)
            r ||
                ((r = []),
                (s = !0),
                f(t, function (t, e) {
                    r.push(e);
                }));
        else if (e === uy) {
            var l = Gi(t[0]);
            a = (x(l) && l.length) || 1;
        }
        var h;
        return (
            s &&
                f(r, function (t, e) {
                    "name" === (S(t) ? t.name : t) && (h = e);
                }),
            { startIndex: o, dimensionsDefine: Zo(r), dimensionsDetectCount: a, potentialNameDimIndex: h }
        );
    }
    function Zo(t) {
        if (t) {
            var e = N();
            return p(t, function (t) {
                if (((t = o({}, S(t) ? t : { name: t })), null == t.name)) return t;
                (t.name += ""), null == t.displayName && (t.displayName = t.name);
                var n = e.get(t.name);
                return n ? (t.name += "-" + n.count++) : e.set(t.name, { count: 1 }), t;
            });
        }
    }
    function Ko(t, e, n, i) {
        if ((null == i && (i = 1 / 0), e === my)) for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);
        else for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) t(a[r], r);
    }
    function $o(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]); );
        if (e) {
            var i = [];
            return (
                f(e, function (t, e) {
                    i.push(e);
                }),
                i
            );
        }
    }
    function Qo(t, e, n, i, r, a) {
        var o = Go(t),
            s = {},
            l = [],
            h = [],
            u = t.subType,
            c = N(["pie", "map", "funnel"]),
            d = N(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
        if (o && null != d.get(u)) {
            var p = t.ecModel,
                g = yy(p).datasetMap,
                v = e.uid + "_" + r,
                m = g.get(v) || g.set(v, { categoryWayDim: 1, valueWayDim: 0 });
            f(o.coordSysDims, function (t) {
                if (null == o.firstCategoryDimIndex) {
                    var e = m.valueWayDim++;
                    (s[t] = e), h.push(e);
                } else if (o.categoryAxisMap.get(t)) (s[t] = 0), l.push(0);
                else {
                    var e = m.categoryWayDim++;
                    (s[t] = e), h.push(e);
                }
            });
        } else if (null != c.get(u)) {
            for (var y, _ = 0; 5 > _ && null == y; _++) es(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
            if (null != y) {
                s.value = y;
                var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
                h.push(x), l.push(x);
            }
        }
        return l.length && (s.itemName = l), h.length && (s.seriesName = h), s;
    }
    function Jo(t) {
        var e = t.option,
            n = e.data;
        return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);
    }
    function ts(t, e) {
        return es(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
    }
    function es(t, e, n, i, r, a) {
        function o(t) {
            return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0;
        }
        var s,
            l = 5;
        if (I(t)) return !1;
        var h;
        if ((i && ((h = i[a]), (h = S(h) ? h.name : h)), e === cy))
            if (n === my) {
                for (var u = t[a], c = 0; c < (u || []).length && l > c; c++) if (null != (s = o(u[r + c]))) return s;
            } else
                for (var c = 0; c < t.length && l > c; c++) {
                    var d = t[r + c];
                    if (d && null != (s = o(d[a]))) return s;
                }
        else if (e === dy) {
            if (!h) return;
            for (var c = 0; c < t.length && l > c; c++) {
                var f = t[c];
                if (f && null != (s = o(f[h]))) return s;
            }
        } else if (e === fy) {
            if (!h) return;
            var u = t[h];
            if (!u || I(u)) return !1;
            for (var c = 0; c < u.length && l > c; c++) if (null != (s = o(u[c]))) return s;
        } else if (e === uy)
            for (var c = 0; c < t.length && l > c; c++) {
                var f = t[c],
                    p = Gi(f);
                if (!x(p)) return !1;
                if (null != (s = o(p[a]))) return s;
            }
        return !1;
    }
    function ns(t, e) {
        if (e) {
            var n = e.seiresIndex,
                i = e.seriesId,
                r = e.seriesName;
            return (null != n && t.componentIndex !== n) || (null != i && t.id !== i) || (null != r && t.name !== r);
        }
    }
    function is(t, e) {
        var n = t.color && !t.colorLayer;
        f(e, function (e, a) {
            ("colorLayer" === a && n) || ry.hasClass(a) || ("object" == typeof e ? (t[a] = t[a] ? r(t[a], e, !1) : i(e)) : null == t[a] && (t[a] = e));
        });
    }
    function rs(t) {
        (t = t), (this.option = {}), (this.option[_y] = 1), (this._componentsMap = N({ series: [] })), this._seriesIndices, this._seriesIndicesMap, is(t, this._theme.option), r(t, oy, !1), this.mergeOption(t);
    }
    function as(t, e) {
        x(e) || (e = e ? [e] : []);
        var n = {};
        return (
            f(e, function (e) {
                n[e] = (t.get(e) || []).slice();
            }),
            n
        );
    }
    function os(t, e, n) {
        var i = e.type ? e.type : n ? n.subType : ry.determineSubType(t, e);
        return i;
    }
    function ss(t, e) {
        t._seriesIndicesMap = N(
            (t._seriesIndices =
                p(e, function (t) {
                    return t.componentIndex;
                }) || [])
        );
    }
    function ls(t, e) {
        return e.hasOwnProperty("subType")
            ? v(t, function (t) {
                  return t.subType === e.subType;
              })
            : t;
    }
    function hs(t) {
        f(
            wy,
            function (e) {
                this[e] = y(t[e], t);
            },
            this
        );
    }
    function us() {
        this._coordinateSystems = [];
    }
    function cs(t) {
        (this._api = t), (this._timelineOptions = []), (this._mediaList = []), this._mediaDefault, (this._currentMediaIndices = []), this._optionBackup, this._newBaseOption;
    }
    function ds(t, e, n) {
        var i,
            r,
            a = [],
            o = [],
            s = t.timeline;
        if ((t.baseOption && (r = t.baseOption), (s || t.options) && ((r = r || {}), (a = (t.options || []).slice())), t.media)) {
            r = r || {};
            var l = t.media;
            Sy(l, function (t) {
                t && t.option && (t.query ? o.push(t) : i || (i = t));
            });
        }
        return (
            r || (r = t),
            r.timeline || (r.timeline = s),
            Sy(
                [r].concat(a).concat(
                    p(o, function (t) {
                        return t.option;
                    })
                ),
                function (t) {
                    Sy(e, function (e) {
                        e(t, n);
                    });
                }
            ),
            { baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o }
        );
    }
    function fs(t, e, n) {
        var i = { width: e, height: n, aspectratio: e / n },
            r = !0;
        return (
            f(t, function (t, e) {
                var n = e.match(Ty);
                if (n && n[1] && n[2]) {
                    var a = n[1],
                        o = n[2].toLowerCase();
                    ps(i[o], t, a) || (r = !1);
                }
            }),
            r
        );
    }
    function ps(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? e >= t : t === e;
    }
    function gs(t, e) {
        return t.join(",") === e.join(",");
    }
    function vs(t, e) {
        (e = e || {}),
            Sy(e, function (e, n) {
                if (null != e) {
                    var i = t[n];
                    if (ry.hasClass(n)) {
                        (e = Fi(e)), (i = Fi(i));
                        var r = Wi(i, e);
                        t[n] = Iy(r, function (t) {
                            return t.option && t.exist ? Cy(t.exist, t.option, !0) : t.exist || t.option;
                        });
                    } else t[n] = Cy(i, e, !0);
                }
            });
    }
    function ms(t) {
        var e = t && t.itemStyle;
        if (e)
            for (var n = 0, i = ky.length; i > n; n++) {
                var a = ky[n],
                    o = e.normal,
                    s = e.emphasis;
                o && o[a] && ((t[a] = t[a] || {}), t[a].normal ? r(t[a].normal, o[a]) : (t[a].normal = o[a]), (o[a] = null)),
                    s && s[a] && ((t[a] = t[a] || {}), t[a].emphasis ? r(t[a].emphasis, s[a]) : (t[a].emphasis = s[a]), (s[a] = null));
            }
    }
    function ys(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal,
                r = t[e].emphasis;
            i && (n ? ((t[e].normal = t[e].emphasis = null), s(t[e], i)) : (t[e] = i)), r && ((t.emphasis = t.emphasis || {}), (t.emphasis[e] = r));
        }
    }
    function _s(t) {
        ys(t, "itemStyle"), ys(t, "lineStyle"), ys(t, "areaStyle"), ys(t, "label"), ys(t, "labelLine"), ys(t, "upperLabel"), ys(t, "edgeLabel");
    }
    function xs(t, e) {
        var n = Ay(t) && t[e],
            i = Ay(n) && n.textStyle;
        if (i)
            for (var r = 0, a = Ng.length; a > r; r++) {
                var e = Ng[r];
                i.hasOwnProperty(e) && (n[e] = i[e]);
            }
    }
    function ws(t) {
        t && (_s(t), xs(t, "label"), t.emphasis && xs(t.emphasis, "label"));
    }
    function bs(t) {
        if (Ay(t)) {
            ms(t), _s(t), xs(t, "label"), xs(t, "upperLabel"), xs(t, "edgeLabel"), t.emphasis && (xs(t.emphasis, "label"), xs(t.emphasis, "upperLabel"), xs(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (ms(e), ws(e));
            var n = t.markLine;
            n && (ms(n), ws(n));
            var i = t.markArea;
            i && ws(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var a = t.links || t.edges;
                if (a && !I(a)) for (var o = 0; o < a.length; o++) ws(a[o]);
                f(t.categories, function (t) {
                    _s(t);
                });
            }
            if (r && !I(r)) for (var o = 0; o < r.length; o++) ws(r[o]);
            var e = t.markPoint;
            if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) ws(s[o]);
            var n = t.markLine;
            if (n && n.data) for (var l = n.data, o = 0; o < l.length; o++) x(l[o]) ? (ws(l[o][0]), ws(l[o][1])) : ws(l[o]);
            "gauge" === t.type
                ? (xs(t, "axisLabel"), xs(t, "title"), xs(t, "detail"))
                : "treemap" === t.type
                ? (ys(t.breadcrumb, "itemStyle"),
                  f(t.levels, function (t) {
                      _s(t);
                  }))
                : "tree" === t.type && _s(t.leaves);
        }
    }
    function Ss(t) {
        return x(t) ? t : t ? [t] : [];
    }
    function Ms(t) {
        return (x(t) ? t[0] : t) || {};
    }
    function Is(t, e) {
        e = e.split(",");
        for (var n = t, i = 0; i < e.length && ((n = n && n[e[i]]), null != n); i++);
        return n;
    }
    function Cs(t, e, n, i) {
        e = e.split(",");
        for (var r, a = t, o = 0; o < e.length - 1; o++) (r = e[o]), null == a[r] && (a[r] = {}), (a = a[r]);
        (i || null == a[e[o]]) && (a[e[o]] = n);
    }
    function Ts(t) {
        f(Ly, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
        });
    }
    function Ds(t) {
        f(t, function (e, n) {
            var i = [],
                r = [0 / 0, 0 / 0],
                a = [e.stackResultDimension, e.stackedOverDimension],
                o = e.data,
                s = e.isStackedByIndex,
                l = o.map(a, function (a, l, h) {
                    var u = o.get(e.stackedDimension, h);
                    if (isNaN(u)) return r;
                    var c, d;
                    s ? (d = o.getRawIndex(h)) : (c = o.get(e.stackedByDimension, h));
                    for (var f = 0 / 0, p = n - 1; p >= 0; p--) {
                        var g = t[p];
                        if ((s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0)) {
                            var v = g.data.getByRawIndex(g.stackResultDimension, d);
                            if ((u >= 0 && v > 0) || (0 >= u && 0 > v)) {
                                (u += v), (f = v);
                                break;
                            }
                        }
                    }
                    return (i[0] = u), (i[1] = f), i;
                });
            o.hostModel.setData(l), (e.data = l);
        });
    }
    function As(t, e) {
        Wo.isInstance(t) || (t = Wo.seriesDataToSource(t)), (this._source = t);
        var n = (this._data = t.data),
            i = t.sourceFormat;
        i === gy && ((this._offset = 0), (this._dimSize = e), (this._data = n));
        var r = Ry[i === cy ? i + "_" + t.seriesLayoutBy : i];
        o(this, r);
    }
    function ks() {
        return this._data.length;
    }
    function Ps(t) {
        return this._data[t];
    }
    function Ls(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e]);
    }
    function Os(t, e, n) {
        return null != n ? t[n] : t;
    }
    function Bs(t, e, n, i) {
        return Es(t[i], this._dimensionInfos[e]);
    }
    function Es(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t;
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +vo(t)), null == t || "" === t ? 0 / 0 : +t;
    }
    function zs(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r,
                    a,
                    o = t.getProvider().getSource().sourceFormat,
                    s = t.getDimensionInfo(n);
                return s && ((r = s.name), (a = s.index)), Ny[o](i, e, a, r);
            }
        }
    }
    function Rs(t, e, n) {
        if (t) {
            var i = t.getProvider().getSource().sourceFormat;
            if (i === uy || i === dy) {
                var r = t.getRawDataItem(e);
                return i !== uy || S(r) || (r = null), r ? r[n] : void 0;
            }
        }
    }
    function Ns(t) {
        return new Fs(t);
    }
    function Fs(t) {
        (t = t || {}), (this._reset = t.reset), (this._plan = t.plan), (this._count = t.count), (this._onDirty = t.onDirty), (this._dirty = !0), this.context;
    }
    function Vs(t, e, n, i, r, a) {
        Wy.reset(n, i, r, a), (t._callingProgress = e), t._callingProgress({ start: n, end: i, count: i - n, next: Wy.next }, t.context);
    }
    function Gs(t, e) {
        (t._dueIndex = t._outputDueEnd = t._dueEnd = 0), (t._settedOutputEnd = null);
        var n, i;
        !e && t._reset && ((n = t._reset(t.context)), n && n.progress && ((i = n.forceFirstProgress), (n = n.progress)), x(n) && !n.length && (n = null)), (t._progress = n), (t._modBy = t._modDataCount = null);
        var r = t._downstream;
        return r && r.dirty(), i;
    }
    function Hs(t) {
        var e = t.name;
        Ui(t) || (t.name = Ws(t) || e);
    }
    function Ws(t) {
        var e = t.getRawData(),
            n = e.mapDimension("seriesName", !0),
            i = [];
        return (
            f(n, function (t) {
                var n = e.getDimensionInfo(t);
                n.displayName && i.push(n.displayName);
            }),
            i.join(" ")
        );
    }
    function Xs(t) {
        return t.model.getRawData().count();
    }
    function Us(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), Ys;
    }
    function Ys(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
    }
    function qs(t, e) {
        f(t.CHANGABLE_METHODS, function (n) {
            t.wrapMethod(n, _(js, e));
        });
    }
    function js(t) {
        var e = Zs(t);
        e && e.setOutputEnd(this.count());
    }
    function Zs(t) {
        var e = (t.ecModel || {}).scheduler,
            n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid));
            }
            return i;
        }
    }
    function Ks() {
        (this.group = new zp()), (this.uid = eo("viewChart")), (this.renderTask = Ns({ plan: Js, reset: tl })), (this.renderTask.context = { view: this });
    }
    function $s(t, e, n) {
        if (t && (t.trigger(e, n), t.isGroup && !Ia(t))) for (var i = 0, r = t.childCount(); r > i; i++) $s(t.childAt(i), e, n);
    }
    function Qs(t, e, n) {
        var i = qi(t, e),
            r = e && null != e.highlightKey ? Ca(e.highlightKey) : null;
        null != i
            ? f(Fi(i), function (e) {
                  $s(t.getItemGraphicEl(e), n, r);
              })
            : t.eachItemGraphicEl(function (t) {
                  $s(t, n, r);
              });
    }
    function Js(t) {
        return Ky(t.model);
    }
    function tl(t) {
        var e = t.model,
            n = t.ecModel,
            i = t.api,
            r = t.payload,
            a = e.pipelineContext.progressiveRender,
            o = t.view,
            s = r && Zy(r).updateMethod,
            l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
        return "render" !== l && o[l](e, n, i, r), Qy[l];
    }
    function el(t, e, n) {
        function i() {
            (u = new Date().getTime()), (c = null), t.apply(o, s || []);
        }
        var r,
            a,
            o,
            s,
            l,
            h = 0,
            u = 0,
            c = null;
        e = e || 0;
        var d = function () {
            (r = new Date().getTime()), (o = this), (s = arguments);
            var t = l || e,
                d = l || n;
            (l = null), (a = r - (d ? h : u) - t), clearTimeout(c), d ? (c = setTimeout(i, t)) : a >= 0 ? i() : (c = setTimeout(i, -a)), (h = r);
        };
        return (
            (d.clear = function () {
                c && (clearTimeout(c), (c = null));
            }),
            (d.debounceNextCall = function (t) {
                l = t;
            }),
            d
        );
    }
    function nl(t, e, n, i) {
        var r = t[e];
        if (r) {
            var a = r[Jy] || r,
                o = r[e_],
                s = r[t_];
            if (s !== n || o !== i) {
                if (null == n || !i) return (t[e] = a);
                (r = t[e] = el(a, n, "debounce" === i)), (r[Jy] = a), (r[e_] = i), (r[t_] = n);
            }
            return r;
        }
    }
    function il(t, e, n, i) {
        (this.ecInstance = t), (this.api = e), this.unfinished;
        var n = (this._dataProcessorHandlers = n.slice()),
            i = (this._visualHandlers = i.slice());
        (this._allHandlers = n.concat(i)), (this._stageTaskMap = N());
    }
    function rl(t, e, n, i, r) {
        function a(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
        }
        r = r || {};
        var o;
        f(e, function (e) {
            if (!r.visualType || r.visualType === e.visualType) {
                var s = t._stageTaskMap.get(e.uid),
                    l = s.seriesTaskMap,
                    h = s.overallTask;
                if (h) {
                    var u,
                        c = h.agentStubMap;
                    c.each(function (t) {
                        a(r, t) && (t.dirty(), (u = !0));
                    }),
                        u && h.dirty(),
                        l_(h, i);
                    var d = t.getPerformArgs(h, r.block);
                    c.each(function (t) {
                        t.perform(d);
                    }),
                        (o |= h.perform(d));
                } else
                    l &&
                        l.each(function (s) {
                            a(r, s) && s.dirty();
                            var l = t.getPerformArgs(s, r.block);
                            (l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model)), l_(s, i), (o |= s.perform(l));
                        });
            }
        }),
            (t.unfinished |= o);
    }
    function al(t, e, n, i, r) {
        function a(n) {
            var a = n.uid,
                s = o.get(a) || o.set(a, Ns({ plan: cl, reset: dl, count: pl }));
            (s.context = { model: n, ecModel: i, api: r, useClearVisual: e.isVisual && !e.isLayout, plan: e.plan, reset: e.reset, scheduler: t }), gl(t, n, s);
        }
        var o = n.seriesTaskMap || (n.seriesTaskMap = N()),
            s = e.seriesType,
            l = e.getTargetSeries;
        e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
        var h = t._pipelineMap;
        o.each(function (t, e) {
            h.get(e) || (t.dispose(), o.removeKey(e));
        });
    }
    function ol(t, e, n, i, r) {
        function a(e) {
            var n = e.uid,
                i = s.get(n);
            i || ((i = s.set(n, Ns({ reset: ll, onDirty: ul }))), o.dirty()), (i.context = { model: e, overallProgress: u, modifyOutputEnd: c }), (i.agent = o), (i.__block = u), gl(t, e, i);
        }
        var o = (n.overallTask = n.overallTask || Ns({ reset: sl }));
        o.context = { ecModel: i, api: r, overallReset: e.overallReset, scheduler: t };
        var s = (o.agentStubMap = o.agentStubMap || N()),
            l = e.seriesType,
            h = e.getTargetSeries,
            u = !0,
            c = e.modifyOutputEnd;
        l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : ((u = !1), f(i.getSeries(), a));
        var d = t._pipelineMap;
        s.each(function (t, e) {
            d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
        });
    }
    function sl(t) {
        t.overallReset(t.ecModel, t.api, t.payload);
    }
    function ll(t) {
        return t.overallProgress && hl;
    }
    function hl() {
        this.agent.dirty(), this.getDownstream().dirty();
    }
    function ul() {
        this.agent && this.agent.dirty();
    }
    function cl(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
    }
    function dl(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = (t.resetDefines = Fi(t.reset(t.model, t.ecModel, t.api, t.payload)));
        return e.length > 1
            ? p(e, function (t, e) {
                  return fl(e);
              })
            : h_;
    }
    function fl(t) {
        return function (e, n) {
            var i = n.data,
                r = n.resetDefines[t];
            if (r && r.dataEach) for (var a = e.start; a < e.end; a++) r.dataEach(i, a);
            else r && r.progress && r.progress(e, i);
        };
    }
    function pl(t) {
        return t.data.count();
    }
    function gl(t, e, n) {
        var i = e.uid,
            r = t._pipelineMap.get(i);
        !r.head && (r.head = n), r.tail && r.tail.pipe(n), (r.tail = n), (n.__idxInPipeline = r.count++), (n.__pipeline = r);
    }
    function vl(t) {
        u_ = null;
        try {
            t(c_, d_);
        } catch (e) {}
        return u_;
    }
    function ml(t, e) {
        for (var n in e.prototype) t[n] = V;
    }
    function yl(t) {
        if (b(t)) {
            var e = new DOMParser();
            t = e.parseFromString(t, "text/xml");
        }
        for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType; ) t = t.nextSibling;
        return t;
    }
    function _l() {
        (this._defs = {}), (this._root = null), (this._isDefine = !1), (this._isText = !1);
    }
    function xl(t, e) {
        for (var n = t.firstChild; n; ) {
            if (1 === n.nodeType) {
                var i = n.getAttribute("offset");
                i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
                var r = n.getAttribute("stop-color") || "#000000";
                e.addColorStop(i, r);
            }
            n = n.nextSibling;
        }
    }
    function wl(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle));
    }
    function bl(t) {
        for (var e = B(t).split(x_), n = [], i = 0; i < e.length; i += 2) {
            var r = parseFloat(e[i]),
                a = parseFloat(e[i + 1]);
            n.push([r, a]);
        }
        return n;
    }
    function Sl(t, e, n, i) {
        var r = e.__inheritedStyle || {},
            a = "text" === e.type;
        if (1 === t.nodeType && (Il(t, e), o(r, Cl(t)), !i))
            for (var s in S_)
                if (S_.hasOwnProperty(s)) {
                    var l = t.getAttribute(s);
                    null != l && (r[S_[s]] = l);
                }
        var h = a ? "textFill" : "fill",
            u = a ? "textStroke" : "stroke";
        e.style = e.style || new Up();
        var c = e.style;
        null != r.fill && c.set(h, Ml(r.fill, n)),
            null != r.stroke && c.set(u, Ml(r.stroke, n)),
            f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
                var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
                null != r[t] && c.set(e, parseFloat(r[t]));
            }),
            (r.textBaseline && "auto" !== r.textBaseline) || (r.textBaseline = "alphabetic"),
            "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"),
            "start" === r.textAlign && (r.textAlign = "left"),
            "end" === r.textAlign && (r.textAlign = "right"),
            f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
                null != r[t] && c.set(t, r[t]);
            }),
            r.lineDash && (e.style.lineDash = B(r.lineDash).split(x_)),
            c[u] && "none" !== c[u] && (e[u] = !0),
            (e.__inheritedStyle = r);
    }
    function Ml(t, e) {
        var n = e && t && t.match(M_);
        if (n) {
            var i = B(n[1]),
                r = e[i];
            return r;
        }
        return t;
    }
    function Il(t, e) {
        var n = t.getAttribute("transform");
        if (n) {
            n = n.replace(/,/g, " ");
            var i = null,
                r = [];
            n.replace(I_, function (t, e, n) {
                r.push(e, n);
            });
            for (var a = r.length - 1; a > 0; a -= 2) {
                var o = r[a],
                    s = r[a - 1];
                switch (((i = i || Te()), s)) {
                    case "translate":
                        (o = B(o).split(x_)), Pe(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
                        break;
                    case "scale":
                        (o = B(o).split(x_)), Oe(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
                        break;
                    case "rotate":
                        (o = B(o).split(x_)), Le(i, i, parseFloat(o[0]));
                        break;
                    case "skew":
                        (o = B(o).split(x_)), console.warn("Skew transform is not supported yet");
                        break;
                    case "matrix":
                        var o = B(o).split(x_);
                        (i[0] = parseFloat(o[0])), (i[1] = parseFloat(o[1])), (i[2] = parseFloat(o[2])), (i[3] = parseFloat(o[3])), (i[4] = parseFloat(o[4])), (i[5] = parseFloat(o[5]));
                }
            }
            e.setLocalTransform(i);
        }
    }
    function Cl(t) {
        var e = t.getAttribute("style"),
            n = {};
        if (!e) return n;
        var i = {};
        C_.lastIndex = 0;
        for (var r; null != (r = C_.exec(e)); ) i[r[1]] = r[2];
        for (var a in S_) S_.hasOwnProperty(a) && null != i[a] && (n[S_[a]] = i[a]);
        return n;
    }
    function Tl(t, e, n) {
        var i = e / t.width,
            r = n / t.height,
            a = Math.min(i, r),
            o = [a, a],
            s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];
        return { scale: o, position: s };
    }
    function Dl(t, e) {
        return function (n, i, r) {
            (e || !this._disposed) && ((n = n && n.toLowerCase()), Uf.prototype[t].call(this, n, i, r));
        };
    }
    function Al() {
        Uf.call(this);
    }
    function kl(t, e, n) {
        function r(t, e) {
            return t.__prio - e.__prio;
        }
        (n = n || {}), "string" == typeof e && (e = lx[e]), this.id, this.group, (this._dom = t);
        var a = "canvas",
            o = (this._zr = Bi(t, { renderer: n.renderer || a, devicePixelRatio: n.devicePixelRatio, width: n.width, height: n.height }));
        this._throttledZrFlush = el(y(o.flush, o), 17);
        var e = i(e);
        e && By(e, !0), (this._theme = e), (this._chartsViews = []), (this._chartsMap = {}), (this._componentsViews = []), (this._componentsMap = {}), (this._coordSysMgr = new us());
        var s = (this._api = jl(this));
        An(sx, r),
            An(rx, r),
            (this._scheduler = new il(this, s, rx, sx)),
            Uf.call(this, (this._ecEventProcessor = new Zl())),
            (this._messageCenter = new Al()),
            this._initEvents(),
            (this.resize = y(this.resize, this)),
            (this._pendingActions = []),
            o.animation.on("frame", this._onframe, this),
            Nl(o, this),
            E(this);
    }
    function Pl(t, e, n) {
        if (!this._disposed) {
            var i,
                r = this._model,
                a = this._coordSysMgr.getCoordinateSystems();
            e = Zi(r, e);
            for (var o = 0; o < a.length; o++) {
                var s = a[o];
                if (s[t] && null != (i = s[t](r, e, n))) return i;
            }
        }
    }
    function Ll(t) {
        var e = t._model,
            n = t._scheduler;
        n.restorePipelines(e), n.prepareStageTasks(), Fl(t, "component", e, n), Fl(t, "chart", e, n), n.plan();
    }
    function Ol(t, e, n, i, r) {
        function a(i) {
            i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);
        }
        var o = t._model;
        if (!i) return void P_(t._componentsViews.concat(t._chartsViews), a);
        var s = {};
        (s[i + "Id"] = n[i + "Id"]), (s[i + "Index"] = n[i + "Index"]), (s[i + "Name"] = n[i + "Name"]);
        var l = { mainType: i, query: s };
        r && (l.subType = r);
        var h = n.excludeSeriesId;
        null != h && (h = N(Fi(h))),
            o &&
                o.eachComponent(
                    l,
                    function (e) {
                        (h && null != h.get(e.id)) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);
                    },
                    t
                );
    }
    function Bl(t, e) {
        var n = t._chartsMap,
            i = t._scheduler;
        e.eachSeries(function (t) {
            i.updateStreamModes(t, n[t.__viewId]);
        });
    }
    function El(t, e) {
        var n = t.type,
            i = t.escapeConnect,
            r = nx[n],
            a = r.actionInfo,
            l = (a.update || "update").split(":"),
            h = l.pop();
        (l = null != l[0] && B_(l[0])), (this[K_] = !0);
        var u = [t],
            c = !1;
        t.batch &&
            ((c = !0),
            (u = p(t.batch, function (e) {
                return (e = s(o({}, e), t)), (e.batch = null), e;
            })));
        var d,
            f = [],
            g = "highlight" === n || "downplay" === n;
        P_(
            u,
            function (t) {
                (d = r.action(t, this._model, this._api)), (d = d || o({}, t)), (d.type = a.event || d.type), f.push(d), g ? Ol(this, h, t, "series") : l && Ol(this, h, t, l.main, l.sub);
            },
            this
        ),
            "none" === h || g || l || (this[$_] ? (Ll(this), tx.update.call(this, t), (this[$_] = !1)) : tx[h].call(this, t)),
            (d = c ? { type: a.event || n, escapeConnect: i, batch: f } : f[0]),
            (this[K_] = !1),
            !e && this._messageCenter.trigger(d.type, d);
    }
    function zl(t) {
        for (var e = this._pendingActions; e.length; ) {
            var n = e.shift();
            El.call(this, n, t);
        }
    }
    function Rl(t) {
        !t && this.trigger("updated");
    }
    function Nl(t, e) {
        t.on("rendered", function () {
            e.trigger("rendered"), !t.animation.isFinished() || e[$_] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
        });
    }
    function Fl(t, e, n, i) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type,
                r = s[e];
            if (!r) {
                var u = B_(t.type),
                    c = a ? Yy.getClass(u.main, u.sub) : Ks.getClass(u.sub);
                (r = new c()), r.init(n, h), (s[e] = r), o.push(r), l.add(r.group);
            }
            (t.__viewId = r.__id = e), (r.__alive = !0), (r.__model = t), (r.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }), !a && i.prepareView(r, t, n, h);
        }
        for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
        a
            ? n.eachComponent(function (t, e) {
                  "series" !== t && r(e);
              })
            : n.eachSeries(r);
        for (var u = 0; u < o.length; ) {
            var c = o[u];
            c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, h), o.splice(u, 1), delete s[c.__id], (c.__id = c.group.__ecComponentInfo = null));
        }
    }
    function Vl(t) {
        t.clearColorPalette(),
            t.eachSeries(function (t) {
                t.clearColorPalette();
            });
    }
    function Gl(t, e, n, i) {
        Hl(t, e, n, i),
            P_(t._chartsViews, function (t) {
                t.__alive = !1;
            }),
            Wl(t, e, n, i),
            P_(t._chartsViews, function (t) {
                t.__alive || t.remove(e, n);
            });
    }
    function Hl(t, e, n, i, r) {
        P_(r || t._componentsViews, function (t) {
            var r = t.__model;
            t.render(r, e, n, i), ql(r, t);
        });
    }
    function Wl(t, e, n, i, r) {
        var a,
            o = t._scheduler;
        e.eachSeries(function (e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var s = n.renderTask;
            o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), (a |= s.perform(o.getPerformArgs(s))), (n.group.silent = !!e.get("silent")), ql(e, n), Yl(e, n);
        }),
            (o.unfinished |= a),
            Ul(t, e),
            r_(t._zr.dom, e);
    }
    function Xl(t, e) {
        P_(ox, function (n) {
            n(t, e);
        });
    }
    function Ul(t, e) {
        var n = t._zr,
            i = n.storage,
            r = 0;
        i.traverse(function () {
            r++;
        }),
            r > e.get("hoverLayerThreshold") &&
                !Sf.node &&
                e.eachSeries(function (e) {
                    if (!e.preventUsingHoverLayer) {
                        var n = t._chartsMap[e.__viewId];
                        n.__alive &&
                            n.group.traverse(function (t) {
                                t.useHoverLayer = !0;
                            });
                    }
                });
    }
    function Yl(t, e) {
        var n = t.get("blendMode") || null;
        e.group.traverse(function (t) {
            t.isGroup || (t.style.blend !== n && t.setStyle("blend", n)),
                t.eachPendingDisplayable &&
                    t.eachPendingDisplayable(function (t) {
                        t.setStyle("blend", n);
                    });
        });
    }
    function ql(t, e) {
        var n = t.get("z"),
            i = t.get("zlevel");
        e.group.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));
        });
    }
    function jl(t) {
        var e = t._coordSysMgr;
        return o(new hs(t), {
            getCoordinateSystems: y(e.getCoordinateSystems, e),
            getComponentByElement: function (e) {
                for (; e; ) {
                    var n = e.__ecComponentInfo;
                    if (null != n) return t._model.getComponent(n.mainType, n.index);
                    e = e.parent;
                }
            },
        });
    }
    function Zl() {
        this.eventInfo;
    }
    function Kl(t) {
        function e(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i[a] = e;
            }
        }
        var n = 0,
            i = 1,
            r = 2,
            a = "__connectUpdateStatus";
        P_(ix, function (o, s) {
            t._messageCenter.on(s, function (o) {
                if (cx[t.group] && t[a] !== n) {
                    if (o && o.escapeConnect) return;
                    var s = t.makeActionFromEvent(o),
                        l = [];
                    P_(ux, function (e) {
                        e !== t && e.group === t.group && l.push(e);
                    }),
                        e(l, n),
                        P_(l, function (t) {
                            t[a] !== i && t.dispatchAction(s);
                        }),
                        e(l, r);
                }
            });
        });
    }
    function $l(t, e, n) {
        var i = eh(t);
        if (i) return i;
        var r = new kl(t, e, n);
        return (r.id = "ec_" + dx++), (ux[r.id] = r), $i(t, px, r.id), Kl(r), r;
    }
    function Ql(t) {
        if (x(t)) {
            var e = t;
            (t = null),
                P_(e, function (e) {
                    null != e.group && (t = e.group);
                }),
                (t = t || "g_" + fx++),
                P_(e, function (e) {
                    e.group = t;
                });
        }
        return (cx[t] = !0), t;
    }
    function Jl(t) {
        cx[t] = !1;
    }
    function th(t) {
        "string" == typeof t ? (t = ux[t]) : t instanceof kl || (t = eh(t)), t instanceof kl && !t.isDisposed() && t.dispose();
    }
    function eh(t) {
        return ux[Qi(t, px)];
    }
    function nh(t) {
        return ux[t];
    }
    function ih(t, e) {
        lx[t] = e;
    }
    function rh(t) {
        ax.push(t);
    }
    function ah(t, e) {
        dh(rx, t, e, N_);
    }
    function oh(t) {
        ox.push(t);
    }
    function sh(t, e, n) {
        "function" == typeof e && ((n = e), (e = ""));
        var i = O_(t) ? t.type : [t, (t = { event: e })][0];
        (t.event = (t.event || i).toLowerCase()), (e = t.event), k_(Q_.test(i) && Q_.test(e)), nx[i] || (nx[i] = { action: n, actionInfo: t }), (ix[e] = i);
    }
    function lh(t, e) {
        us.register(t, e);
    }
    function hh(t) {
        var e = us.get(t);
        return e ? (e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()) : void 0;
    }
    function uh(t, e) {
        dh(sx, t, e, H_, "layout");
    }
    function ch(t, e) {
        dh(sx, t, e, U_, "visual");
    }
    function dh(t, e, n, i, r) {
        (L_(e) || O_(e)) && ((n = e), (e = i));
        var a = il.wrapStageHandler(n, r);
        return (a.__prio = e), (a.__raw = n), t.push(a), a;
    }
    function fh(t, e) {
        hx[t] = e;
    }
    function ph(t) {
        return ry.extend(t);
    }
    function gh(t) {
        return Yy.extend(t);
    }
    function vh(t) {
        return Uy.extend(t);
    }
    function mh(t) {
        return Ks.extend(t);
    }
    function yh(t) {
        n("createCanvas", t);
    }
    function _h(t, e, n) {
        D_.registerMap(t, e, n);
    }
    function xh(t) {
        var e = D_.retrieveMap(t);
        return e && e[0] && { geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas };
    }
    function wh(t) {
        return t;
    }
    function bh(t, e, n, i, r) {
        (this._old = t), (this._new = e), (this._oldKeyGetter = n || wh), (this._newKeyGetter = i || wh), (this.context = r);
    }
    function Sh(t, e, n, i, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[i](t[a], a),
                s = e[o];
            null == s ? (n.push(o), (e[o] = a)) : (s.length || (e[o] = s = [s]), s.push(a));
        }
    }
    function Mh(t) {
        var e = {},
            n = (e.encode = {}),
            i = N(),
            r = [],
            a = [],
            o = (e.userOutput = { dimensionNames: t.dimensions.slice(), encode: {} });
        f(t.dimensions, function (e) {
            var s = t.getDimensionInfo(e),
                l = s.coordDim;
            if (l) {
                var h = s.coordDimIndex;
                (Ih(n, l)[h] = e), s.isExtraCoord || (i.set(l, 1), Th(s.type) && (r[0] = e), (Ih(o.encode, l)[h] = s.index)), s.defaultTooltip && a.push(e);
            }
            mx.each(function (t, e) {
                var i = Ih(n, e),
                    r = s.otherDims[e];
                null != r && r !== !1 && (i[r] = s.name);
            });
        });
        var s = [],
            l = {};
        i.each(function (t, e) {
            var i = n[e];
            (l[e] = i[0]), (s = s.concat(i));
        }),
            (e.dataDimsOnCoord = s),
            (e.encodeFirstDimNotExtra = l);
        var h = n.label;
        h && h.length && (r = h.slice());
        var u = n.tooltip;
        return u && u.length ? (a = u.slice()) : a.length || (a = r.slice()), (n.defaultedLabel = r), (n.defaultedTooltip = a), e;
    }
    function Ih(t, e) {
        return t.hasOwnProperty(e) || (t[e] = []), t[e];
    }
    function Ch(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
    }
    function Th(t) {
        return !("ordinal" === t || "time" === t);
    }
    function Dh(t) {
        return t._rawCount > 65535 ? Mx : Cx;
    }
    function Ah(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t);
    }
    function kh(t, e) {
        f(Tx.concat(e.__wrappedMethods || []), function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
        }),
            (t.__wrappedMethods = e.__wrappedMethods),
            f(Dx, function (n) {
                t[n] = i(e[n]);
            }),
            (t._calculationInfo = o(e._calculationInfo));
    }
    function Ph(t, e, n, i, r) {
        var a = Sx[e.type],
            o = i - 1,
            s = e.name,
            l = t[s][o];
        if (l && l.length < n) {
            for (var h = new a(Math.min(r - o * n, n)), u = 0; u < l.length; u++) h[u] = l[u];
            t[s][o] = h;
        }
        for (var c = i * n; r > c; c += n) t[s].push(new a(Math.min(r - c, n)));
    }
    function Lh(t) {
        var e = t._invertedIndicesMap;
        f(e, function (n, i) {
            var r = t._dimensionInfos[i],
                a = r.ordinalMeta;
            if (a) {
                n = e[i] = new Ix(a.categories.length);
                for (var o = 0; o < n.length; o++) n[o] = xx;
                for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o;
            }
        });
    }
    function Oh(t, e, n) {
        var i;
        if (null != e) {
            var r = t._chunkSize,
                a = Math.floor(n / r),
                o = n % r,
                s = t.dimensions[e],
                l = t._storage[s][a];
            if (l) {
                i = l[o];
                var h = t._dimensionInfos[s].ordinalMeta;
                h && h.categories.length && (i = h.categories[i]);
            }
        }
        return i;
    }
    function Bh(t) {
        return t;
    }
    function Eh(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1;
    }
    function zh(t, e) {
        var n = t._idList[e];
        return null == n && (n = Oh(t, t._idDimIdx, e)), null == n && (n = bx + e), n;
    }
    function Rh(t) {
        return x(t) || (t = [t]), t;
    }
    function Nh(t, e) {
        var n = t.dimensions,
            i = new Ax(p(n, t.getDimensionInfo, t), t.hostModel);
        kh(i, t);
        for (var r = (i._storage = {}), a = t._storage, o = 0; o < n.length; o++) {
            var s = n[o];
            a[s] && (h(e, s) >= 0 ? ((r[s] = Fh(a[s])), (i._rawExtent[s] = Vh()), (i._extent[s] = null)) : (r[s] = a[s]));
        }
        return i;
    }
    function Fh(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = Ah(t[n]);
        return e;
    }
    function Vh() {
        return [1 / 0, -1 / 0];
    }
    function Gh(t, e, n) {
        function r(t, e, n) {
            null != mx.get(e) ? (t.otherDims[e] = n) : ((t.coordDim = e), (t.coordDimIndex = n), u.set(e, !0));
        }
        Wo.isInstance(e) || (e = Wo.seriesDataToSource(e)), (n = n || {}), (t = (t || []).slice());
        for (var a = (n.dimsDef || []).slice(), l = N(n.encodeDef), h = N(), u = N(), c = [], d = Hh(e, t, a, n.dimCount), p = 0; d > p; p++) {
            var g = (a[p] = o({}, S(a[p]) ? a[p] : { name: a[p] })),
                v = g.name,
                m = (c[p] = { otherDims: {} });
            null != v && null == h.get(v) && ((m.name = m.displayName = v), h.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName);
        }
        l.each(function (t, e) {
            if (((t = Fi(t).slice()), 1 === t.length && !b(t[0]) && t[0] < 0)) return void l.set(e, !1);
            var n = l.set(e, []);
            f(t, function (t, i) {
                b(t) && (t = h.get(t)), null != t && d > t && ((n[i] = t), r(c[t], e, i));
            });
        });
        var y = 0;
        f(t, function (t) {
            var e, t, n, a;
            if (b(t)) (e = t), (t = {});
            else {
                e = t.name;
                var o = t.ordinalMeta;
                (t.ordinalMeta = null), (t = i(t)), (t.ordinalMeta = o), (n = t.dimsDef), (a = t.otherDims), (t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null);
            }
            var h = l.get(e);
            if (h !== !1) {
                var h = Fi(h);
                if (!h.length)
                    for (var u = 0; u < ((n && n.length) || 1); u++) {
                        for (; y < c.length && null != c[y].coordDim; ) y++;
                        y < c.length && h.push(y++);
                    }
                f(h, function (i, o) {
                    var l = c[i];
                    if ((r(s(l, t), e, o), null == l.name && n)) {
                        var h = n[o];
                        !S(h) && (h = { name: h }), (l.name = l.displayName = h.name), (l.defaultTooltip = h.defaultTooltip);
                    }
                    a && s(l.otherDims, a);
                });
            }
        });
        var _ = n.generateCoord,
            x = n.generateCoordCount,
            w = null != x;
        x = _ ? x || 1 : 0;
        for (var M = _ || "value", I = 0; d > I; I++) {
            var m = (c[I] = c[I] || {}),
                C = m.coordDim;
            null == C && ((m.coordDim = Wh(M, u, w)), (m.coordDimIndex = 0), (!_ || 0 >= x) && (m.isExtraCoord = !0), x--), null == m.name && (m.name = Wh(m.coordDim, h)), null == m.type && ts(e, I, m.name) && (m.type = "ordinal");
        }
        return c;
    }
    function Hh(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
        return (
            f(e, function (t) {
                var e = t.dimsDef;
                e && (r = Math.max(r, e.length));
            }),
            r
        );
    }
    function Wh(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i); ) i++;
            t += i;
        }
        return e.set(t, !0), t;
    }
    function Xh(t, e, n) {
        n = n || {};
        var i,
            r,
            a,
            o,
            s = n.byIndex,
            l = n.stackedCoordDimension,
            h = !(!t || !t.get("stack"));
        if (
            (f(e, function (t, n) {
                b(t) && (e[n] = t = { name: t }), h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || (l && l !== t.coordDim) || (r = t));
            }),
            !r || s || i || (s = !0),
            r)
        ) {
            (a = "__\x00ecstackresult"), (o = "__\x00ecstackedover"), i && (i.createInvertedIndices = !0);
            var u = r.coordDim,
                c = r.type,
                d = 0;
            f(e, function (t) {
                t.coordDim === u && d++;
            }),
                e.push({ name: a, coordDim: u, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 }),
                d++,
                e.push({ name: o, coordDim: o, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 });
        }
        return { stackedDimension: r && r.name, stackedByDimension: i && i.name, isStackedByIndex: s, stackedOverDimension: o, stackResultDimension: a };
    }
    function Uh(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension");
    }
    function Yh(t, e) {
        return Uh(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
    }
    function qh(t, e, n) {
        (n = n || {}), Wo.isInstance(t) || (t = Wo.seriesDataToSource(t));
        var i,
            r = e.get("coordinateSystem"),
            a = us.get(r),
            o = Go(e);
        o &&
            (i = p(o.coordSysDims, function (t) {
                var e = { name: t },
                    n = o.axisMap.get(t);
                if (n) {
                    var i = n.get("type");
                    e.type = Ch(i);
                }
                return e;
            })),
            i || (i = (a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice())) || ["x", "y"]);
        var s,
            l,
            h = Lx(t, { coordDimensions: i, generateCoord: n.generateCoord });
        o &&
            f(h, function (t, e) {
                var n = t.coordDim,
                    i = o.categoryAxisMap.get(n);
                i && (null == s && (s = e), (t.ordinalMeta = i.getOrdinalMeta())), null != t.otherDims.itemName && (l = !0);
            }),
            l || null == s || (h[s].otherDims.itemName = 0);
        var u = Xh(e, h),
            c = new Ax(h, e);
        c.setCalculationInfo(u);
        var d =
            null != s && jh(t)
                ? function (t, e, n, i) {
                      return i === s ? n : this.defaultDimValueGetter(t, e, n, i);
                  }
                : null;
        return (c.hasItemOption = !1), c.initData(t, null, d), c;
    }
    function jh(t) {
        if (t.sourceFormat === uy) {
            var e = Zh(t.data || []);
            return null != e && !x(Gi(e));
        }
    }
    function Zh(t) {
        for (var e = 0; e < t.length && null == t[e]; ) e++;
        return t[e];
    }
    function Kh(t) {
        (this._setting = t || {}), (this._extent = [1 / 0, -1 / 0]), (this._interval = 0), this.init && this.init.apply(this, arguments);
    }
    function $h(t) {
        (this.categories = t.categories || []), (this._needCollect = t.needCollect), (this._deduplication = t.deduplication), this._map;
    }
    function Qh(t) {
        return t._map || (t._map = N(t.categories));
    }
    function Jh(t) {
        return S(t) && null != t.value ? t.value : t + "";
    }
    function tu(t, e, n, i) {
        var r = {},
            a = t[1] - t[0],
            o = (r.interval = _o(a / e, !0));
        null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
        var s = (r.intervalPrecision = eu(o)),
            l = (r.niceTickExtent = [zx(Math.ceil(t[0] / o) * o, s), zx(Math.floor(t[1] / o) * o, s)]);
        return iu(l, t), r;
    }
    function eu(t) {
        return uo(t) + 2;
    }
    function nu(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
    }
    function iu(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), nu(t, 0, e), nu(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
    }
    function ru(t, e, n, i) {
        var r = [];
        if (!t) return r;
        var a = 1e4;
        e[0] < n[0] && r.push(e[0]);
        for (var o = n[0]; o <= n[1] && (r.push(o), (o = zx(o + t, i)), o !== r[r.length - 1]); ) if (r.length > a) return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r;
    }
    function au(t) {
        return t.get("stack") || Fx + t.seriesIndex;
    }
    function ou(t) {
        return t.dim + t.index;
    }
    function su(t, e) {
        var n = [];
        return (
            e.eachSeriesByType(t, function (t) {
                fu(t) && !pu(t) && n.push(t);
            }),
            n
        );
    }
    function lu(t) {
        var e = {};
        f(t, function (t) {
            var n = t.coordinateSystem,
                i = n.getBaseAxis();
            if ("time" === i.type || "value" === i.type)
                for (var r = t.getData(), a = i.dim + "_" + i.index, o = r.mapDimension(i.dim), s = 0, l = r.count(); l > s; ++s) {
                    var h = r.get(o, s);
                    e[a] ? e[a].push(h) : (e[a] = [h]);
                }
        });
        var n = [];
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                var r = e[i];
                if (r) {
                    r.sort(function (t, e) {
                        return t - e;
                    });
                    for (var a = null, o = 1; o < r.length; ++o) {
                        var s = r[o] - r[o - 1];
                        s > 0 && (a = null === a ? s : Math.min(a, s));
                    }
                    n[i] = a;
                }
            }
        return n;
    }
    function hu(t) {
        var e = lu(t),
            n = [];
        return (
            f(t, function (t) {
                var i,
                    r = t.coordinateSystem,
                    a = r.getBaseAxis(),
                    o = a.getExtent();
                if ("category" === a.type) i = a.getBandWidth();
                else if ("value" === a.type || "time" === a.type) {
                    var s = a.dim + "_" + a.index,
                        l = e[s],
                        h = Math.abs(o[1] - o[0]),
                        u = a.scale.getExtent(),
                        c = Math.abs(u[1] - u[0]);
                    i = l ? (h / c) * l : h;
                } else {
                    var d = t.getData();
                    i = Math.abs(o[1] - o[0]) / d.count();
                }
                var f = oo(t.get("barWidth"), i),
                    p = oo(t.get("barMaxWidth"), i),
                    g = oo(t.get("barMinWidth") || 1, i),
                    v = t.get("barGap"),
                    m = t.get("barCategoryGap");
                n.push({ bandWidth: i, barWidth: f, barMaxWidth: p, barMinWidth: g, barGap: v, barCategoryGap: m, axisKey: ou(a), stackId: au(t) });
            }),
            uu(n)
        );
    }
    function uu(t) {
        var e = {};
        f(t, function (t) {
            var n = t.axisKey,
                i = t.bandWidth,
                r = e[n] || { bandWidth: i, remainedWidth: i, autoWidthCount: 0, categoryGap: "20%", gap: "30%", stacks: {} },
                a = r.stacks;
            e[n] = r;
            var o = t.stackId;
            a[o] || r.autoWidthCount++, (a[o] = a[o] || { width: 0, maxWidth: 0 });
            var s = t.barWidth;
            s && !a[o].width && ((a[o].width = s), (s = Math.min(r.remainedWidth, s)), (r.remainedWidth -= s));
            var l = t.barMaxWidth;
            l && (a[o].maxWidth = l);
            var h = t.barMinWidth;
            h && (a[o].minWidth = h);
            var u = t.barGap;
            null != u && (r.gap = u);
            var c = t.barCategoryGap;
            null != c && (r.categoryGap = c);
        });
        var n = {};
        return (
            f(e, function (t, e) {
                n[e] = {};
                var i = t.stacks,
                    r = t.bandWidth,
                    a = oo(t.categoryGap, r),
                    o = oo(t.gap, 1),
                    s = t.remainedWidth,
                    l = t.autoWidthCount,
                    h = (s - a) / (l + (l - 1) * o);
                (h = Math.max(h, 0)),
                    f(i, function (t) {
                        var e = t.maxWidth,
                            n = t.minWidth;
                        if (t.width) {
                            var i = t.width;
                            e && (i = Math.min(i, e)), n && (i = Math.max(i, n)), (t.width = i), (s -= i), l--;
                        } else {
                            var i = h;
                            e && i > e && (i = Math.min(e, s)), n && n > i && (i = n), i !== h && ((t.width = i), (s -= i), l--);
                        }
                    }),
                    (h = (s - a) / (l + (l - 1) * o)),
                    (h = Math.max(h, 0));
                var u,
                    c = 0;
                f(i, function (t) {
                    t.width || (t.width = h), (u = t), (c += t.width * (1 + o));
                }),
                    u && (c -= u.width * o);
                var d = -c / 2;
                f(i, function (t, i) {
                    (n[e][i] = n[e][i] || { bandWidth: r, offset: d, width: t.width }), (d += t.width * (1 + o));
                });
            }),
            n
        );
    }
    function cu(t, e, n) {
        if (t && e) {
            var i = t[ou(e)];
            return null != i && null != n && (i = i[au(n)]), i;
        }
    }
    function du(t, e) {
        var n = su(t, e),
            i = hu(n),
            r = {};
        f(
            n,
            function (t) {
                var e = t.getData(),
                    n = t.coordinateSystem,
                    a = n.getBaseAxis(),
                    o = au(t),
                    s = i[ou(a)][o],
                    l = s.offset,
                    h = s.width,
                    u = n.getOtherAxis(a),
                    c = t.get("barMinHeight") || 0;
                (r[o] = r[o] || []), e.setLayout({ bandWidth: s.bandWidth, offset: l, size: h });
                for (var d = e.mapDimension(u.dim), f = e.mapDimension(a.dim), p = Uh(e, d), g = u.isHorizontal(), v = gu(a, u, p), m = 0, y = e.count(); y > m; m++) {
                    var _ = e.get(d, m),
                        x = e.get(f, m);
                    if (!isNaN(_) && !isNaN(x)) {
                        var w = _ >= 0 ? "p" : "n",
                            b = v;
                        p && (r[o][x] || (r[o][x] = { p: v, n: v }), (b = r[o][x][w]));
                        var S, M, I, C;
                        if (g) {
                            var T = n.dataToPoint([_, x]);
                            (S = b), (M = T[1] + l), (I = T[0] - v), (C = h), Math.abs(I) < c && (I = (0 > I ? -1 : 1) * c), p && (r[o][x][w] += I);
                        } else {
                            var T = n.dataToPoint([x, _]);
                            (S = T[0] + l), (M = b), (I = h), (C = T[1] - v), Math.abs(C) < c && (C = (0 >= C ? -1 : 1) * c), p && (r[o][x][w] += C);
                        }
                        e.setItemLayout(m, { x: S, y: M, width: I, height: C });
                    }
                }
            },
            this
        );
    }
    function fu(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
    }
    function pu(t) {
        return t.pipelineContext && t.pipelineContext.large;
    }
    function gu(t, e) {
        return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0));
    }
    function vu(t, e) {
        return nw(t, ew(e));
    }
    function mu(t, e) {
        var n,
            i,
            r,
            a = t.type,
            o = e.getMin(),
            s = e.getMax(),
            l = null != o,
            h = null != s,
            u = t.getExtent();
        "ordinal" === a
            ? (n = e.getCategories().length)
            : ((i = e.get("boundaryGap")), x(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), (i[0] = oo(i[0], 1)), (i[1] = oo(i[1], 1)), (r = u[1] - u[0] || Math.abs(u[0]))),
            null == o && (o = "ordinal" === a ? (n ? 0 : 0 / 0) : u[0] - i[0] * r),
            null == s && (s = "ordinal" === a ? (n ? n - 1 : 0 / 0) : u[1] + i[1] * r),
            "dataMin" === o ? (o = u[0]) : "function" == typeof o && (o = o({ min: u[0], max: u[1] })),
            "dataMax" === s ? (s = u[1]) : "function" == typeof s && (s = s({ min: u[0], max: u[1] })),
            (null == o || !isFinite(o)) && (o = 0 / 0),
            (null == s || !isFinite(s)) && (s = 0 / 0),
            t.setBlank(T(o) || T(s) || ("ordinal" === a && !t.getOrdinalMeta().categories.length)),
            e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !h && (s = 0));
        var c = e.ecModel;
        if (c && "time" === a) {
            var d,
                p = su("bar", c);
            if (
                (f(p, function (t) {
                    d |= t.getBaseAxis() === e.axis;
                }),
                d)
            ) {
                var g = hu(p),
                    v = yu(o, s, e, g);
                (o = v.min), (s = v.max);
            }
        }
        return [o, s];
    }
    function yu(t, e, n, i) {
        var r = n.axis.getExtent(),
            a = r[1] - r[0],
            o = cu(i, n.axis);
        if (void 0 === o) return { min: t, max: e };
        var s = 1 / 0;
        f(o, function (t) {
            s = Math.min(t.offset, s);
        });
        var l = -1 / 0;
        f(o, function (t) {
            l = Math.max(t.offset + t.width, l);
        }),
            (s = Math.abs(s)),
            (l = Math.abs(l));
        var h = s + l,
            u = e - t,
            c = 1 - (s + l) / a,
            d = u / c - u;
        return (e += d * (l / h)), (t -= d * (s / h)), { min: t, max: e };
    }
    function _u(t, e) {
        var n = mu(t, e),
            i = null != e.getMin(),
            r = null != e.getMax(),
            a = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(n[0], n[1]),
            t.niceExtent({ splitNumber: a, fixMin: i, fixMax: r, minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null, maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s);
    }
    function xu(t, e) {
        if ((e = e || t.get("type")))
            switch (e) {
                case "category":
                    return new Ex(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
                case "value":
                    return new Nx();
                default:
                    return (Kh.getClass(e) || Nx).create(t);
            }
    }
    function wu(t) {
        var e = t.scale.getExtent(),
            n = e[0],
            i = e[1];
        return !((n > 0 && i > 0) || (0 > n && 0 > i));
    }
    function bu(t) {
        var e = t.getLabelModel().get("formatter"),
            n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e
            ? (e = (function (e) {
                  return function (n) {
                      return (n = t.scale.getLabel(n)), e.replace("{value}", null != n ? n : "");
                  };
              })(e))
            : "function" == typeof e
            ? function (i, r) {
                  return null != n && (r = i - n), e(Su(t, i), r);
              }
            : function (e) {
                  return t.scale.getLabel(e);
              };
    }
    function Su(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e;
    }
    function Mu(t) {
        var e = t.model,
            n = t.scale;
        if (e.get("axisLabel.show") && !n.isBlank()) {
            var i,
                r,
                a = "category" === t.type,
                o = n.getExtent();
            a ? (r = n.count()) : ((i = n.getTicks()), (r = i.length));
            var s,
                l = t.getLabelModel(),
                h = bu(t),
                u = 1;
            r > 40 && (u = Math.ceil(r / 40));
            for (var c = 0; r > c; c += u) {
                var d = i ? i[c] : o[0] + c,
                    f = h(d),
                    p = l.getTextRect(f),
                    g = Iu(p, l.get("rotate") || 0);
                s ? s.union(g) : (s = g);
            }
            return s;
        }
    }
    function Iu(t, e) {
        var n = (e * Math.PI) / 180,
            i = t.plain(),
            r = i.width,
            a = i.height,
            o = r * Math.cos(n) + a * Math.sin(n),
            s = r * Math.sin(n) + a * Math.cos(n),
            l = new wn(i.x, i.y, o, s);
        return l;
    }
    function Cu(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e;
    }
    function Tu(t) {
        return "category" === t.type && 0 === Cu(t.getLabelModel());
    }
    function Du(t, e) {
        if ("image" !== this.type) {
            var n = this.style,
                i = this.shape;
            i && "line" === i.symbolType ? (n.stroke = t) : this.__isEmptyBrush ? ((n.stroke = t), (n.fill = e || "#fff")) : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1);
        }
    }
    function Au(t, e, n, i, r, a, o) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return (
            (l =
                0 === t.indexOf("image://")
                    ? aa(t.slice(8), new wn(e, n, i, r), o ? "center" : "cover")
                    : 0 === t.indexOf("path://")
                    ? ra(t.slice(7), {}, new wn(e, n, i, r), o ? "center" : "cover")
                    : new vw({ shape: { symbolType: t, x: e, y: n, width: i, height: r } })),
            (l.__isEmptyBrush = s),
            (l.setColor = Du),
            l.setColor(a),
            l
        );
    }
    function ku(t) {
        return qh(t.getSource(), t);
    }
    function Pu(t, e) {
        var n = e;
        Qa.isInstance(e) || ((n = new Qa(e)), c(n, lw));
        var i = xu(n);
        return i.setExtent(t[0], t[1]), _u(i, n), i;
    }
    function Lu(t) {
        c(t, lw);
    }
    function Ou(t, e) {
        return Math.abs(t - e) < _w;
    }
    function Bu(t, e, n) {
        var i = 0,
            r = t[0];
        if (!r) return !1;
        for (var a = 1; a < t.length; a++) {
            var o = t[a];
            (i += Pr(r[0], r[1], o[0], o[1], e, n)), (r = o);
        }
        var s = t[0];
        return (Ou(r[0], s[0]) && Ou(r[1], s[1])) || (i += Pr(r[0], r[1], s[0], s[1], e, n)), 0 !== i;
    }
    function Eu(t, e, n) {
        if (((this.name = t), (this.geometries = e), n)) n = [n[0], n[1]];
        else {
            var i = this.getBoundingRect();
            n = [i.x + i.width / 2, i.y + i.height / 2];
        }
        this.center = n;
    }
    function zu(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var n = t.features, i = 0; i < n.length; i++)
            for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
                var h = o[l];
                if ("Polygon" === a.type) o[l] = Ru(h, s[l], e);
                else if ("MultiPolygon" === a.type)
                    for (var u = 0; u < h.length; u++) {
                        var c = h[u];
                        h[u] = Ru(c, s[l][u], e);
                    }
            }
        return (t.UTF8Encoding = !1), t;
    }
    function Ru(t, e, n) {
        for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
            var s = t.charCodeAt(o) - 64,
                l = t.charCodeAt(o + 1) - 64;
            (s = (s >> 1) ^ -(1 & s)), (l = (l >> 1) ^ -(1 & l)), (s += r), (l += a), (r = s), (a = l), i.push([s / n, l / n]);
        }
        return i;
    }
    function Nu(t) {
        return "category" === t.type ? Vu(t) : Wu(t);
    }
    function Fu(t, e) {
        return "category" === t.type ? Hu(t, e) : { ticks: t.scale.getTicks() };
    }
    function Vu(t) {
        var e = t.getLabelModel(),
            n = Gu(t, e);
        return !e.get("show") || t.scale.isBlank() ? { labels: [], labelCategoryInterval: n.labelCategoryInterval } : n;
    }
    function Gu(t, e) {
        var n = Xu(t, "labels"),
            i = Cu(e),
            r = Uu(n, i);
        if (r) return r;
        var a, o;
        return w(i) ? (a = $u(t, i)) : ((o = "auto" === i ? qu(t) : i), (a = Ku(t, o))), Yu(n, i, { labels: a, labelCategoryInterval: o });
    }
    function Hu(t, e) {
        var n = Xu(t, "ticks"),
            i = Cu(e),
            r = Uu(n, i);
        if (r) return r;
        var a, o;
        if (((!e.get("show") || t.scale.isBlank()) && (a = []), w(i))) a = $u(t, i, !0);
        else if ("auto" === i) {
            var s = Gu(t, t.getLabelModel());
            (o = s.labelCategoryInterval),
                (a = p(s.labels, function (t) {
                    return t.tickValue;
                }));
        } else (o = i), (a = Ku(t, o, !0));
        return Yu(n, i, { ticks: a, tickCategoryInterval: o });
    }
    function Wu(t) {
        var e = t.scale.getTicks(),
            n = bu(t);
        return {
            labels: p(e, function (e, i) {
                return { formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e };
            }),
        };
    }
    function Xu(t, e) {
        return ww(t)[e] || (ww(t)[e] = []);
    }
    function Uu(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
    }
    function Yu(t, e, n) {
        return t.push({ key: e, value: n }), n;
    }
    function qu(t) {
        var e = ww(t).autoInterval;
        return null != e ? e : (ww(t).autoInterval = t.calculateCategoryInterval());
    }
    function ju(t) {
        var e = Zu(t),
            n = bu(t),
            i = ((e.axisRotate - e.labelRotate) / 180) * Math.PI,
            r = t.scale,
            a = r.getExtent(),
            o = r.count();
        if (a[1] - a[0] < 1) return 0;
        var s = 1;
        o > 40 && (s = Math.max(1, Math.floor(o / 40)));
        for (var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(i)), c = Math.abs(h * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
            var p = 0,
                g = 0,
                v = Vn(n(l), e.font, "center", "top");
            (p = 1.3 * v.width), (g = 1.3 * v.height), (d = Math.max(d, p, 7)), (f = Math.max(f, g, 7));
        }
        var m = d / u,
            y = f / c;
        isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
        var _ = Math.max(0, Math.floor(Math.min(m, y))),
            x = ww(t.model),
            w = t.getExtent(),
            b = x.lastAutoInterval,
            S = x.lastTickCount;
        return (
            null != b && null != S && Math.abs(b - _) <= 1 && Math.abs(S - o) <= 1 && b > _ && x.axisExtend0 === w[0] && x.axisExtend1 === w[1]
                ? (_ = b)
                : ((x.lastTickCount = o), (x.lastAutoInterval = _), (x.axisExtend0 = w[0]), (x.axisExtend1 = w[1])),
            _
        );
    }
    function Zu(t) {
        var e = t.getLabelModel();
        return { axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0, labelRotate: e.get("rotate") || 0, font: e.getFont() };
    }
    function Ku(t, e, n) {
        function i(t) {
            l.push(n ? t : { formattedLabel: r(t), rawLabel: a.getLabel(t), tickValue: t });
        }
        var r = bu(t),
            a = t.scale,
            o = a.getExtent(),
            s = t.getLabelModel(),
            l = [],
            h = Math.max((e || 0) + 1, 1),
            u = o[0],
            c = a.count();
        0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
        var d = Tu(t),
            f = s.get("showMinLabel") || d,
            p = s.get("showMaxLabel") || d;
        f && u !== o[0] && i(o[0]);
        for (var g = u; g <= o[1]; g += h) i(g);
        return p && g - h !== o[1] && i(o[1]), l;
    }
    function $u(t, e, n) {
        var i = t.scale,
            r = bu(t),
            a = [];
        return (
            f(i.getTicks(), function (t) {
                var o = i.getLabel(t);
                e(t, o) && a.push(n ? t : { formattedLabel: r(t), rawLabel: o, tickValue: t });
            }),
            a
        );
    }
    function Qu(t, e) {
        var n = t[1] - t[0],
            i = e,
            r = n / i / 2;
        (t[0] += r), (t[1] -= r);
    }
    function Ju(t, e, n, i) {
        function r(t, e) {
            return (t = so(t)), (e = so(e)), d ? t > e : e > t;
        }
        var a = e.length;
        if (t.onBand && !n && a) {
            var o,
                s,
                l = t.getExtent();
            if (1 === a) (e[0].coord = l[0]), (o = e[1] = { coord: l[0] });
            else {
                var h = e[a - 1].tickValue - e[0].tickValue,
                    u = (e[a - 1].coord - e[0].coord) / h;
                f(e, function (t) {
                    t.coord -= u / 2;
                });
                var c = t.scale.getExtent();
                (s = 1 + c[1] - e[a - 1].tickValue), (o = { coord: e[a - 1].coord + u * s }), e.push(o);
            }
            var d = l[0] > l[1];
            r(e[0].coord, l[0]) && (i ? (e[0].coord = l[0]) : e.shift()), i && r(l[0], e[0].coord) && e.unshift({ coord: l[0] }), r(l[1], o.coord) && (i ? (o.coord = l[1]) : e.pop()), i && r(o.coord, l[1]) && e.push({ coord: l[1] });
        }
    }
    function tc(t) {
        return this._axes[t];
    }
    function ec(t) {
        Tw.call(this, t);
    }
    function nc(t, e) {
        return e.type || (e.data ? "category" : "value");
    }
    function ic(t, e) {
        return t.getCoordSysModel() === e;
    }
    function rc(t, e, n) {
        (this._coordsMap = {}), (this._coordsList = []), (this._axesMap = {}), (this._axesList = []), this._initCartesian(t, e, n), (this.model = t);
    }
    function ac(t, e, n, i) {
        function r(t) {
            return t.dim + "_" + t.index;
        }
        n.getAxesOnZeroOf = function () {
            return a ? [a] : [];
        };
        var a,
            o = t[e],
            s = n.model,
            l = s.get("axisLine.onZero"),
            h = s.get("axisLine.onZeroAxisIndex");
        if (l) {
            if (null != h) oc(o[h]) && (a = o[h]);
            else
                for (var u in o)
                    if (o.hasOwnProperty(u) && oc(o[u]) && !i[r(o[u])]) {
                        a = o[u];
                        break;
                    }
            a && (i[r(a)] = !0);
        }
    }
    function oc(t) {
        return t && "category" !== t.type && "time" !== t.type && wu(t);
    }
    function sc(t, e) {
        var n = t.getExtent(),
            i = n[0] + n[1];
        (t.toGlobalCoord =
            "x" === t.dim
                ? function (t) {
                      return t + e;
                  }
                : function (t) {
                      return i - t + e;
                  }),
            (t.toLocalCoord =
                "x" === t.dim
                    ? function (t) {
                          return t - e;
                      }
                    : function (t) {
                          return i - t + e;
                      });
    }
    function lc(t) {
        return p(zw, function (e) {
            var n = t.getReferringComponents(e)[0];
            return n;
        });
    }
    function hc(t) {
        return "cartesian2d" === t.get("coordinateSystem");
    }
    function uc(t, e) {
        var n = t.mapDimension("defaultedLabel", !0),
            i = n.length;
        if (1 === i) return zs(t, e, n[0]);
        if (i) {
            for (var r = [], a = 0; a < n.length; a++) {
                var o = zs(t, e, n[a]);
                r.push(o);
            }
            return r.join(" ");
        }
    }
    function cc(t, e, n, i, r, a) {
        var o = n.getModel("label"),
            s = n.getModel("emphasis.label");
        Ta(t, e, o, s, { labelFetcher: r, labelDataIndex: a, defaultText: uc(r.getData(), a), isRectText: !0, autoColor: i }), dc(t), dc(e);
    }
    function dc(t, e) {
        "outside" === t.textPosition && (t.textPosition = e);
    }
    function fc(t, e, n) {
        var i = t.getArea(),
            r = t.getBaseAxis().isHorizontal(),
            a = i.x,
            o = i.y,
            s = i.width,
            l = i.height,
            h = n.get("lineStyle.width") || 2;
        (a -= h / 2), (o -= h / 2), (s += h), (l += h);
        var u = new lm({ shape: { x: a, y: o, width: s, height: l } });
        return e && ((u.shape[r ? "width" : "height"] = 0), Va(u, { shape: { width: s, height: l } }, n)), u;
    }
    function pc(t, e, n) {
        var i = t.getArea(),
            r = new tm({ shape: { cx: so(t.cx, 1), cy: so(t.cy, 1), r0: so(i.r0, 1), r: so(i.r, 1), startAngle: i.startAngle, endAngle: i.endAngle, clockwise: i.clockwise } });
        return e && ((r.shape.endAngle = i.startAngle), Va(r, { shape: { endAngle: i.endAngle } }, n)), r;
    }
    function gc(t, e, n) {
        return t ? ("polar" === t.type ? pc(t, e, n) : "cartesian2d" === t.type ? fc(t, e, n) : null) : null;
    }
    function vc(t, e) {
        var n = t.getArea && t.getArea();
        if ("cartesian2d" === t.type) {
            var i = t.getBaseAxis();
            if ("category" !== i.type || !i.onBand) {
                var r = e.getLayout("bandWidth");
                i.isHorizontal() ? ((n.x -= r), (n.width += 2 * r)) : ((n.y -= r), (n.height += 2 * r));
            }
        }
        return n;
    }
    function mc(t, e, n) {
        (n.style.text = null),
            Fa(n, { shape: { width: 0 } }, e, t, function () {
                n.parent && n.parent.remove(n);
            });
    }
    function yc(t, e, n) {
        (n.style.text = null),
            Fa(n, { shape: { r: n.shape.r0 } }, e, t, function () {
                n.parent && n.parent.remove(n);
            });
    }
    function _c(t, e, n, i, r, a, o, l) {
        var h = e.getItemVisual(n, "color"),
            u = e.getItemVisual(n, "opacity"),
            c = i.getModel("itemStyle"),
            d = i.getModel("emphasis.itemStyle").getBarItemStyle();
        l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(s({ fill: h, opacity: u }, c.getBarItemStyle()));
        var f = i.getShallow("cursor");
        f && t.attr("cursor", f);
        var p = o ? (r.height > 0 ? "bottom" : "top") : r.width > 0 ? "left" : "right";
        l || cc(t.style, d, i, h, a, n, p), Sa(t, d);
    }
    function xc(t, e) {
        var n = t.get(Gw) || 0;
        return Math.min(n, Math.abs(e.width), Math.abs(e.height));
    }
    function wc(t, e, n) {
        var i = t.getData(),
            r = [],
            a = i.getLayout("valueAxisHorizontal") ? 1 : 0;
        r[1 - a] = i.getLayout("valueAxisStart");
        var o = new jw({ shape: { points: i.getLayout("largePoints") }, incremental: !!n, __startPoint: r, __baseDimIdx: a, __largeDataIndices: i.getLayout("largeDataIndices"), __barWidth: i.getLayout("barWidth") });
        e.add(o), Sc(o, t, i), (o.seriesIndex = t.seriesIndex), t.get("silent") || (o.on("mousedown", Zw), o.on("mousemove", Zw));
    }
    function bc(t, e, n) {
        var i = t.__baseDimIdx,
            r = 1 - i,
            a = t.shape.points,
            o = t.__largeDataIndices,
            s = Math.abs(t.__barWidth / 2),
            l = t.__startPoint[r];
        (Hw[0] = e), (Hw[1] = n);
        for (var h = Hw[i], u = Hw[1 - i], c = h - s, d = h + s, f = 0, p = a.length / 2; p > f; f++) {
            var g = 2 * f,
                v = a[g + i],
                m = a[g + r];
            if (v >= c && d >= v && (m >= l ? u >= l && m >= u : u >= m && l >= u)) return o[f];
        }
        return -1;
    }
    function Sc(t, e, n) {
        var i = n.getVisual("borderColor") || n.getVisual("color"),
            r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
        t.useStyle(r), (t.style.fill = null), (t.style.stroke = i), (t.style.lineWidth = n.getLayout("barWidth"));
    }
    function Mc(t, e, n, i) {
        var r,
            a,
            o = po(n - t.rotation),
            s = i[0] > i[1],
            l = ("start" === e && !s) || ("start" !== e && s);
        return (
            go(o - Kw / 2)
                ? ((a = l ? "bottom" : "top"), (r = "center"))
                : go(o - 1.5 * Kw)
                ? ((a = l ? "top" : "bottom"), (r = "center"))
                : ((a = "middle"), (r = 1.5 * Kw > o && o > Kw / 2 ? (l ? "left" : "right") : l ? "right" : "left")),
            { rotation: o, textAlign: r, textVerticalAlign: a }
        );
    }
    function Ic(t, e, n) {
        if (!Tu(t.axis)) {
            var i = t.get("axisLabel.showMinLabel"),
                r = t.get("axisLabel.showMaxLabel");
            (e = e || []), (n = n || []);
            var a = e[0],
                o = e[1],
                s = e[e.length - 1],
                l = e[e.length - 2],
                h = n[0],
                u = n[1],
                c = n[n.length - 1],
                d = n[n.length - 2];
            i === !1 ? (Cc(a), Cc(h)) : Tc(a, o) && (i ? (Cc(o), Cc(u)) : (Cc(a), Cc(h))), r === !1 ? (Cc(s), Cc(c)) : Tc(l, s) && (r ? (Cc(l), Cc(d)) : (Cc(s), Cc(c)));
        }
    }
    function Cc(t) {
        t && (t.ignore = !0);
    }
    function Tc(t, e) {
        var n = t && t.getBoundingRect().clone(),
            i = e && e.getBoundingRect().clone();
        if (n && i) {
            var r = De([]);
            return Le(r, r, -t.rotation), n.applyTransform(ke([], r, t.getLocalTransform())), i.applyTransform(ke([], r, e.getLocalTransform())), n.intersect(i);
        }
    }
    function Dc(t) {
        return "middle" === t || "center" === t;
    }
    function Ac(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), h = [], u = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
                var p = l[f].coord;
                (h[0] = p), (h[1] = 0), (u[0] = p), (u[1] = n.tickDirection * o), c && (ae(h, h, c), ae(u, u, c));
                var g = new um({ anid: "tick_" + l[f].tickValue, subPixelOptimize: !0, shape: { x1: h[0], y1: h[1], x2: u[0], y2: u[1] }, style: s(a.getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") }), z2: 2, silent: !0 });
                t.group.add(g), d.push(g);
            }
            return d;
        }
    }
    function kc(t, e, n) {
        var i = e.axis,
            r = D(n.axisLabelShow, e.get("axisLabel.show"));
        if (r && !i.scale.isBlank()) {
            var a = e.getModel("axisLabel"),
                o = a.get("margin"),
                s = i.getViewLabels(),
                l = ((D(n.labelRotate, a.get("rotate")) || 0) * Kw) / 180,
                h = tb(n.rotation, l, n.labelDirection),
                u = e.getCategories && e.getCategories(!0),
                c = [],
                d = eb(e),
                p = e.get("triggerEvent");
            return (
                f(s, function (r, s) {
                    var l = r.tickValue,
                        f = r.formattedLabel,
                        g = r.rawLabel,
                        v = a;
                    u && u[l] && u[l].textStyle && (v = new Qa(u[l].textStyle, a, e.ecModel));
                    var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
                        y = i.dataToCoord(l),
                        _ = [y, n.labelOffset + n.labelDirection * o],
                        x = new Kv({ anid: "label_" + l, position: _, rotation: h.rotation, silent: d, z2: 10 });
                    Aa(x.style, v, {
                        text: f,
                        textAlign: v.getShallow("align", !0) || h.textAlign,
                        textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
                        textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m,
                    }),
                        p && ((x.eventData = Jw(e)), (x.eventData.targetType = "axisLabel"), (x.eventData.value = g)),
                        t._dumbGroup.add(x),
                        x.updateTransform(),
                        c.push(x),
                        t.group.add(x),
                        x.decomposeTransform();
                }),
                c
            );
        }
    }
    function Pc(t, e) {
        var n = { axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {} };
        return Lc(n, t, e), n.seriesInvolved && Bc(n, t), n;
    }
    function Lc(t, e, n) {
        var i = e.getComponent("tooltip"),
            r = e.getComponent("axisPointer"),
            a = r.get("link", !0) || [],
            o = [];
        nb(n.getCoordinateSystems(), function (n) {
            function s(i, s, l) {
                var u = l.model.getModel("axisPointer", r),
                    d = u.get("show");
                if (d && ("auto" !== d || i || Vc(u))) {
                    null == s && (s = u.get("triggerTooltip")), (u = i ? Oc(l, c, r, e, i, s) : u);
                    var f = u.get("snap"),
                        p = Gc(l.model),
                        g = s || f || "category" === l.type,
                        v = (t.axesInfo[p] = { key: p, axis: l, coordSys: n, axisPointerModel: u, triggerTooltip: s, involveSeries: g, snap: f, useHandle: Vc(u), seriesModels: [] });
                    (h[p] = v), (t.seriesInvolved |= g);
                    var m = Ec(a, l);
                    if (null != m) {
                        var y = o[m] || (o[m] = { axesInfo: {} });
                        (y.axesInfo[p] = v), (y.mapper = a[m].mapper), (v.linkGroup = y);
                    }
                }
            }
            if (n.axisPointerEnabled) {
                var l = Gc(n.model),
                    h = (t.coordSysAxesInfo[l] = {});
                t.coordSysMap[l] = n;
                var u = n.model,
                    c = u.getModel("tooltip", i);
                if ((nb(n.getAxes(), ib(s, !1, null)), n.getTooltipAxes && i && c.get("show"))) {
                    var d = "axis" === c.get("trigger"),
                        f = "cross" === c.get("axisPointer.type"),
                        p = n.getTooltipAxes(c.get("axisPointer.axis"));
                    (d || f) && nb(p.baseAxes, ib(s, f ? "cross" : !0, d)), f && nb(p.otherAxes, ib(s, "cross", !1));
                }
            }
        });
    }
    function Oc(t, e, n, r, a, o) {
        var l = e.getModel("axisPointer"),
            h = {};
        nb(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
            h[t] = i(l.get(t));
        }),
            (h.snap = "category" !== t.type && !!o),
            "cross" === l.get("type") && (h.type = "line");
        var u = h.label || (h.label = {});
        if ((null == u.show && (u.show = !1), "cross" === a)) {
            var c = l.get("label.show");
            if (((u.show = null != c ? c : !0), !o)) {
                var d = (h.lineStyle = l.get("crossStyle"));
                d && s(u, d.textStyle);
            }
        }
        return t.model.getModel("axisPointer", new Qa(h, n, r));
    }
    function Bc(t, e) {
        e.eachSeries(function (e) {
            var n = e.coordinateSystem,
                i = e.get("tooltip.trigger", !0),
                r = e.get("tooltip.show", !0);
            n &&
                "none" !== i &&
                i !== !1 &&
                "item" !== i &&
                r !== !1 &&
                e.get("axisPointer.show", !0) !== !1 &&
                nb(t.coordSysAxesInfo[Gc(n.model)], function (t) {
                    var i = t.axis;
                    n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), (t.seriesDataCount += e.getData().count()));
                });
        }, this);
    }
    function Ec(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
            var a = t[r] || {};
            if (zc(a[i + "AxisId"], n.id) || zc(a[i + "AxisIndex"], n.componentIndex) || zc(a[i + "AxisName"], n.name)) return r;
        }
    }
    function zc(t, e) {
        return "all" === t || (x(t) && h(t, e) >= 0) || t === e;
    }
    function Rc(t) {
        var e = Nc(t);
        if (e) {
            var n = e.axisPointerModel,
                i = e.axis.scale,
                r = n.option,
                a = n.get("status"),
                o = n.get("value");
            null != o && (o = i.parse(o));
            var s = Vc(n);
            null == a && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), (r.value = o), s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
        }
    }
    function Nc(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[Gc(t)];
    }
    function Fc(t) {
        var e = Nc(t);
        return e && e.axisPointerModel;
    }
    function Vc(t) {
        return !!t.get("handle.show");
    }
    function Gc(t) {
        return t.type + "||" + t.id;
    }
    function Hc(t, e, n, i, r, a) {
        var o = rb.getAxisPointerClass(t.axisPointerClass);
        if (o) {
            var s = Fc(e);
            s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, i, a) : Wc(t, i);
        }
    }
    function Wc(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n), (t._axisPointer = null);
    }
    function Xc(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem,
            r = e.axis,
            a = {},
            o = r.getAxesOnZeroOf()[0],
            s = r.position,
            l = o ? "onZero" : s,
            h = r.dim,
            u = i.getRect(),
            c = [u.x, u.x + u.width, u.y, u.y + u.height],
            d = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
            f = e.get("offset") || 0,
            p = "x" === h ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (o) {
            var g = o.toGlobalCoord(o.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
        }
        (a.position = ["y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3]]), (a.rotation = (Math.PI / 2) * ("x" === h ? 0 : 1));
        var v = { top: -1, bottom: 1, left: -1, right: 1 };
        (a.labelDirection = a.tickDirection = a.nameDirection = v[s]),
            (a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0),
            e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection),
            D(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
        var m = e.get("axisLabel.rotate");
        return (a.labelRotate = "top" === l ? -m : m), (a.z2 = 1), a;
    }
    function Uc(t, e, n) {
        zp.call(this), this.updateData(t, e, n);
    }
    function Yc(t) {
        return [t[0] / 2, t[1] / 2];
    }
    function qc(t, e) {
        this.parent.drift(t, e);
    }
    function jc(t, e) {
        if (!this.incremental && !this.useHoverLayer)
            if ("emphasis" === e) {
                var n = this.__symbolOriginalScale,
                    i = n[1] / n[0],
                    r = { scale: [Math.max(1.1 * n[0], n[0] + 3), Math.max(1.1 * n[1], n[1] + 3 * i)] };
                this.animateTo(r, 400, "elasticOut");
            } else "normal" === e && this.animateTo({ scale: this.__symbolOriginalScale }, 400, "elasticOut");
    }
    function Zc(t) {
        (this.group = new zp()), (this._symbolCtor = t || Uc);
    }
    function Kc(t, e, n, i) {
        return !(!e || isNaN(e[0]) || isNaN(e[1]) || (i.isIgnore && i.isIgnore(n)) || (i.clipShape && !i.clipShape.contain(e[0], e[1])) || "none" === t.getItemVisual(n, "symbol"));
    }
    function $c(t) {
        return null == t || S(t) || (t = { isIgnore: t }), t || {};
    }
    function Qc(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor"),
        };
    }
    function Jc(t, e, n) {
        var i,
            r = t.getBaseAxis(),
            a = t.getOtherAxis(r),
            o = td(a, n),
            s = r.dim,
            l = a.dim,
            h = e.mapDimension(l),
            u = e.mapDimension(s),
            c = "x" === l || "radius" === l ? 1 : 0,
            d = p(t.dimensions, function (t) {
                return e.mapDimension(t);
            }),
            f = e.getCalculationInfo("stackResultDimension");
        return (
            (i |= Uh(e, d[0])) && (d[0] = f),
            (i |= Uh(e, d[1])) && (d[1] = f),
            { dataDimsForPoint: d, valueStart: o, valueAxisDim: l, baseAxisDim: s, stacked: !!i, valueDim: h, baseDim: u, baseDataOffset: c, stackedOverDimension: e.getCalculationInfo("stackedOverDimension") }
        );
    }
    function td(t, e) {
        var n = 0,
            i = t.scale.getExtent();
        return "start" === e ? (n = i[0]) : "end" === e ? (n = i[1]) : i[0] > 0 ? (n = i[0]) : i[1] < 0 && (n = i[1]), n;
    }
    function ed(t, e, n, i) {
        var r = 0 / 0;
        t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);
        var a = t.baseDataOffset,
            o = [];
        return (o[a] = n.get(t.baseDim, i)), (o[1 - a] = r), e.dataToPoint(o);
    }
    function nd(t, e) {
        var n = [];
        return (
            e
                .diff(t)
                .add(function (t) {
                    n.push({ cmd: "+", idx: t });
                })
                .update(function (t, e) {
                    n.push({ cmd: "=", idx: e, idx1: t });
                })
                .remove(function (t) {
                    n.push({ cmd: "-", idx: t });
                })
                .execute(),
            n
        );
    }
    function id(t) {
        return isNaN(t[0]) || isNaN(t[1]);
    }
    function rd(t, e, n, i, r, a, o, s, l, h) {
        return "none" !== h && h ? ad.apply(this, arguments) : od.apply(this, arguments);
    }
    function ad(t, e, n, i, r, a, o, s, l, h, u) {
        for (var c = 0, d = n, f = 0; i > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (id(p)) {
                if (u) {
                    d += a;
                    continue;
                }
                break;
            }
            if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);
            else if (l > 0) {
                var g = e[c],
                    v = "y" === h ? 1 : 0,
                    m = (p[v] - g[v]) * l;
                xb(bb, g), (bb[v] = g[v] + m), xb(Sb, p), (Sb[v] = p[v] - m), t.bezierCurveTo(bb[0], bb[1], Sb[0], Sb[1], p[0], p[1]);
            } else t.lineTo(p[0], p[1]);
            (c = d), (d += a);
        }
        return f;
    }
    function od(t, e, n, i, r, a, o, s, l, h, u) {
        for (var c = 0, d = n, f = 0; i > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (id(p)) {
                if (u) {
                    d += a;
                    continue;
                }
                break;
            }
            if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), xb(bb, p);
            else if (l > 0) {
                var g = d + a,
                    v = e[g];
                if (u) for (; v && id(e[g]); ) (g += a), (v = e[g]);
                var m = 0.5,
                    y = e[c],
                    v = e[g];
                if (!v || id(v)) xb(Sb, p);
                else {
                    id(v) && !u && (v = p), q(wb, v, y);
                    var _, x;
                    if ("x" === h || "y" === h) {
                        var w = "x" === h ? 0 : 1;
                        (_ = Math.abs(p[w] - y[w])), (x = Math.abs(p[w] - v[w]));
                    } else (_ = Gf(p, y)), (x = Gf(p, v));
                    (m = x / (x + _)), _b(Sb, p, wb, -l * (1 - m));
                }
                mb(bb, bb, s), yb(bb, bb, o), mb(Sb, Sb, s), yb(Sb, Sb, o), t.bezierCurveTo(bb[0], bb[1], Sb[0], Sb[1], p[0], p[1]), _b(bb, p, wb, l * m);
            } else t.lineTo(p[0], p[1]);
            (c = d), (d += a);
        }
        return f;
    }
    function sd(t, e) {
        var n = [1 / 0, 1 / 0],
            i = [-1 / 0, -1 / 0];
        if (e)
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1]);
            }
        return { min: e ? n : i, max: e ? i : n };
    }
    function ld(t, e) {
        if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    r = e[n];
                if (i[0] !== r[0] || i[1] !== r[1]) return;
            }
            return !0;
        }
    }
    function hd(t) {
        return "number" == typeof t ? t : t ? 0.5 : 0;
    }
    function ud(t, e, n) {
        if (!n.valueDim) return [];
        for (var i = [], r = 0, a = e.count(); a > r; r++) i.push(ed(n, t, e, r));
        return i;
    }
    function cd(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1],
                l = t[o];
            a.push(l);
            var h = [];
            switch (n) {
                case "end":
                    (h[r] = s[r]), (h[1 - r] = l[1 - r]), a.push(h);
                    break;
                case "middle":
                    var u = (l[r] + s[r]) / 2,
                        c = [];
                    (h[r] = c[r] = u), (h[1 - r] = l[1 - r]), (c[1 - r] = s[1 - r]), a.push(h), a.push(c);
                    break;
                default:
                    (h[r] = l[r]), (h[1 - r] = s[1 - r]), a.push(h);
            }
        }
        return t[o] && a.push(t[o]), a;
    }
    function dd(t, e) {
        var n = t.getVisual("visualMeta");
        if (n && n.length && t.count() && "cartesian2d" === e.type) {
            for (var i, r, a = n.length - 1; a >= 0; a--) {
                var o = n[a].dimension,
                    s = t.dimensions[o],
                    l = t.getDimensionInfo(s);
                if (((i = l && l.coordDim), "x" === i || "y" === i)) {
                    r = n[a];
                    break;
                }
            }
            if (r) {
                var h = e.getAxis(i),
                    u = p(r.stops, function (t) {
                        return { coord: h.toGlobalCoord(h.dataToCoord(t.value)), color: t.color };
                    }),
                    c = u.length,
                    d = r.outerColors.slice();
                c && u[0].coord > u[c - 1].coord && (u.reverse(), d.reverse());
                var g = 10,
                    v = u[0].coord - g,
                    m = u[c - 1].coord + g,
                    y = m - v;
                if (0.001 > y) return "transparent";
                f(u, function (t) {
                    t.offset = (t.coord - v) / y;
                }),
                    u.push({ offset: c ? u[c - 1].offset : 0.5, color: d[1] || "transparent" }),
                    u.unshift({ offset: c ? u[0].offset : 0.5, color: d[0] || "transparent" });
                var _ = new vm(0, 0, 0, 0, u, !0);
                return (_[i] = v), (_[i + "2"] = m), _;
            }
        }
    }
    function fd(t, e, n) {
        var i = t.get("showAllSymbol"),
            r = "auto" === i;
        if (!i || r) {
            var a = n.getAxesByScale("ordinal")[0];
            if (a && (!r || !pd(a, e))) {
                var o = e.mapDimension(a.dim),
                    s = {};
                return (
                    f(a.getViewLabels(), function (t) {
                        s[t.tickValue] = 1;
                    }),
                    function (t) {
                        return !s.hasOwnProperty(e.get(o, t));
                    }
                );
            }
        }
    }
    function pd(t, e) {
        var n = t.getExtent(),
            i = Math.abs(n[1] - n[0]) / t.scale.count();
        isNaN(i) && (i = 0);
        for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a) if (1.5 * Uc.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;
        return !0;
    }
    function gd(t, e, n) {
        if ("cartesian2d" === t.type) {
            var i = t.getBaseAxis().isHorizontal(),
                r = fc(t, e, n);
            if (!n.get("clip", !0)) {
                var a = r.shape,
                    o = Math.max(a.width, a.height);
                i ? ((a.y -= o), (a.height += 2 * o)) : ((a.x -= o), (a.width += 2 * o));
            }
            return r;
        }
        return pc(t, e, n);
    }
    function vd(t, e, n, i) {
        var r = e.getData(),
            a = this.dataIndex,
            o = r.getName(a),
            s = e.get("selectedOffset");
        i.dispatchAction({ type: "pieToggleSelect", from: t, name: o, seriesId: e.id }),
            r.each(function (t) {
                md(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n);
            });
    }
    function md(t, e, n, i, r) {
        var a = (e.startAngle + e.endAngle) / 2,
            o = Math.cos(a),
            s = Math.sin(a),
            l = n ? i : 0,
            h = [o * l, s * l];
        r ? t.animate().when(200, { position: h }).start("bounceOut") : t.attr("position", h);
    }
    function yd(t, e) {
        zp.call(this);
        var n = new tm({ z2: 2 }),
            i = new am(),
            r = new Kv();
        this.add(n), this.add(i), this.add(r), this.updateData(t, e, !0);
    }
    function _d(t, e, n, i, r, a, o) {
        function s(e, n, i) {
            for (var r = e; n > r; r++) if (((t[r].y += i), r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height)) return void l(r, i / 2);
            l(n - 1, i / 2);
        }
        function l(e, n) {
            for (var i = e; i >= 0 && ((t[i].y -= n), !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--);
        }
        function h(t, e, n, i, r, a) {
            for (var o = a > 0 ? (e ? Number.MAX_VALUE : 0) : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) {
                var h = Math.abs(t[s].y - i),
                    u = t[s].len,
                    c = t[s].len2,
                    d = r + u > h ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
                e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), (t[s].x = n + d * a), (o = d);
            }
        }
        t.sort(function (t, e) {
            return t.y - e.y;
        });
        for (var u, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) (u = t[g].y - c), 0 > u && s(g, d, -u, r), (c = t[g].y + t[g].height);
        0 > o - c && l(d - 1, c - o);
        for (var g = 0; d > g; g++) t[g].y >= n ? p.push(t[g]) : f.push(t[g]);
        h(f, !1, e, n, i, r), h(p, !0, e, n, i, r);
    }
    function xd(t, e, n, i, r, a) {
        for (var o = [], s = [], l = 0; l < t.length; l++) wd(t[l]) || (t[l].x < e ? o.push(t[l]) : s.push(t[l]));
        _d(s, e, n, i, 1, r, a), _d(o, e, n, i, -1, r, a);
        for (var l = 0; l < t.length; l++)
            if (!wd(t[l])) {
                var h = t[l].linePoints;
                if (h) {
                    var u = h[1][0] - h[2][0];
                    (h[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3), (h[1][1] = h[2][1] = t[l].y), (h[1][0] = h[2][0] + u);
                }
            }
    }
    function wd(t) {
        return "center" === t.position;
    }
    function bd(t, e, n) {
        var i,
            r = {},
            a = "toggleSelected" === t;
        return (
            n.eachComponent("legend", function (n) {
                a && null != i ? n[i ? "select" : "unSelect"](e.name) : "allSelect" === t || "inverseSelect" === t ? n[t]() : (n[t](e.name), (i = n.isSelected(e.name)));
                var o = n.getData();
                f(o, function (t) {
                    var e = t.get("name");
                    if ("\n" !== e && "" !== e) {
                        var i = n.isSelected(e);
                        r[e] = r.hasOwnProperty(e) ? r[e] && i : i;
                    }
                });
            }),
            "allSelect" === t || "inverseSelect" === t ? { selected: r } : { name: e.name, selected: r }
        );
    }
    function Sd(t, e) {
        var n = Um(e.get("padding")),
            i = e.getItemStyle(["color", "opacity"]);
        i.fill = e.get("backgroundColor");
        var t = new lm({ shape: { x: t.x - n[3], y: t.y - n[0], width: t.width + n[1] + n[3], height: t.height + n[0] + n[2], r: e.get("borderRadius") }, style: i, silent: !0, z2: -1 });
        return t;
    }
    function Md(t, e, n, i, r, a) {
        var o;
        return "line" !== e && e.indexOf("empty") < 0 ? ((o = n.getItemStyle()), (t.style.stroke = i), a || (o.stroke = r)) : (o = n.getItemStyle(["borderWidth", "borderColor"])), t.setStyle(o);
    }
    function Id(t, e) {
        e.dispatchAction({ type: "legendToggleSelect", name: t });
    }
    function Cd(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        (r && r.useHoverLayer) || n.dispatchAction({ type: "highlight", seriesName: t, name: e, excludeSeriesId: i });
    }
    function Td(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        (r && r.useHoverLayer) || n.dispatchAction({ type: "downplay", seriesName: t, name: e, excludeSeriesId: i });
    }
    function Dd(t, e, n) {
        var i = t.getOrient(),
            r = [1, 1];
        (r[i.index] = 0), zo(e, n, { type: "box", ignoreSize: r });
    }
    function Ad(t, e, n, i, r) {
        var a = t.axis;
        if (!a.scale.isBlank() && a.containData(e)) {
            if (!t.involveSeries) return void n.showPointer(t, e);
            var s = kd(e, t),
                l = s.payloadBatch,
                h = s.snapToValue;
            l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(h) && null != h && (e = h), n.showPointer(t, e, l, r), n.showTooltip(t, s, h);
        }
    }
    function kd(t, e) {
        var n = e.axis,
            i = n.dim,
            r = t,
            a = [],
            o = Number.MAX_VALUE,
            s = -1;
        return (
            iS(e.seriesModels, function (e) {
                var l,
                    h,
                    u = e.getData().mapDimension(i, !0);
                if (e.getAxisTooltipData) {
                    var c = e.getAxisTooltipData(u, t, n);
                    (h = c.dataIndices), (l = c.nestestValue);
                } else {
                    if (((h = e.getData().indicesOfNearest(u[0], t, "category" === n.type ? 0.5 : null)), !h.length)) return;
                    l = e.getData().get(u[0], h[0]);
                }
                if (null != l && isFinite(l)) {
                    var d = t - l,
                        f = Math.abs(d);
                    o >= f &&
                        ((o > f || (d >= 0 && 0 > s)) && ((o = f), (s = d), (r = l), (a.length = 0)),
                        iS(h, function (t) {
                            a.push({ seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t) });
                        }));
                }
            }),
            { payloadBatch: a, snapToValue: r }
        );
    }
    function Pd(t, e, n, i) {
        t[e.key] = { value: n, payloadBatch: i };
    }
    function Ld(t, e, n, i) {
        var r = n.payloadBatch,
            a = e.axis,
            o = a.model,
            s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model,
                h = Gc(l),
                u = t.map[h];
            u || ((u = t.map[h] = { coordSysId: l.id, coordSysIndex: l.componentIndex, coordSysType: l.type, coordSysMainType: l.mainType, dataByAxis: [] }), t.list.push(u)),
                u.dataByAxis.push({
                    axisDim: a.dim,
                    axisIndex: o.componentIndex,
                    axisType: o.type,
                    axisId: o.id,
                    value: i,
                    valueLabelOpt: { precision: s.get("label.precision"), formatter: s.get("label.formatter") },
                    seriesDataIndices: r.slice(),
                });
        }
    }
    function Od(t, e, n) {
        var i = (n.axesInfo = []);
        iS(e, function (e, n) {
            var r = e.axisPointerModel.option,
                a = t[n];
            a ? (!e.useHandle && (r.status = "show"), (r.value = a.value), (r.seriesDataIndices = (a.payloadBatch || []).slice())) : !e.useHandle && (r.status = "hide"),
                "show" === r.status && i.push({ axisDim: e.axis.dim, axisIndex: e.axis.model.componentIndex, value: r.value });
        });
    }
    function Bd(t, e, n, i) {
        if (Nd(e) || !t.list.length) return void i({ type: "hideTip" });
        var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
        i({ type: "showTip", escapeConnect: !0, x: e[0], y: e[1], tooltipOption: n.tooltipOption, position: n.position, dataIndexInside: r.dataIndexInside, dataIndex: r.dataIndex, seriesIndex: r.seriesIndex, dataByCoordSys: t.list });
    }
    function Ed(t, e, n) {
        var i = n.getZr(),
            r = "axisPointerLastHighlights",
            a = aS(i)[r] || {},
            o = (aS(i)[r] = {});
        iS(t, function (t) {
            var e = t.axisPointerModel.option;
            "show" === e.status &&
                iS(e.seriesDataIndices, function (t) {
                    var e = t.seriesIndex + " | " + t.dataIndex;
                    o[e] = t;
                });
        });
        var s = [],
            l = [];
        f(a, function (t, e) {
            !o[e] && l.push(t);
        }),
            f(o, function (t, e) {
                !a[e] && s.push(t);
            }),
            l.length && n.dispatchAction({ type: "downplay", escapeConnect: !0, batch: l }),
            s.length && n.dispatchAction({ type: "highlight", escapeConnect: !0, batch: s });
    }
    function zd(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
            var i = t[n];
            if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;
        }
    }
    function Rd(t) {
        var e = t.axis.model,
            n = {},
            i = (n.axisDim = t.axis.dim);
        return (n.axisIndex = n[i + "AxisIndex"] = e.componentIndex), (n.axisName = n[i + "AxisName"] = e.name), (n.axisId = n[i + "AxisId"] = e.id), n;
    }
    function Nd(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
    }
    function Fd(t, e, n) {
        if (!Sf.node) {
            var i = e.getZr();
            sS(i).records || (sS(i).records = {}), Vd(i, e);
            var r = sS(i).records[t] || (sS(i).records[t] = {});
            r.handler = n;
        }
    }
    function Vd(t, e) {
        function n(n, i) {
            t.on(n, function (n) {
                var r = Xd(e);
                lS(sS(t).records, function (t) {
                    t && i(t, n, r.dispatchAction);
                }),
                    Gd(r.pendings, e);
            });
        }
        sS(t).initialized || ((sS(t).initialized = !0), n("click", _(Wd, "click")), n("mousemove", _(Wd, "mousemove")), n("globalout", Hd));
    }
    function Gd(t, e) {
        var n,
            i = t.showTip.length,
            r = t.hideTip.length;
        i ? (n = t.showTip[i - 1]) : r && (n = t.hideTip[r - 1]), n && ((n.dispatchAction = null), e.dispatchAction(n));
    }
    function Hd(t, e, n) {
        t.handler("leave", null, n);
    }
    function Wd(t, e, n, i) {
        e.handler(t, n, i);
    }
    function Xd(t) {
        var e = { showTip: [], hideTip: [] },
            n = function (i) {
                var r = e[i.type];
                r ? r.push(i) : ((i.dispatchAction = n), t.dispatchAction(i));
            };
        return { dispatchAction: n, pendings: e };
    }
    function Ud(t, e) {
        if (!Sf.node) {
            var n = e.getZr(),
                i = (sS(n).records || {})[t];
            i && (sS(n).records[t] = null);
        }
    }
    function Yd() {}
    function qd(t, e, n, i) {
        jd(uS(n).lastProp, i) || ((uS(n).lastProp = i), e ? Fa(n, i, t) : (n.stopAnimation(), n.attr(i)));
    }
    function jd(t, e) {
        if (S(t) && S(e)) {
            var n = !0;
            return (
                f(e, function (e, i) {
                    n = n && jd(t[i], e);
                }),
                !!n
            );
        }
        return t === e;
    }
    function Zd(t, e) {
        t[e.get("label.show") ? "show" : "hide"]();
    }
    function Kd(t) {
        return { position: t.position.slice(), rotation: t.rotation || 0 };
    }
    function $d(t, e, n) {
        var i = e.get("z"),
            r = e.get("zlevel");
        t &&
            t.traverse(function (t) {
                "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), (t.silent = n));
            });
    }
    function Qd(t) {
        var e,
            n = t.get("type"),
            i = t.getModel(n + "Style");
        return "line" === n ? ((e = i.getLineStyle()), (e.fill = null)) : "shadow" === n && ((e = i.getAreaStyle()), (e.stroke = null)), e;
    }
    function Jd(t, e, n, i, r) {
        var a = n.get("value"),
            o = ef(a, e.axis, e.ecModel, n.get("seriesDataIndices"), { precision: n.get("label.precision"), formatter: n.get("label.formatter") }),
            s = n.getModel("label"),
            l = Um(s.get("padding") || 0),
            h = s.getFont(),
            u = Vn(o, h),
            c = r.position,
            d = u.width + l[1] + l[3],
            f = u.height + l[0] + l[2],
            p = r.align;
        "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
        var g = r.verticalAlign;
        "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), tf(c, d, f, i);
        var v = s.get("backgroundColor");
        (v && "auto" !== v) || (v = e.get("axisLine.lineStyle.color")),
            (t.label = {
                shape: { x: 0, y: 0, width: d, height: f, r: s.get("borderRadius") },
                position: c.slice(),
                style: {
                    text: o,
                    textFont: h,
                    textFill: s.getTextColor(),
                    textPosition: "inside",
                    textPadding: l,
                    fill: v,
                    stroke: s.get("borderColor") || "transparent",
                    lineWidth: s.get("borderWidth") || 0,
                    shadowBlur: s.get("shadowBlur"),
                    shadowColor: s.get("shadowColor"),
                    shadowOffsetX: s.get("shadowOffsetX"),
                    shadowOffsetY: s.get("shadowOffsetY"),
                },
                z2: 10,
            });
    }
    function tf(t, e, n, i) {
        var r = i.getWidth(),
            a = i.getHeight();
        (t[0] = Math.min(t[0] + e, r) - e), (t[1] = Math.min(t[1] + n, a) - n), (t[0] = Math.max(t[0], 0)), (t[1] = Math.max(t[1], 0));
    }
    function ef(t, e, n, i, r) {
        t = e.scale.parse(t);
        var a = e.scale.getLabel(t, { precision: r.precision }),
            o = r.formatter;
        if (o) {
            var s = { value: Su(e, t), axisDimension: e.dim, axisIndex: e.index, seriesData: [] };
            f(i, function (t) {
                var e = n.getSeriesByIndex(t.seriesIndex),
                    i = t.dataIndexInside,
                    r = e && e.getDataParams(i);
                r && s.seriesData.push(r);
            }),
                b(o) ? (a = o.replace("{value}", a)) : w(o) && (a = o(s));
        }
        return a;
    }
    function nf(t, e, n) {
        var i = Te();
        return Le(i, i, n.rotation), Pe(i, i, n.position), Ha([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i);
    }
    function rf(t, e, n, i, r, a) {
        var o = $w.innerTextLayout(n.rotation, 0, n.labelDirection);
        (n.labelMargin = r.get("label.margin")), Jd(e, i, r, a, { position: nf(i.axis, t, n), align: o.textAlign, verticalAlign: o.textVerticalAlign });
    }
    function af(t, e, n) {
        return (n = n || 0), { x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n] };
    }
    function of(t, e, n) {
        return (n = n || 0), { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
    }
    function sf(t, e) {
        var n = {};
        return (n[e.dim + "AxisIndex"] = e.index), t.getCartesian(n);
    }
    function lf(t) {
        return "x" === t.dim ? 0 : 1;
    }
    function hf(t) {
        var e = "cubic-bezier(0.23, 1, 0.32, 1)",
            n = "left " + t + "s " + e + ",top " + t + "s " + e;
        return p(mS, function (t) {
            return t + "transition:" + n;
        }).join(";");
    }
    function uf(t) {
        var e = [],
            n = t.get("fontSize"),
            i = t.getTextColor();
        return (
            i && e.push("color:" + i),
            e.push("font:" + t.getFont()),
            n && e.push("line-height:" + Math.round((3 * n) / 2) + "px"),
            gS(["decoration", "align"], function (n) {
                var i = t.get(n);
                i && e.push("text-" + n + ":" + i);
            }),
            e.join(";")
        );
    }
    function cf(t) {
        var e = [],
            n = t.get("transitionDuration"),
            i = t.get("backgroundColor"),
            r = t.getModel("textStyle"),
            a = t.get("padding");
        return (
            n && e.push(hf(n)),
            i && (Sf.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Qe(i)), e.push("filter:alpha(opacity=70)"))),
            gS(["width", "color", "radius"], function (n) {
                var i = "border-" + n,
                    r = vS(i),
                    a = t.get(r);
                null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"));
            }),
            e.push(uf(r)),
            null != a && e.push("padding:" + Um(a).join("px ") + "px"),
            e.join(";") + ";"
        );
    }
    function df(t, e) {
        if (Sf.wxa) return null;
        var n = document.createElement("div"),
            i = (this._zr = e.getZr());
        (this.el = n), (this._x = e.getWidth() / 2), (this._y = e.getHeight() / 2), t.appendChild(n), (this._container = t), (this._show = !1), this._hideTimeout;
        var r = this;
        (n.onmouseenter = function () {
            r._enterable && (clearTimeout(r._hideTimeout), (r._show = !0)), (r._inContent = !0);
        }),
            (n.onmousemove = function (e) {
                if (((e = e || window.event), !r._enterable)) {
                    var n = i.handler;
                    ye(t, e, !0), n.dispatch("mousemove", e);
                }
            }),
            (n.onmouseleave = function () {
                r._enterable && r._show && r.hideLater(r._hideDelay), (r._inContent = !1);
            });
    }
    function ff(t) {
        (this._zr = t.getZr()), (this._show = !1), this._hideTimeout;
    }
    function pf(t) {
        for (var e = t.pop(); t.length; ) {
            var n = t.pop();
            n && (Qa.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = { formatter: n }), (e = new Qa(n, e, e.ecModel)));
        }
        return e;
    }
    function gf(t, e) {
        return t.dispatchAction || y(e.dispatchAction, e);
    }
    function vf(t, e, n, i, r, a, o) {
        var s = n.getOuterSize(),
            l = s.width,
            h = s.height;
        return null != a && (t + l + a > i ? (t -= l + a) : (t += a)), null != o && (e + h + o > r ? (e -= h + o) : (e += o)), [t, e];
    }
    function mf(t, e, n, i, r) {
        var a = n.getOuterSize(),
            o = a.width,
            s = a.height;
        return (t = Math.min(t + o, i) - o), (e = Math.min(e + s, r) - s), (t = Math.max(t, 0)), (e = Math.max(e, 0)), [t, e];
    }
    function yf(t, e, n) {
        var i = n[0],
            r = n[1],
            a = 5,
            o = 0,
            s = 0,
            l = e.width,
            h = e.height;
        switch (t) {
            case "inside":
                (o = e.x + l / 2 - i / 2), (s = e.y + h / 2 - r / 2);
                break;
            case "top":
                (o = e.x + l / 2 - i / 2), (s = e.y - r - a);
                break;
            case "bottom":
                (o = e.x + l / 2 - i / 2), (s = e.y + h + a);
                break;
            case "left":
                (o = e.x - i - a), (s = e.y + h / 2 - r / 2);
                break;
            case "right":
                (o = e.x + l + a), (s = e.y + h / 2 - r / 2);
        }
        return [o, s];
    }
    function _f(t) {
        return "center" === t || "middle" === t;
    }
    var xf = 2311,
        wf = function () {
            return xf++;
        },
        bf = {};
    bf =
        "object" == typeof wx && "function" == typeof wx.getSystemInfoSync
            ? { browser: {}, os: {}, node: !1, wxa: !0, canvasSupported: !0, svgSupported: !1, touchEventsSupported: !0, domSupported: !1 }
            : "undefined" == typeof document && "undefined" != typeof self
            ? { browser: {}, os: {}, node: !1, worker: !0, canvasSupported: !0, domSupported: !1 }
            : "undefined" == typeof navigator
            ? { browser: {}, os: {}, node: !0, worker: !1, canvasSupported: !0, svgSupported: !0, domSupported: !1 }
            : e(navigator.userAgent);
    var Sf = bf,
        Mf = { "[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1, "[object CanvasPattern]": 1, "[object Image]": 1, "[object Canvas]": 1 },
        If = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1,
        },
        Cf = Object.prototype.toString,
        Tf = Array.prototype,
        Df = Tf.forEach,
        Af = Tf.filter,
        kf = Tf.slice,
        Pf = Tf.map,
        Lf = Tf.reduce,
        Of = {},
        Bf = function () {
            return Of.createCanvas();
        };
    Of.createCanvas = function () {
        return document.createElement("canvas");
    };
    var Ef,
        zf = "__ec_primitive__";
    R.prototype = {
        constructor: R,
        get: function (t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null;
        },
        set: function (t, e) {
            return (this.data[t] = e);
        },
        each: function (t, e) {
            void 0 !== e && (t = y(t, e));
            for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n);
        },
        removeKey: function (t) {
            delete this.data[t];
        },
    };
    var Rf = (Object.freeze || Object)({
            $override: n,
            clone: i,
            merge: r,
            mergeAll: a,
            extend: o,
            defaults: s,
            createCanvas: Bf,
            getContext: l,
            indexOf: h,
            inherits: u,
            mixin: c,
            isArrayLike: d,
            each: f,
            map: p,
            reduce: g,
            filter: v,
            find: m,
            bind: y,
            curry: _,
            isArray: x,
            isFunction: w,
            isString: b,
            isObject: S,
            isBuiltInObject: M,
            isTypedArray: I,
            isDom: C,
            eqNaN: T,
            retrieve: D,
            retrieve2: A,
            retrieve3: k,
            slice: P,
            normalizeCssArray: L,
            assert: O,
            trim: B,
            setAsPrimitive: E,
            isPrimitive: z,
            createHashMap: N,
            concatArray: F,
            noop: V,
        }),
        Nf = "undefined" == typeof Float32Array ? Array : Float32Array,
        Ff = j,
        Vf = Z,
        Gf = ee,
        Hf = ne,
        Wf = (Object.freeze || Object)({
            create: G,
            copy: H,
            clone: W,
            set: X,
            add: U,
            scaleAndAdd: Y,
            sub: q,
            len: j,
            length: Ff,
            lenSquare: Z,
            lengthSquare: Vf,
            mul: K,
            div: $,
            dot: Q,
            scale: J,
            normalize: te,
            distance: ee,
            dist: Gf,
            distanceSquare: ne,
            distSquare: Hf,
            negate: ie,
            lerp: re,
            applyTransform: ae,
            min: oe,
            max: se,
        });
    le.prototype = {
        constructor: le,
        _dragStart: function (t) {
            var e = t.target;
            e && e.draggable && ((this._draggingTarget = e), (e.dragging = !0), (this._x = t.offsetX), (this._y = t.offsetY), this.dispatchToElement(he(e, t), "dragstart", t.event));
        },
        _drag: function (t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX,
                    i = t.offsetY,
                    r = n - this._x,
                    a = i - this._y;
                (this._x = n), (this._y = i), e.drift(r, a, t), this.dispatchToElement(he(e, t), "drag", t.event);
                var o = this.findHover(n, i, e).target,
                    s = this._dropTarget;
                (this._dropTarget = o), e !== o && (s && o !== s && this.dispatchToElement(he(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(he(o, t), "dragenter", t.event));
            }
        },
        _dragEnd: function (t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(he(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(he(this._dropTarget, t), "drop", t.event), (this._draggingTarget = null), (this._dropTarget = null);
        },
    };
    var Xf = Array.prototype.slice,
        Uf = function (t) {
            (this._$handlers = {}), (this._$eventProcessor = t);
        };
    Uf.prototype = {
        constructor: Uf,
        one: function (t, e, n, i) {
            return ce(this, t, e, n, i, !0);
        },
        on: function (t, e, n, i) {
            return ce(this, t, e, n, i, !1);
        },
        isSilent: function (t) {
            var e = this._$handlers;
            return !e[t] || !e[t].length;
        },
        off: function (t, e) {
            var n = this._$handlers;
            if (!t) return (this._$handlers = {}), this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h !== e && i.push(n[t][r]);
                    n[t] = i;
                }
                n[t] && 0 === n[t].length && delete n[t];
            } else delete n[t];
            return this;
        },
        trigger: function (t) {
            var e = this._$handlers[t],
                n = this._$eventProcessor;
            if (e) {
                var i = arguments,
                    r = i.length;
                r > 3 && (i = Xf.call(i, 1));
                for (var a = e.length, o = 0; a > o; ) {
                    var s = e[o];
                    if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;
                    else {
                        switch (r) {
                            case 1:
                                s.h.call(s.ctx);
                                break;
                            case 2:
                                s.h.call(s.ctx, i[1]);
                                break;
                            case 3:
                                s.h.call(s.ctx, i[1], i[2]);
                                break;
                            default:
                                s.h.apply(s.ctx, i);
                        }
                        s.one ? (e.splice(o, 1), a--) : o++;
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this;
        },
        triggerWithContext: function (t) {
            var e = this._$handlers[t],
                n = this._$eventProcessor;
            if (e) {
                var i = arguments,
                    r = i.length;
                r > 4 && (i = Xf.call(i, 1, i.length - 1));
                for (var a = i[i.length - 1], o = e.length, s = 0; o > s; ) {
                    var l = e[s];
                    if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;
                    else {
                        switch (r) {
                            case 1:
                                l.h.call(a);
                                break;
                            case 2:
                                l.h.call(a, i[1]);
                                break;
                            case 3:
                                l.h.call(a, i[1], i[2]);
                                break;
                            default:
                                l.h.apply(a, i);
                        }
                        l.one ? (e.splice(s, 1), o--) : s++;
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this;
        },
    };
    var Yf = Math.log(2),
        qf = "undefined" != typeof window && !!window.addEventListener,
        jf = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Zf = "___zrEVENTSAVED",
        Kf = [],
        $f = qf
            ? function (t) {
                  t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0);
              }
            : function (t) {
                  (t.returnValue = !1), (t.cancelBubble = !0);
              },
        Qf = function () {
            this._track = [];
        };
    Qf.prototype = {
        constructor: Qf,
        recognize: function (t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t);
        },
        clear: function () {
            return (this._track.length = 0), this;
        },
        _doTrack: function (t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = { points: [], touches: [], target: e, event: t }, a = 0, o = i.length; o > a; a++) {
                    var s = i[a],
                        l = pe(n, s, {});
                    r.points.push([l.zrX, l.zrY]), r.touches.push(s);
                }
                this._track.push(r);
            }
        },
        _recognize: function (t) {
            for (var e in Jf)
                if (Jf.hasOwnProperty(e)) {
                    var n = Jf[e](this._track, t);
                    if (n) return n;
                }
        },
    };
    var Jf = {
            pinch: function (t, e) {
                var n = t.length;
                if (n) {
                    var i = (t[n - 1] || {}).points,
                        r = (t[n - 2] || {}).points || i;
                    if (r && r.length > 1 && i && i.length > 1) {
                        var a = we(i) / we(r);
                        !isFinite(a) && (a = 1), (e.pinchScale = a);
                        var o = be(i);
                        return (e.pinchX = o[0]), (e.pinchY = o[1]), { type: "pinch", target: t[0].target, event: e };
                    }
                }
            },
        },
        tp = "silent";
    Ie.prototype.dispose = function () {};
    var ep = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        np = function (t, e, n, i) {
            Uf.call(this),
                (this.storage = t),
                (this.painter = e),
                (this.painterRoot = i),
                (n = n || new Ie()),
                (this.proxy = null),
                (this._hovered = {}),
                this._lastTouchMoment,
                this._lastX,
                this._lastY,
                this._gestureMgr,
                le.call(this),
                this.setHandlerProxy(n);
        };
    (np.prototype = {
        constructor: np,
        setHandlerProxy: function (t) {
            this.proxy && this.proxy.dispose(),
                t &&
                    (f(
                        ep,
                        function (e) {
                            t.on && t.on(e, this[e], this);
                        },
                        this
                    ),
                    (t.handler = this)),
                (this.proxy = t);
        },
        mousemove: function (t) {
            var e = t.zrX,
                n = t.zrY,
                i = this._hovered,
                r = i.target;
            r && !r.__zr && ((i = this.findHover(i.x, i.y)), (r = i.target));
            var a = (this._hovered = this.findHover(e, n)),
                o = a.target,
                s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t);
        },
        mouseout: function (t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e,
                n = t.toElement || t.relatedTarget;
            do n = n && n.parentNode;
            while (n && 9 !== n.nodeType && !(e = n === this.painterRoot));
            !e && this.trigger("globalout", { event: t });
        },
        resize: function () {
            this._hovered = {};
        },
        dispatch: function (t, e) {
            var n = this[t];
            n && n.call(this, e);
        },
        dispose: function () {
            this.proxy.dispose(), (this.storage = this.proxy = this.painter = null);
        },
        setCursorStyle: function (t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t);
        },
        dispatchToElement: function (t, e, n) {
            t = t || {};
            var i = t.target;
            if (!i || !i.silent) {
                for (var r = "on" + e, a = Se(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), (i = i.parent), !a.cancelBubble); );
                a.cancelBubble ||
                    (this.trigger(e, a),
                    this.painter &&
                        this.painter.eachOtherLayer(function (t) {
                            "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
                        }));
            }
        },
        findHover: function (t, e, n) {
            for (var i = this.storage.getDisplayList(), r = { x: t, y: e }, a = i.length - 1; a >= 0; a--) {
                var o;
                if (i[a] !== n && !i[a].ignore && (o = Ce(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== tp)) {
                    r.target = i[a];
                    break;
                }
            }
            return r;
        },
        processGesture: function (t, e) {
            this._gestureMgr || (this._gestureMgr = new Qf());
            var n = this._gestureMgr;
            "start" === e && n.clear();
            var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
            if (("end" === e && n.clear(), i)) {
                var r = i.type;
                (t.gestureEvent = r), this.dispatchToElement({ target: i.target }, r, i.event);
            }
        },
    }),
        f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
            np.prototype[t] = function (e) {
                var n = this.findHover(e.zrX, e.zrY),
                    i = n.target;
                if ("mousedown" === t) (this._downEl = i), (this._downPoint = [e.zrX, e.zrY]), (this._upEl = i);
                else if ("mouseup" === t) this._upEl = i;
                else if ("click" === t) {
                    if (this._downEl !== this._upEl || !this._downPoint || Gf(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                    this._downPoint = null;
                }
                this.dispatchToElement(n, t, e);
            };
        }),
        c(np, Uf),
        c(np, le);
    var ip = "undefined" == typeof Float32Array ? Array : Float32Array,
        rp = (Object.freeze || Object)({ create: Te, identity: De, copy: Ae, mul: ke, translate: Pe, rotate: Le, scale: Oe, invert: Be, clone: Ee }),
        ap = De,
        op = 5e-5,
        sp = function (t) {
            (t = t || {}), t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), (this.origin = this.origin || null);
        },
        lp = sp.prototype;
    (lp.transform = null),
        (lp.needLocalTransform = function () {
            return ze(this.rotation) || ze(this.position[0]) || ze(this.position[1]) || ze(this.scale[0] - 1) || ze(this.scale[1] - 1);
        });
    var hp = [];
    (lp.updateTransform = function () {
        var t = this.parent,
            e = t && t.transform,
            n = this.needLocalTransform(),
            i = this.transform;
        if (!n && !e) return void (i && ap(i));
        (i = i || Te()), n ? this.getLocalTransform(i) : ap(i), e && (n ? ke(i, t.transform, i) : Ae(i, t.transform)), (this.transform = i);
        var r = this.globalScaleRatio;
        if (null != r && 1 !== r) {
            this.getGlobalScale(hp);
            var a = hp[0] < 0 ? -1 : 1,
                o = hp[1] < 0 ? -1 : 1,
                s = ((hp[0] - a) * r + a) / hp[0] || 0,
                l = ((hp[1] - o) * r + o) / hp[1] || 0;
            (i[0] *= s), (i[1] *= s), (i[2] *= l), (i[3] *= l);
        }
        (this.invTransform = this.invTransform || Te()), Be(this.invTransform, i);
    }),
        (lp.getLocalTransform = function (t) {
            return sp.getLocalTransform(this, t);
        }),
        (lp.setTransform = function (t) {
            var e = this.transform,
                n = t.dpr || 1;
            e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
        }),
        (lp.restoreTransform = function (t) {
            var e = t.dpr || 1;
            t.setTransform(e, 0, 0, e, 0, 0);
        });
    var up = [],
        cp = Te();
    (lp.setLocalTransform = function (t) {
        if (t) {
            var e = t[0] * t[0] + t[1] * t[1],
                n = t[2] * t[2] + t[3] * t[3],
                i = this.position,
                r = this.scale;
            ze(e - 1) && (e = Math.sqrt(e)), ze(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), (i[0] = t[4]), (i[1] = t[5]), (r[0] = e), (r[1] = n), (this.rotation = Math.atan2(-t[1] / n, t[0] / e));
        }
    }),
        (lp.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent,
                    e = this.transform;
                t && t.transform && (ke(up, t.invTransform, e), (e = up));
                var n = this.origin;
                n && (n[0] || n[1]) && ((cp[4] = n[0]), (cp[5] = n[1]), ke(up, e, cp), (up[4] -= n[0]), (up[5] -= n[1]), (e = up)), this.setLocalTransform(e);
            }
        }),
        (lp.getGlobalScale = function (t) {
            var e = this.transform;
            return (t = t || []), e ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])), (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : ((t[0] = 1), (t[1] = 1), t);
        }),
        (lp.transformCoordToLocal = function (t, e) {
            var n = [t, e],
                i = this.invTransform;
            return i && ae(n, n, i), n;
        }),
        (lp.transformCoordToGlobal = function (t, e) {
            var n = [t, e],
                i = this.transform;
            return i && ae(n, n, i), n;
        }),
        (sp.getLocalTransform = function (t, e) {
            (e = e || []), ap(e);
            var n = t.origin,
                i = t.scale || [1, 1],
                r = t.rotation || 0,
                a = t.position || [0, 0];
            return n && ((e[4] -= n[0]), (e[5] -= n[1])), Oe(e, e, i), r && Le(e, e, r), n && ((e[4] += n[0]), (e[5] += n[1])), (e[4] += a[0]), (e[5] += a[1]), e;
        });
    var dp = {
        linear: function (t) {
            return t;
        },
        quadraticIn: function (t) {
            return t * t;
        },
        quadraticOut: function (t) {
            return t * (2 - t);
        },
        quadraticInOut: function (t) {
            return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
        },
        cubicIn: function (t) {
            return t * t * t;
        },
        cubicOut: function (t) {
            return --t * t * t + 1;
        },
        cubicInOut: function (t) {
            return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
        },
        quarticIn: function (t) {
            return t * t * t * t;
        },
        quarticOut: function (t) {
            return 1 - --t * t * t * t;
        },
        quarticInOut: function (t) {
            return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
        },
        quinticIn: function (t) {
            return t * t * t * t * t;
        },
        quinticOut: function (t) {
            return --t * t * t * t * t + 1;
        },
        quinticInOut: function (t) {
            return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
        },
        sinusoidalIn: function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
        },
        sinusoidalOut: function (t) {
            return Math.sin((t * Math.PI) / 2);
        },
        sinusoidalInOut: function (t) {
            return 0.5 * (1 - Math.cos(Math.PI * t));
        },
        exponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
        },
        exponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        exponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? 0.5 * Math.pow(1024, t - 1) : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
        },
        circularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t);
        },
        circularOut: function (t) {
            return Math.sqrt(1 - --t * t);
        },
        circularInOut: function (t) {
            return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        elasticIn: function (t) {
            var e,
                n = 0.1,
                i = 0.4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? ((n = 1), (e = i / 4)) : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((2 * (t - e) * Math.PI) / i)));
        },
        elasticOut: function (t) {
            var e,
                n = 0.1,
                i = 0.4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? ((n = 1), (e = i / 4)) : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)), n * Math.pow(2, -10 * t) * Math.sin((2 * (t - e) * Math.PI) / i) + 1);
        },
        elasticInOut: function (t) {
            var e,
                n = 0.1,
                i = 0.4;
            return 0 === t
                ? 0
                : 1 === t
                ? 1
                : (!n || 1 > n ? ((n = 1), (e = i / 4)) : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)),
                  (t *= 2) < 1 ? -0.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin((2 * (t - e) * Math.PI) / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((2 * (t - e) * Math.PI) / i) * 0.5 + 1);
        },
        backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
        },
        backOut: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1;
        },
        backInOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? 0.5 * t * t * ((e + 1) * t - e) : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
        },
        bounceIn: function (t) {
            return 1 - dp.bounceOut(1 - t);
        },
        bounceOut: function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        bounceInOut: function (t) {
            return 0.5 > t ? 0.5 * dp.bounceIn(2 * t) : 0.5 * dp.bounceOut(2 * t - 1) + 0.5;
        },
    };
    Re.prototype = {
        constructor: Re,
        step: function (t, e) {
            if ((this._initialized || ((this._startTime = t + this._delay), (this._initialized = !0)), this._paused)) return void (this._pausedTime += e);
            var n = (t - this._startTime - this._pausedTime) / this._life;
            if (!(0 > n)) {
                n = Math.min(n, 1);
                var i = this.easing,
                    r = "string" == typeof i ? dp[i] : i,
                    a = "function" == typeof r ? r(n) : n;
                return this.fire("frame", a), 1 === n ? (this.loop ? (this.restart(t), "restart") : ((this._needsRemove = !0), "destroy")) : null;
            }
        },
        restart: function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            (this._startTime = t - e + this.gap), (this._pausedTime = 0), (this._needsRemove = !1);
        },
        fire: function (t, e) {
            (t = "on" + t), this[t] && this[t](this._target, e);
        },
        pause: function () {
            this._paused = !0;
        },
        resume: function () {
            this._paused = !1;
        },
    };
    var fp = function () {
            (this.head = null), (this.tail = null), (this._len = 0);
        },
        pp = fp.prototype;
    (pp.insert = function (t) {
        var e = new gp(t);
        return this.insertEntry(e), e;
    }),
        (pp.insertEntry = function (t) {
            this.head ? ((this.tail.next = t), (t.prev = this.tail), (t.next = null), (this.tail = t)) : (this.head = this.tail = t), this._len++;
        }),
        (pp.remove = function (t) {
            var e = t.prev,
                n = t.next;
            e ? (e.next = n) : (this.head = n), n ? (n.prev = e) : (this.tail = e), (t.next = t.prev = null), this._len--;
        }),
        (pp.len = function () {
            return this._len;
        }),
        (pp.clear = function () {
            (this.head = this.tail = null), (this._len = 0);
        });
    var gp = function (t) {
            (this.value = t), this.next, this.prev;
        },
        vp = function (t) {
            (this._list = new fp()), (this._map = {}), (this._maxSize = t || 10), (this._lastRemovedEntry = null);
        },
        mp = vp.prototype;
    (mp.put = function (t, e) {
        var n = this._list,
            i = this._map,
            r = null;
        if (null == i[t]) {
            var a = n.len(),
                o = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var s = n.head;
                n.remove(s), delete i[s.key], (r = s.value), (this._lastRemovedEntry = s);
            }
            o ? (o.value = e) : (o = new gp(e)), (o.key = t), n.insertEntry(o), (i[t] = o);
        }
        return r;
    }),
        (mp.get = function (t) {
            var e = this._map[t],
                n = this._list;
            return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0;
        }),
        (mp.clear = function () {
            this._list.clear(), (this._map = {});
        });
    var yp = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1],
        },
        _p = new vp(20),
        xp = null,
        wp = Je,
        bp = tn,
        Sp = (Object.freeze || Object)({ parse: je, lift: $e, toHex: Qe, fastLerp: Je, fastMapToColor: wp, lerp: tn, mapToColor: bp, modifyHSL: en, modifyAlpha: nn, stringify: rn }),
        Mp = Array.prototype.slice,
        Ip = function (t, e, n, i) {
            (this._tracks = {}),
                (this._target = t),
                (this._loop = e || !1),
                (this._getter = n || an),
                (this._setter = i || on),
                (this._clipCount = 0),
                (this._delay = 0),
                (this._doneList = []),
                (this._onframeList = []),
                (this._clipList = []);
        };
    Ip.prototype = {
        when: function (t, e) {
            var n = this._tracks;
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    if (!n[i]) {
                        n[i] = [];
                        var r = this._getter(this._target, i);
                        if (null == r) continue;
                        0 !== t && n[i].push({ time: 0, value: pn(r) });
                    }
                    n[i].push({ time: t, value: e[i] });
                }
            return this;
        },
        during: function (t) {
            return this._onframeList.push(t), this;
        },
        pause: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0;
        },
        resume: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1;
        },
        isPaused: function () {
            return !!this._paused;
        },
        _doneCallback: function () {
            (this._tracks = {}), (this._clipList.length = 0);
            for (var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this);
        },
        start: function (t, e) {
            var n,
                i = this,
                r = 0,
                a = function () {
                    r--, r || i._doneCallback();
                };
            for (var o in this._tracks)
                if (this._tracks.hasOwnProperty(o)) {
                    var s = mn(this, t, a, this._tracks[o], o, e);
                    s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), (n = s));
                }
            if (n) {
                var l = n.onframe;
                n.onframe = function (t, e) {
                    l(t, e);
                    for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e);
                };
            }
            return r || this._doneCallback(), this;
        },
        stop: function (t) {
            for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
                var r = e[i];
                t && r.onframe(this._target, 1), n && n.removeClip(r);
            }
            e.length = 0;
        },
        delay: function (t) {
            return (this._delay = t), this;
        },
        done: function (t) {
            return t && this._doneList.push(t), this;
        },
        getClips: function () {
            return this._clipList;
        },
    };
    var Cp = 1;
    "undefined" != typeof window && (Cp = Math.max(window.devicePixelRatio || 1, 1));
    var Tp = 0,
        Dp = Cp,
        Ap = function () {};
    1 === Tp && (Ap = console.error);
    var kp = Ap,
        Pp = function () {
            this.animators = [];
        };
    Pp.prototype = {
        constructor: Pp,
        animate: function (t, e) {
            var n,
                i = !1,
                r = this,
                a = this.__zr;
            if (t) {
                var o = t.split("."),
                    s = r;
                i = "shape" === o[0];
                for (var l = 0, u = o.length; u > l; l++) s && (s = s[o[l]]);
                s && (n = s);
            } else n = r;
            if (!n) return void kp('Property "' + t + '" is not existed in element ' + r.id);
            var c = r.animators,
                d = new Ip(n, e);
            return (
                d
                    .during(function () {
                        r.dirty(i);
                    })
                    .done(function () {
                        c.splice(h(c, d), 1);
                    }),
                c.push(d),
                a && a.animation.addAnimator(d),
                d
            );
        },
        stopAnimation: function (t) {
            for (var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);
            return (e.length = 0), this;
        },
        animateTo: function (t, e, n, i, r, a) {
            yn(this, t, e, n, i, r, a);
        },
        animateFrom: function (t, e, n, i, r, a) {
            yn(this, t, e, n, i, r, a, !0);
        },
    };
    var Lp = function (t) {
        sp.call(this, t), Uf.call(this, t), Pp.call(this, t), (this.id = t.id || wf());
    };
    (Lp.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function (t, e) {
            switch (this.draggable) {
                case "horizontal":
                    e = 0;
                    break;
                case "vertical":
                    t = 0;
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]), (n[4] += t), (n[5] += e), this.decomposeTransform(), this.dirty(!1);
        },
        beforeUpdate: function () {},
        afterUpdate: function () {},
        update: function () {
            this.updateTransform();
        },
        traverse: function () {},
        attrKV: function (t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var n = this[t];
                    n || (n = this[t] = []), (n[0] = e[0]), (n[1] = e[1]);
                }
            } else this[t] = e;
        },
        hide: function () {
            (this.ignore = !0), this.__zr && this.__zr.refresh();
        },
        show: function () {
            (this.ignore = !1), this.__zr && this.__zr.refresh();
        },
        attr: function (t, e) {
            if ("string" == typeof t) this.attrKV(t, e);
            else if (S(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1), this;
        },
        setClipPath: function (t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), (this.clipPath = t), (t.__zr = e), (t.__clipTarget = this), this.dirty(!1);
        },
        removeClipPath: function () {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), (t.__zr = null), (t.__clipTarget = null), (this.clipPath = null), this.dirty(!1));
        },
        addSelfToZr: function (t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t);
        },
        removeSelfFromZr: function (t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t);
        },
    }),
        c(Lp, Pp),
        c(Lp, sp),
        c(Lp, Uf);
    var Op = ae,
        Bp = Math.min,
        Ep = Math.max;
    (wn.prototype = {
        constructor: wn,
        union: function (t) {
            var e = Bp(t.x, this.x),
                n = Bp(t.y, this.y);
            (this.width = Ep(t.x + t.width, this.x + this.width) - e), (this.height = Ep(t.y + t.height, this.y + this.height) - n), (this.x = e), (this.y = n);
        },
        applyTransform: (function () {
            var t = [],
                e = [],
                n = [],
                i = [];
            return function (r) {
                if (r) {
                    (t[0] = n[0] = this.x),
                        (t[1] = i[1] = this.y),
                        (e[0] = i[0] = this.x + this.width),
                        (e[1] = n[1] = this.y + this.height),
                        Op(t, t, r),
                        Op(e, e, r),
                        Op(n, n, r),
                        Op(i, i, r),
                        (this.x = Bp(t[0], e[0], n[0], i[0])),
                        (this.y = Bp(t[1], e[1], n[1], i[1]));
                    var a = Ep(t[0], e[0], n[0], i[0]),
                        o = Ep(t[1], e[1], n[1], i[1]);
                    (this.width = a - this.x), (this.height = o - this.y);
                }
            };
        })(),
        calculateTransform: function (t) {
            var e = this,
                n = t.width / e.width,
                i = t.height / e.height,
                r = Te();
            return Pe(r, r, [-e.x, -e.y]), Oe(r, r, [n, i]), Pe(r, r, [t.x, t.y]), r;
        },
        intersect: function (t) {
            if (!t) return !1;
            t instanceof wn || (t = wn.create(t));
            var e = this,
                n = e.x,
                i = e.x + e.width,
                r = e.y,
                a = e.y + e.height,
                o = t.x,
                s = t.x + t.width,
                l = t.y,
                h = t.y + t.height;
            return !(o > i || n > s || l > a || r > h);
        },
        contain: function (t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
        },
        clone: function () {
            return new wn(this.x, this.y, this.width, this.height);
        },
        copy: function (t) {
            (this.x = t.x), (this.y = t.y), (this.width = t.width), (this.height = t.height);
        },
        plain: function () {
            return { x: this.x, y: this.y, width: this.width, height: this.height };
        },
    }),
        (wn.create = function (t) {
            return new wn(t.x, t.y, t.width, t.height);
        });
    var zp = function (t) {
        (t = t || {}), Lp.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        (this._children = []), (this.__storage = null), (this.__dirty = !0);
    };
    (zp.prototype = {
        constructor: zp,
        isGroup: !0,
        type: "group",
        silent: !1,
        children: function () {
            return this._children.slice();
        },
        childAt: function (t) {
            return this._children[t];
        },
        childOfName: function (t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n];
        },
        childCount: function () {
            return this._children.length;
        },
        add: function (t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
        },
        addBefore: function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children,
                    i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
            }
            return this;
        },
        _doAdd: function (t) {
            t.parent && t.parent.remove(t), (t.parent = this);
            var e = this.__storage,
                n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof zp && t.addChildrenToStorage(e)), n && n.refresh();
        },
        remove: function (t) {
            var e = this.__zr,
                n = this.__storage,
                i = this._children,
                r = h(i, t);
            return 0 > r ? this : (i.splice(r, 1), (t.parent = null), n && (n.delFromStorage(t), t instanceof zp && t.delChildrenFromStorage(n)), e && e.refresh(), this);
        },
        removeAll: function () {
            var t,
                e,
                n = this._children,
                i = this.__storage;
            for (e = 0; e < n.length; e++) (t = n[e]), i && (i.delFromStorage(t), t instanceof zp && t.delChildrenFromStorage(i)), (t.parent = null);
            return (n.length = 0), this;
        },
        eachChild: function (t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i);
            }
            return this;
        },
        traverse: function (t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                t.call(e, i), "group" === i.type && i.traverse(t, e);
            }
            return this;
        },
        addChildrenToStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.addToStorage(n), n instanceof zp && n.addChildrenToStorage(t);
            }
        },
        delChildrenFromStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.delFromStorage(n), n instanceof zp && n.delChildrenFromStorage(t);
            }
        },
        dirty: function () {
            return (this.__dirty = !0), this.__zr && this.__zr.refresh(), this;
        },
        getBoundingRect: function (t) {
            for (var e = null, n = new wn(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
                var o = i[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect(),
                        l = o.getLocalTransform(r);
                    l ? (n.copy(s), n.applyTransform(l), (e = e || n.clone()), e.union(n)) : ((e = e || s.clone()), e.union(s));
                }
            }
            return e || n;
        },
    }),
        u(zp, Lp);
    var Rp = 32,
        Np = 7,
        Fp = function () {
            (this._roots = []), (this._displayList = []), (this._displayListLen = 0);
        };
    Fp.prototype = {
        constructor: Fp,
        traverse: function (t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
        },
        getDisplayList: function (t, e) {
            return (e = e || !1), t && this.updateDisplayList(e), this._displayList;
        },
        updateDisplayList: function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
            (n.length = this._displayListLen), Sf.canvasSupported && An(n, kn);
        },
        _updateAndAddDisplayable: function (t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var i = t.clipPath;
                if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, a = t; r; ) (r.parent = a), r.updateTransform(), e.push(r), (a = r), (r = r.clipPath);
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n);
                    }
                    t.__dirty = !1;
                } else (t.__clipPaths = e), (this._displayList[this._displayListLen++] = t);
            }
        },
        addRoot: function (t) {
            t.__storage !== this && (t instanceof zp && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
        },
        delRoot: function (t) {
            if (null == t) {
                for (var e = 0; e < this._roots.length; e++) {
                    var n = this._roots[e];
                    n instanceof zp && n.delChildrenFromStorage(this);
                }
                return (this._roots = []), (this._displayList = []), void (this._displayListLen = 0);
            }
            if (t instanceof Array) for (var e = 0, i = t.length; i > e; e++) this.delRoot(t[e]);
            else {
                var r = h(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof zp && t.delChildrenFromStorage(this));
            }
        },
        addToStorage: function (t) {
            return t && ((t.__storage = this), t.dirty(!1)), this;
        },
        delFromStorage: function (t) {
            return t && (t.__storage = null), this;
        },
        dispose: function () {
            this._renderList = this._roots = null;
        },
        displayableSortFunc: kn,
    };
    var Vp = { shadowBlur: 1, shadowOffsetX: 1, shadowOffsetY: 1, textShadowBlur: 1, textShadowOffsetX: 1, textShadowOffsetY: 1, textBoxShadowBlur: 1, textBoxShadowOffsetX: 1, textBoxShadowOffsetY: 1 },
        Gp = function (t, e, n) {
            return Vp.hasOwnProperty(e) ? (n *= t.dpr) : n;
        },
        Hp = { NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2 },
        Wp = 9,
        Xp = [
            ["shadowBlur", 0],
            ["shadowOffsetX", 0],
            ["shadowOffsetY", 0],
            ["shadowColor", "#000"],
            ["lineCap", "butt"],
            ["lineJoin", "miter"],
            ["miterLimit", 10],
        ],
        Up = function (t) {
            this.extendFrom(t, !1);
        };
    Up.prototype = {
        constructor: Up,
        fill: "#000",
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function (t, e, n) {
            var i = this,
                r = n && n.style,
                a = !r || t.__attrCachedBy !== Hp.STYLE_BIND;
            t.__attrCachedBy = Hp.STYLE_BIND;
            for (var o = 0; o < Xp.length; o++) {
                var s = Xp[o],
                    l = s[0];
                (a || i[l] !== r[l]) && (t[l] = Gp(t, l, i[l] || s[1]));
            }
            if (
                ((a || i.fill !== r.fill) && (t.fillStyle = i.fill),
                (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke),
                (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity),
                (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"),
                this.hasStroke())
            ) {
                var h = i.lineWidth;
                t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
            }
        },
        hasFill: function () {
            var t = this.fill;
            return null != t && "none" !== t;
        },
        hasStroke: function () {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0;
        },
        extendFrom: function (t, e) {
            if (t) for (var n in t) !t.hasOwnProperty(n) || (e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n])) || (this[n] = t[n]);
        },
        set: function (t, e) {
            "string" == typeof t ? (this[t] = e) : this.extendFrom(t, !0);
        },
        clone: function () {
            var t = new this.constructor();
            return t.extendFrom(this, !0), t;
        },
        getGradient: function (t, e, n) {
            for (var i = "radial" === e.type ? Ln : Pn, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);
            return r;
        },
    };
    for (var Yp = Up.prototype, qp = 0; qp < Xp.length; qp++) {
        var jp = Xp[qp];
        jp[0] in Yp || (Yp[jp[0]] = jp[1]);
    }
    Up.getGradient = Yp.getGradient;
    var Zp = function (t, e) {
        (this.image = t), (this.repeat = e), (this.type = "pattern");
    };
    Zp.prototype.getCanvasPattern = function (t) {
        return t.createPattern(this.image, this.repeat || "repeat");
    };
    var Kp = function (t, e, n) {
        var i;
        (n = n || Dp), "string" == typeof t ? (i = Bn(t, e, n)) : S(t) && ((i = t), (t = i.id)), (this.id = t), (this.dom = i);
        var r = i.style;
        r &&
            ((i.onselectstart = On),
            (r["-webkit-user-select"] = "none"),
            (r["user-select"] = "none"),
            (r["-webkit-touch-callout"] = "none"),
            (r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)"),
            (r.padding = 0),
            (r.margin = 0),
            (r["border-width"] = 0)),
            (this.domBack = null),
            (this.ctxBack = null),
            (this.painter = e),
            (this.config = null),
            (this.clearColor = 0),
            (this.motionBlur = !1),
            (this.lastFrameAlpha = 0.7),
            (this.dpr = n);
    };
    Kp.prototype = {
        constructor: Kp,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function () {
            return this.__endIndex - this.__startIndex;
        },
        initContext: function () {
            (this.ctx = this.dom.getContext("2d")), (this.ctx.dpr = this.dpr);
        },
        createBackBuffer: function () {
            var t = this.dpr;
            (this.domBack = Bn("back-" + this.id, this.painter, t)), (this.ctxBack = this.domBack.getContext("2d")), 1 !== t && this.ctxBack.scale(t, t);
        },
        resize: function (t, e) {
            var n = this.dpr,
                i = this.dom,
                r = i.style,
                a = this.domBack;
            r && ((r.width = t + "px"), (r.height = e + "px")), (i.width = t * n), (i.height = e * n), a && ((a.width = t * n), (a.height = e * n), 1 !== n && this.ctxBack.scale(n, n));
        },
        clear: function (t, e) {
            var n = this.dom,
                i = this.ctx,
                r = n.width,
                a = n.height,
                e = e || this.clearColor,
                o = this.motionBlur && !t,
                s = this.lastFrameAlpha,
                l = this.dpr;
            if ((o && (this.domBack || this.createBackBuffer(), (this.ctxBack.globalCompositeOperation = "copy"), this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e)) {
                var h;
                e.colorStops ? ((h = e.__canvasGradient || Up.getGradient(i, e, { x: 0, y: 0, width: r, height: a })), (e.__canvasGradient = h)) : e.image && (h = Zp.prototype.getCanvasPattern.call(e, i)),
                    i.save(),
                    (i.fillStyle = h || e),
                    i.fillRect(0, 0, r, a),
                    i.restore();
            }
            if (o) {
                var u = this.domBack;
                i.save(), (i.globalAlpha = s), i.drawImage(u, 0, 0, r, a), i.restore();
            }
        },
    };
    var $p =
            ("undefined" != typeof window &&
                ((window.requestAnimationFrame && window.requestAnimationFrame.bind(window)) ||
                    (window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window)) ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame)) ||
            function (t) {
                setTimeout(t, 16);
            },
        Qp = new vp(50),
        Jp = {},
        tg = 0,
        eg = 5e3,
        ng = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
        ig = "12px sans-serif",
        rg = {};
    rg.measureText = function (t, e) {
        var n = l();
        return (n.font = e || ig), n.measureText(t);
    };
    var ag = ig,
        og = { left: 1, right: 1, center: 1 },
        sg = { top: 1, bottom: 1, middle: 1 },
        lg = [
            ["textShadowBlur", "shadowBlur", 0],
            ["textShadowOffsetX", "shadowOffsetX", 0],
            ["textShadowOffsetY", "shadowOffsetY", 0],
            ["textShadowColor", "shadowColor", "transparent"],
        ],
        hg = {},
        ug = {},
        cg = new wn(),
        dg = function () {};
    (dg.prototype = {
        constructor: dg,
        drawRectText: function (t, e) {
            var n = this.style;
            (e = n.textRect || e), this.__dirty && ii(n, !0);
            var i = n.text;
            if ((null != i && (i += ""), xi(i, n))) {
                t.save();
                var r = this.transform;
                n.transformText ? this.setTransform(t) : r && (cg.copy(e), cg.applyTransform(r), (e = cg)), ai(this, t, i, n, e, Wp), t.restore();
            }
        },
    }),
        (wi.prototype = {
            constructor: wi,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            progressive: !1,
            incremental: !1,
            globalScaleRatio: 1,
            beforeBrush: function () {},
            afterBrush: function () {},
            brush: function () {},
            getBoundingRect: function () {},
            contain: function (t, e) {
                return this.rectContain(t, e);
            },
            traverse: function (t, e) {
                t.call(e, this);
            },
            rectContain: function (t, e) {
                var n = this.transformCoordToLocal(t, e),
                    i = this.getBoundingRect();
                return i.contain(n[0], n[1]);
            },
            dirty: function () {
                (this.__dirty = this.__dirtyText = !0), (this._rect = null), this.__zr && this.__zr.refresh();
            },
            animateStyle: function (t) {
                return this.animate("style", t);
            },
            attrKV: function (t, e) {
                "style" !== t ? Lp.prototype.attrKV.call(this, t, e) : this.style.set(e);
            },
            setStyle: function (t, e) {
                return this.style.set(t, e), this.dirty(!1), this;
            },
            useStyle: function (t) {
                return (this.style = new Up(t, this)), this.dirty(!1), this;
            },
            calculateTextPosition: null,
        }),
        u(wi, Lp),
        c(wi, dg),
        (bi.prototype = {
            constructor: bi,
            type: "image",
            brush: function (t, e) {
                var n = this.style,
                    i = n.image;
                n.bind(t, this, e);
                var r = (this._image = zn(i, this._image, this, this.onload));
                if (r && Nn(r)) {
                    var a = n.x || 0,
                        o = n.y || 0,
                        s = n.width,
                        l = n.height,
                        h = r.width / r.height;
                    if ((null == s && null != l ? (s = l * h) : null == l && null != s ? (l = s / h) : null == s && null == l && ((s = r.width), (l = r.height)), this.setTransform(t), n.sWidth && n.sHeight)) {
                        var u = n.sx || 0,
                            c = n.sy || 0;
                        t.drawImage(r, u, c, n.sWidth, n.sHeight, a, o, s, l);
                    } else if (n.sx && n.sy) {
                        var u = n.sx,
                            c = n.sy,
                            d = s - u,
                            f = l - c;
                        t.drawImage(r, u, c, d, f, a, o, s, l);
                    } else t.drawImage(r, a, o, s, l);
                    null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
                }
            },
            getBoundingRect: function () {
                var t = this.style;
                return this._rect || (this._rect = new wn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
            },
        }),
        u(bi, wi);
    var fg = 1e5,
        pg = 314159,
        gg = 0.01,
        vg = 0.001,
        mg = new wn(0, 0, 0, 0),
        yg = new wn(0, 0, 0, 0),
        _g = function (t, e, n) {
            this.type = "canvas";
            var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            (this._opts = n = o({}, n || {})), (this.dpr = n.devicePixelRatio || Dp), (this._singleCanvas = i), (this.root = t);
            var r = t.style;
            r && ((r["-webkit-tap-highlight-color"] = "transparent"), (r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none"), (t.innerHTML = "")), (this.storage = e);
            var a = (this._zlevelList = []),
                s = (this._layers = {});
            if (((this._layerConfig = {}), (this._needsManuallyCompositing = !1), i)) {
                var l = t.width,
                    h = t.height;
                null != n.width && (l = n.width), null != n.height && (h = n.height), (this.dpr = n.devicePixelRatio || 1), (t.width = l * this.dpr), (t.height = h * this.dpr), (this._width = l), (this._height = h);
                var u = new Kp(t, this, this.dpr);
                (u.__builtin__ = !0), u.initContext(), (s[pg] = u), (u.zlevel = pg), a.push(pg), (this._domRoot = t);
            } else {
                (this._width = this._getSize(0)), (this._height = this._getSize(1));
                var c = (this._domRoot = Di(this._width, this._height));
                t.appendChild(c);
            }
            (this._hoverlayer = null), (this._hoverElements = []);
        };
    _g.prototype = {
        constructor: _g,
        getType: function () {
            return "canvas";
        },
        isSingleCanvas: function () {
            return this._singleCanvas;
        },
        getViewportRoot: function () {
            return this._domRoot;
        },
        getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            return t ? { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 } : void 0;
        },
        refresh: function (t) {
            var e = this.storage.getDisplayList(!0),
                n = this._zlevelList;
            (this._redrawId = Math.random()), this._paintList(e, t, this._redrawId);
            for (var i = 0; i < n.length; i++) {
                var r = n[i],
                    a = this._layers[r];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === i ? this._backgroundColor : null;
                    a.refresh(o);
                }
            }
            return this.refreshHover(), this;
        },
        addHover: function (t, e) {
            if (!t.__hoverMir) {
                var n = new t.constructor({ style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent });
                return (n.__from = t), (t.__hoverMir = n), e && n.setStyle(e), this._hoverElements.push(n), n;
            }
        },
        removeHover: function (t) {
            var e = t.__hoverMir,
                n = this._hoverElements,
                i = h(n, e);
            i >= 0 && n.splice(i, 1), (t.__hoverMir = null);
        },
        clearHover: function () {
            for (var t = this._hoverElements, e = 0; e < t.length; e++) {
                var n = t[e].__from;
                n && (n.__hoverMir = null);
            }
            t.length = 0;
        },
        refreshHover: function () {
            var t = this._hoverElements,
                e = t.length,
                n = this._hoverlayer;
            if ((n && n.clear(), e)) {
                An(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(fg));
                var i = {};
                n.ctx.save();
                for (var r = 0; e > r; ) {
                    var a = t[r],
                        o = a.__from;
                    o && o.__zr ? (r++, o.invisible || ((a.transform = o.transform), (a.invTransform = o.invTransform), (a.__clipPaths = o.__clipPaths), this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), (o.__hoverMir = null), e--);
                }
                n.ctx.restore();
            }
        },
        getHoverLayer: function () {
            return this.getLayer(fg);
        },
        _paintList: function (t, e, n) {
            if (this._redrawId === n) {
                (e = e || !1), this._updateLayerStatus(t);
                var i = this._doPaintList(t, e);
                if ((this._needsManuallyCompositing && this._compositeManually(), !i)) {
                    var r = this;
                    $p(function () {
                        r._paintList(t, e, n);
                    });
                }
            }
        },
        _compositeManually: function () {
            var t = this.getLayer(pg).ctx,
                e = this._domRoot.width,
                n = this._domRoot.height;
            t.clearRect(0, 0, e, n),
                this.eachBuiltinLayer(function (i) {
                    i.virtual && t.drawImage(i.dom, 0, 0, e, n);
                });
        },
        _doPaintList: function (t, e) {
            for (var n = [], i = 0; i < this._zlevelList.length; i++) {
                var r = this._zlevelList[i],
                    a = this._layers[r];
                a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a);
            }
            for (var o = !0, s = 0; s < n.length; s++) {
                var a = n[s],
                    l = a.ctx,
                    h = {};
                l.save();
                var u = e ? a.__startIndex : a.__drawIndex,
                    c = !e && a.incremental && Date.now,
                    d = c && Date.now(),
                    p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (a.__startIndex === a.__endIndex) a.clear(!1, p);
                else if (u === a.__startIndex) {
                    var g = t[u];
                    (g.incremental && g.notClear && !e) || a.clear(!1, p);
                }
                -1 === u && (console.error("For some unknown reason. drawIndex is -1"), (u = a.__startIndex));
                for (var v = u; v < a.__endIndex; v++) {
                    var m = t[v];
                    if ((this._doPaintEl(m, a, e, h), (m.__dirty = m.__dirtyText = !1), c)) {
                        var y = Date.now() - d;
                        if (y > 15) break;
                    }
                }
                (a.__drawIndex = v), a.__drawIndex < a.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), l.restore();
            }
            return (
                Sf.wxa &&
                    f(this._layers, function (t) {
                        t && t.ctx && t.ctx.draw && t.ctx.draw();
                    }),
                o
            );
        },
        _doPaintEl: function (t, e, n, i) {
            var r = e.ctx,
                a = t.transform;
            if (!((!e.__dirty && !n) || t.invisible || 0 === t.style.opacity || (a && !a[0] && !a[3]) || (t.culling && Ii(t, this._width, this._height)))) {
                var o = t.__clipPaths,
                    s = i.prevElClipPaths;
                (!s || Ci(o, s)) && (s && (r.restore(), (i.prevElClipPaths = null), (i.prevEl = null)), o && (r.save(), Ti(o, r), (i.prevElClipPaths = o))),
                    t.beforeBrush && t.beforeBrush(r),
                    t.brush(r, i.prevEl || null),
                    (i.prevEl = t),
                    t.afterBrush && t.afterBrush(r);
            }
        },
        getLayer: function (t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = pg);
            var n = this._layers[t];
            return n || ((n = new Kp("zr_" + t, this, this.dpr)), (n.zlevel = t), (n.__builtin__ = !0), this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
        },
        insertLayer: function (t, e) {
            var n = this._layers,
                i = this._zlevelList,
                r = i.length,
                a = null,
                o = -1,
                s = this._domRoot;
            if (n[t]) return void kp("ZLevel " + t + " has been used already");
            if (!Mi(e)) return void kp("Layer of zlevel " + t + " is not valid");
            if (r > 0 && t > i[0]) {
                for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++);
                a = n[i[o]];
            }
            if ((i.splice(o + 1, 0, t), (n[t] = e), !e.virtual))
                if (a) {
                    var l = a.dom;
                    l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
                } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
        },
        eachLayer: function (t, e) {
            var n,
                i,
                r = this._zlevelList;
            for (i = 0; i < r.length; i++) (n = r[i]), t.call(e, this._layers[n], n);
        },
        eachBuiltinLayer: function (t, e) {
            var n,
                i,
                r,
                a = this._zlevelList;
            for (r = 0; r < a.length; r++) (i = a[r]), (n = this._layers[i]), n.__builtin__ && t.call(e, n, i);
        },
        eachOtherLayer: function (t, e) {
            var n,
                i,
                r,
                a = this._zlevelList;
            for (r = 0; r < a.length; r++) (i = a[r]), (n = this._layers[i]), n.__builtin__ || t.call(e, n, i);
        },
        getLayers: function () {
            return this._layers;
        },
        _updateLayerStatus: function (t) {
            function e(t) {
                r && (r.__endIndex !== t && (r.__dirty = !0), (r.__endIndex = t));
            }
            if (
                (this.eachBuiltinLayer(function (t) {
                    t.__dirty = t.__used = !1;
                }),
                this._singleCanvas)
            )
                for (var n = 1; n < t.length; n++) {
                    var i = t[n];
                    if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
                        this._needsManuallyCompositing = !0;
                        break;
                    }
                }
            for (var r = null, a = 0, n = 0; n < t.length; n++) {
                var o,
                    i = t[n],
                    s = i.zlevel;
                i.incremental ? ((o = this.getLayer(s + vg, this._needsManuallyCompositing)), (o.incremental = !0), (a = 1)) : (o = this.getLayer(s + (a > 0 ? gg : 0), this._needsManuallyCompositing)),
                    o.__builtin__ || kp("ZLevel " + s + " has been used by unkown layer " + o.id),
                    o !== r && ((o.__used = !0), o.__startIndex !== n && (o.__dirty = !0), (o.__startIndex = n), (o.__drawIndex = o.incremental ? -1 : n), e(n), (r = o)),
                    i.__dirty && ((o.__dirty = !0), o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n));
            }
            e(n),
                this.eachBuiltinLayer(function (t) {
                    !t.__used && t.getElementCount() > 0 && ((t.__dirty = !0), (t.__startIndex = t.__endIndex = t.__drawIndex = 0)), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
                });
        },
        clear: function () {
            return this.eachBuiltinLayer(this._clearLayer), this;
        },
        _clearLayer: function (t) {
            t.clear();
        },
        setBackgroundColor: function (t) {
            this._backgroundColor = t;
        },
        configLayer: function (t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? r(n[t], e, !0) : (n[t] = e);
                for (var i = 0; i < this._zlevelList.length; i++) {
                    var a = this._zlevelList[i];
                    if (a === t || a === t + gg) {
                        var o = this._layers[a];
                        r(o, n[t], !0);
                    }
                }
            }
        },
        delLayer: function (t) {
            var e = this._layers,
                n = this._zlevelList,
                i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(h(n, t), 1));
        },
        resize: function (t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if ((null != t && (i.width = t), null != e && (i.height = e), (t = this._getSize(0)), (e = this._getSize(1)), (n.style.display = ""), this._width !== t || e !== this._height)) {
                    (n.style.width = t + "px"), (n.style.height = e + "px");
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    f(this._progressiveLayers, function (n) {
                        n.resize(t, e);
                    }),
                        this.refresh(!0);
                }
                (this._width = t), (this._height = e);
            } else {
                if (null == t || null == e) return;
                (this._width = t), (this._height = e), this.getLayer(pg).resize(t, e);
            }
            return this;
        },
        clearLayer: function (t) {
            var e = this._layers[t];
            e && e.clear();
        },
        dispose: function () {
            (this.root.innerHTML = ""), (this.root = this.storage = this._domRoot = this._layers = null);
        },
        getRenderedCanvas: function (t) {
            if (((t = t || {}), this._singleCanvas && !this._compositeManually)) return this._layers[pg].dom;
            var e = new Kp("image", this, t.pixelRatio || this.dpr);
            if ((e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr)) {
                this.refresh();
                var n = e.dom.width,
                    i = e.dom.height,
                    r = e.ctx;
                this.eachLayer(function (t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
                });
            } else
                for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                    var l = o[s];
                    this._doPaintEl(l, e, !0, a);
                }
            return e.dom;
        },
        getWidth: function () {
            return this._width;
        },
        getHeight: function () {
            return this._height;
        },
        _getSize: function (t) {
            var e = this._opts,
                n = ["width", "height"][t],
                i = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t],
                a = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var o = this.root,
                s = document.defaultView.getComputedStyle(o);
            return ((o[i] || Si(s[n]) || Si(o.style[n])) - (Si(s[r]) || 0) - (Si(s[a]) || 0)) | 0;
        },
        pathToImage: function (t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"),
                i = n.getContext("2d"),
                r = t.getBoundingRect(),
                a = t.style,
                o = a.shadowBlur * e,
                s = a.shadowOffsetX * e,
                l = a.shadowOffsetY * e,
                h = a.hasStroke() ? a.lineWidth : 0,
                u = Math.max(h / 2, -s + o),
                c = Math.max(h / 2, s + o),
                d = Math.max(h / 2, -l + o),
                f = Math.max(h / 2, l + o),
                p = r.width + u + c,
                g = r.height + d + f;
            (n.width = p * e), (n.height = g * e), i.scale(e, e), i.clearRect(0, 0, p, g), (i.dpr = e);
            var v = { position: t.position, rotation: t.rotation, scale: t.scale };
            (t.position = [u - r.x, d - r.y]), (t.rotation = 0), (t.scale = [1, 1]), t.updateTransform(), t && t.brush(i);
            var m = bi,
                y = new m({ style: { x: 0, y: 0, image: n } });
            return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y;
        },
    };
    var xg = function (t) {
        (t = t || {}), (this.stage = t.stage || {}), (this.onframe = t.onframe || function () {}), (this._clips = []), (this._running = !1), this._time, this._pausedTime, this._pauseStart, (this._paused = !1), Uf.call(this);
    };
    (xg.prototype = {
        constructor: xg,
        addClip: function (t) {
            this._clips.push(t);
        },
        addAnimator: function (t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n]);
        },
        removeClip: function (t) {
            var e = h(this._clips, t);
            e >= 0 && this._clips.splice(e, 1);
        },
        removeAnimator: function (t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
            t.animation = null;
        },
        _update: function () {
            for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
                var s = n[o],
                    l = s.step(t, e);
                l && (r.push(l), a.push(s));
            }
            for (var o = 0; i > o; ) n[o]._needsRemove ? ((n[o] = n[i - 1]), n.pop(), i--) : o++;
            i = r.length;
            for (var o = 0; i > o; o++) a[o].fire(r[o]);
            (this._time = t), this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
        },
        _startLoop: function () {
            function t() {
                e._running && ($p(t), !e._paused && e._update());
            }
            var e = this;
            (this._running = !0), $p(t);
        },
        start: function () {
            (this._time = new Date().getTime()), (this._pausedTime = 0), this._startLoop();
        },
        stop: function () {
            this._running = !1;
        },
        pause: function () {
            this._paused || ((this._pauseStart = new Date().getTime()), (this._paused = !0));
        },
        resume: function () {
            this._paused && ((this._pausedTime += new Date().getTime() - this._pauseStart), (this._paused = !1));
        },
        clear: function () {
            this._clips = [];
        },
        isFinished: function () {
            return !this._clips.length;
        },
        animate: function (t, e) {
            e = e || {};
            var n = new Ip(t, e.loop, e.getter, e.setter);
            return this.addAnimator(n), n;
        },
    }),
        c(xg, Uf);
    var wg = 300,
        bg = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Sg = ["touchstart", "touchend", "touchmove"],
        Mg = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
        Ig = p(bg, function (t) {
            var e = t.replace("mouse", "pointer");
            return Mg[e] ? e : t;
        }),
        Cg = {
            mousemove: function (t) {
                (t = ye(this.dom, t)), this.trigger("mousemove", t);
            },
            mouseout: function (t) {
                t = ye(this.dom, t);
                var e = t.toElement || t.relatedTarget;
                if (e !== this.dom)
                    for (; e && 9 !== e.nodeType; ) {
                        if (e === this.dom) return;
                        e = e.parentNode;
                    }
                this.trigger("mouseout", t);
            },
            touchstart: function (t) {
                (t = ye(this.dom, t)), (t.zrByTouch = !0), (this._lastTouchMoment = new Date()), this.handler.processGesture(t, "start"), Cg.mousemove.call(this, t), Cg.mousedown.call(this, t), ki(this);
            },
            touchmove: function (t) {
                (t = ye(this.dom, t)), (t.zrByTouch = !0), this.handler.processGesture(t, "change"), Cg.mousemove.call(this, t), ki(this);
            },
            touchend: function (t) {
                (t = ye(this.dom, t)), (t.zrByTouch = !0), this.handler.processGesture(t, "end"), Cg.mouseup.call(this, t), +new Date() - this._lastTouchMoment < wg && Cg.click.call(this, t), ki(this);
            },
            pointerdown: function (t) {
                Cg.mousedown.call(this, t);
            },
            pointermove: function (t) {
                Pi(t) || Cg.mousemove.call(this, t);
            },
            pointerup: function (t) {
                Cg.mouseup.call(this, t);
            },
            pointerout: function (t) {
                Pi(t) || Cg.mouseout.call(this, t);
            },
        };
    f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        Cg[t] = function (e) {
            (e = ye(this.dom, e)), this.trigger(t, e);
        };
    });
    var Tg = Oi.prototype;
    (Tg.dispose = function () {
        for (var t = bg.concat(Sg), e = 0; e < t.length; e++) {
            var n = t[e];
            xe(this.dom, Ai(n), this._handlers[n]);
        }
    }),
        (Tg.setCursor = function (t) {
            this.dom.style && (this.dom.style.cursor = t || "default");
        }),
        c(Oi, Uf);
    var Dg = !Sf.canvasSupported,
        Ag = { canvas: _g },
        kg = {},
        Pg = "4.1.2",
        Lg = function (t, e, n) {
            (n = n || {}), (this.dom = e), (this.id = t);
            var i = this,
                r = new Fp(),
                a = n.renderer;
            if (Dg) {
                if (!Ag.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                a = "vml";
            } else (a && Ag[a]) || (a = "canvas");
            var o = new Ag[a](e, r, n, t);
            (this.storage = r), (this.painter = o);
            var s = Sf.node || Sf.worker ? null : new Oi(o.getViewportRoot());
            (this.handler = new np(r, o, s, o.root)), (this.animation = new xg({ stage: { update: y(this.flush, this) } })), this.animation.start(), this._needsRefresh;
            var l = r.delFromStorage,
                h = r.addToStorage;
            (r.delFromStorage = function (t) {
                l.call(r, t), t && t.removeSelfFromZr(i);
            }),
                (r.addToStorage = function (t) {
                    h.call(r, t), t.addSelfToZr(i);
                });
        };
    Lg.prototype = {
        constructor: Lg,
        getId: function () {
            return this.id;
        },
        add: function (t) {
            this.storage.addRoot(t), (this._needsRefresh = !0);
        },
        remove: function (t) {
            this.storage.delRoot(t), (this._needsRefresh = !0);
        },
        configLayer: function (t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), (this._needsRefresh = !0);
        },
        setBackgroundColor: function (t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), (this._needsRefresh = !0);
        },
        refreshImmediately: function () {
            (this._needsRefresh = this._needsRefreshHover = !1), this.painter.refresh(), (this._needsRefresh = this._needsRefreshHover = !1);
        },
        refresh: function () {
            this._needsRefresh = !0;
        },
        flush: function () {
            var t;
            this._needsRefresh && ((t = !0), this.refreshImmediately()), this._needsRefreshHover && ((t = !0), this.refreshHoverImmediately()), t && this.trigger("rendered");
        },
        addHover: function (t, e) {
            if (this.painter.addHover) {
                var n = this.painter.addHover(t, e);
                return this.refreshHover(), n;
            }
        },
        removeHover: function (t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
        },
        clearHover: function () {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
        },
        refreshHover: function () {
            this._needsRefreshHover = !0;
        },
        refreshHoverImmediately: function () {
            (this._needsRefreshHover = !1), this.painter.refreshHover && this.painter.refreshHover();
        },
        resize: function (t) {
            (t = t || {}), this.painter.resize(t.width, t.height), this.handler.resize();
        },
        clearAnimation: function () {
            this.animation.clear();
        },
        getWidth: function () {
            return this.painter.getWidth();
        },
        getHeight: function () {
            return this.painter.getHeight();
        },
        pathToImage: function (t, e) {
            return this.painter.pathToImage(t, e);
        },
        setCursorStyle: function (t) {
            this.handler.setCursorStyle(t);
        },
        findHover: function (t, e) {
            return this.handler.findHover(t, e);
        },
        on: function (t, e, n) {
            this.handler.on(t, e, n);
        },
        off: function (t, e) {
            this.handler.off(t, e);
        },
        trigger: function (t, e) {
            this.handler.trigger(t, e);
        },
        clear: function () {
            this.storage.delRoot(), this.painter.clear();
        },
        dispose: function () {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), (this.animation = this.storage = this.painter = this.handler = null), Ni(this.id);
        },
    };
    var Og = (Object.freeze || Object)({ version: Pg, init: Bi, dispose: Ei, getInstance: zi, registerPainter: Ri }),
        Bg = f,
        Eg = S,
        zg = x,
        Rg = "series\x00",
        Ng = [
            "fontStyle",
            "fontWeight",
            "fontSize",
            "fontFamily",
            "rich",
            "tag",
            "color",
            "textBorderColor",
            "textBorderWidth",
            "width",
            "height",
            "lineHeight",
            "align",
            "verticalAlign",
            "baseline",
            "shadowColor",
            "shadowBlur",
            "shadowOffsetX",
            "shadowOffsetY",
            "textShadowColor",
            "textShadowBlur",
            "textShadowOffsetX",
            "textShadowOffsetY",
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderRadius",
            "padding",
        ],
        Fg = 0,
        Vg = ".",
        Gg = "___EC__COMPONENT__CONTAINER___",
        Hg = 0,
        Wg = function (t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, n, i) {
                for (var r = {}, a = 0; a < t.length; a++) {
                    var o = t[a][1];
                    if (!((n && h(n, o) >= 0) || (i && h(i, o) < 0))) {
                        var s = e.getShallow(o);
                        null != s && (r[t[a][0]] = s);
                    }
                }
                return r;
            };
        },
        Xg = Wg([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        Ug = {
            getLineStyle: function (t) {
                var e = Xg(this, t);
                return (e.lineDash = this.getLineDash(e.lineWidth)), e;
            },
            getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"),
                    n = Math.max(t, 2),
                    i = 4 * t;
                return "solid" === e || null == e ? !1 : "dashed" === e ? [i, i] : [n, n];
            },
        },
        Yg = Wg([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
        qg = {
            getAreaStyle: function (t, e) {
                return Yg(this, t, e);
            },
        },
        jg = Math.pow,
        Zg = Math.sqrt,
        Kg = 1e-8,
        $g = 1e-4,
        Qg = Zg(3),
        Jg = 1 / 3,
        tv = G(),
        ev = G(),
        nv = G(),
        iv = Math.min,
        rv = Math.max,
        av = Math.sin,
        ov = Math.cos,
        sv = 2 * Math.PI,
        lv = G(),
        hv = G(),
        uv = G(),
        cv = [],
        dv = [],
        fv = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
        pv = [],
        gv = [],
        vv = [],
        mv = [],
        yv = Math.min,
        _v = Math.max,
        xv = Math.cos,
        wv = Math.sin,
        bv = Math.sqrt,
        Sv = Math.abs,
        Mv = "undefined" != typeof Float32Array,
        Iv = function (t) {
            (this._saveData = !t), this._saveData && (this.data = []), (this._ctx = null);
        };
    (Iv.prototype = {
        constructor: Iv,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function (t, e, n) {
            (n = n || 0), (this._ux = Sv(n / Dp / t) || 0), (this._uy = Sv(n / Dp / e) || 0);
        },
        getContext: function () {
            return this._ctx;
        },
        beginPath: function (t) {
            return (this._ctx = t), t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && ((this._lineDash = null), (this._dashOffset = 0)), this;
        },
        moveTo: function (t, e) {
            return this.addData(fv.M, t, e), this._ctx && this._ctx.moveTo(t, e), (this._x0 = t), (this._y0 = e), (this._xi = t), (this._yi = e), this;
        },
        lineTo: function (t, e) {
            var n = Sv(t - this._xi) > this._ux || Sv(e - this._yi) > this._uy || this._len < 5;
            return this.addData(fv.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && ((this._xi = t), (this._yi = e)), this;
        },
        bezierCurveTo: function (t, e, n, i, r, a) {
            return this.addData(fv.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), (this._xi = r), (this._yi = a), this;
        },
        quadraticCurveTo: function (t, e, n, i) {
            return this.addData(fv.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), (this._xi = n), (this._yi = i), this;
        },
        arc: function (t, e, n, i, r, a) {
            return this.addData(fv.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), (this._xi = xv(r) * n + t), (this._yi = wv(r) * n + e), this;
        },
        arcTo: function (t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
        },
        rect: function (t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(fv.R, t, e, n, i), this;
        },
        closePath: function () {
            this.addData(fv.Z);
            var t = this._ctx,
                e = this._x0,
                n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), (this._xi = e), (this._yi = n), this;
        },
        fill: function (t) {
            t && t.fill(), this.toStatic();
        },
        stroke: function (t) {
            t && t.stroke(), this.toStatic();
        },
        setLineDash: function (t) {
            if (t instanceof Array) {
                (this._lineDash = t), (this._dashIdx = 0);
                for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                this._dashSum = e;
            }
            return this;
        },
        setLineDashOffset: function (t) {
            return (this._dashOffset = t), this;
        },
        len: function () {
            return this._len;
        },
        setData: function (t) {
            var e = t.length;
            (this.data && this.data.length === e) || !Mv || (this.data = new Float32Array(e));
            for (var n = 0; e > n; n++) this.data[n] = t[n];
            this._len = e;
        },
        appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
            Mv && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (var r = 0; e > r; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
            this._len = i;
        },
        addData: function (t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), (e = this.data));
                for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
                this._prevCmd = t;
            }
        },
        _expandData: function () {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t;
            }
        },
        _needsDash: function () {
            return this._lineDash;
        },
        _dashedLineTo: function (t, e) {
            var n,
                i,
                r = this._dashSum,
                a = this._dashOffset,
                o = this._lineDash,
                s = this._ctx,
                l = this._xi,
                h = this._yi,
                u = t - l,
                c = e - h,
                d = bv(u * u + c * c),
                f = l,
                p = h,
                g = o.length;
            for (u /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * u, p -= a * c; (u > 0 && t >= f) || (0 > u && f >= t) || (0 === u && ((c > 0 && e >= p) || (0 > c && p >= e))); )
                (i = this._dashIdx),
                    (n = o[i]),
                    (f += u * n),
                    (p += c * n),
                    (this._dashIdx = (i + 1) % g),
                    (u > 0 && l > f) || (0 > u && f > l) || (c > 0 && h > p) || (0 > c && p > h) || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? yv(f, t) : _v(f, t), c >= 0 ? yv(p, e) : _v(p, e));
            (u = f - t), (c = p - e), (this._dashOffset = -bv(u * u + c * c));
        },
        _dashedBezierTo: function (t, e, n, i, r, a) {
            var o,
                s,
                l,
                h,
                u,
                c = this._dashSum,
                d = this._dashOffset,
                f = this._lineDash,
                p = this._ctx,
                g = this._xi,
                v = this._yi,
                m = hr,
                y = 0,
                _ = this._dashIdx,
                x = f.length,
                w = 0;
            for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += 0.1) (s = m(g, t, n, r, o + 0.1) - m(g, t, n, r, o)), (l = m(v, e, i, a, o + 0.1) - m(v, e, i, a, o)), (y += bv(s * s + l * l));
            for (; x > _ && ((w += f[_]), !(w > d)); _++);
            for (o = (w - d) / y; 1 >= o; ) (h = m(g, t, n, r, o)), (u = m(v, e, i, a, o)), _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u), (o += f[_] / y), (_ = (_ + 1) % x);
            _ % 2 !== 0 && p.lineTo(r, a), (s = r - h), (l = a - u), (this._dashOffset = -bv(s * s + l * l));
        },
        _dashedQuadraticTo: function (t, e, n, i) {
            var r = n,
                a = i;
            (n = (n + 2 * t) / 3), (i = (i + 2 * e) / 3), (t = (this._xi + 2 * t) / 3), (e = (this._yi + 2 * e) / 3), this._dashedBezierTo(t, e, n, i, r, a);
        },
        toStatic: function () {
            var t = this.data;
            t instanceof Array && ((t.length = this._len), Mv && (this.data = new Float32Array(t)));
        },
        getBoundingRect: function () {
            (pv[0] = pv[1] = vv[0] = vv[1] = Number.MAX_VALUE), (gv[0] = gv[1] = mv[0] = mv[1] = -Number.MAX_VALUE);
            for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length; ) {
                var o = t[a++];
                switch ((1 === a && ((e = t[a]), (n = t[a + 1]), (i = e), (r = n)), o)) {
                    case fv.M:
                        (i = t[a++]), (r = t[a++]), (e = i), (n = r), (vv[0] = i), (vv[1] = r), (mv[0] = i), (mv[1] = r);
                        break;
                    case fv.L:
                        br(e, n, t[a], t[a + 1], vv, mv), (e = t[a++]), (n = t[a++]);
                        break;
                    case fv.C:
                        Sr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], vv, mv), (e = t[a++]), (n = t[a++]);
                        break;
                    case fv.Q:
                        Mr(e, n, t[a++], t[a++], t[a], t[a + 1], vv, mv), (e = t[a++]), (n = t[a++]);
                        break;
                    case fv.A:
                        var s = t[a++],
                            l = t[a++],
                            h = t[a++],
                            u = t[a++],
                            c = t[a++],
                            d = t[a++] + c;
                        a += 1;
                        var f = 1 - t[a++];
                        1 === a && ((i = xv(c) * h + s), (r = wv(c) * u + l)), Ir(s, l, h, u, c, d, f, vv, mv), (e = xv(d) * h + s), (n = wv(d) * u + l);
                        break;
                    case fv.R:
                        (i = e = t[a++]), (r = n = t[a++]);
                        var p = t[a++],
                            g = t[a++];
                        br(i, r, i + p, r + g, vv, mv);
                        break;
                    case fv.Z:
                        (e = i), (n = r);
                }
                oe(pv, pv, vv), se(gv, gv, mv);
            }
            return 0 === a && (pv[0] = pv[1] = gv[0] = gv[1] = 0), new wn(pv[0], pv[1], gv[0] - pv[0], gv[1] - pv[1]);
        },
        rebuildPath: function (t) {
            for (var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c; ) {
                var d = s[c++];
                switch ((1 === c && ((i = s[c]), (r = s[c + 1]), (e = i), (n = r)), d)) {
                    case fv.M:
                        (e = i = s[c++]), (n = r = s[c++]), t.moveTo(i, r);
                        break;
                    case fv.L:
                        (a = s[c++]), (o = s[c++]), (Sv(a - i) > l || Sv(o - r) > h || c === u - 1) && (t.lineTo(a, o), (i = a), (r = o));
                        break;
                    case fv.C:
                        t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), (i = s[c - 2]), (r = s[c - 1]);
                        break;
                    case fv.Q:
                        t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), (i = s[c - 2]), (r = s[c - 1]);
                        break;
                    case fv.A:
                        var f = s[c++],
                            p = s[c++],
                            g = s[c++],
                            v = s[c++],
                            m = s[c++],
                            y = s[c++],
                            _ = s[c++],
                            x = s[c++],
                            w = g > v ? g : v,
                            b = g > v ? 1 : g / v,
                            S = g > v ? v / g : 1,
                            M = Math.abs(g - v) > 0.001,
                            I = m + y;
                        M ? (t.translate(f, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, I, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, I, 1 - x),
                            1 === c && ((e = xv(m) * g + f), (n = wv(m) * v + p)),
                            (i = xv(I) * g + f),
                            (r = wv(I) * v + p);
                        break;
                    case fv.R:
                        (e = i = s[c]), (n = r = s[c + 1]), t.rect(s[c++], s[c++], s[c++], s[c++]);
                        break;
                    case fv.Z:
                        t.closePath(), (i = e), (r = n);
                }
            }
        },
    }),
        (Iv.CMD = fv);
    var Cv = 2 * Math.PI,
        Tv = 2 * Math.PI,
        Dv = Iv.CMD,
        Av = 2 * Math.PI,
        kv = 1e-4,
        Pv = [-1, -1, -1],
        Lv = [-1, -1],
        Ov = Zp.prototype.getCanvasPattern,
        Bv = Math.abs,
        Ev = new Iv(!0);
    (Vr.prototype = {
        constructor: Vr,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        segmentIgnoreThreshold: 0,
        subPixelOptimize: !1,
        brush: function (t, e) {
            var n = this.style,
                i = this.path || Ev,
                r = n.hasStroke(),
                a = n.hasFill(),
                o = n.fill,
                s = n.stroke,
                l = a && !!o.colorStops,
                h = r && !!s.colorStops,
                u = a && !!o.image,
                c = r && !!s.image;
            if ((n.bind(t, this, e), this.setTransform(t), this.__dirty)) {
                var d;
                l && ((d = d || this.getBoundingRect()), (this._fillGradient = n.getGradient(t, o, d))), h && ((d = d || this.getBoundingRect()), (this._strokeGradient = n.getGradient(t, s, d)));
            }
            l ? (t.fillStyle = this._fillGradient) : u && (t.fillStyle = Ov.call(o, t)), h ? (t.strokeStyle = this._strokeGradient) : c && (t.strokeStyle = Ov.call(s, t));
            var f = n.lineDash,
                p = n.lineDashOffset,
                g = !!t.setLineDash,
                v = this.getGlobalScale();
            if (
                (i.setScale(v[0], v[1], this.segmentIgnoreThreshold),
                this.__dirtyPath || (f && !g && r)
                    ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1))
                    : (t.beginPath(), this.path.rebuildPath(t)),
                a)
            )
                if (null != n.fillOpacity) {
                    var m = t.globalAlpha;
                    (t.globalAlpha = n.fillOpacity * n.opacity), i.fill(t), (t.globalAlpha = m);
                } else i.fill(t);
            if ((f && g && (t.setLineDash(f), (t.lineDashOffset = p)), r))
                if (null != n.strokeOpacity) {
                    var m = t.globalAlpha;
                    (t.globalAlpha = n.strokeOpacity * n.opacity), i.stroke(t), (t.globalAlpha = m);
                } else i.stroke(t);
            f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
        },
        buildPath: function () {},
        createPathProxy: function () {
            this.path = new Iv();
        },
        getBoundingRect: function () {
            var t = this._rect,
                e = this.style,
                n = !t;
            if (n) {
                var i = this.path;
                i || (i = this.path = new Iv()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), (t = i.getBoundingRect());
            }
            if (((this._rect = t), e.hasStroke())) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    r.copy(t);
                    var a = e.lineWidth,
                        o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && ((r.width += a / o), (r.height += a / o), (r.x -= a / o / 2), (r.y -= a / o / 2));
                }
                return r;
            }
            return t;
        },
        contain: function (t, e) {
            var n = this.transformCoordToLocal(t, e),
                i = this.getBoundingRect(),
                r = this.style;
            if (((t = n[0]), (e = n[1]), i.contain(t, e))) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth,
                        s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Fr(a, o / s, t, e))) return !0;
                }
                if (r.hasFill()) return Nr(a, t, e);
            }
            return !1;
        },
        dirty: function (t) {
            null == t && (t = !0), t && ((this.__dirtyPath = t), (this._rect = null)), (this.__dirty = this.__dirtyText = !0), this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
        },
        animateShape: function (t) {
            return this.animate("shape", t);
        },
        attrKV: function (t, e) {
            "shape" === t ? (this.setShape(e), (this.__dirtyPath = !0), (this._rect = null)) : wi.prototype.attrKV.call(this, t, e);
        },
        setShape: function (t, e) {
            var n = this.shape;
            if (n) {
                if (S(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                else n[t] = e;
                this.dirty(!0);
            }
            return this;
        },
        getLineScale: function () {
            var t = this.transform;
            return t && Bv(t[0] - 1) > 1e-10 && Bv(t[3] - 1) > 1e-10 ? Math.sqrt(Bv(t[0] * t[3] - t[2] * t[1])) : 1;
        },
    }),
        (Vr.extend = function (t) {
            var e = function (e) {
                Vr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                var n = t.shape;
                if (n) {
                    this.shape = this.shape || {};
                    var i = this.shape;
                    for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);
                }
                t.init && t.init.call(this, e);
            };
            u(e, Vr);
            for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
            return e;
        }),
        u(Vr, wi);
    var zv = Iv.CMD,
        Rv = [[], [], []],
        Nv = Math.sqrt,
        Fv = Math.atan2,
        Vv = function (t, e) {
            var n,
                i,
                r,
                a,
                o,
                s,
                l = t.data,
                h = zv.M,
                u = zv.C,
                c = zv.L,
                d = zv.R,
                f = zv.A,
                p = zv.Q;
            for (r = 0, a = 0; r < l.length; ) {
                switch (((n = l[r++]), (a = r), (i = 0), n)) {
                    case h:
                        i = 1;
                        break;
                    case c:
                        i = 1;
                        break;
                    case u:
                        i = 3;
                        break;
                    case p:
                        i = 2;
                        break;
                    case f:
                        var g = e[4],
                            v = e[5],
                            m = Nv(e[0] * e[0] + e[1] * e[1]),
                            y = Nv(e[2] * e[2] + e[3] * e[3]),
                            _ = Fv(-e[1] / y, e[0] / m);
                        (l[r] *= m), (l[r++] += g), (l[r] *= y), (l[r++] += v), (l[r++] *= m), (l[r++] *= y), (l[r++] += _), (l[r++] += _), (r += 2), (a = r);
                        break;
                    case d:
                        (s[0] = l[r++]), (s[1] = l[r++]), ae(s, s, e), (l[a++] = s[0]), (l[a++] = s[1]), (s[0] += l[r++]), (s[1] += l[r++]), ae(s, s, e), (l[a++] = s[0]), (l[a++] = s[1]);
                }
                for (o = 0; i > o; o++) {
                    var s = Rv[o];
                    (s[0] = l[r++]), (s[1] = l[r++]), ae(s, s, e), (l[a++] = s[0]), (l[a++] = s[1]);
                }
            }
        },
        Gv = Math.sqrt,
        Hv = Math.sin,
        Wv = Math.cos,
        Xv = Math.PI,
        Uv = function (t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
        },
        Yv = function (t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (Uv(t) * Uv(e));
        },
        qv = function (t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Yv(t, e));
        },
        jv = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
        Zv = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
        Kv = function (t) {
            wi.call(this, t);
        };
    (Kv.prototype = {
        constructor: Kv,
        type: "text",
        brush: function (t, e) {
            var n = this.style;
            this.__dirty && ii(n, !0), (n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null);
            var i = n.text;
            return null != i && (i += ""), xi(i, n) ? (this.setTransform(t), ai(this, t, i, n, null, e), void this.restoreTransform(t)) : void (t.__attrCachedBy = Hp.NONE);
        },
        getBoundingRect: function () {
            var t = this.style;
            if ((this.__dirty && ii(t, !0), !this._rect)) {
                var e = t.text;
                null != e ? (e += "") : (e = "");
                var n = Vn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);
                if (((n.x += t.x || 0), (n.y += t.y || 0), vi(t.textStroke, t.textStrokeWidth))) {
                    var i = t.textStrokeWidth;
                    (n.x -= i / 2), (n.y -= i / 2), (n.width += i), (n.height += i);
                }
                this._rect = n;
            }
            return this._rect;
        },
    }),
        u(Kv, wi);
    var $v = Vr.extend({
            type: "circle",
            shape: { cx: 0, cy: 0, r: 0 },
            buildPath: function (t, e, n) {
                n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
            },
        }),
        Qv = [
            ["shadowBlur", 0],
            ["shadowColor", "#000"],
            ["shadowOffsetX", 0],
            ["shadowOffsetY", 0],
        ],
        Jv = function (t) {
            return Sf.browser.ie && Sf.browser.version >= 11
                ? function () {
                      var e,
                          n = this.__clipPaths,
                          i = this.style;
                      if (n)
                          for (var r = 0; r < n.length; r++) {
                              var a = n[r],
                                  o = a && a.shape,
                                  s = a && a.type;
                              if (o && (("sector" === s && o.startAngle === o.endAngle) || ("rect" === s && (!o.width || !o.height)))) {
                                  for (var l = 0; l < Qv.length; l++) (Qv[l][2] = i[Qv[l][0]]), (i[Qv[l][0]] = Qv[l][1]);
                                  e = !0;
                                  break;
                              }
                          }
                      if ((t.apply(this, arguments), e)) for (var l = 0; l < Qv.length; l++) i[Qv[l][0]] = Qv[l][2];
                  }
                : t;
        },
        tm = Vr.extend({
            type: "sector",
            shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 },
            brush: Jv(Vr.prototype.brush),
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = Math.max(e.r0 || 0, 0),
                    a = Math.max(e.r, 0),
                    o = e.startAngle,
                    s = e.endAngle,
                    l = e.clockwise,
                    h = Math.cos(o),
                    u = Math.sin(o);
                t.moveTo(h * r + n, u * r + i), t.lineTo(h * a + n, u * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath();
            },
        }),
        em = Vr.extend({
            type: "ring",
            shape: { cx: 0, cy: 0, r: 0, r0: 0 },
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = 2 * Math.PI;
                t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);
            },
        }),
        nm = function (t, e) {
            for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) r += ee(t[a - 1], t[a]);
            var o = r / 2;
            o = n > o ? n : o;
            for (var a = 0; o > a; a++) {
                var s,
                    l,
                    h,
                    u = (a / (o - 1)) * (e ? n : n - 1),
                    c = Math.floor(u),
                    d = u - c,
                    f = t[c % n];
                e ? ((s = t[(c - 1 + n) % n]), (l = t[(c + 1) % n]), (h = t[(c + 2) % n])) : ((s = t[0 === c ? c : c - 1]), (l = t[c > n - 2 ? n - 1 : c + 1]), (h = t[c > n - 3 ? n - 1 : c + 2]));
                var p = d * d,
                    g = d * p;
                i.push([qr(s[0], f[0], l[0], h[0], d, p, g), qr(s[1], f[1], l[1], h[1], d, p, g)]);
            }
            return i;
        },
        im = function (t, e, n, i) {
            var r,
                a,
                o,
                s,
                l = [],
                h = [],
                u = [],
                c = [];
            if (i) {
                (o = [1 / 0, 1 / 0]), (s = [-1 / 0, -1 / 0]);
                for (var d = 0, f = t.length; f > d; d++) oe(o, o, t[d]), se(s, s, t[d]);
                oe(o, o, i[0]), se(s, s, i[1]);
            }
            for (var d = 0, f = t.length; f > d; d++) {
                var p = t[d];
                if (n) (r = t[d ? d - 1 : f - 1]), (a = t[(d + 1) % f]);
                else {
                    if (0 === d || d === f - 1) {
                        l.push(W(t[d]));
                        continue;
                    }
                    (r = t[d - 1]), (a = t[d + 1]);
                }
                q(h, a, r), J(h, h, e);
                var g = ee(p, r),
                    v = ee(p, a),
                    m = g + v;
                0 !== m && ((g /= m), (v /= m)), J(u, h, -g), J(c, h, v);
                var y = U([], p, u),
                    _ = U([], p, c);
                i && (se(y, y, o), oe(y, y, s), se(_, _, o), oe(_, _, s)), l.push(y), l.push(_);
            }
            return n && l.push(l.shift()), l;
        },
        rm = Vr.extend({
            type: "polygon",
            shape: { points: null, smooth: !1, smoothConstraint: null },
            buildPath: function (t, e) {
                jr(t, e, !0);
            },
        }),
        am = Vr.extend({
            type: "polyline",
            shape: { points: null, smooth: !1, smoothConstraint: null },
            style: { stroke: "#000", fill: null },
            buildPath: function (t, e) {
                jr(t, e, !1);
            },
        }),
        om = Math.round,
        sm = {},
        lm = Vr.extend({
            type: "rect",
            shape: { r: 0, x: 0, y: 0, width: 0, height: 0 },
            buildPath: function (t, e) {
                var n, i, r, a;
                this.subPixelOptimize ? (Kr(sm, e, this.style), (n = sm.x), (i = sm.y), (r = sm.width), (a = sm.height), (sm.r = e.r), (e = sm)) : ((n = e.x), (i = e.y), (r = e.width), (a = e.height)),
                    e.r ? ni(t, e) : t.rect(n, i, r, a),
                    t.closePath();
            },
        }),
        hm = {},
        um = Vr.extend({
            type: "line",
            shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 },
            style: { stroke: "#000", fill: null },
            buildPath: function (t, e) {
                var n, i, r, a;
                this.subPixelOptimize ? (Zr(hm, e, this.style), (n = hm.x1), (i = hm.y1), (r = hm.x2), (a = hm.y2)) : ((n = e.x1), (i = e.y1), (r = e.x2), (a = e.y2));
                var o = e.percent;
                0 !== o && (t.moveTo(n, i), 1 > o && ((r = n * (1 - o) + r * o), (a = i * (1 - o) + a * o)), t.lineTo(r, a));
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
            },
        }),
        cm = [],
        dm = Vr.extend({
            type: "bezier-curve",
            shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 },
            style: { stroke: "#000", fill: null },
            buildPath: function (t, e) {
                var n = e.x1,
                    i = e.y1,
                    r = e.x2,
                    a = e.y2,
                    o = e.cpx1,
                    s = e.cpy1,
                    l = e.cpx2,
                    h = e.cpy2,
                    u = e.percent;
                0 !== u &&
                    (t.moveTo(n, i),
                    null == l || null == h
                        ? (1 > u && (_r(n, o, r, u, cm), (o = cm[1]), (r = cm[2]), _r(i, s, a, u, cm), (s = cm[1]), (a = cm[2])), t.quadraticCurveTo(o, s, r, a))
                        : (1 > u && (fr(n, o, l, r, u, cm), (o = cm[1]), (l = cm[2]), (r = cm[3]), fr(i, s, h, a, u, cm), (s = cm[1]), (h = cm[2]), (a = cm[3])), t.bezierCurveTo(o, s, l, h, r, a)));
            },
            pointAt: function (t) {
                return Qr(this.shape, t, !1);
            },
            tangentAt: function (t) {
                var e = Qr(this.shape, t, !0);
                return te(e, e);
            },
        }),
        fm = Vr.extend({
            type: "arc",
            shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 },
            style: { stroke: "#000", fill: null },
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = Math.max(e.r, 0),
                    a = e.startAngle,
                    o = e.endAngle,
                    s = e.clockwise,
                    l = Math.cos(a),
                    h = Math.sin(a);
                t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, a, o, !s);
            },
        }),
        pm = Vr.extend({
            type: "compound",
            shape: { paths: null },
            _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
                (this.__dirtyPath = t), (this.__dirty = this.__dirty || t);
            },
            beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
            },
            buildPath: function (t, e) {
                for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0);
            },
            afterBrush: function () {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1;
            },
            getBoundingRect: function () {
                return this._updatePathDirty(), Vr.prototype.getBoundingRect.call(this);
            },
        }),
        gm = function (t) {
            this.colorStops = t || [];
        };
    gm.prototype = {
        constructor: gm,
        addColorStop: function (t, e) {
            this.colorStops.push({ offset: t, color: e });
        },
    };
    var vm = function (t, e, n, i, r, a) {
        (this.x = null == t ? 0 : t), (this.y = null == e ? 0 : e), (this.x2 = null == n ? 1 : n), (this.y2 = null == i ? 0 : i), (this.type = "linear"), (this.global = a || !1), gm.call(this, r);
    };
    (vm.prototype = { constructor: vm }), u(vm, gm);
    var mm = function (t, e, n, i, r) {
        (this.x = null == t ? 0.5 : t), (this.y = null == e ? 0.5 : e), (this.r = null == n ? 0.5 : n), (this.type = "radial"), (this.global = r || !1), gm.call(this, i);
    };
    (mm.prototype = { constructor: mm }),
        u(mm, gm),
        (Jr.prototype.incremental = !0),
        (Jr.prototype.clearDisplaybles = function () {
            (this._displayables = []), (this._temporaryDisplayables = []), (this._cursor = 0), this.dirty(), (this.notClear = !1);
        }),
        (Jr.prototype.addDisplayable = function (t, e) {
            e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
        }),
        (Jr.prototype.addDisplayables = function (t, e) {
            e = e || !1;
            for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
        }),
        (Jr.prototype.eachPendingDisplayable = function (t) {
            for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
            for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
        }),
        (Jr.prototype.update = function () {
            this.updateTransform();
            for (var t = this._cursor; t < this._displayables.length; t++) {
                var e = this._displayables[t];
                (e.parent = this), e.update(), (e.parent = null);
            }
            for (var t = 0; t < this._temporaryDisplayables.length; t++) {
                var e = this._temporaryDisplayables[t];
                (e.parent = this), e.update(), (e.parent = null);
            }
        }),
        (Jr.prototype.brush = function (t) {
            for (var e = this._cursor; e < this._displayables.length; e++) {
                var n = this._displayables[e];
                n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t);
            }
            this._cursor = e;
            for (var e = 0; e < this._temporaryDisplayables.length; e++) {
                var n = this._temporaryDisplayables[e];
                n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t);
            }
            (this._temporaryDisplayables = []), (this.notClear = !0);
        });
    var ym = [];
    (Jr.prototype.getBoundingRect = function () {
        if (!this._rect) {
            for (var t = new wn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var n = this._displayables[e],
                    i = n.getBoundingRect().clone();
                n.needLocalTransform() && i.applyTransform(n.getLocalTransform(ym)), t.union(i);
            }
            this._rect = t;
        }
        return this._rect;
    }),
        (Jr.prototype.contain = function (t, e) {
            var n = this.transformCoordToLocal(t, e),
                i = this.getBoundingRect();
            if (i.contain(n[0], n[1]))
                for (var r = 0; r < this._displayables.length; r++) {
                    var a = this._displayables[r];
                    if (a.contain(t, e)) return !0;
                }
            return !1;
        }),
        u(Jr, wi);
    var _m = Math.max,
        xm = Math.min,
        wm = {},
        bm = 1,
        Sm = { color: "textFill", textBorderColor: "textStroke", textBorderWidth: "textStrokeWidth" },
        Mm = "emphasis",
        Im = "normal",
        Cm = 1,
        Tm = {},
        Dm = {},
        Am = Yr,
        km = $r,
        Pm = N(),
        Lm = 0;
    na("circle", $v), na("sector", tm), na("ring", em), na("polygon", rm), na("polyline", am), na("rect", lm), na("line", um), na("bezierCurve", dm), na("arc", fm);
    var Om = (Object.freeze || Object)({
            Z2_EMPHASIS_LIFT: bm,
            CACHED_LABEL_STYLE_PROPERTIES: Sm,
            extendShape: ta,
            extendPath: ea,
            registerShape: na,
            getShapeClass: ia,
            makePath: ra,
            makeImage: aa,
            mergePath: Am,
            resizePath: sa,
            subPixelOptimizeLine: la,
            subPixelOptimizeRect: ha,
            subPixelOptimize: km,
            setElementHoverStyle: ma,
            setHoverStyle: Sa,
            setAsHighDownDispatcher: Ma,
            isHighDownDispatcher: Ia,
            getHighlightDigit: Ca,
            setLabelStyle: Ta,
            modifyLabelStyle: Da,
            setTextStyle: Aa,
            setText: ka,
            getFont: Ra,
            updateProps: Fa,
            initProps: Va,
            getTransform: Ga,
            applyTransform: Ha,
            transformDirection: Wa,
            groupTransition: Xa,
            clipPointsByRect: Ua,
            clipRectByRect: Ya,
            createIcon: qa,
            linePolygonIntersect: ja,
            lineLineIntersect: Za,
            Group: zp,
            Image: bi,
            Text: Kv,
            Circle: $v,
            Sector: tm,
            Ring: em,
            Polygon: rm,
            Polyline: am,
            Rect: lm,
            Line: um,
            BezierCurve: dm,
            Arc: fm,
            IncrementalDisplayable: Jr,
            CompoundPath: pm,
            LinearGradient: vm,
            RadialGradient: mm,
            BoundingRect: wn,
        }),
        Bm = ["textStyle", "color"],
        Em = {
            getTextColor: function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(Bm) : null);
            },
            getFont: function () {
                return Ra({ fontStyle: this.getShallow("fontStyle"), fontWeight: this.getShallow("fontWeight"), fontSize: this.getShallow("fontSize"), fontFamily: this.getShallow("fontFamily") }, this.ecModel);
            },
            getTextRect: function (t) {
                return Vn(
                    t,
                    this.getFont(),
                    this.getShallow("align"),
                    this.getShallow("verticalAlign") || this.getShallow("baseline"),
                    this.getShallow("padding"),
                    this.getShallow("lineHeight"),
                    this.getShallow("rich"),
                    this.getShallow("truncateText")
                );
            },
        },
        zm = Wg([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
        Rm = {
            getItemStyle: function (t, e) {
                var n = zm(this, t, e),
                    i = this.getBorderLineDash();
                return i && (n.lineDash = i), n;
            },
            getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
            },
        },
        Nm = c,
        Fm = ji();
    (Qa.prototype = {
        constructor: Qa,
        init: null,
        mergeOption: function (t) {
            r(this.option, t, !0);
        },
        get: function (t, e) {
            return null == t ? this.option : Ja(this.option, this.parsePath(t), !e && to(this, t));
        },
        getShallow: function (t, e) {
            var n = this.option,
                i = null == n ? n : n[t],
                r = !e && to(this, t);
            return null == i && r && (i = r.getShallow(t)), i;
        },
        getModel: function (t, e) {
            var n,
                i = null == t ? this.option : Ja(this.option, (t = this.parsePath(t)));
            return (e = e || ((n = to(this, t)) && n.getModel(t))), new Qa(i, e, this.ecModel);
        },
        isEmpty: function () {
            return null == this.option;
        },
        restoreData: function () {},
        clone: function () {
            var t = this.constructor;
            return new t(i(this.option));
        },
        setReadOnly: function () {},
        parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")), t;
        },
        customizeGetParent: function (t) {
            Fm(this).getParent = t;
        },
        isAnimationEnabled: function () {
            if (!Sf.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled();
            }
        },
    }),
        nr(Qa),
        ir(Qa),
        Nm(Qa, Ug),
        Nm(Qa, qg),
        Nm(Qa, Em),
        Nm(Qa, Rm);
    var Vm = 0,
        Gm = 1e-4,
        Hm = 9007199254740991,
        Wm = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        Xm = (Object.freeze || Object)({
            linearMap: ao,
            parsePercent: oo,
            round: so,
            asc: lo,
            getPrecision: ho,
            getPrecisionSafe: uo,
            getPixelPrecision: co,
            getPercentWithPrecision: fo,
            MAX_SAFE_INTEGER: Hm,
            remRadian: po,
            isRadianAroundZero: go,
            parseDate: vo,
            quantity: mo,
            quantityExponent: yo,
            nice: _o,
            quantile: xo,
            reformIntervals: wo,
            isNumeric: bo,
        }),
        Um = L,
        Ym = /([&<>"'])/g,
        qm = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
        jm = ["a", "b", "c", "d", "e", "f", "g"],
        Zm = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}";
        },
        Km = Yn,
        $m = (Object.freeze || Object)({
            addCommas: So,
            toCamelCase: Mo,
            normalizeCssArray: Um,
            encodeHTML: Io,
            formatTpl: Co,
            formatTplSimple: To,
            getTooltipMarker: Do,
            formatTime: ko,
            capitalFirst: Po,
            truncateText: Km,
            getTextBoundingRect: Lo,
            getTextRect: Oo,
        }),
        Qm = f,
        Jm = ["left", "right", "top", "bottom", "width", "height"],
        ty = [
            ["width", "left", "right"],
            ["height", "top", "bottom"],
        ],
        ey = Bo,
        ny =
            (_(Bo, "vertical"),
            _(Bo, "horizontal"),
            {
                getBoxLayoutParams: function () {
                    return { left: this.get("left"), top: this.get("top"), right: this.get("right"), bottom: this.get("bottom"), width: this.get("width"), height: this.get("height") };
                },
            }),
        iy = ji(),
        ry = Qa.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function (t, e, n, i) {
                Qa.call(this, t, e, n, i), (this.uid = eo("ec_cpt_model"));
            },
            init: function (t, e, n) {
                this.mergeDefaultAndTheme(t, n);
            },
            mergeDefaultAndTheme: function (t, e) {
                var n = this.layoutMode,
                    i = n ? Ro(t) : {},
                    a = e.getTheme();
                r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && zo(t, i, n);
            },
            mergeOption: function (t) {
                r(this.option, t, !0);
                var e = this.layoutMode;
                e && zo(this.option, t, e);
            },
            optionUpdated: function () {},
            getDefaultOption: function () {
                var t = iy(this);
                if (!t.defaultOption) {
                    for (var e = [], n = this.constructor; n; ) {
                        var i = n.prototype.defaultOption;
                        i && e.push(i), (n = n.superClass);
                    }
                    for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
                    t.defaultOption = a;
                }
                return t.defaultOption;
            },
            getReferringComponents: function (t) {
                return this.ecModel.queryComponents({ mainType: t, index: this.get(t + "Index", !0), id: this.get(t + "Id", !0) });
            },
        });
    or(ry, { registerWhenExtend: !0 }), no(ry), io(ry, Fo), c(ry, ny);
    var ay = "";
    "undefined" != typeof navigator && (ay = navigator.platform || "");
    var oy = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            textStyle: { fontFamily: ay.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" },
            blendMode: null,
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1,
        },
        sy = ji(),
        ly = {
            clearColorPalette: function () {
                (sy(this).colorIdx = 0), (sy(this).colorNameMap = {});
            },
            getColorFromPalette: function (t, e, n) {
                e = e || this;
                var i = sy(e),
                    r = i.colorIdx || 0,
                    a = (i.colorNameMap = i.colorNameMap || {});
                if (a.hasOwnProperty(t)) return a[t];
                var o = Fi(this.get("color", !0)),
                    s = this.get("colorLayer", !0),
                    l = null != n && s ? Vo(s, n) : o;
                if (((l = l || o), l && l.length)) {
                    var h = l[r];
                    return t && (a[t] = h), (i.colorIdx = (r + 1) % l.length), h;
                }
            },
        },
        hy = {
            cartesian2d: function (t, e, n, i) {
                var r = t.getReferringComponents("xAxis")[0],
                    a = t.getReferringComponents("yAxis")[0];
                (e.coordSysDims = ["x", "y"]), n.set("x", r), n.set("y", a), Ho(r) && (i.set("x", r), (e.firstCategoryDimIndex = 0)), Ho(a) && (i.set("y", a), (e.firstCategoryDimIndex = 1));
            },
            singleAxis: function (t, e, n, i) {
                var r = t.getReferringComponents("singleAxis")[0];
                (e.coordSysDims = ["single"]), n.set("single", r), Ho(r) && (i.set("single", r), (e.firstCategoryDimIndex = 0));
            },
            polar: function (t, e, n, i) {
                var r = t.getReferringComponents("polar")[0],
                    a = r.findAxisModel("radiusAxis"),
                    o = r.findAxisModel("angleAxis");
                (e.coordSysDims = ["radius", "angle"]), n.set("radius", a), n.set("angle", o), Ho(a) && (i.set("radius", a), (e.firstCategoryDimIndex = 0)), Ho(o) && (i.set("angle", o), (e.firstCategoryDimIndex = 1));
            },
            geo: function (t, e) {
                e.coordSysDims = ["lng", "lat"];
            },
            parallel: function (t, e, n, i) {
                var r = t.ecModel,
                    a = r.getComponent("parallel", t.get("parallelIndex")),
                    o = (e.coordSysDims = a.dimensions.slice());
                f(a.parallelAxisIndex, function (t, a) {
                    var s = r.getComponent("parallelAxis", t),
                        l = o[a];
                    n.set(l, s), Ho(s) && null == e.firstCategoryDimIndex && (i.set(l, s), (e.firstCategoryDimIndex = a));
                });
            },
        },
        uy = "original",
        cy = "arrayRows",
        dy = "objectRows",
        fy = "keyedColumns",
        py = "unknown",
        gy = "typedArray",
        vy = "column",
        my = "row";
    (Wo.seriesDataToSource = function (t) {
        return new Wo({ data: t, sourceFormat: I(t) ? gy : uy, fromDataset: !1 });
    }),
        ir(Wo);
    var yy = ji(),
        _y = "\x00_ec_inner",
        xy = Qa.extend({
            init: function (t, e, n, i) {
                (n = n || {}), (this.option = null), (this._theme = new Qa(n)), (this._optionManager = i);
            },
            setOption: function (t, e) {
                O(!(_y in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);
            },
            resetOption: function (t) {
                var e = !1,
                    n = this._optionManager;
                if (!t || "recreate" === t) {
                    var i = n.mountOption("recreate" === t);
                    this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : rs.call(this, i), (e = !0);
                }
                if ((("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t)) {
                    var r = n.getTimelineOption(this);
                    r && (this.mergeOption(r), (e = !0));
                }
                if (!t || "recreate" === t || "media" === t) {
                    var a = n.getMediaOption(this, this._api);
                    a.length &&
                        f(
                            a,
                            function (t) {
                                this.mergeOption(t, (e = !0));
                            },
                            this
                        );
                }
                return e;
            },
            mergeOption: function (t) {
                function e(e, i) {
                    var r = Fi(t[e]),
                        s = Wi(a.get(e), r);
                    Xi(s),
                        f(s, function (t) {
                            var n = t.option;
                            S(n) && ((t.keyInfo.mainType = e), (t.keyInfo.subType = os(e, n, t.exist)));
                        });
                    var l = as(a, i);
                    (n[e] = []),
                        a.set(e, []),
                        f(
                            s,
                            function (t, i) {
                                var r = t.exist,
                                    s = t.option;
                                if ((O(S(s) || r, "Empty component definition"), s)) {
                                    var h = ry.getClass(e, t.keyInfo.subType, !0);
                                    if (r && r.constructor === h) (r.name = t.keyInfo.name), r.mergeOption(s, this), r.optionUpdated(s, !1);
                                    else {
                                        var u = o({ dependentModels: l, componentIndex: i }, t.keyInfo);
                                        (r = new h(s, this, this, u)), o(r, u), r.init(s, this, this, u), r.optionUpdated(null, !0);
                                    }
                                } else r.mergeOption({}, this), r.optionUpdated({}, !1);
                                (a.get(e)[i] = r), (n[e][i] = r.option);
                            },
                            this
                        ),
                        "series" === e && ss(this, a.get("series"));
                }
                var n = this.option,
                    a = this._componentsMap,
                    s = [];
                Yo(this),
                    f(t, function (t, e) {
                        null != t && (ry.hasClass(e) ? e && s.push(e) : (n[e] = null == n[e] ? i(t) : r(n[e], t, !0)));
                    }),
                    ry.topologicalTravel(s, ry.getAllClassMainTypes(), e, this),
                    (this._seriesIndicesMap = N((this._seriesIndices = this._seriesIndices || [])));
            },
            getOption: function () {
                var t = i(this.option);
                return (
                    f(t, function (e, n) {
                        if (ry.hasClass(n)) {
                            for (var e = Fi(e), i = e.length - 1; i >= 0; i--) Yi(e[i]) && e.splice(i, 1);
                            t[n] = e;
                        }
                    }),
                    delete t[_y],
                    t
                );
            },
            getTheme: function () {
                return this._theme;
            },
            getComponent: function (t, e) {
                var n = this._componentsMap.get(t);
                return n ? n[e || 0] : void 0;
            },
            queryComponents: function (t) {
                var e = t.mainType;
                if (!e) return [];
                var n = t.index,
                    i = t.id,
                    r = t.name,
                    a = this._componentsMap.get(e);
                if (!a || !a.length) return [];
                var o;
                if (null != n)
                    x(n) || (n = [n]),
                        (o = v(
                            p(n, function (t) {
                                return a[t];
                            }),
                            function (t) {
                                return !!t;
                            }
                        ));
                else if (null != i) {
                    var s = x(i);
                    o = v(a, function (t) {
                        return (s && h(i, t.id) >= 0) || (!s && t.id === i);
                    });
                } else if (null != r) {
                    var l = x(r);
                    o = v(a, function (t) {
                        return (l && h(r, t.name) >= 0) || (!l && t.name === r);
                    });
                } else o = a.slice();
                return ls(o, t);
            },
            findComponents: function (t) {
                function e(t) {
                    var e = r + "Index",
                        n = r + "Id",
                        i = r + "Name";
                    return !t || (null == t[e] && null == t[n] && null == t[i]) ? null : { mainType: r, index: t[e], id: t[n], name: t[i] };
                }
                function n(e) {
                    return t.filter ? v(e, t.filter) : e;
                }
                var i = t.query,
                    r = t.mainType,
                    a = e(i),
                    o = a ? this.queryComponents(a) : this._componentsMap.get(r);
                return n(ls(o, t));
            },
            eachComponent: function (t, e, n) {
                var i = this._componentsMap;
                if ("function" == typeof t)
                    (n = e),
                        (e = t),
                        i.each(function (t, i) {
                            f(t, function (t, r) {
                                e.call(n, i, t, r);
                            });
                        });
                else if (b(t)) f(i.get(t), e, n);
                else if (S(t)) {
                    var r = this.findComponents(t);
                    f(r, e, n);
                }
            },
            getSeriesByName: function (t) {
                var e = this._componentsMap.get("series");
                return v(e, function (e) {
                    return e.name === t;
                });
            },
            getSeriesByIndex: function (t) {
                return this._componentsMap.get("series")[t];
            },
            getSeriesByType: function (t) {
                var e = this._componentsMap.get("series");
                return v(e, function (e) {
                    return e.subType === t;
                });
            },
            getSeries: function () {
                return this._componentsMap.get("series").slice();
            },
            getSeriesCount: function () {
                return this._componentsMap.get("series").length;
            },
            eachSeries: function (t, e) {
                f(
                    this._seriesIndices,
                    function (n) {
                        var i = this._componentsMap.get("series")[n];
                        t.call(e, i, n);
                    },
                    this
                );
            },
            eachRawSeries: function (t, e) {
                f(this._componentsMap.get("series"), t, e);
            },
            eachSeriesByType: function (t, e, n) {
                f(
                    this._seriesIndices,
                    function (i) {
                        var r = this._componentsMap.get("series")[i];
                        r.subType === t && e.call(n, r, i);
                    },
                    this
                );
            },
            eachRawSeriesByType: function (t, e, n) {
                return f(this.getSeriesByType(t), e, n);
            },
            isSeriesFiltered: function (t) {
                return null == this._seriesIndicesMap.get(t.componentIndex);
            },
            getCurrentSeriesIndices: function () {
                return (this._seriesIndices || []).slice();
            },
            filterSeries: function (t, e) {
                var n = v(this._componentsMap.get("series"), t, e);
                ss(this, n);
            },
            restoreData: function (t) {
                var e = this._componentsMap;
                ss(this, e.get("series"));
                var n = [];
                e.each(function (t, e) {
                    n.push(e);
                }),
                    ry.topologicalTravel(n, ry.getAllClassMainTypes(), function (n) {
                        f(e.get(n), function (e) {
                            ("series" !== n || !ns(e, t)) && e.restoreData();
                        });
                    });
            },
        });
    c(xy, ly);
    var wy = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
        by = {};
    (us.prototype = {
        constructor: us,
        create: function (t, e) {
            var n = [];
            f(by, function (i) {
                var r = i.create(t, e);
                n = n.concat(r || []);
            }),
                (this._coordinateSystems = n);
        },
        update: function (t, e) {
            f(this._coordinateSystems, function (n) {
                n.update && n.update(t, e);
            });
        },
        getCoordinateSystems: function () {
            return this._coordinateSystems.slice();
        },
    }),
        (us.register = function (t, e) {
            by[t] = e;
        }),
        (us.get = function (t) {
            return by[t];
        });
    var Sy = f,
        My = i,
        Iy = p,
        Cy = r,
        Ty = /^(min|max)?(.+)$/;
    cs.prototype = {
        constructor: cs,
        setOption: function (t, e) {
            t &&
                f(Fi(t.series), function (t) {
                    t && t.data && I(t.data) && E(t.data);
                }),
                (t = My(t));
            var n = this._optionBackup,
                i = ds.call(this, t, e, !n);
            (this._newBaseOption = i.baseOption),
                n
                    ? (vs(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault))
                    : (this._optionBackup = i);
        },
        mountOption: function (t) {
            var e = this._optionBackup;
            return (this._timelineOptions = Iy(e.timelineOptions, My)), (this._mediaList = Iy(e.mediaList, My)), (this._mediaDefault = My(e.mediaDefault)), (this._currentMediaIndices = []), My(t ? e.baseOption : this._newBaseOption);
        },
        getTimelineOption: function (t) {
            var e,
                n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = My(n[i.getCurrentIndex()], !0));
            }
            return e;
        },
        getMediaOption: function () {
            var t = this._api.getWidth(),
                e = this._api.getHeight(),
                n = this._mediaList,
                i = this._mediaDefault,
                r = [],
                a = [];
            if (!n.length && !i) return a;
            for (var o = 0, s = n.length; s > o; o++) fs(n[o].query, t, e) && r.push(o);
            return (
                !r.length && i && (r = [-1]),
                r.length &&
                    !gs(r, this._currentMediaIndices) &&
                    (a = Iy(r, function (t) {
                        return My(-1 === t ? i.option : n[t].option);
                    })),
                (this._currentMediaIndices = r),
                a
            );
        },
    };
    var Dy = f,
        Ay = S,
        ky = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        Py = function (t, e) {
            Dy(Ss(t.series), function (t) {
                Ay(t) && bs(t);
            });
            var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
            e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"),
                Dy(n, function (e) {
                    Dy(Ss(t[e]), function (t) {
                        t && (xs(t, "axisLabel"), xs(t.axisPointer, "label"));
                    });
                }),
                Dy(Ss(t.parallel), function (t) {
                    var e = t && t.parallelAxisDefault;
                    xs(e, "axisLabel"), xs(e && e.axisPointer, "label");
                }),
                Dy(Ss(t.calendar), function (t) {
                    ys(t, "itemStyle"), xs(t, "dayLabel"), xs(t, "monthLabel"), xs(t, "yearLabel");
                }),
                Dy(Ss(t.radar), function (t) {
                    xs(t, "name");
                }),
                Dy(Ss(t.geo), function (t) {
                    Ay(t) &&
                        (ws(t),
                        Dy(Ss(t.regions), function (t) {
                            ws(t);
                        }));
                }),
                Dy(Ss(t.timeline), function (t) {
                    ws(t), ys(t, "label"), ys(t, "itemStyle"), ys(t, "controlStyle", !0);
                    var e = t.data;
                    x(e) &&
                        f(e, function (t) {
                            S(t) && (ys(t, "label"), ys(t, "itemStyle"));
                        });
                }),
                Dy(Ss(t.toolbox), function (t) {
                    ys(t, "iconStyle"),
                        Dy(t.feature, function (t) {
                            ys(t, "iconStyle");
                        });
                }),
                xs(Ms(t.axisPointer), "label"),
                xs(Ms(t.tooltip).axisPointer, "label");
        },
        Ly = [
            ["x", "left"],
            ["y", "top"],
            ["x2", "right"],
            ["y2", "bottom"],
        ],
        Oy = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        By = function (t, e) {
            Py(t, e),
                (t.series = Fi(t.series)),
                f(t.series, function (t) {
                    if (S(t)) {
                        var e = t.type;
                        if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow);
                        else if ("pie" === e || "gauge" === e) null != t.clockWise && (t.clockwise = t.clockWise);
                        else if ("gauge" === e) {
                            var n = Is(t, "pointer.color");
                            null != n && Cs(t, "itemStyle.color", n);
                        }
                        Ts(t);
                    }
                }),
                t.dataRange && (t.visualMap = t.dataRange),
                f(Oy, function (e) {
                    var n = t[e];
                    n &&
                        (x(n) || (n = [n]),
                        f(n, function (t) {
                            Ts(t);
                        }));
                });
        },
        Ey = function (t) {
            var e = N();
            t.eachSeries(function (t) {
                var n = t.get("stack");
                if (n) {
                    var i = e.get(n) || e.set(n, []),
                        r = t.getData(),
                        a = {
                            stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                            stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                            stackedDimension: r.getCalculationInfo("stackedDimension"),
                            stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                            isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                            data: r,
                            seriesModel: t,
                        };
                    if (!a.stackedDimension || (!a.isStackedByIndex && !a.stackedByDimension)) return;
                    i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a);
                }
            }),
                e.each(Ds);
        },
        zy = As.prototype;
    (zy.pure = !1),
        (zy.persistent = !0),
        (zy.getSource = function () {
            return this._source;
        });
    var Ry = {
            arrayRows_column: {
                pure: !0,
                count: function () {
                    return Math.max(0, this._data.length - this._source.startIndex);
                },
                getItem: function (t) {
                    return this._data[t + this._source.startIndex];
                },
                appendData: Ls,
            },
            arrayRows_row: {
                pure: !0,
                count: function () {
                    var t = this._data[0];
                    return t ? Math.max(0, t.length - this._source.startIndex) : 0;
                },
                getItem: function (t) {
                    t += this._source.startIndex;
                    for (var e = [], n = this._data, i = 0; i < n.length; i++) {
                        var r = n[i];
                        e.push(r ? r[t] : null);
                    }
                    return e;
                },
                appendData: function () {
                    throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
                },
            },
            objectRows: { pure: !0, count: ks, getItem: Ps, appendData: Ls },
            keyedColumns: {
                pure: !0,
                count: function () {
                    var t = this._source.dimensionsDefine[0].name,
                        e = this._data[t];
                    return e ? e.length : 0;
                },
                getItem: function (t) {
                    for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
                        var r = this._data[n[i].name];
                        e.push(r ? r[t] : null);
                    }
                    return e;
                },
                appendData: function (t) {
                    var e = this._data;
                    f(t, function (t, n) {
                        for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r]);
                    });
                },
            },
            original: { count: ks, getItem: Ps, appendData: Ls },
            typedArray: {
                persistent: !1,
                pure: !0,
                count: function () {
                    return this._data ? this._data.length / this._dimSize : 0;
                },
                getItem: function (t, e) {
                    (t -= this._offset), (e = e || []);
                    for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
                    return e;
                },
                appendData: function (t) {
                    this._data = t;
                },
                clean: function () {
                    (this._offset += this.count()), (this._data = null);
                },
            },
        },
        Ny = {
            arrayRows: Os,
            objectRows: function (t, e, n, i) {
                return null != n ? t[i] : t;
            },
            keyedColumns: Os,
            original: function (t, e, n) {
                var i = Gi(t);
                return null != n && i instanceof Array ? i[n] : i;
            },
            typedArray: Os,
        },
        Fy = {
            arrayRows: Bs,
            objectRows: function (t, e) {
                return Es(t[e], this._dimensionInfos[e]);
            },
            keyedColumns: Bs,
            original: function (t, e, n, i) {
                var r = t && (null == t.value ? t : t.value);
                return !this._rawData.pure && Hi(t) && (this.hasItemOption = !0), Es(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);
            },
            typedArray: function (t, e, n, i) {
                return t[i];
            },
        },
        Vy = /\{@(.+?)\}/g,
        Gy = {
            getDataParams: function (t, e) {
                var n = this.getData(e),
                    i = this.getRawValue(t, e),
                    r = n.getRawIndex(t),
                    a = n.getName(t),
                    o = n.getRawDataItem(t),
                    s = n.getItemVisual(t, "color"),
                    l = n.getItemVisual(t, "borderColor"),
                    h = this.ecModel.getComponent("tooltip"),
                    u = h && h.get("renderMode"),
                    c = Ji(u),
                    d = this.mainType,
                    f = "series" === d,
                    p = n.userOutput;
                return {
                    componentType: d,
                    componentSubType: this.subType,
                    componentIndex: this.componentIndex,
                    seriesType: f ? this.subType : null,
                    seriesIndex: this.seriesIndex,
                    seriesId: f ? this.id : null,
                    seriesName: f ? this.name : null,
                    name: a,
                    dataIndex: r,
                    data: o,
                    dataType: e,
                    value: i,
                    color: s,
                    borderColor: l,
                    dimensionNames: p ? p.dimensionNames : null,
                    encode: p ? p.encode : null,
                    marker: Do({ color: s, renderMode: c }),
                    $vars: ["seriesName", "name", "value"],
                };
            },
            getFormattedLabel: function (t, e, n, i, r) {
                e = e || "normal";
                var a = this.getData(n),
                    o = a.getItemModel(t),
                    s = this.getDataParams(t, n);
                null != i && s.value instanceof Array && (s.value = s.value[i]);
                var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
                if ("function" == typeof l) return (s.status = e), (s.dimensionIndex = i), l(s);
                if ("string" == typeof l) {
                    var h = Co(l, s);
                    return h.replace(Vy, function (e, n) {
                        var i = n.length;
                        return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), zs(a, t, n);
                    });
                }
            },
            getRawValue: function (t, e) {
                return zs(this.getData(e), t);
            },
            formatTooltip: function () {},
        },
        Hy = Fs.prototype;
    Hy.perform = function (t) {
        function e(t) {
            return !(t >= 1) && (t = 1), t;
        }
        var n = this._upstream,
            i = t && t.skip;
        if (this._dirty && n) {
            var r = this.context;
            r.data = r.outputData = n.context.outputData;
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !i && (a = this._plan(this.context));
        var o = e(this._modBy),
            s = this._modDataCount || 0,
            l = e(t && t.modBy),
            h = (t && t.modDataCount) || 0;
        (o !== l || s !== h) && (a = "reset");
        var u;
        (this._dirty || "reset" === a) && ((this._dirty = !1), (u = Gs(this, i))), (this._modBy = l), (this._modDataCount = h);
        var c = t && t.step;
        if (((this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0), this._progress)) {
            var d = this._dueIndex,
                f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!i && (u || f > d)) {
                var p = this._progress;
                if (x(p)) for (var g = 0; g < p.length; g++) Vs(this, p[g], d, f, l, h);
                else Vs(this, p, d, f, l, h);
            }
            this._dueIndex = f;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            this._outputDueEnd = v;
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished();
    };
    var Wy = (function () {
        function t() {
            return n > i ? i++ : null;
        }
        function e() {
            var t = (i % o) * r + Math.ceil(i / o),
                e = i >= n ? null : a > t ? t : i;
            return i++, e;
        }
        var n,
            i,
            r,
            a,
            o,
            s = {
                reset: function (l, h, u, c) {
                    (i = l), (n = h), (r = u), (a = c), (o = Math.ceil(a / r)), (s.next = r > 1 && a > 0 ? e : t);
                },
            };
        return s;
    })();
    (Hy.dirty = function () {
        (this._dirty = !0), this._onDirty && this._onDirty(this.context);
    }),
        (Hy.unfinished = function () {
            return this._progress && this._dueIndex < this._dueEnd;
        }),
        (Hy.pipe = function (t) {
            (this._downstream !== t || this._dirty) && ((this._downstream = t), (t._upstream = this), t.dirty());
        }),
        (Hy.dispose = function () {
            this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), (this._dirty = !1), (this._disposed = !0));
        }),
        (Hy.getUpstream = function () {
            return this._upstream;
        }),
        (Hy.getDownstream = function () {
            return this._downstream;
        }),
        (Hy.setOutputEnd = function (t) {
            this._outputDueEnd = this._settedOutputEnd = t;
        });
    var Xy = ji(),
        Uy = ry.extend({
            type: "series.__base__",
            seriesIndex: 0,
            coordinateSystem: null,
            defaultOption: null,
            legendDataProvider: null,
            visualColorAccessPath: "itemStyle.color",
            visualBorderColorAccessPath: "itemStyle.borderColor",
            layoutMode: null,
            init: function (t, e, n) {
                (this.seriesIndex = this.componentIndex), (this.dataTask = Ns({ count: Xs, reset: Us })), (this.dataTask.context = { model: this }), this.mergeDefaultAndTheme(t, n), qo(this);
                var i = this.getInitialData(t, n);
                qs(i, this), (this.dataTask.context.data = i), (Xy(this).dataBeforeProcessed = i), Hs(this);
            },
            mergeDefaultAndTheme: function (t, e) {
                var n = this.layoutMode,
                    i = n ? Ro(t) : {},
                    a = this.subType;
                ry.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), Vi(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && zo(t, i, n);
            },
            mergeOption: function (t, e) {
                (t = r(this.option, t, !0)), this.fillDataTextStyle(t.data);
                var n = this.layoutMode;
                n && zo(this.option, t, n), qo(this);
                var i = this.getInitialData(t, e);
                qs(i, this), this.dataTask.dirty(), (this.dataTask.context.data = i), (Xy(this).dataBeforeProcessed = i), Hs(this);
            },
            fillDataTextStyle: function (t) {
                if (t && !I(t)) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && Vi(t[n], "label", e);
            },
            getInitialData: function () {},
            appendData: function (t) {
                var e = this.getRawData();
                e.appendData(t.data);
            },
            getData: function (t) {
                var e = Zs(this);
                if (e) {
                    var n = e.context.data;
                    return null == t ? n : n.getLinkedData(t);
                }
                return Xy(this).data;
            },
            setData: function (t) {
                var e = Zs(this);
                if (e) {
                    var n = e.context;
                    n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), (n.outputData = t), e !== this.dataTask && (n.data = t);
                }
                Xy(this).data = t;
            },
            getSource: function () {
                return Uo(this);
            },
            getRawData: function () {
                return Xy(this).dataBeforeProcessed;
            },
            getBaseAxis: function () {
                var t = this.coordinateSystem;
                return t && t.getBaseAxis && t.getBaseAxis();
            },
            formatTooltip: function (t, e, n, i) {
                function r(n) {
                    function r(t, n) {
                        var r = c.getDimensionInfo(n);
                        if (r && r.otherDims.tooltip !== !1) {
                            var d = r.type,
                                f = "sub" + o.seriesIndex + "at" + u,
                                p = Do({ color: y, type: "subItem", renderMode: i, markerId: f }),
                                g = "string" == typeof p ? p : p.content,
                                v = (a ? g + Io(r.displayName || "-") + ": " : "") + Io("ordinal" === d ? t + "" : "time" === d ? (e ? "" : ko("yyyy/MM/dd hh:mm:ss", t)) : So(t));
                            v && s.push(v), l && ((h[f] = y), ++u);
                        }
                    }
                    var a = g(
                            n,
                            function (t, e, n) {
                                var i = c.getDimensionInfo(n);
                                return (t |= i && i.tooltip !== !1 && null != i.displayName);
                            },
                            0
                        ),
                        s = [];
                    d.length
                        ? f(d, function (e) {
                              r(zs(c, t, e), e);
                          })
                        : f(n, r);
                    var p = a ? (l ? "\n" : "<br/>") : "",
                        v = p + s.join(p || ", ");
                    return { renderMode: i, content: v, style: h };
                }
                function a(t) {
                    return { renderMode: i, content: Io(So(t)), style: h };
                }
                var o = this;
                i = i || "html";
                var s = "html" === i ? "<br/>" : "\n",
                    l = "richText" === i,
                    h = {},
                    u = 0,
                    c = this.getData(),
                    d = c.mapDimension("defaultedTooltip", !0),
                    p = d.length,
                    v = this.getRawValue(t),
                    m = x(v),
                    y = c.getItemVisual(t, "color");
                S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), (y = y || "transparent");
                var _ = p > 1 || (m && !p) ? r(v) : a(p ? zs(c, t, d[0]) : m ? v[0] : v),
                    w = _.content,
                    b = o.seriesIndex + "at" + u,
                    M = Do({ color: y, type: "item", renderMode: i, markerId: b });
                (h[b] = y), ++u;
                var I = c.getName(t),
                    C = this.name;
                Ui(this) || (C = ""), (C = C ? Io(C) + (e ? ": " : s) : "");
                var T = "string" == typeof M ? M : M.content,
                    D = e ? T + C + w : C + T + (I ? Io(I) + ": " + w : w);
                return { html: D, markers: h };
            },
            isAnimationEnabled: function () {
                if (Sf.node) return !1;
                var t = this.getShallow("animation");
                return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t;
            },
            restoreData: function () {
                this.dataTask.dirty();
            },
            getColorFromPalette: function (t, e, n) {
                var i = this.ecModel,
                    r = ly.getColorFromPalette.call(this, t, e, n);
                return r || (r = i.getColorFromPalette(t, e, n)), r;
            },
            coordDimToDataDim: function (t) {
                return this.getRawData().mapDimension(t, !0);
            },
            getProgressive: function () {
                return this.get("progressive");
            },
            getProgressiveThreshold: function () {
                return this.get("progressiveThreshold");
            },
            getAxisTooltipData: null,
            getTooltipPosition: null,
            pipeTask: null,
            preventIncremental: null,
            pipelineContext: null,
        });
    c(Uy, Gy), c(Uy, ly);
    var Yy = function () {
        (this.group = new zp()), (this.uid = eo("viewComponent"));
    };
    Yy.prototype = { constructor: Yy, init: function () {}, render: function () {}, dispose: function () {}, filterForExposedEvent: null };
    var qy = Yy.prototype;
    (qy.updateView = qy.updateLayout = qy.updateVisual = function () {}), nr(Yy), or(Yy, { registerWhenExtend: !0 });
    var jy = function () {
            var t = ji();
            return function (e) {
                var n = t(e),
                    i = e.pipelineContext,
                    r = n.large,
                    a = n.progressiveRender,
                    o = (n.large = i.large),
                    s = (n.progressiveRender = i.progressiveRender);
                return !!(r ^ o || a ^ s) && "reset";
            };
        },
        Zy = ji(),
        Ky = jy();
    Ks.prototype = {
        type: "chart",
        init: function () {},
        render: function () {},
        highlight: function (t, e, n, i) {
            Qs(t.getData(), i, "emphasis");
        },
        downplay: function (t, e, n, i) {
            Qs(t.getData(), i, "normal");
        },
        remove: function () {
            this.group.removeAll();
        },
        dispose: function () {},
        incrementalPrepareRender: null,
        incrementalRender: null,
        updateTransform: null,
        filterForExposedEvent: null,
    };
    var $y = Ks.prototype;
    ($y.updateView = $y.updateLayout = $y.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i);
    }),
        nr(Ks, ["dispose"]),
        or(Ks, { registerWhenExtend: !0 }),
        (Ks.markUpdateMethod = function (t, e) {
            Zy(t).updateMethod = e;
        });
    var Qy = {
            incrementalPrepareRender: {
                progress: function (t, e) {
                    e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
                },
            },
            render: {
                forceFirstProgress: !0,
                progress: function (t, e) {
                    e.view.render(e.model, e.ecModel, e.api, e.payload);
                },
            },
        },
        Jy = "\x00__throttleOriginMethod",
        t_ = "\x00__throttleRate",
        e_ = "\x00__throttleType",
        n_ = {
            createOnAllSeries: !0,
            performRawSeries: !0,
            reset: function (t, e) {
                var n = t.getData(),
                    i = (t.visualColorAccessPath || "itemStyle.color").split("."),
                    r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
                n.setVisual("color", r);
                var a = (t.visualBorderColorAccessPath || "itemStyle.borderColor").split("."),
                    o = t.get(a);
                if ((n.setVisual("borderColor", o), !e.isSeriesFiltered(t))) {
                    "function" != typeof r ||
                        r instanceof gm ||
                        n.each(function (e) {
                            n.setItemVisual(e, "color", r(t.getDataParams(e)));
                        });
                    var s = function (t, e) {
                        var n = t.getItemModel(e),
                            r = n.get(i, !0),
                            o = n.get(a, !0);
                        null != r && t.setItemVisual(e, "color", r), null != o && t.setItemVisual(e, "borderColor", o);
                    };
                    return { dataEach: n.hasItemOption ? s : null };
                }
            },
        },
        i_ = {
            legend: { selector: { all: "全选", inverse: "反选" } },
            toolbox: {
                brush: { title: { rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择" } },
                dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] },
                dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } },
                magicType: { title: { line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺" } },
                restore: { title: "还原" },
                saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] },
            },
            series: {
                typeNames: {
                    pie: "饼图",
                    bar: "柱状图",
                    line: "折线图",
                    scatter: "散点图",
                    effectScatter: "涟漪散点图",
                    radar: "雷达图",
                    tree: "树图",
                    treemap: "矩形树图",
                    boxplot: "箱型图",
                    candlestick: "K线图",
                    k: "K线图",
                    heatmap: "热力图",
                    map: "地图",
                    parallel: "平行坐标图",
                    lines: "线图",
                    graph: "关系图",
                    sankey: "桑基图",
                    funnel: "漏斗图",
                    gauge: "仪表盘图",
                    pictorialBar: "象形柱图",
                    themeRiver: "主题河流图",
                    sunburst: "旭日图",
                },
            },
            aria: {
                general: { withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，" },
                series: {
                    single: { prefix: "", withName: "图表类型是{seriesType}，表示{seriesName}。", withoutName: "图表类型是{seriesType}。" },
                    multiple: {
                        prefix: "它由{seriesCount}个图表系列组成。",
                        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                        withoutName: "第{seriesId}个系列是一个{seriesType}，",
                        separator: { middle: "；", end: "。" },
                    },
                },
                data: { allData: "其数据是——", partialData: "其中，前{displayCnt}项是——", withName: "{name}的数据是{value}", withoutName: "{value}", separator: { middle: "，", end: "" } },
            },
        },
        r_ = function (t, e) {
            function n(t, e) {
                if ("string" != typeof t) return t;
                var n = t;
                return (
                    f(e, function (t, e) {
                        n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
                    }),
                    n
                );
            }
            function i(t) {
                var e = o.get(t);
                if (null == e) {
                    for (var n = t.split("."), i = i_.aria, r = 0; r < n.length; ++r) i = i[n[r]];
                    return i;
                }
                return e;
            }
            function r() {
                var t = e.getModel("title").option;
                return t && t.length && (t = t[0]), t && t.text;
            }
            function a(t) {
                return i_.series.typeNames[t] || "自定义图";
            }
            var o = e.getModel("aria");
            if (o.get("show")) {
                if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
                var s = 0;
                e.eachSeries(function () {
                    ++s;
                }, this);
                var l,
                    h = o.get("data.maxCount") || 10,
                    u = o.get("series.maxCount") || 10,
                    c = Math.min(s, u);
                if (!(1 > s)) {
                    var d = r();
                    l = d ? n(i("general.withTitle"), { title: d }) : i("general.withoutTitle");
                    var p = [],
                        g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
                    (l += n(i(g), { seriesCount: s })),
                        e.eachSeries(function (t, e) {
                            if (c > e) {
                                var r,
                                    o = t.get("name"),
                                    l = "series." + (s > 1 ? "multiple" : "single") + ".";
                                (r = i(o ? l + "withName" : l + "withoutName")), (r = n(r, { seriesId: t.seriesIndex, seriesName: t.get("name"), seriesType: a(t.subType) }));
                                var u = t.getData();
                                (window.data = u), (r += u.count() > h ? n(i("data.partialData"), { displayCnt: h }) : i("data.allData"));
                                for (var d = [], f = 0; f < u.count(); f++)
                                    if (h > f) {
                                        var g = u.getName(f),
                                            v = zs(u, f);
                                        d.push(n(i(g ? "data.withName" : "data.withoutName"), { name: g, value: v }));
                                    }
                                (r += d.join(i("data.separator.middle")) + i("data.separator.end")), p.push(r);
                            }
                        }),
                        (l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end")),
                        t.setAttribute("aria-label", l);
                }
            }
        },
        a_ = Math.PI,
        o_ = function (t, e) {
            (e = e || {}), s(e, { text: "loading", color: "#c23531", textColor: "#000", maskColor: "rgba(255, 255, 255, 0.8)", zlevel: 0 });
            var n = new lm({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 }),
                i = new fm({ shape: { startAngle: -a_ / 2, endAngle: -a_ / 2 + 0.1, r: 10 }, style: { stroke: e.color, lineCap: "round", lineWidth: 5 }, zlevel: e.zlevel, z: 10001 }),
                r = new lm({ style: { fill: "none", text: e.text, textPosition: "right", textDistance: 10, textFill: e.textColor }, zlevel: e.zlevel, z: 10001 });
            i
                .animateShape(!0)
                .when(1e3, { endAngle: (3 * a_) / 2 })
                .start("circularInOut"),
                i
                    .animateShape(!0)
                    .when(1e3, { startAngle: (3 * a_) / 2 })
                    .delay(300)
                    .start("circularInOut");
            var a = new zp();
            return (
                a.add(i),
                a.add(r),
                a.add(n),
                (a.resize = function () {
                    var e = t.getWidth() / 2,
                        a = t.getHeight() / 2;
                    i.setShape({ cx: e, cy: a });
                    var o = i.shape.r;
                    r.setShape({ x: e - o, y: a - o, width: 2 * o, height: 2 * o }), n.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });
                }),
                a.resize(),
                a
            );
        },
        s_ = il.prototype;
    (s_.restoreData = function (t, e) {
        t.restoreData(e),
            this._stageTaskMap.each(function (t) {
                var e = t.overallTask;
                e && e.dirty();
            });
    }),
        (s_.getPerformArgs = function (t, e) {
            if (t.__pipeline) {
                var n = this._pipelineMap.get(t.__pipeline.id),
                    i = n.context,
                    r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
                    a = r ? n.step : null,
                    o = i && i.modDataCount,
                    s = null != o ? Math.ceil(o / a) : null;
                return { step: a, modBy: s, modDataCount: o };
            }
        }),
        (s_.getPipeline = function (t) {
            return this._pipelineMap.get(t);
        }),
        (s_.updateStreamModes = function (t, e) {
            var n = this._pipelineMap.get(t.uid),
                i = t.getData(),
                r = i.count(),
                a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
                o = t.get("large") && r >= t.get("largeThreshold"),
                s = "mod" === t.get("progressiveChunkMode") ? r : null;
            t.pipelineContext = n.context = { progressiveRender: a, modDataCount: s, large: o };
        }),
        (s_.restorePipelines = function (t) {
            var e = this,
                n = (e._pipelineMap = N());
            t.eachSeries(function (t) {
                var i = t.getProgressive(),
                    r = t.uid;
                n.set(r, { id: r, head: null, tail: null, threshold: t.getProgressiveThreshold(), progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()), blockIndex: -1, step: Math.round(i || 700), count: 0 }),
                    gl(e, t, t.dataTask);
            });
        }),
        (s_.prepareStageTasks = function () {
            var t = this._stageTaskMap,
                e = this.ecInstance.getModel(),
                n = this.api;
            f(
                this._allHandlers,
                function (i) {
                    var r = t.get(i.uid) || t.set(i.uid, []);
                    i.reset && al(this, i, r, e, n), i.overallReset && ol(this, i, r, e, n);
                },
                this
            );
        }),
        (s_.prepareView = function (t, e, n, i) {
            var r = t.renderTask,
                a = r.context;
            (a.model = e), (a.ecModel = n), (a.api = i), (r.__block = !t.incrementalPrepareRender), gl(this, e, r);
        }),
        (s_.performDataProcessorTasks = function (t, e) {
            rl(this, this._dataProcessorHandlers, t, e, { block: !0 });
        }),
        (s_.performVisualTasks = function (t, e, n) {
            rl(this, this._visualHandlers, t, e, n);
        }),
        (s_.performSeriesTasks = function (t) {
            var e;
            t.eachSeries(function (t) {
                e |= t.dataTask.perform();
            }),
                (this.unfinished |= e);
        }),
        (s_.plan = function () {
            this._pipelineMap.each(function (t) {
                var e = t.tail;
                do {
                    if (e.__block) {
                        t.blockIndex = e.__idxInPipeline;
                        break;
                    }
                    e = e.getUpstream();
                } while (e);
            });
        });
    var l_ = (s_.updatePayload = function (t, e) {
            "remain" !== e && (t.context.payload = e);
        }),
        h_ = fl(0);
    il.wrapStageHandler = function (t, e) {
        return w(t) && (t = { overallReset: t, seriesType: vl(t) }), (t.uid = eo("stageHandler")), e && (t.visualType = e), t;
    };
    var u_,
        c_ = {},
        d_ = {};
    ml(c_, xy),
        ml(d_, hs),
        (c_.eachSeriesByType = c_.eachRawSeriesByType = function (t) {
            u_ = t;
        }),
        (c_.eachComponent = function (t) {
            "series" === t.mainType && t.subType && (u_ = t.subType);
        });
    var f_ = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        p_ = {
            color: f_,
            colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], f_],
        },
        g_ = "#eee",
        v_ = function () {
            return {
                axisLine: { lineStyle: { color: g_ } },
                axisTick: { lineStyle: { color: g_ } },
                axisLabel: { textStyle: { color: g_ } },
                splitLine: { lineStyle: { type: "dashed", color: "#aaa" } },
                splitArea: { areaStyle: { color: g_ } },
            };
        },
        m_ = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
        y_ = {
            color: m_,
            backgroundColor: "#333",
            tooltip: { axisPointer: { lineStyle: { color: g_ }, crossStyle: { color: g_ } } },
            legend: { textStyle: { color: g_ } },
            textStyle: { color: g_ },
            title: { textStyle: { color: g_ } },
            toolbox: { iconStyle: { normal: { borderColor: g_ } } },
            dataZoom: { textStyle: { color: g_ } },
            visualMap: { textStyle: { color: g_ } },
            timeline: { lineStyle: { color: g_ }, itemStyle: { normal: { color: m_[1] } }, label: { normal: { textStyle: { color: g_ } } }, controlStyle: { normal: { color: g_, borderColor: g_ } } },
            timeAxis: v_(),
            logAxis: v_(),
            valueAxis: v_(),
            categoryAxis: v_(),
            line: { symbol: "circle" },
            graph: { color: m_ },
            gauge: { title: { textStyle: { color: g_ } } },
            candlestick: { itemStyle: { normal: { color: "#FD1050", color0: "#0CF49B", borderColor: "#FD1050", borderColor0: "#0CF49B" } } },
        };
    (y_.categoryAxis.splitLine.show = !1),
        ry.extend({
            type: "dataset",
            defaultOption: { seriesLayoutBy: vy, sourceHeader: null, dimensions: null, source: null },
            optionUpdated: function () {
                Xo(this);
            },
        }),
        Yy.extend({ type: "dataset" });
    var __ = Vr.extend({
            type: "ellipse",
            shape: { cx: 0, cy: 0, rx: 0, ry: 0 },
            buildPath: function (t, e) {
                var n = 0.5522848,
                    i = e.cx,
                    r = e.cy,
                    a = e.rx,
                    o = e.ry,
                    s = a * n,
                    l = o * n;
                t.moveTo(i - a, r),
                    t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o),
                    t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r),
                    t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o),
                    t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r),
                    t.closePath();
            },
        }),
        x_ = /[\s,]+/;
    (_l.prototype.parse = function (t, e) {
        e = e || {};
        var n = yl(t);
        if (!n) throw new Error("Illegal svg");
        var i = new zp();
        this._root = i;
        var r = n.getAttribute("viewBox") || "",
            a = parseFloat(n.getAttribute("width") || e.width),
            o = parseFloat(n.getAttribute("height") || e.height);
        isNaN(a) && (a = null), isNaN(o) && (o = null), Sl(n, i, null, !0);
        for (var s = n.firstChild; s; ) this._parseNode(s, i), (s = s.nextSibling);
        var l, h;
        if (r) {
            var u = B(r).split(x_);
            u.length >= 4 && (l = { x: parseFloat(u[0] || 0), y: parseFloat(u[1] || 0), width: parseFloat(u[2]), height: parseFloat(u[3]) });
        }
        if (l && null != a && null != o && ((h = Tl(l, a, o)), !e.ignoreViewBox)) {
            var c = i;
            (i = new zp()), i.add(c), (c.scale = h.scale.slice()), (c.position = h.position.slice());
        }
        return e.ignoreRootClip || null == a || null == o || i.setClipPath(new lm({ shape: { x: 0, y: 0, width: a, height: o } })), { root: i, width: a, height: o, viewBoxRect: l, viewBoxTransform: h };
    }),
        (_l.prototype._parseNode = function (t, e) {
            var n = t.nodeName.toLowerCase();
            "defs" === n ? (this._isDefine = !0) : "text" === n && (this._isText = !0);
            var i;
            if (this._isDefine) {
                var r = b_[n];
                if (r) {
                    var a = r.call(this, t),
                        o = t.getAttribute("id");
                    o && (this._defs[o] = a);
                }
            } else {
                var r = w_[n];
                r && ((i = r.call(this, t, e)), e.add(i));
            }
            for (var s = t.firstChild; s; ) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), (s = s.nextSibling);
            "defs" === n ? (this._isDefine = !1) : "text" === n && (this._isText = !1);
        }),
        (_l.prototype._parseText = function (t, e) {
            if (1 === t.nodeType) {
                var n = t.getAttribute("dx") || 0,
                    i = t.getAttribute("dy") || 0;
                (this._textX += parseFloat(n)), (this._textY += parseFloat(i));
            }
            var r = new Kv({ style: { text: t.textContent, transformText: !0 }, position: [this._textX || 0, this._textY || 0] });
            wl(e, r), Sl(t, r, this._defs);
            var a = r.style.fontSize;
            a && 9 > a && ((r.style.fontSize = 9), (r.scale = r.scale || [1, 1]), (r.scale[0] *= a / 9), (r.scale[1] *= a / 9));
            var o = r.getBoundingRect();
            return (this._textX += o.width), e.add(r), r;
        });
    var w_ = {
            g: function (t, e) {
                var n = new zp();
                return wl(e, n), Sl(t, n, this._defs), n;
            },
            rect: function (t, e) {
                var n = new lm();
                return (
                    wl(e, n),
                    Sl(t, n, this._defs),
                    n.setShape({ x: parseFloat(t.getAttribute("x") || 0), y: parseFloat(t.getAttribute("y") || 0), width: parseFloat(t.getAttribute("width") || 0), height: parseFloat(t.getAttribute("height") || 0) }),
                    n
                );
            },
            circle: function (t, e) {
                var n = new $v();
                return wl(e, n), Sl(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), r: parseFloat(t.getAttribute("r") || 0) }), n;
            },
            line: function (t, e) {
                var n = new um();
                return (
                    wl(e, n),
                    Sl(t, n, this._defs),
                    n.setShape({ x1: parseFloat(t.getAttribute("x1") || 0), y1: parseFloat(t.getAttribute("y1") || 0), x2: parseFloat(t.getAttribute("x2") || 0), y2: parseFloat(t.getAttribute("y2") || 0) }),
                    n
                );
            },
            ellipse: function (t, e) {
                var n = new __();
                return (
                    wl(e, n),
                    Sl(t, n, this._defs),
                    n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), rx: parseFloat(t.getAttribute("rx") || 0), ry: parseFloat(t.getAttribute("ry") || 0) }),
                    n
                );
            },
            polygon: function (t, e) {
                var n = t.getAttribute("points");
                n && (n = bl(n));
                var i = new rm({ shape: { points: n || [] } });
                return wl(e, i), Sl(t, i, this._defs), i;
            },
            polyline: function (t, e) {
                var n = new Vr();
                wl(e, n), Sl(t, n, this._defs);
                var i = t.getAttribute("points");
                i && (i = bl(i));
                var r = new am({ shape: { points: i || [] } });
                return r;
            },
            image: function (t, e) {
                var n = new bi();
                return wl(e, n), Sl(t, n, this._defs), n.setStyle({ image: t.getAttribute("xlink:href"), x: t.getAttribute("x"), y: t.getAttribute("y"), width: t.getAttribute("width"), height: t.getAttribute("height") }), n;
            },
            text: function (t, e) {
                var n = t.getAttribute("x") || 0,
                    i = t.getAttribute("y") || 0,
                    r = t.getAttribute("dx") || 0,
                    a = t.getAttribute("dy") || 0;
                (this._textX = parseFloat(n) + parseFloat(r)), (this._textY = parseFloat(i) + parseFloat(a));
                var o = new zp();
                return wl(e, o), Sl(t, o, this._defs), o;
            },
            tspan: function (t, e) {
                var n = t.getAttribute("x"),
                    i = t.getAttribute("y");
                null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
                var r = t.getAttribute("dx") || 0,
                    a = t.getAttribute("dy") || 0,
                    o = new zp();
                return wl(e, o), Sl(t, o, this._defs), (this._textX += r), (this._textY += a), o;
            },
            path: function (t, e) {
                var n = t.getAttribute("d") || "",
                    i = Xr(n);
                return wl(e, i), Sl(t, i, this._defs), i;
            },
        },
        b_ = {
            lineargradient: function (t) {
                var e = parseInt(t.getAttribute("x1") || 0, 10),
                    n = parseInt(t.getAttribute("y1") || 0, 10),
                    i = parseInt(t.getAttribute("x2") || 10, 10),
                    r = parseInt(t.getAttribute("y2") || 0, 10),
                    a = new vm(e, n, i, r);
                return xl(t, a), a;
            },
            radialgradient: function () {},
        },
        S_ = {
            fill: "fill",
            stroke: "stroke",
            "stroke-width": "lineWidth",
            opacity: "opacity",
            "fill-opacity": "fillOpacity",
            "stroke-opacity": "strokeOpacity",
            "stroke-dasharray": "lineDash",
            "stroke-dashoffset": "lineDashOffset",
            "stroke-linecap": "lineCap",
            "stroke-linejoin": "lineJoin",
            "stroke-miterlimit": "miterLimit",
            "font-family": "fontFamily",
            "font-size": "fontSize",
            "font-style": "fontStyle",
            "font-weight": "fontWeight",
            "text-align": "textAlign",
            "alignment-baseline": "textBaseline",
        },
        M_ = /url\(\s*#(.*?)\)/,
        I_ = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
        C_ = /([^\s:;]+)\s*:\s*([^:;]+)/g,
        T_ = N(),
        D_ = {
            registerMap: function (t, e, n) {
                var i;
                return (
                    x(e)
                        ? (i = e)
                        : e.svg
                        ? (i = [{ type: "svg", source: e.svg, specialAreas: e.specialAreas }])
                        : (e.geoJson && !e.features && ((n = e.specialAreas), (e = e.geoJson)), (i = [{ type: "geoJSON", source: e, specialAreas: n }])),
                    f(i, function (t) {
                        var e = t.type;
                        "geoJson" === e && (e = t.type = "geoJSON");
                        var n = A_[e];
                        n(t);
                    }),
                    T_.set(t, i)
                );
            },
            retrieveMap: function (t) {
                return T_.get(t);
            },
        },
        A_ = {
            geoJSON: function (t) {
                var e = t.source;
                t.geoJSON = b(e) ? ("undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()) : e;
            },
            svg: function (t) {
                t.svgXML = yl(t.source);
            },
        },
        k_ = O,
        P_ = f,
        L_ = w,
        O_ = S,
        B_ = ry.parseClassType,
        E_ = "4.5.0",
        z_ = { zrender: "4.1.2" },
        R_ = 1,
        N_ = 1e3,
        F_ = 800,
        V_ = 900,
        G_ = 5e3,
        H_ = 1e3,
        W_ = 1100,
        X_ = 2e3,
        U_ = 3e3,
        Y_ = 3500,
        q_ = 4e3,
        j_ = 5e3,
        Z_ = { PROCESSOR: { FILTER: N_, SERIES_FILTER: F_, STATISTIC: G_ }, VISUAL: { LAYOUT: H_, PROGRESSIVE_LAYOUT: W_, GLOBAL: X_, CHART: U_, POST_CHART_LAYOUT: Y_, COMPONENT: q_, BRUSH: j_ } },
        K_ = "__flagInMainProcess",
        $_ = "__optionUpdated",
        Q_ = /^[a-zA-Z0-9_]+$/;
    (Al.prototype.on = Dl("on", !0)), (Al.prototype.off = Dl("off", !0)), (Al.prototype.one = Dl("one", !0)), c(Al, Uf);
    var J_ = kl.prototype;
    (J_._onframe = function () {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[$_]) {
                var e = this[$_].silent;
                (this[K_] = !0), Ll(this), tx.update.call(this), (this[K_] = !1), (this[$_] = !1), zl.call(this, e), Rl.call(this, e);
            } else if (t.unfinished) {
                var n = R_,
                    i = this._model,
                    r = this._api;
                t.unfinished = !1;
                do {
                    var a = +new Date();
                    t.performSeriesTasks(i), t.performDataProcessorTasks(i), Bl(this, i), t.performVisualTasks(i), Wl(this, this._model, r, "remain"), (n -= +new Date() - a);
                } while (n > 0 && t.unfinished);
                t.unfinished || this._zr.flush();
            }
        }
    }),
        (J_.getDom = function () {
            return this._dom;
        }),
        (J_.getZr = function () {
            return this._zr;
        }),
        (J_.setOption = function (t, e, n) {
            if (!this._disposed) {
                var i;
                if ((O_(e) && ((n = e.lazyUpdate), (i = e.silent), (e = e.notMerge)), (this[K_] = !0), !this._model || e)) {
                    var r = new cs(this._api),
                        a = this._theme,
                        o = (this._model = new xy());
                    (o.scheduler = this._scheduler), o.init(null, null, a, r);
                }
                this._model.setOption(t, ax), n ? ((this[$_] = { silent: i }), (this[K_] = !1)) : (Ll(this), tx.update.call(this), this._zr.flush(), (this[$_] = !1), (this[K_] = !1), zl.call(this, i), Rl.call(this, i));
            }
        }),
        (J_.setTheme = function () {
            console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
        }),
        (J_.getModel = function () {
            return this._model;
        }),
        (J_.getOption = function () {
            return this._model && this._model.getOption();
        }),
        (J_.getWidth = function () {
            return this._zr.getWidth();
        }),
        (J_.getHeight = function () {
            return this._zr.getHeight();
        }),
        (J_.getDevicePixelRatio = function () {
            return this._zr.painter.dpr || window.devicePixelRatio || 1;
        }),
        (J_.getRenderedCanvas = function (t) {
            if (Sf.canvasSupported) {
                (t = t || {}), (t.pixelRatio = t.pixelRatio || 1), (t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"));
                var e = this._zr;
                return e.painter.getRenderedCanvas(t);
            }
        }),
        (J_.getSvgDataUrl = function () {
            if (Sf.svgSupported) {
                var t = this._zr,
                    e = t.storage.getDisplayList();
                return (
                    f(e, function (t) {
                        t.stopAnimation(!0);
                    }),
                    t.painter.pathToDataUrl()
                );
            }
        }),
        (J_.getDataURL = function (t) {
            if (!this._disposed) {
                t = t || {};
                var e = t.excludeComponents,
                    n = this._model,
                    i = [],
                    r = this;
                P_(e, function (t) {
                    n.eachComponent({ mainType: t }, function (t) {
                        var e = r._componentsMap[t.__viewId];
                        e.group.ignore || (i.push(e), (e.group.ignore = !0));
                    });
                });
                var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + ((t && t.type) || "png"));
                return (
                    P_(i, function (t) {
                        t.group.ignore = !1;
                    }),
                    a
                );
            }
        }),
        (J_.getConnectedDataURL = function (t) {
            if (!this._disposed && Sf.canvasSupported) {
                var e = this.group,
                    n = Math.min,
                    r = Math.max,
                    a = 1 / 0;
                if (cx[e]) {
                    var o = a,
                        s = a,
                        l = -a,
                        h = -a,
                        u = [],
                        c = (t && t.pixelRatio) || 1;
                    f(ux, function (a) {
                        if (a.group === e) {
                            var c = a.getRenderedCanvas(i(t)),
                                d = a.getDom().getBoundingClientRect();
                            (o = n(d.left, o)), (s = n(d.top, s)), (l = r(d.right, l)), (h = r(d.bottom, h)), u.push({ dom: c, left: d.left, top: d.top });
                        }
                    }),
                        (o *= c),
                        (s *= c),
                        (l *= c),
                        (h *= c);
                    var d = l - o,
                        p = h - s,
                        g = Bf();
                    (g.width = d), (g.height = p);
                    var v = Bi(g);
                    return (
                        t.connectedBackgroundColor && v.add(new lm({ shape: { x: 0, y: 0, width: d, height: p }, style: { fill: t.connectedBackgroundColor } })),
                        P_(u, function (t) {
                            var e = new bi({ style: { x: t.left * c - o, y: t.top * c - s, image: t.dom } });
                            v.add(e);
                        }),
                        v.refreshImmediately(),
                        g.toDataURL("image/" + ((t && t.type) || "png"))
                    );
                }
                return this.getDataURL(t);
            }
        }),
        (J_.convertToPixel = _(Pl, "convertToPixel")),
        (J_.convertFromPixel = _(Pl, "convertFromPixel")),
        (J_.containPixel = function (t, e) {
            if (!this._disposed) {
                var n,
                    i = this._model;
                return (
                    (t = Zi(i, t)),
                    f(
                        t,
                        function (t, i) {
                            i.indexOf("Models") >= 0 &&
                                f(
                                    t,
                                    function (t) {
                                        var r = t.coordinateSystem;
                                        if (r && r.containPoint) n |= !!r.containPoint(e);
                                        else if ("seriesModels" === i) {
                                            var a = this._chartsMap[t.__viewId];
                                            a && a.containPoint && (n |= a.containPoint(e, t));
                                        }
                                    },
                                    this
                                );
                        },
                        this
                    ),
                    !!n
                );
            }
        }),
        (J_.getVisual = function (t, e) {
            var n = this._model;
            t = Zi(n, t, { defaultMainType: "series" });
            var i = t.seriesModel,
                r = i.getData(),
                a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
            return null != a ? r.getItemVisual(a, e) : r.getVisual(e);
        }),
        (J_.getViewOfComponentModel = function (t) {
            return this._componentsMap[t.__viewId];
        }),
        (J_.getViewOfSeriesModel = function (t) {
            return this._chartsMap[t.__viewId];
        });
    var tx = {
        prepareAndUpdate: function (t) {
            Ll(this), tx.update.call(this, t);
        },
        update: function (t) {
            var e = this._model,
                n = this._api,
                i = this._zr,
                r = this._coordSysMgr,
                a = this._scheduler;
            if (e) {
                a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), Bl(this, e), r.update(e, n), Vl(e), a.performVisualTasks(e, t), Gl(this, e, n, t);
                var o = e.get("backgroundColor") || "transparent";
                if (Sf.canvasSupported) i.setBackgroundColor(o);
                else {
                    var s = je(o);
                    (o = rn(s, "rgb")), 0 === s[3] && (o = "transparent");
                }
                Xl(e, n);
            }
        },
        updateTransform: function (t) {
            var e = this._model,
                n = this,
                i = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function (a, o) {
                    var s = n.getViewOfComponentModel(o);
                    if (s && s.__alive)
                        if (s.updateTransform) {
                            var l = s.updateTransform(o, e, i, t);
                            l && l.update && r.push(s);
                        } else r.push(s);
                });
                var a = N();
                e.eachSeries(function (r) {
                    var o = n._chartsMap[r.__viewId];
                    if (o.updateTransform) {
                        var s = o.updateTransform(r, e, i, t);
                        s && s.update && a.set(r.uid, 1);
                    } else a.set(r.uid, 1);
                }),
                    Vl(e),
                    this._scheduler.performVisualTasks(e, t, { setDirty: !0, dirtyMap: a }),
                    Wl(n, e, i, t, a),
                    Xl(e, this._api);
            }
        },
        updateView: function (t) {
            var e = this._model;
            e && (Ks.markUpdateMethod(t, "updateView"), Vl(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0 }), Gl(this, this._model, this._api, t), Xl(e, this._api));
        },
        updateVisual: function (t) {
            tx.update.call(this, t);
        },
        updateLayout: function (t) {
            tx.update.call(this, t);
        },
    };
    (J_.resize = function (t) {
        if (!this._disposed) {
            this._zr.resize(t);
            var e = this._model;
            if ((this._loadingFX && this._loadingFX.resize(), e)) {
                var n = e.resetOption("media"),
                    i = t && t.silent;
                (this[K_] = !0), n && Ll(this), tx.update.call(this), (this[K_] = !1), zl.call(this, i), Rl.call(this, i);
            }
        }
    }),
        (J_.showLoading = function (t, e) {
            if (!this._disposed && (O_(t) && ((e = t), (t = "")), (t = t || "default"), this.hideLoading(), hx[t])) {
                var n = hx[t](this._api, e),
                    i = this._zr;
                (this._loadingFX = n), i.add(n);
            }
        }),
        (J_.hideLoading = function () {
            this._disposed || (this._loadingFX && this._zr.remove(this._loadingFX), (this._loadingFX = null));
        }),
        (J_.makeActionFromEvent = function (t) {
            var e = o({}, t);
            return (e.type = ix[t.type]), e;
        }),
        (J_.dispatchAction = function (t, e) {
            if (!this._disposed && (O_(e) || (e = { silent: !!e }), nx[t.type] && this._model)) {
                if (this[K_]) return void this._pendingActions.push(t);
                El.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Sf.browser.weChat && this._throttledZrFlush(), zl.call(this, e.silent), Rl.call(this, e.silent);
            }
        }),
        (J_.appendData = function (t) {
            if (!this._disposed) {
                var e = t.seriesIndex,
                    n = this.getModel(),
                    i = n.getSeriesByIndex(e);
                i.appendData(t), (this._scheduler.unfinished = !0);
            }
        }),
        (J_.on = Dl("on", !1)),
        (J_.off = Dl("off", !1)),
        (J_.one = Dl("one", !1));
    var ex = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    (J_._initEvents = function () {
        P_(
            ex,
            function (t) {
                var e = function (e) {
                    var n,
                        i = this.getModel(),
                        r = e.target,
                        a = "globalout" === t;
                    if (a) n = {};
                    else if (r && null != r.dataIndex) {
                        var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                        n = (s && s.getDataParams(r.dataIndex, r.dataType, r)) || {};
                    } else r && r.eventData && (n = o({}, r.eventData));
                    if (n) {
                        var l = n.componentType,
                            h = n.componentIndex;
                        ("markLine" === l || "markPoint" === l || "markArea" === l) && ((l = "series"), (h = n.seriesIndex));
                        var u = l && null != h && i.getComponent(l, h),
                            c = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
                        (n.event = e), (n.type = t), (this._ecEventProcessor.eventInfo = { targetEl: r, packedEvent: n, model: u, view: c }), this.trigger(t, n);
                    }
                };
                (e.zrEventfulCallAtLast = !0), this._zr.on(t, e, this);
            },
            this
        ),
            P_(
                ix,
                function (t, e) {
                    this._messageCenter.on(
                        e,
                        function (t) {
                            this.trigger(e, t);
                        },
                        this
                    );
                },
                this
            );
    }),
        (J_.isDisposed = function () {
            return this._disposed;
        }),
        (J_.clear = function () {
            this._disposed || this.setOption({ series: [] }, !0);
        }),
        (J_.dispose = function () {
            if (!this._disposed) {
                (this._disposed = !0), $i(this.getDom(), px, "");
                var t = this._api,
                    e = this._model;
                P_(this._componentsViews, function (n) {
                    n.dispose(e, t);
                }),
                    P_(this._chartsViews, function (n) {
                        n.dispose(e, t);
                    }),
                    this._zr.dispose(),
                    delete ux[this.id];
            }
        }),
        c(kl, Uf),
        (Zl.prototype = {
            constructor: Zl,
            normalizeQuery: function (t) {
                var e = {},
                    n = {},
                    i = {};
                if (b(t)) {
                    var r = B_(t);
                    (e.mainType = r.main || null), (e.subType = r.sub || null);
                } else {
                    var a = ["Index", "Name", "Id"],
                        o = { name: 1, dataIndex: 1, dataType: 1 };
                    f(t, function (t, r) {
                        for (var s = !1, l = 0; l < a.length; l++) {
                            var h = a[l],
                                u = r.lastIndexOf(h);
                            if (u > 0 && u === r.length - h.length) {
                                var c = r.slice(0, u);
                                "data" !== c && ((e.mainType = c), (e[h.toLowerCase()] = t), (s = !0));
                            }
                        }
                        o.hasOwnProperty(r) && ((n[r] = t), (s = !0)), s || (i[r] = t);
                    });
                }
                return { cptQuery: e, dataQuery: n, otherQuery: i };
            },
            filter: function (t, e) {
                function n(t, e, n, i) {
                    return null == t[n] || e[i || n] === t[n];
                }
                var i = this.eventInfo;
                if (!i) return !0;
                var r = i.targetEl,
                    a = i.packedEvent,
                    o = i.model,
                    s = i.view;
                if (!o || !s) return !0;
                var l = e.cptQuery,
                    h = e.dataQuery;
                return (
                    n(l, o, "mainType") &&
                    n(l, o, "subType") &&
                    n(l, o, "index", "componentIndex") &&
                    n(l, o, "name") &&
                    n(l, o, "id") &&
                    n(h, a, "name") &&
                    n(h, a, "dataIndex") &&
                    n(h, a, "dataType") &&
                    (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a))
                );
            },
            afterTrigger: function () {
                this.eventInfo = null;
            },
        });
    var nx = {},
        ix = {},
        rx = [],
        ax = [],
        ox = [],
        sx = [],
        lx = {},
        hx = {},
        ux = {},
        cx = {},
        dx = new Date() - 0,
        fx = new Date() - 0,
        px = "_echarts_instance_",
        gx = Jl;
    ch(X_, n_), rh(By), ah(V_, Ey), fh("default", o_), sh({ type: "highlight", event: "highlight", update: "highlight" }, V), sh({ type: "downplay", event: "downplay", update: "downplay" }, V), ih("light", p_), ih("dark", y_);
    var vx = {};
    bh.prototype = {
        constructor: bh,
        add: function (t) {
            return (this._add = t), this;
        },
        update: function (t) {
            return (this._update = t), this;
        },
        remove: function (t) {
            return (this._remove = t), this;
        },
        execute: function () {
            var t,
                e = this._old,
                n = this._new,
                i = {},
                r = {},
                a = [],
                o = [];
            for (Sh(e, i, a, "_oldKeyGetter", this), Sh(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
                var s = a[t],
                    l = r[s];
                if (null != l) {
                    var h = l.length;
                    h ? (1 === h && (r[s] = null), (l = l.shift())) : (r[s] = null), this._update && this._update(l, t);
                } else this._remove && this._remove(t);
            }
            for (var t = 0; t < o.length; t++) {
                var s = o[t];
                if (r.hasOwnProperty(s)) {
                    var l = r[s];
                    if (null == l) continue;
                    if (l.length) for (var u = 0, h = l.length; h > u; u++) this._add && this._add(l[u]);
                    else this._add && this._add(l);
                }
            }
        },
    };
    var mx = N(["tooltip", "label", "itemName", "itemId", "seriesName"]),
        yx = S,
        _x = "undefined",
        xx = -1,
        bx = "e\x00\x00",
        Sx = { float: typeof Float64Array === _x ? Array : Float64Array, int: typeof Int32Array === _x ? Array : Int32Array, ordinal: Array, number: Array, time: Array },
        Mx = typeof Uint32Array === _x ? Array : Uint32Array,
        Ix = typeof Int32Array === _x ? Array : Int32Array,
        Cx = typeof Uint16Array === _x ? Array : Uint16Array,
        Tx = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
        Dx = ["_extent", "_approximateExtent", "_rawExtent"],
        Ax = function (t, e) {
            t = t || ["x", "y"];
            for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
                var o = t[a];
                b(o) && (o = { name: o });
                var s = o.name;
                (o.type = o.type || "float"), o.coordDim || ((o.coordDim = s), (o.coordDimIndex = 0)), (o.otherDims = o.otherDims || {}), i.push(s), (n[s] = o), (o.index = a), o.createInvertedIndices && (r[s] = []);
            }
            (this.dimensions = i),
                (this._dimensionInfos = n),
                (this.hostModel = e),
                this.dataType,
                (this._indices = null),
                (this._count = 0),
                (this._rawCount = 0),
                (this._storage = {}),
                (this._nameList = []),
                (this._idList = []),
                (this._optionModels = []),
                (this._visual = {}),
                (this._layout = {}),
                (this._itemVisuals = []),
                (this.hasItemVisual = {}),
                (this._itemLayouts = []),
                (this._graphicEls = []),
                (this._chunkSize = 1e5),
                (this._chunkCount = 0),
                this._rawData,
                (this._rawExtent = {}),
                (this._extent = {}),
                (this._approximateExtent = {}),
                (this._dimensionsSummary = Mh(this)),
                (this._invertedIndicesMap = r),
                (this._calculationInfo = {}),
                (this.userOutput = this._dimensionsSummary.userOutput);
        },
        kx = Ax.prototype;
    (kx.type = "list"),
        (kx.hasItemOption = !0),
        (kx.getDimension = function (t) {
            return ("number" == typeof t || (!isNaN(t) && !this._dimensionInfos.hasOwnProperty(t))) && (t = this.dimensions[t]), t;
        }),
        (kx.getDimensionInfo = function (t) {
            return this._dimensionInfos[this.getDimension(t)];
        }),
        (kx.getDimensionsOnCoord = function () {
            return this._dimensionsSummary.dataDimsOnCoord.slice();
        }),
        (kx.mapDimension = function (t, e) {
            var n = this._dimensionsSummary;
            if (null == e) return n.encodeFirstDimNotExtra[t];
            var i = n.encode[t];
            return e === !0 ? (i || []).slice() : i && i[e];
        }),
        (kx.initData = function (t, e, n) {
            var i = Wo.isInstance(t) || d(t);
            i && (t = new As(t, this.dimensions.length)),
                (this._rawData = t),
                (this._storage = {}),
                (this._indices = null),
                (this._nameList = e || []),
                (this._idList = []),
                (this._nameRepeatCount = {}),
                n || (this.hasItemOption = !1),
                (this.defaultDimValueGetter = Fy[this._rawData.getSource().sourceFormat]),
                (this._dimValueGetter = n = n || this.defaultDimValueGetter),
                (this._dimValueGetterArrayRows = Fy.arrayRows),
                (this._rawExtent = {}),
                this._initDataFromProvider(0, t.count()),
                t.pure && (this.hasItemOption = !1);
        }),
        (kx.getProvider = function () {
            return this._rawData;
        }),
        (kx.appendData = function (t) {
            var e = this._rawData,
                n = this.count();
            e.appendData(t);
            var i = e.count();
            e.persistent || (i += n), this._initDataFromProvider(n, i);
        }),
        (kx.appendValues = function (t, e) {
            for (var n = this._chunkSize, i = this._storage, r = this.dimensions, a = r.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), h = this._chunkCount, u = 0; a > u; u++) {
                var c = r[u];
                o[c] || (o[c] = Vh()), i[c] || (i[c] = []), Ph(i, this._dimensionInfos[c], n, h, l), (this._chunkCount = i[c].length);
            }
            for (var d = new Array(a), f = s; l > f; f++) {
                for (var p = f - s, g = Math.floor(f / n), v = f % n, m = 0; a > m; m++) {
                    var c = r[m],
                        y = this._dimValueGetterArrayRows(t[p] || d, c, p, m);
                    i[c][g][v] = y;
                    var _ = o[c];
                    y < _[0] && (_[0] = y), y > _[1] && (_[1] = y);
                }
                e && (this._nameList[f] = e[p]);
            }
            (this._rawCount = this._count = l), (this._extent = {}), Lh(this);
        }),
        (kx._initDataFromProvider = function (t, e) {
            if (!(t >= e)) {
                for (
                    var n,
                        i = this._chunkSize,
                        r = this._rawData,
                        a = this._storage,
                        o = this.dimensions,
                        s = o.length,
                        l = this._dimensionInfos,
                        h = this._nameList,
                        u = this._idList,
                        c = this._rawExtent,
                        d = (this._nameRepeatCount = {}),
                        f = this._chunkCount,
                        p = 0;
                    s > p;
                    p++
                ) {
                    var g = o[p];
                    c[g] || (c[g] = Vh());
                    var v = l[g];
                    0 === v.otherDims.itemName && (n = this._nameDimIdx = p), 0 === v.otherDims.itemId && (this._idDimIdx = p), a[g] || (a[g] = []), Ph(a, v, i, f, e), (this._chunkCount = a[g].length);
                }
                for (var m = new Array(s), y = t; e > y; y++) {
                    m = r.getItem(y, m);
                    for (var _ = Math.floor(y / i), x = y % i, w = 0; s > w; w++) {
                        var g = o[w],
                            b = a[g][_],
                            S = this._dimValueGetter(m, g, y, w);
                        b[x] = S;
                        var M = c[g];
                        S < M[0] && (M[0] = S), S > M[1] && (M[1] = S);
                    }
                    if (!r.pure) {
                        var I = h[y];
                        if (m && null == I)
                            if (null != m.name) h[y] = I = m.name;
                            else if (null != n) {
                                var C = o[n],
                                    T = a[C][_];
                                if (T) {
                                    I = T[x];
                                    var D = l[C].ordinalMeta;
                                    D && D.categories.length && (I = D.categories[I]);
                                }
                            }
                        var A = null == m ? null : m.id;
                        null == A && null != I && ((d[I] = d[I] || 0), (A = I), d[I] > 0 && (A += "__ec__" + d[I]), d[I]++), null != A && (u[y] = A);
                    }
                }
                !r.persistent && r.clean && r.clean(), (this._rawCount = this._count = e), (this._extent = {}), Lh(this);
            }
        }),
        (kx.count = function () {
            return this._count;
        }),
        (kx.getIndices = function () {
            var t,
                e = this._indices;
            if (e) {
                var n = e.constructor,
                    i = this._count;
                if (n === Array) {
                    t = new n(i);
                    for (var r = 0; i > r; r++) t[r] = e[r];
                } else t = new n(e.buffer, 0, i);
            } else for (var n = Dh(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;
            return t;
        }),
        (kx.get = function (t, e) {
            if (!(e >= 0 && e < this._count)) return 0 / 0;
            var n = this._storage;
            if (!n[t]) return 0 / 0;
            e = this.getRawIndex(e);
            var i = Math.floor(e / this._chunkSize),
                r = e % this._chunkSize,
                a = n[t][i],
                o = a[r];
            return o;
        }),
        (kx.getByRawIndex = function (t, e) {
            if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
            var n = this._storage[t];
            if (!n) return 0 / 0;
            var i = Math.floor(e / this._chunkSize),
                r = e % this._chunkSize,
                a = n[i];
            return a[r];
        }),
        (kx._getFast = function (t, e) {
            var n = Math.floor(e / this._chunkSize),
                i = e % this._chunkSize,
                r = this._storage[t][n];
            return r[i];
        }),
        (kx.getValues = function (t, e) {
            var n = [];
            x(t) || ((e = t), (t = this.dimensions));
            for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
            return n;
        }),
        (kx.hasValue = function (t) {
            for (var e = this._dimensionsSummary.dataDimsOnCoord, n = 0, i = e.length; i > n; n++) if (isNaN(this.get(e[n], t))) return !1;
            return !0;
        }),
        (kx.getDataExtent = function (t) {
            t = this.getDimension(t);
            var e = this._storage[t],
                n = Vh();
            if (!e) return n;
            var i,
                r = this.count(),
                a = !this._indices;
            if (a) return this._rawExtent[t].slice();
            if ((i = this._extent[t])) return i.slice();
            i = n;
            for (var o = i[0], s = i[1], l = 0; r > l; l++) {
                var h = this._getFast(t, this.getRawIndex(l));
                o > h && (o = h), h > s && (s = h);
            }
            return (i = [o, s]), (this._extent[t] = i), i;
        }),
        (kx.getApproximateExtent = function (t) {
            return (t = this.getDimension(t)), this._approximateExtent[t] || this.getDataExtent(t);
        }),
        (kx.setApproximateExtent = function (t, e) {
            (e = this.getDimension(e)), (this._approximateExtent[e] = t.slice());
        }),
        (kx.getCalculationInfo = function (t) {
            return this._calculationInfo[t];
        }),
        (kx.setCalculationInfo = function (t, e) {
            yx(t) ? o(this._calculationInfo, t) : (this._calculationInfo[t] = e);
        }),
        (kx.getSum = function (t) {
            var e = this._storage[t],
                n = 0;
            if (e)
                for (var i = 0, r = this.count(); r > i; i++) {
                    var a = this.get(t, i);
                    isNaN(a) || (n += a);
                }
            return n;
        }),
        (kx.getMedian = function (t) {
            var e = [];
            this.each(t, function (t) {
                isNaN(t) || e.push(t);
            });
            var n = [].concat(e).sort(function (t, e) {
                    return t - e;
                }),
                i = this.count();
            return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
        }),
        (kx.rawIndexOf = function (t, e) {
            var n = t && this._invertedIndicesMap[t],
                i = n[e];
            return null == i || isNaN(i) ? xx : i;
        }),
        (kx.indexOfName = function (t) {
            for (var e = 0, n = this.count(); n > e; e++) if (this.getName(e) === t) return e;
            return -1;
        }),
        (kx.indexOfRawIndex = function (t) {
            if (t >= this._rawCount || 0 > t) return -1;
            if (!this._indices) return t;
            var e = this._indices,
                n = e[t];
            if (null != n && n < this._count && n === t) return t;
            for (var i = 0, r = this._count - 1; r >= i; ) {
                var a = ((i + r) / 2) | 0;
                if (e[a] < t) i = a + 1;
                else {
                    if (!(e[a] > t)) return a;
                    r = a - 1;
                }
            }
            return -1;
        }),
        (kx.indicesOfNearest = function (t, e, n) {
            var i = this._storage,
                r = i[t],
                a = [];
            if (!r) return a;
            null == n && (n = 1 / 0);
            for (var o = Number.MAX_VALUE, s = -1, l = 0, h = this.count(); h > l; l++) {
                var u = e - this.get(t, l),
                    c = Math.abs(u);
                n >= u && o >= c && ((o > c || (u >= 0 && 0 > s)) && ((o = c), (s = u), (a.length = 0)), a.push(l));
            }
            return a;
        }),
        (kx.getRawIndex = Bh),
        (kx.getRawDataItem = function (t) {
            if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
            for (var e = [], n = 0; n < this.dimensions.length; n++) {
                var i = this.dimensions[n];
                e.push(this.get(i, t));
            }
            return e;
        }),
        (kx.getName = function (t) {
            var e = this.getRawIndex(t);
            return this._nameList[e] || Oh(this, this._nameDimIdx, e) || "";
        }),
        (kx.getId = function (t) {
            return zh(this, this.getRawIndex(t));
        }),
        (kx.each = function (t, e, n, i) {
            if (this._count) {
                "function" == typeof t && ((i = n), (n = e), (e = t), (t = [])), (n = n || i || this), (t = p(Rh(t), this.getDimension, this));
                for (var r = t.length, a = 0; a < this.count(); a++)
                    switch (r) {
                        case 0:
                            e.call(n, a);
                            break;
                        case 1:
                            e.call(n, this.get(t[0], a), a);
                            break;
                        case 2:
                            e.call(n, this.get(t[0], a), this.get(t[1], a), a);
                            break;
                        default:
                            for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
                            (s[o] = a), e.apply(n, s);
                    }
            }
        }),
        (kx.filterSelf = function (t, e, n, i) {
            if (this._count) {
                "function" == typeof t && ((i = n), (n = e), (e = t), (t = [])), (n = n || i || this), (t = p(Rh(t), this.getDimension, this));
                for (var r = this.count(), a = Dh(this), o = new a(r), s = [], l = t.length, h = 0, u = t[0], c = 0; r > c; c++) {
                    var d,
                        f = this.getRawIndex(c);
                    if (0 === l) d = e.call(n, c);
                    else if (1 === l) {
                        var g = this._getFast(u, f);
                        d = e.call(n, g, c);
                    } else {
                        for (var v = 0; l > v; v++) s[v] = this._getFast(u, f);
                        (s[v] = c), (d = e.apply(n, s));
                    }
                    d && (o[h++] = f);
                }
                return r > h && (this._indices = o), (this._count = h), (this._extent = {}), (this.getRawIndex = this._indices ? Eh : Bh), this;
            }
        }),
        (kx.selectRange = function (t) {
            if (this._count) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push(n);
                var i = e.length;
                if (i) {
                    var r = this.count(),
                        a = Dh(this),
                        o = new a(r),
                        s = 0,
                        l = e[0],
                        h = t[l][0],
                        u = t[l][1],
                        c = !1;
                    if (!this._indices) {
                        var d = 0;
                        if (1 === i) {
                            for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++)
                                for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                                    var y = g[m];
                                    ((y >= h && u >= y) || isNaN(y)) && (o[s++] = d), d++;
                                }
                            c = !0;
                        } else if (2 === i) {
                            for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++)
                                for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                                    var y = g[m],
                                        S = b[m];
                                    ((y >= h && u >= y) || isNaN(y)) && ((S >= x && w >= S) || isNaN(S)) && (o[s++] = d), d++;
                                }
                            c = !0;
                        }
                    }
                    if (!c)
                        if (1 === i)
                            for (var m = 0; r > m; m++) {
                                var M = this.getRawIndex(m),
                                    y = this._getFast(l, M);
                                ((y >= h && u >= y) || isNaN(y)) && (o[s++] = M);
                            }
                        else
                            for (var m = 0; r > m; m++) {
                                for (var I = !0, M = this.getRawIndex(m), p = 0; i > p; p++) {
                                    var C = e[p],
                                        y = this._getFast(n, M);
                                    (y < t[C][0] || y > t[C][1]) && (I = !1);
                                }
                                I && (o[s++] = this.getRawIndex(m));
                            }
                    return r > s && (this._indices = o), (this._count = s), (this._extent = {}), (this.getRawIndex = this._indices ? Eh : Bh), this;
                }
            }
        }),
        (kx.mapArray = function (t, e, n, i) {
            "function" == typeof t && ((i = n), (n = e), (e = t), (t = [])), (n = n || i || this);
            var r = [];
            return (
                this.each(
                    t,
                    function () {
                        r.push(e && e.apply(this, arguments));
                    },
                    n
                ),
                r
            );
        }),
        (kx.map = function (t, e, n, i) {
            (n = n || i || this), (t = p(Rh(t), this.getDimension, this));
            var r = Nh(this, t);
            (r._indices = this._indices), (r.getRawIndex = r._indices ? Eh : Bh);
            for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, d = 0; h > d; d++) {
                for (var f = 0; l > f; f++) u[f] = this.get(t[f], d);
                u[l] = d;
                var g = e && e.apply(n, u);
                if (null != g) {
                    "object" != typeof g && ((o[0] = g), (g = o));
                    for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
                        var x = t[_],
                            w = g[_],
                            b = c[x],
                            S = a[x];
                        S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);
                    }
                }
            }
            return r;
        }),
        (kx.downSample = function (t, e, n, i) {
            for (var r = Nh(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new (Dh(this))(h), f = 0, p = 0; h > p; p += s) {
                s > h - p && ((s = h - p), (o.length = s));
                for (var g = 0; s > g; g++) {
                    var v = this.getRawIndex(p + g),
                        m = Math.floor(v / u),
                        y = v % u;
                    o[g] = l[m][y];
                }
                var _ = n(o),
                    x = this.getRawIndex(Math.min(p + i(o, _) || 0, h - 1)),
                    w = Math.floor(x / u),
                    b = x % u;
                (l[w][b] = _), _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), (d[f++] = x);
            }
            return (r._count = f), (r._indices = d), (r.getRawIndex = Eh), r;
        }),
        (kx.getItemModel = function (t) {
            var e = this.hostModel;
            return new Qa(this.getRawDataItem(t), e, e && e.ecModel);
        }),
        (kx.diff = function (t) {
            var e = this;
            return new bh(
                t ? t.getIndices() : [],
                this.getIndices(),
                function (e) {
                    return zh(t, e);
                },
                function (t) {
                    return zh(e, t);
                }
            );
        }),
        (kx.getVisual = function (t) {
            var e = this._visual;
            return e && e[t];
        }),
        (kx.setVisual = function (t, e) {
            if (yx(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
            else (this._visual = this._visual || {}), (this._visual[t] = e);
        }),
        (kx.setLayout = function (t, e) {
            if (yx(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
            else this._layout[t] = e;
        }),
        (kx.getLayout = function (t) {
            return this._layout[t];
        }),
        (kx.getItemLayout = function (t) {
            return this._itemLayouts[t];
        }),
        (kx.setItemLayout = function (t, e, n) {
            this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e;
        }),
        (kx.clearItemLayouts = function () {
            this._itemLayouts.length = 0;
        }),
        (kx.getItemVisual = function (t, e, n) {
            var i = this._itemVisuals[t],
                r = i && i[e];
            return null != r || n ? r : this.getVisual(e);
        }),
        (kx.setItemVisual = function (t, e, n) {
            var i = this._itemVisuals[t] || {},
                r = this.hasItemVisual;
            if (((this._itemVisuals[t] = i), yx(e))) for (var a in e) e.hasOwnProperty(a) && ((i[a] = e[a]), (r[a] = !0));
            else (i[e] = n), (r[e] = !0);
        }),
        (kx.clearAllVisual = function () {
            (this._visual = {}), (this._itemVisuals = []), (this.hasItemVisual = {});
        });
    var Px = function (t) {
        (t.seriesIndex = this.seriesIndex), (t.dataIndex = this.dataIndex), (t.dataType = this.dataType);
    };
    (kx.setItemGraphicEl = function (t, e) {
        var n = this.hostModel;
        e && ((e.dataIndex = t), (e.dataType = this.dataType), (e.seriesIndex = n && n.seriesIndex), "group" === e.type && e.traverse(Px, e)), (this._graphicEls[t] = e);
    }),
        (kx.getItemGraphicEl = function (t) {
            return this._graphicEls[t];
        }),
        (kx.eachItemGraphicEl = function (t, e) {
            f(this._graphicEls, function (n, i) {
                n && t && t.call(e, n, i);
            });
        }),
        (kx.cloneShallow = function (t) {
            if (!t) {
                var e = p(this.dimensions, this.getDimensionInfo, this);
                t = new Ax(e, this.hostModel);
            }
            if (((t._storage = this._storage), kh(t, this), this._indices)) {
                var n = this._indices.constructor;
                t._indices = new n(this._indices);
            } else t._indices = null;
            return (t.getRawIndex = t._indices ? Eh : Bh), t;
        }),
        (kx.wrapMethod = function (t, e) {
            var n = this[t];
            "function" == typeof n &&
                ((this.__wrappedMethods = this.__wrappedMethods || []),
                this.__wrappedMethods.push(t),
                (this[t] = function () {
                    var t = n.apply(this, arguments);
                    return e.apply(this, [t].concat(P(arguments)));
                }));
        }),
        (kx.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"]),
        (kx.CHANGABLE_METHODS = ["filterSelf", "selectRange"]);
    var Lx = function (t, e) {
        return (
            (e = e || {}),
            Gh(e.coordDimensions || [], t, {
                dimsDef: e.dimensionsDefine || t.dimensionsDefine,
                encodeDef: e.encodeDefine || t.encodeDefine,
                dimCount: e.dimensionsCount,
                generateCoord: e.generateCoord,
                generateCoordCount: e.generateCoordCount,
            })
        );
    };
    (Kh.prototype.parse = function (t) {
        return t;
    }),
        (Kh.prototype.getSetting = function (t) {
            return this._setting[t];
        }),
        (Kh.prototype.contain = function (t) {
            var e = this._extent;
            return t >= e[0] && t <= e[1];
        }),
        (Kh.prototype.normalize = function (t) {
            var e = this._extent;
            return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
        }),
        (Kh.prototype.scale = function (t) {
            var e = this._extent;
            return t * (e[1] - e[0]) + e[0];
        }),
        (Kh.prototype.unionExtent = function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
        }),
        (Kh.prototype.unionExtentFromData = function (t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        }),
        (Kh.prototype.getExtent = function () {
            return this._extent.slice();
        }),
        (Kh.prototype.setExtent = function (t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
        }),
        (Kh.prototype.isBlank = function () {
            return this._isBlank;
        }),
        (Kh.prototype.setBlank = function (t) {
            this._isBlank = t;
        }),
        (Kh.prototype.getLabel = null),
        nr(Kh),
        or(Kh, { registerWhenExtend: !0 }),
        ($h.createByAxisModel = function (t) {
            var e = t.option,
                n = e.data,
                i = n && p(n, Jh);
            return new $h({ categories: i, needCollect: !i, deduplication: e.dedplication !== !1 });
        });
    var Ox = $h.prototype;
    (Ox.getOrdinal = function (t) {
        return Qh(this).get(t);
    }),
        (Ox.parseAndCollect = function (t) {
            var e,
                n = this._needCollect;
            if ("string" != typeof t && !n) return t;
            if (n && !this._deduplication) return (e = this.categories.length), (this.categories[e] = t), e;
            var i = Qh(this);
            return (e = i.get(t)), null == e && (n ? ((e = this.categories.length), (this.categories[e] = t), i.set(t, e)) : (e = 0 / 0)), e;
        });
    var Bx = Kh.prototype,
        Ex = Kh.extend({
            type: "ordinal",
            init: function (t, e) {
                (!t || x(t)) && (t = new $h({ categories: t })), (this._ordinalMeta = t), (this._extent = e || [0, t.categories.length - 1]);
            },
            parse: function (t) {
                return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
            },
            contain: function (t) {
                return (t = this.parse(t)), Bx.contain.call(this, t) && null != this._ordinalMeta.categories[t];
            },
            normalize: function (t) {
                return Bx.normalize.call(this, this.parse(t));
            },
            scale: function (t) {
                return Math.round(Bx.scale.call(this, t));
            },
            getTicks: function () {
                for (var t = [], e = this._extent, n = e[0]; n <= e[1]; ) t.push(n), n++;
                return t;
            },
            getLabel: function (t) {
                return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];
            },
            count: function () {
                return this._extent[1] - this._extent[0] + 1;
            },
            unionExtentFromData: function (t, e) {
                this.unionExtent(t.getApproximateExtent(e));
            },
            getOrdinalMeta: function () {
                return this._ordinalMeta;
            },
            niceTicks: V,
            niceExtent: V,
        });
    Ex.create = function () {
        return new Ex();
    };
    var zx = so,
        Rx = so,
        Nx = Kh.extend({
            type: "interval",
            _interval: 0,
            _intervalPrecision: 2,
            setExtent: function (t, e) {
                var n = this._extent;
                isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
            },
            unionExtent: function (t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Nx.prototype.setExtent.call(this, e[0], e[1]);
            },
            getInterval: function () {
                return this._interval;
            },
            setInterval: function (t) {
                (this._interval = t), (this._niceExtent = this._extent.slice()), (this._intervalPrecision = eu(t));
            },
            getTicks: function () {
                return ru(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
            },
            getLabel: function (t, e) {
                if (null == t) return "";
                var n = e && e.precision;
                return null == n ? (n = uo(t) || 0) : "auto" === n && (n = this._intervalPrecision), (t = Rx(t, n, !0)), So(t);
            },
            niceTicks: function (t, e, n) {
                t = t || 5;
                var i = this._extent,
                    r = i[1] - i[0];
                if (isFinite(r)) {
                    0 > r && ((r = -r), i.reverse());
                    var a = tu(i, t, e, n);
                    (this._intervalPrecision = a.intervalPrecision), (this._interval = a.interval), (this._niceExtent = a.niceTickExtent);
                }
            },
            niceExtent: function (t) {
                var e = this._extent;
                if (e[0] === e[1])
                    if (0 !== e[0]) {
                        var n = e[0];
                        t.fixMax ? (e[0] -= n / 2) : ((e[1] += n / 2), (e[0] -= n / 2));
                    } else e[1] = 1;
                var i = e[1] - e[0];
                isFinite(i) || ((e[0] = 0), (e[1] = 1)), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var r = this._interval;
                t.fixMin || (e[0] = Rx(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Rx(Math.ceil(e[1] / r) * r));
            },
        });
    Nx.create = function () {
        return new Nx();
    };
    var Fx = "__ec_stack_",
        Vx = 0.5,
        Gx = "undefined" != typeof Float32Array ? Float32Array : Array,
        Hx = {
            seriesType: "bar",
            plan: jy(),
            reset: function (t) {
                function e(t, e) {
                    for (var n, c = t.count, d = new Gx(2 * c), f = new Gx(c), p = [], g = [], v = 0, m = 0; null != (n = t.next()); )
                        (g[h] = e.get(o, n)), (g[1 - h] = e.get(s, n)), (p = i.dataToPoint(g, null, p)), (d[v++] = p[0]), (d[v++] = p[1]), (f[m++] = n);
                    e.setLayout({ largePoints: d, largeDataIndices: f, barWidth: u, valueAxisStart: gu(r, a, !1), valueAxisHorizontal: l });
                }
                if (fu(t) && pu(t)) {
                    var n = t.getData(),
                        i = t.coordinateSystem,
                        r = i.getBaseAxis(),
                        a = i.getOtherAxis(r),
                        o = n.mapDimension(a.dim),
                        s = n.mapDimension(r.dim),
                        l = a.isHorizontal(),
                        h = l ? 0 : 1,
                        u = cu(hu([t]), r, t).width;
                    return u > Vx || (u = Vx), { progress: e };
                }
            },
        },
        Wx = Nx.prototype,
        Xx = Math.ceil,
        Ux = Math.floor,
        Yx = 1e3,
        qx = 60 * Yx,
        jx = 60 * qx,
        Zx = 24 * jx,
        Kx = function (t, e, n, i) {
            for (; i > n; ) {
                var r = (n + i) >>> 1;
                t[r][1] < e ? (n = r + 1) : (i = r);
            }
            return n;
        },
        $x = Nx.extend({
            type: "time",
            getLabel: function (t) {
                var e = this._stepLvl,
                    n = new Date(t);
                return ko(e[0], n, this.getSetting("useUTC"));
            },
            niceExtent: function (t) {
                var e = this._extent;
                if ((e[0] === e[1] && ((e[0] -= Zx), (e[1] += Zx)), e[1] === -1 / 0 && 1 / 0 === e[0])) {
                    var n = new Date();
                    (e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate())), (e[0] = e[1] - Zx);
                }
                this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var i = this._interval;
                t.fixMin || (e[0] = so(Ux(e[0] / i) * i)), t.fixMax || (e[1] = so(Xx(e[1] / i) * i));
            },
            niceTicks: function (t, e, n) {
                t = t || 10;
                var i = this._extent,
                    r = i[1] - i[0],
                    a = r / t;
                null != e && e > a && (a = e), null != n && a > n && (a = n);
                var o = Qx.length,
                    s = Kx(Qx, a, 0, o),
                    l = Qx[Math.min(s, o - 1)],
                    h = l[1];
                if ("year" === l[0]) {
                    var u = r / h,
                        c = _o(u / t, !0);
                    h *= c;
                }
                var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
                    f = [Math.round(Xx((i[0] - d) / h) * h + d), Math.round(Ux((i[1] - d) / h) * h + d)];
                iu(f, i), (this._stepLvl = l), (this._interval = h), (this._niceExtent = f);
            },
            parse: function (t) {
                return +vo(t);
            },
        });
    f(["contain", "normalize"], function (t) {
        $x.prototype[t] = function (e) {
            return Wx[t].call(this, this.parse(e));
        };
    });
    var Qx = [
        ["hh:mm:ss", Yx],
        ["hh:mm:ss", 5 * Yx],
        ["hh:mm:ss", 10 * Yx],
        ["hh:mm:ss", 15 * Yx],
        ["hh:mm:ss", 30 * Yx],
        ["hh:mm\nMM-dd", qx],
        ["hh:mm\nMM-dd", 5 * qx],
        ["hh:mm\nMM-dd", 10 * qx],
        ["hh:mm\nMM-dd", 15 * qx],
        ["hh:mm\nMM-dd", 30 * qx],
        ["hh:mm\nMM-dd", jx],
        ["hh:mm\nMM-dd", 2 * jx],
        ["hh:mm\nMM-dd", 6 * jx],
        ["hh:mm\nMM-dd", 12 * jx],
        ["MM-dd\nyyyy", Zx],
        ["MM-dd\nyyyy", 2 * Zx],
        ["MM-dd\nyyyy", 3 * Zx],
        ["MM-dd\nyyyy", 4 * Zx],
        ["MM-dd\nyyyy", 5 * Zx],
        ["MM-dd\nyyyy", 6 * Zx],
        ["week", 7 * Zx],
        ["MM-dd\nyyyy", 10 * Zx],
        ["week", 14 * Zx],
        ["week", 21 * Zx],
        ["month", 31 * Zx],
        ["week", 42 * Zx],
        ["month", 62 * Zx],
        ["week", 70 * Zx],
        ["quarter", 95 * Zx],
        ["month", 31 * Zx * 4],
        ["month", 31 * Zx * 5],
        ["half-year", (380 * Zx) / 2],
        ["month", 31 * Zx * 8],
        ["month", 31 * Zx * 10],
        ["year", 380 * Zx],
    ];
    $x.create = function (t) {
        return new $x({ useUTC: t.ecModel.get("useUTC") });
    };
    var Jx = Kh.prototype,
        tw = Nx.prototype,
        ew = uo,
        nw = so,
        iw = Math.floor,
        rw = Math.ceil,
        aw = Math.pow,
        ow = Math.log,
        sw = Kh.extend({
            type: "log",
            base: 10,
            $constructor: function () {
                Kh.apply(this, arguments), (this._originalScale = new Nx());
            },
            getTicks: function () {
                var t = this._originalScale,
                    e = this._extent,
                    n = t.getExtent();
                return p(
                    tw.getTicks.call(this),
                    function (i) {
                        var r = so(aw(this.base, i));
                        return (r = i === e[0] && t.__fixMin ? vu(r, n[0]) : r), (r = i === e[1] && t.__fixMax ? vu(r, n[1]) : r);
                    },
                    this
                );
            },
            getLabel: tw.getLabel,
            scale: function (t) {
                return (t = Jx.scale.call(this, t)), aw(this.base, t);
            },
            setExtent: function (t, e) {
                var n = this.base;
                (t = ow(t) / ow(n)), (e = ow(e) / ow(n)), tw.setExtent.call(this, t, e);
            },
            getExtent: function () {
                var t = this.base,
                    e = Jx.getExtent.call(this);
                (e[0] = aw(t, e[0])), (e[1] = aw(t, e[1]));
                var n = this._originalScale,
                    i = n.getExtent();
                return n.__fixMin && (e[0] = vu(e[0], i[0])), n.__fixMax && (e[1] = vu(e[1], i[1])), e;
            },
            unionExtent: function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                (t[0] = ow(t[0]) / ow(e)), (t[1] = ow(t[1]) / ow(e)), Jx.unionExtent.call(this, t);
            },
            unionExtentFromData: function (t, e) {
                this.unionExtent(t.getApproximateExtent(e));
            },
            niceTicks: function (t) {
                t = t || 10;
                var e = this._extent,
                    n = e[1] - e[0];
                if (!(1 / 0 === n || 0 >= n)) {
                    var i = mo(n),
                        r = (t / n) * i;
                    for (0.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0; ) i *= 10;
                    var a = [so(rw(e[0] / i) * i), so(iw(e[1] / i) * i)];
                    (this._interval = i), (this._niceExtent = a);
                }
            },
            niceExtent: function (t) {
                tw.niceExtent.call(this, t);
                var e = this._originalScale;
                (e.__fixMin = t.fixMin), (e.__fixMax = t.fixMax);
            },
        });
    f(["contain", "normalize"], function (t) {
        sw.prototype[t] = function (e) {
            return (e = ow(e) / ow(this.base)), Jx[t].call(this, e);
        };
    }),
        (sw.create = function () {
            return new sw();
        });
    var lw = {
            getMin: function (t) {
                var e = this.option,
                    n = t || null == e.rangeStart ? e.min : e.rangeStart;
                return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;
            },
            getMax: function (t) {
                var e = this.option,
                    n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
                return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;
            },
            getNeedCrossZero: function () {
                var t = this.option;
                return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale;
            },
            getCoordSysModel: V,
            setRange: function (t, e) {
                (this.option.rangeStart = t), (this.option.rangeEnd = e);
            },
            resetRange: function () {
                this.option.rangeStart = this.option.rangeEnd = null;
            },
        },
        hw = ta({
            type: "triangle",
            shape: { cx: 0, cy: 0, width: 0, height: 0 },
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = e.width / 2,
                    a = e.height / 2;
                t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();
            },
        }),
        uw = ta({
            type: "diamond",
            shape: { cx: 0, cy: 0, width: 0, height: 0 },
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = e.width / 2,
                    a = e.height / 2;
                t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath();
            },
        }),
        cw = ta({
            type: "pin",
            shape: { x: 0, y: 0, width: 0, height: 0 },
            buildPath: function (t, e) {
                var n = e.x,
                    i = e.y,
                    r = (e.width / 5) * 3,
                    a = Math.max(r, e.height),
                    o = r / 2,
                    s = (o * o) / (a - o),
                    l = i - a + o + s,
                    h = Math.asin(s / o),
                    u = Math.cos(h) * o,
                    c = Math.sin(h),
                    d = Math.cos(h),
                    f = 0.6 * o,
                    p = 0.7 * o;
                t.moveTo(n - u, l + s), t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - u + c * f, l + s + d * f, n - u, l + s), t.closePath();
            },
        }),
        dw = ta({
            type: "arrow",
            shape: { x: 0, y: 0, width: 0, height: 0 },
            buildPath: function (t, e) {
                var n = e.height,
                    i = e.width,
                    r = e.x,
                    a = e.y,
                    o = (i / 3) * 2;
                t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + (n / 4) * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath();
            },
        }),
        fw = { line: um, rect: lm, roundRect: lm, square: lm, circle: $v, diamond: uw, pin: cw, arrow: dw, triangle: hw },
        pw = {
            line: function (t, e, n, i, r) {
                (r.x1 = t), (r.y1 = e + i / 2), (r.x2 = t + n), (r.y2 = e + i / 2);
            },
            rect: function (t, e, n, i, r) {
                (r.x = t), (r.y = e), (r.width = n), (r.height = i);
            },
            roundRect: function (t, e, n, i, r) {
                (r.x = t), (r.y = e), (r.width = n), (r.height = i), (r.r = Math.min(n, i) / 4);
            },
            square: function (t, e, n, i, r) {
                var a = Math.min(n, i);
                (r.x = t), (r.y = e), (r.width = a), (r.height = a);
            },
            circle: function (t, e, n, i, r) {
                (r.cx = t + n / 2), (r.cy = e + i / 2), (r.r = Math.min(n, i) / 2);
            },
            diamond: function (t, e, n, i, r) {
                (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
            },
            pin: function (t, e, n, i, r) {
                (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
            },
            arrow: function (t, e, n, i, r) {
                (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
            },
            triangle: function (t, e, n, i, r) {
                (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
            },
        },
        gw = {};
    f(fw, function (t, e) {
        gw[e] = new t();
    });
    var vw = ta({
            type: "symbol",
            shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 },
            calculateTextPosition: function (t, e, n) {
                var i = Un(t, e, n),
                    r = this.shape;
                return r && "pin" === r.symbolType && "inside" === e.textPosition && (i.y = n.y + 0.4 * n.height), i;
            },
            buildPath: function (t, e, n) {
                var i = e.symbolType;
                if ("none" !== i) {
                    var r = gw[i];
                    r || ((i = "rect"), (r = gw[i])), pw[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n);
                }
            },
        }),
        mw = { isDimensionStacked: Uh, enableDataStack: Xh, getStackedDimension: Yh },
        yw = (Object.freeze || Object)({ createList: ku, getLayoutRect: Eo, dataStack: mw, createScale: Pu, mixinAxisModelCommonMethods: Lu, completeDimensions: Gh, createDimensions: Lx, createSymbol: Au }),
        _w = 1e-8;
    Eu.prototype = {
        constructor: Eu,
        properties: null,
        getBoundingRect: function () {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++)
                if ("polygon" === o[s].type) {
                    var l = o[s].exterior;
                    wr(l, r, a), oe(n, n, r), se(i, i, a);
                }
            return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), (this._rect = new wn(n[0], n[1], i[0] - n[0], i[1] - n[1]));
        },
        contain: function (t) {
            var e = this.getBoundingRect(),
                n = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t: for (var i = 0, r = n.length; r > i; i++)
                if ("polygon" === n[i].type) {
                    var a = n[i].exterior,
                        o = n[i].interiors;
                    if (Bu(a, t[0], t[1])) {
                        for (var s = 0; s < (o ? o.length : 0); s++) if (Bu(o[s])) continue t;
                        return !0;
                    }
                }
            return !1;
        },
        transformTo: function (t, e, n, i) {
            var r = this.getBoundingRect(),
                a = r.width / r.height;
            n ? i || (i = n / a) : (n = a * i);
            for (var o = new wn(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, h = 0; h < l.length; h++)
                if ("polygon" === l[h].type) {
                    for (var u = l[h].exterior, c = l[h].interiors, d = 0; d < u.length; d++) ae(u[d], u[d], s);
                    for (var f = 0; f < (c ? c.length : 0); f++) for (var d = 0; d < c[f].length; d++) ae(c[f][d], c[f][d], s);
                }
            (r = this._rect), r.copy(o), (this.center = [r.x + r.width / 2, r.y + r.height / 2]);
        },
        cloneShallow: function (t) {
            null == t && (t = this.name);
            var e = new Eu(t, this.geometries, this.center);
            return (e._rect = this._rect), (e.transformTo = null), e;
        },
    };
    var xw = function (t) {
            return (
                zu(t),
                p(
                    v(t.features, function (t) {
                        return t.geometry && t.properties && t.geometry.coordinates.length > 0;
                    }),
                    function (t) {
                        var e = t.properties,
                            n = t.geometry,
                            i = n.coordinates,
                            r = [];
                        "Polygon" === n.type && r.push({ type: "polygon", exterior: i[0], interiors: i.slice(1) }),
                            "MultiPolygon" === n.type &&
                                f(i, function (t) {
                                    t[0] && r.push({ type: "polygon", exterior: t[0], interiors: t.slice(1) });
                                });
                        var a = new Eu(e.name, r, e.cp);
                        return (a.properties = e), a;
                    }
                )
            );
        },
        ww = ji(),
        bw = [0, 1],
        Sw = function (t, e, n) {
            (this.dim = t), (this.scale = e), (this._extent = n || [0, 0]), (this.inverse = !1), (this.onBand = !1);
        };
    Sw.prototype = {
        constructor: Sw,
        contain: function (t) {
            var e = this._extent,
                n = Math.min(e[0], e[1]),
                i = Math.max(e[0], e[1]);
            return t >= n && i >= t;
        },
        containData: function (t) {
            return this.contain(this.dataToCoord(t));
        },
        getExtent: function () {
            return this._extent.slice();
        },
        getPixelPrecision: function (t) {
            return co(t || this.scale.getExtent(), this._extent);
        },
        setExtent: function (t, e) {
            var n = this._extent;
            (n[0] = t), (n[1] = e);
        },
        dataToCoord: function (t, e) {
            var n = this._extent,
                i = this.scale;
            return (t = i.normalize(t)), this.onBand && "ordinal" === i.type && ((n = n.slice()), Qu(n, i.count())), ao(t, bw, n, e);
        },
        coordToData: function (t, e) {
            var n = this._extent,
                i = this.scale;
            this.onBand && "ordinal" === i.type && ((n = n.slice()), Qu(n, i.count()));
            var r = ao(t, n, bw, e);
            return this.scale.scale(r);
        },
        pointToData: function () {},
        getTicksCoords: function (t) {
            t = t || {};
            var e = t.tickModel || this.getTickModel(),
                n = Fu(this, e),
                i = n.ticks,
                r = p(
                    i,
                    function (t) {
                        return { coord: this.dataToCoord(t), tickValue: t };
                    },
                    this
                ),
                a = e.get("alignWithLabel");
            return Ju(this, r, a, t.clamp), r;
        },
        getViewLabels: function () {
            return Nu(this).labels;
        },
        getLabelModel: function () {
            return this.model.getModel("axisLabel");
        },
        getTickModel: function () {
            return this.model.getModel("axisTick");
        },
        getBandWidth: function () {
            var t = this._extent,
                e = this.scale.getExtent(),
                n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n;
        },
        isHorizontal: null,
        getRotate: null,
        calculateCategoryInterval: function () {
            return ju(this);
        },
    };
    var Mw = xw,
        Iw = {};
    f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
        Iw[t] = Rf[t];
    });
    var Cw = {};
    f(
        [
            "extendShape",
            "extendPath",
            "makePath",
            "makeImage",
            "mergePath",
            "resizePath",
            "createIcon",
            "setHoverStyle",
            "setLabelStyle",
            "setTextStyle",
            "setText",
            "getFont",
            "updateProps",
            "initProps",
            "getTransform",
            "clipPointsByRect",
            "clipRectByRect",
            "registerShape",
            "getShapeClass",
            "Group",
            "Image",
            "Text",
            "Circle",
            "Sector",
            "Ring",
            "Polygon",
            "Polyline",
            "Rect",
            "Line",
            "BezierCurve",
            "Arc",
            "IncrementalDisplayable",
            "CompoundPath",
            "LinearGradient",
            "RadialGradient",
            "BoundingRect",
        ],
        function (t) {
            Cw[t] = Om[t];
        }
    );
    var Tw = function (t) {
        (this._axes = {}), (this._dimList = []), (this.name = t || "");
    };
    (Tw.prototype = {
        constructor: Tw,
        type: "cartesian",
        getAxis: function (t) {
            return this._axes[t];
        },
        getAxes: function () {
            return p(this._dimList, tc, this);
        },
        getAxesByScale: function (t) {
            return (
                (t = t.toLowerCase()),
                v(this.getAxes(), function (e) {
                    return e.scale.type === t;
                })
            );
        },
        addAxis: function (t) {
            var e = t.dim;
            (this._axes[e] = t), this._dimList.push(e);
        },
        dataToCoord: function (t) {
            return this._dataCoordConvert(t, "dataToCoord");
        },
        coordToData: function (t) {
            return this._dataCoordConvert(t, "coordToData");
        },
        _dataCoordConvert: function (t, e) {
            for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
                var a = n[r],
                    o = this._axes[a];
                i[a] = o[e](t[a]);
            }
            return i;
        },
    }),
        (ec.prototype = {
            constructor: ec,
            type: "cartesian2d",
            dimensions: ["x", "y"],
            getBaseAxis: function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
            },
            containPoint: function (t) {
                var e = this.getAxis("x"),
                    n = this.getAxis("y");
                return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
            },
            containData: function (t) {
                return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
            },
            dataToPoint: function (t, e, n) {
                var i = this.getAxis("x"),
                    r = this.getAxis("y");
                return (n = n || []), (n[0] = i.toGlobalCoord(i.dataToCoord(t[0]))), (n[1] = r.toGlobalCoord(r.dataToCoord(t[1]))), n;
            },
            clampData: function (t, e) {
                var n = this.getAxis("x").scale,
                    i = this.getAxis("y").scale,
                    r = n.getExtent(),
                    a = i.getExtent(),
                    o = n.parse(t[0]),
                    s = i.parse(t[1]);
                return (e = e || []), (e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1]))), (e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1]))), e;
            },
            pointToData: function (t, e) {
                var n = this.getAxis("x"),
                    i = this.getAxis("y");
                return (e = e || []), (e[0] = n.coordToData(n.toLocalCoord(t[0]))), (e[1] = i.coordToData(i.toLocalCoord(t[1]))), e;
            },
            getOtherAxis: function (t) {
                return this.getAxis("x" === t.dim ? "y" : "x");
            },
            getArea: function () {
                var t = this.getAxis("x").getGlobalExtent(),
                    e = this.getAxis("y").getGlobalExtent(),
                    n = Math.min(t[0], t[1]),
                    i = Math.min(e[0], e[1]),
                    r = Math.max(t[0], t[1]) - n,
                    a = Math.max(e[0], e[1]) - i,
                    o = new wn(n, i, r, a);
                return o;
            },
        }),
        u(ec, Tw);
    var Dw = function (t, e, n, i, r) {
        Sw.call(this, t, e, n), (this.type = i || "value"), (this.position = r || "bottom");
    };
    (Dw.prototype = {
        constructor: Dw,
        index: 0,
        getAxesOnZeroOf: null,
        model: null,
        isHorizontal: function () {
            var t = this.position;
            return "top" === t || "bottom" === t;
        },
        getGlobalExtent: function (t) {
            var e = this.getExtent();
            return (e[0] = this.toGlobalCoord(e[0])), (e[1] = this.toGlobalCoord(e[1])), t && e[0] > e[1] && e.reverse(), e;
        },
        getOtherAxis: function () {
            this.grid.getOtherAxis();
        },
        pointToData: function (t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
        },
        toLocalCoord: null,
        toGlobalCoord: null,
    }),
        u(Dw, Sw);
    var Aw = {
            show: !0,
            zlevel: 0,
            z: 0,
            inverse: !1,
            name: "",
            nameLocation: "end",
            nameRotate: null,
            nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." },
            nameTextStyle: {},
            nameGap: 15,
            silent: !1,
            triggerEvent: !1,
            tooltip: { show: !1 },
            axisPointer: {},
            axisLine: { show: !0, onZero: !0, onZeroAxisIndex: null, lineStyle: { color: "#333", width: 1, type: "solid" }, symbol: ["none", "none"], symbolSize: [10, 15] },
            axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } },
            axisLabel: { show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12 },
            splitLine: { show: !0, lineStyle: { color: ["#ccc"], width: 1, type: "solid" } },
            splitArea: { show: !1, areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] } },
        },
        kw = {};
    (kw.categoryAxis = r({ boundaryGap: !0, deduplication: null, splitLine: { show: !1 }, axisTick: { alignWithLabel: !1, interval: "auto" }, axisLabel: { interval: "auto" } }, Aw)),
        (kw.valueAxis = r({ boundaryGap: [0, 0], splitNumber: 5 }, Aw)),
        (kw.timeAxis = s({ scale: !0, min: "dataMin", max: "dataMax" }, kw.valueAxis)),
        (kw.logAxis = s({ scale: !0, logBase: 10 }, kw.valueAxis));
    var Pw = ["value", "category", "time", "log"],
        Lw = function (t, e, n, i) {
            f(Pw, function (o) {
                e.extend({
                    type: t + "Axis." + o,
                    mergeDefaultAndTheme: function (e, i) {
                        var a = this.layoutMode,
                            s = a ? Ro(e) : {},
                            l = i.getTheme();
                        r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), (e.type = n(t, e)), a && zo(e, s, a);
                    },
                    optionUpdated: function () {
                        var t = this.option;
                        "category" === t.type && (this.__ordinalMeta = $h.createByAxisModel(this));
                    },
                    getCategories: function (t) {
                        var e = this.option;
                        return "category" === e.type ? (t ? e.data : this.__ordinalMeta.categories) : void 0;
                    },
                    getOrdinalMeta: function () {
                        return this.__ordinalMeta;
                    },
                    defaultOption: a([{}, kw[o + "Axis"], i], !0),
                });
            }),
                ry.registerSubTypeDefaulter(t + "Axis", _(n, t));
        },
        Ow = ry.extend({
            type: "cartesian2dAxis",
            axis: null,
            init: function () {
                Ow.superApply(this, "init", arguments), this.resetRange();
            },
            mergeOption: function () {
                Ow.superApply(this, "mergeOption", arguments), this.resetRange();
            },
            restoreData: function () {
                Ow.superApply(this, "restoreData", arguments), this.resetRange();
            },
            getCoordSysModel: function () {
                return this.ecModel.queryComponents({ mainType: "grid", index: this.option.gridIndex, id: this.option.gridId })[0];
            },
        });
    r(Ow.prototype, lw);
    var Bw = { offset: 0 };
    Lw("x", Ow, nc, Bw),
        Lw("y", Ow, nc, Bw),
        ry.extend({
            type: "grid",
            dependencies: ["xAxis", "yAxis"],
            layoutMode: "box",
            coordinateSystem: null,
            defaultOption: { show: !1, zlevel: 0, z: 0, left: "10%", top: 60, right: "10%", bottom: 60, containLabel: !1, backgroundColor: "rgba(0,0,0,0)", borderWidth: 1, borderColor: "#ccc" },
        });
    var Ew = rc.prototype;
    (Ew.type = "grid"),
        (Ew.axisPointerEnabled = !0),
        (Ew.getRect = function () {
            return this._rect;
        }),
        (Ew.update = function (t, e) {
            var n = this._axesMap;
            this._updateScale(t, this.model),
                f(n.x, function (t) {
                    _u(t.scale, t.model);
                }),
                f(n.y, function (t) {
                    _u(t.scale, t.model);
                });
            var i = {};
            f(n.x, function (t) {
                ac(n, "y", t, i);
            }),
                f(n.y, function (t) {
                    ac(n, "x", t, i);
                }),
                this.resize(this.model, e);
        }),
        (Ew.resize = function (t, e, n) {
            function i() {
                f(a, function (t) {
                    var e = t.isHorizontal(),
                        n = e ? [0, r.width] : [0, r.height],
                        i = t.inverse ? 1 : 0;
                    t.setExtent(n[i], n[1 - i]), sc(t, e ? r.x : r.y);
                });
            }
            var r = Eo(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
            this._rect = r;
            var a = this._axesList;
            i(),
                !n &&
                    t.get("containLabel") &&
                    (f(a, function (t) {
                        if (!t.model.get("axisLabel.inside")) {
                            var e = Mu(t);
                            if (e) {
                                var n = t.isHorizontal() ? "height" : "width",
                                    i = t.model.get("axisLabel.margin");
                                (r[n] -= e[n] + i), "top" === t.position ? (r.y += e.height + i) : "left" === t.position && (r.x += e.width + i);
                            }
                        }
                    }),
                    i());
        }),
        (Ew.getAxis = function (t, e) {
            var n = this._axesMap[t];
            if (null != n) {
                if (null == e) for (var i in n) if (n.hasOwnProperty(i)) return n[i];
                return n[e];
            }
        }),
        (Ew.getAxes = function () {
            return this._axesList.slice();
        }),
        (Ew.getCartesian = function (t, e) {
            if (null != t && null != e) {
                var n = "x" + t + "y" + e;
                return this._coordsMap[n];
            }
            S(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex));
            for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];
        }),
        (Ew.getCartesians = function () {
            return this._coordsList.slice();
        }),
        (Ew.convertToPixel = function (t, e, n) {
            var i = this._findConvertTarget(t, e);
            return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
        }),
        (Ew.convertFromPixel = function (t, e, n) {
            var i = this._findConvertTarget(t, e);
            return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
        }),
        (Ew._findConvertTarget = function (t, e) {
            var n,
                i,
                r = e.seriesModel,
                a = e.xAxisModel || (r && r.getReferringComponents("xAxis")[0]),
                o = e.yAxisModel || (r && r.getReferringComponents("yAxis")[0]),
                s = e.gridModel,
                l = this._coordsList;
            if (r) (n = r.coordinateSystem), h(l, n) < 0 && (n = null);
            else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);
            else if (a) i = this.getAxis("x", a.componentIndex);
            else if (o) i = this.getAxis("y", o.componentIndex);
            else if (s) {
                var u = s.coordinateSystem;
                u === this && (n = this._coordsList[0]);
            }
            return { cartesian: n, axis: i };
        }),
        (Ew.containPoint = function (t) {
            var e = this._coordsList[0];
            return e ? e.containPoint(t) : void 0;
        }),
        (Ew._initCartesian = function (t, e) {
            function n(n) {
                return function (o, s) {
                    if (ic(o, t, e)) {
                        var l = o.get("position");
                        "x" === n ? "top" !== l && "bottom" !== l && (l = i.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = i.left ? "right" : "left"), (i[l] = !0);
                        var h = new Dw(n, xu(o), [0, 0], o.get("type"), l),
                            u = "category" === h.type;
                        (h.onBand = u && o.get("boundaryGap")), (h.inverse = o.get("inverse")), (o.axis = h), (h.model = o), (h.grid = this), (h.index = s), this._axesList.push(h), (r[n][s] = h), a[n]++;
                    }
                };
            }
            var i = { left: !1, right: !1, top: !1, bottom: !1 },
                r = { x: {}, y: {} },
                a = { x: 0, y: 0 };
            return (
                e.eachComponent("xAxis", n("x"), this),
                e.eachComponent("yAxis", n("y"), this),
                a.x && a.y
                    ? ((this._axesMap = r),
                      void f(
                          r.x,
                          function (e, n) {
                              f(
                                  r.y,
                                  function (i, r) {
                                      var a = "x" + n + "y" + r,
                                          o = new ec(a);
                                      (o.grid = this), (o.model = t), (this._coordsMap[a] = o), this._coordsList.push(o), o.addAxis(e), o.addAxis(i);
                                  },
                                  this
                              );
                          },
                          this
                      ))
                    : ((this._axesMap = {}), void (this._axesList = []))
            );
        }),
        (Ew._updateScale = function (t, e) {
            function n(t, e) {
                f(t.mapDimension(e.dim, !0), function (n) {
                    e.scale.unionExtentFromData(t, Yh(t, n));
                });
            }
            f(this._axesList, function (t) {
                t.scale.setExtent(1 / 0, -1 / 0);
            }),
                t.eachSeries(function (i) {
                    if (hc(i)) {
                        var r = lc(i, t),
                            a = r[0],
                            o = r[1];
                        if (!ic(a, e, t) || !ic(o, e, t)) return;
                        var s = this.getCartesian(a.componentIndex, o.componentIndex),
                            l = i.getData(),
                            h = s.getAxis("x"),
                            u = s.getAxis("y");
                        "list" === l.type && (n(l, h, i), n(l, u, i));
                    }
                }, this);
        }),
        (Ew.getTooltipAxes = function (t) {
            var e = [],
                n = [];
            return (
                f(this.getCartesians(), function (i) {
                    var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
                        a = i.getOtherAxis(r);
                    h(e, r) < 0 && e.push(r), h(n, a) < 0 && n.push(a);
                }),
                { baseAxes: e, otherAxes: n }
            );
        });
    var zw = ["xAxis", "yAxis"];
    (rc.create = function (t, e) {
        var n = [];
        return (
            t.eachComponent("grid", function (i, r) {
                var a = new rc(i, t, e);
                (a.name = "grid_" + r), a.resize(i, e, !0), (i.coordinateSystem = a), n.push(a);
            }),
            t.eachSeries(function (e) {
                if (hc(e)) {
                    var n = lc(e, t),
                        i = n[0],
                        r = n[1],
                        a = i.getCoordSysModel(),
                        o = a.coordinateSystem;
                    e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex);
                }
            }),
            n
        );
    }),
        (rc.dimensions = rc.prototype.dimensions = ec.prototype.dimensions),
        us.register("cartesian2d", rc);
    var Rw = Uy.extend({
        type: "series.__base_bar__",
        getInitialData: function () {
            return qh(this.getSource(), this);
        },
        getMarkerPosition: function (t) {
            var e = this.coordinateSystem;
            if (e) {
                var n = e.dataToPoint(e.clampData(t)),
                    i = this.getData(),
                    r = i.getLayout("offset"),
                    a = i.getLayout("size"),
                    o = e.getBaseAxis().isHorizontal() ? 0 : 1;
                return (n[o] += r + a / 2), n;
            }
            return [0 / 0, 0 / 0];
        },
        defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, barMinHeight: 0, barMinAngle: 0, large: !1, largeThreshold: 400, progressive: 3e3, progressiveChunkMode: "mod", itemStyle: {}, emphasis: {} },
    });
    Rw.extend({
        type: "series.bar",
        dependencies: ["grid", "polar"],
        brushSelector: "rect",
        getProgressive: function () {
            return this.get("large") ? this.get("progressive") : !1;
        },
        getProgressiveThreshold: function () {
            var t = this.get("progressiveThreshold"),
                e = this.get("largeThreshold");
            return e > t && (t = e), t;
        },
        defaultOption: { clip: !0, roundCap: !1 },
    });
    var Nw = Wg([
            ["fill", "color"],
            ["stroke", "borderColor"],
            ["lineWidth", "borderWidth"],
            ["stroke", "barBorderColor"],
            ["lineWidth", "barBorderWidth"],
            ["opacity"],
            ["shadowBlur"],
            ["shadowOffsetX"],
            ["shadowOffsetY"],
            ["shadowColor"],
        ]),
        Fw = {
            getBarItemStyle: function (t) {
                var e = Nw(this, t);
                if (this.getBorderLineDash) {
                    var n = this.getBorderLineDash();
                    n && (e.lineDash = n);
                }
                return e;
            },
        },
        Vw = ta({
            type: "sausage",
            shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 },
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = Math.max(e.r0 || 0, 0),
                    a = Math.max(e.r, 0),
                    o = 0.5 * (a - r),
                    s = r + o,
                    l = e.startAngle,
                    h = e.endAngle,
                    u = e.clockwise,
                    c = Math.cos(l),
                    d = Math.sin(l),
                    f = Math.cos(h),
                    p = Math.sin(h),
                    g = u ? h - l < 2 * Math.PI : l - h < 2 * Math.PI;
                g && (t.moveTo(c * r + n, d * r + i), t.arc(c * s + n, d * s + i, o, -Math.PI + l, l, !u)),
                    t.arc(n, i, a, l, h, !u),
                    t.moveTo(f * a + n, p * a + i),
                    t.arc(f * s + n, p * s + i, o, h - 2 * Math.PI, h - Math.PI, !u),
                    0 !== r && (t.arc(n, i, r, h, l, u), t.moveTo(c * r + n, p * r + i)),
                    t.closePath();
            },
        }),
        Gw = ["itemStyle", "barBorderWidth"],
        Hw = [0, 0];
    o(Qa.prototype, Fw),
        mh({
            type: "bar",
            render: function (t, e, n) {
                this._updateDrawMode(t);
                var i = t.get("coordinateSystem");
                return ("cartesian2d" === i || "polar" === i) && (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), this.group;
            },
            incrementalPrepareRender: function (t) {
                this._clear(), this._updateDrawMode(t);
            },
            incrementalRender: function (t, e) {
                this._incrementalRenderLarge(t, e);
            },
            _updateDrawMode: function (t) {
                var e = t.pipelineContext.large;
                (null == this._isLargeDraw || e ^ this._isLargeDraw) && ((this._isLargeDraw = e), this._clear());
            },
            _renderNormal: function (t) {
                var e,
                    n = this.group,
                    i = t.getData(),
                    r = this._data,
                    a = t.coordinateSystem,
                    o = a.getBaseAxis();
                "cartesian2d" === a.type ? (e = o.isHorizontal()) : "polar" === a.type && (e = "angle" === o.dim);
                var s = t.isAnimationEnabled() ? t : null,
                    l = t.get("clip", !0),
                    h = vc(a, i);
                n.removeClipPath();
                var u = t.get("roundCap", !0);
                i
                    .diff(r)
                    .add(function (r) {
                        if (i.hasValue(r)) {
                            var o = i.getItemModel(r),
                                c = qw[a.type](i, r, o);
                            if (l) {
                                var d = Uw[a.type](h, c);
                                if (d) return void n.remove(f);
                            }
                            var f = Yw[a.type](r, c, e, s, !1, u);
                            i.setItemGraphicEl(r, f), n.add(f), _c(f, i, r, o, c, t, e, "polar" === a.type);
                        }
                    })
                    .update(function (o, c) {
                        var d = r.getItemGraphicEl(c);
                        if (!i.hasValue(o)) return void n.remove(d);
                        var f = i.getItemModel(o),
                            p = qw[a.type](i, o, f);
                        if (l) {
                            var g = Uw[a.type](h, p);
                            if (g) return void n.remove(d);
                        }
                        d ? Fa(d, { shape: p }, s, o) : (d = Yw[a.type](o, p, e, s, !0, u)), i.setItemGraphicEl(o, d), n.add(d), _c(d, i, o, f, p, t, e, "polar" === a.type);
                    })
                    .remove(function (t) {
                        var e = r.getItemGraphicEl(t);
                        "cartesian2d" === a.type ? e && mc(t, s, e) : e && yc(t, s, e);
                    })
                    .execute(),
                    (this._data = i);
            },
            _renderLarge: function (t) {
                this._clear(), wc(t, this.group);
                var e = t.get("clip", !0) ? gc(t.coordinateSystem, !1, t) : null;
                e ? this.group.setClipPath(e) : this.group.removeClipPath();
            },
            _incrementalRenderLarge: function (t, e) {
                wc(e, this.group, !0);
            },
            dispose: V,
            remove: function (t) {
                this._clear(t);
            },
            _clear: function (t) {
                var e = this.group,
                    n = this._data;
                t && t.get("animation") && n && !this._isLargeDraw
                    ? n.eachItemGraphicEl(function (e) {
                          "sector" === e.type ? yc(e.dataIndex, t, e) : mc(e.dataIndex, t, e);
                      })
                    : e.removeAll(),
                    (this._data = null);
            },
        });
    var Ww = Math.max,
        Xw = Math.min,
        Uw = {
            cartesian2d: function (t, e) {
                var n = e.width < 0 ? -1 : 1,
                    i = e.height < 0 ? -1 : 1;
                0 > n && ((e.x += e.width), (e.width = -e.width)), 0 > i && ((e.y += e.height), (e.height = -e.height));
                var r = Ww(e.x, t.x),
                    a = Xw(e.x + e.width, t.x + t.width),
                    o = Ww(e.y, t.y),
                    s = Xw(e.y + e.height, t.y + t.height);
                (e.x = r), (e.y = o), (e.width = a - r), (e.height = s - o);
                var l = e.width < 0 || e.height < 0;
                return 0 > n && ((e.x += e.width), (e.width = -e.width)), 0 > i && ((e.y += e.height), (e.height = -e.height)), l;
            },
            polar: function () {
                return !1;
            },
        },
        Yw = {
            cartesian2d: function (t, e, n, i, r) {
                var a = new lm({ shape: o({}, e) });
                if (i) {
                    var s = a.shape,
                        l = n ? "height" : "width",
                        h = {};
                    (s[l] = 0), (h[l] = e[l]), Om[r ? "updateProps" : "initProps"](a, { shape: h }, i, t);
                }
                return a;
            },
            polar: function (t, e, n, i, r, a) {
                var o = e.startAngle < e.endAngle,
                    l = !n && a ? Vw : tm,
                    h = new l({ shape: s({ clockwise: o }, e) });
                if (i) {
                    var u = h.shape,
                        c = n ? "r" : "endAngle",
                        d = {};
                    (u[c] = n ? 0 : e.startAngle), (d[c] = e[c]), Om[r ? "updateProps" : "initProps"](h, { shape: d }, i, t);
                }
                return h;
            },
        },
        qw = {
            cartesian2d: function (t, e, n) {
                var i = t.getItemLayout(e),
                    r = xc(n, i),
                    a = i.width > 0 ? 1 : -1,
                    o = i.height > 0 ? 1 : -1;
                return { x: i.x + (a * r) / 2, y: i.y + (o * r) / 2, width: i.width - a * r, height: i.height - o * r };
            },
            polar: function (t, e) {
                var n = t.getItemLayout(e);
                return { cx: n.cx, cy: n.cy, r0: n.r0, r: n.r, startAngle: n.startAngle, endAngle: n.endAngle };
            },
        },
        jw = Vr.extend({
            type: "largeBar",
            shape: { points: [] },
            buildPath: function (t, e) {
                for (var n = e.points, i = this.__startPoint, r = this.__baseDimIdx, a = 0; a < n.length; a += 2) (i[r] = n[a + r]), t.moveTo(i[0], i[1]), t.lineTo(n[a], n[a + 1]);
            },
        }),
        Zw = el(
            function (t) {
                var e = this,
                    n = bc(e, t.offsetX, t.offsetY);
                e.dataIndex = n >= 0 ? n : null;
            },
            30,
            !1
        ),
        Kw = Math.PI,
        $w = function (t, e) {
            (this.opt = e), (this.axisModel = t), s(e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: !0 }), (this.group = new zp());
            var n = new zp({ position: e.position.slice(), rotation: e.rotation });
            n.updateTransform(), (this._transform = n.transform), (this._dumbGroup = n);
        };
    $w.prototype = {
        constructor: $w,
        hasBuilder: function (t) {
            return !!Qw[t];
        },
        add: function (t) {
            Qw[t].call(this);
        },
        getGroup: function () {
            return this.group;
        },
    };
    var Qw = {
            axisLine: function () {
                var t = this.opt,
                    e = this.axisModel;
                if (e.get("axisLine.show")) {
                    var n = this.axisModel.axis.getExtent(),
                        i = this._transform,
                        r = [n[0], 0],
                        a = [n[1], 0];
                    i && (ae(r, r, i), ae(a, a, i));
                    var s = o({ lineCap: "round" }, e.getModel("axisLine.lineStyle").getLineStyle());
                    this.group.add(new um({ anid: "line", subPixelOptimize: !0, shape: { x1: r[0], y1: r[1], x2: a[0], y2: a[1] }, style: s, strokeContainThreshold: t.strokeContainThreshold || 5, silent: !0, z2: 1 }));
                    var l = e.get("axisLine.symbol"),
                        h = e.get("axisLine.symbolSize"),
                        u = e.get("axisLine.symbolOffset") || 0;
                    if (("number" == typeof u && (u = [u, u]), null != l)) {
                        "string" == typeof l && (l = [l, l]), ("string" == typeof h || "number" == typeof h) && (h = [h, h]);
                        var c = h[0],
                            d = h[1];
                        f(
                            [
                                { rotate: t.rotation + Math.PI / 2, offset: u[0], r: 0 },
                                { rotate: t.rotation - Math.PI / 2, offset: u[1], r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1])) },
                            ],
                            function (e, n) {
                                if ("none" !== l[n] && null != l[n]) {
                                    var i = Au(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
                                        a = e.r + e.offset,
                                        o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                                    i.attr({ rotation: e.rotate, position: o, silent: !0, z2: 11 }), this.group.add(i);
                                }
                            },
                            this
                        );
                    }
                }
            },
            axisTickLabel: function () {
                var t = this.axisModel,
                    e = this.opt,
                    n = Ac(this, t, e),
                    i = kc(this, t, e);
                Ic(t, i, n);
            },
            axisName: function () {
                var t = this.opt,
                    e = this.axisModel,
                    n = D(t.axisName, e.get("name"));
                if (n) {
                    var i,
                        r = e.get("nameLocation"),
                        a = t.nameDirection,
                        s = e.getModel("nameTextStyle"),
                        l = e.get("nameGap") || 0,
                        h = this.axisModel.axis.getExtent(),
                        u = h[0] > h[1] ? -1 : 1,
                        c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, Dc(r) ? t.labelOffset + a * l : 0],
                        d = e.get("nameRotate");
                    null != d && (d = (d * Kw) / 180);
                    var f;
                    Dc(r) ? (i = tb(t.rotation, null != d ? d : t.rotation, a)) : ((i = Mc(t, r, d || 0, h)), (f = t.axisNameAvailableWidth), null != f && ((f = Math.abs(f / Math.sin(i.rotation))), !isFinite(f) && (f = null)));
                    var p = s.getFont(),
                        g = e.get("nameTruncate", !0) || {},
                        v = g.ellipsis,
                        m = D(t.nameTruncateMaxWidth, g.maxWidth, f),
                        y = null != v && null != m ? Km(n, m, p, v, { minChar: 2, placeholder: g.placeholder }) : n,
                        _ = e.get("tooltip", !0),
                        x = e.mainType,
                        w = { componentType: x, name: n, $vars: ["name"] };
                    w[x + "Index"] = e.componentIndex;
                    var b = new Kv({
                        anid: "name",
                        __fullText: n,
                        __truncatedText: y,
                        position: c,
                        rotation: i.rotation,
                        silent: eb(e),
                        z2: 1,
                        tooltip:
                            _ && _.show
                                ? o(
                                      {
                                          content: n,
                                          formatter: function () {
                                              return n;
                                          },
                                          formatterParams: w,
                                      },
                                      _
                                  )
                                : null,
                    });
                    Aa(b.style, s, { text: y, textFont: p, textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"), textAlign: s.get("align") || i.textAlign, textVerticalAlign: s.get("verticalAlign") || i.textVerticalAlign }),
                        e.get("triggerEvent") && ((b.eventData = Jw(e)), (b.eventData.targetType = "axisName"), (b.eventData.name = n)),
                        this._dumbGroup.add(b),
                        b.updateTransform(),
                        this.group.add(b),
                        b.decomposeTransform();
                }
            },
        },
        Jw = ($w.makeAxisEventDataBase = function (t) {
            var e = { componentType: t.mainType, componentIndex: t.componentIndex };
            return (e[t.mainType + "Index"] = t.componentIndex), e;
        }),
        tb = ($w.innerTextLayout = function (t, e, n) {
            var i,
                r,
                a = po(e - t);
            return (
                go(a) ? ((r = n > 0 ? "top" : "bottom"), (i = "center")) : go(a - Kw) ? ((r = n > 0 ? "bottom" : "top"), (i = "center")) : ((r = "middle"), (i = a > 0 && Kw > a ? (n > 0 ? "right" : "left") : n > 0 ? "left" : "right")),
                { rotation: a, textAlign: i, textVerticalAlign: r }
            );
        }),
        eb = ($w.isLabelSilent = function (t) {
            var e = t.get("tooltip");
            return t.get("silent") || !(t.get("triggerEvent") || (e && e.show));
        }),
        nb = f,
        ib = _,
        rb = gh({
            type: "axis",
            _axisPointer: null,
            axisPointerClass: null,
            render: function (t, e, n, i) {
                this.axisPointerClass && Rc(t), rb.superApply(this, "render", arguments), Hc(this, t, e, n, i, !0);
            },
            updateAxisPointer: function (t, e, n, i) {
                Hc(this, t, e, n, i, !1);
            },
            remove: function (t, e) {
                var n = this._axisPointer;
                n && n.remove(e), rb.superApply(this, "remove", arguments);
            },
            dispose: function (t, e) {
                Wc(this, e), rb.superApply(this, "dispose", arguments);
            },
        }),
        ab = [];
    (rb.registerAxisPointerClass = function (t, e) {
        ab[t] = e;
    }),
        (rb.getAxisPointerClass = function (t) {
            return t && ab[t];
        });
    var ob = ["axisLine", "axisTickLabel", "axisName"],
        sb = ["splitArea", "splitLine"],
        lb = rb.extend({
            type: "cartesianAxis",
            axisPointerClass: "CartesianAxisPointer",
            render: function (t, e, n, i) {
                this.group.removeAll();
                var r = this._axisGroup;
                if (((this._axisGroup = new zp()), this.group.add(this._axisGroup), t.get("show"))) {
                    var a = t.getCoordSysModel(),
                        o = Xc(a, t),
                        s = new $w(t, o);
                    f(ob, s.add, s),
                        this._axisGroup.add(s.getGroup()),
                        f(
                            sb,
                            function (e) {
                                t.get(e + ".show") && this["_" + e](t, a);
                            },
                            this
                        ),
                        Xa(r, this._axisGroup, t),
                        lb.superCall(this, "render", t, e, n, i);
                }
            },
            remove: function () {
                this._splitAreaColors = null;
            },
            _splitLine: function (t, e) {
                var n = t.axis;
                if (!n.scale.isBlank()) {
                    var i = t.getModel("splitLine"),
                        r = i.getModel("lineStyle"),
                        a = r.get("color");
                    a = x(a) ? a : [a];
                    for (var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), h = 0, u = n.getTicksCoords({ tickModel: i }), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {
                        var g = n.toGlobalCoord(u[p].coord);
                        l ? ((c[0] = g), (c[1] = o.y), (d[0] = g), (d[1] = o.y + o.height)) : ((c[0] = o.x), (c[1] = g), (d[0] = o.x + o.width), (d[1] = g));
                        var v = h++ % a.length,
                            m = u[p].tickValue;
                        this._axisGroup.add(new um({ anid: null != m ? "line_" + u[p].tickValue : null, subPixelOptimize: !0, shape: { x1: c[0], y1: c[1], x2: d[0], y2: d[1] }, style: s({ stroke: a[v] }, f), silent: !0 }));
                    }
                }
            },
            _splitArea: function (t, e) {
                var n = t.axis;
                if (!n.scale.isBlank()) {
                    var i = t.getModel("splitArea"),
                        r = i.getModel("areaStyle"),
                        a = r.get("color"),
                        o = e.coordinateSystem.getRect(),
                        l = n.getTicksCoords({ tickModel: i, clamp: !0 });
                    if (l.length) {
                        var h = a.length,
                            u = this._splitAreaColors,
                            c = N(),
                            d = 0;
                        if (u)
                            for (var f = 0; f < l.length; f++) {
                                var p = u.get(l[f].tickValue);
                                if (null != p) {
                                    d = (p + (h - 1) * f) % h;
                                    break;
                                }
                            }
                        var g = n.toGlobalCoord(l[0].coord),
                            v = r.getAreaStyle();
                        a = x(a) ? a : [a];
                        for (var f = 1; f < l.length; f++) {
                            var m,
                                y,
                                _,
                                w,
                                b = n.toGlobalCoord(l[f].coord);
                            n.isHorizontal() ? ((m = g), (y = o.y), (_ = b - m), (w = o.height), (g = m + _)) : ((m = o.x), (y = g), (_ = o.width), (w = b - y), (g = y + w));
                            var S = l[f - 1].tickValue;
                            null != S && c.set(S, d), this._axisGroup.add(new lm({ anid: null != S ? "area_" + S : null, shape: { x: m, y: y, width: _, height: w }, style: s({ fill: a[d] }, v), silent: !0 })), (d = (d + 1) % h);
                        }
                        this._splitAreaColors = c;
                    }
                }
            },
        });
    lb.extend({ type: "xAxis" }),
        lb.extend({ type: "yAxis" }),
        gh({
            type: "grid",
            render: function (t) {
                this.group.removeAll(), t.get("show") && this.group.add(new lm({ shape: t.coordinateSystem.getRect(), style: s({ fill: t.get("backgroundColor") }, t.getItemStyle()), silent: !0, z2: -1 }));
            },
        }),
        rh(function (t) {
            t.xAxis && t.yAxis && !t.grid && (t.grid = {});
        }),
        uh(Z_.VISUAL.LAYOUT, _(du, "bar")),
        uh(Z_.VISUAL.PROGRESSIVE_LAYOUT, Hx),
        ch({
            seriesType: "bar",
            reset: function (t) {
                t.getData().setVisual("legendSymbol", "roundRect");
            },
        }),
        Uy.extend({
            type: "series.line",
            dependencies: ["grid", "polar"],
            getInitialData: function () {
                return qh(this.getSource(), this);
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                clip: !0,
                label: { position: "top" },
                lineStyle: { width: 2, type: "solid" },
                step: !1,
                smooth: !1,
                smoothMonotone: null,
                symbol: "emptyCircle",
                symbolSize: 4,
                symbolRotate: null,
                showSymbol: !0,
                showAllSymbol: "auto",
                connectNulls: !1,
                sampling: "none",
                animationEasing: "linear",
                progressive: 0,
                hoverLayerThreshold: 1 / 0,
            },
        });
    var hb = Uc.prototype,
        ub = (Uc.getSymbolSize = function (t, e) {
            var n = t.getItemVisual(e, "symbolSize");
            return n instanceof Array ? n.slice() : [+n, +n];
        });
    (hb._createSymbol = function (t, e, n, i, r) {
        this.removeAll();
        var a = e.getItemVisual(n, "color"),
            o = Au(t, -1, -1, 2, 2, a, r);
        o.attr({ z2: 100, culling: !0, scale: Yc(i) }), (o.drift = qc), (this._symbolType = t), this.add(o);
    }),
        (hb.stopSymbolAnimation = function (t) {
            this.childAt(0).stopAnimation(t);
        }),
        (hb.getSymbolPath = function () {
            return this.childAt(0);
        }),
        (hb.getScale = function () {
            return this.childAt(0).scale;
        }),
        (hb.highlight = function () {
            this.childAt(0).trigger("emphasis");
        }),
        (hb.downplay = function () {
            this.childAt(0).trigger("normal");
        }),
        (hb.setZ = function (t, e) {
            var n = this.childAt(0);
            (n.zlevel = t), (n.z = e);
        }),
        (hb.setDraggable = function (t) {
            var e = this.childAt(0);
            (e.draggable = t), (e.cursor = t ? "move" : e.cursor);
        }),
        (hb.updateData = function (t, e, n) {
            this.silent = !1;
            var i = t.getItemVisual(e, "symbol") || "circle",
                r = t.hostModel,
                a = ub(t, e),
                o = i !== this._symbolType;
            if (o) {
                var s = t.getItemVisual(e, "symbolKeepAspect");
                this._createSymbol(i, t, e, a, s);
            } else {
                var l = this.childAt(0);
                (l.silent = !1), Fa(l, { scale: Yc(a) }, r, e);
            }
            if ((this._updateCommon(t, e, a, n), o)) {
                var l = this.childAt(0),
                    h = n && n.fadeIn,
                    u = { scale: l.scale.slice() };
                h && (u.style = { opacity: l.style.opacity }), (l.scale = [0, 0]), h && (l.style.opacity = 0), Va(l, u, r, e);
            }
            this._seriesModel = r;
        });
    var cb = ["itemStyle"],
        db = ["emphasis", "itemStyle"],
        fb = ["label"],
        pb = ["emphasis", "label"];
    (hb._updateCommon = function (t, e, n, i) {
        function r(e) {
            return b ? t.getName(e) : uc(t, e);
        }
        var a = this.childAt(0),
            s = t.hostModel,
            l = t.getItemVisual(e, "color");
        "image" !== a.type ? a.useStyle({ strokeNoScale: !0 }) : a.setStyle({ opacity: null, shadowBlur: null, shadowOffsetX: null, shadowOffsetY: null, shadowColor: null });
        var h = i && i.itemStyle,
            u = i && i.hoverItemStyle,
            c = i && i.symbolRotate,
            d = i && i.symbolOffset,
            f = i && i.labelModel,
            p = i && i.hoverLabelModel,
            g = i && i.hoverAnimation,
            v = i && i.cursorStyle;
        if (!i || t.hasItemOption) {
            var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);
            (h = m.getModel(cb).getItemStyle(["color"])),
                (u = m.getModel(db).getItemStyle()),
                (c = m.getShallow("symbolRotate")),
                (d = m.getShallow("symbolOffset")),
                (f = m.getModel(fb)),
                (p = m.getModel(pb)),
                (g = m.getShallow("hoverAnimation")),
                (v = m.getShallow("cursor"));
        } else u = o({}, u);
        var y = a.style;
        a.attr("rotation", ((c || 0) * Math.PI) / 180 || 0), d && a.attr("position", [oo(d[0], n[0]), oo(d[1], n[1])]), v && a.attr("cursor", v), a.setColor(l, i && i.symbolInnerColor), a.setStyle(h);
        var _ = t.getItemVisual(e, "opacity");
        null != _ && (y.opacity = _);
        var x = t.getItemVisual(e, "liftZ"),
            w = a.__z2Origin;
        null != x ? null == w && ((a.__z2Origin = a.z2), (a.z2 += x)) : null != w && ((a.z2 = w), (a.__z2Origin = null));
        var b = i && i.useNameLabel;
        Ta(y, u, f, p, { labelFetcher: s, labelDataIndex: e, defaultText: r, isRectText: !0, autoColor: l }), (a.__symbolOriginalScale = Yc(n)), (a.hoverStyle = u), (a.highDownOnUpdate = g && s.isAnimationEnabled() ? jc : null), Sa(a);
    }),
        (hb.fadeOut = function (t, e) {
            var n = this.childAt(0);
            (this.silent = n.silent = !0), !(e && e.keepLabel) && (n.style.text = null), Fa(n, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, t);
        }),
        u(Uc, zp);
    var gb = Zc.prototype;
    (gb.updateData = function (t, e) {
        e = $c(e);
        var n = this.group,
            i = t.hostModel,
            r = this._data,
            a = this._symbolCtor,
            o = Qc(t);
        r || n.removeAll(),
            t
                .diff(r)
                .add(function (i) {
                    var r = t.getItemLayout(i);
                    if (Kc(t, r, i, e)) {
                        var s = new a(t, i, o);
                        s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s);
                    }
                })
                .update(function (s, l) {
                    var h = r.getItemGraphicEl(l),
                        u = t.getItemLayout(s);
                    return Kc(t, u, s, e) ? (h ? (h.updateData(t, s, o), Fa(h, { position: u }, i)) : ((h = new a(t, s)), h.attr("position", u)), n.add(h), void t.setItemGraphicEl(s, h)) : void n.remove(h);
                })
                .remove(function (t) {
                    var e = r.getItemGraphicEl(t);
                    e &&
                        e.fadeOut(function () {
                            n.remove(e);
                        });
                })
                .execute(),
            (this._data = t);
    }),
        (gb.isPersistent = function () {
            return !0;
        }),
        (gb.updateLayout = function () {
            var t = this._data;
            t &&
                t.eachItemGraphicEl(function (e, n) {
                    var i = t.getItemLayout(n);
                    e.attr("position", i);
                });
        }),
        (gb.incrementalPrepareUpdate = function (t) {
            (this._seriesScope = Qc(t)), (this._data = null), this.group.removeAll();
        }),
        (gb.incrementalUpdate = function (t, e, n) {
            function i(t) {
                t.isGroup || (t.incremental = t.useHoverLayer = !0);
            }
            n = $c(n);
            for (var r = t.start; r < t.end; r++) {
                var a = e.getItemLayout(r);
                if (Kc(e, a, r, n)) {
                    var o = new this._symbolCtor(e, r, this._seriesScope);
                    o.traverse(i), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o);
                }
            }
        }),
        (gb.remove = function (t) {
            var e = this.group,
                n = this._data;
            n && t
                ? n.eachItemGraphicEl(function (t) {
                      t.fadeOut(function () {
                          e.remove(t);
                      });
                  })
                : e.removeAll();
        });
    var vb = function (t, e, n, i, r, a, o, s) {
            for (var l = nd(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], v = Jc(r, e, o), m = Jc(a, t, s), y = 0; y < l.length; y++) {
                var _ = l[y],
                    x = !0;
                switch (_.cmd) {
                    case "=":
                        var w = t.getItemLayout(_.idx),
                            b = e.getItemLayout(_.idx1);
                        (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(n[_.idx]), d.push(i[_.idx1]), g.push(e.getRawIndex(_.idx1));
                        break;
                    case "+":
                        var S = _.idx;
                        h.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), u.push(e.getItemLayout(S).slice()), c.push(ed(v, r, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));
                        break;
                    case "-":
                        var S = _.idx,
                            M = t.getRawIndex(S);
                        M !== S ? (h.push(t.getItemLayout(S)), u.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(n[S]), d.push(ed(m, a, t, S)), g.push(M)) : (x = !1);
                }
                x && (f.push(_), p.push(p.length));
            }
            p.sort(function (t, e) {
                return g[t] - g[e];
            });
            for (var I = [], C = [], T = [], D = [], A = [], y = 0; y < p.length; y++) {
                var S = p[y];
                (I[y] = h[S]), (C[y] = u[S]), (T[y] = c[S]), (D[y] = d[S]), (A[y] = f[S]);
            }
            return { current: I, next: C, stackedOnCurrent: T, stackedOnNext: D, status: A };
        },
        mb = oe,
        yb = se,
        _b = Y,
        xb = H,
        wb = [],
        bb = [],
        Sb = [],
        Mb = Vr.extend({
            type: "ec-polyline",
            shape: { points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 },
            style: { fill: null, stroke: "#000" },
            brush: Jv(Vr.prototype.brush),
            buildPath: function (t, e) {
                var n = e.points,
                    i = 0,
                    r = n.length,
                    a = sd(n, e.smoothConstraint);
                if (e.connectNulls) {
                    for (; r > 0 && id(n[r - 1]); r--);
                    for (; r > i && id(n[i]); i++);
                }
                for (; r > i; ) i += rd(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
            },
        }),
        Ib = Vr.extend({
            type: "ec-polygon",
            shape: { points: [], stackedOnPoints: [], smooth: 0, stackedOnSmooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 },
            brush: Jv(Vr.prototype.brush),
            buildPath: function (t, e) {
                var n = e.points,
                    i = e.stackedOnPoints,
                    r = 0,
                    a = n.length,
                    o = e.smoothMonotone,
                    s = sd(n, e.smoothConstraint),
                    l = sd(i, e.smoothConstraint);
                if (e.connectNulls) {
                    for (; a > 0 && id(n[a - 1]); a--);
                    for (; a > r && id(n[r]); r++);
                }
                for (; a > r; ) {
                    var h = rd(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
                    rd(t, i, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), (r += h + 1), t.closePath();
                }
            },
        });
    Ks.extend({
        type: "line",
        init: function () {
            var t = new zp(),
                e = new Zc();
            this.group.add(e.group), (this._symbolDraw = e), (this._lineGroup = t);
        },
        render: function (t, e, n) {
            var i = t.coordinateSystem,
                r = this.group,
                a = t.getData(),
                o = t.getModel("lineStyle"),
                l = t.getModel("areaStyle"),
                h = a.mapArray(a.getItemLayout),
                u = "polar" === i.type,
                c = this._coordSys,
                d = this._symbolDraw,
                f = this._polyline,
                p = this._polygon,
                g = this._lineGroup,
                v = t.get("animation"),
                m = !l.isEmpty(),
                y = l.get("origin"),
                _ = Jc(i, a, y),
                x = ud(i, a, _),
                w = t.get("showSymbol"),
                b = w && !u && fd(t, a, i),
                S = this._data;
            S &&
                S.eachItemGraphicEl(function (t, e) {
                    t.__temp && (r.remove(t), S.setItemGraphicEl(e, null));
                }),
                w || d.remove(),
                r.add(g);
            var M,
                I = !u && t.get("step");
            i && i.getArea && ((M = i.getArea()), null != M.width ? ((M.x -= 0.1), (M.y -= 0.1), (M.width += 0.2), (M.height += 0.2)) : M.r0 && ((M.r0 -= 0.5), (M.r1 += 0.5))),
                f && c.type === i.type && I === this._step
                    ? (m && !p ? (p = this._newPolygon(h, x, i, v)) : p && !m && (g.remove(p), (p = this._polygon = null)),
                      g.setClipPath(gd(i, !1, t)),
                      w && d.updateData(a, { isIgnore: b, clipShape: M }),
                      a.eachItemGraphicEl(function (t) {
                          t.stopAnimation(!0);
                      }),
                      (ld(this._stackedOnPoints, x) && ld(this._points, h)) ||
                          (v ? this._updateAnimation(a, x, i, n, I, y) : (I && ((h = cd(h, i, I)), (x = cd(x, i, I))), f.setShape({ points: h }), p && p.setShape({ points: h, stackedOnPoints: x }))))
                    : (w && d.updateData(a, { isIgnore: b, clipShape: M }), I && ((h = cd(h, i, I)), (x = cd(x, i, I))), (f = this._newPolyline(h, i, v)), m && (p = this._newPolygon(h, x, i, v)), g.setClipPath(gd(i, !0, t)));
            var C = dd(a, i) || a.getVisual("color");
            f.useStyle(s(o.getLineStyle(), { fill: "none", stroke: C, lineJoin: "bevel" }));
            var T = t.get("smooth");
            if (((T = hd(t.get("smooth"))), f.setShape({ smooth: T, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") }), p)) {
                var D = a.getCalculationInfo("stackedOnSeries"),
                    A = 0;
                p.useStyle(s(l.getAreaStyle(), { fill: C, opacity: 0.7, lineJoin: "bevel" })),
                    D && (A = hd(D.get("smooth"))),
                    p.setShape({ smooth: T, stackedOnSmooth: A, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") });
            }
            (this._data = a), (this._coordSys = i), (this._stackedOnPoints = x), (this._points = h), (this._step = I), (this._valueOrigin = y);
        },
        dispose: function () {},
        highlight: function (t, e, n, i) {
            var r = t.getData(),
                a = qi(r, i);
            if (!(a instanceof Array) && null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                if (!o) {
                    var s = r.getItemLayout(a);
                    if (!s) return;
                    (o = new Uc(r, a)), (o.position = s), o.setZ(t.get("zlevel"), t.get("z")), (o.ignore = isNaN(s[0]) || isNaN(s[1])), (o.__temp = !0), r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o);
                }
                o.highlight();
            } else Ks.prototype.highlight.call(this, t, e, n, i);
        },
        downplay: function (t, e, n, i) {
            var r = t.getData(),
                a = qi(r, i);
            if (null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
            } else Ks.prototype.downplay.call(this, t, e, n, i);
        },
        _newPolyline: function (t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), (e = new Mb({ shape: { points: t }, silent: !0, z2: 10 })), this._lineGroup.add(e), (this._polyline = e), e;
        },
        _newPolygon: function (t, e) {
            var n = this._polygon;
            return n && this._lineGroup.remove(n), (n = new Ib({ shape: { points: t, stackedOnPoints: e }, silent: !0 })), this._lineGroup.add(n), (this._polygon = n), n;
        },
        _updateAnimation: function (t, e, n, i, r, a) {
            var o = this._polyline,
                s = this._polygon,
                l = t.hostModel,
                h = vb(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
                u = h.current,
                c = h.stackedOnCurrent,
                d = h.next,
                f = h.stackedOnNext;
            r && ((u = cd(h.current, n, r)), (c = cd(h.stackedOnCurrent, n, r)), (d = cd(h.next, n, r)), (f = cd(h.stackedOnNext, n, r))),
                (o.shape.__points = h.current),
                (o.shape.points = u),
                Fa(o, { shape: { points: d } }, l),
                s && (s.setShape({ points: u, stackedOnPoints: c }), Fa(s, { shape: { points: d, stackedOnPoints: f } }, l));
            for (var p = [], g = h.status, v = 0; v < g.length; v++) {
                var m = g[v].cmd;
                if ("=" === m) {
                    var y = t.getItemGraphicEl(g[v].idx1);
                    y && p.push({ el: y, ptIdx: v });
                }
            }
            o.animators &&
                o.animators.length &&
                o.animators[0].during(function () {
                    for (var t = 0; t < p.length; t++) {
                        var e = p[t].el;
                        e.attr("position", o.shape.__points[p[t].ptIdx]);
                    }
                });
        },
        remove: function () {
            var t = this.group,
                e = this._data;
            this._lineGroup.removeAll(),
                this._symbolDraw.remove(!0),
                e &&
                    e.eachItemGraphicEl(function (n, i) {
                        n.__temp && (t.remove(n), e.setItemGraphicEl(i, null));
                    }),
                (this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null);
        },
    });
    var Cb = function (t, e, n) {
            return {
                seriesType: t,
                performRawSeries: !0,
                reset: function (t, i) {
                    function r(e, n) {
                        if (c) {
                            var i = t.getRawValue(n),
                                r = t.getDataParams(n);
                            h && e.setItemVisual(n, "symbol", o(i, r)), u && e.setItemVisual(n, "symbolSize", s(i, r));
                        }
                        if (e.hasItemOption) {
                            var a = e.getItemModel(n),
                                l = a.getShallow("symbol", !0),
                                d = a.getShallow("symbolSize", !0),
                                f = a.getShallow("symbolKeepAspect", !0);
                            null != l && e.setItemVisual(n, "symbol", l), null != d && e.setItemVisual(n, "symbolSize", d), null != f && e.setItemVisual(n, "symbolKeepAspect", f);
                        }
                    }
                    var a = t.getData(),
                        o = t.get("symbol"),
                        s = t.get("symbolSize"),
                        l = t.get("symbolKeepAspect"),
                        h = w(o),
                        u = w(s),
                        c = h || u,
                        d = !h && o ? o : e,
                        f = u ? null : s;
                    return a.setVisual({ legendSymbol: n || d, symbol: d, symbolSize: f, symbolKeepAspect: l }), i.isSeriesFiltered(t) ? void 0 : { dataEach: a.hasItemOption || c ? r : null };
                },
            };
        },
        Tb = function (t) {
            return {
                seriesType: t,
                plan: jy(),
                reset: function (t) {
                    function e(t, e) {
                        for (var n = t.end - t.start, r = a && new Float32Array(n * s), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
                            var d;
                            if (1 === s) {
                                var f = e.get(o[0], l);
                                d = !isNaN(f) && i.dataToPoint(f, null, c);
                            } else {
                                var f = (u[0] = e.get(o[0], l)),
                                    p = (u[1] = e.get(o[1], l));
                                d = !isNaN(f) && !isNaN(p) && i.dataToPoint(u, null, c);
                            }
                            a ? ((r[h++] = d ? d[0] : 0 / 0), (r[h++] = d ? d[1] : 0 / 0)) : e.setItemLayout(l, (d && d.slice()) || [0 / 0, 0 / 0]);
                        }
                        a && e.setLayout("symbolPoints", r);
                    }
                    var n = t.getData(),
                        i = t.coordinateSystem,
                        r = t.pipelineContext,
                        a = r.large;
                    if (i) {
                        var o = p(i.dimensions, function (t) {
                                return n.mapDimension(t);
                            }).slice(0, 2),
                            s = o.length,
                            l = n.getCalculationInfo("stackResultDimension");
                        return Uh(n, o[0]) && (o[0] = l), Uh(n, o[1]) && (o[1] = l), s && { progress: e };
                    }
                },
            };
        },
        Db = {
            average: function (t) {
                for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || ((e += t[i]), n++);
                return 0 === n ? 0 / 0 : e / n;
            },
            sum: function (t) {
                for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
                return e;
            },
            max: function (t) {
                for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
                return isFinite(e) ? e : 0 / 0;
            },
            min: function (t) {
                for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
                return isFinite(e) ? e : 0 / 0;
            },
            nearest: function (t) {
                return t[0];
            },
        },
        Ab = function (t) {
            return Math.round(t.length / 2);
        },
        kb = function (t) {
            return {
                seriesType: t,
                modifyOutputEnd: !0,
                reset: function (t) {
                    var e = t.getData(),
                        n = t.get("sampling"),
                        i = t.coordinateSystem;
                    if ("cartesian2d" === i.type && n) {
                        var r = i.getBaseAxis(),
                            a = i.getOtherAxis(r),
                            o = r.getExtent(),
                            s = o[1] - o[0],
                            l = Math.round(e.count() / s);
                        if (l > 1) {
                            var h;
                            "string" == typeof n ? (h = Db[n]) : "function" == typeof n && (h = n), h && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, h, Ab));
                        }
                    }
                },
            };
        };
    ch(Cb("line", "circle", "line")), uh(Tb("line")), ah(Z_.PROCESSOR.STATISTIC, kb("line"));
    var Pb = function (t, e, n) {
            e = (x(e) && { coordDimensions: e }) || o({}, e);
            var i = t.getSource(),
                r = Lx(i, e),
                a = new Ax(r, t);
            return a.initData(i, n), a;
        },
        Lb = {
            updateSelectedMap: function (t) {
                (this._targetList = x(t) ? t.slice() : []),
                    (this._selectTargetMap = g(
                        t || [],
                        function (t, e) {
                            return t.set(e.name, e), t;
                        },
                        N()
                    ));
            },
            select: function (t, e) {
                var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
                    i = this.get("selectedMode");
                "single" === i &&
                    this._selectTargetMap.each(function (t) {
                        t.selected = !1;
                    }),
                    n && (n.selected = !0);
            },
            unSelect: function (t, e) {
                var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                n && (n.selected = !1);
            },
            toggleSelected: function (t, e) {
                var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0;
            },
            isSelected: function (t, e) {
                var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                return n && n.selected;
            },
        },
        Ob = vh({
            type: "series.pie",
            init: function (t) {
                Ob.superApply(this, "init", arguments),
                    (this.legendDataProvider = function () {
                        return this.getRawData();
                    }),
                    this.updateSelectedMap(this._createSelectableList()),
                    this._defaultLabelLine(t);
            },
            mergeOption: function (t) {
                Ob.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList());
            },
            getInitialData: function () {
                return Pb(this, ["value"]);
            },
            _createSelectableList: function () {
                for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); r > i; i++) n.push({ name: t.getName(i), value: t.get(e, i), selected: Rs(t, i, "selected") });
                return n;
            },
            getDataParams: function (t) {
                var e = this.getData(),
                    n = Ob.superCall(this, "getDataParams", t),
                    i = [];
                return (
                    e.each(e.mapDimension("value"), function (t) {
                        i.push(t);
                    }),
                    (n.percent = fo(i, t, e.hostModel.get("percentPrecision"))),
                    n.$vars.push("percent"),
                    n
                );
            },
            _defaultLabelLine: function (t) {
                Vi(t, "labelLine", ["show"]);
                var e = t.labelLine,
                    n = t.emphasis.labelLine;
                (e.show = e.show && t.label.show), (n.show = n.show && t.emphasis.label.show);
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                center: ["50%", "50%"],
                radius: [0, "75%"],
                clockwise: !0,
                startAngle: 90,
                minAngle: 0,
                minShowLabelAngle: 0,
                selectedOffset: 10,
                hoverOffset: 10,
                avoidLabelOverlap: !0,
                percentPrecision: 2,
                stillShowZeroSum: !0,
                label: { rotate: !1, show: !0, position: "outer" },
                labelLine: { show: !0, length: 15, length2: 15, smooth: !1, lineStyle: { width: 1, type: "solid" } },
                itemStyle: { borderWidth: 1 },
                animationType: "expansion",
                animationTypeUpdate: "transition",
                animationEasing: "cubicOut",
            },
        });
    c(Ob, Lb);
    var Bb = yd.prototype;
    (Bb.updateData = function (t, e, n) {
        var i = this.childAt(0),
            r = this.childAt(1),
            a = this.childAt(2),
            l = t.hostModel,
            h = t.getItemModel(e),
            u = t.getItemLayout(e),
            c = o({}, u);
        c.label = null;
        var d = l.getShallow("animationTypeUpdate");
        if (n) {
            i.setShape(c);
            var f = l.getShallow("animationType");
            "scale" === f ? ((i.shape.r = u.r0), Va(i, { shape: { r: u.r } }, l, e)) : ((i.shape.endAngle = u.startAngle), Fa(i, { shape: { endAngle: u.endAngle } }, l, e));
        } else "expansion" === d ? i.setShape(c) : Fa(i, { shape: c }, l, e);
        var p = t.getItemVisual(e, "color");
        i.useStyle(s({ lineJoin: "bevel", fill: p }, h.getModel("itemStyle").getItemStyle())), (i.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle());
        var g = h.getShallow("cursor");
        g && i.attr("cursor", g), md(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation"));
        var v = !n && "transition" === d;
        this._updateLabel(t, e, v),
            (this.highDownOnUpdate =
                h.get("hoverAnimation") && l.isAnimationEnabled()
                    ? function (t, e) {
                          "emphasis" === e
                              ? ((r.ignore = r.hoverIgnore), (a.ignore = a.hoverIgnore), i.stopAnimation(!0), i.animateTo({ shape: { r: u.r + l.get("hoverOffset") } }, 300, "elasticOut"))
                              : ((r.ignore = r.normalIgnore), (a.ignore = a.normalIgnore), i.stopAnimation(!0), i.animateTo({ shape: { r: u.r } }, 300, "elasticOut"));
                      }
                    : null),
            Sa(this);
    }),
        (Bb._updateLabel = function (t, e, n) {
            var i = this.childAt(1),
                r = this.childAt(2),
                a = t.hostModel,
                o = t.getItemModel(e),
                s = t.getItemLayout(e),
                l = s.label,
                h = t.getItemVisual(e, "color");
            if (!l || isNaN(l.x) || isNaN(l.y)) return void (r.ignore = r.normalIgnore = r.hoverIgnore = i.ignore = i.normalIgnore = i.hoverIgnore = !0);
            var u = {
                    points: l.linePoints || [
                        [l.x, l.y],
                        [l.x, l.y],
                        [l.x, l.y],
                    ],
                },
                c = { x: l.x, y: l.y };
            n ? (Fa(i, { shape: u }, a, e), Fa(r, { style: c }, a, e)) : (i.attr({ shape: u }), r.attr({ style: c })), r.attr({ rotation: l.rotation, origin: [l.x, l.y], z2: 10 });
            var d = o.getModel("label"),
                f = o.getModel("emphasis.label"),
                p = o.getModel("labelLine"),
                g = o.getModel("emphasis.labelLine"),
                h = t.getItemVisual(e, "color");
            Ta(
                r.style,
                (r.hoverStyle = {}),
                d,
                f,
                { labelFetcher: t.hostModel, labelDataIndex: e, defaultText: t.getName(e), autoColor: h, useInsideStyle: !!l.inside },
                { textAlign: l.textAlign, textVerticalAlign: l.verticalAlign, opacity: t.getItemVisual(e, "opacity") }
            ),
                (r.ignore = r.normalIgnore = !d.get("show")),
                (r.hoverIgnore = !f.get("show")),
                (i.ignore = i.normalIgnore = !p.get("show")),
                (i.hoverIgnore = !g.get("show")),
                i.setStyle({ stroke: h, opacity: t.getItemVisual(e, "opacity") }),
                i.setStyle(p.getModel("lineStyle").getLineStyle()),
                (i.hoverStyle = g.getModel("lineStyle").getLineStyle());
            var v = p.get("smooth");
            v && v === !0 && (v = 0.4), i.setShape({ smooth: v });
        }),
        u(yd, zp);
    var Eb =
            (Ks.extend({
                type: "pie",
                init: function () {
                    var t = new zp();
                    this._sectorGroup = t;
                },
                render: function (t, e, n, i) {
                    if (!i || i.from !== this.uid) {
                        var r = t.getData(),
                            a = this._data,
                            o = this.group,
                            s = e.get("animation"),
                            l = !a,
                            h = t.get("animationType"),
                            u = t.get("animationTypeUpdate"),
                            c = _(vd, this.uid, t, s, n),
                            d = t.get("selectedMode");
                        if (
                            (r
                                .diff(a)
                                .add(function (t) {
                                    var e = new yd(r, t);
                                    l &&
                                        "scale" !== h &&
                                        e.eachChild(function (t) {
                                            t.stopAnimation(!0);
                                        }),
                                        d && e.on("click", c),
                                        r.setItemGraphicEl(t, e),
                                        o.add(e);
                                })
                                .update(function (t, e) {
                                    var n = a.getItemGraphicEl(e);
                                    l ||
                                        "transition" === u ||
                                        n.eachChild(function (t) {
                                            t.stopAnimation(!0);
                                        }),
                                        n.updateData(r, t),
                                        n.off("click"),
                                        d && n.on("click", c),
                                        o.add(n),
                                        r.setItemGraphicEl(t, n);
                                })
                                .remove(function (t) {
                                    var e = a.getItemGraphicEl(t);
                                    o.remove(e);
                                })
                                .execute(),
                            s && r.count() > 0 && (l ? "scale" !== h : "transition" !== u))
                        ) {
                            for (var f = r.getItemLayout(0), p = 1; isNaN(f.startAngle) && p < r.count(); ++p) f = r.getItemLayout(p);
                            var g = Math.max(n.getWidth(), n.getHeight()) / 2,
                                v = y(o.removeClipPath, o);
                            o.setClipPath(this._createClipPath(f.cx, f.cy, g, f.startAngle, f.clockwise, v, t, l));
                        } else o.removeClipPath();
                        this._data = r;
                    }
                },
                dispose: function () {},
                _createClipPath: function (t, e, n, i, r, a, o, s) {
                    var l = new tm({ shape: { cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: r } }),
                        h = s ? Va : Fa;
                    return h(l, { shape: { endAngle: i + (r ? 1 : -1) * Math.PI * 2 } }, o, a), l;
                },
                containPoint: function (t, e) {
                    var n = e.getData(),
                        i = n.getItemLayout(0);
                    if (i) {
                        var r = t[0] - i.cx,
                            a = t[1] - i.cy,
                            o = Math.sqrt(r * r + a * a);
                        return o <= i.r && o >= i.r0;
                    }
                },
            }),
            function (t, e) {
                f(e, function (e) {
                    (e.update = "updateView"),
                        sh(e, function (n, i) {
                            var r = {};
                            return (
                                i.eachComponent({ mainType: "series", subType: t, query: n }, function (t) {
                                    t[e.method] && t[e.method](n.name, n.dataIndex);
                                    var i = t.getData();
                                    i.each(function (e) {
                                        var n = i.getName(e);
                                        r[n] = t.isSelected(n) || !1;
                                    });
                                }),
                                { name: n.name, selected: r, seriesId: n.seriesId }
                            );
                        });
                });
            }),
        zb = function (t) {
            return {
                getTargetSeries: function (e) {
                    var n = {},
                        i = N();
                    return (
                        e.eachSeriesByType(t, function (t) {
                            (t.__paletteScope = n), i.set(t.uid, t);
                        }),
                        i
                    );
                },
                reset: function (t) {
                    var e = t.getRawData(),
                        n = {},
                        i = t.getData();
                    i.each(function (t) {
                        var e = i.getRawIndex(t);
                        n[e] = t;
                    }),
                        e.each(function (r) {
                            var a,
                                o = n[r],
                                s = null != o && i.getItemVisual(o, "color", !0),
                                l = null != o && i.getItemVisual(o, "borderColor", !0);
                            if (((s && l) || (a = e.getItemModel(r)), s)) e.setItemVisual(r, "color", s);
                            else {
                                var h = a.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
                                e.setItemVisual(r, "color", h), null != o && i.setItemVisual(o, "color", h);
                            }
                            if (l) e.setItemVisual(r, "borderColor", l);
                            else {
                                var u = a.get("itemStyle.borderColor");
                                e.setItemVisual(r, "borderColor", u), null != o && i.setItemVisual(o, "borderColor", u);
                            }
                        });
                },
            };
        },
        Rb = Math.PI / 180,
        Nb = function (t, e, n, i) {
            var r,
                a,
                o = t.getData(),
                s = [],
                l = !1,
                h = (t.get("minShowLabelAngle") || 0) * Rb;
            o.each(function (n) {
                var i = o.getItemLayout(n),
                    u = o.getItemModel(n),
                    c = u.getModel("label"),
                    d = c.get("position") || u.get("emphasis.label.position"),
                    f = u.getModel("labelLine"),
                    p = f.get("length"),
                    g = f.get("length2");
                if (!(i.angle < h)) {
                    var v,
                        m,
                        y,
                        _,
                        x = (i.startAngle + i.endAngle) / 2,
                        w = Math.cos(x),
                        b = Math.sin(x);
                    (r = i.cx), (a = i.cy);
                    var S = "inside" === d || "inner" === d;
                    if ("center" === d) (v = i.cx), (m = i.cy), (_ = "center");
                    else {
                        var M = (S ? ((i.r + i.r0) / 2) * w : i.r * w) + r,
                            I = (S ? ((i.r + i.r0) / 2) * b : i.r * b) + a;
                        if (((v = M + 3 * w), (m = I + 3 * b), !S)) {
                            var C = M + w * (p + e - i.r),
                                T = I + b * (p + e - i.r),
                                D = C + (0 > w ? -1 : 1) * g,
                                A = T;
                            (v = D + (0 > w ? -5 : 5)),
                                (m = A),
                                (y = [
                                    [M, I],
                                    [C, T],
                                    [D, A],
                                ]);
                        }
                        _ = S ? "center" : w > 0 ? "left" : "right";
                    }
                    var k,
                        P = c.getFont(),
                        L = c.get("rotate");
                    k = "number" == typeof L ? L * (Math.PI / 180) : L ? (0 > w ? -x + Math.PI : -x) : 0;
                    var O = t.getFormattedLabel(n, "normal") || o.getName(n),
                        B = Vn(O, P, _, "top");
                    (l = !!k), (i.label = { x: v, y: m, position: d, height: B.height, len: p, len2: g, linePoints: y, textAlign: _, verticalAlign: "middle", rotation: k, inside: S }), S || s.push(i.label);
                }
            }),
                !l && t.get("avoidLabelOverlap") && xd(s, r, a, e, n, i);
        },
        Fb = 2 * Math.PI,
        Vb = Math.PI / 180,
        Gb = function (t, e, n) {
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(),
                    i = e.mapDimension("value"),
                    r = t.get("center"),
                    a = t.get("radius");
                x(a) || (a = [0, a]), x(r) || (r = [r, r]);
                var o = n.getWidth(),
                    s = n.getHeight(),
                    l = Math.min(o, s),
                    h = oo(r[0], o),
                    u = oo(r[1], s),
                    c = oo(a[0], l / 2),
                    d = oo(a[1], l / 2),
                    f = -t.get("startAngle") * Vb,
                    p = t.get("minAngle") * Vb,
                    g = 0;
                e.each(i, function (t) {
                    !isNaN(t) && g++;
                });
                var v = e.getSum(i),
                    m = (Math.PI / (v || g)) * 2,
                    y = t.get("clockwise"),
                    _ = t.get("roseType"),
                    w = t.get("stillShowZeroSum"),
                    b = e.getDataExtent(i);
                b[0] = 0;
                var S = Fb,
                    M = 0,
                    I = f,
                    C = y ? 1 : -1;
                if (
                    (e.each(i, function (t, n) {
                        var i;
                        if (isNaN(t)) return void e.setItemLayout(n, { angle: 0 / 0, startAngle: 0 / 0, endAngle: 0 / 0, clockwise: y, cx: h, cy: u, r0: c, r: _ ? 0 / 0 : d });
                        (i = "area" !== _ ? (0 === v && w ? m : t * m) : Fb / g), p > i ? ((i = p), (S -= p)) : (M += t);
                        var r = I + C * i;
                        e.setItemLayout(n, { angle: i, startAngle: I, endAngle: r, clockwise: y, cx: h, cy: u, r0: c, r: _ ? ao(t, b, [c, d]) : d }), (I = r);
                    }),
                    Fb > S && g)
                )
                    if (0.001 >= S) {
                        var T = Fb / g;
                        e.each(i, function (t, n) {
                            if (!isNaN(t)) {
                                var i = e.getItemLayout(n);
                                (i.angle = T), (i.startAngle = f + C * n * T), (i.endAngle = f + C * (n + 1) * T);
                            }
                        });
                    } else
                        (m = S / M),
                            (I = f),
                            e.each(i, function (t, n) {
                                if (!isNaN(t)) {
                                    var i = e.getItemLayout(n),
                                        r = i.angle === p ? p : t * m;
                                    (i.startAngle = I), (i.endAngle = I + C * r), (I += C * r);
                                }
                            });
                Nb(t, d, o, s);
            });
        },
        Hb = function (t) {
            return {
                seriesType: t,
                reset: function (t, e) {
                    var n = e.findComponents({ mainType: "legend" });
                    if (n && n.length) {
                        var i = t.getData();
                        i.filterSelf(function (t) {
                            for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;
                            return !0;
                        });
                    }
                },
            };
        };
    Eb("pie", [
        { type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected" },
        { type: "pieSelect", event: "pieselected", method: "select" },
        { type: "pieUnSelect", event: "pieunselected", method: "unSelect" },
    ]),
        ch(zb("pie")),
        uh(_(Gb, "pie")),
        ah(Hb("pie")),
        ph({
            type: "title",
            layoutMode: { type: "box", ignoreSize: !0 },
            defaultOption: {
                zlevel: 0,
                z: 6,
                show: !0,
                text: "",
                target: "blank",
                subtext: "",
                subtarget: "blank",
                left: 0,
                top: 0,
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                textStyle: { fontSize: 18, fontWeight: "bolder", color: "#333" },
                subtextStyle: { color: "#aaa" },
            },
        }),
        gh({
            type: "title",
            render: function (t, e, n) {
                if ((this.group.removeAll(), t.get("show"))) {
                    var i = this.group,
                        r = t.getModel("textStyle"),
                        a = t.getModel("subtextStyle"),
                        o = t.get("textAlign"),
                        s = A(t.get("textBaseline"), t.get("textVerticalAlign")),
                        l = new Kv({ style: Aa({}, r, { text: t.get("text"), textFill: r.getTextColor() }, { disableBox: !0 }), z2: 10 }),
                        h = l.getBoundingRect(),
                        u = t.get("subtext"),
                        c = new Kv({ style: Aa({}, a, { text: u, textFill: a.getTextColor(), y: h.height + t.get("itemGap"), textVerticalAlign: "top" }, { disableBox: !0 }), z2: 10 }),
                        d = t.get("link"),
                        f = t.get("sublink"),
                        p = t.get("triggerEvent", !0);
                    (l.silent = !d && !p),
                        (c.silent = !f && !p),
                        d &&
                            l.on("click", function () {
                                window.open(d, "_" + t.get("target"));
                            }),
                        f &&
                            c.on("click", function () {
                                window.open(f, "_" + t.get("subtarget"));
                            }),
                        (l.eventData = c.eventData = p ? { componentType: "title", componentIndex: t.componentIndex } : null),
                        i.add(l),
                        u && i.add(c);
                    var g = i.getBoundingRect(),
                        v = t.getBoxLayoutParams();
                    (v.width = g.width), (v.height = g.height);
                    var m = Eo(v, { width: n.getWidth(), height: n.getHeight() }, t.get("padding"));
                    o || ((o = t.get("left") || t.get("right")), "middle" === o && (o = "center"), "right" === o ? (m.x += m.width) : "center" === o && (m.x += m.width / 2)),
                        s || ((s = t.get("top") || t.get("bottom")), "center" === s && (s = "middle"), "bottom" === s ? (m.y += m.height) : "middle" === s && (m.y += m.height / 2), (s = s || "top")),
                        i.attr("position", [m.x, m.y]);
                    var y = { textAlign: o, textVerticalAlign: s };
                    l.setStyle(y), c.setStyle(y), (g = i.getBoundingRect());
                    var _ = m.margin,
                        x = t.getItemStyle(["color", "opacity"]);
                    x.fill = t.get("backgroundColor");
                    var w = new lm({ shape: { x: g.x - _[3], y: g.y - _[0], width: g.width + _[1] + _[3], height: g.height + _[0] + _[2], r: t.get("borderRadius") }, style: x, subPixelOptimize: !0, silent: !0 });
                    i.add(w);
                }
            },
        });
    var Wb = i_.legend.selector,
        Xb = { all: { type: "all", title: i(Wb.all) }, inverse: { type: "inverse", title: i(Wb.inverse) } },
        Ub = ph({
            type: "legend.plain",
            dependencies: ["series"],
            layoutMode: { type: "box", ignoreSize: !0 },
            init: function (t, e, n) {
                this.mergeDefaultAndTheme(t, n), (t.selected = t.selected || {}), this._updateSelector(t);
            },
            mergeOption: function (t) {
                Ub.superCall(this, "mergeOption", t), this._updateSelector(t);
            },
            _updateSelector: function (t) {
                var e = t.selector;
                e === !0 && (e = t.selector = ["all", "inverse"]),
                    x(e) &&
                        f(e, function (t, n) {
                            b(t) && (t = { type: t }), (e[n] = r(t, Xb[t.type]));
                        });
            },
            optionUpdated: function () {
                this._updateData(this.ecModel);
                var t = this._data;
                if (t[0] && "single" === this.get("selectedMode")) {
                    for (var e = !1, n = 0; n < t.length; n++) {
                        var i = t[n].get("name");
                        if (this.isSelected(i)) {
                            this.select(i), (e = !0);
                            break;
                        }
                    }
                    !e && this.select(t[0].get("name"));
                }
            },
            _updateData: function (t) {
                var e = [],
                    n = [];
                t.eachRawSeries(function (i) {
                    var r = i.name;
                    n.push(r);
                    var a;
                    if (i.legendDataProvider) {
                        var o = i.legendDataProvider(),
                            s = o.mapArray(o.getName);
                        t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? (e = e.concat(s)) : (a = !0);
                    } else a = !0;
                    a && Ui(i) && e.push(i.name);
                }),
                    (this._availableNames = n);
                var i = this.get("data") || e,
                    r = p(
                        i,
                        function (t) {
                            return ("string" == typeof t || "number" == typeof t) && (t = { name: t }), new Qa(t, this, this.ecModel);
                        },
                        this
                    );
                this._data = r;
            },
            getData: function () {
                return this._data;
            },
            select: function (t) {
                var e = this.option.selected,
                    n = this.get("selectedMode");
                if ("single" === n) {
                    var i = this._data;
                    f(i, function (t) {
                        e[t.get("name")] = !1;
                    });
                }
                e[t] = !0;
            },
            unSelect: function (t) {
                "single" !== this.get("selectedMode") && (this.option.selected[t] = !1);
            },
            toggleSelected: function (t) {
                var e = this.option.selected;
                e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t);
            },
            allSelect: function () {
                var t = this._data,
                    e = this.option.selected;
                f(t, function (t) {
                    e[t.get("name", !0)] = !0;
                });
            },
            inverseSelect: function () {
                var t = this._data,
                    e = this.option.selected;
                f(t, function (t) {
                    var n = t.get("name", !0);
                    e.hasOwnProperty(n) || (e[n] = !0), (e[n] = !e[n]);
                });
            },
            isSelected: function (t) {
                var e = this.option.selected;
                return !(e.hasOwnProperty(t) && !e[t]) && h(this._availableNames, t) >= 0;
            },
            getOrient: function () {
                return "vertical" === this.get("orient") ? { index: 1, name: "vertical" } : { index: 0, name: "horizontal" };
            },
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                orient: "horizontal",
                left: "center",
                top: 0,
                align: "auto",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderRadius: 0,
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                inactiveColor: "#ccc",
                inactiveBorderColor: "#ccc",
                itemStyle: { borderWidth: 0 },
                textStyle: { color: "#333" },
                selectedMode: !0,
                selector: !1,
                selectorLabel: { show: !0, borderRadius: 10, padding: [3, 5, 3, 5], fontSize: 12, fontFamily: " sans-serif", color: "#666", borderWidth: 1, borderColor: "#666" },
                emphasis: { selectorLabel: { show: !0, color: "#eee", backgroundColor: "#666" } },
                selectorPosition: "auto",
                selectorItemGap: 7,
                selectorButtonGap: 10,
                tooltip: { show: !1 },
            },
        });
    sh("legendToggleSelect", "legendselectchanged", _(bd, "toggleSelected")),
        sh("legendAllSelect", "legendselectall", _(bd, "allSelect")),
        sh("legendInverseSelect", "legendinverseselect", _(bd, "inverseSelect")),
        sh("legendSelect", "legendselected", _(bd, "select")),
        sh("legendUnSelect", "legendunselected", _(bd, "unSelect"));
    var Yb = _,
        qb = f,
        jb = zp,
        Zb = gh({
            type: "legend.plain",
            newlineDisabled: !1,
            init: function () {
                this.group.add((this._contentGroup = new jb())), this._backgroundEl, this.group.add((this._selectorGroup = new jb())), (this._isFirstRender = !0);
            },
            getContentGroup: function () {
                return this._contentGroup;
            },
            getSelectorGroup: function () {
                return this._selectorGroup;
            },
            render: function (t, e, n) {
                var i = this._isFirstRender;
                if (((this._isFirstRender = !1), this.resetInner(), t.get("show", !0))) {
                    var r = t.get("align"),
                        a = t.get("orient");
                    (r && "auto" !== r) || (r = "right" === t.get("left") && "vertical" === a ? "right" : "left");
                    var o = t.get("selector", !0),
                        l = t.get("selectorPosition", !0);
                    !o || (l && "auto" !== l) || (l = "horizontal" === a ? "end" : "start"), this.renderInner(r, t, e, n, o, a, l);
                    var h = t.getBoxLayoutParams(),
                        u = { width: n.getWidth(), height: n.getHeight() },
                        c = t.get("padding"),
                        d = Eo(h, u, c),
                        f = this.layoutInner(t, r, d, i, o, l),
                        p = Eo(s({ width: f.width, height: f.height }, h), u, c);
                    this.group.attr("position", [p.x - f.x, p.y - f.y]), this.group.add((this._backgroundEl = Sd(f, t)));
                }
            },
            resetInner: function () {
                this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
            },
            renderInner: function (t, e, n, i, r, a, o) {
                var s = this.getContentGroup(),
                    l = N(),
                    h = e.get("selectedMode"),
                    u = [];
                n.eachRawSeries(function (t) {
                    !t.get("legendHoverLink") && u.push(t.id);
                }),
                    qb(
                        e.getData(),
                        function (r, a) {
                            var o = r.get("name");
                            if (!this.newlineDisabled && ("" === o || "\n" === o)) return void s.add(new jb({ newline: !0 }));
                            var c = n.getSeriesByName(o)[0];
                            if (!l.get(o))
                                if (c) {
                                    var d = c.getData(),
                                        f = d.getVisual("color"),
                                        p = d.getVisual("borderColor");
                                    "function" == typeof f && (f = f(c.getDataParams(0))), "function" == typeof p && (p = p(c.getDataParams(0)));
                                    var g = d.getVisual("legendSymbol") || "roundRect",
                                        v = d.getVisual("symbol"),
                                        m = this._createItem(o, a, r, e, g, v, t, f, p, h);
                                    m.on("click", Yb(Id, o, i)).on("mouseover", Yb(Cd, c.name, null, i, u)).on("mouseout", Yb(Td, c.name, null, i, u)), l.set(o, !0);
                                } else
                                    n.eachRawSeries(function (n) {
                                        if (!l.get(o) && n.legendDataProvider) {
                                            var s = n.legendDataProvider(),
                                                c = s.indexOfName(o);
                                            if (0 > c) return;
                                            var d = s.getItemVisual(c, "color"),
                                                f = s.getItemVisual(c, "borderColor"),
                                                p = "roundRect",
                                                g = this._createItem(o, a, r, e, p, null, t, d, f, h);
                                            g.on("click", Yb(Id, o, i)).on("mouseover", Yb(Cd, null, o, i, u)).on("mouseout", Yb(Td, null, o, i, u)), l.set(o, !0);
                                        }
                                    }, this);
                        },
                        this
                    ),
                    r && this._createSelector(r, e, i, a, o);
            },
            _createSelector: function (t, e, n) {
                function i(t) {
                    var i = t.type,
                        a = new Kv({
                            style: { x: 0, y: 0, align: "center", verticalAlign: "middle" },
                            onclick: function () {
                                n.dispatchAction({ type: "all" === i ? "legendAllSelect" : "legendInverseSelect" });
                            },
                        });
                    r.add(a);
                    var o = e.getModel("selectorLabel"),
                        s = e.getModel("emphasis.selectorLabel");
                    Ta(a.style, (a.hoverStyle = {}), o, s, { defaultText: t.title, isRectText: !1 }), Sa(a);
                }
                var r = this.getSelectorGroup();
                qb(t, function (t) {
                    i(t);
                });
            },
            _createItem: function (t, e, n, i, r, a, s, l, h, u) {
                var c = i.get("itemWidth"),
                    d = i.get("itemHeight"),
                    f = i.get("inactiveColor"),
                    p = i.get("inactiveBorderColor"),
                    g = i.get("symbolKeepAspect"),
                    v = i.getModel("itemStyle"),
                    m = i.isSelected(t),
                    y = new jb(),
                    _ = n.getModel("textStyle"),
                    x = n.get("icon"),
                    w = n.getModel("tooltip"),
                    b = w.parentModel;
                r = x || r;
                var S = Au(r, 0, 0, c, d, m ? l : f, null == g ? !0 : g);
                if ((y.add(Md(S, r, v, h, p, m)), !x && a && (a !== r || "none" === a))) {
                    var M = 0.8 * d;
                    "none" === a && (a = "circle");
                    var I = Au(a, (c - M) / 2, (d - M) / 2, M, M, m ? l : f, null == g ? !0 : g);
                    y.add(Md(I, a, v, h, p, m));
                }
                var C = "left" === s ? c + 5 : -5,
                    T = s,
                    D = i.get("formatter"),
                    A = t;
                "string" == typeof D && D ? (A = D.replace("{name}", null != t ? t : "")) : "function" == typeof D && (A = D(t)),
                    y.add(new Kv({ style: Aa({}, _, { text: A, x: C, y: d / 2, textFill: m ? _.getTextColor() : f, textAlign: T, textVerticalAlign: "middle" }) }));
                var k = new lm({
                    shape: y.getBoundingRect(),
                    invisible: !0,
                    tooltip: w.get("show")
                        ? o(
                              {
                                  content: t,
                                  formatter:
                                      b.get("formatter", !0) ||
                                      function () {
                                          return t;
                                      },
                                  formatterParams: { componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"] },
                              },
                              w.option
                          )
                        : null,
                });
                return (
                    y.add(k),
                    y.eachChild(function (t) {
                        t.silent = !0;
                    }),
                    (k.silent = !u),
                    this.getContentGroup().add(y),
                    Sa(y),
                    (y.__legendDataIndex = e),
                    y
                );
            },
            layoutInner: function (t, e, n, i, r, a) {
                var o = this.getContentGroup(),
                    s = this.getSelectorGroup();
                ey(t.get("orient"), o, t.get("itemGap"), n.width, n.height);
                var l = o.getBoundingRect(),
                    h = [-l.x, -l.y];
                if (r) {
                    ey("horizontal", s, t.get("selectorItemGap", !0));
                    var u = s.getBoundingRect(),
                        c = [-u.x, -u.y],
                        d = t.get("selectorButtonGap", !0),
                        f = t.getOrient().index,
                        p = 0 === f ? "width" : "height",
                        g = 0 === f ? "height" : "width",
                        v = 0 === f ? "y" : "x";
                    "end" === a ? (c[f] += l[p] + d) : (h[f] += u[p] + d), (c[1 - f] += l[g] / 2 - u[g] / 2), s.attr("position", c), o.attr("position", h);
                    var m = { x: 0, y: 0 };
                    return (m[p] = l[p] + d + u[p]), (m[g] = Math.max(l[g], u[g])), (m[v] = Math.min(0, u[v] + c[1 - f])), m;
                }
                return o.attr("position", h), this.group.getBoundingRect();
            },
            remove: function () {
                this.getContentGroup().removeAll(), (this._isFirstRender = !0);
            },
        }),
        Kb = function (t) {
            var e = t.findComponents({ mainType: "legend" });
            e &&
                e.length &&
                t.filterSeries(function (t) {
                    for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;
                    return !0;
                });
        };
    ah(Z_.PROCESSOR.SERIES_FILTER, Kb),
        ry.registerSubTypeDefaulter("legend", function () {
            return "plain";
        });
    var $b = Ub.extend({
            type: "legend.scroll",
            setScrollDataIndex: function (t) {
                this.option.scrollDataIndex = t;
            },
            defaultOption: {
                scrollDataIndex: 0,
                pageButtonItemGap: 5,
                pageButtonGap: null,
                pageButtonPosition: "end",
                pageFormatter: "{current}/{total}",
                pageIcons: { horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"], vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"] },
                pageIconColor: "#2f4554",
                pageIconInactiveColor: "#aaa",
                pageIconSize: 15,
                pageTextStyle: { color: "#333" },
                animationDurationUpdate: 800,
            },
            init: function (t, e, n, i) {
                var r = Ro(t);
                $b.superCall(this, "init", t, e, n, i), Dd(this, t, r);
            },
            mergeOption: function (t, e) {
                $b.superCall(this, "mergeOption", t, e), Dd(this, this.option, t);
            },
        }),
        Qb = zp,
        Jb = ["width", "height"],
        tS = ["x", "y"],
        eS = Zb.extend({
            type: "legend.scroll",
            newlineDisabled: !0,
            init: function () {
                eS.superCall(this, "init"),
                    (this._currentIndex = 0),
                    this.group.add((this._containerGroup = new Qb())),
                    this._containerGroup.add(this.getContentGroup()),
                    this.group.add((this._controllerGroup = new Qb())),
                    this._showController;
            },
            resetInner: function () {
                eS.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), (this._containerGroup.__rectSize = null);
            },
            renderInner: function (t, e, n, i, r, a, o) {
                function s(t, n) {
                    var r = t + "DataIndex",
                        a = qa(e.get("pageIcons", !0)[e.getOrient().name][n], { onclick: y(l._pageGo, l, r, e, i) }, { x: -u[0] / 2, y: -u[1] / 2, width: u[0], height: u[1] });
                    (a.name = t), h.add(a);
                }
                var l = this;
                eS.superCall(this, "renderInner", t, e, n, i, r, a, o);
                var h = this._controllerGroup,
                    u = e.get("pageIconSize", !0);
                x(u) || (u = [u, u]), s("pagePrev", 0);
                var c = e.getModel("pageTextStyle");
                h.add(new Kv({ name: "pageText", style: { textFill: c.getTextColor(), font: c.getFont(), textVerticalAlign: "middle", textAlign: "center" }, silent: !0 })), s("pageNext", 1);
            },
            layoutInner: function (t, e, n, r, a, o) {
                var s = this.getSelectorGroup(),
                    l = t.getOrient().index,
                    h = Jb[l],
                    u = tS[l],
                    c = Jb[1 - l],
                    d = tS[1 - l];
                a && ey("horizontal", s, t.get("selectorItemGap", !0));
                var f = t.get("selectorButtonGap", !0),
                    p = s.getBoundingRect(),
                    g = [-p.x, -p.y],
                    v = i(n);
                a && (v[h] = n[h] - p[h] - f);
                var m = this._layoutContentAndController(t, r, v, l, h, c, d);
                if (a) {
                    if ("end" === o) g[l] += m[h] + f;
                    else {
                        var y = p[h] + f;
                        (g[l] -= y), (m[u] -= y);
                    }
                    (m[h] += p[h] + f), (g[1 - l] += m[d] + m[c] / 2 - p[c] / 2), (m[c] = Math.max(m[c], p[c])), (m[d] = Math.min(m[d], p[d] + g[1 - l])), s.attr("position", g);
                }
                return m;
            },
            _layoutContentAndController: function (t, e, n, i, r, a, o) {
                var s = this.getContentGroup(),
                    l = this._containerGroup,
                    h = this._controllerGroup;
                ey(t.get("orient"), s, t.get("itemGap"), i ? n.width : null, i ? null : n.height), ey("horizontal", h, t.get("pageButtonItemGap", !0));
                var u = s.getBoundingRect(),
                    c = h.getBoundingRect(),
                    d = (this._showController = u[r] > n[r]),
                    f = [-u.x, -u.y];
                e || (f[i] = s.position[i]);
                var p = [0, 0],
                    g = [-c.x, -c.y],
                    v = A(t.get("pageButtonGap", !0), t.get("itemGap", !0));
                if (d) {
                    var m = t.get("pageButtonPosition", !0);
                    "end" === m ? (g[i] += n[r] - c[r]) : (p[i] += c[r] + v);
                }
                (g[1 - i] += u[a] / 2 - c[a] / 2), s.attr("position", f), l.attr("position", p), h.attr("position", g);
                var y = { x: 0, y: 0 };
                if (((y[r] = d ? n[r] : u[r]), (y[a] = Math.max(u[a], c[a])), (y[o] = Math.min(0, c[o] + g[1 - i])), (l.__rectSize = n[r]), d)) {
                    var _ = { x: 0, y: 0 };
                    (_[r] = Math.max(n[r] - c[r] - v, 0)), (_[a] = y[a]), l.setClipPath(new lm({ shape: _ })), (l.__rectSize = _[r]);
                } else
                    h.eachChild(function (t) {
                        t.attr({ invisible: !0, silent: !0 });
                    });
                var x = this._getPageInfo(t);
                return null != x.pageIndex && Fa(s, { position: x.contentPosition }, d ? t : !1), this._updatePageInfoView(t, x), y;
            },
            _pageGo: function (t, e, n) {
                var i = this._getPageInfo(e)[t];
                null != i && n.dispatchAction({ type: "legendScroll", scrollDataIndex: i, legendId: e.id });
            },
            _updatePageInfoView: function (t, e) {
                var n = this._controllerGroup;
                f(["pagePrev", "pageNext"], function (i) {
                    var r = null != e[i + "DataIndex"],
                        a = n.childOfName(i);
                    a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), (a.cursor = r ? "pointer" : "default"));
                });
                var i = n.childOfName("pageText"),
                    r = t.get("pageFormatter"),
                    a = e.pageIndex,
                    o = null != a ? a + 1 : 0,
                    s = e.pageCount;
                i && r && i.setStyle("text", b(r) ? r.replace("{current}", o).replace("{total}", s) : r({ current: o, total: s }));
            },
            _getPageInfo: function (t) {
                function e(t) {
                    if (t) {
                        var e = t.getBoundingRect(),
                            n = e[l] + t.position[o];
                        return { s: n, e: n + e[s], i: t.__legendDataIndex };
                    }
                }
                function n(t, e) {
                    return t.e >= e && t.s <= e + a;
                }
                var i = t.get("scrollDataIndex", !0),
                    r = this.getContentGroup(),
                    a = this._containerGroup.__rectSize,
                    o = t.getOrient().index,
                    s = Jb[o],
                    l = tS[o],
                    h = this._findTargetItemIndex(i),
                    u = r.children(),
                    c = u[h],
                    d = u.length,
                    f = d ? 1 : 0,
                    p = { contentPosition: r.position.slice(), pageCount: f, pageIndex: f - 1, pagePrevDataIndex: null, pageNextDataIndex: null };
                if (!c) return p;
                var g = e(c);
                p.contentPosition[o] = -g.s;
                for (var v = h + 1, m = g, y = g, _ = null; d >= v; ++v)
                    (_ = e(u[v])), ((!_ && y.e > m.s + a) || (_ && !n(_, m.s))) && ((m = y.i > m.i ? y : _), m && (null == p.pageNextDataIndex && (p.pageNextDataIndex = m.i), ++p.pageCount)), (y = _);
                for (var v = h - 1, m = g, y = g, _ = null; v >= -1; --v) (_ = e(u[v])), (_ && n(y, _.s)) || !(m.i < y.i) || ((y = m), null == p.pagePrevDataIndex && (p.pagePrevDataIndex = m.i), ++p.pageCount, ++p.pageIndex), (m = _);
                return p;
            },
            _findTargetItemIndex: function (t) {
                var e,
                    n,
                    i = this.getContentGroup();
                return (
                    this._showController &&
                        i.eachChild(function (i, r) {
                            var a = i.__legendDataIndex;
                            null == n && null != a && (n = r), a === t && (e = r);
                        }),
                    null != e ? e : n
                );
            },
        });
    sh("legendScroll", "legendscroll", function (t, e) {
        var n = t.scrollDataIndex;
        null != n &&
            e.eachComponent({ mainType: "legend", subType: "scroll", query: t }, function (t) {
                t.setScrollDataIndex(n);
            });
    });
    var nS = function (t, e) {
            var n,
                i = [],
                r = t.seriesIndex;
            if (null == r || !(n = e.getSeriesByIndex(r))) return { point: [] };
            var a = n.getData(),
                o = qi(a, t);
            if (null == o || 0 > o || x(o)) return { point: [] };
            var s = a.getItemGraphicEl(o),
                l = n.coordinateSystem;
            if (n.getTooltipPosition) i = n.getTooltipPosition(o) || [];
            else if (l && l.dataToPoint)
                i =
                    l.dataToPoint(
                        a.getValues(
                            p(l.dimensions, function (t) {
                                return a.mapDimension(t);
                            }),
                            o,
                            !0
                        )
                    ) || [];
            else if (s) {
                var h = s.getBoundingRect().clone();
                h.applyTransform(s.transform), (i = [h.x + h.width / 2, h.y + h.height / 2]);
            }
            return { point: i, el: s };
        },
        iS = f,
        rS = _,
        aS = ji(),
        oS = function (t, e, n) {
            var i = t.currTrigger,
                r = [t.x, t.y],
                a = t,
                o = t.dispatchAction || y(n.dispatchAction, n),
                s = e.getComponent("axisPointer").coordSysAxesInfo;
            if (s) {
                Nd(r) && (r = nS({ seriesIndex: a.seriesIndex, dataIndex: a.dataIndex }, e).point);
                var l = Nd(r),
                    h = a.axesInfo,
                    u = s.axesInfo,
                    c = "leave" === i || Nd(r),
                    d = {},
                    f = {},
                    p = { list: [], map: {} },
                    g = { showPointer: rS(Pd, f), showTooltip: rS(Ld, p) };
                iS(s.coordSysMap, function (t, e) {
                    var n = l || t.containPoint(r);
                    iS(s.coordSysAxesInfo[e], function (t) {
                        var e = t.axis,
                            i = zd(h, t);
                        if (!c && n && (!h || i)) {
                            var a = i && i.value;
                            null != a || l || (a = e.pointToData(r)), null != a && Ad(t, a, g, !1, d);
                        }
                    });
                });
                var v = {};
                return (
                    iS(u, function (t, e) {
                        var n = t.linkGroup;
                        n &&
                            !f[e] &&
                            iS(n.axesInfo, function (e, i) {
                                var r = f[i];
                                if (e !== t && r) {
                                    var a = r.value;
                                    n.mapper && (a = t.axis.scale.parse(n.mapper(a, Rd(e), Rd(t)))), (v[t.key] = a);
                                }
                            });
                    }),
                    iS(v, function (t, e) {
                        Ad(u[e], t, g, !0, d);
                    }),
                    Od(f, u, d),
                    Bd(p, r, t, o),
                    Ed(u, o, n),
                    d
                );
            }
        },
        sS =
            (ph({
                type: "axisPointer",
                coordSysAxesInfo: null,
                defaultOption: {
                    show: "auto",
                    triggerOn: null,
                    zlevel: 0,
                    z: 50,
                    type: "line",
                    snap: !1,
                    triggerTooltip: !0,
                    value: null,
                    status: null,
                    link: [],
                    animation: null,
                    animationDurationUpdate: 200,
                    lineStyle: { color: "#aaa", width: 1, type: "solid" },
                    shadowStyle: { color: "rgba(150,150,150,0.3)" },
                    label: { show: !0, formatter: null, precision: "auto", margin: 3, color: "#fff", padding: [5, 7, 5, 7], backgroundColor: "auto", borderColor: null, borderWidth: 0, shadowBlur: 3, shadowColor: "#aaa" },
                    handle: {
                        show: !1,
                        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                        size: 45,
                        margin: 50,
                        color: "#333",
                        shadowBlur: 3,
                        shadowColor: "#aaa",
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                        throttle: 40,
                    },
                },
            }),
            ji()),
        lS = f,
        hS = gh({
            type: "axisPointer",
            render: function (t, e, n) {
                var i = e.getComponent("tooltip"),
                    r = t.get("triggerOn") || (i && i.get("triggerOn")) || "mousemove|click";
                Fd("axisPointer", n, function (t, e, n) {
                    "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({ type: "updateAxisPointer", currTrigger: t, x: e && e.offsetX, y: e && e.offsetY });
                });
            },
            remove: function (t, e) {
                Ud(e.getZr(), "axisPointer"), hS.superApply(this._model, "remove", arguments);
            },
            dispose: function (t, e) {
                Ud("axisPointer", e), hS.superApply(this._model, "dispose", arguments);
            },
        }),
        uS = ji(),
        cS = i,
        dS = y;
    (Yd.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function (t, e, n, i) {
            var r = e.get("value"),
                a = e.get("status");
            if (((this._axisModel = t), (this._axisPointerModel = e), (this._api = n), i || this._lastValue !== r || this._lastStatus !== a)) {
                (this._lastValue = r), (this._lastStatus = a);
                var o = this._group,
                    s = this._handle;
                if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());
                o && o.show(), s && s.show();
                var l = {};
                this.makeElOption(l, r, t, e, n);
                var h = l.graphicKey;
                h !== this._lastGraphicKey && this.clear(n), (this._lastGraphicKey = h);
                var u = (this._moveAnimation = this.determineAnimation(t, e));
                if (o) {
                    var c = _(qd, e, u);
                    this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e);
                } else (o = this._group = new zp()), this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), n.getZr().add(o);
                $d(o, e, !0), this._renderHandle(r);
            }
        },
        remove: function (t) {
            this.clear(t);
        },
        dispose: function (t) {
            this.clear(t);
        },
        determineAnimation: function (t, e) {
            var n = e.get("animation"),
                i = t.axis,
                r = "category" === i.type,
                a = e.get("snap");
            if (!a && !r) return !1;
            if ("auto" === n || null == n) {
                var o = this.animationThreshold;
                if (r && i.getBandWidth() > o) return !0;
                if (a) {
                    var s = Nc(t).seriesDataCount,
                        l = i.getExtent();
                    return Math.abs(l[0] - l[1]) / s > o;
                }
                return !1;
            }
            return n === !0;
        },
        makeElOption: function () {},
        createPointerEl: function (t, e) {
            var n = e.pointer;
            if (n) {
                var i = (uS(t).pointerEl = new Om[n.type](cS(e.pointer)));
                t.add(i);
            }
        },
        createLabelEl: function (t, e, n, i) {
            if (e.label) {
                var r = (uS(t).labelEl = new lm(cS(e.label)));
                t.add(r), Zd(r, i);
            }
        },
        updatePointerEl: function (t, e, n) {
            var i = uS(t).pointerEl;
            i && e.pointer && (i.setStyle(e.pointer.style), n(i, { shape: e.pointer.shape }));
        },
        updateLabelEl: function (t, e, n, i) {
            var r = uS(t).labelEl;
            r && (r.setStyle(e.label.style), n(r, { shape: e.label.shape, position: e.label.position }), Zd(r, i));
        },
        _renderHandle: function (t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e = this._axisPointerModel,
                    n = this._api.getZr(),
                    i = this._handle,
                    r = e.getModel("handle"),
                    a = e.get("status");
                if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void (this._handle = null);
                var o;
                this._handle ||
                    ((o = !0),
                    (i = this._handle = qa(r.get("icon"), {
                        cursor: "move",
                        draggable: !0,
                        onmousemove: function (t) {
                            $f(t.event);
                        },
                        onmousedown: dS(this._onHandleDragMove, this, 0, 0),
                        drift: dS(this._onHandleDragMove, this),
                        ondragend: dS(this._onHandleDragEnd, this),
                    })),
                    n.add(i)),
                    $d(i, e, !1);
                var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
                i.setStyle(r.getItemStyle(null, s));
                var l = r.get("size");
                x(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), nl(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o);
            }
        },
        _moveHandleToValue: function (t, e) {
            qd(this._axisPointerModel, !e && this._moveAnimation, this._handle, Kd(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
        },
        _onHandleDragMove: function (t, e) {
            var n = this._handle;
            if (n) {
                this._dragging = !0;
                var i = this.updateHandleTransform(Kd(n), [t, e], this._axisModel, this._axisPointerModel);
                (this._payloadInfo = i), n.stopAnimation(), n.attr(Kd(i)), (uS(n).lastProp = null), this._doDispatchAxisPointer();
            }
        },
        _doDispatchAxisPointer: function () {
            var t = this._handle;
            if (t) {
                var e = this._payloadInfo,
                    n = this._axisModel;
                this._api.dispatchAction({ type: "updateAxisPointer", x: e.cursorPoint[0], y: e.cursorPoint[1], tooltipOption: e.tooltipOption, axesInfo: [{ axisDim: n.axis.dim, axisIndex: n.componentIndex }] });
            }
        },
        _onHandleDragEnd: function () {
            this._dragging = !1;
            var t = this._handle;
            if (t) {
                var e = this._axisPointerModel.get("value");
                this._moveHandleToValue(e), this._api.dispatchAction({ type: "hideTip" });
            }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function (t) {
            (this._lastValue = null), (this._lastStatus = null);
            var e = t.getZr(),
                n = this._group,
                i = this._handle;
            e && n && ((this._lastGraphicKey = null), n && e.remove(n), i && e.remove(i), (this._group = null), (this._handle = null), (this._payloadInfo = null));
        },
        doClear: function () {},
        buildLabel: function (t, e, n) {
            return (n = n || 0), { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
        },
    }),
        (Yd.prototype.constructor = Yd),
        nr(Yd);
    var fS = Yd.extend({
            makeElOption: function (t, e, n, i, r) {
                var a = n.axis,
                    o = a.grid,
                    s = i.get("type"),
                    l = sf(o, a).getOtherAxis(a).getGlobalExtent(),
                    h = a.toGlobalCoord(a.dataToCoord(e, !0));
                if (s && "none" !== s) {
                    var u = Qd(i),
                        c = pS[s](a, h, l);
                    (c.style = u), (t.graphicKey = c.type), (t.pointer = c);
                }
                var d = Xc(o.model, n);
                rf(e, t, d, n, i, r);
            },
            getHandleTransform: function (t, e, n) {
                var i = Xc(e.axis.grid.model, e, { labelInside: !1 });
                return (i.labelMargin = n.get("handle.margin")), { position: nf(e.axis, t, i), rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0) };
            },
            updateHandleTransform: function (t, e, n) {
                var i = n.axis,
                    r = i.grid,
                    a = i.getGlobalExtent(!0),
                    o = sf(r, i).getOtherAxis(i).getGlobalExtent(),
                    s = "x" === i.dim ? 0 : 1,
                    l = t.position;
                (l[s] += e[s]), (l[s] = Math.min(a[1], l[s])), (l[s] = Math.max(a[0], l[s]));
                var h = (o[1] + o[0]) / 2,
                    u = [h, h];
                u[s] = l[s];
                var c = [{ verticalAlign: "middle" }, { align: "center" }];
                return { position: l, rotation: t.rotation, cursorPoint: u, tooltipOption: c[s] };
            },
        }),
        pS = {
            line: function (t, e, n) {
                var i = af([e, n[0]], [e, n[1]], lf(t));
                return { type: "Line", subPixelOptimize: !0, shape: i };
            },
            shadow: function (t, e, n) {
                var i = Math.max(1, t.getBandWidth()),
                    r = n[1] - n[0];
                return { type: "Rect", shape: of([e - i / 2, n[0]], [i, r], lf(t)) };
            },
        };
    rb.registerAxisPointerClass("CartesianAxisPointer", fS),
        rh(function (t) {
            if (t) {
                (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
                var e = t.axisPointer.link;
                e && !x(e) && (t.axisPointer.link = [e]);
            }
        }),
        ah(Z_.PROCESSOR.STATISTIC, function (t, e) {
            t.getComponent("axisPointer").coordSysAxesInfo = Pc(t, e);
        }),
        sh({ type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer" }, oS),
        ph({
            type: "tooltip",
            dependencies: ["axisPointer"],
            defaultOption: {
                zlevel: 0,
                z: 60,
                show: !0,
                showContent: !0,
                trigger: "item",
                triggerOn: "mousemove|click",
                alwaysShowContent: !1,
                displayMode: "single",
                renderMode: "auto",
                confine: !1,
                showDelay: 0,
                hideDelay: 100,
                transitionDuration: 0.4,
                enterable: !1,
                backgroundColor: "rgba(50,50,50,0.7)",
                borderColor: "#333",
                borderRadius: 4,
                borderWidth: 0,
                padding: 5,
                extraCssText: "",
                axisPointer: { type: "line", axis: "auto", animation: "auto", animationDurationUpdate: 200, animationEasingUpdate: "exponentialOut", crossStyle: { color: "#999", width: 1, type: "dashed", textStyle: {} } },
                textStyle: { color: "#fff", fontSize: 14 },
            },
        });
    var gS = f,
        vS = Mo,
        mS = ["", "-webkit-", "-moz-", "-o-"],
        yS = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
    (df.prototype = {
        constructor: df,
        _enterable: !0,
        update: function () {
            var t = this._container,
                e = t.currentStyle || document.defaultView.getComputedStyle(t),
                n = t.style;
            "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative");
        },
        show: function (t) {
            clearTimeout(this._hideTimeout);
            var e = this.el;
            (e.style.cssText = yS + cf(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || "")),
                (e.style.display = e.innerHTML ? "block" : "none"),
                (e.style.pointerEvents = this._enterable ? "auto" : "none"),
                (this._show = !0);
        },
        setContent: function (t) {
            this.el.innerHTML = null == t ? "" : t;
        },
        setEnterable: function (t) {
            this._enterable = t;
        },
        getSize: function () {
            var t = this.el;
            return [t.clientWidth, t.clientHeight];
        },
        moveTo: function (t, e) {
            var n,
                i = this._zr;
            i && i.painter && (n = i.painter.getViewportRootOffset()) && ((t += n.offsetLeft), (e += n.offsetTop));
            var r = this.el.style;
            (r.left = t + "px"), (r.top = e + "px"), (this._x = t), (this._y = e);
        },
        hide: function () {
            (this.el.style.display = "none"), (this._show = !1);
        },
        hideLater: function (t) {
            !this._show || (this._inContent && this._enterable) || (t ? ((this._hideDelay = t), (this._show = !1), (this._hideTimeout = setTimeout(y(this.hide, this), t))) : this.hide());
        },
        isShow: function () {
            return this._show;
        },
        getOuterSize: function () {
            var t = this.el.clientWidth,
                e = this.el.clientHeight;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var n = document.defaultView.getComputedStyle(this.el);
                n && ((t += parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10)), (e += parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10)));
            }
            return { width: t, height: e };
        },
    }),
        (ff.prototype = {
            constructor: ff,
            _enterable: !0,
            update: function () {},
            show: function () {
                this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), (this._show = !0);
            },
            setContent: function (t, e, n) {
                this.el && this._zr.remove(this.el);
                for (var i = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0; ) {
                    var l = r.indexOf(o),
                        h = r.substr(s + a.length, l - s - a.length);
                    (i["marker" + h] =
                        h.indexOf("sub") > -1 ? { textWidth: 4, textHeight: 4, textBorderRadius: 2, textBackgroundColor: e[h], textOffset: [3, 0] } : { textWidth: 10, textHeight: 10, textBorderRadius: 5, textBackgroundColor: e[h] }),
                        (r = r.substr(l + 1)),
                        (s = r.indexOf("{marker"));
                }
                (this.el = new Kv({
                    style: { rich: i, text: t, textLineHeight: 20, textBackgroundColor: n.get("backgroundColor"), textBorderRadius: n.get("borderRadius"), textFill: n.get("textStyle.color"), textPadding: n.get("padding") },
                    z: n.get("z"),
                })),
                    this._zr.add(this.el);
                var u = this;
                this.el.on("mouseover", function () {
                    u._enterable && (clearTimeout(u._hideTimeout), (u._show = !0)), (u._inContent = !0);
                }),
                    this.el.on("mouseout", function () {
                        u._enterable && u._show && u.hideLater(u._hideDelay), (u._inContent = !1);
                    });
            },
            setEnterable: function (t) {
                this._enterable = t;
            },
            getSize: function () {
                var t = this.el.getBoundingRect();
                return [t.width, t.height];
            },
            moveTo: function (t, e) {
                this.el && this.el.attr("position", [t, e]);
            },
            hide: function () {
                this.el && this.el.hide(), (this._show = !1);
            },
            hideLater: function (t) {
                !this._show || (this._inContent && this._enterable) || (t ? ((this._hideDelay = t), (this._show = !1), (this._hideTimeout = setTimeout(y(this.hide, this), t))) : this.hide());
            },
            isShow: function () {
                return this._show;
            },
            getOuterSize: function () {
                var t = this.getSize();
                return { width: t[0], height: t[1] };
            },
        });
    var _S = y,
        xS = f,
        wS = oo,
        bS = new lm({ shape: { x: -1, y: -1, width: 2, height: 2 } });
    gh({
        type: "tooltip",
        init: function (t, e) {
            if (!Sf.node) {
                var n = t.getComponent("tooltip"),
                    i = n.get("renderMode");
                this._renderMode = Ji(i);
                var r;
                "html" === this._renderMode ? ((r = new df(e.getDom(), e)), (this._newLine = "<br/>")) : ((r = new ff(e)), (this._newLine = "\n")), (this._tooltipContent = r);
            }
        },
        render: function (t, e, n) {
            if (!Sf.node) {
                this.group.removeAll(), (this._tooltipModel = t), (this._ecModel = e), (this._api = n), (this._lastDataByCoordSys = null), (this._alwaysShowContent = t.get("alwaysShowContent"));
                var i = this._tooltipContent;
                i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();
            }
        },
        _initGlobalListener: function () {
            var t = this._tooltipModel,
                e = t.get("triggerOn");
            Fd(
                "itemTooltip",
                this._api,
                _S(function (t, n, i) {
                    "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i));
                }, this)
            );
        },
        _keepShow: function () {
            var t = this._tooltipModel,
                e = this._ecModel,
                n = this._api;
            if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                var i = this;
                clearTimeout(this._refreshUpdateTimeout),
                    (this._refreshUpdateTimeout = setTimeout(function () {
                        !n.isDisposed() && i.manuallyShowTip(t, e, n, { x: i._lastX, y: i._lastY });
                    }));
            }
        },
        manuallyShowTip: function (t, e, n, i) {
            if (i.from !== this.uid && !Sf.node) {
                var r = gf(i, n);
                this._ticket = "";
                var a = i.dataByCoordSys;
                if (i.tooltip && null != i.x && null != i.y) {
                    var o = bS;
                    (o.position = [i.x, i.y]), o.update(), (o.tooltip = i.tooltip), this._tryShow({ offsetX: i.x, offsetY: i.y, target: o }, r);
                } else if (a) this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, event: {}, dataByCoordSys: i.dataByCoordSys, tooltipOption: i.tooltipOption }, r);
                else if (null != i.seriesIndex) {
                    if (this._manuallyAxisShowTip(t, e, n, i)) return;
                    var s = nS(i, e),
                        l = s.point[0],
                        h = s.point[1];
                    null != l && null != h && this._tryShow({ offsetX: l, offsetY: h, position: i.position, target: s.el, event: {} }, r);
                } else
                    null != i.x &&
                        null != i.y &&
                        (n.dispatchAction({ type: "updateAxisPointer", x: i.x, y: i.y }), this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, target: n.getZr().findHover(i.x, i.y).target, event: {} }, r));
            }
        },
        manuallyHideTip: function (t, e, n, i) {
            var r = this._tooltipContent;
            !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), (this._lastX = this._lastY = null), i.from !== this.uid && this._hide(gf(i, n));
        },
        _manuallyAxisShowTip: function (t, e, n, i) {
            var r = i.seriesIndex,
                a = i.dataIndex,
                o = e.getComponent("axisPointer").coordSysAxesInfo;
            if (null != r && null != a && null != o) {
                var s = e.getSeriesByIndex(r);
                if (s) {
                    var l = s.getData(),
                        t = pf([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
                    if ("axis" === t.get("trigger")) return n.dispatchAction({ type: "updateAxisPointer", seriesIndex: r, dataIndex: a, position: i.position }), !0;
                }
            }
        },
        _tryShow: function (t, e) {
            var n = t.target,
                i = this._tooltipModel;
            if (i) {
                (this._lastX = t.offsetX), (this._lastY = t.offsetY);
                var r = t.dataByCoordSys;
                r && r.length
                    ? this._showAxisTooltip(r, t)
                    : n && null != n.dataIndex
                    ? ((this._lastDataByCoordSys = null), this._showSeriesItemTooltip(t, n, e))
                    : n && n.tooltip
                    ? ((this._lastDataByCoordSys = null), this._showComponentItemTooltip(t, n, e))
                    : ((this._lastDataByCoordSys = null), this._hide(e));
            }
        },
        _showOrMove: function (t, e) {
            var n = t.get("showDelay");
            (e = y(e, this)), clearTimeout(this._showTimout), n > 0 ? (this._showTimout = setTimeout(e, n)) : e();
        },
        _showAxisTooltip: function (t, e) {
            var n = this._ecModel,
                i = this._tooltipModel,
                a = [e.offsetX, e.offsetY],
                o = [],
                s = [],
                l = pf([e.tooltipOption, i]),
                h = this._renderMode,
                u = this._newLine,
                c = {};
            xS(
                t,
                function (t) {
                    xS(t.dataByAxis, function (t) {
                        var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
                            i = t.value,
                            a = [];
                        if (e && null != i) {
                            var l = ef(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
                            f(t.seriesDataIndices, function (o) {
                                var u = n.getSeriesByIndex(o.seriesIndex),
                                    d = o.dataIndexInside,
                                    f = u && u.getDataParams(d);
                                if (((f.axisDim = t.axisDim), (f.axisIndex = t.axisIndex), (f.axisType = t.axisType), (f.axisId = t.axisId), (f.axisValue = Su(e.axis, i)), (f.axisValueLabel = l), f)) {
                                    s.push(f);
                                    var p,
                                        g = u.formatTooltip(d, !0, null, h);
                                    if (S(g)) {
                                        p = g.html;
                                        var v = g.markers;
                                        r(c, v);
                                    } else p = g;
                                    a.push(p);
                                }
                            });
                            var d = l;
                            o.push("html" !== h ? a.join(u) : (d ? Io(d) + u : "") + a.join(u));
                        }
                    });
                },
                this
            ),
                o.reverse(),
                (o = o.join(this._newLine + this._newLine));
            var d = e.position;
            this._showOrMove(l, function () {
                this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c);
            });
        },
        _showSeriesItemTooltip: function (t, e, n) {
            var i = this._ecModel,
                r = e.seriesIndex,
                a = i.getSeriesByIndex(r),
                o = e.dataModel || a,
                s = e.dataIndex,
                l = e.dataType,
                h = o.getData(),
                u = pf([h.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
                c = u.get("trigger");
            if (null == c || "item" === c) {
                var d,
                    f,
                    p = o.getDataParams(s, l),
                    g = o.formatTooltip(s, !1, l, this._renderMode);
                S(g) ? ((d = g.html), (f = g.markers)) : ((d = g), (f = null));
                var v = "item_" + o.name + "_" + s;
                this._showOrMove(u, function () {
                    this._showTooltipContent(u, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f);
                }),
                    n({ type: "showTip", dataIndexInside: s, dataIndex: h.getRawIndex(s), seriesIndex: r, from: this.uid });
            }
        },
        _showComponentItemTooltip: function (t, e, n) {
            var i = e.tooltip;
            if ("string" == typeof i) {
                var r = i;
                i = { content: r, formatter: r };
            }
            var a = new Qa(i, this._tooltipModel, this._ecModel),
                o = a.get("content"),
                s = Math.random();
            this._showOrMove(a, function () {
                this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);
            }),
                n({ type: "showTip", from: this.uid });
        },
        _showTooltipContent: function (t, e, n, i, r, a, o, s, l) {
            if (((this._ticket = ""), t.get("showContent") && t.get("show"))) {
                var h = this._tooltipContent,
                    u = t.get("formatter");
                o = o || t.get("position");
                var c = e;
                if (u && "string" == typeof u) c = Co(u, n, !0);
                else if ("function" == typeof u) {
                    var d = _S(function (e, i) {
                        e === this._ticket && (h.setContent(i, l, t), this._updatePosition(t, o, r, a, h, n, s));
                    }, this);
                    (this._ticket = i), (c = u(n, i, d));
                }
                h.setContent(c, l, t), h.show(t), this._updatePosition(t, o, r, a, h, n, s);
            }
        },
        _updatePosition: function (t, e, n, i, r, a, o) {
            var s = this._api.getWidth(),
                l = this._api.getHeight();
            e = e || t.get("position");
            var h = r.getSize(),
                u = t.get("align"),
                c = t.get("verticalAlign"),
                d = o && o.getBoundingRect().clone();
            if ((o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el, d, { viewSize: [s, l], contentSize: h.slice() })), x(e))) (n = wS(e[0], s)), (i = wS(e[1], l));
            else if (S(e)) {
                (e.width = h[0]), (e.height = h[1]);
                var f = Eo(e, { width: s, height: l });
                (n = f.x), (i = f.y), (u = null), (c = null);
            } else if ("string" == typeof e && o) {
                var p = yf(e, d, h);
                (n = p[0]), (i = p[1]);
            } else {
                var p = vf(n, i, r, s, l, u ? null : 20, c ? null : 20);
                (n = p[0]), (i = p[1]);
            }
            if ((u && (n -= _f(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (i -= _f(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), t.get("confine"))) {
                var p = mf(n, i, r, s, l);
                (n = p[0]), (i = p[1]);
            }
            r.moveTo(n, i);
        },
        _updateContentNotChangedOnAxis: function (t) {
            var e = this._lastDataByCoordSys,
                n = !!e && e.length === t.length;
            return (
                n &&
                    xS(e, function (e, i) {
                        var r = e.dataByAxis || {},
                            a = t[i] || {},
                            o = a.dataByAxis || [];
                        (n &= r.length === o.length),
                            n &&
                                xS(r, function (t, e) {
                                    var i = o[e] || {},
                                        r = t.seriesDataIndices || [],
                                        a = i.seriesDataIndices || [];
                                    (n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length),
                                        n &&
                                            xS(r, function (t, e) {
                                                var i = a[e];
                                                n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex;
                                            });
                                });
                    }),
                (this._lastDataByCoordSys = t),
                !!n
            );
        },
        _hide: function (t) {
            (this._lastDataByCoordSys = null), t({ type: "hideTip", from: this.uid });
        },
        dispose: function (t, e) {
            Sf.node || (this._tooltipContent.hide(), Ud("itemTooltip", e));
        },
    }),
        sh({ type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip" }, function () {}),
        sh({ type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip" }, function () {}),
        (t.version = E_),
        (t.dependencies = z_),
        (t.PRIORITY = Z_),
        (t.init = $l),
        (t.connect = Ql),
        (t.disConnect = Jl),
        (t.disconnect = gx),
        (t.dispose = th),
        (t.getInstanceByDom = eh),
        (t.getInstanceById = nh),
        (t.registerTheme = ih),
        (t.registerPreprocessor = rh),
        (t.registerProcessor = ah),
        (t.registerPostUpdate = oh),
        (t.registerAction = sh),
        (t.registerCoordinateSystem = lh),
        (t.getCoordinateSystemDimensions = hh),
        (t.registerLayout = uh),
        (t.registerVisual = ch),
        (t.registerLoading = fh),
        (t.extendComponentModel = ph),
        (t.extendComponentView = gh),
        (t.extendSeriesModel = vh),
        (t.extendChartView = mh),
        (t.setCanvasCreator = yh),
        (t.registerMap = _h),
        (t.getMap = xh),
        (t.dataTool = vx),
        (t.zrender = Og),
        (t.number = Xm),
        (t.format = $m),
        (t.throttle = el),
        (t.helper = yw),
        (t.matrix = rp),
        (t.vector = Wf),
        (t.color = Sp),
        (t.parseGeoJSON = xw),
        (t.parseGeoJson = Mw),
        (t.util = Iw),
        (t.graphic = Cw),
        (t.List = Ax),
        (t.Model = Qa),
        (t.Axis = Sw),
        (t.env = Sf);
});
