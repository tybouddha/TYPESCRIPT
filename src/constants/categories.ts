import { theme } from "@/theme/theme";
import { Category } from "@/types/Category";
import { FaHamburger } from "react-icons/fa";
import { GiChocolateBar } from "react-icons/gi";
import { LuCakeSlice, LuSalad } from "react-icons/lu";
import { MdQuestionMark } from "react-icons/md";
import { RiDrinks2Line } from "react-icons/ri";

export const CATEGORY_ALL: Category = {
  id: "id-category-all",
  label: "Tous",
  color: theme.colors.greyDark,
  iconName: "",
  isActive: true,
};

// empty category by default
export const DEFAULT_CATEGORY: Category = {
  id: "id-icone-par-defaut",
  label: "",
  color: "",
  iconName: "",
};

export const EMPTY_CATEGORY: Category = {
  id: "",
  label: "",
  color: theme.colors.red,
  iconName: "",
};

export const IS_SELECTED_COLOR = {
  color: theme.colors.white,
  backgroundColor: theme.colors.background_dark,
  borderColor: theme.colors.dark,
};

export const colorOptions = [
  { id: "orange", label: "Orange", color: theme.colors.primary },
  { id: "bleu", label: "Bleu", color: theme.colors.blue },
  { id: "vert", label: "Vert", color: theme.colors.green },
  { id: "rose", label: "Rose", color: theme.colors.rose },
  { id: "jaune", label: "Jaune", color: theme.colors.yellow },
  { id: "rouge", label: "Rouge", color: theme.colors.red },
];

export const iconOptions = [
  { id: "sandwich", label: "Sandwich", iconName: "sandwich" },
  { id: "verre", label: "Verre", iconName: "verre" },
  { id: "veggies", label: "Légumes", iconName: "veggies" },
  { id: "dessert", label: "Dessert", iconName: "dessert" },
  { id: "frites", label: "Frites", iconName: "frites" },
  { id: "chocolateBar", label: "Chocolat", iconName: "chocolateBar" },
];
