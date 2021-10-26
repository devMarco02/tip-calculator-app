import "./stylesheets/main.scss";
import Calculator from "./components/Calculator";
import { Logo } from "./components/Icons";

function App() {
  return (
    <main>
      <header className="header">
        <Logo />
      </header>

      <Calculator />

      <div className="attribution">
        Challenge by{" "}
        <a
          className="attribution__link"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="attribution__link"
          href="https://devmarco02.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          devMarco
        </a>
        .
      </div>
    </main>
  );
}

export default App;
