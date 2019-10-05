"use strict";
exports.__esModule = true;
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    StringHelper.prototype.trim = function (s) {
        var arr = [' ', '\r', '\n'];
        console.log("called trim");
        var r = "";
        for (var i = 0; i < s.length; i++) {
            var c = s[i];
            if (arr.indexOf(c) == -1) {
                r += c;
            }
        }
        return r;
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;
