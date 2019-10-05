let anyType:any = 1;
anyType = 'can be string any time';
anyType = true;
anyType.ifItOk();
anyType.anyOtherMethodCompileWontCheck();

let list:any[] = [1,true,'free'];
list[1] = 100;