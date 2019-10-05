// nullable type and optional parameters
var s = "foo";
//s = null; // error, 'null' is not assignable to 'string'
var sn = "bar";
sn = null; // ok
//sn = undefined; // error, 'undefined' is not assignable to 'string | null'
