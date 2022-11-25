numbers = [];

for (let i=0; i<6; i++){
    number = parseInt(prompt('inserisci un numero'));
    if (number % 2 == 1){
        numbers.push(number);
    }
}
console.log(numbers);