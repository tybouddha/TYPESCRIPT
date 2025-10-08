import { Category } from "@/types/Category"
import { BsFillCameraFill } from "react-icons/bs"
import { IoPricetag } from "react-icons/io5"
import { PiPaintBucketFill } from "react-icons/pi"

export const InputsCategoryConfig = (newCategory: Category) => [
  {
    id: "0",
    name: "title",
    value: newCategory.label,
    placeholder: "Nom de la catégorie (ex: salade)",
    Icon: <IoPricetag />,
    version: "minimalist",
    className: "title-category",
  },
]

export const getSelectedInputConfig = (newCategory: Category) => [
  {
    id: "1",
    name: "color",
    value: newCategory.color,
    placeholder: "Sélectionner une couleur",
    Icon: <PiPaintBucketFill />,
    className: "color-category",
  },

  {
    id: "2",
    name: "icon",
    value: newCategory.iconName,
    placeholder: "Sélectionner une icone",
    Icon: <BsFillCameraFill />,
    className: "icon-category",
  },
]
