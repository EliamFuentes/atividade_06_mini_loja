import '../../styles/style.css'

export default function Button({ onClick, children, variant = "solid", disabled = false }) {
    return (
        <button
            className={`btn ${variant}`}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}