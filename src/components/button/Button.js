import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonActive } from "../../store/actions/actions";
import "./Button.css";

export const Button = () => {
  const button = useSelector((state) => state.button);
  const dispatch = useDispatch();

  const onClickButton = () => {
    dispatch(buttonActive());
  };

  return (
    <>
      <button
        style={
          button ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
        className="button"
        onClick={onClickButton}
      >
        {button ? "ON" : "OFF"}
      </button>
    </>
  );
};
