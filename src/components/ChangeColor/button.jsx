import React from "react";
import Button from "react-bootstrap/Button";

export default function MyButton({ handleColor }) {
  const btnArray = [
    { title: "red", variant: "outline-danger", color: "#dc3545" },
    { title: "green", variant: "outline-success", color: "#198754" },
    { title: "black", variant: "outline-dark", color: "#212529" },
    { title: "blue", variant: "outline-primary", color: "#0d6efd" },
    { title: "yellow", variant: "outline-warning", color: "#ffc107" }
  ];

  return (
    <React.Fragment>
      {btnArray.map((element) => (
        <Button
          variant={element.variant}
          onClick={() => handleColor(element.color)}
        >
          {element.title}
        </Button>
      ))}
    </React.Fragment>
  );
}
