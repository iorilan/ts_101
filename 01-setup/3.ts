let isDone : boolean = false;
let decimal:number = 7;
let hex:number = 0x001122;
let binary:number = 0b1010;
let color:string = 'blue';
color = 'red';
let fullname:string = 'Tom';
let age:number = 37;
let sentence:string = `hello. my name is ${fullname}.
I will be ${age+1} years old next month.`;

let list:number[] = [1,2,3];
let list2:Array<number> = [1,2,3]

let x: [string, number, string];
x = ["hello",10,"hi"];
//x = [10,"hello"]; error

console.log(x[0].substring(1))
x[2] = "world";
