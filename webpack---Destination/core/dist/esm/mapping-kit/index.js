import {
    get
} from "../get";
import {
    isDirective
} from "./is-directive";
import {
    render
} from "./placeholders";
import {
    realTypeOf,
    isObject,
    isArray
} from "../real-type-of";
import {
    removeUndefined
} from "../remove-undefined";
import validate from "./validate";
import {
    arrify
} from "../arrify";
import {
    flattenObject
} from "./flatten";
const ROOT_MAPPING_FIELD_KEY = "__segment_internal_directive",
    directives = {},
    directiveRegExp = /^@[a-z][a-zA-Z0-9]+$/;

function registerDirective(e, r) {
    if (!directiveRegExp.exec(e)) throw new Error(`"${e}" is an invalid directive name`);
    directives[e] = r
}

function registerStringDirective(e, r) {
    registerDirective(e, ((t, o) => {
        const i = resolve(t, o);
        if ("string" != typeof i) throw new Error(`${e}: expected string, got ${realTypeOf(i)}`);
        return r(i, o)
    }))
}

function runDirective(e, r) {
    const t = Object.keys(e).find((e => e.startsWith("@"))),
        o = directives[t],
        i = e[t];
    if ("function" != typeof o) throw new Error(`${t} is not a valid directive, got ${realTypeOf(o)}`);
    return o(i, r)
}
registerDirective("@if", ((e, r) => {
    let t = !1;
    if (!isObject(e)) throw new Error('@if requires an object with an "exists" key');
    if (!e.exists && !e.blank) throw new Error('@if requires an "exists" key or a "blank" key');
    if (void 0 !== e.exists) {
        const o = resolve(e.exists, r);
        t = null != o
    } else if (void 0 !== e.blank) {
        const o = resolve(e.blank, r);
        t = null != o && "" != o
    }
    return t && void 0 !== e.then ? resolve(e.then, r) : !t && e.else ? resolve(e.else, r) : void 0
})), registerDirective("@case", ((e, r) => {
    if (!isObject(e)) throw new Error('@case requires an object with a "operator" key');
    if (!e.operator) throw new Error('@case requires a "operator" key');
    const t = e.operator;
    if (e.value) {
        const o = resolve(e.value, r);
        if ("string" == typeof o) switch (t) {
            case "lower":
                return o.toLowerCase();
            case "upper":
                return o.toUpperCase();
            default:
                throw new Error('operator key should have a value of "lower" or "upper"')
        }
        return o
    }
}));
export const MAX_PATTERN_LENGTH = 10;
export const MAX_REPLACEMENT_LENGTH = 10;

function performReplace(e, r, t, o) {
    if (r.length > 10) throw new Error('@replace requires a "pattern" less than 10 characters');
    if (t.length > 10) throw new Error('@replace requires a "replacement" less than 10 characters');
    return r = r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), e.replace(new RegExp(r, o), t)
}

function cleanNulls(e) {
    if (isObject(e)) {
        const r = Object.assign({}, e);
        for (const t of Object.keys(e)) {
            const o = e[t];
            null === o ? r[t] = void 0 : isObject(o) && (r[t] = cleanNulls(o))
        }
        return r
    }
    return e
}

function getMappingToProcess(e) {
    let r = { ...e
    };
    if (Object.keys(e).includes(ROOT_MAPPING_FIELD_KEY)) {
        const t = {};
        for (const r in e) r !== ROOT_MAPPING_FIELD_KEY && (t[r] = e[r]);
        if (r = e[ROOT_MAPPING_FIELD_KEY], Object.keys(r).length > 1) throw new Error("The root mapping must only have a single directive object");
        const o = r[Object.keys(r)[0]];
        if (!o || "object" != typeof o) throw new Error("The root directive must be an object");
        o.mapping = t
    }
    return r
}

function resolve(e, r) {
    if (!isObject(e) && !isArray(e)) return e;
    if (isDirective(e)) return runDirective(e, r);
    if (Array.isArray(e)) return e.map((e => resolve(e, r)));
    const t = {};
    for (const o of Object.keys(e)) t[o] = resolve(e[o], r);
    return t
}

function transform(e, r = {}) {
    const t = realTypeOf(r);
    if ("object" !== t) throw new Error(`data must be an object, got ${t}`);
    const o = getMappingToProcess(e);
    validate(o);
    const i = resolve(o, r);
    return removeUndefined(i)
}

function transformBatch(e, r = []) {
    const t = realTypeOf(r);
    if (!isArray(r)) throw new Error(`data must be an array, got ${t}`);
    const o = getMappingToProcess(e);
    validate(o);
    const i = r.map((e => resolve(o, e)));
    return removeUndefined(i)
}
registerDirective("@replace", ((e, r) => {
    if (!isObject(e)) throw new Error('@replace requires an object with a "pattern" key');
    if (!e.pattern) throw new Error('@replace requires a "pattern" key');
    null == e.replacement && (e.replacement = ""), e.pattern2 && null == e.replacement2 && (e.replacement2 = ""), null == e.ignorecase && (e.ignorecase = !1), null == e.global && (e.global = !0);
    const t = e.pattern,
        o = e.replacement,
        i = e.ignorecase,
        n = e.global;
    if (e.value) {
        let a = resolve(e.value, r),
            s = "";
        if ("boolean" != typeof a && "number" != typeof a || (a = String(a)), "string" == typeof a && "string" == typeof t && "string" == typeof o && "boolean" == typeof i && "boolean" == typeof n) {
            let r = "";
            n && (r += "g"), i && (r += "i"), s = performReplace(a, t, o, r), e.pattern2 && "string" == typeof e.pattern2 && "string" == typeof e.replacement2 && (s = performReplace(s, e.pattern2, e.replacement2, r))
        }
        return s
    }
})), registerDirective("@arrayPath", ((e, r) => {
    if (!Array.isArray(e)) throw new Error(`@arrayPath expected array, got ${realTypeOf(e)}`);
    const [t, o] = e, i = "string" == typeof t ? get(r, t.replace("$.", "")) : resolve(t, r);
    return ["object", "array"].includes(realTypeOf(i)) && "object" === realTypeOf(o) && Object.keys(o).length > 0 ? arrify(i).map((e => resolve(o, e))) : i
})), registerStringDirective("@path", ((e, r) => get(r, e.replace("$.", "")))), registerStringDirective("@template", ((e, r) => render(e, r))), registerDirective("@literal", ((e, r) => resolve(e, r))), registerDirective("@flatten", ((e, r) => {
    if (!isObject(e)) throw new Error('@flatten requires an object with a "separator" key');
    if (!e.separator) throw new Error('@flatten requires a "separator" key');
    const t = resolve(e.separator, r);
    if ("string" != typeof t) throw new Error("@flatten requires a string separator");
    const o = resolve(e.value, r);
    return flattenObject(o, "", t, Boolean(e.omitArrays))
})), registerDirective("@json", ((e, r) => {
    if (!isObject(e)) throw new Error('@json requires an object with a "value" key');
    if (!e.mode) throw new Error('@json requires a "mode" key');
    if (!e.value) throw new Error('@json requires a "value" key');
    const t = resolve(e.value, r);
    return "encode" === e.mode ? JSON.stringify(t) : "decode" === e.mode ? "string" == typeof t ? JSON.parse(t) : t : void 0
})), registerDirective("@merge", ((e, r) => {
    if (!isObject(e)) throw new Error('@merge requires an object with an "objects" key and a "direction" key');
    if (!e.direction) throw new Error('@merge requires a "direction" key');
    const t = resolve(e.direction, r);
    if (!e.objects) throw new Error('@merge requires a "objects" key');
    if (!Array.isArray(e.objects)) throw new Error("@merge: expected opts.array, got " + typeof e.objects);
    const o = e.objects.map((e => resolve(e, r)));
    return "left" === t && o.reverse(), Object.assign({}, ...o)
})), registerDirective("@transform", ((e, r) => {
    if (!isObject(e)) throw new Error('@transform requires an object with an "apply" key and a "mapping" key');
    if (!e.mapping) throw new Error('@transform requires a "mapping" key');
    if (!e.apply) throw new Error('@transform requires a "apply" key');
    if (!isObject(e.apply)) throw new Error('@transform "apply" key should be an object');
    const t = transform(e.apply, r);
    return resolve(e.mapping, t)
})), registerDirective("@excludeWhenNull", ((e, r) => {
    const t = resolve(e, r);
    if (null !== t) return cleanNulls(t)
}));
export {
    transform,
    transformBatch
};