import { useState, useEffect } from "react";
import Button from "../Button/Button";
import styled, { keyframes } from "styled-components";

// Animação do skeleton
const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

// Card principal
const Card = styled.article`
  background: inherit;
  border: 1px solid ${({ themeMode }) => (themeMode === "dark" ? "#333" : "#ddd")};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  outline: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    box-shadow: 0 0 0 3px #3b82f6;
  }
`;

// Skeleton do card
const SkeletonCard = styled.div`
  background: #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${pulse} 1.5s infinite;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  padding-top: 100%;
  background: #ccc;
`;

const TextPlaceholder = styled.div`
  height: 16px;
  margin: 8px;
  background: #ccc;

  &.small {
    width: 60%;
  }
`;

// Imagem do card
const CardImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Tag do produto
const Tag = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #f59e0b;
  color: #fff;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
`;

// Conteúdo do card
const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  height: 100%;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.3;
  max-height: 2.6em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardPrice = styled.span`
  font-weight: bold;
  color: #10b981;
  margin-top: 0.25rem;
`;

const CardRating = styled.span`
  color: #fbbf24;
  margin-top: auto;
`;

// Ações do card
const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export default function ProductCard({ product, onAddToCart, onRemoveFromCart, theme }) {
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
            <SkeletonCard aria-busy="true" aria-label="Carregando produto">
                <ImagePlaceholder />
                <TextPlaceholder />
                <TextPlaceholder className="small" />
            </SkeletonCard>
        );
    }

    return (
        <Card themeMode={theme} tabIndex="0">
            <CardImage>
                <img src={product.image} alt={product.title} loading="lazy" />
                {product.tag && <Tag>{product.tag}</Tag>}
            </CardImage>

            <CardContent>
                <CardTitle>{product.title}</CardTitle>

                <CardMeta>
                    <CardPrice>R$ {product.price.toFixed(2)}</CardPrice>
                    <CardRating>{"★".repeat(product.rating)}</CardRating>
                </CardMeta>

                <CardActions>
                    {!added ? (
                        <Button onClick={handleAdd} disabled={loadingButton}>
                            {loadingButton ? "Adicionando..." : "Adicionar"}
                        </Button>
                    ) : (
                        <Button onClick={handleRemove} variant="outline">
                            Remover
                        </Button>
                    )}
                </CardActions>
            </CardContent>
        </Card>
    );
}
