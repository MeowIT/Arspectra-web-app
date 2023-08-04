import React, { useState, useEffect } from "react";
import "./App.css";
import Intro from "./components/intro";
import Menu from "./components/menu";
import Buttons from "./components/buttons";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [menuState, setMenuState] = useState("closed");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = () => {
    if (menuState === "open") {
      setMenuState("closing");
      setTimeout(() => {
        setMenuState("closed");
      }, 500);
    } else {
      setMenuState("open");
    }
  };

  return (
    <div className="App">
      {showIntro ? (
        <Intro />
      ) : (
        <>
          <Menu onMenuClick={handleMenuClick} />
          {menuState !== "closed" && (
            <div className={`buttons-wrapper ${menuState}`}>
              <Buttons />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
