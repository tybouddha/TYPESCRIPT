import styled from 'styled-components';

type ShortcutsProps = {
    className?: string
}

export const ModalShortcuts = ({ className }: ShortcutsProps) => {
    return (
        <ShortcutsStyled className={className}>Raccourcis</ShortcutsStyled>
    )
}

const ShortcutsStyled = styled.div`
`;