const libro = {
  autor:'Tolkien',
  titulo: 'El Silmarillion', 
  año:1977,
  editorial: 'panini', 
  precio: 10000,
  cambio_Libro: function (titulo) {
    this.titulo = titulo
  },
  cambio_año: function (año) {
    this.año = año
  },
  cambio_borrar: function() {
    this.editorial = '';
  },
  cambio_precio: function(precio) {
    this.precio = precio
  }
}


//console.log(libro.precio);

libro.cambio_Libro('los hijos de hurin'),
console.log(libro.titulo);

libro.cambio_año(2007),
console.log(libro.año);

libro.cambio_precio(20000),
console.log(libro.precio);

libro.cambio_borrar()

console.log(libro)