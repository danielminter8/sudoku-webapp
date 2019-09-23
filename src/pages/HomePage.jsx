import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.gif';
import '../styling/App.css';
import NavBar from '../components/nav-bar'
import logo from '../styling/images/logo.gif';


export default class HomePage extends React.Component {
  state ={
    selected: ""
  }

  handleChange = event => {
    let selected = event.target.value;
    this.setState({ selected })
  }

  render() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row justify-content-center">
          <div className="button">
            <div class="input-group">
              <select class="custom-select" onClick={this.handleChange}>
                <option selected>Choose Level</option>
                <option value="easy">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="hard">Hard</option>
                <option value="expert">Expert</option>
              </select>
              <div class="input-group-append">
              <Link to={`/new-game/${this.state.selected}`}><button class="btn btn-warning btm-md">Start Game</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}
