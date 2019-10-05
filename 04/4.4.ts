// base/child class convertion

class Animal3 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal3 {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal3("Goat");
console.log('base class==>',animal);

let rhino = new Rhino();
console.log('rhino (extends from animal)==>',rhino)

let employee = new Employee("Bob");
console.log('employee==>',employee);

animal = rhino;
//animal = employee; // Error: 'Animal' and 'Employee' are not compatible
console.log('animal conerted from rhino==>',animal);