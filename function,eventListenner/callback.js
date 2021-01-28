function callbackFunctiom(name,age,task){
    console.log('hello',name);
    console.log('your age is ',age);
    task();
}
function washHand(){
    console.log('wash your hand with soap');
}
function takeShower(){
    console.log('Go take shower');
}
callbackFunctiom('sogir uddin',17,takeShower);
callbackFunctiom('togir uddin',34,washHand);