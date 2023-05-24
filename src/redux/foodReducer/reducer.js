import {
  FOOD_REQUEST_PENDING,
  FOOD_REQUEST_SUCCESS
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  food: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FOOD_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case FOOD_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        food: payload.data,
      };
    default:
      return state;
  }
};
