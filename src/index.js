import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

// REDUCER
const newsReducer = (state = {
  news: [],
  newsFilter: []
}, action) => {
    switch (action.type) {
      case "GET_NEWS":
        return Object.assign({}, state, {news: action.payload, newsFilter: action.payload})
      case "GET_NEWS_FILTER": {
        let checkTitle = (data) => {
          var pattern = new RegExp(action.payload,'gi');
          if (pattern.test(data.title)) {
            return true
            }
          }
        let resultFilter = state.news.filter(checkTitle)
        return Object.assign({}, state, {newsFilter: resultFilter});
      }
      default: return state
  }
}

const peopleReducer = (state = [{
  name: 'luke'
}], action) => {
    switch (action.type) {
      case "GET_PEOPLE":
        return action.payload
      default: return state
  }
}
// STORE
const rootReducer = combineReducers({
  news: newsReducer,
  people: peopleReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
