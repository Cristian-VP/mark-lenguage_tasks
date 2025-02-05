/* EJ 2 - 3 - 4 */

    const edad = Math.floor(parseInt(prompt("Ingresa tu edad")));
    const frame = document.querySelector("#ejer2-result div");
    const pResult = document.querySelector("#ejer2-result p");
    const setColorButton = document.querySelector("#ejer2-result button:first-of-type");
    const resetButton = document.querySelector('#ejer2-result button:last-of-type');
    const url = "https://www.uib.cat/";

    function random(number) {
        return Math.floor(Math.random() * number);
    }

    frame.style.width = "200px";
    frame.style.height = "200px";
    frame.style.margin = "80px auto 0";
    frame.style.outline = "5px dotted black";

    pResult.style.margin = "20px auto";
    pResult.style.textAlign = "center";

    setColorButton.addEventListener("click", () => {
        const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

        if (edad > 18) {
            pResult.textContent = `¡Haz hecho Click en tu vida! Y ya tienes ${edad} puedes visitar ${url}`;
        } else {
            pResult.textContent = `¡Haz hecho Click en tu vida! Pero todavía eres muy joven para preocuparte por tu futuro, solo tienes ${edad} años`;
        }

        frame.style.backgroundColor = randomColor;
    });

    resetButton.addEventListener("click", () => {
        frame.style.backgroundColor = "unset";
    });

/* Ejercicio 5*/
    const urlButton = document.querySelector("#ej3-result button");

    function showUrl(){
        const result = document.querySelector("#ej3-result p:last-of-type");
        const numberUrls = document.querySelectorAll("#ej3-result a");
        let  lastUrl = numberUrls[numberUrls.length - 1];
        let containsGooglePath  = document.querySelectorAll('a[href*="google"]');
        result.innerHTML = `El numero de enlaces es ${numberUrls.length} el último enlace es ${lastUrl} y los que contienen google ${containsGooglePath.length}`;

    }

    urlButton.addEventListener("click", showUrl);

/* Ejercicio 6*/
    const scrollFrame = document.querySelector("#ej4-result");
    const hiddePhrase = document.getElementById("hidde");

    hiddePhrase.style.display = "none";

    scrollFrame.style.height = "200px";
    scrollFrame.style.width = "400px";
    scrollFrame.style.margin = "80px auto 0";
    scrollFrame.style.overflowY = "auto";

    scrollFrame.addEventListener("scroll", () =>{
        console.log("he scroleado")
        hiddePhrase.style.display = "block";
        hiddePhrase.style.backgroundColor = "lightblue";
    });

/* Ejecicio 7 - 8 */
const container = document.querySelector("#ej7-8");
const firstCircle = document.querySelector("#ej7-8 div:nth-child(1)");
const secondCircle = document.querySelector("#ej7-8 div:nth-child(2)");
const thirdCircle = document.querySelector("#ej7-8 div:nth-child(3)");
const allCircles = document.querySelectorAll("#ej7-8 div");

container.style.margin = "80px auto";
firstCircle.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
secondCircle.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
thirdCircle.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
let randomUrlImage = 'https://picsum.photos/200';

allCircles.forEach(circle => {
    circle.addEventListener("mouseover", ()=>{
        //console.log(selectionDiv);
        const restOfSection = document.querySelectorAll("section:not(#ej7-8)");
        restOfSection.forEach(s => {
            s.style.visibility = "hidden";
        })
        document.body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        circle.style.backgroundImage = `url(${randomUrlImage})`;
        circle.style.backgroundSize = "cover";
    });

    circle.addEventListener("mouseout", ()=>{
        const restOfSection = document.querySelectorAll("section:not(#ej7-8)");
        restOfSection.forEach(s => {
            s.style.visibility = "visible";
        });
        circle.style.backgroundImage = "unset";
        document.body.style.backgroundColor = "unset";
    });
});

/* Ejercicio 9 */
/*. Diseña una página web con un botón llamado "Añadir nombre". Al hacer clic en el
botón, se debe añadir un nuevo elemento <li> con un nombre a una lista no ordenada.
Además, cada elemento de la lista debe incluir un botón "Eliminar" que permita quitarlo de
la lista al hacer clic sobre él.
*/
function deleteNode(node){
    const liSelect = node.parentNode;
    liSelect.parentNode.removeChild(liSelect);
}

function addNodeChild(){
    const lista = document.querySelector("#ej9-result ul");
    const li = document.createElement("li");
    let content = document.createTextNode("Otra Lolita")
    li.appendChild(content);
    lista.appendChild(li);
}

/* Ejercicio 10

const parkCars = ["f","f","f","f","f","s","s","c","a","s","a","f","c","a","a","f","c","s"];
const ej10Container = document.getElementById("ej10-result");

ej10Container.style.margin = "90px auto";


function setCars(car){
    const ej10Result = document.querySelector("#ej10-result label:nth-child(2) p");
    let availableCars = new Map();
    let numberKindOfCar;

    for(let car of parkCars){
        availableCars.set(car, (availableCars.get(car) === undefined) ? 0 : availableCars.get(car) + 1);
    }
    numberKindOfCar = availableCars.get(car);

    switch (car) {
        case "f":
            let priceFord = 58.45;
            ej10Result.textContent = `Tenemos a disposición ${numberKindOfCar} Fords. Alquila uno con un 10% descuento ${(priceFord-(priceFord*0.1)).toFixed(2)}. Si dejas escapar la ocasión te cuesta ${priceFord}.`;
            break;
        case "s":
            let priceSeat = 42.36;
            ej10Result.textContent = `Tenemos a disposición ${numberKindOfCar} Fords. Alquila uno con un 10% descuento ${(priceSeat-(priceSeat*0.08)).toFixed(2)}. Si dejas escapar la ocasión te cuesta ${priceSeat}.`;
            break;
        case "c":
            let priceCitroen = 65.45;
            ej10Result.textContent = `Tenemos a disposición ${numberKindOfCar} Fords. Alquila uno con un 10% descuento ${(priceCitroen-(priceCitroen*0.06)).toFixed(2)}. Si dejas escapar la ocasión te cuesta ${priceCitroen}.`;
            break;
        case "a":
            let priceAudi = 80.45;
            ej10Result.textContent = `Tenemos a disposición ${numberKindOfCar} Fords. Alquila uno con un 10% descuento ${(priceAudi-(priceAudi*0.04)).toFixed(2)}. Si dejas escapar la ocasión te cuesta ${priceAudi}.`;
            break;

    }
}
*/

/* Ejercicio 11
const circleContainer = document.querySelector("#ej11-result div");
const circle = document.querySelector("#ej11-result div div");
let initialCirclePosition = 0;
let wall = circleContainer.offsetWidth;
const add = 10;
let animationID;

function moveOn() {
    if (!animationID) {
        animationID = requestAnimationFrame(move);
    }
}

function move(){
    if(initialCirclePosition+circle.offsetWidth <= wall) {
        circle.style.transform = `translateX(${initialCirclePosition}px)`;
        initialCirclePosition += add;
        animationID =  requestAnimationFrame(move);
    }else{
        stopMove()
    }
}

function stopMove(){
    cancelAnimationFrame(animationID);
    animationID = null;
}
*/

/* Ejercicio 12

const ageValues = document.querySelectorAll(".age");
console.log(ageValues.length);
const averageResult = document.querySelector("#ej12-result p");
const buttonCalcAverage = document.querySelector("#ej12-result button");
let ageAverage = 0;

ageValues.forEach(age => {
    let ageInt = parseInt(age.textContent);
    //console.log(parseInt(age.textContent));
    ageAverage += ageInt;

})

buttonCalcAverage.addEventListener("click", () => {
    averageResult.textContent = `La media de edad es ${ageAverage/ageValues.length}`;
})
*/

/* Ejercicio 13

function setOperation(operator){
    const resultado = document.querySelector("#resultado");
    let int1 = parseInt(document.querySelector("#int1").value);
    let int2 = parseInt(document.querySelector("#int2").value);

    switch(operator){
        case "+":
            resultado.textContent = `Tu resultado de sumar ${int1+int2}`;
            break;
        case "*":
            resultado.textContent = `Tu resultado de multiplicar ${int1*int2}`;
            break;
        case "%":
            resultado.textContent = `Tu resultado de dividir ${int1/int2}`;
            break;
        case "-":
            resultado.textContent = `Tu resultado de restar ${int1-int2}`;
            break;
    }
}
*/

/* Ejercicio 14 */
/* Diseña una página web que incluya un formulario con los siguientes campos: Nombre
del usuario, Edad, Deporte que practica (selección de opciones cerradas, por ejemplo:
fútbol, baloncesto, etc.), Color de la camiseta del club, Fecha desde la que practica el
deporte. Implementa un script que añada dinámicamente los datos introducidos por los
usuarios a la página. La información debe mostrarse organizada por deporte y seguir este
formato:
• Fútbol:
Pep, 24 años, practica desde el 01/03/2020
Aina, 26 años, practica desde el 01/01/2018
• Baloncesto:
Pere, 21 años, practica desde el 14/09/2018*/
function childrenInformation(){
    let name = document.querySelector("#nombre").value;
    let age = document.querySelector("#edad").value;
    let sport = document.querySelector("#deporte").value;
    let colorTshirt = document.querySelector("#colorCamiseta").value;
    console.log(colorTshirt);
    let date = document.querySelector("#fechaInicio").value;
}