import AdminPanel from "./AdminPanel/AdminPanel";
import AdminTabs from "./AdminTabs";
import styled from "styled-components";
import { useContext } from "react";
import { OrderContext } from "../../../../context/OrderContext";

export default function Admin() {
  //state
  const { isCollapsed } = useContext(OrderContext);

  //comportements
  //affichage
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
