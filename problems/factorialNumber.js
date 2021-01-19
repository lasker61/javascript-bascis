function findFactorial(number){
    var answer =1;
    if( number == 0 || number == 1){
        return number;
    }
    else{
        for( var i = number ; i >= 1; i--){
            answer = answer * i
        }
        return answer;
     }
   
}
console.log(findFactorial(45));
console.log(findFactorial(1));
console.log(findFactorial(0));

//another way

function factorialNumber(n){
    var factorial =1; 
    if(n == 0 || n ==1){
        return n;
    }
    else{
        for(var i = 1; i <= n; i++){
            factorial = factorial*i;
        } 
        return factorial;
    }
}
console.log(factorialNumber(50));


// using while loop

factorialN = 1;
var i = 1;

function factNumber(factN){
    while (i <=factN) {
        factorialN=factorialN *i;
        i++;
          
    }
    return factorialN;
}
console.log(factNumber(55));


//using recursion

function factorialUsingRecursion(num){
    //base case
    if (num == 0 || num ==1) {
        return 1
    }
    else{
        return num*factorialUsingRecursion(num-1);
    }
}
console.log(factorialUsingRecursion(45));
