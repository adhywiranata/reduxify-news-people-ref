export const getPeople = (results) => {
  return {
    type: "GET_PEOPLE",
    payload: results
  }
}

export const fetchPeople = () => {
  return (dispatch) => {
    fetch('http://swapi.co/api/people', {
      method: 'get',
    })
    .then(result => {
      return result.json()
    })
    .then(data => {
      dispatch(getPeople(data.results));
    })
  }
}
