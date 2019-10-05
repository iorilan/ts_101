// array and tuple descructing

// array
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

first = input[0];
second = input[1];

// swap variables
[first, second] = [second, first];

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);

let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [first2] = [1, 2, 3, 4];
console.log(first2); // outputs 1

let [, second2, , fourth] = [1, 2, 3, 4];
console.log(second2); // outputs 2
console.log(fourth); // outputs 4



//tuple

let tuple: [number, string, boolean] = [7, "hello", true];
let [a1, b1, c1] = tuple; // a: number, b: string, c: boolean
console.log(a1,b1,c1);
// let [a, b, c, d] = tuple; // Error, no element at index 3 
let [a2, ...bc] = tuple; // bc: [string, boolean]
console.log(a2,bc);
let [a3, b3, c3, ...d] = tuple; // d: [], the empty tuple
console.log(a3,b3,c3,d);

let [a4] = tuple; // a: number
console.log(a4)
let [, b4] = tuple; // b: string
console.log(b4);


// object destructing
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

//project property
//let { a, b } = o;
//console.log('obj descruct 1==>',a,b);

//or pass thru
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
console.log(total);

