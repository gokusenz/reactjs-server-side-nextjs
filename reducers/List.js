import { GET_LIST_SUCCESS } from "../constants/List";

const initialState = []

 const settingLists = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return Object.assign([], ...state, action.lists);
    default:
      return state;
  }
}

export default settingLists
