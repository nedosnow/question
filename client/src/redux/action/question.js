import { EACH_QUESTION } from "../types";

export const allQuestions = (questions) => ({
  type: EACH_QUESTION,
  payload: {
    questions,
  },
});
