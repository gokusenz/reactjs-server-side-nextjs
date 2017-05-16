import { getPostsApi } from "../api/posts";
import {
  GET_LIST_SUCCESS,
  GET_LIST_FAILED,
} from '../constants/List';

export const getList = (lists = []) => {
  return {
    type: GET_LIST_SUCCESS,
    lists
  };
}

export const getAsyncLists = () => {
  return async dispatch => {
    try {
      const queryResponse = await getPostsApi();
      dispatch(getList(queryResponse.data));
    } catch (err) {
      console.error(err);
    }
  };
}
