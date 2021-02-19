import { GET_BUTTON_STATE } from "../types/types";

const initialState = {
  button: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUTTON_STATE:
      return { ...state, button: !state.button };

    default:
      return state;
  }
};
