import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon, label, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{Icon}</div>
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}
const TabStyled = styled("button")`
  height: 43px;
  padding: 0 22px;

  //display
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  //fonts
  color: ${theme.colors.greySemiDark};
  font-size: ${theme.fonts.size.P0};
  //position
  position: relative;
  left: 5%;
  top: 1px;

  background: #ffffff;
  box-shadow: ${theme.shadows.subtle};

  //border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #e4e5e9;

  //border-radius
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};

  //hover
  :hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }
`;
