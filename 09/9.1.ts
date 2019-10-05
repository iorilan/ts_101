//type of and instance of 

function typeofF(x:any){
    let t= typeof x;
    console.log(t);
}

class A{
    v_A:string;
    constructor(a:string){
        this.v_A = a;
    }
}
class B{
    v_B:string;
    constructor(b:string){
        this.v_B = b;
    }
}
function AOrB(x:any){
    if(x instanceof A){
        console.log("A==>",x);
    }
    if(x instanceof B){
        console.log("B==>",x);
    }
}

typeofF("123");
typeofF(123);
AOrB(new A("A"));
AOrB(new B("B"));