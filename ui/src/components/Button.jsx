import React from "react";

function Button({ text, color, func }) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={func}>
      {text}
    </button>
  );
}

export default Button;
