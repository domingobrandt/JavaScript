
//Change the value of wordCount so that Great! You've started your work! is logged to the console. wordCount 0 or 1
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
//2.Change the value of favoritePhrase so that This string doesn't seem to be empty is logged to the console. 'pupua' to ''

let favoritePhrase = 'pupua';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//Use the ! operator to cause This string is definitely empty to log to the console.

let favoritePhrase = '';

if (!favoritePhrase) {
  console.log("This string is definitely empty.");
} else {
  console.log('This string is definitely empty.');
}

//Using let, write a variable named hungerLevel and set it equal to 5.

let hungerLevel=5;
if(let ===5){
  console.log("igualito")
}else{
  console.log("diferente")
}
//Write an if/else statement that checks if hungerLevel is greater than 7. If so, log Time to eat!. Otherwise, log We can eat later!.

/*
True and False Values
In the previous exercise, we wrote if/else statements. If a given condition were true, one block of code would run. If that condition were false, a different block of code would run. However, there are data types that are not booleans. Let's explore the concepts of true and false in variables that contain other data types, including strings and numbers.

In JavaScript, all variables and conditions have a truthy or falsy value.

let variableOne = 'I Exist!';
if (variableOne) {
// This code will run because variableOne contains a truthy value.
} else {
// This code will not run because the first block ran.
}
In the first line of the program above, a variable is created and set. The value of this variable is a string rather than a boolean. How does this program determine which code block to run?

The second line of this program checks a condition if (variableOne). In the previous exercise, we checked if a variable was equal to true or false. By only writing the name of the variable as the condition, we are checking the truthiness of the variableOne. In this case, variableOne contains a truthy value.

If we changed if (variableOne) to say if (variableTwo), that condition would evaluate to falsy because we have not created a variable called variableTwo in this program. In other words, variableOne is truthy and variableTwo is falsy.

All variables that have been created and set are truthy (and will evaluate to true if they are the condition of a control flow statement) unless they contain one of the seven values listed below:

false
0 and -0
"" and '' (empty strings)
null
undefined
NaN (Not a Number)
document.all (something you will rarely encounter)
There is an important distinction between a variable's value and its truthiness: variableOne's value is 'I exist' because that is the data saved to the variable. variableOne is truthy because it exists and does not contain any of the seven falsy values listed above.*/