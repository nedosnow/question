import {TARGET_QUESTION} from "../types"
export const addQuestion = (number)=>({
  type: TARGET_QUESTION,
  payload: {number},
})
