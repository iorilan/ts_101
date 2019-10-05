// type compatibility 

interface Named {
    name: string;
}

class Person {
    name: string;
    constructor(n:string){
        this.name = n;
    }
}
class Person2 implements Named{
    name: string;
    constructor(n:string){
        this.name = n;
    }
}

let p,p2: Named;

// OK, because of structural typing
p = new Person("leo");
console.log(p);

p2 = new Person2("iori");
console.log(p2);