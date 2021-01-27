var number1 = 15; //integer
var number2 = 25.5 //float
var number3 =number1 + number2;
console.log(number3);

var num1 = 10;
var num2 ='2.6';
var num3 = '11.22';
num3 =parseFloat(num3);
num2 = parseInt(num2); //parse function converts string into integer or float
num2 = parseFloat(num2);
console.log(num1 + num2);
console.log(num2 +num3);

//now number to string how??

var num4 = 34;
num4 ="" + num4;
console.log(num4); //this is a string.i just added an empty string with num4! you can check it with typof function!

// what happens when we add two float numbers

var num5 = 0.1;
var num6 = 0.4;
var total;
total = num5 + num6;
total = total.toFixed(2); //so we can fix how many digit after . we want! just using toFixed() functiom!
console.log(total);  