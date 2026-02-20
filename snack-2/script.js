const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
//utilizzo map per stampare ogni nome
//utilizzo join per scriverli in un'unica riga
console.log(people.map(name => `'${name.name}'`).join(', '));