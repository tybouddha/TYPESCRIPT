import { theme } from "@/theme/theme";
import { Category } from "@/types/Category";

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
  {
    id: "sandwich",
    label: "Sandwich",
    iconName: "sandwich",
    color: theme.colors.primary,
  },
  { id: "verre", label: "Verre", iconName: "verre", color: theme.colors.blue },
  {
    id: "veggies",
    label: "Légumes",
    iconName: "veggies",
    color: theme.colors.green,
  },
  {
    id: "dessert",
    label: "Dessert",
    iconName: "dessert",
    color: theme.colors.rose,
  },
  {
    id: "frites",
    label: "Frites",
    iconName: "frites",
    color: theme.colors.yellow,
  },
  {
    id: "chocolateBar",
    label: "Chocolat",
    iconName: "chocolateBar",
    color: theme.colors.red,
  },
];
