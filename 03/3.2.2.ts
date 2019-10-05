//optional parameters interface
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig){
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}


let s1 = createSquare({ colour: "red", width: 100 });
console.log(s1);// note , the color spelled wrongly .

////since interface got [propName:string] so compiler wont bother wrong name param 
let s2 = createSquare({ whatever: 100 });