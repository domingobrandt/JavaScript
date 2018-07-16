let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

let numbers =[ 4, 9, 16, 25, 100];

//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
let squareNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squareNumbers + " multiplicacion de ellos mismo");
//Devuelve la raíz cuadrada de un número. (Math.sqrt)

console.log(numbers.map(Math.sqrt) + " raiz cuadrada" )


let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

//El operador typeof Devuelve una cadena que identifica el tipo de datos de una expresión.


let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

console.log(onlyNumbers);