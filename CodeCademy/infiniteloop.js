/*In main.js, notice the while loop that has been written. You can run the code to see the loop in action.

The part of this code that ensures the loop is not infinite is:

if (counter ===37){
  break;
}
This code will terminate the while loop, with the break keyword, when the condition counter === 37 is met. Without this code the while loop would run infinitely because there is no condition stated to "break" the loop.

If you would like to see an infinite loop in action, you can remove or comment out the above code in main.js. If you would like to do this, be prepared to refresh your browser. If you would rather not encounter an infinite loop, you can move on to the next exercise.*/let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 40){
    break;
  }
}