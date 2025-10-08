import z from "zod"

const categoryIconSchema = z.enum(["burger", "drink", "salad", "dessert"])

export const categoryFormSchemaStrict = z.object({
  id: z.string().uuid(),
  label: z
    .string()
    .min(1, "Veuillez entrer un nom de catégorie")
    .min(2, "La catégorie doit contenir au moins 2 caractères")
    .max(20, "La catégorie ne peut pas dépasser 20 caractères")
    .regex(
      /^[\p{L}\s]+$/u,
      "La catégorie ne doit contenir que des lettres, des espaces ou -"
    ),
  color: z.string,
  icon: categoryIconSchema.optional(),
})
