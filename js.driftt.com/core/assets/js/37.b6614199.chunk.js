(window.webpackJsonp = window.webpackJsonp || []).push([
    [37], {
        "+nxv": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return initAndBind
            });
            var r = n("zgdO"),
                i = n("usiZ");

            function initAndBind(e, t) {
                !0 === t.debug && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.c.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                var n = Object(i.a)(),
                    s = n.getScope();
                s && s.update(t.initialScope);
                var a = new e(t);
                n.bindClient(a)
            }
        },
        "5g57": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return v
            }), n.d(t, "b", function() {
                return addGlobalEventProcessor
            });
            var r = n("WwEg"),
                i = n("jm9a"),
                s = n("nfbA"),
                a = n("uIJS"),
                o = n("wQh9"),
                c = n("26VM"),
                u = n("xqFT"),
                _ = n("bTzN"),
                d = n("zgdO"),
                l = n("Iwrg"),
                p = n("2nP+"),
                f = n("Te+l"),
                v = function() {
                    function Scope() {
                        Object(a.a)(this, Scope), this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                    }
                    return Object(o.a)(Scope, [{
                        key: "addScopeListener",
                        value: function addScopeListener(e) {
                            this._scopeListeners.push(e)
                        }
                    }, {
                        key: "addEventProcessor",
                        value: function addEventProcessor(e) {
                            return this._eventProcessors.push(e), this
                        }
                    }, {
                        key: "setUser",
                        value: function setUser(e) {
                            return this._user = e || {}, this._session && Object(f.c)(this._session, {
                                user: e
                            }), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "getUser",
                        value: function getUser() {
                            return this._user
                        }
                    }, {
                        key: "getRequestSession",
                        value: function getRequestSession() {
                            return this._requestSession
                        }
                    }, {
                        key: "setRequestSession",
                        value: function setRequestSession(e) {
                            return this._requestSession = e, this
                        }
                    }, {
                        key: "setTags",
                        value: function setTags(e) {
                            return this._tags = Object(s.a)(Object(s.a)({}, this._tags), e), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setTag",
                        value: function setTag(e, t) {
                            return this._tags = Object(s.a)(Object(s.a)({}, this._tags), {}, Object(i.a)({}, e, t)), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setExtras",
                        value: function setExtras(e) {
                            return this._extra = Object(s.a)(Object(s.a)({}, this._extra), e), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setExtra",
                        value: function setExtra(e, t) {
                            return this._extra = Object(s.a)(Object(s.a)({}, this._extra), {}, Object(i.a)({}, e, t)), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setFingerprint",
                        value: function setFingerprint(e) {
                            return this._fingerprint = e, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setLevel",
                        value: function setLevel(e) {
                            return this._level = e, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setTransactionName",
                        value: function setTransactionName(e) {
                            return this._transactionName = e, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setContext",
                        value: function setContext(e, t) {
                            return null === t ? delete this._contexts[e] : this._contexts = Object(s.a)(Object(s.a)({}, this._contexts), {}, Object(i.a)({}, e, t)), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setSpan",
                        value: function setSpan(e) {
                            return this._span = e, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "getSpan",
                        value: function getSpan() {
                            return this._span
                        }
                    }, {
                        key: "getTransaction",
                        value: function getTransaction() {
                            var e = this.getSpan();
                            return e && e.transaction
                        }
                    }, {
                        key: "setSession",
                        value: function setSession(e) {
                            return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "getSession",
                        value: function getSession() {
                            return this._session
                        }
                    }, {
                        key: "update",
                        value: function update(e) {
                            if (!e) return this;
                            if ("function" === typeof e) {
                                var t = e(this);
                                return t instanceof Scope ? t : this
                            }
                            return e instanceof Scope ? (this._tags = Object(s.a)(Object(s.a)({}, this._tags), e._tags), this._extra = Object(s.a)(Object(s.a)({}, this._extra), e._extra), this._contexts = Object(s.a)(Object(s.a)({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : Object(c.i)(e) && (e = e, this._tags = Object(s.a)(Object(s.a)({}, this._tags), e.tags), this._extra = Object(s.a)(Object(s.a)({}, this._extra), e.extra), this._contexts = Object(s.a)(Object(s.a)({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
                        }
                    }, {
                        key: "clear",
                        value: function clear() {
                            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
                        }
                    }, {
                        key: "addBreadcrumb",
                        value: function addBreadcrumb(e, t) {
                            var n = "number" === typeof t ? t : 100;
                            if (n <= 0) return this;
                            var i = Object(s.a)({
                                timestamp: Object(u.a)()
                            }, e);
                            return this._breadcrumbs = [].concat(Object(r.a)(this._breadcrumbs), [i]).slice(-n), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "clearBreadcrumbs",
                        value: function clearBreadcrumbs() {
                            return this._breadcrumbs = [], this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "addAttachment",
                        value: function addAttachment(e) {
                            return this._attachments.push(e), this
                        }
                    }, {
                        key: "getAttachments",
                        value: function getAttachments() {
                            return this._attachments
                        }
                    }, {
                        key: "clearAttachments",
                        value: function clearAttachments() {
                            return this._attachments = [], this
                        }
                    }, {
                        key: "applyToEvent",
                        value: function applyToEvent(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this._extra && Object.keys(this._extra).length && (e.extra = Object(s.a)(Object(s.a)({}, this._extra), e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = Object(s.a)(Object(s.a)({}, this._tags), e.tags)), this._user && Object.keys(this._user).length && (e.user = Object(s.a)(Object(s.a)({}, this._user), e.user)), this._contexts && Object.keys(this._contexts).length && (e.contexts = Object(s.a)(Object(s.a)({}, this._contexts), e.contexts)), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                                e.contexts = Object(s.a)({
                                    trace: this._span.getTraceContext()
                                }, e.contexts);
                                var n = this._span.transaction && this._span.transaction.name;
                                n && (e.tags = Object(s.a)({
                                    transaction: n
                                }, e.tags))
                            }
                            return this._applyFingerprint(e), e.breadcrumbs = [].concat(Object(r.a)(e.breadcrumbs || []), Object(r.a)(this._breadcrumbs)), e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = Object(s.a)(Object(s.a)({}, e.sdkProcessingMetadata), this._sdkProcessingMetadata), this._notifyEventProcessors([].concat(Object(r.a)(getGlobalEventProcessors()), Object(r.a)(this._eventProcessors)), e, t)
                        }
                    }, {
                        key: "setSDKProcessingMetadata",
                        value: function setSDKProcessingMetadata(e) {
                            return this._sdkProcessingMetadata = Object(s.a)(Object(s.a)({}, this._sdkProcessingMetadata), e), this
                        }
                    }, {
                        key: "_notifyEventProcessors",
                        value: function _notifyEventProcessors(e, t, n) {
                            var r = this,
                                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                            return new _.a(function(a, o) {
                                var u = e[i];
                                if (null === t || "function" !== typeof u) a(t);
                                else {
                                    var _ = u(Object(s.a)({}, t), n);
                                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.id && null === _ && d.c.log('Event processor "'.concat(u.id, '" dropped event')), Object(c.n)(_) ? _.then(function(t) {
                                        return r._notifyEventProcessors(e, t, n, i + 1).then(a)
                                    }).then(null, o) : r._notifyEventProcessors(e, _, n, i + 1).then(a).then(null, o)
                                }
                            })
                        }
                    }, {
                        key: "_notifyScopeListeners",
                        value: function _notifyScopeListeners() {
                            var e = this;
                            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(function(t) {
                                t(e)
                            }), this._notifyingListeners = !1)
                        }
                    }, {
                        key: "_applyFingerprint",
                        value: function _applyFingerprint(e) {
                            e.fingerprint = e.fingerprint ? Object(l.c)(e.fingerprint) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
                        }
                    }], [{
                        key: "clone",
                        value: function clone(e) {
                            var t = new Scope;
                            return e && (t._breadcrumbs = Object(r.a)(e._breadcrumbs), t._tags = Object(s.a)({}, e._tags), t._extra = Object(s.a)({}, e._extra), t._contexts = Object(s.a)({}, e._contexts), t._user = e._user, t._level = e._level, t._span = e._span, t._session = e._session, t._transactionName = e._transactionName, t._fingerprint = e._fingerprint, t._eventProcessors = Object(r.a)(e._eventProcessors), t._requestSession = e._requestSession, t._attachments = Object(r.a)(e._attachments)), t
                        }
                    }]), Scope
                }();

            function getGlobalEventProcessors() {
                return Object(p.b)("globalEventProcessors", function() {
                    return []
                })
            }

            function addGlobalEventProcessor(e) {
                getGlobalEventProcessors().push(e)
            }
        },
        IgB6: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return captureException
            }), n.d(t, "b", function() {
                return configureScope
            }), n.d(t, "c", function() {
                return withScope
            });
            n("nfbA");
            var r = n("usiZ");

            function captureException(e, t) {
                return Object(r.a)().captureException(e, {
                    captureContext: t
                })
            }

            function configureScope(e) {
                Object(r.a)().configureScope(e)
            }

            function withScope(e) {
                Object(r.a)().withScope(e)
            }
        },
        LfGp: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = "7.15.0"
        },
        "Te+l": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return closeSession
            }), n.d(t, "b", function() {
                return makeSession
            }), n.d(t, "c", function() {
                return updateSession
            });
            var r = n("xqFT"),
                i = n("Iwrg"),
                s = n("mekd");

            function makeSession(e) {
                var t = Object(r.b)(),
                    n = {
                        sid: Object(i.f)(),
                        init: !0,
                        timestamp: t,
                        started: t,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: function toJSON() {
                            return function sessionToJSON(e) {
                                return Object(s.c)({
                                    sid: "".concat(e.sid),
                                    init: e.init,
                                    started: new Date(1e3 * e.started).toISOString(),
                                    timestamp: new Date(1e3 * e.timestamp).toISOString(),
                                    status: e.status,
                                    errors: e.errors,
                                    did: "number" === typeof e.did || "string" === typeof e.did ? "".concat(e.did) : void 0,
                                    duration: e.duration,
                                    attrs: {
                                        release: e.release,
                                        environment: e.environment,
                                        ip_address: e.ipAddress,
                                        user_agent: e.userAgent
                                    }
                                })
                            }(n)
                        }
                    };
                return e && updateSession(n, e), n
            }

            function updateSession(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || Object(r.b)(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : Object(i.f)()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = "".concat(t.did)), "number" === typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
                else if ("number" === typeof t.duration) e.duration = t.duration;
                else {
                    var n = e.timestamp - e.started;
                    e.duration = n >= 0 ? n : 0
                }
                t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" === typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
            }

            function closeSession(e, t) {
                var n = {};
                t ? n = {
                    status: t
                } : "ok" === e.status && (n = {
                    status: "exited"
                }), updateSession(e, n)
            }
        },
        a4gb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return getIntegrationsToSetup
            }), n.d(t, "b", function() {
                return setupIntegrations
            });
            var r = n("s8DI"),
                i = n("WwEg"),
                s = n("Iwrg"),
                a = n("zgdO"),
                o = n("usiZ"),
                c = n("5g57"),
                u = [];

            function getIntegrationsToSetup(e) {
                var t = e.defaultIntegrations || [],
                    n = e.integrations;
                t.forEach(function(e) {
                    e.isDefaultInstance = !0
                });
                var a = function filterDuplicates(e) {
                        var t = {};
                        return e.forEach(function(e) {
                            var n = e.name,
                                r = t[n];
                            r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                        }), Object.values(t)
                    }(Array.isArray(n) ? [].concat(Object(i.a)(t), Object(i.a)(n)) : "function" === typeof n ? Object(s.c)(n(t)) : t),
                    o = a.findIndex(function(e) {
                        return "Debug" === e.name
                    });
                if (-1 !== o) {
                    var c = a.splice(o, 1),
                        u = Object(r.a)(c, 1)[0];
                    a.push(u)
                }
                return a
            }

            function setupIntegrations(e) {
                var t = {};
                return e.forEach(function(e) {
                    t[e.name] = e, -1 === u.indexOf(e.name) && (e.setupOnce(c.b, o.a), u.push(e.name), ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.c.log("Integration installed: ".concat(e.name)))
                }), t
            }
        },
        cgfC: function(e, t, n) {
            "use strict";
            var r = {};
            n.r(r), n.d(r, "FunctionToString", function() {
                return c
            }), n.d(r, "InboundFilters", function() {
                return f
            });
            var i, s = n("uIJS"),
                a = n("wQh9"),
                o = n("mekd"),
                c = function() {
                    function FunctionToString() {
                        Object(s.a)(this, FunctionToString), FunctionToString.prototype.__init.call(this)
                    }
                    return Object(a.a)(FunctionToString, [{
                        key: "__init",
                        value: function __init() {
                            this.name = FunctionToString.id
                        }
                    }, {
                        key: "setupOnce",
                        value: function setupOnce() {
                            i = Function.prototype.toString, Function.prototype.toString = function() {
                                for (var e = Object(o.f)(this) || this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                return i.apply(e, n)
                            }
                        }
                    }], [{
                        key: "__initStatic",
                        value: function __initStatic() {
                            this.id = "FunctionToString"
                        }
                    }]), FunctionToString
                }();
            c.__initStatic();
            var u = n("WwEg"),
                _ = n("zgdO"),
                d = n("Iwrg"),
                l = n("cJHJ"),
                p = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                f = function() {
                    function InboundFilters() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Object(s.a)(this, InboundFilters), this._options = e, InboundFilters.prototype.__init.call(this)
                    }
                    return Object(a.a)(InboundFilters, [{
                        key: "__init",
                        value: function __init() {
                            this.name = InboundFilters.id
                        }
                    }], [{
                        key: "__initStatic",
                        value: function __initStatic() {
                            this.id = "InboundFilters"
                        }
                    }]), Object(a.a)(InboundFilters, [{
                        key: "setupOnce",
                        value: function setupOnce(e, t) {
                            var n = function eventProcess(e) {
                                var n = t();
                                if (n) {
                                    var r = n.getIntegration(InboundFilters);
                                    if (r) {
                                        var i = n.getClient(),
                                            s = i ? i.getOptions() : {};
                                        return function _shouldDropEvent(e, t) {
                                            if (t.ignoreInternal && function _isSentryError(e) {
                                                    try {
                                                        return "SentryError" === e.exception.values[0].type
                                                    } catch (t) {}
                                                    return !1
                                                }(e)) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.c.warn("Event dropped due to being internal Sentry Error.\nEvent: ".concat(Object(d.e)(e))), !0;
                                            if (function _isIgnoredError(e, t) {
                                                    if (!t || !t.length) return !1;
                                                    return function _getPossibleEventMessages(e) {
                                                        if (e.message) return [e.message];
                                                        if (e.exception) try {
                                                            var t = e.exception.values && e.exception.values[0] || {},
                                                                n = t.type,
                                                                r = void 0 === n ? "" : n,
                                                                i = t.value,
                                                                s = void 0 === i ? "" : i;
                                                            return ["".concat(s), "".concat(r, ": ").concat(s)]
                                                        } catch (a) {
                                                            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.c.error("Cannot extract message for event ".concat(Object(d.e)(e))), []
                                                        }
                                                        return []
                                                    }(e).some(function(e) {
                                                        return t.some(function(t) {
                                                            return Object(l.a)(e, t)
                                                        })
                                                    })
                                                }(e, t.ignoreErrors)) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.c.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: ".concat(Object(d.e)(e))), !0;
                                            if (function _isDeniedUrl(e, t) {
                                                    if (!t || !t.length) return !1;
                                                    var n = _getEventFilterUrl(e);
                                                    return !!n && t.some(function(e) {
                                                        return Object(l.a)(n, e)
                                                    })
                                                }(e, t.denyUrls)) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.c.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: ".concat(Object(d.e)(e), ".\nUrl: ").concat(_getEventFilterUrl(e))), !0;
                                            if (! function _isAllowedUrl(e, t) {
                                                    if (!t || !t.length) return !0;
                                                    var n = _getEventFilterUrl(e);
                                                    return !n || t.some(function(e) {
                                                        return Object(l.a)(n, e)
                                                    })
                                                }(e, t.allowUrls)) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.c.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: ".concat(Object(d.e)(e), ".\nUrl: ").concat(_getEventFilterUrl(e))), !0;
                                            return !1
                                        }(e, function _mergeOptions() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            return {
                                                allowUrls: [].concat(Object(u.a)(e.allowUrls || []), Object(u.a)(t.allowUrls || [])),
                                                denyUrls: [].concat(Object(u.a)(e.denyUrls || []), Object(u.a)(t.denyUrls || [])),
                                                ignoreErrors: [].concat(Object(u.a)(e.ignoreErrors || []), Object(u.a)(t.ignoreErrors || []), p),
                                                ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                                            }
                                        }(r._options, s)) ? null : e
                                    }
                                }
                                return e
                            };
                            n.id = this.name, e(n)
                        }
                    }]), InboundFilters
                }();

            function _getEventFilterUrl(e) {
                try {
                    var t;
                    try {
                        t = e.exception.values[0].stacktrace.frames
                    } catch (n) {}
                    return t ? function _getLastValidUrl() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length - 1; t >= 0; t--) {
                            var n = e[t];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(t) : null
                } catch (r) {
                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.c.error("Cannot extract url for event ".concat(Object(d.e)(e))), null
                }
            }
            f.__initStatic(), n.d(t, "a", function() {
                return r
            })
        },
        eKAD: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return createTransport
            });
            var r = n("IZJC"),
                i = n("8dVd"),
                s = n("zqhj"),
                a = n("bTzN"),
                o = n("zgdO"),
                c = n("5CQL"),
                u = 30;

            function createTransport(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object(r.a)(e.bufferSize || u),
                    _ = {};
                return {
                    send: function send(r) {
                        var u = [];
                        if (Object(i.e)(r, function(t, n) {
                                var r = Object(i.d)(n);
                                Object(s.a)(_, r) ? e.recordDroppedEvent("ratelimit_backoff", r) : u.push(t)
                            }), 0 === u.length) return Object(a.c)();
                        var d = Object(i.c)(r[0], u),
                            l = function recordEnvelopeLoss(t) {
                                Object(i.e)(d, function(n, r) {
                                    e.recordDroppedEvent(t, Object(i.d)(r))
                                })
                            };
                        return n.add(function requestTask() {
                            return t({
                                body: Object(i.f)(d, e.textEncoder)
                            }).then(function(e) {
                                void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.c.warn("Sentry responded with status code ".concat(e.statusCode, " to sent event.")), _ = Object(s.b)(_, e)
                            }, function(e) {
                                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.c.error("Failed while sending event:", e), l("network_error")
                            })
                        }).then(function(e) {
                            return e
                        }, function(e) {
                            if (e instanceof c.a) return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.c.error("Skipped sending event because buffer is full."), l("queue_overflow"), Object(a.c)();
                            throw e
                        })
                    },
                    flush: function flush(e) {
                        return n.drain(e)
                    }
                }
            }
        },
        nb4r: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return getEnvelopeEndpointWithUrlEncodedAuth
            }), n.d(t, "b", function() {
                return getReportDialogEndpoint
            });
            var r = n("nfbA"),
                i = n("mekd"),
                s = n("MiOA"),
                a = "7";

            function getBaseApiEndpoint(e) {
                var t = e.protocol ? "".concat(e.protocol, ":") : "",
                    n = e.port ? ":".concat(e.port) : "";
                return "".concat(t, "//").concat(e.host).concat(n).concat(e.path ? "/".concat(e.path) : "", "/api/")
            }

            function getEnvelopeEndpointWithUrlEncodedAuth(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = "string" === typeof t ? t : t.tunnel,
                    s = "string" !== typeof t && t._metadata ? t._metadata.sdk : void 0;
                return n || "".concat(function _getIngestEndpoint(e) {
                    return "".concat(getBaseApiEndpoint(e)).concat(e.projectId, "/envelope/")
                }(e), "?").concat(function _encodedAuth(e, t) {
                    return Object(i.h)(Object(r.a)({
                        sentry_key: e.publicKey,
                        sentry_version: a
                    }, t && {
                        sentry_client: "".concat(t.name, "/").concat(t.version)
                    }))
                }(e, s))
            }

            function getReportDialogEndpoint(e, t) {
                var n = Object(s.b)(e),
                    r = "".concat(getBaseApiEndpoint(n), "embed/error-page/"),
                    i = "dsn=".concat(Object(s.a)(n));
                for (var a in t)
                    if ("dsn" !== a)
                        if ("user" === a) {
                            var o = t.user;
                            if (!o) continue;
                            o.name && (i += "&name=".concat(encodeURIComponent(o.name))), o.email && (i += "&email=".concat(encodeURIComponent(o.email)))
                        } else i += "&".concat(encodeURIComponent(a), "=").concat(encodeURIComponent(t[a]));
                return "".concat(r, "?").concat(i)
            }
        },
        uHEx: function(e, t, n) {
            "use strict";
            var r = n("s8DI"),
                i = n("WwEg"),
                s = n("nfbA"),
                a = n("uIJS"),
                o = n("wQh9"),
                c = n("MiOA"),
                u = n("zgdO"),
                _ = n("Iwrg"),
                d = n("26VM"),
                l = n("bTzN"),
                p = n("8dVd"),
                f = n("xqFT"),
                v = n("3QMb"),
                h = n("cJHJ"),
                g = n("5CQL"),
                b = n("nb4r"),
                E = n("mekd");

            function getSdkMetadataForEnvelopeHeader(e) {
                if (e && e.sdk) {
                    var t = e.sdk;
                    return {
                        name: t.name,
                        version: t.version
                    }
                }
            }

            function createEventEnvelope(e, t, n, r) {
                var a = getSdkMetadataForEnvelopeHeader(n),
                    o = e.type || "event";
                ! function enhanceEventWithSdkInfo(e, t) {
                    return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [].concat(Object(i.a)(e.sdk.integrations || []), Object(i.a)(t.integrations || [])), e.sdk.packages = [].concat(Object(i.a)(e.sdk.packages || []), Object(i.a)(t.packages || [])), e) : e
                }(e, n && n.sdk);
                var u = function createEventEnvelopeHeaders(e, t, n, r) {
                    var i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                    return Object(s.a)(Object(s.a)(Object(s.a)({
                        event_id: e.event_id,
                        sent_at: (new Date).toISOString()
                    }, t && {
                        sdk: t
                    }), !!n && {
                        dsn: Object(c.a)(r)
                    }), "transaction" === e.type && i && {
                        trace: Object(E.c)(Object(s.a)({}, i))
                    })
                }(e, a, r, t);
                delete e.sdkProcessingMetadata;
                var _ = [{
                    type: o
                }, e];
                return Object(p.c)(u, [_])
            }
            var y = n("a4gb"),
                O = n("5g57"),
                S = n("Te+l");
            n.d(t, "a", function() {
                return j
            });
            var m = "Not capturing exception because it's already been captured.",
                j = function() {
                    function BaseClient(e) {
                        if (Object(a.a)(this, BaseClient), BaseClient.prototype.__init.call(this), BaseClient.prototype.__init2.call(this), BaseClient.prototype.__init3.call(this), BaseClient.prototype.__init4.call(this), this._options = e, e.dsn) {
                            this._dsn = Object(c.b)(e.dsn);
                            var t = Object(b.a)(this._dsn, e);
                            this._transport = e.transport(Object(s.a)(Object(s.a)({
                                recordDroppedEvent: this.recordDroppedEvent.bind(this)
                            }, e.transportOptions), {}, {
                                url: t
                            }))
                        } else("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.c.warn("No DSN provided, client will not do anything.")
                    }
                    return Object(o.a)(BaseClient, [{
                        key: "__init",
                        value: function __init() {
                            this._integrations = {}
                        }
                    }, {
                        key: "__init2",
                        value: function __init2() {
                            this._integrationsInitialized = !1
                        }
                    }, {
                        key: "__init3",
                        value: function __init3() {
                            this._numProcessing = 0
                        }
                    }, {
                        key: "__init4",
                        value: function __init4() {
                            this._outcomes = {}
                        }
                    }]), Object(o.a)(BaseClient, [{
                        key: "captureException",
                        value: function captureException(e, t, n) {
                            var r = this;
                            if (!Object(_.d)(e)) {
                                var i = t && t.event_id;
                                return this._process(this.eventFromException(e, t).then(function(e) {
                                    return r._captureEvent(e, t, n)
                                }).then(function(e) {
                                    i = e
                                })), i
                            }("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.c.log(m)
                        }
                    }, {
                        key: "captureMessage",
                        value: function captureMessage(e, t, n, r) {
                            var i = this,
                                s = n && n.event_id,
                                a = Object(d.j)(e) ? this.eventFromMessage(String(e), t, n) : this.eventFromException(e, n);
                            return this._process(a.then(function(e) {
                                return i._captureEvent(e, n, r)
                            }).then(function(e) {
                                s = e
                            })), s
                        }
                    }, {
                        key: "captureEvent",
                        value: function captureEvent(e, t, n) {
                            if (!(t && t.originalException && Object(_.d)(t.originalException))) {
                                var r = t && t.event_id;
                                return this._process(this._captureEvent(e, t, n).then(function(e) {
                                    r = e
                                })), r
                            }("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.c.log(m)
                        }
                    }, {
                        key: "captureSession",
                        value: function captureSession(e) {
                            this._isEnabled() ? "string" !== typeof e.release ? ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.c.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Object(S.c)(e, {
                                init: !1
                            })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.c.warn("SDK not enabled, will not capture session.")
                        }
                    }, {
                        key: "getDsn",
                        value: function getDsn() {
                            return this._dsn
                        }
                    }, {
                        key: "getOptions",
                        value: function getOptions() {
                            return this._options
                        }
                    }, {
                        key: "getTransport",
                        value: function getTransport() {
                            return this._transport
                        }
                    }, {
                        key: "flush",
                        value: function flush(e) {
                            var t = this._transport;
                            return t ? this._isClientDoneProcessing(e).then(function(n) {
                                return t.flush(e).then(function(e) {
                                    return n && e
                                })
                            }) : Object(l.c)(!0)
                        }
                    }, {
                        key: "close",
                        value: function close(e) {
                            var t = this;
                            return this.flush(e).then(function(e) {
                                return t.getOptions().enabled = !1, e
                            })
                        }
                    }, {
                        key: "setupIntegrations",
                        value: function setupIntegrations() {
                            this._isEnabled() && !this._integrationsInitialized && (this._integrations = Object(y.b)(this._options.integrations), this._integrationsInitialized = !0)
                        }
                    }, {
                        key: "getIntegrationById",
                        value: function getIntegrationById(e) {
                            return this._integrations[e]
                        }
                    }, {
                        key: "getIntegration",
                        value: function getIntegration(e) {
                            try {
                                return this._integrations[e.id] || null
                            } catch (t) {
                                return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.c.warn("Cannot retrieve integration ".concat(e.id, " from the current Client")), null
                            }
                        }
                    }, {
                        key: "sendEvent",
                        value: function sendEvent(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this._dsn) {
                                var n = createEventEnvelope(e, this._dsn, this._options._metadata, this._options.tunnel),
                                    r = !0,
                                    i = !1,
                                    s = void 0;
                                try {
                                    for (var a, o = (t.attachments || [])[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                                        var c = a.value;
                                        n = Object(p.a)(n, Object(p.b)(c, this._options.transportOptions && this._options.transportOptions.textEncoder))
                                    }
                                } catch (u) {
                                    i = !0, s = u
                                } finally {
                                    try {
                                        r || null == o.return || o.return()
                                    } finally {
                                        if (i) throw s
                                    }
                                }
                                this._sendEnvelope(n)
                            }
                        }
                    }, {
                        key: "sendSession",
                        value: function sendSession(e) {
                            if (this._dsn) {
                                var t = function createSessionEnvelope(e, t, n, r) {
                                    var i = getSdkMetadataForEnvelopeHeader(n),
                                        a = Object(s.a)(Object(s.a)({
                                            sent_at: (new Date).toISOString()
                                        }, i && {
                                            sdk: i
                                        }), !!r && {
                                            dsn: Object(c.a)(t)
                                        }),
                                        o = "aggregates" in e ? [{
                                            type: "sessions"
                                        }, e] : [{
                                            type: "session"
                                        }, e];
                                    return Object(p.c)(a, [o])
                                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                                this._sendEnvelope(t)
                            }
                        }
                    }, {
                        key: "recordDroppedEvent",
                        value: function recordDroppedEvent(e, t) {
                            if (this._options.sendClientReports) {
                                var n = "".concat(e, ":").concat(t);
                                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.c.log('Adding outcome: "'.concat(n, '"')), this._outcomes[n] = this._outcomes[n] + 1 || 1
                            }
                        }
                    }, {
                        key: "_updateSessionFromEvent",
                        value: function _updateSessionFromEvent(e, t) {
                            var n = !1,
                                r = !1,
                                i = t.exception && t.exception.values;
                            if (i) {
                                r = !0;
                                var a = !0,
                                    o = !1,
                                    c = void 0;
                                try {
                                    for (var u, _ = i[Symbol.iterator](); !(a = (u = _.next()).done); a = !0) {
                                        var d = u.value.mechanism;
                                        if (d && !1 === d.handled) {
                                            n = !0;
                                            break
                                        }
                                    }
                                } catch (p) {
                                    o = !0, c = p
                                } finally {
                                    try {
                                        a || null == _.return || _.return()
                                    } finally {
                                        if (o) throw c
                                    }
                                }
                            }
                            var l = "ok" === e.status;
                            (l && 0 === e.errors || l && n) && (Object(S.c)(e, Object(s.a)(Object(s.a)({}, n && {
                                status: "crashed"
                            }), {}, {
                                errors: e.errors || Number(r || n)
                            })), this.captureSession(e))
                        }
                    }, {
                        key: "_isClientDoneProcessing",
                        value: function _isClientDoneProcessing(e) {
                            var t = this;
                            return new l.a(function(n) {
                                var r = 0,
                                    i = setInterval(function() {
                                        0 == t._numProcessing ? (clearInterval(i), n(!0)) : (r += 1, e && r >= e && (clearInterval(i), n(!1)))
                                    }, 1)
                            })
                        }
                    }, {
                        key: "_isEnabled",
                        value: function _isEnabled() {
                            return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                        }
                    }, {
                        key: "_prepareEvent",
                        value: function _prepareEvent(e, t, n) {
                            var r = this,
                                a = this.getOptions(),
                                o = a.normalizeDepth,
                                c = void 0 === o ? 3 : o,
                                u = a.normalizeMaxBreadth,
                                d = void 0 === u ? 1e3 : u,
                                p = Object(s.a)(Object(s.a)({}, e), {}, {
                                    event_id: e.event_id || t.event_id || Object(_.f)(),
                                    timestamp: e.timestamp || Object(f.a)()
                                });
                            this._applyClientOptions(p), this._applyIntegrationsMetadata(p);
                            var v = n;
                            t.captureContext && (v = O.a.clone(v).update(t.captureContext));
                            var h = Object(l.c)(p);
                            if (v) {
                                var g = [].concat(Object(i.a)(t.attachments || []), Object(i.a)(v.getAttachments()));
                                g.length && (t.attachments = g), h = v.applyToEvent(p, t)
                            }
                            return h.then(function(e) {
                                return "number" === typeof c && c > 0 ? r._normalizeEvent(e, c, d) : e
                            })
                        }
                    }, {
                        key: "_normalizeEvent",
                        value: function _normalizeEvent(e, t, n) {
                            if (!e) return null;
                            var r = Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({}, e), e.breadcrumbs && {
                                breadcrumbs: e.breadcrumbs.map(function(e) {
                                    return Object(s.a)(Object(s.a)({}, e), e.data && {
                                        data: Object(v.a)(e.data, t, n)
                                    })
                                })
                            }), e.user && {
                                user: Object(v.a)(e.user, t, n)
                            }), e.contexts && {
                                contexts: Object(v.a)(e.contexts, t, n)
                            }), e.extra && {
                                extra: Object(v.a)(e.extra, t, n)
                            });
                            return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = Object(v.a)(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(function(e) {
                                return e.data && (e.data = Object(v.a)(e.data, t, n)), e
                            })), r
                        }
                    }, {
                        key: "_applyClientOptions",
                        value: function _applyClientOptions(e) {
                            var t = this.getOptions(),
                                n = t.environment,
                                r = t.release,
                                i = t.dist,
                                s = t.maxValueLength,
                                a = void 0 === s ? 250 : s;
                            "environment" in e || (e.environment = "environment" in t ? n : "production"), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== i && (e.dist = i), e.message && (e.message = Object(h.d)(e.message, a));
                            var o = e.exception && e.exception.values && e.exception.values[0];
                            o && o.value && (o.value = Object(h.d)(o.value, a));
                            var c = e.request;
                            c && c.url && (c.url = Object(h.d)(c.url, a))
                        }
                    }, {
                        key: "_applyIntegrationsMetadata",
                        value: function _applyIntegrationsMetadata(e) {
                            var t = Object.keys(this._integrations);
                            t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [].concat(Object(i.a)(e.sdk.integrations || []), Object(i.a)(t)))
                        }
                    }, {
                        key: "_captureEvent",
                        value: function _captureEvent(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            return this._processEvent(e, t, n).then(function(e) {
                                return e.event_id
                            }, function(e) {
                                if ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                                    var t = e;
                                    "log" === t.logLevel ? u.c.log(t.message) : u.c.warn(t)
                                }
                            })
                        }
                    }, {
                        key: "_processEvent",
                        value: function _processEvent(e, t, n) {
                            var r = this,
                                a = this.getOptions(),
                                o = a.beforeSend,
                                c = a.sampleRate;
                            if (!this._isEnabled()) return Object(l.b)(new g.a("SDK not enabled, will not capture event.", "log"));
                            var u = "transaction" === e.type;
                            return !u && "number" === typeof c && Math.random() > c ? (this.recordDroppedEvent("sample_rate", "error"), Object(l.b)(new g.a("Discarding event because it's not included in the random sample (sampling rate = ".concat(c, ")"), "log"))) : this._prepareEvent(e, t, n).then(function(n) {
                                if (null === n) throw r.recordDroppedEvent("event_processor", e.type || "error"), new g.a("An event processor returned null, will not send event.", "log");
                                return t.data && !0 === t.data.__sentry__ || u || !o ? n : function _ensureBeforeSendRv(e) {
                                    var t = "`beforeSend` method has to return `null` or a valid event.";
                                    if (Object(d.n)(e)) return e.then(function(e) {
                                        if (!Object(d.i)(e) && null !== e) throw new g.a(t);
                                        return e
                                    }, function(e) {
                                        throw new g.a("beforeSend rejected with ".concat(e))
                                    });
                                    if (!Object(d.i)(e) && null !== e) throw new g.a(t);
                                    return e
                                }(o(n, t))
                            }).then(function(a) {
                                if (null === a) throw r.recordDroppedEvent("before_send", e.type || "error"), new g.a("`beforeSend` returned `null`, will not send event.", "log");
                                var o = n && n.getSession();
                                !u && o && r._updateSessionFromEvent(o, a);
                                var c = a.transaction_info;
                                if (u && c && a.transaction !== e.transaction) {
                                    a.transaction_info = Object(s.a)(Object(s.a)({}, c), {}, {
                                        source: "custom",
                                        changes: [].concat(Object(i.a)(c.changes), [{
                                            source: "custom",
                                            timestamp: a.timestamp,
                                            propagations: c.propagations
                                        }])
                                    })
                                }
                                return r.sendEvent(a, t), a
                            }).then(null, function(e) {
                                if (e instanceof g.a) throw e;
                                throw r.captureException(e, {
                                    data: {
                                        __sentry__: !0
                                    },
                                    originalException: e
                                }), new g.a("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(e))
                            })
                        }
                    }, {
                        key: "_process",
                        value: function _process(e) {
                            var t = this;
                            this._numProcessing += 1, e.then(function(e) {
                                return t._numProcessing -= 1, e
                            }, function(e) {
                                return t._numProcessing -= 1, e
                            })
                        }
                    }, {
                        key: "_sendEnvelope",
                        value: function _sendEnvelope(e) {
                            this._transport && this._dsn ? this._transport.send(e).then(null, function(e) {
                                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.c.error("Error while sending event:", e)
                            }) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.c.error("Transport disabled")
                        }
                    }, {
                        key: "_clearOutcomes",
                        value: function _clearOutcomes() {
                            var e = this._outcomes;
                            return this._outcomes = {}, Object.keys(e).map(function(t) {
                                var n = t.split(":"),
                                    i = Object(r.a)(n, 2);
                                return {
                                    reason: i[0],
                                    category: i[1],
                                    quantity: e[t]
                                }
                            })
                        }
                    }]), BaseClient
                }()
        },
        usiZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return getCurrentHub
            });
            var r = n("nfbA"),
                i = n("uIJS"),
                s = n("wQh9"),
                a = n("Iwrg"),
                o = n("xqFT"),
                c = n("zgdO"),
                u = n("2nP+"),
                _ = n("Xywm"),
                d = n("5g57"),
                l = n("Te+l"),
                p = 4,
                f = function() {
                    function Hub(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.a,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
                        Object(i.a)(this, Hub), this._version = n, Hub.prototype.__init.call(this), this.getStackTop().scope = t, e && this.bindClient(e)
                    }
                    return Object(s.a)(Hub, [{
                        key: "__init",
                        value: function __init() {
                            this._stack = [{}]
                        }
                    }]), Object(s.a)(Hub, [{
                        key: "isOlderThan",
                        value: function isOlderThan(e) {
                            return this._version < e
                        }
                    }, {
                        key: "bindClient",
                        value: function bindClient(e) {
                            this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
                        }
                    }, {
                        key: "pushScope",
                        value: function pushScope() {
                            var e = d.a.clone(this.getScope());
                            return this.getStack().push({
                                client: this.getClient(),
                                scope: e
                            }), e
                        }
                    }, {
                        key: "popScope",
                        value: function popScope() {
                            return !(this.getStack().length <= 1) && !!this.getStack().pop()
                        }
                    }, {
                        key: "withScope",
                        value: function withScope(e) {
                            var t = this.pushScope();
                            try {
                                e(t)
                            } finally {
                                this.popScope()
                            }
                        }
                    }, {
                        key: "getClient",
                        value: function getClient() {
                            return this.getStackTop().client
                        }
                    }, {
                        key: "getScope",
                        value: function getScope() {
                            return this.getStackTop().scope
                        }
                    }, {
                        key: "getStack",
                        value: function getStack() {
                            return this._stack
                        }
                    }, {
                        key: "getStackTop",
                        value: function getStackTop() {
                            return this._stack[this._stack.length - 1]
                        }
                    }, {
                        key: "captureException",
                        value: function captureException(e, t) {
                            var n = this._lastEventId = t && t.event_id ? t.event_id : Object(a.f)(),
                                i = new Error("Sentry syntheticException");
                            return this._withClient(function(s, a) {
                                s.captureException(e, Object(r.a)(Object(r.a)({
                                    originalException: e,
                                    syntheticException: i
                                }, t), {}, {
                                    event_id: n
                                }), a)
                            }), n
                        }
                    }, {
                        key: "captureMessage",
                        value: function captureMessage(e, t, n) {
                            var i = this._lastEventId = n && n.event_id ? n.event_id : Object(a.f)(),
                                s = new Error(e);
                            return this._withClient(function(a, o) {
                                a.captureMessage(e, t, Object(r.a)(Object(r.a)({
                                    originalException: e,
                                    syntheticException: s
                                }, n), {}, {
                                    event_id: i
                                }), o)
                            }), i
                        }
                    }, {
                        key: "captureEvent",
                        value: function captureEvent(e, t) {
                            var n = t && t.event_id ? t.event_id : Object(a.f)();
                            return "transaction" !== e.type && (this._lastEventId = n), this._withClient(function(i, s) {
                                i.captureEvent(e, Object(r.a)(Object(r.a)({}, t), {}, {
                                    event_id: n
                                }), s)
                            }), n
                        }
                    }, {
                        key: "lastEventId",
                        value: function lastEventId() {
                            return this._lastEventId
                        }
                    }, {
                        key: "addBreadcrumb",
                        value: function addBreadcrumb(e, t) {
                            var n = this.getStackTop(),
                                i = n.scope,
                                s = n.client;
                            if (i && s) {
                                var a = s.getOptions && s.getOptions() || {},
                                    u = a.beforeBreadcrumb,
                                    _ = void 0 === u ? null : u,
                                    d = a.maxBreadcrumbs,
                                    l = void 0 === d ? 100 : d;
                                if (!(l <= 0)) {
                                    var p = Object(o.a)(),
                                        f = Object(r.a)({
                                            timestamp: p
                                        }, e),
                                        v = _ ? Object(c.b)(function() {
                                            return _(f, t)
                                        }) : f;
                                    null !== v && i.addBreadcrumb(v, l)
                                }
                            }
                        }
                    }, {
                        key: "setUser",
                        value: function setUser(e) {
                            var t = this.getScope();
                            t && t.setUser(e)
                        }
                    }, {
                        key: "setTags",
                        value: function setTags(e) {
                            var t = this.getScope();
                            t && t.setTags(e)
                        }
                    }, {
                        key: "setExtras",
                        value: function setExtras(e) {
                            var t = this.getScope();
                            t && t.setExtras(e)
                        }
                    }, {
                        key: "setTag",
                        value: function setTag(e, t) {
                            var n = this.getScope();
                            n && n.setTag(e, t)
                        }
                    }, {
                        key: "setExtra",
                        value: function setExtra(e, t) {
                            var n = this.getScope();
                            n && n.setExtra(e, t)
                        }
                    }, {
                        key: "setContext",
                        value: function setContext(e, t) {
                            var n = this.getScope();
                            n && n.setContext(e, t)
                        }
                    }, {
                        key: "configureScope",
                        value: function configureScope(e) {
                            var t = this.getStackTop(),
                                n = t.scope,
                                r = t.client;
                            n && r && e(n)
                        }
                    }, {
                        key: "run",
                        value: function run(e) {
                            var t = makeMain(this);
                            try {
                                e(this)
                            } finally {
                                makeMain(t)
                            }
                        }
                    }, {
                        key: "getIntegration",
                        value: function getIntegration(e) {
                            var t = this.getClient();
                            if (!t) return null;
                            try {
                                return t.getIntegration(e)
                            } catch (n) {
                                return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("Cannot retrieve integration ".concat(e.id, " from the current Hub")), null
                            }
                        }
                    }, {
                        key: "startTransaction",
                        value: function startTransaction(e, t) {
                            return this._callExtensionMethod("startTransaction", e, t)
                        }
                    }, {
                        key: "traceHeaders",
                        value: function traceHeaders() {
                            return this._callExtensionMethod("traceHeaders")
                        }
                    }, {
                        key: "captureSession",
                        value: function captureSession() {
                            if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) return this.endSession();
                            this._sendSessionUpdate()
                        }
                    }, {
                        key: "endSession",
                        value: function endSession() {
                            var e = this.getStackTop(),
                                t = e && e.scope,
                                n = t && t.getSession();
                            n && Object(l.a)(n), this._sendSessionUpdate(), t && t.setSession()
                        }
                    }, {
                        key: "startSession",
                        value: function startSession(e) {
                            var t = this.getStackTop(),
                                n = t.scope,
                                i = t.client,
                                s = i && i.getOptions() || {},
                                a = s.release,
                                o = s.environment,
                                c = (Object(u.a)().navigator || {}).userAgent,
                                _ = Object(l.b)(Object(r.a)(Object(r.a)(Object(r.a)({
                                    release: a,
                                    environment: o
                                }, n && {
                                    user: n.getUser()
                                }), c && {
                                    userAgent: c
                                }), e));
                            if (n) {
                                var d = n.getSession && n.getSession();
                                d && "ok" === d.status && Object(l.c)(d, {
                                    status: "exited"
                                }), this.endSession(), n.setSession(_)
                            }
                            return _
                        }
                    }, {
                        key: "shouldSendDefaultPii",
                        value: function shouldSendDefaultPii() {
                            var e = this.getClient(),
                                t = e && e.getOptions();
                            return Boolean(t && t.sendDefaultPii)
                        }
                    }, {
                        key: "_sendSessionUpdate",
                        value: function _sendSessionUpdate() {
                            var e = this.getStackTop(),
                                t = e.scope,
                                n = e.client;
                            if (t) {
                                var r = t.getSession();
                                r && n && n.captureSession && n.captureSession(r)
                            }
                        }
                    }, {
                        key: "_withClient",
                        value: function _withClient(e) {
                            var t = this.getStackTop(),
                                n = t.scope,
                                r = t.client;
                            r && e(r, n)
                        }
                    }, {
                        key: "_callExtensionMethod",
                        value: function _callExtensionMethod(e) {
                            var t = getMainCarrier().__SENTRY__;
                            if (t && t.extensions && "function" === typeof t.extensions[e]) {
                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                                return t.extensions[e].apply(this, r)
                            }("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.c.warn("Extension method ".concat(e, " couldn't be found, doing nothing."))
                        }
                    }]), Hub
                }();

            function getMainCarrier() {
                var e = Object(u.a)();
                return e.__SENTRY__ = e.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, e
            }

            function makeMain(e) {
                var t = getMainCarrier(),
                    n = getHubFromCarrier(t);
                return setHubOnCarrier(t, e), n
            }

            function getCurrentHub() {
                var e = getMainCarrier();
                return hasHubOnCarrier(e) && !getHubFromCarrier(e).isOlderThan(p) || setHubOnCarrier(e, new f), Object(_.b)() ? function getHubFromActiveDomain(e) {
                    try {
                        var t = getMainCarrier().__SENTRY__,
                            n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                        if (!n) return getHubFromCarrier(e);
                        if (!hasHubOnCarrier(n) || getHubFromCarrier(n).isOlderThan(p)) {
                            var r = getHubFromCarrier(e).getStackTop();
                            setHubOnCarrier(n, new f(r.client, d.a.clone(r.scope)))
                        }
                        return getHubFromCarrier(n)
                    } catch (i) {
                        return getHubFromCarrier(e)
                    }
                }(e) : getHubFromCarrier(e)
            }

            function hasHubOnCarrier(e) {
                return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
            }

            function getHubFromCarrier(e) {
                return Object(u.b)("hub", function() {
                    return new f
                }, e)
            }

            function setHubOnCarrier(e, t) {
                return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0)
            }
        }
    }
]);