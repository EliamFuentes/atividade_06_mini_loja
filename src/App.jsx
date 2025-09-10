import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

export default function App() {
  const versions = [
    { id: 1, title: "CSS Global", path: "/css-global", desc: "Versão com estilos globais." },
    { id: 2, title: "CSS Modules", path: "/css-modules", desc: "Versão com CSS Modules." },
    { id: 3, title: "Tailwind CSS", path: "/tailwind", desc: "Versão com Tailwind CSS." },
    { id: 4, title: "Styled Components", path: "/styled-components", desc: "Versão com styled-components." },
  ];

  return (
    <Routes>
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

      <Route path="/css-global" element={<div>Versão CSS Global</div>} />
      <Route path="/css-modules" element={<div>Versão CSS Modules</div>} />
      <Route path="/tailwind" element={<div>Versão Tailwind CSS</div>} />
      <Route path="/styled-components" element={<div>Versão Styled Components</div>} />
    </Routes>
  );
}