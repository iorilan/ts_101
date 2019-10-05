// typeof
function identity(t) {
    return typeof t;
}
console.log(identity("aaa"));
console.log(identity(123));
console.log(identity(1.23));
console.log(identity(true));
console.log(identity(new Date())); // in JS here is object instead of datetime
//instance of 
var A = /** @class */ (function () {
    function A(n) {
        this.name = n;
    }
    return A;
}());
var B = /** @class */ (function () {
    function B(a) {
        this.age = a;
    }
    return B;
}());
function print2(obj) {
    if (obj instanceof A) {
        console.log(obj.name);
    }
    else if (obj instanceof B) {
        console.log(obj.age);
    }
    else {
        console.log(obj);
    }
}
print2(new A("Jack"));
print2(new B(1));
print2("ddd");
print2(123);
