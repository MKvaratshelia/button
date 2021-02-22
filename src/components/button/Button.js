import React from "react";
import "./Button.css";

export const Button = ({ state, onClickHandler }) => {
  return (
    <>
      <button
        onClick={onClickHandler}
        style={
          state ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
        className="button"
      >
        {state ? "ON" : "OFF"}
      </button>
    </>
  );
};
