(window.webpackJsonp = window.webpackJsonp || []).push([
    [27], {
        "+MHw": function(e, t, n) {
            "use strict";
            var c = n("ERkP"),
                o = n.n(c);
            t.a = function FillerElement() {
                return o.a.createElement("div", {
                    "aria-hidden": !0,
                    "aria-label": "exiting drift widget",
                    role: "button",
                    tabIndex: 0
                })
            }
        },
        "3y+j": function(e, t, n) {},
        "BA/U": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var c = function onKeyDownSubmit(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return function(n) {
                    (function isEnter(e) {
                        return "Enter" === e.key || 13 === e.keyCode
                    }(n) || t && function isSpace(e) {
                        return "Space" === e.key || 32 === e.keyCode
                    }(n)) && (n.preventDefault(), e())
                }
            }
        },
        BY8A: function(e, t, n) {
            "use strict";
            var c = n("s8DI"),
                o = n("QtlZ"),
                a = n("Hvhg"),
                i = n("ERkP"),
                r = n.n(i),
                s = n("rTkt");
            n("zoZM");
            t.a = function ThemeStyleSheets() {
                var e = Object(i.useState)(!1),
                    t = Object(c.a)(e, 2),
                    n = t[0],
                    l = t[1],
                    d = Object(a.b)(Object(o.b)());
                return Object(i.useEffect)(function() {
                    n || (Object(s.a)(d), Object(s.b)(d), l(!0))
                }, [d, n]), r.a.createElement("div", {
                    className: "drift-widget-preload-fonts",
                    "aria-hidden": "true"
                }, r.a.createElement("span", null, "A"), r.a.createElement("strong", null, "B"))
            }
        },
        NJR1: function(e, t, n) {},
        "ab+K": function(e, t, n) {
            "use strict";
            var c = n("/UYI"),
                o = n("nQD+"),
                a = n("Za8o"),
                i = n("LwEI"),
                r = n("ERkP"),
                s = n.n(r);
            n("NJR1");
            t.a = function MessageCloseButton(e) {
                var t = e.onClick,
                    n = e.shouldFocus,
                    l = void 0 !== n && n,
                    d = Object(i.a)(),
                    u = Object(r.useRef)(null);
                Object(a.a)(u, l);
                return s.a.createElement(o.a, {
                    onClick: function handleOnClick(e) {
                        (null === u || void 0 === u ? void 0 : u.current) && (null === u || void 0 === u || u.current.blur()), t(e)
                    },
                    ref: u,
                    className: "drift-widget-message-close-button drift-widget-close-button--align-".concat(d),
                    "aria-label": "Close Drift Widget messenger preview overlay"
                }, s.a.createElement(c.a, {
                    width: 10,
                    height: 10
                }))
            }
        },
        dT9Q: function(e, t, n) {
            "use strict";
            var c = n("s8DI"),
                o = n("BA/U"),
                a = n("ab+K"),
                i = n("7oh4"),
                r = n("nedb"),
                s = n("Erxq"),
                l = n("fJrp"),
                d = n("58kB"),
                u = n("hEj5"),
                b = n("IJKc"),
                f = n("LwEI"),
                O = n("SsZN"),
                j = n("vjCh"),
                g = n("ILQF"),
                v = n("qixE"),
                m = n("xwTo"),
                p = n("da4L"),
                h = n("+f1A"),
                E = n("X9/c"),
                C = n("g6eD"),
                w = n("2XY6"),
                k = n("i9gz"),
                I = n("RhEL"),
                A = n("LVcX"),
                S = n("ERkP"),
                R = n.n(S),
                _ = n("uDfI"),
                y = n("vTYT"),
                D = n("y0on"),
                L = n("4c+F");
            n("pUpc");
            t.a = function MessagePreview() {
                var e = Object(u.a)(),
                    t = Object(c.a)(e, 2),
                    n = t[0],
                    N = t[1],
                    M = Object(_.b)(),
                    T = Object(S.useState)(null),
                    J = Object(c.a)(T, 2),
                    P = J[0],
                    U = J[1],
                    x = Object(l.a)(P),
                    B = Object(_.c)(function(e) {
                        return e.conversations
                    }).activeConversation,
                    W = Object(_.c)(function(e) {
                        return e.session.gdpr
                    }),
                    F = Object(b.a)(),
                    H = Object(r.a)(),
                    Z = Object(_.c)(w.g),
                    K = Object(_.c)(h.g),
                    V = Object(_.c)(m.d),
                    Q = Object(_.c)(h.j),
                    G = Object(_.c)(h.n),
                    X = Object(_.c)(function(e) {
                        return e.view.chatOpen
                    }),
                    z = Object(_.c)(function(e) {
                        return e.view.hidePreviewUntilAfterInitialRender
                    }),
                    Y = !X && !Z,
                    q = Object(f.a)(),
                    $ = Object(d.a)(P ? P.authorId : null).recipient,
                    ee = Object(S.useMemo)(function() {
                        return !(W.declinedConsent || !P || !P.body || X || Y || z)
                    }, [W.declinedConsent, P, X, Y, z]);
                Object(S.useEffect)(function setLatestMessageFromConvo() {
                    if (Object(k.a)(F)) U(null);
                    else {
                        var e = F.pop() || {};
                        P && Object(I.a)(e.id, P.id) || U(Object(p.t)(e, 100))
                    }
                }, [F]), Object(S.useEffect)(function() {
                    z && (X || P && x && (null === P || void 0 === P ? void 0 : P.id) !== (null === x || void 0 === x ? void 0 : x.id)) && M(Object(C.d)(!1))
                }, [M, z, x, P, X]), Object(S.useLayoutEffect)(function() {
                    if (ee && n) {
                        var e = n ? n.width : 0,
                            t = n ? n.height : 0,
                            c = e + i.b + 40,
                            o = t + 36;
                        Object(E.c)(o, c)
                    }
                }, [n, ee]);
                var te = Object(s.a)(P),
                    ne = Object(p.b)(P),
                    ce = Object(l.a)(ne),
                    oe = Object(D.a)($.name, ne);
                !X && ne && ce !== ne && Object(g.a)({
                    topic: "sc::render-conversation-preview",
                    message: {
                        messagePreviewText: ne
                    }
                });
                var ae = function dismiss() {
                        P && (Object(v.d)(B), U({}), Object(E.b)(), ie())
                    },
                    ie = function dismissPlaybookIfNotInteracted() {
                        if (!Object(m.l)()) {
                            var e = Object(A.a)(null, ["attributes", "playbookId"], H);
                            if (Object(O.o)(P), Object(j.k)(H.id, e), !V) {
                                var t = Q === G;
                                Object(L.c)("Playbook Dismissed", {
                                    campaignId: H.id,
                                    playbookId: e,
                                    endUserId: K,
                                    isEndUserFirstVisit: t,
                                    isInEngagementEAP: !1,
                                    clickedElement: "preview"
                                })
                            }
                        }
                    },
                    re = function openChat() {
                        if (Object(E.b)(), te) {
                            var e = Object(A.a)(null, ["attributes", "playbookId"], H);
                            if (Object(O.n)(P), Object(j.k)(H.id, e), !V) {
                                var t = Q === G;
                                Object(L.c)("Playbook Clicked", {
                                    campaignId: H.id,
                                    playbookId: e,
                                    endUserId: K,
                                    isEndUserFirstVisit: t,
                                    isInEngagementEAP: !1,
                                    clickedElement: "preview"
                                })
                            }
                        }
                        M(Object(C.i)({
                            chatOpen: !0
                        }))
                    };
                return ee && Z ? R.a.createElement("div", {
                    className: "drift-widget-message-preview-wrapper",
                    key: "".concat(P.id, "-preview-box")
                }, R.a.createElement("div", {
                    className: "drift-widget-message-preview drift-widget-message-preview--align-".concat(q)
                }, q === y.b.RIGHT && R.a.createElement(a.a, {
                    onClick: ae
                }), R.a.createElement("div", {
                    onClick: re,
                    onKeyDown: Object(o.a)(re),
                    className: "drift-widget-message-preview-text drift-widget-message-preview-text--align-".concat(q),
                    "aria-label": "".concat(oe ? oe + " - " : "", "Open chat"),
                    "aria-live": "polite",
                    tabIndex: 0,
                    role: "button"
                }, R.a.createElement("span", {
                    ref: N
                }, ne)), q === y.b.LEFT && R.a.createElement(a.a, {
                    onClick: ae
                }))) : null
            }
        },
        g3yi: function(e, t, n) {
            "use strict";
            var c = n("nfbA"),
                o = n("efbE"),
                a = n("LeJ0"),
                i = function getDefaultAuthParams(e) {
                    return {
                        embed_id: e,
                        client_id: a.a.CLIENT_ID,
                        consent_id: "has_consent"
                    }
                };
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return s
            });
            var r = function executeWidgetBootstrapForMode(e, t) {
                    switch (e) {
                        case "LANDING_PAGE":
                            return d(t);
                        case "CHAT":
                        default:
                            return l(t)
                    }
                },
                s = function executeBootstrapPing(e) {
                    return o.b.post("widget_bootstrap/ping/v2", {
                        data: {
                            ping_context: e
                        }
                    })
                },
                l = function widgetBootstrap(e) {
                    var t = i(e.embed_id);
                    return o.b.post("widget_bootstrap", {
                        data: Object(c.a)(Object(c.a)({}, t), e)
                    })
                },
                d = function landingPageBootstrap(e) {
                    var t = i(e.embed_id);
                    return o.b.post("widget_bootstrap/landing_page", {
                        data: Object(c.a)(Object(c.a)({}, t), e)
                    })
                }
        },
        pUpc: function(e, t, n) {},
        xKh3: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return E
            }), n.d(t, "a", function() {
                return C
            });
            var c = n("mj2O"),
                o = n.n(c),
                a = n("7SM1"),
                i = n("uIJS"),
                r = n("wQh9"),
                s = n("LeJ0"),
                l = n("QtlZ"),
                d = n("xwTo"),
                u = n("mJgV"),
                b = n("qwiD"),
                f = n("NsjZ"),
                O = n("ADGC"),
                j = n("+D5C"),
                g = n("0lfv"),
                v = n("76KI"),
                m = n("l+Xe"),
                p = n("JelZ"),
                h = new(function() {
                    function RefetchMessagesState() {
                        Object(i.a)(this, RefetchMessagesState), this.isJoinAfterConnectionLost = void 0, this.reconnectAttempts = void 0, this.rejoinAttempts = void 0, this.closeCode = void 0, this.isJoinAfterConnectionLost = !1, this.reconnectAttempts = 0, this.rejoinAttempts = 0, this.closeCode = 0
                    }
                    return Object(r.a)(RefetchMessagesState, [{
                        key: "shouldRefetchMessagesOnChannelJoin",
                        value: function shouldRefetchMessagesOnChannelJoin() {
                            return this.isJoinAfterConnectionLost
                        }
                    }, {
                        key: "onSocketDisconnect",
                        value: function onSocketDisconnect() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            e > 999 && (this.closeCode = e), this.isJoinAfterConnectionLost = !0
                        }
                    }, {
                        key: "resetStateOnJoin",
                        value: function resetStateOnJoin() {
                            this.isJoinAfterConnectionLost = !1, this.reconnectAttempts = 0, this.rejoinAttempts = 0, this.closeCode = 0
                        }
                    }, {
                        key: "setAttempt",
                        value: function setAttempt(e, t) {
                            "rejoin" === e ? this.rejoinAttempts = t : "reconnect" === e && (this.reconnectAttempts = t)
                        }
                    }]), RefetchMessagesState
                }()),
                E = function OpenSocket(e) {
                    var t = e.session_token,
                        n = e.org_id,
                        c = e.socketCluster,
                        o = e.ip,
                        a = "is_mobile_".concat(Object(O.c)(!0)),
                        i = s.a.WS_PROTOCOL,
                        r = "LOCAL" === s.a.WS_USER_ENV ? "" : "".concat(n, "-"),
                        d = Object(u.a)(l.a.getState()),
                        b = Object(p.a)(n),
                        m = d.includes(b.toString()),
                        E = Object(v.a)("has_socket_long_polling"),
                        C = m || E,
                        k = w(n, r, c),
                        I = "".concat(i, "://").concat(k, "/ws"),
                        A = new f.b(I, {
                            params: {
                                session_token: t,
                                remote_ip: o
                            },
                            timeout: 1e4,
                            reconnectAfterMs: function reconnectAfterMs(e) {
                                return h.setAttempt("reconnect", e), [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4
                            },
                            rejoinAfterMs: function rejoinAfterMs(e) {
                                return h.setAttempt("rejoin", e), [1e3, 2e3, 5e3][e - 1] || 1e4
                            }
                        });
                    return A.connect(), A.onError(function(e, t, a) {
                        var i = !1,
                            r = !1;
                        C && t === WebSocket && h.reconnectAttempts > 4 ? (A.replaceTransport(f.a), A.connect(), i = !0) : C && t === f.a && (A.replaceTransport(WebSocket), A.connect(), r = !0), c === j.c.CHAT && (E && Object(g.o)({
                            data: ["ERROR - chat cluster disconnected on org: ".concat(n, ", on IP: ").concat(o), "is_mobile_".concat(Object(O.c)(!0)), "Used Long Poll Transport: ".concat(i), "Used Round Robin back to WS Transport: ".concat(r), "establishedConnections: ".concat(a), "Attempts to Rejoin: ".concat(h.rejoinAttempts), "Attempts to Reconnect: ".concat(h.reconnectAttempts), "Close Code: ".concat(h.closeCode), "Is Join After Connection Lost: ".concat(h.isJoinAfterConnectionLost)],
                            internal: !0
                        }), h.onSocketDisconnect())
                    }), A.onClose(function(e) {
                        var t = null === e || void 0 === e ? void 0 : e.code;
                        c === j.c.CHAT && (E && Object(g.o)({
                            data: ["CLOSE - chat cluster closed on org: ".concat(n, ", on IP: ").concat(o), "Close Code: ".concat(t), a],
                            internal: !0
                        }), h.onSocketDisconnect(t), A.isConnected() && "closed" !== A.connectionState() && 1e3 !== t || (Object(g.o)({
                            data: ["WS Reconnect - attempting to reconnect to chat cluster ".concat(n, ", IP: ").concat(o, " after close code ").concat(t), "Socket Status: isConnected: ".concat(A.isConnected(), ", connectionState: ").concat(A.connectionState()), a],
                            internal: !0
                        }), h.setAttempt("reconnect", 1), A.connect()))
                    }), A
                },
                C = function() {
                    var e = Object(a.a)(o.a.mark(function _callee2(e) {
                        var t, n, c, i;
                        return o.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = e.channelName, n = e.socket, c = e.events, i = new Promise(function() {
                                        var e = Object(a.a)(o.a.mark(function _callee(e, a) {
                                            var i;
                                            return o.a.wrap(function _callee$(o) {
                                                for (;;) switch (o.prev = o.next) {
                                                    case 0:
                                                        i = n.channel(t), c.forEach(function(e) {
                                                            var t = e.topic,
                                                                n = e.event;
                                                            i.on(t, n)
                                                        }), i.join().receive("ok", function() {
                                                            if (Object(d.l)() && h.shouldRefetchMessagesOnChannelJoin() && t.startsWith(j.b.USER)) {
                                                                var n = Object(v.a)("messages_refetch");
                                                                Object(g.o)({
                                                                    data: ["Joined user channel ".concat(t, " after disconnect and user interacted with active conversation"), "Is_mobile_".concat(Object(O.c)(!0)), "Close Code: ".concat(h.closeCode), "Has Refetch Gate: ".concat(n), "Is Join After Connection Lost: ".concat(h.isJoinAfterConnectionLost)],
                                                                    internal: !0
                                                                });
                                                                var c = n || 1e3 === h.closeCode;
                                                                l.a.dispatch(Object(b.x)({
                                                                    channel: j.b.USER,
                                                                    shouldRefetchMessagesForActiveConversation: c
                                                                })), h.resetStateOnJoin()
                                                            }
                                                            e({
                                                                channel: i
                                                            })
                                                        }).receive("error", function(e) {
                                                            Object(g.o)({
                                                                data: ["Error connecting to channel: ".concat(t)]
                                                            }), a(e)
                                                        }).receive("timeout", function(e) {
                                                            Object(g.o)({
                                                                data: ["Joining the ".concat(t, " channel timed out. ")]
                                                            })
                                                        });
                                                    case 3:
                                                    case "end":
                                                        return o.stop()
                                                }
                                            }, _callee)
                                        }));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), r.abrupt("return", i);
                                case 3:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2)
                    }));
                    return function JoinChannel(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function _resolveSocketBaseForType(e, t, n) {
                    switch (n) {
                        case j.c.CHAT:
                            return "".concat(Object(m.d)(e));
                        case j.c.USER:
                            return s.a.WS_USER_BASE;
                        case j.c.PRESENCE:
                            return "".concat(t).concat(Object(m.c)(e));
                        case j.c.VISITOR_PRESENCE:
                            return s.a.WS_VISITOR_PRESENCE_BASE;
                        default:
                            return ""
                    }
                }
        },
        yXOZ: function(e, t, n) {
            "use strict";
            var c = n("s8DI"),
                o = n("BA/U"),
                a = n("O94r"),
                i = n.n(a),
                r = n("+Kbs"),
                s = n("yEsl"),
                l = n("hSLT"),
                d = n("nedb"),
                u = n("mZ4K"),
                b = n("UvQv"),
                f = n("fL0f"),
                O = n("Za8o"),
                j = n("Erxq"),
                g = n("tLIi"),
                v = n("hhdZ"),
                m = n("58kB"),
                p = n("lE29"),
                h = n("cwuI"),
                E = n("IJKc"),
                C = n("LwEI"),
                w = n("Hnjx"),
                k = n("SsZN"),
                I = n("vjCh"),
                A = n("ILQF"),
                S = n("xwTo"),
                R = n("+f1A"),
                _ = n("g6eD"),
                y = n("2XY6"),
                D = n("LVcX"),
                L = n("i9gz"),
                N = n("0B8E"),
                M = n("ERkP"),
                T = n.n(M),
                J = n("Tr4L"),
                P = n("uDfI"),
                U = n("ADGC"),
                x = n("MFhO"),
                B = n("4c+F"),
                W = n("1kux"),
                F = (n("3y+j"), "SENDER"),
                H = "MEGAPHONE",
                Z = "THEME_ICON";
            t.a = function WidgetIcon() {
                var e = Object(M.useState)(!1),
                    t = Object(c.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    K = Object(M.useRef)(null);
                Object(O.a)(K, n);
                var V = Object(b.a)(),
                    Q = V.isDisabled,
                    G = V.setIsDisabled,
                    X = Object(P.b)(),
                    z = Object(J.a)().t,
                    Y = Object(P.c)(function(e) {
                        return e.view.chatOpen
                    }),
                    q = Object(P.c)(function(e) {
                        return e.session.gdpr
                    }),
                    $ = Object(P.c)(y.g),
                    ee = !$ && !Y,
                    te = Object(P.c)(function(e) {
                        return !!e.conversations.activeConversation
                    }),
                    ne = Object(C.a)(),
                    ce = Object(d.a)(),
                    oe = Object(P.c)(R.g),
                    ae = Object(P.c)(S.d),
                    ie = Object(P.c)(R.j),
                    re = Object(P.c)(R.n),
                    se = Object(P.c)(function(e) {
                        return e.view.hidePreviewUntilAfterInitialRender
                    }),
                    le = Object(P.c)(function(e) {
                        return Object(D.a)(!1, ["embed", "configuration", "theme"], e)
                    }).unreadBadgeEnabled,
                    de = Object(E.a)(),
                    ue = Object(P.c)(function(e) {
                        return e.view.isChatTakeover
                    }),
                    be = Object(P.c)(function(e) {
                        return e.conversations
                    }).activeConversation,
                    fe = Object(v.a)(be),
                    Oe = Object(g.a)(),
                    je = Object(L.a)(Oe) ? fe : Oe,
                    ge = Object(j.a)(je),
                    ve = Object(p.a)(),
                    me = ve.backgroundStyles,
                    pe = ve.widgetSecondaryColor,
                    he = Object(h.a)(),
                    Ee = he.Icon,
                    Ce = he.customIcon,
                    we = he.hasCustomIcon,
                    ke = Object(u.a)(),
                    Ie = Object(l.a)().type,
                    Ae = ke || Object(D.a)(void 0, ["authorId"], je),
                    Se = Object(m.a)(Ae).recipient,
                    Re = de ? Object(N.a)(de).length : 0,
                    _e = Ie === x.a.SLIDER,
                    ye = Ae && (_e || Re > 0),
                    De = Object(f.a)(["titleNotificationEnabled"]),
                    Le = Object(c.a)(De, 1)[0],
                    Ne = void 0 !== Le && Le,
                    Me = Object(M.useMemo)(function() {
                        return ye ? F : _e && !Ae ? H : Z
                    }, [Ae, _e, ye]),
                    Te = Object(w.a)();
                Object(M.useEffect)(function() {
                    Ne && Object(A.a)({
                        topic: "page-notification-update",
                        message: {
                            totalUnreadMessages: Re,
                            pageTitleNotificationMsg: z("titleNotifier.newMessageNotification")
                        }
                    })
                }, [Re, Ne, z, ee]), Object(M.useEffect)(function() {
                    le && Object(A.a)({
                        topic: "sc::send-total-unread-messages-count",
                        message: {
                            totalUnreadMessages: Re
                        }
                    })
                }, [Re, le]), Object(M.useEffect)(function() {
                    Q && !_e && G(!1)
                }, [Q, _e, G]), Object(M.useEffect)(function() {
                    ee || Object(A.a)({
                        topic: "toggle-widget-controller",
                        message: {
                            isChatTakeover: ue,
                            chatOpen: Y,
                            hasActiveConversation: te && q.hasConsent
                        }
                    })
                }, [Y, q, te, ue, ee]), Object(M.useEffect)(function() {
                    de && de.length > 0 && !ee && Object(W.a)()
                }, [ee, de]), Object(M.useEffect)(function() {
                    Object(A.c)({
                        topic: "CONDUCTOR:focusWidgetIcon",
                        handler: function handler() {
                            return a(!0)
                        }
                    })
                }, []);
                var Je = function onToggleChat() {
                        if (!Y && Re > 0 && ge) {
                            var e = Object(D.a)(null, ["attributes", "playbookId"], ce);
                            if (Object(I.k)(ce.id, e), Object(k.n)(je), Object(k.p)(je), !ae) {
                                var t = ie === re;
                                Object(B.c)("Playbook Clicked", {
                                    campaignId: ce.id,
                                    playbookId: e,
                                    endUserId: oe,
                                    isEndUserFirstVisit: t,
                                    isInEngagementEAP: !1,
                                    clickedElement: "icon"
                                })
                            }
                        }! function toggle(e) {
                            if (_e) Object(A.a)({
                                topic: "slider:showDetails",
                                message: {}
                            }), G(!0);
                            else {
                                var t = !q.hasConsent && !q.declinedConsent;
                                X(Object(_.i)({
                                    chatOpen: e,
                                    gdprDismissed: t
                                }))
                            }
                            e && (Object(A.a)({
                                topic: "reset-controller-size"
                            }), se && X(Object(_.d)(!1)))
                        }(!Y)
                    },
                    Pe = Object(M.useMemo)(function() {
                        return !we || ye || Y ? null : Ce
                    }, [Ce, ye, Y, we]),
                    Ue = Object(M.useMemo)(function() {
                        if (Y) return Se.name !== z("agent") ? "Close chat with ".concat(Se.name, " in the Drift Widget messenger") : "Close Drift Widget messenger";
                        var e = Se.name !== z("agent") ? "Open chat with ".concat(Se.name, " in the Drift Widget messenger") : "Open Drift Widget messenger";
                        return le && Re > 0 ? "".concat(e, " - Unread messages: ").concat(Re) : e
                    }, [Y, Se.name, z, le, Re]);
                return $ ? T.a.createElement(T.a.Fragment, null, T.a.createElement("style", null, "\n          :root {\n            --bgColor:".concat(me.background, ";\n            --bgColorHover:").concat(me.backgroundOnHover, ";\n          }\n        ")), T.a.createElement("div", {
                    className: i()("drift-widget-controller drift-widget-controller--align-".concat(ne), [Te], {
                        "drift-widget-controller--closed": !Object(U.c)() && Y,
                        "drift-widget-controller--custom-icon": we,
                        "drift-widget-controller--avatar": ye,
                        "drift-widget-controller--hide": ue,
                        "drift-widget-controller--disabled": Q
                    }),
                    onClick: Je,
                    "aria-label": Ue,
                    "aria-disabled": Q,
                    "aria-hidden": Q,
                    role: "button",
                    tabIndex: Q ? -1 : 0,
                    onKeyDown: Object(o.a)(Je),
                    ref: K
                }, T.a.createElement("div", {
                    className: i()("drift-widget-controller-icon", [Te], {
                        "drift-widget-controller-icon--default": we && !ye && !Y
                    }),
                    style: Pe
                }, T.a.createElement("div", {
                    className: "drift-controller-icon--active"
                }, Me === H && T.a.createElement(r.p, {
                    fill: pe
                }), Me === F && T.a.createElement(s.a, {
                    className: i()([Te], "drift-controller-icon--avatar"),
                    avatarClassName: i()([Te], "drift-controller-icon--avatar-avatar"),
                    id: Ae
                }), Me === Z && !we && Ee), T.a.createElement("div", {
                    className: "drift-controller-icon--close",
                    style: {
                        backgroundColor: pe
                    }
                })), le && Re > 0 && T.a.createElement("div", {
                    className: "drift-controller-icon-unread"
                }, Math.min(Re, 99)))) : null
            }
        },
        zoZM: function(e, t, n) {}
    }
]);