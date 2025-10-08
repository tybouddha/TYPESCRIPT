import { useSuccessMessage } from "@/hooks/useSuccessMessage"
import SubmitButton from "../AddForm/SubmitButton"
import { useOrderContext } from "@/context/OrderContext"
import { EMPTY_CATEGORY } from "@/constants/categories"
import { useParams } from "react-router-dom"
import FormCategory from "./FormCategory/FormCategory"

export default function CategoryForm() {
  //State
  const { handleAddCategory, newCategory, setNewCategory } = useOrderContext()

  const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

  const { username } = useParams()

  //Comportements
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!username) return
    const newCategoryToAdd = {
      ...newCategory,
      id: crypto.randomUUID(),
    }
    handleAddCategory(newCategoryToAdd, username)
    setNewCategory(EMPTY_CATEGORY)

    displaySuccessMessage()
  }

  //Affichage
  return (
    <div>
      {" "}
      <FormCategory onSubmit={handleSubmit}>
        <SubmitButton isSubmitted={isSubmitted} />
      </FormCategory>
    </div>
  )
}
