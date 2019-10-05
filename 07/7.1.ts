// number enum
enum EResponse {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: EResponse): void {
    // ...
    console.log(`${recipient}:${message}`);
}

respond("Princess Caroline", EResponse.Yes);

// string enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(`${Direction.Up},${Direction.Down},${Direction.Left},${Direction.Right}`);

//const enum
const enum CDirections {
    Up,
    Down,
    Left,
    Right
}

//0,1,2,3
console.log(`${CDirections.Up},${CDirections.Down},${CDirections.Left},${CDirections.Right}`);
