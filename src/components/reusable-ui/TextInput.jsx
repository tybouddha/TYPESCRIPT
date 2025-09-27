import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  className,
  onChange,
  Icon,
  value,
  ...extraProps
}) {
  return (
    <InputStyled className={className}>
      {Icon && <span className="icon">{Icon}</span>}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: #fff;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 40px;
  box-shadow: 0 0 0 1px ${theme.colors.greyLight};
  transition: all 0.2s ease;

  &:focus-within {
    box-shadow: 0 0 0 2px ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: none;
    background: transparent;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`;
