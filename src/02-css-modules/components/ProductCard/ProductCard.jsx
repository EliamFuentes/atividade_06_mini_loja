import { useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from './ProductCard.module.css'

export default function ProductCard({ product, onAddToCart, onRemoveFromCart }) {
    const [loadingCard, setLoadingCard] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        setLoadingButton(true);
        setTimeout(() => {
            setLoadingButton(false);
            setAdded(true);
            onAddToCart?.(product);
        }, 1000);
    };

    const handleRemove = () => {
        setAdded(false);
        onRemoveFromCart?.(product);
    };

    useEffect(() => {
        const timer = setTimeout(() => setLoadingCard(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loadingCard) {
        return (
            <div className="skeleton" aria-busy="true" aria-label="Carregando produto">
                <div className="image-placeholder"></div>
                <div className="text-placeholder"></div>
                <div className="text-placeholder small"></div>
            </div>
        );
    }

    return (
        <article className={styles.card} tabIndex="0">
            <div className={styles.cardImage}>
                <img src={product.image} alt={product.title} loading="lazy" />
                {product.tag && <span className={styles.tag}>{product.tag}</span>}
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.title}</h3>

                <div className={styles.cardMeta}>
                    <span className={styles.cardPrice}>R$ {product.price.toFixed(2)}</span>
                    <span className={styles.cardRating}>{"★".repeat(product.rating)}</span>
                </div>

                <div className={styles.cardActions}>
                    {!added ? (
                        <Button onClick={handleAdd} disabled={loadingButton}>
                            {loadingButton ? "Adicionando..." : "Adicionar"}
                        </Button>
                    ) : (
                        <Button onClick={handleRemove} variant="outline">
                            Remover
                        </Button>
                    )}
                </div>
            </div>
        </article>
    );
}