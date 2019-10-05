//using var can define the variable with same name no errors
function f(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}
//using let can not define duplicate var
var x = 10;
//let x = 20;   //give error
function g() {
    var x = 10;
    //var x = 100;  // give error
}
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 100 * i_1);
};
// the output all 0;
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
// output is 0-9
