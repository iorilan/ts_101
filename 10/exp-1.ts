export class StringHelper{
    public trim(s:string):string{
        const arr = [' ','\r','\n'];
        console.log("called trim");

        let r = "";
        for(let i =0;i < s.length; i++){
            let c = s[i];
            if(arr.indexOf(c) == -1){
                r += c;
            }
        }

        return r;
    }
}