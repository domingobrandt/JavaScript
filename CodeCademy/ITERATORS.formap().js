/*ITERATORS
.map()
change the contents of the array 
El método map() crea un nuevo array con los resultados de la llamada
 a la función indicada aplicados a cada uno de sus elementos.
*/
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
 /*1 WITH =>create a new array called secretMessage that returns the first character of each string in the animals array.*/
let secretMessage = animals.map(animal => animal.charAt(0));

console.log(secretMessage.join(''));
//WITH A FUNCTION
let secret=animals.map(function(animal){
  return animal.charAt(0);
})

console.log(secret.join(''));
console.log(secret);

animals.forEach(animalItem => console.log(animalItem.charAt(0)))

let bigNumbers = [100, 200, 300, 400, 500];

/* Create the smallNumbers array below
Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a new array called smallNumbers, declared with let.*/
let smallNumbers = bigNumbers.map(num => num/100);
console.log(smallNumbers)

/*Display Show:
HelloWorld
HelloWorld
[ 'H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd' ]
H
e
l
l
o
W
o
r
l
d
[ 1, 2, 3, 4, 5 ]
*/