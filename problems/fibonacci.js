var fibo = [0,1];
fibo[2] =fibo[2-1]+fibo[2-2]
fibo[3] =fibo[3-1]+fibo[3-2]
fibo[4] =fibo[4-1]+fibo[4-2]
fibo[5] =fibo[5-1]+fibo[5-2]
fibo[n] =fibo[n-1]+fibo[n-2] 

for( i= 2 ; i <= 12 ; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);


// //using function

function findFibonacci(number){
    var fibo = [0,1];
    for( i= 2 ; i <= number ; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = findFibonacci(15);
console.log(result);

//recursive way
function fibonacci(num){
    if(num ==0 || num == 1){
        return num;
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}
var result =fibonacci(10);
console.log(result);
