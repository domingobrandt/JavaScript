/*Comparison Operators II
There are two more useful comparisons we can make. Often, we might want to check if two things are equal to each other or if they are not.

To check if two things equal each other, we write === (three = signs in a row).
To check if two things do not equal each other, we write !== (an exclamation with two = signs in a row).
It can be confusing when to use one = sign and when to use three === signs. Use a single = to assign a value to a variable. Use ===to compare the values of two different variables.

1.
Create a variable named moonPhase and set it equal to full.


2.
Write an if/else statement that checks if the moon is full. If the moonPhase is full, log Howl! to the console, and if it is anything else, log I swear I am not a werewolf.

Notice the code inside the first block of curly braces { } ran. That's because moonPhase equals full, and therefore the condition evaluates to true.*/
let moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf.');
}