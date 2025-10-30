type Categoria = {
  idCategoria: number;
  nombre: string;
}

type SubCategoria = {
  idSubCategoria: number;
  nombre: string;
}

type Producto = {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  urlImagen: string;
  marca: string;
  activo: boolean;
}