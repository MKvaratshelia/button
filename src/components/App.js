import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Button } from "./button/Button";
import { getState, buttonOff, buttonOn } from "../store/actions/actions";

function App() {
  const state = useSelector((state) => state.buttonState);
  const dispatch = useDispatch();
  dispatch(getState());

  const onClickHandler = () => {
    state ? dispatch(buttonOff()) : dispatch(buttonOn());
  };
  return (
    <div className="App">
      <Button state={state} onClickHandler={onClickHandler} />
    </div>
  );
}

export default App;
