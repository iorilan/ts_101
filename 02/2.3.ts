// array and tuple in type script
let input = [1,2];
let [first,second] = input;
console.log(first);
console.log(second);

//swap:
[first,second] = [second,first]

function f([first,second]:[number, number]){
    console.log(first);
    console.log(second);
}

f([1,2])

let [first2, ...rest] = [1,2,3,4,5,6,7]
console.log(first2);
console.log(rest)


let tuple : [number, string, boolean] = [7, "hello", true];
let [a,b,c] = tuple
//let [a,b,c,d] = tuple ; // error

let [a2,...bc ] = tuple; // ok, bc:[string, boolean]
console.log('a2==>',a2);
console.log('bc==>',bc);
let [a3,b3,c3,...d] = tuple; // d:[] ,empty

let[a4] = tuple; // a4:number
let[,b2]=tuple;// b2:string
console.log('b4,b2==>',a4,b2);
