import "./index.css";

import BasicProps from "./components/BasicProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ThemeToggler, { ThemeProvider } from "./components/ThemeToggler.jsx";

import { FiBook, FiUsers, FiLayers, FiFlag, FiSun } from "react-icons/fi";

const sections = [
  { id: "basic", label: "Basic props", icon: <FiBook /> },
  { id: "children", label: "Children props", icon: <FiUsers /> },
  { id: "complex", label: "Complex props", icon: <FiLayers /> },
  { id: "ref", label: "Ref props", icon: <FiFlag /> },
  { id: "theme", label: "Theme props", icon: <FiSun /> },
];

const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="brand">PropsDemo</div>
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            <span>{section.icon}</span>
            <span>{section.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

function AppContent() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <header>
        <h1>React Props Explained</h1>
        <p>A comprehensive guide to understanding props in React</p>
        <div className="header-badge" />
      </header>

      <div className="container">
        <div className="space-y-8">
          <section id="basic" className="section scroll-offset">
            <BasicProps />
          </section>

          <section id="children" className="section scroll-offset">
            <ChildrenProps />
          </section>

          <section id="complex" className="section scroll-offset">
            <ComplexProps />
          </section>

          <section id="ref" className="section scroll-offset">
            <RefProps />
          </section>

          <section id="theme" className="section scroll-offset">
            <ThemeToggler />
          </section>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
