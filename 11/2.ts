//property decorator

function moreThan10(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<number>) {
    let set = descriptor.set;
    descriptor.set = function (value: number) {
        if (value <= 10) {
            throw new TypeError("must more than 10.");
        }
        set.call(target, value);
    }
}

class Test{
    private _v:number;

    @moreThan10
    set v(value:number){this._v = value;}
    get v(){return this._v;}
}


var t = new Test();
t.v = 11;// ok
t.v = 9;//error
