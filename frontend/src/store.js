import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { articleListReducer } from './reducers/articleReducers'

const reducer = combineReducers({
  articleList: articleListReducer,
})

const initialSate = {}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialSate,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
