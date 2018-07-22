let randomNumbers = [375, 200, 3.14, 7, 13, 852];

/*Call .filter() on randomNumbers below
Use the .filter() function to return values that are less than 250. 
Save them to a new array called smallNumbers, declared with let.*/

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let smallNumbers = randomNumbers.filter(randomNumbers => randomNumbers < 250 ); 

console.log(smallNumbers);
/*let longFavoriteWords = favoriteWords.filter(function(word) {
  return word.length > 7;
});
*/
//Refactor the .filter() method called on the favoriteWords array to use arrow function syntax.
let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(favoriteWords => favoriteWords.length > 7);
console.log(longFavoriteWords);

/*Display SHOW:
[ 200, 3.14, 7, 13 ]
[ 'nostalgia', 'hyperbole', 'esoteric' ]*/
// Refactor the code above using arrow function syntax

