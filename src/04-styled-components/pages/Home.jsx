import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
import ProductCard from "../components/ProductCard/ProductCard";
import { House } from "lucide-react";
import styled from "styled-components";

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  }
`;

const HomeContainer = styled.div`
  padding-top: 70px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 3rem;
`;

const Content = styled.main`
  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.5;
    color: inherit;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export default function Home() {

  const products = [
    { id: 1, title: 'Fone Bluetooth Pro Max com Cancelamento de Ruído', price: 499.9, rating: 5, tag: 'Novo', image: 'https://picsum.photos/seed/prod1/512' }, // Produto 1
    { id: 2, title: 'Teclado Mecânico RGB Hot-Swap ABNT2', price: 329.0, rating: 4.8, tag: 'Promo', image: 'https://picsum.photos/seed/prod2/512' }, // Produto 2
    { id: 3, title: 'Mouse Gamer 26k DPI com Sensor Óptico', price: 259.9, rating: 4.5, tag: 'Novo', image: 'https://picsum.photos/seed/prod3/512' }, // Produto 3
    { id: 4, title: 'Monitor 27" 144Hz IPS QHD', price: 1899.0, rating: 4.7, tag: 'Promo', image: 'https://picsum.photos/seed/prod4/512' }, // Produto 4
    { id: 5, title: 'Webcam 1080p com Microfone e Tampa de Privacidade', price: 189.0, rating: 4.3, tag: 'Novo', image: 'https://picsum.photos/seed/prod5/512' }, // Produto 5
    { id: 6, title: 'Cadeira Ergonômica com Apoio Lombar', price: 1299.0, rating: 4.4, tag: 'Promo', image: 'https://picsum.photos/seed/prod6/512' }
  ];

  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount((prev) => Math.max(prev - 1, 0));
  };

  const [theme, setTheme] = useState(() => {
    // Pega o tema salvo no localStorage ou começa como "light"
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Aplica a classe do tema no <body>
    document.body.className = theme;
    // Salva no localStorage para persistir
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <HomeContainer>
      <Navbar toggleTheme={toggleTheme} theme={theme} cartCount={cartCount} />

      <Content>
        <ProductsGrid>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </ProductsGrid>
      </Content>

      <FloatingButton onClick={() => navigate("/")}>
        <House size={24} />
      </FloatingButton>
    </HomeContainer>
  )
}