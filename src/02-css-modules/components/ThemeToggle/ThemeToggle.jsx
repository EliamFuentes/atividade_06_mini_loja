import { useId } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import "../../styles/style.css"

export default function ThemeToggle({ theme, toggleTheme }) {
    const id = useId();

    return (
        <div
            className="theme-switch group inline-flex items-center gap-2"
            data-state={theme === "dark" ? "checked" : "unchecked"}
        >
            <span
                id={`${id}-off`}
                className="switch-icon"
                onClick={() => theme !== "dark" && toggleTheme()}
            >
                <MoonIcon size={16} aria-hidden="true" />
            </span>

            {/* Switch central */}
            <button
                id={id}
                role="switch"
                aria-checked={theme === "dark"}
                aria-labelledby={`${id}-off ${id}-on`}
                aria-label="Toggle between dark and light mode"
                onClick={toggleTheme}
                className="switch-button"
            >
                <span className="switch-handle"></span>
            </button>

            <span
                id={`${id}-on`}
                className="switch-icon"
                onClick={() => theme !== "light" && toggleTheme()}
            >
                <SunIcon size={16} aria-hidden="true" />
            </span>
        </div>
    );
}