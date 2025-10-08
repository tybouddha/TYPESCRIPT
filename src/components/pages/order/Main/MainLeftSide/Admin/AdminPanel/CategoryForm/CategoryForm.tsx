import { useSuccessMessage } from "@/hooks/useSuccessMessage";
import SubmitButton from "../AddForm/SubmitButton";
import { useOrderContext } from "@/context/OrderContext";
import { EMPTY_CATEGORY } from "@/constants/categories";
import { useParams } from "react-router-dom";
import FormCategory from "./FormCategory/FormCategory";
import { useState } from "react";
import { categoryFormSchemaStrict } from "./FormCategory/categoryNameValidator";
import { z } from "zod";

export default function CategoryForm() {
  //State
  const { handleAddCategory, newCategory, setNewCategory } = useOrderContext();
  const [valueOnFocus, setValueOnFocus] = useState<string>();
  const [validationError, setValidationError] = useState<string>("");

  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  const { username } = useParams();

  //Comportements
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setNewCategory({ ...newCategory, [name]: value });

    if (validationError) {
      setValidationError("");
    }
  };

  const handleOnFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const valueOnFocus = event.target.value;
    setValueOnFocus(valueOnFocus);
  };

  const handleOnBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      console.log("ça a changé !!");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username) return;

    // Validation avec Zod
    try {
      const validatedData = categoryFormSchemaStrict.parse({
        id: crypto.randomUUID(),
        label: newCategory.label,
        color: newCategory.color,
        iconName: newCategory.iconName,
      });

      handleAddCategory(validatedData, username);
      setNewCategory(EMPTY_CATEGORY);
      setValidationError("");
      displaySuccessMessage();
    } catch (error) {
      if (error instanceof z.ZodError) {
        setValidationError(error.issues[0].message);
        console.error("Erreur de validation:", error.issues[0].message);
      }
      return;
    }
  };

  //Affichage
  return (
    <FormCategory
      onSubmit={handleSubmit}
      category={newCategory}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {validationError && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          {validationError}
        </div>
      )}
      <SubmitButton
        isSubmitted={isSubmitted}
        label="Créer une nouvelle catégorie"
      />
    </FormCategory>
  );
}
