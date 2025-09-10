import { useState } from "react";
import '../../styles/style.css'

export default function Navbar({ toggleTheme, theme }) {

    const [cartCount] = useState(3);

    return (
        <nav className="navbar">
            <div className="logo">Mini Loja</div>

            <div className="navbar-actions">
                {/* Botão para trocar tema */}
                <button onClick={toggleTheme} className="theme-toggle">
                    {theme === "light" ? "🌞" : "🌜"}
                </button>

                {/* Badge do carrinho */}
                <div className="cart">
                    🛒 <span className="cart-count">{cartCount}</span>
                </div>
            </div>
        </nav>
    );
}