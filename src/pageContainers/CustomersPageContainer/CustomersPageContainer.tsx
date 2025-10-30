import { ColumnDef } from "@tanstack/react-table";

import customers from "./customers.json";
import CustomTable from "@/components/CustomTable/CustomTable.tsx";

type Customer = {
  customerId: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

const createColumns = (): ColumnDef<Customer>[] => [
  {
    header: () => "Id",
    accessorKey: "customerId",
  },
  {
    header: () => "Nombres",
    accessorKey: "firstName",
  },
  {
    header: () => "Apellidos",
    accessorKey: "lastName",
  },
  {
    header: () => "Telefono",
    accessorKey: "phone",
  },
  {
    header: () => "Correo",
    accessorKey: "email",
  },
];

const formFields = [
  {
    key: "firstName",
    label: "Nombres",
    placeholder: "Ej: Sevastian",
  },
  {
    key: "lastName",
    label: "Apellidos",
    placeholder: "Ej: Caceres Blanco",
  },
  {
    key: "phone",
    label: "Numero de telefono",
    placeholder: "Ej: 982 723 123",
  },
  {
    key: "email",
    label: "Email",
    placeholder: "Ej: joel24@gmail.com",
  },
] satisfies { key: keyof Customer; label: string; placeholder?: string }[];

const columns = createColumns();

const CustomersPageContainer = () => {
  const handleAdd = (newItem: Customer) => {
    console.log("Nuevo:", newItem);
  };

  const handleEdit = (updatedItem: Customer) => {
    console.log("Editado:", updatedItem);
  };

  const handleView = (item: Customer) => {
    console.log("Ver:", item);
  };

  const handleDelete = (item: Customer) => {
    console.log("Eliminar:", item);
  };

  return (
    <div>
      <CustomTable
        tableTitle={"Clientes"}
        data={customers}
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

export default CustomersPageContainer;
