import React, {Component} from 'react';
import {connect} from 'react-redux'

import { fetchPeople } from './actions';

class Peoples extends Component {
  componentDidMount() {
    this.props.fetchPeople()
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
    fetchPeople: () => dispatch(fetchPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples)
