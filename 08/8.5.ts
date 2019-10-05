// type guard
function padLeft(value: string, padding: string | number) {
    // ...
}

padLeft("Hello world", 4); // ok
padLeft("Hello world", "okok"); // ok
//let indentedString = padLeft("Hello world", true); // errors during compilation