/*The .forEach() Method
The first iteration method that we're going to learn is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array.
Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. 
For example, 
I want to eat a mango.
Use function(parameter) syntax for this step (not arrow function => syntax).
2.
Refactor the .forEach() call you just wrote using arrow function syntax instead.
*/
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below

fruits.forEach(function(fruitItem){
  console.log("I want to eat a "+fruitItem)
})

fruits.forEach(fruit => console.log("I want to eat a "+ fruit))


fruits.forEach(Item => console.log('I want to eat a'+ Item))
/* function of  functions same show
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple
*/
//more logic gramatic respect
fruits.forEach(fruit =>{
  if(fruit.charAt(0) =='a'){   
    console.log('I want to eat an '+ fruit)
}
  else{
        console.log('I want to eat a '+ fruit)
  }
})
/* the console shows
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat an apple
*/
//without forEach
for (item of fruits ){
  if(item.charAt(0) =='a'){   
    console.log('I want to eat an '+ item)
}
  else{
        console.log('I want to eat a '+ item)
  }
}