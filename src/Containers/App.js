import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }  
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> {this.setState({ robots: users })});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const FilteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
      return !robots.length ?
        <h1>Loading</h1> :
        (
          <div className = 'tc'> 
            <h1 className='f1'>RoboFriends</h1>
            <SearchBar searchChange={this.onSearchChange}/>
            <Scroll>
              <ErrorBoundry>
                <CardList robots={FilteredRobots}/>
              </ErrorBoundry>
            </Scroll>
          </div>
    );
  }
}


export default App;


