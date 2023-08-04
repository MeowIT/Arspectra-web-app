import React, { useEffect, useState } from "react";
import "../css/intro.css";
import InlineSVG from "react-inlinesvg";
import logo from "../svg/logo.svg";
import websiteLogo from "../svg/website-logo-title.svg";
import rectangle from "../svg/rectangle.svg";

const Intro: React.FC = () => {
  const [LogoOpacity, setLogoOpacity] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setLogoOpacity(1);
      const hideTimer = setTimeout(() => {
        setShowLogo(true);
      }, 800);
      return () => clearTimeout(hideTimer);
    }, 500);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (showLogo) {
      const opacityTimer = setTimeout(() => {
        setLogoOpacity(0);
        const showTimer = setTimeout(() => {
          setLogoOpacity(1);
        }, 100);
        return () => clearTimeout(showTimer);
      }, 0);
      return () => clearTimeout(opacityTimer);
    }
  }, [showLogo]);

  useEffect(() => {
    if (showLogo) {
      const showTimer = setTimeout(() => {
        setShowSecondary(true);
      }, 500);
      return () => clearTimeout(showTimer);
    }
  }, [showLogo]);

  return (
    <div className="intro-container">
      {/* Logo SVG */}
      <div
        className={`svg-wrapper-logo ${
          showLogo ? "show-logo-svg" : "hide-logo-svg"
        }`}
        style={{ opacity: LogoOpacity, transition: "opacity 1s ease" }}
      >
        <InlineSVG src={logo} />
      </div>

      {/* Second SVG */}
      <div
        className={`svg-wrapper-second ${
          showSecondary ? "show-second-svg" : "hide-second-svg"
        }`}
      >
        {showSecondary && <InlineSVG src={websiteLogo} />}
      </div>

      {/* White Rectangle */}
      <div
        className={`white-rectangle ${
          showSecondary ? "show-white-rectangle" : "hide-white-rectangle"
        }`}
      >
        {showSecondary && <InlineSVG src={rectangle} />}
      </div>
    </div>
  );
};

export default Intro;
