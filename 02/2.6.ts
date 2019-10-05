//readonly array

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
console.log('a==>')
console.log(a);
console.log('ro==>');
console.log(ro);
//ro[0] = 12; // error!
//ro.push(5); // error!
//ro.length = 100; // error!
//a = ro; // error!

//readonly array can be converted into array
let a2 = ro as number[];
a2.push(5);
console.log(a2);