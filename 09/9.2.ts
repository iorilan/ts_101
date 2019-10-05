// nullable type and optional parameters


////nullable var must be specified when declear
let s = "foo";
//s = null; // error, 'null' is not assignable to 'string'
let sn: string | null = "bar";
sn = null; // ok

//sn = undefined; // error, 'undefined' is not assignable to 'string | null'

////optional parameter automatically adds 'undefined', null is not assignable
function f(x: number, y?: number) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
//f(1, null); // error, 'null' is not assignable to 'number | undefined'

////the same apply to property
class C {
    a: number;
    b?: number;
}
let c = new C();
c.a = 12;
//c.a = undefined; // error, 'undefined' is not assignable to 'number'
c.b = 13;
c.b = undefined; // ok
//c.b = null; // error, 'null' is not assignable to 'number | undefined'



