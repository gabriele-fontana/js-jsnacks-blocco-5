const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


//utilizzo map per stampare tutti i nomi
//utiizzo join per scriverli in un unica riga
console.log(names.map(name => `'${name}'`).join(', '));


//posso usare anche forEach (ma stampa la virgola dopo ogni nome)
let result = '';

names.forEach((name, index) => {

  result += `'${name}',`;
  
});
console.log(result);


//posso loggare "manualmente" ogni nome (se aggiungo nomi all'array non verranno stampati)
console.log(`'${names[0]}', '${names[1]}', '${names[2]}'`);