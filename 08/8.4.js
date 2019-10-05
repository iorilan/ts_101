// type combination
function extend(first, second) {
    var result = {};
    for (var prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (var prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("Hello, I'm " + name + ".");
    };
    return ConsoleLogger;
}());
var jim = extend(new Person3('Jim'), ConsoleLogger.prototype);
console.log(jim);
