import styled from "styled-components"
import { theme } from "@/theme/theme"

// 1. paramètre par défaut
// 2. typage de propriété

type StickerProps = {
  label?: string
  className?: string
}

export default function Sticker({ label = "new", className }: StickerProps) {
  return <StickerStyled className={className}>{label}</StickerStyled>
}

const StickerStyled = styled.span`
  font-size: ${theme.fonts.size.XXXS};
  padding: 1em;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${theme.colors.redSecondary};
  border: none;
  color: white;
  text-transform: uppercase;
`
