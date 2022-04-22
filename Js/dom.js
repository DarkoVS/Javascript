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


let newProduct = prompt("Desea agregar un nuevo producto?");
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

  for (const producto of productArray) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                            <p>  Origen: ${producto.origen}</p>
                            <b> $ ${producto.precio}</b>
                            <img src=${producto.img} alt="">;`;

    document.body.appendChild(contenedor);
}