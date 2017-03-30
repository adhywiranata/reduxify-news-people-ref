import { combineReducers } from 'redux'

import newsReducer from './newsReducer'
import peopleReducer from './peopleReducer'

const rootReducer = combineReducers({
  news: newsReducer,
  people: peopleReducer,
})

export default rootReducer;
