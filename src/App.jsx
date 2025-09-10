import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import CSSGlobalHome from './01-css-global/pages/Home'
import CSSModulesHome from './02-css-modules/pages/Home'
import TailwindHome from './03-tailwind/pages/Home'
import StyledComponentsHome from './04-styled-components/pages/Home'

export default function App() {
  const versions = [
    { id: 1, title: "CSS Global", path: "/css-global", desc: "Versão com estilos globais." },
    { id: 2, title: "CSS Modules", path: "/css-modules", desc: "Versão com CSS Modules." },
    { id: 3, title: "Tailwind CSS", path: "/tailwind", desc: "Versão com Tailwind CSS." },
    { id: 4, title: "Styled Components", path: "/styled-components", desc: "Versão com styled-components." },
  ];

  return (
    <Routes>
      {/* Página inicial */}
      <Route
        path="/"
        element={
          <div className="container">
            <header className="title">
              <h1>Atividade 6 - Mini Loja</h1>
              <p>
                Atividade +pra TI: estilização em React utilizando 4 técnicas:
                CSS Global, CSS Modules, Tailwind e Styled Components. Cada
                versão possui design responsivo, dark mode e interações.
              </p>
            </header>

            <div className="grid">
              {versions.map((version) => (
                <div key={version.id} className="card">
                  <h2>{version.title}</h2>
                  <p>{version.desc}</p>
                  <Link to={version.path} className="btn">
                    Visualizar
                  </Link>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Rotas para cada versão */}
      <Route path="/css-global" element={<CSSGlobalHome />} />
      <Route path="/css-modules" element={<CSSModulesHome />} />
      <Route path="/tailwind" element={<TailwindHome />} />
      <Route path="/styled-components" element={<StyledComponentsHome />} />
    </Routes>
  );
}
