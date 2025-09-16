import { useId } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import styled from "styled-components";

// Container do toggle
const ThemeSwitch = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

// Ícones do switch
const SwitchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--switch-icon, #333);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

// Botão central do switch
const SwitchButton = styled.button`
  width: 36px;
  height: 20px;
  background: var(--switch-bg, #ddd);
  border-radius: 20px;
  position: relative;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.2s ease;

  &[aria-checked="true"] {
    background: var(--switch-active-bg, #4f46e5);
  }
`;

// Handle (círculo) do botão
const SwitchHandle = styled.span`
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 0.2s ease;

  ${SwitchButton}[aria-checked="true"] & {
    transform: translateX(16px);
  }
`;


export default function ThemeToggle({ theme, toggleTheme }) {
    const id = useId();

    return (
        <ThemeSwitch data-state={theme === "dark" ? "checked" : "unchecked"}>
            <SwitchIcon id={`${id}-off`} onClick={() => theme !== "dark" && toggleTheme()}>
                <MoonIcon size={16} aria-hidden="true" />
            </SwitchIcon>

            <SwitchButton
                id={id}
                role="switch"
                aria-checked={theme === "dark"}
                aria-labelledby={`${id}-off ${id}-on`}
                aria-label="Toggle between dark and light mode"
                onClick={toggleTheme}
            >
                <SwitchHandle />
            </SwitchButton>

            <SwitchIcon id={`${id}-on`} onClick={() => theme !== "light" && toggleTheme()}>
                <SunIcon size={16} aria-hidden="true" />
            </SwitchIcon>
        </ThemeSwitch>
    );
}