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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// array spread
var first = [1, 2];
var second = [3, 4];
var bothPlus = __spreadArrays([0], first, second, [5]);
console.log(bothPlus);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" }); // food is changed.
var search2 = __assign({ food: "rich" }, defaults); // not overriding
console.log(search);
console.log(search2);
//obj spread is not clone method 
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
    };
    return C;
}());
var c = new C();
var clone = __assign({}, c);
clone.p; // ok
//clone.m(); // error!
