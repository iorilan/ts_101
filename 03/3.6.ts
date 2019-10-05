// use class as interface

class Point {
    x: number;
    y: number;
}

let p2d = {x:5,y:6};
console.log(p2d);

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d);