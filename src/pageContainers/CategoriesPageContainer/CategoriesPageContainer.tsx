import { ColumnDef } from "@tanstack/react-table";

import categories from "./categories.json";
import CustomTable from "@/components/CustomTable/CustomTable.tsx";

type Category = {
  categoryId: number;
  categoryName: string;
};

const createColumns = (): ColumnDef<Category>[] => [
  {
    header: () => "Id de categoria",
    accessorKey: "categoryId",
  },
  {
    header: () => "Nombre de categoria",
    accessorKey: "categoryName",
  },
];
const formFields = [
  {
    key: "categoryName",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
] satisfies { key: keyof Category; label: string; placeholder?: string }[];

const columns = createColumns();

const CategoriesPageContainer = () => {
  const handleAdd = (newItem: Category) => {
    console.log("Nuevo:", newItem);
  };

  const handleEdit = (updatedItem: Category) => {
    console.log("Editado:", updatedItem);
  };

  const handleView = (item: Category) => {
    console.log("Ver:", item);
  };

  const handleDelete = (item: Category) => {
    console.log("Eliminar:", item);
  };

  return (
    <div>
      <CustomTable
        tableTitle={"Categorías"}
        data={categories}
        columns={columns}
        formFields={formFields}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onView={handleView}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CategoriesPageContainer;
