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
            <div
                className="flex flex-col overflow-hidden rounded-lg border border-gray-300 outline-none bg-inherit animate-pulse"
                aria-busy="true"
                aria-label="Carregando produto"
            >
                <div className="w-full pt-[100%] bg-gray-300"></div>
                <div className="h-4 my-2 mx-2 bg-gray-300"></div>
                <div className="h-4 my-2 mx-2 bg-gray-300 w-3/5"></div>
            </div>

        );
    }

    return (
        <article
            className="flex flex-col overflow-hidden rounded-lg border border-gray-300 outline-none transition-transform duration-200 hover:-translate-y-1 hover:shadow-md focus:shadow-blue-500/50 dark:border-gray-300 bg-inherit"
            tabIndex="0"
        >
            {/* Imagem */}
            <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                {product.tag && (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded">
                        {product.tag}
                    </span>
                )}
            </div>

            {/* Conteúdo */}
            <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-base leading-snug line-clamp-2">{product.title}</h3>

                <div className="flex flex-col flex-1">
                    <span className="font-bold text-green-600 mt-1">
                        R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-yellow-400 mt-auto">{"★".repeat(product.rating)}</span>
                </div>

                <div className="flex gap-2 mt-2">
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