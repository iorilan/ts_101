var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var colorName = Color[0];
console.log(colorName);
