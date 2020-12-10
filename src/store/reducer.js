import { SUCCESS, FAILURE } from "./actions"

export const initialState = {
  stateprop1: false,
}

export const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS.type:
      return {
        ...state,
        stateprop1: true,
      }
    case FAILURE.type:
      return {
        ...state,
        stateprop1: false,
      }
    default:
      console.log(state)
      return state;
  }
}
