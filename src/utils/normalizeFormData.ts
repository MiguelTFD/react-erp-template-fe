/* eslint-disable @typescript-eslint/no-explicit-any */
import { productoFormFields } from "@/config/formFields/productoFormFields";

export const normalizeFormData = <T extends Record<string, any>>(raw: T): T => {
  const normalized: Record<string, any> = {};

  productoFormFields.forEach(({ key, type }) => {
    const value = raw[key];

    if (type === "number") {
      normalized[key] = Number(value);
    } else if (type === "checkbox") {
      normalized[key] = Boolean(value);
    } else {
      normalized[key] = value;
    }
  });

  return normalized as T;
};
