(window.webpackJsonp = window.webpackJsonp || []).push([
    [28], {
        "1ScA": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return useReflowFrameClassName
            });
            var r = n("s8DI"),
                a = n("QtlZ"),
                c = n("ILQF"),
                o = n("g6eD"),
                s = n("JBtm"),
                i = n.n(s),
                u = n("ERkP"),
                l = n("EQxi"),
                f = !1;

            function useReflowFrameClassName() {
                var e = "";
                if (!f) {
                    var t = Object(l.f)(i.a.parse(document.location.search));
                    e = (null === t || void 0 === t ? void 0 : t.isXSScreenSize) ? "widget--xs" : "", f = !0
                }
                var n = Object(u.useState)(e),
                    s = Object(r.a)(n, 2),
                    p = s[0],
                    d = s[1],
                    b = Object(u.useState)(void 0),
                    v = Object(r.a)(b, 2),
                    g = v[0],
                    h = v[1];
                return Object(u.useEffect)(function() {
                    Object(c.c)({
                        topic: "CONDUCTOR:reflowFrame",
                        handler: function handler(e) {
                            var t = e.data;
                            d(function() {
                                return t.isXSScreenSize ? "widget--xs" : ""
                            }), a.a.dispatch(Object(o.g)(t.isXSScreenSize)), t.clientInnerHeight && h(function() {
                                return t.clientInnerHeight
                            })
                        }
                    })
                }, []), {
                    reflowFrameCX: p,
                    clientInnerHeight: g
                }
            }
        },
        "2uLe": function(e, t, n) {
            "use strict";
            var r = n("mj2O"),
                a = n.n(r),
                c = n("7SM1"),
                o = n("s8DI"),
                s = n("8ZCy"),
                i = n("VkHq"),
                u = n("ILQF"),
                l = n("Hvhg"),
                f = n("SFoa"),
                p = n("2XY6"),
                d = n("ERkP"),
                b = n("uDfI"),
                v = n("vTYT"),
                g = n("hEj5");
            t.a = function useSetPreviewHeight() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                var e = Object(g.a)(),
                    t = Object(o.a)(e, 2),
                    n = t[0],
                    r = t[1],
                    h = Object(b.c)(function(e) {
                        return !!e.conversations.activeConversation
                    }),
                    m = Object(b.c)(l.c).showBranding,
                    O = void 0 !== m && m,
                    j = Object(i.a)(),
                    w = j.privacyPolicyLinkText,
                    y = j.noPolicy,
                    A = j.privacyPolicyAlwaysOn,
                    E = Object(b.c)(function(e) {
                        return e.session.gdpr
                    }),
                    C = E.hasConsent,
                    _ = E.declinedConsent,
                    M = E.needsConsent,
                    S = Object(b.c)(p.e),
                    k = Object(d.useCallback)(function() {
                        var e = 0,
                            t = !O && y,
                            n = Object(f.m)(w);
                        if (_ && (e += s.b), t && !M && (e += s.d), !C) {
                            var r = t ? s.f : s.e;
                            e += s.b + r
                        }
                        return n && A && (e -= 40), e
                    }, [O, y, w, _, M, C, A]),
                    P = Object(d.useCallback)(function() {
                        return n ? n.height : 200
                    }, [n]),
                    T = Object(d.useCallback)(function(e) {
                        var t = P(),
                            n = e && M && _;
                        return e && !_ && M && !C && t < 413 ? s.g : n ? 150 : t
                    }, [_, M, C, P]);
                return {
                    setChatHeight: Object(d.useCallback)(function() {
                        var e = Object(c.a)(a.a.mark(function _callee(e) {
                            var t, n, r, c, o, i, l = arguments;
                            return a.a.wrap(function _callee$(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (t = l.length > 1 && void 0 !== l[1] && l[1], !h || !C) {
                                            a.next = 3;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 3:
                                        if (n = T(e), r = k(), c = S && !C ? s.h : s.i, (o = e ? n + c - r : 0) !== s.a) {
                                            a.next = 9;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 9:
                                        i = C, Object(u.a)({
                                            topic: "set-frame-height",
                                            message: {
                                                height: "".concat(o, "px"),
                                                name: v.d.CHAT,
                                                transition: i,
                                                transitionHeight: t
                                            }
                                        });
                                    case 11:
                                    case "end":
                                        return a.stop()
                                }
                            }, _callee)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [h, C, T, k, S]),
                    setPreviewRef: r,
                    setSliderHeight: Object(d.useCallback)(Object(c.a)(a.a.mark(function _callee2() {
                        var e;
                        return a.a.wrap(function _callee2$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = P(), S && (e = "calc(100% - 20px)"), Object(u.a)({
                                        topic: "set-frame-height",
                                        message: {
                                            height: "".concat(e + s.k, "px"),
                                            name: v.d.SLIDER,
                                            transition: !0,
                                            transitionHeight: !1
                                        }
                                    });
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee2)
                    })), [P, S]),
                    setEmailCaptureHeight: Object(d.useCallback)(Object(c.a)(a.a.mark(function _callee3() {
                        var e;
                        return a.a.wrap(function _callee3$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = P(), Object(u.a)({
                                        topic: "set-frame-height",
                                        message: {
                                            height: "".concat(e + s.c, "px"),
                                            name: v.d.EMAIL_CAPTURE,
                                            transition: !0,
                                            transitionHeight: !1
                                        }
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee3)
                    })), [P])
                }
            }
        },
        G5CQ: function(e, t, n) {},
        Gxm1: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return i
            });
            var r = n("QtlZ"),
                a = n("LVcX"),
                c = n("0lfv"),
                o = n("CYoe"),
                s = function markTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    r.a.dispatch(Object(o.c)(e, t))
                },
                i = function measureTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                        n = Object(a.a)(null, ["metrics", "timeByName", e], Object(r.b)());
                    return n ? (r.a.dispatch(Object(o.a)(e)), t - n) : (Object(c.o)({
                        type: "warn",
                        data: ['Tried to measure "'.concat(e, '" without mark')]
                    }), null)
                }
        },
        QkDh: function(e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var r = new Uint8Array(16);
                e.exports = function whatwgRNG() {
                    return n(r), r
                }
            } else {
                var a = new Array(16);
                e.exports = function mathRNG() {
                    for (var e, t = 0; t < 16; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), a[t] = e >>> ((3 & t) << 3) & 255;
                    return a
                }
            }
        },
        SrLZ: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("jm9a"),
                a = n("mj2O"),
                c = n.n(a),
                o = n("7SM1"),
                s = n("s8DI"),
                i = n("OE2q"),
                u = n("O94r"),
                l = n.n(u),
                f = n("Rqwx"),
                p = n("fTFZ"),
                d = n("vkRn"),
                b = n("CwrG"),
                v = n("HXmn"),
                g = n("8eKL"),
                h = n("slYP"),
                m = n("BY8A"),
                O = n("+/Je"),
                j = n("Y0wo"),
                w = n("8ZCy"),
                y = n("fw6E"),
                A = n("1b8i"),
                E = n("gRD2"),
                C = n("+qGC"),
                _ = n("fpJs"),
                M = n("Sn8X"),
                S = n("fJrp"),
                k = n("1ScA"),
                P = n("VkHq"),
                T = n("GM2V"),
                L = n("lE29"),
                I = n("swFs"),
                R = n("+Kbs"),
                x = n("nQD+"),
                H = n("sxX9"),
                N = n("pwwT"),
                D = n("2uLe"),
                F = n("2XY6"),
                V = n("ERkP"),
                B = n.n(V),
                G = n("uDfI"),
                X = (n("SwvN"), function HeaderLayout(e) {
                    var t = e.chatHidden,
                        n = Object(L.a)(),
                        r = n.backgroundStyles,
                        a = n.conversationHeaderTextStyles,
                        c = Object(G.c)(function(e) {
                            return e.session.gdpr
                        }).hasConsent,
                        o = Object(D.a)(),
                        i = o.setChatHeight,
                        u = o.setPreviewRef,
                        f = Object(G.c)(function(e) {
                            return e.view
                        }),
                        p = f.chatOpen,
                        d = f.isCohabiting,
                        b = Object(N.a)(),
                        v = Object(V.useState)(Object(G.c)(F.a)),
                        g = Object(s.a)(v, 2),
                        h = g[0],
                        m = g[1],
                        O = Object(S.a)(h),
                        j = h !== O;
                    Object(V.useLayoutEffect)(function() {
                        p && !t && i(p, j)
                    }, [p, t, i, j]);
                    var w = Object(G.c)(F.a);
                    Object(V.useEffect)(function() {
                        w !== h && m(w)
                    }, [w, h]);
                    var y = H.a[h],
                        A = h !== H.b.CONVERSATION;
                    return B.a.createElement("header", {
                        className: l()("drift-widget-header", {
                            "drift-widget-header--collapsed": A,
                            "drift-widget-header--gdpr-consent": !c
                        })
                    }, B.a.createElement(I.a, {
                        style: r
                    }), B.a.createElement("div", {
                        className: "drift-widget-header--content content--".concat(h)
                    }, B.a.createElement(y, {
                        previewRef: u,
                        resetChatHeight: function resetChatHeight() {
                            i(p, !0)
                        }
                    })), B.a.createElement(x.a, {
                        onClick: b,
                        className: l()("drift-widget-close", {
                            "sc-drift-widget-close": d
                        }),
                        "aria-label": "Close Drift Widget messenger",
                        style: a
                    }, B.a.createElement(R.k, {
                        width: 16,
                        height: 16
                    })))
                }),
                U = n("ILQF"),
                Q = n("K7i0"),
                W = n("bYXQ"),
                Y = n("Hvhg"),
                z = n("SFoa"),
                J = n("pu/X"),
                Z = n("da4L"),
                $ = n("Gxm1"),
                q = n("LVcX"),
                K = n("TbSn"),
                ee = n("kNJ0"),
                te = n("oPI6"),
                ne = n("ADGC"),
                re = n("0lfv"),
                ae = n("VpmR"),
                ce = n("4c+F"),
                oe = n("HSQL"),
                se = (n("sXTY"), Object(V.lazy)(function() {
                    return n.e(48).then(n.bind(null, "f2yG"))
                })),
                ie = null,
                ue = function ChatLayout() {
                    var e = Object(G.b)(),
                        t = Object(ne.c)(),
                        n = Object(k.a)(),
                        a = Object(V.useState)(!0),
                        u = Object(s.a)(a, 2),
                        f = u[0],
                        I = u[1];
                    Object(M.a)();
                    var R = Object(G.c)(function(e) {
                            return e.view
                        }),
                        x = R.chatOpen,
                        H = R.isChatTakeover,
                        N = Object(G.c)(Y.c).showBranding,
                        D = void 0 !== N && N,
                        te = Object(P.a)().noPolicy,
                        ae = !D && te;
                    Object(V.useLayoutEffect)(function() {
                        H && x && Object(U.a)({
                            topic: "set-frame-width-and-height",
                            message: {
                                className: j.a,
                                height: w.j,
                                max: !0,
                                name: "chat",
                                width: w.j
                            }
                        })
                    }, [H, x]);
                    var ue = Object(G.c)(function(e) {
                            return e.conversations.activeConversation
                        }),
                        le = Object(E.a)().fetchMessages,
                        fe = Object(S.a)(ue),
                        pe = Object(G.c)(function(e) {
                            return e.conversations.conversations
                        }),
                        de = Object(G.c)(function(e) {
                            return e.conversations.messages
                        }),
                        be = Object(G.c)(function(e) {
                            return Object(q.a)({}, ["conversations", "messages", e.conversations.activeConversation], e)
                        }),
                        ve = Object(G.c)(function(e) {
                            return Object(q.a)(!1, ["conversations", "conversationStatus", e.conversations.activeConversation, "permaclosed"], e)
                        }),
                        ge = Object(V.useMemo)(function() {
                            return Object(Z.s)(be)
                        }, [be]),
                        he = Object(G.c)(function(e) {
                            return e.campaigns.activeCampaign
                        }),
                        me = Object(G.c)(function(e) {
                            return e.session.gdpr
                        }).hasConsent,
                        Oe = Object(y.a)(),
                        je = Oe.conversationHistoryOpen,
                        we = Oe.conversationHistoryEnabled,
                        ye = Object(T.a)(),
                        Ae = ye.sendTranscriptOpen,
                        Ee = ye.sendTranscriptEnabled,
                        Ce = Object(L.a)().widgetBackgroundStyles;
                    Object(V.useEffect)(function() {
                        (function() {
                            var t = Object(o.a)(c.a.mark(function _callee() {
                                var t, n, r, a, o;
                                return c.a.wrap(function _callee$(c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            if (t = !ue || ue === O.a, n = fe === ue, r = !!pe[ue] && !!de[ue], !(t || n || r || Object(W.e)(ue))) {
                                                c.next = 5;
                                                break
                                            }
                                            return c.abrupt("return");
                                        case 5:
                                            return c.prev = 5, c.next = 8, Object(i.h)(ue);
                                        case 8:
                                            a = c.sent, o = a.data, e(Object(Q.i)({
                                                conversation: o
                                            })), le({}), c.next = 17;
                                            break;
                                        case 14:
                                            c.prev = 14, c.t0 = c.catch(5), Object(re.f)(J.a.MESSAGE.FETCH_MESSAGE_OR_ACTIVE_CONVO, c.t0, !0);
                                        case 17:
                                        case "end":
                                            return c.stop()
                                    }
                                }, _callee, null, [
                                    [5, 14]
                                ])
                            }));
                            return function fetchInfoForActiveConversation() {
                                return t.apply(this, arguments)
                            }
                        })()()
                    }, [ue, e, le, fe, pe, de]), Object(V.useEffect)(function() {
                        x ? (function() {
                            var e = Object(o.a)(c.a.mark(function _callee2() {
                                return c.a.wrap(function _callee2$(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(U.a)({
                                                topic: "focus-frame",
                                                message: {
                                                    name: "chat"
                                                }
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, _callee2)
                            }));
                            return function focus() {
                                return e.apply(this, arguments)
                            }
                        }()(), ie && clearTimeout(ie), I(!1)) : ie = setTimeout(function delaySetReflowHidden() {
                            I(!0)
                        }, 350)
                    }, [x]);
                    var _e = Object(V.useMemo)(function() {
                        if (!me || !x) return !1;
                        if (he && he.id && !ue) {
                            var e = !!Object(q.a)(null, ["attributes", "cta"], he),
                                t = "CHAT_RESPONSE" !== Object(q.a)(null, ["attributes", "cta", "CtaType"], he);
                            if (e && t) return !1
                        }
                        var n = ge.length > 0 && ge.length <= 2 && !Object(Z.e)(ge[0]);
                        return !H || n || ge.length > 2
                    }, [he, ue, me, H, ge, x]);
                    Object(V.useEffect)(function() {
                        Object(oe.b)("WIDGET_CHAT_FRAME.start")
                    }, []);
                    var Me = Object(V.useRef)(!1);
                    Object(V.useEffect)(function() {
                        if (!Me.current && H && ge.length > 0) {
                            var e = Object($.b)("post_form_takeover_tti"),
                                t = Object($.b)("post_form_takeover_show");
                            e && Object(ce.d)("Post Form Takeover TTI", e), t && Object(ce.d)("Post Form Takeover Show", t), Me.current = !0
                        }
                    }, [H, ge]);
                    var Se = Object(V.useMemo)(function() {
                            if (ve) return p.a.UNAVAILABLE;
                            var e = Object(K.a)(ge);
                            if (!e) return p.a.AVAILABLE;
                            var t = Object(ee.a)(-2, ge),
                                n = Object(Z.e)(t) && Object(Z.i)(e);
                            return Object(Z.e)(e) || n || Object(Z.j)(e) ? p.a.UNAVAILABLE_BUTTONS : Object(Z.o)(e) || Object(Z.o)(t) && Object(Z.i)(e) ? p.a.AVAILABLE_BUTTONS : p.a.AVAILABLE
                        }, [ge, ve]),
                        ke = Se === p.a.AVAILABLE || Se === p.a.AVAILABLE_BUTTONS,
                        Pe = Object(A.a)(ge, ue),
                        Te = Object(V.useMemo)(function() {
                            return Object(Z.c)(Pe)
                        }, [Pe]),
                        Le = Object(C.b)(Pe),
                        Ie = Object(C.a)(Pe),
                        Re = !Object(re.m)(Le) && Object(re.m)(Ie),
                        xe = Object(V.useMemo)(function() {
                            return B.a.createElement(g.a, {
                                messageGroups: Te,
                                messages: Pe,
                                reflowHidden: f,
                                disabled: je
                            })
                        }, [Te, Pe, f, je]),
                        He = Object(_.a)(),
                        Ne = me && (!!ue || H),
                        De = !_e || !ke,
                        Fe = Object(G.c)(F.a),
                        Ve = Object(P.a)().privacyPolicyLinkText,
                        Be = Object(z.m)(Ve);
                    return B.a.createElement("main", {
                        className: l()("drift-widget-chat-layout", Object(r.a)({
                            "drift-widget-chat-layout__takeover": H && !t
                        }, n.reflowFrameCX, !!n))
                    }, B.a.createElement(m.a, null), B.a.createElement("div", {
                        className: l()("drift-widget-chat-wrapper", "drift-widget-chat-wrapper__".concat(Fe), {
                            "drift-widget-chat-wrapper__open": x,
                            "drift-widget-chat-wrapper__closed": !x,
                            "drift-widget-chat-wrapper__reflow-hidden": f,
                            "drift-widget-chat-wrapper__active-conversation": Ne,
                            "drift-widget-chat-wrapper__no-footer-content": ae && De,
                            "drift-widget-chat-wrapper__mobile": t,
                            "drift-widget-chat-wrapper__conversation-history": je,
                            "drift-widget-chat-wrapper__large-footer": Be
                        })
                    }, B.a.createElement(X, {
                        chatHidden: f
                    }), !H && we && B.a.createElement(d.a, null), !H && Ee && B.a.createElement("div", {
                        className: l()("drift-widget-send-transcript-container", {
                            "drift-widget-send-transcript-container--open": Ae
                        }),
                        "aria-hidden": !Ae
                    }, Ae && B.a.createElement(se, {
                        key: Ae.toString()
                    })), Ne && B.a.createElement("div", {
                        className: l()("drift-widget-message-history", {
                            "drift-widget-message-history--with-footer": He,
                            "drift-widget-message-history--no-composer": De
                        }),
                        style: Ce
                    }, xe, 0 === ge.length && B.a.createElement(v.a, {
                        titleId: "ChatLayoutLoading"
                    })), B.a.createElement("div", {
                        className: "drift-widget-chat-bottom"
                    }, _e && B.a.createElement(p.b, {
                        chatHidden: f,
                        disabled: je || Ae
                    }), !(je || Ae) && B.a.createElement(b.a, null)), ue && Re && B.a.createElement(h.a, {
                        message: Le
                    })))
                };
            t.default = function(e) {
                var t = Object(V.useState)(!1),
                    n = Object(s.a)(t, 2),
                    r = n[0],
                    a = n[1],
                    i = Object(G.c)(function(e) {
                        return e.view.initComplete
                    }),
                    u = Object(z.f)();
                return Object(V.useEffect)(function() {
                    i && !r && function() {
                        var e = Object(o.a)(c.a.mark(function _callee3() {
                            return c.a.wrap(function _callee3$(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(ae.b)(u);
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), Object(re.o)({
                                            data: ["i18n failed to load - ".concat(e.t0.message), e.t0],
                                            type: "warn",
                                            internal: !0
                                        });
                                    case 8:
                                        a(!0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, _callee3, null, [
                                [0, 5]
                            ])
                        }));
                        return function runAsync() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }, [i, r, u]), B.a.createElement(te.a, null, i && r ? B.a.createElement(ue, e) : B.a.createElement(f.a, null))
            }
        },
        SwvN: function(e, t, n) {},
        "W+sf": function(e, t) {
            for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
            e.exports = function bytesToUuid(e, t) {
                var r = t || 0,
                    a = n;
                return [a[e[r++]], a[e[r++]], a[e[r++]], a[e[r++]], "-", a[e[r++]], a[e[r++]], "-", a[e[r++]], a[e[r++]], "-", a[e[r++]], a[e[r++]], "-", a[e[r++]], a[e[r++]], a[e[r++]], a[e[r++]], a[e[r++]], a[e[r++]]].join("")
            }
        },
        gf09: function(e, t, n) {
            var r = n("QkDh"),
                a = n("W+sf");
            e.exports = function v4(e, t, n) {
                var c = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var o = (e = e || {}).random || (e.rng || r)();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                    for (var s = 0; s < 16; ++s) t[c + s] = o[s];
                return t || a(o)
            }
        },
        hEj5: function(e, t, n) {
            "use strict";
            var r = n("s8DI"),
                a = n("ERkP"),
                c = n("LaGA");
            t.a = function useResizeObserver() {
                var e = Object(a.useState)(),
                    t = Object(r.a)(e, 2),
                    n = t[0],
                    o = t[1],
                    s = Object(a.useState)(null),
                    i = Object(r.a)(s, 2),
                    u = i[0],
                    l = i[1],
                    f = Object(a.useRef)(null),
                    p = Object(a.useCallback)(function() {
                        return f.current && f.current.disconnect()
                    }, []),
                    d = Object(a.useCallback)(function() {
                        u && (f.current = new c.a(function() {
                            return o(function getRectForRef(e) {
                                return e && e.getBoundingClientRect()
                            }(u))
                        }), f.current.observe(u))
                    }, [u]);
                return Object(a.useLayoutEffect)(function() {
                    return d(),
                        function() {
                            return p()
                        }
                }, [p, d]), [n, l]
            }
        },
        oPI6: function(e, t, n) {
            "use strict";
            var r = n("ERkP"),
                a = n.n(r),
                c = (n("aWzz"), {
                    border: 0,
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    padding: 0,
                    width: "1px",
                    position: "absolute"
                }),
                o = function MessageBlock(e) {
                    var t = e.message,
                        n = e["aria-live"];
                    return a.a.createElement("div", {
                        style: c,
                        role: "log",
                        "aria-live": n
                    }, t || "")
                };
            o.propTypes = {};
            var s = o;

            function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
            }
            var i = function(e) {
                function Announcer() {
                    var t, n;
                    ! function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Announcer);
                    for (var r = arguments.length, a = Array(r), c = 0; c < r; c++) a[c] = arguments[c];
                    return t = n = _possibleConstructorReturn(this, e.call.apply(e, [this].concat(a))), n.state = {
                        assertiveMessage1: "",
                        assertiveMessage2: "",
                        politeMessage1: "",
                        politeMessage2: "",
                        oldPolitemessage: "",
                        oldPoliteMessageId: "",
                        oldAssertiveMessage: "",
                        oldAssertiveMessageId: "",
                        setAlternatePolite: !1,
                        setAlternateAssertive: !1
                    }, _possibleConstructorReturn(n, t)
                }
                return function _inherits(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(Announcer, e), Announcer.getDerivedStateFromProps = function getDerivedStateFromProps(e, t) {
                    var n = t.oldPolitemessage,
                        r = t.oldPoliteMessageId,
                        a = t.oldAssertiveMessage,
                        c = t.oldAssertiveMessageId,
                        o = e.politeMessage,
                        s = e.politeMessageId,
                        i = e.assertiveMessage,
                        u = e.assertiveMessageId;
                    return n !== o || r !== s ? {
                        politeMessage1: t.setAlternatePolite ? "" : o,
                        politeMessage2: t.setAlternatePolite ? o : "",
                        oldPolitemessage: o,
                        oldPoliteMessageId: s,
                        setAlternatePolite: !t.setAlternatePolite
                    } : a !== i || c !== u ? {
                        assertiveMessage1: t.setAlternateAssertive ? "" : i,
                        assertiveMessage2: t.setAlternateAssertive ? i : "",
                        oldAssertiveMessage: i,
                        oldAssertiveMessageId: u,
                        setAlternateAssertive: !t.setAlternateAssertive
                    } : null
                }, Announcer.prototype.render = function render() {
                    var e = this.state,
                        t = e.assertiveMessage1,
                        n = e.assertiveMessage2,
                        r = e.politeMessage1,
                        c = e.politeMessage2;
                    return a.a.createElement("div", null, a.a.createElement(s, {
                        "aria-live": "assertive",
                        message: t
                    }), a.a.createElement(s, {
                        "aria-live": "assertive",
                        message: n
                    }), a.a.createElement(s, {
                        "aria-live": "polite",
                        message: r
                    }), a.a.createElement(s, {
                        "aria-live": "polite",
                        message: c
                    }))
                }, Announcer
            }(r.Component);
            i.propTypes = {};
            var u = i;

            function logContextWarning() {
                console.warn("Announcement failed, LiveAnnouncer context is missing")
            }
            var l = a.a.createContext({
                announceAssertive: logContextWarning,
                announcePolite: logContextWarning
            });
            var f = function(e) {
                    function LiveAnnouncer(t) {
                        ! function LiveAnnouncer_classCallCheck(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, LiveAnnouncer);
                        var n = function LiveAnnouncer_possibleConstructorReturn(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, e.call(this, t));
                        return n.announcePolite = function(e, t) {
                            n.setState({
                                announcePoliteMessage: e,
                                politeMessageId: t || ""
                            })
                        }, n.announceAssertive = function(e, t) {
                            n.setState({
                                announceAssertiveMessage: e,
                                assertiveMessageId: t || ""
                            })
                        }, n.state = {
                            announcePoliteMessage: "",
                            politeMessageId: "",
                            announceAssertiveMessage: "",
                            assertiveMessageId: "",
                            updateFunctions: {
                                announcePolite: n.announcePolite,
                                announceAssertive: n.announceAssertive
                            }
                        }, n
                    }
                    return function LiveAnnouncer_inherits(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(LiveAnnouncer, e), LiveAnnouncer.prototype.render = function render() {
                        var e = this.state,
                            t = e.announcePoliteMessage,
                            n = e.politeMessageId,
                            r = e.announceAssertiveMessage,
                            c = e.assertiveMessageId,
                            o = e.updateFunctions;
                        return a.a.createElement(l.Provider, {
                            value: o
                        }, this.props.children, a.a.createElement(u, {
                            assertiveMessage: r,
                            assertiveMessageId: c,
                            politeMessage: t,
                            politeMessageId: n
                        }))
                    }, LiveAnnouncer
                }(r.Component),
                p = n("gf09"),
                d = n.n(p);

            function AnnouncerMessage_possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
            }
            var b = function(e) {
                function AnnouncerMessage() {
                    var t, n;
                    ! function AnnouncerMessage_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, AnnouncerMessage);
                    for (var r = arguments.length, a = Array(r), c = 0; c < r; c++) a[c] = arguments[c];
                    return t = n = AnnouncerMessage_possibleConstructorReturn(this, e.call.apply(e, [this].concat(a))), n.announce = function() {
                        var e = n.props,
                            t = e.message,
                            r = e["aria-live"],
                            a = e.announceAssertive,
                            c = e.announcePolite;
                        "assertive" === r && a(t || "", d()()), "polite" === r && c(t || "", d()())
                    }, AnnouncerMessage_possibleConstructorReturn(n, t)
                }
                return function AnnouncerMessage_inherits(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(AnnouncerMessage, e), AnnouncerMessage.prototype.componentDidMount = function componentDidMount() {
                    this.announce()
                }, AnnouncerMessage.prototype.componentDidUpdate = function componentDidUpdate(e) {
                    this.props.message !== e.message && this.announce()
                }, AnnouncerMessage.prototype.componentWillUnmount = function componentWillUnmount() {
                    var e = this.props,
                        t = e.clearOnUnmount,
                        n = e.announceAssertive,
                        r = e.announcePolite;
                    !0 !== t && "true" !== t || (n(""), r(""))
                }, AnnouncerMessage.prototype.render = function render() {
                    return null
                }, AnnouncerMessage
            }(r.Component);
            b.propTypes = {};
            var v = b,
                g = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                h = function LiveMessage(e) {
                    return a.a.createElement(l.Consumer, null, function(t) {
                        return a.a.createElement(v, g({}, t, e))
                    })
                };
            h.propTypes = {};
            var m = h,
                O = function LiveMessenger(e) {
                    var t = e.children;
                    return a.a.createElement(l.Consumer, null, function(e) {
                        return t(e)
                    })
                };
            O.propTypes = {};
            n.d(t, "a", function() {
                return f
            }), n.d(t, "b", function() {
                return m
            })
        },
        sXTY: function(e, t, n) {},
        swFs: function(e, t, n) {
            "use strict";
            var r = n("ERkP"),
                a = n.n(r);
            n("G5CQ");
            t.a = function TopLine(e) {
                var t = e.style;
                return a.a.createElement("div", {
                    className: "drift-widget-header-top-line",
                    style: t
                })
            }
        }
    }
]);