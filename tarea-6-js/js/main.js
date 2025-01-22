/*Funcion registro dato*/

/*Ejercicio 1*/
const ejercicio1 = document.getElementById('resultado-1');
ejercicio1.textContent = "";
function showNumeros () {
    for (let i = 10; i >=1 ; i--) {
        ejercicio1.textContent += i + ( i > 1 ? "-" : "");
        console.log(i);
    }
}
showNumeros();

/*Ejercicio 2*/
const ejercicio2 = document.getElementById('resultado-2');
let numberOne = 0;
let numberTwo = 0;

function number1(number) {
    numberOne = parseInt(number);
    actualizar()
}
function number2(number) {
    numberTwo = parseInt(number);
    actualizar()
}

function actualizar() {
    let max = Math.max(numberOne, numberTwo);
    console.log(max);
    ejercicio2.textContent = `El numero más alto es ${max}`;
    sumar();
}

/* Ejercicio 3 */
const ejercicio3 = document.getElementById('resultado-3');

function sumar() {
    ejercicio3.textContent = `La suma es ${numberOne+numberTwo}`;
}

/* Ejercicio 4 */
const ejercicio4 = document.getElementById('resultado-4');
let userState = "";


function dataUser(data){
    if(document.getElementById('estado').value === 'Casado'){
        userState += data+" ";
    }else if(document.getElementById('estado').value === 'Soltero'){
        userState += data+"<br>";
    }
    ejercicio4.innerHTML = userState;
}

/* Ejercicio 5 */
const ejercicio5 = document.getElementById('resultado-5');
function userLength (word){
    ejercicio5.textContent = `Tu palabra tiene ${word.length} letras`;
}

/* Ejercicio 6 */
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","November","Diciembre"];
const ejercicio6 = document.getElementById('resultado-6');
(function showMonths (){
    let meses = "";
    for(let i = 0; i < months.length; i++){
        meses += months[i] + (i < months.length-1 ? "-" : "" );
    }
    ejercicio6.textContent = `Los meses del año son: ${meses}`;
})();

/* Ejercicio 7 */
const ejercicio7 = document.getElementById('resultado-7');
function noteExam(note){
    let nota = Math.round(parseInt(note));
    let notaAlumno;
    switch(true){
        case (nota >= 9 && nota <= 10):
            notaAlumno = `Tienes un ${note}, es un sobresaliente`;
            break;
        case (nota >= 7 && nota < 9):
            notaAlumno = `Tienes un ${note}, es un notable`;
            break;
        case (nota >= 5 && nota < 7):
            notaAlumno = `Tienes un ${note}, es un Aprobado`;
            break;
        case (nota >= 0 && nota < 5):
            notaAlumno = `Tienes un ${note}, es un Suspenso`;
            break;
        default:
            return "Nota no válida";
    }
    ejercicio7.textContent = notaAlumno;
}

/* Ejercicio 10 */
function person ( name, age, phone){
    this.name = name;
    this.age = age;
    this.phone = phone;
}

const carlos = new person('Carlos', 25, 633916689);
const ejercicio10 = document.getElementById('resultado-10');
ejercicio10.textContent = `Mi objeto persona se llama ${carlos.name} tiene ${carlos.age} años y su teléfonoe es ${carlos.phone}`;