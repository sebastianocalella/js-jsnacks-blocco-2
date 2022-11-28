const names = ['Michela', 'Giuseppina', 'Taylor', 'Diana', 'Marsha', 'Fabio', 'Roberto'];
const surnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];

const faulseList = [];

n = parseInt(prompt('inserisi il numero di invitati falsi da aggiungere alla lista:'));

for(let i=0; i<n; i++){
    faulseList.push(names[Math.floor(Math.random()*7)] + surnames[Math.floor(Math.random()*7)]);
}
console.log(faulseList);