import React, { useContext } from "react";
import { fakeMenu } from "../../../../../fakeData/fakeMenu";
import { OrderContext } from "../../../../../context/OrderContext";
import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../../theme";

export default function EmptyMenuAdmin() {
  //state
  const { setMenu } = useContext(OrderContext);

  //comportement
  const resetMenu = () => {
    console.log("reset menu");
    setMenu(fakeMenu.SMALL);
  };
  //affichage
  return (
    <EmptyMenuAdminStyled>
      <span className="title">Le menu est vide ?</span>
      <span className="description">
        Cliquez ci-dessous pour le réinitialiser
      </span>
      <PrimaryButton
        label={"Générer de nouveaux produits"}
        onClick={resetMenu}
        className={"reset-button"}
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled("div")`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }

  .reset-button {
    width: auto;
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
  }
`;
