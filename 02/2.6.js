//readonly array
var a = [1, 2, 3, 4];
var ro = a;
console.log('a==>');
console.log(a);
console.log('ro==>');
console.log(ro);
//ro[0] = 12; // error!
//ro.push(5); // error!
//ro.length = 100; // error!
//a = ro; // error!
var a2 = ro;
a2.push(5);
console.log(a2);
