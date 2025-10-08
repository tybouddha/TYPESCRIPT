import { useSuccessMessage } from "@/hooks/useSuccessMessage";
import SubmitButton from "../AddForm/SubmitButton";
import { useOrderContext } from "@/context/OrderContext";
import { EMPTY_CATEGORY } from "@/constants/categories";
import { useParams } from "react-router-dom";
import FormCategory from "./FormCategory/FormCategory";
import { useState } from "react";

export default function CategoryForm() {
  //State
  const { handleAddCategory, newCategory, setNewCategory } = useOrderContext();
  const [valueOnFocus, setValueOnFocus] = useState<string>();

  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  const { username } = useParams();

  //Comportements
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setNewCategory({ ...newCategory, [name]: value });
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
      displaySuccessMessage();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username) return;
    const newCategoryToAdd = {
      ...newCategory,
      id: crypto.randomUUID(),
    };
    handleAddCategory(newCategoryToAdd, username);
    setNewCategory(EMPTY_CATEGORY);

    displaySuccessMessage();
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
      <SubmitButton isSubmitted={isSubmitted} />
    </FormCategory>
  );
}
