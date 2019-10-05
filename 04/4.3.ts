//public,private,protected

//by default : public

//private :
class Animal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

//new Animal2("Cat").name; // Error: 'name' is private;


//protected :
class Person {
    protected name: string;
    protected constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());


//below are 2 errors becasue trying to access protected members
//console.log(howard.name); // error
//let john = new Person("John"); // Error: The 'Person' constructor is protected

