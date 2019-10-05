// type alias use as base class
class Square {
    kind: "square";
    size: number;
    constructor(s:number){
        this.size = s;
    }
}
class Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
    constructor (w:number, h:number){
        this.width = w;
        this.height = h;
    }
}
class Circle {
    kind: "circle";
    radius: number;
    constructor(r:number){
        this.radius = r;
    }
}

////another way define a base class
type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    if(s instanceof Square){
        return s.size * s.size;
    }
    if(s instanceof Rectangle){
        return s.height * s.width;
    }
    if(s instanceof Circle){
        return Math.PI * s.radius ** 2;
    }
    
}

console.log("Area Of Squre==>",area(new Square(3)));
console.log("Area Of Rect==>",area(new Rectangle(2,5)));
console.log("Area Of Circle==>",area(new Circle(5)));