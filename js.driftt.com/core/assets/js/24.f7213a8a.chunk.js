(window.webpackJsonp = window.webpackJsonp || []).push([
    [24], {
        "+f1A": function(e, t, n) {
            "use strict";
            n.d(t, "q", function() {
                return s
            }), n.d(t, "w", function() {
                return d
            }), n.d(t, "m", function() {
                return l
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, "a", function() {
                return b
            }), n.d(t, "t", function() {
                return O
            }), n.d(t, "u", function() {
                return p
            }), n.d(t, "r", function() {
                return v
            }), n.d(t, "k", function() {
                return E
            }), n.d(t, "s", function() {
                return g
            }), n.d(t, "e", function() {
                return j
            }), n.d(t, "g", function() {
                return _
            }), n.d(t, "h", function() {
                return I
            }), n.d(t, "f", function() {
                return C
            }), n.d(t, "l", function() {
                return h
            }), n.d(t, "p", function() {
                return m
            }), n.d(t, "c", function() {
                return T
            }), n.d(t, "v", function() {
                return y
            }), n.d(t, "o", function() {
                return S
            }), n.d(t, "i", function() {
                return R
            }), n.d(t, "j", function() {
                return A
            }), n.d(t, "n", function() {
                return N
            }), n.d(t, "d", function() {
                return x
            });
            var r = n("mj2O"),
                a = n.n(r),
                c = n("7SM1"),
                i = n("QtlZ"),
                o = n("NFvl"),
                u = n("LVcX"),
                s = function getSession() {
                    if (!i.a || !i.a.getState) return {};
                    var e = Object(i.b)().session;
                    return void 0 === e ? {} : e
                },
                d = function getVisitorTimezone(e) {
                    return Object(o.a)(["session", "context", "timezone"], e)
                },
                l = function getIntegrationCookiesFromStore(e) {
                    return Object(o.a)(["session", "integrationCookies"], e)
                },
                f = function() {
                    var e = Object(c.a)(a.a.mark(function _callee(e, t) {
                        return a.a.wrap(function _callee$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", Object(u.a)(null, ["session", "auth", "socket", "".concat(t)], e));
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee)
                    }));
                    return function getAuthForSocketConnection(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function getAssignedAgentId(e) {
                    return Object(u.a)(void 0, ["session", "assignedAgentId"], e)
                },
                O = function getSessionId(e) {
                    return Object(u.a)(void 0, ["session", "id"], e)
                },
                p = function getSiteVisits(e) {
                    return Object(u.a)(0, ["session", "visitInformation", "total"], e)
                },
                v = function getSessionContext(e) {
                    return Object(u.a)({}, ["session", "context"], e)
                },
                E = function getGdprConsentStatus(e) {
                    return Object(u.a)({}, ["session", "gdpr"], e)
                },
                g = function getSessionGeoInfo(e) {
                    return Object(u.a)({}, ["session", "geo"], e)
                },
                j = function getEndUser(e) {
                    return Object(u.a)({}, ["session", "endUser"], e)
                },
                _ = function getEndUserId(e) {
                    return Object(u.a)(0, ["session", "endUser", "id"], e)
                },
                I = function getEndUserType(e) {
                    return Object(u.a)("LEAD", ["session", "endUser", "type"], e)
                },
                C = function getEndUserEmail(e) {
                    return Object(u.a)("", ["session", "endUser", "email"], e)
                },
                h = function getInstanceId(e) {
                    return Object(u.a)("", ["session", "instanceId"], e)
                },
                m = function getPageHref(e) {
                    return Object(u.a)("", ["session", "context", "page", "href"], e)
                },
                T = function getCampaignRefreshToken(e) {
                    return Object(u.a)("", ["session", "campaignRefreshToken"], e)
                },
                y = function getUserAgent(e) {
                    return Object(u.a)("", ["session", "context", "userAgent"], e)
                },
                S = function getLeadId(e) {
                    return Object(u.a)(null, ["session", "endUser", "leadId"], e)
                },
                R = function getExternalId(e) {
                    return Object(u.a)(null, ["session", "endUser", "externalId"], e) || Object(u.a)(null, ["session", "externalId"], e)
                },
                A = function getFirstVisitTimestamp(e) {
                    return Object(u.a)(null, ["session", "visitInformation", "firstVisit"], e)
                },
                N = function getLastVisitTimestamp(e) {
                    return Object(u.a)(null, ["session", "visitInformation", "lastVisit"], e)
                },
                x = function getDebugLogs(e) {
                    return Object(u.a)([], ["session", "debugLogs"], e)
                }
        },
        "+oIK": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return I
            }), n.d(t, "b", function() {
                return C
            });
            var r = n("nfbA"),
                a = n("LeJ0"),
                c = n("QtlZ"),
                i = n("xwTo"),
                o = n("Hvhg"),
                u = n("SFoa"),
                s = n("PCkZ"),
                d = n("+f1A"),
                l = n("awwx"),
                f = n("LVcX"),
                b = n("hm8b"),
                O = n("i9gz"),
                p = n("ADGC"),
                v = n("MFhO"),
                E = n("PjZB"),
                g = n("0lfv"),
                j = {
                    widgetVersion: 2,
                    widgetRelease: "LOCAL" !== a.a.ENV ? "5b772216a3dec13b6a34edaa6ad931d9d5b50e4e" : "local"
                },
                _ = function hydrateContextAttributesForMessage() {
                    var e, t = Object(c.b)();
                    return Object(r.a)(Object(r.a)({
                        locale: Object(u.f)()
                    }, function attachCampaignAttributesForMessage() {
                        var e = {},
                            t = Object(c.b)().campaigns,
                            n = void 0 === t ? {} : t,
                            r = n.activeCampaign,
                            a = void 0 === r ? {} : r,
                            i = n.campaignEvalId;
                        return a.id && (e.campaignId = a.id, e.relatedCampaignId = a.id, e.isExpandable = !0), i && (e.targetingEvalUUID = i), e
                    }()), {}, {
                        integrations: Object(s.b)(),
                        assignedAgentId: Object(d.a)(t),
                        siteVisits: Object(d.u)(t),
                        sentOfflineHours: !(null === (e = t.view) || void 0 === e ? void 0 : e.matchedHours)
                    })
                },
                I = function createMessage(e) {
                    var t = e.message,
                        n = void 0 === t ? "" : t,
                        a = e.activeConversation,
                        s = e.attributes,
                        v = void 0 === s ? {} : s,
                        I = e.isMetaMessage,
                        C = void 0 !== I && I,
                        h = e.authorId,
                        T = e.status,
                        y = e.attachments,
                        S = void 0 === y ? [] : y,
                        R = e.preMessages,
                        A = void 0 === R ? [] : R,
                        N = e.inboxId,
                        x = e.type,
                        w = void 0 === x ? E.e.CHAT : x,
                        L = e.contentType,
                        D = void 0 === L ? E.c.CHAT : L,
                        M = e.isEndUserMessage,
                        H = void 0 === M || M,
                        k = Object(c.b)(),
                        U = Object(f.a)({
                            context: {}
                        }, ["session"], k),
                        G = Object(f.a)(E.b.LEAD, ["session", "endUser", "type"], k),
                        V = function getActiveCampaign(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return t.withGreeting && t.interactionId ? Object(u.c)(t.interactionId) : Object(f.a)(null, ["campaigns", "activeCampaign"], e)
                        }(k, v),
                        P = Object(f.a)({}, ["embed", "configuration"], k).profileMode,
                        F = void 0 !== P && P,
                        B = Object(o.d)(k, "messageAttributes", {}),
                        W = Object(f.a)(!1, ["isTriggeredFromAPI"], v),
                        J = Object(p.c)(!0),
                        z = m(N),
                        X = Object(b.a)(A) || Object(O.a)(A) ? function _applyPremessagesForMessage(e, t, n) {
                            var r = Object(c.b)(),
                                a = Object(f.a)({}, ["embed", "configuration"], r),
                                o = a.team,
                                u = a.theme,
                                s = void 0 === u ? {} : u,
                                d = Object(l.b)(r),
                                O = Object(f.a)("", ["attributes", "message"], t),
                                p = Object(f.a)(null, ["attributes", "senderId"], t),
                                v = Object(f.a)([], ["embed", "welcomeMessageUsers"], r),
                                E = [];
                            if (e) return E;
                            var g = o.find(function(e) {
                                    return e.bot
                                }),
                                j = p || d || (v && v.length ? v[0] : null === g || void 0 === g ? void 0 : g.id) || null,
                                _ = Object(b.a)(Object(i.b)(r));
                            return j && _ && !n && E.push({
                                body: O || s.welcomeMessage,
                                sender: o.find(function(e) {
                                    return e.id === j
                                })
                            }), E
                        }(a, V, W) : A,
                        K = _(),
                        Y = H ? Object(g.x)() : void 0;
                    return {
                        attachments: S,
                        conversationId: a,
                        body: n,
                        type: w,
                        status: T,
                        contentType: D,
                        authorId: h,
                        authorType: G,
                        inboxId: z,
                        attributes: Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({}, v), {}, {
                            embedId: Object(o.e)(k),
                            widgetGuid: Y,
                            isMetaMessage: C,
                            generatedAt: Date.now().valueOf(),
                            autoAssigneeId: Object(l.b)(k),
                            profileMode: F,
                            preMessages: X,
                            isFirstMessage: !a
                        }, j), K), B),
                        context: {
                            userAgent: U.context.userAgent,
                            timezone: U.context.timezone,
                            locale: U.context.locale,
                            page: U.context.page,
                            ip: Object(d.s)(k).ip,
                            isMobile: J
                        }
                    }
                },
                C = function createPreMessagesForCampaign(e) {
                    var t = e.body,
                        n = e.attributes,
                        r = (n = void 0 === n ? {} : n).title,
                        a = void 0 === r ? null : r,
                        c = n.senderId,
                        i = void 0 === c ? null : c,
                        o = n.noSenderId,
                        u = void 0 !== o && o,
                        s = n.automaticSender,
                        d = void 0 !== s && s,
                        l = n.campaignDisplayType,
                        f = (void 0 === l ? null : l) === v.a.WELCOME_MESSAGE,
                        b = h(i, u, d),
                        O = [];
                    return a && !f && O.push({
                        id: Object(g.x)(),
                        body: a,
                        sender: b
                    }), t && O.push({
                        id: Object(g.x)(),
                        body: t,
                        sender: b
                    }), O
                },
                h = function getSender(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (t) return null;
                    var r = Object(c.b)(),
                        a = Object(f.a)({}, ["embed", "configuration"], r),
                        i = a.autoAssigneeId,
                        o = a.team,
                        u = Object(d.a)(r),
                        s = i || u;
                    return n && s ? o.find(function(e) {
                        return e.id === s
                    }) : o.find(function(t) {
                        return t.id === e
                    })
                },
                m = function resolveInboxIdForMessage(e) {
                    var t = Object(c.b)(),
                        n = Object(o.d)(t, "inboxId"),
                        r = Object(o.l)(t);
                    if (!Object(b.a)(r)) return r;
                    if (!Object(b.a)(e)) return e;
                    var a = Object(f.a)(null, ["conversations", "activeConversation"], t),
                        i = Object(f.a)(null, ["conversations", "conversations", a, "conversation"], t);
                    if (!Object(b.a)(i)) return i.inboxId;
                    var u = Object(f.a)(null, ["campaigns", "activeCampaign", "inboxId"], t);
                    return Object(b.a)(u) ? n : u
                }
        },
        "1tbh": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("mssF"),
                a = n("0lfv"),
                c = function sendMessageRoundTripMetric(e) {
                    var t = e.message,
                        n = e.timedOut,
                        c = void 0 !== n && n,
                        i = t.attributes,
                        o = void 0 === i ? {} : i;
                    if (o.generatedAt) {
                        var u = {
                                isTimeout: c,
                                isFirstMessage: o.isFirstMessage,
                                widgetGuid: o.widgetGuid,
                                messageId: t.id,
                                conversationId: t.conversationId
                            },
                            s = Date.now() - o.generatedAt,
                            d = o.isFirstMessage ? "conversationRoundTripTime" : "messageRoundTripTime";
                        c ? Object(a.y)(["Round-trip timed out for message ".concat(t.id)]) : Object(a.o)({
                            data: ["Round-trip time for message ".concat(t.id, " completed in ").concat(s)]
                        });
                        try {
                            Object(r.f)({
                                name: d,
                                value: s,
                                context: u
                            })
                        } catch (l) {
                            Object(a.f)(l)
                        }
                    }
                }
        },
        "2XY6": function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return o
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return f
            }), n.d(t, "d", function() {
                return b
            }), n.d(t, "e", function() {
                return O
            });
            var r = n("sxX9"),
                a = n("ILQF"),
                c = n("i9gz"),
                i = n("ADGC"),
                o = function shouldWidgetIconDisplay(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = u(e, t);
                    return Object(a.a)({
                        topic: "sc::should-display-legacy-chat",
                        message: {
                            shouldDisplay: n
                        }
                    }), n
                },
                u = function _shouldWidgetIconDisplay(e) {
                    var t, n, r, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = e.view,
                        u = void 0 === o ? {} : o,
                        s = e.conversations,
                        d = void 0 === s ? {} : s,
                        l = e.embed,
                        f = void 0 === l ? {} : l,
                        b = e.campaigns,
                        O = void 0 === b ? {} : b,
                        p = u.forceHideIcon,
                        v = a || u.matchedTargeting,
                        E = d.hasForcedConversation,
                        g = !Object(i.c)(),
                        j = E && g,
                        _ = !!(null === O || void 0 === O ? void 0 : null === (t = O.activeCampaign) || void 0 === t ? void 0 : t.id) || !!d.activeConversation,
                        I = !Object(c.a)(d.conversations),
                        C = !!(null === f || void 0 === f ? void 0 : null === (n = f.configuration) || void 0 === n ? void 0 : null === (r = n.gates) || void 0 === r ? void 0 : r.show_chat_existing_conversations);
                    return !p && (!(!C || !I) || !(!g && u.chatOpen) && (v || j || _))
                },
                s = function widgetIconVisible(e) {
                    return function controllerOpen(e) {
                        var t = e.view;
                        return (void 0 === t ? {} : t).controllerOpen
                    }(e) && o(e)
                },
                d = function isChatOpen(e) {
                    var t = e.view;
                    return (void 0 === t ? {} : t).chatOpen
                },
                l = function getIsInitComplete(e) {
                    var t = e.view;
                    return !!(void 0 === t ? {} : t).initComplete
                },
                f = function chatHeaderType(e) {
                    var t = e.view,
                        n = void 0 === t ? {} : t,
                        a = e.campaigns,
                        c = void 0 === a ? {} : a,
                        i = e.conversations,
                        o = void 0 === i ? {} : i,
                        u = e.session;
                    return (void 0 === u ? {} : u).gdpr.hasConsent ? n.isChatTakeover ? r.b.CHAT_TAKEOVER : o.activeConversation ? r.b.CONVERSATION : c.activeCampaign.id ? r.b.WELCOME_MESSAGE : r.b.GREETING : r.b.GDPR
                },
                b = function isFastLaneCampaign(e) {
                    return e.view.isChatTakeover
                },
                O = function isXSScreenSize(e) {
                    return e.view.xsScreenSize
                }
        },
        "6KaP": function(e, t, n) {
            "use strict";
            var r = n("hhh8"),
                a = n("uIJS"),
                c = n("LvsC"),
                i = n("qytN"),
                o = n("7jL2"),
                u = n("QtlZ"),
                s = n("SFoa"),
                d = n("+f1A"),
                l = n("7BJg");

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(o.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var r = Object(o.a)(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return Object(i.a)(this, t)
                }
            }
            var f = 5e3,
                b = new(function(e) {
                    Object(c.a)(LogsEventBuffer, e);
                    var t = _createSuper2(LogsEventBuffer);

                    function LogsEventBuffer() {
                        var e;
                        return Object(a.a)(this, LogsEventBuffer), (e = t.call(this, f)).createLogPayload = function(e) {
                            return {
                                application: "widget",
                                orgId: Object(s.h)(),
                                endUserId: Object(d.g)(Object(u.b)()),
                                userAgent: navigator.userAgent,
                                logEvents: e
                            }
                        }, e._publishBuffer = function() {
                            e._events.length && (Object(r.b)(e.createLogPayload(e._events)), e._resetBuffer())
                        }, e
                    }
                    return LogsEventBuffer
                }(l.a));
            n.d(t, "a", function() {
                return O
            });
            var O = function logInternally(e) {
                var t = e.message,
                    n = e.level,
                    a = void 0 === n ? r.a.INFO : n;
                b.push({
                    timestamp: Date.now(),
                    level: a,
                    message: t
                })
            }
        },
        CYoe: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "e", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "d", function() {
                return u
            });
            var r = n("Cpup"),
                a = function receiveMarkedTime(e, t) {
                    return Object(r.a)({
                        type: "RECEIVE_MARKED_TIME",
                        payload: {
                            name: e,
                            time: t
                        }
                    })
                },
                c = function deleteMarkedTime(e) {
                    return Object(r.a)({
                        type: "DELETE_MARKED_TIME",
                        payload: {
                            name: e
                        }
                    })
                },
                i = function setHasSentImpression() {
                    return Object(r.a)({
                        type: "SET_HAS_SENT_IMPRESSION"
                    })
                },
                o = function receiveInitTimestamp(e) {
                    return Object(r.a)({
                        type: "RECEIVE_INIT_TIMESTAMP",
                        payload: e
                    })
                },
                u = function receiveServerResponseSize(e) {
                    return Object(r.a)({
                        type: "RECEIVE_SERVER_RESPONSE_SIZE",
                        payload: e
                    })
                }
        },
        OA1u: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return a
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "a", function() {
                return s
            });
            var r = n("Cpup"),
                a = function setShouldSkipCampaigns(e) {
                    return Object(r.a)({
                        type: "SET_SHOULD_SKIP_CAMPAIGNS",
                        payload: e
                    })
                },
                c = function setShouldSkipWidgetTargeting(e) {
                    return Object(r.a)({
                        type: "SET_SHOULD_SKIP_WIDGET_TARGETING",
                        payload: e
                    })
                },
                i = function setShouldForceShowWidget(e) {
                    return Object(r.a)({
                        type: "SET_SHOULD_FORCE_SHOW_WIDGET",
                        payload: e
                    })
                },
                o = function updateOnlineStatus(e) {
                    return Object(r.a)({
                        type: "UPDATE_ONLINE_STATUS",
                        payload: e
                    })
                },
                u = function setHasExitIntent() {
                    return Object(r.a)({
                        type: "SET_HAS_EXIT_INTENT"
                    })
                },
                s = function receiveInitialCombinedAvailability(e) {
                    return Object(r.a)({
                        type: "RECEIVE_INITIAL_COMBINED_AVAILABILITY",
                        payload: e
                    })
                }
        },
        "X9/c": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return b
            }), n.d(t, "d", function() {
                return O
            }), n.d(t, "b", function() {
                return p
            });
            var r, a = n("mj2O"),
                c = n.n(a),
                i = n("7SM1"),
                o = n("QtlZ"),
                u = n("7oh4"),
                s = n("ILQF"),
                d = n("vTYT");
            ! function(e) {
                e.SHOW = "show", e.HIDE = "hide", e.NONE = "none"
            }(r || (r = {}));
            var l = function setControllerDimensions() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    Object(s.a)({
                        topic: "set-frame-dimensions",
                        message: {
                            height: "".concat(e, "px"),
                            name: "controller",
                            width: "".concat(t, "px")
                        }
                    })
                },
                f = function setControllerHeight() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.NONE;
                    Object(s.a)({
                        topic: "set-frame-height",
                        message: {
                            height: "".concat(e, "px"),
                            name: "controller",
                            max: !1,
                            intent: t
                        }
                    })
                },
                b = function() {
                    var e = Object(i.a)(c.a.mark(function _callee() {
                        var e;
                        return c.a.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(s.a)({
                                        topic: "get-frame-height",
                                        message: {
                                            name: "controller"
                                        }
                                    });
                                case 2:
                                    if (!(e = t.sent) || "0px" !== e.data) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    Object(s.a)({
                                        topic: "hide-frame-from-screen-reader",
                                        message: {
                                            name: d.d.CONTROLLER
                                        }
                                    }), f(0, r.HIDE);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee)
                    }));
                    return function hideWidgetController() {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(i.a)(c.a.mark(function _callee2() {
                        var e;
                        return c.a.wrap(function _callee2$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(s.a)({
                                        topic: "get-frame-height",
                                        message: {
                                            name: "controller"
                                        }
                                    });
                                case 2:
                                    if (!(e = t.sent) || "0px" === e.data) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    Object(s.a)({
                                        topic: "show-frame-to-screen-reader",
                                        message: {
                                            name: d.d.CONTROLLER
                                        }
                                    }), f(u.a, r.SHOW);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee2)
                    }));
                    return function showWidgetController() {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function resetControllerSize() {
                    Object(o.b)().view.canResizeController && Object(s.a)({
                        topic: "reset-controller-size"
                    })
                }
        },
        YA8z: function(e, t, n) {
            "use strict";
            var r = n("zygl"),
                a = n("UXSh"),
                c = n("iL91"),
                i = n("BHzW"),
                o = n("9udt"),
                u = n("6iwg"),
                s = n("7Dgk"),
                d = n("uzby"),
                l = n("ILQF"),
                f = n("r/xD"),
                b = n("Cpup"),
                O = {
                    sentryConfig: f.c,
                    longPollConfig: f.b
                },
                p = Object(b.b)(O, {
                    RECEIVE_SENTRY_CONFIG: function receiveSentryConfig(e) {
                        var t = e.action;
                        e.draft.sentryConfig = t.payload, Object(l.a)({
                            topic: "set-value-on-host-window",
                            message: {
                                key: "drift_sentry_config",
                                value: t.payload
                            }
                        })
                    },
                    RECEIVE_LONG_POLL_CONFIG: function receiveLongPollConfig(e) {
                        var t = e.action;
                        e.draft.longPollConfig = t.payload
                    }
                }),
                v = n("CYoe"),
                E = function handleReceiveMarkedtime(e) {
                    var t = e.action;
                    e.draft.timeByName[t.payload.name] = t.payload.time
                },
                g = {
                    RECEIVE_MARKED_TIME: E,
                    RECEIVE_MESSAGE_SENT: function handleReceiveMessageSent(e) {
                        var t, n, r = e.action,
                            a = e.draft;
                        if (null === (n = ((null === (t = r.payload) || void 0 === t ? void 0 : t.message) || {}).attributes) || void 0 === n ? void 0 : n.relatedCampaignId) return E({
                            action: Object(v.c)("meeting_scheduler_rtt", Date.now()),
                            draft: a
                        })
                    },
                    DELETE_MARKED_TIME: function handleDeleteMarkedtime(e) {
                        var t = e.action;
                        delete e.draft.timeByName[t.payload.name]
                    },
                    RECEIVE_INIT_TIMESTAMP: function receiveInitTimestampHandler(e) {
                        var t = e.action;
                        e.draft.initTimestamp = t.payload
                    },
                    RECEIVE_SERVER_RESPONSE_SIZE: function receiveServerResponseSizeHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = t.payload.size;
                        n.loadCostInBytes += r
                    }
                },
                j = Object(b.b)({
                    loadCostInBytes: 0,
                    initTimestamp: null,
                    timeByName: {}
                }, g),
                _ = n("mj2O"),
                I = n.n(_),
                C = n("7SM1"),
                h = n("mssF"),
                m = n("QtlZ"),
                T = n("SsZN"),
                y = n("K7i0"),
                S = n("xwTo"),
                R = n("PCkZ"),
                A = n("LVcX"),
                N = n("U3QC"),
                x = n("icD7"),
                w = n("z5yO"),
                L = n("4HYP"),
                D = n("+D5C"),
                M = n("0lfv"),
                H = n("+f1A"),
                k = n("nfbA"),
                U = n("mfas"),
                G = {
                    IDENTIFY_LEAD: function identifyLeadHandler(e) {
                        var t, n = e.action;
                        e.draft.endUser.email = null === (t = n.payload) || void 0 === t ? void 0 : t.email
                    },
                    RECEIVE_GEO: function receiveGeoHandler(e) {
                        var t = e.action;
                        e.draft.geo = t.payload
                    },
                    RECEIVE_ACCESS_TOKEN: function receiveAccessTokenHandler(e) {
                        var t = e.action;
                        e.draft.auth.accessToken = t.payload.accessToken
                    },
                    RECEIVE_CHAT_SOCKET_AUTH: function receiveChatSocketAuthHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.auth.socket = Object(k.a)(Object(k.a)({}, n.auth.socket), {}, {
                            chat: t.payload
                        })
                    },
                    RECEIVE_PRESENCE_SOCKET_AUTH: function receivePresenceSocketAuthHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.auth.socket = Object(k.a)(Object(k.a)({}, n.auth.socket), {}, {
                            visitor_presence: t.payload
                        })
                    },
                    RECEIVE_SOCKET: function receiveSocketHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = Object(A.a)(null, ["payload", "cluster"], t);
                        r && (n.sockets[r] = {
                            channels: {}
                        })
                    },
                    RECEIVE_CHANNEL: function receiveChannelHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = Object(A.a)(null, ["payload", "cluster"], t);
                        r && (n.sockets[r].channels[t.payload.key] = t.payload.channel)
                    },
                    RECEIVE_END_USER: function receiveEndUserHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = !!t.payload.assignedAgentId;
                        n.endUser = Object(k.a)(Object(k.a)({}, n.endUser), t.payload.endUser), n.isOutbound = r, r && (n.assignedAgentId = t.payload.assignedAgentId)
                    },
                    RECEIVE_EXTERNAL_ID: function receiveExternalIdHandler(e) {
                        var t = e.action;
                        e.draft.externalId = t.payload
                    },
                    UPDATE_INSTANCE_ID: function updateInstanceIdHandler(e) {
                        var t = e.action;
                        e.draft.instanceId = t.payload
                    },
                    RECEIVE_EXTERNAL_EMAIL: function receiveExternalEmailHandler(e) {
                        var t = e.action;
                        e.draft.endUser.externalEmail = t.payload
                    },
                    RECEIVE_EXTERNAL_JWT: function receiveExternalJwtHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.endUser.userJwt = t.payload, n.endUser.waitForUserJwt = !1
                    },
                    WAIT_FOR_EXTERNAL_JWT: function waitForExternalJwtHandler(e) {
                        e.action;
                        e.draft.endUser.waitForUserJwt = !0
                    },
                    RECEIVE_GDPR: function receiveGDPRHandler(e) {
                        var t, n = e.action,
                            r = e.draft;
                        r.gdpr = Object(k.a)(Object(k.a)({}, r.gdpr), null !== (t = null === n || void 0 === n ? void 0 : n.payload) && void 0 !== t ? t : {})
                    },
                    DECLINED_GDPR: function declinedGDPRHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.gdpr = Object(k.a)(Object(k.a)({}, n.gdpr), {}, {
                            declinedConsent: t.payload
                        })
                    },
                    RECEIVE_CONTEXT: function receiveContextHandler(e) {
                        var t = e.action;
                        e.draft.context = t.payload
                    },
                    RECEIVE_SESSION: function receiveSessionHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.id = t.payload.session.sessionId, n.sessionStarted = t.payload.session.sessionStarted, n.campaignRefreshToken = t.payload.session.campaignRefreshToken, n.instanceId = t.payload.session.instanceId
                    },
                    RECEIVE_COOKIE_DOMAIN: function receiveCookieDomainHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = Object(A.a)(null, ["payload", "cookieDomain"], t);
                        n.cookieDomain = r
                    },
                    RECEIVE_VISIT_INFO: function receiveVisitInformation(e) {
                        var t = e.action;
                        e.draft.visitInformation = t.payload
                    },
                    RECEIVE_INTEGRATION_COOKIES: function receiveIntegrationCookies(e) {
                        var t = e.action;
                        e.draft.integrationCookies = t.payload
                    },
                    RECEIVE_EXTERNAL_IDENTITY: function receiveExternalIdentityHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = Object(U.a)(["_meta"], t.payload);
                        n.externalIdentity = Object(k.a)(Object(k.a)({}, n.externalIdentity), r)
                    },
                    RECEIVE_DEBUG_LOG: function receiveDebugLogHandler(e) {
                        var t, n, r = e.action,
                            a = e.draft,
                            c = {
                                debugLog: null === (t = r.payload) || void 0 === t ? void 0 : t.debugLog,
                                order: null === (n = r.payload) || void 0 === n ? void 0 : n.order
                            };
                        a.debugLogs ? a.debugLogs.push(c) : a.debugLogs = [c]
                    }
                },
                V = Object(b.b)({
                    geo: null,
                    auth: {},
                    sockets: {},
                    endUser: {},
                    isOutbound: !1,
                    gdpr: {
                        needsConsent: !0,
                        hasConsent: !1,
                        declinedConsent: !1
                    },
                    externalId: null,
                    instanceId: null,
                    id: null,
                    sessionStarted: null,
                    campaignRefreshToken: null,
                    cookieDomain: "",
                    context: {
                        page: {},
                        timezone: "",
                        userAgent: "",
                        locale: ""
                    },
                    externalIdentity: {
                        externalId: null,
                        attributes: {},
                        options: {}
                    },
                    integrationCookies: {},
                    visitInformation: {},
                    debugLogs: null
                }, G),
                P = {
                    SET_HAS_EXIT_INTENT: function setHasExitIntentHandler(e) {
                        e.draft.hasExitIntent = !0
                    },
                    UPDATE_ONLINE_STATUS: function updateOnlineStatusHandler(e) {
                        var t = e.action;
                        e.draft.isOnline = t.payload
                    },
                    SET_SHOULD_SKIP_CAMPAIGNS: function setShouldSkipCampaignsHandler(e) {
                        var t = e.action;
                        e.draft.skipCampaigns = t.payload
                    },
                    SET_SHOULD_FORCE_SHOW_WIDGET: function setShouldForceShowWidgetHandler(e) {
                        var t = e.action;
                        e.draft.forceShowWidget = t.payload
                    },
                    SET_SHOULD_SKIP_WIDGET_TARGETING: function setShouldSkipWidgetTargetingHandler(e) {
                        var t = e.action;
                        e.draft.skipWidgetTargeting = t.payload
                    },
                    RECEIVE_INITIAL_COMBINED_AVAILABILITY: function receiveInitialCombinedAvailabilityHandler(e) {
                        var t = e.action;
                        e.draft.initialCombinedAvailability = t.payload
                    }
                },
                F = Object(b.b)({
                    initialCombinedAvailability: {},
                    skipCampaigns: !1,
                    skipWidgetTargeting: !1,
                    forceShowWidget: !1,
                    isOnline: !1,
                    hasExitIntent: !1
                }, P),
                B = n("vjCh"),
                W = n("bukc"),
                J = n("0HCW"),
                z = n("qixE"),
                X = n("SFoa"),
                K = n("TDUE"),
                Y = n("qwiD"),
                Z = n("X9/c"),
                $ = n("Jg5f"),
                Q = n("iJtH"),
                q = n("ADGC"),
                ee = n("MFhO"),
                te = n("t8ds"),
                ne = n("g6eD"),
                re = n("2XY6"),
                ae = function hasActiveConversation(e) {
                    return !!e.conversations.activeConversation
                },
                ce = function() {
                    var e = Object(C.a)(I.a.mark(function _callee() {
                        var e;
                        return I.a.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = Object(m.b)(), !ae(e) && !Object(J.j)(e)) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5, Object(z.f)();
                                case 5:
                                    if (!t.sent) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    return t.next = 10, Object(B.i)();
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee)
                    }));
                    return function showFallbackChatContentIfNeeded() {
                        return e.apply(this, arguments)
                    }
                }(),
                ie = function checkAndToggleController(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = Object(re.f)(e, n);
                    t && a ? (r && m.a.dispatch(Object(ne.o)()), Object(Z.d)()) : (r && m.a.dispatch(Object(ne.n)()), Object(Z.a)())
                },
                oe = n("hm8b"),
                ue = {
                    INIT_COMPLETE: function toggleInitCompleteHandler(e) {
                        var t = e.action;
                        e.draft.initComplete = t.payload.initComplete
                    },
                    SET_CLOSE_CHAT_REDIRECT_URL: function setCloseChatRedirectUrl(e) {
                        var t = e.action;
                        e.draft.closeChatRedirectUrl = t.payload
                    },
                    OPEN_CHAT: function chatOpenHandler(e) {
                        e.draft.chatOpen = !0
                    },
                    CLOSE_CHAT: function chatClosedHandler(e) {
                        e.draft.chatOpen = !1
                    },
                    TOGGLE_CAN_RESIZE_CONTROLLER: function toggleCanResizeControllerHandler(e) {
                        var t = e.action;
                        e.draft.canResizeController = t.payload
                    },
                    TOGGLE_CHAT_TAKEOVER: function toggleChatTakeoverHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.isChatTakeover = !!t.payload, t.payload && (n.conversationHistoryOpen = !1, n.sendTranscriptOpen = !1)
                    },
                    TOGGLE_CONVERSATION_HISTORY: function toggleConversationHistoryHandler(e) {
                        var t = e.action;
                        e.draft.conversationHistoryOpen = t.payload.conversationHistoryOpen
                    },
                    TOGGLE_SEND_TRANSCRIPT: function toggleSendTranscriptHandler(e) {
                        var t = e.action;
                        e.draft.sendTranscriptOpen = t.payload.sendTranscriptOpen
                    },
                    TOGGLE_WIDGET_TARGETING_MATCHED: function toggleWidgetTargetingCompleteHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = t.payload,
                            a = r.matchedHours,
                            c = r.matchedTargeting;
                        Object(oe.a)(a) || (n.matchedHours = a), Object(oe.a)(c) || (n.matchedTargeting = c)
                    },
                    AUTO_SCROLL_CHAT_TO_BOTTOM: function autoScrollChatToBottomHandler(e) {
                        var t = e.action;
                        e.draft.shouldAutoScrollChatToBottom = t.payload
                    },
                    FORCE_HIDE_ICON: function forceHideIconHandler(e) {
                        var t = e.action;
                        e.draft.forceHideIcon = t.payload
                    },
                    SHOW_CONTROLLER: function controllerShowHandler(e) {
                        e.draft.controllerOpen = !0
                    },
                    HIDE_CONTROLLER: function controllerHideHandler(e) {
                        e.draft.controllerOpen = !1
                    },
                    SET_XS_SCREEN_SIZE: function setXSScreenSizeHandler(e) {
                        var t = e.action;
                        e.draft.xsScreenSize = t.payload
                    },
                    IS_COHABITING: function setIsCohabiting(e) {
                        var t = e.draft;
                        t.isCohabiting = !t.isCohabiting
                    },
                    HIDE_PREVIEW_ON_INITIAL_RENDER: function hidePreviewOnInitialRenderHandler(e) {
                        var t = e.action;
                        e.draft.hidePreviewUntilAfterInitialRender = t.payload
                    }
                },
                se = Object(b.b)({
                    canResizeController: !0,
                    chatOpen: !1,
                    controllerOpen: !0,
                    closeChatRedirectUrl: null,
                    conversationHistoryOpen: !1,
                    sendTranscriptOpen: !1,
                    initComplete: !1,
                    isChatTakeover: !1,
                    matchedHours: !1,
                    matchedTargeting: !1,
                    xsScreenSize: !1,
                    isCohabiting: !1,
                    hidePreviewUntilAfterInitialRender: !1
                }, ue),
                de = n("9OUN"),
                le = n("Obtf");
            n.d(t, "b", function() {
                return be
            }), n.d(t, "a", function() {
                return Oe
            });
            var fe = Object(de.c)({
                    view: se,
                    embed: u.a,
                    metrics: j,
                    session: V,
                    targeting: F,
                    conversations: i.a,
                    campaigns: a.a,
                    identity: s.a,
                    impressions: d.a,
                    logging: p
                }),
                be = function rootReducer(e, t) {
                    return "REPLACE_STATE" === t.type && (e = t.payload.currentState), fe(e, t)
                },
                Oe = Object(le.a)(function onToggleChatEpic(e) {
                    return e.pipe(Object(b.c)("TOGGLE_CHAT"), Object(w.a)(function() {
                        return "controller" === m.a.name
                    }), Object(N.a)(function() {
                        var e = Object(C.a)(I.a.mark(function _callee2(e) {
                            var t, n;
                            return I.a.wrap(function _callee2$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (t = e.payload, n = !t.displayGreeting && !t.isChatTakeover && !t.isDriftLink, Object(T.d)(t.chatOpen), t.hasOwnProperty("isChatTakeover") && m.a.dispatch(Object(ne.l)(t.isChatTakeover)), Object(q.c)() || te.a.set(Q.b, t.chatOpen), !t.chatOpen) {
                                            r.next = 14;
                                            break
                                        }
                                        if (Object(Z.b)(), !n) {
                                            r.next = 10;
                                            break
                                        }
                                        return r.next = 10, ce();
                                    case 10:
                                        m.a.dispatch(Object(ne.k)()), m.a.dispatch(Object(ne.o)()), r.next = 16;
                                        break;
                                    case 14:
                                        m.a.dispatch(Object(ne.j)()), m.a.dispatch(Object(Y.q)({
                                            declinedConsent: !1
                                        }));
                                    case 16:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee2)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(x.a)())
                }, function onToggleControllerEpic(e) {
                    return e.pipe(Object(b.c)("TOGGLE_CONTROLLER"), Object(w.a)(function() {
                        return "controller" === m.a.name
                    }), Object(N.a)(function() {
                        var e = Object(C.a)(I.a.mark(function _callee3(e) {
                            var t, n;
                            return I.a.wrap(function _callee3$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        t = e.payload, n = Object(m.b)(), ie(n, t.controllerOpen, n.view.matchedTargeting, !0);
                                    case 3:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee3)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(x.a)())
                }, function onToggleWidgetMatchedTargeting(e) {
                    return e.pipe(Object(b.c)("TOGGLE_WIDGET_TARGETING_MATCHED"), Object(w.a)(function() {
                        return "controller" === m.a.name
                    }), Object(N.a)(function() {
                        var e = Object(C.a)(I.a.mark(function _callee4(e) {
                            var t, n;
                            return I.a.wrap(function _callee4$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        t = e.payload, n = Object(m.b)(), ie(n, n.view.controllerOpen, t.matchedTargeting, !1);
                                    case 3:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee4)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(x.a)())
                }, function dismissPreview(e) {
                    return e.pipe(Object(b.c)("DISMISS_PREVIEW"), Object(w.a)(function() {
                        return "controller" === m.a.name
                    }), Object(N.a)(Object(C.a)(I.a.mark(function _callee5() {
                        var e, t, n, r, a;
                        return I.a.wrap(function _callee5$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    e = Object(m.b)(), (t = Object(J.a)(e)) && (r = Object(X.b)(t.id), a = (null === r || void 0 === r ? void 0 : null === (n = r.attributes) || void 0 === n ? void 0 : n.displayType) || "bot", W.a[a]());
                                case 3:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee5)
                    }))), Object(x.a)())
                }, function onCloseChatCompleteCampaignEpic(e) {
                    return e.pipe(Object(b.c)("TOGGLE_CHAT"), Object(w.a)(function() {
                        return "controller" === m.a.name
                    }), Object(w.a)(function(e) {
                        return !e.payload.chatOpen
                    }), Object($.a)(function() {
                        return function activeCampaign(e) {
                            return e.campaigns.activeCampaign
                        }(Object(m.b)())
                    }), Object(w.a)(function(e) {
                        return !!e
                    }), Object(w.a)(function(e) {
                        return Object(A.a)(null, ["attributes", "campaignDisplayType"], e) === ee.a.WELCOME_MESSAGE
                    }), Object(N.a)(function(e) {
                        var t = Object(A.a)(null, ["id"], e),
                            n = Object(A.a)(null, ["attributes", "playbookId"], e);
                        Object(B.k)(t, n), Object(K.c)(n)
                    }), Object(x.a)())
                }, c.c, c.b, o.a, function pushToChannelEpic(e, t) {
                    return e.pipe(Object(b.c)("PUSH_TO_CHANNEL"), Object(N.a)(function(e) {
                        var n = e.meta,
                            r = e.payload,
                            a = n || {},
                            c = a.clusterName,
                            i = a.channelName,
                            o = a.eventName;
                        if (o && c && i) {
                            var u = Object(A.a)(null, ["session", "sockets", c, "channels", i], t.value);
                            u && u.push(o, r)
                        }
                    }), Object(x.a)())
                }, function updateEndUserEmailEpic(e, t) {
                    return e.pipe(Object(b.c)("IDENTIFY_LEAD"), Object(w.a)(function() {
                        return "controller" === m.a.name
                    }), Object(N.a)(function() {
                        var e = Object(C.a)(I.a.mark(function _callee(e) {
                            var n, r;
                            return I.a.wrap(function _callee$(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return n = e.payload.email, r = Object(H.i)(t.value), a.next = 4, Object(R.c)({
                                            email: n
                                        }, r);
                                    case 4:
                                        Object(T.h)({
                                            email: n
                                        });
                                    case 5:
                                    case "end":
                                        return a.stop()
                                }
                            }, _callee)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(x.a)())
                }, o.b, c.a, r.a, function refetchMessagesForActiveConversationOnChannelRejoin(e, t) {
                    return e.pipe(Object(b.c)("REJOIN_CHANNEL"), Object(w.a)(function() {
                        return "controller" === m.a.name
                    }), Object(w.a)(function(e) {
                        var t = e.payload,
                            n = t.channel,
                            r = t.shouldRefetchMessagesForActiveConversation,
                            a = D.b.USER && r;
                        return n === D.b.USER && !r && Object(M.o)({
                            data: ["Should not refetch messages for conversation"],
                            internal: !0
                        }), a
                    }), Object(L.a)(Object(C.a)(I.a.mark(function _callee2() {
                        var e, n, r, a;
                        return I.a.wrap(function _callee2$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = Object(S.a)(t.value), c.prev = 1, c.next = 4, Object(h.e)({
                                        conversationId: e,
                                        limit: 50,
                                        from: void 0
                                    });
                                case 4:
                                    return r = c.sent, a = null === r || void 0 === r ? void 0 : null === (n = r.data) || void 0 === n ? void 0 : n.data, Object(M.o)({
                                        data: ["Successfully refetched messages for conversation ".concat(e, " during socket rejoin")],
                                        internal: !0
                                    }), c.abrupt("return", Object(y.l)({
                                        conversationId: e,
                                        messages: a
                                    }));
                                case 10:
                                    c.prev = 10, c.t0 = c.catch(1), Object(M.o)({
                                        data: ["Error refetching messages for conversation ".concat(e, " during socket rejoin"), c.t0],
                                        internal: !0
                                    });
                                case 13:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee2, null, [
                            [1, 10]
                        ])
                    }))))
                })
        },
        awwx: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "c", function() {
                return s
            });
            var r = n("QtlZ"),
                a = n("+f1A"),
                c = n("NFvl"),
                i = n("LVcX"),
                o = function getTargetingPath(e, t) {
                    return t = t || Object(r.b)(), Object(c.a)(e, t.targeting)
                },
                u = function resolveAutoAssigneeId(e) {
                    var t = Object(a.a)(e),
                        n = Object(i.a)({}, ["embed", "configuration"], e).autoAssigneeId,
                        r = Object(i.a)(null, ["campaigns", "activeCampaign"], e),
                        c = Object(i.a)(!1, ["attributes", "automaticSender"], r);
                    return n || (t || (c ? Object(i.a)(void 0, ["attributes", "senderId"], r) : void 0))
                },
                s = function shouldSkipWidgetTargeting(e) {
                    return Object(c.a)(["targeting", "skipWidgetTargeting"], e)
                }
        },
        da4L: function(e, t, n) {
            "use strict";
            n.d(t, "q", function() {
                return j
            }), n.d(t, "g", function() {
                return _
            }), n.d(t, "r", function() {
                return I
            }), n.d(t, "s", function() {
                return C
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "h", function() {
                return T
            }), n.d(t, "j", function() {
                return y
            }), n.d(t, "m", function() {
                return S
            }), n.d(t, "n", function() {
                return R
            }), n.d(t, "a", function() {
                return A
            }), n.d(t, "d", function() {
                return N
            }), n.d(t, "i", function() {
                return x
            }), n.d(t, "l", function() {
                return L
            }), n.d(t, "f", function() {
                return D
            }), n.d(t, "k", function() {
                return M
            }), n.d(t, "t", function() {
                return k
            }), n.d(t, "b", function() {
                return U
            }), n.d(t, "e", function() {
                return G
            }), n.d(t, "o", function() {
                return V
            }), n.d(t, "p", function() {
                return P
            });
            var r = n("nfbA"),
                a = n("fsHk"),
                c = n("8lq6"),
                i = n("oQJ1"),
                o = n("dMPp"),
                u = n("yzXs"),
                s = n("YsSj"),
                d = n("DboL"),
                l = n("RhEL"),
                f = n("CDfd"),
                b = n("hm8b"),
                O = n("LVcX"),
                p = n("Jstd"),
                v = n("Ry6R"),
                E = n("PjZB"),
                g = n("0lfv"),
                j = Object(c.a)([Object(i.a)(Object(o.a)("createdAt"))]),
                _ = function isDirectAgentMessage(e) {
                    var t = w([e]),
                        n = N(e, "liveViewInitiated"),
                        r = "CREATE_CONVERSATION" === A(e, "newMessagePostSource");
                    return t && (n || r)
                },
                I = function shouldReceiveMessage(e) {
                    var t = !!e.attributes.__deleted,
                        n = e.contentType === E.c.CHAT && (!!e.body.length || !!e.attributes.appointmentInfo || !!e.attributes.startInteraction),
                        r = e.contentType === E.c.EMAIL_CAPTURE_CARD,
                        a = e.attachments && e.attachments.length > 0,
                        c = L(e) || D(e),
                        i = e.contentType === E.c.SMS_NUMBER_REQUESTED || e.contentType === E.c.SMS_NUMBER_SUCCESS;
                    return t || n || r || a || c || i
                },
                C = Object(u.a)(Object(s.a)(function(e) {
                    return !!e.body || !N(e, "startInteraction")
                }), Object(s.a)(I), j, d.a),
                h = function shouldGroupMessages(e, t) {
                    return y(e) && y(t) || Object(l.a)(e.authorType, t.authorType) && Object(l.a)(e.authorId, t.authorId) && a.a.isTimeBefore(t.attributes.generatedAt || t.createdAt, a.a.addTime(e.attributes.generatedAt || e.createdAt, 2, "hour"))
                },
                m = function groupMessages(e) {
                    return Object(f.a)(h, e)
                },
                T = function isEmptyMessage(e) {
                    return !e || !e.replace(/<\/?p[^>]*>/g, "").trim()
                },
                y = function isMeetingScheduleMessage(e) {
                    var t = e.attributes,
                        n = t.offerSchedule,
                        r = t.presentSchedule,
                        a = t.scheduleMeetingFlow,
                        c = t.appointmentInfo;
                    return !Object(b.a)(n) || !Object(b.a)(r) || !Object(b.a)(a) || !Object(b.a)(c)
                },
                S = function isSMSNumberRequest(e) {
                    return e.contentType === E.c.SMS_NUMBER_REQUESTED
                },
                R = function isSMSNumberSuccess(e) {
                    return e.contentType === E.c.SMS_NUMBER_SUCCESS
                },
                A = function getMessageAttribute(e, t) {
                    return Object(O.a)(null, ["attributes", t], e)
                },
                N = function hasMessageAttribute(e, t) {
                    return !!A(e, t)
                },
                x = function isEndUserMessage(e) {
                    return !!e && (e.authorType === E.b.LEAD || e.authorType === E.b.END_USER)
                },
                w = Object(p.a)(function(e) {
                    return e.authorType === E.b.USER && !N(e, "isBot")
                }),
                L = function isRateConversationCTAMessage(e) {
                    return !Object(g.m)(e) && ("BOT_CONVERSATION_RATING" === e.contentType && e.authorType === E.b.USER && N(e, "ratingPrompt"))
                },
                D = function isConversationRatingMessage(e) {
                    return !Object(g.m)(e) && ("BOT_CONVERSATION_RATING" === e.contentType && N(e, "conversationRating"))
                },
                M = function isPermaCloseMessage(e) {
                    return N(e, "permacloseMessage")
                },
                H = function truncateMessageText(e) {
                    return Object(v.a)(100, e)[0].trim()
                },
                k = function truncateMessagePreview(e, t) {
                    var n = A(e, "preview");
                    if (n && n.length > t) {
                        var a = H(n);
                        return Object(r.a)(Object(r.a)({}, e), {}, {
                            attributes: Object(r.a)(Object(r.a)({}, e.attributes), {}, {
                                preview: "".concat(a, "...")
                            })
                        })
                    }
                    return e
                },
                U = function getMessagePreviewText(e) {
                    return e ? "BOT_CONVERSATION_RATING" === e.contentType ? H(A(e, "ratingPrompt").ratingPromptMessage) : A(e, "preview") : ""
                },
                G = function isButtonsOnlyMessage(e) {
                    return !!e && !x(e) && !!A(e, "isButtonOnly") && !Object(g.m)(A(e, "buttons"))
                },
                V = function messageContainsButtons(e) {
                    return !!e && !x(e) && !Object(g.m)(A(e, "buttons"))
                },
                P = function messageContainsIsDropdown(e) {
                    return !!e && !x(e) && !!A(e, "isDropdown") && !Object(g.m)(A(e, "buttons"))
                }
        },
        g6eD: function(e, t, n) {
            "use strict";
            n.d(t, "i", function() {
                return a
            }), n.d(t, "m", function() {
                return c
            }), n.d(t, "l", function() {
                return i
            }), n.d(t, "k", function() {
                return o
            }), n.d(t, "j", function() {
                return u
            }), n.d(t, "n", function() {
                return s
            }), n.d(t, "o", function() {
                return d
            }), n.d(t, "p", function() {
                return l
            }), n.d(t, "s", function() {
                return f
            }), n.d(t, "q", function() {
                return b
            }), n.d(t, "r", function() {
                return O
            }), n.d(t, "f", function() {
                return p
            }), n.d(t, "a", function() {
                return v
            }), n.d(t, "c", function() {
                return E
            }), n.d(t, "h", function() {
                return g
            }), n.d(t, "g", function() {
                return j
            }), n.d(t, "b", function() {
                return _
            }), n.d(t, "d", function() {
                return I
            }), n.d(t, "e", function() {
                return C
            });
            var r = n("Cpup"),
                a = function toggleChat(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CHAT",
                        payload: e
                    })
                },
                c = function toggleController(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CONTROLLER",
                        payload: e
                    })
                },
                i = function toggleChatTakeover(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CHAT_TAKEOVER",
                        payload: e
                    })
                },
                o = function toggleChatOpen() {
                    return Object(r.a)({
                        type: "OPEN_CHAT"
                    })
                },
                u = function toggleChatClosed() {
                    return Object(r.a)({
                        type: "CLOSE_CHAT"
                    })
                },
                s = function toggleControllerClosed() {
                    return Object(r.a)({
                        type: "HIDE_CONTROLLER"
                    })
                },
                d = function toggleControllerOpen() {
                    return Object(r.a)({
                        type: "SHOW_CONTROLLER"
                    })
                },
                l = function toggleConversationHistory(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CONVERSATION_HISTORY",
                        payload: e
                    })
                },
                f = function toggleSendTranscript(e) {
                    return Object(r.a)({
                        type: "TOGGLE_SEND_TRANSCRIPT",
                        payload: e
                    })
                },
                b = function toggleInitComplete(e) {
                    return Object(r.a)({
                        type: "INIT_COMPLETE",
                        payload: e
                    })
                },
                O = function toggleMatchedWidgetTargeting(e) {
                    return Object(r.a)({
                        type: "TOGGLE_WIDGET_TARGETING_MATCHED",
                        payload: e
                    })
                },
                p = function setCloseChatRedirectUrl(e) {
                    return Object(r.a)({
                        type: "SET_CLOSE_CHAT_REDIRECT_URL",
                        payload: e
                    })
                },
                v = function autoScrollChatToBottom(e) {
                    return Object(r.a)({
                        type: "AUTO_SCROLL_CHAT_TO_BOTTOM",
                        payload: e
                    })
                },
                E = function forceHideIcon(e) {
                    return Object(r.a)({
                        type: "FORCE_HIDE_ICON",
                        payload: e
                    })
                },
                g = function toggleCanResizeController(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CAN_RESIZE_CONTROLLER",
                        payload: e
                    })
                },
                j = function setXSScreenSize(e) {
                    return Object(r.a)({
                        type: "SET_XS_SCREEN_SIZE",
                        payload: e
                    })
                },
                _ = function dismissPreview(e) {
                    return Object(r.a)({
                        type: "DISMISS_PREVIEW",
                        payload: e
                    })
                },
                I = function hidePreviewOnInitialRender(e) {
                    return Object(r.a)({
                        type: "HIDE_PREVIEW_ON_INITIAL_RENDER",
                        payload: e
                    })
                },
                C = function isCohabiting() {
                    return Object(r.a)({
                        type: "IS_COHABITING"
                    })
                }
        },
        jbOz: function(e, t, n) {
            "use strict";
            var r = n("nfbA"),
                a = n("mj2O"),
                c = n.n(a),
                i = n("7SM1"),
                o = n("uIJS"),
                u = n("LvsC"),
                s = n("qytN"),
                d = n("7jL2"),
                l = n("vEWT"),
                f = n("QtlZ"),
                b = n("vYqp"),
                O = n("hm8b"),
                p = n("LVcX"),
                v = n("YvIt"),
                E = n("ADGC"),
                g = n("0lfv"),
                j = n("Nlet"),
                _ = n("7BJg"),
                I = n("t8ds");

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(d.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var r = Object(d.a)(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return Object(s.a)(this, t)
                }
            }
            var C = 100,
                h = 2e3,
                m = Object(b.a)(O.a),
                T = function(e) {
                    Object(u.a)(UsageMetricEventBuffer, e);
                    var t = _createSuper2(UsageMetricEventBuffer);

                    function UsageMetricEventBuffer() {
                        var e;
                        return Object(o.a)(this, UsageMetricEventBuffer), (e = t.call(this, h))._publishBuffer = Object(i.a)(c.a.mark(function _callee() {
                            var t;
                            return c.a.wrap(function _callee$(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return e._events.length || Promise.reject(new Error("No events available.")), n.prev = 1, n.next = 4, e._hydrateEvents();
                                    case 4:
                                        return t = n.sent, n.next = 7, Object(l.b)(t);
                                    case 7:
                                        e._resetBuffer(), n.next = 14;
                                        break;
                                    case 10:
                                        n.prev = 10, n.t0 = n.catch(1), e._events.length >= C && e._resetBuffer(), Object(g.y)(["Failed to send bulk metrics", n.t0]);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }, _callee, null, [
                                [1, 10]
                            ])
                        })), e._hydrateEvents = Object(i.a)(c.a.mark(function _callee2() {
                            var t, n, a, i, o, u, s, d, l, b;
                            return c.a.wrap(function _callee2$(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return c.next = 2, I.b.get(v.b);
                                    case 2:
                                        if (c.t0 = c.sent, c.t0) {
                                            c.next = 5;
                                            break
                                        }
                                        c.t0 = {};
                                    case 5:
                                        return t = c.t0, n = t.data, a = Object(f.b)(), i = a.session, o = a.embed, u = a.metrics, s = Object(p.a)("", ["geo", "country"], i), d = Object(j.b)(), l = u.loadCostInBytes, b = e._events.map(function(e) {
                                            var t = m(Object(r.a)(Object(r.a)({}, e.attributes), {}, {
                                                isMobile: Object(E.c)()
                                            }));
                                            return "loaded" === e.eventName && (t.loadSizeInBytes = l), m({
                                                eventName: "[V2] - ".concat(e.eventName),
                                                orgId: o.orgId,
                                                embedId: o.id,
                                                sessionId: n,
                                                instanceId: i.instanceId,
                                                attributes: t
                                            })
                                        }), c.abrupt("return", {
                                            id: Object(g.x)(),
                                            events: b,
                                            timestamp: Date.now(),
                                            context: {
                                                country: s,
                                                locale: d.locale,
                                                timezone: d.timezone,
                                                url: d.url
                                            }
                                        });
                                    case 13:
                                    case "end":
                                        return c.stop()
                                }
                            }, _callee2)
                        })), e
                    }
                    return UsageMetricEventBuffer
                }(_.a);
            t.a = new T
        },
        "pu/X": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = {
                MESSAGE: {
                    TIMEOUT: "Sending message timed out",
                    SEND_FAILURE: "Failed to send message",
                    FETCH_MESSAGE_OR_ACTIVE_CONVO: "Failed to fetch messages or active conversation",
                    FETCH_MESSAGES: "Failed to fetch messages"
                },
                EVENT_SEND: {
                    PAGE: "Failed to send page event"
                },
                LOG: {
                    SEND_FAILURE: "Failed to send logs"
                },
                API: {
                    IDENTIFY_INVALID: "DRIFT-API - drift.identify userId cannot be undefined"
                }
            }
        },
        pvgo: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return g
            }), n.d(t, "a", function() {
                return j
            }), n.d(t, "b", function() {
                return _
            }), n.d(t, "c", function() {
                return I
            });
            var r = n("nfbA"),
                a = n("mj2O"),
                c = n.n(a),
                i = n("7SM1"),
                o = n("vEWT"),
                u = n("QtlZ"),
                s = n("+f1A"),
                d = n("ws1h"),
                l = n("2XY6"),
                f = n("NFvl"),
                b = n("SWQ0"),
                O = n("0lfv"),
                p = n("wNJw"),
                v = n("4c+F"),
                E = n("CYoe"),
                g = function stashLoadRequestResponseSize(e) {
                    if (!Object(u.b)().view.initComplete) {
                        var t = Object(v.b)(e);
                        u.a.dispatch(Object(E.d)({
                            size: t
                        }))
                    }
                },
                j = function fireWidgetInitEvent(e, t, n) {
                    var r = Object(u.b)(),
                        a = Object(s.t)(r),
                        c = Object(s.r)(r),
                        i = {
                            eventName: "[V2] - init",
                            embedId: n,
                            sessionId: a,
                            instanceId: t,
                            context: {
                                url: Object(f.a)(["page", "url"], c),
                                hostname: Object(f.a)(["page", "hostname"], c),
                                timezone: c.timezone,
                                userAgent: c.userAgent
                            }
                        };
                    e && (i.context.timeToInit = Date.now() - parseInt(e)), u.a.dispatch(Object(E.b)(Date.now())), Object(o.c)(i).catch(function(e) {
                        Object(O.o)({
                            type: "warn",
                            data: ["Failed to send init event", e]
                        })
                    })
                },
                _ = function() {
                    var e = Object(i.a)(c.a.mark(function _callee() {
                        var e;
                        return c.a.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, I();
                                case 2:
                                    e = t.sent, Object(p.a)(b.b.READY, e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee)
                    }));
                    return function fireWidgetReadyEvent() {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function() {
                    var e = Object(i.a)(c.a.mark(function _callee2() {
                        var e, t;
                        return c.a.wrap(function _callee2$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return e = Object(u.b)(), n.t0 = Object(l.g)(e), n.next = 4, Object(d.b)();
                                case 4:
                                    return n.t1 = n.sent, n.next = 7, Object(d.a)();
                                case 7:
                                    return n.t2 = n.sent, n.t3 = Object(l.c)(e), n.t4 = Object(l.c)(e), t = {
                                        widgetVisible: n.t0,
                                        teamAvailability: n.t1,
                                        isOnline: n.t2,
                                        chatOpen: n.t3,
                                        sidebarOpen: n.t4
                                    }, n.abrupt("return", Object(r.a)({
                                        data: Object(r.a)({}, t)
                                    }, t));
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee2)
                    }));
                    return function getWidgetReadyPayload() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        qwiD: function(e, t, n) {
            "use strict";
            n.d(t, "r", function() {
                return a
            }), n.d(t, "s", function() {
                return c
            }), n.d(t, "w", function() {
                return i
            }), n.d(t, "i", function() {
                return o
            }), n.d(t, "f", function() {
                return u
            }), n.d(t, "h", function() {
                return s
            }), n.d(t, "t", function() {
                return d
            }), n.d(t, "v", function() {
                return l
            }), n.d(t, "g", function() {
                return f
            }), n.d(t, "x", function() {
                return b
            }), n.d(t, "l", function() {
                return O
            }), n.d(t, "o", function() {
                return p
            }), n.d(t, "m", function() {
                return v
            }), n.d(t, "p", function() {
                return E
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "z", function() {
                return j
            }), n.d(t, "n", function() {
                return _
            }), n.d(t, "d", function() {
                return I
            }), n.d(t, "a", function() {
                return C
            }), n.d(t, "q", function() {
                return h
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "u", function() {
                return T
            }), n.d(t, "y", function() {
                return y
            }), n.d(t, "j", function() {
                return S
            }), n.d(t, "e", function() {
                return R
            }), n.d(t, "k", function() {
                return A
            });
            var r = n("Cpup"),
                a = function receiveGeo(e) {
                    return Object(r.a)({
                        type: "RECEIVE_GEO",
                        payload: e
                    })
                },
                c = function receiveIntegrationCookies(e) {
                    return Object(r.a)({
                        type: "RECEIVE_INTEGRATION_COOKIES",
                        payload: e
                    })
                },
                i = function receiveVisitInformation(e) {
                    return Object(r.a)({
                        type: "RECEIVE_VISIT_INFO",
                        payload: e
                    })
                },
                o = function receiveContext(e) {
                    return Object(r.a)({
                        type: "RECEIVE_CONTEXT",
                        payload: e
                    })
                },
                u = function receiveAccessToken(e) {
                    return Object(r.a)({
                        type: "RECEIVE_ACCESS_TOKEN",
                        payload: e
                    })
                },
                s = function receiveChatSocketAuth(e) {
                    return Object(r.a)({
                        type: "RECEIVE_CHAT_SOCKET_AUTH",
                        payload: e
                    })
                },
                d = function receivePresenceSocketAuth(e) {
                    return Object(r.a)({
                        type: "RECEIVE_PRESENCE_SOCKET_AUTH",
                        payload: e
                    })
                },
                l = function receiveSocket(e) {
                    return Object(r.a)({
                        type: "RECEIVE_SOCKET",
                        payload: e
                    })
                },
                f = function receiveChannel(e) {
                    return Object(r.a)({
                        type: "RECEIVE_CHANNEL",
                        payload: e
                    })
                },
                b = function rejoinChannel(e) {
                    return Object(r.a)({
                        type: "REJOIN_CHANNEL",
                        payload: e
                    })
                },
                O = function receiveEndUser(e) {
                    return Object(r.a)({
                        type: "RECEIVE_END_USER",
                        payload: e
                    })
                },
                p = function receiveExternalIdentity(e) {
                    return Object(r.a)({
                        type: "RECEIVE_EXTERNAL_IDENTITY",
                        payload: e
                    })
                },
                v = function receiveExternalEmail(e) {
                    return Object(r.a)({
                        type: "RECEIVE_EXTERNAL_EMAIL",
                        payload: e
                    })
                },
                E = function receiveExternalJwt(e) {
                    return Object(r.a)({
                        type: "RECEIVE_EXTERNAL_JWT",
                        payload: e
                    })
                },
                g = function clearExternalJwt() {
                    return E(null)
                },
                j = function waitForExternalJwt() {
                    return Object(r.a)({
                        type: "WAIT_FOR_EXTERNAL_JWT"
                    })
                },
                _ = function receiveExternalId(e) {
                    return Object(r.a)({
                        type: "RECEIVE_EXTERNAL_ID",
                        payload: e
                    })
                },
                I = function identifyLead(e) {
                    return Object(r.a)({
                        type: "IDENTIFY_LEAD",
                        payload: e
                    })
                },
                C = function clearExternalId() {
                    return _(null)
                },
                h = function receiveGDPR(e) {
                    return Object(r.a)({
                        type: "RECEIVE_GDPR",
                        payload: e
                    })
                },
                m = function declinedGDPR(e) {
                    return Object(r.a)({
                        type: "DECLINED_GDPR",
                        payload: e
                    })
                },
                T = function receiveSession(e) {
                    return Object(r.a)({
                        type: "RECEIVE_SESSION",
                        payload: e
                    })
                },
                y = function updateInstanceId(e) {
                    return Object(r.a)({
                        type: "UPDATE_INSTANCE_ID",
                        payload: e
                    })
                },
                S = function receiveCookieDomain(e) {
                    return Object(r.a)({
                        type: "RECEIVE_COOKIE_DOMAIN",
                        payload: e
                    })
                },
                R = function pushToChannel(e, t, n, a) {
                    return Object(r.a)({
                        type: "PUSH_TO_CHANNEL",
                        meta: {
                            clusterName: e,
                            channelName: t,
                            eventName: n
                        },
                        payload: a
                    })
                },
                A = function receiveDebugLog(e) {
                    return Object(r.a)({
                        type: "RECEIVE_DEBUG_LOG",
                        payload: e
                    })
                }
        },
        r0JT: function(e, t, n) {
            "use strict";
            var r = n("uIJS"),
                a = n("LvsC"),
                c = n("qytN"),
                i = n("7jL2"),
                o = n("vEWT"),
                u = n("0lfv"),
                s = n("7BJg");

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(i.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var r = Object(i.a)(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return Object(c.a)(this, t)
                }
            }
            var d = 5e3,
                l = function(e) {
                    Object(a.a)(MetricEventBuffer, e);
                    var t = _createSuper2(MetricEventBuffer);

                    function MetricEventBuffer() {
                        var e;
                        return Object(r.a)(this, MetricEventBuffer), (e = t.call(this, d))._publishBuffer = function() {
                            e._events.length && (Object(o.a)(e._events).catch(function(e) {
                                Object(u.o)({
                                    type: "warn",
                                    data: ["Bulk Metrics Failure"]
                                })
                            }), e._resetBuffer())
                        }, e
                    }
                    return MetricEventBuffer
                }(s.a);
            t.a = new l
        },
        ws1h: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            }), n.d(t, "b", function() {
                return v
            });
            var r = n("mj2O"),
                a = n.n(r),
                c = n("7SM1"),
                i = n("SHZQ"),
                o = n("QtlZ"),
                u = n("Hvhg"),
                s = n("OA1u"),
                d = n("LVcX"),
                l = n("0lfv"),
                f = n("moLG"),
                b = !1,
                O = Object(f.a)(Object(c.a)(a.a.mark(function _callee() {
                    var e, t, n, r, c;
                    return a.a.wrap(function _callee$(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                if (e = Object(o.b)(), t = Object(u.e)(e), n = Object(d.a)({}, ["targeting", "initialCombinedAvailability"], e), b || Object(l.m)(n)) {
                                    a.next = 6;
                                    break
                                }
                                return b = !0, a.abrupt("return", n);
                            case 6:
                                return a.next = 8, Object(i.c)(t);
                            case 8:
                                return r = a.sent, c = r.data, a.abrupt("return", c);
                            case 11:
                            case "end":
                                return a.stop()
                        }
                    }, _callee)
                })), 5e3),
                p = function() {
                    var e = Object(c.a)(a.a.mark(function _callee2() {
                        var e, t;
                        return a.a.wrap(function _callee2$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0, n.next = 3, O();
                                case 3:
                                    return e = n.sent, t = Object(d.a)(!1, ["driftOnline"], e), o.a.dispatch(Object(s.f)(t)), n.abrupt("return", t);
                                case 9:
                                    return n.prev = 9, n.t0 = n.catch(0), Object(l.y)(["Failed to fetch online status -  ".concat(n.t0.message), n.t0]), n.abrupt("return", !1);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee2, null, [
                            [0, 9]
                        ])
                    }));
                    return function getIsOnline() {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = Object(c.a)(a.a.mark(function _callee3() {
                        var e, t, n, r;
                        return a.a.wrap(function _callee3$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.prev = 0, a.next = 3, O();
                                case 3:
                                    return e = a.sent, t = e.availableTeams || [], n = Object(d.a)([], ["configuration", "teams"], Object(o.b)().embed), r = {}, n.forEach(function(e) {
                                        var n = t.includes(e.id);
                                        r[e.id] = {
                                            isOnline: n
                                        }
                                    }), a.abrupt("return", r);
                                case 11:
                                    return a.prev = 11, a.t0 = a.catch(0), Object(l.y)(["Failed to fetch team availability", a.t0]), a.abrupt("return", {});
                                case 15:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee3, null, [
                            [0, 11]
                        ])
                    }));
                    return function getTeamAvailability() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        z8Kx: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return C
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "b", function() {
                return T
            });
            var r = n("mj2O"),
                a = n.n(r),
                c = n("7SM1"),
                i = n("QtlZ"),
                o = n("qwiD"),
                u = n("LVcX"),
                s = n("LelF"),
                d = n("8saY"),
                l = n("VYE+"),
                f = n("qeWU"),
                b = function getExternalId() {
                    var e = Object(i.b)().session;
                    return Object(u.a)(null, ["externalId"], e)
                },
                O = function() {
                    var e = Object(c.a)(a.a.mark(function _callee() {
                        var e, t;
                        return a.a.wrap(function _callee$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, Object(l.d)(s.f);
                                case 2:
                                    return e = n.sent, n.next = 5, Object(l.d)(s.e);
                                case 5:
                                    if ("undefined" !== (t = n.sent)) {
                                        n.next = 9;
                                        break
                                    }
                                    return Object(l.a)(s.e, {
                                        expires: Date.now() - 10
                                    }), n.abrupt("return", null);
                                case 9:
                                    if (!e || "undefined" === e) {
                                        n.next = 12;
                                        break
                                    }
                                    return Object(l.g)(s.e, e), n.abrupt("return", e);
                                case 12:
                                    return n.abrupt("return", t || null);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee)
                    }));
                    return function getExternalIdFromCookie() {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function setExternalIdCookie(e) {
                    Object(l.g)(s.e, e)
                },
                v = function() {
                    var e = Object(c.a)(a.a.mark(function _callee2() {
                        return a.a.wrap(function _callee2$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i.a.dispatch(o.a()), e.next = 3, Object(l.a)(s.e);
                                case 3:
                                    if (!Object(l.c)()) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6, Object(l.a)(s.e, {
                                        domain: ""
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee2)
                    }));
                    return function clearExternalId() {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function getUserJwt() {
                    var e = Object(i.b)().session;
                    return Object(u.a)(void 0, ["endUser", "userJwt"], e)
                },
                g = function() {
                    var e = Object(c.a)(a.a.mark(function _callee3() {
                        var e;
                        return a.a.wrap(function _callee3$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(l.d)(s.g);
                                case 2:
                                    if (!(e = t.sent)) {
                                        t.next = 10;
                                        break
                                    }
                                    if (!Object(f.b)(e)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 7, j();
                                case 7:
                                    t.next = 10;
                                    break;
                                case 9:
                                    return t.abrupt("return", e);
                                case 10:
                                    return t.abrupt("return", void 0);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee3)
                    }));
                    return function getUserJwtFromCookie() {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(c.a)(a.a.mark(function _callee4() {
                        return a.a.wrap(function _callee4$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(l.a)(s.g);
                                case 2:
                                    if (!Object(l.c)()) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 5, Object(l.a)(s.g, {
                                        domain: ""
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee4)
                    }));
                    return function clearUserJwtCookie() {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function setUserJwtCookie(e) {
                    Object(l.h)(s.g, e)
                },
                I = function() {
                    var e = Object(c.a)(a.a.mark(function _callee5() {
                        return a.a.wrap(function _callee5$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i.a.dispatch(o.b()), e.next = 3, j();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee5)
                    }));
                    return function clearUserJwt() {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function getExternalEmail() {
                    var e = Object(i.b)().session;
                    return Object(u.a)("", ["endUser", "externalEmail"], e)
                },
                h = function() {
                    var e = Object(c.a)(a.a.mark(function _callee6() {
                        var e, t, n, r, c;
                        return a.a.wrap(function _callee6$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!(b() && !E())) {
                                        a.next = 7;
                                        break
                                    }
                                    return e = b(), a.next = 5, g();
                                case 5:
                                    t = a.sent, Object(f.c)(t, e) ? v() : t && I();
                                case 7:
                                    if (n = null, r = null, a.t0 = E(), a.t0) {
                                        a.next = 14;
                                        break
                                    }
                                    return a.next = 13, g();
                                case 13:
                                    a.t0 = a.sent;
                                case 14:
                                    if ((c = a.t0) && !Object(f.b)(c) && (r = c), !r) {
                                        a.next = 21;
                                        break
                                    }
                                    _(r), n = Object(f.a)(r), a.next = 28;
                                    break;
                                case 21:
                                    if (a.t1 = b(), a.t1) {
                                        a.next = 26;
                                        break
                                    }
                                    return a.next = 25, O();
                                case 25:
                                    a.t1 = a.sent;
                                case 26:
                                    (n = a.t1) && (p(n), I());
                                case 28:
                                    return a.abrupt("return", {
                                        externalId: n,
                                        userJwt: r
                                    });
                                case 29:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee6)
                    }));
                    return function resolveExternalIdAndUserJwt() {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = Object(c.a)(a.a.mark(function _callee7() {
                        var e, t, n, r, c, o, s;
                        return a.a.wrap(function _callee7$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!T()) {
                                        a.next = 10;
                                        break
                                    }
                                    return e = Object(i.b)(), t = e.session, n = void 0 === t ? {} : t, r = Object(u.a)(!1, ["endUser", "waitForUserJwt"], n), a.next = 6, h();
                                case 6:
                                    return c = a.sent, o = c.externalId, s = c.userJwt, a.abrupt("return", r && !s && !!o);
                                case 10:
                                    return a.abrupt("return", !1);
                                case 11:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee7)
                    }));
                    return function isWaitingForUserJwt() {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function isSignedIdentityRequired(e) {
                    var t = Object(i.b)().embed,
                        n = void 0 === t ? {} : t;
                    return e || (e = Object(u.a)(d.c.DISABLED, ["configuration", "theme", "signedIdentityRequiredStatus"], n)), e === d.c.REQUIRED
                }
        },
        "zX3+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return b
            });
            var r = n("mssF"),
                a = n("QtlZ"),
                c = n("+/Je"),
                i = n("SsZN"),
                o = n("bYXQ"),
                u = n("pu/X"),
                s = n("1tbh"),
                d = n("LVcX"),
                l = n("DboL"),
                f = n("0lfv"),
                b = function sendMessage(e) {
                    var t = Object(a.b)().conversations,
                        n = void 0 === t ? {} : t,
                        r = Object(d.a)(c.a, ["activeConversation"], n),
                        i = Object(o.e)(r);
                    return i ? O(e) : Object(o.d)(e.conversationId) || !e.conversationId ? v(e) : i || Object(o.a)(e) ? p(e) : p(e, !1)
                },
                O = function sendMessageForPreRenderedConversation(e) {
                    var t = Object(a.b)().conversations,
                        n = void 0 === t ? {} : t,
                        i = Object(d.a)([], ["messages", c.b], n),
                        o = Object(l.a)(i).slice(0, -1);
                    return Object(r.c)(o, e).then(function(e) {
                        return g(e.data, !1), e
                    }).catch(function(t) {
                        E(e, t)
                    })
                },
                p = function sendMessageForExistingConversation(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return Object(r.a)(e).then(function(e) {
                        return g(e.data, t), e
                    }).catch(function(t) {
                        E(e, t)
                    })
                },
                v = function sendMessageForNewConversation(e) {
                    return Object(r.b)(e).then(function(e) {
                        return g(e.data, !1), e
                    }).catch(function(t) {
                        E(e, t)
                    })
                },
                E = function onMessageFailed(e, t) {
                    var n = Object(d.a)(null, ["response", "status"], t),
                        r = Object(d.a)(null, ["code"], t);
                    return r && "ECONNABORTED" === r ? (Object(s.a)({
                        message: e,
                        timedOut: !0
                    }), Object(f.f)(new Error(u.a.MESSAGE.TIMEOUT), t, !0)) : n && 403 === n ? void 0 : Object(f.o)({
                        type: "error",
                        data: [u.a.MESSAGE.SEND_FAILURE, t],
                        internal: !0
                    })
                },
                g = function onMessageSent(e, t) {
                    t || Object(i.g)(e), Object(i.l)(e)
                }
        }
    }
]);