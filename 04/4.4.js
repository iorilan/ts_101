// class convertion
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
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal3));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal3("Goat");
console.log('base class==>', animal);
var rhino = new Rhino();
console.log('rhino (extends from animal)==>', rhino);
var employee = new Employee("Bob");
console.log('employee==>', employee);
animal = rhino;
//animal = employee; // Error: 'Animal' and 'Employee' are not compatible
console.log('animal conerted from rhino==>', animal);
