import { useState } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import useCallApi from "@/hooks/useCallApi";
import { createDynamicColumns } from "@/utils/createDynamicColumns";
import { callApi } from "@/utils/callApi";

import { Categoria } from "@/types/entityTypes";
const formFields = [
  {
    key: "nombre",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
] satisfies { key: keyof Categoria; label: string; placeholder?: string }[];

const CategoriesPageContainer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    data: categories = [],
    loading,
    error,
    refetch,
  } = useCallApi<Categoria[]>({
    url: "https://categoria-service-production.up.railway.app/categorias",
    methodType: "GET",
  });

  const handleAdd = async (newItem: Omit<Categoria, "idCategoria">) => {
    try {
      setIsSubmitting(true);
      await callApi<Categoria, typeof newItem>({
        url: "/api/categoria",
        methodType: "POST",
        body: newItem,
      });
      await refetch();
    } catch (error) {
      console.error("Error al agregar categoría:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = async (updatedItem: Categoria) => {
    try {
      setIsSubmitting(true);
      await callApi<Categoria, Categoria>({
        url: `/api/categoria/${updatedItem.idCategoria}`,
        methodType: "PUT",
        body: updatedItem,
      });
      await refetch();
    } catch (error) {
      console.error("Error al editar categoría:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (item: Categoria) => {
    if (!confirm(`¿Eliminar "${item.nombre}"?`)) return;

    try {
      setIsSubmitting(true);
      await callApi<void, void>({
        url: `/api/categoria/${item.idCategoria}`,
        methodType: "DELETE",
      });
      await refetch();
    } catch (error) {
      console.error("Error al eliminar categoría:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleView = (item: Categoria) => {
    console.log("Ver:", item);
  };

  if (error) return <div>Error al cargar datos</div>;
  if (loading || isSubmitting) return <div>Cargando...</div>;

  if (!categories || categories.length === 0) {
    return (
      <CustomTable
        tableTitle="Categorias"
        data={[]}
        columns={[]}
        formFields={formFields}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onView={handleView}
        onDelete={handleDelete}
      />
    );
  }

  const columns = createDynamicColumns(categories);
  return (
    <CustomTable
      tableTitle="Categorías"
      data={categories}
      columns={columns}
      formFields={formFields}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onView={handleView}
      onDelete={handleDelete}
    />
  );
};

export default CategoriesPageContainer;
