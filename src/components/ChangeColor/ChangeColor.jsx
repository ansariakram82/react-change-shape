import { useState } from "react";
import "./ChangeColor.css";
import MyButton from "./button";

export default function ChangeColor() {
  const [colorName, setColorname] = useState("#dc3545");
  const handleColor = (selectedColor) => {
    setColorname(selectedColor);
  };
  return (
    <div className="change-color">
      <div className="banner">
        <h1>Choose any color</h1>
        <h2>Let's start to see some magic happen!</h2>
        <div
          className="color-display"
          style={{ background: colorName, borderColor: colorName }}
        ></div>
      </div>
      <div className="button-container">
        <MyButton handleColor={handleColor} />
      </div>
    </div>
  );
}
