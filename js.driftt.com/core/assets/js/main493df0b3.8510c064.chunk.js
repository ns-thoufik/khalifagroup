(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        "/7QA": function(t, i, E) {
            "use strict";
            E.r(i), "production" !== E("LeJ0").a.ENV && E("Cp41");
            var A = E("9EWH"),
                _ = E("ADGC");
            Object(_.b)() && Object(A.b)();
            ! function polyfillKickoff(t) {
                try {
                    [1].includes(1) && t()
                } catch (i) {
                    Promise.all([E.e(49).then(E.t.bind(null, "imET", 7)), Promise.all([E.e(2), E.e(40)]).then(E.t.bind(null, "H+SE", 7)), E.e(15).then(E.t.bind(null, "2GZm", 7)), Promise.all([E.e(2), E.e(12), E.e(7)]).then(E.t.bind(null, "LSZE", 7)), E.e(54).then(E.t.bind(null, "3yYM", 7))]).then(function() {
                        t()
                    }).catch(function(t) {
                        return console.error("Error importing polyfills", t)
                    })
                }
            }(function kickOff() {
                Promise.all([E.e(52), E.e(37), E.e(22), E.e(19), E.e(43), E.e(20), E.e(26), E.e(14), E.e(11), E.e(18), E.e(50), E.e(42), E.e(29), E.e(21), E.e(8), E.e(16), E.e(24), E.e(17)]).then(E.bind(null, "V+70")).catch(function(t) {
                    return console.warn("loading root widget failed", t)
                })
            })
        },
        0: function(t, i, E) {
            t.exports = E("/7QA")
        },
        "91+0": function(t) {
            t.exports = {
                "//WS_CHAT_BASE": "localhost:4000",
                ENV: "LOCAL",
                "//WS_USER_ENV": "LOCAL",
                "//WS_USER_PROTOCOL": "ws",
                "//WS_CHAT_PROTOCOL": "ws",
                "//WS_USER_BASE": "localhost:4002"
            }
        },
        ADGC: function(t, i, E) {
            "use strict";
            E.d(i, "c", function() {
                return _
            }), E.d(i, "a", function() {
                return o
            }), E.d(i, "b", function() {
                return n
            });
            var A = void 0,
                _ = function isMobileDevice() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return void 0 === A && (A = e(t) || S(t)), A
                },
                e = function isAndroid() {
                    var t, i, E, A, _ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return /Android/i.test(null === (t = navigator) || void 0 === t ? void 0 : t.userAgent) && (_ || (null === (i = navigator) || void 0 === i ? void 0 : null === (E = i.userAgent) || void 0 === E ? void 0 : null === (A = E.toLowerCase()) || void 0 === A ? void 0 : A.indexOf("mobile")) >= 0)
                },
                o = function isIPad() {
                    var t, i;
                    return /iPad/i.test(null === (t = navigator) || void 0 === t ? void 0 : t.userAgent) || !/iPhone|iphone/i.test(null === (i = navigator) || void 0 === i ? void 0 : i.userAgent) && navigator.maxTouchPoints > 1
                },
                S = function isIOS() {
                    var t, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return /iPhone|iPod/i.test(null === (t = navigator) || void 0 === t ? void 0 : t.userAgent) || i && o()
                },
                n = function isInternetExplorerBrowser() {
                    return /(MSIE (9|10))|(rv:11.0)/i.test(navigator.userAgent)
                }
        },
        DFuO: function(t) {
            t.exports = {
                ENV: "MASTER",
                PROJECT_NAMESPACE: "DRIFT_WIDGET",
                ATTACHMENTS_API_BASE: "https://attachments.driftqa-files.com",
                BOOTSTRAP_API_BASE: "https://bootstrap.api.driftqa.com",
                AUTH_API_BASE: "https://customer2.api.driftqa.com",
                CUSTOMER_API_BASE: "https://customer2.api.driftqa.com",
                INTEGRATION_API_BASE: "https://integration.driftqa.com",
                CONVERSATION_API_BASE: "https://conversation2.api.driftqa.com",
                EVENT_API_BASE: "https://event2.api.driftqa.com",
                IDENTIFY_API_BASE: "https://identify.api.driftqa.com",
                EMBED_API_BASE: "https://embeds.driftcdnqa.com",
                ENRICHMENT_API_BASE: "https://enrichment.api.driftqa.com",
                MESSAGES_API_BASE: "https://messaging.api.driftqa.com",
                TARGETING_API_BASE: "https://targeting.api.driftqa.com",
                MEETINGS_API_BASE: "https://meetings.api.driftqa.com",
                FLOW_API_BASE: "https://flow.api.driftqa.com",
                MESSAGES_WSS_BASE: "wss://ws.api.driftqa.com",
                WS_USER_BASE: "widgetsandbox.api.driftqa.com",
                WS_CHAT_BASE: "chat.api.driftqa.com",
                WS_VISITOR_PRESENCE_BASE: "presence.api.driftqa.com",
                WS_PROTOCOL: "wss",
                WS_NUM_SHARDS: 50,
                METRICS_API_BASE: "https://metrics.api.driftqa.com",
                LOG_API_BASE: "https://log.api.driftqa.com",
                MESSAGING_API_BASE: "https://messaging.api.driftqa.com",
                SALES_INBOX_ID: 44,
                SALES_USER_ID: 46894,
                REDUX_ACTION_NAMESPACE: "__DRIFT_WIDGET",
                CLIENT_ID: "5su4735sxsu7tx",
                GIPHY_API_KEY: "sMSS7MboOLsYItFABpnWNSOuszE4HExZ",
                GIPHY_API_BASE: "https://api.giphy.com/v1/gifs",
                IFRAMELY_API_KEY: "f0f2cc6ba50c77794e5c5eb2930f3fd5",
                IFRAMELY_API_BASE: "https://iframe.ly/api",
                SENTRY_DSN: "https://6a7024aa4c6a4c4d9a797440877237b2@sentry.io/1485028"
            }
        },
        LeJ0: function(t, i, E) {
            "use strict";
            var A = E("nfbA"),
                _ = E("vTYT"),
                e = E("DFuO"),
                o = E("wLM4"),
                S = E("91+0"),
                n = E("tXSl"),
                r = function resolveConfig() {
                    return window.__REGION__ === _.c.EU ? o : "PRODUCTION" === window.__ENV__ ? n : "MASTER" === window.__ENV__ ? e : Object(A.a)(Object(A.a)({}, e), S)
                }();
            i.a = r
        },
        tXSl: function(t) {
            t.exports = {
                ENV: "PRODUCTION",
                PROJECT_NAMESPACE: "DRIFT_WIDGET",
                ATTACHMENTS_API_BASE: "https://attachments.drift-files.com",
                AUTH_API_BASE: "https://customer.api.drift.com",
                BOOTSTRAP_API_BASE: "https://bootstrap.driftapi.com",
                CUSTOMER_API_BASE: "https://customer.api.drift.com",
                INTEGRATION_API_BASE: "https://integration.drift.com",
                CONVERSATION_API_BASE: "https://conversation.api.drift.com",
                EVENT_API_BASE: "https://event.api.drift.com",
                IDENTIFY_API_BASE: "https://identify.api.drift.com",
                EMBED_API_BASE: "https://embeds.driftcdn.com",
                ENRICHMENT_API_BASE: "https://enrichment.api.drift.com",
                MESSAGES_API_BASE: "https://messaging.api.drift.com",
                TARGETING_API_BASE: "https://targeting.api.drift.com",
                MEETINGS_API_BASE: "https://meetings.api.drift.com",
                FLOW_API_BASE: "https://flow.api.drift.com",
                MESSAGES_WSS_BASE: "wss://ws.api.drift.com",
                WS_USER_BASE: "widgetsandbox.api.drift.com",
                WS_CHAT_BASE: "chat.api.drift.com",
                WS_LIVE_BASE: "live.api.drift.com",
                WS_VISITOR_PRESENCE_BASE: "presence.api.drift.com",
                WS_PROTOCOL: "wss",
                WS_NUM_SHARDS: 50,
                METRICS_API_BASE: "https://metrics.api.drift.com",
                LOG_API_BASE: "https://log.api.drift.com",
                MESSAGING_API_BASE: "https://messaging.api.drift.com",
                SALES_INBOX_ID: 44,
                SALES_USER_ID: 46894,
                REDUX_ACTION_NAMESPACE: "__DRIFT_WIDGET",
                CLIENT_ID: "f6zuizdyhxrm7r",
                GIPHY_API_KEY: "sMSS7MboOLsYItFABpnWNSOuszE4HExZ",
                GIPHY_API_BASE: "https://api.giphy.com/v1/gifs",
                IFRAMELY_API_KEY: "f0f2cc6ba50c77794e5c5eb2930f3fd5",
                IFRAMELY_API_BASE: "https://iframe.ly/api",
                SENTRY_DSN: "https://6a7024aa4c6a4c4d9a797440877237b2@sentry.io/1485028"
            }
        },
        vTYT: function(t, i, E) {
            "use strict";
            E.d(i, "d", function() {
                return A
            }), E.d(i, "b", function() {
                return _
            }), E.d(i, "c", function() {
                return e
            }), E.d(i, "a", function() {
                return o
            });
            const A = {
                    EMAIL_CAPTURE: "emailCapture",
                    SLIDER: "slider",
                    TAKEOVER: "takeover",
                    CONTROLLER: "controller",
                    CHAT: "chat",
                    LANDING_PAGE: "landingPage"
                },
                _ = (A.EMAIL_CAPTURE, A.CHAT, A.CONTROLLER, A.SLIDER, A.TAKEOVER, {
                    RIGHT: "right",
                    LEFT: "left"
                }),
                e = {
                    US: "US",
                    EU: "EU"
                },
                o = {
                    PAGE_URL: "u"
                }
        },
        wLM4: function(t) {
            t.exports = {
                ENV: "PRODUCTION",
                PROJECT_NAMESPACE: "DRIFT_WIDGET",
                ATTACHMENTS_API_BASE: "https://attachments.eu.drift-files.com",
                BOOTSTRAP_API_BASE: "https://bootstrap.api.eu.drift.com",
                CUSTOMER_API_BASE: "https://customer.api.eu.drift.com",
                CONVERSATION_API_BASE: "https://conversation.api.eu.drift.com",
                EVENT_API_BASE: "https://event.api.eu.drift.com",
                EMBED_API_BASE: "https://embeds.eu.driftcdn.com",
                MESSAGES_API_BASE: "https://messaging.api.eu.drift.com",
                TARGETING_API_BASE: "https://targeting.api.eu.drift.com",
                MEETINGS_API_BASE: "https://meetings.api.eu.drift.com",
                FLOW_API_BASE: "https://flow.api.eu.drift.com",
                MESSAGES_WSS_BASE: "wss://ws.api.eu.drift.com",
                WS_CHAT_BASE: "chat.api.eu.drift.com",
                WS_LIVE_BASE: "live.api.eu.drift.com",
                WS_VISITOR_PRESENCE_BASE: "presence.api.drift.com",
                WS_PROTOCOL: "wss",
                WS_NUM_SHARDS: 50,
                METRICS_API_BASE: "https://metrics.api.eu.drift.com",
                REDUX_ACTION_NAMESPACE: "__DRIFT_WIDGET",
                CLIENT_ID: "f6zuizdyhxrm7r",
                GIPHY_API_KEY: "sMSS7MboOLsYItFABpnWNSOuszE4HExZ",
                GIPHY_API_BASE: "https://api.giphy.com/v1/gifs",
                IFRAMELY_API_KEY: "f0f2cc6ba50c77794e5c5eb2930f3fd5",
                IFRAMELY_API_BASE: "https://iframe.ly/api",
                SENTRY_DSN: "https://6a7024aa4c6a4c4d9a797440877237b2@sentry.io/1485028"
            }
        }
    },
    [
        [0, 6, 9]
    ]
]);