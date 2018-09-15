/*
ITERATORS
The .filter() Method
Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements cause the callback function to return true are added to the new array. Take a look at 
*/

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

/*Call .filter() on randomNumbers below
Use the .filter() function to return values that are less than 250. 
Save them to a new array called smallNumbers, declared with let.*/
const smallNumbers = randomNumbers.filter(randomNumber=> { 
  return randomNumber < 250;
})

let smallNumbers2 = randomNumbers.filter(randomNumbers => randomNumbers < 250 ); 

//console.log
console.log(smallNumbers); 
console.log(smallNumbers2); 

/*Display SHOW:
[ 200, 3.14, 7, 13 ]

//-----------------------------------------------------------------------------

const longFavoriteWords = favoriteWords.filter(favoriteWord=> { 
  return favoriteWord.length > 7;
})

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
/* Call .filter() on favoriteWords below
2.
Now let's work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.
.*/
const longFavoriteWords = favoriteWords.filter(favoriteWord=> { 
  return favoriteWord.length > 7;
})
let longFavoriteWords2 = favoriteWords.filter(favoriteWords => favoriteWords.length > 7);
//console.log
console.log(longFavoriteWords);
console.log(longFavoriteWords2); 

/*Display SHOW:
[ 'nostalgia', 'hyperbole', 'esoteric' ]*/
// Refactor the code above using arrow function syntax