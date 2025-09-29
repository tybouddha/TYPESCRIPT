import { rotate } from "@/theme/animations";
import { ColorValues, FontSize, theme } from "@/theme/theme";
import { ImSpinner8 } from "react-icons/im";
import styled from "styled-components";

type LoaderProps = {
  variant?: FontSize;
  color?: ColorValues;
};

export const Loader = ({
  variant = "SM",
  color = theme.colors.greyMedium,
}: LoaderProps) => {
  return (
    <LoaderStyled variant={variant ?? "SM"} color={color}>
      <ImSpinner8 className="rotate-icon" />
    </LoaderStyled>
  );
};

type LoaderStyled = {
  variant: FontSize;
  color: ColorValues;
};

const LoaderStyled = styled.div<LoaderStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .rotate-icon {
    font-size: ${({ variant }: LoaderStyled) =>
      theme.fonts.size[variant ?? "SM"]};
    animation: ${rotate} 1s linear infinite;
    color: ${({ color }) => color || theme.colors.primary};
  }
`;
