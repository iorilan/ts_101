// a simple function 
function add(x: number, y: number): number {
    return x + y;
}


//optional and default parameters
function buildName(firstName: string, lastName?: string, middleName=" ") {
    return firstName + " " + lastName;
}

// all below functions will work
let result1 = buildName("Bob"); // lastname will be empty ,miiddle name empty space
console.log(result1);

let result2 = buildName("Bob", "Adams", "James"); 
console.log(result2);

let result3 = buildName("Bob", "Adams"); // middle name empty space
console.log(result3);


// = same 'params' in c#
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);