import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import  { robots } from './robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }  
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const FilteredRobots = this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className = 'tc'> 
        <h1>RoboFriends</h1>
        <SearchBar searchChange={this.onSearchChange}/>
        <CardList robots={FilteredRobots}/>
      </div>
    );
  }
}

export default App;

