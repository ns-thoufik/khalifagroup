(window.webpackJsonp = window.webpackJsonp || []).push([
    [39], {
        "2AO3": function(e, t, a) {
            "use strict";
            a.r(t);
            var c = a("mj2O"),
                n = a.n(c),
                r = a("7SM1"),
                i = a("Rqwx"),
                l = a("QtlZ"),
                o = a("My8U"),
                s = a("Bjre"),
                u = a("ILQF"),
                d = a("K7i0"),
                f = a("ERkP"),
                b = a.n(f),
                p = a("uDfI"),
                m = a("ADGC"),
                h = function forceComposerFocus() {
                    if (Object(m.a)()) {
                        var e = document.querySelector("textarea.drift-widget-input:focus");
                        e && setTimeout(function() {
                            var t = e.value;
                            e.value = " ", e.value = t
                        }, 50)
                    }
                },
                v = a("SkRI"),
                O = a("Cpup"),
                w = a("HSQL");
            l.a.name = "chat";
            var j = Object(f.lazy)(Object(r.a)(n.a.mark(function _callee() {
                return n.a.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Object(v.a)(function() {
                                return Promise.all([a.e(0), a.e(3), a.e(1), a.e(28)]).then(a.bind(null, "SrLZ"))
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }, _callee)
            })));
            t.default = function ChatPage() {
                return Object(f.useEffect)(function() {
                    Object(o.a)({
                        name: "chat",
                        syncWith: "controller",
                        store: l.a
                    }), Object(u.c)({
                        topic: "CONDUCTOR:action-from-plugin",
                        handler: function handler(e) {
                            var t = e.data,
                                a = void 0 === t ? {} : t;
                            l.a.dispatch(Object(O.a)({
                                type: a.action,
                                payload: a.payload
                            }))
                        }
                    }), Object(u.c)({
                        topic: "parent-scroll",
                        handler: h
                    }), Object(s.b)({
                        topic: "syncSendMessage",
                        handler: function handler(e) {
                            l.a.dispatch(Object(d.x)({
                                message: e
                            }))
                        }
                    }), Object(s.b)({
                        topic: "syncReceiveMessageSent",
                        handler: function handler(e) {
                            l.a.dispatch(Object(d.w)(e))
                        }
                    }), Object(w.a)("WIDGET_CHAT_FRAME.start")
                }, []), b.a.createElement(p.a, {
                    store: l.a
                }, b.a.createElement(f.Suspense, {
                    fallback: b.a.createElement(i.a, null)
                }, b.a.createElement(j, null)))
            }
        },
        HXmn: function(e, t, a) {
            "use strict";
            var c = a("jm9a"),
                n = a("O94r"),
                r = a.n(n),
                i = a("ERkP"),
                l = a.n(i);
            a("yhQp");
            t.a = function LoaderBalls(e) {
                var t = e.className,
                    a = e.size,
                    n = void 0 === a ? "medium" : a,
                    i = e.visible,
                    o = void 0 === i || i,
                    s = e.titleId,
                    u = "loaderBallTitle_".concat(s);
                return l.a.createElement("div", {
                    "aria-live": "polite",
                    className: r()("drift-widget-loader-balls drift-widget-loader-balls--".concat(n), Object(c.a)({
                        "drift-widget-loader-balls--visible": o
                    }, t, !!t))
                }, l.a.createElement("svg", {
                    "aria-labelledby": u,
                    viewBox: "0 0 80 80",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img"
                }, l.a.createElement("title", {
                    id: u
                }, "Processing... please wait"), l.a.createElement("circle", {
                    cx: "10",
                    cy: "20",
                    r: "9"
                }), l.a.createElement("circle", {
                    cx: "40",
                    cy: "20",
                    r: "9"
                }), l.a.createElement("circle", {
                    cx: "70",
                    cy: "20",
                    r: "9"
                })))
            }
        },
        My8U: function(e, t, a) {
            "use strict";
            var c = a("nfbA"),
                n = a("ILQF"),
                r = a("SWQ0"),
                i = a("wNJw");
            t.a = function UseStoreSync(e) {
                var t = e.store,
                    a = e.syncWith,
                    l = e.name;
                return Object(n.c)({
                    topic: "CONDUCTOR:action-from-".concat(a),
                    handler: function handler(e) {
                        t.dispatch(Object(c.a)(Object(c.a)({}, e.data.action), {}, {
                            _foreignDispatch: !0
                        }))
                    }
                }), Object(i.a)(r.a["".concat(l.toUpperCase(), "_READY")]), t
            }
        },
        Rqwx: function(e, t, a) {
            "use strict";
            var c = a("HXmn"),
                n = a("ERkP"),
                r = a.n(n),
                i = a("uDfI");
            a("VSUx");
            t.a = function ChatLoader() {
                var e = Object(i.c)(function(e) {
                    return e.view.chatOpen
                });
                return r.a.createElement("div", {
                    className: "drift-widget-chat-layout-loader"
                }, r.a.createElement(c.a, {
                    className: "drift-widget-chat-layout-loader--loader-balls",
                    visible: e,
                    titleId: "ChatLoader"
                }))
            }
        },
        VSUx: function(e, t, a) {},
        yhQp: function(e, t, a) {}
    }
]);