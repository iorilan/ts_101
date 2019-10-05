function getSmallPet() {
    // ...
    return null;
}
var pet = getSmallPet(); // pet can only call common functions in both class.
pet.layEggs(); // okay
//pet.swim();    // errors
