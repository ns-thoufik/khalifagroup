import {
    isArray,
    isObject
} from "../real-type-of";
export const flattenObject = (e, t = "", r = ".", c = !1) => isObject(e) || !c && isArray(e) ? Object.entries(e).reduce(((e, [i, s]) => ({ ...e,
    ...flattenObject(s, t ? `${t}${r}${i}` : i, r, c)
})), {}) : {
    [t]: e
};