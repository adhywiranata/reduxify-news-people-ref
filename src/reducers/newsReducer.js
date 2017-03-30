import * as ActionTypes from '../actions/constants'

const initialState = { news: [], newsFilter: [] }

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.GET_NEWS:
        return Object.assign({}, state, {
          news: action.payload,
          newsFilter: action.payload
        })
      case ActionTypes.GET_NEWS_FILTER: {
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

export default newsReducer;
