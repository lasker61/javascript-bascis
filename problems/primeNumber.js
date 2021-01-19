var n = 10;
for( i = 2; i < n ; i++ ){
    if(n % i == 0){
        console.log('not a prime number') ;  
        break; 
    }
    else{
        console.log('prime number');     
        break;
    }
}