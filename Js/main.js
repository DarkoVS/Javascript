


/* DESAFIO COMPLEMENTARIO */

let randomNumber = Math.floor(Math.random()*3)
let userNumber = parseInt(prompt("Ingrese un numero del 0 al 3"))
while (userNumber != randomNumber) {
    userNumber = parseInt(prompt("No adivinaste, ingrese otro numero"))
}if (randomNumber == userNumber) {
    alert("Advinaste el numero")
}
function solicitarNombre () {
    let ingresarNombre = prompt("Ingresar Nombre") 
        alert ("El nombre ingresado es" + ingresarNombre)
    }

/* PRIMER DESAFIO ENTREGABLE */


/* let dividir = (a,b)=> a/b
let userResponse = prompt("Desea calcular las cuotas?")
class producto {
    constructor (nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
        showPrice() {
            alert ("El precio de este producto es de " + this.precio)
        }
        showProduct() {
            alert("El producto seleccionado es " + this.nombre)
        }
}
const producto1 = new producto ("Televisor",12000);


function calcularCuotas (producto,precio,cuotas){
    alert (`El ${producto} se pagara en ${cuotas} cuotas de ${dividir(precio,cuotas)}`)
}
while (userResponse =="Si" || userResponse=="si") {

let producto = producto1.nombre
let precio = producto1.precio
producto1.showProduct()
producto1.showPrice()
let cuotas = parseInt(prompt("Ingresar cuotas"))

 calcularCuotas(producto,precio,cuotas)
 userResponse = prompt("Desea calcular las cuotas de otro producto?")
}
if (userResponse != "Si") {
    alert("Gracias por su compra")
} 
 */


/* const producto2 = new producto ("Camara",1200);
const producto3 = new producto ("Cama",12000);
const producto4 = new producto ("Celular",12000);
const producto5 = new producto ("Pantalla",12000);
const producto6 = new producto ("Mouse",12000);

console.log (producto1)
console.log (producto2)
console.log (producto3) */
/* OBJETOS */

/* let nombre = "Darko";
let edad = 26;
let calle = "Leguizamon 979"

const persona1 = { nombre:"Darko", edad:26,calle:"Leguizamon 979" }

console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)


let cadena = ("Hola Darko")

console.log (cadena.length)
console.log (cadena.toLowerCase())
console.log (cadena.toUpperCase()
) */

/* function Persona (nombre,edad,calle) {
    this.nombre = nombre;
    this.edad= edad;
    this.calle= calle;
    this.hablar = function () {console.log ("Hola soy "+ this.nombre)}
}

const persona1 = new Persona("Darko", 26, "Leguizamon979")
const persona2 = new Persona("Agustin", 31, "Necochea147")

persona1.hablar(); */
/* 
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"}

for (const propiedad in persona1) {
    console.log(persona1);
}

for (const propiedad in persona1) {
    console.log(persona1 [propiedad]);
} */


/* var countSheep = function (num){
    let sheep = "";

for (let i = 1 ; i<=num; i++){
  sheep+= i + ` sheep...`
}
return sheep;
}
countSheep(1) */
