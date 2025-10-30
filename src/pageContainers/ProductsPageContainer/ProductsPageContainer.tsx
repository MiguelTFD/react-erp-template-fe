import { ColumnDef } from "@tanstack/react-table";

import products from "./products.json";
import CustomTable from "@/components/CustomTable/CustomTable.tsx";

type Order = {
  productId: number;
  name: string;
  stock: string;
  unitPrice: string;
  discount: string;
  description: string;
  size: string;
  weight: string;
  category: string;
};

const createColumns = (): ColumnDef<Order>[] => [
  {
    header: () => "Id",
    accessorKey: "productId",
  },
  {
    header: () => "Nombre",
    accessorKey: "name",
  },
  {
    header: () => "Stock",
    accessorKey: "stock",
  },
  {
    header: () => "Precio Unitario",
    accessorKey: "unitPrice",
  },
  {
    header: () => "Descuento",
    accessorKey: "discount",
  },
  {
    header: () => "Descripcion",
    accessorKey: "description",
  },
  {
    header: () => "Tamanio",
    accessorKey: "size",
  },
  {
    header: () => "Peso",
    accessorKey: "weight",
  },
  {
    header: () => "Categoria",
    accessorKey: "category",
  },
];

const formFields = [
  {
    key: "name",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "stock",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "unitPrice",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "discount",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "description",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "size",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "weight",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
] satisfies { key: keyof Order; label: string; placeholder?: string }[];

const columns = createColumns();

const ProductsPageContainer = () => {
  const handleAdd = (newItem: Order) => {
    console.log("Nuevo:", newItem);
  };

  const handleEdit = (updatedItem: Order) => {
    console.log("Editado:", updatedItem);
  };

  const handleView = (item: Order) => {
    console.log("Ver:", item);
  };

  const handleDelete = (item: Order) => {
    console.log("Eliminar:", item);
  };
  return (
    <div>
      <CustomTable
        tableTitle={"Productos"}
        data={products}
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

export default ProductsPageContainer;
