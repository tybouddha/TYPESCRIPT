import Button from "@/components/reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

type SubmitButton = {
  isSubmitted: boolean;
  label?: string;
};

export default function SubmitButton({
  isSubmitted,
  label = "Ajouter un nouveau produit",
}: SubmitButton) {
  return (
    <>
      <Button className="submit-button" label={label} version="success" />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
