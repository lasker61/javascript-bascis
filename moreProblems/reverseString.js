
function reverseString(str){
    var reverse ="";
    for( var i = 0 ; i < str.length ;i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var speech = " hello alien bhai brother";
var forAlien = reverseString(speech);
console.log(forAlien);

var food = " khida lagse";
var khida = reverseString(food);
console.log(khida);