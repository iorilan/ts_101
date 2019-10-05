1;
var NumHelper = /** @class */ (function () {
    function NumHelper() {
    }
    NumHelper.prototype.rand = function (i) {
        return new Date().getUTCSeconds() * new Date().getUTCMilliseconds() % i;
    };
    return NumHelper;
}());
