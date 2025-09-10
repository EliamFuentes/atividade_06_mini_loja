import { useState, useEffect } from "react";
import "../../styles/style.css"

export default function ProductCard({ product }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula um delay para exibir o skeleton
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="card skeleton" aria-busy="true" aria-label="Carregando produto">
                <div className="image-placeholder"></div>
                <div className="text-placeholder"></div>
                <div className="text-placeholder small"></div>
            </div>
        );
    }

    return (
        <div className="card" tabIndex="0" aria-label={`Produto: ${product.title}`}>
            <div className="card-image">
                <img src={product.image} alt={product.title} loading="lazy" />
                {product.tag && <span className="tag">{product.tag}</span>}
            </div>

            <div className="card-content">
                <h3 className="card-title" title={product.title}>
                    {product.title}
                </h3>
                <p className="card-price">R$ {product.price.toFixed(2)}</p>
                <p className="card-rating">{"★".repeat(product.rating)}</p>

                <div className="card-actions">
                    <button className="btn solid">Adicionar</button>
                </div>
            </div>
        </div>
    );
}