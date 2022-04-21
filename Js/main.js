/* primer desafio entregable */

/* 
let dividir = (a,b)=> a/b
let userResponse = prompt("Desea calcular las cuotas?")
let producto = null
let precio = null
let cuotas = null

function calcularCuotas (producto,precio,cuotas){
    alert (`El ${producto} se pagara en ${cuotas} cuotas de ${dividir(precio,cuotas)}`)
}
while (userResponse =="Si" || userResponse=="si") {

 producto = prompt("Ingresar producto")
 precio = parseInt(prompt("Ingresar precio"))
 cuotas = parseInt(prompt("Ingresar cuotas"))

 calcularCuotas(producto,precio,cuotas)
 userResponse = prompt("Desea calcular las cuotas de otro producto?")
}
if (userResponse != "Si") {
    alert("Gracias por su compra")
}  


 */

/* DESAFIO COMPLEMENTARIO */

/* let randomNumber = Math.floor(Math.random()*3)
let userNumber = parseInt(prompt("Ingrese un numero del 0 al 3"))
while (userNumber != randomNumber) {
    userNumber = parseInt(prompt("No adivinaste, ingrese otro numero"))
}if (randomNumber == userNumber) {
    alert("Advinaste el numero")
}
 */

/* PRIMER DESAFIO ENTREGABLE */

/*  let dividir = (a,b)=> a/b
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

/*  var countSheep = function (num){
    let sheep = "";

for (let i = 1 ; i<=num; i++){
  sheep+= i + ` sheep...`
}
return sheep;
}
countSheep(1)  */

/* primer desafio entregable */

/* 
let dividir = (a,b)=> a/b
let userResponse = prompt("Desea calcular las cuotas?")
let producto = null
let precio = null
let cuotas = null

function calcularCuotas (producto,precio,cuotas){
    alert (`El ${producto} se pagara en ${cuotas} cuotas de ${dividir(precio,cuotas)}`)
}
while (userResponse =="Si" || userResponse=="si") {

 producto = prompt("Ingresar producto")
 precio = parseInt(prompt("Ingresar precio"))
 cuotas = parseInt(prompt("Ingresar cuotas"))

 calcularCuotas(producto,precio,cuotas)
 userResponse = prompt("Desea calcular las cuotas de otro producto?")
}
if (userResponse != "Si") {
    alert("Gracias por su compra")
}   */

//Funcion que muestra lista de productos

/* let productArray = [
    {
        nombre:"televisor",
        precio:"12000"
    },
    {
        nombre:"celular",
        precio:"25000"
    }, */

//PASO 0 : Mostrar productos
/* function showProducts() {
alert(productArray)
} */

/* class producto {
    constructor (nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
        showPrice() {
            alert ("El precio de este producto es de " + this.precio)
        }
        showProduct() {
            alert("El producto seleccionado es " + this.nombre)
        } */

/*  const producto1 = new producto ("Televisor",12000); */
// PASO 1 : Agregar productos
/* let input1= null
let input2= null
let response = prompt("Escriba agregar si desea agregar un producto")
while(response=="agregar"){
input1= prompt("Producto")
input2= prompt("Precio")
productArray.push(new producto (input1,input2))
response = prompt("Escriba agregar si desea agregar un producto")
console.log(productArray)
} */

// PASO 2 : Seleccion de productos
/*  let seleccionProducto = prompt("Seleccionar producto")

let selectedProduct = productArray.find((producto) => producto.nombre === seleccionProducto) */

// PASO 3 : Calculo de cuotas
/* let dividir = (a,b)=> a/b
let userResponse = prompt("Desea calcular las cuotas?")
 */

/* 
function calcularCuotas (producto,precio,cuotas){
    alert (`El ${producto} se pagara en ${cuotas} cuotas de ${dividir(precio,cuotas)}`)
}
while (userResponse =="Si" || userResponse=="si") {

let producto = selectedProduct.nombre
let precio = selectedProduct.precio
/* producto1.showProduct()
producto1.showPrice() */
/* let cuotas = parseInt(prompt("Ingresar cuotas")) */

/*  calcularCuotas(producto,precio,cuotas)
 userResponse = prompt("Desea calcular las cuotas de otro producto?") */
/* }
if (userResponse != "Si") {
    alert("Gracias por su compra")
}  */

/* function solicitarTexto () {
 */
/* 
let userInput = prompt("Ingresar texto").toLowerCase()
let strings = ""
while (userInput!="salir") {
    strings+=`${userInput} ,`
    userInput = prompt("Ingresar otro texto").toLowerCase()
} if (userInput == "salir") {
    alert(texto)
} */

//anda
/* function solicitarTexto2 () {


    let userInput = prompt("Ingrese su texto").toLocaleLowerCase()
    let strings = ""
    while (userInput!="salir") {
    strings+=`${userInput} , `
    userInput = prompt("Ingrese su texto").toLocaleLowerCase()
    }if (userInput == "salir" ) {
      alert(strings)
    }

}
 */

/* let dividir = (a, b) => a / b;
let userResponse = prompt("Desea calcular las cuotas?");
let producto = null;
let precio = null;
let cuotas = null;
let productArray = [
  {
    nombre: "televisor",
    precio: "12000",
  },
  {
    nombre: "celular",
    precio: "25000",
  },
];
let seleccionProducto = ""

let selectedProduct = ""


function selectProduct () {
    seleccionProducto = prompt("Seleccionar producto");
     selectedProduct = productArray.find(
        (producto) => producto.nombre === seleccionProducto
      );
      producto = selectedProduct?.nombre
precio = parseInt(selectedProduct?.precio)
} 

function calcularCuotas(producto, precio, cuotas) {
  alert(
    `El ${producto} se pagara en ${cuotas} cuotas de ${dividir(precio, cuotas)}`
  );
}
while (userResponse == "Si" || userResponse == "si") {
    selectProduct()
  cuotas = parseInt(prompt("Ingresar cuotas"));

  calcularCuotas(producto, precio, cuotas);
  userResponse = prompt("Desea calcular las cuotas de otro producto?");
  
}
if (userResponse != "si") {
  alert("Gracias por su compra");
}
 

