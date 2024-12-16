import { createContext, PropsWithChildren, useContext, useRef, useState } from "react"
import { useMenu } from "@/hooks/useMenu"
import { useBasket } from "@/hooks/useBasket"
import { findObjectById } from "@/utils/array"
import { EMPTY_PRODUCT } from "@/constants/product"
import { MenuProduct } from "@/types/Product"
import { ADMIN_TAB_LABEL } from "@/constants/tab"

// 1. Création du context
const OrderContext = createContext({
  username: "",
  isModeAdmin: false,
  setIsModeAdmin: () => { },

  isCollapsed: false,
  setIsCollapsed: () => { },

  currentTabSelected: false,
  setCurrentTabSelected: () => { },

  menu: [],
  handleAdd: () => { },
  handleDelete: () => { },
  handleEdit: () => { },
  resetMenu: () => { },

  newProduct: {},
  setNewProduct: () => { },

  productSelected: {},
  setProductSelected: () => { },
  handleProductSelected: () => { },

  titleEditRef: {},

  basket: [],
  handleAddToBasket: () => { },
  handleDeleteBasketProduct: () => { },
})

// 2. Installation du context
export const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState<ADMIN_TAB_LABEL>(ADMIN_TAB_LABEL.ADD)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState<MenuProduct>(EMPTY_PRODUCT)
  const titleEditRef = useRef<HTMLInputElement>(null)
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu()
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } = useBasket()

  const handleProductSelected = async (idProductClicked: string) => {
    if (!menu) return
    const productClickedOn = findObjectById(idProductClicked, menu)
    if (!productClickedOn) return
    await setIsCollapsed(false)
    await setCurrentTabSelected(ADMIN_TAB_LABEL.EDIT)
    await setProductSelected(productClickedOn)
    // titleEditRef.current && titleEditRef.current.focus() // ériture équivalente
    titleEditRef.current?.focus()
  }

  const orderContextValue = {
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
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  }

  return <OrderContext.Provider value={orderContextValue}>{children}</OrderContext.Provider>
}

// 3. Consommation du context
export const useOrderContext = () => useContext(OrderContext)
