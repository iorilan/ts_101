var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function moreThan10(target, propertyKey, descriptor) {
    var set = descriptor.set;
    descriptor.set = function (value) {
        if (value <= 10) {
            throw new TypeError("must more than 10.");
        }
        set.call(target, value);
    };
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Object.defineProperty(Test.prototype, "v", {
        get: function () { return this._v; },
        set: function (value) { this._v = value; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        moreThan10
    ], Test.prototype, "v", null);
    return Test;
}());
var t = new Test();
t.v = 11; // ok
t.v = 9; //error
