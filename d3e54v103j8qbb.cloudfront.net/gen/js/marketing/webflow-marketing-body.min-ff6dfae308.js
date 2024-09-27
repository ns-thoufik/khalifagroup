! function() {
    var e = {
            9029: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.makeLogsPublicApi = void 0;
                var r = n(7006),
                    o = n(9935),
                    i = n(9311),
                    a = n(6852),
                    s = "logs";
                t.makeLogsPublicApi = function(e) {
                    var t = (0, r.createCustomerDataTrackerManager)(),
                        n = (0, r.createContextManager)(t.getOrCreateTracker(2)),
                        u = (0, r.createContextManager)(t.getOrCreateTracker(1)),
                        c = (0, r.createTrackingConsentState)();

                    function l() {
                        return (0, i.buildCommonContext)(n, u)
                    }
                    var d = (0, a.createPreStartStrategy)(l, c, function(t, o) {
                            t.storeContextsAcrossPages && ((0, r.storeContextManager)(o, n, s, 2), (0, r.storeContextManager)(o, u, s, 1));
                            var i = e(t, o, l, c);
                            return d = (0, r.assign)({
                                init: function(e) {
                                    (0, r.displayAlreadyInitializedError)("DD_LOGS", e)
                                },
                                initConfiguration: t
                            }, i), i
                        }),
                        f = {},
                        p = new o.Logger(function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return d.handleLog.apply(d, e)
                        }, t.createDetachedTracker());
                    return (0, r.makePublicApi)({
                        logger: p,
                        init: (0, r.monitor)(function(e) {
                            return d.init(e)
                        }),
                        setTrackingConsent: (0, r.monitor)(function(e) {
                            return c.update(e)
                        }),
                        getGlobalContext: (0, r.monitor)(function() {
                            return n.getContext()
                        }),
                        setGlobalContext: (0, r.monitor)(function(e) {
                            return n.setContext(e)
                        }),
                        setGlobalContextProperty: (0, r.monitor)(function(e, t) {
                            return n.setContextProperty(e, t)
                        }),
                        removeGlobalContextProperty: (0, r.monitor)(function(e) {
                            return n.removeContextProperty(e)
                        }),
                        clearGlobalContext: (0, r.monitor)(function() {
                            return n.clearContext()
                        }),
                        createLogger: (0, r.monitor)(function(e, n) {
                            return void 0 === n && (n = {}), f[e] = new o.Logger(function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return d.handleLog.apply(d, e)
                            }, t.createDetachedTracker(), (0, r.sanitize)(e), n.handler, n.level, (0, r.sanitize)(n.context)), f[e]
                        }),
                        getLogger: (0, r.monitor)(function(e) {
                            return f[e]
                        }),
                        getInitConfiguration: (0, r.monitor)(function() {
                            return (0, r.deepClone)(d.initConfiguration)
                        }),
                        getInternalContext: (0, r.monitor)(function(e) {
                            return d.getInternalContext(e)
                        }),
                        setUser: (0, r.monitor)(function(e) {
                            (0, r.checkUser)(e) && u.setContext((0, r.sanitizeUser)(e))
                        }),
                        getUser: (0, r.monitor)(function() {
                            return u.getContext()
                        }),
                        setUserProperty: (0, r.monitor)(function(e, t) {
                            var n, o = (0, r.sanitizeUser)(((n = {})[e] = t, n))[e];
                            u.setContextProperty(e, o)
                        }),
                        removeUserProperty: (0, r.monitor)(function(e) {
                            return u.removeContextProperty(e)
                        }),
                        clearUser: (0, r.monitor)(function() {
                            return u.clearContext()
                        })
                    })
                }
            },
            6852: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createPreStartStrategy = void 0;
                var r = n(7006),
                    o = n(2305);
                t.createPreStartStrategy = function(e, t, n) {
                    var i, a, s = new r.BoundedBuffer,
                        u = t.observable.subscribe(c);

                    function c() {
                        if (a && i && t.isGranted()) {
                            u.unsubscribe();
                            var e = n(i, a);
                            s.drain(e)
                        }
                    }
                    return {
                        init: function(e) {
                            if (!e) {
                                r.display.error("Missing configuration");
                                return
                            }
                            if ((0, r.canUseEventBridge)() && (n = e, e = (0, r.assign)({}, n, {
                                    clientToken: "empty"
                                })), i = e, a) {
                                (0, r.displayAlreadyInitializedError)("DD_LOGS", e);
                                return
                            }
                            var n, s = (0, o.validateAndBuildLogsConfiguration)(e);
                            s && (a = s, t.tryToInit(s.trackingConsent), c())
                        },
                        get initConfiguration() {
                            return i
                        },
                        getInternalContext: r.noop,
                        handleLog: function(t, n, o, i) {
                            void 0 === o && (o = e()), void 0 === i && (i = (0, r.timeStampNow)()), s.add(function(e) {
                                return e.handleLog(t, n, o, i)
                            })
                        }
                    }
                }
            },
            8866: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startLogs = void 0;
                var r = n(7006),
                    o = n(6596),
                    i = n(7097),
                    a = n(5282),
                    s = n(2169),
                    u = n(4693),
                    c = n(8615),
                    l = n(9120),
                    d = n(9696),
                    f = n(1122),
                    p = n(5988),
                    g = n(5390),
                    m = n(4199),
                    v = n(9359);
                t.startLogs = function(e, t, n, y) {
                    var b = new l.LifeCycle,
                        _ = [];
                    b.subscribe(1, function(e) {
                        return (0, r.sendToExtension)("logs", e)
                    });
                    var E = (0, m.startReportError)(b),
                        S = (0, r.createPageExitObservable)(t),
                        h = !t.sessionStoreStrategyType || (0, r.canUseEventBridge)() || (0, r.willSyntheticsInjectRum)() ? (0, o.startLogsSessionManagerStub)(t) : (0, o.startLogsSessionManager)(t, y),
                        O = (0, v.startLogsTelemetry)(e, t, E, S, h).stop;
                    _.push(function() {
                        return O()
                    }), (0, u.startNetworkErrorCollection)(t, b), (0, c.startRuntimeErrorCollection)(t, b), (0, a.startConsoleCollection)(t, b), (0, s.startReportCollection)(t, b);
                    var T = (0, d.startLoggerCollection)(b).handleLog;
                    if ((0, i.startLogsAssembly)(h, t, b, n, E), (0, r.canUseEventBridge)())(0, p.startLogsBridge)(b);
                    else {
                        var w = (0, f.startLogsBatch)(t, b, E, S, h).stop;
                        _.push(function() {
                            return w()
                        })
                    }
                    return {
                        handleLog: T,
                        getInternalContext: (0, g.startInternalContext)(h).get,
                        stop: function() {
                            _.forEach(function(e) {
                                return e()
                            })
                        }
                    }
                }
            },
            7097: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startLogsAssembly = void 0;
                var r = n(7006),
                    o = n(9935),
                    i = n(4661);
                t.startLogsAssembly = function(e, t, n, a, s) {
                    var u = o.STATUSES.concat(["custom"]),
                        c = {};
                    u.forEach(function(e) {
                        c[e] = (0, r.createEventRateLimiter)(e, t.eventRateLimiterThreshold, s)
                    }), n.subscribe(0, function(o) {
                        var s, u, l = o.rawLogsEvent,
                            d = o.messageContext,
                            f = o.savedCommonContext,
                            p = (0, r.getRelativeTime)(l.date),
                            g = e.findTrackedSession(p);
                        if (g) {
                            var m = (void 0 === f ? void 0 : f) || a(),
                                v = (0, r.combine)({
                                    service: t.service,
                                    session_id: g.id,
                                    usr: (0, r.isEmptyObject)(m.user) ? void 0 : m.user,
                                    view: m.view
                                }, m.context, (0, i.getRUMInternalContext)(p), l, void 0 === d ? void 0 : d);
                            (null === (s = t.beforeSend) || void 0 === s ? void 0 : s.call(t, v)) === !1 || v.origin !== r.ErrorSource.AGENT && (null !== (u = c[v.status]) && void 0 !== u ? u : c.custom).isLimitReached() || n.notify(1, v)
                        }
                    })
                }
            },
            2305: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.serializeLogsConfiguration = t.validateAndBuildForwardOption = t.validateAndBuildLogsConfiguration = t.DEFAULT_REQUEST_ERROR_RESPONSE_LENGTH_LIMIT = void 0;
                var r = n(7006);

                function o(e, t, n) {
                    if (void 0 === e) return [];
                    if (!("all" === e || Array.isArray(e) && e.every(function(e) {
                            return (0, r.includes)(t, e)
                        }))) {
                        r.display.error("".concat(n, ' should be "all" or an array with allowed values "').concat(t.join('", "'), '"'));
                        return
                    }
                    return "all" === e ? t : (0, r.removeDuplicates)(e)
                }
                t.DEFAULT_REQUEST_ERROR_RESPONSE_LENGTH_LIMIT = 32 * r.ONE_KIBI_BYTE, t.validateAndBuildLogsConfiguration = function(e) {
                    !0 === e.usePciIntake && e.site && "datadoghq.com" !== e.site && r.display.warn("PCI compliance for Logs is only available for Datadog organizations in the US1 site. Default intake will be used.");
                    var n = (0, r.validateAndBuildConfiguration)(e),
                        i = o(e.forwardConsoleLogs, (0, r.objectValues)(r.ConsoleApiName), "Forward Console Logs"),
                        a = o(e.forwardReports, (0, r.objectValues)(r.RawReportType), "Forward Reports");
                    if (n && i && a) return e.forwardErrorsToLogs && !(0, r.includes)(i, r.ConsoleApiName.error) && i.push(r.ConsoleApiName.error), (0, r.assign)({
                        forwardErrorsToLogs: !1 !== e.forwardErrorsToLogs,
                        forwardConsoleLogs: i,
                        forwardReports: a,
                        requestErrorResponseLengthLimit: t.DEFAULT_REQUEST_ERROR_RESPONSE_LENGTH_LIMIT
                    }, n)
                }, t.validateAndBuildForwardOption = o, t.serializeLogsConfiguration = function(e) {
                    var t = (0, r.serializeConfiguration)(e);
                    return (0, r.assign)({
                        forward_errors_to_logs: e.forwardErrorsToLogs,
                        forward_console_logs: e.forwardConsoleLogs,
                        forward_reports: e.forwardReports,
                        use_pci_intake: e.usePciIntake
                    }, t)
                }
            },
            5282: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startConsoleCollection = t.LogStatusForApi = void 0;
                var r, o = n(7006),
                    i = n(9935);
                t.LogStatusForApi = ((r = {})[o.ConsoleApiName.log] = i.StatusType.info, r[o.ConsoleApiName.debug] = i.StatusType.debug, r[o.ConsoleApiName.info] = i.StatusType.info, r[o.ConsoleApiName.warn] = i.StatusType.warn, r[o.ConsoleApiName.error] = i.StatusType.error, r), t.startConsoleCollection = function(e, n) {
                    var r = (0, o.initConsoleObservable)(e.forwardConsoleLogs).subscribe(function(e) {
                        n.notify(0, {
                            rawLogsEvent: {
                                date: (0, o.timeStampNow)(),
                                message: e.message,
                                origin: o.ErrorSource.CONSOLE,
                                error: e.api === o.ConsoleApiName.error ? {
                                    stack: e.stack,
                                    fingerprint: e.fingerprint,
                                    causes: e.causes
                                } : void 0,
                                status: t.LogStatusForApi[e.api]
                            }
                        })
                    });
                    return {
                        stop: function() {
                            r.unsubscribe()
                        }
                    }
                }
            },
            9311: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildCommonContext = void 0, t.buildCommonContext = function(e, t) {
                    return {
                        view: {
                            referrer: document.referrer,
                            url: window.location.href
                        },
                        context: e.getContext(),
                        user: t.getContext()
                    }
                }
            },
            5390: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startInternalContext = void 0, t.startInternalContext = function(e) {
                    return {
                        get: function(t) {
                            var n = e.findTrackedSession(t);
                            if (n) return {
                                session_id: n.id
                            }
                        }
                    }
                }
            },
            4661: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.resetRUMInternalContext = t.getRUMInternalContext = void 0;
                var r = n(7006),
                    o = !1;
                t.getRUMInternalContext = function(e) {
                    var t = window;
                    if ((0, r.willSyntheticsInjectRum)()) {
                        var n = i(t.DD_RUM_SYNTHETICS);
                        return n || o || (o = !0, (0, r.addTelemetryDebug)("Logs sent before RUM is injected by the synthetics worker", {
                            testId: (0, r.getSyntheticsTestId)(),
                            resultId: (0, r.getSyntheticsResultId)()
                        })), n
                    }
                    return i(t.DD_RUM);

                    function i(t) {
                        if (t && t.getInternalContext) return t.getInternalContext(e)
                    }
                }, t.resetRUMInternalContext = function() {
                    o = !1
                }
            },
            9120: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LifeCycle = void 0;
                var r = n(7006);
                t.LifeCycle = r.AbstractLifeCycle
            },
            9935: function(e, t, n) {
                "use strict";
                var r = this && this.__decorate || function(e, t, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                    return i > 3 && a && Object.defineProperty(t, n, a), a
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Logger = t.STATUSES = t.HandlerType = t.StatusType = void 0;
                var o = n(7006);
                t.StatusType = {
                    debug: "debug",
                    error: "error",
                    info: "info",
                    warn: "warn"
                }, t.HandlerType = {
                    console: "console",
                    http: "http",
                    silent: "silent"
                }, t.STATUSES = Object.keys(t.StatusType);
                var i = function() {
                    function e(e, n, r, i, a, s) {
                        void 0 === i && (i = t.HandlerType.http), void 0 === a && (a = t.StatusType.debug), void 0 === s && (s = {}), this.handleLogStrategy = e, this.handlerType = i, this.level = a, this.contextManager = (0, o.createContextManager)(n), this.contextManager.setContext(s), r && this.contextManager.setContextProperty("logger", {
                            name: r
                        })
                    }
                    return e.prototype.log = function(e, n, r, i) {
                        if (void 0 === r && (r = t.StatusType.info), null != i) {
                            var a, s = i instanceof Error ? (0, o.computeStackTrace)(i) : void 0,
                                u = (0, o.computeRawError)({
                                    stackTrace: s,
                                    originalError: i,
                                    nonErrorPrefix: "Provided",
                                    source: o.ErrorSource.LOGGER,
                                    handling: "handled",
                                    startClocks: (0, o.clocksNow)()
                                });
                            a = {
                                stack: u.stack,
                                kind: u.type,
                                message: u.message,
                                causes: u.causes
                            }
                        }
                        var c = (0, o.sanitize)(n),
                            l = a ? (0, o.combine)({
                                error: a
                            }, c) : c;
                        this.handleLogStrategy({
                            message: (0, o.sanitize)(e),
                            context: l,
                            status: r
                        }, this)
                    }, e.prototype.debug = function(e, n, r) {
                        this.log(e, n, t.StatusType.debug, r)
                    }, e.prototype.info = function(e, n, r) {
                        this.log(e, n, t.StatusType.info, r)
                    }, e.prototype.warn = function(e, n, r) {
                        this.log(e, n, t.StatusType.warn, r)
                    }, e.prototype.error = function(e, n, r) {
                        this.log(e, n, t.StatusType.error, r)
                    }, e.prototype.setContext = function(e) {
                        this.contextManager.setContext(e)
                    }, e.prototype.getContext = function() {
                        return this.contextManager.getContext()
                    }, e.prototype.setContextProperty = function(e, t) {
                        this.contextManager.setContextProperty(e, t)
                    }, e.prototype.removeContextProperty = function(e) {
                        this.contextManager.removeContextProperty(e)
                    }, e.prototype.clearContext = function() {
                        this.contextManager.clearContext()
                    }, e.prototype.setHandler = function(e) {
                        this.handlerType = e
                    }, e.prototype.getHandler = function() {
                        return this.handlerType
                    }, e.prototype.setLevel = function(e) {
                        this.level = e
                    }, e.prototype.getLevel = function() {
                        return this.level
                    }, r([o.monitored], e.prototype, "log", null), e
                }();
                t.Logger = i
            },
            9696: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isAuthorized = t.startLoggerCollection = t.STATUS_PRIORITIES = void 0;
                var r, o = n(7006),
                    i = n(9935);

                function a(e, n, r) {
                    var i = r.getHandler(),
                        a = Array.isArray(i) ? i : [i];
                    return t.STATUS_PRIORITIES[e] >= t.STATUS_PRIORITIES[r.getLevel()] && (0, o.includes)(a, n)
                }
                t.STATUS_PRIORITIES = ((r = {})[i.StatusType.debug] = 0, r[i.StatusType.info] = 1, r[i.StatusType.warn] = 2, r[i.StatusType.error] = 3, r), t.startLoggerCollection = function(e) {
                    return {
                        handleLog: function(t, n, r, s) {
                            var u = (0, o.combine)(n.getContext(), t.context);
                            a(t.status, i.HandlerType.console, n) && function(e, t) {
                                o.originalConsoleMethods[e.status].call(o.globalConsole, e.message, t)
                            }(t, u), a(t.status, i.HandlerType.http, n) && e.notify(0, {
                                rawLogsEvent: {
                                    date: s || (0, o.timeStampNow)(),
                                    message: t.message,
                                    status: t.status,
                                    origin: o.ErrorSource.LOGGER
                                },
                                messageContext: u,
                                savedCommonContext: r
                            })
                        }
                    }
                }, t.isAuthorized = a
            },
            6596: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startLogsSessionManagerStub = t.startLogsSessionManager = t.LOGS_SESSION_KEY = void 0;
                var r = n(7006);

                function o(e) {
                    return (0, r.performDraw)(e.sessionSampleRate) ? "1" : "0"
                }
                t.LOGS_SESSION_KEY = "logs", t.startLogsSessionManager = function(e, n) {
                    var i = (0, r.startSessionManager)(e, t.LOGS_SESSION_KEY, function(t) {
                        var n;
                        return {
                            trackingType: n = "0" === t || "1" === t ? t : o(e),
                            isTracked: "1" === n
                        }
                    }, n);
                    return {
                        findTrackedSession: function(e) {
                            var t = i.findActiveSession(e);
                            return t && "1" === t.trackingType ? {
                                id: t.id
                            } : void 0
                        },
                        expireObservable: i.expireObservable
                    }
                }, t.startLogsSessionManagerStub = function(e) {
                    var t = "1" === o(e) ? {} : void 0;
                    return {
                        findTrackedSession: function() {
                            return t
                        },
                        expireObservable: new r.Observable
                    }
                }
            },
            9359: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startLogsTelemetry = void 0;
                var r = n(7006),
                    o = n(4661),
                    i = n(2305);
                t.startLogsTelemetry = function(e, t, n, a, s) {
                    var u = (0, r.startTelemetry)("browser-logs-sdk", t);
                    u.setContextProvider(function() {
                        var e, t, n, r, i, a;
                        return {
                            application: {
                                id: null === (e = (0, o.getRUMInternalContext)()) || void 0 === e ? void 0 : e.application_id
                            },
                            session: {
                                id: null === (t = s.findTrackedSession()) || void 0 === t ? void 0 : t.id
                            },
                            view: {
                                id: null === (r = null === (n = (0, o.getRUMInternalContext)()) || void 0 === n ? void 0 : n.view) || void 0 === r ? void 0 : r.id
                            },
                            action: {
                                id: null === (a = null === (i = (0, o.getRUMInternalContext)()) || void 0 === i ? void 0 : i.user_action) || void 0 === a ? void 0 : a.id
                            }
                        }
                    });
                    var c = [];
                    if ((0, r.canUseEventBridge)()) {
                        var l = (0, r.getEventBridge)(),
                            d = u.observable.subscribe(function(e) {
                                return l.send("internal_telemetry", e)
                            });
                        c.push(function() {
                            return d.unsubscribe()
                        })
                    } else {
                        var f = (0, r.startBatchWithReplica)(t, {
                            endpoint: t.rumEndpointBuilder,
                            encoder: (0, r.createIdentityEncoder)()
                        }, t.replica && {
                            endpoint: t.replica.rumEndpointBuilder,
                            encoder: (0, r.createIdentityEncoder)()
                        }, n, a, s.expireObservable);
                        c.push(function() {
                            return f.stop()
                        });
                        var p = u.observable.subscribe(function(e) {
                            return f.add(e, (0, r.isTelemetryReplicationAllowed)(t))
                        });
                        c.push(function() {
                            return p.unsubscribe()
                        })
                    }
                    return (0, r.addTelemetryConfiguration)((0, i.serializeLogsConfiguration)(e)), {
                        telemetry: u,
                        stop: function() {
                            c.forEach(function(e) {
                                return e()
                            })
                        }
                    }
                }
            },
            4693: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.computeFetchResponseText = t.computeFetchErrorText = t.computeXhrResponseData = t.startNetworkErrorCollection = void 0;
                var r = n(7006),
                    o = n(9935);

                function i(e, t, n) {
                    n("string" == typeof e.response ? u(e.response, t) : e.response)
                }

                function a(e, t, n) {
                    n(u((0, r.toStackTraceString)((0, r.computeStackTrace)(e)), t))
                }

                function s(e, t, n) {
                    var o, i, a, s = (0, r.tryToClone)(e);
                    s && s.body ? window.TextDecoder ? (o = s.body, i = t.requestErrorResponseLengthLimit, a = function(e, t) {
                        e ? n("Unable to retrieve response: ".concat(e)) : n(t)
                    }, (0, r.readBytesFromStream)(o, function(e, t, n) {
                        if (e) a(e);
                        else {
                            var r = new TextDecoder().decode(t);
                            n && (r += "..."), a(void 0, r)
                        }
                    }, {
                        bytesLimit: i,
                        collectStreamBody: !0
                    })) : s.text().then((0, r.monitor)(function(e) {
                        return n(u(e, t))
                    }), (0, r.monitor)(function(e) {
                        return n("Unable to retrieve response: ".concat(e))
                    })) : n()
                }

                function u(e, t) {
                    return e.length > t.requestErrorResponseLengthLimit ? "".concat(e.substring(0, t.requestErrorResponseLengthLimit), "...") : e
                }
                t.startNetworkErrorCollection = function(e, t) {
                    if (!e.forwardErrorsToLogs) return {
                        stop: r.noop
                    };
                    var n = (0, r.initXhrObservable)(e).subscribe(function(e) {
                            "complete" === e.state && c("xhr", e)
                        }),
                        u = (0, r.initFetchObservable)().subscribe(function(e) {
                            "resolve" === e.state && c("fetch", e)
                        });

                    function c(n, u) {
                        function c(e) {
                            t.notify(0, {
                                rawLogsEvent: {
                                    message: "".concat("xhr" === n ? "XHR" : "Fetch", " error ").concat(u.method, " ").concat(u.url),
                                    date: u.startClocks.timeStamp,
                                    error: {
                                        stack: e || "Failed to load"
                                    },
                                    http: {
                                        method: u.method,
                                        status_code: u.status,
                                        url: u.url
                                    },
                                    status: o.StatusType.error,
                                    origin: r.ErrorSource.NETWORK
                                }
                            })
                        }!e.isIntakeUrl(u.url) && (0 === u.status && "opaque" !== u.responseType || (0, r.isServerError)(u.status)) && ("xhr" in u ? i(u.xhr, e, c) : u.response ? s(u.response, e, c) : u.error && a(u.error, e, c))
                    }
                    return {
                        stop: function() {
                            n.unsubscribe(), u.unsubscribe()
                        }
                    }
                }, t.computeXhrResponseData = i, t.computeFetchErrorText = a, t.computeFetchResponseText = s
            },
            2169: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startReportCollection = void 0;
                var r, o = n(7006),
                    i = n(9935),
                    a = ((r = {})[o.RawReportType.cspViolation] = i.StatusType.error, r[o.RawReportType.intervention] = i.StatusType.error, r[o.RawReportType.deprecation] = i.StatusType.warn, r);
                t.startReportCollection = function(e, t) {
                    var n = (0, o.initReportObservable)(e, e.forwardReports).subscribe(function(e) {
                        var n, r = e.message,
                            s = a[e.type];
                        s === i.StatusType.error ? n = {
                            kind: e.subtype,
                            stack: e.stack
                        } : e.stack && (r += " Found in ".concat((0, o.getFileFromStackTraceString)(e.stack))), t.notify(0, {
                            rawLogsEvent: {
                                date: (0, o.timeStampNow)(),
                                message: r,
                                origin: o.ErrorSource.REPORT,
                                error: n,
                                status: s
                            }
                        })
                    });
                    return {
                        stop: function() {
                            n.unsubscribe()
                        }
                    }
                }
            },
            4199: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startReportError = void 0;
                var r = n(7006),
                    o = n(9935);
                t.startReportError = function(e) {
                    return function(t) {
                        e.notify(0, {
                            rawLogsEvent: {
                                message: t.message,
                                date: t.startClocks.timeStamp,
                                origin: r.ErrorSource.AGENT,
                                status: o.StatusType.error
                            }
                        }), (0, r.addTelemetryDebug)("Error reported to customer", {
                            "error.message": t.message
                        })
                    }
                }
            },
            8615: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startRuntimeErrorCollection = void 0;
                var r = n(7006),
                    o = n(9935);
                t.startRuntimeErrorCollection = function(e, t) {
                    if (!e.forwardErrorsToLogs) return {
                        stop: r.noop
                    };
                    var n = new r.Observable,
                        i = (0, r.trackRuntimeError)(n).stop,
                        a = n.subscribe(function(e) {
                            t.notify(0, {
                                rawLogsEvent: {
                                    message: e.message,
                                    date: e.startClocks.timeStamp,
                                    error: {
                                        kind: e.type,
                                        stack: e.stack,
                                        causes: e.causes
                                    },
                                    origin: r.ErrorSource.SOURCE,
                                    status: o.StatusType.error
                                }
                            })
                        });
                    return {
                        stop: function() {
                            i(), a.unsubscribe()
                        }
                    }
                }
            },
            1106: function(e, t, n) {
                "use strict";
                t.fy = void 0;
                var r = n(7006),
                    o = n(9029),
                    i = n(8866);
                n(9935), t.fy = (0, o.makeLogsPublicApi)(i.startLogs), (0, r.defineGlobal)((0, r.getGlobalObject)(), "DD_LOGS", t.fy)
            },
            1122: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startLogsBatch = void 0;
                var r = n(7006);
                t.startLogsBatch = function(e, t, n, o, i) {
                    var a = (0, r.startBatchWithReplica)(e, {
                        endpoint: e.logsEndpointBuilder,
                        encoder: (0, r.createIdentityEncoder)()
                    }, e.replica && {
                        endpoint: e.replica.logsEndpointBuilder,
                        encoder: (0, r.createIdentityEncoder)()
                    }, n, o, i.expireObservable);
                    return t.subscribe(1, function(e) {
                        a.add(e)
                    }), a
                }
            },
            5988: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startLogsBridge = void 0;
                var r = n(7006);
                t.startLogsBridge = function(e) {
                    var t = (0, r.getEventBridge)();
                    e.subscribe(1, function(e) {
                        t.send("log", e)
                    })
                }
            },
            6333: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.displayAlreadyInitializedError = void 0;
                var r = n(9007);
                t.displayAlreadyInitializedError = function(e, t) {
                    t.silentMultipleInit || r.display.error("".concat(e, " is already initialized."))
                }
            },
            1989: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.defineGlobal = t.makePublicApi = void 0;
                var r = n(1273),
                    o = n(1971),
                    i = n(5222);
                t.makePublicApi = function(e) {
                    var t = (0, i.assign)({
                        version: "5.13.0",
                        onReady: function(e) {
                            e()
                        }
                    }, e);
                    return Object.defineProperty(t, "_setDebug", {
                        get: function() {
                            return o.setDebugMode
                        },
                        enumerable: !1
                    }), t
                }, t.defineGlobal = function(e, t, n) {
                    var o = e[t];
                    e[t] = n, o && o.q && o.q.forEach(function(e) {
                        return (0, r.catchUserErrors)(e, "onReady callback threw an error:")()
                    })
                }
            },
            74: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.addEventListeners = t.addEventListener = t.DOM_EVENT = void 0;
                var r, o, i = n(1971),
                    a = n(1482);

                function s(e, t, n, r, o) {
                    var s = void 0 === o ? {} : o,
                        u = s.once,
                        c = s.capture,
                        l = s.passive,
                        d = (0, i.monitor)(function(t) {
                            (t.isTrusted || t.__ddIsTrusted || e.allowUntrustedEvents) && (u && g(), r(t))
                        }),
                        f = l ? {
                            capture: c,
                            passive: l
                        } : c,
                        p = (0, a.getZoneJsOriginalValue)(t, "addEventListener");

                    function g() {
                        var e = (0, a.getZoneJsOriginalValue)(t, "removeEventListener");
                        n.forEach(function(n) {
                            return e.call(t, n, d, f)
                        })
                    }
                    return n.forEach(function(e) {
                        return p.call(t, e, d, f)
                    }), {
                        stop: g
                    }
                }(r = o || (t.DOM_EVENT = o = {})).BEFORE_UNLOAD = "beforeunload", r.CLICK = "click", r.DBL_CLICK = "dblclick", r.KEY_DOWN = "keydown", r.LOAD = "load", r.POP_STATE = "popstate", r.SCROLL = "scroll", r.TOUCH_START = "touchstart", r.TOUCH_END = "touchend", r.TOUCH_MOVE = "touchmove", r.VISIBILITY_CHANGE = "visibilitychange", r.PAGE_SHOW = "pageshow", r.FREEZE = "freeze", r.RESUME = "resume", r.DOM_CONTENT_LOADED = "DOMContentLoaded", r.POINTER_DOWN = "pointerdown", r.POINTER_UP = "pointerup", r.POINTER_CANCEL = "pointercancel", r.HASH_CHANGE = "hashchange", r.PAGE_HIDE = "pagehide", r.MOUSE_DOWN = "mousedown", r.MOUSE_UP = "mouseup", r.MOUSE_MOVE = "mousemove", r.FOCUS = "focus", r.BLUR = "blur", r.CONTEXT_MENU = "contextmenu", r.RESIZE = "resize", r.CHANGE = "change", r.INPUT = "input", r.PLAY = "play", r.PAUSE = "pause", r.SECURITY_POLICY_VIOLATION = "securitypolicyviolation", r.SELECTION_CHANGE = "selectionchange", r.STORAGE = "storage", t.addEventListener = function(e, t, n, r, o) {
                    return s(e, t, [n], r, o)
                }, t.addEventListeners = s
            },
            6996: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getCurrentSite = t.areCookiesAuthorized = t.deleteCookie = t.resetInitCookies = t.getInitCookie = t.getCookie = t.setCookie = void 0;
                var r, o, i = n(9007),
                    a = n(9435),
                    s = n(9139);

                function u(e, t, n, r) {
                    var o = new Date;
                    o.setTime(o.getTime() + n);
                    var i = "expires=".concat(o.toUTCString()),
                        a = r && r.crossSite ? "none" : "strict",
                        s = r && r.domain ? ";domain=".concat(r.domain) : "",
                        u = r && r.secure ? ";secure" : "",
                        c = r && r.partitioned ? ";partitioned" : "";
                    document.cookie = "".concat(e, "=").concat(t, ";").concat(i, ";path=/;samesite=").concat(a).concat(s).concat(u).concat(c)
                }

                function c(e) {
                    return (0, s.findCommaSeparatedValue)(document.cookie, e)
                }

                function l(e, t) {
                    u(e, "", 0, t)
                }
                t.setCookie = u, t.getCookie = c, t.getInitCookie = function(e) {
                    return r || (r = (0, s.findCommaSeparatedValues)(document.cookie)), r.get(e)
                }, t.resetInitCookies = function() {
                    r = void 0
                }, t.deleteCookie = l, t.areCookiesAuthorized = function(e) {
                    if (void 0 === document.cookie || null === document.cookie) return !1;
                    try {
                        var t = "dd_cookie_test_".concat((0, s.generateUUID)()),
                            n = "test";
                        u(t, n, a.ONE_MINUTE, e);
                        var r = c(t) === n;
                        return l(t, e), r
                    } catch (e) {
                        return i.display.error(e), !1
                    }
                }, t.getCurrentSite = function() {
                    if (void 0 === o) {
                        for (var e = "dd_site_test_".concat((0, s.generateUUID)()), t = window.location.hostname.split("."), n = t.pop(); t.length && !c(e);) n = "".concat(t.pop(), ".").concat(n), u(e, "test", a.ONE_SECOND, {
                            domain: n
                        });
                        l(e, {
                            domain: n
                        }), o = n
                    }
                    return o
                }
            },
            2522: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initFetchObservable = void 0;
                var r, o = n(5925),
                    i = n(1971),
                    a = n(5878),
                    s = n(9435),
                    u = n(3971);
                t.initFetchObservable = function() {
                    return r || (r = new a.Observable(function(e) {
                        if (window.fetch) return (0, o.instrumentMethod)(window, "fetch", function(t) {
                            var n, r, o, a, c, l, d, f;
                            return n = t.parameters, r = t.onPostCall, o = n[0], void 0 === (c = (a = n[1]) && a.method) && o instanceof Request && (c = o.method), l = void 0 !== c ? String(c).toUpperCase() : "GET", d = o instanceof Request ? o.url : (0, u.normalizeUrl)(String(o)), f = {
                                state: "start",
                                init: a,
                                input: o,
                                method: l,
                                startClocks: (0, s.clocksNow)(),
                                url: d
                            }, void(e.notify(f), n[0] = f.input, n[1] = f.init, r(function(t) {
                                return function(e, t, n) {
                                    var r = function(t) {
                                        n.state = "resolve", "stack" in t || t instanceof Error ? (n.status = 0, n.isAborted = t instanceof DOMException && t.code === DOMException.ABORT_ERR, n.error = t) : "status" in t && (n.response = t, n.responseType = t.type, n.status = t.status, n.isAborted = !1), e.notify(n)
                                    };
                                    t.then((0, i.monitor)(r), (0, i.monitor)(r))
                                }(e, t, f)
                            }))
                        }).stop
                    })), r
                }
            },
            4592: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isPageExitReason = t.createPageExitObservable = t.PageExitReason = void 0;
                var r = n(7135),
                    o = n(5878),
                    i = n(5222),
                    a = n(8884),
                    s = n(74);
                t.PageExitReason = {
                    HIDDEN: "visibility_hidden",
                    UNLOADING: "before_unload",
                    PAGEHIDE: "page_hide",
                    FROZEN: "page_frozen"
                }, t.createPageExitObservable = function(e) {
                    return new o.Observable(function(n) {
                        var o = (0, r.isExperimentalFeatureEnabled)(r.ExperimentalFeature.PAGEHIDE),
                            i = (0, s.addEventListeners)(e, window, [s.DOM_EVENT.VISIBILITY_CHANGE, s.DOM_EVENT.FREEZE, s.DOM_EVENT.PAGE_HIDE], function(e) {
                                e.type === s.DOM_EVENT.PAGE_HIDE && o ? n.notify({
                                    reason: t.PageExitReason.PAGEHIDE
                                }) : e.type === s.DOM_EVENT.VISIBILITY_CHANGE && "hidden" === document.visibilityState ? n.notify({
                                    reason: t.PageExitReason.HIDDEN
                                }) : e.type === s.DOM_EVENT.FREEZE && n.notify({
                                    reason: t.PageExitReason.FROZEN
                                })
                            }, {
                                capture: !0
                            }).stop,
                            u = a.noop;
                        return o || (u = (0, s.addEventListener)(e, window, s.DOM_EVENT.BEFORE_UNLOAD, function() {
                                n.notify({
                                    reason: t.PageExitReason.UNLOADING
                                })
                            }).stop),
                            function() {
                                i(), u()
                            }
                    })
                }, t.isPageExitReason = function(e) {
                    return (0, i.includes)((0, i.objectValues)(t.PageExitReason), e)
                }
            },
            6369: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.runOnReadyState = void 0;
                var r = n(74);
                t.runOnReadyState = function(e, t, n) {
                    if (document.readyState === t || "complete" === document.readyState) n();
                    else {
                        var o = "complete" === t ? r.DOM_EVENT.LOAD : r.DOM_EVENT.DOM_CONTENT_LOADED;
                        (0, r.addEventListener)(e, window, o, n, {
                            once: !0
                        })
                    }
                }
            },
            3302: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initXhrObservable = void 0;
                var r, o = n(5925),
                    i = n(5878),
                    a = n(9435),
                    s = n(3971),
                    u = n(6426),
                    c = n(74),
                    l = new WeakMap;

                function d(e) {
                    var t = e.target,
                        n = e.parameters,
                        r = n[0],
                        o = n[1];
                    l.set(t, {
                        state: "open",
                        method: String(r).toUpperCase(),
                        url: (0, s.normalizeUrl)(String(o))
                    })
                }

                function f(e) {
                    var t = e.target,
                        n = l.get(t);
                    n && (n.isAborted = !0)
                }
                t.initXhrObservable = function(e) {
                    return r || (r = new i.Observable(function(t) {
                        var n = (0, o.instrumentMethod)(XMLHttpRequest.prototype, "open", d).stop,
                            r = (0, o.instrumentMethod)(XMLHttpRequest.prototype, "send", function(n) {
                                (function(e, t, n) {
                                    var r = e.target,
                                        i = l.get(r);
                                    if (i) {
                                        i.state = "start", i.startClocks = (0, a.clocksNow)(), i.isAborted = !1, i.xhr = r;
                                        var s = !1,
                                            d = (0, o.instrumentMethod)(r, "onreadystatechange", function() {
                                                r.readyState === XMLHttpRequest.DONE && f()
                                            }).stop,
                                            f = function() {
                                                p(), d(), s || (s = !0, i.state = "complete", i.duration = (0, a.elapsed)(i.startClocks.timeStamp, (0, a.timeStampNow)()), i.status = r.status, n.notify((0, u.shallowClone)(i)))
                                            },
                                            p = (0, c.addEventListener)(t, r, "loadend", f).stop;
                                        n.notify(i)
                                    }
                                })(n, e, t)
                            }).stop,
                            i = (0, o.instrumentMethod)(XMLHttpRequest.prototype, "abort", f).stop;
                        return function() {
                            n(), r(), i()
                        }
                    })), r
                }
            },
            8981: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.serializeConfiguration = t.validateAndBuildConfiguration = t.TraceContextInjection = t.DefaultPrivacyLevel = void 0;
                var r = n(1273),
                    o = n(9007),
                    i = n(7135),
                    a = n(9435),
                    s = n(7667),
                    u = n(7746),
                    c = n(6426),
                    l = n(5222),
                    d = n(3769),
                    f = n(6032),
                    p = n(3291);
                t.DefaultPrivacyLevel = {
                    ALLOW: "allow",
                    MASK: "mask",
                    MASK_USER_INPUT: "mask-user-input"
                }, t.TraceContextInjection = {
                    ALL: "all",
                    SAMPLED: "sampled"
                }, t.validateAndBuildConfiguration = function(e) {
                    var t, n, g, m;
                    if (!e || !e.clientToken) {
                        o.display.error("Client Token is not configured, we will not send any data.");
                        return
                    }
                    if (void 0 !== e.sessionSampleRate && !(0, s.isPercentage)(e.sessionSampleRate)) {
                        o.display.error("Session Sample Rate should be a number between 0 and 100");
                        return
                    }
                    if (void 0 !== e.telemetrySampleRate && !(0, s.isPercentage)(e.telemetrySampleRate)) {
                        o.display.error("Telemetry Sample Rate should be a number between 0 and 100");
                        return
                    }
                    if (void 0 !== e.telemetryConfigurationSampleRate && !(0, s.isPercentage)(e.telemetryConfigurationSampleRate)) {
                        o.display.error("Telemetry Configuration Sample Rate should be a number between 0 and 100");
                        return
                    }
                    if (void 0 !== e.trackingConsent && !(0, c.objectHasValue)(f.TrackingConsent, e.trackingConsent)) {
                        o.display.error('Tracking Consent should be either "granted" or "not-granted"');
                        return
                    }
                    return Array.isArray(e.enableExperimentalFeatures) && (0, i.addExperimentalFeatures)(e.enableExperimentalFeatures.filter(function(e) {
                        return (0, c.objectHasValue)(i.ExperimentalFeature, e)
                    })), (0, l.assign)({
                        beforeSend: e.beforeSend && (0, r.catchUserErrors)(e.beforeSend, "beforeSend threw an error:"),
                        sessionStoreStrategyType: (0, d.selectSessionStoreStrategyType)(e),
                        sessionSampleRate: null !== (t = e.sessionSampleRate) && void 0 !== t ? t : 100,
                        telemetrySampleRate: null !== (n = e.telemetrySampleRate) && void 0 !== n ? n : 20,
                        telemetryConfigurationSampleRate: null !== (g = e.telemetryConfigurationSampleRate) && void 0 !== g ? g : 5,
                        service: e.service,
                        silentMultipleInit: !!e.silentMultipleInit,
                        allowUntrustedEvents: !!e.allowUntrustedEvents,
                        trackingConsent: null !== (m = e.trackingConsent) && void 0 !== m ? m : f.TrackingConsent.GRANTED,
                        batchBytesLimit: 16 * u.ONE_KIBI_BYTE,
                        eventRateLimiterThreshold: 3e3,
                        maxTelemetryEventsPerPage: 15,
                        flushTimeout: 30 * a.ONE_SECOND,
                        batchMessagesLimit: 50,
                        messageBytesLimit: 256 * u.ONE_KIBI_BYTE
                    }, (0, p.computeTransportConfiguration)(e))
                }, t.serializeConfiguration = function(e) {
                    return {
                        session_sample_rate: e.sessionSampleRate,
                        telemetry_sample_rate: e.telemetrySampleRate,
                        telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
                        use_before_send: !!e.beforeSend,
                        use_cross_site_session_cookie: e.useCrossSiteSessionCookie,
                        use_partitioned_cross_site_session_cookie: e.usePartitionedCrossSiteSessionCookie,
                        use_secure_session_cookie: e.useSecureSessionCookie,
                        use_proxy: !!e.proxy,
                        silent_multiple_init: e.silentMultipleInit,
                        track_session_across_subdomains: e.trackSessionAcrossSubdomains,
                        allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
                        store_contexts_across_pages: !!e.storeContextsAcrossPages,
                        allow_untrusted_events: !!e.allowUntrustedEvents,
                        tracking_consent: e.trackingConsent
                    }
                }
            },
            1813: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createEndpointBuilder = void 0;
                var r = n(9435),
                    o = n(3971),
                    i = n(7135),
                    a = n(9139),
                    s = n(7675);
                t.createEndpointBuilder = function(e, t, n) {
                    var u = function(e, t) {
                        var n = "/api/v2/".concat(t),
                            r = e.proxy;
                        if ("string" == typeof r) {
                            var i = (0, o.normalizeUrl)(r);
                            return function(e) {
                                return "".concat(i, "?ddforward=").concat(encodeURIComponent("".concat(n, "?").concat(e)))
                            }
                        }
                        if ("function" == typeof r) return function(e) {
                            return r({
                                path: n,
                                parameters: e
                            })
                        };
                        var a = function(e, t) {
                            var n = t.site,
                                r = void 0 === n ? s.INTAKE_SITE_US1 : n,
                                o = t.internalAnalyticsSubdomain;
                            if ("logs" === e && t.usePciIntake && r === s.INTAKE_SITE_US1) return s.PCI_INTAKE_HOST_US1;
                            if (o && r === s.INTAKE_SITE_US1) return "".concat(o, ".").concat(s.INTAKE_SITE_US1);
                            if (r === s.INTAKE_SITE_FED_STAGING) return "http-intake.logs.".concat(r);
                            var i = r.split("."),
                                a = i.pop();
                            return "browser-intake-".concat(i.join("-"), ".").concat(a)
                        }(t, e);
                        return function(e) {
                            return "https://".concat(a).concat(n, "?").concat(e)
                        }
                    }(e, t);
                    return {
                        build: function(o, s) {
                            var c, l, d, f, p, g, m;
                            return u((c = e.clientToken, l = e.internalAnalyticsSubdomain, d = s.retry, f = s.flushReason, p = s.encoding, g = ["sdk_version:".concat("5.13.0"), "api:".concat(o)].concat(n), f && (0, i.isExperimentalFeatureEnabled)(i.ExperimentalFeature.COLLECT_FLUSH_REASON) && g.push("flush_reason:".concat(f)), d && g.push("retry_count:".concat(d.count), "retry_after:".concat(d.lastFailureStatus)), m = ["ddsource=browser", "ddtags=".concat(encodeURIComponent(g.join(","))), "dd-api-key=".concat(c), "dd-evp-origin-version=".concat(encodeURIComponent("5.13.0")), "dd-evp-origin=browser", "dd-request-id=".concat((0, a.generateUUID)())], p && m.push("dd-evp-encoding=".concat(p)), "rum" === t && m.push("batch_time=".concat((0, r.timeStampNow)())), l && m.reverse(), m.join("&")))
                        },
                        urlPrefix: u(""),
                        trackType: t
                    }
                }
            },
            2267: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.computeTransportConfiguration = t.createEndpointBuilder = t.serializeConfiguration = t.validateAndBuildConfiguration = t.TraceContextInjection = t.DefaultPrivacyLevel = void 0;
                var i = n(8981);
                Object.defineProperty(t, "DefaultPrivacyLevel", {
                    enumerable: !0,
                    get: function() {
                        return i.DefaultPrivacyLevel
                    }
                }), Object.defineProperty(t, "TraceContextInjection", {
                    enumerable: !0,
                    get: function() {
                        return i.TraceContextInjection
                    }
                }), Object.defineProperty(t, "validateAndBuildConfiguration", {
                    enumerable: !0,
                    get: function() {
                        return i.validateAndBuildConfiguration
                    }
                }), Object.defineProperty(t, "serializeConfiguration", {
                    enumerable: !0,
                    get: function() {
                        return i.serializeConfiguration
                    }
                });
                var a = n(1813);
                Object.defineProperty(t, "createEndpointBuilder", {
                    enumerable: !0,
                    get: function() {
                        return a.createEndpointBuilder
                    }
                }), o(n(7675), t);
                var s = n(3291);
                Object.defineProperty(t, "computeTransportConfiguration", {
                    enumerable: !0,
                    get: function() {
                        return s.computeTransportConfiguration
                    }
                })
            },
            7675: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.PCI_INTAKE_HOST_US1 = t.INTAKE_SITE_US1_FED = t.INTAKE_SITE_EU1 = t.INTAKE_SITE_US1 = t.INTAKE_SITE_FED_STAGING = t.INTAKE_SITE_STAGING = void 0, t.INTAKE_SITE_STAGING = "datad0g.com", t.INTAKE_SITE_FED_STAGING = "dd0g-gov.com", t.INTAKE_SITE_US1 = "datadoghq.com", t.INTAKE_SITE_EU1 = "datadoghq.eu", t.INTAKE_SITE_US1_FED = "ddog-gov.com", t.PCI_INTAKE_HOST_US1 = "pci.browser-intake-datadoghq.com"
            },
            7013: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildTag = t.buildTags = t.TAG_SIZE_LIMIT = void 0;
                var r = n(9007);
                t.TAG_SIZE_LIMIT = 200, t.buildTags = function(e) {
                    var t = e.env,
                        n = e.service,
                        r = e.version,
                        o = e.datacenter,
                        a = [];
                    return t && a.push(i("env", t)), n && a.push(i("service", n)), r && a.push(i("version", r)), o && a.push(i("datacenter", o)), a
                };
                var o = /[^a-z0-9_:./-]/;

                function i(e, n) {
                    var i = t.TAG_SIZE_LIMIT - e.length - 1;
                    (n.length > i || o.test(n)) && r.display.warn("".concat(e, " value doesn't meet tag requirements and will be sanitized"));
                    var a = n.replace(/,/g, "_");
                    return "".concat(e, ":").concat(a)
                }
                t.buildTag = i
            },
            3291: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.computeTransportConfiguration = void 0;
                var r = n(5222),
                    o = n(1813),
                    i = n(7013),
                    a = n(7675);
                t.computeTransportConfiguration = function(e) {
                    var t, n = e.site || a.INTAKE_SITE_US1,
                        s = (0, i.buildTags)(e),
                        u = {
                            logsEndpointBuilder: (0, o.createEndpointBuilder)(e, "logs", s),
                            rumEndpointBuilder: (0, o.createEndpointBuilder)(e, "rum", s),
                            sessionReplayEndpointBuilder: (0, o.createEndpointBuilder)(e, "replay", s)
                        },
                        c = (t = (0, r.objectValues)(u).map(function(e) {
                            return e.urlPrefix
                        }), n === a.INTAKE_SITE_US1 && t.push("https://".concat(a.PCI_INTAKE_HOST_US1, "/")), t),
                        l = function(e, t, n) {
                            if (e.replica) {
                                var i = (0, r.assign)({}, e, {
                                        site: a.INTAKE_SITE_US1,
                                        clientToken: e.replica.clientToken
                                    }),
                                    s = {
                                        logsEndpointBuilder: (0, o.createEndpointBuilder)(i, "logs", n),
                                        rumEndpointBuilder: (0, o.createEndpointBuilder)(i, "rum", n)
                                    };
                                return t.push.apply(t, (0, r.objectValues)(s).map(function(e) {
                                    return e.urlPrefix
                                })), (0, r.assign)({
                                    applicationId: e.replica.applicationId
                                }, s)
                            }
                        }(e, c, s);
                    return (0, r.assign)({
                        isIntakeUrl: function(e) {
                            return c.some(function(t) {
                                return 0 === e.indexOf(t)
                            })
                        },
                        replica: l,
                        site: n
                    }, u)
                }
            },
            5283: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getConnectivity = void 0, t.getConnectivity = function() {
                    var e, t = window.navigator;
                    return {
                        status: t.onLine ? "connected" : "not_connected",
                        interfaces: t.connection && t.connection.type ? [t.connection.type] : void 0,
                        effective_type: null === (e = t.connection) || void 0 === e ? void 0 : e.effectiveType
                    }
                }
            },
            2381: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), o(n(5283), t)
            },
            2334: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.resetConsoleObservable = t.initConsoleObservable = void 0;
                var r = n(401),
                    o = n(5878),
                    i = n(9007),
                    a = n(1971),
                    s = n(6703),
                    u = n(5222),
                    c = n(1786),
                    l = n(373),
                    d = {};
                t.initConsoleObservable = function(e) {
                    var t = e.map(function(e) {
                        return d[e] || (d[e] = new o.Observable(function(t) {
                            var n = i.globalConsole[e];
                            return i.globalConsole[e] = function() {
                                    for (var o = [], d = 0; d < arguments.length; d++) o[d] = arguments[d];
                                    n.apply(console, o);
                                    var f = (0, r.createHandlingStack)();
                                    (0, a.callMonitored)(function() {
                                        t.notify(function(e, t, n) {
                                            var o, a, d, f = e.map(function(e) {
                                                return "string" == typeof e ? (0, s.sanitize)(e) : e instanceof Error ? (0, r.formatErrorMessage)((0, l.computeStackTrace)(e)) : (0, c.jsonStringify)((0, s.sanitize)(e), void 0, 2)
                                            }).join(" ");
                                            if (t === i.ConsoleApiName.error) {
                                                var p = (0, u.find)(e, function(e) {
                                                    return e instanceof Error
                                                });
                                                o = p ? (0, r.toStackTraceString)((0, l.computeStackTrace)(p)) : void 0, a = (0, r.tryToGetFingerprint)(p), d = p ? (0, r.flattenErrorCauses)(p, "console") : void 0
                                            }
                                            return {
                                                api: t,
                                                message: f,
                                                stack: o,
                                                handlingStack: n,
                                                fingerprint: a,
                                                causes: d
                                            }
                                        }(o, e, f))
                                    })
                                },
                                function() {
                                    i.globalConsole[e] = n
                                }
                        })), d[e]
                    });
                    return o.mergeObservables.apply(void 0, t)
                }, t.resetConsoleObservable = function() {
                    d = {}
                }
            },
            2134: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createContextManager = void 0;
                var r = n(1708),
                    o = n(1653),
                    i = n(6703),
                    a = n(5878);
                t.createContextManager = function(e) {
                    var t = {},
                        n = new a.Observable,
                        s = {
                            getContext: function() {
                                return (0, r.deepClone)(t)
                            },
                            setContext: function(r) {
                                "object" === (0, o.getType)(r) ? (t = (0, i.sanitize)(r), e.updateCustomerData(t)) : s.clearContext(), n.notify()
                            },
                            setContextProperty: function(r, o) {
                                t[r] = (0, i.sanitize)(o), e.updateCustomerData(t), n.notify()
                            },
                            removeContextProperty: function(r) {
                                delete t[r], e.updateCustomerData(t), n.notify()
                            },
                            clearContext: function() {
                                t = {}, e.resetCustomerData(), n.notify()
                            },
                            changeObservable: n
                        };
                    return s
                }
            },
            6263: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createCustomerDataTracker = t.createCustomerDataTrackerManager = t.BYTES_COMPUTATION_THROTTLING_DELAY = t.CUSTOMER_COMPRESSED_DATA_BYTES_LIMIT = t.CUSTOMER_DATA_BYTES_LIMIT = void 0;
                var r = n(7746),
                    o = n(8884),
                    i = n(1786),
                    a = n(9007),
                    s = n(6426);

                function u(e) {
                    var n = 0,
                        a = (0, o.throttle)(function(t) {
                            n = (0, r.computeBytesCount)((0, i.jsonStringify)(t)), e()
                        }, t.BYTES_COMPUTATION_THROTTLING_DELAY),
                        u = a.throttled,
                        c = a.cancel,
                        l = function() {
                            c(), n = 0
                        };
                    return {
                        updateCustomerData: function(e) {
                            (0, s.isEmptyObject)(e) ? l(): u(e)
                        },
                        resetCustomerData: l,
                        getBytesCount: function() {
                            return n
                        },
                        stop: function() {
                            c()
                        }
                    }
                }
                t.CUSTOMER_DATA_BYTES_LIMIT = 3 * r.ONE_KIBI_BYTE, t.CUSTOMER_COMPRESSED_DATA_BYTES_LIMIT = 16 * r.ONE_KIBI_BYTE, t.BYTES_COMPUTATION_THROTTLING_DELAY = 200, t.createCustomerDataTrackerManager = function(e) {
                    void 0 === e && (e = 2);
                    var n = new Map,
                        o = !1;

                    function i(i) {
                        if (void 0 === i && (i = 0), !o && 0 !== e) {
                            var s = 2 === e ? t.CUSTOMER_DATA_BYTES_LIMIT : t.CUSTOMER_COMPRESSED_DATA_BYTES_LIMIT,
                                u = i;
                            n.forEach(function(e) {
                                u += e.getBytesCount()
                            }), u > s && (a.display.warn("Customer data exceeds the recommended ".concat(s / r.ONE_KIBI_BYTE, "KiB threshold. More details: https://docs.datadoghq.com/real_user_monitoring/browser/troubleshooting/#customer-data-exceeds-the-recommended-threshold-warning")), o = !0)
                        }
                    }
                    return {
                        createDetachedTracker: function() {
                            var e = u(function() {
                                return i(e.getBytesCount())
                            });
                            return e
                        },
                        getOrCreateTracker: function(e) {
                            return n.has(e) || n.set(e, u(i)), n.get(e)
                        },
                        setCompressionStatus: function(t) {
                            0 === e && (e = t, i())
                        },
                        getCompressionStatus: function() {
                            return e
                        },
                        stop: function() {
                            n.forEach(function(e) {
                                return e.stop()
                            }), n.clear()
                        }
                    }
                }, t.createCustomerDataTracker = u
            },
            6914: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeStorageListeners = t.buildStorageKey = t.storeContextManager = void 0;
                var r = n(74),
                    o = n(1708),
                    i = [];

                function a(e, t) {
                    return "".concat("_dd_c", "_").concat(e, "_").concat(t)
                }
                t.storeContextManager = function(e, t, n, s) {
                    var u = a(n, s);

                    function c() {
                        var e = localStorage.getItem(u);
                        return null !== e ? JSON.parse(e) : {}
                    }
                    i.push((0, r.addEventListener)(e, window, r.DOM_EVENT.STORAGE, function(e) {
                        u === e.key && t.setContext(c())
                    })), t.changeObservable.subscribe(function() {
                        localStorage.setItem(u, JSON.stringify(t.getContext()))
                    }), t.setContext((0, o.combine)(c(), t.getContext()))
                }, t.buildStorageKey = a, t.removeStorageListeners = function() {
                    i.map(function(e) {
                        return e.stop()
                    })
                }
            },
            1375: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), o(n(283), t)
            },
            283: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            373: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.computeStackTraceFromOnErrorMessage = t.computeStackTrace = void 0;
                var r = n(5222);
                t.computeStackTrace = function(e) {
                    var t = [],
                        n = f(e, "stack"),
                        o = String(e);
                    return n && (0, r.startsWith)(n, o) && (n = n.slice(o.length)), n && n.split("\n").forEach(function(e) {
                        var n = function(e) {
                            var t = a.exec(e);
                            if (t) {
                                var n = t[2] && 0 === t[2].indexOf("native"),
                                    r = t[2] && 0 === t[2].indexOf("eval"),
                                    o = s.exec(t[2]);
                                return r && o && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), {
                                    args: n ? [t[2]] : [],
                                    column: t[4] ? +t[4] : void 0,
                                    func: t[1] || "?",
                                    line: t[3] ? +t[3] : void 0,
                                    url: n ? void 0 : t[2]
                                }
                            }
                        }(e) || function(e) {
                            var t = u.exec(e);
                            if (t) return {
                                args: [],
                                column: t[3] ? +t[3] : void 0,
                                func: "?",
                                line: t[2] ? +t[2] : void 0,
                                url: t[1]
                            }
                        }(e) || function(e) {
                            var t = c.exec(e);
                            if (t) return {
                                args: [],
                                column: t[4] ? +t[4] : void 0,
                                func: t[1] || "?",
                                line: +t[3],
                                url: t[2]
                            }
                        }(e) || function(e) {
                            var t = l.exec(e);
                            if (t) {
                                var n = t[3] && t[3].indexOf(" > eval") > -1,
                                    r = d.exec(t[3]);
                                return n && r && (t[3] = r[1], t[4] = r[2], t[5] = void 0), {
                                    args: t[2] ? t[2].split(",") : [],
                                    column: t[5] ? +t[5] : void 0,
                                    func: t[1] || "?",
                                    line: t[4] ? +t[4] : void 0,
                                    url: t[3]
                                }
                            }
                        }(e);
                        n && (!n.func && n.line && (n.func = "?"), t.push(n))
                    }), {
                        message: f(e, "message"),
                        name: f(e, "name"),
                        stack: t
                    }
                };
                var o = "((?:file|https?|blob|chrome-extension|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
                    i = "(?::(\\d+))",
                    a = RegExp("^\\s*at (.*?) ?\\(".concat(o).concat(i, "?").concat(i, "?\\)?\\s*$"), "i"),
                    s = new RegExp("\\((\\S*)".concat(i).concat(i, "\\)")),
                    u = RegExp("^\\s*at ?".concat(o).concat(i, "?").concat(i, "??\\s*$"), "i"),
                    c = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                    l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                    d = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

                function f(e, t) {
                    if ("object" == typeof e && e && t in e) {
                        var n = e[t];
                        return "string" == typeof n ? n : void 0
                    }
                }
                t.computeStackTraceFromOnErrorMessage = function(e, t, n, r) {
                    var o, i, a, s = ("[object String]" === ({}).toString.call(e) && (i = (o = p.exec(e))[1], a = o[2]), {
                        name: i,
                        message: a
                    });
                    return {
                        name: s.name,
                        message: s.message,
                        stack: [{
                            url: t,
                            column: r,
                            line: n
                        }]
                    }
                };
                var p = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/
            },
            401: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.flattenErrorCauses = t.createHandlingStack = t.formatErrorMessage = t.getFileFromStackTraceString = t.toStackTraceString = t.tryToGetFingerprint = t.computeRawError = t.NO_ERROR_STACK_PRESENT_MESSAGE = void 0;
                var r = n(1971),
                    o = n(6703),
                    i = n(8884),
                    a = n(1786),
                    s = n(373);

                function u(e) {
                    return e instanceof Error && "dd_fingerprint" in e ? String(e.dd_fingerprint) : void 0
                }

                function c(e) {
                    var t = l(e);
                    return e.stack.forEach(function(e) {
                        var n = "?" === e.func ? "<anonymous>" : e.func,
                            r = e.args && e.args.length > 0 ? "(".concat(e.args.join(", "), ")") : "",
                            o = e.line ? ":".concat(e.line) : "",
                            i = e.line && e.column ? ":".concat(e.column) : "";
                        t += "\n  at ".concat(n).concat(r, " @ ").concat(e.url).concat(o).concat(i)
                    }), t
                }

                function l(e) {
                    return "".concat(e.name || "Error", ": ").concat(e.message)
                }

                function d(e, t) {
                    for (var n = e, r = [];
                        (null == n ? void 0 : n.cause) instanceof Error && r.length < 10;) {
                        var o = (0, s.computeStackTrace)(n.cause);
                        r.push({
                            message: n.cause.message,
                            source: t,
                            type: null == o ? void 0 : o.name,
                            stack: o && c(o)
                        }), n = n.cause
                    }
                    return r.length ? r : void 0
                }
                t.NO_ERROR_STACK_PRESENT_MESSAGE = "No stack, consider using an instance of Error", t.computeRawError = function(e) {
                    var n = e.stackTrace,
                        r = e.originalError,
                        i = e.handlingStack,
                        s = e.startClocks,
                        l = e.nonErrorPrefix,
                        f = e.source,
                        p = e.handling,
                        g = r instanceof Error,
                        m = (null == n ? void 0 : n.message) && (null == n ? void 0 : n.name) ? n.message : g ? "Empty message" : "".concat(l, " ").concat((0, a.jsonStringify)((0, o.sanitize)(r))),
                        v = void 0 !== n && (g || n.stack.length > 0 && (n.stack.length > 1 || void 0 !== n.stack[0].url)) ? c(n) : t.NO_ERROR_STACK_PRESENT_MESSAGE,
                        y = g ? d(r, f) : void 0,
                        b = null == n ? void 0 : n.name,
                        _ = u(r);
                    return {
                        startClocks: s,
                        source: f,
                        handling: p,
                        handlingStack: i,
                        originalError: r,
                        type: b,
                        message: m,
                        stack: v,
                        causes: y,
                        fingerprint: _
                    }
                }, t.tryToGetFingerprint = u, t.toStackTraceString = c, t.getFileFromStackTraceString = function(e) {
                    var t;
                    return null === (t = /@ (.+)/.exec(e)) || void 0 === t ? void 0 : t[1]
                }, t.formatErrorMessage = l, t.createHandlingStack = function() {
                    var e, t = Error();
                    if (!t.stack) try {
                        throw t
                    } catch (e) {
                        (0, i.noop)()
                    }
                    return (0, r.callMonitored)(function() {
                        var n = (0, s.computeStackTrace)(t);
                        n.stack = n.stack.slice(2), e = c(n)
                    }), e
                }, t.flattenErrorCauses = d
            },
            7235: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ErrorSource = void 0, t.ErrorSource = {
                    AGENT: "agent",
                    CONSOLE: "console",
                    CUSTOM: "custom",
                    LOGGER: "logger",
                    NETWORK: "network",
                    SOURCE: "source",
                    REPORT: "report"
                }
            },
            4992: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.instrumentUnhandledRejection = t.instrumentOnError = t.trackRuntimeError = void 0;
                var r = n(5925),
                    o = n(9435),
                    i = n(373),
                    a = n(401),
                    s = n(7235);

                function u(e) {
                    return (0, r.instrumentMethod)(window, "onerror", function(t) {
                        var n = t.parameters,
                            r = n[0],
                            o = n[1],
                            a = n[2],
                            s = n[3],
                            u = n[4];
                        e(u instanceof Error ? (0, i.computeStackTrace)(u) : (0, i.computeStackTraceFromOnErrorMessage)(r, o, a, s), null != u ? u : r)
                    })
                }

                function c(e) {
                    return (0, r.instrumentMethod)(window, "onunhandledrejection", function(t) {
                        var n = t.parameters[0].reason || "Empty reason";
                        e((0, i.computeStackTrace)(n), n)
                    })
                }
                t.trackRuntimeError = function(e) {
                    var t = function(t, n) {
                            var r = (0, a.computeRawError)({
                                stackTrace: t,
                                originalError: n,
                                startClocks: (0, o.clocksNow)(),
                                nonErrorPrefix: "Uncaught",
                                source: s.ErrorSource.SOURCE,
                                handling: "unhandled"
                            });
                            e.notify(r)
                        },
                        n = u(t).stop,
                        r = c(t).stop;
                    return {
                        stop: function() {
                            n(), r()
                        }
                    }
                }, t.instrumentOnError = u, t.instrumentUnhandledRejection = c
            },
            2467: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createEventRateLimiter = void 0;
                var r = n(6206),
                    o = n(9435),
                    i = n(7235);
                t.createEventRateLimiter = function(e, t, n) {
                    var a = 0,
                        s = !1;
                    return {
                        isLimitReached: function() {
                            if (0 === a && (0, r.setTimeout)(function() {
                                    a = 0
                                }, o.ONE_MINUTE), (a += 1) <= t || s) return s = !1, !1;
                            if (a === t + 1) {
                                s = !0;
                                try {
                                    n({
                                        message: "Reached max number of ".concat(e, "s by minute: ").concat(t),
                                        source: i.ErrorSource.AGENT,
                                        startClocks: (0, o.clocksNow)()
                                    })
                                } finally {
                                    s = !1
                                }
                            }
                            return !0
                        }
                    }
                }
            },
            5569: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initReportObservable = t.RawReportType = void 0;
                var r = n(401),
                    o = n(1971),
                    i = n(5878),
                    a = n(74),
                    s = n(5222),
                    u = n(9139);

                function c(e, t, n, o, i) {
                    return n ? (0, r.toStackTraceString)({
                        name: e,
                        message: t,
                        stack: [{
                            func: "?",
                            url: n,
                            line: null != o ? o : void 0,
                            column: null != i ? i : void 0
                        }]
                    }) : void 0
                }
                t.RawReportType = {
                    intervention: "intervention",
                    deprecation: "deprecation",
                    cspViolation: "csp_violation"
                }, t.initReportObservable = function(e, n) {
                    var r = [];
                    (0, s.includes)(n, t.RawReportType.cspViolation) && r.push(new i.Observable(function(n) {
                        return (0, a.addEventListener)(e, document, a.DOM_EVENT.SECURITY_POLICY_VIOLATION, function(e) {
                            var r, o;
                            n.notify((r = t.RawReportType.cspViolation, o = "'".concat(e.blockedURI, "' blocked by '").concat(e.effectiveDirective, "' directive"), {
                                type: t.RawReportType.cspViolation,
                                subtype: e.effectiveDirective,
                                message: "".concat(r, ": ").concat(o),
                                stack: c(e.effectiveDirective, e.originalPolicy ? "".concat(o, ' of the policy "').concat((0, u.safeTruncate)(e.originalPolicy, 100, "..."), '"') : "no policy", e.sourceFile, e.lineNumber, e.columnNumber),
                                originalReport: e
                            }))
                        }).stop
                    }));
                    var l = n.filter(function(e) {
                        return e !== t.RawReportType.cspViolation
                    });
                    return l.length && r.push(new i.Observable(function(e) {
                        if (window.ReportingObserver) {
                            var t = (0, o.monitor)(function(t, n) {
                                    return t.forEach(function(t) {
                                        var n, r;
                                        e.notify({
                                            type: n = t.type,
                                            subtype: (r = t.body).id,
                                            message: "".concat(n, ": ").concat(r.message),
                                            originalReport: t,
                                            stack: c(r.id, r.message, r.sourceFile, r.lineNumber, r.columnNumber)
                                        })
                                    })
                                }),
                                n = new window.ReportingObserver(t, {
                                    types: l,
                                    buffered: !0
                                });
                            return n.observe(),
                                function() {
                                    n.disconnect()
                                }
                        }
                    })), i.mergeObservables.apply(void 0, r)
                }
            },
            8897: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            5367: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.tryOldCookiesMigration = t.LOGS_SESSION_KEY = t.RUM_SESSION_KEY = t.OLD_LOGS_COOKIE_NAME = t.OLD_RUM_COOKIE_NAME = t.OLD_SESSION_COOKIE_NAME = void 0;
                var r = n(6996),
                    o = n(3793),
                    i = n(402);
                t.OLD_SESSION_COOKIE_NAME = "_dd", t.OLD_RUM_COOKIE_NAME = "_dd_r", t.OLD_LOGS_COOKIE_NAME = "_dd_l", t.RUM_SESSION_KEY = "rum", t.LOGS_SESSION_KEY = "logs", t.tryOldCookiesMigration = function(e) {
                    if (!(0, r.getInitCookie)(o.SESSION_STORE_KEY)) {
                        var n = (0, r.getInitCookie)(t.OLD_SESSION_COOKIE_NAME),
                            a = (0, r.getInitCookie)(t.OLD_RUM_COOKIE_NAME),
                            s = (0, r.getInitCookie)(t.OLD_LOGS_COOKIE_NAME),
                            u = {};
                        n && (u.id = n), s && /^[01]$/.test(s) && (u[t.LOGS_SESSION_KEY] = s), a && /^[012]$/.test(a) && (u[t.RUM_SESSION_KEY] = a), (0, i.isSessionInExpiredState)(u) || ((0, i.expandSessionState)(u), e.persistSession(u))
                    }
                }
            },
            4249: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.SESSION_EXPIRATION_DELAY = t.SESSION_TIME_OUT_DELAY = void 0;
                var r = n(9435);
                t.SESSION_TIME_OUT_DELAY = 4 * r.ONE_HOUR, t.SESSION_EXPIRATION_DELAY = 15 * r.ONE_MINUTE
            },
            8739: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.stopSessionManager = t.startSessionManager = t.VISIBILITY_CHECK_DELAY = void 0;
                var r = n(5878),
                    o = n(7759),
                    i = n(9435),
                    a = n(74),
                    s = n(6206),
                    u = n(4249),
                    c = n(3769);
                t.VISIBILITY_CHECK_DELAY = i.ONE_MINUTE;
                var l = u.SESSION_TIME_OUT_DELAY,
                    d = [];
                t.startSessionManager = function(e, n, u, f) {
                    var p, g, m, v, y, b, _ = new r.Observable,
                        E = new r.Observable,
                        S = (0, c.startSessionStore)(e.sessionStoreStrategyType, n, u);
                    d.push(function() {
                        return S.stop()
                    });
                    var h = new o.ValueHistory(l);

                    function O() {
                        return {
                            id: S.getSession().id,
                            trackingType: S.getSession()[n]
                        }
                    }
                    return d.push(function() {
                        return h.stop()
                    }), S.renewObservable.subscribe(function() {
                        h.add(O(), (0, i.relativeNow)()), _.notify()
                    }), S.expireObservable.subscribe(function() {
                        E.notify(), h.closeActive((0, i.relativeNow)())
                    }), S.expandOrRenewSession(), h.add(O(), (0, i.clocksOrigin)().relative), f.observable.subscribe(function() {
                        f.isGranted() ? S.expandOrRenewSession() : S.expire()
                    }), p = function() {
                        f.isGranted() && S.expandOrRenewSession()
                    }, g = (0, a.addEventListeners)(e, window, [a.DOM_EVENT.CLICK, a.DOM_EVENT.TOUCH_START, a.DOM_EVENT.KEY_DOWN, a.DOM_EVENT.SCROLL], p, {
                        capture: !0,
                        passive: !0
                    }).stop, d.push(g), m = function() {
                        return S.expandSession()
                    }, v = function() {
                        "visible" === document.visibilityState && m()
                    }, y = (0, a.addEventListener)(e, document, a.DOM_EVENT.VISIBILITY_CHANGE, v).stop, d.push(y), b = (0, s.setInterval)(v, t.VISIBILITY_CHECK_DELAY), d.push(function() {
                        (0, s.clearInterval)(b)
                    }), {
                        findActiveSession: function(e) {
                            return h.find(e)
                        },
                        renewObservable: _,
                        expireObservable: E,
                        expire: S.expire
                    }
                }, t.stopSessionManager = function() {
                    d.forEach(function(e) {
                        return e()
                    }), d = []
                }
            },
            402: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.toSessionState = t.toSessionString = t.expandSessionState = t.isSessionInExpiredState = void 0;
                var r = n(6426),
                    o = n(5222),
                    i = n(9435),
                    a = n(4249),
                    s = /^([a-z]+)=([a-z0-9-]+)$/;
                t.isSessionInExpiredState = function(e) {
                    return (0, r.isEmptyObject)(e)
                }, t.expandSessionState = function(e) {
                    e.expire = String((0, i.dateNow)() + a.SESSION_EXPIRATION_DELAY)
                }, t.toSessionString = function(e) {
                    return (0, o.objectEntries)(e).map(function(e) {
                        var t = e[0],
                            n = e[1];
                        return "".concat(t, "=").concat(n)
                    }).join("&")
                }, t.toSessionState = function(e) {
                    var t = {};
                    return e && (-1 !== e.indexOf("&") || s.test(e)) && e.split("&").forEach(function(e) {
                        var n = s.exec(e);
                        if (null !== n) {
                            var r = n[1],
                                o = n[2];
                            t[r] = o
                        }
                    }), t
                }
            },
            3769: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startSessionStore = t.selectSessionStoreStrategyType = t.STORAGE_POLL_DELAY = void 0;
                var r = n(6206),
                    o = n(5878),
                    i = n(9435),
                    a = n(8884),
                    s = n(9139),
                    u = n(4249),
                    c = n(1244),
                    l = n(937),
                    d = n(693);
                t.STORAGE_POLL_DELAY = i.ONE_SECOND, t.selectSessionStoreStrategyType = function(e) {
                    var t = (0, c.selectCookieStrategy)(e);
                    return !t && e.allowFallbackToLocalStorage && (t = (0, l.selectLocalStorageStrategy)()), t
                }, t.startSessionStore = function(e, n, f) {
                    var p, g = new o.Observable,
                        m = new o.Observable,
                        v = "Cookie" === e.type ? (0, c.initCookieStrategy)(e.cookieOptions) : (0, l.initLocalStorageStrategy)(),
                        y = v.clearSession,
                        b = v.retrieveSession,
                        _ = (0, r.setInterval)(function() {
                            (0, d.processSessionStoreOperations)({
                                process: function(e) {
                                    return C(e) ? void 0 : {}
                                },
                                after: T
                            }, v)
                        }, t.STORAGE_POLL_DELAY),
                        E = C(p = b()) ? p : {},
                        S = (0, a.throttle)(function() {
                            var e;
                            (0, d.processSessionStoreOperations)({
                                process: function(t) {
                                    var r, o, a, u = T(t);
                                    return o = (r = f(u[n])).trackingType, a = r.isTracked, u[n] = o, a && !u.id && (u.id = (0, s.generateUUID)(), u.created = String((0, i.dateNow)())), e = a, u
                                },
                                after: function(t) {
                                    e && !w() && (E = t, g.notify()), E = t
                                }
                            }, v)
                        }, t.STORAGE_POLL_DELAY),
                        h = S.throttled,
                        O = S.cancel;

                    function T(e) {
                        var t;
                        return C(e) || (e = {}), w() && ((t = e, E.id !== t.id || E[n] !== t[n]) ? (E = {}, m.notify()) : E = e), e
                    }

                    function w() {
                        return void 0 !== E[n]
                    }

                    function C(e) {
                        return (void 0 === e.created || (0, i.dateNow)() - Number(e.created) < u.SESSION_TIME_OUT_DELAY) && (void 0 === e.expire || (0, i.dateNow)() < Number(e.expire))
                    }
                    return {
                        expandOrRenewSession: h,
                        expandSession: function() {
                            (0, d.processSessionStoreOperations)({
                                process: function(e) {
                                    return w() ? T(e) : void 0
                                }
                            }, v)
                        },
                        getSession: function() {
                            return E
                        },
                        renewObservable: g,
                        expireObservable: m,
                        expire: function() {
                            O(), y(), T({})
                        },
                        stop: function() {
                            (0, r.clearInterval)(_)
                        }
                    }
                }
            },
            693: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.processSessionStoreOperations = t.LOCK_MAX_TRIES = t.LOCK_RETRY_DELAY = void 0;
                var r, o = n(6206),
                    i = n(9139),
                    a = n(402);
                t.LOCK_RETRY_DELAY = 10, t.LOCK_MAX_TRIES = 100;
                var s = [];

                function u(e, n, o) {
                    void 0 === o && (o = 0);
                    var u, d, f = n.isLockEnabled,
                        p = n.retrieveSession,
                        g = n.persistSession,
                        m = n.clearSession;
                    if (r || (r = e), e !== r) {
                        s.push(e);
                        return
                    }
                    if (f && o >= t.LOCK_MAX_TRIES) {
                        l(n);
                        return
                    }
                    var v = p();
                    if (f && (v.lock || (d = (0, i.generateUUID)(), v.lock = d, g(v), (v = p()).lock !== d))) {
                        c(e, n, o);
                        return
                    }
                    var y = e.process(v);
                    if (f && (v = p()).lock !== d) {
                        c(e, n, o);
                        return
                    }
                    if (y && ((0, a.isSessionInExpiredState)(y) ? m() : ((0, a.expandSessionState)(y), g(y))), f && !(y && (0, a.isSessionInExpiredState)(y))) {
                        if ((v = p()).lock !== d) {
                            c(e, n, o);
                            return
                        }
                        delete v.lock, g(v), y = v
                    }
                    null === (u = e.after) || void 0 === u || u.call(e, y || v), l(n)
                }

                function c(e, n, r) {
                    (0, o.setTimeout)(function() {
                        u(e, n, r + 1)
                    }, t.LOCK_RETRY_DELAY)
                }

                function l(e) {
                    r = void 0;
                    var t = s.shift();
                    t && u(t, e)
                }
                t.processSessionStoreOperations = u
            },
            1244: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildCookieOptions = t.initCookieStrategy = t.selectCookieStrategy = void 0;
                var r = n(6767),
                    o = n(6996),
                    i = n(5367),
                    a = n(4249),
                    s = n(402),
                    u = n(3793);

                function c() {
                    var e = (0, o.getCookie)(u.SESSION_STORE_KEY);
                    return (0, s.toSessionState)(e)
                }

                function l(e) {
                    var t = {};
                    return t.secure = !!e.useSecureSessionCookie || !!e.usePartitionedCrossSiteSessionCookie || !!e.useCrossSiteSessionCookie, t.crossSite = !!e.usePartitionedCrossSiteSessionCookie || !!e.useCrossSiteSessionCookie, t.partitioned = !!e.usePartitionedCrossSiteSessionCookie, e.trackSessionAcrossSubdomains && (t.domain = (0, o.getCurrentSite)()), t
                }
                t.selectCookieStrategy = function(e) {
                    var t = l(e);
                    return (0, o.areCookiesAuthorized)(t) ? {
                        type: "Cookie",
                        cookieOptions: t
                    } : void 0
                }, t.initCookieStrategy = function(e) {
                    var t = {
                        isLockEnabled: (0, r.isChromium)(),
                        persistSession: function(t) {
                            (0, o.setCookie)(u.SESSION_STORE_KEY, (0, s.toSessionString)(t), a.SESSION_EXPIRATION_DELAY, e)
                        },
                        retrieveSession: c,
                        clearSession: function() {
                            (0, o.deleteCookie)(u.SESSION_STORE_KEY, e)
                        }
                    };
                    return (0, i.tryOldCookiesMigration)(t), t
                }, t.buildCookieOptions = l
            },
            937: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initLocalStorageStrategy = t.selectLocalStorageStrategy = void 0;
                var r = n(9139),
                    o = n(402),
                    i = n(3793);

                function a(e) {
                    localStorage.setItem(i.SESSION_STORE_KEY, (0, o.toSessionString)(e))
                }

                function s() {
                    var e = localStorage.getItem(i.SESSION_STORE_KEY);
                    return (0, o.toSessionState)(e)
                }

                function u() {
                    localStorage.removeItem(i.SESSION_STORE_KEY)
                }
                t.selectLocalStorageStrategy = function() {
                    try {
                        var e = (0, r.generateUUID)(),
                            t = "".concat("_dd_test_").concat(e);
                        localStorage.setItem(t, e);
                        var n = localStorage.getItem(t);
                        return localStorage.removeItem(t), e === n ? {
                            type: "LocalStorage"
                        } : void 0
                    } catch (e) {
                        return
                    }
                }, t.initLocalStorageStrategy = function() {
                    return {
                        isLockEnabled: !1,
                        persistSession: a,
                        retrieveSession: s,
                        clearSession: u
                    }
                }
            },
            3793: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.SESSION_STORE_KEY = void 0, t.SESSION_STORE_KEY = "_dd_s"
            },
            6868: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getSyntheticsResultId = t.getSyntheticsTestId = t.willSyntheticsInjectRum = t.SYNTHETICS_INJECTS_RUM_COOKIE_NAME = t.SYNTHETICS_RESULT_ID_COOKIE_NAME = t.SYNTHETICS_TEST_ID_COOKIE_NAME = void 0;
                var r = n(6996);
                t.SYNTHETICS_TEST_ID_COOKIE_NAME = "datadog-synthetics-public-id", t.SYNTHETICS_RESULT_ID_COOKIE_NAME = "datadog-synthetics-result-id", t.SYNTHETICS_INJECTS_RUM_COOKIE_NAME = "datadog-synthetics-injects-rum", t.willSyntheticsInjectRum = function() {
                    return !!(window._DATADOG_SYNTHETICS_INJECTS_RUM || (0, r.getInitCookie)(t.SYNTHETICS_INJECTS_RUM_COOKIE_NAME))
                }, t.getSyntheticsTestId = function() {
                    var e = window._DATADOG_SYNTHETICS_PUBLIC_ID || (0, r.getInitCookie)(t.SYNTHETICS_TEST_ID_COOKIE_NAME);
                    return "string" == typeof e ? e : void 0
                }, t.getSyntheticsResultId = function() {
                    var e = window._DATADOG_SYNTHETICS_RESULT_ID || (0, r.getInitCookie)(t.SYNTHETICS_RESULT_ID_COOKIE_NAME);
                    return "string" == typeof e ? e : void 0
                }
            },
            5208: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.addTelemetryConfiguration = t.isTelemetryReplicationAllowed = t.startTelemetry = t.resetTelemetry = t.startFakeTelemetry = t.addTelemetryError = t.addTelemetryDebug = void 0;
                var i = n(6439);
                Object.defineProperty(t, "addTelemetryDebug", {
                    enumerable: !0,
                    get: function() {
                        return i.addTelemetryDebug
                    }
                }), Object.defineProperty(t, "addTelemetryError", {
                    enumerable: !0,
                    get: function() {
                        return i.addTelemetryError
                    }
                }), Object.defineProperty(t, "startFakeTelemetry", {
                    enumerable: !0,
                    get: function() {
                        return i.startFakeTelemetry
                    }
                }), Object.defineProperty(t, "resetTelemetry", {
                    enumerable: !0,
                    get: function() {
                        return i.resetTelemetry
                    }
                }), Object.defineProperty(t, "startTelemetry", {
                    enumerable: !0,
                    get: function() {
                        return i.startTelemetry
                    }
                }), Object.defineProperty(t, "isTelemetryReplicationAllowed", {
                    enumerable: !0,
                    get: function() {
                        return i.isTelemetryReplicationAllowed
                    }
                }), Object.defineProperty(t, "addTelemetryConfiguration", {
                    enumerable: !0,
                    get: function() {
                        return i.addTelemetryConfiguration
                    }
                }), o(n(1009), t), o(n(1929), t)
            },
            1009: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.TelemetryType = void 0, t.TelemetryType = {
                    log: "log",
                    configuration: "configuration"
                }
            },
            6439: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.scrubCustomerFrames = t.formatError = t.addTelemetryConfiguration = t.addTelemetryError = t.addTelemetryDebug = t.isTelemetryReplicationAllowed = t.resetTelemetry = t.startFakeTelemetry = t.startTelemetry = void 0;
                var r, o = n(9007),
                    i = n(401),
                    a = n(7135),
                    s = n(2267),
                    u = n(5878),
                    c = n(9435),
                    l = n(1971),
                    d = n(6016),
                    f = n(5222),
                    p = n(7667),
                    g = n(1786),
                    m = n(1708),
                    v = n(373),
                    y = n(2381),
                    b = n(1009),
                    _ = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "https://d3uc069fcn7uxw.cloudfront.net", "https://d20xtzwzcl0ceb.cloudfront.net", "http://localhost", "<anonymous>"],
                    E = [s.INTAKE_SITE_US1_FED],
                    S = {
                        maxEventsPerPage: 0,
                        sentEventCount: 0,
                        telemetryEnabled: !1,
                        telemetryConfigurationEnabled: !1
                    };

                function h(e, t) {
                    O((0, f.assign)({
                        type: b.TelemetryType.log,
                        status: "error"
                    }, T(e), t))
                }

                function O(e) {
                    r && S.sentEventCount < S.maxEventsPerPage && (S.sentEventCount += 1, r(e))
                }

                function T(e) {
                    if (e instanceof Error) {
                        var t = (0, v.computeStackTrace)(e);
                        return {
                            error: {
                                kind: t.name,
                                stack: (0, i.toStackTraceString)(w(t))
                            },
                            message: t.message
                        }
                    }
                    return {
                        error: {
                            stack: i.NO_ERROR_STACK_PRESENT_MESSAGE
                        },
                        message: "".concat("Uncaught", " ").concat((0, g.jsonStringify)(e))
                    }
                }

                function w(e) {
                    return e.stack = e.stack.filter(function(e) {
                        return !e.url || _.some(function(t) {
                            return (0, f.startsWith)(e.url, t)
                        })
                    }), e
                }
                t.startTelemetry = function(e, t) {
                    var n, o = new u.Observable;
                    S.telemetryEnabled = !(0, f.includes)(E, t.site) && (0, p.performDraw)(t.telemetrySampleRate), S.telemetryConfigurationEnabled = S.telemetryEnabled && (0, p.performDraw)(t.telemetryConfigurationSampleRate);
                    var i = {
                        is_local_file: "file:" === window.location.protocol,
                        is_worker: "WorkerGlobalScope" in self
                    };
                    return r = function(t) {
                        if (S.telemetryEnabled) {
                            var r = (0, m.combine)({
                                type: "telemetry",
                                date: (0, c.timeStampNow)(),
                                service: e,
                                version: "5.13.0",
                                source: "browser",
                                _dd: {
                                    format_version: 2
                                },
                                telemetry: (0, m.combine)(t, {
                                    runtime_env: i,
                                    connectivity: (0, y.getConnectivity)()
                                }),
                                experimental_features: (0, f.arrayFrom)((0, a.getExperimentalFeatures)())
                            }, void 0 !== n ? n() : {});
                            o.notify(r), (0, d.sendToExtension)("telemetry", r)
                        }
                    }, (0, l.startMonitorErrorCollection)(h), (0, f.assign)(S, {
                        maxEventsPerPage: t.maxTelemetryEventsPerPage,
                        sentEventCount: 0
                    }), {
                        setContextProvider: function(e) {
                            n = e
                        },
                        observable: o,
                        enabled: S.telemetryEnabled
                    }
                }, t.startFakeTelemetry = function() {
                    var e = [];
                    return (0, f.assign)(S, {
                        maxEventsPerPage: 1 / 0,
                        sentEventCount: 0
                    }), r = function(t) {
                        e.push(t)
                    }, e
                }, t.resetTelemetry = function() {
                    r = void 0
                }, t.isTelemetryReplicationAllowed = function(e) {
                    return e.site === s.INTAKE_SITE_STAGING
                }, t.addTelemetryDebug = function(e, t) {
                    (0, l.displayIfDebugEnabled)(o.ConsoleApiName.debug, e, t), O((0, f.assign)({
                        type: b.TelemetryType.log,
                        message: e,
                        status: "debug"
                    }, t))
                }, t.addTelemetryError = h, t.addTelemetryConfiguration = function(e) {
                    S.telemetryConfigurationEnabled && O({
                        type: b.TelemetryType.configuration,
                        configuration: e
                    })
                }, t.formatError = T, t.scrubCustomerFrames = w
            },
            1929: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            6032: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createTrackingConsentState = t.TrackingConsent = void 0;
                var r = n(5878);
                t.TrackingConsent = {
                    GRANTED: "granted",
                    NOT_GRANTED: "not-granted"
                }, t.createTrackingConsentState = function(e) {
                    var n = new r.Observable;
                    return {
                        tryToInit: function(t) {
                            e || (e = t)
                        },
                        update: function(t) {
                            e = t, n.notify()
                        },
                        isGranted: function() {
                            return e === t.TrackingConsent.GRANTED
                        },
                        observable: n
                    }
                }
            },
            8281: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), o(n(1872), t), o(n(9223), t)
            },
            9223: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.checkUser = t.sanitizeUser = void 0;
                var r = n(9007),
                    o = n(1653),
                    i = n(5222);
                t.sanitizeUser = function(e) {
                    var t = (0, i.assign)({}, e);
                    return ["id", "name", "email"].forEach(function(e) {
                        e in t && (t[e] = String(t[e]))
                    }), t
                }, t.checkUser = function(e) {
                    var t = "object" === (0, o.getType)(e);
                    return t || r.display.error("Unsupported user:", e), t
                }
            },
            1872: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            7006: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.instrumentSetter = t.instrumentMethod = t.getZoneJsOriginalValue = t.runOnReadyState = t.sendToExtension = t.AbstractLifeCycle = t.createIdentityEncoder = t.createFlushController = t.startBatchWithReplica = t.bridgeSupports = t.getEventBridge = t.canUseEventBridge = t.createHttpRequest = t.SESSION_TIME_OUT_DELAY = t.stopSessionManager = t.startSessionManager = t.Observable = t.setDebugMode = t.callMonitored = t.monitor = t.monitored = t.addTelemetryConfiguration = t.isTelemetryReplicationAllowed = t.resetTelemetry = t.startFakeTelemetry = t.addTelemetryError = t.addTelemetryDebug = t.startTelemetry = t.RawReportType = t.initReportObservable = t.displayAlreadyInitializedError = t.makePublicApi = t.defineGlobal = t.computeStackTrace = t.trackRuntimeError = t.ExperimentalFeature = t.getExperimentalFeatures = t.resetExperimentalFeatures = t.addExperimentalFeatures = t.isExperimentalFeatureEnabled = t.createTrackingConsentState = t.TrackingConsent = t.INTAKE_SITE_EU1 = t.INTAKE_SITE_US1_FED = t.INTAKE_SITE_US1 = t.INTAKE_SITE_STAGING = t.serializeConfiguration = t.TraceContextInjection = t.DefaultPrivacyLevel = t.validateAndBuildConfiguration = void 0, t.ErrorSource = t.sanitizeUser = t.checkUser = t.getSyntheticsResultId = t.getSyntheticsTestId = t.willSyntheticsInjectRum = t.SESSION_STORE_KEY = t.STORAGE_POLL_DELAY = t.readBytesFromStream = t.CLEAR_OLD_VALUES_INTERVAL = t.ValueHistory = t.CUSTOMER_DATA_BYTES_LIMIT = t.createCustomerDataTracker = t.createCustomerDataTrackerManager = t.removeStorageListeners = t.storeContextManager = t.createContextManager = t.catchUserErrors = t.BoundedBuffer = t.resetConsoleObservable = t.initConsoleObservable = t.isPageExitReason = t.PageExitReason = t.createPageExitObservable = t.initFetchObservable = t.initXhrObservable = t.deleteCookie = t.setCookie = t.getCookie = t.areCookiesAuthorized = t.NO_ERROR_STACK_PRESENT_MESSAGE = t.getFileFromStackTraceString = t.toStackTraceString = t.createHandlingStack = t.computeRawError = void 0;
                var i = n(2267);
                Object.defineProperty(t, "validateAndBuildConfiguration", {
                    enumerable: !0,
                    get: function() {
                        return i.validateAndBuildConfiguration
                    }
                }), Object.defineProperty(t, "DefaultPrivacyLevel", {
                    enumerable: !0,
                    get: function() {
                        return i.DefaultPrivacyLevel
                    }
                }), Object.defineProperty(t, "TraceContextInjection", {
                    enumerable: !0,
                    get: function() {
                        return i.TraceContextInjection
                    }
                }), Object.defineProperty(t, "serializeConfiguration", {
                    enumerable: !0,
                    get: function() {
                        return i.serializeConfiguration
                    }
                }), Object.defineProperty(t, "INTAKE_SITE_STAGING", {
                    enumerable: !0,
                    get: function() {
                        return i.INTAKE_SITE_STAGING
                    }
                }), Object.defineProperty(t, "INTAKE_SITE_US1", {
                    enumerable: !0,
                    get: function() {
                        return i.INTAKE_SITE_US1
                    }
                }), Object.defineProperty(t, "INTAKE_SITE_US1_FED", {
                    enumerable: !0,
                    get: function() {
                        return i.INTAKE_SITE_US1_FED
                    }
                }), Object.defineProperty(t, "INTAKE_SITE_EU1", {
                    enumerable: !0,
                    get: function() {
                        return i.INTAKE_SITE_EU1
                    }
                });
                var a = n(6032);
                Object.defineProperty(t, "TrackingConsent", {
                    enumerable: !0,
                    get: function() {
                        return a.TrackingConsent
                    }
                }), Object.defineProperty(t, "createTrackingConsentState", {
                    enumerable: !0,
                    get: function() {
                        return a.createTrackingConsentState
                    }
                });
                var s = n(7135);
                Object.defineProperty(t, "isExperimentalFeatureEnabled", {
                    enumerable: !0,
                    get: function() {
                        return s.isExperimentalFeatureEnabled
                    }
                }), Object.defineProperty(t, "addExperimentalFeatures", {
                    enumerable: !0,
                    get: function() {
                        return s.addExperimentalFeatures
                    }
                }), Object.defineProperty(t, "resetExperimentalFeatures", {
                    enumerable: !0,
                    get: function() {
                        return s.resetExperimentalFeatures
                    }
                }), Object.defineProperty(t, "getExperimentalFeatures", {
                    enumerable: !0,
                    get: function() {
                        return s.getExperimentalFeatures
                    }
                }), Object.defineProperty(t, "ExperimentalFeature", {
                    enumerable: !0,
                    get: function() {
                        return s.ExperimentalFeature
                    }
                });
                var u = n(4992);
                Object.defineProperty(t, "trackRuntimeError", {
                    enumerable: !0,
                    get: function() {
                        return u.trackRuntimeError
                    }
                });
                var c = n(373);
                Object.defineProperty(t, "computeStackTrace", {
                    enumerable: !0,
                    get: function() {
                        return c.computeStackTrace
                    }
                });
                var l = n(1989);
                Object.defineProperty(t, "defineGlobal", {
                    enumerable: !0,
                    get: function() {
                        return l.defineGlobal
                    }
                }), Object.defineProperty(t, "makePublicApi", {
                    enumerable: !0,
                    get: function() {
                        return l.makePublicApi
                    }
                });
                var d = n(6333);
                Object.defineProperty(t, "displayAlreadyInitializedError", {
                    enumerable: !0,
                    get: function() {
                        return d.displayAlreadyInitializedError
                    }
                });
                var f = n(5569);
                Object.defineProperty(t, "initReportObservable", {
                    enumerable: !0,
                    get: function() {
                        return f.initReportObservable
                    }
                }), Object.defineProperty(t, "RawReportType", {
                    enumerable: !0,
                    get: function() {
                        return f.RawReportType
                    }
                });
                var p = n(5208);
                Object.defineProperty(t, "startTelemetry", {
                    enumerable: !0,
                    get: function() {
                        return p.startTelemetry
                    }
                }), Object.defineProperty(t, "addTelemetryDebug", {
                    enumerable: !0,
                    get: function() {
                        return p.addTelemetryDebug
                    }
                }), Object.defineProperty(t, "addTelemetryError", {
                    enumerable: !0,
                    get: function() {
                        return p.addTelemetryError
                    }
                }), Object.defineProperty(t, "startFakeTelemetry", {
                    enumerable: !0,
                    get: function() {
                        return p.startFakeTelemetry
                    }
                }), Object.defineProperty(t, "resetTelemetry", {
                    enumerable: !0,
                    get: function() {
                        return p.resetTelemetry
                    }
                }), Object.defineProperty(t, "isTelemetryReplicationAllowed", {
                    enumerable: !0,
                    get: function() {
                        return p.isTelemetryReplicationAllowed
                    }
                }), Object.defineProperty(t, "addTelemetryConfiguration", {
                    enumerable: !0,
                    get: function() {
                        return p.addTelemetryConfiguration
                    }
                });
                var g = n(1971);
                Object.defineProperty(t, "monitored", {
                    enumerable: !0,
                    get: function() {
                        return g.monitored
                    }
                }), Object.defineProperty(t, "monitor", {
                    enumerable: !0,
                    get: function() {
                        return g.monitor
                    }
                }), Object.defineProperty(t, "callMonitored", {
                    enumerable: !0,
                    get: function() {
                        return g.callMonitored
                    }
                }), Object.defineProperty(t, "setDebugMode", {
                    enumerable: !0,
                    get: function() {
                        return g.setDebugMode
                    }
                });
                var m = n(5878);
                Object.defineProperty(t, "Observable", {
                    enumerable: !0,
                    get: function() {
                        return m.Observable
                    }
                });
                var v = n(8739);
                Object.defineProperty(t, "startSessionManager", {
                    enumerable: !0,
                    get: function() {
                        return v.startSessionManager
                    }
                }), Object.defineProperty(t, "stopSessionManager", {
                    enumerable: !0,
                    get: function() {
                        return v.stopSessionManager
                    }
                });
                var y = n(4249);
                Object.defineProperty(t, "SESSION_TIME_OUT_DELAY", {
                    enumerable: !0,
                    get: function() {
                        return y.SESSION_TIME_OUT_DELAY
                    }
                });
                var b = n(18);
                Object.defineProperty(t, "createHttpRequest", {
                    enumerable: !0,
                    get: function() {
                        return b.createHttpRequest
                    }
                }), Object.defineProperty(t, "canUseEventBridge", {
                    enumerable: !0,
                    get: function() {
                        return b.canUseEventBridge
                    }
                }), Object.defineProperty(t, "getEventBridge", {
                    enumerable: !0,
                    get: function() {
                        return b.getEventBridge
                    }
                }), Object.defineProperty(t, "bridgeSupports", {
                    enumerable: !0,
                    get: function() {
                        return b.bridgeSupports
                    }
                }), Object.defineProperty(t, "startBatchWithReplica", {
                    enumerable: !0,
                    get: function() {
                        return b.startBatchWithReplica
                    }
                }), Object.defineProperty(t, "createFlushController", {
                    enumerable: !0,
                    get: function() {
                        return b.createFlushController
                    }
                }), o(n(9007), t);
                var _ = n(5206);
                Object.defineProperty(t, "createIdentityEncoder", {
                    enumerable: !0,
                    get: function() {
                        return _.createIdentityEncoder
                    }
                }), o(n(3971), t), o(n(9435), t), o(n(5943), t), o(n(6703), t), o(n(3909), t);
                var E = n(707);
                Object.defineProperty(t, "AbstractLifeCycle", {
                    enumerable: !0,
                    get: function() {
                        return E.AbstractLifeCycle
                    }
                }), o(n(2467), t), o(n(6767), t);
                var S = n(6016);
                Object.defineProperty(t, "sendToExtension", {
                    enumerable: !0,
                    get: function() {
                        return S.sendToExtension
                    }
                });
                var h = n(6369);
                Object.defineProperty(t, "runOnReadyState", {
                    enumerable: !0,
                    get: function() {
                        return h.runOnReadyState
                    }
                });
                var O = n(1482);
                Object.defineProperty(t, "getZoneJsOriginalValue", {
                    enumerable: !0,
                    get: function() {
                        return O.getZoneJsOriginalValue
                    }
                });
                var T = n(5925);
                Object.defineProperty(t, "instrumentMethod", {
                    enumerable: !0,
                    get: function() {
                        return T.instrumentMethod
                    }
                }), Object.defineProperty(t, "instrumentSetter", {
                    enumerable: !0,
                    get: function() {
                        return T.instrumentSetter
                    }
                });
                var w = n(401);
                Object.defineProperty(t, "computeRawError", {
                    enumerable: !0,
                    get: function() {
                        return w.computeRawError
                    }
                }), Object.defineProperty(t, "createHandlingStack", {
                    enumerable: !0,
                    get: function() {
                        return w.createHandlingStack
                    }
                }), Object.defineProperty(t, "toStackTraceString", {
                    enumerable: !0,
                    get: function() {
                        return w.toStackTraceString
                    }
                }), Object.defineProperty(t, "getFileFromStackTraceString", {
                    enumerable: !0,
                    get: function() {
                        return w.getFileFromStackTraceString
                    }
                }), Object.defineProperty(t, "NO_ERROR_STACK_PRESENT_MESSAGE", {
                    enumerable: !0,
                    get: function() {
                        return w.NO_ERROR_STACK_PRESENT_MESSAGE
                    }
                });
                var C = n(6996);
                Object.defineProperty(t, "areCookiesAuthorized", {
                    enumerable: !0,
                    get: function() {
                        return C.areCookiesAuthorized
                    }
                }), Object.defineProperty(t, "getCookie", {
                    enumerable: !0,
                    get: function() {
                        return C.getCookie
                    }
                }), Object.defineProperty(t, "setCookie", {
                    enumerable: !0,
                    get: function() {
                        return C.setCookie
                    }
                }), Object.defineProperty(t, "deleteCookie", {
                    enumerable: !0,
                    get: function() {
                        return C.deleteCookie
                    }
                });
                var I = n(3302);
                Object.defineProperty(t, "initXhrObservable", {
                    enumerable: !0,
                    get: function() {
                        return I.initXhrObservable
                    }
                });
                var A = n(2522);
                Object.defineProperty(t, "initFetchObservable", {
                    enumerable: !0,
                    get: function() {
                        return A.initFetchObservable
                    }
                });
                var M = n(4592);
                Object.defineProperty(t, "createPageExitObservable", {
                    enumerable: !0,
                    get: function() {
                        return M.createPageExitObservable
                    }
                }), Object.defineProperty(t, "PageExitReason", {
                    enumerable: !0,
                    get: function() {
                        return M.PageExitReason
                    }
                }), Object.defineProperty(t, "isPageExitReason", {
                    enumerable: !0,
                    get: function() {
                        return M.isPageExitReason
                    }
                }), o(n(74), t), o(n(6206), t);
                var k = n(2334);
                Object.defineProperty(t, "initConsoleObservable", {
                    enumerable: !0,
                    get: function() {
                        return k.initConsoleObservable
                    }
                }), Object.defineProperty(t, "resetConsoleObservable", {
                    enumerable: !0,
                    get: function() {
                        return k.resetConsoleObservable
                    }
                });
                var R = n(8689);
                Object.defineProperty(t, "BoundedBuffer", {
                    enumerable: !0,
                    get: function() {
                        return R.BoundedBuffer
                    }
                });
                var P = n(1273);
                Object.defineProperty(t, "catchUserErrors", {
                    enumerable: !0,
                    get: function() {
                        return P.catchUserErrors
                    }
                });
                var L = n(2134);
                Object.defineProperty(t, "createContextManager", {
                    enumerable: !0,
                    get: function() {
                        return L.createContextManager
                    }
                });
                var N = n(6914);
                Object.defineProperty(t, "storeContextManager", {
                    enumerable: !0,
                    get: function() {
                        return N.storeContextManager
                    }
                }), Object.defineProperty(t, "removeStorageListeners", {
                    enumerable: !0,
                    get: function() {
                        return N.removeStorageListeners
                    }
                });
                var j = n(6263);
                Object.defineProperty(t, "createCustomerDataTrackerManager", {
                    enumerable: !0,
                    get: function() {
                        return j.createCustomerDataTrackerManager
                    }
                }), Object.defineProperty(t, "createCustomerDataTracker", {
                    enumerable: !0,
                    get: function() {
                        return j.createCustomerDataTracker
                    }
                }), Object.defineProperty(t, "CUSTOMER_DATA_BYTES_LIMIT", {
                    enumerable: !0,
                    get: function() {
                        return j.CUSTOMER_DATA_BYTES_LIMIT
                    }
                });
                var x = n(7759);
                Object.defineProperty(t, "ValueHistory", {
                    enumerable: !0,
                    get: function() {
                        return x.ValueHistory
                    }
                }), Object.defineProperty(t, "CLEAR_OLD_VALUES_INTERVAL", {
                    enumerable: !0,
                    get: function() {
                        return x.CLEAR_OLD_VALUES_INTERVAL
                    }
                });
                var D = n(934);
                Object.defineProperty(t, "readBytesFromStream", {
                    enumerable: !0,
                    get: function() {
                        return D.readBytesFromStream
                    }
                });
                var U = n(3769);
                Object.defineProperty(t, "STORAGE_POLL_DELAY", {
                    enumerable: !0,
                    get: function() {
                        return U.STORAGE_POLL_DELAY
                    }
                });
                var B = n(3793);
                Object.defineProperty(t, "SESSION_STORE_KEY", {
                    enumerable: !0,
                    get: function() {
                        return B.SESSION_STORE_KEY
                    }
                });
                var F = n(6868);
                Object.defineProperty(t, "willSyntheticsInjectRum", {
                    enumerable: !0,
                    get: function() {
                        return F.willSyntheticsInjectRum
                    }
                }), Object.defineProperty(t, "getSyntheticsTestId", {
                    enumerable: !0,
                    get: function() {
                        return F.getSyntheticsTestId
                    }
                }), Object.defineProperty(t, "getSyntheticsResultId", {
                    enumerable: !0,
                    get: function() {
                        return F.getSyntheticsResultId
                    }
                });
                var G = n(8281);
                Object.defineProperty(t, "checkUser", {
                    enumerable: !0,
                    get: function() {
                        return G.checkUser
                    }
                }), Object.defineProperty(t, "sanitizeUser", {
                    enumerable: !0,
                    get: function() {
                        return G.sanitizeUser
                    }
                }), o(n(8897), t), o(n(5222), t), o(n(7667), t), o(n(7746), t), o(n(6426), t), o(n(8884), t), o(n(1786), t), o(n(1708), t), o(n(9139), t), o(n(4019), t), o(n(3077), t), o(n(1653), t);
                var K = n(7235);
                Object.defineProperty(t, "ErrorSource", {
                    enumerable: !0,
                    get: function() {
                        return K.ErrorSource
                    }
                }), o(n(1375), t), o(n(2381), t)
            },
            707: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.AbstractLifeCycle = void 0;
                var n = function() {
                    function e() {
                        this.callbacks = {}
                    }
                    return e.prototype.notify = function(e, t) {
                        var n = this.callbacks[e];
                        n && n.forEach(function(e) {
                            return e(t)
                        })
                    }, e.prototype.subscribe = function(e, t) {
                        var n = this;
                        return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), {
                            unsubscribe: function() {
                                n.callbacks[e] = n.callbacks[e].filter(function(e) {
                                    return t !== e
                                })
                            }
                        }
                    }, e
                }();
                t.AbstractLifeCycle = n
            },
            8689: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BoundedBuffer = void 0;
                var r = n(5943),
                    o = function() {
                        function e() {
                            this.buffer = []
                        }
                        return e.prototype.add = function(e) {
                            this.buffer.push(e) > 500 && this.buffer.splice(0, 1)
                        }, e.prototype.remove = function(e) {
                            (0, r.removeItem)(this.buffer, e)
                        }, e.prototype.drain = function(e) {
                            this.buffer.forEach(function(t) {
                                return t(e)
                            }), this.buffer.length = 0
                        }, e
                    }();
                t.BoundedBuffer = o
            },
            1273: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.catchUserErrors = void 0;
                var r = n(9007);
                t.catchUserErrors = function(e, t) {
                    return function() {
                        for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                        try {
                            return e.apply(void 0, n)
                        } catch (e) {
                            r.display.error(t, e)
                        }
                    }
                }
            },
            9007: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.display = t.originalConsoleMethods = t.globalConsole = t.ConsoleApiName = void 0, t.ConsoleApiName = {
                    log: "log",
                    debug: "debug",
                    info: "info",
                    warn: "warn",
                    error: "error"
                }, t.globalConsole = console, t.originalConsoleMethods = {}, Object.keys(t.ConsoleApiName).forEach(function(e) {
                    t.originalConsoleMethods[e] = t.globalConsole[e]
                });
                var n = "Datadog Browser SDK:";
                t.display = {
                    debug: t.originalConsoleMethods.debug.bind(t.globalConsole, n),
                    log: t.originalConsoleMethods.log.bind(t.globalConsole, n),
                    info: t.originalConsoleMethods.info.bind(t.globalConsole, n),
                    warn: t.originalConsoleMethods.warn.bind(t.globalConsole, n),
                    error: t.originalConsoleMethods.error.bind(t.globalConsole, n)
                }
            },
            5206: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createIdentityEncoder = void 0;
                var r = n(7746);
                t.createIdentityEncoder = function() {
                    var e = "",
                        t = 0;
                    return {
                        isAsync: !1,
                        get isEmpty() {
                            return !e
                        },
                        write: function(n, o) {
                            var i = (0, r.computeBytesCount)(n);
                            t += i, e += n, o && o(i)
                        },
                        finish: function(e) {
                            e(this.finishSync())
                        },
                        finishSync: function() {
                            var n = {
                                output: e,
                                outputBytesCount: t,
                                rawBytesCount: t,
                                pendingData: ""
                            };
                            return e = "", t = 0, n
                        },
                        estimateEncodedBytesCount: function(e) {
                            return e.length
                        }
                    }
                }
            },
            7135: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getExperimentalFeatures = t.resetExperimentalFeatures = t.isExperimentalFeatureEnabled = t.addExperimentalFeatures = t.ExperimentalFeature = void 0, (n = r || (t.ExperimentalFeature = r = {})).PAGEHIDE = "pagehide", n.FEATURE_FLAGS = "feature_flags", n.RESOURCE_PAGE_STATES = "resource_page_states", n.COLLECT_FLUSH_REASON = "collect_flush_reason", n.ZERO_LCP_TELEMETRY = "zero_lcp_telemetry", n.DISABLE_REPLAY_INLINE_CSS = "disable_replay_inline_css", n.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql", n.CUSTOM_VITALS = "custom_vitals";
                var n, r, o = new Set;
                t.addExperimentalFeatures = function(e) {
                    e.forEach(function(e) {
                        o.add(e)
                    })
                }, t.isExperimentalFeatureEnabled = function(e) {
                    return o.has(e)
                }, t.resetExperimentalFeatures = function() {
                    o.clear()
                }, t.getExperimentalFeatures = function() {
                    return o
                }
            },
            3909: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getGlobalObject = void 0, t.getGlobalObject = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    Object.defineProperty(Object.prototype, "_dd_temp_", {
                        get: function() {
                            return this
                        },
                        configurable: !0
                    });
                    var e = _dd_temp_;
                    return delete Object.prototype._dd_temp_, "object" != typeof e && ("object" == typeof self ? e = self : e = "object" == typeof window ? window : {}), e
                }
            },
            1482: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getZoneJsOriginalValue = void 0;
                var r = n(3909);
                t.getZoneJsOriginalValue = function(e, t) {
                    var n, o = (0, r.getGlobalObject)();
                    return o.Zone && "function" == typeof o.Zone.__symbol__ && (n = e[o.Zone.__symbol__(t)]), n || (n = e[t]), n
                }
            },
            5925: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.instrumentSetter = t.instrumentMethod = void 0;
                var r = n(6206),
                    o = n(1971),
                    i = n(8884),
                    a = n(5222);
                t.instrumentMethod = function(e, t, n) {
                    var r, s = e[t];
                    if ("function" != typeof s) {
                        if (!(0, a.startsWith)(t, "on")) return {
                            stop: i.noop
                        };
                        s = i.noop
                    }
                    var u = (r = s, function() {
                            var e, t = (0, a.arrayFrom)(arguments);
                            (0, o.callMonitored)(n, null, [{
                                target: this,
                                parameters: t,
                                onPostCall: function(t) {
                                    e = t
                                }
                            }]);
                            var i = r.apply(this, t);
                            return e && (0, o.callMonitored)(e, null, [i]), i
                        }),
                        c = function() {
                            if ("function" == typeof u) return u.apply(this, arguments)
                        };
                    return e[t] = c, {
                        stop: function() {
                            e[t] === c ? e[t] = s : u = s
                        }
                    }
                }, t.instrumentSetter = function(e, t, n) {
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (!o || !o.set || !o.configurable) return {
                        stop: i.noop
                    };
                    var a = i.noop,
                        s = function(e, t) {
                            (0, r.setTimeout)(function() {
                                s !== a && n(e, t)
                            }, 0)
                        },
                        u = function(e) {
                            o.set.call(this, e), s(this, e)
                        };
                    return Object.defineProperty(e, t, {
                        set: u
                    }), {
                        stop: function() {
                            var n;
                            (null === (n = Object.getOwnPropertyDescriptor(e, t)) || void 0 === n ? void 0 : n.set) === u && Object.defineProperty(e, t, o), s = a
                        }
                    }
                }
            },
            4019: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.matchList = t.isMatchOption = void 0;
                var r = n(5222),
                    o = n(9007),
                    i = n(1653);
                t.isMatchOption = function(e) {
                    var t = (0, i.getType)(e);
                    return "string" === t || "function" === t || e instanceof RegExp
                }, t.matchList = function(e, t, n) {
                    return void 0 === n && (n = !1), e.some(function(e) {
                        try {
                            if ("function" == typeof e) return e(t);
                            if (e instanceof RegExp) return e.test(t);
                            if ("string" == typeof e) return n ? (0, r.startsWith)(t, e) : e === t
                        } catch (e) {
                            o.display.error(e)
                        }
                        return !1
                    })
                }
            },
            1708: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.combine = t.deepClone = t.mergeInto = void 0;
                var r = n(1653);

                function o(e, t, n) {
                    if (void 0 === n && (n = function() {
                            if ("undefined" != typeof WeakSet) {
                                var e = new WeakSet;
                                return {
                                    hasAlreadyBeenSeen: function(t) {
                                        var n = e.has(t);
                                        return n || e.add(t), n
                                    }
                                }
                            }
                            var t = [];
                            return {
                                hasAlreadyBeenSeen: function(e) {
                                    var n = t.indexOf(e) >= 0;
                                    return n || t.push(e), n
                                }
                            }
                        }()), void 0 === t) return e;
                    if ("object" != typeof t || null === t) return t;
                    if (t instanceof Date) return new Date(t.getTime());
                    if (t instanceof RegExp) {
                        var i = t.flags || [t.global ? "g" : "", t.ignoreCase ? "i" : "", t.multiline ? "m" : "", t.sticky ? "y" : "", t.unicode ? "u" : ""].join("");
                        return new RegExp(t.source, i)
                    }
                    if (!n.hasAlreadyBeenSeen(t)) {
                        if (Array.isArray(t)) {
                            for (var a = Array.isArray(e) ? e : [], s = 0; s < t.length; ++s) a[s] = o(a[s], t[s], n);
                            return a
                        }
                        var u = "object" === (0, r.getType)(e) ? e : {};
                        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (u[c] = o(u[c], t[c], n));
                        return u
                    }
                }
                t.mergeInto = o, t.deepClone = function(e) {
                    return o(void 0, e)
                }, t.combine = function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        null != i && (e = o(e, i))
                    }
                    return e
                }
            },
            1971: function(e, t, n) {
                "use strict";
                var r, o = this && this.__spreadArray || function(e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.displayIfDebugEnabled = t.callMonitored = t.monitor = t.monitored = t.resetMonitor = t.setDebugMode = t.startMonitorErrorCollection = void 0;
                var i = n(9007),
                    a = !1;

                function s(e) {
                    return function() {
                        return u(e, this, arguments)
                    }
                }

                function u(e, t, n) {
                    try {
                        return e.apply(t, n)
                    } catch (e) {
                        if (c(e), r) try {
                            r(e)
                        } catch (e) {
                            c(e)
                        }
                    }
                }

                function c() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    a && i.display.error.apply(i.display, o(["[MONITOR]"], e, !1))
                }
                t.startMonitorErrorCollection = function(e) {
                    r = e
                }, t.setDebugMode = function(e) {
                    a = e
                }, t.resetMonitor = function() {
                    r = void 0, a = !1
                }, t.monitored = function(e, t, n) {
                    var o = n.value;
                    n.value = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return (r ? s(o) : o).apply(this, e)
                    }
                }, t.monitor = s, t.callMonitored = u, t.displayIfDebugEnabled = c
            },
            5878: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mergeObservables = t.Observable = void 0;
                var n = function() {
                    function e(e) {
                        this.onFirstSubscribe = e, this.observers = []
                    }
                    return e.prototype.subscribe = function(e) {
                        var t = this;
                        return !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0), this.observers.push(e), {
                            unsubscribe: function() {
                                t.observers = t.observers.filter(function(t) {
                                    return e !== t
                                }), !t.observers.length && t.onLastUnsubscribe && t.onLastUnsubscribe()
                            }
                        }
                    }, e.prototype.notify = function(e) {
                        this.observers.forEach(function(t) {
                            return t(e)
                        })
                    }, e
                }();
                t.Observable = n, t.mergeObservables = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return new n(function(t) {
                        var n = e.map(function(e) {
                            return e.subscribe(function(e) {
                                return t.notify(e)
                            })
                        });
                        return function() {
                            return n.forEach(function(e) {
                                return e.unsubscribe()
                            })
                        }
                    })
                }
            },
            934: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.readBytesFromStream = void 0;
                var r = n(1971),
                    o = n(8884);
                t.readBytesFromStream = function(e, t, n) {
                    var i = e.getReader(),
                        a = [],
                        s = 0;

                    function u() {
                        if (i.cancel().catch(o.noop), n.collectStreamBody) {
                            if (1 === a.length) u = a[0];
                            else {
                                u = new Uint8Array(s);
                                var e, r, u, c = 0;
                                a.forEach(function(e) {
                                    u.set(e, c), c += e.length
                                })
                            }
                            e = u.slice(0, n.bytesLimit), r = u.length > n.bytesLimit
                        }
                        t(void 0, e, r)
                    }! function e() {
                        i.read().then((0, r.monitor)(function(t) {
                            if (t.done) {
                                u();
                                return
                            }
                            n.collectStreamBody && a.push(t.value), (s += t.value.length) > n.bytesLimit ? u() : e()
                        }), (0, r.monitor)(function(e) {
                            return t(e)
                        }))
                    }()
                }
            },
            6016: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sendToExtension = void 0, t.sendToExtension = function(e, t) {
                    var n = window.__ddBrowserSdkExtensionCallback;
                    n && n({
                        type: e,
                        payload: t
                    })
                }
            },
            1786: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.detachToJsonMethod = t.jsonStringify = void 0;
                var r = n(8884);

                function o(e) {
                    var t = e.toJSON;
                    return t ? (delete e.toJSON, function() {
                        e.toJSON = t
                    }) : r.noop
                }
                t.jsonStringify = function(e, t, n) {
                    if ("object" != typeof e || null === e) return JSON.stringify(e);
                    var r = o(Object.prototype),
                        i = o(Array.prototype),
                        a = o(Object.getPrototypeOf(e)),
                        s = o(e);
                    try {
                        return JSON.stringify(e, t, n)
                    } catch (e) {
                        return "<error: unable to serialize object>"
                    } finally {
                        r(), i(), a(), s()
                    }
                }, t.detachToJsonMethod = o
            },
            6703: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sanitize = void 0;
                var r = n(9007),
                    o = n(7746),
                    i = n(1786),
                    a = 220 * o.ONE_KIBI_BYTE;

                function s(e, t, n, r, o) {
                    var i = function(e) {
                        if (e && "function" == typeof e.toJSON) try {
                            return e.toJSON()
                        } catch (e) {}
                        return e
                    }(e);
                    if (!i || "object" != typeof i) return "bigint" == typeof i ? "[BigInt] ".concat(i.toString()) : "function" == typeof i ? "[Function] ".concat(i.name || "unknown") : "symbol" == typeof i ? "[Symbol] ".concat(i.description || i.toString()) : i;
                    var a = function(e) {
                        try {
                            if (e instanceof Event) return {
                                isTrusted: e.isTrusted
                            };
                            var t = Object.prototype.toString.call(e).match(/\[object (.*)\]/);
                            if (t && t[1]) return "[".concat(t[1], "]")
                        } catch (e) {}
                        return "[Unserializable]"
                    }(i);
                    if ("[Object]" !== a && "[Array]" !== a && "[Error]" !== a) return a;
                    if (o.has(e)) return "[Reference seen at ".concat(o.get(e), "]");
                    var s = void 0 !== n ? "".concat(t, ".").concat(n) : t,
                        u = Array.isArray(i) ? [] : {};
                    return o.set(e, s), r.push({
                        source: i,
                        target: u,
                        path: s
                    }), u
                }

                function u(e, t, n) {
                    r.display.warn("The data provided has been ".concat(t, " as it is over the limit of ").concat(e, " characters:"), n)
                }
                t.sanitize = function(e, t) {
                    void 0 === t && (t = a);
                    var n, r = (0, i.detachToJsonMethod)(Object.prototype),
                        o = (0, i.detachToJsonMethod)(Array.prototype),
                        c = [],
                        l = new WeakMap,
                        d = s(e, "$", void 0, c, l),
                        f = (null === (n = JSON.stringify(d)) || void 0 === n ? void 0 : n.length) || 0;
                    if (f > t) {
                        u(t, "discarded", e);
                        return
                    }
                    for (; c.length > 0 && f < t;) {
                        var p = c.shift(),
                            g = 0;
                        if (Array.isArray(p.source))
                            for (var m = 0; m < p.source.length; m++) {
                                var v = s(p.source[m], p.path, m, c, l);
                                if (void 0 !== v ? f += JSON.stringify(v).length : f += 4, f += g, g = 1, f > t) {
                                    u(t, "truncated", e);
                                    break
                                }
                                p.target[m] = v
                            } else
                                for (var m in p.source)
                                    if (Object.prototype.hasOwnProperty.call(p.source, m)) {
                                        var v = s(p.source[m], p.path, m, c, l);
                                        if (void 0 !== v && (f += JSON.stringify(v).length + g + m.length + 3, g = 1), f > t) {
                                            u(t, "truncated", e);
                                            break
                                        }
                                        p.target[m] = v
                                    }
                    }
                    return r(), o(), d
                }
            },
            6206: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.clearInterval = t.setInterval = t.clearTimeout = t.setTimeout = void 0;
                var r = n(1482),
                    o = n(1971),
                    i = n(3909);
                t.setTimeout = function(e, t) {
                    return (0, r.getZoneJsOriginalValue)((0, i.getGlobalObject)(), "setTimeout")((0, o.monitor)(e), t)
                }, t.clearTimeout = function(e) {
                    (0, r.getZoneJsOriginalValue)((0, i.getGlobalObject)(), "clearTimeout")(e)
                }, t.setInterval = function(e, t) {
                    return (0, r.getZoneJsOriginalValue)((0, i.getGlobalObject)(), "setInterval")((0, o.monitor)(e), t)
                }, t.clearInterval = function(e) {
                    (0, r.getZoneJsOriginalValue)((0, i.getGlobalObject)(), "clearInterval")(e)
                }
            },
            5943: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeItem = t.removeDuplicates = void 0;
                var r = n(5222);
                t.removeDuplicates = function(e) {
                    var t = new Set;
                    return e.forEach(function(e) {
                        return t.add(e)
                    }), (0, r.arrayFrom)(t)
                }, t.removeItem = function(e, t) {
                    var n = e.indexOf(t);
                    n >= 0 && e.splice(n, 1)
                }
            },
            6767: function(e, t) {
                "use strict";
                var n;

                function r() {
                    return null != n ? n : n = o()
                }

                function o(e) {
                    void 0 === e && (e = window);
                    var t, n = e.navigator.userAgent;
                    return e.chrome || /HeadlessChrome/.test(n) ? 1 : (null === (t = e.navigator.vendor) || void 0 === t ? void 0 : t.indexOf("Apple")) === 0 || /safari/i.test(n) && !/chrome|android/i.test(n) ? 2 : e.document.documentMode ? 0 : 3
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.detectBrowser = t.isSafari = t.isChromium = t.isIE = void 0, t.isIE = function() {
                    return 0 === r()
                }, t.isChromium = function() {
                    return 1 === r()
                }, t.isSafari = function() {
                    return 2 === r()
                }, t.detectBrowser = o
            },
            7746: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.concatBuffers = t.computeBytesCount = t.ONE_MEBI_BYTE = t.ONE_KIBI_BYTE = void 0, t.ONE_KIBI_BYTE = 1024, t.ONE_MEBI_BYTE = 1024 * t.ONE_KIBI_BYTE;
                var n = /[^\u0000-\u007F]/;
                t.computeBytesCount = function(e) {
                    return n.test(e) ? void 0 !== window.TextEncoder ? new TextEncoder().encode(e).length : new Blob([e]).size : e.length
                }, t.concatBuffers = function(e) {
                    for (var t = new Uint8Array(e.reduce(function(e, t) {
                            return e + t.length
                        }, 0)), n = 0, r = 0; r < e.length; r++) {
                        var o = e[r];
                        t.set(o, n), n += o.length
                    }
                    return t
                }
            },
            8884: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.noop = t.throttle = void 0;
                var r = n(6206);
                t.throttle = function(e, t, n) {
                    var o, i, a = !n || void 0 === n.leading || n.leading,
                        s = !n || void 0 === n.trailing || n.trailing,
                        u = !1;
                    return {
                        throttled: function() {
                            for (var n = [], c = 0; c < arguments.length; c++) n[c] = arguments[c];
                            if (u) {
                                o = n;
                                return
                            }
                            a ? e.apply(void 0, n) : o = n, u = !0, i = (0, r.setTimeout)(function() {
                                s && o && e.apply(void 0, o), u = !1, o = void 0
                            }, t)
                        },
                        cancel: function() {
                            (0, r.clearTimeout)(i), u = !1, o = void 0
                        }
                    }
                }, t.noop = function() {}
            },
            7667: function(e, t) {
                "use strict";

                function n(e) {
                    return "number" == typeof e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isNumber = t.isPercentage = t.round = t.performDraw = void 0, t.performDraw = function(e) {
                    return 0 !== e && 100 * Math.random() <= e
                }, t.round = function(e, t) {
                    return +e.toFixed(t)
                }, t.isPercentage = function(e) {
                    return n(e) && e >= 0 && e <= 100
                }, t.isNumber = n
            },
            6426: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mapValues = t.isEmptyObject = t.objectHasValue = t.shallowClone = void 0;
                var r = n(5222);
                t.shallowClone = function(e) {
                    return (0, r.assign)({}, e)
                }, t.objectHasValue = function(e, t) {
                    return Object.keys(e).some(function(n) {
                        return e[n] === t
                    })
                }, t.isEmptyObject = function(e) {
                    return 0 === Object.keys(e).length
                }, t.mapValues = function(e, t) {
                    for (var n = {}, r = 0, o = Object.keys(e); r < o.length; r++) {
                        var i = o[r];
                        n[i] = t(e[i])
                    }
                    return n
                }
            },
            5222: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.assign = t.cssEscape = t.elementMatches = t.endsWith = t.startsWith = t.objectEntries = t.objectValues = t.forEach = t.findLast = t.find = t.arrayFrom = t.includes = void 0, t.includes = function(e, t) {
                    return -1 !== e.indexOf(t)
                }, t.arrayFrom = function(e) {
                    if (Array.from) return Array.from(e);
                    var t = [];
                    if (e instanceof Set) e.forEach(function(e) {
                        return t.push(e)
                    });
                    else
                        for (var n = 0; n < e.length; n++) t.push(e[n]);
                    return t
                }, t.find = function(e, t) {
                    for (var n = 0; n < e.length; n += 1) {
                        var r = e[n];
                        if (t(r, n)) return r
                    }
                }, t.findLast = function(e, t) {
                    for (var n = e.length - 1; n >= 0; n -= 1) {
                        var r = e[n];
                        if (t(r, n, e)) return r
                    }
                }, t.forEach = function(e, t) {
                    Array.prototype.forEach.call(e, t)
                }, t.objectValues = function(e) {
                    return Object.keys(e).map(function(t) {
                        return e[t]
                    })
                }, t.objectEntries = function(e) {
                    return Object.keys(e).map(function(t) {
                        return [t, e[t]]
                    })
                }, t.startsWith = function(e, t) {
                    return e.slice(0, t.length) === t
                }, t.endsWith = function(e, t) {
                    return e.slice(-t.length) === t
                }, t.elementMatches = function(e, t) {
                    return e.matches ? e.matches(t) : !!e.msMatchesSelector && e.msMatchesSelector(t)
                }, t.cssEscape = function(e) {
                    return window.CSS && window.CSS.escape ? window.CSS.escape(e) : e.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(e, t) {
                        return t ? "\0" === e ? "�" : "".concat(e.slice(0, -1), "\\").concat(e.charCodeAt(e.length - 1).toString(16), " ") : "\\".concat(e)
                    })
                }, t.assign = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    return t.forEach(function(t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }), e
                }
            },
            3077: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.tryToClone = t.isServerError = void 0, t.isServerError = function(e) {
                    return e >= 500
                }, t.tryToClone = function(e) {
                    try {
                        return e.clone()
                    } catch (e) {
                        return
                    }
                }
            },
            9139: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.safeTruncate = t.findCommaSeparatedValues = t.findCommaSeparatedValue = t.generateUUID = void 0, t.generateUUID = function e(t) {
                    return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, e)
                };
                var n = /([\w-]+)\s*=\s*([^;]+)/g;
                t.findCommaSeparatedValue = function(e, t) {
                    for (n.lastIndex = 0;;) {
                        var r = n.exec(e);
                        if (r) {
                            if (r[1] === t) return r[2]
                        } else break
                    }
                }, t.findCommaSeparatedValues = function(e) {
                    var t = new Map;
                    for (n.lastIndex = 0;;) {
                        var r = n.exec(e);
                        if (r) t.set(r[1], r[2]);
                        else break
                    }
                    return t
                }, t.safeTruncate = function(e, t, n) {
                    void 0 === n && (n = "");
                    var r = e.charCodeAt(t - 1),
                        o = r >= 55296 && r <= 56319 ? t + 1 : t;
                    return e.length <= o ? e : "".concat(e.slice(0, o)).concat(n)
                }
            },
            9435: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.resetNavigationStart = t.looksLikeRelativeTime = t.getTimeStamp = t.getRelativeTime = t.addDuration = t.elapsed = t.clocksOrigin = t.clocksNow = t.relativeNow = t.timeStampNow = t.dateNow = t.toServerDuration = t.currentDrift = t.timeStampToClocks = t.relativeToClocks = t.ONE_YEAR = t.ONE_DAY = t.ONE_HOUR = t.ONE_MINUTE = t.ONE_SECOND = void 0;
                var r, o = n(7667);

                function i() {
                    return new Date().getTime()
                }

                function a() {
                    return i()
                }

                function s() {
                    return performance.now()
                }

                function u(e) {
                    return e - l()
                }

                function c(e) {
                    return Math.round(l() + e)
                }

                function l() {
                    return void 0 === r && (r = performance.timing.navigationStart), r
                }
                t.ONE_SECOND = 1e3, t.ONE_MINUTE = 60 * t.ONE_SECOND, t.ONE_HOUR = 60 * t.ONE_MINUTE, t.ONE_DAY = 24 * t.ONE_HOUR, t.ONE_YEAR = 365 * t.ONE_DAY, t.relativeToClocks = function(e) {
                    var t;
                    return {
                        relative: e,
                        timeStamp: (t = i() - performance.now()) > l() ? Math.round(t + e) : c(e)
                    }
                }, t.timeStampToClocks = function(e) {
                    return {
                        relative: u(e),
                        timeStamp: e
                    }
                }, t.currentDrift = function() {
                    return Math.round(i() - (l() + performance.now()))
                }, t.toServerDuration = function(e) {
                    return (0, o.isNumber)(e) ? (0, o.round)(1e6 * e, 0) : e
                }, t.dateNow = i, t.timeStampNow = a, t.relativeNow = s, t.clocksNow = function() {
                    return {
                        relative: s(),
                        timeStamp: a()
                    }
                }, t.clocksOrigin = function() {
                    return {
                        relative: 0,
                        timeStamp: l()
                    }
                }, t.elapsed = function(e, t) {
                    return t - e
                }, t.addDuration = function(e, t) {
                    return e + t
                }, t.getRelativeTime = u, t.getTimeStamp = c, t.looksLikeRelativeTime = function(e) {
                    return e < t.ONE_YEAR
                }, t.resetNavigationStart = function() {
                    r = void 0
                }
            },
            1653: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getType = void 0, t.getType = function(e) {
                    return null === e ? "null" : Array.isArray(e) ? "array" : typeof e
                }
            },
            3971: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildUrl = t.getPathName = t.isValidUrl = t.normalizeUrl = void 0;
                var r, o = n(1786);

                function i(e, t) {
                    var n = function() {
                        if (void 0 === r) try {
                            var e = new a("http://test/path");
                            r = "http://test/path" === e.href
                        } catch (e) {
                            r = !1
                        }
                        return r ? a : void 0
                    }();
                    if (n) try {
                        return void 0 !== t ? new n(e, t) : new n(e)
                    } catch (n) {
                        throw Error("Failed to construct URL: ".concat(String(n), " ").concat((0, o.jsonStringify)({
                            url: e,
                            base: t
                        })))
                    }
                    if (void 0 === t && !/:/.test(e)) throw Error("Invalid URL: '".concat(e, "'"));
                    var i = document,
                        s = i.createElement("a");
                    if (void 0 !== t) {
                        var u = (i = document.implementation.createHTMLDocument("")).createElement("base");
                        u.href = t, i.head.appendChild(u), i.body.appendChild(s)
                    }
                    return s.href = e, s
                }
                t.normalizeUrl = function(e) {
                    return i(e, location.href).href
                }, t.isValidUrl = function(e) {
                    try {
                        return !!i(e)
                    } catch (e) {
                        return !1
                    }
                }, t.getPathName = function(e) {
                    var t = i(e).pathname;
                    return "/" === t[0] ? t : "/".concat(t)
                }, t.buildUrl = i;
                var a = URL
            },
            7759: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ValueHistory = t.CLEAR_OLD_VALUES_INTERVAL = void 0;
                var r = n(6206),
                    o = n(5943),
                    i = n(9435),
                    a = 1 / 0;
                t.CLEAR_OLD_VALUES_INTERVAL = i.ONE_MINUTE;
                var s = function() {
                    function e(e, n) {
                        var o = this;
                        this.expireDelay = e, this.maxEntries = n, this.entries = [], this.clearOldValuesInterval = (0, r.setInterval)(function() {
                            return o.clearOldValues()
                        }, t.CLEAR_OLD_VALUES_INTERVAL)
                    }
                    return e.prototype.add = function(e, t) {
                        var n = this,
                            r = {
                                value: e,
                                startTime: t,
                                endTime: a,
                                remove: function() {
                                    (0, o.removeItem)(n.entries, r)
                                },
                                close: function(e) {
                                    r.endTime = e
                                }
                            };
                        return this.maxEntries && this.entries.length >= this.maxEntries && this.entries.pop(), this.entries.unshift(r), r
                    }, e.prototype.find = function(e) {
                        void 0 === e && (e = a);
                        for (var t = 0, n = this.entries; t < n.length; t++) {
                            var r = n[t];
                            if (r.startTime <= e) {
                                if (e <= r.endTime) return r.value;
                                break
                            }
                        }
                    }, e.prototype.closeActive = function(e) {
                        var t = this.entries[0];
                        t && t.endTime === a && t.close(e)
                    }, e.prototype.findAll = function(e, t) {
                        void 0 === e && (e = a), void 0 === t && (t = 0);
                        var n = (0, i.addDuration)(e, t);
                        return this.entries.filter(function(t) {
                            return t.startTime <= n && e <= t.endTime
                        }).map(function(e) {
                            return e.value
                        })
                    }, e.prototype.reset = function() {
                        this.entries = []
                    }, e.prototype.stop = function() {
                        (0, r.clearInterval)(this.clearOldValuesInterval)
                    }, e.prototype.clearOldValues = function() {
                        for (var e = (0, i.relativeNow)() - this.expireDelay; this.entries.length > 0 && this.entries[this.entries.length - 1].endTime < e;) this.entries.pop()
                    }, e
                }();
                t.ValueHistory = s
            },
            5357: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Batch = void 0;
                var r = n(9007),
                    o = n(5222),
                    i = n(4592),
                    a = n(1786),
                    s = n(7746),
                    u = function() {
                        function e(e, t, n, r) {
                            var o = this;
                            this.encoder = e, this.request = t, this.flushController = n, this.messageBytesLimit = r, this.upsertBuffer = {}, this.flushSubscription = this.flushController.flushObservable.subscribe(function(e) {
                                return o.flush(e)
                            })
                        }
                        return e.prototype.add = function(e) {
                            this.addOrUpdate(e)
                        }, e.prototype.upsert = function(e, t) {
                            this.addOrUpdate(e, t)
                        }, e.prototype.stop = function() {
                            this.flushSubscription.unsubscribe()
                        }, e.prototype.flush = function(e) {
                            var t = (0, o.objectValues)(this.upsertBuffer).join("\n");
                            this.upsertBuffer = {};
                            var n = (0, i.isPageExitReason)(e.reason),
                                r = n ? this.request.sendOnExit : this.request.send;
                            if (n && this.encoder.isAsync) {
                                var a = this.encoder.finishSync();
                                a.outputBytesCount && r(c(a, e));
                                var u = [a.pendingData, t].filter(Boolean).join("\n");
                                u && r({
                                    data: u,
                                    bytesCount: (0, s.computeBytesCount)(u),
                                    flushReason: e.reason
                                })
                            } else t && this.encoder.write(this.encoder.isEmpty ? t : "\n".concat(t)), this.encoder.finish(function(t) {
                                r(c(t, e))
                            })
                        }, e.prototype.addOrUpdate = function(e, t) {
                            var n = (0, a.jsonStringify)(e),
                                o = this.encoder.estimateEncodedBytesCount(n);
                            if (o >= this.messageBytesLimit) {
                                r.display.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit, "KB."));
                                return
                            }
                            this.hasMessageFor(t) && this.remove(t), this.push(n, o, t)
                        }, e.prototype.push = function(e, t, n) {
                            var r = this;
                            this.flushController.notifyBeforeAddMessage(t), void 0 !== n ? (this.upsertBuffer[n] = e, this.flushController.notifyAfterAddMessage()) : this.encoder.write(this.encoder.isEmpty ? e : "\n".concat(e), function(e) {
                                r.flushController.notifyAfterAddMessage(e - t)
                            })
                        }, e.prototype.remove = function(e) {
                            var t = this.upsertBuffer[e];
                            delete this.upsertBuffer[e];
                            var n = this.encoder.estimateEncodedBytesCount(t);
                            this.flushController.notifyAfterRemoveMessage(n)
                        }, e.prototype.hasMessageFor = function(e) {
                            return void 0 !== e && void 0 !== this.upsertBuffer[e]
                        }, e
                    }();

                function c(e, t) {
                    return {
                        data: "string" == typeof e.output ? e.output : new Blob([e.output], {
                            type: "text/plain"
                        }),
                        bytesCount: e.outputBytesCount,
                        encoding: e.encoding,
                        flushReason: t.reason
                    }
                }
                t.Batch = u
            },
            1249: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.canUseEventBridge = t.bridgeSupports = t.getEventBridge = void 0;
                var r = n(5222),
                    o = n(3909);

                function i() {
                    var e = (0, o.getGlobalObject)().DatadogEventBridge;
                    if (e) return {
                        getCapabilities: function() {
                            var t;
                            return JSON.parse((null === (t = e.getCapabilities) || void 0 === t ? void 0 : t.call(e)) || "[]")
                        },
                        getPrivacyLevel: function() {
                            var t;
                            return null === (t = e.getPrivacyLevel) || void 0 === t ? void 0 : t.call(e)
                        },
                        getAllowedWebViewHosts: function() {
                            return JSON.parse(e.getAllowedWebViewHosts())
                        },
                        send: function(t, n, r) {
                            e.send(JSON.stringify({
                                eventType: t,
                                event: n,
                                view: r ? {
                                    id: r
                                } : void 0
                            }))
                        }
                    }
                }
                t.getEventBridge = i, t.bridgeSupports = function(e) {
                    var t = i();
                    return !!t && (0, r.includes)(t.getCapabilities(), e)
                }, t.canUseEventBridge = function(e) {
                    void 0 === e && (e = null === (t = (0, o.getGlobalObject)().location) || void 0 === t ? void 0 : t.hostname);
                    var t, n = i();
                    return !!n && n.getAllowedWebViewHosts().some(function(t) {
                        return e === t || (0, r.endsWith)(e, ".".concat(t))
                    })
                }
            },
            482: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createFlushController = void 0;
                var r = n(5878),
                    o = n(6206);
                t.createFlushController = function(e) {
                    var t, n = e.messagesLimit,
                        i = e.bytesLimit,
                        a = e.durationLimit,
                        s = e.pageExitObservable,
                        u = e.sessionExpireObservable,
                        c = s.subscribe(function(e) {
                            return g(e.reason)
                        }),
                        l = u.subscribe(function() {
                            return g("session_expire")
                        }),
                        d = new r.Observable(function() {
                            return function() {
                                c.unsubscribe(), l.unsubscribe()
                            }
                        }),
                        f = 0,
                        p = 0;

                    function g(e) {
                        if (0 !== p) {
                            var t = p,
                                n = f;
                            p = 0, f = 0, m(), d.notify({
                                reason: e,
                                messagesCount: t,
                                bytesCount: n
                            })
                        }
                    }

                    function m() {
                        (0, o.clearTimeout)(t), t = void 0
                    }
                    return {
                        flushObservable: d,
                        get messagesCount() {
                            return p
                        },
                        notifyBeforeAddMessage: function(e) {
                            f + e >= i && g("bytes_limit"), p += 1, f += e, void 0 === t && (t = (0, o.setTimeout)(function() {
                                g("duration_limit")
                            }, a))
                        },
                        notifyAfterAddMessage: function(e) {
                            void 0 === e && (e = 0), f += e, p >= n ? g("messages_limit") : f >= i && g("bytes_limit")
                        },
                        notifyAfterRemoveMessage: function(e) {
                            f -= e, 0 == (p -= 1) && m()
                        }
                    }
                }
            },
            8533: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sendXHR = t.fetchKeepAliveStrategy = t.createHttpRequest = void 0;
                var r = n(5208),
                    o = n(1971),
                    i = n(74),
                    a = n(6541);
                t.createHttpRequest = function(e, t, n, o) {
                    var i = (0, a.newRetryState)(),
                        l = function(r, o) {
                            return u(e, t, n, r, o)
                        };
                    return {
                        send: function(e) {
                            (0, a.sendWithRetryStrategy)(e, i, l, t.trackType, o)
                        },
                        sendOnExit: function(o) {
                            ! function(e, t, n, o) {
                                if (navigator.sendBeacon && o.bytesCount < n) try {
                                    var i = t.build("beacon", o);
                                    if (navigator.sendBeacon(i, o.data)) return
                                } catch (e) {
                                    s || (s = !0, (0, r.addTelemetryError)(e))
                                }
                                c(e, t.build("xhr", o), o.data)
                            }(e, t, n, o)
                        }
                    }
                };
                var s = !1;

                function u(e, t, n, r, i) {
                    (function() {
                        try {
                            return window.Request && "keepalive" in new Request("http://a")
                        } catch (e) {
                            return !1
                        }
                    })() && r.bytesCount < n ? fetch(t.build("fetch", r), {
                        method: "POST",
                        body: r.data,
                        keepalive: !0,
                        mode: "cors"
                    }).then((0, o.monitor)(function(e) {
                        return null == i ? void 0 : i({
                            status: e.status,
                            type: e.type
                        })
                    }), (0, o.monitor)(function() {
                        c(e, t.build("xhr", r), r.data, i)
                    })) : c(e, t.build("xhr", r), r.data, i)
                }

                function c(e, t, n, r) {
                    var o = new XMLHttpRequest;
                    o.open("POST", t, !0), n instanceof Blob && o.setRequestHeader("Content-Type", n.type), (0, i.addEventListener)(e, o, "loadend", function() {
                        null == r || r({
                            status: o.status
                        })
                    }, {
                        once: !0
                    }), o.send(n)
                }
                t.fetchKeepAliveStrategy = u, t.sendXHR = c
            },
            18: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createFlushController = t.startBatchWithReplica = t.getEventBridge = t.bridgeSupports = t.canUseEventBridge = t.createHttpRequest = void 0;
                var r = n(8533);
                Object.defineProperty(t, "createHttpRequest", {
                    enumerable: !0,
                    get: function() {
                        return r.createHttpRequest
                    }
                });
                var o = n(1249);
                Object.defineProperty(t, "canUseEventBridge", {
                    enumerable: !0,
                    get: function() {
                        return o.canUseEventBridge
                    }
                }), Object.defineProperty(t, "bridgeSupports", {
                    enumerable: !0,
                    get: function() {
                        return o.bridgeSupports
                    }
                }), Object.defineProperty(t, "getEventBridge", {
                    enumerable: !0,
                    get: function() {
                        return o.getEventBridge
                    }
                });
                var i = n(4060);
                Object.defineProperty(t, "startBatchWithReplica", {
                    enumerable: !0,
                    get: function() {
                        return i.startBatchWithReplica
                    }
                });
                var a = n(482);
                Object.defineProperty(t, "createFlushController", {
                    enumerable: !0,
                    get: function() {
                        return a.createFlushController
                    }
                })
            },
            6541: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.newRetryState = t.sendWithRetryStrategy = t.INITIAL_BACKOFF_TIME = t.MAX_BACKOFF_TIME = t.MAX_QUEUE_BYTES_COUNT = t.MAX_ONGOING_REQUESTS = t.MAX_ONGOING_BYTES_COUNT = void 0;
                var r = n(6206),
                    o = n(9435),
                    i = n(7746),
                    a = n(3077),
                    s = n(7235);

                function u(e, n, o, i, a) {
                    0 === n.transportStatus && 0 === n.queuedPayloads.size() && n.bandwidthMonitor.canHandle(e) ? c(e, n, o, {
                        onSuccess: function() {
                            return l(0, n, o, i, a)
                        },
                        onFailure: function() {
                            n.queuedPayloads.enqueue(e),
                                function e(n, o, i, a) {
                                    2 === n.transportStatus && (0, r.setTimeout)(function() {
                                        c(n.queuedPayloads.first(), n, o, {
                                            onSuccess: function() {
                                                n.queuedPayloads.dequeue(), n.currentBackoffTime = t.INITIAL_BACKOFF_TIME, l(1, n, o, i, a)
                                            },
                                            onFailure: function() {
                                                n.currentBackoffTime = Math.min(t.MAX_BACKOFF_TIME, 2 * n.currentBackoffTime), e(n, o, i, a)
                                            }
                                        })
                                    }, n.currentBackoffTime)
                                }(n, o, i, a)
                        }
                    }) : n.queuedPayloads.enqueue(e)
                }

                function c(e, t, n, r) {
                    var o = r.onSuccess,
                        i = r.onFailure;
                    t.bandwidthMonitor.add(e), n(e, function(n) {
                        t.bandwidthMonitor.remove(e), "opaque" !== n.type && (0 === n.status && !navigator.onLine || 408 === n.status || 429 === n.status || (0, a.isServerError)(n.status)) ? (t.transportStatus = t.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, e.retry = {
                            count: e.retry ? e.retry.count + 1 : 1,
                            lastFailureStatus: n.status
                        }, i()) : (t.transportStatus = 0, o())
                    })
                }

                function l(e, n, r, a, c) {
                    0 === e && n.queuedPayloads.isFull() && !n.queueFullReported && (c({
                        message: "Reached max ".concat(a, " events size queued for upload: ").concat(t.MAX_QUEUE_BYTES_COUNT / i.ONE_MEBI_BYTE, "MiB"),
                        source: s.ErrorSource.AGENT,
                        startClocks: (0, o.clocksNow)()
                    }), n.queueFullReported = !0);
                    var l = n.queuedPayloads;
                    for (n.queuedPayloads = d(); l.size() > 0;) u(l.dequeue(), n, r, a, c)
                }

                function d() {
                    var e = [];
                    return {
                        bytesCount: 0,
                        enqueue: function(t) {
                            this.isFull() || (e.push(t), this.bytesCount += t.bytesCount)
                        },
                        first: function() {
                            return e[0]
                        },
                        dequeue: function() {
                            var t = e.shift();
                            return t && (this.bytesCount -= t.bytesCount), t
                        },
                        size: function() {
                            return e.length
                        },
                        isFull: function() {
                            return this.bytesCount >= t.MAX_QUEUE_BYTES_COUNT
                        }
                    }
                }
                t.MAX_ONGOING_BYTES_COUNT = 80 * i.ONE_KIBI_BYTE, t.MAX_ONGOING_REQUESTS = 32, t.MAX_QUEUE_BYTES_COUNT = 3 * i.ONE_MEBI_BYTE, t.MAX_BACKOFF_TIME = o.ONE_MINUTE, t.INITIAL_BACKOFF_TIME = o.ONE_SECOND, t.sendWithRetryStrategy = u, t.newRetryState = function() {
                    return {
                        transportStatus: 0,
                        currentBackoffTime: t.INITIAL_BACKOFF_TIME,
                        bandwidthMonitor: {
                            ongoingRequestCount: 0,
                            ongoingByteCount: 0,
                            canHandle: function(e) {
                                return 0 === this.ongoingRequestCount || this.ongoingByteCount + e.bytesCount <= t.MAX_ONGOING_BYTES_COUNT && this.ongoingRequestCount < t.MAX_ONGOING_REQUESTS
                            },
                            add: function(e) {
                                this.ongoingRequestCount += 1, this.ongoingByteCount += e.bytesCount
                            },
                            remove: function(e) {
                                this.ongoingRequestCount -= 1, this.ongoingByteCount -= e.bytesCount
                            }
                        },
                        queuedPayloads: d(),
                        queueFullReported: !1
                    }
                }
            },
            4060: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.startBatchWithReplica = void 0;
                var r = n(5357),
                    o = n(8533),
                    i = n(482);
                t.startBatchWithReplica = function(e, t, n, a, s, u) {
                    var c = d(e, t),
                        l = n && d(e, n);

                    function d(e, t) {
                        var n = t.endpoint,
                            c = t.encoder;
                        return new r.Batch(c, (0, o.createHttpRequest)(e, n, e.batchBytesLimit, a), (0, i.createFlushController)({
                            messagesLimit: e.batchMessagesLimit,
                            bytesLimit: e.batchBytesLimit,
                            durationLimit: e.flushTimeout,
                            pageExitObservable: s,
                            sessionExpireObservable: u
                        }), e.messageBytesLimit)
                    }
                    return {
                        flushObservable: c.flushController.flushObservable,
                        add: function(e, t) {
                            void 0 === t && (t = !0), c.add(e), l && t && l.add(n.transformMessage ? n.transformMessage(e) : e)
                        },
                        upsert: function(e, t) {
                            c.upsert(e, t), l && l.upsert(n.transformMessage ? n.transformMessage(e) : e, t)
                        },
                        stop: function() {
                            c.stop(), null == l || l.stop()
                        }
                    }
                }
            },
            2166: function() {
                document.addEventListener("DOMContentLoaded", function() {
                    var e = document.createElement("script");
                    e.id = "6senseWebTag", e.src = "https://j.6sc.co/j/2857ca42-ef41-4329-91b9-a76dcc15567f.js", document.head.appendChild(e)
                })
            },
            1094: function(e, t, n) {
                "use strict";
                var r, o, i = n(6991);

                function a(e) {
                    for (var t = [], n = 0, r = e.length - 1; r >= 0; r--) t.length < 10 && (n += e[r].length) <= 1e3 && t.push(e[r]);
                    return t.reverse(), t
                }
                r = window.isWebflowDevelopment ? "b62j0zn76f3f4czyqona" : window.isWebflowTest ? "b62j0zn76f3f4czyqona" : "LxDlnenvX7AILMw6AXzZAvUoSltW2ZyH", o = window.isWebflowDevelopment || window.isWebflowTest ? "analytics.webflowtest.com" : "analytics.webflow.com", "undefined" != typeof window && (window.wf_analytics = function() {
                    var e, t = {},
                        n = "website",
                        s = [],
                        u = !1;

                    function c() {
                        for (var e = l() ? window.analytics.user().anonymousId() : void 0, t = 0; t < s.length; t++)(0, s[t])(e)
                    }

                    function l() {
                        return window.analytics && window.analytics.initialized
                    }
                    if (t.init = function(t) {
                            if (!t || "boolean" != typeof t.skipPageView && (!t.pageView || !t.pageView.name || "string" != typeof t.pageView.name)) return wf_datadog.reportBug("AnalyticsError", "Analytics initiated with incorrect options", {
                                team: "growth",
                                ticket: "https://webflow.atlassian.net/browse/ACQ-141",
                                priority: "high"
                            });
                            if ("function" != typeof window.initSegmentAnalytics) return wf_datadog.reportBug("AnalyticsError", "Segment snippet not found", {
                                team: "growth",
                                ticket: "https://webflow.atlassian.net/browse/ACQ-141",
                                priority: "high"
                            });
                            if ("function" != typeof window.initSegmentConsentManager) return wf_datadog.reportBug("AnalyticsError", "Segment consent manager snippet not found", {
                                team: "growth",
                                ticket: "https://webflow.atlassian.net/browse/ACQ-141",
                                priority: "medium"
                            });
                            window.initSegmentAnalytics(r, o), window.initSegmentConsentManager(r, o);
                            var i = setTimeout(function() {
                                c(), u = !0
                            }, 5e3);
                            window.analytics.ready(function() {
                                c(), clearTimeout(i)
                            }), t.skipPageView || wf_utils.isLoggedIn(function(r) {
                                e = r;
                                var o = t.pageView.name,
                                    i = Object.assign(t.pageView.data || {}, {
                                        source: location.pathname,
                                        ref: wf_utils.getQueryParam("ref") || void 0,
                                        "logged in": e,
                                        page: t.page
                                    });
                                window.analytics.track(o, i), t.trackScroll && wf_utils.initScrollTracking(), t.page && (n = t.page)
                            })
                        }, t.isInitialized = function() {
                            return l()
                        }, t.track = function(t, r, o) {
                            t && "string" == typeof t && (r = Object.assign(r || {}, {
                                source: location.pathname,
                                "logged in": e,
                                page: n
                            }), window.analytics.track(t, r, o || {}))
                        }, t.getAnonymousId = function(e) {
                            if ("function" != typeof e) return l() && !u ? window.analytics.user().anonymousId() : void 0;
                            l() ? e(window.analytics.user().anonymousId()) : u ? e(void 0) : s.push(e)
                        }, window.wf_utils) return window.wf_utils.isLoggedIn(function(t) {
                        e = t, t || function(e, t, n) {
                            var r = wf_utils.getCookie(e),
                                o = {
                                    days: 365,
                                    path: "/",
                                    domain: wf_utils.getCookieHost(),
                                    secure: !0
                                },
                                i = window.location.search.substr(1).split("&").some(function(e) {
                                    return e.split("=")[0].startsWith("utm_")
                                }) ? window.location.host + window.location.pathname + window.location.search + window.location.hash : "";
                            if (r) i && (n(r, i), wf_utils.setCookie(e, JSON.stringify(r), o));
                            else {
                                var a = t(i);
                                wf_utils.setCookie(e, JSON.stringify(a), o)
                            }
                        }(i.Yk, function(e) {
                            var t = {
                                first_touch_date: new Date().toISOString(),
                                initial_utm_campaign: wf_utils.getQueryParam("utm_campaign"),
                                initial_utm_content: wf_utils.getQueryParam("utm_content"),
                                initial_utm_medium: wf_utils.getQueryParam("utm_medium"),
                                initial_utm_source: wf_utils.getQueryParam("utm_source"),
                                initial_utm_term: wf_utils.getQueryParam("utm_term"),
                                initial_gclid: wf_utils.getQueryParam("gclid"),
                                initial_page_url: document.location.href
                            };
                            return document.referrer && (t.initial_referrer = document.referrer, t.initial_referring_domain = wf_utils.getURLDomainName(document.referrer)), e && (t.presignup_breadcrumbs = a([e])), t
                        }, function(e, t) {
                            e.presignup_breadcrumbs || (e.presignup_breadcrumbs = []), e.presignup_breadcrumbs.push(t), e.presignup_breadcrumbs = a(e.presignup_breadcrumbs)
                        })
                    }), t
                }())
            },
            6629: function(e, t, n) {
                "use strict";
                var r, o, i, a, s = n(6991);
                o = {}, i = {}, a = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"], "undefined" != typeof window && (o = wf_utils.getCookie(s.C5) || {}, i = wf_utils.getCookie(s.Yk) || {}, r = {}, a.forEach(function(e) {
                    var t = wf_utils.getQueryParam(e);
                    t && (r[e] = t)
                }), Object.keys(r).length && wf_utils.setCookie(s.C5, JSON.stringify(r), {
                    days: 1 / 48
                }), document.querySelectorAll("[data-form-autofill]").forEach(function(e) {
                    ! function(e) {
                        if (!e) {
                            console.error("missing form to append fields.");
                            return
                        }[].concat(a, Object.keys(i)).forEach(function(t) {
                            var n = t.startsWith("initial") ? i[t] : wf_utils.getQueryParam(t) || o[t];
                            if (n) {
                                var r = document.createElement("input");
                                r.setAttribute("type", "hidden"), r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
                            }
                        })
                    }(e)
                }), void 0 !== window.MktoForms2 && window.MktoForms2.whenReady(function(e) {
                    ! function(e) {
                        var t = {},
                            n = e.getFormElem();
                        if (n) {
                            var r = n.find("input[type=hidden][name^='first'],[name^='FIRST'],[name^='initial'],[name^='INITIAL']"),
                                s = n.find("input[type=hidden][name^='utm'], [name^='UTM'], [name^='gclid'], [name^='GCLID']");
                            r.each(function() {
                                var e = this.name.toLowerCase().replace("first", "initial"),
                                    n = Object.keys(i).find(function(t) {
                                        return e.startsWith(t)
                                    });
                                n && i[n] && (t[this.name] = i[n])
                            }), s.each(function() {
                                var e = this,
                                    n = a.find(function(t) {
                                        return e.name.toLowerCase().startsWith(t)
                                    }),
                                    r = wf_utils.getQueryParam(n) || o[n];
                                n && r && (t[e.name] = r)
                            }), e.setValues(t)
                        }
                    }(e)
                }))
            },
            6991: function(e, t, n) {
                "use strict";
                n.d(t, {
                    C5: function() {
                        return o
                    },
                    Yk: function() {
                        return r
                    }
                });
                var r = "wf_first_touch",
                    o = "wf_utm_session_values"
            },
            3679: function() {
                var e, t, n, r, o, i, a, s, u, c, l, d;
                e = "[data-logged-in-copy]", t = "[data-logged-in-href]", n = "[data-logged-in-display]", r = "[data-cta]", o = "data-cta-position", i = wf_utils.buildWebflowUrl("/dashboard/signup-modal"), a = !1, wf_utils.isWebflowUniversity() ? i += "?uni=1" : wf_utils.isWebflowSupport() ? i += "?support=1" : wf_utils.isWebflowBlog() ? i += "?blog=1" : wf_utils.isMadeInWebflow() && (i += "?miw=1"), s = wf_utils.buildWebflowUrl("/dashboard/signup"), u = wf_utils.buildWebflowUrl("/dashboard/login"), c = wf_utils.buildWebflowUrl("/made-in-webflow"), l = wf_utils.buildWebflowUrl("/dashboard"), d = wf_utils.isWebflowUniversity() ? "Use Webflow" : "View dashboard", "undefined" != typeof window && wf_utils.onDocumentReady(function() {
                    wf_utils.isLoggedIn(function(f) {
                        ! function(f) {
                            var p = document.querySelectorAll("[data-signup-cta]"),
                                g = document.querySelectorAll("[data-login-cta]"),
                                m = document.querySelectorAll("[data-enroll-cta]"),
                                v = document.querySelectorAll(e),
                                y = document.querySelectorAll(t),
                                b = document.querySelectorAll(n),
                                _ = document.querySelectorAll(r);
                            try {
                                f ? (wf_utils.signupModalUtils.removeIframeSrc(), wf_utils.setElementsHref(g, c), wf_utils.setElementsHref(p, l), wf_utils.setElementsCopy(g, "#MadeInWebflow"), wf_utils.setElementsCopy(p, d), S()) : !window.wf_disableSignupModal && (!wf_utils.isMobile() && (wf_utils.isWebflowDotCom() || wf_utils.isMadeInWebflow()) || wf_utils.isWebflowUniversity() || wf_utils.isWebflowSupport()) && wf_utils.signupModalUtils.isIframeAvailable() ? wf_utils.signupModalUtils.initModal(function() {
                                    wf_utils.signupModalUtils.setIframeSrc(i), wf_utils.addClickListener(p, function(e) {
                                        a || (e.preventDefault(), wf_utils.signupModalUtils.openModal())
                                    }), wf_utils.addClickListener(m, function(e) {
                                        a || (e.preventDefault(), wf_utils.signupModalUtils.openModal())
                                    }), wf_utils.setElementsHref(g, u)
                                }) : (wf_utils.setElementsHref(p, s), wf_utils.setElementsHref(m, s), wf_utils.setElementsHref(g, u)), E(p, f ? "Open Dashboard" : "Sign Up"), E(g, f ? "Open Showcase" : "Log In"), E(m, "Enroll"), wf_utils.addClickListener(_, function(e) {
                                    var t = e && e.currentTarget;
                                    if (t) {
                                        var n = t.getAttribute("data-cta-event-name") || "CTA Clicked",
                                            i = r.slice(1, -1),
                                            a = t.getAttribute(i),
                                            s = t.getAttribute("data-cta-text") || t.innerText.trim(),
                                            u = t.getAttribute(o) || void 0;
                                        wf_analytics.track(n, "Marketplace CTA Clicked" === n ? {
                                            "button action and type": a,
                                            CTA: s,
                                            name: function() {
                                                if (window.wf_libraryName) return window.wf_libraryName;
                                                var e = window.location && window.location.pathname,
                                                    t = e ? e.split("/") : null;
                                                if (Array.isArray(t) && 3 === t.length && "library" === t[1]) return t[2]
                                            }(),
                                            "position on page": u,
                                            "page type": "distinct page"
                                        } : {
                                            "button action and type": a,
                                            "button CTA": s,
                                            "page type": "distinct page",
                                            "position on page": u
                                        })
                                    }
                                }), wf_utils.signupModalUtils.addModalOpenListener(function() {
                                    document.body.style.overflow = "hidden"
                                }), wf_utils.signupModalUtils.addModalCloseListener(function() {
                                    document.body.style.overflow = "auto"
                                }), window.addEventListener("message", function(e) {
                                    var t, n, r, o = e && e.data && e.data.event,
                                        i = e && e.data && e.data.action,
                                        s = e && e.data && e.data.opts || {};
                                    if (("signed_up" === o || "logged_in" === o) && (a = !0, wf_utils.setElementsHref(p, l), wf_utils.setElementsCopy(p, d), wf_utils.isWebflowSupport() && "/" === window.location.pathname && (window.location = "/get-support"), S()), "entered_2fa_page" === o && wf_utils.signupModalUtils.openModal(), "close_modal" === i && wf_utils.signupModalUtils.closeModal(), "open_segmentation_survey" === i) return (t = s.pathname) || wf_utils.signupModalUtils.closeModal(), n = wf_utils.buildWebflowUrl(t), wf_utils.signupModalUtils.overrideIframeSrc(n), wf_utils.signupModalUtils.hideCloseButton(), void((r = document.querySelectorAll("[data-signup-modal-logos]")) && r.forEach(function(e) {
                                        e.style.display = "none"
                                    }))
                                }, !1)
                            } catch (e) {
                                wf_datadog.reportBug(e.name, e.message, {
                                    team: "growth",
                                    ticket: "https://webflow.atlassian.net/browse/ACQ-141",
                                    priority: "high"
                                })
                            }

                            function E(e, t) {
                                e.forEach(function(e) {
                                    wf_utils.addClickListener([e], function() {
                                        wf_analytics.track("CTA Clicked", {
                                            "button action and type": t,
                                            "button CTA": e.innerText.trim(),
                                            "position on page": e.getAttribute(o),
                                            "page type": "distinct page",
                                            scroll: wf_utils.getScroll()
                                        })
                                    })
                                })
                            }

                            function S() {
                                (function() {
                                    for (var t = e.slice(1, -1), n = 0; n < v.length; n++) {
                                        var r = v[n].getAttribute(t);
                                        wf_utils.setElementsCopy([v[n]], r)
                                    }
                                })(),
                                function() {
                                    for (var e = t.slice(1, -1), n = 0; n < y.length; n++) {
                                        var r = y[n].getAttribute(e);
                                        wf_utils.setElementsHref([y[n]], r)
                                    }
                                }(),
                                function() {
                                    for (var e = n.slice(1, -1), t = 0; t < b.length; t++) {
                                        var r = b[t].getAttribute(e);
                                        b[t].style.display = r
                                    }
                                }()
                            }
                        }(f)
                    })
                })
            },
            201: function(e, t, n) {
                "use strict";
                var r = n(1106);

                function o(e, t, n = {}, i = {}, a = {}) {
                    try {
                        i.skipConsole || console.error(`${e}: ${t}, ${JSON.stringify(n)}`), r.fy.logger.error(t, {
                            error: {
                                name: e,
                                message: t
                            },
                            metaData: { ...n,
                                hostname: location.hostname,
                                source: location.pathname
                            }
                        }, a)
                    } catch (e) {
                        console.error(`Error while trying to capture exception: ${e}`)
                    }
                }
                "undefined" != typeof window && (window.wf_datadog = (() => {
                    let e = {},
                        t = window.isWebflowDevelopment ? "development" : window.isWebflowTest ? "acceptance" : "production";
                    return r.fy.init({
                        clientToken: "pubc33d9e23f635cacb3045987885a83052",
                        site: "datadoghq.com",
                        forwardErrorsToLogs: !1,
                        service: "marketing",
                        env: t,
                        sessionSampleRate: 100
                    }), e.reportBug = o, e
                })())
            },
            9166: function() {
                "undefined" != typeof window && (function() {
                    if (0 !== wf_experiments._INTERNAL_.automatedExperiments.length) var e = setInterval(function() {
                        wf_experiments._INTERNAL_.isFetchFinish && (wf_analytics.getAnonymousId(function(e) {
                            wf_experiments._INTERNAL_.logAssignments(e, wf_experiments._INTERNAL_.automatedExperiments)
                        }), clearInterval(e))
                    }, 500)
                }(), wf_experiments.assignExperiment = function(e) {
                    wf_analytics.getAnonymousId(function(t) {
                        wf_experiments._INTERNAL_.logAssignments(t, [e])
                    })
                }, wf_experiments.getExperimentVariantWithoutAssigning = function(e, t) {
                    wf_experiments._INTERNAL_.isInitiated || t(null);
                    var n = 0,
                        r = setInterval(function() {
                            if (wf_experiments._INTERNAL_.isFetchFinish) {
                                var o = wf_experiments._CACHE_.assignments[e] && wf_experiments._CACHE_.assignments[e][0];
                                t(o ? o.variant : null), clearInterval(r)
                            }
                            5 == ++n && (t(null), clearInterval(r))
                        }, 500)
                })
            },
            5468: function() {
                function e(e) {
                    var t = !1,
                        n = function() {
                            !t && (t = !0, e && e())
                        };
                    setTimeout(n, 1e3);
                    try {
                        var r = document.createElement("img");
                        r.onload = n, r.onerror = n, r.src = "https://ad.ipredictive.com/d/track/event?upid=104142&url=" + encodeURIComponent(window.location.href) + "&cache_buster=" + Date.now() + "&ps=2", r.style.display = "none", r.width = 1, r.height = 1, document.body.appendChild(r)
                    } catch (e) {
                        var o = "Viant Pixel failed to load";
                        try {
                            o = JSON.stringify(e, Object.getOwnPropertyNames(e))
                        } catch (e) {}
                        return wf_datadog.reportBug("ViantPixelError", o, {
                            team: "growth",
                            ticket: "https://webflow.atlassian.net/browse/ACQ-141",
                            priority: "low"
                        })
                    }
                }! function() {
                    "use strict";

                    function t(e) {
                        wf_analytics.track("Website Form Submitted", e)
                    }

                    function n() {
                        document.querySelectorAll("form:not([name*='Search'], [name*='search'], [id*='search'], .ng-pristine, .mktoForm)").forEach(function(n) {
                            ! function(n) {
                                if (n) {
                                    var r = n.querySelector("input[type='email']"),
                                        o = n.querySelector("select[id*='Company-size'], select[id*='company-size']"),
                                        i = n && n.attributes && n.attributes.name && n.attributes.name.value || null,
                                        a = "viant" === n.getAttribute("data-marketing-form");
                                    n.addEventListener("submit", function(s) {
                                        a && s && s.preventDefault && (a = !1, s.preventDefault(), e(function() {
                                            n.submit()
                                        }));
                                        var u = o ? o.value : null;
                                        t({
                                            email: r ? r.value : null,
                                            "company size": u,
                                            "form name": i
                                        })
                                    })
                                }
                            }(n)
                        })
                    }
                    "undefined" != typeof window && window.document.addEventListener("DOMContentLoaded", function() {
                        ! function() {
                            if (void 0 !== window.MktoForms2) {
                                window.MktoForms2.whenReady(function(n) {
                                    var r;
                                    r = !0, n.onSubmit(function() {
                                        if (r) return r = !1, n.submittable(!1), e(function() {
                                            n.submittable(!0), n.submit()
                                        }), !1
                                    }), n.onSuccess(function(e) {
                                        function r(t) {
                                            var n;
                                            return (n = Object.keys(e).find(function(e) {
                                                return e.replace(/_+/g, " ").toLowerCase().includes(t.toLowerCase())
                                            })) ? e[n] : null
                                        }
                                        var o = "form-" + n.getId(),
                                            i = e.FirstName || r("firstname") || r("first name"),
                                            a = e.LastName || r("lastname") || r("last name");
                                        t({
                                            "form name": o,
                                            email: e.Email || e.email,
                                            "first name": i,
                                            "last name": a,
                                            phone: e.Phone || e.phone,
                                            company: e.Company || e.company,
                                            "company size": r("company size"),
                                            title: e.Title || e.title,
                                            country: e.Country || e.country,
                                            message: r("what are you hoping to learn"),
                                            consent: r("like to receive marketing") || r("I agree")
                                        })
                                    })
                                }), setTimeout(n, 1500);
                                return
                            }
                            n()
                        }()
                    })
                }()
            },
            6775: function() {
                "use strict";
                let e = "one_tap_handshake",
                    t = "one-tap-wrapper-auto",
                    n = !1,
                    r = null;
                wf_utils.isLoggedIn(function(o) {
                    o || function(o = !1) {
                        let i = o ? t : "one-tap-wrapper";
                        if (!document.getElementById(i)) return;
                        let a = o,
                            s = window.isWebflowDevelopment ? "657641920759-9eec7nmooktvfhghbhgl2imsngkjf48a.apps.googleusercontent.com" : window.isWebflowTest ? "657641920759-d7udrqud6jof17vo5bio9eg8qjqf48t0.apps.googleusercontent.com" : "657641920759-c7l1281jejtqqb0rr9jc03qgp9se6gms.apps.googleusercontent.com",
                            u = {
                                credential_returned: "Google One Tap Authentication",
                                user_cancel: "Google One Tap Closed",
                                tap_outside: "Google One Tap Closed by Tap Outside",
                                display: "Google One Tap Viewed"
                            };

                        function c(e) {
                            let t = u[e] || null;
                            window.wf_analytics && t && wf_analytics.track(t)
                        }

                        function l(e, t) {
                            try {
                                let n = wf_utils.signupModalUtils.getIframe(),
                                    r = `https://${wf_utils.getHost()}/`;
                                if (!n) return;
                                n.contentWindow.postMessage({
                                    event: e,
                                    payload: t
                                }, r)
                            } catch (e) {
                                console.error(e)
                            }
                        }

                        function d() {
                            if (window.google) {
                                window.google.accounts.id.prompt();
                                return
                            }
                            if (!a || !n) {
                                let e = `Unexpected state when trying to load Google Script shouldShowOneTap: ${a}, isGoogleHandlerReady ${n}`;
                                wf_datadog.reportBug("GoogleOneTapError", e, {
                                    team: "growth",
                                    ticket: "https://webflow.atlassian.net/browse/ACQ-141",
                                    priority: "high"
                                });
                                return
                            }
                            var e = function(e) {
                                    if (e && e.credential) {
                                        l("one_tap_auth_success", e);
                                        return
                                    }
                                    let t = "";
                                    try {
                                        t = JSON.stringify(e)
                                    } catch {
                                        t = "Unknown error"
                                    }
                                    wf_datadog.reportBug("GoogleOneTapError", t, {
                                        team: "growth",
                                        ticket: "https://webflow.atlassian.net/browse/ACQ-141",
                                        priority: "high"
                                    })
                                },
                                t = document.createElement("script");
                            t.src = "https://accounts.google.com/gsi/client", t.async = !0, t.defer = !0, t.onload = function() {
                                window.google.accounts.id.initialize({
                                    client_id: s,
                                    callback: e,
                                    cancel_on_tap_outside: !0,
                                    prompt_parent_id: i,
                                    state_cookie_domain: wf_utils.getCookieHost()
                                }), window.google.accounts.id.prompt(e => {
                                    (function(e) {
                                        if (e && e.getSkippedReason && e.getMomentType && e.getDismissedReason) try {
                                            c(e.getSkippedReason()), c(e.getDismissedReason()), c(e.getMomentType())
                                        } catch (t) {
                                            let e = t && t.message ? t.message : "Failed to track One Tap Notification Events";
                                            wf_datadog.reportBug("GoogleOneTapError", e, {
                                                team: "growth",
                                                ticket: "https://webflow.atlassian.net/browse/ACQ-141",
                                                priority: "high"
                                            })
                                        }
                                    })(e), r && r(e)
                                })
                            };
                            var o = document.getElementsByTagName("script")[0];
                            o && o.parentNode.insertBefore(t, o)
                        }
                        window.addEventListener("message", t => {
                            let r = t && t.data && t.data.event;
                            if (r === e) {
                                if (!document.getElementById(i)) return;
                                l(e, null);
                                return
                            }
                            "google_handler_ready" === r && (n = !0, a && d())
                        }), window.wf_showGoogleOneTap = function(e) {
                            a = !0, e && (r = e), n && d()
                        }
                    }(!!document.getElementById(t))
                })
            },
            1571: function() {
                "undefined" != typeof window && wf_utils.isLoggedIn(function(e) {
                    (e || !window.wf_isEU()) && function() {
                        try {
                            var e = !1,
                                t = function() {
                                    void 0 !== window.Munchkin && !1 === e && (e = !0, window.Munchkin.init("050-LKC-745"))
                                },
                                n = document.createElement("script");
                            n.type = "text/javascript", n.async = !0, n.src = "//munchkin.marketo.net/munchkin.js", n.onreadystatechange = function() {
                                ("complete" === this.readyState || "loaded" === this.readyState) && t()
                            }, n.onload = t;
                            var r = document.getElementsByTagName("script")[0];
                            r.parentNode.insertBefore(n, r)
                        } catch (e) {
                            console.error(e)
                        }
                    }()
                })
            },
            8223: function() {
                ! function() {
                    "use strict";
                    var e, t, n, r, o, i, a, s = (a = function() {
                        var s = c() - n;
                        250 > s ? t = setTimeout(a, 250 - s) : (t = null, e || (o = u.apply(i, r)), t || (r = i = null))
                    }, function() {
                        return i = this, r = arguments, n = c(), !t && (t = setTimeout(a, 250), e && (o = u.apply(i, r))), o
                    });

                    function u() {
                        var e = .01 * window.innerHeight;
                        document.documentElement.style.setProperty("--vh", e + "px")
                    }
                    "undefined" != typeof window && document.addEventListener("DOMContentLoaded", function() {
                        var e = document.body,
                            t = document.getElementById("navbar_menu-button");
                        wf_utils.addClickListener([t], function() {
                            "false" === t.getAttribute("aria-expanded") ? (u(), window.addEventListener("resize", s)) : window.removeEventListener("resize", s), e.classList.toggle("no-overflow")
                        })
                    });
                    var c = Date.now
                }()
            },
            7138: function(e, t) {
                var n = {
                    mailcheck: {
                        threshold: 3,
                        defaultDomains: ["yahoo.com", "google.com", "hotmail.com", "gmail.com", "me.com", "aol.com", "mac.com", "live.com", "comcast.net", "googlemail.com", "msn.com", "hotmail.co.uk", "yahoo.co.uk", "facebook.com", "verizon.net", "sbcglobal.net", "att.net", "gmx.com", "mail.com", "outlook.com"],
                        defaultTopLevelDomains: ["co.jp", "co.uk", "com", "net", "org", "info", "edu", "gov", "mil"],
                        run: function(e) {
                            e.domains = e.domains || n.mailcheck.defaultDomains, e.topLevelDomains = e.topLevelDomains || n.mailcheck.defaultTopLevelDomains, e.distanceFunction = e.distanceFunction || n.sift3Distance;
                            var t = n.mailcheck.suggest(encodeURI(e.email), e.domains, e.topLevelDomains, e.distanceFunction);
                            t ? e.suggested && e.suggested(t) : e.empty && e.empty()
                        },
                        suggest: function(e, t, n, r) {
                            e = e.toLowerCase();
                            var o = this.splitEmail(e),
                                i = this.findClosestDomain(o.domain, t, r);
                            if (i) {
                                if (i != o.domain) return {
                                    address: o.address,
                                    domain: i,
                                    full: o.address + "@" + i
                                }
                            } else {
                                var a = this.findClosestDomain(o.topLevelDomain, n);
                                if (o.domain && a && a != o.topLevelDomain) {
                                    var s = o.domain;
                                    return i = s.substring(0, s.lastIndexOf(o.topLevelDomain)) + a, {
                                        address: o.address,
                                        domain: i,
                                        full: o.address + "@" + i
                                    }
                                }
                            }
                            return !1
                        },
                        findClosestDomain: function(e, t, n) {
                            var r, o = 99,
                                i = null;
                            if (!e || !t) return !1;
                            n || (n = this.sift3Distance);
                            for (var a = 0; a < t.length; a++) {
                                if (e === t[a]) return e;
                                (r = n(e, t[a])) < o && (o = r, i = t[a])
                            }
                            return o <= this.threshold && null !== i && i
                        },
                        sift3Distance: function(e, t) {
                            if (null == e || 0 === e.length) return null == t || 0 === t.length ? 0 : t.length;
                            if (null == t || 0 === t.length) return e.length;
                            for (var n = 0, r = 0, o = 0, i = 0; n + r < e.length && n + o < t.length;) {
                                if (e.charAt(n + r) == t.charAt(n + o)) i++;
                                else {
                                    r = 0, o = 0;
                                    for (var a = 0; a < 5; a++) {
                                        if (n + a < e.length && e.charAt(n + a) == t.charAt(n)) {
                                            r = a;
                                            break
                                        }
                                        if (n + a < t.length && e.charAt(n) == t.charAt(n + a)) {
                                            o = a;
                                            break
                                        }
                                    }
                                }
                                n++
                            }
                            return (e.length + t.length) / 2 - i
                        },
                        splitEmail: function(e) {
                            var t = e.split("@");
                            if (t.length < 2) return !1;
                            for (var n = 0; n < t.length; n++)
                                if ("" === t[n]) return !1;
                            var r = t.pop(),
                                o = r.split("."),
                                i = "";
                            if (0 == o.length) return !1;
                            if (1 == o.length) i = o[0];
                            else {
                                for (var n = 1; n < o.length; n++) i += o[n] + ".";
                                o.length >= 2 && (i = i.substring(0, i.length - 1))
                            }
                            return {
                                topLevelDomain: i,
                                domain: r,
                                address: t.join("@")
                            }
                        }
                    }
                };
                void 0 !== e && e.exports && (e.exports = n.mailcheck), "undefined" != typeof window && (window.Mailcheck = n.mailcheck), "undefined" != typeof window && window.jQuery && (jQuery.fn.mailcheck = function(e) {
                    var t = this;
                    if (e.suggested) {
                        var r = e.suggested;
                        e.suggested = function(e) {
                            r(t, e)
                        }
                    }
                    if (e.empty) {
                        var o = e.empty;
                        e.empty = function() {
                            o.call(null, t)
                        }
                    }
                    e.email = this.val(), n.mailcheck.run(e)
                })
            },
            6221: function(e, t) {
                ! function() {
                    "use strict";
                    if ("undefined" != typeof window) {
                        var e, t;
                        (e = document.createElement("script")).src = "https://snippet.growsumo.com/growsumo.min.js", e.type = "text/javascript", e.async = "true", e.onload = e.onreadystatechange = function() {
                            var e = this.readyState;
                            if (!e || "complete" == e || "loaded" == e) try {
                                growsumo._initialize("pk_2MURg5tFoHdpERLfsXpSVlnLZbJDoUSN"), "function" == typeof growsumoInit && growsumoInit()
                            } catch (e) {}
                        }, (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t)
                    }
                }()
            },
            2109: function(e, t) {
                "undefined" != typeof window && (window.initSegmentConsentManager = function(e, t) {
                    var n = "consent-container";
                    window.consentManagerConfig = function(r) {
                        var o = r.React.createElement,
                            i = o("a", {
                                href: "https://webflow.com/legal/cookie-policy",
                                target: "_blank"
                            }, "Cookie Policy");
                        return {
                            container: "#" + n,
                            writeKey: e,
                            cdnHost: t,
                            shouldRequireConsent: function() {
                                return new Promise(e => {
                                    try {
                                        wf_utils.isLoggedIn(function(t) {
                                            return t ? e(!1) : e(r.inEU())
                                        })
                                    } catch {
                                        e(r.inEU())
                                    }
                                })
                            },
                            bannerContent: o("span", null, "We use cookies (and other similar technologies) to improve your experience on our site. By using this website you agree to our", " ", i, "."),
                            preferencesDialogTitle: "Cookie Preferences",
                            preferencesDialogContent: "We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.",
                            cancelDialogTitle: "Are you sure you want to cancel?",
                            cancelDialogContent: o("span", null, "Your preferences have not been saved. By continuing to use our website, you՚re agreeing to our", " ", i, "."),
                            defaultDestinationBehavior: "imply",
                            onError: function(e) {
                                console.error("SegmentConsentManager", e)
                            },
                            closeBehavior: function(e) {
                                return e
                            }
                        }
                    };
                    var r = document.createElement("div");
                    r.setAttribute("id", n);
                    var o = `#consent-container { position: fixed; left: 200px; right: 200px; bottom: 20px; z-index: 10000; }
      #consent-container > div { display: flex;  }
      #consent-container > div > div {
        margin: auto;
        padding: 10px 50px 10px 20px;
        background-color: #262626;
        color: white; border-radius: 0px;
      }
      @media screen and (max-width:991px) {
        #consent-container { left: 12px; right: 12px; bottom: 50px; }
        [data-consent-manager-dialog] [role="dialog"] {
          max-height: calc(100vh - 86px);
          margin-top: 70px;
        }
      }`,
                        i = document.createElement("style");
                    i.innerHTML = o;
                    var a = document.createElement("script");
                    a.setAttribute("src", "https://unpkg.com/@segment/consent-manager@4.5.1/standalone/consent-manager.js"), a.setAttribute("integrity", "sha384-6m1+pfvSflZ20rCXvmOQ340ZQ4K4peogarq/HMfzcCXyB6ngUjpm3PuCGwvQy87Y"), a.setAttribute("crossorigin", "anonymous"), a.setAttribute("defer", "defer");
                    var s = document.createDocumentFragment();
                    s.appendChild(r), s.appendChild(i), s.appendChild(a), document.body.appendChild(s), document.addEventListener("DOMContentLoaded", function() {
                        var e = document.querySelector("#show-cookie-preferences");
                        if (!e) return wf_datadog.reportBug("ConsentManagerError", "Cookie Preferences link is missing url: " + window.location.href);
                        e.addEventListener("click", function(e) {
                            "undefined" != typeof consentManager && (e.preventDefault(), consentManager.openConsentManager(), r.style.display = "none")
                        })
                    })
                })
            },
            2779: function(e, t) {
                var n;
                n = function(e, t) {
                    var n = window.analytics = window.analytics && window.analytics.push ? window.analytics : [];
                    if (!n.initialize && !n.invoked) {
                        n.invoked = !0, n.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"], n.factory = function(e) {
                            return function() {
                                var t = Array.prototype.slice.call(arguments);
                                return t.unshift(e), n.push(t), n
                            }
                        };
                        for (var r = 0; r < n.methods.length; r++) {
                            var o = n.methods[r];
                            n[o] = n.factory(o)
                        }
                        n.load = function(e, r) {
                            var o = document.createElement("script");
                            o.type = "text/javascript", o.async = !0, o.src = "https://" + t + "/analytics.js/v1/" + e + "/analytics.min.js";
                            var i = document.getElementsByTagName("script")[0];
                            i.parentNode.insertBefore(o, i), n._loadOptions = r
                        }, n._writeKey = e, n._cdn = "https://" + t, n.SNIPPET_VERSION = "4.15.3", n.page()
                    }
                }, void 0 !== e && e.exports && (e.exports = n), "undefined" != typeof window && (window.initSegmentAnalytics = n)
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.d = function(e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n(201), n(2779), n(2109), n(7138), n(1094), n(9166), n(3679), n(6775), n(8223), n(6629), n(5468), n(1571), n(2166), n(6221)
}();
//# sourceMappingURL=webflow-marketing-body.min.js.map