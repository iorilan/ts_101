var x;
// y's inferred type is { name: string; location: string; }
var y = { name: "Alice", location: "Seattle" };
x = y;
console.log(x, y);
//both x,y's name changed
x.name = "changed";
console.log(x, y);
function greet(n) {
    console.log("Hello, " + n.name);
}
greet(y); // OK
