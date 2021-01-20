var marks =[33,54,56,98,87,77];
var max = marks[0];
for( var i = 0 ; i < marks.length ; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('higest value is :', max);


//lowest elememt 

var grade = [34,57,81,88,99,21,76];
var min =grade[0];

for( var j = 0; j < grade.length; j++){
    var el = grade[j];
    if(el < min){
        min = el;
    }
}
console.log("lowast element is :" ,min);