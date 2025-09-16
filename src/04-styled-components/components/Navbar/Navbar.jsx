import { Store, ShoppingCart } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${({ themeMode }) => (themeMode === "dark" ? "#000" : "#fff")};
  border-bottom: 1px solid ${({ themeMode }) => (themeMode === "dark" ? "#333" : "#ddd")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  transition: background 0.3s ease, color 0.3s ease;
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f0f0f0" : "#222")};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

const Cart = styled.div`
  position: relative;
  font-size: 1.5rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -6px;
  right: -10px;
  background: red;
  color: #fff;
  border-radius: 50%;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Navbar({ toggleTheme, theme, cartCount }) {

    return (
        <NavbarContainer themeMode={theme}>
            <Logo>
                <Store />
                <span>Mini Loja</span>
            </Logo>

            <NavbarActions>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <Cart>
                    <ShoppingCart />
                    <CartCount>{cartCount}</CartCount>
                </Cart>
            </NavbarActions>
        </NavbarContainer>
    );
}