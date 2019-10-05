// array and tuple descructing
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
var _a;
// array
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
first = input[0];
second = input[1];
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
var _b = [1, 2, 3, 4], first1 = _b[0], rest = _b.slice(1);
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var first2 = [1, 2, 3, 4][0];
console.log(first2); // outputs 1
var _c = [1, 2, 3, 4], second2 = _c[1], fourth = _c[3];
console.log(second2); // outputs 2
console.log(fourth); // outputs 4
//tuple
var tuple = [7, "hello", true];
var a1 = tuple[0], b1 = tuple[1], c1 = tuple[2]; // a: number, b: string, c: boolean
console.log(a1, b1, c1);
// let [a, b, c, d] = tuple; // Error, no element at index 3 
var a2 = tuple[0], bc = tuple.slice(1); // bc: [string, boolean]
console.log(a2, bc);
var a3 = tuple[0], b3 = tuple[1], c3 = tuple[2], d = tuple.slice(3); // d: [], the empty tuple
console.log(a3, b3, c3, d);
var a4 = tuple[0]; // a: number
console.log(a4);
var b4 = tuple[1]; // b: string
console.log(b4);
// object destructing
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
//project property
//let { a, b } = o;
//console.log('obj descruct 1==>',a,b);
//or pass thru
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
console.log(total);
