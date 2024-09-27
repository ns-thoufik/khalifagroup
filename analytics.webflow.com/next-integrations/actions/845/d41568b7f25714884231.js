(self.webpackChunkDestination = self.webpackChunkDestination || []).push([
    [845], {
        1291: (e, t, r) => {
            "use strict";
            const n = r(6150),
                o = r(6086);
            class a extends Error {
                constructor(e) {
                    if (!Array.isArray(e)) throw new TypeError("Expected input to be an Array, got " + typeof e);
                    let t = (e = [...e].map((e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e)))).map((e => "string" == typeof e.stack ? o(e.stack).replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "") : String(e))).join("\n");
                    t = "\n" + n(t, 4), super(t), this.name = "AggregateError", Object.defineProperty(this, "_errors", {
                        value: e
                    })
                }*[Symbol.iterator]() {
                    for (const e of this._errors) yield e
                }
            }
            e.exports = a
        },
        6086: (e, t, r) => {
            "use strict";
            const n = r(1209),
                o = /\s+at.*(?:\(|\s)(.*)\)?/,
                a = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
                s = void 0 === n.homedir ? "" : n.homedir();
            e.exports = (e, t) => (t = Object.assign({
                pretty: !1
            }, t), e.replace(/\\/g, "/").split("\n").filter((e => {
                const t = e.match(o);
                if (null === t || !t[1]) return !0;
                const r = t[1];
                return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !a.test(r)
            })).filter((e => "" !== e.trim())).map((e => t.pretty ? e.replace(o, ((e, t) => e.replace(t, t.replace(s, "~")))) : e)).join("\n"))
        },
        6150: e => {
            "use strict";
            e.exports = (e, t = 1, r) => {
                if (r = {
                        indent: " ",
                        includeEmptyLines: !1,
                        ...r
                    }, "string" != typeof e) throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
                if ("number" != typeof t) throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
                if ("string" != typeof r.indent) throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
                if (0 === t) return e;
                const n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
                return e.replace(n, r.indent.repeat(t))
            }
        },
        3962: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                generatePlugins: () => u
            });
            var n = r(3807),
                o = r(1374),
                a = r(6146);
            async function s(e, t) {
                const r = Array.from(window.document.querySelectorAll("script")).find((t => t.src === e));
                if (void 0 !== r) {
                    const e = r ? .getAttribute("status");
                    if ("loaded" === e) return r;
                    if ("loading" === e) return new Promise(((e, t) => {
                        r.addEventListener("load", (() => e(r))), r.addEventListener("error", (e => t(e)))
                    }))
                }
                return new Promise(((r, n) => {
                    const o = window.document.createElement("script");
                    o.type = "text/javascript", o.src = e, o.async = !0, o.setAttribute("status", "loading");
                    for (const [e, r] of Object.entries(t ? ? {})) o.setAttribute(e, r);
                    o.onload = () => {
                        o.onerror = o.onload = null, o.setAttribute("status", "loaded"), r(o)
                    }, o.onerror = () => {
                        o.onerror = o.onload = null, o.setAttribute("status", "error"), n(new Error(`Failed to load ${e}`))
                    };
                    const a = window.document.getElementsByTagName("script")[0];
                    a.parentElement ? .insertBefore(o, a)
                }))
            }
            async function i(e, t) {
                return new Promise(((r, n) => {
                    if (e()) return void r();
                    const o = () => setTimeout((() => {
                        e() ? r() : o()
                    }), t);
                    o()
                }))
            }

            function u(e, t, r) {
                let u, c, p, l = !1;
                const h = async (r, n) => {
                    l || (p ? await p : (c = n, p = e.initialize ? .({
                        settings: t,
                        analytics: c
                    }, {
                        loadScript: s,
                        resolveWhen: i
                    }), u = await p, l = !0))
                };
                return Object.entries(e.actions).reduce(((s, [i, p]) => {
                    const f = r.filter((e => e.enabled && e.partnerAction === i));
                    if (0 === f.length) return s;
                    async function y(e) {
                        const r = [];
                        for (const s of f) {
                            if (!(0, o.Z)((0, a.Z)(s.subscribe), e.event)) continue;
                            const i = s.mapping ? ? {},
                                l = {
                                    payload: (0, n.vs)(i, e.event),
                                    mapping: i,
                                    settings: t,
                                    analytics: c,
                                    context: e
                                };
                            r.push(p.perform(u, l))
                        }
                        return await Promise.all(r), e
                    }
                    const d = {
                        name: `${e.name} ${i}`,
                        type: p.lifecycleHook ? ? "destination",
                        version: "0.1.0",
                        ready: () => Promise.resolve(),
                        isLoaded: () => l,
                        load: h,
                        track: y,
                        page: y,
                        alias: y,
                        identify: y,
                        group: y
                    };
                    return s.push(d), s
                }), [])
            }
        },
        7128: (e, t, r) => {
            "use strict";
            let n;
            r.d(t, {
                U: () => o
            });
            try {
                n = new RegExp("\\[(?=\"|'|\\d)|\\.|(?<=\"|'|\\d)]+", "g")
            } catch (e) {
                n = /\[|\.|]+/g
            }

            function o(e, t) {
                return "" === t || "." === t ? e : null !== t && null != t ? (Array.isArray(t) ? t : t.split(n).filter((e => e)).map((e => e.replace(/'|"/g, "")))).reduce(((e, t) => e && e[t]), e) : void 0
            }
        },
        3807: (e, t, r) => {
            "use strict";
            r.d(t, {
                tY: () => W,
                a8: () => L,
                vs: () => B
            });
            var n = r(7128),
                o = r(6933);

            function a(e) {
                if (!(0, o.Kn)(e)) return !1;
                const t = Object.keys(e);
                return !!t.some((e => e.startsWith("@"))) && 0 === t.filter((e => !e.startsWith("@") && "_metadata" !== e)).length
            }

            function s(e) {
                if (Array.isArray(e)) return e.map((e => s(e)));
                if ((0, o.Kn)(e)) {
                    const t = Object.assign({}, e);
                    return Object.keys(t).forEach((e => {
                        void 0 === t[e] ? delete t[e] : t[e] = s(t[e])
                    })), t
                }
                return e
            }
            var i = r(1291),
                u = r.n(i),
                c = r(2501);
            class p extends c.CustomError {
                constructor(e, t = []) {
                    super(`/${t.join("/")} ${e}.`)
                }
            }

            function l(e) {
                const t = [];
                return e.forEach((e => {
                    e instanceof u() ? t.push(...e) : t.push(e)
                })), t
            }

            function h(e) {
                const t = (0, o.X6)(e);
                return "object" === t && Object.keys(e).some((e => e.startsWith("@"))) ? "directive" : t
            }
            const f = {};

            function y(e, t = []) {
                if (!a(e) && !(0, o.Kn)(e)) {
                    const r = (0, o.X6)(e);
                    throw new p(`should be a directive object but it is ${O(r)} ${r}`, t)
                }
                const r = Object.keys(e),
                    n = r.filter((e => e.startsWith("@")));
                if (n.length > 1) throw new p(`should only have one @-prefixed key but it has ${n.length} keys`, t);
                if (r.filter((e => !e.startsWith("@") && "_metadata" !== e)).length > 0) throw new p(`should only have one @-prefixed key but it has ${r.length} keys`, t);
                const s = n[0],
                    i = f[s];
                if ("function" != typeof i) throw new p(`has an invalid directive: ${s}`, t);
                i(e[s], t)
            }

            function d(e, t = []) {
                const r = h(e);
                switch (r) {
                    case "directive":
                        return y(e, t);
                    case "object":
                    case "array":
                    case "boolean":
                    case "string":
                    case "number":
                    case "null":
                        return;
                    default:
                        throw new p(`should be a mapping directive or a JSON value but it is ${O(r)} ${r}`, t)
                }
            }

            function v(e, t = []) {
                const r = h(e);
                switch (r) {
                    case "directive":
                        return y(e, t);
                    case "string":
                        return;
                    default:
                        throw new p(`should be a string or a mapping directive but it is ${O(r)} ${r}`, t)
                }
            }

            function g(e, t = []) {
                const r = h(e);
                switch (r) {
                    case "directive":
                        return y(e, t);
                    case "object":
                        return k(e, t);
                    default:
                        throw new p(`should be a object or a mapping directive but it is ${O(r)} ${r}`, t)
                }
            }

            function m(...e) {
                return (t, r = []) => {
                    e.forEach((e => {
                        e(t, r)
                    }))
                }
            }

            function w(e, t) {
                return (r, n = []) => {
                    if ("string" == typeof r && r.length < e) throw new p(`should be a string of length ${e} or greater`, n);
                    if ("string" == typeof r && r.length > t) throw new p(`should be a string of length ${t} or less`, n)
                }
            }

            function b(e, t = []) {
                const r = h(e);
                if ("string" !== r) throw new p(`should be a string but it is ${O(r)} ${r}`, t)
            }

            function E(...e) {
                return (t, r = []) => {
                    b(t, r);
                    const n = t;
                    if (!e.includes(n.toLowerCase())) throw new p(`should be one of ${e.join(", ")} but it is ${JSON.stringify(n)}`, r)
                }
            }

            function x(e, t = []) {
                const r = h(e);
                if ("boolean" !== r) throw new p(`should be a boolean but it is ${O(r)} ${r}`, t)
            }

            function k(e, t = []) {
                const r = h(e);
                if ("object" !== r) throw new p(`should be an object but it is ${O(r)} ${r}`, t);
                const n = e,
                    o = Object.keys(n),
                    a = o.find((e => "@" === e.charAt(0)));
                if (a) throw new p(`shouldn't have directive (@-prefixed) keys but it has ${JSON.stringify(a)}`, t);
                const s = [];
                if (o.forEach((e => {
                        try {
                            S(n[e], [...t, e])
                        } catch (e) {
                            s.push(e)
                        }
                    })), s.length) throw new(u())(l(s))
            }

            function j(e, t, r = []) {
                k(e, r);
                const n = [],
                    o = e;
                if (Object.entries(t).forEach((([e, {
                        required: t,
                        optional: a
                    }]) => {
                        try {
                            if (t) {
                                if (void 0 === o[e]) throw new p(`should have field ${JSON.stringify(e)} but it doesn't`, r);
                                t(o[e], [...r, e])
                            } else a && void 0 !== o[e] && a(o[e], [...r, e])
                        } catch (e) {
                            n.push(e)
                        }
                    })), n.length) throw new(u())(l(n))
            }

            function $(e, t = []) {
                const r = (0, o.X6)(e);
                if ("array" !== r) throw new p(`should be an array but it is ${O(r)} ${r}`, t)
            }

            function _(e, t) {
                Array.isArray(e) || (e = [e]), e.forEach((e => {
                    f[e] = (r, n = []) => {
                        try {
                            t(r, [...n, e])
                        } catch (e) {
                            if (e instanceof p || e instanceof u()) throw e;
                            throw new p(e.message, n)
                        }
                    }
                }))
            }

            function O(e) {
                switch (e.charAt(0)) {
                    case "a":
                    case "e":
                    case "i":
                    case "o":
                    case "u":
                        return "an";
                    default:
                        return "a"
                }
            }

            function S(e, t = []) {
                switch (h(e)) {
                    case "directive":
                        return y(e, t);
                    case "object":
                        return k(e, t);
                    case "array":
                        return $(e, t);
                    default:
                        return null
                }
            }

            function A(e, t = !0) {
                return null == e ? t ? [] : e : (0, o.kJ)(e) ? e : [e]
            }
            _("@if", ((e, t) => {
                j(e, {
                    exists: {
                        optional: d
                    },
                    then: {
                        optional: d
                    },
                    else: {
                        optional: d
                    }
                }, t)
            })), _("@case", ((e, t) => {
                j(e, {
                    operator: {
                        optional: b
                    },
                    value: {
                        optional: v
                    }
                }, t)
            })), _("@replace", ((e, t) => {
                j(e, {
                    pattern: {
                        required: m(b, w(1, W))
                    },
                    replacement: {
                        optional: m(b, w(0, L))
                    },
                    value: {
                        required: v
                    },
                    ignorecase: {
                        optional: x
                    },
                    global: {
                        optional: x
                    }
                }, t)
            })), _("@arrayPath", ((e, t) => {
                const r = e;
                $(r, t), v(r[0], t), S(r[1], t)
            })), _("@path", ((e, t) => {
                v(e, t)
            })), _("@json", ((e, t) => {
                j(e, {
                    value: {
                        required: d
                    },
                    mode: {
                        required: E("encode", "decode")
                    }
                }, t)
            })), _("@flatten", ((e, t) => {
                j(e, {
                    separator: {
                        optional: b
                    },
                    value: {
                        required: d
                    }
                }, t)
            })), _("@merge", ((e, t) => {
                j(e, {
                    direction: {
                        optional: E("left", "right")
                    },
                    objects: {
                        required: $
                    }
                }, t), e.objects.forEach((e => {
                    g(e)
                }))
            })), _("@template", ((e, t) => {
                v(e, t)
            })), _("@literal", ((e, t) => {
                d(e, t)
            })), _("@transform", ((e, t) => {
                j(e, {
                    apply: {
                        required: g
                    },
                    mapping: {
                        required: g
                    }
                }, t)
            })), _("@excludeWhenNull", ((e, t) => {
                d(e, t)
            }));
            const q = (e, t = "", r = ".", n = !1) => (0, o.Kn)(e) || !n && (0, o.kJ)(e) ? Object.entries(e).reduce(((e, [o, a]) => ({ ...e,
                    ...q(a, t ? `${t}${r}${o}` : o, r, n)
                })), {}) : {
                    [t]: e
                },
                N = "__segment_internal_directive",
                I = {},
                P = /^@[a-z][a-zA-Z0-9]+$/;

            function C(e, t) {
                if (!P.exec(e)) throw new Error(`"${e}" is an invalid directive name`);
                I[e] = t
            }

            function K(e, t) {
                C(e, ((r, n) => {
                    const a = R(r, n);
                    if ("string" != typeof a) throw new Error(`${e}: expected string, got ${(0,o.X6)(a)}`);
                    return t(a, n)
                }))
            }
            C("@if", ((e, t) => {
                let r = !1;
                if (!(0, o.Kn)(e)) throw new Error('@if requires an object with an "exists" key');
                if (!e.exists && !e.blank) throw new Error('@if requires an "exists" key or a "blank" key');
                if (void 0 !== e.exists) {
                    r = null != R(e.exists, t)
                } else if (void 0 !== e.blank) {
                    const n = R(e.blank, t);
                    r = null != n && "" != n
                }
                return r && void 0 !== e.then ? R(e.then, t) : !r && e.else ? R(e.else, t) : void 0
            })), C("@case", ((e, t) => {
                if (!(0, o.Kn)(e)) throw new Error('@case requires an object with a "operator" key');
                if (!e.operator) throw new Error('@case requires a "operator" key');
                const r = e.operator;
                if (e.value) {
                    const n = R(e.value, t);
                    if ("string" == typeof n) switch (r) {
                        case "lower":
                            return n.toLowerCase();
                        case "upper":
                            return n.toUpperCase();
                        default:
                            throw new Error('operator key should have a value of "lower" or "upper"')
                    }
                    return n
                }
            }));
            const W = 10,
                L = 10;

            function T(e, t, r, n) {
                if (t.length > 10) throw new Error('@replace requires a "pattern" less than 10 characters');
                if (r.length > 10) throw new Error('@replace requires a "replacement" less than 10 characters');
                return t = t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), e.replace(new RegExp(t, n), r)
            }

            function X(e) {
                if ((0, o.Kn)(e)) {
                    const t = Object.assign({}, e);
                    for (const r of Object.keys(e)) {
                        const n = e[r];
                        null === n ? t[r] = void 0 : (0, o.Kn)(n) && (t[r] = X(n))
                    }
                    return t
                }
                return e
            }

            function J(e) {
                let t = { ...e
                };
                if (Object.keys(e).includes(N)) {
                    const r = {};
                    for (const t in e) t !== N && (r[t] = e[t]);
                    if (t = e[N], Object.keys(t).length > 1) throw new Error("The root mapping must only have a single directive object");
                    const n = t[Object.keys(t)[0]];
                    if (!n || "object" != typeof n) throw new Error("The root directive must be an object");
                    n.mapping = r
                }
                return t
            }

            function R(e, t) {
                if (!(0, o.Kn)(e) && !(0, o.kJ)(e)) return e;
                if (a(e)) return function(e, t) {
                    const r = Object.keys(e).find((e => e.startsWith("@"))),
                        n = I[r],
                        a = e[r];
                    if ("function" != typeof n) throw new Error(`${r} is not a valid directive, got ${(0,o.X6)(n)}`);
                    return n(a, t)
                }(e, t);
                if (Array.isArray(e)) return e.map((e => R(e, t)));
                const r = {};
                for (const n of Object.keys(e)) r[n] = R(e[n], t);
                return r
            }

            function B(e, t = {}) {
                const r = (0, o.X6)(t);
                if ("object" !== r) throw new Error(`data must be an object, got ${r}`);
                const n = J(e);
                S(n);
                return s(R(n, t))
            }
            C("@replace", ((e, t) => {
                if (!(0, o.Kn)(e)) throw new Error('@replace requires an object with a "pattern" key');
                if (!e.pattern) throw new Error('@replace requires a "pattern" key');
                null == e.replacement && (e.replacement = ""), e.pattern2 && null == e.replacement2 && (e.replacement2 = ""), null == e.ignorecase && (e.ignorecase = !1), null == e.global && (e.global = !0);
                const r = e.pattern,
                    n = e.replacement,
                    a = e.ignorecase,
                    s = e.global;
                if (e.value) {
                    let o = R(e.value, t),
                        i = "";
                    if ("boolean" != typeof o && "number" != typeof o || (o = String(o)), "string" == typeof o && "string" == typeof r && "string" == typeof n && "boolean" == typeof a && "boolean" == typeof s) {
                        let t = "";
                        s && (t += "g"), a && (t += "i"), i = T(o, r, n, t), e.pattern2 && "string" == typeof e.pattern2 && "string" == typeof e.replacement2 && (i = T(i, e.pattern2, e.replacement2, t))
                    }
                    return i
                }
            })), C("@arrayPath", ((e, t) => {
                if (!Array.isArray(e)) throw new Error(`@arrayPath expected array, got ${(0,o.X6)(e)}`);
                const [r, a] = e, s = "string" == typeof r ? (0, n.U)(t, r.replace("$.", "")) : R(r, t);
                return ["object", "array"].includes((0, o.X6)(s)) && "object" === (0, o.X6)(a) && Object.keys(a).length > 0 ? A(s).map((e => R(a, e))) : s
            })), K("@path", ((e, t) => (0, n.U)(t, e.replace("$.", "")))), K("@template", ((e, t) => function(e, t = {}) {
                if ("string" != typeof e) throw new TypeError(`Invalid template! Template should be a "string" but ${(0,o.X6)(e)} was given.`);

                function r(e) {
                    return r => (r = r.slice(e, -e).trim(), (0, n.U)(t, r) ? ? "")
                }
                return e.replace(/\{\{\{([^}]+)\}\}\}/g, r(3)).replace(/\{\{([^}]+)\}\}/g, r(2))
            }(e, t))), C("@literal", ((e, t) => R(e, t))), C("@flatten", ((e, t) => {
                if (!(0, o.Kn)(e)) throw new Error('@flatten requires an object with a "separator" key');
                if (!e.separator) throw new Error('@flatten requires a "separator" key');
                const r = R(e.separator, t);
                if ("string" != typeof r) throw new Error("@flatten requires a string separator");
                const n = R(e.value, t);
                return q(n, "", r, Boolean(e.omitArrays))
            })), C("@json", ((e, t) => {
                if (!(0, o.Kn)(e)) throw new Error('@json requires an object with a "value" key');
                if (!e.mode) throw new Error('@json requires a "mode" key');
                if (!e.value) throw new Error('@json requires a "value" key');
                const r = R(e.value, t);
                return "encode" === e.mode ? JSON.stringify(r) : "decode" === e.mode ? "string" == typeof r ? JSON.parse(r) : r : void 0
            })), C("@merge", ((e, t) => {
                if (!(0, o.Kn)(e)) throw new Error('@merge requires an object with an "objects" key and a "direction" key');
                if (!e.direction) throw new Error('@merge requires a "direction" key');
                const r = R(e.direction, t);
                if (!e.objects) throw new Error('@merge requires a "objects" key');
                if (!Array.isArray(e.objects)) throw new Error("@merge: expected opts.array, got " + typeof e.objects);
                const n = e.objects.map((e => R(e, t)));
                return "left" === r && n.reverse(), Object.assign({}, ...n)
            })), C("@transform", ((e, t) => {
                if (!(0, o.Kn)(e)) throw new Error('@transform requires an object with an "apply" key and a "mapping" key');
                if (!e.mapping) throw new Error('@transform requires a "mapping" key');
                if (!e.apply) throw new Error('@transform requires a "apply" key');
                if (!(0, o.Kn)(e.apply)) throw new Error('@transform "apply" key should be an object');
                const r = B(e.apply, t);
                return R(e.mapping, r)
            })), C("@excludeWhenNull", ((e, t) => {
                const r = R(e, t);
                if (null !== r) return X(r)
            }))
        },
        6933: (e, t, r) => {
            "use strict";

            function n(e) {
                return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
            }

            function o(e) {
                return "object" === n(e)
            }

            function a(e) {
                return Array.isArray(e)
            }
            r.d(t, {
                Kn: () => o,
                X6: () => n,
                kJ: () => a
            })
        },
        6146: (e, t, r) => {
            "use strict";
            var n;
            r.d(t, {
                    Z: () => N
                }),
                function(e) {
                    e.Err = "err", e.Ident = "ident", e.Dot = "dot", e.Operator = "operator", e.Conditional = "conditional", e.String = "string", e.Number = "number", e.Null = "null", e.BrackLeft = "brackleft", e.BrackRight = "brackright", e.ParenLeft = "parenleft", e.ParenRight = "parenright", e.Comma = "comma", e.EOS = "eos"
                }(n || (n = {}));
            const o = e => ({
                    type: n.Ident,
                    value: e
                }),
                a = () => ({
                    type: n.Dot,
                    value: "."
                }),
                s = e => ({
                    type: n.Operator,
                    value: e
                }),
                i = e => ({
                    type: n.Conditional,
                    value: e
                }),
                u = e => ({
                    type: n.String,
                    value: e
                }),
                c = e => ({
                    type: n.Number,
                    value: e
                }),
                p = () => ({
                    type: n.Null,
                    value: "null"
                }),
                l = () => ({
                    type: n.BrackLeft,
                    value: "["
                }),
                h = () => ({
                    type: n.BrackRight,
                    value: "]"
                }),
                f = () => ({
                    type: n.ParenLeft,
                    value: "("
                }),
                y = () => ({
                    type: n.ParenRight,
                    value: ")"
                }),
                d = () => ({
                    type: n.Comma,
                    value: ","
                }),
                v = () => ({
                    type: n.EOS,
                    value: "eos"
                });
            class g {
                constructor(e) {
                    this.code = e, this.position = 0
                }
                forward() {
                    if (this.code.length === this.position) return {
                        char: "",
                        isEOS: !0
                    };
                    const e = this.code.charAt(this.position);
                    return this.position += 1, {
                        char: e,
                        isEOS: !1
                    }
                }
                backward() {
                    if (0 === this.position) throw new RangeError;
                    const e = this.code.charAt(this.position);
                    return this.position -= 1, {
                        char: e,
                        isEOS: !1
                    }
                }
                getPosition() {
                    return this.position
                }
            }
            const m = "-1";

            function w(e) {
                return "\r" === e || "\n" === e
            }

            function b(e) {
                return " " === e || "\t" === e || "\n" === e
            }

            function E(e) {
                return !!e.match(/[a-z]/i)
            }

            function x(e) {
                return e !== m && (!isNaN(parseFloat(e)) && isFinite(parseInt(e, 10)))
            }

            function k(e) {
                return e === m || b(e) || "," === e || "]" === e || ")" === e
            }
            class j extends Error {
                constructor(e, t) {
                    super(e), this.message = e, this.name = "LexerError", this.stack = (new Error).stack, this.cursor = t
                }
            }
            class $ {
                constructor(e) {
                    this.reader = new g(e), this.cursor = {
                        line: 0,
                        column: 0
                    }
                }
                lex() {
                    const e = [];
                    for (;;) {
                        const {
                            char: t,
                            isEOS: r
                        } = this.next();
                        if (r) return e.push(v()), e;
                        if (!b(t)) {
                            if ("!" === t) {
                                const t = this.peek();
                                if (E(t) || "(" === t) {
                                    e.push(s("!"));
                                    continue
                                }
                            }
                            if (E(t) || "!" === t || "=" === t || ">" === t || "<" === t || "\\" === t || "_" === t) e.push(this.lexOperatorOrConditional(t));
                            else if (x(t) || "-" === t || "+" === t) e.push(this.lexNumber(t));
                            else if ('"' !== t && "'" !== t)
                                if ("." !== t)
                                    if ("[" !== t)
                                        if ("]" !== t)
                                            if ("," !== t)
                                                if ("(" !== t) {
                                                    if (")" !== t) throw new j(`invalid character "${t}"`, this.cursor);
                                                    e.push(y())
                                                } else e.push(f());
                            else e.push(d());
                            else e.push(h());
                            else e.push(l());
                            else e.push(a());
                            else e.push(this.lexString(t))
                        }
                    }
                }
                lexString(e) {
                    let t = "";
                    for (; this.peek() !== e;) {
                        const {
                            char: e,
                            isEOS: r
                        } = this.next();
                        if (t += e, r) throw new j("unterminated string", this.cursor);
                        if (t.length >= 1e5) throw new j("unreasonable string length", this.cursor)
                    }
                    return this.accept(e), u(`${e}${t}${e}`)
                }
                lexNumber(e) {
                    let t = "",
                        r = this.peek(),
                        n = !1;
                    for (; x(r) || "." === r;) {
                        const {
                            char: e
                        } = this.next();
                        if (t += e, "." === r) {
                            if (k(this.peek())) throw new j("unexpected terminator after decimal point", this.cursor);
                            if (n) throw new j("multiple decimal points in one number", this.cursor);
                            n = !0
                        }
                        if (t.length >= 1e5) throw new j("unreasonable number length", this.cursor);
                        r = this.peek()
                    }
                    return c(e + t)
                }
                lexOperatorOrConditional(e) {
                    if ("=" === e) return s("=");
                    if ("!" === e) {
                        if (this.accept("=")) return s("!=");
                        throw new j(`expected '=' after '!', got '${this.peek()}'`, this.cursor)
                    }
                    return "a" === e ? this.accept("nd") ? i("and") : this.lexIdent(e) : "o" === e ? this.accept("r") ? i("or") : this.lexIdent(e) : "n" === e ? this.accept("ull") ? p() : this.lexIdent(e) : "<" === e || ">" === e ? this.accept("=") ? s(e + "=") : s(e) : this.lexIdent(e)
                }
                lexIdent(e) {
                    let t = "",
                        r = e;
                    for (;;) {
                        if ("\\" === r) {
                            if (this.peek() === m) throw new j("expected character after escape character, got EOS", this.cursor);
                            r = this.next().char
                        }
                        if (t += r, t.length >= 1e5) throw new j("unreasonable literal length", this.cursor);
                        if ((n = this.peek()) === m || !E(n) && !x(n) && "_" !== n && "-" !== n && "\\" !== n) break;
                        r = this.next().char
                    }
                    var n;
                    const a = this.peek();
                    if (a !== m && !k(a) && "." !== a && "(" !== a && "=" !== a && "!" !== a) throw new j(`expected termination character after identifier, got ${a}`, this.cursor);
                    return o(t)
                }
                accept(e) {
                    let t = "";
                    for (const r of e) {
                        const {
                            char: e,
                            isEOS: r
                        } = this.next();
                        if (t += e, r) return !1;
                        if (k(e)) break
                    }
                    return !(e !== t || !k(this.peek())) || (this.backup(t.length), !1)
                }
                next() {
                    const {
                        char: e,
                        isEOS: t
                    } = this.reader.forward();
                    w(e) ? (this.cursor.line += 1, this.cursor.column = 0) : this.cursor.column += 1;
                    return {
                        char: t ? m : e,
                        isEOS: t
                    }
                }
                peek() {
                    const {
                        char: e,
                        isEOS: t
                    } = this.next();
                    return t || this.backup(1), e
                }
                backup(e) {
                    for (let t = e; t > 0; t--) {
                        let e;
                        try {
                            e = this.reader.backward().char
                        } catch (e) {
                            return
                        }
                        w(e) ? (this.cursor.line -= 1, this.cursor.column = 0) : this.cursor.column -= 1
                    }
                }
            }
            const _ = {
                    type: "event-type",
                    event: "event",
                    name: "name",
                    userId: "userId",
                    context: "event-context",
                    properties: "event-property",
                    traits: "event-trait"
                },
                O = e => "string" === e.type ? e.value.replace(/^"/, "").replace(/"$/, "") : "number" === e.type ? Number(e.value) : "ident" === e.type && ["true", "false"].includes(e.value) ? "true" === e.value : String(e.value),
                S = e => "ident" === e.type && ["contains", "match"].includes(e.value),
                A = (e, t, r, {
                    negate: n
                } = {
                    negate: !1
                }) => {
                    if ("contains" === e) {
                        r.shift();
                        const e = r.shift();
                        if (!e) throw new Error("contains() is missing a 1st argument");
                        r.shift();
                        const o = r.shift();
                        if (!o) throw new Error("contains() is missing a 2nd argument");
                        r.shift(), ["event", "name", "userId"].includes(e.value) && t.push({
                            type: e.value,
                            operator: n ? "not_contains" : "contains",
                            value: String(O(o))
                        }), /^(properties)/.test(e.value) && t.push({
                            type: "event-property",
                            name: e.value.replace(/^(properties)\./, ""),
                            operator: n ? "not_contains" : "contains",
                            value: String(O(o))
                        }), /^(traits)/.test(e.value) && t.push({
                            type: "event-trait",
                            name: e.value.replace(/^(traits)\./, ""),
                            operator: n ? "not_contains" : "contains",
                            value: String(O(o))
                        }), /^(context)/.test(e.value) && t.push({
                            type: "event-context",
                            name: e.value.replace(/^(context)\./, ""),
                            operator: n ? "not_contains" : "contains",
                            value: String(O(o))
                        })
                    }
                    if ("match" === e) {
                        r.shift();
                        const e = r.shift();
                        if (!e) throw new Error("match() is missing a 1st argument");
                        r.shift();
                        const o = r.shift();
                        if (!o) throw new Error("match() is missing a 2nd argument");
                        let a, s;
                        r.shift(), o.value.endsWith('*"') ? (a = n ? "not_starts_with" : "starts_with", s = String(O(o)).slice(0, -1)) : (a = n ? "not_ends_with" : "ends_with", s = String(O(o)).slice(1)), ["event", "name", "userId"].includes(e.value) && t.push({
                            type: e.value,
                            operator: a,
                            value: s
                        }), /^(properties)/.test(e.value) && t.push({
                            type: "event-property",
                            name: e.value.replace(/^(properties)\./, ""),
                            operator: a,
                            value: s
                        }), /^(traits)/.test(e.value) && t.push({
                            type: "event-trait",
                            name: e.value.replace(/^(traits)\./, ""),
                            operator: a,
                            value: s
                        }), /^(context)/.test(e.value) && t.push({
                            type: "event-context",
                            name: e.value.replace(/^(context)\./, ""),
                            operator: a,
                            value: s
                        })
                    }
                },
                q = e => {
                    var t;
                    const r = [];
                    let o = "and",
                        a = e.shift();
                    for (; a && "eos" !== a.type;) {
                        if ("ident" === a.type) {
                            const [n] = (null !== (t = a.value) && void 0 !== t ? t : "").split("."), o = _[n];
                            if (o) {
                                const t = e.shift();
                                if (!t) throw new Error("Operator token is missing");
                                const n = e.shift();
                                if (!n) throw new Error("Value token is missing");
                                const s = "=" === t.value && "true" === n.value,
                                    i = "=" === t.value && "false" === n.value,
                                    u = "!=" === t.value && "null" === n.value,
                                    c = "=" === t.value && "null" === n.value,
                                    p = "=" === t.value && "number" === n.type;
                                "event" === o ? r.push({
                                    type: "event",
                                    operator: t.value,
                                    value: String(O(n))
                                }) : "event-type" === o ? r.push({
                                    type: "event-type",
                                    operator: t.value,
                                    value: String(O(n))
                                }) : "name" === o ? u ? r.push({
                                    type: "name",
                                    operator: "exists"
                                }) : c ? r.push({
                                    type: "name",
                                    operator: "not_exists"
                                }) : r.push({
                                    type: "name",
                                    operator: t.value,
                                    value: String(O(n))
                                }) : "userId" === o ? u ? r.push({
                                    type: "userId",
                                    operator: "exists"
                                }) : c ? r.push({
                                    type: "userId",
                                    operator: "not_exists"
                                }) : s ? r.push({
                                    type: "userId",
                                    operator: "is_true"
                                }) : i ? r.push({
                                    type: "userId",
                                    operator: "is_false"
                                }) : r.push({
                                    type: "userId",
                                    operator: t.value,
                                    value: String(O(n))
                                }) : "event-property" === o ? u ? r.push({
                                    type: "event-property",
                                    name: a.value.replace(/^(properties)\./, ""),
                                    operator: "exists"
                                }) : c ? r.push({
                                    type: "event-property",
                                    name: a.value.replace(/^(properties)\./, ""),
                                    operator: "not_exists"
                                }) : s ? r.push({
                                    type: "event-property",
                                    name: a.value.replace(/^(properties)\./, ""),
                                    operator: "is_true"
                                }) : i ? r.push({
                                    type: "event-property",
                                    name: a.value.replace(/^(properties)\./, ""),
                                    operator: "is_false"
                                }) : p ? r.push({
                                    type: "event-property",
                                    name: a.value.replace(/^(properties)\./, ""),
                                    operator: "number_equals",
                                    value: O(n)
                                }) : r.push({
                                    type: "event-property",
                                    name: a.value.replace(/^(properties)\./, ""),
                                    operator: t.value,
                                    value: O(n)
                                }) : "event-trait" === o ? u ? r.push({
                                    type: "event-trait",
                                    name: a.value.replace(/^(traits)\./, ""),
                                    operator: "exists"
                                }) : c ? r.push({
                                    type: "event-trait",
                                    name: a.value.replace(/^(traits)\./, ""),
                                    operator: "not_exists"
                                }) : s ? r.push({
                                    type: "event-trait",
                                    name: a.value.replace(/^(traits)\./, ""),
                                    operator: "is_true"
                                }) : i ? r.push({
                                    type: "event-trait",
                                    name: a.value.replace(/^(traits)\./, ""),
                                    operator: "is_false"
                                }) : p ? r.push({
                                    type: "event-trait",
                                    name: a.value.replace(/^(traits)\./, ""),
                                    operator: "number_equals",
                                    value: O(n)
                                }) : r.push({
                                    type: "event-trait",
                                    name: a.value.replace(/^(traits)\./, ""),
                                    operator: t.value,
                                    value: O(n)
                                }) : "event-context" === o && (u ? r.push({
                                    type: "event-context",
                                    name: a.value.replace(/^(context)\./, ""),
                                    operator: "exists"
                                }) : c ? r.push({
                                    type: "event-context",
                                    name: a.value.replace(/^(context)\./, ""),
                                    operator: "not_exists"
                                }) : s ? r.push({
                                    type: "event-context",
                                    name: a.value.replace(/^(context)\./, ""),
                                    operator: "is_true"
                                }) : i ? r.push({
                                    type: "event-context",
                                    name: a.value.replace(/^(context)\./, ""),
                                    operator: "is_false"
                                }) : p ? r.push({
                                    type: "event-context",
                                    name: a.value.replace(/^(context)\./, ""),
                                    operator: "number_equals",
                                    value: O(n)
                                }) : r.push({
                                    type: "event-context",
                                    name: a.value.replace(/^(context)\./, ""),
                                    operator: t.value,
                                    value: O(n)
                                }))
                            }
                            S(a) && A(a.value, r, e)
                        }
                        if ("operator" === a.type && "!" === a.value && S(e[0])) {
                            const t = e[0].value;
                            e.shift(), A(t, r, e, {
                                negate: !0
                            })
                        }
                        if ("parenleft" === a.type) {
                            const t = [];
                            let o = e.shift();
                            for (;
                                "parenright" !== o.type;) t.push(o), o = e.shift();
                            t.push({
                                type: n.EOS,
                                value: "eos"
                            }), r.push(q(t))
                        }
                        "conditional" === a.type && (o = a.value), a = e.shift()
                    }
                    return r.length > 1 ? {
                        type: "group",
                        operator: o,
                        children: r
                    } : r[0]
                },
                N = e => {
                    try {
                        const t = q((e => {
                            const t = [];
                            let r = 0;
                            for (; e[r];) {
                                const o = t[t.length - 1],
                                    a = e[r],
                                    s = e[r + 1];
                                if ("ident" === (null == o ? void 0 : o.type) && "dot" === a.type && "ident" === (null == s ? void 0 : s.type)) {
                                    const e = t.pop();
                                    t.push({
                                        type: n.Ident,
                                        value: `${null==e?void 0:e.value}${a.value}${s.value}`
                                    }), r += 2
                                } else t.push(e[r]), r++
                            }
                            return t
                        })(function(e) {
                            try {
                                return {
                                    tokens: new $(e).lex()
                                }
                            } catch (e) {
                                return {
                                    tokens: [],
                                    error: e
                                }
                            }
                        }(e).tokens));
                        return "group" !== t.type ? {
                            type: "group",
                            operator: "and",
                            children: [t]
                        } : t
                    } catch (t) {
                        return {
                            error: t instanceof Error ? t : new Error(`Error while parsing ${e}`)
                        }
                    }
                }
        },
        1374: (e, t, r) => {
            "use strict";

            function n(e, t, r) {
                if (!t) return r;
                const n = (Array.isArray(t) ? t : t.match(/([^[.\]])+/g)).reduce(((e, t) => e && e[t]), e);
                return void 0 === n ? r : n
            }
            r.d(t, {
                Z: () => a
            });
            const o = (e, t) => "and" === e.operator ? e.children.every((e => s(e, t))) : "or" === e.operator && e.children.some((e => s(e, t))),
                a = (e, t) => !e.error && void 0 !== t && o(e, t),
                s = (e, t) => "event-type" === e.type ? i(t.type, e.operator, e.value) : "event" === e.type ? i(t.event, e.operator, e.value) : "name" === e.type ? i(t.name, e.operator, e.value) : "userId" === e.type ? i(t.userId, e.operator, e.value) : "event-property" === e.type ? i(n(t.properties, e.name), e.operator, e.value) : "event-trait" === e.type ? i(n(t.traits, e.name), e.operator, e.value) : "event-context" === e.type ? i(n(t.context, e.name), e.operator, e.value) : "group" === e.type && o(e, t),
                i = (e, t, r) => {
                    switch (t) {
                        case "=":
                            return e === String(r);
                        case "number_equals":
                            return "number" == typeof e && Number(e) === Number(r);
                        case "!=":
                            return e !== String(r);
                        case "<":
                            return "number" == typeof e && Number(e) < Number(r);
                        case "<=":
                            return "number" == typeof e && Number(e) <= Number(r);
                        case ">":
                            return "number" == typeof e && Number(e) > Number(r);
                        case ">=":
                            return "number" == typeof e && Number(e) >= Number(r);
                        case "contains":
                            return "string" == typeof e && e.includes(String(r));
                        case "not_contains":
                            return "string" == typeof e && !e.includes(String(r));
                        case "starts_with":
                            return "string" == typeof e && e.startsWith(String(r));
                        case "not_starts_with":
                            return "string" == typeof e && !e.startsWith(String(r));
                        case "ends_with":
                            return "string" == typeof e && e.endsWith(String(r));
                        case "not_ends_with":
                            return "string" == typeof e && !e.endsWith(String(r));
                        case "exists":
                            return null != e;
                        case "not_exists":
                            return null == e;
                        case "is_true":
                            return "boolean" == typeof e && !0 === e;
                        case "is_false":
                            return "boolean" == typeof e && !1 === e;
                        default:
                            return !1
                    }
                }
        },
        1209: () => {},
        2501: (e, t, r) => {
            "use strict";

            function n(e, t) {
                void 0 === t && (t = e.constructor);
                var r = Error.captureStackTrace;
                r && r(e, t)
            }
            r.r(t), r.d(t, {
                CustomError: () => s,
                customErrorFactory: () => u
            });
            var o, a = (o = function(e, t) {
                    return o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    }, o(e, t)
                }, function(e, t) {
                    function r() {
                        this.constructor = e
                    }
                    o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                }),
                s = function(e) {
                    function t(t) {
                        var r, o, a, s = this.constructor,
                            i = e.call(this, t) || this;
                        return Object.defineProperty(i, "name", {
                            value: s.name,
                            enumerable: !1,
                            configurable: !0
                        }), r = i, o = s.prototype, (a = Object.setPrototypeOf) ? a(r, o) : r.__proto__ = o, n(i), i
                    }
                    return a(t, e), t
                }(Error),
                i = function() {
                    for (var e = arguments, t = 0, r = 0, n = arguments.length; r < n; r++) t += e[r].length;
                    var o = Array(t),
                        a = 0;
                    for (r = 0; r < n; r++)
                        for (var s = arguments[r], i = 0, u = s.length; i < u; i++, a++) o[a] = s[i];
                    return o
                };

            function u(e, t) {
                function r() {
                    for (var o = arguments, a = [], s = 0; s < arguments.length; s++) a[s] = o[s];
                    if (!(this instanceof r)) return new(r.bind.apply(r, i([void 0], a)));
                    t.apply(this, a), Object.defineProperty(this, "name", {
                        value: e.name || t.name,
                        enumerable: !1,
                        configurable: !0
                    }), e.apply(this, a), n(this, r)
                }
                return void 0 === t && (t = Error), Object.defineProperties(r, {
                    prototype: {
                        value: Object.create(t.prototype, {
                            constructor: {
                                value: r,
                                writable: !0,
                                configurable: !0
                            }
                        })
                    }
                })
            }
        }
    }
]);
//# sourceMappingURL=d41568b7f25714884231.js.map