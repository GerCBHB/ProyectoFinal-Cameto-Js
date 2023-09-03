/**
 *
 */
class Productos {
  constructor(id, producto, stock, precio, imagen, descripcion) {
    this.id = id
    this.producto = producto
    this.imagen = imagen
    this.stock = stock
    this.cantidad = 1
    this.precio = precio
    this.descripcion = descripcion
  }
}

/**
 *
 */
const articulo = new Productos(0, "Libreta Unicornio", 100, 120, imagenes.LibretaUnicornio, descripciones.LibretaUnicornio)
const articulo1 = new Productos(1, "Notas Sirena", 50, 80, imagenes.NotasSirena, descripciones.NotasSirena)
const articulo2 = new Productos(2, "Lapiceras de Gel", 20, 210, imagenes.Lapiceras, descripciones.Lapiceras)
const articulo3 = new Productos(3, "Cartuchera Floreada", 70, 190, imagenes.Cartuchera, descripciones.Cartuchera)
const articulo4 = new Productos(4, "Biblioratos Pastel", 50, 120, imagenes.Biblioratos, descripciones.Biblioratos)
const articulo5 = new Productos(5, "Block de notas Presonalizado", 50, 60, imagenes.Block, descripciones.Block)
const articulo6 = new Productos(6, "Recetario Artesanal", 150, 300, imagenes.Recetarios, descripciones.Recetarios)
const articulo7 = new Productos(7, "Cuaderno A5", 250, 90, imagenes.Cuadernos, descripciones.Cuadernos)
const articulo8 = new Productos(8, "Portalapices", 100, 190, imagenes.Portalapices, descripciones.Portalapices)

const { imagen, stock, precio, producto } = articulo

/**
 *
 */
let prods = [articulo, articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8]
