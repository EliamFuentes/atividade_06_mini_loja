import { Store, ShoppingCart } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Navbar({ toggleTheme, theme, cartCount }) {

    return (
        <nav className="navbar">
            <div className="flex items-center gap-2 font-bold text-lg">
                <Store />
                <span>Mini Loja</span>
            </div>

            <div className="flex items-center gap-7">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <div className="relative text-2xl">
                    <ShoppingCart />
                    <span className="absolute -top-1.5 -right-2 bg-red-600 text-white rounded-full text-[0.7rem] w-[18px] h-[18px] flex items-center justify-center">{cartCount}</span>
                </div>
            </div>
        </nav>
    );
}