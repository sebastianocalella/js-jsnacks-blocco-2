const list = [
    -12,
    -2,
    -4,
    -5,
    -65,
    -34,
    -9,
    -19,
    -5,
    -12,
    -4,
    -9
]

let somma = 0;
let maxValue = list[0];

for (let i=0; i<10; i++){
    somma += list[i];
    if (list[i]>maxValue){
        maxValue = list[i];
    }

}

console.log(somma);

let media = somma/10;

console.log(media);

console.log(maxValue);