// generic constraint

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

//loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({length: 10, value: 3});


function create<T>(c: {new(): T; }): T {
    return new c();
}
class BeeKeeper {
    hasMask: boolean;
    constructor(mask:boolean){
        this.hasMask = mask;
    };
}

class ZooKeeper {
    constructor(tag: string){
        this.nametag = tag;
    };
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
    constructor(){
        super();
        this.keeper = new BeeKeeper(true);
    };
}

class Lion extends Animal {
    constructor(){
        super();
        this.keeper = new ZooKeeper("Keeper of Lion");
    };
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

var l = createInstance(Lion);
console.log(l.keeper);
var b = createInstance(Bee);
console.log(b.keeper);  