import React from "react";
import "../css/menu.css";

interface MenuProps {
  onMenuClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuClick }) => {
  return (
    <div className="menu" onClick={onMenuClick}>
      <div className="menu-line">
        <div className="menu-circle"></div>
      </div>
      <div className="menu-line">
        <div className="menu-circle"></div>
      </div>
      <div className="menu-line">
        <div className="menu-circle"></div>
      </div>
    </div>
  );
};

export default Menu;
