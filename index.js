"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var nestedObject = {
    prop: 'Hello',
    child: {
        prop1: 123,
        prop2: false
    }
};
var obj1 = { hello: 'World' };
var obj2 = __assign(__assign({}, obj1), { goodbye: 'Cruel World' });
console.log(nestedObject);
console.log(obj1);
console.log(obj2);
var _a = { x: 1, y: 2, a: 3, b: 4 }, x = _a.x, y = _a.y, z = __rest(_a, ["x", "y"]);
var n = __assign({ x: x, y: y }, z);
console.log(x);
console.log(y);
console.log(z);
console.log(n);
