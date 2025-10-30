export const API_BASE_URL = "https://";
export const API_FINAL_URL = "-service-production.up.railway.app";

const CATEGORIA_SERVICE_URL = `${API_BASE_URL}categoria${API_FINAL_URL}`;
const SUBCATEGORIA_SERVICE_URL = `${API_BASE_URL}subcategoria${API_FINAL_URL}`;
const PRODUCTO_SERVICE_URL = `${API_BASE_URL}producto${API_FINAL_URL}`;
const STOCK_SERVICE_URL = `${API_BASE_URL}control-stock${API_FINAL_URL}`;

export const ENDPOINTS = {
  categorias: {
    getAll: () => `${CATEGORIA_SERVICE_URL}/categorias`,
    create: () => `${CATEGORIA_SERVICE_URL}/categorias`,
    updateById: (id: string | number) => `${CATEGORIA_SERVICE_URL}/${id}`,
    deleteById: (id: string | number) => `${CATEGORIA_SERVICE_URL}/${id}`,
    getById: (id: string | number) => `${CATEGORIA_SERVICE_URL}/${id}`,
  },

  subcategorias: {
    getAll: () => `${SUBCATEGORIA_SERVICE_URL}/subcategorias`,
    getById: (id: string | number) => `${SUBCATEGORIA_SERVICE_URL}/${id}`,
  },

  productos: {
    getAll: () => `${PRODUCTO_SERVICE_URL}/productos`,
    getLowStock: () => `${PRODUCTO_SERVICE_URL}/productos/bajo-stock`,
    getActive: () => `${PRODUCTO_SERVICE_URL}/productos/activos`,
    getById: (id: string | number) => `${PRODUCTO_SERVICE_URL}/productos/${id}`,
    getBySubcategoria: (subCategoriaId: string | number) =>
      `${PRODUCTO_SERVICE_URL}/productos/subcategoria/${subCategoriaId}`,
    create: () => `${PRODUCTO_SERVICE_URL}/productos`,
    updateById: (id: string | number) =>
      `${PRODUCTO_SERVICE_URL}/productos/${id}`,
    deleteById: (id: string | number) =>
      `${PRODUCTO_SERVICE_URL}/productos/${id}`,
  },

  stock: {
    listInternalLowStock: () => `${STOCK_SERVICE_URL}/stock/listar`,
    updateInternalLowStock: () => `${STOCK_SERVICE_URL}/stock/actualizar`,
    listFeignLowStock: () => `${STOCK_SERVICE_URL}/stock/listarFeign`,
  },
};
