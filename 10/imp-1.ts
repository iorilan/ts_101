import * as sh from "./exp-1";
//equals=>
//import StringHelper from './exp-1';

////export default then import rename
import hi from "./exp-2"



let  s= new sh.StringHelper();
let r = s.trim("sss   aaa");
console.log(r);

new hi().hello();