import React, {Component} from 'react';

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: props.initialAge,
      homeLink: 'Change Link'
    }
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }

  render() {
    return (
      <div>
        <p>in a new component</p>
        <p>Your name {this.props.name}</p>
        <p>Your name {this.state.age}</p>
        <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older</button>
        <br />
        {this.props.children}
        <br />
        <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
        <br />
        <br />
        <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
        <br />
        <br />
      <input type='text' />
    </div>
    )
  }
}

Home.propTypes = {
  name: React.PropTypes.string.isRequired,
  initialAge: React.PropTypes.number.isRequired,
  greet: React.PropTypes.func
};
