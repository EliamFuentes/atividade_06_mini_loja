import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
import ProductCard from "../components/ProductCard/ProductCard";
import { House } from "lucide-react";
import styles from './Home.module.css'

export default function Home() {

    const products = [
        { id: 1, title: 'Fone Bluetooth Pro Max com Cancelamento de Ruído', price: 499.9, rating: 5, tag: 'Novo', image: 'https://picsum.photos/seed/prod1/512' },
        { id: 2, title: 'Teclado Mecânico RGB Hot-Swap ABNT2', price: 329.0, rating: 4.8, tag: 'Promo', image: 'https://picsum.photos/seed/prod2/512' },
        { id: 3, title: 'Mouse Gamer 26k DPI com Sensor Óptico', price: 259.9, rating: 4.5, tag: 'Novo', image: 'https://picsum.photos/seed/prod3/512' },
        { id: 4, title: 'Monitor 27" 144Hz IPS QHD', price: 1899.0, rating: 4.7, tag: 'Promo', image: 'https://picsum.photos/seed/prod4/512' },
        { id: 5, title: 'Webcam 1080p com Microfone e Tampa de Privacidade', price: 189.0, rating: 4.3, tag: 'Novo', image: 'https://picsum.photos/seed/prod5/512' },
        { id: 6, title: 'Cadeira Ergonômica com Apoio Lombar', price: 1299.0, rating: 4.4, tag: 'Promo', image: 'https://picsum.photos/seed/prod6/512' }
    ];

    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    const handleAddToCart = () => setCartCount(prev => prev + 1);
    const handleRemoveFromCart = () => setCartCount(prev => Math.max(prev - 1, 0));

    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <div className={styles.homeContainer}>
            <Navbar toggleTheme={toggleTheme} theme={theme} cartCount={cartCount} />

            <main className={styles.content}>
                <div className={styles.productsGrid}>
                    {products.map(p => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            onAddToCart={handleAddToCart}
                            onRemoveFromCart={handleRemoveFromCart}
                        />
                    ))}
                </div>
            </main>

            <button
                onClick={() => navigate("/")}
                className={styles.buttonHome}
            >
                <House size={24} />
            </button>
        </div>
    );
}