import { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function ProductCard({ product, onAddToCart, onRemoveFromCart }) {
    const [loadingCard, setLoadingCard] = useState(true); // skeleton do card
    const [loadingButton, setLoadingButton] = useState(false); // loading do botão
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
        // Skeleton só no início
        const timer = setTimeout(() => setLoadingCard(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loadingCard) {
        return (
            <div className="card skeleton" aria-busy="true" aria-label="Carregando produto">
                <div className="image-placeholder"></div>
                <div className="text-placeholder"></div>
                <div className="text-placeholder small"></div>
            </div>
        );
    }

    return (
        <article className="card" tabIndex="0">
            <div className="card-image">
                <img src={product.image} alt={product.title} loading="lazy" />
                {product.tag && <span className="tag">{product.tag}</span>}
            </div>

            <div className="card-content">
                <h3 className="card-title">{product.title}</h3>

                <div className="card-meta">
                    <span className="card-price">R$ {product.price.toFixed(2)}</span>
                    <span className="card-rating">{"★".repeat(product.rating)}</span>
                </div>

                <div className="card-actions">
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