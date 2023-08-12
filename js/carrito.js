// Función para calcular el subtotal
function calcularSubtotal(productos) {
  return productos.reduce((total, product) => total + product.precio * product.cantidad, 0);
}

// Obtener el array de productos desde localStorage
let productosTotales = JSON.parse(localStorage.getItem("cart")) || [];

// Filtrar productos con cantidad distinta de cero
const productosConCantidad = productosTotales.filter((product) => product.cantidad !== 0);

// Función para crear un div de producto
function createProductDiv(product) {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
    <div class="product-info">
      <div class="column"> <img src="${product.imagen}" alt="${product.nombre}" class="product-image"></div>
      <div class="column">${product.nombre}
      $${product.precio}</div>
      <div class="column">${product.cantidad}</div>
      <div class="column">
        <button class="btn-sumar" data-id="${product.id}">+</button>
        <button class="btn-restar" data-id="${product.id}">-</button>
      </div>
    </div>
  `;
  
  // Agregar eventos a los botones de sumar y restar
  const btnSumar = productDiv.querySelector(".btn-sumar");
  const btnRestar = productDiv.querySelector(".btn-restar");
  
  btnSumar.addEventListener("click", () => {
    product.cantidad += 1;
    guardarEnLocalStorage(productosTotales);
    actualizarProductos();
    actualizarSubtotal(productosTotales);
  });


  btnRestar.addEventListener("click", () => {
    if (product.cantidad > 0) {
      product.cantidad -= 1;
      guardarEnLocalStorage(productosTotales);
      actualizarProductos();
      actualizarSubtotal(productosTotales);
    }
  });

  return productDiv;
}

// Función para actualizar el subtotal en el DOM
function actualizarSubtotal(productos) {
  const subtotalElement = document.getElementById("subtotal");
  const subtotal = calcularSubtotal(productos);
  subtotalElement.innerHTML = `<h4>Subtotal: $${subtotal}</h4>`;
}

// Función para actualizar la sección de productos en el DOM
function actualizarProductos() {
  const productsContainer = document.getElementById("carrito-contenido");
  productsContainer.innerHTML = "";
  
  productosConCantidad.forEach((product) => {
    const productDiv = createProductDiv(product);
    productsContainer.appendChild(productDiv);
  });
}

// Botón para vaciar localStorage y limpiar el DOM
const btnVaciar = document.getElementById("btn-vaciar");
btnVaciar.addEventListener("click", () => {
  localStorage.clear();
  productosConCantidad.length = 0;
  actualizarProductos();
  actualizarSubtotal(productosConCantidad);
  alert("Se ha vaciado el carrito.");
});

// Llamada inicial para cargar los productos en el DOM
actualizarProductos();
actualizarSubtotal(productosConCantidad);
