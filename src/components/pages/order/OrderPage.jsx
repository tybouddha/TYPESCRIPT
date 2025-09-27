// import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { OrderContextProvider } from "../../../context/OrderContextProvider";

export default function OrderPage() {
  // state
  const { username } = useParams();
  // const [isModeAdmin, setIsModeAdmin] = useState(false);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  // const [currentTabSelected, setCurrentTabSelected] = useState("add");

  // comportements

  //affichage
  return (
    <OrderContextProvider>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContextProvider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
