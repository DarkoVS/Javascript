


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


