// type intersection
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
    return null;
}

let pet = getSmallPet();// pet can only call common functions in both class.
pet.layEggs(); // okay
//pet.swim();    // errors