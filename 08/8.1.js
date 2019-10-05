// type compatibility 
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    return Person;
}());
var Person2 = /** @class */ (function () {
    function Person2(n) {
        this.name = n;
    }
    return Person2;
}());
var p, p2;
// OK, because of structural typing
p = new Person("leo");
console.log(p);
p2 = new Person2("iori");
console.log(p2);
