
const initialState = {
  isSideBarVisible: false
}

export default function sidebarReducer(state = initialState, action) {
  if (action.type === "TOGGLE_SIDEBAR") {
    const value = !!action.payload
    return {
      ...state,
      isSideBarVisible: !state.isSideBarVisible
    }
  }
  return state
}
