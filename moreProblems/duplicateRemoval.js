var num =[1,3,5,4,5,2,4,1,2,5,9,7,4];
var uniqueNum =[];

for(var i = 0 ; i < num.length ; i++){
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if(index == -1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);
