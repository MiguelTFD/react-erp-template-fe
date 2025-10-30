import { Producto } from "@/types/entityTypes"

export const productoFormFields = [
  { key: "nombre", label: "Nombre", type: "text" },
  { key: "descripcion", label: "Descripción", type: "text" },
  { key: "precio", label: "Precio", type: "number" },
  { key: "stock", label: "Stock", type: "number" },
  { key: "urlImagen", label: "URL Imagen", type: "text" },
  { key: "marca", label: "Marca", type: "text" },
  { key: "activo", label: "Activo", type: "checkbox" },
] satisfies { key: keyof Producto; label: string; type: "text" | "number" | "checkbox" }[]
