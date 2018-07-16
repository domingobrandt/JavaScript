/*El parámetro de descanso , también escrito con tres puntos consecutivos ( ...),
le permite representar un número indefinido de elementos como una matriz. 
Esto puede ser útil 
en un par de situaciones diferentes.
*/

const love =["Rachel", "Cara","Helen","First base","Second base","Third base","Home run"];
const [girlfriend,platonic,ex,...metaphors] =love;
console.log(platonic,metaphors[0]);
/*
Este código toma los valores de la love matriz y los asigna a variables individuales utilizando 
la desestructuración . 
 itemses donde desea prestar más atención.
Al usar el parámetro de reposo, items se le asigna el resto de los valores en la matriz
 (como una matriz).
*/
printLoveContens("First base","Second base","Third base","Home run");
function printLoveContens(...items){
for (const item of items){
console.log(item);
	}
}

/*
Funciones variables
Otro caso de uso para el parámetro de reposo es cuando trabajas con funciones variadas. 
Las funciones variables son funciones que toman un número indefinido de argumentos.

Por ejemplo, digamos que tenemos una función llamada sum()que calcula la suma de una 
cantidad indefinida de números. ¿Cómo se sum()puede llamar a la función durante la ejecución?
sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);

Literalmente hay un sin número de formas en sum()que se podría llamar a la función.
Independientemente de la cantidad de números pasados ​​a la función, 
siempre debe devolver la suma total de los números.
*/
function sum() {
    let total = 0;  
    for(const argument of arguments) {
      total += argument;
    }
    return total;
  }
/*Ahora esto funciona bien, pero tiene sus problemas:

Si miras la definición de la sum()función, no tiene ningún parámetro.
Esto es engañoso porque sabemos que la sum()función puede manejar una cantidad indefinida de argumentos.
Puede ser difícil de entender.
Si nunca antes ha usado el objeto arguments, entonces probablemente mire este código y se pregunte de dónde viene el objeto arguments. ¿Apareció de la nada? Sin duda se ve de esa manera.
Usando el parámetro de descanso
Afortunadamente, con la adición del parámetro de reposo, puede reescribir la sum()función para leer más claramente.

*/
function sum(...nums) {
    let total = 0;  
    for(const num of nums) {
      total += num;
    }
    return total;
}
/*This version of the sum() function is both more concise and is easier to read. 
Also, notice the for...in loop has been replaced with the new for...of loop.*/
