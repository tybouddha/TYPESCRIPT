import styled from "styled-components"

export const InputsCategory = () => {
  return <InputsCategoryStyled>InputsCategory</InputsCategoryStyled>
}

const InputsCategoryStyled = styled.div`
  /* border: 1px solid red; */
  /* background: blue; */
  grid-area: 1 / 2 / -2 / 3;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;
`
