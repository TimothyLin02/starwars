import React, {Component} from 'react';
import './App.css';
import StarWarsComponent from './components/StarWarsComponent';


class StarWarsContainer extends Component {
  constructor() {
    super()
    this.state = { //use state to save data within component
      categories: [],
      srcs: [],
      showTable: false,
      data: {}
    } 

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log("in component did mount")
    fetch("https://swapi.dev/api/?format=json")
      .then(response => response.json())
      .then(data => 
        this.setState(prevState => {
          return {
            ...prevState,
            categories: Object.keys(data),
            srcs: Object.values(data),
          }
        })
      )
    //console.log("state after componentDidMount: " + JSON.stringify(this.state))
  }

  handleClick(src) {
    console.log("in handle click")
    fetch(src)
    .then(response => response.json())
    .then(data => 
      this.setState(prevState => {
        return {
          ...prevState,
          showTable: true,
          data: data
        }
      })
    )
  }

  render() {
    return (
      <StarWarsComponent 
        categories = {this.state.categories}
        srcs = {this.state.srcs}
        handleClick = {this.handleClick}
        showTable = {this.state.showTable}
        data = {this.state.data}
      />
    );
  }
}

export default StarWarsContainer;
