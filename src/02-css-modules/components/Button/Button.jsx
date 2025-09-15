import styles from './Button.module.css'

export default function Button({ onClick, children, variant = "Solid", disabled = false }) {

    const variantClass = {
        Solid: styles.btnSolid,
        Outline: styles.btnOutline,
        Ghost: styles.btnGhost,
    }[variant] || styles.btnSolid;

    return (
        <button
            className={`${styles.btn} ${variantClass}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}