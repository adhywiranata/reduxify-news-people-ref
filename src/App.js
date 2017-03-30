import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// npm
import {BrowserRouter, Route} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// component
import ShowList from './ShowList'
import Peoples from './Peoples'
import DummyComp from './DummyComp'

class App extends Component {
    render() {
        return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>
                    <BrowserRouter>
                        <div>
                            <Route exact path='/' component={DummyComp}/>
                            <Route path='/ShowList' component={ShowList}/>
                            <Route path='/peoples' component={Peoples}/>
                        </div>
                    </BrowserRouter>
                </div>
        );
    }
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     news: state.newsReducer
//   }
// }









// // component
// import { Header } from './components/Header'
// import { Home } from './components/Home'
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: [],
//             searchKeyValue: "",
//             homeLink: "Home",
//             dataFilter: []
//         }
//     }
//
//     onGreet() {
//       alert('Hello')
//     }
//
//     onChangeLinkName(newName) {
//       this.setState({
//         homeLink: newName
//       })
//     }
//
// <div className="container">
//   <div className="row">
//     <div className="col-xs-10 col-xsoffset-1">
//       <Header homeLink={this.state.homeLink} />
//     </div>
//   </div>
//
//   <div className="row">
//     <div className="col-xs-10 col-xsoffset-1">
//       <Home
//         name={"max"}
//         initialAge={28}
//         greet={this.onGreet}
//         changeLink={this.onChangeLinkName.bind(this)}
//       />
//       <p>Paragrap baru yang dimasukkan ke dalam component children</p>
//     </div>
//   </div>
// </div>
