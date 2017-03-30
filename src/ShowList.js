import React, {Component} from 'react';
import {connect} from 'react-redux'

import { fetchNews, getNewsFilter } from './actions';
// FUNCTION
import {getData} from './helper/getData.js'

class ShowList extends Component {
  constructor(props) {
      super(props)
      this.state = {
          data: [],
          dataFilter: []
      }
  }

  componentDidMount() {
    this.props.fetchNews()
  }

  handleChange(event) {
    console.log(this.state.data);
    let checkTitle = (data) => {
        var pattern = new RegExp(event.target.value,'gi');
        if (pattern.test(data.title)) {
          return true
        }
    }
    this.setState({dataFilter: this.state.data.filter(checkTitle)})
    // console.log(this.state.dataFilter);
  }

  render() {
    console.log(this.props.newsFilter);
    return (
      <div>
        <ul>
            {this.props.newsFilter.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                )
            })}
        </ul>
          <form>
              <input
                type="text"
                value={this.state.searchKeyValue}
                onChange={(event) => this.props.getNewsFilter(event.target.value)}
                placeholder="Search something?"
              />
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsFilter: state.news.newsFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => dispatch(fetchNews()),
    getNewsFilter: (result) => dispatch(getNewsFilter(result))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (ShowList)
