(window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        "1kux": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                o = n("QtlZ"),
                i = n("ILQF"),
                s = n("xwTo"),
                u = n("2XY6"),
                l = n("LVcX"),
                d = function() {
                    var e = Object(c.a)(r.a.mark(function _callee() {
                        var e, t, n, a, c;
                        return r.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (e = Object(o.b)(), t = Object(l.a)(!1, ["embed", "configuration", "theme", "soundNotificationEnabled"], e), n = Object(l.a)(!1, ["embed", "configuration", "theme", "notificationOnFirstVisitOnlyEnabled"], e), a = Object(u.c)(e), c = Object(s.a)(e) || null, !t) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.next = 8, Object(i.a)({
                                        topic: "play-host-notification",
                                        message: {
                                            chatOpen: a,
                                            notificationOnFirstVisitOnly: n,
                                            activeConversationId: c
                                        }
                                    });
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function playSoundNotification() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        "76KI": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var a = n("QtlZ"),
                r = n("LVcX"),
                c = function hasGate(e) {
                    return Object(r.a)(!1, ["embed", "configuration", "gates", e], Object(a.b)())
                }
        },
        "7fJ7": function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n("mj2O"),
                c = n.n(r),
                o = n("7SM1"),
                i = n("s8DI"),
                s = n("QtlZ"),
                u = n("Wjfv"),
                l = n("ILQF"),
                d = function UseRemoveActiveCampaign() {
                    Object(l.c)({
                        topic: "CONDUCTOR:remove-active-campaign",
                        handler: function handler(e) {
                            s.a.dispatch(Object(u.a)())
                        }
                    })
                },
                b = n("nfbA"),
                p = n("mfas"),
                f = function UseStateSnapShot() {
                    return Object(l.c)({
                        topic: "CONDUCTOR:request-state-from-controller",
                        handler: function handler(e) {
                            var t = e.data,
                                n = Object(s.b)();
                            Object(l.a)({
                                topic: "".concat(t.name, ":state-snap-shot"),
                                message: {
                                    state: Object(b.a)(Object(b.a)({}, Object(p.a)(["session"], n)), {}, {
                                        session: Object(p.a)(["sockets"], n.session)
                                    })
                                }
                            })
                        }
                    }), s.a
                },
                v = n("My8U"),
                h = n("+MHw"),
                g = n("dT9Q"),
                O = n("BY8A"),
                j = n("yXOZ"),
                m = n("qATS"),
                _ = n("Sn8X"),
                k = n("ERkP"),
                y = n.n(k),
                w = function ControllerLayout() {
                    return Object(_.a)(), y.a.createElement("main", {
                        role: "main",
                        "aria-label": "Drift Widget messenger icon"
                    }, y.a.createElement(O.a, null), y.a.createElement(y.a.Fragment, null, y.a.createElement(g.a, null), y.a.createElement(j.a, null), y.a.createElement(h.a, null)))
                },
                I = function() {
                    var e = Object(m.a)();
                    return y.a.createElement(y.a.Fragment, null, e && y.a.createElement(w, null))
                },
                x = n("WwEg"),
                C = n("OE2q"),
                E = n("LqZ+"),
                T = n("vjCh"),
                S = n("Ldxc"),
                A = n("La++"),
                D = n("0HCW"),
                L = n("qixE"),
                R = n("K7i0"),
                P = n("xwTo"),
                M = n("5ZR4"),
                N = n("B8JY"),
                V = n("Hvhg"),
                U = n("SFoa"),
                F = n("PCkZ"),
                $ = n("TDUE"),
                B = n("pu/X"),
                G = n("Gxm1"),
                H = n("SHZQ"),
                q = n("qwiD"),
                W = n("2XY6"),
                Y = n("K0Zh"),
                J = n("Maj3"),
                K = n("ADGC"),
                Q = n("gG69"),
                X = n("0lfv"),
                z = n("OA1u"),
                Z = n("LVcX"),
                ee = n("Jstd"),
                te = n("4Zd6"),
                ne = n("EQxi"),
                ae = function transformNumericConditionValues(e) {
                    return "string" === typeof e ? Object(X.w)(e) : "object" === typeof e && e.min && e.max ? {
                        min: Object(X.w)(e.min),
                        max: Object(X.w)(e.max)
                    } : e
                },
                re = function getSecondsOnPage(e) {
                    var t = Object(Z.a)(0, ["_window", "drift_page_view_started"])(e);
                    return (new Date).getTime() / 1e3 - t
                },
                ce = function isAnyOf(e, t) {
                    return Object(ee.a)(function(e) {
                        return t === e
                    })(e)
                },
                oe = function notIsAnyOf(e, t) {
                    return !ce(e, t)
                },
                ie = function is(e, t) {
                    return e === t
                },
                se = function notIs(e, t) {
                    return e !== t
                },
                ue = function lessThan(e, t) {
                    return t < e
                },
                le = function greaterThan(e, t) {
                    return t > e
                },
                de = function isBetween(e, t) {
                    return !!e.min && !!e.max && t >= e.min && t <= e.max
                },
                be = function includesAnyOf(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return Object(ee.a)(function(e) {
                        return -1 !== t.indexOf(e)
                    })(e)
                },
                pe = function notIncludesAnyOf(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return Object(te.a)(function(e) {
                        return -1 === t.indexOf(e)
                    })(e)
                },
                fe = {
                    device: {
                        async: !1,
                        selector: function selector(e) {
                            return function resolveDeviceType(e) {
                                var t = e.toLowerCase();
                                return t.match(/(mobi|phone|ipod|blackberry|docomo|iphone|android)/i) ? "mobile" : t.match(/(ipad|kindle)/i) ? "tablet" : "desktop"
                            }(Object(Z.a)("", ["_window", "userAgent"])(e))
                        },
                        operands: {
                            isAnyOf: ce,
                            notIsAnyOf: oe
                        }
                    },
                    daysSinceLastVisit: {
                        async: !1,
                        selector: function selector(e) {
                            return Object(Z.a)(0, ["visitInformation", "daysSinceLastVisit"])(e)
                        },
                        transformValueFn: function transformValueFn(e) {
                            return ae(e)
                        },
                        operands: {
                            is: ie,
                            notIs: se,
                            lessThan: ue,
                            greaterThan: le,
                            isBetween: de
                        }
                    },
                    referrer: {
                        async: !1,
                        transformValueFn: function transformValueFn(e) {
                            return e.map(function(e) {
                                return Object(ne.c)(e)
                            })
                        },
                        selector: function selector(e) {
                            return Object(ne.c)(Object(Z.a)("", ["referrer"])(e))
                        },
                        operands: {
                            is: ie,
                            notIs: se,
                            isAnyOf: ce,
                            notIsAnyOf: oe,
                            includesAnyOf: be,
                            notIncludesAnyOf: pe
                        }
                    },
                    cookie: {
                        async: !1,
                        selector: function selector(e) {
                            return Object.entries(Object(Z.a)({}, ["cookies"])(e)).map(function(e) {
                                return e.join("=")
                            })
                        },
                        operands: {
                            is: be,
                            notIs: pe,
                            isAnyOf: be,
                            notIsAnyOf: pe,
                            includesAnyOf: be,
                            notIncludesAnyOf: pe
                        }
                    },
                    scrollPct: {
                        async: !0,
                        eventType: "scroll",
                        transformValueFn: function transformValueFn(e) {
                            return ae(e)
                        },
                        selector: function selector(e) {
                            var t = Object(Z.a)(0, ["_window", "scrollY"])(e);
                            return (Object(Z.a)(0, ["_window", "innerHeight"])(e) + t) / Object(Z.a)(0, ["scrollableHeight"])(e) * 100
                        },
                        operands: {
                            lessThan: ue,
                            greaterThan: le,
                            isBetween: de
                        }
                    },
                    secondsOnPage: {
                        async: !0,
                        timer: !0,
                        eventType: "timer",
                        selector: function selector(e) {
                            return re(e)
                        },
                        transformValueFn: function transformValueFn(e) {
                            return ae(e)
                        },
                        operands: {
                            lessThan: ue,
                            greaterThan: le,
                            isBetween: de
                        }
                    },
                    secondsOnSite: {
                        async: !0,
                        timer: !0,
                        eventType: "timer",
                        transformValueFn: function transformValueFn(e) {
                            return ae(e)
                        },
                        selector: function selector(e) {
                            var t = Object(Z.a)(0, ["_window", "drift_session_started"])(e);
                            return (new Date).getTime() / 1e3 - t
                        },
                        operands: {
                            lessThan: ue,
                            greaterThan: le,
                            isBetween: de
                        }
                    },
                    exitIntent: {
                        async: !0,
                        eventType: "mouseleave",
                        eventProperties: ["clientY"],
                        selector: function selector() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (Object(Z.a)(!1, ["hasExitIntent"])(e)) return !0;
                            var t = Object(Z.a)(0, ["_window", "innerHeight"])(e),
                                n = Object(Z.a)(t, ["eventContext", "clientY"])(e),
                                a = re(e);
                            return n / t < .5 && a > 5
                        },
                        operands: {
                            is: ie,
                            notIs: se
                        }
                    },
                    autoAssigneeId: {
                        async: !1,
                        selector: function selector(e) {
                            return Object(Z.a)("", ["autoAssigneeId"])(e)
                        },
                        operands: {
                            is: ie,
                            notIs: se,
                            isAnyOf: ce,
                            notIsAnyOf: oe
                        }
                    },
                    inboxId: {
                        async: !1,
                        selector: function selector(e) {
                            return Object(Z.a)("", ["embed", "configuration", "inboxId"])(e)
                        },
                        operands: {
                            isAnyOf: ce,
                            notIsAnyOf: oe
                        }
                    }
                },
                ve = function isUnsupportedConditionOrOperator(e) {
                    return !fe[e.field] || !fe[e.field].operands[e.operator]
                },
                he = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e, t) {
                        var n, a, r, o, i, s;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (!ve(e)) {
                                        c.next = 2;
                                        break
                                    }
                                    return c.abrupt("return", Promise.resolve({
                                        conditionEvaluation: !0,
                                        conditionEvalDetail: {
                                            evaluatedCondition: e,
                                            matched: !0,
                                            status: "EVALUATED"
                                        }
                                    }));
                                case 2:
                                    return n = fe[e.field], a = n.operands[e.operator], r = n.transformValueFn ? n.transformValueFn(e.value) : e.value, c.next = 7, n.selector(t, e);
                                case 7:
                                    return o = c.sent, i = a(r, o), s = {
                                        evaluatedCondition: e,
                                        matched: i,
                                        actualValue: o,
                                        status: n.async ? i ? "EVALUATED" : "PENDING" : "EVALUATED"
                                    }, c.abrupt("return", Promise.resolve({
                                        conditionEvaluation: i,
                                        conditionEvalDetail: s
                                    }));
                                case 11:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function evaluateSingleCondition(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                ge = function conditionEvaluator(e) {
                    return function(t) {
                        return he(e, t)
                    }
                },
                Oe = function() {
                    var e = Object(o.a)(c.a.mark(function _callee3(e) {
                        var t, n, a, r, i, s, u, l, d, b, p, f, v, h, g;
                        return c.a.wrap(function _callee3$(O) {
                            for (;;) switch (O.prev = O.next) {
                                case 0:
                                    t = e.context, n = e.conditions, a = !1, r = [], i = [], s = function() {
                                        var e = Object(o.a)(c.a.mark(function _callee2(e) {
                                            var n, a, o, i, s, u, l, d, b, p, f, v, h, g, O, j, m;
                                            return c.a.wrap(function _callee2$(_) {
                                                for (;;) switch (_.prev = _.next) {
                                                    case 0:
                                                        n = !0, a = [], _.t0 = c.a.keys(e);
                                                    case 3:
                                                        if ((_.t1 = _.t0()).done) {
                                                            _.next = 23;
                                                            break
                                                        }
                                                        return o = _.t1.value, i = e[o], _.next = 8, he(i, t);
                                                    case 8:
                                                        if (s = _.sent, u = s.conditionEvalDetail, l = s.conditionEvaluation, a.push(u), l || ve(u.evaluatedCondition)) {
                                                            _.next = 21;
                                                            break
                                                        }
                                                        if (d = fe[i.field], b = d.async, p = void 0 !== b && b, f = d.eventType, v = void 0 === f ? null : f, h = d.timer, g = void 0 !== h && h, O = d.selector, j = d.eventProperties, m = void 0 === j ? [] : j, n = !1, !p) {
                                                            _.next = 19;
                                                            break
                                                        }
                                                        r.push({
                                                            conditionDefinition: i,
                                                            selector: O,
                                                            eventType: v,
                                                            timer: g,
                                                            eventProperties: m,
                                                            type: i.field,
                                                            evaluator: ge(i)
                                                        }), _.next = 21;
                                                        break;
                                                    case 19:
                                                        return r = [], _.abrupt("break", 23);
                                                    case 21:
                                                        _.next = 3;
                                                        break;
                                                    case 23:
                                                        return _.abrupt("return", Promise.resolve({
                                                            fullGroupMatch: n,
                                                            groupEval: {
                                                                targetingConditions: a,
                                                                status: r.length ? "PENDING" : "EVALUATED"
                                                            }
                                                        }));
                                                    case 24:
                                                    case "end":
                                                        return _.stop()
                                                }
                                            }, _callee2)
                                        }));
                                        return function evaluateConditions(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), u = !0, l = !1, d = void 0, O.prev = 8, b = n[Symbol.iterator]();
                                case 10:
                                    if (u = (p = b.next()).done) {
                                        O.next = 25;
                                        break
                                    }
                                    return f = p.value, O.next = 14, s(f);
                                case 14:
                                    if (v = O.sent, h = v.fullGroupMatch, g = v.groupEval, i.push(g), !h) {
                                        O.next = 22;
                                        break
                                    }
                                    return a = !0, r = [], O.abrupt("break", 25);
                                case 22:
                                    u = !0, O.next = 10;
                                    break;
                                case 25:
                                    O.next = 31;
                                    break;
                                case 27:
                                    O.prev = 27, O.t0 = O.catch(8), l = !0, d = O.t0;
                                case 31:
                                    O.prev = 31, O.prev = 32, u || null == b.return || b.return();
                                case 34:
                                    if (O.prev = 34, !l) {
                                        O.next = 37;
                                        break
                                    }
                                    throw d;
                                case 37:
                                    return O.finish(34);
                                case 38:
                                    return O.finish(31);
                                case 39:
                                    return O.abrupt("return", Promise.resolve({
                                        matched: a,
                                        asyncConditionListeners: r,
                                        evalLog: i
                                    }));
                                case 40:
                                case "end":
                                    return O.stop()
                            }
                        }, _callee3, null, [
                            [8, 27, 31, 39],
                            [32, , 34, 38]
                        ])
                    }));
                    return function evaluateTargetingConditions(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                je = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        return c.a.wrap(function _callee$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(l.a)({
                                        topic: "kill-announcement-frames",
                                        message: {}
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee)
                    }));
                    return function requestKillAnnouncementFrames() {
                        return e.apply(this, arguments)
                    }
                }(),
                me = {
                    isFromConversationalLandingPage: !1
                },
                _e = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r, o, i, u, l;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = Object(Z.a)({}, ["embed", "configuration"], Object(s.b)()), n = t.interactionSlugMap, a = void 0 === n ? {} : n, r = t.interactionTestingSlugMap, o = void 0 === r ? {} : r, i = e ? e.substring(1).toLowerCase() : null) {
                                        c.next = 4;
                                        break
                                    }
                                    return c.abrupt("return", !1);
                                case 4:
                                    if (!(u = Object(X.v)(o))[i]) {
                                        c.next = 9;
                                        break
                                    }
                                    return c.next = 8, ke(e, u[i], Object(b.a)(Object(b.a)({}, me), {}, {
                                        isTestingConversation: !0
                                    }));
                                case 8:
                                    return c.abrupt("return", !0);
                                case 9:
                                    if (!(l = Object(X.v)(a))[i]) {
                                        c.next = 14;
                                        break
                                    }
                                    return c.next = 13, ke(e, l[i], me);
                                case 13:
                                    return c.abrupt("return", !0);
                                case 14:
                                    return c.abrupt("return", !1);
                                case 15:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function fireByDriftlink(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ke = function() {
                    var e = Object(o.a)(c.a.mark(function _callee2(e, t, n) {
                        var a;
                        return c.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return a = Object(U.f)(), r.prev = 1, s.a.dispatch(Object(R.r)(e)), s.a.dispatch(Object(u.b)()), Object(T.g)(t), r.next = 7, je();
                                case 7:
                                    return r.next = 9, Object(C.b)(t, Object(b.a)(Object(b.a)({}, n), {}, {
                                        locale: a,
                                        goToConversation: !0
                                    }), e);
                                case 9:
                                    r.next = 14;
                                    break;
                                case 11:
                                    r.prev = 11, r.t0 = r.catch(1), Object(X.o)({
                                        data: ["Failed to activate drift link ".concat(e, ":").concat(t), r.t0]
                                    });
                                case 14:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2, null, [
                            [1, 11]
                        ])
                    }));
                    return function activateDriftLink(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                ye = n("awwx"),
                we = n("+f1A"),
                Ie = n("g6eD"),
                xe = n("i9gz"),
                Ce = n("ws1h"),
                Ee = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r, o, i, u;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = e.forceShow, n = void 0 !== t && t, a = e.targetingResults, r = void 0 === a ? {} : a, o = Object(ye.c)(Object(s.b)()), i = function dispatchWidgetTargetingResult(e, t) {
                                        s.a.dispatch(Object(Ie.r)({
                                            matchedTargeting: t,
                                            matchedHours: e
                                        }))
                                    }, c.next = 5, Object(Ce.a)();
                                case 5:
                                    if (u = c.sent, !o) {
                                        c.next = 9;
                                        break
                                    }
                                    return i(u, !1), c.abrupt("return");
                                case 9:
                                    n ? i(!0, !0) : qe({
                                        evaluationMatchOutcome: r.evaluationMatchOutcome,
                                        evaluationResults: r.evaluationResults,
                                        onMatched: function onMatched() {
                                            i(u, !0)
                                        },
                                        onDidNotMatch: function onDidNotMatch() {
                                            return i(u, !1)
                                        }
                                    });
                                case 10:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function evaluateWidgetTargeting(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Te = function() {
                    var e = Object(o.a)(c.a.mark(function _callee4() {
                        var e, t, n, a, r, i, u, l, d, p, f, v, h, g, O, j, m, _, k, y, w = arguments;
                        return c.a.wrap(function _callee4$(I) {
                            for (;;) switch (I.prev = I.next) {
                                case 0:
                                    if (e = w.length > 0 && void 0 !== w[0] ? w[0] : {}, t = e.onDidNotMatch, n = void 0 === t ? function() {} : t, a = e.onDidMatch, r = void 0 === a ? function() {} : a, i = e.unreadCampaignIds, u = void 0 === i ? [] : i, l = e.evaluatedConditionsResults, d = e.skipCampaignTargeting, p = void 0 !== d && d, f = Object(s.b)(), v = Object(ye.a)(["skipCampaigns"], f), h = !!Object(ye.a)(["forceShowWidget"], f), g = Object(V.e)(f), O = Object(P.i)(f), j = p || v, m = function() {
                                            var e = Object(o.a)(c.a.mark(function _callee3(e) {
                                                var t;
                                                return c.a.wrap(function _callee3$(a) {
                                                    for (;;) switch (a.prev = a.next) {
                                                        case 0:
                                                            return a.next = 2, Ee({
                                                                forceShow: h,
                                                                targetingResults: e.widgetTargetingResults
                                                            });
                                                        case 2:
                                                            if (!j) {
                                                                a.next = 4;
                                                                break
                                                            }
                                                            return a.abrupt("return");
                                                        case 4:
                                                            return s.a.dispatch(Object(q.k)({
                                                                debugLog: "Checking playbooks targeting (use 'drift.debug('playbooks')' for more detail)",
                                                                order: 2
                                                            })), t = function() {
                                                                var e = Object(o.a)(c.a.mark(function _callee2(e, t) {
                                                                    var n, a, o, i, l;
                                                                    return c.a.wrap(function _callee2$(c) {
                                                                        for (;;) switch (c.prev = c.next) {
                                                                            case 0:
                                                                                return c.next = 2, r();
                                                                            case 2:
                                                                                if (!Object(W.c)(Object(s.b)())) {
                                                                                    c.next = 4;
                                                                                    break
                                                                                }
                                                                                return c.abrupt("return");
                                                                            case 4:
                                                                                if (!u.includes(e)) {
                                                                                    c.next = 7;
                                                                                    break
                                                                                }
                                                                                return c.abrupt("return", Object(T.j)(e));
                                                                            case 7:
                                                                                if (n = Object(U.b)(e), !("BOT" !== (null === n || void 0 === n ? void 0 : n.type))) {
                                                                                    c.next = 15;
                                                                                    break
                                                                                }
                                                                                return s.a.dispatch(Object(q.k)({
                                                                                    debugLog: "Rendered announcement campaign ".concat(e),
                                                                                    order: 3
                                                                                })), c.next = 13, Object(A.b)(e, t);
                                                                            case 13:
                                                                                c.next = 21;
                                                                                break;
                                                                            case 15:
                                                                                return o = null === n || void 0 === n ? void 0 : null === (a = n.attributes) || void 0 === a ? void 0 : a.playbookId, s.a.dispatch(Object(q.k)({
                                                                                    debugLog: "Rendered bot playbook ".concat(o, " from campaign ").concat(e),
                                                                                    order: 3
                                                                                })), i = O[o], l = !Object(X.m)(null === i || void 0 === i ? void 0 : i.messages), c.next = 21, Object(A.c)({
                                                                                    campaignId: e,
                                                                                    isDelayed: t,
                                                                                    playbookId: o,
                                                                                    message: i,
                                                                                    skipPrerender: l
                                                                                });
                                                                            case 21:
                                                                            case "end":
                                                                                return c.stop()
                                                                        }
                                                                    }, _callee2)
                                                                }));
                                                                return function onCampaignMatch(t, n) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }(), a.next = 8, We({
                                                                conditions: e.campaignTargetingResults,
                                                                onMatched: t,
                                                                onDidNotMatch: n
                                                            });
                                                        case 8:
                                                        case "end":
                                                            return a.stop()
                                                    }
                                                }, _callee3)
                                            }));
                                            return function evaluateTargetingConditions(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), I.prev = 9, l && !Object(xe.a)(l)) {
                                        I.next = 25;
                                        break
                                    }
                                    return _ = Ae(), I.next = 14, Object(H.d)(Object(b.a)(Object(b.a)({
                                        embedId: g
                                    }, _), {}, {
                                        followingCampaignIds: u,
                                        excludedCampaignIds: []
                                    }));
                                case 14:
                                    if (k = I.sent, y = k.data) {
                                        I.next = 19;
                                        break
                                    }
                                    return Object(X.o)({
                                        data: ["Empty payload returned for campaign targeting"],
                                        type: "warn"
                                    }), I.abrupt("return");
                                case 19:
                                    return Object(X.m)(y.relevantCampaigns) || s.a.dispatch(Object(N.d)({
                                        campaigns: y.relevantCampaigns
                                    })), Object(X.m)(y.relevantUsers) || s.a.dispatch(Object(N.f)({
                                        relevantUsers: y.relevantUsers
                                    })), I.next = 23, m(y);
                                case 23:
                                    I.next = 27;
                                    break;
                                case 25:
                                    return I.next = 27, m(l);
                                case 27:
                                    I.next = 32;
                                    break;
                                case 29:
                                    I.prev = 29, I.t0 = I.catch(9), Object(X.f)(new Error("Failed to evaluate campaign targeting - ".concat(I.t0.message)), I.t0);
                                case 32:
                                case "end":
                                    return I.stop()
                            }
                        }, _callee4, null, [
                            [9, 29]
                        ])
                    }));
                    return function evalTargetingAndEnrollment() {
                        return e.apply(this, arguments)
                    }
                }(),
                Se = function getTargetingEvaluationMetadata() {
                    var e = Object(s.b)();
                    return {
                        targetingContext: {
                            endUserId: Object(Z.a)(void 0, ["endUser", "id"], e.session),
                            orgId: Object(U.h)()
                        },
                        evaluationOptions: {
                            ignoreUnknowns: !1
                        }
                    }
                },
                Ae = function getTargetingEvaluationContext() {
                    var e = Object(s.b)(),
                        t = e.session,
                        n = e.conversations,
                        a = e.embed,
                        r = t.campaignRefreshToken,
                        c = t.geo,
                        o = t.context,
                        i = t.assignedAgentId,
                        u = Object(xe.a)(c) ? void 0 : c,
                        l = Object(Z.a)("", ["page", "href"], o),
                        d = Object(Z.a)({}, ["conversations"], n);
                    return {
                        sessionId: r,
                        location: u,
                        pageUrl: l,
                        assignedAgentId: i,
                        hasHadConversations: !Object(xe.a)(d),
                        inboxId: Object(Z.a)(void 0, ["configuration", "inboxId"], a),
                        siteVisits: Object(we.u)(e)
                    }
                },
                De = function omitPropertyFromConditionSetList(e, t) {
                    return e.map(function(e) {
                        return e.map(function(e) {
                            return Object(p.a)([t], e)
                        })
                    })
                },
                Le = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        var e, t, n, a, r, o, i, u, d, b, p, f, v, h, g, O, j, m;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = Object(s.b)(), t = e.embed, n = e.session, a = e.targeting, r = void 0 === a ? {} : a, o = Object(ye.b)(e), c.next = 5, Object(l.a)({
                                        topic: "get-window-context"
                                    });
                                case 5:
                                    return i = c.sent, u = i.data, d = void 0 === u ? {} : u, c.next = 10, Object(l.a)({
                                        topic: "get-host-cookies"
                                    });
                                case 10:
                                    return b = c.sent, p = b.data, f = void 0 === p ? {} : p, c.next = 15, Object(l.a)({
                                        topic: "get-host-referrer"
                                    });
                                case 15:
                                    return v = c.sent, h = v.data, g = void 0 === h ? "" : h, c.next = 20, Object(l.a)({
                                        topic: "get-scrollable-height"
                                    });
                                case 20:
                                    return O = c.sent, j = O.data, m = {
                                        _window: d,
                                        visitInformation: n.visitInformation,
                                        cookies: f,
                                        geo: n.geo,
                                        embed: t,
                                        referrer: g,
                                        autoAssigneeId: o,
                                        scrollableHeight: j,
                                        hasExitIntent: r.hasExitIntent
                                    }, c.abrupt("return", Promise.resolve(m));
                                case 24:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function generateTargetingContext() {
                        return e.apply(this, arguments)
                    }
                }(),
                Re = function() {
                    var e = Object(o.a)(c.a.mark(function _callee2() {
                        var e, t, n, a, r, o, i = arguments;
                        return c.a.wrap(function _callee2$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = i.length > 0 && void 0 !== i[0] ? i[0] : [], t = e.map(function(e) {
                                        var t = De(e.conditionSets, "mapValue");
                                        return {
                                            key: "".concat(e.outputKey, "-").concat(e.label),
                                            priority: e.priority,
                                            conditionSets: t
                                        }
                                    }), n = Object(V.e)(Object(s.b)()), a = Ae(), c.prev = 4, c.next = 7, Object(H.b)(n, {
                                        clientSideContext: a,
                                        conditionGroups: t
                                    });
                                case 7:
                                    return r = c.sent, o = r.data, c.next = 11, He(o);
                                case 11:
                                    return c.abrupt("return", c.sent);
                                case 14:
                                    c.prev = 14, c.t0 = c.catch(4), Object(X.o)({
                                        data: ["Failed to evaluate conditional skill", c.t0]
                                    });
                                case 17:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee2, null, [
                            [4, 14]
                        ])
                    }));
                    return function evaluateTargetingForConditionalSets() {
                        return e.apply(this, arguments)
                    }
                }(),
                Pe = function() {
                    var e = Object(o.a)(c.a.mark(function _callee3() {
                        var e, t, n, a, r;
                        return c.a.wrap(function _callee3$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.next = 2, Object(l.a)({
                                        topic: "get-window-context"
                                    });
                                case 2:
                                    return e = c.sent, t = e.data, n = void 0 === t ? {} : t, a = Object(Z.a)("", ["location", "hash"], n), c.next = 8, _e(a);
                                case 8:
                                    return r = c.sent, c.abrupt("return", r);
                                case 10:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee3)
                    }));
                    return function tryFireDriftLink() {
                        return e.apply(this, arguments)
                    }
                }(),
                Me = n("weY7"),
                Ne = function AddEvaluationResultToAuditLog(e) {
                    var t = e.auditLog,
                        n = e.isServerGenerated,
                        a = void 0 === n || n,
                        r = e.evaluationResults,
                        c = e.didMatch,
                        o = e.campaignId,
                        i = e.playbookId,
                        s = e.priority,
                        u = e.status,
                        l = void 0 === u ? Q.b.EVALUATED : u;
                    if (t.conditionGroups) {
                        var d = a ? Ve(r) : r;
                        t.conditionGroups.push({
                            status: l,
                            matched: c,
                            conditionSets: d,
                            key: o,
                            playbookId: i,
                            priority: s
                        })
                    }
                },
                Ve = function _generateAuditLogForServerEvaluationResults(e) {
                    return Object(Me.a)(function(e) {
                        return Ue(e)
                    }, e)
                },
                Ue = function _generateAuditLogResultForConditionSet(e) {
                    var t = Object(Me.a)(function(e) {
                        var t = Object(Z.a)(null, ["evaluatedTargetCondition", "condition"], e),
                            n = Object(Z.a)(!1, ["evaluatedTargetCondition", "matched"], e),
                            a = Object(Z.a)(null, ["evaluatedTargetCondition", "actualValue"], e),
                            r = Object(Z.a)({}, ["evaluatedTargetCondition", "evaluationContext"], e);
                        return {
                            evaluatedCondition: t,
                            matched: n,
                            actualValue: a,
                            status: Q.b.EVALUATED,
                            evaluationContext: r,
                            meta: {}
                        }
                    }, e.evaluatedTargetConditionSet);
                    return {
                        status: Q.b.EVALUATED,
                        targetingConditions: t
                    }
                },
                Fe = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r = arguments;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = r.length > 1 && void 0 !== r[1] && r[1], e && e.conditionGroups.length && !t) {
                                        c.next = 3;
                                        break
                                    }
                                    return c.abrupt("return");
                                case 3:
                                    return c.prev = 3, c.next = 6, Object(H.e)(Object(b.a)(Object(b.a)({}, e), Se()));
                                case 6:
                                    n = c.sent, a = n.data, s.a.dispatch(Object(u.d)({
                                        campaignEvalId: a.targetingEvaluationUUID
                                    })), c.next = 14;
                                    break;
                                case 11:
                                    c.prev = 11, c.t0 = c.catch(3), Object(X.y)(["Failed to persist targeting audit log", c.t0]);
                                case 14:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee, null, [
                            [3, 11]
                        ])
                    }));
                    return function SaveAuditLog(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                $e = ["secondsOnSite", "secondsOnPage", "scrollPct", "exitIntent"],
                Be = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = e.filter(function(e) {
                                        return !e.allConditionsFullyEvaluated && e.allConditionsPotentiallyMatched
                                    }), n = t.map(function(e) {
                                        return e.evaluatedTargetConditionSet
                                    }), a = n.map(function(e) {
                                        return e.map(function(e) {
                                            return e.evaluatedTargetCondition
                                        }).map(function(e) {
                                            return e.condition
                                        })
                                    }), c.next = 5, Le();
                                case 5:
                                    return r = c.sent, c.next = 8, Oe({
                                        conditions: a,
                                        context: r
                                    });
                                case 8:
                                    return c.abrupt("return", c.sent);
                                case 9:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function _evaluateTargetingForEvaluationResults(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ge = function() {
                    var e = Object(o.a)(c.a.mark(function _callee3(e) {
                        var t, n, a, r, i, u, d = arguments;
                        return c.a.wrap(function _callee3$(p) {
                            for (;;) switch (p.prev = p.next) {
                                case 0:
                                    if (t = d.length > 1 && void 0 !== d[1] ? d[1] : function() {}, n = Object(X.x)(), a = function() {
                                            var a = Object(o.a)(c.a.mark(function _callee2() {
                                                var a, r, o = arguments;
                                                return c.a.wrap(function _callee2$(c) {
                                                    for (;;) switch (c.prev = c.next) {
                                                        case 0:
                                                            return a = o.length > 0 && void 0 !== o[0] ? o[0] : {}, c.next = 3, Le();
                                                        case 3:
                                                            return r = c.sent, c.next = 6, e.evaluator(Object(b.a)(Object(b.a)({}, r), {}, {
                                                                eventContext: a
                                                            }));
                                                        case 6:
                                                            if (c.sent.conditionEvaluation) {
                                                                c.next = 9;
                                                                break
                                                            }
                                                            return c.abrupt("return");
                                                        case 9:
                                                            e.eventType && ("exitIntent" === e.type && s.a.dispatch(Object(z.b)()), Object(l.a)({
                                                                topic: "remove-host-event-listener",
                                                                message: {
                                                                    id: n,
                                                                    event: e.eventType
                                                                }
                                                            }), t());
                                                        case 10:
                                                        case "end":
                                                            return c.stop()
                                                    }
                                                }, _callee2)
                                            }));
                                            return function asyncConditionHandler() {
                                                return a.apply(this, arguments)
                                            }
                                        }(), !e.timer) {
                                        p.next = 12;
                                        break
                                    }
                                    return p.next = 6, Le();
                                case 6:
                                    r = p.sent, i = e.conditionDefinition.value, (u = i - e.selector(r)) > 0 && setTimeout(a, 1e3 * u + 1e3), p.next = 13;
                                    break;
                                case 12:
                                    Object(l.a)({
                                        topic: "add-host-event-listener",
                                        message: {
                                            id: n,
                                            event: e.eventType,
                                            handler: a,
                                            eventProperties: e.eventProperties || []
                                        }
                                    });
                                case 13:
                                case "end":
                                    return p.stop()
                            }
                        }, _callee3)
                    }));
                    return function _waitForCondition(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                He = function() {
                    var e = Object(o.a)(c.a.mark(function _callee4(e) {
                        var t, n, a, r, o, i, s, u, l, d, p, f, v, h, g;
                        return c.a.wrap(function _callee4$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (e && e.length) {
                                        c.next = 2;
                                        break
                                    }
                                    return c.abrupt("return", null);
                                case 2:
                                    t = Object(b.a)({
                                        conditionGroups: []
                                    }, Se()), n = !0, a = !1, r = void 0, c.prev = 6, o = e[Symbol.iterator]();
                                case 8:
                                    if (n = (i = o.next()).done) {
                                        c.next = 32;
                                        break
                                    }
                                    if ((s = i.value).status !== Q.b.EVALUATED || !s.matched) {
                                        c.next = 14;
                                        break
                                    }
                                    t.conditionGroups.push(s), c.next = 29;
                                    break;
                                case 14:
                                    if (s.status !== Q.b.PENDING) {
                                        c.next = 29;
                                        break
                                    }
                                    return u = s.conditionSets.filter(function(e) {
                                        return e.status === Q.b.PENDING
                                    }).map(function(e) {
                                        return e.targetingConditions
                                    }), l = u.map(function(e) {
                                        return e.filter(function(e) {
                                            return e.status === Q.b.PENDING
                                        }).map(function(e) {
                                            return e.evaluatedCondition
                                        })
                                    }), d = u.map(function(e) {
                                        return e.filter(function(e) {
                                            return e.status === Q.b.EVALUATED
                                        })
                                    }), p = Object(Y.a)(d), c.next = 21, Le();
                                case 21:
                                    return f = c.sent, c.next = 24, Oe({
                                        conditions: l,
                                        context: f
                                    });
                                case 24:
                                    v = c.sent, h = v.matched, g = v.evalLog, p.length && (g[0].targetingConditions = [].concat(Object(x.a)(g[0].targetingConditions), Object(x.a)(p))), t.conditionGroups.push({
                                        status: Q.b.EVALUATED,
                                        matched: h,
                                        conditionSets: g,
                                        key: s.key,
                                        priority: s.priority
                                    });
                                case 29:
                                    n = !0, c.next = 8;
                                    break;
                                case 32:
                                    c.next = 38;
                                    break;
                                case 34:
                                    c.prev = 34, c.t0 = c.catch(6), a = !0, r = c.t0;
                                case 38:
                                    c.prev = 38, c.prev = 39, n || null == o.return || o.return();
                                case 41:
                                    if (c.prev = 41, !a) {
                                        c.next = 44;
                                        break
                                    }
                                    throw r;
                                case 44:
                                    return c.finish(41);
                                case 45:
                                    return c.finish(38);
                                case 46:
                                    return c.abrupt("return", t);
                                case 47:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee4, null, [
                            [6, 34, 38, 46],
                            [39, , 41, 45]
                        ])
                    }));
                    return function evaluateConditionalSkillTargetingConditions(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                qe = function() {
                    var e = Object(o.a)(c.a.mark(function _callee5(e) {
                        var t, n, a, r, o, i, s, u, l, d, b;
                        return c.a.wrap(function _callee5$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = e.evaluationMatchOutcome, n = e.evaluationResults, a = void 0 === n ? [] : n, r = e.onMatched, o = void 0 === r ? function() {} : r, i = e.onDidNotMatch, s = void 0 === i ? function() {} : i, u = [], t !== Q.a.MATCH) {
                                        c.next = 4;
                                        break
                                    }
                                    return c.abrupt("return", o());
                                case 4:
                                    if (t !== Q.a.NO_MATCH) {
                                        c.next = 6;
                                        break
                                    }
                                    return c.abrupt("return", s());
                                case 6:
                                    if (t !== Q.a.POTENTIAL_MATCH) {
                                        c.next = 17;
                                        break
                                    }
                                    return c.next = 9, Be(a);
                                case 9:
                                    if (l = c.sent, d = l.matched, b = l.asyncConditionListeners, !d) {
                                        c.next = 16;
                                        break
                                    }
                                    return c.abrupt("return", o());
                                case 16:
                                    u = [].concat(Object(x.a)(u), Object(x.a)(b));
                                case 17:
                                    if (u.forEach(function(e) {
                                            return Ge(e, function() {
                                                return o()
                                            })
                                        }), u.length) {
                                        c.next = 20;
                                        break
                                    }
                                    return c.abrupt("return", s());
                                case 20:
                                    return c.abrupt("return", s());
                                case 21:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee5)
                    }));
                    return function evaluateWidgetDisplayTargetingConditions(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                We = function() {
                    var e = Object(o.a)(c.a.mark(function _callee8(e) {
                        var t, n, a, r, u, l, d, b, p, f, v, h, g, O, j, m, _, k, y, w, I, C, E, T, S, A, D, L, R, P, M, N, V, U, F;
                        return c.a.wrap(function _callee8$($) {
                            for (;;) switch ($.prev = $.next) {
                                case 0:
                                    j = function _ref16(e) {
                                        return Object(J.a)(function(e) {
                                            return e.evaluatedTargetConditionSet
                                        }, e.filter(function(e) {
                                            return e.fullyEvaluatedAndMatched
                                        })).filter(function(e) {
                                            return e.fullyEvaluated
                                        }).map(function(e) {
                                            return e.evaluatedTargetCondition
                                        }).filter(function(e) {
                                            return e.matched
                                        }).map(function(e) {
                                            return e.condition
                                        })
                                    }, O = function _ref15(e) {
                                        var t = e.filter(function(e) {
                                            return "EVALUATED" === e.status
                                        }).map(function(e) {
                                            return e.targetingConditions
                                        }).filter(function(e) {
                                            return e.filter(function(e) {
                                                return e.matched
                                            })
                                        });
                                        return Object(J.a)(function(e) {
                                            return e.map(function(e) {
                                                return e.evaluatedCondition
                                            })
                                        }, t)
                                    }, t = e.conditions, n = void 0 === t ? [] : t, a = e.onMatched, r = void 0 === a ? function() {} : a, u = e.onDidNotMatch, l = void 0 === u ? function() {} : u, d = e.internal, b = void 0 !== d && d, p = {
                                        conditionGroups: []
                                    }, f = [], v = function debugLogIconVisibility() {
                                        var e, t = Object(s.b)(),
                                            n = t.view,
                                            a = void 0 === n ? {} : n,
                                            r = t.conversations,
                                            c = void 0 === r ? {} : r,
                                            o = t.campaigns,
                                            i = void 0 === o ? {} : o,
                                            u = !Object(K.c)();
                                        if (Object(W.g)(t))
                                            if (c.hasForcedConversation && u) s.a.dispatch(Object(q.k)({
                                                debugLog: "Drift icon will show, found a forced conversation on desktop",
                                                order: 4
                                            }));
                                            else if (null === (e = i.activeCampaign) || void 0 === e ? void 0 : e.id) {
                                            var l;
                                            s.a.dispatch(Object(q.k)({
                                                debugLog: "Drift icon will show, found an active campaign ".concat(null === i || void 0 === i ? void 0 : null === (l = i.activeCampaign) || void 0 === l ? void 0 : l.id),
                                                order: 4
                                            }))
                                        } else c.activeConversation ? s.a.dispatch(Object(q.k)({
                                            debugLog: "Drift icon will show, found an active conversation ".concat(c.activeConversation),
                                            order: 4
                                        })) : a.matchedTargeting && s.a.dispatch(Object(q.k)({
                                            debugLog: "Drift icon will show, found a targeting match",
                                            order: 4
                                        }));
                                        else s.a.dispatch(Object(q.k)({
                                            debugLog: "Hiding Drift icon",
                                            order: 4
                                        }))
                                    }, h = function() {
                                        var e = Object(o.a)(c.a.mark(function _callee6(e) {
                                            var t, n, a;
                                            return c.a.wrap(function _callee6$(c) {
                                                for (;;) switch (c.prev = c.next) {
                                                    case 0:
                                                        return t = e.campaignId, n = e.matchedConditions, a = (void 0 === n ? [] : n).map(function(e) {
                                                            return e.field
                                                        }).filter(function(e) {
                                                            return $e.includes(e)
                                                        }).length > 0, c.next = 4, Fe(p, b);
                                                    case 4:
                                                        if (c.t0 = r, !c.t0) {
                                                            c.next = 8;
                                                            break
                                                        }
                                                        return c.next = 8, r(t, a);
                                                    case 8:
                                                        return v(), c.abrupt("return", Promise.resolve({
                                                            TAL: p,
                                                            matched: !0
                                                        }));
                                                    case 10:
                                                    case "end":
                                                        return c.stop()
                                                }
                                            }, _callee6)
                                        }));
                                        return function onConditionMatched(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), g = function() {
                                        var e = Object(o.a)(c.a.mark(function _callee7() {
                                            return c.a.wrap(function _callee7$(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Fe(p);
                                                    case 2:
                                                        return l && l(), s.a.dispatch(Object(q.k)({
                                                            debugLog: "No playbooks matched",
                                                            order: 3
                                                        })), v(), e.abrupt("return", Promise.resolve({
                                                            TAL: p,
                                                            matched: !1
                                                        }));
                                                    case 6:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, _callee7)
                                        }));
                                        return function onNoConditionMatched() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), m = !0, _ = !1, k = void 0, $.prev = 11, y = n.entries()[Symbol.iterator]();
                                case 13:
                                    if (m = (w = y.next()).done) {
                                        $.next = 48;
                                        break
                                    }
                                    if (I = Object(i.a)(w.value, 2), C = I[0], E = I[1], T = E.campaignId, S = E.evaluationMatchOutcome, A = E.evaluationResults, D = void 0 === A ? [] : A, L = E.playbookId, S !== Q.a.NO_MATCH) {
                                        $.next = 20;
                                        break
                                    }
                                    Ne({
                                        evaluationResults: D,
                                        auditLog: p,
                                        didMatch: !1,
                                        campaignId: T,
                                        playbookId: L,
                                        priority: C + 1
                                    }), $.next = 41;
                                    break;
                                case 20:
                                    if (S !== Q.a.MATCH) {
                                        $.next = 26;
                                        break
                                    }
                                    return Ne({
                                        evaluationResults: D,
                                        auditLog: p,
                                        didMatch: !0,
                                        campaignId: T,
                                        playbookId: L,
                                        priority: C + 1
                                    }), R = j(D), $.abrupt("return", h({
                                        campaignId: T,
                                        matchedConditions: R
                                    }));
                                case 26:
                                    if (S !== Q.a.POTENTIAL_MATCH) {
                                        $.next = 41;
                                        break
                                    }
                                    return $.next = 29, Be(D);
                                case 29:
                                    if (P = $.sent, M = P.matched, N = P.asyncConditionListeners, V = P.evalLog, Ne({
                                            auditLog: p,
                                            evaluationResults: U = void 0 === V ? [] : V,
                                            didMatch: M,
                                            campaignId: T,
                                            priority: C + 1,
                                            isServerGenerated: !1,
                                            status: N.length ? Q.b.PENDING : Q.b.EVALUATED
                                        }), !M) {
                                        $.next = 40;
                                        break
                                    }
                                    return F = O(U), $.abrupt("return", h({
                                        campaignId: T,
                                        matchedConditions: F
                                    }));
                                case 40:
                                    f = [].concat(Object(x.a)(f), Object(x.a)(N));
                                case 41:
                                    if (C !== n.length - 1) {
                                        $.next = 45;
                                        break
                                    }
                                    if (f.forEach(function(e) {
                                            return Ge(e, function() {
                                                return We({
                                                    conditions: n,
                                                    onMatched: r,
                                                    onDidNotMatch: l
                                                })
                                            })
                                        }), f.length) {
                                        $.next = 45;
                                        break
                                    }
                                    return $.abrupt("return", g());
                                case 45:
                                    m = !0, $.next = 13;
                                    break;
                                case 48:
                                    $.next = 54;
                                    break;
                                case 50:
                                    $.prev = 50, $.t0 = $.catch(11), _ = !0, k = $.t0;
                                case 54:
                                    $.prev = 54, $.prev = 55, m || null == y.return || y.return();
                                case 57:
                                    if ($.prev = 57, !_) {
                                        $.next = 60;
                                        break
                                    }
                                    throw k;
                                case 60:
                                    return $.finish(57);
                                case 61:
                                    return $.finish(54);
                                case 62:
                                    return $.abrupt("return", g());
                                case 63:
                                case "end":
                                    return $.stop()
                            }
                        }, _callee8, null, [
                            [11, 50, 54, 62],
                            [55, , 57, 61]
                        ])
                    }));
                    return function evaluateCampaignTargetingConditions(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ye = n("4Vr+"),
                Je = n("yzXs"),
                Ke = n("42TE"),
                Qe = n("76KI"),
                Xe = n("4c+F"),
                ze = Object(Ye.a)(Object(Je.a)(Ke.a, X.m)),
                Ze = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r, o, i, u, l;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = e.formData, n = e.campaignId, Object(Qe.a)("has_form_submission_fast_lane") && n) {
                                        c.next = 3;
                                        break
                                    }
                                    return c.abrupt("return", {
                                        success: !1
                                    });
                                case 3:
                                    if (t = t ? ze(t) : null, !Object(X.m)(t)) {
                                        c.next = 7;
                                        break
                                    }
                                    return Object(Xe.c)("Sent Empty Form Data", {
                                        campaignId: n
                                    }, !0), c.abrupt("return", {
                                        success: !1
                                    });
                                case 7:
                                    return a = Object(V.e)(Object(s.b)()), r = Ae(), c.prev = 9, c.next = 12, Object(H.g)({
                                        embedId: a,
                                        mappingId: n,
                                        campaignIds: [n],
                                        formData: t,
                                        clientSideContext: r
                                    });
                                case 12:
                                    if (o = c.sent, i = o.data, u = !Object(X.m)(i.campaignTargetingResults) && i.campaignTargetingResults[0].evaluationMatchOutcome === Q.a.MATCH, l = i.relevantCampaigns.filter(function(e) {
                                            return e.id === n
                                        })[0], !u) {
                                        c.next = 19;
                                        break
                                    }
                                    return c.next = 19, We({
                                        conditions: i.campaignTargetingResults,
                                        campaign: l
                                    });
                                case 19:
                                    return c.abrupt("return", {
                                        success: !0,
                                        campaignMatched: u,
                                        matchedCampaign: l
                                    });
                                case 22:
                                    c.prev = 22, c.t0 = c.catch(9), Object(X.o)({
                                        data: [c.t0],
                                        type: "warn"
                                    });
                                case 25:
                                    return c.abrupt("return", {
                                        success: !1
                                    });
                                case 26:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee, null, [
                            [9, 22]
                        ])
                    }));
                    return function collectAndQualify(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                et = n("9EWH"),
                tt = n("fsHk"),
                nt = n("iJtH"),
                at = n("YvIt"),
                rt = n("Nlet"),
                ct = n("t8ds"),
                ot = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        var e, t, n, a, r, o, i, u, d, b;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.next = 2, Object(l.a)({
                                        topic: "access-host-window",
                                        message: {
                                            key: "location"
                                        }
                                    });
                                case 2:
                                    return e = c.sent, t = e.data, n = void 0 === t ? {} : t, c.next = 7, ct.a.get(nt.a);
                                case 7:
                                    return a = c.sent, r = a.data, c.next = 11, ct.b.get(at.b);
                                case 11:
                                    o = c.sent, i = o.data, u = r || {}, d = function getSessionCount(e) {
                                        return e.lastSessionId ? e.lastSessionId !== i ? e.total + 1 : e.total : 1
                                    }, b = Object(et.a)(u, function(e) {
                                        var t = tt.a.getCurrentTimeEpoch();
                                        e.total = d(e), e.daysSinceLastVisit = tt.a.getCurrentTimeDifferenceInDays(e.lastVisit), e.lastVisit = t, e.firstVisit = e.firstVisit || t, e.lastSessionId = i, e[n.pathname] = (e[n.pathname] || 0) + 1;
                                        var a = tt.a.getTime(u.lastVisit, tt.a.getTimezone()).diff(t, "minute");
                                        (!u.currentSessionStartedAt || a > 30) && (e.currentSessionStartedAt = t, ct.a.removeItem(at.a))
                                    }), ct.a.set(nt.a, b), s.a.dispatch(Object(q.w)(b));
                                case 18:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function countSiteVisit() {
                        return e.apply(this, arguments)
                    }
                }(),
                it = function() {
                    var e = Object(o.a)(c.a.mark(function _callee2(e) {
                        var t, n;
                        return c.a.wrap(function _callee2$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, st();
                                case 2:
                                    t = a.sent, n = {
                                        url: Object(Z.a)("", ["page", "href"], t),
                                        referrer: Object(Z.a)("", ["page", "referrer"], t),
                                        title: Object(Z.a)("", ["page", "title"], t),
                                        pageName: e || ""
                                    }, Object(E.b)(n);
                                case 5:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee2)
                    }));
                    return function trackPageLoadEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                st = function() {
                    var e = Object(o.a)(c.a.mark(function _callee3() {
                        var e;
                        return c.a.wrap(function _callee3$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(rt.a)();
                                case 2:
                                    return e = t.sent, s.a.dispatch(Object(q.i)(e)), t.abrupt("return", e);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee3)
                    }));
                    return function hydrateWindowContext() {
                        return e.apply(this, arguments)
                    }
                }(),
                ut = n("pqMu"),
                lt = n("LelF"),
                dt = n("VYE+"),
                bt = n("uIJS"),
                pt = n("wQh9"),
                ft = function() {
                    function SyncCallbackRunner() {
                        Object(bt.a)(this, SyncCallbackRunner), this._running = !1, this._callbacks = []
                    }
                    return Object(pt.a)(SyncCallbackRunner, [{
                        key: "execute",
                        value: function execute(e) {
                            this._callbacks.push(e), this.run()
                        }
                    }, {
                        key: "run",
                        value: function() {
                            var e = Object(o.a)(c.a.mark(function _callee() {
                                var e, t;
                                return c.a.wrap(function _callee$(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!this._running && 0 !== this._callbacks.length) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            this._running = !0;
                                        case 3:
                                            if (!(this._callbacks.length > 0)) {
                                                n.next = 11;
                                                break
                                            }
                                            if (e = this._callbacks.shift(), !(t = e()) || !t.then) {
                                                n.next = 9;
                                                break
                                            }
                                            return n.next = 9, t;
                                        case 9:
                                            n.next = 3;
                                            break;
                                        case 11:
                                            this._running = !1;
                                        case 12:
                                        case "end":
                                            return n.stop()
                                    }
                                }, _callee, this)
                            }));
                            return function run() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), SyncCallbackRunner
                }(),
                vt = n("HSQL"),
                ht = n("SWQ0"),
                gt = n("wNJw"),
                Ot = function processDebugInitEvent() {
                    console.group("\u26a1\u26a1 Drift Debug - Init Process");
                    var e = Object(x.a)(Object(we.d)(Object(s.b)()));
                    if (!e) return console.log("Did not find any debug logs"), void console.groupEnd();
                    e.sort(function(e, t) {
                        return e.order - t.order
                    }), e.forEach(function(e) {
                        console.log("- ".concat(e.debugLog))
                    }), console.groupEnd()
                },
                jt = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        return c.a.wrap(function _callee$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    Object(gt.a)(ht.a.DEBUG_INIT);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee)
                    }));
                    return function InitDebugCommand(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                mt = n("hm8b"),
                _t = function matchedEmoji(e) {
                    return e ? "\u2705" : "\ud83d\udeab"
                },
                kt = function FormatConditionSets(e) {
                    e.forEach(function(t, n) {
                        console.table(function FormatTargetingConditions(e) {
                            var t = [];
                            return e.forEach(function(e, n) {
                                var a = "".concat(e.evaluatedCondition.field, " ").concat(e.evaluatedCondition.operator, " ").concat(e.evaluatedCondition.value),
                                    r = Object(mt.a)(e.actualValue) || Object(xe.a)(e.actualValue) ? "none" : " ".concat(e.actualValue);
                                t.push({
                                    condition: a,
                                    actual: "".concat(_t(e.matched)).concat(r)
                                })
                            }), t.flat()
                        }(t.targetingConditions)), e.length - 1 !== n && console.log("OR")
                    })
                },
                yt = function FormatTAL(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e.conditionGroups.forEach(function(e, n) {
                        var a = _t(e.matched);
                        console[t ? "group" : "groupCollapsed"](a, e.priority, e.status, "playbook " + e.playbookId), kt(e.conditionSets), console.groupEnd()
                    })
                },
                wt = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r, o, i, u, l;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = !!(null === e || void 0 === e ? void 0 : e.expand), n = Object(V.e)(Object(s.b)()), a = Object(T.f)(), r = Ae(), c.next = 6, Object(H.d)(Object(b.a)(Object(b.a)({
                                        embedId: n
                                    }, r), {}, {
                                        followingCampaignIds: a,
                                        excludedCampaignIds: []
                                    }), !0);
                                case 6:
                                    return o = c.sent, i = o.data, c.next = 10, We({
                                        conditions: i.campaignTargetingResults,
                                        internal: !0
                                    });
                                case 10:
                                    u = c.sent, l = u.TAL, console.group("\u26a1\u26a1 Drift Debug - Playbook Targeting Results"), yt(l, t), console.groupEnd();
                                case 15:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function PlaybookDebugTargetingCommand(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                It = n("SsZN"),
                xt = n("y0Ar"),
                Ct = n("da4L"),
                Et = n("NFvl"),
                Tt = n("PjZB"),
                St = n("+Ry9"),
                At = n("QX29"),
                Dt = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = Object(Z.a)([], ["attributes", "conditionSetsToEvaluate"], e), n = Object(Et.a)(["attributes", "playbookId"], e), c.next = 4, Re(t);
                                case 4:
                                    a = c.sent, r = {
                                        requestingMessageId: e.id,
                                        conversationId: e.conversationId,
                                        targetingRequestPayload: a
                                    }, Object(Xe.c)("conditional_evaluated", {
                                        playbookId: n,
                                        conditionalSkillPayload: r
                                    });
                                    try {
                                        Object(H.a)(r)
                                    } catch (o) {
                                        Object(At.a)(new Error("Failed to evaluate conditional skill"))
                                    }
                                case 8:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function evaluateConditionalMessage(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Lt = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e, t) {
                        var n, a, r, o, i, l;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (n = e.id, a = void 0 === n ? null : n, r = e.conversationId, (o = void 0 === r ? null : r) && a) {
                                        c.next = 4;
                                        break
                                    }
                                    return Object(X.o)({
                                        data: ["Message from ws not received in redux,\n        no conversationId or messageId in message for evaluateDirectAgentMessage"],
                                        internal: !0
                                    }), c.abrupt("return");
                                case 4:
                                    return i = Object(b.a)(Object(b.a)({}, e.attributes), {}, {
                                        senderId: e.authorId
                                    }), l = Object(b.a)(Object(b.a)({}, e), {}, {
                                        attributes: i
                                    }), Object(It.k)(e), c.next = 9, je();
                                case 9:
                                    Object(St.e)(t, e), s.a.dispatch(Object(u.a)()), s.a.dispatch(Object(R.q)({
                                        conversationId: o
                                    })), s.a.dispatch(Object(R.s)()), s.a.dispatch(Object(R.d)({
                                        message: l
                                    }));
                                case 14:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function evaluateDirectAgentMessage(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Rt = function shouldIgnoreMessage(e, t) {
                    var n = e.conversationId,
                        a = Object(U.l)();
                    if (a) {
                        var r = Object(P.a)(t);
                        if (!r) {
                            var c = Object(D.f)(t),
                                o = Object(D.e)(t),
                                i = Object(Ct.a)(e, "interactionId"),
                                s = Object(U.c)(i);
                            return !((null === c || void 0 === c ? void 0 : c.includes(i)) || (null === o || void 0 === o ? void 0 : o.includes(null === s || void 0 === s ? void 0 : s.id)))
                        }
                        return function isNotFromSameConvoId(e, t) {
                            return e !== t
                        }(n, r)
                    }
                    return function hasCLPMessageAttribute(e) {
                        return !!Object(Ct.a)(e, "isFromConversationalLandingPage")
                    }(e) ? !a : Object(P.e)(t).includes(n)
                },
                Pt = function evaluateNewMessage(e) {
                    var t = Object(Et.a)(["body", "data"], e),
                        n = Object(Et.a)(["body", "user"], e),
                        a = Object(Et.a)(["body", "users"], e),
                        r = Object(s.b)();
                    if (t) {
                        var c = Object(we.l)(r),
                            o = Object(Ct.a)(t, "instanceId"),
                            i = Object(X.m)(o) || c === o,
                            u = Object(Ct.d)(t, "widgetGuid");
                        if (Rt(t, r)) return s.a.dispatch(Object(R.t)(t.conversationId)), void Object(X.o)({
                            data: ["message ".concat(t.id, " for convo ").concat(t.conversationId, " was ignored coming from different widget modes")],
                            internal: !0
                        });
                        if (u && i) return Object(St.c)(t, n);
                        var d = Object(D.e)(r),
                            b = Object(D.f)(r),
                            p = Object(Ct.d)(t, "startInteraction"),
                            f = Object(Ct.a)(t, "playbookId"),
                            v = Object(Ct.a)(t, "campaignId"),
                            h = Object(Ct.a)(t, "interactionId"),
                            g = Object(Ct.a)(t, "isExperiment"),
                            O = Object(Ct.a)(t, "playbookVersion"),
                            j = t.conversationId,
                            m = (d.includes(v) || b.includes(h)) && p,
                            _ = Object(Ct.g)(t),
                            k = t.contentType === Tt.c.BOT_NODE_CONDITION_EVALUATION && Object(Ct.d)(t, "conditionSetsToEvaluate"),
                            y = Object(Z.a)(!1, ["contentType", Tt.c.CHAT], t) && !t.body.length;
                        if (m)
                            if (Object(It.p)(t), Object(T.b)(t), s.a.dispatch(Object(R.q)({
                                    conversationId: j
                                })), Object(xt.a)({
                                    playbookId: f,
                                    interactionId: h,
                                    conversationId: j,
                                    isVirtual: !1,
                                    isExperiment: g,
                                    playbookVersion: O
                                }), Object(Ct.a)(t, "goToConversation")) {
                                var w = Object(s.b)();
                                return s.a.dispatch(Object(R.s)()), void(w.view.isCohabiting ? (Object(l.a)({
                                    topic: "sc::open-chat",
                                    message: {}
                                }), s.a.dispatch(Object(Ie.i)({
                                    chatOpen: !1,
                                    isDriftLink: !0
                                }))) : s.a.dispatch(Object(Ie.i)({
                                    chatOpen: !0,
                                    isDriftLink: !0
                                })))
                            }
                        return _ ? Lt(t, n) : k ? Dt(t) : Object(Ct.r)(t) ? Object(St.b)(t, a) : void(y && Object(L.e)(t.conversationId, t.id))
                    }
                    Object(X.o)({
                        data: ["no message sent over 'changed' topic in user channel"],
                        internal: !0
                    })
                },
                Mt = function ReceiveMessageSDKCall(e) {
                    Pt({
                        body: {
                            data: e
                        }
                    })
                },
                Nt = {
                    PLAYBOOKS: "playbooks",
                    RECEIVE_MESSAGE: "receiveMessage",
                    HELP: "help",
                    INIT: "init"
                },
                Vt = function DebugSDKCall() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt.HELP,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e) {
                        case Nt.RECEIVE_MESSAGE:
                            Mt(t);
                            break;
                        case Nt.PLAYBOOKS:
                            wt(t);
                            break;
                        case Nt.INIT:
                            jt(t);
                            break;
                        case Nt.HELP:
                        default:
                            console.info("All debug commands: ".concat(Object.values(Nt).join(", ")))
                    }
                },
                Ut = n("3kqR"),
                Ft = n("8saY"),
                $t = Object.freeze({
                    welcomeMessage: "welcomeMessage",
                    awayMessage: "awayMessage",
                    emailCaptureMessage: "emailCaptureMessage",
                    thankYouMessage: "confirmationMessage"
                }),
                Bt = function apiWarning() {
                    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    return (e = console).warn.apply(e, ["Drift API -"].concat(n))
                },
                Gt = function apiError() {
                    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    return (e = console).error.apply(e, ["Drift API -"].concat(n))
                },
                Ht = n("F8vJ"),
                qt = function areAttributesValid(e, t, n, a) {
                    if (Object(mt.a)(a)) return n;
                    if ("function" !== typeof a && Object(ut.a)(Object, a)) {
                        for (var r = 0, c = Object.keys(a); r < c.length; r++) {
                            var o = c[r],
                                i = a[o];
                            if (Object(mt.a)(i)) return !0;
                            if (!Object(ut.a)(Number, i) && !Object(ut.a)(String, i) && !Object(ut.a)(Boolean, i)) return Gt("".concat(e, '(...) "').concat(o, '" in ').concat(t, " must be number, string, or boolean but instead we got ").concat(typeof i, ".")), !1;
                            if ("email" === o && (!Object(ut.a)(String, i) || !Object(Ht.a)(i))) return Gt("".concat(e, "(...) email in ").concat(t, " is invalid:"), i), !1
                        }
                        return !0
                    }
                    return !1
                },
                Wt = function param(e, t, n) {
                    return {
                        name: e,
                        type: t,
                        optional: n
                    }
                },
                Yt = {
                    config: [Wt("options", Object)],
                    collectFormData: [Wt("data", Object, !0), Wt("options", Object, !0)],
                    debug: [Wt("namespace", String, !0)],
                    goToConversation: [Wt("Conversation ID", Number)],
                    goToNewConversation: [Wt("Message", String)],
                    identify: [Wt("User ID", String), Wt("attributes", qt, !0), Wt("options", Object, !0)],
                    off: [Wt("Event name", String), Wt("handler", Function)],
                    on: [Wt("Event name", String), Wt("handler", Function)],
                    page: [Wt("Page name", String, !0)],
                    setUserAttributes: [Wt("attributes", qt)],
                    setUserJwt: [Wt("User JWT", String)],
                    scheduleMeeting: [Wt("Agent ID", Number), Wt("options", Object, !0)],
                    showAwayMessage: [Wt("Message", String, !0)],
                    showWelcomeMessage: [Wt("Message", String, !0)],
                    startInteraction: [Wt("params", function areStartInteractionParamsValid(e, t, n, a) {
                        return Object(mt.a)(a) && !n || !Object(ut.a)(Object, a) ? (Gt("".concat(e, "({ ... }) must be called with ").concat(t, " { interactionId: number, goToConversation: boolean } (goToConversation is optional.)")), !1) : a.interactionId && !Object(mt.a)(a.interactionId) && Object(ut.a)(Number, a.interactionId) ? !(a.goToConversation && !Object(ut.a)(Boolean, a.goToConversation)) || (Gt("".concat(e, '({ ... }) "goToConversation" parameter should be boolean but we got ').concat(typeof a.goToConversation, ".")), !1) : (Gt("".concat(e, "({ ... }) requires ").concat(t, ' object with numeric "interactionId" but we got ').concat(typeof a.interactionId, ".")), !1)
                    })],
                    toggleHoursAndTargeting: [Wt("enabled", Boolean)],
                    track: [Wt("Event name", String), Wt("attributes", qt, !0)]
                },
                Jt = function getTypeName(e) {
                    return e === String || Object(ut.a)(String, e) ? "string" : e === Boolean || Object(ut.a)(Boolean, e) ? "boolean" : e === Number || Object(ut.a)(Number, e) ? "number" : e === Object || Object(ut.a)(Object, e) ? "object" : e === Function || Object(ut.a)(Function, e) ? "function" : Object(mt.a)(e) ? "null" : "unknown"
                },
                Kt = function validateMethod(e, t) {
                    return Yt[e] ? function areArgsValid(e, t, n) {
                        var a = t.length,
                            r = n.filter(function(e) {
                                return !e.optional
                            }).length;
                        return n.reduce(function(n, c, o) {
                            var i = c.name,
                                s = c.type,
                                u = c.optional,
                                l = void 0 !== u && u;
                            if (o >= a) return l || Gt("Invalid ".concat(e, "(...) call! It requires ").concat(r, " argument(s) and it's missing ").concat(i, " ").concat(Jt(s), ".")), n && l && a >= r;
                            var d = t[o],
                                b = !1;
                            return l && Object(mt.a)(d) ? b = !0 : s === Function || s === Object || s === String || s === Number || s === Boolean ? (b = "function" === typeof d ? s === Function : Object(ut.a)(s, d)) || Gt("Invalid ".concat(e, "(...) call! ").concat(i, " (arg ").concat(o, ") should be ").concat(Jt(s), " instead of ").concat(Jt(d), ".")) : b = s(e, i, l, d), n && b
                        }, !0)
                    }(e, t, Yt[e]) : (!Object(mt.a)(t) && Object(ut.a)(Array, t) && !!t.length && Bt("".concat(e, "() should ideally be called without arguments.")), !0)
                },
                Qt = function debouncedAPIMethod(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                    return Object(X.d)(e, t, !0)
                },
                Xt = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        return c.a.wrap(function _callee$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return en(), e.next = 3, Object(dt.b)(lt.d);
                                case 3:
                                    Object(l.a)({
                                        topic: "reload-all-frames",
                                        message: {}
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee)
                    }));
                    return function reset() {
                        return e.apply(this, arguments)
                    }
                }(),
                zt = function toggleChatTakeoverModal() {
                    on(), s.a.dispatch(Object(Ie.i)({
                        chatOpen: !0,
                        isChatTakeover: !0
                    }))
                },
                Zt = function openChat() {
                    on(), s.a.dispatch(Object(Ie.i)({
                        chatOpen: !0
                    }))
                },
                en = function hideChat() {
                    s.a.dispatch(Object(Ie.i)({
                        chatOpen: !1
                    }))
                },
                tn = function showController() {
                    s.a.dispatch(Object(Ie.m)({
                        controllerOpen: !0
                    }))
                },
                nn = function() {
                    var e = Object(o.a)(c.a.mark(function _callee2(e) {
                        var t, n, a;
                        return c.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (t = Object(s.b)(), Object(V.e)(t)) {
                                        r.next = 3;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 3:
                                    return Object(M.b)(), r.next = 6, it(e);
                                case 6:
                                    return r.next = 8, Object(l.a)({
                                        topic: "reset-page-view"
                                    });
                                case 8:
                                    return s.a.dispatch(Object(q.y)(Object(X.x)())), n = !Object(P.h)(t), a = Object(T.h)(), n && a || (n || s.a.dispatch(Object(Ie.i)({
                                        chatOpen: !1
                                    })), Object(T.c)()), r.next = 15, ot();
                                case 15:
                                    Te({
                                        skipCampaignTargeting: a,
                                        onDidMatch: en
                                    });
                                case 16:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2)
                    }));
                    return function page(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                an = Qt(function() {
                    var e = Object(o.a)(c.a.mark(function _callee3(e) {
                        var t, n, a, r, o, i, u, l, d, b, p, f, v, h, g;
                        return c.a.wrap(function _callee3$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = Object(s.b)(), n = Object(P.a)(t), r = (a = e || {}).interactionId, o = a.goToConversation, i = void 0 === o || o, u = a.replaceActiveConversation, l = void 0 === u || u, d = a.hideChatIcon, b = void 0 !== d && d, p = a.isFromConversationalLandingPage, f = void 0 !== p && p, v = Object(U.f)(), h = !r || !Object(ut.a)(Number, r), g = !!n && !l, !Object(V.s)(Object(s.b)())) {
                                        c.next = 9;
                                        break
                                    }
                                    return c.abrupt("return");
                                case 9:
                                    if (!h) {
                                        c.next = 11;
                                        break
                                    }
                                    return c.abrupt("return");
                                case 11:
                                    if (!g) {
                                        c.next = 14;
                                        break
                                    }
                                    return i && Zt(), c.abrupt("return");
                                case 14:
                                    return c.next = 16, je();
                                case 16:
                                    return s.a.dispatch(Object(Ie.i)({
                                        chatOpen: !1
                                    })), b && s.a.dispatch(Object(Ie.c)(!0)), Object(T.c)(), c.next = 21, Object(L.a)({
                                        interactionId: r,
                                        locale: v,
                                        goToConversation: i,
                                        isFromConversationalLandingPage: f,
                                        fromAPI: !0
                                    });
                                case 21:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee3)
                    }));
                    return function _startInteraction(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                rn = function goToConversation(e) {
                    ct.a.set(nt.b, !0), s.a.dispatch(Object(R.q)({
                        conversationId: e
                    })), Zt()
                },
                cn = function() {
                    var e = Object(o.a)(c.a.mark(function _callee4() {
                        var e, t, n, a, r, o, i = arguments;
                        return c.a.wrap(function _callee4$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = i.length > 0 && void 0 !== i[0] ? i[0] : "", t = Object(U.f)(), c.prev = 2, c.next = 5, Object(C.d)(e, {
                                        isTriggeredFromAPI: !0,
                                        locale: t
                                    });
                                case 5:
                                    return n = c.sent, a = n.data, c.next = 9, Object(C.h)(a.conversationId);
                                case 9:
                                    r = c.sent, o = r.data, s.a.dispatch(Object(R.i)({
                                        conversation: o
                                    })), s.a.dispatch(Object(R.q)({
                                        conversationId: a.conversationId
                                    })), c.next = 17;
                                    break;
                                case 15:
                                    c.prev = 15, c.t0 = c.catch(2);
                                case 17:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee4, null, [
                            [2, 15]
                        ])
                    }));
                    return function goToNewConversation() {
                        return e.apply(this, arguments)
                    }
                }(),
                on = function show() {
                    s.a.dispatch(Object(Ie.r)({
                        matchedTargeting: !0
                    })), tn()
                },
                sn = function() {
                    var e = Object(o.a)(c.a.mark(function _callee5(e, t) {
                        var n, a, r, o, i, u;
                        return c.a.wrap(function _callee5$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return n = Object(Z.a)(null, ["session", "endUser", "email"], Object(s.b)()), a = Object(D.k)(Object(s.b)()), r = Object(D.h)(Object(s.b)()), o = Object(U.f)(), Zt(), c.prev = 5, c.next = 8, Object(C.e)(n, e, o, t);
                                case 8:
                                    i = c.sent, u = i.data.conversationId, s.a.dispatch(Object(R.q)({
                                        conversationId: u
                                    })), Object(It.i)(e), Object($.d)(Q.c.CALENDAR_DROP), a && r && Object(S.b)({
                                        conversationId: u
                                    }), c.next = 19;
                                    break;
                                case 16:
                                    c.prev = 16, c.t0 = c.catch(5), Object(X.o)({
                                        data: [c.t0],
                                        type: "warn"
                                    });
                                case 19:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee5, null, [
                            [5, 16]
                        ])
                    }));
                    return function scheduleMeeting(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                un = function() {
                    var e = Object(o.a)(c.a.mark(function _callee6(e) {
                        var t, n, a, r, o = arguments;
                        return c.a.wrap(function _callee6$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = o.length > 1 && void 0 !== o[1] ? o[1] : {}, n = o.length > 2 && void 0 !== o[2] ? o[2] : {}, a = o.length > 3 && void 0 !== o[3] && o[3], c.prev = 3, e && "undefined" !== e.toString()) {
                                        c.next = 7;
                                        break
                                    }
                                    return console.warn(B.a.API.IDENTIFY_INVALID), c.abrupt("return");
                                case 7:
                                    return c.next = 9, Object(F.c)(t, e, n);
                                case 9:
                                    t.email && (r = t.email, s.a.dispatch(Object(q.l)({
                                        endUser: {
                                            email: r
                                        }
                                    }))), a || Object(Xe.c)("OnReadyIdentify"), c.next = 16;
                                    break;
                                case 13:
                                    c.prev = 13, c.t0 = c.catch(3), Object(X.o)({
                                        data: [c.t0],
                                        type: "warn"
                                    });
                                case 16:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee6, null, [
                            [3, 13]
                        ])
                    }));
                    return function identify(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ln = function() {
                    var e = Object(o.a)(c.a.mark(function _callee7(e) {
                        var t;
                        return c.a.wrap(function _callee7$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return t = Object(we.i)(Object(s.b)()), n.next = 3, Object(F.c)(e, t);
                                case 3:
                                    Object(It.r)();
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee7)
                    }));
                    return function setUserAttributes(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                dn = Qt(function() {
                    var e = Object(o.a)(c.a.mark(function _callee8(e, t) {
                        var n, a, r, o, i, u, d, b, p, f;
                        return c.a.wrap(function _callee8$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return n = t && "number" === typeof t.campaignId ? t.campaignId : null, a = t && "string" === typeof t.followupUrl ? t.followupUrl : null, r = Object(s.b)(), o = Object(Z.a)(null, ["session", "endUser", "id"], r), Object(G.a)("post_form_takeover_tti"), c.next = 7, Ze({
                                        campaignId: n,
                                        formData: e
                                    });
                                case 7:
                                    if (i = c.sent, u = i.success, d = i.campaignMatched, b = i.matchedCampaign, p = Object(Z.a)(null, ["attributes", "playbookId"], b), u && Object(Xe.c)("Form Data Submitted", {
                                            campaignId: n,
                                            playbookId: p,
                                            endUserId: o
                                        }), !d) {
                                        c.next = 31;
                                        break
                                    }
                                    if (Object(vt.a)("post_form_takeover_enroll"), !Object(W.c)(Object(s.b)())) {
                                        c.next = 20;
                                        break
                                    }
                                    return en(), c.next = 20, Object(X.r)(400);
                                case 20:
                                    return Object(T.c)(), Object(X.m)(a) || s.a.dispatch(Object(Ie.f)(t.followupUrl)), zt(), Object(G.a)("meeting_scheduler_rtt"), c.next = 26, Object(A.c)({
                                        campaignId: n,
                                        playbookId: p
                                    });
                                case 26:
                                    return (f = Object(vt.b)("post_form_takeover_enroll")) && Object(Xe.d)("Post Form Takeover Enroll", f), Object(G.a)("post_form_takeover_show"), Object(Xe.c)("Fast Lane Campaign Sent", {
                                        campaignId: n,
                                        playbookId: p,
                                        endUserId: o
                                    }), c.abrupt("return");
                                case 31:
                                    if (Object(X.m)(a)) {
                                        c.next = 34;
                                        break
                                    }
                                    return c.next = 34, Object(l.a)({
                                        topic: "redirect-to-url",
                                        message: {
                                            url: t.followupUrl
                                        }
                                    });
                                case 34:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee8)
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(), 15e3),
                bn = Qt(function() {
                    var e = Object(o.a)(c.a.mark(function _callee9() {
                        var e, t, n, a = arguments;
                        return c.a.wrap(function _callee9$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return e = a.length > 0 && void 0 !== a[0] ? a[0] : [], r.next = 3, Object(C.l)(e);
                                case 3:
                                    t = r.sent, n = t.data, s.a.dispatch(Object(R.b)(n));
                                case 6:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee9)
                    }));
                    return function _unfollow() {
                        return e.apply(this, arguments)
                    }
                }()),
                pn = {
                    identify: un,
                    config: function config(e) {
                        if (!Object(ut.a)(Object, e)) return !1;
                        var t = function configOptionsToEmbedConfiguration(e) {
                            var t = {
                                theme: {}
                            };
                            if (Object(mt.a)(e)) return t;
                            var n = e.locale,
                                a = e.enableWelcomeMessage,
                                r = e.enableCampaigns,
                                c = e.enableChatTargeting,
                                o = e.enableSoundNotifications,
                                i = e.backgroundColor,
                                s = e.foregroundColor,
                                u = e.activeColor,
                                l = e.textColor,
                                d = e.widgetBackgroundColor,
                                b = e.autoAssigneeId,
                                p = e.autoAssignee,
                                f = e.inboxId,
                                v = e.enabled,
                                h = e.profileMode,
                                g = e.messages,
                                O = e.cookieDomain,
                                j = e.verticalOffset,
                                m = e.horizontalOffset,
                                _ = e.landingPageConfig,
                                k = e.showDriftBranding,
                                y = e.messageAttributes;
                            return n && (t.locale = n), Object(mt.a)(a) || (t.theme.showWelcomeMessage = !!a), Object(mt.a)(r) || (t.campaignsEnabled = r), !1 === c && (t.theme.audience = Ft.a.EVERYONE, t.theme.conditions = []), Object(mt.a)(o) || (t.theme.soundNotificationEnabled = o), i && (t.theme.backgroundColor = i.replace("#", "")), s && (t.theme.foregroundColor = s.replace("#", "")), u && (t.theme.activeColor = u.replace("#", "")), l && (t.theme.textColor = l.replace("#", "")), d && (t.theme.widgetBackgroundColor = d.replace("#", "")), Object(mt.a)(b) || (t.autoAssigneeId = b), Object(mt.a)(p) || (t.autoAssignee = p), f && (t.inboxId = f), Object(mt.a)(j) || (t.verticalOffset = j), Object(mt.a)(m) || (t.horizontalOffset = m), Object(mt.a)(v) || (t.enabled = !!v), Object(mt.a)(h) || (t.profileMode = !!h), Object(mt.a)(_) || (t.landingPageConfig = _), Object(mt.a)(k) || (t.showBranding = k), Object(mt.a)(y) || (t.messageAttributes = y), Object(mt.a)(g) || Object(Ut.a)(function(e, n) {
                                g[n] && (t.theme[e] = g[n])
                            }, $t), Object(mt.a)(O) || (t.theme.cookieDomains = [O]), t
                        }(e);
                        s.a.dispatch(Object(N.d)(t))
                    },
                    track: function track(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        try {
                            Object(E.a)(e, t)
                        } catch (n) {
                            Object(X.y)(["Failed to send track event" + n])
                        }
                    },
                    reset: Xt,
                    debug: function debug() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Vt(e, t)
                    },
                    show: on,
                    ping: function ping() {
                        Bt("drift.ping is not supported in this release.")
                    },
                    page: nn,
                    hide: function hide() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (en(), function hideController() {
                                s.a.dispatch(Object(Ie.m)({
                                    controllerOpen: !1
                                }))
                            }(), e) {
                            var t, n, a = Object(s.b)();
                            s.a.dispatch(Object(Ie.e)()), "WELCOME_MESSAGE" === (null === (t = a.campaigns.activeCampaign) || void 0 === t ? void 0 : null === (n = t.attributes) || void 0 === n ? void 0 : n.displayType) && Object(l.a)({
                                topic: "sc::open-chat"
                            })
                        }
                    },
                    off: function off() {},
                    on: function on() {},
                    collectFormData: dn,
                    goToConversation: rn,
                    goToConversationList: function goToConversationList() {
                        Object(P.m)(Object(s.b)()) && (Zt(), s.a.dispatch(Object(Ie.p)({
                            conversationHistoryOpen: !0
                        })))
                    },
                    goToNewConversation: cn,
                    hideAwayMessage: function hideAwayMessage() {
                        return en()
                    },
                    hideChat: en,
                    hidePreview: function hidePreview() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        s.a.dispatch(Object(Ie.b)({})), e && s.a.dispatch(Object(Ie.d)(!0))
                    },
                    hideWelcomeMessage: function hideWelcomeMessage() {
                        return en()
                    },
                    openChat: Zt,
                    scheduleMeeting: sn,
                    setUserAttributes: ln,
                    showAwayMessage: function showAwayMessage(e) {
                        s.a.dispatch(Object(Ie.r)({
                            matchedHours: !1,
                            matchedTargeting: !0
                        })), Object(T.c)(), e && "string" === typeof e && e.length && s.a.dispatch(Object(N.b)({
                            message: e
                        })), tn(), s.a.dispatch(Object(Ie.i)({
                            chatOpen: !0,
                            displayGreeting: !0
                        }))
                    },
                    showWelcomeMessage: function showWelcomeMessage(e) {
                        s.a.dispatch(Object(Ie.r)({
                            matchedHours: !0,
                            matchedTargeting: !0
                        })), Object(T.c)(), e && "string" === typeof e && e.length && s.a.dispatch(Object(N.g)({
                            message: e
                        })), tn(), s.a.dispatch(Object(Ie.i)({
                            chatOpen: !0,
                            displayGreeting: !0
                        }))
                    },
                    showWelcomeOrAwayMessage: function showWelcomeOrAwayMessage() {
                        s.a.dispatch(Object(R.a)()), Zt()
                    },
                    startInteraction: an,
                    startVideoGreeting: function startVideoGreeting() {
                        Bt("drift.startVideoGreeting is not supported in this release.")
                    },
                    toggleChat: function toggleChat() {
                        Object(W.c)(Object(s.b)()) ? en() : Zt()
                    },
                    toggleChatTakeoverModal: zt,
                    evaluateCampaignTargeting: function evaluateCampaignTargeting() {
                        Te()
                    },
                    toggleHoursAndTargeting: function toggleHoursAndTargeting() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        s.a.dispatch(Object(Ie.r)({
                            matchedHours: e,
                            matchedTargeting: !0
                        }))
                    },
                    unfollow: bn,
                    exitCohabitation: function exitCohabitation() {
                        s.a.dispatch(Object(Ie.e)()), tn()
                    },
                    waitForUserJwt: function waitForUserJwt() {
                        try {
                            s.a.dispatch(Object(q.z)())
                        } catch (e) {
                            Object(X.o)({
                                data: [e],
                                type: "warn"
                            })
                        }
                    },
                    setUserJwt: function setUserJwt(e) {
                        try {
                            s.a.dispatch(Object(q.p)(e))
                        } catch (t) {
                            Object(X.o)({
                                data: [t],
                                type: "warn"
                            })
                        }
                    }
                },
                fn = new ft,
                vn = function handleApiEvent(e) {
                    var t = e.data,
                        n = t.method,
                        a = t.args;
                    pn[n] ? Kt(n, a) && fn.execute(function() {
                        return Object(Xe.c)("API Event Fired", {
                            method: n
                        }), pn[n].apply(pn, Object(x.a)(a))
                    }) : Gt("".concat(n, "(...) does not exist."))
                },
                hn = n("g3yi"),
                gn = n("yKvL"),
                On = n("LvsC"),
                jn = n("qytN"),
                mn = n("7jL2"),
                _n = n("acD3"),
                kn = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB"],
                yn = ["CA"],
                wn = {
                    EU: kn,
                    CANADA: yn,
                    EU_CANADA: [].concat(yn, kn),
                    NONE: "NONE",
                    ALL: "ALL"
                },
                In = n("H/qh");
            ! function(e) {
                e.EU = "EU", e.CANADA = "CANADA", e.EU_CANADA = "EU_CANADA", e.NONE = "NONE", e.ALL = "ALL"
            }(a || (a = {}));
            var xn = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        var e, t, n, a, r, o;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (e = Object(s.b)(), t = Object(V.d)(e, "dataProtection", null), n = Object(we.s)(e), a = Object(we.k)(e), t) {
                                        c.next = 7;
                                        break
                                    }
                                    return En({
                                        needsConsent: !0,
                                        hasConsent: !1
                                    }), c.abrupt("return");
                                case 7:
                                    r = Cn(t.targeting, n), o = !r || a.hasConsent, r && !o ? s.a.dispatch(Object(q.k)({
                                        debugLog: "Needs to provide GDPR consent, displayed the form",
                                        order: 5
                                    })) : r && o ? s.a.dispatch(Object(q.k)({
                                        debugLog: "Has already provided GDPR consent, did not display the form",
                                        order: 5
                                    })) : s.a.dispatch(Object(q.k)({
                                        debugLog: "Does not need to provide GDPR consent, did not display the form",
                                        order: 5
                                    })), En({
                                        needsConsent: r,
                                        hasConsent: o
                                    });
                                case 11:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function checkGdprConsentEligibility() {
                        return e.apply(this, arguments)
                    }
                }(),
                Cn = function resolveVisitorNeedsConsent(e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).country;
                    return e === wn.ALL || !(e === wn.NONE || !e) && (!t || Object(In.a)(t, wn[e]))
                },
                En = function dispatchGdprEligbility(e) {
                    var t = e.needsConsent,
                        n = e.hasConsent;
                    s.a.dispatch(Object(q.q)({
                        hasConsent: n,
                        needsConsent: t
                    }))
                },
                Tn = {
                    googleAnalyticsSettings: !0,
                    driftEngage: !0
                },
                Sn = function attachWidgetIntegrations() {
                    var e = Object(V.d)(Object(s.b)(), "integrations", {});
                    Object.keys(e).forEach(function(t) {
                        var n;
                        Tn[t] && (null === (n = e[t]) || void 0 === n ? void 0 : n.enabled) && Object(l.a)({
                            topic: "handle-host-integration",
                            message: {
                                config: e[t],
                                type: t
                            }
                        })
                    })
                },
                An = function attachDriftEngageVerficationScript(e) {
                    Object(l.a)({
                        topic: "handle-host-integration",
                        message: {
                            config: e,
                            type: "driftEngageVerification"
                        }
                    })
                },
                Dn = function attachDriftEngageScript(e) {
                    Object(l.a)({
                        topic: "handle-host-integration",
                        message: {
                            config: e,
                            type: "driftEngage"
                        }
                    })
                },
                Ln = n("Cpup"),
                Rn = function receiveSentryConfig(e) {
                    return Object(Ln.a)({
                        type: "RECEIVE_SENTRY_CONFIG",
                        payload: e
                    })
                },
                Pn = function receiveLongPollConfig(e) {
                    return Object(Ln.a)({
                        type: "RECEIVE_LONG_POLL_CONFIG",
                        payload: e
                    })
                },
                Mn = n("pvgo"),
                Nn = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        var e, t, n, a;
                        return c.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return e = Object(s.b)(), t = e.session, n = e.conversations, a = Object(p.a)(["href"], t.context.page), r.abrupt("return", {
                                        engagement: {
                                            activeConversation: n.endUserEngaged
                                        },
                                        page: a,
                                        location: Un(t.geo),
                                        session: Vn(t.context, t.visitInformation)
                                    });
                                case 3:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function generatePresenceContext() {
                        return e.apply(this, arguments)
                    }
                }(),
                Vn = function _hydrateSessionPresenceData() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        numPageViews: Object(Z.a)(0, ["total"], t),
                        numSessions: Object(Z.a)(0, ["total"], t),
                        currentSessionStartedAt: e.currentSessionStartedAt,
                        currentPageViewStartedAt: e.currentPageViewStartedAt,
                        previousSessionStartedAt: Object(Z.a)(null, ["lastVisit"], t),
                        previousSessionEndedAt: null,
                        firstSessionAt: Object(Z.a)(null, ["firstVisit"], t),
                        activeSessionStartedAt: e.activeSessionStartedAt
                    }
                },
                Un = function _hydrateGeoPresenceData() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(mt.a)(e) ? {} : {
                        ip: e.ip,
                        city: e.city,
                        subdivision: e.subdivision,
                        country: e.country,
                        countryCode: e.countryCode,
                        gdprApplicable: e.gdprApplicable,
                        metroCode: e.metroCode,
                        postalCode: e.postalCode,
                        latLong: {
                            lat: e.latitude,
                            lon: e.longitude
                        }
                    }
                },
                Fn = n("7VeV"),
                $n = n("+D5C"),
                Bn = 5e3,
                Gn = n("xKh3"),
                Hn = n("1tbh"),
                qn = "emailCapture",
                Wn = {
                    topic: "data:sentMessage",
                    event: function event(e) {
                        s.a.dispatch(Object(R.k)(e))
                    }
                },
                Yn = {
                    topic: "typing:started",
                    event: function event(e) {
                        window.fallbackTimeout && window.clearTimeout(window.fallbackTimeout), s.a.dispatch(Object(R.u)({
                            conversationId: e.conversationId,
                            userId: e.userId,
                            isTyping: !0
                        })), window.fallbackTimeout = window.setTimeout(function() {
                            s.a.dispatch(Object(R.u)({
                                conversationId: e.conversationId,
                                userId: e.userId,
                                isTyping: !1
                            }))
                        }, 5e3)
                    }
                },
                Jn = {
                    topic: "typing:finished",
                    event: function event(e) {
                        s.a.dispatch(Object(R.u)({
                            conversationId: e.conversationId,
                            isTyping: !1
                        }))
                    }
                },
                Kn = function sendRoundTripEventForLocalMessages(e) {
                    !!Object(Et.a)(["body", "data", "attributes", "widgetGuid"], e) && e.body.data && Object(Hn.a)({
                        message: e.body.data,
                        timedOut: !1
                    })
                },
                Qn = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        return c.a.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    Kn(e), "CREATE" === e.body.type && "MESSAGE" === e.body.object.type && Pt(e);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee)
                    }));
                    return function onUserChangeEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Xn = function() {
                    var e = Object(o.a)(c.a.mark(function _callee2(e) {
                        var t, n, a;
                        return c.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    t = e.body, n = t.type, a = t.data, n === qn && s.a.dispatch(Object(q.d)({
                                        email: a.email
                                    }));
                                case 2:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2)
                    }));
                    return function onUserTriggeredEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                zn = [Wn],
                Zn = [Yn, Jn, {
                    topic: "change",
                    event: Qn
                }, {
                    topic: "conversationPermaclose",
                    event: function() {
                        var e = Object(o.a)(c.a.mark(function _callee3(e) {
                            var t;
                            return c.a.wrap(function _callee3$(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        t = e.conversationId, s.a.dispatch(Object(R.c)({
                                            conversationId: t
                                        }));
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }, _callee3)
                        }));
                        return function onUserPermacloseEvent(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    topic: "event",
                    event: Xn
                }],
                ea = [],
                ta = function() {
                    function SocketManager() {
                        var e = this;
                        Object(bt.a)(this, SocketManager), this._heartbeatInterval = void 0, this._socket = void 0, this._channel = void 0, this._connectionType = void 0, this._channelEvents = void 0, this._channelName = void 0, this._fireChannelConnectedEvent = function(e, t, n) {
                            s.a.dispatch(Object(q.g)(Object(b.a)({
                                key: e,
                                cluster: t
                            }, n)))
                        }, this._connectToSocket = function() {
                            var e = Object(o.a)(c.a.mark(function _callee2(e) {
                                var t, n, a, r, i;
                                return c.a.wrap(function _callee2$(s) {
                                    for (;;) switch (s.prev = s.next) {
                                        case 0:
                                            return t = e.session_token, n = e.org_id, a = e.socketCluster, r = e.ip, i = new Promise(function() {
                                                var e = Object(o.a)(c.a.mark(function _callee(e, o) {
                                                    var i;
                                                    return c.a.wrap(function _callee$(c) {
                                                        for (;;) switch (c.prev = c.next) {
                                                            case 0:
                                                                return c.next = 2, Object(Gn.b)({
                                                                    session_token: t,
                                                                    org_id: n,
                                                                    socketCluster: a,
                                                                    ip: r
                                                                });
                                                            case 2:
                                                                if (!(i = c.sent)) {
                                                                    c.next = 7;
                                                                    break
                                                                }
                                                                return c.abrupt("return", e(i));
                                                            case 7:
                                                                return c.abrupt("return", o(new Error("Could not connect to socket")));
                                                            case 8:
                                                            case "end":
                                                                return c.stop()
                                                        }
                                                    }, _callee)
                                                }));
                                                return function(t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), s.abrupt("return", i);
                                        case 3:
                                        case "end":
                                            return s.stop()
                                    }
                                }, _callee2)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this._connectToChannel = function() {
                            var t = Object(o.a)(c.a.mark(function _callee3(t) {
                                var n, a, r, o, i, s;
                                return c.a.wrap(function _callee3$(c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            return n = t.socket, a = t.socketAuth, r = t.channelEvents, o = t.channelName, i = t.orgId, c.prev = 1, c.next = 4, Object(Gn.a)({
                                                channelName: e._resolveChannelName(o, a.user_id, i),
                                                socket: n,
                                                events: e._resolveChannelEvents(r)
                                            });
                                        case 4:
                                            return s = c.sent, c.abrupt("return", s);
                                        case 8:
                                            c.prev = 8, c.t0 = c.catch(1), Object(X.f)(c.t0);
                                        case 11:
                                        case "end":
                                            return c.stop()
                                    }
                                }, _callee3, null, [
                                    [1, 8]
                                ])
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), this._resolveChannelName = function(e, t, n) {
                            switch (e) {
                                case $n.b.USER:
                                case $n.b.CHAT:
                                    return "".concat(e, ":").concat(t);
                                case $n.b.LIVE:
                                    return "".concat(e, ":").concat(n);
                                default:
                                    return ""
                            }
                        }, this._resolveChannelEvents = function(e) {
                            switch (e) {
                                case $n.a.CHAT:
                                    return zn;
                                case $n.a.USER:
                                    return Zn;
                                case $n.a.PRESENCE:
                                    return ea;
                                default:
                                    return []
                            }
                        }, this._socket = null, this._channel = null, this._heartbeatInterval = null
                    }
                    return Object(pt.a)(SocketManager, [{
                        key: "_fireSocketConnectedEvent",
                        value: function _fireSocketConnectedEvent(e) {
                            s.a.dispatch(Object(q.v)({
                                cluster: e
                            }))
                        }
                    }]), Object(pt.a)(SocketManager, [{
                        key: "canConnect",
                        value: function canConnect() {
                            return console.error("function should be implemented in child class"), !1
                        }
                    }, {
                        key: "getAuthForSocketConnection",
                        value: function() {
                            var e = Object(o.a)(c.a.mark(function _callee4() {
                                return c.a.wrap(function _callee4$(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            console.error("function should be implemented in child class");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, _callee4)
                            }));
                            return function getAuthForSocketConnection() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "postConnect",
                        value: function() {
                            var e = Object(o.a)(c.a.mark(function _callee5() {
                                return c.a.wrap(function _callee5$(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            console.error("function should be implemented in child class");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, _callee5)
                            }));
                            return function postConnect() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "connect",
                        value: function() {
                            var e = Object(o.a)(c.a.mark(function _callee6(e) {
                                var t, n, a, r;
                                return c.a.wrap(function _callee6$(c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            if (t = e.orgId, n = e.auth, this.canConnect()) {
                                                c.next = 3;
                                                break
                                            }
                                            return c.abrupt("return", null);
                                        case 3:
                                            if (c.t0 = n, c.t0) {
                                                c.next = 8;
                                                break
                                            }
                                            return c.next = 7, Object(we.b)(Object(s.b)(), this._connectionType);
                                        case 7:
                                            c.t0 = c.sent;
                                        case 8:
                                            if (a = c.t0, !Object(X.m)(a)) {
                                                c.next = 13;
                                                break
                                            }
                                            return r = "Failed to connect to ".concat(this._connectionType, " socket: no authentication information provided by server"), this._connectionType === $n.c.VISITOR_PRESENCE ? Object(X.y)([r]) : this._connectionType === $n.c.CHAT && Object(X.f)(r), c.abrupt("return", null);
                                        case 13:
                                            return c.next = 15, this._connectToSocket({
                                                ip: a.remote_ip,
                                                org_id: t,
                                                session_token: a.session_token,
                                                socketCluster: this._connectionType
                                            });
                                        case 15:
                                            return this._socket = c.sent, this._fireSocketConnectedEvent(this._connectionType), c.next = 19, this._connectToChannel({
                                                socket: this._socket,
                                                channelEvents: this._channelEvents,
                                                channelName: this._channelName,
                                                orgId: t,
                                                socketAuth: a
                                            });
                                        case 19:
                                            if (this._channel = c.sent, this._fireChannelConnectedEvent("user", this._connectionType, this._channel), !this._channel) {
                                                c.next = 24;
                                                break
                                            }
                                            return this.postConnect(), c.abrupt("return", this._socket);
                                        case 24:
                                        case "end":
                                            return c.stop()
                                    }
                                }, _callee6, this)
                            }));
                            return function connect(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), SocketManager
                }();

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(mn.a)(e);
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
                        var a = Object(mn.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(jn.a)(this, t)
                }
            }
            var na = new(function(e) {
                Object(On.a)(ChatSocketManager, e);
                var t = _createSuper2(ChatSocketManager);

                function ChatSocketManager() {
                    var e;
                    return Object(bt.a)(this, ChatSocketManager), (e = t.call(this))._sendPresencePing = Object(o.a)(c.a.mark(function _callee() {
                        var t;
                        return c.a.wrap(function _callee$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (e._channel) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    return n.next = 4, Nn();
                                case 4:
                                    t = n.sent, e._channel.channel.push("presence:send_update", t);
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee)
                    })), e.throttledPresencePing = Object(Fn.throttle)(Bn, !1, e._sendPresencePing), e._connectionType = $n.c.CHAT, e._channelEvents = $n.a.USER, e._channelName = $n.b.USER, e
                }
                return Object(pt.a)(ChatSocketManager, [{
                    key: "canConnect",
                    value: function canConnect() {
                        return !0
                    }
                }, {
                    key: "postConnect",
                    value: function() {
                        var e = Object(o.a)(c.a.mark(function _callee2() {
                            var e = this;
                            return c.a.wrap(function _callee2$(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        this._sendPresencePing(), this._channel.channel.on("presence:request_update", function() {
                                            e.throttledPresencePing()
                                        });
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, _callee2, this)
                        }));
                        return function postConnect() {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), ChatSocketManager
            }(ta));

            function visitorPresence_createSuper2(e) {
                return function() {
                    var t, n = Object(mn.a)(e);
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
                        var a = Object(mn.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(jn.a)(this, t)
                }
            }
            var aa = new(function(e) {
                    Object(On.a)(VisitorPresenceSocketManager, e);
                    var t = visitorPresence_createSuper2(VisitorPresenceSocketManager);

                    function VisitorPresenceSocketManager() {
                        var e;
                        return Object(bt.a)(this, VisitorPresenceSocketManager), (e = t.call(this))._heartbeatInterval = void 0, e._socket = void 0, e._channel = void 0, e._connectionType = $n.c.VISITOR_PRESENCE, e._channelEvents = $n.a.PRESENCE, e._channelName = $n.b.LIVE, e
                    }
                    return Object(pt.a)(VisitorPresenceSocketManager, [{
                        key: "canConnect",
                        value: function canConnect() {
                            return !Object(Qe.a)("has_presence_disabled")
                        }
                    }, {
                        key: "postConnect",
                        value: function() {
                            var e = Object(o.a)(c.a.mark(function _callee() {
                                return c.a.wrap(function _callee$(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            this._channel && (this._updatePresence(), this.startPresenceUpdateHeartbeat());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, _callee, this)
                            }));
                            return function postConnect() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "startPresenceUpdateHeartbeat",
                        value: function startPresenceUpdateHeartbeat() {
                            this._heartbeatInterval = window.setInterval(this._updatePresence.bind(this), 6e4)
                        }
                    }, {
                        key: "_updatePresence",
                        value: function() {
                            var e = Object(o.a)(c.a.mark(function _callee2() {
                                var e;
                                return c.a.wrap(function _callee2$(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (this._channel) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return t.next = 4, Nn();
                                        case 4:
                                            e = t.sent, this._channel.channel.push("heartbeat", e);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }, _callee2, this)
                            }));
                            return function _updatePresence() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "stopPresenceUpdateHeartbeat",
                        value: function stopPresenceUpdateHeartbeat() {
                            window.clearInterval(this._heartbeatInterval)
                        }
                    }]), VisitorPresenceSocketManager
                }(ta)),
                ra = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n;
                        return c.a.wrap(function _callee$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return t = e.orgId, n = e.chatAuth, a.prev = 1, a.next = 4, na.connect({
                                        orgId: t,
                                        auth: n
                                    });
                                case 4:
                                    aa.connect({
                                        orgId: t
                                    }), a.next = 10;
                                    break;
                                case 7:
                                    a.prev = 7, a.t0 = a.catch(1), Object(X.f)(new gn.a("Failed to connect to sockets - ".concat(a.t0.message)));
                                case 10:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee, null, [
                            [1, 7]
                        ])
                    }));
                    return function connectToWidgetSockets(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ca = n("JBtm"),
                oa = n.n(ca),
                ia = n("EoDD"),
                sa = function BootstrapBase(e) {
                    var t = this,
                        n = e.embedId,
                        a = e.params;
                    Object(bt.a)(this, BootstrapBase), this._state = void 0, this._params = void 0, this._embedId = void 0, this._preReqData = void 0, this._dispatch = void 0, this._interactionId = void 0, this._instanceId = void 0, this._sessionId = void 0, this._orgId = void 0, this._identityMap = void 0, this._accessToken = void 0, this._currentPageUrl = void 0, this._currentPageSearch = void 0, this._bootstrapResponse = void 0, this.init = Object(o.a)(c.a.mark(function _callee() {
                        return c.a.wrap(function _callee$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t._init().catch(function(e) {
                                        return Object(X.y)([e])
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee)
                    })), this._init = Object(o.a)(c.a.mark(function _callee2() {
                        var e, n, a, r, o;
                        return c.a.wrap(function _callee2$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = null, c.prev = 1, r = t._getTimingParamValueOrDefault("pageLoadStartTime", 0), t._receiveSessionFromParams(), c.next = 6, st();
                                case 6:
                                    return o = c.sent, t._currentPageUrl = null === (n = o.page) || void 0 === n ? void 0 : n.href, t._currentPageSearch = null === (a = o.page) || void 0 === a ? void 0 : a.search, c.next = 11, t._preBootstrap();
                                case 11:
                                    return e = c.sent, c.next = 14, t._initializeAfterPing();
                                case 14:
                                    return Object(Mn.a)(r, t._instanceId, t._embedId), c.next = 17, t._handleServerBootstrap();
                                case 17:
                                    return it(), xn(), Sn(), c.next = 22, t.onBootstrapComplete();
                                case 22:
                                    t._dispatch(Object(Ie.q)({
                                        initComplete: !0
                                    })), Object(Mn.b)(), Object(Xe.a)("bootstrap.complete"), c.next = 31;
                                    break;
                                case 27:
                                    c.prev = 27, c.t0 = c.catch(1), c.t0 instanceof gn.a ? (Object(gt.a)(ht.b.BOOTSTRAP_FAILED), Object(Xe.a)("bootstrap.failure")) : e || (Object(gt.a)(ht.b.BOOTSTRAP_FAILED), Object(Xe.a)("bootstrap.failure")), Object(X.f)(c.t0);
                                case 31:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee2, null, [
                            [1, 27]
                        ])
                    })), this.onBootstrapComplete = function() {
                        new Error("You must implement the onBootstrapComplete method in your extension of BootstrapBase")
                    }, this._preBootstrap = Object(o.a)(c.a.mark(function _callee3() {
                        var e, n, a, r, o, i, s, u, l, d;
                        return c.a.wrap(function _callee3$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return a = oa.a.parse(document.location.search), t._embedId || Object(X.o)({
                                        type: "warn",
                                        data: ["pre-ping warning: missing embedId var: ".concat(t._embedId, ".  query:").concat(document.location.search, ", var:").concat(null === (r = window) || void 0 === r ? void 0 : null === (o = r.drift) || void 0 === o ? void 0 : o.embedId)],
                                        internal: !0
                                    }), i = t._currentPageUrl || t._params.parentUrl, s = (null === a || void 0 === a ? void 0 : a.embedId) || t._embedId || (null === (e = window) || void 0 === e ? void 0 : null === (n = e.drift) || void 0 === n ? void 0 : n.embedId) || (null === a || void 0 === a ? void 0 : a.eId), c.next = 6, da({
                                        embedId: s,
                                        pageUrl: i
                                    });
                                case 6:
                                    if (u = c.sent, !Object(X.m)(u) && !u.status) {
                                        c.next = 12;
                                        break
                                    }
                                    return Object(X.o)({
                                        type: "error",
                                        data: ["ping failed", "pageVar: ".concat(t._currentPageUrl), "parentUrl: ".concat(t._params.parentUrl), "\nembedIdvar: ".concat(t._embedId, " \n query:").concat(null === a || void 0 === a ? void 0 : a.embedId, " \n query2:").concat(null === a || void 0 === a ? void 0 : a.eId, " \n var:").concat(null === (l = window) || void 0 === l ? void 0 : null === (d = l.drift) || void 0 === d ? void 0 : d.embedId, " \n allParams:").concat(document.location.search), u],
                                        internal: !0
                                    }), Object(X.y)(["Failed to get ping information from bootstrap - ".concat(JSON.stringify(u)), u]), t._dispatch(Object(q.k)({
                                        debugLog: "Did not find any embedId to load",
                                        order: 0
                                    })), c.abrupt("return", !1);
                                case 12:
                                    t._embedId = u.embedId, t._dispatch(Object(q.k)({
                                        debugLog: "Loading embedId ".concat(t._embedId),
                                        order: 0
                                    })), s && u.embedId && s !== u.embedId && t._dispatch(Object(N.a)()), window.drift = window.drift || {}, window.drift.embedId = t._embedId, t._preReqData = u;
                                case 18:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee3)
                    })), this._initializeAfterPing = Object(o.a)(c.a.mark(function _callee4() {
                        var e;
                        return c.a.wrap(function _callee4$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (t._embedId && !Object(X.m)(t._preReqData)) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    return t._dispatch(Object(N.d)({
                                        id: t._embedId,
                                        theme: {
                                            signedIdentityRequiredStatus: t._preReqData.signedIdentityStatus,
                                            cookieDomains: t._preReqData.cookieDomains || []
                                        }
                                    })), n.next = 5, Object(M.a)();
                                case 5:
                                    return n.next = 7, Object(M.b)({
                                        demandbaseToken: null === (e = t._preReqData) || void 0 === e ? void 0 : e.demandBaseToken
                                    });
                                case 7:
                                    return n.next = 9, ot();
                                case 9:
                                    if (!t._preReqData.driftEngageVerificationUUID) {
                                        n.next = 12;
                                        break
                                    }
                                    return n.next = 12, An(t._preReqData.driftEngageVerificationUUID);
                                case 12:
                                    if (!t._preReqData.driftEngageDomains || !t._preReqData.driftEngageDomains[0]) {
                                        n.next = 15;
                                        break
                                    }
                                    return n.next = 15, Dn(t._preReqData.driftEngageDomains[0]);
                                case 15:
                                    return n.next = 17, t._generateAuthenticationIdentity();
                                case 17:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee4)
                    })), this._handleServerBootstrap = Object(o.a)(c.a.mark(function _callee6() {
                        var e, n, a, r, i, s, d, f, v, h, g, O, j, m, _, k, y, w, I, x, C, E, S, A, D, L, P, M, V, U;
                        return c.a.wrap(function _callee6$(F) {
                            for (;;) switch (F.prev = F.next) {
                                case 0:
                                    return F.next = 2, Object(vt.c)(Object(o.a)(c.a.mark(function _callee5() {
                                        return c.a.wrap(function _callee5$(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t._getServerBootstrapResponse();
                                                case 2:
                                                    return e.abrupt("return", e.sent);
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, _callee5)
                                    })), "widget_core:bootstrap_api");
                                case 2:
                                    if (e = t._bootstrapResponse, n = e.embed, a = e.tokenResult, r = e.location, i = void 0 === r ? {} : r, s = e.chatAuth, d = void 0 === s ? null : s, f = e.combinedAvailabilityResponse, v = void 0 === f ? {} : f, h = e.presenceAuth, g = void 0 === h ? null : h, O = e.sentryConfig, j = void 0 === O ? null : O, m = e.longpollConfig, _ = void 0 === m ? null : m, k = e.widgetChatBootstrapResponse, y = void 0 === k ? null : k, w = e.welcomeMessageUsers, I = void 0 === w ? null : w, x = e.evaluatedConditionsResults, C = void 0 === x ? null : x, E = e.preRenderMessages, S = void 0 === E ? {} : E, a) {
                                        F.next = 5;
                                        break
                                    }
                                    throw new gn.a("Received null access token from widget auth");
                                case 5:
                                    return t._orgId = null === n || void 0 === n ? void 0 : n.orgId, t._dispatch(Object(R.m)({
                                        preRenderedDefaultMessages: S
                                    })), t._dispatch(Object(N.c)(Object(b.a)(Object(b.a)({}, n), {}, {
                                        welcomeMessageUsers: I
                                    }))), t._dispatch(Object(q.r)(i)), t._dispatch(Object(q.h)(d)), t._dispatch(Object(q.t)(g)), t._dispatch(Object(z.a)(v)), j && t._dispatch(Rn({
                                        forceLog: Object(ia.a)(t._orgId, j.allowListOrgIds),
                                        limit: j.limit,
                                        sentryLoggingEnabled: j.sentryEnabled
                                    })), _ && t._dispatch(Pn(_)), F.next = 16, ra({
                                        orgId: t._orgId,
                                        chatAuth: d
                                    });
                                case 16:
                                    A = a.accessToken, D = a.didConsentToRequestedConsentId, L = a.assignedAgentId, t._accessToken = A, P = Object(p.a)(["didConsentToRequestedConsentId", "accessToken", "assignedAgentId"], a), t._dispatch(Object(q.l)({
                                        endUser: P,
                                        assignedAgentId: L
                                    })), t._dispatch(Object(q.f)({
                                        accessToken: A
                                    })), t._dispatch(Object(q.q)({
                                        hasConsent: D || !1
                                    })), t._checkForPreRender(), y && (Object(T.d)(y.campaignConversations), (M = Object.keys(y.campaignEnrollment)).length && t._dispatch(Object(u.g)(M)), y.conversations.length && t._dispatch(Object(R.g)({
                                        conversations: y.conversations
                                    }))), V = t._getFastlaneTestModeSettings(), Object(X.m)(V) && (Object(X.m)(C) || Object(X.m)(C.fastlaneCampaignResults)) || Object(l.a)({
                                        topic: "attach-form-listener-to-dom",
                                        message: Object(b.a)({
                                            fastLaneCampaigns: null !== (U = null === C || void 0 === C ? void 0 : C.fastlaneCampaignResults) && void 0 !== U ? U : []
                                        }, V && {
                                            fastlaneTestModeSettings: V
                                        })
                                    });
                                case 26:
                                case "end":
                                    return F.stop()
                            }
                        }, _callee6)
                    })), this._getServerBootstrapResponse = Object(o.a)(c.a.mark(function _callee7() {
                        var e, n, a, r, o, i, s, u, d, p, f, v;
                        return c.a.wrap(function _callee7$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.prev = 0, a = t._state(), r = Object(Z.a)("CHAT", ["mode"], t._params), o = {
                                        sessionId: null === a || void 0 === a ? void 0 : null === (e = a.session) || void 0 === e ? void 0 : e.campaignRefreshToken,
                                        pageUrl: Object(Z.a)("", ["session", "context", "page", "href"], a),
                                        hasHadConversations: !1,
                                        followingCampaignIds: [],
                                        excludedCampaignIds: [],
                                        siteVisits: Object(Z.a)(0, ["session", "visitInformation", "total"], a)
                                    }, i = Object(b.a)(Object(b.a)({}, t._identityMap), {}, {
                                        embed_id: t._embedId,
                                        sessionStarted: Math.floor((null === (n = a.session) || void 0 === n ? void 0 : n.sessionStarted) || Date.now() / 1e3),
                                        targeting_context: o,
                                        slimCampaigns: !0
                                    }), t._interactionId && !Object(V.r)(t._state()) && (i.interaction_id = t._interactionId), c.next = 8, Object(hn.b)(r, i);
                                case 8:
                                    s = c.sent, u = s.data, d = s.responseTime, t._bootstrapResponse = u, Object(Xe.d)("enduser_bootstrap", d), c.next = 20;
                                    break;
                                case 15:
                                    c.prev = 15, c.t0 = c.catch(0), p = c.t0.response, f = c.t0.message, p && p.status && 403 === p.status && (v = p.data) && v.message && (Object(l.a)({
                                        topic: "destroy-drift"
                                    }), Object(X.f)(new gn.a(v.message, !0), c.t0, !0)), Object(X.f)(new gn.a("Failed to get bootstrap-api response - ".concat(f)), c.t0, !0);
                                case 20:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee7, null, [
                            [0, 15]
                        ])
                    })), this._checkForPreRender = function() {
                        var e;
                        if (t._interactionId) {
                            var n = Object(ne.f)(oa.a.parse(document.location.search)),
                                a = Object(U.c)(n.interactionId),
                                r = null === a || void 0 === a ? void 0 : a.id,
                                c = null === a || void 0 === a ? void 0 : null === (e = a.attributes) || void 0 === e ? void 0 : e.playbookId,
                                o = t._bootstrapResponse.preRenderMessages[c],
                                i = !Object(X.m)(null === o || void 0 === o ? void 0 : o.messages);
                            !Object(X.m)(null === o || void 0 === o ? void 0 : o.messages) || r ? Object(A.c)({
                                campaignId: r,
                                isDelayed: !1,
                                playbookId: c,
                                message: o,
                                skipPrerender: i
                            }) : Object(L.a)({
                                interactionId: t._interactionId,
                                locale: Object(U.f)(),
                                goToConversation: !0,
                                isFromConversationalLandingPage: !1,
                                fromAPI: !1
                            })
                        }
                    }, this._receiveSessionFromParams = function() {
                        t._dispatch(Object(q.u)({
                            session: t._params.session
                        }))
                    }, this._generateAuthenticationIdentity = Object(o.a)(c.a.mark(function _callee8() {
                        var e, n, a;
                        return c.a.wrap(function _callee8$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return e = t._state(), n = e.session, a = (void 0 === n ? {} : n).externalIdentity, r.next = 4, Object(F.a)(t._preReqData.signedIdentityStatus);
                                case 4:
                                    if (t._identityMap = r.sent, !a.externalId) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.next = 8, un(a.externalId, a.attributes, a.options, !0);
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee8)
                    })), this._getTimingParamValueOrDefault = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        return Object(Z.a)(n, ["timing", e], t._params)
                    }, this._getSessionParamValueOrDefault = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        return Object(Z.a)(n, ["session", e], t._params)
                    }, this._getInteractionId = function() {
                        var e = Object(ne.f)(oa.a.parse(document.location.search));
                        return Object(X.w)(e.interactionId, void 0)
                    }, this._getFastlaneTestModeSettings = function() {
                        try {
                            var e = oa.a.parse(t._currentPageSearch).fastlaneTestMode;
                            if (e) return JSON.parse(e)
                        } catch (n) {
                            Object(X.o)({
                                type: "warn",
                                data: ["failed to parse fastlaneTestMode query param", n],
                                internal: !0
                            })
                        }
                    }, this._dispatch = s.a.dispatch, this._state = s.a.getState, this._embedId = n, this._params = a, this._sessionId = this._getSessionParamValueOrDefault("sessionId", null), this._instanceId = this._getSessionParamValueOrDefault("instanceId", null), this._interactionId = this._getInteractionId()
                };

            function chat_createSuper2(e) {
                return function() {
                    var t, n = Object(mn.a)(e);
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
                        var a = Object(mn.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(jn.a)(this, t)
                }
            }
            var ua = function(e) {
                Object(On.a)(ChatBootstrap, e);
                var t = chat_createSuper2(ChatBootstrap);

                function ChatBootstrap() {
                    var e;
                    Object(bt.a)(this, ChatBootstrap);
                    for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return (e = t.call.apply(t, [this].concat(a))).onBootstrapComplete = Object(o.a)(c.a.mark(function _callee() {
                        var t, n, a, r, o, i, s;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = e._bootstrapResponse.activeConversation, n = e._bootstrapResponse.activeMessages, a = e._bootstrapResponse.widgetChatBootstrapResponse, c.next = 5, Pe();
                                case 5:
                                    return r = c.sent, o = e.tryFireFallbackConversation(), i = !Object(X.m)(t), r ? e._dispatch(Object(q.k)({
                                        debugLog: "Fired a new driftlink conversation, will skip playbook targeting",
                                        order: 1
                                    })) : e.evaluateActiveConversationData(t, n), s = e._params.skipCampaigns || r || o || i, c.next = 12, e.executeWidgetTargeting(null === a || void 0 === a ? void 0 : a.campaignConversations, s);
                                case 12:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    })), e.tryFireFallbackConversation = function() {
                        var t = oa.a.parse(e._currentPageSearch),
                            n = Object(ut.a)(Array, t[_n.a.FALLBACK_CONVERSATION]) ? t[_n.a.FALLBACK_CONVERSATION][0] : t[_n.a.FALLBACK_CONVERSATION];
                        return !!n && (e._dispatch(Object(q.k)({
                            debugLog: "Fired fallback conversation ".concat(n),
                            order: 1
                        })), rn(n), !0)
                    }, e.executeWidgetTargeting = Object(o.a)(c.a.mark(function _callee2() {
                        var t, n, a, r = arguments;
                        return c.a.wrap(function _callee2$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : [], n = r.length > 1 && void 0 !== r[1] && r[1], a = Object(T.e)(t), c.next = 5, Te({
                                        evaluatedConditionsResults: e._bootstrapResponse.evaluatedConditionsResults,
                                        unreadCampaignIds: a,
                                        skipCampaignTargeting: n
                                    });
                                case 5:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee2)
                    })), e.evaluateActiveConversationData = function() {
                        var t = Object(o.a)(c.a.mark(function _callee3(t, n) {
                            var a, r;
                            return c.a.wrap(function _callee3$(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        if (t && !Object(X.m)(null === n || void 0 === n ? void 0 : n.data)) {
                                            c.next = 3;
                                            break
                                        }
                                        return e._dispatch(Object(q.k)({
                                            debugLog: "Did not find an active conversation",
                                            order: 1
                                        })), c.abrupt("return");
                                    case 3:
                                        return e._dispatch(Object(q.k)({
                                            debugLog: "Found active conversation, will follow conversation id ".concat(t, " and skip playbook targeting"),
                                            order: 1
                                        })), e._dispatch(Object(R.q)({
                                            conversationId: Number(t)
                                        })), e._dispatch(Object(R.l)({
                                            messages: n.data,
                                            hasMoreMessages: Object(Z.a)(!1, ["more"], n.pagination),
                                            nextPageMessageId: Object(Z.a)(null, ["next"], n.pagination),
                                            conversationId: t
                                        })), c.next = 8, ct.a.get(nt.b);
                                    case 8:
                                        a = c.sent, r = a.data, e._dispatch(Object(Ie.i)({
                                            chatOpen: null !== r && void 0 !== r && r
                                        })), r && Object(l.a)({
                                            topic: "sc::open-chat",
                                            message: {}
                                        });
                                    case 12:
                                    case "end":
                                        return c.stop()
                                }
                            }, _callee3)
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }(), e
                }
                return ChatBootstrap
            }(sa);

            function landingPage_createSuper2(e) {
                return function() {
                    var t, n = Object(mn.a)(e);
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
                        var a = Object(mn.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(jn.a)(this, t)
                }
            }
            var la = function(e) {
                    Object(On.a)(LandingPageBootstrap, e);
                    var t = landingPage_createSuper2(LandingPageBootstrap);

                    function LandingPageBootstrap() {
                        var e;
                        Object(bt.a)(this, LandingPageBootstrap);
                        for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(a))).onBootstrapComplete = function() {
                            e._dispatch(Object(Ie.h)(!1)), e._dispatch(Object(Ie.k)())
                        }, e
                    }
                    return LandingPageBootstrap
                }(sa),
                da = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n;
                        return c.a.wrap(function _callee$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.prev = 0, a.next = 3, Object(hn.a)(e).catch(function(e) {
                                        return Object(b.a)({
                                            data: e.response.data
                                        }, e.response.data)
                                    });
                                case 3:
                                    return t = a.sent, n = t.data, a.abrupt("return", n);
                                case 8:
                                    a.prev = 8, a.t0 = a.catch(0), Object(X.f)(new gn.a("Failed to get ping information from bootstrap - ".concat(a.t0.message)), a.t0);
                                case 11:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee, null, [
                            [0, 8]
                        ])
                    }));
                    return function fetchPrerequisiteChatBootstrapData(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ba = function() {
                    var e = Object(o.a)(c.a.mark(function _callee2(e) {
                        return c.a.wrap(function _callee2$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    t.t0 = e.params.mode, t.next = "LANDING_PAGE" === t.t0 ? 3 : (t.t0, 6);
                                    break;
                                case 3:
                                    return t.next = 5, new la(e).init();
                                case 5:
                                    return t.abrupt("return", t.sent);
                                case 6:
                                    return t.next = 8, new ua(e).init();
                                case 8:
                                    return t.abrupt("return", t.sent);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee2)
                    }));
                    return function init(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                pa = n("uDfI"),
                fa = n("uiOv"),
                va = n("vTYT");
            n("z8n0");
            s.a.name = "controller";
            t.default = Object(fa.a)(function WidgetControllerPage(e) {
                var t = e.location,
                    n = Object(k.useState)(!1),
                    a = Object(i.a)(n, 2),
                    r = a[0],
                    u = a[1],
                    b = Object(ne.f)(oa.a.parse(t.search)),
                    p = Object(X.x)();
                return Object(k.useEffect)(function() {
                    if (r) {
                        var e = Object(vt.b)("widget_core:widget_loaded");
                        e && (Object(Xe.d)("loaded", e), Object(Xe.a)("widget.v2.load", !1))
                    } else Object(v.a)({
                        name: "controller",
                        syncWith: "chat",
                        store: s.a
                    }), f(), d(), Object(l.c)({
                        topic: "CONDUCTOR:send-usage-metric-event",
                        handler: function() {
                            var e = Object(o.a)(c.a.mark(function _callee(e) {
                                var t;
                                return c.a.wrap(function _callee$(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return t = e.data, n.next = 3, Object(Xe.c)(t.name, t.attributes, t.publishImmediately);
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }, _callee)
                            }));
                            return function handler(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }), Object(l.c)({
                        topic: "trigger-api-event",
                        handler: vn
                    }), Object(l.c)({
                        topic: "log-conductor-error",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            return Object(X.f)(new Error("WIDGET_CONDUCTOR: ".concat(n.message)))
                        }
                    }), Object(l.c)({
                        topic: "get-ready-payload",
                        handler: Mn.c
                    }), Object(l.c)({
                        topic: "identity-provided-email",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            s.a.dispatch(Object(q.m)(n.email))
                        }
                    }), Object(l.c)({
                        topic: "identity-provided",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            s.a.dispatch(Object(q.o)(n))
                        }
                    }), Object(l.c)({
                        topic: "hide-widget-on-ready",
                        handler: function handler() {
                            s.a.dispatch(Object(z.e)(!0))
                        }
                    }), Object(l.c)({
                        topic: "show-widget-on-ready",
                        handler: function handler(e) {
                            e.data, s.a.dispatch(Object(z.c)(!0))
                        }
                    }), Object(l.c)({
                        topic: "identity-provided-id",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            s.a.dispatch(Object(q.n)(n.externalId))
                        }
                    }), Object(l.c)({
                        topic: "identity-provided-jwt",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            s.a.dispatch(Object(q.p)(n.userJwt))
                        }
                    }), Object(l.c)({
                        topic: "host-hash-change",
                        handler: function handler(e) {
                            var t = e.data;
                            return _e(t.hash)
                        }
                    }), Object(l.c)({
                        topic: "debug-init",
                        handler: Ot
                    }), Object(l.c)({
                        topic: "init-ready",
                        handler: function() {
                            var e = Object(o.a)(c.a.mark(function _callee2() {
                                var e;
                                return c.a.wrap(function _callee2$(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, (e = Object(ne.g)(b[va.a.PAGE_URL])) && e.length > 1500 && (e = null), t.t0 = !r, !t.t0) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.next = 7, ba({
                                                embedId: b.embedId,
                                                params: {
                                                    skipCampaigns: b.skipCampaigns,
                                                    forceShow: b.forceShow,
                                                    session: {
                                                        sessionId: b.sessionId,
                                                        sessionStarted: b.sessionStarted,
                                                        campaignRefreshToken: b.campaignRefreshToken,
                                                        instanceId: p
                                                    },
                                                    timing: {
                                                        pageLoadStartTime: b.pageLoadStartTime
                                                    },
                                                    mode: b.mode,
                                                    parentUrl: e
                                                }
                                            });
                                        case 7:
                                            u(!0), t.next = 13;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t1 = t.catch(0), console.warn(t.t1);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }, _callee2, null, [
                                    [0, 10]
                                ])
                            }));
                            return function handler() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }), Object(l.c)({
                        topic: "get-cookie-domains",
                        handler: function handler() {
                            return Object(dt.c)()
                        }
                    }), Object(gt.a)(ht.b.API_READY)
                }, [b.embedId, b.forceShow, b.skipCampaigns, r, b.sessionId, b.sessionStarted, b.campaignRefreshToken, p, b.pageLoadStartTime, b.mode, b]), y.a.createElement(pa.a, {
                    store: s.a
                }, !b.hideController && r && y.a.createElement(I, null))
            })
        },
        Erxq: function(e, t, n) {
            "use strict";
            var a = n("LVcX"),
                r = n("ERkP");
            t.a = function useIsBotMessage(e) {
                return Object(r.useMemo)(function() {
                    return Object(a.a)(!1, ["attributes", "isBot"], e)
                }, [e])
            }
        },
        Gxm1: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("QtlZ"),
                r = n("LVcX"),
                c = n("0lfv"),
                o = n("CYoe"),
                i = function markTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    a.a.dispatch(Object(o.c)(e, t))
                },
                s = function measureTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                        n = Object(r.a)(null, ["metrics", "timeByName", e], Object(a.b)());
                    return n ? (a.a.dispatch(Object(o.a)(e)), t - n) : (Object(c.o)({
                        type: "warn",
                        data: ['Tried to measure "'.concat(e, '" without mark')]
                    }), null)
                }
        },
        Hnjx: function(e, t, n) {
            "use strict";
            var a = n("uDfI"),
                r = n("8saY");
            t.a = function useWidgetIconShape() {
                return Object(a.c)(function(e) {
                    return e.embed.configuration.theme.widgetIconShape
                }) || r.b.SQUARE
            }
        },
        IJKc: function(e, t, n) {
            "use strict";
            var a = n("da4L"),
                r = n("LVcX"),
                c = n("i9gz"),
                o = n("DboL"),
                i = n("ERkP"),
                s = n("uDfI");
            t.a = function useUnreadMessagesForActiveConversation() {
                var e = Object(s.c)(function(e) {
                        return e.conversations
                    }).activeConversation,
                    t = Object(s.c)(function(t) {
                        return Object(r.a)({}, ["conversations", "messages", e], t)
                    }),
                    n = Object(s.c)(function(t) {
                        return Object(r.a)([], ["conversations", "unreadAgentMessages", e], t)
                    });
                return Object(i.useMemo)(function() {
                    if (Object(c.a)(t)) return [];
                    var e = Object(a.q)(Object(o.a)(t));
                    return e.filter(function(e) {
                        return function messageHasBody(e) {
                            return !!e.body && !!e.body.length
                        }(e) && function messageIsNotRatingPrompt(e) {
                            return !Object(a.d)(e, "ratingPrompt")
                        }(e) && function messageIsUnread(e) {
                            return n.includes(e.id)
                        }(e)
                    })
                }, [t, n])
            }
        },
        LwEI: function(e, t, n) {
            "use strict";
            var a = n("LVcX"),
                r = n("uDfI"),
                c = n("vTYT");
            t.a = function useWidgetAlignment() {
                return Object(r.c)(function(e) {
                    return Object(a.a)(c.b.RIGHT, ["embed", "configuration", "theme", "alignment"], e)
                })
            }
        },
        My8U: function(e, t, n) {
            "use strict";
            var a = n("nfbA"),
                r = n("ILQF"),
                c = n("SWQ0"),
                o = n("wNJw");
            t.a = function UseStoreSync(e) {
                var t = e.store,
                    n = e.syncWith,
                    i = e.name;
                return Object(r.c)({
                    topic: "CONDUCTOR:action-from-".concat(n),
                    handler: function handler(e) {
                        t.dispatch(Object(a.a)(Object(a.a)({}, e.data.action), {}, {
                            _foreignDispatch: !0
                        }))
                    }
                }), Object(o.a)(c.a["".concat(i.toUpperCase(), "_READY")]), t
            }
        },
        Sn8X: function(e, t, n) {
            "use strict";
            var a = n("SFoa"),
                r = n("ERkP"),
                c = n("Tr4L"),
                o = n("0lfv"),
                i = n("VpmR");
            t.a = function useLanguageSwitcher() {
                var e = Object(c.a)().i18n,
                    t = Object(a.f)();
                Object(r.useEffect)(function() {
                    e && Object(o.l)(e.changeLanguage) && e.changeLanguage(Object(i.c)(t))
                }, [e, t])
            }
        },
        UvQv: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return useDisableWidgetIcon
            });
            var a = n("s8DI"),
                r = n("ILQF"),
                c = n("ERkP");

            function useDisableWidgetIcon() {
                var e = Object(c.useState)(!1),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    o = t[1];
                return Object(c.useEffect)(function() {
                    Object(r.c)({
                        topic: "CONDUCTOR:disableWidgetIcon",
                        handler: function handler() {
                            return o(!0)
                        }
                    })
                }, []), {
                    isDisabled: n,
                    setIsDisabled: o
                }
            }
        },
        cwuI: function(e, t, n) {
            "use strict";
            var a = n("+Kbs"),
                r = n("ERkP"),
                c = n.n(r),
                o = n("uDfI");
            t.a = function useThemeIcon() {
                var e = Object(o.c)(function(e) {
                        return e.embed.configuration
                    }).theme,
                    t = e.iconStyle,
                    n = e.iconUrl,
                    r = e.foregroundColor,
                    i = {
                        SOLID1: c.a.createElement(a.i, {
                            fill: "#".concat(r)
                        }),
                        SOLID2: c.a.createElement(a.h, {
                            fill: "#".concat(r)
                        }),
                        OUTLINE1: c.a.createElement(a.f, {
                            fill: "#".concat(r)
                        }),
                        OUTLINE2: c.a.createElement(a.g, {
                            fill: "#".concat(r)
                        }),
                        BOLT: a.d
                    };
                return {
                    customIcon: n ? {
                        backgroundImage: "url(".concat(n, ")"),
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    } : {},
                    hasCustomIcon: !!n,
                    Icon: i[t] || null
                }
            }
        },
        hEj5: function(e, t, n) {
            "use strict";
            var a = n("s8DI"),
                r = n("ERkP"),
                c = n("LaGA");
            t.a = function useResizeObserver() {
                var e = Object(r.useState)(),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    o = t[1],
                    i = Object(r.useState)(null),
                    s = Object(a.a)(i, 2),
                    u = s[0],
                    l = s[1],
                    d = Object(r.useRef)(null),
                    b = Object(r.useCallback)(function() {
                        return d.current && d.current.disconnect()
                    }, []),
                    p = Object(r.useCallback)(function() {
                        u && (d.current = new c.a(function() {
                            return o(function getRectForRef(e) {
                                return e && e.getBoundingClientRect()
                            }(u))
                        }), d.current.observe(u))
                    }, [u]);
                return Object(r.useLayoutEffect)(function() {
                    return p(),
                        function() {
                            return b()
                        }
                }, [b, p]), [n, l]
            }
        },
        hhdZ: function(e, t, n) {
            "use strict";
            var a = n("da4L"),
                r = n("LVcX"),
                c = n("i9gz"),
                o = n("TbSn"),
                i = n("uDfI");
            t.a = function useLastMessage(e) {
                var t = Object(i.c)(function(t) {
                        return Object(r.a)(null, ["conversations", "conversations", e, "lastMessage"], t)
                    }),
                    n = Object(i.c)(function(t) {
                        var n = Object(r.a)({}, ["conversations", "messages", e], t);
                        if (!Object(c.a)(n)) {
                            var i = Object(a.s)(n);
                            if (i.length) return Object(o.a)(i)
                        }
                        return null
                    });
                return t || n || {}
            }
        },
        mJgV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n("LVcX"),
                r = function getLongPollEnabledShards(e) {
                    return Object(a.a)(void 0, ["logging", "longPollConfig", "enabledShards"], e)
                }
        },
        qATS: function(e, t, n) {
            "use strict";
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                o = n("s8DI"),
                i = n("SFoa"),
                s = n("2XY6"),
                u = n("ERkP"),
                l = n("uDfI"),
                d = n("0lfv"),
                b = n("VpmR");
            t.a = function useInitializeI18n() {
                var e = Object(u.useState)(!1),
                    t = Object(o.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    p = Object(l.c)(s.b),
                    f = Object(i.f)();
                return Object(u.useEffect)(function() {
                    p && !n && function() {
                        var e = Object(c.a)(r.a.mark(function _callee() {
                            return r.a.wrap(function _callee$(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(b.b)(f);
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), Object(d.o)({
                                            data: ["i18n failed to load - ".concat(e.t0.message), e.t0],
                                            type: "warn"
                                        });
                                    case 8:
                                        a(!0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, _callee, null, [
                                [0, 5]
                            ])
                        }));
                        return function runAsync() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }, [p, n, f]), n && p
            }
        },
        y0on: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n("0lfv"),
                r = function getNewMessageAriaLabel(e, t) {
                    return Object(a.m)(t) ? null : "Chat message".concat(e ? " from " + e : "", ': "').concat(t, '"')
                }
        },
        z8n0: function(e, t, n) {}
    }
]);