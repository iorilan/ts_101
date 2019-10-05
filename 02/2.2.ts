// using const  in typescript

const numberLivesForCat = 9;

const kitty = {
    name:"Aurora",
    numLives: numberLivesForCat
}

//kitty = {
    //  whatever value will give error
//}

kitty.name="ok to change name";
kitty.numLives = 10; // ok to change number


