// for in and for of

let list = [4, 5, 6];
var obj = {a:1,b:2,c:3};
// for in : loop thru the index or keys
for (let i in list) {
    console.log(i); // "0", "1", "2",
}
for(let p in obj){
    console.log(p);// a,b,c
    console.log(obj[p])//1,2,3
}

// for of : loop thru the values
for (let i of list) {
    console.log(i); // "4", "5", "6"
}

