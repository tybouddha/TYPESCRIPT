import styled from "styled-components";
import { Category } from "@/types/Category";
import { getCategoryIcon } from "@/utils/icon";
import { theme } from "@/theme/theme";
import { fadeIn } from "@/theme/animations";

type ImageCategoryPreviewProps = {
  category: Category;
};

export default function ImageCategoryPreview({
  category,
}: ImageCategoryPreviewProps) {
  const IconComponent = category.iconName
    ? getCategoryIcon(category.iconName)
    : null;

  const hasContent = category.label && category.label.trim() !== "";

  return (
    <ImageCategoryPreviewStyled>
      {hasContent ? (
        <div className="preview-container">
          <div className="content">
            {IconComponent && (
              <div
                className="icon"
                style={{ color: category.color || theme.colors.greySemiDark }}
              >
                <IconComponent size={24} />
              </div>
            )}
            <span
              className="label"
              style={{ color: category.color || theme.colors.greySemiDark }}
            >
              {category.label}
            </span>
          </div>
        </div>
      ) : (
        <div className="empty-preview">Aucune preview</div>
      )}
    </ImageCategoryPreviewStyled>
  );
}

const ImageCategoryPreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  .preview-container {
    width: 100px;
    height: 100px;
    border-radius: ${theme.borderRadius.extraRound};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    background-color: transparent; /* ✅ Pas de couleur de fond */
    animation: ${fadeIn} 1s;
    padding: 8px;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 4px;
    text-align: center;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .label {
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.medium};
    line-height: 1.2;
    word-break: break-word;
    max-width: 80px;
  }

  .empty-preview {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
`;
