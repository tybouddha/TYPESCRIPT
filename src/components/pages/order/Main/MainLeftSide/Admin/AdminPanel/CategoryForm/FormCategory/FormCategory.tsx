import React from "react";
import styled from "styled-components";
// import ImagePreview from "./ImagePreview"
// import { Inputs, InputsProps } from "@/components"
import { InputsCategory, InputsCategoryProps } from "./InputsCategory";
import ImageCategoryPreview from "./ImageCategoryPreview";

type FormCategoryProps = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
} & InputsCategoryProps;

const FormCategory = React.forwardRef<HTMLInputElement, FormCategoryProps>(
  ({ category, onSubmit, children, onChange, onFocus, onBlur }, ref) => {
    // state (vide)

    // comportements (vide)

    // affichage
    return (
      <FormCategoryStyled onSubmit={onSubmit}>
        <ImageCategoryPreview category={category} />
        <InputsCategory
          category={category}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        />
        <div className="form-footer">{children}</div>
      </FormCategoryStyled>
    );
  }
);

export default FormCategory;

const FormCategoryStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .form-footer {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
