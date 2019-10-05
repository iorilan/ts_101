// generic constraint
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });
function create(c) {
    return new c();
}
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper(mask) {
        this.hasMask = mask;
    }
    ;
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper(tag) {
        this.nametag = tag;
    }
    ;
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super.call(this) || this;
        _this.keeper = new BeeKeeper(true);
        return _this;
    }
    ;
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super.call(this) || this;
        _this.keeper = new ZooKeeper("Keeper of Lion");
        return _this;
    }
    ;
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
var l = createInstance(Lion);
console.log(l.keeper);
var b = createInstance(Bee);
console.log(b.keeper);
