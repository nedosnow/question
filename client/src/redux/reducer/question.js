import {EACH_QUESTION } from "../types";


export const questionsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case EACH_QUESTION: {
      const { questions } = payload;
      return questions;
    }
    default: {
      return state;
    }
  }
};

export default questionsReducer
