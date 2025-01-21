/* Ejercicio 1

let palabra = prompt('Dame una palabra').split(" ");
console.log(palabra.length);
let ejer1 = document.getElementById('ej7-1');
ejer1.textContent = palabra.length;
*/
/* Ejercicio
let piramide = "";
const ejer2 = document.getElementById('ej7-2');

for(let i = 0; i < 5; i++) {
    piramide += "#"+"\n";
}
ejer2.textContent = piramide;
2*/
/* Ejercicio 3
const ejer3 = document.getElementById('ej7-3');

let numero1 = prompt('Dame un numero');
let numero2 = prompt('Dame otro numero');
ejer3.innerText = `El numero más pequeño es ${Math.min(numero1, numero2)}`;

 */

/* Ejercicio 4
let frase = prompt('Dame una frase').toLowerCase();
const ejer4 = document.getElementById('ej7-4');
ejer4.innerText = `Tu frase en minúsculas es: ${frase} y en mayúsculas: ${frase.toUpperCase()}`;
 */

/* Ejercicio 5  */
function factorial(numero) {
    if(numero === 0){
        return 1;
    }
    return numero * factorial(numero-1);
}
let numeros = prompt("Introduce un numero");

const ejer5 = document.getElementById('ej7-5');
while(confirm("quieres seguir introduciendo datos")) {

    numeros += prompt("Introduce un numero")+" " ;
}
let numerosToFactorial = "";
numeros.split(' ');

for(let i = 0; i < numeros.length; i++) {
    numerosToFactorial +=  factorial(parseInt(numeros[i]));
}

ejer5.innerText = `Tus numeros en factorial son: ${numeros}`;