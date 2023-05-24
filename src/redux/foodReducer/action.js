import {
  FOOD_REQUEST_PENDING,
  FOOD_REQUEST_SUCCESS
} from "./actionType";
import data from "../db.json";

export const getfoods = () => (dispatch) => {
  dispatch({ type: FOOD_REQUEST_PENDING });
  let obj = {
    data: data.food
  };
  dispatch({ type: FOOD_REQUEST_SUCCESS, payload: obj });
};
