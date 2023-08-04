import React, { useState } from "react";
import "../css/buttons.css";
import buttonsData from "../data/buttons.json";

interface ButtonProps {
  id: number | string; // Allow id to be either number or string
  icon: string;
  icon2?: string;
  effect: string;
  borderStyle?: string;
  borderColor?: string;
  backgroundColor?: string;
}

interface ButtonData extends ButtonProps {
  id: number;
}

const Button: React.FC<ButtonProps> = ({ id, icon, icon2, effect }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      id={`btn-${id}`}
      className={`btn ${effect} ${isClicked ? "clicked" : ""} ${
        isHovered ? "hover-effect" : ""
      } ${id === 5 ? "special-button" : ""}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && icon2 ? (
        <img src={icon2} alt="Button Icon" />
      ) : (
        <img
          src={icon}
          alt="Button Icon"
          style={{ opacity: isClicked ? 1 : 0.6 }}
        />
      )}
    </button>
  );
};

const Buttons: React.FC = () => (
  <div>
    {(buttonsData as ButtonData[]).map(({ id, icon, effect, icon2 }) => (
      <Button key={id} id={id} icon={icon} icon2={icon2} effect={effect} />
    ))}
  </div>
);

export default Buttons;
