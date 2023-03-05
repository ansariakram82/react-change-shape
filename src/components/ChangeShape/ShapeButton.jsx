import React from "react";
import Button from "react-bootstrap/Button";

export default function ShapeButton({ handleShape }) {
  const shapeArray = [
    { title: "circle", variant: "outline-danger", className: "circle" },
    { title: "square", variant: "outline-success", className: "square" },
    { title: "reactangle", variant: "outline-dark", className: "reactangle" },
    { title: "triangle", variant: "outline-primary", className: "triangle" }
  ];

  return (
    <React.Fragment>
      {shapeArray.map((element) => (
        <Button
          variant={element.variant}
          onClick={() => handleShape(element.className)}
        >
          {element.title}
        </Button>
      ))}
    </React.Fragment>
  );
}
