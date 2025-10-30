import { useState } from "react"
import { productoService } from "@/services/productoService"
import { productoFormFields } from "@/config/formFields/productoFormFields"
import { normalizeFormData } from "@/utils/normalizeFormData"
import { createDynamicColumns } from "@/utils/createDynamicColumns"
import useCallApi from "@/hooks/useCallApi"
import CustomTable from "@/components/CustomTable/CustomTable"
import { Producto } from "@/types/entityTypes"


const ProductsPageContainer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { data = [], loading, error, refetch } = useCallApi<Producto[]>({
    url: "/api/dulce",
    methodType: "GET",
  })

  const handleAdd = async (newItemRaw: Omit<Producto, "idProducto">) => {
    setIsSubmitting(true)
    try {
      const body = normalizeFormData(newItemRaw)
      await productoService.create(body)
      await refetch()
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = async (updatedItem: Producto) => {
    setIsSubmitting(true)
    try {
      const body = normalizeFormData(updatedItem)
      await productoService.update(updatedItem.idProducto, body)
      await refetch()
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (item: Producto) => {
    if (!confirm(`¿Eliminar "${item.nombre}"?`)) return
    setIsSubmitting(true)
    try {
      await productoService.remove(item.idProducto)
      await refetch()
    } finally {
      setIsSubmitting(false)
    }
  }

  if (error) return <div className="p-8 text-red-500">Error al cargar datos</div>
  if (loading || isSubmitting) return <div className="p-8">Cargando...</div>
  if (!data) return <div className="p-8">No hay datos a mostrar</div>
  
  const columns = createDynamicColumns(data)

  return (
    <CustomTable
      tableTitle="Productos"
      data={data}
      columns={columns}
      formFields={productoFormFields}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onView={(item) => console.log("Ver producto", item)}
    />
  )
}

export default ProductsPageContainer
