/*LOOPS
while Loops
Math.random();              // returns a random number 
Math.floor(1.6); //Round a number downward to its nearest integer:
Instructions
1.Below the array cards, create a variable named currentCard and set it 
equal to 'Spade'.

This variable will hold the name of the card we just flipped. We are using
 'Spade' as the first card.

2.Create a while loop. The condition should check if the currentCard is NOT a 'Spade'.

3.Inside the while loop, log the value of currentCard to the console.

Inside the while loop, below the console.log() statement you just wrote, add this code:

currentCard = cards[Math.floor(Math.random() * 4)];

This code will generate a random number between 0 and 3, the range of indices of the cards array, and reassign currentCard to a new card from that array. Because the while loop only runs if the card is NOT a Spade, the value of currentCard will only be logged to the console if it is not 'Spade'.

4.Outside the while loop, on the last line of the program, use console.log() to log that the program found a spade. You can use the string "found a spade" inside console.log().

Change the currentCard that you set to 'Spade' in the first step to 'Heart' so that the program will run.

Run the code a few times to see the output changing. You can see the while loop guessing a card, then seeing if it is a Spade, over and over, until it finds one.

Did you remember to change the currentCard you set at the beginning of this exercise to 'Heart' before running your code?
*/

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Heart';
while (currentCard != 'Spade' ){
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log("found a spade");

/*Display show 
Heart 
Club
Diamond
Diamond
Club
Club
Club
Diamond
Heart
Diamond
Club
Diamond
Diamond
Club
Diamond
found a spade
*/