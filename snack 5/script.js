const names = ['Michela', 'Giuseppina', 'Taylor', 'Diana', 'Marsha', 'Fabio', 'Roberto'];
const surnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];

const faulseList = [];

for(let i=0; i<7; i++){
    faulseList.push(names[Math.floor(Math.random()*7)] + surnames[Math.floor(Math.random()*7)]);
}
console.log(faulseList);