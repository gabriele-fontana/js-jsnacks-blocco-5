const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


//utilizzo filter per selezionare elementi di un array che rispettino una condizione 
const evenNumb = nums.filter(function(numero){
    if(numero % 2 === 0){
        return true
    }
})
console.log(evenNumb);

//in forma sintetica
const numeriPari = nums.filter(numero => numero % 2 === 0);

console.log(numeriPari);
