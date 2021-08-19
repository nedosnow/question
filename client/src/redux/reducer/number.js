import { TARGET_QUESTION } from "../types";


export const numberReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    
      case TARGET_QUESTION: {
        const { number } = payload;
        return number
      }

    default: {
      return state;
    }
  }
};

export default numberReducer
