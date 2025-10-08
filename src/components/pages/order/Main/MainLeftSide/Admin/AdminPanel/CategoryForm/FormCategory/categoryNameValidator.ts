import { colorOptions } from "@/constants/categories";
import { ICON_NAMES } from "@/types/Category";
import z from "zod";

const categoryIconSchema = z.enum(ICON_NAMES);

const validColors = colorOptions.map((option) => option.color);

export const categoryFormSchemaStrict = z.object({
  id: z.string(),
  label: z
    .string()
    .min(1, "Veuillez entrer un nom de catégorie")
    .min(2, "La catégorie doit contenir au moins 2 caractères")
    .max(20, "La catégorie ne peut pas dépasser 20 caractères")
    .regex(
      /^[\p{L}\s]+$/u,
      "La catégorie ne doit contenir que des lettres, des espaces ou -"
    ),
  color: z.enum(validColors),
  iconName: categoryIconSchema,
});
