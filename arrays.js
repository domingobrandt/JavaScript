/*declarar un arreglo cualquiera
1.Individual elements of arrays can also be stored to variables.
Create a variable named listItem and set it equal to the first item in your newYearsResolutions
array using square bracket notation ([]).
Then use console.log() to print the listItem variable to the console.
2.Now, console.log() the third item in the newYearsResolutions array without using a variable.
3.Try to log the item at position [3] to the console. What is logged to the console? 
arregle dentro de otro arreglo */

let newYearsResolutions 
= ['Run a marathon', 'Learn a new language', 'Read 52 books','God loves you'];

let listItem = newYearsResolutions[0];
//update an elements for arrays
newYearsResolutions[2] = 'cambio perfectos';
//push Method  allows us to add items to the end of an array.
newYearsResolutions.push('come');
//method .pop(), is similar to .push(). This method removes the last item of an array.
newYearsResolutions.pop();
//More Array Methods method to remove the first item from the array 'Run a marathon'
newYearsResolutions.shift();
// add to the front to the beginning of you newYearsResolutions
newYearsResolutions.unshift('finish my thesis');
//imprime los lugares del 1 al 4
console.log(newYearsResolutions.slice(1, 4));
//imprime el de la posicion 0
console.log(listItem);

console.log(newYearsResolutions[2]);

console.log(newYearsResolutions[3]);
//length property :how many items are stored inside of an array.
console.log(newYearsResolutions.length);
//to print the arrays, to make sure mine items were added
console.log(newYearsResolutions);

//on the screen result = Run a marathon cambio perfectos God loves you 4

