import { GET_BUTTON_STATE } from "../types/types";

export const buttonActive = () => {
  return {
    type: GET_BUTTON_STATE,
  };
};
