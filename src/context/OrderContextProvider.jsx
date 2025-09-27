import { useState } from "react";
import { OrderContext } from "./OrderContext";
import { fakeMenu } from "../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../components/pages/order/Admin/AdminPanel/AddForm";

export function OrderContextProvider({ children }) {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  // comportements
  const handleAdd = (newProduct) => {
    // 1. copie du tableau
    const menuCopy = [...menu];

    // 2. manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. update du state
    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    //1. copy du state
    const menuCopy = [...menu];

    //2. manip de la copie state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    console.log("menuUpdated: ", menuUpdated);

    //3. update du state
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const value = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    resetMenu,
  };
  //affichage
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}
