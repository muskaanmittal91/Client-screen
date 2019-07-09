import { CHANGE_BODY } from "./actionTypes"

const changeBody = body => {
  return dispatch => {
    dispatch({
      type: CHANGE_BODY,
      payload: body
    })
  }
}

export { changeBody }
