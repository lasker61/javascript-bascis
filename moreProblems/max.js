var business = 350;
var minister = 429;
var shochib  =700;

if(business > minister){
    if(business > shochib){
        console.log("business man has more money");
    } 
    else{
        console.log("shochib has more money");
    }
}
else{
    if( minister > shochib){
        console.log("minister has more money") ;   
    }
    else{
        console.log("shochib has more money");
    }

} 

//another way 

var x = 400;
var y = 300;
var z =594;
var result = Math.max(x,y,z);
console.log(result);

//another way

var p = 456;
var q = 654;
var r = 765;

if(p > q && p > r){
    console.log("p is greater");
}
else if( q > p && q > r){
    console.log("q is greater");
}
else{
    console.log("r is greater");
}

