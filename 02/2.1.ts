//using var and let
//using var can define the variable with same name no errors
function f(x){
    var x;
    var x;
    if(true){
        var x;
    }
}

//using let can not define duplicate var
let x = 10;
//let x = 20;   //give error

function g(){
    let x=  10;
    //var x = 100;  // give error
}


for(var i = 0;i < 10; i++){
    setTimeout(function(){console.log(i);}, 100*i);
}
// the output all 0;

for (let i = 0;i<10; i++){
    setTimeout(function(){console.log(i);}, 100*i);
}
// output is 0-9

