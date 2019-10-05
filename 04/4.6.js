var StaticProp = /** @class */ (function () {
    function StaticProp() {
    }
    StaticProp.GlobalVal = "abc";
    return StaticProp;
}());
console.log(StaticProp.GlobalVal);
StaticProp.GlobalVal = "def";
console.log(StaticProp.GlobalVal);
