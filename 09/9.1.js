function typeofF(x) {
    var t = typeof x;
    console.log(t);
}
var A = /** @class */ (function () {
    function A(a) {
        this.v_A = a;
    }
    return A;
}());
var B = /** @class */ (function () {
    function B(b) {
        this.v_B = b;
    }
    return B;
}());
function AOrB(x) {
    if (x instanceof A) {
        console.log("A==>", x);
    }
    if (x instanceof B) {
        console.log("B==>", x);
    }
}
typeofF("123");
typeofF(123);
AOrB(new A("A"));
AOrB(new B("B"));
