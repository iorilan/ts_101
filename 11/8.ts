// exclude, extract,nonnullable

////exclude values
type T0 = Exclude<"a" | "b" | 1, "a">;  // "b" | 1
type T1 = Exclude<"a" | "b" | true, "a" | "b">;  // true

//exclude types
type T2 = Exclude<string | number | (() => void), Function>;  // string | number

const t0:T0="b";
const t1:T1=true;
const t2:T2=4.5;
console.log(t0);
console.log(t1);
console.log(t2);


//extract
type T3 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type T4 = Extract<string | number | (() => void), Function>;  // () => void
const t3:T3 = "a";
const t4:T4 = ():void=>{console.log("a void function");};

console.log(t3);
t4();


////non nullable
type T5 = NonNullable<string | number | undefined>;  // string | number
type T6 = NonNullable<string[] | null | undefined>;  // string[]


//required
interface Props {
    a?: number;
    b?: string;
};

const obj: Props = { a: 5 }; // OK

//const obj5: Required<Props> = { a: 5,b:1 }; // Error: property 'b' missing