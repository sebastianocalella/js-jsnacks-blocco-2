const numberList = [];

let number = 2;
numberList.push(number);
console.log(number); 

while (number<1000){
    number = number * 2;
    numberList.push(number);
}

console.log(numberList);