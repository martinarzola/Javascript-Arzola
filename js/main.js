const productos = [
  {
    id: 1,
    nombre: "Leche entera",
    precio: 8,
    cantidad: 0,
  },
  {
    id: 2,
    nombre: "Leche Semi-Descremada",
    precio: 10,
    cantidad: 0,
  },
  {
    id: 3,
    nombre: "Leche descremada",
    precio: 12,
    cantidad: 0,
  },
  {
    id: 4,
    nombre: "Queso mantecoso",
    precio: 12,
    cantidad: 0,
  },
  {
    id: 5,
    nombre: "Queso gauda",
    precio: 14,
    cantidad: 0,
  },
  {
    id: 6,
    nombre: "Queso mozzarella",
    precio: 15,
    cantidad: 0,
  },
  {
    id: 7,
    nombre: "Mantequilla Con Sal",
    precio: 11,
    cantidad: 0,
  },
  {
    id: 8,
    nombre: "Mantequilla Sin Sal",
    precio: 13,
    cantidad: 0,
  },
  {
    id: 9,
    nombre: "Dulce de leche",
    precio: 10,
    cantidad: 0,
  },
  {
    id: 10,
    nombre: "Yogur",
    precio: 6,
    cantidad: 0,
  },
];

// Función para añadir un producto al carrito y almacenarlo en localStorage
function agregarAlCarrito(id) {
  const producto = productos.find((prod) => prod.id === id);
  producto.cantidad++;
  actualizarCarrito();
  guardarEnLocalStorage();
}

// Función para guardar el contenido del carrito en localStorage
function guardarEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(productos));
}

// Función para cargar el contenido del carrito desde localStorage
function cargarDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    const productosGuardados = JSON.parse(carritoGuardado);
    for (const producto of productosGuardados) {
      const productoActual = productos.find((prod) => prod.id === producto.id);
      if (productoActual) {
        productoActual.cantidad = producto.cantidad;
      }
    }
  }
}

// Función para actualizar el contenido del carrito.html
function actualizarCarrito() {
  const carritoDiv = document.getElementById("carrito-contenido");
  carritoDiv.innerHTML = "";

  productos.forEach((producto) => {
    if (producto.cantidad > 0) {
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("producto-carrito");

      const imagen = document.createElement("img");
      imagen.src = producto.imagen;
      imagen.alt = producto.nombre;
      productoDiv.appendChild(imagen);

      const nombre = document.createElement("h2");
      nombre.textContent = producto.nombre;
      productoDiv.appendChild(nombre);

      const precio = document.createElement("p");
      precio.textContent = `$${producto.precio}`;
      productoDiv.appendChild(precio);

      const cantidad = document.createElement("p");
      cantidad.textContent = `Cantidad: ${producto.cantidad}`;
      productoDiv.appendChild(cantidad);

      carritoDiv.appendChild(productoDiv);
    }
  });
}

// Cargamos el contenido del carrito desde localStorage al cargar la página
window.addEventListener("load", () => {
  cargarDesdeLocalStorage();
  actualizarCarrito();
});

// Asignamos el evento de clic a los botones "Añadir al carrito"
const botonesAgregar = document.querySelectorAll(".btn-anadir-carrito");
botonesAgregar.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    agregarAlCarrito(index + 1);
  });
});
