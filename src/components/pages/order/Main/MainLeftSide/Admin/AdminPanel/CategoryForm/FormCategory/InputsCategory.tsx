import React from "react";
import TextInput from "@/components/reusable-ui/TextInput";
import styled from "styled-components";
import { Category } from "@/types/Category";
import { FormEvents } from "@/types/FormEvents";
import { getInputsCategoryConfig } from "./InputsCategoryConfig";
import { MultiSelect } from "@/components/reusable-ui/MultiSelect/MultiSelect";
import { PiPaintBucketFill } from "react-icons/pi";
import { MultiValue } from "react-select";
import { colorOptions, iconOptions } from "@/constants/categories";
import { BsFillCameraFill } from "react-icons/bs";

export type InputsCategoryProps = {
  category: Category;
} & FormEvents;

export const InputsCategory = React.forwardRef<
  HTMLInputElement,
  InputsCategoryProps
>(({ category, onChange, onFocus, onBlur }, ref) => {
  //States
  const inputsCategoryTexts = getInputsCategoryConfig(category);

  //Comportements

  //Comportements
  const onChangeColorMulti = (
    selectedColors: MultiValue<(typeof colorOptions)[0]>
  ) => {
    const eventMulti = {
      target: {
        name: "color",
        value: selectedColors,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
    onChange && onChange(eventMulti);
  };

  const onChangeIconMulti = (
    selectedIcon: MultiValue<(typeof iconOptions)[0]>
  ) => {
    const eventMulti = {
      target: {
        name: "iconName",
        value: selectedIcon,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
    onChange && onChange(eventMulti);
  };

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
      <div className="category-color">
        <MultiSelect
          menuPlacement="auto"
          options={colorOptions}
          onChange={onChangeColorMulti}
          customIcon={PiPaintBucketFill}
          placeholder="Sélectionner une couleur"
        />
      </div>
      <div className="category-icon">
        <MultiSelect
          menuPlacement="auto"
          options={iconOptions}
          onChange={onChangeIconMulti}
          customIcon={BsFillCameraFill}
          placeholder="Sélectionner une icône"
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

  .category-name {
    grid-area: 1/1/2/4;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .category-color {
    grid-area: 2/1/3/4;
  }

  .category-icon {
    grid-area: 3/1/4/4;
  }
`;
