(window.webpackJsonp = window.webpackJsonp || []).push([
    [16], {
        "+Ry9": function(e, t, n) {
            "use strict";
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                i = n("nfbA"),
                o = n("QtlZ"),
                u = n("SsZN"),
                s = n("B8JY"),
                d = n("Hvhg"),
                l = n("SFoa"),
                b = n("TDUE"),
                f = n("da4L"),
                v = n("hm8b"),
                p = n("LVcX"),
                O = n("pqMu"),
                g = n("PjZB"),
                m = n("gG69"),
                E = n("0lfv"),
                j = n("3DW5"),
                I = n("uIJS"),
                C = n("LvsC"),
                h = n("qytN"),
                _ = n("7jL2"),
                A = n("K7i0"),
                y = n("xwTo"),
                S = n("g6eD"),
                T = n("7BJg");

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(_.a)(e);
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
                        var a = Object(_.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(h.a)(this, t)
                }
            }
            var x = 100,
                k = new(function(e) {
                    Object(C.a)(AgentMessageEventBuffer, e);
                    var t = _createSuper2(AgentMessageEventBuffer);

                    function AgentMessageEventBuffer() {
                        var e;
                        return Object(I.a)(this, AgentMessageEventBuffer), (e = t.call(this, x))._publishBuffer = Object(c.a)(r.a.mark(function _callee() {
                            return r.a.wrap(function _callee$(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e._events.length) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        Object(f.q)(e._events).forEach(function(t) {
                                            e._dispatchAgentMessage(t), o.a.dispatch(Object(A.v)({
                                                message: t
                                            }))
                                        }), e._resetBuffer();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, _callee)
                        })), e._shouldPublishImmediately = function(e) {
                            return Object(f.j)(e)
                        }, e._openChatIfClosed = function() {
                            Object(o.b)().view.chatOpen || o.a.dispatch(Object(S.i)({
                                chatOpen: !0
                            }))
                        }, e._dispatchAgentMessage = function(e) {
                            var t = Object(o.b)(),
                                n = Object(y.k)(t),
                                a = Object(y.a)(t);
                            n && a !== e.conversationId && (o.a.dispatch(Object(A.s)()), o.a.dispatch(Object(A.q)({
                                conversationId: e.conversationId
                            }))), o.a.dispatch(Object(A.d)({
                                message: e
                            }))
                        }, e
                    }
                    return AgentMessageEventBuffer
                }(T.a));
            n.d(t, "d", function() {
                return R
            }), n.d(t, "a", function() {
                return N
            }), n.d(t, "e", function() {
                return D
            }), n.d(t, "b", function() {
                return w
            }), n.d(t, "c", function() {
                return L
            });
            var R = function hasUserInfo(e) {
                    return !Object(E.m)(e) && !Object(v.a)(e.id) && (!Object(v.a)(e.avatarUrl) || !Object(v.a)(e.name) || !Object(v.a)(e.status))
                },
                N = function dispatchUser(e) {
                    o.a.dispatch(Object(s.e)({
                        user: Object(i.a)(Object(i.a)({}, e), {}, {
                            bot: !1
                        })
                    }))
                },
                M = function() {
                    var e = Object(c.a)(r.a.mark(function _callee(e, t, n) {
                        var a, c;
                        return r.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (a = Object(d.f)([], ["configuration", "team"]), -1 !== a.findIndex(function(t) {
                                            return t.id === e
                                        })) {
                                        r.next = 8;
                                        break
                                    }
                                    return Object(E.o)({
                                        data: [t],
                                        internal: !0
                                    }), r.next = 6, Object(l.j)(e, n);
                                case 6:
                                    c = r.sent, R(c) && N(c);
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function fetchAgentIfMissing(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                D = function updateEmbedTeam(e, t) {
                    if (R(e)) N(e);
                    else {
                        var n = t.authorId,
                            a = t.id,
                            r = t.conversationId;
                        M(n, "fetching data for missing user ".concat(n, ", message ").concat(a, " in conversation ").concat(r), r)
                    }
                },
                w = function evaluateChatMessage(e, t) {
                    if (k.push(e), Object(u.k)(e), !Object(E.m)(t)) {
                        var n = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var c, i = t[Symbol.iterator](); !(n = (c = i.next()).done); n = !0) {
                                var o = c.value;
                                o.id && D(o, e)
                            }
                        } catch (s) {
                            a = !0, r = s
                        } finally {
                            try {
                                n || null == i.return || i.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                    }
                    if (Object(f.d)(e, "isBot")) return P(e, t[0])
                },
                L = function evaluateEndUserResponseChatMessage(e, t) {
                    if ([g.b.LEAD, g.b.END_USER].includes(e.authorType) && (Object(f.d)(e, "buttonClicked") && Object(u.b)(e), !Object(E.m)(t) && t.id && D(t, e), e.body || Object(f.f)(e))) {
                        var n, a, r = Object(o.b)().conversations,
                            c = null !== (n = null === e || void 0 === e ? void 0 : e.conversationId) && void 0 !== n ? n : null,
                            i = e.attributes.widgetGuid,
                            s = Object(p.a)(null, [c, i], null !== (a = null === r || void 0 === r ? void 0 : r.messages) && void 0 !== a ? a : {});
                        if (s) {
                            var d = Object(j.a)(e.body);
                            d && d.length && d.forEach(function(t) {
                                Object(u.m)(e, t)
                            })
                        }
                        s || k.push(e)
                    }
                },
                P = function() {
                    var e = Object(c.a)(r.a.mark(function _callee3(e, t) {
                        var n, a, i;
                        return r.a.wrap(function _callee3$(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    if (!Object(f.d)(e, "offerSchedule") && !Object(f.d)(e, "presentSchedule")) {
                                        o.next = 10;
                                        break
                                    }
                                    if (n = e.attributes.offerSchedule || e.attributes.presentSchedule, a = e.id, i = e.conversationId, !Object(E.m)(t) && t.id ? D(t, e) : (Object(O.a)(Number, n) || Object(O.a)(String, n)) && M(n, "fetching data for scheduling target user ".concat(n, ", message ").concat(a, " in conversation ").concat(i), i), !Object(O.a)(Array, n)) {
                                        o.next = 8;
                                        break
                                    }
                                    return o.next = 8, Promise.all(n.map(function() {
                                        var e = Object(c.a)(r.a.mark(function _callee2(e) {
                                            return r.a.wrap(function _callee2$(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, M(e, "fetching data for scheduling target user ".concat(n, ", message ").concat(a, " in conversation ").concat(i), i);
                                                    case 2:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, _callee2)
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 8:
                                    Object(u.i)(n), Object(b.d)(m.c.CALENDAR_DROP);
                                case 10:
                                case "end":
                                    return o.stop()
                            }
                        }, _callee3)
                    }));
                    return function evaluateBotChatMessage(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        "0HCW": function(e, t, n) {
            "use strict";
            n.d(t, "i", function() {
                return l
            }), n.d(t, "k", function() {
                return b
            }), n.d(t, "g", function() {
                return f
            }), n.d(t, "h", function() {
                return v
            }), n.d(t, "j", function() {
                return p
            }), n.d(t, "c", function() {
                return O
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "e", function() {
                return E
            }), n.d(t, "f", function() {
                return j
            }), n.d(t, "d", function() {
                return I
            });
            var a = n("QtlZ"),
                r = n("Hvhg"),
                c = n("SFoa"),
                i = n("+f1A"),
                o = n("LVcX"),
                u = n("NFvl"),
                s = n("MFhO"),
                d = n("PjZB"),
                l = function getUnreadCampaignsById() {
                    var e = Object(a.b)().campaigns.unreadCampaigns,
                        t = {},
                        n = !0,
                        r = !1,
                        c = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                            var s = i.value,
                                d = Object(o.a)(null, ["conversation", "campaignId"], s);
                            if (!d) return null;
                            t[d] = s
                        }
                    } catch (l) {
                        r = !0, c = l
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw c
                        }
                    }
                    return t
                },
                b = function isActiveWelcomeMessageCampaign(e) {
                    return Object(u.a)(["campaigns", "activeCampaign", "attributes", "campaignDisplayType"], e) === s.a.WELCOME_MESSAGE
                },
                f = function getHasChatCtaForActiveCampaign(e) {
                    return Object(u.a)(["campaigns", "activeCampaign", "attributes", "cta", "CtaType"], e) === d.a.CHAT_RESPONSE
                },
                v = function getHasMeetingCtaForActiveCampaign(e) {
                    return Object(u.a)(["campaigns", "activeCampaign", "attributes", "cta", "CtaType"], e) === d.a.SCHEDULE_MEETING
                },
                p = function hasActiveCampaign(e) {
                    return !!Object(u.a)(["campaigns", "activeCampaign", "id"], e)
                },
                O = function getActiveCampaignPlaybookId(e) {
                    return Object(o.a)(null, ["campaigns", "activeCampaign", "attributes", "playbookId"], e)
                },
                g = function getActiveCampaignId(e) {
                    return Object(o.a)(null, ["campaigns", "activeCampaign", "id"], e)
                },
                m = function getActiveCampaign(e) {
                    return Object(o.a)(null, ["campaigns", "activeCampaign"], e)
                },
                E = function getEnrolledCampaignIds(e) {
                    return Object(u.a)(["campaigns", "enrolledCampaignIds"], e)
                },
                j = function getEnrolledInteractionIds(e) {
                    return Object(u.a)(["campaigns", "enrolledInteractionIds"], e)
                },
                I = function getContextForPreRenderedCampaigns(e) {
                    return {
                        embedId: Object(r.e)(e),
                        geoLocation: Object(i.s)(e),
                        locale: Object(c.f)(),
                        pageUrl: Object(i.p)(e),
                        sessionId: Object(i.t)(e),
                        siteVisits: Object(i.u)(e)
                    }
                }
        },
        "5ZR4": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return b
            }), n.d(t, "a", function() {
                return f
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                i = n("QtlZ"),
                o = n("Hvhg"),
                u = n("qwiD"),
                s = n("JBtm"),
                d = n.n(s),
                l = n("VYE+"),
                b = function() {
                    var e = Object(c.a)(r.a.mark(function _callee(e) {
                        var t, n, a, c, s;
                        return r.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = !!(null === e || void 0 === e ? void 0 : e.getFreshData) || !1, n = (null === e || void 0 === e ? void 0 : e.demandbaseToken) || "", a = {
                                        demandbaseToken: n
                                    }, t && (c = Object(o.m)(Object(i.b)()), a.pardotId = c), r.next = 6, Object(l.e)(a);
                                case 6:
                                    return s = r.sent, i.a.dispatch(Object(u.s)(s)), r.abrupt("return", s);
                                case 9:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function stashIntegrationCookies(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function resolveCookieDomain() {
                    var e = Object(o.g)(Object(i.b)(), "cookieDomains", []),
                        t = e ? e.find(function(e) {
                            return function matchesCookieDomain() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    t = d.a.parseUrl(document.referrer).url;
                                return (void 0 === t ? "" : t).includes(e)
                            }(e)
                        }) : null,
                        n = t ? ".".concat(t) : null;
                    n && i.a.dispatch(Object(u.j)({
                        cookieDomain: n
                    }))
                }
        },
        "6iwg": function(e, t, n) {
            "use strict";
            var a = n("nfbA"),
                r = n("FgEv"),
                c = n("Cpup"),
                i = {
                    id: void 0,
                    configuration: {
                        gates: [],
                        dataProtection: void 0,
                        showBranding: !1,
                        theme: {
                            awayMessage: null,
                            userList: [],
                            userListMode: void 0,
                            welcomeMessage: null
                        },
                        team: []
                    },
                    overrides: {},
                    hasBrands: !1
                },
                o = {
                    RECEIVE_EMBED_CONFIGURATION: function receiveEmbedConfigurationHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            c = Object(a.a)(Object(a.a)({}, n.configuration), t.payload.configuration);
                        return Object(a.a)(Object(a.a)({}, t.payload), {}, {
                            configuration: Object(r.a)(c, n.overrides),
                            overrides: n.overrides,
                            hasBrands: n.hasBrands
                        })
                    },
                    RECIEVE_EMBED_AWAY_MESSAGE: function receiveEmbedAwayMessageHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload.message;
                        void 0 !== a && a && (n.configuration.theme.awayMessage = t.payload.message)
                    },
                    RECEIVE_EMBED_WELCOME_MESSAGE: function receiveEmbedWelcomeMessageHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload,
                            r = a.message,
                            c = a.authorId;
                        n.configuration.theme.welcomeMessage = r, c && (n.configuration.autoAssigneeId = c)
                    },
                    RECEIVE_EMBED_CONFIGURATION_OVERRIDE: function receiveEmbedConfigurationOverrideHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.overrides = Object(r.a)(n.overrides, t.payload), n.configuration = Object(r.a)(n.configuration, t.payload)
                    },
                    RECEIVE_EMBED_TEAM: function receiveEmbedTeamHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload.user,
                            r = a.id,
                            c = n.configuration.team,
                            i = c.findIndex(function(e) {
                                return e.id === r
                            });
                        if (-1 === i) return c.push(a), void(n.configuration.team = c);
                        c[i] = a, n.configuration.team = c
                    },
                    RECEIVE_EMBED_TEAM_RELEVANT_USERS: function receiveEmbedTeamRelevantUsersHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = n.configuration.team;
                        t.payload.relevantUsers.forEach(function(e) {
                            var t = a.findIndex(function(t) {
                                return t.id === e.id
                            }); - 1 === t ? a.push(e) : a[t] = e
                        }), n.configuration.team = a
                    },
                    HAS_BRANDS: function hasBrandsHandler(e) {
                        e.draft.hasBrands = !0
                    }
                },
                u = Object(c.b)(i, o);
            t.a = u
        },
        "7Dgk": function(e, t, n) {
            "use strict";
            var a = n("Cpup"),
                r = {
                    RECEIVE_IDENTITY_MAP: function receiveIdentityMapHandler(e) {
                        var t = e.action;
                        e.draft;
                        return t.payload
                    }
                },
                c = Object(a.b)({}, r);
            t.a = c
        },
        "9ttK": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var a = n("WwEg"),
                r = (n("SFoa"), n("da4L"), n("LVcX")),
                c = function getAttributeFromCampaignOrDefault(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return Object(r.a)(n, ["attributes"].concat(Object(a.a)(t)), e)
                }
        },
        "9udt": function(e, t, n) {
            "use strict";
            var a = n("QtlZ"),
                r = n("z5yO"),
                c = n("U3QC"),
                i = n("icD7"),
                o = n("Cpup"),
                u = n("ILQF"),
                s = n("qwiD"),
                d = n("OA1u"),
                l = n("LVcX"),
                b = n("hm8b"),
                f = n("vTYT"),
                v = n("ADGC"),
                p = n("8saY"),
                O = n("VYE+"),
                g = n("SFoa"),
                m = function handleFrameAlignment() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0) || Object(g.k)();
                    e === f.b.LEFT && Object(u.a)({
                        topic: "align-frames",
                        message: {
                            alignment: e
                        }
                    })
                },
                E = function processCustomIconPlacement(e) {
                    var t = Object(v.c)() ? "mobile" : "desktop";
                    if (Object(l.a)(p.d.DEFAULT, ["configuration", "theme", "widgetIconPosition", t, "type"], e) !== p.d.DEFAULT) {
                        var n = Object(l.a)("24", ["configuration", "theme", "widgetIconPosition", t, "spacing", "bottom"], e);
                        Object(u.a)({
                            topic: "update-frame-vertical-offset",
                            message: {
                                offset: n
                            }
                        })
                    }
                },
                j = function overrideVerticalOffset(e) {
                    Object(b.a)(e) || Object(u.a)({
                        topic: "update-frame-vertical-offset",
                        message: {
                            offset: e
                        }
                    })
                },
                I = function overrideHorizontalOffset(e) {
                    Object(b.a)(e) || Object(u.a)({
                        topic: "update-frame-horizontal-offset",
                        message: {
                            offset: e
                        }
                    })
                },
                C = function overrideCookieDomain(e) {
                    if (e) {
                        var t = Object(O.f)([e]);
                        t && a.a.dispatch(Object(s.j)({
                            cookieDomain: t
                        }))
                    }
                };
            n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return _
            });
            var h = function onReceiveEmbedEpic(e) {
                    return e.pipe(Object(o.c)("RECEIVE_EMBED_CONFIGURATION"), Object(r.a)(function() {
                        return "controller" === a.a.name
                    }), Object(c.a)(function(e) {
                        return function processPayload(e) {
                            m(), E(e)
                        }(e.payload)
                    }), Object(i.a)())
                },
                _ = function onReceiveEmbedOverrideEpic(e) {
                    return e.pipe(Object(o.c)("RECEIVE_EMBED_CONFIGURATION_OVERRIDE"), Object(r.a)(function() {
                        return "controller" === a.a.name
                    }), Object(c.a)(function(e) {
                        return function processOverridePayload(e) {
                            e && Object.keys(e).forEach(function(t) {
                                var n = e[t];
                                switch (t) {
                                    case "verticalOffset":
                                        j(n);
                                        break;
                                    case "horizontalOffset":
                                        I(n);
                                        break;
                                    case "cookieDomain":
                                        C(n);
                                        break;
                                    case "campaignsEnabled":
                                        a.a.dispatch(Object(d.d)(!n))
                                }
                            })
                        }(e.payload)
                    }), Object(i.a)())
                }
        },
        B8JY: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "g", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "a", function() {
                return d
            });
            var a = n("Cpup"),
                r = function receiveEmbedConfiguration(e) {
                    return Object(a.a)({
                        type: "RECEIVE_EMBED_CONFIGURATION",
                        payload: e
                    })
                },
                c = function receiveEmbedConfigurationOverride(e) {
                    return Object(a.a)({
                        type: "RECEIVE_EMBED_CONFIGURATION_OVERRIDE",
                        payload: e
                    })
                },
                i = function receiveEmbedWelcomeMessage(e) {
                    return Object(a.a)({
                        type: "RECEIVE_EMBED_WELCOME_MESSAGE",
                        payload: e
                    })
                },
                o = function receiveEmbedAwayMessage(e) {
                    return Object(a.a)({
                        type: "RECIEVE_EMBED_AWAY_MESSAGE",
                        payload: e
                    })
                },
                u = function receiveEmbedTeam(e) {
                    return Object(a.a)({
                        type: "RECEIVE_EMBED_TEAM",
                        payload: e
                    })
                },
                s = function receiveEmbedTeamRelevantUsers(e) {
                    return Object(a.a)({
                        type: "RECEIVE_EMBED_TEAM_RELEVANT_USERS",
                        payload: e
                    })
                },
                d = function hasBrands() {
                    return Object(a.a)({
                        type: "HAS_BRANDS"
                    })
                }
        },
        BHzW: function(e, t, n) {
            "use strict";
            var a = n("WwEg"),
                r = n("jm9a"),
                c = n("nfbA"),
                i = n("+/Je"),
                o = n("weY7"),
                u = n("i9gz"),
                s = n("LVcX"),
                d = n("TbSn"),
                l = n("O0zU"),
                b = n("NFvl"),
                f = n("0B8E"),
                v = n("PjZB"),
                p = n("0lfv"),
                O = n("9xv8"),
                g = n("Cpup"),
                m = n("bYXQ"),
                E = function mergeConversationStatus(e, t, n) {
                    e.conversationStatus[t] = Object(c.a)(Object(c.a)({}, e.conversationStatus[t]), n)
                },
                j = function sendMessageHandler(e) {
                    var t = e.action,
                        n = e.draft,
                        a = Object(m.b)(t.payload.message);
                    n.activeConversation = a, n.chatOpen = !0, n.messages[a] = Object(c.a)(Object(c.a)({}, n.messages[a] || {}), {}, Object(r.a)({}, t.payload.message.attributes.widgetGuid, t.payload.message)), n.conversations[a] || (n.conversations[a] = {
                        conversation: {
                            id: a
                        }
                    }), I(n, t.payload.message)
                },
                I = function updateLastMessage(e, t) {
                    e.conversations[t.conversationId] && (e.conversations[t.conversationId].lastMessage = t)
                },
                C = function receiveMessageSentHandler(e) {
                    var t = e.action,
                        n = e.draft,
                        a = t.payload,
                        o = a.message,
                        s = a.isNew,
                        d = void 0 !== s && s,
                        l = a.isPreRendered,
                        b = void 0 !== l && l;
                    if (d) {
                        var f = b ? i.b : i.a;
                        n.messages[o.conversationId] = Object(c.a)(Object(c.a)({}, n.messages[f]), {}, Object(r.a)({}, o.attributes.widgetGuid, o)), n.conversations[o.conversationId] = Object(c.a)(Object(c.a)({}, n.conversations[f]), {}, {
                            conversation: Object(c.a)(Object(c.a)({}, n.conversations[f].conversation), {}, {
                                id: o.conversationId,
                                createdAt: o.createdAt,
                                updatedAt: o.createdAt
                            })
                        }), delete n.conversations[f], delete n.messages[f]
                    }
                    n.endUserEngaged = !0, d && !b || Object(u.a)(o.body) || E(n, o.conversationId, {
                        endUserResponded: !0
                    }), n.messages[o.conversationId] = Object(c.a)(Object(c.a)({}, n.messages[o.conversationId]), {}, Object(r.a)({}, o.attributes.widgetGuid, o)), n.activeConversation = o.conversationId, n.conversations[o.conversationId] || (n.conversations[o.conversationId] = {
                        conversation: {
                            id: o.conversationId
                        }
                    }), I(n, o)
                },
                h = {
                    SEND_MESSAGE: j,
                    SYNC_SEND_MESSAGE: j,
                    RECEIVE_MESSAGE_SENT: C,
                    SYNC_RECEIVE_MESSAGE_SENT: C,
                    RECEIVE_PRE_RENDERED_MESSAGES: function receivePreRenderedMessagesHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload,
                            r = a.messages,
                            o = a.resumeFlowContext,
                            u = a.exchangeId;
                        if (r && r.length) {
                            var s = r.map(function(e, t) {
                                return Object(c.a)(Object(c.a)({}, e), {}, {
                                    id: t
                                })
                            });
                            n.messages[i.b] = s, n.unreadAgentMessages[i.b] = s.map(function(e) {
                                return e.id
                            }), n.conversations[i.b] = {
                                conversation: {
                                    id: i.b,
                                    updatedAt: Date.now()
                                },
                                lastMessage: Object(d.a)(s),
                                lastAgentMessage: Object(d.a)(s),
                                unreadMessages: s.length
                            }, n.resumeFlowContext = o, n.activeConversation = i.b, n.exchangeId = u
                        }
                    },
                    RECEIVE_AGENT_MESSAGE: function receiveAgentMessageHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload,
                            i = (void 0 === a ? {} : a).message;
                        i && i.conversationId ? (n.messages[i.conversationId] = Object(c.a)(Object(c.a)({}, n.messages[i.conversationId]), {}, Object(r.a)({}, i.id, i)), I(n, i)) : Object(p.o)({
                            data: ["unable to receive agent message, no message or conversation id in payload"],
                            internal: !0
                        })
                    },
                    RECEIVE_CONVERSATION: function receiveConversationHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload.conversation;
                        n.conversations[a.conversation.id] = a
                    },
                    RECEIVE_INITIAL_ACTIVE_CONVERSATION: function receiveInitialActiveConversationHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.activeConversation = t.payload.conversation.conversation.id, n.conversations[t.payload.conversation.conversation.id] = t.payload.conversation
                    },
                    RECEIVE_MESSAGE_SEND_FAILURE: function receiveMessageSendFailureHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload,
                            r = null === a || void 0 === a ? void 0 : a.message,
                            i = Object(m.b)(r);
                        Object(p.m)(n.messages) && (n.messages = {}), Object(p.m)(n.messages[i]) && (n.messages[i] = {});
                        var u = Object(o.a)(function(e) {
                            return e.id !== r.id ? e : Object(c.a)(Object(c.a)({}, e), {}, {
                                failedToSend: !0
                            })
                        }, n.messages[i]);
                        n.messages[i] = u
                    },
                    RECEIVE_MESSAGES_FOR_CONVERSATION: function receiveMessagesForConversationHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload,
                            r = a.messages,
                            i = a.conversationId,
                            o = a.hasMoreMessages,
                            d = void 0 !== o && o,
                            l = a.nextPageMessageId,
                            b = void 0 === l ? null : l,
                            f = Object(s.a)({}, ["messages", i], n);
                        n.messages[i] = Object(c.a)(Object(c.a)({}, Object(O.b)(Object.values(f))), Object(O.b)(Object(O.a)(r, [v.c.PRIVATE_NOTE]))), n.conversations[i] = Object(c.a)(Object(c.a)({}, n.conversations[i]), {}, {
                            hasMoreMessages: d,
                            nextPageMessageId: b
                        });
                        var p = r.filter(function unreadAgentMessages(e) {
                            return e.viewerRecipientStatus !== v.f.READ && e.authorType === v.b.USER && !!e.body && !!e.body.length
                        }).map(function(e) {
                            return e.id
                        });
                        n.unreadAgentMessages[i] = p;
                        r.filter(function hasNonEmptyEndUserMessages(e) {
                            return (e.authorType === v.b.END_USER || e.authorType === v.b.LEAD) && !!e.body && !Object(u.a)(e.body)
                        }).length > 0 && E(n, i, {
                            endUserResponded: !0
                        })
                    },
                    RECEIVE_BULK_CONVERSATIONS: function receiveBulkConversationsHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload.conversations.reduce(function(e, t) {
                                return e[t.conversation.id] = t, e
                            }, {});
                        n.conversations = Object(l.a)(n.conversations, a)
                    },
                    SET_ACTIVE_CONVERSATION: function setActiveConversationHandler(e) {
                        var t = e.action;
                        e.draft.activeConversation = t.payload.conversationId
                    },
                    CLEAR_ACTIVE_CONVERSATION: function clearActiveConversationHandler(e) {
                        e.draft.activeConversation = null
                    },
                    RECEIVE_READ_MESSAGES: function sendReadReceiptHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload.conversationId;
                        n.unreadAgentMessages[a] = []
                    },
                    SET_UNREAD_MESSAGE: function setUnreadMessageHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload.message;
                        n.unreadAgentMessages[a.conversationId] ? n.unreadAgentMessages[a.conversationId].push(a.id) : n.unreadAgentMessages[a.conversationId] = [a.id]
                    },
                    RECEIVE_ATTACHMENTS: function receiveAttachments(e) {
                        var t = e.action,
                            n = e.draft;
                        n.attachments = Object(c.a)(Object(c.a)({}, n.attachments), Object(p.b)(t.payload.attachments))
                    },
                    RECEIVE_IS_TYPING: function setIsTypingHandler(e) {
                        var t = e.action;
                        e.draft.typingIndicators[t.payload.conversationId] = t.payload
                    },
                    SET_ACTIVE_DRIFTLINK: function setActiveDriftlinkHandler(e) {
                        var t = e.action;
                        e.draft.activeDriftlink = t.payload
                    },
                    RECEIVE_AGENT_STATUS: function receiveAgentStatusHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload,
                            r = a.agentId,
                            c = a.availability,
                            i = a.lastActivity;
                        n.agentPresence[r] = {
                            status: c,
                            lastActivity: i
                        }
                    },
                    PERMACLOSE_CONVERSATION: function permacloseConversation(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload.conversationId;
                        E(n, a, {
                            permaclosed: !0
                        })
                    },
                    SET_HAS_FORCED_CONVERSATION: function setHasForcedConversationHandler(e) {
                        e.draft.hasForcedConversation = !0
                    },
                    RECEIVE_CAMPAIGN_CONVERSATIONS: function receiveCampaignConversationsHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload;
                        if (!Object(p.m)(a)) {
                            var r = Object(p.a)(Object(o.a)(Object(b.a)(["conversation"]), t.payload));
                            n.campaignConversations = r
                        }
                    },
                    SET_IGNORED_CONVERSATION: function setIgnoredConversation(e) {
                        var t = e.action,
                            n = e.draft,
                            r = Array.isArray(t.payload) ? t.payload : [t.payload];
                        n.ignoredConversations = Object(f.a)([].concat(Object(a.a)(n.ignoredConversations), Object(a.a)(r)))
                    },
                    MARK_CONVERSATIONS_UNFOLLOWED: function markConversationsUnfollowedHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        t.payload.forEach(function(e) {
                            Object(p.m)(n.conversations[e]) || (n.conversations[e].conversation.conversationProperties = Object(c.a)(Object(c.a)({}, n.conversations[e].conversation.conversationProperties), {}, {
                                unfollowedConversation: !0
                            }))
                        })
                    },
                    RECEIVE_PRE_RENDERED_DEFAULT_MESSAGES: function receivePreRenderedDefaultMessagesHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload.preRenderedDefaultMessages;
                        n.preRenderedDefaultMessages = a
                    }
                },
                _ = Object(g.b)({
                    endUserEngaged: !1,
                    activeConversation: null,
                    activeDriftlink: null,
                    attachments: {},
                    conversations: {},
                    conversationStatus: {},
                    typingIndicators: {},
                    agentMessagesFromCurrentSession: {},
                    messages: {},
                    unreadAgentMessages: {},
                    agentPresence: {},
                    resumeFlowContext: {},
                    hasForcedConversation: !1,
                    campaignConversations: {},
                    ignoredConversations: [],
                    exchangeId: null,
                    preRenderedDefaultMessages: {}
                }, h);
            t.a = _
        },
        Bjre: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return b
            });
            var a = n("QtlZ"),
                r = n("0HCW"),
                c = n("Hvhg"),
                i = n("SFoa"),
                o = n("+f1A"),
                u = n("0lfv"),
                s = function getTopicName(e, t) {
                    return "".concat(e, "-").concat(t)
                },
                d = function getContext() {
                    var e = Object(a.b)(),
                        t = new URL(Object(o.p)(e)).hostname;
                    return {
                        orgId: Object(i.h)(),
                        instanceId: Object(o.l)(e),
                        domain: t,
                        embedId: Object(c.e)(e),
                        activeCampaignId: Object(r.b)(e)
                    }
                },
                l = function broadcastAll(e) {
                    var t = e.topic,
                        n = e.payload;
                    if (!Object(i.l)()) try {
                        var a = d(),
                            r = {
                                payload: n,
                                context: a
                            };
                        window.localStorage.setItem(s(a.orgId, t), JSON.stringify(r))
                    } catch (c) {
                        u.o && Object(u.o)({
                            type: "info",
                            data: ["Error syncing widget: ", c],
                            internal: !0
                        })
                    }
                },
                b = function listenAll(e) {
                    var t = e.topic,
                        n = e.handler;
                    Object(i.l)() || window.addEventListener("storage", function(e) {
                        try {
                            var a = d(),
                                r = s(a.orgId, t);
                            if ("storage" === e.type && e.key === r && e.newValue) {
                                var c = JSON.parse(e.newValue);
                                (function isValidContext(e) {
                                    if (!Object(u.m)(e)) {
                                        var t = d(),
                                            n = t.activeCampaignId,
                                            a = t.domain,
                                            r = t.embedId,
                                            c = t.instanceId;
                                        return t.orgId === e.orgId && c !== e.instanceId && a === e.domain && r === e.embedId && n === e.activeCampaignId
                                    }
                                })(c.context) && (n(c.payload), localStorage.removeItem(r))
                            }
                        } catch (e) {
                            Object(u.o)({
                                type: "error",
                                data: ["error listening to storage event", e],
                                internal: !0
                            })
                        }
                    })
                }
        },
        Hvhg: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return b
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "f", function() {
                return v
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return O
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "k", function() {
                return m
            }), n.d(t, "l", function() {
                return E
            }), n.d(t, "g", function() {
                return j
            }), n.d(t, "d", function() {
                return I
            }), n.d(t, "i", function() {
                return h
            }), n.d(t, "n", function() {
                return _
            }), n.d(t, "p", function() {
                return A
            }), n.d(t, "h", function() {
                return y
            }), n.d(t, "o", function() {
                return S
            }), n.d(t, "j", function() {
                return T
            }), n.d(t, "r", function() {
                return k
            }), n.d(t, "s", function() {
                return R
            }), n.d(t, "q", function() {
                return N
            });
            var a = n("QtlZ"),
                r = n("SFoa"),
                c = n("NFvl"),
                i = n("LVcX"),
                o = n("i9gz"),
                u = n("ADGC"),
                s = n("8saY"),
                d = n("hscJ"),
                l = n("0lfv"),
                b = function getEmbed(e) {
                    return Object(c.a)(["embed"], e)
                },
                f = function getEmbedId(e) {
                    return Object(c.a)(["embed", "id"], e)
                },
                v = function getEmbedPathOr(e, t) {
                    var n = Object(a.b)().embed,
                        r = void 0 === n ? {} : n;
                    return Object(i.a)(e, t, r)
                },
                p = function getEmbedConfiguration(e) {
                    return Object(c.a)(["embed", "configuration"], e)
                },
                O = function getCampaignAttributeById(e, t, n) {
                    var a = Object(r.b)(e);
                    return a ? Object(i.a)(n, ["attributes", t], a) : n
                },
                g = function getPardotVisitorId(e) {
                    return Object(c.a)(["embed", "configuration", "integrations", "pardotId"], e)
                },
                m = function getInboxId(e) {
                    return Object(i.a)(null, ["embed", "configuration", "inboxId"], e)
                },
                E = function getInboxIdOverride(e) {
                    return Object(c.a)(["embed", "overrides", "inboxId"], e)
                },
                j = function getEmbedThemeValueOrDefault(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return Object(i.a)(n, ["embed", "configuration", "theme", t], e)
                },
                I = function getEmbedConfigurationValueOrDefault(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return Object(i.a)(n, ["embed", "configuration", t], e)
                },
                C = function getLandingPageConfigurationValueOrDefault(e, t, n) {
                    return Object(i.a)(n, ["embed", "configuration", "landingPageConfig", t], e)
                },
                h = function getFirstGradientLandingPageColor(e) {
                    return C(e, "firstGradientColor", "F55C5C")
                },
                _ = function getSecondGradientLandingPageColor(e) {
                    return C(e, "secondGradientColor", "C755D5")
                },
                A = function getWidgetColorMode(e) {
                    return C(e, "colorMode", d.a.DEFAULT)
                },
                y = function getEndUserAllowedToSendGif(e) {
                    return Object(i.a)(!0, ["embed", "configuration", "theme", "allowEndUserToSendGif"], e)
                },
                S = function getVerticalOffset(e) {
                    return x("bottom", e)
                },
                T = function getHorizontalOffset(e) {
                    return x("horizontal", e)
                },
                x = function getOffset(e, t) {
                    var n = Object(u.c)() ? "mobile" : "desktop";
                    if (Object(i.a)(s.d.DEFAULT, ["embed", "configuration", "theme", "widgetIconPosition", n, "type"], t) !== s.d.DEFAULT) {
                        var a = t.embed.configuration.theme.widgetIconPosition[n].spacing;
                        return Object(l.m)(a[e]) ? void 0 : parseFloat(a[e])
                    }
                },
                k = function hasDriftVideoAttribute(e) {
                    return Object(i.a)(!1, ["embed", "configuration", "messageAttributes", "driftVideoMode"], e)
                },
                R = function hasLandingPageConfig(e) {
                    return !Object(o.a)(Object(i.a)({}, ["embed", "configuration", "landingPageConfig"], e))
                },
                N = function hasBrands(e) {
                    return Object(c.a)(["embed", "hasBrands"], e)
                }
        },
        ILQF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return f
            }), n.d(t, "b", function() {
                return v
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("nfbA"),
                i = n("7SM1"),
                o = n("LeJ0"),
                u = n("Lm5s"),
                s = n("LVcX"),
                d = n("0lfv"),
                l = function() {
                    var e = Object(i.a)(r.a.mark(function _callee(e) {
                        var t, n, a, i, o;
                        return r.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = e.topic, n = e.message, a = Object(c.a)({
                                        _meta: {
                                            id: Object(d.x)(),
                                            source: "drift_widget"
                                        }
                                    }, n), r.prev = 2, r.next = 5, Object(u.send)(window.parent, t, a, {
                                        timeout: 2e4,
                                        window: window.parent
                                    });
                                case 5:
                                    return i = r.sent, r.abrupt("return", i);
                                case 9:
                                    return r.prev = 9, r.t0 = r.catch(2), o = Object(s.a)("", ["name"], n), Object(d.y)(["Failed to broadcast message ".concat(t, " - ").concat(o), n, r.t0]), r.abrupt("return", {});
                                case 14:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee, null, [
                            [2, 9]
                        ])
                    }));
                    return function broadcast(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function handlerFunctionWrapper(e, t) {
                    return function handlerWrapper(e) {
                        if (function isValidMessage(e) {
                                var t = Object(s.a)("", ["data", "_meta", "id"], e);
                                return t && "4" === t[14]
                            }(e)) return t.apply(this, arguments)
                    }
                },
                f = function listen(e) {
                    var t = e.topic,
                        n = e.handler;
                    try {
                        Object(u.on)(t, {
                            window: window.parent
                        }, b(0, n))
                    } catch (a) {
                        "PRODUCTION" !== o.a.ENV && console.warn(a)
                    }
                },
                v = function() {
                    var e = Object(i.a)(r.a.mark(function _callee2(e, t) {
                        return r.a.wrap(function _callee2$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (n.t0 = e, !n.t0) {
                                        n.next = 4;
                                        break
                                    }
                                    return n.next = 4, e();
                                case 4:
                                    l({
                                        topic: "kill-frame",
                                        message: {
                                            name: t
                                        }
                                    });
                                case 5:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee2)
                    }));
                    return function executeThenKillFrame(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        K7i0: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "q", function() {
                return c
            }), n.d(t, "p", function() {
                return i
            }), n.d(t, "x", function() {
                return o
            }), n.d(t, "s", function() {
                return u
            }), n.d(t, "k", function() {
                return s
            }), n.d(t, "w", function() {
                return d
            }), n.d(t, "j", function() {
                return l
            }), n.d(t, "n", function() {
                return b
            }), n.d(t, "d", function() {
                return f
            }), n.d(t, "f", function() {
                return v
            }), n.d(t, "u", function() {
                return p
            }), n.d(t, "i", function() {
                return O
            }), n.d(t, "l", function() {
                return g
            }), n.d(t, "g", function() {
                return m
            }), n.d(t, "o", function() {
                return E
            }), n.d(t, "r", function() {
                return j
            }), n.d(t, "e", function() {
                return I
            }), n.d(t, "v", function() {
                return C
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "h", function() {
                return _
            }), n.d(t, "t", function() {
                return A
            }), n.d(t, "b", function() {
                return y
            }), n.d(t, "m", function() {
                return S
            });
            var a = n("Cpup"),
                r = function clearActiveConversation() {
                    return Object(a.a)({
                        type: "CLEAR_ACTIVE_CONVERSATION"
                    })
                },
                c = function setActiveConversation(e) {
                    return Object(a.a)({
                        type: "SET_ACTIVE_CONVERSATION",
                        payload: e
                    })
                },
                i = function sendMessage(e) {
                    return Object(a.a)({
                        type: "SEND_MESSAGE",
                        payload: e
                    })
                },
                o = function syncSendMessage(e) {
                    return Object(a.a)({
                        type: "SYNC_SEND_MESSAGE",
                        payload: e
                    })
                },
                u = function setHasForcedConversation() {
                    return Object(a.a)({
                        type: "SET_HAS_FORCED_CONVERSATION"
                    })
                },
                s = function receiveMessageSent(e) {
                    return Object(a.a)({
                        type: "RECEIVE_MESSAGE_SENT",
                        payload: e
                    })
                },
                d = function syncReceiveMessageSent(e) {
                    return Object(a.a)({
                        type: "SYNC_RECEIVE_MESSAGE_SENT",
                        payload: e
                    })
                },
                l = function receiveMessageSendFailure(e) {
                    return Object(a.a)({
                        type: "RECEIVE_MESSAGE_SEND_FAILURE",
                        payload: e
                    })
                },
                b = function receivePreRenderedMessages(e) {
                    return Object(a.a)({
                        type: "RECEIVE_PRE_RENDERED_MESSAGES",
                        payload: e
                    })
                },
                f = function receiveAgentMessage(e) {
                    return Object(a.a)({
                        type: "RECEIVE_AGENT_MESSAGE",
                        payload: e
                    })
                },
                v = function receiveAttachments(e) {
                    return Object(a.a)({
                        type: "RECEIVE_ATTACHMENTS",
                        payload: e
                    })
                },
                p = function setIsTyping(e) {
                    return Object(a.a)({
                        type: "RECEIVE_IS_TYPING",
                        payload: e
                    })
                },
                O = function receiveConversation(e) {
                    return Object(a.a)({
                        type: "RECEIVE_CONVERSATION",
                        payload: e
                    })
                },
                g = function receiveMessagesForConversation(e) {
                    return Object(a.a)({
                        type: "RECEIVE_MESSAGES_FOR_CONVERSATION",
                        payload: e
                    })
                },
                m = function receiveBulkConversations(e) {
                    return Object(a.a)({
                        type: "RECEIVE_BULK_CONVERSATIONS",
                        payload: e
                    })
                },
                E = function receiveReadMessages(e) {
                    return Object(a.a)({
                        type: "RECEIVE_READ_MESSAGES",
                        payload: e
                    })
                },
                j = function setActiveDriftlink(e) {
                    return Object(a.a)({
                        type: "SET_ACTIVE_DRIFTLINK",
                        payload: e
                    })
                },
                I = function receiveAgentStatus(e) {
                    return Object(a.a)({
                        type: "RECEIVE_AGENT_STATUS",
                        payload: e
                    })
                },
                C = function setUnreadMessage(e) {
                    return Object(a.a)({
                        type: "SET_UNREAD_MESSAGE",
                        payload: e
                    })
                },
                h = function permacloseConversation(e) {
                    return Object(a.a)({
                        type: "PERMACLOSE_CONVERSATION",
                        payload: e
                    })
                },
                _ = function receiveCampaignConversations(e) {
                    return Object(a.a)({
                        type: "RECEIVE_CAMPAIGN_CONVERSATIONS",
                        payload: e
                    })
                },
                A = function setIgnoredConversation(e) {
                    return Object(a.a)({
                        type: "SET_IGNORED_CONVERSATION",
                        payload: e
                    })
                },
                y = function markConversationsUnfollowed(e) {
                    return Object(a.a)({
                        type: "MARK_CONVERSATIONS_UNFOLLOWED",
                        payload: e
                    })
                },
                S = function receivePreRenderedDefaultMessages(e) {
                    return Object(a.a)({
                        type: "RECEIVE_PRE_RENDERED_DEFAULT_MESSAGES",
                        payload: e
                    })
                }
        },
        "La++": function(e, t, n) {
            "use strict";
            var a, r = n("hX/4"),
                c = n("nfbA"),
                i = n("jm9a"),
                o = n("mj2O"),
                u = n.n(o),
                s = n("7SM1"),
                d = n("xXFf"),
                l = n("QtlZ"),
                b = n("8ZCy"),
                f = n("SsZN"),
                v = n("ILQF"),
                p = n("qixE"),
                O = n("K7i0"),
                g = n("Hvhg"),
                m = n("SFoa"),
                E = n("+Ry9"),
                j = n("y0Ar"),
                I = n("+f1A"),
                C = n("g6eD"),
                h = n("2XY6"),
                _ = n("NFvl"),
                A = n("vYqp"),
                y = n("hm8b"),
                S = n("vTYT"),
                T = n("YvIt"),
                x = n("MFhO"),
                k = n("PjZB"),
                R = n("0lfv"),
                N = n("t8ds"),
                M = n("EQxi"),
                D = n("Wjfv"),
                w = n("vjCh"),
                L = n("0HCW");
            ! function(e) {
                e[e.RENDERED = 0] = "RENDERED", e[e.ENROLLED = 1] = "ENROLLED"
            }(a || (a = {}));
            var P = n("9ttK");
            n.d(t, "b", function() {
                return $
            }), n.d(t, "c", function() {
                return Z
            }), n.d(t, "a", function() {
                return K
            });
            var V = ["EMAIL_CAPTURE", "ANNOUNCEMENT_ONE_TIME"],
                F = /\{\{[\s\w.'"\\|()]+\}\}/g,
                U = function generateCampaignFrame(e, t, n, a, r, c) {
                    return Object(v.a)({
                        topic: "generate-new-frame",
                        message: {
                            name: e,
                            height: t,
                            width: n,
                            path: "core/".concat(e),
                            alignment: Object(m.k)(),
                            insertBefore: a,
                            verticalOffset: r,
                            horizontalOffset: c
                        }
                    })
                },
                G = {
                    SLIDER: function SLIDER(e, t) {
                        U(S.d.SLIDER, b.j, "400px", S.d.CONTROLLER, e, t), l.a.dispatch(Object(C.m)({
                            controllerOpen: !0
                        }))
                    },
                    TAKEOVER: function() {
                        var e = Object(s.a)(u.a.mark(function _callee() {
                            return u.a.wrap(function _callee$(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        try {
                                            U(S.d.TAKEOVER, b.j, b.j)
                                        } catch (t) {
                                            Object(R.y)([t])
                                        }
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, _callee)
                        }));
                        return function TAKEOVER() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    WELCOME_MESSAGE: function WELCOME_MESSAGE() {
                        return l.a.dispatch(Object(C.i)({
                            chatOpen: !0
                        }))
                    }
                },
                B = function dispatchRenderForEmailCaptureCampaign() {
                    return U(S.d.EMAIL_CAPTURE, "0px", "416px")
                },
                H = function dispatchRenderForAnnouncementCampaign(e, t, n) {
                    var a = G[e];
                    a && a(t, n)
                },
                W = function markEnrolledCampaign(e) {
                    l.a.dispatch(Object(D.e)(e)),
                        function saveSessionCampaignViewToStorage(e) {
                            var t = Object(g.e)(Object(l.b)());
                            N.a.merge(T.a, Object(i.a)({}, t, [e]))
                        }(e)
                },
                Y = function() {
                    var e = Object(s.a)(u.a.mark(function _callee2(e) {
                        var t, n, a, r, c, i, o, s, b, f, v, p, O;
                        return u.a.wrap(function _callee2$(u) {
                            for (;;) switch (u.prev = u.next) {
                                case 0:
                                    if (t = Object(P.a)(e, ["message"], ""), n = Object(P.a)(e, ["automaticSender"], !1), a = Object(P.a)(e, ["senderId"], null), r = Object(P.a)(e, ["senderInfo"], ""), c = Object(P.a)(e, ["cta", "CtaType"], null), i = !!c && c === k.a.SCHEDULE_MEETING && !a, o = null !== t.match(F), !(o || n || i)) {
                                        u.next = 18;
                                        break
                                    }
                                    return s = Object(l.b)(), b = s.session, f = Object(_.a)(["endUser", "id"], b), u.next = 13, Object(d.d)({
                                        campaignId: e.id,
                                        senderId: a,
                                        endUserId: f
                                    });
                                case 13:
                                    v = u.sent, p = v.data, t = p.message, a = p.senderId, r = p.senderInfo;
                                case 18:
                                    return O = Object(M.b)(t), u.abrupt("return", {
                                        message: O,
                                        senderId: a,
                                        senderInfo: r
                                    });
                                case 20:
                                case "end":
                                    return u.stop()
                            }
                        }, _callee2)
                    }));
                    return function resolveAnnouncementMessage(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                $ = function() {
                    var e = Object(s.a)(u.a.mark(function _callee3(e, t) {
                        var n, a, r, i, o, s, d, b, v, p, O;
                        return u.a.wrap(function _callee3$(u) {
                            for (;;) switch (u.prev = u.next) {
                                case 0:
                                    if (n = Object(l.b)(), a = Object(m.b)(e), !Object(h.c)(n) && a && V.includes(a.type)) {
                                        u.next = 5;
                                        break
                                    }
                                    return u.abrupt("return");
                                case 5:
                                    return l.a.dispatch(Object(D.e)(e)), r = Object(P.a)(a, ["displayType"]), i = Object(P.a)(a, ["playbookId"]), u.next = 10, Y(a);
                                case 10:
                                    o = u.sent, s = o.message, d = o.senderId, b = o.senderInfo, v = Object.assign({}, Object(c.a)(Object(c.a)({}, a), {}, {
                                        attributes: Object(c.a)(Object(c.a)({}, a.attributes), {}, {
                                            senderId: d
                                        })
                                    })), Object(E.d)(b) && Object(E.a)(b), Object(f.p)({
                                        id: null,
                                        authorId: d,
                                        attributes: {
                                            playbookId: i,
                                            campaignId: e
                                        },
                                        conversationId: null
                                    }), Object(w.a)(v, s), Object(j.a)({
                                        playbookId: i,
                                        isVirtual: !0,
                                        isDelayed: t
                                    }), p = Object(g.o)(n), O = Object(g.j)(n), a.type === x.a.EMAIL_CAPTURE ? B() : H(r, p, O);
                                case 22:
                                case "end":
                                    return u.stop()
                            }
                        }, _callee3)
                    }));
                    return function renderAnnouncementCampaign(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = function() {
                    var e = Object(s.a)(u.a.mark(function _callee4(e) {
                        var t, n, r, i, o, s, b, v, E, C, h, S, T, x, k, R, N, M;
                        return u.a.wrap(function _callee4$(u) {
                            for (;;) switch (u.prev = u.next) {
                                case 0:
                                    if (t = e.campaignId, n = e.isDelayed, r = void 0 !== n && n, i = e.playbookId, o = e.message, s = e.skipPrerender, b = void 0 !== s && s, W(t), v = Object(I.c)(l.a.getState()), E = Object(m.f)(), C = Object(m.a)(), u.prev = 5, T = Object(m.b)(t), x = Object(_.a)(["attributes", "interactionId"], T), k = Object(_.a)(["inboxId"], T), !b) {
                                        u.next = 13;
                                        break
                                    }
                                    u.t0 = o, u.next = 16;
                                    break;
                                case 13:
                                    return u.next = 15, K({
                                        playbookId: i,
                                        campaignId: t,
                                        interactionId: x,
                                        inboxId: k
                                    });
                                case 15:
                                    u.t0 = u.sent;
                                case 16:
                                    if (R = u.t0, N = null !== (h = null === R || void 0 === R ? void 0 : R.messages) && void 0 !== h ? h : [], R && N.length) {
                                        u.next = 31;
                                        break
                                    }
                                    if (Object(g.s)(l.a.getState())) {
                                        u.next = 25;
                                        break
                                    }
                                    return u.next = 23, Object(d.b)(t, C, v, E);
                                case 23:
                                    u.next = 30;
                                    break;
                                case 25:
                                    return u.next = 27, Object(p.a)({
                                        interactionId: x,
                                        locale: Object(m.f)(),
                                        goToConversation: !0,
                                        isFromConversationalLandingPage: !0,
                                        fromAPI: !1
                                    });
                                case 27:
                                    M = u.sent, l.a.dispatch(Object(O.q)({
                                        conversationId: M
                                    })), Object(j.a)({
                                        isDelayed: r,
                                        isExperiment: !!(null === R || void 0 === R ? void 0 : R.isExperiment),
                                        isVirtual: !0,
                                        playbookId: i,
                                        playbookVersion: null === R || void 0 === R ? void 0 : R.playbookVersion
                                    });
                                case 30:
                                    return u.abrupt("return", a.ENROLLED);
                                case 31:
                                    return Object(w.a)(T), Object(j.a)({
                                        isDelayed: r,
                                        isExperiment: R.isExperiment,
                                        isVirtual: !0,
                                        playbookId: i,
                                        playbookVersion: R.playbookVersion
                                    }), Object(f.p)(Object(c.a)(Object(c.a)({}, null !== (S = null === N || void 0 === N ? void 0 : N[0]) && void 0 !== S ? S : {}), {}, {
                                        id: null,
                                        conversationId: null
                                    })), l.a.dispatch(Object(O.n)({
                                        campaignId: t,
                                        messages: N,
                                        resumeFlowContext: Object(A.a)(y.a, R.resumeFlowContext),
                                        exchangeId: null === R || void 0 === R ? void 0 : R.exchangeId
                                    })), u.abrupt("return", a.RENDERED);
                                case 38:
                                    return u.prev = 38, u.t1 = u.catch(5), Object(d.b)(t, C, v, E), u.abrupt("return", a.ENROLLED);
                                case 42:
                                case "end":
                                    return u.stop()
                            }
                        }, _callee4, null, [
                            [5, 38]
                        ])
                    }));
                    return function renderBotCampaign(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                K = function() {
                    var e = Object(s.a)(u.a.mark(function _callee5(e) {
                        var t, n, a, c, i, o, s, b;
                        return u.a.wrap(function _callee5$(u) {
                            for (;;) switch (u.prev = u.next) {
                                case 0:
                                    return t = e.playbookId, n = e.campaignId, a = e.interactionId, c = e.inboxId, u.prev = 1, i = Object(L.d)(Object(l.b)()), o = i.locale, s = Object(r.a)(i, ["locale"]), u.next = 5, Object(d.c)({
                                        playbookId: t,
                                        campaignId: n,
                                        interactionId: a,
                                        inboxId: c,
                                        locale: o,
                                        clientSideContext: s
                                    });
                                case 5:
                                    if (200 === (b = u.sent).status) {
                                        u.next = 8;
                                        break
                                    }
                                    return u.abrupt("return", null);
                                case 8:
                                    return u.abrupt("return", b.data);
                                case 11:
                                    return u.prev = 11, u.t0 = u.catch(1), Object(R.y)(["Failed to fetch pre-rendered playbook data for ".concat(t)]), u.abrupt("return", null);
                                case 15:
                                case "end":
                                    return u.stop()
                            }
                        }, _callee5, null, [
                            [1, 11]
                        ])
                    }));
                    return function fetchPreRenderedPlaybookMessages(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        Ldxc: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return O
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "b", function() {
                return E
            });
            var a = n("nfbA"),
                r = n("mj2O"),
                c = n.n(r),
                i = n("7SM1"),
                o = n("xXFf"),
                u = n("QtlZ"),
                s = n("vjCh"),
                d = n("qixE"),
                l = n("xwTo"),
                b = n("SFoa"),
                f = n("+f1A"),
                v = n("6lNa"),
                p = n("0lfv"),
                O = function() {
                    var e = Object(i.a)(c.a.mark(function _callee(e, t) {
                        var n, a;
                        return c.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return n = Object(u.b)(), r.prev = 1, a = e.id, Object(s.k)(a, e.playbookId), r.next = 6, Object(o.a)({
                                        botId: Object(b.a)(),
                                        campaignBody: e.body,
                                        campaignId: a,
                                        contentType: "EMAIL_CAPTURE",
                                        context: Object(f.r)(n),
                                        displayType: "EMAIL_CAPTURE",
                                        endUserBody: t,
                                        endUserId: Object(f.e)(n).id,
                                        leadCaptured: !0,
                                        messageType: "EMAIL_CAPTURE"
                                    });
                                case 6:
                                    Object(d.g)(a, v.b.SUBMITTED), r.next = 12;
                                    break;
                                case 9:
                                    r.prev = 9, r.t0 = r.catch(1), Object(p.y)(["Failed to capture lead for email announcement playbook", r.t0]);
                                case 12:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee, null, [
                            [1, 9]
                        ])
                    }));
                    return function captureLeadForEmailAnnouncementPlaybook(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = Object(i.a)(c.a.mark(function _callee2() {
                        var e, t, n, r = arguments;
                        return c.a.wrap(function _callee2$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = r.length > 0 && void 0 !== r[0] ? r[0] : {}, t = Object(u.b)(), n = Object(l.a)(t), c.prev = 3, c.next = 6, Object(d.b)(v.b.DISMISSED, Object(a.a)({
                                        conversationId: n
                                    }, e));
                                case 6:
                                    return c.abrupt("return", c.sent);
                                case 9:
                                    c.prev = 9, c.t0 = c.catch(3), Object(p.y)(["Failed to capture dismissal event for announcement playbook", c.t0]);
                                case 12:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee2, null, [
                            [3, 9]
                        ])
                    }));
                    return function markAnnouncementPlaybookDismissed() {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = Object(i.a)(c.a.mark(function _callee3() {
                        var e, t, n, r = arguments;
                        return c.a.wrap(function _callee3$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = r.length > 0 && void 0 !== r[0] ? r[0] : {}, t = Object(u.b)(), n = Object(l.a)(t), c.prev = 3, c.next = 6, Object(d.b)(v.b.OPENED, Object(a.a)({
                                        conversationId: n
                                    }, e));
                                case 6:
                                    return c.abrupt("return", c.sent);
                                case 9:
                                    c.prev = 9, c.t0 = c.catch(3), Object(p.y)(["Failed to capture opened event for announcement playbook", c.t0]);
                                case 12:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee3, null, [
                            [3, 9]
                        ])
                    }));
                    return function markAnnouncementPlaybookOpened() {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var e = Object(i.a)(c.a.mark(function _callee4() {
                        var e, t, n, r = arguments;
                        return c.a.wrap(function _callee4$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = r.length > 0 && void 0 !== r[0] ? r[0] : {}, t = Object(u.b)(), n = Object(l.a)(t), c.prev = 3, c.next = 6, Object(d.b)(v.b.CLICKED, Object(a.a)({
                                        conversationId: n
                                    }, e));
                                case 6:
                                    return c.abrupt("return", c.sent);
                                case 9:
                                    c.prev = 9, c.t0 = c.catch(3), Object(p.y)(["Failed to capture click event for announcement playbook", c.t0]);
                                case 12:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee4, null, [
                            [3, 9]
                        ])
                    }));
                    return function markAnnouncementPlaybookClicked() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        PCkZ: function(e, t, n) {
            "use strict";
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                i = n("nfbA"),
                o = n("LqZ+"),
                u = n("QtlZ"),
                s = n("qwiD"),
                d = n("+f1A"),
                l = n("z8Kx"),
                b = n("vYqp"),
                f = n("hm8b"),
                v = n("LelF"),
                p = n("0lfv"),
                O = n("VYE+"),
                g = n("F8vJ"),
                m = n("Cpup"),
                E = function receiveIdentityMap(e) {
                    return Object(m.a)({
                        type: "RECEIVE_IDENTITY_MAP",
                        payload: e
                    })
                },
                j = n("LVcX"),
                I = function isIntegrationIdentityEnabled(e, t) {
                    return Object(j.a)(!1, ["embed", "configuration", "integrations", "integrationLookUp", t], e)
                },
                C = {
                    identify: function identify() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})[v.a]
                    },
                    getIdentityEnabled: function getIdentityEnabled() {
                        return I(Object(u.b)(), "demandbase")
                    },
                    getIntegrationContext: function getIntegrationContext() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e[v.a] ? {
                            demandbase: {
                                cookie: e[v.a]
                            }
                        } : {}
                    }
                },
                h = {
                    isEnabled: function isEnabled() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).eloqua_cookie_id_enabled
                    },
                    identify: function identify() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})[v.h]
                    },
                    getIntegrationContext: function getIntegrationContext() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e[v.h] ? {
                            eloqua: {
                                cookie: e[v.h]
                            }
                        } : {}
                    }
                },
                _ = n("qSAj"),
                A = n("ILQF"),
                y = n("SFoa"),
                S = function() {
                    var e = Object(c.a)(r.a.mark(function _callee(e, t, n) {
                        var a, c, i;
                        return r.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0, r.next = 3, Object(_.a)({
                                        utk: e,
                                        embedId: t,
                                        anonId: n
                                    });
                                case 3:
                                    if (a = r.sent, c = a.data, (i = void 0 === c ? {} : c).email) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 8:
                                    return r.abrupt("return", {
                                        email: i.email
                                    });
                                case 11:
                                    r.prev = 11, r.t0 = r.catch(0), Object(p.y)(["Failed to identify hubspot user", r.t0]);
                                case 14:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee, null, [
                            [0, 11]
                        ])
                    }));
                    return function identifyHubspotUser(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function() {
                    var e = Object(c.a)(r.a.mark(function _callee2(e, t) {
                        var n;
                        return r.a.wrap(function _callee2$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, Object(A.a)({
                                        topic: "hubspot-hsq-identity",
                                        message: {
                                            embedId: e,
                                            anonymousId: t
                                        }
                                    });
                                case 2:
                                    if ((n = a.sent) && n.data) {
                                        a.next = 5;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 5:
                                    return a.abrupt("return", n.data);
                                case 6:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee2)
                    }));
                    return function identifyByHubspotAPI(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = {
                    isEnabled: function isEnabled() {
                        return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).hubspot_js
                    },
                    identify: function() {
                        var e = Object(c.a)(r.a.mark(function _callee3(e) {
                            var t, n, a, c;
                            return r.a.wrap(function _callee3$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return "hubspotutk", t = Object(y.e)(Object(u.b)()), r.prev = 2, r.next = 5, Object(O.d)("hubspotutk");
                                    case 5:
                                        if (r.t0 = r.sent, r.t0) {
                                            r.next = 10;
                                            break
                                        }
                                        return r.next = 9, T(t, e);
                                    case 9:
                                        r.t0 = r.sent;
                                    case 10:
                                        if (n = r.t0) {
                                            r.next = 13;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 13:
                                        return a = {
                                            utk: n
                                        }, r.next = 16, S(n, t, e);
                                    case 16:
                                        return c = r.sent, a.isNewUtk = Object(p.m)(c), (null === c || void 0 === c ? void 0 : c.email) && (a.email = c.email), r.abrupt("return", a);
                                    case 22:
                                        r.prev = 22, r.t1 = r.catch(2), Object(p.y)(["Error attempting to identify hubspot user: ", r.t1]);
                                    case 25:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee3, null, [
                                [2, 22]
                            ])
                        }));
                        return function identify(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                k = {
                    identify: function identify() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})[v.i]
                    },
                    getIdentityEnabled: function getIdentityEnabled() {
                        return I(Object(u.b)(), "marketo")
                    },
                    getIntegrationContext: function getIntegrationContext() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e[v.i] ? {
                            marketo: {
                                munchkinValue: e[v.i]
                            }
                        } : {}
                    }
                },
                R = n("acD3"),
                N = n("JBtm"),
                M = n.n(N),
                D = {
                    identify: function identify() {
                        var e = Object(j.a)(null, ["session", "context", "page", "search"], Object(u.b)());
                        if (!e) return null;
                        var t = M.a.parse(e);
                        return t[R.a.ONESHOT_TOKEN] ? t[R.a.ONESHOT_TOKEN] : null
                    }
                },
                w = {
                    isEnabled: function isEnabled() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).pardot_cookie_id_enabled
                    },
                    identify: function identify() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})[v.j]
                    },
                    getIntegrationContext: function getIntegrationContext() {
                        return {
                            visitor_id: {
                                cookie: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})[v.j]
                            }
                        }
                    }
                };
            n.d(t, "b", function() {
                return L
            }), n.d(t, "a", function() {
                return P
            }), n.d(t, "c", function() {
                return V
            });
            var L = function getIntegrationIdentityContext() {
                    var e = Object(u.b)(),
                        t = Object(d.m)(e),
                        n = e.identity,
                        a = void 0 === n ? {} : n,
                        r = a.hubspot_cookie,
                        c = a.integrations,
                        o = Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({}, k.getIntegrationContext(t)), h.getIntegrationContext(t)), w.getIntegrationContext(t)), C.getIntegrationContext(t));
                    if ((null === t || void 0 === t ? void 0 : t.demandbase) && (o.demandbase = t.demandbase), r || (null === c || void 0 === c ? void 0 : c.hubspot)) {
                        var s, l, b = (null === c || void 0 === c ? void 0 : null === (s = c.hubspot) || void 0 === s ? void 0 : s.utk) || (null === r || void 0 === r ? void 0 : r.utk),
                            f = (null === c || void 0 === c ? void 0 : null === (l = c.hubspot) || void 0 === l ? void 0 : l.isNewUtk) || (null === r || void 0 === r ? void 0 : r.isNewUtk);
                        o.hubspot = {
                            utk: b,
                            isNewUtk: f
                        }
                    }
                    return o
                },
                P = function() {
                    var e = Object(c.a)(r.a.mark(function _callee(e) {
                        var t, n, a, c, i, o, d;
                        return r.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = Object(l.a)(), r.next = 3, H();
                                case 3:
                                    return n = r.sent, u.a.dispatch(Object(s.l)({
                                        endUser: {
                                            leadId: n
                                        }
                                    })), r.next = 7, Object(l.d)();
                                case 7:
                                    if (a = r.sent, c = a.externalId, i = a.userJwt, !(!!c || !!i)) {
                                        r.next = 17;
                                        break
                                    }
                                    return r.next = 14, W({
                                        id: c,
                                        email: t,
                                        userJwt: i,
                                        anonymousId: n,
                                        signedIdentityRequiredStatus: e
                                    });
                                case 14:
                                    r.t0 = r.sent, r.next = 20;
                                    break;
                                case 17:
                                    return r.next = 19, F(t, n);
                                case 19:
                                    r.t0 = r.sent;
                                case 20:
                                    return o = r.t0, d = Object(b.a)(f.a, o), u.a.dispatch(E(d)), r.abrupt("return", d);
                                case 24:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function generateIdentity(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                V = function() {
                    var e = Object(c.a)(r.a.mark(function _callee2(e, t, n) {
                        var a, c, u;
                        return r.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (r.prev = 0, !t || Y(t)) {
                                        r.next = 4;
                                        break
                                    }
                                    return Object(p.o)({
                                        data: ["Unable to identify due to undefined userId"]
                                    }), r.abrupt("return");
                                case 4:
                                    if (a = Object(i.a)({}, n), !t || a.userJwt) {
                                        r.next = 11;
                                        break
                                    }
                                    return r.next = 8, Object(l.d)();
                                case 8:
                                    c = r.sent, (u = c.userJwt) && (a.userJwt = u);
                                case 11:
                                    return r.next = 13, Object(o.c)(e, t, a);
                                case 13:
                                    console.debug("Drift: Identity Successfully Updated"), r.next = 19;
                                    break;
                                case 16:
                                    r.prev = 16, r.t0 = r.catch(0), Object(p.o)({
                                        data: [r.t0],
                                        type: "warn"
                                    });
                                case 19:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2, null, [
                            [0, 16]
                        ])
                    }));
                    return function updateIdentity(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                F = function() {
                    var e = Object(c.a)(r.a.mark(function _callee3(e, t) {
                        var n;
                        return r.a.wrap(function _callee3$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return (n = {}).lead_id = t, a.t0 = Object, a.t1 = n, a.next = 6, U(n, e);
                                case 6:
                                    return a.t2 = a.sent, n = a.t0.assign.call(a.t0, a.t1, a.t2), a.t3 = Object, a.t4 = n, a.next = 12, B(n);
                                case 12:
                                    return a.t5 = a.sent, n = a.t3.assign.call(a.t3, a.t4, a.t5), a.abrupt("return", n);
                                case 15:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee3)
                    }));
                    return function resolveIdentityProviders(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                U = function() {
                    var e = Object(c.a)(r.a.mark(function _callee4(e, t) {
                        return r.a.wrap(function _callee4$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return Object(g.a)(t) && (e.email = t), G(e), n.abrupt("return", e);
                                case 3:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee4)
                    }));
                    return function resolveDirectIdentityProviders(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                G = function resolveOneShotIdentity(e) {
                    var t = D.identify();
                    t && (e.oneshot_token = t)
                },
                B = function() {
                    var e = Object(c.a)(r.a.mark(function _callee5(e) {
                        var t, n, a, c, o, s, l, b, f, v, O;
                        return r.a.wrap(function _callee5$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = Object(u.b)(), n = t.embed.configuration.gates, a = void 0 === n ? {} : n, r.next = 4, Object(d.m)(t);
                                case 4:
                                    return c = r.sent, o = e.lead_id, r.next = 8, x.identify(o);
                                case 8:
                                    return s = r.sent, l = k.identify(c), b = w.identify(c), f = h.identify(c), v = null === c || void 0 === c ? void 0 : c.PARDOT_ALL_COOKIES, x.isEnabled(a) && s && (e.hubspot_cookie = s, s.email && (e.email = null === s || void 0 === s ? void 0 : s.email)), e.marketo_cookie = l, e.pardot_cookie = w.isEnabled(a) ? b : null, e.eloqua_cookie = h.isEnabled(a) ? f : null, O = Object(i.a)({}, v), e.integrations = {
                                        hubspot: s,
                                        email: null === s || void 0 === s ? void 0 : s.email,
                                        marketo: l,
                                        eloqua: f
                                    }, Object(p.m)(null === c || void 0 === c ? void 0 : c.demandbase) || (e.demandbase = c.demandbase), Object(p.m)(O) || (e.integrations.pardot = O), r.abrupt("return", e);
                                case 22:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee5)
                    }));
                    return function resolveThirdPartyIdentityProviders(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                H = function() {
                    var e = Object(c.a)(r.a.mark(function _callee6() {
                        var e, t, n;
                        return r.a.wrap(function _callee6$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, Object(O.d)(v.b);
                                case 2:
                                    return e = a.sent, a.next = 5, Object(O.d)(v.c);
                                case 5:
                                    if (t = a.sent, e) {
                                        a.next = 14;
                                        break
                                    }
                                    if (!t) {
                                        a.next = 10;
                                        break
                                    }
                                    return Object(O.h)(v.b, t), a.abrupt("return", t);
                                case 10:
                                    return n = Object(p.x)(), Object(O.h)(v.b, n), Object(O.h)(v.c, n), a.abrupt("return", n);
                                case 14:
                                    return a.abrupt("return", e);
                                case 15:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee6)
                    }));
                    return function generateAnonymousIdentity() {
                        return e.apply(this, arguments)
                    }
                }(),
                W = function() {
                    var e = Object(c.a)(r.a.mark(function _callee7(e) {
                        var t, n, a, c, i, o, u, s;
                        return r.a.wrap(function _callee7$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = e.id, n = e.email, a = e.userJwt, c = e.anonymousId, i = e.signedIdentityRequiredStatus, o = {}, u = Object(l.b)(i) && !a, s = Y(t), n && (o.email = n), o.lead_id = c, s && (o.user_id = t), a && (o.jwt = a, delete o.user_id), u && delete o.user_id, G(o), r.abrupt("return", o);
                                case 11:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee7)
                    }));
                    return function generateExternalIdMap(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = function isValidExternalId(e) {
                    return !!e && (!("undefined" === e) && !("undefined-undefined" === e) && !("d41d8cd98f00b204e9800998ecf8427e" === e))
                }
        },
        SFoa: function(e, t, n) {
            "use strict";
            n.d(t, "g", function() {
                return h
            }), n.d(t, "c", function() {
                return _
            }), n.d(t, "d", function() {
                return A
            }), n.d(t, "j", function() {
                return y
            }), n.d(t, "b", function() {
                return S
            }), n.d(t, "k", function() {
                return T
            }), n.d(t, "h", function() {
                return x
            }), n.d(t, "a", function() {
                return R
            }), n.d(t, "f", function() {
                return N
            }), n.d(t, "i", function() {
                return M
            }), n.d(t, "e", function() {
                return D
            }), n.d(t, "l", function() {
                return w
            }), n.d(t, "m", function() {
                return L
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                i = n("OE2q"),
                o = n("QtlZ"),
                u = n("0HCW"),
                s = n("xwTo"),
                d = n("da4L"),
                l = n("+f1A"),
                b = n("JBtm"),
                f = n.n(b),
                v = n("LVcX"),
                p = n("BCC6"),
                O = n("YsSj"),
                g = n("yzXs"),
                m = n("9A2/"),
                E = n("vTYT"),
                j = n("0lfv"),
                I = n("EQxi"),
                C = n("Hvhg"),
                h = function getEmbedThemeProperty(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return Object(v.a)(n, ["configuration", "theme", t], e)
                },
                _ = function getCampaignFromInteractionId(e) {
                    if (!e) return null;
                    var t = Object(v.a)([], ["embed", "configuration", "campaigns"], Object(o.b)());
                    return Object(p.a)(Object(O.a)(function hasInteractionId(t) {
                        return Object(d.a)(t, "interactionId") === Number.parseInt(e.toString())
                    }, t)) || null
                },
                A = function getCampaignPropertyById(e, t) {
                    var n = S(e);
                    return n ? Object(v.a)(null, [t], n) : null
                },
                y = function() {
                    var e = Object(c.a)(r.a.mark(function _callee(e, t) {
                        var n, a, c, d, b, f, v, p;
                        return r.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return n = Object(o.b)(), a = Object(l.g)(n), c = Object(l.h)(n), d = Object(l.t)(n), b = Object(u.e)(n), f = t || Object(s.a)(n), v = e, r.prev = 7, r.next = 10, Object(i.i)({
                                        userId: v,
                                        conversationId: f,
                                        endUserId: a,
                                        userIdType: c,
                                        sessionId: d,
                                        campaignIds: b
                                    });
                                case 10:
                                    return p = r.sent, r.abrupt("return", p.data);
                                case 14:
                                    return r.prev = 14, r.t0 = r.catch(7), r.abrupt("return", null);
                                case 17:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee, null, [
                            [7, 14]
                        ])
                    }));
                    return function getUserForConversation(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function getCampaignFromEmbedById(e) {
                    return Object(v.a)([], ["embed", "configuration", "campaigns"], Object(o.b)()).filter(function(t) {
                        return t.id === e
                    })[0]
                },
                T = function getWidgetAlignment() {
                    return Object(v.a)(E.b.RIGHT, ["embed", "configuration", "theme", "alignment"], Object(o.b)())
                },
                x = function getOrgId() {
                    return Object(v.a)(0, ["embed", "orgId"], Object(o.b)())
                },
                k = Object(g.a)(Object(v.a)(void 0, ["id"]), Object(m.a)(function(e) {
                    return e.bot
                }), Object(v.a)([], ["embed", "configuration", "team"])),
                R = function getBotSenderId() {
                    return k(Object(o.b)())
                },
                N = function getEmbedLocale() {
                    return Object(v.a)("en", ["embed", "configuration", "locale"], Object(o.b)())
                },
                M = function getUseWidgetLocaleForGDPR() {
                    return Object(v.a)(!1, ["embed", "configuration", "dataProtection", "targetBasedOnWidgetLocale"], Object(o.b)())
                },
                D = function getEmbedIdWithFallback(e) {
                    var t, n, a = Object(C.e)(e);
                    if (a) return a;
                    var r = Object(I.f)(f.a.parse(document.location.search));
                    return (null === (t = window) || void 0 === t ? void 0 : null === (n = t.drift) || void 0 === n ? void 0 : n.embedId) || r.embedId
                },
                w = function isLandingPageMode() {
                    var e = Object(I.f)(f.a.parse(document.location.search));
                    return "LANDING_PAGE" === (null === e || void 0 === e ? void 0 : e.mode)
                },
                L = function isLongPrivacyPolicy(e) {
                    return (Object(j.m)(e) ? 0 : e.length) > 42
                }
        },
        SsZN: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return m
            }), n.d(t, "e", function() {
                return E
            }), n.d(t, "h", function() {
                return j
            }), n.d(t, "i", function() {
                return I
            }), n.d(t, "j", function() {
                return C
            }), n.d(t, "l", function() {
                return h
            }), n.d(t, "k", function() {
                return _
            }), n.d(t, "m", function() {
                return A
            }), n.d(t, "n", function() {
                return y
            }), n.d(t, "f", function() {
                return S
            }), n.d(t, "o", function() {
                return T
            }), n.d(t, "q", function() {
                return x
            }), n.d(t, "c", function() {
                return k
            }), n.d(t, "p", function() {
                return R
            }), n.d(t, "g", function() {
                return N
            }), n.d(t, "s", function() {
                return M
            }), n.d(t, "a", function() {
                return D
            }), n.d(t, "d", function() {
                return w
            }), n.d(t, "r", function() {
                return L
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                i = n("nfbA"),
                o = n("QtlZ"),
                u = n("xwTo"),
                s = n("+f1A"),
                d = n("LVcX"),
                l = n("SWQ0"),
                b = n("6lNa"),
                f = n("0lfv"),
                v = n("wNJw"),
                p = n("JwhP"),
                O = function hydrateWithActiveCampaignData() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = Object(o.b)(),
                        n = t.campaigns,
                        a = void 0 === n ? {} : n,
                        r = t.conversations,
                        c = void 0 === r ? {} : r;
                    if (e && e.conversationId) {
                        var u = Object(d.a)(null, ["activeConversation"], c);
                        if (e.conversationId !== u) return e
                    }
                    var s = Object(d.a)(null, ["activeCampaign", "attributes", "campaignId"], a),
                        l = Object(d.a)(null, ["activeCampaign", "attributes", "startInteraction"], a),
                        b = Object(d.a)(null, ["activeCampaign", "attributes", "playbookId"], a);
                    return Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({}, e), s ? {
                        campaignId: s
                    } : {}), l ? {
                        interactionId: l
                    } : {}), b ? {
                        playbookId: b
                    } : {})
                },
                g = function createMessageEventPayload(e) {
                    return O({
                        inboxId: e.inboxId,
                        conversationId: e.conversationId
                    })
                },
                m = function triggerButtonClickedAPIEvent() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = Object(d.a)(null, ["attributes", "questionId"], e),
                        n = e.id,
                        a = e.createdAt,
                        r = e.authorId,
                        c = e.conversationId,
                        o = e.body,
                        u = Object(p.a)(o),
                        s = O(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({}, n > 1 ? {
                            messageId: n
                        } : {}), a ? {
                            createdAt: a
                        } : {}), r ? {
                            authorId: r
                        } : {}), c ? {
                            conversationId: c
                        } : {}), u ? {
                            buttonBody: u
                        } : {}), t ? {
                            questionId: t
                        } : {}));
                    Object(v.a)(l.b.CONVERSATION_BUTTON_CLICKED, s)
                },
                E = function triggerConversationFirstInteractionAPIEvent(e) {
                    var t = {
                        createdAt: e.createdAt,
                        authorId: e.authorId
                    };
                    e.conversationId && (t.conversationId = e.conversationId), e.id && (t.messageId = e.id);
                    var n = O(t);
                    Object(v.a)(l.b.CONVERSATION_INTERACTED, n)
                },
                j = function triggerEmailCapturedAPIEvent(e) {
                    var t = e.email,
                        n = Object(o.b)(),
                        a = Object(u.a)(n) || null,
                        r = {
                            data: O({
                                email: t,
                                conversationId: a
                            })
                        };
                    Object(v.a)(l.b.EMAIL_CAPTURED, r)
                },
                I = function triggerMeetingRequestedAPIEvent(e) {
                    var t = Object(d.a)([], ["embed", "configuration", "team"], Object(o.b)()),
                        n = "number" === typeof e ? function single(e) {
                            var n = t.filter(function(t) {
                                return t.id === e
                            });
                            if (n.length) {
                                var a = n[0];
                                return {
                                    teamMember: {
                                        id: a.id,
                                        name: a.name
                                    }
                                }
                            }
                        }(e) : function multiple(e) {
                            return {
                                teamMembers: t.filter(function(t) {
                                    return e.includes(t.id)
                                }).map(function(e) {
                                    return {
                                        id: e.id,
                                        name: e.name
                                    }
                                })
                            }
                        }(e);
                    Object(v.a)(l.b.MEETING_REQUESTED, n)
                },
                C = function triggerMeetingScheduledAPIEvent(e) {
                    var t = e.agentId,
                        n = e.meetingTime,
                        a = e.duration,
                        r = e.timeZone,
                        c = e.conversationId,
                        i = Object(o.b)(),
                        u = Object(d.a)({}, ["conversations", "messages", c], i),
                        s = u[Object.keys(u)[0]],
                        b = Object(d.a)([], ["embed", "configuration", "team"], i).filter(function(e) {
                            return e.id === t
                        })[0],
                        f = b ? b.name : "";
                    if (s) {
                        var p = Object(d.a)(null, ["attributes", "campaignId"], s),
                            O = Object(d.a)(null, ["attributes", "playbookId"], s),
                            g = Object(d.a)(null, ["attributes", "startInteraction"], s),
                            m = {
                                teamMember: {
                                    id: t,
                                    name: f
                                },
                                meeting: {
                                    time: n,
                                    duration: a,
                                    timeZone: r
                                },
                                conversationId: c,
                                playbookId: O,
                                campaignId: p,
                                interactionId: g
                            };
                        Object(v.a)(l.b.MEETING_BOOKED, m)
                    }
                },
                h = function triggerMessageSentAPIEvent() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(v.a)(l.b.MESSAGE_SENT, g(e))
                },
                _ = function triggerMessageReceivedAPIEvent() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = function getTeamUser(e) {
                            return e ? Object(d.a)([], ["embed", "configuration", "team"], Object(o.b)()).find(function(t) {
                                return t.id === e
                            }) : null
                        }(e.authorId) || {},
                        n = Object(i.a)(Object(i.a)({}, g(e)), {}, {
                            teamMember: {
                                id: t.id,
                                name: t.name
                            }
                        });
                    Object(v.a)(l.b.MESSAGE_RECEIVED, n)
                },
                A = function triggerPhoneCapturedAPIEvent(e, t) {
                    var n = O({
                        createdAt: e.createdAt,
                        authorId: e.authorId,
                        conversationId: e.conversationId,
                        phone: t
                    });
                    Object(v.a)(l.b.PHONE_NUMBER_CAPTURED, n)
                },
                y = function triggerPlaybookClickedAPIEvent(e) {
                    var t = (e || {}).conversationId,
                        n = O(Object(i.a)({}, t ? {
                            conversationId: t
                        } : {}));
                    Object(v.a)(l.b.CONVERSATION_PLAYBOOK_CLICKED, n)
                },
                S = function triggerConversationSelectedAPIEvent(e) {
                    var t = O({
                        conversationId: e
                    });
                    Object(v.a)(l.b.CONVERSATION_SELECTED, t)
                },
                T = function triggerPlaybookDismissedAPIEvent(e) {
                    var t = e || {},
                        n = t.conversationId,
                        a = t.id,
                        r = O(Object(i.a)(Object(i.a)({}, n ? {
                            conversationId: n
                        } : {}), a > 1 ? {
                            messageId: a
                        } : {}));
                    Object(v.a)(l.b.CONVERSATION_PLAYBOOK_DISMISSED, r)
                },
                x = function() {
                    var e = Object(c.a)(r.a.mark(function _callee(e) {
                        var t;
                        return r.a.wrap(function _callee$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    t = Object(i.a)({
                                        botMessage: Object(f.i)(e)
                                    }, O()), Object(v.a)(l.b.SLIDER_CLOSED, t);
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee)
                    }));
                    return function triggerSliderClosedAPIEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = Object(c.a)(r.a.mark(function _callee2(e, t) {
                        var n, a, c, i;
                        return r.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (e && t) {
                                        r.next = 2;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 2:
                                    n = Object(o.b)(), a = Object(d.a)(!1, ["view", "matchedTargeting"], n), c = Object(d.a)(!1, ["targeting", "isOnline"], n), i = {
                                        campaignId: t,
                                        data: {
                                            isOnline: c,
                                            sidebarOpen: !1,
                                            widgetVisible: a
                                        }
                                    }, r.t0 = e, r.next = r.t0 === b.b.CLICKED ? 9 : r.t0 === b.b.SUBMITTED ? 11 : r.t0 === b.b.OPENED ? 13 : r.t0 === b.b.DISMISSED ? 15 : 17;
                                    break;
                                case 9:
                                    return Object(v.a)(l.b.CAMPAIGN_CLICKED, i), r.abrupt("break", 18);
                                case 11:
                                    return Object(v.a)(l.b.CAMPAIGN_SUBMITTED, i), r.abrupt("break", 18);
                                case 13:
                                    return Object(v.a)(l.b.CAMPAIGN_OPENED, i), r.abrupt("break", 18);
                                case 15:
                                    return Object(v.a)(l.b.CAMPAIGN_DISMISSED, i), r.abrupt("break", 18);
                                case 17:
                                    return r.abrupt("break", 18);
                                case 18:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2)
                    }));
                    return function triggerCampaignActionAPIEvent(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                R = function triggerPlaybookFiredAPIEvent(e) {
                    var t = e || {},
                        n = t.authorId,
                        a = t.conversationId,
                        r = t.createdAt,
                        c = t.id,
                        o = t.attributes,
                        u = (o = void 0 === o ? {
                            playbookId: null,
                            startInteraction: null,
                            interactionId: null,
                            campaignId: null
                        } : o).playbookId,
                        s = o.startInteraction,
                        d = o.interactionId,
                        b = o.campaignId;
                    Object(v.a)(l.b.CONVERSATION_PLAYBOOK_FIRED, Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({}, c > 1 ? {
                        messageId: c
                    } : {}), r ? {
                        createdAt: r
                    } : {}), n ? {
                        authorId: n
                    } : {}), a ? {
                        conversationId: a
                    } : {}), d || s ? {
                        interactionId: d || s
                    } : {}), u ? {
                        playbookId: u
                    } : {}), b ? {
                        campaignId: b
                    } : {}))
                },
                N = function triggerConversationStartedAPIEvent() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = Object(o.b)(),
                        n = Object(s.g)(t),
                        a = Object(s.f)(t),
                        r = {
                            inboxId: e.inboxId,
                            conversationId: e.conversationId,
                            interactionId: e.attributes.interactionId,
                            endUserId: n,
                            endUserEmail: a
                        };
                    Object(v.a)(l.b.CONVERSATION_STARTED, r)
                },
                M = function triggerWelcomeMessageAPIEvent(e) {
                    var t = e ? l.b.WELCOME_MESSAGE_OPENED : l.b.WELCOME_MESSAGE_CLOSED;
                    Object(v.a)(t)
                },
                D = function triggerAwayMessageAPIEvent(e) {
                    var t = e ? l.b.AWAY_MESSAGE_OPENED : l.b.AWAY_MESSAGE_CLOSED;
                    Object(v.a)(t)
                },
                w = function createTriggerChatVisibleAPIEvent() {
                    var e = !1;
                    return function(t) {
                        e !== (t = !!t) && ((t ? [l.b.CHAT_OPENED, l.b.SIDEBAR_OPENED] : [l.b.CHAT_CLOSED, l.b.SIDEBAR_CLOSED]).forEach(function(e) {
                            return Object(v.a)(e)
                        }), e = t)
                    }
                }(),
                L = function triggerUserAttributesUpdatedEvent() {
                    Object(v.a)(l.b.USER_ATTRIBUTES_UPDATED)
                }
        },
        TDUE: function(e, t, n) {
            "use strict";
            var a = n("jm9a"),
                r = n("nfbA"),
                c = n("mj2O"),
                i = n.n(c),
                o = n("7SM1"),
                u = n("SHZQ"),
                s = n("hm8b"),
                d = n("mfas"),
                l = n("MFhO"),
                b = n("gG69"),
                f = n("0lfv"),
                v = n("t8ds"),
                p = n("QtlZ"),
                O = n("9ttK"),
                g = n("xwTo"),
                m = n("Hvhg"),
                E = n("SFoa"),
                j = n("CYoe"),
                I = n("JBtm"),
                C = n.n(I),
                h = n("LVcX"),
                _ = n("EQxi"),
                A = function getTimeToImpression(e) {
                    if (e && ! function hasSentImpression() {
                            var e = Object(p.b)().impressions;
                            return (void 0 === e ? {} : e).hasSentImpression || !1
                        }()) return p.a.dispatch(Object(j.e)()), Date.now() - e
                },
                y = function getLoadingStrategy() {
                    var e = Object(_.f)(C.a.parse(document.location.search)),
                        t = null === e || void 0 === e ? void 0 : e.loadStrategy;
                    return t || "DEFAULT"
                },
                S = function getIframeMode() {
                    var e = Object(_.f)(C.a.parse(document.location.search));
                    return !!(null === e || void 0 === e ? void 0 : e.secureIframe)
                },
                T = function() {
                    var e = Object(o.a)(i.a.mark(function _callee(e) {
                        var t, n, a, c, o, u, d, l, b, v, j, I, C, _, T, R, N, M, D, w, L, P, V, F, U, G, B, H, W, Y, $, Z, K;
                        return i.a.wrap(function _callee$(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if (t = e.source, n = e.meta, a = void 0 === n ? {} : n, c = Object(p.b)(), o = c.session, u = c.campaigns, d = void 0 === u ? {} : u, l = c.metrics, b = void 0 === l ? {} : l, i.prev = 3, v = Object(E.h)(), j = Object(h.a)(null, ["endUser", "id"], o), I = Object(h.a)(null, ["activeCampaign", "id"], d), C = a.conversationId || Object(g.a)(c), _ = null === o || void 0 === o ? void 0 : o.id, T = null === o || void 0 === o ? void 0 : o.instanceId, R = Date.now(), N = Object(h.a)("", ["context", "page", "url"], o), M = Object(h.a)("", ["geo", "country"], o), D = Object(h.a)("", ["context", "userAgent"], o), w = Object(s.a)(a.playbookId) ? void 0 : a.playbookId, L = Object(s.a)(a.interactionId) ? void 0 : a.interactionId, P = a.virtual || !1, V = a.isDelayed || !1, F = a.isExperiment ? {
                                            isExperiment: a.isExperiment
                                        } : {}, U = Object(s.a)(a.playbookVersion) ? void 0 : a.playbookVersion, G = a.isFromConversationalLandingPage || Object(m.s)(c), B = y(), H = S(), W = Object(s.a)(a.messageId) ? void 0 : a.messageId, !x(t)) {
                                        i.next = 30;
                                        break
                                    }
                                    return $ = Object(E.b)(I), Z = Object(O.a)($, ["campaignReenrollmentType"], null), i.next = 29, k(w, j, _, T, C, Z, P);
                                case 29:
                                    Y = i.sent;
                                case 30:
                                    return K = A(b.initTimestamp), i.abrupt("return", {
                                        orgId: v,
                                        endUserId: j,
                                        sessionId: _,
                                        sentAt: R,
                                        impressionSource: Object(r.a)(Object(r.a)({
                                            source: t,
                                            playbookId: w,
                                            interactionId: L,
                                            instanceId: null === T || void 0 === T ? void 0 : T.toString(),
                                            virtual: P,
                                            widgetVersion: 2,
                                            sendId: Y,
                                            timeToImpression: K,
                                            delayed: V
                                        }, F), {}, {
                                            playbookVersion: U,
                                            isFromConversationalLandingPage: G,
                                            loadingStrategy: B,
                                            iframeMode: H,
                                            conversationId: C,
                                            messageId: W
                                        }),
                                        context: {
                                            url: N,
                                            userAgent: D,
                                            country: M
                                        }
                                    });
                                case 34:
                                    return i.prev = 34, i.t0 = i.catch(3), Object(f.f)(new Error("Failed to create impression event: ".concat(i.t0.message))), i.abrupt("return", null);
                                case 38:
                                case "end":
                                    return i.stop()
                            }
                        }, _callee, null, [
                            [3, 34]
                        ])
                    }));
                    return function createImpressionEvent(t) {
                        return e.apply(this, arguments)
                    }
                }();
            n.d(t, "b", function() {
                return x
            }), n.d(t, "a", function() {
                return k
            }), n.d(t, "d", function() {
                return R
            }), n.d(t, "c", function() {
                return M
            });
            var x = function isPlaybookImpressionEvent(e) {
                    return e === b.c.ACTIVE_PLAYBOOK || e === b.c.PASSIVE_PLAYBOOK
                },
                k = function() {
                    var e = Object(o.a)(i.a.mark(function _callee(e, t, n, a, r, c, o) {
                        var u, s;
                        return i.a.wrap(function _callee$(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if (o) {
                                        i.next = 2;
                                        break
                                    }
                                    return i.abrupt("return", r ? "CONVERSATION:".concat(r) : void 0);
                                case 2:
                                    if (t && e && n) {
                                        i.next = 4;
                                        break
                                    }
                                    return i.abrupt("return", u);
                                case 4:
                                    i.t0 = c, i.next = i.t0 === l.b.ONCE ? 7 : i.t0 === l.b.ONCE_PER_SESSION ? 9 : i.t0 === l.b.ALWAYS ? 11 : 19;
                                    break;
                                case 7:
                                    return u = "ONCE:".concat(t, ":").concat(e), i.abrupt("break", 19);
                                case 9:
                                    return u = "ONCE_PER_SESSION:".concat(t, ":").concat(e, ":").concat(n), i.abrupt("break", 19);
                                case 11:
                                    return i.next = 13, D(e);
                                case 13:
                                    if (!(s = i.sent)) {
                                        i.next = 16;
                                        break
                                    }
                                    return i.abrupt("return", s);
                                case 16:
                                    return u = "ALWAYS:".concat(t, ":").concat(e, ":").concat(a), N(e, u), i.abrupt("break", 19);
                                case 19:
                                    return i.abrupt("return", u);
                                case 20:
                                case "end":
                                    return i.stop()
                            }
                        }, _callee)
                    }));
                    return function getImpressionSendId(t, n, a, r, c, i, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                R = function() {
                    var e = Object(o.a)(i.a.mark(function _callee2(e) {
                        var t, n, a = arguments;
                        return i.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = a.length > 1 && void 0 !== a[1] ? a[1] : {}, r.next = 3, T({
                                        source: e,
                                        meta: t
                                    });
                                case 3:
                                    if (!(n = r.sent)) {
                                        r.next = 13;
                                        break
                                    }
                                    return r.prev = 5, Object(u.f)(n), r.abrupt("return", !0);
                                case 10:
                                    r.prev = 10, r.t0 = r.catch(5), Object(f.y)(["Failed to send widget impression", r.t0]);
                                case 13:
                                    return r.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2, null, [
                            [5, 10]
                        ])
                    }));
                    return function trackWidgetImpression(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = function() {
                    var e = Object(o.a)(i.a.mark(function _callee3(e, t) {
                        var n, c, o;
                        return i.a.wrap(function _callee3$(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2, v.b.get("ALWAYS_SEND_IDS");
                                case 2:
                                    return n = i.sent, c = n.data, o = void 0 === c ? {} : c, i.next = 7, v.b.set("ALWAYS_SEND_IDS", Object(r.a)(Object(r.a)({}, o), {}, Object(a.a)({}, e, t)));
                                case 7:
                                case "end":
                                    return i.stop()
                            }
                        }, _callee3)
                    }));
                    return function addSendIdToStore(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                M = function() {
                    var e = Object(o.a)(i.a.mark(function _callee4(e) {
                        var t, n, a;
                        return i.a.wrap(function _callee4$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, v.b.get("ALWAYS_SEND_IDS");
                                case 2:
                                    return t = r.sent, n = t.data, a = Object(s.a)(n) ? {} : Object(d.a)(["".concat(e)], n), r.next = 7, v.b.set("ALWAYS_SEND_IDS", a);
                                case 7:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee4)
                    }));
                    return function removeSendIdFromStore(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                D = function() {
                    var e = Object(o.a)(i.a.mark(function _callee5(e) {
                        var t, n;
                        return i.a.wrap(function _callee5$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, v.b.get("ALWAYS_SEND_IDS");
                                case 2:
                                    return t = a.sent, n = t.data, a.abrupt("return", Object(s.a)(n) ? null : n[e]);
                                case 5:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee5)
                    }));
                    return function getSendIdInStore(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        UXSh: function(e, t, n) {
            "use strict";
            var a = n("WwEg"),
                r = n("Cpup"),
                c = {
                    id: null,
                    attributes: {},
                    message: null
                },
                i = {
                    activeCampaign: c,
                    campaignEvalId: null,
                    enrolledCampaignIds: [],
                    enrolledInteractionIds: [],
                    ineligibleCampaignIds: [],
                    unreadCampaigns: [],
                    campaignConversations: []
                },
                o = {
                    RECEIVE_ACTIVE_CAMPAIGN: function receiveActiveCampaignHandler(e) {
                        var t = e.action;
                        e.draft.activeCampaign = t.payload.data
                    },
                    CLEAR_ACTIVE_CAMPAIGN: function clearActiveCampaignHandler(e) {
                        e.draft.activeCampaign = c
                    },
                    CLEAR_ACTIVE_CAMPAIGN_EXCEPT_SENDER_ID: function clearActiveCampaignExceptSenderIdHandler(e) {
                        var t, n, a = e.draft;
                        a.activeCampaign = Object.assign({}, c, {
                            attributes: {
                                senderId: null === (t = a.activeCampaign) || void 0 === t ? void 0 : null === (n = t.attributes) || void 0 === n ? void 0 : n.senderId
                            }
                        })
                    },
                    RECEIVE_CAMPAIGN_EVAL_ID: function receiveCampaignEvalIdHandler(e) {
                        var t = e.action;
                        e.draft.campaignEvalId = t.payload.campaignEvalId
                    },
                    RECEIVE_UNREAD_CAMPAIGNS: function receiveUnreadCampaignsHandler(e) {
                        var t = e.action;
                        e.draft.unreadCampaigns = t.payload
                    },
                    RECEIVE_ENROLLED_CAMPAIGN: function receiveEnrolledCampaignHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.enrolledCampaignIds = [].concat(Object(a.a)(n.enrolledCampaignIds), [t.payload])
                    },
                    RECEIVE_ENROLLED_INTERACTION: function receiveEnrolledInteractionHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.enrolledInteractionIds = [].concat(Object(a.a)(n.enrolledInteractionIds), [t.payload])
                    },
                    RECEIVE_INELIGIBLE_CAMPAIGNS: function receiveIneligibleCampaignsHandler(e) {
                        var t = e.action;
                        e.draft.ineligibleCampaignIds = t.payload
                    }
                },
                u = Object(r.b)(i, o);
            t.a = u
        },
        V4ET: function(e, t, n) {},
        Wjfv: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "f", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "g", function() {
                return d
            }), n.d(t, "h", function() {
                return l
            });
            var a = n("Cpup"),
                r = function receiveActiveCampaign(e) {
                    return Object(a.a)({
                        type: "RECEIVE_ACTIVE_CAMPAIGN",
                        payload: e
                    })
                },
                c = function receiveEnrolledCampaign(e) {
                    return Object(a.a)({
                        type: "RECEIVE_ENROLLED_CAMPAIGN",
                        payload: e
                    })
                },
                i = function receiveEnrolledInteraction(e) {
                    return Object(a.a)({
                        type: "RECEIVE_ENROLLED_INTERACTION",
                        payload: e
                    })
                },
                o = function clearActiveCampaign() {
                    return Object(a.a)({
                        type: "CLEAR_ACTIVE_CAMPAIGN"
                    })
                },
                u = function clearActiveCampaignExceptSenderId() {
                    return Object(a.a)({
                        type: "CLEAR_ACTIVE_CAMPAIGN_EXCEPT_SENDER_ID"
                    })
                },
                s = function receiveCampaignEvalId(e) {
                    return Object(a.a)({
                        type: "RECEIVE_CAMPAIGN_EVAL_ID",
                        payload: e
                    })
                },
                d = function receiveIneligibleCampaigns(e) {
                    return Object(a.a)({
                        type: "RECEIVE_INELIGIBLE_CAMPAIGNS",
                        payload: e
                    })
                },
                l = function receiveUnreadCampaigns(e) {
                    return Object(a.a)({
                        type: "RECEIVE_UNREAD_CAMPAIGNS",
                        payload: e
                    })
                }
        },
        bYXQ: function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return d
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "a", function() {
                return b
            }), n.d(t, "c", function() {
                return f
            }), n.d(t, "b", function() {
                return v
            });
            var a = n("QtlZ"),
                r = n("+/Je"),
                c = n("LVcX"),
                i = n("DboL"),
                o = n("hm8b"),
                u = n("PjZB"),
                s = n("0lfv"),
                d = function isPrerenderedConversation(e) {
                    return e === r.b
                },
                l = function isNewConversation(e) {
                    return e === r.a
                },
                b = function conversationHasEndUserMessage(e) {
                    var t = Object(c.a)(null, ["conversations", "messages", e.conversationId.toString()], Object(a.b)());
                    return t && Object(i.a)(t).some(function(t) {
                        return t.authorType !== u.b.USER && !!t.body && t.id !== e.id
                    })
                },
                f = function isConversationIdNullOrPreRendered(e) {
                    return Object(s.m)(e) || d(e)
                },
                v = function getConvoIdFromMessage(e) {
                    var t = e.conversationId;
                    return 0 === t && (t = r.b), Object(o.a)(t) && (t = r.a), t
                }
        },
        bukc: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a, r = n("jm9a"),
                c = n("ILQF"),
                i = n("vTYT"),
                o = n("MFhO"),
                u = function dismissChatPreview() {
                    var e, t = null === (e = document.getElementsByClassName("drift-widget-message-close-button")) || void 0 === e ? void 0 : e.item(0);
                    t ? t.click() : Object(c.a)({
                        topic: "sc::dismiss-chat"
                    })
                },
                s = (a = {}, Object(r.a)(a, o.a.SLIDER, function dismissSlider() {
                    Object(c.a)({
                        topic: "slider:dismiss",
                        message: {
                            name: i.d.SLIDER
                        }
                    })
                }), Object(r.a)(a, o.a.WELCOME_MESSAGE, u), Object(r.a)(a, o.a.EMAIL_CAPTURE, function dismissEmail() {
                    u()
                }), Object(r.a)(a, "bot", u), a)
        },
        fsHk: function(e, t, n) {
            "use strict";
            var a = n("A5mO");
            t.a = {
                getTime: function getTime(e, t) {
                    try {
                        return t ? Object(a.a)(e, t) : Object(a.a)(e)
                    } catch (n) {
                        return Object(a.a)(e, "America/New_York")
                    }
                },
                getCurrentTime: function getCurrentTime(e) {
                    try {
                        return a.a.now(e || this.getTimezone())
                    } catch (t) {
                        return a.a.now("America/New_York")
                    }
                },
                getCurrentTimeEpoch: function getCurrentTimeEpoch() {
                    return this.getCurrentTime().epoch
                },
                getTimezone: function getTimezone() {
                    try {
                        var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        return "Europe/Kyiv" === e ? "europe/Kiev" : e
                    } catch (t) {
                        return "America/New_York"
                    }
                },
                getOffsetForTimezone: function getOffsetForTimezone(e) {
                    return this.getCurrentTime(e).offset()
                },
                getCurrentTimeDifferenceInDays: function getCurrentTimeDifferenceInDays(e) {
                    return e ? this.getCurrentTime().since(e || this.getCurrentTime()).diff.days : 0
                },
                addTime: function addTime(e, t, n) {
                    return this.getTime(e).add(t, n).epoch
                },
                isTimeBefore: function isTimeBefore(e, t) {
                    var n = this.convertToSpacetime(t);
                    return this.getTime(e).isBefore(n)
                },
                isTimeAfter: function isTimeAfter(e, t) {
                    var n = this.convertToSpacetime(e),
                        a = this.convertToSpacetime(t);
                    return n.isAfter(a)
                },
                isTimeAfterHours: function isTimeAfterHours(e, t, n) {
                    return this.isTimeAfter(e, this.addTime(t, n, "hour"))
                },
                isTimeAfterSeconds: function isTimeAfterSeconds(e, t, n) {
                    return this.isTimeAfter(e, this.addTime(t, n, "second"))
                },
                isCurrentTimeAfter: function isCurrentTimeAfter(e) {
                    var t = this.convertToSpacetime(e);
                    return this.getCurrentTime().isAfter(t)
                },
                isTimeToday: function isTimeToday(e) {
                    try {
                        return this.getTime(e).isSame(a.a.today(this.getTimezone()), "date")
                    } catch (t) {
                        return this.getTime(e).isSame(a.a.today("America/New_York"), "date")
                    }
                },
                isTimeSame: function isTimeSame(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "date";
                    return this.getTime(e).isSame(this.getCurrentTime(), t)
                },
                unixFormatDateTime: function unixFormatDateTime(e, t, n) {
                    return this.getTime(e, n).unixFmt(t)
                },
                compileI18nForDateTime: function compileI18nForDateTime(e) {
                    var t = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
                        n = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
                    ! function run() {
                        Object(a.a)(null).i18n({
                            days: {
                                long: t.map(function(t) {
                                    return e.t("dt.day.".concat(t))
                                }),
                                short: t.map(function(t) {
                                    return e.t("dt.short.day.".concat(t))
                                })
                            },
                            months: {
                                long: n.map(function(t) {
                                    return e.t("dt.month.".concat(t))
                                }),
                                short: n.map(function(t) {
                                    return e.t("dt.short.month.".concat(t))
                                })
                            },
                            useTitleCase: !1
                        })
                    }()
                },
                convertToSpacetime: function convertToSpacetime(e) {
                    return this.getTime(e)
                },
                convertToSpacetimeWithTimezone: function convertToSpacetimeWithTimezone(e, t) {
                    return this.getTime(e, t)
                }
            }
        },
        iL91: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return T
            }), n.d(t, "b", function() {
                return x
            }), n.d(t, "a", function() {
                return k
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("nfbA"),
                i = n("7SM1"),
                o = n("OE2q"),
                u = n("QtlZ"),
                s = n("+/Je"),
                d = n("SsZN"),
                l = n("vjCh"),
                b = n("0HCW"),
                f = n("Bjre"),
                v = n("Hvhg"),
                p = n("SFoa"),
                O = n("zX3+"),
                g = n("2XY6"),
                m = n("LVcX"),
                E = n("mfas"),
                j = n("z5yO"),
                I = n("U3QC"),
                C = n("icD7"),
                h = n("6lNa"),
                _ = n("Cpup"),
                A = n("qixE"),
                y = n("K7i0"),
                S = n("bYXQ"),
                T = function sendMessageEpic(e, t) {
                    return e.pipe(Object(_.c)("SEND_MESSAGE"), Object(j.a)(function() {
                        return "controller" === u.a.name
                    }), Object(I.a)(function() {
                        var e = Object(i.a)(r.a.mark(function _callee(e) {
                            var n, a, i, o, d, j, I, C, _, T, x, k, R, N, M, D, w, L, P, V, F;
                            return r.a.wrap(function _callee$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return j = e.payload, (I = Object(p.l)() || Object(v.s)(t.value)) || !0 !== (null === (n = j.message) || void 0 === n ? void 0 : null === (a = n.attributes) || void 0 === a ? void 0 : a.buttonClicked) || Object(f.a)({
                                            topic: "syncSendMessage",
                                            payload: j.message
                                        }), C = Object(m.a)({}, ["activeCampaign"], t.value.campaigns), _ = t.value.conversations.activeConversation, T = Object(S.e)(_), x = !j.message.conversationId || j.message.conversationId === s.b, k = null === (i = t.value.conversations) || void 0 === i ? void 0 : i.exchangeId, R = function getConversationId() {
                                            return Object(m.a)(!1, ["attributes", "liveViewInitiated"], C) ? Object(m.a)(null, ["attributes", "conversationId"], C) : !T && _ ? _ : void 0
                                        }, N = Object(c.a)(Object(c.a)({}, j.message), {}, {
                                            conversationId: R(),
                                            attributes: Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({}, j.message.attributes ? j.message.attributes : {}), T ? t.value.conversations.resumeFlowContext : {}), T && I && {
                                                isFromConversationalLandingPage: !0
                                            }), T && {
                                                exchangeId: k
                                            }), {}, {
                                                embedId: t.value.embed.id
                                            })
                                        }), N = Object(E.a)(["failedToSend"], N), r.next = 13, Object(O.a)(N);
                                    case 13:
                                        if (M = r.sent) {
                                            r.next = 17;
                                            break
                                        }
                                        return u.a.dispatch(Object(y.j)({
                                            message: j.message,
                                            isPrerendered: T,
                                            isNew: x
                                        })), r.abrupt("return");
                                    case 17:
                                        if (D = M.data, u.a.dispatch(Object(y.k)({
                                                message: D,
                                                isPreRendered: T,
                                                isNew: x
                                            })), I || !0 !== (null === (o = j.message) || void 0 === o ? void 0 : null === (d = o.attributes) || void 0 === d ? void 0 : d.buttonClicked) || Object(f.a)({
                                                topic: "syncReceiveMessageSent",
                                                payload: {
                                                    message: D,
                                                    isPreRendered: T,
                                                    isNew: x
                                                }
                                            }), w = Object(b.k)(t.value), L = Object(b.b)(t.value), P = Object(g.d)(t.value), V = Object(b.g)(t.value), F = Object(b.c)(t.value), j.previousActiveConversationId || !D.conversationId) {
                                            r.next = 32;
                                            break
                                        }
                                        if (!w && !P) {
                                            r.next = 32;
                                            break
                                        }
                                        if (!V) {
                                            r.next = 32;
                                            break
                                        }
                                        return r.next = 31, Object(A.b)(h.b.SUBMITTED, {
                                            conversationId: D.conversationId
                                        });
                                    case 31:
                                        Object(l.k)(L, F);
                                    case 32:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(C.a)())
                },
                x = function receiveMessageSentEpic(e, t) {
                    return e.pipe(Object(_.c)("RECEIVE_MESSAGE_SENT"), Object(j.a)(function() {
                        return "controller" === u.a.name
                    }), Object(I.a)(function(e) {
                        var t = e.payload.message;
                        Object(S.a)(t) || Object(d.e)(t)
                    }), Object(C.a)())
                },
                k = function checkPermacloseConversationEpic(e, t) {
                    return e.pipe(Object(_.c)("SET_ACTIVE_CONVERSATION"), Object(j.a)(function() {
                        return "controller" === u.a.name
                    }), Object(I.a)(function() {
                        var e = Object(i.a)(r.a.mark(function _callee2(e) {
                            var n, a, c, i;
                            return r.a.wrap(function _callee2$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!((n = e.payload.conversationId) < 0 || n === s.b)) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        if (!Object(m.a)(!1, ["conversations", "conversationStatus", n, "permaclosed"], t.value)) {
                                            r.next = 6;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 6:
                                        return a = n, r.next = 9, Object(o.g)(a);
                                    case 9:
                                        c = r.sent, i = c.data.sentMessage, void 0 !== i && i && u.a.dispatch(Object(y.c)({
                                            conversationId: a
                                        }));
                                    case 13:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee2)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(C.a)())
                }
        },
        qixE: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return y
            }), n.d(t, "g", function() {
                return S
            }), n.d(t, "f", function() {
                return N
            }), n.d(t, "e", function() {
                return D
            }), n.d(t, "c", function() {
                return w
            }), n.d(t, "d", function() {
                return L
            }), n.d(t, "a", function() {
                return P
            });
            var a = n("nfbA"),
                r = n("mj2O"),
                c = n.n(r),
                i = n("7SM1"),
                o = n("OE2q"),
                u = n("QtlZ"),
                s = n("SsZN"),
                d = n("vjCh"),
                l = n("0HCW"),
                b = n("K7i0"),
                f = n("bYXQ"),
                v = n("SFoa"),
                p = n("PCkZ"),
                O = n("LVcX"),
                g = n("hm8b"),
                m = n("DboL"),
                E = n("BCC6"),
                j = n("MFhO"),
                I = n("6lNa"),
                C = n("PjZB"),
                h = n("0lfv"),
                _ = n("9xv8"),
                A = n("xwTo"),
                y = function() {
                    var e = Object(i.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r = arguments;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    t = r.length > 1 && void 0 !== r[1] ? r[1] : {}, c.t0 = e, c.next = c.t0 === I.b.LEAD_CAPTURED ? 4 : c.t0 === I.b.CLICKED ? 7 : c.t0 === I.b.SUBMITTED ? 7 : c.t0 === I.b.DISMISSED ? 7 : c.t0 === I.b.OPENED ? 7 : 13;
                                    break;
                                case 4:
                                    return c.next = 6, x(t);
                                case 6:
                                    return c.abrupt("return", c.sent);
                                case 7:
                                    return c.next = 9, k(e, t);
                                case 9:
                                    return n = c.sent, a = Object(O.a)(null, ["attributes", "campaignId"], n), S(a, e), c.abrupt("return", n);
                                case 13:
                                    return c.abrupt("break", 14);
                                case 14:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function createConversationEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function triggerAPIEventForConversationAction(e, t) {
                    e && Object(s.c)(t, e)
                },
                T = function() {
                    var e = Object(i.a)(c.a.mark(function _callee2(e) {
                        var t, n, a, r, i, s, d, f, p, m;
                        return c.a.wrap(function _callee2$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = Object(l.a)(Object(u.b)()), n = Object(v.d)(null === t || void 0 === t ? void 0 : t.id, "inboxId"), a = Object(O.a)(null, ["attributes", "campaignDisplayType"], t) === j.a.WELCOME_MESSAGE, r = Object(O.a)(null, ["attributes", "cta", "CtaType"], t) === C.a.LINK_TO_URL, !Object(h.m)(e)) {
                                        c.next = 6;
                                        break
                                    }
                                    return c.abrupt("return");
                                case 6:
                                    if (i = {
                                            campaignId: null === t || void 0 === t ? void 0 : t.id,
                                            relatedCampaignId: null === t || void 0 === t ? void 0 : t.id
                                        }, c.prev = 7, Object(g.a)(e.conversationId)) {
                                        c.next = 14;
                                        break
                                    }
                                    return c.next = 11, Object(o.j)(e);
                                case 11:
                                    return s = c.sent, d = s.data, c.abrupt("return", d);
                                case 14:
                                    return c.next = 16, Object(o.c)(e, i, {
                                        inboxId: n
                                    });
                                case 16:
                                    if (f = c.sent, p = f.data, m = p.conversationId, !a || !r) {
                                        c.next = 21;
                                        break
                                    }
                                    return c.abrupt("return", p);
                                case 21:
                                    return u.a.dispatch(Object(b.q)({
                                        conversationId: m
                                    })), c.abrupt("return", p);
                                case 25:
                                    c.prev = 25, c.t0 = c.catch(7), Object(h.f)("Failed to send conversation event", e);
                                case 28:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee2, null, [
                            [7, 25]
                        ])
                    }));
                    return function sendConversationEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = Object(i.a)(c.a.mark(function _callee3(e) {
                        var t;
                        return c.a.wrap(function _callee3$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (e.email) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    return t = {
                                        conversationId: e.conversationId,
                                        type: I.b.LEAD_CAPTURED,
                                        email: e.email,
                                        leadCapture: {
                                            email: e.email,
                                            integrations: Object(p.b)(),
                                            context: R()
                                        }
                                    }, n.next = 5, T(t);
                                case 5:
                                    return n.abrupt("return", n.sent);
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee3)
                    }));
                    return function createLeadCapturedConversationEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = Object(i.a)(c.a.mark(function _callee4(e) {
                        var t, n, r = arguments;
                        return c.a.wrap(function _callee4$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e && !Object(g.a)(t)) {
                                        c.next = 3;
                                        break
                                    }
                                    return c.abrupt("return");
                                case 3:
                                    return n = Object(a.a)({
                                        type: e
                                    }, t), c.next = 6, T(n);
                                case 6:
                                    return c.abrupt("return", c.sent);
                                case 7:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee4)
                    }));
                    return function captureConversationActionEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                R = function _hydrateConversationEventContext() {
                    var e = Object(u.b)().session,
                        t = (null === e || void 0 === e ? void 0 : e.context) || {},
                        n = t.userAgent,
                        a = t.locale,
                        r = t.timezone,
                        c = t.page;
                    return {
                        page: void 0 === c ? {} : c,
                        locale: a,
                        timezone: r,
                        userAgent: n
                    }
                },
                N = function() {
                    var e = Object(i.a)(c.a.mark(function _callee5() {
                        var e, t, n, a, r;
                        return c.a.wrap(function _callee5$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (e = Object(u.b)(), t = Object(l.b)(e), n = Object(O.a)(null, ["session", "visitInformation", "currentSessionStartedAt"], e), !t && !e.conversations.activeConversation && n) {
                                        c.next = 5;
                                        break
                                    }
                                    return c.abrupt("return", !1);
                                case 5:
                                    if (a = Object(m.a)(e.conversations.conversations).map(function(e) {
                                            return e.conversation
                                        }).filter(function(e) {
                                            return e.createdAt >= n
                                        }), r = M(a)) {
                                        c.next = 9;
                                        break
                                    }
                                    return c.abrupt("return", !1);
                                case 9:
                                    return u.a.dispatch(Object(b.q)({
                                        conversationId: r.id
                                    })), c.abrupt("return", !0);
                                case 11:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee5)
                    }));
                    return function showLatestSessionConversation() {
                        return e.apply(this, arguments)
                    }
                }(),
                M = function getMostRecentConversation(e) {
                    var t = Object(_.c)(e, "createdAt");
                    return Object(E.a)(t)
                },
                D = function() {
                    var e = Object(i.a)(c.a.mark(function _callee6(e, t) {
                        return c.a.wrap(function _callee6$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (n.prev = 0, Object(f.e)(e)) {
                                        n.next = 4;
                                        break
                                    }
                                    return n.next = 4, Object(o.a)(e, [t]);
                                case 4:
                                    u.a.dispatch(Object(b.o)({
                                        conversationId: e
                                    })), n.next = 10;
                                    break;
                                case 7:
                                    n.prev = 7, n.t0 = n.catch(0), Object(h.f)(new Error("Failed to mark message as read"), n.t0);
                                case 10:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee6, null, [
                            [0, 7]
                        ])
                    }));
                    return function markMessageAsRead(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function markActiveConversationAsRead() {
                    var e = Object(A.a)(Object(u.b)());
                    L(e)
                },
                L = function markConversationAsRead(e) {
                    if (e) {
                        var t = Object(u.b)().conversations,
                            n = (null === t || void 0 === t ? void 0 : t.unreadAgentMessages[e]) || [];
                        if (n.length) try {
                            Object(f.e)(e) || Object(o.a)(e, n), u.a.dispatch(Object(b.o)({
                                conversationId: e
                            }))
                        } catch (a) {
                            Object(h.f)(new Error("Failed to mark conversation as read"), a)
                        }
                    }
                },
                P = function() {
                    var e = Object(i.a)(c.a.mark(function _callee7(e) {
                        var t, n, a, r, i, s, l, f, p, O, g;
                        return c.a.wrap(function _callee7$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = e.interactionId, n = e.locale, a = void 0 === n ? "" : n, r = e.goToConversation, i = e.isFromConversationalLandingPage, s = e.fromAPI, l = void 0 === s || s, a = a || Object(v.f)(), Object(d.g)(t), c.next = 5, Object(o.b)(t, {
                                        isTriggeredFromAPI: l,
                                        locale: a,
                                        goToConversation: r,
                                        isFromConversationalLandingPage: i
                                    });
                                case 5:
                                    return f = c.sent, p = f.data, c.next = 9, Object(o.h)(p.conversationId);
                                case 9:
                                    return O = c.sent, g = O.data, u.a.dispatch(Object(b.i)({
                                        conversation: g
                                    })), c.next = 14, p.conversationId;
                                case 14:
                                    return c.abrupt("return", c.sent);
                                case 15:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee7)
                    }));
                    return function createBotConvoAndDispatch(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        uzby: function(e, t, n) {
            "use strict";
            var a = n("WwEg"),
                r = n("da4L"),
                c = n("LVcX"),
                i = n("0B8E"),
                o = n("TbSn"),
                u = n("Jstd"),
                s = n("U505"),
                d = n("PjZB"),
                l = n("Cpup"),
                b = {
                    SET_HAS_SENT_IMPRESSION: function setHasSentImpressionHandler(e) {
                        e.draft.hasSentImpression = !0
                    },
                    RECEIVE_ACTIVE_CAMPAIGN: function receiveNewBotCampaignMessageHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            o = Object(c.a)({}, ["data"], t.payload),
                            u = Object(r.a)(o, "playbookId");
                        n.active = Object(i.a)([].concat(Object(a.a)(n.active), [u]))
                    },
                    RECEIVE_INITIAL_ACTIVE_CONVERSATION: function receiveInitialActiveConversationHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = Object(c.a)(null, ["payload", "conversation", "conversation", "id"], t);
                        a && (n.initialConversationId = a)
                    },
                    RECEIVE_MESSAGES_FOR_CONVERSATION: function receiveMessagesForConversationHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            c = t.payload.messages,
                            s = Object(o.a)(t.payload.messages),
                            l = Object(r.d)(s, "startInteraction"),
                            b = Object(u.a)(function(e) {
                                return e.viewerRecipientStatus === d.f.READ
                            }, c);
                        if (l && b && s.conversationId === n.initialConversationId) {
                            var f = Object(r.a)(s, "playbookId");
                            n.passive = Object(i.a)([].concat(Object(a.a)(n.passive), [f]))
                        }
                    },
                    REMOVE_TRIGGERABLE_CAMPAIGN_IMPRESSION: function removeTriggerableCampaignImpressionHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            a = t.payload,
                            r = a.source,
                            c = a.playbookId;
                        "active" === r ? n.active = Object(s.a)([c], n.active) : "passive" === r && (n.passive = Object(s.a)([c], n.passive))
                    }
                };
            t.a = Object(l.b)({
                hasSentImpression: !1,
                initialConversationId: null,
                active: [],
                passive: []
            }, b)
        },
        vjCh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return L
            }), n.d(t, "b", function() {
                return P
            }), n.d(t, "k", function() {
                return V
            }), n.d(t, "j", function() {
                return F
            }), n.d(t, "d", function() {
                return U
            }), n.d(t, "e", function() {
                return G
            }), n.d(t, "f", function() {
                return B
            }), n.d(t, "i", function() {
                return W
            }), n.d(t, "g", function() {
                return Y
            }), n.d(t, "h", function() {
                return Z
            }), n.d(t, "c", function() {
                return K
            });
            var a = n("nfbA"),
                r = n("mj2O"),
                c = n.n(r),
                i = n("7SM1"),
                o = n("xXFf"),
                u = n("QtlZ"),
                s = n("sxX9"),
                d = n("SsZN"),
                l = n("Wjfv"),
                b = n("K7i0"),
                f = n("xwTo"),
                v = n("Hvhg"),
                p = n("SFoa"),
                O = n("y0Ar"),
                g = n("TDUE"),
                m = n("da4L"),
                E = n("2XY6"),
                j = n("LVcX"),
                I = n("YsSj"),
                C = n("mfas"),
                h = n("TbSn"),
                _ = n("NFvl"),
                A = n("vYqp"),
                y = n("hm8b"),
                S = n("YvIt"),
                T = n("MFhO"),
                x = n("PjZB"),
                k = n("0lfv"),
                R = n("t8ds"),
                N = n("La++"),
                M = n("0HCW"),
                D = n("9ttK"),
                w = function() {
                    var e = Object(i.a)(c.a.mark(function _callee() {
                        var e, t, n, a;
                        return c.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (e = Object(u.b)(), t = e.session || {}, n = Object(j.a)(null, ["visitInformation", "currentSessionStartedAt"], t)) {
                                        r.next = 5;
                                        break
                                    }
                                    return r.abrupt("return", []);
                                case 5:
                                    return a = Object(f.c)(e), r.abrupt("return", Object(I.a)(function(e) {
                                        return e.createdAt >= n
                                    }, a));
                                case 7:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function getSessionCampaignConversations() {
                        return e.apply(this, arguments)
                    }
                }(),
                L = function assignActiveCampaignFromEmbed(e, t) {
                    var n = Object(D.a)(e, ["displayType"]),
                        r = {
                            id: e.id,
                            attributes: Object(a.a)(Object(a.a)({}, e.attributes), {}, {
                                message: t,
                                campaignId: e.id,
                                campaignDisplayType: n
                            }),
                            inboxId: e.inboxId
                        };
                    u.a.dispatch(Object(l.c)({
                        data: r
                    }))
                },
                P = function assignActiveCampaignFromMessage(e) {
                    if (!Object(k.m)(e)) {
                        var t = Object(m.a)(e, "campaignId");
                        if (!t && Object(m.d)(e, "startInteraction")) {
                            var n, a = Object(m.a)(e, "startInteraction");
                            t = null === (n = Object(p.c)(a)) || void 0 === n ? void 0 : n.id
                        }
                        var r = Object(C.a)(["attributes"], e),
                            c = {
                                id: t,
                                attributes: e.attributes || {},
                                message: r,
                                inboxId: e.inboxId
                            };
                        u.a.dispatch(Object(l.c)({
                            data: c
                        }))
                    }
                },
                V = function() {
                    var e = Object(i.a)(c.a.mark(function _callee2(e, t) {
                        var n;
                        return c.a.wrap(function _callee2$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (e) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    return a.next = 4, $(e);
                                case 4:
                                    if (n = Object(p.b)(e), Object(D.a)(n, ["campaignReenrollmentType"], null) !== T.b.ALWAYS) {
                                        a.next = 10;
                                        break
                                    }
                                    return a.next = 9, Object(g.c)(t);
                                case 9:
                                    return a.abrupt("return");
                                case 10:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee2)
                    }));
                    return function storeAnnouncementCampaignCompleted(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                F = function showUnreadCampaign(e) {
                    var t = Object(u.b)(),
                        n = t.campaigns,
                        r = void 0 === n ? {} : n,
                        c = Object(f.b)(t);
                    if (!r.activeCampaign.id && !c) {
                        var i = Object(M.i)()[e];
                        if (i) {
                            var o = i.conversation,
                                s = void 0 === o ? {} : o,
                                l = i.messages,
                                v = void 0 === l ? [] : l,
                                p = v[0],
                                g = Object(m.a)(p, "playbookId"),
                                E = Object(m.a)(p, "interactionId"),
                                j = Object(m.a)(p, "isExperiment"),
                                I = Object(m.a)(p, "playbookVersion");
                            u.a.dispatch(Object(b.i)({
                                conversation: {
                                    conversation: s
                                }
                            })), u.a.dispatch(Object(b.l)({
                                conversationId: s.id,
                                messages: v
                            })), u.a.dispatch(Object(b.q)({
                                conversationId: s.id
                            })), Object(d.p)(Object(a.a)(Object(a.a)({}, p), {}, {
                                id: null,
                                conversationId: null
                            })), P(p), Object(O.a)({
                                playbookId: g,
                                interactionId: E,
                                isExperiment: j,
                                playbookVersion: I
                            })
                        }
                    }
                },
                U = function evaluateCampaignConversations() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = H(e);
                    u.a.dispatch(Object(l.h)(t)), u.a.dispatch(Object(b.h)(e))
                },
                G = function getUnreadCampaignIds() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return H(e).map(function(e) {
                        return e.conversation.campaignId
                    })
                },
                B = function getUnreadCampaignIdsFromStore() {
                    return Object(u.b)().campaigns.unreadCampaigns.map(function(e) {
                        return e.conversation.campaignId
                    })
                },
                H = function getUnreadCampaigns() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e.filter(function(e) {
                        return function isBotCampaign(e) {
                            return "CHAT" === Object(j.a)(null, ["conversation", "type"], e)
                        }(e) && function isFirstMessageUnread(e) {
                            var t = e.messages.filter(function(e) {
                                return "" !== e.body
                            });
                            return !Object(k.m)(t) && Object(j.a)(null, [0, "viewerRecipientStatus"], t) !== x.f.READ
                        }(e)
                    })
                },
                W = function() {
                    var e = Object(i.a)(c.a.mark(function _callee3() {
                        var e, t, n, a, r, i, o, s, d, l, f, O, g, m;
                        return c.a.wrap(function _callee3$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.next = 2, R.a.get(S.a);
                                case 2:
                                    if (t = c.sent, n = t.data, a = void 0 === n ? {} : n, r = Object(u.b)(), i = Object(v.e)(r), !Object(k.m)(a)) {
                                        c.next = 9;
                                        break
                                    }
                                    return c.abrupt("return", !1);
                                case 9:
                                    if (o = a[i] || []) {
                                        c.next = 12;
                                        break
                                    }
                                    return c.abrupt("return");
                                case 12:
                                    return s = Object(h.a)(o), c.next = 15, w();
                                case 15:
                                    if (d = c.sent, !(l = d[s])) {
                                        c.next = 20;
                                        break
                                    }
                                    return u.a.dispatch(Object(b.q)({
                                        conversationId: Object(_.a)(["id"], l)
                                    })), c.abrupt("return", !0);
                                case 20:
                                    if (f = Object(p.b)(s)) {
                                        c.next = 23;
                                        break
                                    }
                                    return c.abrupt("return", !1);
                                case 23:
                                    return O = Object(_.a)(["attributes", "interactionId"], f), g = Object(_.a)(["attributes", "playbookId"], f), c.next = 27, Object(N.a)({
                                        playbookId: g,
                                        campaignId: s,
                                        interactionId: O,
                                        inboxId: f.inboxId
                                    });
                                case 27:
                                    if (m = c.sent) {
                                        c.next = 30;
                                        break
                                    }
                                    return c.abrupt("return", !1);
                                case 30:
                                    return u.a.dispatch(Object(b.n)({
                                        campaignId: s,
                                        messages: null !== (e = null === m || void 0 === m ? void 0 : m.messages) && void 0 !== e ? e : [],
                                        resumeFlowContext: Object(A.a)(y.a, m.resumeFlowContext),
                                        exchangeId: null === m || void 0 === m ? void 0 : m.exchangeId
                                    })), c.abrupt("return", !0);
                                case 32:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee3)
                    }));
                    return function showLastCampaignInSession() {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = function markEnrolledInteraction(e) {
                    u.a.dispatch(Object(l.f)(e))
                },
                $ = function() {
                    var e = Object(i.a)(c.a.mark(function _callee4(e) {
                        var t, n, a;
                        return c.a.wrap(function _callee4$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = Object(u.b)(), n = t.session, r.prev = 1, a = Object(j.a)(null, ["endUser", "id"], n), r.next = 5, Object(o.e)({
                                        endUserId: a,
                                        campaignId: e,
                                        sessionId: null === n || void 0 === n ? void 0 : n.campaignRefreshToken
                                    });
                                case 5:
                                    return r.abrupt("return", r.sent);
                                case 8:
                                    return r.prev = 8, r.t0 = r.catch(1), Object(k.f)("Failed to persist campaign interaction: ".concat(r.t0.message)), r.abrupt("return", null);
                                case 12:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee4, null, [
                            [1, 8]
                        ])
                    }));
                    return function triggerCampaignInteractionEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = function shouldSkipCampaignRetargeting() {
                    var e = Object(u.b)(),
                        t = Object(f.l)(),
                        n = Object(M.j)(e),
                        a = Object(E.c)(e),
                        r = Object(E.a)(e);
                    return !!t || r !== s.b.WELCOME_MESSAGE && (a && n)
                },
                K = function clearCurrentCampaign() {
                    u.a.dispatch(Object(l.a)()), u.a.dispatch(Object(b.a)())
                }
        },
        xwTo: function(e, t, n) {
            "use strict";
            n.d(t, "j", function() {
                return b
            }), n.d(t, "l", function() {
                return v
            }), n.d(t, "m", function() {
                return p
            }), n.d(t, "d", function() {
                return O
            }), n.d(t, "a", function() {
                return g
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "c", function() {
                return E
            }), n.d(t, "k", function() {
                return j
            }), n.d(t, "g", function() {
                return I
            }), n.d(t, "f", function() {
                return C
            }), n.d(t, "e", function() {
                return h
            }), n.d(t, "h", function() {
                return _
            }), n.d(t, "i", function() {
                return A
            });
            var a = n("QtlZ"),
                r = n("+/Je"),
                c = n("da4L"),
                i = n("LVcX"),
                o = n("i9gz"),
                u = n("DboL"),
                s = n("9A2/"),
                d = n("hm8b"),
                l = n("NFvl"),
                b = function getVisibleActiveConversationMessages(e) {
                    var t = e.conversations,
                        n = void 0 === t ? {} : t,
                        a = n.activeConversation;
                    if (!a) return [];
                    var r = Object(i.a)({}, ["messages", a], n);
                    return Object(o.a)(r) ? [] : Object(c.s)(r)
                },
                f = function conversationHasEndUserMessages(e) {
                    var t = function getConversationMessages(e) {
                        var t = Object(a.b)().conversations,
                            n = void 0 === t ? {} : t,
                            r = Object(i.a)({}, ["messages", e], n);
                        return Object(u.a)(r)
                    }(e);
                    if (!t || !t.length) return !1;
                    var n = Object(s.a)(function(e) {
                        return Object(c.i)(e)
                    }, t);
                    return !Object(d.a)(n)
                },
                v = function hasActiveConversationBeenInteractedWith() {
                    var e = Object(a.b)(),
                        t = g(e);
                    return !!t && f(t)
                },
                p = function hasAnyConversations(e) {
                    var t = Object(i.a)({}, ["conversations", "conversations"], e);
                    return !Object(o.a)(t)
                },
                O = function getEndUserEngaged(e) {
                    return Object(i.a)(!1, ["conversations", "endUserEngaged"], e)
                },
                g = function getActiveConversationId(e) {
                    return Object(l.a)(["conversations", "activeConversation"], e)
                },
                m = function getActiveDriftlink(e) {
                    return Object(i.a)(null, ["conversations", "activeDriftlink"], e)
                },
                E = function getCampaignConversations(e) {
                    return Object(i.a)([], ["conversations", "campaignConversations"], e)
                },
                j = function hasActiveConversation(e) {
                    return !!Object(i.a)(null, ["conversations", "activeConversation"], e)
                },
                I = function getIsActiveConversationPermaclosed(e) {
                    var t = g(e);
                    return Object(i.a)(!1, ["conversations", "conversationStatus", t, "permaclosed"], e)
                },
                C = function getIsActiveConversationNew(e) {
                    return g(e) === r.a
                },
                h = function getIgnoredConversations(e) {
                    return Object(i.a)([], ["conversations", "ignoredConversations"], e)
                },
                _ = function getIsActiveConversationUnfollowed(e) {
                    var t = g(e);
                    return Object(i.a)(!1, ["conversations", "conversations", t, "conversation", "conversationProperties", "unfollowedConversation"], e)
                },
                A = function getPreRenderedDefaultMessages(e) {
                    return Object(i.a)({}, ["conversations", "preRenderedDefaultMessages"], e)
                }
        },
        y0Ar: function(e, t, n) {
            "use strict";
            var a = n("QtlZ"),
                r = n("Cpup"),
                c = n("gG69"),
                i = n("TDUE");
            n.d(t, "a", function() {
                return o
            });
            var o = function sendPlaybookImpression(e) {
                var t = e.playbookId,
                    n = e.interactionId,
                    o = e.conversationId,
                    u = e.isVirtual,
                    s = void 0 !== u && u,
                    d = e.isDelayed,
                    l = void 0 !== d && d,
                    b = e.isExperiment,
                    f = e.playbookVersion,
                    v = Object(a.b)().impressions,
                    p = v.active,
                    O = void 0 === p ? [] : p,
                    g = v.passive,
                    m = void 0 === g ? [] : g,
                    E = O.includes(t),
                    j = m.includes(t);
                (E || j) && (Object(i.d)(E ? c.c.ACTIVE_PLAYBOOK : c.c.PASSIVE_PLAYBOOK, {
                    playbookId: t,
                    interactionId: n,
                    conversationId: o,
                    virtual: s,
                    isDelayed: l,
                    isExperiment: b,
                    playbookVersion: f
                }) && a.a.dispatch(function removeTriggerableCampaignImpression(e) {
                    return Object(r.a)({
                        type: "REMOVE_TRIGGERABLE_CAMPAIGN_IMPRESSION",
                        payload: e
                    })
                }({
                    source: E ? "active" : "passive",
                    playbookId: t
                })))
            }
        },
        zYBT: function(e, t, n) {
            "use strict";
            var a = n("fWWA"),
                r = n("ERkP"),
                c = n.n(r),
                i = n("0O9J"),
                o = n("ZO/3"),
                u = n("UAFN"),
                s = n("SkRI"),
                d = (n("V4ET"), n("Yl0Q"), Object(r.lazy)(function() {
                    return Object(s.a)(function() {
                        return Promise.all([n.e(0), n.e(32), n.e(27), n.e(25)]).then(n.bind(null, "7fJ7"))
                    })
                })),
                l = Object(r.lazy)(function() {
                    return Object(s.a)(function() {
                        return n.e(39).then(n.bind(null, "2AO3"))
                    })
                }),
                b = Object(r.lazy)(function() {
                    return Object(s.a)(function() {
                        return n.e(38).then(n.bind(null, "DpcA"))
                    })
                }),
                f = Object(r.lazy)(function() {
                    return Object(s.a)(function() {
                        return Promise.all([n.e(0), n.e(23)]).then(n.bind(null, "WjTm"))
                    })
                }),
                v = Object(r.lazy)(function() {
                    return Object(s.a)(function() {
                        return Promise.all([n.e(0), n.e(30)]).then(n.bind(null, "gSHW"))
                    })
                }),
                p = Object(r.lazy)(function() {
                    return Object(s.a)(function() {
                        return Promise.all([n.e(3), n.e(1), n.e(33)]).then(n.bind(null, "0Q1V"))
                    })
                });
            t.a = function AppLayout() {
                return c.a.createElement(a.a, null, c.a.createElement(i.a, {
                    basename: "core"
                }, c.a.createElement(c.a.Fragment, null, c.a.createElement(o.a, null, c.a.createElement(u.a, {
                    exact: !0,
                    path: "/"
                }, c.a.createElement(r.Suspense, {
                    fallback: c.a.createElement("div", null)
                }, c.a.createElement(d, null))), c.a.createElement(u.a, {
                    path: "/chat"
                }, c.a.createElement(r.Suspense, {
                    fallback: c.a.createElement("div", null)
                }, c.a.createElement(l, null))), c.a.createElement(u.a, {
                    path: "/takeover"
                }, c.a.createElement(r.Suspense, {
                    fallback: c.a.createElement("div", null)
                }, c.a.createElement(b, null))), c.a.createElement(u.a, {
                    path: "/emailCapture"
                }, c.a.createElement(r.Suspense, {
                    fallback: c.a.createElement("div", null)
                }, c.a.createElement(f, null))), c.a.createElement(u.a, {
                    exact: !0,
                    path: "/slider"
                }, c.a.createElement(r.Suspense, {
                    fallback: c.a.createElement("div", null)
                }, c.a.createElement(v, null))), c.a.createElement(u.a, {
                    exact: !0,
                    path: "/landingPage"
                }, c.a.createElement(r.Suspense, {
                    fallback: c.a.createElement("div", null)
                }, c.a.createElement(p, null)))))))
            }
        },
        zygl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var a = n("xwTo"),
                r = n("X9/c"),
                c = n("U3QC"),
                i = n("icD7"),
                o = n("Cpup"),
                u = function resizeControllerAfterCampaignClear(e, t) {
                    return e.pipe(Object(o.c)("CLEAR_ACTIVE_CAMPAIGN"), Object(c.a)(function() {
                        var e = t.value.view;
                        (void 0 === e ? {} : e).matchedTargeting || Object(a.k)(t.value) || Object(r.a)()
                    }), Object(i.a)())
                }
        }
    }
]);