import React from "react";

const Button = ({ text, btnText, icon, onclick }) => {
  return (
    <div>
      <button className={!text ? "btn-empty" : btnText} onClick={onclick}>
        {!text ? "click me" : text} {text ? icon : ""}
      </button>
    </div>
  );
};

export default Button;
