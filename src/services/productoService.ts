import { callApi } from "@/utils/callApi";
import { Producto } from "@/types/entityTypes";

const baseUrl = "/api/dulce";

export const productoService = {
  getAll: () => callApi<Producto[]>({ url: baseUrl, methodType: "GET" }),
  create: (body: Omit<Producto, "idProducto">) =>
    callApi<Producto, typeof body>({ url: baseUrl, methodType: "POST", body }),
  update: (id: number, body: Producto) =>
    callApi<Producto, typeof body>({
      url: `${baseUrl}/${id}`,
      methodType: "PUT",
      body,
    }),
  remove: (id: number) =>
    callApi<void, void>({ url: `${baseUrl}/${id}`, methodType: "DELETE" }),
};
