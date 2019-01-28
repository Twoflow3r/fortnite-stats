import React, { Component } from 'react';
import './App.css';

import {PATH_BASE,PATH_TYPE,PATH_USER_DATA,PLATPHORM_USER,DEFAULT_QUERY} from "./constants/";
import Statistic from "./stats/";



class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      searchQuery: DEFAULT_QUERY,
      uid: "",
      value: "",
      stats: 0,
      totals: 0
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.setSearchPlayerStatsFull = this.setSearchPlayerStatsFull.bind(this);
    this.fetchSearchPlayer = this.fetchSearchPlayer.bind(this); 
    this.fetchSearchPlayerUid = this.fetchSearchPlayerUid.bind(this); 
    this.setSearchPlayerStatsFull = this.setSearchPlayerStatsFull.bind(this); 
  }

  handleChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleSubmit(event) {
    const {
      searchQuery
    } = this.state;
    this.fetchSearchPlayerUid(searchQuery);
    event.preventDefault();
  }

  setSearchPlayerStats(uid) {
    this.setState({
      uid
    });
  }

  setSearchPlayerStatsFull(result) {
    this.setState({
      result
    });
    const {
      stats
    } = this.state.result;
    const {
      totals
    } = this.state.result;
    this.setState({
      stats,
      totals
    });

  }


  fetchSearchPlayerUid() {
    const {
      searchQuery
    } = this.state;

    fetch(`${PATH_BASE}${PATH_TYPE}${searchQuery}`)
      .then(response => response.json())
      .then(response => response.uid)
      .then(uid => this.setSearchPlayerStats(uid))
      .then(result => this.fetchSearchPlayer())
      .catch(error => error);
  }

  fetchSearchPlayer() {
    const {
      uid
    } = this.state;
    fetch(`${PATH_BASE}${PATH_USER_DATA}${uid}${PLATPHORM_USER[0]}`)
      .then(response => response.json())
      .then(result => this.setSearchPlayerStatsFull(result))
      .catch(error => error);
    console.log(this.state);
  }
  
  render() {  
    const {stats, totals } = this.state;
    console.log(this.state);
    console.log(this.state.result);
    console.log(this.state.stats);
    console.log(this.state.totals);
    return (
      <div className="App">
        <header className="App-header">
         Fortnite Stats
         <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={this.state.searchQuery} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
       <span>
        {this.state.result.username}
        </span>
        <span>{this.state.result.uid}</span>
      <Statistic stats = {stats} />

        </header>
      </div>
    );
  }
}

export default App;
