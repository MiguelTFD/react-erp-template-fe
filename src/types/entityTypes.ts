export type Categoria = {
  idCategoria: number;
  nombre: string;
}

export type SubCategoria = {
  idSubCategoria: number;
  nombre: string;
}

export type Producto = {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  urlImagen: string;
  marca: string;
  activo: boolean;
}