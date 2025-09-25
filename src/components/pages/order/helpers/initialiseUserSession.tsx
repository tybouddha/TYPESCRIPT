import { getMenu } from "@/api/product";
import { getLocalStorage } from "@/utils/window";
import { getCategories } from "@/api/categories";
import { BasketProductQuantity, Product } from "@/types/Product";
import { Category } from "@/types/Category";

type InitialiseMenuProps = {
  username: string;
  setMenu: React.Dispatch<React.SetStateAction<Product[] | undefined>>;
};

type InitialiseBasketProps = {
  username: string;
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>;
};

type InitialiseCategoriesProps = {
  username: string;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};

const initialiseMenu = async ({ username, setMenu }: InitialiseMenuProps) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const initialiseBasket = ({ username, setBasket }: InitialiseBasketProps) => {
  const basketReceived = getLocalStorage(username); // localStorage est synchrone, pas besoin de "await".
  if (basketReceived) setBasket(basketReceived as BasketProductQuantity[]);
};

const initialiseCategories = async ({
  username,
  setCategories,
}: InitialiseCategoriesProps) => {
  const categoriesReceived = await getCategories(username);
  setCategories(categoriesReceived as Category[]);
};

export const initialiseUserSession = async (
  username: string,
  setMenu: React.Dispatch<React.SetStateAction<Product[] | undefined>>,
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>,
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>
) => {
  await initialiseMenu({ username, setMenu });
  await initialiseCategories({ username, setCategories });
  initialiseBasket({ username, setBasket });
};
