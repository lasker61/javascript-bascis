var a =5;
var b =7;
console.log('before swap a=',a ,'b=',b );
var temp;
temp = a;
a = b;
b =temp;
console.log('after swap a=',a ,'b=',b );

//without temp

var x = 8;
var y = 5;
console.log('before swap x=',x ,'y=',y );
x = x + y;
y = x - y;
x = x - y;
console.log('after swap x=',x ,'y=',y );

//another way

var p = 57;
var q = 54;
[p,q] =[q,p];
console.log('after swap p =', p ,'q =',q);

