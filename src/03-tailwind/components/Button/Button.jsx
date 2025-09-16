export default function Button({ onClick, children, variant = "solid", disabled = false, loading = false }) {
    // Definindo classes Tailwind para cada variante
    const baseClasses = "flex-1 px-3 py-1.5 text-sm rounded flex items-center justify-center gap-1 transition-all duration-200 whitespace-nowrap";

    const variantClasses = {
        solid: "bg-blue-500 text-white border-none",
        outline: "border border-blue-500 text-blue-500 bg-transparent",
        ghost: "bg-transparent border-none text-blue-500",
    };

    const disabledClasses = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "cursor-pointer";

    return (
        <button
            type="button"
            className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses}`}
            onClick={onClick}
            disabled={disabled}
            aria-busy={loading ? "true" : "false"}
        >
            {children}
            {loading && (
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
            )}
        </button>
    );
}