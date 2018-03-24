var foods = ["taco","chinese food"];
//carga el arreglo recien declarado al DOm
function loadFoods(){
   document.getElementById("foods").innerHTML = foods;
}
/*pide un valor guarda en food y lo agrega con lenght a foods el arreglo
principal imprime de nuevo el arreglo principal*/
function myFunction() {
  var food = prompt("What is your favorite food? ");
  foods[foods.length] = food;
  document.getElementById("foods").innerHTML = foods;
}

