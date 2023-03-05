import { useState } from "react";
import ShapeButton from "./ShapeButton";
import "./ChangeShape.css";

export default function ChangeShape() {
  const [shapName, setShapename] = useState("circle");
  const handleShape = (selectedShape) => {
    setShapename(selectedShape);
  };
  return (
    <div className="change-color">
      <div className="banner">
        <h1>Choose any shape</h1>
        <h2>Let's start to see some magic happen!</h2>
        <div className={`color-display ${shapName}`}></div>
      </div>
      <div className="button-container">
        <ShapeButton handleShape={handleShape} />
      </div>
    </div>
  );
}
