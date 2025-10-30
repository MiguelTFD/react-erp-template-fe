import { ColumnDef } from "@tanstack/react-table";

import orders from "./orders.json";
import CustomTable from "@/components/CustomTable/CustomTable.tsx";

type Order = {
  orderId: number;
  orderDate: string;
  deliveryType: string;
  orderInfo: string;
  deliveryInstructions: string;
  orderStatus: string;
};

const createColumns = (): ColumnDef<Order>[] => [
  {
    header: () => "Id del pedido",
    accessorKey: "orderId",
  },
  {
    header: () => "Fecha del pedido",
    accessorKey: "orderDate",
  },
  {
    header: () => "Tipo de entrega",
    accessorKey: "deliveryType",
  },
  {
    header: () => "Informacion adicional",
    accessorKey: "orderInfo",
  },
  {
    header: () => "Instrucciones de entrega",
    accessorKey: "deliveryInstructions",
  },
  {
    header: () => "Status del pedido",
    accessorKey: "orderStatus",
  },
];

const formFields = [
  {
    key: "orderDate",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "deliveryType",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "orderInfo",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "deliveryInstructions",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
  {
    key: "orderStatus",
    label: "Nombre de Categoría",
    placeholder: "Ej: Bebidas",
  },
] satisfies { key: keyof Order; label: string; placeholder?: string }[];

const columns = createColumns();

const OrdersPageContainer = () => {
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
        tableTitle={"Pedidos"}
        data={orders}
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

export default OrdersPageContainer;
