// the js way of interface
function printLabel1(labeledObj) {
    console.log(labeledObj.label);
}
var myObj1 = { size: 10, label: "[js]Size 1 Object" };
printLabel(myObj1);
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "[ts]Size 10 Object" };
printLabel(myObj);
