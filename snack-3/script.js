const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


//creo una funzione per incrementare un numero
function addOne(number){
    return number + 1
}

//creo un nuovo array con map applicando la funzione d'incremento ad ogni elemento
newArr = numbers.map(addOne)
console.log(newArr)