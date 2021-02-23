import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getState, buttonOff, buttonOn } from "../../store/actions/actions";
import "./Button.css";

export const Button = () => {
  const dispatch = useDispatch();
  dispatch(getState());

  const state = useSelector((state) => state.buttonState);

  const onClickHandler = () => {
    state ? dispatch(buttonOff()) : dispatch(buttonOn());
  };

  return (
    <>
      {state === null ? null : (
        <button
          onClick={onClickHandler}
          style={
            state ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
          className="button"
        >
          {state ? "ON" : "OFF"}
        </button>
      )}
    </>
  );
};
