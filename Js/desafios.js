/* Ejercicio complementario implementando arrays */

let dividir = (a, b) => a / b;
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
