/* Ejercicio 1

let palabra = prompt('Dame una palabra').split(" ");
console.log(palabra.length);
let ejer1 = document.getElementById('ej7-1');
ejer1.textContent = palabra.length;
*/

/*Ejercicio 2
let piramide = "";
const ejer2 = document.getElementById('ej7-2');

for(let i = 0; i < 5; i++) {
    piramide += "#";
    ejer2.innerHTML += piramide + "<br>";
    console.log(piramide);
}
*/

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

/* Ejercicio 5
function factorial(numero) {
    if(numero === 0){
        return 1;
    }
    return numero * factorial(numero-1);
}
const ejer5 = document.getElementById('ej7-5');
let inputIntArr = [];
let number;
let factorialResult = "";
do{
    number = parseInt(prompt("Introduce un numero"));
    if(number > 0 && number != null && !isNaN(number)){
        inputIntArr.push(number);
    }

}while(confirm("¿Quieres seguir introduciendo datos?"));

inputIntArr.forEach((value, index) => {
    factorialResult += factorial(value).toString()+" ";
})
console.log(factorialResult);
ejer5.innerText = `Tus numeros en factorial son: ${factorialResult}`;
*/

/* Ejercicio 6

let salary = parseFloat(prompt("Introduce tu salario"));
let age = parseInt(prompt("Introduce tu edad"));
const ejer6 = document.getElementById('ej7-6');

switch (true) {
    case salary >= 1000 && salary<= 2000:
        if(age > 45){
            salary = salary + (salary * 0.03);
        }else{
            salary = salary + (salary * 0.1);
        }
        break;
    case salary < 1000:
        if(age < 30 ){
            salary = 1100;
        }else if (age > 45){
            salary = salary + (salary * 0.15);
        }else if( salary >= 30 && salary <=45){
            salary = salary + (salary * 0.03);
        }
        break;
    default: salary = "Dato no válido";
}
ejer6.innerHTML = salary;
 */

/* Ejercicio 7
let intRandom = Math.floor(Math.random()*(100 - 1) + 1 );
let intUser = parseInt(prompt("¿Qué numero del 1 - 100 tengo en la cabeza?"))
const ejer7 = document.getElementById('ej7-7');
ejer7.innerHTML = (intUser === intRandom) ? "Lo has adivinado" : ( intUser < intRandom)? "El numero es muy bajo" : "El numero es muy alto";
*/

/* Ejercicio 8
const ejer8 = document.getElementById('ej7-8');
let vidas = 5;
let intRandom = Math.floor(Math.random()*(100 - 1) + 1 );
let userWin = false;
do{
    let intUser = parseInt(prompt("¿Qué numero del 1 - 100 tengo en la cabeza?"));
    if(intUser == intRandom){
        alert("Lo has adivinado, máquina!");
        userWin = true;
    }else if (intUser < intRandom){
        alert("Te has quedado corto");
    }else if (intUser > intRandom){
        alert("Te has pasado!");
    }
    vidas--;
}while(vidas > 0 && !userWin);

ejer8.innerHTML = (userWin) ? "Has vencido a la máquina" : "Te has quedado sin vidas";
*/

/* Ejercicio 9
const bodyMonsterUgly = ["pies","pies","piernas","pies","piernas","cuerpo","cabeza","cuernos","cuerpo","cuernos"];
const ejer9 = document.getElementById('ej7-9');

let niceBodyMonster = bodyMonsterUgly.filter((piece, i) => {
    return bodyMonsterUgly.indexOf(piece) === i;
});
ejer9.innerHTML = `Mi Array es: ${bodyMonsterUgly}. Eliminando sus partes repetidas: ${niceBodyMonster}`;
console.log(niceBodyMonster);
 */
/* Ejercicio 10
    Ver ejercicio 8
 */

