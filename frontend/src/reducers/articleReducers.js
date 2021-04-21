import {
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
} from '../constants/articleConstants'

export const articleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return state
    case ARTICLE_LIST_SUCCESS:
      return { articles: action.payload }
    case ARTICLE_LIST_FAIL:
      return { error: action.payload }
    default:
      return state
  }
}
