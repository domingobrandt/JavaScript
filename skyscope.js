/*Global Scope
We'll start with global scope. Variables defined in the global scope are declared outside of a set of curly braces {}, referred to as a block, and are thus available throughout a program. We'll cover more on blocks in subsequent exercises.

Let's take a look at an example of global scope.

const color = 'blue'

const colorOfSky = () => {
  return color; // blue 
};

console.log(colorOfSky()); // blue
Here the variable color is declared outside of the function block, giving it global scope.
In turn, color can be accessed within the colorOfSky function.
Global variables make data accessible from any place within a program.

1.
At the top of sky.js, write two global variables using const, one named satellite set equal to 'The Moon', the other named galaxy set equal to 'The Milky Way'.

2.
Using let, write another global variable name stars and set it equal to 'North Star'.

3.
Below these variables, using const, write a function named myNightSky. Inside the function, include a return statement like this:

return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
4.
Beneath the myNightSky() function, use console.log() to log the value of myNightSky() to the console.

You'll notice that the myNightSky() function is able to access the global variables without any problem since the variables are available globally.*/
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const myNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
}

console.log(myNightSky());