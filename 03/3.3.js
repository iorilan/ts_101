var p1 = { x: 1, y: 1 };
console.log(p1);
//p1.x = 2;  //Error
var PointOfLine = /** @class */ (function () {
    function PointOfLine(x1, y1) {
        this.x1 = x1;
        this.y1 = y1;
        this.display = x1 + "," + y1;
    }
    return PointOfLine;
}());
var c = new PointOfLine(1, 4);
console.log(c);
//c.x1 = "aaa";// Error
