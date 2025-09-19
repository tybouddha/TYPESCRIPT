import { theme } from "@/theme/theme";
import { isMac } from "@/utils/window"
import styled from "styled-components";

export const ModalShortcuts = () => {
    const raccourci = isMac() ? "⌘" : "CTRL"

    // const deletePermanently = () => { }

    return (
        <ModalShortcutStyled>
            <span className="title">💡 Pour aller plus vite :</span>
            <span className="shortcut-message i">{`${raccourci} + i : Toggle "mode" admin`}</span>
            <span className="shortcut-message j">{`${raccourci} + j : Toggle "panel" admin`}</span>
            {/* <button>
                X <span className="shortcut-message j" onClick={deletePermanently}>Ne plus rappeler</span>
            </button> */}
        </ModalShortcutStyled>
    )
}

const ModalShortcutStyled = styled.div`
    border-radius: ${theme.borderRadius.round};
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    transition: ease-in 100ms;
    /* opacity: ${({ isShortcutModalVisible }) => (isShortcutModalVisible ? "100%" : "0%")}; */
    gap: 15px;

    .title {
      font-weight: ${theme.fonts.weights.bold};
      /* margin-bottom: 20px; */
    }

  .shortcut-message {
    font-size: ${theme.fonts.size.SM};
  }

  .i {
    /* margin-bottom: 20px; */
  }
`;