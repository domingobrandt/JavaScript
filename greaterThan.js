function isGreaterThan(numberOne, numberTwo){
    if(numberOne > numberTwo){
      return true;
    } else {
      return false;
    }
  }
  
  isGreaterThan(4, 8)
/*Function Declarations
Now that we have an understanding of functions in JavaScript, let's take a broader look at the type of functions we'll see. Functions in JavaScript are generally declared as either a function declaration or a function expression.

A function declaration is a function that is bound to an identifier or name.

function square (number) {
  return number * number; 
}

console.log(square(5));
// Output: 25.
Function declarations require the keyword function, a name, and a function body. You can identify this by the use of function square() and the {} below. Function declarations do not end in a semi-colon.

Let's create a basic function declaration.

1.
In greaterThan.js, use a function declaration to create a new function called isGreaterThan. The function should take two parameters, numberOne and numberTwo.

function isGreaterThan(numberOne, numberTwo) {

}
2.
Inside the function, using an if/else statement, create the following logic:

If numberOne is greater than numberTwo, return true.

Otherwise, return false.

if (some condition) {
  return true;
} else {
  return false;
}
3.
Call the isGreaterThan() function with two arguments of your choice.

isGreaterThan(5, 7);*/
