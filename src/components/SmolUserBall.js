import React from "react";
import "./SmolUserBall.css";
import extractPrefix from "../utils/extractPrefix.js";

function SmolUserBall({ name }) {
  return (
    <span className="smoluserball">
      <p>{extractPrefix(name)}</p>
    </span>
  );
}

export default SmolUserBall;
