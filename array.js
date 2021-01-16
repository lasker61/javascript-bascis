var friendsAge = [15, 45, 53, 23];
var sonaliAge =friendsAge[2];
friendsAge[0] = 8 ;
console.log(sonaliAge);
console.log(friendsAge);
friendsAge.push(45);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);
friendsAge.unshift(34);
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);
console.log(friendsAge.length);
console.log(friendsAge[0]);
console.log(friendsAge[3]);
var position = friendsAge.indexOf(53);
console.log(position);

var teaLine = ['kalam', 'salam', 'balam', 'dhalam'];
console.log(teaLine);
teaLine.unshift('malam');
console.log(teaLine);
teaLine.shift();
console.log(teaLine);

var part = teaLine.slice(1,3);
console.log(part);
console.log(teaLine);


///////////so basically to add element in the begining we have use unsshift
///////////to remove element in the begining we have to use shift
/////////// to add element in the end we have use push
/////////// to remove element in the end we have to use pop






//another way of declaring an array

var array =new Array();
array[0] ='nahid';
array[1] ='sakib';
array[2] ='nadim';
array[3] ='abrar';
array[4] ='khabib';


console.log(array.indexOf('sakib'));
array[0] = 'tlp';
console.log(array[0]);
console.log(array.length);
console.log(array);
array.push('askar');
console.log(array);
console.log(array.length);
array.pop();
console.log(array);


