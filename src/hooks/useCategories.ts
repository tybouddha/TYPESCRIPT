import { useState, useEffect } from "react";
import { deepClone } from "@/utils/array";
import { fakeCategories } from "@/fakeData/fakeCategories";
import { CATEGORY_ALL } from "@/constants/categories";
import { CATEGORY_MENUS } from "@/constants/menus";
import { updateCategoriesInDB, getCategories } from "@/api/categories";
import { Category } from "@/types/Category";

// ensemble des catégories disponibles pour tous les produits du catalog
export const useCategories = (username?: string) => {
  const [categories, setCategories] = useState<Category[]>(
    fakeCategories.LARGE
  );
  const [categoryAll, setCategoryAll] = useState<Category>(CATEGORY_ALL);
  const [categoryMenus, setCategoryMenus] = useState<Category>(CATEGORY_MENUS);

  // Charger les catégories de l'utilisateur au démarrage
  useEffect(() => {
    if (username) {
      const loadUserCategories = async () => {
        try {
          const userCategories = await getCategories(username);
          if (userCategories) {
            setCategories(userCategories);
          }
        } catch (error) {
          console.error("Erreur lors du chargement des catégories:", error);
        }
      };
      loadUserCategories();
    }
  }, [username]);

  // comportements (gestionnaire de state ou "state handlers")
  const handleAddCategory = (categoryToAdd: Category, username: string) => {
    if (!categories) return;
    // 1. copie du tableau
    const categoriesCopy = deepClone(categories);

    // 2. manip de la copie du tableau
    const categoriesUpdated = [categoryToAdd, ...categoriesCopy];

    // 3. update du state
    setCategories(categoriesUpdated);
    updateCategoriesInDB(username, categoriesUpdated);
  };

  const handleDeleteCategory = (
    idOfCategoryToDelete: string,
    username: string
  ) => {
    if (!categories) return;
    //1. copy du state
    const categoriesCopy = deepClone(categories);

    //2. manip de la copie state
    const categoriesUpdated = categoriesCopy.filter(
      (category) => category.id !== idOfCategoryToDelete
    );

    //3. update du state
    setCategories(categoriesUpdated);
    updateCategoriesInDB(username, categoriesUpdated);
  };

  const toggleAllCategories = () => {
    const categoriesUpdated = categories.map((category) => ({
      ...category,
      isActive: false, // Désactiver "tous les filtres produit individuels"
    }));

    setCategoryAll({ ...categoryAll, isActive: true }); // Activer "Tous"
    setCategoryMenus({ ...categoryMenus, isActive: false }); // Désactiver "Menus"
    setCategories(categoriesUpdated);
  };

  const toggleCategoryById = (idCategoryToToggle: string) => {
    const categoriesUpdated = categories.map((category) => ({
      ...category,
      isActive: category.id === idCategoryToToggle,
    }));

    setCategoryAll({ ...categoryAll, isActive: false }); // Désactiver le bouton "Tous"
    setCategoryMenus({ ...categoryMenus, isActive: false }); // Désactiver le bouton "Menus"
    setCategories(categoriesUpdated);
  };

  const toggleMenusCategory = () => {
    const isCurrentlyActive = categoryMenus.isActive ?? false; // fallback value : si jamais ça vaut undefined, "false" sera assigné au lieu de undefined.

    // Si déjà actif, on ne fait rien
    if (isCurrentlyActive) return;

    // 1. Activer la catégorie "Menus"
    setCategoryMenus({ ...categoryMenus, isActive: true });

    // 2. Désactiver toutes les autres catégories standards
    const categoriesUpdated = categories.map((category) => ({
      ...category,
      isActive: false,
    }));
    setCategories(categoriesUpdated);

    // 3. Désactiver aussi le bouton "Tous"
    setCategoryAll({ ...categoryAll, isActive: false });
  };

  const handleEditCategory = (
    categoryBeingEdited: Category,
    username: string
  ) => {
    // 1. copie du state (deep clone)
    if (!categories) return;
    const categoriesCopy = deepClone(categories);

    // 2. manip de la copie du state
    const indexOfCategoryToEdit = categories.findIndex(
      (category) => category.id === categoryBeingEdited.id
    );
    categoriesCopy[indexOfCategoryToEdit] = categoryBeingEdited;

    // 3. update du state
    setCategories(categoriesCopy);
    updateCategoriesInDB(username, categoriesCopy);
  };

  const resetCategories = (username: string) => {
    setCategories(fakeCategories.SMALL);
    updateCategoriesInDB(username, fakeCategories.SMALL);
  };

  return {
    categories,
    setCategories,
    handleAddCategory,
    handleDeleteCategory,
    handleEditCategory,
    resetCategories,
    toggleCategoryById,
    categoryAll,
    toggleAllCategories,
    toggleMenusCategory,
    categoryMenus,
  };
};
