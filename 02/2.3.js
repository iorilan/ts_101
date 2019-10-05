var _a;
// array and tuple in type script
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
//swap:
_a = [second, first], first = _a[0], second = _a[1];
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
var _b = [1, 2, 3, 4, 5, 6, 7], first2 = _b[0], rest = _b.slice(1);
console.log(first2);
console.log(rest);
var tuple = [7, "hello", true];
var a = tuple[0], b = tuple[1], c = tuple[2];
//let [a,b,c,d] = tuple ; // error
var a2 = tuple[0], bc = tuple.slice(1); // ok, bc:[string, boolean]
console.log('a2==>', a2);
console.log('bc==>', bc);
var a3 = tuple[0], b3 = tuple[1], c3 = tuple[2], d = tuple.slice(3); // d:[] ,empty
var a4 = tuple[0]; // a4:number
var b2 = tuple[1]; // b2:string
console.log('b4,b2==>', a4, b2);
