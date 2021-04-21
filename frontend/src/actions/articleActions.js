import {
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
} from '../constants/articleConstants'
import axios from 'axios'

export const listArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_LIST_REQUEST })

    const { data } = await axios.get('/api/articles')
    console.log('ListArticles: ' + JSON.stringify(data))
    dispatch({ type: ARTICLE_LIST_SUCCESS })
  } catch (error) {
    dispatch({
      type: ARTICLE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
