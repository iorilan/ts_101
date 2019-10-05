// readonly property
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1 :Point = {x:1,y:1}
console.log(p1);
//p1.x = 2;  //Error

class PointOfLine{
    constructor(
        public readonly x1: number, 
        public readonly y1: number, ){
            this.display = `${x1},${y1}`
        }
    readonly display:string
}

let c= new PointOfLine(1,4)
console.log(c);

//c.x1 = "aaa";// Error


