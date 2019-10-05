// for in and for of
var list = [4, 5, 6];
var obj = { a: 1, b: 2, c: 3 };
// for in : loop thru the index or keys
for (var i in list) {
    console.log(i); // "0", "1", "2",
}
for (var p in obj) {
    console.log(p); // a,b,c
    console.log(obj[p]); //1,2,3
}
// for of : loop thru the values
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i); // "4", "5", "6"
}
