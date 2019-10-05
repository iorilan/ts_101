interface Named {
    name: string;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;
console.log(x,y);

//both x,y's name changed
x.name = "changed";
console.log(x,y);

function greet(n: Named) {
    console.log("Hello, " + n.name);
}
greet(y); // OK