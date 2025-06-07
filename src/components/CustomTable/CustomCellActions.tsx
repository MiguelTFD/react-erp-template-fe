import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Pen, EyeIcon, TrashIcon } from "lucide-react";
import { TableCell } from "@/components/ui/table";
import FormModal from "./FormModal";

interface CustomCellActionsProps<T> {
  row: T;
  onEdit: (item: T) => void;
  onView: (item: T) => void;
  onDelete: (item: T) => void;
  fields: { key: keyof T; label: string; placeholder?: string }[];
}

export function CustomCellActions<T>({ row, onEdit, onView, onDelete, fields }: CustomCellActionsProps<T>) {
  return (
    <TableCell>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Pen className="h-4 w-4" />
            <span className="sr-only">Actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <FormModal
              trigger={<span className="flex"><Pen className="mr-2 h-4 w-4" /> editar </span> }
              title="Edit Item"
              initialData={row}
              fields={fields}
              onSave={onEdit}
            />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onView(row)}>
            <EyeIcon className="mr-2 h-4 w-4" />
            View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDelete(row)}>
            <TrashIcon className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  );
}

export default CustomCellActions;
