import styled, { css } from "styled-components";

const StyledButton = styled.button`
  flex: 1;
  padding: 0.4rem 0.6rem;
  font-size: 0.85rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, opacity 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  white-space: nowrap;
  border: none;

  /* Desabilitado */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Variantes */
  ${({ variant }) =>
        variant === "solid" &&
        css`
      background: #3b82f6;
      color: #fff;
    `}

  ${({ variant }) =>
        variant === "outline" &&
        css`
      border: 1px solid #3b82f6;
      color: #3b82f6;
      background: transparent;
    `}

  ${({ variant }) =>
        variant === "ghost" &&
        css`
      border: none;
      background: transparent;
      color: #3b82f6;
    `}
`;

export default function Button({ onClick, children, variant = "solid", disabled = false }) {
    return (
        <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
            {children}
        </StyledButton>
    );
}