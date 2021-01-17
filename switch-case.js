var dayNo = 2;
switch (dayNo) {
    case 1 :
        console.log("saturday");
        break;
    case 2 :
        console.log("sunday");
        break;
    case 3 :
        console.log("monday");
        break;
    case 4 :
        console.log("tuesday");
        break;
    case 5 :
        console.log("wednesday");
        break;
    case 6 :
        console.log("thursday");
        break;
    case 7 :
        console.log("friday");
        break;
    
    default:
        break;
}

var expr = 'Bananas';
switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  
  console.log("Is there anything else you'd like?");