const initialState = [{
  name: 'luke'
}]

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PEOPLE":
        return action.payload
      default: return state
  }
}

export default peopleReducer;
