// array spread
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus);


let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };// food is changed.
let search2 = { food: "rich", ...defaults }; // not overriding
console.log(search);
console.log(search2);


//obj spread is not clone method 
class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
  //clone.m(); // error!