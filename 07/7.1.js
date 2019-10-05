// number enum
var EResponse;
(function (EResponse) {
    EResponse[EResponse["No"] = 0] = "No";
    EResponse[EResponse["Yes"] = 1] = "Yes";
})(EResponse || (EResponse = {}));
function respond(recipient, message) {
    // ...
    console.log(recipient + ":" + message);
}
respond("Princess Caroline", EResponse.Yes);
// string enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Up + "," + Direction.Down + "," + Direction.Left + "," + Direction.Right);
console.log(0 /* Up */ + "," + 1 /* Down */ + "," + 2 /* Left */ + "," + 3 /* Right */);
