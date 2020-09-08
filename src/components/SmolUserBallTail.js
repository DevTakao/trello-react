import React from "react";
import "./SmolUserBallTail.css";

function SmolUserBallTail({ count }) {
  return (
    <span className="tail">
      <p>+{count}</p>
    </span>
  );
}

export default SmolUserBallTail;
