//class compability not affected by constructor parameters

class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  // OK
s = a;  // OK


//interface compatibility 
let identity = function<T>(x: T): T {
    // ...
    return x;
}

let reverse = function<U>(y: U): U {
    // ...
    return y;
}

identity = reverse;  // OK, because (x: any) => any matches (y: any) => any

