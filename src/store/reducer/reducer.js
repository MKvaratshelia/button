import { GET_BUTTON_STATE, BUTTON_OFF, BUTTON_ON } from "../types/types";

const initialState = {
  buttonState: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUTTON_STATE:
      return { ...state, buttonState: action.payload };
    case BUTTON_ON:
      return { ...state, buttonState: action.payload };
    case BUTTON_OFF:
      return { ...state, buttonState: action.payload };
    default:
      return state;
  }
};
