function evenify(element){
    if (element % 2 == 0) {
        console.log(element ,'is a even number');
    } else {
        console.log(element ,'is a odd number');
    }
    
}
function evenify_all(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        evenify(element);  
    }

}
var array = [4,5,97,46,356,456,45];
evenify_all(array);




// var friendsAge = [6,45,78,12,33,34];
// for (let i = 0; i < friendsAge.length; i++) {
//     const element = friendsAge[i];
//     evenify(element);
//     // if (element % 2 == 0) {
//     //     console.log( element, 'is a even number');
//     // } else {
//     //     console.log(element , 'is a odd number');   
//     // }
    
// }