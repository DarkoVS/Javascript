/* Primera pre entrega del proyecto final */

let dividir = (a, b) => a / b;
let newProduct = prompt("Desea agregar un nuevo producto?");
let producto = null;
let precio = null;
let cuotas = null;
let productArray = [
  {
    nombre: "televisor",
    precio: "12000",
    origen: "bolivia",
    img:"https://i.blogs.es/328677/captura-2021-02-12-a-las-11.29.53/original.png"
  },
  {
    nombre: "celular",
    precio: "25000",
    origen: "uganda",
    img:"https://ar.celulares.com/fotos/nokia-1100-1149-g-alt.jpg"
  },
  {
    nombre: "parlante",
    precio: "1300",
    origen: "kazajistan",
    img:"https://images.fravega.com/f500/1cebb72e7c68931d60d46cdb37dbe6fd.jpg"
  }
];

// Crear producto
function addProduct() {
  let producto = prompt("Ingrese un nuevo producto");
  let precio = parseInt(prompt("Ingrese un nuevo precio"));
  let origen = prompt("Ingrese origen");
  let img = prompt("Ingrese una imagen")
  class CreateProduct {
    constructor(nombre, precio, origen,img) {
      this.nombre = nombre;
      this.precio = precio;
      this.origen = origen;
      this.img = img;
    }
  }
  const producto1 = new CreateProduct(producto, precio, origen,img);

  productArray.push(producto1);
}

while (newProduct == "si") {
  addProduct();
  newProduct = prompt("Desea agregar otro producto?");
}
let filterProductOrigin = prompt("Desea filtrar por pais de origen?")

//Filtrar por origen
function filterByOrigin () {
  let productOrigin = prompt("Ingrese un pais de origen")
  productArray= productArray.filter(x=>x.origen==productOrigin)
}
if (filterProductOrigin=="si"){
  filterByOrigin()
  }
  let userResponse = prompt("Desea calcular las cuotas?");
let seleccionProducto = "";

let selectedProduct = "";

function selectProduct() {
  seleccionProducto = prompt("Seleccionar producto");
  selectedProduct = productArray.find(
    (producto) => producto.nombre === seleccionProducto
  )
  if (!selectedProduct){
    alert("Ese producto no existe en nuestra base de datos")
    selectProduct()
  }
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
