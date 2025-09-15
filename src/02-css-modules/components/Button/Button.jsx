import styles from './Button.module.css'

export default function Button({ onClick, children, variant = "solid", disabled = false }) {
    return (
        <button
            className={`${styles.btn} ${styles[variant]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}