// Productos y precios
const productos = [
  {nombre: 'Leche entera', precio: 8},
  {nombre: 'Leche descremada', precio: 9},
  {nombre: 'Queso mantecoso', precio: 12},
  {nombre: 'Queso gauda', precio: 14},
  {nombre: 'Queso mozzarella', precio: 15},
  {nombre: 'Mantequilla', precio: 12},
  {nombre: 'Dulce de leche', precio: 10},
  {nombre: 'Yogur', precio: 6},
]

// Buscar productos
function buscarProducto(nombreProducto) {
  return productos.find(producto => producto.nombre === nombreProducto)
}

// Función para calcular el costo total de una compra
function calcularCostoTotal() {
  let costoTotal = 0;
  let productosSeleccionados = [];

// Mostrarle al usuario los productos disponibles
  console.log('Productos disponibles:');
  productos.forEach(producto => {
  console.log(`${producto.nombre}: $${producto.precio}`);
});

// Solicitarle al usuario los productos y sus cantidades
  let seleccion = true;
  while (seleccion) {
    let nombreProducto = prompt('Ingresa el nombre de un producto (o "esc" para terminar):');
    if (nombreProducto.toLowerCase() === 'esc') {
      seleccion = false;
    } else {
      const producto = buscarProducto(nombreProducto);
      if (producto) {
        const cantidadProducto = parseInt(prompt(`Ingresa la cantidad de ${nombreProducto} que deseas comprar:`));
        if (!isNaN(cantidadProducto) && cantidadProducto > 0) {
          const costoProducto = producto.precio * cantidadProducto;
          costoTotal += costoProducto;
          productosSeleccionados.push({nombre: nombreProducto, cantidad: cantidadProducto, costo: costoProducto});
          console.log(`Elegiste ${cantidadProducto} unidad(es) del producto ${nombreProducto}`)
        } else {
          console.log('Cantidad no válida. Por favor, elige otra.');
        } 
      } else {
        console.log('Producto no válido. Por favor, elige otro.');
      }      
    }
  }

// Reflejarle al usuario los productos que seleccionó + el costo total con y sin iva
  console.log('Productos seleccionados: ', productosSeleccionados)

  console.log(`Costo total: $${costoTotal}`)
  const costoTotalConIva = costoTotal * 1.21 // Suponiendo un 21% de IVA
  const costoTotalConIvaReal = costoTotalConIva.toFixed(2)
  console.log(`Costo total con IVA: $${costoTotalConIvaReal}`)
  alert(`El costo total (sin IVA) es de $${costoTotal}. El costo total con IVA incluido es de $${costoTotalConIvaReal}`)
}

calcularCostoTotal();


