(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        "+GZi": function(e, t, n) {},
        "+qGC": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return useGetConversationRatingMessage
            }), n.d(t, "a", function() {
                return useGetConversationRatedMessage
            });
            var a = n("da4L"),
                r = n("TbSn"),
                i = n("ERkP"),
                c = n("0lfv");

            function useGetConversationRatingMessage(e) {
                return Object(i.useMemo)(function() {
                    if (e && e.length) {
                        var t = Object(r.a)(e);
                        if (!Object(c.m)(t)) {
                            if (Object(a.l)(t)) return t;
                            if (Object(a.k)(t) && e.length > 1) {
                                var n = e[e.length - 2];
                                if (Object(a.l)(n)) return n
                            }
                        }
                    }
                    return null
                }, [e])
            }

            function useGetConversationRatedMessage(e) {
                return Object(i.useMemo)(function() {
                    if (e && e.length) {
                        var t = Object(r.a)(e);
                        if (!Object(c.m)(t)) {
                            if (Object(a.f)(t)) return t;
                            if (Object(a.k)(t) && e.length > 1) {
                                var n = e[e.length - 2];
                                if (Object(a.f)(n)) return n
                            }
                        }
                    }
                    return null
                }, [e])
            }
        },
        "1b8i": function(e, t, n) {
            "use strict";
            var a = n("s8DI"),
                r = n("da4L"),
                i = n("ERkP");
            t.a = function useTimedMessages(e, t) {
                var n = Object(i.useState)(function() {
                        return e
                    }),
                    c = Object(a.a)(n, 2),
                    o = c[0],
                    s = c[1],
                    l = Object(i.useRef)(t),
                    u = Object(i.useRef)(null);
                return Object(i.useEffect)(function() {
                    if (t) {
                        if (e !== o) {
                            var n = o.length;
                            if (0 === e.length && n > 0) s([]);
                            else {
                                if (l.current !== t || n === e.length) return l.current = t, void s(e);
                                var a = function pushMessage() {
                                        return s(e.slice(0, n + 1))
                                    },
                                    i = e[n] || e[0];
                                if (!(Date.now() - i.createdAt > 5e3 || Object(r.i)(i) || Object(r.j)(i))) return u.current = window.setTimeout(function() {
                                        u.current = null, a()
                                    }, 800),
                                    function() {
                                        u.current && window.clearTimeout(u.current)
                                    };
                                a()
                            }
                        }
                    } else o.length > 0 && s([])
                }, [e, o, t]), o
            }
        },
        "2VrW": function(e, t, n) {},
        "7IKl": function(e, t, n) {
            "use strict";
            var a = n("ERkP"),
                r = n("Tr4L"),
                i = n("uDfI"),
                c = n("F8vJ");
            t.a = function useAgentName(e) {
                var t = Object(i.c)(function(e) {
                        return e.embed.configuration
                    }).team,
                    n = void 0 === t ? [] : t,
                    o = Object(r.a)().t;
                return Object(a.useMemo)(function() {
                    var t = n.find(function(t) {
                        return t.id === e
                    });
                    return t && t.name && !Object(c.a)(t.name) ? t.name : o("agent")
                }, [n, e, o])
            }
        },
        "8eKL": function(e, t, n) {
            "use strict";
            var a = n("mj2O"),
                r = n.n(a),
                i = n("7SM1"),
                c = n("s8DI"),
                o = n("O94r"),
                s = n.n(o),
                l = n("7IKl"),
                u = n("lE29"),
                d = n("ERkP"),
                f = n.n(d),
                m = n("Tr4L"),
                b = n("uDfI"),
                g = (n("I4Wp"), function AgentTypingIndicator() {
                    var e = Object(m.a)().t,
                        t = Object(u.a)().messageAuthorTheme,
                        n = Object(b.c)(function(e) {
                            return e.conversations.typingIndicators[e.conversations.activeConversation] || {}
                        }),
                        a = n.isTyping,
                        r = void 0 !== a && a,
                        i = n.userId,
                        c = Object(l.a)(i);
                    return r ? f.a.createElement("p", {
                        "aria-live": "polite",
                        style: t,
                        className: "agent-typing-indicator"
                    }, e("status.agentTyping", {
                        agent: c
                    })) : null
                }),
                p = n("HXmn"),
                v = n("nfbA"),
                h = n("NJA7"),
                O = n("pYxh"),
                j = n("fw6E"),
                E = n("K7i0"),
                w = n("+oIK"),
                y = n("da4L"),
                C = n("+f1A"),
                A = n("ADGC"),
                k = n("0lfv"),
                S = (n("yAze"), Object(d.lazy)(function() {
                    return Promise.all([n.e(34), n.e(13), n.e(53)]).then(n.bind(null, "RR8A"))
                })),
                N = function AgentRequestedOptions(e) {
                    var t = e.message,
                        n = Object(m.a)().t,
                        a = t.attributes,
                        o = t.id,
                        l = t.conversationId,
                        g = Object(b.b)(),
                        N = Object(b.c)(function(e) {
                            return e.session
                        }).endUser,
                        T = Object(j.a)().conversationHistoryOpen,
                        L = Object(b.c)(function(e) {
                            return e.view
                        }).chatOpen,
                        M = Object(d.useState)(void 0),
                        I = Object(c.a)(M, 2),
                        R = I[0],
                        x = I[1],
                        D = Object(d.useState)(!L),
                        F = Object(c.a)(D, 2),
                        B = F[0],
                        P = F[1],
                        G = Object(d.useState)(!1),
                        U = Object(c.a)(G, 2),
                        _ = U[0],
                        V = U[1],
                        z = Object(b.c)(C.l),
                        H = Object(y.p)(t),
                        K = Object(A.c)(),
                        Z = Object(u.a)().foregroundStyles,
                        Q = function doSendMessage(e) {
                            var n = e.label;
                            return function() {
                                var e = Object(w.a)({
                                    message: n,
                                    activeConversation: l,
                                    authorId: N.id,
                                    attributes: {
                                        buttonClicked: !0,
                                        questionId: t.attributes.questionId,
                                        instanceId: z
                                    }
                                });
                                g(Object(E.p)({
                                    message: e
                                }))
                            }
                        },
                        W = Object(d.useState)(null),
                        X = Object(c.a)(W, 2),
                        q = X[0],
                        Y = X[1],
                        J = {
                            option: function option(e, t) {
                                t.data, t.isDisabled;
                                var n = t.isFocused;
                                return t.isSelected, Object(v.a)(Object(v.a)({}, e), {}, {
                                    backgroundColor: n ? "#0071EB0D" : "white",
                                    color: "black",
                                    fontSize: "14px"
                                })
                            },
                            placeholder: function placeholder(e) {
                                return Object(v.a)(Object(v.a)({}, e), {}, {
                                    fontSize: "14px"
                                })
                            },
                            control: _ && function customControlStyles(e) {
                                return Object(v.a)(Object(v.a)({}, e), {}, {
                                    borderColor: "#d0241b",
                                    borderRadius: "4px",
                                    borderStyle: "solid",
                                    borderWidth: "1px",
                                    boxShadow: "0 0 0 1px #d0241b",
                                    boxSizing: "border-box",
                                    "&:hover": {
                                        borderColor: "#d0241b"
                                    }
                                })
                            },
                            menuPortal: function menuPortal(e) {
                                return Object(v.a)(Object(v.a)({}, e), {}, {
                                    zIndex: 9999
                                })
                            }
                        };
                    Object(d.useLayoutEffect)(function() {
                        var e;

                        function _delayButtons() {
                            return (_delayButtons = Object(i.a)(r.a.mark(function _callee() {
                                return r.a.wrap(function _callee$(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!L || B) {
                                                t.next = 5;
                                                break
                                            }
                                            return e = Object(k.s)(500), t.next = 4, e.promise;
                                        case 4:
                                            P(!0);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }, _callee)
                            }))).apply(this, arguments)
                        }
                        return function delayButtons() {
                                return _delayButtons.apply(this, arguments)
                            }(),
                            function() {
                                return e && e.timeout && clearTimeout(e.timeout)
                            }
                    }, [B, L, t]);
                    var $ = B ? "visible" : "hidden";
                    return H ? f.a.createElement(O.a, {
                        className: "drift-dropdown-card"
                    }, f.a.createElement("div", {
                        className: "drift-dropdown-input-container"
                    }, f.a.createElement(d.Suspense, {
                        fallback: f.a.createElement(p.a, {
                            titleId: "AgentRequestedOptionsDropdown"
                        })
                    }, f.a.createElement(S, {
                        maxMenuHeight: K ? 180 : 280,
                        options: a.buttons,
                        className: "drift-dropdown-input",
                        menuPortalTarget: document.body,
                        menuPosition: "fixed",
                        placeholder: n("composer.dropdownPlaceHolder"),
                        noOptionsMessage: function noOptionsMessage() {
                            return f.a.createElement("div", null, n("composer.noOptionsMessage"))
                        },
                        value: q,
                        onChange: function handleChange(e) {
                            x(void 0), Y(e);
                            var t = a.buttons.find(function(t) {
                                return t.value === e.value
                            });
                            t && x(t)
                        },
                        styles: J,
                        onInputChange: function localFilter(e) {
                            var t = a.buttons.find(function(t) {
                                return t.value.includes(e)
                            });
                            V(!(!e || "" === e || t))
                        }
                    }))), f.a.createElement("button", {
                        style: R && Object(v.a)({}, Z),
                        disabled: T || !R,
                        onClick: R && Q(R),
                        className: s()("drift-dropdown-button", {
                            disabled: !R
                        })
                    }, n("composer.confirmButton"))) : f.a.createElement("ul", {
                        className: "drift-widget-message-group drift-widget-message-group-type--END_USER drift-bot-buttons--set drift-bot-buttons--".concat($)
                    }, a.buttons.map(function(e, t) {
                        return f.a.createElement("li", {
                            className: "drift-widget-button--list-item",
                            "aria-posinset": t + 1,
                            key: "bot-button-".concat(o, "-").concat(t)
                        }, f.a.createElement(h.a, {
                            onClick: Q(e),
                            invertOnHover: !0,
                            disabled: T,
                            "aria-label": "".concat(e.label, " - Reply as a response"),
                            forceFocus: !0
                        }, e.label))
                    }))
                },
                T = n("efbE"),
                L = n("rAc1"),
                M = n("l6A5"),
                I = function urlIdentity(e) {
                    return Object(L.a)(e)
                },
                R = (Object(M.a)(I, function(e) {
                    return T.j.get("/", {
                        params: {
                            url: encodeURI(e)
                        }
                    })
                }), Object(M.a)(I, function(e) {
                    return T.i.get("/", {
                        params: {
                            url: e,
                            iframe: 1,
                            omit_script: 1,
                            media: 1
                        }
                    })
                })),
                x = n("YWhp"),
                D = function Retry(e) {
                    var t = e.height,
                        n = void 0 === t ? 24 : t,
                        a = e.width,
                        r = void 0 === a ? 24 : a;
                    return f.a.createElement(x.a, {
                        className: "drift-default-icon drift-default-icon--retry",
                        width: r,
                        height: n,
                        viewBox: "0 0 28 24"
                    }, f.a.createElement("path", {
                        d: "M27.82 19.074c-0.17 0.085-0.353 0.126-0.53 0.126-0.436 0-0.854-0.244-1.063-0.664l-0.994-2.010c-1.762 4.469-5.996 7.474-11.002 7.474-5.438 0-10.298-3.548-11.82-8.628-0.19-0.635 0.164-1.304 0.792-1.496 0.624-0.193 1.29 0.166 1.48 0.8 1.222 4.076 5.148 6.924 9.548 6.924 4.128 0 7.481-2.436 8.838-6.126l-2.372 1.199c-0.588 0.298-1.3 0.056-1.592-0.536s-0.055-1.313 0.53-1.609l4.748-2.401c0.589-0.296 1.301-0.055 1.594 0.538l2.374 4.8c0.294 0.593 0.055 1.314-0.53 1.61zM25.259 10.126c-0.626 0.191-1.291-0.167-1.481-0.802-1.223-4.076-5.148-6.924-9.547-6.924-4.132 0-7.486 2.437-8.842 6.127l2.375-1.201c0.588-0.296 1.301-0.055 1.592 0.538 0.294 0.593 0.056 1.314-0.53 1.61l-4.748 2.399c-0.17 0.086-0.352 0.127-0.529 0.127-0.437 0-0.856-0.242-1.063-0.662l-2.375-4.801c-0.293-0.593-0.055-1.314 0.532-1.61 0.589-0.296 1.3-0.055 1.592 0.538l0.994 2.008c1.759-4.468 5.994-7.471 11.003-7.471 5.436 0 10.296 3.548 11.819 8.628 0.191 0.635-0.164 1.304-0.791 1.498z"
                    }))
                },
                F = n("YYte"),
                B = n("nQD+"),
                P = n("+Kbs"),
                G = n("fsHk"),
                U = function MessageFooter(e) {
                    var t = e.message,
                        n = e.isLastGroup,
                        a = e.isLastMessage,
                        r = e.delivered,
                        i = e.generated,
                        o = e.messageTimedOut,
                        l = e.deliveryFailed,
                        u = e.resolveMessageHeight,
                        b = Object(m.a)().t,
                        g = Object(d.useState)(!1),
                        v = Object(c.a)(g, 2),
                        h = v[0],
                        O = v[1];
                    if (Object(d.useEffect)(function() {
                            return (o || r) && Object(k.e)(function() {
                                    return O(!1)
                                }, 500), r || l || h || O(!0),
                                function() {
                                    return O(!1)
                                }
                        }, [r, o, h, l]), Object(d.useLayoutEffect)(function() {
                            u()
                        }, [u, r, h, n, a, l]), !r || h) return f.a.createElement("li", {
                        key: "".concat(i, "-message-status"),
                        className: s()("drift-widget-message drift-widget-message--meta-date drift-no-op", {
                            "drift-widget-message-failed-status": l
                        })
                    }, f.a.createElement("span", {
                        "aria-live": l ? "polite" : "off",
                        className: "drift-widget-message--meta-status"
                    }, !h && l ? b("status.sendMessageFailed") : f.a.createElement(p.a, {
                        size: "small",
                        className: "drift-widget-message--meta-status__sending",
                        titleId: "MessageLoading-".concat(t.id)
                    })));
                    if (!n && !r) return f.a.createElement("li", {
                        key: "".concat(i, "-message-status"),
                        className: "drift-widget-message drift-widget-message--meta-date drift-no-op"
                    });
                    if (a && n) {
                        var j = G.a.unixFormatDateTime(r, b("dt.format.time.short"));
                        return f.a.createElement("li", {
                            key: "".concat(t.createdAt, "-message-status"),
                            className: "drift-widget-message--meta-date drift-widget-message"
                        }, f.a.createElement("div", {
                            className: "drift-widget-message--meta-status"
                        }, f.a.createElement(P.j, {
                            className: "drift-widget-message-sent",
                            height: 12,
                            width: 12,
                            title: "Message successfully delivered"
                        }), f.a.createElement("span", {
                            className: "drift-widget-message--meta-date-stamp"
                        }, j)))
                    }
                    return null
                },
                _ = n("QtlZ"),
                V = n("mZ4K"),
                z = n("58kB"),
                H = n("g6eD"),
                K = n("LVcX"),
                Z = n("mfas"),
                Q = n("PjZB"),
                W = n("8ZCy"),
                X = 60;

            function process(e) {
                var t = null,
                    n = null,
                    a = !1,
                    r = e.getAttribute("data-giffer-alt"),
                    i = document.createElement("canvas"),
                    c = e.getAttribute("data-giffer-duration"),
                    o = e.getAttribute("data-giffer");
                e.style.display = "block", e.onload = function() {
                    if (i.getContext && i.getContext("2d")) {
                        var s = e.width,
                            l = e.height,
                            u = function createContainer(e, t) {
                                var n = document.createElement("button"),
                                    a = e.getAttribute("class"),
                                    r = e.getAttribute("id"),
                                    i = ["width:" + X + "px", "height:" + X + "px", "border-radius:" + X / 2 + "px", "background:rgba(0, 0, 0, 0.3)", "position:absolute", "top:50%", "left:50%", "margin:-" + X / 2 + "px"].join(";"),
                                    c = ["width: 0", "height: 0", "border-top: 14px solid transparent", "border-bottom: 14px solid transparent", "border-left: 14px solid rgba(0, 0, 0, 0.5)", "position: absolute", "left: 26px", "top: 16px"].join(";");
                                a && n.setAttribute("class", e.getAttribute("class")), r && n.setAttribute("id", e.getAttribute("id")), n.setAttribute("style", "position: relative; cursor: pointer; background: none; border: none; padding: 0;"), n.setAttribute("aria-label", "Play or pause GIF animation for ".concat(t));
                                var o = document.createElement("div");
                                o.setAttribute("class", "giffer-play-button"), o.setAttribute("style", i);
                                var s = document.createElement("div");
                                return s.setAttribute("style", c), o.appendChild(s), n.appendChild(o), e.parentNode.replaceChild(n, e), {
                                    c: n,
                                    p: o
                                }
                            }(e, r),
                            d = u.c,
                            f = u.p,
                            m = function calculatePercentageDim(e, t, n, a, r) {
                                var i = e.parentNode.offsetWidth,
                                    c = a / r;
                                return t.toString().indexOf("%") > 0 ? n = (t = (t = parseInt(t.toString().replace("%", ""))) / 100 * i) / c : n.toString().indexOf("%") > 0 && (t = (n = (n = parseInt(n.toString().replace("%", ""))) / 100 * i) * c), {
                                    w: t,
                                    h: n
                                }
                            }(d, s, l, e.width, e.height);
                        d.addEventListener("click", function() {
                            clearTimeout(t), a ? (a = !1, d.appendChild(f), d.removeChild(n), d.appendChild(i), n = null) : (a = !0, (n = document.createElement("img")).setAttribute("style", "width:100%;height:100%;"), n.setAttribute("data-uri", "".concat(Math.floor(1e5 * Math.random()) + 1)), setTimeout(function() {
                                n.src = o
                            }, 0), d.removeChild(f), d.removeChild(i), d.appendChild(n), parseInt(c) > 0 && (t = setTimeout(function() {
                                a = !1, d.appendChild(f), d.removeChild(n), d.appendChild(i), n = null
                            }, c)))
                        }), i.width = m.w, i.height = m.h, i.getContext("2d").drawImage(e, 0, 0, m.w, m.h), d.appendChild(i), d.setAttribute("style", "position:relative;cursor:pointer;width:" + m.w + "px;height:" + m.h + "px;background:none;border:none;padding:0;"), i.style.width = W.j, i.style.height = W.j, s.toString().indexOf("%") > 0 && l.toString().indexOf("%") > 0 ? (d.style.width = s, d.style.height = l) : s.toString().indexOf("%") > 0 ? (d.style.width = s, d.style.height = "inherit") : l.toString().indexOf("%") > 0 ? (d.style.width = "inherit", d.style.height = l) : (d.style.width = m.w + "px", d.style.height = m.h + "px")
                    }
                }, e.src = o
            }
            var q = n("EQxi"),
                Y = function LazyCard(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.a;
                    return function(n) {
                        return f.a.createElement(d.Suspense, {
                            fallback: f.a.createElement(t, {
                                titleId: "LazyCardLoadingFallback"
                            })
                        }, f.a.createElement(e, n))
                    }
                },
                J = function() {
                    return f.a.createElement("div", {
                        className: "drift-widget-message--box--loader"
                    }, f.a.createElement(p.a, {
                        titleId: "Loading"
                    }))
                },
                $ = n("q+cq"),
                ee = (n("CHQR"), function DefaultMessage(e) {
                    var t = e.body;
                    return f.a.createElement("div", {
                        className: "drift-widget-message--box drift-widget-message--STRING"
                    }, t)
                }),
                te = {
                    BOT: Y(Object(d.lazy)(function() {
                        return n.e(36).then(n.bind(null, "qfyu"))
                    }), J),
                    CONVO_RATING: Y(Object(d.lazy)(function() {
                        return n.e(45).then(n.bind(null, "6lGB"))
                    }), J),
                    EMAIL_CAPTURE: Y(Object(d.lazy)(function() {
                        return n.e(31).then(n.bind(null, "ZJQa"))
                    }), J),
                    HTML: Y(Object(d.lazy)(function() {
                        return n.e(4).then(n.bind(null, "9Xg1"))
                    }), J),
                    LEGACY: Y(Object(d.lazy)(function() {
                        return n.e(4).then(n.bind(null, "9Xg1"))
                    }), J),
                    MEETING: Y(Object(d.lazy)(function() {
                        return Promise.all([n.e(41), n.e(35)]).then(n.bind(null, "c+1e"))
                    }), function() {
                        return f.a.createElement($.a, {
                            loadingFrame: !0
                        }, f.a.createElement(p.a, {
                            titleId: "MeetingLoader"
                        }))
                    }),
                    SMS_CAPTURE: Y(Object(d.lazy)(function() {
                        return n.e(46).then(n.bind(null, "vYZB"))
                    }), J),
                    SMS_SUCCESS: Y(Object(d.lazy)(function() {
                        return n.e(47).then(n.bind(null, "oqPC"))
                    }), J),
                    STRING: ee
                },
                ne = n("UXBQ"),
                ae = n("vDqi"),
                re = n.n(ae),
                ie = n("nJ3u"),
                ce = n("z24s"),
                oe = function FileAttachmentMessage(e) {
                    var t = e.attachment,
                        n = void 0 === t ? {} : t,
                        a = e.multi,
                        r = e.senderType,
                        i = void 0 === r ? Q.d.END_USER : r,
                        c = Object(u.a)(),
                        o = c.activeColor,
                        l = c.agentIconTheme,
                        m = c.buttonStyles,
                        b = c.svgStyles,
                        g = Object(d.useRef)(null),
                        p = Object(ce.a)(g);
                    if (!n.fileName) return null;
                    var v = i === Q.d.END_USER ? b : l;
                    return f.a.createElement("a", {
                        href: n.publicUrl,
                        target: "_blank",
                        rel: "nofollow noopener noreferrer",
                        className: s()("drift-widget-message--file", {
                            "keyboard-focused": p
                        }),
                        style: a ? m : {},
                        "aria-label": "Download file: ".concat(n.fileName),
                        ref: g
                    }, f.a.createElement("style", null, "\n          .drift-widget-message--file.keyboard-focused {\n            ".concat(Object(ie.a)(o, !1), "\n          }\n        ")), f.a.createElement(P.m, {
                        fill: v.fill,
                        width: 16,
                        height: 16
                    }), f.a.createElement("span", {
                        className: "drift-widget-attachment--filename",
                        title: n.fileName
                    }, n.fileName))
                },
                se = function ImageAttachmentMessage(e) {
                    var t = e.attachment,
                        n = void 0 === t ? {} : t,
                        a = e.resolveMessageHeight,
                        r = void 0 === a ? function() {} : a,
                        i = Object(d.useState)(!1),
                        o = Object(c.a)(i, 2),
                        l = o[0],
                        m = o[1],
                        b = Object(u.a)().activeColor,
                        g = Object(d.useRef)(null),
                        p = Object(ce.a)(g);
                    return f.a.createElement("a", {
                        href: n.publicUrl,
                        className: s()("drift-widget-attachment--img", {
                            "keyboard-focused": p
                        }),
                        target: "_blank",
                        ref: g,
                        rel: "nofollow noopener noreferrer",
                        "aria-label": "Download image: ".concat(n.fileName)
                    }, f.a.createElement("style", null, "\n          .drift-widget-attachment--img.keyboard-focused {\n            ".concat(Object(ie.a)(b, !1), "\n          }\n        ")), f.a.createElement("img", {
                        src: n.publicUrl,
                        alt: n.fileName,
                        onLoad: function onLoad() {
                            !l && r(), !l && m(!0)
                        }
                    }))
                },
                le = (n("Qp3a"), function AttachmentMessage(e) {
                    var t = e.attachmentIds,
                        n = void 0 === t ? [] : t,
                        a = e.resolveMessageHeight,
                        c = e.sentFrom,
                        o = void 0 === c ? Q.d.END_USER : c,
                        l = Object(b.b)(),
                        m = Object(b.c)(function(e) {
                            return e.conversations.attachments
                        }),
                        g = re.a.CancelToken.source(),
                        p = Object(u.a)(),
                        v = p.agentMessageTheme,
                        h = p.endUserMessageTheme,
                        O = o === Q.d.END_USER ? h : v;
                    Object(d.useEffect)(function() {
                        var e = n.filter(function(e) {
                                return !m[e]
                            }),
                            t = function() {
                                var t = Object(i.a)(r.a.mark(function _callee() {
                                    var t, n;
                                    return r.a.wrap(function _callee$(a) {
                                        for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                return a.prev = 0, a.next = 3, Object(ne.a)(e, g.token);
                                            case 3:
                                                t = a.sent, n = t.data, l(Object(E.f)({
                                                    attachments: n
                                                })), a.next = 10;
                                                break;
                                            case 8:
                                                a.prev = 8, a.t0 = a.catch(0);
                                            case 10:
                                            case "end":
                                                return a.stop()
                                        }
                                    }, _callee, null, [
                                        [0, 8]
                                    ])
                                }));
                                return function fetchAttachmentsForMessage() {
                                    return t.apply(this, arguments)
                                }
                            }();
                        return e.length && t(),
                            function() {
                                g.cancel()
                            }
                    }, [m, n, g, l]);
                    var j = Object(d.useMemo)(function() {
                        return n && n.map(function(e) {
                            return m[e] ? function isImage(e) {
                                var t = e.mimeType;
                                return /image/.test(t) && "image/svg+xml" !== t
                            }(m[e]) ? f.a.createElement(se, {
                                attachment: m[e],
                                key: "drift-widget-attachment--".concat(e),
                                resolveMessageHeight: a
                            }) : f.a.createElement(oe, {
                                multi: n.length > 1,
                                attachment: m[e],
                                key: "drift-widget-attachment--".concat(e),
                                senderType: o
                            }) : null
                        })
                    }, [n, m, a, o]);
                    return f.a.createElement("div", {
                        style: O,
                        className: s()("drift-widget-attachment drift-widget-message--box", {
                            "drift-widget-attachment--multi": n && n.length > 1
                        })
                    }, j)
                }),
                ue = (n("mQ2C"), function UnfurlMessage(e) {
                    var t = e.unfurlData,
                        n = e.style,
                        a = void 0 === n ? {} : n,
                        r = e.resolveMessageHeight,
                        i = void 0 === r ? function() {} : r,
                        c = e.sender,
                        o = t.html,
                        l = t.meta,
                        u = void 0 === l ? {} : l,
                        m = t.links,
                        g = void 0 === m ? {} : m,
                        p = t.url,
                        v = void 0 === p ? "" : p,
                        h = t.rel,
                        O = void 0 === h ? [] : h,
                        j = Object(b.b)();
                    Object(d.useLayoutEffect)(function() {
                        i(), j(Object(H.a)(!0))
                    }, [i, o, j]);
                    var E = !!v && !!u.title,
                        w = !!u.description || !!u.site,
                        y = E && w,
                        C = Object(K.a)(null, ["thumbnail", 0], g),
                        A = Object(K.a)(v, ["site"], u),
                        k = "player" === O[0],
                        S = !k && C;
                    return Object(d.useMemo)(function() {
                        return S || k || y
                    }, [S, k, y]) ? f.a.createElement("li", {
                        className: "drift-widget-message drift-widget-message--unfurl drift-widget-message-sender--".concat(c)
                    }, f.a.createElement("div", {
                        className: s()("drift-widget-message--box drift-widget-message--unfurl-container"),
                        style: a
                    }, k && f.a.createElement("div", {
                        className: "drift-widget-message--unfurl-video",
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }), S && f.a.createElement("div", {
                        className: "drift-widget-message--unfurl-image"
                    }, f.a.createElement("a", {
                        href: v,
                        target: "_blank",
                        rel: "nofollow noopener noreferrer",
                        "aria-label": "Go to ".concat(v)
                    }, f.a.createElement("img", {
                        alt: "".concat(A, " - thumbnail"),
                        src: C.href,
                        onLoad: function onLoad() {
                            j(Object(H.a)(!0))
                        }
                    }))), y && f.a.createElement("div", {
                        className: "drift-widget-message--unfurl_meta"
                    }, u.title && f.a.createElement("h3", {
                        className: "drift-widget-message--unfurl_title"
                    }, f.a.createElement("a", {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: v,
                        title: u.title
                    }, u.title)), u.description && f.a.createElement("p", {
                        className: "drift-widget-message--unfurl_description"
                    }, u.description), u.site && f.a.createElement("p", {
                        className: "drift-widget-message--unfurl_site"
                    }, u.site)))) : null
                }),
                de = (n("ZP32"), function MessageSentTimestamp(e) {
                    var t = e.sender,
                        n = e.deliveredAt,
                        a = Object(m.a)().t;
                    return f.a.createElement("span", {
                        "aria-hidden": "true",
                        className: "drift-widget-message-timestamp drift-widget-message-timestamp--".concat(t)
                    }, G.a.unixFormatDateTime(n, a("dt.format.time.short")))
                }),
                fe = function MessageComponent(e) {
                    var t, n = e.message,
                        a = e.nextMessage,
                        r = e.isLastGroup,
                        i = e.isLastMessage,
                        o = e.resolveMessageHeight,
                        l = Object(d.useState)([]),
                        m = Object(c.a)(l, 2),
                        g = m[0],
                        p = m[1],
                        h = Object(d.useState)(null),
                        O = Object(c.a)(h, 2),
                        j = O[0],
                        w = O[1],
                        C = Object(b.b)(),
                        A = Object(d.useRef)(),
                        S = Object(V.a)(),
                        N = Object(z.a)(S).recipient,
                        T = Object(k.n)(),
                        L = Object(b.c)(function(e) {
                            return Object(K.a)(!1, ["embed", "configuration", "theme", "showUnfurl"], e)
                        }),
                        M = Object(u.a)(),
                        I = M.borderStyles,
                        x = M.endUserMessageTheme,
                        P = M.agentMessageTheme,
                        W = function resolveMessageComponent(e) {
                            var t = e.attributes,
                                n = t.isBot,
                                a = void 0 !== n && n,
                                r = t.show_email_capture_card,
                                i = t.conversationRating;
                            return r ? te.EMAIL_CAPTURE : Object(y.j)(e) ? te.MEETING : a ? te.BOT : i ? te.CONVO_RATING : Object(y.m)(e) ? te.SMS_CAPTURE : Object(y.n)(e) ? te.SMS_SUCCESS : te.HTML
                        }(n),
                        X = Object(y.i)(n) ? Q.d.END_USER : Q.d.AGENT;
                    Object(d.useEffect)(function() {
                        ! function processGifsForAnimationControl(e) {
                            if (e)
                                for (var t = e.querySelectorAll("[data-giffer]"), n = 0; n < t.length; ++n) process(t[n])
                        }(null === A || void 0 === A ? void 0 : A.current)
                    }, [A]), Object(d.useEffect)(function() {
                        if (!Object(y.d)(n, "instantMeeting")) {
                            var e = Object(q.a)(n.body);
                            e.length && p(e)
                        }
                    }, [n]), Object(d.useEffect)(function() {
                        if (g.length > 0) {
                            var e = document.createElement("textarea");
                            e.innerHTML = g[0], R(e.value.replace("#61;", "")).then(function(e) {
                                var t = e.data;
                                w(Object(v.a)(Object(v.a)({}, t), {}, {
                                    url: g[0]
                                }))
                            }).catch(function(e) {
                                return Object(k.o)({
                                    data: ["Failed to unfurl url: ".concat(g[0]), e]
                                })
                            })
                        }
                    }, [g]), Object(d.useLayoutEffect)(function() {
                        o(), _.a.dispatch(Object(H.a)(!0))
                    }, [o, r]);
                    var Y = !!n.attributes.appointmentInfo || !!n.attributes.conversationRating || n.type === Q.e.EMAIL_CAPTURE_CARD || n.contentType === Q.c.SMS_NUMBER_REQUESTED || n.contentType === Q.c.SMS_NUMBER_SUCCESS,
                        J = !!n.body || Y,
                        $ = L && j,
                        ee = n.attachments && n.attachments.length > 0;
                    if (!J && !$ && !ee) return null;
                    var ne = Object(K.a)(null, ["createdAt"])(n),
                        ae = Object(K.a)(null, ["attributes", "generatedAt"])(n),
                        re = Object(K.a)(!1, ["failedToSend"])(n),
                        ie = !ne && G.a.isTimeAfterSeconds(G.a.getCurrentTimeEpoch(), ae, 30),
                        ce = !ne && re,
                        oe = X === Q.d.END_USER ? "Sent by: You" : "Sent by: ".concat(N.name);
                    return f.a.createElement(f.a.Fragment, null, J && f.a.createElement("li", {
                        role: T ? "none" : "gridcell",
                        tabIndex: T ? -1 : 0,
                        className: s()("drift-widget-message drift-widget-message-sender--".concat(X), {
                            "drift-widget-message-failed": ce
                        }),
                        ref: A
                    }, f.a.createElement(W, Object.assign({}, n, {
                        isLastGroup: r,
                        isLastMessage: i,
                        nextMessage: a,
                        resolveMessageHeight: o,
                        style: X === Q.d.END_USER ? x : P
                    })), f.a.createElement(F.a, {
                        content: oe
                    }), !Y && ne && f.a.createElement(de, {
                        sender: X,
                        deliveredAt: ne
                    }), ce && f.a.createElement(B.a, {
                        "aria-label": 'Retry uploading message "'.concat(null !== (t = null === n || void 0 === n ? void 0 : n.body) && void 0 !== t ? t : "", '"'),
                        onClick: function doSendMessage() {
                            C(Object(E.p)({
                                message: Object(v.a)(Object(v.a)({}, Object(Z.a)(["failedToSend"], n)), {}, {
                                    attributes: Object(v.a)(Object(v.a)({}, n.attributes), {}, {
                                        generatedAt: (new Date).valueOf()
                                    })
                                })
                            }))
                        }
                    }, f.a.createElement(D, {
                        height: 12,
                        width: 12
                    }))), $ && f.a.createElement(ue, {
                        unfurlData: j,
                        resolveMessageHeight: o,
                        style: X === Q.d.END_USER ? Object(v.a)({}, I) : {},
                        sender: X
                    }), ee && f.a.createElement("li", {
                        className: "drift-widget-message drift-widget-message-sender--".concat(X)
                    }, f.a.createElement(le, {
                        attachmentIds: n.attachments,
                        resolveMessageHeight: o,
                        sentFrom: X
                    }), f.a.createElement(de, {
                        sender: X,
                        deliveredAt: ne
                    })), f.a.createElement(U, {
                        message: n,
                        isLastGroup: r,
                        isLastMessage: i,
                        delivered: ne,
                        generated: ae,
                        messageTimedOut: ie,
                        deliveryFailed: ce,
                        resolveMessageHeight: o
                    }))
                },
                me = n("yEsl"),
                be = (n("UwV1"), function getAvatarPositionClassName(e) {
                    var t = Object(y.j)(e),
                        n = e.attributes.show_email_capture_card;
                    return "message-group-avatar-".concat(void 0 !== n && n || t ? "top" : "bottom")
                }),
                ge = function MessageGroupHeader(e) {
                    var t = e.senderType,
                        n = e.senderId,
                        a = Object(l.a)(n),
                        r = Object(u.a)().messageAuthorTheme;
                    return t !== Q.d.AGENT ? null : f.a.createElement("li", {
                        className: "drift-widget-message-sender"
                    }, f.a.createElement("span", {
                        className: "drift-widget-message--meta-author",
                        style: r
                    }, a))
                },
                pe = function MessageGroup(e) {
                    var t = e.messages,
                        n = void 0 === t ? [] : t,
                        a = e.isLastGroup,
                        r = void 0 !== a && a,
                        i = e.showTimestamp,
                        o = void 0 !== i && i,
                        l = e.resolveMessageHeight,
                        b = void 0 === l ? function() {} : l,
                        g = Object(m.a)().t,
                        p = Object(u.a)().messageTimestampTheme;
                    Object(d.useLayoutEffect)(function() {
                        b()
                    }, [b, r, o]);
                    var v = Object(c.a)(n, 1)[0],
                        h = Object(y.i)(v) ? Q.d.END_USER : Q.d.AGENT,
                        O = v.authorId,
                        j = n[n.length - 1],
                        E = r && Object(y.d)(j, "buttons");
                    return f.a.createElement("div", {
                        className: s()("drift-widget-message-group-wrapper", {
                            "drift-widget-message-group-wrapper--last": r
                        })
                    }, o && f.a.createElement("p", {
                        className: "drift-widget-message-group-timestamp",
                        style: p
                    }, function formatTimestamp(e, t) {
                        return e > 0 ? G.a.isTimeSame(e, "date") ? "".concat(t("dt.today"), " ").concat(G.a.unixFormatDateTime(e, t("dt.format.time.short"))) : G.a.unixFormatDateTime(e, t("dt.format.datetime.short")) : ""
                    }(n[0].createdAt, g)), f.a.createElement("ul", {
                        className: "drift-widget-message-group drift-widget-message-group-type--".concat(h)
                    }, f.a.createElement(ge, {
                        senderType: h,
                        senderId: O
                    }), n.map(function(e, t) {
                        var a = t === n.length - 1,
                            i = n[t - 1],
                            c = a ? null : n[t + 1];
                        return i && i.id === e.id ? null : f.a.createElement(d.Fragment, {
                            key: e.attributes.generatedAt || e.id || e.attributes.widgetGuid
                        }, a && h === Q.d.AGENT && f.a.createElement("li", {
                            className: s()("drift-widget-message-group-avatar", be(e))
                        }, f.a.createElement(me.a, {
                            id: O,
                            size: "SMALL"
                        })), f.a.createElement(fe, {
                            resolveMessageHeight: b,
                            message: e,
                            nextMessage: c,
                            isLastMessage: a,
                            isLastGroup: r
                        }))
                    })), E && f.a.createElement(N, {
                        message: j
                    }))
                },
                ve = n("gRD2"),
                he = n("fJrp"),
                Oe = n("7VeV"),
                je = function useScroll(e, t) {
                    var n = Object(d.useRef)(),
                        a = Object(d.useMemo)(function() {
                            return Object(Oe.throttle)(250, !1, function(e) {
                                n.current && n.current(e)
                            })
                        }, [n]);
                    Object(d.useEffect)(function() {
                        n.current = e
                    }, [e]), Object(d.useEffect)(function() {
                        var e = t.current;
                        if (e) return e.addEventListener("scroll", a),
                            function() {
                                e && e.removeEventListener("scroll", a)
                            }
                    }, [t, a])
                },
                Ee = n("qixE"),
                we = n("xwTo"),
                ye = n("TbSn"),
                Ce = n("XuDI"),
                Ae = (n("P6Di"), function shouldShowTimestamp(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (!e && !n) return !1;
                    if (!e) return !0;
                    var a = e ? e[e.length - 1].createdAt : 0;
                    return G.a.isTimeAfterHours(t[0].createdAt, a, 2)
                }),
                ke = function setScrollTop(e, t, n) {
                    if (e.scrollTop !== t) {
                        var a = e.style;
                        n && (a["-webkit-overflow-scrolling"] = "auto", a.overflow = "hidden"), e.scrollTop = t, n && (a.overflow = "scroll", a["-webkit-overflow-scrolling"] = "touch")
                    }
                };
            t.a = function MessageGroupList(e) {
                var t = e.reflowHidden,
                    n = e.messageGroups,
                    a = e.messages,
                    o = e.disabled,
                    l = void 0 !== o && o,
                    m = e.inheritBackgroundStyle,
                    v = void 0 !== m && m,
                    h = e.showTimestampForFirstGroup,
                    O = void 0 === h || h,
                    j = Object(b.b)(),
                    E = Object(u.a)().widgetBackgroundStyles,
                    w = Object(b.c)(we.a),
                    C = Object(ve.a)().fetchMessages,
                    S = Object(b.c)(function(e) {
                        return e.view
                    }),
                    N = S.chatOpen,
                    T = S.shouldAutoScrollChatToBottom,
                    L = Object(b.c)(function(e) {
                        return Object(K.a)({}, ["conversations", "conversations", w], e)
                    }),
                    M = L.hasMoreMessages,
                    I = L.nextPageMessageId,
                    R = Object(A.c)(),
                    x = Object(k.n)(),
                    D = Object(d.useState)(!0),
                    F = Object(c.a)(D, 2),
                    B = F[0],
                    P = F[1],
                    G = Object(d.useState)(!1),
                    U = Object(c.a)(G, 2),
                    _ = U[0],
                    V = U[1],
                    z = Object(d.useState)(!1),
                    W = Object(c.a)(z, 2),
                    X = W[0],
                    q = W[1],
                    Y = Object(d.useState)(!1),
                    J = Object(c.a)(Y, 2),
                    $ = J[0],
                    ee = J[1],
                    te = Object(d.useRef)(null),
                    ne = Object(d.useRef)(0),
                    ae = Object(d.useRef)(!1),
                    re = Object(d.useMemo)(function() {
                        return Object(ye.a)(a)
                    }, [a]),
                    ie = Object(he.a)(re),
                    ce = !!ie && re !== ie,
                    oe = n.length,
                    se = !_ && M && N,
                    le = Object(d.useMemo)(function() {
                        return n.map(function(e, t) {
                            var a = t === n.length - 1,
                                r = t > 0 ? n[t - 1] : null,
                                i = e[0].attributes.widgetGuid || e[0].id;
                            return f.a.createElement(f.a.Fragment, {
                                key: "messageGroup-".concat(i)
                            }, f.a.createElement(pe, {
                                role: "row",
                                messages: e,
                                isLastGroup: a,
                                showTimestamp: Ae(r, e, O)
                            }), a && f.a.createElement(g, null))
                        })
                    }, [n, O]),
                    ue = Object(d.useCallback)(function() {
                        var e = Object(i.a)(r.a.mark(function _callee(e) {
                            return r.a.wrap(function _callee$(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return V(!0), q(!0), t.next = 4, C({
                                            from: e
                                        });
                                    case 4:
                                        ee(!0), V(!1), Object(k.e)(function() {
                                            return q(!1)
                                        }, 1e3);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }, _callee)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [C]),
                    de = Object(d.useCallback)(function(e) {
                        e.target.scrollTop <= 200 && se && !$ && ue(I)
                    }, [ue, I, se, $]),
                    fe = v ? {} : E;
                je(de, te), Object(d.useLayoutEffect)(function() {
                    if (!(oe < 1)) {
                        if (!N || _ || t) !N && ce && (ae.current = !0);
                        else {
                            var e = Object(K.a)(0, ["current", "scrollHeight"], te),
                                n = ne.current,
                                a = ce || B || ae.current || T;
                            te.current && (a ? (ke(te.current, e, R), ae.current = !1) : $ && ke(te.current, e - n, R)), (a || $) && (ne.current = e), P(!1), ee(!1)
                        }
                        T && j(Object(H.a)(!1))
                    }
                }, [oe, N, B, _, ce, $, t, R, n, T, j]), Object(d.useEffect)(function() {
                    ee(!1), P(!0)
                }, [w]), Object(d.useEffect)(function() {
                    re && N && re.viewerRecipientStatus !== Q.f.READ && !Object(y.i)(re) && Object(Ee.d)(w)
                }, [re, w, N]);
                return f.a.createElement("div", {
                    className: "drift-widget-message-group-list-container",
                    "aria-hidden": l
                }, f.a.createElement("div", {
                    style: fe,
                    className: s()("drift-widget-message-group-list-loader", {
                        "drift-widget-message-group-list-loader--loading": X
                    })
                }, f.a.createElement(p.a, {
                    visible: X,
                    titleId: "MessageGroupListLoading"
                })), f.a.createElement(Ce.Scrollbars, {
                    ref: function setScrollContainerRef(e) {
                        e && te && (te.current = e.view)
                    },
                    hideTracksWhenNotNeeded: !0,
                    renderView: function renderScrollbarsView(e) {
                        var n = Object(Z.a)(["WebkitOverflowScrolling"], e.style);
                        return f.a.createElement("div", Object.assign({}, e, {
                            style: n,
                            className: s()("drift-widget-message-group-list", {
                                "drift-widget-message-group-list--hidden": t
                            })
                        }))
                    }
                }, f.a.createElement("div", {
                    role: x ? "none" : "grid",
                    tabIndex: x ? -1 : 0,
                    "aria-label": "Messages from the conversation"
                }, le)))
            }
        },
        "97O6": function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWCAYAAACFbNPBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABa9JREFUeNrsWy1z40gQla8EDAwEDAQCDAIMAgwCDA0XBgYGBu5PyM84aLgw8KDBAoMDBgsEAgQEBAQEBARclZ2uepPrne2WRrbls7PqKpWc0UxPz0y//pIyen9/Dwa6LhqNRjNzmwmPcnOl5kzrYZdOQ+GwBVcDirG5LXGNG7rWpu/O3DcuUEz7ytxW7gDT76WtjzYXAdJcW8MjFWR+EoBMAF4ra3wRmmkdG/Psq/kdac8Vfg/mtpAMiRnzt88C/xpU7yrAEZvbMxR33NLdAukZ4/okmmturicz1yNA3Be9Ku0rM2+keNlFR14DQK4UHE+K9Wwi6v94RlHnfc4HD5Uojx8826zHyQeAfJ6w6tHDa2jhz7czizwzMi969iK1Mu/cCRMjJbTa9JKDSG7M0N5MWDn9iOeUHWpl+hTs2UQZF6HvnrVNIGMFfpq8ltdEUhQeiyvr+FgLm1Pl0WVvWtb8sT6+bkZL5aBJli1ZVLKGmN+GFDM8X3exlB6UCh4qUmTe9eRFKL96VTzVF/MshZ6sjg2tDknSF4pyECoTduALl69pr3CYpDB3aP7OnhOgqP3NXBkbeocFU9/bhjBj1yJjwpRFs3Al+IjzGB6Z4fHWdW+wJlpHaP7eWqBBqRdQ5n8VvksFHL8ov/ltZd8ZvkskwvmJlXMteLdnYa96zXtI1wCEmQDYZSBX9zqHVodWsSocuCVSphiKUDNFIcAU4B9D6DkUocCYqfUs8Dh2czN2AHQVZF3N3y4YXLms98hx2fXRvHMzvmBWmvf5sPgK6EiGG7pIhgaQuDxv2XoSgGTO+N7avZK8B5JMKbT6p+mgzbPtOWIpWPNdh4rXqUOtZ2F/NFnSrqHVoQDZw1rZQ3wDKCLwCq3bZ0qXQtljeIoMijMFWDhAJtQXVta2Fc7BlIq15uEQlzEDQCfwEr/1URSAP6cw5h4gyZRwy503tyAgQ0AApTUh6R5DnqxBDs0SJk6s3aagaln1RFWsQ/KUlyPBWRoepPBfPHOx10PnOvY9CB8/gfC5Yl1JMSZQlg8AADQhlDdCuwXR3uUHyypVODSaCB4iEviULaDJ4AHGSqIYO7lIBABUTLGXAE0Y/PcOoQvll/ISsKGMehb5yFMiMZ+1dN20GcNTAmTMFCtk8WbeUoasBcDMAI4pU6B7KFoBxc49LWuqKKpNgksnQZYSzJR5GNF7dtiniAExpBAKYaINtYh+KIl50GEfzwkIX6ufnDnU+triPY8KOTsDxFHQGiEVxaN7mzsIVi5ylCwHHwuQCjwKgO5GCq9gOXxjSQuOTLDUaYvXkWjqYd1TVqy4gww3dn54z0AArC/FweXT9lwTsVBrderQ6lCA0MFqJbwCSnSLqpEFTMhAVbAEr2IHnrHnFiA1S+K7hiEpqxJFx26S4XUDuWpPd73HAR3zZrlWPHjMwk4C3sYzUT2LRfeoFNVKZBB4hEsSSDbIxX6rbB4TWp0qB+GC2no8KdK9+V2Cv03g3Y/obEzPgWPzk7HkPaCsUtz7pliXBHMsqOLCQppYeHdR8QoVm8d6Ihr7o8m6C6Fd0BK2NSbXSjslpmuWe6XO/vwfAClRXUs8Ddj6yDDubOFo2HETqhaQJCwBj9m4TPAGBZ6VTiyeYbxrZdpCkj341Q5oQyZP5qGwlfB3hTXUDXvjjtkrVarSYy1W9lLwgJS7PZjnr4KC9fktVKq05Z7AuEryBkhDaCVVlFKPfqRAO6E9C359WWjb3zymb+XXtg7PeQ7am659ET5J3xQtUCxJmEGImUfuI95fB38gDZ+7XzARmPBmPFYqZctLrnx9Bho+Vrx8WjcktT7g2AxbOADkM3uRGiDpGucTqE79weIQYg10sSD5xt5ezwL9K1/K/xIl1yk98kOfPl1A6tPWVAjwqQIeOq6VRsP/pF8vOZ/L5MP/ovewxwNABhpIp58CDAChjQWETVMlnAAAAABJRU5ErkJggg=="
        },
        "9wXn": function(e, t, n) {},
        Adtm: function(e, t, n) {},
        "BA/U": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = function onKeyDownSubmit(e) {
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
        BNKP: function(e, t, n) {},
        BY8A: function(e, t, n) {
            "use strict";
            var a = n("s8DI"),
                r = n("QtlZ"),
                i = n("Hvhg"),
                c = n("ERkP"),
                o = n.n(c),
                s = n("rTkt");
            n("zoZM");
            t.a = function ThemeStyleSheets() {
                var e = Object(c.useState)(!1),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    l = t[1],
                    u = Object(i.b)(Object(r.b)());
                return Object(c.useEffect)(function() {
                    n || (Object(s.a)(u), Object(s.b)(u), l(!0))
                }, [u, n]), o.a.createElement("div", {
                    className: "drift-widget-preload-fonts",
                    "aria-hidden": "true"
                }, o.a.createElement("span", null, "A"), o.a.createElement("strong", null, "B"))
            }
        },
        CHQR: function(e, t, n) {},
        CwrG: function(e, t, n) {
            "use strict";
            var a = n("O94r"),
                r = n.n(a),
                i = n("+Kbs"),
                c = n("lE29"),
                o = n("SFoa"),
                s = n("LVcX"),
                l = n("ERkP"),
                u = n.n(l),
                d = n("TVEO"),
                f = n("uDfI"),
                m = (n("p0+K"), function Drift() {
                    var e = Object(c.a)().footerTextColor,
                        t = Object(s.a)("", ["context", "page", "hostname"], Object(f.c)(function(e) {
                            return e.session
                        })),
                        n = Object(l.useMemo)(function() {
                            return Object(o.h)() <= 1 ? "" : "?utm_source=".concat(t, "&utm_medium=web-widget&utm_campaign=widget-referral&utm_version=v2")
                        }, [t]);
                    return u.a.createElement("a", {
                        href: "https://www.drift.com/powered-by".concat(n),
                        className: "drift-widget-power",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        style: e
                    }, u.a.createElement(d.a, {
                        i18nKey: "composer.footer.poweredByDrift",
                        components: [u.a.createElement(i.d, {
                            height: 12,
                            width: 12
                        }), u.a.createElement("span", {
                            className: "drift-widget-power-brand"
                        }, "Drift")]
                    }))
                }),
                b = n("VkHq"),
                g = n("Hvhg");
            n("2VrW"), t.a = function Footer() {
                var e = Object(f.c)(g.c).showBranding,
                    t = void 0 !== e && e,
                    n = Object(b.a)(),
                    a = n.privacyPolicyLink,
                    i = n.privacyPolicyLinkText,
                    s = n.noPolicy,
                    l = Object(c.a)().footerTextColor;
                if (!t && s) return null;
                var d = Object(o.m)(i);
                return u.a.createElement("div", {
                    className: r()("drift-widget-footer", {
                        "drift-widget-footer--with-branding": t
                    })
                }, t && u.a.createElement(m, null), t && !s && u.a.createElement("span", {
                    className: "drift-widget-footer-privacy-spacer",
                    "aria-hidden": "true",
                    style: l
                }, "|"), !s && u.a.createElement("a", {
                    href: a,
                    rel: "noopener noreferrer",
                    target: "_blank",
                    title: i,
                    className: r()("drift-widget-footer-privacy-link", {
                        "long-copy": d
                    }),
                    style: l
                }, i))
            }
        },
        I4Wp: function(e, t, n) {},
        IuzP: function(e, t, n) {},
        JhcM: function(e, t, n) {},
        Jrg8: function(e, t, n) {},
        Lzfp: function(e, t, n) {
            "use strict";
            var a = n("jm9a"),
                r = n("O94r"),
                i = n.n(r),
                c = n("+Kbs"),
                o = n("ERkP"),
                s = n.n(o),
                l = (n("eSyn"), function SearchLabel(e) {
                    var t = e.ariaLabel,
                        n = void 0 === t ? "" : t,
                        r = e.ariaLabelledBy,
                        o = void 0 === r ? "" : r,
                        l = e.className,
                        u = void 0 === l ? "" : l,
                        d = e.htmlFor,
                        f = void 0 === d ? "" : d;
                    return s.a.createElement("label", {
                        "aria-label": n,
                        "aria-labelledby": o,
                        className: i()("drift-widget--search-label", Object(a.a)({}, u, !!u)),
                        htmlFor: f,
                        id: "driftWidgetSearchLabel"
                    }, s.a.createElement(c.r, {
                        titleId: o,
                        title: n,
                        width: 12,
                        height: 12
                    }))
                });
            n.d(t, "a", function() {
                return l
            })
        },
        Mur8: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = [{
                emoji: "\ud83d\ude20",
                value: 1
            }, {
                emoji: "\ud83d\ude41",
                value: 2
            }, {
                emoji: "\ud83d\ude10",
                value: 3
            }, {
                emoji: "\ud83d\ude0a",
                value: 4
            }, {
                emoji: "\ud83e\udd29",
                value: 5
            }]
        },
        P6Di: function(e, t, n) {},
        "PGb/": function(e, t, n) {},
        Q80r: function(e, t, n) {},
        Qp3a: function(e, t, n) {},
        RJSH: function(e, t, n) {},
        Sn8X: function(e, t, n) {
            "use strict";
            var a = n("SFoa"),
                r = n("ERkP"),
                i = n("Tr4L"),
                c = n("0lfv"),
                o = n("VpmR");
            t.a = function useLanguageSwitcher() {
                var e = Object(i.a)().i18n,
                    t = Object(a.f)();
                Object(r.useEffect)(function() {
                    e && Object(c.l)(e.changeLanguage) && e.changeLanguage(Object(o.c)(t))
                }, [e, t])
            }
        },
        UXBQ: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            });
            var a = n("efbE"),
                r = function uploadAttachment(e, t) {
                    var n = new FormData;
                    return n.append("conversationId", t), n.append("file", e), a.a.post("/attachments", n)
                },
                i = function fetchAttachments(e, t) {
                    return a.a.get("/attachments", {
                        params: {
                            id: e
                        },
                        cancelToken: t
                    })
                }
        },
        UwV1: function(e, t, n) {},
        YYte: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return InvisibleContent
            });
            var a = n("hX/4"),
                r = n("ERkP"),
                i = n.n(r),
                c = (n("fpMl"), {
                    label: function label(e) {
                        return i.a.createElement("label", Object.assign({
                            htmlFor: e.htmlFor
                        }, e))
                    },
                    span: function span(e) {
                        return i.a.createElement("span", e)
                    }
                });

            function InvisibleContent(e) {
                var t = e.content,
                    n = void 0 === t ? "" : t,
                    r = e.type,
                    o = void 0 === r ? "span" : r,
                    s = Object(a.a)(e, ["content", "type"]),
                    l = c[o];
                return i.a.createElement(l, Object.assign({
                    className: "visually-hidden"
                }, s), n)
            }
        },
        ZGTz: function(e, t, n) {
            "use strict";
            var a = n("mj2O"),
                r = n.n(a),
                i = n("7SM1"),
                c = n("s8DI"),
                o = n("O94r"),
                s = n.n(o),
                l = n("HXmn"),
                u = n("SFoa"),
                d = n("ERkP"),
                f = n.n(d),
                m = n("Tr4L"),
                b = n("uDfI"),
                g = n("oFTC"),
                p = (n("uqJV"), n("Q80r"), Object(d.lazy)(function() {
                    return Promise.all([n.e(10), n.e(51)]).then(n.bind(null, "tBak"))
                })),
                v = function EmojiPickerLoader(e) {
                    var t = e.loadingText;
                    return f.a.createElement("div", {
                        className: "drift-widget-emoji-picker--loader"
                    }, f.a.createElement("p", null, t), f.a.createElement(l.a, {
                        titleId: "EmojiPicker"
                    }))
                };
            t.a = function EmojiPicker(e) {
                var t = e.open,
                    a = e.onAddEmoji,
                    o = e.onClickOutside,
                    l = Object(m.a)().t,
                    h = Object(b.c)(function(e) {
                        return e.conversations
                    }).activeConversation,
                    O = "en" !== Object(u.f)(),
                    j = Object(d.useMemo)(function() {
                        return function createEmojiMartI18nProp(e) {
                            return {
                                search: e("emoji.search"),
                                clear: e("emoji.clear"),
                                notfound: e("emoji.notfound"),
                                skintext: e("emoji.skintext"),
                                categories: {
                                    search: e("emoji.category.search"),
                                    recent: e("emoji.category.recent"),
                                    smileys: e("emoji.category.smileys"),
                                    people: e("emoji.category.smileys"),
                                    nature: e("emoji.category.nature"),
                                    foods: e("emoji.category.foods"),
                                    activity: e("emoji.category.activity"),
                                    places: e("emoji.category.places"),
                                    objects: e("emoji.category.objects"),
                                    symbols: e("emoji.category.symbols"),
                                    flags: e("emoji.category.flags"),
                                    custom: e("emoji.category.custom")
                                },
                                categorieslabel: e("emoji.categorieslabel"),
                                skintones: {
                                    1: e("emoji.skintone1"),
                                    2: e("emoji.skintone2"),
                                    3: e("emoji.skintone3"),
                                    4: e("emoji.skintone4"),
                                    5: e("emoji.skintone5"),
                                    6: e("emoji.skintone6")
                                }
                            }
                        }(l)
                    }, [l]),
                    E = Object(d.useRef)(null),
                    w = Object(d.useState)(null),
                    y = Object(c.a)(w, 2),
                    C = y[0],
                    A = y[1];
                Object(d.useEffect)(function() {
                    t && !C && function() {
                        var e = Object(i.a)(r.a.mark(function _callee() {
                            return r.a.wrap(function _callee$(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.e(55).then(n.t.bind(null, "8ozv", 3)).then(function(e) {
                                            return A(e.default)
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }, _callee)
                        }));
                        return function fetchEmojiData() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }, [t, C]), Object(g.a)(E, function(e) {
                    o(e)
                });
                return f.a.createElement("div", {
                    ref: E,
                    className: s()("drift-widget-composer-emoji-picker", {
                        "drift-widget-composer-emoji-picker--open": t,
                        "drift-widget-composer-emoji-picker--full": h,
                        "drift-widget-composer-emoji-picker--mini": !h,
                        "drift-widget-composer-emoji-picker--hide-search": O
                    })
                }, f.a.createElement(d.Suspense, {
                    fallback: f.a.createElement(v, {
                        loadingText: l("status.loading")
                    })
                }, !!C && f.a.createElement(p, {
                    darkMode: !1,
                    hideSearch: O,
                    onSelect: function addEmojiToMessage(e) {
                        var t = e.native;
                        a(function(e) {
                            return "".concat(e, " ").concat(t)
                        })
                    },
                    sheetSize: 64,
                    set: "apple",
                    data: C,
                    exclude: ["flags", "symbols", "objects"],
                    perLine: 6,
                    emojiTooltip: !O,
                    i18n: j,
                    showPreview: !1,
                    showSkinTones: !1,
                    onClickOutside: o
                })))
            }
        },
        ZP32: function(e, t, n) {},
        alO1: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return FileAttachmentErrorBanner
            });
            var a = n("+Kbs"),
                r = n("nQD+"),
                i = n("ERkP"),
                c = n.n(i),
                o = n("Tr4L"),
                s = n("vwUF");

            function FileAttachmentErrorBanner(e) {
                var t = e.attachmentState,
                    n = e.clearFiles,
                    l = e.disabled,
                    u = e.reset,
                    d = Object(i.useRef)(null),
                    f = Object(o.a)().t;
                Object(i.useEffect)(function() {
                    d.current && d.current.focus()
                }, [d]);
                return c.a.createElement("div", {
                    className: "drift-widget-attachment-send-status drift-widget-attachment-send-status--failed"
                }, c.a.createElement("span", {
                    ref: d,
                    tabIndex: -1,
                    "aria-live": "assertive",
                    className: "drift-widget-attachment-send-status--text"
                }, f(t === s.b.SIZE_ERROR ? "attachment.errorSize" : "attachment.error")), c.a.createElement(r.a, {
                    "aria-label": "Failed to upload attachment. Close error message.",
                    onClick: function handleOnClick() {
                        u(), n()
                    },
                    className: "drift-widget-attachment-send-status--close",
                    disabled: l
                }, c.a.createElement(a.k, {
                    width: 10,
                    height: 10
                })))
            }
        },
        eSyn: function(e, t, n) {},
        ey6Y: function(e, t, n) {
            "use strict";
            var a = n("7IKl"),
                r = n("Tr4L");
            t.a = function useMeetingRecipients() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = Object(r.a)().t,
                    i = Object(a.a)(e);
                return t.length ? n("meeting.recipients", {
                    name: i,
                    others: t.length
                }) : "".concat(i)
            }
        },
        fTFZ: function(e, t, n) {
            "use strict";
            var a = n("nfbA"),
                r = n("WwEg"),
                i = n("s8DI"),
                c = n("O94r"),
                o = n.n(c),
                s = n("ZGTz"),
                l = n("Lzfp"),
                u = n("+Kbs"),
                d = n("zJmF"),
                f = n("jm9a"),
                m = n("ERkP"),
                b = n.n(m);

            function NotFound(e) {
                var t = e.className,
                    n = void 0 === t ? "" : t,
                    a = e.copy,
                    r = void 0 === a ? "" : a;
                return b.a.createElement("span", {
                    "aria-live": "polite",
                    className: o()("not-found", Object(f.a)({}, n, !!n))
                }, r)
            }
            var g = n("HXmn"),
                p = n("mj2O"),
                v = n.n(p),
                h = n("7SM1"),
                O = n("efbE"),
                j = ["en", "es", "pt", "id", "fr", "ar", "tr", "th", "vi", "de", "it", "ja", "zh-CN", "zh-TW", "ru", "ko", "pl", "nl", "ro", "hu", "sv", "cs", "hi", "bn", "da", "fa", "tl", "fi", "iw", "ms", "no", "uk"],
                E = function localeToGiphyLang(e) {
                    switch (e) {
                        case "de-DE-formal":
                            return "de";
                        case "zh":
                            return "zh-CN";
                        case "zh-HK":
                            return "zh-TW";
                        case "pt-BR":
                            return "pt"
                    }
                    return j.includes(e) ? e : "en"
                },
                w = function fetchTrendingGifs(e) {
                    return O.g.get("/trending", {
                        params: {
                            limit: e,
                            rating: "pg"
                        }
                    })
                },
                y = function fetchGifs(e, t) {
                    var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).locale;
                    return O.g.get("/search", {
                        params: {
                            limit: t,
                            q: e,
                            lang: E(n),
                            rating: "pg"
                        }
                    })
                };
            var C = n("SFoa"),
                A = n("LVcX"),
                k = n("0lfv"),
                S = 51,
                N = [],
                T = {};

            function filterBrokenGifLinks(e) {
                return e.filter(function filterBrokenGif(e) {
                    var t = Object(A.a)(null, ["images", "preview_gif", "url"], e),
                        n = Object(A.a)(null, ["images", "original_still", "url"], e);
                    return !(!t || !n)
                })
            }

            function useFetchGifsByKeyword(e, t) {
                var n, a = Object(C.f)(),
                    r = function useDebounce(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 750,
                            n = Object(m.useState)(e),
                            a = Object(i.a)(n, 2),
                            r = a[0],
                            c = a[1];
                        return Object(m.useEffect)(function() {
                            var n = setTimeout(function() {
                                c(e)
                            }, t);
                            return function() {
                                clearTimeout(n)
                            }
                        }, [e, t]), r
                    }(e, 500),
                    c = Object(m.useState)(!1),
                    o = Object(i.a)(c, 2),
                    s = o[0],
                    l = o[1];
                return Object(m.useEffect)(function() {
                    function _searchGifs() {
                        return (_searchGifs = Object(h.a)(v.a.mark(function _callee2() {
                            var e, t;
                            return v.a.wrap(function _callee2$(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, l(!0), n.next = 4, y(r, S, {
                                            locale: a
                                        });
                                    case 4:
                                        e = n.sent, t = e.data, T[r] = filterBrokenGifLinks(t.data), n.next = 12;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(0), Object(k.y)(["Could not search gifs by keyword", n.t0]);
                                    case 12:
                                        return n.prev = 12, l(!1), n.finish(12);
                                    case 15:
                                    case "end":
                                        return n.stop()
                                }
                            }, _callee2, null, [
                                [0, 9, 12, 15]
                            ])
                        }))).apply(this, arguments)
                    }
                    t && r && !T[r] && function searchGifs() {
                        return _searchGifs.apply(this, arguments)
                    }()
                }, [a, r, t]), {
                    debouncedValue: r,
                    isSearchLoading: s,
                    searchedGiphys: null !== (n = null === T || void 0 === T ? void 0 : T[r]) && void 0 !== n ? n : []
                }
            }
            var L = n("nvPd"),
                M = n("jITz"),
                I = n("97O6"),
                R = n.n(I),
                x = n("Tr4L"),
                D = n("ADGC"),
                F = n("oFTC");

            function resetFocus(e) {
                Object(k.m)(e) || e.focus()
            }
            n("Adtm");

            function GiphyPreview(e) {
                var t, n, a, r, i, c = e.addGiphyToMessage,
                    o = e.giphy,
                    s = null !== (t = null === o || void 0 === o ? void 0 : o.title) && void 0 !== t ? t : "Gif from Giphy";
                return b.a.createElement("li", {
                    className: "drift-widget-composer-giphy-list-item"
                }, b.a.createElement("button", {
                    "aria-label": s,
                    className: "giphy-button",
                    onClick: function handleOnClick() {
                        return c(o)
                    }
                }, b.a.createElement("img", {
                    alt: s,
                    "aria-label": s,
                    className: "giphy-animated",
                    src: null === o || void 0 === o ? void 0 : null === (n = o.images) || void 0 === n ? void 0 : null === (a = n.preview_gif) || void 0 === a ? void 0 : a.url
                }), b.a.createElement("img", {
                    alt: s,
                    "aria-label": s,
                    className: "giphy-still",
                    src: null === o || void 0 === o ? void 0 : null === (r = o.images) || void 0 === r ? void 0 : null === (i = r.original_still) || void 0 === i ? void 0 : i.url
                })))
            }
            n("RJSH");
            var B = function GiphyPicker(e) {
                    var t = e.onAddGiphy,
                        n = e.disabled,
                        a = void 0 !== n && n,
                        r = Object(x.a)().t,
                        c = Object(m.useState)(!1),
                        s = Object(i.a)(c, 2),
                        f = s[0],
                        p = s[1],
                        O = Object(m.useState)(!1),
                        j = Object(i.a)(O, 2),
                        E = j[0],
                        y = j[1],
                        C = Object(m.useRef)(null),
                        A = Object(m.useRef)(null),
                        T = Object(L.a)(""),
                        I = T.value,
                        B = T.onChange,
                        P = Object(M.a)({
                            targetKey: "Escape"
                        }),
                        G = Object(D.c)(),
                        U = function useFetchTrendingGifs(e) {
                            var t = Object(m.useState)(!1),
                                n = Object(i.a)(t, 2),
                                a = n[0],
                                r = n[1];
                            return Object(m.useEffect)(function() {
                                function _fetchTrending() {
                                    return (_fetchTrending = Object(h.a)(v.a.mark(function _callee() {
                                        var e, t, n;
                                        return v.a.wrap(function _callee$(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    return a.prev = 0, r(!0), a.next = 4, w(S);
                                                case 4:
                                                    t = a.sent, n = t.data, N = filterBrokenGifLinks(null !== (e = null === n || void 0 === n ? void 0 : n.data) && void 0 !== e ? e : []), a.next = 12;
                                                    break;
                                                case 9:
                                                    a.prev = 9, a.t0 = a.catch(0), Object(k.y)(["Could not search trending gifs", a.t0]);
                                                case 12:
                                                    return a.prev = 12, r(!1), a.finish(12);
                                                case 15:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }, _callee, null, [
                                            [0, 9, 12, 15]
                                        ])
                                    }))).apply(this, arguments)
                                }
                                e && Object(k.m)(N) && function fetchTrending() {
                                    return _fetchTrending.apply(this, arguments)
                                }()
                            }, [e]), {
                                isLoading: a,
                                trendingGiphys: N
                            }
                        }(f),
                        _ = U.isLoading,
                        V = U.trendingGiphys,
                        z = useFetchGifsByKeyword(I, f),
                        H = z.debouncedValue,
                        K = z.isSearchLoading,
                        Z = z.searchedGiphys,
                        Q = Object(k.m)(H) ? V : Z;
                    Object(F.a)(C, function() {
                        f && (p(!1), resetFocus(null === A || void 0 === A ? void 0 : A.current), y(!0))
                    }), Object(m.useEffect)(function() {
                        f && P && p(!1)
                    }, [P, f]), Object(m.useEffect)(function() {
                        if (E) {
                            var e = window.setTimeout(function() {
                                y(!1)
                            }, 200);
                            return function() {
                                window.clearTimeout(e)
                            }
                        }
                    }, [E]);
                    var W = Object(m.useCallback)(function(e) {
                            var n, a = e.images,
                                r = e.title;
                            t("\n      <img\n        alt=".concat(void 0 === r ? "gif" : r, '\n        src="').concat(null === a || void 0 === a ? void 0 : null === (n = a.original) || void 0 === n ? void 0 : n.url, '"\n      />\n    ')), p(!1), resetFocus(null === A || void 0 === A ? void 0 : A.current)
                        }, [t]),
                        X = _ || K,
                        q = !X && !!H && Object(k.m)(Z),
                        Y = !X && !Object(k.m)(Q);
                    return b.a.createElement(b.a.Fragment, null, b.a.createElement("button", {
                        className: "drift-widget-composer-giphy-toggle",
                        onClick: function openGiphy(e) {
                            if (E) return e.preventDefault();
                            p(function(e) {
                                return !e
                            })
                        },
                        "aria-label": "".concat(f ? "close" : "open", " GIF picker"),
                        "aria-expanded": f,
                        disabled: a
                    }, b.a.createElement(u.o, null)), b.a.createElement("div", {
                        "aria-expanded": f,
                        tabIndex: -1,
                        className: o()("drift-widget-composer-giphy-picker", {
                            "drift-widget-composer-giphy-picker--show": f,
                            "drift-widget-composer-giphy-picker--mobile": G
                        }),
                        ref: C
                    }, b.a.createElement("div", {
                        className: "drift-widget-composer-giphy-picker-search"
                    }, b.a.createElement(l.a, {
                        ariaLabel: "Search for a GIF",
                        ariaLabelledBy: "searchGIF",
                        className: "drift-widget--giphy-picker-search-label",
                        htmlFor: "giphy-picker-search"
                    }), b.a.createElement(d.a, {
                        type: "search",
                        placeholder: r("gifPicker.searchPlaceholder"),
                        value: I,
                        onChange: B,
                        onFocus: function onInputFocus(e) {
                            G && e.stopPropagation()
                        },
                        "aria-label": "Search GIFs",
                        id: "giphy-picker-search",
                        shouldFocus: f && !G
                    }), !!I && b.a.createElement("button", {
                        "aria-label": "Clear GIF search field",
                        className: "drift-widget--giphy-picker-search-clear",
                        onClick: function clearInput() {
                            B(null)
                        }
                    }, b.a.createElement(u.k, null))), b.a.createElement("div", {
                        className: "drift-widget-composer-giphy-picker-list-wrapper"
                    }, X && b.a.createElement(g.a, {
                        titleId: "GiphyPicker"
                    }), q && b.a.createElement(NotFound, {
                        className: "not-found--giphys",
                        copy: "No gifs found"
                    }), Y && b.a.createElement("ul", {
                        className: "drift-widget-composer-giphy-list"
                    }, Q.map(function(e, t) {
                        return b.a.createElement(GiphyPreview, {
                            addGiphyToMessage: W,
                            giphy: e,
                            key: "".concat(e.id, "-").concat(t)
                        })
                    }))), b.a.createElement("span", {
                        className: "drift-widget-composer-giphy-picker-power"
                    }, b.a.createElement("img", {
                        src: R.a,
                        alt: r("gifPicker.poweredBy")
                    }))))
                },
                P = n("908p"),
                G = n("YYte"),
                U = n("UXBQ"),
                _ = n("K7i0"),
                V = n("uDfI"),
                z = n("vwUF"),
                H = function useAttachmentUpload(e) {
                    var t = e.onAttachmentUploadComplete,
                        n = e.activeConversation,
                        a = Object(V.b)(),
                        r = Object(m.useState)(z.b.NONE),
                        c = Object(i.a)(r, 2),
                        o = c[0],
                        s = c[1],
                        l = Object(V.c)(function(e) {
                            return Object(A.a)(!1, ["embed", "configuration", "theme"], e)
                        }).allowEndUserFileUpload,
                        u = Object(m.useCallback)(function() {
                            var e = Object(h.a)(v.a.mark(function _callee(e) {
                                var r, i, c, u;
                                return v.a.wrap(function _callee$(d) {
                                    for (;;) switch (d.prev = d.next) {
                                        case 0:
                                            if (l) {
                                                d.next = 2;
                                                break
                                            }
                                            return d.abrupt("return");
                                        case 2:
                                            if (o !== z.b.ERROR) {
                                                d.next = 4;
                                                break
                                            }
                                            return d.abrupt("return");
                                        case 4:
                                            return s(z.b.PENDING), r = e.filter(function(e) {
                                                return e.size < z.a.DEFAULT
                                            }).map(function(e) {
                                                return Object(U.b)(e, n)
                                            }), d.prev = 6, d.next = 9, Promise.all(r);
                                        case 9:
                                            i = d.sent, c = i.map(function(e) {
                                                return e.data
                                            }), u = c.map(function(e) {
                                                return e.id
                                            }), a(Object(_.f)({
                                                attachments: c
                                            })), t(u), s(z.b.NONE), d.next = 20;
                                            break;
                                        case 17:
                                            d.prev = 17, d.t0 = d.catch(6), s(z.b.ERROR);
                                        case 20:
                                        case "end":
                                            return d.stop()
                                    }
                                }, _callee, null, [
                                    [6, 17]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [n, l, o, a, t]);
                    return {
                        attachmentState: o,
                        uploadAttachments: u,
                        resetAttachmentState: function resetAttachmentState() {
                            s(z.b.NONE)
                        }
                    }
                },
                K = n("xwTo"),
                Z = n("da4L"),
                Q = n("i9gz"),
                W = n("TbSn"),
                X = n("kNJ0"),
                q = function useComposerState() {
                    var e = Object(V.c)(K.g),
                        t = Object(V.c)(K.j);
                    return Object(m.useMemo)(function() {
                        if (e) return pe.UNAVAILABLE;
                        if (Object(Q.a)(t)) return pe.AVAILABLE;
                        var n = Object(W.a)(t),
                            a = Object(X.a)(-2, t),
                            r = Object(Z.e)(a) && Object(Z.i)(n);
                        return Object(Z.e)(n) || r || Object(Z.j)(n) ? pe.UNAVAILABLE_BUTTONS : Object(Z.o)(n) || Object(Z.o)(a) && Object(Z.i)(n) ? pe.AVAILABLE_BUTTONS : pe.AVAILABLE
                    }, [e, t])
                },
                Y = ["ja", "ko"],
                J = n("iJtH"),
                $ = n("t8ds");

            function needsNewLine() {
                var e, t = Object(C.f)(),
                    n = null === (e = navigator) || void 0 === e ? void 0 : e.language;
                return !!Y.find(function(e) {
                    return t.indexOf(e) > -1 || n.indexOf(e) > -1
                })
            }
            var ee = n("Za8o"),
                te = n("z24s"),
                ne = n("0B8E"),
                ae = function usePasteFiles(e) {
                    var t = e.inputRef,
                        n = Object(m.useState)([]),
                        a = Object(i.a)(n, 2),
                        c = a[0],
                        o = a[1],
                        s = Object(m.useState)(null),
                        l = Object(i.a)(s, 2),
                        u = l[0],
                        d = l[1],
                        f = Object(m.useCallback)(function(e) {
                            if (e.clipboardData && e.clipboardData.files) {
                                var t = Object(r.a)(e.clipboardData.files);
                                t.length && o(Object(ne.a)([].concat(Object(r.a)(c), Object(r.a)(t)))), t.length && d(e.clipboardData.getData("Text"))
                            }
                        }, [c]);
                    return Object(m.useEffect)(function() {
                        t && (t.current.onpaste = f)
                    }, [t, f]), {
                        pastedTextFromFiles: u,
                        pastedFiles: c,
                        clearFiles: function clearFiles() {
                            o([]), d(null)
                        }
                    }
                },
                re = function useSendMessage() {
                    var e = Object(V.b)(),
                        t = Object(V.c)(K.a);
                    return Object(m.useCallback)(function() {
                        var n = Object(h.a)(v.a.mark(function _callee(n) {
                            return v.a.wrap(function _callee$(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        n.previousActiveConversationId = t, e(Object(_.p)(n));
                                    case 2:
                                    case "end":
                                        return a.stop()
                                }
                            }, _callee)
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(), [t, e])
                },
                ie = n("lE29"),
                ce = n("qwiD"),
                oe = n("7VeV"),
                se = function useTypingIndicators(e) {
                    var t = e.activeConversationId,
                        n = Object(V.b)(),
                        a = Object(m.useRef)(),
                        r = Object(V.c)(function(e) {
                            return e.session.endUser.type
                        }),
                        i = Object(V.c)(function(e) {
                            return e.session.endUser.id
                        }),
                        c = Object(m.useCallback)(function(e) {
                            n(Object(ce.e)("chat", "user", "typing:".concat(e), {
                                userId: i,
                                userType: r,
                                conversationId: t,
                                participants: []
                            }))
                        }, [t, n, i, r]),
                        o = Object(m.useMemo)(function() {
                            return Object(oe.throttle)(5e3, !1, function() {
                                return c("started")
                            })
                        }, [c]);
                    return {
                        sendTypingStarted: function sendTypingStarted() {
                            o(), a.current && window.clearTimeout(a.current), a.current = window.setTimeout(function() {
                                return c("finished")
                            }, 5e3)
                        },
                        sendTypingFinished: function sendTypingFinished() {
                            a.current && (window.clearTimeout(a.current), a.current = null), c("finished")
                        }
                    }
                },
                le = n("bYXQ"),
                ue = n("Hvhg"),
                de = n("+oIK"),
                fe = n("ovDp"),
                me = n("Nqd4");

            function _extends() {
                return (_extends = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var be = m.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.0645 9.4955L14.4025 9.713C14.2785 10.143 14.1065 10.558 13.889 10.953L14.906 12.2865C15.058 12.485 15.0395 12.765 14.8635 12.9425L13.4845 14.3305C13.3105 14.506 13.0335 14.528 12.8335 14.3805L11.4705 13.3785C11.0725 13.5985 10.653 13.773 10.2175 13.9L9.9955 15.566C9.9625 15.8145 9.7505 16 9.5 16H7.5C7.2485 16 7.0365 15.813 7.004 15.5645L6.79 13.9045C6.361 13.7815 5.947 13.611 5.553 13.3955L4.2125 14.4075C4.0135 14.5575 3.7355 14.538 3.559 14.3635L2.1695 12.985C1.9945 12.811 1.9725 12.535 2.118 12.335L3.113 10.973C2.8875 10.567 2.711 10.141 2.5845 9.7005L0.938 9.496C0.688 9.465 0.5 9.2525 0.5 9V7C0.5 6.748 0.687 6.5355 0.937 6.5045L2.595 6.2935C2.7235 5.854 2.901 5.432 3.125 5.0315L2.098 3.7185C1.9425 3.5195 1.9595 3.2365 2.137 3.058L3.5165 1.6695C3.693 1.492 3.974 1.472 4.174 1.624L5.521 2.6485C5.9225 2.4265 6.3455 2.251 6.7845 2.124L7.004 0.4355C7.0365 0.1865 7.249 0 7.5 0H9.5C9.7525 0 9.9655 0.1885 9.9965 0.439L10.202 2.1225C10.627 2.245 11.0375 2.414 11.4295 2.627L12.787 1.5935C12.9865 1.4425 13.2655 1.4605 13.4425 1.6365L14.8305 3.016C15.0075 3.192 15.028 3.472 14.8775 3.6715L13.861 5.0215C14.086 5.4225 14.2645 5.8455 14.394 6.2855L16.065 6.5045C16.3135 6.537 16.5 6.7485 16.5 7V9C16.5 9.251 16.3135 9.4635 16.0645 9.4955ZM15.5 7.4385L13.9305 7.233C13.724 7.2065 13.5555 7.0535 13.5085 6.8505C13.3775 6.2855 13.152 5.75 12.8375 5.2595C12.725 5.0835 12.7335 4.856 12.8595 4.689L13.8165 3.418L13.0465 2.653L11.7705 3.6245C11.605 3.75 11.38 3.761 11.2045 3.652C10.716 3.35 10.1885 3.134 9.637 3.009C9.431 2.963 9.2765 2.792 9.2505 2.5825L9.0575 1H7.939L7.7325 2.588C7.7055 2.796 7.552 2.9645 7.3475 3.011C6.7825 3.1395 6.246 3.3625 5.7525 3.6735C5.576 3.7845 5.3495 3.7745 5.183 3.648L3.917 2.6855L3.157 3.4495L4.124 4.686C4.2545 4.8535 4.2655 5.0845 4.1515 5.263C3.837 5.7555 3.6115 6.2925 3.48 6.8595C3.433 7.0635 3.264 7.2165 3.056 7.2425L1.5 7.4405V8.5585L3.046 8.7505C3.2555 8.7765 3.426 8.9315 3.472 9.1375C3.598 9.7 3.821 10.2375 4.134 10.7355C4.2425 10.909 4.235 11.1315 4.114 11.297L3.179 12.5775L3.956 13.348L5.2165 12.397C5.3815 12.2725 5.606 12.2625 5.781 12.3715C6.2695 12.6745 6.798 12.892 7.3525 13.017C7.557 13.0635 7.711 13.2325 7.738 13.441L7.9395 15H9.062L9.2705 13.4345C9.298 13.228 9.451 13.0595 9.6545 13.013C10.214 12.8845 10.746 12.6635 11.235 12.3565C11.4085 12.247 11.632 12.255 11.7975 12.3775L13.079 13.3195L13.847 12.5465L12.8905 11.293C12.764 11.1275 12.754 10.901 12.8645 10.7245C13.17 10.2355 13.3895 9.7055 13.5155 9.1505C13.562 8.946 13.7305 8.792 13.938 8.7655L15.5 8.561V7.4385ZM8.5 11.009C6.8455 11.009 5.5 9.6635 5.5 8.009C5.5 6.355 6.8455 5.009 8.5 5.009C10.1545 5.009 11.5 6.355 11.5 8.009C11.5 9.6635 10.1545 11.009 8.5 11.009ZM8.5 6.009C7.397 6.009 6.5 6.9065 6.5 8.009C6.5 9.1115 7.397 10.009 8.5 10.009C9.603 10.009 10.5 9.1115 10.5 8.009C10.5 6.9065 9.603 6.009 8.5 6.009Z",
                fill: "#687882"
            });

            function SvgGearWheel(e, t) {
                return m.createElement("svg", _extends({
                    width: 17,
                    height: 16,
                    viewBox: "0 0 17 16",
                    fill: "none",
                    ref: t
                }, e), be)
            }
            var ge = m.forwardRef(SvgGearWheel);
            n.p, n("iaVW");

            function AdditionalSettings(e) {
                var t = e.disabled,
                    n = e.setUseEnter,
                    a = e.useEnter,
                    r = Object(m.useRef)(),
                    c = Object(m.useRef)(),
                    o = Object(x.a)().t,
                    s = Object(me.a)(),
                    l = Object(i.a)(s, 2),
                    u = l[0],
                    d = l[1],
                    f = Object(M.a)({
                        targetKey: "Escape"
                    });
                Object(F.a)(c, d), Object(m.useEffect)(function() {
                    u && f && d()
                }, [f, d, u]);
                var g = function handleOnChange(e) {
                    Object(k.o)({
                        type: "log",
                        data: ["AdditionalSettings", "ModifiedEnterBehaviour:" + e],
                        internal: !0
                    }), n()
                };
                return b.a.createElement(b.a.Fragment, null, b.a.createElement("button", {
                    "aria-hidden": t,
                    "aria-label": "".concat(u ? "close" : "open", " composer settings"),
                    className: "drift-widget-composer-additional-settings",
                    "aria-expanded": u,
                    disabled: t,
                    onClick: function handleSettingsGearClicked() {
                        Object(k.o)({
                            type: "log",
                            data: ["AdditionalSettings", "SettingsGearClicked"],
                            internal: !0
                        }), d()
                    },
                    ref: r
                }, b.a.createElement(ge, {
                    "aria-hidden": !0
                })), u && b.a.createElement("fieldset", {
                    className: "drift-widget-composer-additional-settings--overlay",
                    ref: c
                }, b.a.createElement("span", null, o("composer.additionalSetings.press"), " ", b.a.createElement("span", {
                    className: "keyboard-key"
                }, o("composer.additionalSetings.enter")), " ", o("composer.additionalSetings.to")), b.a.createElement("label", {
                    htmlFor: "sendIt"
                }, b.a.createElement("input", {
                    id: "sendIt",
                    type: "radio",
                    onChange: function onChange() {
                        return g("sendMessage")
                    },
                    checked: a,
                    "aria-checked": a,
                    name: "settings"
                }), o("composer.additionalSetings.sendIt")), b.a.createElement("label", {
                    htmlFor: "newLine"
                }, b.a.createElement("input", {
                    id: "newLine",
                    type: "radio",
                    onChange: function onChange() {
                        return g("newLine")
                    },
                    checked: !a,
                    "aria-checked": !a,
                    name: "settings"
                }), o("composer.additionalSetings.newLine"))))
            }

            function AttachmentIconButton(e) {
                var t = e.isDisabled,
                    n = e.open;
                return b.a.createElement("button", {
                    "aria-label": "Add an attachment",
                    className: "drift-widget-composer-file-attachment",
                    disabled: t,
                    onClick: n
                }, b.a.createElement(u.a, null))
            }
            n("alO1"), n("IuzP");
            n.d(t, "a", function() {
                return pe
            });
            var pe, ve = "GIF",
                he = "TEXT",
                Oe = function validateMessageText(e) {
                    return !Object(k.m)(e) && e.trim().length > 0
                };
            ! function(e) {
                e[e.AVAILABLE = 0] = "AVAILABLE", e[e.AVAILABLE_BUTTONS = 1] = "AVAILABLE_BUTTONS", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.UNAVAILABLE_BUTTONS = 3] = "UNAVAILABLE_BUTTONS"
            }(pe || (pe = {}));
            t.b = b.a.memo(function Composer(e) {
                var t = e.disabled,
                    c = void 0 !== t && t,
                    l = e.chatHidden,
                    d = e.alwaysShowSendAction,
                    f = void 0 !== d && d,
                    p = e.useGifPicker,
                    O = void 0 === p || p,
                    j = e.alwaysShow,
                    E = void 0 !== j && j,
                    w = Object(D.c)(!0),
                    y = Object(m.useRef)(null),
                    C = Object(m.useRef)(null),
                    S = q(),
                    N = re(),
                    T = function useEnterToSubmit() {
                        var e = Object(m.useState)(!0),
                            t = Object(i.a)(e, 2),
                            n = t[0],
                            a = t[1],
                            r = Object(D.c)();
                        return Object(m.useEffect)(function() {
                            function _initialStateFromStorage() {
                                return (_initialStateFromStorage = Object(h.a)(v.a.mark(function _callee() {
                                    var e, t;
                                    return v.a.wrap(function _callee$(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.prev = 0, n.next = 3, $.a.get(J.c);
                                            case 3:
                                                e = n.sent, t = e.data, a(Object(k.m)(t) ? !needsNewLine() : t), n.next = 11;
                                                break;
                                            case 8:
                                                n.prev = 8, n.t0 = n.catch(0), console.warn(n.t0);
                                            case 11:
                                            case "end":
                                                return n.stop()
                                        }
                                    }, _callee, null, [
                                        [0, 8]
                                    ])
                                }))).apply(this, arguments)
                            }
                            r || function initialStateFromStorage() {
                                return _initialStateFromStorage.apply(this, arguments)
                            }()
                        }, [r]), [n, function() {
                            a(function(e) {
                                return $.a.set(J.c, !e), !e
                            })
                        }]
                    }(),
                    L = Object(i.a)(T, 2),
                    M = L[0],
                    I = L[1],
                    R = Object(m.useState)(""),
                    F = Object(i.a)(R, 2),
                    U = F[0],
                    _ = F[1],
                    K = Object(m.useState)(!1),
                    Z = Object(i.a)(K, 2),
                    Q = Z[0],
                    W = Z[1],
                    X = Object(te.a)(y),
                    Y = Object(m.useState)([]),
                    ne = Object(i.a)(Y, 2),
                    ce = ne[0],
                    oe = ne[1],
                    me = Object(V.c)(function(e) {
                        return e.view
                    }),
                    be = me.matchedHours,
                    ge = me.chatOpen,
                    je = Object(V.c)(function(e) {
                        return e.conversations.attachments
                    }),
                    Ee = Object(V.c)(function(e) {
                        return e.conversations.activeConversation
                    }),
                    we = Object(V.c)(function(e) {
                        return e.session.endUser.id
                    }),
                    ye = Object(V.c)(function(e) {
                        return Object(A.a)(!1, ["embed", "configuration", "theme"], e)
                    }).allowEndUserFileUpload,
                    Ce = Object(V.c)(ue.h),
                    Ae = O && Ce,
                    ke = Object(x.a)().t,
                    Se = Object(ie.a)(),
                    Ne = Se.activeColor,
                    Te = Se.composerTheme,
                    Le = Se.composerButtonHoverColor,
                    Me = ae({
                        inputRef: y
                    }),
                    Ie = Me.pastedFiles,
                    Re = Me.clearFiles,
                    xe = se({
                        activeConversationId: Ee
                    }),
                    De = xe.sendTypingStarted,
                    Fe = xe.sendTypingFinished,
                    Be = H({
                        activeConversation: Ee,
                        onAttachmentUploadComplete: Object(m.useCallback)(function onAttachmentUploadComplete(e) {
                            oe(function(t) {
                                return [].concat(Object(r.a)(t), Object(r.a)(e))
                            }), Re()
                        }, [])
                    }),
                    Pe = Be.attachmentState,
                    Ge = Be.uploadAttachments,
                    Ue = Be.resetAttachmentState,
                    _e = S === pe.AVAILABLE || S === pe.AVAILABLE_BUTTONS,
                    Ve = Object(m.useMemo)(function() {
                        return !E && (c || !_e)
                    }, [E, c, _e]),
                    ze = Object(fe.a)({
                        onDrop: Ge,
                        disabled: c || !_e || !ye
                    }),
                    He = ze.getRootProps,
                    Ke = ze.getInputProps,
                    Ze = ze.open,
                    Qe = Oe(U) || !Object(k.m)(ce),
                    We = Pe === z.b.PENDING,
                    Xe = Pe === z.b.ERROR || Pe === z.b.SIZE_ERROR,
                    qe = c || !_e || !!Ie.length;
                var Ye = function needToSend(e) {
                        return M && ("Enter" === e.key || 13 === e.keyCode) || !M && e.shiftKey && "Enter" === e.key
                    },
                    Je = Object(m.useCallback)(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : he,
                            n = ce ? {
                                attachments: ce
                            } : {},
                            r = Ee ? {} : {
                                sentWelcomeMessage: be
                            };
                        Fe();
                        var i = t === he ? Object(k.t)(e) : e;
                        N({
                                message: Object(de.a)(Object(a.a)({
                                    message: i,
                                    activeConversation: Ee || null,
                                    authorId: we,
                                    attributes: r
                                }, n))
                            }), _(""), oe([]), Ue(),
                            function setFocusOnComposer() {
                                y.current.focus(), y.current.classList.remove("focus-visible")
                            }()
                    }, [Ee, we, be, Ue, N, Fe, ce]);
                Object(m.useEffect)(function() {
                    ye ? Ie.length && !We && Ge(Ie) : Re()
                }, [ye, We, Re, Ie, Ge]), Object(m.useEffect)(function() {
                    Ee && _("")
                }, [Ee]), Object(ee.a)(y, ge && _e && !l && S === pe.AVAILABLE);
                var $e = Object(m.useMemo)(function() {
                        return ke(_e ? "composer.replyToPlaceholder" : S === pe.UNAVAILABLE_BUTTONS ? "composer.chooseOptionAbove" : "composer.replyDisabled")
                    }, [_e, S, ke]),
                    et = ye && !Object(le.c)(Ee),
                    tt = Ae && !Qe && !!Ee,
                    nt = f || !Ae || Qe,
                    at = et || nt || tt,
                    rt = c || !Qe || We,
                    it = Object(m.lazy)(function() {
                        return n.e(44).then(n.bind(null, "B2YN"))
                    });
                return b.a.createElement(b.a.Fragment, null, (ce.length || We || Xe) && b.a.createElement(m.Suspense, {
                    fallback: b.a.createElement(g.a, {
                        titleId: "AttachmentPreviews"
                    })
                }, b.a.createElement(it, {
                    activeColor: Ne,
                    attachments: je,
                    attachmentError: Xe,
                    attachmentState: Pe,
                    attachmentUploadPending: We,
                    clearFiles: Re,
                    composerDisabled: c,
                    resetAttachmentState: Ue,
                    setUploadedAttachments: oe,
                    uploadedAttachments: ce
                })), b.a.createElement("style", null, "\n          .drift-widget-composer--default button:hover > svg path {\n            fill: ".concat(Le, "\n          }\n        ")), b.a.createElement("div", Object.assign({}, He({
                    onClick: function onClick(e) {
                        return e.stopPropagation()
                    }
                }), {
                    className: o()("drift-widget-composer--default", {
                        "drift-widget-composer--mobile": w,
                        "drift-widget-composer--hidden": Ve
                    }),
                    tabIndex: void 0
                }), ye && b.a.createElement("input", Ke()), b.a.createElement("div", {
                    className: "drift-widget-composer--text-area"
                }, b.a.createElement("pre", null, _e && U.length ? U : " "), b.a.createElement(G.a, {
                    content: $e,
                    htmlFor: "drift-widget-composer-input",
                    type: "label"
                }), b.a.createElement("textarea", {
                    className: o()("drift-widget-input js-focus-visible--controlled", {
                        "keyboard-focused--outlined": X
                    }),
                    ref: y,
                    placeholder: $e,
                    value: _e ? U : "",
                    onChange: function onTextareaChange(e) {
                        Ie.length || (_(e.target.value), De())
                    },
                    onKeyDown: function handleTextareaKeydown(e) {
                        Ye(e) && (e.preventDefault(), (Oe(U) || ce.length) && Je(U, he))
                    },
                    onKeyUp: function handleTextareaKeyUp(e) {
                        Ye(e) && _("")
                    },
                    "aria-label": $e || "reply to bot, message composer",
                    maxLength: 4096,
                    disabled: qe,
                    id: "drift-widget-composer-input",
                    style: Te
                }), _e && !w && b.a.createElement("button", {
                    className: "drift-widget-composer-emoji-toggle",
                    onClick: function onEmojiButtonClick() {
                        qe || W(!Q)
                    },
                    disabled: c,
                    "aria-expanded": Q,
                    "aria-label": "".concat(Q ? "close" : "open", " emoji picker")
                }, b.a.createElement(u.n, null))), _e && !w && b.a.createElement(s.a, {
                    open: Q,
                    onAddEmoji: function onAddEmoji(e) {
                        W(!Q), _e && !c && (_(e), y.current && y.current.focus())
                    },
                    onClickOutside: function onEmojiPickerClickOutside() {
                        W(!1)
                    }
                }), _e && at && b.a.createElement("div", {
                    className: o()("drift-widget-composer-actions", {
                        "drift-widget-composer-actions-expanded": et && (tt || nt)
                    })
                }, tt && b.a.createElement(B, {
                    onAddGiphy: function onAddGiphy(e) {
                        return Je(e, ve)
                    },
                    disabled: c
                }), et && b.a.createElement(AttachmentIconButton, {
                    isDisabled: c,
                    open: Ze
                }), !w && b.a.createElement(AdditionalSettings, {
                    disabled: c,
                    setUseEnter: I,
                    useEnter: M
                }), nt && b.a.createElement("button", {
                    className: o()("drift-widget-composer-send-button", {
                        "drift-widget-composer-send-button--disabled": rt
                    }),
                    "aria-label": "send message",
                    onClick: function onClick() {
                        return Je(U, he)
                    },
                    disabled: rt || We,
                    ref: C
                }, b.a.createElement(P.a, {
                    color: "#".concat(Ne)
                })))))
            })
        },
        fpJs: function(e, t, n) {
            "use strict";
            var a = n("uDfI"),
                r = n("VkHq"),
                i = function showBrandingSelector(e) {
                    return e.embed.configuration.showBranding || !1
                };
            t.a = function useHasFooter() {
                var e = Object(a.c)(i),
                    t = Object(r.a)().noPolicy;
                return e || !t
            }
        },
        fpMl: function(e, t, n) {},
        gRD2: function(e, t, n) {
            "use strict";
            var a = n("mj2O"),
                r = n.n(a),
                i = n("7SM1"),
                c = n("mssF"),
                o = n("K7i0"),
                s = n("xwTo"),
                l = n("pu/X"),
                u = n("LVcX"),
                d = n("ERkP"),
                f = n("uDfI"),
                m = n("0lfv");
            t.a = function useFetchActiveConverationMessages() {
                var e = Object(f.b)(),
                    t = Object(f.c)(s.a),
                    n = Object(f.c)(s.f);
                return {
                    fetchMessages: Object(d.useCallback)(function() {
                        var a = Object(i.a)(r.a.mark(function _callee(a) {
                            var i, s, d, f, b, g;
                            return r.a.wrap(function _callee$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (i = a.limit, s = void 0 === i ? 30 : i, d = a.from, f = void 0 === d ? null : d, !n) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return r.prev = 3, r.next = 6, Object(c.d)({
                                            conversationId: t,
                                            limit: s,
                                            from: f
                                        });
                                    case 6:
                                        return b = r.sent, g = b.data, e(Object(o.l)({
                                            messages: g.data,
                                            hasMoreMessages: Object(u.a)(!1, ["pagination", "more"], g),
                                            nextPageMessageId: Object(u.a)(null, ["pagination", "next"], g),
                                            conversationId: t
                                        })), r.abrupt("return", g);
                                    case 12:
                                        r.prev = 12, r.t0 = r.catch(3), Object(m.f)([l.a.MESSAGE.FETCH_MESSAGES, " convoId:" + t], r.t0, !0);
                                    case 15:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee, null, [
                                [3, 12]
                            ])
                        }));
                        return function(e) {
                            return a.apply(this, arguments)
                        }
                    }(), [t, e, n])
                }
            }
        },
        hhdZ: function(e, t, n) {
            "use strict";
            var a = n("da4L"),
                r = n("LVcX"),
                i = n("i9gz"),
                c = n("TbSn"),
                o = n("uDfI");
            t.a = function useLastMessage(e) {
                var t = Object(o.c)(function(t) {
                        return Object(r.a)(null, ["conversations", "conversations", e, "lastMessage"], t)
                    }),
                    n = Object(o.c)(function(t) {
                        var n = Object(r.a)({}, ["conversations", "messages", e], t);
                        if (!Object(i.a)(n)) {
                            var o = Object(a.s)(n);
                            if (o.length) return Object(c.a)(o)
                        }
                        return null
                    });
                return t || n || {}
            }
        },
        iaVW: function(e, t, n) {},
        jITz: function(e, t, n) {
            "use strict";
            var a = n("s8DI"),
                r = n("ERkP"),
                i = function useEventListener(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                        a = Object(r.useRef)();
                    Object(r.useEffect)(function() {
                        a.current = t
                    }, [t]), Object(r.useEffect)(function() {
                        if (n && n.addEventListener) {
                            var t = function eventListener(e) {
                                return a.current(e)
                            };
                            return n.addEventListener(e, t),
                                function() {
                                    n.removeEventListener(e, t)
                                }
                        }
                    }, [e, n])
                };
            t.a = function useKeyPress(e) {
                var t = e.element,
                    n = void 0 === t ? window : t,
                    c = e.targetKey,
                    o = e.onKeyDown,
                    s = void 0 === o ? function() {} : o,
                    l = e.onKeyUp,
                    u = void 0 === l ? function() {} : l,
                    d = Object(r.useState)(!1),
                    f = Object(a.a)(d, 2),
                    m = f[0],
                    b = f[1],
                    g = Object(r.useCallback)(function(e) {
                        e.key === c && (b(!0), s(e))
                    }, [c, s]),
                    p = Object(r.useCallback)(function(e) {
                        e.key === c && (b(!1), u(e))
                    }, [c, u]);
                return i("keydown", g, n), i("keyup", p, n), m
            }
        },
        mQ2C: function(e, t, n) {},
        nvPd: function(e, t, n) {
            "use strict";
            var a = n("s8DI"),
                r = n("ERkP");
            t.a = function useInputValue(e) {
                var t = Object(r.useState)(e),
                    n = Object(a.a)(t, 2),
                    i = n[0],
                    c = n[1];
                return {
                    value: i,
                    onChange: Object(r.useCallback)(function(e) {
                        var t, n;
                        c(null !== (t = null === e || void 0 === e ? void 0 : null === (n = e.currentTarget) || void 0 === n ? void 0 : n.value) && void 0 !== t ? t : "")
                    }, [])
                }
            }
        },
        "p0+K": function(e, t, n) {},
        pYxh: function(e, t, n) {
            "use strict";
            var a = n("O94r"),
                r = n.n(a),
                i = n("ERkP"),
                c = n.n(i);
            n("vYbd");
            t.a = function Card(e) {
                return c.a.createElement("div", Object.assign({}, e, {
                    className: r()("drift-widget-card", e.className),
                    tabIndex: -1
                }), e.children)
            }
        },
        "q+cq": function(e, t, n) {
            "use strict";
            var a = n("O94r"),
                r = n.n(a),
                i = n("pYxh"),
                c = n("rmQ0"),
                o = n("ey6Y"),
                s = n("ERkP"),
                l = n.n(s),
                u = n("Tr4L");
            t.a = function MeetingSchedulerCard(e) {
                var t = e.agentId,
                    n = e.additionalAgents,
                    a = void 0 === n ? [] : n,
                    s = e.children,
                    d = e.duration,
                    f = e.showRecipients,
                    m = void 0 !== f && f,
                    b = e.loadingFrame,
                    g = void 0 !== b && b,
                    p = Object(u.a)().t,
                    v = Object(o.a)(t, a),
                    h = p("meeting.scheduleAMeeting");
                m && t && (h = p("meeting.scheduleAMeetingWith", {
                    recipients: v
                }));
                var O = g ? {} : {
                    minHeight: "350px"
                };
                return l.a.createElement(i.a, {
                    "aria-label": h,
                    className: r()("drift-meeting-scheduler", {
                        "drift-meeting-scheduler--loader": g
                    }),
                    style: O
                }, l.a.createElement(c.a, {
                    className: "drift-meeting-scheduler--header"
                }, l.a.createElement("span", null, h), d && l.a.createElement("span", null, p("meeting.duration", {
                    duration: d
                }))), l.a.createElement("div", {
                    className: "drift-meeting-scheduler--content"
                }, s))
            }
        },
        rmQ0: function(e, t, n) {
            "use strict";
            var a = n("nfbA"),
                r = n("O94r"),
                i = n.n(r),
                c = n("lE29"),
                o = n("ERkP"),
                s = n.n(o);
            n("9wXn");
            t.a = function CardHeader(e) {
                var t = Object(c.a)().cardHeaderTheme;
                return s.a.createElement("header", Object.assign({}, e, {
                    className: i()("drift-widget-card-header", e.className),
                    style: Object(a.a)(Object(a.a)({}, t), e.style)
                }), s.a.createElement("div", {
                    className: "drift-widget-card-header--content"
                }, e.children))
            }
        },
        slYP: function(e, t, n) {
            "use strict";
            var a = n("s8DI"),
                r = n("O94r"),
                i = n.n(r),
                c = n("rmQ0"),
                o = n("+Kbs"),
                s = n("nQD+"),
                l = n("hX/4"),
                u = n("ZGTz"),
                d = n("ERkP"),
                f = n.n(d),
                m = n("ADGC"),
                b = (n("+GZi"), function TextArea(e) {
                    var t = e.value,
                        n = e.onValueChange,
                        r = Object(l.a)(e, ["value", "onValueChange"]),
                        c = Object(m.c)(!0),
                        b = Object(d.useState)(!1),
                        g = Object(a.a)(b, 2),
                        p = g[0],
                        v = g[1],
                        h = Object(d.useRef)(null),
                        O = Object(d.useRef)(null);
                    return f.a.createElement(f.a.Fragment, null, !c && f.a.createElement(u.a, {
                        open: p,
                        onAddEmoji: function onAddEmoji(e) {
                            v(!p), r.disabled || (n && n(e), O.current && O.current.focus())
                        },
                        onClickOutside: function onEmojiPickerClickOutside(e) {
                            h.current && h.current.contains(e.target) || v(!1)
                        }
                    }), f.a.createElement("div", {
                        className: "drift-widget-textarea"
                    }, f.a.createElement("pre", null, t && t.length ? t : " "), f.a.createElement("textarea", Object.assign({}, r, {
                        className: i()("drift-widget-input", r.className),
                        value: t,
                        ref: O,
                        onChange: function onTextAreaChange(e) {
                            n && n(e.target.value), r.onChange && r.onChange(e)
                        },
                        disabled: r.disabled
                    })), !r.disabled && !c && f.a.createElement(s.a, {
                        ref: h,
                        className: "drift-widget-textarea--emoji-toggle",
                        onClick: function onEmojiButtonClick() {
                            r.disabled || v(!p)
                        },
                        disabled: r.disabled,
                        "aria-expanded": p,
                        "aria-label": "emojis"
                    }, f.a.createElement(o.n, null))))
                }),
                g = n("Mur8"),
                p = n("jITz"),
                v = n("fJrp"),
                h = n("lE29"),
                O = n("K7i0"),
                j = n("+oIK"),
                E = n("da4L"),
                w = n("Tr4L"),
                y = n("uDfI"),
                C = n("PjZB");
            n("Jrg8"), t.a = function RateConversation(e) {
                var t = e.message,
                    n = Object(w.a)().t,
                    r = Object(h.a)(),
                    l = r.activeColor,
                    u = r.conversationRatingCloseButtonTheme,
                    m = r.conversationRatingHeaderTheme,
                    A = r.conversationRatingBodyTheme,
                    k = r.composerTheme,
                    S = Object(v.a)(t),
                    N = Object(y.b)(),
                    T = Object(y.c)(function(e) {
                        return e.session
                    }).endUser,
                    L = Object(d.useState)(!0),
                    M = Object(a.a)(L, 2),
                    I = M[0],
                    R = M[1],
                    x = Object(d.useState)(""),
                    D = Object(a.a)(x, 2),
                    F = D[0],
                    B = D[1],
                    P = Object(d.useState)(0),
                    G = Object(a.a)(P, 2),
                    U = G[0],
                    _ = G[1],
                    V = Object(d.useMemo)(function() {
                        return Object(E.a)(t, "ratingPrompt")
                    }, [t]),
                    z = V.ratingPromptMessage,
                    H = V.ratingAcknowledgement,
                    K = Object(p.a)({
                        targetKey: "Enter"
                    }),
                    Z = Object(d.useCallback)(function() {
                        var e = Object(j.a)({
                            message: "",
                            activeConversation: t.conversationId,
                            authorId: T.id,
                            attributes: {
                                conversationRating: {
                                    ratingPrompt: {
                                        ratingAcknowledgement: H,
                                        ratingPromptMessage: z.trim()
                                    },
                                    ratingValue: U,
                                    ratingText: F
                                }
                            },
                            contentType: C.c.BOT_CONVERSATION_RATING,
                            type: C.e.BOT_CONVERSATION_RATING
                        });
                        N(Object(O.p)({
                            message: e
                        })), R(!1)
                    }, [t, N, T.id, H, z, F, U]);
                Object(d.useEffect)(function() {
                    K && function isValidMessage(e) {
                        return e && e.trim().length > 0
                    }(F) && Z()
                }, [K, F, Z]), Object(d.useEffect)(function() {
                    S && S !== t && !I && R(!0)
                }, [t, S, I]);
                var Q = Object(d.useMemo)(function() {
                    return g.a.map(function(e) {
                        var t = e.emoji,
                            n = e.value;
                        return f.a.createElement(s.a, {
                            className: i()("drift-widget-rate-conversation--rating", {
                                "drift-widget-rate-conversation--rating--selected": n === U
                            }),
                            key: "rating_".concat(n),
                            "aria-label": "rate ".concat(n),
                            onClick: function onClick() {
                                return _(n)
                            }
                        }, t)
                    })
                }, [U]);
                if (!I) return null;
                return f.a.createElement(f.a.Fragment, null, f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--cover"
                }), f.a.createElement("div", {
                    className: "drift-widget-rate-conversation"
                }, f.a.createElement(c.a, {
                    style: m
                }, f.a.createElement("span", null, z), f.a.createElement(s.a, {
                    className: "drift-widget-rate-conversation--close-button",
                    "aria-label": "close rating",
                    onClick: function onClick() {
                        return R(!1)
                    }
                }, f.a.createElement(o.k, {
                    width: 20,
                    height: 20,
                    fill: u.color
                }))), f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--body",
                    style: A
                }, f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--ratings"
                }, Q), !!U && f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--composer"
                }, f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--actions"
                }, f.a.createElement(s.a, {
                    className: "drift-widget-rate-conversation--send-button",
                    onClick: Z
                }, f.a.createElement(o.s, {
                    color: "#".concat(l)
                }))), f.a.createElement(b, {
                    "aria-label": "rating input",
                    maxLength: 4096,
                    placeholder: n("form.placeholder.tellUsMore"),
                    onValueChange: function onTextAreaValueChange(e) {
                        K || B(e)
                    },
                    value: F,
                    style: k
                })))))
            }
        },
        vYbd: function(e, t, n) {},
        vkRn: function(e, t, n) {
            "use strict";
            var a = n("O94r"),
                r = n.n(a),
                i = n("BA/U"),
                c = n("noex"),
                o = n("yEsl"),
                s = n("MQZS"),
                l = n("fw6E"),
                u = n("hhdZ"),
                d = n("58kB"),
                f = n("kXeL"),
                m = n.n(f),
                b = n("LVcX"),
                g = n("ERkP"),
                p = n.n(g),
                v = n("Tr4L"),
                h = n("uDfI"),
                O = function useUserResolution() {
                    var e = Object(v.a)().t,
                        t = Object(h.c)(function(e) {
                            return e.session.endUser
                        });
                    return Object(g.useMemo)(function() {
                        return {
                            id: t.id,
                            name: Object(b.a)(e("user.self"), ["name"], t),
                            avatar: Object(b.a)(m.a, ["socialProfile", "avatar"], t),
                            email: Object(b.a)(null, ["socialProfile", "email"], t)
                        }
                    }, [t, e])
                },
                j = n("SsZN"),
                E = n("Wjfv"),
                w = n("K7i0"),
                y = n("fsHk"),
                C = n("da4L"),
                A = n("i9gz"),
                k = (n("JhcM"), /\r?\n|\r/g),
                S = function ConversationHistoryListItem(e) {
                    var t, n, a = e.conversation,
                        r = void 0 === a ? {} : a,
                        f = Object(l.a)().onToggleConversationHistory,
                        m = Object(v.a)().t,
                        S = Object(h.b)(),
                        N = O(),
                        T = Object(g.useMemo)(function() {
                            return Object(b.a)(null, ["conversation", "id"], r)
                        }, [r]),
                        L = Object(u.a)(T),
                        M = Object(g.useMemo)(function() {
                            return Object(b.a)(null, ["authorId"], L)
                        }, [L]),
                        I = Object(d.a)(M).recipient,
                        R = Object(C.i)(L),
                        x = Object(s.a)(M, I.bot, R),
                        D = function toggleConversation(e) {
                            return function() {
                                e && (f(!1), S(Object(E.a)()), S(Object(w.q)({
                                    conversationId: e
                                })), Object(j.f)(e))
                            }
                        };
                    if (Object(A.a)(L)) return null;
                    var F = L.createdAt,
                        B = L.attributes,
                        P = void 0 === B ? {} : B,
                        G = F || (null === P || void 0 === P ? void 0 : P.generatedAt),
                        U = y.a.isTimeToday(G),
                        _ = U ? y.a.unixFormatDateTime(G, m("dt.format.time.short")) : y.a.unixFormatDateTime(G, m("dt.format.date.short")),
                        V = R ? N.name : I.name,
                        z = !!(null === P || void 0 === P ? void 0 : null === (t = P.preview) || void 0 === t ? void 0 : null === (n = t.replace(k, "")) || void 0 === n ? void 0 : n.trim()),
                        H = "".concat(U ? "today at ".concat(_) : "on ".concat(_)),
                        K = "".concat(z ? "Conversation preview: ".concat(P.preview, ".") : ""),
                        Z = "Agent ".concat(V, " is currently ").concat(x, ". "),
                        Q = "".concat(Z, " Click to open conversation with ").concat(V, " ").concat(H, ". ").concat(K);
                    return p.a.createElement("li", {
                        className: "drift-widget-conversation-list-item"
                    }, p.a.createElement("div", {
                        "aria-label": Q,
                        className: "drift-widget-conversation-list-item-body",
                        onClick: D(r.conversation.id),
                        onKeyDown: Object(i.a)(D(r.conversation.id)),
                        role: "button",
                        tabIndex: 0
                    }, R ? p.a.createElement(o.a, {
                        size: "SMALL",
                        className: "drift-widget-conversation-list-item-avatar",
                        image: N.avatar
                    }) : p.a.createElement(c.a, {
                        size: "SMALL",
                        className: "drift-widget-conversation-list-item-avatar",
                        image: I.avatarUrl,
                        id: M,
                        keyPrefix: T
                    }), p.a.createElement("div", {
                        className: "drift-widget-conversation-list-item-content"
                    }, p.a.createElement("h2", null, V), p.a.createElement("span", {
                        className: "drift-widget-conversation-list-item-time"
                    }, _), p.a.createElement("p", {
                        className: "drift-widget-conversation-list-item-last-message"
                    }, P.preview))))
                },
                N = n("DboL"),
                T = n("9xv8");
            n("PGb/"), t.a = function ConversationHistory() {
                var e = Object(l.a)().conversationHistoryOpen,
                    t = Object(h.c)(function(e) {
                        return e.conversations.conversations
                    }),
                    n = Object(g.useMemo)(function() {
                        var e;
                        return null !== (e = Object(T.d)(Object(N.a)(t), "updatedAt")) && void 0 !== e ? e : []
                    }, [t]),
                    a = Object(g.useMemo)(function() {
                        return p.a.createElement("ul", {
                            className: "drift-widget-conversation-history-list"
                        }, n.map(function(e) {
                            return p.a.createElement(S, {
                                key: e.conversation.id,
                                conversation: e
                            })
                        }))
                    }, [n]);
                return p.a.createElement("div", {
                    className: r()("drift-widget-conversation-history", {
                        "drift-widget-conversation-history--open": e
                    }),
                    "aria-hidden": !e
                }, e && a)
            }
        },
        vwUF: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "b", function() {
                    return a
                }), n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.NONE = "NONE", e.PENDING = "PENDING", e.ERROR = "ERROR", e.SIZE_ERROR = "SIZE_ERROR"
                }(a || (a = {})),
                function(e) {
                    e[e.DEFAULT = 26214400] = "DEFAULT"
                }(r || (r = {}))
        },
        yAze: function(e, t, n) {},
        z24s: function(e, t, n) {
            "use strict";
            var a = n("s8DI"),
                r = n("ERkP");
            t.a = function useKeyboardNavigation(e) {
                var t = Object(r.useState)(!1),
                    n = Object(a.a)(t, 2),
                    i = n[0],
                    c = n[1],
                    o = Object(r.useCallback)(function(t) {
                        "Tab" === t.key && t.target === e.current && c(!0)
                    }, [e]),
                    s = Object(r.useCallback)(function(t) {
                        t.target === e.current && c(!1)
                    }, [e]);
                return Object(r.useEffect)(function() {
                    return window.addEventListener("keyup", o), window.addEventListener("focusout", s),
                        function() {
                            window.removeEventListener("keyup", o), window.removeEventListener("focusout", s)
                        }
                }, [s, o]), i
            }
        },
        zJmF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return Input
            });
            var a = n("jm9a"),
                r = n("hX/4"),
                i = n("O94r"),
                c = n.n(i),
                o = n("z24s"),
                s = n("ERkP"),
                l = n.n(s);
            n("BNKP");

            function Input(e) {
                var t, n = e.className,
                    i = void 0 === n ? "" : n,
                    u = e.shouldFocus,
                    d = void 0 === u || u,
                    f = Object(r.a)(e, ["className", "shouldFocus"]),
                    m = Object(s.useRef)(),
                    b = Object(o.a)(m);
                return Object(s.useEffect)(function() {
                    m.current && d && m.current.focus()
                }, [d]), l.a.createElement("input", Object.assign({
                    className: c()("drift-widget-input js-focus-visible--controlled", (t = {}, Object(a.a)(t, i, !!i), Object(a.a)(t, "keyboard-focused", b), t)),
                    ref: m
                }, f))
            }
        },
        zoZM: function(e, t, n) {}
    }
]);