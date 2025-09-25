// iconMap.ts
import { MdQuestionMark } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { RiDrinks2Line } from "react-icons/ri";
import { LuSalad, LuCakeSlice } from "react-icons/lu";
import { GiChocolateBar } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { BsCupHotFill } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import { IconName } from "@/constants/icon";

export type CategoryIconReturn = IconType | null;

// nom technique : dictionnaire, mapping JS/TS, lookup table
// export const ICON_MAP: Record<IconName, IconType> = {
//     sandwich: FaHamburger,
//     verre: RiDrinks2Line,
//     veggies: LuSalad,
//     dessert: LuCakeSlice,
//     frites: LuCakeSlice, // même icône pour 2 noms différents
//     chocolateBar: GiChocolateBar,
// }

// // nom technique : fonction utiliaire / utils ou "factory".
// export const getCategoryIcon = (name: IconName): IconType =>
//     ICON_MAP[name] ?? MdQuestionMark

// ci-dessous, ça marche et ça réuni dans getCategoryIcon() à la fois la fonction utilitaire et le dictionnaire / mapping / lookup table.
export const getCategoryIcon = (iconName: string): CategoryIconReturn => {
  if (iconName === IconName.SANDWICH) return FaHamburger;
  if (iconName === IconName.VERRE) return RiDrinks2Line;
  if (iconName === IconName.VEGGIES) return LuSalad;
  if (iconName === IconName.DESSERT) return LuCakeSlice;
  if (iconName === IconName.FRITES) return CiFries;
  if (iconName === IconName.CHOCOLATE_BAR) return GiChocolateBar;
  if (iconName === IconName.TASSE_CHAUDE) return BsCupHotFill;
  if (iconName === IconName.MENU) return IoFastFoodOutline;
  if (iconName === IconName.EMPTY) return null;
  return MdQuestionMark;
};
// attention, ça retourne non pas un composant Icon mais la référence au composant Icon ☝️
