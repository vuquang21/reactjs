import React from "react";
import "../components/Style.css";

const Button = (props) => {
  const { title } = props;
  return (
    <div className="button">
      <button className="btn btn-border">
        <span>{title}</span>
      </button>
    </div>
  );
};

export default Button;
