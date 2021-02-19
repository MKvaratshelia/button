import React, { useState } from "react";
import "./Button.css";

export const Button = () => {
  const [state, setState] = useState(false);

  const onClickHandler = () => {
    setState(!state);
  };

  return (
    <>
      <button
        style={
          state ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
        className="button"
        onClick={onClickHandler}
      >
        {state ? "ON" : "OFF"}
      </button>
    </>
  );
};
