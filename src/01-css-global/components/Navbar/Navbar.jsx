import '../../styles/style.css'
import { Store, ShoppingCart } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Navbar({ toggleTheme, theme, cartCount }) {

    return (
        <nav className="navbar">
            <div className="logo">
                <Store />
                <span>Mini Loja</span>
            </div>

            <div className="navbar-actions">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <div className="cart">
                    <ShoppingCart />
                    <span className="cart-count">{cartCount}</span>
                </div>
            </div>
        </nav>
    );
}