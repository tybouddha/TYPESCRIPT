import React from "react";
import TextInput from "@/components/reusable-ui/TextInput";
import styled from "styled-components";
import { Category } from "@/types/Category";
import { FormEvents } from "@/types/FormEvents";
import {
  getInputsCategoryConfig,
  // getSelectedInputConfig,
} from "./InputsCategoryConfig";

export type InputsCategoryProps = {
  category: Category;
} & FormEvents;

export const InputsCategory = React.forwardRef<
  HTMLInputElement,
  InputsCategoryProps
>(({ category, onChange, onFocus, onBlur }, ref) => {
  //States
  const inputsCategoryTexts = getInputsCategoryConfig(category);
  // const inputCategorySelect = getSelectedInputConfig(category);
  //Comportements

  //Affichage
  return (
    <InputsCategoryStyled>
      <div className="category-name">
        <TextInput
          {...inputsCategoryTexts[0]}
          onChange={onChange}
          version="minimalist"
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputsCategoryTexts[0].name === "label" ? ref : undefined}
        />
      </div>
    </InputsCategoryStyled>
  );
});

const InputsCategoryStyled = styled.div`
  /* border: 1px solid red; */
  /* background: blue; */
  grid-area: 1 / 2 / -2 / 3;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;
`;
