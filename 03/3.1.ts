// the js way of interface
function printLabel1(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj1 = {size: 10, label: "[js]Size 1 Object"};
printLabel(myObj1);



//the ts way ofi nterface
interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "[ts]Size 10 Object"};
printLabel(myObj);