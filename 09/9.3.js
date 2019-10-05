// type alias use as base class
var Square = /** @class */ (function () {
    function Square(s) {
        this.size = s;
    }
    return Square;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.width = w;
        this.height = h;
    }
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(r) {
        this.radius = r;
    }
    return Circle;
}());
function area(s) {
    if (s instanceof Square) {
        return s.size * s.size;
    }
    if (s instanceof Rectangle) {
        return s.height * s.width;
    }
    if (s instanceof Circle) {
        return Math.PI * Math.pow(s.radius, 2);
    }
}
console.log(area(new Square(3)));
console.log(area(new Rectangle(2, 5)));
console.log(area(new Circle(5)));
