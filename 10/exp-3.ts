1
class NumHelper{
    public rand(i:number):number{
        return new Date().getUTCSeconds()*new Date().getUTCMilliseconds()%i;
    }
}

export = NumHelper;