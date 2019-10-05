class StaticProp{
    static GlobalVal = "abc";
}

console.log(StaticProp.GlobalVal)
StaticProp.GlobalVal = "def";
console.log(StaticProp.GlobalVal);