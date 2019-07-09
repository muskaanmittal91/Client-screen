import axios from "axios";
import { END_POINT } from "../../../config";

import { LOG_IN } from "../actionTypes";

const logIn = data => {
  return dispatch => {
    dispatch({
      type: LOG_IN,
      payload: {
        status: "PENDING"
      }
    });

    axios
      .post(END_POINT.LOG_IN, data)
      .then(res =>
        dispatch({
          type: LOG_IN,
          payload: {
            status: "SUCCESS",
            data: res.data
          }
        })
      )
      .catch(() =>
        dispatch({
          type: LOG_IN,
          payload: {
            status: "FAILED"
          }
        })
      );
  };
};

export default logIn;
