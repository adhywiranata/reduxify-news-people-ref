import React, {Component} from 'react';
import {connect} from 'react-redux'
// FUNCTION
import {getData} from './helper/getData.js'

class Peoples extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // CALLBACK
    let saveData = (data) => {
      console.log(data.results)
        this.props.getPeople(data.results)
    }
    getData('http://swapi.co/api/people',saveData)
  }

  render() {
    return (
      <div>
        <ul>
            {this.props.people.map((people, index) => {
                return (<li key={index}> {people.name} </li>)
            })}
        </ul>
      </div>
    )
  }
}
// INIT STATE & DISPATCH FROM REDUX
const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: (results) => dispatch({
      type: "GET_PEOPLE",
      payload: results
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples)
