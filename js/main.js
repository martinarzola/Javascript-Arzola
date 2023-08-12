const productos = [
  { id: 1, nombre: "Leche entera", precio: 8, cantidad: 0, imagen: "../images/leche-entera.png" },
  { id: 2, nombre: "Leche semidescremada", precio: 10, cantidad: 0, imagen: "../images/leche-semi.png" },
  { id: 3, nombre: "Leche descremada", precio: 12, cantidad: 0, imagen: "../images/leche-des.png" },
  { id: 4, nombre: "Queso mantecoso", precio: 12, cantidad: 0, imagen: "../images/queso-mant.png" },
  { id: 5, nombre: "Queso gauda", precio: 14, cantidad: 0, imagen: "../images/queso-gaud.png" },
  { id: 6, nombre: "Queso mozzarella", precio: 15, cantidad: 0, imagen: "../images/queso-mozz.png" },
  { id: 7, nombre: "Mantequilla Con Sal", precio: 11, cantidad: 0, imagen: "../images/mantequilla-sal.png" },
  { id: 8, nombre: "Mantequilla Sin Sal", precio: 13, cantidad: 0, imagen: "../images/mantequilla-no-sal.png" },
  { id: 9, nombre: "Dulce de leche", precio: 10, cantidad: 0, imagen: "../images/dulce-de-leche.png" },
  { id: 10, nombre: "Yogur", precio: 6, cantidad: 0, imagen: "../images/yogurt-natural.png" },
];

// Función para manejar el evento de clic en los botones "Añadir al carrito"
function addToCart(e) {
  const productId = parseInt(e.target.getAttribute("data-id")); // Obtener el ID del producto desde el atributo data-id
  const product = productos.find((p) => p.id === productId); // Buscar el producto en el array de productos
  if (product) {
    product.cantidad += 1;
    guardarEnLocalStorage(productos);

    alert(`El producto ${product.nombre} se ha añadido al carrito`)
  }
}

// Función para guardar el array de productos en localStorage
function guardarEnLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const buttons = document.getElementsByClassName("btn-anadir-carrito");
for (const button of buttons) {
  button.addEventListener("click", addToCart);
  const productId = parseInt(button.getAttribute("data-id")); // Obtener el ID del producto desde el atributo data-id
  button.setAttribute("data-id", productId); // Actualizar el atributo data-id con el ID numérico
}

// Formulario para contacto
let botonFormContact = document.getElementById("enviarBtn");
botonFormContact.onclick = () =>
  alert(
    "¡Gracias por sus comentarios! Recibirá una respuesta a su correo electrónico."
  );