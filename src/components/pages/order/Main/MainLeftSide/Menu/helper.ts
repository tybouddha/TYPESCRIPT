import { Category } from "@/types/Category";
import { Product } from "@/types/Product";

type GetProductsToDisplayProps = {
  categoryAll: Category;
  products: Product[];
  activeCategory: Category;
};

export const checkIfProductIsClicked = (
  idProductInMenu: string,
  idProductClickedOn: string
): boolean => {
  return idProductInMenu === idProductClickedOn;
};

export const getProductsToDisplay = ({
  categoryAll,
  products,
  activeCategory,
}: GetProductsToDisplayProps) => {
  const productsToDisplayed = categoryAll.isActive
    ? products
    : products.filter(({ categories: categoriesFromMenu }) =>
        categoriesFromMenu?.some(
          (categoryFromMenu) => categoryFromMenu.label === activeCategory?.label
        )
      );
  return productsToDisplayed;
};
