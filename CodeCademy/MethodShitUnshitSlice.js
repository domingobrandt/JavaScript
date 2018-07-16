/*w3schools.com
The shift() method removes the first item of an array.
The unshift() method adds new items to the beginning of an array, and returns the new length.
The slice() method returns the selected elements in an array, as a new array object.
The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
Note: The original array will not be changed.
*/

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');
console.log(groceryList);


console.log(groceryList.slice(1,2));
console.log(groceryList);

/*
[ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
[ 'bananas' ]
[ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
*/
