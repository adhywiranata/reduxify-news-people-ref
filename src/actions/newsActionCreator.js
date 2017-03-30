import * as ActionTypes from './constants'

export const getNews = results => ({
  type: ActionTypes.GET_NEWS,
  payload: results
});

export const getNewsFilter = result => ({
  type: ActionTypes.GET_NEWS_FILTER,
  payload: result
});

export const fetchNews = () => {
  return (dispatch) => {
    fetch('https://hn.algolia.com/api/v1/search?query=react&query=redux&tags=story', {
      method: 'get',
    })
    .then(result => {
      return result.json()
    })
    .then(data => {
      dispatch(getNews(data.hits));
    })
  }
}
