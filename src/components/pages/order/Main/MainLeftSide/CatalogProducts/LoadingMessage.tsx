import styled from "styled-components"
import { theme } from "@/theme/theme"
import { Loader } from "@/components/reusable-ui/Loader"

export default function LoadingMessage() {
  return (
    <LoadingMessageStyled>
      <Loader size="P3" />
    </LoadingMessageStyled>
  )
}

const LoadingMessageStyled = styled.div`
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
  }
`
