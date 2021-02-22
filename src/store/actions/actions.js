import { GET_BUTTON_STATE } from "../types/types";
import axios from "axios";

export const getButtonState = (button) => {
  return {
    type: GET_BUTTON_STATE,
    payload: button,
  };
};

export const getState = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://react-button-26d76-default-rtdb.firebaseio.com/state.json"
      );
      const data = await response.data.button;
      dispatch(getButtonState(data));
    } catch (e) {
      console.log(e);
    }
  };
};
export const buttonOn = () => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        "https://react-button-26d76-default-rtdb.firebaseio.com/state.json",
        { button: true }
      );
      const data = await response.data.button;
      dispatch(getButtonState(data));
    } catch (e) {
      console.log(e);
    }
  };
};
export const buttonOff = () => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        "https://react-button-26d76-default-rtdb.firebaseio.com/state.json",
        { button: false }
      );
      const data = await response.data.button;
      dispatch(getButtonState(data));
    } catch (e) {
      console.log(e);
    }
  };
};
