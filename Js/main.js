


/* 
let precio = parseInt(prompt("Ingresar numero"))

if (isNaN(precio)) {
    alert("No es un numero burraso")
} else {
    if (precio < 30) {
        alert("El precio es menor que 30")
    }
    else if (precio< 50){
        alert("El precio es menor que 50")
    }
    else if (precio < 100){
        alert("El precio es menor que 100")
    } 
    else if (precio== 100) {
        alert("Señora tiene cambio de 100?")
    }
    else if (precio>100){
        alert("El precio es mayor 100")
    }
} */

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






let dividir = (a,b)=> a/b
let userResponse = prompt("Desea calcular las cuotas?")
function calcularCuotas (producto,precio,cuotas){
    alert (`El ${producto} se pagara en ${cuotas} cuotas de ${dividir(precio,cuotas)}`)
}
while (userResponse =="Si" || userResponse=="si") {
let producto = prompt("Ingresar un producto")
let precio = parseInt(prompt("Ingresar precio"))
let cuotas = parseInt(prompt("Ingresar cuotas"))

 calcularCuotas(producto,precio,cuotas)
 userResponse = prompt("Desea calcular las cuotas de otro producto?")
}
if (userResponse != "Si") {
    alert("Gracias por su compra")
} 







