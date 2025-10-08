import { Category } from "@/types/Category";
import { IoPricetag } from "react-icons/io5";

export const getInputsCategoryConfig = (newCategory: Category) => [
  {
    id: "0",
    name: "label",
    value: newCategory.label,
    placeholder: "Nom de la catégorie (ex: salade)",
    Icon: <IoPricetag />,
    version: "minimalist",
    className: "title-category",
  },
];
