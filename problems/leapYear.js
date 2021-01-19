function isLeapYear(year){
    if(year % 4 == 0 && year % 100 == 0 && year % 400 ==0) {
        return true;
    }
    else{
        return false;
    }
}
const check2000 = isLeapYear(2000);
console.log(check2000);

const check1700 = isLeapYear(1700);
console.log(check1700);

const check1754 = isLeapYear(1754);
console.log(check1754);

const check1800 = isLeapYear(1800);
console.log(check1800);