/* Ejercicio complementario implementando arrays */

 let dividir = (a, b) => a / b;
 let newProduct = prompt("Desea agregar un nuevo producto?")

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

// Crear producto
function addProduct(){
  let otherProduct = ""
while (otherProduct="si") {
  let producto = prompt("Ingrese un nuevo producto")
  let precio = parseInt(prompt("Ingrese un nuevo precio"))
  class CreateProduct {
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
  const producto1 = new CreateProduct (producto,precio);
  
  productArray.push(producto1)
  otherProduct = prompt("Desea agregar otro producto?")
  console.log(otherProduct);
  
}
  
}

if (newProduct="si"){
addProduct();
}

let userResponse = prompt("Desea calcular las cuotas?");

let seleccionProducto = "";

let selectedProduct = "";



function selectProduct() {
  seleccionProducto = prompt("Seleccionar producto");
  selectedProduct = productArray.find(
    (producto) => producto.nombre === seleccionProducto
  );
  producto = selectedProduct?.nombre;
  precio = parseInt(selectedProduct?.precio);
}

function calcularCuotas(producto, precio, cuotas) {
  alert(
    `El ${producto} se pagara en ${cuotas} cuotas de ${dividir(precio, cuotas)}`
  );
}
while (userResponse == "Si" || userResponse == "si") {
  selectProduct();
  cuotas = parseInt(prompt("Ingresar cuotas"));

  calcularCuotas(producto, precio, cuotas);
  userResponse = prompt("Desea calcular las cuotas de otro producto?");
}
if (userResponse != "si") {
  alert("Gracias por su compra");
}
 