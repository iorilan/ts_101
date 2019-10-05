//optional parameters interface
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var s1 = createSquare({ color: "black" });
console.log(s1);
var s2 = createSquare({ color: 'white', width: 9 });
console.log(s2);
var s3 = createSquare({ width: 7 });
console.log(s3);
//Below trigger compile error becasue spelling
//let s4 = createSquare({ colour: "red", width: 100 }); 
