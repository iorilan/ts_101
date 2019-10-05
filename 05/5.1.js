// a simple function 
function add(x, y) {
    return x + y;
}
//optional and default parameters
function buildName(firstName, lastName, middleName) {
    if (middleName === void 0) { middleName = " "; }
    return firstName + " " + lastName;
}
// all below functions will work
var result1 = buildName("Bob"); // lastname will be empty ,miiddle name empty space
console.log(result1);
var result2 = buildName("Bob", "Adams", "James");
console.log(result2);
var result3 = buildName("Bob", "Adams"); // middle name empty space
console.log(result3);
// = same 'params' in c#
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
