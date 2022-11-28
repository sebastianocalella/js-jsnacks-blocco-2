const numberList = [
    2,
    456,
    7,
    54,
    32,
    5,
    4,
    32,
    43,
    5,
    452,
    2,
    3,
    65,
    86,
    2
];

let summ = 0;

for(let i = 0; i<numberList.length; i++){
    switch (i%2){
        case 0:
            console.log(numberList[i]);
            summ+=numberList[i];
            break;
        case 1:
            break;
    }
}

console.log(summ);