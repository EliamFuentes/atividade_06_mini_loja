import { Store, ShoppingCart } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from './Navbar.module.css'

export default function Navbar({ toggleTheme, theme, cartCount }) {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Store />
                <span>Mini Loja</span>
            </div>

            <div className={styles.navbarActions}>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <div className={styles.cart}>
                    <ShoppingCart />
                    <span className={styles.cartCount}>{cartCount}</span>
                </div>
            </div>
        </nav>
    );
}